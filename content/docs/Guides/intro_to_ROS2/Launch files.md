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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZML7K6IO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzklA7qqqZAt1d%2BUkuS3xZSVqOS%2FO6GJ1wYuh%2BOyNFfQIhAM2PFLiHQ%2BB5JDcVuO0ZUP9knSp5Uj2ixAWp0jPOjBj2Kv8DCDUQABoMNjM3NDIzMTgzODA1IgwxAzOwVsjphB4Dk4gq3ANpaaZbyUc5aUSEyrMtnDIPfFX4Ij30R5JdiDLHf5zyS1iwOqxE4eXkBT9Ky7UFNSOiMVjzNygKrKs9jiZJQ61%2FUqrdRGNOy4vBYLaCif8Hnl%2B26djTu7YQkZ7ZR5xsAorS1sznC9Rh2vQmxxX%2BpVEBRG6AKtPePRicEZpXif2xONP%2BZWlIsPpiXQlPJMokwhuf8EKopRFYsB%2F8xjY5aTe0SEGjWijBX0zazpRBSifAqi1MvDw%2FEiHTjkWplb0nJ%2F0PeVPBbTtTNS%2BFYX%2FKxvUAW87ObL9JR4MswsYG0LkI64APc1PLOb0ySOyLpp8YEi2xPQ%2BCAqxOl6kT%2F0QuFh8vlVbKqii3PF6Ek7mvqLn308PhnM108K%2FQqA4gRfVRey7rs46Ie2gNQBsQMYbpHzGRFgxrwGXnI9kP9TYCb52PWivUvnNRMhmzTj1WFsymY2EBVCUt2QvtIs1giha5tbKj3LimCOx1zstyqEhev7P5NdpSGgJ0ONK90lbClQ2WK0Tn10sXv6pio65tZAAnH95F%2F8UF13J%2B8jK1ewe9%2FTolZ7ALlYiMOZuunzsYv8auorglchVtQGFZ%2B%2Fe7pDddiI7BeeCSfZgIVJ8mWEC2WunoVMKfJNdxT%2BYWVyky%2BDDKnfO9BjqkAfi9XZvUBpj6LLbg6DtF8nE350Tie%2FvABeY8AIxg1sUGUQgAO2aaBsMalZAxpn8QIuv4jKXFYqwLhjnlhirMZFoaM3SVQkmhJPE5kHe1BaLu%2FC%2BB%2FB%2FL6DWfYakOQC0mv5T1lruMCMeRu48y4ByDK0eAdKPHgekLJX71XwITIU7N2kuA2HG2OY0c5qkArbS2BdXL%2FYrHxuHZuh%2FaEpsTd69HYKd6&X-Amz-Signature=52b606014dd109acbf6b5895c5d1db32dd39255a0eb3a7f2567b0c9742069159&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZML7K6IO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzklA7qqqZAt1d%2BUkuS3xZSVqOS%2FO6GJ1wYuh%2BOyNFfQIhAM2PFLiHQ%2BB5JDcVuO0ZUP9knSp5Uj2ixAWp0jPOjBj2Kv8DCDUQABoMNjM3NDIzMTgzODA1IgwxAzOwVsjphB4Dk4gq3ANpaaZbyUc5aUSEyrMtnDIPfFX4Ij30R5JdiDLHf5zyS1iwOqxE4eXkBT9Ky7UFNSOiMVjzNygKrKs9jiZJQ61%2FUqrdRGNOy4vBYLaCif8Hnl%2B26djTu7YQkZ7ZR5xsAorS1sznC9Rh2vQmxxX%2BpVEBRG6AKtPePRicEZpXif2xONP%2BZWlIsPpiXQlPJMokwhuf8EKopRFYsB%2F8xjY5aTe0SEGjWijBX0zazpRBSifAqi1MvDw%2FEiHTjkWplb0nJ%2F0PeVPBbTtTNS%2BFYX%2FKxvUAW87ObL9JR4MswsYG0LkI64APc1PLOb0ySOyLpp8YEi2xPQ%2BCAqxOl6kT%2F0QuFh8vlVbKqii3PF6Ek7mvqLn308PhnM108K%2FQqA4gRfVRey7rs46Ie2gNQBsQMYbpHzGRFgxrwGXnI9kP9TYCb52PWivUvnNRMhmzTj1WFsymY2EBVCUt2QvtIs1giha5tbKj3LimCOx1zstyqEhev7P5NdpSGgJ0ONK90lbClQ2WK0Tn10sXv6pio65tZAAnH95F%2F8UF13J%2B8jK1ewe9%2FTolZ7ALlYiMOZuunzsYv8auorglchVtQGFZ%2B%2Fe7pDddiI7BeeCSfZgIVJ8mWEC2WunoVMKfJNdxT%2BYWVyky%2BDDKnfO9BjqkAfi9XZvUBpj6LLbg6DtF8nE350Tie%2FvABeY8AIxg1sUGUQgAO2aaBsMalZAxpn8QIuv4jKXFYqwLhjnlhirMZFoaM3SVQkmhJPE5kHe1BaLu%2FC%2BB%2FB%2FL6DWfYakOQC0mv5T1lruMCMeRu48y4ByDK0eAdKPHgekLJX71XwITIU7N2kuA2HG2OY0c5qkArbS2BdXL%2FYrHxuHZuh%2FaEpsTd69HYKd6&X-Amz-Signature=fd5b6ab279407d3b9b21c5c55b644b3479f5860b2cef40f784253cba13b8f7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZML7K6IO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzklA7qqqZAt1d%2BUkuS3xZSVqOS%2FO6GJ1wYuh%2BOyNFfQIhAM2PFLiHQ%2BB5JDcVuO0ZUP9knSp5Uj2ixAWp0jPOjBj2Kv8DCDUQABoMNjM3NDIzMTgzODA1IgwxAzOwVsjphB4Dk4gq3ANpaaZbyUc5aUSEyrMtnDIPfFX4Ij30R5JdiDLHf5zyS1iwOqxE4eXkBT9Ky7UFNSOiMVjzNygKrKs9jiZJQ61%2FUqrdRGNOy4vBYLaCif8Hnl%2B26djTu7YQkZ7ZR5xsAorS1sznC9Rh2vQmxxX%2BpVEBRG6AKtPePRicEZpXif2xONP%2BZWlIsPpiXQlPJMokwhuf8EKopRFYsB%2F8xjY5aTe0SEGjWijBX0zazpRBSifAqi1MvDw%2FEiHTjkWplb0nJ%2F0PeVPBbTtTNS%2BFYX%2FKxvUAW87ObL9JR4MswsYG0LkI64APc1PLOb0ySOyLpp8YEi2xPQ%2BCAqxOl6kT%2F0QuFh8vlVbKqii3PF6Ek7mvqLn308PhnM108K%2FQqA4gRfVRey7rs46Ie2gNQBsQMYbpHzGRFgxrwGXnI9kP9TYCb52PWivUvnNRMhmzTj1WFsymY2EBVCUt2QvtIs1giha5tbKj3LimCOx1zstyqEhev7P5NdpSGgJ0ONK90lbClQ2WK0Tn10sXv6pio65tZAAnH95F%2F8UF13J%2B8jK1ewe9%2FTolZ7ALlYiMOZuunzsYv8auorglchVtQGFZ%2B%2Fe7pDddiI7BeeCSfZgIVJ8mWEC2WunoVMKfJNdxT%2BYWVyky%2BDDKnfO9BjqkAfi9XZvUBpj6LLbg6DtF8nE350Tie%2FvABeY8AIxg1sUGUQgAO2aaBsMalZAxpn8QIuv4jKXFYqwLhjnlhirMZFoaM3SVQkmhJPE5kHe1BaLu%2FC%2BB%2FB%2FL6DWfYakOQC0mv5T1lruMCMeRu48y4ByDK0eAdKPHgekLJX71XwITIU7N2kuA2HG2OY0c5qkArbS2BdXL%2FYrHxuHZuh%2FaEpsTd69HYKd6&X-Amz-Signature=25649717adc497937ca6f7c146447a783d541d01f7f586e0d2118d9ace23ff1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
