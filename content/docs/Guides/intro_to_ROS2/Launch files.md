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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMMIHWR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA4ezIAUCbI7ig%2FMkNl4PdK0bToLfuPp8TGBa0QFdXB9AiEAi5BmomCRKLAUZChB1220gQuKdox%2B%2BArH1nTssSW%2FGYwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsZVN%2Ffo9NKVYjKaCrcA0Q3uz61IqdujWI5YyIi3BFqjrR0J8z64SaY0O2FGQI%2Bqkk8Aheo%2F%2FuoVcmYNdutvhIYYAe0%2FGyijdxONYymjdKaVB3P1fHKqDn%2FatTy%2B%2BNn04bQ0cwHVAS4YH%2BE13JRpXdbKzWVh%2FL06AZZruOzDJrdsCHaICvFptoEmdQatVY5WkFHIlmQRpy6PFyCEKMivo0fmQtTJOgxD9mMPXS19N4OIGudjhMg82AZBaf7FEVV84lV1HNynbLaymHLIsv32hrrk2hg8NpjM%2FqYlJ1GMs1jbLDHC%2FKhVUPKaPA3Zu18MmnUgGz4nnCa5iYNIEvxJHPXqFeD26uvxRLneyFIDASsPOxZZk8ep%2Fb9IAh9ALS4VnRBAaXksNfhZgb3ShUPThZ0eCDaBjYhi3vZmOLosDiyRmbPEhw8LjdnojoA1wrouY1aazY4uFfdHf3GOoplkZEimWq%2BNCcvpvfVczlQy%2BsIY03bDDfQd1Cm0FzyEyr%2BAn6be59OPgAwdw0IY7Ff%2F9cC2PsrJXLytF170TWy%2FbBkPfQi5p36zBXu5qVoMeRr%2B7xq04ZTMhCMJyM4ON%2BvB40K%2FTtf5pQnFqFyJ8lv7gNoHDMPuXgw7hqqzgSw6GMqmBmaJD1eWrSWu9HjMKmh5rwGOqUBhtxaPLwsFKEqm9NSB6pXk5qZAGZmCuh7EkGO9rND4gFvXDtoaQP8Cj9bhqJcphXaYBe8s18dAk1AJb%2FMM8LEQeCUurzgrzNg6xpND5KDr2dvUXI%2FVm1DS1MD668NnAWNBloUjuid6B23GmkcuxcWQgXq4YpClNCIEcBQNxG9NucfszZneXglIfiKB%2F59P2o8Ua0JtMTqGnqZOjDGRr9%2Bwc9HDGzE&X-Amz-Signature=671f68bd2b917a2daa4579282e8e897ac50c73536c6c2deee798e16aa7e4f249&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMMIHWR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA4ezIAUCbI7ig%2FMkNl4PdK0bToLfuPp8TGBa0QFdXB9AiEAi5BmomCRKLAUZChB1220gQuKdox%2B%2BArH1nTssSW%2FGYwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsZVN%2Ffo9NKVYjKaCrcA0Q3uz61IqdujWI5YyIi3BFqjrR0J8z64SaY0O2FGQI%2Bqkk8Aheo%2F%2FuoVcmYNdutvhIYYAe0%2FGyijdxONYymjdKaVB3P1fHKqDn%2FatTy%2B%2BNn04bQ0cwHVAS4YH%2BE13JRpXdbKzWVh%2FL06AZZruOzDJrdsCHaICvFptoEmdQatVY5WkFHIlmQRpy6PFyCEKMivo0fmQtTJOgxD9mMPXS19N4OIGudjhMg82AZBaf7FEVV84lV1HNynbLaymHLIsv32hrrk2hg8NpjM%2FqYlJ1GMs1jbLDHC%2FKhVUPKaPA3Zu18MmnUgGz4nnCa5iYNIEvxJHPXqFeD26uvxRLneyFIDASsPOxZZk8ep%2Fb9IAh9ALS4VnRBAaXksNfhZgb3ShUPThZ0eCDaBjYhi3vZmOLosDiyRmbPEhw8LjdnojoA1wrouY1aazY4uFfdHf3GOoplkZEimWq%2BNCcvpvfVczlQy%2BsIY03bDDfQd1Cm0FzyEyr%2BAn6be59OPgAwdw0IY7Ff%2F9cC2PsrJXLytF170TWy%2FbBkPfQi5p36zBXu5qVoMeRr%2B7xq04ZTMhCMJyM4ON%2BvB40K%2FTtf5pQnFqFyJ8lv7gNoHDMPuXgw7hqqzgSw6GMqmBmaJD1eWrSWu9HjMKmh5rwGOqUBhtxaPLwsFKEqm9NSB6pXk5qZAGZmCuh7EkGO9rND4gFvXDtoaQP8Cj9bhqJcphXaYBe8s18dAk1AJb%2FMM8LEQeCUurzgrzNg6xpND5KDr2dvUXI%2FVm1DS1MD668NnAWNBloUjuid6B23GmkcuxcWQgXq4YpClNCIEcBQNxG9NucfszZneXglIfiKB%2F59P2o8Ua0JtMTqGnqZOjDGRr9%2Bwc9HDGzE&X-Amz-Signature=0332a6556e37de865de1b11afdef468561e56fac55d3cdaf85902e15fabf3f65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOMMIHWR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T030950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA4ezIAUCbI7ig%2FMkNl4PdK0bToLfuPp8TGBa0QFdXB9AiEAi5BmomCRKLAUZChB1220gQuKdox%2B%2BArH1nTssSW%2FGYwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsZVN%2Ffo9NKVYjKaCrcA0Q3uz61IqdujWI5YyIi3BFqjrR0J8z64SaY0O2FGQI%2Bqkk8Aheo%2F%2FuoVcmYNdutvhIYYAe0%2FGyijdxONYymjdKaVB3P1fHKqDn%2FatTy%2B%2BNn04bQ0cwHVAS4YH%2BE13JRpXdbKzWVh%2FL06AZZruOzDJrdsCHaICvFptoEmdQatVY5WkFHIlmQRpy6PFyCEKMivo0fmQtTJOgxD9mMPXS19N4OIGudjhMg82AZBaf7FEVV84lV1HNynbLaymHLIsv32hrrk2hg8NpjM%2FqYlJ1GMs1jbLDHC%2FKhVUPKaPA3Zu18MmnUgGz4nnCa5iYNIEvxJHPXqFeD26uvxRLneyFIDASsPOxZZk8ep%2Fb9IAh9ALS4VnRBAaXksNfhZgb3ShUPThZ0eCDaBjYhi3vZmOLosDiyRmbPEhw8LjdnojoA1wrouY1aazY4uFfdHf3GOoplkZEimWq%2BNCcvpvfVczlQy%2BsIY03bDDfQd1Cm0FzyEyr%2BAn6be59OPgAwdw0IY7Ff%2F9cC2PsrJXLytF170TWy%2FbBkPfQi5p36zBXu5qVoMeRr%2B7xq04ZTMhCMJyM4ON%2BvB40K%2FTtf5pQnFqFyJ8lv7gNoHDMPuXgw7hqqzgSw6GMqmBmaJD1eWrSWu9HjMKmh5rwGOqUBhtxaPLwsFKEqm9NSB6pXk5qZAGZmCuh7EkGO9rND4gFvXDtoaQP8Cj9bhqJcphXaYBe8s18dAk1AJb%2FMM8LEQeCUurzgrzNg6xpND5KDr2dvUXI%2FVm1DS1MD668NnAWNBloUjuid6B23GmkcuxcWQgXq4YpClNCIEcBQNxG9NucfszZneXglIfiKB%2F59P2o8Ua0JtMTqGnqZOjDGRr9%2Bwc9HDGzE&X-Amz-Signature=24472e99509811538e13ad81315760e2e58d18e30daf373128d9dff34c479959&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
