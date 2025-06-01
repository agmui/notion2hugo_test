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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMMEHRCL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHQ84S3l6%2F3pRtAgnd4%2FvU7IR9nowOvMqshPSOlKE2G9AiBI29FmsOSe7wzojdGsSG7RJdUNC9jUsfMDNrHkNBC8kyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqwN0mfVe0N1Wn9VKtwD%2FLurmbffkEyK9u9eRwPZHBNd4jwmstYIoeRAyD83pQSEP8dMkAuh26v3701Rb8SDa6xkuxYmLDjWdxAM7qtke82BcTPYYbOMPRbK0eGI9KRY3%2F2BJCM%2Fpx7Wv%2BYnAJ1RsA9I9LD9XgLRLrQIfjNENdhzVKfisDDtZqpWOJ7ZBLSRU5ikY8Grve3Bto1GYQGZU%2FPcfSW9SpVlCDhI%2B6xHRfpHf%2BNyCz5yzhMDVJM4XBdjdzWP2OQm9ANQRCVyueVLzk4BHXFjBHbWmr6%2BRhBw0tYw%2BdoOxfevn29NGBCTft%2BEsqyG6YB%2FO%2BVO9nXacjT957ysni1Qbm%2B%2FRnccvZ6l1oMM00WkQJXkbLKwr4d%2BQACNrfh%2FotGeJ1vmQf87uYFL3qgSSmIGr%2B57wQJ%2F91Spg2TafysIywNaLpduc16hrmIyx4ZK0CQLe%2FyMMEy43rlThjR438w9wkJo8BJqoxz%2FugQOJML815uTWSiDdkF3LjKaFLwx2gWS6XMMum6hnQtI2Egtb9NP3dgo%2F7rd2ZIZRMSJc6zmC8Fb3WVoq9QCEFMIB%2FOnZ2PyoCIU62%2Bgq5xc9g0VFJrzYwfj9%2BDLH8t27GhYGbUPAs0%2BB9nHwN4oImKXVfFSWfTq4ectBUAwhYzwwQY6pgFk5wMOBRiR041Sd7X%2Fv4mVJuSaUgj35x9TtjM1DrhqeMdICgZ0sTloWNHA5%2FKr6U6MwQbs1rJKLqLZ6J8n5yFK9hwAIzua4Z2Dw%2FvyWJKPGvVQhhxWzqBk8nKrudlCHqkUVVkFf%2FYeeQIqEhfeBrnuFYObtVfp6JCe2gZFM9wWL851h9ZDyrTIsMEvMhnGD9VwGiRJtWFnfHzNYVloi%2Fs3wxSsl4IV&X-Amz-Signature=cd20b8b013498f2bbc33558c57cf1808f50106072b23294e6c83bc452dbd69e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMMEHRCL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHQ84S3l6%2F3pRtAgnd4%2FvU7IR9nowOvMqshPSOlKE2G9AiBI29FmsOSe7wzojdGsSG7RJdUNC9jUsfMDNrHkNBC8kyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqwN0mfVe0N1Wn9VKtwD%2FLurmbffkEyK9u9eRwPZHBNd4jwmstYIoeRAyD83pQSEP8dMkAuh26v3701Rb8SDa6xkuxYmLDjWdxAM7qtke82BcTPYYbOMPRbK0eGI9KRY3%2F2BJCM%2Fpx7Wv%2BYnAJ1RsA9I9LD9XgLRLrQIfjNENdhzVKfisDDtZqpWOJ7ZBLSRU5ikY8Grve3Bto1GYQGZU%2FPcfSW9SpVlCDhI%2B6xHRfpHf%2BNyCz5yzhMDVJM4XBdjdzWP2OQm9ANQRCVyueVLzk4BHXFjBHbWmr6%2BRhBw0tYw%2BdoOxfevn29NGBCTft%2BEsqyG6YB%2FO%2BVO9nXacjT957ysni1Qbm%2B%2FRnccvZ6l1oMM00WkQJXkbLKwr4d%2BQACNrfh%2FotGeJ1vmQf87uYFL3qgSSmIGr%2B57wQJ%2F91Spg2TafysIywNaLpduc16hrmIyx4ZK0CQLe%2FyMMEy43rlThjR438w9wkJo8BJqoxz%2FugQOJML815uTWSiDdkF3LjKaFLwx2gWS6XMMum6hnQtI2Egtb9NP3dgo%2F7rd2ZIZRMSJc6zmC8Fb3WVoq9QCEFMIB%2FOnZ2PyoCIU62%2Bgq5xc9g0VFJrzYwfj9%2BDLH8t27GhYGbUPAs0%2BB9nHwN4oImKXVfFSWfTq4ectBUAwhYzwwQY6pgFk5wMOBRiR041Sd7X%2Fv4mVJuSaUgj35x9TtjM1DrhqeMdICgZ0sTloWNHA5%2FKr6U6MwQbs1rJKLqLZ6J8n5yFK9hwAIzua4Z2Dw%2FvyWJKPGvVQhhxWzqBk8nKrudlCHqkUVVkFf%2FYeeQIqEhfeBrnuFYObtVfp6JCe2gZFM9wWL851h9ZDyrTIsMEvMhnGD9VwGiRJtWFnfHzNYVloi%2Fs3wxSsl4IV&X-Amz-Signature=309bf1dec167fc47219e63fa1d4de1009df4a62ef146d636c95d29e530dd53a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMMEHRCL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHQ84S3l6%2F3pRtAgnd4%2FvU7IR9nowOvMqshPSOlKE2G9AiBI29FmsOSe7wzojdGsSG7RJdUNC9jUsfMDNrHkNBC8kyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqwN0mfVe0N1Wn9VKtwD%2FLurmbffkEyK9u9eRwPZHBNd4jwmstYIoeRAyD83pQSEP8dMkAuh26v3701Rb8SDa6xkuxYmLDjWdxAM7qtke82BcTPYYbOMPRbK0eGI9KRY3%2F2BJCM%2Fpx7Wv%2BYnAJ1RsA9I9LD9XgLRLrQIfjNENdhzVKfisDDtZqpWOJ7ZBLSRU5ikY8Grve3Bto1GYQGZU%2FPcfSW9SpVlCDhI%2B6xHRfpHf%2BNyCz5yzhMDVJM4XBdjdzWP2OQm9ANQRCVyueVLzk4BHXFjBHbWmr6%2BRhBw0tYw%2BdoOxfevn29NGBCTft%2BEsqyG6YB%2FO%2BVO9nXacjT957ysni1Qbm%2B%2FRnccvZ6l1oMM00WkQJXkbLKwr4d%2BQACNrfh%2FotGeJ1vmQf87uYFL3qgSSmIGr%2B57wQJ%2F91Spg2TafysIywNaLpduc16hrmIyx4ZK0CQLe%2FyMMEy43rlThjR438w9wkJo8BJqoxz%2FugQOJML815uTWSiDdkF3LjKaFLwx2gWS6XMMum6hnQtI2Egtb9NP3dgo%2F7rd2ZIZRMSJc6zmC8Fb3WVoq9QCEFMIB%2FOnZ2PyoCIU62%2Bgq5xc9g0VFJrzYwfj9%2BDLH8t27GhYGbUPAs0%2BB9nHwN4oImKXVfFSWfTq4ectBUAwhYzwwQY6pgFk5wMOBRiR041Sd7X%2Fv4mVJuSaUgj35x9TtjM1DrhqeMdICgZ0sTloWNHA5%2FKr6U6MwQbs1rJKLqLZ6J8n5yFK9hwAIzua4Z2Dw%2FvyWJKPGvVQhhxWzqBk8nKrudlCHqkUVVkFf%2FYeeQIqEhfeBrnuFYObtVfp6JCe2gZFM9wWL851h9ZDyrTIsMEvMhnGD9VwGiRJtWFnfHzNYVloi%2Fs3wxSsl4IV&X-Amz-Signature=1670c33910a71ad541a28e0bfa9f5f684cb558d10fe6d1bebcc75eca69f552e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
