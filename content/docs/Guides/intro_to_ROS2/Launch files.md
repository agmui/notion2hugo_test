---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG3TLSY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ABCOlfB%2FfoZLn1lRvj%2FhcbSK3Kd8%2BCWU9hXSZi7iHwIhAPAWDdWcUg%2BUa8EXrTMNTYcnBlFPk64Z9g9ZpyOokIoNKv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BASBmeIsV8Bs7arwq3AOIkZvJNgBpjcRC%2FqBCB0tGkQWZJNnT66c72iQYfplmtwcElzurbGYJOnTY7NLnjQ4jfhx0pAl4xNUIDqCOFwV4ZpRTq%2B7DOnNgiLdnFyTn5PQU%2FZ3fQHfOIfQNRt0aJP5Yd2%2BJZU%2Bq3jeiaJOjR3lV5YjvdxxukSom9Mn61HzrKy%2FJMC9ROm503ie5VbZDJLnTYlEkjN3fCvIyebbMb4Ml6BjmApLijWqywn5ZmkKSBJt4kfjazZUNr7XeGwbENbILOUbi%2FOvlFZ%2Fy53Bs6c9esxWFWgMrfFNcSnTrXqtn5X98D0djTMAKF5f3Zw4aU2rrlFijVNLR4cw9LaRi7KMtw6997g1yt%2FwLWzCrlmpcjq7vTrZz0mHSvY3IuC8bSKnmbiW%2FTH3NyQ7mS0qzSC6EcWmw8Z5%2BZqFsj8Cvf%2F8xv3pJ7%2BS5d3oKgUKVDqwfq%2BYHw6xWWbG6%2Fj98LUhr3BrYmqHsR0NU385ktOxjyTcgvBI4EggIU2%2BamtSiwZKltQGH0TmuKMb4U3%2Fx0outZf5acpdhw30hMgEvYTA8HVNwfotES5Gho31abzbJfwiA37UQUVvgfxLrSYdTsSB5Tgqv36PMucg1XrFVCAWKtHN2VWC0HULN1Ma9QPrFczCe8LbEBjqkAXDGC3oa6j6NTzLTXLaFxM%2BG28vFFgHcFoifh8hGwpeOSPYCdQ%2FvWEwTMDqFc5n3CZUhop24ezzoSDelH%2BdHvxyDJBzw%2B0mGarjrn2U2uvrYGWFHr%2FmW14d3s9CSbr1l%2FUwlIyN3wr2qhZiZt7dpxHzPsAyukaY0UgRF49sAl%2FABqGG2Q4JwHbAKx7cYdZ6JN%2BH0uyemlpgSmkSajg6AIRhvMELk&X-Amz-Signature=5aa1fb737553df52c45133fee35fe9603b3b71886b6bc412db7962c19bbe29d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG3TLSY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ABCOlfB%2FfoZLn1lRvj%2FhcbSK3Kd8%2BCWU9hXSZi7iHwIhAPAWDdWcUg%2BUa8EXrTMNTYcnBlFPk64Z9g9ZpyOokIoNKv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BASBmeIsV8Bs7arwq3AOIkZvJNgBpjcRC%2FqBCB0tGkQWZJNnT66c72iQYfplmtwcElzurbGYJOnTY7NLnjQ4jfhx0pAl4xNUIDqCOFwV4ZpRTq%2B7DOnNgiLdnFyTn5PQU%2FZ3fQHfOIfQNRt0aJP5Yd2%2BJZU%2Bq3jeiaJOjR3lV5YjvdxxukSom9Mn61HzrKy%2FJMC9ROm503ie5VbZDJLnTYlEkjN3fCvIyebbMb4Ml6BjmApLijWqywn5ZmkKSBJt4kfjazZUNr7XeGwbENbILOUbi%2FOvlFZ%2Fy53Bs6c9esxWFWgMrfFNcSnTrXqtn5X98D0djTMAKF5f3Zw4aU2rrlFijVNLR4cw9LaRi7KMtw6997g1yt%2FwLWzCrlmpcjq7vTrZz0mHSvY3IuC8bSKnmbiW%2FTH3NyQ7mS0qzSC6EcWmw8Z5%2BZqFsj8Cvf%2F8xv3pJ7%2BS5d3oKgUKVDqwfq%2BYHw6xWWbG6%2Fj98LUhr3BrYmqHsR0NU385ktOxjyTcgvBI4EggIU2%2BamtSiwZKltQGH0TmuKMb4U3%2Fx0outZf5acpdhw30hMgEvYTA8HVNwfotES5Gho31abzbJfwiA37UQUVvgfxLrSYdTsSB5Tgqv36PMucg1XrFVCAWKtHN2VWC0HULN1Ma9QPrFczCe8LbEBjqkAXDGC3oa6j6NTzLTXLaFxM%2BG28vFFgHcFoifh8hGwpeOSPYCdQ%2FvWEwTMDqFc5n3CZUhop24ezzoSDelH%2BdHvxyDJBzw%2B0mGarjrn2U2uvrYGWFHr%2FmW14d3s9CSbr1l%2FUwlIyN3wr2qhZiZt7dpxHzPsAyukaY0UgRF49sAl%2FABqGG2Q4JwHbAKx7cYdZ6JN%2BH0uyemlpgSmkSajg6AIRhvMELk&X-Amz-Signature=11b61b877738fce67737f13e70a61c03b6b8204e664927cd12134e20c78e722d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG3TLSY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ABCOlfB%2FfoZLn1lRvj%2FhcbSK3Kd8%2BCWU9hXSZi7iHwIhAPAWDdWcUg%2BUa8EXrTMNTYcnBlFPk64Z9g9ZpyOokIoNKv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BASBmeIsV8Bs7arwq3AOIkZvJNgBpjcRC%2FqBCB0tGkQWZJNnT66c72iQYfplmtwcElzurbGYJOnTY7NLnjQ4jfhx0pAl4xNUIDqCOFwV4ZpRTq%2B7DOnNgiLdnFyTn5PQU%2FZ3fQHfOIfQNRt0aJP5Yd2%2BJZU%2Bq3jeiaJOjR3lV5YjvdxxukSom9Mn61HzrKy%2FJMC9ROm503ie5VbZDJLnTYlEkjN3fCvIyebbMb4Ml6BjmApLijWqywn5ZmkKSBJt4kfjazZUNr7XeGwbENbILOUbi%2FOvlFZ%2Fy53Bs6c9esxWFWgMrfFNcSnTrXqtn5X98D0djTMAKF5f3Zw4aU2rrlFijVNLR4cw9LaRi7KMtw6997g1yt%2FwLWzCrlmpcjq7vTrZz0mHSvY3IuC8bSKnmbiW%2FTH3NyQ7mS0qzSC6EcWmw8Z5%2BZqFsj8Cvf%2F8xv3pJ7%2BS5d3oKgUKVDqwfq%2BYHw6xWWbG6%2Fj98LUhr3BrYmqHsR0NU385ktOxjyTcgvBI4EggIU2%2BamtSiwZKltQGH0TmuKMb4U3%2Fx0outZf5acpdhw30hMgEvYTA8HVNwfotES5Gho31abzbJfwiA37UQUVvgfxLrSYdTsSB5Tgqv36PMucg1XrFVCAWKtHN2VWC0HULN1Ma9QPrFczCe8LbEBjqkAXDGC3oa6j6NTzLTXLaFxM%2BG28vFFgHcFoifh8hGwpeOSPYCdQ%2FvWEwTMDqFc5n3CZUhop24ezzoSDelH%2BdHvxyDJBzw%2B0mGarjrn2U2uvrYGWFHr%2FmW14d3s9CSbr1l%2FUwlIyN3wr2qhZiZt7dpxHzPsAyukaY0UgRF49sAl%2FABqGG2Q4JwHbAKx7cYdZ6JN%2BH0uyemlpgSmkSajg6AIRhvMELk&X-Amz-Signature=d9b6b32bde18e0c090cd29796572b04d6cf8739fdb6e15bc77edf2d3ae5d255d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
