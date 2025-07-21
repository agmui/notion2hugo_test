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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2SCFKR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy4qhHrzNFhyKP6qho%2FC%2Fvz%2BSXPWlmbNZZysQ2oR9jZQIgQlBrfNu1a7ofczU5gJVHwnOa%2BFasBqrDHkqpDeS32jIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAxXVi0o2kKNpTctCrcA317VxAjUMZpcCRFjH%2BVUOmtB2JsisLEvzPucmxbaAPNHWuiZoHPvhhEttQB%2BWfWBEQ1YcS%2BuRMtf6E0xTLkgfWwT3%2FZRX%2Ftml64hOdyAeBSeVyaAbhB%2FcQh7FtKABP%2FwE57OBoN8xpo%2BrmHq097tRrq1L%2BuUJuSvaRNUOceAUa2y7Z96wA1F7SaSrpL9ZANeO0X7a%2Bb5KBx5ZVRPDDDsSeKF0sGp%2BKOBeybEAX8Q6S7DxHUCGnU7yx5HPdjObdVhfcdM1Fp9QbhMIVFKpf4jHQoxv%2F7ie%2BtzlPXJXkvODQwPImVtg4MTx0UdN2q7DZSlqd%2BCvP2FJEkMv48E0xNc3ExZG%2BND31zikGGQwXfzdOb3ORmzi3ywIOtlXdN7FsvI0yy9HnWVFd0%2FAH7I5E2JF8hCns%2FySGI6R9JT4fMeFwuwpmDZt%2BZ7TeIZ0n2Ma7nsBefNF3my%2FAbhNo9Rrouy3OSziRktLvry0gMS59Z7vD6b%2B%2FW6WTsjHkKVpDtm42mZNG2oLdhEeLWflHb%2B7UaZ8lWAJXHas6Y%2Bkk7apwlxc%2F2Y9AXbB8Sp46u1WzZBsp8Y5CAtg9lxgg2GfWsEXiB5reSwDYWMFTLXzg3ATE3iIW24m8UsvtbDQr3K4HeMMGT98MGOqUBGB7SjQoJlj1%2Fx0LnImTlL51b3isZIqg9CUJsRHM8LkVffJmQS8cU59R2X3xuFqOtt8cejDnHgEDPinbe8dJqQ1sIxHaXQTbm32VAxp0Qm03O2%2FyZzWxJ26hQz0aiYD85eBottb9L7KLbJNbHtWIhX88ahCesDem1aFICqo56jvDyjA65mxMiIXGI5vd3VUhvu9mOrAK2jNKZ3k%2BZK3Jt5n2jAxCr&X-Amz-Signature=a5c14307fd08fab385a329cb30748ea3fe3032aed3fadb671e6ef5bf8ec89cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2SCFKR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy4qhHrzNFhyKP6qho%2FC%2Fvz%2BSXPWlmbNZZysQ2oR9jZQIgQlBrfNu1a7ofczU5gJVHwnOa%2BFasBqrDHkqpDeS32jIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAxXVi0o2kKNpTctCrcA317VxAjUMZpcCRFjH%2BVUOmtB2JsisLEvzPucmxbaAPNHWuiZoHPvhhEttQB%2BWfWBEQ1YcS%2BuRMtf6E0xTLkgfWwT3%2FZRX%2Ftml64hOdyAeBSeVyaAbhB%2FcQh7FtKABP%2FwE57OBoN8xpo%2BrmHq097tRrq1L%2BuUJuSvaRNUOceAUa2y7Z96wA1F7SaSrpL9ZANeO0X7a%2Bb5KBx5ZVRPDDDsSeKF0sGp%2BKOBeybEAX8Q6S7DxHUCGnU7yx5HPdjObdVhfcdM1Fp9QbhMIVFKpf4jHQoxv%2F7ie%2BtzlPXJXkvODQwPImVtg4MTx0UdN2q7DZSlqd%2BCvP2FJEkMv48E0xNc3ExZG%2BND31zikGGQwXfzdOb3ORmzi3ywIOtlXdN7FsvI0yy9HnWVFd0%2FAH7I5E2JF8hCns%2FySGI6R9JT4fMeFwuwpmDZt%2BZ7TeIZ0n2Ma7nsBefNF3my%2FAbhNo9Rrouy3OSziRktLvry0gMS59Z7vD6b%2B%2FW6WTsjHkKVpDtm42mZNG2oLdhEeLWflHb%2B7UaZ8lWAJXHas6Y%2Bkk7apwlxc%2F2Y9AXbB8Sp46u1WzZBsp8Y5CAtg9lxgg2GfWsEXiB5reSwDYWMFTLXzg3ATE3iIW24m8UsvtbDQr3K4HeMMGT98MGOqUBGB7SjQoJlj1%2Fx0LnImTlL51b3isZIqg9CUJsRHM8LkVffJmQS8cU59R2X3xuFqOtt8cejDnHgEDPinbe8dJqQ1sIxHaXQTbm32VAxp0Qm03O2%2FyZzWxJ26hQz0aiYD85eBottb9L7KLbJNbHtWIhX88ahCesDem1aFICqo56jvDyjA65mxMiIXGI5vd3VUhvu9mOrAK2jNKZ3k%2BZK3Jt5n2jAxCr&X-Amz-Signature=ec4be274c772cbabb0e718a81ea4c178837b1dd1ff649af90c034cce5150804d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2SCFKR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy4qhHrzNFhyKP6qho%2FC%2Fvz%2BSXPWlmbNZZysQ2oR9jZQIgQlBrfNu1a7ofczU5gJVHwnOa%2BFasBqrDHkqpDeS32jIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAxXVi0o2kKNpTctCrcA317VxAjUMZpcCRFjH%2BVUOmtB2JsisLEvzPucmxbaAPNHWuiZoHPvhhEttQB%2BWfWBEQ1YcS%2BuRMtf6E0xTLkgfWwT3%2FZRX%2Ftml64hOdyAeBSeVyaAbhB%2FcQh7FtKABP%2FwE57OBoN8xpo%2BrmHq097tRrq1L%2BuUJuSvaRNUOceAUa2y7Z96wA1F7SaSrpL9ZANeO0X7a%2Bb5KBx5ZVRPDDDsSeKF0sGp%2BKOBeybEAX8Q6S7DxHUCGnU7yx5HPdjObdVhfcdM1Fp9QbhMIVFKpf4jHQoxv%2F7ie%2BtzlPXJXkvODQwPImVtg4MTx0UdN2q7DZSlqd%2BCvP2FJEkMv48E0xNc3ExZG%2BND31zikGGQwXfzdOb3ORmzi3ywIOtlXdN7FsvI0yy9HnWVFd0%2FAH7I5E2JF8hCns%2FySGI6R9JT4fMeFwuwpmDZt%2BZ7TeIZ0n2Ma7nsBefNF3my%2FAbhNo9Rrouy3OSziRktLvry0gMS59Z7vD6b%2B%2FW6WTsjHkKVpDtm42mZNG2oLdhEeLWflHb%2B7UaZ8lWAJXHas6Y%2Bkk7apwlxc%2F2Y9AXbB8Sp46u1WzZBsp8Y5CAtg9lxgg2GfWsEXiB5reSwDYWMFTLXzg3ATE3iIW24m8UsvtbDQr3K4HeMMGT98MGOqUBGB7SjQoJlj1%2Fx0LnImTlL51b3isZIqg9CUJsRHM8LkVffJmQS8cU59R2X3xuFqOtt8cejDnHgEDPinbe8dJqQ1sIxHaXQTbm32VAxp0Qm03O2%2FyZzWxJ26hQz0aiYD85eBottb9L7KLbJNbHtWIhX88ahCesDem1aFICqo56jvDyjA65mxMiIXGI5vd3VUhvu9mOrAK2jNKZ3k%2BZK3Jt5n2jAxCr&X-Amz-Signature=55c49a78270b67700e0fb9088fb824c17ce80c872d141cc1e9acf7a60506b1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
