---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLCFAFS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDWGb38VmSdYfqJGqrPrHV7km6a%2B88GDmjdBrwUppRZ7gIgLKWP6w%2FzYw5zENKKwnyImWg0CyAuPX%2BUssItaJG0ZU4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIk9DwShriOdByfw5CrcAwkSmg0xk426X0mLTPiwtMExwk%2BEFW%2B%2Bz2GSVplATh17ni5rwtMUU9IXofo5pnSQ8J6%2BJg04LDoDkG8TKeUvEv8AGCtqJ7y9CkwyhlBWNSGOpT1w%2FxsxsFf0NHBm82Tf1pOwbjoqSZJNh93vHi%2Fv5QYyYTjFY3jD2s8hS59d1FgWt4SGIxLGq43nm0ivmmfpvGoY1%2Br6tLnA6Bei546b%2BbSj9nN4s77vsCLWcpqysSChH5SXqTJ42IVOH%2BpaoaFvYuOPtykLyY%2FGlvdsM7WhqR2OV%2BgiYTE9NlCVQOvSDYBD0dAuUQqLzvZxsiHx%2B7X%2FW5wRfljgt9XGwKP%2FHw9J2dZuN2CCpZ%2FrMLV%2BGD1oCKeajclIixPOGJVmaUBRqN1%2Fr0AFklxRf%2FHW%2B7mE1NDh1aRbifJryd9r5TCRrah6%2BnZfsJkJGxMwBnHUpkVAETyVhwo1cvOmPWgV2GmaP4tdpI9%2F3UHGv3nUXh3kfgfSq%2FIiKRDsNziPKCjYEyJ%2F383wR6nlKZHaJYcDRShNga6KEfhTGMxN%2FQ4tsCsy7gSGl9ajUG8yZztjvZSOHn0Dg%2BQ9Rr4BhPRrSga216h%2BYfeDwFuf2g76B6f09GwMVrCMOaCh9AWbV7u%2FGYcLuRDXMKeOz8QGOqUBf2WBfWsNjAOtle9t13lMDManMMVX8t2I%2Fn%2FHk0A7Ja6UyIT7WhEyI1wNuBIiCBGnKTlhgAc23ixj%2BHcE7VdfVCg1%2FybtpFQhNneCwMk6VkNPKHTCsM68%2FOcNZ2YSitfP1LYT9rt%2B%2BpkE%2FTY39wwpvfnOcldFlLrFtGKmx9lm840FA%2BGhOYrEZyRdKj1NZcrTTbcCOszHtfeg2u14toIKvWSU7ogO&X-Amz-Signature=d3f76f44ce5ae6e202fef906737dd0c3d08fe791549de313ed59e07ff9e8e82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLCFAFS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDWGb38VmSdYfqJGqrPrHV7km6a%2B88GDmjdBrwUppRZ7gIgLKWP6w%2FzYw5zENKKwnyImWg0CyAuPX%2BUssItaJG0ZU4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIk9DwShriOdByfw5CrcAwkSmg0xk426X0mLTPiwtMExwk%2BEFW%2B%2Bz2GSVplATh17ni5rwtMUU9IXofo5pnSQ8J6%2BJg04LDoDkG8TKeUvEv8AGCtqJ7y9CkwyhlBWNSGOpT1w%2FxsxsFf0NHBm82Tf1pOwbjoqSZJNh93vHi%2Fv5QYyYTjFY3jD2s8hS59d1FgWt4SGIxLGq43nm0ivmmfpvGoY1%2Br6tLnA6Bei546b%2BbSj9nN4s77vsCLWcpqysSChH5SXqTJ42IVOH%2BpaoaFvYuOPtykLyY%2FGlvdsM7WhqR2OV%2BgiYTE9NlCVQOvSDYBD0dAuUQqLzvZxsiHx%2B7X%2FW5wRfljgt9XGwKP%2FHw9J2dZuN2CCpZ%2FrMLV%2BGD1oCKeajclIixPOGJVmaUBRqN1%2Fr0AFklxRf%2FHW%2B7mE1NDh1aRbifJryd9r5TCRrah6%2BnZfsJkJGxMwBnHUpkVAETyVhwo1cvOmPWgV2GmaP4tdpI9%2F3UHGv3nUXh3kfgfSq%2FIiKRDsNziPKCjYEyJ%2F383wR6nlKZHaJYcDRShNga6KEfhTGMxN%2FQ4tsCsy7gSGl9ajUG8yZztjvZSOHn0Dg%2BQ9Rr4BhPRrSga216h%2BYfeDwFuf2g76B6f09GwMVrCMOaCh9AWbV7u%2FGYcLuRDXMKeOz8QGOqUBf2WBfWsNjAOtle9t13lMDManMMVX8t2I%2Fn%2FHk0A7Ja6UyIT7WhEyI1wNuBIiCBGnKTlhgAc23ixj%2BHcE7VdfVCg1%2FybtpFQhNneCwMk6VkNPKHTCsM68%2FOcNZ2YSitfP1LYT9rt%2B%2BpkE%2FTY39wwpvfnOcldFlLrFtGKmx9lm840FA%2BGhOYrEZyRdKj1NZcrTTbcCOszHtfeg2u14toIKvWSU7ogO&X-Amz-Signature=0322879440a181ff39d88ef2ae7907b304c53288417d34391ca66f1a54c5a9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOLCFAFS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDWGb38VmSdYfqJGqrPrHV7km6a%2B88GDmjdBrwUppRZ7gIgLKWP6w%2FzYw5zENKKwnyImWg0CyAuPX%2BUssItaJG0ZU4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIk9DwShriOdByfw5CrcAwkSmg0xk426X0mLTPiwtMExwk%2BEFW%2B%2Bz2GSVplATh17ni5rwtMUU9IXofo5pnSQ8J6%2BJg04LDoDkG8TKeUvEv8AGCtqJ7y9CkwyhlBWNSGOpT1w%2FxsxsFf0NHBm82Tf1pOwbjoqSZJNh93vHi%2Fv5QYyYTjFY3jD2s8hS59d1FgWt4SGIxLGq43nm0ivmmfpvGoY1%2Br6tLnA6Bei546b%2BbSj9nN4s77vsCLWcpqysSChH5SXqTJ42IVOH%2BpaoaFvYuOPtykLyY%2FGlvdsM7WhqR2OV%2BgiYTE9NlCVQOvSDYBD0dAuUQqLzvZxsiHx%2B7X%2FW5wRfljgt9XGwKP%2FHw9J2dZuN2CCpZ%2FrMLV%2BGD1oCKeajclIixPOGJVmaUBRqN1%2Fr0AFklxRf%2FHW%2B7mE1NDh1aRbifJryd9r5TCRrah6%2BnZfsJkJGxMwBnHUpkVAETyVhwo1cvOmPWgV2GmaP4tdpI9%2F3UHGv3nUXh3kfgfSq%2FIiKRDsNziPKCjYEyJ%2F383wR6nlKZHaJYcDRShNga6KEfhTGMxN%2FQ4tsCsy7gSGl9ajUG8yZztjvZSOHn0Dg%2BQ9Rr4BhPRrSga216h%2BYfeDwFuf2g76B6f09GwMVrCMOaCh9AWbV7u%2FGYcLuRDXMKeOz8QGOqUBf2WBfWsNjAOtle9t13lMDManMMVX8t2I%2Fn%2FHk0A7Ja6UyIT7WhEyI1wNuBIiCBGnKTlhgAc23ixj%2BHcE7VdfVCg1%2FybtpFQhNneCwMk6VkNPKHTCsM68%2FOcNZ2YSitfP1LYT9rt%2B%2BpkE%2FTY39wwpvfnOcldFlLrFtGKmx9lm840FA%2BGhOYrEZyRdKj1NZcrTTbcCOszHtfeg2u14toIKvWSU7ogO&X-Amz-Signature=889bb5c2b74bbf14ab5c0b308e2b164ab8603452db74449dfd38c954fa1215e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
