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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AXZN7Z%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFSC9emO9Lu19ZhCfw1O7%2B6b2cEXS%2Bt%2Fci8sirZQSfpJAiEAy5hF7K8EOK8u6QrlaBt1acYo5JKYvzTUKxpHfOsqstoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsFYGuJOY5bmUbkVCrcA8hQGRNpzj1AFjMawGxcIOX9duEcmPQa1JWK4d%2BQkncXo1qoUNdMV9aUaxu%2B5i1vuQikHzcVed%2FYHxqG9%2B9GPLP8UlyGWsSq76EE3w6gTk8zfZeyQQ0Qqm3GbodDhCr0rpZ2CtyeusVKjStScob%2BHGZC2mYWSY%2FmXJs64v4bJ45XBJdqdUjHYhqxliZa%2BcLD3pMKw0a3orEcXNmzhlzGv6%2BuRJ9zCm2udiMP4J2ZfawkuEI6Q6haTcu8AbrufhEAJqqOLaNJ5uAEYb6cJqtaqHLYOb5osQaTxvV6mhCUkydOGrPvqyS0SaZoF%2Bv5bh1Uzbwkl4E9II0%2F7JoXNdsGTqKHu2SLyEp41N8nQWfHtQa0tF6wgfyVWJRo8D0mmcYbTA3%2F8V9iVaYAt5KpkDGHw4JDLVvFr2tC7mUSgpoMoktz8ggJnsMInvSJaHaUvnruqQJneGoBdTJxceo6%2B5ho33QNvKKQrgU%2FbagPd0GrSKZeVraIJSU%2FXrmnu5iFt2wdnw%2FuxIOkUAF0U79I7ta48EW9i3PjcXzvfKkkzQy12mas7WgbU%2BB8eFrLIgQOUc7%2F0hCCNeXx2eS2Hh8VkE4krCF8tIEplTnU%2Fu8f34V8h1ET%2BdSgraebgN4WGruTMPTOhsEGOqUBcoyZUiwbRG9oan3YDRBBxc85N4xLo8RbfzeS7HU8oft64qjWFWtmq6sKRAj74utIce1aaGt%2FyrBk6ADsU2Gl1bM2dQfTHbmZzbMbn3vjl9BVCJFaVS4df23RR70xmbJDkqis06WuHH%2FfNOSOVHPGBhNydJTr%2FKjAUrVcZyxrbzD7sqKkMSJOt6bXgcVBE6pX%2BEFT%2FOma8NNOnoxj1Dup9GCt6FDy&X-Amz-Signature=1ba193b7056b1715cd91ada65c4ff91fb699f2393bc8baa09026d3a99f0722da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AXZN7Z%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFSC9emO9Lu19ZhCfw1O7%2B6b2cEXS%2Bt%2Fci8sirZQSfpJAiEAy5hF7K8EOK8u6QrlaBt1acYo5JKYvzTUKxpHfOsqstoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsFYGuJOY5bmUbkVCrcA8hQGRNpzj1AFjMawGxcIOX9duEcmPQa1JWK4d%2BQkncXo1qoUNdMV9aUaxu%2B5i1vuQikHzcVed%2FYHxqG9%2B9GPLP8UlyGWsSq76EE3w6gTk8zfZeyQQ0Qqm3GbodDhCr0rpZ2CtyeusVKjStScob%2BHGZC2mYWSY%2FmXJs64v4bJ45XBJdqdUjHYhqxliZa%2BcLD3pMKw0a3orEcXNmzhlzGv6%2BuRJ9zCm2udiMP4J2ZfawkuEI6Q6haTcu8AbrufhEAJqqOLaNJ5uAEYb6cJqtaqHLYOb5osQaTxvV6mhCUkydOGrPvqyS0SaZoF%2Bv5bh1Uzbwkl4E9II0%2F7JoXNdsGTqKHu2SLyEp41N8nQWfHtQa0tF6wgfyVWJRo8D0mmcYbTA3%2F8V9iVaYAt5KpkDGHw4JDLVvFr2tC7mUSgpoMoktz8ggJnsMInvSJaHaUvnruqQJneGoBdTJxceo6%2B5ho33QNvKKQrgU%2FbagPd0GrSKZeVraIJSU%2FXrmnu5iFt2wdnw%2FuxIOkUAF0U79I7ta48EW9i3PjcXzvfKkkzQy12mas7WgbU%2BB8eFrLIgQOUc7%2F0hCCNeXx2eS2Hh8VkE4krCF8tIEplTnU%2Fu8f34V8h1ET%2BdSgraebgN4WGruTMPTOhsEGOqUBcoyZUiwbRG9oan3YDRBBxc85N4xLo8RbfzeS7HU8oft64qjWFWtmq6sKRAj74utIce1aaGt%2FyrBk6ADsU2Gl1bM2dQfTHbmZzbMbn3vjl9BVCJFaVS4df23RR70xmbJDkqis06WuHH%2FfNOSOVHPGBhNydJTr%2FKjAUrVcZyxrbzD7sqKkMSJOt6bXgcVBE6pX%2BEFT%2FOma8NNOnoxj1Dup9GCt6FDy&X-Amz-Signature=60ab54975e5338e5010a67b00d9e9ae94843990882e1ed1eb63e6ae9fd1c92ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AXZN7Z%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFSC9emO9Lu19ZhCfw1O7%2B6b2cEXS%2Bt%2Fci8sirZQSfpJAiEAy5hF7K8EOK8u6QrlaBt1acYo5JKYvzTUKxpHfOsqstoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsFYGuJOY5bmUbkVCrcA8hQGRNpzj1AFjMawGxcIOX9duEcmPQa1JWK4d%2BQkncXo1qoUNdMV9aUaxu%2B5i1vuQikHzcVed%2FYHxqG9%2B9GPLP8UlyGWsSq76EE3w6gTk8zfZeyQQ0Qqm3GbodDhCr0rpZ2CtyeusVKjStScob%2BHGZC2mYWSY%2FmXJs64v4bJ45XBJdqdUjHYhqxliZa%2BcLD3pMKw0a3orEcXNmzhlzGv6%2BuRJ9zCm2udiMP4J2ZfawkuEI6Q6haTcu8AbrufhEAJqqOLaNJ5uAEYb6cJqtaqHLYOb5osQaTxvV6mhCUkydOGrPvqyS0SaZoF%2Bv5bh1Uzbwkl4E9II0%2F7JoXNdsGTqKHu2SLyEp41N8nQWfHtQa0tF6wgfyVWJRo8D0mmcYbTA3%2F8V9iVaYAt5KpkDGHw4JDLVvFr2tC7mUSgpoMoktz8ggJnsMInvSJaHaUvnruqQJneGoBdTJxceo6%2B5ho33QNvKKQrgU%2FbagPd0GrSKZeVraIJSU%2FXrmnu5iFt2wdnw%2FuxIOkUAF0U79I7ta48EW9i3PjcXzvfKkkzQy12mas7WgbU%2BB8eFrLIgQOUc7%2F0hCCNeXx2eS2Hh8VkE4krCF8tIEplTnU%2Fu8f34V8h1ET%2BdSgraebgN4WGruTMPTOhsEGOqUBcoyZUiwbRG9oan3YDRBBxc85N4xLo8RbfzeS7HU8oft64qjWFWtmq6sKRAj74utIce1aaGt%2FyrBk6ADsU2Gl1bM2dQfTHbmZzbMbn3vjl9BVCJFaVS4df23RR70xmbJDkqis06WuHH%2FfNOSOVHPGBhNydJTr%2FKjAUrVcZyxrbzD7sqKkMSJOt6bXgcVBE6pX%2BEFT%2FOma8NNOnoxj1Dup9GCt6FDy&X-Amz-Signature=20d0d75ff5b6665508e59f96f485831f02801f19fd6323e41e6639a3a7964967&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
