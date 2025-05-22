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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJN5VK7G%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegNP3tYkkyFAg2H9XOweJbZsPfvkA45WxoYjHbTy3WwIhAPXanugivx935xIP7JQjpvQwL4aVR08KjcEKIWrgFoK%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQbMsYzCpsx3j6g6Uq3AMLDgvGmtScuGwignlOW8%2FgraFb1xLJNKetCz0wjyKBNFIl3i6%2Bk0OxnbWM2XsZpr5XDnew0bZFxCEg5eMIrd6JV0apAu6psb1bFy6p%2BEHbQtJykE29y8cs%2BQs8Zpk8UeJQyEL9KwLwykfFk2E53WI%2B7bgTpfoeqm2%2FEjL1FIl4GiqnvdWstR0W2YZgFq%2FtW2vWrDVbvELMk%2FtQKsf43Gy4uMiRE1DKwsOW4xG3qpEwBy775XnnculQCy44C9UlH%2BVdg2nlOFCcLNSP8N2adeQOQDzUWKgdnYlkGcv4c4wHwPdFeVGYdDWdfQ7k61Rswfpp32irrxHu60SOKfl4X9JtsSoQ04nLhf7JgzM97vIQYj3PVFwpg8NWvCGx5l%2BQHZPMuNdFLIDs%2F9q%2FI4c4Q32jb0BGKCAhJEzBpqIk5no317OOA3EdtxsvXkFUTLLlfwYonlPkkodSs2xPIbrbYm4%2FFDZFAoYNLWblRzKqTu2KaOCRkA%2FIiSCTHLfShGJi%2BtI0v5p%2FthqL%2B8dZJcYr3uVHy3%2BWo8zOhUPpAVqjxqCvxHDxgPVLGqRp9iwsTWECkT4c4WhU7r%2FfXmjNL6AgeW9SJOiEOoYIVUZbcu8Ucd4wsZ1NK6l9s25Mh0QhRDCqh77BBjqkAQ5jmwThliX1nbwADaK80cBVQuFAJnapQaaTKcNxY3CI10YjU9r8D5IjHMpa5ildMshdyZhcJbSlCEhHxAU8Q2tc9gGE7VU%2B4pzJYMPmitOl9Tb4QuQ7SxFtNpU%2FNlkzy1izHrfJPqvcCSe8jhDcmipS1t1MO7OMy4psDClQYdSX0zlbaumMs0LQvCbpGKnNvZzOFzgTyhfIvDbryOLy0pyKkZa%2B&X-Amz-Signature=c9276be6ce74f2bae34edce8d114f805b5a7b0f8a5e7c4aea6191144745b2fea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJN5VK7G%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegNP3tYkkyFAg2H9XOweJbZsPfvkA45WxoYjHbTy3WwIhAPXanugivx935xIP7JQjpvQwL4aVR08KjcEKIWrgFoK%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQbMsYzCpsx3j6g6Uq3AMLDgvGmtScuGwignlOW8%2FgraFb1xLJNKetCz0wjyKBNFIl3i6%2Bk0OxnbWM2XsZpr5XDnew0bZFxCEg5eMIrd6JV0apAu6psb1bFy6p%2BEHbQtJykE29y8cs%2BQs8Zpk8UeJQyEL9KwLwykfFk2E53WI%2B7bgTpfoeqm2%2FEjL1FIl4GiqnvdWstR0W2YZgFq%2FtW2vWrDVbvELMk%2FtQKsf43Gy4uMiRE1DKwsOW4xG3qpEwBy775XnnculQCy44C9UlH%2BVdg2nlOFCcLNSP8N2adeQOQDzUWKgdnYlkGcv4c4wHwPdFeVGYdDWdfQ7k61Rswfpp32irrxHu60SOKfl4X9JtsSoQ04nLhf7JgzM97vIQYj3PVFwpg8NWvCGx5l%2BQHZPMuNdFLIDs%2F9q%2FI4c4Q32jb0BGKCAhJEzBpqIk5no317OOA3EdtxsvXkFUTLLlfwYonlPkkodSs2xPIbrbYm4%2FFDZFAoYNLWblRzKqTu2KaOCRkA%2FIiSCTHLfShGJi%2BtI0v5p%2FthqL%2B8dZJcYr3uVHy3%2BWo8zOhUPpAVqjxqCvxHDxgPVLGqRp9iwsTWECkT4c4WhU7r%2FfXmjNL6AgeW9SJOiEOoYIVUZbcu8Ucd4wsZ1NK6l9s25Mh0QhRDCqh77BBjqkAQ5jmwThliX1nbwADaK80cBVQuFAJnapQaaTKcNxY3CI10YjU9r8D5IjHMpa5ildMshdyZhcJbSlCEhHxAU8Q2tc9gGE7VU%2B4pzJYMPmitOl9Tb4QuQ7SxFtNpU%2FNlkzy1izHrfJPqvcCSe8jhDcmipS1t1MO7OMy4psDClQYdSX0zlbaumMs0LQvCbpGKnNvZzOFzgTyhfIvDbryOLy0pyKkZa%2B&X-Amz-Signature=57478cca7d2b73f8800f14150a14bc022beeeb567c62a59c7ef0dff8c33f94fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJN5VK7G%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegNP3tYkkyFAg2H9XOweJbZsPfvkA45WxoYjHbTy3WwIhAPXanugivx935xIP7JQjpvQwL4aVR08KjcEKIWrgFoK%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQbMsYzCpsx3j6g6Uq3AMLDgvGmtScuGwignlOW8%2FgraFb1xLJNKetCz0wjyKBNFIl3i6%2Bk0OxnbWM2XsZpr5XDnew0bZFxCEg5eMIrd6JV0apAu6psb1bFy6p%2BEHbQtJykE29y8cs%2BQs8Zpk8UeJQyEL9KwLwykfFk2E53WI%2B7bgTpfoeqm2%2FEjL1FIl4GiqnvdWstR0W2YZgFq%2FtW2vWrDVbvELMk%2FtQKsf43Gy4uMiRE1DKwsOW4xG3qpEwBy775XnnculQCy44C9UlH%2BVdg2nlOFCcLNSP8N2adeQOQDzUWKgdnYlkGcv4c4wHwPdFeVGYdDWdfQ7k61Rswfpp32irrxHu60SOKfl4X9JtsSoQ04nLhf7JgzM97vIQYj3PVFwpg8NWvCGx5l%2BQHZPMuNdFLIDs%2F9q%2FI4c4Q32jb0BGKCAhJEzBpqIk5no317OOA3EdtxsvXkFUTLLlfwYonlPkkodSs2xPIbrbYm4%2FFDZFAoYNLWblRzKqTu2KaOCRkA%2FIiSCTHLfShGJi%2BtI0v5p%2FthqL%2B8dZJcYr3uVHy3%2BWo8zOhUPpAVqjxqCvxHDxgPVLGqRp9iwsTWECkT4c4WhU7r%2FfXmjNL6AgeW9SJOiEOoYIVUZbcu8Ucd4wsZ1NK6l9s25Mh0QhRDCqh77BBjqkAQ5jmwThliX1nbwADaK80cBVQuFAJnapQaaTKcNxY3CI10YjU9r8D5IjHMpa5ildMshdyZhcJbSlCEhHxAU8Q2tc9gGE7VU%2B4pzJYMPmitOl9Tb4QuQ7SxFtNpU%2FNlkzy1izHrfJPqvcCSe8jhDcmipS1t1MO7OMy4psDClQYdSX0zlbaumMs0LQvCbpGKnNvZzOFzgTyhfIvDbryOLy0pyKkZa%2B&X-Amz-Signature=1291b612b1f05022f5d510dc99bebd0e095a94f842939ab5929612cbd9ccb982&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
