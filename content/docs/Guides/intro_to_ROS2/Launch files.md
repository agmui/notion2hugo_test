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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIVC3WP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNvWnWhUOwos%2F87c24gyhUbOiFhGB7vX67xlZFuq9p9AiEAoLWSUlk0o%2B%2BKSBB1N5ilDQ1dCJn02dyq5nGhmp5k%2BLYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BriJcYEwe69Jf7LSrcA2VWGs6Ge0t%2FSlefDdG%2F5g18maw8jQBGUhA4dAJzexVNUfWmMZoVgRrB4zQanp3TtjeKk71V0cAHED00R24l52pMFgKmFW7Qxfrfa8rRHzQ4O2Zuxq2T8DN8e7c7Zz4bLrx8W202DCMRRsC7CJboC5EdNsIuGp9JcarnYSUeIm9veSZ7nJeNjxKiBc2iJh24rZJkfEWbo3FW92%2FusolL7uizg6rGPrVV13i%2Fc2XzW%2F1z7dtelMThs05jsZQ%2F2%2FGgYFXJRd8uTvs551J0hW6krZiR6XgoFEFHmrCxb%2FqPpZ3qNNX1NT5ExmlZ9Bm5ohWyoEWwbXoEAisd6OvfUAzTas%2B3VxLPMl%2Brp%2FaS12uRNU6fGpfDzn1%2BqSaDLjHX8nJTSe8pCG82zxPxSmNvFAWY7sr%2FpEwh5U%2Fl0fd6xXEMzcP1WUDk4HmkvU1HWPGujyUUFrKdL05DqZdZz9CDUPW4xaHhyzxdJuASPXYBwkNIA%2Bb6UGUShxG4N02UNU8Yu7etCFGZinXADwJUnlHp%2BXOYGxRqx0He%2Fggjqmnlzlbnw3FyaeGtm571bdf5%2FQ4qA%2FvrTJGaPI1Wg9mnOxo9n9N%2FspoCbWuvAWPLrSsOuNejnJEsSrylbctzfKejzCKeMJvc5cEGOqUBu7%2BctHcunwTg2FC4Rh3SvhrzrARsSAsBEWktrU2c9pUc2I%2FkJxcUkiJuw75rYaYn1YpKEtx4ju%2F%2FuiAxC5T1jOHWddYVyRw8CnBmIZoJ%2B6ErBKEnl1guyMlr3TldDMgEDM6phu1m0RkgtAvhutqUy3t7WAMowX4Gh69mZLdH5Y8gvB9BJcx3VTVRZTyu1K%2BBt83fuLFGHIh%2BsSYvDe9gxnMQ5dWE&X-Amz-Signature=1cb9d450d6008874a6ac82faf4e4e6214ee5a903b647875ba21ba1b84f1f3e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIVC3WP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNvWnWhUOwos%2F87c24gyhUbOiFhGB7vX67xlZFuq9p9AiEAoLWSUlk0o%2B%2BKSBB1N5ilDQ1dCJn02dyq5nGhmp5k%2BLYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BriJcYEwe69Jf7LSrcA2VWGs6Ge0t%2FSlefDdG%2F5g18maw8jQBGUhA4dAJzexVNUfWmMZoVgRrB4zQanp3TtjeKk71V0cAHED00R24l52pMFgKmFW7Qxfrfa8rRHzQ4O2Zuxq2T8DN8e7c7Zz4bLrx8W202DCMRRsC7CJboC5EdNsIuGp9JcarnYSUeIm9veSZ7nJeNjxKiBc2iJh24rZJkfEWbo3FW92%2FusolL7uizg6rGPrVV13i%2Fc2XzW%2F1z7dtelMThs05jsZQ%2F2%2FGgYFXJRd8uTvs551J0hW6krZiR6XgoFEFHmrCxb%2FqPpZ3qNNX1NT5ExmlZ9Bm5ohWyoEWwbXoEAisd6OvfUAzTas%2B3VxLPMl%2Brp%2FaS12uRNU6fGpfDzn1%2BqSaDLjHX8nJTSe8pCG82zxPxSmNvFAWY7sr%2FpEwh5U%2Fl0fd6xXEMzcP1WUDk4HmkvU1HWPGujyUUFrKdL05DqZdZz9CDUPW4xaHhyzxdJuASPXYBwkNIA%2Bb6UGUShxG4N02UNU8Yu7etCFGZinXADwJUnlHp%2BXOYGxRqx0He%2Fggjqmnlzlbnw3FyaeGtm571bdf5%2FQ4qA%2FvrTJGaPI1Wg9mnOxo9n9N%2FspoCbWuvAWPLrSsOuNejnJEsSrylbctzfKejzCKeMJvc5cEGOqUBu7%2BctHcunwTg2FC4Rh3SvhrzrARsSAsBEWktrU2c9pUc2I%2FkJxcUkiJuw75rYaYn1YpKEtx4ju%2F%2FuiAxC5T1jOHWddYVyRw8CnBmIZoJ%2B6ErBKEnl1guyMlr3TldDMgEDM6phu1m0RkgtAvhutqUy3t7WAMowX4Gh69mZLdH5Y8gvB9BJcx3VTVRZTyu1K%2BBt83fuLFGHIh%2BsSYvDe9gxnMQ5dWE&X-Amz-Signature=c69bc5071d34b3bf9cee0e2af8fea0d55e324a3850a1aad903617ec7831c1ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EIVC3WP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T100934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNvWnWhUOwos%2F87c24gyhUbOiFhGB7vX67xlZFuq9p9AiEAoLWSUlk0o%2B%2BKSBB1N5ilDQ1dCJn02dyq5nGhmp5k%2BLYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BriJcYEwe69Jf7LSrcA2VWGs6Ge0t%2FSlefDdG%2F5g18maw8jQBGUhA4dAJzexVNUfWmMZoVgRrB4zQanp3TtjeKk71V0cAHED00R24l52pMFgKmFW7Qxfrfa8rRHzQ4O2Zuxq2T8DN8e7c7Zz4bLrx8W202DCMRRsC7CJboC5EdNsIuGp9JcarnYSUeIm9veSZ7nJeNjxKiBc2iJh24rZJkfEWbo3FW92%2FusolL7uizg6rGPrVV13i%2Fc2XzW%2F1z7dtelMThs05jsZQ%2F2%2FGgYFXJRd8uTvs551J0hW6krZiR6XgoFEFHmrCxb%2FqPpZ3qNNX1NT5ExmlZ9Bm5ohWyoEWwbXoEAisd6OvfUAzTas%2B3VxLPMl%2Brp%2FaS12uRNU6fGpfDzn1%2BqSaDLjHX8nJTSe8pCG82zxPxSmNvFAWY7sr%2FpEwh5U%2Fl0fd6xXEMzcP1WUDk4HmkvU1HWPGujyUUFrKdL05DqZdZz9CDUPW4xaHhyzxdJuASPXYBwkNIA%2Bb6UGUShxG4N02UNU8Yu7etCFGZinXADwJUnlHp%2BXOYGxRqx0He%2Fggjqmnlzlbnw3FyaeGtm571bdf5%2FQ4qA%2FvrTJGaPI1Wg9mnOxo9n9N%2FspoCbWuvAWPLrSsOuNejnJEsSrylbctzfKejzCKeMJvc5cEGOqUBu7%2BctHcunwTg2FC4Rh3SvhrzrARsSAsBEWktrU2c9pUc2I%2FkJxcUkiJuw75rYaYn1YpKEtx4ju%2F%2FuiAxC5T1jOHWddYVyRw8CnBmIZoJ%2B6ErBKEnl1guyMlr3TldDMgEDM6phu1m0RkgtAvhutqUy3t7WAMowX4Gh69mZLdH5Y8gvB9BJcx3VTVRZTyu1K%2BBt83fuLFGHIh%2BsSYvDe9gxnMQ5dWE&X-Amz-Signature=58130b73fb268212e87b1e63d0da26b4642d03b346c92d6d0bd4ace5055b6689&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
