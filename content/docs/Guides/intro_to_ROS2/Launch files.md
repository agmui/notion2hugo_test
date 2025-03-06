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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVYX53J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGg7LLVD0jWoSusrDW3Zj9zQYcFhiakkxGiQI0QQfT5AiEAx9JTIx%2BJrhm2uh621tydofaH85xYAkOYRwZcYOoAvF8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMAgcDPIYzRVDHEg%2BCrcA6p0hU3CRv853Ii1AdMmpKC6HNKDEZEpLTuYCAtR2077%2BM1RfhOzy%2F5XHkmT126vVUnqfbJpdR5nHJKY9Xap0sAL6ni042cnfOumnRW7Bkn7fj0ZMkOy4G%2BSOKT7W4mO5CYiwb1ERf3EP2B4pLCgdDX4sPX0jJk32msdqdbx3BUoO%2FGDFYW9xLeuuhgeAnEAiQjoe2BN6Jf6Q4OqAdiaXIBNRhr3oSHS1nGx6u%2FDWLuBZ5HnvO1oD0YdGT9QP0IllaNLKF1u97eB6%2FihgBpx%2FqpNA9qjzy5oSBhBvxi6QheiuTrshAqzqAu%2BHW7EEDlp7u6Z9fZwLArnPB7G%2Boke6i9trKENH1beMI0JuwP8C95sZVDsGCnnFOufEvHMf0mrS7Cg5d21kowSE6ioMREySA2WyszyEJ0Tz3G0Q7Xhw22FvhhnWFtEIJEIlqiJ7vnkOrC7JwzAwPnV1CmeDz3SzrCJtrytvoZmmXf8Q%2Bft6ZiaVgaJMRtnaX3DvqsDzNyPq5KYNnJaYoPIUKqKEymBkZT0l9Bv%2FsFXeBK52667z%2Bjfbx2HC7PU3scsZ5I10z%2Fw60cs54FtFrVQG%2BLJwG8Yoc6twX%2F6Fi0AfjJF2EgfTQG2N596xHMYqie8uTqyMMTNp74GOqUB2UheerAtfkgLOBFzHbL5LrzoO6fNsh30OsSN7L7dpEQa2S4joPvNxd6eIDpaZ%2F8RqE1%2B%2B6AhRM%2BGnGDrbFTA3U18JM9yrzLDgu%2BgWb2uwrZh%2BznABa7jJoUrHxl6NeaUO%2F3eqyPHrFcIm%2FisWzBvqPejDrO3YaIIwQQSeARm1oY69oXkM%2F0IvYHvfzWAD%2Fj%2FDIt4IflZlSNfdNwUIy8kebDHs1eO&X-Amz-Signature=9f94a1fa53948b30a3a2b9c9359ab1b1215ce2c9e823dc202208622b2520f93f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVYX53J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGg7LLVD0jWoSusrDW3Zj9zQYcFhiakkxGiQI0QQfT5AiEAx9JTIx%2BJrhm2uh621tydofaH85xYAkOYRwZcYOoAvF8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMAgcDPIYzRVDHEg%2BCrcA6p0hU3CRv853Ii1AdMmpKC6HNKDEZEpLTuYCAtR2077%2BM1RfhOzy%2F5XHkmT126vVUnqfbJpdR5nHJKY9Xap0sAL6ni042cnfOumnRW7Bkn7fj0ZMkOy4G%2BSOKT7W4mO5CYiwb1ERf3EP2B4pLCgdDX4sPX0jJk32msdqdbx3BUoO%2FGDFYW9xLeuuhgeAnEAiQjoe2BN6Jf6Q4OqAdiaXIBNRhr3oSHS1nGx6u%2FDWLuBZ5HnvO1oD0YdGT9QP0IllaNLKF1u97eB6%2FihgBpx%2FqpNA9qjzy5oSBhBvxi6QheiuTrshAqzqAu%2BHW7EEDlp7u6Z9fZwLArnPB7G%2Boke6i9trKENH1beMI0JuwP8C95sZVDsGCnnFOufEvHMf0mrS7Cg5d21kowSE6ioMREySA2WyszyEJ0Tz3G0Q7Xhw22FvhhnWFtEIJEIlqiJ7vnkOrC7JwzAwPnV1CmeDz3SzrCJtrytvoZmmXf8Q%2Bft6ZiaVgaJMRtnaX3DvqsDzNyPq5KYNnJaYoPIUKqKEymBkZT0l9Bv%2FsFXeBK52667z%2Bjfbx2HC7PU3scsZ5I10z%2Fw60cs54FtFrVQG%2BLJwG8Yoc6twX%2F6Fi0AfjJF2EgfTQG2N596xHMYqie8uTqyMMTNp74GOqUB2UheerAtfkgLOBFzHbL5LrzoO6fNsh30OsSN7L7dpEQa2S4joPvNxd6eIDpaZ%2F8RqE1%2B%2B6AhRM%2BGnGDrbFTA3U18JM9yrzLDgu%2BgWb2uwrZh%2BznABa7jJoUrHxl6NeaUO%2F3eqyPHrFcIm%2FisWzBvqPejDrO3YaIIwQQSeARm1oY69oXkM%2F0IvYHvfzWAD%2Fj%2FDIt4IflZlSNfdNwUIy8kebDHs1eO&X-Amz-Signature=645673e2cacb525c2fc894b5f9a4eac456f34552b7a2d869037d16aec47bd30a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BVYX53J%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGg7LLVD0jWoSusrDW3Zj9zQYcFhiakkxGiQI0QQfT5AiEAx9JTIx%2BJrhm2uh621tydofaH85xYAkOYRwZcYOoAvF8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMAgcDPIYzRVDHEg%2BCrcA6p0hU3CRv853Ii1AdMmpKC6HNKDEZEpLTuYCAtR2077%2BM1RfhOzy%2F5XHkmT126vVUnqfbJpdR5nHJKY9Xap0sAL6ni042cnfOumnRW7Bkn7fj0ZMkOy4G%2BSOKT7W4mO5CYiwb1ERf3EP2B4pLCgdDX4sPX0jJk32msdqdbx3BUoO%2FGDFYW9xLeuuhgeAnEAiQjoe2BN6Jf6Q4OqAdiaXIBNRhr3oSHS1nGx6u%2FDWLuBZ5HnvO1oD0YdGT9QP0IllaNLKF1u97eB6%2FihgBpx%2FqpNA9qjzy5oSBhBvxi6QheiuTrshAqzqAu%2BHW7EEDlp7u6Z9fZwLArnPB7G%2Boke6i9trKENH1beMI0JuwP8C95sZVDsGCnnFOufEvHMf0mrS7Cg5d21kowSE6ioMREySA2WyszyEJ0Tz3G0Q7Xhw22FvhhnWFtEIJEIlqiJ7vnkOrC7JwzAwPnV1CmeDz3SzrCJtrytvoZmmXf8Q%2Bft6ZiaVgaJMRtnaX3DvqsDzNyPq5KYNnJaYoPIUKqKEymBkZT0l9Bv%2FsFXeBK52667z%2Bjfbx2HC7PU3scsZ5I10z%2Fw60cs54FtFrVQG%2BLJwG8Yoc6twX%2F6Fi0AfjJF2EgfTQG2N596xHMYqie8uTqyMMTNp74GOqUB2UheerAtfkgLOBFzHbL5LrzoO6fNsh30OsSN7L7dpEQa2S4joPvNxd6eIDpaZ%2F8RqE1%2B%2B6AhRM%2BGnGDrbFTA3U18JM9yrzLDgu%2BgWb2uwrZh%2BznABa7jJoUrHxl6NeaUO%2F3eqyPHrFcIm%2FisWzBvqPejDrO3YaIIwQQSeARm1oY69oXkM%2F0IvYHvfzWAD%2Fj%2FDIt4IflZlSNfdNwUIy8kebDHs1eO&X-Amz-Signature=92044c5d374e272bcc685f72683253f64b6567cba942d6f4fd4071e2c6e10ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
