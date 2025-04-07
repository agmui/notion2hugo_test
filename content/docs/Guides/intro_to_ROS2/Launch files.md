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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XDLWKY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1s2HgTmO7nQZOjLsWgvH%2FqycTwszwAGgHF99rBVBTZAiASWoeNR5DttQzcO4i9vBLm5JQcinvGgZp%2BUbStch%2FDAyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfUMhp%2Fkw6N39i7iqKtwD4PCjGbcXUEIfzUOWFC03QNtoA9qGGZCKJ5yz%2FnI8n4y61YUenQPY73Nmm7pw6qZeIgWWnZzO%2B%2FN0QE2JcfHiymLbUkXbT4tcUhcKCX%2FqxNFdMODpuZJoViX03r6mDJEl7tzbECAo8H0vSgu1qhChveOFgDJyU8mTN4K9VtEmNFvq3zSMU5xSfAQhfFhIwM5FBhmLkd8xk3TkZJqI2UtpcaO8xSKol6hXovsxz04ZCA0DcZ2wuYwrB8JN5L8xDDm0P%2FIr9gxc4bKlIf4%2BE%2Fl7uOZ8KkDRwsAa1%2B16ht3KEbS29q6Hzp%2F8TYJurE7kw09bWPOugjCrsjXCLQ9VYVeNF6RRcEpiGgKv5rNfMyDoFYZ4Xqtey4KwJVL59HPm0gYRJZF%2FKGOz1Otm8qDm4TjgsG9z3CgmGQknRAK22MHYtPFiWW%2B1k80to4Bw9kOc3FY5%2Fv61tLlwEKX4h0yxz7CbUXe%2FOXRebAfJln5f%2FwS7iDFBl57JJaW8cDmbMWhF5B4QyOKP7GqWH2qU6BnMKyYoPCwZ290BAGvGvSrT6SWzkgVj7Hf6%2F%2F9LSFRB%2B083Sn2TpFesgiPBdjyB3IbXPfJpmNWKRV5E6A5WY4a7HtDU%2F7wvGVNZb9GA7kddQPYww%2BnMvwY6pgFGZv8V29oRrt%2BYhHu4tKHoOzzIUhC4LwI91FwUfO9xybV87%2B%2B%2B6FhT8L0%2B5Ex800Wm226Idn8s7b6rFLE7i2a2FbnPUrLr3TN8uXqIlKD6t9k5tfjzF%2F2%2FUcRCOkYREUmRis%2FUEw9J465DcNl26%2FnhdTMZSK94GZRA3B1YeLfbd2P%2BKkbgDAJLsh9YEftQiPrI3F2ibcV4G%2BeJD%2B7uPh9Sn0QkpQZx&X-Amz-Signature=c82c1db742ec9b733bf61bdb30fe88a8d521cf27a92f35818a7f953094f36439&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XDLWKY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1s2HgTmO7nQZOjLsWgvH%2FqycTwszwAGgHF99rBVBTZAiASWoeNR5DttQzcO4i9vBLm5JQcinvGgZp%2BUbStch%2FDAyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfUMhp%2Fkw6N39i7iqKtwD4PCjGbcXUEIfzUOWFC03QNtoA9qGGZCKJ5yz%2FnI8n4y61YUenQPY73Nmm7pw6qZeIgWWnZzO%2B%2FN0QE2JcfHiymLbUkXbT4tcUhcKCX%2FqxNFdMODpuZJoViX03r6mDJEl7tzbECAo8H0vSgu1qhChveOFgDJyU8mTN4K9VtEmNFvq3zSMU5xSfAQhfFhIwM5FBhmLkd8xk3TkZJqI2UtpcaO8xSKol6hXovsxz04ZCA0DcZ2wuYwrB8JN5L8xDDm0P%2FIr9gxc4bKlIf4%2BE%2Fl7uOZ8KkDRwsAa1%2B16ht3KEbS29q6Hzp%2F8TYJurE7kw09bWPOugjCrsjXCLQ9VYVeNF6RRcEpiGgKv5rNfMyDoFYZ4Xqtey4KwJVL59HPm0gYRJZF%2FKGOz1Otm8qDm4TjgsG9z3CgmGQknRAK22MHYtPFiWW%2B1k80to4Bw9kOc3FY5%2Fv61tLlwEKX4h0yxz7CbUXe%2FOXRebAfJln5f%2FwS7iDFBl57JJaW8cDmbMWhF5B4QyOKP7GqWH2qU6BnMKyYoPCwZ290BAGvGvSrT6SWzkgVj7Hf6%2F%2F9LSFRB%2B083Sn2TpFesgiPBdjyB3IbXPfJpmNWKRV5E6A5WY4a7HtDU%2F7wvGVNZb9GA7kddQPYww%2BnMvwY6pgFGZv8V29oRrt%2BYhHu4tKHoOzzIUhC4LwI91FwUfO9xybV87%2B%2B%2B6FhT8L0%2B5Ex800Wm226Idn8s7b6rFLE7i2a2FbnPUrLr3TN8uXqIlKD6t9k5tfjzF%2F2%2FUcRCOkYREUmRis%2FUEw9J465DcNl26%2FnhdTMZSK94GZRA3B1YeLfbd2P%2BKkbgDAJLsh9YEftQiPrI3F2ibcV4G%2BeJD%2B7uPh9Sn0QkpQZx&X-Amz-Signature=e5287e3149837e84c271dad617e64ec6f3d64abd872bd7bc782853dfbed271ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XDLWKY%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1s2HgTmO7nQZOjLsWgvH%2FqycTwszwAGgHF99rBVBTZAiASWoeNR5DttQzcO4i9vBLm5JQcinvGgZp%2BUbStch%2FDAyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfUMhp%2Fkw6N39i7iqKtwD4PCjGbcXUEIfzUOWFC03QNtoA9qGGZCKJ5yz%2FnI8n4y61YUenQPY73Nmm7pw6qZeIgWWnZzO%2B%2FN0QE2JcfHiymLbUkXbT4tcUhcKCX%2FqxNFdMODpuZJoViX03r6mDJEl7tzbECAo8H0vSgu1qhChveOFgDJyU8mTN4K9VtEmNFvq3zSMU5xSfAQhfFhIwM5FBhmLkd8xk3TkZJqI2UtpcaO8xSKol6hXovsxz04ZCA0DcZ2wuYwrB8JN5L8xDDm0P%2FIr9gxc4bKlIf4%2BE%2Fl7uOZ8KkDRwsAa1%2B16ht3KEbS29q6Hzp%2F8TYJurE7kw09bWPOugjCrsjXCLQ9VYVeNF6RRcEpiGgKv5rNfMyDoFYZ4Xqtey4KwJVL59HPm0gYRJZF%2FKGOz1Otm8qDm4TjgsG9z3CgmGQknRAK22MHYtPFiWW%2B1k80to4Bw9kOc3FY5%2Fv61tLlwEKX4h0yxz7CbUXe%2FOXRebAfJln5f%2FwS7iDFBl57JJaW8cDmbMWhF5B4QyOKP7GqWH2qU6BnMKyYoPCwZ290BAGvGvSrT6SWzkgVj7Hf6%2F%2F9LSFRB%2B083Sn2TpFesgiPBdjyB3IbXPfJpmNWKRV5E6A5WY4a7HtDU%2F7wvGVNZb9GA7kddQPYww%2BnMvwY6pgFGZv8V29oRrt%2BYhHu4tKHoOzzIUhC4LwI91FwUfO9xybV87%2B%2B%2B6FhT8L0%2B5Ex800Wm226Idn8s7b6rFLE7i2a2FbnPUrLr3TN8uXqIlKD6t9k5tfjzF%2F2%2FUcRCOkYREUmRis%2FUEw9J465DcNl26%2FnhdTMZSK94GZRA3B1YeLfbd2P%2BKkbgDAJLsh9YEftQiPrI3F2ibcV4G%2BeJD%2B7uPh9Sn0QkpQZx&X-Amz-Signature=ec689fc09e0be16877545e414cc0fb15d8a0c1e74eba8c7c38d47a7162eef86f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
