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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RLBN6T%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEpqYdyWUUZ7X8S4%2BjNn6sLTD%2B42%2BqDjhnahCyP%2FtEMJAiBBZE%2BjA9OfNfTes%2BquZ%2BtuuqYtOucm%2FaU8lr3XIP4VmCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhJ43YLyXIHJYwETKtwDe9ysrUMpYVN%2FElZD21Niq1fZPfw6S45PfTUyg6awPD91IG9%2BlO2yb3%2B5%2B4XwfMw%2F7RVyttCk%2FiIUzUZRo4kx5sI6z79sxNGQ5EQbTOVRJh3rAnB91DNDzHcv%2Bw3aPEJMNNh1F%2FM8QFadeVE1R411lsdWw5D95lt9NSKR7vBEw2VoKkzlY4Ak87u0zjjdEZ0y5Zgy6VScwcyc4AJVITlADah6dAUusdB%2BHPxv2yxzZWpUQvDtQriQ5QH6d%2FP%2FcqZX0yjitMmd9k%2FSzrnuc8zdU3%2BjakGjWYk21VXhQW3aCnDLy4xWNJtFKjnLRodwrOk4NVehrNQxTV%2BkTX2idZQo8PHMzzuTywZQ0M84K582f18s5cupJ4v8mV0yKhyZbS3RZI0npMpzCDVDsLt%2FC6M6z8dZrw4bg7D2pXWYWRj62jaRzhn%2BQe4IkLFPwQXsJQCAXQnLrSGQEjr9tkQ23JP1TcsShzuFF1RNyeWUd9s4O4Uj%2FfJ0F%2BJ481KchLPcEsYMaFFj12Ut3PgroDhgU10AP8Xz7V1gQOan9fc5T25FitIGV0QQPtuFykE6PIa%2FJppXwv%2BAvllcmOtzTl1Ex7cWSqquiTFbdeK9tuIGte282XTyFoSNHEIkidgFu%2BkwwKTxvgY6pgE%2BJxF7Q4CR1CWoMHga%2FZ0K1%2FRQaCBK%2FeBxhr3VuyMhONTZ%2BO4IGHxfW7lkRcriqp2t6J68DDvUtxThYZDpQrjiTfBU%2FoLQmGHt1vsLz1WS%2FFLdLeFL%2FlackimFgx36INvybl5TMSCIwcGudo1mPxP%2Bjvls59DfA2j8qGUT9gLVrof%2FATaow0aJ%2BxR6S4tjVRY3ZnWQOEXU70FAuYV8YVOwVoVkY9y5&X-Amz-Signature=fc985ede599f4457223dbbff7ab9cc64d771c4dd87bfc677f5a11838e74ac617&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RLBN6T%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEpqYdyWUUZ7X8S4%2BjNn6sLTD%2B42%2BqDjhnahCyP%2FtEMJAiBBZE%2BjA9OfNfTes%2BquZ%2BtuuqYtOucm%2FaU8lr3XIP4VmCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhJ43YLyXIHJYwETKtwDe9ysrUMpYVN%2FElZD21Niq1fZPfw6S45PfTUyg6awPD91IG9%2BlO2yb3%2B5%2B4XwfMw%2F7RVyttCk%2FiIUzUZRo4kx5sI6z79sxNGQ5EQbTOVRJh3rAnB91DNDzHcv%2Bw3aPEJMNNh1F%2FM8QFadeVE1R411lsdWw5D95lt9NSKR7vBEw2VoKkzlY4Ak87u0zjjdEZ0y5Zgy6VScwcyc4AJVITlADah6dAUusdB%2BHPxv2yxzZWpUQvDtQriQ5QH6d%2FP%2FcqZX0yjitMmd9k%2FSzrnuc8zdU3%2BjakGjWYk21VXhQW3aCnDLy4xWNJtFKjnLRodwrOk4NVehrNQxTV%2BkTX2idZQo8PHMzzuTywZQ0M84K582f18s5cupJ4v8mV0yKhyZbS3RZI0npMpzCDVDsLt%2FC6M6z8dZrw4bg7D2pXWYWRj62jaRzhn%2BQe4IkLFPwQXsJQCAXQnLrSGQEjr9tkQ23JP1TcsShzuFF1RNyeWUd9s4O4Uj%2FfJ0F%2BJ481KchLPcEsYMaFFj12Ut3PgroDhgU10AP8Xz7V1gQOan9fc5T25FitIGV0QQPtuFykE6PIa%2FJppXwv%2BAvllcmOtzTl1Ex7cWSqquiTFbdeK9tuIGte282XTyFoSNHEIkidgFu%2BkwwKTxvgY6pgE%2BJxF7Q4CR1CWoMHga%2FZ0K1%2FRQaCBK%2FeBxhr3VuyMhONTZ%2BO4IGHxfW7lkRcriqp2t6J68DDvUtxThYZDpQrjiTfBU%2FoLQmGHt1vsLz1WS%2FFLdLeFL%2FlackimFgx36INvybl5TMSCIwcGudo1mPxP%2Bjvls59DfA2j8qGUT9gLVrof%2FATaow0aJ%2BxR6S4tjVRY3ZnWQOEXU70FAuYV8YVOwVoVkY9y5&X-Amz-Signature=f5a47716dc94266be27b818ed2168a7f80b70b2f88ed07bc544cfdee490bab16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RLBN6T%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEpqYdyWUUZ7X8S4%2BjNn6sLTD%2B42%2BqDjhnahCyP%2FtEMJAiBBZE%2BjA9OfNfTes%2BquZ%2BtuuqYtOucm%2FaU8lr3XIP4VmCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhJ43YLyXIHJYwETKtwDe9ysrUMpYVN%2FElZD21Niq1fZPfw6S45PfTUyg6awPD91IG9%2BlO2yb3%2B5%2B4XwfMw%2F7RVyttCk%2FiIUzUZRo4kx5sI6z79sxNGQ5EQbTOVRJh3rAnB91DNDzHcv%2Bw3aPEJMNNh1F%2FM8QFadeVE1R411lsdWw5D95lt9NSKR7vBEw2VoKkzlY4Ak87u0zjjdEZ0y5Zgy6VScwcyc4AJVITlADah6dAUusdB%2BHPxv2yxzZWpUQvDtQriQ5QH6d%2FP%2FcqZX0yjitMmd9k%2FSzrnuc8zdU3%2BjakGjWYk21VXhQW3aCnDLy4xWNJtFKjnLRodwrOk4NVehrNQxTV%2BkTX2idZQo8PHMzzuTywZQ0M84K582f18s5cupJ4v8mV0yKhyZbS3RZI0npMpzCDVDsLt%2FC6M6z8dZrw4bg7D2pXWYWRj62jaRzhn%2BQe4IkLFPwQXsJQCAXQnLrSGQEjr9tkQ23JP1TcsShzuFF1RNyeWUd9s4O4Uj%2FfJ0F%2BJ481KchLPcEsYMaFFj12Ut3PgroDhgU10AP8Xz7V1gQOan9fc5T25FitIGV0QQPtuFykE6PIa%2FJppXwv%2BAvllcmOtzTl1Ex7cWSqquiTFbdeK9tuIGte282XTyFoSNHEIkidgFu%2BkwwKTxvgY6pgE%2BJxF7Q4CR1CWoMHga%2FZ0K1%2FRQaCBK%2FeBxhr3VuyMhONTZ%2BO4IGHxfW7lkRcriqp2t6J68DDvUtxThYZDpQrjiTfBU%2FoLQmGHt1vsLz1WS%2FFLdLeFL%2FlackimFgx36INvybl5TMSCIwcGudo1mPxP%2Bjvls59DfA2j8qGUT9gLVrof%2FATaow0aJ%2BxR6S4tjVRY3ZnWQOEXU70FAuYV8YVOwVoVkY9y5&X-Amz-Signature=4fdfa9e4d58a5eb2aab92c30146821a13df4a50ecbe9850cb7f9248a46f97437&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
