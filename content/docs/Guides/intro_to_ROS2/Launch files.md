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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSHZQLW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLpbHBSEPjmFWaW0RYM3YF5MJgYEx1Pgbwp7oA67nBPgIhANHpwLD%2F6vJ9UBl%2FkMktJDOzHWCwPYjCckQSflwAv6R2KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BHX0CUby5ZKXK%2Fywq3AO4XjKS02FUhB7wrPXEq9DSnDBsR%2Bg%2BCJO9rnMOmgqFRbp8ng76DCNIIE8Nd8xsmL4GXYnvHDt6bWX4ZW2WKTazf8QneA4vMSMER8JoN9rUIxBxM8GbUXfNHnNaYEgwJ5lJYWVlR3wHLmWjWiRyMRKgMq0ogi2IeaSEI%2BuMJpVH6q73aVb%2Fvh6HAZOBAIQXuV60NDCkdcYEL%2FARQsgXO7PT2yM8mR%2BsSkzWhSfvBzku3UyBikWOBlgI74qb556zRc3KEf2EcmUTGH0NY2BMefZ5L2Zfi6bRcliewRfZwoLAoApNP9PldhYSuSabl4itEUjRksW4BXDdn8PxJdzmaXe9HZ34F3hT9U4Zlv9Q7%2Bicw%2B2RlxUzlLJCqHRlC%2FljPtyhftdbqjyo70QkYc%2FJe3KvCTp7GMLZPX4tUHJjYsLe1X0xssAyfVWcIGXyUKOFaRVS2dAGwqr45hI0SgIXSwxjh77fIfUUpfwYNwtspIJv1uIL5Y4NHjfhdZIrJhjxlKRtgpnWX8dYVMx20ktcIsdW6M4NMjpwgfF6djw%2BNqmSC%2BCzkAjPoq6mMYN2ZSYnUkewpD5l76cGsce%2BfIlLc9AqivOBd9c37XEafuH%2Fznpo7s9mSErYDCAM4pO5ezDM7qrBBjqkASpvV6a7%2B23iS6KD%2FD2C8G8EsQBBInMcBx1K1r2FJVPrRecqqUD6CM0eehl2bfa0uAYtQSJCxDQ%2FzNQupm6XF8EDTSORrSwOTWaFR0ywZUC4wLmglaSvUwSOoMD%2FaGXAllrQ3h50Mr1QcgHxnTcALKnkJiei2yCLS4DzU8fgFI8IhdQ0xwBQzei3UTzBbCgVJJGC5dQcPfa63%2FuMP7uj%2Fte8V8qx&X-Amz-Signature=5d82d40a6867c1d179658bbc995bfa94098f4cd22191a0e0f7909eda3a6f73a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSHZQLW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLpbHBSEPjmFWaW0RYM3YF5MJgYEx1Pgbwp7oA67nBPgIhANHpwLD%2F6vJ9UBl%2FkMktJDOzHWCwPYjCckQSflwAv6R2KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BHX0CUby5ZKXK%2Fywq3AO4XjKS02FUhB7wrPXEq9DSnDBsR%2Bg%2BCJO9rnMOmgqFRbp8ng76DCNIIE8Nd8xsmL4GXYnvHDt6bWX4ZW2WKTazf8QneA4vMSMER8JoN9rUIxBxM8GbUXfNHnNaYEgwJ5lJYWVlR3wHLmWjWiRyMRKgMq0ogi2IeaSEI%2BuMJpVH6q73aVb%2Fvh6HAZOBAIQXuV60NDCkdcYEL%2FARQsgXO7PT2yM8mR%2BsSkzWhSfvBzku3UyBikWOBlgI74qb556zRc3KEf2EcmUTGH0NY2BMefZ5L2Zfi6bRcliewRfZwoLAoApNP9PldhYSuSabl4itEUjRksW4BXDdn8PxJdzmaXe9HZ34F3hT9U4Zlv9Q7%2Bicw%2B2RlxUzlLJCqHRlC%2FljPtyhftdbqjyo70QkYc%2FJe3KvCTp7GMLZPX4tUHJjYsLe1X0xssAyfVWcIGXyUKOFaRVS2dAGwqr45hI0SgIXSwxjh77fIfUUpfwYNwtspIJv1uIL5Y4NHjfhdZIrJhjxlKRtgpnWX8dYVMx20ktcIsdW6M4NMjpwgfF6djw%2BNqmSC%2BCzkAjPoq6mMYN2ZSYnUkewpD5l76cGsce%2BfIlLc9AqivOBd9c37XEafuH%2Fznpo7s9mSErYDCAM4pO5ezDM7qrBBjqkASpvV6a7%2B23iS6KD%2FD2C8G8EsQBBInMcBx1K1r2FJVPrRecqqUD6CM0eehl2bfa0uAYtQSJCxDQ%2FzNQupm6XF8EDTSORrSwOTWaFR0ywZUC4wLmglaSvUwSOoMD%2FaGXAllrQ3h50Mr1QcgHxnTcALKnkJiei2yCLS4DzU8fgFI8IhdQ0xwBQzei3UTzBbCgVJJGC5dQcPfa63%2FuMP7uj%2Fte8V8qx&X-Amz-Signature=28a4349596dc7c481f3053661e2c362806e786df5880d42b6bcdbe4c3e797a70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXSHZQLW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLpbHBSEPjmFWaW0RYM3YF5MJgYEx1Pgbwp7oA67nBPgIhANHpwLD%2F6vJ9UBl%2FkMktJDOzHWCwPYjCckQSflwAv6R2KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BHX0CUby5ZKXK%2Fywq3AO4XjKS02FUhB7wrPXEq9DSnDBsR%2Bg%2BCJO9rnMOmgqFRbp8ng76DCNIIE8Nd8xsmL4GXYnvHDt6bWX4ZW2WKTazf8QneA4vMSMER8JoN9rUIxBxM8GbUXfNHnNaYEgwJ5lJYWVlR3wHLmWjWiRyMRKgMq0ogi2IeaSEI%2BuMJpVH6q73aVb%2Fvh6HAZOBAIQXuV60NDCkdcYEL%2FARQsgXO7PT2yM8mR%2BsSkzWhSfvBzku3UyBikWOBlgI74qb556zRc3KEf2EcmUTGH0NY2BMefZ5L2Zfi6bRcliewRfZwoLAoApNP9PldhYSuSabl4itEUjRksW4BXDdn8PxJdzmaXe9HZ34F3hT9U4Zlv9Q7%2Bicw%2B2RlxUzlLJCqHRlC%2FljPtyhftdbqjyo70QkYc%2FJe3KvCTp7GMLZPX4tUHJjYsLe1X0xssAyfVWcIGXyUKOFaRVS2dAGwqr45hI0SgIXSwxjh77fIfUUpfwYNwtspIJv1uIL5Y4NHjfhdZIrJhjxlKRtgpnWX8dYVMx20ktcIsdW6M4NMjpwgfF6djw%2BNqmSC%2BCzkAjPoq6mMYN2ZSYnUkewpD5l76cGsce%2BfIlLc9AqivOBd9c37XEafuH%2Fznpo7s9mSErYDCAM4pO5ezDM7qrBBjqkASpvV6a7%2B23iS6KD%2FD2C8G8EsQBBInMcBx1K1r2FJVPrRecqqUD6CM0eehl2bfa0uAYtQSJCxDQ%2FzNQupm6XF8EDTSORrSwOTWaFR0ywZUC4wLmglaSvUwSOoMD%2FaGXAllrQ3h50Mr1QcgHxnTcALKnkJiei2yCLS4DzU8fgFI8IhdQ0xwBQzei3UTzBbCgVJJGC5dQcPfa63%2FuMP7uj%2Fte8V8qx&X-Amz-Signature=749b1faa5539c0ce49aabf9569d8aecac8c079eefd514c5edfeb9ea781d43188&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
