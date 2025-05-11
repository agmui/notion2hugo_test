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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCCCNBY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDCiFA6Wgu7jvwAjewzp1sp17JQFRhJUTnfbq0IUZrRhQIgAlf4%2Bv3r8ShPVOVKT3bv93w5dzS0kuMM%2BMaGfwc46ckqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAV8rmH6ekyfyZ0HISrcA7c0jnCoxCKKnMw0C%2FXo4aUbe0c%2FsA8IqajwdT8sDWDRcNKQOvRswg0camXbk7rLKaYtJYxfZhmSR9TxU2r878rvlCMJA0SZRT7uP98mKkyelsMHBQOTDd9Nn%2BRdnxPfVlp8s0EGrhpVY%2FxhrcV%2FvaenGXDh9XTrGOLp6d1cIppk8v5lhLo34S3c6gYQz9e26tcSgEuWNUkhEhbVJqZfSjeXAU0WZEWSGhZHYuG3DDJIAXXF7anlRa8rdcjxOXTZSoNVOHBBQByPMJ8FHIfwi1ryn9FcVo%2FaXLP5ddJwvnYJGrb1ubBtqFbOqyqtiR52%2FcPJZS2pf2cAbmnMnj0G0xPb2xtqsVcYLuD08nfNqITWCntSPBK13QaRflgrO5MTKGteowTmBm81xixlBSekBrBHx1SW8RhoMjbYHkmV7AQLX5DWRP02ZiL%2BzaxH20HLYqu%2FwWvKzZ9qI%2BrcPd4L6YQXHNVz8TbZVtaraG2jUh%2FYIzJfuQ4JlRZqyxONygN8TsY58tLB%2F3CxmK9ouQnkajN05cVhk7ZIEYT7En7ZTELQ9auT8K644MpYzmlfYF3T6YDd8pmMUhqaJMdGzjCeNOiCWdHHKaUTDi64wJCsU4MQV8l9u01FFlUM3GiQMKyegMEGOqUBgt64TzEH5sxOuGbUhRu%2BRKII07stfL9bsf%2BwcsCHfBBh06diKq6KvK6YuDMbR7pYd1sCSnCFfjt%2Fi0%2BYYkyg5lgpr%2BdJjyjBsS%2BXuZtIH6NhaAvKYwaaAQxE%2F1NiuZB1%2Fsv4T98P5xRih8kAmTwGodi4t8NGzunKhFShg%2BZ9QOMfC%2FcoLZLEaLtAa8ASX8dK3%2BqvQVZa%2FAYb4i68cmzploLZ4u8J&X-Amz-Signature=7939419cb6ee73dc1ee95e27a118b4977575bb5772c106f5d5ded20485d655bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCCCNBY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDCiFA6Wgu7jvwAjewzp1sp17JQFRhJUTnfbq0IUZrRhQIgAlf4%2Bv3r8ShPVOVKT3bv93w5dzS0kuMM%2BMaGfwc46ckqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAV8rmH6ekyfyZ0HISrcA7c0jnCoxCKKnMw0C%2FXo4aUbe0c%2FsA8IqajwdT8sDWDRcNKQOvRswg0camXbk7rLKaYtJYxfZhmSR9TxU2r878rvlCMJA0SZRT7uP98mKkyelsMHBQOTDd9Nn%2BRdnxPfVlp8s0EGrhpVY%2FxhrcV%2FvaenGXDh9XTrGOLp6d1cIppk8v5lhLo34S3c6gYQz9e26tcSgEuWNUkhEhbVJqZfSjeXAU0WZEWSGhZHYuG3DDJIAXXF7anlRa8rdcjxOXTZSoNVOHBBQByPMJ8FHIfwi1ryn9FcVo%2FaXLP5ddJwvnYJGrb1ubBtqFbOqyqtiR52%2FcPJZS2pf2cAbmnMnj0G0xPb2xtqsVcYLuD08nfNqITWCntSPBK13QaRflgrO5MTKGteowTmBm81xixlBSekBrBHx1SW8RhoMjbYHkmV7AQLX5DWRP02ZiL%2BzaxH20HLYqu%2FwWvKzZ9qI%2BrcPd4L6YQXHNVz8TbZVtaraG2jUh%2FYIzJfuQ4JlRZqyxONygN8TsY58tLB%2F3CxmK9ouQnkajN05cVhk7ZIEYT7En7ZTELQ9auT8K644MpYzmlfYF3T6YDd8pmMUhqaJMdGzjCeNOiCWdHHKaUTDi64wJCsU4MQV8l9u01FFlUM3GiQMKyegMEGOqUBgt64TzEH5sxOuGbUhRu%2BRKII07stfL9bsf%2BwcsCHfBBh06diKq6KvK6YuDMbR7pYd1sCSnCFfjt%2Fi0%2BYYkyg5lgpr%2BdJjyjBsS%2BXuZtIH6NhaAvKYwaaAQxE%2F1NiuZB1%2Fsv4T98P5xRih8kAmTwGodi4t8NGzunKhFShg%2BZ9QOMfC%2FcoLZLEaLtAa8ASX8dK3%2BqvQVZa%2FAYb4i68cmzploLZ4u8J&X-Amz-Signature=106b75830e6bd46f534aec04ce2a65d6182a32eec1381912af0e8ad31f27136b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCCCNBY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDCiFA6Wgu7jvwAjewzp1sp17JQFRhJUTnfbq0IUZrRhQIgAlf4%2Bv3r8ShPVOVKT3bv93w5dzS0kuMM%2BMaGfwc46ckqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAV8rmH6ekyfyZ0HISrcA7c0jnCoxCKKnMw0C%2FXo4aUbe0c%2FsA8IqajwdT8sDWDRcNKQOvRswg0camXbk7rLKaYtJYxfZhmSR9TxU2r878rvlCMJA0SZRT7uP98mKkyelsMHBQOTDd9Nn%2BRdnxPfVlp8s0EGrhpVY%2FxhrcV%2FvaenGXDh9XTrGOLp6d1cIppk8v5lhLo34S3c6gYQz9e26tcSgEuWNUkhEhbVJqZfSjeXAU0WZEWSGhZHYuG3DDJIAXXF7anlRa8rdcjxOXTZSoNVOHBBQByPMJ8FHIfwi1ryn9FcVo%2FaXLP5ddJwvnYJGrb1ubBtqFbOqyqtiR52%2FcPJZS2pf2cAbmnMnj0G0xPb2xtqsVcYLuD08nfNqITWCntSPBK13QaRflgrO5MTKGteowTmBm81xixlBSekBrBHx1SW8RhoMjbYHkmV7AQLX5DWRP02ZiL%2BzaxH20HLYqu%2FwWvKzZ9qI%2BrcPd4L6YQXHNVz8TbZVtaraG2jUh%2FYIzJfuQ4JlRZqyxONygN8TsY58tLB%2F3CxmK9ouQnkajN05cVhk7ZIEYT7En7ZTELQ9auT8K644MpYzmlfYF3T6YDd8pmMUhqaJMdGzjCeNOiCWdHHKaUTDi64wJCsU4MQV8l9u01FFlUM3GiQMKyegMEGOqUBgt64TzEH5sxOuGbUhRu%2BRKII07stfL9bsf%2BwcsCHfBBh06diKq6KvK6YuDMbR7pYd1sCSnCFfjt%2Fi0%2BYYkyg5lgpr%2BdJjyjBsS%2BXuZtIH6NhaAvKYwaaAQxE%2F1NiuZB1%2Fsv4T98P5xRih8kAmTwGodi4t8NGzunKhFShg%2BZ9QOMfC%2FcoLZLEaLtAa8ASX8dK3%2BqvQVZa%2FAYb4i68cmzploLZ4u8J&X-Amz-Signature=20599bef191cc157bc0c7ac4f1ebe5c90147e0af10763451bc40a67e6057e51d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
