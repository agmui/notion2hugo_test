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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSJMNM6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99aHPjubB4a2V9dk2cAzoHm6bOBHyX2daZYfgZer9hAiASDGSztjkm4IQK0fl9xxvDhzlNc4h7RzvlZ2IKmXadlSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMyCDHN8ZaV4z4P3fFKtwDdDV9KI8Z9033Y4DskZo9R6Ed%2F6oMCVJlaeMgLgWvmxFtGkLDvhTkdRKiIkDRWZp4Dgmoh1iSs5VVLEuO38EGTb4yTb9FhdZMNAU5%2Ba79FiWTiNIJtComKt1oPCHLu9MSHzNmM%2BK6hOZvFwtlMT3y9Ck28BH0SaBIMo2zYHci14Zevt8X5NlwovydLiVm7I75%2BE22z7HWJS22b15J1oc8xvxBBj7Rx0ilnJ9Aii5vI1CZ1XJosQi2gi6xCNY1%2BQ6VBDUTWRnhWMOoxnTAu9AGXZiK0TpEfJxvW6C04z6zk%2BhD6IPGLm7HEeKKVF96KehpWcJMcZHx6rfRJH3Nr0HKB9Mnk9vGGWPqj6%2FYSdc5lPM1LXEOSBsa2Sxcnn9c%2F8Ay9STBTVgYBFAb8aTiCvcs1IAjJLyPZ8twHEQf9JAZnQIwgFJfFaGWsfOs92hhoxUHAFLBaX%2FEiW3SJc3TEs3YzHj65DUViNVDiTg5CTU7qtkeE7hZAxFRNmq4R7qW64b13LJyOms%2B%2F1gcRLLfGLX%2BYf24z2tOl39U2gJfd%2BwhXJ8outxJpGmo99bjx20xAdHPdeqv7zmnWoUUJkEi8JwbficbTit8VB4jHH4thIm7KhnP8mfhWlN%2FuP%2F9IfEw0Pf6wgY6pgEII1JWg18T%2BxkNgIQEXQvMMLaUQOCLgVfGnQa4ihSbHbxUNLJSVEKaFTEao2x0h4K6JEmrwN60RW2%2BQTZp2S6%2FEt8MItppQeJecBwihbVAtYDF0iAgt5xhCna5d68C9HellJOdgsS%2BCS2ULOyRn0e25y%2FrQ%2BZH7wnWJf8p3g5NfiNsocBzxqtP8Xw2c5iklpyfAH6JaucocTHw6Z0gC2JJ1M11dAkY&X-Amz-Signature=8592f6dd4bee060cf76b5a0422204294789a7b8b73b50c5020b32479c42f28ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSJMNM6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99aHPjubB4a2V9dk2cAzoHm6bOBHyX2daZYfgZer9hAiASDGSztjkm4IQK0fl9xxvDhzlNc4h7RzvlZ2IKmXadlSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMyCDHN8ZaV4z4P3fFKtwDdDV9KI8Z9033Y4DskZo9R6Ed%2F6oMCVJlaeMgLgWvmxFtGkLDvhTkdRKiIkDRWZp4Dgmoh1iSs5VVLEuO38EGTb4yTb9FhdZMNAU5%2Ba79FiWTiNIJtComKt1oPCHLu9MSHzNmM%2BK6hOZvFwtlMT3y9Ck28BH0SaBIMo2zYHci14Zevt8X5NlwovydLiVm7I75%2BE22z7HWJS22b15J1oc8xvxBBj7Rx0ilnJ9Aii5vI1CZ1XJosQi2gi6xCNY1%2BQ6VBDUTWRnhWMOoxnTAu9AGXZiK0TpEfJxvW6C04z6zk%2BhD6IPGLm7HEeKKVF96KehpWcJMcZHx6rfRJH3Nr0HKB9Mnk9vGGWPqj6%2FYSdc5lPM1LXEOSBsa2Sxcnn9c%2F8Ay9STBTVgYBFAb8aTiCvcs1IAjJLyPZ8twHEQf9JAZnQIwgFJfFaGWsfOs92hhoxUHAFLBaX%2FEiW3SJc3TEs3YzHj65DUViNVDiTg5CTU7qtkeE7hZAxFRNmq4R7qW64b13LJyOms%2B%2F1gcRLLfGLX%2BYf24z2tOl39U2gJfd%2BwhXJ8outxJpGmo99bjx20xAdHPdeqv7zmnWoUUJkEi8JwbficbTit8VB4jHH4thIm7KhnP8mfhWlN%2FuP%2F9IfEw0Pf6wgY6pgEII1JWg18T%2BxkNgIQEXQvMMLaUQOCLgVfGnQa4ihSbHbxUNLJSVEKaFTEao2x0h4K6JEmrwN60RW2%2BQTZp2S6%2FEt8MItppQeJecBwihbVAtYDF0iAgt5xhCna5d68C9HellJOdgsS%2BCS2ULOyRn0e25y%2FrQ%2BZH7wnWJf8p3g5NfiNsocBzxqtP8Xw2c5iklpyfAH6JaucocTHw6Z0gC2JJ1M11dAkY&X-Amz-Signature=d5d22cacd693c756a1590ea31d43cc18abe29f4ec8a0f6a66b4fa928a21180c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSJMNM6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF99aHPjubB4a2V9dk2cAzoHm6bOBHyX2daZYfgZer9hAiASDGSztjkm4IQK0fl9xxvDhzlNc4h7RzvlZ2IKmXadlSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMyCDHN8ZaV4z4P3fFKtwDdDV9KI8Z9033Y4DskZo9R6Ed%2F6oMCVJlaeMgLgWvmxFtGkLDvhTkdRKiIkDRWZp4Dgmoh1iSs5VVLEuO38EGTb4yTb9FhdZMNAU5%2Ba79FiWTiNIJtComKt1oPCHLu9MSHzNmM%2BK6hOZvFwtlMT3y9Ck28BH0SaBIMo2zYHci14Zevt8X5NlwovydLiVm7I75%2BE22z7HWJS22b15J1oc8xvxBBj7Rx0ilnJ9Aii5vI1CZ1XJosQi2gi6xCNY1%2BQ6VBDUTWRnhWMOoxnTAu9AGXZiK0TpEfJxvW6C04z6zk%2BhD6IPGLm7HEeKKVF96KehpWcJMcZHx6rfRJH3Nr0HKB9Mnk9vGGWPqj6%2FYSdc5lPM1LXEOSBsa2Sxcnn9c%2F8Ay9STBTVgYBFAb8aTiCvcs1IAjJLyPZ8twHEQf9JAZnQIwgFJfFaGWsfOs92hhoxUHAFLBaX%2FEiW3SJc3TEs3YzHj65DUViNVDiTg5CTU7qtkeE7hZAxFRNmq4R7qW64b13LJyOms%2B%2F1gcRLLfGLX%2BYf24z2tOl39U2gJfd%2BwhXJ8outxJpGmo99bjx20xAdHPdeqv7zmnWoUUJkEi8JwbficbTit8VB4jHH4thIm7KhnP8mfhWlN%2FuP%2F9IfEw0Pf6wgY6pgEII1JWg18T%2BxkNgIQEXQvMMLaUQOCLgVfGnQa4ihSbHbxUNLJSVEKaFTEao2x0h4K6JEmrwN60RW2%2BQTZp2S6%2FEt8MItppQeJecBwihbVAtYDF0iAgt5xhCna5d68C9HellJOdgsS%2BCS2ULOyRn0e25y%2FrQ%2BZH7wnWJf8p3g5NfiNsocBzxqtP8Xw2c5iklpyfAH6JaucocTHw6Z0gC2JJ1M11dAkY&X-Amz-Signature=50fa2e7d373f77fc333a821d5187c75076ad2f5197450c8a9f07e3e1338f8286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
