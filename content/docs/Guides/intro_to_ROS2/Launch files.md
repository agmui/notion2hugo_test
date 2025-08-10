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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN4NXRJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnntPacgMCSjANq%2BR90AwbNmkVn7B6B9SYjffOXl3n6AiApgL2Yy6DMADXSk9x0Q7Gu1LjnEtJnPM3KBhnIUsaveSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YDrEM6gmeUEw514KtwDqkvYe5nMzXAsHwBl3Ib%2BrBYwluUZixr7UpZsCAuzaHvkLpZr0%2B%2B9ehV2aT11NX36K3ykrTOT%2FQs3Om%2FlyxIhdaHiaS2i1FQir23GFzpoealB5qGC%2BR%2Bgq1r9nAwd7F4bgNYEMVWx5EL6K4lpoZksTp1AxF9Zn%2FpgqBx7a91ZFmElFDcYTp%2BP1zbef7RAm4fCXY9zT7hbK1Bzjd%2BDdNPv1WDvhCVxBJWGT%2B%2Fh6z8iDsv2YNGLdjd8orEUl3AeoKg5CQ5WojoUfXJo%2BDlc5DvUWIJ9L8V0OtgwGL7%2BF5h%2BC%2FGqCv07GR7PT3WFKLtLNCaio%2BHbTeioEbGWTV8t1XpeqNpC0ipv1GpmsLqeMCxFgvud4ASTPEdB5FhfNb6qHea%2FI1YD3bFGp8fITYeiJDuCRuXfRZgY3%2B%2FfgwFBq1Kc%2F2Cd%2FKo8C6gF9Kt8r1mlEZYDpdWm3oLfI6cPu3xey5Jsv8opi6mtDhCYbJaQjlihly3cE6cMpipHbbrpfs9%2BXmarvEOBJ5nDwtme%2FOUUQYhbOJ69mAd5agkbjvhNjXcvHF9%2FcURLcOKtjEfmksmFieg7eqP6reCzSL2tTkKzYK1ZaMxW8FyYCxTp2BlQjmab01s2nnxUGFPXrx4FXG4w1LLfxAY6pgGzRKa0gWr5DckkmpqB9m3Oe5GOFEkeEdpRqIbr9wpBaggm4SW7M36Eoegh6MirmE7%2FP%2BJH5Z138cg8NtnTsWNcsZm3VzZm%2BuoZXsF5jbALMH8FsLGLw4B4O3oSGeaEjyNQTu5CZJlyjzBLp6HUF6OdU42u3m%2FsLGl%2B%2BhSwPh0t73g1yPggyHnlEXRFndchClQxv8656qiRyZ7v9hnexD%2FnmZl4eqg9&X-Amz-Signature=d3d7b108947363d53e8bb61b21994f1ef9f5c097df83a694ec1a1d2d84204f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN4NXRJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnntPacgMCSjANq%2BR90AwbNmkVn7B6B9SYjffOXl3n6AiApgL2Yy6DMADXSk9x0Q7Gu1LjnEtJnPM3KBhnIUsaveSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YDrEM6gmeUEw514KtwDqkvYe5nMzXAsHwBl3Ib%2BrBYwluUZixr7UpZsCAuzaHvkLpZr0%2B%2B9ehV2aT11NX36K3ykrTOT%2FQs3Om%2FlyxIhdaHiaS2i1FQir23GFzpoealB5qGC%2BR%2Bgq1r9nAwd7F4bgNYEMVWx5EL6K4lpoZksTp1AxF9Zn%2FpgqBx7a91ZFmElFDcYTp%2BP1zbef7RAm4fCXY9zT7hbK1Bzjd%2BDdNPv1WDvhCVxBJWGT%2B%2Fh6z8iDsv2YNGLdjd8orEUl3AeoKg5CQ5WojoUfXJo%2BDlc5DvUWIJ9L8V0OtgwGL7%2BF5h%2BC%2FGqCv07GR7PT3WFKLtLNCaio%2BHbTeioEbGWTV8t1XpeqNpC0ipv1GpmsLqeMCxFgvud4ASTPEdB5FhfNb6qHea%2FI1YD3bFGp8fITYeiJDuCRuXfRZgY3%2B%2FfgwFBq1Kc%2F2Cd%2FKo8C6gF9Kt8r1mlEZYDpdWm3oLfI6cPu3xey5Jsv8opi6mtDhCYbJaQjlihly3cE6cMpipHbbrpfs9%2BXmarvEOBJ5nDwtme%2FOUUQYhbOJ69mAd5agkbjvhNjXcvHF9%2FcURLcOKtjEfmksmFieg7eqP6reCzSL2tTkKzYK1ZaMxW8FyYCxTp2BlQjmab01s2nnxUGFPXrx4FXG4w1LLfxAY6pgGzRKa0gWr5DckkmpqB9m3Oe5GOFEkeEdpRqIbr9wpBaggm4SW7M36Eoegh6MirmE7%2FP%2BJH5Z138cg8NtnTsWNcsZm3VzZm%2BuoZXsF5jbALMH8FsLGLw4B4O3oSGeaEjyNQTu5CZJlyjzBLp6HUF6OdU42u3m%2FsLGl%2B%2BhSwPh0t73g1yPggyHnlEXRFndchClQxv8656qiRyZ7v9hnexD%2FnmZl4eqg9&X-Amz-Signature=fd74f0926e6189a3ed5a28a262a4985215e2d42e2280247ea4eb6667cbb27381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN4NXRJN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnntPacgMCSjANq%2BR90AwbNmkVn7B6B9SYjffOXl3n6AiApgL2Yy6DMADXSk9x0Q7Gu1LjnEtJnPM3KBhnIUsaveSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YDrEM6gmeUEw514KtwDqkvYe5nMzXAsHwBl3Ib%2BrBYwluUZixr7UpZsCAuzaHvkLpZr0%2B%2B9ehV2aT11NX36K3ykrTOT%2FQs3Om%2FlyxIhdaHiaS2i1FQir23GFzpoealB5qGC%2BR%2Bgq1r9nAwd7F4bgNYEMVWx5EL6K4lpoZksTp1AxF9Zn%2FpgqBx7a91ZFmElFDcYTp%2BP1zbef7RAm4fCXY9zT7hbK1Bzjd%2BDdNPv1WDvhCVxBJWGT%2B%2Fh6z8iDsv2YNGLdjd8orEUl3AeoKg5CQ5WojoUfXJo%2BDlc5DvUWIJ9L8V0OtgwGL7%2BF5h%2BC%2FGqCv07GR7PT3WFKLtLNCaio%2BHbTeioEbGWTV8t1XpeqNpC0ipv1GpmsLqeMCxFgvud4ASTPEdB5FhfNb6qHea%2FI1YD3bFGp8fITYeiJDuCRuXfRZgY3%2B%2FfgwFBq1Kc%2F2Cd%2FKo8C6gF9Kt8r1mlEZYDpdWm3oLfI6cPu3xey5Jsv8opi6mtDhCYbJaQjlihly3cE6cMpipHbbrpfs9%2BXmarvEOBJ5nDwtme%2FOUUQYhbOJ69mAd5agkbjvhNjXcvHF9%2FcURLcOKtjEfmksmFieg7eqP6reCzSL2tTkKzYK1ZaMxW8FyYCxTp2BlQjmab01s2nnxUGFPXrx4FXG4w1LLfxAY6pgGzRKa0gWr5DckkmpqB9m3Oe5GOFEkeEdpRqIbr9wpBaggm4SW7M36Eoegh6MirmE7%2FP%2BJH5Z138cg8NtnTsWNcsZm3VzZm%2BuoZXsF5jbALMH8FsLGLw4B4O3oSGeaEjyNQTu5CZJlyjzBLp6HUF6OdU42u3m%2FsLGl%2B%2BhSwPh0t73g1yPggyHnlEXRFndchClQxv8656qiRyZ7v9hnexD%2FnmZl4eqg9&X-Amz-Signature=da424858538f16648f98b5e6e783ed44eb8ec13f28a5f95c1a2a35cd547a77c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
