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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7OMEWF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT7pEoFqyQ%2FBErwqsJsspJmlK3Bdl%2Fr%2F73ZN4qG2EnLQIhAPG%2BOQ7N6pd10foUx3FQx2lQnyNYVSHJaYTueg%2Fy9pdrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwHjqUGfBUK8OfLux4q3AMM1GTBTCzg9weY1utY5udopM4ds1FQODgIinwC5TDohgv5cxSYaGZVR5w4HRSA91Y%2FYucrSYDtokrG%2F%2F%2ByFMeo4Q8%2FRZEs5t5zUigWUCF5173svdl8393rZkFbu4mQ4yVOFTvlbPwA4vEgNDL6NCYbtQ7oeDfr8esZ8rES9oi3bJplCquqV%2FyRO8jjoYskSBktCpoonk95ni1TBCWin%2F2AI2XccQ1AGIli7pUq8jztHH77j%2BpmIVSxr0pynk13zsj5AZyA2rVqIrt%2FXc9D%2Fap%2FQsN8bXVHMV9MQypMifnvk%2BnBiDjbJaLsHTJJxsErngj3DE%2BZ5%2FlkpIF2FZ3Y9TMgAjDM9eSb6T1jyikHtwvlLwMXctTTKPCrA3II4aONdKgLsPk9W0qRK%2BsdODsySjwN8tsv%2FnZT2Ex1cHooNC13P0PGK9XE4TGG2VwN%2F%2Bywf%2FOVtSoIiE9ghYdE6OYxGcvVJc9gNeJFElYIq2rs0u%2FOmfGRfnKL6QB4%2F4HQBJHswov4DsGK6mXALxg2On%2FomI0YhEqQ145K5BDeJlOTNDNFHFCJ6tBOET%2F3vGdlvTlhRt4mw%2BPMKJePzSgRuE5B%2BEKzrsFakDfD%2FQzkDNmYhie4N3V7mEsDlFSTT2%2BIzDDCuNK%2FBjqkAS6nikDhMyLDbo48B9gI03Lne89%2BzfaE5Q6nBGAYhcybZcntjAVj3mJcwdItNa4TfrOZYmgwBde95HinyDw59GgzhrMQGwdhaUA4hHCYFIaM1Kdq8wb1JvhFw5cDDsXE%2FO%2Fz3u7LRU8AXGiL1Srimud5hGbcRmphKdMj5gwB6qyZN4GdVTsj%2F5xHVo%2FD3nFlUHbIlHV%2Bs5D2PykkF8xS%2FdtRc%2Bj%2B&X-Amz-Signature=a94056c6d0308139dfff47a407c6869057ea8f9e70329585fd6f0513314840af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7OMEWF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT7pEoFqyQ%2FBErwqsJsspJmlK3Bdl%2Fr%2F73ZN4qG2EnLQIhAPG%2BOQ7N6pd10foUx3FQx2lQnyNYVSHJaYTueg%2Fy9pdrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwHjqUGfBUK8OfLux4q3AMM1GTBTCzg9weY1utY5udopM4ds1FQODgIinwC5TDohgv5cxSYaGZVR5w4HRSA91Y%2FYucrSYDtokrG%2F%2F%2ByFMeo4Q8%2FRZEs5t5zUigWUCF5173svdl8393rZkFbu4mQ4yVOFTvlbPwA4vEgNDL6NCYbtQ7oeDfr8esZ8rES9oi3bJplCquqV%2FyRO8jjoYskSBktCpoonk95ni1TBCWin%2F2AI2XccQ1AGIli7pUq8jztHH77j%2BpmIVSxr0pynk13zsj5AZyA2rVqIrt%2FXc9D%2Fap%2FQsN8bXVHMV9MQypMifnvk%2BnBiDjbJaLsHTJJxsErngj3DE%2BZ5%2FlkpIF2FZ3Y9TMgAjDM9eSb6T1jyikHtwvlLwMXctTTKPCrA3II4aONdKgLsPk9W0qRK%2BsdODsySjwN8tsv%2FnZT2Ex1cHooNC13P0PGK9XE4TGG2VwN%2F%2Bywf%2FOVtSoIiE9ghYdE6OYxGcvVJc9gNeJFElYIq2rs0u%2FOmfGRfnKL6QB4%2F4HQBJHswov4DsGK6mXALxg2On%2FomI0YhEqQ145K5BDeJlOTNDNFHFCJ6tBOET%2F3vGdlvTlhRt4mw%2BPMKJePzSgRuE5B%2BEKzrsFakDfD%2FQzkDNmYhie4N3V7mEsDlFSTT2%2BIzDDCuNK%2FBjqkAS6nikDhMyLDbo48B9gI03Lne89%2BzfaE5Q6nBGAYhcybZcntjAVj3mJcwdItNa4TfrOZYmgwBde95HinyDw59GgzhrMQGwdhaUA4hHCYFIaM1Kdq8wb1JvhFw5cDDsXE%2FO%2Fz3u7LRU8AXGiL1Srimud5hGbcRmphKdMj5gwB6qyZN4GdVTsj%2F5xHVo%2FD3nFlUHbIlHV%2Bs5D2PykkF8xS%2FdtRc%2Bj%2B&X-Amz-Signature=26fa38a3c01d146150bd4e3279affe77cba1d339c38bbb9b72977e6bbf75709b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7OMEWF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT7pEoFqyQ%2FBErwqsJsspJmlK3Bdl%2Fr%2F73ZN4qG2EnLQIhAPG%2BOQ7N6pd10foUx3FQx2lQnyNYVSHJaYTueg%2Fy9pdrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwHjqUGfBUK8OfLux4q3AMM1GTBTCzg9weY1utY5udopM4ds1FQODgIinwC5TDohgv5cxSYaGZVR5w4HRSA91Y%2FYucrSYDtokrG%2F%2F%2ByFMeo4Q8%2FRZEs5t5zUigWUCF5173svdl8393rZkFbu4mQ4yVOFTvlbPwA4vEgNDL6NCYbtQ7oeDfr8esZ8rES9oi3bJplCquqV%2FyRO8jjoYskSBktCpoonk95ni1TBCWin%2F2AI2XccQ1AGIli7pUq8jztHH77j%2BpmIVSxr0pynk13zsj5AZyA2rVqIrt%2FXc9D%2Fap%2FQsN8bXVHMV9MQypMifnvk%2BnBiDjbJaLsHTJJxsErngj3DE%2BZ5%2FlkpIF2FZ3Y9TMgAjDM9eSb6T1jyikHtwvlLwMXctTTKPCrA3II4aONdKgLsPk9W0qRK%2BsdODsySjwN8tsv%2FnZT2Ex1cHooNC13P0PGK9XE4TGG2VwN%2F%2Bywf%2FOVtSoIiE9ghYdE6OYxGcvVJc9gNeJFElYIq2rs0u%2FOmfGRfnKL6QB4%2F4HQBJHswov4DsGK6mXALxg2On%2FomI0YhEqQ145K5BDeJlOTNDNFHFCJ6tBOET%2F3vGdlvTlhRt4mw%2BPMKJePzSgRuE5B%2BEKzrsFakDfD%2FQzkDNmYhie4N3V7mEsDlFSTT2%2BIzDDCuNK%2FBjqkAS6nikDhMyLDbo48B9gI03Lne89%2BzfaE5Q6nBGAYhcybZcntjAVj3mJcwdItNa4TfrOZYmgwBde95HinyDw59GgzhrMQGwdhaUA4hHCYFIaM1Kdq8wb1JvhFw5cDDsXE%2FO%2Fz3u7LRU8AXGiL1Srimud5hGbcRmphKdMj5gwB6qyZN4GdVTsj%2F5xHVo%2FD3nFlUHbIlHV%2Bs5D2PykkF8xS%2FdtRc%2Bj%2B&X-Amz-Signature=99b7182acf00ae1f086a2852c401bbd13a690a26812271c6c8f07c8090588b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
