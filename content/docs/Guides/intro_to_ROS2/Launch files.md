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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ5NCSX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsYe7kawGbHzQE66AkEb5Tola0MQ7XlugbPvdpt%2BuENwIgRFfUvGbv0Zbv%2F%2BdJDzkZ4yqGi%2F8Fw42LBz3%2BoqHGS6cqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2c%2FdzOBRWMTeLK7ircA5%2BxvxVfroHsT7uQUM7gw1X5iwf62giOsRLpad0bJJPI2seo1cfzfs15QYQaNoqazgqS2mp4Zbm4bmGhpooudwrnHzereu4InLVohz2O5nZvmK3Jw1qU2nTFu%2Bsvi8uWHm70rlnkbcg2%2FGZoI3n2Mq7ytsBC2t%2BP21fGUkng4YJW5uK%2FtHTINGiwcx2AWjm%2Bueobjqv8%2BHPHY2DiyKE6fk8zuCA5QbKxk7xb81SFEKuXwloP%2F9WlZyDmIK5sHAXbCmGglb%2FEgJxUENKG05%2FcnYejfG8T7J4a%2BjX%2F3RME%2BfKHhlgSIvXH03THyc0Yt%2BuFE0Lj692eIvWXHXgGAs7FC9jk3OwvIQgGcE72dTcZQ5A88Tfk%2FCWZBYcWmvjpSKtUA4sMYdSdnxd07sfdf6JSV08OaIxpbT87r6HhcPfyEoqCGY1xuYSg82zey5DtATir9kUSubqAlwR1XTbqzqiw6R2IXF3vWRX4Cuv4XNDaLgWY0uJp%2BYHXVIQRPlf9mgpAZ83NzP%2BErQpzho3pbFY%2BwykDXE%2Bg3f%2BPlbkiGCXMSXVt34zGnq%2FqCpAhWW88lQTM7IkIGcBbUKQdi7F8ykqDTS9gH9NOYQLyZuj1CtjTUndmw6bPATzgWayzkRSWMIr9lb4GOqUBfBLqG%2BJQTJFExLiwoPwM3DpFIum%2B4zA12S2NiSL9lJbUSo13GUf%2FU%2FiNZ034B8K4MqjDJhjT5U%2Fx0J3KmdwUMsQgtjMPcs%2FHpnflhAWqtXKRKp2xEbAcMs5kJHLOhdZw3OYO5bYEix3gKVaxOaWGlY5a1lSlsatZMmFHBBlIfTQbE57bM75D%2FLiEfb0HH3acvkz93GM4iK6vy0v%2FgGIeffdKdueG&X-Amz-Signature=e615f32e6ca8bff484fab7fbf68f26a4207dd650c0c86db7a53377692286b875&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ5NCSX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsYe7kawGbHzQE66AkEb5Tola0MQ7XlugbPvdpt%2BuENwIgRFfUvGbv0Zbv%2F%2BdJDzkZ4yqGi%2F8Fw42LBz3%2BoqHGS6cqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2c%2FdzOBRWMTeLK7ircA5%2BxvxVfroHsT7uQUM7gw1X5iwf62giOsRLpad0bJJPI2seo1cfzfs15QYQaNoqazgqS2mp4Zbm4bmGhpooudwrnHzereu4InLVohz2O5nZvmK3Jw1qU2nTFu%2Bsvi8uWHm70rlnkbcg2%2FGZoI3n2Mq7ytsBC2t%2BP21fGUkng4YJW5uK%2FtHTINGiwcx2AWjm%2Bueobjqv8%2BHPHY2DiyKE6fk8zuCA5QbKxk7xb81SFEKuXwloP%2F9WlZyDmIK5sHAXbCmGglb%2FEgJxUENKG05%2FcnYejfG8T7J4a%2BjX%2F3RME%2BfKHhlgSIvXH03THyc0Yt%2BuFE0Lj692eIvWXHXgGAs7FC9jk3OwvIQgGcE72dTcZQ5A88Tfk%2FCWZBYcWmvjpSKtUA4sMYdSdnxd07sfdf6JSV08OaIxpbT87r6HhcPfyEoqCGY1xuYSg82zey5DtATir9kUSubqAlwR1XTbqzqiw6R2IXF3vWRX4Cuv4XNDaLgWY0uJp%2BYHXVIQRPlf9mgpAZ83NzP%2BErQpzho3pbFY%2BwykDXE%2Bg3f%2BPlbkiGCXMSXVt34zGnq%2FqCpAhWW88lQTM7IkIGcBbUKQdi7F8ykqDTS9gH9NOYQLyZuj1CtjTUndmw6bPATzgWayzkRSWMIr9lb4GOqUBfBLqG%2BJQTJFExLiwoPwM3DpFIum%2B4zA12S2NiSL9lJbUSo13GUf%2FU%2FiNZ034B8K4MqjDJhjT5U%2Fx0J3KmdwUMsQgtjMPcs%2FHpnflhAWqtXKRKp2xEbAcMs5kJHLOhdZw3OYO5bYEix3gKVaxOaWGlY5a1lSlsatZMmFHBBlIfTQbE57bM75D%2FLiEfb0HH3acvkz93GM4iK6vy0v%2FgGIeffdKdueG&X-Amz-Signature=644f506bcec993ec00ffb71a8eb0541dd4fb5278564de9834314e9933d8e391a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJ5NCSX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsYe7kawGbHzQE66AkEb5Tola0MQ7XlugbPvdpt%2BuENwIgRFfUvGbv0Zbv%2F%2BdJDzkZ4yqGi%2F8Fw42LBz3%2BoqHGS6cqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2c%2FdzOBRWMTeLK7ircA5%2BxvxVfroHsT7uQUM7gw1X5iwf62giOsRLpad0bJJPI2seo1cfzfs15QYQaNoqazgqS2mp4Zbm4bmGhpooudwrnHzereu4InLVohz2O5nZvmK3Jw1qU2nTFu%2Bsvi8uWHm70rlnkbcg2%2FGZoI3n2Mq7ytsBC2t%2BP21fGUkng4YJW5uK%2FtHTINGiwcx2AWjm%2Bueobjqv8%2BHPHY2DiyKE6fk8zuCA5QbKxk7xb81SFEKuXwloP%2F9WlZyDmIK5sHAXbCmGglb%2FEgJxUENKG05%2FcnYejfG8T7J4a%2BjX%2F3RME%2BfKHhlgSIvXH03THyc0Yt%2BuFE0Lj692eIvWXHXgGAs7FC9jk3OwvIQgGcE72dTcZQ5A88Tfk%2FCWZBYcWmvjpSKtUA4sMYdSdnxd07sfdf6JSV08OaIxpbT87r6HhcPfyEoqCGY1xuYSg82zey5DtATir9kUSubqAlwR1XTbqzqiw6R2IXF3vWRX4Cuv4XNDaLgWY0uJp%2BYHXVIQRPlf9mgpAZ83NzP%2BErQpzho3pbFY%2BwykDXE%2Bg3f%2BPlbkiGCXMSXVt34zGnq%2FqCpAhWW88lQTM7IkIGcBbUKQdi7F8ykqDTS9gH9NOYQLyZuj1CtjTUndmw6bPATzgWayzkRSWMIr9lb4GOqUBfBLqG%2BJQTJFExLiwoPwM3DpFIum%2B4zA12S2NiSL9lJbUSo13GUf%2FU%2FiNZ034B8K4MqjDJhjT5U%2Fx0J3KmdwUMsQgtjMPcs%2FHpnflhAWqtXKRKp2xEbAcMs5kJHLOhdZw3OYO5bYEix3gKVaxOaWGlY5a1lSlsatZMmFHBBlIfTQbE57bM75D%2FLiEfb0HH3acvkz93GM4iK6vy0v%2FgGIeffdKdueG&X-Amz-Signature=258ac652fbc2205bddae0da6d79ed2caf394dc0caaba54c06e42cafdb875b261&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
