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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMB7HP2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBd47HFqITOWQuYegfOFwNqWMu%2BSOZUDYvg%2By5gMGrzOAiARXOaSRvQRKdx%2FpacFTAn233jMy579s6PuejMDb8jZbyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzILYsYy20lTwW%2BiQKtwDQcrI2DiSnQdrodnWJIVV5iSsKa%2BKTEtFRbpWhhTNGkasA73VfsZ3pLxGQtukFaEyTr87qp1trwPmtc4Th8tmM3d6L%2BmwFAmytZPH8MpB2AiB2UMJ6ltaG77RqVO51zMWfNQJ8h2QfizaWqIKWU0XC3pzXFzDfMLMz747fthKZN8evmviqh0vLjkDpR21LcnEhPm0CCtnDssc53%2F%2FiCidRrFHNiEpLZOUGd8SxSDcvMJXg%2BAdvGYPMAKB5jwTu3cy6uhVxwBFExsz1uq9sNxUjUzfpSsknmeZVwYksK6LUQxJ9mC9RIGumXpzSJKDrtMqWNqNERrDA62AClnGIMfrKhl%2BPeAxEbIIywZu7zt7c4PHU0TU14cN5OSBbjOwJyEqccgEDVQkuGUF%2Frl%2F7dyjVxxqxHLBEoulZp1nVnRkvwOnh%2BYzaT0SN6Sd4%2B6UcRKw%2B873YUU7UDEurQeQNh%2BHzPbSq5t8%2FEOojTqZ8Sa2uZilLfzHinSdgwkKoPwCw%2BM66IBmaECs29qlE%2FHkEAllbaWL1l%2BAxBPPMQNQQfDeChveJBz8GXB2zg6efRFKjUW8GuXbGSOBingsZCUnSRMVli3dEGPJXZJeGYvB9Fv15bSeSVVcmrdvCsMtWM8w%2F%2FL%2BvgY6pgEpml4SYTTFGO4OSd1AGJz95PtmytQCuyNJVKe7IyyB8Ryvsuvzb%2BP%2FuTyoMi%2BiR0pUYaCQYWZMvuEf6cFm1mSLNgcPGuPQ6Mkw0r6Ra8UnDGF1XKU1Hp5Epra4a%2F34ht0Nq8jRqNfB9DGk73O9rF9XHfwD1Q4vRNqC9L97n9c36%2BwqAFwT%2FGC%2FyoFiPGZmBF8osdANI8UpBpJ8k9gY1cGkAdVH%2BPhI&X-Amz-Signature=79a62775ea022258d2dea8809ae2397ebb18b6006174e1b46d3e20376ef1676f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMB7HP2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBd47HFqITOWQuYegfOFwNqWMu%2BSOZUDYvg%2By5gMGrzOAiARXOaSRvQRKdx%2FpacFTAn233jMy579s6PuejMDb8jZbyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzILYsYy20lTwW%2BiQKtwDQcrI2DiSnQdrodnWJIVV5iSsKa%2BKTEtFRbpWhhTNGkasA73VfsZ3pLxGQtukFaEyTr87qp1trwPmtc4Th8tmM3d6L%2BmwFAmytZPH8MpB2AiB2UMJ6ltaG77RqVO51zMWfNQJ8h2QfizaWqIKWU0XC3pzXFzDfMLMz747fthKZN8evmviqh0vLjkDpR21LcnEhPm0CCtnDssc53%2F%2FiCidRrFHNiEpLZOUGd8SxSDcvMJXg%2BAdvGYPMAKB5jwTu3cy6uhVxwBFExsz1uq9sNxUjUzfpSsknmeZVwYksK6LUQxJ9mC9RIGumXpzSJKDrtMqWNqNERrDA62AClnGIMfrKhl%2BPeAxEbIIywZu7zt7c4PHU0TU14cN5OSBbjOwJyEqccgEDVQkuGUF%2Frl%2F7dyjVxxqxHLBEoulZp1nVnRkvwOnh%2BYzaT0SN6Sd4%2B6UcRKw%2B873YUU7UDEurQeQNh%2BHzPbSq5t8%2FEOojTqZ8Sa2uZilLfzHinSdgwkKoPwCw%2BM66IBmaECs29qlE%2FHkEAllbaWL1l%2BAxBPPMQNQQfDeChveJBz8GXB2zg6efRFKjUW8GuXbGSOBingsZCUnSRMVli3dEGPJXZJeGYvB9Fv15bSeSVVcmrdvCsMtWM8w%2F%2FL%2BvgY6pgEpml4SYTTFGO4OSd1AGJz95PtmytQCuyNJVKe7IyyB8Ryvsuvzb%2BP%2FuTyoMi%2BiR0pUYaCQYWZMvuEf6cFm1mSLNgcPGuPQ6Mkw0r6Ra8UnDGF1XKU1Hp5Epra4a%2F34ht0Nq8jRqNfB9DGk73O9rF9XHfwD1Q4vRNqC9L97n9c36%2BwqAFwT%2FGC%2FyoFiPGZmBF8osdANI8UpBpJ8k9gY1cGkAdVH%2BPhI&X-Amz-Signature=fe00154b8791d898e48be3edcb9dcce1f10c57b7679fdf079c6799089338776d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAMB7HP2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBd47HFqITOWQuYegfOFwNqWMu%2BSOZUDYvg%2By5gMGrzOAiARXOaSRvQRKdx%2FpacFTAn233jMy579s6PuejMDb8jZbyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzILYsYy20lTwW%2BiQKtwDQcrI2DiSnQdrodnWJIVV5iSsKa%2BKTEtFRbpWhhTNGkasA73VfsZ3pLxGQtukFaEyTr87qp1trwPmtc4Th8tmM3d6L%2BmwFAmytZPH8MpB2AiB2UMJ6ltaG77RqVO51zMWfNQJ8h2QfizaWqIKWU0XC3pzXFzDfMLMz747fthKZN8evmviqh0vLjkDpR21LcnEhPm0CCtnDssc53%2F%2FiCidRrFHNiEpLZOUGd8SxSDcvMJXg%2BAdvGYPMAKB5jwTu3cy6uhVxwBFExsz1uq9sNxUjUzfpSsknmeZVwYksK6LUQxJ9mC9RIGumXpzSJKDrtMqWNqNERrDA62AClnGIMfrKhl%2BPeAxEbIIywZu7zt7c4PHU0TU14cN5OSBbjOwJyEqccgEDVQkuGUF%2Frl%2F7dyjVxxqxHLBEoulZp1nVnRkvwOnh%2BYzaT0SN6Sd4%2B6UcRKw%2B873YUU7UDEurQeQNh%2BHzPbSq5t8%2FEOojTqZ8Sa2uZilLfzHinSdgwkKoPwCw%2BM66IBmaECs29qlE%2FHkEAllbaWL1l%2BAxBPPMQNQQfDeChveJBz8GXB2zg6efRFKjUW8GuXbGSOBingsZCUnSRMVli3dEGPJXZJeGYvB9Fv15bSeSVVcmrdvCsMtWM8w%2F%2FL%2BvgY6pgEpml4SYTTFGO4OSd1AGJz95PtmytQCuyNJVKe7IyyB8Ryvsuvzb%2BP%2FuTyoMi%2BiR0pUYaCQYWZMvuEf6cFm1mSLNgcPGuPQ6Mkw0r6Ra8UnDGF1XKU1Hp5Epra4a%2F34ht0Nq8jRqNfB9DGk73O9rF9XHfwD1Q4vRNqC9L97n9c36%2BwqAFwT%2FGC%2FyoFiPGZmBF8osdANI8UpBpJ8k9gY1cGkAdVH%2BPhI&X-Amz-Signature=216e00b11478189ec412d73af82268d69ca431069484a6fd7ae54a9df1b281fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
