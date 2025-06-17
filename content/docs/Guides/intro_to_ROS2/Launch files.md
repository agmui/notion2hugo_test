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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7XWRAG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqio9%2B4b2vI%2Fq%2FQhDCkdap2eLKgq0YNxRrScmsQjiQ%2FAiB9VIC2XVwTpzgj7NUS%2FjUDsWKe5KS0j3EViU%2FhhuFkCCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMBUPFVSXBTsa6z8v%2BKtwDOBg0pDkG5aOJjqAx0wgvbGGnnI9AD0UHlng31E6wbdPwerknMqPKOFxymGEpUloTmOukNfBZQPds1udQqI1rKdYFkMEsGSdfQ9ogijFedpo9VoGpgp3fd%2BsUnEtTbzDoP0nrhKWQlbBJZpeb2hCEK0ZsvzRrUxO6wVT0tsgDJIclh16xgJJsSr4atySynGaKLNmCAQCvVJ%2F48oIGjyw1iIsjq%2Fox2LGZSx5vG4fyPn7z53CZ%2BvrRITgWDCvyH6uYqJBSDs263awsQ1ixA67XNRaLGl5NDw7ePcr4qhsQ3gdDtwOehf1Ukn7hQ5e5UFD%2BlusOFlfYIE14tg7IaczaUkPFS6co3rkzQ2D0qnioSBco5Mi1rpkXXjQyXCu6C74AFrhhQJFs2CBjc8o6gXjdSFUVPMPTaTCZtbB0hUfycamIRq6FynpAi3%2BVz%2B%2BgoY5bXDMDtmp%2B2mQWvcuicaRsfws274IZmbxeviQKFCtSQRunp8CNiWkfW%2FfXFjBPD2tg9tiI7SkdNrd%2Brc1%2B8yAfDzrhcD1ZopR0i01kBtz55iw6fyjQyA8llWBQ%2BS09fs%2F125fpx5ptMEy%2FzlFYSYHTCA%2B%2BSFIqkQ3dgqvSLHONIXWtFKZASQ%2BJHeaHUmEw1ZPEwgY6pgFFpH5em7v5B7OMs1niIGDmsDxfYTk4SbTfVHpLUBFrUxk4shaBP65QlDJi%2F%2BkTPEr9Ul2%2BwELvhWlRnRz7f96sXN%2B0GO7GLZ4x%2FHfYnpVDYQ3l9aasTlODIW8FisjbkWd7U5D6ogYKHca6GXbnQgKOaPH77NoSprLy9dKFm%2BgGMgwKMavNBnZ%2BRrtF3VQPBfXg53Sspnzkv%2FJsi9jidLi3BLukJfi1&X-Amz-Signature=2ca207b67c2772e131769c9e2957921df58e6f53f17703a59c641fd571ba4208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7XWRAG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqio9%2B4b2vI%2Fq%2FQhDCkdap2eLKgq0YNxRrScmsQjiQ%2FAiB9VIC2XVwTpzgj7NUS%2FjUDsWKe5KS0j3EViU%2FhhuFkCCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMBUPFVSXBTsa6z8v%2BKtwDOBg0pDkG5aOJjqAx0wgvbGGnnI9AD0UHlng31E6wbdPwerknMqPKOFxymGEpUloTmOukNfBZQPds1udQqI1rKdYFkMEsGSdfQ9ogijFedpo9VoGpgp3fd%2BsUnEtTbzDoP0nrhKWQlbBJZpeb2hCEK0ZsvzRrUxO6wVT0tsgDJIclh16xgJJsSr4atySynGaKLNmCAQCvVJ%2F48oIGjyw1iIsjq%2Fox2LGZSx5vG4fyPn7z53CZ%2BvrRITgWDCvyH6uYqJBSDs263awsQ1ixA67XNRaLGl5NDw7ePcr4qhsQ3gdDtwOehf1Ukn7hQ5e5UFD%2BlusOFlfYIE14tg7IaczaUkPFS6co3rkzQ2D0qnioSBco5Mi1rpkXXjQyXCu6C74AFrhhQJFs2CBjc8o6gXjdSFUVPMPTaTCZtbB0hUfycamIRq6FynpAi3%2BVz%2B%2BgoY5bXDMDtmp%2B2mQWvcuicaRsfws274IZmbxeviQKFCtSQRunp8CNiWkfW%2FfXFjBPD2tg9tiI7SkdNrd%2Brc1%2B8yAfDzrhcD1ZopR0i01kBtz55iw6fyjQyA8llWBQ%2BS09fs%2F125fpx5ptMEy%2FzlFYSYHTCA%2B%2BSFIqkQ3dgqvSLHONIXWtFKZASQ%2BJHeaHUmEw1ZPEwgY6pgFFpH5em7v5B7OMs1niIGDmsDxfYTk4SbTfVHpLUBFrUxk4shaBP65QlDJi%2F%2BkTPEr9Ul2%2BwELvhWlRnRz7f96sXN%2B0GO7GLZ4x%2FHfYnpVDYQ3l9aasTlODIW8FisjbkWd7U5D6ogYKHca6GXbnQgKOaPH77NoSprLy9dKFm%2BgGMgwKMavNBnZ%2BRrtF3VQPBfXg53Sspnzkv%2FJsi9jidLi3BLukJfi1&X-Amz-Signature=551114adeee139ee721ae856517b1fd333a6a7acc8a4007e0333b17cc831d581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7XWRAG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqio9%2B4b2vI%2Fq%2FQhDCkdap2eLKgq0YNxRrScmsQjiQ%2FAiB9VIC2XVwTpzgj7NUS%2FjUDsWKe5KS0j3EViU%2FhhuFkCCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMBUPFVSXBTsa6z8v%2BKtwDOBg0pDkG5aOJjqAx0wgvbGGnnI9AD0UHlng31E6wbdPwerknMqPKOFxymGEpUloTmOukNfBZQPds1udQqI1rKdYFkMEsGSdfQ9ogijFedpo9VoGpgp3fd%2BsUnEtTbzDoP0nrhKWQlbBJZpeb2hCEK0ZsvzRrUxO6wVT0tsgDJIclh16xgJJsSr4atySynGaKLNmCAQCvVJ%2F48oIGjyw1iIsjq%2Fox2LGZSx5vG4fyPn7z53CZ%2BvrRITgWDCvyH6uYqJBSDs263awsQ1ixA67XNRaLGl5NDw7ePcr4qhsQ3gdDtwOehf1Ukn7hQ5e5UFD%2BlusOFlfYIE14tg7IaczaUkPFS6co3rkzQ2D0qnioSBco5Mi1rpkXXjQyXCu6C74AFrhhQJFs2CBjc8o6gXjdSFUVPMPTaTCZtbB0hUfycamIRq6FynpAi3%2BVz%2B%2BgoY5bXDMDtmp%2B2mQWvcuicaRsfws274IZmbxeviQKFCtSQRunp8CNiWkfW%2FfXFjBPD2tg9tiI7SkdNrd%2Brc1%2B8yAfDzrhcD1ZopR0i01kBtz55iw6fyjQyA8llWBQ%2BS09fs%2F125fpx5ptMEy%2FzlFYSYHTCA%2B%2BSFIqkQ3dgqvSLHONIXWtFKZASQ%2BJHeaHUmEw1ZPEwgY6pgFFpH5em7v5B7OMs1niIGDmsDxfYTk4SbTfVHpLUBFrUxk4shaBP65QlDJi%2F%2BkTPEr9Ul2%2BwELvhWlRnRz7f96sXN%2B0GO7GLZ4x%2FHfYnpVDYQ3l9aasTlODIW8FisjbkWd7U5D6ogYKHca6GXbnQgKOaPH77NoSprLy9dKFm%2BgGMgwKMavNBnZ%2BRrtF3VQPBfXg53Sspnzkv%2FJsi9jidLi3BLukJfi1&X-Amz-Signature=7af0551fb0413b7ba06de0fb232c901a70803099d49802a0883de189d27e2a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
