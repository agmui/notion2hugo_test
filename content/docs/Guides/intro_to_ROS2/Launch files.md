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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52NQXFC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZB7PxN2Q8ZBJ4iRhRcNam1KrDEp7%2Fn4nRYI0w3f9S3wIhAJbQJOj4yeUUlIabDyK7KVEgTMQo1bI0boVIs0N2BmigKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BHDqijrZ0cLzUOFkq3ANfqDuwQoPjtLXTt8d9773BeeQWHyfyCrZeDIAEu5EXPfk%2BfFGjF17PNztbsHStRkc2BnXgMvy1YQ9fjapXu9MfKVtch6bnAXSqzmiWpS7FJoheOW3gt6kS5%2FcAxXPSLs74mnmwm%2FcB2mOqWKo0pTFJ3ElHqqrhNpEknOmaEMoin2IDR9GWq%2FKX2Lp8KvB8YJ3SoZWvunNOBkOZVGDc%2ByWh8O2AHVGJ%2FbfvMN3PZiaucHgAA2Ha4MVDG92jPHIKgzC%2Fkzv57uxewIpX%2FbigbKje2tdYC%2FFZqgmW6AlA46MiOrTso%2Bk15msXQtdGBLhgA9eIhynIs4e91iiAL6aPa1XEYA2aeNK3m7kSIn55OlbHncuJoFw13UPKEf9uWzrl8YVHe1Kb7O1FBsptKWsIsWN4pCAI9kKvdlTplYiIfwC7pxdBZMZYV5U5lR8njowVc67gVkelzMLqRvUvnUDyCyNUa4QX5mpBDaSWDSSECbJUcCi7WRrM%2F%2FInzQ1VXMweeFUy6HreBaLhxeN9GdY40aIRYn4ttpU3G82odGSF1BUrpZaiMQgXjVG9GTw7aKeW7z%2BxIlCGXt2S8szoRJRhkVHwNXFtjMsDCGvUO86H8FY1Yy8MyHzxmNlqElre0DC2iYrDBjqkAXf6TsaQ6E89toKLyQ0Y9Xv1X1AqYnbi7uc0fiQntS5zBdir6J5W7JNRvnLI4xWMFd7zB%2FO3WSiEvwkXuGi4Bu5wh7FAdBqfbDOMRce9F8DZ3%2BxF%2FaWmw1BMhPSCHYJT042IUhsr7OltiZuisqH6pFfFChVmAkHRVnqFJ9vn%2FWJJgqUR%2BKJDKAhyLkeNv%2BE%2F5eHPJWYofVjuu%2F8RfQ0ZLVw9cFzx&X-Amz-Signature=373e7a3319e66e0e2254e0f921bdb8033eb6b96f849cd491b20b09bdc98186f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52NQXFC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZB7PxN2Q8ZBJ4iRhRcNam1KrDEp7%2Fn4nRYI0w3f9S3wIhAJbQJOj4yeUUlIabDyK7KVEgTMQo1bI0boVIs0N2BmigKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BHDqijrZ0cLzUOFkq3ANfqDuwQoPjtLXTt8d9773BeeQWHyfyCrZeDIAEu5EXPfk%2BfFGjF17PNztbsHStRkc2BnXgMvy1YQ9fjapXu9MfKVtch6bnAXSqzmiWpS7FJoheOW3gt6kS5%2FcAxXPSLs74mnmwm%2FcB2mOqWKo0pTFJ3ElHqqrhNpEknOmaEMoin2IDR9GWq%2FKX2Lp8KvB8YJ3SoZWvunNOBkOZVGDc%2ByWh8O2AHVGJ%2FbfvMN3PZiaucHgAA2Ha4MVDG92jPHIKgzC%2Fkzv57uxewIpX%2FbigbKje2tdYC%2FFZqgmW6AlA46MiOrTso%2Bk15msXQtdGBLhgA9eIhynIs4e91iiAL6aPa1XEYA2aeNK3m7kSIn55OlbHncuJoFw13UPKEf9uWzrl8YVHe1Kb7O1FBsptKWsIsWN4pCAI9kKvdlTplYiIfwC7pxdBZMZYV5U5lR8njowVc67gVkelzMLqRvUvnUDyCyNUa4QX5mpBDaSWDSSECbJUcCi7WRrM%2F%2FInzQ1VXMweeFUy6HreBaLhxeN9GdY40aIRYn4ttpU3G82odGSF1BUrpZaiMQgXjVG9GTw7aKeW7z%2BxIlCGXt2S8szoRJRhkVHwNXFtjMsDCGvUO86H8FY1Yy8MyHzxmNlqElre0DC2iYrDBjqkAXf6TsaQ6E89toKLyQ0Y9Xv1X1AqYnbi7uc0fiQntS5zBdir6J5W7JNRvnLI4xWMFd7zB%2FO3WSiEvwkXuGi4Bu5wh7FAdBqfbDOMRce9F8DZ3%2BxF%2FaWmw1BMhPSCHYJT042IUhsr7OltiZuisqH6pFfFChVmAkHRVnqFJ9vn%2FWJJgqUR%2BKJDKAhyLkeNv%2BE%2F5eHPJWYofVjuu%2F8RfQ0ZLVw9cFzx&X-Amz-Signature=85666195b93117e4c644aa064597dd5515588749f1e0ef8f5dc076d865885927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52NQXFC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZB7PxN2Q8ZBJ4iRhRcNam1KrDEp7%2Fn4nRYI0w3f9S3wIhAJbQJOj4yeUUlIabDyK7KVEgTMQo1bI0boVIs0N2BmigKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BHDqijrZ0cLzUOFkq3ANfqDuwQoPjtLXTt8d9773BeeQWHyfyCrZeDIAEu5EXPfk%2BfFGjF17PNztbsHStRkc2BnXgMvy1YQ9fjapXu9MfKVtch6bnAXSqzmiWpS7FJoheOW3gt6kS5%2FcAxXPSLs74mnmwm%2FcB2mOqWKo0pTFJ3ElHqqrhNpEknOmaEMoin2IDR9GWq%2FKX2Lp8KvB8YJ3SoZWvunNOBkOZVGDc%2ByWh8O2AHVGJ%2FbfvMN3PZiaucHgAA2Ha4MVDG92jPHIKgzC%2Fkzv57uxewIpX%2FbigbKje2tdYC%2FFZqgmW6AlA46MiOrTso%2Bk15msXQtdGBLhgA9eIhynIs4e91iiAL6aPa1XEYA2aeNK3m7kSIn55OlbHncuJoFw13UPKEf9uWzrl8YVHe1Kb7O1FBsptKWsIsWN4pCAI9kKvdlTplYiIfwC7pxdBZMZYV5U5lR8njowVc67gVkelzMLqRvUvnUDyCyNUa4QX5mpBDaSWDSSECbJUcCi7WRrM%2F%2FInzQ1VXMweeFUy6HreBaLhxeN9GdY40aIRYn4ttpU3G82odGSF1BUrpZaiMQgXjVG9GTw7aKeW7z%2BxIlCGXt2S8szoRJRhkVHwNXFtjMsDCGvUO86H8FY1Yy8MyHzxmNlqElre0DC2iYrDBjqkAXf6TsaQ6E89toKLyQ0Y9Xv1X1AqYnbi7uc0fiQntS5zBdir6J5W7JNRvnLI4xWMFd7zB%2FO3WSiEvwkXuGi4Bu5wh7FAdBqfbDOMRce9F8DZ3%2BxF%2FaWmw1BMhPSCHYJT042IUhsr7OltiZuisqH6pFfFChVmAkHRVnqFJ9vn%2FWJJgqUR%2BKJDKAhyLkeNv%2BE%2F5eHPJWYofVjuu%2F8RfQ0ZLVw9cFzx&X-Amz-Signature=5e6eb908abbf97f7719be9c7901dff9e79948dd60c6b10f7e4f640812ad76fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
