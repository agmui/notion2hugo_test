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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KQVFXV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfGdHZH85K9pVO3GIPo8ub1tWLzu%2BQHc%2FSh551P0i6%2BAIgZKWQ1xo7IdzbqAUQK78TBNDGjgwErtlK7B3EUM39AM0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJtZxPSBgIuqo3tpsSrcAybCZ31baeftRcnqbxfCzgJ3a4LsR1UlHMDxuKi4HRhuuuHYoG2h2mTM5R9VuyRMd8lRNt1U%2Fh1dKlgWLwfDy3Neohs56BqHf5MYqyy9UI%2Bq%2BorNCyDycP3WF5YKnhvcLoe5v%2Fm22ESqQJy0HJxp5oJPtonk7CAxZjZtTk%2BztdP4MOwvKInWS64G3VVHtVSc161LPtEapVgVaJh%2F3fcnyOV37CNCNgAANatxhnoKh1s3DUVO7NoZ9THQEZ1PkeUEpO2ulhx9TVfCX5b8CHpGK%2F3gcNiATVDVf06BXqbHgbOV9VGTmPg0zedL5TeK9nd9Y2BesvL8j4tFPI7U6xXSEtXy6rW%2FhXriDakchbMO7nIV2DDLzxN7y6RDRtSy4pty92Jz4oRSE2h5dcQvkA536HqR7D4KgogxJJOBWTwkz9oPq1ojROzLl3TSjf1oGcoIgBajLqi8g%2BShFtgLwqlEPESTngVdXhrjYyNCxDXP3N2g0JT6j1lC9%2F7%2F%2FC02qUd7WQ8L1vYm1G0kQ0yEFXgJHpTtfQd1iY6DBpwD%2B5eCHZl%2FS098jMt%2FF2OQR6idvQrv3MB3L%2BjgMKST9DEg6Yx1YzHvUq8XUliKU%2FsyyrpuP%2BIxhZ0noIn0TXGEZn1PMOyjxb8GOqUBMlRl89xfKZljZcKMtyugsFRId8OW63%2BkdeeZ9IRhB3jYg8wH6oEYSPZ7M4pM7enOTFj779cDReXu%2BG9RXZCaKfAaG803uSwMEAHZZ16nb%2B%2F5dNB%2BG6iJxRUu1mjiia3%2F4hNuZrUkULKVNuOC2vzJsOfaMzuOhMtHxyKN0EV3BEq47k1W1GWezXkWxg30GHGRHcQFrJ2hhMh4SN7wK8JAkgf1JBc2&X-Amz-Signature=3599024b50ae078ec2b4b00e22b8783a18c6b2cf5843054688743219798e6a22&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KQVFXV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfGdHZH85K9pVO3GIPo8ub1tWLzu%2BQHc%2FSh551P0i6%2BAIgZKWQ1xo7IdzbqAUQK78TBNDGjgwErtlK7B3EUM39AM0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJtZxPSBgIuqo3tpsSrcAybCZ31baeftRcnqbxfCzgJ3a4LsR1UlHMDxuKi4HRhuuuHYoG2h2mTM5R9VuyRMd8lRNt1U%2Fh1dKlgWLwfDy3Neohs56BqHf5MYqyy9UI%2Bq%2BorNCyDycP3WF5YKnhvcLoe5v%2Fm22ESqQJy0HJxp5oJPtonk7CAxZjZtTk%2BztdP4MOwvKInWS64G3VVHtVSc161LPtEapVgVaJh%2F3fcnyOV37CNCNgAANatxhnoKh1s3DUVO7NoZ9THQEZ1PkeUEpO2ulhx9TVfCX5b8CHpGK%2F3gcNiATVDVf06BXqbHgbOV9VGTmPg0zedL5TeK9nd9Y2BesvL8j4tFPI7U6xXSEtXy6rW%2FhXriDakchbMO7nIV2DDLzxN7y6RDRtSy4pty92Jz4oRSE2h5dcQvkA536HqR7D4KgogxJJOBWTwkz9oPq1ojROzLl3TSjf1oGcoIgBajLqi8g%2BShFtgLwqlEPESTngVdXhrjYyNCxDXP3N2g0JT6j1lC9%2F7%2F%2FC02qUd7WQ8L1vYm1G0kQ0yEFXgJHpTtfQd1iY6DBpwD%2B5eCHZl%2FS098jMt%2FF2OQR6idvQrv3MB3L%2BjgMKST9DEg6Yx1YzHvUq8XUliKU%2FsyyrpuP%2BIxhZ0noIn0TXGEZn1PMOyjxb8GOqUBMlRl89xfKZljZcKMtyugsFRId8OW63%2BkdeeZ9IRhB3jYg8wH6oEYSPZ7M4pM7enOTFj779cDReXu%2BG9RXZCaKfAaG803uSwMEAHZZ16nb%2B%2F5dNB%2BG6iJxRUu1mjiia3%2F4hNuZrUkULKVNuOC2vzJsOfaMzuOhMtHxyKN0EV3BEq47k1W1GWezXkWxg30GHGRHcQFrJ2hhMh4SN7wK8JAkgf1JBc2&X-Amz-Signature=2094eb5336788f6a695da8b5c62431ecb08f089452fd98bc7ee4c75c28a5336e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KQVFXV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfGdHZH85K9pVO3GIPo8ub1tWLzu%2BQHc%2FSh551P0i6%2BAIgZKWQ1xo7IdzbqAUQK78TBNDGjgwErtlK7B3EUM39AM0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJtZxPSBgIuqo3tpsSrcAybCZ31baeftRcnqbxfCzgJ3a4LsR1UlHMDxuKi4HRhuuuHYoG2h2mTM5R9VuyRMd8lRNt1U%2Fh1dKlgWLwfDy3Neohs56BqHf5MYqyy9UI%2Bq%2BorNCyDycP3WF5YKnhvcLoe5v%2Fm22ESqQJy0HJxp5oJPtonk7CAxZjZtTk%2BztdP4MOwvKInWS64G3VVHtVSc161LPtEapVgVaJh%2F3fcnyOV37CNCNgAANatxhnoKh1s3DUVO7NoZ9THQEZ1PkeUEpO2ulhx9TVfCX5b8CHpGK%2F3gcNiATVDVf06BXqbHgbOV9VGTmPg0zedL5TeK9nd9Y2BesvL8j4tFPI7U6xXSEtXy6rW%2FhXriDakchbMO7nIV2DDLzxN7y6RDRtSy4pty92Jz4oRSE2h5dcQvkA536HqR7D4KgogxJJOBWTwkz9oPq1ojROzLl3TSjf1oGcoIgBajLqi8g%2BShFtgLwqlEPESTngVdXhrjYyNCxDXP3N2g0JT6j1lC9%2F7%2F%2FC02qUd7WQ8L1vYm1G0kQ0yEFXgJHpTtfQd1iY6DBpwD%2B5eCHZl%2FS098jMt%2FF2OQR6idvQrv3MB3L%2BjgMKST9DEg6Yx1YzHvUq8XUliKU%2FsyyrpuP%2BIxhZ0noIn0TXGEZn1PMOyjxb8GOqUBMlRl89xfKZljZcKMtyugsFRId8OW63%2BkdeeZ9IRhB3jYg8wH6oEYSPZ7M4pM7enOTFj779cDReXu%2BG9RXZCaKfAaG803uSwMEAHZZ16nb%2B%2F5dNB%2BG6iJxRUu1mjiia3%2F4hNuZrUkULKVNuOC2vzJsOfaMzuOhMtHxyKN0EV3BEq47k1W1GWezXkWxg30GHGRHcQFrJ2hhMh4SN7wK8JAkgf1JBc2&X-Amz-Signature=b2d2d900d4464885577458241a809f9134cdd588b849c0a42540d1ba129bfdaa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
