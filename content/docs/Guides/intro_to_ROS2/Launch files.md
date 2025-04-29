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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUKOSGZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0TxyHuZWJC%2FJfpocyPwLMMTZYKQNs3vj2okvkJjMTAiB5dmafxErjr4dN8LuXEADcoxtsGvETj%2F7QJ2YFYL16XCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BriWW1ZIWkCHVLEJKtwDwAmEm5JTKbzcKaGn5dctGlPjDpkVvDzPK7TxrCs58MvIif9JhH9Q77C0%2BFQ%2F9AGCVfrqmI0IaJdXP8wogh%2BB2ZiZ3frBk0CfO6d0Ik6XzRugmuqq3RwX7niAwIUwQ83x6G3ApSOJxciLxt9385541mD8NksPxIFssfn6VFJL6uI1rMdaxlo%2BVYd1SkmjclUWdgXUmzL5I8MT1U3JqU8vsAArJc44LVHaMhyR2Fb7%2F%2B%2BU6HwlJqtdvzHN0lSxR59KsZJ4ySi3s1K4rcLIUeAObZPJY8HS3U3yb7QYLTnj6XS2zSS1iLJ9I9pRsaj2PxFpwKPEKdFk7AAVPg6eCr2L0OXFYtK1JbvcPuiu5VerjtW3EvwaGhWTQxFZMI%2BxdZD4hnO9w%2BTl%2Fah57Wq0b6b8TBvHipFFjkPlJ29%2FitdusVqtxva9tg5W8wYiFTW4YatnPPCJ6WDpEY9Z4jkCvs7FNujjJ0XmGWYV9c%2F0sv1ZlzhURD7Pa187pLYwJhSj0BoR%2B47MOxOpvNAAg%2B%2BT4pSgScFSriIIjyAdihmG14DYwGMGzf1Z4qXSimr8ekrLRLZY2hTKzGWvcLvkz%2Fr9tDF8arDetPBXsTlfPSgUDNh8Gku3SxuTaWpPdyGEgmcwmffDwAY6pgHO3HIJqGK7h12uasz4v%2Bqz1HjSseun7ahZCMWKwetAx%2FJF4DseI48p5yJqK5qG8Z9VlDrhpaW%2BtS8grJR9TkLE4eOWuD4sIE1FrJL2PCoPsGqrvahPkxZQGxmK%2BvB2JfNpffcVNiu8eqZ73Fp94hEXlTJSrf2GWFUPaaDqnxIrLUbehNCs8U61F62kf7vINmLP13O5d%2F%2BWjekON%2F77Xix6GZ6Bqv1h&X-Amz-Signature=f26f3b288ca405cb01fa77d8137e1010a3c194b23f494338c1417b69c9083916&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUKOSGZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0TxyHuZWJC%2FJfpocyPwLMMTZYKQNs3vj2okvkJjMTAiB5dmafxErjr4dN8LuXEADcoxtsGvETj%2F7QJ2YFYL16XCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BriWW1ZIWkCHVLEJKtwDwAmEm5JTKbzcKaGn5dctGlPjDpkVvDzPK7TxrCs58MvIif9JhH9Q77C0%2BFQ%2F9AGCVfrqmI0IaJdXP8wogh%2BB2ZiZ3frBk0CfO6d0Ik6XzRugmuqq3RwX7niAwIUwQ83x6G3ApSOJxciLxt9385541mD8NksPxIFssfn6VFJL6uI1rMdaxlo%2BVYd1SkmjclUWdgXUmzL5I8MT1U3JqU8vsAArJc44LVHaMhyR2Fb7%2F%2B%2BU6HwlJqtdvzHN0lSxR59KsZJ4ySi3s1K4rcLIUeAObZPJY8HS3U3yb7QYLTnj6XS2zSS1iLJ9I9pRsaj2PxFpwKPEKdFk7AAVPg6eCr2L0OXFYtK1JbvcPuiu5VerjtW3EvwaGhWTQxFZMI%2BxdZD4hnO9w%2BTl%2Fah57Wq0b6b8TBvHipFFjkPlJ29%2FitdusVqtxva9tg5W8wYiFTW4YatnPPCJ6WDpEY9Z4jkCvs7FNujjJ0XmGWYV9c%2F0sv1ZlzhURD7Pa187pLYwJhSj0BoR%2B47MOxOpvNAAg%2B%2BT4pSgScFSriIIjyAdihmG14DYwGMGzf1Z4qXSimr8ekrLRLZY2hTKzGWvcLvkz%2Fr9tDF8arDetPBXsTlfPSgUDNh8Gku3SxuTaWpPdyGEgmcwmffDwAY6pgHO3HIJqGK7h12uasz4v%2Bqz1HjSseun7ahZCMWKwetAx%2FJF4DseI48p5yJqK5qG8Z9VlDrhpaW%2BtS8grJR9TkLE4eOWuD4sIE1FrJL2PCoPsGqrvahPkxZQGxmK%2BvB2JfNpffcVNiu8eqZ73Fp94hEXlTJSrf2GWFUPaaDqnxIrLUbehNCs8U61F62kf7vINmLP13O5d%2F%2BWjekON%2F77Xix6GZ6Bqv1h&X-Amz-Signature=a99a65845015453ea409fb64f71060bc8e27befd0b56bb258ee7b41657de8872&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUKOSGZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0TxyHuZWJC%2FJfpocyPwLMMTZYKQNs3vj2okvkJjMTAiB5dmafxErjr4dN8LuXEADcoxtsGvETj%2F7QJ2YFYL16XCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BriWW1ZIWkCHVLEJKtwDwAmEm5JTKbzcKaGn5dctGlPjDpkVvDzPK7TxrCs58MvIif9JhH9Q77C0%2BFQ%2F9AGCVfrqmI0IaJdXP8wogh%2BB2ZiZ3frBk0CfO6d0Ik6XzRugmuqq3RwX7niAwIUwQ83x6G3ApSOJxciLxt9385541mD8NksPxIFssfn6VFJL6uI1rMdaxlo%2BVYd1SkmjclUWdgXUmzL5I8MT1U3JqU8vsAArJc44LVHaMhyR2Fb7%2F%2B%2BU6HwlJqtdvzHN0lSxR59KsZJ4ySi3s1K4rcLIUeAObZPJY8HS3U3yb7QYLTnj6XS2zSS1iLJ9I9pRsaj2PxFpwKPEKdFk7AAVPg6eCr2L0OXFYtK1JbvcPuiu5VerjtW3EvwaGhWTQxFZMI%2BxdZD4hnO9w%2BTl%2Fah57Wq0b6b8TBvHipFFjkPlJ29%2FitdusVqtxva9tg5W8wYiFTW4YatnPPCJ6WDpEY9Z4jkCvs7FNujjJ0XmGWYV9c%2F0sv1ZlzhURD7Pa187pLYwJhSj0BoR%2B47MOxOpvNAAg%2B%2BT4pSgScFSriIIjyAdihmG14DYwGMGzf1Z4qXSimr8ekrLRLZY2hTKzGWvcLvkz%2Fr9tDF8arDetPBXsTlfPSgUDNh8Gku3SxuTaWpPdyGEgmcwmffDwAY6pgHO3HIJqGK7h12uasz4v%2Bqz1HjSseun7ahZCMWKwetAx%2FJF4DseI48p5yJqK5qG8Z9VlDrhpaW%2BtS8grJR9TkLE4eOWuD4sIE1FrJL2PCoPsGqrvahPkxZQGxmK%2BvB2JfNpffcVNiu8eqZ73Fp94hEXlTJSrf2GWFUPaaDqnxIrLUbehNCs8U61F62kf7vINmLP13O5d%2F%2BWjekON%2F77Xix6GZ6Bqv1h&X-Amz-Signature=d83dff1c9d1c4e0f5bcf37fa1aabace3cd84d3a2c1ac2867ec7b5c67e91c241b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
