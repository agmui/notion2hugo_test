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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJWEFLK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC837NL803kUDzADxlhGoVJQGXwtYzOMJOrKp7xqCky4wIgDP6pvfHlo4AySXcNac0HpvCPTcBwicZdgwma2tpDhbQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhku%2B1FN3FrUg3uCSrcA08LIczGFmW41AARBag2Vv2BjhBYR2HqAWP4jzv648%2FYS%2BMSfffWmarp3W%2FOPquWkJWrjwVgvIKnzME06iY0S4%2BYQMhBXO8UERz%2BOwnKIchZcnelpJ%2FmKsmjgaX1mf7Hf1elhYYwHCnEN9Z3iYqggWM6d56sCwo3vOHpAx6DKKsg6Zi46Fl7Y4mFWqSlQO4UpbpupfzolGTm5qT38DEaLH6qjqSsMSJ5ng1hWFnaJ88pkQ3Rb2wjDCaZWEkt89e%2FbvxXpR1PnDSUsj4Zhqj8KAeaMBCv53WC24DdkrP97RDHHVEgLnDrnMxj45OpyBe7%2Faij6u24FayZ9n9bOiVZayG9lGSri7w34QzU%2BneclLF58YBYoH01ZNrxGqlN0k%2BVSFhW18fMvdEqk1y%2BFK1ZQPw1DF3FsFRv9pghdrINAfBUIF903MAJqs%2BAf1GI9tE1YarbCSZFkt4nYRH86r8p0ZO6nhROAAI84N96uEiyGi1PklCOy55Cq6nqoyiiItE6RSHs9bl4AmK4mF6hRFswKZ0mhcZaVErw3ICvNWMxLGPPFWOccFW39MrD5NbKAIF5nyf9Sh9b1nx1ZxEpSf%2FOtOGMq6qw%2B%2FpB1XcS0ofrr0pTjDy2%2FdH2dswHIxPVMLDIp8IGOqUBwZwtEepepdbDS9BPzteZB30c86vUGKK0eJiFycBe2oyoQ5Tob2B9%2BwzMHfJSqrfrS%2BKz9C9PmrwP1k6Vhbj6QNCJWqp1Xczmx7AIcsZLUD74jWqXB1aePnw5bjLVCRsKHcmJsuw4KyfH7IRuMN8dqgM%2FYsKEpaodW%2BvkQhRptIksVUrC8ccE92VMuprrBN7GIHNwmBzqGFYrOiuGlkCCsFs3eWy0&X-Amz-Signature=ace7c3d0380a2920530c7ea59829cbc5da575ac8d9c247156387001e651bb24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJWEFLK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC837NL803kUDzADxlhGoVJQGXwtYzOMJOrKp7xqCky4wIgDP6pvfHlo4AySXcNac0HpvCPTcBwicZdgwma2tpDhbQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhku%2B1FN3FrUg3uCSrcA08LIczGFmW41AARBag2Vv2BjhBYR2HqAWP4jzv648%2FYS%2BMSfffWmarp3W%2FOPquWkJWrjwVgvIKnzME06iY0S4%2BYQMhBXO8UERz%2BOwnKIchZcnelpJ%2FmKsmjgaX1mf7Hf1elhYYwHCnEN9Z3iYqggWM6d56sCwo3vOHpAx6DKKsg6Zi46Fl7Y4mFWqSlQO4UpbpupfzolGTm5qT38DEaLH6qjqSsMSJ5ng1hWFnaJ88pkQ3Rb2wjDCaZWEkt89e%2FbvxXpR1PnDSUsj4Zhqj8KAeaMBCv53WC24DdkrP97RDHHVEgLnDrnMxj45OpyBe7%2Faij6u24FayZ9n9bOiVZayG9lGSri7w34QzU%2BneclLF58YBYoH01ZNrxGqlN0k%2BVSFhW18fMvdEqk1y%2BFK1ZQPw1DF3FsFRv9pghdrINAfBUIF903MAJqs%2BAf1GI9tE1YarbCSZFkt4nYRH86r8p0ZO6nhROAAI84N96uEiyGi1PklCOy55Cq6nqoyiiItE6RSHs9bl4AmK4mF6hRFswKZ0mhcZaVErw3ICvNWMxLGPPFWOccFW39MrD5NbKAIF5nyf9Sh9b1nx1ZxEpSf%2FOtOGMq6qw%2B%2FpB1XcS0ofrr0pTjDy2%2FdH2dswHIxPVMLDIp8IGOqUBwZwtEepepdbDS9BPzteZB30c86vUGKK0eJiFycBe2oyoQ5Tob2B9%2BwzMHfJSqrfrS%2BKz9C9PmrwP1k6Vhbj6QNCJWqp1Xczmx7AIcsZLUD74jWqXB1aePnw5bjLVCRsKHcmJsuw4KyfH7IRuMN8dqgM%2FYsKEpaodW%2BvkQhRptIksVUrC8ccE92VMuprrBN7GIHNwmBzqGFYrOiuGlkCCsFs3eWy0&X-Amz-Signature=bf50c8991ab9d293728ceb7b56f0df949b24d97232a4acfc3ce32a6dd03fffbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJWEFLK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC837NL803kUDzADxlhGoVJQGXwtYzOMJOrKp7xqCky4wIgDP6pvfHlo4AySXcNac0HpvCPTcBwicZdgwma2tpDhbQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKhku%2B1FN3FrUg3uCSrcA08LIczGFmW41AARBag2Vv2BjhBYR2HqAWP4jzv648%2FYS%2BMSfffWmarp3W%2FOPquWkJWrjwVgvIKnzME06iY0S4%2BYQMhBXO8UERz%2BOwnKIchZcnelpJ%2FmKsmjgaX1mf7Hf1elhYYwHCnEN9Z3iYqggWM6d56sCwo3vOHpAx6DKKsg6Zi46Fl7Y4mFWqSlQO4UpbpupfzolGTm5qT38DEaLH6qjqSsMSJ5ng1hWFnaJ88pkQ3Rb2wjDCaZWEkt89e%2FbvxXpR1PnDSUsj4Zhqj8KAeaMBCv53WC24DdkrP97RDHHVEgLnDrnMxj45OpyBe7%2Faij6u24FayZ9n9bOiVZayG9lGSri7w34QzU%2BneclLF58YBYoH01ZNrxGqlN0k%2BVSFhW18fMvdEqk1y%2BFK1ZQPw1DF3FsFRv9pghdrINAfBUIF903MAJqs%2BAf1GI9tE1YarbCSZFkt4nYRH86r8p0ZO6nhROAAI84N96uEiyGi1PklCOy55Cq6nqoyiiItE6RSHs9bl4AmK4mF6hRFswKZ0mhcZaVErw3ICvNWMxLGPPFWOccFW39MrD5NbKAIF5nyf9Sh9b1nx1ZxEpSf%2FOtOGMq6qw%2B%2FpB1XcS0ofrr0pTjDy2%2FdH2dswHIxPVMLDIp8IGOqUBwZwtEepepdbDS9BPzteZB30c86vUGKK0eJiFycBe2oyoQ5Tob2B9%2BwzMHfJSqrfrS%2BKz9C9PmrwP1k6Vhbj6QNCJWqp1Xczmx7AIcsZLUD74jWqXB1aePnw5bjLVCRsKHcmJsuw4KyfH7IRuMN8dqgM%2FYsKEpaodW%2BvkQhRptIksVUrC8ccE92VMuprrBN7GIHNwmBzqGFYrOiuGlkCCsFs3eWy0&X-Amz-Signature=30f6115dd6f174c953a58e3ab0a9a4285592a92a72d52e4ba0a74c590f0a9584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
