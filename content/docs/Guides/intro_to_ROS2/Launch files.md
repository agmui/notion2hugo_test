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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2AKLUW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtQkTcWggs9lx1qzwIQahgnV39rrbOZxiG%2FFa3iIB%2FxAiAIyjJC96NsmFrAmfrqUp03IYk0Is1EjCHexEtk0oRyESqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2FQvH2NSOZEaTIXrKtwDPWRswt3B43Z%2BfCGg%2BqlsMql46xgyyb1ebAgx%2BGE745sUF9gGWcMU%2By%2FMQY4bjT7MDBuyZ%2FqcEMvT6AN4KnctsY4vblK0hmIgxThzhVHTPKGKaKfnarvyaoFAztTbq%2B%2F80RJkaVwRmkL9o3lwiM5Y45qRlOD7gVFl9W8akVX5vjBm9CT6F0Ej7mYcsrdSrDhlMJEGZpweu8C9C%2Fd2N3OCzJqO7KHUYwZKAZs3w%2F3lKcXRMBkeJW5UEX2F%2FdZV%2FR3q9VifQPl%2FU3Gs1lPmKrtFQqOaOf1uY4j7yBmu0aW2V%2BcwGw%2F05GFy9NYVulmWEdsuAEnaN56dGP2NkL32eB%2FOfZwjPLX1%2BgwKeUwdjhWbZQfV6GajYUg2BKR7n9arPo5BB%2FF%2BI1Rq6Cr2cJGYVjj%2FlPTEcyNHaJbAQkrwLLGzYMsnup4uGnaps5E0lBfdOuv30HVWP5NCSyqnRBVBLFYqyBFeU6WEwyXacDO7863G7vR1BvZyuWSptAXXH6njbpkfN38DERZyIF9Plg3zqh%2Fk6krGzOTCSJLMDsqfk2%2BWuUa0qep0ZlZTiCktVI43jSInAvmG9nS2izKC93IY5jdnCaW6nuMm2fQ6Wyp%2Fk%2BgbjyJ5CSa7NbZF%2FLMgUrgwkv6FvwY6pgFFcXEzZ%2Ba%2BgzGf4isUGbAVQOuv5iu5gJBRKWZ06ih5c%2FUU%2Bsbv7OEl7yXbE2%2BoxZYALiM%2BvF%2BpYZdqpwq%2FA9QWGDDeOG%2BpUZmrwrtndiuBXN7j9%2F39CNE%2FeRvMyXgc%2BKJPBP4mvh2ZLV8cYoLluQQccR%2FzUwjDNOSSAbSWYhhKf2o8SZwL19HB6o6s9uXcBeTehoHJm8w97S9c5Wb%2BZm03YCmRVXwA&X-Amz-Signature=b219f1e375d8a9b949a626371579ae2127515a636aa5a75910a8ffe4d1dec048&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2AKLUW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtQkTcWggs9lx1qzwIQahgnV39rrbOZxiG%2FFa3iIB%2FxAiAIyjJC96NsmFrAmfrqUp03IYk0Is1EjCHexEtk0oRyESqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2FQvH2NSOZEaTIXrKtwDPWRswt3B43Z%2BfCGg%2BqlsMql46xgyyb1ebAgx%2BGE745sUF9gGWcMU%2By%2FMQY4bjT7MDBuyZ%2FqcEMvT6AN4KnctsY4vblK0hmIgxThzhVHTPKGKaKfnarvyaoFAztTbq%2B%2F80RJkaVwRmkL9o3lwiM5Y45qRlOD7gVFl9W8akVX5vjBm9CT6F0Ej7mYcsrdSrDhlMJEGZpweu8C9C%2Fd2N3OCzJqO7KHUYwZKAZs3w%2F3lKcXRMBkeJW5UEX2F%2FdZV%2FR3q9VifQPl%2FU3Gs1lPmKrtFQqOaOf1uY4j7yBmu0aW2V%2BcwGw%2F05GFy9NYVulmWEdsuAEnaN56dGP2NkL32eB%2FOfZwjPLX1%2BgwKeUwdjhWbZQfV6GajYUg2BKR7n9arPo5BB%2FF%2BI1Rq6Cr2cJGYVjj%2FlPTEcyNHaJbAQkrwLLGzYMsnup4uGnaps5E0lBfdOuv30HVWP5NCSyqnRBVBLFYqyBFeU6WEwyXacDO7863G7vR1BvZyuWSptAXXH6njbpkfN38DERZyIF9Plg3zqh%2Fk6krGzOTCSJLMDsqfk2%2BWuUa0qep0ZlZTiCktVI43jSInAvmG9nS2izKC93IY5jdnCaW6nuMm2fQ6Wyp%2Fk%2BgbjyJ5CSa7NbZF%2FLMgUrgwkv6FvwY6pgFFcXEzZ%2Ba%2BgzGf4isUGbAVQOuv5iu5gJBRKWZ06ih5c%2FUU%2Bsbv7OEl7yXbE2%2BoxZYALiM%2BvF%2BpYZdqpwq%2FA9QWGDDeOG%2BpUZmrwrtndiuBXN7j9%2F39CNE%2FeRvMyXgc%2BKJPBP4mvh2ZLV8cYoLluQQccR%2FzUwjDNOSSAbSWYhhKf2o8SZwL19HB6o6s9uXcBeTehoHJm8w97S9c5Wb%2BZm03YCmRVXwA&X-Amz-Signature=c9728df7df3278f0716592c9b305ec6ed6370548c50746853aea6f7767627a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2AKLUW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtQkTcWggs9lx1qzwIQahgnV39rrbOZxiG%2FFa3iIB%2FxAiAIyjJC96NsmFrAmfrqUp03IYk0Is1EjCHexEtk0oRyESqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2FQvH2NSOZEaTIXrKtwDPWRswt3B43Z%2BfCGg%2BqlsMql46xgyyb1ebAgx%2BGE745sUF9gGWcMU%2By%2FMQY4bjT7MDBuyZ%2FqcEMvT6AN4KnctsY4vblK0hmIgxThzhVHTPKGKaKfnarvyaoFAztTbq%2B%2F80RJkaVwRmkL9o3lwiM5Y45qRlOD7gVFl9W8akVX5vjBm9CT6F0Ej7mYcsrdSrDhlMJEGZpweu8C9C%2Fd2N3OCzJqO7KHUYwZKAZs3w%2F3lKcXRMBkeJW5UEX2F%2FdZV%2FR3q9VifQPl%2FU3Gs1lPmKrtFQqOaOf1uY4j7yBmu0aW2V%2BcwGw%2F05GFy9NYVulmWEdsuAEnaN56dGP2NkL32eB%2FOfZwjPLX1%2BgwKeUwdjhWbZQfV6GajYUg2BKR7n9arPo5BB%2FF%2BI1Rq6Cr2cJGYVjj%2FlPTEcyNHaJbAQkrwLLGzYMsnup4uGnaps5E0lBfdOuv30HVWP5NCSyqnRBVBLFYqyBFeU6WEwyXacDO7863G7vR1BvZyuWSptAXXH6njbpkfN38DERZyIF9Plg3zqh%2Fk6krGzOTCSJLMDsqfk2%2BWuUa0qep0ZlZTiCktVI43jSInAvmG9nS2izKC93IY5jdnCaW6nuMm2fQ6Wyp%2Fk%2BgbjyJ5CSa7NbZF%2FLMgUrgwkv6FvwY6pgFFcXEzZ%2Ba%2BgzGf4isUGbAVQOuv5iu5gJBRKWZ06ih5c%2FUU%2Bsbv7OEl7yXbE2%2BoxZYALiM%2BvF%2BpYZdqpwq%2FA9QWGDDeOG%2BpUZmrwrtndiuBXN7j9%2F39CNE%2FeRvMyXgc%2BKJPBP4mvh2ZLV8cYoLluQQccR%2FzUwjDNOSSAbSWYhhKf2o8SZwL19HB6o6s9uXcBeTehoHJm8w97S9c5Wb%2BZm03YCmRVXwA&X-Amz-Signature=d26c1e675e4c33463697765c83d7d08f05a7f289b4f75fb4ae1904a43b5a302c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
