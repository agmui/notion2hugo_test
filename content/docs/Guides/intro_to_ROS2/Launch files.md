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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPOM4DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAx%2F2gvlhrgn7L7CcloL4Uat%2FdrW8YvH7X0EJt8mSvheAiBETFt%2FNXy7JxIL%2Fakd4pBtUmSTBLuUpzV7XdNq2YSabiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMycoNUKqG900kvWd2KtwDQU1qSjFGMURRu5ryRJFPnBZ7vly0v2J6oUwbq%2BRFmJdYKyNwR16E%2BU9jHOy3W8VdXnzuIYPeVaPhZM1bVbh6zeAXq2Wkspm77hwGNbVptoIYleYd6B7sQNvbZtDY9TVUPUWyZX8M89gs%2FnXgk9sV2mjv76lVNFDm9PIpMi9DbT7EwMO6BcRTvS5adyeS9vGTGwCvGH%2FqdOXf38%2FzkEzFOWB%2BULt45nTzert8nNeRE1h2DwfCmo5pGCTWyVg6VGNJzdRuSkJRZimdIte6XzRvWedSTxmsJ9zD61ElGKgEiII%2FrerPEJvoDccx%2F6WIYgDNquA9JI7HsK8Dzk2zUFnpquP%2Fg0pqq2A%2BPnmSujAiWDPkkjoEQLZ4ho2ecJDUYl%2FKHhKZU2SY5VqIyrDiDdkhlGVHJWSzLuKnUHiqTUCukNdZbqT5jEkFqA%2Fb1go47URmzSmWnCNcVR9gw43xjM%2FTNBauKsf3Rfl53%2FfsYHYIjhoLJl4w3lMI%2F%2FhZ9XZkIGMqHbA%2BnNp783mhNfDT7sWIIKqZn82ya9NcZNNNhqxv1rGGB2o7bop1Non5mvQcXqbJvnxpQE5%2B4Py2dR70UEJLDods28tXhXf8qP9HIcNPqndmgLSt7ROGYaZJkd8w1YDJwAY6pgG3pM2poO0GSviOX1U9OhqYSvXYYdrwLHiZl7epY1nfMZlTwbx46UiR68HbPHBr3UO0rxgGMTduMK4svJU3AAMpgptM63x02WO473%2FvCOSegpxH1MR02tvSTObBgFehZ0H9I8GRS65KaDxhJ4DbsSv9Pvm%2FeqzMeItklhFbdxQ8pOnWm1R%2BYzUPj8KXpUsZBA9KwzqQb9Qz18BCmvn%2FQwDDSRX0oID1&X-Amz-Signature=ba9071504da59aafd97f9cc92dd41b777af3db674c029c7937398edec8b9bed9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPOM4DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAx%2F2gvlhrgn7L7CcloL4Uat%2FdrW8YvH7X0EJt8mSvheAiBETFt%2FNXy7JxIL%2Fakd4pBtUmSTBLuUpzV7XdNq2YSabiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMycoNUKqG900kvWd2KtwDQU1qSjFGMURRu5ryRJFPnBZ7vly0v2J6oUwbq%2BRFmJdYKyNwR16E%2BU9jHOy3W8VdXnzuIYPeVaPhZM1bVbh6zeAXq2Wkspm77hwGNbVptoIYleYd6B7sQNvbZtDY9TVUPUWyZX8M89gs%2FnXgk9sV2mjv76lVNFDm9PIpMi9DbT7EwMO6BcRTvS5adyeS9vGTGwCvGH%2FqdOXf38%2FzkEzFOWB%2BULt45nTzert8nNeRE1h2DwfCmo5pGCTWyVg6VGNJzdRuSkJRZimdIte6XzRvWedSTxmsJ9zD61ElGKgEiII%2FrerPEJvoDccx%2F6WIYgDNquA9JI7HsK8Dzk2zUFnpquP%2Fg0pqq2A%2BPnmSujAiWDPkkjoEQLZ4ho2ecJDUYl%2FKHhKZU2SY5VqIyrDiDdkhlGVHJWSzLuKnUHiqTUCukNdZbqT5jEkFqA%2Fb1go47URmzSmWnCNcVR9gw43xjM%2FTNBauKsf3Rfl53%2FfsYHYIjhoLJl4w3lMI%2F%2FhZ9XZkIGMqHbA%2BnNp783mhNfDT7sWIIKqZn82ya9NcZNNNhqxv1rGGB2o7bop1Non5mvQcXqbJvnxpQE5%2B4Py2dR70UEJLDods28tXhXf8qP9HIcNPqndmgLSt7ROGYaZJkd8w1YDJwAY6pgG3pM2poO0GSviOX1U9OhqYSvXYYdrwLHiZl7epY1nfMZlTwbx46UiR68HbPHBr3UO0rxgGMTduMK4svJU3AAMpgptM63x02WO473%2FvCOSegpxH1MR02tvSTObBgFehZ0H9I8GRS65KaDxhJ4DbsSv9Pvm%2FeqzMeItklhFbdxQ8pOnWm1R%2BYzUPj8KXpUsZBA9KwzqQb9Qz18BCmvn%2FQwDDSRX0oID1&X-Amz-Signature=a1b89fb2f06ecadb06629459fc24716fd787c198a09752c4f3244ddc34a38067&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBPOM4DI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAx%2F2gvlhrgn7L7CcloL4Uat%2FdrW8YvH7X0EJt8mSvheAiBETFt%2FNXy7JxIL%2Fakd4pBtUmSTBLuUpzV7XdNq2YSabiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMycoNUKqG900kvWd2KtwDQU1qSjFGMURRu5ryRJFPnBZ7vly0v2J6oUwbq%2BRFmJdYKyNwR16E%2BU9jHOy3W8VdXnzuIYPeVaPhZM1bVbh6zeAXq2Wkspm77hwGNbVptoIYleYd6B7sQNvbZtDY9TVUPUWyZX8M89gs%2FnXgk9sV2mjv76lVNFDm9PIpMi9DbT7EwMO6BcRTvS5adyeS9vGTGwCvGH%2FqdOXf38%2FzkEzFOWB%2BULt45nTzert8nNeRE1h2DwfCmo5pGCTWyVg6VGNJzdRuSkJRZimdIte6XzRvWedSTxmsJ9zD61ElGKgEiII%2FrerPEJvoDccx%2F6WIYgDNquA9JI7HsK8Dzk2zUFnpquP%2Fg0pqq2A%2BPnmSujAiWDPkkjoEQLZ4ho2ecJDUYl%2FKHhKZU2SY5VqIyrDiDdkhlGVHJWSzLuKnUHiqTUCukNdZbqT5jEkFqA%2Fb1go47URmzSmWnCNcVR9gw43xjM%2FTNBauKsf3Rfl53%2FfsYHYIjhoLJl4w3lMI%2F%2FhZ9XZkIGMqHbA%2BnNp783mhNfDT7sWIIKqZn82ya9NcZNNNhqxv1rGGB2o7bop1Non5mvQcXqbJvnxpQE5%2B4Py2dR70UEJLDods28tXhXf8qP9HIcNPqndmgLSt7ROGYaZJkd8w1YDJwAY6pgG3pM2poO0GSviOX1U9OhqYSvXYYdrwLHiZl7epY1nfMZlTwbx46UiR68HbPHBr3UO0rxgGMTduMK4svJU3AAMpgptM63x02WO473%2FvCOSegpxH1MR02tvSTObBgFehZ0H9I8GRS65KaDxhJ4DbsSv9Pvm%2FeqzMeItklhFbdxQ8pOnWm1R%2BYzUPj8KXpUsZBA9KwzqQb9Qz18BCmvn%2FQwDDSRX0oID1&X-Amz-Signature=eea0f61c620a48b75753403aba309cba42e44dc706aed9f0002fea4927d4e0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
