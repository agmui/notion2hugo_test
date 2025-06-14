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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5322B6U%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFVTO2%2FsdAJHJs83ZsuPyGRmRsdglQZMwwui3ofYiBPwAiEAqS9x9c93vbmbBnMby3NAALo0fPm4TeC1I7U8ikELg94q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMqTqMAqaWayLYlLLCrcA79hz0AhVauRCWHLsiFRhLMWiSfcfG8slbUjomNW5us3GsvcTz0mGdT4e2Bjcs1%2BHeC03J8%2BQEKu2sxwqVWhtJ%2FMyZUgqk8vCNpwXj00Ipx9Uxufe8KpfUivl5ZztR5BtTr12BvucBIybbGo%2Ba5YnUmo4MYf8Kr7GeWbMkI6WPxUhzUyPNUs0NPr%2Bve7iKRIw8P9eqLNtTQC1Sg9PS7sB2hgr2A1PXBoJk4VAFrvccwcxIt6vYAzv9AJHoKJpkfKuRHGgrkey8BRlZGO7svyAHWLEimxfo7rX%2FxMQigLBH%2BiNBcNCb8r8zssjs49L8twd3bNe8534K4tE%2FQf7Xsm0nVIf8hIgL2BER0p2Z2i96uoTATWvXbKJLhYq0y8ocP95cp7aMc%2F2J7d9kAhxsINxPJ0TrRKa21rtQIPN2K9e639k8EUqyh7RgXl3zwh2m4cF1nm1x3rzvNPruutr4iT%2BNDGeWfhn8o9pCliizqwnu2uO13X7nEHXLjN9Zfo9bv9IeTcD6NdcuJqJDAaxWykKzCfCh%2BQTFP1qoeVC3hLlhHOwgueUpky%2Fv8QdkERREYex3UsLO7qmGSWT7%2BAv1gHt1gF5oT7%2BrIkKBAiQJAdUpSKYr7nspMfXibeJRcrMPW7tMIGOqUBGc%2B6J9VE9o%2F5W%2Bw%2FBaPIWjqltdeKCuM2CWQeoqiCD81G34MfrbqsTIc6%2F9iwVsDCOozzi%2B3BG4qsSJKd0NKjrSGiVPGpon4VLdGzVglYdVMZywqCN3Oro1TWkHJ6lzo91PaHGJ3SEvbJkYoldLy8y7S6%2FGszlNlQXQAn%2BSG45VuBxnQKPZvf%2FReb%2FxlOJkopscq4Hk58DSXTlsO3wOO3P%2FnESyFb&X-Amz-Signature=0f43a5dd8e0e14d89af10f36d8795a7ea424e7dadf597ae7d05ddb7a6f97adfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5322B6U%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFVTO2%2FsdAJHJs83ZsuPyGRmRsdglQZMwwui3ofYiBPwAiEAqS9x9c93vbmbBnMby3NAALo0fPm4TeC1I7U8ikELg94q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMqTqMAqaWayLYlLLCrcA79hz0AhVauRCWHLsiFRhLMWiSfcfG8slbUjomNW5us3GsvcTz0mGdT4e2Bjcs1%2BHeC03J8%2BQEKu2sxwqVWhtJ%2FMyZUgqk8vCNpwXj00Ipx9Uxufe8KpfUivl5ZztR5BtTr12BvucBIybbGo%2Ba5YnUmo4MYf8Kr7GeWbMkI6WPxUhzUyPNUs0NPr%2Bve7iKRIw8P9eqLNtTQC1Sg9PS7sB2hgr2A1PXBoJk4VAFrvccwcxIt6vYAzv9AJHoKJpkfKuRHGgrkey8BRlZGO7svyAHWLEimxfo7rX%2FxMQigLBH%2BiNBcNCb8r8zssjs49L8twd3bNe8534K4tE%2FQf7Xsm0nVIf8hIgL2BER0p2Z2i96uoTATWvXbKJLhYq0y8ocP95cp7aMc%2F2J7d9kAhxsINxPJ0TrRKa21rtQIPN2K9e639k8EUqyh7RgXl3zwh2m4cF1nm1x3rzvNPruutr4iT%2BNDGeWfhn8o9pCliizqwnu2uO13X7nEHXLjN9Zfo9bv9IeTcD6NdcuJqJDAaxWykKzCfCh%2BQTFP1qoeVC3hLlhHOwgueUpky%2Fv8QdkERREYex3UsLO7qmGSWT7%2BAv1gHt1gF5oT7%2BrIkKBAiQJAdUpSKYr7nspMfXibeJRcrMPW7tMIGOqUBGc%2B6J9VE9o%2F5W%2Bw%2FBaPIWjqltdeKCuM2CWQeoqiCD81G34MfrbqsTIc6%2F9iwVsDCOozzi%2B3BG4qsSJKd0NKjrSGiVPGpon4VLdGzVglYdVMZywqCN3Oro1TWkHJ6lzo91PaHGJ3SEvbJkYoldLy8y7S6%2FGszlNlQXQAn%2BSG45VuBxnQKPZvf%2FReb%2FxlOJkopscq4Hk58DSXTlsO3wOO3P%2FnESyFb&X-Amz-Signature=73f78650104ef539e199e082cbb811c7251ea299be097752319405bbd2e294db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5322B6U%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFVTO2%2FsdAJHJs83ZsuPyGRmRsdglQZMwwui3ofYiBPwAiEAqS9x9c93vbmbBnMby3NAALo0fPm4TeC1I7U8ikELg94q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMqTqMAqaWayLYlLLCrcA79hz0AhVauRCWHLsiFRhLMWiSfcfG8slbUjomNW5us3GsvcTz0mGdT4e2Bjcs1%2BHeC03J8%2BQEKu2sxwqVWhtJ%2FMyZUgqk8vCNpwXj00Ipx9Uxufe8KpfUivl5ZztR5BtTr12BvucBIybbGo%2Ba5YnUmo4MYf8Kr7GeWbMkI6WPxUhzUyPNUs0NPr%2Bve7iKRIw8P9eqLNtTQC1Sg9PS7sB2hgr2A1PXBoJk4VAFrvccwcxIt6vYAzv9AJHoKJpkfKuRHGgrkey8BRlZGO7svyAHWLEimxfo7rX%2FxMQigLBH%2BiNBcNCb8r8zssjs49L8twd3bNe8534K4tE%2FQf7Xsm0nVIf8hIgL2BER0p2Z2i96uoTATWvXbKJLhYq0y8ocP95cp7aMc%2F2J7d9kAhxsINxPJ0TrRKa21rtQIPN2K9e639k8EUqyh7RgXl3zwh2m4cF1nm1x3rzvNPruutr4iT%2BNDGeWfhn8o9pCliizqwnu2uO13X7nEHXLjN9Zfo9bv9IeTcD6NdcuJqJDAaxWykKzCfCh%2BQTFP1qoeVC3hLlhHOwgueUpky%2Fv8QdkERREYex3UsLO7qmGSWT7%2BAv1gHt1gF5oT7%2BrIkKBAiQJAdUpSKYr7nspMfXibeJRcrMPW7tMIGOqUBGc%2B6J9VE9o%2F5W%2Bw%2FBaPIWjqltdeKCuM2CWQeoqiCD81G34MfrbqsTIc6%2F9iwVsDCOozzi%2B3BG4qsSJKd0NKjrSGiVPGpon4VLdGzVglYdVMZywqCN3Oro1TWkHJ6lzo91PaHGJ3SEvbJkYoldLy8y7S6%2FGszlNlQXQAn%2BSG45VuBxnQKPZvf%2FReb%2FxlOJkopscq4Hk58DSXTlsO3wOO3P%2FnESyFb&X-Amz-Signature=1036e20c34c0cf428c302d0ea7eb3e052e162f1c38acabc1a4abb7839e0b84f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
