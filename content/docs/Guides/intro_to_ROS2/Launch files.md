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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQOY3RN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICI5%2FfzPxPfxJEAfyWpM5tzLs1Fsq31NnMsYpgRWuJ6JAiEAg3zsBE8APzBiEKB%2FWekndRpEm2Gq%2BAxJTdhLuz6JNRgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGntD4EscaBiuvypCrcA3IbSokoyS1Opuy1LW4GDv2%2BQ9nP6fhLjuyw%2FeXbMEqJ%2Finkkrbfwtd45ObylHDB3671AdTspOKQHxUfzaC1JFc0IhTcXNMY%2FJg%2BnkQhw2GE6b80CgcdUW8gu6%2Broxva7bVBGsTEs33Nz6DE%2Bd8u718Sb7MQA0MQWA%2BfS1aI0HNRRraEJtX31InoIJDEbzvdOyyECadHErUc60Wi%2BLIwKXn0x6RumAzt9NkgDz0%2FP3%2BD2GXH6C%2FbwEAfk3Ed%2BmaJmgqP767Tm2FiOtNUXitqIh0an4SGLHa4lnBKG%2BhABX2NJSI2VDlKJ7b5uGulpKiNQxM5K7JqrHeId%2B4oOzBljXWylZoim7XEA6Kk8u%2B6sN1BsazO%2B%2FGxojha%2BkpjJhdXnzyvWAm3KvemeLae9INk1IhcJpWbjpH5kFDavyrJuCkTbh2g6t1xLJb8NK%2FvgmyYJSHoShPjYP2ZT%2BPogo65lU%2BwM8HzL23RrCaGw9CIyIqB1r5l73zbYDU79%2BguHHz%2B%2BxksGzLhVBH7Bd5siHPAIcvFxl2PXmqrWKfH%2BVKxqbfZu9YpVqRre241TE5hhOWe1Fobt6badBHJAo%2BGq4c4voo%2FY%2F3gkJ744N7bSToX8bmgsVZAmU5w04Ccgmv4MPKE8b4GOqUBgqSw0E%2Fi80urLhP8fyXTeGmHkNCjL3j6taVDpWPRwGQQS97U1E7tQMxmC%2BJvh4UiW5LDa0BpGSAYWp8IVWXgibOaBSJ2GsVxsZOhgYdsSMipf1g9L2X2ZN9d4%2F0mk51NMfeEg9ZWQE6r6BlMFgcLT4g8JtUBW8K3oV3GGLLqfWbWdyMaVe8n0fzcqXuQIeg2GEw7S9ivmZ2az3jwO1SNY5nz72%2Fs&X-Amz-Signature=d8df1c572feb5554d9ac867452a9d59c678e66c6f97171953ff4fe42db609590&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQOY3RN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICI5%2FfzPxPfxJEAfyWpM5tzLs1Fsq31NnMsYpgRWuJ6JAiEAg3zsBE8APzBiEKB%2FWekndRpEm2Gq%2BAxJTdhLuz6JNRgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGntD4EscaBiuvypCrcA3IbSokoyS1Opuy1LW4GDv2%2BQ9nP6fhLjuyw%2FeXbMEqJ%2Finkkrbfwtd45ObylHDB3671AdTspOKQHxUfzaC1JFc0IhTcXNMY%2FJg%2BnkQhw2GE6b80CgcdUW8gu6%2Broxva7bVBGsTEs33Nz6DE%2Bd8u718Sb7MQA0MQWA%2BfS1aI0HNRRraEJtX31InoIJDEbzvdOyyECadHErUc60Wi%2BLIwKXn0x6RumAzt9NkgDz0%2FP3%2BD2GXH6C%2FbwEAfk3Ed%2BmaJmgqP767Tm2FiOtNUXitqIh0an4SGLHa4lnBKG%2BhABX2NJSI2VDlKJ7b5uGulpKiNQxM5K7JqrHeId%2B4oOzBljXWylZoim7XEA6Kk8u%2B6sN1BsazO%2B%2FGxojha%2BkpjJhdXnzyvWAm3KvemeLae9INk1IhcJpWbjpH5kFDavyrJuCkTbh2g6t1xLJb8NK%2FvgmyYJSHoShPjYP2ZT%2BPogo65lU%2BwM8HzL23RrCaGw9CIyIqB1r5l73zbYDU79%2BguHHz%2B%2BxksGzLhVBH7Bd5siHPAIcvFxl2PXmqrWKfH%2BVKxqbfZu9YpVqRre241TE5hhOWe1Fobt6badBHJAo%2BGq4c4voo%2FY%2F3gkJ744N7bSToX8bmgsVZAmU5w04Ccgmv4MPKE8b4GOqUBgqSw0E%2Fi80urLhP8fyXTeGmHkNCjL3j6taVDpWPRwGQQS97U1E7tQMxmC%2BJvh4UiW5LDa0BpGSAYWp8IVWXgibOaBSJ2GsVxsZOhgYdsSMipf1g9L2X2ZN9d4%2F0mk51NMfeEg9ZWQE6r6BlMFgcLT4g8JtUBW8K3oV3GGLLqfWbWdyMaVe8n0fzcqXuQIeg2GEw7S9ivmZ2az3jwO1SNY5nz72%2Fs&X-Amz-Signature=6062f3260863fd1aa0a2405644c57c89618bb79d5298595a2890659a622b0935&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQOY3RN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICI5%2FfzPxPfxJEAfyWpM5tzLs1Fsq31NnMsYpgRWuJ6JAiEAg3zsBE8APzBiEKB%2FWekndRpEm2Gq%2BAxJTdhLuz6JNRgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGntD4EscaBiuvypCrcA3IbSokoyS1Opuy1LW4GDv2%2BQ9nP6fhLjuyw%2FeXbMEqJ%2Finkkrbfwtd45ObylHDB3671AdTspOKQHxUfzaC1JFc0IhTcXNMY%2FJg%2BnkQhw2GE6b80CgcdUW8gu6%2Broxva7bVBGsTEs33Nz6DE%2Bd8u718Sb7MQA0MQWA%2BfS1aI0HNRRraEJtX31InoIJDEbzvdOyyECadHErUc60Wi%2BLIwKXn0x6RumAzt9NkgDz0%2FP3%2BD2GXH6C%2FbwEAfk3Ed%2BmaJmgqP767Tm2FiOtNUXitqIh0an4SGLHa4lnBKG%2BhABX2NJSI2VDlKJ7b5uGulpKiNQxM5K7JqrHeId%2B4oOzBljXWylZoim7XEA6Kk8u%2B6sN1BsazO%2B%2FGxojha%2BkpjJhdXnzyvWAm3KvemeLae9INk1IhcJpWbjpH5kFDavyrJuCkTbh2g6t1xLJb8NK%2FvgmyYJSHoShPjYP2ZT%2BPogo65lU%2BwM8HzL23RrCaGw9CIyIqB1r5l73zbYDU79%2BguHHz%2B%2BxksGzLhVBH7Bd5siHPAIcvFxl2PXmqrWKfH%2BVKxqbfZu9YpVqRre241TE5hhOWe1Fobt6badBHJAo%2BGq4c4voo%2FY%2F3gkJ744N7bSToX8bmgsVZAmU5w04Ccgmv4MPKE8b4GOqUBgqSw0E%2Fi80urLhP8fyXTeGmHkNCjL3j6taVDpWPRwGQQS97U1E7tQMxmC%2BJvh4UiW5LDa0BpGSAYWp8IVWXgibOaBSJ2GsVxsZOhgYdsSMipf1g9L2X2ZN9d4%2F0mk51NMfeEg9ZWQE6r6BlMFgcLT4g8JtUBW8K3oV3GGLLqfWbWdyMaVe8n0fzcqXuQIeg2GEw7S9ivmZ2az3jwO1SNY5nz72%2Fs&X-Amz-Signature=e3bfded8cdd8b8b62cbae15c15cf34b62061f535d9f6490c06858f8a279efb31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
