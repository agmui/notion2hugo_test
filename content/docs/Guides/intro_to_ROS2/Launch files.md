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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7SL7AX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDpW%2FoDiUx2TiPscoha4mC6Fkpho%2F3xiTJxwHV6uGn3wAIgfx47QW9RytIrha5NfpW6QwHbNAcWGdCW6M%2FvcJZknT0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAyxrc2wQFUqzInclCrcAxpXE%2FvE0zi6qsCCFYyAOx58%2BMVlGcRdvyA3kYI4Ds8dNNHeeVA2JXMdjDuDoFHptkJDEIMpMu3OLW2exSq%2FGk2ZY6eApL4rfJLOUcY6OhKdaNhEJJq7Mn7%2FqU%2FU1VsJRzodcx%2BrKeOjwYqvxD9f%2FKN1AsOFY4Kcr1VqXIofg%2FLWTcnHw5ZF7RFAbfCJ%2F%2F1%2FTsaxPM12s5pgTn7XY0Cv7rC8DppUwnkcZkfqRxt3xOnVc8D%2FkccYQboM2YvGdzXcShk%2Fo7rw1n5RUYvpxa%2Bo5D4Yog2MQ5eyKj6gSL9HStriJG1ZP5J%2BgxJI%2Bj5UbmbX4JVQPkB1TKgfR6LRPlj7BOYjRYi2sB8vv9tvcdRGsl%2FKI7qfYhot1zcpWFbkn%2F2q%2B0fPTz3Nf9yV5N80j477h2uOXPrYnfs4snK6qAqTW1%2BKpXPh2n4Gxd6aacFCoo3OJb%2B1tbkbj0kARDVb2glFAUc4iNcaGiPLp69JOEP7gPwBLNsTnT9n59JHdavnZ0g3sLytplrSbGP3e0N%2Fg%2BWbu2pWAzfWyyZT2E4q3xyKHvJ5CmNw0K%2FsVEZs7wNo0ewRXuy7x0DK73PDexi83u7STH8DVMnnGWWWj16EADZTfedt1pWRYRqaM2VVTmSlMICgoL8GOqUBYuxJPJh0yRfp%2BGXvzZbvP63vXV1Z4UiyNw5TGNLTCPkfyMjvdb0aaAv9E%2FTa4jl1hrPSzFd1yrHu2T39d6qSOkdZ0e%2Fe6JqqbTg0Mw4rmsF3YAbsmWub%2BOs24FmMUzXHiXpdQSa6uothM0zk6V7Px%2Boha%2BUQousVgzP6HbEgqUApazgOrL6pQ4b15%2ByVhsnm6oL5dV6Ti6Jiz%2F9f1JZvN%2BDKDdRw&X-Amz-Signature=67309849fc861e0b667c454d4dabe948a87e8728942503d961a8587eb7d13cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7SL7AX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDpW%2FoDiUx2TiPscoha4mC6Fkpho%2F3xiTJxwHV6uGn3wAIgfx47QW9RytIrha5NfpW6QwHbNAcWGdCW6M%2FvcJZknT0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAyxrc2wQFUqzInclCrcAxpXE%2FvE0zi6qsCCFYyAOx58%2BMVlGcRdvyA3kYI4Ds8dNNHeeVA2JXMdjDuDoFHptkJDEIMpMu3OLW2exSq%2FGk2ZY6eApL4rfJLOUcY6OhKdaNhEJJq7Mn7%2FqU%2FU1VsJRzodcx%2BrKeOjwYqvxD9f%2FKN1AsOFY4Kcr1VqXIofg%2FLWTcnHw5ZF7RFAbfCJ%2F%2F1%2FTsaxPM12s5pgTn7XY0Cv7rC8DppUwnkcZkfqRxt3xOnVc8D%2FkccYQboM2YvGdzXcShk%2Fo7rw1n5RUYvpxa%2Bo5D4Yog2MQ5eyKj6gSL9HStriJG1ZP5J%2BgxJI%2Bj5UbmbX4JVQPkB1TKgfR6LRPlj7BOYjRYi2sB8vv9tvcdRGsl%2FKI7qfYhot1zcpWFbkn%2F2q%2B0fPTz3Nf9yV5N80j477h2uOXPrYnfs4snK6qAqTW1%2BKpXPh2n4Gxd6aacFCoo3OJb%2B1tbkbj0kARDVb2glFAUc4iNcaGiPLp69JOEP7gPwBLNsTnT9n59JHdavnZ0g3sLytplrSbGP3e0N%2Fg%2BWbu2pWAzfWyyZT2E4q3xyKHvJ5CmNw0K%2FsVEZs7wNo0ewRXuy7x0DK73PDexi83u7STH8DVMnnGWWWj16EADZTfedt1pWRYRqaM2VVTmSlMICgoL8GOqUBYuxJPJh0yRfp%2BGXvzZbvP63vXV1Z4UiyNw5TGNLTCPkfyMjvdb0aaAv9E%2FTa4jl1hrPSzFd1yrHu2T39d6qSOkdZ0e%2Fe6JqqbTg0Mw4rmsF3YAbsmWub%2BOs24FmMUzXHiXpdQSa6uothM0zk6V7Px%2Boha%2BUQousVgzP6HbEgqUApazgOrL6pQ4b15%2ByVhsnm6oL5dV6Ti6Jiz%2F9f1JZvN%2BDKDdRw&X-Amz-Signature=63d206c0ff81930ef97fd4c4d65fab1e8f43129f1f011aa140a696e98d4cc0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL7SL7AX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDpW%2FoDiUx2TiPscoha4mC6Fkpho%2F3xiTJxwHV6uGn3wAIgfx47QW9RytIrha5NfpW6QwHbNAcWGdCW6M%2FvcJZknT0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAyxrc2wQFUqzInclCrcAxpXE%2FvE0zi6qsCCFYyAOx58%2BMVlGcRdvyA3kYI4Ds8dNNHeeVA2JXMdjDuDoFHptkJDEIMpMu3OLW2exSq%2FGk2ZY6eApL4rfJLOUcY6OhKdaNhEJJq7Mn7%2FqU%2FU1VsJRzodcx%2BrKeOjwYqvxD9f%2FKN1AsOFY4Kcr1VqXIofg%2FLWTcnHw5ZF7RFAbfCJ%2F%2F1%2FTsaxPM12s5pgTn7XY0Cv7rC8DppUwnkcZkfqRxt3xOnVc8D%2FkccYQboM2YvGdzXcShk%2Fo7rw1n5RUYvpxa%2Bo5D4Yog2MQ5eyKj6gSL9HStriJG1ZP5J%2BgxJI%2Bj5UbmbX4JVQPkB1TKgfR6LRPlj7BOYjRYi2sB8vv9tvcdRGsl%2FKI7qfYhot1zcpWFbkn%2F2q%2B0fPTz3Nf9yV5N80j477h2uOXPrYnfs4snK6qAqTW1%2BKpXPh2n4Gxd6aacFCoo3OJb%2B1tbkbj0kARDVb2glFAUc4iNcaGiPLp69JOEP7gPwBLNsTnT9n59JHdavnZ0g3sLytplrSbGP3e0N%2Fg%2BWbu2pWAzfWyyZT2E4q3xyKHvJ5CmNw0K%2FsVEZs7wNo0ewRXuy7x0DK73PDexi83u7STH8DVMnnGWWWj16EADZTfedt1pWRYRqaM2VVTmSlMICgoL8GOqUBYuxJPJh0yRfp%2BGXvzZbvP63vXV1Z4UiyNw5TGNLTCPkfyMjvdb0aaAv9E%2FTa4jl1hrPSzFd1yrHu2T39d6qSOkdZ0e%2Fe6JqqbTg0Mw4rmsF3YAbsmWub%2BOs24FmMUzXHiXpdQSa6uothM0zk6V7Px%2Boha%2BUQousVgzP6HbEgqUApazgOrL6pQ4b15%2ByVhsnm6oL5dV6Ti6Jiz%2F9f1JZvN%2BDKDdRw&X-Amz-Signature=3acff7ea3858709ec65285bf4ee876270d91e2b663769bd50e170a316445b444&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
