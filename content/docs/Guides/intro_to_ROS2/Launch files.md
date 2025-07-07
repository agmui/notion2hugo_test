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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVDXGDG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIC72GTlR%2BBMLxFcQ5etohtzy6vh8L6KNxOBMUyGHLvKJAiEAmmjGi6InY22XdACC%2BSYKKlbJVn43q45kI6znWPw04nYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA1W69iZ1DeO7EFqPCrcA3%2Fh7cIcbvWu5Iu9y2wNvLp2mv6MXTaDAMM%2B9TXOVCG7wjHOnCY%2Bv%2BqRHpGirfq71uJ%2FlQWztrAB415kxadtums3TL0WbkkdQ98mBWs%2BhbEefPbNuH7KDnkIcNlG1coeW7QIJTFzFTikDsDhWO8J4OpZq2NAwmbvHCHiksGKIoDYDwa%2Bnbsv0a5w8Bq60HhWthKqKP6oChHrL17%2FW7ZPP5RoSs39lx76%2FHheZLqGEI%2BpOAki17yPSShDUqwLKGkQEfisqnbconk0zHf1t4N5tz%2BdkSnFZuszS%2Bx0dhZ0v3PSW0zplu4wNeEAgPIiDkGlpKYjXr7xo%2B6tINFnKV%2FKhSz8oOVBFia%2BYZ9aU%2BrdYgolTCxHt0evOGOp4MIerxfYX2FTe7TammoKMxJDIZKn4LtZwng2TkPAfLxXVBXcapWwj8sgcus25ZowMULNd5U%2F2oyFq8eOeTA9U1I4Du5wXRPyu6VcjmjhW3oBIaZygQ3HyjSKRfRb1PeHyCP2%2BIu7HgbE8t3mw1DUEcc6AZl4f24GwaJxoGA2iX3VcSzXv3ZbLDxpox8lsVGewIU6crJ6G8ZFJrs%2F7P%2Fd%2F1fK85y1pjTcGyTPlPCL775qUZ2hRkhTQZF3OkZw1M7Tnpt1MIGWsMMGOqUBl3QHHsML9SDivDaIakOAiX40pcAaYpWTPr1rV2fzcMSbSvD%2BAVub%2FFxV5NBHVK3sOcWqmFjvgA12n4B%2FBBaxFUAYlcpOUV79rHYoVAWhsg21qVPpazmdRyNXNRaMbYAxK2Bplv6mYhH8SaN0Wjl%2Flbl0SJfpIu%2FlE27%2FSobk%2B6qgtLkpYFvj1k52hU74dFMO0a7bcL%2BmbKyxWl2ayHCbbGuvAK1L&X-Amz-Signature=1ab90035fbfa043990f25665612681f7841c2263f775fd6b0a710058bbb9fc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVDXGDG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIC72GTlR%2BBMLxFcQ5etohtzy6vh8L6KNxOBMUyGHLvKJAiEAmmjGi6InY22XdACC%2BSYKKlbJVn43q45kI6znWPw04nYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA1W69iZ1DeO7EFqPCrcA3%2Fh7cIcbvWu5Iu9y2wNvLp2mv6MXTaDAMM%2B9TXOVCG7wjHOnCY%2Bv%2BqRHpGirfq71uJ%2FlQWztrAB415kxadtums3TL0WbkkdQ98mBWs%2BhbEefPbNuH7KDnkIcNlG1coeW7QIJTFzFTikDsDhWO8J4OpZq2NAwmbvHCHiksGKIoDYDwa%2Bnbsv0a5w8Bq60HhWthKqKP6oChHrL17%2FW7ZPP5RoSs39lx76%2FHheZLqGEI%2BpOAki17yPSShDUqwLKGkQEfisqnbconk0zHf1t4N5tz%2BdkSnFZuszS%2Bx0dhZ0v3PSW0zplu4wNeEAgPIiDkGlpKYjXr7xo%2B6tINFnKV%2FKhSz8oOVBFia%2BYZ9aU%2BrdYgolTCxHt0evOGOp4MIerxfYX2FTe7TammoKMxJDIZKn4LtZwng2TkPAfLxXVBXcapWwj8sgcus25ZowMULNd5U%2F2oyFq8eOeTA9U1I4Du5wXRPyu6VcjmjhW3oBIaZygQ3HyjSKRfRb1PeHyCP2%2BIu7HgbE8t3mw1DUEcc6AZl4f24GwaJxoGA2iX3VcSzXv3ZbLDxpox8lsVGewIU6crJ6G8ZFJrs%2F7P%2Fd%2F1fK85y1pjTcGyTPlPCL775qUZ2hRkhTQZF3OkZw1M7Tnpt1MIGWsMMGOqUBl3QHHsML9SDivDaIakOAiX40pcAaYpWTPr1rV2fzcMSbSvD%2BAVub%2FFxV5NBHVK3sOcWqmFjvgA12n4B%2FBBaxFUAYlcpOUV79rHYoVAWhsg21qVPpazmdRyNXNRaMbYAxK2Bplv6mYhH8SaN0Wjl%2Flbl0SJfpIu%2FlE27%2FSobk%2B6qgtLkpYFvj1k52hU74dFMO0a7bcL%2BmbKyxWl2ayHCbbGuvAK1L&X-Amz-Signature=c411ad856a790e8a42accebedaec99f5b8886ad338845e06430a5264c9f4d68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVDXGDG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIC72GTlR%2BBMLxFcQ5etohtzy6vh8L6KNxOBMUyGHLvKJAiEAmmjGi6InY22XdACC%2BSYKKlbJVn43q45kI6znWPw04nYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDA1W69iZ1DeO7EFqPCrcA3%2Fh7cIcbvWu5Iu9y2wNvLp2mv6MXTaDAMM%2B9TXOVCG7wjHOnCY%2Bv%2BqRHpGirfq71uJ%2FlQWztrAB415kxadtums3TL0WbkkdQ98mBWs%2BhbEefPbNuH7KDnkIcNlG1coeW7QIJTFzFTikDsDhWO8J4OpZq2NAwmbvHCHiksGKIoDYDwa%2Bnbsv0a5w8Bq60HhWthKqKP6oChHrL17%2FW7ZPP5RoSs39lx76%2FHheZLqGEI%2BpOAki17yPSShDUqwLKGkQEfisqnbconk0zHf1t4N5tz%2BdkSnFZuszS%2Bx0dhZ0v3PSW0zplu4wNeEAgPIiDkGlpKYjXr7xo%2B6tINFnKV%2FKhSz8oOVBFia%2BYZ9aU%2BrdYgolTCxHt0evOGOp4MIerxfYX2FTe7TammoKMxJDIZKn4LtZwng2TkPAfLxXVBXcapWwj8sgcus25ZowMULNd5U%2F2oyFq8eOeTA9U1I4Du5wXRPyu6VcjmjhW3oBIaZygQ3HyjSKRfRb1PeHyCP2%2BIu7HgbE8t3mw1DUEcc6AZl4f24GwaJxoGA2iX3VcSzXv3ZbLDxpox8lsVGewIU6crJ6G8ZFJrs%2F7P%2Fd%2F1fK85y1pjTcGyTPlPCL775qUZ2hRkhTQZF3OkZw1M7Tnpt1MIGWsMMGOqUBl3QHHsML9SDivDaIakOAiX40pcAaYpWTPr1rV2fzcMSbSvD%2BAVub%2FFxV5NBHVK3sOcWqmFjvgA12n4B%2FBBaxFUAYlcpOUV79rHYoVAWhsg21qVPpazmdRyNXNRaMbYAxK2Bplv6mYhH8SaN0Wjl%2Flbl0SJfpIu%2FlE27%2FSobk%2B6qgtLkpYFvj1k52hU74dFMO0a7bcL%2BmbKyxWl2ayHCbbGuvAK1L&X-Amz-Signature=1791a6206e7b7ac8ff117764e1ffe77694652e11b750cf8871e01b2b27b3e130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
