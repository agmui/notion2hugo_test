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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2ET2BQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2FiuEKsEY528jcQ41%2FpcXFk43CH32oDSMEi5BfEWYOdwIgMbO623wK9iYUf9MwqNLttBjZ070dVewW60jOeiPDT6kqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsFi99zpbSN8s28nSrcAxVby7MGRbVbMaoIRDsXqM0fKcBtA%2BtvMRADFVhUiaUxnx%2F5qH9QOPmwvNxeeVojV1CHn900IQj1fE%2FSVLDxgy0Pox3kYGbleaCkw44ec2JlgkhkVD8ksTK7Ak9EdCUNWbRj0XqJXIFnkXVmP3rnNTx%2BIIAY4AeIBjfZOwx0Hp%2Fy%2Belaq8P7d86VyPHeqYVJe7KFgMdXhC2GWTJwD2%2FRLac0II5p2m5Mdvgg3dM0RCVgPumexZ%2FeFUgVq214T33PAhykLPR6GJ3%2Fo%2BGnOoktqfF9xeSD%2BFTswLeTS53eF3vp6%2Fqw9OHN9psslmXdZ3wmRH%2FVY9wtNsJu3NDYmjtVpOqgpapmU59BRyoOeXTKOjbPGXxXb6LM5bDUHJLrDnobhZ4z46oGJQaO8ooZOjY722zqN0ezKU1ZV5KVgiDeEpWRyppXpYNAmU2dtRYgr4oYcKw2h3b7mGeegMDs1EeDh9zSFv7sx9uihmvULnaKmn%2Br4VHHq%2BL%2BDw2ZXLnDSudBoCHM9Y03wjoQ9NyHPrS9rAFUY0vYkg9YvwK18QsUPbhI%2BggAJBwUwrVsuFsDz4a0w7TWScMknwrlzDN41Rw4gZJMtmRtPhvc2cFItQ6xxST5ZsZgvSqx0XxQJ8o%2FMNKG1sAGOqUBBHRE%2FcxxYq%2BG4MUb8b57lBm8Is5V0VaWPmpaun9ZZ9Jput4misokoxGlEFY0%2FYvXicFTn4blUha0j5M6dJLSdqm9mKubKAnLIpxHn5vL%2BLiY6a228l5GUMuX1%2FHMPjK3wOMslcHn72hOoMQE8PnqQkId2Mh4MytuLTDc4ITRaj5LsPOFDFpB8Ry43QDDJ1beGmMi6dwl%2Fwo%2FfH6Tg%2BdE8Xig7s2v&X-Amz-Signature=857ac4579d6124466295c849e48296159b85b9beaeb98b0579fe7a7afe53d87e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2ET2BQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2FiuEKsEY528jcQ41%2FpcXFk43CH32oDSMEi5BfEWYOdwIgMbO623wK9iYUf9MwqNLttBjZ070dVewW60jOeiPDT6kqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsFi99zpbSN8s28nSrcAxVby7MGRbVbMaoIRDsXqM0fKcBtA%2BtvMRADFVhUiaUxnx%2F5qH9QOPmwvNxeeVojV1CHn900IQj1fE%2FSVLDxgy0Pox3kYGbleaCkw44ec2JlgkhkVD8ksTK7Ak9EdCUNWbRj0XqJXIFnkXVmP3rnNTx%2BIIAY4AeIBjfZOwx0Hp%2Fy%2Belaq8P7d86VyPHeqYVJe7KFgMdXhC2GWTJwD2%2FRLac0II5p2m5Mdvgg3dM0RCVgPumexZ%2FeFUgVq214T33PAhykLPR6GJ3%2Fo%2BGnOoktqfF9xeSD%2BFTswLeTS53eF3vp6%2Fqw9OHN9psslmXdZ3wmRH%2FVY9wtNsJu3NDYmjtVpOqgpapmU59BRyoOeXTKOjbPGXxXb6LM5bDUHJLrDnobhZ4z46oGJQaO8ooZOjY722zqN0ezKU1ZV5KVgiDeEpWRyppXpYNAmU2dtRYgr4oYcKw2h3b7mGeegMDs1EeDh9zSFv7sx9uihmvULnaKmn%2Br4VHHq%2BL%2BDw2ZXLnDSudBoCHM9Y03wjoQ9NyHPrS9rAFUY0vYkg9YvwK18QsUPbhI%2BggAJBwUwrVsuFsDz4a0w7TWScMknwrlzDN41Rw4gZJMtmRtPhvc2cFItQ6xxST5ZsZgvSqx0XxQJ8o%2FMNKG1sAGOqUBBHRE%2FcxxYq%2BG4MUb8b57lBm8Is5V0VaWPmpaun9ZZ9Jput4misokoxGlEFY0%2FYvXicFTn4blUha0j5M6dJLSdqm9mKubKAnLIpxHn5vL%2BLiY6a228l5GUMuX1%2FHMPjK3wOMslcHn72hOoMQE8PnqQkId2Mh4MytuLTDc4ITRaj5LsPOFDFpB8Ry43QDDJ1beGmMi6dwl%2Fwo%2FfH6Tg%2BdE8Xig7s2v&X-Amz-Signature=f37239ab75894dcbfc9687ff28ba491751f3939d54d9e7278de3522a926e6127&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2ET2BQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC%2FiuEKsEY528jcQ41%2FpcXFk43CH32oDSMEi5BfEWYOdwIgMbO623wK9iYUf9MwqNLttBjZ070dVewW60jOeiPDT6kqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsFi99zpbSN8s28nSrcAxVby7MGRbVbMaoIRDsXqM0fKcBtA%2BtvMRADFVhUiaUxnx%2F5qH9QOPmwvNxeeVojV1CHn900IQj1fE%2FSVLDxgy0Pox3kYGbleaCkw44ec2JlgkhkVD8ksTK7Ak9EdCUNWbRj0XqJXIFnkXVmP3rnNTx%2BIIAY4AeIBjfZOwx0Hp%2Fy%2Belaq8P7d86VyPHeqYVJe7KFgMdXhC2GWTJwD2%2FRLac0II5p2m5Mdvgg3dM0RCVgPumexZ%2FeFUgVq214T33PAhykLPR6GJ3%2Fo%2BGnOoktqfF9xeSD%2BFTswLeTS53eF3vp6%2Fqw9OHN9psslmXdZ3wmRH%2FVY9wtNsJu3NDYmjtVpOqgpapmU59BRyoOeXTKOjbPGXxXb6LM5bDUHJLrDnobhZ4z46oGJQaO8ooZOjY722zqN0ezKU1ZV5KVgiDeEpWRyppXpYNAmU2dtRYgr4oYcKw2h3b7mGeegMDs1EeDh9zSFv7sx9uihmvULnaKmn%2Br4VHHq%2BL%2BDw2ZXLnDSudBoCHM9Y03wjoQ9NyHPrS9rAFUY0vYkg9YvwK18QsUPbhI%2BggAJBwUwrVsuFsDz4a0w7TWScMknwrlzDN41Rw4gZJMtmRtPhvc2cFItQ6xxST5ZsZgvSqx0XxQJ8o%2FMNKG1sAGOqUBBHRE%2FcxxYq%2BG4MUb8b57lBm8Is5V0VaWPmpaun9ZZ9Jput4misokoxGlEFY0%2FYvXicFTn4blUha0j5M6dJLSdqm9mKubKAnLIpxHn5vL%2BLiY6a228l5GUMuX1%2FHMPjK3wOMslcHn72hOoMQE8PnqQkId2Mh4MytuLTDc4ITRaj5LsPOFDFpB8Ry43QDDJ1beGmMi6dwl%2Fwo%2FfH6Tg%2BdE8Xig7s2v&X-Amz-Signature=f1fe167ae7bb155840deadc7f06d61b1cb64173008d1a420b4c603fbed0e974e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
