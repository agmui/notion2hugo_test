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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EF2L5SF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCBr7NIGkKe%2BIomcY7ObYOqf6s7%2Bq6NLpkXQgT6nEPYBgIhAMpNvWL%2BNUyC6vEbndiTbVGkn%2FlHXqhqLl1SI71BGzOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw96nG5JNUr%2BZKk6Aoq3APUZ36rAIj1%2B6kFfo6bTLU5akwN0DjBoL4n1ItKye0IACf4JEl6zTmsYxuHYRSmmNmHvsK%2FDAOQWNNaS63rqblOucAo486r2xmU2OBeU%2FDLJiKQUl65wsn6r0ToWBqUcOiDNdURmPNUfkT7il0fbtBHmKXWOwEZweh50yT5G6rLfcwzEMbyMZSytmyoC5FA%2BcRXQqpJs3GXLj%2BvOjxJEysVT9XxOaxANmTAmIJs34SuqBVKQcJsxCX18yjqyyTN6dWHJMkN9hUO8lGg31rkxpdnM8NBX9ac44X%2B54msrL9QnV4O1NbJ%2BDrfDbmYW9z8mcvcqhh5zEVFSZC40zS%2B3T8wrfyewgwLys88fo52fsGYrRPgx9tyzRidQAASr5r4uO7vqqQN%2BuIVC%2FewatEl3R9IxLMiRLfJp4wxcoIlbss0NqjM8irSOwlGK24XsjC2cMXrGM0Zgz3Mgoek7B9y7ws2DuP7%2BdCpTEWb6HkIvvkaVuW5TUNlrbwMxyK76axT1%2Bmuj514%2FTjboJO09KD%2BQ541iWudTUp%2Blh0AB7d4%2FxCDqRyRd2OW%2BDeu4Txfbo2wv0j45pC4hFFc9TdUUYJx6R5jGyt0UotbcjgRQfhaDL5bLvxFZSxOQSK%2BAFjksTDP6sfABjqkAWKOawk58LhPsxk8OyXUUnA6QjryruegLShxsL1xoY%2FjkeyOxNe1Tl8nWEHC0Km8KmztgYAHE0WLnsJsAj%2FtFcBuGgwNSRoGbBpCVRJ5vC7j%2FQ3uHsf1zSNmgYoe%2FbWObSZsLCaqwWS5%2FwlUzEhaSIhMyTIi5W1eSEeMzmhT%2BSjzhIzGE%2B5ISJcARXMpCVzcpeBI0Tv8jvxMDlut7SFZDSZXs1VE&X-Amz-Signature=e5bde1a7ad064c8c0f05344b3d847871ad693a19c824618a686763aa12e6a5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EF2L5SF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCBr7NIGkKe%2BIomcY7ObYOqf6s7%2Bq6NLpkXQgT6nEPYBgIhAMpNvWL%2BNUyC6vEbndiTbVGkn%2FlHXqhqLl1SI71BGzOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw96nG5JNUr%2BZKk6Aoq3APUZ36rAIj1%2B6kFfo6bTLU5akwN0DjBoL4n1ItKye0IACf4JEl6zTmsYxuHYRSmmNmHvsK%2FDAOQWNNaS63rqblOucAo486r2xmU2OBeU%2FDLJiKQUl65wsn6r0ToWBqUcOiDNdURmPNUfkT7il0fbtBHmKXWOwEZweh50yT5G6rLfcwzEMbyMZSytmyoC5FA%2BcRXQqpJs3GXLj%2BvOjxJEysVT9XxOaxANmTAmIJs34SuqBVKQcJsxCX18yjqyyTN6dWHJMkN9hUO8lGg31rkxpdnM8NBX9ac44X%2B54msrL9QnV4O1NbJ%2BDrfDbmYW9z8mcvcqhh5zEVFSZC40zS%2B3T8wrfyewgwLys88fo52fsGYrRPgx9tyzRidQAASr5r4uO7vqqQN%2BuIVC%2FewatEl3R9IxLMiRLfJp4wxcoIlbss0NqjM8irSOwlGK24XsjC2cMXrGM0Zgz3Mgoek7B9y7ws2DuP7%2BdCpTEWb6HkIvvkaVuW5TUNlrbwMxyK76axT1%2Bmuj514%2FTjboJO09KD%2BQ541iWudTUp%2Blh0AB7d4%2FxCDqRyRd2OW%2BDeu4Txfbo2wv0j45pC4hFFc9TdUUYJx6R5jGyt0UotbcjgRQfhaDL5bLvxFZSxOQSK%2BAFjksTDP6sfABjqkAWKOawk58LhPsxk8OyXUUnA6QjryruegLShxsL1xoY%2FjkeyOxNe1Tl8nWEHC0Km8KmztgYAHE0WLnsJsAj%2FtFcBuGgwNSRoGbBpCVRJ5vC7j%2FQ3uHsf1zSNmgYoe%2FbWObSZsLCaqwWS5%2FwlUzEhaSIhMyTIi5W1eSEeMzmhT%2BSjzhIzGE%2B5ISJcARXMpCVzcpeBI0Tv8jvxMDlut7SFZDSZXs1VE&X-Amz-Signature=1b2a22004858d0b6b723bb990f936a5c166f2157e23a34e595828b6a57f6b440&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EF2L5SF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCBr7NIGkKe%2BIomcY7ObYOqf6s7%2Bq6NLpkXQgT6nEPYBgIhAMpNvWL%2BNUyC6vEbndiTbVGkn%2FlHXqhqLl1SI71BGzOpKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw96nG5JNUr%2BZKk6Aoq3APUZ36rAIj1%2B6kFfo6bTLU5akwN0DjBoL4n1ItKye0IACf4JEl6zTmsYxuHYRSmmNmHvsK%2FDAOQWNNaS63rqblOucAo486r2xmU2OBeU%2FDLJiKQUl65wsn6r0ToWBqUcOiDNdURmPNUfkT7il0fbtBHmKXWOwEZweh50yT5G6rLfcwzEMbyMZSytmyoC5FA%2BcRXQqpJs3GXLj%2BvOjxJEysVT9XxOaxANmTAmIJs34SuqBVKQcJsxCX18yjqyyTN6dWHJMkN9hUO8lGg31rkxpdnM8NBX9ac44X%2B54msrL9QnV4O1NbJ%2BDrfDbmYW9z8mcvcqhh5zEVFSZC40zS%2B3T8wrfyewgwLys88fo52fsGYrRPgx9tyzRidQAASr5r4uO7vqqQN%2BuIVC%2FewatEl3R9IxLMiRLfJp4wxcoIlbss0NqjM8irSOwlGK24XsjC2cMXrGM0Zgz3Mgoek7B9y7ws2DuP7%2BdCpTEWb6HkIvvkaVuW5TUNlrbwMxyK76axT1%2Bmuj514%2FTjboJO09KD%2BQ541iWudTUp%2Blh0AB7d4%2FxCDqRyRd2OW%2BDeu4Txfbo2wv0j45pC4hFFc9TdUUYJx6R5jGyt0UotbcjgRQfhaDL5bLvxFZSxOQSK%2BAFjksTDP6sfABjqkAWKOawk58LhPsxk8OyXUUnA6QjryruegLShxsL1xoY%2FjkeyOxNe1Tl8nWEHC0Km8KmztgYAHE0WLnsJsAj%2FtFcBuGgwNSRoGbBpCVRJ5vC7j%2FQ3uHsf1zSNmgYoe%2FbWObSZsLCaqwWS5%2FwlUzEhaSIhMyTIi5W1eSEeMzmhT%2BSjzhIzGE%2B5ISJcARXMpCVzcpeBI0Tv8jvxMDlut7SFZDSZXs1VE&X-Amz-Signature=a9dd0498943f950149cb7916e954b01e7ca6de7b23a28c82dbfdd87b9ccd6b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
