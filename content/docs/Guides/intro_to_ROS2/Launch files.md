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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCK32WY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAkpdaNBzyDfYskJYefcHsxZd4%2FQwcERY7PJJoONL9hPAiEA6Wa1XJdAO5J76Vw%2BqYFzjAYC2mjeYFEvJeKJsvrDe%2BAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF6Xfi1kc%2BM3IfYayircA91t%2FX%2FeFI3GCnnTPXuHz9oKnsC%2BNRQIe47BkDEQlMSVvwPCT%2FnyaIlvfgU8vbvitLI3rSRP2m1B%2BwK8rb78ZMOmNVHue2RskRzFLuxUgjo7bEKlWv%2B%2BMZQK2ecJ1v0kI0jmtSFDNMh5gmWyu3O5vHe5ZPSKCkA1%2F%2Foc1SgbVWvDOTczwqz45Ed%2Ffsmyers7c5mIRAF4UeMHSuNm7x9v3iKnHG%2BKKxMC8D3jF2RlS0D%2Fgqt%2Bdj6VYfH0JOveLm2usRONu6%2FDt7hzh56KDA%2F46QRXjvztOBRzh4Dm00xfzh9sT0pUGpTqIaNw6fJak70NItVXcZ4Qij0Ho5Zp90%2F09KtB%2BoRqJj3nBJ4kCA37kUONeTZdjzqWq%2BQkUw2w9Z5k%2BG%2B%2FiE0vYGMRiTKLey7FyV%2F%2Fdl%2FP5jHzzfpZcbe1BNRkNw40na3JSEZuepLs38z9qR%2Bf%2BDrH4jq4EypF2n%2FUz7jZ%2BuOgcqtTghV%2B37PPK5xz2ztgmTsF7m231qwFcCFBmBQN10j2aK2vqLUz7E4IbGHxJtsdFYmLXxieoomM8JroygMMxjmhWzqZPmsZzscpdntywtiuVb%2Bax92pcXUv5vhMMxZrLM8UXSu5u3i4vC2wti1Z5Hit9HAfTOhKMJmFg8IGOqUBiXMXLdW25viw8R3HhC9u13KYXxIeRAErUQr5hMD7GqOC2fQhKrjtuWb487ZgcC2fNaS2FyyB8YKnBbxe8BBB5JoYPG86YMABWG01Q%2F74Jzgr398pzAmgmdpT69kwbY2sA4DAA7WCpjjUdACrShx1gCcpYa%2FzW1HjeKQRju4gVt9o6n6J1jCZ215v%2BpjFp85ETmMIgh%2FUB3mxle4g8G6Bw9iNJf%2BC&X-Amz-Signature=2c375a8016709e8cd3955bad36ad7f34e4844aad2bbaff1fa715471e963dbb76&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCK32WY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAkpdaNBzyDfYskJYefcHsxZd4%2FQwcERY7PJJoONL9hPAiEA6Wa1XJdAO5J76Vw%2BqYFzjAYC2mjeYFEvJeKJsvrDe%2BAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF6Xfi1kc%2BM3IfYayircA91t%2FX%2FeFI3GCnnTPXuHz9oKnsC%2BNRQIe47BkDEQlMSVvwPCT%2FnyaIlvfgU8vbvitLI3rSRP2m1B%2BwK8rb78ZMOmNVHue2RskRzFLuxUgjo7bEKlWv%2B%2BMZQK2ecJ1v0kI0jmtSFDNMh5gmWyu3O5vHe5ZPSKCkA1%2F%2Foc1SgbVWvDOTczwqz45Ed%2Ffsmyers7c5mIRAF4UeMHSuNm7x9v3iKnHG%2BKKxMC8D3jF2RlS0D%2Fgqt%2Bdj6VYfH0JOveLm2usRONu6%2FDt7hzh56KDA%2F46QRXjvztOBRzh4Dm00xfzh9sT0pUGpTqIaNw6fJak70NItVXcZ4Qij0Ho5Zp90%2F09KtB%2BoRqJj3nBJ4kCA37kUONeTZdjzqWq%2BQkUw2w9Z5k%2BG%2B%2FiE0vYGMRiTKLey7FyV%2F%2Fdl%2FP5jHzzfpZcbe1BNRkNw40na3JSEZuepLs38z9qR%2Bf%2BDrH4jq4EypF2n%2FUz7jZ%2BuOgcqtTghV%2B37PPK5xz2ztgmTsF7m231qwFcCFBmBQN10j2aK2vqLUz7E4IbGHxJtsdFYmLXxieoomM8JroygMMxjmhWzqZPmsZzscpdntywtiuVb%2Bax92pcXUv5vhMMxZrLM8UXSu5u3i4vC2wti1Z5Hit9HAfTOhKMJmFg8IGOqUBiXMXLdW25viw8R3HhC9u13KYXxIeRAErUQr5hMD7GqOC2fQhKrjtuWb487ZgcC2fNaS2FyyB8YKnBbxe8BBB5JoYPG86YMABWG01Q%2F74Jzgr398pzAmgmdpT69kwbY2sA4DAA7WCpjjUdACrShx1gCcpYa%2FzW1HjeKQRju4gVt9o6n6J1jCZ215v%2BpjFp85ETmMIgh%2FUB3mxle4g8G6Bw9iNJf%2BC&X-Amz-Signature=8683c829cc89b328d476e506097489b2577a8fc1d37313dec16e9712f4c67df7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCK32WY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAkpdaNBzyDfYskJYefcHsxZd4%2FQwcERY7PJJoONL9hPAiEA6Wa1XJdAO5J76Vw%2BqYFzjAYC2mjeYFEvJeKJsvrDe%2BAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF6Xfi1kc%2BM3IfYayircA91t%2FX%2FeFI3GCnnTPXuHz9oKnsC%2BNRQIe47BkDEQlMSVvwPCT%2FnyaIlvfgU8vbvitLI3rSRP2m1B%2BwK8rb78ZMOmNVHue2RskRzFLuxUgjo7bEKlWv%2B%2BMZQK2ecJ1v0kI0jmtSFDNMh5gmWyu3O5vHe5ZPSKCkA1%2F%2Foc1SgbVWvDOTczwqz45Ed%2Ffsmyers7c5mIRAF4UeMHSuNm7x9v3iKnHG%2BKKxMC8D3jF2RlS0D%2Fgqt%2Bdj6VYfH0JOveLm2usRONu6%2FDt7hzh56KDA%2F46QRXjvztOBRzh4Dm00xfzh9sT0pUGpTqIaNw6fJak70NItVXcZ4Qij0Ho5Zp90%2F09KtB%2BoRqJj3nBJ4kCA37kUONeTZdjzqWq%2BQkUw2w9Z5k%2BG%2B%2FiE0vYGMRiTKLey7FyV%2F%2Fdl%2FP5jHzzfpZcbe1BNRkNw40na3JSEZuepLs38z9qR%2Bf%2BDrH4jq4EypF2n%2FUz7jZ%2BuOgcqtTghV%2B37PPK5xz2ztgmTsF7m231qwFcCFBmBQN10j2aK2vqLUz7E4IbGHxJtsdFYmLXxieoomM8JroygMMxjmhWzqZPmsZzscpdntywtiuVb%2Bax92pcXUv5vhMMxZrLM8UXSu5u3i4vC2wti1Z5Hit9HAfTOhKMJmFg8IGOqUBiXMXLdW25viw8R3HhC9u13KYXxIeRAErUQr5hMD7GqOC2fQhKrjtuWb487ZgcC2fNaS2FyyB8YKnBbxe8BBB5JoYPG86YMABWG01Q%2F74Jzgr398pzAmgmdpT69kwbY2sA4DAA7WCpjjUdACrShx1gCcpYa%2FzW1HjeKQRju4gVt9o6n6J1jCZ215v%2BpjFp85ETmMIgh%2FUB3mxle4g8G6Bw9iNJf%2BC&X-Amz-Signature=1759846f04665963657eef2bc7e53e199a4a604b937996191e1b329a945047cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
