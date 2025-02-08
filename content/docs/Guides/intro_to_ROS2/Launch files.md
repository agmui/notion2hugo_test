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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WORJ2V4G%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDO3yWWZYDw8Oldop4Dmg2E3DiLrS9jUqTIqbI2FTk4RAIhAKJk0YNuYG972cMFaYZIGMTLk%2B%2FF%2FEHeaZTmdVPVfjmoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBC2bPkc1LI9LfGMMq3AMLM20VsIlKHfnHJpoahEyoVXCY%2BB%2B6aupD3gvancOINV7jpuvviHG6AI0aK0M4JevudeJ1HNWV44UygPVM2diJme7cMwFBkciHJMbrs%2BHqqMFVE548K3h07zM9HbbOGl%2B7t931mKCoB%2BGNjW5KkkwVTu1yQJ2kTpSKjUFESXS3sfLo%2FxR%2FLDsAQNnF7k%2FWGGJibPdTEVNHCIZDy8ZdItlKhB4QU4GEaW8JftGWGI0VNnNafTYE3SlkVoOn8q4l3ZZ2Z7GcQz2QkItC%2F7FwDhQ4r%2BPV7HBvOUcwKCNP4Mh6S7gxF66xEuR6ZbYiQ8uw7G81FnRroEpz1oZ2rpgcJTu9ZhK1O7Zp7khgvmKq1mu%2Fpx25ZHtdE8Oijj%2FL5gUZXuJKq03kpFc0mfS5WWBZgLAqKbP1GS4WO2%2FRwCFBOu1qoEVZIk%2FqODSkKEdFerN1kDfNzeNISerSE%2F7ptJ6OZl0%2FTP8lHSZXih0v0IZphVE8KBakbjKmbpPqwLwPrQDZxUIRShD9D7rAQmtjTKlFNic9xgv8CCna%2Btqw2mCMY7xAg4XrJHnTRNJe0m7%2FBy9a85lxJPl4wubKVzFPmiXIqV%2BUK6QLY%2BGAXCg8H%2BvfrHr6ieHMQpfB4kXiF3oalTDSh529BjqkAf1k6kGilzAGwm9qzag2SFjEQGRDVDB4Fbj8tkhqw%2BITSZiRJkLYzs0LaIhRc3kk%2B4wuciac6O6mCtGXjDFDkA5r66kzCy2xAtuEWvErV0xSDK92T3aGQHQNB%2By96M9PYMnwiWwd2eOkcUVj5j8oeRKPt3FqLkaZm0Mgnoe0MkYbALQ5Q56AmN%2BUhshYebzHju1DE%2F8%2BKZ5Z8Xp3Z%2FTuGsMYRgQo&X-Amz-Signature=0a3ba8976af67a6d77ac19ca6a8c1e39db67a1704f341070a7d12e61454a1947&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WORJ2V4G%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDO3yWWZYDw8Oldop4Dmg2E3DiLrS9jUqTIqbI2FTk4RAIhAKJk0YNuYG972cMFaYZIGMTLk%2B%2FF%2FEHeaZTmdVPVfjmoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBC2bPkc1LI9LfGMMq3AMLM20VsIlKHfnHJpoahEyoVXCY%2BB%2B6aupD3gvancOINV7jpuvviHG6AI0aK0M4JevudeJ1HNWV44UygPVM2diJme7cMwFBkciHJMbrs%2BHqqMFVE548K3h07zM9HbbOGl%2B7t931mKCoB%2BGNjW5KkkwVTu1yQJ2kTpSKjUFESXS3sfLo%2FxR%2FLDsAQNnF7k%2FWGGJibPdTEVNHCIZDy8ZdItlKhB4QU4GEaW8JftGWGI0VNnNafTYE3SlkVoOn8q4l3ZZ2Z7GcQz2QkItC%2F7FwDhQ4r%2BPV7HBvOUcwKCNP4Mh6S7gxF66xEuR6ZbYiQ8uw7G81FnRroEpz1oZ2rpgcJTu9ZhK1O7Zp7khgvmKq1mu%2Fpx25ZHtdE8Oijj%2FL5gUZXuJKq03kpFc0mfS5WWBZgLAqKbP1GS4WO2%2FRwCFBOu1qoEVZIk%2FqODSkKEdFerN1kDfNzeNISerSE%2F7ptJ6OZl0%2FTP8lHSZXih0v0IZphVE8KBakbjKmbpPqwLwPrQDZxUIRShD9D7rAQmtjTKlFNic9xgv8CCna%2Btqw2mCMY7xAg4XrJHnTRNJe0m7%2FBy9a85lxJPl4wubKVzFPmiXIqV%2BUK6QLY%2BGAXCg8H%2BvfrHr6ieHMQpfB4kXiF3oalTDSh529BjqkAf1k6kGilzAGwm9qzag2SFjEQGRDVDB4Fbj8tkhqw%2BITSZiRJkLYzs0LaIhRc3kk%2B4wuciac6O6mCtGXjDFDkA5r66kzCy2xAtuEWvErV0xSDK92T3aGQHQNB%2By96M9PYMnwiWwd2eOkcUVj5j8oeRKPt3FqLkaZm0Mgnoe0MkYbALQ5Q56AmN%2BUhshYebzHju1DE%2F8%2BKZ5Z8Xp3Z%2FTuGsMYRgQo&X-Amz-Signature=7dc9e4e9dcf0a5109e9b2081e52b1edf04991d5b5c7ac7b2efbbf1f6ff873997&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WORJ2V4G%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDO3yWWZYDw8Oldop4Dmg2E3DiLrS9jUqTIqbI2FTk4RAIhAKJk0YNuYG972cMFaYZIGMTLk%2B%2FF%2FEHeaZTmdVPVfjmoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBC2bPkc1LI9LfGMMq3AMLM20VsIlKHfnHJpoahEyoVXCY%2BB%2B6aupD3gvancOINV7jpuvviHG6AI0aK0M4JevudeJ1HNWV44UygPVM2diJme7cMwFBkciHJMbrs%2BHqqMFVE548K3h07zM9HbbOGl%2B7t931mKCoB%2BGNjW5KkkwVTu1yQJ2kTpSKjUFESXS3sfLo%2FxR%2FLDsAQNnF7k%2FWGGJibPdTEVNHCIZDy8ZdItlKhB4QU4GEaW8JftGWGI0VNnNafTYE3SlkVoOn8q4l3ZZ2Z7GcQz2QkItC%2F7FwDhQ4r%2BPV7HBvOUcwKCNP4Mh6S7gxF66xEuR6ZbYiQ8uw7G81FnRroEpz1oZ2rpgcJTu9ZhK1O7Zp7khgvmKq1mu%2Fpx25ZHtdE8Oijj%2FL5gUZXuJKq03kpFc0mfS5WWBZgLAqKbP1GS4WO2%2FRwCFBOu1qoEVZIk%2FqODSkKEdFerN1kDfNzeNISerSE%2F7ptJ6OZl0%2FTP8lHSZXih0v0IZphVE8KBakbjKmbpPqwLwPrQDZxUIRShD9D7rAQmtjTKlFNic9xgv8CCna%2Btqw2mCMY7xAg4XrJHnTRNJe0m7%2FBy9a85lxJPl4wubKVzFPmiXIqV%2BUK6QLY%2BGAXCg8H%2BvfrHr6ieHMQpfB4kXiF3oalTDSh529BjqkAf1k6kGilzAGwm9qzag2SFjEQGRDVDB4Fbj8tkhqw%2BITSZiRJkLYzs0LaIhRc3kk%2B4wuciac6O6mCtGXjDFDkA5r66kzCy2xAtuEWvErV0xSDK92T3aGQHQNB%2By96M9PYMnwiWwd2eOkcUVj5j8oeRKPt3FqLkaZm0Mgnoe0MkYbALQ5Q56AmN%2BUhshYebzHju1DE%2F8%2BKZ5Z8Xp3Z%2FTuGsMYRgQo&X-Amz-Signature=33164eff091fbfad889d14c3b7e7fcef579b754aa950cfdcc422801d829cfb16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
