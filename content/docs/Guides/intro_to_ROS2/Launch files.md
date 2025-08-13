---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GZVJ5WM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzD92wmnznHy5CqmwIarT4Vlr46Ui6%2F6ZkDjo2ZhtojAiEAwG%2Fo8bwar36cGdEAwTc4fWCrWCEdTLGoFsddMURf%2F3wq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE9jsDTFSQyME7jqhCrcA1%2B%2F0AauDY8jVlUSrmZUO4fszhF1tBmLfcdS6lwnX3y2w0MYLkLESsTV617VxsrINbYF05p4KFvxi%2FfZsa%2B7tBcY1NcgPmkSJYKDeas9z7sMk%2Fg43YAL4FPF3x93PONyzIX7e1I9HQdFE0m%2BqTacQz9gOXREGhMLJWFQa%2BRF%2BgbAZYCY5YKdORKYtsPh0iR5n1rskP%2Fp06MlE%2F2yEpN39%2FsgVr6nt2n0EZmbkA0n462D9HXvowO3CqWJoO3fInaavj5ZD2NH3XoobPa%2FVp%2Fzz1dh9a0MTGP6a3mIu4l4gY8InJkV7VhOccVYSAhNZx%2BjizZC9Gk9bg2rReEy4%2Fn1X2LK8h0I5oMFw9qFBtmggWOjtcrQGEfyNXnvzylWSj7%2FXKixgq4ETpYZ4iq2thU3fp8dRt8YqP2aH4K2SR5SnUX%2BvKNVkbqd45sdAd%2Fd%2B06ftC8n9Z2bj5BqG3djLh4wyNSyfnEq7ISeYOL39IRmyHGbuFol%2FlvMBlVs3KzLTArxYHexVmUQcfoK77NsLPIcJw1RfAhAWhZKW7Fk1U0FEQOJnynqg64gGFa%2FuL2yhfEbIcvTsw4jwXl6EVLWOPgggcg2N5RhNSyK0mwq8KySnel3x%2Bgs%2BHpJJfkZC3XtMOzq88QGOqUBwINmtrDfNSgGQ%2BKvicPwq3wq4%2F%2FxNwrGSO8CCF5xfqOOJrwvyo5X7ruUkAZTmnrrgjhTIZDZYqnYfZhZRCdUFqQSLac99kokToIyLzm7%2F47Dbjkyjrd6V41piySkLWOvC8eScYrK5BeeM%2F3BTXll%2Fb2gj%2F99o7A%2BQPCIVNpvnRxEqp%2FlTJsHqvcwSCCT5%2BE%2F2LvmoKhbOqNaGhhdliCvv4c3O5Bl&X-Amz-Signature=6529e40c00d54cf009f900a78ece416a7ec47b271c65aac4b0aadb357f93734d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GZVJ5WM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzD92wmnznHy5CqmwIarT4Vlr46Ui6%2F6ZkDjo2ZhtojAiEAwG%2Fo8bwar36cGdEAwTc4fWCrWCEdTLGoFsddMURf%2F3wq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE9jsDTFSQyME7jqhCrcA1%2B%2F0AauDY8jVlUSrmZUO4fszhF1tBmLfcdS6lwnX3y2w0MYLkLESsTV617VxsrINbYF05p4KFvxi%2FfZsa%2B7tBcY1NcgPmkSJYKDeas9z7sMk%2Fg43YAL4FPF3x93PONyzIX7e1I9HQdFE0m%2BqTacQz9gOXREGhMLJWFQa%2BRF%2BgbAZYCY5YKdORKYtsPh0iR5n1rskP%2Fp06MlE%2F2yEpN39%2FsgVr6nt2n0EZmbkA0n462D9HXvowO3CqWJoO3fInaavj5ZD2NH3XoobPa%2FVp%2Fzz1dh9a0MTGP6a3mIu4l4gY8InJkV7VhOccVYSAhNZx%2BjizZC9Gk9bg2rReEy4%2Fn1X2LK8h0I5oMFw9qFBtmggWOjtcrQGEfyNXnvzylWSj7%2FXKixgq4ETpYZ4iq2thU3fp8dRt8YqP2aH4K2SR5SnUX%2BvKNVkbqd45sdAd%2Fd%2B06ftC8n9Z2bj5BqG3djLh4wyNSyfnEq7ISeYOL39IRmyHGbuFol%2FlvMBlVs3KzLTArxYHexVmUQcfoK77NsLPIcJw1RfAhAWhZKW7Fk1U0FEQOJnynqg64gGFa%2FuL2yhfEbIcvTsw4jwXl6EVLWOPgggcg2N5RhNSyK0mwq8KySnel3x%2Bgs%2BHpJJfkZC3XtMOzq88QGOqUBwINmtrDfNSgGQ%2BKvicPwq3wq4%2F%2FxNwrGSO8CCF5xfqOOJrwvyo5X7ruUkAZTmnrrgjhTIZDZYqnYfZhZRCdUFqQSLac99kokToIyLzm7%2F47Dbjkyjrd6V41piySkLWOvC8eScYrK5BeeM%2F3BTXll%2Fb2gj%2F99o7A%2BQPCIVNpvnRxEqp%2FlTJsHqvcwSCCT5%2BE%2F2LvmoKhbOqNaGhhdliCvv4c3O5Bl&X-Amz-Signature=d5fc3262917a5b635f534eff6d239d261037bcb608d99521d9890f4a457c1936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GZVJ5WM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzD92wmnznHy5CqmwIarT4Vlr46Ui6%2F6ZkDjo2ZhtojAiEAwG%2Fo8bwar36cGdEAwTc4fWCrWCEdTLGoFsddMURf%2F3wq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE9jsDTFSQyME7jqhCrcA1%2B%2F0AauDY8jVlUSrmZUO4fszhF1tBmLfcdS6lwnX3y2w0MYLkLESsTV617VxsrINbYF05p4KFvxi%2FfZsa%2B7tBcY1NcgPmkSJYKDeas9z7sMk%2Fg43YAL4FPF3x93PONyzIX7e1I9HQdFE0m%2BqTacQz9gOXREGhMLJWFQa%2BRF%2BgbAZYCY5YKdORKYtsPh0iR5n1rskP%2Fp06MlE%2F2yEpN39%2FsgVr6nt2n0EZmbkA0n462D9HXvowO3CqWJoO3fInaavj5ZD2NH3XoobPa%2FVp%2Fzz1dh9a0MTGP6a3mIu4l4gY8InJkV7VhOccVYSAhNZx%2BjizZC9Gk9bg2rReEy4%2Fn1X2LK8h0I5oMFw9qFBtmggWOjtcrQGEfyNXnvzylWSj7%2FXKixgq4ETpYZ4iq2thU3fp8dRt8YqP2aH4K2SR5SnUX%2BvKNVkbqd45sdAd%2Fd%2B06ftC8n9Z2bj5BqG3djLh4wyNSyfnEq7ISeYOL39IRmyHGbuFol%2FlvMBlVs3KzLTArxYHexVmUQcfoK77NsLPIcJw1RfAhAWhZKW7Fk1U0FEQOJnynqg64gGFa%2FuL2yhfEbIcvTsw4jwXl6EVLWOPgggcg2N5RhNSyK0mwq8KySnel3x%2Bgs%2BHpJJfkZC3XtMOzq88QGOqUBwINmtrDfNSgGQ%2BKvicPwq3wq4%2F%2FxNwrGSO8CCF5xfqOOJrwvyo5X7ruUkAZTmnrrgjhTIZDZYqnYfZhZRCdUFqQSLac99kokToIyLzm7%2F47Dbjkyjrd6V41piySkLWOvC8eScYrK5BeeM%2F3BTXll%2Fb2gj%2F99o7A%2BQPCIVNpvnRxEqp%2FlTJsHqvcwSCCT5%2BE%2F2LvmoKhbOqNaGhhdliCvv4c3O5Bl&X-Amz-Signature=a0cd4027205d244da7ab7a71095ddf2fc8155c52061f603b48e3b804dc4d5af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
