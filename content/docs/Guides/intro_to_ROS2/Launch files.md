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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3DCPJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYG3korWGXt7NEBWVNBl5c0BjNgIr%2FMvmII16wRbupgwIhAO7xkAZsX9jKIHxi2N9ApKcjrdajvri4wS%2BXr%2FsJFzE0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc56dY4T57umo8fA8q3ANfXuB0iwgA6RlXISxNDcO7u6ynTUPJGl3ffJw5AFzg4%2BHsqMSFS%2Fmn7QpyTMiGQrCFn7m0a4iNuHCoOMnDbug%2BYQn1gvTD0fuDAVAFfO0nRSZLnXuuZ%2B5a%2FFjcZNhIxUCuxLt9s3%2FoohmlG1p9ceOUdX2G%2FNAcobah63FBgzQ7JHnnG%2FO2MO%2BqBFK8CteKkDmxxwuc5kasQrNbxHlaJm7HKkpHOp8QOB9CUEy3LU1MA2LwKwo%2FZY2DPcRuBxpJ91KxD0XEexc6MCjWNaoDTtmLKpP6Yq5OVfb1uGsRVb0OEGpRxCGCn49ZLMZcq0BGLkDaODwSfyMzkRtgQGJ2UkgjqGQWPCRwVrlTFqVa5KXUCWEPnMdkq3AezLzquiHdtVG51Q185aSCYagVyUuITZ%2Bu81xeGIhI1xpgHdvgcYS%2BFtRqJFwnHlTP7xU9HbdZ%2FTeTCtju%2F1Np2lVAan6i7Y%2B6ZZZNKGAvGziPpudYfTkIgxSZjSJ09Qx60Ci8pjRksh8UhG9mUBmbssEoWYiuLDACcVqCPWlDkEcZWtx3EwxfvZ3c0Sddn4%2BVBymOjCkoPLO7oks7WlPR5bQktk5A9gVEOD8d1nuomsoG%2BqR8Hq%2BQ%2B%2BABmKuyrWdqLvdlTTDFybO9BjqkAeAO6Deq2FSqvc%2BrUJ%2FshtOKODhuNrSN1oT%2By%2BDXulDN1Pq8B%2BtogQo%2F6tFc4eDycJzlrGf1u7QDj8aGenwkh1qPqkOBSe5bTOundfr82HxPubddiFkC1cBkRknOCpDTjFJWO3nhNZbbm%2BL2Wr5j%2F6VCieSNxv3OGZ%2FWCx47iSSRT0Y%2Fj547yYOl3hDYMhYPmy9ZusQpTM1MLgokErDDKM%2Fs2rTm&X-Amz-Signature=6f69e9174e2f0bd148fbdbce70d0515cc6788f231aa04655ee6810c7cb3d8e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3DCPJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYG3korWGXt7NEBWVNBl5c0BjNgIr%2FMvmII16wRbupgwIhAO7xkAZsX9jKIHxi2N9ApKcjrdajvri4wS%2BXr%2FsJFzE0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc56dY4T57umo8fA8q3ANfXuB0iwgA6RlXISxNDcO7u6ynTUPJGl3ffJw5AFzg4%2BHsqMSFS%2Fmn7QpyTMiGQrCFn7m0a4iNuHCoOMnDbug%2BYQn1gvTD0fuDAVAFfO0nRSZLnXuuZ%2B5a%2FFjcZNhIxUCuxLt9s3%2FoohmlG1p9ceOUdX2G%2FNAcobah63FBgzQ7JHnnG%2FO2MO%2BqBFK8CteKkDmxxwuc5kasQrNbxHlaJm7HKkpHOp8QOB9CUEy3LU1MA2LwKwo%2FZY2DPcRuBxpJ91KxD0XEexc6MCjWNaoDTtmLKpP6Yq5OVfb1uGsRVb0OEGpRxCGCn49ZLMZcq0BGLkDaODwSfyMzkRtgQGJ2UkgjqGQWPCRwVrlTFqVa5KXUCWEPnMdkq3AezLzquiHdtVG51Q185aSCYagVyUuITZ%2Bu81xeGIhI1xpgHdvgcYS%2BFtRqJFwnHlTP7xU9HbdZ%2FTeTCtju%2F1Np2lVAan6i7Y%2B6ZZZNKGAvGziPpudYfTkIgxSZjSJ09Qx60Ci8pjRksh8UhG9mUBmbssEoWYiuLDACcVqCPWlDkEcZWtx3EwxfvZ3c0Sddn4%2BVBymOjCkoPLO7oks7WlPR5bQktk5A9gVEOD8d1nuomsoG%2BqR8Hq%2BQ%2B%2BABmKuyrWdqLvdlTTDFybO9BjqkAeAO6Deq2FSqvc%2BrUJ%2FshtOKODhuNrSN1oT%2By%2BDXulDN1Pq8B%2BtogQo%2F6tFc4eDycJzlrGf1u7QDj8aGenwkh1qPqkOBSe5bTOundfr82HxPubddiFkC1cBkRknOCpDTjFJWO3nhNZbbm%2BL2Wr5j%2F6VCieSNxv3OGZ%2FWCx47iSSRT0Y%2Fj547yYOl3hDYMhYPmy9ZusQpTM1MLgokErDDKM%2Fs2rTm&X-Amz-Signature=510041020dcf647613e2ff6e358fdbef340b2068bb11045c01fdea2d303a8265&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS3DCPJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYG3korWGXt7NEBWVNBl5c0BjNgIr%2FMvmII16wRbupgwIhAO7xkAZsX9jKIHxi2N9ApKcjrdajvri4wS%2BXr%2FsJFzE0KogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc56dY4T57umo8fA8q3ANfXuB0iwgA6RlXISxNDcO7u6ynTUPJGl3ffJw5AFzg4%2BHsqMSFS%2Fmn7QpyTMiGQrCFn7m0a4iNuHCoOMnDbug%2BYQn1gvTD0fuDAVAFfO0nRSZLnXuuZ%2B5a%2FFjcZNhIxUCuxLt9s3%2FoohmlG1p9ceOUdX2G%2FNAcobah63FBgzQ7JHnnG%2FO2MO%2BqBFK8CteKkDmxxwuc5kasQrNbxHlaJm7HKkpHOp8QOB9CUEy3LU1MA2LwKwo%2FZY2DPcRuBxpJ91KxD0XEexc6MCjWNaoDTtmLKpP6Yq5OVfb1uGsRVb0OEGpRxCGCn49ZLMZcq0BGLkDaODwSfyMzkRtgQGJ2UkgjqGQWPCRwVrlTFqVa5KXUCWEPnMdkq3AezLzquiHdtVG51Q185aSCYagVyUuITZ%2Bu81xeGIhI1xpgHdvgcYS%2BFtRqJFwnHlTP7xU9HbdZ%2FTeTCtju%2F1Np2lVAan6i7Y%2B6ZZZNKGAvGziPpudYfTkIgxSZjSJ09Qx60Ci8pjRksh8UhG9mUBmbssEoWYiuLDACcVqCPWlDkEcZWtx3EwxfvZ3c0Sddn4%2BVBymOjCkoPLO7oks7WlPR5bQktk5A9gVEOD8d1nuomsoG%2BqR8Hq%2BQ%2B%2BABmKuyrWdqLvdlTTDFybO9BjqkAeAO6Deq2FSqvc%2BrUJ%2FshtOKODhuNrSN1oT%2By%2BDXulDN1Pq8B%2BtogQo%2F6tFc4eDycJzlrGf1u7QDj8aGenwkh1qPqkOBSe5bTOundfr82HxPubddiFkC1cBkRknOCpDTjFJWO3nhNZbbm%2BL2Wr5j%2F6VCieSNxv3OGZ%2FWCx47iSSRT0Y%2Fj547yYOl3hDYMhYPmy9ZusQpTM1MLgokErDDKM%2Fs2rTm&X-Amz-Signature=6cf7a6597cd64650e4ee11c7b0bc184714a0bef5787a9651a3e58d3bf83b6478&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
