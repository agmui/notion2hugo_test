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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4SVZYR%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEu1PKpKNirTVXNEdUmrpsKTPsr0RXkB02916O2eLWAiBN%2BuvkxfdwfILjcY%2FiK%2BZh%2Fx8poYyUndMC1B87QTXTRiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuY9%2BNkEw64YBnyjKtwDpNrZGWShFWzXSTPyCYUnAzkDVJ%2FEDcj9Xw4fl%2Bko1inWUOfqjJTtdChXKHymf2pKWxJCowO41urUkCeWnB0WnfsqxFqDfLKQVaQE%2Bbms9%2FXE5d3xrd7qCYFWZYjVaYGBcFBnLGfhDJ6CFM7G42xWj%2Bsgy6HpVNp%2B%2BTCGQJaazh6fGF%2Fddr5%2Bz6qIjzSnmL8J5PsiM%2FRpGaf5f%2Bz6nOTNREB0p2FTcCZ3es5Z3izvPQrV7LwI%2FfNYvDxOReUGheU3C0Q1fz9GQqQMEmDYjLkGUpO4og%2BVHGQKKqyGsaZ3pNiGARuz%2FWKF290AB9rLNA3V%2BW6AXoXXzv3%2F%2F8kmJV%2FElEE%2FWHOLUcC%2FXkrXgKWEeWoE043G4Pgt%2F5iXM7czjft98FbZnKXK3MjHro4X7yPCKrcrQ0aU4AI9RWHLp8Suc21Wbm9LLVXtpsGVfHJDlgvNjh7Epf1zg48KcYe3RxyI88MGCzNe76aO%2FULjxKrXdYcYMsU71a6UhnHCLsKnrZ93b2UpeTEqhtmSdLUtbiKwg5vls8%2Boj4NVsz2jsCyWZYYicZDnW7Zj4i8G%2BzXI48TOEYtStqvBWb1S%2FolD7%2BfHdgqp8810lP0nuljLhgf%2Bw7R2GtXHzZdH%2BLh2rvkwip2awgY6pgE3pDUH4%2BLsErBJObOyHKk15sIzBxBXoEeizKRJKsUV9aPOewicGMI3hnLxwyRaUoLzxBFf2TgZ3lp8bcmQeWCFfZnwwNoBJywDA3QLKgFdBgcPNuaJDzsE%2FfCeznMjcl6coIuZ3EE99jj0Ov82EikCAGIFZGStVUjKrSBhFPUTNLw7PSj3wc5mEDwIshZaresDV7orfEXSCFr9Ov%2BFG2t0sMYQSkg1&X-Amz-Signature=25d027487b6748ed8c9f234f750b740f3d1a86b2a115afbc9a9c57697db45f00&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4SVZYR%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEu1PKpKNirTVXNEdUmrpsKTPsr0RXkB02916O2eLWAiBN%2BuvkxfdwfILjcY%2FiK%2BZh%2Fx8poYyUndMC1B87QTXTRiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuY9%2BNkEw64YBnyjKtwDpNrZGWShFWzXSTPyCYUnAzkDVJ%2FEDcj9Xw4fl%2Bko1inWUOfqjJTtdChXKHymf2pKWxJCowO41urUkCeWnB0WnfsqxFqDfLKQVaQE%2Bbms9%2FXE5d3xrd7qCYFWZYjVaYGBcFBnLGfhDJ6CFM7G42xWj%2Bsgy6HpVNp%2B%2BTCGQJaazh6fGF%2Fddr5%2Bz6qIjzSnmL8J5PsiM%2FRpGaf5f%2Bz6nOTNREB0p2FTcCZ3es5Z3izvPQrV7LwI%2FfNYvDxOReUGheU3C0Q1fz9GQqQMEmDYjLkGUpO4og%2BVHGQKKqyGsaZ3pNiGARuz%2FWKF290AB9rLNA3V%2BW6AXoXXzv3%2F%2F8kmJV%2FElEE%2FWHOLUcC%2FXkrXgKWEeWoE043G4Pgt%2F5iXM7czjft98FbZnKXK3MjHro4X7yPCKrcrQ0aU4AI9RWHLp8Suc21Wbm9LLVXtpsGVfHJDlgvNjh7Epf1zg48KcYe3RxyI88MGCzNe76aO%2FULjxKrXdYcYMsU71a6UhnHCLsKnrZ93b2UpeTEqhtmSdLUtbiKwg5vls8%2Boj4NVsz2jsCyWZYYicZDnW7Zj4i8G%2BzXI48TOEYtStqvBWb1S%2FolD7%2BfHdgqp8810lP0nuljLhgf%2Bw7R2GtXHzZdH%2BLh2rvkwip2awgY6pgE3pDUH4%2BLsErBJObOyHKk15sIzBxBXoEeizKRJKsUV9aPOewicGMI3hnLxwyRaUoLzxBFf2TgZ3lp8bcmQeWCFfZnwwNoBJywDA3QLKgFdBgcPNuaJDzsE%2FfCeznMjcl6coIuZ3EE99jj0Ov82EikCAGIFZGStVUjKrSBhFPUTNLw7PSj3wc5mEDwIshZaresDV7orfEXSCFr9Ov%2BFG2t0sMYQSkg1&X-Amz-Signature=b0da0bdd52b91c0d7a39b5764ab4e468b2531ac806f949d22bcec2156a676ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4SVZYR%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAEu1PKpKNirTVXNEdUmrpsKTPsr0RXkB02916O2eLWAiBN%2BuvkxfdwfILjcY%2FiK%2BZh%2Fx8poYyUndMC1B87QTXTRiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuuY9%2BNkEw64YBnyjKtwDpNrZGWShFWzXSTPyCYUnAzkDVJ%2FEDcj9Xw4fl%2Bko1inWUOfqjJTtdChXKHymf2pKWxJCowO41urUkCeWnB0WnfsqxFqDfLKQVaQE%2Bbms9%2FXE5d3xrd7qCYFWZYjVaYGBcFBnLGfhDJ6CFM7G42xWj%2Bsgy6HpVNp%2B%2BTCGQJaazh6fGF%2Fddr5%2Bz6qIjzSnmL8J5PsiM%2FRpGaf5f%2Bz6nOTNREB0p2FTcCZ3es5Z3izvPQrV7LwI%2FfNYvDxOReUGheU3C0Q1fz9GQqQMEmDYjLkGUpO4og%2BVHGQKKqyGsaZ3pNiGARuz%2FWKF290AB9rLNA3V%2BW6AXoXXzv3%2F%2F8kmJV%2FElEE%2FWHOLUcC%2FXkrXgKWEeWoE043G4Pgt%2F5iXM7czjft98FbZnKXK3MjHro4X7yPCKrcrQ0aU4AI9RWHLp8Suc21Wbm9LLVXtpsGVfHJDlgvNjh7Epf1zg48KcYe3RxyI88MGCzNe76aO%2FULjxKrXdYcYMsU71a6UhnHCLsKnrZ93b2UpeTEqhtmSdLUtbiKwg5vls8%2Boj4NVsz2jsCyWZYYicZDnW7Zj4i8G%2BzXI48TOEYtStqvBWb1S%2FolD7%2BfHdgqp8810lP0nuljLhgf%2Bw7R2GtXHzZdH%2BLh2rvkwip2awgY6pgE3pDUH4%2BLsErBJObOyHKk15sIzBxBXoEeizKRJKsUV9aPOewicGMI3hnLxwyRaUoLzxBFf2TgZ3lp8bcmQeWCFfZnwwNoBJywDA3QLKgFdBgcPNuaJDzsE%2FfCeznMjcl6coIuZ3EE99jj0Ov82EikCAGIFZGStVUjKrSBhFPUTNLw7PSj3wc5mEDwIshZaresDV7orfEXSCFr9Ov%2BFG2t0sMYQSkg1&X-Amz-Signature=421f8053480550f4af16912c31a828bdce7fafcaa6b1e4885beac929266c5497&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
