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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMJRRXH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD4ARfMbYm4jNfedorHkaolapF3eZDkJrxdhV5Z7o%2BungIhAIa0%2BSR8X%2Bk%2Bej45YE348dEcwHU83fGsr6mJ3S9sndieKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFmz8UICSQBety6%2FUq3APYpF9nLUqL%2BD4CW3XiTjKouPQnh%2F2Qafms8KjLpOwnaobHXGK4r9bhfXUv66egQ%2BMVapD5pkx0aygCDsnH60QgZ7YIhIW8f3NUR9gKUaeq2Nr1kkYwku4KxZwJ2DvH2n0PS1hI%2Fg93eN6%2BoE5GjNqvODTXPktA3zrFGu9I0q82cqzEvzqD07dUXvx%2FBaBh9SDAMEDIIKkJyKHwBdcquXzKpYfisCZIvW2mNQ8GduoLmVfsZMX7BzJ1iQ0ocg4HUoX6Mi%2BSQW0bB8mfRaiAheBw5sr3%2FDzA6Uwn9TOoWcFB4zO9naS3K08xgCGCXhDw8I58kVD4SUM4FiYzokrWPMXb0MqwbB5Pa%2BDYMcZmlIcTEvHnF6IdBBxO0xbnMUqdEGbsfnAv2b0V%2FXmhzku%2Ba57ejhe3Rh6ph6Otj7q1LoIznxi1dFvuGO7gChX%2FYihygAhTTRwukRJiKfhOXrUC%2F7fGGnLvM28BkjAcOuQxmu2cqgZCZ1D54363oq6Jc%2FzAPS7wHEN3yiHrpj4dQyVzGenfFhq02aJu3uhTeWqDzC58%2Fu74WyCkyIs4PCL39AZOgao%2FNltxw73PZOFoXy9dxsArt7O5RkiTs2MymfdoPNooQS%2BvXWo3llnh%2BGHOtzDwrbvBBjqkAb%2FNEuwqfWemhHChdkQD0m8PqjT1%2FkPiJAQR7ePIPwhvWqlCwjtqJ4dYvnBY1JLPRME6f%2FTk54RiN6hy%2FcHgudi9X838uqo1Hnz1eADWsOG7qGysM0rdNXUwcMJAT%2F9FuBqMSX1NWlYotjW8WDFDniHpRU9nrCTS0O3N4o2tA%2BV8Wvv1fdU7bu2T%2FFnA5BSHx5INdCXWbsJwIIxyWGjNxMMBiqhj&X-Amz-Signature=2b012573137da7c41729bd35f0adf771916b6efc2ab6f056affb7c22148f26d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMJRRXH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD4ARfMbYm4jNfedorHkaolapF3eZDkJrxdhV5Z7o%2BungIhAIa0%2BSR8X%2Bk%2Bej45YE348dEcwHU83fGsr6mJ3S9sndieKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFmz8UICSQBety6%2FUq3APYpF9nLUqL%2BD4CW3XiTjKouPQnh%2F2Qafms8KjLpOwnaobHXGK4r9bhfXUv66egQ%2BMVapD5pkx0aygCDsnH60QgZ7YIhIW8f3NUR9gKUaeq2Nr1kkYwku4KxZwJ2DvH2n0PS1hI%2Fg93eN6%2BoE5GjNqvODTXPktA3zrFGu9I0q82cqzEvzqD07dUXvx%2FBaBh9SDAMEDIIKkJyKHwBdcquXzKpYfisCZIvW2mNQ8GduoLmVfsZMX7BzJ1iQ0ocg4HUoX6Mi%2BSQW0bB8mfRaiAheBw5sr3%2FDzA6Uwn9TOoWcFB4zO9naS3K08xgCGCXhDw8I58kVD4SUM4FiYzokrWPMXb0MqwbB5Pa%2BDYMcZmlIcTEvHnF6IdBBxO0xbnMUqdEGbsfnAv2b0V%2FXmhzku%2Ba57ejhe3Rh6ph6Otj7q1LoIznxi1dFvuGO7gChX%2FYihygAhTTRwukRJiKfhOXrUC%2F7fGGnLvM28BkjAcOuQxmu2cqgZCZ1D54363oq6Jc%2FzAPS7wHEN3yiHrpj4dQyVzGenfFhq02aJu3uhTeWqDzC58%2Fu74WyCkyIs4PCL39AZOgao%2FNltxw73PZOFoXy9dxsArt7O5RkiTs2MymfdoPNooQS%2BvXWo3llnh%2BGHOtzDwrbvBBjqkAb%2FNEuwqfWemhHChdkQD0m8PqjT1%2FkPiJAQR7ePIPwhvWqlCwjtqJ4dYvnBY1JLPRME6f%2FTk54RiN6hy%2FcHgudi9X838uqo1Hnz1eADWsOG7qGysM0rdNXUwcMJAT%2F9FuBqMSX1NWlYotjW8WDFDniHpRU9nrCTS0O3N4o2tA%2BV8Wvv1fdU7bu2T%2FFnA5BSHx5INdCXWbsJwIIxyWGjNxMMBiqhj&X-Amz-Signature=2abd6695df2c938b796e42b7f43a81683932f9316374ff3be13cf1c7790ed02d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMJRRXH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD4ARfMbYm4jNfedorHkaolapF3eZDkJrxdhV5Z7o%2BungIhAIa0%2BSR8X%2Bk%2Bej45YE348dEcwHU83fGsr6mJ3S9sndieKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFmz8UICSQBety6%2FUq3APYpF9nLUqL%2BD4CW3XiTjKouPQnh%2F2Qafms8KjLpOwnaobHXGK4r9bhfXUv66egQ%2BMVapD5pkx0aygCDsnH60QgZ7YIhIW8f3NUR9gKUaeq2Nr1kkYwku4KxZwJ2DvH2n0PS1hI%2Fg93eN6%2BoE5GjNqvODTXPktA3zrFGu9I0q82cqzEvzqD07dUXvx%2FBaBh9SDAMEDIIKkJyKHwBdcquXzKpYfisCZIvW2mNQ8GduoLmVfsZMX7BzJ1iQ0ocg4HUoX6Mi%2BSQW0bB8mfRaiAheBw5sr3%2FDzA6Uwn9TOoWcFB4zO9naS3K08xgCGCXhDw8I58kVD4SUM4FiYzokrWPMXb0MqwbB5Pa%2BDYMcZmlIcTEvHnF6IdBBxO0xbnMUqdEGbsfnAv2b0V%2FXmhzku%2Ba57ejhe3Rh6ph6Otj7q1LoIznxi1dFvuGO7gChX%2FYihygAhTTRwukRJiKfhOXrUC%2F7fGGnLvM28BkjAcOuQxmu2cqgZCZ1D54363oq6Jc%2FzAPS7wHEN3yiHrpj4dQyVzGenfFhq02aJu3uhTeWqDzC58%2Fu74WyCkyIs4PCL39AZOgao%2FNltxw73PZOFoXy9dxsArt7O5RkiTs2MymfdoPNooQS%2BvXWo3llnh%2BGHOtzDwrbvBBjqkAb%2FNEuwqfWemhHChdkQD0m8PqjT1%2FkPiJAQR7ePIPwhvWqlCwjtqJ4dYvnBY1JLPRME6f%2FTk54RiN6hy%2FcHgudi9X838uqo1Hnz1eADWsOG7qGysM0rdNXUwcMJAT%2F9FuBqMSX1NWlYotjW8WDFDniHpRU9nrCTS0O3N4o2tA%2BV8Wvv1fdU7bu2T%2FFnA5BSHx5INdCXWbsJwIIxyWGjNxMMBiqhj&X-Amz-Signature=5da8a3ec2407a22262721fd2019e04077a0f77ba934165e2e69695a382342145&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
