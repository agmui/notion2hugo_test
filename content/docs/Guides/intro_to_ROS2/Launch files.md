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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JKEC54%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvQlkSYSsMigZdtgGPO70mu8oGUHcQIbQ1I%2F50ZOZ2AiAn2%2FQpTJshSgSzmkorbIeHDBLsUjyTV0Lr1mboPNKKmir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM2HrQu1FG3ubMbufFKtwDc0DKziPT6JtUtTu7LhmvOvrLqbNgLJZEiDS9mAVTvjiF1AI9LPQuNyiGl814DmN3CMaAR3kXjTIHEQTwqvlXLksYh3QIDmU1YRVMmSQ46wQ7X5k6CeMLkKkIEnofiYYVKsd1W2aHBYIUIcvT9pkfq8hO2MaQ4FpFOm5Nkpkc%2FKuP5bNcsYM%2BHuTw2k4zH59mo9vHrMro1%2FHMX48M17TjRvZbL1unsns7qvRIXHp5bOlqOspN8oVcfMvdEeEWACQZte851ZNmikeabV2gja%2FmzQo46b8YvjOwQ328cq7hKsyn187JB8CqKJr0qI6msZ8mIF4T6YkQvzTKo9Qj8CbHnxGe3qHhZNuE1Z1EeM2iXAfUikAqtBwNdypfy8%2FIzGe%2FbYFtZvlo0QfxTy3ge5SEzkJDWpBAPtP7jQtnx2BQKFl7zT3C2XSjQZ3YyznlFnuIFGG69q%2FiekBeSE91i0MdLKkd%2F1cQ3YF61PUwILkGQASazt9aDJdALhlNqxI81G5mZOxHx%2F%2BFLNN47fIcq1EFOC3ZxjsZZYmtbVf1EdMSUGlTZHKhJfVEPV95%2FGECICdNqfD50GBn7YOgmv101hcoricMwfoIgr6B8RuDS%2FFGWCpmdfo%2FO6bm7LA%2FMwQw0%2BvWvgY6pgED0Cwy%2BQO4LbPATkB%2BPiJkKf7EUyuWsb%2B1j9AchI2o4uhPB0dk6LZ1A%2F0mH8KS6Vf97yepUYlQkhlUZHFiUr4ZSC7PBJE1sv%2FfIV4WBc0v1CqS%2Bkf9dpmqC%2BrWyVGePN%2Bc2uV2eiAYxSnpfsZ6k%2BKAkO6%2BX0l7zFZPPi6i2%2FiyYbNq6KY9HG6XzQpUKege%2Fes2AU6XWTwetIhYIC%2B9e59BSxOwX2fd&X-Amz-Signature=313e941be55ad9e389317a638ed2a96ee521d9650d92f2b4c36af26e04325a42&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JKEC54%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvQlkSYSsMigZdtgGPO70mu8oGUHcQIbQ1I%2F50ZOZ2AiAn2%2FQpTJshSgSzmkorbIeHDBLsUjyTV0Lr1mboPNKKmir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM2HrQu1FG3ubMbufFKtwDc0DKziPT6JtUtTu7LhmvOvrLqbNgLJZEiDS9mAVTvjiF1AI9LPQuNyiGl814DmN3CMaAR3kXjTIHEQTwqvlXLksYh3QIDmU1YRVMmSQ46wQ7X5k6CeMLkKkIEnofiYYVKsd1W2aHBYIUIcvT9pkfq8hO2MaQ4FpFOm5Nkpkc%2FKuP5bNcsYM%2BHuTw2k4zH59mo9vHrMro1%2FHMX48M17TjRvZbL1unsns7qvRIXHp5bOlqOspN8oVcfMvdEeEWACQZte851ZNmikeabV2gja%2FmzQo46b8YvjOwQ328cq7hKsyn187JB8CqKJr0qI6msZ8mIF4T6YkQvzTKo9Qj8CbHnxGe3qHhZNuE1Z1EeM2iXAfUikAqtBwNdypfy8%2FIzGe%2FbYFtZvlo0QfxTy3ge5SEzkJDWpBAPtP7jQtnx2BQKFl7zT3C2XSjQZ3YyznlFnuIFGG69q%2FiekBeSE91i0MdLKkd%2F1cQ3YF61PUwILkGQASazt9aDJdALhlNqxI81G5mZOxHx%2F%2BFLNN47fIcq1EFOC3ZxjsZZYmtbVf1EdMSUGlTZHKhJfVEPV95%2FGECICdNqfD50GBn7YOgmv101hcoricMwfoIgr6B8RuDS%2FFGWCpmdfo%2FO6bm7LA%2FMwQw0%2BvWvgY6pgED0Cwy%2BQO4LbPATkB%2BPiJkKf7EUyuWsb%2B1j9AchI2o4uhPB0dk6LZ1A%2F0mH8KS6Vf97yepUYlQkhlUZHFiUr4ZSC7PBJE1sv%2FfIV4WBc0v1CqS%2Bkf9dpmqC%2BrWyVGePN%2Bc2uV2eiAYxSnpfsZ6k%2BKAkO6%2BX0l7zFZPPi6i2%2FiyYbNq6KY9HG6XzQpUKege%2Fes2AU6XWTwetIhYIC%2B9e59BSxOwX2fd&X-Amz-Signature=8538ef13bef2d6a870a7241a9e04039f487809e546423310acefd31174be0b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JKEC54%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWvQlkSYSsMigZdtgGPO70mu8oGUHcQIbQ1I%2F50ZOZ2AiAn2%2FQpTJshSgSzmkorbIeHDBLsUjyTV0Lr1mboPNKKmir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM2HrQu1FG3ubMbufFKtwDc0DKziPT6JtUtTu7LhmvOvrLqbNgLJZEiDS9mAVTvjiF1AI9LPQuNyiGl814DmN3CMaAR3kXjTIHEQTwqvlXLksYh3QIDmU1YRVMmSQ46wQ7X5k6CeMLkKkIEnofiYYVKsd1W2aHBYIUIcvT9pkfq8hO2MaQ4FpFOm5Nkpkc%2FKuP5bNcsYM%2BHuTw2k4zH59mo9vHrMro1%2FHMX48M17TjRvZbL1unsns7qvRIXHp5bOlqOspN8oVcfMvdEeEWACQZte851ZNmikeabV2gja%2FmzQo46b8YvjOwQ328cq7hKsyn187JB8CqKJr0qI6msZ8mIF4T6YkQvzTKo9Qj8CbHnxGe3qHhZNuE1Z1EeM2iXAfUikAqtBwNdypfy8%2FIzGe%2FbYFtZvlo0QfxTy3ge5SEzkJDWpBAPtP7jQtnx2BQKFl7zT3C2XSjQZ3YyznlFnuIFGG69q%2FiekBeSE91i0MdLKkd%2F1cQ3YF61PUwILkGQASazt9aDJdALhlNqxI81G5mZOxHx%2F%2BFLNN47fIcq1EFOC3ZxjsZZYmtbVf1EdMSUGlTZHKhJfVEPV95%2FGECICdNqfD50GBn7YOgmv101hcoricMwfoIgr6B8RuDS%2FFGWCpmdfo%2FO6bm7LA%2FMwQw0%2BvWvgY6pgED0Cwy%2BQO4LbPATkB%2BPiJkKf7EUyuWsb%2B1j9AchI2o4uhPB0dk6LZ1A%2F0mH8KS6Vf97yepUYlQkhlUZHFiUr4ZSC7PBJE1sv%2FfIV4WBc0v1CqS%2Bkf9dpmqC%2BrWyVGePN%2Bc2uV2eiAYxSnpfsZ6k%2BKAkO6%2BX0l7zFZPPi6i2%2FiyYbNq6KY9HG6XzQpUKege%2Fes2AU6XWTwetIhYIC%2B9e59BSxOwX2fd&X-Amz-Signature=b5a6c0e36561b7189aef246236a30ed55441356a180cfdc287e855f4ff6a5899&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
