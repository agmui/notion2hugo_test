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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5C6ZTX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjQfnqCK%2B7%2FjL%2BRhCwW6ooO%2Baox9x1ENjLlEmGUtnKjAiBQcbVPYga2WS8%2Bx56q0gDmovX3dz32iIFdVl5CsPl3UiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnhGPfhr4atfDRLdKtwDc91MT0JJ2KTNAjEmbBJzCQYuAwXXqXnjy%2B953CMq%2FHnVTlj6K0bg6Ez46%2FWBmw1oBeucz1aXi1Oc08I%2FYrLKYrN%2BfA9KoCCsAGGDGXbb3zaHFFtxX2gwJnSL7d%2FnpmXlvLirtWwRNDSdHc2X11%2BoELeniWCQ5SKDWy61XE3P6Fq7%2FDl58maRg%2F2CmBNGqGjOEvJ%2FE17WaMIXT8j0R5%2B911kr7vTOsKEKmvgvGzYhxsCJXYP4oTIBVyNGTTYXEEJ%2BLr7Jl68pAKjhdKYGF3Z%2BTMQFtBp9J1py%2F%2FVpmbsREGfjDPz4SvN4SKgcwDahnmFw9TiRaGD%2FALULh2aPLxoJ9tHKu55C9zeVlGHJof2RnpuE5tvyO6bOI3ti6jBMahTPhGGEbix6rJL0Gng4anz1x7gE1hPhBAVZcHvNf3TJ3FDcNK5EDoBJLEZIRIC2lcssC6lHJI0dcKY%2FOYwUooCivieldGh3faW%2FrN0vgZN8dkpKxdVDtUqX5cXiJYsc%2BnvNcDVDyBuOkmTWph9XAMQzNQJFRzu10DpfvHPB6j8zUGEIfUqFQFXjiGVzgEPe8FyDxrKZwaQ7oXLorfM%2FhpLLP1ZA8EvsqbP9H89Ty7p%2F%2FOT03CU8yHLQFnXVDVkw4JnhvQY6pgFT%2B3HYR4HMiMXU0zQD7ACx7braZ%2BnxvgZLVLzTNUpjMzEDAvmZJwP1qwQ6kIRzzbVDTCoBtGR9mE8xC8fefK9vFfp0y1NjjR6PeSdWEh5hoWEE3fsKT5vlW5j7OHY%2FHjw8%2BIrULlwRqXKbxjMJ6XTCmi5AiFKxfcJL8d2v9luZFstNo2chuZ65YqnLaAoYY2ClR11Emd2orTyDKknvcuSHN0pM1vci&X-Amz-Signature=a57775903152c894967449e8e46f59befe878d877fef7639624c704691fba9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5C6ZTX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjQfnqCK%2B7%2FjL%2BRhCwW6ooO%2Baox9x1ENjLlEmGUtnKjAiBQcbVPYga2WS8%2Bx56q0gDmovX3dz32iIFdVl5CsPl3UiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnhGPfhr4atfDRLdKtwDc91MT0JJ2KTNAjEmbBJzCQYuAwXXqXnjy%2B953CMq%2FHnVTlj6K0bg6Ez46%2FWBmw1oBeucz1aXi1Oc08I%2FYrLKYrN%2BfA9KoCCsAGGDGXbb3zaHFFtxX2gwJnSL7d%2FnpmXlvLirtWwRNDSdHc2X11%2BoELeniWCQ5SKDWy61XE3P6Fq7%2FDl58maRg%2F2CmBNGqGjOEvJ%2FE17WaMIXT8j0R5%2B911kr7vTOsKEKmvgvGzYhxsCJXYP4oTIBVyNGTTYXEEJ%2BLr7Jl68pAKjhdKYGF3Z%2BTMQFtBp9J1py%2F%2FVpmbsREGfjDPz4SvN4SKgcwDahnmFw9TiRaGD%2FALULh2aPLxoJ9tHKu55C9zeVlGHJof2RnpuE5tvyO6bOI3ti6jBMahTPhGGEbix6rJL0Gng4anz1x7gE1hPhBAVZcHvNf3TJ3FDcNK5EDoBJLEZIRIC2lcssC6lHJI0dcKY%2FOYwUooCivieldGh3faW%2FrN0vgZN8dkpKxdVDtUqX5cXiJYsc%2BnvNcDVDyBuOkmTWph9XAMQzNQJFRzu10DpfvHPB6j8zUGEIfUqFQFXjiGVzgEPe8FyDxrKZwaQ7oXLorfM%2FhpLLP1ZA8EvsqbP9H89Ty7p%2F%2FOT03CU8yHLQFnXVDVkw4JnhvQY6pgFT%2B3HYR4HMiMXU0zQD7ACx7braZ%2BnxvgZLVLzTNUpjMzEDAvmZJwP1qwQ6kIRzzbVDTCoBtGR9mE8xC8fefK9vFfp0y1NjjR6PeSdWEh5hoWEE3fsKT5vlW5j7OHY%2FHjw8%2BIrULlwRqXKbxjMJ6XTCmi5AiFKxfcJL8d2v9luZFstNo2chuZ65YqnLaAoYY2ClR11Emd2orTyDKknvcuSHN0pM1vci&X-Amz-Signature=0451ed5b5ac9f1a90506f79b435af0ae18b88c1f01bc7bcce3650a5896fe9da2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5C6ZTX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjQfnqCK%2B7%2FjL%2BRhCwW6ooO%2Baox9x1ENjLlEmGUtnKjAiBQcbVPYga2WS8%2Bx56q0gDmovX3dz32iIFdVl5CsPl3UiqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKnhGPfhr4atfDRLdKtwDc91MT0JJ2KTNAjEmbBJzCQYuAwXXqXnjy%2B953CMq%2FHnVTlj6K0bg6Ez46%2FWBmw1oBeucz1aXi1Oc08I%2FYrLKYrN%2BfA9KoCCsAGGDGXbb3zaHFFtxX2gwJnSL7d%2FnpmXlvLirtWwRNDSdHc2X11%2BoELeniWCQ5SKDWy61XE3P6Fq7%2FDl58maRg%2F2CmBNGqGjOEvJ%2FE17WaMIXT8j0R5%2B911kr7vTOsKEKmvgvGzYhxsCJXYP4oTIBVyNGTTYXEEJ%2BLr7Jl68pAKjhdKYGF3Z%2BTMQFtBp9J1py%2F%2FVpmbsREGfjDPz4SvN4SKgcwDahnmFw9TiRaGD%2FALULh2aPLxoJ9tHKu55C9zeVlGHJof2RnpuE5tvyO6bOI3ti6jBMahTPhGGEbix6rJL0Gng4anz1x7gE1hPhBAVZcHvNf3TJ3FDcNK5EDoBJLEZIRIC2lcssC6lHJI0dcKY%2FOYwUooCivieldGh3faW%2FrN0vgZN8dkpKxdVDtUqX5cXiJYsc%2BnvNcDVDyBuOkmTWph9XAMQzNQJFRzu10DpfvHPB6j8zUGEIfUqFQFXjiGVzgEPe8FyDxrKZwaQ7oXLorfM%2FhpLLP1ZA8EvsqbP9H89Ty7p%2F%2FOT03CU8yHLQFnXVDVkw4JnhvQY6pgFT%2B3HYR4HMiMXU0zQD7ACx7braZ%2BnxvgZLVLzTNUpjMzEDAvmZJwP1qwQ6kIRzzbVDTCoBtGR9mE8xC8fefK9vFfp0y1NjjR6PeSdWEh5hoWEE3fsKT5vlW5j7OHY%2FHjw8%2BIrULlwRqXKbxjMJ6XTCmi5AiFKxfcJL8d2v9luZFstNo2chuZ65YqnLaAoYY2ClR11Emd2orTyDKknvcuSHN0pM1vci&X-Amz-Signature=27d7e1c2b453ae785d7bfb0c5096e3813356a3539085868a56bc3050cb923891&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
