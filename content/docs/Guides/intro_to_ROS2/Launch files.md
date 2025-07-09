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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5TV3TBN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCta6%2Byo4XgvIOlprmxSCdYVjvZSnNuaYCvBD5il3kXNAIhAOXI2iGaEPgDkHy7%2FYCYOBoW4XTRpfkbLpkG7DVKTDMrKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyf8eGfgcxlMo8wT0q3AP%2FnkadkB%2BnFZ6q8NwyZ07QE9AFC62Uau4EZdhClmVUZTsUwdO45%2BnSu9a%2B6tn%2FdqzHjVD7zEGyPT55ocje0rXV3VdhZYdYf3K9zfLVXC6%2BT4dqd2l7bLXQ9l7%2FbT5ZU1Mg07i4GyugGrG%2FfyEb7g00ZujHegXag1lesP1B3BxEc%2FZ3J6U0%2BhoPAT%2BnbxDzl%2Bjftf3XTgoCQQBCFhBPvPYx559zIHc5LTSQMiAbEe5kxW0VevzDngpxGuk2ylVGj6%2FOpbhgrjvDlDtqmlAQMYPq2MvQnCF7%2FLxBZFXg%2FBwbHf5fi8cF2CjCHbmjgiPAZ5xoojsRKge1IHwnJ%2B7Uz56qdSvRBtXsC8tkqRP2MYWBbtCo6NU7h0t2B9tYE7PT8HREtnv701CG4kZlNmAYDKXhk4EiwwdGs7mQgJ8pzT%2Bg%2Bga2%2BhegtmqV0IVdleF%2FMrvHQXroF6Vgff9cUpXuIYs9%2FGwUOyinaE9pH8gkIn4sI74wu%2BXYyjeJ2eDi6SEXWNh1xOaTFAZKvkotyI6Mf5tZ2QJ1CvB%2FPkSiI0kcyC6N8u4oOluUevHKOyE2GmGRbj2NSIgAcA1VUfFMD1%2FyvTR1905315oXzwMD3LyHOphH%2F1tZmXlYXiHJ%2BUmjezCHxbrDBjqkAWtgyG9TDA418%2F44KfFsrtKeZglfpFJerPHnkBl%2BtVJJl%2FtY8GWnbdMAiWdSTshLE8LcAH%2BwqhzNcGULboOEquIUFQi1J%2Fwyx9TGdIhGMdwmNH3DbC8%2BmAJF93VburOde%2BKsoidZpeKMkvtuWS659j%2BDeF8BHtKWymz7jX8MchYTrUuxhUbmTkXJozRaDvKoVkup4YTaPEVLOInrcmRg5hywVVez&X-Amz-Signature=228de2a8ea25d12585c5dcb696b1186317f736204bf2b95d05bc3f74b027d766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5TV3TBN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCta6%2Byo4XgvIOlprmxSCdYVjvZSnNuaYCvBD5il3kXNAIhAOXI2iGaEPgDkHy7%2FYCYOBoW4XTRpfkbLpkG7DVKTDMrKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyf8eGfgcxlMo8wT0q3AP%2FnkadkB%2BnFZ6q8NwyZ07QE9AFC62Uau4EZdhClmVUZTsUwdO45%2BnSu9a%2B6tn%2FdqzHjVD7zEGyPT55ocje0rXV3VdhZYdYf3K9zfLVXC6%2BT4dqd2l7bLXQ9l7%2FbT5ZU1Mg07i4GyugGrG%2FfyEb7g00ZujHegXag1lesP1B3BxEc%2FZ3J6U0%2BhoPAT%2BnbxDzl%2Bjftf3XTgoCQQBCFhBPvPYx559zIHc5LTSQMiAbEe5kxW0VevzDngpxGuk2ylVGj6%2FOpbhgrjvDlDtqmlAQMYPq2MvQnCF7%2FLxBZFXg%2FBwbHf5fi8cF2CjCHbmjgiPAZ5xoojsRKge1IHwnJ%2B7Uz56qdSvRBtXsC8tkqRP2MYWBbtCo6NU7h0t2B9tYE7PT8HREtnv701CG4kZlNmAYDKXhk4EiwwdGs7mQgJ8pzT%2Bg%2Bga2%2BhegtmqV0IVdleF%2FMrvHQXroF6Vgff9cUpXuIYs9%2FGwUOyinaE9pH8gkIn4sI74wu%2BXYyjeJ2eDi6SEXWNh1xOaTFAZKvkotyI6Mf5tZ2QJ1CvB%2FPkSiI0kcyC6N8u4oOluUevHKOyE2GmGRbj2NSIgAcA1VUfFMD1%2FyvTR1905315oXzwMD3LyHOphH%2F1tZmXlYXiHJ%2BUmjezCHxbrDBjqkAWtgyG9TDA418%2F44KfFsrtKeZglfpFJerPHnkBl%2BtVJJl%2FtY8GWnbdMAiWdSTshLE8LcAH%2BwqhzNcGULboOEquIUFQi1J%2Fwyx9TGdIhGMdwmNH3DbC8%2BmAJF93VburOde%2BKsoidZpeKMkvtuWS659j%2BDeF8BHtKWymz7jX8MchYTrUuxhUbmTkXJozRaDvKoVkup4YTaPEVLOInrcmRg5hywVVez&X-Amz-Signature=17b8ea38934d76b4dd271f1ea9626500c19f1b396f2d9dd10844673373f99d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5TV3TBN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCta6%2Byo4XgvIOlprmxSCdYVjvZSnNuaYCvBD5il3kXNAIhAOXI2iGaEPgDkHy7%2FYCYOBoW4XTRpfkbLpkG7DVKTDMrKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyf8eGfgcxlMo8wT0q3AP%2FnkadkB%2BnFZ6q8NwyZ07QE9AFC62Uau4EZdhClmVUZTsUwdO45%2BnSu9a%2B6tn%2FdqzHjVD7zEGyPT55ocje0rXV3VdhZYdYf3K9zfLVXC6%2BT4dqd2l7bLXQ9l7%2FbT5ZU1Mg07i4GyugGrG%2FfyEb7g00ZujHegXag1lesP1B3BxEc%2FZ3J6U0%2BhoPAT%2BnbxDzl%2Bjftf3XTgoCQQBCFhBPvPYx559zIHc5LTSQMiAbEe5kxW0VevzDngpxGuk2ylVGj6%2FOpbhgrjvDlDtqmlAQMYPq2MvQnCF7%2FLxBZFXg%2FBwbHf5fi8cF2CjCHbmjgiPAZ5xoojsRKge1IHwnJ%2B7Uz56qdSvRBtXsC8tkqRP2MYWBbtCo6NU7h0t2B9tYE7PT8HREtnv701CG4kZlNmAYDKXhk4EiwwdGs7mQgJ8pzT%2Bg%2Bga2%2BhegtmqV0IVdleF%2FMrvHQXroF6Vgff9cUpXuIYs9%2FGwUOyinaE9pH8gkIn4sI74wu%2BXYyjeJ2eDi6SEXWNh1xOaTFAZKvkotyI6Mf5tZ2QJ1CvB%2FPkSiI0kcyC6N8u4oOluUevHKOyE2GmGRbj2NSIgAcA1VUfFMD1%2FyvTR1905315oXzwMD3LyHOphH%2F1tZmXlYXiHJ%2BUmjezCHxbrDBjqkAWtgyG9TDA418%2F44KfFsrtKeZglfpFJerPHnkBl%2BtVJJl%2FtY8GWnbdMAiWdSTshLE8LcAH%2BwqhzNcGULboOEquIUFQi1J%2Fwyx9TGdIhGMdwmNH3DbC8%2BmAJF93VburOde%2BKsoidZpeKMkvtuWS659j%2BDeF8BHtKWymz7jX8MchYTrUuxhUbmTkXJozRaDvKoVkup4YTaPEVLOInrcmRg5hywVVez&X-Amz-Signature=f9c2043a82818a1d79bdc91c1c374f8fa4be60f02cb7afbb66150532f8a48859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
