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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMZNQN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDiyKlnX7PP8JUDt6DGvJGr83PbZjGXiJ7VJABg3RIG3wIhALtKVnE4AufW4P7%2BgqgHMexJ6uUW7RRiNnfQ5wXjNi0hKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpZsP4T2UIfyqN6XUq3ANqN%2FQdBt4Rg5K9NJixhL67aikfXtF5Km692xIWYWJTLAAONP%2Bh0UdrSx0lYjObTgLXVriXYGYoRss%2B0UZ6Bfqj7xLg6nIICzU1fMX%2BlfF%2BUrFm4SoYjWJbNC0FVfmzTFIapQQYT47TaYry%2B%2BIxaz4FBmFSdZA7d3CqbS9aGq7NEKJjp0sWr210%2Bk0b9bTQJzHH2QTF21IdWSf5qfGJyVBK3XBP1i4hppv3DjsDCp7MoDptM%2FKTKAomEzLODKU8C0ZRZQdk%2B34LYaFc96cNr49wSk3Bm%2BeGB4u%2BZqtUb2b6SSk6KdQNlxwCod9CIi%2FItqSTBIinQqAZiOVp1mHTsoHbMKJShC7pAD30RKhSWrFjQRlNJEWuPQwF2B4MiSAeO1N6RcYeihLTSsfl3RwEflhviwdghqWNKuW3FrHz1ZM%2FvaNlKIkwzN8e5Rq%2BSL5awyBijApMhQ1NJdO9dcOYufPNDHxGJNXXnMMm%2F3fHxUR%2F5h6wwiY5fEBS%2BVpRNjz76l9zsIS3ZI6AxmNxBtfqOaUUtVwvNP9vTFvQzjwlh7phUq1q6Q4QBSkY8N8%2BX5nCKGTDsafm1KNMRdndYYNTnvM2T8raie%2Ft0hFs0LbEViT%2BXlMnxf9euLvihn0rmjCm8drABjqkAYr4VU17t0XXmUz46n3G7kbaQuUyhNJ4iFCUFCC45q6nLndDZQgA4PeCruhJamZy4C2XxYOwMc8Cz%2FVXQaKt2KQyhZKCQ0t%2FLGO9%2B6RvNpg3zh4Cwxft4y%2BaRbZeOK6olwnyQsIwtk4EVLYbJO1ghgAlmuo4UBZpZ7IyPffGA9qiPxAx4aH8U3pRDsZrlPRk0Ur%2F%2BfOp5R%2F%2FyjdRtyLj8qHxSRll&X-Amz-Signature=eb9aa8d98a6e5d5697b77ceccb7ab2a372d75bbcced8ad7a16e3cb4e86340e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMZNQN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDiyKlnX7PP8JUDt6DGvJGr83PbZjGXiJ7VJABg3RIG3wIhALtKVnE4AufW4P7%2BgqgHMexJ6uUW7RRiNnfQ5wXjNi0hKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpZsP4T2UIfyqN6XUq3ANqN%2FQdBt4Rg5K9NJixhL67aikfXtF5Km692xIWYWJTLAAONP%2Bh0UdrSx0lYjObTgLXVriXYGYoRss%2B0UZ6Bfqj7xLg6nIICzU1fMX%2BlfF%2BUrFm4SoYjWJbNC0FVfmzTFIapQQYT47TaYry%2B%2BIxaz4FBmFSdZA7d3CqbS9aGq7NEKJjp0sWr210%2Bk0b9bTQJzHH2QTF21IdWSf5qfGJyVBK3XBP1i4hppv3DjsDCp7MoDptM%2FKTKAomEzLODKU8C0ZRZQdk%2B34LYaFc96cNr49wSk3Bm%2BeGB4u%2BZqtUb2b6SSk6KdQNlxwCod9CIi%2FItqSTBIinQqAZiOVp1mHTsoHbMKJShC7pAD30RKhSWrFjQRlNJEWuPQwF2B4MiSAeO1N6RcYeihLTSsfl3RwEflhviwdghqWNKuW3FrHz1ZM%2FvaNlKIkwzN8e5Rq%2BSL5awyBijApMhQ1NJdO9dcOYufPNDHxGJNXXnMMm%2F3fHxUR%2F5h6wwiY5fEBS%2BVpRNjz76l9zsIS3ZI6AxmNxBtfqOaUUtVwvNP9vTFvQzjwlh7phUq1q6Q4QBSkY8N8%2BX5nCKGTDsafm1KNMRdndYYNTnvM2T8raie%2Ft0hFs0LbEViT%2BXlMnxf9euLvihn0rmjCm8drABjqkAYr4VU17t0XXmUz46n3G7kbaQuUyhNJ4iFCUFCC45q6nLndDZQgA4PeCruhJamZy4C2XxYOwMc8Cz%2FVXQaKt2KQyhZKCQ0t%2FLGO9%2B6RvNpg3zh4Cwxft4y%2BaRbZeOK6olwnyQsIwtk4EVLYbJO1ghgAlmuo4UBZpZ7IyPffGA9qiPxAx4aH8U3pRDsZrlPRk0Ur%2F%2BfOp5R%2F%2FyjdRtyLj8qHxSRll&X-Amz-Signature=ff71a1e904d1f03f3f3ec68a0c48a7fca7944630b72538a5a325486f91145862&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWMZNQN%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDiyKlnX7PP8JUDt6DGvJGr83PbZjGXiJ7VJABg3RIG3wIhALtKVnE4AufW4P7%2BgqgHMexJ6uUW7RRiNnfQ5wXjNi0hKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpZsP4T2UIfyqN6XUq3ANqN%2FQdBt4Rg5K9NJixhL67aikfXtF5Km692xIWYWJTLAAONP%2Bh0UdrSx0lYjObTgLXVriXYGYoRss%2B0UZ6Bfqj7xLg6nIICzU1fMX%2BlfF%2BUrFm4SoYjWJbNC0FVfmzTFIapQQYT47TaYry%2B%2BIxaz4FBmFSdZA7d3CqbS9aGq7NEKJjp0sWr210%2Bk0b9bTQJzHH2QTF21IdWSf5qfGJyVBK3XBP1i4hppv3DjsDCp7MoDptM%2FKTKAomEzLODKU8C0ZRZQdk%2B34LYaFc96cNr49wSk3Bm%2BeGB4u%2BZqtUb2b6SSk6KdQNlxwCod9CIi%2FItqSTBIinQqAZiOVp1mHTsoHbMKJShC7pAD30RKhSWrFjQRlNJEWuPQwF2B4MiSAeO1N6RcYeihLTSsfl3RwEflhviwdghqWNKuW3FrHz1ZM%2FvaNlKIkwzN8e5Rq%2BSL5awyBijApMhQ1NJdO9dcOYufPNDHxGJNXXnMMm%2F3fHxUR%2F5h6wwiY5fEBS%2BVpRNjz76l9zsIS3ZI6AxmNxBtfqOaUUtVwvNP9vTFvQzjwlh7phUq1q6Q4QBSkY8N8%2BX5nCKGTDsafm1KNMRdndYYNTnvM2T8raie%2Ft0hFs0LbEViT%2BXlMnxf9euLvihn0rmjCm8drABjqkAYr4VU17t0XXmUz46n3G7kbaQuUyhNJ4iFCUFCC45q6nLndDZQgA4PeCruhJamZy4C2XxYOwMc8Cz%2FVXQaKt2KQyhZKCQ0t%2FLGO9%2B6RvNpg3zh4Cwxft4y%2BaRbZeOK6olwnyQsIwtk4EVLYbJO1ghgAlmuo4UBZpZ7IyPffGA9qiPxAx4aH8U3pRDsZrlPRk0Ur%2F%2BfOp5R%2F%2FyjdRtyLj8qHxSRll&X-Amz-Signature=a59a68f126008bfec222e0da755f8d5a843f798c7eb156faed975b81c4823bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
