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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOX6KCO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7U%2Fy9fSwxBjrlT5M2DOmt95H0lqwA921H1uSciO9VwIgQGu1DvE1WNJ4S3nJA1LL1eZuy5AWGqMqdjyUzeaFnUYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBLlprnwjyi2HtwedSrcA5aIF3AGUCrdF%2FlG37JxHpYRwPrm8edMuxXyiw7QrTEbacWk%2Fe9z7hwfKLpTSHXZvq1kQD%2FtyGi3wPzPKCTikdNSiv4KqqeflicXAt0xlErK7Dwz5WKYobkHcnxzZSSJYNUflMWjcyq7kmAcDogfRpFs4Xdakf4BPzNDlH5FQmKSxS5PDPCGty1Vgn%2FyjiqCWW9pDhS0mD7Qy%2FVuCGEnkZlPoBj9N5Xun0DPh2RXXXPGUnGghIJiBZJmow%2FVmkFl%2BnzHNfBR6VbVIq0%2FwVY2L%2BMoWsuQ6P8p%2BODTK0eTH9mCIhM8bnjYSfzPD8KHy0VgAMLaelBlqW6q1x2pJ6TSJVLBM9HvEP4Gez%2FzU8FQMTBtK5rhtZEKt65IedEks8Igu1q8f92xMr8qYg4mZ0vPnj53vvhrbghmRajm8U4Ol55jDFxOa3347ClQnzvN9FmiRV34Du8VRW6lF3daWp12bIlwSyWyKDyoDqHQDg2kOYjw9pt8qpDmbCij%2F2SGU%2FrgLNi02vXqKSKUxjXUX03ugPn1te0b2nXEwCVr8BtLoBZxYJDRVP8uWpJH7b9BFmR4oCNyQT5Cvu5tnDaH7YXSxrdnJ9OXbOgqMMfiw4OBgqNm851aQKVO8436Ggv%2BMMTJ474GOqUB7jrALKVFBOjlnnDyTflNVbfJ6qiKCEO9GJZ65Ty7JmYBSrdUR8eLiMTCguBXlc3V9WG32CnrLkcQXZpQSVtE5PGrP47658yivTW9G1h%2BvJn%2BU%2BvQnmai2AHvxIfs0FADM4cKZwfAoi%2BIkoyjifcqzqdzEk%2FXxeasoGJwWqoXGWhSB5G8MuiPnrJ3V0Dm0CBmDtCuFzj3C6yX6veC8FI%2BSWHwehWc&X-Amz-Signature=6cf0604f772db63b8531bcc3a174a9954f9336daa69f38cd9c57ea6a96d481a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOX6KCO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7U%2Fy9fSwxBjrlT5M2DOmt95H0lqwA921H1uSciO9VwIgQGu1DvE1WNJ4S3nJA1LL1eZuy5AWGqMqdjyUzeaFnUYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBLlprnwjyi2HtwedSrcA5aIF3AGUCrdF%2FlG37JxHpYRwPrm8edMuxXyiw7QrTEbacWk%2Fe9z7hwfKLpTSHXZvq1kQD%2FtyGi3wPzPKCTikdNSiv4KqqeflicXAt0xlErK7Dwz5WKYobkHcnxzZSSJYNUflMWjcyq7kmAcDogfRpFs4Xdakf4BPzNDlH5FQmKSxS5PDPCGty1Vgn%2FyjiqCWW9pDhS0mD7Qy%2FVuCGEnkZlPoBj9N5Xun0DPh2RXXXPGUnGghIJiBZJmow%2FVmkFl%2BnzHNfBR6VbVIq0%2FwVY2L%2BMoWsuQ6P8p%2BODTK0eTH9mCIhM8bnjYSfzPD8KHy0VgAMLaelBlqW6q1x2pJ6TSJVLBM9HvEP4Gez%2FzU8FQMTBtK5rhtZEKt65IedEks8Igu1q8f92xMr8qYg4mZ0vPnj53vvhrbghmRajm8U4Ol55jDFxOa3347ClQnzvN9FmiRV34Du8VRW6lF3daWp12bIlwSyWyKDyoDqHQDg2kOYjw9pt8qpDmbCij%2F2SGU%2FrgLNi02vXqKSKUxjXUX03ugPn1te0b2nXEwCVr8BtLoBZxYJDRVP8uWpJH7b9BFmR4oCNyQT5Cvu5tnDaH7YXSxrdnJ9OXbOgqMMfiw4OBgqNm851aQKVO8436Ggv%2BMMTJ474GOqUB7jrALKVFBOjlnnDyTflNVbfJ6qiKCEO9GJZ65Ty7JmYBSrdUR8eLiMTCguBXlc3V9WG32CnrLkcQXZpQSVtE5PGrP47658yivTW9G1h%2BvJn%2BU%2BvQnmai2AHvxIfs0FADM4cKZwfAoi%2BIkoyjifcqzqdzEk%2FXxeasoGJwWqoXGWhSB5G8MuiPnrJ3V0Dm0CBmDtCuFzj3C6yX6veC8FI%2BSWHwehWc&X-Amz-Signature=7c8358400a410244e13491c931181a97b9a79b9b7f2e2901da9d39ba93b75583&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHOX6KCO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7U%2Fy9fSwxBjrlT5M2DOmt95H0lqwA921H1uSciO9VwIgQGu1DvE1WNJ4S3nJA1LL1eZuy5AWGqMqdjyUzeaFnUYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBLlprnwjyi2HtwedSrcA5aIF3AGUCrdF%2FlG37JxHpYRwPrm8edMuxXyiw7QrTEbacWk%2Fe9z7hwfKLpTSHXZvq1kQD%2FtyGi3wPzPKCTikdNSiv4KqqeflicXAt0xlErK7Dwz5WKYobkHcnxzZSSJYNUflMWjcyq7kmAcDogfRpFs4Xdakf4BPzNDlH5FQmKSxS5PDPCGty1Vgn%2FyjiqCWW9pDhS0mD7Qy%2FVuCGEnkZlPoBj9N5Xun0DPh2RXXXPGUnGghIJiBZJmow%2FVmkFl%2BnzHNfBR6VbVIq0%2FwVY2L%2BMoWsuQ6P8p%2BODTK0eTH9mCIhM8bnjYSfzPD8KHy0VgAMLaelBlqW6q1x2pJ6TSJVLBM9HvEP4Gez%2FzU8FQMTBtK5rhtZEKt65IedEks8Igu1q8f92xMr8qYg4mZ0vPnj53vvhrbghmRajm8U4Ol55jDFxOa3347ClQnzvN9FmiRV34Du8VRW6lF3daWp12bIlwSyWyKDyoDqHQDg2kOYjw9pt8qpDmbCij%2F2SGU%2FrgLNi02vXqKSKUxjXUX03ugPn1te0b2nXEwCVr8BtLoBZxYJDRVP8uWpJH7b9BFmR4oCNyQT5Cvu5tnDaH7YXSxrdnJ9OXbOgqMMfiw4OBgqNm851aQKVO8436Ggv%2BMMTJ474GOqUB7jrALKVFBOjlnnDyTflNVbfJ6qiKCEO9GJZ65Ty7JmYBSrdUR8eLiMTCguBXlc3V9WG32CnrLkcQXZpQSVtE5PGrP47658yivTW9G1h%2BvJn%2BU%2BvQnmai2AHvxIfs0FADM4cKZwfAoi%2BIkoyjifcqzqdzEk%2FXxeasoGJwWqoXGWhSB5G8MuiPnrJ3V0Dm0CBmDtCuFzj3C6yX6veC8FI%2BSWHwehWc&X-Amz-Signature=bfb376e05c49167a6021d719b5e82ff63c7c343e4e2ca1a6cc58ebbaf8d0aad2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
