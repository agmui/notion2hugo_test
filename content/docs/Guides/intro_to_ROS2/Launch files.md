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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SMJPJI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCL9oInNd%2FaGotOFav%2F8Eq%2BYTFcDAPsmhLdZmEmdpJ2CQIhAKco5Mnnzv58MOchola9q10W1phJnUTHKEoY4hjsk38uKv8DCDEQABoMNjM3NDIzMTgzODA1Igyi3JFjRzH9C%2Bjgyo0q3AMeoEweaz3QY3huPw6YIHI9DYkOkTLHEhFMyyTOWMXyhMNUPgymLXxvsWIXh8JcWGoaBfeFDDMzwoUQh%2FloEN0Mq4qRZHA8yXUzEeItwogZlkeFuF3CS%2FR1HKywoikd0R1rE4a%2BoB094VFCO1JdBHCqOy67ZMoe5IHT8%2FTwgwwh1a5QklfD1dPEyj5B5XMDBnXboA8cEel%2Fkv%2BUoXbcb%2BMz%2FUo%2BeIM1jmo34%2BnBq1lYhgH3%2FFssJTuKefpdZ5hamGWKyQbQHz04jF%2FUdbujIHfNaEYCHXLiwReHQVyWlxRnfrL4uKDWvdfBTdwz43oXsqz9iWPQTy92%2Bz6m0%2Bu0oyLRT6zDPav2HJpYiWBgmRlkrlviFpQp%2B2qXSjL%2Fw4sFkqQGSDTHeS55InzhPY1zyvNWmNQYDF2HbUbg75dywzlIG4rUMVe4nmrzRTx5IWmxRyeLyrj%2FOBVjGdEL6yJMidNjtwQlPdWYYrSf1anylBa3za2TVRhas%2FfWzI1ek8fHp4AaSmQp8oWQYg0vHCgxbcIt95tCJLg539RwRHcUpKpKZEd%2FR81ZKz09%2BjwtSG5N3Rdjr53Hiy7aohoJ6OXvpjtd1GPSSEZcDDyabZadsz3JeDiAg3L9VcWcpEimrzD17J%2FDBjqkAaeCIl4Xu2JKsiX%2FXVEJInwNgLUmR%2F6ZImbpB5o2HZXlM%2Bgn4xRL8b7IWNQsdYSYEWDBhLjUENXQxJX3zpX2en4MjVhiNA55Ke%2BoA6YAeI2Cmg8zAb%2Bpgje4L%2B7JMsRINcHmS21HoyGN6mSt7R5i8OrOR2DFl7epm%2FMA2BVDYFxBEDUB2S5W%2Bxo2eeUrqH4UVfKiyWJmDh17R17atnj%2Bddzh3v%2Bi&X-Amz-Signature=234bc9591ce8f2a0b00d9d7f4be5fea4488e8fb529fb5c4f9f20d62606a3b996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SMJPJI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCL9oInNd%2FaGotOFav%2F8Eq%2BYTFcDAPsmhLdZmEmdpJ2CQIhAKco5Mnnzv58MOchola9q10W1phJnUTHKEoY4hjsk38uKv8DCDEQABoMNjM3NDIzMTgzODA1Igyi3JFjRzH9C%2Bjgyo0q3AMeoEweaz3QY3huPw6YIHI9DYkOkTLHEhFMyyTOWMXyhMNUPgymLXxvsWIXh8JcWGoaBfeFDDMzwoUQh%2FloEN0Mq4qRZHA8yXUzEeItwogZlkeFuF3CS%2FR1HKywoikd0R1rE4a%2BoB094VFCO1JdBHCqOy67ZMoe5IHT8%2FTwgwwh1a5QklfD1dPEyj5B5XMDBnXboA8cEel%2Fkv%2BUoXbcb%2BMz%2FUo%2BeIM1jmo34%2BnBq1lYhgH3%2FFssJTuKefpdZ5hamGWKyQbQHz04jF%2FUdbujIHfNaEYCHXLiwReHQVyWlxRnfrL4uKDWvdfBTdwz43oXsqz9iWPQTy92%2Bz6m0%2Bu0oyLRT6zDPav2HJpYiWBgmRlkrlviFpQp%2B2qXSjL%2Fw4sFkqQGSDTHeS55InzhPY1zyvNWmNQYDF2HbUbg75dywzlIG4rUMVe4nmrzRTx5IWmxRyeLyrj%2FOBVjGdEL6yJMidNjtwQlPdWYYrSf1anylBa3za2TVRhas%2FfWzI1ek8fHp4AaSmQp8oWQYg0vHCgxbcIt95tCJLg539RwRHcUpKpKZEd%2FR81ZKz09%2BjwtSG5N3Rdjr53Hiy7aohoJ6OXvpjtd1GPSSEZcDDyabZadsz3JeDiAg3L9VcWcpEimrzD17J%2FDBjqkAaeCIl4Xu2JKsiX%2FXVEJInwNgLUmR%2F6ZImbpB5o2HZXlM%2Bgn4xRL8b7IWNQsdYSYEWDBhLjUENXQxJX3zpX2en4MjVhiNA55Ke%2BoA6YAeI2Cmg8zAb%2Bpgje4L%2B7JMsRINcHmS21HoyGN6mSt7R5i8OrOR2DFl7epm%2FMA2BVDYFxBEDUB2S5W%2Bxo2eeUrqH4UVfKiyWJmDh17R17atnj%2Bddzh3v%2Bi&X-Amz-Signature=a889cc4852e0afd72c3627c7de01a58e4f69021f6d82f0acb66a2ea957704d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SMJPJI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCL9oInNd%2FaGotOFav%2F8Eq%2BYTFcDAPsmhLdZmEmdpJ2CQIhAKco5Mnnzv58MOchola9q10W1phJnUTHKEoY4hjsk38uKv8DCDEQABoMNjM3NDIzMTgzODA1Igyi3JFjRzH9C%2Bjgyo0q3AMeoEweaz3QY3huPw6YIHI9DYkOkTLHEhFMyyTOWMXyhMNUPgymLXxvsWIXh8JcWGoaBfeFDDMzwoUQh%2FloEN0Mq4qRZHA8yXUzEeItwogZlkeFuF3CS%2FR1HKywoikd0R1rE4a%2BoB094VFCO1JdBHCqOy67ZMoe5IHT8%2FTwgwwh1a5QklfD1dPEyj5B5XMDBnXboA8cEel%2Fkv%2BUoXbcb%2BMz%2FUo%2BeIM1jmo34%2BnBq1lYhgH3%2FFssJTuKefpdZ5hamGWKyQbQHz04jF%2FUdbujIHfNaEYCHXLiwReHQVyWlxRnfrL4uKDWvdfBTdwz43oXsqz9iWPQTy92%2Bz6m0%2Bu0oyLRT6zDPav2HJpYiWBgmRlkrlviFpQp%2B2qXSjL%2Fw4sFkqQGSDTHeS55InzhPY1zyvNWmNQYDF2HbUbg75dywzlIG4rUMVe4nmrzRTx5IWmxRyeLyrj%2FOBVjGdEL6yJMidNjtwQlPdWYYrSf1anylBa3za2TVRhas%2FfWzI1ek8fHp4AaSmQp8oWQYg0vHCgxbcIt95tCJLg539RwRHcUpKpKZEd%2FR81ZKz09%2BjwtSG5N3Rdjr53Hiy7aohoJ6OXvpjtd1GPSSEZcDDyabZadsz3JeDiAg3L9VcWcpEimrzD17J%2FDBjqkAaeCIl4Xu2JKsiX%2FXVEJInwNgLUmR%2F6ZImbpB5o2HZXlM%2Bgn4xRL8b7IWNQsdYSYEWDBhLjUENXQxJX3zpX2en4MjVhiNA55Ke%2BoA6YAeI2Cmg8zAb%2Bpgje4L%2B7JMsRINcHmS21HoyGN6mSt7R5i8OrOR2DFl7epm%2FMA2BVDYFxBEDUB2S5W%2Bxo2eeUrqH4UVfKiyWJmDh17R17atnj%2Bddzh3v%2Bi&X-Amz-Signature=490a9ae4d8ebe6ab11c167e45f9cdce437a3c7d3ae7d4f3c41b5bef3fd11280b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
