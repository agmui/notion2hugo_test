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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OBHFMF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCgsY0DcJIKv%2BbiXjsIh6gMgYH8vUwLtTQYiVgLQ27LEQIhAN1Qn1ZJHHCsf%2BGNvPDlinzue1L6AgZBBBN%2F7QETCjsrKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh6AcJURLcAjXMqK4q3AN8pdjRCy3KcIsxYIgEgka5%2BpGe1dmvT%2F0tZ1C814gcjX4jodA3DrinsglWrERKdJMsPWD1EMWwNd7cQFV602FzxiaprMgML9PUg%2BBFaSt3sElVGsB96CHlDtgUPdiDNLZtJSqz5XC5B6Lix1LFBTtWqIjx5dkJz1H53eeSLM9TSBTsEsFEVZicUtkWmlnyREvd7t8hiE6sQ46%2F3nymVgD8q9SlR5cO%2B7STQ42xEUiMoZE37j54iKVPf8vSyRH7VjBBNxZIAkc68km5F5aNLcg2Y0DojT%2B8WGqMddtBUJMiA6EVNZdw29UMKrVF5ZmLOf03bn%2Bu9RkTQTuYF4hkj%2BV1m8odX2uunv2wZHbvzOLfKMuHYteAaSx1nV9ygCwnvnypubzv274PISTmdhAb52Ih%2FOBWKU7ib8xfnhx%2FFX77zCtFg2OJOorAXY3yPTqEyqGSDJ4dctytR0qPEPNEVvGn%2FVKitu7UtBjdvytPBgE48%2Bj9JHk3Iq2HGoO3wo0lZ5wry%2BKgD3JzGvvVht8Dpz6IgAxsEZJPTJHrz4U0LJqxqMPI2OhnjL0pQBrM1oVd3%2Bg2nyoaDeSvGtn%2FewkQ1mCrmU6wDkVN%2BaUdUycGsIJHrUaYHXpBSaXRUdXzMjDDy%2BDABjqkAVwCPkNAhhcRambsdB9pcTZqYHJX05VlwB3gGjekk9sXkOKpw9vqA56JCacDp0bBu6nuxm8X8NByMQgg6i2RZtRHYfJZN5xytzPKgqL7QCPELzklSEGFaROwwBEFV2BBDWawL3Hc%2FnWB7Y8RlEqfkB%2FrPBCyqZW3PDX1c%2FqmULLTHLejhpKfRrb%2FjtuILAeDl8UoeeYDuXrQd3gu9nn4U55Yo0o4&X-Amz-Signature=61c3bab6ec688b95efa555cf6dadccfd9760401d8ed958b751737532c5b537d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OBHFMF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCgsY0DcJIKv%2BbiXjsIh6gMgYH8vUwLtTQYiVgLQ27LEQIhAN1Qn1ZJHHCsf%2BGNvPDlinzue1L6AgZBBBN%2F7QETCjsrKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh6AcJURLcAjXMqK4q3AN8pdjRCy3KcIsxYIgEgka5%2BpGe1dmvT%2F0tZ1C814gcjX4jodA3DrinsglWrERKdJMsPWD1EMWwNd7cQFV602FzxiaprMgML9PUg%2BBFaSt3sElVGsB96CHlDtgUPdiDNLZtJSqz5XC5B6Lix1LFBTtWqIjx5dkJz1H53eeSLM9TSBTsEsFEVZicUtkWmlnyREvd7t8hiE6sQ46%2F3nymVgD8q9SlR5cO%2B7STQ42xEUiMoZE37j54iKVPf8vSyRH7VjBBNxZIAkc68km5F5aNLcg2Y0DojT%2B8WGqMddtBUJMiA6EVNZdw29UMKrVF5ZmLOf03bn%2Bu9RkTQTuYF4hkj%2BV1m8odX2uunv2wZHbvzOLfKMuHYteAaSx1nV9ygCwnvnypubzv274PISTmdhAb52Ih%2FOBWKU7ib8xfnhx%2FFX77zCtFg2OJOorAXY3yPTqEyqGSDJ4dctytR0qPEPNEVvGn%2FVKitu7UtBjdvytPBgE48%2Bj9JHk3Iq2HGoO3wo0lZ5wry%2BKgD3JzGvvVht8Dpz6IgAxsEZJPTJHrz4U0LJqxqMPI2OhnjL0pQBrM1oVd3%2Bg2nyoaDeSvGtn%2FewkQ1mCrmU6wDkVN%2BaUdUycGsIJHrUaYHXpBSaXRUdXzMjDDy%2BDABjqkAVwCPkNAhhcRambsdB9pcTZqYHJX05VlwB3gGjekk9sXkOKpw9vqA56JCacDp0bBu6nuxm8X8NByMQgg6i2RZtRHYfJZN5xytzPKgqL7QCPELzklSEGFaROwwBEFV2BBDWawL3Hc%2FnWB7Y8RlEqfkB%2FrPBCyqZW3PDX1c%2FqmULLTHLejhpKfRrb%2FjtuILAeDl8UoeeYDuXrQd3gu9nn4U55Yo0o4&X-Amz-Signature=89f217092b593a1c2f668bc1946be7b3e1f3b4f1a57d2e012ae7c0462bbd241b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OBHFMF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T033601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCgsY0DcJIKv%2BbiXjsIh6gMgYH8vUwLtTQYiVgLQ27LEQIhAN1Qn1ZJHHCsf%2BGNvPDlinzue1L6AgZBBBN%2F7QETCjsrKv8DCCQQABoMNjM3NDIzMTgzODA1Igyh6AcJURLcAjXMqK4q3AN8pdjRCy3KcIsxYIgEgka5%2BpGe1dmvT%2F0tZ1C814gcjX4jodA3DrinsglWrERKdJMsPWD1EMWwNd7cQFV602FzxiaprMgML9PUg%2BBFaSt3sElVGsB96CHlDtgUPdiDNLZtJSqz5XC5B6Lix1LFBTtWqIjx5dkJz1H53eeSLM9TSBTsEsFEVZicUtkWmlnyREvd7t8hiE6sQ46%2F3nymVgD8q9SlR5cO%2B7STQ42xEUiMoZE37j54iKVPf8vSyRH7VjBBNxZIAkc68km5F5aNLcg2Y0DojT%2B8WGqMddtBUJMiA6EVNZdw29UMKrVF5ZmLOf03bn%2Bu9RkTQTuYF4hkj%2BV1m8odX2uunv2wZHbvzOLfKMuHYteAaSx1nV9ygCwnvnypubzv274PISTmdhAb52Ih%2FOBWKU7ib8xfnhx%2FFX77zCtFg2OJOorAXY3yPTqEyqGSDJ4dctytR0qPEPNEVvGn%2FVKitu7UtBjdvytPBgE48%2Bj9JHk3Iq2HGoO3wo0lZ5wry%2BKgD3JzGvvVht8Dpz6IgAxsEZJPTJHrz4U0LJqxqMPI2OhnjL0pQBrM1oVd3%2Bg2nyoaDeSvGtn%2FewkQ1mCrmU6wDkVN%2BaUdUycGsIJHrUaYHXpBSaXRUdXzMjDDy%2BDABjqkAVwCPkNAhhcRambsdB9pcTZqYHJX05VlwB3gGjekk9sXkOKpw9vqA56JCacDp0bBu6nuxm8X8NByMQgg6i2RZtRHYfJZN5xytzPKgqL7QCPELzklSEGFaROwwBEFV2BBDWawL3Hc%2FnWB7Y8RlEqfkB%2FrPBCyqZW3PDX1c%2FqmULLTHLejhpKfRrb%2FjtuILAeDl8UoeeYDuXrQd3gu9nn4U55Yo0o4&X-Amz-Signature=a33b55f322447cccefa1d9097d3bcbf70dfe67b3b6d967a1da070ef878d95305&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
