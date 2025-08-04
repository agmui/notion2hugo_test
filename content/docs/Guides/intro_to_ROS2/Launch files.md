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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVNUG3C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG5IUfArMFOZLayVUeZz50Y8lYDeKRNQEGCZu5F6r77nAiEA6qGH%2BXtKdo2G%2F53Cs3NDw5JHPeeMUjRq7QTNQ5qsIfoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEqU2I3v8ain8dJqcCrcAxsZCcZ02qI1gCYr2EKd4n%2BPfJ%2FUv3i5cueVzsWsTuBiZzIzsog8KAJ%2BN0s0G025GmvtmYG5M531Jq4Yx7yAWWxOQ%2FV49fl1OhjYqyscATWFQZJKfE%2FWZQL9pptprky4sLCx%2F7VFvT%2Fjd6MHxHQgEyXlT4DXTmy7yYr%2FjTq8tRAXlUMu8HvW3diC0IjmkzQ1eZ93uosmeQGQ8ZLOX0ZC4o0L1YEr3Q%2BDdql91NT3vjklh8NDZ3S0KEp3D9h6P7GT5layyBE83%2BEWzG6kS0%2By8i9D0%2FFgcE%2FWvoeFa2BGZoXWjJuzxcmFI7vhrVdWDkQurkwHQo6Tm2NwqZD9ApZT3WtnzhSTzW01pFCLEaNpSgW%2BJ5pyNaFeXCo3tE4eeHYu0DfhL3oCTLlQd2IWlEHIOl00H4xr91fnrkBaxdQon3sGFOJqkulMLualB%2FFJCsWQNMxeCMcKJpkQiA3P5crsNlFdSwTFyI1SVSjRsgS1weRRlmev7RPO%2BupObOIUzHLkAyOlRMt%2Bs4MrYsGFQ58%2BJ02k8BT0pEcQg7xFGA3Pc6lhL0IbDaXgh3o3L3F%2FxboTSQSoobPbH9mto1bqXpp3dpgaVksUMWET%2FhlxDI24qofCZkz9T2NhhE8R7JPxMLbpwMQGOqUBiCx53W3HdYLSmOkaOBlzcSjzUh8TaqsFzEYbxmn742525v%2FUBQzeMn9qqDWVKPUfCnTYC9tF6E6AWj0xvYGdKL59YT%2B2yCMO%2Bum2Yh3kWCCv2Xey%2BvkuN8ZkY5V61WZyIVKFuXIqN7q5%2Fm4sdypv1w3byFBoiFeMncy2yOfS1%2FHZlnNCmgpbjnmDceQ0CPjt9iuKKZnbNgyI0gH0t%2BZWBOh%2F%2F9Ol&X-Amz-Signature=377fd9ed3d8b09868982eb1ac43fe5b0aadbd165434d1f08234095816f2a575b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVNUG3C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG5IUfArMFOZLayVUeZz50Y8lYDeKRNQEGCZu5F6r77nAiEA6qGH%2BXtKdo2G%2F53Cs3NDw5JHPeeMUjRq7QTNQ5qsIfoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEqU2I3v8ain8dJqcCrcAxsZCcZ02qI1gCYr2EKd4n%2BPfJ%2FUv3i5cueVzsWsTuBiZzIzsog8KAJ%2BN0s0G025GmvtmYG5M531Jq4Yx7yAWWxOQ%2FV49fl1OhjYqyscATWFQZJKfE%2FWZQL9pptprky4sLCx%2F7VFvT%2Fjd6MHxHQgEyXlT4DXTmy7yYr%2FjTq8tRAXlUMu8HvW3diC0IjmkzQ1eZ93uosmeQGQ8ZLOX0ZC4o0L1YEr3Q%2BDdql91NT3vjklh8NDZ3S0KEp3D9h6P7GT5layyBE83%2BEWzG6kS0%2By8i9D0%2FFgcE%2FWvoeFa2BGZoXWjJuzxcmFI7vhrVdWDkQurkwHQo6Tm2NwqZD9ApZT3WtnzhSTzW01pFCLEaNpSgW%2BJ5pyNaFeXCo3tE4eeHYu0DfhL3oCTLlQd2IWlEHIOl00H4xr91fnrkBaxdQon3sGFOJqkulMLualB%2FFJCsWQNMxeCMcKJpkQiA3P5crsNlFdSwTFyI1SVSjRsgS1weRRlmev7RPO%2BupObOIUzHLkAyOlRMt%2Bs4MrYsGFQ58%2BJ02k8BT0pEcQg7xFGA3Pc6lhL0IbDaXgh3o3L3F%2FxboTSQSoobPbH9mto1bqXpp3dpgaVksUMWET%2FhlxDI24qofCZkz9T2NhhE8R7JPxMLbpwMQGOqUBiCx53W3HdYLSmOkaOBlzcSjzUh8TaqsFzEYbxmn742525v%2FUBQzeMn9qqDWVKPUfCnTYC9tF6E6AWj0xvYGdKL59YT%2B2yCMO%2Bum2Yh3kWCCv2Xey%2BvkuN8ZkY5V61WZyIVKFuXIqN7q5%2Fm4sdypv1w3byFBoiFeMncy2yOfS1%2FHZlnNCmgpbjnmDceQ0CPjt9iuKKZnbNgyI0gH0t%2BZWBOh%2F%2F9Ol&X-Amz-Signature=8a73eff1ff6d261868dc44d0e46d4faddf235440d84c57b7da25bce58801c5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVNUG3C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG5IUfArMFOZLayVUeZz50Y8lYDeKRNQEGCZu5F6r77nAiEA6qGH%2BXtKdo2G%2F53Cs3NDw5JHPeeMUjRq7QTNQ5qsIfoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEqU2I3v8ain8dJqcCrcAxsZCcZ02qI1gCYr2EKd4n%2BPfJ%2FUv3i5cueVzsWsTuBiZzIzsog8KAJ%2BN0s0G025GmvtmYG5M531Jq4Yx7yAWWxOQ%2FV49fl1OhjYqyscATWFQZJKfE%2FWZQL9pptprky4sLCx%2F7VFvT%2Fjd6MHxHQgEyXlT4DXTmy7yYr%2FjTq8tRAXlUMu8HvW3diC0IjmkzQ1eZ93uosmeQGQ8ZLOX0ZC4o0L1YEr3Q%2BDdql91NT3vjklh8NDZ3S0KEp3D9h6P7GT5layyBE83%2BEWzG6kS0%2By8i9D0%2FFgcE%2FWvoeFa2BGZoXWjJuzxcmFI7vhrVdWDkQurkwHQo6Tm2NwqZD9ApZT3WtnzhSTzW01pFCLEaNpSgW%2BJ5pyNaFeXCo3tE4eeHYu0DfhL3oCTLlQd2IWlEHIOl00H4xr91fnrkBaxdQon3sGFOJqkulMLualB%2FFJCsWQNMxeCMcKJpkQiA3P5crsNlFdSwTFyI1SVSjRsgS1weRRlmev7RPO%2BupObOIUzHLkAyOlRMt%2Bs4MrYsGFQ58%2BJ02k8BT0pEcQg7xFGA3Pc6lhL0IbDaXgh3o3L3F%2FxboTSQSoobPbH9mto1bqXpp3dpgaVksUMWET%2FhlxDI24qofCZkz9T2NhhE8R7JPxMLbpwMQGOqUBiCx53W3HdYLSmOkaOBlzcSjzUh8TaqsFzEYbxmn742525v%2FUBQzeMn9qqDWVKPUfCnTYC9tF6E6AWj0xvYGdKL59YT%2B2yCMO%2Bum2Yh3kWCCv2Xey%2BvkuN8ZkY5V61WZyIVKFuXIqN7q5%2Fm4sdypv1w3byFBoiFeMncy2yOfS1%2FHZlnNCmgpbjnmDceQ0CPjt9iuKKZnbNgyI0gH0t%2BZWBOh%2F%2F9Ol&X-Amz-Signature=4f3cc1a38da53ccf6d7315fb434aa7a67c0f0a3405d0bc97fb7601062fe24c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
