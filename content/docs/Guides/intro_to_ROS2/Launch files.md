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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RDDN24%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQAsDE%2F9o7mNjoOrpZC0A32zXgRdayfXc4uLsKWCdHgIgRBLxDZRyaBEk3l3PCV0eQpKBBxx3G2B%2FGcxhuf8EsTUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9tyaO93wMidEW5BCrcA7qlH5%2FNNW4pBORUnKK%2BPogufiPSCJVnsXDPE0XRjSrCnJW9iz8qcxreozGTGcqu%2Fa%2FOqzPA2eXfpUxk%2FZF9ePPPHjyBs%2FFk8os0oulneXdGvqFqskPIpIoe9dE2avUyFTdWhze0zx%2FIeIn3Q1keyec5Er31n6xStZxbQzHu5KkFFL%2BYKxlg7xzKABEFxYSD0k%2BKPiBv2g49Nf8%2FRTgzzCxmo9hOho8H8bMVk9w7hGMXkvULriRqBeXV3r7Np1ShrKAluGlOncgYq3Xz3isEvNu2RV91zmx5rSAjr76CHy9csLdcpQ5lGgSzLFddV1kYCLIoB%2B4Kyt3pwQA3qAQeoWL6RPyDpx%2B3%2BEtlY7ApXzFDmipJdvMuqVq4pEfIWHQ3TwUAILdvEjDZvoqnZ0ofpYZoR6V4K1nyKUDYYCRNPIip2A3OHasR0TL9mD0XxdK32jzpR3iZ1%2F2y0%2BYfJOvRIx4yyDMrfiV63AUR9QSRmMoAiGg%2FwS%2BELeS9ai%2BeXgarJLIK%2BDge4vk7JxMdtRihlanv5dFVfTeqrPgxhZnN6eLe%2Fe447a9pMRcLk6iOHzBpXt00eONFRHBD8xBn2irwXXbcvnQsqgONN%2BTzjb1%2B4hgevSD29Q0aOM2qxDsTMO6y48EGOqUBsr1Grl2CapQZ6wCpqB7n3Rdlfk%2F4aIaNmvg8MsiKwRW%2BewYN1HG3II0MsByCINz0mmljYj97R8WOhO0q%2B6EZLw3%2Fsx9waxV7uwhl0CBSSsQ4KCv2%2B81VML4Mv6TGzPN1yYHjiMqQ8F0tre6yxcTNOx6O61ZZxIX%2Fvgxk2sCIb1IpZ96Aj4VJUpxA1zH3vI21INCkGXGcYoE9DwBNGYjOmyq7fa50&X-Amz-Signature=f1239edf9378048899b4412dc7bf8fa53ea8936da6dede2149255b96e0edcc32&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RDDN24%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQAsDE%2F9o7mNjoOrpZC0A32zXgRdayfXc4uLsKWCdHgIgRBLxDZRyaBEk3l3PCV0eQpKBBxx3G2B%2FGcxhuf8EsTUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9tyaO93wMidEW5BCrcA7qlH5%2FNNW4pBORUnKK%2BPogufiPSCJVnsXDPE0XRjSrCnJW9iz8qcxreozGTGcqu%2Fa%2FOqzPA2eXfpUxk%2FZF9ePPPHjyBs%2FFk8os0oulneXdGvqFqskPIpIoe9dE2avUyFTdWhze0zx%2FIeIn3Q1keyec5Er31n6xStZxbQzHu5KkFFL%2BYKxlg7xzKABEFxYSD0k%2BKPiBv2g49Nf8%2FRTgzzCxmo9hOho8H8bMVk9w7hGMXkvULriRqBeXV3r7Np1ShrKAluGlOncgYq3Xz3isEvNu2RV91zmx5rSAjr76CHy9csLdcpQ5lGgSzLFddV1kYCLIoB%2B4Kyt3pwQA3qAQeoWL6RPyDpx%2B3%2BEtlY7ApXzFDmipJdvMuqVq4pEfIWHQ3TwUAILdvEjDZvoqnZ0ofpYZoR6V4K1nyKUDYYCRNPIip2A3OHasR0TL9mD0XxdK32jzpR3iZ1%2F2y0%2BYfJOvRIx4yyDMrfiV63AUR9QSRmMoAiGg%2FwS%2BELeS9ai%2BeXgarJLIK%2BDge4vk7JxMdtRihlanv5dFVfTeqrPgxhZnN6eLe%2Fe447a9pMRcLk6iOHzBpXt00eONFRHBD8xBn2irwXXbcvnQsqgONN%2BTzjb1%2B4hgevSD29Q0aOM2qxDsTMO6y48EGOqUBsr1Grl2CapQZ6wCpqB7n3Rdlfk%2F4aIaNmvg8MsiKwRW%2BewYN1HG3II0MsByCINz0mmljYj97R8WOhO0q%2B6EZLw3%2Fsx9waxV7uwhl0CBSSsQ4KCv2%2B81VML4Mv6TGzPN1yYHjiMqQ8F0tre6yxcTNOx6O61ZZxIX%2Fvgxk2sCIb1IpZ96Aj4VJUpxA1zH3vI21INCkGXGcYoE9DwBNGYjOmyq7fa50&X-Amz-Signature=48d8c9f4b457baec0bb082cdbed4c495ff66070c1a3fa71428fe6dd9f2516592&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RDDN24%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQQAsDE%2F9o7mNjoOrpZC0A32zXgRdayfXc4uLsKWCdHgIgRBLxDZRyaBEk3l3PCV0eQpKBBxx3G2B%2FGcxhuf8EsTUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9tyaO93wMidEW5BCrcA7qlH5%2FNNW4pBORUnKK%2BPogufiPSCJVnsXDPE0XRjSrCnJW9iz8qcxreozGTGcqu%2Fa%2FOqzPA2eXfpUxk%2FZF9ePPPHjyBs%2FFk8os0oulneXdGvqFqskPIpIoe9dE2avUyFTdWhze0zx%2FIeIn3Q1keyec5Er31n6xStZxbQzHu5KkFFL%2BYKxlg7xzKABEFxYSD0k%2BKPiBv2g49Nf8%2FRTgzzCxmo9hOho8H8bMVk9w7hGMXkvULriRqBeXV3r7Np1ShrKAluGlOncgYq3Xz3isEvNu2RV91zmx5rSAjr76CHy9csLdcpQ5lGgSzLFddV1kYCLIoB%2B4Kyt3pwQA3qAQeoWL6RPyDpx%2B3%2BEtlY7ApXzFDmipJdvMuqVq4pEfIWHQ3TwUAILdvEjDZvoqnZ0ofpYZoR6V4K1nyKUDYYCRNPIip2A3OHasR0TL9mD0XxdK32jzpR3iZ1%2F2y0%2BYfJOvRIx4yyDMrfiV63AUR9QSRmMoAiGg%2FwS%2BELeS9ai%2BeXgarJLIK%2BDge4vk7JxMdtRihlanv5dFVfTeqrPgxhZnN6eLe%2Fe447a9pMRcLk6iOHzBpXt00eONFRHBD8xBn2irwXXbcvnQsqgONN%2BTzjb1%2B4hgevSD29Q0aOM2qxDsTMO6y48EGOqUBsr1Grl2CapQZ6wCpqB7n3Rdlfk%2F4aIaNmvg8MsiKwRW%2BewYN1HG3II0MsByCINz0mmljYj97R8WOhO0q%2B6EZLw3%2Fsx9waxV7uwhl0CBSSsQ4KCv2%2B81VML4Mv6TGzPN1yYHjiMqQ8F0tre6yxcTNOx6O61ZZxIX%2Fvgxk2sCIb1IpZ96Aj4VJUpxA1zH3vI21INCkGXGcYoE9DwBNGYjOmyq7fa50&X-Amz-Signature=960ce37e7253781801b2aba511fadc98bf9aacbe56ccc32bc40ecf64e59b5330&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
