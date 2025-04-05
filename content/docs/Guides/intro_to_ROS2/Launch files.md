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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTYCGRM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICurA%2BNbaN0xWC%2Fnqla9ce0tQZi4oCRfHHBjfAg2J0uJAiBJxtCImbKkGC9wtzXyUIVRc7XQfYUXnJeEGaG0lujL%2Fyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzhEvTgeFhLppP3grKtwD8WaZcFzbB1IqIQHI9RQEgnb1bE4S%2FiBo0wwYlXXLrz5%2B7MbWml%2FyEbgK8Jxxut%2Bb5EiVKxKT4jSelbM42%2Fy%2BJmxyH2rx%2B6lWmvkHr8DGDnZzkdPzmFDuH8KyEAEP%2BnBaxnyZE8%2Fzmx8kN4Dr5ZHysmNm8SWeQBcG3CJ%2BYSppboJCHbYpvNXpqneSP5sjD9FuMaxx%2BK8WPz98I8qWnhJKSeTu%2BWUA5ZCG4EAew616E%2BZEySo8DTilcjpW3Rd%2FILCpnMn8pokUEN%2FGm1yqcgJZqOuhYyJQB1rlwy%2BrpGPetVHoqoPQ2x5%2FeVir6GUGz0dQQlcC3aw7II3ywKq3CfMHgiqPhglwkBOnHWpwUDUaK9T9FhcbPZKKwtlJ8VPac%2BbCzsJJnbNpoL9hXJriLFkMtC%2BKRuuqSCFgER%2BWNn3CHR5J91%2FYEz2mHfC7es5hXsqdwHFSAeVNzMIVXRM%2FHWmslEvrhXT%2FPut5CCkK1Z5ius%2B1pB3h%2FMllC4wmoHIF90lZSRTmHCxar9Y8kdExZIG%2BQR5bSqi2Y9FDwsTf%2B4SQlxClH1VAoctWySqBpZslqu8Q87BWaWKOjfXkujBSsbOwJukzXkqPqZNDQrjMgAUaJzVA2OSj%2BeEXwSSIISEw3qTFvwY6pgF%2FkA5nhqjFtT32wjy1GF6KfD6UcgyJoMmwlo9jDWHdvwj7arJi2%2FTCAq8%2F%2Fq%2BIhugx%2FJYpsFMq5Aoh7O%2FPVB8r%2Br3nIM3icZPg4DQse%2FEWxEfoF0aXF4Y8sxB4U7Y%2FumDpZqc5pGp1xm65Rp6GBEJ7o%2B1IfY%2Fc1luJDVzG806Sps509qPxBjoQqHpaBFsjYG1MXwl%2FX62jGqeLoky5aSA9C%2F9WS%2B95&X-Amz-Signature=f147d97960e207c469ce5f5c828a3d49e14ba9d4e9f0435257562a4dd700f067&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTYCGRM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICurA%2BNbaN0xWC%2Fnqla9ce0tQZi4oCRfHHBjfAg2J0uJAiBJxtCImbKkGC9wtzXyUIVRc7XQfYUXnJeEGaG0lujL%2Fyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzhEvTgeFhLppP3grKtwD8WaZcFzbB1IqIQHI9RQEgnb1bE4S%2FiBo0wwYlXXLrz5%2B7MbWml%2FyEbgK8Jxxut%2Bb5EiVKxKT4jSelbM42%2Fy%2BJmxyH2rx%2B6lWmvkHr8DGDnZzkdPzmFDuH8KyEAEP%2BnBaxnyZE8%2Fzmx8kN4Dr5ZHysmNm8SWeQBcG3CJ%2BYSppboJCHbYpvNXpqneSP5sjD9FuMaxx%2BK8WPz98I8qWnhJKSeTu%2BWUA5ZCG4EAew616E%2BZEySo8DTilcjpW3Rd%2FILCpnMn8pokUEN%2FGm1yqcgJZqOuhYyJQB1rlwy%2BrpGPetVHoqoPQ2x5%2FeVir6GUGz0dQQlcC3aw7II3ywKq3CfMHgiqPhglwkBOnHWpwUDUaK9T9FhcbPZKKwtlJ8VPac%2BbCzsJJnbNpoL9hXJriLFkMtC%2BKRuuqSCFgER%2BWNn3CHR5J91%2FYEz2mHfC7es5hXsqdwHFSAeVNzMIVXRM%2FHWmslEvrhXT%2FPut5CCkK1Z5ius%2B1pB3h%2FMllC4wmoHIF90lZSRTmHCxar9Y8kdExZIG%2BQR5bSqi2Y9FDwsTf%2B4SQlxClH1VAoctWySqBpZslqu8Q87BWaWKOjfXkujBSsbOwJukzXkqPqZNDQrjMgAUaJzVA2OSj%2BeEXwSSIISEw3qTFvwY6pgF%2FkA5nhqjFtT32wjy1GF6KfD6UcgyJoMmwlo9jDWHdvwj7arJi2%2FTCAq8%2F%2Fq%2BIhugx%2FJYpsFMq5Aoh7O%2FPVB8r%2Br3nIM3icZPg4DQse%2FEWxEfoF0aXF4Y8sxB4U7Y%2FumDpZqc5pGp1xm65Rp6GBEJ7o%2B1IfY%2Fc1luJDVzG806Sps509qPxBjoQqHpaBFsjYG1MXwl%2FX62jGqeLoky5aSA9C%2F9WS%2B95&X-Amz-Signature=dc3c0de1dcacc2724e9318dccb66b0e6e95b60b6096cf9f01604909c371e5d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTYCGRM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICurA%2BNbaN0xWC%2Fnqla9ce0tQZi4oCRfHHBjfAg2J0uJAiBJxtCImbKkGC9wtzXyUIVRc7XQfYUXnJeEGaG0lujL%2Fyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzhEvTgeFhLppP3grKtwD8WaZcFzbB1IqIQHI9RQEgnb1bE4S%2FiBo0wwYlXXLrz5%2B7MbWml%2FyEbgK8Jxxut%2Bb5EiVKxKT4jSelbM42%2Fy%2BJmxyH2rx%2B6lWmvkHr8DGDnZzkdPzmFDuH8KyEAEP%2BnBaxnyZE8%2Fzmx8kN4Dr5ZHysmNm8SWeQBcG3CJ%2BYSppboJCHbYpvNXpqneSP5sjD9FuMaxx%2BK8WPz98I8qWnhJKSeTu%2BWUA5ZCG4EAew616E%2BZEySo8DTilcjpW3Rd%2FILCpnMn8pokUEN%2FGm1yqcgJZqOuhYyJQB1rlwy%2BrpGPetVHoqoPQ2x5%2FeVir6GUGz0dQQlcC3aw7II3ywKq3CfMHgiqPhglwkBOnHWpwUDUaK9T9FhcbPZKKwtlJ8VPac%2BbCzsJJnbNpoL9hXJriLFkMtC%2BKRuuqSCFgER%2BWNn3CHR5J91%2FYEz2mHfC7es5hXsqdwHFSAeVNzMIVXRM%2FHWmslEvrhXT%2FPut5CCkK1Z5ius%2B1pB3h%2FMllC4wmoHIF90lZSRTmHCxar9Y8kdExZIG%2BQR5bSqi2Y9FDwsTf%2B4SQlxClH1VAoctWySqBpZslqu8Q87BWaWKOjfXkujBSsbOwJukzXkqPqZNDQrjMgAUaJzVA2OSj%2BeEXwSSIISEw3qTFvwY6pgF%2FkA5nhqjFtT32wjy1GF6KfD6UcgyJoMmwlo9jDWHdvwj7arJi2%2FTCAq8%2F%2Fq%2BIhugx%2FJYpsFMq5Aoh7O%2FPVB8r%2Br3nIM3icZPg4DQse%2FEWxEfoF0aXF4Y8sxB4U7Y%2FumDpZqc5pGp1xm65Rp6GBEJ7o%2B1IfY%2Fc1luJDVzG806Sps509qPxBjoQqHpaBFsjYG1MXwl%2FX62jGqeLoky5aSA9C%2F9WS%2B95&X-Amz-Signature=5ab266941f6f67ce0f45ad1d4065684673e0d8bf94208ab55b3c98c2cc783cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
