---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GNG3WB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCv8Ktvvmx8RwgQHiJrwgVcaZtFw1a%2FMlHuCvNB8I441QIhAPAInv%2BVOVGhaxvaBgwvm2RgAWdOTFs09E7jSSD9Q%2BjcKv8DCDYQABoMNjM3NDIzMTgzODA1Igyh8B%2Faj4BKfZRf3KMq3APodyzvjXX1hkqzfZ%2FSAWypKXFFrPWZ5e1mp3ymUqBsobe5bEfE6Sdisbmzh%2B3yOF%2BuaL0b1lW51yRzSWn3D1o%2BpYN2GCwMfhAqYZ96HU2bnNEJASJQe4ILJ%2FfVBSkHzfTXaDS3bHwFXWCTKYzS6RUNBnAzKfShRKiHqCQKEQw5O97C1%2BGxsixD%2BfM08IE9tmwrHTjViQmQQU8HtG58xkjZugLQDrRY77lU4G0CywuY%2BXdHd3eEl2PXHa0gi8oxEeByxgfbBGQlvrw%2Beu46y2q%2BkYgh71lr7yfHKpUTmr5%2BP0E0GXJz78IqaHq47NKkDoKlVxQp9VS%2FP8liGMO7XdlxR5OH5OtaBzd49jbSZZoHYI1hfKJSYFVaG%2BlElFUQkc3bjgb%2BhLPSkG6apI%2BfXfdqA8vLJpQLy%2Br0OdBCg8fLf5HaBOMN%2FxhZTjHO0IFwE5WcBUM8%2FihmzD%2B3aX%2B4gNZ01y7z5t0Hl1DZKKq6cNiGtaP9eNnmOjng27uV0lwgGo6OUm17y6ITXD77gXQHSteDIrL211QXGDlFlZamyj512LHdZeuwzpH5gKFE2JTzi77FiAotlsLy7e5ySx47U1U9QXrMLtfj%2FKwZpwX589lC6YNbQTZZzrYoPOj7yzCN%2Fom9BjqkAVo0Lv52AYdvu%2F31nY2d55j44rOgBlEuDsqzA81qu9c3d%2FQd24ocdYb91y59vNkjNaocvH0aaxlv7nnZKjDfp0ItdUfI8r2MjxPmk7ELVWjaFJng5eiV5%2ButmIAc3EhfxZ4%2Bj0GnOYTws4g%2FUxK9H5W1tkTmG%2B79yCojNAz%2BQGg3QjpQYp75IaNSmID76I7OVAo0moisYzgOyacivNv3vzONxZkN&X-Amz-Signature=a4155b2f65b46caad2f96b2668b275c0f95eeddc7deb9efc24426ab73a894863&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GNG3WB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCv8Ktvvmx8RwgQHiJrwgVcaZtFw1a%2FMlHuCvNB8I441QIhAPAInv%2BVOVGhaxvaBgwvm2RgAWdOTFs09E7jSSD9Q%2BjcKv8DCDYQABoMNjM3NDIzMTgzODA1Igyh8B%2Faj4BKfZRf3KMq3APodyzvjXX1hkqzfZ%2FSAWypKXFFrPWZ5e1mp3ymUqBsobe5bEfE6Sdisbmzh%2B3yOF%2BuaL0b1lW51yRzSWn3D1o%2BpYN2GCwMfhAqYZ96HU2bnNEJASJQe4ILJ%2FfVBSkHzfTXaDS3bHwFXWCTKYzS6RUNBnAzKfShRKiHqCQKEQw5O97C1%2BGxsixD%2BfM08IE9tmwrHTjViQmQQU8HtG58xkjZugLQDrRY77lU4G0CywuY%2BXdHd3eEl2PXHa0gi8oxEeByxgfbBGQlvrw%2Beu46y2q%2BkYgh71lr7yfHKpUTmr5%2BP0E0GXJz78IqaHq47NKkDoKlVxQp9VS%2FP8liGMO7XdlxR5OH5OtaBzd49jbSZZoHYI1hfKJSYFVaG%2BlElFUQkc3bjgb%2BhLPSkG6apI%2BfXfdqA8vLJpQLy%2Br0OdBCg8fLf5HaBOMN%2FxhZTjHO0IFwE5WcBUM8%2FihmzD%2B3aX%2B4gNZ01y7z5t0Hl1DZKKq6cNiGtaP9eNnmOjng27uV0lwgGo6OUm17y6ITXD77gXQHSteDIrL211QXGDlFlZamyj512LHdZeuwzpH5gKFE2JTzi77FiAotlsLy7e5ySx47U1U9QXrMLtfj%2FKwZpwX589lC6YNbQTZZzrYoPOj7yzCN%2Fom9BjqkAVo0Lv52AYdvu%2F31nY2d55j44rOgBlEuDsqzA81qu9c3d%2FQd24ocdYb91y59vNkjNaocvH0aaxlv7nnZKjDfp0ItdUfI8r2MjxPmk7ELVWjaFJng5eiV5%2ButmIAc3EhfxZ4%2Bj0GnOYTws4g%2FUxK9H5W1tkTmG%2B79yCojNAz%2BQGg3QjpQYp75IaNSmID76I7OVAo0moisYzgOyacivNv3vzONxZkN&X-Amz-Signature=30ab95b7c1e6dffa7749d3faa2ac8ee784975202ae2d67d7c17bd55369a41536&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GNG3WB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCv8Ktvvmx8RwgQHiJrwgVcaZtFw1a%2FMlHuCvNB8I441QIhAPAInv%2BVOVGhaxvaBgwvm2RgAWdOTFs09E7jSSD9Q%2BjcKv8DCDYQABoMNjM3NDIzMTgzODA1Igyh8B%2Faj4BKfZRf3KMq3APodyzvjXX1hkqzfZ%2FSAWypKXFFrPWZ5e1mp3ymUqBsobe5bEfE6Sdisbmzh%2B3yOF%2BuaL0b1lW51yRzSWn3D1o%2BpYN2GCwMfhAqYZ96HU2bnNEJASJQe4ILJ%2FfVBSkHzfTXaDS3bHwFXWCTKYzS6RUNBnAzKfShRKiHqCQKEQw5O97C1%2BGxsixD%2BfM08IE9tmwrHTjViQmQQU8HtG58xkjZugLQDrRY77lU4G0CywuY%2BXdHd3eEl2PXHa0gi8oxEeByxgfbBGQlvrw%2Beu46y2q%2BkYgh71lr7yfHKpUTmr5%2BP0E0GXJz78IqaHq47NKkDoKlVxQp9VS%2FP8liGMO7XdlxR5OH5OtaBzd49jbSZZoHYI1hfKJSYFVaG%2BlElFUQkc3bjgb%2BhLPSkG6apI%2BfXfdqA8vLJpQLy%2Br0OdBCg8fLf5HaBOMN%2FxhZTjHO0IFwE5WcBUM8%2FihmzD%2B3aX%2B4gNZ01y7z5t0Hl1DZKKq6cNiGtaP9eNnmOjng27uV0lwgGo6OUm17y6ITXD77gXQHSteDIrL211QXGDlFlZamyj512LHdZeuwzpH5gKFE2JTzi77FiAotlsLy7e5ySx47U1U9QXrMLtfj%2FKwZpwX589lC6YNbQTZZzrYoPOj7yzCN%2Fom9BjqkAVo0Lv52AYdvu%2F31nY2d55j44rOgBlEuDsqzA81qu9c3d%2FQd24ocdYb91y59vNkjNaocvH0aaxlv7nnZKjDfp0ItdUfI8r2MjxPmk7ELVWjaFJng5eiV5%2ButmIAc3EhfxZ4%2Bj0GnOYTws4g%2FUxK9H5W1tkTmG%2B79yCojNAz%2BQGg3QjpQYp75IaNSmID76I7OVAo0moisYzgOyacivNv3vzONxZkN&X-Amz-Signature=a4b66793bb97706a0b8904dccd9bcc5a53d1d6e037e7e313963c8b0e9fc54ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
