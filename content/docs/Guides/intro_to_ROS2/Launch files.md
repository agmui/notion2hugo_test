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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJM7N6N%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc9TMvs8sWhdnpFuC0WlmeyQvwE3lLLVwg0KQIlbCbsAiEAnMkjiyDRHjvxnQLVOp%2FLATXGjQoW47ob53krldSQ9HMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAuxI7DC5ZuFqpbiCrcAzY53hQXXfB52i5wBz6bRJqUya5dhePUVXv7hXiun7CI07yJzw8MhDMLQDFQ7if2yjXz3tOTx24Ihhh7NuKlqTOJOpIONXdbLXN67D2IoSA821g%2FbGjU2Wc7ElC9HfhmD%2BNO4jw5bA5UIA%2B8e2xMrUBfYmFCVDsiAGtcvlYVK57l3ZxgrvGzilNXLmZLuwcgQD6TpY3PjdqhwwcqF6cA6AIUGfgEC9W3J8ldNdhqu%2BDWFsiXtQdgV%2BH%2BvHjHJK0K4dyJg7eyjEpPUFjthSUVqapAiNvtD%2FnJsWx3HGi%2B94GMLbic73Y9DeNCuus%2B2snaVjlCaXKm%2B4isKdg6GXtewsd6cs%2Fq%2FRkM%2FzEkAKJi3mo5pPAn6m12vY61ovkmjJbRuilr090n2umBYo43tGpxndWeBHyuWY5leEJon%2FLAAzPLqTtGNkstD0zvF6EL7XkYcHRZfEWNKwOmueNvk1bY38aU5Jgwc8iQOO7hn%2FarL9%2FtiN%2Boa9rVFdfum60uuTkYxstzjIEraYaHJN0pqxa89L00u8YZY1Pl2Rd2qvVAL%2FDUd%2BdYjEos%2BmHovyudAydZVtjlOAeMLswdsjOCzZGtQ3shNiA%2FoxwPk7Y%2BvJJuP3nXvVwrDhnRMNdaFg1QML20sr0GOqUBrVOBBNLUTcnrxskeW8Yg3ZQ3JI0yvoIj1ChBKqWgGxv4mU2UMU5K78aFKG0Hq3HVwBdvIxzWY8LaT%2BXb0di5%2FuQtwce6BSI7j%2FW4dz2WKefUhyWVe5mT6N2MAQVPQ89pFlybr7RWcpGNEpCZ2h0bo%2BXOR3R4UosPu%2F%2Bv2EgaD0RqGV6fwz3A38dD6ninvimc40RGWLoKq0SoTECDwAFi%2FM7eOf1j&X-Amz-Signature=969139e0c2394f392c4fcccd63356872dfbf7bb4cc51ddcd20130f7d9084bacc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJM7N6N%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc9TMvs8sWhdnpFuC0WlmeyQvwE3lLLVwg0KQIlbCbsAiEAnMkjiyDRHjvxnQLVOp%2FLATXGjQoW47ob53krldSQ9HMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAuxI7DC5ZuFqpbiCrcAzY53hQXXfB52i5wBz6bRJqUya5dhePUVXv7hXiun7CI07yJzw8MhDMLQDFQ7if2yjXz3tOTx24Ihhh7NuKlqTOJOpIONXdbLXN67D2IoSA821g%2FbGjU2Wc7ElC9HfhmD%2BNO4jw5bA5UIA%2B8e2xMrUBfYmFCVDsiAGtcvlYVK57l3ZxgrvGzilNXLmZLuwcgQD6TpY3PjdqhwwcqF6cA6AIUGfgEC9W3J8ldNdhqu%2BDWFsiXtQdgV%2BH%2BvHjHJK0K4dyJg7eyjEpPUFjthSUVqapAiNvtD%2FnJsWx3HGi%2B94GMLbic73Y9DeNCuus%2B2snaVjlCaXKm%2B4isKdg6GXtewsd6cs%2Fq%2FRkM%2FzEkAKJi3mo5pPAn6m12vY61ovkmjJbRuilr090n2umBYo43tGpxndWeBHyuWY5leEJon%2FLAAzPLqTtGNkstD0zvF6EL7XkYcHRZfEWNKwOmueNvk1bY38aU5Jgwc8iQOO7hn%2FarL9%2FtiN%2Boa9rVFdfum60uuTkYxstzjIEraYaHJN0pqxa89L00u8YZY1Pl2Rd2qvVAL%2FDUd%2BdYjEos%2BmHovyudAydZVtjlOAeMLswdsjOCzZGtQ3shNiA%2FoxwPk7Y%2BvJJuP3nXvVwrDhnRMNdaFg1QML20sr0GOqUBrVOBBNLUTcnrxskeW8Yg3ZQ3JI0yvoIj1ChBKqWgGxv4mU2UMU5K78aFKG0Hq3HVwBdvIxzWY8LaT%2BXb0di5%2FuQtwce6BSI7j%2FW4dz2WKefUhyWVe5mT6N2MAQVPQ89pFlybr7RWcpGNEpCZ2h0bo%2BXOR3R4UosPu%2F%2Bv2EgaD0RqGV6fwz3A38dD6ninvimc40RGWLoKq0SoTECDwAFi%2FM7eOf1j&X-Amz-Signature=2694bcbd19ada5da9b771a99a36935568dbfaf5ddce666c2182ad366e24feecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJM7N6N%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEc9TMvs8sWhdnpFuC0WlmeyQvwE3lLLVwg0KQIlbCbsAiEAnMkjiyDRHjvxnQLVOp%2FLATXGjQoW47ob53krldSQ9HMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAuxI7DC5ZuFqpbiCrcAzY53hQXXfB52i5wBz6bRJqUya5dhePUVXv7hXiun7CI07yJzw8MhDMLQDFQ7if2yjXz3tOTx24Ihhh7NuKlqTOJOpIONXdbLXN67D2IoSA821g%2FbGjU2Wc7ElC9HfhmD%2BNO4jw5bA5UIA%2B8e2xMrUBfYmFCVDsiAGtcvlYVK57l3ZxgrvGzilNXLmZLuwcgQD6TpY3PjdqhwwcqF6cA6AIUGfgEC9W3J8ldNdhqu%2BDWFsiXtQdgV%2BH%2BvHjHJK0K4dyJg7eyjEpPUFjthSUVqapAiNvtD%2FnJsWx3HGi%2B94GMLbic73Y9DeNCuus%2B2snaVjlCaXKm%2B4isKdg6GXtewsd6cs%2Fq%2FRkM%2FzEkAKJi3mo5pPAn6m12vY61ovkmjJbRuilr090n2umBYo43tGpxndWeBHyuWY5leEJon%2FLAAzPLqTtGNkstD0zvF6EL7XkYcHRZfEWNKwOmueNvk1bY38aU5Jgwc8iQOO7hn%2FarL9%2FtiN%2Boa9rVFdfum60uuTkYxstzjIEraYaHJN0pqxa89L00u8YZY1Pl2Rd2qvVAL%2FDUd%2BdYjEos%2BmHovyudAydZVtjlOAeMLswdsjOCzZGtQ3shNiA%2FoxwPk7Y%2BvJJuP3nXvVwrDhnRMNdaFg1QML20sr0GOqUBrVOBBNLUTcnrxskeW8Yg3ZQ3JI0yvoIj1ChBKqWgGxv4mU2UMU5K78aFKG0Hq3HVwBdvIxzWY8LaT%2BXb0di5%2FuQtwce6BSI7j%2FW4dz2WKefUhyWVe5mT6N2MAQVPQ89pFlybr7RWcpGNEpCZ2h0bo%2BXOR3R4UosPu%2F%2Bv2EgaD0RqGV6fwz3A38dD6ninvimc40RGWLoKq0SoTECDwAFi%2FM7eOf1j&X-Amz-Signature=399d76801af56e393735a5a53b41ddfda79103c59df7077ffd045e54b913ebba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
