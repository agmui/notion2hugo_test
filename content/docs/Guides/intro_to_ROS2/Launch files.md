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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7IYOWT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIC4%2FqXezFoqZaP9YbMeaiPZsfSe2hchEII8z%2BlJ0fSL2AiEA4XC80cmV7y9%2Bx8N0YOdk2NYooj514ofGgEJQVv8qARoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDACWiYna4QkaW8HbFircA6tCxj75YYLRY3Lk8gnLEq90VuEZm%2BYzdlNQHl5uC7t7TlkcI%2FNHhpUovj0saz75YE%2FUsto9j7zZpx67SgAc48y7hfScegcFVm5xVjMLtv%2FtPWYbDZybSpjtxKQ5FlomDU94xPFDtXDesc%2BrbfAM%2FM%2BkjT1mTd0SRXigH7w13KMYSii1tgWHLc%2B%2BYksektJ0w8nK9ydiDzkXILfFXzgAIO%2B%2F4OHgIaQns%2FM1KAil3BLKna0dXHC1c1zTF4eXn76d1rHdU5eXGJE6GDpbiNG7HmYm586%2BCYt8rYg7E4k3ptC%2FxJN9NMx2AW63EePPRbCr4M2uY4HRRJ2fkpFyOgAli1kXo1vC8GW8K7C%2FqVQlVL%2FB70gd%2F5wUE5UhcN%2B52I1FIuWRam70DTObqZPhwxkl02VU1BOy040DXFOfMjmdI%2BOeXz41t5Ebj5BZ5E5t2kF2t2iL9g%2BbVkG0VfFXnWf3Zjt7AJpTyJhPhYYWt3Ev1LTbz8ZDMyY8dG2y58L6zleB1qxK7uoBX9rzW6iCVGNPQeWKCRay7KpX3iokxz5yh9bTiY0WOeDv6QBbnY8s5ddsRurT4JCynTGBTYVDSI4X3r%2BI9hgWnh56ybTtoLWWL2Gvw0bU2rm%2FyYMAX29WMIWO0MEGOqUBaHJaL6NJqKqHkd8Jo9fWJKqk%2Bf2OPWTGU8sgHa6HnJUVMWAeIfhKUa2WQjEcHj%2FrdIHGiZ5zMH2c33OP0eiuY3oqrs0QgycLj1gZEA3gZ%2FyXTTYhRA0ni7FWBPRngzQrIANj9T23fHSNAhrQTiR1hZlsSBBNFr58vpJR3YROr2chQjCmAhKOmVmVcxTxxIfvYMbDYMmQl4Py8fbP%2F8%2FBkutgpCL9&X-Amz-Signature=a30ee7ac26bbd81eb5e32a127b6a37a2f6a71ee84f02757201e9321b27391d99&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7IYOWT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIC4%2FqXezFoqZaP9YbMeaiPZsfSe2hchEII8z%2BlJ0fSL2AiEA4XC80cmV7y9%2Bx8N0YOdk2NYooj514ofGgEJQVv8qARoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDACWiYna4QkaW8HbFircA6tCxj75YYLRY3Lk8gnLEq90VuEZm%2BYzdlNQHl5uC7t7TlkcI%2FNHhpUovj0saz75YE%2FUsto9j7zZpx67SgAc48y7hfScegcFVm5xVjMLtv%2FtPWYbDZybSpjtxKQ5FlomDU94xPFDtXDesc%2BrbfAM%2FM%2BkjT1mTd0SRXigH7w13KMYSii1tgWHLc%2B%2BYksektJ0w8nK9ydiDzkXILfFXzgAIO%2B%2F4OHgIaQns%2FM1KAil3BLKna0dXHC1c1zTF4eXn76d1rHdU5eXGJE6GDpbiNG7HmYm586%2BCYt8rYg7E4k3ptC%2FxJN9NMx2AW63EePPRbCr4M2uY4HRRJ2fkpFyOgAli1kXo1vC8GW8K7C%2FqVQlVL%2FB70gd%2F5wUE5UhcN%2B52I1FIuWRam70DTObqZPhwxkl02VU1BOy040DXFOfMjmdI%2BOeXz41t5Ebj5BZ5E5t2kF2t2iL9g%2BbVkG0VfFXnWf3Zjt7AJpTyJhPhYYWt3Ev1LTbz8ZDMyY8dG2y58L6zleB1qxK7uoBX9rzW6iCVGNPQeWKCRay7KpX3iokxz5yh9bTiY0WOeDv6QBbnY8s5ddsRurT4JCynTGBTYVDSI4X3r%2BI9hgWnh56ybTtoLWWL2Gvw0bU2rm%2FyYMAX29WMIWO0MEGOqUBaHJaL6NJqKqHkd8Jo9fWJKqk%2Bf2OPWTGU8sgHa6HnJUVMWAeIfhKUa2WQjEcHj%2FrdIHGiZ5zMH2c33OP0eiuY3oqrs0QgycLj1gZEA3gZ%2FyXTTYhRA0ni7FWBPRngzQrIANj9T23fHSNAhrQTiR1hZlsSBBNFr58vpJR3YROr2chQjCmAhKOmVmVcxTxxIfvYMbDYMmQl4Py8fbP%2F8%2FBkutgpCL9&X-Amz-Signature=1ec74934e9924c8206224e514d0a77ac5336b1c1259029b65042ca316e9d9239&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7IYOWT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIC4%2FqXezFoqZaP9YbMeaiPZsfSe2hchEII8z%2BlJ0fSL2AiEA4XC80cmV7y9%2Bx8N0YOdk2NYooj514ofGgEJQVv8qARoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDACWiYna4QkaW8HbFircA6tCxj75YYLRY3Lk8gnLEq90VuEZm%2BYzdlNQHl5uC7t7TlkcI%2FNHhpUovj0saz75YE%2FUsto9j7zZpx67SgAc48y7hfScegcFVm5xVjMLtv%2FtPWYbDZybSpjtxKQ5FlomDU94xPFDtXDesc%2BrbfAM%2FM%2BkjT1mTd0SRXigH7w13KMYSii1tgWHLc%2B%2BYksektJ0w8nK9ydiDzkXILfFXzgAIO%2B%2F4OHgIaQns%2FM1KAil3BLKna0dXHC1c1zTF4eXn76d1rHdU5eXGJE6GDpbiNG7HmYm586%2BCYt8rYg7E4k3ptC%2FxJN9NMx2AW63EePPRbCr4M2uY4HRRJ2fkpFyOgAli1kXo1vC8GW8K7C%2FqVQlVL%2FB70gd%2F5wUE5UhcN%2B52I1FIuWRam70DTObqZPhwxkl02VU1BOy040DXFOfMjmdI%2BOeXz41t5Ebj5BZ5E5t2kF2t2iL9g%2BbVkG0VfFXnWf3Zjt7AJpTyJhPhYYWt3Ev1LTbz8ZDMyY8dG2y58L6zleB1qxK7uoBX9rzW6iCVGNPQeWKCRay7KpX3iokxz5yh9bTiY0WOeDv6QBbnY8s5ddsRurT4JCynTGBTYVDSI4X3r%2BI9hgWnh56ybTtoLWWL2Gvw0bU2rm%2FyYMAX29WMIWO0MEGOqUBaHJaL6NJqKqHkd8Jo9fWJKqk%2Bf2OPWTGU8sgHa6HnJUVMWAeIfhKUa2WQjEcHj%2FrdIHGiZ5zMH2c33OP0eiuY3oqrs0QgycLj1gZEA3gZ%2FyXTTYhRA0ni7FWBPRngzQrIANj9T23fHSNAhrQTiR1hZlsSBBNFr58vpJR3YROr2chQjCmAhKOmVmVcxTxxIfvYMbDYMmQl4Py8fbP%2F8%2FBkutgpCL9&X-Amz-Signature=fda6cfb3a8f4b6a158c547bd128068271b0d8f31687c5812914a035720c2eb66&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
