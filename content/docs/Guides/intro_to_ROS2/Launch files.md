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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJE2WIL4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDtu9zkoibcJ4qnVzYXj%2B9vcVcI74BugXPMddeM9ZBSmwIhAK629%2Fy%2FbEkNfCa2bN8sD2NNtKCwr%2B4lRJ9u0kSr2Jz7KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpok9bFjuMz20UYPgq3ANhzD6hKkOXbLTp17Ls%2B1fidyhY1NhAwLM3aQV1Ty%2BhGU%2FaiYHMy79HBD1zHg280BYuk17xrplY5cJn7LTdExGANv2Ab4C91%2FzCXKL6zxyY8D%2FOtIrI4J%2FSVLqiJDFzKTr3MbwF03zuRmAp%2FB9nFB8OZn9k4qBTq%2FW84fqJZzgys2wUh%2Bf6gKfDhUkPidlH9QbIayhTEfcfheuTpoCYuJjzHuvwjegP%2BphyliEYJPGDQaYYfg9zmn8uFTsU8Dd1TO%2BIMukJprwhdqgL63p2ILkz3k2spN1QcF3AuN5wSVeVIOOihL1w8eS%2B0QDtnP7RnzxiHYsqajFp1TTOdwgceVHW6aVydsg9wdecwyGwDajw95KKW14%2BTW1NYCKho%2FVGXggqxC5Z0C%2F1j8jQCTzvG1jE9vbuHxsokKGAJYBTumzN6%2BfnPW9K0d%2BxDnrVvrr8NRTVJtNQMnwuGq2reXe9hTvXVSaEZp2n0f%2FY%2Fa2uEPxcZhcRsl%2ByjJYcR%2BgRanDMN7C7tmhy%2F3RsYysB5v18%2FaxRHVusmuZcYPkd%2FGP4IoQBI2f%2FVxBc4pCXMY4QldNCTl8RRuaqZQ3mtu8kRoBi%2F1fW5odGWg5A6F5YtYgWwc2r5usqrj%2FZjChgh0i6DzCUn9a9BjqkAaOI6y0JQvUwRv8xR8Jqc3su9Y%2BTDgtNULspHmLuQH%2FM8jmzAb3MKlr5k8Tkr%2F6oSVM8K%2B0PPnU8AsMW%2BKBCVgC8Yyd%2F%2Blnz%2FZD6n%2FBJAD56FoiDXVNNDtGcZA8yPflEafy%2BqF3BbErk%2FhlHXj%2FPA0x62D83jdtKtwOQNeSIDx7m%2Fgzcg7WcVN4j4S5Z8LA9o1V7ibu1DDckJQ9xwnT2h1l8hIdq&X-Amz-Signature=5f519b0a404f3eafc2788a49bfd413c699e32d1dbb62b7c247e86200d14679b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJE2WIL4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDtu9zkoibcJ4qnVzYXj%2B9vcVcI74BugXPMddeM9ZBSmwIhAK629%2Fy%2FbEkNfCa2bN8sD2NNtKCwr%2B4lRJ9u0kSr2Jz7KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpok9bFjuMz20UYPgq3ANhzD6hKkOXbLTp17Ls%2B1fidyhY1NhAwLM3aQV1Ty%2BhGU%2FaiYHMy79HBD1zHg280BYuk17xrplY5cJn7LTdExGANv2Ab4C91%2FzCXKL6zxyY8D%2FOtIrI4J%2FSVLqiJDFzKTr3MbwF03zuRmAp%2FB9nFB8OZn9k4qBTq%2FW84fqJZzgys2wUh%2Bf6gKfDhUkPidlH9QbIayhTEfcfheuTpoCYuJjzHuvwjegP%2BphyliEYJPGDQaYYfg9zmn8uFTsU8Dd1TO%2BIMukJprwhdqgL63p2ILkz3k2spN1QcF3AuN5wSVeVIOOihL1w8eS%2B0QDtnP7RnzxiHYsqajFp1TTOdwgceVHW6aVydsg9wdecwyGwDajw95KKW14%2BTW1NYCKho%2FVGXggqxC5Z0C%2F1j8jQCTzvG1jE9vbuHxsokKGAJYBTumzN6%2BfnPW9K0d%2BxDnrVvrr8NRTVJtNQMnwuGq2reXe9hTvXVSaEZp2n0f%2FY%2Fa2uEPxcZhcRsl%2ByjJYcR%2BgRanDMN7C7tmhy%2F3RsYysB5v18%2FaxRHVusmuZcYPkd%2FGP4IoQBI2f%2FVxBc4pCXMY4QldNCTl8RRuaqZQ3mtu8kRoBi%2F1fW5odGWg5A6F5YtYgWwc2r5usqrj%2FZjChgh0i6DzCUn9a9BjqkAaOI6y0JQvUwRv8xR8Jqc3su9Y%2BTDgtNULspHmLuQH%2FM8jmzAb3MKlr5k8Tkr%2F6oSVM8K%2B0PPnU8AsMW%2BKBCVgC8Yyd%2F%2Blnz%2FZD6n%2FBJAD56FoiDXVNNDtGcZA8yPflEafy%2BqF3BbErk%2FhlHXj%2FPA0x62D83jdtKtwOQNeSIDx7m%2Fgzcg7WcVN4j4S5Z8LA9o1V7ibu1DDckJQ9xwnT2h1l8hIdq&X-Amz-Signature=24d73f84a1864cb8823825359308a6cf1158231fe56e4223de2f96ddec9500c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJE2WIL4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDtu9zkoibcJ4qnVzYXj%2B9vcVcI74BugXPMddeM9ZBSmwIhAK629%2Fy%2FbEkNfCa2bN8sD2NNtKCwr%2B4lRJ9u0kSr2Jz7KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpok9bFjuMz20UYPgq3ANhzD6hKkOXbLTp17Ls%2B1fidyhY1NhAwLM3aQV1Ty%2BhGU%2FaiYHMy79HBD1zHg280BYuk17xrplY5cJn7LTdExGANv2Ab4C91%2FzCXKL6zxyY8D%2FOtIrI4J%2FSVLqiJDFzKTr3MbwF03zuRmAp%2FB9nFB8OZn9k4qBTq%2FW84fqJZzgys2wUh%2Bf6gKfDhUkPidlH9QbIayhTEfcfheuTpoCYuJjzHuvwjegP%2BphyliEYJPGDQaYYfg9zmn8uFTsU8Dd1TO%2BIMukJprwhdqgL63p2ILkz3k2spN1QcF3AuN5wSVeVIOOihL1w8eS%2B0QDtnP7RnzxiHYsqajFp1TTOdwgceVHW6aVydsg9wdecwyGwDajw95KKW14%2BTW1NYCKho%2FVGXggqxC5Z0C%2F1j8jQCTzvG1jE9vbuHxsokKGAJYBTumzN6%2BfnPW9K0d%2BxDnrVvrr8NRTVJtNQMnwuGq2reXe9hTvXVSaEZp2n0f%2FY%2Fa2uEPxcZhcRsl%2ByjJYcR%2BgRanDMN7C7tmhy%2F3RsYysB5v18%2FaxRHVusmuZcYPkd%2FGP4IoQBI2f%2FVxBc4pCXMY4QldNCTl8RRuaqZQ3mtu8kRoBi%2F1fW5odGWg5A6F5YtYgWwc2r5usqrj%2FZjChgh0i6DzCUn9a9BjqkAaOI6y0JQvUwRv8xR8Jqc3su9Y%2BTDgtNULspHmLuQH%2FM8jmzAb3MKlr5k8Tkr%2F6oSVM8K%2B0PPnU8AsMW%2BKBCVgC8Yyd%2F%2Blnz%2FZD6n%2FBJAD56FoiDXVNNDtGcZA8yPflEafy%2BqF3BbErk%2FhlHXj%2FPA0x62D83jdtKtwOQNeSIDx7m%2Fgzcg7WcVN4j4S5Z8LA9o1V7ibu1DDckJQ9xwnT2h1l8hIdq&X-Amz-Signature=f1d65f4e579a49536ff9eb01599e63a9c2013109e321ac685dd287d77ba4612b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
