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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUB35EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5UID3G9XLvzf2MaURn%2FjlVQ0JbllyHl4bbFgXwzy5uAiEA5uDLd7bckKYxvLlExXo0vysTInvEk8QuW49jgQgOrgUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbZShn%2BPqqsMsBQFircA%2BI3IArkrHQ9zhKxRzgo04NUN8KUKGa706tTEAP1U9HVlwlDjnVnXr0GLAssOApYE%2B8bTAeSAQiIOZipByFviFsvfqhzKRmkih6QFp3GFQAKh%2BUkh5qv3drMEINhR%2B1MlRyV3KhOdmLKdOtEs4sXWX9gBewDVglUOC3mNLQtbYbxuNMVG26YFKkc17ptz7W1vEP5%2BVhTwGN16kBvmfmq20qGM3lOp2iFE%2FiGrpZAyi05wbuLwGUwefSkoCf6aaDcwd0aKKgvYIm7JacR%2Bze8Ban8rclv6v0gbRXjxqFa%2FOZ3NNLyi%2FTnwgQf9sb0A9G47CjPpU025LO2tN0iKU3Lgr%2B78LEwXUN%2BtQV0naI28Wvz97gVPPmYVTr4sq8xBhnQsNQgf5JaF8kpsqPU1DFdqp4zs9pT1WY%2Bx0BDjpbVJ7GLnIS7kjsoO53EjxPvjuWZm8t8kuIM8EExtN0fovBIgLt%2BWP5uc5SvXNTI6JNdhtSH37Fe9oO0lalrLb6O2vxnHXHwDsTE%2F%2Bhpn0yrlT24Cr%2FbZSY%2B334gE8lf3jUu4MlHGCxCA1IWazgeq3pAjgV3kwF%2BmeRWNeKvptCCaw0TOR6bPLyW7dQ6T0AWMt3qd2SL%2BjW0oLTmzruOEYvbMLm7y74GOqUBFoKs1MNebdGFkXLyXw3dYlt8YIiajDp91qP%2FfN5ui6EyfSHzJjmeBMKntDRTZVQkr6iAklUbLHAh3VyKobyL7efNy6lv4BlqPShIGxpB1mK1k4%2FkLRrFz%2FUcbsYP8m%2B4VYLDoHFmRfGh55w1ZQZ2GfXUAdTJm%2ByBEo2p3R%2B1b%2FNZYlVen5nAExFuMEN4Zm1fLf3ya6wxdCW9gOaLmF7BAVr8aLKf&X-Amz-Signature=e08b08f3f8b4bcf173a0418250f06ddfcded1eab4056c28692c6056c400bdae6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUB35EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5UID3G9XLvzf2MaURn%2FjlVQ0JbllyHl4bbFgXwzy5uAiEA5uDLd7bckKYxvLlExXo0vysTInvEk8QuW49jgQgOrgUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbZShn%2BPqqsMsBQFircA%2BI3IArkrHQ9zhKxRzgo04NUN8KUKGa706tTEAP1U9HVlwlDjnVnXr0GLAssOApYE%2B8bTAeSAQiIOZipByFviFsvfqhzKRmkih6QFp3GFQAKh%2BUkh5qv3drMEINhR%2B1MlRyV3KhOdmLKdOtEs4sXWX9gBewDVglUOC3mNLQtbYbxuNMVG26YFKkc17ptz7W1vEP5%2BVhTwGN16kBvmfmq20qGM3lOp2iFE%2FiGrpZAyi05wbuLwGUwefSkoCf6aaDcwd0aKKgvYIm7JacR%2Bze8Ban8rclv6v0gbRXjxqFa%2FOZ3NNLyi%2FTnwgQf9sb0A9G47CjPpU025LO2tN0iKU3Lgr%2B78LEwXUN%2BtQV0naI28Wvz97gVPPmYVTr4sq8xBhnQsNQgf5JaF8kpsqPU1DFdqp4zs9pT1WY%2Bx0BDjpbVJ7GLnIS7kjsoO53EjxPvjuWZm8t8kuIM8EExtN0fovBIgLt%2BWP5uc5SvXNTI6JNdhtSH37Fe9oO0lalrLb6O2vxnHXHwDsTE%2F%2Bhpn0yrlT24Cr%2FbZSY%2B334gE8lf3jUu4MlHGCxCA1IWazgeq3pAjgV3kwF%2BmeRWNeKvptCCaw0TOR6bPLyW7dQ6T0AWMt3qd2SL%2BjW0oLTmzruOEYvbMLm7y74GOqUBFoKs1MNebdGFkXLyXw3dYlt8YIiajDp91qP%2FfN5ui6EyfSHzJjmeBMKntDRTZVQkr6iAklUbLHAh3VyKobyL7efNy6lv4BlqPShIGxpB1mK1k4%2FkLRrFz%2FUcbsYP8m%2B4VYLDoHFmRfGh55w1ZQZ2GfXUAdTJm%2ByBEo2p3R%2B1b%2FNZYlVen5nAExFuMEN4Zm1fLf3ya6wxdCW9gOaLmF7BAVr8aLKf&X-Amz-Signature=7b0e0cacd63d49b06735861f687fcdf58e70f059cef5343b0722e7b49ca0df85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XUB35EB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5UID3G9XLvzf2MaURn%2FjlVQ0JbllyHl4bbFgXwzy5uAiEA5uDLd7bckKYxvLlExXo0vysTInvEk8QuW49jgQgOrgUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbZShn%2BPqqsMsBQFircA%2BI3IArkrHQ9zhKxRzgo04NUN8KUKGa706tTEAP1U9HVlwlDjnVnXr0GLAssOApYE%2B8bTAeSAQiIOZipByFviFsvfqhzKRmkih6QFp3GFQAKh%2BUkh5qv3drMEINhR%2B1MlRyV3KhOdmLKdOtEs4sXWX9gBewDVglUOC3mNLQtbYbxuNMVG26YFKkc17ptz7W1vEP5%2BVhTwGN16kBvmfmq20qGM3lOp2iFE%2FiGrpZAyi05wbuLwGUwefSkoCf6aaDcwd0aKKgvYIm7JacR%2Bze8Ban8rclv6v0gbRXjxqFa%2FOZ3NNLyi%2FTnwgQf9sb0A9G47CjPpU025LO2tN0iKU3Lgr%2B78LEwXUN%2BtQV0naI28Wvz97gVPPmYVTr4sq8xBhnQsNQgf5JaF8kpsqPU1DFdqp4zs9pT1WY%2Bx0BDjpbVJ7GLnIS7kjsoO53EjxPvjuWZm8t8kuIM8EExtN0fovBIgLt%2BWP5uc5SvXNTI6JNdhtSH37Fe9oO0lalrLb6O2vxnHXHwDsTE%2F%2Bhpn0yrlT24Cr%2FbZSY%2B334gE8lf3jUu4MlHGCxCA1IWazgeq3pAjgV3kwF%2BmeRWNeKvptCCaw0TOR6bPLyW7dQ6T0AWMt3qd2SL%2BjW0oLTmzruOEYvbMLm7y74GOqUBFoKs1MNebdGFkXLyXw3dYlt8YIiajDp91qP%2FfN5ui6EyfSHzJjmeBMKntDRTZVQkr6iAklUbLHAh3VyKobyL7efNy6lv4BlqPShIGxpB1mK1k4%2FkLRrFz%2FUcbsYP8m%2B4VYLDoHFmRfGh55w1ZQZ2GfXUAdTJm%2ByBEo2p3R%2B1b%2FNZYlVen5nAExFuMEN4Zm1fLf3ya6wxdCW9gOaLmF7BAVr8aLKf&X-Amz-Signature=b0a3066c9948ca3842df4d7e5bc46ddf4646a35d2bc77d4d70b025910b3dcccd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
