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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIT5LV6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUNCoguuB0Tkd8iQOYVsKrE4f1z1Adh6uyIUWW80SuQIhAPx0EjdLa2%2BcZs4f0pYxOuyorEUlO9hr5WOnDzmDp%2BR4Kv8DCFYQABoMNjM3NDIzMTgzODA1IgwnkOUBTf7rBpT%2BlsUq3AM8wthIaOXyaCfIDujr0Vn8csYiL%2FgoQz5uT5DSYkFxaXqDPGS%2BBf%2BUYgSxdWJrQJ33Mt0sDcbRO4GL3kl7sk1lvuktA08Bn6Wa9Zs7K2OYd2tnSKcSpnaEhujuh2xCtDHjJzPUl0QURHDetrskDcnoTBuDwYwOFn%2FfcfDSUkG9vM72ZdzzwFA6t6PdJmi2gzkZd3kYCJDVkr6EbaxpW1gQt5g3g9WfgLPgtB8%2F6rTcFW8%2Bn02Iw2fQVUvrSDMiPqEpKetchtDUZ5DRyPeNnJ6qrb4wwRQbHSBbm1VLQcf9hjNh65yvivhjUrHn91QdL20rLRn73BUUU7LNHmCLWmvvmdfOgG40ksndHP4vp26N5ju8IBCtLR2taXyMpFiH6w%2FEDcdcDuTnGx2BLW2Ag4wwGWKc37yySXt4AYzOb7eprn4gi6%2BR78KPWhZvg55fGYM3mhfj%2BDDzooKwCJy267uhAHyKeTrdLYlulEjv%2Bn7DRu4CXNmCSgZ43cp0LM6MPKH4riJgfRd6lgwgmX%2BgoVfn9yhtWF7IPivQP5vvePtdh0b5s6A8ZoMpZcQNkY2xWrJwjci%2FDGpnjfP%2F4rpTvli%2BgZXqeTaKSO5VrPcL5P8AMQawgKjPA1iVOX7KYzCl7bbABjqkAeqWQu1%2FFFY6ZohTTZfehqV78%2Fb07xN5Bute0HxRdLGcO6wH%2FEVLJ0jppU%2FDcfDtaVQXmazdL9jd8BfBuR6zL%2BURkoNkK%2F%2B0ZHEjJxlJdI5cFdqJ16xoK7G0yYZD61Mr0IaZk3bSrDnq%2FqysSkhallXu1CRVcxnS4JreBarPSE9pxE83ObiCIJ7SBxlcI5VW42kBU%2BkALQYmNFsVkMRoo19tO8j2&X-Amz-Signature=704eca9b96545f53723646e3f80d8409da5ccfcd1a340588e88abd0f7d45e4aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIT5LV6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUNCoguuB0Tkd8iQOYVsKrE4f1z1Adh6uyIUWW80SuQIhAPx0EjdLa2%2BcZs4f0pYxOuyorEUlO9hr5WOnDzmDp%2BR4Kv8DCFYQABoMNjM3NDIzMTgzODA1IgwnkOUBTf7rBpT%2BlsUq3AM8wthIaOXyaCfIDujr0Vn8csYiL%2FgoQz5uT5DSYkFxaXqDPGS%2BBf%2BUYgSxdWJrQJ33Mt0sDcbRO4GL3kl7sk1lvuktA08Bn6Wa9Zs7K2OYd2tnSKcSpnaEhujuh2xCtDHjJzPUl0QURHDetrskDcnoTBuDwYwOFn%2FfcfDSUkG9vM72ZdzzwFA6t6PdJmi2gzkZd3kYCJDVkr6EbaxpW1gQt5g3g9WfgLPgtB8%2F6rTcFW8%2Bn02Iw2fQVUvrSDMiPqEpKetchtDUZ5DRyPeNnJ6qrb4wwRQbHSBbm1VLQcf9hjNh65yvivhjUrHn91QdL20rLRn73BUUU7LNHmCLWmvvmdfOgG40ksndHP4vp26N5ju8IBCtLR2taXyMpFiH6w%2FEDcdcDuTnGx2BLW2Ag4wwGWKc37yySXt4AYzOb7eprn4gi6%2BR78KPWhZvg55fGYM3mhfj%2BDDzooKwCJy267uhAHyKeTrdLYlulEjv%2Bn7DRu4CXNmCSgZ43cp0LM6MPKH4riJgfRd6lgwgmX%2BgoVfn9yhtWF7IPivQP5vvePtdh0b5s6A8ZoMpZcQNkY2xWrJwjci%2FDGpnjfP%2F4rpTvli%2BgZXqeTaKSO5VrPcL5P8AMQawgKjPA1iVOX7KYzCl7bbABjqkAeqWQu1%2FFFY6ZohTTZfehqV78%2Fb07xN5Bute0HxRdLGcO6wH%2FEVLJ0jppU%2FDcfDtaVQXmazdL9jd8BfBuR6zL%2BURkoNkK%2F%2B0ZHEjJxlJdI5cFdqJ16xoK7G0yYZD61Mr0IaZk3bSrDnq%2FqysSkhallXu1CRVcxnS4JreBarPSE9pxE83ObiCIJ7SBxlcI5VW42kBU%2BkALQYmNFsVkMRoo19tO8j2&X-Amz-Signature=ce88cda4611774ea2a9a1a14ae3955066abc6de21265949f6827fdb5983727ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFIT5LV6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkUNCoguuB0Tkd8iQOYVsKrE4f1z1Adh6uyIUWW80SuQIhAPx0EjdLa2%2BcZs4f0pYxOuyorEUlO9hr5WOnDzmDp%2BR4Kv8DCFYQABoMNjM3NDIzMTgzODA1IgwnkOUBTf7rBpT%2BlsUq3AM8wthIaOXyaCfIDujr0Vn8csYiL%2FgoQz5uT5DSYkFxaXqDPGS%2BBf%2BUYgSxdWJrQJ33Mt0sDcbRO4GL3kl7sk1lvuktA08Bn6Wa9Zs7K2OYd2tnSKcSpnaEhujuh2xCtDHjJzPUl0QURHDetrskDcnoTBuDwYwOFn%2FfcfDSUkG9vM72ZdzzwFA6t6PdJmi2gzkZd3kYCJDVkr6EbaxpW1gQt5g3g9WfgLPgtB8%2F6rTcFW8%2Bn02Iw2fQVUvrSDMiPqEpKetchtDUZ5DRyPeNnJ6qrb4wwRQbHSBbm1VLQcf9hjNh65yvivhjUrHn91QdL20rLRn73BUUU7LNHmCLWmvvmdfOgG40ksndHP4vp26N5ju8IBCtLR2taXyMpFiH6w%2FEDcdcDuTnGx2BLW2Ag4wwGWKc37yySXt4AYzOb7eprn4gi6%2BR78KPWhZvg55fGYM3mhfj%2BDDzooKwCJy267uhAHyKeTrdLYlulEjv%2Bn7DRu4CXNmCSgZ43cp0LM6MPKH4riJgfRd6lgwgmX%2BgoVfn9yhtWF7IPivQP5vvePtdh0b5s6A8ZoMpZcQNkY2xWrJwjci%2FDGpnjfP%2F4rpTvli%2BgZXqeTaKSO5VrPcL5P8AMQawgKjPA1iVOX7KYzCl7bbABjqkAeqWQu1%2FFFY6ZohTTZfehqV78%2Fb07xN5Bute0HxRdLGcO6wH%2FEVLJ0jppU%2FDcfDtaVQXmazdL9jd8BfBuR6zL%2BURkoNkK%2F%2B0ZHEjJxlJdI5cFdqJ16xoK7G0yYZD61Mr0IaZk3bSrDnq%2FqysSkhallXu1CRVcxnS4JreBarPSE9pxE83ObiCIJ7SBxlcI5VW42kBU%2BkALQYmNFsVkMRoo19tO8j2&X-Amz-Signature=694b2b46bf121932d083377674688de6041a8f99dd4ad9a745e701f97ea72ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
