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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ4DVCA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMUqX%2BOtR3QC7jYQi19GdYaTd2WhJY9xht7mt4iY%2BE5wIgaiEgjI9ehKYNCgZ%2FdQXM5rMgiSMCu2sGlWzCGt70%2BzAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXSOAR85TuMYZ0s9SrcAwEv%2BytanMbhvWpksAJTPXxSqy5ZJEJceSPHDqNuF%2BhDMI21kWID4WgA6j%2FC8sZ96ngxE6oypmzSXT0QUpVhPn39OmS3PEy2ncK3VidlgF2HTrebucgF8oO1vq4wIlBnF7tgozheqwZ5NpEgnVwZKsrOuhfO%2BdkeZJU7hVFF2g24VepmkQY%2FzYW%2BlusDPesvl%2BVFirBB1%2Baqm6PaPMPhxEfX2%2FK5CxnbLjuSOiiymZN6kwDDX5LQ%2F5%2FOFgQjwrP9Z9bvMDS%2F3teCPpC7MTYv4D7%2BFpAOzJa39%2FIzHNpw9KQp8tR%2FNZANkHbx9Sv0%2B1pMuFqtjvxDvL73tbn%2B%2FuHwu3VU0FqCyetIcIBg%2FgyHoZNe8Ulnc4%2B5mwfPgcC01kE4q2YovSeRs0f%2FHIHOBX7H6cypjYP6rCc%2F%2FWTGjbv6pXar5AHTSA%2FTeGCuxmt2o2HwYQ7p4QWJiXF%2FpALAyxWEPeRoimQLMTjO1X1lzbUF2VBzmylvGNYll3Kq5A%2BZ7y1PfAIlZoJcynmKABVSkLMuuYypakDHlcJcEnvjgh0xs84vQv6HqcfyMyznSiYP4f%2B%2FlW3nyXvXp%2BQvJNlVo9puBJlx3xU0WEBWJt%2FBW7UlJvD%2FqCdgs6Fr085XQK%2BbMK6xs8EGOqUBAAk3RjSA6ZOg%2BYXLjHAr2cSL6VZKKd6w4TqN8rHFCpyP%2Fu%2FAi%2FybmzLgbDdBbdiIifzgWzDzHVub0k2weLEibJ7JPoyWlTfSRunMGp42J6szezfmDfaQoVbfxG8usWRSplC5LBFHt16cWnw37DFQCS%2B60dSJBbhO2YGO4FDWPVt1tygrhDZjU3XR3Y0inSBf4S3v64c1B2pezmnYv7JzgKw0bTYh&X-Amz-Signature=70611d809a109f2792b1882d6b87197e0a49423c7fc2b0e060c11297b3ca4c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ4DVCA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMUqX%2BOtR3QC7jYQi19GdYaTd2WhJY9xht7mt4iY%2BE5wIgaiEgjI9ehKYNCgZ%2FdQXM5rMgiSMCu2sGlWzCGt70%2BzAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXSOAR85TuMYZ0s9SrcAwEv%2BytanMbhvWpksAJTPXxSqy5ZJEJceSPHDqNuF%2BhDMI21kWID4WgA6j%2FC8sZ96ngxE6oypmzSXT0QUpVhPn39OmS3PEy2ncK3VidlgF2HTrebucgF8oO1vq4wIlBnF7tgozheqwZ5NpEgnVwZKsrOuhfO%2BdkeZJU7hVFF2g24VepmkQY%2FzYW%2BlusDPesvl%2BVFirBB1%2Baqm6PaPMPhxEfX2%2FK5CxnbLjuSOiiymZN6kwDDX5LQ%2F5%2FOFgQjwrP9Z9bvMDS%2F3teCPpC7MTYv4D7%2BFpAOzJa39%2FIzHNpw9KQp8tR%2FNZANkHbx9Sv0%2B1pMuFqtjvxDvL73tbn%2B%2FuHwu3VU0FqCyetIcIBg%2FgyHoZNe8Ulnc4%2B5mwfPgcC01kE4q2YovSeRs0f%2FHIHOBX7H6cypjYP6rCc%2F%2FWTGjbv6pXar5AHTSA%2FTeGCuxmt2o2HwYQ7p4QWJiXF%2FpALAyxWEPeRoimQLMTjO1X1lzbUF2VBzmylvGNYll3Kq5A%2BZ7y1PfAIlZoJcynmKABVSkLMuuYypakDHlcJcEnvjgh0xs84vQv6HqcfyMyznSiYP4f%2B%2FlW3nyXvXp%2BQvJNlVo9puBJlx3xU0WEBWJt%2FBW7UlJvD%2FqCdgs6Fr085XQK%2BbMK6xs8EGOqUBAAk3RjSA6ZOg%2BYXLjHAr2cSL6VZKKd6w4TqN8rHFCpyP%2Fu%2FAi%2FybmzLgbDdBbdiIifzgWzDzHVub0k2weLEibJ7JPoyWlTfSRunMGp42J6szezfmDfaQoVbfxG8usWRSplC5LBFHt16cWnw37DFQCS%2B60dSJBbhO2YGO4FDWPVt1tygrhDZjU3XR3Y0inSBf4S3v64c1B2pezmnYv7JzgKw0bTYh&X-Amz-Signature=d9f013c01461ef60043499bc1825ded84eb623817312d731efddb3515a4ae20e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ4DVCA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMUqX%2BOtR3QC7jYQi19GdYaTd2WhJY9xht7mt4iY%2BE5wIgaiEgjI9ehKYNCgZ%2FdQXM5rMgiSMCu2sGlWzCGt70%2BzAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXSOAR85TuMYZ0s9SrcAwEv%2BytanMbhvWpksAJTPXxSqy5ZJEJceSPHDqNuF%2BhDMI21kWID4WgA6j%2FC8sZ96ngxE6oypmzSXT0QUpVhPn39OmS3PEy2ncK3VidlgF2HTrebucgF8oO1vq4wIlBnF7tgozheqwZ5NpEgnVwZKsrOuhfO%2BdkeZJU7hVFF2g24VepmkQY%2FzYW%2BlusDPesvl%2BVFirBB1%2Baqm6PaPMPhxEfX2%2FK5CxnbLjuSOiiymZN6kwDDX5LQ%2F5%2FOFgQjwrP9Z9bvMDS%2F3teCPpC7MTYv4D7%2BFpAOzJa39%2FIzHNpw9KQp8tR%2FNZANkHbx9Sv0%2B1pMuFqtjvxDvL73tbn%2B%2FuHwu3VU0FqCyetIcIBg%2FgyHoZNe8Ulnc4%2B5mwfPgcC01kE4q2YovSeRs0f%2FHIHOBX7H6cypjYP6rCc%2F%2FWTGjbv6pXar5AHTSA%2FTeGCuxmt2o2HwYQ7p4QWJiXF%2FpALAyxWEPeRoimQLMTjO1X1lzbUF2VBzmylvGNYll3Kq5A%2BZ7y1PfAIlZoJcynmKABVSkLMuuYypakDHlcJcEnvjgh0xs84vQv6HqcfyMyznSiYP4f%2B%2FlW3nyXvXp%2BQvJNlVo9puBJlx3xU0WEBWJt%2FBW7UlJvD%2FqCdgs6Fr085XQK%2BbMK6xs8EGOqUBAAk3RjSA6ZOg%2BYXLjHAr2cSL6VZKKd6w4TqN8rHFCpyP%2Fu%2FAi%2FybmzLgbDdBbdiIifzgWzDzHVub0k2weLEibJ7JPoyWlTfSRunMGp42J6szezfmDfaQoVbfxG8usWRSplC5LBFHt16cWnw37DFQCS%2B60dSJBbhO2YGO4FDWPVt1tygrhDZjU3XR3Y0inSBf4S3v64c1B2pezmnYv7JzgKw0bTYh&X-Amz-Signature=ac767941b03eb4159cbab309f675d2b4c14b88a690d76dd86fad6aeadff4dad5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
