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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5MMMLL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX0wvkPCQtphjzKt58c%2FmmczEAIYUEVDBooBWGLxGTuAiBbs9hnx5Yv8BkZpfbu2EPZnsyqQrUgPyBMKIhSsEjfpiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bzjW09Ij5OWDcXBKtwDfFrI07eocxejZK1wfhXnPtVauzaXzCuMjRUqOkALPbxkLg5ifTbfBXK1U%2BIWXC3FccN14H818HNifEM3cOs2K5tveuxQ%2FQbEaw2G%2F1IsvaGdyepWzmZXRaW0JlI1Mc1XbsYB8ndnFxeb6aeB7FNXymg%2BcrwbYuEgC0cjwxiRq1jmV9UhjXkJ2GW3cFIb8%2BZlEH4RKUZpG%2BzNovjoIE0o7PXcPplRI23becglZUrbjVXtF05GuDwOKeRPvhTjgwIwBwRR9D3v9odZSGe8%2FmSP9RXlJAvODOYqdwZaAvGrEgDeKAfnYhcTP8Z2NV049WAw0JAlDMJXBz4E3rJO87ysapeelcpxkDQQpmf%2FA7BAaJ9FflOSgFZbSAr3dKxchWs5YfbBBVsGLhk35rPByd4G%2BCag4yJ1Ohz2M8A1Ocjj0upLaP67XfuiKmRUvi1pffOG0UDqw%2BspkJvmgaXm9XTW9Co8qyKarG4cqgmA7yX5%2BuAlGd7%2FVN411f6epFWCBTTp3H%2FRHYGAUirdcYByVbbMF92zUUZI6pE%2BgyYy0sFZyjrHhSOcrEum4ESTidO%2BeTvjjwRgEm1ptD%2FRxCdAcaGjwBFz3GMdbV5mkw1w1YxqI%2FqTUM%2FYbVSqViPQfFUwxo%2F8wAY6pgFXj0Jv%2F9XVWn6fOJTL23UUxB%2FUmoVSgM22IlUFEGCN28kofYfEVNTIWWITNrYBUhZUefvgW8%2B7wl30TKuvieBCHvx7EtphVvEBKEWh8oo9%2F5aqfzowcUJeuPaKZBYJCQ7CmHDCpfOdCahuHWiH0trRkgiIj2pEufTbxlMGelagzOiVhb04rOMQn0qr%2B47rNU99YefW1G3iCTCfUxdZSNxCRl6sXx25&X-Amz-Signature=513a3b3f1aa516ccc3f9a763861456935dd99afefe86097bec6a6cf9e707791f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5MMMLL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX0wvkPCQtphjzKt58c%2FmmczEAIYUEVDBooBWGLxGTuAiBbs9hnx5Yv8BkZpfbu2EPZnsyqQrUgPyBMKIhSsEjfpiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bzjW09Ij5OWDcXBKtwDfFrI07eocxejZK1wfhXnPtVauzaXzCuMjRUqOkALPbxkLg5ifTbfBXK1U%2BIWXC3FccN14H818HNifEM3cOs2K5tveuxQ%2FQbEaw2G%2F1IsvaGdyepWzmZXRaW0JlI1Mc1XbsYB8ndnFxeb6aeB7FNXymg%2BcrwbYuEgC0cjwxiRq1jmV9UhjXkJ2GW3cFIb8%2BZlEH4RKUZpG%2BzNovjoIE0o7PXcPplRI23becglZUrbjVXtF05GuDwOKeRPvhTjgwIwBwRR9D3v9odZSGe8%2FmSP9RXlJAvODOYqdwZaAvGrEgDeKAfnYhcTP8Z2NV049WAw0JAlDMJXBz4E3rJO87ysapeelcpxkDQQpmf%2FA7BAaJ9FflOSgFZbSAr3dKxchWs5YfbBBVsGLhk35rPByd4G%2BCag4yJ1Ohz2M8A1Ocjj0upLaP67XfuiKmRUvi1pffOG0UDqw%2BspkJvmgaXm9XTW9Co8qyKarG4cqgmA7yX5%2BuAlGd7%2FVN411f6epFWCBTTp3H%2FRHYGAUirdcYByVbbMF92zUUZI6pE%2BgyYy0sFZyjrHhSOcrEum4ESTidO%2BeTvjjwRgEm1ptD%2FRxCdAcaGjwBFz3GMdbV5mkw1w1YxqI%2FqTUM%2FYbVSqViPQfFUwxo%2F8wAY6pgFXj0Jv%2F9XVWn6fOJTL23UUxB%2FUmoVSgM22IlUFEGCN28kofYfEVNTIWWITNrYBUhZUefvgW8%2B7wl30TKuvieBCHvx7EtphVvEBKEWh8oo9%2F5aqfzowcUJeuPaKZBYJCQ7CmHDCpfOdCahuHWiH0trRkgiIj2pEufTbxlMGelagzOiVhb04rOMQn0qr%2B47rNU99YefW1G3iCTCfUxdZSNxCRl6sXx25&X-Amz-Signature=0004c78505b6d7978b9b0fd884c1e5d6534c543e7a92656598cf7f2b70684a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5MMMLL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX0wvkPCQtphjzKt58c%2FmmczEAIYUEVDBooBWGLxGTuAiBbs9hnx5Yv8BkZpfbu2EPZnsyqQrUgPyBMKIhSsEjfpiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3bzjW09Ij5OWDcXBKtwDfFrI07eocxejZK1wfhXnPtVauzaXzCuMjRUqOkALPbxkLg5ifTbfBXK1U%2BIWXC3FccN14H818HNifEM3cOs2K5tveuxQ%2FQbEaw2G%2F1IsvaGdyepWzmZXRaW0JlI1Mc1XbsYB8ndnFxeb6aeB7FNXymg%2BcrwbYuEgC0cjwxiRq1jmV9UhjXkJ2GW3cFIb8%2BZlEH4RKUZpG%2BzNovjoIE0o7PXcPplRI23becglZUrbjVXtF05GuDwOKeRPvhTjgwIwBwRR9D3v9odZSGe8%2FmSP9RXlJAvODOYqdwZaAvGrEgDeKAfnYhcTP8Z2NV049WAw0JAlDMJXBz4E3rJO87ysapeelcpxkDQQpmf%2FA7BAaJ9FflOSgFZbSAr3dKxchWs5YfbBBVsGLhk35rPByd4G%2BCag4yJ1Ohz2M8A1Ocjj0upLaP67XfuiKmRUvi1pffOG0UDqw%2BspkJvmgaXm9XTW9Co8qyKarG4cqgmA7yX5%2BuAlGd7%2FVN411f6epFWCBTTp3H%2FRHYGAUirdcYByVbbMF92zUUZI6pE%2BgyYy0sFZyjrHhSOcrEum4ESTidO%2BeTvjjwRgEm1ptD%2FRxCdAcaGjwBFz3GMdbV5mkw1w1YxqI%2FqTUM%2FYbVSqViPQfFUwxo%2F8wAY6pgFXj0Jv%2F9XVWn6fOJTL23UUxB%2FUmoVSgM22IlUFEGCN28kofYfEVNTIWWITNrYBUhZUefvgW8%2B7wl30TKuvieBCHvx7EtphVvEBKEWh8oo9%2F5aqfzowcUJeuPaKZBYJCQ7CmHDCpfOdCahuHWiH0trRkgiIj2pEufTbxlMGelagzOiVhb04rOMQn0qr%2B47rNU99YefW1G3iCTCfUxdZSNxCRl6sXx25&X-Amz-Signature=04ce70d394f19822a7a95afd23c8245c4ccbddcbca72e437e618f5d9f5083dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
