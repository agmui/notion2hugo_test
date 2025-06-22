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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRZOMDZW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCMdEc8AiMInnx62Y0zsq8QD%2Bg%2Fx18w57lsaVT%2BIWHZ%2FAIhAK3xri1xqrAsHHDmR0mMWJLYb65NH0i5cbE2y0enWKWSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeQ2R4IY8WNLwkYQUq3AN9YKZ%2FCjtD%2BEe%2BYgtK5qaQuIj3ePP3rCpYHwO5vh0RaG3PDe%2BSoZOOZ4bSlRst%2BU50pE661u%2FvmeBSCcAgY%2B4BAOv76oQeQYpK%2F%2F9xuKeO6YzX7UkblTrH6bYOtNRWiyMFb6I3uHoXm%2BUDIb4wH0DgcIoZVpxUWus1nWy3YjpRsmhnkvGoP2gXnHnd0uf89ybzDq5t0rKLejn1o3m4te%2FZ2UnP%2BYpicei9PnDyMHP9LX5p9Rcu6IlxbejdWxM5vNS%2FRK9FbkAlYuu9Mn%2Btb3WwKVRStukmTMPk4kfY0ENCsWFm8gXZuijnE9JCIQcwPfDxwOejYy%2Bw63YAWVqRzQvzClipTf1dm8E4aiPffQfjTN%2B86YNYCtjHVgTJvRr9iDVy3dYO3D4LzAjj7H5zO1C8jKOk4hqz6Aovqyb8xyFx4M9KB1DdSnXdoyy7qFoa6wTrmjwryZY5jlExK2Hqcj1dPtgZ5AsaudS7hoEZJ5mt7zAYWV4F9wZNy0rHTjJsseXvRNsMHTvJbh8e4EFeCphoICf%2FJJk4Ze5U65b91JcenfSxfWlFlfuj%2B1wV9WPgqkHROozq7uxkhF1z%2F18VZemYwpKBki2tqQNNBu%2Fws4kXbOCuR7GFou3mErRxbDChx%2BHCBjqkAQLEV80dgWDcimhuPiQ9VO09jXS5Yp5l1bYvNDcN64OZk5gesFL2pqZodGQd1aWZzOZSw4gQeyhjcRqia8dqIM6116emUvGyqp2Vmsg7xDbAd0hBlRUg0vVA5LSK2WVhKkUSd2d7BHoHqDzEdi%2BXRdnUy9%2F2EHySSJe70s%2B%2BfFlNeZGuhAOgnr4jiJAj3aCcXHBmT%2FkbjRfhDo9pvJS6cu3c4k2I&X-Amz-Signature=31e46cd597a02bf641bef04c4271f466df6d7decbb2ed98ee4a4dc76c43547b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRZOMDZW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCMdEc8AiMInnx62Y0zsq8QD%2Bg%2Fx18w57lsaVT%2BIWHZ%2FAIhAK3xri1xqrAsHHDmR0mMWJLYb65NH0i5cbE2y0enWKWSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeQ2R4IY8WNLwkYQUq3AN9YKZ%2FCjtD%2BEe%2BYgtK5qaQuIj3ePP3rCpYHwO5vh0RaG3PDe%2BSoZOOZ4bSlRst%2BU50pE661u%2FvmeBSCcAgY%2B4BAOv76oQeQYpK%2F%2F9xuKeO6YzX7UkblTrH6bYOtNRWiyMFb6I3uHoXm%2BUDIb4wH0DgcIoZVpxUWus1nWy3YjpRsmhnkvGoP2gXnHnd0uf89ybzDq5t0rKLejn1o3m4te%2FZ2UnP%2BYpicei9PnDyMHP9LX5p9Rcu6IlxbejdWxM5vNS%2FRK9FbkAlYuu9Mn%2Btb3WwKVRStukmTMPk4kfY0ENCsWFm8gXZuijnE9JCIQcwPfDxwOejYy%2Bw63YAWVqRzQvzClipTf1dm8E4aiPffQfjTN%2B86YNYCtjHVgTJvRr9iDVy3dYO3D4LzAjj7H5zO1C8jKOk4hqz6Aovqyb8xyFx4M9KB1DdSnXdoyy7qFoa6wTrmjwryZY5jlExK2Hqcj1dPtgZ5AsaudS7hoEZJ5mt7zAYWV4F9wZNy0rHTjJsseXvRNsMHTvJbh8e4EFeCphoICf%2FJJk4Ze5U65b91JcenfSxfWlFlfuj%2B1wV9WPgqkHROozq7uxkhF1z%2F18VZemYwpKBki2tqQNNBu%2Fws4kXbOCuR7GFou3mErRxbDChx%2BHCBjqkAQLEV80dgWDcimhuPiQ9VO09jXS5Yp5l1bYvNDcN64OZk5gesFL2pqZodGQd1aWZzOZSw4gQeyhjcRqia8dqIM6116emUvGyqp2Vmsg7xDbAd0hBlRUg0vVA5LSK2WVhKkUSd2d7BHoHqDzEdi%2BXRdnUy9%2F2EHySSJe70s%2B%2BfFlNeZGuhAOgnr4jiJAj3aCcXHBmT%2FkbjRfhDo9pvJS6cu3c4k2I&X-Amz-Signature=37b6b759dca8e34ef46527d2c6449f552ca200de62487b8d6c9a8cc33153faf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRZOMDZW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCMdEc8AiMInnx62Y0zsq8QD%2Bg%2Fx18w57lsaVT%2BIWHZ%2FAIhAK3xri1xqrAsHHDmR0mMWJLYb65NH0i5cbE2y0enWKWSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeQ2R4IY8WNLwkYQUq3AN9YKZ%2FCjtD%2BEe%2BYgtK5qaQuIj3ePP3rCpYHwO5vh0RaG3PDe%2BSoZOOZ4bSlRst%2BU50pE661u%2FvmeBSCcAgY%2B4BAOv76oQeQYpK%2F%2F9xuKeO6YzX7UkblTrH6bYOtNRWiyMFb6I3uHoXm%2BUDIb4wH0DgcIoZVpxUWus1nWy3YjpRsmhnkvGoP2gXnHnd0uf89ybzDq5t0rKLejn1o3m4te%2FZ2UnP%2BYpicei9PnDyMHP9LX5p9Rcu6IlxbejdWxM5vNS%2FRK9FbkAlYuu9Mn%2Btb3WwKVRStukmTMPk4kfY0ENCsWFm8gXZuijnE9JCIQcwPfDxwOejYy%2Bw63YAWVqRzQvzClipTf1dm8E4aiPffQfjTN%2B86YNYCtjHVgTJvRr9iDVy3dYO3D4LzAjj7H5zO1C8jKOk4hqz6Aovqyb8xyFx4M9KB1DdSnXdoyy7qFoa6wTrmjwryZY5jlExK2Hqcj1dPtgZ5AsaudS7hoEZJ5mt7zAYWV4F9wZNy0rHTjJsseXvRNsMHTvJbh8e4EFeCphoICf%2FJJk4Ze5U65b91JcenfSxfWlFlfuj%2B1wV9WPgqkHROozq7uxkhF1z%2F18VZemYwpKBki2tqQNNBu%2Fws4kXbOCuR7GFou3mErRxbDChx%2BHCBjqkAQLEV80dgWDcimhuPiQ9VO09jXS5Yp5l1bYvNDcN64OZk5gesFL2pqZodGQd1aWZzOZSw4gQeyhjcRqia8dqIM6116emUvGyqp2Vmsg7xDbAd0hBlRUg0vVA5LSK2WVhKkUSd2d7BHoHqDzEdi%2BXRdnUy9%2F2EHySSJe70s%2B%2BfFlNeZGuhAOgnr4jiJAj3aCcXHBmT%2FkbjRfhDo9pvJS6cu3c4k2I&X-Amz-Signature=b6a97d4d7e87dd321dbfd753756bf985f0ab5a623f40b2c969471830f350fcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
