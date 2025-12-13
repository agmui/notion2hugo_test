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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FE4SE7S%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF1C2sLAUuafn021AegUIv0b%2Bo9Y0WS5YuuWwKCYbQe%2BAiAVFWRmc2%2FhQfKs0AyCyt4pWXlnTA%2BqiHuKpAsyGRYYRSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMLyVYk2nCxKSfWyqWKtwD3fJ5lsYMyYjPN5rqluSHJji%2FXAEb3AlaWVYhgj8ojo5wfUCcbsNKfoWHWlPS%2BVOXr7NxpMNwQfoxXc%2Bv6uhfFOTUDxT8Ym%2FDab3NtLkNMPG%2F4irruiKkMco9YAXMLuk8DVlzfW%2BhBnB2T8lOprfoqOI8K8UFrKC79B9rhmfhu30HRf5czuQUi71BSVGVFXGeYGNQQT6UpOCEhz5Ef4eoCH9l2rlAmPoT9NFLHs3EhTM5xOXGVoKJdVyl2Dl1i18uBG1PO28w2%2BUfFqmc52VgTy8yGed9lS4wCQxTZoKhy8tvYZzF9oyHUfPg8N03mLCj1S6qxFEQA%2B9321vz8dhVc5DGwy25QA%2Fw%2B6Ih77MGJeLfbvWOvAJGsHmybC1HgPaf8Np3Ss97K2W2y3dwLCpg8tr%2BAOgn8giFIZd7o6OFMEe4RUYSZELoS6FAgGhvRv86ti%2BHiUyn20psedkJL5gpmFccs5gTIKg8QCoCrzn4ifvIkaFboBsLT2M4BW7wlIi%2FcxNFFvgJ2BlwquBpTtKlg3MsV0NufCo2ls9Sqg7G6SQZ31CaSUALt9uxIKsGnJSO49JeD7pETKnDZttn23MEPrQtr81dRgYO9PZtMP0xx1D9wXvv1GCXHpSapVYwr%2FPyyQY6pgHNHy%2FmvqlgUrAwEhMQXsD0%2FZ2KLRJxyl2anPWxNbLVMASkQfEKuhINlD5TBkiCZqi4fdXjYbii1gNsMHz3rKmMH2A0Akxi05dpZv%2F6IkrJOu5ntJDIizh9EFi0fqwKTycPV4dEmTsK7OAijasX6hkQpixcE%2FWWzIucoK11wvTfwFE6%2F1OLWIPQFqW2yU%2B9GQG5Xz5422qRDun6L53bONiUujaVMpxG&X-Amz-Signature=3b6912d68e224394cd46ca485446c009d3d0f45dddfe81407c3ae04aaa86dd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FE4SE7S%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF1C2sLAUuafn021AegUIv0b%2Bo9Y0WS5YuuWwKCYbQe%2BAiAVFWRmc2%2FhQfKs0AyCyt4pWXlnTA%2BqiHuKpAsyGRYYRSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMLyVYk2nCxKSfWyqWKtwD3fJ5lsYMyYjPN5rqluSHJji%2FXAEb3AlaWVYhgj8ojo5wfUCcbsNKfoWHWlPS%2BVOXr7NxpMNwQfoxXc%2Bv6uhfFOTUDxT8Ym%2FDab3NtLkNMPG%2F4irruiKkMco9YAXMLuk8DVlzfW%2BhBnB2T8lOprfoqOI8K8UFrKC79B9rhmfhu30HRf5czuQUi71BSVGVFXGeYGNQQT6UpOCEhz5Ef4eoCH9l2rlAmPoT9NFLHs3EhTM5xOXGVoKJdVyl2Dl1i18uBG1PO28w2%2BUfFqmc52VgTy8yGed9lS4wCQxTZoKhy8tvYZzF9oyHUfPg8N03mLCj1S6qxFEQA%2B9321vz8dhVc5DGwy25QA%2Fw%2B6Ih77MGJeLfbvWOvAJGsHmybC1HgPaf8Np3Ss97K2W2y3dwLCpg8tr%2BAOgn8giFIZd7o6OFMEe4RUYSZELoS6FAgGhvRv86ti%2BHiUyn20psedkJL5gpmFccs5gTIKg8QCoCrzn4ifvIkaFboBsLT2M4BW7wlIi%2FcxNFFvgJ2BlwquBpTtKlg3MsV0NufCo2ls9Sqg7G6SQZ31CaSUALt9uxIKsGnJSO49JeD7pETKnDZttn23MEPrQtr81dRgYO9PZtMP0xx1D9wXvv1GCXHpSapVYwr%2FPyyQY6pgHNHy%2FmvqlgUrAwEhMQXsD0%2FZ2KLRJxyl2anPWxNbLVMASkQfEKuhINlD5TBkiCZqi4fdXjYbii1gNsMHz3rKmMH2A0Akxi05dpZv%2F6IkrJOu5ntJDIizh9EFi0fqwKTycPV4dEmTsK7OAijasX6hkQpixcE%2FWWzIucoK11wvTfwFE6%2F1OLWIPQFqW2yU%2B9GQG5Xz5422qRDun6L53bONiUujaVMpxG&X-Amz-Signature=d3a6526c8cb44145427efc73ab791c7abecb1556f95e422e907fc75bc2771cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FE4SE7S%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIF1C2sLAUuafn021AegUIv0b%2Bo9Y0WS5YuuWwKCYbQe%2BAiAVFWRmc2%2FhQfKs0AyCyt4pWXlnTA%2BqiHuKpAsyGRYYRSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMLyVYk2nCxKSfWyqWKtwD3fJ5lsYMyYjPN5rqluSHJji%2FXAEb3AlaWVYhgj8ojo5wfUCcbsNKfoWHWlPS%2BVOXr7NxpMNwQfoxXc%2Bv6uhfFOTUDxT8Ym%2FDab3NtLkNMPG%2F4irruiKkMco9YAXMLuk8DVlzfW%2BhBnB2T8lOprfoqOI8K8UFrKC79B9rhmfhu30HRf5czuQUi71BSVGVFXGeYGNQQT6UpOCEhz5Ef4eoCH9l2rlAmPoT9NFLHs3EhTM5xOXGVoKJdVyl2Dl1i18uBG1PO28w2%2BUfFqmc52VgTy8yGed9lS4wCQxTZoKhy8tvYZzF9oyHUfPg8N03mLCj1S6qxFEQA%2B9321vz8dhVc5DGwy25QA%2Fw%2B6Ih77MGJeLfbvWOvAJGsHmybC1HgPaf8Np3Ss97K2W2y3dwLCpg8tr%2BAOgn8giFIZd7o6OFMEe4RUYSZELoS6FAgGhvRv86ti%2BHiUyn20psedkJL5gpmFccs5gTIKg8QCoCrzn4ifvIkaFboBsLT2M4BW7wlIi%2FcxNFFvgJ2BlwquBpTtKlg3MsV0NufCo2ls9Sqg7G6SQZ31CaSUALt9uxIKsGnJSO49JeD7pETKnDZttn23MEPrQtr81dRgYO9PZtMP0xx1D9wXvv1GCXHpSapVYwr%2FPyyQY6pgHNHy%2FmvqlgUrAwEhMQXsD0%2FZ2KLRJxyl2anPWxNbLVMASkQfEKuhINlD5TBkiCZqi4fdXjYbii1gNsMHz3rKmMH2A0Akxi05dpZv%2F6IkrJOu5ntJDIizh9EFi0fqwKTycPV4dEmTsK7OAijasX6hkQpixcE%2FWWzIucoK11wvTfwFE6%2F1OLWIPQFqW2yU%2B9GQG5Xz5422qRDun6L53bONiUujaVMpxG&X-Amz-Signature=2055f5eff29e3042924b08cf309d88fc206339769aed1b137b30a4c7d6b3a7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
