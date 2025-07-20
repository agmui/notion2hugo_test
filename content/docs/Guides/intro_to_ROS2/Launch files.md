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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIL34WR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPSLINQb7UUsvlL4jfgRegxZEUo0WK4lJTMy5ERkzfiAiAOSjAMIj2THvDUrBI5DKQFWW7AAh282dxp2YVkuVRlbCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEzh16Pc3LBg1QAJuKtwD1NHvm4r%2BOhiy22uNLGmIkPjBbOo28QKAM0aQFxD2cNtPVVs3X4IwqYAlMlkBRwsLs%2BDlU3AkAwQKweA6DNBlLVGOhDSsSIvNOmwSV3v5%2Fvp8b13ivP%2FpoxbCQ0PnYP698RDwECOFYXuVvyqU3R74q0W%2BFco%2FkJBge5QrkoIERrVXmULTtv74UxShNdEoJN3P3niFkN3dB5zEI1D3ar5IUOasZjBquQICubTfa8HjUwLOQxQPQf%2Bh%2BsF4XxH%2FUzssw4hZYgBAaoKVDua2iZuBXqhBel2AIeoRFEwSlJXUpvTwcHgvPKl3FGuVSA5fFzDI4Sa67nNi5%2FmuUuQsYgfroFx9NuhmRD1KwuiHOTL9AZZYKauY6zboEpVzEiu9DASw%2Fr3krTwk31Ju4mcgLOKqcTVMGqYej94Dyib38MsYaEsrgT6fopaADXodCSvj9QP6GyGBWSqiIUlVmzUNDy4j2X3Y66Hoo9Yt9Aq9bNfwg4oSS97Xu4eIP%2FIxe%2Fyk1P5nQWmUggHYVpJLR%2B9LnA7rnVIJVGthO678gxOAe1UfQjXEC6wvC9fVaKPrK5JbZZF26yXpleK7OG%2BsqHXgpiRrao%2BICigQc5CTGvzwPqmQxrzdAP1QJHzBN%2FCF%2B5gwzZTxwwY6pgHPD1gcrpI8Ju1uia7J0idEzv8IfBNsjtpRNzkEQLatk3zcHO8j%2BkeAMV%2BjNVXK8Y979qRSLsW8MsBQplKv%2FZDNC2xvnnNvscYkPmheS86xczvSJ1IHj0AelSDXRDxoPeHDTYN8e18m80LJiPt2R9FXLvGS%2FZ0%2FGJQdeg7rc1PHvUHxYTi49OcCvCVS2rrHlW07EKyESs5WPPQGP8RG0f61nNMBCuNM&X-Amz-Signature=72a18829a08873fad7515b6d6029fb65372d958dfbf4f85d7b0382a899bdf461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIL34WR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPSLINQb7UUsvlL4jfgRegxZEUo0WK4lJTMy5ERkzfiAiAOSjAMIj2THvDUrBI5DKQFWW7AAh282dxp2YVkuVRlbCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEzh16Pc3LBg1QAJuKtwD1NHvm4r%2BOhiy22uNLGmIkPjBbOo28QKAM0aQFxD2cNtPVVs3X4IwqYAlMlkBRwsLs%2BDlU3AkAwQKweA6DNBlLVGOhDSsSIvNOmwSV3v5%2Fvp8b13ivP%2FpoxbCQ0PnYP698RDwECOFYXuVvyqU3R74q0W%2BFco%2FkJBge5QrkoIERrVXmULTtv74UxShNdEoJN3P3niFkN3dB5zEI1D3ar5IUOasZjBquQICubTfa8HjUwLOQxQPQf%2Bh%2BsF4XxH%2FUzssw4hZYgBAaoKVDua2iZuBXqhBel2AIeoRFEwSlJXUpvTwcHgvPKl3FGuVSA5fFzDI4Sa67nNi5%2FmuUuQsYgfroFx9NuhmRD1KwuiHOTL9AZZYKauY6zboEpVzEiu9DASw%2Fr3krTwk31Ju4mcgLOKqcTVMGqYej94Dyib38MsYaEsrgT6fopaADXodCSvj9QP6GyGBWSqiIUlVmzUNDy4j2X3Y66Hoo9Yt9Aq9bNfwg4oSS97Xu4eIP%2FIxe%2Fyk1P5nQWmUggHYVpJLR%2B9LnA7rnVIJVGthO678gxOAe1UfQjXEC6wvC9fVaKPrK5JbZZF26yXpleK7OG%2BsqHXgpiRrao%2BICigQc5CTGvzwPqmQxrzdAP1QJHzBN%2FCF%2B5gwzZTxwwY6pgHPD1gcrpI8Ju1uia7J0idEzv8IfBNsjtpRNzkEQLatk3zcHO8j%2BkeAMV%2BjNVXK8Y979qRSLsW8MsBQplKv%2FZDNC2xvnnNvscYkPmheS86xczvSJ1IHj0AelSDXRDxoPeHDTYN8e18m80LJiPt2R9FXLvGS%2FZ0%2FGJQdeg7rc1PHvUHxYTi49OcCvCVS2rrHlW07EKyESs5WPPQGP8RG0f61nNMBCuNM&X-Amz-Signature=2772b359c166865051428adf4e4c668144a398b13b335a80b0aa65e5cf596626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRIL34WR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPSLINQb7UUsvlL4jfgRegxZEUo0WK4lJTMy5ERkzfiAiAOSjAMIj2THvDUrBI5DKQFWW7AAh282dxp2YVkuVRlbCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEzh16Pc3LBg1QAJuKtwD1NHvm4r%2BOhiy22uNLGmIkPjBbOo28QKAM0aQFxD2cNtPVVs3X4IwqYAlMlkBRwsLs%2BDlU3AkAwQKweA6DNBlLVGOhDSsSIvNOmwSV3v5%2Fvp8b13ivP%2FpoxbCQ0PnYP698RDwECOFYXuVvyqU3R74q0W%2BFco%2FkJBge5QrkoIERrVXmULTtv74UxShNdEoJN3P3niFkN3dB5zEI1D3ar5IUOasZjBquQICubTfa8HjUwLOQxQPQf%2Bh%2BsF4XxH%2FUzssw4hZYgBAaoKVDua2iZuBXqhBel2AIeoRFEwSlJXUpvTwcHgvPKl3FGuVSA5fFzDI4Sa67nNi5%2FmuUuQsYgfroFx9NuhmRD1KwuiHOTL9AZZYKauY6zboEpVzEiu9DASw%2Fr3krTwk31Ju4mcgLOKqcTVMGqYej94Dyib38MsYaEsrgT6fopaADXodCSvj9QP6GyGBWSqiIUlVmzUNDy4j2X3Y66Hoo9Yt9Aq9bNfwg4oSS97Xu4eIP%2FIxe%2Fyk1P5nQWmUggHYVpJLR%2B9LnA7rnVIJVGthO678gxOAe1UfQjXEC6wvC9fVaKPrK5JbZZF26yXpleK7OG%2BsqHXgpiRrao%2BICigQc5CTGvzwPqmQxrzdAP1QJHzBN%2FCF%2B5gwzZTxwwY6pgHPD1gcrpI8Ju1uia7J0idEzv8IfBNsjtpRNzkEQLatk3zcHO8j%2BkeAMV%2BjNVXK8Y979qRSLsW8MsBQplKv%2FZDNC2xvnnNvscYkPmheS86xczvSJ1IHj0AelSDXRDxoPeHDTYN8e18m80LJiPt2R9FXLvGS%2FZ0%2FGJQdeg7rc1PHvUHxYTi49OcCvCVS2rrHlW07EKyESs5WPPQGP8RG0f61nNMBCuNM&X-Amz-Signature=f71b7d95d66e07fd44e7bda61a5975f864f3a182927122cc6bbc1da95776c939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
