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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJDF53P%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDCF3EUb9JaXpWMORXIDB33cwhn8vTK4PbFbITBZPZpCgIga91h%2FLYoGfp58VO2a%2FtTZBSKFIU6zem7XATJBk%2BTVhsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfW%2FnZq9ZY20n8KmircA7iS29UdMhhIdYoTV8VZhe2FhBcPP2TY%2B72SSxkjw1RnDe2UXubdOs89cSYT9mJz8GNQ4uQFVQCdEcHqB8TauONm5%2FPrq3Sd7IbiOJB7M3wOlh6skEgrMPYt%2BUf2IJl9oEvuXnuiKxSPmX%2Bhskh7AJI63KfHjkt4F57Xtig%2BUQcMlJXylX02whlY8BhtVIigG7vaVEhNM%2FiRf3dzAMEycGAGu3I2Zjjibw93kLewhTyS6SLvNgZyUyI5u0XSKUcCpWhTR1rfQHsq05bMfMynk3cPOvtMCi3WVy9ymwuMmz0hwc5YgfKa548npPFBstd%2Bi30OOrIgIUX8LxpAnOU6sTyANVjjSanNqIJ%2B1YqRmLXZiMKHyHloUhF1ynA6KOsJpdlJLOvmK4TzCpj49gisgrKnyzPnzk02OmXqk%2FyFQwbXlygydssr8tXiBzcFIaGR9zzo10tldV%2Fi5zZaHeXnXQxfQZyzdRzEN8NcFdeVJBIDPNrANTY4mBBeo3xRb02yNZShLsWqxokt5A80dh1uNpV%2FL%2BoZKxgHx6WOJodzhaiv715V%2FYdWC6Ra4a9XWvhS6RILn%2FQVb6mBOswwkfy9cQz3nZ%2FGCFbLHdqhV1tqmWBYbMfFuTEZ2c6vChAaMKGdr78GOqUB9vuTaNxTa1YumFzGEkOwipn2v8z0lReptPiAukF3ZO%2FpnQiI4ZJIDhGWVqUNugYE%2FQzn4sFJ4uLphgwdRDlWPs4BQcxQxVQIL6v2kiUCJI%2FpE7ZYMAJtvh2VBf98rsmo7XRdKZ2Z9b31r%2Bk5PgAQehbDzNuK0j6R7OvttHOYxvtVMGsUpVeRKzamwgbvhLn%2FjHL6LqHdHzn%2BGj1SenXjb3fnDk2N&X-Amz-Signature=79fec27dd3f948914e6432908d429e145f8c76b1e9a89e7859a6034e64784a66&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJDF53P%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDCF3EUb9JaXpWMORXIDB33cwhn8vTK4PbFbITBZPZpCgIga91h%2FLYoGfp58VO2a%2FtTZBSKFIU6zem7XATJBk%2BTVhsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfW%2FnZq9ZY20n8KmircA7iS29UdMhhIdYoTV8VZhe2FhBcPP2TY%2B72SSxkjw1RnDe2UXubdOs89cSYT9mJz8GNQ4uQFVQCdEcHqB8TauONm5%2FPrq3Sd7IbiOJB7M3wOlh6skEgrMPYt%2BUf2IJl9oEvuXnuiKxSPmX%2Bhskh7AJI63KfHjkt4F57Xtig%2BUQcMlJXylX02whlY8BhtVIigG7vaVEhNM%2FiRf3dzAMEycGAGu3I2Zjjibw93kLewhTyS6SLvNgZyUyI5u0XSKUcCpWhTR1rfQHsq05bMfMynk3cPOvtMCi3WVy9ymwuMmz0hwc5YgfKa548npPFBstd%2Bi30OOrIgIUX8LxpAnOU6sTyANVjjSanNqIJ%2B1YqRmLXZiMKHyHloUhF1ynA6KOsJpdlJLOvmK4TzCpj49gisgrKnyzPnzk02OmXqk%2FyFQwbXlygydssr8tXiBzcFIaGR9zzo10tldV%2Fi5zZaHeXnXQxfQZyzdRzEN8NcFdeVJBIDPNrANTY4mBBeo3xRb02yNZShLsWqxokt5A80dh1uNpV%2FL%2BoZKxgHx6WOJodzhaiv715V%2FYdWC6Ra4a9XWvhS6RILn%2FQVb6mBOswwkfy9cQz3nZ%2FGCFbLHdqhV1tqmWBYbMfFuTEZ2c6vChAaMKGdr78GOqUB9vuTaNxTa1YumFzGEkOwipn2v8z0lReptPiAukF3ZO%2FpnQiI4ZJIDhGWVqUNugYE%2FQzn4sFJ4uLphgwdRDlWPs4BQcxQxVQIL6v2kiUCJI%2FpE7ZYMAJtvh2VBf98rsmo7XRdKZ2Z9b31r%2Bk5PgAQehbDzNuK0j6R7OvttHOYxvtVMGsUpVeRKzamwgbvhLn%2FjHL6LqHdHzn%2BGj1SenXjb3fnDk2N&X-Amz-Signature=11c4e2d2a9c8255e849e80fa25375586d0e8d75227a1129687aa21074999c5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJDF53P%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDCF3EUb9JaXpWMORXIDB33cwhn8vTK4PbFbITBZPZpCgIga91h%2FLYoGfp58VO2a%2FtTZBSKFIU6zem7XATJBk%2BTVhsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfW%2FnZq9ZY20n8KmircA7iS29UdMhhIdYoTV8VZhe2FhBcPP2TY%2B72SSxkjw1RnDe2UXubdOs89cSYT9mJz8GNQ4uQFVQCdEcHqB8TauONm5%2FPrq3Sd7IbiOJB7M3wOlh6skEgrMPYt%2BUf2IJl9oEvuXnuiKxSPmX%2Bhskh7AJI63KfHjkt4F57Xtig%2BUQcMlJXylX02whlY8BhtVIigG7vaVEhNM%2FiRf3dzAMEycGAGu3I2Zjjibw93kLewhTyS6SLvNgZyUyI5u0XSKUcCpWhTR1rfQHsq05bMfMynk3cPOvtMCi3WVy9ymwuMmz0hwc5YgfKa548npPFBstd%2Bi30OOrIgIUX8LxpAnOU6sTyANVjjSanNqIJ%2B1YqRmLXZiMKHyHloUhF1ynA6KOsJpdlJLOvmK4TzCpj49gisgrKnyzPnzk02OmXqk%2FyFQwbXlygydssr8tXiBzcFIaGR9zzo10tldV%2Fi5zZaHeXnXQxfQZyzdRzEN8NcFdeVJBIDPNrANTY4mBBeo3xRb02yNZShLsWqxokt5A80dh1uNpV%2FL%2BoZKxgHx6WOJodzhaiv715V%2FYdWC6Ra4a9XWvhS6RILn%2FQVb6mBOswwkfy9cQz3nZ%2FGCFbLHdqhV1tqmWBYbMfFuTEZ2c6vChAaMKGdr78GOqUB9vuTaNxTa1YumFzGEkOwipn2v8z0lReptPiAukF3ZO%2FpnQiI4ZJIDhGWVqUNugYE%2FQzn4sFJ4uLphgwdRDlWPs4BQcxQxVQIL6v2kiUCJI%2FpE7ZYMAJtvh2VBf98rsmo7XRdKZ2Z9b31r%2Bk5PgAQehbDzNuK0j6R7OvttHOYxvtVMGsUpVeRKzamwgbvhLn%2FjHL6LqHdHzn%2BGj1SenXjb3fnDk2N&X-Amz-Signature=ffd23b94c76a2ea595fb9482d3b0f3717e6d5ba184e837e4bb6fd6ed8f4186cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
