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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIILAFHA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPjvGwbONAe3oN8bkC9d%2BSPZKSV3EC8aVVKpEpcWk34AiEAxiPZH%2FkAmzB95%2FjMt3fzOoIF7nErFp8UppFksqJ7yW8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHnRSff0L2HYVeaHMCrcA7ZKa4jtNnldV1qXNOP6S%2FL3rAQ8chArzsGV0xaAWk%2Fzq5389iHhHpLXAHimpeNVNdjhCekivaVHz%2FuckZReflUI7DGockvItYRU4tu2z6hgcWex0FeEdLzQ4%2FG2HX3niQbWN9JjYBi7WvdJ5a19WJNjdARdXpO5H1%2BSHemEUYhuCK4b%2Bs%2F2xd8zcYzaRje%2FgxbElZodC5Sgr%2BxzMCMnOMmn6j3P58nfHMT%2FznzbaxJrnwN4z6G0OtrL22A4NC0tqkda0eeDdnDtaigijKkC1%2FMqXbBiEQYyLke7XakD3h5fGjB71K5TkA%2BCsIdz5eqtVJarjrChw%2BO1IbjcdiY9BufwnuBR41axaT1GNdv6hbjuHSj0YDedrsS7HeJYa6Z8udjJgn3wp%2BvlIGqUFUTgjrTy6j36BAkVtMzEqrsL0qLVjt6ZNNZNRlHvZ0cGMEuijwcbeWXfAtCsqJF61Jv97ZCcgV19M%2Bt8BkWwceW81BPYQtbx0n%2FLuSkQ%2BOcaZCH90XPoyU%2FvXSjIsAcHeNuClzNungvAzAcSBEmgUfevy2iRugaYhhHKUSUos8bBB6ufmxSHAvP2VUlm6wpXwVOFPzSOIpBfQZ7%2FQgbJI%2BnKf%2B0NZsbbU1b2o8Ls6%2BWTMNLkscAGOqUBZGk4EsnLjpM10l2w8fnH4wTUQt%2BDdljxVIWPesja%2FmphGCafT24ipSUIa1BJRfGuh%2BBLhPo1%2Fwnvx0Eq2t7uPInkJ5sou10%2BwdMfhXZhU9dRDloVx%2FnFpPoJCpzWj3OitWy3TBIGKEaHo6JpkD0pPfae%2Bt2VqqzH%2FCTqMJpEDN1NgGBpsdIJAqJtI03mLteDClxIdcYt7e2Q3GeDSXFYu09Pw5I0&X-Amz-Signature=901d04688eca9cd38b59b6c101624e3de49edf7ac273173e7140f5c70c5bfc42&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIILAFHA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPjvGwbONAe3oN8bkC9d%2BSPZKSV3EC8aVVKpEpcWk34AiEAxiPZH%2FkAmzB95%2FjMt3fzOoIF7nErFp8UppFksqJ7yW8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHnRSff0L2HYVeaHMCrcA7ZKa4jtNnldV1qXNOP6S%2FL3rAQ8chArzsGV0xaAWk%2Fzq5389iHhHpLXAHimpeNVNdjhCekivaVHz%2FuckZReflUI7DGockvItYRU4tu2z6hgcWex0FeEdLzQ4%2FG2HX3niQbWN9JjYBi7WvdJ5a19WJNjdARdXpO5H1%2BSHemEUYhuCK4b%2Bs%2F2xd8zcYzaRje%2FgxbElZodC5Sgr%2BxzMCMnOMmn6j3P58nfHMT%2FznzbaxJrnwN4z6G0OtrL22A4NC0tqkda0eeDdnDtaigijKkC1%2FMqXbBiEQYyLke7XakD3h5fGjB71K5TkA%2BCsIdz5eqtVJarjrChw%2BO1IbjcdiY9BufwnuBR41axaT1GNdv6hbjuHSj0YDedrsS7HeJYa6Z8udjJgn3wp%2BvlIGqUFUTgjrTy6j36BAkVtMzEqrsL0qLVjt6ZNNZNRlHvZ0cGMEuijwcbeWXfAtCsqJF61Jv97ZCcgV19M%2Bt8BkWwceW81BPYQtbx0n%2FLuSkQ%2BOcaZCH90XPoyU%2FvXSjIsAcHeNuClzNungvAzAcSBEmgUfevy2iRugaYhhHKUSUos8bBB6ufmxSHAvP2VUlm6wpXwVOFPzSOIpBfQZ7%2FQgbJI%2BnKf%2B0NZsbbU1b2o8Ls6%2BWTMNLkscAGOqUBZGk4EsnLjpM10l2w8fnH4wTUQt%2BDdljxVIWPesja%2FmphGCafT24ipSUIa1BJRfGuh%2BBLhPo1%2Fwnvx0Eq2t7uPInkJ5sou10%2BwdMfhXZhU9dRDloVx%2FnFpPoJCpzWj3OitWy3TBIGKEaHo6JpkD0pPfae%2Bt2VqqzH%2FCTqMJpEDN1NgGBpsdIJAqJtI03mLteDClxIdcYt7e2Q3GeDSXFYu09Pw5I0&X-Amz-Signature=ed083f4962fab9250c58c9e60ec099ee9783b77b83a8a8220a5edff530c8c7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIILAFHA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPjvGwbONAe3oN8bkC9d%2BSPZKSV3EC8aVVKpEpcWk34AiEAxiPZH%2FkAmzB95%2FjMt3fzOoIF7nErFp8UppFksqJ7yW8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHnRSff0L2HYVeaHMCrcA7ZKa4jtNnldV1qXNOP6S%2FL3rAQ8chArzsGV0xaAWk%2Fzq5389iHhHpLXAHimpeNVNdjhCekivaVHz%2FuckZReflUI7DGockvItYRU4tu2z6hgcWex0FeEdLzQ4%2FG2HX3niQbWN9JjYBi7WvdJ5a19WJNjdARdXpO5H1%2BSHemEUYhuCK4b%2Bs%2F2xd8zcYzaRje%2FgxbElZodC5Sgr%2BxzMCMnOMmn6j3P58nfHMT%2FznzbaxJrnwN4z6G0OtrL22A4NC0tqkda0eeDdnDtaigijKkC1%2FMqXbBiEQYyLke7XakD3h5fGjB71K5TkA%2BCsIdz5eqtVJarjrChw%2BO1IbjcdiY9BufwnuBR41axaT1GNdv6hbjuHSj0YDedrsS7HeJYa6Z8udjJgn3wp%2BvlIGqUFUTgjrTy6j36BAkVtMzEqrsL0qLVjt6ZNNZNRlHvZ0cGMEuijwcbeWXfAtCsqJF61Jv97ZCcgV19M%2Bt8BkWwceW81BPYQtbx0n%2FLuSkQ%2BOcaZCH90XPoyU%2FvXSjIsAcHeNuClzNungvAzAcSBEmgUfevy2iRugaYhhHKUSUos8bBB6ufmxSHAvP2VUlm6wpXwVOFPzSOIpBfQZ7%2FQgbJI%2BnKf%2B0NZsbbU1b2o8Ls6%2BWTMNLkscAGOqUBZGk4EsnLjpM10l2w8fnH4wTUQt%2BDdljxVIWPesja%2FmphGCafT24ipSUIa1BJRfGuh%2BBLhPo1%2Fwnvx0Eq2t7uPInkJ5sou10%2BwdMfhXZhU9dRDloVx%2FnFpPoJCpzWj3OitWy3TBIGKEaHo6JpkD0pPfae%2Bt2VqqzH%2FCTqMJpEDN1NgGBpsdIJAqJtI03mLteDClxIdcYt7e2Q3GeDSXFYu09Pw5I0&X-Amz-Signature=d01ea572e48ed10ab008496f9eae6bfb9de9dc94bef2c26772a654b8400d0545&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
