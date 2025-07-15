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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHVPTP3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFuWRLFL1fMQ9IHET%2FX6Qf6ipkSew0JkrTGbFxsBJgriAiEAvXmqJNe7XosmP3W7wjaqA3mAKvwIPpyIZF6qLNU4ZNEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG4aDM%2BvQ4LS5zoDuSrcAwLrKawgW2XEXmBY80F%2FlmrgrraS81ysKXwx7dhJNmn1y6tKUOxyFM4awXL3%2F6AAzjKcXkx9YEi4R%2B83RiUtfbwGjn5FzwwHtdvOUcdeS3HJTm6%2BixqeKotVb75ZFGnwDKaFwC1Th4xhajAmSTnwmzdkWtfEgH7TfRHeM3to2a9ui%2BI%2FR7ECOfGCw1bYrbIAjcgbx0EuwT5o47hjjzWVkEepM08ITOnaY5vcgA%2F3HOQHey5II622hMbOUidcn6fydcc7hAlnCuPjPn%2Frz4aYjQlhKlHQFpFgpK7l4CQMAE2lqzk6LulQUAZWivOcKX%2FCu%2BkLa%2BDOpSu3KGXiiRmpKpxryg06Oj%2FdPnY%2BVyMQP%2FSvE86jNoqBkKJGuOUk7HcoxwtvWbFRzS4x%2F9dcB%2F5A3LkFZ2NQl23x0q5br%2Bq8i6H1eZhBlPQ6pXQ2HIO0qLX3yXqIFGMpgKz5X51l5ZxlhRrXugqnPuIktrBqcnyvijyUXrXRsOCdc7sM%2B6%2F691Tz7Hrb1G6S1G8QI4JlUmukiqLxmyCy6hEhiH7BiqeQv0M%2BmT1QnVng22F6dRJpZePasc2XB6jGmLYBf2ItULeEMJ7u9Dy8pZjNMJKYx%2BABbAEFmbuAi2y%2BXFZ3CJMvMJWk1sMGOqUBPTW2aG02JeNm%2B5QzS0amGyhMmos5agpRtPmmroQoS4SFBys%2Bjm8GYkS5JipqbyWXg%2B0nHKjDenFjga7UUEk%2BGpYxXwwd4IzBYgb2RSw2a19CwZHVytHZ8sKaPPOl92Iv4ucYqleXLlrb2prEcwfg4mJmaJzEJ3r%2BBjxY6A9zgwyyLr6qavycB5I7u5gTVBw4Xw9rvJPR1wVB3K7To042aPX%2Fx8Il&X-Amz-Signature=e44c2cf8317726a1e3767ed914ff40f903cf94aea7584a78c7141e2a565d7db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHVPTP3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFuWRLFL1fMQ9IHET%2FX6Qf6ipkSew0JkrTGbFxsBJgriAiEAvXmqJNe7XosmP3W7wjaqA3mAKvwIPpyIZF6qLNU4ZNEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG4aDM%2BvQ4LS5zoDuSrcAwLrKawgW2XEXmBY80F%2FlmrgrraS81ysKXwx7dhJNmn1y6tKUOxyFM4awXL3%2F6AAzjKcXkx9YEi4R%2B83RiUtfbwGjn5FzwwHtdvOUcdeS3HJTm6%2BixqeKotVb75ZFGnwDKaFwC1Th4xhajAmSTnwmzdkWtfEgH7TfRHeM3to2a9ui%2BI%2FR7ECOfGCw1bYrbIAjcgbx0EuwT5o47hjjzWVkEepM08ITOnaY5vcgA%2F3HOQHey5II622hMbOUidcn6fydcc7hAlnCuPjPn%2Frz4aYjQlhKlHQFpFgpK7l4CQMAE2lqzk6LulQUAZWivOcKX%2FCu%2BkLa%2BDOpSu3KGXiiRmpKpxryg06Oj%2FdPnY%2BVyMQP%2FSvE86jNoqBkKJGuOUk7HcoxwtvWbFRzS4x%2F9dcB%2F5A3LkFZ2NQl23x0q5br%2Bq8i6H1eZhBlPQ6pXQ2HIO0qLX3yXqIFGMpgKz5X51l5ZxlhRrXugqnPuIktrBqcnyvijyUXrXRsOCdc7sM%2B6%2F691Tz7Hrb1G6S1G8QI4JlUmukiqLxmyCy6hEhiH7BiqeQv0M%2BmT1QnVng22F6dRJpZePasc2XB6jGmLYBf2ItULeEMJ7u9Dy8pZjNMJKYx%2BABbAEFmbuAi2y%2BXFZ3CJMvMJWk1sMGOqUBPTW2aG02JeNm%2B5QzS0amGyhMmos5agpRtPmmroQoS4SFBys%2Bjm8GYkS5JipqbyWXg%2B0nHKjDenFjga7UUEk%2BGpYxXwwd4IzBYgb2RSw2a19CwZHVytHZ8sKaPPOl92Iv4ucYqleXLlrb2prEcwfg4mJmaJzEJ3r%2BBjxY6A9zgwyyLr6qavycB5I7u5gTVBw4Xw9rvJPR1wVB3K7To042aPX%2Fx8Il&X-Amz-Signature=4061a74e21c41793c208a3d859fea38e71fe7490400f6cacb27b7cb15987ed05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHVPTP3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFuWRLFL1fMQ9IHET%2FX6Qf6ipkSew0JkrTGbFxsBJgriAiEAvXmqJNe7XosmP3W7wjaqA3mAKvwIPpyIZF6qLNU4ZNEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDG4aDM%2BvQ4LS5zoDuSrcAwLrKawgW2XEXmBY80F%2FlmrgrraS81ysKXwx7dhJNmn1y6tKUOxyFM4awXL3%2F6AAzjKcXkx9YEi4R%2B83RiUtfbwGjn5FzwwHtdvOUcdeS3HJTm6%2BixqeKotVb75ZFGnwDKaFwC1Th4xhajAmSTnwmzdkWtfEgH7TfRHeM3to2a9ui%2BI%2FR7ECOfGCw1bYrbIAjcgbx0EuwT5o47hjjzWVkEepM08ITOnaY5vcgA%2F3HOQHey5II622hMbOUidcn6fydcc7hAlnCuPjPn%2Frz4aYjQlhKlHQFpFgpK7l4CQMAE2lqzk6LulQUAZWivOcKX%2FCu%2BkLa%2BDOpSu3KGXiiRmpKpxryg06Oj%2FdPnY%2BVyMQP%2FSvE86jNoqBkKJGuOUk7HcoxwtvWbFRzS4x%2F9dcB%2F5A3LkFZ2NQl23x0q5br%2Bq8i6H1eZhBlPQ6pXQ2HIO0qLX3yXqIFGMpgKz5X51l5ZxlhRrXugqnPuIktrBqcnyvijyUXrXRsOCdc7sM%2B6%2F691Tz7Hrb1G6S1G8QI4JlUmukiqLxmyCy6hEhiH7BiqeQv0M%2BmT1QnVng22F6dRJpZePasc2XB6jGmLYBf2ItULeEMJ7u9Dy8pZjNMJKYx%2BABbAEFmbuAi2y%2BXFZ3CJMvMJWk1sMGOqUBPTW2aG02JeNm%2B5QzS0amGyhMmos5agpRtPmmroQoS4SFBys%2Bjm8GYkS5JipqbyWXg%2B0nHKjDenFjga7UUEk%2BGpYxXwwd4IzBYgb2RSw2a19CwZHVytHZ8sKaPPOl92Iv4ucYqleXLlrb2prEcwfg4mJmaJzEJ3r%2BBjxY6A9zgwyyLr6qavycB5I7u5gTVBw4Xw9rvJPR1wVB3K7To042aPX%2Fx8Il&X-Amz-Signature=0146250a53adc76f1f9623d9686e7e3cd12cd8d338dd0d2bae4f4e7da1145419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
