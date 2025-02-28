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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZE6UVWI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFffEWIMLUi%2FmYYCnyx6a8YI1%2FDmQdc56K6EA64vq1lDAiBlAZ8OuHmVcFxjGHI2i6Zud8E0ZWGasvaVcbiPn1CZGiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FzhykgaonzxvmC3KtwDnzrOat9OfrRbo%2FOZC8tb5DHTvkyo%2BQjXc1kMUHeKy7FjJ2ta4FoPbDwuZAKaFR3a3BH4fMv3%2BUGcUe%2FDaDNuRIt66vcd65hUgx%2BFz%2Fe6yp3Dq35MNdOg8FwI5AY1s6GaVEAAQI1%2FzKe04rIg9bDRn%2BAa75OZ78WOT9UAZdaYAJywsHV3BeBF5t%2B%2FccVD%2FwGbkqBT%2B9R3%2FK9aHGkwKVbm68QhEoIVSIENFt0F6GwTDuJLpLwWLpPt9Avd09ge%2B0Us8aOzB%2BSW0TTCgSINn%2BFnKyXeOY%2BPXO6QXYO0b5OF6wPPWW5zSaZOkPAcbb2xQtP1PPN2YsdUBHt21k85umdaQ2BBtix7mJVNvSVAOV5dD%2FE3mtgWM7Ce7O4tfWBVzc7O5%2Bd9XVZfrdBq4jSZ7olAdrl0bSc3n2hj2fhxy5QeoGunGW6YEGgHJx9zNLjq1Kkx9ejVtMSDEFWIg9TeETuFkkeiPY5iAvdoNdqcEcinarOyDfPzXrrex9bs6H%2BCwfTcg32IimDG1%2FBxrIK8uf6Jv8S7i%2B48Xp28EaC%2F9F3BHVu7nZTqDKuJkLiD%2FWwz%2Fync5Tc9HPj91h4PF2SCMUz3Hn4pxAblqSFhcu7RBxWURaYA%2BPA8CaURml2HQ38w07SEvgY6pgEkMowwB%2Bds2cMDBXtV1n1nYH40sGvX7yxr0KeBITzHPjKckxe1jv8q4ef4Fd4iPeWqvLqMd7ouO5KJDNKmK2O3mZg0r3HZjOfKYN5RhpugEdO1ijEqrUC6ux5AwTxx6%2BCzZkK8c%2FYk0XAeuvqPcOuH%2BUo5jxbdLgLOXbcHScWWwdQ6rsBiKsolwweX1E%2BOdAZd%2FmbHAkP4wNGIXvj1F24iHfp4FgGC&X-Amz-Signature=8979b2ac3fc25e1869b78167d5e28ea93f20f5b3ac45af6e5604204bd702f9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZE6UVWI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFffEWIMLUi%2FmYYCnyx6a8YI1%2FDmQdc56K6EA64vq1lDAiBlAZ8OuHmVcFxjGHI2i6Zud8E0ZWGasvaVcbiPn1CZGiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FzhykgaonzxvmC3KtwDnzrOat9OfrRbo%2FOZC8tb5DHTvkyo%2BQjXc1kMUHeKy7FjJ2ta4FoPbDwuZAKaFR3a3BH4fMv3%2BUGcUe%2FDaDNuRIt66vcd65hUgx%2BFz%2Fe6yp3Dq35MNdOg8FwI5AY1s6GaVEAAQI1%2FzKe04rIg9bDRn%2BAa75OZ78WOT9UAZdaYAJywsHV3BeBF5t%2B%2FccVD%2FwGbkqBT%2B9R3%2FK9aHGkwKVbm68QhEoIVSIENFt0F6GwTDuJLpLwWLpPt9Avd09ge%2B0Us8aOzB%2BSW0TTCgSINn%2BFnKyXeOY%2BPXO6QXYO0b5OF6wPPWW5zSaZOkPAcbb2xQtP1PPN2YsdUBHt21k85umdaQ2BBtix7mJVNvSVAOV5dD%2FE3mtgWM7Ce7O4tfWBVzc7O5%2Bd9XVZfrdBq4jSZ7olAdrl0bSc3n2hj2fhxy5QeoGunGW6YEGgHJx9zNLjq1Kkx9ejVtMSDEFWIg9TeETuFkkeiPY5iAvdoNdqcEcinarOyDfPzXrrex9bs6H%2BCwfTcg32IimDG1%2FBxrIK8uf6Jv8S7i%2B48Xp28EaC%2F9F3BHVu7nZTqDKuJkLiD%2FWwz%2Fync5Tc9HPj91h4PF2SCMUz3Hn4pxAblqSFhcu7RBxWURaYA%2BPA8CaURml2HQ38w07SEvgY6pgEkMowwB%2Bds2cMDBXtV1n1nYH40sGvX7yxr0KeBITzHPjKckxe1jv8q4ef4Fd4iPeWqvLqMd7ouO5KJDNKmK2O3mZg0r3HZjOfKYN5RhpugEdO1ijEqrUC6ux5AwTxx6%2BCzZkK8c%2FYk0XAeuvqPcOuH%2BUo5jxbdLgLOXbcHScWWwdQ6rsBiKsolwweX1E%2BOdAZd%2FmbHAkP4wNGIXvj1F24iHfp4FgGC&X-Amz-Signature=31d5a7b74eb046c29ccb88d92a2ff55634989846ef554d68a63021ca62de2fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZE6UVWI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFffEWIMLUi%2FmYYCnyx6a8YI1%2FDmQdc56K6EA64vq1lDAiBlAZ8OuHmVcFxjGHI2i6Zud8E0ZWGasvaVcbiPn1CZGiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8FzhykgaonzxvmC3KtwDnzrOat9OfrRbo%2FOZC8tb5DHTvkyo%2BQjXc1kMUHeKy7FjJ2ta4FoPbDwuZAKaFR3a3BH4fMv3%2BUGcUe%2FDaDNuRIt66vcd65hUgx%2BFz%2Fe6yp3Dq35MNdOg8FwI5AY1s6GaVEAAQI1%2FzKe04rIg9bDRn%2BAa75OZ78WOT9UAZdaYAJywsHV3BeBF5t%2B%2FccVD%2FwGbkqBT%2B9R3%2FK9aHGkwKVbm68QhEoIVSIENFt0F6GwTDuJLpLwWLpPt9Avd09ge%2B0Us8aOzB%2BSW0TTCgSINn%2BFnKyXeOY%2BPXO6QXYO0b5OF6wPPWW5zSaZOkPAcbb2xQtP1PPN2YsdUBHt21k85umdaQ2BBtix7mJVNvSVAOV5dD%2FE3mtgWM7Ce7O4tfWBVzc7O5%2Bd9XVZfrdBq4jSZ7olAdrl0bSc3n2hj2fhxy5QeoGunGW6YEGgHJx9zNLjq1Kkx9ejVtMSDEFWIg9TeETuFkkeiPY5iAvdoNdqcEcinarOyDfPzXrrex9bs6H%2BCwfTcg32IimDG1%2FBxrIK8uf6Jv8S7i%2B48Xp28EaC%2F9F3BHVu7nZTqDKuJkLiD%2FWwz%2Fync5Tc9HPj91h4PF2SCMUz3Hn4pxAblqSFhcu7RBxWURaYA%2BPA8CaURml2HQ38w07SEvgY6pgEkMowwB%2Bds2cMDBXtV1n1nYH40sGvX7yxr0KeBITzHPjKckxe1jv8q4ef4Fd4iPeWqvLqMd7ouO5KJDNKmK2O3mZg0r3HZjOfKYN5RhpugEdO1ijEqrUC6ux5AwTxx6%2BCzZkK8c%2FYk0XAeuvqPcOuH%2BUo5jxbdLgLOXbcHScWWwdQ6rsBiKsolwweX1E%2BOdAZd%2FmbHAkP4wNGIXvj1F24iHfp4FgGC&X-Amz-Signature=147e936b819a3b89ad75495d8d0efdb250182e3625ed88881c89b8fc24e972b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
