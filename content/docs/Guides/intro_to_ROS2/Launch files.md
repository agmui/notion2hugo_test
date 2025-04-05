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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJIWSHN6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyKK9E1ZeEkppf%2B0ubAI%2FdDPKIGZsTcS8f1VgGvi8LswIhAMKqyGqQMBwMaHU7eQ8N%2FAE57%2FKArYL8WviqDMapHwReKv8DCCoQABoMNjM3NDIzMTgzODA1IgyPoVFkf6ebUX9ez14q3AMap4KzVCJ34Xv50CDcSY1%2FN1bIcl%2FQzCSE04i8dXpOwYVJLphCiar8rxKJ8fQF55deQ95Nr5cjOsV3JbyEAgs0Nt5njcOFcoAjZRMaye7QgFKvmBJtPorqM7nWFQhzBt7La%2BtyMr8Van14V%2B6CvFOAECNO7e9Rlo0HifzF9sqzYrhlynZFr0pIwP3QuBJ2i1M%2FU2rbVMbQkCcFy8v3xoW%2FKHoM2USqbI8clnVqcu3daavEN8JsnItD5ypPHvAqaPL8ZGSIxq0bInS2f%2FLYQ2xJDzLUu3MZ8CWleUgD3lqeRfBJY%2Btkz30mDDEuSqC2%2BIdwLCsYxDZQb37QRHx6ndiCxZLhGlopq4TUEDsgEx%2Fz4Ub%2FJ36kUxmoDvjk7%2FnXoHpTnO3ZoHtQ%2BtjM4ZdzQiX%2F6rbUacyAvFofLvejXjlbdzjONlnXeTQPSy8cdjGGMscpwh3LJTsUlBeXxlOMBEwnmIlpUlJrB3FTU%2B769wvw3za8E6xeUC0qwZllIYGkahS2GuMjWrzFj%2B1L%2FnDn8IAVhogbGat5%2BAIYSU%2Fej5YaKDY16vKF9arn4VvEjytHRTOfDe6hucx%2F4o4ikvDZptxrBw55FO67Y%2FysCqYHHuIJ1fvPf3TOPjLqP9PewzCB5MO%2FBjqkAZ8JsJUJp9xjus1t%2B%2BIf0r2lAMFbvc5kkvOfJsipj7GlvFpObjQKqQAP%2Fijk366y1GISoZZkKmV0V1by4GMdUWwGd8AfKJ5tBry1KhK6cFsYjEwo6WHlxCson4miBH7hbCYfMDkKb7h3H3Ici21X0pobgEfWMZpZ9uNYJdknjsCsgYNjU3eocVbf1KvLiiy14UNdoMgOSLv8Dawk8yqcOnP3pJ7v&X-Amz-Signature=81df4d0e3f84210afe606bba44a3ede143a51f378bf90eefbc095834afd299e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJIWSHN6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyKK9E1ZeEkppf%2B0ubAI%2FdDPKIGZsTcS8f1VgGvi8LswIhAMKqyGqQMBwMaHU7eQ8N%2FAE57%2FKArYL8WviqDMapHwReKv8DCCoQABoMNjM3NDIzMTgzODA1IgyPoVFkf6ebUX9ez14q3AMap4KzVCJ34Xv50CDcSY1%2FN1bIcl%2FQzCSE04i8dXpOwYVJLphCiar8rxKJ8fQF55deQ95Nr5cjOsV3JbyEAgs0Nt5njcOFcoAjZRMaye7QgFKvmBJtPorqM7nWFQhzBt7La%2BtyMr8Van14V%2B6CvFOAECNO7e9Rlo0HifzF9sqzYrhlynZFr0pIwP3QuBJ2i1M%2FU2rbVMbQkCcFy8v3xoW%2FKHoM2USqbI8clnVqcu3daavEN8JsnItD5ypPHvAqaPL8ZGSIxq0bInS2f%2FLYQ2xJDzLUu3MZ8CWleUgD3lqeRfBJY%2Btkz30mDDEuSqC2%2BIdwLCsYxDZQb37QRHx6ndiCxZLhGlopq4TUEDsgEx%2Fz4Ub%2FJ36kUxmoDvjk7%2FnXoHpTnO3ZoHtQ%2BtjM4ZdzQiX%2F6rbUacyAvFofLvejXjlbdzjONlnXeTQPSy8cdjGGMscpwh3LJTsUlBeXxlOMBEwnmIlpUlJrB3FTU%2B769wvw3za8E6xeUC0qwZllIYGkahS2GuMjWrzFj%2B1L%2FnDn8IAVhogbGat5%2BAIYSU%2Fej5YaKDY16vKF9arn4VvEjytHRTOfDe6hucx%2F4o4ikvDZptxrBw55FO67Y%2FysCqYHHuIJ1fvPf3TOPjLqP9PewzCB5MO%2FBjqkAZ8JsJUJp9xjus1t%2B%2BIf0r2lAMFbvc5kkvOfJsipj7GlvFpObjQKqQAP%2Fijk366y1GISoZZkKmV0V1by4GMdUWwGd8AfKJ5tBry1KhK6cFsYjEwo6WHlxCson4miBH7hbCYfMDkKb7h3H3Ici21X0pobgEfWMZpZ9uNYJdknjsCsgYNjU3eocVbf1KvLiiy14UNdoMgOSLv8Dawk8yqcOnP3pJ7v&X-Amz-Signature=abf4e4da7ffbfdae4d26ccc11563daded1ff5e8853ce3eff66c5361c603c757b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJIWSHN6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyKK9E1ZeEkppf%2B0ubAI%2FdDPKIGZsTcS8f1VgGvi8LswIhAMKqyGqQMBwMaHU7eQ8N%2FAE57%2FKArYL8WviqDMapHwReKv8DCCoQABoMNjM3NDIzMTgzODA1IgyPoVFkf6ebUX9ez14q3AMap4KzVCJ34Xv50CDcSY1%2FN1bIcl%2FQzCSE04i8dXpOwYVJLphCiar8rxKJ8fQF55deQ95Nr5cjOsV3JbyEAgs0Nt5njcOFcoAjZRMaye7QgFKvmBJtPorqM7nWFQhzBt7La%2BtyMr8Van14V%2B6CvFOAECNO7e9Rlo0HifzF9sqzYrhlynZFr0pIwP3QuBJ2i1M%2FU2rbVMbQkCcFy8v3xoW%2FKHoM2USqbI8clnVqcu3daavEN8JsnItD5ypPHvAqaPL8ZGSIxq0bInS2f%2FLYQ2xJDzLUu3MZ8CWleUgD3lqeRfBJY%2Btkz30mDDEuSqC2%2BIdwLCsYxDZQb37QRHx6ndiCxZLhGlopq4TUEDsgEx%2Fz4Ub%2FJ36kUxmoDvjk7%2FnXoHpTnO3ZoHtQ%2BtjM4ZdzQiX%2F6rbUacyAvFofLvejXjlbdzjONlnXeTQPSy8cdjGGMscpwh3LJTsUlBeXxlOMBEwnmIlpUlJrB3FTU%2B769wvw3za8E6xeUC0qwZllIYGkahS2GuMjWrzFj%2B1L%2FnDn8IAVhogbGat5%2BAIYSU%2Fej5YaKDY16vKF9arn4VvEjytHRTOfDe6hucx%2F4o4ikvDZptxrBw55FO67Y%2FysCqYHHuIJ1fvPf3TOPjLqP9PewzCB5MO%2FBjqkAZ8JsJUJp9xjus1t%2B%2BIf0r2lAMFbvc5kkvOfJsipj7GlvFpObjQKqQAP%2Fijk366y1GISoZZkKmV0V1by4GMdUWwGd8AfKJ5tBry1KhK6cFsYjEwo6WHlxCson4miBH7hbCYfMDkKb7h3H3Ici21X0pobgEfWMZpZ9uNYJdknjsCsgYNjU3eocVbf1KvLiiy14UNdoMgOSLv8Dawk8yqcOnP3pJ7v&X-Amz-Signature=9527c19a27a6d232534e616bb200558fc890c514f018e660533cd20b7d871d87&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
