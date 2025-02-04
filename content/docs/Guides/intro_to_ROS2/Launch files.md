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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4EHYLZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFkMuqvhB5Cg%2ByJeKhxpcqHcBViHeU%2Fm4GMvRJbOmJocAiEAqHYjViqYV8TxY32EHNHh%2Btp0DHiqd9aHhdYXaSocxaUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAe%2BFYNfy70UlnapNSrcA3JdlelEZK41C7mVO3fPy%2ByGK%2FTC%2F0KpmCozpXM9SpXX5KrMnFTfWMduyJu94%2FBG4IaIvdxEhKtxcDd8G8cxFYGpr0HMEruYUeKRWJHsRYL0SzBzfwODPqlVXGzdjPbBMvyoCj%2BX00z3ge47GlT6RbWgPNFL4VqFndSFPCIzduFgB6w6XWt%2BNaimTCLkAzssGonNUziCyRZENF5adteb%2F6pMWqGWv7SfS5WkhSlS6IYhUnh%2F5bFohuq%2FR2ypwoSeuFLh7vy8cEPQckN4YF5fK8tbGOuZVTwj%2FvOBGD%2B5j4LE084ZnobR1D5CEMFCD%2BGiPQSa%2FRTUhjzhjUBZDXpXR5FG8HDDulsE0TWms0HyRXZCEhXRa7RfwBKkdrFL4RZCqk2imPIjQFeu57apzmd3rNM4ZQXsQcHUjPQE6IjyMjaLHihPZ2axXIGAe322Dh3JUZyDTxDRiFI2xDUQuWQ5%2F8UCyHd06qmooukPBK4kOQIk7lZXYfti6bKAC%2BNXR%2B9zAUTRPis%2FiOg2ntr9%2FhvoAQURD37S2atYK3GULaCyn91NxMeHrVI8ufxA8dvOTGvIHaPbHpTMx%2B1D6RSY%2FW%2BwdU%2BpuQaQqvFCtPDf5%2BG3BaACwWy6yNFyhbadIyceMJ%2BGhr0GOqUBWx8xjlmF%2FnQUMhRBIcTdzBZml9kpTsbsL72xKuwHEfEnkVHkD4ctAwhfz5u4Zv1WA5%2FSSIxma0ieHB24irbFMJKKWFxV%2F3FSHSg7yPo5cqKZF6Fz%2B7JgLqqHDVPCMQU%2FMsysgxIvuJ34gpwkM3fAvVzmic1cCLMOWpnr009Wko838hOUurFDLN14U7PZQxMdLavHi8sLtN2xBfapO8%2FqCtvysyB4&X-Amz-Signature=982e4015f3722e235892f92667d1557db28a7501be80b92bc75502277b37a03c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4EHYLZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFkMuqvhB5Cg%2ByJeKhxpcqHcBViHeU%2Fm4GMvRJbOmJocAiEAqHYjViqYV8TxY32EHNHh%2Btp0DHiqd9aHhdYXaSocxaUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAe%2BFYNfy70UlnapNSrcA3JdlelEZK41C7mVO3fPy%2ByGK%2FTC%2F0KpmCozpXM9SpXX5KrMnFTfWMduyJu94%2FBG4IaIvdxEhKtxcDd8G8cxFYGpr0HMEruYUeKRWJHsRYL0SzBzfwODPqlVXGzdjPbBMvyoCj%2BX00z3ge47GlT6RbWgPNFL4VqFndSFPCIzduFgB6w6XWt%2BNaimTCLkAzssGonNUziCyRZENF5adteb%2F6pMWqGWv7SfS5WkhSlS6IYhUnh%2F5bFohuq%2FR2ypwoSeuFLh7vy8cEPQckN4YF5fK8tbGOuZVTwj%2FvOBGD%2B5j4LE084ZnobR1D5CEMFCD%2BGiPQSa%2FRTUhjzhjUBZDXpXR5FG8HDDulsE0TWms0HyRXZCEhXRa7RfwBKkdrFL4RZCqk2imPIjQFeu57apzmd3rNM4ZQXsQcHUjPQE6IjyMjaLHihPZ2axXIGAe322Dh3JUZyDTxDRiFI2xDUQuWQ5%2F8UCyHd06qmooukPBK4kOQIk7lZXYfti6bKAC%2BNXR%2B9zAUTRPis%2FiOg2ntr9%2FhvoAQURD37S2atYK3GULaCyn91NxMeHrVI8ufxA8dvOTGvIHaPbHpTMx%2B1D6RSY%2FW%2BwdU%2BpuQaQqvFCtPDf5%2BG3BaACwWy6yNFyhbadIyceMJ%2BGhr0GOqUBWx8xjlmF%2FnQUMhRBIcTdzBZml9kpTsbsL72xKuwHEfEnkVHkD4ctAwhfz5u4Zv1WA5%2FSSIxma0ieHB24irbFMJKKWFxV%2F3FSHSg7yPo5cqKZF6Fz%2B7JgLqqHDVPCMQU%2FMsysgxIvuJ34gpwkM3fAvVzmic1cCLMOWpnr009Wko838hOUurFDLN14U7PZQxMdLavHi8sLtN2xBfapO8%2FqCtvysyB4&X-Amz-Signature=26810b8816473b7af9ca32d680d30ea7aa92c46afa54c65d6a0146e291af9cac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4EHYLZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFkMuqvhB5Cg%2ByJeKhxpcqHcBViHeU%2Fm4GMvRJbOmJocAiEAqHYjViqYV8TxY32EHNHh%2Btp0DHiqd9aHhdYXaSocxaUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAe%2BFYNfy70UlnapNSrcA3JdlelEZK41C7mVO3fPy%2ByGK%2FTC%2F0KpmCozpXM9SpXX5KrMnFTfWMduyJu94%2FBG4IaIvdxEhKtxcDd8G8cxFYGpr0HMEruYUeKRWJHsRYL0SzBzfwODPqlVXGzdjPbBMvyoCj%2BX00z3ge47GlT6RbWgPNFL4VqFndSFPCIzduFgB6w6XWt%2BNaimTCLkAzssGonNUziCyRZENF5adteb%2F6pMWqGWv7SfS5WkhSlS6IYhUnh%2F5bFohuq%2FR2ypwoSeuFLh7vy8cEPQckN4YF5fK8tbGOuZVTwj%2FvOBGD%2B5j4LE084ZnobR1D5CEMFCD%2BGiPQSa%2FRTUhjzhjUBZDXpXR5FG8HDDulsE0TWms0HyRXZCEhXRa7RfwBKkdrFL4RZCqk2imPIjQFeu57apzmd3rNM4ZQXsQcHUjPQE6IjyMjaLHihPZ2axXIGAe322Dh3JUZyDTxDRiFI2xDUQuWQ5%2F8UCyHd06qmooukPBK4kOQIk7lZXYfti6bKAC%2BNXR%2B9zAUTRPis%2FiOg2ntr9%2FhvoAQURD37S2atYK3GULaCyn91NxMeHrVI8ufxA8dvOTGvIHaPbHpTMx%2B1D6RSY%2FW%2BwdU%2BpuQaQqvFCtPDf5%2BG3BaACwWy6yNFyhbadIyceMJ%2BGhr0GOqUBWx8xjlmF%2FnQUMhRBIcTdzBZml9kpTsbsL72xKuwHEfEnkVHkD4ctAwhfz5u4Zv1WA5%2FSSIxma0ieHB24irbFMJKKWFxV%2F3FSHSg7yPo5cqKZF6Fz%2B7JgLqqHDVPCMQU%2FMsysgxIvuJ34gpwkM3fAvVzmic1cCLMOWpnr009Wko838hOUurFDLN14U7PZQxMdLavHi8sLtN2xBfapO8%2FqCtvysyB4&X-Amz-Signature=0fdac143fe948167910eff7301f1381bb5edec973bcf06dbed95e5cd9841e0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
