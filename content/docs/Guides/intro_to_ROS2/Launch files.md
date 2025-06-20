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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ZCGNU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwe1MGCrYF46Yb4TjX%2FNP4zt31dk4vvGRDE%2B556C3ktgIhAPCDYMdSznLJeBehvH0y0oHkhubbmDKHOl6UHmUbH9PhKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVZIt%2BZw4MAn9PSLkq3AP0ejFyn1iAYjDniFOYv4CY84f1y%2FHX3Yu6WxGcQG20Q0ahD6wgbOXB9%2FPAHk0TdSDQqGRDGCE%2BMOIZsl5v5FDcAp8QYKEgXbgSU5MoRYXZxXs0oJ6sxLk4ulyayEKkAqwgVHbXtM87%2BeolDwGvItmfjq3c0izCMBvZWEVdh6xyDVf3doj4AnsGW10cLLnqPuePHqLD%2BZAp8GZxVkqlo%2FGSf9tDWSiWDKX0warE7lHGJToHlYhHvZEgMdvEiCZXtwIDrUaRPiespcHibCIIreKlYCK3gRLROOZZDhjsv7VPuMo6C%2BgBAyEieK7Ud4TAbuGVlGX63Jbt1Sijk19kcNn78uC0U6ajr7GaI651VE05%2FGvDIptZRBM%2Fu19y%2F8avAHkdu4n%2BGHTA7P4wE5xzjWQDKcu9XxlXEQuentFti5pxELSZpSlgX9U%2FmiXEB%2BhPRDiCOegAoOkhjBk9dMbybHXzQmhC1ECQ8kaifbzg0aqJ5DXStrrjZPDf63e7h%2FCn5khDcFnXxOYlFbD2a0E5%2F2qBP8ugrfb8MKFjaTLL41ePJyQiEN%2BxpIYnJ8vOI8bq5dwebKk3i%2FS%2BHLrVjxQhi4uP7yXRnK7urRBF48LQtOy6O6FI7GANzQa4o790lTD%2F1dLCBjqkAU89LHKfCsVMz%2B4D5h9kefEmLIKTXIQ9wz74tqPYhY802bYCscioYFQ0WazqyVa17OL%2BE4RVEbEaAlPJqJlc0IuB57eXmMsUKnzJqnBzWtgO9AfIIZehMIXvNqkCT8wB8N220AlauJvGxhp2PVehKOFToFOq1eC3JkBD%2FwBGp50OjGgZ3Eb5p8OnFe4ps3dz18lmVvFdayzIgZ9%2Bh87zgVrzowTE&X-Amz-Signature=6c624bf484a6242df4d147766a6976b45be53cfea337bacf0ea6224a7fa79bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ZCGNU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwe1MGCrYF46Yb4TjX%2FNP4zt31dk4vvGRDE%2B556C3ktgIhAPCDYMdSznLJeBehvH0y0oHkhubbmDKHOl6UHmUbH9PhKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVZIt%2BZw4MAn9PSLkq3AP0ejFyn1iAYjDniFOYv4CY84f1y%2FHX3Yu6WxGcQG20Q0ahD6wgbOXB9%2FPAHk0TdSDQqGRDGCE%2BMOIZsl5v5FDcAp8QYKEgXbgSU5MoRYXZxXs0oJ6sxLk4ulyayEKkAqwgVHbXtM87%2BeolDwGvItmfjq3c0izCMBvZWEVdh6xyDVf3doj4AnsGW10cLLnqPuePHqLD%2BZAp8GZxVkqlo%2FGSf9tDWSiWDKX0warE7lHGJToHlYhHvZEgMdvEiCZXtwIDrUaRPiespcHibCIIreKlYCK3gRLROOZZDhjsv7VPuMo6C%2BgBAyEieK7Ud4TAbuGVlGX63Jbt1Sijk19kcNn78uC0U6ajr7GaI651VE05%2FGvDIptZRBM%2Fu19y%2F8avAHkdu4n%2BGHTA7P4wE5xzjWQDKcu9XxlXEQuentFti5pxELSZpSlgX9U%2FmiXEB%2BhPRDiCOegAoOkhjBk9dMbybHXzQmhC1ECQ8kaifbzg0aqJ5DXStrrjZPDf63e7h%2FCn5khDcFnXxOYlFbD2a0E5%2F2qBP8ugrfb8MKFjaTLL41ePJyQiEN%2BxpIYnJ8vOI8bq5dwebKk3i%2FS%2BHLrVjxQhi4uP7yXRnK7urRBF48LQtOy6O6FI7GANzQa4o790lTD%2F1dLCBjqkAU89LHKfCsVMz%2B4D5h9kefEmLIKTXIQ9wz74tqPYhY802bYCscioYFQ0WazqyVa17OL%2BE4RVEbEaAlPJqJlc0IuB57eXmMsUKnzJqnBzWtgO9AfIIZehMIXvNqkCT8wB8N220AlauJvGxhp2PVehKOFToFOq1eC3JkBD%2FwBGp50OjGgZ3Eb5p8OnFe4ps3dz18lmVvFdayzIgZ9%2Bh87zgVrzowTE&X-Amz-Signature=0f73b31d538c34535d157bd4553506ca9a38748a65f3c16837654d2bc8a54cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4ZCGNU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwe1MGCrYF46Yb4TjX%2FNP4zt31dk4vvGRDE%2B556C3ktgIhAPCDYMdSznLJeBehvH0y0oHkhubbmDKHOl6UHmUbH9PhKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVZIt%2BZw4MAn9PSLkq3AP0ejFyn1iAYjDniFOYv4CY84f1y%2FHX3Yu6WxGcQG20Q0ahD6wgbOXB9%2FPAHk0TdSDQqGRDGCE%2BMOIZsl5v5FDcAp8QYKEgXbgSU5MoRYXZxXs0oJ6sxLk4ulyayEKkAqwgVHbXtM87%2BeolDwGvItmfjq3c0izCMBvZWEVdh6xyDVf3doj4AnsGW10cLLnqPuePHqLD%2BZAp8GZxVkqlo%2FGSf9tDWSiWDKX0warE7lHGJToHlYhHvZEgMdvEiCZXtwIDrUaRPiespcHibCIIreKlYCK3gRLROOZZDhjsv7VPuMo6C%2BgBAyEieK7Ud4TAbuGVlGX63Jbt1Sijk19kcNn78uC0U6ajr7GaI651VE05%2FGvDIptZRBM%2Fu19y%2F8avAHkdu4n%2BGHTA7P4wE5xzjWQDKcu9XxlXEQuentFti5pxELSZpSlgX9U%2FmiXEB%2BhPRDiCOegAoOkhjBk9dMbybHXzQmhC1ECQ8kaifbzg0aqJ5DXStrrjZPDf63e7h%2FCn5khDcFnXxOYlFbD2a0E5%2F2qBP8ugrfb8MKFjaTLL41ePJyQiEN%2BxpIYnJ8vOI8bq5dwebKk3i%2FS%2BHLrVjxQhi4uP7yXRnK7urRBF48LQtOy6O6FI7GANzQa4o790lTD%2F1dLCBjqkAU89LHKfCsVMz%2B4D5h9kefEmLIKTXIQ9wz74tqPYhY802bYCscioYFQ0WazqyVa17OL%2BE4RVEbEaAlPJqJlc0IuB57eXmMsUKnzJqnBzWtgO9AfIIZehMIXvNqkCT8wB8N220AlauJvGxhp2PVehKOFToFOq1eC3JkBD%2FwBGp50OjGgZ3Eb5p8OnFe4ps3dz18lmVvFdayzIgZ9%2Bh87zgVrzowTE&X-Amz-Signature=d3183ff96e3657283ff3c194cf9d39dd67742528aae445880e37cd72ec461c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
