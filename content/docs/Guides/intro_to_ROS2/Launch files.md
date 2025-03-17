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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YKNLMY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuL%2F8%2Bu27FQtydv%2FowydI9fzMDQbo7560NM%2FmhcDY1NAiEAsFdvTvhN8eRpmZUWdsCOOu8kvql65k1liFOkDlL4c0Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE178x%2BLsEYI371cbyrcA5Nivwlj1j8lCDgU5z1MWeabONml6kTzquRqMnC1oNEd%2BCpbfE1RkuUr0Fb%2F1okG7j971Oo79YHhAU4imCw2ZcxLCvB%2BYPvPcTmVMEhuNBuzd22v44rcFVtcRjUY5yLXEF1z9SYsrgxsRPto0qJmf%2FzRwEW%2FkVsdPISktYXEJWf%2Bu%2BAqdQTTIeB9H5RQcCvRNLkM%2FNX2FxEfab2szMfaz84JKWvURVmEKt07GHPKCo9NmRaVantMzzWOgVYskdTlerhDsnm1%2B%2FO08KG9B%2FzR78th%2FLuGV4CiSG3PiTcXUHR7dRg%2FWG2%2FbIBCNba0poNqOw7%2BBlz0MTVYgmoPVHbCzrOzuJvmTabcztoxQBEHhSL7oK%2Bom5dJ3aAE2uls1%2Bw75yzmM5eVlLKhVWa4LI0yzMD9req8jMXbXtSB833Umr7XsBS3kFrOKOAdj5agnsqDrjGaiBJaOx2kU6fPjlfX2ojn2ALnFRIxjfYnms22OUieCxTVKQXqZgpz6q0w9ciTvahI5VYPC0392qSS%2BxVHB%2BKofW%2BIraSvfzQRnFSVzSznAufsT57ETbJdEpulTNkVJTBiTeUZT6yZAmFNYmlthcxSRjlZdEAER9c6mhrBBvbEUZe3Qs%2Bme7x0GGv2MKGv374GOqUB97ZAenN%2F54FkHOdr6U5AUohxEcQAHSsNSFFDj98yX9eGwbmLZ25A%2FGR7bg%2Fs%2FYsWCiT%2F61UUBq4izH5r%2Bug0ZOiGk8Hmb4VBTcXpYBTcJ6tVYjsznhqvcQarlpmbUGhjYBwmbylj8w6xPZwC5C%2BE8nnBIcdmonJuCghGjdxxvFq%2FEAG70ueOCM13DSIRbBjayt00PugE7%2FVjh%2FztbPCgPDJD5Mi1&X-Amz-Signature=e8448e8d0cb4ae4d9499365380833fa6326f1b1cdc2ebe29de74b65d1b6fe207&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YKNLMY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuL%2F8%2Bu27FQtydv%2FowydI9fzMDQbo7560NM%2FmhcDY1NAiEAsFdvTvhN8eRpmZUWdsCOOu8kvql65k1liFOkDlL4c0Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE178x%2BLsEYI371cbyrcA5Nivwlj1j8lCDgU5z1MWeabONml6kTzquRqMnC1oNEd%2BCpbfE1RkuUr0Fb%2F1okG7j971Oo79YHhAU4imCw2ZcxLCvB%2BYPvPcTmVMEhuNBuzd22v44rcFVtcRjUY5yLXEF1z9SYsrgxsRPto0qJmf%2FzRwEW%2FkVsdPISktYXEJWf%2Bu%2BAqdQTTIeB9H5RQcCvRNLkM%2FNX2FxEfab2szMfaz84JKWvURVmEKt07GHPKCo9NmRaVantMzzWOgVYskdTlerhDsnm1%2B%2FO08KG9B%2FzR78th%2FLuGV4CiSG3PiTcXUHR7dRg%2FWG2%2FbIBCNba0poNqOw7%2BBlz0MTVYgmoPVHbCzrOzuJvmTabcztoxQBEHhSL7oK%2Bom5dJ3aAE2uls1%2Bw75yzmM5eVlLKhVWa4LI0yzMD9req8jMXbXtSB833Umr7XsBS3kFrOKOAdj5agnsqDrjGaiBJaOx2kU6fPjlfX2ojn2ALnFRIxjfYnms22OUieCxTVKQXqZgpz6q0w9ciTvahI5VYPC0392qSS%2BxVHB%2BKofW%2BIraSvfzQRnFSVzSznAufsT57ETbJdEpulTNkVJTBiTeUZT6yZAmFNYmlthcxSRjlZdEAER9c6mhrBBvbEUZe3Qs%2Bme7x0GGv2MKGv374GOqUB97ZAenN%2F54FkHOdr6U5AUohxEcQAHSsNSFFDj98yX9eGwbmLZ25A%2FGR7bg%2Fs%2FYsWCiT%2F61UUBq4izH5r%2Bug0ZOiGk8Hmb4VBTcXpYBTcJ6tVYjsznhqvcQarlpmbUGhjYBwmbylj8w6xPZwC5C%2BE8nnBIcdmonJuCghGjdxxvFq%2FEAG70ueOCM13DSIRbBjayt00PugE7%2FVjh%2FztbPCgPDJD5Mi1&X-Amz-Signature=1ff8d8cd1076d362e6025998ac2618e9510548c960f3c8937820e72fdd3e7750&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7YKNLMY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuL%2F8%2Bu27FQtydv%2FowydI9fzMDQbo7560NM%2FmhcDY1NAiEAsFdvTvhN8eRpmZUWdsCOOu8kvql65k1liFOkDlL4c0Yq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE178x%2BLsEYI371cbyrcA5Nivwlj1j8lCDgU5z1MWeabONml6kTzquRqMnC1oNEd%2BCpbfE1RkuUr0Fb%2F1okG7j971Oo79YHhAU4imCw2ZcxLCvB%2BYPvPcTmVMEhuNBuzd22v44rcFVtcRjUY5yLXEF1z9SYsrgxsRPto0qJmf%2FzRwEW%2FkVsdPISktYXEJWf%2Bu%2BAqdQTTIeB9H5RQcCvRNLkM%2FNX2FxEfab2szMfaz84JKWvURVmEKt07GHPKCo9NmRaVantMzzWOgVYskdTlerhDsnm1%2B%2FO08KG9B%2FzR78th%2FLuGV4CiSG3PiTcXUHR7dRg%2FWG2%2FbIBCNba0poNqOw7%2BBlz0MTVYgmoPVHbCzrOzuJvmTabcztoxQBEHhSL7oK%2Bom5dJ3aAE2uls1%2Bw75yzmM5eVlLKhVWa4LI0yzMD9req8jMXbXtSB833Umr7XsBS3kFrOKOAdj5agnsqDrjGaiBJaOx2kU6fPjlfX2ojn2ALnFRIxjfYnms22OUieCxTVKQXqZgpz6q0w9ciTvahI5VYPC0392qSS%2BxVHB%2BKofW%2BIraSvfzQRnFSVzSznAufsT57ETbJdEpulTNkVJTBiTeUZT6yZAmFNYmlthcxSRjlZdEAER9c6mhrBBvbEUZe3Qs%2Bme7x0GGv2MKGv374GOqUB97ZAenN%2F54FkHOdr6U5AUohxEcQAHSsNSFFDj98yX9eGwbmLZ25A%2FGR7bg%2Fs%2FYsWCiT%2F61UUBq4izH5r%2Bug0ZOiGk8Hmb4VBTcXpYBTcJ6tVYjsznhqvcQarlpmbUGhjYBwmbylj8w6xPZwC5C%2BE8nnBIcdmonJuCghGjdxxvFq%2FEAG70ueOCM13DSIRbBjayt00PugE7%2FVjh%2FztbPCgPDJD5Mi1&X-Amz-Signature=87fd58072b67b400dc1b23abbc2acc2b6740a996acce8f29c29bc87ec360e7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
