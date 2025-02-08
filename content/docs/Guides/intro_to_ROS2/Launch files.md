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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24VEVGZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIH%2FoChppW%2FTPMbIoMU1%2F3%2F6lrC%2FihS5h8IsA6Y673n3FAiBVS0f9q9BIM7jn%2BfuhbVmrVP%2FfnAMv20R7owOniFZ%2FzyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2B3OIwHy6PEi3zfmKtwDT7VJ5lFK5CNEh8IykGsvcJQjmdtABgfVGfy01x2YocKI6SedtPWSHq%2Bwk3Qf9nA1kod%2FnSXMk4lNdWRkSr%2BrPooNNkR8eRZ40rlE2MHbO5JUawRIinCalCZNe%2FKTcGK1WsIjfCrcoIN9Sv%2BzKjt0UvrmD0egErD%2FBQ%2Fzpj%2FMrFiWMhY8fn8Xd7S5%2BPUvf%2Bu9DL01%2BXlVzeysxYAGCdg%2B%2BBMY0xCJJlXq6TXr5zqLN5qLtwWZEZRU%2FNZrXbkODPTqMdzAOt%2FLUEfpDCQHZnDA2gffbsGpn7Y3SjnqHP9PKgYJGP9zxVyqyvay2J8e6Z3P8qEjCQz0oxBExOkMpPlpmzTXPjw5ulY9gCm1Oqq5mWnuyodJuNAWVvPIyvJsY8bgu2vSijZtFqKXCpQFI%2B%2FBsVUORHs0TzhR5nBQJAaSpH%2FXx5vyLYL5yTe4gPjCLDyNOMvYx3Yyxj4%2FkL0lNGLLm5hpG6pk33Kogbi8U%2FKe66aBMZ6KoQESArZXprISLgBU3dSf%2FhXvVr71K1PxDmdkWzD078FtAGAakbt3%2FGRUk65nru%2BC68KLE9FqUIruaCt%2B9SPs2wvAINJFuTsreO0JLh3%2BgN6AIrZZQ7ju037wfd8UZ6fXbmND3W2F9wcw%2BpabvQY6pgH9Vf530hp2mKiyZpl3wlbekH%2BJhYyEwrApb55%2FU1%2FkV3XUXWTF628rvJ%2FFtxhg96pSA0Ds768xAk4H70zz375RPUJHYNG8aJW8APkuMMZWs9rZanK3BrgrR128Uf4q5PkqXLtZlvm4gYFKsem2jeg2EVO37ENgFnvdCD%2B6%2Fe8R9iADg18wK0pUtW4IOXO1B7hQ%2FMQtY1pthKKcTFvazD9pwbOf42bJ&X-Amz-Signature=0f87f31769239650f8b989705174a1500ae9bd915b5186ea645e758bd1008dd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24VEVGZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIH%2FoChppW%2FTPMbIoMU1%2F3%2F6lrC%2FihS5h8IsA6Y673n3FAiBVS0f9q9BIM7jn%2BfuhbVmrVP%2FfnAMv20R7owOniFZ%2FzyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2B3OIwHy6PEi3zfmKtwDT7VJ5lFK5CNEh8IykGsvcJQjmdtABgfVGfy01x2YocKI6SedtPWSHq%2Bwk3Qf9nA1kod%2FnSXMk4lNdWRkSr%2BrPooNNkR8eRZ40rlE2MHbO5JUawRIinCalCZNe%2FKTcGK1WsIjfCrcoIN9Sv%2BzKjt0UvrmD0egErD%2FBQ%2Fzpj%2FMrFiWMhY8fn8Xd7S5%2BPUvf%2Bu9DL01%2BXlVzeysxYAGCdg%2B%2BBMY0xCJJlXq6TXr5zqLN5qLtwWZEZRU%2FNZrXbkODPTqMdzAOt%2FLUEfpDCQHZnDA2gffbsGpn7Y3SjnqHP9PKgYJGP9zxVyqyvay2J8e6Z3P8qEjCQz0oxBExOkMpPlpmzTXPjw5ulY9gCm1Oqq5mWnuyodJuNAWVvPIyvJsY8bgu2vSijZtFqKXCpQFI%2B%2FBsVUORHs0TzhR5nBQJAaSpH%2FXx5vyLYL5yTe4gPjCLDyNOMvYx3Yyxj4%2FkL0lNGLLm5hpG6pk33Kogbi8U%2FKe66aBMZ6KoQESArZXprISLgBU3dSf%2FhXvVr71K1PxDmdkWzD078FtAGAakbt3%2FGRUk65nru%2BC68KLE9FqUIruaCt%2B9SPs2wvAINJFuTsreO0JLh3%2BgN6AIrZZQ7ju037wfd8UZ6fXbmND3W2F9wcw%2BpabvQY6pgH9Vf530hp2mKiyZpl3wlbekH%2BJhYyEwrApb55%2FU1%2FkV3XUXWTF628rvJ%2FFtxhg96pSA0Ds768xAk4H70zz375RPUJHYNG8aJW8APkuMMZWs9rZanK3BrgrR128Uf4q5PkqXLtZlvm4gYFKsem2jeg2EVO37ENgFnvdCD%2B6%2Fe8R9iADg18wK0pUtW4IOXO1B7hQ%2FMQtY1pthKKcTFvazD9pwbOf42bJ&X-Amz-Signature=04f94c7bc6f2307c5a95552ae4c94520d892ab4c3edf6d1ca8a1fe278f75ac73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24VEVGZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIH%2FoChppW%2FTPMbIoMU1%2F3%2F6lrC%2FihS5h8IsA6Y673n3FAiBVS0f9q9BIM7jn%2BfuhbVmrVP%2FfnAMv20R7owOniFZ%2FzyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2B3OIwHy6PEi3zfmKtwDT7VJ5lFK5CNEh8IykGsvcJQjmdtABgfVGfy01x2YocKI6SedtPWSHq%2Bwk3Qf9nA1kod%2FnSXMk4lNdWRkSr%2BrPooNNkR8eRZ40rlE2MHbO5JUawRIinCalCZNe%2FKTcGK1WsIjfCrcoIN9Sv%2BzKjt0UvrmD0egErD%2FBQ%2Fzpj%2FMrFiWMhY8fn8Xd7S5%2BPUvf%2Bu9DL01%2BXlVzeysxYAGCdg%2B%2BBMY0xCJJlXq6TXr5zqLN5qLtwWZEZRU%2FNZrXbkODPTqMdzAOt%2FLUEfpDCQHZnDA2gffbsGpn7Y3SjnqHP9PKgYJGP9zxVyqyvay2J8e6Z3P8qEjCQz0oxBExOkMpPlpmzTXPjw5ulY9gCm1Oqq5mWnuyodJuNAWVvPIyvJsY8bgu2vSijZtFqKXCpQFI%2B%2FBsVUORHs0TzhR5nBQJAaSpH%2FXx5vyLYL5yTe4gPjCLDyNOMvYx3Yyxj4%2FkL0lNGLLm5hpG6pk33Kogbi8U%2FKe66aBMZ6KoQESArZXprISLgBU3dSf%2FhXvVr71K1PxDmdkWzD078FtAGAakbt3%2FGRUk65nru%2BC68KLE9FqUIruaCt%2B9SPs2wvAINJFuTsreO0JLh3%2BgN6AIrZZQ7ju037wfd8UZ6fXbmND3W2F9wcw%2BpabvQY6pgH9Vf530hp2mKiyZpl3wlbekH%2BJhYyEwrApb55%2FU1%2FkV3XUXWTF628rvJ%2FFtxhg96pSA0Ds768xAk4H70zz375RPUJHYNG8aJW8APkuMMZWs9rZanK3BrgrR128Uf4q5PkqXLtZlvm4gYFKsem2jeg2EVO37ENgFnvdCD%2B6%2Fe8R9iADg18wK0pUtW4IOXO1B7hQ%2FMQtY1pthKKcTFvazD9pwbOf42bJ&X-Amz-Signature=936df687d53a2101017eb530cf3520a22ea09f4390034623d977e4304435cdb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
