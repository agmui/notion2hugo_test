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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMI6KGM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbVuqdavaa7kWTJBAbcveaTT0vG7wpd9ieEseR1hFSBAiBWJKtDkklVtFkhC4S4s45hNr%2F4PdKmBVzwrDztNxQKKSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKZn2Ya8ZcYkCP2DKtwDafs8MqAyGOxe62MHDcedFpKh5qWTUVQGJCgAjv%2BW712VgfmDDcy6xEd1oU5p1lPVpWHKR94a6Gv6Ja4JJryM3dgiZtLqJsHruQnFFjNjQXR5fQrIZdViqUOcrwOOPEEMgcg3dNu2rFcJM5VnsX3gWLDMCmtLy8y%2BW83veiQz5zDn%2BKsgt4sL1rKIh9d2Gw8cXXPgljVurTlRxz3QX6hDk56pOdFR71lFoX08W%2FcD9qi5yh7ixdcYGIeRyVT0Qc0wvV4pzrQv29kYa%2BBsB80WCYk74NAA8fKPFZHZKVLI6zf%2FbCcuzdSPh8K2Hn2HgcCr2GZ%2FTR6UzXUdvVRKBvfMMFPnvS4dcxwowN4HwdztN1Q48m4ZhZLLJ2mezwG7GsrVMy5Y3oYkfssGy29msHpqffwMwYnTdIjroFnwMgJyyoCVM4eTdp0wIAlidcnx7MXbMi9f04LD3JFiDsOGmz7qeC1VYmp2VwLsx0ygTpN%2B1MlepxvOV%2Fi7oTIFlCg9s2uABS%2FQqa1tDd7js0EaoAXIDQ8A0eRikvkdkJOKiP2ZH6M4Z7uJBeDJtG5PQ3vEbwRYq9nWkhpFnDX3PsUlgSmYZHRCpWA5jgx8zTaEAYTfTP%2Fuzb%2B2vbEYXh3gWHYwkvXgxAY6pgH99sH0ol814mq95MVnBbPYsLOzE3UUBRHSJ9J7%2FkJWvdjl4pYineDbQeihwmueRsK7M2YCge1uw66%2FiIHXs27iCDsTgH1sAKz%2F4siRctrLEhetfbxugMqa82ueiR%2BMVVqv6%2Be2ObhKn8W%2BphkP1IXSYDWmk8mY0cjUpWdPEtkfP747vfGNuGOmJN8mP2CaZ3n6TlAG5YEpZ2L4646hQXlV9kixuB4I&X-Amz-Signature=22c41839afc4cd59d4fee101f8e220e87e65a39bb289798b005ea79f88280a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMI6KGM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbVuqdavaa7kWTJBAbcveaTT0vG7wpd9ieEseR1hFSBAiBWJKtDkklVtFkhC4S4s45hNr%2F4PdKmBVzwrDztNxQKKSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKZn2Ya8ZcYkCP2DKtwDafs8MqAyGOxe62MHDcedFpKh5qWTUVQGJCgAjv%2BW712VgfmDDcy6xEd1oU5p1lPVpWHKR94a6Gv6Ja4JJryM3dgiZtLqJsHruQnFFjNjQXR5fQrIZdViqUOcrwOOPEEMgcg3dNu2rFcJM5VnsX3gWLDMCmtLy8y%2BW83veiQz5zDn%2BKsgt4sL1rKIh9d2Gw8cXXPgljVurTlRxz3QX6hDk56pOdFR71lFoX08W%2FcD9qi5yh7ixdcYGIeRyVT0Qc0wvV4pzrQv29kYa%2BBsB80WCYk74NAA8fKPFZHZKVLI6zf%2FbCcuzdSPh8K2Hn2HgcCr2GZ%2FTR6UzXUdvVRKBvfMMFPnvS4dcxwowN4HwdztN1Q48m4ZhZLLJ2mezwG7GsrVMy5Y3oYkfssGy29msHpqffwMwYnTdIjroFnwMgJyyoCVM4eTdp0wIAlidcnx7MXbMi9f04LD3JFiDsOGmz7qeC1VYmp2VwLsx0ygTpN%2B1MlepxvOV%2Fi7oTIFlCg9s2uABS%2FQqa1tDd7js0EaoAXIDQ8A0eRikvkdkJOKiP2ZH6M4Z7uJBeDJtG5PQ3vEbwRYq9nWkhpFnDX3PsUlgSmYZHRCpWA5jgx8zTaEAYTfTP%2Fuzb%2B2vbEYXh3gWHYwkvXgxAY6pgH99sH0ol814mq95MVnBbPYsLOzE3UUBRHSJ9J7%2FkJWvdjl4pYineDbQeihwmueRsK7M2YCge1uw66%2FiIHXs27iCDsTgH1sAKz%2F4siRctrLEhetfbxugMqa82ueiR%2BMVVqv6%2Be2ObhKn8W%2BphkP1IXSYDWmk8mY0cjUpWdPEtkfP747vfGNuGOmJN8mP2CaZ3n6TlAG5YEpZ2L4646hQXlV9kixuB4I&X-Amz-Signature=25958efef6bf97fbd0b1990d3bf39caaf97fcf1428ccfeb31d2a2e2c0de345fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHMI6KGM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbVuqdavaa7kWTJBAbcveaTT0vG7wpd9ieEseR1hFSBAiBWJKtDkklVtFkhC4S4s45hNr%2F4PdKmBVzwrDztNxQKKSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKZn2Ya8ZcYkCP2DKtwDafs8MqAyGOxe62MHDcedFpKh5qWTUVQGJCgAjv%2BW712VgfmDDcy6xEd1oU5p1lPVpWHKR94a6Gv6Ja4JJryM3dgiZtLqJsHruQnFFjNjQXR5fQrIZdViqUOcrwOOPEEMgcg3dNu2rFcJM5VnsX3gWLDMCmtLy8y%2BW83veiQz5zDn%2BKsgt4sL1rKIh9d2Gw8cXXPgljVurTlRxz3QX6hDk56pOdFR71lFoX08W%2FcD9qi5yh7ixdcYGIeRyVT0Qc0wvV4pzrQv29kYa%2BBsB80WCYk74NAA8fKPFZHZKVLI6zf%2FbCcuzdSPh8K2Hn2HgcCr2GZ%2FTR6UzXUdvVRKBvfMMFPnvS4dcxwowN4HwdztN1Q48m4ZhZLLJ2mezwG7GsrVMy5Y3oYkfssGy29msHpqffwMwYnTdIjroFnwMgJyyoCVM4eTdp0wIAlidcnx7MXbMi9f04LD3JFiDsOGmz7qeC1VYmp2VwLsx0ygTpN%2B1MlepxvOV%2Fi7oTIFlCg9s2uABS%2FQqa1tDd7js0EaoAXIDQ8A0eRikvkdkJOKiP2ZH6M4Z7uJBeDJtG5PQ3vEbwRYq9nWkhpFnDX3PsUlgSmYZHRCpWA5jgx8zTaEAYTfTP%2Fuzb%2B2vbEYXh3gWHYwkvXgxAY6pgH99sH0ol814mq95MVnBbPYsLOzE3UUBRHSJ9J7%2FkJWvdjl4pYineDbQeihwmueRsK7M2YCge1uw66%2FiIHXs27iCDsTgH1sAKz%2F4siRctrLEhetfbxugMqa82ueiR%2BMVVqv6%2Be2ObhKn8W%2BphkP1IXSYDWmk8mY0cjUpWdPEtkfP747vfGNuGOmJN8mP2CaZ3n6TlAG5YEpZ2L4646hQXlV9kixuB4I&X-Amz-Signature=ed96696499a3e09b79ac1d4a4dc337457df1df6e09cd27f588bd5f89f962199f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
