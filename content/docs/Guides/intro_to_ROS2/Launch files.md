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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2S7FJI7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDKqfYBnNYESuFdWv27bRMfiRrYByB2wStKkr%2BiekuyVAIgNCAEHGTUPeIjORPLLwETky0XHa5VSh8G313JBXgKxi4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAumn1QsUmOdWFrLCrcA85KOSeWZBh1l3tS74%2FEQ%2BP%2BhNKrCsyWntX%2BEuow08Kgajc84RtkZLGChIWDLdsdWUHmEaycbGuhJ94skG84Tm0Wpt7Aux9K6Zenr4sg8tQbyVetruxbEnzS%2BKBpgBcB7p2Yp%2FrMTP0s2WQ57th%2BjC%2F8FQocZWjYzyrovXUd3lIyx9lLv%2FQeekrYnQDlUhz3gY21VVg451DrI7tg44H9RceyHiMuR5w0V5Z02GOiIcQbLbXB0vUsRN2PxWRr4CqoEyj%2BlwSjDaeO9jWsHgqkEGu22IF%2FQfuuAEIWlP66dhQWafRYZat9ZtOYJXO0uzfM64tJTzAo6kWmtZlGostfm3XM59s%2B33CdO93qLVih7Niq2jZQtF83u8vzzdvtTghmaFL5IKiaizygYHFgX3qJYCbHmUxcWmz04GPqUAj44J0y%2BWWkDAubuSsVVogbpjuJ2bri9AlFi7cQKTfoaHRvsZuzQsueLaL2F5uMapiUjAxSOFjaYcmu%2BiC33DIZosDMVkRlfIvSPdxSWUR%2BmtPZsZ45vMLo387Qn8FyazTFQoqMV5Bs0sF434%2FSg0MqcTLME%2FvS0YAJV51UMFTPyn%2F%2BqPJovIZOXcSKU5l4PGsww0sQXNQq4PJ0lMxD6na8MPSq%2Bb4GOqUBa9DPdTJNyg79ColHJJ0aCb0UjohXy4SdLxS%2BQVqAax6w04CFAiL2wlqVnoWUGLti80XkoMiTON5%2F7CICubLm5VcHBytBbKLb6MspHflsyw7kXl%2Fz4QGcpipzRWmG3J%2BdSvuLh2UJ3jEBHmn0GHk%2Be5scr7TJkcRWDdWKjh6qvAFpC9gVEe4qKCWnjRb7KY8qOgOk8B%2BfIerNgV6Y8JnZqgi%2BTTzG&X-Amz-Signature=0e397175db033ab4125aa6072639b28cbff280705e9635d433be9a9c28afc51c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2S7FJI7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDKqfYBnNYESuFdWv27bRMfiRrYByB2wStKkr%2BiekuyVAIgNCAEHGTUPeIjORPLLwETky0XHa5VSh8G313JBXgKxi4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAumn1QsUmOdWFrLCrcA85KOSeWZBh1l3tS74%2FEQ%2BP%2BhNKrCsyWntX%2BEuow08Kgajc84RtkZLGChIWDLdsdWUHmEaycbGuhJ94skG84Tm0Wpt7Aux9K6Zenr4sg8tQbyVetruxbEnzS%2BKBpgBcB7p2Yp%2FrMTP0s2WQ57th%2BjC%2F8FQocZWjYzyrovXUd3lIyx9lLv%2FQeekrYnQDlUhz3gY21VVg451DrI7tg44H9RceyHiMuR5w0V5Z02GOiIcQbLbXB0vUsRN2PxWRr4CqoEyj%2BlwSjDaeO9jWsHgqkEGu22IF%2FQfuuAEIWlP66dhQWafRYZat9ZtOYJXO0uzfM64tJTzAo6kWmtZlGostfm3XM59s%2B33CdO93qLVih7Niq2jZQtF83u8vzzdvtTghmaFL5IKiaizygYHFgX3qJYCbHmUxcWmz04GPqUAj44J0y%2BWWkDAubuSsVVogbpjuJ2bri9AlFi7cQKTfoaHRvsZuzQsueLaL2F5uMapiUjAxSOFjaYcmu%2BiC33DIZosDMVkRlfIvSPdxSWUR%2BmtPZsZ45vMLo387Qn8FyazTFQoqMV5Bs0sF434%2FSg0MqcTLME%2FvS0YAJV51UMFTPyn%2F%2BqPJovIZOXcSKU5l4PGsww0sQXNQq4PJ0lMxD6na8MPSq%2Bb4GOqUBa9DPdTJNyg79ColHJJ0aCb0UjohXy4SdLxS%2BQVqAax6w04CFAiL2wlqVnoWUGLti80XkoMiTON5%2F7CICubLm5VcHBytBbKLb6MspHflsyw7kXl%2Fz4QGcpipzRWmG3J%2BdSvuLh2UJ3jEBHmn0GHk%2Be5scr7TJkcRWDdWKjh6qvAFpC9gVEe4qKCWnjRb7KY8qOgOk8B%2BfIerNgV6Y8JnZqgi%2BTTzG&X-Amz-Signature=98b45d09c34591b06e49ee2aa0eaa040835380b1bb685b9ffc8b7c56c6c577e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2S7FJI7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDKqfYBnNYESuFdWv27bRMfiRrYByB2wStKkr%2BiekuyVAIgNCAEHGTUPeIjORPLLwETky0XHa5VSh8G313JBXgKxi4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAumn1QsUmOdWFrLCrcA85KOSeWZBh1l3tS74%2FEQ%2BP%2BhNKrCsyWntX%2BEuow08Kgajc84RtkZLGChIWDLdsdWUHmEaycbGuhJ94skG84Tm0Wpt7Aux9K6Zenr4sg8tQbyVetruxbEnzS%2BKBpgBcB7p2Yp%2FrMTP0s2WQ57th%2BjC%2F8FQocZWjYzyrovXUd3lIyx9lLv%2FQeekrYnQDlUhz3gY21VVg451DrI7tg44H9RceyHiMuR5w0V5Z02GOiIcQbLbXB0vUsRN2PxWRr4CqoEyj%2BlwSjDaeO9jWsHgqkEGu22IF%2FQfuuAEIWlP66dhQWafRYZat9ZtOYJXO0uzfM64tJTzAo6kWmtZlGostfm3XM59s%2B33CdO93qLVih7Niq2jZQtF83u8vzzdvtTghmaFL5IKiaizygYHFgX3qJYCbHmUxcWmz04GPqUAj44J0y%2BWWkDAubuSsVVogbpjuJ2bri9AlFi7cQKTfoaHRvsZuzQsueLaL2F5uMapiUjAxSOFjaYcmu%2BiC33DIZosDMVkRlfIvSPdxSWUR%2BmtPZsZ45vMLo387Qn8FyazTFQoqMV5Bs0sF434%2FSg0MqcTLME%2FvS0YAJV51UMFTPyn%2F%2BqPJovIZOXcSKU5l4PGsww0sQXNQq4PJ0lMxD6na8MPSq%2Bb4GOqUBa9DPdTJNyg79ColHJJ0aCb0UjohXy4SdLxS%2BQVqAax6w04CFAiL2wlqVnoWUGLti80XkoMiTON5%2F7CICubLm5VcHBytBbKLb6MspHflsyw7kXl%2Fz4QGcpipzRWmG3J%2BdSvuLh2UJ3jEBHmn0GHk%2Be5scr7TJkcRWDdWKjh6qvAFpC9gVEe4qKCWnjRb7KY8qOgOk8B%2BfIerNgV6Y8JnZqgi%2BTTzG&X-Amz-Signature=bf9ee8b86d62b3ba638a1ef1c877500b96f1f50d798f450948aa0bf49acdd115&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
