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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2LC5A3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDVkp6jd9PoldJx95IBX7qNCXXzUpGEpgIgaLpYTXZrygIgK9Hr9xiD8H%2FzHCnC3MFMikQbzrxVwaUX7UOLQshoWqEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqvtsjdbw9jXxzsHSrcA5YU8OPkaSACBu59tZBWuF7SPiXDtzieHZw1LZdL4aue20osTA8fK%2Bz6oSsVZRie31B1OyuyeAY6uAmwhtDnSemeVwXVeHgEsOPRTK2qEGP7fmpjyfvA8FvkRFSBN%2BpsWPVY%2B1qW2HKVv9F9wwzi09Ao7hriCD9ahNX27D8h75mSGEtu0u5sdsfm4hjuonVxzoouEejGvmNwmCHbJp80Ej8QeZewaP7X7nw2n1%2FUjxcaKErFbfsj%2FuURTbiq7HoDbQiBmPNnl6SURzeHJOGHhF%2B%2FQ4GA1TDrlJ6%2FVxc3UFz8tJ7Vgdt5UYkQYuGRSj%2F31MmrYOpi%2FFv9UTvxo%2BZnRe%2BOuQV3PhmYvyYXiWbk7bavsQz5FpnCjsIYupFQJNsYXtkrmpefhGgWkVIjz9I2HAE5dmw3FTOKBkBwRqby72aX4wUk3Pcjy61vV53u9XMD1fECIBuCTh436OhmcNY%2F%2BNaT9DSBqpbu20zliyQE4jucqvwccSsZsvpJHywjK%2FKS8wZX9JaLYaqwQxTMhOvddss38Kpzj4UVoE%2B0ljRTrjhumlF4QlfF4ufMAfmF%2BgqTvA5DFmhKg50DwB2R0G8yiv%2B2y58UnXaqCc0Y9BEKxiz97qjmp4KOlylNJQl7MKe3578GOqUBAnFwfs42RhVCKR86Sclw72VLQ1L5X22BpKsVMW2SJirj3BqbQ3CakWccYV7B6jWMvstCAFoNaEaknPLezFF5Rn5e4GpGDGx8OfBCCJ%2BoAdYkAaaPOc8dM9UZvGVhThwQ2ppL1nsWR87iNmliK%2BEkrlvOuyvtGbT%2BI1j5%2FyDzl%2B3RKviAXJJ0GBnRY9vZMN%2BS0552ukkFTP8Wh3lFqABzATAnCIpr&X-Amz-Signature=8c53a1af151aba21f9f78ea4390669fec6ca303cbfa522ddc36bc617ba51a8ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2LC5A3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDVkp6jd9PoldJx95IBX7qNCXXzUpGEpgIgaLpYTXZrygIgK9Hr9xiD8H%2FzHCnC3MFMikQbzrxVwaUX7UOLQshoWqEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqvtsjdbw9jXxzsHSrcA5YU8OPkaSACBu59tZBWuF7SPiXDtzieHZw1LZdL4aue20osTA8fK%2Bz6oSsVZRie31B1OyuyeAY6uAmwhtDnSemeVwXVeHgEsOPRTK2qEGP7fmpjyfvA8FvkRFSBN%2BpsWPVY%2B1qW2HKVv9F9wwzi09Ao7hriCD9ahNX27D8h75mSGEtu0u5sdsfm4hjuonVxzoouEejGvmNwmCHbJp80Ej8QeZewaP7X7nw2n1%2FUjxcaKErFbfsj%2FuURTbiq7HoDbQiBmPNnl6SURzeHJOGHhF%2B%2FQ4GA1TDrlJ6%2FVxc3UFz8tJ7Vgdt5UYkQYuGRSj%2F31MmrYOpi%2FFv9UTvxo%2BZnRe%2BOuQV3PhmYvyYXiWbk7bavsQz5FpnCjsIYupFQJNsYXtkrmpefhGgWkVIjz9I2HAE5dmw3FTOKBkBwRqby72aX4wUk3Pcjy61vV53u9XMD1fECIBuCTh436OhmcNY%2F%2BNaT9DSBqpbu20zliyQE4jucqvwccSsZsvpJHywjK%2FKS8wZX9JaLYaqwQxTMhOvddss38Kpzj4UVoE%2B0ljRTrjhumlF4QlfF4ufMAfmF%2BgqTvA5DFmhKg50DwB2R0G8yiv%2B2y58UnXaqCc0Y9BEKxiz97qjmp4KOlylNJQl7MKe3578GOqUBAnFwfs42RhVCKR86Sclw72VLQ1L5X22BpKsVMW2SJirj3BqbQ3CakWccYV7B6jWMvstCAFoNaEaknPLezFF5Rn5e4GpGDGx8OfBCCJ%2BoAdYkAaaPOc8dM9UZvGVhThwQ2ppL1nsWR87iNmliK%2BEkrlvOuyvtGbT%2BI1j5%2FyDzl%2B3RKviAXJJ0GBnRY9vZMN%2BS0552ukkFTP8Wh3lFqABzATAnCIpr&X-Amz-Signature=002c0fd7afc34d6862a1b74835a16d050f8f2ed35a1c6455f892e7354fc3bee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM2LC5A3%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDVkp6jd9PoldJx95IBX7qNCXXzUpGEpgIgaLpYTXZrygIgK9Hr9xiD8H%2FzHCnC3MFMikQbzrxVwaUX7UOLQshoWqEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqvtsjdbw9jXxzsHSrcA5YU8OPkaSACBu59tZBWuF7SPiXDtzieHZw1LZdL4aue20osTA8fK%2Bz6oSsVZRie31B1OyuyeAY6uAmwhtDnSemeVwXVeHgEsOPRTK2qEGP7fmpjyfvA8FvkRFSBN%2BpsWPVY%2B1qW2HKVv9F9wwzi09Ao7hriCD9ahNX27D8h75mSGEtu0u5sdsfm4hjuonVxzoouEejGvmNwmCHbJp80Ej8QeZewaP7X7nw2n1%2FUjxcaKErFbfsj%2FuURTbiq7HoDbQiBmPNnl6SURzeHJOGHhF%2B%2FQ4GA1TDrlJ6%2FVxc3UFz8tJ7Vgdt5UYkQYuGRSj%2F31MmrYOpi%2FFv9UTvxo%2BZnRe%2BOuQV3PhmYvyYXiWbk7bavsQz5FpnCjsIYupFQJNsYXtkrmpefhGgWkVIjz9I2HAE5dmw3FTOKBkBwRqby72aX4wUk3Pcjy61vV53u9XMD1fECIBuCTh436OhmcNY%2F%2BNaT9DSBqpbu20zliyQE4jucqvwccSsZsvpJHywjK%2FKS8wZX9JaLYaqwQxTMhOvddss38Kpzj4UVoE%2B0ljRTrjhumlF4QlfF4ufMAfmF%2BgqTvA5DFmhKg50DwB2R0G8yiv%2B2y58UnXaqCc0Y9BEKxiz97qjmp4KOlylNJQl7MKe3578GOqUBAnFwfs42RhVCKR86Sclw72VLQ1L5X22BpKsVMW2SJirj3BqbQ3CakWccYV7B6jWMvstCAFoNaEaknPLezFF5Rn5e4GpGDGx8OfBCCJ%2BoAdYkAaaPOc8dM9UZvGVhThwQ2ppL1nsWR87iNmliK%2BEkrlvOuyvtGbT%2BI1j5%2FyDzl%2B3RKviAXJJ0GBnRY9vZMN%2BS0552ukkFTP8Wh3lFqABzATAnCIpr&X-Amz-Signature=a93a6958d982a39c2cfe121b6dbff6168e8aadeca6eb7efd1d71c665bf6627c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
