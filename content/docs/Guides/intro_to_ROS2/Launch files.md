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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRSXQSE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDO7IkEET0C3E6Uqs67IPx%2B8agEmFXcQr%2FCtfNlBK70YgIgCP%2BTAKZeKNzbWFNNLvCmXQel48FozVKIyfQ%2BtRkzOekqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHomkTjvLQg9jxXfVCrcA0OsbbaaxKr2ubILoZlYgx7%2Bc4zcuLw6Am30vyb0IuyVqhgEHUPA5APfBewgYfh9rd7TYSNW1lX7XGzDp1p0LDOx3zypPkguAt7g%2FUK4B4%2BNZNWF5EjmmjFuF4UP8CHEYv8iBEaPCPkeDrrcGJ9YtCXPazc1EyhsMTXXAqYL7sAfGYPkJ4Ma4VnhWjf%2FgNY7ZgOmn7x8jC%2Fv%2FH%2FdVhsJPiWPu4k3FZSuR7BZwxTSfGQ%2Fg869neyl%2FKSH3IbgdOtJhL9vuEO2UALTw03OKm0IsIEa%2BaFPjW5U76s8nje1RsnBTHWZuWEvuDmGLn%2BEILGJd8ovmQA%2BWg6ga1ZJNWV3GVJUcGYH2lIh%2FSVg%2FnyTJjLNCR0XvaGDJQjDou4FGdDW2uhaMxgKAgvcT3QCsaMT83WYkdrrACI7yY85M11xMlxLGDQ3h7ncEQccZSCh2wHO%2FYvzY8gUqanTNdycf6qPGxUcMlUVJPmVKavpvU0eHWk%2BgvRRfVwKjV3jjmp5cz9777PTFUd8GJ7eTXuPsguVBlOIS23llatMJCDpc3Bh2ZDycRaf%2BoWHaNZ36m0c0zbxFpyoB9HUjsBV6cQS4%2BUcwqU8pmk7rEovhvBQVf5f4llmuptOAL9Wv13HJUoZMK%2Fztr8GOqUBL73ekEJ1eJO0rVrnTgHXdLfBjBgXqlY1Di43J7BvTvyXwABg5XHxoMhTjONNhxUaHRrHwwX%2FMoQ86%2FBMJMsu20k2VflmhC7i4kbFyUelPPMa1U636YaErgu9fUBzM03xgyfrxigSIWMxni211hxHwAn4%2B5mgTdYzndUi7NVeuu1Q8YR%2Bm2epJhwZUZc4zq7Eyd4NtJyYs2lcEM7NaASBuXU0J%2BC%2F&X-Amz-Signature=b7c68cfeb84143df040a3f486ee2c5dfaea4c988c65c87b6f79709d8ed163c46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRSXQSE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDO7IkEET0C3E6Uqs67IPx%2B8agEmFXcQr%2FCtfNlBK70YgIgCP%2BTAKZeKNzbWFNNLvCmXQel48FozVKIyfQ%2BtRkzOekqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHomkTjvLQg9jxXfVCrcA0OsbbaaxKr2ubILoZlYgx7%2Bc4zcuLw6Am30vyb0IuyVqhgEHUPA5APfBewgYfh9rd7TYSNW1lX7XGzDp1p0LDOx3zypPkguAt7g%2FUK4B4%2BNZNWF5EjmmjFuF4UP8CHEYv8iBEaPCPkeDrrcGJ9YtCXPazc1EyhsMTXXAqYL7sAfGYPkJ4Ma4VnhWjf%2FgNY7ZgOmn7x8jC%2Fv%2FH%2FdVhsJPiWPu4k3FZSuR7BZwxTSfGQ%2Fg869neyl%2FKSH3IbgdOtJhL9vuEO2UALTw03OKm0IsIEa%2BaFPjW5U76s8nje1RsnBTHWZuWEvuDmGLn%2BEILGJd8ovmQA%2BWg6ga1ZJNWV3GVJUcGYH2lIh%2FSVg%2FnyTJjLNCR0XvaGDJQjDou4FGdDW2uhaMxgKAgvcT3QCsaMT83WYkdrrACI7yY85M11xMlxLGDQ3h7ncEQccZSCh2wHO%2FYvzY8gUqanTNdycf6qPGxUcMlUVJPmVKavpvU0eHWk%2BgvRRfVwKjV3jjmp5cz9777PTFUd8GJ7eTXuPsguVBlOIS23llatMJCDpc3Bh2ZDycRaf%2BoWHaNZ36m0c0zbxFpyoB9HUjsBV6cQS4%2BUcwqU8pmk7rEovhvBQVf5f4llmuptOAL9Wv13HJUoZMK%2Fztr8GOqUBL73ekEJ1eJO0rVrnTgHXdLfBjBgXqlY1Di43J7BvTvyXwABg5XHxoMhTjONNhxUaHRrHwwX%2FMoQ86%2FBMJMsu20k2VflmhC7i4kbFyUelPPMa1U636YaErgu9fUBzM03xgyfrxigSIWMxni211hxHwAn4%2B5mgTdYzndUi7NVeuu1Q8YR%2Bm2epJhwZUZc4zq7Eyd4NtJyYs2lcEM7NaASBuXU0J%2BC%2F&X-Amz-Signature=835c72eb96916b6d277961d83d972f945ef65577ee2aeea2688efb925cf9cb78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRSXQSE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDO7IkEET0C3E6Uqs67IPx%2B8agEmFXcQr%2FCtfNlBK70YgIgCP%2BTAKZeKNzbWFNNLvCmXQel48FozVKIyfQ%2BtRkzOekqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHomkTjvLQg9jxXfVCrcA0OsbbaaxKr2ubILoZlYgx7%2Bc4zcuLw6Am30vyb0IuyVqhgEHUPA5APfBewgYfh9rd7TYSNW1lX7XGzDp1p0LDOx3zypPkguAt7g%2FUK4B4%2BNZNWF5EjmmjFuF4UP8CHEYv8iBEaPCPkeDrrcGJ9YtCXPazc1EyhsMTXXAqYL7sAfGYPkJ4Ma4VnhWjf%2FgNY7ZgOmn7x8jC%2Fv%2FH%2FdVhsJPiWPu4k3FZSuR7BZwxTSfGQ%2Fg869neyl%2FKSH3IbgdOtJhL9vuEO2UALTw03OKm0IsIEa%2BaFPjW5U76s8nje1RsnBTHWZuWEvuDmGLn%2BEILGJd8ovmQA%2BWg6ga1ZJNWV3GVJUcGYH2lIh%2FSVg%2FnyTJjLNCR0XvaGDJQjDou4FGdDW2uhaMxgKAgvcT3QCsaMT83WYkdrrACI7yY85M11xMlxLGDQ3h7ncEQccZSCh2wHO%2FYvzY8gUqanTNdycf6qPGxUcMlUVJPmVKavpvU0eHWk%2BgvRRfVwKjV3jjmp5cz9777PTFUd8GJ7eTXuPsguVBlOIS23llatMJCDpc3Bh2ZDycRaf%2BoWHaNZ36m0c0zbxFpyoB9HUjsBV6cQS4%2BUcwqU8pmk7rEovhvBQVf5f4llmuptOAL9Wv13HJUoZMK%2Fztr8GOqUBL73ekEJ1eJO0rVrnTgHXdLfBjBgXqlY1Di43J7BvTvyXwABg5XHxoMhTjONNhxUaHRrHwwX%2FMoQ86%2FBMJMsu20k2VflmhC7i4kbFyUelPPMa1U636YaErgu9fUBzM03xgyfrxigSIWMxni211hxHwAn4%2B5mgTdYzndUi7NVeuu1Q8YR%2Bm2epJhwZUZc4zq7Eyd4NtJyYs2lcEM7NaASBuXU0J%2BC%2F&X-Amz-Signature=eb887b1e3342a316ec01a1d889f3144ecbf9ed9b436078ebd69dcec5ac54700a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
