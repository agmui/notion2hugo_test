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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLDS27L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWviDzP%2BW9GGWetYoxuvEtKKPErE15TWWNtBH4zRNnMgIgBLXr%2BfIJXD1UDmFlfzMbmnOQBC92xq9CBmHHGwZitdgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJAXrthuZokvE1QxJSrcA6FSysbR6MuAa%2B5XnG51R9ggG5BkKfCNoHn7XogKknifAO6RI9XHCg9Ic10n2V7u%2FIftGO4mdAfDFDp%2B83N4r5pU%2BjpGtk%2Bvxe0RaZkC36Pii5c7Vf2BTBQMmp6XWSZrwyW6ytQmFr5ggz4vT1WL1acpjFhfOry8Coaz2mx69NVYdQzksptem%2Fy20V%2FzoCLhCVpYa8DhiNz%2BmrIDrkF8RyfzIxHOBW1cc35r4%2FVwCF4t%2Fcgm2yCyvgd1m%2BCtL5L5Z4KeGDYXH%2Bq%2Bf8N6lbHqhiSlwyguePITXsp5OXkGK0o5ZBfgAL2Msf1rn6HyL6%2FX7SqbMfDc4z7TDnUoCM89MjbCqBIhasX2FDAcdUTUjWCnqR7mUqt6PaNSuhsCLp84eWLu5sigkep1r1M%2BI8fcgV61AHZ3dcZX%2BJyZmPPHGuQcXM7CQYuQ7EUAz4gvR7k%2FZsr1LOIM0htaoBjB25Y1kZGIBzksem3%2BU%2BiHDQNE9zndV6HKNCMCf7wZJZIsxR3fNV67QciQJeSE2%2BWnKPZhKnX8EG5xZaCqj8YGtZAm5I9Gi72EyK7Y6AGWt3SXpXQjvmMX%2F1djUmwhGKsV%2BgYmORzVlxKJKJR4TUbzwmk8wW0hXGC2WOF%2FyELqZmqRMOPU078GOqUB1n3gmTdRK%2F0LNT1iV2pp7v0Snf767DsNzKzClefUSh%2F7iAHx%2FzzqsyxHmTf6PGe1QswPJ2Xz5wMe8iFBSiYlKVH%2Ffaht9elHJJrG%2FuAaIjXx43uJ1Hw9RV4xSML1QSKrebK1q5Rglw2MmSib4ECgklZjMNxjsSKXqxCxk%2BHo3K3klaeJbdmizvihJjARSg2rQargYLV8CiC4xs079T2jgokbYyTU&X-Amz-Signature=d6318053c5f0d90eabdded26ab936693da1a486b37c17a9017c90309be5c4987&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLDS27L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWviDzP%2BW9GGWetYoxuvEtKKPErE15TWWNtBH4zRNnMgIgBLXr%2BfIJXD1UDmFlfzMbmnOQBC92xq9CBmHHGwZitdgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJAXrthuZokvE1QxJSrcA6FSysbR6MuAa%2B5XnG51R9ggG5BkKfCNoHn7XogKknifAO6RI9XHCg9Ic10n2V7u%2FIftGO4mdAfDFDp%2B83N4r5pU%2BjpGtk%2Bvxe0RaZkC36Pii5c7Vf2BTBQMmp6XWSZrwyW6ytQmFr5ggz4vT1WL1acpjFhfOry8Coaz2mx69NVYdQzksptem%2Fy20V%2FzoCLhCVpYa8DhiNz%2BmrIDrkF8RyfzIxHOBW1cc35r4%2FVwCF4t%2Fcgm2yCyvgd1m%2BCtL5L5Z4KeGDYXH%2Bq%2Bf8N6lbHqhiSlwyguePITXsp5OXkGK0o5ZBfgAL2Msf1rn6HyL6%2FX7SqbMfDc4z7TDnUoCM89MjbCqBIhasX2FDAcdUTUjWCnqR7mUqt6PaNSuhsCLp84eWLu5sigkep1r1M%2BI8fcgV61AHZ3dcZX%2BJyZmPPHGuQcXM7CQYuQ7EUAz4gvR7k%2FZsr1LOIM0htaoBjB25Y1kZGIBzksem3%2BU%2BiHDQNE9zndV6HKNCMCf7wZJZIsxR3fNV67QciQJeSE2%2BWnKPZhKnX8EG5xZaCqj8YGtZAm5I9Gi72EyK7Y6AGWt3SXpXQjvmMX%2F1djUmwhGKsV%2BgYmORzVlxKJKJR4TUbzwmk8wW0hXGC2WOF%2FyELqZmqRMOPU078GOqUB1n3gmTdRK%2F0LNT1iV2pp7v0Snf767DsNzKzClefUSh%2F7iAHx%2FzzqsyxHmTf6PGe1QswPJ2Xz5wMe8iFBSiYlKVH%2Ffaht9elHJJrG%2FuAaIjXx43uJ1Hw9RV4xSML1QSKrebK1q5Rglw2MmSib4ECgklZjMNxjsSKXqxCxk%2BHo3K3klaeJbdmizvihJjARSg2rQargYLV8CiC4xs079T2jgokbYyTU&X-Amz-Signature=71755deda8aa010f6c9193f3e361aee6158c36cac888159eaa8d00ba537628fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLDS27L%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWviDzP%2BW9GGWetYoxuvEtKKPErE15TWWNtBH4zRNnMgIgBLXr%2BfIJXD1UDmFlfzMbmnOQBC92xq9CBmHHGwZitdgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJAXrthuZokvE1QxJSrcA6FSysbR6MuAa%2B5XnG51R9ggG5BkKfCNoHn7XogKknifAO6RI9XHCg9Ic10n2V7u%2FIftGO4mdAfDFDp%2B83N4r5pU%2BjpGtk%2Bvxe0RaZkC36Pii5c7Vf2BTBQMmp6XWSZrwyW6ytQmFr5ggz4vT1WL1acpjFhfOry8Coaz2mx69NVYdQzksptem%2Fy20V%2FzoCLhCVpYa8DhiNz%2BmrIDrkF8RyfzIxHOBW1cc35r4%2FVwCF4t%2Fcgm2yCyvgd1m%2BCtL5L5Z4KeGDYXH%2Bq%2Bf8N6lbHqhiSlwyguePITXsp5OXkGK0o5ZBfgAL2Msf1rn6HyL6%2FX7SqbMfDc4z7TDnUoCM89MjbCqBIhasX2FDAcdUTUjWCnqR7mUqt6PaNSuhsCLp84eWLu5sigkep1r1M%2BI8fcgV61AHZ3dcZX%2BJyZmPPHGuQcXM7CQYuQ7EUAz4gvR7k%2FZsr1LOIM0htaoBjB25Y1kZGIBzksem3%2BU%2BiHDQNE9zndV6HKNCMCf7wZJZIsxR3fNV67QciQJeSE2%2BWnKPZhKnX8EG5xZaCqj8YGtZAm5I9Gi72EyK7Y6AGWt3SXpXQjvmMX%2F1djUmwhGKsV%2BgYmORzVlxKJKJR4TUbzwmk8wW0hXGC2WOF%2FyELqZmqRMOPU078GOqUB1n3gmTdRK%2F0LNT1iV2pp7v0Snf767DsNzKzClefUSh%2F7iAHx%2FzzqsyxHmTf6PGe1QswPJ2Xz5wMe8iFBSiYlKVH%2Ffaht9elHJJrG%2FuAaIjXx43uJ1Hw9RV4xSML1QSKrebK1q5Rglw2MmSib4ECgklZjMNxjsSKXqxCxk%2BHo3K3klaeJbdmizvihJjARSg2rQargYLV8CiC4xs079T2jgokbYyTU&X-Amz-Signature=a7a8c0e40f90ee405b49c2f4f20c203680a9db131fcba5ede3808b16e972aded&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
