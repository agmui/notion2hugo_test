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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AAYC7G%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCgaWStEhygRpUIX4wDrpbybnFcVdwc%2Fbvtk3wfeZsmQIhAOnleMkaP%2FAUIq6JCmj%2FbE%2FEW9NLFLzTr%2Fokwx5ME9LJKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2F1sbAoGN9B9eoIkq3AMZn3fEfXEIH2Pq%2BbS%2BCseIenD3d9etYe1LzQckCOFl2lIWyXcn90UrnHsvmN7RIKwBGH0e5oMc2z5VFtsurfPyLOgq7c8%2B8He%2FelxgK8kYdikK%2BbbfAYQqllstHEp%2F5jfKeoLPWbZVXYyWv05j9I749U%2BoS6N9FzhD0iLZxG4Gw4N0LVmXspO9a5MBgqZPJhqjUKGdQJ3jv2mxjJ79qz5YG2Dt8c0G6Xb2ky2kBoT94g9xZElRcaXYONJfOlpVeZNb7t7zutuV6%2FTZ%2BW0i0l26sGiu06X%2F%2BRn%2BlbqKMt7ovOx1QOmRxDfNj5Tb5zeuVcu5vtQ%2FlLV0RW3IR%2F5NYDJ4dGFq4CSp%2FQ72xSpm4jcYxmt8D1nVb1x%2FauRZVfkgeAXtiw3%2FLBntuJ4%2BiAnXNdqkuAsFWwYnvbGiC%2Bwg6p1g003MGICfysZ9a4BJlx94bminRc%2FHf68oN1ZOyI0rZ4YkagS8ZMr0PStNdJ5yPrkcQk%2BVioz0aoMJs0yoghIo%2BVb4BDjI9ynmTRRyNhBMkRDO%2Bap8wwxHyoD81I6%2FO9uFbubzUJHttFff8%2BDHPRDnREIJxNg7zO4PLhc2H3su3EbxV%2BmcrX3s0K0Yqe0h0BFnvqjARnwYVt0nrMd78DCGh9S%2BBjqkAZLsAD6klBTO072APywEnJHWja35UKfakEVv7lZsVQbSyYgvoFc8nClE3Nta4g8yIwLdM8l1rAY8oTmXmW3mZPaqT0b0K9tmJnE6n8rKmV9IKJHt%2BrZKwxHMWKq8nTPVefHpE9sYRx30os9hX6p30OvgvCmw7DKz6QYgFA8q%2FJKR%2Bzr7K3BdoFdzui6B7c8YpLUNOI8Q9B2I1Obb1pBoneS6KUlP&X-Amz-Signature=01892ac5a4c5900d09f5d6a1ba6b2416fe1f98bcdc4249ae307c47c392a00d64&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AAYC7G%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCgaWStEhygRpUIX4wDrpbybnFcVdwc%2Fbvtk3wfeZsmQIhAOnleMkaP%2FAUIq6JCmj%2FbE%2FEW9NLFLzTr%2Fokwx5ME9LJKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2F1sbAoGN9B9eoIkq3AMZn3fEfXEIH2Pq%2BbS%2BCseIenD3d9etYe1LzQckCOFl2lIWyXcn90UrnHsvmN7RIKwBGH0e5oMc2z5VFtsurfPyLOgq7c8%2B8He%2FelxgK8kYdikK%2BbbfAYQqllstHEp%2F5jfKeoLPWbZVXYyWv05j9I749U%2BoS6N9FzhD0iLZxG4Gw4N0LVmXspO9a5MBgqZPJhqjUKGdQJ3jv2mxjJ79qz5YG2Dt8c0G6Xb2ky2kBoT94g9xZElRcaXYONJfOlpVeZNb7t7zutuV6%2FTZ%2BW0i0l26sGiu06X%2F%2BRn%2BlbqKMt7ovOx1QOmRxDfNj5Tb5zeuVcu5vtQ%2FlLV0RW3IR%2F5NYDJ4dGFq4CSp%2FQ72xSpm4jcYxmt8D1nVb1x%2FauRZVfkgeAXtiw3%2FLBntuJ4%2BiAnXNdqkuAsFWwYnvbGiC%2Bwg6p1g003MGICfysZ9a4BJlx94bminRc%2FHf68oN1ZOyI0rZ4YkagS8ZMr0PStNdJ5yPrkcQk%2BVioz0aoMJs0yoghIo%2BVb4BDjI9ynmTRRyNhBMkRDO%2Bap8wwxHyoD81I6%2FO9uFbubzUJHttFff8%2BDHPRDnREIJxNg7zO4PLhc2H3su3EbxV%2BmcrX3s0K0Yqe0h0BFnvqjARnwYVt0nrMd78DCGh9S%2BBjqkAZLsAD6klBTO072APywEnJHWja35UKfakEVv7lZsVQbSyYgvoFc8nClE3Nta4g8yIwLdM8l1rAY8oTmXmW3mZPaqT0b0K9tmJnE6n8rKmV9IKJHt%2BrZKwxHMWKq8nTPVefHpE9sYRx30os9hX6p30OvgvCmw7DKz6QYgFA8q%2FJKR%2Bzr7K3BdoFdzui6B7c8YpLUNOI8Q9B2I1Obb1pBoneS6KUlP&X-Amz-Signature=607f8fc6e12545213e4b18e342946884ea7ac281cad3e48e9868fff516e5a9df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AAYC7G%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCgaWStEhygRpUIX4wDrpbybnFcVdwc%2Fbvtk3wfeZsmQIhAOnleMkaP%2FAUIq6JCmj%2FbE%2FEW9NLFLzTr%2Fokwx5ME9LJKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B%2F1sbAoGN9B9eoIkq3AMZn3fEfXEIH2Pq%2BbS%2BCseIenD3d9etYe1LzQckCOFl2lIWyXcn90UrnHsvmN7RIKwBGH0e5oMc2z5VFtsurfPyLOgq7c8%2B8He%2FelxgK8kYdikK%2BbbfAYQqllstHEp%2F5jfKeoLPWbZVXYyWv05j9I749U%2BoS6N9FzhD0iLZxG4Gw4N0LVmXspO9a5MBgqZPJhqjUKGdQJ3jv2mxjJ79qz5YG2Dt8c0G6Xb2ky2kBoT94g9xZElRcaXYONJfOlpVeZNb7t7zutuV6%2FTZ%2BW0i0l26sGiu06X%2F%2BRn%2BlbqKMt7ovOx1QOmRxDfNj5Tb5zeuVcu5vtQ%2FlLV0RW3IR%2F5NYDJ4dGFq4CSp%2FQ72xSpm4jcYxmt8D1nVb1x%2FauRZVfkgeAXtiw3%2FLBntuJ4%2BiAnXNdqkuAsFWwYnvbGiC%2Bwg6p1g003MGICfysZ9a4BJlx94bminRc%2FHf68oN1ZOyI0rZ4YkagS8ZMr0PStNdJ5yPrkcQk%2BVioz0aoMJs0yoghIo%2BVb4BDjI9ynmTRRyNhBMkRDO%2Bap8wwxHyoD81I6%2FO9uFbubzUJHttFff8%2BDHPRDnREIJxNg7zO4PLhc2H3su3EbxV%2BmcrX3s0K0Yqe0h0BFnvqjARnwYVt0nrMd78DCGh9S%2BBjqkAZLsAD6klBTO072APywEnJHWja35UKfakEVv7lZsVQbSyYgvoFc8nClE3Nta4g8yIwLdM8l1rAY8oTmXmW3mZPaqT0b0K9tmJnE6n8rKmV9IKJHt%2BrZKwxHMWKq8nTPVefHpE9sYRx30os9hX6p30OvgvCmw7DKz6QYgFA8q%2FJKR%2Bzr7K3BdoFdzui6B7c8YpLUNOI8Q9B2I1Obb1pBoneS6KUlP&X-Amz-Signature=cbe781f596540906f31cdbeba377893ec94fd5706b2659543d9cedda1f5823c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
