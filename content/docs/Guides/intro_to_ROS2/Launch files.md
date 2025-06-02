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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DV3Q6MR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCSq9DGMYPgMF5WdtWjiOGYPfDTBTM0JtWce4lzGy8VLAIhAPhrj3FowXd%2BnAwYoQJnbwEk0rwBkS00Xoyq5qUEM80qKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGsetaefOdxBybDZoq3AMddF%2B%2FyBElglF7xOpn50nOJdwtZP3ioL5tN8gKEywTYLfukJoNP5R8JhYt8ZwcBhn7S9SBiCsSSX%2F2PUrOUKTFYARi708kewbvRVVfWXc5H6zGNl7%2FN0K55DTinYpFEfNEksPw%2Fka3R5EUj2veL0rbYkZxcRvN7CJIVfbIZLRSc7wCedrmHZuZRSmU96obbdO67y4Bl%2BD109yozhnAhO0eum8tiSBDE58RIReiuIZ0VnePTj4oRVkzhabh3OPtdjOZScWYlktImUlGeM2LQgwv6IGQ5ZtxBtDLkukNQtxaqvrZTUa8CwXhSf4r8dcRZH%2FOylDF3sbUeWj%2B0WzDrIX7SXSgqfubLX%2BRpokBby%2BIyWjuQlw%2FQgoVJasGwSoiXqmAWbhgMTn5VaTUlK6ZsMvcdDcMQsvE%2Fkzsgc%2FY0XZxIkRioSnbC7eseL4dmGCWp7nQGa6AtKzibpXJHAz6SlPBHMi7C%2BwG8uo5Nt8oMPo%2FbY%2FJ0BiegdXlbCoo%2BYRsBNQJtnrbnbL6s2wTKX%2BwSgunMevBAzehkmnOMPaplj14kkZp46gR8V0%2Bh9Moy7TWCaI62wsKJ0zZBQv0NEqOkcwxxKlWAE8MYU3cOgbR%2BurYb4dlCcMitwujyjzh4DCwtPbBBjqkAQuRDdCBf5a%2FQ9uP9qbEizlFXwt3R03yHcSFX%2BnpwLb0Pj1wf1OKmRqYgrxd7OKNxuCE1Sv8mihFzeksqc%2FlrkN8VmWgSwK3yb%2FVIm6kU8JtVoX14RH%2FxrLgoBwtJz9TwBMSiguoUOW6W2zw9uMxa5gSwAGH6dyWpY9yuRTSfzfvLXobQu07xmDi4vecgT9i8bwwhOm2XjnO68pbQEVjLIZyuph%2F&X-Amz-Signature=4bd6a6a757ffa12af94d118a01426d00b4d4647f5f7102eee539819feb69e9be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DV3Q6MR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCSq9DGMYPgMF5WdtWjiOGYPfDTBTM0JtWce4lzGy8VLAIhAPhrj3FowXd%2BnAwYoQJnbwEk0rwBkS00Xoyq5qUEM80qKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGsetaefOdxBybDZoq3AMddF%2B%2FyBElglF7xOpn50nOJdwtZP3ioL5tN8gKEywTYLfukJoNP5R8JhYt8ZwcBhn7S9SBiCsSSX%2F2PUrOUKTFYARi708kewbvRVVfWXc5H6zGNl7%2FN0K55DTinYpFEfNEksPw%2Fka3R5EUj2veL0rbYkZxcRvN7CJIVfbIZLRSc7wCedrmHZuZRSmU96obbdO67y4Bl%2BD109yozhnAhO0eum8tiSBDE58RIReiuIZ0VnePTj4oRVkzhabh3OPtdjOZScWYlktImUlGeM2LQgwv6IGQ5ZtxBtDLkukNQtxaqvrZTUa8CwXhSf4r8dcRZH%2FOylDF3sbUeWj%2B0WzDrIX7SXSgqfubLX%2BRpokBby%2BIyWjuQlw%2FQgoVJasGwSoiXqmAWbhgMTn5VaTUlK6ZsMvcdDcMQsvE%2Fkzsgc%2FY0XZxIkRioSnbC7eseL4dmGCWp7nQGa6AtKzibpXJHAz6SlPBHMi7C%2BwG8uo5Nt8oMPo%2FbY%2FJ0BiegdXlbCoo%2BYRsBNQJtnrbnbL6s2wTKX%2BwSgunMevBAzehkmnOMPaplj14kkZp46gR8V0%2Bh9Moy7TWCaI62wsKJ0zZBQv0NEqOkcwxxKlWAE8MYU3cOgbR%2BurYb4dlCcMitwujyjzh4DCwtPbBBjqkAQuRDdCBf5a%2FQ9uP9qbEizlFXwt3R03yHcSFX%2BnpwLb0Pj1wf1OKmRqYgrxd7OKNxuCE1Sv8mihFzeksqc%2FlrkN8VmWgSwK3yb%2FVIm6kU8JtVoX14RH%2FxrLgoBwtJz9TwBMSiguoUOW6W2zw9uMxa5gSwAGH6dyWpY9yuRTSfzfvLXobQu07xmDi4vecgT9i8bwwhOm2XjnO68pbQEVjLIZyuph%2F&X-Amz-Signature=2eff50a5a716d2ef1954c2f6abc1185f637990de1136eeb203dbef2515b3e32c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DV3Q6MR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCSq9DGMYPgMF5WdtWjiOGYPfDTBTM0JtWce4lzGy8VLAIhAPhrj3FowXd%2BnAwYoQJnbwEk0rwBkS00Xoyq5qUEM80qKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGsetaefOdxBybDZoq3AMddF%2B%2FyBElglF7xOpn50nOJdwtZP3ioL5tN8gKEywTYLfukJoNP5R8JhYt8ZwcBhn7S9SBiCsSSX%2F2PUrOUKTFYARi708kewbvRVVfWXc5H6zGNl7%2FN0K55DTinYpFEfNEksPw%2Fka3R5EUj2veL0rbYkZxcRvN7CJIVfbIZLRSc7wCedrmHZuZRSmU96obbdO67y4Bl%2BD109yozhnAhO0eum8tiSBDE58RIReiuIZ0VnePTj4oRVkzhabh3OPtdjOZScWYlktImUlGeM2LQgwv6IGQ5ZtxBtDLkukNQtxaqvrZTUa8CwXhSf4r8dcRZH%2FOylDF3sbUeWj%2B0WzDrIX7SXSgqfubLX%2BRpokBby%2BIyWjuQlw%2FQgoVJasGwSoiXqmAWbhgMTn5VaTUlK6ZsMvcdDcMQsvE%2Fkzsgc%2FY0XZxIkRioSnbC7eseL4dmGCWp7nQGa6AtKzibpXJHAz6SlPBHMi7C%2BwG8uo5Nt8oMPo%2FbY%2FJ0BiegdXlbCoo%2BYRsBNQJtnrbnbL6s2wTKX%2BwSgunMevBAzehkmnOMPaplj14kkZp46gR8V0%2Bh9Moy7TWCaI62wsKJ0zZBQv0NEqOkcwxxKlWAE8MYU3cOgbR%2BurYb4dlCcMitwujyjzh4DCwtPbBBjqkAQuRDdCBf5a%2FQ9uP9qbEizlFXwt3R03yHcSFX%2BnpwLb0Pj1wf1OKmRqYgrxd7OKNxuCE1Sv8mihFzeksqc%2FlrkN8VmWgSwK3yb%2FVIm6kU8JtVoX14RH%2FxrLgoBwtJz9TwBMSiguoUOW6W2zw9uMxa5gSwAGH6dyWpY9yuRTSfzfvLXobQu07xmDi4vecgT9i8bwwhOm2XjnO68pbQEVjLIZyuph%2F&X-Amz-Signature=b5876cdafef83f170a5ad09178ceb18e2eacc1a9ce12ee013b8a243f94786bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
