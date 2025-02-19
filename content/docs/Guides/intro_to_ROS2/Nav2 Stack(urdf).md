---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2U5GLPP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXP6BdGgHyoPV6%2B2tl%2BtsSavPnGRv6g7oVpgreyiARGAiA4NpJR9y5hWAi7p9vhLGP1p8nQaPSUQyCxqNnKyDqbsSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwIpdHE9tSbTKREXdKtwD6MUK5tZBHxNF%2B2EMG2mgl6LP4EvqSd%2F%2Fat4xWSSDjo2nEZWfE35qglq3sbgdy6kW2%2FPv9HLFLxCiIHUoVnsw87Yp8tNkcecuv5%2BwixacsuZjI1pfGuWbvOM%2FkQ1vQnIP%2FrWbv9fBQGew7jr6yWUOeLAzPbHEfNCBGY5mdtOIQ05R5WEu8w%2Fl3VLwqtsdMoNgVL7Nhd2HnZdWnzzV46r2qmOxJcQvukFctoT3%2F5OcwWcmEqjJuOAu6jjpqieXBXxQpEc93bO6HTKZZ789oAR%2FRHZeBsZCCD6KdAODESvjQivy1GGq3psa1rPE7KPSGmLx91mn5nNk%2BMOdS5223jxJFK4uCw5NUWdr9IqkV7P2PBl%2FGxVk9w0cECcW6nOcPBPY03L2ufmGr13qOARS7gLiaQdc35r8ptvI5HppSCOUFH6iAm21Ovf4QjrLVYPZXq7tjjUvnSojjH2GNhnIyBVRdb%2FdJKEdHT1weWqVEW5IikGH2VckARQE8fxvNlAdo70Egr3lCldY%2FxjTOUvAnma2Hfoq1dAJ4lZXgbhMQ3RBghTt0ER3xUYRjZ9hwFTJdkBQJU7jG4M7ok6o7C0d8SL2Fdk5kP9RrWKR%2BhmoBJsWX16uVHaBhnDTMIVebHcw5O7YvQY6pgHEzx4OzRXvB0Gx0QrvoEt3tYo9uPkI4EkhCk1QFv4mq0N80GwQjAY3Rm5oorFI71TGOuDtnX5Vmy8vvQWnOW5bis0mrOfWi9%2F8fP4%2FSY5pGex%2FnClBre5oaBo7tV8yaN2ySZ58NPBpVOi4cD4CEbvOh%2FSJhPohBGw17GQSu5cNSbz3eObhhGrOErDN9pAEh7m4LnCsJLUtm9UMDmGEsduWaIz%2Fwjoq&X-Amz-Signature=c919d295a259e4ef86b574484fab3c1570aff9ac6fbe81fbd6ae7c50a46ffe38&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2U5GLPP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXP6BdGgHyoPV6%2B2tl%2BtsSavPnGRv6g7oVpgreyiARGAiA4NpJR9y5hWAi7p9vhLGP1p8nQaPSUQyCxqNnKyDqbsSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwIpdHE9tSbTKREXdKtwD6MUK5tZBHxNF%2B2EMG2mgl6LP4EvqSd%2F%2Fat4xWSSDjo2nEZWfE35qglq3sbgdy6kW2%2FPv9HLFLxCiIHUoVnsw87Yp8tNkcecuv5%2BwixacsuZjI1pfGuWbvOM%2FkQ1vQnIP%2FrWbv9fBQGew7jr6yWUOeLAzPbHEfNCBGY5mdtOIQ05R5WEu8w%2Fl3VLwqtsdMoNgVL7Nhd2HnZdWnzzV46r2qmOxJcQvukFctoT3%2F5OcwWcmEqjJuOAu6jjpqieXBXxQpEc93bO6HTKZZ789oAR%2FRHZeBsZCCD6KdAODESvjQivy1GGq3psa1rPE7KPSGmLx91mn5nNk%2BMOdS5223jxJFK4uCw5NUWdr9IqkV7P2PBl%2FGxVk9w0cECcW6nOcPBPY03L2ufmGr13qOARS7gLiaQdc35r8ptvI5HppSCOUFH6iAm21Ovf4QjrLVYPZXq7tjjUvnSojjH2GNhnIyBVRdb%2FdJKEdHT1weWqVEW5IikGH2VckARQE8fxvNlAdo70Egr3lCldY%2FxjTOUvAnma2Hfoq1dAJ4lZXgbhMQ3RBghTt0ER3xUYRjZ9hwFTJdkBQJU7jG4M7ok6o7C0d8SL2Fdk5kP9RrWKR%2BhmoBJsWX16uVHaBhnDTMIVebHcw5O7YvQY6pgHEzx4OzRXvB0Gx0QrvoEt3tYo9uPkI4EkhCk1QFv4mq0N80GwQjAY3Rm5oorFI71TGOuDtnX5Vmy8vvQWnOW5bis0mrOfWi9%2F8fP4%2FSY5pGex%2FnClBre5oaBo7tV8yaN2ySZ58NPBpVOi4cD4CEbvOh%2FSJhPohBGw17GQSu5cNSbz3eObhhGrOErDN9pAEh7m4LnCsJLUtm9UMDmGEsduWaIz%2Fwjoq&X-Amz-Signature=3ea6228d812aa08953d3e64a17a0d1bb5c1e2b2b996b5ff665afe2a99b268371&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2U5GLPP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXP6BdGgHyoPV6%2B2tl%2BtsSavPnGRv6g7oVpgreyiARGAiA4NpJR9y5hWAi7p9vhLGP1p8nQaPSUQyCxqNnKyDqbsSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwIpdHE9tSbTKREXdKtwD6MUK5tZBHxNF%2B2EMG2mgl6LP4EvqSd%2F%2Fat4xWSSDjo2nEZWfE35qglq3sbgdy6kW2%2FPv9HLFLxCiIHUoVnsw87Yp8tNkcecuv5%2BwixacsuZjI1pfGuWbvOM%2FkQ1vQnIP%2FrWbv9fBQGew7jr6yWUOeLAzPbHEfNCBGY5mdtOIQ05R5WEu8w%2Fl3VLwqtsdMoNgVL7Nhd2HnZdWnzzV46r2qmOxJcQvukFctoT3%2F5OcwWcmEqjJuOAu6jjpqieXBXxQpEc93bO6HTKZZ789oAR%2FRHZeBsZCCD6KdAODESvjQivy1GGq3psa1rPE7KPSGmLx91mn5nNk%2BMOdS5223jxJFK4uCw5NUWdr9IqkV7P2PBl%2FGxVk9w0cECcW6nOcPBPY03L2ufmGr13qOARS7gLiaQdc35r8ptvI5HppSCOUFH6iAm21Ovf4QjrLVYPZXq7tjjUvnSojjH2GNhnIyBVRdb%2FdJKEdHT1weWqVEW5IikGH2VckARQE8fxvNlAdo70Egr3lCldY%2FxjTOUvAnma2Hfoq1dAJ4lZXgbhMQ3RBghTt0ER3xUYRjZ9hwFTJdkBQJU7jG4M7ok6o7C0d8SL2Fdk5kP9RrWKR%2BhmoBJsWX16uVHaBhnDTMIVebHcw5O7YvQY6pgHEzx4OzRXvB0Gx0QrvoEt3tYo9uPkI4EkhCk1QFv4mq0N80GwQjAY3Rm5oorFI71TGOuDtnX5Vmy8vvQWnOW5bis0mrOfWi9%2F8fP4%2FSY5pGex%2FnClBre5oaBo7tV8yaN2ySZ58NPBpVOi4cD4CEbvOh%2FSJhPohBGw17GQSu5cNSbz3eObhhGrOErDN9pAEh7m4LnCsJLUtm9UMDmGEsduWaIz%2Fwjoq&X-Amz-Signature=30b2b18f7ba6ab911cb25d38f0d9ab8638e279c94b185cde3b4bc37ea6086efb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2U5GLPP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXP6BdGgHyoPV6%2B2tl%2BtsSavPnGRv6g7oVpgreyiARGAiA4NpJR9y5hWAi7p9vhLGP1p8nQaPSUQyCxqNnKyDqbsSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwIpdHE9tSbTKREXdKtwD6MUK5tZBHxNF%2B2EMG2mgl6LP4EvqSd%2F%2Fat4xWSSDjo2nEZWfE35qglq3sbgdy6kW2%2FPv9HLFLxCiIHUoVnsw87Yp8tNkcecuv5%2BwixacsuZjI1pfGuWbvOM%2FkQ1vQnIP%2FrWbv9fBQGew7jr6yWUOeLAzPbHEfNCBGY5mdtOIQ05R5WEu8w%2Fl3VLwqtsdMoNgVL7Nhd2HnZdWnzzV46r2qmOxJcQvukFctoT3%2F5OcwWcmEqjJuOAu6jjpqieXBXxQpEc93bO6HTKZZ789oAR%2FRHZeBsZCCD6KdAODESvjQivy1GGq3psa1rPE7KPSGmLx91mn5nNk%2BMOdS5223jxJFK4uCw5NUWdr9IqkV7P2PBl%2FGxVk9w0cECcW6nOcPBPY03L2ufmGr13qOARS7gLiaQdc35r8ptvI5HppSCOUFH6iAm21Ovf4QjrLVYPZXq7tjjUvnSojjH2GNhnIyBVRdb%2FdJKEdHT1weWqVEW5IikGH2VckARQE8fxvNlAdo70Egr3lCldY%2FxjTOUvAnma2Hfoq1dAJ4lZXgbhMQ3RBghTt0ER3xUYRjZ9hwFTJdkBQJU7jG4M7ok6o7C0d8SL2Fdk5kP9RrWKR%2BhmoBJsWX16uVHaBhnDTMIVebHcw5O7YvQY6pgHEzx4OzRXvB0Gx0QrvoEt3tYo9uPkI4EkhCk1QFv4mq0N80GwQjAY3Rm5oorFI71TGOuDtnX5Vmy8vvQWnOW5bis0mrOfWi9%2F8fP4%2FSY5pGex%2FnClBre5oaBo7tV8yaN2ySZ58NPBpVOi4cD4CEbvOh%2FSJhPohBGw17GQSu5cNSbz3eObhhGrOErDN9pAEh7m4LnCsJLUtm9UMDmGEsduWaIz%2Fwjoq&X-Amz-Signature=df828d27e7b1bdb4c6f2a4ff0e33a90793325f5198c2e205893480b4c84cd67f&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2U5GLPP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXP6BdGgHyoPV6%2B2tl%2BtsSavPnGRv6g7oVpgreyiARGAiA4NpJR9y5hWAi7p9vhLGP1p8nQaPSUQyCxqNnKyDqbsSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwIpdHE9tSbTKREXdKtwD6MUK5tZBHxNF%2B2EMG2mgl6LP4EvqSd%2F%2Fat4xWSSDjo2nEZWfE35qglq3sbgdy6kW2%2FPv9HLFLxCiIHUoVnsw87Yp8tNkcecuv5%2BwixacsuZjI1pfGuWbvOM%2FkQ1vQnIP%2FrWbv9fBQGew7jr6yWUOeLAzPbHEfNCBGY5mdtOIQ05R5WEu8w%2Fl3VLwqtsdMoNgVL7Nhd2HnZdWnzzV46r2qmOxJcQvukFctoT3%2F5OcwWcmEqjJuOAu6jjpqieXBXxQpEc93bO6HTKZZ789oAR%2FRHZeBsZCCD6KdAODESvjQivy1GGq3psa1rPE7KPSGmLx91mn5nNk%2BMOdS5223jxJFK4uCw5NUWdr9IqkV7P2PBl%2FGxVk9w0cECcW6nOcPBPY03L2ufmGr13qOARS7gLiaQdc35r8ptvI5HppSCOUFH6iAm21Ovf4QjrLVYPZXq7tjjUvnSojjH2GNhnIyBVRdb%2FdJKEdHT1weWqVEW5IikGH2VckARQE8fxvNlAdo70Egr3lCldY%2FxjTOUvAnma2Hfoq1dAJ4lZXgbhMQ3RBghTt0ER3xUYRjZ9hwFTJdkBQJU7jG4M7ok6o7C0d8SL2Fdk5kP9RrWKR%2BhmoBJsWX16uVHaBhnDTMIVebHcw5O7YvQY6pgHEzx4OzRXvB0Gx0QrvoEt3tYo9uPkI4EkhCk1QFv4mq0N80GwQjAY3Rm5oorFI71TGOuDtnX5Vmy8vvQWnOW5bis0mrOfWi9%2F8fP4%2FSY5pGex%2FnClBre5oaBo7tV8yaN2ySZ58NPBpVOi4cD4CEbvOh%2FSJhPohBGw17GQSu5cNSbz3eObhhGrOErDN9pAEh7m4LnCsJLUtm9UMDmGEsduWaIz%2Fwjoq&X-Amz-Signature=70b605ee285872cc3f070b8ee7e9ba4e441025cff335ddc627bf966fc8c01243&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2U5GLPP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXP6BdGgHyoPV6%2B2tl%2BtsSavPnGRv6g7oVpgreyiARGAiA4NpJR9y5hWAi7p9vhLGP1p8nQaPSUQyCxqNnKyDqbsSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwIpdHE9tSbTKREXdKtwD6MUK5tZBHxNF%2B2EMG2mgl6LP4EvqSd%2F%2Fat4xWSSDjo2nEZWfE35qglq3sbgdy6kW2%2FPv9HLFLxCiIHUoVnsw87Yp8tNkcecuv5%2BwixacsuZjI1pfGuWbvOM%2FkQ1vQnIP%2FrWbv9fBQGew7jr6yWUOeLAzPbHEfNCBGY5mdtOIQ05R5WEu8w%2Fl3VLwqtsdMoNgVL7Nhd2HnZdWnzzV46r2qmOxJcQvukFctoT3%2F5OcwWcmEqjJuOAu6jjpqieXBXxQpEc93bO6HTKZZ789oAR%2FRHZeBsZCCD6KdAODESvjQivy1GGq3psa1rPE7KPSGmLx91mn5nNk%2BMOdS5223jxJFK4uCw5NUWdr9IqkV7P2PBl%2FGxVk9w0cECcW6nOcPBPY03L2ufmGr13qOARS7gLiaQdc35r8ptvI5HppSCOUFH6iAm21Ovf4QjrLVYPZXq7tjjUvnSojjH2GNhnIyBVRdb%2FdJKEdHT1weWqVEW5IikGH2VckARQE8fxvNlAdo70Egr3lCldY%2FxjTOUvAnma2Hfoq1dAJ4lZXgbhMQ3RBghTt0ER3xUYRjZ9hwFTJdkBQJU7jG4M7ok6o7C0d8SL2Fdk5kP9RrWKR%2BhmoBJsWX16uVHaBhnDTMIVebHcw5O7YvQY6pgHEzx4OzRXvB0Gx0QrvoEt3tYo9uPkI4EkhCk1QFv4mq0N80GwQjAY3Rm5oorFI71TGOuDtnX5Vmy8vvQWnOW5bis0mrOfWi9%2F8fP4%2FSY5pGex%2FnClBre5oaBo7tV8yaN2ySZ58NPBpVOi4cD4CEbvOh%2FSJhPohBGw17GQSu5cNSbz3eObhhGrOErDN9pAEh7m4LnCsJLUtm9UMDmGEsduWaIz%2Fwjoq&X-Amz-Signature=ce31601e5a60ffb7a414c9d99ab98a522f8b30863cb2b6400325c2e196203df9&X-Amz-SignedHeaders=host&x-id=GetObject)
