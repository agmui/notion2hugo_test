---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FSZNTQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEHc1SDrEz2iNwBtb1cZ6b8ctqkvIDk%2FVdf6rcuQkkPbAiEAuOYZq0CRcDS3eieon%2F7AVKf4P6z%2BPU1ti4SSmI8jx7kqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqdA5j30A5lJZgRqircA4HAdAJAG%2FtQjD23Tur7Q%2BrFImnMwXl1I%2BemjxxDHicX1h%2BlPOclbHfpP8hnWXm9MZSAfg85yqGc8rfetlvF9JnN3sSQ8p5Vdiki1g%2BSseXHLV9o6D%2Bb2byLEOiE0RfLzX%2FUG2Jt1gzdzyQz%2FUVvgEkodVAu0S6RQQMOHwctKDeccxHMZwu9Wk1PpD5tUs%2BO0ZxHEFyAKtFmmRsvCYul9AQQuD8r8n0defC5iRIGeOEagGrAOkOs4hk5GBfUpCwFUPcVjp4v7rapXVGbkwCvF3F9pW1axe8aNfjfvkQXp9R0LjKsrXQbPaKlU5Q9D8uML8GPG3CBkriryk6yMuMQMplIM4Dd%2BYfZWhGbNBtWtFJ06%2FkZJlB8BFAhVDqrZdJcRFcylOd7RBwkZSPiLTDapZnKuuz6RgJqU0p8LnD0szboyaJgJQP%2FxwNho8mbupqjpRhSeAOyrdnqLRJfurPywyVXMPyYwGKXoTloBId6kpxGrQSxb8AtMkhRRdqq97Y8FOEqD0lx2SmIrVyIKzFZvnnYAAIHXQHgQvsCEOZ%2F12%2FA5el6jjX2kr6vbIxaV88nuws0SQkAHv0gcABvJaSGcZkFqm%2BhAkjonWgq9OaBN86JoHkmeGqSNnS6eQIlMLHU0sQGOqUBcZwLtc2o35uXV36fX6tO%2FfvQFDZc5D9mOr6BX5iY5hM%2BZAwK8r5qo%2BVkDHDkTVpwpMBaZk6mlWV6aIUkrSbQH5VwvwlosKpeFYRRcUMbErmkfES6fiJLBQCtUrgL6uA8rX%2BVMa9otctB86hNvH%2BJX8u%2FRy59PLHJGDApYMlwsAgDmOLF2XYRWd2BPOHzvKARwlg59uMSUr38PDSDhGv4P2ymjPos&X-Amz-Signature=14a9af8c1c8f9dd619cb7a92c6b8fd18d284bf39158e204e38d857c3393cca63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FSZNTQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEHc1SDrEz2iNwBtb1cZ6b8ctqkvIDk%2FVdf6rcuQkkPbAiEAuOYZq0CRcDS3eieon%2F7AVKf4P6z%2BPU1ti4SSmI8jx7kqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqdA5j30A5lJZgRqircA4HAdAJAG%2FtQjD23Tur7Q%2BrFImnMwXl1I%2BemjxxDHicX1h%2BlPOclbHfpP8hnWXm9MZSAfg85yqGc8rfetlvF9JnN3sSQ8p5Vdiki1g%2BSseXHLV9o6D%2Bb2byLEOiE0RfLzX%2FUG2Jt1gzdzyQz%2FUVvgEkodVAu0S6RQQMOHwctKDeccxHMZwu9Wk1PpD5tUs%2BO0ZxHEFyAKtFmmRsvCYul9AQQuD8r8n0defC5iRIGeOEagGrAOkOs4hk5GBfUpCwFUPcVjp4v7rapXVGbkwCvF3F9pW1axe8aNfjfvkQXp9R0LjKsrXQbPaKlU5Q9D8uML8GPG3CBkriryk6yMuMQMplIM4Dd%2BYfZWhGbNBtWtFJ06%2FkZJlB8BFAhVDqrZdJcRFcylOd7RBwkZSPiLTDapZnKuuz6RgJqU0p8LnD0szboyaJgJQP%2FxwNho8mbupqjpRhSeAOyrdnqLRJfurPywyVXMPyYwGKXoTloBId6kpxGrQSxb8AtMkhRRdqq97Y8FOEqD0lx2SmIrVyIKzFZvnnYAAIHXQHgQvsCEOZ%2F12%2FA5el6jjX2kr6vbIxaV88nuws0SQkAHv0gcABvJaSGcZkFqm%2BhAkjonWgq9OaBN86JoHkmeGqSNnS6eQIlMLHU0sQGOqUBcZwLtc2o35uXV36fX6tO%2FfvQFDZc5D9mOr6BX5iY5hM%2BZAwK8r5qo%2BVkDHDkTVpwpMBaZk6mlWV6aIUkrSbQH5VwvwlosKpeFYRRcUMbErmkfES6fiJLBQCtUrgL6uA8rX%2BVMa9otctB86hNvH%2BJX8u%2FRy59PLHJGDApYMlwsAgDmOLF2XYRWd2BPOHzvKARwlg59uMSUr38PDSDhGv4P2ymjPos&X-Amz-Signature=bf695f3e80563cc9de1d87ebb00e32014eb1258ebaff559be6c4a5d2b7958f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FSZNTQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEHc1SDrEz2iNwBtb1cZ6b8ctqkvIDk%2FVdf6rcuQkkPbAiEAuOYZq0CRcDS3eieon%2F7AVKf4P6z%2BPU1ti4SSmI8jx7kqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqdA5j30A5lJZgRqircA4HAdAJAG%2FtQjD23Tur7Q%2BrFImnMwXl1I%2BemjxxDHicX1h%2BlPOclbHfpP8hnWXm9MZSAfg85yqGc8rfetlvF9JnN3sSQ8p5Vdiki1g%2BSseXHLV9o6D%2Bb2byLEOiE0RfLzX%2FUG2Jt1gzdzyQz%2FUVvgEkodVAu0S6RQQMOHwctKDeccxHMZwu9Wk1PpD5tUs%2BO0ZxHEFyAKtFmmRsvCYul9AQQuD8r8n0defC5iRIGeOEagGrAOkOs4hk5GBfUpCwFUPcVjp4v7rapXVGbkwCvF3F9pW1axe8aNfjfvkQXp9R0LjKsrXQbPaKlU5Q9D8uML8GPG3CBkriryk6yMuMQMplIM4Dd%2BYfZWhGbNBtWtFJ06%2FkZJlB8BFAhVDqrZdJcRFcylOd7RBwkZSPiLTDapZnKuuz6RgJqU0p8LnD0szboyaJgJQP%2FxwNho8mbupqjpRhSeAOyrdnqLRJfurPywyVXMPyYwGKXoTloBId6kpxGrQSxb8AtMkhRRdqq97Y8FOEqD0lx2SmIrVyIKzFZvnnYAAIHXQHgQvsCEOZ%2F12%2FA5el6jjX2kr6vbIxaV88nuws0SQkAHv0gcABvJaSGcZkFqm%2BhAkjonWgq9OaBN86JoHkmeGqSNnS6eQIlMLHU0sQGOqUBcZwLtc2o35uXV36fX6tO%2FfvQFDZc5D9mOr6BX5iY5hM%2BZAwK8r5qo%2BVkDHDkTVpwpMBaZk6mlWV6aIUkrSbQH5VwvwlosKpeFYRRcUMbErmkfES6fiJLBQCtUrgL6uA8rX%2BVMa9otctB86hNvH%2BJX8u%2FRy59PLHJGDApYMlwsAgDmOLF2XYRWd2BPOHzvKARwlg59uMSUr38PDSDhGv4P2ymjPos&X-Amz-Signature=dad77b53ef9a42c29925d4ccb00ccf5100e0dbb5b0aea7b9f4c771cf164a5001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
