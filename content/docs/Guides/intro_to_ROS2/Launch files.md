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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJA3T477%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAnmgqpdA1iBrXWQbRhjbpHDiExNGbIqxdDqp4cAcWGAiAlgxKAHBm965yz%2Fxh1%2FlzOjjs0EJu9K41jDWZjdOmlcyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMji0siq%2FPWlkawBJoKtwDma0Fum2jjXg4YkMJmKZ4P3DmnMpGkgqBaY8J4Yrpp0ddvjRZFpCHfxs2awZCf93YMKm1danhij%2BUkS9mSaKpbbuSOyLv3kBYL19ErxeFwUqBE4YQfLz%2FjB2HOxdTZ9VB4uiHHO3AmLww3P0I3BGbY50Mp5qEd6AsIwNAE6%2Bq%2Fwcm8M7FCjPe7dERTstkNrrpVpBIvQ%2FmcIiKA5ic1qRHyd7Uc6VNluAwXYgEuFZBh%2FUH1GkybRvzq4MOmgwuIarKn23L%2BPctx2diCUEKJjQcje1ZinzxTCVcEFtPouD9sVCU%2BeglFu8jcOQ%2BIugGrOmwdgxp%2BRt%2FoGOJalaPy8%2Ft1LtKzdIrQ6BMG07%2FEkFjUL8qmD7HfJbfFMx9EBidIm1u1kYG3U7jveSyTR3w7HqIMc17sRjAEBN7eMVkDYed%2BNN6u7KTLYSJq5%2BxB9sh4kiRgenVyueZQqRDul2%2FJAGrPX%2FzIlpbbsThdR65nV%2Bdq6BJE%2BcopBUcDg%2FlW11xLnfheGm5Jdgkh6rKfhMwH3mkf%2Bv1d%2BvQE73fBHS0F6zrYr1CRjoC%2FvUu3e9LE9gkTPg2ytrIC88GE%2B%2B8x9ziVz0lii1MVHCUufaeYqqsi6jjrlWnmQrE26DG7tyXOfswqa3gwQY6pgE52sDQtpsJTVf%2F83HvoShTvNvR05rfE9LXvBWaG6XclJCaeJFdaS%2FgoL9VncDV97ZV0Fo7yfdPSWWPoVLsARq5ZHmj4hGojs7wzhcDA1oYXEQP6jQdaT0U32FQd7Ji75jdhBt3IK7%2BiAgxQzjkr9%2FBerwPUu8uKhoJRltpki1IRRjgY%2F%2FceZgLv6o3q%2BqKSZsDbeo2KdaOSZ5YYxxRPYXYsMcUXIMA&X-Amz-Signature=632db8688ef1054abae04fe7a7d32c7ded299ffa88287d6e93ef8e2c4d16e2fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJA3T477%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAnmgqpdA1iBrXWQbRhjbpHDiExNGbIqxdDqp4cAcWGAiAlgxKAHBm965yz%2Fxh1%2FlzOjjs0EJu9K41jDWZjdOmlcyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMji0siq%2FPWlkawBJoKtwDma0Fum2jjXg4YkMJmKZ4P3DmnMpGkgqBaY8J4Yrpp0ddvjRZFpCHfxs2awZCf93YMKm1danhij%2BUkS9mSaKpbbuSOyLv3kBYL19ErxeFwUqBE4YQfLz%2FjB2HOxdTZ9VB4uiHHO3AmLww3P0I3BGbY50Mp5qEd6AsIwNAE6%2Bq%2Fwcm8M7FCjPe7dERTstkNrrpVpBIvQ%2FmcIiKA5ic1qRHyd7Uc6VNluAwXYgEuFZBh%2FUH1GkybRvzq4MOmgwuIarKn23L%2BPctx2diCUEKJjQcje1ZinzxTCVcEFtPouD9sVCU%2BeglFu8jcOQ%2BIugGrOmwdgxp%2BRt%2FoGOJalaPy8%2Ft1LtKzdIrQ6BMG07%2FEkFjUL8qmD7HfJbfFMx9EBidIm1u1kYG3U7jveSyTR3w7HqIMc17sRjAEBN7eMVkDYed%2BNN6u7KTLYSJq5%2BxB9sh4kiRgenVyueZQqRDul2%2FJAGrPX%2FzIlpbbsThdR65nV%2Bdq6BJE%2BcopBUcDg%2FlW11xLnfheGm5Jdgkh6rKfhMwH3mkf%2Bv1d%2BvQE73fBHS0F6zrYr1CRjoC%2FvUu3e9LE9gkTPg2ytrIC88GE%2B%2B8x9ziVz0lii1MVHCUufaeYqqsi6jjrlWnmQrE26DG7tyXOfswqa3gwQY6pgE52sDQtpsJTVf%2F83HvoShTvNvR05rfE9LXvBWaG6XclJCaeJFdaS%2FgoL9VncDV97ZV0Fo7yfdPSWWPoVLsARq5ZHmj4hGojs7wzhcDA1oYXEQP6jQdaT0U32FQd7Ji75jdhBt3IK7%2BiAgxQzjkr9%2FBerwPUu8uKhoJRltpki1IRRjgY%2F%2FceZgLv6o3q%2BqKSZsDbeo2KdaOSZ5YYxxRPYXYsMcUXIMA&X-Amz-Signature=3439ff19e3c471cf85e4eb91e030b4800b12c9d4690709c0d823477459507ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJA3T477%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAnmgqpdA1iBrXWQbRhjbpHDiExNGbIqxdDqp4cAcWGAiAlgxKAHBm965yz%2Fxh1%2FlzOjjs0EJu9K41jDWZjdOmlcyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMji0siq%2FPWlkawBJoKtwDma0Fum2jjXg4YkMJmKZ4P3DmnMpGkgqBaY8J4Yrpp0ddvjRZFpCHfxs2awZCf93YMKm1danhij%2BUkS9mSaKpbbuSOyLv3kBYL19ErxeFwUqBE4YQfLz%2FjB2HOxdTZ9VB4uiHHO3AmLww3P0I3BGbY50Mp5qEd6AsIwNAE6%2Bq%2Fwcm8M7FCjPe7dERTstkNrrpVpBIvQ%2FmcIiKA5ic1qRHyd7Uc6VNluAwXYgEuFZBh%2FUH1GkybRvzq4MOmgwuIarKn23L%2BPctx2diCUEKJjQcje1ZinzxTCVcEFtPouD9sVCU%2BeglFu8jcOQ%2BIugGrOmwdgxp%2BRt%2FoGOJalaPy8%2Ft1LtKzdIrQ6BMG07%2FEkFjUL8qmD7HfJbfFMx9EBidIm1u1kYG3U7jveSyTR3w7HqIMc17sRjAEBN7eMVkDYed%2BNN6u7KTLYSJq5%2BxB9sh4kiRgenVyueZQqRDul2%2FJAGrPX%2FzIlpbbsThdR65nV%2Bdq6BJE%2BcopBUcDg%2FlW11xLnfheGm5Jdgkh6rKfhMwH3mkf%2Bv1d%2BvQE73fBHS0F6zrYr1CRjoC%2FvUu3e9LE9gkTPg2ytrIC88GE%2B%2B8x9ziVz0lii1MVHCUufaeYqqsi6jjrlWnmQrE26DG7tyXOfswqa3gwQY6pgE52sDQtpsJTVf%2F83HvoShTvNvR05rfE9LXvBWaG6XclJCaeJFdaS%2FgoL9VncDV97ZV0Fo7yfdPSWWPoVLsARq5ZHmj4hGojs7wzhcDA1oYXEQP6jQdaT0U32FQd7Ji75jdhBt3IK7%2BiAgxQzjkr9%2FBerwPUu8uKhoJRltpki1IRRjgY%2F%2FceZgLv6o3q%2BqKSZsDbeo2KdaOSZ5YYxxRPYXYsMcUXIMA&X-Amz-Signature=ed60e9fa7af7ed3795ee3512a56176adcd3ecb194307c1af078aa0fcf0c29d86&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
