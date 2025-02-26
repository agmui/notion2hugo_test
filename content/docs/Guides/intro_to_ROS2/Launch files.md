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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCSAUQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGIQuc3DwNlaBw%2FH6ai4JBnknhrJzU0y3hX1%2FnvB%2FRoCAiEA2FiwOouofKr79Qv6a5dFEMRdXbeCsqCtD3dWFUMz9%2B0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGTHLjp7ll6BuLXhvCrcA78kYNC1R%2FqhRuIs3VlKDu2b8bgOcNURU2mmQNffiDT3DEP%2FC7cJa22YQJCYFmiK8cmGKh9I%2BBrd4nPQJqDvKvxr4StJhKaAT5yD3D4679Jy7UkmfZzCaSGTFVmQ0eo95ol%2F1Kmedpn0vnqNisx5o7gBQ0ZAPdAdVNNZ9t4qTdopZ9pt9JFKHO%2FKOfYDNWv%2F9cyB8rIJxjd9UYtuQ7UmbZ8tGM4VTBZ9M1vrGHjirW9R6sI3Kxqtp%2FtxPtZpYOAUGkLSox%2Ft%2BYF%2F4b%2Buiq62vIsAJU0lZLl5wATw8ooKywyCflB29auINXkVrOpNl03FgMpOFNFiuRJB%2FGTSramVkce9hvauRvEE2jMcwTRf9kgD1vNwtxwkuCRN6YjIE2OX3G%2F4l9APVyBWEQugd%2FQIBIgII%2FNxloOZrJRa007T85NixeSBKljbqNpnfMKN3kLTiklfWNU0wxMdA3m%2Bx598ipiKqWq5H1lu8gUgd0mx%2B9C2hd3zl7Dwpmhx8cZNL%2FJk2kZiPLEvxcFNUXDq1P1hu%2FWd8WuQhgPwdvAydVeg6gdsMAvhH8E9M%2FEEeuyYqQO09JT4fBwDstcya7OqjeRlikjyE1vdhCFrnWITAfQyufsZmul9jOLB7IXZLLSfMNyH%2FL0GOqUBA3EUnNm%2Fd5rdJ7y%2FwVDWiZBmjCAAkgcPp0U%2BC4BOFzUD%2F3pSgZxdrBKEZUVX60VKGbyqROlDiTq5MRJHCTickCYzlyVh2tpl%2B%2B61ASUqYalUvqvD%2BmIXTreKdnHzax0%2FCu5CWN0lH6P1e2AEQFua%2BLbinGcrMrPQgPNDy5VSI%2BidyLyWOD8C%2Fzq8EnE%2BLyu9Sm4SjWa3AGf2wEnKY4Rrj30ePU7%2B&X-Amz-Signature=9d56c811cde2ad44c48c5a636d59bf021128ec530111bb65fb8ea03842287bed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCSAUQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGIQuc3DwNlaBw%2FH6ai4JBnknhrJzU0y3hX1%2FnvB%2FRoCAiEA2FiwOouofKr79Qv6a5dFEMRdXbeCsqCtD3dWFUMz9%2B0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGTHLjp7ll6BuLXhvCrcA78kYNC1R%2FqhRuIs3VlKDu2b8bgOcNURU2mmQNffiDT3DEP%2FC7cJa22YQJCYFmiK8cmGKh9I%2BBrd4nPQJqDvKvxr4StJhKaAT5yD3D4679Jy7UkmfZzCaSGTFVmQ0eo95ol%2F1Kmedpn0vnqNisx5o7gBQ0ZAPdAdVNNZ9t4qTdopZ9pt9JFKHO%2FKOfYDNWv%2F9cyB8rIJxjd9UYtuQ7UmbZ8tGM4VTBZ9M1vrGHjirW9R6sI3Kxqtp%2FtxPtZpYOAUGkLSox%2Ft%2BYF%2F4b%2Buiq62vIsAJU0lZLl5wATw8ooKywyCflB29auINXkVrOpNl03FgMpOFNFiuRJB%2FGTSramVkce9hvauRvEE2jMcwTRf9kgD1vNwtxwkuCRN6YjIE2OX3G%2F4l9APVyBWEQugd%2FQIBIgII%2FNxloOZrJRa007T85NixeSBKljbqNpnfMKN3kLTiklfWNU0wxMdA3m%2Bx598ipiKqWq5H1lu8gUgd0mx%2B9C2hd3zl7Dwpmhx8cZNL%2FJk2kZiPLEvxcFNUXDq1P1hu%2FWd8WuQhgPwdvAydVeg6gdsMAvhH8E9M%2FEEeuyYqQO09JT4fBwDstcya7OqjeRlikjyE1vdhCFrnWITAfQyufsZmul9jOLB7IXZLLSfMNyH%2FL0GOqUBA3EUnNm%2Fd5rdJ7y%2FwVDWiZBmjCAAkgcPp0U%2BC4BOFzUD%2F3pSgZxdrBKEZUVX60VKGbyqROlDiTq5MRJHCTickCYzlyVh2tpl%2B%2B61ASUqYalUvqvD%2BmIXTreKdnHzax0%2FCu5CWN0lH6P1e2AEQFua%2BLbinGcrMrPQgPNDy5VSI%2BidyLyWOD8C%2Fzq8EnE%2BLyu9Sm4SjWa3AGf2wEnKY4Rrj30ePU7%2B&X-Amz-Signature=a484926931f362ff38bbe0ffd50007ca40a9786b35c01500119c8d34536d2cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PGCSAUQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGIQuc3DwNlaBw%2FH6ai4JBnknhrJzU0y3hX1%2FnvB%2FRoCAiEA2FiwOouofKr79Qv6a5dFEMRdXbeCsqCtD3dWFUMz9%2B0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGTHLjp7ll6BuLXhvCrcA78kYNC1R%2FqhRuIs3VlKDu2b8bgOcNURU2mmQNffiDT3DEP%2FC7cJa22YQJCYFmiK8cmGKh9I%2BBrd4nPQJqDvKvxr4StJhKaAT5yD3D4679Jy7UkmfZzCaSGTFVmQ0eo95ol%2F1Kmedpn0vnqNisx5o7gBQ0ZAPdAdVNNZ9t4qTdopZ9pt9JFKHO%2FKOfYDNWv%2F9cyB8rIJxjd9UYtuQ7UmbZ8tGM4VTBZ9M1vrGHjirW9R6sI3Kxqtp%2FtxPtZpYOAUGkLSox%2Ft%2BYF%2F4b%2Buiq62vIsAJU0lZLl5wATw8ooKywyCflB29auINXkVrOpNl03FgMpOFNFiuRJB%2FGTSramVkce9hvauRvEE2jMcwTRf9kgD1vNwtxwkuCRN6YjIE2OX3G%2F4l9APVyBWEQugd%2FQIBIgII%2FNxloOZrJRa007T85NixeSBKljbqNpnfMKN3kLTiklfWNU0wxMdA3m%2Bx598ipiKqWq5H1lu8gUgd0mx%2B9C2hd3zl7Dwpmhx8cZNL%2FJk2kZiPLEvxcFNUXDq1P1hu%2FWd8WuQhgPwdvAydVeg6gdsMAvhH8E9M%2FEEeuyYqQO09JT4fBwDstcya7OqjeRlikjyE1vdhCFrnWITAfQyufsZmul9jOLB7IXZLLSfMNyH%2FL0GOqUBA3EUnNm%2Fd5rdJ7y%2FwVDWiZBmjCAAkgcPp0U%2BC4BOFzUD%2F3pSgZxdrBKEZUVX60VKGbyqROlDiTq5MRJHCTickCYzlyVh2tpl%2B%2B61ASUqYalUvqvD%2BmIXTreKdnHzax0%2FCu5CWN0lH6P1e2AEQFua%2BLbinGcrMrPQgPNDy5VSI%2BidyLyWOD8C%2Fzq8EnE%2BLyu9Sm4SjWa3AGf2wEnKY4Rrj30ePU7%2B&X-Amz-Signature=2a42c5ccc14c924bb4b30f44fb7ca1409a54e4b58f8552ecab9413f0e94ea573&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
