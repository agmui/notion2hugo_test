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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTK72BMO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FJCOiFhYRyAifM1kzjFItvqU1loiAHEzuVwq2PnfypwIhAIGDnZjW%2BZNBrrLsKY0qmnQFFdBXv7if7kQ%2FbCmMTrPNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0A%2FHvhLLEouZhc4q3AMhm66pFwVvj6RhZe9KSpgpnSvlOx3D3Sum7dd208n2DFnCMV2zmLX9yFlXMupg%2B5UXXL9Z7%2B%2BNoe6O4K%2FEkFfX9KCk77r9UVP5VITLkPczfkyV%2BgaAKznPbD86133UdsGiFsiH2dVNDUnTtNdCy0nXkQWI0O44xncifPSO0Wm3rpW7jYC5%2BkzFbyJuFeibepNDqvy4I65SqsUauR1ltffOR5177dWbIivqAd7ywoYTWNTEd9MJUsptMvzRzPXS2fnFVKwrRv2hBeoi0EN02%2Bg1LBEFvouTpi75SZijuvomierNpxYUHyGuuUgkHiOm6ske4Mb4sbgv2KihmxFgzQndRy%2F3sgcaUEx00eB%2Fuj1iqQtoqL6rNC5Ye2C60Wvo1oQm%2FDk2%2FHHz5iXWu7%2FtommxysHmZJrzJfu%2B19uJpMIeJTijuBSVouV93wOMpmiRgPhXpKj%2BLqOQYf1qenGGTsh9oNI5c0iTmwIZG69PlOkXo34p7fjfYlSN8ipU6IcqarAxKz9TyVFCuT8NoanMAdpu9lpFDjfC1%2FTmLFonDRkuOfxcCtgWSfMIlaAl%2BIgGQJ09LCXamSrTufrJvlk45kBZlUNJw0CzM9sMUEslIU%2FfsxHC1GWCr%2BWt%2BXxvMjCSttbCBjqkAciFYuJ%2FZZa%2BAO0E47f384mDHgJ9cBPirjsP9i6XleaL%2FYyen0NOkxAywVWfZNuSuxlKvr6DfjGU4HOD6apEdLRrDi6KcybC2Ig2u%2FYDDJbZzfs7Sz2w2bSrmeJq5n40nAohudnRXuk8%2Ba9usgHFwMkc%2FLxToakuh2T4gPlCBFPquhessj7lUU%2BcpBuMrtvGhT45KbKeGUprQSOJKk2BxBU0xG5c&X-Amz-Signature=841f1b802880a7e566387206506fbc7f5e6ab94666c181f6c3e07620b5f68b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTK72BMO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FJCOiFhYRyAifM1kzjFItvqU1loiAHEzuVwq2PnfypwIhAIGDnZjW%2BZNBrrLsKY0qmnQFFdBXv7if7kQ%2FbCmMTrPNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0A%2FHvhLLEouZhc4q3AMhm66pFwVvj6RhZe9KSpgpnSvlOx3D3Sum7dd208n2DFnCMV2zmLX9yFlXMupg%2B5UXXL9Z7%2B%2BNoe6O4K%2FEkFfX9KCk77r9UVP5VITLkPczfkyV%2BgaAKznPbD86133UdsGiFsiH2dVNDUnTtNdCy0nXkQWI0O44xncifPSO0Wm3rpW7jYC5%2BkzFbyJuFeibepNDqvy4I65SqsUauR1ltffOR5177dWbIivqAd7ywoYTWNTEd9MJUsptMvzRzPXS2fnFVKwrRv2hBeoi0EN02%2Bg1LBEFvouTpi75SZijuvomierNpxYUHyGuuUgkHiOm6ske4Mb4sbgv2KihmxFgzQndRy%2F3sgcaUEx00eB%2Fuj1iqQtoqL6rNC5Ye2C60Wvo1oQm%2FDk2%2FHHz5iXWu7%2FtommxysHmZJrzJfu%2B19uJpMIeJTijuBSVouV93wOMpmiRgPhXpKj%2BLqOQYf1qenGGTsh9oNI5c0iTmwIZG69PlOkXo34p7fjfYlSN8ipU6IcqarAxKz9TyVFCuT8NoanMAdpu9lpFDjfC1%2FTmLFonDRkuOfxcCtgWSfMIlaAl%2BIgGQJ09LCXamSrTufrJvlk45kBZlUNJw0CzM9sMUEslIU%2FfsxHC1GWCr%2BWt%2BXxvMjCSttbCBjqkAciFYuJ%2FZZa%2BAO0E47f384mDHgJ9cBPirjsP9i6XleaL%2FYyen0NOkxAywVWfZNuSuxlKvr6DfjGU4HOD6apEdLRrDi6KcybC2Ig2u%2FYDDJbZzfs7Sz2w2bSrmeJq5n40nAohudnRXuk8%2Ba9usgHFwMkc%2FLxToakuh2T4gPlCBFPquhessj7lUU%2BcpBuMrtvGhT45KbKeGUprQSOJKk2BxBU0xG5c&X-Amz-Signature=8761e856499048af6c5406d7d8006fc6708c77d03e561e12ad8f0c1aa0743bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTK72BMO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FJCOiFhYRyAifM1kzjFItvqU1loiAHEzuVwq2PnfypwIhAIGDnZjW%2BZNBrrLsKY0qmnQFFdBXv7if7kQ%2FbCmMTrPNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0A%2FHvhLLEouZhc4q3AMhm66pFwVvj6RhZe9KSpgpnSvlOx3D3Sum7dd208n2DFnCMV2zmLX9yFlXMupg%2B5UXXL9Z7%2B%2BNoe6O4K%2FEkFfX9KCk77r9UVP5VITLkPczfkyV%2BgaAKznPbD86133UdsGiFsiH2dVNDUnTtNdCy0nXkQWI0O44xncifPSO0Wm3rpW7jYC5%2BkzFbyJuFeibepNDqvy4I65SqsUauR1ltffOR5177dWbIivqAd7ywoYTWNTEd9MJUsptMvzRzPXS2fnFVKwrRv2hBeoi0EN02%2Bg1LBEFvouTpi75SZijuvomierNpxYUHyGuuUgkHiOm6ske4Mb4sbgv2KihmxFgzQndRy%2F3sgcaUEx00eB%2Fuj1iqQtoqL6rNC5Ye2C60Wvo1oQm%2FDk2%2FHHz5iXWu7%2FtommxysHmZJrzJfu%2B19uJpMIeJTijuBSVouV93wOMpmiRgPhXpKj%2BLqOQYf1qenGGTsh9oNI5c0iTmwIZG69PlOkXo34p7fjfYlSN8ipU6IcqarAxKz9TyVFCuT8NoanMAdpu9lpFDjfC1%2FTmLFonDRkuOfxcCtgWSfMIlaAl%2BIgGQJ09LCXamSrTufrJvlk45kBZlUNJw0CzM9sMUEslIU%2FfsxHC1GWCr%2BWt%2BXxvMjCSttbCBjqkAciFYuJ%2FZZa%2BAO0E47f384mDHgJ9cBPirjsP9i6XleaL%2FYyen0NOkxAywVWfZNuSuxlKvr6DfjGU4HOD6apEdLRrDi6KcybC2Ig2u%2FYDDJbZzfs7Sz2w2bSrmeJq5n40nAohudnRXuk8%2Ba9usgHFwMkc%2FLxToakuh2T4gPlCBFPquhessj7lUU%2BcpBuMrtvGhT45KbKeGUprQSOJKk2BxBU0xG5c&X-Amz-Signature=e28750388d595ca7c4ca5101fe598cdd34d78c39c71f4f865625d0f33fb45991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
