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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RUF5KY%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7wTVrQKAGEI47xaoECFQyU4%2FvJevpESTlkHifKlAZXAiEA%2Bl6q5TApYzEkpZTsHpBFQPr68Q6BLmnvNGJDIZJHCjAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBM2XjGneD3zsTpoyrcA9IWmP7%2FQe4RGi3ZN17JlOvpk6%2FEp%2F2PixLR4iTA2DFbJGVTFJWovA%2FReElyILQ9F7%2Fqks%2BMppDqs8SKLiOX%2BgkREPhG%2FJn62DnX4Acjs9aOwupnLomlmDh89bo82p0xgUltrUWkNP88qLbO8pjcGic2sHC8e2B6wa8JrJp7DG8PmXAORHpvW6LmlYl%2F6TIwAIlOw0bLbHmQxk%2BdwhOljehUNA%2FF%2FmFD5UFYtR0GzeDyO93hx1nrQKT1%2FVwabC0h7A3oeBe1qPnPQ%2FmLHvDu6ZxZNGZkxurGhQqZTj%2BKDgmwABpSK5JzB9Y%2FV1DfwFuIKWJ3cFtW6nHDouKDawzZphdXcPcgAwuy1dqObfXmdK5YFCVPEczY6%2Bep%2FiA05lcYHKucdcl2xlwZhQ0dyFyigjq%2BW7JE60z9ZjoW8jC%2B2VtT4MunByhW4Hy7sZ2ivo9wWT78km6uwc%2FxaORfZobnzilN3Bik3jKx92ZNq2kMJKWmCnueUFtWcMhWrUCdzTSpdWAaI%2F9D3UShCoHsBi48ZpWKdvo6CZJAJK2zE6Gt1o5cnmroDhm%2BoDmVYYupyNXjo3zSn1Ia5QwqMUF65kQsF5CaYZglzrZRHBOStJzr1ijObpB2YjGQZeaWfoRpMOzG6r0GOqUBHpY69XtKfGsMwWl1zDSvvKnlbVIhAu0SiyUvDW0A%2By1QcWbKFiyvGN39LOA4%2BWkxx0GmkPqQgEVp3MrGAQx8UW4ikwj6Av%2Ff9SRmUjqoDUxl6B%2FdKQ%2FsUAVswmdgEwDuKMsKWjeiLVtU03RBMUfYzhijgcWfYkqQVVorrz7RWo5mFuWvY9p20AC%2FCVKNhE9ZrhOd419uqTrV%2BZCoJAu6DazR9X3N&X-Amz-Signature=f8969f56a2a5da5b9a3623ea84b79e6e9752c90939fc3f25f0f727717a81d33c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RUF5KY%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7wTVrQKAGEI47xaoECFQyU4%2FvJevpESTlkHifKlAZXAiEA%2Bl6q5TApYzEkpZTsHpBFQPr68Q6BLmnvNGJDIZJHCjAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBM2XjGneD3zsTpoyrcA9IWmP7%2FQe4RGi3ZN17JlOvpk6%2FEp%2F2PixLR4iTA2DFbJGVTFJWovA%2FReElyILQ9F7%2Fqks%2BMppDqs8SKLiOX%2BgkREPhG%2FJn62DnX4Acjs9aOwupnLomlmDh89bo82p0xgUltrUWkNP88qLbO8pjcGic2sHC8e2B6wa8JrJp7DG8PmXAORHpvW6LmlYl%2F6TIwAIlOw0bLbHmQxk%2BdwhOljehUNA%2FF%2FmFD5UFYtR0GzeDyO93hx1nrQKT1%2FVwabC0h7A3oeBe1qPnPQ%2FmLHvDu6ZxZNGZkxurGhQqZTj%2BKDgmwABpSK5JzB9Y%2FV1DfwFuIKWJ3cFtW6nHDouKDawzZphdXcPcgAwuy1dqObfXmdK5YFCVPEczY6%2Bep%2FiA05lcYHKucdcl2xlwZhQ0dyFyigjq%2BW7JE60z9ZjoW8jC%2B2VtT4MunByhW4Hy7sZ2ivo9wWT78km6uwc%2FxaORfZobnzilN3Bik3jKx92ZNq2kMJKWmCnueUFtWcMhWrUCdzTSpdWAaI%2F9D3UShCoHsBi48ZpWKdvo6CZJAJK2zE6Gt1o5cnmroDhm%2BoDmVYYupyNXjo3zSn1Ia5QwqMUF65kQsF5CaYZglzrZRHBOStJzr1ijObpB2YjGQZeaWfoRpMOzG6r0GOqUBHpY69XtKfGsMwWl1zDSvvKnlbVIhAu0SiyUvDW0A%2By1QcWbKFiyvGN39LOA4%2BWkxx0GmkPqQgEVp3MrGAQx8UW4ikwj6Av%2Ff9SRmUjqoDUxl6B%2FdKQ%2FsUAVswmdgEwDuKMsKWjeiLVtU03RBMUfYzhijgcWfYkqQVVorrz7RWo5mFuWvY9p20AC%2FCVKNhE9ZrhOd419uqTrV%2BZCoJAu6DazR9X3N&X-Amz-Signature=bd81896566459b0f2624fd3a3732973e51764adc870003cfa8aeb5425fcfad2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RUF5KY%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7wTVrQKAGEI47xaoECFQyU4%2FvJevpESTlkHifKlAZXAiEA%2Bl6q5TApYzEkpZTsHpBFQPr68Q6BLmnvNGJDIZJHCjAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBM2XjGneD3zsTpoyrcA9IWmP7%2FQe4RGi3ZN17JlOvpk6%2FEp%2F2PixLR4iTA2DFbJGVTFJWovA%2FReElyILQ9F7%2Fqks%2BMppDqs8SKLiOX%2BgkREPhG%2FJn62DnX4Acjs9aOwupnLomlmDh89bo82p0xgUltrUWkNP88qLbO8pjcGic2sHC8e2B6wa8JrJp7DG8PmXAORHpvW6LmlYl%2F6TIwAIlOw0bLbHmQxk%2BdwhOljehUNA%2FF%2FmFD5UFYtR0GzeDyO93hx1nrQKT1%2FVwabC0h7A3oeBe1qPnPQ%2FmLHvDu6ZxZNGZkxurGhQqZTj%2BKDgmwABpSK5JzB9Y%2FV1DfwFuIKWJ3cFtW6nHDouKDawzZphdXcPcgAwuy1dqObfXmdK5YFCVPEczY6%2Bep%2FiA05lcYHKucdcl2xlwZhQ0dyFyigjq%2BW7JE60z9ZjoW8jC%2B2VtT4MunByhW4Hy7sZ2ivo9wWT78km6uwc%2FxaORfZobnzilN3Bik3jKx92ZNq2kMJKWmCnueUFtWcMhWrUCdzTSpdWAaI%2F9D3UShCoHsBi48ZpWKdvo6CZJAJK2zE6Gt1o5cnmroDhm%2BoDmVYYupyNXjo3zSn1Ia5QwqMUF65kQsF5CaYZglzrZRHBOStJzr1ijObpB2YjGQZeaWfoRpMOzG6r0GOqUBHpY69XtKfGsMwWl1zDSvvKnlbVIhAu0SiyUvDW0A%2By1QcWbKFiyvGN39LOA4%2BWkxx0GmkPqQgEVp3MrGAQx8UW4ikwj6Av%2Ff9SRmUjqoDUxl6B%2FdKQ%2FsUAVswmdgEwDuKMsKWjeiLVtU03RBMUfYzhijgcWfYkqQVVorrz7RWo5mFuWvY9p20AC%2FCVKNhE9ZrhOd419uqTrV%2BZCoJAu6DazR9X3N&X-Amz-Signature=f68effa1c49cf922179175bf893b9e9431453a0ba90066cb875d8802d4d6c4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
