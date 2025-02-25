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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTW2QX3%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDzibebnpwnuY2zP%2FdyXxItd3hRAmZy37%2FCBIzjJVXhhwIhAMs6KgkG9wMl3YMOX0471lCRKMwcQQZInTQXz%2F82hGRPKv8DCDkQABoMNjM3NDIzMTgzODA1IgyX50jyAJcq0FKL2xcq3AP1zS%2BSo7fWsRxN0kWaGqPfjFTWzzZybEzNsk3PSjwpKiXzecVdjZCHlPKfYE2IxVfQAqa7rhOk2M5XnSXFdcF09EsGGdh%2BGLIUdJt%2FG7z8ybP%2FzE0MmUWK%2FSZ7fO0ymuHVCB2Ov3IZjLs%2FsQ17d6zo8Jsds8prSVOuXY5qheZEZ10K3FTkBpJdVUN6vi%2FCtuAOxzcxmzofxfcwtn48WWHrulbKZr7WRou%2Bg9KR6wEeLAseQr98J74Hv%2B%2Fkl0PBxVay31%2BfpnrhtqBRmBuGF%2BrUqouhtyi6pcaMHU6VoBGxJ9%2FBHGOlW%2Bjlc9fw%2BAcK%2FgnO%2B6lYlg9n%2FZe8ndpdLwj0TpCkdsrwWeLbt3NLZue84FsTN%2FKXffoRkyxfA0jUVZ6zEWYNgAzo18vGDhXQb%2BGZoNVunNNO6b1d3brmQN3%2FgKiiWiPQASEDeLVYS8j%2FKwwYYwmH%2BG9c%2BJQRff5wffPkpL9miGxiTxhFmVoM0mN8a%2FXW8I56WJVIA%2BvPxNX%2BQt%2Fxlzm87WyDqhogvEtEn1SzgdIzaB73UrdfGvV91yK%2BBuGEVF%2FVNO6rKdiziOISC0mY%2Fhb8uHJP05cND%2Fy6dAAPyKWKllMu%2FhTiUqsaJZJ%2FIfHHXH%2FHM6rwCKvbETDXgvS9BjqkAfcxPiy%2BO%2F2ubEYKVfhftSZu5HBmiaLml2scp6ZYdJTR%2B4mysj3HRufk9JRTnRIjFbRB9pfqTADaCHPAAExhh5caT93K3kFuHamal7YWuvhYTTkoNJtiB7Styiyo5U%2Flq%2BhWjeLU3xvYHLYQnvHxcHgHrrYLVoediU16s3iXSXRHEI%2FShWQxQKByyfbA11ECnaKL3wFoUcaL7wOjOptA79yGU%2Ft0&X-Amz-Signature=6ffdb34eeccc1cd45f829e64efb2477b156a315455ca4c29cbe988031712d9be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTW2QX3%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDzibebnpwnuY2zP%2FdyXxItd3hRAmZy37%2FCBIzjJVXhhwIhAMs6KgkG9wMl3YMOX0471lCRKMwcQQZInTQXz%2F82hGRPKv8DCDkQABoMNjM3NDIzMTgzODA1IgyX50jyAJcq0FKL2xcq3AP1zS%2BSo7fWsRxN0kWaGqPfjFTWzzZybEzNsk3PSjwpKiXzecVdjZCHlPKfYE2IxVfQAqa7rhOk2M5XnSXFdcF09EsGGdh%2BGLIUdJt%2FG7z8ybP%2FzE0MmUWK%2FSZ7fO0ymuHVCB2Ov3IZjLs%2FsQ17d6zo8Jsds8prSVOuXY5qheZEZ10K3FTkBpJdVUN6vi%2FCtuAOxzcxmzofxfcwtn48WWHrulbKZr7WRou%2Bg9KR6wEeLAseQr98J74Hv%2B%2Fkl0PBxVay31%2BfpnrhtqBRmBuGF%2BrUqouhtyi6pcaMHU6VoBGxJ9%2FBHGOlW%2Bjlc9fw%2BAcK%2FgnO%2B6lYlg9n%2FZe8ndpdLwj0TpCkdsrwWeLbt3NLZue84FsTN%2FKXffoRkyxfA0jUVZ6zEWYNgAzo18vGDhXQb%2BGZoNVunNNO6b1d3brmQN3%2FgKiiWiPQASEDeLVYS8j%2FKwwYYwmH%2BG9c%2BJQRff5wffPkpL9miGxiTxhFmVoM0mN8a%2FXW8I56WJVIA%2BvPxNX%2BQt%2Fxlzm87WyDqhogvEtEn1SzgdIzaB73UrdfGvV91yK%2BBuGEVF%2FVNO6rKdiziOISC0mY%2Fhb8uHJP05cND%2Fy6dAAPyKWKllMu%2FhTiUqsaJZJ%2FIfHHXH%2FHM6rwCKvbETDXgvS9BjqkAfcxPiy%2BO%2F2ubEYKVfhftSZu5HBmiaLml2scp6ZYdJTR%2B4mysj3HRufk9JRTnRIjFbRB9pfqTADaCHPAAExhh5caT93K3kFuHamal7YWuvhYTTkoNJtiB7Styiyo5U%2Flq%2BhWjeLU3xvYHLYQnvHxcHgHrrYLVoediU16s3iXSXRHEI%2FShWQxQKByyfbA11ECnaKL3wFoUcaL7wOjOptA79yGU%2Ft0&X-Amz-Signature=e13333fd0e92e0ed272325d11aa28f5a788038bb96699bfd4811b5211dc69354&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKTW2QX3%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDzibebnpwnuY2zP%2FdyXxItd3hRAmZy37%2FCBIzjJVXhhwIhAMs6KgkG9wMl3YMOX0471lCRKMwcQQZInTQXz%2F82hGRPKv8DCDkQABoMNjM3NDIzMTgzODA1IgyX50jyAJcq0FKL2xcq3AP1zS%2BSo7fWsRxN0kWaGqPfjFTWzzZybEzNsk3PSjwpKiXzecVdjZCHlPKfYE2IxVfQAqa7rhOk2M5XnSXFdcF09EsGGdh%2BGLIUdJt%2FG7z8ybP%2FzE0MmUWK%2FSZ7fO0ymuHVCB2Ov3IZjLs%2FsQ17d6zo8Jsds8prSVOuXY5qheZEZ10K3FTkBpJdVUN6vi%2FCtuAOxzcxmzofxfcwtn48WWHrulbKZr7WRou%2Bg9KR6wEeLAseQr98J74Hv%2B%2Fkl0PBxVay31%2BfpnrhtqBRmBuGF%2BrUqouhtyi6pcaMHU6VoBGxJ9%2FBHGOlW%2Bjlc9fw%2BAcK%2FgnO%2B6lYlg9n%2FZe8ndpdLwj0TpCkdsrwWeLbt3NLZue84FsTN%2FKXffoRkyxfA0jUVZ6zEWYNgAzo18vGDhXQb%2BGZoNVunNNO6b1d3brmQN3%2FgKiiWiPQASEDeLVYS8j%2FKwwYYwmH%2BG9c%2BJQRff5wffPkpL9miGxiTxhFmVoM0mN8a%2FXW8I56WJVIA%2BvPxNX%2BQt%2Fxlzm87WyDqhogvEtEn1SzgdIzaB73UrdfGvV91yK%2BBuGEVF%2FVNO6rKdiziOISC0mY%2Fhb8uHJP05cND%2Fy6dAAPyKWKllMu%2FhTiUqsaJZJ%2FIfHHXH%2FHM6rwCKvbETDXgvS9BjqkAfcxPiy%2BO%2F2ubEYKVfhftSZu5HBmiaLml2scp6ZYdJTR%2B4mysj3HRufk9JRTnRIjFbRB9pfqTADaCHPAAExhh5caT93K3kFuHamal7YWuvhYTTkoNJtiB7Styiyo5U%2Flq%2BhWjeLU3xvYHLYQnvHxcHgHrrYLVoediU16s3iXSXRHEI%2FShWQxQKByyfbA11ECnaKL3wFoUcaL7wOjOptA79yGU%2Ft0&X-Amz-Signature=c7c247464f7a7d9eedada405882f4ac9c622e206daffe2855f2fb9f5fb049852&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
