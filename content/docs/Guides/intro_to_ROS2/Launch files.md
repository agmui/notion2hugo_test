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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCXBTTU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEfCIoznb5uADkn4dlxWY9flBpCcz0tqIFaL7SHjT3pAAiAYs1Opm57CtFlORUaSq9DDpYMxv30fmozHrSfOXcsVIyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzoZ9%2BP0%2FkW8KD7SKtwDBiqnIEiLga%2BbjVT1VTuFnbgCKVQ1cqnMTRpKhiiGjagtZPPo2Dik2rC9lUQ9qts4o0MYunyZM%2BoM4FMx00M50BEjYZ5%2FhxkWeKptDW9tFtSYVRpc%2Fiv8hQ90xGnziJxidJOcVmOndDv328bU5ZPNYe3MvlFDcjXDhiI9P9KPhAmBeaxQsPWvioqeH0Q6NjhAoJa4qyK7xMtFMSUOeypBFjtl0RTaPXLLaYGD2yHLfE23OKZyVJZxrOJqy00uweNmJ9Uc%2Bk9Bnm0JByPa6TSjdj1iJI7k5vRvpsDUXwI7Zk1UfuTG66UpPe0KP19SfZWMtVbVE1WIGfSPKsQlHmMdgNafbpW%2F%2BUbfqLUOTeDlZkt1wktCr%2B4YajDRfIjjs7ByApUhI%2FYuehwd1DMrFX1LkkEt3T3yte4xKADN2%2FCMj5z%2FJZUSCfM9mT8o2ArB5Dn3Ubl7EZQ72pH%2FoKThpSWVqibZMyUbkolJKeIZRbPaFBsiLCqHLOj9tSsWD1iFwtkXSaiBSmRWTEToJzGhAkAMEj2c1IMTqQNCAN1nm9R23Me7PzSvc9JqEZBlRVMYH1%2BWBW6QyykfsSrcPzsO6YM4gQNZ1gUkOijuus8OI%2BZM%2BgxSQpgI1YhUZOjyAvQw0OrYxAY6pgHv8EHbm7GpiFRfr2vWuRgHTduYsrb9AsL1OYLbn6JyNIKJSSYFmVJB9Hzv5mBxgb74LIl0%2BQQZXAT9FckdFfx%2BuguZiIiOosZsrHnrLABt6fl2OuGvMFqhe6txFPpETy9SLghUGlTwjBeqzSASnTLpjdulIORdcuxz7cpCWJ3Go9FYtKMs%2FJwCwH4ojroXmXbAKERllfNiba4fJMJW6ZuVtILWzSiu&X-Amz-Signature=e50d7e53673dd0e90d7346d7fcc5a3a4cfff2da761d74bb5a3988ec23f2118f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCXBTTU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEfCIoznb5uADkn4dlxWY9flBpCcz0tqIFaL7SHjT3pAAiAYs1Opm57CtFlORUaSq9DDpYMxv30fmozHrSfOXcsVIyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzoZ9%2BP0%2FkW8KD7SKtwDBiqnIEiLga%2BbjVT1VTuFnbgCKVQ1cqnMTRpKhiiGjagtZPPo2Dik2rC9lUQ9qts4o0MYunyZM%2BoM4FMx00M50BEjYZ5%2FhxkWeKptDW9tFtSYVRpc%2Fiv8hQ90xGnziJxidJOcVmOndDv328bU5ZPNYe3MvlFDcjXDhiI9P9KPhAmBeaxQsPWvioqeH0Q6NjhAoJa4qyK7xMtFMSUOeypBFjtl0RTaPXLLaYGD2yHLfE23OKZyVJZxrOJqy00uweNmJ9Uc%2Bk9Bnm0JByPa6TSjdj1iJI7k5vRvpsDUXwI7Zk1UfuTG66UpPe0KP19SfZWMtVbVE1WIGfSPKsQlHmMdgNafbpW%2F%2BUbfqLUOTeDlZkt1wktCr%2B4YajDRfIjjs7ByApUhI%2FYuehwd1DMrFX1LkkEt3T3yte4xKADN2%2FCMj5z%2FJZUSCfM9mT8o2ArB5Dn3Ubl7EZQ72pH%2FoKThpSWVqibZMyUbkolJKeIZRbPaFBsiLCqHLOj9tSsWD1iFwtkXSaiBSmRWTEToJzGhAkAMEj2c1IMTqQNCAN1nm9R23Me7PzSvc9JqEZBlRVMYH1%2BWBW6QyykfsSrcPzsO6YM4gQNZ1gUkOijuus8OI%2BZM%2BgxSQpgI1YhUZOjyAvQw0OrYxAY6pgHv8EHbm7GpiFRfr2vWuRgHTduYsrb9AsL1OYLbn6JyNIKJSSYFmVJB9Hzv5mBxgb74LIl0%2BQQZXAT9FckdFfx%2BuguZiIiOosZsrHnrLABt6fl2OuGvMFqhe6txFPpETy9SLghUGlTwjBeqzSASnTLpjdulIORdcuxz7cpCWJ3Go9FYtKMs%2FJwCwH4ojroXmXbAKERllfNiba4fJMJW6ZuVtILWzSiu&X-Amz-Signature=60746a78e6fe5d35a1f06725e5a31daffd0c75ed01a09ea94bbeb3242bede1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCXBTTU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEfCIoznb5uADkn4dlxWY9flBpCcz0tqIFaL7SHjT3pAAiAYs1Opm57CtFlORUaSq9DDpYMxv30fmozHrSfOXcsVIyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxzoZ9%2BP0%2FkW8KD7SKtwDBiqnIEiLga%2BbjVT1VTuFnbgCKVQ1cqnMTRpKhiiGjagtZPPo2Dik2rC9lUQ9qts4o0MYunyZM%2BoM4FMx00M50BEjYZ5%2FhxkWeKptDW9tFtSYVRpc%2Fiv8hQ90xGnziJxidJOcVmOndDv328bU5ZPNYe3MvlFDcjXDhiI9P9KPhAmBeaxQsPWvioqeH0Q6NjhAoJa4qyK7xMtFMSUOeypBFjtl0RTaPXLLaYGD2yHLfE23OKZyVJZxrOJqy00uweNmJ9Uc%2Bk9Bnm0JByPa6TSjdj1iJI7k5vRvpsDUXwI7Zk1UfuTG66UpPe0KP19SfZWMtVbVE1WIGfSPKsQlHmMdgNafbpW%2F%2BUbfqLUOTeDlZkt1wktCr%2B4YajDRfIjjs7ByApUhI%2FYuehwd1DMrFX1LkkEt3T3yte4xKADN2%2FCMj5z%2FJZUSCfM9mT8o2ArB5Dn3Ubl7EZQ72pH%2FoKThpSWVqibZMyUbkolJKeIZRbPaFBsiLCqHLOj9tSsWD1iFwtkXSaiBSmRWTEToJzGhAkAMEj2c1IMTqQNCAN1nm9R23Me7PzSvc9JqEZBlRVMYH1%2BWBW6QyykfsSrcPzsO6YM4gQNZ1gUkOijuus8OI%2BZM%2BgxSQpgI1YhUZOjyAvQw0OrYxAY6pgHv8EHbm7GpiFRfr2vWuRgHTduYsrb9AsL1OYLbn6JyNIKJSSYFmVJB9Hzv5mBxgb74LIl0%2BQQZXAT9FckdFfx%2BuguZiIiOosZsrHnrLABt6fl2OuGvMFqhe6txFPpETy9SLghUGlTwjBeqzSASnTLpjdulIORdcuxz7cpCWJ3Go9FYtKMs%2FJwCwH4ojroXmXbAKERllfNiba4fJMJW6ZuVtILWzSiu&X-Amz-Signature=ed4b152baec30483178e5ce66ba1695398015acac8e759c2fefb72ba0efc660c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
