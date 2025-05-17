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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYAQG6B%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezu0Y28iAFUoTiv%2BjlNSj4cJKvSzZuA0BJPIkANIPGwIhAJnbF8G8KSQTBUzL3ZV2pF4UjsZWgYK6Wf0UrG2h6Kw%2BKv8DCFYQABoMNjM3NDIzMTgzODA1IgyvDXbSOpbk1kaXMT0q3APqgmNU0ekdAEg3vAx7iO87y4UUJGsjx6rfCV3S1QQ6HfuGiRFUCJoXsbl3Bu6zyHK38aZINTPChhsWbK0Cgin01W%2F8wV4xWnySGoCkFhNin6XGwUiPvq0xG4Z2ctK%2FxNnChN%2BD9vYM%2FOBE7SZnvHYitJEcBOORiivlJg%2FxQq7UXu9u4u4AY91qR4hqhEvEAdk%2BjF5GCoYAOsvUYSgT0lPz%2FyanISf0apvs10J1m0RlOy0GRTiE7By9J6%2B0NegCNtVBYw%2B4DX76QKs7OjnJzl241EsBpGPl%2F5yJDTOy5KE00f4kvsj4bbIr9zJjeanoPsudqJU8C92clCrb25BGY3%2BA%2BY2XAqNVsKpB2pN45c%2B6ZSkIZ6oRduum%2BoUklLi7%2FrvKF%2B6ONAQkAYY7a%2BQu88OVjkOoZJe%2BZFQjcZHyfqXJC%2F3Q0dZlOlZOs9qZ8Mq%2FJfna5FEFw5liQSpTp3j5vvYMIHKGWA2CIi8UZGQMYjOgDU7BTtwBdZHvNPob50y2cVT3AfV8%2BWk8xoh004Fqkd%2FBoifffz43QS8uW1FUKvQj4IMklVylZdYrk%2B3jg5T3oRmHBu9GLpMwGB1kcvq%2F4O1L9mFmi%2FRsAVg4eWpifWz5IRJFhPlza8ob98yhhDC7q6DBBjqkAYdA1a31zLeW5pA%2Fvnj4XPZY6vPTPYe5mHHQkprWuq4%2FAhKVoUWLb6r3uSDMLVh%2Ff8ioWQFuhBdXGJkYXi3d22KQ%2FtC%2FUXUTRGjPh1PhpJU1sKuG0TN4AZgafoZ1yHM0KuEpKufEsF8CrUUrs2UkIHBJ0JmX5B337U0ia7D0nd8we8J9%2BX6oft9L6CpPxalSG578gPX6%2FOlAPLI1y6Su%2Bsg3lM17&X-Amz-Signature=6e4015a47a64bccbe05ae1a481e735f01f6d277f24521f51a1a793a3cf8fcb13&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYAQG6B%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezu0Y28iAFUoTiv%2BjlNSj4cJKvSzZuA0BJPIkANIPGwIhAJnbF8G8KSQTBUzL3ZV2pF4UjsZWgYK6Wf0UrG2h6Kw%2BKv8DCFYQABoMNjM3NDIzMTgzODA1IgyvDXbSOpbk1kaXMT0q3APqgmNU0ekdAEg3vAx7iO87y4UUJGsjx6rfCV3S1QQ6HfuGiRFUCJoXsbl3Bu6zyHK38aZINTPChhsWbK0Cgin01W%2F8wV4xWnySGoCkFhNin6XGwUiPvq0xG4Z2ctK%2FxNnChN%2BD9vYM%2FOBE7SZnvHYitJEcBOORiivlJg%2FxQq7UXu9u4u4AY91qR4hqhEvEAdk%2BjF5GCoYAOsvUYSgT0lPz%2FyanISf0apvs10J1m0RlOy0GRTiE7By9J6%2B0NegCNtVBYw%2B4DX76QKs7OjnJzl241EsBpGPl%2F5yJDTOy5KE00f4kvsj4bbIr9zJjeanoPsudqJU8C92clCrb25BGY3%2BA%2BY2XAqNVsKpB2pN45c%2B6ZSkIZ6oRduum%2BoUklLi7%2FrvKF%2B6ONAQkAYY7a%2BQu88OVjkOoZJe%2BZFQjcZHyfqXJC%2F3Q0dZlOlZOs9qZ8Mq%2FJfna5FEFw5liQSpTp3j5vvYMIHKGWA2CIi8UZGQMYjOgDU7BTtwBdZHvNPob50y2cVT3AfV8%2BWk8xoh004Fqkd%2FBoifffz43QS8uW1FUKvQj4IMklVylZdYrk%2B3jg5T3oRmHBu9GLpMwGB1kcvq%2F4O1L9mFmi%2FRsAVg4eWpifWz5IRJFhPlza8ob98yhhDC7q6DBBjqkAYdA1a31zLeW5pA%2Fvnj4XPZY6vPTPYe5mHHQkprWuq4%2FAhKVoUWLb6r3uSDMLVh%2Ff8ioWQFuhBdXGJkYXi3d22KQ%2FtC%2FUXUTRGjPh1PhpJU1sKuG0TN4AZgafoZ1yHM0KuEpKufEsF8CrUUrs2UkIHBJ0JmX5B337U0ia7D0nd8we8J9%2BX6oft9L6CpPxalSG578gPX6%2FOlAPLI1y6Su%2Bsg3lM17&X-Amz-Signature=adcb6753d9234482cc5b6851ac5d0bb7310bef579c277fb79bc0e1ae58af6103&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYAQG6B%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDezu0Y28iAFUoTiv%2BjlNSj4cJKvSzZuA0BJPIkANIPGwIhAJnbF8G8KSQTBUzL3ZV2pF4UjsZWgYK6Wf0UrG2h6Kw%2BKv8DCFYQABoMNjM3NDIzMTgzODA1IgyvDXbSOpbk1kaXMT0q3APqgmNU0ekdAEg3vAx7iO87y4UUJGsjx6rfCV3S1QQ6HfuGiRFUCJoXsbl3Bu6zyHK38aZINTPChhsWbK0Cgin01W%2F8wV4xWnySGoCkFhNin6XGwUiPvq0xG4Z2ctK%2FxNnChN%2BD9vYM%2FOBE7SZnvHYitJEcBOORiivlJg%2FxQq7UXu9u4u4AY91qR4hqhEvEAdk%2BjF5GCoYAOsvUYSgT0lPz%2FyanISf0apvs10J1m0RlOy0GRTiE7By9J6%2B0NegCNtVBYw%2B4DX76QKs7OjnJzl241EsBpGPl%2F5yJDTOy5KE00f4kvsj4bbIr9zJjeanoPsudqJU8C92clCrb25BGY3%2BA%2BY2XAqNVsKpB2pN45c%2B6ZSkIZ6oRduum%2BoUklLi7%2FrvKF%2B6ONAQkAYY7a%2BQu88OVjkOoZJe%2BZFQjcZHyfqXJC%2F3Q0dZlOlZOs9qZ8Mq%2FJfna5FEFw5liQSpTp3j5vvYMIHKGWA2CIi8UZGQMYjOgDU7BTtwBdZHvNPob50y2cVT3AfV8%2BWk8xoh004Fqkd%2FBoifffz43QS8uW1FUKvQj4IMklVylZdYrk%2B3jg5T3oRmHBu9GLpMwGB1kcvq%2F4O1L9mFmi%2FRsAVg4eWpifWz5IRJFhPlza8ob98yhhDC7q6DBBjqkAYdA1a31zLeW5pA%2Fvnj4XPZY6vPTPYe5mHHQkprWuq4%2FAhKVoUWLb6r3uSDMLVh%2Ff8ioWQFuhBdXGJkYXi3d22KQ%2FtC%2FUXUTRGjPh1PhpJU1sKuG0TN4AZgafoZ1yHM0KuEpKufEsF8CrUUrs2UkIHBJ0JmX5B337U0ia7D0nd8we8J9%2BX6oft9L6CpPxalSG578gPX6%2FOlAPLI1y6Su%2Bsg3lM17&X-Amz-Signature=265bc2e828e20ca00524db01befabc90f697c0d56976323d2164a9e7d89357e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
