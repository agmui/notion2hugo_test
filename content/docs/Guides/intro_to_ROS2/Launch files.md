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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOUZYVL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFn4kzcdlcdLolvAgwfsJlnv5NaZQestvNxSXt1fnrjAAiAP1ONQPgsGaRdNaKMKKHXzhlzpudOp65qxkRzcpaI3Lir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6X7HX6rzv0CTtp01KtwDTzBWBQtv4EGTpNK%2BbnG6K1qDLC4Vupw%2Fw3eVafsK%2F07uVDfV1hyODFgGum3%2BVvTJJqwSJMi%2BBsXkBHguBwMMEuHygcPh3I9U71tKz0PEedbv1ueVFuGNbmqTGrhKlml3K6T4mD071dW2ytD2C8Y2m0sIDBCMBpGpqgtJ3dnj%2BHTx0ECb%2Fgo408cixSStnr90kFZGVFKsMpBvvk88c4%2FyNnbmTIdew8HS8flRrL%2FMnWaEZffy8nnxkzwuAgpUjOahmdj10fNem%2Fc%2F9DN6oj33vu3%2B%2BdJzR6NMoeX89bEtxTQQiUz6L69do07Vs%2FxvMbB6ms8Qq0kKNGerC5evsr%2FKC3j2oO%2F3bh6tGDLHh4GYwg09YlmY31t6WR9DhoW7Bel7xl6oqDG4e1OP9LfvstlHUm2Ng2SHUdudLSme1TfhgCJtfny3hyv3tzPyzeOKOoQag%2FCLtyoDngij5fgnE%2FJarYPOuCfwSh3d6X72aJ0nSUeeGFJGI%2BfvCFLWPZtGRrdWHSTUCzo9U2ut3DaNXqCRThziBF6FzoHE4C20UEjVex8Tbnra5XXhRfp%2FWVnCceKNNYlH8cxkzrrps9UkWG9ESdLu7zptX4J7XjgFBIbjy2hhj6y8s1%2BlBQ%2Fslx0w5Z31wgY6pgGCaplo48168nrHHrJDxTTSHKs1J7cmHsMcNKJYdYVcZ3cJz8AXIPNTqM7pQoareINLdaKATY9pGwJzQEzxTh7B0I77Bv1tYtEV6NeEjmAh8Vkv4eUDxSWBH%2F1a7ifA%2FdJYjQtdBV3z8QuQFdFFfng1L8Cx4H%2BaEaZ8XxUkpK5fL0swkiouRVueuoCePe9WmnIMREmtxXP3bVQ1lrHyQeBln6Y0xfAz&X-Amz-Signature=b1b14f47ae2d596a5b8c738cc8cf759b09740b23dfa9e67e9eecf0673617e12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOUZYVL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFn4kzcdlcdLolvAgwfsJlnv5NaZQestvNxSXt1fnrjAAiAP1ONQPgsGaRdNaKMKKHXzhlzpudOp65qxkRzcpaI3Lir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6X7HX6rzv0CTtp01KtwDTzBWBQtv4EGTpNK%2BbnG6K1qDLC4Vupw%2Fw3eVafsK%2F07uVDfV1hyODFgGum3%2BVvTJJqwSJMi%2BBsXkBHguBwMMEuHygcPh3I9U71tKz0PEedbv1ueVFuGNbmqTGrhKlml3K6T4mD071dW2ytD2C8Y2m0sIDBCMBpGpqgtJ3dnj%2BHTx0ECb%2Fgo408cixSStnr90kFZGVFKsMpBvvk88c4%2FyNnbmTIdew8HS8flRrL%2FMnWaEZffy8nnxkzwuAgpUjOahmdj10fNem%2Fc%2F9DN6oj33vu3%2B%2BdJzR6NMoeX89bEtxTQQiUz6L69do07Vs%2FxvMbB6ms8Qq0kKNGerC5evsr%2FKC3j2oO%2F3bh6tGDLHh4GYwg09YlmY31t6WR9DhoW7Bel7xl6oqDG4e1OP9LfvstlHUm2Ng2SHUdudLSme1TfhgCJtfny3hyv3tzPyzeOKOoQag%2FCLtyoDngij5fgnE%2FJarYPOuCfwSh3d6X72aJ0nSUeeGFJGI%2BfvCFLWPZtGRrdWHSTUCzo9U2ut3DaNXqCRThziBF6FzoHE4C20UEjVex8Tbnra5XXhRfp%2FWVnCceKNNYlH8cxkzrrps9UkWG9ESdLu7zptX4J7XjgFBIbjy2hhj6y8s1%2BlBQ%2Fslx0w5Z31wgY6pgGCaplo48168nrHHrJDxTTSHKs1J7cmHsMcNKJYdYVcZ3cJz8AXIPNTqM7pQoareINLdaKATY9pGwJzQEzxTh7B0I77Bv1tYtEV6NeEjmAh8Vkv4eUDxSWBH%2F1a7ifA%2FdJYjQtdBV3z8QuQFdFFfng1L8Cx4H%2BaEaZ8XxUkpK5fL0swkiouRVueuoCePe9WmnIMREmtxXP3bVQ1lrHyQeBln6Y0xfAz&X-Amz-Signature=56e8bebcaf3b55e3adbcb7f23180a5b5adc46c490d9e81e1b3405139fd9adb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOUZYVL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFn4kzcdlcdLolvAgwfsJlnv5NaZQestvNxSXt1fnrjAAiAP1ONQPgsGaRdNaKMKKHXzhlzpudOp65qxkRzcpaI3Lir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6X7HX6rzv0CTtp01KtwDTzBWBQtv4EGTpNK%2BbnG6K1qDLC4Vupw%2Fw3eVafsK%2F07uVDfV1hyODFgGum3%2BVvTJJqwSJMi%2BBsXkBHguBwMMEuHygcPh3I9U71tKz0PEedbv1ueVFuGNbmqTGrhKlml3K6T4mD071dW2ytD2C8Y2m0sIDBCMBpGpqgtJ3dnj%2BHTx0ECb%2Fgo408cixSStnr90kFZGVFKsMpBvvk88c4%2FyNnbmTIdew8HS8flRrL%2FMnWaEZffy8nnxkzwuAgpUjOahmdj10fNem%2Fc%2F9DN6oj33vu3%2B%2BdJzR6NMoeX89bEtxTQQiUz6L69do07Vs%2FxvMbB6ms8Qq0kKNGerC5evsr%2FKC3j2oO%2F3bh6tGDLHh4GYwg09YlmY31t6WR9DhoW7Bel7xl6oqDG4e1OP9LfvstlHUm2Ng2SHUdudLSme1TfhgCJtfny3hyv3tzPyzeOKOoQag%2FCLtyoDngij5fgnE%2FJarYPOuCfwSh3d6X72aJ0nSUeeGFJGI%2BfvCFLWPZtGRrdWHSTUCzo9U2ut3DaNXqCRThziBF6FzoHE4C20UEjVex8Tbnra5XXhRfp%2FWVnCceKNNYlH8cxkzrrps9UkWG9ESdLu7zptX4J7XjgFBIbjy2hhj6y8s1%2BlBQ%2Fslx0w5Z31wgY6pgGCaplo48168nrHHrJDxTTSHKs1J7cmHsMcNKJYdYVcZ3cJz8AXIPNTqM7pQoareINLdaKATY9pGwJzQEzxTh7B0I77Bv1tYtEV6NeEjmAh8Vkv4eUDxSWBH%2F1a7ifA%2FdJYjQtdBV3z8QuQFdFFfng1L8Cx4H%2BaEaZ8XxUkpK5fL0swkiouRVueuoCePe9WmnIMREmtxXP3bVQ1lrHyQeBln6Y0xfAz&X-Amz-Signature=a53ed20315f720a96fdb745c33f9cf92d151e24a1e36e4cbf771cd68728c1d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
