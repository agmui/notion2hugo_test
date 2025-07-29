---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KCEVXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwxz2HI7gANCc%2BuEbVaq0knfZN2fA%2BrhG%2FFuLWEoEsuwIhAPxLKVodx8qmiBTUVrizHzSAmMLvApD2ALn%2Bl9CkqJGwKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxaP59%2F2cfVPG7DbUq3ANcHoIHhgAZbP4vrHbTXSSh6%2BQqDgCv5lLb2osLjXJFeOjEhyfHs1%2F90L8Wid7otOgjyepFKmC1CZPs%2FGF%2BlQ1tQk%2F2IVxUeVD6w41Fcm44tSpmGZ3bICtEbRWgKzppEOPzN2AAmu6vWa2nIFcIdLLLLlFeVAC8MydSC7YEpAeLC%2FXBlZTmREx2ByY3xssGufASGaJaey6YKdJaXx6HYwy9x7a47mxbmwiE%2FgUwEYAK1k6ffAaThAOtduMciao%2BVo8cIo9ifiNsI8N5TX%2FSP82c0EgqG%2Bh2hOxtBbia0KKLuTOtVokvhs2py0KtvTqCKOydPEYRJWDmD7BEspMtuWVexwzGVb04ib9SDilxUB5LJd7dXobI7FeoVhcDPR6W45Y5d%2F2tph38855VOUqEWM00gY5vYmGKvJk9sfK0TL6Z3e5sUi6z%2FgVNw8I1EH3aA168QMWbQgMlDaXm45yJ3FnKslbyo9twqFM8NOZg5T37g408hJoz4erNUGrjSbmRq5j4j%2Bqbx4ZLWDNM27DXM%2BpIsYTa6vy0%2FKXJT5pw38sD17tMO3vSdM2LSejxg2xr49BlU5KD7NT5VuZG3I7%2Fj%2BoHNznx3XRL6lm7QLWAc4chj2HyIibY23KCSLyetzDhg6LEBjqkAekUf2mp%2BB8HIi9RFdX4PveqRHIHQCLvwXPumD7o%2FZXx%2FPZR8XamOHttdEX8Iz56qXoHdys1ErTY4s9PAJQMk5Y6kusKr684h7riMagqkzCGetd9RcnvkGiBdHxZSV8vhiFalN3CuskQizwKRSiidC0HEIce8qXq5Mj6WgoqPUbcspgG%2Bl3rWcMe5YAme9Lx4Cyh7PzpoOZQeypYIY4tr2zLlAUj&X-Amz-Signature=391a4a1668d7122e4be1a6697a22620d91ef2b9c140bc6ced104f025d4494799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KCEVXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwxz2HI7gANCc%2BuEbVaq0knfZN2fA%2BrhG%2FFuLWEoEsuwIhAPxLKVodx8qmiBTUVrizHzSAmMLvApD2ALn%2Bl9CkqJGwKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxaP59%2F2cfVPG7DbUq3ANcHoIHhgAZbP4vrHbTXSSh6%2BQqDgCv5lLb2osLjXJFeOjEhyfHs1%2F90L8Wid7otOgjyepFKmC1CZPs%2FGF%2BlQ1tQk%2F2IVxUeVD6w41Fcm44tSpmGZ3bICtEbRWgKzppEOPzN2AAmu6vWa2nIFcIdLLLLlFeVAC8MydSC7YEpAeLC%2FXBlZTmREx2ByY3xssGufASGaJaey6YKdJaXx6HYwy9x7a47mxbmwiE%2FgUwEYAK1k6ffAaThAOtduMciao%2BVo8cIo9ifiNsI8N5TX%2FSP82c0EgqG%2Bh2hOxtBbia0KKLuTOtVokvhs2py0KtvTqCKOydPEYRJWDmD7BEspMtuWVexwzGVb04ib9SDilxUB5LJd7dXobI7FeoVhcDPR6W45Y5d%2F2tph38855VOUqEWM00gY5vYmGKvJk9sfK0TL6Z3e5sUi6z%2FgVNw8I1EH3aA168QMWbQgMlDaXm45yJ3FnKslbyo9twqFM8NOZg5T37g408hJoz4erNUGrjSbmRq5j4j%2Bqbx4ZLWDNM27DXM%2BpIsYTa6vy0%2FKXJT5pw38sD17tMO3vSdM2LSejxg2xr49BlU5KD7NT5VuZG3I7%2Fj%2BoHNznx3XRL6lm7QLWAc4chj2HyIibY23KCSLyetzDhg6LEBjqkAekUf2mp%2BB8HIi9RFdX4PveqRHIHQCLvwXPumD7o%2FZXx%2FPZR8XamOHttdEX8Iz56qXoHdys1ErTY4s9PAJQMk5Y6kusKr684h7riMagqkzCGetd9RcnvkGiBdHxZSV8vhiFalN3CuskQizwKRSiidC0HEIce8qXq5Mj6WgoqPUbcspgG%2Bl3rWcMe5YAme9Lx4Cyh7PzpoOZQeypYIY4tr2zLlAUj&X-Amz-Signature=fe715ea6e255bc72ef6f2690c1a7fd9857c23cacde1986140c313632842b9abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KCEVXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDwxz2HI7gANCc%2BuEbVaq0knfZN2fA%2BrhG%2FFuLWEoEsuwIhAPxLKVodx8qmiBTUVrizHzSAmMLvApD2ALn%2Bl9CkqJGwKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxaP59%2F2cfVPG7DbUq3ANcHoIHhgAZbP4vrHbTXSSh6%2BQqDgCv5lLb2osLjXJFeOjEhyfHs1%2F90L8Wid7otOgjyepFKmC1CZPs%2FGF%2BlQ1tQk%2F2IVxUeVD6w41Fcm44tSpmGZ3bICtEbRWgKzppEOPzN2AAmu6vWa2nIFcIdLLLLlFeVAC8MydSC7YEpAeLC%2FXBlZTmREx2ByY3xssGufASGaJaey6YKdJaXx6HYwy9x7a47mxbmwiE%2FgUwEYAK1k6ffAaThAOtduMciao%2BVo8cIo9ifiNsI8N5TX%2FSP82c0EgqG%2Bh2hOxtBbia0KKLuTOtVokvhs2py0KtvTqCKOydPEYRJWDmD7BEspMtuWVexwzGVb04ib9SDilxUB5LJd7dXobI7FeoVhcDPR6W45Y5d%2F2tph38855VOUqEWM00gY5vYmGKvJk9sfK0TL6Z3e5sUi6z%2FgVNw8I1EH3aA168QMWbQgMlDaXm45yJ3FnKslbyo9twqFM8NOZg5T37g408hJoz4erNUGrjSbmRq5j4j%2Bqbx4ZLWDNM27DXM%2BpIsYTa6vy0%2FKXJT5pw38sD17tMO3vSdM2LSejxg2xr49BlU5KD7NT5VuZG3I7%2Fj%2BoHNznx3XRL6lm7QLWAc4chj2HyIibY23KCSLyetzDhg6LEBjqkAekUf2mp%2BB8HIi9RFdX4PveqRHIHQCLvwXPumD7o%2FZXx%2FPZR8XamOHttdEX8Iz56qXoHdys1ErTY4s9PAJQMk5Y6kusKr684h7riMagqkzCGetd9RcnvkGiBdHxZSV8vhiFalN3CuskQizwKRSiidC0HEIce8qXq5Mj6WgoqPUbcspgG%2Bl3rWcMe5YAme9Lx4Cyh7PzpoOZQeypYIY4tr2zLlAUj&X-Amz-Signature=4a57fc9a7c0c27d2b9982536fc4436fa098cb0316d6c00ae2a6461507505be17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
