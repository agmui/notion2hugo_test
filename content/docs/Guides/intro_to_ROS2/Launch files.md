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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KGD2V5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFAhVSg9umvx%2FjWah7pfYkZMt%2FmK0%2FFGq7yfz%2BP2GNW4AiAiSYf8VF9BSOCGKn7PRj%2BH6uDjuHD0vZgD3f5qIN5%2FNCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmop5i4dnCGZedMaKtwDEiGDWz2S8XPIlJ3X6r5WNutSoCOU795rWbnXtvOQst95Qbk5UhmTfUR75DDAL172t9jspwcPIZOGm4sIz8g9QtxOV6JetCCnU2iwcr06%2BiKjSeEZoQo8dL5GmGT7gk2UyvmZflbp0IYO2iYakjr485glL0HWDOeTcqR3wPh3Lr1TCZW4WDd%2FcOBPSixHzwlmh27y0fy7XKdUxGHEG85pUynYsvNICu9nw42hw0UJRbn1ZWMjdmOnfCT9hZKltSJN4QA1H%2Bgsk9LynEUKyS8um9WGVYHqCllB3m2qEyjtzAD57hwJVgLLZ0v8Yg1tfyRW6DCp7BVY9v6fAZh49gqvbn2GHJF95IPZ9Qb7i9AK%2Fv7sy5zOxHumR0fsQuS9vvldiqLFbMihO6toX2xbLqjOKiW%2B9aO0aoH81AlTo80%2BX6KSLBWOSz0to0Deyrralqw45hKeCQZr2GZUozN0bG06pk%2F3XgP%2FeKALrJwgKSpsaVC%2F1lemLXKSqL4xVct5PY3P89yNAKGiyLv9wqZq4PNsd00BFjf8pjHh%2Fw72Vu%2BF4W%2BScCZkAIdbK8gpoSLmkoe2D0hKlk0F5UtjI9T2EnZ19P8Gob6NuCyaNcRvet3SIEEKbjgmgiW195Bq3cgwv5CKvgY6pgGVNoxSiV6yQII%2BLf9xSamkHhzAMlIdcD1eSH9RYcPxxvOxo8AEe0CCqd7gj5AxyohRVg1N96lV1GBZKtwTwthqI%2FNXczu3RJj15JjobTeQs0zJ9cLc8hqWNKZ%2BM9G8EZAKsNhsXAG0wyJQaFLl7ykv3qm5%2FzSzE%2BEBFohY3ST86wIfj%2Fsol9aWVhYwglg1dbsm22u5BBIN%2Bip2ix5cRc%2BXE%2FZ28BWr&X-Amz-Signature=b1439c1fcf310567f2414e33ce00ae39d03d618968b80f7bf8140f0aac1fdccb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KGD2V5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFAhVSg9umvx%2FjWah7pfYkZMt%2FmK0%2FFGq7yfz%2BP2GNW4AiAiSYf8VF9BSOCGKn7PRj%2BH6uDjuHD0vZgD3f5qIN5%2FNCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmop5i4dnCGZedMaKtwDEiGDWz2S8XPIlJ3X6r5WNutSoCOU795rWbnXtvOQst95Qbk5UhmTfUR75DDAL172t9jspwcPIZOGm4sIz8g9QtxOV6JetCCnU2iwcr06%2BiKjSeEZoQo8dL5GmGT7gk2UyvmZflbp0IYO2iYakjr485glL0HWDOeTcqR3wPh3Lr1TCZW4WDd%2FcOBPSixHzwlmh27y0fy7XKdUxGHEG85pUynYsvNICu9nw42hw0UJRbn1ZWMjdmOnfCT9hZKltSJN4QA1H%2Bgsk9LynEUKyS8um9WGVYHqCllB3m2qEyjtzAD57hwJVgLLZ0v8Yg1tfyRW6DCp7BVY9v6fAZh49gqvbn2GHJF95IPZ9Qb7i9AK%2Fv7sy5zOxHumR0fsQuS9vvldiqLFbMihO6toX2xbLqjOKiW%2B9aO0aoH81AlTo80%2BX6KSLBWOSz0to0Deyrralqw45hKeCQZr2GZUozN0bG06pk%2F3XgP%2FeKALrJwgKSpsaVC%2F1lemLXKSqL4xVct5PY3P89yNAKGiyLv9wqZq4PNsd00BFjf8pjHh%2Fw72Vu%2BF4W%2BScCZkAIdbK8gpoSLmkoe2D0hKlk0F5UtjI9T2EnZ19P8Gob6NuCyaNcRvet3SIEEKbjgmgiW195Bq3cgwv5CKvgY6pgGVNoxSiV6yQII%2BLf9xSamkHhzAMlIdcD1eSH9RYcPxxvOxo8AEe0CCqd7gj5AxyohRVg1N96lV1GBZKtwTwthqI%2FNXczu3RJj15JjobTeQs0zJ9cLc8hqWNKZ%2BM9G8EZAKsNhsXAG0wyJQaFLl7ykv3qm5%2FzSzE%2BEBFohY3ST86wIfj%2Fsol9aWVhYwglg1dbsm22u5BBIN%2Bip2ix5cRc%2BXE%2FZ28BWr&X-Amz-Signature=78f293b2aeb93a22cc3e3f7c88995f4f37128fece9cae148615aecb7810be0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655KGD2V5%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFAhVSg9umvx%2FjWah7pfYkZMt%2FmK0%2FFGq7yfz%2BP2GNW4AiAiSYf8VF9BSOCGKn7PRj%2BH6uDjuHD0vZgD3f5qIN5%2FNCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmop5i4dnCGZedMaKtwDEiGDWz2S8XPIlJ3X6r5WNutSoCOU795rWbnXtvOQst95Qbk5UhmTfUR75DDAL172t9jspwcPIZOGm4sIz8g9QtxOV6JetCCnU2iwcr06%2BiKjSeEZoQo8dL5GmGT7gk2UyvmZflbp0IYO2iYakjr485glL0HWDOeTcqR3wPh3Lr1TCZW4WDd%2FcOBPSixHzwlmh27y0fy7XKdUxGHEG85pUynYsvNICu9nw42hw0UJRbn1ZWMjdmOnfCT9hZKltSJN4QA1H%2Bgsk9LynEUKyS8um9WGVYHqCllB3m2qEyjtzAD57hwJVgLLZ0v8Yg1tfyRW6DCp7BVY9v6fAZh49gqvbn2GHJF95IPZ9Qb7i9AK%2Fv7sy5zOxHumR0fsQuS9vvldiqLFbMihO6toX2xbLqjOKiW%2B9aO0aoH81AlTo80%2BX6KSLBWOSz0to0Deyrralqw45hKeCQZr2GZUozN0bG06pk%2F3XgP%2FeKALrJwgKSpsaVC%2F1lemLXKSqL4xVct5PY3P89yNAKGiyLv9wqZq4PNsd00BFjf8pjHh%2Fw72Vu%2BF4W%2BScCZkAIdbK8gpoSLmkoe2D0hKlk0F5UtjI9T2EnZ19P8Gob6NuCyaNcRvet3SIEEKbjgmgiW195Bq3cgwv5CKvgY6pgGVNoxSiV6yQII%2BLf9xSamkHhzAMlIdcD1eSH9RYcPxxvOxo8AEe0CCqd7gj5AxyohRVg1N96lV1GBZKtwTwthqI%2FNXczu3RJj15JjobTeQs0zJ9cLc8hqWNKZ%2BM9G8EZAKsNhsXAG0wyJQaFLl7ykv3qm5%2FzSzE%2BEBFohY3ST86wIfj%2Fsol9aWVhYwglg1dbsm22u5BBIN%2Bip2ix5cRc%2BXE%2FZ28BWr&X-Amz-Signature=9b6afa15f03309a1e11ed744bf0a7461f3c1ad3db5b1dfb6b44b68df87007802&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
