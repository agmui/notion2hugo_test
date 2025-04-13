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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4D3J3O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDL9JhhYuaHRu3dsAd%2Bc0sZwXf5kkAWTAkS2XlefAOSrAIhANAN%2BZ%2FZHNhYPoZBEo3hN9HO2%2FWUifpiyXkL76QQ4zacKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyElxkHrca2FgTckvwq3AP3YNKoW5RIcCg92x%2FDcW8SXoLSNt%2BJZqHu34cikIJY%2FrQOjEkMMhdvvvGHLd4GmxlODgYAmfLhMPqlrFhZiPLGHRCqKAfh7Y8dgbR%2BkLl2MBM1Mg%2BNv3hn3wsdAvbXE75hlD4NfXIVpIEl7yooCmXcJkzebdCr1LQIA70LNcDTONmx0JumneD6xOypeZExYewPnbVXh%2F076Ngik6vASGUNO%2FILDNQXqo1twEgsQLz58SgRlvc5qMxfHN0eSVSeDGDVirGafADZIVd1IXLB2HsdzxqoO7u3JSwdVqdp%2F8Hc2%2FDCPyfzZKdtQDUwN0gO%2B1rVuxHuCkfxG7QUCnpLEMBYzytFNQjj3UoVxX2bGycUks00OoVWOweH1WHh7DAX6rJXD3ctzn8oustuGw3ZgOSctJL7UTxGcdx3tCjcT5v7qNPSBH36F5yzU%2FlAv%2B9awG7Ni7dEuqEq9PIa%2FvRBhqeHF33MV5GQ3M2Q%2B9LqM8RYn76pePnEo6Tv5A9%2BQJrFwsJHZBr68fYUQ7XYyjZhoRMsSjpj%2FmQxujwNJeLBA%2F2qLv7fbeNYKXasI3NyR5pG9NHn8PUlISgTz5yhjbWvhna0LbZIt%2BDENIYvjLG17ZBMPW5hnIAfJUb2mOxZHDCave6%2FBjqkAUupzf04GQtsGV%2BwCP6sSnUbbfqKjmOk5p7kME48myCK75czC9eYis3UtIfAI%2Bq1fZRno2SRZCnjnE5mgxiXxqjAjJH1ZylWgxk2XCKdInSFWZZ5oGpJBapR4lt2fXmqbzg8jXrowg00EpOlsjKDXGs1mZMiScZpX0kXJabi4tGJmPj6OKtBRM63fW14559YAWEYYInWkSh2sCiPIEGkYPofsrVK&X-Amz-Signature=d88a75fdfd33c8ca4e143cabc6235ca85e22a0e42129320e15b5e32c707afe33&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4D3J3O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDL9JhhYuaHRu3dsAd%2Bc0sZwXf5kkAWTAkS2XlefAOSrAIhANAN%2BZ%2FZHNhYPoZBEo3hN9HO2%2FWUifpiyXkL76QQ4zacKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyElxkHrca2FgTckvwq3AP3YNKoW5RIcCg92x%2FDcW8SXoLSNt%2BJZqHu34cikIJY%2FrQOjEkMMhdvvvGHLd4GmxlODgYAmfLhMPqlrFhZiPLGHRCqKAfh7Y8dgbR%2BkLl2MBM1Mg%2BNv3hn3wsdAvbXE75hlD4NfXIVpIEl7yooCmXcJkzebdCr1LQIA70LNcDTONmx0JumneD6xOypeZExYewPnbVXh%2F076Ngik6vASGUNO%2FILDNQXqo1twEgsQLz58SgRlvc5qMxfHN0eSVSeDGDVirGafADZIVd1IXLB2HsdzxqoO7u3JSwdVqdp%2F8Hc2%2FDCPyfzZKdtQDUwN0gO%2B1rVuxHuCkfxG7QUCnpLEMBYzytFNQjj3UoVxX2bGycUks00OoVWOweH1WHh7DAX6rJXD3ctzn8oustuGw3ZgOSctJL7UTxGcdx3tCjcT5v7qNPSBH36F5yzU%2FlAv%2B9awG7Ni7dEuqEq9PIa%2FvRBhqeHF33MV5GQ3M2Q%2B9LqM8RYn76pePnEo6Tv5A9%2BQJrFwsJHZBr68fYUQ7XYyjZhoRMsSjpj%2FmQxujwNJeLBA%2F2qLv7fbeNYKXasI3NyR5pG9NHn8PUlISgTz5yhjbWvhna0LbZIt%2BDENIYvjLG17ZBMPW5hnIAfJUb2mOxZHDCave6%2FBjqkAUupzf04GQtsGV%2BwCP6sSnUbbfqKjmOk5p7kME48myCK75czC9eYis3UtIfAI%2Bq1fZRno2SRZCnjnE5mgxiXxqjAjJH1ZylWgxk2XCKdInSFWZZ5oGpJBapR4lt2fXmqbzg8jXrowg00EpOlsjKDXGs1mZMiScZpX0kXJabi4tGJmPj6OKtBRM63fW14559YAWEYYInWkSh2sCiPIEGkYPofsrVK&X-Amz-Signature=276944dd7a207197adbd54fcbdd2bbdd0ab6d94d5a95ce5d4defdc1b81979aad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4D3J3O%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDL9JhhYuaHRu3dsAd%2Bc0sZwXf5kkAWTAkS2XlefAOSrAIhANAN%2BZ%2FZHNhYPoZBEo3hN9HO2%2FWUifpiyXkL76QQ4zacKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyElxkHrca2FgTckvwq3AP3YNKoW5RIcCg92x%2FDcW8SXoLSNt%2BJZqHu34cikIJY%2FrQOjEkMMhdvvvGHLd4GmxlODgYAmfLhMPqlrFhZiPLGHRCqKAfh7Y8dgbR%2BkLl2MBM1Mg%2BNv3hn3wsdAvbXE75hlD4NfXIVpIEl7yooCmXcJkzebdCr1LQIA70LNcDTONmx0JumneD6xOypeZExYewPnbVXh%2F076Ngik6vASGUNO%2FILDNQXqo1twEgsQLz58SgRlvc5qMxfHN0eSVSeDGDVirGafADZIVd1IXLB2HsdzxqoO7u3JSwdVqdp%2F8Hc2%2FDCPyfzZKdtQDUwN0gO%2B1rVuxHuCkfxG7QUCnpLEMBYzytFNQjj3UoVxX2bGycUks00OoVWOweH1WHh7DAX6rJXD3ctzn8oustuGw3ZgOSctJL7UTxGcdx3tCjcT5v7qNPSBH36F5yzU%2FlAv%2B9awG7Ni7dEuqEq9PIa%2FvRBhqeHF33MV5GQ3M2Q%2B9LqM8RYn76pePnEo6Tv5A9%2BQJrFwsJHZBr68fYUQ7XYyjZhoRMsSjpj%2FmQxujwNJeLBA%2F2qLv7fbeNYKXasI3NyR5pG9NHn8PUlISgTz5yhjbWvhna0LbZIt%2BDENIYvjLG17ZBMPW5hnIAfJUb2mOxZHDCave6%2FBjqkAUupzf04GQtsGV%2BwCP6sSnUbbfqKjmOk5p7kME48myCK75czC9eYis3UtIfAI%2Bq1fZRno2SRZCnjnE5mgxiXxqjAjJH1ZylWgxk2XCKdInSFWZZ5oGpJBapR4lt2fXmqbzg8jXrowg00EpOlsjKDXGs1mZMiScZpX0kXJabi4tGJmPj6OKtBRM63fW14559YAWEYYInWkSh2sCiPIEGkYPofsrVK&X-Amz-Signature=5874324fd9713140c31cc9ab3f9d855d5546ec06c0bac1ecf03702b4abba2f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
