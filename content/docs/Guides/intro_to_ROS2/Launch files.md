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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5MJUMM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLbMEVPvsUPyvZj9F6MRrh9D3HbAXwOaRrs8ATrL3WkwIhAJH%2FC9MpRkVQioyLJDWGlgsCth6kVC2J6FNXQKAtyLSxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt%2FzcN790PEMze81Eq3AOLtUUoSj1QTusWE3NLXSzUt4D7ezngdq0gsf%2FNM%2FfCj7uGY%2BHFf1iQUNrUN8IYFp00LGRdszumcwLNxAg2dCNggt1tGQYPI7b3SPj1%2F3CZ6hfcjAeXDYhpJ5B68%2FTNbs5UyyZK7uslEXHuFPe0uzhjHj8aqKZa6qqIA06DKY8VowN4j%2FruNLSkImdlpJXu4wd4sKg%2F3WEkHns7rVqvxvovf3Y8jg8gG7Wimd2HfBu9ZQvthoMhgymq3bysTHD7JP9xWKxzYM9jRT3f4rllP6aIcTPqlGlc6HHYDFPqdOjbhm%2BPSdL8zpc9HF7k5m8c4Igr9aI231%2BLGUm%2FVBpHyqnLScyRmg1cbyaqY3nou5KcqFhnv9TA7vl5XWW7%2BGQXZdKTYHJ4PbbRULCa9MegeEDL80OttH7LC9kXSrKaUyPjW9dmk4KSj2UXB8O9Qy92EADsZLQQ0nqHsZRhfnhp0brtfXTlo8uv%2F01uPAMgIMhoAY7T4AhjHxkyRCJHKdRdml%2BmgTdfQiFt1P%2Bkj3bkj2Vawm9zB4imsjgiE8PlSMC2wWAO1L%2FT66P6UalW3Z5XxPeJ6VP03Sv8ml%2BXXDQrcYfZuWdVmMy0Bp0um5nkZxhGiYOG4YRP2vVFXzLDgzDrqMTDBjqkAQaFFAHSl8av1xvpk1X0uCJ6gY5aTP2AtnnjP%2B3o8FO8UhKQi%2BypkWjlkn57l8FWZQU5qq%2F0SvHamfkvI%2FDMBC3DvaMPb4JdgPYKUAr8ju94R%2BxtkuIfzYBRLDj8Nqv5TCrhfkWWMQY%2FMZC%2FBdLNAZ87ymPN3pQ9iU9PlmMNS5yOgfB0K5%2FzvLqpKH%2BiVYV%2F04SbtRXd8Vl0Xa1k9MGWOqcdN333&X-Amz-Signature=b96c40113ba28a6bb8e65b0b535cfb65c021457060e489adeca2265961356ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5MJUMM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLbMEVPvsUPyvZj9F6MRrh9D3HbAXwOaRrs8ATrL3WkwIhAJH%2FC9MpRkVQioyLJDWGlgsCth6kVC2J6FNXQKAtyLSxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt%2FzcN790PEMze81Eq3AOLtUUoSj1QTusWE3NLXSzUt4D7ezngdq0gsf%2FNM%2FfCj7uGY%2BHFf1iQUNrUN8IYFp00LGRdszumcwLNxAg2dCNggt1tGQYPI7b3SPj1%2F3CZ6hfcjAeXDYhpJ5B68%2FTNbs5UyyZK7uslEXHuFPe0uzhjHj8aqKZa6qqIA06DKY8VowN4j%2FruNLSkImdlpJXu4wd4sKg%2F3WEkHns7rVqvxvovf3Y8jg8gG7Wimd2HfBu9ZQvthoMhgymq3bysTHD7JP9xWKxzYM9jRT3f4rllP6aIcTPqlGlc6HHYDFPqdOjbhm%2BPSdL8zpc9HF7k5m8c4Igr9aI231%2BLGUm%2FVBpHyqnLScyRmg1cbyaqY3nou5KcqFhnv9TA7vl5XWW7%2BGQXZdKTYHJ4PbbRULCa9MegeEDL80OttH7LC9kXSrKaUyPjW9dmk4KSj2UXB8O9Qy92EADsZLQQ0nqHsZRhfnhp0brtfXTlo8uv%2F01uPAMgIMhoAY7T4AhjHxkyRCJHKdRdml%2BmgTdfQiFt1P%2Bkj3bkj2Vawm9zB4imsjgiE8PlSMC2wWAO1L%2FT66P6UalW3Z5XxPeJ6VP03Sv8ml%2BXXDQrcYfZuWdVmMy0Bp0um5nkZxhGiYOG4YRP2vVFXzLDgzDrqMTDBjqkAQaFFAHSl8av1xvpk1X0uCJ6gY5aTP2AtnnjP%2B3o8FO8UhKQi%2BypkWjlkn57l8FWZQU5qq%2F0SvHamfkvI%2FDMBC3DvaMPb4JdgPYKUAr8ju94R%2BxtkuIfzYBRLDj8Nqv5TCrhfkWWMQY%2FMZC%2FBdLNAZ87ymPN3pQ9iU9PlmMNS5yOgfB0K5%2FzvLqpKH%2BiVYV%2F04SbtRXd8Vl0Xa1k9MGWOqcdN333&X-Amz-Signature=fded469595f92007323cd26a724e0f970dd532f121a45bac8aa62ee8742f0744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5MJUMM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLbMEVPvsUPyvZj9F6MRrh9D3HbAXwOaRrs8ATrL3WkwIhAJH%2FC9MpRkVQioyLJDWGlgsCth6kVC2J6FNXQKAtyLSxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt%2FzcN790PEMze81Eq3AOLtUUoSj1QTusWE3NLXSzUt4D7ezngdq0gsf%2FNM%2FfCj7uGY%2BHFf1iQUNrUN8IYFp00LGRdszumcwLNxAg2dCNggt1tGQYPI7b3SPj1%2F3CZ6hfcjAeXDYhpJ5B68%2FTNbs5UyyZK7uslEXHuFPe0uzhjHj8aqKZa6qqIA06DKY8VowN4j%2FruNLSkImdlpJXu4wd4sKg%2F3WEkHns7rVqvxvovf3Y8jg8gG7Wimd2HfBu9ZQvthoMhgymq3bysTHD7JP9xWKxzYM9jRT3f4rllP6aIcTPqlGlc6HHYDFPqdOjbhm%2BPSdL8zpc9HF7k5m8c4Igr9aI231%2BLGUm%2FVBpHyqnLScyRmg1cbyaqY3nou5KcqFhnv9TA7vl5XWW7%2BGQXZdKTYHJ4PbbRULCa9MegeEDL80OttH7LC9kXSrKaUyPjW9dmk4KSj2UXB8O9Qy92EADsZLQQ0nqHsZRhfnhp0brtfXTlo8uv%2F01uPAMgIMhoAY7T4AhjHxkyRCJHKdRdml%2BmgTdfQiFt1P%2Bkj3bkj2Vawm9zB4imsjgiE8PlSMC2wWAO1L%2FT66P6UalW3Z5XxPeJ6VP03Sv8ml%2BXXDQrcYfZuWdVmMy0Bp0um5nkZxhGiYOG4YRP2vVFXzLDgzDrqMTDBjqkAQaFFAHSl8av1xvpk1X0uCJ6gY5aTP2AtnnjP%2B3o8FO8UhKQi%2BypkWjlkn57l8FWZQU5qq%2F0SvHamfkvI%2FDMBC3DvaMPb4JdgPYKUAr8ju94R%2BxtkuIfzYBRLDj8Nqv5TCrhfkWWMQY%2FMZC%2FBdLNAZ87ymPN3pQ9iU9PlmMNS5yOgfB0K5%2FzvLqpKH%2BiVYV%2F04SbtRXd8Vl0Xa1k9MGWOqcdN333&X-Amz-Signature=82a743e1718798e4776f2b864de8db5645a7b6cb333eac30b0f610bd25760d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
