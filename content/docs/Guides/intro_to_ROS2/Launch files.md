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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTUVUXLC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnJnuuCM7EtQlEAWPLAOEfs3mpbz7WGTj8syYSgT0QRAiEA%2FOiVT6bOARz69YZgzO6BtI%2B0VrNyd%2BHyZDiiN6bdFv0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJZ5SGi%2Fdhde33TXNCrcA23yPxj3Lp7pZTGYamrfhaL03CRISermyNG84YOVbeYrcz75KGPmO4tI%2FdbdeWmk1fx5rHgJwTk2gBDqWYVia7lUfjtSqZdZVB92OpFP3FET%2BHIklkNH9ZYVverTUqqdNIpi4p6VOqBOPcYenNzg0VFTY0sITRl6net24sq%2BFUrQvXtg%2BaCIqPGheFmJbh2CYx9brralU7ST18rS7ivkAFbgP06lSFfxmvTlQiJMDcC4H6ROyQw%2B48%2FqErRMEg1TPP9EAU%2FfLKijth%2FfBRmZU4JyogHgN040uI%2FxTzPhbNReWrRvQnuLlMAWoP%2BLuSyCTSNQNfZ2YDFtJzuAWSGO4nlf0JaI3Iq4VR%2BfBWcCFn1HN8h2vzRWeT9brMT8eRtLXLX7p02weF62jVIbjTp30N5KkS9o9OkRAi4MI3RAPBBA1pFV3T9JfGFL4yt32orSnjlMSraQbLPChzyuxFh8zP3Rq9XMk0W6G1sCstYMmQS%2BnXkv9aak8XtDIK0C9cV57sd7MAdtopOTJldXs3npI5otkx16Qqju8tYezHHzqvOuD7uQB9lzNzq7sjrC5JJWDOm75u3Q4hzMro0m0Tda%2FPMOPJpOojp8f0R0gW3XPAh6Ul7Kxz7z%2FJK%2F8gHuMLS7uMAGOqUBsUaUypgYGDLjvTWvMTGzfgMWZlLL7b7b5TfkaMOU%2BF44JOLpZow%2F1aeuFfqsVUCo%2BFBmyveVmwbhkAUmxQE8XOx3%2FnJjEsyYYtDY0pQ8mnq1CrWynhQta88IXjYz0CdM4RorGlCByMS08k6XPpD8YS9tcfgo91oLL4nvwUhl4i%2BlW7F1EvbFen6S9ARnfeTH3hiPudvDZiZIavy0E%2FCPXnB%2F532t&X-Amz-Signature=8f62b86c294157d181cb98272f67370df58c3417d3bee35bbad90d0e5b586d82&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTUVUXLC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnJnuuCM7EtQlEAWPLAOEfs3mpbz7WGTj8syYSgT0QRAiEA%2FOiVT6bOARz69YZgzO6BtI%2B0VrNyd%2BHyZDiiN6bdFv0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJZ5SGi%2Fdhde33TXNCrcA23yPxj3Lp7pZTGYamrfhaL03CRISermyNG84YOVbeYrcz75KGPmO4tI%2FdbdeWmk1fx5rHgJwTk2gBDqWYVia7lUfjtSqZdZVB92OpFP3FET%2BHIklkNH9ZYVverTUqqdNIpi4p6VOqBOPcYenNzg0VFTY0sITRl6net24sq%2BFUrQvXtg%2BaCIqPGheFmJbh2CYx9brralU7ST18rS7ivkAFbgP06lSFfxmvTlQiJMDcC4H6ROyQw%2B48%2FqErRMEg1TPP9EAU%2FfLKijth%2FfBRmZU4JyogHgN040uI%2FxTzPhbNReWrRvQnuLlMAWoP%2BLuSyCTSNQNfZ2YDFtJzuAWSGO4nlf0JaI3Iq4VR%2BfBWcCFn1HN8h2vzRWeT9brMT8eRtLXLX7p02weF62jVIbjTp30N5KkS9o9OkRAi4MI3RAPBBA1pFV3T9JfGFL4yt32orSnjlMSraQbLPChzyuxFh8zP3Rq9XMk0W6G1sCstYMmQS%2BnXkv9aak8XtDIK0C9cV57sd7MAdtopOTJldXs3npI5otkx16Qqju8tYezHHzqvOuD7uQB9lzNzq7sjrC5JJWDOm75u3Q4hzMro0m0Tda%2FPMOPJpOojp8f0R0gW3XPAh6Ul7Kxz7z%2FJK%2F8gHuMLS7uMAGOqUBsUaUypgYGDLjvTWvMTGzfgMWZlLL7b7b5TfkaMOU%2BF44JOLpZow%2F1aeuFfqsVUCo%2BFBmyveVmwbhkAUmxQE8XOx3%2FnJjEsyYYtDY0pQ8mnq1CrWynhQta88IXjYz0CdM4RorGlCByMS08k6XPpD8YS9tcfgo91oLL4nvwUhl4i%2BlW7F1EvbFen6S9ARnfeTH3hiPudvDZiZIavy0E%2FCPXnB%2F532t&X-Amz-Signature=5f3c05d2c5dca56bf5a3e8fac736aa3fd81feac2698c6eb79d6494b5a7d46aec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTUVUXLC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnJnuuCM7EtQlEAWPLAOEfs3mpbz7WGTj8syYSgT0QRAiEA%2FOiVT6bOARz69YZgzO6BtI%2B0VrNyd%2BHyZDiiN6bdFv0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJZ5SGi%2Fdhde33TXNCrcA23yPxj3Lp7pZTGYamrfhaL03CRISermyNG84YOVbeYrcz75KGPmO4tI%2FdbdeWmk1fx5rHgJwTk2gBDqWYVia7lUfjtSqZdZVB92OpFP3FET%2BHIklkNH9ZYVverTUqqdNIpi4p6VOqBOPcYenNzg0VFTY0sITRl6net24sq%2BFUrQvXtg%2BaCIqPGheFmJbh2CYx9brralU7ST18rS7ivkAFbgP06lSFfxmvTlQiJMDcC4H6ROyQw%2B48%2FqErRMEg1TPP9EAU%2FfLKijth%2FfBRmZU4JyogHgN040uI%2FxTzPhbNReWrRvQnuLlMAWoP%2BLuSyCTSNQNfZ2YDFtJzuAWSGO4nlf0JaI3Iq4VR%2BfBWcCFn1HN8h2vzRWeT9brMT8eRtLXLX7p02weF62jVIbjTp30N5KkS9o9OkRAi4MI3RAPBBA1pFV3T9JfGFL4yt32orSnjlMSraQbLPChzyuxFh8zP3Rq9XMk0W6G1sCstYMmQS%2BnXkv9aak8XtDIK0C9cV57sd7MAdtopOTJldXs3npI5otkx16Qqju8tYezHHzqvOuD7uQB9lzNzq7sjrC5JJWDOm75u3Q4hzMro0m0Tda%2FPMOPJpOojp8f0R0gW3XPAh6Ul7Kxz7z%2FJK%2F8gHuMLS7uMAGOqUBsUaUypgYGDLjvTWvMTGzfgMWZlLL7b7b5TfkaMOU%2BF44JOLpZow%2F1aeuFfqsVUCo%2BFBmyveVmwbhkAUmxQE8XOx3%2FnJjEsyYYtDY0pQ8mnq1CrWynhQta88IXjYz0CdM4RorGlCByMS08k6XPpD8YS9tcfgo91oLL4nvwUhl4i%2BlW7F1EvbFen6S9ARnfeTH3hiPudvDZiZIavy0E%2FCPXnB%2F532t&X-Amz-Signature=cf9b73014060294d147758a1f2f79314dd5dd04ee4c4fee247a4f5369319311c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
