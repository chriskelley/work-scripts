PID=`ps -A | grep -m1 'MacOS/After Effects' | awk '{print $1}'`

read -p "Are you sure? This will crash After Effects. [y][n] " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
    kill -segv ${PID};
fi

echo ''
exit