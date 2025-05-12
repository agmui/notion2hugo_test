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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YINXCB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEv1y02Owqa6iYw%2FbAs2Ig4g9P3fJE9DecU1DsNfKl5eAiEAx2C7yO3PHg4UdU34P48PGHEW05xmPPg%2BLSDaRCpGBLkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN498q8sxR8jEP7GqyrcA6amNM9Ay2bmAAcmCCoErqsGBWgwyXPlu4hUPJYWJ54GzuryXlZeFRenmoEalBqZ3DFaDndg5WJMvAqY0fkOpc4L3YFIC4TjD9P4D8H3D4%2FTx7Ze7f6q9hBDNYsuFzCpQpXp702tEvaQvSToF4%2Fc4nu1nNg8%2F9W3LSfpwCnRqrmT%2F1m6%2FS0Sl9afIdWcfGpswwV%2BabjeyCBZ80l8AigOrhYV23f%2FVe7nXN%2BAUQwc%2BW64G7sO3tHIlArXF1PauRJ%2F%2BSSMmqHGS7tb2f3%2FIVIUi3YUrvrhjQyimIckjbfCB53w3p%2F2qHfFoHndmYeGHGyDi1hbasQX1sIw7WL1%2B6iIaYcXFPhBpsrmXtf67FsF7iOq1fYWFHV4tHpytnN7WaWYWlzo4xDM7fZulPNXMc5sxsxkroTz57XLfotkxmWtjG18q9LUUNOUW0NfYY5ZfMTj0nRVY1LcvOyJuecVVlzg3rpgP440K59v5mUvZblpX7LnMj2kHxHHH7rKNevba7M%2FIXEwk3uGC%2B3ZhTgew6psCFZLfl2pXM%2FPt51K1xby9WgaoTN8oAP463Je9vxhiomDevlPPAD9At8e4opiWLxRWVs7Eg8Uj7Rb2KTGmKFSUg%2Fd%2Bb4GPNmvaqCs5iG4MKaeiMEGOqUBtqrf3Sce0DI4gWtBkVyv7DPelklvtZFPv72gUS0eLN2KdxRKEcPDDTb9dTZ6mC9eh2TOhaqKMcbFm%2BTL5FM4bSpfbzFBCokcHt7nl6t4%2BlC%2F5b8%2FICS6yUjtCdnuKcQQ4BIVLvWbOrkPOffafhLAyGSqCiILevDwTxIzbEz30GUBXYLSOWrAbPe96cVecn1C1RapYwIeUcy3YW1X77h4A3Pl8o6B&X-Amz-Signature=2e565eead1a14880c21a5192fe478db3d2618fd05a0b9ebc1c124b3919ebb880&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YINXCB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEv1y02Owqa6iYw%2FbAs2Ig4g9P3fJE9DecU1DsNfKl5eAiEAx2C7yO3PHg4UdU34P48PGHEW05xmPPg%2BLSDaRCpGBLkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN498q8sxR8jEP7GqyrcA6amNM9Ay2bmAAcmCCoErqsGBWgwyXPlu4hUPJYWJ54GzuryXlZeFRenmoEalBqZ3DFaDndg5WJMvAqY0fkOpc4L3YFIC4TjD9P4D8H3D4%2FTx7Ze7f6q9hBDNYsuFzCpQpXp702tEvaQvSToF4%2Fc4nu1nNg8%2F9W3LSfpwCnRqrmT%2F1m6%2FS0Sl9afIdWcfGpswwV%2BabjeyCBZ80l8AigOrhYV23f%2FVe7nXN%2BAUQwc%2BW64G7sO3tHIlArXF1PauRJ%2F%2BSSMmqHGS7tb2f3%2FIVIUi3YUrvrhjQyimIckjbfCB53w3p%2F2qHfFoHndmYeGHGyDi1hbasQX1sIw7WL1%2B6iIaYcXFPhBpsrmXtf67FsF7iOq1fYWFHV4tHpytnN7WaWYWlzo4xDM7fZulPNXMc5sxsxkroTz57XLfotkxmWtjG18q9LUUNOUW0NfYY5ZfMTj0nRVY1LcvOyJuecVVlzg3rpgP440K59v5mUvZblpX7LnMj2kHxHHH7rKNevba7M%2FIXEwk3uGC%2B3ZhTgew6psCFZLfl2pXM%2FPt51K1xby9WgaoTN8oAP463Je9vxhiomDevlPPAD9At8e4opiWLxRWVs7Eg8Uj7Rb2KTGmKFSUg%2Fd%2Bb4GPNmvaqCs5iG4MKaeiMEGOqUBtqrf3Sce0DI4gWtBkVyv7DPelklvtZFPv72gUS0eLN2KdxRKEcPDDTb9dTZ6mC9eh2TOhaqKMcbFm%2BTL5FM4bSpfbzFBCokcHt7nl6t4%2BlC%2F5b8%2FICS6yUjtCdnuKcQQ4BIVLvWbOrkPOffafhLAyGSqCiILevDwTxIzbEz30GUBXYLSOWrAbPe96cVecn1C1RapYwIeUcy3YW1X77h4A3Pl8o6B&X-Amz-Signature=28a475eba31b0cb342ae30887b41ab585f90f6301ec3830c56036f540f4d23f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7YINXCB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEv1y02Owqa6iYw%2FbAs2Ig4g9P3fJE9DecU1DsNfKl5eAiEAx2C7yO3PHg4UdU34P48PGHEW05xmPPg%2BLSDaRCpGBLkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN498q8sxR8jEP7GqyrcA6amNM9Ay2bmAAcmCCoErqsGBWgwyXPlu4hUPJYWJ54GzuryXlZeFRenmoEalBqZ3DFaDndg5WJMvAqY0fkOpc4L3YFIC4TjD9P4D8H3D4%2FTx7Ze7f6q9hBDNYsuFzCpQpXp702tEvaQvSToF4%2Fc4nu1nNg8%2F9W3LSfpwCnRqrmT%2F1m6%2FS0Sl9afIdWcfGpswwV%2BabjeyCBZ80l8AigOrhYV23f%2FVe7nXN%2BAUQwc%2BW64G7sO3tHIlArXF1PauRJ%2F%2BSSMmqHGS7tb2f3%2FIVIUi3YUrvrhjQyimIckjbfCB53w3p%2F2qHfFoHndmYeGHGyDi1hbasQX1sIw7WL1%2B6iIaYcXFPhBpsrmXtf67FsF7iOq1fYWFHV4tHpytnN7WaWYWlzo4xDM7fZulPNXMc5sxsxkroTz57XLfotkxmWtjG18q9LUUNOUW0NfYY5ZfMTj0nRVY1LcvOyJuecVVlzg3rpgP440K59v5mUvZblpX7LnMj2kHxHHH7rKNevba7M%2FIXEwk3uGC%2B3ZhTgew6psCFZLfl2pXM%2FPt51K1xby9WgaoTN8oAP463Je9vxhiomDevlPPAD9At8e4opiWLxRWVs7Eg8Uj7Rb2KTGmKFSUg%2Fd%2Bb4GPNmvaqCs5iG4MKaeiMEGOqUBtqrf3Sce0DI4gWtBkVyv7DPelklvtZFPv72gUS0eLN2KdxRKEcPDDTb9dTZ6mC9eh2TOhaqKMcbFm%2BTL5FM4bSpfbzFBCokcHt7nl6t4%2BlC%2F5b8%2FICS6yUjtCdnuKcQQ4BIVLvWbOrkPOffafhLAyGSqCiILevDwTxIzbEz30GUBXYLSOWrAbPe96cVecn1C1RapYwIeUcy3YW1X77h4A3Pl8o6B&X-Amz-Signature=1c21641ca0cf7d073e1725dd91ec98aa655da257fc8c4c6ab82a31699b53e76e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
