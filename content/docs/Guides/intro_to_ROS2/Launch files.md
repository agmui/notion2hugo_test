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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CISJTUM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCalIYbQY0dgBZU1BIF7VV7I4SM%2BgcDkFC0T%2FSDuSHeAiAckJU5sC30qcHtYNraKzNBcEN3uLefCLzKYgSHufD%2B4ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfwMSpA%2BMCJK%2BUduXKtwDDFYGUJR0IzTLiUf4xSJS1fLgnJ2S3KgxKcfyJzbTmkoEtrUZBHYgf6OVF36h7MhN9nWSNL9pbZUA5RWJJvWWWqy3uG6o%2BnDI3gPuMsGZC%2FGqeXjA2GEJiydnslupwFh3O3mBAAI1WBcBDWuox2S22bGLVnWxc%2Fj2fqGLAZTR8r%2FEL1eR8pq4AaOzIBEgdoL6%2FdQ906m5OeEACJeXzRnPHI9a%2Bpe6lWOKlIXw6NUCKRKa37HBAJxFVigIDRMxEvj7niXJHOEU1DY03Oj1BuH7Xm176%2BEFPQsfIskHvhzCQwObPjf5pkjEjPRSXul6cpAYiIIMsyYps2GDZBnwc3xTmVc9vKfTDNwj3Qaed6BR%2Bpq%2F2TOT%2B1%2Bu1v8AeK8TPx%2FQ4eMwCDrHlssjrIG4RJZmkJ%2FUAd%2Bk26r1kb7t%2B6IKCJwDSuLQHTVQHUoeOuC8dEUoEC0iJyQw6nElfXSpbtptBPs%2FJyxONSyHGEtH4s1o6TSu8EyqQ5ePZO%2FjPCNfmGwFhYh9KEgcnk9%2B31HKMhD%2FrCYlNXsOgtlMc81mn1b5sUkD4F%2BZKkdqWUARSOT0QElZIK1P7FoYoA5oBATYlaf4IX3m32hKornf9bMtq2xHYYvIiR659mL6GDdvE8wwnqK7xAY6pgGkD9OXesuKOP%2BLCOFK8CxQAjTDXfeRtE5ZQCmRjMWQUuJA9dft9nKWfu1i4Zj43386KV82eLqk8ZjIHwZlqO8D7n39nELZqILkIMflhJaqOHhO%2BvIwYQwtDBpXJWbIsLZAg%2BSVKjadAOIIpet1dEjqVjtHfK04o0rxAgz39pNK1NMab%2FU4QEw%2BE7kbCY18W4UAhUMkIWJkWVKSPrfyoF3eQGwZPY6g&X-Amz-Signature=855da15fbc34896af2fc17f805e71cbd647d3362a872f1b605b1020b4109fbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CISJTUM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCalIYbQY0dgBZU1BIF7VV7I4SM%2BgcDkFC0T%2FSDuSHeAiAckJU5sC30qcHtYNraKzNBcEN3uLefCLzKYgSHufD%2B4ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfwMSpA%2BMCJK%2BUduXKtwDDFYGUJR0IzTLiUf4xSJS1fLgnJ2S3KgxKcfyJzbTmkoEtrUZBHYgf6OVF36h7MhN9nWSNL9pbZUA5RWJJvWWWqy3uG6o%2BnDI3gPuMsGZC%2FGqeXjA2GEJiydnslupwFh3O3mBAAI1WBcBDWuox2S22bGLVnWxc%2Fj2fqGLAZTR8r%2FEL1eR8pq4AaOzIBEgdoL6%2FdQ906m5OeEACJeXzRnPHI9a%2Bpe6lWOKlIXw6NUCKRKa37HBAJxFVigIDRMxEvj7niXJHOEU1DY03Oj1BuH7Xm176%2BEFPQsfIskHvhzCQwObPjf5pkjEjPRSXul6cpAYiIIMsyYps2GDZBnwc3xTmVc9vKfTDNwj3Qaed6BR%2Bpq%2F2TOT%2B1%2Bu1v8AeK8TPx%2FQ4eMwCDrHlssjrIG4RJZmkJ%2FUAd%2Bk26r1kb7t%2B6IKCJwDSuLQHTVQHUoeOuC8dEUoEC0iJyQw6nElfXSpbtptBPs%2FJyxONSyHGEtH4s1o6TSu8EyqQ5ePZO%2FjPCNfmGwFhYh9KEgcnk9%2B31HKMhD%2FrCYlNXsOgtlMc81mn1b5sUkD4F%2BZKkdqWUARSOT0QElZIK1P7FoYoA5oBATYlaf4IX3m32hKornf9bMtq2xHYYvIiR659mL6GDdvE8wwnqK7xAY6pgGkD9OXesuKOP%2BLCOFK8CxQAjTDXfeRtE5ZQCmRjMWQUuJA9dft9nKWfu1i4Zj43386KV82eLqk8ZjIHwZlqO8D7n39nELZqILkIMflhJaqOHhO%2BvIwYQwtDBpXJWbIsLZAg%2BSVKjadAOIIpet1dEjqVjtHfK04o0rxAgz39pNK1NMab%2FU4QEw%2BE7kbCY18W4UAhUMkIWJkWVKSPrfyoF3eQGwZPY6g&X-Amz-Signature=311574ef57530562d42c4486f0320b99570ddebdb583f33d97e4b67cf6157296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CISJTUM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCalIYbQY0dgBZU1BIF7VV7I4SM%2BgcDkFC0T%2FSDuSHeAiAckJU5sC30qcHtYNraKzNBcEN3uLefCLzKYgSHufD%2B4ir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfwMSpA%2BMCJK%2BUduXKtwDDFYGUJR0IzTLiUf4xSJS1fLgnJ2S3KgxKcfyJzbTmkoEtrUZBHYgf6OVF36h7MhN9nWSNL9pbZUA5RWJJvWWWqy3uG6o%2BnDI3gPuMsGZC%2FGqeXjA2GEJiydnslupwFh3O3mBAAI1WBcBDWuox2S22bGLVnWxc%2Fj2fqGLAZTR8r%2FEL1eR8pq4AaOzIBEgdoL6%2FdQ906m5OeEACJeXzRnPHI9a%2Bpe6lWOKlIXw6NUCKRKa37HBAJxFVigIDRMxEvj7niXJHOEU1DY03Oj1BuH7Xm176%2BEFPQsfIskHvhzCQwObPjf5pkjEjPRSXul6cpAYiIIMsyYps2GDZBnwc3xTmVc9vKfTDNwj3Qaed6BR%2Bpq%2F2TOT%2B1%2Bu1v8AeK8TPx%2FQ4eMwCDrHlssjrIG4RJZmkJ%2FUAd%2Bk26r1kb7t%2B6IKCJwDSuLQHTVQHUoeOuC8dEUoEC0iJyQw6nElfXSpbtptBPs%2FJyxONSyHGEtH4s1o6TSu8EyqQ5ePZO%2FjPCNfmGwFhYh9KEgcnk9%2B31HKMhD%2FrCYlNXsOgtlMc81mn1b5sUkD4F%2BZKkdqWUARSOT0QElZIK1P7FoYoA5oBATYlaf4IX3m32hKornf9bMtq2xHYYvIiR659mL6GDdvE8wwnqK7xAY6pgGkD9OXesuKOP%2BLCOFK8CxQAjTDXfeRtE5ZQCmRjMWQUuJA9dft9nKWfu1i4Zj43386KV82eLqk8ZjIHwZlqO8D7n39nELZqILkIMflhJaqOHhO%2BvIwYQwtDBpXJWbIsLZAg%2BSVKjadAOIIpet1dEjqVjtHfK04o0rxAgz39pNK1NMab%2FU4QEw%2BE7kbCY18W4UAhUMkIWJkWVKSPrfyoF3eQGwZPY6g&X-Amz-Signature=61feb5dc4690422ad102a93734a99f815482498ae2e61b1827fab32480aaaa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
