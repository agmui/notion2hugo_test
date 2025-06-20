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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB3LTO2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIIuoVGyNhBBGl%2BQNCKtAiwT8EVCcWpTA%2FOz2U4T1i7AiEA8Px64PmODvsZgUDJQzUsz15%2Fj2hg6%2BmCYkw1TC0UBwYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYLA8ZHz8MGhdi%2F7ircA9B8OcL7W9oXiEc7NBc4cIhDrQAey2JQUCQI0gx%2F9hYoPIwEPLXWNEInjIZixv0mTTVDnPD%2FAkLQX5TuMXCG5zFynk86QnzeC5soBc0cg46dTIDHn5yeNjmKDfQ6IssENZISRDFZQRNE%2FkdoJ%2FF0CrTF7evMh3arTeb9aIcgp26WUKvUWHxhHcffmKNgWBgvvNQmIx3e6oiRWCGgkfuFbY2fsyCmRQeVinAnSoILwhh%2FFj9EmywqMFXNyxyV1Kcp8Id4wfe3Lh219elpDm5noJC4rBwV1eydZuDqVMfVTLtGU60eO31w62YnUxA9xcN75ThMK0L3CJnFscB9fAAprvjyz3lFWzvmyypLrc9mJa98dfcS%2BAiC%2FYcwd5MNoOARsCsotaoJI7UxbX4TLr4bPX9pvxgNdtPEENrLPNGilUAiK53TK2aMFT7X7s9rrKAuzroUbMttWWOek%2FBHgsI4wBs8rGZa9KI%2FURMkSRJUYjIcHOtAVCAL6iADvGMrxTtaecQyVrg7OqWjBolWz1jCRXvM720BVmgIQTKytJpsx9W7E1fphdEzqYWcM5agPIOWcHPVkUQfKq8slHESxzgJmMe%2BWw35LxKaeAw2Tdk5%2FEYilvxRaCINbce1wZU%2FMJWk1cIGOqUBoISciy9QPOS3%2Bn9iWiEsL2MlMtlL2UlDLhlhOBXFGvkVi7ErAqYIie2Cys020lkdORQ5ydMU4roXczltIvV3GtFIqTAAJqjeQ5jGWHvq%2FnAX1%2BjAtGtp2GXp2bOY0D6ra4ZuN1t3EThL886CcWh9xqumGnmJbROX2jPciE3iXrTm%2FdgzkJlXa8aFTOVZEmomVT2s1IvFsnzNemqnjuXa0rRXkazI&X-Amz-Signature=fe2446b296659f5e463cdd95e6a037d8ea3efe6a9198837ee1d4ca4abb429929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB3LTO2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIIuoVGyNhBBGl%2BQNCKtAiwT8EVCcWpTA%2FOz2U4T1i7AiEA8Px64PmODvsZgUDJQzUsz15%2Fj2hg6%2BmCYkw1TC0UBwYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYLA8ZHz8MGhdi%2F7ircA9B8OcL7W9oXiEc7NBc4cIhDrQAey2JQUCQI0gx%2F9hYoPIwEPLXWNEInjIZixv0mTTVDnPD%2FAkLQX5TuMXCG5zFynk86QnzeC5soBc0cg46dTIDHn5yeNjmKDfQ6IssENZISRDFZQRNE%2FkdoJ%2FF0CrTF7evMh3arTeb9aIcgp26WUKvUWHxhHcffmKNgWBgvvNQmIx3e6oiRWCGgkfuFbY2fsyCmRQeVinAnSoILwhh%2FFj9EmywqMFXNyxyV1Kcp8Id4wfe3Lh219elpDm5noJC4rBwV1eydZuDqVMfVTLtGU60eO31w62YnUxA9xcN75ThMK0L3CJnFscB9fAAprvjyz3lFWzvmyypLrc9mJa98dfcS%2BAiC%2FYcwd5MNoOARsCsotaoJI7UxbX4TLr4bPX9pvxgNdtPEENrLPNGilUAiK53TK2aMFT7X7s9rrKAuzroUbMttWWOek%2FBHgsI4wBs8rGZa9KI%2FURMkSRJUYjIcHOtAVCAL6iADvGMrxTtaecQyVrg7OqWjBolWz1jCRXvM720BVmgIQTKytJpsx9W7E1fphdEzqYWcM5agPIOWcHPVkUQfKq8slHESxzgJmMe%2BWw35LxKaeAw2Tdk5%2FEYilvxRaCINbce1wZU%2FMJWk1cIGOqUBoISciy9QPOS3%2Bn9iWiEsL2MlMtlL2UlDLhlhOBXFGvkVi7ErAqYIie2Cys020lkdORQ5ydMU4roXczltIvV3GtFIqTAAJqjeQ5jGWHvq%2FnAX1%2BjAtGtp2GXp2bOY0D6ra4ZuN1t3EThL886CcWh9xqumGnmJbROX2jPciE3iXrTm%2FdgzkJlXa8aFTOVZEmomVT2s1IvFsnzNemqnjuXa0rRXkazI&X-Amz-Signature=f475ce895dd6fa34b9a824e0a75a5ab61b8aa42fa059ca80458f67ecaf0c82d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UB3LTO2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIIuoVGyNhBBGl%2BQNCKtAiwT8EVCcWpTA%2FOz2U4T1i7AiEA8Px64PmODvsZgUDJQzUsz15%2Fj2hg6%2BmCYkw1TC0UBwYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYLA8ZHz8MGhdi%2F7ircA9B8OcL7W9oXiEc7NBc4cIhDrQAey2JQUCQI0gx%2F9hYoPIwEPLXWNEInjIZixv0mTTVDnPD%2FAkLQX5TuMXCG5zFynk86QnzeC5soBc0cg46dTIDHn5yeNjmKDfQ6IssENZISRDFZQRNE%2FkdoJ%2FF0CrTF7evMh3arTeb9aIcgp26WUKvUWHxhHcffmKNgWBgvvNQmIx3e6oiRWCGgkfuFbY2fsyCmRQeVinAnSoILwhh%2FFj9EmywqMFXNyxyV1Kcp8Id4wfe3Lh219elpDm5noJC4rBwV1eydZuDqVMfVTLtGU60eO31w62YnUxA9xcN75ThMK0L3CJnFscB9fAAprvjyz3lFWzvmyypLrc9mJa98dfcS%2BAiC%2FYcwd5MNoOARsCsotaoJI7UxbX4TLr4bPX9pvxgNdtPEENrLPNGilUAiK53TK2aMFT7X7s9rrKAuzroUbMttWWOek%2FBHgsI4wBs8rGZa9KI%2FURMkSRJUYjIcHOtAVCAL6iADvGMrxTtaecQyVrg7OqWjBolWz1jCRXvM720BVmgIQTKytJpsx9W7E1fphdEzqYWcM5agPIOWcHPVkUQfKq8slHESxzgJmMe%2BWw35LxKaeAw2Tdk5%2FEYilvxRaCINbce1wZU%2FMJWk1cIGOqUBoISciy9QPOS3%2Bn9iWiEsL2MlMtlL2UlDLhlhOBXFGvkVi7ErAqYIie2Cys020lkdORQ5ydMU4roXczltIvV3GtFIqTAAJqjeQ5jGWHvq%2FnAX1%2BjAtGtp2GXp2bOY0D6ra4ZuN1t3EThL886CcWh9xqumGnmJbROX2jPciE3iXrTm%2FdgzkJlXa8aFTOVZEmomVT2s1IvFsnzNemqnjuXa0rRXkazI&X-Amz-Signature=73e28321a1f1cdba33eca918b6a95052ed1adf75f575e6b7713bc14ee53a5008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
