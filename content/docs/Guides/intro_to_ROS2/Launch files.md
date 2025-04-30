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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7E2KTO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDN0%2FNx9w3GzbaSXBN8eaZoRoROa9XTl3qMJwe4prnJsQIhAMQ1I7VRZj0NNkuFSh4ybX5%2B4GIVo7HH4Fm42uTi3S43KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB1Oxp0kCbgGHycCEq3APggpR6Zg2OO4Sj%2FPRuoV0qvCLoby9WFBlb%2Bn5DQLLJbTnbGeCBTwW6%2F%2B1Ji8imwSDxXMqz5rN1G4sCHTMUd9RWnReAVvyw1SDsZhay%2F2h%2Fski5vyGwgMlAiIk%2F6VraC%2FnIKxA8qdotDZzsxX3ugKRBTjI6VGBWP4XupyTguq3vwjhZfZrnvbR%2FLHztIhQSYCN3ki4WwzKifPc0RB%2FyIIeYGDYHuMDJI8bEsjIPWVe%2B%2FzhYRnhuhTupQ2MPIq71pvBc5DPof7m583P7%2B15RwzkRwduHYjC9%2B77V6sfQ9b9kY%2B3EYIhLtodDwyCCIh2JpnIrBVqL2%2FQIgr0xU4kpJxnB%2FD8Fgj1JW2yUWyvnEK1aUMRwA6b9Q13EodO41JoT0TtEv5LlZCkkSKb1wiUmrVOnrVQg4kAyr%2F2U8CuCa5I1LXCUKdhjD%2BDJbjWVbvUAq0K2VVEWp%2BhrJF2%2B2gpNLm4oK0dqew39DewcsZ9Y1R5DQgvmtB48LZcDv8pj635B66ENAWUXVVB11xe77%2BqPnHEAf7d%2FNGhU7iQ21S2alJzsT8gwvBh%2Fm3hZWV%2FF%2Fow7BLvDAjk0MVz2JJg0xdghABOjc93GTT8CgkSt%2Bhl%2FMJTdYDsOLY6grffjUCKcRDC%2FxMjABjqkAUroHtV9fYcaQSeLJuk1TW0Yfr6LvoWVZxMVtbRWh8q5psM47cqzdeOZ8u7KZfb6hjACRanSaD8yTp1RxtAdzggCS1Yj3XmUD6Q%2Bcj%2B65OOBne7FWsv9dkVeyzIeMupmYUMtdtNAAS%2BNZychL7wjNCUr7OPgmtL9%2BUnHN5wddzzX9ed9v17NkG%2FRiGSiiUR8SOQX4RjuunXlBVbVY8tHD0cC6Gr%2F&X-Amz-Signature=68ff8b220bf6f01e9e0c257d8b4ce67043608024cecebe8fe2aaea80b60e518a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7E2KTO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDN0%2FNx9w3GzbaSXBN8eaZoRoROa9XTl3qMJwe4prnJsQIhAMQ1I7VRZj0NNkuFSh4ybX5%2B4GIVo7HH4Fm42uTi3S43KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB1Oxp0kCbgGHycCEq3APggpR6Zg2OO4Sj%2FPRuoV0qvCLoby9WFBlb%2Bn5DQLLJbTnbGeCBTwW6%2F%2B1Ji8imwSDxXMqz5rN1G4sCHTMUd9RWnReAVvyw1SDsZhay%2F2h%2Fski5vyGwgMlAiIk%2F6VraC%2FnIKxA8qdotDZzsxX3ugKRBTjI6VGBWP4XupyTguq3vwjhZfZrnvbR%2FLHztIhQSYCN3ki4WwzKifPc0RB%2FyIIeYGDYHuMDJI8bEsjIPWVe%2B%2FzhYRnhuhTupQ2MPIq71pvBc5DPof7m583P7%2B15RwzkRwduHYjC9%2B77V6sfQ9b9kY%2B3EYIhLtodDwyCCIh2JpnIrBVqL2%2FQIgr0xU4kpJxnB%2FD8Fgj1JW2yUWyvnEK1aUMRwA6b9Q13EodO41JoT0TtEv5LlZCkkSKb1wiUmrVOnrVQg4kAyr%2F2U8CuCa5I1LXCUKdhjD%2BDJbjWVbvUAq0K2VVEWp%2BhrJF2%2B2gpNLm4oK0dqew39DewcsZ9Y1R5DQgvmtB48LZcDv8pj635B66ENAWUXVVB11xe77%2BqPnHEAf7d%2FNGhU7iQ21S2alJzsT8gwvBh%2Fm3hZWV%2FF%2Fow7BLvDAjk0MVz2JJg0xdghABOjc93GTT8CgkSt%2Bhl%2FMJTdYDsOLY6grffjUCKcRDC%2FxMjABjqkAUroHtV9fYcaQSeLJuk1TW0Yfr6LvoWVZxMVtbRWh8q5psM47cqzdeOZ8u7KZfb6hjACRanSaD8yTp1RxtAdzggCS1Yj3XmUD6Q%2Bcj%2B65OOBne7FWsv9dkVeyzIeMupmYUMtdtNAAS%2BNZychL7wjNCUr7OPgmtL9%2BUnHN5wddzzX9ed9v17NkG%2FRiGSiiUR8SOQX4RjuunXlBVbVY8tHD0cC6Gr%2F&X-Amz-Signature=aed5ada062eea5a2f116815ec90ee65d00a497a157177eac153823403f48b8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7E2KTO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDN0%2FNx9w3GzbaSXBN8eaZoRoROa9XTl3qMJwe4prnJsQIhAMQ1I7VRZj0NNkuFSh4ybX5%2B4GIVo7HH4Fm42uTi3S43KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB1Oxp0kCbgGHycCEq3APggpR6Zg2OO4Sj%2FPRuoV0qvCLoby9WFBlb%2Bn5DQLLJbTnbGeCBTwW6%2F%2B1Ji8imwSDxXMqz5rN1G4sCHTMUd9RWnReAVvyw1SDsZhay%2F2h%2Fski5vyGwgMlAiIk%2F6VraC%2FnIKxA8qdotDZzsxX3ugKRBTjI6VGBWP4XupyTguq3vwjhZfZrnvbR%2FLHztIhQSYCN3ki4WwzKifPc0RB%2FyIIeYGDYHuMDJI8bEsjIPWVe%2B%2FzhYRnhuhTupQ2MPIq71pvBc5DPof7m583P7%2B15RwzkRwduHYjC9%2B77V6sfQ9b9kY%2B3EYIhLtodDwyCCIh2JpnIrBVqL2%2FQIgr0xU4kpJxnB%2FD8Fgj1JW2yUWyvnEK1aUMRwA6b9Q13EodO41JoT0TtEv5LlZCkkSKb1wiUmrVOnrVQg4kAyr%2F2U8CuCa5I1LXCUKdhjD%2BDJbjWVbvUAq0K2VVEWp%2BhrJF2%2B2gpNLm4oK0dqew39DewcsZ9Y1R5DQgvmtB48LZcDv8pj635B66ENAWUXVVB11xe77%2BqPnHEAf7d%2FNGhU7iQ21S2alJzsT8gwvBh%2Fm3hZWV%2FF%2Fow7BLvDAjk0MVz2JJg0xdghABOjc93GTT8CgkSt%2Bhl%2FMJTdYDsOLY6grffjUCKcRDC%2FxMjABjqkAUroHtV9fYcaQSeLJuk1TW0Yfr6LvoWVZxMVtbRWh8q5psM47cqzdeOZ8u7KZfb6hjACRanSaD8yTp1RxtAdzggCS1Yj3XmUD6Q%2Bcj%2B65OOBne7FWsv9dkVeyzIeMupmYUMtdtNAAS%2BNZychL7wjNCUr7OPgmtL9%2BUnHN5wddzzX9ed9v17NkG%2FRiGSiiUR8SOQX4RjuunXlBVbVY8tHD0cC6Gr%2F&X-Amz-Signature=9e871fb4228a04901d6104b84f098388d15cf3e5597643fad03504165adc21d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
