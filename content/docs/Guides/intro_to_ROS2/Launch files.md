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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVEMAMD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B7XMCN8dxTuF8Sjy638aLHYylGafV2PwqaJiKbrorJQIhAIfoOuJsBDqjeMVogFXKbuX87jcYczBvWAGpVB2ennNPKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJK%2F6ge3zkbQgH0h8q3APcmjpSiDpRzJ4giGbXjCQkm5HTmSkHo%2BDdz6TaH53b4QiUGihuJWGpd%2FvjE1upyVyRJl2jVwwdhoxEwxucb3jYop01pzLTNCXhArArkm6TB3PBYA3LqggxStixpePbYtUKMCjEuA%2B%2Biu4jY%2FndmYaDT%2FiRQHSIbqpRNdAcZtW0c23jiq%2Br73vPJGskTUhGRwnOShW4wVUr7m37adQF%2FZ5gxAOoWOUN9gR3dw%2FroZKoeiXXA3O3niktPkBczw5KWYVQPb1PKJ979Cm2o3E%2BDhhnYynmswQbr%2Boe%2BMdjH1XZGKOfZsYEt4MuppP1uIkAYLFnIxF4Y4ruFS5uwhOAVsZK3Mwul30XlE%2FiQN36N7n0Hhk%2FAT9b%2B7U%2FJKJXc%2Boss9WNP80%2FPwEs%2FrsQfLnoA7pjWAjWvKbciKojnVyro%2FaGAkHo7JMtUFtONOJi0xXNYFUxP4Oc7lOY%2FPVSUzTexfYMA6rqe7ULuIJ0wFi46aQsekQ1VnxnbBOEhDmTKlHr6YDd6apbm92a1Dla9FirnMVEGdeIKGgx5UCsobU43cMZlfTx3qNNE0eOKE9KNTnyLj79UJLwJ9h2JDMjTyzmiXKDUrJai6Od0wm4AS%2F1BWgg5Bm1a1GtYVuvsoyRKDCJloTBBjqkAQHKHvcyIDDYaODhN8QpKsMZumtmOQrJNOs1u6kJiazzP1Ew20CbhqybJ5EaUzSOFMHoDrmhoRM8YKF1Ti%2FltgGDMTyjU6w1rUm24%2B%2F%2FufjDOtUtrZ4VL8NC%2Fwhc4FFvenrF0k0uw4IeDOKiRkHwpvGeOiwg5k9%2BpW0KJzlURmyb8vb00ICPfYT1n6og2XkOOypCTozUWtZ7iqkrUDhQsj56zw3a&X-Amz-Signature=1e00616eaca55f08a33ac1cd14120529e7fbdc25be65ffa07b02a042cdd88a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVEMAMD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B7XMCN8dxTuF8Sjy638aLHYylGafV2PwqaJiKbrorJQIhAIfoOuJsBDqjeMVogFXKbuX87jcYczBvWAGpVB2ennNPKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJK%2F6ge3zkbQgH0h8q3APcmjpSiDpRzJ4giGbXjCQkm5HTmSkHo%2BDdz6TaH53b4QiUGihuJWGpd%2FvjE1upyVyRJl2jVwwdhoxEwxucb3jYop01pzLTNCXhArArkm6TB3PBYA3LqggxStixpePbYtUKMCjEuA%2B%2Biu4jY%2FndmYaDT%2FiRQHSIbqpRNdAcZtW0c23jiq%2Br73vPJGskTUhGRwnOShW4wVUr7m37adQF%2FZ5gxAOoWOUN9gR3dw%2FroZKoeiXXA3O3niktPkBczw5KWYVQPb1PKJ979Cm2o3E%2BDhhnYynmswQbr%2Boe%2BMdjH1XZGKOfZsYEt4MuppP1uIkAYLFnIxF4Y4ruFS5uwhOAVsZK3Mwul30XlE%2FiQN36N7n0Hhk%2FAT9b%2B7U%2FJKJXc%2Boss9WNP80%2FPwEs%2FrsQfLnoA7pjWAjWvKbciKojnVyro%2FaGAkHo7JMtUFtONOJi0xXNYFUxP4Oc7lOY%2FPVSUzTexfYMA6rqe7ULuIJ0wFi46aQsekQ1VnxnbBOEhDmTKlHr6YDd6apbm92a1Dla9FirnMVEGdeIKGgx5UCsobU43cMZlfTx3qNNE0eOKE9KNTnyLj79UJLwJ9h2JDMjTyzmiXKDUrJai6Od0wm4AS%2F1BWgg5Bm1a1GtYVuvsoyRKDCJloTBBjqkAQHKHvcyIDDYaODhN8QpKsMZumtmOQrJNOs1u6kJiazzP1Ew20CbhqybJ5EaUzSOFMHoDrmhoRM8YKF1Ti%2FltgGDMTyjU6w1rUm24%2B%2F%2FufjDOtUtrZ4VL8NC%2Fwhc4FFvenrF0k0uw4IeDOKiRkHwpvGeOiwg5k9%2BpW0KJzlURmyb8vb00ICPfYT1n6og2XkOOypCTozUWtZ7iqkrUDhQsj56zw3a&X-Amz-Signature=d5263671f1848be4c18b38bd164e091930eafd83e5d54bf0a7f70cad28b48465&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCVEMAMD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2B7XMCN8dxTuF8Sjy638aLHYylGafV2PwqaJiKbrorJQIhAIfoOuJsBDqjeMVogFXKbuX87jcYczBvWAGpVB2ennNPKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJK%2F6ge3zkbQgH0h8q3APcmjpSiDpRzJ4giGbXjCQkm5HTmSkHo%2BDdz6TaH53b4QiUGihuJWGpd%2FvjE1upyVyRJl2jVwwdhoxEwxucb3jYop01pzLTNCXhArArkm6TB3PBYA3LqggxStixpePbYtUKMCjEuA%2B%2Biu4jY%2FndmYaDT%2FiRQHSIbqpRNdAcZtW0c23jiq%2Br73vPJGskTUhGRwnOShW4wVUr7m37adQF%2FZ5gxAOoWOUN9gR3dw%2FroZKoeiXXA3O3niktPkBczw5KWYVQPb1PKJ979Cm2o3E%2BDhhnYynmswQbr%2Boe%2BMdjH1XZGKOfZsYEt4MuppP1uIkAYLFnIxF4Y4ruFS5uwhOAVsZK3Mwul30XlE%2FiQN36N7n0Hhk%2FAT9b%2B7U%2FJKJXc%2Boss9WNP80%2FPwEs%2FrsQfLnoA7pjWAjWvKbciKojnVyro%2FaGAkHo7JMtUFtONOJi0xXNYFUxP4Oc7lOY%2FPVSUzTexfYMA6rqe7ULuIJ0wFi46aQsekQ1VnxnbBOEhDmTKlHr6YDd6apbm92a1Dla9FirnMVEGdeIKGgx5UCsobU43cMZlfTx3qNNE0eOKE9KNTnyLj79UJLwJ9h2JDMjTyzmiXKDUrJai6Od0wm4AS%2F1BWgg5Bm1a1GtYVuvsoyRKDCJloTBBjqkAQHKHvcyIDDYaODhN8QpKsMZumtmOQrJNOs1u6kJiazzP1Ew20CbhqybJ5EaUzSOFMHoDrmhoRM8YKF1Ti%2FltgGDMTyjU6w1rUm24%2B%2F%2FufjDOtUtrZ4VL8NC%2Fwhc4FFvenrF0k0uw4IeDOKiRkHwpvGeOiwg5k9%2BpW0KJzlURmyb8vb00ICPfYT1n6og2XkOOypCTozUWtZ7iqkrUDhQsj56zw3a&X-Amz-Signature=c13e8b79287ceff45acc8c9c7820e4d8bf4c210a39523278ec9bf746cb265426&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
