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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCOJ3SN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGRQZe%2FppUx0YwfUJiVvKk9JfZFhZMx%2Fm8J0wLnC7UpJAiAsDIRJyQG6VO6idvhRN3ovBrxcD2EYzLvGIyXCRuKOryqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnYnEHYPK6PUInfdKtwDHuUTgkiGGr9xRaTn0q4yNFjR4u6Vh4H%2Fu0hJRHnMa5jpcX6OBE%2BfFhICH%2BY0tz%2FCj%2BL2oYDPEV7ZXrbRxE0hKbE9WzPja4LbeKGXi62bHi0LuEDRkZt5kK3DkNE5w%2Fj2ShRwA9UFXjHglliOL3S%2FkBZDb45akhhvZfMrsJz%2FU7K1koeG%2BcAppzrL71iYoZ501LA%2FXiDFTQhT6h%2Beb%2BH%2FYmGoAoysrCqvKRCIPU2pUKYXwRycd6l%2FAnFBF8x8vlJIfNjst0HdX0UgBf5ll5iCehTmLX8Cm9KFO4CaCBXW0I9G7d805mliFgCLrtcX4w0FA9WhSMUjF%2BKBIIb3Y7KnBC5LMQWSIrmvZ1Mtm53eAUgsCF056tVItBLoEIfil%2BVh3NyeDfyet6KAbtYI8AWTiCUyTpMJcGUk%2Fz326p3pkEASINaN8LvntlKSAIuXLflFNE%2FZSoMHD2D84lPB%2Bqy7YYPj3TzPQvPuYFF%2BXHY4MS7WhUZSMRU3d3yhNpMd0WDEX7UzIgqKY8oeWUx9gB12YwT2mNRp3%2FNjuD%2BOKarpwUflrnrm5m77GqEeoeq8bx%2FV72o4yMMJ1ZsB3E7fNq3RnfvL%2FvpMVOURj5xm7HHZdOrgGxtzl5xJJ702NBIwkvq4vgY6pgFrVFyYtqFGzedW0mn3vS1G0rXGTtOakCU6DLQe5trS%2BKCJfWVry9eQOI7Q46jcH%2FdGcylrA0uAg4ghmtx7sbPYCKQDr3CTdENAhfLyiqTFFmU2OupIwq2TWwQ9vMkGcm%2FYp1Bhq%2BjbLa5T9%2FS0NyQXmougnKRYZbRve%2FerMbfV%2FzrQqR%2Fli1PegQVuXdoI0FQ1gKDUSJiG%2FSP8VPz9gq%2Ba2QJ7XXIU&X-Amz-Signature=bcc9020f58c416208dd8863773387f4310a4070827ff9a9d029fff58b875aaa6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCOJ3SN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGRQZe%2FppUx0YwfUJiVvKk9JfZFhZMx%2Fm8J0wLnC7UpJAiAsDIRJyQG6VO6idvhRN3ovBrxcD2EYzLvGIyXCRuKOryqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnYnEHYPK6PUInfdKtwDHuUTgkiGGr9xRaTn0q4yNFjR4u6Vh4H%2Fu0hJRHnMa5jpcX6OBE%2BfFhICH%2BY0tz%2FCj%2BL2oYDPEV7ZXrbRxE0hKbE9WzPja4LbeKGXi62bHi0LuEDRkZt5kK3DkNE5w%2Fj2ShRwA9UFXjHglliOL3S%2FkBZDb45akhhvZfMrsJz%2FU7K1koeG%2BcAppzrL71iYoZ501LA%2FXiDFTQhT6h%2Beb%2BH%2FYmGoAoysrCqvKRCIPU2pUKYXwRycd6l%2FAnFBF8x8vlJIfNjst0HdX0UgBf5ll5iCehTmLX8Cm9KFO4CaCBXW0I9G7d805mliFgCLrtcX4w0FA9WhSMUjF%2BKBIIb3Y7KnBC5LMQWSIrmvZ1Mtm53eAUgsCF056tVItBLoEIfil%2BVh3NyeDfyet6KAbtYI8AWTiCUyTpMJcGUk%2Fz326p3pkEASINaN8LvntlKSAIuXLflFNE%2FZSoMHD2D84lPB%2Bqy7YYPj3TzPQvPuYFF%2BXHY4MS7WhUZSMRU3d3yhNpMd0WDEX7UzIgqKY8oeWUx9gB12YwT2mNRp3%2FNjuD%2BOKarpwUflrnrm5m77GqEeoeq8bx%2FV72o4yMMJ1ZsB3E7fNq3RnfvL%2FvpMVOURj5xm7HHZdOrgGxtzl5xJJ702NBIwkvq4vgY6pgFrVFyYtqFGzedW0mn3vS1G0rXGTtOakCU6DLQe5trS%2BKCJfWVry9eQOI7Q46jcH%2FdGcylrA0uAg4ghmtx7sbPYCKQDr3CTdENAhfLyiqTFFmU2OupIwq2TWwQ9vMkGcm%2FYp1Bhq%2BjbLa5T9%2FS0NyQXmougnKRYZbRve%2FerMbfV%2FzrQqR%2Fli1PegQVuXdoI0FQ1gKDUSJiG%2FSP8VPz9gq%2Ba2QJ7XXIU&X-Amz-Signature=f144b94682b6403f56bcd02e06f828c7ab7047fd9da62a2065c5fb643f1e7dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCOJ3SN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGRQZe%2FppUx0YwfUJiVvKk9JfZFhZMx%2Fm8J0wLnC7UpJAiAsDIRJyQG6VO6idvhRN3ovBrxcD2EYzLvGIyXCRuKOryqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnYnEHYPK6PUInfdKtwDHuUTgkiGGr9xRaTn0q4yNFjR4u6Vh4H%2Fu0hJRHnMa5jpcX6OBE%2BfFhICH%2BY0tz%2FCj%2BL2oYDPEV7ZXrbRxE0hKbE9WzPja4LbeKGXi62bHi0LuEDRkZt5kK3DkNE5w%2Fj2ShRwA9UFXjHglliOL3S%2FkBZDb45akhhvZfMrsJz%2FU7K1koeG%2BcAppzrL71iYoZ501LA%2FXiDFTQhT6h%2Beb%2BH%2FYmGoAoysrCqvKRCIPU2pUKYXwRycd6l%2FAnFBF8x8vlJIfNjst0HdX0UgBf5ll5iCehTmLX8Cm9KFO4CaCBXW0I9G7d805mliFgCLrtcX4w0FA9WhSMUjF%2BKBIIb3Y7KnBC5LMQWSIrmvZ1Mtm53eAUgsCF056tVItBLoEIfil%2BVh3NyeDfyet6KAbtYI8AWTiCUyTpMJcGUk%2Fz326p3pkEASINaN8LvntlKSAIuXLflFNE%2FZSoMHD2D84lPB%2Bqy7YYPj3TzPQvPuYFF%2BXHY4MS7WhUZSMRU3d3yhNpMd0WDEX7UzIgqKY8oeWUx9gB12YwT2mNRp3%2FNjuD%2BOKarpwUflrnrm5m77GqEeoeq8bx%2FV72o4yMMJ1ZsB3E7fNq3RnfvL%2FvpMVOURj5xm7HHZdOrgGxtzl5xJJ702NBIwkvq4vgY6pgFrVFyYtqFGzedW0mn3vS1G0rXGTtOakCU6DLQe5trS%2BKCJfWVry9eQOI7Q46jcH%2FdGcylrA0uAg4ghmtx7sbPYCKQDr3CTdENAhfLyiqTFFmU2OupIwq2TWwQ9vMkGcm%2FYp1Bhq%2BjbLa5T9%2FS0NyQXmougnKRYZbRve%2FerMbfV%2FzrQqR%2Fli1PegQVuXdoI0FQ1gKDUSJiG%2FSP8VPz9gq%2Ba2QJ7XXIU&X-Amz-Signature=9962b7fd3d7b72b5d7db481f1e66f08378158e5c461bbc9af07ba7fd5a95a000&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
