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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHHIOLC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAaTTKjHSg7GyhUOm0gDlZspmnCtE8bunTGOSV%2BmptmAiEA1sJzwgNzypZiovtj8d7kmV%2FjpCgKBJyWFcUxJG%2F5fmkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrNRutKsypl6LD3JCrcA8ecDoR9faal7EyhaVf8TtJXIbWC%2Fi1PGMcJiFNMQX3YU1eHbMr9unHpHBgoo9EC%2F%2BeH%2Fdwjp7%2FTHOwd2TLP1XMNW7LEL%2BWxJv5Aqyabiz%2F4BYs%2Fajvhe6YtW0Y6yMPF063VTd1Dc3l%2B%2FoZ4f4VEyqvhEWYZJ45Z8Pw%2FvSRwqC%2FfvDN9FFjNWUIAvy%2FdddeC%2FQsDesuj2vvhckmAZCcMSfKTiTrEah7nCBq9mPaXBPpDY7h0AYhCT%2FLA9eZe%2BqLkMzBBHq09MamZIyollKxcGTYsMo6Nqbo1xN7a47ITbDJHFfss%2Bvu5rZS7zHTr7xqfQj3zNGlzCO9wlVzJRNwhFNQt87VSeQKZopr7e7b14VUCtAN%2FEyUndboeRIHsmEracBvX2wzRqHW8HRr15Z%2BTAv%2BJ8%2FkJZgc%2BgPr2NTfEVvFB%2F8GNkWroOefdFbPobTZpeVqUaFNEbAy1Q2dBMK2U5Tez7iHw9pzZ6a9YNvXhgiTldEwBa2R3Sra9DcSaj6zFFV6wa33Wbl1KvP1e47zIqaJl2U91gF1X3hHr9yUA07iIxOsWg68phNhaxBa299se9Vx%2FHEpdIi2HmZw5zmlULn38hwBXMPBxZjHoihX4WWuy61ImWj0Vl1btH%2B9dMPOsntQGOqUBZw2pve4BoaJ%2BtWi7Ms8sCu87Ji%2BmFVdnEXFXAs%2BURcC8vzwm2iH1fnSbIswQwtH29VNU%2Fhv9Fdg3AuRyzhHZdxW6bNj8ei7BINcdpwxwfYyLEelOaAC5TysbK7Ktgl1tQj%2FHT8oGAnt6yo6hq33dLnt5l2OrSjNjMRXd3BfYmukp5AynlLWdJbdl98c%2B2IcTEdykWKEWnrnEjFKHbmzVlCzccH8D&X-Amz-Signature=390904cb265dda9691a76e14c84f54470a73cc293bef1d291cded48d752c9ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHHIOLC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAaTTKjHSg7GyhUOm0gDlZspmnCtE8bunTGOSV%2BmptmAiEA1sJzwgNzypZiovtj8d7kmV%2FjpCgKBJyWFcUxJG%2F5fmkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrNRutKsypl6LD3JCrcA8ecDoR9faal7EyhaVf8TtJXIbWC%2Fi1PGMcJiFNMQX3YU1eHbMr9unHpHBgoo9EC%2F%2BeH%2Fdwjp7%2FTHOwd2TLP1XMNW7LEL%2BWxJv5Aqyabiz%2F4BYs%2Fajvhe6YtW0Y6yMPF063VTd1Dc3l%2B%2FoZ4f4VEyqvhEWYZJ45Z8Pw%2FvSRwqC%2FfvDN9FFjNWUIAvy%2FdddeC%2FQsDesuj2vvhckmAZCcMSfKTiTrEah7nCBq9mPaXBPpDY7h0AYhCT%2FLA9eZe%2BqLkMzBBHq09MamZIyollKxcGTYsMo6Nqbo1xN7a47ITbDJHFfss%2Bvu5rZS7zHTr7xqfQj3zNGlzCO9wlVzJRNwhFNQt87VSeQKZopr7e7b14VUCtAN%2FEyUndboeRIHsmEracBvX2wzRqHW8HRr15Z%2BTAv%2BJ8%2FkJZgc%2BgPr2NTfEVvFB%2F8GNkWroOefdFbPobTZpeVqUaFNEbAy1Q2dBMK2U5Tez7iHw9pzZ6a9YNvXhgiTldEwBa2R3Sra9DcSaj6zFFV6wa33Wbl1KvP1e47zIqaJl2U91gF1X3hHr9yUA07iIxOsWg68phNhaxBa299se9Vx%2FHEpdIi2HmZw5zmlULn38hwBXMPBxZjHoihX4WWuy61ImWj0Vl1btH%2B9dMPOsntQGOqUBZw2pve4BoaJ%2BtWi7Ms8sCu87Ji%2BmFVdnEXFXAs%2BURcC8vzwm2iH1fnSbIswQwtH29VNU%2Fhv9Fdg3AuRyzhHZdxW6bNj8ei7BINcdpwxwfYyLEelOaAC5TysbK7Ktgl1tQj%2FHT8oGAnt6yo6hq33dLnt5l2OrSjNjMRXd3BfYmukp5AynlLWdJbdl98c%2B2IcTEdykWKEWnrnEjFKHbmzVlCzccH8D&X-Amz-Signature=60e484bfe423116f9b4d2e3cd9fd00d0e16ce6847354ab380af0ebcf76739a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHHIOLC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAaTTKjHSg7GyhUOm0gDlZspmnCtE8bunTGOSV%2BmptmAiEA1sJzwgNzypZiovtj8d7kmV%2FjpCgKBJyWFcUxJG%2F5fmkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrNRutKsypl6LD3JCrcA8ecDoR9faal7EyhaVf8TtJXIbWC%2Fi1PGMcJiFNMQX3YU1eHbMr9unHpHBgoo9EC%2F%2BeH%2Fdwjp7%2FTHOwd2TLP1XMNW7LEL%2BWxJv5Aqyabiz%2F4BYs%2Fajvhe6YtW0Y6yMPF063VTd1Dc3l%2B%2FoZ4f4VEyqvhEWYZJ45Z8Pw%2FvSRwqC%2FfvDN9FFjNWUIAvy%2FdddeC%2FQsDesuj2vvhckmAZCcMSfKTiTrEah7nCBq9mPaXBPpDY7h0AYhCT%2FLA9eZe%2BqLkMzBBHq09MamZIyollKxcGTYsMo6Nqbo1xN7a47ITbDJHFfss%2Bvu5rZS7zHTr7xqfQj3zNGlzCO9wlVzJRNwhFNQt87VSeQKZopr7e7b14VUCtAN%2FEyUndboeRIHsmEracBvX2wzRqHW8HRr15Z%2BTAv%2BJ8%2FkJZgc%2BgPr2NTfEVvFB%2F8GNkWroOefdFbPobTZpeVqUaFNEbAy1Q2dBMK2U5Tez7iHw9pzZ6a9YNvXhgiTldEwBa2R3Sra9DcSaj6zFFV6wa33Wbl1KvP1e47zIqaJl2U91gF1X3hHr9yUA07iIxOsWg68phNhaxBa299se9Vx%2FHEpdIi2HmZw5zmlULn38hwBXMPBxZjHoihX4WWuy61ImWj0Vl1btH%2B9dMPOsntQGOqUBZw2pve4BoaJ%2BtWi7Ms8sCu87Ji%2BmFVdnEXFXAs%2BURcC8vzwm2iH1fnSbIswQwtH29VNU%2Fhv9Fdg3AuRyzhHZdxW6bNj8ei7BINcdpwxwfYyLEelOaAC5TysbK7Ktgl1tQj%2FHT8oGAnt6yo6hq33dLnt5l2OrSjNjMRXd3BfYmukp5AynlLWdJbdl98c%2B2IcTEdykWKEWnrnEjFKHbmzVlCzccH8D&X-Amz-Signature=88e24161bc12bbb8805639546f4788f886b5fb323acc27cfdcc242d8d987dc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
