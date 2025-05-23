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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUBRZQM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDz0RZVO2eZ97tz7Et5jJM1ViD4jSbjogWFsxUZb5QWrAIgO9AZOw2MzIVwaur0EzhLPAXgl8OnSNRa%2B1152acUCeQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDOp0AkXj4D2tSPzyrcA675kLF6i1%2BFMQ8KL85jqrUFYb2hUX%2BNMD2OcqnAXAbAVEI6%2B8tElvTaFp6aiO%2FvIqY6SJ6xW6dNrOzKD8ktXS%2F4MS4hUy97TJaI4v7m0HRQdPWC9ttQCG%2FNZndqaOhOJKC%2FCGq5WaMN0PsN6p8qcL097ZEtyuWpgzaYjytQeRj3B94z7NQods5vg%2FmD3oo56jLmHrrBsQURknjL35LS1tuXxAydMdclzljzse607Nngks5fSA3617aobDG0chY3YVNi7y7sLJumLd0ya0Xe8SknoohS6kEK7RgdyjnUjERme%2FahcQyZo2010kbmuOt3LUF45VJADmCYLcN03s23e6jHlckpyu35HNkNMDRvQ27hjVEODHN8%2Fk11pwvQVYakntee%2FiHQHBAus2axKdbDV257rtalZLqAYMQKBEZ84IrK8Y%2BYtDJrCbj7t%2FIhIBO2B0kkqeKIDOKZ3kB%2FonP9vtKIHFS4LfTMkqXMOio11mDwshOmmI43eSavBMSJv%2BebgBxhX%2BNn8ROFNmYQQtq5ln53vwFa7Ow8FLoqNNOxNry04%2Bn2jxbrJWSrVymLxRvUNRZAyi7Psfq6c7lKW16V2MX%2BT9WXL57uvib1TFGWnn6CP4%2BXK%2FHC17OhpIU2MKvyv8EGOqUB2gCd4gKxhOsOZLUFSb7aYXQv5R3YZp8hN9%2BtDwIaH46rmt9kU5sJwS%2BP7yqI4wbVoNYilBAvLm2aK%2B8EDm7m9Dp2lHrGlGDvk00JxJ567oa0CwH0iGbUJm4DghAxvqruKvcK%2Bd9Blg0J%2FNfnPjmKKQJPjD00aS8UjxAp3EG36nO56kPy0WTO1Zr%2Bo1s%2FgJJU%2B5SpXeMbJfL6X3NO5WO9DXMiloGV&X-Amz-Signature=d1b52e1f597f0c95f818b46162b3019843aab6383d1a554a7783dfbc4e1414c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUBRZQM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDz0RZVO2eZ97tz7Et5jJM1ViD4jSbjogWFsxUZb5QWrAIgO9AZOw2MzIVwaur0EzhLPAXgl8OnSNRa%2B1152acUCeQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDOp0AkXj4D2tSPzyrcA675kLF6i1%2BFMQ8KL85jqrUFYb2hUX%2BNMD2OcqnAXAbAVEI6%2B8tElvTaFp6aiO%2FvIqY6SJ6xW6dNrOzKD8ktXS%2F4MS4hUy97TJaI4v7m0HRQdPWC9ttQCG%2FNZndqaOhOJKC%2FCGq5WaMN0PsN6p8qcL097ZEtyuWpgzaYjytQeRj3B94z7NQods5vg%2FmD3oo56jLmHrrBsQURknjL35LS1tuXxAydMdclzljzse607Nngks5fSA3617aobDG0chY3YVNi7y7sLJumLd0ya0Xe8SknoohS6kEK7RgdyjnUjERme%2FahcQyZo2010kbmuOt3LUF45VJADmCYLcN03s23e6jHlckpyu35HNkNMDRvQ27hjVEODHN8%2Fk11pwvQVYakntee%2FiHQHBAus2axKdbDV257rtalZLqAYMQKBEZ84IrK8Y%2BYtDJrCbj7t%2FIhIBO2B0kkqeKIDOKZ3kB%2FonP9vtKIHFS4LfTMkqXMOio11mDwshOmmI43eSavBMSJv%2BebgBxhX%2BNn8ROFNmYQQtq5ln53vwFa7Ow8FLoqNNOxNry04%2Bn2jxbrJWSrVymLxRvUNRZAyi7Psfq6c7lKW16V2MX%2BT9WXL57uvib1TFGWnn6CP4%2BXK%2FHC17OhpIU2MKvyv8EGOqUB2gCd4gKxhOsOZLUFSb7aYXQv5R3YZp8hN9%2BtDwIaH46rmt9kU5sJwS%2BP7yqI4wbVoNYilBAvLm2aK%2B8EDm7m9Dp2lHrGlGDvk00JxJ567oa0CwH0iGbUJm4DghAxvqruKvcK%2Bd9Blg0J%2FNfnPjmKKQJPjD00aS8UjxAp3EG36nO56kPy0WTO1Zr%2Bo1s%2FgJJU%2B5SpXeMbJfL6X3NO5WO9DXMiloGV&X-Amz-Signature=0789bb850e26e82328bad05c2c58b85c05296980dc4098cb73cc5874c11eae30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUBRZQM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDz0RZVO2eZ97tz7Et5jJM1ViD4jSbjogWFsxUZb5QWrAIgO9AZOw2MzIVwaur0EzhLPAXgl8OnSNRa%2B1152acUCeQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDOp0AkXj4D2tSPzyrcA675kLF6i1%2BFMQ8KL85jqrUFYb2hUX%2BNMD2OcqnAXAbAVEI6%2B8tElvTaFp6aiO%2FvIqY6SJ6xW6dNrOzKD8ktXS%2F4MS4hUy97TJaI4v7m0HRQdPWC9ttQCG%2FNZndqaOhOJKC%2FCGq5WaMN0PsN6p8qcL097ZEtyuWpgzaYjytQeRj3B94z7NQods5vg%2FmD3oo56jLmHrrBsQURknjL35LS1tuXxAydMdclzljzse607Nngks5fSA3617aobDG0chY3YVNi7y7sLJumLd0ya0Xe8SknoohS6kEK7RgdyjnUjERme%2FahcQyZo2010kbmuOt3LUF45VJADmCYLcN03s23e6jHlckpyu35HNkNMDRvQ27hjVEODHN8%2Fk11pwvQVYakntee%2FiHQHBAus2axKdbDV257rtalZLqAYMQKBEZ84IrK8Y%2BYtDJrCbj7t%2FIhIBO2B0kkqeKIDOKZ3kB%2FonP9vtKIHFS4LfTMkqXMOio11mDwshOmmI43eSavBMSJv%2BebgBxhX%2BNn8ROFNmYQQtq5ln53vwFa7Ow8FLoqNNOxNry04%2Bn2jxbrJWSrVymLxRvUNRZAyi7Psfq6c7lKW16V2MX%2BT9WXL57uvib1TFGWnn6CP4%2BXK%2FHC17OhpIU2MKvyv8EGOqUB2gCd4gKxhOsOZLUFSb7aYXQv5R3YZp8hN9%2BtDwIaH46rmt9kU5sJwS%2BP7yqI4wbVoNYilBAvLm2aK%2B8EDm7m9Dp2lHrGlGDvk00JxJ567oa0CwH0iGbUJm4DghAxvqruKvcK%2Bd9Blg0J%2FNfnPjmKKQJPjD00aS8UjxAp3EG36nO56kPy0WTO1Zr%2Bo1s%2FgJJU%2B5SpXeMbJfL6X3NO5WO9DXMiloGV&X-Amz-Signature=d2a278ea73c6e86193c8004e442148e6bffc1a404c3540e1fadb0b39b87149a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
