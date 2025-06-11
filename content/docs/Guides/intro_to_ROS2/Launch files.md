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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRC7KBNW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDtW4djHbszYUzpnx4iy9IOSrw3guxYjk727qhN6WnwGQIhAM48bA9N5cH6%2Fq36cE%2FbUE7lN7UOjlQDdjfNVvI%2FyXp1KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGiUJoIT50wPOV6cQq3APafAvBfFCsFO0iKPtJYkl7z09QJvm2HoWDjnE8EkaTzmZLBoDcFU93hMOYS3vsWOp6CDS6Z94GzdKDJTX%2FB%2BLsArKx1v%2B%2BEo3OrChvbqujHRbtt3IXOYIPQEXLLcL%2FSHOYO5HuPM%2BvvSuqqPmtw48fUWixIpMD4htv3u0Albx4PXgLMwpo%2B93yzhauyV59s3a8bYhFCiC8qSTGqA0bwnk5F%2FRcQ0mG20rwWh9IreItg5A4lQnpoif1my0fcwuh6qyJT%2Fh6%2F9shrjdVl%2BEtO7jVAHuiKkeFGTHB7ke6sZxAY23BrQJ0LpZVZT32gAxdxfk24MDQ4xdmv0csZytjaIrumz07Ums8%2FSZUL%2BOu%2B4h0PEhluDM4YgYVL%2BZD3Cv8kT6JZl07kxOSuUV%2BbfBL%2BPo3TzBMc%2F96iZqULrrBCVlfNNBg1rYLkM9yHvWWh7RrR0YYlrlBSEO8yNkVyQsFU8wDFMMLk1eA5tqcH6TBpNFBiC0LOMydFAukb%2F3zn0m6i1NSprofbaZbtgBPjWmSShFVSDh9SQbd8xx1ltnzTzw5FzIHpa%2FmZEeRYtnfZpPsTzj%2Fuj24B%2FJfobTr0oyztFzwpDyxCqtUd1ctmGxEqWi%2B466Aj51wOvS0HJaIADCdmqfCBjqkAcIeDDHxgSQOcklWSIaOFI1lGUyug%2FgKf%2FY7%2BY2F0nShCFzq63BYOtKU7LWhoIQ6RRisVXPcH1piNqVsJOxrwKU51fqOPBQuGWJky1TqNxwRnyxzsDR%2FoVTIh6hlab0n7uzg3xC%2BuLAvKrOr4lfQFnhLVcZa25o9wgyoU4RcS6YJ9IYzXsZSBevBby88dlNUrKPWMVNvQjaxG4kB2D9NXUNuxYMx&X-Amz-Signature=d840e3aafaf54ddce2f1557bc3b0befb2d086179608c20cfeda0ef4557b79e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRC7KBNW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDtW4djHbszYUzpnx4iy9IOSrw3guxYjk727qhN6WnwGQIhAM48bA9N5cH6%2Fq36cE%2FbUE7lN7UOjlQDdjfNVvI%2FyXp1KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGiUJoIT50wPOV6cQq3APafAvBfFCsFO0iKPtJYkl7z09QJvm2HoWDjnE8EkaTzmZLBoDcFU93hMOYS3vsWOp6CDS6Z94GzdKDJTX%2FB%2BLsArKx1v%2B%2BEo3OrChvbqujHRbtt3IXOYIPQEXLLcL%2FSHOYO5HuPM%2BvvSuqqPmtw48fUWixIpMD4htv3u0Albx4PXgLMwpo%2B93yzhauyV59s3a8bYhFCiC8qSTGqA0bwnk5F%2FRcQ0mG20rwWh9IreItg5A4lQnpoif1my0fcwuh6qyJT%2Fh6%2F9shrjdVl%2BEtO7jVAHuiKkeFGTHB7ke6sZxAY23BrQJ0LpZVZT32gAxdxfk24MDQ4xdmv0csZytjaIrumz07Ums8%2FSZUL%2BOu%2B4h0PEhluDM4YgYVL%2BZD3Cv8kT6JZl07kxOSuUV%2BbfBL%2BPo3TzBMc%2F96iZqULrrBCVlfNNBg1rYLkM9yHvWWh7RrR0YYlrlBSEO8yNkVyQsFU8wDFMMLk1eA5tqcH6TBpNFBiC0LOMydFAukb%2F3zn0m6i1NSprofbaZbtgBPjWmSShFVSDh9SQbd8xx1ltnzTzw5FzIHpa%2FmZEeRYtnfZpPsTzj%2Fuj24B%2FJfobTr0oyztFzwpDyxCqtUd1ctmGxEqWi%2B466Aj51wOvS0HJaIADCdmqfCBjqkAcIeDDHxgSQOcklWSIaOFI1lGUyug%2FgKf%2FY7%2BY2F0nShCFzq63BYOtKU7LWhoIQ6RRisVXPcH1piNqVsJOxrwKU51fqOPBQuGWJky1TqNxwRnyxzsDR%2FoVTIh6hlab0n7uzg3xC%2BuLAvKrOr4lfQFnhLVcZa25o9wgyoU4RcS6YJ9IYzXsZSBevBby88dlNUrKPWMVNvQjaxG4kB2D9NXUNuxYMx&X-Amz-Signature=708c3afd0bc16191f29b36c8544e37088d25fa04f624344ac8ba9943324b2248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRC7KBNW%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDtW4djHbszYUzpnx4iy9IOSrw3guxYjk727qhN6WnwGQIhAM48bA9N5cH6%2Fq36cE%2FbUE7lN7UOjlQDdjfNVvI%2FyXp1KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGiUJoIT50wPOV6cQq3APafAvBfFCsFO0iKPtJYkl7z09QJvm2HoWDjnE8EkaTzmZLBoDcFU93hMOYS3vsWOp6CDS6Z94GzdKDJTX%2FB%2BLsArKx1v%2B%2BEo3OrChvbqujHRbtt3IXOYIPQEXLLcL%2FSHOYO5HuPM%2BvvSuqqPmtw48fUWixIpMD4htv3u0Albx4PXgLMwpo%2B93yzhauyV59s3a8bYhFCiC8qSTGqA0bwnk5F%2FRcQ0mG20rwWh9IreItg5A4lQnpoif1my0fcwuh6qyJT%2Fh6%2F9shrjdVl%2BEtO7jVAHuiKkeFGTHB7ke6sZxAY23BrQJ0LpZVZT32gAxdxfk24MDQ4xdmv0csZytjaIrumz07Ums8%2FSZUL%2BOu%2B4h0PEhluDM4YgYVL%2BZD3Cv8kT6JZl07kxOSuUV%2BbfBL%2BPo3TzBMc%2F96iZqULrrBCVlfNNBg1rYLkM9yHvWWh7RrR0YYlrlBSEO8yNkVyQsFU8wDFMMLk1eA5tqcH6TBpNFBiC0LOMydFAukb%2F3zn0m6i1NSprofbaZbtgBPjWmSShFVSDh9SQbd8xx1ltnzTzw5FzIHpa%2FmZEeRYtnfZpPsTzj%2Fuj24B%2FJfobTr0oyztFzwpDyxCqtUd1ctmGxEqWi%2B466Aj51wOvS0HJaIADCdmqfCBjqkAcIeDDHxgSQOcklWSIaOFI1lGUyug%2FgKf%2FY7%2BY2F0nShCFzq63BYOtKU7LWhoIQ6RRisVXPcH1piNqVsJOxrwKU51fqOPBQuGWJky1TqNxwRnyxzsDR%2FoVTIh6hlab0n7uzg3xC%2BuLAvKrOr4lfQFnhLVcZa25o9wgyoU4RcS6YJ9IYzXsZSBevBby88dlNUrKPWMVNvQjaxG4kB2D9NXUNuxYMx&X-Amz-Signature=2f448f6177c13456facf51dea46ef184dac5703c9cf04d4f35173cb25e7fe37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
