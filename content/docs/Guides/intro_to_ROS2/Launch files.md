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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ7QG4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFQ0ZquxgvkBwzSHLvRPbf4sYRz43f2Yz%2BtgnofZC%2FZEAiEAxBjGbUAJbmy4gpu7jOmbaooMez5Axhr0ka45K3bZgfUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIS3KFMAg8NYOi7N9SrcA4X%2BmWl%2BqFJI31BCE%2BBu%2FzpBmY7hn%2BtMDF8aEPrl%2FwVYOm0eE7Pj%2FWwQtC2rTPy%2BocQFDD%2BLZHMW9bZJPsNZAT0btYdyt3yqkxI7%2FbEwiIUEecHShtAgK412OreAPG5vemF23gNftUBAHSTIroXZiT72jZ402nUjFfoBgSBOiQYgju6DmbZzG54IgxsopciKrc%2FMA5QRhsX9f6RUeY073ESpvb7dvlzjCZivcu6Xw4kDglUXitwBD7pl8Jz1syAyt8cZYrc8TxXjht1TpqulY6YUzl5kZIYKS3yIluODYRBJKaHMxYvNGv0vkOxdeMT1hsTSjHIAGQv8dkSb%2BumS4wXjnSLS5q69Pzxv2qzoMJiIT7rINlKOaW5N5mFrAitm%2FY80YlPzXAFgIw1kdXGBLg9l2IoaqksXWZhAn73wZIbdqftDWaTTpwSvkmXTv3TwDeBoOLDrBTiS1V3ObyWTAWFLb0q9FhzKrKEV8GqIA%2FRNo6S1qP1cSHJlY2Jn78icHXB0wqrjDVRmUXvRN8M%2B%2BZYIfYhJf7s0dad7JAuuy5DGe%2F7SnNdvQ%2BsYd30tyVaMWiRjbXHgwiqYT2%2BrsHvNEnbW8bPdYHWsU6MLkeey8bC35nYEl%2FBIgecUxjgAMJyG2sMGOqUBSi5zbzq3NLHr4F2M%2FxyInJceobM7V3T8891ED6sF98ADCqC%2BmvfKgfC65ZYLpXRU81RxGCAo9INqTRfXJLN6rYoxiybEm%2B7COErjPCGlTRpcNyGAef6gPq%2FIP6TtP8bZKUiU6MKhwZpWJR4E5eP5lVL0b1ZeE%2BTvR03bWVyIxAOH0X%2FEx%2BDekVq5VejZKqwKKZKnm6UN7Qnt5zSOoIoBNSjS4WBR&X-Amz-Signature=fd83dadc76ade3bf3f2db6453ba2a00f2292ef4b17245e59a86481d725fd2c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ7QG4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFQ0ZquxgvkBwzSHLvRPbf4sYRz43f2Yz%2BtgnofZC%2FZEAiEAxBjGbUAJbmy4gpu7jOmbaooMez5Axhr0ka45K3bZgfUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIS3KFMAg8NYOi7N9SrcA4X%2BmWl%2BqFJI31BCE%2BBu%2FzpBmY7hn%2BtMDF8aEPrl%2FwVYOm0eE7Pj%2FWwQtC2rTPy%2BocQFDD%2BLZHMW9bZJPsNZAT0btYdyt3yqkxI7%2FbEwiIUEecHShtAgK412OreAPG5vemF23gNftUBAHSTIroXZiT72jZ402nUjFfoBgSBOiQYgju6DmbZzG54IgxsopciKrc%2FMA5QRhsX9f6RUeY073ESpvb7dvlzjCZivcu6Xw4kDglUXitwBD7pl8Jz1syAyt8cZYrc8TxXjht1TpqulY6YUzl5kZIYKS3yIluODYRBJKaHMxYvNGv0vkOxdeMT1hsTSjHIAGQv8dkSb%2BumS4wXjnSLS5q69Pzxv2qzoMJiIT7rINlKOaW5N5mFrAitm%2FY80YlPzXAFgIw1kdXGBLg9l2IoaqksXWZhAn73wZIbdqftDWaTTpwSvkmXTv3TwDeBoOLDrBTiS1V3ObyWTAWFLb0q9FhzKrKEV8GqIA%2FRNo6S1qP1cSHJlY2Jn78icHXB0wqrjDVRmUXvRN8M%2B%2BZYIfYhJf7s0dad7JAuuy5DGe%2F7SnNdvQ%2BsYd30tyVaMWiRjbXHgwiqYT2%2BrsHvNEnbW8bPdYHWsU6MLkeey8bC35nYEl%2FBIgecUxjgAMJyG2sMGOqUBSi5zbzq3NLHr4F2M%2FxyInJceobM7V3T8891ED6sF98ADCqC%2BmvfKgfC65ZYLpXRU81RxGCAo9INqTRfXJLN6rYoxiybEm%2B7COErjPCGlTRpcNyGAef6gPq%2FIP6TtP8bZKUiU6MKhwZpWJR4E5eP5lVL0b1ZeE%2BTvR03bWVyIxAOH0X%2FEx%2BDekVq5VejZKqwKKZKnm6UN7Qnt5zSOoIoBNSjS4WBR&X-Amz-Signature=c46da128228214467dd83a098c94faaa726bb28b9fccb58fd77c4964bdcf9c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQ7QG4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFQ0ZquxgvkBwzSHLvRPbf4sYRz43f2Yz%2BtgnofZC%2FZEAiEAxBjGbUAJbmy4gpu7jOmbaooMez5Axhr0ka45K3bZgfUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDIS3KFMAg8NYOi7N9SrcA4X%2BmWl%2BqFJI31BCE%2BBu%2FzpBmY7hn%2BtMDF8aEPrl%2FwVYOm0eE7Pj%2FWwQtC2rTPy%2BocQFDD%2BLZHMW9bZJPsNZAT0btYdyt3yqkxI7%2FbEwiIUEecHShtAgK412OreAPG5vemF23gNftUBAHSTIroXZiT72jZ402nUjFfoBgSBOiQYgju6DmbZzG54IgxsopciKrc%2FMA5QRhsX9f6RUeY073ESpvb7dvlzjCZivcu6Xw4kDglUXitwBD7pl8Jz1syAyt8cZYrc8TxXjht1TpqulY6YUzl5kZIYKS3yIluODYRBJKaHMxYvNGv0vkOxdeMT1hsTSjHIAGQv8dkSb%2BumS4wXjnSLS5q69Pzxv2qzoMJiIT7rINlKOaW5N5mFrAitm%2FY80YlPzXAFgIw1kdXGBLg9l2IoaqksXWZhAn73wZIbdqftDWaTTpwSvkmXTv3TwDeBoOLDrBTiS1V3ObyWTAWFLb0q9FhzKrKEV8GqIA%2FRNo6S1qP1cSHJlY2Jn78icHXB0wqrjDVRmUXvRN8M%2B%2BZYIfYhJf7s0dad7JAuuy5DGe%2F7SnNdvQ%2BsYd30tyVaMWiRjbXHgwiqYT2%2BrsHvNEnbW8bPdYHWsU6MLkeey8bC35nYEl%2FBIgecUxjgAMJyG2sMGOqUBSi5zbzq3NLHr4F2M%2FxyInJceobM7V3T8891ED6sF98ADCqC%2BmvfKgfC65ZYLpXRU81RxGCAo9INqTRfXJLN6rYoxiybEm%2B7COErjPCGlTRpcNyGAef6gPq%2FIP6TtP8bZKUiU6MKhwZpWJR4E5eP5lVL0b1ZeE%2BTvR03bWVyIxAOH0X%2FEx%2BDekVq5VejZKqwKKZKnm6UN7Qnt5zSOoIoBNSjS4WBR&X-Amz-Signature=14afc6df192d6bd976155aee7942599509ee69d0e252f7b08bd42a2b9097bb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
