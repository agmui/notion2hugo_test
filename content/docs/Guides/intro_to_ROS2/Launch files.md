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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLFRCXL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAcY7OzqpvmPFrl%2F5O6wTgLVHy6h1nJrG4AGbd394BAIhAPbq%2F8OPBXPJ0hXOZ1IznIlsTLiZoq3rdjhoYQ1G0LwmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35CXXoIXSVGBhM2cq3AO7bc0JqoiGlHbS%2Brz9gOre29UhMg9fFaBXCYUt6l30YFBwICJzl1L0il5p4FKVN26UFV4hni1fjg4GVvDy%2BiGdyuLccwyPJ4q%2BW4IsAG4JHnyrwOE5UrWUiV0p3n%2Fm6j5tN%2BMF9FBi7unEoWTqR14WsWAcSfhCAtfslV9kUvreOysfrUiFmYrsnb0LBVxLFaEjsgngQ8W54%2Bl38Z6XsXai%2BSXbPO%2Bu5tnhSECX4%2Fng5jL7jtKYyIUAzf%2BvIuQ39gemqnXxuSD%2FZDv0jO1nHmb5qsjSiVl49ORpfE6wLgDaY4KFCnvmdeDJeBUc1Cok7wbY2oEs5ZxlXfAnVh54GBOftZxz%2BQXrjd6nYFT8o6F%2FVBgfKDzZAx57x1LRi5DawD2W5l6z7YwgLMvLDVi0oSjD%2FrucM2gryi3bKJp%2BZ7kfU2kh6OSmQaBxN1yJSBkkkLgS%2B%2Bwy2pBfiFxw0uDSSNSTHbWMKlMnH8RGPaqYWMk9rXCHtFil%2Fpig3UeTztQRpQ99eThPZdZglU1%2Fq%2BOfo4jEmYvgrn1SBHBuAgM2WUPLYD%2FVB28PvEruicLZLglFgKJHEGXGjq0BPYc8y1xbmCx8IdG7ivr4BZ%2FI%2FQvMI97PYQddxX2Y09yG8CCvbzDItrLEBjqkAb8dhwdO%2F%2BjDypECnDj4Jg81sOQ473gcKabk2FChQqdTlL2Xs6Ko3888xKM8sjJTPpYomvjsLxezbmgqrnFcVsGL9J3FZ8tot0dIQ9Gl1ZVaTaH6jTzcFASMt%2FOXpLFSp9sp%2FNdwAi%2FMqpfSJAmOiiCnMluHnfvjvmoQl4RldV0IbI7LpTXrwfy6SfnEqK8z0WFmVxNRHk7GJ5N85MQoA2bF6EiM&X-Amz-Signature=79cb06a1865bb088de2634e279f2985170bb503ced448f527504f5d0c996b53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLFRCXL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAcY7OzqpvmPFrl%2F5O6wTgLVHy6h1nJrG4AGbd394BAIhAPbq%2F8OPBXPJ0hXOZ1IznIlsTLiZoq3rdjhoYQ1G0LwmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35CXXoIXSVGBhM2cq3AO7bc0JqoiGlHbS%2Brz9gOre29UhMg9fFaBXCYUt6l30YFBwICJzl1L0il5p4FKVN26UFV4hni1fjg4GVvDy%2BiGdyuLccwyPJ4q%2BW4IsAG4JHnyrwOE5UrWUiV0p3n%2Fm6j5tN%2BMF9FBi7unEoWTqR14WsWAcSfhCAtfslV9kUvreOysfrUiFmYrsnb0LBVxLFaEjsgngQ8W54%2Bl38Z6XsXai%2BSXbPO%2Bu5tnhSECX4%2Fng5jL7jtKYyIUAzf%2BvIuQ39gemqnXxuSD%2FZDv0jO1nHmb5qsjSiVl49ORpfE6wLgDaY4KFCnvmdeDJeBUc1Cok7wbY2oEs5ZxlXfAnVh54GBOftZxz%2BQXrjd6nYFT8o6F%2FVBgfKDzZAx57x1LRi5DawD2W5l6z7YwgLMvLDVi0oSjD%2FrucM2gryi3bKJp%2BZ7kfU2kh6OSmQaBxN1yJSBkkkLgS%2B%2Bwy2pBfiFxw0uDSSNSTHbWMKlMnH8RGPaqYWMk9rXCHtFil%2Fpig3UeTztQRpQ99eThPZdZglU1%2Fq%2BOfo4jEmYvgrn1SBHBuAgM2WUPLYD%2FVB28PvEruicLZLglFgKJHEGXGjq0BPYc8y1xbmCx8IdG7ivr4BZ%2FI%2FQvMI97PYQddxX2Y09yG8CCvbzDItrLEBjqkAb8dhwdO%2F%2BjDypECnDj4Jg81sOQ473gcKabk2FChQqdTlL2Xs6Ko3888xKM8sjJTPpYomvjsLxezbmgqrnFcVsGL9J3FZ8tot0dIQ9Gl1ZVaTaH6jTzcFASMt%2FOXpLFSp9sp%2FNdwAi%2FMqpfSJAmOiiCnMluHnfvjvmoQl4RldV0IbI7LpTXrwfy6SfnEqK8z0WFmVxNRHk7GJ5N85MQoA2bF6EiM&X-Amz-Signature=40e6b727c840398a2367b60277d30334d12e422baa5eb09a69c913c92c89f870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLFRCXL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjAcY7OzqpvmPFrl%2F5O6wTgLVHy6h1nJrG4AGbd394BAIhAPbq%2F8OPBXPJ0hXOZ1IznIlsTLiZoq3rdjhoYQ1G0LwmKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35CXXoIXSVGBhM2cq3AO7bc0JqoiGlHbS%2Brz9gOre29UhMg9fFaBXCYUt6l30YFBwICJzl1L0il5p4FKVN26UFV4hni1fjg4GVvDy%2BiGdyuLccwyPJ4q%2BW4IsAG4JHnyrwOE5UrWUiV0p3n%2Fm6j5tN%2BMF9FBi7unEoWTqR14WsWAcSfhCAtfslV9kUvreOysfrUiFmYrsnb0LBVxLFaEjsgngQ8W54%2Bl38Z6XsXai%2BSXbPO%2Bu5tnhSECX4%2Fng5jL7jtKYyIUAzf%2BvIuQ39gemqnXxuSD%2FZDv0jO1nHmb5qsjSiVl49ORpfE6wLgDaY4KFCnvmdeDJeBUc1Cok7wbY2oEs5ZxlXfAnVh54GBOftZxz%2BQXrjd6nYFT8o6F%2FVBgfKDzZAx57x1LRi5DawD2W5l6z7YwgLMvLDVi0oSjD%2FrucM2gryi3bKJp%2BZ7kfU2kh6OSmQaBxN1yJSBkkkLgS%2B%2Bwy2pBfiFxw0uDSSNSTHbWMKlMnH8RGPaqYWMk9rXCHtFil%2Fpig3UeTztQRpQ99eThPZdZglU1%2Fq%2BOfo4jEmYvgrn1SBHBuAgM2WUPLYD%2FVB28PvEruicLZLglFgKJHEGXGjq0BPYc8y1xbmCx8IdG7ivr4BZ%2FI%2FQvMI97PYQddxX2Y09yG8CCvbzDItrLEBjqkAb8dhwdO%2F%2BjDypECnDj4Jg81sOQ473gcKabk2FChQqdTlL2Xs6Ko3888xKM8sjJTPpYomvjsLxezbmgqrnFcVsGL9J3FZ8tot0dIQ9Gl1ZVaTaH6jTzcFASMt%2FOXpLFSp9sp%2FNdwAi%2FMqpfSJAmOiiCnMluHnfvjvmoQl4RldV0IbI7LpTXrwfy6SfnEqK8z0WFmVxNRHk7GJ5N85MQoA2bF6EiM&X-Amz-Signature=3ff7f750a99c8a7ae525bdfd8a8009163d0782efdbc1cff28425b4e54287f40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
