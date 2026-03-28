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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXAVKYY%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCCU4Z%2BrWXer7aImCjnq3oSAgzW9rqhX3nwPdHwxv1nfgIgFAh8W0HHNIaDb0%2F%2BEGSO3ojQZ4G3UFBoivGo719P9vUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BfhGEvvxUkKtE1FircA6unEpwZ4Lx388iJPsRrp241dAWKqv53wQYyJUY28mgP6h8iFxAmBBrxd6LFe%2FmoVStnWki9cFTSXSPwxIaIpLRC0D80wzw6fu1Pp3L3jn3Rj201PVmjI2Pw1GJlkDO6anmp1nqulq4%2Foe4%2FKYWbfACmhnOaGYtT4wtmz5LZqqc4YiSwyUi2so3PYuZnOCythusjvnLMxCK8v%2FiAneI0H7OvOZ616B6XojGV5xyetvCEQ55hMuIdzJHZH59%2B2DkJ%2ByFR95gTkEZ4%2Bkf1S2icrETfLGu42qCVn1V342Azue%2F3mSrj7QTQYFaBbjZIV%2FA3mkPGOdYEMZ0NotShUbt0Bq8dAMUVx8EcciclKHwF5%2FfdJBVTmVGMxcizhfaa9aK1w20yQFfX32ohic%2F9nsHyYsSmVe8GWqth4jBGRism0euN47VkLT5GdqbgpsaTGVORcwilWpwR7c9h9g1EO9SzfAj2yNxpYZFtvLc23pVqjPfkJ2J3I999kuSA%2B%2FP1Owigg5V76jScfR04AtjwxOuPfNSVCWs6Y6AuVAV3sl1MnewlcatjyjddvRs9z3r0KCjfwt1%2FhRYCdY3sEKeTvKmVBx2hnDudn6OAzlJP%2B8I%2FoLJm9AczAoS5F7vUIOIUMMLtnM4GOqUBxSPIdkWkpN3dCLErVnQs6CCttBIzaohOw03HwlZgpcWCqPVdmcbRMgpPNz5Y1fbBiFIWsFQ4N%2FKU2uY94zZSTPFYONf7OPTAw9HJb1cwQINBP5nHUA7wfnoK0fl3RYKbiRnwrBvu3PWMPBhxJI%2FOTkvetjNOnIv9yTM%2FLGtivNYFHiuV4CJoO4yoMR%2BkFrl3tlMGzYhr%2FYX3sNUK1FFOcffaZLv2&X-Amz-Signature=715f4b431c883f58038e7319987dc5e2cf9f1c61da155627637e9c0216d87b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXAVKYY%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCCU4Z%2BrWXer7aImCjnq3oSAgzW9rqhX3nwPdHwxv1nfgIgFAh8W0HHNIaDb0%2F%2BEGSO3ojQZ4G3UFBoivGo719P9vUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BfhGEvvxUkKtE1FircA6unEpwZ4Lx388iJPsRrp241dAWKqv53wQYyJUY28mgP6h8iFxAmBBrxd6LFe%2FmoVStnWki9cFTSXSPwxIaIpLRC0D80wzw6fu1Pp3L3jn3Rj201PVmjI2Pw1GJlkDO6anmp1nqulq4%2Foe4%2FKYWbfACmhnOaGYtT4wtmz5LZqqc4YiSwyUi2so3PYuZnOCythusjvnLMxCK8v%2FiAneI0H7OvOZ616B6XojGV5xyetvCEQ55hMuIdzJHZH59%2B2DkJ%2ByFR95gTkEZ4%2Bkf1S2icrETfLGu42qCVn1V342Azue%2F3mSrj7QTQYFaBbjZIV%2FA3mkPGOdYEMZ0NotShUbt0Bq8dAMUVx8EcciclKHwF5%2FfdJBVTmVGMxcizhfaa9aK1w20yQFfX32ohic%2F9nsHyYsSmVe8GWqth4jBGRism0euN47VkLT5GdqbgpsaTGVORcwilWpwR7c9h9g1EO9SzfAj2yNxpYZFtvLc23pVqjPfkJ2J3I999kuSA%2B%2FP1Owigg5V76jScfR04AtjwxOuPfNSVCWs6Y6AuVAV3sl1MnewlcatjyjddvRs9z3r0KCjfwt1%2FhRYCdY3sEKeTvKmVBx2hnDudn6OAzlJP%2B8I%2FoLJm9AczAoS5F7vUIOIUMMLtnM4GOqUBxSPIdkWkpN3dCLErVnQs6CCttBIzaohOw03HwlZgpcWCqPVdmcbRMgpPNz5Y1fbBiFIWsFQ4N%2FKU2uY94zZSTPFYONf7OPTAw9HJb1cwQINBP5nHUA7wfnoK0fl3RYKbiRnwrBvu3PWMPBhxJI%2FOTkvetjNOnIv9yTM%2FLGtivNYFHiuV4CJoO4yoMR%2BkFrl3tlMGzYhr%2FYX3sNUK1FFOcffaZLv2&X-Amz-Signature=b9e5d9db114750ff3007a9565c85bdc16aa620e8b500fb061b2cdf7c37578cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXAVKYY%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCCU4Z%2BrWXer7aImCjnq3oSAgzW9rqhX3nwPdHwxv1nfgIgFAh8W0HHNIaDb0%2F%2BEGSO3ojQZ4G3UFBoivGo719P9vUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BfhGEvvxUkKtE1FircA6unEpwZ4Lx388iJPsRrp241dAWKqv53wQYyJUY28mgP6h8iFxAmBBrxd6LFe%2FmoVStnWki9cFTSXSPwxIaIpLRC0D80wzw6fu1Pp3L3jn3Rj201PVmjI2Pw1GJlkDO6anmp1nqulq4%2Foe4%2FKYWbfACmhnOaGYtT4wtmz5LZqqc4YiSwyUi2so3PYuZnOCythusjvnLMxCK8v%2FiAneI0H7OvOZ616B6XojGV5xyetvCEQ55hMuIdzJHZH59%2B2DkJ%2ByFR95gTkEZ4%2Bkf1S2icrETfLGu42qCVn1V342Azue%2F3mSrj7QTQYFaBbjZIV%2FA3mkPGOdYEMZ0NotShUbt0Bq8dAMUVx8EcciclKHwF5%2FfdJBVTmVGMxcizhfaa9aK1w20yQFfX32ohic%2F9nsHyYsSmVe8GWqth4jBGRism0euN47VkLT5GdqbgpsaTGVORcwilWpwR7c9h9g1EO9SzfAj2yNxpYZFtvLc23pVqjPfkJ2J3I999kuSA%2B%2FP1Owigg5V76jScfR04AtjwxOuPfNSVCWs6Y6AuVAV3sl1MnewlcatjyjddvRs9z3r0KCjfwt1%2FhRYCdY3sEKeTvKmVBx2hnDudn6OAzlJP%2B8I%2FoLJm9AczAoS5F7vUIOIUMMLtnM4GOqUBxSPIdkWkpN3dCLErVnQs6CCttBIzaohOw03HwlZgpcWCqPVdmcbRMgpPNz5Y1fbBiFIWsFQ4N%2FKU2uY94zZSTPFYONf7OPTAw9HJb1cwQINBP5nHUA7wfnoK0fl3RYKbiRnwrBvu3PWMPBhxJI%2FOTkvetjNOnIv9yTM%2FLGtivNYFHiuV4CJoO4yoMR%2BkFrl3tlMGzYhr%2FYX3sNUK1FFOcffaZLv2&X-Amz-Signature=e892bf65576a0b18177d491fa9eaadf80b35d1f0fb30805b6392bc2c75518684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
