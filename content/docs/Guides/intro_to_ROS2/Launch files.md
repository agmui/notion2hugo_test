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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYB422H%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFI0Ml5RjAjKUll9V%2FJ9U6664MPp92i3e3EM6YgpFbygIhAJdUicujObQFre6mjrwQ733aA93Y97J2GHmbBNIz%2Fa%2BeKv8DCDcQABoMNjM3NDIzMTgzODA1IgzoEo19seZFkXUWnbQq3ANn5azBvD2fQEjbmcCVeGH4%2B4OXcWFKuFBKP1QrQFW5lU6%2Fdg5QfSLiTscoziHrFKy0uAI53XOzjdOEveQCRPt2lyihg36uYkXS7B%2B2EoJAeoXbG85mJq4ONwOca1QI9903Iy5aQJBsJJzgcXytGzpQJQrXFdZ%2BGonu1PyfIfT5j7QdoKjV%2FBlvJwXtSCaa15QMGzezfHgpG6hLQnPKapqvvB3BZ0x2GyzFNeJz%2BfyU8jxCJvFrtEX4uNfB5y2Dxee1sBkG%2FaQTcOP%2FrRtCLEKS4oEQ6MIR%2FD0dvrTAmDdxxxUJAMX%2FlTJh8jzKqQu6dJK3L4aiRF1EIlWpOtTTSXIBGGOplWZNQWT2I9uQeMLUmomPIMNAL2uD1CS4LZugaxycLq5WxJnkG3BDzzkeRzL5a2hr9VwJg7s0uz0W%2BwIZSr9TdiOo1AQXmanA8cyLgP4w8ey8C8s3qPkZsYA9BS6Ul%2BmzzKetWU%2BbpVK3Gd2RWQ3qbe%2Bu16%2BIiPiz%2B8te2pTu2LhjInRoNvty%2FU60QEWxBiLIDVtCmehC3EcHr7Fv%2Bj412wCqdhn%2BDksfLDR72m1QoMkTFoB0vEMEd3V7JLDdB2Ox1QfTAuV9jvU4%2Baif9CQZZ56yMXeCIqyhdjCLh7DABjqkAUcQae21ljXWmRmZZByqA%2Ft6GLfP9k7Cx%2Bys33Dv9K%2F33olk34F4%2BaJ%2BsYuAW%2BWAeI1HlRdqxSdS8%2BxutjdqNTQdiS145N8CCLmT4AvbcHZI4yv0QVUvqW1CK%2BnFH5wJkLCB3oPICAyz%2FaZ1siXDLc3dY9LfwbdbNe%2FglFMVhOYAG%2BN%2FlDhz%2Fr3Q%2Fu7e18lPT0WaghXcpszFIcIvbzI5VRA7PfCd&X-Amz-Signature=a618583e25ac83915532c89d1089186fc32f9e9ae711815632b7be6d6d750209&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYB422H%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFI0Ml5RjAjKUll9V%2FJ9U6664MPp92i3e3EM6YgpFbygIhAJdUicujObQFre6mjrwQ733aA93Y97J2GHmbBNIz%2Fa%2BeKv8DCDcQABoMNjM3NDIzMTgzODA1IgzoEo19seZFkXUWnbQq3ANn5azBvD2fQEjbmcCVeGH4%2B4OXcWFKuFBKP1QrQFW5lU6%2Fdg5QfSLiTscoziHrFKy0uAI53XOzjdOEveQCRPt2lyihg36uYkXS7B%2B2EoJAeoXbG85mJq4ONwOca1QI9903Iy5aQJBsJJzgcXytGzpQJQrXFdZ%2BGonu1PyfIfT5j7QdoKjV%2FBlvJwXtSCaa15QMGzezfHgpG6hLQnPKapqvvB3BZ0x2GyzFNeJz%2BfyU8jxCJvFrtEX4uNfB5y2Dxee1sBkG%2FaQTcOP%2FrRtCLEKS4oEQ6MIR%2FD0dvrTAmDdxxxUJAMX%2FlTJh8jzKqQu6dJK3L4aiRF1EIlWpOtTTSXIBGGOplWZNQWT2I9uQeMLUmomPIMNAL2uD1CS4LZugaxycLq5WxJnkG3BDzzkeRzL5a2hr9VwJg7s0uz0W%2BwIZSr9TdiOo1AQXmanA8cyLgP4w8ey8C8s3qPkZsYA9BS6Ul%2BmzzKetWU%2BbpVK3Gd2RWQ3qbe%2Bu16%2BIiPiz%2B8te2pTu2LhjInRoNvty%2FU60QEWxBiLIDVtCmehC3EcHr7Fv%2Bj412wCqdhn%2BDksfLDR72m1QoMkTFoB0vEMEd3V7JLDdB2Ox1QfTAuV9jvU4%2Baif9CQZZ56yMXeCIqyhdjCLh7DABjqkAUcQae21ljXWmRmZZByqA%2Ft6GLfP9k7Cx%2Bys33Dv9K%2F33olk34F4%2BaJ%2BsYuAW%2BWAeI1HlRdqxSdS8%2BxutjdqNTQdiS145N8CCLmT4AvbcHZI4yv0QVUvqW1CK%2BnFH5wJkLCB3oPICAyz%2FaZ1siXDLc3dY9LfwbdbNe%2FglFMVhOYAG%2BN%2FlDhz%2Fr3Q%2Fu7e18lPT0WaghXcpszFIcIvbzI5VRA7PfCd&X-Amz-Signature=2c9fa9b0c85b24f6bc91cde8a859110e392c980e07980b97f93d90cc70a0cb16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEYB422H%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFI0Ml5RjAjKUll9V%2FJ9U6664MPp92i3e3EM6YgpFbygIhAJdUicujObQFre6mjrwQ733aA93Y97J2GHmbBNIz%2Fa%2BeKv8DCDcQABoMNjM3NDIzMTgzODA1IgzoEo19seZFkXUWnbQq3ANn5azBvD2fQEjbmcCVeGH4%2B4OXcWFKuFBKP1QrQFW5lU6%2Fdg5QfSLiTscoziHrFKy0uAI53XOzjdOEveQCRPt2lyihg36uYkXS7B%2B2EoJAeoXbG85mJq4ONwOca1QI9903Iy5aQJBsJJzgcXytGzpQJQrXFdZ%2BGonu1PyfIfT5j7QdoKjV%2FBlvJwXtSCaa15QMGzezfHgpG6hLQnPKapqvvB3BZ0x2GyzFNeJz%2BfyU8jxCJvFrtEX4uNfB5y2Dxee1sBkG%2FaQTcOP%2FrRtCLEKS4oEQ6MIR%2FD0dvrTAmDdxxxUJAMX%2FlTJh8jzKqQu6dJK3L4aiRF1EIlWpOtTTSXIBGGOplWZNQWT2I9uQeMLUmomPIMNAL2uD1CS4LZugaxycLq5WxJnkG3BDzzkeRzL5a2hr9VwJg7s0uz0W%2BwIZSr9TdiOo1AQXmanA8cyLgP4w8ey8C8s3qPkZsYA9BS6Ul%2BmzzKetWU%2BbpVK3Gd2RWQ3qbe%2Bu16%2BIiPiz%2B8te2pTu2LhjInRoNvty%2FU60QEWxBiLIDVtCmehC3EcHr7Fv%2Bj412wCqdhn%2BDksfLDR72m1QoMkTFoB0vEMEd3V7JLDdB2Ox1QfTAuV9jvU4%2Baif9CQZZ56yMXeCIqyhdjCLh7DABjqkAUcQae21ljXWmRmZZByqA%2Ft6GLfP9k7Cx%2Bys33Dv9K%2F33olk34F4%2BaJ%2BsYuAW%2BWAeI1HlRdqxSdS8%2BxutjdqNTQdiS145N8CCLmT4AvbcHZI4yv0QVUvqW1CK%2BnFH5wJkLCB3oPICAyz%2FaZ1siXDLc3dY9LfwbdbNe%2FglFMVhOYAG%2BN%2FlDhz%2Fr3Q%2Fu7e18lPT0WaghXcpszFIcIvbzI5VRA7PfCd&X-Amz-Signature=81e3d6ed1205086e82bb63c41b7fde0baec320cb846b24769c32e371503aac28&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
