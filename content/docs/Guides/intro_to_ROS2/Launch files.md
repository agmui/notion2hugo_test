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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX7VGPK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVp7hJa4ANkYnWyeM6cXDu4VuzKj79RmAw5%2FXbMi53rAiBkDauuTEa0FjyTlxLi36RbGZVH18xsPuIf9UJ9itFrNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMIg7JLBvwKKjyYfneKtwDQuHnMmiDLoo42jMMS%2BNBULIarXynWeQkqd0CsYP%2Fv20OGjXCLN7mX%2F0d5za5ZrZ2W3wVgcyZ9SZJouohwT7he%2FqaPius5GrpapEsiZQm0b8Gp6cKmfK4Yr67OdUnlb%2FOfgsfZc%2B6UWXf%2FDBrJwXvv148oAYJKGFAPgfouLx2VP3m8Mq4RRAFYoCFcl%2F%2F%2FIy7BoH49bz4oxP46e71iYIIy4k84EhEerpClZNql43b%2FIX9nXtTienjwPCJcBjo2DhQoUaXiqdUo%2BNuyGb%2BQXNLgDrwH3E%2B3UycJoqTU3gdUcvN8L%2BwXVGIU6NPblGWShv9RkFMeMdA9owbkXayMCQh51TSr3auMoBkTeJLYsFO4TBQObV76yWTkfPHWmG%2FisFr2enm933sqrFNlKOTXeGqxSbL4sD1svOAR7KNz9pAphhWM%2F0lXGYnBgW9XjcdM5TkZ7aYKrmIJem5M%2Bdc6sfsINSeOdL2WAdtc%2FKuCR9ZbgROi634xD3KdX4HNke9I4aEJ4WP9uKmVznlwpelsD%2FLVl6QQdg7W%2Ba6ojuC5LOLsfLcne4NrMMQo2hnnYu7l47%2BmTKr1WK46388CKwBihQVvtuB2VfPBfBKeBfSLYIcnqSutVwScNjN0U%2FH4BswkenjvgY6pgHFR3zCuZnbTlW3Ywy4P%2BVH0D%2FQ8H1Fngd1%2F9xFyTmdN3X1sx7Qq%2BW7c5dkQJu61c%2Bz%2FXgjrnKleiHgktlM%2BoF8Zp2RXA%2BDIRCYrZAHj10%2B2WKA440OIgWIFxxWJExr7lHf06BbtQGqpOq0LLRO%2BMUAKQB9ZxaUsCxJQ1QMbD1cvN4IuLs4PqGJJEZ8iYxEYVpHy0zPgchAof4iz9kPOjIrtlOcRW59&X-Amz-Signature=547316042ec84caea60e3336c7c85bd941813cbac9e09048d577bebcb9ae4ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX7VGPK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVp7hJa4ANkYnWyeM6cXDu4VuzKj79RmAw5%2FXbMi53rAiBkDauuTEa0FjyTlxLi36RbGZVH18xsPuIf9UJ9itFrNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMIg7JLBvwKKjyYfneKtwDQuHnMmiDLoo42jMMS%2BNBULIarXynWeQkqd0CsYP%2Fv20OGjXCLN7mX%2F0d5za5ZrZ2W3wVgcyZ9SZJouohwT7he%2FqaPius5GrpapEsiZQm0b8Gp6cKmfK4Yr67OdUnlb%2FOfgsfZc%2B6UWXf%2FDBrJwXvv148oAYJKGFAPgfouLx2VP3m8Mq4RRAFYoCFcl%2F%2F%2FIy7BoH49bz4oxP46e71iYIIy4k84EhEerpClZNql43b%2FIX9nXtTienjwPCJcBjo2DhQoUaXiqdUo%2BNuyGb%2BQXNLgDrwH3E%2B3UycJoqTU3gdUcvN8L%2BwXVGIU6NPblGWShv9RkFMeMdA9owbkXayMCQh51TSr3auMoBkTeJLYsFO4TBQObV76yWTkfPHWmG%2FisFr2enm933sqrFNlKOTXeGqxSbL4sD1svOAR7KNz9pAphhWM%2F0lXGYnBgW9XjcdM5TkZ7aYKrmIJem5M%2Bdc6sfsINSeOdL2WAdtc%2FKuCR9ZbgROi634xD3KdX4HNke9I4aEJ4WP9uKmVznlwpelsD%2FLVl6QQdg7W%2Ba6ojuC5LOLsfLcne4NrMMQo2hnnYu7l47%2BmTKr1WK46388CKwBihQVvtuB2VfPBfBKeBfSLYIcnqSutVwScNjN0U%2FH4BswkenjvgY6pgHFR3zCuZnbTlW3Ywy4P%2BVH0D%2FQ8H1Fngd1%2F9xFyTmdN3X1sx7Qq%2BW7c5dkQJu61c%2Bz%2FXgjrnKleiHgktlM%2BoF8Zp2RXA%2BDIRCYrZAHj10%2B2WKA440OIgWIFxxWJExr7lHf06BbtQGqpOq0LLRO%2BMUAKQB9ZxaUsCxJQ1QMbD1cvN4IuLs4PqGJJEZ8iYxEYVpHy0zPgchAof4iz9kPOjIrtlOcRW59&X-Amz-Signature=64ea2d4a3b0e23812b1095571b6de9f44ba999f968a45f4dc483a91f06a6cd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX7VGPK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVp7hJa4ANkYnWyeM6cXDu4VuzKj79RmAw5%2FXbMi53rAiBkDauuTEa0FjyTlxLi36RbGZVH18xsPuIf9UJ9itFrNyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMIg7JLBvwKKjyYfneKtwDQuHnMmiDLoo42jMMS%2BNBULIarXynWeQkqd0CsYP%2Fv20OGjXCLN7mX%2F0d5za5ZrZ2W3wVgcyZ9SZJouohwT7he%2FqaPius5GrpapEsiZQm0b8Gp6cKmfK4Yr67OdUnlb%2FOfgsfZc%2B6UWXf%2FDBrJwXvv148oAYJKGFAPgfouLx2VP3m8Mq4RRAFYoCFcl%2F%2F%2FIy7BoH49bz4oxP46e71iYIIy4k84EhEerpClZNql43b%2FIX9nXtTienjwPCJcBjo2DhQoUaXiqdUo%2BNuyGb%2BQXNLgDrwH3E%2B3UycJoqTU3gdUcvN8L%2BwXVGIU6NPblGWShv9RkFMeMdA9owbkXayMCQh51TSr3auMoBkTeJLYsFO4TBQObV76yWTkfPHWmG%2FisFr2enm933sqrFNlKOTXeGqxSbL4sD1svOAR7KNz9pAphhWM%2F0lXGYnBgW9XjcdM5TkZ7aYKrmIJem5M%2Bdc6sfsINSeOdL2WAdtc%2FKuCR9ZbgROi634xD3KdX4HNke9I4aEJ4WP9uKmVznlwpelsD%2FLVl6QQdg7W%2Ba6ojuC5LOLsfLcne4NrMMQo2hnnYu7l47%2BmTKr1WK46388CKwBihQVvtuB2VfPBfBKeBfSLYIcnqSutVwScNjN0U%2FH4BswkenjvgY6pgHFR3zCuZnbTlW3Ywy4P%2BVH0D%2FQ8H1Fngd1%2F9xFyTmdN3X1sx7Qq%2BW7c5dkQJu61c%2Bz%2FXgjrnKleiHgktlM%2BoF8Zp2RXA%2BDIRCYrZAHj10%2B2WKA440OIgWIFxxWJExr7lHf06BbtQGqpOq0LLRO%2BMUAKQB9ZxaUsCxJQ1QMbD1cvN4IuLs4PqGJJEZ8iYxEYVpHy0zPgchAof4iz9kPOjIrtlOcRW59&X-Amz-Signature=4aa5be8ca75a82ef2534c77ecb41d42c9ea55773c81b3398ad610de246ba475e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
