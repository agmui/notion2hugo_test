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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLVDQHU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaaEmI7d2NdgGtx60AYh5%2BBvu2oNeAfhdINpQIi8k2ggIgNa08oFKwy0wm55R2gezS%2FLuqSZXTE24bSemEU7mziNIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGq5gZee22taoI0ltircA8TFDp4sfaky%2F%2FM6z1pG7KwcGX9FfYOF80rBAhsJ5dY1xysE64tTNwyRyFE6M0tTAulCphv4wvwQErmEX0VFpZ51pJ302Mz%2F%2FcU%2BkveRssXquNznakDswdf2GLeHP5JcyeyiHGZXHvLCQncduGj5cElRABLDuTc0QRniZ7MeYHj71eNT%2FnnWx0ZgLKUyjxRZljnchaSQOMuD3X4mEcJhvjEg1I17cPNBWXfFafE5iv8WGFD7PLf6nVQQ5JFlnRS%2Bby%2F2iXWhGHVSRownTPOhSSaBjVm6oa%2BJlr9jSBPqzGMNZmOCLeXYn5VzqjPyXOcgI5whfY6ktbWoa%2Bdlncc1ma7WB1cbnah1BgWWv3kmmKo3MepGb%2BUYXMQo3l8R%2FTAQ2cXsEI%2Fy1p%2BF5D9Y3HbZsR11vLvwFaEiSh53ntVOdN4mfz28rl9%2BAgHFQB4KSzp5%2Bh%2FS3jZnAqsFvQcEDvrWKZg8DJhamcRVOLWC%2FNapjZbsDof7QeNNNyGqA4QBsFs9QS%2BC0mSpgig%2FL23%2B1y4X9Ux42ICL5a1kSlJYdzrR%2By1sirF9xhrTylpMozhmWaMMxl%2Bnzoz%2BuV3xOdyxMBWpRt9ml%2FKHkoZh5%2B6ErdH6EYKSajHuyesDUCz6FXB1MKLx7r0GOqUBWV1y8SFLPGJ3xYpqGUnmzaiRRuf84rlXK3v078OMnmrMj1f3AIzVy%2FMwLeZdzwbLd9plvjxrsihgISnUA5vskuC0kCL5%2Fcgd9hkZa9iMFk4I%2BQmngbqhCVzDKSWEvCvid1Kl7UfwJp1nnF6AJoPQUqZRhoJyFLV9EH3rIc84uobPkc2hu35UYQoGSBouMFmsgbsUbnplv8xYhtkwnG0GsK5wEbHD&X-Amz-Signature=33faa898e94c9070aad7b312d971bafa36bb351d4a9fcd92c54bb6a9d4e5b5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLVDQHU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaaEmI7d2NdgGtx60AYh5%2BBvu2oNeAfhdINpQIi8k2ggIgNa08oFKwy0wm55R2gezS%2FLuqSZXTE24bSemEU7mziNIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGq5gZee22taoI0ltircA8TFDp4sfaky%2F%2FM6z1pG7KwcGX9FfYOF80rBAhsJ5dY1xysE64tTNwyRyFE6M0tTAulCphv4wvwQErmEX0VFpZ51pJ302Mz%2F%2FcU%2BkveRssXquNznakDswdf2GLeHP5JcyeyiHGZXHvLCQncduGj5cElRABLDuTc0QRniZ7MeYHj71eNT%2FnnWx0ZgLKUyjxRZljnchaSQOMuD3X4mEcJhvjEg1I17cPNBWXfFafE5iv8WGFD7PLf6nVQQ5JFlnRS%2Bby%2F2iXWhGHVSRownTPOhSSaBjVm6oa%2BJlr9jSBPqzGMNZmOCLeXYn5VzqjPyXOcgI5whfY6ktbWoa%2Bdlncc1ma7WB1cbnah1BgWWv3kmmKo3MepGb%2BUYXMQo3l8R%2FTAQ2cXsEI%2Fy1p%2BF5D9Y3HbZsR11vLvwFaEiSh53ntVOdN4mfz28rl9%2BAgHFQB4KSzp5%2Bh%2FS3jZnAqsFvQcEDvrWKZg8DJhamcRVOLWC%2FNapjZbsDof7QeNNNyGqA4QBsFs9QS%2BC0mSpgig%2FL23%2B1y4X9Ux42ICL5a1kSlJYdzrR%2By1sirF9xhrTylpMozhmWaMMxl%2Bnzoz%2BuV3xOdyxMBWpRt9ml%2FKHkoZh5%2B6ErdH6EYKSajHuyesDUCz6FXB1MKLx7r0GOqUBWV1y8SFLPGJ3xYpqGUnmzaiRRuf84rlXK3v078OMnmrMj1f3AIzVy%2FMwLeZdzwbLd9plvjxrsihgISnUA5vskuC0kCL5%2Fcgd9hkZa9iMFk4I%2BQmngbqhCVzDKSWEvCvid1Kl7UfwJp1nnF6AJoPQUqZRhoJyFLV9EH3rIc84uobPkc2hu35UYQoGSBouMFmsgbsUbnplv8xYhtkwnG0GsK5wEbHD&X-Amz-Signature=624a14588783a6610fe711a4d7dad88566664ea72e7d563ef287bb6109e03460&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLVDQHU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T031717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaaEmI7d2NdgGtx60AYh5%2BBvu2oNeAfhdINpQIi8k2ggIgNa08oFKwy0wm55R2gezS%2FLuqSZXTE24bSemEU7mziNIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGq5gZee22taoI0ltircA8TFDp4sfaky%2F%2FM6z1pG7KwcGX9FfYOF80rBAhsJ5dY1xysE64tTNwyRyFE6M0tTAulCphv4wvwQErmEX0VFpZ51pJ302Mz%2F%2FcU%2BkveRssXquNznakDswdf2GLeHP5JcyeyiHGZXHvLCQncduGj5cElRABLDuTc0QRniZ7MeYHj71eNT%2FnnWx0ZgLKUyjxRZljnchaSQOMuD3X4mEcJhvjEg1I17cPNBWXfFafE5iv8WGFD7PLf6nVQQ5JFlnRS%2Bby%2F2iXWhGHVSRownTPOhSSaBjVm6oa%2BJlr9jSBPqzGMNZmOCLeXYn5VzqjPyXOcgI5whfY6ktbWoa%2Bdlncc1ma7WB1cbnah1BgWWv3kmmKo3MepGb%2BUYXMQo3l8R%2FTAQ2cXsEI%2Fy1p%2BF5D9Y3HbZsR11vLvwFaEiSh53ntVOdN4mfz28rl9%2BAgHFQB4KSzp5%2Bh%2FS3jZnAqsFvQcEDvrWKZg8DJhamcRVOLWC%2FNapjZbsDof7QeNNNyGqA4QBsFs9QS%2BC0mSpgig%2FL23%2B1y4X9Ux42ICL5a1kSlJYdzrR%2By1sirF9xhrTylpMozhmWaMMxl%2Bnzoz%2BuV3xOdyxMBWpRt9ml%2FKHkoZh5%2B6ErdH6EYKSajHuyesDUCz6FXB1MKLx7r0GOqUBWV1y8SFLPGJ3xYpqGUnmzaiRRuf84rlXK3v078OMnmrMj1f3AIzVy%2FMwLeZdzwbLd9plvjxrsihgISnUA5vskuC0kCL5%2Fcgd9hkZa9iMFk4I%2BQmngbqhCVzDKSWEvCvid1Kl7UfwJp1nnF6AJoPQUqZRhoJyFLV9EH3rIc84uobPkc2hu35UYQoGSBouMFmsgbsUbnplv8xYhtkwnG0GsK5wEbHD&X-Amz-Signature=fa436e6b6025490b27ad526fea197ea257580b38318bddb22796eddc89de2d38&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
