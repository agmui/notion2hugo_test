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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6KGDCX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1MtoQNrV%2BVKGnhJG2HCmHcMPJAWcNBwMERqEuuNYLgAiBvqNfFg6N2IAyRZGLodae3vAmZoIbMfTn%2BRNrttjVxviqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKk3xQAYbNBC4KhMKtwD5EUv0wFAoGVaS%2FLQmn64SwfN4JO7Uo8p25268%2BHolrJHIUcWTpbJItMqNNiECJiooAZyHZaDhZS0g0PWRtQszSifoMzD1JIrjbXP5LBdKX6Db95U0PhsGst8KzugmDvEGeXb%2BneXVzMGYM3Mt98pNthvlUQ6AGkPlpFLZa%2FsYjYrxs7BFFbRB3uOetZAPdNFvDyGFTKpptxmeHHV0jsOG6nRdEyuEv%2BEbMxB6dIxy2XXH6zW1cBdAt7EKY316s%2FY5UQdEyBhPz7S2WWt%2BHzkSwiUMx%2BQgTDvP4JpdjAvxygIPQkoOaBk1ZjKCcL7Xd%2BrJwJWLQM4nw0ptu61C5xgK05HhIymAPacIfYhhSRvkGCax9bYfWmjDg86Ep%2BiMWb3J%2FC11ZqLGBK4nyBu26sBatuGIxII68mZ0a8O8XRcsolPr7tE7rYLpVLfHn5vgj3KX0UETzk86fMtJBfxLiJzBCmbJ713%2Fpwklr2N7QJCBpOiuZ7fC5ubjcWHiEhyRiB3pCCgdlpHU6Jd0m%2BBqokdV05MizZdHImPG1Gx%2FRJ60xBYQPbUnCg4lNWZXglp%2BQaVgE1chlh2nrENj9mz3o5VN%2F6IP%2FdBSRrBrjk%2FkkU44olKGoeGd0Qk3KNZUXkw5ueHwwY6pgGmR%2BKmbiB6%2BZu%2BqyaRihO498Q%2F7Ae0xtlkehp7LmZNkpDg82%2FT5CBIzk2vwKuicxlbiLtp6e1s02CIMLNPSAkyfQehJSgsb5CImKPvfV3L%2BEdQ65UNHlCDvDlhnp8EfGixH13%2FpoWcBJVhO82oVpE3WN5EvvgW8At5B%2FHOaqOf%2FGC%2FE0OwEKMbAfy8L8dAsBYLYWzd9SURTxPWghd7LZnpnyZfmQnb&X-Amz-Signature=bf4c56528ae5c98456db92e4f1880c1ac530bf6f13fc08786ca120c11d7ed988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6KGDCX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1MtoQNrV%2BVKGnhJG2HCmHcMPJAWcNBwMERqEuuNYLgAiBvqNfFg6N2IAyRZGLodae3vAmZoIbMfTn%2BRNrttjVxviqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKk3xQAYbNBC4KhMKtwD5EUv0wFAoGVaS%2FLQmn64SwfN4JO7Uo8p25268%2BHolrJHIUcWTpbJItMqNNiECJiooAZyHZaDhZS0g0PWRtQszSifoMzD1JIrjbXP5LBdKX6Db95U0PhsGst8KzugmDvEGeXb%2BneXVzMGYM3Mt98pNthvlUQ6AGkPlpFLZa%2FsYjYrxs7BFFbRB3uOetZAPdNFvDyGFTKpptxmeHHV0jsOG6nRdEyuEv%2BEbMxB6dIxy2XXH6zW1cBdAt7EKY316s%2FY5UQdEyBhPz7S2WWt%2BHzkSwiUMx%2BQgTDvP4JpdjAvxygIPQkoOaBk1ZjKCcL7Xd%2BrJwJWLQM4nw0ptu61C5xgK05HhIymAPacIfYhhSRvkGCax9bYfWmjDg86Ep%2BiMWb3J%2FC11ZqLGBK4nyBu26sBatuGIxII68mZ0a8O8XRcsolPr7tE7rYLpVLfHn5vgj3KX0UETzk86fMtJBfxLiJzBCmbJ713%2Fpwklr2N7QJCBpOiuZ7fC5ubjcWHiEhyRiB3pCCgdlpHU6Jd0m%2BBqokdV05MizZdHImPG1Gx%2FRJ60xBYQPbUnCg4lNWZXglp%2BQaVgE1chlh2nrENj9mz3o5VN%2F6IP%2FdBSRrBrjk%2FkkU44olKGoeGd0Qk3KNZUXkw5ueHwwY6pgGmR%2BKmbiB6%2BZu%2BqyaRihO498Q%2F7Ae0xtlkehp7LmZNkpDg82%2FT5CBIzk2vwKuicxlbiLtp6e1s02CIMLNPSAkyfQehJSgsb5CImKPvfV3L%2BEdQ65UNHlCDvDlhnp8EfGixH13%2FpoWcBJVhO82oVpE3WN5EvvgW8At5B%2FHOaqOf%2FGC%2FE0OwEKMbAfy8L8dAsBYLYWzd9SURTxPWghd7LZnpnyZfmQnb&X-Amz-Signature=75f34a3e00a7b3506fe003b69468e7c0793149d7908751a52dad5a786cb1c532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6KGDCX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1MtoQNrV%2BVKGnhJG2HCmHcMPJAWcNBwMERqEuuNYLgAiBvqNfFg6N2IAyRZGLodae3vAmZoIbMfTn%2BRNrttjVxviqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKk3xQAYbNBC4KhMKtwD5EUv0wFAoGVaS%2FLQmn64SwfN4JO7Uo8p25268%2BHolrJHIUcWTpbJItMqNNiECJiooAZyHZaDhZS0g0PWRtQszSifoMzD1JIrjbXP5LBdKX6Db95U0PhsGst8KzugmDvEGeXb%2BneXVzMGYM3Mt98pNthvlUQ6AGkPlpFLZa%2FsYjYrxs7BFFbRB3uOetZAPdNFvDyGFTKpptxmeHHV0jsOG6nRdEyuEv%2BEbMxB6dIxy2XXH6zW1cBdAt7EKY316s%2FY5UQdEyBhPz7S2WWt%2BHzkSwiUMx%2BQgTDvP4JpdjAvxygIPQkoOaBk1ZjKCcL7Xd%2BrJwJWLQM4nw0ptu61C5xgK05HhIymAPacIfYhhSRvkGCax9bYfWmjDg86Ep%2BiMWb3J%2FC11ZqLGBK4nyBu26sBatuGIxII68mZ0a8O8XRcsolPr7tE7rYLpVLfHn5vgj3KX0UETzk86fMtJBfxLiJzBCmbJ713%2Fpwklr2N7QJCBpOiuZ7fC5ubjcWHiEhyRiB3pCCgdlpHU6Jd0m%2BBqokdV05MizZdHImPG1Gx%2FRJ60xBYQPbUnCg4lNWZXglp%2BQaVgE1chlh2nrENj9mz3o5VN%2F6IP%2FdBSRrBrjk%2FkkU44olKGoeGd0Qk3KNZUXkw5ueHwwY6pgGmR%2BKmbiB6%2BZu%2BqyaRihO498Q%2F7Ae0xtlkehp7LmZNkpDg82%2FT5CBIzk2vwKuicxlbiLtp6e1s02CIMLNPSAkyfQehJSgsb5CImKPvfV3L%2BEdQ65UNHlCDvDlhnp8EfGixH13%2FpoWcBJVhO82oVpE3WN5EvvgW8At5B%2FHOaqOf%2FGC%2FE0OwEKMbAfy8L8dAsBYLYWzd9SURTxPWghd7LZnpnyZfmQnb&X-Amz-Signature=bd4a0e9f732531a10a5cf30718c2b5039c1c089f7ebcf3887412cfcea2c4584b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
