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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYSW2F7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAIDS9YKtEWVuyBKukbcXgKUelW%2B0rGz%2FtMEQEfINHcoAiBQ4LI0%2BBz1jUVaJEsLqexmEs2uoWtEE5jmYS1LYc%2FOuir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMupLwQUJfoD4%2BM20QKtwDoY3EtqrjKhavn9WJyRa8l3n6My%2B6Bj1jKuyqsBO0CVxDqLOR1GMq24kIxkBbKIInsuWR5D9sGjKikIMdpRJxAIhJyKkQaNOtaE35Vc58zfoEheiV%2BSXm6emLEUbj%2BM5cvS0TLKhjtQuCmyCjcQ4IvBF5LHg8%2BmVlBsIALcdr3%2B9xBkzGCv0oC0qqZi2SJ7McnC2%2BtxCrqDgJAnJh3o7MPFpLZhlm%2FIjVcj%2BlSow7E3bBGIAQUFjLiZblwto9OEJ6gJefzAr%2Bbi0qIIzMu3%2F4mT81pTVLLi8mSFoRok0USsOpKXIG%2FnoRvbqjLJoEBRv1P1TiTxNtUqWHq6xrvWJM9JTmlhX0adfAfw2cPIDESevZb8aPXLqBVBe2evljqmhkMj1nJ2KrgnhphW5OFRtHhZK5O57sw8uVD5DwK8eVb0kR%2BKr8aZylbuKyafTXmbckVE%2B%2F9pUbm2mLzKCCZLmuwXW1zHoM0ZTqKDXFui8JOGWbXDMr9nsQuHJxpi142oydjO%2BUuEuKo6L0qitRl62noDnFBrsZW%2Bn0lQ2sGEu1bz3pZe%2FZKAI5LW4Toj1XWcnT36Ik7DzJsBYxV%2BgiQIP4k3eMFR6Y6%2FDGqT%2FWIAwfdnuPLKtvae4d4GfZtxYwm6ihvwY6pgF0dTb5dF79oTCkG02%2Fu%2BxUS5YAtEgW%2BAW74OS0nGTmPgeGnF0vni%2BOxzhNogoHkVrCfRpQHHQRnm0fXnYR2QcDnOJX9xb%2Bi66p87wIyg1Cmx0hbYuQdZhdbJ6%2Bvdv0ORon4x1yk79Wkgbho5CpoqXJWgmJRMblfcYzZexnljRPNIpcMVtBuA41h8e9R0dCEqQeEaLy8pcmknU7BECj%2Bva8J0YAoPC8&X-Amz-Signature=75141311b701177ecdbd8cf60c0700a4db5396d530ae2843e49371709d995b00&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYSW2F7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAIDS9YKtEWVuyBKukbcXgKUelW%2B0rGz%2FtMEQEfINHcoAiBQ4LI0%2BBz1jUVaJEsLqexmEs2uoWtEE5jmYS1LYc%2FOuir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMupLwQUJfoD4%2BM20QKtwDoY3EtqrjKhavn9WJyRa8l3n6My%2B6Bj1jKuyqsBO0CVxDqLOR1GMq24kIxkBbKIInsuWR5D9sGjKikIMdpRJxAIhJyKkQaNOtaE35Vc58zfoEheiV%2BSXm6emLEUbj%2BM5cvS0TLKhjtQuCmyCjcQ4IvBF5LHg8%2BmVlBsIALcdr3%2B9xBkzGCv0oC0qqZi2SJ7McnC2%2BtxCrqDgJAnJh3o7MPFpLZhlm%2FIjVcj%2BlSow7E3bBGIAQUFjLiZblwto9OEJ6gJefzAr%2Bbi0qIIzMu3%2F4mT81pTVLLi8mSFoRok0USsOpKXIG%2FnoRvbqjLJoEBRv1P1TiTxNtUqWHq6xrvWJM9JTmlhX0adfAfw2cPIDESevZb8aPXLqBVBe2evljqmhkMj1nJ2KrgnhphW5OFRtHhZK5O57sw8uVD5DwK8eVb0kR%2BKr8aZylbuKyafTXmbckVE%2B%2F9pUbm2mLzKCCZLmuwXW1zHoM0ZTqKDXFui8JOGWbXDMr9nsQuHJxpi142oydjO%2BUuEuKo6L0qitRl62noDnFBrsZW%2Bn0lQ2sGEu1bz3pZe%2FZKAI5LW4Toj1XWcnT36Ik7DzJsBYxV%2BgiQIP4k3eMFR6Y6%2FDGqT%2FWIAwfdnuPLKtvae4d4GfZtxYwm6ihvwY6pgF0dTb5dF79oTCkG02%2Fu%2BxUS5YAtEgW%2BAW74OS0nGTmPgeGnF0vni%2BOxzhNogoHkVrCfRpQHHQRnm0fXnYR2QcDnOJX9xb%2Bi66p87wIyg1Cmx0hbYuQdZhdbJ6%2Bvdv0ORon4x1yk79Wkgbho5CpoqXJWgmJRMblfcYzZexnljRPNIpcMVtBuA41h8e9R0dCEqQeEaLy8pcmknU7BECj%2Bva8J0YAoPC8&X-Amz-Signature=566b7b9194ae8e7e00fb49ad2141119848ee63576c002057e648583f35fbd808&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYSW2F7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAIDS9YKtEWVuyBKukbcXgKUelW%2B0rGz%2FtMEQEfINHcoAiBQ4LI0%2BBz1jUVaJEsLqexmEs2uoWtEE5jmYS1LYc%2FOuir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMupLwQUJfoD4%2BM20QKtwDoY3EtqrjKhavn9WJyRa8l3n6My%2B6Bj1jKuyqsBO0CVxDqLOR1GMq24kIxkBbKIInsuWR5D9sGjKikIMdpRJxAIhJyKkQaNOtaE35Vc58zfoEheiV%2BSXm6emLEUbj%2BM5cvS0TLKhjtQuCmyCjcQ4IvBF5LHg8%2BmVlBsIALcdr3%2B9xBkzGCv0oC0qqZi2SJ7McnC2%2BtxCrqDgJAnJh3o7MPFpLZhlm%2FIjVcj%2BlSow7E3bBGIAQUFjLiZblwto9OEJ6gJefzAr%2Bbi0qIIzMu3%2F4mT81pTVLLi8mSFoRok0USsOpKXIG%2FnoRvbqjLJoEBRv1P1TiTxNtUqWHq6xrvWJM9JTmlhX0adfAfw2cPIDESevZb8aPXLqBVBe2evljqmhkMj1nJ2KrgnhphW5OFRtHhZK5O57sw8uVD5DwK8eVb0kR%2BKr8aZylbuKyafTXmbckVE%2B%2F9pUbm2mLzKCCZLmuwXW1zHoM0ZTqKDXFui8JOGWbXDMr9nsQuHJxpi142oydjO%2BUuEuKo6L0qitRl62noDnFBrsZW%2Bn0lQ2sGEu1bz3pZe%2FZKAI5LW4Toj1XWcnT36Ik7DzJsBYxV%2BgiQIP4k3eMFR6Y6%2FDGqT%2FWIAwfdnuPLKtvae4d4GfZtxYwm6ihvwY6pgF0dTb5dF79oTCkG02%2Fu%2BxUS5YAtEgW%2BAW74OS0nGTmPgeGnF0vni%2BOxzhNogoHkVrCfRpQHHQRnm0fXnYR2QcDnOJX9xb%2Bi66p87wIyg1Cmx0hbYuQdZhdbJ6%2Bvdv0ORon4x1yk79Wkgbho5CpoqXJWgmJRMblfcYzZexnljRPNIpcMVtBuA41h8e9R0dCEqQeEaLy8pcmknU7BECj%2Bva8J0YAoPC8&X-Amz-Signature=956aaa5ab0fe43e7ea21b0520c441983de50307ce7417f12077e58ba2a5d776c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
