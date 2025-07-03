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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JJIBHC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFNLfMME0yYLIIYXViHHXNn%2BqHpGmslGOyUzWJbGY%2FJ1AiEAlpjCYtUnGwJtFO0KJaHDeqJ1UrALbrhyPakz90Ym3W0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIKsV8oNSws9OlouLircA3DbpG9L%2FJkQ8Yby7y%2Fo2YeBKky1qiBpoHjDrbmzkNWkwIe3qmSpv23x8AmR%2Bj2pZWs6AWAScSxqDgur4D9lh3ELDwSvd0clp%2BEUr9nzJ3eVXHAmtS9vK9I0deV%2Fm897El7XdL6kRqeIe0d9FMWaSIpS5qKqitP4wAMh%2Fk82FFILzYo4WWoujXnDsN1ubN9VhXG4E51k4HzK3zN2%2FGjQ4QInjzcAjCwPtsA1EmvYWkbUcX5rMFsWRHGlZ9KbSCVTo9zxObVqq5rQoAIXmBeae6xBxZd8vAA0gAJ28gLgMgax%2BUzADzBJ6syTHhnpZfJZodmCdU2FXE5%2BwcapFdIN4JjDs9xQiUm2p%2FUb%2Bq6QcZjAkVpQ8xY4OwEU%2FUagbC4qKk5YJYUhVwdsmKKtGaQxhHN6WXmUGyzST9shAjBSs%2BhcoCkcOKtfdc%2BPQS3Ogf2J%2FEPDIJnJVhURPgnut4j0C0NziMbFaFroktr%2FIJllHvz7oJ18Oy5gcS0kaeh5ByM2CiBP8%2B7sKrPDIjrY0mTuYjPICgMZl5GeLY7N%2BsfU7XFkRfmTZInMLpfq1jX5wZQOz103ANG1AeHGIBHBz1Y2gXq%2B6b9vg6fQAMEQdoAAYa4GG8qwz5XRXRpvgUvvMJ%2B5msMGOqUBjfRS1IDYZqywYCGNxR%2FimLh%2Bz2rEPo7PTPl%2BWLTLQ8v66aFb9D%2F4DBPWsZYce1CvuzXrnR7S2a0QPn7sGDXw1X7ehgVmcmJASvMeh4XPd7vNCDvleUesGiGtLeFw65qTL8hpUB39VSV3Mxa%2BHkGaRHpqxxNs6ckD7IKGtaDSsxFnODVn%2BeB%2FPyE9dWeADpLvCTlGdy1zyJNoo%2Bc5zvF21OVkdWFx&X-Amz-Signature=4932ebb34ce2b8d5732828bcdbf24298b3ec39443cde5285afa7553248a11aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JJIBHC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFNLfMME0yYLIIYXViHHXNn%2BqHpGmslGOyUzWJbGY%2FJ1AiEAlpjCYtUnGwJtFO0KJaHDeqJ1UrALbrhyPakz90Ym3W0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIKsV8oNSws9OlouLircA3DbpG9L%2FJkQ8Yby7y%2Fo2YeBKky1qiBpoHjDrbmzkNWkwIe3qmSpv23x8AmR%2Bj2pZWs6AWAScSxqDgur4D9lh3ELDwSvd0clp%2BEUr9nzJ3eVXHAmtS9vK9I0deV%2Fm897El7XdL6kRqeIe0d9FMWaSIpS5qKqitP4wAMh%2Fk82FFILzYo4WWoujXnDsN1ubN9VhXG4E51k4HzK3zN2%2FGjQ4QInjzcAjCwPtsA1EmvYWkbUcX5rMFsWRHGlZ9KbSCVTo9zxObVqq5rQoAIXmBeae6xBxZd8vAA0gAJ28gLgMgax%2BUzADzBJ6syTHhnpZfJZodmCdU2FXE5%2BwcapFdIN4JjDs9xQiUm2p%2FUb%2Bq6QcZjAkVpQ8xY4OwEU%2FUagbC4qKk5YJYUhVwdsmKKtGaQxhHN6WXmUGyzST9shAjBSs%2BhcoCkcOKtfdc%2BPQS3Ogf2J%2FEPDIJnJVhURPgnut4j0C0NziMbFaFroktr%2FIJllHvz7oJ18Oy5gcS0kaeh5ByM2CiBP8%2B7sKrPDIjrY0mTuYjPICgMZl5GeLY7N%2BsfU7XFkRfmTZInMLpfq1jX5wZQOz103ANG1AeHGIBHBz1Y2gXq%2B6b9vg6fQAMEQdoAAYa4GG8qwz5XRXRpvgUvvMJ%2B5msMGOqUBjfRS1IDYZqywYCGNxR%2FimLh%2Bz2rEPo7PTPl%2BWLTLQ8v66aFb9D%2F4DBPWsZYce1CvuzXrnR7S2a0QPn7sGDXw1X7ehgVmcmJASvMeh4XPd7vNCDvleUesGiGtLeFw65qTL8hpUB39VSV3Mxa%2BHkGaRHpqxxNs6ckD7IKGtaDSsxFnODVn%2BeB%2FPyE9dWeADpLvCTlGdy1zyJNoo%2Bc5zvF21OVkdWFx&X-Amz-Signature=1632cbd74e31a7f0c2b41a905141352d735221725e8501c95b3bff9a73d18283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JJIBHC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFNLfMME0yYLIIYXViHHXNn%2BqHpGmslGOyUzWJbGY%2FJ1AiEAlpjCYtUnGwJtFO0KJaHDeqJ1UrALbrhyPakz90Ym3W0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIKsV8oNSws9OlouLircA3DbpG9L%2FJkQ8Yby7y%2Fo2YeBKky1qiBpoHjDrbmzkNWkwIe3qmSpv23x8AmR%2Bj2pZWs6AWAScSxqDgur4D9lh3ELDwSvd0clp%2BEUr9nzJ3eVXHAmtS9vK9I0deV%2Fm897El7XdL6kRqeIe0d9FMWaSIpS5qKqitP4wAMh%2Fk82FFILzYo4WWoujXnDsN1ubN9VhXG4E51k4HzK3zN2%2FGjQ4QInjzcAjCwPtsA1EmvYWkbUcX5rMFsWRHGlZ9KbSCVTo9zxObVqq5rQoAIXmBeae6xBxZd8vAA0gAJ28gLgMgax%2BUzADzBJ6syTHhnpZfJZodmCdU2FXE5%2BwcapFdIN4JjDs9xQiUm2p%2FUb%2Bq6QcZjAkVpQ8xY4OwEU%2FUagbC4qKk5YJYUhVwdsmKKtGaQxhHN6WXmUGyzST9shAjBSs%2BhcoCkcOKtfdc%2BPQS3Ogf2J%2FEPDIJnJVhURPgnut4j0C0NziMbFaFroktr%2FIJllHvz7oJ18Oy5gcS0kaeh5ByM2CiBP8%2B7sKrPDIjrY0mTuYjPICgMZl5GeLY7N%2BsfU7XFkRfmTZInMLpfq1jX5wZQOz103ANG1AeHGIBHBz1Y2gXq%2B6b9vg6fQAMEQdoAAYa4GG8qwz5XRXRpvgUvvMJ%2B5msMGOqUBjfRS1IDYZqywYCGNxR%2FimLh%2Bz2rEPo7PTPl%2BWLTLQ8v66aFb9D%2F4DBPWsZYce1CvuzXrnR7S2a0QPn7sGDXw1X7ehgVmcmJASvMeh4XPd7vNCDvleUesGiGtLeFw65qTL8hpUB39VSV3Mxa%2BHkGaRHpqxxNs6ckD7IKGtaDSsxFnODVn%2BeB%2FPyE9dWeADpLvCTlGdy1zyJNoo%2Bc5zvF21OVkdWFx&X-Amz-Signature=8a5ac90d3b6c9c13388bc6bc2d9563f7487c2af0a61138c25fc71d26adb406d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
