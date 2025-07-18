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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B44OVX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCGQwISK1uGuoDJAnkUi%2FCMs%2Fq7oLd5R%2F%2B7yVWhC00HGQIgQ%2FNEiGdEp0qq8L%2F1mgQNm7iJNsOfUqGoeccSti0dSpwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoXkDzzETEzYWgz6CrcA%2FWCnwt9OdwqE3WyUJFLsUhhBtQnNTaYemwcazyx0jdU4Hopl3IZN10KjKmbxcdFPDFaWdBCAjVsDyEsV%2B2gpraDRvMXPzwqh7Nst2FX3PI9IVQVRaZfl7TgtkBNyvWlBUa06JSGCl6s3G6iiTDf8IyJI7kAAsEnMWPHVifni6Oh%2BWVCzeaTeO1SnILe5VCEfdzuPPsqgIjLOY28v%2BkYLjUzTwT5%2FzYPbphX3dZgig4RNkq4d01I2jbI%2Bvgs7DYKR5eECGuyIeoNEOlaaL9NC%2Br2YsA6%2F92XRT0%2BI%2FL0lI0%2F7IqnDCTD%2B9O%2Fczb8r0mdyH6VcN%2F6Bel8dpqpRpStzBtvhL61t97gnwWDA8WwQQiQBvjlnWu9NfD997NXzlPcnxY5BxJJkblRJLt3QrIn%2B6O2mw3Bh%2BwwXFTqsbutKlPK%2FxuCCR7Rr9u5WxqKuBFYb2gguMG2WEimq497LROnpjiHEbhinCwt4%2BzqP%2B4MtPTBz8weNaW36xs%2Bdxqe6eQThMN51SRNiaT0Mzqh%2FN9pQKLgh%2F7R7oIVSExZYwFIeoiB%2B1hpkJQNPPk6xNT%2Fh0EuZ%2BuzqjRp6rMqdbz%2FkyDhaKx9%2B8ru3WCsbEX%2FsoSuYFyVTnzqvcJy0aGHA3cWMN3P6MMGOqUBuKBP0MvM6ECf12cQ5bu0X7xphOEdfY3McF6tjOl2v1054tFbQlu3Y1m3FD30QCDBT3dDoYZXAc0q9n33N0khkIpmE5boWUkUrnwxn2u8WNvx2jYeY4%2FcxSpv6%2FaB0wn0g9bhwf7kYuBpbheGhfOU5IhJBbit57WU%2F75IkPhzz4GXDeuzvXu9sdM5N8%2Fcavz9KVh8WDt%2FVLB52km9b9mFQAaWcjVq&X-Amz-Signature=3122510b826c4de0283ba1adb1cac4138cdecb110b9a83c25fafe9fabe7b77f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B44OVX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCGQwISK1uGuoDJAnkUi%2FCMs%2Fq7oLd5R%2F%2B7yVWhC00HGQIgQ%2FNEiGdEp0qq8L%2F1mgQNm7iJNsOfUqGoeccSti0dSpwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoXkDzzETEzYWgz6CrcA%2FWCnwt9OdwqE3WyUJFLsUhhBtQnNTaYemwcazyx0jdU4Hopl3IZN10KjKmbxcdFPDFaWdBCAjVsDyEsV%2B2gpraDRvMXPzwqh7Nst2FX3PI9IVQVRaZfl7TgtkBNyvWlBUa06JSGCl6s3G6iiTDf8IyJI7kAAsEnMWPHVifni6Oh%2BWVCzeaTeO1SnILe5VCEfdzuPPsqgIjLOY28v%2BkYLjUzTwT5%2FzYPbphX3dZgig4RNkq4d01I2jbI%2Bvgs7DYKR5eECGuyIeoNEOlaaL9NC%2Br2YsA6%2F92XRT0%2BI%2FL0lI0%2F7IqnDCTD%2B9O%2Fczb8r0mdyH6VcN%2F6Bel8dpqpRpStzBtvhL61t97gnwWDA8WwQQiQBvjlnWu9NfD997NXzlPcnxY5BxJJkblRJLt3QrIn%2B6O2mw3Bh%2BwwXFTqsbutKlPK%2FxuCCR7Rr9u5WxqKuBFYb2gguMG2WEimq497LROnpjiHEbhinCwt4%2BzqP%2B4MtPTBz8weNaW36xs%2Bdxqe6eQThMN51SRNiaT0Mzqh%2FN9pQKLgh%2F7R7oIVSExZYwFIeoiB%2B1hpkJQNPPk6xNT%2Fh0EuZ%2BuzqjRp6rMqdbz%2FkyDhaKx9%2B8ru3WCsbEX%2FsoSuYFyVTnzqvcJy0aGHA3cWMN3P6MMGOqUBuKBP0MvM6ECf12cQ5bu0X7xphOEdfY3McF6tjOl2v1054tFbQlu3Y1m3FD30QCDBT3dDoYZXAc0q9n33N0khkIpmE5boWUkUrnwxn2u8WNvx2jYeY4%2FcxSpv6%2FaB0wn0g9bhwf7kYuBpbheGhfOU5IhJBbit57WU%2F75IkPhzz4GXDeuzvXu9sdM5N8%2Fcavz9KVh8WDt%2FVLB52km9b9mFQAaWcjVq&X-Amz-Signature=d66dbc005a2553fbedcf654e4ca53a50a8c7e7a3da1843ce2c0f848f3da8c30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5B44OVX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCGQwISK1uGuoDJAnkUi%2FCMs%2Fq7oLd5R%2F%2B7yVWhC00HGQIgQ%2FNEiGdEp0qq8L%2F1mgQNm7iJNsOfUqGoeccSti0dSpwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoXkDzzETEzYWgz6CrcA%2FWCnwt9OdwqE3WyUJFLsUhhBtQnNTaYemwcazyx0jdU4Hopl3IZN10KjKmbxcdFPDFaWdBCAjVsDyEsV%2B2gpraDRvMXPzwqh7Nst2FX3PI9IVQVRaZfl7TgtkBNyvWlBUa06JSGCl6s3G6iiTDf8IyJI7kAAsEnMWPHVifni6Oh%2BWVCzeaTeO1SnILe5VCEfdzuPPsqgIjLOY28v%2BkYLjUzTwT5%2FzYPbphX3dZgig4RNkq4d01I2jbI%2Bvgs7DYKR5eECGuyIeoNEOlaaL9NC%2Br2YsA6%2F92XRT0%2BI%2FL0lI0%2F7IqnDCTD%2B9O%2Fczb8r0mdyH6VcN%2F6Bel8dpqpRpStzBtvhL61t97gnwWDA8WwQQiQBvjlnWu9NfD997NXzlPcnxY5BxJJkblRJLt3QrIn%2B6O2mw3Bh%2BwwXFTqsbutKlPK%2FxuCCR7Rr9u5WxqKuBFYb2gguMG2WEimq497LROnpjiHEbhinCwt4%2BzqP%2B4MtPTBz8weNaW36xs%2Bdxqe6eQThMN51SRNiaT0Mzqh%2FN9pQKLgh%2F7R7oIVSExZYwFIeoiB%2B1hpkJQNPPk6xNT%2Fh0EuZ%2BuzqjRp6rMqdbz%2FkyDhaKx9%2B8ru3WCsbEX%2FsoSuYFyVTnzqvcJy0aGHA3cWMN3P6MMGOqUBuKBP0MvM6ECf12cQ5bu0X7xphOEdfY3McF6tjOl2v1054tFbQlu3Y1m3FD30QCDBT3dDoYZXAc0q9n33N0khkIpmE5boWUkUrnwxn2u8WNvx2jYeY4%2FcxSpv6%2FaB0wn0g9bhwf7kYuBpbheGhfOU5IhJBbit57WU%2F75IkPhzz4GXDeuzvXu9sdM5N8%2Fcavz9KVh8WDt%2FVLB52km9b9mFQAaWcjVq&X-Amz-Signature=0a7f15e8982ca8913109ab119e1c1a40cdea3f04e38fac80051ad8de9d47c155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
