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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFFDMTS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS9oD%2FLEi9qDzYVCVqhqDJbGqvysZc%2BlTEVbJCt4WdMAiEAwVcx9AWuXnEN2sw15ZrL2%2FH8yMxTfZSvzu8TfPeXS6sq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDN%2FbRslA5JntGcsSOyrcA%2F8%2FVfoo7xomvrxozHus2mmuI%2FJR3Wx%2FkIFEmT1T27Gqsq%2BwlO9DLWk5x7AggwP1NjwFeGKFILK5OKrFwDXCYMfbW3vX%2Bmm%2FoPoCpxr7BWGqQELdTW0EXuYjNeFwes2ilfxjY1fmSGYoug31D5X9JV4ZWOkCJLWH09lK6aQe0Ubp%2F59SmGTo52F1gAFb5r3fqL43o8JE%2FEB8jNRhORO1%2FWtICNK3KkLQASzXT%2Fk4ULDVakSLgBxS%2BIFuWAw3N1xE32q9%2Fpp%2BIeSKxs5UcPdoQjo6jCDJeJQ9f%2B9blCWHLwjhB6NTue4Sw0IIp%2FbzUr3aG%2Bts9yIRTen3KoXYx3ZolcK%2FAi1gJhMdx7CFNRF3QoF8gsstjLPA71LmCZnntdIQjPzZr9x4hJL5VWlAA15FFpgtAml0Ws%2BxjkHB5rlR1q5KPH0sEK2KAA9l6TEHAK0dxbPg6ZPXd7e7cZvgKxnuEiNqC66%2F3RmfBLpOErm%2FOKYIs7G9f3u8VlQE6zHzShi9HhZK3LNd01U3MoLmkh5R4dVuTsM7j%2FcLq4c5Q0mkChbLn%2BtnSocx%2FWoATe9AxjlPHzX5pjAqWhggSZKoIK3T%2FLLX7fTJ2pbPYFh6K3K3lEGbybtsTKS2gae8cGkjML%2FCxr8GOqUBtjFX5hdQ4AYxnG722HAXbLUdgbZRc%2BC1oqt6id9G2gN%2F2w26D40yjldrqC4CgZlkV%2FbvmfXu2hzdKHt1eH526J2A3vYQwAux%2BsjMCwtbvXipXeBqZL5umu43ICxHEEjPS2XbN5pTd37KsYFB%2F%2Bij%2FmGqzsyU5Hf81reYDEckDaxJFcItNEVSOToFQ2mz%2FytLZkdSDuPbT11IiPco9UUMZ7G%2F9qPN&X-Amz-Signature=c06bdd124d6e93dc7ceee3882982bb9b07fe914c5f581752a53315693cc6ac23&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFFDMTS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS9oD%2FLEi9qDzYVCVqhqDJbGqvysZc%2BlTEVbJCt4WdMAiEAwVcx9AWuXnEN2sw15ZrL2%2FH8yMxTfZSvzu8TfPeXS6sq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDN%2FbRslA5JntGcsSOyrcA%2F8%2FVfoo7xomvrxozHus2mmuI%2FJR3Wx%2FkIFEmT1T27Gqsq%2BwlO9DLWk5x7AggwP1NjwFeGKFILK5OKrFwDXCYMfbW3vX%2Bmm%2FoPoCpxr7BWGqQELdTW0EXuYjNeFwes2ilfxjY1fmSGYoug31D5X9JV4ZWOkCJLWH09lK6aQe0Ubp%2F59SmGTo52F1gAFb5r3fqL43o8JE%2FEB8jNRhORO1%2FWtICNK3KkLQASzXT%2Fk4ULDVakSLgBxS%2BIFuWAw3N1xE32q9%2Fpp%2BIeSKxs5UcPdoQjo6jCDJeJQ9f%2B9blCWHLwjhB6NTue4Sw0IIp%2FbzUr3aG%2Bts9yIRTen3KoXYx3ZolcK%2FAi1gJhMdx7CFNRF3QoF8gsstjLPA71LmCZnntdIQjPzZr9x4hJL5VWlAA15FFpgtAml0Ws%2BxjkHB5rlR1q5KPH0sEK2KAA9l6TEHAK0dxbPg6ZPXd7e7cZvgKxnuEiNqC66%2F3RmfBLpOErm%2FOKYIs7G9f3u8VlQE6zHzShi9HhZK3LNd01U3MoLmkh5R4dVuTsM7j%2FcLq4c5Q0mkChbLn%2BtnSocx%2FWoATe9AxjlPHzX5pjAqWhggSZKoIK3T%2FLLX7fTJ2pbPYFh6K3K3lEGbybtsTKS2gae8cGkjML%2FCxr8GOqUBtjFX5hdQ4AYxnG722HAXbLUdgbZRc%2BC1oqt6id9G2gN%2F2w26D40yjldrqC4CgZlkV%2FbvmfXu2hzdKHt1eH526J2A3vYQwAux%2BsjMCwtbvXipXeBqZL5umu43ICxHEEjPS2XbN5pTd37KsYFB%2F%2Bij%2FmGqzsyU5Hf81reYDEckDaxJFcItNEVSOToFQ2mz%2FytLZkdSDuPbT11IiPco9UUMZ7G%2F9qPN&X-Amz-Signature=99a4f807e56696275fdd778a7a6cd6c3b2c371962125e3adecfad590e490fcb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFFDMTS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS9oD%2FLEi9qDzYVCVqhqDJbGqvysZc%2BlTEVbJCt4WdMAiEAwVcx9AWuXnEN2sw15ZrL2%2FH8yMxTfZSvzu8TfPeXS6sq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDN%2FbRslA5JntGcsSOyrcA%2F8%2FVfoo7xomvrxozHus2mmuI%2FJR3Wx%2FkIFEmT1T27Gqsq%2BwlO9DLWk5x7AggwP1NjwFeGKFILK5OKrFwDXCYMfbW3vX%2Bmm%2FoPoCpxr7BWGqQELdTW0EXuYjNeFwes2ilfxjY1fmSGYoug31D5X9JV4ZWOkCJLWH09lK6aQe0Ubp%2F59SmGTo52F1gAFb5r3fqL43o8JE%2FEB8jNRhORO1%2FWtICNK3KkLQASzXT%2Fk4ULDVakSLgBxS%2BIFuWAw3N1xE32q9%2Fpp%2BIeSKxs5UcPdoQjo6jCDJeJQ9f%2B9blCWHLwjhB6NTue4Sw0IIp%2FbzUr3aG%2Bts9yIRTen3KoXYx3ZolcK%2FAi1gJhMdx7CFNRF3QoF8gsstjLPA71LmCZnntdIQjPzZr9x4hJL5VWlAA15FFpgtAml0Ws%2BxjkHB5rlR1q5KPH0sEK2KAA9l6TEHAK0dxbPg6ZPXd7e7cZvgKxnuEiNqC66%2F3RmfBLpOErm%2FOKYIs7G9f3u8VlQE6zHzShi9HhZK3LNd01U3MoLmkh5R4dVuTsM7j%2FcLq4c5Q0mkChbLn%2BtnSocx%2FWoATe9AxjlPHzX5pjAqWhggSZKoIK3T%2FLLX7fTJ2pbPYFh6K3K3lEGbybtsTKS2gae8cGkjML%2FCxr8GOqUBtjFX5hdQ4AYxnG722HAXbLUdgbZRc%2BC1oqt6id9G2gN%2F2w26D40yjldrqC4CgZlkV%2FbvmfXu2hzdKHt1eH526J2A3vYQwAux%2BsjMCwtbvXipXeBqZL5umu43ICxHEEjPS2XbN5pTd37KsYFB%2F%2Bij%2FmGqzsyU5Hf81reYDEckDaxJFcItNEVSOToFQ2mz%2FytLZkdSDuPbT11IiPco9UUMZ7G%2F9qPN&X-Amz-Signature=898b5575127eb08e42f43ea2247bc5266b5ed1d0b300d092d4ed9358839e3269&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
