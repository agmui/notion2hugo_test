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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVL3HPR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWgesoRyOeHMlO5An%2F1Z7qSwXNFUgOtjwUzdgf%2BiVtpAiEAgLzX1noBx0iJ9ieZj6ia0EaplPJedJ%2BZots%2FEFAXAa4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ86wdLzLFtr5tGBgCrcA%2BWmcp1iBfxAwK7SRta8EBtK93gbg10cLhGluu8IfNFex%2FbKz2uMfGl1DxCU4rFP5wkMVuws96lCbg0eoqP04OfkkKYqH3gYyjc8ZxTCWVL20X1eyOzt6wH9PIz0T0xaNZ5tp8fWNJnzQHfXytucZlGkHAblbAcYVw%2B6nMF4jAAURDV5Rkr72ehNGrXUWb9%2BQKdNZhZyB%2FZ0%2FOpeNm3opOclfgyYpwzw0H0mhOOTFZHQ9z7hSlXSz5xOjPMK1owXt2dC0aDH0OH1apUPsehl9AFA2LtLE0mCUQ6vn3O1TqJerFP0ZfuNItArAIYJdfRHVZJEMVPhOp7n9MXCsS3JhZvPGVmykYcxP%2BWbEdPA6JRgUJcRTr1vUzmA1syzxBTSdPoaxRkv7EbR9%2Bq%2FS2qPw4dz4S95VvWXot5j3KIugWkhrNPzR0p5pkYG0MSc6QXEzdPdvTWDxKZuIJXr%2FaCM5fI1sBY7noK1NAz7FzDU4L0c55VTqSj08m9MiF3CwD3oZal9TakkeuhxoeTEUWb65pBAjoxQBF8us9oV%2F1wRKDqdsKPPa3%2BFiTwn10HIlQVHOPKT%2BeV2VDLFyYH3GOj8FBA%2BXaTV9irwUdWOg47YEAj0dV0jy5uH3gXTvoK7MLrm5r0GOqUBrDM2WkJlgUsc3su87SxNvPJ3kc8cBTNUOh5TxP5HOpYMtqFrSqtqAFY%2BeRNqEI7poRQyAGCRLkayBCO4mFVjHB0Fvr295uCTXhlAOD%2BsknolaCxDGgc%2Bk%2FDx2TsJvGWmUaAJEHywq%2BymnGOdRJDs8lNMa7nWsf%2BstCZ6ReGbufwCLb6ebZVZTM8tJ9bhd1Un%2BPqI6WvRlP2uf%2FUdBLKUjbU6fyYT&X-Amz-Signature=91e5e11f478bfc4415b15eb5beba83bc52094f5739455a72ca95b2b5297199da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVL3HPR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWgesoRyOeHMlO5An%2F1Z7qSwXNFUgOtjwUzdgf%2BiVtpAiEAgLzX1noBx0iJ9ieZj6ia0EaplPJedJ%2BZots%2FEFAXAa4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ86wdLzLFtr5tGBgCrcA%2BWmcp1iBfxAwK7SRta8EBtK93gbg10cLhGluu8IfNFex%2FbKz2uMfGl1DxCU4rFP5wkMVuws96lCbg0eoqP04OfkkKYqH3gYyjc8ZxTCWVL20X1eyOzt6wH9PIz0T0xaNZ5tp8fWNJnzQHfXytucZlGkHAblbAcYVw%2B6nMF4jAAURDV5Rkr72ehNGrXUWb9%2BQKdNZhZyB%2FZ0%2FOpeNm3opOclfgyYpwzw0H0mhOOTFZHQ9z7hSlXSz5xOjPMK1owXt2dC0aDH0OH1apUPsehl9AFA2LtLE0mCUQ6vn3O1TqJerFP0ZfuNItArAIYJdfRHVZJEMVPhOp7n9MXCsS3JhZvPGVmykYcxP%2BWbEdPA6JRgUJcRTr1vUzmA1syzxBTSdPoaxRkv7EbR9%2Bq%2FS2qPw4dz4S95VvWXot5j3KIugWkhrNPzR0p5pkYG0MSc6QXEzdPdvTWDxKZuIJXr%2FaCM5fI1sBY7noK1NAz7FzDU4L0c55VTqSj08m9MiF3CwD3oZal9TakkeuhxoeTEUWb65pBAjoxQBF8us9oV%2F1wRKDqdsKPPa3%2BFiTwn10HIlQVHOPKT%2BeV2VDLFyYH3GOj8FBA%2BXaTV9irwUdWOg47YEAj0dV0jy5uH3gXTvoK7MLrm5r0GOqUBrDM2WkJlgUsc3su87SxNvPJ3kc8cBTNUOh5TxP5HOpYMtqFrSqtqAFY%2BeRNqEI7poRQyAGCRLkayBCO4mFVjHB0Fvr295uCTXhlAOD%2BsknolaCxDGgc%2Bk%2FDx2TsJvGWmUaAJEHywq%2BymnGOdRJDs8lNMa7nWsf%2BstCZ6ReGbufwCLb6ebZVZTM8tJ9bhd1Un%2BPqI6WvRlP2uf%2FUdBLKUjbU6fyYT&X-Amz-Signature=61997396e2682debc4864fe30402bc6fb2f59f37961a0de44616c0d87526a4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVL3HPR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWgesoRyOeHMlO5An%2F1Z7qSwXNFUgOtjwUzdgf%2BiVtpAiEAgLzX1noBx0iJ9ieZj6ia0EaplPJedJ%2BZots%2FEFAXAa4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ86wdLzLFtr5tGBgCrcA%2BWmcp1iBfxAwK7SRta8EBtK93gbg10cLhGluu8IfNFex%2FbKz2uMfGl1DxCU4rFP5wkMVuws96lCbg0eoqP04OfkkKYqH3gYyjc8ZxTCWVL20X1eyOzt6wH9PIz0T0xaNZ5tp8fWNJnzQHfXytucZlGkHAblbAcYVw%2B6nMF4jAAURDV5Rkr72ehNGrXUWb9%2BQKdNZhZyB%2FZ0%2FOpeNm3opOclfgyYpwzw0H0mhOOTFZHQ9z7hSlXSz5xOjPMK1owXt2dC0aDH0OH1apUPsehl9AFA2LtLE0mCUQ6vn3O1TqJerFP0ZfuNItArAIYJdfRHVZJEMVPhOp7n9MXCsS3JhZvPGVmykYcxP%2BWbEdPA6JRgUJcRTr1vUzmA1syzxBTSdPoaxRkv7EbR9%2Bq%2FS2qPw4dz4S95VvWXot5j3KIugWkhrNPzR0p5pkYG0MSc6QXEzdPdvTWDxKZuIJXr%2FaCM5fI1sBY7noK1NAz7FzDU4L0c55VTqSj08m9MiF3CwD3oZal9TakkeuhxoeTEUWb65pBAjoxQBF8us9oV%2F1wRKDqdsKPPa3%2BFiTwn10HIlQVHOPKT%2BeV2VDLFyYH3GOj8FBA%2BXaTV9irwUdWOg47YEAj0dV0jy5uH3gXTvoK7MLrm5r0GOqUBrDM2WkJlgUsc3su87SxNvPJ3kc8cBTNUOh5TxP5HOpYMtqFrSqtqAFY%2BeRNqEI7poRQyAGCRLkayBCO4mFVjHB0Fvr295uCTXhlAOD%2BsknolaCxDGgc%2Bk%2FDx2TsJvGWmUaAJEHywq%2BymnGOdRJDs8lNMa7nWsf%2BstCZ6ReGbufwCLb6ebZVZTM8tJ9bhd1Un%2BPqI6WvRlP2uf%2FUdBLKUjbU6fyYT&X-Amz-Signature=40d9a14bb255f6504874de6341863a64861c498beb3db3314df12414785f8ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
