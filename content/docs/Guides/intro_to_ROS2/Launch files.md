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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYKQXGB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrcbNEnR8zX6HsuMpktQ%2Bj0gEoF1%2By%2Bm25HsBnMthi3QIgGRrK%2Bu0DzTGMa2s0zGkzgBHe3KbfxBSm0YG7osZfop8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCbIe5I9MvGrqFSjPyrcAwibZ6ZoBbbt0IFWbcYwqhA3MdIyIZwdFUO4m64oADmlooNBGbGiI0aXL6jtOVwjXthXNmJtu0JFNrBoNSmkC%2B9pe9yYvxD1BpJW1qDGJerPjUu5vXV%2BqpTZeQU%2FiN%2BvraeG0yLP8WbSZFh6qYbTsPd3wA6zAbI34%2FpLgx5rsmu7gDHHT2iWnDdwhemdIVI3SbHXwNfAToue2CN57Ba%2Bwm8APnSF5QT8058KfGsb5OzASxlykS6Kt9uozzrD2QlgWg2vQj8qYlOfelBn2%2Bk2lsDZmveZVkRvmlCh5rB1%2BuoKBOOgzToBYHElSp7zwfR0oj9fneU7RJ18gAQaRkOkmS3TJacmood%2BXQunq1px8DiLwfhjSwacu%2BrF5syUo%2BroBHHUbQUxv56ebLaofNU2hmDFdn%2FuJxv24a87UR9PLkNbOOycqpm4Jkemgtew2YS4WUlnXiLcaDTTxaWc%2BPvHTlpKNP1s97Wm%2Fb9xX5i7UOBkwVFWt0stoWdJl%2Fc%2Bu0aDz8X46z%2Fp34%2BpwqvIjiU0OdIDQlEv70RG%2F%2FTu9qizoqsbUypLG1fzsFzrmoJtHIBOv%2BCROTew0lStFO7y1eSD2ThYXcSWbHIEt7WAKGoZ%2F3fzd%2FfWrB9iTmIJyh%2FOMMWNoL4GOqUBLOZxjHEovUlG7KNt2tHie8HqayKLwqUeMoZiF%2FDOQE8MiO5%2BhWM9qwywqcM6QfqoBhfifO4K81XjjJ7KuEIC9oAvyN99747VTcxNlgoGpOycGhvxjJ5WqC1VUrV5NZYVRTbFjvOmiN%2BD6NNzHzxRpn4MIJodhsmOoZUj%2FgoNJOOqTClXeM7b8sVwa0dzYN7p8WrQaXW3VVe0q6wJN3bczu0D%2Ffg%2B&X-Amz-Signature=f8de9f7eca1eaf4b2bece58ce65561c2747bddfeea22a84b7d3f2f9e9cb336d2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYKQXGB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrcbNEnR8zX6HsuMpktQ%2Bj0gEoF1%2By%2Bm25HsBnMthi3QIgGRrK%2Bu0DzTGMa2s0zGkzgBHe3KbfxBSm0YG7osZfop8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCbIe5I9MvGrqFSjPyrcAwibZ6ZoBbbt0IFWbcYwqhA3MdIyIZwdFUO4m64oADmlooNBGbGiI0aXL6jtOVwjXthXNmJtu0JFNrBoNSmkC%2B9pe9yYvxD1BpJW1qDGJerPjUu5vXV%2BqpTZeQU%2FiN%2BvraeG0yLP8WbSZFh6qYbTsPd3wA6zAbI34%2FpLgx5rsmu7gDHHT2iWnDdwhemdIVI3SbHXwNfAToue2CN57Ba%2Bwm8APnSF5QT8058KfGsb5OzASxlykS6Kt9uozzrD2QlgWg2vQj8qYlOfelBn2%2Bk2lsDZmveZVkRvmlCh5rB1%2BuoKBOOgzToBYHElSp7zwfR0oj9fneU7RJ18gAQaRkOkmS3TJacmood%2BXQunq1px8DiLwfhjSwacu%2BrF5syUo%2BroBHHUbQUxv56ebLaofNU2hmDFdn%2FuJxv24a87UR9PLkNbOOycqpm4Jkemgtew2YS4WUlnXiLcaDTTxaWc%2BPvHTlpKNP1s97Wm%2Fb9xX5i7UOBkwVFWt0stoWdJl%2Fc%2Bu0aDz8X46z%2Fp34%2BpwqvIjiU0OdIDQlEv70RG%2F%2FTu9qizoqsbUypLG1fzsFzrmoJtHIBOv%2BCROTew0lStFO7y1eSD2ThYXcSWbHIEt7WAKGoZ%2F3fzd%2FfWrB9iTmIJyh%2FOMMWNoL4GOqUBLOZxjHEovUlG7KNt2tHie8HqayKLwqUeMoZiF%2FDOQE8MiO5%2BhWM9qwywqcM6QfqoBhfifO4K81XjjJ7KuEIC9oAvyN99747VTcxNlgoGpOycGhvxjJ5WqC1VUrV5NZYVRTbFjvOmiN%2BD6NNzHzxRpn4MIJodhsmOoZUj%2FgoNJOOqTClXeM7b8sVwa0dzYN7p8WrQaXW3VVe0q6wJN3bczu0D%2Ffg%2B&X-Amz-Signature=18e196c4f492f204409ac257ff48b1f9a7f544f15959e39e4c5bb42178068cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYKQXGB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrcbNEnR8zX6HsuMpktQ%2Bj0gEoF1%2By%2Bm25HsBnMthi3QIgGRrK%2Bu0DzTGMa2s0zGkzgBHe3KbfxBSm0YG7osZfop8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCbIe5I9MvGrqFSjPyrcAwibZ6ZoBbbt0IFWbcYwqhA3MdIyIZwdFUO4m64oADmlooNBGbGiI0aXL6jtOVwjXthXNmJtu0JFNrBoNSmkC%2B9pe9yYvxD1BpJW1qDGJerPjUu5vXV%2BqpTZeQU%2FiN%2BvraeG0yLP8WbSZFh6qYbTsPd3wA6zAbI34%2FpLgx5rsmu7gDHHT2iWnDdwhemdIVI3SbHXwNfAToue2CN57Ba%2Bwm8APnSF5QT8058KfGsb5OzASxlykS6Kt9uozzrD2QlgWg2vQj8qYlOfelBn2%2Bk2lsDZmveZVkRvmlCh5rB1%2BuoKBOOgzToBYHElSp7zwfR0oj9fneU7RJ18gAQaRkOkmS3TJacmood%2BXQunq1px8DiLwfhjSwacu%2BrF5syUo%2BroBHHUbQUxv56ebLaofNU2hmDFdn%2FuJxv24a87UR9PLkNbOOycqpm4Jkemgtew2YS4WUlnXiLcaDTTxaWc%2BPvHTlpKNP1s97Wm%2Fb9xX5i7UOBkwVFWt0stoWdJl%2Fc%2Bu0aDz8X46z%2Fp34%2BpwqvIjiU0OdIDQlEv70RG%2F%2FTu9qizoqsbUypLG1fzsFzrmoJtHIBOv%2BCROTew0lStFO7y1eSD2ThYXcSWbHIEt7WAKGoZ%2F3fzd%2FfWrB9iTmIJyh%2FOMMWNoL4GOqUBLOZxjHEovUlG7KNt2tHie8HqayKLwqUeMoZiF%2FDOQE8MiO5%2BhWM9qwywqcM6QfqoBhfifO4K81XjjJ7KuEIC9oAvyN99747VTcxNlgoGpOycGhvxjJ5WqC1VUrV5NZYVRTbFjvOmiN%2BD6NNzHzxRpn4MIJodhsmOoZUj%2FgoNJOOqTClXeM7b8sVwa0dzYN7p8WrQaXW3VVe0q6wJN3bczu0D%2Ffg%2B&X-Amz-Signature=576a9409db3f2eeb39277fcfaafc87a443127265bc579a05e692dc09e960adf0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
