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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6XQZBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDIp6sabPXE1JM7b7qmYTF5dUJ68yJ%2B274tnv8VH7BUtwIhANmQm85fVjN9rQFa1qmYVwVvVK47Jmk5CYK9wggq5jyOKv8DCH0QABoMNjM3NDIzMTgzODA1IgzcoSJ%2FZsD3fZ8JtUcq3ANn13sxULv%2BdrepYo%2Fdq2jvEXi5RGI1yLtimhQPRzZTUnaWI%2BxcpxLAtKl8ogFQ1nAhxNZbvaGEm4AksomxWzaMtd9sHC4WWa5bwcIgrAN%2BbULo7XYh6SdqfsWs%2FE3stujk9pqaiIn7uzeahbwQFsMolVKmKOiwsNcGDF2wND4ARjOfK50Ke0NLOOULBrINT5Dpzo9lmf77x1p6BtREm2sw27SL%2Fndd5capfz8dMvAX3P%2BvylBBrvKaMpKBRTSWcdL2PX5SvLAeWDnI26q7aTL0T6yMKUC0X%2Bpo3i8O%2BjgvmNymUXo8uCNV%2BgM%2BxlzHz6XYWfNCz8DXIJ9ppahYc5N7YF7dM1TvdQGiHLAd4LrAvbRuRDy20ssMbMmkcMMWut6l4L0Qr2UqVYlFJEY2wqwSkg474vxme6ql%2BeVRe0m2gGvlDvj6v1mMP54uTYuuAEjvZlWzvS%2BArETZ73gAor7pRtl7D22BZwZLZiuu6yb3HCvbXJfuGvN9u9yln%2FXU0Nq6dQeGfrbJi1bB4c1tzKcJbzv%2BAL9SV4EQ4J%2ByNmGi7uoqQPl3DBdJQiWy8XknMXYe%2FNfi3QSRZgr2RT1zY7iMFj7Gwz6%2BS3aw8cCoevoFFtNOuwIlN6Z8NVNaXDC54Le%2BBjqkAfAGbVzr6lfIiw4U4wVd5K3dmK%2BilJ7pFY0VlzB9hs33cvvNEtD07a2LT6mqd9tw9CDv%2F3%2BF3F5V462ySHm9e1FqhmDIDjIeLjS4ahm2xr%2Bwn1HTMzByr8jxGfxJCUTf2kSCgMRmRr7ETJ1SkV4o97Cmlxat1UacUTlKTsTaygBhHvrH4t83za7sy8i8VCugqFo%2B%2BVrpWfuuPBkVD64dQvDoJini&X-Amz-Signature=cb18a20fbd48042eef89a6f74643c3e3ee433bd97fe99151a36db6cc25831f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6XQZBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDIp6sabPXE1JM7b7qmYTF5dUJ68yJ%2B274tnv8VH7BUtwIhANmQm85fVjN9rQFa1qmYVwVvVK47Jmk5CYK9wggq5jyOKv8DCH0QABoMNjM3NDIzMTgzODA1IgzcoSJ%2FZsD3fZ8JtUcq3ANn13sxULv%2BdrepYo%2Fdq2jvEXi5RGI1yLtimhQPRzZTUnaWI%2BxcpxLAtKl8ogFQ1nAhxNZbvaGEm4AksomxWzaMtd9sHC4WWa5bwcIgrAN%2BbULo7XYh6SdqfsWs%2FE3stujk9pqaiIn7uzeahbwQFsMolVKmKOiwsNcGDF2wND4ARjOfK50Ke0NLOOULBrINT5Dpzo9lmf77x1p6BtREm2sw27SL%2Fndd5capfz8dMvAX3P%2BvylBBrvKaMpKBRTSWcdL2PX5SvLAeWDnI26q7aTL0T6yMKUC0X%2Bpo3i8O%2BjgvmNymUXo8uCNV%2BgM%2BxlzHz6XYWfNCz8DXIJ9ppahYc5N7YF7dM1TvdQGiHLAd4LrAvbRuRDy20ssMbMmkcMMWut6l4L0Qr2UqVYlFJEY2wqwSkg474vxme6ql%2BeVRe0m2gGvlDvj6v1mMP54uTYuuAEjvZlWzvS%2BArETZ73gAor7pRtl7D22BZwZLZiuu6yb3HCvbXJfuGvN9u9yln%2FXU0Nq6dQeGfrbJi1bB4c1tzKcJbzv%2BAL9SV4EQ4J%2ByNmGi7uoqQPl3DBdJQiWy8XknMXYe%2FNfi3QSRZgr2RT1zY7iMFj7Gwz6%2BS3aw8cCoevoFFtNOuwIlN6Z8NVNaXDC54Le%2BBjqkAfAGbVzr6lfIiw4U4wVd5K3dmK%2BilJ7pFY0VlzB9hs33cvvNEtD07a2LT6mqd9tw9CDv%2F3%2BF3F5V462ySHm9e1FqhmDIDjIeLjS4ahm2xr%2Bwn1HTMzByr8jxGfxJCUTf2kSCgMRmRr7ETJ1SkV4o97Cmlxat1UacUTlKTsTaygBhHvrH4t83za7sy8i8VCugqFo%2B%2BVrpWfuuPBkVD64dQvDoJini&X-Amz-Signature=c6a7584ee8007590ea2672ad0e45b28d0574c40e4a1618a1dbb17a98a39dba7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6XQZBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDIp6sabPXE1JM7b7qmYTF5dUJ68yJ%2B274tnv8VH7BUtwIhANmQm85fVjN9rQFa1qmYVwVvVK47Jmk5CYK9wggq5jyOKv8DCH0QABoMNjM3NDIzMTgzODA1IgzcoSJ%2FZsD3fZ8JtUcq3ANn13sxULv%2BdrepYo%2Fdq2jvEXi5RGI1yLtimhQPRzZTUnaWI%2BxcpxLAtKl8ogFQ1nAhxNZbvaGEm4AksomxWzaMtd9sHC4WWa5bwcIgrAN%2BbULo7XYh6SdqfsWs%2FE3stujk9pqaiIn7uzeahbwQFsMolVKmKOiwsNcGDF2wND4ARjOfK50Ke0NLOOULBrINT5Dpzo9lmf77x1p6BtREm2sw27SL%2Fndd5capfz8dMvAX3P%2BvylBBrvKaMpKBRTSWcdL2PX5SvLAeWDnI26q7aTL0T6yMKUC0X%2Bpo3i8O%2BjgvmNymUXo8uCNV%2BgM%2BxlzHz6XYWfNCz8DXIJ9ppahYc5N7YF7dM1TvdQGiHLAd4LrAvbRuRDy20ssMbMmkcMMWut6l4L0Qr2UqVYlFJEY2wqwSkg474vxme6ql%2BeVRe0m2gGvlDvj6v1mMP54uTYuuAEjvZlWzvS%2BArETZ73gAor7pRtl7D22BZwZLZiuu6yb3HCvbXJfuGvN9u9yln%2FXU0Nq6dQeGfrbJi1bB4c1tzKcJbzv%2BAL9SV4EQ4J%2ByNmGi7uoqQPl3DBdJQiWy8XknMXYe%2FNfi3QSRZgr2RT1zY7iMFj7Gwz6%2BS3aw8cCoevoFFtNOuwIlN6Z8NVNaXDC54Le%2BBjqkAfAGbVzr6lfIiw4U4wVd5K3dmK%2BilJ7pFY0VlzB9hs33cvvNEtD07a2LT6mqd9tw9CDv%2F3%2BF3F5V462ySHm9e1FqhmDIDjIeLjS4ahm2xr%2Bwn1HTMzByr8jxGfxJCUTf2kSCgMRmRr7ETJ1SkV4o97Cmlxat1UacUTlKTsTaygBhHvrH4t83za7sy8i8VCugqFo%2B%2BVrpWfuuPBkVD64dQvDoJini&X-Amz-Signature=a21c760879825f40e807ec31a98999606e961ff587a18aa2d2f31db8fa503881&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
