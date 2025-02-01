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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FBSUY3W%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFf9y1nycUakK%2B85hIF3U5wMuljSSh2Na64Rn3sBhPZQIgTozrRvQZvBxU19JF1BMb14nozdDTtXLWYPIDLR%2BWZXkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSiZN0cKogS%2BiWWqircA0HztHkNEt7Pas32o8%2F1TjKRb42dMr636TrlGkKWGS19SOmey5WkZPFT6cIaeXxuMg2F%2FXI7SeAa%2FfTjmQmUbFI0q3RXSkMRX%2B54bFtQAO2WYcKSQCaWy%2F0OWLxoarSE%2B5ow0pfUa%2B4cdLL2iNfbd5C%2B%2FE2XRqDTjI5VWQp70ebPyHUe84M691yKH8YBe11ABBz0VBdHtSU6pnul4%2BR753sz1JXChPCVj8Kw5yRR3oj%2BUUf1JtSyoWKay%2FPOh3scy0ZDtBVoMleodspITaRr7LWc67MGFWBUDSDdQW4%2F1lyuymHRRTKfcciWjOhkfRAAL17KkOdfFbQDzChXkjBoiNUhNNeLT2VrPL%2FvstLpmjSucw1bMpww6SWeMInf7e0WGu4oo%2FQx9rtz0T9lvrxEYkrNgH2PedNfNztZ2WwAbJMmcyVaqpIHcMhE68VPqnRrbLftRGbsdQrIf0eLM%2FAdl8wYEN4rAs1Pcnomjkpo9r8rz4cD5L%2FPTYG58OuJ%2B5MkQbRXR%2BNAwk2y%2FEtCsPeTVxGD1Hs1Cy5SiR8d6LJRznPqZRZdU21FWsI%2FYnFVjoZ%2F%2BjtL8DzONLThmsGI30PvHsILMPp2T03fwvANN8Ln9IeZ0BcyXVI205jeE77dMKzu9bwGOqUBYlPDWS8h2CMeUdpUH0Bqv8MWk1Wws9NvC3f1t37mJgW9YoQ33YhfpOFXM4NUEh%2BILwgpskSbt6FB4pzT%2Bu9BxTKOtGx3zdpMsLaM5MYFyng7aAzaWQGrf7WZfIg%2BtaygSrvQunlzqYxDgGT4OGPvZqVjPuJXmVwuLsAGok1T1lSuB%2BNeI0L5uObwq008b7gtoHPQOFMoKZkJr7SCsdu2mTjlKEQD&X-Amz-Signature=cb2261f3b66c114ad9cba8fc1746e19f875fc6f0cc601f18e86df9c6812732a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FBSUY3W%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFf9y1nycUakK%2B85hIF3U5wMuljSSh2Na64Rn3sBhPZQIgTozrRvQZvBxU19JF1BMb14nozdDTtXLWYPIDLR%2BWZXkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSiZN0cKogS%2BiWWqircA0HztHkNEt7Pas32o8%2F1TjKRb42dMr636TrlGkKWGS19SOmey5WkZPFT6cIaeXxuMg2F%2FXI7SeAa%2FfTjmQmUbFI0q3RXSkMRX%2B54bFtQAO2WYcKSQCaWy%2F0OWLxoarSE%2B5ow0pfUa%2B4cdLL2iNfbd5C%2B%2FE2XRqDTjI5VWQp70ebPyHUe84M691yKH8YBe11ABBz0VBdHtSU6pnul4%2BR753sz1JXChPCVj8Kw5yRR3oj%2BUUf1JtSyoWKay%2FPOh3scy0ZDtBVoMleodspITaRr7LWc67MGFWBUDSDdQW4%2F1lyuymHRRTKfcciWjOhkfRAAL17KkOdfFbQDzChXkjBoiNUhNNeLT2VrPL%2FvstLpmjSucw1bMpww6SWeMInf7e0WGu4oo%2FQx9rtz0T9lvrxEYkrNgH2PedNfNztZ2WwAbJMmcyVaqpIHcMhE68VPqnRrbLftRGbsdQrIf0eLM%2FAdl8wYEN4rAs1Pcnomjkpo9r8rz4cD5L%2FPTYG58OuJ%2B5MkQbRXR%2BNAwk2y%2FEtCsPeTVxGD1Hs1Cy5SiR8d6LJRznPqZRZdU21FWsI%2FYnFVjoZ%2F%2BjtL8DzONLThmsGI30PvHsILMPp2T03fwvANN8Ln9IeZ0BcyXVI205jeE77dMKzu9bwGOqUBYlPDWS8h2CMeUdpUH0Bqv8MWk1Wws9NvC3f1t37mJgW9YoQ33YhfpOFXM4NUEh%2BILwgpskSbt6FB4pzT%2Bu9BxTKOtGx3zdpMsLaM5MYFyng7aAzaWQGrf7WZfIg%2BtaygSrvQunlzqYxDgGT4OGPvZqVjPuJXmVwuLsAGok1T1lSuB%2BNeI0L5uObwq008b7gtoHPQOFMoKZkJr7SCsdu2mTjlKEQD&X-Amz-Signature=45c742380029080b9ebc8e38db12991c3a09f7487aed1ef1701f2ccaa4be7032&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FBSUY3W%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFf9y1nycUakK%2B85hIF3U5wMuljSSh2Na64Rn3sBhPZQIgTozrRvQZvBxU19JF1BMb14nozdDTtXLWYPIDLR%2BWZXkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSiZN0cKogS%2BiWWqircA0HztHkNEt7Pas32o8%2F1TjKRb42dMr636TrlGkKWGS19SOmey5WkZPFT6cIaeXxuMg2F%2FXI7SeAa%2FfTjmQmUbFI0q3RXSkMRX%2B54bFtQAO2WYcKSQCaWy%2F0OWLxoarSE%2B5ow0pfUa%2B4cdLL2iNfbd5C%2B%2FE2XRqDTjI5VWQp70ebPyHUe84M691yKH8YBe11ABBz0VBdHtSU6pnul4%2BR753sz1JXChPCVj8Kw5yRR3oj%2BUUf1JtSyoWKay%2FPOh3scy0ZDtBVoMleodspITaRr7LWc67MGFWBUDSDdQW4%2F1lyuymHRRTKfcciWjOhkfRAAL17KkOdfFbQDzChXkjBoiNUhNNeLT2VrPL%2FvstLpmjSucw1bMpww6SWeMInf7e0WGu4oo%2FQx9rtz0T9lvrxEYkrNgH2PedNfNztZ2WwAbJMmcyVaqpIHcMhE68VPqnRrbLftRGbsdQrIf0eLM%2FAdl8wYEN4rAs1Pcnomjkpo9r8rz4cD5L%2FPTYG58OuJ%2B5MkQbRXR%2BNAwk2y%2FEtCsPeTVxGD1Hs1Cy5SiR8d6LJRznPqZRZdU21FWsI%2FYnFVjoZ%2F%2BjtL8DzONLThmsGI30PvHsILMPp2T03fwvANN8Ln9IeZ0BcyXVI205jeE77dMKzu9bwGOqUBYlPDWS8h2CMeUdpUH0Bqv8MWk1Wws9NvC3f1t37mJgW9YoQ33YhfpOFXM4NUEh%2BILwgpskSbt6FB4pzT%2Bu9BxTKOtGx3zdpMsLaM5MYFyng7aAzaWQGrf7WZfIg%2BtaygSrvQunlzqYxDgGT4OGPvZqVjPuJXmVwuLsAGok1T1lSuB%2BNeI0L5uObwq008b7gtoHPQOFMoKZkJr7SCsdu2mTjlKEQD&X-Amz-Signature=f81eb2a2d94233dd3ec59102e814e99b5c6f4f920b97a56d1aef127f5bc93991&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
