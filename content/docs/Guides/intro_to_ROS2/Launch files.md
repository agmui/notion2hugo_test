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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHI6XRX3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFzIXj724V8YW6xt1Y3ivSqmVd63ovRBVPzdRrrNUQLqAiEAtZT4JwdJ8mGM7Q23g8LkqcAQCTrD08Przvvvv5wkfroq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFf1lBjgfbbO4XI8iCrcA4LkIpd6qja9Afz%2BSGbsw8c68v2I%2FVyXGjwvudWwnSWLTXt0L%2FDTjAXOgQbMHeMyMxr7xnZtuuS7OqfS1u4pkgUUmOV1EAHb%2BsvOGQA3Be88o%2FYDZA8d%2FzEnHBg2M1HY8W4qDzS1%2FhHVK239S1TwBAfZdjF3TWq494BqecoRtumc6b6mXHqOJ%2FpFG%2FJuT9%2Fd9g9OigjX9HvxglkH20VAQefyQi6lEicjq0QBOVB8tN5oO5cgLHTDxuFoNVpowENfdvwswzxbpVlglAe00wbstVGPL1kVmT92WNmXYuVLIohjcezXInXYTHLBKjEQHjEmaeNHg%2BT5wxaQvrFbKOAV2g1RyCOTg9Cku0ob6jhO3SzERFJJYg30s1GJOaq9WSxq45s9%2Bxk6xrsa%2FazaVdzPcCtWx2Kbf2oe53v%2BrFelfvH%2BSHdBu73zWVHjNA9bday5FoxjnK0rAt5TjsX0m0Hc0TyJsA1PkGihgbYdDCE74Xywj3jdV6TDkHvJqGYwf2CV0yk1bd4pjcIaeuXBKd5NIxDND%2BUynlWz6b4AtbHsY8mtFSag%2FW5fIviCM%2FA2kH21efwFmQ%2FV64ZBVs2I4LG%2Ff0OMPiSHJXFTt3OJS1WcB6kG2dRJ1yBRvGLM%2BEgTMIfUsb4GOqUBvrLOrJczhqDs%2FgDsjT39u%2BzI69TGO8IoebtMlMQmu6lX910O7SbiljroqtYR1xwkWLLM8ZFljkky%2BMAZpE5uZjwCsqz4YF9VU9h%2Fne6Bba74lBx6PWwCPACPglW22liv0ciLcfMb6izO6%2FE0CRkgxrwemiKbI%2FfsZIkBiYY2HxKly67%2BCbJO4xJiYuajTNdtzXwspuwYDt6dyi3wLQ5HQxrSD4o%2B&X-Amz-Signature=8d33ae19f3d4d0cdecb9aa7993a6dc487e37175a6964851cfd0ff165e2a7a221&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHI6XRX3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFzIXj724V8YW6xt1Y3ivSqmVd63ovRBVPzdRrrNUQLqAiEAtZT4JwdJ8mGM7Q23g8LkqcAQCTrD08Przvvvv5wkfroq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFf1lBjgfbbO4XI8iCrcA4LkIpd6qja9Afz%2BSGbsw8c68v2I%2FVyXGjwvudWwnSWLTXt0L%2FDTjAXOgQbMHeMyMxr7xnZtuuS7OqfS1u4pkgUUmOV1EAHb%2BsvOGQA3Be88o%2FYDZA8d%2FzEnHBg2M1HY8W4qDzS1%2FhHVK239S1TwBAfZdjF3TWq494BqecoRtumc6b6mXHqOJ%2FpFG%2FJuT9%2Fd9g9OigjX9HvxglkH20VAQefyQi6lEicjq0QBOVB8tN5oO5cgLHTDxuFoNVpowENfdvwswzxbpVlglAe00wbstVGPL1kVmT92WNmXYuVLIohjcezXInXYTHLBKjEQHjEmaeNHg%2BT5wxaQvrFbKOAV2g1RyCOTg9Cku0ob6jhO3SzERFJJYg30s1GJOaq9WSxq45s9%2Bxk6xrsa%2FazaVdzPcCtWx2Kbf2oe53v%2BrFelfvH%2BSHdBu73zWVHjNA9bday5FoxjnK0rAt5TjsX0m0Hc0TyJsA1PkGihgbYdDCE74Xywj3jdV6TDkHvJqGYwf2CV0yk1bd4pjcIaeuXBKd5NIxDND%2BUynlWz6b4AtbHsY8mtFSag%2FW5fIviCM%2FA2kH21efwFmQ%2FV64ZBVs2I4LG%2Ff0OMPiSHJXFTt3OJS1WcB6kG2dRJ1yBRvGLM%2BEgTMIfUsb4GOqUBvrLOrJczhqDs%2FgDsjT39u%2BzI69TGO8IoebtMlMQmu6lX910O7SbiljroqtYR1xwkWLLM8ZFljkky%2BMAZpE5uZjwCsqz4YF9VU9h%2Fne6Bba74lBx6PWwCPACPglW22liv0ciLcfMb6izO6%2FE0CRkgxrwemiKbI%2FfsZIkBiYY2HxKly67%2BCbJO4xJiYuajTNdtzXwspuwYDt6dyi3wLQ5HQxrSD4o%2B&X-Amz-Signature=1590c994e1f0c0fb41da442df31fe429eb5aaa7a8bc556617433297e7d261c61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHI6XRX3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFzIXj724V8YW6xt1Y3ivSqmVd63ovRBVPzdRrrNUQLqAiEAtZT4JwdJ8mGM7Q23g8LkqcAQCTrD08Przvvvv5wkfroq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFf1lBjgfbbO4XI8iCrcA4LkIpd6qja9Afz%2BSGbsw8c68v2I%2FVyXGjwvudWwnSWLTXt0L%2FDTjAXOgQbMHeMyMxr7xnZtuuS7OqfS1u4pkgUUmOV1EAHb%2BsvOGQA3Be88o%2FYDZA8d%2FzEnHBg2M1HY8W4qDzS1%2FhHVK239S1TwBAfZdjF3TWq494BqecoRtumc6b6mXHqOJ%2FpFG%2FJuT9%2Fd9g9OigjX9HvxglkH20VAQefyQi6lEicjq0QBOVB8tN5oO5cgLHTDxuFoNVpowENfdvwswzxbpVlglAe00wbstVGPL1kVmT92WNmXYuVLIohjcezXInXYTHLBKjEQHjEmaeNHg%2BT5wxaQvrFbKOAV2g1RyCOTg9Cku0ob6jhO3SzERFJJYg30s1GJOaq9WSxq45s9%2Bxk6xrsa%2FazaVdzPcCtWx2Kbf2oe53v%2BrFelfvH%2BSHdBu73zWVHjNA9bday5FoxjnK0rAt5TjsX0m0Hc0TyJsA1PkGihgbYdDCE74Xywj3jdV6TDkHvJqGYwf2CV0yk1bd4pjcIaeuXBKd5NIxDND%2BUynlWz6b4AtbHsY8mtFSag%2FW5fIviCM%2FA2kH21efwFmQ%2FV64ZBVs2I4LG%2Ff0OMPiSHJXFTt3OJS1WcB6kG2dRJ1yBRvGLM%2BEgTMIfUsb4GOqUBvrLOrJczhqDs%2FgDsjT39u%2BzI69TGO8IoebtMlMQmu6lX910O7SbiljroqtYR1xwkWLLM8ZFljkky%2BMAZpE5uZjwCsqz4YF9VU9h%2Fne6Bba74lBx6PWwCPACPglW22liv0ciLcfMb6izO6%2FE0CRkgxrwemiKbI%2FfsZIkBiYY2HxKly67%2BCbJO4xJiYuajTNdtzXwspuwYDt6dyi3wLQ5HQxrSD4o%2B&X-Amz-Signature=41a361e493448b96c07e647b79bf3a247cd0c33b8664a09bca039e9b66368581&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
