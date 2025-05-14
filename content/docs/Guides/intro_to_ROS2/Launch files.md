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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YETPEXG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHrCbV%2FUM8rTlA%2Bmcs19D%2F%2BpoLFYVbuLoKZyvTM%2F61wtAiEAuLaJk2H0x7VkN8gMeZcHJ1H8PzKqZptEQZMOdPLXGWgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3lEKns7I0kE%2BhEGyrcA%2BXTKRqKRCbnxye6OC2Acwp2q8yXFIij%2FHiCsAvDbce3wR%2B%2B94fJGBx1AHOehIw0%2BdQyvIi6mxElS7bsosCqWDHYLh9en4G%2BFvEp%2FUJ5B7XWVO7seTWClvksmKoAvX5dQYoLRCI4PSQ3elPzf%2Bymek03YcZ02zE%2F8FGNwcGpJBlYJafoaWMO7Ua%2BIvQoFKQJ2yetW0ubgjLekxNNJTN9bjp%2F2K5Mv7dtP0hij6xaHSOQ8Yj5pkIXrBtoRNA%2Fs3C98LNTUF%2B703bZOD0ZV%2BPVOvyefjg9t8t7lhR%2FbNAOyZ5wonglllPDYk6HAAsK13wVwl9qkC5hATrXmkQnCv6gTLDP90a4%2BL%2BXZOIDktE7N4jlwiX8PWnt0qtXGvY98%2Fm0BQsYPzMZYJfObweHaANzYb2c%2FY27iqqUkNUJQ4Y5KGZjgArxSYmP7lQbXVonwH0Y5Kp5O2wJozIFe8hLMN1ReFQTLSThjzurslyAAYkF%2FbaarqGjP8h2ltXDJ3oO6WfQ%2FuiVkXWew13igUAaqawb6wtHAf%2FTgB14ipX%2BXdGz%2BIm1CN8avhIhVjQGO%2BQ1rglQsS37B3UZE7ZmuvA50CUlsOBHa7Zzlfzw1bqDhzdKIllZnFaiQmXWHFRr%2BjhwMIeHkMEGOqUBJWHtpz1%2BXWT96xgIC3d%2FK9YGCh6vcPIiZW%2BeTBc%2BQIPud5R0P9SPhu8g%2BipNxLAlHORygiT93%2Fr9WbkvkH%2F%2FcAa1T06EsdweNpcND2emPX83zwCX3NZFqkVbmspuH5DsHrDNm9o3J2%2BGC8IZTEOdrtIcsePJo87kHlpqAmjfPhOcgiBmeMj0jvHIQOPL4YrDT%2Baut1RbQosC7LTSu9EPcePv0Lz5&X-Amz-Signature=f6c36bf0c50fd99f75aeba8782b5e945aa1177a3e41f44659118c5d3579c2c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YETPEXG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHrCbV%2FUM8rTlA%2Bmcs19D%2F%2BpoLFYVbuLoKZyvTM%2F61wtAiEAuLaJk2H0x7VkN8gMeZcHJ1H8PzKqZptEQZMOdPLXGWgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3lEKns7I0kE%2BhEGyrcA%2BXTKRqKRCbnxye6OC2Acwp2q8yXFIij%2FHiCsAvDbce3wR%2B%2B94fJGBx1AHOehIw0%2BdQyvIi6mxElS7bsosCqWDHYLh9en4G%2BFvEp%2FUJ5B7XWVO7seTWClvksmKoAvX5dQYoLRCI4PSQ3elPzf%2Bymek03YcZ02zE%2F8FGNwcGpJBlYJafoaWMO7Ua%2BIvQoFKQJ2yetW0ubgjLekxNNJTN9bjp%2F2K5Mv7dtP0hij6xaHSOQ8Yj5pkIXrBtoRNA%2Fs3C98LNTUF%2B703bZOD0ZV%2BPVOvyefjg9t8t7lhR%2FbNAOyZ5wonglllPDYk6HAAsK13wVwl9qkC5hATrXmkQnCv6gTLDP90a4%2BL%2BXZOIDktE7N4jlwiX8PWnt0qtXGvY98%2Fm0BQsYPzMZYJfObweHaANzYb2c%2FY27iqqUkNUJQ4Y5KGZjgArxSYmP7lQbXVonwH0Y5Kp5O2wJozIFe8hLMN1ReFQTLSThjzurslyAAYkF%2FbaarqGjP8h2ltXDJ3oO6WfQ%2FuiVkXWew13igUAaqawb6wtHAf%2FTgB14ipX%2BXdGz%2BIm1CN8avhIhVjQGO%2BQ1rglQsS37B3UZE7ZmuvA50CUlsOBHa7Zzlfzw1bqDhzdKIllZnFaiQmXWHFRr%2BjhwMIeHkMEGOqUBJWHtpz1%2BXWT96xgIC3d%2FK9YGCh6vcPIiZW%2BeTBc%2BQIPud5R0P9SPhu8g%2BipNxLAlHORygiT93%2Fr9WbkvkH%2F%2FcAa1T06EsdweNpcND2emPX83zwCX3NZFqkVbmspuH5DsHrDNm9o3J2%2BGC8IZTEOdrtIcsePJo87kHlpqAmjfPhOcgiBmeMj0jvHIQOPL4YrDT%2Baut1RbQosC7LTSu9EPcePv0Lz5&X-Amz-Signature=3f7eeea9f8950341a716118d4df24d7cd3ac87c69c24bb31cba62d6ce74d8755&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YETPEXG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHrCbV%2FUM8rTlA%2Bmcs19D%2F%2BpoLFYVbuLoKZyvTM%2F61wtAiEAuLaJk2H0x7VkN8gMeZcHJ1H8PzKqZptEQZMOdPLXGWgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3lEKns7I0kE%2BhEGyrcA%2BXTKRqKRCbnxye6OC2Acwp2q8yXFIij%2FHiCsAvDbce3wR%2B%2B94fJGBx1AHOehIw0%2BdQyvIi6mxElS7bsosCqWDHYLh9en4G%2BFvEp%2FUJ5B7XWVO7seTWClvksmKoAvX5dQYoLRCI4PSQ3elPzf%2Bymek03YcZ02zE%2F8FGNwcGpJBlYJafoaWMO7Ua%2BIvQoFKQJ2yetW0ubgjLekxNNJTN9bjp%2F2K5Mv7dtP0hij6xaHSOQ8Yj5pkIXrBtoRNA%2Fs3C98LNTUF%2B703bZOD0ZV%2BPVOvyefjg9t8t7lhR%2FbNAOyZ5wonglllPDYk6HAAsK13wVwl9qkC5hATrXmkQnCv6gTLDP90a4%2BL%2BXZOIDktE7N4jlwiX8PWnt0qtXGvY98%2Fm0BQsYPzMZYJfObweHaANzYb2c%2FY27iqqUkNUJQ4Y5KGZjgArxSYmP7lQbXVonwH0Y5Kp5O2wJozIFe8hLMN1ReFQTLSThjzurslyAAYkF%2FbaarqGjP8h2ltXDJ3oO6WfQ%2FuiVkXWew13igUAaqawb6wtHAf%2FTgB14ipX%2BXdGz%2BIm1CN8avhIhVjQGO%2BQ1rglQsS37B3UZE7ZmuvA50CUlsOBHa7Zzlfzw1bqDhzdKIllZnFaiQmXWHFRr%2BjhwMIeHkMEGOqUBJWHtpz1%2BXWT96xgIC3d%2FK9YGCh6vcPIiZW%2BeTBc%2BQIPud5R0P9SPhu8g%2BipNxLAlHORygiT93%2Fr9WbkvkH%2F%2FcAa1T06EsdweNpcND2emPX83zwCX3NZFqkVbmspuH5DsHrDNm9o3J2%2BGC8IZTEOdrtIcsePJo87kHlpqAmjfPhOcgiBmeMj0jvHIQOPL4YrDT%2Baut1RbQosC7LTSu9EPcePv0Lz5&X-Amz-Signature=bcbcd35319b9d27ff145819675e3b9a166dba6896098550b1607025a2b7b71e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
