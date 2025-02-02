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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAC6A5NZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyneAjHBDoYxGFB2Nl3S4TUqfqF4gjvBFHAnumB30scAIgBEwiUuFfNtubZEKPdi8EH3THMQPm%2BhkvbbLZbp2GMYcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIatp0EPHNgnJ%2BeNzircAwdh2QN%2BrhhpbRwB6AC7PJlVF55rPEqE84l19ZgktyuwJKQB7JCDpLDv%2BlFXnuGnG7kAetpE%2FU%2F6XKMthyQN1n9iAKJz2tiyHhzroEz6DXZCmQ49gtC7tNNmh3pqjOVjUxG8Pk4zneDf%2Br4AqiGETVrZTK6qx8pKUyFhxoA19CLiP8LIcSg%2Fyu5y1wzUTgBYbbyvb8%2B4UV0%2BS5sSPdVinKi7qZC9EcCw4gN0aiqTLPA1Hm4TGK8yOt5CsoK59hPy%2FrJ3bfetkTDrNB9nWPWGv4So%2BJL9dUXSSwW%2BxCYfDMCH7Hav7FnS%2BNw0Aj6Sf7TsaUZZ%2FK5CCM4O%2B0tzvSSYk69M1GkuuEpstmklQpOAXlBFqmPXlAOqhqk4l7CcJVWt%2FFMepSnpkLxTk%2Far87JJuIpZUYe8niap%2BfSKYGpKUD8zkbswymdbu%2B3dkjiCPDjIYWgjzkv63Y19idKrj20btTpz39DdKQ6VPznhY0g1XFc7y5Q6bLJdYxtfd9OBYveTyYmkHvuSE1SuYjRaCD3nSddyzJo42awWX8WKJBcO%2BK3zIP9atU8tFTtffD55hGT2lJ82WnBcvu%2Be4HTIvWORnnyfwUE2NWccPfsidqMmpfdaNP6FApDUTdUPPfB4MOe%2F%2FbwGOqUBAOF4gmZfSJGWotThmvCpirdvLmzRkA2ehnRD%2BfhSlA8%2Fe6jlw%2FZyjEhb7dWWR2Ss7NSbI62kztyS%2F%2BmYY1a7M113jpzJCwHDzOVaJYxfIRD7BfPXoOuQOTYG6H4qQ8bQpwyLoSzOQixtcIGQ0OucCZ0V9abe4mknqtnD%2BxxV6m0XGxj4%2FcKWxZFsGHDFo%2F12IAZBD9XqtyE5Jmk9etcq3yZ3D0%2B6&X-Amz-Signature=00ec92089c9380c0c31cf0252fdfff7fa47d8b0d43e0708970dcb689666a505b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAC6A5NZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyneAjHBDoYxGFB2Nl3S4TUqfqF4gjvBFHAnumB30scAIgBEwiUuFfNtubZEKPdi8EH3THMQPm%2BhkvbbLZbp2GMYcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIatp0EPHNgnJ%2BeNzircAwdh2QN%2BrhhpbRwB6AC7PJlVF55rPEqE84l19ZgktyuwJKQB7JCDpLDv%2BlFXnuGnG7kAetpE%2FU%2F6XKMthyQN1n9iAKJz2tiyHhzroEz6DXZCmQ49gtC7tNNmh3pqjOVjUxG8Pk4zneDf%2Br4AqiGETVrZTK6qx8pKUyFhxoA19CLiP8LIcSg%2Fyu5y1wzUTgBYbbyvb8%2B4UV0%2BS5sSPdVinKi7qZC9EcCw4gN0aiqTLPA1Hm4TGK8yOt5CsoK59hPy%2FrJ3bfetkTDrNB9nWPWGv4So%2BJL9dUXSSwW%2BxCYfDMCH7Hav7FnS%2BNw0Aj6Sf7TsaUZZ%2FK5CCM4O%2B0tzvSSYk69M1GkuuEpstmklQpOAXlBFqmPXlAOqhqk4l7CcJVWt%2FFMepSnpkLxTk%2Far87JJuIpZUYe8niap%2BfSKYGpKUD8zkbswymdbu%2B3dkjiCPDjIYWgjzkv63Y19idKrj20btTpz39DdKQ6VPznhY0g1XFc7y5Q6bLJdYxtfd9OBYveTyYmkHvuSE1SuYjRaCD3nSddyzJo42awWX8WKJBcO%2BK3zIP9atU8tFTtffD55hGT2lJ82WnBcvu%2Be4HTIvWORnnyfwUE2NWccPfsidqMmpfdaNP6FApDUTdUPPfB4MOe%2F%2FbwGOqUBAOF4gmZfSJGWotThmvCpirdvLmzRkA2ehnRD%2BfhSlA8%2Fe6jlw%2FZyjEhb7dWWR2Ss7NSbI62kztyS%2F%2BmYY1a7M113jpzJCwHDzOVaJYxfIRD7BfPXoOuQOTYG6H4qQ8bQpwyLoSzOQixtcIGQ0OucCZ0V9abe4mknqtnD%2BxxV6m0XGxj4%2FcKWxZFsGHDFo%2F12IAZBD9XqtyE5Jmk9etcq3yZ3D0%2B6&X-Amz-Signature=5d02f6cacf89c2ec6629a211fa791dbc33b0e64ed064e0ed4231d840864823e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAC6A5NZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T130928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyneAjHBDoYxGFB2Nl3S4TUqfqF4gjvBFHAnumB30scAIgBEwiUuFfNtubZEKPdi8EH3THMQPm%2BhkvbbLZbp2GMYcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIatp0EPHNgnJ%2BeNzircAwdh2QN%2BrhhpbRwB6AC7PJlVF55rPEqE84l19ZgktyuwJKQB7JCDpLDv%2BlFXnuGnG7kAetpE%2FU%2F6XKMthyQN1n9iAKJz2tiyHhzroEz6DXZCmQ49gtC7tNNmh3pqjOVjUxG8Pk4zneDf%2Br4AqiGETVrZTK6qx8pKUyFhxoA19CLiP8LIcSg%2Fyu5y1wzUTgBYbbyvb8%2B4UV0%2BS5sSPdVinKi7qZC9EcCw4gN0aiqTLPA1Hm4TGK8yOt5CsoK59hPy%2FrJ3bfetkTDrNB9nWPWGv4So%2BJL9dUXSSwW%2BxCYfDMCH7Hav7FnS%2BNw0Aj6Sf7TsaUZZ%2FK5CCM4O%2B0tzvSSYk69M1GkuuEpstmklQpOAXlBFqmPXlAOqhqk4l7CcJVWt%2FFMepSnpkLxTk%2Far87JJuIpZUYe8niap%2BfSKYGpKUD8zkbswymdbu%2B3dkjiCPDjIYWgjzkv63Y19idKrj20btTpz39DdKQ6VPznhY0g1XFc7y5Q6bLJdYxtfd9OBYveTyYmkHvuSE1SuYjRaCD3nSddyzJo42awWX8WKJBcO%2BK3zIP9atU8tFTtffD55hGT2lJ82WnBcvu%2Be4HTIvWORnnyfwUE2NWccPfsidqMmpfdaNP6FApDUTdUPPfB4MOe%2F%2FbwGOqUBAOF4gmZfSJGWotThmvCpirdvLmzRkA2ehnRD%2BfhSlA8%2Fe6jlw%2FZyjEhb7dWWR2Ss7NSbI62kztyS%2F%2BmYY1a7M113jpzJCwHDzOVaJYxfIRD7BfPXoOuQOTYG6H4qQ8bQpwyLoSzOQixtcIGQ0OucCZ0V9abe4mknqtnD%2BxxV6m0XGxj4%2FcKWxZFsGHDFo%2F12IAZBD9XqtyE5Jmk9etcq3yZ3D0%2B6&X-Amz-Signature=e2132ff22ae4cafa45ca665d146d0ec2958309645704716ba5d43249b73ed56d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
