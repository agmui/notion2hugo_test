---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKP6BDLW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCowP6qgHkTlRsllctsV3AXqswEOwB5yJSoa9HlIlcPAgIhAP2BohYNcHs%2FidS8%2Fg4Pof%2FktO0nfSWI5Fr%2FwYFovNLSKv8DCHIQABoMNjM3NDIzMTgzODA1IgwNjkjc9akWKGt83qgq3ANupV6ZadpA3FX0KISegHE%2F9a1eZhZUMlm4%2FOh5pNFXFGnXHXOa7411qPr%2FIjIXKsUAL3hieO4kub%2BucKt%2FALkjpkEBqmmlyiI40q4sLvI3yHlL0IRBVV778GIwEV6%2BQSgThshSUeUcozV4OIZuS4qmZme4dTKyRCpQA31QoJU49bPJlKJES3R0DBp5tSlgyuRM4lxiatR5kcaiulWw0ODMKZJEeBxThyfBGnrqMpznE9MumrnaV4%2FI3Y5GvEjdaVUi%2FkEFfef5zX1%2F%2Bxn33zipxKC4s%2BCmdd4qMgt5IIEIPnZ4pgyS7EQW9784E2cKdCr7dHriOV2wIiDCzRvub6oq%2FlG4Vdtk%2BdpmqUaFkc0SP1EBvMoDwCS2EG5qX%2BlCNiG99cmRM%2FqGPEo9pEoMX%2FmCePJDXsnLTkq7ZU8o%2F9%2BeHtC0Zz0oEsFAXMwJ0BuXXrSvzDEzyuXKapOX2tHcxLMJiJ6lBmYJfvZG%2Bstt4MB%2BnnfGoR7lL5m%2F4W6AIOLsQ5PayBCxXQUg47onKJmIPRQnTEJQXqbFs3rp0i%2Fmw%2Fy4Vra7WipvOAtcD7cd6ZnWfCyEqLHWSxd651XFAkUXInYAEmb%2FY%2BSpZQ5qW2Y547tpTZRIv6uGCqcwxjJXSjCq15fEBjqkAYKA6HUoa9FpBuKE2I0waOLnCJEpGl3DdIqO%2BrBS8XyA0aAvAjEq3rcSH8i5JudK4qayoje%2FgH8xm8RL4UGIfB2SAf5BLJfgxVzR%2B0aiPd0LoOfYIsuGHspITuA3ej%2Bm%2BnVL4757Eduibep9npEximY%2FQugRStHMAYfXGWO2oRfWnHCaWuU6VYz0kvdLHhEutoKkNKd75152mJ%2Box1MZXhUVYVTk&X-Amz-Signature=7451fa05bb077db8ee4eb5f5d45ff1e6f5d91a49768d6d7df3f61307b85f9009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKP6BDLW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCowP6qgHkTlRsllctsV3AXqswEOwB5yJSoa9HlIlcPAgIhAP2BohYNcHs%2FidS8%2Fg4Pof%2FktO0nfSWI5Fr%2FwYFovNLSKv8DCHIQABoMNjM3NDIzMTgzODA1IgwNjkjc9akWKGt83qgq3ANupV6ZadpA3FX0KISegHE%2F9a1eZhZUMlm4%2FOh5pNFXFGnXHXOa7411qPr%2FIjIXKsUAL3hieO4kub%2BucKt%2FALkjpkEBqmmlyiI40q4sLvI3yHlL0IRBVV778GIwEV6%2BQSgThshSUeUcozV4OIZuS4qmZme4dTKyRCpQA31QoJU49bPJlKJES3R0DBp5tSlgyuRM4lxiatR5kcaiulWw0ODMKZJEeBxThyfBGnrqMpznE9MumrnaV4%2FI3Y5GvEjdaVUi%2FkEFfef5zX1%2F%2Bxn33zipxKC4s%2BCmdd4qMgt5IIEIPnZ4pgyS7EQW9784E2cKdCr7dHriOV2wIiDCzRvub6oq%2FlG4Vdtk%2BdpmqUaFkc0SP1EBvMoDwCS2EG5qX%2BlCNiG99cmRM%2FqGPEo9pEoMX%2FmCePJDXsnLTkq7ZU8o%2F9%2BeHtC0Zz0oEsFAXMwJ0BuXXrSvzDEzyuXKapOX2tHcxLMJiJ6lBmYJfvZG%2Bstt4MB%2BnnfGoR7lL5m%2F4W6AIOLsQ5PayBCxXQUg47onKJmIPRQnTEJQXqbFs3rp0i%2Fmw%2Fy4Vra7WipvOAtcD7cd6ZnWfCyEqLHWSxd651XFAkUXInYAEmb%2FY%2BSpZQ5qW2Y547tpTZRIv6uGCqcwxjJXSjCq15fEBjqkAYKA6HUoa9FpBuKE2I0waOLnCJEpGl3DdIqO%2BrBS8XyA0aAvAjEq3rcSH8i5JudK4qayoje%2FgH8xm8RL4UGIfB2SAf5BLJfgxVzR%2B0aiPd0LoOfYIsuGHspITuA3ej%2Bm%2BnVL4757Eduibep9npEximY%2FQugRStHMAYfXGWO2oRfWnHCaWuU6VYz0kvdLHhEutoKkNKd75152mJ%2Box1MZXhUVYVTk&X-Amz-Signature=bc78d40b5e39a9ee662a15e83e7ec1dd6119a06a5e3dd29d33283178979ed0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKP6BDLW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCowP6qgHkTlRsllctsV3AXqswEOwB5yJSoa9HlIlcPAgIhAP2BohYNcHs%2FidS8%2Fg4Pof%2FktO0nfSWI5Fr%2FwYFovNLSKv8DCHIQABoMNjM3NDIzMTgzODA1IgwNjkjc9akWKGt83qgq3ANupV6ZadpA3FX0KISegHE%2F9a1eZhZUMlm4%2FOh5pNFXFGnXHXOa7411qPr%2FIjIXKsUAL3hieO4kub%2BucKt%2FALkjpkEBqmmlyiI40q4sLvI3yHlL0IRBVV778GIwEV6%2BQSgThshSUeUcozV4OIZuS4qmZme4dTKyRCpQA31QoJU49bPJlKJES3R0DBp5tSlgyuRM4lxiatR5kcaiulWw0ODMKZJEeBxThyfBGnrqMpznE9MumrnaV4%2FI3Y5GvEjdaVUi%2FkEFfef5zX1%2F%2Bxn33zipxKC4s%2BCmdd4qMgt5IIEIPnZ4pgyS7EQW9784E2cKdCr7dHriOV2wIiDCzRvub6oq%2FlG4Vdtk%2BdpmqUaFkc0SP1EBvMoDwCS2EG5qX%2BlCNiG99cmRM%2FqGPEo9pEoMX%2FmCePJDXsnLTkq7ZU8o%2F9%2BeHtC0Zz0oEsFAXMwJ0BuXXrSvzDEzyuXKapOX2tHcxLMJiJ6lBmYJfvZG%2Bstt4MB%2BnnfGoR7lL5m%2F4W6AIOLsQ5PayBCxXQUg47onKJmIPRQnTEJQXqbFs3rp0i%2Fmw%2Fy4Vra7WipvOAtcD7cd6ZnWfCyEqLHWSxd651XFAkUXInYAEmb%2FY%2BSpZQ5qW2Y547tpTZRIv6uGCqcwxjJXSjCq15fEBjqkAYKA6HUoa9FpBuKE2I0waOLnCJEpGl3DdIqO%2BrBS8XyA0aAvAjEq3rcSH8i5JudK4qayoje%2FgH8xm8RL4UGIfB2SAf5BLJfgxVzR%2B0aiPd0LoOfYIsuGHspITuA3ej%2Bm%2BnVL4757Eduibep9npEximY%2FQugRStHMAYfXGWO2oRfWnHCaWuU6VYz0kvdLHhEutoKkNKd75152mJ%2Box1MZXhUVYVTk&X-Amz-Signature=118ddfbedaf40db19ef64d0ecf646d3a945232427fe4b7dc9307f896bbe4dd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
