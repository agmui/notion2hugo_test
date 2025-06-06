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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKUZ4JS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGNosIPPJClwetG%2FFhnAhs7L%2Bhu%2B4FjytJjgaOpFz3iwIhAI68kf0qRBl0r8dQheieB7lVreSkzTkFp%2Bz%2B8UN7FFAkKv8DCGUQABoMNjM3NDIzMTgzODA1IgwkWzNkOJg09H1pLwUq3ANXr6y5%2B9yaK5jVzCTsfSbieKmGfFgNfWfRJeBIhKw7z2KHH8BmfvAzHIgWdhiB7ArNja0zYcTedkCy%2FUsHsjHRpSAQSO%2BUm2v1r0C%2BFoSaTxP3nmUkJ3FMnqrn4PpCcABsWPXgoby%2BIsOuAmRK0fwz11sah1cTgrnZEzWvafsrZY4MIJQ5UixNrHIUJPo%2Bp28kqXQN2GCdRdIXg%2FLGybl92XxuTkmaziGkCvwuY4%2BiUmfbYFBAqrxdfA6LEua8qjpody3aWriXghRpmSG1zqYfM5RelLOEZvalQsCGaXiOPtZQnbFTuJ4SW41LB9Dj5MBtvcLd5qOz05eip6Kb7Uf93mNkjlDKXpABmkqRzJI3utGGLxlzOJJdS%2BcQ7M%2FM7iMpInFF%2FwLztr9G04jNVpBUgKgFBb88K2aIsDmVA9ldj0ByYL%2FOvpjlMmgcQpHzR%2F5BReoIQ3rUC3RjhFTrNcjoqhObpUBK1uiJ7bakT5nWBOKxTPrGsvA2bdJxzb4F3tBrdVVA8n1uflOljxv%2BAerYXfac47M8xHT65i9xaB28lpf0Cw0jBaoJLrfkMA628aDb7a8IE7fpaBA6lR134KXaJhXHJAPXFN74aKuVJIrIh6N4lSn40ED4XHsSMzDJkY3CBjqkAWOE8njkv92aoEEkmk4bm0pK8EyTIFLYb35%2FfBHaL1AYaj4p7mDeTQkoX2%2FvoT8pcbq3t0F9Klw7TbMHXm9pgEmqBbLO%2FbIweyOtNG1WLm5ZfnTcFvtzAt2YkgSwTwclLenOkcH0S7APS%2B6IQDIzm%2BKVKKo5pkwI2BH%2BBoT7ofvKpGeWdEojLToEfbJ26M2hA3uPV3cP0q8nR7dqpTryi01UNGKe&X-Amz-Signature=80708194ffce11de3a5ed996dcdc01edbc89aa2487b44d9c92fad4252347beba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKUZ4JS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGNosIPPJClwetG%2FFhnAhs7L%2Bhu%2B4FjytJjgaOpFz3iwIhAI68kf0qRBl0r8dQheieB7lVreSkzTkFp%2Bz%2B8UN7FFAkKv8DCGUQABoMNjM3NDIzMTgzODA1IgwkWzNkOJg09H1pLwUq3ANXr6y5%2B9yaK5jVzCTsfSbieKmGfFgNfWfRJeBIhKw7z2KHH8BmfvAzHIgWdhiB7ArNja0zYcTedkCy%2FUsHsjHRpSAQSO%2BUm2v1r0C%2BFoSaTxP3nmUkJ3FMnqrn4PpCcABsWPXgoby%2BIsOuAmRK0fwz11sah1cTgrnZEzWvafsrZY4MIJQ5UixNrHIUJPo%2Bp28kqXQN2GCdRdIXg%2FLGybl92XxuTkmaziGkCvwuY4%2BiUmfbYFBAqrxdfA6LEua8qjpody3aWriXghRpmSG1zqYfM5RelLOEZvalQsCGaXiOPtZQnbFTuJ4SW41LB9Dj5MBtvcLd5qOz05eip6Kb7Uf93mNkjlDKXpABmkqRzJI3utGGLxlzOJJdS%2BcQ7M%2FM7iMpInFF%2FwLztr9G04jNVpBUgKgFBb88K2aIsDmVA9ldj0ByYL%2FOvpjlMmgcQpHzR%2F5BReoIQ3rUC3RjhFTrNcjoqhObpUBK1uiJ7bakT5nWBOKxTPrGsvA2bdJxzb4F3tBrdVVA8n1uflOljxv%2BAerYXfac47M8xHT65i9xaB28lpf0Cw0jBaoJLrfkMA628aDb7a8IE7fpaBA6lR134KXaJhXHJAPXFN74aKuVJIrIh6N4lSn40ED4XHsSMzDJkY3CBjqkAWOE8njkv92aoEEkmk4bm0pK8EyTIFLYb35%2FfBHaL1AYaj4p7mDeTQkoX2%2FvoT8pcbq3t0F9Klw7TbMHXm9pgEmqBbLO%2FbIweyOtNG1WLm5ZfnTcFvtzAt2YkgSwTwclLenOkcH0S7APS%2B6IQDIzm%2BKVKKo5pkwI2BH%2BBoT7ofvKpGeWdEojLToEfbJ26M2hA3uPV3cP0q8nR7dqpTryi01UNGKe&X-Amz-Signature=d8198302875e83d0a17741f9cec940ea3440bf56c6dd6ad80f0deb90fe0601d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKUZ4JS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGNosIPPJClwetG%2FFhnAhs7L%2Bhu%2B4FjytJjgaOpFz3iwIhAI68kf0qRBl0r8dQheieB7lVreSkzTkFp%2Bz%2B8UN7FFAkKv8DCGUQABoMNjM3NDIzMTgzODA1IgwkWzNkOJg09H1pLwUq3ANXr6y5%2B9yaK5jVzCTsfSbieKmGfFgNfWfRJeBIhKw7z2KHH8BmfvAzHIgWdhiB7ArNja0zYcTedkCy%2FUsHsjHRpSAQSO%2BUm2v1r0C%2BFoSaTxP3nmUkJ3FMnqrn4PpCcABsWPXgoby%2BIsOuAmRK0fwz11sah1cTgrnZEzWvafsrZY4MIJQ5UixNrHIUJPo%2Bp28kqXQN2GCdRdIXg%2FLGybl92XxuTkmaziGkCvwuY4%2BiUmfbYFBAqrxdfA6LEua8qjpody3aWriXghRpmSG1zqYfM5RelLOEZvalQsCGaXiOPtZQnbFTuJ4SW41LB9Dj5MBtvcLd5qOz05eip6Kb7Uf93mNkjlDKXpABmkqRzJI3utGGLxlzOJJdS%2BcQ7M%2FM7iMpInFF%2FwLztr9G04jNVpBUgKgFBb88K2aIsDmVA9ldj0ByYL%2FOvpjlMmgcQpHzR%2F5BReoIQ3rUC3RjhFTrNcjoqhObpUBK1uiJ7bakT5nWBOKxTPrGsvA2bdJxzb4F3tBrdVVA8n1uflOljxv%2BAerYXfac47M8xHT65i9xaB28lpf0Cw0jBaoJLrfkMA628aDb7a8IE7fpaBA6lR134KXaJhXHJAPXFN74aKuVJIrIh6N4lSn40ED4XHsSMzDJkY3CBjqkAWOE8njkv92aoEEkmk4bm0pK8EyTIFLYb35%2FfBHaL1AYaj4p7mDeTQkoX2%2FvoT8pcbq3t0F9Klw7TbMHXm9pgEmqBbLO%2FbIweyOtNG1WLm5ZfnTcFvtzAt2YkgSwTwclLenOkcH0S7APS%2B6IQDIzm%2BKVKKo5pkwI2BH%2BBoT7ofvKpGeWdEojLToEfbJ26M2hA3uPV3cP0q8nR7dqpTryi01UNGKe&X-Amz-Signature=c6a17c077b691388cce009e927375c2189cccd5d474a88533ee2a32261eef838&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
