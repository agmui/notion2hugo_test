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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3DDGBS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGy%2FXg6x1K6lh%2FCMMHy0G48%2FhpiTaff55wd6t1p5km5PAiEA%2Ba5GScYqD0afWBmth3o%2BvoYmvhi%2FjS%2FJc8j7PIOd%2FjIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwlH0b1EKU4DnhkSyrcAw%2Btyp2ctBmy%2BCwxxC1noZ0qYVYGZvhABmSjzo7x7eA9a1Y53eaJTaFEW%2BeF0AQJ4T5OkH4F7lPins0tRQzGryqsn04svWOgmy8WzRmGG4tvAg62epZY2WzCpHQvLKKJcu%2FF6jF4Sn8C8KzK7jSErzTAh8Ab9rH7xDe9z3BDCq0iaahYcwLfJwL8pZ5rQWBpj%2Fb37L7WGF%2BuWA%2B33v029Rmnz3YGjsOngC8MvD1E2YifoKJlfAIupFK6mVt7MeaHSg5yDpDeiGYvcCKZJEA3hR%2BrBk0a7ZtvV3wIyzvtQ4Ykn2UWzqSTVaZoeArRDFpwp1IPGvj%2F8FBDSsF5tV8yJLlyt1cWGbSqmbQrjswGwCUIzIesLopC1377i8N06SOI0yadQRoINvt4xnSXv4l42q%2BfeS%2FxVqAWOtgW10stpZW61dEvTdL87Z3bfa8NLLXXsSDB5swFfH4ZP%2BQNedmjX9ElD%2BheZOV4%2FHgoF4FYOhLLmoLSsyqMgeOjZuYtrKVO06HsBMejI3MfuKvnB%2BPuaRufrppYRGxGEpBK8rftRGhhCBkiMZ7Wl2c3MgVE9LJbLcH1SsNfmvuejgdhgzu1F4W5nWJVZOUBQz4DEdvTyhWp5UL1Hn%2FdIJ5ZuaLfMPe0k8MGOqUBXxJoE1Yxabwjzy9MGXUmAKVeKc84cqNWawBz%2FeOPrIx1gfdqOuPtvXHp2JiRhr1vfPJ%2BZa290x6LzrmdZcO3FHKZKbGzCDRSHS2b0%2FPeia3kMfAa3SMoPpqlJjf8Mm%2FQB3o9vCOQzE%2FhgFxpr2jm%2F5qCLRAXxcVhlk5AbTXvtSyc5hMhVxfUjbi3WG2CacBuo5wy1JBrGAskFPvH%2FTJX6bB2rBR8&X-Amz-Signature=440ecb0bf561d6d829c2351b36941bd00d234b1fa8ab98f6e98374972fb05183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3DDGBS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGy%2FXg6x1K6lh%2FCMMHy0G48%2FhpiTaff55wd6t1p5km5PAiEA%2Ba5GScYqD0afWBmth3o%2BvoYmvhi%2FjS%2FJc8j7PIOd%2FjIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwlH0b1EKU4DnhkSyrcAw%2Btyp2ctBmy%2BCwxxC1noZ0qYVYGZvhABmSjzo7x7eA9a1Y53eaJTaFEW%2BeF0AQJ4T5OkH4F7lPins0tRQzGryqsn04svWOgmy8WzRmGG4tvAg62epZY2WzCpHQvLKKJcu%2FF6jF4Sn8C8KzK7jSErzTAh8Ab9rH7xDe9z3BDCq0iaahYcwLfJwL8pZ5rQWBpj%2Fb37L7WGF%2BuWA%2B33v029Rmnz3YGjsOngC8MvD1E2YifoKJlfAIupFK6mVt7MeaHSg5yDpDeiGYvcCKZJEA3hR%2BrBk0a7ZtvV3wIyzvtQ4Ykn2UWzqSTVaZoeArRDFpwp1IPGvj%2F8FBDSsF5tV8yJLlyt1cWGbSqmbQrjswGwCUIzIesLopC1377i8N06SOI0yadQRoINvt4xnSXv4l42q%2BfeS%2FxVqAWOtgW10stpZW61dEvTdL87Z3bfa8NLLXXsSDB5swFfH4ZP%2BQNedmjX9ElD%2BheZOV4%2FHgoF4FYOhLLmoLSsyqMgeOjZuYtrKVO06HsBMejI3MfuKvnB%2BPuaRufrppYRGxGEpBK8rftRGhhCBkiMZ7Wl2c3MgVE9LJbLcH1SsNfmvuejgdhgzu1F4W5nWJVZOUBQz4DEdvTyhWp5UL1Hn%2FdIJ5ZuaLfMPe0k8MGOqUBXxJoE1Yxabwjzy9MGXUmAKVeKc84cqNWawBz%2FeOPrIx1gfdqOuPtvXHp2JiRhr1vfPJ%2BZa290x6LzrmdZcO3FHKZKbGzCDRSHS2b0%2FPeia3kMfAa3SMoPpqlJjf8Mm%2FQB3o9vCOQzE%2FhgFxpr2jm%2F5qCLRAXxcVhlk5AbTXvtSyc5hMhVxfUjbi3WG2CacBuo5wy1JBrGAskFPvH%2FTJX6bB2rBR8&X-Amz-Signature=aae494ed2a205075a0de234096d5436ee6ccaeeb323ebeb2c1f4cb5faf48b641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3DDGBS%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGy%2FXg6x1K6lh%2FCMMHy0G48%2FhpiTaff55wd6t1p5km5PAiEA%2Ba5GScYqD0afWBmth3o%2BvoYmvhi%2FjS%2FJc8j7PIOd%2FjIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwlH0b1EKU4DnhkSyrcAw%2Btyp2ctBmy%2BCwxxC1noZ0qYVYGZvhABmSjzo7x7eA9a1Y53eaJTaFEW%2BeF0AQJ4T5OkH4F7lPins0tRQzGryqsn04svWOgmy8WzRmGG4tvAg62epZY2WzCpHQvLKKJcu%2FF6jF4Sn8C8KzK7jSErzTAh8Ab9rH7xDe9z3BDCq0iaahYcwLfJwL8pZ5rQWBpj%2Fb37L7WGF%2BuWA%2B33v029Rmnz3YGjsOngC8MvD1E2YifoKJlfAIupFK6mVt7MeaHSg5yDpDeiGYvcCKZJEA3hR%2BrBk0a7ZtvV3wIyzvtQ4Ykn2UWzqSTVaZoeArRDFpwp1IPGvj%2F8FBDSsF5tV8yJLlyt1cWGbSqmbQrjswGwCUIzIesLopC1377i8N06SOI0yadQRoINvt4xnSXv4l42q%2BfeS%2FxVqAWOtgW10stpZW61dEvTdL87Z3bfa8NLLXXsSDB5swFfH4ZP%2BQNedmjX9ElD%2BheZOV4%2FHgoF4FYOhLLmoLSsyqMgeOjZuYtrKVO06HsBMejI3MfuKvnB%2BPuaRufrppYRGxGEpBK8rftRGhhCBkiMZ7Wl2c3MgVE9LJbLcH1SsNfmvuejgdhgzu1F4W5nWJVZOUBQz4DEdvTyhWp5UL1Hn%2FdIJ5ZuaLfMPe0k8MGOqUBXxJoE1Yxabwjzy9MGXUmAKVeKc84cqNWawBz%2FeOPrIx1gfdqOuPtvXHp2JiRhr1vfPJ%2BZa290x6LzrmdZcO3FHKZKbGzCDRSHS2b0%2FPeia3kMfAa3SMoPpqlJjf8Mm%2FQB3o9vCOQzE%2FhgFxpr2jm%2F5qCLRAXxcVhlk5AbTXvtSyc5hMhVxfUjbi3WG2CacBuo5wy1JBrGAskFPvH%2FTJX6bB2rBR8&X-Amz-Signature=19f2a5889697c9255e48feb8bf311a072e5e67c56d668ed8c1d9e049bb6bdd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
