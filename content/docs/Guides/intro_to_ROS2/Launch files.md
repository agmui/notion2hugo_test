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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VO7GEZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2qzVq2Rz%2Fmj3yCqqC57oPjnpfit75ErITQTv7jEXmCAIgSGgIpIvIRIizoBMDFCrV8PstuSM4qexKV5I4MIKfE4gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwQguN7gkrPagOxiyrcAxGSLRSWKilC1Kft6L8T5xGnV8pM%2BmwNFtwR79bGL9x1IM1%2BTm1H4HdXyL6rO0ypNUuY0bMhI6YuxA7%2BRVja1C7P4XsIBo%2FsWr0KbHfhHmdVG3HS4HrMhubJEyJ0B4tt0bNV4gEbLX1w2DT%2BIGEZuFOmieE6pbCq6gmtJnKC1w%2FtaQeCnosSadyAq6njDGsMAo8IVHPRVBfc2%2By7dv6CtCAC9dwVBIXAUtcPm5QDQc3tsytL2FOStnWE64W40UGcAuL9NCu7DMNYCotsB5KMYTCJLqf7OOY67v97Hnh291XY3biXRyI%2FNov%2FVZyQlwbPfqT4JVRY4%2BjubomTiNXl3B3dEBL0l%2B%2B3NzbtwV5yxquD6FUQVXGz2t3yLXa7ieuoGRAJvrjN6ZCckgmmhLmNIQ3sIaHqT5D00xxhYhb429z%2BqEypTk4e8dqC4ZDj%2BzZaqd0gDLaE%2FnKSKmopS7ORnpoU%2B9HLUPcoSUtaiSSnX6dnxyqCwhUsrctoMkVcY27o9o%2Fv%2FPuDGlLeXNgHXFO8dwyNJwBAZkg5iJam6nu%2BHf6p%2B38mdOmd92zIy7QKqsTJjpl5Yv7YdN913Z1YxYizKiTP4wtObznPsIfEHwmUfXFeCuG2x8XXYkoFJ8iGMKzehb8GOqUBn1Wa9XI27ZeeYixjKrBBhYrE2LVJ1IcAVSoNqZ7FU3rhrlDcZoUvNIPNWHONLr13nVWAeIbYtGko7CrdZma1vIGxDWS50emRbWwT20Kf2Tcmb48yvJ6L2wTJRKKwqS1LkgIY62XqE6OWTv%2B25wWrM6qO7QIU1%2FrDE3rMF6M5WYVNdw2Us3YKFggPlMn92aIYzRhnGPyKuTEzd5dO2E%2Bn5ps9%2FkcX&X-Amz-Signature=f048f19f0f91da105a83ad7b546338a6314e2b71cfc9b42119d7b22fe5eeab69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VO7GEZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2qzVq2Rz%2Fmj3yCqqC57oPjnpfit75ErITQTv7jEXmCAIgSGgIpIvIRIizoBMDFCrV8PstuSM4qexKV5I4MIKfE4gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwQguN7gkrPagOxiyrcAxGSLRSWKilC1Kft6L8T5xGnV8pM%2BmwNFtwR79bGL9x1IM1%2BTm1H4HdXyL6rO0ypNUuY0bMhI6YuxA7%2BRVja1C7P4XsIBo%2FsWr0KbHfhHmdVG3HS4HrMhubJEyJ0B4tt0bNV4gEbLX1w2DT%2BIGEZuFOmieE6pbCq6gmtJnKC1w%2FtaQeCnosSadyAq6njDGsMAo8IVHPRVBfc2%2By7dv6CtCAC9dwVBIXAUtcPm5QDQc3tsytL2FOStnWE64W40UGcAuL9NCu7DMNYCotsB5KMYTCJLqf7OOY67v97Hnh291XY3biXRyI%2FNov%2FVZyQlwbPfqT4JVRY4%2BjubomTiNXl3B3dEBL0l%2B%2B3NzbtwV5yxquD6FUQVXGz2t3yLXa7ieuoGRAJvrjN6ZCckgmmhLmNIQ3sIaHqT5D00xxhYhb429z%2BqEypTk4e8dqC4ZDj%2BzZaqd0gDLaE%2FnKSKmopS7ORnpoU%2B9HLUPcoSUtaiSSnX6dnxyqCwhUsrctoMkVcY27o9o%2Fv%2FPuDGlLeXNgHXFO8dwyNJwBAZkg5iJam6nu%2BHf6p%2B38mdOmd92zIy7QKqsTJjpl5Yv7YdN913Z1YxYizKiTP4wtObznPsIfEHwmUfXFeCuG2x8XXYkoFJ8iGMKzehb8GOqUBn1Wa9XI27ZeeYixjKrBBhYrE2LVJ1IcAVSoNqZ7FU3rhrlDcZoUvNIPNWHONLr13nVWAeIbYtGko7CrdZma1vIGxDWS50emRbWwT20Kf2Tcmb48yvJ6L2wTJRKKwqS1LkgIY62XqE6OWTv%2B25wWrM6qO7QIU1%2FrDE3rMF6M5WYVNdw2Us3YKFggPlMn92aIYzRhnGPyKuTEzd5dO2E%2Bn5ps9%2FkcX&X-Amz-Signature=4f569c7e3fb656376e94c622dc45a6a7bc4bc8d9480f3aef870e5fceffd9c37f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VO7GEZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2qzVq2Rz%2Fmj3yCqqC57oPjnpfit75ErITQTv7jEXmCAIgSGgIpIvIRIizoBMDFCrV8PstuSM4qexKV5I4MIKfE4gqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwQguN7gkrPagOxiyrcAxGSLRSWKilC1Kft6L8T5xGnV8pM%2BmwNFtwR79bGL9x1IM1%2BTm1H4HdXyL6rO0ypNUuY0bMhI6YuxA7%2BRVja1C7P4XsIBo%2FsWr0KbHfhHmdVG3HS4HrMhubJEyJ0B4tt0bNV4gEbLX1w2DT%2BIGEZuFOmieE6pbCq6gmtJnKC1w%2FtaQeCnosSadyAq6njDGsMAo8IVHPRVBfc2%2By7dv6CtCAC9dwVBIXAUtcPm5QDQc3tsytL2FOStnWE64W40UGcAuL9NCu7DMNYCotsB5KMYTCJLqf7OOY67v97Hnh291XY3biXRyI%2FNov%2FVZyQlwbPfqT4JVRY4%2BjubomTiNXl3B3dEBL0l%2B%2B3NzbtwV5yxquD6FUQVXGz2t3yLXa7ieuoGRAJvrjN6ZCckgmmhLmNIQ3sIaHqT5D00xxhYhb429z%2BqEypTk4e8dqC4ZDj%2BzZaqd0gDLaE%2FnKSKmopS7ORnpoU%2B9HLUPcoSUtaiSSnX6dnxyqCwhUsrctoMkVcY27o9o%2Fv%2FPuDGlLeXNgHXFO8dwyNJwBAZkg5iJam6nu%2BHf6p%2B38mdOmd92zIy7QKqsTJjpl5Yv7YdN913Z1YxYizKiTP4wtObznPsIfEHwmUfXFeCuG2x8XXYkoFJ8iGMKzehb8GOqUBn1Wa9XI27ZeeYixjKrBBhYrE2LVJ1IcAVSoNqZ7FU3rhrlDcZoUvNIPNWHONLr13nVWAeIbYtGko7CrdZma1vIGxDWS50emRbWwT20Kf2Tcmb48yvJ6L2wTJRKKwqS1LkgIY62XqE6OWTv%2B25wWrM6qO7QIU1%2FrDE3rMF6M5WYVNdw2Us3YKFggPlMn92aIYzRhnGPyKuTEzd5dO2E%2Bn5ps9%2FkcX&X-Amz-Signature=b4fb32d44a0b6192839d4b8a8b10a134cf28c27ab32ca21d50f6170393d145f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
