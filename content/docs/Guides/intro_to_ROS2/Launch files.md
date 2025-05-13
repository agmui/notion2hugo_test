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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCUAOCT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD%2FjQ1U%2FdKNhseKdkdhCHy3sAGQXqTUKqbLHnpM5sJLrgIgYJndYQ%2FP8W0NKDIAtgAzGiglhMSIt4V0vCPO4JGgfcYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV8t5RtoSDlDkeepyrcA5I7vE2W96BgE2WFosMTMywFr9YMr2hI94uI%2FOLzaY8qjF%2F7fet7lXZA9HPlYvNG5Ay8lV7ONOICNTueA3uf8sntX%2BzKg0SioCIQDpx5CQsWM3BfG%2FjQtzDdkO5bDXStGXXjMT5GAn%2FWUIhh0ETUTdU4sZH%2BStvVM1eJiPXCHG7TO0gxMwk7k05HrEWB%2BMU1BxSETizlmpHNEwv6R9IogmETC2OOvi%2FN4P1hZfDxrTOjlHvRRnVMc5x7zaA89d%2BgvypIZpHgOWF33%2BH6Z69U4jAebH21avnEIcp%2FNFh7OrCx2r0cAY5TZun3YxA%2BYjfDv2Uv7LqFMhG6wXuw8IIi0Qb7sff5c3%2FHEkWzi4YtpgWLAsuyeUoWmVlLqmn4%2BxQlR99hIs6Egw08jv61qWwv7qGQ6LzD9eZWgnQfRCxBLYk0inFfkZ0sLiCK3LWaw72lFXen%2F6nEkuVLXcxxGwZ7W4ow2qjhKKJXYLH7w7ta94H1tu5bidUuv%2FjalBPlNHustV2zIpsu373gBZKJDW9LxkybebZa%2B%2FZ566VrkpM8x0IViD%2BmGlOkepSwye6JkXRlqN3rKSuOnKqh%2FA53BEwVwPMIs3zrgnRt%2FJ0w03Re6vK6sByvrYWGH1GSd6CzMJePi8EGOqUBzcRukYttmtb5Xw2%2BD7S2VoGnUbEOiCtPzQVhbyDbulKVXhVGTLkvaFAYgC%2BUnorDz3xQRurNK1uLk8r46Cz5qyA52LvmpNo75Xo18PRqS86A1xPLkhsmeLb1OqDYHmYJLJGI7NoA35ejtgol7dWB1k1KOdBzQgeCSrh7PzBGVPZpw4BqyHERbq5SBivvUjzC%2BUjvrgsdk1F7HhkHRDxS1puAVl79&X-Amz-Signature=dd22cb67e399e3c34cd6ea0d9589b99bc014ebd96ad97db8ff65527984adac38&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCUAOCT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD%2FjQ1U%2FdKNhseKdkdhCHy3sAGQXqTUKqbLHnpM5sJLrgIgYJndYQ%2FP8W0NKDIAtgAzGiglhMSIt4V0vCPO4JGgfcYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV8t5RtoSDlDkeepyrcA5I7vE2W96BgE2WFosMTMywFr9YMr2hI94uI%2FOLzaY8qjF%2F7fet7lXZA9HPlYvNG5Ay8lV7ONOICNTueA3uf8sntX%2BzKg0SioCIQDpx5CQsWM3BfG%2FjQtzDdkO5bDXStGXXjMT5GAn%2FWUIhh0ETUTdU4sZH%2BStvVM1eJiPXCHG7TO0gxMwk7k05HrEWB%2BMU1BxSETizlmpHNEwv6R9IogmETC2OOvi%2FN4P1hZfDxrTOjlHvRRnVMc5x7zaA89d%2BgvypIZpHgOWF33%2BH6Z69U4jAebH21avnEIcp%2FNFh7OrCx2r0cAY5TZun3YxA%2BYjfDv2Uv7LqFMhG6wXuw8IIi0Qb7sff5c3%2FHEkWzi4YtpgWLAsuyeUoWmVlLqmn4%2BxQlR99hIs6Egw08jv61qWwv7qGQ6LzD9eZWgnQfRCxBLYk0inFfkZ0sLiCK3LWaw72lFXen%2F6nEkuVLXcxxGwZ7W4ow2qjhKKJXYLH7w7ta94H1tu5bidUuv%2FjalBPlNHustV2zIpsu373gBZKJDW9LxkybebZa%2B%2FZ566VrkpM8x0IViD%2BmGlOkepSwye6JkXRlqN3rKSuOnKqh%2FA53BEwVwPMIs3zrgnRt%2FJ0w03Re6vK6sByvrYWGH1GSd6CzMJePi8EGOqUBzcRukYttmtb5Xw2%2BD7S2VoGnUbEOiCtPzQVhbyDbulKVXhVGTLkvaFAYgC%2BUnorDz3xQRurNK1uLk8r46Cz5qyA52LvmpNo75Xo18PRqS86A1xPLkhsmeLb1OqDYHmYJLJGI7NoA35ejtgol7dWB1k1KOdBzQgeCSrh7PzBGVPZpw4BqyHERbq5SBivvUjzC%2BUjvrgsdk1F7HhkHRDxS1puAVl79&X-Amz-Signature=33118cca074ed5069fc2cb98b516841738bb581d740a372f26f606b5720ec9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QCUAOCT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD%2FjQ1U%2FdKNhseKdkdhCHy3sAGQXqTUKqbLHnpM5sJLrgIgYJndYQ%2FP8W0NKDIAtgAzGiglhMSIt4V0vCPO4JGgfcYqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV8t5RtoSDlDkeepyrcA5I7vE2W96BgE2WFosMTMywFr9YMr2hI94uI%2FOLzaY8qjF%2F7fet7lXZA9HPlYvNG5Ay8lV7ONOICNTueA3uf8sntX%2BzKg0SioCIQDpx5CQsWM3BfG%2FjQtzDdkO5bDXStGXXjMT5GAn%2FWUIhh0ETUTdU4sZH%2BStvVM1eJiPXCHG7TO0gxMwk7k05HrEWB%2BMU1BxSETizlmpHNEwv6R9IogmETC2OOvi%2FN4P1hZfDxrTOjlHvRRnVMc5x7zaA89d%2BgvypIZpHgOWF33%2BH6Z69U4jAebH21avnEIcp%2FNFh7OrCx2r0cAY5TZun3YxA%2BYjfDv2Uv7LqFMhG6wXuw8IIi0Qb7sff5c3%2FHEkWzi4YtpgWLAsuyeUoWmVlLqmn4%2BxQlR99hIs6Egw08jv61qWwv7qGQ6LzD9eZWgnQfRCxBLYk0inFfkZ0sLiCK3LWaw72lFXen%2F6nEkuVLXcxxGwZ7W4ow2qjhKKJXYLH7w7ta94H1tu5bidUuv%2FjalBPlNHustV2zIpsu373gBZKJDW9LxkybebZa%2B%2FZ566VrkpM8x0IViD%2BmGlOkepSwye6JkXRlqN3rKSuOnKqh%2FA53BEwVwPMIs3zrgnRt%2FJ0w03Re6vK6sByvrYWGH1GSd6CzMJePi8EGOqUBzcRukYttmtb5Xw2%2BD7S2VoGnUbEOiCtPzQVhbyDbulKVXhVGTLkvaFAYgC%2BUnorDz3xQRurNK1uLk8r46Cz5qyA52LvmpNo75Xo18PRqS86A1xPLkhsmeLb1OqDYHmYJLJGI7NoA35ejtgol7dWB1k1KOdBzQgeCSrh7PzBGVPZpw4BqyHERbq5SBivvUjzC%2BUjvrgsdk1F7HhkHRDxS1puAVl79&X-Amz-Signature=2bf2f0aa52f42f1064ff0d8357593330582f2dc7ca9e91c3cc0d6e0a3174a96e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
