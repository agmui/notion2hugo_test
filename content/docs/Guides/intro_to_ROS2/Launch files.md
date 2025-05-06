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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J5BCM6T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhdYlxeAFof%2B4o5sZESwc57Nv8BF5QA1nm%2BflaGyKeeAiAGgW%2BuhJqmbstNSsVFBlTNL5vTU8dL9xo1V4L%2BC7uWbSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMid5jNWV3vIEPI0ZNKtwDQs7Hs0kqrogZ6uXOWhBqyAo1bMyu9pwnevEgKMzF6nYeLVNK2YEtWePQimxzrpRnfJPeXW3dRb65ME%2B1xcsaZjuSB9aE9e1jT73EtTMcB5YodLlRRW8jUWSElm%2FLRkjftUl79aq7fp1vOV4R1oSnsdJSIlFF2g8joL425i3REfMCs9FqCa9FWzPPPRfn5YlEcl9V2xucphq%2FJ4VFzPjwZcn%2BCCDqRjrdEYh%2BGm875qZ5sCzgJ4BL2SPxh2w9%2BVH3%2Bzd0iot3swTIKlZNoEephzsy5NNni43FeRVY1JEs4tXqOhBcE6gyi5Xx5viuI8nN%2B8oYts%2BQ2iFEhXCEiyNJ5jf7tpWVmlV3LQaLXPR14r865oFSIzMVhOv7%2FLYGNf32WIeXd4iXpEJyoFd93YhVB44Kh7NYemCSGzS%2BKwY1evWcuqBxi%2FiZ7oX9694%2BQ5KGhhS2vm4nvpiFX9oa547WoCz6Xghy9kfsfIJDjapNkueViaz%2FqTuwBJjmNR%2FU7fmhnk91G3Zs%2BVg5ziLfDcJAPmQV2KBdoXGnwOIBiXB36CPVxW5hn0nwzK%2FpGZwlb59Rh8W9kWoWgNQ4lofqiTSUcN1W9Uj1C606XTuhAfy4DC%2FkC4nbZ1r0xEpXRzAwjsvlwAY6pgGn%2BcmyRwOoqZJAne4OuEE9CLnrToHy5ldoR05ufPxe%2BuCYOAdP5sWlT6M10kvuLZXzQx7LiJoUMB99vhyUNQZnXwUk5a%2Fmn71fa%2B6PTo1QL5mCtfb%2BHaEWG%2FhyL2ul9YJkQIci%2Fp7p16FAUtN43v7mjnqkw3oTaGqzYFAkaLWZHAJWkUOcfaSIpvibMgQzMpsiG1Mbgbf70P%2FAHl8OdBRL%2Far014Je&X-Amz-Signature=b1740ba929e4c20882d8d7a64c68fdd1a49cf1ad2f6f7f3ea6b2b2cf87f02621&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J5BCM6T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhdYlxeAFof%2B4o5sZESwc57Nv8BF5QA1nm%2BflaGyKeeAiAGgW%2BuhJqmbstNSsVFBlTNL5vTU8dL9xo1V4L%2BC7uWbSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMid5jNWV3vIEPI0ZNKtwDQs7Hs0kqrogZ6uXOWhBqyAo1bMyu9pwnevEgKMzF6nYeLVNK2YEtWePQimxzrpRnfJPeXW3dRb65ME%2B1xcsaZjuSB9aE9e1jT73EtTMcB5YodLlRRW8jUWSElm%2FLRkjftUl79aq7fp1vOV4R1oSnsdJSIlFF2g8joL425i3REfMCs9FqCa9FWzPPPRfn5YlEcl9V2xucphq%2FJ4VFzPjwZcn%2BCCDqRjrdEYh%2BGm875qZ5sCzgJ4BL2SPxh2w9%2BVH3%2Bzd0iot3swTIKlZNoEephzsy5NNni43FeRVY1JEs4tXqOhBcE6gyi5Xx5viuI8nN%2B8oYts%2BQ2iFEhXCEiyNJ5jf7tpWVmlV3LQaLXPR14r865oFSIzMVhOv7%2FLYGNf32WIeXd4iXpEJyoFd93YhVB44Kh7NYemCSGzS%2BKwY1evWcuqBxi%2FiZ7oX9694%2BQ5KGhhS2vm4nvpiFX9oa547WoCz6Xghy9kfsfIJDjapNkueViaz%2FqTuwBJjmNR%2FU7fmhnk91G3Zs%2BVg5ziLfDcJAPmQV2KBdoXGnwOIBiXB36CPVxW5hn0nwzK%2FpGZwlb59Rh8W9kWoWgNQ4lofqiTSUcN1W9Uj1C606XTuhAfy4DC%2FkC4nbZ1r0xEpXRzAwjsvlwAY6pgGn%2BcmyRwOoqZJAne4OuEE9CLnrToHy5ldoR05ufPxe%2BuCYOAdP5sWlT6M10kvuLZXzQx7LiJoUMB99vhyUNQZnXwUk5a%2Fmn71fa%2B6PTo1QL5mCtfb%2BHaEWG%2FhyL2ul9YJkQIci%2Fp7p16FAUtN43v7mjnqkw3oTaGqzYFAkaLWZHAJWkUOcfaSIpvibMgQzMpsiG1Mbgbf70P%2FAHl8OdBRL%2Far014Je&X-Amz-Signature=e98146da8d17dd06338208d02ed6e01e08960e2ff937cc79185a799ff91ee7df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J5BCM6T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhdYlxeAFof%2B4o5sZESwc57Nv8BF5QA1nm%2BflaGyKeeAiAGgW%2BuhJqmbstNSsVFBlTNL5vTU8dL9xo1V4L%2BC7uWbSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMid5jNWV3vIEPI0ZNKtwDQs7Hs0kqrogZ6uXOWhBqyAo1bMyu9pwnevEgKMzF6nYeLVNK2YEtWePQimxzrpRnfJPeXW3dRb65ME%2B1xcsaZjuSB9aE9e1jT73EtTMcB5YodLlRRW8jUWSElm%2FLRkjftUl79aq7fp1vOV4R1oSnsdJSIlFF2g8joL425i3REfMCs9FqCa9FWzPPPRfn5YlEcl9V2xucphq%2FJ4VFzPjwZcn%2BCCDqRjrdEYh%2BGm875qZ5sCzgJ4BL2SPxh2w9%2BVH3%2Bzd0iot3swTIKlZNoEephzsy5NNni43FeRVY1JEs4tXqOhBcE6gyi5Xx5viuI8nN%2B8oYts%2BQ2iFEhXCEiyNJ5jf7tpWVmlV3LQaLXPR14r865oFSIzMVhOv7%2FLYGNf32WIeXd4iXpEJyoFd93YhVB44Kh7NYemCSGzS%2BKwY1evWcuqBxi%2FiZ7oX9694%2BQ5KGhhS2vm4nvpiFX9oa547WoCz6Xghy9kfsfIJDjapNkueViaz%2FqTuwBJjmNR%2FU7fmhnk91G3Zs%2BVg5ziLfDcJAPmQV2KBdoXGnwOIBiXB36CPVxW5hn0nwzK%2FpGZwlb59Rh8W9kWoWgNQ4lofqiTSUcN1W9Uj1C606XTuhAfy4DC%2FkC4nbZ1r0xEpXRzAwjsvlwAY6pgGn%2BcmyRwOoqZJAne4OuEE9CLnrToHy5ldoR05ufPxe%2BuCYOAdP5sWlT6M10kvuLZXzQx7LiJoUMB99vhyUNQZnXwUk5a%2Fmn71fa%2B6PTo1QL5mCtfb%2BHaEWG%2FhyL2ul9YJkQIci%2Fp7p16FAUtN43v7mjnqkw3oTaGqzYFAkaLWZHAJWkUOcfaSIpvibMgQzMpsiG1Mbgbf70P%2FAHl8OdBRL%2Far014Je&X-Amz-Signature=dbcc15a4e4112ff8e7997a20927d9c8d085ab50aa86efeb6049ca05d4b1151ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
