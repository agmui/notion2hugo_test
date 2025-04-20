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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YZVPYJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FpKHVPPxBOQ9V50PnrMDtAn%2B3rmR3ihE4T5dYFEMM3gIhAOQuCNFrh97%2FUShfR8cFtlQy2sTsMB53xkQVXlzomIBBKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhYZ9QxrYO3vZj22Mq3AM0rKb1fpZCOscgBNBHwCi7Htj2ACgtsNqw9gGaRX6cYy43cCUvS3FS2lDEv5%2B3dC0XK35tSguxNf326P%2Blbx%2F2nGH03WwJYBQ1v4EUlbdxmRn1gLSCJWKrdWJI5Br2G8rE%2B7DoVaeQGBGyx%2FCUh7hVKoDzr8vzjI1UEbS5o5efWcMMEK1deeXAXETPBtBTDWp9Ud1YZaEwNQu67IPgAmslxtZvus%2FPis19Ze7nhkYdPFFV0fips9lNhP1X9IonobFqnFEkiIOWFFm1yNzBJ28UwFfl1jo8EuRbKGIEjC9Q5CWhNCEc2rZpvyRzLheiWBjRmqteT7FpQZQeLNT5C3khD8uI4rbwDLi5x1Wv2Lq1ZK9Pogl4xto8yX5WR3x3qGCteolZC31F90n8QZLwI8TkYBCpkEvHPPTqOjStotI%2FiYF2wkKdzMxye8S5%2B5UgO5K4%2B7U65wQLjDovq2LN1JSchMB4SyO%2FoT0z%2BYCWHSrFSxg1nkIobch2MPXSpnmHFR3AxaI8fg9OfV2vqxtc%2Bxjh4Eb5f3%2BIkCR7jWAafnZRcc%2FiXLtDxmPRTmQlC0navdCwm78%2FwQlT%2BwtdwkldF8nnxyVLztJvJq2RVP7%2Blyai8Dakb8ho6Ac6aC27BTD7gZHABjqkASfoUyyaUL%2B%2BrRDsC3f%2BBD7c9VXejRDxOfRsIe1f3QNjPeUcDH156SGhqPcEx3jIdCmgvqBvuhlWKGDD377TPbWFzpcYTlxa55U8E2%2FGTPPC9J9OrqvjShuahTNgMkAEs9ysvG6BFKOxM8XRIvaj9E9mRKgH6AEP9hXZRHjAuIerB%2FFbJfNqVTa4IfbohRDlVSXTwjmf6%2FUQeZ6quU3IC2dSw1sR&X-Amz-Signature=a985f3be4599aa90cc10e63282ad2c6233f2299f01d9874f29c0bdf99ccce98b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YZVPYJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FpKHVPPxBOQ9V50PnrMDtAn%2B3rmR3ihE4T5dYFEMM3gIhAOQuCNFrh97%2FUShfR8cFtlQy2sTsMB53xkQVXlzomIBBKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhYZ9QxrYO3vZj22Mq3AM0rKb1fpZCOscgBNBHwCi7Htj2ACgtsNqw9gGaRX6cYy43cCUvS3FS2lDEv5%2B3dC0XK35tSguxNf326P%2Blbx%2F2nGH03WwJYBQ1v4EUlbdxmRn1gLSCJWKrdWJI5Br2G8rE%2B7DoVaeQGBGyx%2FCUh7hVKoDzr8vzjI1UEbS5o5efWcMMEK1deeXAXETPBtBTDWp9Ud1YZaEwNQu67IPgAmslxtZvus%2FPis19Ze7nhkYdPFFV0fips9lNhP1X9IonobFqnFEkiIOWFFm1yNzBJ28UwFfl1jo8EuRbKGIEjC9Q5CWhNCEc2rZpvyRzLheiWBjRmqteT7FpQZQeLNT5C3khD8uI4rbwDLi5x1Wv2Lq1ZK9Pogl4xto8yX5WR3x3qGCteolZC31F90n8QZLwI8TkYBCpkEvHPPTqOjStotI%2FiYF2wkKdzMxye8S5%2B5UgO5K4%2B7U65wQLjDovq2LN1JSchMB4SyO%2FoT0z%2BYCWHSrFSxg1nkIobch2MPXSpnmHFR3AxaI8fg9OfV2vqxtc%2Bxjh4Eb5f3%2BIkCR7jWAafnZRcc%2FiXLtDxmPRTmQlC0navdCwm78%2FwQlT%2BwtdwkldF8nnxyVLztJvJq2RVP7%2Blyai8Dakb8ho6Ac6aC27BTD7gZHABjqkASfoUyyaUL%2B%2BrRDsC3f%2BBD7c9VXejRDxOfRsIe1f3QNjPeUcDH156SGhqPcEx3jIdCmgvqBvuhlWKGDD377TPbWFzpcYTlxa55U8E2%2FGTPPC9J9OrqvjShuahTNgMkAEs9ysvG6BFKOxM8XRIvaj9E9mRKgH6AEP9hXZRHjAuIerB%2FFbJfNqVTa4IfbohRDlVSXTwjmf6%2FUQeZ6quU3IC2dSw1sR&X-Amz-Signature=8194ffb30ce8c0c075291cf7fe6d2370662ad1038788639e2e4db4faac589748&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YZVPYJ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC%2FpKHVPPxBOQ9V50PnrMDtAn%2B3rmR3ihE4T5dYFEMM3gIhAOQuCNFrh97%2FUShfR8cFtlQy2sTsMB53xkQVXlzomIBBKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhYZ9QxrYO3vZj22Mq3AM0rKb1fpZCOscgBNBHwCi7Htj2ACgtsNqw9gGaRX6cYy43cCUvS3FS2lDEv5%2B3dC0XK35tSguxNf326P%2Blbx%2F2nGH03WwJYBQ1v4EUlbdxmRn1gLSCJWKrdWJI5Br2G8rE%2B7DoVaeQGBGyx%2FCUh7hVKoDzr8vzjI1UEbS5o5efWcMMEK1deeXAXETPBtBTDWp9Ud1YZaEwNQu67IPgAmslxtZvus%2FPis19Ze7nhkYdPFFV0fips9lNhP1X9IonobFqnFEkiIOWFFm1yNzBJ28UwFfl1jo8EuRbKGIEjC9Q5CWhNCEc2rZpvyRzLheiWBjRmqteT7FpQZQeLNT5C3khD8uI4rbwDLi5x1Wv2Lq1ZK9Pogl4xto8yX5WR3x3qGCteolZC31F90n8QZLwI8TkYBCpkEvHPPTqOjStotI%2FiYF2wkKdzMxye8S5%2B5UgO5K4%2B7U65wQLjDovq2LN1JSchMB4SyO%2FoT0z%2BYCWHSrFSxg1nkIobch2MPXSpnmHFR3AxaI8fg9OfV2vqxtc%2Bxjh4Eb5f3%2BIkCR7jWAafnZRcc%2FiXLtDxmPRTmQlC0navdCwm78%2FwQlT%2BwtdwkldF8nnxyVLztJvJq2RVP7%2Blyai8Dakb8ho6Ac6aC27BTD7gZHABjqkASfoUyyaUL%2B%2BrRDsC3f%2BBD7c9VXejRDxOfRsIe1f3QNjPeUcDH156SGhqPcEx3jIdCmgvqBvuhlWKGDD377TPbWFzpcYTlxa55U8E2%2FGTPPC9J9OrqvjShuahTNgMkAEs9ysvG6BFKOxM8XRIvaj9E9mRKgH6AEP9hXZRHjAuIerB%2FFbJfNqVTa4IfbohRDlVSXTwjmf6%2FUQeZ6quU3IC2dSw1sR&X-Amz-Signature=98876b0e4f26326b183521c6683b764e5801e7b20f47547b11dfd2e6aa6d51b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
