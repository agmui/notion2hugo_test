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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMRARYG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzXEYZuYPUh0jTNoymO5yJDIpiEirn2Uf4iE1ut8WpKwIhANd1QKp9fDKtnLEsLak6jLcE0D2%2FeyTMMCatwbB63fgoKv8DCDMQABoMNjM3NDIzMTgzODA1IgypW3Wg1GOu94DEHw4q3AMmDl7NlDE2nnSgQVJTrXO2qN3QqD99VIKwQE4a6uEdjTRW%2FF%2F32LlNMZ1FYn0ksbQzg8FRJFJvcFkujcGLyMe99cOnupLr%2BCHj%2BblDgdrwXvkRdkIO7cJTOJheU7XlQ2dQf2kFINWsnQ1wszTfuEHGrS0KFT8%2Bh2jYmFG62HtEa9O%2Fdi8VRzIpc%2FANHRupdBI%2FLb%2BBHcSRLUtpPGb4qrlqVys3Iyqow0iwkl7L%2B58pS96qFHB6h%2BXMiYYVAaHj6%2BQ9kDs32Q7dYSeItIDBV4rESfrYGLnEy3Dl9xnXfHJVUiKiDVzaN2JOhtE%2FFPfS50Mxm1JymCTvKetF24D9NXWWtBYQzgq4rMGjPil6r4HddsbH1kLHQEx%2BBVNaQdMu5exvLY%2FNTwNo%2BeabOvv157mriWsV7LbaEw0iEH2APX%2FC4u0WXxtJNTgOBcLy16V30jUSuZFfoUnuaOA%2BRVQNL%2FA1jVdbSatpO%2Ftl1oPsfBV3IakmoidkbO5slJeMQZpGBo%2FwtmERrSWVdIvcQWC0k%2FjYpWA0z5xIaphDxDbHBVRlVPHWUgGFyQfw68DUbEL7a0c5ssTD%2BSz8v9sswECknPbNcfyC5EAolt%2FcvzmOlYnFU1vl9bsSHCqrya1qTDDh%2BuPABjqkAbBjsPjdBkVsckKYlVMc%2FbLM2e5TTKUEOHi7QL8EjRn9jPYQ3AVWpxyZMqnc2QHkkIy2r9J12tCzP386NTDZjdHaDxvPwc%2BMdW0ALptSr69ENB8GN4Ghyui5TnQrk3Abut%2F9a9W%2BQOJzL8pNmu3bjHVVO%2Bj89%2FDHwA4mdhWD32rowtvLxFmvjJEDUGFnQfWNV4RrFWkRh1UB0lCT6TxRiJVO%2Br2J&X-Amz-Signature=82ba574db29002b56e390f901dffcd49832abc3b083d7fd12320bade66898ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMRARYG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzXEYZuYPUh0jTNoymO5yJDIpiEirn2Uf4iE1ut8WpKwIhANd1QKp9fDKtnLEsLak6jLcE0D2%2FeyTMMCatwbB63fgoKv8DCDMQABoMNjM3NDIzMTgzODA1IgypW3Wg1GOu94DEHw4q3AMmDl7NlDE2nnSgQVJTrXO2qN3QqD99VIKwQE4a6uEdjTRW%2FF%2F32LlNMZ1FYn0ksbQzg8FRJFJvcFkujcGLyMe99cOnupLr%2BCHj%2BblDgdrwXvkRdkIO7cJTOJheU7XlQ2dQf2kFINWsnQ1wszTfuEHGrS0KFT8%2Bh2jYmFG62HtEa9O%2Fdi8VRzIpc%2FANHRupdBI%2FLb%2BBHcSRLUtpPGb4qrlqVys3Iyqow0iwkl7L%2B58pS96qFHB6h%2BXMiYYVAaHj6%2BQ9kDs32Q7dYSeItIDBV4rESfrYGLnEy3Dl9xnXfHJVUiKiDVzaN2JOhtE%2FFPfS50Mxm1JymCTvKetF24D9NXWWtBYQzgq4rMGjPil6r4HddsbH1kLHQEx%2BBVNaQdMu5exvLY%2FNTwNo%2BeabOvv157mriWsV7LbaEw0iEH2APX%2FC4u0WXxtJNTgOBcLy16V30jUSuZFfoUnuaOA%2BRVQNL%2FA1jVdbSatpO%2Ftl1oPsfBV3IakmoidkbO5slJeMQZpGBo%2FwtmERrSWVdIvcQWC0k%2FjYpWA0z5xIaphDxDbHBVRlVPHWUgGFyQfw68DUbEL7a0c5ssTD%2BSz8v9sswECknPbNcfyC5EAolt%2FcvzmOlYnFU1vl9bsSHCqrya1qTDDh%2BuPABjqkAbBjsPjdBkVsckKYlVMc%2FbLM2e5TTKUEOHi7QL8EjRn9jPYQ3AVWpxyZMqnc2QHkkIy2r9J12tCzP386NTDZjdHaDxvPwc%2BMdW0ALptSr69ENB8GN4Ghyui5TnQrk3Abut%2F9a9W%2BQOJzL8pNmu3bjHVVO%2Bj89%2FDHwA4mdhWD32rowtvLxFmvjJEDUGFnQfWNV4RrFWkRh1UB0lCT6TxRiJVO%2Br2J&X-Amz-Signature=658f787cf349820fd0e8ad3252d99724092480f062112853c11a44315a6158a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMRARYG%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzXEYZuYPUh0jTNoymO5yJDIpiEirn2Uf4iE1ut8WpKwIhANd1QKp9fDKtnLEsLak6jLcE0D2%2FeyTMMCatwbB63fgoKv8DCDMQABoMNjM3NDIzMTgzODA1IgypW3Wg1GOu94DEHw4q3AMmDl7NlDE2nnSgQVJTrXO2qN3QqD99VIKwQE4a6uEdjTRW%2FF%2F32LlNMZ1FYn0ksbQzg8FRJFJvcFkujcGLyMe99cOnupLr%2BCHj%2BblDgdrwXvkRdkIO7cJTOJheU7XlQ2dQf2kFINWsnQ1wszTfuEHGrS0KFT8%2Bh2jYmFG62HtEa9O%2Fdi8VRzIpc%2FANHRupdBI%2FLb%2BBHcSRLUtpPGb4qrlqVys3Iyqow0iwkl7L%2B58pS96qFHB6h%2BXMiYYVAaHj6%2BQ9kDs32Q7dYSeItIDBV4rESfrYGLnEy3Dl9xnXfHJVUiKiDVzaN2JOhtE%2FFPfS50Mxm1JymCTvKetF24D9NXWWtBYQzgq4rMGjPil6r4HddsbH1kLHQEx%2BBVNaQdMu5exvLY%2FNTwNo%2BeabOvv157mriWsV7LbaEw0iEH2APX%2FC4u0WXxtJNTgOBcLy16V30jUSuZFfoUnuaOA%2BRVQNL%2FA1jVdbSatpO%2Ftl1oPsfBV3IakmoidkbO5slJeMQZpGBo%2FwtmERrSWVdIvcQWC0k%2FjYpWA0z5xIaphDxDbHBVRlVPHWUgGFyQfw68DUbEL7a0c5ssTD%2BSz8v9sswECknPbNcfyC5EAolt%2FcvzmOlYnFU1vl9bsSHCqrya1qTDDh%2BuPABjqkAbBjsPjdBkVsckKYlVMc%2FbLM2e5TTKUEOHi7QL8EjRn9jPYQ3AVWpxyZMqnc2QHkkIy2r9J12tCzP386NTDZjdHaDxvPwc%2BMdW0ALptSr69ENB8GN4Ghyui5TnQrk3Abut%2F9a9W%2BQOJzL8pNmu3bjHVVO%2Bj89%2FDHwA4mdhWD32rowtvLxFmvjJEDUGFnQfWNV4RrFWkRh1UB0lCT6TxRiJVO%2Br2J&X-Amz-Signature=b5061e42b507a03467098b0a5aa0ea4d654c255d2935161d2a79fe1b9f9ee9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
