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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQP45DAF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2FaIF%2BNP5ZV9Ud%2FPlzCT6zfRc65qbyDfdN1q3CrfSuQIgYGo1oiJKGY6nFdoaqLez0ZRSj9uwSOi%2FAH46DvvWE2gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAkRL%2FxfKI4%2BilY2mCrcA%2FOjsFMgbpR4PrjhlFIS4DjMTlHmQlNfsl3HXx6rC%2BRbpZJNaW5nq7FPE3KC%2B2Uvthw8EwfBblGwJgmnEUZnEKxvd%2FI312pqFvvMwxZIxWjbjEoo%2BvAfEdqomF0QoUjg14RJxa3CqCk8WIBD%2BIYhbUKMktq%2B0wcpgswZbUg5e4r6zImPNUjaZk2KHs4Zpuf1LerN6vt8yoEGwbeR87XOTRmpTOitAs9Hs6empmLPogJb%2BwT%2FcduVjVRC12SgvHBDgjxMlJsVSYGJMFlOQtlcpnBd%2BMws7ngcG3XVCFM%2FodEgfnrIXdvT3lk6wsvJzAq4C%2FqG9XmgMKE0vyUke2A%2B5TtNqSchfHtZFM36nvz2Zx%2FUd0CkzjWuJmuubx9eDgkK%2B88KH3h71tf5dt%2B2gh8ASJqqemOuTy5CvTLDQ8w9XoVoDFjRvQXgB1APel6EYpvyF%2FcVnz7Hpqo2rqj7fgbN93ZTTsbQiAFtXaMrXPGFv6oxXT6LMczOuQoOfnOOJ7DAqZRECVyy1TNutQQBOUyvV73bie3A%2BsbrR7FT3Z%2FDthqWzfy8owI%2BdKs286x0eEER3EN746iNIZEkGUitI8Xbb%2FYmiABKgB2q%2BI%2Bnyk9il1lhIT83ClLkkAFM8I8MMLKD7sAGOqUBFzNOERCfgmmW2hDVHCK6Z1v0tAzvAHQYwAYkYbda8sNIzdk5xz6LMix%2BAMGPFeStxyOvIALPPN4uOp%2F%2Fl7loOTh1w0j95kSWSn4%2Bbn%2BiuSc4lfFbDQ3oESrY%2BfJXFrMiSpD69mIqG8Igcyuu97m%2Bsu6CaTud4IELJPGb%2F%2BcErZlDojFVWrZplwR7Pmv0r1Mew9sD1BgcGqy%2BCoJFFj8x5%2FKtyoev&X-Amz-Signature=05020654740be287978056d4b666950fee3789078654c3a8fe7175b20f5b80b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQP45DAF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2FaIF%2BNP5ZV9Ud%2FPlzCT6zfRc65qbyDfdN1q3CrfSuQIgYGo1oiJKGY6nFdoaqLez0ZRSj9uwSOi%2FAH46DvvWE2gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAkRL%2FxfKI4%2BilY2mCrcA%2FOjsFMgbpR4PrjhlFIS4DjMTlHmQlNfsl3HXx6rC%2BRbpZJNaW5nq7FPE3KC%2B2Uvthw8EwfBblGwJgmnEUZnEKxvd%2FI312pqFvvMwxZIxWjbjEoo%2BvAfEdqomF0QoUjg14RJxa3CqCk8WIBD%2BIYhbUKMktq%2B0wcpgswZbUg5e4r6zImPNUjaZk2KHs4Zpuf1LerN6vt8yoEGwbeR87XOTRmpTOitAs9Hs6empmLPogJb%2BwT%2FcduVjVRC12SgvHBDgjxMlJsVSYGJMFlOQtlcpnBd%2BMws7ngcG3XVCFM%2FodEgfnrIXdvT3lk6wsvJzAq4C%2FqG9XmgMKE0vyUke2A%2B5TtNqSchfHtZFM36nvz2Zx%2FUd0CkzjWuJmuubx9eDgkK%2B88KH3h71tf5dt%2B2gh8ASJqqemOuTy5CvTLDQ8w9XoVoDFjRvQXgB1APel6EYpvyF%2FcVnz7Hpqo2rqj7fgbN93ZTTsbQiAFtXaMrXPGFv6oxXT6LMczOuQoOfnOOJ7DAqZRECVyy1TNutQQBOUyvV73bie3A%2BsbrR7FT3Z%2FDthqWzfy8owI%2BdKs286x0eEER3EN746iNIZEkGUitI8Xbb%2FYmiABKgB2q%2BI%2Bnyk9il1lhIT83ClLkkAFM8I8MMLKD7sAGOqUBFzNOERCfgmmW2hDVHCK6Z1v0tAzvAHQYwAYkYbda8sNIzdk5xz6LMix%2BAMGPFeStxyOvIALPPN4uOp%2F%2Fl7loOTh1w0j95kSWSn4%2Bbn%2BiuSc4lfFbDQ3oESrY%2BfJXFrMiSpD69mIqG8Igcyuu97m%2Bsu6CaTud4IELJPGb%2F%2BcErZlDojFVWrZplwR7Pmv0r1Mew9sD1BgcGqy%2BCoJFFj8x5%2FKtyoev&X-Amz-Signature=c9c7c1d57f66c4a305151198be61f66b5a1102752e6211ec7ebc14a6bab2ad58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQP45DAF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2FaIF%2BNP5ZV9Ud%2FPlzCT6zfRc65qbyDfdN1q3CrfSuQIgYGo1oiJKGY6nFdoaqLez0ZRSj9uwSOi%2FAH46DvvWE2gq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAkRL%2FxfKI4%2BilY2mCrcA%2FOjsFMgbpR4PrjhlFIS4DjMTlHmQlNfsl3HXx6rC%2BRbpZJNaW5nq7FPE3KC%2B2Uvthw8EwfBblGwJgmnEUZnEKxvd%2FI312pqFvvMwxZIxWjbjEoo%2BvAfEdqomF0QoUjg14RJxa3CqCk8WIBD%2BIYhbUKMktq%2B0wcpgswZbUg5e4r6zImPNUjaZk2KHs4Zpuf1LerN6vt8yoEGwbeR87XOTRmpTOitAs9Hs6empmLPogJb%2BwT%2FcduVjVRC12SgvHBDgjxMlJsVSYGJMFlOQtlcpnBd%2BMws7ngcG3XVCFM%2FodEgfnrIXdvT3lk6wsvJzAq4C%2FqG9XmgMKE0vyUke2A%2B5TtNqSchfHtZFM36nvz2Zx%2FUd0CkzjWuJmuubx9eDgkK%2B88KH3h71tf5dt%2B2gh8ASJqqemOuTy5CvTLDQ8w9XoVoDFjRvQXgB1APel6EYpvyF%2FcVnz7Hpqo2rqj7fgbN93ZTTsbQiAFtXaMrXPGFv6oxXT6LMczOuQoOfnOOJ7DAqZRECVyy1TNutQQBOUyvV73bie3A%2BsbrR7FT3Z%2FDthqWzfy8owI%2BdKs286x0eEER3EN746iNIZEkGUitI8Xbb%2FYmiABKgB2q%2BI%2Bnyk9il1lhIT83ClLkkAFM8I8MMLKD7sAGOqUBFzNOERCfgmmW2hDVHCK6Z1v0tAzvAHQYwAYkYbda8sNIzdk5xz6LMix%2BAMGPFeStxyOvIALPPN4uOp%2F%2Fl7loOTh1w0j95kSWSn4%2Bbn%2BiuSc4lfFbDQ3oESrY%2BfJXFrMiSpD69mIqG8Igcyuu97m%2Bsu6CaTud4IELJPGb%2F%2BcErZlDojFVWrZplwR7Pmv0r1Mew9sD1BgcGqy%2BCoJFFj8x5%2FKtyoev&X-Amz-Signature=fb381b996384d3edfe6761af104233277dc1500bc05514958b017f64c31a6cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
