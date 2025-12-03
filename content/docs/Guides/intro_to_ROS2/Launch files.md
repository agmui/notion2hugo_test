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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB4WVZM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCID8nphDO8uXgPrRfLBvGRyB7KsGW6pCBiz57wsv%2BareTAiAlGYyw0MaI3U%2BJz52uHJC2TecirUj3pLirijK8v31OqCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMmIY6zaSuy84gZ1b4KtwDWG8SSXqoM5HzpL7D1HObPGIHkEjbpYBVNltQHWfFNjhzKdOOp8VPVzLCIB4ctW%2F77%2BKOe%2F6h%2BaOz%2BEqARzK6Fy%2F5l156syP9ZFUycFx5LEf8DzSviez8ckywOkNTyYDegrOYCjffloaEGszVH9kNacuRKqmp%2Bm0TnZVpb17%2FIW1dW%2FYGxSPckiXGZeXnzATlAwpKpo%2FJheG3a2oOImUDhYloCCXnx6mstCUot5PaHi%2FMmI7aqqpjRpVt4VZ6JccJib8NU9ZOzs%2By%2B0y%2FNYQ%2BClaYmZLR7t2%2Fqi7mICixF8Fltsam5vaNg8wqT6FNLE1T5lMf%2FbKWu7qlLBpclEuioxzqbhywYAQiE5X0xrEr5bb1lU4cUNVY3X%2B%2FdIkAkd3H9QBNBTCyXmMkFDmVOub6WahrnZVeSU5KGSizc43X7h3fYCI1dUwp3TuG3yb9a7g%2FoJghpzAGGdMUmVNZrIokLEqC4qsK23gUhiwZoWP1nca6Q9YN5RCnWdAt8QBojv2bv8%2BZ5SgPJVJPRppKy2CIhQbSNStpB5T7soLumA9ARr3ALsJA4%2Bpw9t%2FRmaHmAzAkL7QY2xaaueSnVGhbqFuOkCxxDU1PCp0AEd9JsF1RN%2BZNeVMamwtUwzsFceQwr5a%2ByQY6pgHD68X%2BnxKa8Wv8UHxvQQKAMQS64O8p5QBIryGRFJLBXSZawrqYcq18LpV9D3Y1lk176WbImSJ8JZjtq7MXiu0MKGYMqPXJkxGjduUFbMeCbISMu4LFBq9upL8acTnHtQ%2FJnXajM3obfBnErW27tUtrLd6OQatai5jsP6rsH%2FlGEr4%2FYEqbTyPBBY4WYvkToXE9DEIeknSntLhiLIQApo6nH2uUrttW&X-Amz-Signature=f7f01d9f729df0d364405ed51126b07c2687bfa911712aaa9f6702ca54e062cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB4WVZM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCID8nphDO8uXgPrRfLBvGRyB7KsGW6pCBiz57wsv%2BareTAiAlGYyw0MaI3U%2BJz52uHJC2TecirUj3pLirijK8v31OqCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMmIY6zaSuy84gZ1b4KtwDWG8SSXqoM5HzpL7D1HObPGIHkEjbpYBVNltQHWfFNjhzKdOOp8VPVzLCIB4ctW%2F77%2BKOe%2F6h%2BaOz%2BEqARzK6Fy%2F5l156syP9ZFUycFx5LEf8DzSviez8ckywOkNTyYDegrOYCjffloaEGszVH9kNacuRKqmp%2Bm0TnZVpb17%2FIW1dW%2FYGxSPckiXGZeXnzATlAwpKpo%2FJheG3a2oOImUDhYloCCXnx6mstCUot5PaHi%2FMmI7aqqpjRpVt4VZ6JccJib8NU9ZOzs%2By%2B0y%2FNYQ%2BClaYmZLR7t2%2Fqi7mICixF8Fltsam5vaNg8wqT6FNLE1T5lMf%2FbKWu7qlLBpclEuioxzqbhywYAQiE5X0xrEr5bb1lU4cUNVY3X%2B%2FdIkAkd3H9QBNBTCyXmMkFDmVOub6WahrnZVeSU5KGSizc43X7h3fYCI1dUwp3TuG3yb9a7g%2FoJghpzAGGdMUmVNZrIokLEqC4qsK23gUhiwZoWP1nca6Q9YN5RCnWdAt8QBojv2bv8%2BZ5SgPJVJPRppKy2CIhQbSNStpB5T7soLumA9ARr3ALsJA4%2Bpw9t%2FRmaHmAzAkL7QY2xaaueSnVGhbqFuOkCxxDU1PCp0AEd9JsF1RN%2BZNeVMamwtUwzsFceQwr5a%2ByQY6pgHD68X%2BnxKa8Wv8UHxvQQKAMQS64O8p5QBIryGRFJLBXSZawrqYcq18LpV9D3Y1lk176WbImSJ8JZjtq7MXiu0MKGYMqPXJkxGjduUFbMeCbISMu4LFBq9upL8acTnHtQ%2FJnXajM3obfBnErW27tUtrLd6OQatai5jsP6rsH%2FlGEr4%2FYEqbTyPBBY4WYvkToXE9DEIeknSntLhiLIQApo6nH2uUrttW&X-Amz-Signature=61c5144aaf2320ecb92e9fefeb22e05e51ffb1c140d36ecff02fe344efd1af83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAB4WVZM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCID8nphDO8uXgPrRfLBvGRyB7KsGW6pCBiz57wsv%2BareTAiAlGYyw0MaI3U%2BJz52uHJC2TecirUj3pLirijK8v31OqCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMmIY6zaSuy84gZ1b4KtwDWG8SSXqoM5HzpL7D1HObPGIHkEjbpYBVNltQHWfFNjhzKdOOp8VPVzLCIB4ctW%2F77%2BKOe%2F6h%2BaOz%2BEqARzK6Fy%2F5l156syP9ZFUycFx5LEf8DzSviez8ckywOkNTyYDegrOYCjffloaEGszVH9kNacuRKqmp%2Bm0TnZVpb17%2FIW1dW%2FYGxSPckiXGZeXnzATlAwpKpo%2FJheG3a2oOImUDhYloCCXnx6mstCUot5PaHi%2FMmI7aqqpjRpVt4VZ6JccJib8NU9ZOzs%2By%2B0y%2FNYQ%2BClaYmZLR7t2%2Fqi7mICixF8Fltsam5vaNg8wqT6FNLE1T5lMf%2FbKWu7qlLBpclEuioxzqbhywYAQiE5X0xrEr5bb1lU4cUNVY3X%2B%2FdIkAkd3H9QBNBTCyXmMkFDmVOub6WahrnZVeSU5KGSizc43X7h3fYCI1dUwp3TuG3yb9a7g%2FoJghpzAGGdMUmVNZrIokLEqC4qsK23gUhiwZoWP1nca6Q9YN5RCnWdAt8QBojv2bv8%2BZ5SgPJVJPRppKy2CIhQbSNStpB5T7soLumA9ARr3ALsJA4%2Bpw9t%2FRmaHmAzAkL7QY2xaaueSnVGhbqFuOkCxxDU1PCp0AEd9JsF1RN%2BZNeVMamwtUwzsFceQwr5a%2ByQY6pgHD68X%2BnxKa8Wv8UHxvQQKAMQS64O8p5QBIryGRFJLBXSZawrqYcq18LpV9D3Y1lk176WbImSJ8JZjtq7MXiu0MKGYMqPXJkxGjduUFbMeCbISMu4LFBq9upL8acTnHtQ%2FJnXajM3obfBnErW27tUtrLd6OQatai5jsP6rsH%2FlGEr4%2FYEqbTyPBBY4WYvkToXE9DEIeknSntLhiLIQApo6nH2uUrttW&X-Amz-Signature=c1550a2c10683d8cbe45d1e38f42032410b089eac0d8c1420fb80875c8a33e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
