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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54OHVQ6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDIsDyp3rewr%2BVCcuhyXDYzpMDivf4tgXjqZrrl8r%2FQ2wIhAMC2WoP1W%2FJLDSMWJPNl31YGk7nlkeA3ObO7xGuK8c4FKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Xv%2BHUlF7XHxDDT8q3AMEVTlj1hRrheNS2JxaTEWY1JKC3ed2N1vWMqzTzho0cqkZm%2BYTDSw1kfW5mf%2FibAQM1%2BP28iS7V3FzXKCG4YumKEFRRM%2BBDsi36MYZxvI9Jpth2JyTFkd67KcaM81geKnBP48KIv7ywoPWn36WkgrUfbGMc8yIo1KixNRja3tDmhgIxAzUTrVCMs0TB2F8bFgXXuPZOMvDV3lWNjnTg8lW7BhP5dPmCEV%2BrsI3tQ%2Bq6odNEm4oLhNGgbjbt2z%2F7mEcNfC3a19bdGuZ6kFUH3YFzszT07FCOv7B4R0Ixe%2FLU%2BEDNAJG97sYXmtbqa5LEGUYFnEPXiTpKpwcCpH7npcCKIMBdoJpYpqGHNc%2BEvjvUdwX5wwC7%2BkY2Zy3Qj6SJOQQRJ30toZJcBR5tavICufYx8BRMAyyCrxnQjQLiciIBA%2FrSQMhiQZ5dxhR09N2ABnizuNIVjlAnVFDXEy0qGsX8Xj%2Bic8VEKQz6tK4sd6%2BXMRpMhsCGaZKL2Qgd4Vvy%2FFl936ytK7169c683PDCfMTKvk4DJpWOCSQTi5nAyGOXIsYLfiqrN8mNBy0PUHuyVjb%2FnmLH%2F7Ll4sHHyWOFOqSQosinHczybzeu%2FMbOz5va%2BGMgFuLjM5WexeECjDYoI%2FABjqkAUlJ4w0XVoFdRbqr6Gon4SpCn4NrDQJItDaJQJgaTyyDx41%2FkNpdz2%2Fi37bDrPolFOuajkoFwmceTwQIcI6z4JSJOEMraJceJfYOa4Y%2BdXmDxIBIflstz9JYbfm%2Fn8uvbBU9fhwuWpOQD6isryfFYc0qqjAy8sqt71hKmbRLT6K3tpDR6Oxx7kDOpozviDCUgDo9GQbTCNNF9YPbAMxA8WnzbcLm&X-Amz-Signature=9088ff0828da52b646acc61742f9339f3e5447d25335e822125baa6593863124&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54OHVQ6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDIsDyp3rewr%2BVCcuhyXDYzpMDivf4tgXjqZrrl8r%2FQ2wIhAMC2WoP1W%2FJLDSMWJPNl31YGk7nlkeA3ObO7xGuK8c4FKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Xv%2BHUlF7XHxDDT8q3AMEVTlj1hRrheNS2JxaTEWY1JKC3ed2N1vWMqzTzho0cqkZm%2BYTDSw1kfW5mf%2FibAQM1%2BP28iS7V3FzXKCG4YumKEFRRM%2BBDsi36MYZxvI9Jpth2JyTFkd67KcaM81geKnBP48KIv7ywoPWn36WkgrUfbGMc8yIo1KixNRja3tDmhgIxAzUTrVCMs0TB2F8bFgXXuPZOMvDV3lWNjnTg8lW7BhP5dPmCEV%2BrsI3tQ%2Bq6odNEm4oLhNGgbjbt2z%2F7mEcNfC3a19bdGuZ6kFUH3YFzszT07FCOv7B4R0Ixe%2FLU%2BEDNAJG97sYXmtbqa5LEGUYFnEPXiTpKpwcCpH7npcCKIMBdoJpYpqGHNc%2BEvjvUdwX5wwC7%2BkY2Zy3Qj6SJOQQRJ30toZJcBR5tavICufYx8BRMAyyCrxnQjQLiciIBA%2FrSQMhiQZ5dxhR09N2ABnizuNIVjlAnVFDXEy0qGsX8Xj%2Bic8VEKQz6tK4sd6%2BXMRpMhsCGaZKL2Qgd4Vvy%2FFl936ytK7169c683PDCfMTKvk4DJpWOCSQTi5nAyGOXIsYLfiqrN8mNBy0PUHuyVjb%2FnmLH%2F7Ll4sHHyWOFOqSQosinHczybzeu%2FMbOz5va%2BGMgFuLjM5WexeECjDYoI%2FABjqkAUlJ4w0XVoFdRbqr6Gon4SpCn4NrDQJItDaJQJgaTyyDx41%2FkNpdz2%2Fi37bDrPolFOuajkoFwmceTwQIcI6z4JSJOEMraJceJfYOa4Y%2BdXmDxIBIflstz9JYbfm%2Fn8uvbBU9fhwuWpOQD6isryfFYc0qqjAy8sqt71hKmbRLT6K3tpDR6Oxx7kDOpozviDCUgDo9GQbTCNNF9YPbAMxA8WnzbcLm&X-Amz-Signature=6dfd3fd179ca1cd0aba4251d17e83fc085dfdba4f47bdf375f5d49e0c8c3d0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54OHVQ6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDIsDyp3rewr%2BVCcuhyXDYzpMDivf4tgXjqZrrl8r%2FQ2wIhAMC2WoP1W%2FJLDSMWJPNl31YGk7nlkeA3ObO7xGuK8c4FKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0Xv%2BHUlF7XHxDDT8q3AMEVTlj1hRrheNS2JxaTEWY1JKC3ed2N1vWMqzTzho0cqkZm%2BYTDSw1kfW5mf%2FibAQM1%2BP28iS7V3FzXKCG4YumKEFRRM%2BBDsi36MYZxvI9Jpth2JyTFkd67KcaM81geKnBP48KIv7ywoPWn36WkgrUfbGMc8yIo1KixNRja3tDmhgIxAzUTrVCMs0TB2F8bFgXXuPZOMvDV3lWNjnTg8lW7BhP5dPmCEV%2BrsI3tQ%2Bq6odNEm4oLhNGgbjbt2z%2F7mEcNfC3a19bdGuZ6kFUH3YFzszT07FCOv7B4R0Ixe%2FLU%2BEDNAJG97sYXmtbqa5LEGUYFnEPXiTpKpwcCpH7npcCKIMBdoJpYpqGHNc%2BEvjvUdwX5wwC7%2BkY2Zy3Qj6SJOQQRJ30toZJcBR5tavICufYx8BRMAyyCrxnQjQLiciIBA%2FrSQMhiQZ5dxhR09N2ABnizuNIVjlAnVFDXEy0qGsX8Xj%2Bic8VEKQz6tK4sd6%2BXMRpMhsCGaZKL2Qgd4Vvy%2FFl936ytK7169c683PDCfMTKvk4DJpWOCSQTi5nAyGOXIsYLfiqrN8mNBy0PUHuyVjb%2FnmLH%2F7Ll4sHHyWOFOqSQosinHczybzeu%2FMbOz5va%2BGMgFuLjM5WexeECjDYoI%2FABjqkAUlJ4w0XVoFdRbqr6Gon4SpCn4NrDQJItDaJQJgaTyyDx41%2FkNpdz2%2Fi37bDrPolFOuajkoFwmceTwQIcI6z4JSJOEMraJceJfYOa4Y%2BdXmDxIBIflstz9JYbfm%2Fn8uvbBU9fhwuWpOQD6isryfFYc0qqjAy8sqt71hKmbRLT6K3tpDR6Oxx7kDOpozviDCUgDo9GQbTCNNF9YPbAMxA8WnzbcLm&X-Amz-Signature=b0966622470698cde299fd9377fd39630ffa7709db12bcc8ecbc4435cd92bd88&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
