---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E6WQXF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD93PJth%2BPWfaPtgglNfWU4C%2FoKScBTqVIvNVdgm0ETNQIge8B%2F2nG10wAKHLn%2F5xoCBNB8hpPMtXV3Mqgx7FAgmZkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKL2W3LVgsTBwAEDGCrcA7vshUw90Fz87s2PuhXryfJ0t2p1cqdFsXrb9REneXTyJ%2BSmcYgDCWF1alaeOj05g0Qe6HHEtYuQ8j72eLcFbduXIcNmysQDZzCr%2FTECZHbdhFMoeFjfzpb4hzV8PT2o1%2BzXZbIFLLkSxu2vLVCZKymj%2BTAFprHlJiryBuV6w3AyAPwlEvnAYcuYSCxWhqF%2BQWKNYU5QUc2IvS9CrDJZZnaOMVA%2FyLb34Ve8gE9pZ1FrsionUFsNNGJEdOwB8A8UNshCaq2z0w0Ib8QBqnHjjt2E%2Bqnh9UW2Lqsc8%2FRxfBLt%2BaSPI2nj0%2FLBTU97S%2Fq%2FyiAhMh2AlG1DwOWrppdiM%2FTjt9jPF3kId74Rup0QpfuTtOnWpv13hC%2BQIPrFwR11X0S3gsX%2BPfbqQfqIOVlCyQUmUG3lf6%2BhVJcLong%2FfJbuMgYYHHXhAGRX3W92AkirdYZ68zTcs5xkMY4fLK7YvxyR9RANwNpMd4U%2B6f6DtRjV2Zc2PqIzhwLXd1kd1YuPlF6L25K%2B6Otr4tT2XmRVIBfn%2B2Mxo3afKjFsoWjnkGutIyQi5qikqBmcVLZcECyMvTX430nDOEeliqHdgSTmBHacJUuVIrJOgP59Fk0%2BuwtFpabLORrihGuALuMtMOyBjr0GOqUBd7l0S%2FS42XoBtpn4iIrlooXxoKmo2T3hS0Q9ihsWcrZDoMlTBpUzuGL1eiZOgLT9M%2FV6rx2UKEoJMkHwNTyVKYanzzPn8zXI93KkuE%2BnmNtUQ6Pu4ykVNo%2B4C%2FOeqJ8XG53pjzGi9qbeb7kJ23%2Bx2m0d1aqTcepZzzTx6ybN7kTHvEc1Msx9FZThcDMWQPkeCIpVD%2FtgpIfrC76gW%2FOREXFpQvtV&X-Amz-Signature=2e19bc5aa3668c175815c22d37de71e87fce1ba5d65b46b34007fe037e4ca7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E6WQXF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD93PJth%2BPWfaPtgglNfWU4C%2FoKScBTqVIvNVdgm0ETNQIge8B%2F2nG10wAKHLn%2F5xoCBNB8hpPMtXV3Mqgx7FAgmZkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKL2W3LVgsTBwAEDGCrcA7vshUw90Fz87s2PuhXryfJ0t2p1cqdFsXrb9REneXTyJ%2BSmcYgDCWF1alaeOj05g0Qe6HHEtYuQ8j72eLcFbduXIcNmysQDZzCr%2FTECZHbdhFMoeFjfzpb4hzV8PT2o1%2BzXZbIFLLkSxu2vLVCZKymj%2BTAFprHlJiryBuV6w3AyAPwlEvnAYcuYSCxWhqF%2BQWKNYU5QUc2IvS9CrDJZZnaOMVA%2FyLb34Ve8gE9pZ1FrsionUFsNNGJEdOwB8A8UNshCaq2z0w0Ib8QBqnHjjt2E%2Bqnh9UW2Lqsc8%2FRxfBLt%2BaSPI2nj0%2FLBTU97S%2Fq%2FyiAhMh2AlG1DwOWrppdiM%2FTjt9jPF3kId74Rup0QpfuTtOnWpv13hC%2BQIPrFwR11X0S3gsX%2BPfbqQfqIOVlCyQUmUG3lf6%2BhVJcLong%2FfJbuMgYYHHXhAGRX3W92AkirdYZ68zTcs5xkMY4fLK7YvxyR9RANwNpMd4U%2B6f6DtRjV2Zc2PqIzhwLXd1kd1YuPlF6L25K%2B6Otr4tT2XmRVIBfn%2B2Mxo3afKjFsoWjnkGutIyQi5qikqBmcVLZcECyMvTX430nDOEeliqHdgSTmBHacJUuVIrJOgP59Fk0%2BuwtFpabLORrihGuALuMtMOyBjr0GOqUBd7l0S%2FS42XoBtpn4iIrlooXxoKmo2T3hS0Q9ihsWcrZDoMlTBpUzuGL1eiZOgLT9M%2FV6rx2UKEoJMkHwNTyVKYanzzPn8zXI93KkuE%2BnmNtUQ6Pu4ykVNo%2B4C%2FOeqJ8XG53pjzGi9qbeb7kJ23%2Bx2m0d1aqTcepZzzTx6ybN7kTHvEc1Msx9FZThcDMWQPkeCIpVD%2FtgpIfrC76gW%2FOREXFpQvtV&X-Amz-Signature=702694cfbed6d5456d315baebc8ffc1cb4aaa0489bd6cc96f7cf72ad4deb2cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E6WQXF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD93PJth%2BPWfaPtgglNfWU4C%2FoKScBTqVIvNVdgm0ETNQIge8B%2F2nG10wAKHLn%2F5xoCBNB8hpPMtXV3Mqgx7FAgmZkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKL2W3LVgsTBwAEDGCrcA7vshUw90Fz87s2PuhXryfJ0t2p1cqdFsXrb9REneXTyJ%2BSmcYgDCWF1alaeOj05g0Qe6HHEtYuQ8j72eLcFbduXIcNmysQDZzCr%2FTECZHbdhFMoeFjfzpb4hzV8PT2o1%2BzXZbIFLLkSxu2vLVCZKymj%2BTAFprHlJiryBuV6w3AyAPwlEvnAYcuYSCxWhqF%2BQWKNYU5QUc2IvS9CrDJZZnaOMVA%2FyLb34Ve8gE9pZ1FrsionUFsNNGJEdOwB8A8UNshCaq2z0w0Ib8QBqnHjjt2E%2Bqnh9UW2Lqsc8%2FRxfBLt%2BaSPI2nj0%2FLBTU97S%2Fq%2FyiAhMh2AlG1DwOWrppdiM%2FTjt9jPF3kId74Rup0QpfuTtOnWpv13hC%2BQIPrFwR11X0S3gsX%2BPfbqQfqIOVlCyQUmUG3lf6%2BhVJcLong%2FfJbuMgYYHHXhAGRX3W92AkirdYZ68zTcs5xkMY4fLK7YvxyR9RANwNpMd4U%2B6f6DtRjV2Zc2PqIzhwLXd1kd1YuPlF6L25K%2B6Otr4tT2XmRVIBfn%2B2Mxo3afKjFsoWjnkGutIyQi5qikqBmcVLZcECyMvTX430nDOEeliqHdgSTmBHacJUuVIrJOgP59Fk0%2BuwtFpabLORrihGuALuMtMOyBjr0GOqUBd7l0S%2FS42XoBtpn4iIrlooXxoKmo2T3hS0Q9ihsWcrZDoMlTBpUzuGL1eiZOgLT9M%2FV6rx2UKEoJMkHwNTyVKYanzzPn8zXI93KkuE%2BnmNtUQ6Pu4ykVNo%2B4C%2FOeqJ8XG53pjzGi9qbeb7kJ23%2Bx2m0d1aqTcepZzzTx6ybN7kTHvEc1Msx9FZThcDMWQPkeCIpVD%2FtgpIfrC76gW%2FOREXFpQvtV&X-Amz-Signature=e44d8e454432f15aae2efcb188190e8fbde838b87b4e401f09c73310b1c51756&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
