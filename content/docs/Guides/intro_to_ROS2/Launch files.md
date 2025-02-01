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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDPJG77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJY8XWkfsy3ee0K4IgPq3K7zmlnwYhEAQ4DUjA1IZ8sAiASeeLNfs4xsSOQDlvNGDoNu4FIHXccsqVfp5N7zZ4WvCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBDgjdEXj1ZcHd8mfKtwD1s9cNuMylIcS17mrfxOvhyA6%2BNBG9l6b73Lyn0gJs44rk4Chfh2tbRtWe714Gtwgah%2By5vDTIFJ3hK711p6%2BZjKUGksiEsnv1mfYkqHlREOdBx74vusRZz50HvOurA7saLyTNviuV2vzKtbOumliV7pi%2BwGTcjgM2iB0M%2Bs50NrdO4eKnv385mRxYAo99ZWnmSHOP%2BnPhfU9L5NmplED6WItdykFws1vg80ZdqQlhz6fYReB0V1cYTqzdDbNJF6C%2Bgd2l99epHCY5YpvitQ8bXhkqS2ht04rkGaI83mcRlKMIDY7beOMt5x%2BVmGC%2BgLOJVGCDlYXWxi%2F6QSh730S%2B5XuiAisu%2B%2F5Fg9b4ZH2UJZ2zEdS3DvQbMdKElQ5cAMBsEp56RKCokIgr%2FWsoN0xHRkyo3ptHVg6Du1fkuGiRDQEoyMLkmYBBM2EuqEI2i93ll8ti0qIzPwaQfJt3k1umtr18EJBWDbk0qmqNLS%2Fa14cb0b5i3zBy%2BFGymL2HUi8CwSWABxPiZfLSq67JZfcfrpl5hEdFYxOcAP1ZYswxXTqejGibPBAaH3oKmIgqpnN7jHObwuSonS7hd%2BIFCBTqEoGCO2jVer4u9tPf81saM5fTh9LdIf7jatmcRYw1cL2vAY6pgFQgQk8fApPVCj6oLuDgiu1w89I6hcorj%2B8lqjhiR1P0HC2NTg1fP7ALqqYrcfKifioH7D0DIImiU0w0DqFInhzY71PWG6a%2BHuszlheJp6uDkun8BCQ%2B7wVVnDv6ZRpGaUFOjx7pIWw1ihVK3fLFAvg1UTZUMPXxwlPkhGNZC77R9n3qXCCS%2BQC%2Bz%2FwcWJhbbEAlw3B2r2dWY8%2BaZk9AA9EvWfj0klh&X-Amz-Signature=e4a8c971a42b189113d23d43b5093bc76fbc721e12b5ba034c4cd86d421aacb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDPJG77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJY8XWkfsy3ee0K4IgPq3K7zmlnwYhEAQ4DUjA1IZ8sAiASeeLNfs4xsSOQDlvNGDoNu4FIHXccsqVfp5N7zZ4WvCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBDgjdEXj1ZcHd8mfKtwD1s9cNuMylIcS17mrfxOvhyA6%2BNBG9l6b73Lyn0gJs44rk4Chfh2tbRtWe714Gtwgah%2By5vDTIFJ3hK711p6%2BZjKUGksiEsnv1mfYkqHlREOdBx74vusRZz50HvOurA7saLyTNviuV2vzKtbOumliV7pi%2BwGTcjgM2iB0M%2Bs50NrdO4eKnv385mRxYAo99ZWnmSHOP%2BnPhfU9L5NmplED6WItdykFws1vg80ZdqQlhz6fYReB0V1cYTqzdDbNJF6C%2Bgd2l99epHCY5YpvitQ8bXhkqS2ht04rkGaI83mcRlKMIDY7beOMt5x%2BVmGC%2BgLOJVGCDlYXWxi%2F6QSh730S%2B5XuiAisu%2B%2F5Fg9b4ZH2UJZ2zEdS3DvQbMdKElQ5cAMBsEp56RKCokIgr%2FWsoN0xHRkyo3ptHVg6Du1fkuGiRDQEoyMLkmYBBM2EuqEI2i93ll8ti0qIzPwaQfJt3k1umtr18EJBWDbk0qmqNLS%2Fa14cb0b5i3zBy%2BFGymL2HUi8CwSWABxPiZfLSq67JZfcfrpl5hEdFYxOcAP1ZYswxXTqejGibPBAaH3oKmIgqpnN7jHObwuSonS7hd%2BIFCBTqEoGCO2jVer4u9tPf81saM5fTh9LdIf7jatmcRYw1cL2vAY6pgFQgQk8fApPVCj6oLuDgiu1w89I6hcorj%2B8lqjhiR1P0HC2NTg1fP7ALqqYrcfKifioH7D0DIImiU0w0DqFInhzY71PWG6a%2BHuszlheJp6uDkun8BCQ%2B7wVVnDv6ZRpGaUFOjx7pIWw1ihVK3fLFAvg1UTZUMPXxwlPkhGNZC77R9n3qXCCS%2BQC%2Bz%2FwcWJhbbEAlw3B2r2dWY8%2BaZk9AA9EvWfj0klh&X-Amz-Signature=15d30a01af9d6fe39b1ccca775d51eabcf3e3f7a00dda4585b57b92a7ae35a44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDPJG77%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJY8XWkfsy3ee0K4IgPq3K7zmlnwYhEAQ4DUjA1IZ8sAiASeeLNfs4xsSOQDlvNGDoNu4FIHXccsqVfp5N7zZ4WvCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBDgjdEXj1ZcHd8mfKtwD1s9cNuMylIcS17mrfxOvhyA6%2BNBG9l6b73Lyn0gJs44rk4Chfh2tbRtWe714Gtwgah%2By5vDTIFJ3hK711p6%2BZjKUGksiEsnv1mfYkqHlREOdBx74vusRZz50HvOurA7saLyTNviuV2vzKtbOumliV7pi%2BwGTcjgM2iB0M%2Bs50NrdO4eKnv385mRxYAo99ZWnmSHOP%2BnPhfU9L5NmplED6WItdykFws1vg80ZdqQlhz6fYReB0V1cYTqzdDbNJF6C%2Bgd2l99epHCY5YpvitQ8bXhkqS2ht04rkGaI83mcRlKMIDY7beOMt5x%2BVmGC%2BgLOJVGCDlYXWxi%2F6QSh730S%2B5XuiAisu%2B%2F5Fg9b4ZH2UJZ2zEdS3DvQbMdKElQ5cAMBsEp56RKCokIgr%2FWsoN0xHRkyo3ptHVg6Du1fkuGiRDQEoyMLkmYBBM2EuqEI2i93ll8ti0qIzPwaQfJt3k1umtr18EJBWDbk0qmqNLS%2Fa14cb0b5i3zBy%2BFGymL2HUi8CwSWABxPiZfLSq67JZfcfrpl5hEdFYxOcAP1ZYswxXTqejGibPBAaH3oKmIgqpnN7jHObwuSonS7hd%2BIFCBTqEoGCO2jVer4u9tPf81saM5fTh9LdIf7jatmcRYw1cL2vAY6pgFQgQk8fApPVCj6oLuDgiu1w89I6hcorj%2B8lqjhiR1P0HC2NTg1fP7ALqqYrcfKifioH7D0DIImiU0w0DqFInhzY71PWG6a%2BHuszlheJp6uDkun8BCQ%2B7wVVnDv6ZRpGaUFOjx7pIWw1ihVK3fLFAvg1UTZUMPXxwlPkhGNZC77R9n3qXCCS%2BQC%2Bz%2FwcWJhbbEAlw3B2r2dWY8%2BaZk9AA9EvWfj0klh&X-Amz-Signature=ea6e9cb9c143513e9eaaf651fb99c7d1471d7b5528b75dd6c14f0b84d75a624d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
