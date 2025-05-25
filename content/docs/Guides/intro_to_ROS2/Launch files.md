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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WN2O7IM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFG4LC02ubOP5WpupD9um4j17n76Mjx1QEpAzZ4aI20MAiEA7qROi40E1B3AodVH7dJVgHHumS5Ws3b6bgYgmelh004q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJhMEZDJ%2BjiN5%2FC5pircA6O7JNinJbr1Q6f%2BaEYuQ9xPCcVP4S3nkZPrI4fM3RSFMJsB%2BZPHKRAL%2F40OdYEBzDrwYGC0xuG5YqvcWRxrf%2BPIlS0EkLU0jcx0O9ZZti6jiYns6thHYLApcJseAri6t5LZLySaACbXZzRFWiEgpgTRP1YgSOG%2BG77YlkkOTnNRKTY8dNLmXqscKfWurK4lbiiMTIUgSvzwSkUiir28ytSkYKkaJ3VmiN2VuXpTAcSINlhLYAWzxkDnQKz4d0V9WvBSk3eQYselsQBRPTq%2FWeeCqkqzzKeAZHyrZCr%2BveSONyQ7WivHFFD6Ko3x7BCbSWblfCDgt6TR2aBUuctwVFu0Tjn4DibPCx94H8dqryUN9wSRif3QidsFf1Yjvdhaw%2BRUc2HjshkHi0IgfKlQp5KPaokHbdb8YpI1mHeoVscuOwFKKpmro7V4EoXk5mSfN8BZkcGXLXUU1NOvr%2F%2FwKFc6kxNP4NIbITb0fs5%2FN1Gglmhb5Zr8DrBbJxes%2Fyx2OVPSDp%2Bgi5SD27oYsaVw9bo9ktY197hG9UEDCxDzOiPU7w6CYCofdXgXQAv5B2hoEhSPSoJMmBELSy51lKiCR%2B8CUYSrnuNkftOsesNss5brk%2FmAecO6iqfYOr3SMMHFzcEGOqUBR8eBy0ucv1Z6eOx3M1ffueUKRu4as7NktoNHEid6MGHMYIAMB570y6c93%2FqVh%2BtDE4ggoKz1jdM2qRmIKW0AhvQ4W3lExiJSfrakYvE4NQCh8lNXcna0ilIV1pprfZ%2BbzPPhTnEbrPex2H1i8WpQMXVPCbJfBSm4MTLbjy0TuSUMWPMhw9Z7I7HeHoi5R8f86eXMcnew4TwLPI0bWqoLAzsvBbca&X-Amz-Signature=fd1e621ea66217a6d680c8f81e55bb64089b8d62717d90563a1791ffb135a948&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WN2O7IM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFG4LC02ubOP5WpupD9um4j17n76Mjx1QEpAzZ4aI20MAiEA7qROi40E1B3AodVH7dJVgHHumS5Ws3b6bgYgmelh004q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJhMEZDJ%2BjiN5%2FC5pircA6O7JNinJbr1Q6f%2BaEYuQ9xPCcVP4S3nkZPrI4fM3RSFMJsB%2BZPHKRAL%2F40OdYEBzDrwYGC0xuG5YqvcWRxrf%2BPIlS0EkLU0jcx0O9ZZti6jiYns6thHYLApcJseAri6t5LZLySaACbXZzRFWiEgpgTRP1YgSOG%2BG77YlkkOTnNRKTY8dNLmXqscKfWurK4lbiiMTIUgSvzwSkUiir28ytSkYKkaJ3VmiN2VuXpTAcSINlhLYAWzxkDnQKz4d0V9WvBSk3eQYselsQBRPTq%2FWeeCqkqzzKeAZHyrZCr%2BveSONyQ7WivHFFD6Ko3x7BCbSWblfCDgt6TR2aBUuctwVFu0Tjn4DibPCx94H8dqryUN9wSRif3QidsFf1Yjvdhaw%2BRUc2HjshkHi0IgfKlQp5KPaokHbdb8YpI1mHeoVscuOwFKKpmro7V4EoXk5mSfN8BZkcGXLXUU1NOvr%2F%2FwKFc6kxNP4NIbITb0fs5%2FN1Gglmhb5Zr8DrBbJxes%2Fyx2OVPSDp%2Bgi5SD27oYsaVw9bo9ktY197hG9UEDCxDzOiPU7w6CYCofdXgXQAv5B2hoEhSPSoJMmBELSy51lKiCR%2B8CUYSrnuNkftOsesNss5brk%2FmAecO6iqfYOr3SMMHFzcEGOqUBR8eBy0ucv1Z6eOx3M1ffueUKRu4as7NktoNHEid6MGHMYIAMB570y6c93%2FqVh%2BtDE4ggoKz1jdM2qRmIKW0AhvQ4W3lExiJSfrakYvE4NQCh8lNXcna0ilIV1pprfZ%2BbzPPhTnEbrPex2H1i8WpQMXVPCbJfBSm4MTLbjy0TuSUMWPMhw9Z7I7HeHoi5R8f86eXMcnew4TwLPI0bWqoLAzsvBbca&X-Amz-Signature=007bd444b96e1e871b1ebdcbc73b7591dca37b473e6d34251f4a22875c45c989&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WN2O7IM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFG4LC02ubOP5WpupD9um4j17n76Mjx1QEpAzZ4aI20MAiEA7qROi40E1B3AodVH7dJVgHHumS5Ws3b6bgYgmelh004q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJhMEZDJ%2BjiN5%2FC5pircA6O7JNinJbr1Q6f%2BaEYuQ9xPCcVP4S3nkZPrI4fM3RSFMJsB%2BZPHKRAL%2F40OdYEBzDrwYGC0xuG5YqvcWRxrf%2BPIlS0EkLU0jcx0O9ZZti6jiYns6thHYLApcJseAri6t5LZLySaACbXZzRFWiEgpgTRP1YgSOG%2BG77YlkkOTnNRKTY8dNLmXqscKfWurK4lbiiMTIUgSvzwSkUiir28ytSkYKkaJ3VmiN2VuXpTAcSINlhLYAWzxkDnQKz4d0V9WvBSk3eQYselsQBRPTq%2FWeeCqkqzzKeAZHyrZCr%2BveSONyQ7WivHFFD6Ko3x7BCbSWblfCDgt6TR2aBUuctwVFu0Tjn4DibPCx94H8dqryUN9wSRif3QidsFf1Yjvdhaw%2BRUc2HjshkHi0IgfKlQp5KPaokHbdb8YpI1mHeoVscuOwFKKpmro7V4EoXk5mSfN8BZkcGXLXUU1NOvr%2F%2FwKFc6kxNP4NIbITb0fs5%2FN1Gglmhb5Zr8DrBbJxes%2Fyx2OVPSDp%2Bgi5SD27oYsaVw9bo9ktY197hG9UEDCxDzOiPU7w6CYCofdXgXQAv5B2hoEhSPSoJMmBELSy51lKiCR%2B8CUYSrnuNkftOsesNss5brk%2FmAecO6iqfYOr3SMMHFzcEGOqUBR8eBy0ucv1Z6eOx3M1ffueUKRu4as7NktoNHEid6MGHMYIAMB570y6c93%2FqVh%2BtDE4ggoKz1jdM2qRmIKW0AhvQ4W3lExiJSfrakYvE4NQCh8lNXcna0ilIV1pprfZ%2BbzPPhTnEbrPex2H1i8WpQMXVPCbJfBSm4MTLbjy0TuSUMWPMhw9Z7I7HeHoi5R8f86eXMcnew4TwLPI0bWqoLAzsvBbca&X-Amz-Signature=9227c00e987f162b8c9385e5ad10611870e3620d8024ee2aa3c8ee0613b9fb84&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
