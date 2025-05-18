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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSFXEBA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0vlTKXRiBTFAtsZtm5TqJelv8uy1%2FnG%2BeQSpJsnGt%2BQIgDvda1sQRefsgFRpNDHa7RULdED22obCEdE3wKImceGoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMw%2FdmsIzoo2sR%2Ft4CrcA1Kblfqk6Hgj7Z60yJ2H4khFjDPXod%2FoLnR0WaSb61wqplmQxj5nqqK3BcaWIPkVRAi9GpcJbFIOUKTFy5oJofeIQ6DKNTbXkBv2Ki1dkWuhCD09vBfXnx99yhw1fCHBlqWVZRd5lmf4RuppsifrkSWBh9JhyTdXef19OQOohoZQmIXCZVw1hYhH7wx6wBxTaMr6yaYEfEv2UffLqRalKxRkVFKtVn10xtml9%2FiZvolY1%2Biioc8qSM9jwDerPeTxqfF4tMby%2FyJLFrH%2FFYQA4cDwGNa2fYO3OqOKBYqa74LHXK2iletufgY6c1ipv%2FjS36JUm8Mp3AHUDkBxGKVSF19KIsY7WQAvaIl5qOaTpgpjmF50rCVpePeSQGSIhvcMSC5ec84jsI7VwSHhnpyPkJUyNKZSafl4GUIf8OIQtAzdcdZ6F937dbjnK3IV6Pvcvaa9FSqRLT7pZU2A1it7KNn%2Bx%2BhtZq%2BScHW3fNNjRSo1FF%2B6dxPL2F8vQbmE6h1gygHoUWS6FMZiZQxdEQ3piCVeZ%2FK6MUL7qeXIARtGMvpM4RuocySjgCFrlWKrnwsr62JAfIagVtjfSLVTmspFmIMs78fApxtGPwyxIYLfrmFvEaNex%2Fv4GuYVO%2BiIMJbBqMEGOqUBqBNHxb%2BXvCWn18KXpPxjKWE5Nonlsd%2BTdPyhcxEd5jUe5LtPfC6dwtzrKum1GMW6Lys4sv9cHHG9ieCFD2JkvGZVShEPcOm%2FSMtnXUFN6tUSJsAf7IoqQjYEYbMsour6zcaeL0kqhh699GUpJA%2B5d1zWtDQqD80T17HI59jA6q6mBN3qeO%2F8dnPrSXy1OjbaRUXHxaHzwkHYBr2%2BVGvs%2BWOK6iwc&X-Amz-Signature=0e6e5c884147c81702ad63a965b5d5363641b17d12f571f615748b3f0809a825&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSFXEBA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0vlTKXRiBTFAtsZtm5TqJelv8uy1%2FnG%2BeQSpJsnGt%2BQIgDvda1sQRefsgFRpNDHa7RULdED22obCEdE3wKImceGoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMw%2FdmsIzoo2sR%2Ft4CrcA1Kblfqk6Hgj7Z60yJ2H4khFjDPXod%2FoLnR0WaSb61wqplmQxj5nqqK3BcaWIPkVRAi9GpcJbFIOUKTFy5oJofeIQ6DKNTbXkBv2Ki1dkWuhCD09vBfXnx99yhw1fCHBlqWVZRd5lmf4RuppsifrkSWBh9JhyTdXef19OQOohoZQmIXCZVw1hYhH7wx6wBxTaMr6yaYEfEv2UffLqRalKxRkVFKtVn10xtml9%2FiZvolY1%2Biioc8qSM9jwDerPeTxqfF4tMby%2FyJLFrH%2FFYQA4cDwGNa2fYO3OqOKBYqa74LHXK2iletufgY6c1ipv%2FjS36JUm8Mp3AHUDkBxGKVSF19KIsY7WQAvaIl5qOaTpgpjmF50rCVpePeSQGSIhvcMSC5ec84jsI7VwSHhnpyPkJUyNKZSafl4GUIf8OIQtAzdcdZ6F937dbjnK3IV6Pvcvaa9FSqRLT7pZU2A1it7KNn%2Bx%2BhtZq%2BScHW3fNNjRSo1FF%2B6dxPL2F8vQbmE6h1gygHoUWS6FMZiZQxdEQ3piCVeZ%2FK6MUL7qeXIARtGMvpM4RuocySjgCFrlWKrnwsr62JAfIagVtjfSLVTmspFmIMs78fApxtGPwyxIYLfrmFvEaNex%2Fv4GuYVO%2BiIMJbBqMEGOqUBqBNHxb%2BXvCWn18KXpPxjKWE5Nonlsd%2BTdPyhcxEd5jUe5LtPfC6dwtzrKum1GMW6Lys4sv9cHHG9ieCFD2JkvGZVShEPcOm%2FSMtnXUFN6tUSJsAf7IoqQjYEYbMsour6zcaeL0kqhh699GUpJA%2B5d1zWtDQqD80T17HI59jA6q6mBN3qeO%2F8dnPrSXy1OjbaRUXHxaHzwkHYBr2%2BVGvs%2BWOK6iwc&X-Amz-Signature=5d118e09f7b3baf2a3f49eeee54114cb9e75a3c6627d701f6677fc3d4aeb6749&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSFXEBA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0vlTKXRiBTFAtsZtm5TqJelv8uy1%2FnG%2BeQSpJsnGt%2BQIgDvda1sQRefsgFRpNDHa7RULdED22obCEdE3wKImceGoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMw%2FdmsIzoo2sR%2Ft4CrcA1Kblfqk6Hgj7Z60yJ2H4khFjDPXod%2FoLnR0WaSb61wqplmQxj5nqqK3BcaWIPkVRAi9GpcJbFIOUKTFy5oJofeIQ6DKNTbXkBv2Ki1dkWuhCD09vBfXnx99yhw1fCHBlqWVZRd5lmf4RuppsifrkSWBh9JhyTdXef19OQOohoZQmIXCZVw1hYhH7wx6wBxTaMr6yaYEfEv2UffLqRalKxRkVFKtVn10xtml9%2FiZvolY1%2Biioc8qSM9jwDerPeTxqfF4tMby%2FyJLFrH%2FFYQA4cDwGNa2fYO3OqOKBYqa74LHXK2iletufgY6c1ipv%2FjS36JUm8Mp3AHUDkBxGKVSF19KIsY7WQAvaIl5qOaTpgpjmF50rCVpePeSQGSIhvcMSC5ec84jsI7VwSHhnpyPkJUyNKZSafl4GUIf8OIQtAzdcdZ6F937dbjnK3IV6Pvcvaa9FSqRLT7pZU2A1it7KNn%2Bx%2BhtZq%2BScHW3fNNjRSo1FF%2B6dxPL2F8vQbmE6h1gygHoUWS6FMZiZQxdEQ3piCVeZ%2FK6MUL7qeXIARtGMvpM4RuocySjgCFrlWKrnwsr62JAfIagVtjfSLVTmspFmIMs78fApxtGPwyxIYLfrmFvEaNex%2Fv4GuYVO%2BiIMJbBqMEGOqUBqBNHxb%2BXvCWn18KXpPxjKWE5Nonlsd%2BTdPyhcxEd5jUe5LtPfC6dwtzrKum1GMW6Lys4sv9cHHG9ieCFD2JkvGZVShEPcOm%2FSMtnXUFN6tUSJsAf7IoqQjYEYbMsour6zcaeL0kqhh699GUpJA%2B5d1zWtDQqD80T17HI59jA6q6mBN3qeO%2F8dnPrSXy1OjbaRUXHxaHzwkHYBr2%2BVGvs%2BWOK6iwc&X-Amz-Signature=e5d01f34f6c65bfeba3077932bccf5740f78667fd72201c9e02ede0379d36b74&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
