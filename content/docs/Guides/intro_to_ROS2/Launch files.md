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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FWLFWR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6INjt%2FwHDBMq0%2FDhY%2BDBHZRop51efLSVxE8ZK6G8ZpAiEA6vel118OoK6Ao9zZnF5VD8gI0UvwhMPguxJPkWoo5Xcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNGHMjXmMkNc0uC6PCrcA4sqEw%2BpK97PCE3bCaNr0XuWCVG72OxBTc92smeGzbM7s902XyFYJhW4aC2bNQMXPTBKvEDHqhbterqNe0GQ%2Bvoi42%2F5TH5Akaz%2FY7mIf6zYcuZHKSOF9I8f75iZWlYsoibz5cKWatz6Gt5OHwHEU4lu%2Fy1kH9ejfzHohbEY4Jrxh%2BkMHS7N5Chw%2Bl3J05ro%2BrTwig8mX%2FzcG7qwGI46RZxBnRaeVPMJzwkzcujrpI767P5wXzQQwZV%2Bb39lA41nPmPi6jQwyjmbfbTD5p%2B2kHoDmDXeCoFjBEqxpK60EtohznoOpkXAC%2Bp1%2BgapJoBbCut%2FQOAu8AllknS1nZT8YDnA1kEFnxx6KaA9jQ7FyzbQjfti8iQ5Wss22e4tEzbybhYuaC1ei1vkgfPVlSHF80hi2AXEYaQx6uRN8PNkFgYJ%2B2Bxc8NrXaTnZtCKI2ij7rZWNMFkhOd4YJnTmlHGpAOoDwZJFjVR%2BsM7coWorneIRGSig1SIQj24C89sZ6LUGx2DkZLgcWGaKAG9CpMDMnJftPZ95fHmSKLs84Z2UYFmzUP2YbyWPG6CAGOGHQuzZe0Qbfd8HWVjQYh9pZYFPpRX5WivbtLfkWI2BkDXfeKMCeRjDH9LtqGre%2F3IMPaVkb8GOqUBkoylqwgqmvCWF5S75GUKVUMCTZhE9DIjoGA0oMbVht4L9PnMpHGSNZ5HPR7OrGKZinHkQFL9y4dCav2eKedYnpPPFt8tCXhaZaT7lwbJ6SI2tdqVh%2FYizfhkDTU8hN5WoL5a3bIAjbPTAtM3m2PE%2BBRVzTJm1YPsBbATutikynAwJj8lkudaPnxfjyC7pbU91vIixuUAR%2BCBa7zOTpmlCnMJK%2Fgx&X-Amz-Signature=4d1ac30e2c2124c757f9876ab3bc6c75a083d1e11c543b42958eead676bf4dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FWLFWR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6INjt%2FwHDBMq0%2FDhY%2BDBHZRop51efLSVxE8ZK6G8ZpAiEA6vel118OoK6Ao9zZnF5VD8gI0UvwhMPguxJPkWoo5Xcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNGHMjXmMkNc0uC6PCrcA4sqEw%2BpK97PCE3bCaNr0XuWCVG72OxBTc92smeGzbM7s902XyFYJhW4aC2bNQMXPTBKvEDHqhbterqNe0GQ%2Bvoi42%2F5TH5Akaz%2FY7mIf6zYcuZHKSOF9I8f75iZWlYsoibz5cKWatz6Gt5OHwHEU4lu%2Fy1kH9ejfzHohbEY4Jrxh%2BkMHS7N5Chw%2Bl3J05ro%2BrTwig8mX%2FzcG7qwGI46RZxBnRaeVPMJzwkzcujrpI767P5wXzQQwZV%2Bb39lA41nPmPi6jQwyjmbfbTD5p%2B2kHoDmDXeCoFjBEqxpK60EtohznoOpkXAC%2Bp1%2BgapJoBbCut%2FQOAu8AllknS1nZT8YDnA1kEFnxx6KaA9jQ7FyzbQjfti8iQ5Wss22e4tEzbybhYuaC1ei1vkgfPVlSHF80hi2AXEYaQx6uRN8PNkFgYJ%2B2Bxc8NrXaTnZtCKI2ij7rZWNMFkhOd4YJnTmlHGpAOoDwZJFjVR%2BsM7coWorneIRGSig1SIQj24C89sZ6LUGx2DkZLgcWGaKAG9CpMDMnJftPZ95fHmSKLs84Z2UYFmzUP2YbyWPG6CAGOGHQuzZe0Qbfd8HWVjQYh9pZYFPpRX5WivbtLfkWI2BkDXfeKMCeRjDH9LtqGre%2F3IMPaVkb8GOqUBkoylqwgqmvCWF5S75GUKVUMCTZhE9DIjoGA0oMbVht4L9PnMpHGSNZ5HPR7OrGKZinHkQFL9y4dCav2eKedYnpPPFt8tCXhaZaT7lwbJ6SI2tdqVh%2FYizfhkDTU8hN5WoL5a3bIAjbPTAtM3m2PE%2BBRVzTJm1YPsBbATutikynAwJj8lkudaPnxfjyC7pbU91vIixuUAR%2BCBa7zOTpmlCnMJK%2Fgx&X-Amz-Signature=a27d38811220223ccb5a5b3bba2f3aaa4eddfc36dbdd46f44ce3ce24413642fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655FWLFWR%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6INjt%2FwHDBMq0%2FDhY%2BDBHZRop51efLSVxE8ZK6G8ZpAiEA6vel118OoK6Ao9zZnF5VD8gI0UvwhMPguxJPkWoo5Xcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNGHMjXmMkNc0uC6PCrcA4sqEw%2BpK97PCE3bCaNr0XuWCVG72OxBTc92smeGzbM7s902XyFYJhW4aC2bNQMXPTBKvEDHqhbterqNe0GQ%2Bvoi42%2F5TH5Akaz%2FY7mIf6zYcuZHKSOF9I8f75iZWlYsoibz5cKWatz6Gt5OHwHEU4lu%2Fy1kH9ejfzHohbEY4Jrxh%2BkMHS7N5Chw%2Bl3J05ro%2BrTwig8mX%2FzcG7qwGI46RZxBnRaeVPMJzwkzcujrpI767P5wXzQQwZV%2Bb39lA41nPmPi6jQwyjmbfbTD5p%2B2kHoDmDXeCoFjBEqxpK60EtohznoOpkXAC%2Bp1%2BgapJoBbCut%2FQOAu8AllknS1nZT8YDnA1kEFnxx6KaA9jQ7FyzbQjfti8iQ5Wss22e4tEzbybhYuaC1ei1vkgfPVlSHF80hi2AXEYaQx6uRN8PNkFgYJ%2B2Bxc8NrXaTnZtCKI2ij7rZWNMFkhOd4YJnTmlHGpAOoDwZJFjVR%2BsM7coWorneIRGSig1SIQj24C89sZ6LUGx2DkZLgcWGaKAG9CpMDMnJftPZ95fHmSKLs84Z2UYFmzUP2YbyWPG6CAGOGHQuzZe0Qbfd8HWVjQYh9pZYFPpRX5WivbtLfkWI2BkDXfeKMCeRjDH9LtqGre%2F3IMPaVkb8GOqUBkoylqwgqmvCWF5S75GUKVUMCTZhE9DIjoGA0oMbVht4L9PnMpHGSNZ5HPR7OrGKZinHkQFL9y4dCav2eKedYnpPPFt8tCXhaZaT7lwbJ6SI2tdqVh%2FYizfhkDTU8hN5WoL5a3bIAjbPTAtM3m2PE%2BBRVzTJm1YPsBbATutikynAwJj8lkudaPnxfjyC7pbU91vIixuUAR%2BCBa7zOTpmlCnMJK%2Fgx&X-Amz-Signature=27974bf244f08c6f4bbf5e5fc40892fd46034d10aa58030b19c748fc6bfed101&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
