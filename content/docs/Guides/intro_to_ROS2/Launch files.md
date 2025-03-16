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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIR6DD3L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSJK%2BwreIyCquHV6l0sPUaApbYXHMnGLCkg6npts%2F8CQIhAIS2SLYkKZ4xUTFuD%2BBB4VpadlH%2BcEoCTo6tmd1ERgF7Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxofiJjVrmDWWiKMo8q3AONRm%2BLNURYvRMgpLBhWEFPs3jByiBtlkfoQuJ7tQi5LBqo4U2oE4WZZeGmdQJI%2F6miOClQeSB%2BPFtKmQygjmLhxgXqblYnSUG5liOKWiu88cJfHDJdQajLA%2BBFidaS%2BUsk8HG5K3MM37ElMjRfx%2FZopE%2BwOZXGTVi9Uz5HkpdSuckwDURN%2B6BZY0SJwwU89rduoF4Du%2F%2BO5liLJ5%2BRhEhjdhhXaudzmN9TyZTDcyx868%2B8OK%2FdUg0woko2cuKlA3s3ExHdIVNBDeyjwevUD1HTYumaQtm%2B1%2BNv46I1GrJBbfjuYz2kmzJI9UCNBMKS0Gkb4qLuRG2Gk0tMGX4qQ4Lcy2Qrf%2BOcw4n%2FIt8sVt5MIqatAUg%2BdiuDdXIwcHlqx6rqwRa8STVqbNTnM6xJ9AQb14yy1i6iClZt2ioNjsvrQ%2FDGQkaCe%2FlDzJ167VPRxaUkj2HbT%2BjGRYvX1tVctVdzzbC6nzCkfZ%2FgfTWvr1WOU0fOHBoFNztJjfKuWiBdOVrohgkcRFQDqg33TjG6t46pVQM6BcP6VvoWyG1uBpqu0FnJJFuf8axvYx2t6JGCGLKA6LHKzzHxpZVs2to%2FDXWmXnfFsSXBW7SI3KwgifKw%2B9bw8ukWWFtkBws0GDD929y%2BBjqkASk6Oq%2FqWPUVshrydIHC815PE1LniMuCAjrlBF7mpjHp9eaLsKFWSRd7OwfPrlCXiLMgf%2BLuzsyvdh40v3GPwOjXdO3ULZDPmXCA9OCdhq6xmfn7d3ep3ND4q32p%2F8o2iF6xEnpXKsovgghgt1MIVp%2BmoTxnugrO9OegIMjJkyC5LhApEbgoopNFU7nBLS5rSm1kV3sf13%2FEfVFzehioiXu8a0%2Fa&X-Amz-Signature=d0b9fa6e0ec5fcfe9a6fa45ab33530f64848e41e77a66512269f4634cf67c86f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIR6DD3L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSJK%2BwreIyCquHV6l0sPUaApbYXHMnGLCkg6npts%2F8CQIhAIS2SLYkKZ4xUTFuD%2BBB4VpadlH%2BcEoCTo6tmd1ERgF7Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxofiJjVrmDWWiKMo8q3AONRm%2BLNURYvRMgpLBhWEFPs3jByiBtlkfoQuJ7tQi5LBqo4U2oE4WZZeGmdQJI%2F6miOClQeSB%2BPFtKmQygjmLhxgXqblYnSUG5liOKWiu88cJfHDJdQajLA%2BBFidaS%2BUsk8HG5K3MM37ElMjRfx%2FZopE%2BwOZXGTVi9Uz5HkpdSuckwDURN%2B6BZY0SJwwU89rduoF4Du%2F%2BO5liLJ5%2BRhEhjdhhXaudzmN9TyZTDcyx868%2B8OK%2FdUg0woko2cuKlA3s3ExHdIVNBDeyjwevUD1HTYumaQtm%2B1%2BNv46I1GrJBbfjuYz2kmzJI9UCNBMKS0Gkb4qLuRG2Gk0tMGX4qQ4Lcy2Qrf%2BOcw4n%2FIt8sVt5MIqatAUg%2BdiuDdXIwcHlqx6rqwRa8STVqbNTnM6xJ9AQb14yy1i6iClZt2ioNjsvrQ%2FDGQkaCe%2FlDzJ167VPRxaUkj2HbT%2BjGRYvX1tVctVdzzbC6nzCkfZ%2FgfTWvr1WOU0fOHBoFNztJjfKuWiBdOVrohgkcRFQDqg33TjG6t46pVQM6BcP6VvoWyG1uBpqu0FnJJFuf8axvYx2t6JGCGLKA6LHKzzHxpZVs2to%2FDXWmXnfFsSXBW7SI3KwgifKw%2B9bw8ukWWFtkBws0GDD929y%2BBjqkASk6Oq%2FqWPUVshrydIHC815PE1LniMuCAjrlBF7mpjHp9eaLsKFWSRd7OwfPrlCXiLMgf%2BLuzsyvdh40v3GPwOjXdO3ULZDPmXCA9OCdhq6xmfn7d3ep3ND4q32p%2F8o2iF6xEnpXKsovgghgt1MIVp%2BmoTxnugrO9OegIMjJkyC5LhApEbgoopNFU7nBLS5rSm1kV3sf13%2FEfVFzehioiXu8a0%2Fa&X-Amz-Signature=c8305f3d3d3ff43a3de6ab4b06e40221fc280da1da9ea3845a952b3d0bdd9218&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIR6DD3L%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T210223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSJK%2BwreIyCquHV6l0sPUaApbYXHMnGLCkg6npts%2F8CQIhAIS2SLYkKZ4xUTFuD%2BBB4VpadlH%2BcEoCTo6tmd1ERgF7Kv8DCDUQABoMNjM3NDIzMTgzODA1IgxofiJjVrmDWWiKMo8q3AONRm%2BLNURYvRMgpLBhWEFPs3jByiBtlkfoQuJ7tQi5LBqo4U2oE4WZZeGmdQJI%2F6miOClQeSB%2BPFtKmQygjmLhxgXqblYnSUG5liOKWiu88cJfHDJdQajLA%2BBFidaS%2BUsk8HG5K3MM37ElMjRfx%2FZopE%2BwOZXGTVi9Uz5HkpdSuckwDURN%2B6BZY0SJwwU89rduoF4Du%2F%2BO5liLJ5%2BRhEhjdhhXaudzmN9TyZTDcyx868%2B8OK%2FdUg0woko2cuKlA3s3ExHdIVNBDeyjwevUD1HTYumaQtm%2B1%2BNv46I1GrJBbfjuYz2kmzJI9UCNBMKS0Gkb4qLuRG2Gk0tMGX4qQ4Lcy2Qrf%2BOcw4n%2FIt8sVt5MIqatAUg%2BdiuDdXIwcHlqx6rqwRa8STVqbNTnM6xJ9AQb14yy1i6iClZt2ioNjsvrQ%2FDGQkaCe%2FlDzJ167VPRxaUkj2HbT%2BjGRYvX1tVctVdzzbC6nzCkfZ%2FgfTWvr1WOU0fOHBoFNztJjfKuWiBdOVrohgkcRFQDqg33TjG6t46pVQM6BcP6VvoWyG1uBpqu0FnJJFuf8axvYx2t6JGCGLKA6LHKzzHxpZVs2to%2FDXWmXnfFsSXBW7SI3KwgifKw%2B9bw8ukWWFtkBws0GDD929y%2BBjqkASk6Oq%2FqWPUVshrydIHC815PE1LniMuCAjrlBF7mpjHp9eaLsKFWSRd7OwfPrlCXiLMgf%2BLuzsyvdh40v3GPwOjXdO3ULZDPmXCA9OCdhq6xmfn7d3ep3ND4q32p%2F8o2iF6xEnpXKsovgghgt1MIVp%2BmoTxnugrO9OegIMjJkyC5LhApEbgoopNFU7nBLS5rSm1kV3sf13%2FEfVFzehioiXu8a0%2Fa&X-Amz-Signature=2a64e999f09fbb1698b0d60d6ec37639b86eca98912c5486eae045629c81552d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
