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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2AK4HR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6oBxqjn%2FjKEOfTUqiL0uDq5kkGoEUYk7RzptKMTTKOAIhAJC7kxzuPFADLQmnWSH%2Fnre8KytVafPuxilqFlFlf0unKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVeP8wpCw%2F4x6L1aUq3ANsj3prN8yMHvaslggFEeIaLdjeiycG4PpWkyE67dpKnD5KREE8nyDYHZN%2ByVZXFZI%2BagOZXIgKhnllEuX0kTMXkqKQvLDqqiJYxg7nIukawYxkKxAdUvF%2Fyq9BoWHzqKck2c7GCA%2Bl3fByjPza9zwaxTuo2rrc3fYxjZWKjuCPLKfWYE2zdQ1KpKkHfmkUBylMo9Lr4D3i50GkG%2F5dk5ObS2hf0tjmaDP6r2THx4TXiLWscxSPhAT%2BRfkH2j0d3KCdRcmVVe9BMTDXUkzMfEcIMcpeZ5DtNve%2Fvt3bOOy8cKxgc%2BOykyO5%2BOAQSSmgOHDmkCfz%2BHU0ebJS%2BxVAIz%2FhvGr0mWN2Mv9mfLim2kBm422Xgy3ljr87nNKHbWmJtiP6Qzy9k%2BmbJ9GYwgMa9VdGOpYmjg3mkNRRhmNGBcIuvC3pspsa%2Fl%2B9pkOXUwKkPeStE0qURURU587anwuBuRbS4Rz4LAHVpnDTtntZ1bcaac93WIycWH0YK0zkVI4Knn690pxwqNcQh8d7%2BJaffP2B4SxneAuoZWLcNWwPdUo%2FBclatewFJRu5qeiChOqGeixHMlAP3IFb6GUTLOQy5Rx72FAitD58bUIpLXiI0aLlYqOimRng560uIoGmtzCIyLPDBjqkAYs80b1wNYxTefEmEMAWSj3J9AlPzmNDyMRX7tM4o1JjKtAhJVktTMaWYRtQrG0wq38aO6PVfzrIele%2Br2gkGjTV8dPKjyVGdSO7dnjWXQblPi7ArwXdxfy7kbTZiPw0TqFlwrMFhWQHD60t2XIdd7em8pClWC0mShzT4OsK8w%2BYC%2B88ZAT%2FZql3bB3irK30iEuc%2Fxkli6Bcm2xmT0xkd9%2B3lIDp&X-Amz-Signature=7336655a1191ed5cb6b92fdc919cb88eed6045700664a3bf631c38c073d2b2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2AK4HR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6oBxqjn%2FjKEOfTUqiL0uDq5kkGoEUYk7RzptKMTTKOAIhAJC7kxzuPFADLQmnWSH%2Fnre8KytVafPuxilqFlFlf0unKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVeP8wpCw%2F4x6L1aUq3ANsj3prN8yMHvaslggFEeIaLdjeiycG4PpWkyE67dpKnD5KREE8nyDYHZN%2ByVZXFZI%2BagOZXIgKhnllEuX0kTMXkqKQvLDqqiJYxg7nIukawYxkKxAdUvF%2Fyq9BoWHzqKck2c7GCA%2Bl3fByjPza9zwaxTuo2rrc3fYxjZWKjuCPLKfWYE2zdQ1KpKkHfmkUBylMo9Lr4D3i50GkG%2F5dk5ObS2hf0tjmaDP6r2THx4TXiLWscxSPhAT%2BRfkH2j0d3KCdRcmVVe9BMTDXUkzMfEcIMcpeZ5DtNve%2Fvt3bOOy8cKxgc%2BOykyO5%2BOAQSSmgOHDmkCfz%2BHU0ebJS%2BxVAIz%2FhvGr0mWN2Mv9mfLim2kBm422Xgy3ljr87nNKHbWmJtiP6Qzy9k%2BmbJ9GYwgMa9VdGOpYmjg3mkNRRhmNGBcIuvC3pspsa%2Fl%2B9pkOXUwKkPeStE0qURURU587anwuBuRbS4Rz4LAHVpnDTtntZ1bcaac93WIycWH0YK0zkVI4Knn690pxwqNcQh8d7%2BJaffP2B4SxneAuoZWLcNWwPdUo%2FBclatewFJRu5qeiChOqGeixHMlAP3IFb6GUTLOQy5Rx72FAitD58bUIpLXiI0aLlYqOimRng560uIoGmtzCIyLPDBjqkAYs80b1wNYxTefEmEMAWSj3J9AlPzmNDyMRX7tM4o1JjKtAhJVktTMaWYRtQrG0wq38aO6PVfzrIele%2Br2gkGjTV8dPKjyVGdSO7dnjWXQblPi7ArwXdxfy7kbTZiPw0TqFlwrMFhWQHD60t2XIdd7em8pClWC0mShzT4OsK8w%2BYC%2B88ZAT%2FZql3bB3irK30iEuc%2Fxkli6Bcm2xmT0xkd9%2B3lIDp&X-Amz-Signature=9b29555084e27c6e02d899b835f74eca01495b0871d738756e32ed9e4f000b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2AK4HR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6oBxqjn%2FjKEOfTUqiL0uDq5kkGoEUYk7RzptKMTTKOAIhAJC7kxzuPFADLQmnWSH%2Fnre8KytVafPuxilqFlFlf0unKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVeP8wpCw%2F4x6L1aUq3ANsj3prN8yMHvaslggFEeIaLdjeiycG4PpWkyE67dpKnD5KREE8nyDYHZN%2ByVZXFZI%2BagOZXIgKhnllEuX0kTMXkqKQvLDqqiJYxg7nIukawYxkKxAdUvF%2Fyq9BoWHzqKck2c7GCA%2Bl3fByjPza9zwaxTuo2rrc3fYxjZWKjuCPLKfWYE2zdQ1KpKkHfmkUBylMo9Lr4D3i50GkG%2F5dk5ObS2hf0tjmaDP6r2THx4TXiLWscxSPhAT%2BRfkH2j0d3KCdRcmVVe9BMTDXUkzMfEcIMcpeZ5DtNve%2Fvt3bOOy8cKxgc%2BOykyO5%2BOAQSSmgOHDmkCfz%2BHU0ebJS%2BxVAIz%2FhvGr0mWN2Mv9mfLim2kBm422Xgy3ljr87nNKHbWmJtiP6Qzy9k%2BmbJ9GYwgMa9VdGOpYmjg3mkNRRhmNGBcIuvC3pspsa%2Fl%2B9pkOXUwKkPeStE0qURURU587anwuBuRbS4Rz4LAHVpnDTtntZ1bcaac93WIycWH0YK0zkVI4Knn690pxwqNcQh8d7%2BJaffP2B4SxneAuoZWLcNWwPdUo%2FBclatewFJRu5qeiChOqGeixHMlAP3IFb6GUTLOQy5Rx72FAitD58bUIpLXiI0aLlYqOimRng560uIoGmtzCIyLPDBjqkAYs80b1wNYxTefEmEMAWSj3J9AlPzmNDyMRX7tM4o1JjKtAhJVktTMaWYRtQrG0wq38aO6PVfzrIele%2Br2gkGjTV8dPKjyVGdSO7dnjWXQblPi7ArwXdxfy7kbTZiPw0TqFlwrMFhWQHD60t2XIdd7em8pClWC0mShzT4OsK8w%2BYC%2B88ZAT%2FZql3bB3irK30iEuc%2Fxkli6Bcm2xmT0xkd9%2B3lIDp&X-Amz-Signature=9232ba3ad2792ad0fbf56062701da4f63be8e2c7467542277b5aaf6b013c58f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
