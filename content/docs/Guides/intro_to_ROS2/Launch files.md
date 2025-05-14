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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RUZQF2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFTj0vsX0m3TChxvFeL5NnIAVFYjtkQ8HFt9vt597Vs0AiBjMQMRcDpmEWys4I10nNaOuOANgbFLK27XgR3YLAJiKSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMtQsD4YYV8%2Fa3lp5sKtwDg84QGIvQcdmcesSzR3z7eNLqeOFEhG9LsPWWEjjhE4iRpyGU3R7b%2FeEthjJbGqaILBPRzk9CqYBtnC8bvkNQ8DN3FxF7cF%2FAtnCorAmHTTM8jLrep7n0yxBJ7jd5Cw5%2FrIPCr40%2BZbNSh7PeI6roRTPsWNyZqTVu75neZqPXrn%2ByI4iN0wuy1sdTMtNVNOV44FA%2FYjwbx1zqC8duzPSIDf6AFvrRrI3Q2EyA2t0h7gh2hsOO2nRp6jm%2Baos0dpdSlovNUdThne65775SDSbJDfcJkqBV2%2BkdYzUuAIBnUJxfzQ8ufxfH18y6kZQL6NTx5wOC4joXHnmSgxBZ7rmjkKzNe%2Fg6QLPajXfB6z8pzhfFMZB0UlHRAF9u0IjbhqNQ4xlIoAVbTh7092tCc2zAMjgCRFM7tPeb6cs5yZdufKxFAGATZwMuf8SVgET%2FY98C56yW1MZoQUKSqzVKh8rU166KGzedFi2likQxEx8UUbcD9sj7R6yz1HmXK2VOh5QeWpM7IKicM4lTl3S9vckHnRNQG%2FfqZxBmBo7bmk0LYl1UlJ9yFJBPTF%2B%2FsISHbVY9mtG03ovhStL9uTYnu3P75PjYlGIW1lGDLNGA36p1Cxta%2FTm4KMSMiWRSHZIwwaGSwQY6pgHeMiv56Tp4opbIJN6kROBj8m8sxuav7BjNJq1js6bHpMjXi3rMd3mh0%2FRO0rNSvbPwsawBpd6nCgiZf7QMZnJ3CQSIDC2%2BVWqyyvpWOKPZDBEdoruZlC7BhMTWCf%2FyGWypHIgX%2F83Ttpe94IRibtJ9Cn%2BgXebsLPl1yGwgyqXePaByCZTHYwnnAdRl4rz9i06Vs8yjA2%2FiBJMLsxbpJdYOpvzpUC0P&X-Amz-Signature=61c97a92dc7437a6eb4e9d1783b09ca6c53293665e9b125b94dcd564cddf48a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RUZQF2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFTj0vsX0m3TChxvFeL5NnIAVFYjtkQ8HFt9vt597Vs0AiBjMQMRcDpmEWys4I10nNaOuOANgbFLK27XgR3YLAJiKSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMtQsD4YYV8%2Fa3lp5sKtwDg84QGIvQcdmcesSzR3z7eNLqeOFEhG9LsPWWEjjhE4iRpyGU3R7b%2FeEthjJbGqaILBPRzk9CqYBtnC8bvkNQ8DN3FxF7cF%2FAtnCorAmHTTM8jLrep7n0yxBJ7jd5Cw5%2FrIPCr40%2BZbNSh7PeI6roRTPsWNyZqTVu75neZqPXrn%2ByI4iN0wuy1sdTMtNVNOV44FA%2FYjwbx1zqC8duzPSIDf6AFvrRrI3Q2EyA2t0h7gh2hsOO2nRp6jm%2Baos0dpdSlovNUdThne65775SDSbJDfcJkqBV2%2BkdYzUuAIBnUJxfzQ8ufxfH18y6kZQL6NTx5wOC4joXHnmSgxBZ7rmjkKzNe%2Fg6QLPajXfB6z8pzhfFMZB0UlHRAF9u0IjbhqNQ4xlIoAVbTh7092tCc2zAMjgCRFM7tPeb6cs5yZdufKxFAGATZwMuf8SVgET%2FY98C56yW1MZoQUKSqzVKh8rU166KGzedFi2likQxEx8UUbcD9sj7R6yz1HmXK2VOh5QeWpM7IKicM4lTl3S9vckHnRNQG%2FfqZxBmBo7bmk0LYl1UlJ9yFJBPTF%2B%2FsISHbVY9mtG03ovhStL9uTYnu3P75PjYlGIW1lGDLNGA36p1Cxta%2FTm4KMSMiWRSHZIwwaGSwQY6pgHeMiv56Tp4opbIJN6kROBj8m8sxuav7BjNJq1js6bHpMjXi3rMd3mh0%2FRO0rNSvbPwsawBpd6nCgiZf7QMZnJ3CQSIDC2%2BVWqyyvpWOKPZDBEdoruZlC7BhMTWCf%2FyGWypHIgX%2F83Ttpe94IRibtJ9Cn%2BgXebsLPl1yGwgyqXePaByCZTHYwnnAdRl4rz9i06Vs8yjA2%2FiBJMLsxbpJdYOpvzpUC0P&X-Amz-Signature=268d00868fec61d2175128c410390a6e9f31391f5f3303152aa7059511cef3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RUZQF2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFTj0vsX0m3TChxvFeL5NnIAVFYjtkQ8HFt9vt597Vs0AiBjMQMRcDpmEWys4I10nNaOuOANgbFLK27XgR3YLAJiKSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMtQsD4YYV8%2Fa3lp5sKtwDg84QGIvQcdmcesSzR3z7eNLqeOFEhG9LsPWWEjjhE4iRpyGU3R7b%2FeEthjJbGqaILBPRzk9CqYBtnC8bvkNQ8DN3FxF7cF%2FAtnCorAmHTTM8jLrep7n0yxBJ7jd5Cw5%2FrIPCr40%2BZbNSh7PeI6roRTPsWNyZqTVu75neZqPXrn%2ByI4iN0wuy1sdTMtNVNOV44FA%2FYjwbx1zqC8duzPSIDf6AFvrRrI3Q2EyA2t0h7gh2hsOO2nRp6jm%2Baos0dpdSlovNUdThne65775SDSbJDfcJkqBV2%2BkdYzUuAIBnUJxfzQ8ufxfH18y6kZQL6NTx5wOC4joXHnmSgxBZ7rmjkKzNe%2Fg6QLPajXfB6z8pzhfFMZB0UlHRAF9u0IjbhqNQ4xlIoAVbTh7092tCc2zAMjgCRFM7tPeb6cs5yZdufKxFAGATZwMuf8SVgET%2FY98C56yW1MZoQUKSqzVKh8rU166KGzedFi2likQxEx8UUbcD9sj7R6yz1HmXK2VOh5QeWpM7IKicM4lTl3S9vckHnRNQG%2FfqZxBmBo7bmk0LYl1UlJ9yFJBPTF%2B%2FsISHbVY9mtG03ovhStL9uTYnu3P75PjYlGIW1lGDLNGA36p1Cxta%2FTm4KMSMiWRSHZIwwaGSwQY6pgHeMiv56Tp4opbIJN6kROBj8m8sxuav7BjNJq1js6bHpMjXi3rMd3mh0%2FRO0rNSvbPwsawBpd6nCgiZf7QMZnJ3CQSIDC2%2BVWqyyvpWOKPZDBEdoruZlC7BhMTWCf%2FyGWypHIgX%2F83Ttpe94IRibtJ9Cn%2BgXebsLPl1yGwgyqXePaByCZTHYwnnAdRl4rz9i06Vs8yjA2%2FiBJMLsxbpJdYOpvzpUC0P&X-Amz-Signature=d6d85ef173fc7bce451c9e61146b853a3411d8906399e87a79ed8ccca3777635&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
