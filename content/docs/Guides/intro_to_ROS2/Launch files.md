---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGPABM3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBYeTHIweeseTbiUtYEtamkWazywIDKCeIoyStaPc5QAIgAiixgzm96PV8FvJ65bKLLxArT%2Fy%2F9D9bfN61mbI6cO0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDALnxoXdYEMAElOaFircAwcinQ3Ulx2ToePC3NLHHR4tpAnAZ%2BqgPmJ3ZZXbzBqeg6pdwvd3dnPwWjuwvYw7bVvMZv8UmAXNgQ0s1GLTCPInuPLXIKZo0uumjqPe%2FVQxJPMrkPa8VlO2viQriY%2BoGEG7DU2EkyriVEK%2BFt1%2BLJQe7jnIAQw%2Bz0WCtlHH743sTLmHvOI3iA%2Fr4PjNu2%2FiggBwELnVfwc8kFIbhOz5POgUkhYiiWj%2FPwDL2CsogPLgz1RsjVXhDc6j7Mk9ydjJewVUYlUf5BS9BKt9oUgyBjINX4USI3M2iVeXQZopav0aik3BYY3pkUhGglNA0sOR0CXS0nmLGrmrY6s%2BnBQtSzS7YcoT0M96M18%2FwcH7Pn5Ov6GWERxKmL8jdt7kvq2kk1nU04vmQHBVwCtfwTOv3RXHfKb8K%2BPYsqPXCHfGOLZPjaICAGnRvfQ9wIoXdElt5P85Pn8jqoyhqXb6rvPlX54Bao%2BLyN5AQbcg9v79rfc0HnM2UwTSS%2BWd%2BzdjqYOfHHj9RpDCBpgyf1PDkqdVnkZ3ljMhJf7nSYqmtxsVwX76%2B5K6AaP014nZyyz9wjYYvLE9W6Jd4%2B00I17qYM%2BZldkwWjoiw9iNg%2FKcDIS2WV113cItgmGrys4mJZb%2BMKKg88QGOqUBHsWHBGnER65YLJgPnbiDiy76o9niLKwvwfOBkSYx275pPeMyOGX7gqK5wzDot1BsuwlG15CP2Xd4wgHdIzbLqIQ8%2BGw0PDOsf3x6nCmRuIts4M5DQLg%2F0xFD6ovDbJ85gtGe%2BjOrUCvqgiQRPmXaJpS4bkO1IgVKMPPPzop%2Bn7DMKncSXkOoQKDVyW5nLdEHac%2BmfUGSQF6LE4%2B0GgrJbqGaZD1M&X-Amz-Signature=4d1903877258b7dbf6db4683f806ec5dcb96be6501e95ec63a7eccc2f17d4d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGPABM3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBYeTHIweeseTbiUtYEtamkWazywIDKCeIoyStaPc5QAIgAiixgzm96PV8FvJ65bKLLxArT%2Fy%2F9D9bfN61mbI6cO0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDALnxoXdYEMAElOaFircAwcinQ3Ulx2ToePC3NLHHR4tpAnAZ%2BqgPmJ3ZZXbzBqeg6pdwvd3dnPwWjuwvYw7bVvMZv8UmAXNgQ0s1GLTCPInuPLXIKZo0uumjqPe%2FVQxJPMrkPa8VlO2viQriY%2BoGEG7DU2EkyriVEK%2BFt1%2BLJQe7jnIAQw%2Bz0WCtlHH743sTLmHvOI3iA%2Fr4PjNu2%2FiggBwELnVfwc8kFIbhOz5POgUkhYiiWj%2FPwDL2CsogPLgz1RsjVXhDc6j7Mk9ydjJewVUYlUf5BS9BKt9oUgyBjINX4USI3M2iVeXQZopav0aik3BYY3pkUhGglNA0sOR0CXS0nmLGrmrY6s%2BnBQtSzS7YcoT0M96M18%2FwcH7Pn5Ov6GWERxKmL8jdt7kvq2kk1nU04vmQHBVwCtfwTOv3RXHfKb8K%2BPYsqPXCHfGOLZPjaICAGnRvfQ9wIoXdElt5P85Pn8jqoyhqXb6rvPlX54Bao%2BLyN5AQbcg9v79rfc0HnM2UwTSS%2BWd%2BzdjqYOfHHj9RpDCBpgyf1PDkqdVnkZ3ljMhJf7nSYqmtxsVwX76%2B5K6AaP014nZyyz9wjYYvLE9W6Jd4%2B00I17qYM%2BZldkwWjoiw9iNg%2FKcDIS2WV113cItgmGrys4mJZb%2BMKKg88QGOqUBHsWHBGnER65YLJgPnbiDiy76o9niLKwvwfOBkSYx275pPeMyOGX7gqK5wzDot1BsuwlG15CP2Xd4wgHdIzbLqIQ8%2BGw0PDOsf3x6nCmRuIts4M5DQLg%2F0xFD6ovDbJ85gtGe%2BjOrUCvqgiQRPmXaJpS4bkO1IgVKMPPPzop%2Bn7DMKncSXkOoQKDVyW5nLdEHac%2BmfUGSQF6LE4%2B0GgrJbqGaZD1M&X-Amz-Signature=0bded20cd13689349262860d769b7a57e838f5488fb294e67b443f8035770c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGPABM3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBYeTHIweeseTbiUtYEtamkWazywIDKCeIoyStaPc5QAIgAiixgzm96PV8FvJ65bKLLxArT%2Fy%2F9D9bfN61mbI6cO0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDALnxoXdYEMAElOaFircAwcinQ3Ulx2ToePC3NLHHR4tpAnAZ%2BqgPmJ3ZZXbzBqeg6pdwvd3dnPwWjuwvYw7bVvMZv8UmAXNgQ0s1GLTCPInuPLXIKZo0uumjqPe%2FVQxJPMrkPa8VlO2viQriY%2BoGEG7DU2EkyriVEK%2BFt1%2BLJQe7jnIAQw%2Bz0WCtlHH743sTLmHvOI3iA%2Fr4PjNu2%2FiggBwELnVfwc8kFIbhOz5POgUkhYiiWj%2FPwDL2CsogPLgz1RsjVXhDc6j7Mk9ydjJewVUYlUf5BS9BKt9oUgyBjINX4USI3M2iVeXQZopav0aik3BYY3pkUhGglNA0sOR0CXS0nmLGrmrY6s%2BnBQtSzS7YcoT0M96M18%2FwcH7Pn5Ov6GWERxKmL8jdt7kvq2kk1nU04vmQHBVwCtfwTOv3RXHfKb8K%2BPYsqPXCHfGOLZPjaICAGnRvfQ9wIoXdElt5P85Pn8jqoyhqXb6rvPlX54Bao%2BLyN5AQbcg9v79rfc0HnM2UwTSS%2BWd%2BzdjqYOfHHj9RpDCBpgyf1PDkqdVnkZ3ljMhJf7nSYqmtxsVwX76%2B5K6AaP014nZyyz9wjYYvLE9W6Jd4%2B00I17qYM%2BZldkwWjoiw9iNg%2FKcDIS2WV113cItgmGrys4mJZb%2BMKKg88QGOqUBHsWHBGnER65YLJgPnbiDiy76o9niLKwvwfOBkSYx275pPeMyOGX7gqK5wzDot1BsuwlG15CP2Xd4wgHdIzbLqIQ8%2BGw0PDOsf3x6nCmRuIts4M5DQLg%2F0xFD6ovDbJ85gtGe%2BjOrUCvqgiQRPmXaJpS4bkO1IgVKMPPPzop%2Bn7DMKncSXkOoQKDVyW5nLdEHac%2BmfUGSQF6LE4%2B0GgrJbqGaZD1M&X-Amz-Signature=c5a73c2d2ab54321625c940a3c13cfd6a2a2b95b2786418c1d258e33abfc9ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
