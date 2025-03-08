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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VER6DBN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD9orUjLNohPl65mqrEBvgCX7WRJR5TuuScUchW8wma5AIgIqhRq9vakkIuaq%2F%2BJEQBsoZ6Lwu%2Byyj%2BGkYD2%2Bw0KJcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDE5fdb8P7rDvw14EVyrcA8Gzn4Gcq7PtLrGZkdbiSiikZms5WvNv5Ly6%2FrW0F%2B6qj2Fo8OFGZZpVClTJ7WZzHYJA0yMNLKNEmw92I7iJxWqAcwNHHefXmWRaqVvjgoHmiU7%2B8x987mxbB1amEG%2Be1CyPvjkTQkdBKxkoWLHkaF9%2FI3qjtPYFWULIMCd0WnRAd2%2B7pSj0KPXV9pWZrVXZbJ5A%2FZakmX2w8P8lxvyOJwYqbHtGD4P0LUjRAsqEaIDGXpv6g2vr1ir55%2FmahX6sDruX2RPURpAwlqTdDrCYRrZs4ddyg9bIzEqnaWgJS8sxcjGKq9LfcUru3MtRPKFCdt4%2B%2FW0F6zl%2FKZXZ1kRskwU%2BJzCQKKFcVjciZjtwZbFJRKxfEa7sksGmWBf7uMhjmZxJcytukX1VJ6dXvbh0NuNoTHv0YktQP%2BvbF82c1567IKlCb9sVI0vBQ8SI%2B%2FEFWLDsCyTuOvJ5ARi6rDU6Wi%2FN9JEceW7AFEAF1MTCjb9tGF%2B5Daw16m9mBUC2T0rxrUt39%2BFWE%2B51Dm7Gi6qaOuPbGLsuE%2FsRn8zC7kNkxQL9npyu3j5IXKTMY%2BNUgwJYlScqQxzMNdZjoe9Wi16d8Y22GAEZ8w7ic25qxei11OzE0YiaBRas8rt7FQQ7MIbhr74GOqUBg4iYarOH29ndWjrGcZvx8LYbN823BQhOuNoI1egrcp6rHWUnvWy5gML8ea6HcGqEU3lOiSjMOFWpWMk9QxgUHfDVz9g4budhrTRZPHhSfK9PvGvHo%2BU%2BzdH8pfBDcn4FzCBskOnylaUXcH%2BH9Pzx9XmsHp3%2FNgrneFCEuJ5rYXlBkUcgL3vlJORjR%2FAR2571Ux%2Bz2jPZFJWUvqnTe6Lqvs%2BXL2yF&X-Amz-Signature=71a873d47d33f78c445c518ebe5e42e0686e824a7f546b9f2b506027006a5fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VER6DBN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD9orUjLNohPl65mqrEBvgCX7WRJR5TuuScUchW8wma5AIgIqhRq9vakkIuaq%2F%2BJEQBsoZ6Lwu%2Byyj%2BGkYD2%2Bw0KJcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDE5fdb8P7rDvw14EVyrcA8Gzn4Gcq7PtLrGZkdbiSiikZms5WvNv5Ly6%2FrW0F%2B6qj2Fo8OFGZZpVClTJ7WZzHYJA0yMNLKNEmw92I7iJxWqAcwNHHefXmWRaqVvjgoHmiU7%2B8x987mxbB1amEG%2Be1CyPvjkTQkdBKxkoWLHkaF9%2FI3qjtPYFWULIMCd0WnRAd2%2B7pSj0KPXV9pWZrVXZbJ5A%2FZakmX2w8P8lxvyOJwYqbHtGD4P0LUjRAsqEaIDGXpv6g2vr1ir55%2FmahX6sDruX2RPURpAwlqTdDrCYRrZs4ddyg9bIzEqnaWgJS8sxcjGKq9LfcUru3MtRPKFCdt4%2B%2FW0F6zl%2FKZXZ1kRskwU%2BJzCQKKFcVjciZjtwZbFJRKxfEa7sksGmWBf7uMhjmZxJcytukX1VJ6dXvbh0NuNoTHv0YktQP%2BvbF82c1567IKlCb9sVI0vBQ8SI%2B%2FEFWLDsCyTuOvJ5ARi6rDU6Wi%2FN9JEceW7AFEAF1MTCjb9tGF%2B5Daw16m9mBUC2T0rxrUt39%2BFWE%2B51Dm7Gi6qaOuPbGLsuE%2FsRn8zC7kNkxQL9npyu3j5IXKTMY%2BNUgwJYlScqQxzMNdZjoe9Wi16d8Y22GAEZ8w7ic25qxei11OzE0YiaBRas8rt7FQQ7MIbhr74GOqUBg4iYarOH29ndWjrGcZvx8LYbN823BQhOuNoI1egrcp6rHWUnvWy5gML8ea6HcGqEU3lOiSjMOFWpWMk9QxgUHfDVz9g4budhrTRZPHhSfK9PvGvHo%2BU%2BzdH8pfBDcn4FzCBskOnylaUXcH%2BH9Pzx9XmsHp3%2FNgrneFCEuJ5rYXlBkUcgL3vlJORjR%2FAR2571Ux%2Bz2jPZFJWUvqnTe6Lqvs%2BXL2yF&X-Amz-Signature=638f4e0892ea9d5c048f4eae3d62666d3835152701b98275f0c9e2b24d9f7f43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VER6DBN%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD9orUjLNohPl65mqrEBvgCX7WRJR5TuuScUchW8wma5AIgIqhRq9vakkIuaq%2F%2BJEQBsoZ6Lwu%2Byyj%2BGkYD2%2Bw0KJcq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDE5fdb8P7rDvw14EVyrcA8Gzn4Gcq7PtLrGZkdbiSiikZms5WvNv5Ly6%2FrW0F%2B6qj2Fo8OFGZZpVClTJ7WZzHYJA0yMNLKNEmw92I7iJxWqAcwNHHefXmWRaqVvjgoHmiU7%2B8x987mxbB1amEG%2Be1CyPvjkTQkdBKxkoWLHkaF9%2FI3qjtPYFWULIMCd0WnRAd2%2B7pSj0KPXV9pWZrVXZbJ5A%2FZakmX2w8P8lxvyOJwYqbHtGD4P0LUjRAsqEaIDGXpv6g2vr1ir55%2FmahX6sDruX2RPURpAwlqTdDrCYRrZs4ddyg9bIzEqnaWgJS8sxcjGKq9LfcUru3MtRPKFCdt4%2B%2FW0F6zl%2FKZXZ1kRskwU%2BJzCQKKFcVjciZjtwZbFJRKxfEa7sksGmWBf7uMhjmZxJcytukX1VJ6dXvbh0NuNoTHv0YktQP%2BvbF82c1567IKlCb9sVI0vBQ8SI%2B%2FEFWLDsCyTuOvJ5ARi6rDU6Wi%2FN9JEceW7AFEAF1MTCjb9tGF%2B5Daw16m9mBUC2T0rxrUt39%2BFWE%2B51Dm7Gi6qaOuPbGLsuE%2FsRn8zC7kNkxQL9npyu3j5IXKTMY%2BNUgwJYlScqQxzMNdZjoe9Wi16d8Y22GAEZ8w7ic25qxei11OzE0YiaBRas8rt7FQQ7MIbhr74GOqUBg4iYarOH29ndWjrGcZvx8LYbN823BQhOuNoI1egrcp6rHWUnvWy5gML8ea6HcGqEU3lOiSjMOFWpWMk9QxgUHfDVz9g4budhrTRZPHhSfK9PvGvHo%2BU%2BzdH8pfBDcn4FzCBskOnylaUXcH%2BH9Pzx9XmsHp3%2FNgrneFCEuJ5rYXlBkUcgL3vlJORjR%2FAR2571Ux%2Bz2jPZFJWUvqnTe6Lqvs%2BXL2yF&X-Amz-Signature=86f98b928b628eb06cde393f5f2a820f688294d21f877b03d34a0073aeece023&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
