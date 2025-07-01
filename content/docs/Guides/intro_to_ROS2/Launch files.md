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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MYXTDA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqDzQvmyrLKfzniV%2FBCNzw4zsu6TWFBcT%2BulaxoBSzUAiBB7aQRdoyTZ4vX8yHj6PGRbAZIU2RjEKL8uTbmDC%2BkjiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxdXb8xxVtr0jFY76KtwDJD0KM1donHNJhrn4v0ko2PzuMfN4n7e%2FQi8O%2Bu5n6WgnPiSuCngiI9ViNnVs1jPfTf1CxRMZqLpkHmZUDBmDoD2TTO8ggEhq4%2FWQYytKkvnvAlh%2Fiz1xMCw%2Fus147oMNYkvovV4Ph87p2LC%2BTYkAhnyuYSrPmjEsU3o2QkOuRYrWgBx%2FL9TyWGECXZLp1TwmpZ5od5yvyR2%2F63a0tX6i1GEx39o7i8ygATpbtiiFNqqjvEHOVs%2BtjdVo6obEWdHHNPEkvHLSJE5VJpYr1DK6E%2B0zhfiKNs7pXntNFSbvndM74mnLz69Km%2BRH9KwXeetTPvZRpoChP%2F8hwAsr4tkyAkwVCFbT96x9UPeJyoMeNLk3ACSzTC1ETFn4RNMyJsEMybx8dp5MfReKu%2FpsLLXP4nl3nV80mnq5g762Le0Nbm0UGoYxDVuxg1WGiWoZnsXVpzFQ9LhPyK9bwgywKNSIyWCGPNcedsnpsb49Di8DeVSO0df0zVvumO0DRj2d7VlwinRlg9v52G5IUWyxyggnK4W9vsDJjFPPFwoU62mIItqjPSccLzspqiyDLfSUVC%2Bq870VD%2BYghUad%2FpdDkJmEkLB4bGprTawjUPJh9BYggQIIXZ2JSKTe4bq79xAwn82MwwY6pgHoHEV3OPzS5FrR5lrksyoDooHOJLJxQfPROeLOsmxmYK5PIrdzzh3Jx1BAkdTgriI7Bn1Lvq6got02dgpZQSq9U%2FiVJ8bP3f2X67nB7RdycybkiZwvtjeJdbB6JmRASpZasP4FuIZpurK6DNerNtGJ%2FFt3J5QVtFLf%2F5RHohdpiWY9PxmjUbptXBCTB3EPbvz6GMvS6DDP0hB4UJ1f8gP%2F2juQ17xE&X-Amz-Signature=dfecc20e9218eb53eb201a84c87a295d3daecea4d05dbcdef0c2c8bddf06f692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MYXTDA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqDzQvmyrLKfzniV%2FBCNzw4zsu6TWFBcT%2BulaxoBSzUAiBB7aQRdoyTZ4vX8yHj6PGRbAZIU2RjEKL8uTbmDC%2BkjiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxdXb8xxVtr0jFY76KtwDJD0KM1donHNJhrn4v0ko2PzuMfN4n7e%2FQi8O%2Bu5n6WgnPiSuCngiI9ViNnVs1jPfTf1CxRMZqLpkHmZUDBmDoD2TTO8ggEhq4%2FWQYytKkvnvAlh%2Fiz1xMCw%2Fus147oMNYkvovV4Ph87p2LC%2BTYkAhnyuYSrPmjEsU3o2QkOuRYrWgBx%2FL9TyWGECXZLp1TwmpZ5od5yvyR2%2F63a0tX6i1GEx39o7i8ygATpbtiiFNqqjvEHOVs%2BtjdVo6obEWdHHNPEkvHLSJE5VJpYr1DK6E%2B0zhfiKNs7pXntNFSbvndM74mnLz69Km%2BRH9KwXeetTPvZRpoChP%2F8hwAsr4tkyAkwVCFbT96x9UPeJyoMeNLk3ACSzTC1ETFn4RNMyJsEMybx8dp5MfReKu%2FpsLLXP4nl3nV80mnq5g762Le0Nbm0UGoYxDVuxg1WGiWoZnsXVpzFQ9LhPyK9bwgywKNSIyWCGPNcedsnpsb49Di8DeVSO0df0zVvumO0DRj2d7VlwinRlg9v52G5IUWyxyggnK4W9vsDJjFPPFwoU62mIItqjPSccLzspqiyDLfSUVC%2Bq870VD%2BYghUad%2FpdDkJmEkLB4bGprTawjUPJh9BYggQIIXZ2JSKTe4bq79xAwn82MwwY6pgHoHEV3OPzS5FrR5lrksyoDooHOJLJxQfPROeLOsmxmYK5PIrdzzh3Jx1BAkdTgriI7Bn1Lvq6got02dgpZQSq9U%2FiVJ8bP3f2X67nB7RdycybkiZwvtjeJdbB6JmRASpZasP4FuIZpurK6DNerNtGJ%2FFt3J5QVtFLf%2F5RHohdpiWY9PxmjUbptXBCTB3EPbvz6GMvS6DDP0hB4UJ1f8gP%2F2juQ17xE&X-Amz-Signature=725737dbd42938fe6eef7ca5340d597a8be748b293be681f7409c27c04e696ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MYXTDA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqDzQvmyrLKfzniV%2FBCNzw4zsu6TWFBcT%2BulaxoBSzUAiBB7aQRdoyTZ4vX8yHj6PGRbAZIU2RjEKL8uTbmDC%2BkjiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxdXb8xxVtr0jFY76KtwDJD0KM1donHNJhrn4v0ko2PzuMfN4n7e%2FQi8O%2Bu5n6WgnPiSuCngiI9ViNnVs1jPfTf1CxRMZqLpkHmZUDBmDoD2TTO8ggEhq4%2FWQYytKkvnvAlh%2Fiz1xMCw%2Fus147oMNYkvovV4Ph87p2LC%2BTYkAhnyuYSrPmjEsU3o2QkOuRYrWgBx%2FL9TyWGECXZLp1TwmpZ5od5yvyR2%2F63a0tX6i1GEx39o7i8ygATpbtiiFNqqjvEHOVs%2BtjdVo6obEWdHHNPEkvHLSJE5VJpYr1DK6E%2B0zhfiKNs7pXntNFSbvndM74mnLz69Km%2BRH9KwXeetTPvZRpoChP%2F8hwAsr4tkyAkwVCFbT96x9UPeJyoMeNLk3ACSzTC1ETFn4RNMyJsEMybx8dp5MfReKu%2FpsLLXP4nl3nV80mnq5g762Le0Nbm0UGoYxDVuxg1WGiWoZnsXVpzFQ9LhPyK9bwgywKNSIyWCGPNcedsnpsb49Di8DeVSO0df0zVvumO0DRj2d7VlwinRlg9v52G5IUWyxyggnK4W9vsDJjFPPFwoU62mIItqjPSccLzspqiyDLfSUVC%2Bq870VD%2BYghUad%2FpdDkJmEkLB4bGprTawjUPJh9BYggQIIXZ2JSKTe4bq79xAwn82MwwY6pgHoHEV3OPzS5FrR5lrksyoDooHOJLJxQfPROeLOsmxmYK5PIrdzzh3Jx1BAkdTgriI7Bn1Lvq6got02dgpZQSq9U%2FiVJ8bP3f2X67nB7RdycybkiZwvtjeJdbB6JmRASpZasP4FuIZpurK6DNerNtGJ%2FFt3J5QVtFLf%2F5RHohdpiWY9PxmjUbptXBCTB3EPbvz6GMvS6DDP0hB4UJ1f8gP%2F2juQ17xE&X-Amz-Signature=59aa939334f902afa44fb5fe3f2f4a6e600a2ef42f5808c445b2a46a380467b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
