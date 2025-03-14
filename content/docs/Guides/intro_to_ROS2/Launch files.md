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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWPVZSR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu8tUx6ZOlBd4lDou2XpZ6Bt%2F7esniwKpXvG0AuoUsSQIgXOq%2FgjOMGj4TZUMm%2FWaWC7NPEvglU0PRZWBclQRHO9kqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMS29fGAQKx1ZgwcCrcA3rZ5I7zd%2FZEeTWwCIer%2FAxFun1%2BadXZDSFYobYNFrNoNq1joqxj0kzCNYnvWVYMzkQMufpM9Gm6iYiA2t2vOxPCGABN7%2BfEGTr6yNU5sXTPTledIvMgi%2Bo5IhdB21ES788IRnagdNNj6JAcTENTFhCAyGIWE9YcX9c%2FO5XZFC3A%2BoSauGrOhv0IlB47SlUvNIjfISWrXgmIvBFZIjEEVNiC5Ak5pbfH2D%2FWgVV7OaKzTxPXFYVLqupRu7Q2SkLXsqTP9jaYWmuCoV8QZ4FxrVT5LPlAiNXbQtENs%2FkGTqckD%2BlnjOTCkGFBHB9ApKx8cjRQCMewfMEMlh%2BydQpsKDF2Ap88ArpZzbeu1vJnnUp3IWfEN%2FD%2BQq8XVixFi76wf2k50mxdSFu9NPSsueY6kL2yFXPvJRj4i9k%2Bt3eVwEnVY83Dc403s51CpmOd4lzEsPkVflc1Nt7FerZeT%2FkQz6DFxqGemojivf7GWDh8nWwE47Q6xHuT%2F53TqhTdNUVUGLxOfQXmgOlpGuPCSMsKWJRGlpohqorJrdy7P%2FCY9IGhNWQoLn%2FfHS7DzJOFsTWrnFMluJrguRpbzLXxWVz53x3KwVAyxgVLXmZ%2BgFMjfXS%2FZB79sNTQ8bPCF8%2BgMIWT0r4GOqUBb12cG3bIdRvlLtvm5UUKr78B8hkc2MdXzr%2FQw%2BfbWAzQPR6udNM0Jh%2BveZWir%2FWMe8%2FsmSdzGiv7TL%2FaxKL5ocL8n1WFVZc2WHrqVvGHatxNHjR%2BdTU0dkM0PH5s0Sid1iVLJfKCr%2Fx9%2FhcuuWxqhbfIwhBpjKTWirh%2F6N%2BDnxrb6korzXqy5G1aKPuSHrywbqgZN3PWzcdIv7CKYkGaxn8Vp9H5&X-Amz-Signature=55869d86185a12ef89d981415b92190a240a2361d58d7b94c6cd48ed82c9bb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWPVZSR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu8tUx6ZOlBd4lDou2XpZ6Bt%2F7esniwKpXvG0AuoUsSQIgXOq%2FgjOMGj4TZUMm%2FWaWC7NPEvglU0PRZWBclQRHO9kqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMS29fGAQKx1ZgwcCrcA3rZ5I7zd%2FZEeTWwCIer%2FAxFun1%2BadXZDSFYobYNFrNoNq1joqxj0kzCNYnvWVYMzkQMufpM9Gm6iYiA2t2vOxPCGABN7%2BfEGTr6yNU5sXTPTledIvMgi%2Bo5IhdB21ES788IRnagdNNj6JAcTENTFhCAyGIWE9YcX9c%2FO5XZFC3A%2BoSauGrOhv0IlB47SlUvNIjfISWrXgmIvBFZIjEEVNiC5Ak5pbfH2D%2FWgVV7OaKzTxPXFYVLqupRu7Q2SkLXsqTP9jaYWmuCoV8QZ4FxrVT5LPlAiNXbQtENs%2FkGTqckD%2BlnjOTCkGFBHB9ApKx8cjRQCMewfMEMlh%2BydQpsKDF2Ap88ArpZzbeu1vJnnUp3IWfEN%2FD%2BQq8XVixFi76wf2k50mxdSFu9NPSsueY6kL2yFXPvJRj4i9k%2Bt3eVwEnVY83Dc403s51CpmOd4lzEsPkVflc1Nt7FerZeT%2FkQz6DFxqGemojivf7GWDh8nWwE47Q6xHuT%2F53TqhTdNUVUGLxOfQXmgOlpGuPCSMsKWJRGlpohqorJrdy7P%2FCY9IGhNWQoLn%2FfHS7DzJOFsTWrnFMluJrguRpbzLXxWVz53x3KwVAyxgVLXmZ%2BgFMjfXS%2FZB79sNTQ8bPCF8%2BgMIWT0r4GOqUBb12cG3bIdRvlLtvm5UUKr78B8hkc2MdXzr%2FQw%2BfbWAzQPR6udNM0Jh%2BveZWir%2FWMe8%2FsmSdzGiv7TL%2FaxKL5ocL8n1WFVZc2WHrqVvGHatxNHjR%2BdTU0dkM0PH5s0Sid1iVLJfKCr%2Fx9%2FhcuuWxqhbfIwhBpjKTWirh%2F6N%2BDnxrb6korzXqy5G1aKPuSHrywbqgZN3PWzcdIv7CKYkGaxn8Vp9H5&X-Amz-Signature=7d393c1a4a9567bde28a2176a2da6228afa35d5900b5bdcd2276622a248071c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDWPVZSR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu8tUx6ZOlBd4lDou2XpZ6Bt%2F7esniwKpXvG0AuoUsSQIgXOq%2FgjOMGj4TZUMm%2FWaWC7NPEvglU0PRZWBclQRHO9kqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMS29fGAQKx1ZgwcCrcA3rZ5I7zd%2FZEeTWwCIer%2FAxFun1%2BadXZDSFYobYNFrNoNq1joqxj0kzCNYnvWVYMzkQMufpM9Gm6iYiA2t2vOxPCGABN7%2BfEGTr6yNU5sXTPTledIvMgi%2Bo5IhdB21ES788IRnagdNNj6JAcTENTFhCAyGIWE9YcX9c%2FO5XZFC3A%2BoSauGrOhv0IlB47SlUvNIjfISWrXgmIvBFZIjEEVNiC5Ak5pbfH2D%2FWgVV7OaKzTxPXFYVLqupRu7Q2SkLXsqTP9jaYWmuCoV8QZ4FxrVT5LPlAiNXbQtENs%2FkGTqckD%2BlnjOTCkGFBHB9ApKx8cjRQCMewfMEMlh%2BydQpsKDF2Ap88ArpZzbeu1vJnnUp3IWfEN%2FD%2BQq8XVixFi76wf2k50mxdSFu9NPSsueY6kL2yFXPvJRj4i9k%2Bt3eVwEnVY83Dc403s51CpmOd4lzEsPkVflc1Nt7FerZeT%2FkQz6DFxqGemojivf7GWDh8nWwE47Q6xHuT%2F53TqhTdNUVUGLxOfQXmgOlpGuPCSMsKWJRGlpohqorJrdy7P%2FCY9IGhNWQoLn%2FfHS7DzJOFsTWrnFMluJrguRpbzLXxWVz53x3KwVAyxgVLXmZ%2BgFMjfXS%2FZB79sNTQ8bPCF8%2BgMIWT0r4GOqUBb12cG3bIdRvlLtvm5UUKr78B8hkc2MdXzr%2FQw%2BfbWAzQPR6udNM0Jh%2BveZWir%2FWMe8%2FsmSdzGiv7TL%2FaxKL5ocL8n1WFVZc2WHrqVvGHatxNHjR%2BdTU0dkM0PH5s0Sid1iVLJfKCr%2Fx9%2FhcuuWxqhbfIwhBpjKTWirh%2F6N%2BDnxrb6korzXqy5G1aKPuSHrywbqgZN3PWzcdIv7CKYkGaxn8Vp9H5&X-Amz-Signature=ffe3637fb93629fdd3f56f3e7f581d57a60b9c79aaae074a6183a6980a3d54cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
