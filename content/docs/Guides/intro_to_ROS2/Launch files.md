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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7RQHNEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC4yQZR%2FWAsAa6pDYDg9WZNabyiaIKrCbiSzkS1rpF5ywIgVVfu1ox1lDhtdbpHWH5UKdA0LJfkS4e%2BFqLccKPxsJsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGXIRsDfgz1nCMEYvCrcAwxAyu3cIDT7RZ74bWQk%2BX8xPdgdmYCZ%2FcX9IQaoG76FidJ4oaxRlcT%2FEbNs6Em4hY9rRtk3f2tpRoEiWXaPdjAjL7HBnGE%2BOKMhMtxx8NPyohdnzwWr6W7gVp3lcfOkv71F2RjSHVCvXFCQr2IEGV6RxKbPgEYv7ZfKRj4CgrhWXbViOy%2Bpj8HEftXrbh5xJPvMma1FmXsLTWGjWRk8W47%2BHcU%2ButqZN4Zwk9gxee2eOK90JaiZuXlnevTSiMGnjV%2B1GZDIRlSn2dNdVLucjW1XPZf%2B4F%2BV4I6rBjXoiBcyolBoqi063Qx8L5MgLdjXrx3RtBNG%2F%2BnrB7VBXXtmJXcKQM7ayugKjh0sztY9d7RlrfFss7HCWMmWya24sZuPfzHxpnACugndtJkYTtusaWbIoNwPB3k15xqkDA1BIMpQYBJxA77QYQWuYLperuu%2B9wxZt8276CueuAa52G%2FPYRWFfoBA5frV7Tcol4D7S9TAUUtTljs1jLtp2m4bxg0SkJm4tKwQJoDI%2FXkv6brO06NnbgQSUpUlP%2Fcaj753NrCzW0ZxjK%2FiMF6QCtzBjL4hYshDCHC9FhmydLQubcEn9%2Fc9Bw9Hhw1i07ATxfR9w9wub7TLJSjd674V%2FaFUMJ29nsMGOqUBpcvZfHt%2BLR32Dm6PPBrmcOtkK6idZ3G%2Fj7HI47qLtrM46l6GB9g0TO6x%2FZ55YkMI2mpwiLeoD9yWt6Ccdh%2FiakTgYYt9SguOHuG88kyoGKzVTy1oLu7lrI0bJQOb8bkhxGQMU6Zjk%2B9nd33Vb73B8HUzHvkbiWhcLr39Tph5C2mGSOjtpm0N5z15eoJ%2B1hKXsj4OdeKAIyLZhqyYPKVE%2FjX9F3dp&X-Amz-Signature=b8a18a5f3a442bd8338dfef56bb2ce06b7e4fc6fea4061b47a262f6731869efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7RQHNEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC4yQZR%2FWAsAa6pDYDg9WZNabyiaIKrCbiSzkS1rpF5ywIgVVfu1ox1lDhtdbpHWH5UKdA0LJfkS4e%2BFqLccKPxsJsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGXIRsDfgz1nCMEYvCrcAwxAyu3cIDT7RZ74bWQk%2BX8xPdgdmYCZ%2FcX9IQaoG76FidJ4oaxRlcT%2FEbNs6Em4hY9rRtk3f2tpRoEiWXaPdjAjL7HBnGE%2BOKMhMtxx8NPyohdnzwWr6W7gVp3lcfOkv71F2RjSHVCvXFCQr2IEGV6RxKbPgEYv7ZfKRj4CgrhWXbViOy%2Bpj8HEftXrbh5xJPvMma1FmXsLTWGjWRk8W47%2BHcU%2ButqZN4Zwk9gxee2eOK90JaiZuXlnevTSiMGnjV%2B1GZDIRlSn2dNdVLucjW1XPZf%2B4F%2BV4I6rBjXoiBcyolBoqi063Qx8L5MgLdjXrx3RtBNG%2F%2BnrB7VBXXtmJXcKQM7ayugKjh0sztY9d7RlrfFss7HCWMmWya24sZuPfzHxpnACugndtJkYTtusaWbIoNwPB3k15xqkDA1BIMpQYBJxA77QYQWuYLperuu%2B9wxZt8276CueuAa52G%2FPYRWFfoBA5frV7Tcol4D7S9TAUUtTljs1jLtp2m4bxg0SkJm4tKwQJoDI%2FXkv6brO06NnbgQSUpUlP%2Fcaj753NrCzW0ZxjK%2FiMF6QCtzBjL4hYshDCHC9FhmydLQubcEn9%2Fc9Bw9Hhw1i07ATxfR9w9wub7TLJSjd674V%2FaFUMJ29nsMGOqUBpcvZfHt%2BLR32Dm6PPBrmcOtkK6idZ3G%2Fj7HI47qLtrM46l6GB9g0TO6x%2FZ55YkMI2mpwiLeoD9yWt6Ccdh%2FiakTgYYt9SguOHuG88kyoGKzVTy1oLu7lrI0bJQOb8bkhxGQMU6Zjk%2B9nd33Vb73B8HUzHvkbiWhcLr39Tph5C2mGSOjtpm0N5z15eoJ%2B1hKXsj4OdeKAIyLZhqyYPKVE%2FjX9F3dp&X-Amz-Signature=eb92c29d2aa30cad9e0ed4ae154cf3c7f6d68d1b704165d8bb66226a86d4fec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7RQHNEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC4yQZR%2FWAsAa6pDYDg9WZNabyiaIKrCbiSzkS1rpF5ywIgVVfu1ox1lDhtdbpHWH5UKdA0LJfkS4e%2BFqLccKPxsJsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGXIRsDfgz1nCMEYvCrcAwxAyu3cIDT7RZ74bWQk%2BX8xPdgdmYCZ%2FcX9IQaoG76FidJ4oaxRlcT%2FEbNs6Em4hY9rRtk3f2tpRoEiWXaPdjAjL7HBnGE%2BOKMhMtxx8NPyohdnzwWr6W7gVp3lcfOkv71F2RjSHVCvXFCQr2IEGV6RxKbPgEYv7ZfKRj4CgrhWXbViOy%2Bpj8HEftXrbh5xJPvMma1FmXsLTWGjWRk8W47%2BHcU%2ButqZN4Zwk9gxee2eOK90JaiZuXlnevTSiMGnjV%2B1GZDIRlSn2dNdVLucjW1XPZf%2B4F%2BV4I6rBjXoiBcyolBoqi063Qx8L5MgLdjXrx3RtBNG%2F%2BnrB7VBXXtmJXcKQM7ayugKjh0sztY9d7RlrfFss7HCWMmWya24sZuPfzHxpnACugndtJkYTtusaWbIoNwPB3k15xqkDA1BIMpQYBJxA77QYQWuYLperuu%2B9wxZt8276CueuAa52G%2FPYRWFfoBA5frV7Tcol4D7S9TAUUtTljs1jLtp2m4bxg0SkJm4tKwQJoDI%2FXkv6brO06NnbgQSUpUlP%2Fcaj753NrCzW0ZxjK%2FiMF6QCtzBjL4hYshDCHC9FhmydLQubcEn9%2Fc9Bw9Hhw1i07ATxfR9w9wub7TLJSjd674V%2FaFUMJ29nsMGOqUBpcvZfHt%2BLR32Dm6PPBrmcOtkK6idZ3G%2Fj7HI47qLtrM46l6GB9g0TO6x%2FZ55YkMI2mpwiLeoD9yWt6Ccdh%2FiakTgYYt9SguOHuG88kyoGKzVTy1oLu7lrI0bJQOb8bkhxGQMU6Zjk%2B9nd33Vb73B8HUzHvkbiWhcLr39Tph5C2mGSOjtpm0N5z15eoJ%2B1hKXsj4OdeKAIyLZhqyYPKVE%2FjX9F3dp&X-Amz-Signature=0d820ecec9150c981a50aed61776281390f6f58272924963fa68706111d06deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
