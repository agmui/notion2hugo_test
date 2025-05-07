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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KATAQIW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgUtD4YusZCueC7A%2BFTBjn8YeDU1pePfdhwLCmmd%2FJHAiEA%2FZxqrWCLmUDSlvEADnPiuk%2BOswfceviOuOesqVjW2RYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDO4sqRapficWsm1BySrcA0sznG5orI92eSA85hcT5kCFnqQqHbkZmTRsBMSE8Ex6iaOub7Tf6s6Wf3WINDWquNNWoMjR6%2FUDjHvmfj8bY0bOFqFme3xR3eix%2FMMRPGI8wbH1eY%2F7nSxd3C6b93LJaYW7sksDIr%2F%2BDR2T6HZasUtvbSic4nnLeAeQiNSE4ruoycgFNn0mPNuUOL6G%2F4MK4xKkcZnuuflFI5Z93B98FnPWxKcbO0Wn4UaluaMtteD8krHpKKJ4UUqQEp%2FU1R5sQpQ43IIcTlfnt6Y18xgd%2BQzazYnZC6jIQiKvq9EE0CTcltbl5qnAErwTE6ggg3Q5BnR0BC54jwX%2BdgKpypINTnsxyZw3htexkuRXgPpXD4BIFVDYokpVBGVuznKbzD1sK8QsaTy3uVIRvjIb1V%2BeSw%2B%2BSCDYVF67iKeH4j663g71rYpPqNmimA9I0vW0FLtPy7Im15Kn%2B7GDsHcdR5VGHQA1IUCuu7dm7Ws764yvEck6yc%2FYfmV8S4Kqv%2FSmJRwbEJ6qnmeZTFddeJ23eaR2AXEgPjMCiK9sHadvqZvi4xU4s1P0M4mmhBTiYZw1d4plxXZNI%2F6M4tPbVUq4lo23WTdAEjsut%2BzVNBhNfuWtF0W%2F1sm7VxQ5pSK%2BUgb%2BMIzo7cAGOqUBn8G8XRqFjFEiBvfPHSqcmnG3QXfTrwR%2Fsp4igqz0lzD9Ur6GWQVHV7HJIGtpabnpBsxj44Ht0MjzPg001Hk%2FWD7UxTw%2BLiTwbWGUC9pym9escC8hhYFi%2B%2Fg20DjmBF3CtM7Z3dmSgUR2Qx9mXC%2BxD3ABKU7XR88E8pxdhZ1m%2FYxAmJn91plGOS9w7iCa7pLPc0RTyCPRIMfFB5KXlpJ8OwdDl8UL&X-Amz-Signature=0af7bcd386b7464cd1bcc48f1ece3c9dffbdb27ed58bf6b60cd9f1143da5fc88&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KATAQIW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgUtD4YusZCueC7A%2BFTBjn8YeDU1pePfdhwLCmmd%2FJHAiEA%2FZxqrWCLmUDSlvEADnPiuk%2BOswfceviOuOesqVjW2RYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDO4sqRapficWsm1BySrcA0sznG5orI92eSA85hcT5kCFnqQqHbkZmTRsBMSE8Ex6iaOub7Tf6s6Wf3WINDWquNNWoMjR6%2FUDjHvmfj8bY0bOFqFme3xR3eix%2FMMRPGI8wbH1eY%2F7nSxd3C6b93LJaYW7sksDIr%2F%2BDR2T6HZasUtvbSic4nnLeAeQiNSE4ruoycgFNn0mPNuUOL6G%2F4MK4xKkcZnuuflFI5Z93B98FnPWxKcbO0Wn4UaluaMtteD8krHpKKJ4UUqQEp%2FU1R5sQpQ43IIcTlfnt6Y18xgd%2BQzazYnZC6jIQiKvq9EE0CTcltbl5qnAErwTE6ggg3Q5BnR0BC54jwX%2BdgKpypINTnsxyZw3htexkuRXgPpXD4BIFVDYokpVBGVuznKbzD1sK8QsaTy3uVIRvjIb1V%2BeSw%2B%2BSCDYVF67iKeH4j663g71rYpPqNmimA9I0vW0FLtPy7Im15Kn%2B7GDsHcdR5VGHQA1IUCuu7dm7Ws764yvEck6yc%2FYfmV8S4Kqv%2FSmJRwbEJ6qnmeZTFddeJ23eaR2AXEgPjMCiK9sHadvqZvi4xU4s1P0M4mmhBTiYZw1d4plxXZNI%2F6M4tPbVUq4lo23WTdAEjsut%2BzVNBhNfuWtF0W%2F1sm7VxQ5pSK%2BUgb%2BMIzo7cAGOqUBn8G8XRqFjFEiBvfPHSqcmnG3QXfTrwR%2Fsp4igqz0lzD9Ur6GWQVHV7HJIGtpabnpBsxj44Ht0MjzPg001Hk%2FWD7UxTw%2BLiTwbWGUC9pym9escC8hhYFi%2B%2Fg20DjmBF3CtM7Z3dmSgUR2Qx9mXC%2BxD3ABKU7XR88E8pxdhZ1m%2FYxAmJn91plGOS9w7iCa7pLPc0RTyCPRIMfFB5KXlpJ8OwdDl8UL&X-Amz-Signature=263f652763a24952fe3ecd9d767ae0fd8b03a4aca55018eda4e41f1c523691d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KATAQIW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgUtD4YusZCueC7A%2BFTBjn8YeDU1pePfdhwLCmmd%2FJHAiEA%2FZxqrWCLmUDSlvEADnPiuk%2BOswfceviOuOesqVjW2RYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDO4sqRapficWsm1BySrcA0sznG5orI92eSA85hcT5kCFnqQqHbkZmTRsBMSE8Ex6iaOub7Tf6s6Wf3WINDWquNNWoMjR6%2FUDjHvmfj8bY0bOFqFme3xR3eix%2FMMRPGI8wbH1eY%2F7nSxd3C6b93LJaYW7sksDIr%2F%2BDR2T6HZasUtvbSic4nnLeAeQiNSE4ruoycgFNn0mPNuUOL6G%2F4MK4xKkcZnuuflFI5Z93B98FnPWxKcbO0Wn4UaluaMtteD8krHpKKJ4UUqQEp%2FU1R5sQpQ43IIcTlfnt6Y18xgd%2BQzazYnZC6jIQiKvq9EE0CTcltbl5qnAErwTE6ggg3Q5BnR0BC54jwX%2BdgKpypINTnsxyZw3htexkuRXgPpXD4BIFVDYokpVBGVuznKbzD1sK8QsaTy3uVIRvjIb1V%2BeSw%2B%2BSCDYVF67iKeH4j663g71rYpPqNmimA9I0vW0FLtPy7Im15Kn%2B7GDsHcdR5VGHQA1IUCuu7dm7Ws764yvEck6yc%2FYfmV8S4Kqv%2FSmJRwbEJ6qnmeZTFddeJ23eaR2AXEgPjMCiK9sHadvqZvi4xU4s1P0M4mmhBTiYZw1d4plxXZNI%2F6M4tPbVUq4lo23WTdAEjsut%2BzVNBhNfuWtF0W%2F1sm7VxQ5pSK%2BUgb%2BMIzo7cAGOqUBn8G8XRqFjFEiBvfPHSqcmnG3QXfTrwR%2Fsp4igqz0lzD9Ur6GWQVHV7HJIGtpabnpBsxj44Ht0MjzPg001Hk%2FWD7UxTw%2BLiTwbWGUC9pym9escC8hhYFi%2B%2Fg20DjmBF3CtM7Z3dmSgUR2Qx9mXC%2BxD3ABKU7XR88E8pxdhZ1m%2FYxAmJn91plGOS9w7iCa7pLPc0RTyCPRIMfFB5KXlpJ8OwdDl8UL&X-Amz-Signature=b10bc629e2489cb6e55fc659f1699e04452486d9e92f03fa4f513442534c453c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
