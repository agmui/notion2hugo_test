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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HL6ZDP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBuYpS4NMr3yo%2Bjd%2FOOXxeh3RLukXlUmsTZsiDQLTUOaAiAbbmOa5BQha%2FMDvetHRIiuZZUkQt1PLQfj4RWb9u6lCiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgMGKGycD0HM5f3w6KtwDUoz1X6G812xSQWFCj420My8tDSgkDY2v7SJwt9mC5EbaHXUnTblhQM3tBzLPW9Foxbu7MvgIL1n3lxXe5oC14MMLNDtbt31mNnZLU6P0SME4%2BUGzyKo1oJBDJkZgM7shPTL8jrVIvPhG0Lrxt3esiS8YQECba8Q75%2F9%2BZefAYHmuL9zdTBcf%2BbjCu5HR0pWeljmuTQ8IZxtGlCJkqQHkBvHYpT0z4f7adIIXgCfDpIMtgsFy88%2FzfrUNZ8qKARL2%2FePFtrc4yGsVbU9bOcOApwyPcDbnwAub5YcrzCaK6l%2FRhCNjAQ6ZxHV4gF1VXJX11fsJZzh6IznatIz0lQDorw2zUxxLfM1Cc03GK7yLaZM3BxWZPnl7NJs3J89I3MAe%2BiQueYHI2rooLBkrCdIhUrJiUyiow8MCFK6h0t%2FePV2NWfjwY1xYe64TY6RltZoZnhoDD%2FDlvhcoZ5IxIp7h9NP823sMLSWRd65GHQBavYADHPW6jx2Yg8B6Tk7QwF6PJV%2B3OaSm3uikZZPlxKQIwzKdq53nNRuenKXJPGtWMzXL85OFldz%2BLsc1RaGQ6W2nVdPY2Ecm9Sjp0rW1Vy1AAucAQzVm5loxDIXuIcy4yQhsIZFtjada7N97%2BRkwraStvwY6pgEC4kup%2BD2nlN57nyI%2FDxSGmnxhTvbPDhmyd%2Fuwq4EYT62lDiLMZ3qUEbGtPUzQ2paH%2BtQ%2BCRDuf%2FjEXNyywy9FPvKjDF%2BEYDCEei5YJ6XWPs6WkQo1lC%2F90p1cjp50AXbqJOgcUUsf2M8C18N5q3NBiii0H5SGJ3ejKQZcO0XrNLbnO82PUm5dioWFvaCJM9bh03i18qYOJpUyfGlR%2BUjxpxMdDVhn&X-Amz-Signature=d3a67254b2497e58798de396b4bd215126732f7972a94d19e921672e8daf2058&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HL6ZDP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBuYpS4NMr3yo%2Bjd%2FOOXxeh3RLukXlUmsTZsiDQLTUOaAiAbbmOa5BQha%2FMDvetHRIiuZZUkQt1PLQfj4RWb9u6lCiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgMGKGycD0HM5f3w6KtwDUoz1X6G812xSQWFCj420My8tDSgkDY2v7SJwt9mC5EbaHXUnTblhQM3tBzLPW9Foxbu7MvgIL1n3lxXe5oC14MMLNDtbt31mNnZLU6P0SME4%2BUGzyKo1oJBDJkZgM7shPTL8jrVIvPhG0Lrxt3esiS8YQECba8Q75%2F9%2BZefAYHmuL9zdTBcf%2BbjCu5HR0pWeljmuTQ8IZxtGlCJkqQHkBvHYpT0z4f7adIIXgCfDpIMtgsFy88%2FzfrUNZ8qKARL2%2FePFtrc4yGsVbU9bOcOApwyPcDbnwAub5YcrzCaK6l%2FRhCNjAQ6ZxHV4gF1VXJX11fsJZzh6IznatIz0lQDorw2zUxxLfM1Cc03GK7yLaZM3BxWZPnl7NJs3J89I3MAe%2BiQueYHI2rooLBkrCdIhUrJiUyiow8MCFK6h0t%2FePV2NWfjwY1xYe64TY6RltZoZnhoDD%2FDlvhcoZ5IxIp7h9NP823sMLSWRd65GHQBavYADHPW6jx2Yg8B6Tk7QwF6PJV%2B3OaSm3uikZZPlxKQIwzKdq53nNRuenKXJPGtWMzXL85OFldz%2BLsc1RaGQ6W2nVdPY2Ecm9Sjp0rW1Vy1AAucAQzVm5loxDIXuIcy4yQhsIZFtjada7N97%2BRkwraStvwY6pgEC4kup%2BD2nlN57nyI%2FDxSGmnxhTvbPDhmyd%2Fuwq4EYT62lDiLMZ3qUEbGtPUzQ2paH%2BtQ%2BCRDuf%2FjEXNyywy9FPvKjDF%2BEYDCEei5YJ6XWPs6WkQo1lC%2F90p1cjp50AXbqJOgcUUsf2M8C18N5q3NBiii0H5SGJ3ejKQZcO0XrNLbnO82PUm5dioWFvaCJM9bh03i18qYOJpUyfGlR%2BUjxpxMdDVhn&X-Amz-Signature=1e96deda44665607dc1a32af0c759ff32db5e74fe1921cc076087d100da9e842&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HL6ZDP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBuYpS4NMr3yo%2Bjd%2FOOXxeh3RLukXlUmsTZsiDQLTUOaAiAbbmOa5BQha%2FMDvetHRIiuZZUkQt1PLQfj4RWb9u6lCiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgMGKGycD0HM5f3w6KtwDUoz1X6G812xSQWFCj420My8tDSgkDY2v7SJwt9mC5EbaHXUnTblhQM3tBzLPW9Foxbu7MvgIL1n3lxXe5oC14MMLNDtbt31mNnZLU6P0SME4%2BUGzyKo1oJBDJkZgM7shPTL8jrVIvPhG0Lrxt3esiS8YQECba8Q75%2F9%2BZefAYHmuL9zdTBcf%2BbjCu5HR0pWeljmuTQ8IZxtGlCJkqQHkBvHYpT0z4f7adIIXgCfDpIMtgsFy88%2FzfrUNZ8qKARL2%2FePFtrc4yGsVbU9bOcOApwyPcDbnwAub5YcrzCaK6l%2FRhCNjAQ6ZxHV4gF1VXJX11fsJZzh6IznatIz0lQDorw2zUxxLfM1Cc03GK7yLaZM3BxWZPnl7NJs3J89I3MAe%2BiQueYHI2rooLBkrCdIhUrJiUyiow8MCFK6h0t%2FePV2NWfjwY1xYe64TY6RltZoZnhoDD%2FDlvhcoZ5IxIp7h9NP823sMLSWRd65GHQBavYADHPW6jx2Yg8B6Tk7QwF6PJV%2B3OaSm3uikZZPlxKQIwzKdq53nNRuenKXJPGtWMzXL85OFldz%2BLsc1RaGQ6W2nVdPY2Ecm9Sjp0rW1Vy1AAucAQzVm5loxDIXuIcy4yQhsIZFtjada7N97%2BRkwraStvwY6pgEC4kup%2BD2nlN57nyI%2FDxSGmnxhTvbPDhmyd%2Fuwq4EYT62lDiLMZ3qUEbGtPUzQ2paH%2BtQ%2BCRDuf%2FjEXNyywy9FPvKjDF%2BEYDCEei5YJ6XWPs6WkQo1lC%2F90p1cjp50AXbqJOgcUUsf2M8C18N5q3NBiii0H5SGJ3ejKQZcO0XrNLbnO82PUm5dioWFvaCJM9bh03i18qYOJpUyfGlR%2BUjxpxMdDVhn&X-Amz-Signature=14dc2c9dbeaf81e61d558a1b41dc1cad41918fdfa035137813f59e6fc8eae77e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
