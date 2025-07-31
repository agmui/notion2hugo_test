---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLOYNUJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR%2FXTsc4yh2IJErwJ6zkuv9%2B7NOTCAwe%2BhjcWlrrcCLAiBxJ2Qnb2IXNVURR14x1bQ22bCs3sk0%2B4mNG9G2E6JGUyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFUBUFho7Jc0O8j3WKtwD1NtAEWjnysxefUCBUYlzAbJhYuoEmKAkeJa3vCR%2F72RlMNQD0LILmVYVFt6oAkW4Yo1uEraxJTsNEmF59RxJ%2FL9OKPWi5L7LwfjQc3lfE2G5YqnDmD2G%2BMCfuZbgTn5GlUXoPALtxcyFfT42KTIjgNVNaIvViMz%2B7iYihoOS%2BcffaISqKrdvTdDFtJHRr2r66KPZ5%2F%2FaovKWk1U3kIt7ed%2FQlA5Y3sLwdrrCe93QVhTQlCJwwPmM7QXIRRmDQ0qQQlmhvf3nazxzntKDceNiHZ22%2FIlUAfVhe0j4%2BJGlm5%2FQNt8HKL88m9oY86qTDwaX7QGY8kra6msfeLcZp2AqHJ4CcvNSTSSc6Yk91OjfPPmpIVnlZ5jCxGxTcIDKDTELduXpml49Qfd4Via%2FWpxA7Ig7boT2kvvYsPc8zdTCpFYHm58CRAwPHMluVF1NV7Jjiu%2Btgzr7KMYPeXj6Hw49fHv6shJvftL5cSBemRDJLHoppSLLrV0w4JJa7Om3znEWhIz8tgKu6ph5zSlRZEvgrjHJ5cIF9RTQdMRoq2mi2xJ4LzlZ399n6YJZwcw5iVNqNG%2BvlBqaftEPDLztCebruVkyhldscjcMKi%2BkkklYJMaBSn6222YtMrJWJ%2Bgw3beuxAY6pgGSS6UTYXKrEigwd2F7fTJ0QBJlgKWJ%2FedOFKiLqsu7rnYfSd35IqbE5nyvMK8kRBe7eVTA%2BvLO2aar%2Fch6BFIzTlq38m1460wSw0XNX2tWQTqHN9%2F%2Bqb%2BtzY1KJVfSWKHTYXvzQYQVrZ%2F0kZrnCVabHO9SUpiMr%2Bdc1vy4FcIbDHQG8Objtc4DyCopU9%2BruQvczXem44mw4PH6GgEO%2BMWKvnMMh3DE&X-Amz-Signature=8d692729cc093be73435f397b6743419de61ad264bab52c45b2efcbe285006ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLOYNUJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR%2FXTsc4yh2IJErwJ6zkuv9%2B7NOTCAwe%2BhjcWlrrcCLAiBxJ2Qnb2IXNVURR14x1bQ22bCs3sk0%2B4mNG9G2E6JGUyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFUBUFho7Jc0O8j3WKtwD1NtAEWjnysxefUCBUYlzAbJhYuoEmKAkeJa3vCR%2F72RlMNQD0LILmVYVFt6oAkW4Yo1uEraxJTsNEmF59RxJ%2FL9OKPWi5L7LwfjQc3lfE2G5YqnDmD2G%2BMCfuZbgTn5GlUXoPALtxcyFfT42KTIjgNVNaIvViMz%2B7iYihoOS%2BcffaISqKrdvTdDFtJHRr2r66KPZ5%2F%2FaovKWk1U3kIt7ed%2FQlA5Y3sLwdrrCe93QVhTQlCJwwPmM7QXIRRmDQ0qQQlmhvf3nazxzntKDceNiHZ22%2FIlUAfVhe0j4%2BJGlm5%2FQNt8HKL88m9oY86qTDwaX7QGY8kra6msfeLcZp2AqHJ4CcvNSTSSc6Yk91OjfPPmpIVnlZ5jCxGxTcIDKDTELduXpml49Qfd4Via%2FWpxA7Ig7boT2kvvYsPc8zdTCpFYHm58CRAwPHMluVF1NV7Jjiu%2Btgzr7KMYPeXj6Hw49fHv6shJvftL5cSBemRDJLHoppSLLrV0w4JJa7Om3znEWhIz8tgKu6ph5zSlRZEvgrjHJ5cIF9RTQdMRoq2mi2xJ4LzlZ399n6YJZwcw5iVNqNG%2BvlBqaftEPDLztCebruVkyhldscjcMKi%2BkkklYJMaBSn6222YtMrJWJ%2Bgw3beuxAY6pgGSS6UTYXKrEigwd2F7fTJ0QBJlgKWJ%2FedOFKiLqsu7rnYfSd35IqbE5nyvMK8kRBe7eVTA%2BvLO2aar%2Fch6BFIzTlq38m1460wSw0XNX2tWQTqHN9%2F%2Bqb%2BtzY1KJVfSWKHTYXvzQYQVrZ%2F0kZrnCVabHO9SUpiMr%2Bdc1vy4FcIbDHQG8Objtc4DyCopU9%2BruQvczXem44mw4PH6GgEO%2BMWKvnMMh3DE&X-Amz-Signature=e5197d09586594c3c6b1021a394ec27996104feb9afe4324d0268aeb3fda573d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QLOYNUJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFR%2FXTsc4yh2IJErwJ6zkuv9%2B7NOTCAwe%2BhjcWlrrcCLAiBxJ2Qnb2IXNVURR14x1bQ22bCs3sk0%2B4mNG9G2E6JGUyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFUBUFho7Jc0O8j3WKtwD1NtAEWjnysxefUCBUYlzAbJhYuoEmKAkeJa3vCR%2F72RlMNQD0LILmVYVFt6oAkW4Yo1uEraxJTsNEmF59RxJ%2FL9OKPWi5L7LwfjQc3lfE2G5YqnDmD2G%2BMCfuZbgTn5GlUXoPALtxcyFfT42KTIjgNVNaIvViMz%2B7iYihoOS%2BcffaISqKrdvTdDFtJHRr2r66KPZ5%2F%2FaovKWk1U3kIt7ed%2FQlA5Y3sLwdrrCe93QVhTQlCJwwPmM7QXIRRmDQ0qQQlmhvf3nazxzntKDceNiHZ22%2FIlUAfVhe0j4%2BJGlm5%2FQNt8HKL88m9oY86qTDwaX7QGY8kra6msfeLcZp2AqHJ4CcvNSTSSc6Yk91OjfPPmpIVnlZ5jCxGxTcIDKDTELduXpml49Qfd4Via%2FWpxA7Ig7boT2kvvYsPc8zdTCpFYHm58CRAwPHMluVF1NV7Jjiu%2Btgzr7KMYPeXj6Hw49fHv6shJvftL5cSBemRDJLHoppSLLrV0w4JJa7Om3znEWhIz8tgKu6ph5zSlRZEvgrjHJ5cIF9RTQdMRoq2mi2xJ4LzlZ399n6YJZwcw5iVNqNG%2BvlBqaftEPDLztCebruVkyhldscjcMKi%2BkkklYJMaBSn6222YtMrJWJ%2Bgw3beuxAY6pgGSS6UTYXKrEigwd2F7fTJ0QBJlgKWJ%2FedOFKiLqsu7rnYfSd35IqbE5nyvMK8kRBe7eVTA%2BvLO2aar%2Fch6BFIzTlq38m1460wSw0XNX2tWQTqHN9%2F%2Bqb%2BtzY1KJVfSWKHTYXvzQYQVrZ%2F0kZrnCVabHO9SUpiMr%2Bdc1vy4FcIbDHQG8Objtc4DyCopU9%2BruQvczXem44mw4PH6GgEO%2BMWKvnMMh3DE&X-Amz-Signature=3a51968af4879d4d040b003b442e86f10d5a55b7a8dbb033708921e553be7dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
