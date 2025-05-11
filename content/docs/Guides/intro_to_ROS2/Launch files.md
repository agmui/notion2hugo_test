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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYL3X7C2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIF8gDZ%2FxS1FWuDVw%2BM1YvXJBRDr21bY6wGGY7mTykqiYAiEA8vl%2F3yrnBOj9mQrTsJJCYxAYC%2FG7qCJxf93B7Kt0tZcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eeJ2%2FB2iCXEaccSrcA20qhGgiGUJQ0s9q4Unq1H2%2BnuBA8fT2jIpB2Ox0RoMRl4jr9id%2BwcGTJ5dV3slCi7frmyjY%2FFfLr2HCC9agpRaHqX2zxsdIV85dMvKg%2F3lxXUznstfgbGcd06nZK8FwCaSzcVHWrG3CSGa%2FbHHocTSArx26SDhUhCv5UuBcL5PTExAJQjWPNAsA%2BiK7KxJ1jPSLN17puPzXc%2FmOyWNKH8zYvvGoQoUUGj%2FDasWDPd715GvrsUP0AyEa%2FxxQNB%2BSUg5vX%2F9%2Bg7CyabqbU05buJk%2FiWg4RbpW3Kpsu0XYH%2BHXvm%2FBvc25zn7h5qbuZikhoNyH9XwV2sfDzOIFus6Gky6lct6gUHkft66q1FsHjKX%2FjYgk1U39x3JhaAF%2B8RN0qJpxXTZrq%2Blbp4mWJiLlfiUMetTewJyYx2JEKiZPewYnyNlhXKxbFLIhaSN0H6Y6pu%2FaOjbOrWFSTYBw0vDh16cgcOmbz%2BIloeYCbc7jnVf8C3V9KhB7FYggTDhoIiz19TnvUyXfps%2FzDMCukIZmrFdwh4QimLwdCrTW4abC3crSgxNH88iO%2FygC99yHv4GG5vHF6beKwnXExRKx1QY4xnnjNiOcTNCphHOeYL9Hzal9h578NYZgM5wrRtK8MLPdgsEGOqUBJNnUnxb9qhoO9qt9Due7jb0E7DOofpbgOgfrYQBCYTWXxObKdGnKV%2F58JVMi4kxaWXm5R7P%2BegiS62tVixQpHDyfHeJsnapbVY1chHJRjQtF4Ip0Q03wFklbAIDnaLzm99o%2BKsB5YK3vr%2FuI4ZVm%2BsUp1dcvAVU5lY5a7J89LR6DiByOiv6OaESKY1pWgiCwfv48XsJAHmX%2BoNYQtSnGMAdWoeoP&X-Amz-Signature=f23fc625ae8bad3a941352892104baedf3026545b2598e1695d1ea181c921f89&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYL3X7C2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIF8gDZ%2FxS1FWuDVw%2BM1YvXJBRDr21bY6wGGY7mTykqiYAiEA8vl%2F3yrnBOj9mQrTsJJCYxAYC%2FG7qCJxf93B7Kt0tZcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eeJ2%2FB2iCXEaccSrcA20qhGgiGUJQ0s9q4Unq1H2%2BnuBA8fT2jIpB2Ox0RoMRl4jr9id%2BwcGTJ5dV3slCi7frmyjY%2FFfLr2HCC9agpRaHqX2zxsdIV85dMvKg%2F3lxXUznstfgbGcd06nZK8FwCaSzcVHWrG3CSGa%2FbHHocTSArx26SDhUhCv5UuBcL5PTExAJQjWPNAsA%2BiK7KxJ1jPSLN17puPzXc%2FmOyWNKH8zYvvGoQoUUGj%2FDasWDPd715GvrsUP0AyEa%2FxxQNB%2BSUg5vX%2F9%2Bg7CyabqbU05buJk%2FiWg4RbpW3Kpsu0XYH%2BHXvm%2FBvc25zn7h5qbuZikhoNyH9XwV2sfDzOIFus6Gky6lct6gUHkft66q1FsHjKX%2FjYgk1U39x3JhaAF%2B8RN0qJpxXTZrq%2Blbp4mWJiLlfiUMetTewJyYx2JEKiZPewYnyNlhXKxbFLIhaSN0H6Y6pu%2FaOjbOrWFSTYBw0vDh16cgcOmbz%2BIloeYCbc7jnVf8C3V9KhB7FYggTDhoIiz19TnvUyXfps%2FzDMCukIZmrFdwh4QimLwdCrTW4abC3crSgxNH88iO%2FygC99yHv4GG5vHF6beKwnXExRKx1QY4xnnjNiOcTNCphHOeYL9Hzal9h578NYZgM5wrRtK8MLPdgsEGOqUBJNnUnxb9qhoO9qt9Due7jb0E7DOofpbgOgfrYQBCYTWXxObKdGnKV%2F58JVMi4kxaWXm5R7P%2BegiS62tVixQpHDyfHeJsnapbVY1chHJRjQtF4Ip0Q03wFklbAIDnaLzm99o%2BKsB5YK3vr%2FuI4ZVm%2BsUp1dcvAVU5lY5a7J89LR6DiByOiv6OaESKY1pWgiCwfv48XsJAHmX%2BoNYQtSnGMAdWoeoP&X-Amz-Signature=4ef04f1d85a111f5b076ae1ee0426a55bbce83231d06cef868c3a8bcfd7a7565&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYL3X7C2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIF8gDZ%2FxS1FWuDVw%2BM1YvXJBRDr21bY6wGGY7mTykqiYAiEA8vl%2F3yrnBOj9mQrTsJJCYxAYC%2FG7qCJxf93B7Kt0tZcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6eeJ2%2FB2iCXEaccSrcA20qhGgiGUJQ0s9q4Unq1H2%2BnuBA8fT2jIpB2Ox0RoMRl4jr9id%2BwcGTJ5dV3slCi7frmyjY%2FFfLr2HCC9agpRaHqX2zxsdIV85dMvKg%2F3lxXUznstfgbGcd06nZK8FwCaSzcVHWrG3CSGa%2FbHHocTSArx26SDhUhCv5UuBcL5PTExAJQjWPNAsA%2BiK7KxJ1jPSLN17puPzXc%2FmOyWNKH8zYvvGoQoUUGj%2FDasWDPd715GvrsUP0AyEa%2FxxQNB%2BSUg5vX%2F9%2Bg7CyabqbU05buJk%2FiWg4RbpW3Kpsu0XYH%2BHXvm%2FBvc25zn7h5qbuZikhoNyH9XwV2sfDzOIFus6Gky6lct6gUHkft66q1FsHjKX%2FjYgk1U39x3JhaAF%2B8RN0qJpxXTZrq%2Blbp4mWJiLlfiUMetTewJyYx2JEKiZPewYnyNlhXKxbFLIhaSN0H6Y6pu%2FaOjbOrWFSTYBw0vDh16cgcOmbz%2BIloeYCbc7jnVf8C3V9KhB7FYggTDhoIiz19TnvUyXfps%2FzDMCukIZmrFdwh4QimLwdCrTW4abC3crSgxNH88iO%2FygC99yHv4GG5vHF6beKwnXExRKx1QY4xnnjNiOcTNCphHOeYL9Hzal9h578NYZgM5wrRtK8MLPdgsEGOqUBJNnUnxb9qhoO9qt9Due7jb0E7DOofpbgOgfrYQBCYTWXxObKdGnKV%2F58JVMi4kxaWXm5R7P%2BegiS62tVixQpHDyfHeJsnapbVY1chHJRjQtF4Ip0Q03wFklbAIDnaLzm99o%2BKsB5YK3vr%2FuI4ZVm%2BsUp1dcvAVU5lY5a7J89LR6DiByOiv6OaESKY1pWgiCwfv48XsJAHmX%2BoNYQtSnGMAdWoeoP&X-Amz-Signature=873c613cc4252c69d68bfcac8af28bf49480a8e691f20d3378fdba314aa6185e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
