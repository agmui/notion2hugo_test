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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N3ZU4F%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeTAlmIOJUNnwO5oqupY%2FkrYcv8kXo8QTvQLlibGq2XAiBg7hd169cotjnqHSF%2FJ0jfNxOC5C3preVCQCpodrDtNir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMowiEiHti75qkbi94KtwDs37PXUJDbrlZznzwmwtGciKYNcddhbDE4GTuWQ60D8FTpxEJ1lNWpb2e4zsc5EgJFRchBv9v%2BovJ3CMZUBsm5n2run4XuLlVSsGw0gwr5hMHbsdL4hdUZRniofsnwq8cSpUMjH%2F5aArRwR739TGMs5AiaJPGY%2FVbUv%2F%2FYOLZA87%2B3z8lfoAdm6A2Mn9UwfzjQ34JcYyfnmlYvyyqos6qR8JmKTPgrk2Ksp9sCEtKxd6EMX7S1MFTZZcjDUMhkvJOXLertBSwTrmDVctTLYpw1xCGhIgaYIhL9UF%2BQCG%2BpfPy%2BjKldkaEIrjeAVq8zouQWLZ4JT8HzKymuVbUcR9J818vx0Q7gyIeyldQN9LRr1JAgVoAId9Yob9nR%2FfvnkN0R2NHChPBqtorKAB0WBvAxasil6cYDOFHKwRKhx%2BoElQU6srYPj95lUBB47u3T4dFQ5WI492ZA%2F2uh28OU4AT7ISix5VN2QTOyuXem%2BC3%2F9Ij9k%2Fd63xbIcrThfy1r7PvkywF%2BRARsppMkFiOoBOhOlEVIClhzZ93lvYgUHBj2JwIw4wuDzqSrZrynoCNbkgYsmD%2FR%2BMghOntmfbUuta%2BR9N4bUOed%2FU%2BPy7AHA%2F%2Br1tlqjlGpotirgWFujgwzKvsvQY6pgG5sZeiKgoaXoMJiHGvetNKmnrZbjv047YKsMRESTiAeWdnyrAB66LsvHzhFlJau%2F2dHxCSa3Z7vGa3w%2Brh%2BcHIor2%2FBjObFbGsewfHxAh5sHVXKLzv6c9tbyys3ueUaCS00nGt6%2FHyWRJFRVcuIbqg9Hfdasd89PA9reTGrk6pXQ4CSNjYWjIvMqNCtuKmfzc8VbvwGVyTb%2F%2F3O%2FuPBrkiXgsQzi05&X-Amz-Signature=2208fcee092e995882390df2912993f3cc67d7d40749d446bb38590e1f37a43a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N3ZU4F%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeTAlmIOJUNnwO5oqupY%2FkrYcv8kXo8QTvQLlibGq2XAiBg7hd169cotjnqHSF%2FJ0jfNxOC5C3preVCQCpodrDtNir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMowiEiHti75qkbi94KtwDs37PXUJDbrlZznzwmwtGciKYNcddhbDE4GTuWQ60D8FTpxEJ1lNWpb2e4zsc5EgJFRchBv9v%2BovJ3CMZUBsm5n2run4XuLlVSsGw0gwr5hMHbsdL4hdUZRniofsnwq8cSpUMjH%2F5aArRwR739TGMs5AiaJPGY%2FVbUv%2F%2FYOLZA87%2B3z8lfoAdm6A2Mn9UwfzjQ34JcYyfnmlYvyyqos6qR8JmKTPgrk2Ksp9sCEtKxd6EMX7S1MFTZZcjDUMhkvJOXLertBSwTrmDVctTLYpw1xCGhIgaYIhL9UF%2BQCG%2BpfPy%2BjKldkaEIrjeAVq8zouQWLZ4JT8HzKymuVbUcR9J818vx0Q7gyIeyldQN9LRr1JAgVoAId9Yob9nR%2FfvnkN0R2NHChPBqtorKAB0WBvAxasil6cYDOFHKwRKhx%2BoElQU6srYPj95lUBB47u3T4dFQ5WI492ZA%2F2uh28OU4AT7ISix5VN2QTOyuXem%2BC3%2F9Ij9k%2Fd63xbIcrThfy1r7PvkywF%2BRARsppMkFiOoBOhOlEVIClhzZ93lvYgUHBj2JwIw4wuDzqSrZrynoCNbkgYsmD%2FR%2BMghOntmfbUuta%2BR9N4bUOed%2FU%2BPy7AHA%2F%2Br1tlqjlGpotirgWFujgwzKvsvQY6pgG5sZeiKgoaXoMJiHGvetNKmnrZbjv047YKsMRESTiAeWdnyrAB66LsvHzhFlJau%2F2dHxCSa3Z7vGa3w%2Brh%2BcHIor2%2FBjObFbGsewfHxAh5sHVXKLzv6c9tbyys3ueUaCS00nGt6%2FHyWRJFRVcuIbqg9Hfdasd89PA9reTGrk6pXQ4CSNjYWjIvMqNCtuKmfzc8VbvwGVyTb%2F%2F3O%2FuPBrkiXgsQzi05&X-Amz-Signature=9d6d79a069b46a03246513795e014953e554cf63f9191d78993018069e471956&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N3ZU4F%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeTAlmIOJUNnwO5oqupY%2FkrYcv8kXo8QTvQLlibGq2XAiBg7hd169cotjnqHSF%2FJ0jfNxOC5C3preVCQCpodrDtNir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMowiEiHti75qkbi94KtwDs37PXUJDbrlZznzwmwtGciKYNcddhbDE4GTuWQ60D8FTpxEJ1lNWpb2e4zsc5EgJFRchBv9v%2BovJ3CMZUBsm5n2run4XuLlVSsGw0gwr5hMHbsdL4hdUZRniofsnwq8cSpUMjH%2F5aArRwR739TGMs5AiaJPGY%2FVbUv%2F%2FYOLZA87%2B3z8lfoAdm6A2Mn9UwfzjQ34JcYyfnmlYvyyqos6qR8JmKTPgrk2Ksp9sCEtKxd6EMX7S1MFTZZcjDUMhkvJOXLertBSwTrmDVctTLYpw1xCGhIgaYIhL9UF%2BQCG%2BpfPy%2BjKldkaEIrjeAVq8zouQWLZ4JT8HzKymuVbUcR9J818vx0Q7gyIeyldQN9LRr1JAgVoAId9Yob9nR%2FfvnkN0R2NHChPBqtorKAB0WBvAxasil6cYDOFHKwRKhx%2BoElQU6srYPj95lUBB47u3T4dFQ5WI492ZA%2F2uh28OU4AT7ISix5VN2QTOyuXem%2BC3%2F9Ij9k%2Fd63xbIcrThfy1r7PvkywF%2BRARsppMkFiOoBOhOlEVIClhzZ93lvYgUHBj2JwIw4wuDzqSrZrynoCNbkgYsmD%2FR%2BMghOntmfbUuta%2BR9N4bUOed%2FU%2BPy7AHA%2F%2Br1tlqjlGpotirgWFujgwzKvsvQY6pgG5sZeiKgoaXoMJiHGvetNKmnrZbjv047YKsMRESTiAeWdnyrAB66LsvHzhFlJau%2F2dHxCSa3Z7vGa3w%2Brh%2BcHIor2%2FBjObFbGsewfHxAh5sHVXKLzv6c9tbyys3ueUaCS00nGt6%2FHyWRJFRVcuIbqg9Hfdasd89PA9reTGrk6pXQ4CSNjYWjIvMqNCtuKmfzc8VbvwGVyTb%2F%2F3O%2FuPBrkiXgsQzi05&X-Amz-Signature=61ed24b568a9100c8cf9d310e85beaad1ba481758e7c04228966ba76f955f878&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
