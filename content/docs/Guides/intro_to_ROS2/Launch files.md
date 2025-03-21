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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KYF2RB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDZrzlNhJKDz5DwMN5gk0o57lDetriPfy6yRVSkfcCPZgIhANnNTaah64FaQHsmqIhP3XZYLxZJtCQ3U7jzBQrnZ0lfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFrN9uj%2BCLOpdrBLYq3AOei61ajNdKFCTAK95Cl823vyRycoIOWxToMN8ro21NLCxiDR6ryyw7aw8qwCVrp2NU2puFXxdnHauNU14RNfHNORJflXWoQMuZvNpvaEKzywGfWD4M7HFmZAjAFPGDYoykyad6ngYrkD1C235GwJ7owthbZkAEGifE3zBpooPQaf8A7xSP2aRQ9sgBrofMvM1%2FYcnAVIj18D9ehJGC9OETMCbGZawXPcO1Br%2FMduOJWdtQWnMQkPFzZyWCjtBj8zRqbKzGCAh4b8EWVbmGjB7If41p94jnRA8elPHsQLWwBuWaFdpiWlpLL3tcZkVMqaQUgb%2BN5l7WfPIi0O%2BIXibbwTKGZ2hlFC51d6pCsSg2qV7A%2FywZPIKPrzfFgrNg5FO9AIFyc2zIdy3H7vGBwUdvHaSpvEzvwfep7g3yiwX8Mr1n9vGfXrb0Of%2BZogbZVFImhSQ0pD3IbBxW4kia7DV1sUvlslsR3bdd%2BtqsBHb9vJSea9L8aYsGK167L%2Bgz8WBqTi5hzJdKsvhjH1AzfzGYmM%2F%2Fn8CSjbeWTlHl7VySvq0H8gkPq8F%2B0IhKR%2Bj%2FtCn5QWpclDm%2BIDQdDwQiR8j04NiULP8FepTe4z0mvavS%2FQuJ6ln5fVDyX3g0WDDBuva%2BBjqkAdO04ZUi98roY4nMxt7ZOR2xzPju9GEnkaT%2FBkS8puQtEnROjh1ec4lW5%2FPgYr9GOjOvOBPLhZieG77jkzNcdL3LVzMIR%2BbqGokj0yajMS%2FmebtyK%2BT7Dzqi%2FZPHh6Dp39efjo3bBunJwU4rR5%2FzXr3UjIi7eMQF0N%2Fhu71oMDp1ZDW7ga7Aq8U%2B%2BCO0GyqMNbkRxoN3FQ6gvGFPTDVEAGEIhlbP&X-Amz-Signature=63bdb0b0c86cb9c221abffb5ac8a3e86506f0e881567d6f43718ccd5515d5ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KYF2RB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDZrzlNhJKDz5DwMN5gk0o57lDetriPfy6yRVSkfcCPZgIhANnNTaah64FaQHsmqIhP3XZYLxZJtCQ3U7jzBQrnZ0lfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFrN9uj%2BCLOpdrBLYq3AOei61ajNdKFCTAK95Cl823vyRycoIOWxToMN8ro21NLCxiDR6ryyw7aw8qwCVrp2NU2puFXxdnHauNU14RNfHNORJflXWoQMuZvNpvaEKzywGfWD4M7HFmZAjAFPGDYoykyad6ngYrkD1C235GwJ7owthbZkAEGifE3zBpooPQaf8A7xSP2aRQ9sgBrofMvM1%2FYcnAVIj18D9ehJGC9OETMCbGZawXPcO1Br%2FMduOJWdtQWnMQkPFzZyWCjtBj8zRqbKzGCAh4b8EWVbmGjB7If41p94jnRA8elPHsQLWwBuWaFdpiWlpLL3tcZkVMqaQUgb%2BN5l7WfPIi0O%2BIXibbwTKGZ2hlFC51d6pCsSg2qV7A%2FywZPIKPrzfFgrNg5FO9AIFyc2zIdy3H7vGBwUdvHaSpvEzvwfep7g3yiwX8Mr1n9vGfXrb0Of%2BZogbZVFImhSQ0pD3IbBxW4kia7DV1sUvlslsR3bdd%2BtqsBHb9vJSea9L8aYsGK167L%2Bgz8WBqTi5hzJdKsvhjH1AzfzGYmM%2F%2Fn8CSjbeWTlHl7VySvq0H8gkPq8F%2B0IhKR%2Bj%2FtCn5QWpclDm%2BIDQdDwQiR8j04NiULP8FepTe4z0mvavS%2FQuJ6ln5fVDyX3g0WDDBuva%2BBjqkAdO04ZUi98roY4nMxt7ZOR2xzPju9GEnkaT%2FBkS8puQtEnROjh1ec4lW5%2FPgYr9GOjOvOBPLhZieG77jkzNcdL3LVzMIR%2BbqGokj0yajMS%2FmebtyK%2BT7Dzqi%2FZPHh6Dp39efjo3bBunJwU4rR5%2FzXr3UjIi7eMQF0N%2Fhu71oMDp1ZDW7ga7Aq8U%2B%2BCO0GyqMNbkRxoN3FQ6gvGFPTDVEAGEIhlbP&X-Amz-Signature=18ad9ffc5547e7d78ed51cc03c5ecf24e69d2cc3b363b8d8ea13a1be36ffa846&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KYF2RB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDZrzlNhJKDz5DwMN5gk0o57lDetriPfy6yRVSkfcCPZgIhANnNTaah64FaQHsmqIhP3XZYLxZJtCQ3U7jzBQrnZ0lfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFrN9uj%2BCLOpdrBLYq3AOei61ajNdKFCTAK95Cl823vyRycoIOWxToMN8ro21NLCxiDR6ryyw7aw8qwCVrp2NU2puFXxdnHauNU14RNfHNORJflXWoQMuZvNpvaEKzywGfWD4M7HFmZAjAFPGDYoykyad6ngYrkD1C235GwJ7owthbZkAEGifE3zBpooPQaf8A7xSP2aRQ9sgBrofMvM1%2FYcnAVIj18D9ehJGC9OETMCbGZawXPcO1Br%2FMduOJWdtQWnMQkPFzZyWCjtBj8zRqbKzGCAh4b8EWVbmGjB7If41p94jnRA8elPHsQLWwBuWaFdpiWlpLL3tcZkVMqaQUgb%2BN5l7WfPIi0O%2BIXibbwTKGZ2hlFC51d6pCsSg2qV7A%2FywZPIKPrzfFgrNg5FO9AIFyc2zIdy3H7vGBwUdvHaSpvEzvwfep7g3yiwX8Mr1n9vGfXrb0Of%2BZogbZVFImhSQ0pD3IbBxW4kia7DV1sUvlslsR3bdd%2BtqsBHb9vJSea9L8aYsGK167L%2Bgz8WBqTi5hzJdKsvhjH1AzfzGYmM%2F%2Fn8CSjbeWTlHl7VySvq0H8gkPq8F%2B0IhKR%2Bj%2FtCn5QWpclDm%2BIDQdDwQiR8j04NiULP8FepTe4z0mvavS%2FQuJ6ln5fVDyX3g0WDDBuva%2BBjqkAdO04ZUi98roY4nMxt7ZOR2xzPju9GEnkaT%2FBkS8puQtEnROjh1ec4lW5%2FPgYr9GOjOvOBPLhZieG77jkzNcdL3LVzMIR%2BbqGokj0yajMS%2FmebtyK%2BT7Dzqi%2FZPHh6Dp39efjo3bBunJwU4rR5%2FzXr3UjIi7eMQF0N%2Fhu71oMDp1ZDW7ga7Aq8U%2B%2BCO0GyqMNbkRxoN3FQ6gvGFPTDVEAGEIhlbP&X-Amz-Signature=335aa01762a651efb8f3d683c2f22c81ea702477474fa4b3abfa0961aa0ff7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
