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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDJI3QA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdbrE2S%2BMTqHwSyUNq19DvPLx6%2FpzMxX2XzERj9qo%2BQIhAMDp%2FEL27j1xI7A1pXyhXiz%2Bnv3LSV3QITDH%2BZJkEdmeKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw4VSPiTsBsRIZVpEq3APUa0NKe0R0PRVPqsCbVqEFrupbZy0sVzQOcHPXah0yDffy5ZWDVF3bZN7Cg%2BKsdEom%2BBt8FLxWrlAXL71lThzGOJjTBTrlyYZpz534zs3y8w71vOM%2FON5dfARMhVIymifAFqZdoYWWXc3%2Fm5%2B9zp60FQAI25YBD1aAjBUgsXazsV6CVOTv%2Bi8cJGeD7tPHLkOqmk9nJkazeMv5rmnsXOZ0To4hNRatBDnywNSrnjlYmsT1LMXz4HOq3HK%2F5J%2F1lD0K3CalmKzarA%2F3nJtO0r%2BFN8vBAYwGW6YfdgpmIV%2BXdgCvf8oVUhyqhTBrqimhR%2BuADrBjRrRXjy3wkmYlV3WzyHJgN9PT5FYzHI6GghHGcdz4wCBLujXPbaqrQzz7DSm5Up7p6NVsgqx3CL7sLSvf2QeQtOU0dYdecV6z2NdA1zBnYVjgAjC6RZ%2FRBFR2KAscJXZujJqgozDZW9%2FE3WgNmgN2wIXgV4MV7LUpIa2ssKgGxPLy1Ik6dault5hmEHBMAwYi9lolpRJ19xGOHdQM6Ip5nUHsHxLmmhxXk22KRQQkU5Wy8gn3t5FHecdCyxE3eU1WxgxKOWwuot%2F3gqzUDJSosPpkFp%2F77OoF7L%2BAk5LGauGSo2G9wph%2B5DCthem8BjqkAaQ02aFS0gBQaNkVwQqh9BQcqnImrTnyU00ZZVQFJS9FgFZHZDUCXCOUx%2FxxfqcUjnkhxzvolaQD4otLNs2QtUQPOaWqv9SARQTWGr6alOk97vBSLFc%2BOsrsnytUZCz9gd%2Busk58%2B8hz0UJby1XcyX5u111loh2A43foRuolO33CbxCwmzZTvHZSccv%2B88ZRqpwM6pc%2BynOGE0m0HbwNuD2rMwFA&X-Amz-Signature=520bf7d1d3c0b34e7260f54da5c71dd07f8dd53ca5c04a7a1c3754e21f992c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDJI3QA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdbrE2S%2BMTqHwSyUNq19DvPLx6%2FpzMxX2XzERj9qo%2BQIhAMDp%2FEL27j1xI7A1pXyhXiz%2Bnv3LSV3QITDH%2BZJkEdmeKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw4VSPiTsBsRIZVpEq3APUa0NKe0R0PRVPqsCbVqEFrupbZy0sVzQOcHPXah0yDffy5ZWDVF3bZN7Cg%2BKsdEom%2BBt8FLxWrlAXL71lThzGOJjTBTrlyYZpz534zs3y8w71vOM%2FON5dfARMhVIymifAFqZdoYWWXc3%2Fm5%2B9zp60FQAI25YBD1aAjBUgsXazsV6CVOTv%2Bi8cJGeD7tPHLkOqmk9nJkazeMv5rmnsXOZ0To4hNRatBDnywNSrnjlYmsT1LMXz4HOq3HK%2F5J%2F1lD0K3CalmKzarA%2F3nJtO0r%2BFN8vBAYwGW6YfdgpmIV%2BXdgCvf8oVUhyqhTBrqimhR%2BuADrBjRrRXjy3wkmYlV3WzyHJgN9PT5FYzHI6GghHGcdz4wCBLujXPbaqrQzz7DSm5Up7p6NVsgqx3CL7sLSvf2QeQtOU0dYdecV6z2NdA1zBnYVjgAjC6RZ%2FRBFR2KAscJXZujJqgozDZW9%2FE3WgNmgN2wIXgV4MV7LUpIa2ssKgGxPLy1Ik6dault5hmEHBMAwYi9lolpRJ19xGOHdQM6Ip5nUHsHxLmmhxXk22KRQQkU5Wy8gn3t5FHecdCyxE3eU1WxgxKOWwuot%2F3gqzUDJSosPpkFp%2F77OoF7L%2BAk5LGauGSo2G9wph%2B5DCthem8BjqkAaQ02aFS0gBQaNkVwQqh9BQcqnImrTnyU00ZZVQFJS9FgFZHZDUCXCOUx%2FxxfqcUjnkhxzvolaQD4otLNs2QtUQPOaWqv9SARQTWGr6alOk97vBSLFc%2BOsrsnytUZCz9gd%2Busk58%2B8hz0UJby1XcyX5u111loh2A43foRuolO33CbxCwmzZTvHZSccv%2B88ZRqpwM6pc%2BynOGE0m0HbwNuD2rMwFA&X-Amz-Signature=c419a1e2ad6ce1786dfd6804b71ddf6a371bfc609ecd39b470e98e6416bc27e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDJI3QA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdbrE2S%2BMTqHwSyUNq19DvPLx6%2FpzMxX2XzERj9qo%2BQIhAMDp%2FEL27j1xI7A1pXyhXiz%2Bnv3LSV3QITDH%2BZJkEdmeKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzw4VSPiTsBsRIZVpEq3APUa0NKe0R0PRVPqsCbVqEFrupbZy0sVzQOcHPXah0yDffy5ZWDVF3bZN7Cg%2BKsdEom%2BBt8FLxWrlAXL71lThzGOJjTBTrlyYZpz534zs3y8w71vOM%2FON5dfARMhVIymifAFqZdoYWWXc3%2Fm5%2B9zp60FQAI25YBD1aAjBUgsXazsV6CVOTv%2Bi8cJGeD7tPHLkOqmk9nJkazeMv5rmnsXOZ0To4hNRatBDnywNSrnjlYmsT1LMXz4HOq3HK%2F5J%2F1lD0K3CalmKzarA%2F3nJtO0r%2BFN8vBAYwGW6YfdgpmIV%2BXdgCvf8oVUhyqhTBrqimhR%2BuADrBjRrRXjy3wkmYlV3WzyHJgN9PT5FYzHI6GghHGcdz4wCBLujXPbaqrQzz7DSm5Up7p6NVsgqx3CL7sLSvf2QeQtOU0dYdecV6z2NdA1zBnYVjgAjC6RZ%2FRBFR2KAscJXZujJqgozDZW9%2FE3WgNmgN2wIXgV4MV7LUpIa2ssKgGxPLy1Ik6dault5hmEHBMAwYi9lolpRJ19xGOHdQM6Ip5nUHsHxLmmhxXk22KRQQkU5Wy8gn3t5FHecdCyxE3eU1WxgxKOWwuot%2F3gqzUDJSosPpkFp%2F77OoF7L%2BAk5LGauGSo2G9wph%2B5DCthem8BjqkAaQ02aFS0gBQaNkVwQqh9BQcqnImrTnyU00ZZVQFJS9FgFZHZDUCXCOUx%2FxxfqcUjnkhxzvolaQD4otLNs2QtUQPOaWqv9SARQTWGr6alOk97vBSLFc%2BOsrsnytUZCz9gd%2Busk58%2B8hz0UJby1XcyX5u111loh2A43foRuolO33CbxCwmzZTvHZSccv%2B88ZRqpwM6pc%2BynOGE0m0HbwNuD2rMwFA&X-Amz-Signature=17ce4e5c11a9734a0be3b49cffde5f790adb6c16ef5f7a97610e7c710b2d7206&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
