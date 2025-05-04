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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBY7P67%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHJW%2Bc3gSg9yhsjn4Egqt%2FVgp1MnLyu6iV%2B7VT4MPDbmAiAFYQlWNQ9HhVUh18xgvjE9yS%2B4lr0sI5hQXj7n2JTQySr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMO2mhTE%2FBYUi2CoihKtwDDJb0uj4yFuuPr3TJ3ETh932jMUIFtyOJwhBbGtQ7%2F4GGT%2BiD20jP8TYrwAqspBnk5kvejwT93L0jKj%2FZLnnCjuWxdy%2BPx%2FLR4sdbhfVBQb0VMBr0DgCH2CmhvR3Q2TJ8uTxzCfLtqbERKBJoo%2BzjntwaPICM3fSg%2FNETnHmZ3%2FtkJ9T6wXOtfl8HiNA3qGmj%2FmJ9r5f1M9eHsEyzpTHSerp0BzZPMpeH%2BdLVcy9n8FaBdWwpFwlH1dwZ3Qrdv8hxnmQS%2BSGbanUzh7JvjXyJp8UlUKGD3L00kcMcuYxHC3J9c7BnWBNsCzkMW1S14x55zqierT8WoWrXIVZJLwMvNkCzB13UmYkkaNHHTo1%2BAGNU64GVgIl%2FjfmPgTI8KfEBG7cU9pun%2BsPYB%2BYkBRyRAtNb91%2BtSAYXXC7cTCW8YDdcVZxc4nT%2FRizL40ZMap0skvVEd8djvSjQgyGe4KfHiMCT4OZNBdmt7LnNjoF9Yratqd26XiER4yw2Qca%2BTYjROF9Tzy5dfnSxappVRgD55C5jibPC5NAlk5Tmn9ssUmYtOIQwr8Pn0APoD0yxVXdN%2F5FhS7RlTXFmRstAFzd6HBTrAynCR1KidXvCBg%2BucwxahgPZofiVXvADDO0w9IjewAY6pgEL60WK2Dl7L0TZ851vC8%2F6qOOJJfucQ%2BwhcMPVkVYLErDkMY9Xv1uKHbpB6pfaRn41GDqZZPeHeNtga%2B%2Fu8MFM38WVKsbySsU6mCQ6HODXhpwYES7lUvcd%2FnHB%2FfB4c%2BOTOy%2BZdlmb1RJ3iSR0PFE1jeMsNFY%2FZAvjCEhVRBKYkweD4rt6ZJQ1SFjKDja7WvMaW6AfKd6eherMnk7wUpuDWY91e5ua&X-Amz-Signature=d520c5ce4f60b0663c4e7caaf7fae360b4a48ad00c9e5f7b04a435d8e48f8f67&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBY7P67%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHJW%2Bc3gSg9yhsjn4Egqt%2FVgp1MnLyu6iV%2B7VT4MPDbmAiAFYQlWNQ9HhVUh18xgvjE9yS%2B4lr0sI5hQXj7n2JTQySr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMO2mhTE%2FBYUi2CoihKtwDDJb0uj4yFuuPr3TJ3ETh932jMUIFtyOJwhBbGtQ7%2F4GGT%2BiD20jP8TYrwAqspBnk5kvejwT93L0jKj%2FZLnnCjuWxdy%2BPx%2FLR4sdbhfVBQb0VMBr0DgCH2CmhvR3Q2TJ8uTxzCfLtqbERKBJoo%2BzjntwaPICM3fSg%2FNETnHmZ3%2FtkJ9T6wXOtfl8HiNA3qGmj%2FmJ9r5f1M9eHsEyzpTHSerp0BzZPMpeH%2BdLVcy9n8FaBdWwpFwlH1dwZ3Qrdv8hxnmQS%2BSGbanUzh7JvjXyJp8UlUKGD3L00kcMcuYxHC3J9c7BnWBNsCzkMW1S14x55zqierT8WoWrXIVZJLwMvNkCzB13UmYkkaNHHTo1%2BAGNU64GVgIl%2FjfmPgTI8KfEBG7cU9pun%2BsPYB%2BYkBRyRAtNb91%2BtSAYXXC7cTCW8YDdcVZxc4nT%2FRizL40ZMap0skvVEd8djvSjQgyGe4KfHiMCT4OZNBdmt7LnNjoF9Yratqd26XiER4yw2Qca%2BTYjROF9Tzy5dfnSxappVRgD55C5jibPC5NAlk5Tmn9ssUmYtOIQwr8Pn0APoD0yxVXdN%2F5FhS7RlTXFmRstAFzd6HBTrAynCR1KidXvCBg%2BucwxahgPZofiVXvADDO0w9IjewAY6pgEL60WK2Dl7L0TZ851vC8%2F6qOOJJfucQ%2BwhcMPVkVYLErDkMY9Xv1uKHbpB6pfaRn41GDqZZPeHeNtga%2B%2Fu8MFM38WVKsbySsU6mCQ6HODXhpwYES7lUvcd%2FnHB%2FfB4c%2BOTOy%2BZdlmb1RJ3iSR0PFE1jeMsNFY%2FZAvjCEhVRBKYkweD4rt6ZJQ1SFjKDja7WvMaW6AfKd6eherMnk7wUpuDWY91e5ua&X-Amz-Signature=226f897c62ee7a5c10361666c5547f337834b29216f1e75028862a06383d60b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBY7P67%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIHJW%2Bc3gSg9yhsjn4Egqt%2FVgp1MnLyu6iV%2B7VT4MPDbmAiAFYQlWNQ9HhVUh18xgvjE9yS%2B4lr0sI5hQXj7n2JTQySr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMO2mhTE%2FBYUi2CoihKtwDDJb0uj4yFuuPr3TJ3ETh932jMUIFtyOJwhBbGtQ7%2F4GGT%2BiD20jP8TYrwAqspBnk5kvejwT93L0jKj%2FZLnnCjuWxdy%2BPx%2FLR4sdbhfVBQb0VMBr0DgCH2CmhvR3Q2TJ8uTxzCfLtqbERKBJoo%2BzjntwaPICM3fSg%2FNETnHmZ3%2FtkJ9T6wXOtfl8HiNA3qGmj%2FmJ9r5f1M9eHsEyzpTHSerp0BzZPMpeH%2BdLVcy9n8FaBdWwpFwlH1dwZ3Qrdv8hxnmQS%2BSGbanUzh7JvjXyJp8UlUKGD3L00kcMcuYxHC3J9c7BnWBNsCzkMW1S14x55zqierT8WoWrXIVZJLwMvNkCzB13UmYkkaNHHTo1%2BAGNU64GVgIl%2FjfmPgTI8KfEBG7cU9pun%2BsPYB%2BYkBRyRAtNb91%2BtSAYXXC7cTCW8YDdcVZxc4nT%2FRizL40ZMap0skvVEd8djvSjQgyGe4KfHiMCT4OZNBdmt7LnNjoF9Yratqd26XiER4yw2Qca%2BTYjROF9Tzy5dfnSxappVRgD55C5jibPC5NAlk5Tmn9ssUmYtOIQwr8Pn0APoD0yxVXdN%2F5FhS7RlTXFmRstAFzd6HBTrAynCR1KidXvCBg%2BucwxahgPZofiVXvADDO0w9IjewAY6pgEL60WK2Dl7L0TZ851vC8%2F6qOOJJfucQ%2BwhcMPVkVYLErDkMY9Xv1uKHbpB6pfaRn41GDqZZPeHeNtga%2B%2Fu8MFM38WVKsbySsU6mCQ6HODXhpwYES7lUvcd%2FnHB%2FfB4c%2BOTOy%2BZdlmb1RJ3iSR0PFE1jeMsNFY%2FZAvjCEhVRBKYkweD4rt6ZJQ1SFjKDja7WvMaW6AfKd6eherMnk7wUpuDWY91e5ua&X-Amz-Signature=cb6b59db754b4cd3e92c6aac1bba32df825bacf087d596a6e2e51c0100ba97c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
