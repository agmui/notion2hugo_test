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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCLBIYD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFEtIQKa11ClllMO9noWB1IrTt0MSSjnTOhgT9Y19WBcAiAqUun72Xz8ZbiHs444EXfsibqVOq6dnjo23B12a3GNQSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXdUE4%2B%2BLiwDmkMkqKtwDNlUOH%2Brn8gABDD5B0m%2FMorvbrF1rDEY%2BKIzoIy04yLd%2FInz%2FdQpzrmNvJ28UU50GZIBJb0SU921urtZ2%2FzYvshrDiHnHy%2FbZWA6FL72v5qzVmkJCW8H4AN1GHHdWEmCaF63RWVQJTIXy0e2oZECZoqs4rafq6R6rXJy6L5YbP31c92i3blINB4RzsDFNxl5erXR5IWj7ThGoR4AWxLJAzloLRoTmSXiboRP1heRPZaYvkW4USxR1yGs%2BqbNcbnzHnJ7pWmd4K%2BArWLXiC5Zy4enURHIQ%2Fn1Fpt02%2F3URRdDqcs8STISFH0kWsJHoK0qzaoptups2S7ohhrzU5Xz%2BHE356txzhbx%2Fyk8EOQ%2Bq8I0Uuu5P1fLfzevmIqeXiwQHvi9h%2FoCXNg3zeQaaJxYPEyfzypdDJbni2mDBu%2Brb0hTMGw4PeT2jZ3qcl2yFC4orLsatbVwHjkTh0glpusJMRbetzIl9GzdLWEsAFnsmtqL%2B4B6CHhgK7TV1YhJ9AjnpPByYBdLVc6w0msTThC841Gsl%2B63R0l11wBolrYpgcZsPMw2g54sqGt2OKt0JvwZUX4iipht1zez2O0i0V3uAkxDIw3CiDtYucfFrY1EbemcgcE6rG45eUUAxpMIwrITZwwY6pgHJTEjbnar9f5QQ1lFazyvK7vMJez0GaPlvpiQ1bBxlLNTl43iWlb21KIsDPpkHI49IfEpqQ9jmHDIltpYq%2BAKA8ScFibAa2oKzdEJ4eL97WUtHdGCNCEOrLxoyjoDDAeMKv8bHP2Q3%2BGz10Tdow0J5KECJI8GVst3IOhf7IVut1ZxZiSIoG5OqTpzVjsGx2ZT4y7e8NCogwNIoVSJxShrcDzCD%2FhNq&X-Amz-Signature=86072518ccd22f7f396ce529ca284ff07a7c96e6cdb509049f3aff397a1d559e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCLBIYD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFEtIQKa11ClllMO9noWB1IrTt0MSSjnTOhgT9Y19WBcAiAqUun72Xz8ZbiHs444EXfsibqVOq6dnjo23B12a3GNQSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXdUE4%2B%2BLiwDmkMkqKtwDNlUOH%2Brn8gABDD5B0m%2FMorvbrF1rDEY%2BKIzoIy04yLd%2FInz%2FdQpzrmNvJ28UU50GZIBJb0SU921urtZ2%2FzYvshrDiHnHy%2FbZWA6FL72v5qzVmkJCW8H4AN1GHHdWEmCaF63RWVQJTIXy0e2oZECZoqs4rafq6R6rXJy6L5YbP31c92i3blINB4RzsDFNxl5erXR5IWj7ThGoR4AWxLJAzloLRoTmSXiboRP1heRPZaYvkW4USxR1yGs%2BqbNcbnzHnJ7pWmd4K%2BArWLXiC5Zy4enURHIQ%2Fn1Fpt02%2F3URRdDqcs8STISFH0kWsJHoK0qzaoptups2S7ohhrzU5Xz%2BHE356txzhbx%2Fyk8EOQ%2Bq8I0Uuu5P1fLfzevmIqeXiwQHvi9h%2FoCXNg3zeQaaJxYPEyfzypdDJbni2mDBu%2Brb0hTMGw4PeT2jZ3qcl2yFC4orLsatbVwHjkTh0glpusJMRbetzIl9GzdLWEsAFnsmtqL%2B4B6CHhgK7TV1YhJ9AjnpPByYBdLVc6w0msTThC841Gsl%2B63R0l11wBolrYpgcZsPMw2g54sqGt2OKt0JvwZUX4iipht1zez2O0i0V3uAkxDIw3CiDtYucfFrY1EbemcgcE6rG45eUUAxpMIwrITZwwY6pgHJTEjbnar9f5QQ1lFazyvK7vMJez0GaPlvpiQ1bBxlLNTl43iWlb21KIsDPpkHI49IfEpqQ9jmHDIltpYq%2BAKA8ScFibAa2oKzdEJ4eL97WUtHdGCNCEOrLxoyjoDDAeMKv8bHP2Q3%2BGz10Tdow0J5KECJI8GVst3IOhf7IVut1ZxZiSIoG5OqTpzVjsGx2ZT4y7e8NCogwNIoVSJxShrcDzCD%2FhNq&X-Amz-Signature=8d006939fdd3b1f61a1813254777ebe83a0f0a95f70aed4b64bc6f6a56aff3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCLBIYD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFEtIQKa11ClllMO9noWB1IrTt0MSSjnTOhgT9Y19WBcAiAqUun72Xz8ZbiHs444EXfsibqVOq6dnjo23B12a3GNQSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMXdUE4%2B%2BLiwDmkMkqKtwDNlUOH%2Brn8gABDD5B0m%2FMorvbrF1rDEY%2BKIzoIy04yLd%2FInz%2FdQpzrmNvJ28UU50GZIBJb0SU921urtZ2%2FzYvshrDiHnHy%2FbZWA6FL72v5qzVmkJCW8H4AN1GHHdWEmCaF63RWVQJTIXy0e2oZECZoqs4rafq6R6rXJy6L5YbP31c92i3blINB4RzsDFNxl5erXR5IWj7ThGoR4AWxLJAzloLRoTmSXiboRP1heRPZaYvkW4USxR1yGs%2BqbNcbnzHnJ7pWmd4K%2BArWLXiC5Zy4enURHIQ%2Fn1Fpt02%2F3URRdDqcs8STISFH0kWsJHoK0qzaoptups2S7ohhrzU5Xz%2BHE356txzhbx%2Fyk8EOQ%2Bq8I0Uuu5P1fLfzevmIqeXiwQHvi9h%2FoCXNg3zeQaaJxYPEyfzypdDJbni2mDBu%2Brb0hTMGw4PeT2jZ3qcl2yFC4orLsatbVwHjkTh0glpusJMRbetzIl9GzdLWEsAFnsmtqL%2B4B6CHhgK7TV1YhJ9AjnpPByYBdLVc6w0msTThC841Gsl%2B63R0l11wBolrYpgcZsPMw2g54sqGt2OKt0JvwZUX4iipht1zez2O0i0V3uAkxDIw3CiDtYucfFrY1EbemcgcE6rG45eUUAxpMIwrITZwwY6pgHJTEjbnar9f5QQ1lFazyvK7vMJez0GaPlvpiQ1bBxlLNTl43iWlb21KIsDPpkHI49IfEpqQ9jmHDIltpYq%2BAKA8ScFibAa2oKzdEJ4eL97WUtHdGCNCEOrLxoyjoDDAeMKv8bHP2Q3%2BGz10Tdow0J5KECJI8GVst3IOhf7IVut1ZxZiSIoG5OqTpzVjsGx2ZT4y7e8NCogwNIoVSJxShrcDzCD%2FhNq&X-Amz-Signature=cbc7a5a20ab111817813495ce1419b1a2e5f46028e730264513c4bdd4be76362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
