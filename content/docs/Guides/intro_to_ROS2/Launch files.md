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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SGE2PH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDldFUDMxk65GOsXxsADskppYRzwqLN0lbGa8x3HS%2BT%2FAiEApu1pscpwd4XNkNNWaA9NdK94ZiBlLJm3G6QRtEa2sCUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAIux6P0COe3ndocCrcA1vdOma8H0OndoGoYb1xTSnrMLJuInSYScEBQqxSoM2y%2BaqrEuioqhXmFkUR2G3ev3guUa7SStysic9hsgcWcEAUnDaogYnrBgSytiLaFbavsDtZeTGaO9R2%2FugAOmJWUmp6PIjlr4cmijJsZwt0HuVUNGDvJO8z2B%2FlCxBsa8k%2Fjadef84ZBahf2D%2FlhBk6PzT0vAN4C%2Fzp7HGPv%2B39tKZaqpvJc61RHj4MlbnnqttBLwB61cQoO6YPZwLzxqcFu6y2E%2BjSPesZyEEJ4HhfHSxN%2BjtGiwQpFHgOBijiVwZ6BXd9gyCt7O2vLjTpyk3OVzbtQhtTOxNbnTAtmeW5wjomFpjoA71BynWcEm9JZB%2B6pTvcN4vIbDqNNYNBnJkYIbgQAdb%2B2iTtSMRBOsLX7kKlpKsx7U02GVgV9G1FrhVgQyxFsT2K%2BG%2FFqSAIFN3AG%2BmZk%2BqQe2xAmhTwtEgnSDLPHf0FtN8%2F7hZLKUjazZEhwoUtvlVJ7qOHrHNPoIW2ifZesdqmTBO8hNAYTLXgurtshtj9yII3Gdz7ftH9XQzXV8l2hQYXowklbKDhAgso9lusco4YuDTVltcD0mbqrhXghlzReFl9bu6%2FA%2BC7jHVQgXwED2%2FoY0O5OjGfMIDp48IGOqUBoxo4gZmyu%2FBXBGI8pe0WV%2BZ8KaSDfFqf2vtTiKUIOUVe5e9ZdbvOlKuBkQXS31ytcb1pqhDqJMEbPRHeBOHKxJNwubgobcx0kED%2FgCz5xLjMEPxvBqCKGrFG5RZCJQk8En07M%2BmFY7QrnsujU9E7pXCngo1mzTZjzT7WI0u2IbVo6EN5VRK%2BmMIvpgJRmkFtOaW3EQDpc9%2B5pypZHhCVGayCTEsj&X-Amz-Signature=86d21fc74617fc2b53933ae80dc21f0da1b94ba8b97d4fad86a5bff1e98bf215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SGE2PH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDldFUDMxk65GOsXxsADskppYRzwqLN0lbGa8x3HS%2BT%2FAiEApu1pscpwd4XNkNNWaA9NdK94ZiBlLJm3G6QRtEa2sCUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAIux6P0COe3ndocCrcA1vdOma8H0OndoGoYb1xTSnrMLJuInSYScEBQqxSoM2y%2BaqrEuioqhXmFkUR2G3ev3guUa7SStysic9hsgcWcEAUnDaogYnrBgSytiLaFbavsDtZeTGaO9R2%2FugAOmJWUmp6PIjlr4cmijJsZwt0HuVUNGDvJO8z2B%2FlCxBsa8k%2Fjadef84ZBahf2D%2FlhBk6PzT0vAN4C%2Fzp7HGPv%2B39tKZaqpvJc61RHj4MlbnnqttBLwB61cQoO6YPZwLzxqcFu6y2E%2BjSPesZyEEJ4HhfHSxN%2BjtGiwQpFHgOBijiVwZ6BXd9gyCt7O2vLjTpyk3OVzbtQhtTOxNbnTAtmeW5wjomFpjoA71BynWcEm9JZB%2B6pTvcN4vIbDqNNYNBnJkYIbgQAdb%2B2iTtSMRBOsLX7kKlpKsx7U02GVgV9G1FrhVgQyxFsT2K%2BG%2FFqSAIFN3AG%2BmZk%2BqQe2xAmhTwtEgnSDLPHf0FtN8%2F7hZLKUjazZEhwoUtvlVJ7qOHrHNPoIW2ifZesdqmTBO8hNAYTLXgurtshtj9yII3Gdz7ftH9XQzXV8l2hQYXowklbKDhAgso9lusco4YuDTVltcD0mbqrhXghlzReFl9bu6%2FA%2BC7jHVQgXwED2%2FoY0O5OjGfMIDp48IGOqUBoxo4gZmyu%2FBXBGI8pe0WV%2BZ8KaSDfFqf2vtTiKUIOUVe5e9ZdbvOlKuBkQXS31ytcb1pqhDqJMEbPRHeBOHKxJNwubgobcx0kED%2FgCz5xLjMEPxvBqCKGrFG5RZCJQk8En07M%2BmFY7QrnsujU9E7pXCngo1mzTZjzT7WI0u2IbVo6EN5VRK%2BmMIvpgJRmkFtOaW3EQDpc9%2B5pypZHhCVGayCTEsj&X-Amz-Signature=c3ca0b28014ad22ef30ff61d556f3697bbe5cd08f6bf6c14f38f1a03b1634298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SGE2PH%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDldFUDMxk65GOsXxsADskppYRzwqLN0lbGa8x3HS%2BT%2FAiEApu1pscpwd4XNkNNWaA9NdK94ZiBlLJm3G6QRtEa2sCUqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAIux6P0COe3ndocCrcA1vdOma8H0OndoGoYb1xTSnrMLJuInSYScEBQqxSoM2y%2BaqrEuioqhXmFkUR2G3ev3guUa7SStysic9hsgcWcEAUnDaogYnrBgSytiLaFbavsDtZeTGaO9R2%2FugAOmJWUmp6PIjlr4cmijJsZwt0HuVUNGDvJO8z2B%2FlCxBsa8k%2Fjadef84ZBahf2D%2FlhBk6PzT0vAN4C%2Fzp7HGPv%2B39tKZaqpvJc61RHj4MlbnnqttBLwB61cQoO6YPZwLzxqcFu6y2E%2BjSPesZyEEJ4HhfHSxN%2BjtGiwQpFHgOBijiVwZ6BXd9gyCt7O2vLjTpyk3OVzbtQhtTOxNbnTAtmeW5wjomFpjoA71BynWcEm9JZB%2B6pTvcN4vIbDqNNYNBnJkYIbgQAdb%2B2iTtSMRBOsLX7kKlpKsx7U02GVgV9G1FrhVgQyxFsT2K%2BG%2FFqSAIFN3AG%2BmZk%2BqQe2xAmhTwtEgnSDLPHf0FtN8%2F7hZLKUjazZEhwoUtvlVJ7qOHrHNPoIW2ifZesdqmTBO8hNAYTLXgurtshtj9yII3Gdz7ftH9XQzXV8l2hQYXowklbKDhAgso9lusco4YuDTVltcD0mbqrhXghlzReFl9bu6%2FA%2BC7jHVQgXwED2%2FoY0O5OjGfMIDp48IGOqUBoxo4gZmyu%2FBXBGI8pe0WV%2BZ8KaSDfFqf2vtTiKUIOUVe5e9ZdbvOlKuBkQXS31ytcb1pqhDqJMEbPRHeBOHKxJNwubgobcx0kED%2FgCz5xLjMEPxvBqCKGrFG5RZCJQk8En07M%2BmFY7QrnsujU9E7pXCngo1mzTZjzT7WI0u2IbVo6EN5VRK%2BmMIvpgJRmkFtOaW3EQDpc9%2B5pypZHhCVGayCTEsj&X-Amz-Signature=cef1517613f577904d7a5a146cc9fb792bca7864b88e5d6d678e478ec40e4f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
