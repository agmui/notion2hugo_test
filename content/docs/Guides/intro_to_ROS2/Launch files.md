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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NNYCBRZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDByFPKvQE%2FoBb29IGvm9AnxEkSuP1jE%2FN64E2p3GKWzgIhAM7VRa%2B8SEOfXYX36F5Fc2PjtE1gemkjc4yZnP2VgrjLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY795CMyiLpiFc5YQq3APrp%2B3ksw5I0x95%2FuYR8aD%2FkXlGN4u0ALHcUW9FKd5uR12RU9NMc9nGE435INirtf7Bc%2B3D%2BpuxKuzHdEMbNaj%2BysTFqu3aLlQQS3DkItV1QeDYW0E1HubEYFtMAjyS8I9qWc6l9EpsedD%2Be1IkzeDBDdYyUcmZKa7UKoRk%2BP8PnFJ92evp33rCD%2FV4qGcrKqn2sp%2BZ9WvoJ4PjAZuQh5yi4RQJOFePng6MqGI1ZRVtPA%2FVkrUc12Z1%2FL5%2ByOGu9iYC4Fvzxx2Z1f%2BOnG7HMv2pADv8B1KPKE7lmSsnnSHTfpcUy68pkAui3V%2Blvwd7MLVyf1tQ8wygcCV6Kw3es%2FKahLsWdrLkNze4t5WIvRlJIUhBVOKe2mYdEa3AhZxUeCQA%2FnhluCYg8zeuxqPHub64FqpBa8PV4BUoEtBSQIn6rztbb%2Bxj7fdvqRLWBYu1qHGqAJmEGzQm%2B7wO%2FmJqWIeQ0k6civcHYicxfANEyHxp8sCoKk%2BcdflJaJrKg64ay75n%2FuVj%2B5KDQ34lUk2q35hKxxtG4fGuuID%2FCsGv%2B8j%2BwIL5S454grUoqgoz52EvhMepKNPb5eFTr1K%2Bz0W2bwlLW6Sjs9dqjoUXSl5cPUL9EvkEFyIIIHdIKU2qwDCflbPDBjqkARljPUZVHMfOCeVJyLr9jBgyZw1NZ91GwthhD7jxwfKL5F0Y4UY%2F8vTwDu1Q2oknCm78IsuSzP1erjZD85O5qq%2FSm%2B8CW1x3AjAaLOqeG7irJNfu0jI2mOKdRzEIqsp6h9P0SHr%2FKckEmRXDMf%2FYwHk6xOFvM%2BjNza4oP8k43xfS7XSot2mRWL%2ByJJLG4g4Ofpq91EbuqVbmfJH2jVAdzUxHQtLu&X-Amz-Signature=b71816a2efef1f1a5d4daff3087da472d5ba5f13f23d8aa3aca04332f22eba94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NNYCBRZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDByFPKvQE%2FoBb29IGvm9AnxEkSuP1jE%2FN64E2p3GKWzgIhAM7VRa%2B8SEOfXYX36F5Fc2PjtE1gemkjc4yZnP2VgrjLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY795CMyiLpiFc5YQq3APrp%2B3ksw5I0x95%2FuYR8aD%2FkXlGN4u0ALHcUW9FKd5uR12RU9NMc9nGE435INirtf7Bc%2B3D%2BpuxKuzHdEMbNaj%2BysTFqu3aLlQQS3DkItV1QeDYW0E1HubEYFtMAjyS8I9qWc6l9EpsedD%2Be1IkzeDBDdYyUcmZKa7UKoRk%2BP8PnFJ92evp33rCD%2FV4qGcrKqn2sp%2BZ9WvoJ4PjAZuQh5yi4RQJOFePng6MqGI1ZRVtPA%2FVkrUc12Z1%2FL5%2ByOGu9iYC4Fvzxx2Z1f%2BOnG7HMv2pADv8B1KPKE7lmSsnnSHTfpcUy68pkAui3V%2Blvwd7MLVyf1tQ8wygcCV6Kw3es%2FKahLsWdrLkNze4t5WIvRlJIUhBVOKe2mYdEa3AhZxUeCQA%2FnhluCYg8zeuxqPHub64FqpBa8PV4BUoEtBSQIn6rztbb%2Bxj7fdvqRLWBYu1qHGqAJmEGzQm%2B7wO%2FmJqWIeQ0k6civcHYicxfANEyHxp8sCoKk%2BcdflJaJrKg64ay75n%2FuVj%2B5KDQ34lUk2q35hKxxtG4fGuuID%2FCsGv%2B8j%2BwIL5S454grUoqgoz52EvhMepKNPb5eFTr1K%2Bz0W2bwlLW6Sjs9dqjoUXSl5cPUL9EvkEFyIIIHdIKU2qwDCflbPDBjqkARljPUZVHMfOCeVJyLr9jBgyZw1NZ91GwthhD7jxwfKL5F0Y4UY%2F8vTwDu1Q2oknCm78IsuSzP1erjZD85O5qq%2FSm%2B8CW1x3AjAaLOqeG7irJNfu0jI2mOKdRzEIqsp6h9P0SHr%2FKckEmRXDMf%2FYwHk6xOFvM%2BjNza4oP8k43xfS7XSot2mRWL%2ByJJLG4g4Ofpq91EbuqVbmfJH2jVAdzUxHQtLu&X-Amz-Signature=9310e071fab06120c36ccc429ac824fa6e2918fe6dc016801e6487eb9efcb532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NNYCBRZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDByFPKvQE%2FoBb29IGvm9AnxEkSuP1jE%2FN64E2p3GKWzgIhAM7VRa%2B8SEOfXYX36F5Fc2PjtE1gemkjc4yZnP2VgrjLKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY795CMyiLpiFc5YQq3APrp%2B3ksw5I0x95%2FuYR8aD%2FkXlGN4u0ALHcUW9FKd5uR12RU9NMc9nGE435INirtf7Bc%2B3D%2BpuxKuzHdEMbNaj%2BysTFqu3aLlQQS3DkItV1QeDYW0E1HubEYFtMAjyS8I9qWc6l9EpsedD%2Be1IkzeDBDdYyUcmZKa7UKoRk%2BP8PnFJ92evp33rCD%2FV4qGcrKqn2sp%2BZ9WvoJ4PjAZuQh5yi4RQJOFePng6MqGI1ZRVtPA%2FVkrUc12Z1%2FL5%2ByOGu9iYC4Fvzxx2Z1f%2BOnG7HMv2pADv8B1KPKE7lmSsnnSHTfpcUy68pkAui3V%2Blvwd7MLVyf1tQ8wygcCV6Kw3es%2FKahLsWdrLkNze4t5WIvRlJIUhBVOKe2mYdEa3AhZxUeCQA%2FnhluCYg8zeuxqPHub64FqpBa8PV4BUoEtBSQIn6rztbb%2Bxj7fdvqRLWBYu1qHGqAJmEGzQm%2B7wO%2FmJqWIeQ0k6civcHYicxfANEyHxp8sCoKk%2BcdflJaJrKg64ay75n%2FuVj%2B5KDQ34lUk2q35hKxxtG4fGuuID%2FCsGv%2B8j%2BwIL5S454grUoqgoz52EvhMepKNPb5eFTr1K%2Bz0W2bwlLW6Sjs9dqjoUXSl5cPUL9EvkEFyIIIHdIKU2qwDCflbPDBjqkARljPUZVHMfOCeVJyLr9jBgyZw1NZ91GwthhD7jxwfKL5F0Y4UY%2F8vTwDu1Q2oknCm78IsuSzP1erjZD85O5qq%2FSm%2B8CW1x3AjAaLOqeG7irJNfu0jI2mOKdRzEIqsp6h9P0SHr%2FKckEmRXDMf%2FYwHk6xOFvM%2BjNza4oP8k43xfS7XSot2mRWL%2ByJJLG4g4Ofpq91EbuqVbmfJH2jVAdzUxHQtLu&X-Amz-Signature=296a30c300b8e9ca9a828973db9cd11bbe3b1476fd49766f9c21316aab2a950c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
