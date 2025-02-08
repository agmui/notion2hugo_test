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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZY73OXJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2F8m5KPicg2EY87QHqFLVmxK3S1e3mwKCt1lcuAFVu7AiAs76c3TOCS9gAVoAtEbnvFvvtaDKhRNXWS%2Fvjh8dFQLCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqTEaY21I0J9Q8dSKtwDADWHjHl2d7JxAJKBrN5roUf5FcRE5DMvQt9xUn0nMvijXKFDfzBFUvHU03AINAM4bujYnxJ5f3QyVAKtnEJHQz3MJMvuMR6lc5xQrdE80YYlqld5Ek5tL7l9hEAtLT3WnkxT%2FtPWDt82XwUbLUnn%2BZCIWhSIpTOiHHt2bSSuqsekHNsRk8KyrYOqR7h%2BSRQTDnD7BGHfRHLJiBQob1dR2zcrEwvAkHuXIxtt08vSAmemvzvRn4%2BAL6VsYLp%2BTlUMmCNO9kQvu%2BLiygptORqcyjPAZzi3%2BAqCy9GjOEicE8VxfdYbppFlcD67kUtSACiCzt5I6%2B3LP4QvgW9SdbQAaZSLnfW0Sf1pumwxSFLIkInhMohe0%2B%2F%2BdORIKnfFWesDrFVLy0s9%2BEXpaT%2BRebcB1R6hy5ocWVpa6xwa0gUnHgXsyZIQOJlg4k005B4u%2F6rEZTB71g9AL8bQO7cMxnoxb3sb5xrsTgcpzO%2FYcElKywvHgJJk7lJEVQPawoNA%2BAEb5mPQW6Xkaseqhsh9aUTfI1%2F6oJVGdsNeRjnb5HfEUkGJKE7RW2xZod3Wd%2Fo80jlGp%2Fkno4g752NgF3syaq3WkGbO7%2BIO%2BFceTGZSwXUT4Il%2BsOQLjwDUvV3C9%2FMw17ObvQY6pgFjPGuwLvOb2YZNlsJTsmrjGdln7jlZbwIb3esXVDHJL%2BIdqdkhesnUqCSUwD9xrxGv8HY%2FY7SkhiRuTbIPE76lZCgrrt5zYDcx7YbShQ6Ziu5kmVaylV6uKY1Insl4LSB3ZeFQg9uMfKz%2BJmLv5rfMB8NIjTk5OS7W%2BYx0LkjNl2JOozGBB1CDgw2%2FUEZdC1xixlYDcLXUz3VLE6TtdG%2FDFmqH1qX5&X-Amz-Signature=1021056e33da739b9d517a3243acc7e91375dfdb9799830c8c86d61f652ac7af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZY73OXJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2F8m5KPicg2EY87QHqFLVmxK3S1e3mwKCt1lcuAFVu7AiAs76c3TOCS9gAVoAtEbnvFvvtaDKhRNXWS%2Fvjh8dFQLCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqTEaY21I0J9Q8dSKtwDADWHjHl2d7JxAJKBrN5roUf5FcRE5DMvQt9xUn0nMvijXKFDfzBFUvHU03AINAM4bujYnxJ5f3QyVAKtnEJHQz3MJMvuMR6lc5xQrdE80YYlqld5Ek5tL7l9hEAtLT3WnkxT%2FtPWDt82XwUbLUnn%2BZCIWhSIpTOiHHt2bSSuqsekHNsRk8KyrYOqR7h%2BSRQTDnD7BGHfRHLJiBQob1dR2zcrEwvAkHuXIxtt08vSAmemvzvRn4%2BAL6VsYLp%2BTlUMmCNO9kQvu%2BLiygptORqcyjPAZzi3%2BAqCy9GjOEicE8VxfdYbppFlcD67kUtSACiCzt5I6%2B3LP4QvgW9SdbQAaZSLnfW0Sf1pumwxSFLIkInhMohe0%2B%2F%2BdORIKnfFWesDrFVLy0s9%2BEXpaT%2BRebcB1R6hy5ocWVpa6xwa0gUnHgXsyZIQOJlg4k005B4u%2F6rEZTB71g9AL8bQO7cMxnoxb3sb5xrsTgcpzO%2FYcElKywvHgJJk7lJEVQPawoNA%2BAEb5mPQW6Xkaseqhsh9aUTfI1%2F6oJVGdsNeRjnb5HfEUkGJKE7RW2xZod3Wd%2Fo80jlGp%2Fkno4g752NgF3syaq3WkGbO7%2BIO%2BFceTGZSwXUT4Il%2BsOQLjwDUvV3C9%2FMw17ObvQY6pgFjPGuwLvOb2YZNlsJTsmrjGdln7jlZbwIb3esXVDHJL%2BIdqdkhesnUqCSUwD9xrxGv8HY%2FY7SkhiRuTbIPE76lZCgrrt5zYDcx7YbShQ6Ziu5kmVaylV6uKY1Insl4LSB3ZeFQg9uMfKz%2BJmLv5rfMB8NIjTk5OS7W%2BYx0LkjNl2JOozGBB1CDgw2%2FUEZdC1xixlYDcLXUz3VLE6TtdG%2FDFmqH1qX5&X-Amz-Signature=4732e7fa58d814144fb3728a5b255c4a0fab706553c6bfd17bf4ec2c8f8d178c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZY73OXJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIA%2F8m5KPicg2EY87QHqFLVmxK3S1e3mwKCt1lcuAFVu7AiAs76c3TOCS9gAVoAtEbnvFvvtaDKhRNXWS%2Fvjh8dFQLCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqTEaY21I0J9Q8dSKtwDADWHjHl2d7JxAJKBrN5roUf5FcRE5DMvQt9xUn0nMvijXKFDfzBFUvHU03AINAM4bujYnxJ5f3QyVAKtnEJHQz3MJMvuMR6lc5xQrdE80YYlqld5Ek5tL7l9hEAtLT3WnkxT%2FtPWDt82XwUbLUnn%2BZCIWhSIpTOiHHt2bSSuqsekHNsRk8KyrYOqR7h%2BSRQTDnD7BGHfRHLJiBQob1dR2zcrEwvAkHuXIxtt08vSAmemvzvRn4%2BAL6VsYLp%2BTlUMmCNO9kQvu%2BLiygptORqcyjPAZzi3%2BAqCy9GjOEicE8VxfdYbppFlcD67kUtSACiCzt5I6%2B3LP4QvgW9SdbQAaZSLnfW0Sf1pumwxSFLIkInhMohe0%2B%2F%2BdORIKnfFWesDrFVLy0s9%2BEXpaT%2BRebcB1R6hy5ocWVpa6xwa0gUnHgXsyZIQOJlg4k005B4u%2F6rEZTB71g9AL8bQO7cMxnoxb3sb5xrsTgcpzO%2FYcElKywvHgJJk7lJEVQPawoNA%2BAEb5mPQW6Xkaseqhsh9aUTfI1%2F6oJVGdsNeRjnb5HfEUkGJKE7RW2xZod3Wd%2Fo80jlGp%2Fkno4g752NgF3syaq3WkGbO7%2BIO%2BFceTGZSwXUT4Il%2BsOQLjwDUvV3C9%2FMw17ObvQY6pgFjPGuwLvOb2YZNlsJTsmrjGdln7jlZbwIb3esXVDHJL%2BIdqdkhesnUqCSUwD9xrxGv8HY%2FY7SkhiRuTbIPE76lZCgrrt5zYDcx7YbShQ6Ziu5kmVaylV6uKY1Insl4LSB3ZeFQg9uMfKz%2BJmLv5rfMB8NIjTk5OS7W%2BYx0LkjNl2JOozGBB1CDgw2%2FUEZdC1xixlYDcLXUz3VLE6TtdG%2FDFmqH1qX5&X-Amz-Signature=bc77fd42c873b14e98fa3f8a1af816ef43367c03c2408f786ff45f7a5f77bed4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
