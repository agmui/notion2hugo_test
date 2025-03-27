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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBDNUVC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf1jb2P9XxybZNznZvo8dO4YKBgNiGt8dd6TTMuiHJyAiEAg%2BHTebiHaxdqQE9cU39%2FSfX2MX5GVgVnhl1FsKJGDbwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDLibjohYijqkpWxySrcA7v454eAz8ZHh7npdWD0oLsWbjRMcNmCimyIkqpBV3xuL8niD6eInzlwAnXorvgfrM35NI09mk4e%2F99MYGudXoxpgg271n4M56xjPojR%2BaEFvGl8%2B9AjESlcMtmEBQobfsiC8cU9lPArB4%2B%2FVVUBxzcTAm%2F25LtB7cGGR3QdCNSeQXmryyaB4kucCh7NeVtz1J9h1S378UeN8jNxw7pLkzI0S2TK2Ax2w%2F86k4xNjnp3xyOKk2eSRoeRLJ9JCj0CwOJ57Nlo6pEcwtgzz3M840DwVGURfkpWlS0I%2B9rNOMW5fF9rNgZWlZEnczBmfLS1jT3myxtgY%2FBav4iVAN7hYA3dtTD8mYhdPe1iXAA7mpmeEN%2BUGZNNPwlZ9sNfggvpLWQCGTL6BCA11Ir7aikpc51TfzqW1JvdlJQBxqNUXZ2tnbAjEro9KDtKLOqCrf1kwPN6qe4LOnPJYWMIzR4Ycgj6sz%2FLp8dexKknWPK7uclk8OKuEeCh8LSrvmylxcnfZ7itay2jmuxMWPa6zyZ5QySFZWbeSxF6l11uwnr5VcwaZa0vACrwf0tXyFoL%2BHWvUB1q2X%2BvWNjm7e9QxI6mbb1S0wTRo1Z4MAhhUq2Mg%2FTrM%2B8XBP6FDJ7PMpcSMMHLk78GOqUBGUIe7h%2FIvopryKB4QTHnhiGYk6Whodnv1Mze10wc2mr163zRePVCGNoxHgK1P1LfzGjolodYBv42izti2e8jtPPMDQzJ17zfjlvYZCb6FqvYCzSWtpn9%2BtHJfjDxZTPs324zGP17sAygeZhzF3TuaAyEKsaQPrAQX350gGy0tZ0EFXklE13YRAN4fQH%2BZSPEt%2FZ53RREyLC1tPTTvjq0%2BtFr%2FZET&X-Amz-Signature=1139e25e402fef42f93e2eef0f13bc7270b61a5ac0f193d24f78c0473c5f91ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBDNUVC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf1jb2P9XxybZNznZvo8dO4YKBgNiGt8dd6TTMuiHJyAiEAg%2BHTebiHaxdqQE9cU39%2FSfX2MX5GVgVnhl1FsKJGDbwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDLibjohYijqkpWxySrcA7v454eAz8ZHh7npdWD0oLsWbjRMcNmCimyIkqpBV3xuL8niD6eInzlwAnXorvgfrM35NI09mk4e%2F99MYGudXoxpgg271n4M56xjPojR%2BaEFvGl8%2B9AjESlcMtmEBQobfsiC8cU9lPArB4%2B%2FVVUBxzcTAm%2F25LtB7cGGR3QdCNSeQXmryyaB4kucCh7NeVtz1J9h1S378UeN8jNxw7pLkzI0S2TK2Ax2w%2F86k4xNjnp3xyOKk2eSRoeRLJ9JCj0CwOJ57Nlo6pEcwtgzz3M840DwVGURfkpWlS0I%2B9rNOMW5fF9rNgZWlZEnczBmfLS1jT3myxtgY%2FBav4iVAN7hYA3dtTD8mYhdPe1iXAA7mpmeEN%2BUGZNNPwlZ9sNfggvpLWQCGTL6BCA11Ir7aikpc51TfzqW1JvdlJQBxqNUXZ2tnbAjEro9KDtKLOqCrf1kwPN6qe4LOnPJYWMIzR4Ycgj6sz%2FLp8dexKknWPK7uclk8OKuEeCh8LSrvmylxcnfZ7itay2jmuxMWPa6zyZ5QySFZWbeSxF6l11uwnr5VcwaZa0vACrwf0tXyFoL%2BHWvUB1q2X%2BvWNjm7e9QxI6mbb1S0wTRo1Z4MAhhUq2Mg%2FTrM%2B8XBP6FDJ7PMpcSMMHLk78GOqUBGUIe7h%2FIvopryKB4QTHnhiGYk6Whodnv1Mze10wc2mr163zRePVCGNoxHgK1P1LfzGjolodYBv42izti2e8jtPPMDQzJ17zfjlvYZCb6FqvYCzSWtpn9%2BtHJfjDxZTPs324zGP17sAygeZhzF3TuaAyEKsaQPrAQX350gGy0tZ0EFXklE13YRAN4fQH%2BZSPEt%2FZ53RREyLC1tPTTvjq0%2BtFr%2FZET&X-Amz-Signature=ed17a9cfe907883c4b966e84354e83825036cfa2605c6b05d2548d2aaf4e07ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DBDNUVC%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf1jb2P9XxybZNznZvo8dO4YKBgNiGt8dd6TTMuiHJyAiEAg%2BHTebiHaxdqQE9cU39%2FSfX2MX5GVgVnhl1FsKJGDbwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDLibjohYijqkpWxySrcA7v454eAz8ZHh7npdWD0oLsWbjRMcNmCimyIkqpBV3xuL8niD6eInzlwAnXorvgfrM35NI09mk4e%2F99MYGudXoxpgg271n4M56xjPojR%2BaEFvGl8%2B9AjESlcMtmEBQobfsiC8cU9lPArB4%2B%2FVVUBxzcTAm%2F25LtB7cGGR3QdCNSeQXmryyaB4kucCh7NeVtz1J9h1S378UeN8jNxw7pLkzI0S2TK2Ax2w%2F86k4xNjnp3xyOKk2eSRoeRLJ9JCj0CwOJ57Nlo6pEcwtgzz3M840DwVGURfkpWlS0I%2B9rNOMW5fF9rNgZWlZEnczBmfLS1jT3myxtgY%2FBav4iVAN7hYA3dtTD8mYhdPe1iXAA7mpmeEN%2BUGZNNPwlZ9sNfggvpLWQCGTL6BCA11Ir7aikpc51TfzqW1JvdlJQBxqNUXZ2tnbAjEro9KDtKLOqCrf1kwPN6qe4LOnPJYWMIzR4Ycgj6sz%2FLp8dexKknWPK7uclk8OKuEeCh8LSrvmylxcnfZ7itay2jmuxMWPa6zyZ5QySFZWbeSxF6l11uwnr5VcwaZa0vACrwf0tXyFoL%2BHWvUB1q2X%2BvWNjm7e9QxI6mbb1S0wTRo1Z4MAhhUq2Mg%2FTrM%2B8XBP6FDJ7PMpcSMMHLk78GOqUBGUIe7h%2FIvopryKB4QTHnhiGYk6Whodnv1Mze10wc2mr163zRePVCGNoxHgK1P1LfzGjolodYBv42izti2e8jtPPMDQzJ17zfjlvYZCb6FqvYCzSWtpn9%2BtHJfjDxZTPs324zGP17sAygeZhzF3TuaAyEKsaQPrAQX350gGy0tZ0EFXklE13YRAN4fQH%2BZSPEt%2FZ53RREyLC1tPTTvjq0%2BtFr%2FZET&X-Amz-Signature=695b5d29711ed2d0d5772206a8818a1100045026e5263887287315c8553571f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
