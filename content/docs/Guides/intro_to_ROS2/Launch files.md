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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCJU2YS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwiAjv3Bjeq1PI51zPFAW1x71XgeEUcsk5zgkUGUCI9AiEAkVJGSiW3HbG%2Bik6kaM4n%2BT9pJrAdYzOU2%2FCWG0KfuSQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEaVqf3FSIjS78xxCSrcA5jSVv15r2Q6e7Fzvy%2BcUkJZRGNPvSL6KBiAbCIyChKz4VgWGAVV%2F%2FEEcbrWjqY4XoXrNz29ELAPavvD2%2F2Jd7ORvu%2FFx14tbbHkxourJvbrODjbNDfGRff7L8EKI58I6SqwdSVFTXfEBS9ZKFp8mpmQsM4ycpnGWZhBPLxzxHOCXnvDSGneffI4k1YrReWl%2BY83dLEQ6HUEA34lLxwNy1wo8pU2oJtb5TzM1DqgzC547R8lAmZz8Z3DUVJ9oeEbxLkZ5dq5Z2u1AGaNaiRRhWKouaaU6bJwTrfIlk6ww0iw4H%2FGfAQZzc5bbKcdUzGnprTEGcJCEp%2F8H9e8MVZYpkxO6g0XSQTwDnqwSPn9MWWWweM7lRJ3cLE5NMP0JonJqPt%2FHwcJFCt%2Bk8Flhthid4JBZri%2F%2B9fA2BG9FlJ91mtCJ9ok5ggwfRYleBORw%2FbrLAaowYkucvQSf%2FjREUgAUfoF45Y%2B6TUJpTja1dzi2j%2F06Av7WaQE4GXQaI1gVUoNg1qDsi8edfta5QnOfIitwSlavLYCs9lRx4cMbeJFiwQKuHD3BV7a0uEdTvGvi8qcH9UlnZ1WuWTm4n0QylWS7Y6cEa3g1JQ7FvXMEkJ%2F7u3%2FZbN9B6b%2BlT4D1ZqIMNzmqb4GOqUBdG9WNOBOaw4L56n2GOKgfMTN2FB7dD6iHYqyhqUpkRuvbcOoL20OOFI1gkseox2ByZEvvfHUse%2BgNoBGLDoRsLIvCCCQHe0DGGVa0XKrLEtNfeJUJD%2B6n9%2BpOhb%2FspyK8izOxmCATPzyNvqInaxSlkjgUMZop6GArqe4qCtOAID04Q5Xy06QIqzSpsYdM4ppvxN%2BS2EZD5HBb4fGdYU6C%2Frg3c4K&X-Amz-Signature=9e6578752e2566ecfb8ca89a7940197af11d5f162793bc43bf82720aad61d11c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCJU2YS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwiAjv3Bjeq1PI51zPFAW1x71XgeEUcsk5zgkUGUCI9AiEAkVJGSiW3HbG%2Bik6kaM4n%2BT9pJrAdYzOU2%2FCWG0KfuSQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEaVqf3FSIjS78xxCSrcA5jSVv15r2Q6e7Fzvy%2BcUkJZRGNPvSL6KBiAbCIyChKz4VgWGAVV%2F%2FEEcbrWjqY4XoXrNz29ELAPavvD2%2F2Jd7ORvu%2FFx14tbbHkxourJvbrODjbNDfGRff7L8EKI58I6SqwdSVFTXfEBS9ZKFp8mpmQsM4ycpnGWZhBPLxzxHOCXnvDSGneffI4k1YrReWl%2BY83dLEQ6HUEA34lLxwNy1wo8pU2oJtb5TzM1DqgzC547R8lAmZz8Z3DUVJ9oeEbxLkZ5dq5Z2u1AGaNaiRRhWKouaaU6bJwTrfIlk6ww0iw4H%2FGfAQZzc5bbKcdUzGnprTEGcJCEp%2F8H9e8MVZYpkxO6g0XSQTwDnqwSPn9MWWWweM7lRJ3cLE5NMP0JonJqPt%2FHwcJFCt%2Bk8Flhthid4JBZri%2F%2B9fA2BG9FlJ91mtCJ9ok5ggwfRYleBORw%2FbrLAaowYkucvQSf%2FjREUgAUfoF45Y%2B6TUJpTja1dzi2j%2F06Av7WaQE4GXQaI1gVUoNg1qDsi8edfta5QnOfIitwSlavLYCs9lRx4cMbeJFiwQKuHD3BV7a0uEdTvGvi8qcH9UlnZ1WuWTm4n0QylWS7Y6cEa3g1JQ7FvXMEkJ%2F7u3%2FZbN9B6b%2BlT4D1ZqIMNzmqb4GOqUBdG9WNOBOaw4L56n2GOKgfMTN2FB7dD6iHYqyhqUpkRuvbcOoL20OOFI1gkseox2ByZEvvfHUse%2BgNoBGLDoRsLIvCCCQHe0DGGVa0XKrLEtNfeJUJD%2B6n9%2BpOhb%2FspyK8izOxmCATPzyNvqInaxSlkjgUMZop6GArqe4qCtOAID04Q5Xy06QIqzSpsYdM4ppvxN%2BS2EZD5HBb4fGdYU6C%2Frg3c4K&X-Amz-Signature=910ad83b4a8820e221c318fdf3b1ab29f0da1ef871dcd3d612cf7e32242958d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCJU2YS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwiAjv3Bjeq1PI51zPFAW1x71XgeEUcsk5zgkUGUCI9AiEAkVJGSiW3HbG%2Bik6kaM4n%2BT9pJrAdYzOU2%2FCWG0KfuSQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEaVqf3FSIjS78xxCSrcA5jSVv15r2Q6e7Fzvy%2BcUkJZRGNPvSL6KBiAbCIyChKz4VgWGAVV%2F%2FEEcbrWjqY4XoXrNz29ELAPavvD2%2F2Jd7ORvu%2FFx14tbbHkxourJvbrODjbNDfGRff7L8EKI58I6SqwdSVFTXfEBS9ZKFp8mpmQsM4ycpnGWZhBPLxzxHOCXnvDSGneffI4k1YrReWl%2BY83dLEQ6HUEA34lLxwNy1wo8pU2oJtb5TzM1DqgzC547R8lAmZz8Z3DUVJ9oeEbxLkZ5dq5Z2u1AGaNaiRRhWKouaaU6bJwTrfIlk6ww0iw4H%2FGfAQZzc5bbKcdUzGnprTEGcJCEp%2F8H9e8MVZYpkxO6g0XSQTwDnqwSPn9MWWWweM7lRJ3cLE5NMP0JonJqPt%2FHwcJFCt%2Bk8Flhthid4JBZri%2F%2B9fA2BG9FlJ91mtCJ9ok5ggwfRYleBORw%2FbrLAaowYkucvQSf%2FjREUgAUfoF45Y%2B6TUJpTja1dzi2j%2F06Av7WaQE4GXQaI1gVUoNg1qDsi8edfta5QnOfIitwSlavLYCs9lRx4cMbeJFiwQKuHD3BV7a0uEdTvGvi8qcH9UlnZ1WuWTm4n0QylWS7Y6cEa3g1JQ7FvXMEkJ%2F7u3%2FZbN9B6b%2BlT4D1ZqIMNzmqb4GOqUBdG9WNOBOaw4L56n2GOKgfMTN2FB7dD6iHYqyhqUpkRuvbcOoL20OOFI1gkseox2ByZEvvfHUse%2BgNoBGLDoRsLIvCCCQHe0DGGVa0XKrLEtNfeJUJD%2B6n9%2BpOhb%2FspyK8izOxmCATPzyNvqInaxSlkjgUMZop6GArqe4qCtOAID04Q5Xy06QIqzSpsYdM4ppvxN%2BS2EZD5HBb4fGdYU6C%2Frg3c4K&X-Amz-Signature=24c543d340c366d81c116470f0eaf08a2b58f2ce82d6dbb3982d0bfd25d96af2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
