---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UUJEPH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHIFDgY8eiRArgrIAl3qFMM79eQUG%2FTXbJUfs%2BzBlEPGAiEAqWqYlgGVoHhYy5lOwTsO6KCQn%2FGYvNcw%2BCWwlrFFuUwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDu5F5fSWipMgt%2FUMircA6HxzuTNJjw6cxUTegsJ612dF1MklmPIuWoxFt0tQdsuWzWRUfhgssx0ccykq0yzRLwDwFNikeUhgh%2Frb3E4yw5MlLS6T9OZzrMmay6Edh%2FnfT4MOMYAuNz5iR2pv7VKukdcFAJIYmcIZr5fVo%2B4WKecuFRJ4gNNXRhWjALzNnOqv3ym4o3F21r65lZaRRI08CyVNgQsV1qbwR8UT7WTs8t%2BdWG09Xe%2FqRS0xGZ2Lp6V1ug1QU43lSfhb5KX%2F0B60HnSGc5eoxDASNktpzRkH38g9%2BDNHThyw1jLkraToDrFuB3scq2VZ1dNQL0cCf1nHsLWU8zjFrKlPFb5y8QiN4YLZh%2F1AJaYPQRbKdF4AK2aLKaX%2F1I%2Bkfg2STBAL6waIYdIrvGhlwDA25c5lLn1PIiw1w6QJ6Z9XyfYuw9Zu3bZPMq%2FrhrJgwQ%2FSrpEfAeZQmqP%2F%2Bq%2BEnJK7mGqnZuNXzfrIdsFvK5ehOFL0F%2BKvLQjbI2uYHCUefI1mN8m39YFT7X5Ugdy%2BeIu%2FiOcpKO7sftQ0Mra6Dw90CnOe2bC2GCGL6HuuyMhN%2B37wnpwJBNFXUOk9oisrwo2APA7oX0kPtqJq%2BtWloUdlAv%2Fg56hNVBNRw77IgChcAPXRXfiMIOwtsoGOqUB26%2F3Ebt0KMMN3jOQxKnxhwkb3eOqOZf3AdmmoZV78vffsc%2FdwPBry9ROPhJXFGzdx8A6eCkv0n5te3E8XmB9A8c6MUgnzuqrA6EU2UED8vXU%2FcF2BE94VI%2B7gyw7S3RvxewExNnzzLOV9bXFxdj73ulpl4p4bu8Py7oMVYSqYoMnT468bAI8E9on1lrDpGcfD9CLt4%2FXYX%2Fb5mGK0Gg7w8UP1ogV&X-Amz-Signature=b79ad7c463dc2be30f7be2f6dd4e73bd788889ae020c3df181cde9ae64b8ec02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UUJEPH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHIFDgY8eiRArgrIAl3qFMM79eQUG%2FTXbJUfs%2BzBlEPGAiEAqWqYlgGVoHhYy5lOwTsO6KCQn%2FGYvNcw%2BCWwlrFFuUwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDu5F5fSWipMgt%2FUMircA6HxzuTNJjw6cxUTegsJ612dF1MklmPIuWoxFt0tQdsuWzWRUfhgssx0ccykq0yzRLwDwFNikeUhgh%2Frb3E4yw5MlLS6T9OZzrMmay6Edh%2FnfT4MOMYAuNz5iR2pv7VKukdcFAJIYmcIZr5fVo%2B4WKecuFRJ4gNNXRhWjALzNnOqv3ym4o3F21r65lZaRRI08CyVNgQsV1qbwR8UT7WTs8t%2BdWG09Xe%2FqRS0xGZ2Lp6V1ug1QU43lSfhb5KX%2F0B60HnSGc5eoxDASNktpzRkH38g9%2BDNHThyw1jLkraToDrFuB3scq2VZ1dNQL0cCf1nHsLWU8zjFrKlPFb5y8QiN4YLZh%2F1AJaYPQRbKdF4AK2aLKaX%2F1I%2Bkfg2STBAL6waIYdIrvGhlwDA25c5lLn1PIiw1w6QJ6Z9XyfYuw9Zu3bZPMq%2FrhrJgwQ%2FSrpEfAeZQmqP%2F%2Bq%2BEnJK7mGqnZuNXzfrIdsFvK5ehOFL0F%2BKvLQjbI2uYHCUefI1mN8m39YFT7X5Ugdy%2BeIu%2FiOcpKO7sftQ0Mra6Dw90CnOe2bC2GCGL6HuuyMhN%2B37wnpwJBNFXUOk9oisrwo2APA7oX0kPtqJq%2BtWloUdlAv%2Fg56hNVBNRw77IgChcAPXRXfiMIOwtsoGOqUB26%2F3Ebt0KMMN3jOQxKnxhwkb3eOqOZf3AdmmoZV78vffsc%2FdwPBry9ROPhJXFGzdx8A6eCkv0n5te3E8XmB9A8c6MUgnzuqrA6EU2UED8vXU%2FcF2BE94VI%2B7gyw7S3RvxewExNnzzLOV9bXFxdj73ulpl4p4bu8Py7oMVYSqYoMnT468bAI8E9on1lrDpGcfD9CLt4%2FXYX%2Fb5mGK0Gg7w8UP1ogV&X-Amz-Signature=b7010826792a0cd70b8593e9879d8d6c7f1516d3cedfc53cdb4bc9e567cbd6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UUJEPH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHIFDgY8eiRArgrIAl3qFMM79eQUG%2FTXbJUfs%2BzBlEPGAiEAqWqYlgGVoHhYy5lOwTsO6KCQn%2FGYvNcw%2BCWwlrFFuUwq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDu5F5fSWipMgt%2FUMircA6HxzuTNJjw6cxUTegsJ612dF1MklmPIuWoxFt0tQdsuWzWRUfhgssx0ccykq0yzRLwDwFNikeUhgh%2Frb3E4yw5MlLS6T9OZzrMmay6Edh%2FnfT4MOMYAuNz5iR2pv7VKukdcFAJIYmcIZr5fVo%2B4WKecuFRJ4gNNXRhWjALzNnOqv3ym4o3F21r65lZaRRI08CyVNgQsV1qbwR8UT7WTs8t%2BdWG09Xe%2FqRS0xGZ2Lp6V1ug1QU43lSfhb5KX%2F0B60HnSGc5eoxDASNktpzRkH38g9%2BDNHThyw1jLkraToDrFuB3scq2VZ1dNQL0cCf1nHsLWU8zjFrKlPFb5y8QiN4YLZh%2F1AJaYPQRbKdF4AK2aLKaX%2F1I%2Bkfg2STBAL6waIYdIrvGhlwDA25c5lLn1PIiw1w6QJ6Z9XyfYuw9Zu3bZPMq%2FrhrJgwQ%2FSrpEfAeZQmqP%2F%2Bq%2BEnJK7mGqnZuNXzfrIdsFvK5ehOFL0F%2BKvLQjbI2uYHCUefI1mN8m39YFT7X5Ugdy%2BeIu%2FiOcpKO7sftQ0Mra6Dw90CnOe2bC2GCGL6HuuyMhN%2B37wnpwJBNFXUOk9oisrwo2APA7oX0kPtqJq%2BtWloUdlAv%2Fg56hNVBNRw77IgChcAPXRXfiMIOwtsoGOqUB26%2F3Ebt0KMMN3jOQxKnxhwkb3eOqOZf3AdmmoZV78vffsc%2FdwPBry9ROPhJXFGzdx8A6eCkv0n5te3E8XmB9A8c6MUgnzuqrA6EU2UED8vXU%2FcF2BE94VI%2B7gyw7S3RvxewExNnzzLOV9bXFxdj73ulpl4p4bu8Py7oMVYSqYoMnT468bAI8E9on1lrDpGcfD9CLt4%2FXYX%2Fb5mGK0Gg7w8UP1ogV&X-Amz-Signature=92cbf056e46316813d3b6e36e68117fa9d9ede9be17d38b863834e4e512006b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
