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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVNCV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcWMNPwcPUhoeNG7R%2BwRzHG8UHjYJGeN%2FsfyIjet3EkwIhAOUmtIAgtlH13i1FUhNx8KOBUnu7%2FkCyINLBbIxD%2FUn6Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwtylC%2BxVFBx8hGjs0q3AO%2FP5C2aQ5KBqPKIdJbtNsynIFJIyrB01d8ADi2AOr4Ai4vMRWUqwy%2FiI1Gut7V1gPqhYZ5rGbG%2F%2BBZPRu9q0b%2FR%2BMx1FlMDkpDqmnkQuFQAU8zcdrjpw3DtX9p52k0Ki4DRw5B1UDpAXREBcq3h2SOdEULBbmIhPxfZT8%2FcTT93dUmptaiUy%2Fjdht504XzpCX5jSWRvsIus5GfGSefpoPQB0cdyB5F9Ex0KbdkstnrUU45f7LNtjlMA%2Bl701xtpvE%2FgithzxeLYTGKCJ%2BDEP1roncro%2Fm79BW0%2B1ypzNrk2C6Q0GdxhORRzf9vEc43mvFAjG6inkvKUYeCKSXVH7lwEcJ0EBkSMwOYXMwz1lXIl%2BGARgx2OIpnfK3y6zL6D9gFAWsX%2BJpPPUrI0VwZY69rFy4DNW0OAHKA18uWzAR%2FzS5CzXbiMNwSmNM2vlsTmjr9UXASou4qwgYA6E%2FM5axTKffDeWD2RtFPulOYHy0iOf%2F%2BI%2BDVt%2BET7rJUo24gmtLqUsLSstHPGL5c6woiDqq4rPmDGHL1eyaasAwr4wU%2F%2BaGEWGLHKjx4KdBFFg0CELcmlq4ptbxDjiTw6NcGydqMo9jcQCVhBVO5iJKl9i%2FkH1kC7JmBJkJGlBcneTD27%2Fu%2FBjqkAZ%2FqZzSXvvTbyA7Ai1eKfzo%2FeKuB9CFJyCbOy9ePSC%2Findm1M9TOnS21gZ%2B%2FIUxEEvScmpHnl8Slq9pa3nrLBH9HJaPaWNJ9ATdVCeW9ObGKhDnzefEUgBDN6Jz59PWG3NdmQmx68LlaCRUa5KOCJX%2FRLSM5atvs%2FI5SPDL409CmvWuOWXvpG4hYPAYbY%2BNV52ml7Yfy26Y7%2FhPvWI5VlLEBlRwH&X-Amz-Signature=0627ce76d0fc9b27fd88e5a11fa2e5cc80ba8cdd7911c7a4717295d310c83aed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVNCV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcWMNPwcPUhoeNG7R%2BwRzHG8UHjYJGeN%2FsfyIjet3EkwIhAOUmtIAgtlH13i1FUhNx8KOBUnu7%2FkCyINLBbIxD%2FUn6Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwtylC%2BxVFBx8hGjs0q3AO%2FP5C2aQ5KBqPKIdJbtNsynIFJIyrB01d8ADi2AOr4Ai4vMRWUqwy%2FiI1Gut7V1gPqhYZ5rGbG%2F%2BBZPRu9q0b%2FR%2BMx1FlMDkpDqmnkQuFQAU8zcdrjpw3DtX9p52k0Ki4DRw5B1UDpAXREBcq3h2SOdEULBbmIhPxfZT8%2FcTT93dUmptaiUy%2Fjdht504XzpCX5jSWRvsIus5GfGSefpoPQB0cdyB5F9Ex0KbdkstnrUU45f7LNtjlMA%2Bl701xtpvE%2FgithzxeLYTGKCJ%2BDEP1roncro%2Fm79BW0%2B1ypzNrk2C6Q0GdxhORRzf9vEc43mvFAjG6inkvKUYeCKSXVH7lwEcJ0EBkSMwOYXMwz1lXIl%2BGARgx2OIpnfK3y6zL6D9gFAWsX%2BJpPPUrI0VwZY69rFy4DNW0OAHKA18uWzAR%2FzS5CzXbiMNwSmNM2vlsTmjr9UXASou4qwgYA6E%2FM5axTKffDeWD2RtFPulOYHy0iOf%2F%2BI%2BDVt%2BET7rJUo24gmtLqUsLSstHPGL5c6woiDqq4rPmDGHL1eyaasAwr4wU%2F%2BaGEWGLHKjx4KdBFFg0CELcmlq4ptbxDjiTw6NcGydqMo9jcQCVhBVO5iJKl9i%2FkH1kC7JmBJkJGlBcneTD27%2Fu%2FBjqkAZ%2FqZzSXvvTbyA7Ai1eKfzo%2FeKuB9CFJyCbOy9ePSC%2Findm1M9TOnS21gZ%2B%2FIUxEEvScmpHnl8Slq9pa3nrLBH9HJaPaWNJ9ATdVCeW9ObGKhDnzefEUgBDN6Jz59PWG3NdmQmx68LlaCRUa5KOCJX%2FRLSM5atvs%2FI5SPDL409CmvWuOWXvpG4hYPAYbY%2BNV52ml7Yfy26Y7%2FhPvWI5VlLEBlRwH&X-Amz-Signature=31a4ff46e9f5b63bd229b40443f5d1c76e7210de345211e0f92b0d2d28cfccf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWVNCV7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcWMNPwcPUhoeNG7R%2BwRzHG8UHjYJGeN%2FsfyIjet3EkwIhAOUmtIAgtlH13i1FUhNx8KOBUnu7%2FkCyINLBbIxD%2FUn6Kv8DCDkQABoMNjM3NDIzMTgzODA1IgwtylC%2BxVFBx8hGjs0q3AO%2FP5C2aQ5KBqPKIdJbtNsynIFJIyrB01d8ADi2AOr4Ai4vMRWUqwy%2FiI1Gut7V1gPqhYZ5rGbG%2F%2BBZPRu9q0b%2FR%2BMx1FlMDkpDqmnkQuFQAU8zcdrjpw3DtX9p52k0Ki4DRw5B1UDpAXREBcq3h2SOdEULBbmIhPxfZT8%2FcTT93dUmptaiUy%2Fjdht504XzpCX5jSWRvsIus5GfGSefpoPQB0cdyB5F9Ex0KbdkstnrUU45f7LNtjlMA%2Bl701xtpvE%2FgithzxeLYTGKCJ%2BDEP1roncro%2Fm79BW0%2B1ypzNrk2C6Q0GdxhORRzf9vEc43mvFAjG6inkvKUYeCKSXVH7lwEcJ0EBkSMwOYXMwz1lXIl%2BGARgx2OIpnfK3y6zL6D9gFAWsX%2BJpPPUrI0VwZY69rFy4DNW0OAHKA18uWzAR%2FzS5CzXbiMNwSmNM2vlsTmjr9UXASou4qwgYA6E%2FM5axTKffDeWD2RtFPulOYHy0iOf%2F%2BI%2BDVt%2BET7rJUo24gmtLqUsLSstHPGL5c6woiDqq4rPmDGHL1eyaasAwr4wU%2F%2BaGEWGLHKjx4KdBFFg0CELcmlq4ptbxDjiTw6NcGydqMo9jcQCVhBVO5iJKl9i%2FkH1kC7JmBJkJGlBcneTD27%2Fu%2FBjqkAZ%2FqZzSXvvTbyA7Ai1eKfzo%2FeKuB9CFJyCbOy9ePSC%2Findm1M9TOnS21gZ%2B%2FIUxEEvScmpHnl8Slq9pa3nrLBH9HJaPaWNJ9ATdVCeW9ObGKhDnzefEUgBDN6Jz59PWG3NdmQmx68LlaCRUa5KOCJX%2FRLSM5atvs%2FI5SPDL409CmvWuOWXvpG4hYPAYbY%2BNV52ml7Yfy26Y7%2FhPvWI5VlLEBlRwH&X-Amz-Signature=2ebadc3ab4f1a824280154477d1027e9da16782aa698b86fcb4c43ab859ba2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
