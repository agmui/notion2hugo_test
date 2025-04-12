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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYMGIAN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHG59K1ozhrJveyv18vAL5HdMhhgtdmHoClTOpiDAh8bAiAn1ckAJzOV0xExVW1z1wok4FwpRSs5puTB4MoupsT%2FfyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqcQum%2BV6gcSBF8JaKtwDLgRQ55m%2FfkfnP1dMvHc2P8b%2Btpn4fnKE0v3wZ3Gvm2ZGQh1KexJ2%2Bp6jQ8Ma5s5Lg0PUlXwNAfA6lZXxB9VLelQdKFzUPD%2FYb1kmm3lCI2JAKh4184%2BJFSCKqHbBfBEbB5vrNcqxellYcmk8N8fvhFSB9cK4lLVzv%2FNVe8RCYOb25sCIRk%2Bi%2B%2FX%2BNDTfOqSBMnhbLv0Gy1ixozR%2FWF8SvVzdxTcQXXmrM5xwYMOS0SxK%2BHojoSvH%2BfNLoa6Y6h0GDlwQg%2FSjQKl%2FdhfEbB1%2Fo%2FUhHluJkpzIVOzB%2FA8c%2BS0V2LkCPYS4AKAlHyPDFDUYlUw6plYZMIEj8%2B%2BbVclv6%2BAc7CYFppGeZF59egLhVSMzNzhkbL6FlH6HMFAd%2FrRqlS9myXsAqZ1CvFYMvOkdI2IaMiK94kw9zRgj8Wgh4IQyUKpBq1bTGg%2B0YrCvjxXTT%2BcYoKqdPfdGVo8I0WOcDa0i4Oo8SMd9eq93DWVz0SdskF5nZYBQiHxQNiOPuz4q40qIwksUzD4HJp%2FTFTzsHJ1YHm97fJT93VT2%2F1xP%2FXv%2BJ5IwaLx%2By1dbPUzLx19lLVDurHxkNLXv9l35mqmUcIOhU3ql7ToP4pniTI6%2B4uk4G%2BHyy9smqrqeHEEwn7HrvwY6pgE2o8V8L%2BY1QsplhUC6JWDgn2mpCsJszbjKFQGJjLRf4F0HLkQhZ9ptyYpmMVQcTmYtWSShXrVrLRhncyS%2BfVDN6FYOjTEanHkpYL%2Brxe2YjlPZRczYYiuy2Bnj5%2Fe7SSU4oEuwKgWu7vlDd76Y0qyL%2BlHW0Q0gsrzNrfXkmvQD8%2BCt0oaH3euIBOwuUhMBIH74Mf%2FyObxYNS%2B1UyPvtLtUhwAZQ%2BJU&X-Amz-Signature=a9710a44c200a17c25c0d6b8374803fbc9ba61a82edabf277f45aa3114480a51&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYMGIAN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHG59K1ozhrJveyv18vAL5HdMhhgtdmHoClTOpiDAh8bAiAn1ckAJzOV0xExVW1z1wok4FwpRSs5puTB4MoupsT%2FfyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqcQum%2BV6gcSBF8JaKtwDLgRQ55m%2FfkfnP1dMvHc2P8b%2Btpn4fnKE0v3wZ3Gvm2ZGQh1KexJ2%2Bp6jQ8Ma5s5Lg0PUlXwNAfA6lZXxB9VLelQdKFzUPD%2FYb1kmm3lCI2JAKh4184%2BJFSCKqHbBfBEbB5vrNcqxellYcmk8N8fvhFSB9cK4lLVzv%2FNVe8RCYOb25sCIRk%2Bi%2B%2FX%2BNDTfOqSBMnhbLv0Gy1ixozR%2FWF8SvVzdxTcQXXmrM5xwYMOS0SxK%2BHojoSvH%2BfNLoa6Y6h0GDlwQg%2FSjQKl%2FdhfEbB1%2Fo%2FUhHluJkpzIVOzB%2FA8c%2BS0V2LkCPYS4AKAlHyPDFDUYlUw6plYZMIEj8%2B%2BbVclv6%2BAc7CYFppGeZF59egLhVSMzNzhkbL6FlH6HMFAd%2FrRqlS9myXsAqZ1CvFYMvOkdI2IaMiK94kw9zRgj8Wgh4IQyUKpBq1bTGg%2B0YrCvjxXTT%2BcYoKqdPfdGVo8I0WOcDa0i4Oo8SMd9eq93DWVz0SdskF5nZYBQiHxQNiOPuz4q40qIwksUzD4HJp%2FTFTzsHJ1YHm97fJT93VT2%2F1xP%2FXv%2BJ5IwaLx%2By1dbPUzLx19lLVDurHxkNLXv9l35mqmUcIOhU3ql7ToP4pniTI6%2B4uk4G%2BHyy9smqrqeHEEwn7HrvwY6pgE2o8V8L%2BY1QsplhUC6JWDgn2mpCsJszbjKFQGJjLRf4F0HLkQhZ9ptyYpmMVQcTmYtWSShXrVrLRhncyS%2BfVDN6FYOjTEanHkpYL%2Brxe2YjlPZRczYYiuy2Bnj5%2Fe7SSU4oEuwKgWu7vlDd76Y0qyL%2BlHW0Q0gsrzNrfXkmvQD8%2BCt0oaH3euIBOwuUhMBIH74Mf%2FyObxYNS%2B1UyPvtLtUhwAZQ%2BJU&X-Amz-Signature=f36eca9e5e3902d4a2290d70eda5d647d9697a351989887d0a6e0c9f6c54310c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYMGIAN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHG59K1ozhrJveyv18vAL5HdMhhgtdmHoClTOpiDAh8bAiAn1ckAJzOV0xExVW1z1wok4FwpRSs5puTB4MoupsT%2FfyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqcQum%2BV6gcSBF8JaKtwDLgRQ55m%2FfkfnP1dMvHc2P8b%2Btpn4fnKE0v3wZ3Gvm2ZGQh1KexJ2%2Bp6jQ8Ma5s5Lg0PUlXwNAfA6lZXxB9VLelQdKFzUPD%2FYb1kmm3lCI2JAKh4184%2BJFSCKqHbBfBEbB5vrNcqxellYcmk8N8fvhFSB9cK4lLVzv%2FNVe8RCYOb25sCIRk%2Bi%2B%2FX%2BNDTfOqSBMnhbLv0Gy1ixozR%2FWF8SvVzdxTcQXXmrM5xwYMOS0SxK%2BHojoSvH%2BfNLoa6Y6h0GDlwQg%2FSjQKl%2FdhfEbB1%2Fo%2FUhHluJkpzIVOzB%2FA8c%2BS0V2LkCPYS4AKAlHyPDFDUYlUw6plYZMIEj8%2B%2BbVclv6%2BAc7CYFppGeZF59egLhVSMzNzhkbL6FlH6HMFAd%2FrRqlS9myXsAqZ1CvFYMvOkdI2IaMiK94kw9zRgj8Wgh4IQyUKpBq1bTGg%2B0YrCvjxXTT%2BcYoKqdPfdGVo8I0WOcDa0i4Oo8SMd9eq93DWVz0SdskF5nZYBQiHxQNiOPuz4q40qIwksUzD4HJp%2FTFTzsHJ1YHm97fJT93VT2%2F1xP%2FXv%2BJ5IwaLx%2By1dbPUzLx19lLVDurHxkNLXv9l35mqmUcIOhU3ql7ToP4pniTI6%2B4uk4G%2BHyy9smqrqeHEEwn7HrvwY6pgE2o8V8L%2BY1QsplhUC6JWDgn2mpCsJszbjKFQGJjLRf4F0HLkQhZ9ptyYpmMVQcTmYtWSShXrVrLRhncyS%2BfVDN6FYOjTEanHkpYL%2Brxe2YjlPZRczYYiuy2Bnj5%2Fe7SSU4oEuwKgWu7vlDd76Y0qyL%2BlHW0Q0gsrzNrfXkmvQD8%2BCt0oaH3euIBOwuUhMBIH74Mf%2FyObxYNS%2B1UyPvtLtUhwAZQ%2BJU&X-Amz-Signature=40d8258fe108b03554b5ae1573c55818cc2af85a30231b8409b43f385923350f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
