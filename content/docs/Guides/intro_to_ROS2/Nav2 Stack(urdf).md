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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4XT5AC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4nVBcKfkOJqeMP4WZ7BKzCI6q2Cgr55xdU3F7uQT7QIhAIS96YRqZd2y0phIK0KKtJS4owmYLeXQuXQtLP2hOQtSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIKQmB64WN%2Bme8aIsq3AM5F1glfXmeMbi%2BQTQXsDuhx0H5d9cn4ROs0h7IM%2FsVmwcYrsfIKxSBgNpfFWIRy9UufIx1tzpekwK5m6Jut4WCvH1cYZpqFLK7qEctPbMt7VKkxuraKu9jWweoc7VdKRZti782MLULmCLvSiDJkuozuw5dP78mXWEVrspJEifBU5gqG0nuvsxuPtB5w7F5tbeoInLAROAsSFsfPVM4NmwcXMNC2wGx4t3aTzMBYSURksBIvLql9iYEbAIBG9ah4Mf9FpWBteF520KXFkWGOw5ZRHIktI97o5mdk6b0MYwOXh29Qt2yGje%2FCzK%2BLx0gVKyl5K6EXanwQMc8DrQe8659sArT1UffTDg3Vb73SMuTNx19zC5fNmVb7ZVEqpr6etkkhhsRNFKiAcWrC13I9Ni9w1wghp6p0R6JESvDvwzjExwdXUE5IZav%2BuGOKMyY5xYBLt09dwMrzbO2Ukv7M8cP8eqW1nh7ZhCJUgYlI%2BYU5j2S7UYwwEpKVsUzRL3oAgI7x0%2BXxkY3KGvBRwuG3vpYLxMtxZS9wYBqjwS19%2BOIHaFUEPJBnbm4hhUWIHQv9UKKnOJuCKkBFRkwR5yyqdAldURdkawZh5QWeFanP98RmTBVZGv7YJ%2Bi0AslFjDKkp3CBjqkAWpixVMAxpDmNh6VMywq2PxrDq8Cx7HBgoauFGLBE2x55k21Ez5Bc8lV%2BgMrcyNsjAwssYdnNJkHNYI3unhAflpL2r9SCUD8QBiJPrc7FPLzNlJ3K1HGo8mFN5lpB%2FVTKxJiopaOHU73GRWyzAJL9Lqb%2BGcma6By0Q%2FT2irfbcyUI1%2BHfbbl4nn8wwkvuzTzhfPJqBvPk2YPQUvAle%2FpsVmWZNNH&X-Amz-Signature=5855b2dd9e80c311a4784cf155c361c6c7e3f383312c1f17241cd75ab232a0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4XT5AC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4nVBcKfkOJqeMP4WZ7BKzCI6q2Cgr55xdU3F7uQT7QIhAIS96YRqZd2y0phIK0KKtJS4owmYLeXQuXQtLP2hOQtSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIKQmB64WN%2Bme8aIsq3AM5F1glfXmeMbi%2BQTQXsDuhx0H5d9cn4ROs0h7IM%2FsVmwcYrsfIKxSBgNpfFWIRy9UufIx1tzpekwK5m6Jut4WCvH1cYZpqFLK7qEctPbMt7VKkxuraKu9jWweoc7VdKRZti782MLULmCLvSiDJkuozuw5dP78mXWEVrspJEifBU5gqG0nuvsxuPtB5w7F5tbeoInLAROAsSFsfPVM4NmwcXMNC2wGx4t3aTzMBYSURksBIvLql9iYEbAIBG9ah4Mf9FpWBteF520KXFkWGOw5ZRHIktI97o5mdk6b0MYwOXh29Qt2yGje%2FCzK%2BLx0gVKyl5K6EXanwQMc8DrQe8659sArT1UffTDg3Vb73SMuTNx19zC5fNmVb7ZVEqpr6etkkhhsRNFKiAcWrC13I9Ni9w1wghp6p0R6JESvDvwzjExwdXUE5IZav%2BuGOKMyY5xYBLt09dwMrzbO2Ukv7M8cP8eqW1nh7ZhCJUgYlI%2BYU5j2S7UYwwEpKVsUzRL3oAgI7x0%2BXxkY3KGvBRwuG3vpYLxMtxZS9wYBqjwS19%2BOIHaFUEPJBnbm4hhUWIHQv9UKKnOJuCKkBFRkwR5yyqdAldURdkawZh5QWeFanP98RmTBVZGv7YJ%2Bi0AslFjDKkp3CBjqkAWpixVMAxpDmNh6VMywq2PxrDq8Cx7HBgoauFGLBE2x55k21Ez5Bc8lV%2BgMrcyNsjAwssYdnNJkHNYI3unhAflpL2r9SCUD8QBiJPrc7FPLzNlJ3K1HGo8mFN5lpB%2FVTKxJiopaOHU73GRWyzAJL9Lqb%2BGcma6By0Q%2FT2irfbcyUI1%2BHfbbl4nn8wwkvuzTzhfPJqBvPk2YPQUvAle%2FpsVmWZNNH&X-Amz-Signature=33908f26a148e8ece993d4569390c15aac475299369dc3b37ed2995cf05a091c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4XT5AC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4nVBcKfkOJqeMP4WZ7BKzCI6q2Cgr55xdU3F7uQT7QIhAIS96YRqZd2y0phIK0KKtJS4owmYLeXQuXQtLP2hOQtSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIKQmB64WN%2Bme8aIsq3AM5F1glfXmeMbi%2BQTQXsDuhx0H5d9cn4ROs0h7IM%2FsVmwcYrsfIKxSBgNpfFWIRy9UufIx1tzpekwK5m6Jut4WCvH1cYZpqFLK7qEctPbMt7VKkxuraKu9jWweoc7VdKRZti782MLULmCLvSiDJkuozuw5dP78mXWEVrspJEifBU5gqG0nuvsxuPtB5w7F5tbeoInLAROAsSFsfPVM4NmwcXMNC2wGx4t3aTzMBYSURksBIvLql9iYEbAIBG9ah4Mf9FpWBteF520KXFkWGOw5ZRHIktI97o5mdk6b0MYwOXh29Qt2yGje%2FCzK%2BLx0gVKyl5K6EXanwQMc8DrQe8659sArT1UffTDg3Vb73SMuTNx19zC5fNmVb7ZVEqpr6etkkhhsRNFKiAcWrC13I9Ni9w1wghp6p0R6JESvDvwzjExwdXUE5IZav%2BuGOKMyY5xYBLt09dwMrzbO2Ukv7M8cP8eqW1nh7ZhCJUgYlI%2BYU5j2S7UYwwEpKVsUzRL3oAgI7x0%2BXxkY3KGvBRwuG3vpYLxMtxZS9wYBqjwS19%2BOIHaFUEPJBnbm4hhUWIHQv9UKKnOJuCKkBFRkwR5yyqdAldURdkawZh5QWeFanP98RmTBVZGv7YJ%2Bi0AslFjDKkp3CBjqkAWpixVMAxpDmNh6VMywq2PxrDq8Cx7HBgoauFGLBE2x55k21Ez5Bc8lV%2BgMrcyNsjAwssYdnNJkHNYI3unhAflpL2r9SCUD8QBiJPrc7FPLzNlJ3K1HGo8mFN5lpB%2FVTKxJiopaOHU73GRWyzAJL9Lqb%2BGcma6By0Q%2FT2irfbcyUI1%2BHfbbl4nn8wwkvuzTzhfPJqBvPk2YPQUvAle%2FpsVmWZNNH&X-Amz-Signature=53ce14eb234827ac121cc549d15704c16f2e9974803fb46f35b9072e83f75a01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4XT5AC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4nVBcKfkOJqeMP4WZ7BKzCI6q2Cgr55xdU3F7uQT7QIhAIS96YRqZd2y0phIK0KKtJS4owmYLeXQuXQtLP2hOQtSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIKQmB64WN%2Bme8aIsq3AM5F1glfXmeMbi%2BQTQXsDuhx0H5d9cn4ROs0h7IM%2FsVmwcYrsfIKxSBgNpfFWIRy9UufIx1tzpekwK5m6Jut4WCvH1cYZpqFLK7qEctPbMt7VKkxuraKu9jWweoc7VdKRZti782MLULmCLvSiDJkuozuw5dP78mXWEVrspJEifBU5gqG0nuvsxuPtB5w7F5tbeoInLAROAsSFsfPVM4NmwcXMNC2wGx4t3aTzMBYSURksBIvLql9iYEbAIBG9ah4Mf9FpWBteF520KXFkWGOw5ZRHIktI97o5mdk6b0MYwOXh29Qt2yGje%2FCzK%2BLx0gVKyl5K6EXanwQMc8DrQe8659sArT1UffTDg3Vb73SMuTNx19zC5fNmVb7ZVEqpr6etkkhhsRNFKiAcWrC13I9Ni9w1wghp6p0R6JESvDvwzjExwdXUE5IZav%2BuGOKMyY5xYBLt09dwMrzbO2Ukv7M8cP8eqW1nh7ZhCJUgYlI%2BYU5j2S7UYwwEpKVsUzRL3oAgI7x0%2BXxkY3KGvBRwuG3vpYLxMtxZS9wYBqjwS19%2BOIHaFUEPJBnbm4hhUWIHQv9UKKnOJuCKkBFRkwR5yyqdAldURdkawZh5QWeFanP98RmTBVZGv7YJ%2Bi0AslFjDKkp3CBjqkAWpixVMAxpDmNh6VMywq2PxrDq8Cx7HBgoauFGLBE2x55k21Ez5Bc8lV%2BgMrcyNsjAwssYdnNJkHNYI3unhAflpL2r9SCUD8QBiJPrc7FPLzNlJ3K1HGo8mFN5lpB%2FVTKxJiopaOHU73GRWyzAJL9Lqb%2BGcma6By0Q%2FT2irfbcyUI1%2BHfbbl4nn8wwkvuzTzhfPJqBvPk2YPQUvAle%2FpsVmWZNNH&X-Amz-Signature=606a27623239929248f3751e387e6e44ee180fa2ba9b8ff9e5e3e964c89259da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4XT5AC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4nVBcKfkOJqeMP4WZ7BKzCI6q2Cgr55xdU3F7uQT7QIhAIS96YRqZd2y0phIK0KKtJS4owmYLeXQuXQtLP2hOQtSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIKQmB64WN%2Bme8aIsq3AM5F1glfXmeMbi%2BQTQXsDuhx0H5d9cn4ROs0h7IM%2FsVmwcYrsfIKxSBgNpfFWIRy9UufIx1tzpekwK5m6Jut4WCvH1cYZpqFLK7qEctPbMt7VKkxuraKu9jWweoc7VdKRZti782MLULmCLvSiDJkuozuw5dP78mXWEVrspJEifBU5gqG0nuvsxuPtB5w7F5tbeoInLAROAsSFsfPVM4NmwcXMNC2wGx4t3aTzMBYSURksBIvLql9iYEbAIBG9ah4Mf9FpWBteF520KXFkWGOw5ZRHIktI97o5mdk6b0MYwOXh29Qt2yGje%2FCzK%2BLx0gVKyl5K6EXanwQMc8DrQe8659sArT1UffTDg3Vb73SMuTNx19zC5fNmVb7ZVEqpr6etkkhhsRNFKiAcWrC13I9Ni9w1wghp6p0R6JESvDvwzjExwdXUE5IZav%2BuGOKMyY5xYBLt09dwMrzbO2Ukv7M8cP8eqW1nh7ZhCJUgYlI%2BYU5j2S7UYwwEpKVsUzRL3oAgI7x0%2BXxkY3KGvBRwuG3vpYLxMtxZS9wYBqjwS19%2BOIHaFUEPJBnbm4hhUWIHQv9UKKnOJuCKkBFRkwR5yyqdAldURdkawZh5QWeFanP98RmTBVZGv7YJ%2Bi0AslFjDKkp3CBjqkAWpixVMAxpDmNh6VMywq2PxrDq8Cx7HBgoauFGLBE2x55k21Ez5Bc8lV%2BgMrcyNsjAwssYdnNJkHNYI3unhAflpL2r9SCUD8QBiJPrc7FPLzNlJ3K1HGo8mFN5lpB%2FVTKxJiopaOHU73GRWyzAJL9Lqb%2BGcma6By0Q%2FT2irfbcyUI1%2BHfbbl4nn8wwkvuzTzhfPJqBvPk2YPQUvAle%2FpsVmWZNNH&X-Amz-Signature=595bd1bbdd4f52476bd22ce26c3f59e09ba86aceedf28d4738544bd701f0a14a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH4XT5AC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz4nVBcKfkOJqeMP4WZ7BKzCI6q2Cgr55xdU3F7uQT7QIhAIS96YRqZd2y0phIK0KKtJS4owmYLeXQuXQtLP2hOQtSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIKQmB64WN%2Bme8aIsq3AM5F1glfXmeMbi%2BQTQXsDuhx0H5d9cn4ROs0h7IM%2FsVmwcYrsfIKxSBgNpfFWIRy9UufIx1tzpekwK5m6Jut4WCvH1cYZpqFLK7qEctPbMt7VKkxuraKu9jWweoc7VdKRZti782MLULmCLvSiDJkuozuw5dP78mXWEVrspJEifBU5gqG0nuvsxuPtB5w7F5tbeoInLAROAsSFsfPVM4NmwcXMNC2wGx4t3aTzMBYSURksBIvLql9iYEbAIBG9ah4Mf9FpWBteF520KXFkWGOw5ZRHIktI97o5mdk6b0MYwOXh29Qt2yGje%2FCzK%2BLx0gVKyl5K6EXanwQMc8DrQe8659sArT1UffTDg3Vb73SMuTNx19zC5fNmVb7ZVEqpr6etkkhhsRNFKiAcWrC13I9Ni9w1wghp6p0R6JESvDvwzjExwdXUE5IZav%2BuGOKMyY5xYBLt09dwMrzbO2Ukv7M8cP8eqW1nh7ZhCJUgYlI%2BYU5j2S7UYwwEpKVsUzRL3oAgI7x0%2BXxkY3KGvBRwuG3vpYLxMtxZS9wYBqjwS19%2BOIHaFUEPJBnbm4hhUWIHQv9UKKnOJuCKkBFRkwR5yyqdAldURdkawZh5QWeFanP98RmTBVZGv7YJ%2Bi0AslFjDKkp3CBjqkAWpixVMAxpDmNh6VMywq2PxrDq8Cx7HBgoauFGLBE2x55k21Ez5Bc8lV%2BgMrcyNsjAwssYdnNJkHNYI3unhAflpL2r9SCUD8QBiJPrc7FPLzNlJ3K1HGo8mFN5lpB%2FVTKxJiopaOHU73GRWyzAJL9Lqb%2BGcma6By0Q%2FT2irfbcyUI1%2BHfbbl4nn8wwkvuzTzhfPJqBvPk2YPQUvAle%2FpsVmWZNNH&X-Amz-Signature=cff6cf103c838bf7d513fc75714ef580b9ed566ad0e1b48cb12dae946f741d9e&X-Amz-SignedHeaders=host&x-id=GetObject)
