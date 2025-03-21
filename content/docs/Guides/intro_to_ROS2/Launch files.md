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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALUCFJK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIF7BJUHtskQHyLR1o7oIhUpI0zJQ4wmm28H%2B7FGNbybGAiAhg0qv4jvoD0STtX5AaJiLaWrDMg4EOQe%2BI2FxylFa7CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5tS2YElESm8oLzTnKtwD4dPt8wvwq2jWnXUd8h7%2Fmx2vuNTbHexR5VUGcT7parUOrxLCAQ%2FAY8e1eWfxdxslkakPAjqK1JlXqkaSHkPowZ2FtcUS8c2U2DUGRBOz1jESgOEqZjGOmT4s3XF5sUYm0erH%2BevPszW92%2FzB7QtOmfHO9Es4QHUcfrkgwY%2FmlueLM0fXnoAyt%2BEYlbxFc7TaDhodKwYm9UBYInDoliA5MYcbayO8S6d3i6LgYuQhQoBCKHSCPC0FjsFTxrSmPAimp6gEnzvwn63ZVDpGKBP424lIGXrgjFdz5XQNTW2xsfvF93fMei%2BLiDWBJ7Y89K9Bvuc0pLhB%2BtFlC2FzsksTlb0gYHr2cLGEEXZCkTHTv%2BtQbaFnfh3G%2BNXaf74c96H1HmKBbCC4q2x6CIdQLmAgrzieYrh%2Bx455m2ucaFg15O4HXIhly6i2NIwbPlrAHwaUnXBOk1oSevuREAdknrN6qZrMBMPTJFonwVQjPqdLgfwjz23BoAu8ttoTquZnb%2FP3iwzBpmY7%2Bvm2GGHAPHnqIvZFnH6kS5G7%2FDyLgKyY9UduQPci0pkI%2Bjf9HvZ07%2BhjcbPcY22DrmUAOM7YeNdrDEkHtOm7EcHfOQ7%2F2hc%2BJrcP92VZn8R1oL2dxDswlNjzvgY6pgHwAnWfmhSMXm6S2qRl1OlIfcc3gd7LBkB8xey6xVUY1lu4K3F%2Bwo3qcR4upxXJmLB8DGXAUDnEcV%2FRfGulN3%2BpNK3ef0ZBdjBXGZyBk0i7K5F2QyY24GIjsSYzHHN2JwF9uW37%2BLFEPE1Gm97%2BjrEcEYvrvODvLa83Kwd%2F%2BbvUIrKZRHF8SFnfjldrLy1SZcH4ESzvKvTlhIHpwf9VxauahQFsGz%2Fp&X-Amz-Signature=8c672e866364795f08de469880a226b1f5406666ec39adb457bf456b257613fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALUCFJK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIF7BJUHtskQHyLR1o7oIhUpI0zJQ4wmm28H%2B7FGNbybGAiAhg0qv4jvoD0STtX5AaJiLaWrDMg4EOQe%2BI2FxylFa7CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5tS2YElESm8oLzTnKtwD4dPt8wvwq2jWnXUd8h7%2Fmx2vuNTbHexR5VUGcT7parUOrxLCAQ%2FAY8e1eWfxdxslkakPAjqK1JlXqkaSHkPowZ2FtcUS8c2U2DUGRBOz1jESgOEqZjGOmT4s3XF5sUYm0erH%2BevPszW92%2FzB7QtOmfHO9Es4QHUcfrkgwY%2FmlueLM0fXnoAyt%2BEYlbxFc7TaDhodKwYm9UBYInDoliA5MYcbayO8S6d3i6LgYuQhQoBCKHSCPC0FjsFTxrSmPAimp6gEnzvwn63ZVDpGKBP424lIGXrgjFdz5XQNTW2xsfvF93fMei%2BLiDWBJ7Y89K9Bvuc0pLhB%2BtFlC2FzsksTlb0gYHr2cLGEEXZCkTHTv%2BtQbaFnfh3G%2BNXaf74c96H1HmKBbCC4q2x6CIdQLmAgrzieYrh%2Bx455m2ucaFg15O4HXIhly6i2NIwbPlrAHwaUnXBOk1oSevuREAdknrN6qZrMBMPTJFonwVQjPqdLgfwjz23BoAu8ttoTquZnb%2FP3iwzBpmY7%2Bvm2GGHAPHnqIvZFnH6kS5G7%2FDyLgKyY9UduQPci0pkI%2Bjf9HvZ07%2BhjcbPcY22DrmUAOM7YeNdrDEkHtOm7EcHfOQ7%2F2hc%2BJrcP92VZn8R1oL2dxDswlNjzvgY6pgHwAnWfmhSMXm6S2qRl1OlIfcc3gd7LBkB8xey6xVUY1lu4K3F%2Bwo3qcR4upxXJmLB8DGXAUDnEcV%2FRfGulN3%2BpNK3ef0ZBdjBXGZyBk0i7K5F2QyY24GIjsSYzHHN2JwF9uW37%2BLFEPE1Gm97%2BjrEcEYvrvODvLa83Kwd%2F%2BbvUIrKZRHF8SFnfjldrLy1SZcH4ESzvKvTlhIHpwf9VxauahQFsGz%2Fp&X-Amz-Signature=02baebabfd1ebc206333d1cf9fe0e94720197a63c28be2106631ebffa2f1d2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QALUCFJK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIF7BJUHtskQHyLR1o7oIhUpI0zJQ4wmm28H%2B7FGNbybGAiAhg0qv4jvoD0STtX5AaJiLaWrDMg4EOQe%2BI2FxylFa7CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5tS2YElESm8oLzTnKtwD4dPt8wvwq2jWnXUd8h7%2Fmx2vuNTbHexR5VUGcT7parUOrxLCAQ%2FAY8e1eWfxdxslkakPAjqK1JlXqkaSHkPowZ2FtcUS8c2U2DUGRBOz1jESgOEqZjGOmT4s3XF5sUYm0erH%2BevPszW92%2FzB7QtOmfHO9Es4QHUcfrkgwY%2FmlueLM0fXnoAyt%2BEYlbxFc7TaDhodKwYm9UBYInDoliA5MYcbayO8S6d3i6LgYuQhQoBCKHSCPC0FjsFTxrSmPAimp6gEnzvwn63ZVDpGKBP424lIGXrgjFdz5XQNTW2xsfvF93fMei%2BLiDWBJ7Y89K9Bvuc0pLhB%2BtFlC2FzsksTlb0gYHr2cLGEEXZCkTHTv%2BtQbaFnfh3G%2BNXaf74c96H1HmKBbCC4q2x6CIdQLmAgrzieYrh%2Bx455m2ucaFg15O4HXIhly6i2NIwbPlrAHwaUnXBOk1oSevuREAdknrN6qZrMBMPTJFonwVQjPqdLgfwjz23BoAu8ttoTquZnb%2FP3iwzBpmY7%2Bvm2GGHAPHnqIvZFnH6kS5G7%2FDyLgKyY9UduQPci0pkI%2Bjf9HvZ07%2BhjcbPcY22DrmUAOM7YeNdrDEkHtOm7EcHfOQ7%2F2hc%2BJrcP92VZn8R1oL2dxDswlNjzvgY6pgHwAnWfmhSMXm6S2qRl1OlIfcc3gd7LBkB8xey6xVUY1lu4K3F%2Bwo3qcR4upxXJmLB8DGXAUDnEcV%2FRfGulN3%2BpNK3ef0ZBdjBXGZyBk0i7K5F2QyY24GIjsSYzHHN2JwF9uW37%2BLFEPE1Gm97%2BjrEcEYvrvODvLa83Kwd%2F%2BbvUIrKZRHF8SFnfjldrLy1SZcH4ESzvKvTlhIHpwf9VxauahQFsGz%2Fp&X-Amz-Signature=c7055b00a3a76338367199274c575550673cd26efd784aaaa1e494a401ecb60d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
