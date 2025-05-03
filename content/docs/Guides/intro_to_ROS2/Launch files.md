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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2LYHA3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDID13RguONg%2F8GwLKG2NtgbZkvRF5ychFDvQiX1mpkaAIgKm3NjSCTa6FtOnEZ2Vmvwg77nJo6ZosO1AeaMKqgfVEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTzshexop%2FgsN4%2BuCrcA%2BbVGK9SqZejNqNEcFU9dbK8XhYfcaG1gWN5YvYm12FPVnIYxafz6jyUCBzdAVCVQNwTkaO2dHmykX1tuCy0G6oYo5rReqLBge6HusvQmuz0ROc0YOG5VubUmcojuKxwN%2FwbDiINeXZkeUA%2Bx1OeoOeRvIODGpcL%2FYmajzq0Yu1lorLFxADAkPGKVWMv%2BvoGbU6GEzzLKplE5bKVnPk3XrpVgYZq9thoh6tPAVjXBBrHw8A6hw4K3KhjEBnMTIoXS0ciEpyuDg9OXNp%2BJ6WxtDguuuuQdcpTuAJ0M19v7cs5T8Dx0q2ZZyVymXf9rizgELPJGZepHOlXQMxUkP1rPylpi6O5PzK41Xn5r06ScHXF3jNCwsBGFQuDEZtD8neUfXx%2FTeJEremXbr2VIyUJ4wjxkcFug8QuBoylBFr6tvDqJxiyLflpuvPIbnvtH1l0Bo%2FaaoPtXl6in97yS%2BNY9y%2BRIgqA46%2Ba6q9%2FFf3pYu1GYHWfkVE8WfqIVH5JhxPeRPi2SIFgw4fEU0CBCf%2BTqMXvpdUIVyxTxOxoLaFwmkbE1f0inr1HihOv0zn3sqAAxCqkKd%2BT50fpFqhMzsGA%2BxTlGSCfKjjyO4upRrQQ8BDWJIxHUSO%2BLA7BbzBmML6q2cAGOqUBvfl5t7I6BoJNa5EzvjYdIJu34wj8f0CEa%2FLfU3rUpXMYNCpgMOyvd303j8vA%2BoGa05LNHA8z6dOa5LD%2BQQ7x4LficUEotp4DBAg%2BDPwYwEtfjb0xRVUVHPZPEmkG1SS6yVtYf9ZZzjzXsCc0FdHFy19RyXwL%2FkKsXh2IjY%2F0hb0qzjuH7ilC2EN554MCMVP32n6ncELNzv6hjX%2FDC%2Fo2GjBX5q94&X-Amz-Signature=d6c441c2e4e2cfb3935f018165aef5fafddb67c286aa0b7395e46aedc4acf256&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2LYHA3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDID13RguONg%2F8GwLKG2NtgbZkvRF5ychFDvQiX1mpkaAIgKm3NjSCTa6FtOnEZ2Vmvwg77nJo6ZosO1AeaMKqgfVEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTzshexop%2FgsN4%2BuCrcA%2BbVGK9SqZejNqNEcFU9dbK8XhYfcaG1gWN5YvYm12FPVnIYxafz6jyUCBzdAVCVQNwTkaO2dHmykX1tuCy0G6oYo5rReqLBge6HusvQmuz0ROc0YOG5VubUmcojuKxwN%2FwbDiINeXZkeUA%2Bx1OeoOeRvIODGpcL%2FYmajzq0Yu1lorLFxADAkPGKVWMv%2BvoGbU6GEzzLKplE5bKVnPk3XrpVgYZq9thoh6tPAVjXBBrHw8A6hw4K3KhjEBnMTIoXS0ciEpyuDg9OXNp%2BJ6WxtDguuuuQdcpTuAJ0M19v7cs5T8Dx0q2ZZyVymXf9rizgELPJGZepHOlXQMxUkP1rPylpi6O5PzK41Xn5r06ScHXF3jNCwsBGFQuDEZtD8neUfXx%2FTeJEremXbr2VIyUJ4wjxkcFug8QuBoylBFr6tvDqJxiyLflpuvPIbnvtH1l0Bo%2FaaoPtXl6in97yS%2BNY9y%2BRIgqA46%2Ba6q9%2FFf3pYu1GYHWfkVE8WfqIVH5JhxPeRPi2SIFgw4fEU0CBCf%2BTqMXvpdUIVyxTxOxoLaFwmkbE1f0inr1HihOv0zn3sqAAxCqkKd%2BT50fpFqhMzsGA%2BxTlGSCfKjjyO4upRrQQ8BDWJIxHUSO%2BLA7BbzBmML6q2cAGOqUBvfl5t7I6BoJNa5EzvjYdIJu34wj8f0CEa%2FLfU3rUpXMYNCpgMOyvd303j8vA%2BoGa05LNHA8z6dOa5LD%2BQQ7x4LficUEotp4DBAg%2BDPwYwEtfjb0xRVUVHPZPEmkG1SS6yVtYf9ZZzjzXsCc0FdHFy19RyXwL%2FkKsXh2IjY%2F0hb0qzjuH7ilC2EN554MCMVP32n6ncELNzv6hjX%2FDC%2Fo2GjBX5q94&X-Amz-Signature=1201db6ed356fb771d76c5e2dca0956de4a064b59bfc3ca9a1f01a1200ccb375&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2LYHA3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDID13RguONg%2F8GwLKG2NtgbZkvRF5ychFDvQiX1mpkaAIgKm3NjSCTa6FtOnEZ2Vmvwg77nJo6ZosO1AeaMKqgfVEqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTzshexop%2FgsN4%2BuCrcA%2BbVGK9SqZejNqNEcFU9dbK8XhYfcaG1gWN5YvYm12FPVnIYxafz6jyUCBzdAVCVQNwTkaO2dHmykX1tuCy0G6oYo5rReqLBge6HusvQmuz0ROc0YOG5VubUmcojuKxwN%2FwbDiINeXZkeUA%2Bx1OeoOeRvIODGpcL%2FYmajzq0Yu1lorLFxADAkPGKVWMv%2BvoGbU6GEzzLKplE5bKVnPk3XrpVgYZq9thoh6tPAVjXBBrHw8A6hw4K3KhjEBnMTIoXS0ciEpyuDg9OXNp%2BJ6WxtDguuuuQdcpTuAJ0M19v7cs5T8Dx0q2ZZyVymXf9rizgELPJGZepHOlXQMxUkP1rPylpi6O5PzK41Xn5r06ScHXF3jNCwsBGFQuDEZtD8neUfXx%2FTeJEremXbr2VIyUJ4wjxkcFug8QuBoylBFr6tvDqJxiyLflpuvPIbnvtH1l0Bo%2FaaoPtXl6in97yS%2BNY9y%2BRIgqA46%2Ba6q9%2FFf3pYu1GYHWfkVE8WfqIVH5JhxPeRPi2SIFgw4fEU0CBCf%2BTqMXvpdUIVyxTxOxoLaFwmkbE1f0inr1HihOv0zn3sqAAxCqkKd%2BT50fpFqhMzsGA%2BxTlGSCfKjjyO4upRrQQ8BDWJIxHUSO%2BLA7BbzBmML6q2cAGOqUBvfl5t7I6BoJNa5EzvjYdIJu34wj8f0CEa%2FLfU3rUpXMYNCpgMOyvd303j8vA%2BoGa05LNHA8z6dOa5LD%2BQQ7x4LficUEotp4DBAg%2BDPwYwEtfjb0xRVUVHPZPEmkG1SS6yVtYf9ZZzjzXsCc0FdHFy19RyXwL%2FkKsXh2IjY%2F0hb0qzjuH7ilC2EN554MCMVP32n6ncELNzv6hjX%2FDC%2Fo2GjBX5q94&X-Amz-Signature=49773263313d1ee26402d4cc66d7f0c27fca9c929cdd3348e72fe2c8ff8a505f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
