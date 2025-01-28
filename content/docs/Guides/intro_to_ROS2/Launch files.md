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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFVGY37%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC9ehWacbNl1HXZ9v2z9THspxLI%2Bf8p4vWi1Mo7xteY4gIgAL%2FK1VkkIGpys6b82fuYKigfSlNr69PLCo2iur4231Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDH%2B9gopujXSHbFloACrcA%2F7YC%2BFVN2lC%2BxQD1hmOQvXR9OdUuywO9xr42MPIk5XsahcrzJ%2FAXhMs6hcHgFbSrcYZnTSSbgtjMSZdkgmvRdleiI2cE7zLvAYFM%2F8zTipLo5XDD8ezkaxcL1oFjIGLm99jS8p1qaJu2z%2BALT59VeI4UMqcyrk19V5YktF5NvV%2FFCIlcVGZ7IwkBUpEUiOnOJUXQdq5eMvUfmNXWD8cwk5Yzb9Dc8auXA7cCHLSGR7sJy6vcM5oJv2MoFffV70MbwfMjR3XIiE2%2F1kxasdDDUzYAUFEo516kyTEhQEWoiIFkFMiZ7Pi0uJ1oMCmUZTH5YgNMon32YtwuJhyTMwUhSNw7pdtxXhEaZ29lzfy6HpcWig2R%2Bsapgtn7%2Boznuri9ZSLO3D4MAjd1299QKUzT5FtMIZY7NUdet5YPX6G5bkqeumsNwJ%2BCYZ3V2G9xrfLWH5l29vL2ieoulFMLHRelx6CBzu0JV6hVZNhw3gNNoOMsE1YvdSvJyZbO6zlmoTRETbIMnLxJc6tKk5N2WAdm5gDS%2Flme6WrYzLuJLrcv9GJkHCNXblxANNCwyGC9jJm2hQzb%2BTaZDolW6hlG1TJWbO2zsy6a93D9JwFi%2FGxo69OxDF1GfYoOc9dfbttMM6x5bwGOqUBRrH%2FURDZMB7xOiqiuVtAOa9cm4xM7CT%2Bt0Mjdz8%2F6Sh2cLyg0HpuHL4NONpJlkhVcvPeqLQGpp2KAjWaBdxeMsMACeQH1QlFF87wvHRKl02pBf5nIEkSNNHSgIUCZgLIbuXyQkD18y1sgkxpKPPZqN6SSRtdNcKpl%2Bxb08z8i0cVL1Ygti5wZ3Cbax4xgroeZEEalVsqrpmikjcZKfiyAqduY80w&X-Amz-Signature=343539ef7c4854cfd08d698c1ab12211cb4016c40fa11dc44b616cbedf112cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFVGY37%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC9ehWacbNl1HXZ9v2z9THspxLI%2Bf8p4vWi1Mo7xteY4gIgAL%2FK1VkkIGpys6b82fuYKigfSlNr69PLCo2iur4231Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDH%2B9gopujXSHbFloACrcA%2F7YC%2BFVN2lC%2BxQD1hmOQvXR9OdUuywO9xr42MPIk5XsahcrzJ%2FAXhMs6hcHgFbSrcYZnTSSbgtjMSZdkgmvRdleiI2cE7zLvAYFM%2F8zTipLo5XDD8ezkaxcL1oFjIGLm99jS8p1qaJu2z%2BALT59VeI4UMqcyrk19V5YktF5NvV%2FFCIlcVGZ7IwkBUpEUiOnOJUXQdq5eMvUfmNXWD8cwk5Yzb9Dc8auXA7cCHLSGR7sJy6vcM5oJv2MoFffV70MbwfMjR3XIiE2%2F1kxasdDDUzYAUFEo516kyTEhQEWoiIFkFMiZ7Pi0uJ1oMCmUZTH5YgNMon32YtwuJhyTMwUhSNw7pdtxXhEaZ29lzfy6HpcWig2R%2Bsapgtn7%2Boznuri9ZSLO3D4MAjd1299QKUzT5FtMIZY7NUdet5YPX6G5bkqeumsNwJ%2BCYZ3V2G9xrfLWH5l29vL2ieoulFMLHRelx6CBzu0JV6hVZNhw3gNNoOMsE1YvdSvJyZbO6zlmoTRETbIMnLxJc6tKk5N2WAdm5gDS%2Flme6WrYzLuJLrcv9GJkHCNXblxANNCwyGC9jJm2hQzb%2BTaZDolW6hlG1TJWbO2zsy6a93D9JwFi%2FGxo69OxDF1GfYoOc9dfbttMM6x5bwGOqUBRrH%2FURDZMB7xOiqiuVtAOa9cm4xM7CT%2Bt0Mjdz8%2F6Sh2cLyg0HpuHL4NONpJlkhVcvPeqLQGpp2KAjWaBdxeMsMACeQH1QlFF87wvHRKl02pBf5nIEkSNNHSgIUCZgLIbuXyQkD18y1sgkxpKPPZqN6SSRtdNcKpl%2Bxb08z8i0cVL1Ygti5wZ3Cbax4xgroeZEEalVsqrpmikjcZKfiyAqduY80w&X-Amz-Signature=8e4e3795c9546868519f9e4c6588ba7bbd606c3db889dabae77d7f4075f955b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFVGY37%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC9ehWacbNl1HXZ9v2z9THspxLI%2Bf8p4vWi1Mo7xteY4gIgAL%2FK1VkkIGpys6b82fuYKigfSlNr69PLCo2iur4231Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDH%2B9gopujXSHbFloACrcA%2F7YC%2BFVN2lC%2BxQD1hmOQvXR9OdUuywO9xr42MPIk5XsahcrzJ%2FAXhMs6hcHgFbSrcYZnTSSbgtjMSZdkgmvRdleiI2cE7zLvAYFM%2F8zTipLo5XDD8ezkaxcL1oFjIGLm99jS8p1qaJu2z%2BALT59VeI4UMqcyrk19V5YktF5NvV%2FFCIlcVGZ7IwkBUpEUiOnOJUXQdq5eMvUfmNXWD8cwk5Yzb9Dc8auXA7cCHLSGR7sJy6vcM5oJv2MoFffV70MbwfMjR3XIiE2%2F1kxasdDDUzYAUFEo516kyTEhQEWoiIFkFMiZ7Pi0uJ1oMCmUZTH5YgNMon32YtwuJhyTMwUhSNw7pdtxXhEaZ29lzfy6HpcWig2R%2Bsapgtn7%2Boznuri9ZSLO3D4MAjd1299QKUzT5FtMIZY7NUdet5YPX6G5bkqeumsNwJ%2BCYZ3V2G9xrfLWH5l29vL2ieoulFMLHRelx6CBzu0JV6hVZNhw3gNNoOMsE1YvdSvJyZbO6zlmoTRETbIMnLxJc6tKk5N2WAdm5gDS%2Flme6WrYzLuJLrcv9GJkHCNXblxANNCwyGC9jJm2hQzb%2BTaZDolW6hlG1TJWbO2zsy6a93D9JwFi%2FGxo69OxDF1GfYoOc9dfbttMM6x5bwGOqUBRrH%2FURDZMB7xOiqiuVtAOa9cm4xM7CT%2Bt0Mjdz8%2F6Sh2cLyg0HpuHL4NONpJlkhVcvPeqLQGpp2KAjWaBdxeMsMACeQH1QlFF87wvHRKl02pBf5nIEkSNNHSgIUCZgLIbuXyQkD18y1sgkxpKPPZqN6SSRtdNcKpl%2Bxb08z8i0cVL1Ygti5wZ3Cbax4xgroeZEEalVsqrpmikjcZKfiyAqduY80w&X-Amz-Signature=03bc3d65754dea1a32564798a70388d80f087eef62699d50b954b2f68f132f18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
