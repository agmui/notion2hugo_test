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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QA2JGO7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEBXi1TVCKqQSueLNCO7G0Pyxmk6WHXSYo9PucbikV%2FeAiAlcP%2FjVazas7ahrvUHjmrcJQ6BGZXWVQdGiYns8lHGSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQsAAxfZeoMeHZF6oKtwDeUh9WTqY556s5Om%2F962r7037H6nbJEc%2BxySnnVy6ziz7ODiDz8NHFChdRWXf178ol3BZIDuegbeB7ZCe6E8uPYIghSNmxzUK9wOavPwvmeAo686xqVxYwIyZt%2B%2B%2BgrXYDxwqSDv%2BLTTMM6hBpMliW3IF%2BovEWMibn%2BsmLqGx73NXxIjXw3vvmEI2JCPmlh1cmEY9zYOF1FU4MTjQlJ1%2BXtafIG2LypFKt9lucjjtZi6tuKOR0gzsc6FlrU4EMXpKM87KBKgcZdlZpn%2B3zLWOZZYHYWH1N37VaZUuUkwdoUNMNE8SXEARwuzHwvxJkp1sdQUO8TCXU8WD0NT1uagBpNgN4UdWI%2F3%2FnJc2407y9mvy1Re8RUuuMeW81KrBGCxdIhX6gHPi3HvxF6dRQNxbpncdNluU7bLCuCByJ%2FmZYqShrGPQqErtFZ3FEZQkaM37N871ye72f5ZuYwuy8kIQulwk%2Fe29k7L8BVhWMhLn4CcrBssxg6PJCihJU%2FIaDgvKoZOwladL3cSms4lVerV%2F42Z2M3pcCkagy%2BaYQSp9%2FUJdZDp0vduveQXaMzU0eLKEeJbBsGs96Jxd7OgtqChzScY%2FAr7629uKUHraTw8vd61dDVQxB3sQbS%2FadW0wwMDWvwY6pgGDkBMs%2FA5Ls%2BDI5UlLj0GwhTAaTM9xuy7ifnJkQlOKMfs9jOOzUK24NQTCyDKln96lVgeA1RgwiSr0NNCBIzdzbjpduoaCv06Ar%2FVLUWrJVbSapJLauECPDpUmEV4rNEQR1SSnQVzFcCYykxEPoK66NokDv6x0T2r%2BOaUS5gC4WnMaAYWpUqGAUx%2Ff74bGEJE9w6TglQshQO4LeTASdjnlbsLnoi%2F5&X-Amz-Signature=e8da317b102f919579e4a715b56c2621ce4beeadba0374d59d06f41fcc67ff2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QA2JGO7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEBXi1TVCKqQSueLNCO7G0Pyxmk6WHXSYo9PucbikV%2FeAiAlcP%2FjVazas7ahrvUHjmrcJQ6BGZXWVQdGiYns8lHGSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQsAAxfZeoMeHZF6oKtwDeUh9WTqY556s5Om%2F962r7037H6nbJEc%2BxySnnVy6ziz7ODiDz8NHFChdRWXf178ol3BZIDuegbeB7ZCe6E8uPYIghSNmxzUK9wOavPwvmeAo686xqVxYwIyZt%2B%2B%2BgrXYDxwqSDv%2BLTTMM6hBpMliW3IF%2BovEWMibn%2BsmLqGx73NXxIjXw3vvmEI2JCPmlh1cmEY9zYOF1FU4MTjQlJ1%2BXtafIG2LypFKt9lucjjtZi6tuKOR0gzsc6FlrU4EMXpKM87KBKgcZdlZpn%2B3zLWOZZYHYWH1N37VaZUuUkwdoUNMNE8SXEARwuzHwvxJkp1sdQUO8TCXU8WD0NT1uagBpNgN4UdWI%2F3%2FnJc2407y9mvy1Re8RUuuMeW81KrBGCxdIhX6gHPi3HvxF6dRQNxbpncdNluU7bLCuCByJ%2FmZYqShrGPQqErtFZ3FEZQkaM37N871ye72f5ZuYwuy8kIQulwk%2Fe29k7L8BVhWMhLn4CcrBssxg6PJCihJU%2FIaDgvKoZOwladL3cSms4lVerV%2F42Z2M3pcCkagy%2BaYQSp9%2FUJdZDp0vduveQXaMzU0eLKEeJbBsGs96Jxd7OgtqChzScY%2FAr7629uKUHraTw8vd61dDVQxB3sQbS%2FadW0wwMDWvwY6pgGDkBMs%2FA5Ls%2BDI5UlLj0GwhTAaTM9xuy7ifnJkQlOKMfs9jOOzUK24NQTCyDKln96lVgeA1RgwiSr0NNCBIzdzbjpduoaCv06Ar%2FVLUWrJVbSapJLauECPDpUmEV4rNEQR1SSnQVzFcCYykxEPoK66NokDv6x0T2r%2BOaUS5gC4WnMaAYWpUqGAUx%2Ff74bGEJE9w6TglQshQO4LeTASdjnlbsLnoi%2F5&X-Amz-Signature=937c29a90916082447d87a620bee499f1b7dba48463e25007ac211cd10b6ab49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QA2JGO7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEBXi1TVCKqQSueLNCO7G0Pyxmk6WHXSYo9PucbikV%2FeAiAlcP%2FjVazas7ahrvUHjmrcJQ6BGZXWVQdGiYns8lHGSSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQsAAxfZeoMeHZF6oKtwDeUh9WTqY556s5Om%2F962r7037H6nbJEc%2BxySnnVy6ziz7ODiDz8NHFChdRWXf178ol3BZIDuegbeB7ZCe6E8uPYIghSNmxzUK9wOavPwvmeAo686xqVxYwIyZt%2B%2B%2BgrXYDxwqSDv%2BLTTMM6hBpMliW3IF%2BovEWMibn%2BsmLqGx73NXxIjXw3vvmEI2JCPmlh1cmEY9zYOF1FU4MTjQlJ1%2BXtafIG2LypFKt9lucjjtZi6tuKOR0gzsc6FlrU4EMXpKM87KBKgcZdlZpn%2B3zLWOZZYHYWH1N37VaZUuUkwdoUNMNE8SXEARwuzHwvxJkp1sdQUO8TCXU8WD0NT1uagBpNgN4UdWI%2F3%2FnJc2407y9mvy1Re8RUuuMeW81KrBGCxdIhX6gHPi3HvxF6dRQNxbpncdNluU7bLCuCByJ%2FmZYqShrGPQqErtFZ3FEZQkaM37N871ye72f5ZuYwuy8kIQulwk%2Fe29k7L8BVhWMhLn4CcrBssxg6PJCihJU%2FIaDgvKoZOwladL3cSms4lVerV%2F42Z2M3pcCkagy%2BaYQSp9%2FUJdZDp0vduveQXaMzU0eLKEeJbBsGs96Jxd7OgtqChzScY%2FAr7629uKUHraTw8vd61dDVQxB3sQbS%2FadW0wwMDWvwY6pgGDkBMs%2FA5Ls%2BDI5UlLj0GwhTAaTM9xuy7ifnJkQlOKMfs9jOOzUK24NQTCyDKln96lVgeA1RgwiSr0NNCBIzdzbjpduoaCv06Ar%2FVLUWrJVbSapJLauECPDpUmEV4rNEQR1SSnQVzFcCYykxEPoK66NokDv6x0T2r%2BOaUS5gC4WnMaAYWpUqGAUx%2Ff74bGEJE9w6TglQshQO4LeTASdjnlbsLnoi%2F5&X-Amz-Signature=ad833506da8993a151ae8966c37b1460b9402ba5a87a9e906f0d0232a24d2003&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
