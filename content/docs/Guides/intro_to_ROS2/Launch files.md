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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2YP5UUZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XX3mtgUIVW9zzVDMrvo5a%2BSCGPTzsff5ZQrT1vaDmAiBqeEJf2ynuLakz6H5eWliGNc3%2FO1QLpjNcGGjt%2F7YV5SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVhxt1TTdH4GvqTXKtwDJKJDLQs2sXTFG7EIhx98oIj9zfdt3EK9RMetQZ%2FRg4MLn5AzcJtnCirrcKgs0zVRflgzqY524F4JKnzcX060dN4vhetdG7PyLTMgyoJEPj5CBdHJNrz87%2F2yn2JH%2B1XIUs2ID0dTxPaMCljXUW0GrWGPzlMaflD3kug0jcq%2FzIPDEk9RfNgAHsApZUd4y4E7zsRFlcX8qS2BGH2Qfq4RFQREFYTJPWdDHZValzIAV60%2BLeviHocalNsVT%2BIIBf01M4eU7rpregr8X%2FRv%2B7EBJEIqeGZqUZrvYCq%2F5qBZAcNKEQMrf%2Bc52myNOZOaI5%2FML9tADli5MPR5KIwAI1zxEZJA5vSadJE4ep9sfVG%2FC0ooH2JCcHX5OYzJ7mBPDfWXMtnPt%2BA028pJ7TPM48uvL6Bf1HOAxd6fCxH1eFZHoLuCGk%2FmldEnQtJPxN4Sy8fBFoEuwnXGP%2FzEwQ9DpppiPSwzqQSozAM52shh2vE%2F3NmjShj4h%2Fe4CZH%2FAGN86qVWHODMz97eEa7c%2FotG5cUeyZ%2FgUZSKjy8OxQTyJpE5N0WXmHTauFyEBfNOUxVUQXv8GimKAIB8jIM9y7jrQdyqNvmUwPW8jWnKZd%2FHc1AXc8Xz3OSYb0nEkDmQ%2BH0wrbDovAY6pgHIt0pjWeJOG9dcOsO8q6VIw43snQHaHH8dSkXkuSW3ZwqdY%2B3tft%2Bsi3PFggkPymcLouGsWptLc%2Fr7UzBCdKT1xyZF37%2BwyVIkzqdfptoao8wGliLBhhoeWKoZoWBGQQyR6GOxlQ0AIwQerZrDOcU5c7B%2BOusRlaTwsTv6lkIO%2FLqjEOn33pLbLHM0O1Fc49UWsWX%2FWuuRDlvqlZJZPTk%2BbqMZOTdM&X-Amz-Signature=469f5524e8f4267662dd7436c3a25f30a133d83fab823a67135204bca9b83635&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2YP5UUZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XX3mtgUIVW9zzVDMrvo5a%2BSCGPTzsff5ZQrT1vaDmAiBqeEJf2ynuLakz6H5eWliGNc3%2FO1QLpjNcGGjt%2F7YV5SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVhxt1TTdH4GvqTXKtwDJKJDLQs2sXTFG7EIhx98oIj9zfdt3EK9RMetQZ%2FRg4MLn5AzcJtnCirrcKgs0zVRflgzqY524F4JKnzcX060dN4vhetdG7PyLTMgyoJEPj5CBdHJNrz87%2F2yn2JH%2B1XIUs2ID0dTxPaMCljXUW0GrWGPzlMaflD3kug0jcq%2FzIPDEk9RfNgAHsApZUd4y4E7zsRFlcX8qS2BGH2Qfq4RFQREFYTJPWdDHZValzIAV60%2BLeviHocalNsVT%2BIIBf01M4eU7rpregr8X%2FRv%2B7EBJEIqeGZqUZrvYCq%2F5qBZAcNKEQMrf%2Bc52myNOZOaI5%2FML9tADli5MPR5KIwAI1zxEZJA5vSadJE4ep9sfVG%2FC0ooH2JCcHX5OYzJ7mBPDfWXMtnPt%2BA028pJ7TPM48uvL6Bf1HOAxd6fCxH1eFZHoLuCGk%2FmldEnQtJPxN4Sy8fBFoEuwnXGP%2FzEwQ9DpppiPSwzqQSozAM52shh2vE%2F3NmjShj4h%2Fe4CZH%2FAGN86qVWHODMz97eEa7c%2FotG5cUeyZ%2FgUZSKjy8OxQTyJpE5N0WXmHTauFyEBfNOUxVUQXv8GimKAIB8jIM9y7jrQdyqNvmUwPW8jWnKZd%2FHc1AXc8Xz3OSYb0nEkDmQ%2BH0wrbDovAY6pgHIt0pjWeJOG9dcOsO8q6VIw43snQHaHH8dSkXkuSW3ZwqdY%2B3tft%2Bsi3PFggkPymcLouGsWptLc%2Fr7UzBCdKT1xyZF37%2BwyVIkzqdfptoao8wGliLBhhoeWKoZoWBGQQyR6GOxlQ0AIwQerZrDOcU5c7B%2BOusRlaTwsTv6lkIO%2FLqjEOn33pLbLHM0O1Fc49UWsWX%2FWuuRDlvqlZJZPTk%2BbqMZOTdM&X-Amz-Signature=bd3d3cc7cd6a65a2f02f1896c8305a52b973ce262964414196aecbe566908d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2YP5UUZ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5XX3mtgUIVW9zzVDMrvo5a%2BSCGPTzsff5ZQrT1vaDmAiBqeEJf2ynuLakz6H5eWliGNc3%2FO1QLpjNcGGjt%2F7YV5SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVhxt1TTdH4GvqTXKtwDJKJDLQs2sXTFG7EIhx98oIj9zfdt3EK9RMetQZ%2FRg4MLn5AzcJtnCirrcKgs0zVRflgzqY524F4JKnzcX060dN4vhetdG7PyLTMgyoJEPj5CBdHJNrz87%2F2yn2JH%2B1XIUs2ID0dTxPaMCljXUW0GrWGPzlMaflD3kug0jcq%2FzIPDEk9RfNgAHsApZUd4y4E7zsRFlcX8qS2BGH2Qfq4RFQREFYTJPWdDHZValzIAV60%2BLeviHocalNsVT%2BIIBf01M4eU7rpregr8X%2FRv%2B7EBJEIqeGZqUZrvYCq%2F5qBZAcNKEQMrf%2Bc52myNOZOaI5%2FML9tADli5MPR5KIwAI1zxEZJA5vSadJE4ep9sfVG%2FC0ooH2JCcHX5OYzJ7mBPDfWXMtnPt%2BA028pJ7TPM48uvL6Bf1HOAxd6fCxH1eFZHoLuCGk%2FmldEnQtJPxN4Sy8fBFoEuwnXGP%2FzEwQ9DpppiPSwzqQSozAM52shh2vE%2F3NmjShj4h%2Fe4CZH%2FAGN86qVWHODMz97eEa7c%2FotG5cUeyZ%2FgUZSKjy8OxQTyJpE5N0WXmHTauFyEBfNOUxVUQXv8GimKAIB8jIM9y7jrQdyqNvmUwPW8jWnKZd%2FHc1AXc8Xz3OSYb0nEkDmQ%2BH0wrbDovAY6pgHIt0pjWeJOG9dcOsO8q6VIw43snQHaHH8dSkXkuSW3ZwqdY%2B3tft%2Bsi3PFggkPymcLouGsWptLc%2Fr7UzBCdKT1xyZF37%2BwyVIkzqdfptoao8wGliLBhhoeWKoZoWBGQQyR6GOxlQ0AIwQerZrDOcU5c7B%2BOusRlaTwsTv6lkIO%2FLqjEOn33pLbLHM0O1Fc49UWsWX%2FWuuRDlvqlZJZPTk%2BbqMZOTdM&X-Amz-Signature=2d97a91f52a6fe1e76cb3a356c80b8d2477849e5c986b7dbef1d89c3eeef1941&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
