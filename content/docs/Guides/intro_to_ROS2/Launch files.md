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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTUGJLI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEJ342%2FBj%2FYQXsw%2F6td6SJ8nxsPJAHqUH%2FF0dK7a7FMuAiBgxSmcSpOELb9%2FaxLbgmfRRg74wcP66yd51AsGNoLXwyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMsrV7yS9EbzHxMQ5GKtwDAPB%2Fk%2B%2FO83KEMzSczM%2FhsQK%2Bg26MyX4nHVYOLCe2jwmJHLwmVmndEPgA19K3cJJnAmzFKrW0Sgr3Ht8XJRrIMur3bq%2B9cGJ8WWtC6RM1xuTn%2FnvKZdn17FP%2FmHeOMT%2BaHk3IPKbFdk2x9dSGvfK8aJ6NZDnaNgs%2BBl49CsZkWoZKMyd8vsLDkK7al84BMLi2lguBSePO1t1V4TwyV6PEF16bxasl7bjNdN9Id4IFYl8lM9JkgAhVyZ2fH8yTXez9HVxwvEDnJ4sU9ZiOErg89zjjpWKofY3bwCgX%2FitDwR7U6nz6tN7NsGNnbtS35InHcD%2FpiGEJu9WdC4rvuDXM2CA%2FHDALS1d53Ill%2FpE561DpiAHvffvNgSeo%2FzcYaEjTMgMHJczrIYKgwy8Ju8dZSt3ptcCbR10PS7BNhHM08xx1PtXWeRTTmxXof3znDd6SbdhFY578JpTZCrfl7p02Ve3BF7Au2sfa97zHSvlOHa98x%2Fzq3BMKzZ5tQGvGfbdNHwVNMC6QbY6lScAx5aUcxyfzzBEjBzuJ1cLrrG2aZjXuFrljEng6IVS1yC77JgEddrhP%2FQ1xN73Piopnvfub2MsRg2ymvlwsUAI7NyBQhZzB7WEOnD7LBRF1OYEwwJrHvQY6pgHM5myZd4J2si8BoFENr%2FfGnqJ50AhTCE7W05dhqQJsIp5X2lUkdFQQ771yX%2FL3yPqIZYVc2lZ27nNybpqX7FfBTcrjVTdL7fxGrErqAKOcN0u%2FwlK9alwLmTCFjjUmuq%2B7N6LUD0lqfl1V4aTZLPSlxGyQuX8unZxxjTsyuU8odZY74u7hrgxiFpicOlzb9%2BDdRr8aN%2BGDnKWODwHNMOCrAvoXHpf3&X-Amz-Signature=4645309cbb407c2147929ae99b8b09b175f89fd5d5623921225e7178130c1773&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTUGJLI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEJ342%2FBj%2FYQXsw%2F6td6SJ8nxsPJAHqUH%2FF0dK7a7FMuAiBgxSmcSpOELb9%2FaxLbgmfRRg74wcP66yd51AsGNoLXwyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMsrV7yS9EbzHxMQ5GKtwDAPB%2Fk%2B%2FO83KEMzSczM%2FhsQK%2Bg26MyX4nHVYOLCe2jwmJHLwmVmndEPgA19K3cJJnAmzFKrW0Sgr3Ht8XJRrIMur3bq%2B9cGJ8WWtC6RM1xuTn%2FnvKZdn17FP%2FmHeOMT%2BaHk3IPKbFdk2x9dSGvfK8aJ6NZDnaNgs%2BBl49CsZkWoZKMyd8vsLDkK7al84BMLi2lguBSePO1t1V4TwyV6PEF16bxasl7bjNdN9Id4IFYl8lM9JkgAhVyZ2fH8yTXez9HVxwvEDnJ4sU9ZiOErg89zjjpWKofY3bwCgX%2FitDwR7U6nz6tN7NsGNnbtS35InHcD%2FpiGEJu9WdC4rvuDXM2CA%2FHDALS1d53Ill%2FpE561DpiAHvffvNgSeo%2FzcYaEjTMgMHJczrIYKgwy8Ju8dZSt3ptcCbR10PS7BNhHM08xx1PtXWeRTTmxXof3znDd6SbdhFY578JpTZCrfl7p02Ve3BF7Au2sfa97zHSvlOHa98x%2Fzq3BMKzZ5tQGvGfbdNHwVNMC6QbY6lScAx5aUcxyfzzBEjBzuJ1cLrrG2aZjXuFrljEng6IVS1yC77JgEddrhP%2FQ1xN73Piopnvfub2MsRg2ymvlwsUAI7NyBQhZzB7WEOnD7LBRF1OYEwwJrHvQY6pgHM5myZd4J2si8BoFENr%2FfGnqJ50AhTCE7W05dhqQJsIp5X2lUkdFQQ771yX%2FL3yPqIZYVc2lZ27nNybpqX7FfBTcrjVTdL7fxGrErqAKOcN0u%2FwlK9alwLmTCFjjUmuq%2B7N6LUD0lqfl1V4aTZLPSlxGyQuX8unZxxjTsyuU8odZY74u7hrgxiFpicOlzb9%2BDdRr8aN%2BGDnKWODwHNMOCrAvoXHpf3&X-Amz-Signature=1a47e7eaebfbfcf77e1343d9fdf5cd32c61fdaeb605184379d5d114df8c2cfc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTUGJLI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEJ342%2FBj%2FYQXsw%2F6td6SJ8nxsPJAHqUH%2FF0dK7a7FMuAiBgxSmcSpOELb9%2FaxLbgmfRRg74wcP66yd51AsGNoLXwyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMsrV7yS9EbzHxMQ5GKtwDAPB%2Fk%2B%2FO83KEMzSczM%2FhsQK%2Bg26MyX4nHVYOLCe2jwmJHLwmVmndEPgA19K3cJJnAmzFKrW0Sgr3Ht8XJRrIMur3bq%2B9cGJ8WWtC6RM1xuTn%2FnvKZdn17FP%2FmHeOMT%2BaHk3IPKbFdk2x9dSGvfK8aJ6NZDnaNgs%2BBl49CsZkWoZKMyd8vsLDkK7al84BMLi2lguBSePO1t1V4TwyV6PEF16bxasl7bjNdN9Id4IFYl8lM9JkgAhVyZ2fH8yTXez9HVxwvEDnJ4sU9ZiOErg89zjjpWKofY3bwCgX%2FitDwR7U6nz6tN7NsGNnbtS35InHcD%2FpiGEJu9WdC4rvuDXM2CA%2FHDALS1d53Ill%2FpE561DpiAHvffvNgSeo%2FzcYaEjTMgMHJczrIYKgwy8Ju8dZSt3ptcCbR10PS7BNhHM08xx1PtXWeRTTmxXof3znDd6SbdhFY578JpTZCrfl7p02Ve3BF7Au2sfa97zHSvlOHa98x%2Fzq3BMKzZ5tQGvGfbdNHwVNMC6QbY6lScAx5aUcxyfzzBEjBzuJ1cLrrG2aZjXuFrljEng6IVS1yC77JgEddrhP%2FQ1xN73Piopnvfub2MsRg2ymvlwsUAI7NyBQhZzB7WEOnD7LBRF1OYEwwJrHvQY6pgHM5myZd4J2si8BoFENr%2FfGnqJ50AhTCE7W05dhqQJsIp5X2lUkdFQQ771yX%2FL3yPqIZYVc2lZ27nNybpqX7FfBTcrjVTdL7fxGrErqAKOcN0u%2FwlK9alwLmTCFjjUmuq%2B7N6LUD0lqfl1V4aTZLPSlxGyQuX8unZxxjTsyuU8odZY74u7hrgxiFpicOlzb9%2BDdRr8aN%2BGDnKWODwHNMOCrAvoXHpf3&X-Amz-Signature=e0a0ee2f1181177930e5e560d4c8f45b885ea716cf443cb2a1fc0dca3fc81ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
