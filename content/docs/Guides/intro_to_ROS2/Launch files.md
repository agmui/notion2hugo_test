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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNCFK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICujG4lbgeaTl4ANvyg4uCCEr4QAtvj3YVMyBstgiHVdAiAI3TSPtK5HDst%2FFStVZcsBFB1U9oNJNMHDr4CSUr18oSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqdbyM4sEeuIOAx6AKtwDu%2BYc58%2BkItmFO%2B2mVRY8GUYTdLwCzyVYsnb6NxTd7YbXdyOapmoC4OKe2pnUeapo95KXvrXuz6G8rg4U%2Bc%2FoRUr944WWMaigl03K5ZtLpNSsdo8AOKtNucgNncx7ZdAy0I%2Bi4eA8p3pxOnvTt4P0lfENZM95OXmvw%2BrFaSUacCKv%2FO6giw%2BeJqw%2BdOfxiKt%2Foh%2BC8beks1AWdURELHyWUB7Wp7gSmURYxd%2F2SJaMvkKGYmQ9T5SoDDQWkrk2713hqM8qojaofVSyyH%2BUCvZI0bqeWHH30Jxjrsjv7gRYa5mIJuCLLULcQNuPiq%2BpHJMKlZMEXBsF34CPVkQWiAAIW%2BcNI%2BRf5cUZUVuMW5ajjDX5Mnvml3tnxKRT%2Bwu%2FUk41CaWR988O%2FZaPGWYrXPmrelsfbY0Gmw3crED2UH2%2F2eKq6tSG2TNrWWrMSlKPK2v2Cw%2FAtiUWGZ%2F%2B1I4mLVpImOIswFFyX8CiqpfuT%2B72QNA1ChznPpb%2F1KpC7xIKPQCRTjomj%2FW4q46fU%2Fn4EMxZywY4R4Rw5BtfRjN%2FXqrKOf65gr7xk2d%2FNJzoZ9ThOpt4Ag8F9kYnH1%2B4riBbu%2Bt%2Fo26rnIphrn8Rw2AJ%2BUlzBHSZeIrtG%2BJR8yOfLyowoai0vgY6pgHRfuvB%2Btn8o2fcShizxztadUP%2BJ4ky%2FxqcOSd8YOAI0xJQCUFfFPKYJb8CEE2FqVWgLtbBYba8AkmdfsQDMuuWUUN3VrPKTpKIGf1Va8tv5xstPgQotLnZE73X1Z7iiaEd3aFbynEyiQhJsG%2B2unlZRWyLrpmJHPrvvW8FouCEEgobr6NqZhxW2iy69Ok3Ih2UAqiwc8dXhedTYvsHHvvMfSUBKrd9&X-Amz-Signature=95fa2d893c79aeaeba45ab0babb50e6e931d1b013e4308f102b4430d40ecba68&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNCFK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICujG4lbgeaTl4ANvyg4uCCEr4QAtvj3YVMyBstgiHVdAiAI3TSPtK5HDst%2FFStVZcsBFB1U9oNJNMHDr4CSUr18oSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqdbyM4sEeuIOAx6AKtwDu%2BYc58%2BkItmFO%2B2mVRY8GUYTdLwCzyVYsnb6NxTd7YbXdyOapmoC4OKe2pnUeapo95KXvrXuz6G8rg4U%2Bc%2FoRUr944WWMaigl03K5ZtLpNSsdo8AOKtNucgNncx7ZdAy0I%2Bi4eA8p3pxOnvTt4P0lfENZM95OXmvw%2BrFaSUacCKv%2FO6giw%2BeJqw%2BdOfxiKt%2Foh%2BC8beks1AWdURELHyWUB7Wp7gSmURYxd%2F2SJaMvkKGYmQ9T5SoDDQWkrk2713hqM8qojaofVSyyH%2BUCvZI0bqeWHH30Jxjrsjv7gRYa5mIJuCLLULcQNuPiq%2BpHJMKlZMEXBsF34CPVkQWiAAIW%2BcNI%2BRf5cUZUVuMW5ajjDX5Mnvml3tnxKRT%2Bwu%2FUk41CaWR988O%2FZaPGWYrXPmrelsfbY0Gmw3crED2UH2%2F2eKq6tSG2TNrWWrMSlKPK2v2Cw%2FAtiUWGZ%2F%2B1I4mLVpImOIswFFyX8CiqpfuT%2B72QNA1ChznPpb%2F1KpC7xIKPQCRTjomj%2FW4q46fU%2Fn4EMxZywY4R4Rw5BtfRjN%2FXqrKOf65gr7xk2d%2FNJzoZ9ThOpt4Ag8F9kYnH1%2B4riBbu%2Bt%2Fo26rnIphrn8Rw2AJ%2BUlzBHSZeIrtG%2BJR8yOfLyowoai0vgY6pgHRfuvB%2Btn8o2fcShizxztadUP%2BJ4ky%2FxqcOSd8YOAI0xJQCUFfFPKYJb8CEE2FqVWgLtbBYba8AkmdfsQDMuuWUUN3VrPKTpKIGf1Va8tv5xstPgQotLnZE73X1Z7iiaEd3aFbynEyiQhJsG%2B2unlZRWyLrpmJHPrvvW8FouCEEgobr6NqZhxW2iy69Ok3Ih2UAqiwc8dXhedTYvsHHvvMfSUBKrd9&X-Amz-Signature=e1b4d522207bb341fd1ca43e6e84e7043fd81aeaf780576680ff9147834a2899&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNCFK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICujG4lbgeaTl4ANvyg4uCCEr4QAtvj3YVMyBstgiHVdAiAI3TSPtK5HDst%2FFStVZcsBFB1U9oNJNMHDr4CSUr18oSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqdbyM4sEeuIOAx6AKtwDu%2BYc58%2BkItmFO%2B2mVRY8GUYTdLwCzyVYsnb6NxTd7YbXdyOapmoC4OKe2pnUeapo95KXvrXuz6G8rg4U%2Bc%2FoRUr944WWMaigl03K5ZtLpNSsdo8AOKtNucgNncx7ZdAy0I%2Bi4eA8p3pxOnvTt4P0lfENZM95OXmvw%2BrFaSUacCKv%2FO6giw%2BeJqw%2BdOfxiKt%2Foh%2BC8beks1AWdURELHyWUB7Wp7gSmURYxd%2F2SJaMvkKGYmQ9T5SoDDQWkrk2713hqM8qojaofVSyyH%2BUCvZI0bqeWHH30Jxjrsjv7gRYa5mIJuCLLULcQNuPiq%2BpHJMKlZMEXBsF34CPVkQWiAAIW%2BcNI%2BRf5cUZUVuMW5ajjDX5Mnvml3tnxKRT%2Bwu%2FUk41CaWR988O%2FZaPGWYrXPmrelsfbY0Gmw3crED2UH2%2F2eKq6tSG2TNrWWrMSlKPK2v2Cw%2FAtiUWGZ%2F%2B1I4mLVpImOIswFFyX8CiqpfuT%2B72QNA1ChznPpb%2F1KpC7xIKPQCRTjomj%2FW4q46fU%2Fn4EMxZywY4R4Rw5BtfRjN%2FXqrKOf65gr7xk2d%2FNJzoZ9ThOpt4Ag8F9kYnH1%2B4riBbu%2Bt%2Fo26rnIphrn8Rw2AJ%2BUlzBHSZeIrtG%2BJR8yOfLyowoai0vgY6pgHRfuvB%2Btn8o2fcShizxztadUP%2BJ4ky%2FxqcOSd8YOAI0xJQCUFfFPKYJb8CEE2FqVWgLtbBYba8AkmdfsQDMuuWUUN3VrPKTpKIGf1Va8tv5xstPgQotLnZE73X1Z7iiaEd3aFbynEyiQhJsG%2B2unlZRWyLrpmJHPrvvW8FouCEEgobr6NqZhxW2iy69Ok3Ih2UAqiwc8dXhedTYvsHHvvMfSUBKrd9&X-Amz-Signature=1849408b6f7c299c038a8cbd9533d504db13d2fb46cf76502813e2d48f01b99d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
