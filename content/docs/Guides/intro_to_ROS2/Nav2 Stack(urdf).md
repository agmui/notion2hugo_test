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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7WOIQY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCce17f7IFkKPuuv5%2FIh%2BrJSc0HrY7MyaM6%2Bd5lFAiZOgIhAIaUuyyNZccUNb02FqborEBmB9b%2BxPdJBK%2BQQuWj0G0VKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAuAGu61rYjRe2k3kq3AOIK2OTZW0U0FCS7BheUEgaTjONSrVUz3liLbsA3hTyCR6zX%2B2gwIPgtb0xnw4nMH67xRMJLrLTq%2BXyR65h6l8TP3xGXeO8wOsD3VqB8PK9Td4mN2EEezXMLqSVKc5JHR1priK88rrjcxCJj352XovUKhkX4gD2GAZEUdZPAZxFFWFqRyAa5BOMn9Rm1pMRLvev58Q4Hi9MmWdrnTw40FYjQK9Xy2X30cpGH9OiL5pa9z475BRsQYl90DkD58sSZgbvjmiETtZKNq1f0A%2BR5hm91a78aUVblcPsdeFHIOPfij42fM44tbNiWyJ9MesyZJppK3nMMSVHKTMi7RYx8Vn75xSnA4IYLzCZz3JG7P8aD9fXOXhomvIOXE2tdHaRWwQ8gnZjERv2I5MStRPIw7g12%2B2gRNqbVkIzOWU%2F1%2FClyJvTAiEeBnymQlj35Ofqr6LgsvsugOp1wQcJwzFbMklh6YyLkafwOh%2BtIqpH2x0zMonu%2B0zRj%2Bs6JI2nQBHOwAyWPCUMs2dadNrHhi5ji6rYtqsGyNWq%2BbwvY78L6u4MI05xbRSiczQxcekxt8adfCo7RMnmQ7GFWUxoww%2FXyj8%2BEDihStJ1vEbz9wKAd2jW71HvLd1eKUPIlVeRFDCJu%2Fa%2BBjqkAa6BsW6PLPkxtm09uop4qebzE5W8dYM1mY9HPNTm5NGQt8BI2CAQaq5AOi%2BDgvjqxAt2I4GsbtMOGgEYgiZjRdsdG%2FVyFGjvMpT17896bYPTRbmtP0XEEfc56Itw83JFBaqERFN7dVVkuhSKgc%2FVszXbfrmuq5yTkESLA9w1V3jMPqgdN0eX%2Bb%2BxCrky%2FcNe%2FWN10923BVXcotvmRp15LP2QyzIr&X-Amz-Signature=86f99017d00172d7cd3b46332d1d59ae2bbdb5ecbd4816eebb0ec17e9b0a9b79&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7WOIQY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCce17f7IFkKPuuv5%2FIh%2BrJSc0HrY7MyaM6%2Bd5lFAiZOgIhAIaUuyyNZccUNb02FqborEBmB9b%2BxPdJBK%2BQQuWj0G0VKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAuAGu61rYjRe2k3kq3AOIK2OTZW0U0FCS7BheUEgaTjONSrVUz3liLbsA3hTyCR6zX%2B2gwIPgtb0xnw4nMH67xRMJLrLTq%2BXyR65h6l8TP3xGXeO8wOsD3VqB8PK9Td4mN2EEezXMLqSVKc5JHR1priK88rrjcxCJj352XovUKhkX4gD2GAZEUdZPAZxFFWFqRyAa5BOMn9Rm1pMRLvev58Q4Hi9MmWdrnTw40FYjQK9Xy2X30cpGH9OiL5pa9z475BRsQYl90DkD58sSZgbvjmiETtZKNq1f0A%2BR5hm91a78aUVblcPsdeFHIOPfij42fM44tbNiWyJ9MesyZJppK3nMMSVHKTMi7RYx8Vn75xSnA4IYLzCZz3JG7P8aD9fXOXhomvIOXE2tdHaRWwQ8gnZjERv2I5MStRPIw7g12%2B2gRNqbVkIzOWU%2F1%2FClyJvTAiEeBnymQlj35Ofqr6LgsvsugOp1wQcJwzFbMklh6YyLkafwOh%2BtIqpH2x0zMonu%2B0zRj%2Bs6JI2nQBHOwAyWPCUMs2dadNrHhi5ji6rYtqsGyNWq%2BbwvY78L6u4MI05xbRSiczQxcekxt8adfCo7RMnmQ7GFWUxoww%2FXyj8%2BEDihStJ1vEbz9wKAd2jW71HvLd1eKUPIlVeRFDCJu%2Fa%2BBjqkAa6BsW6PLPkxtm09uop4qebzE5W8dYM1mY9HPNTm5NGQt8BI2CAQaq5AOi%2BDgvjqxAt2I4GsbtMOGgEYgiZjRdsdG%2FVyFGjvMpT17896bYPTRbmtP0XEEfc56Itw83JFBaqERFN7dVVkuhSKgc%2FVszXbfrmuq5yTkESLA9w1V3jMPqgdN0eX%2Bb%2BxCrky%2FcNe%2FWN10923BVXcotvmRp15LP2QyzIr&X-Amz-Signature=fd5f43bbb9bfdd2f345b0e04a9e8cc077c688a4475d61bc6c70b0edcc35ab100&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7WOIQY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCce17f7IFkKPuuv5%2FIh%2BrJSc0HrY7MyaM6%2Bd5lFAiZOgIhAIaUuyyNZccUNb02FqborEBmB9b%2BxPdJBK%2BQQuWj0G0VKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAuAGu61rYjRe2k3kq3AOIK2OTZW0U0FCS7BheUEgaTjONSrVUz3liLbsA3hTyCR6zX%2B2gwIPgtb0xnw4nMH67xRMJLrLTq%2BXyR65h6l8TP3xGXeO8wOsD3VqB8PK9Td4mN2EEezXMLqSVKc5JHR1priK88rrjcxCJj352XovUKhkX4gD2GAZEUdZPAZxFFWFqRyAa5BOMn9Rm1pMRLvev58Q4Hi9MmWdrnTw40FYjQK9Xy2X30cpGH9OiL5pa9z475BRsQYl90DkD58sSZgbvjmiETtZKNq1f0A%2BR5hm91a78aUVblcPsdeFHIOPfij42fM44tbNiWyJ9MesyZJppK3nMMSVHKTMi7RYx8Vn75xSnA4IYLzCZz3JG7P8aD9fXOXhomvIOXE2tdHaRWwQ8gnZjERv2I5MStRPIw7g12%2B2gRNqbVkIzOWU%2F1%2FClyJvTAiEeBnymQlj35Ofqr6LgsvsugOp1wQcJwzFbMklh6YyLkafwOh%2BtIqpH2x0zMonu%2B0zRj%2Bs6JI2nQBHOwAyWPCUMs2dadNrHhi5ji6rYtqsGyNWq%2BbwvY78L6u4MI05xbRSiczQxcekxt8adfCo7RMnmQ7GFWUxoww%2FXyj8%2BEDihStJ1vEbz9wKAd2jW71HvLd1eKUPIlVeRFDCJu%2Fa%2BBjqkAa6BsW6PLPkxtm09uop4qebzE5W8dYM1mY9HPNTm5NGQt8BI2CAQaq5AOi%2BDgvjqxAt2I4GsbtMOGgEYgiZjRdsdG%2FVyFGjvMpT17896bYPTRbmtP0XEEfc56Itw83JFBaqERFN7dVVkuhSKgc%2FVszXbfrmuq5yTkESLA9w1V3jMPqgdN0eX%2Bb%2BxCrky%2FcNe%2FWN10923BVXcotvmRp15LP2QyzIr&X-Amz-Signature=17faf767dca8604aca40d63aa3df3e3694ab32b566d9adcf1ada6f0674c2e375&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7WOIQY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCce17f7IFkKPuuv5%2FIh%2BrJSc0HrY7MyaM6%2Bd5lFAiZOgIhAIaUuyyNZccUNb02FqborEBmB9b%2BxPdJBK%2BQQuWj0G0VKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAuAGu61rYjRe2k3kq3AOIK2OTZW0U0FCS7BheUEgaTjONSrVUz3liLbsA3hTyCR6zX%2B2gwIPgtb0xnw4nMH67xRMJLrLTq%2BXyR65h6l8TP3xGXeO8wOsD3VqB8PK9Td4mN2EEezXMLqSVKc5JHR1priK88rrjcxCJj352XovUKhkX4gD2GAZEUdZPAZxFFWFqRyAa5BOMn9Rm1pMRLvev58Q4Hi9MmWdrnTw40FYjQK9Xy2X30cpGH9OiL5pa9z475BRsQYl90DkD58sSZgbvjmiETtZKNq1f0A%2BR5hm91a78aUVblcPsdeFHIOPfij42fM44tbNiWyJ9MesyZJppK3nMMSVHKTMi7RYx8Vn75xSnA4IYLzCZz3JG7P8aD9fXOXhomvIOXE2tdHaRWwQ8gnZjERv2I5MStRPIw7g12%2B2gRNqbVkIzOWU%2F1%2FClyJvTAiEeBnymQlj35Ofqr6LgsvsugOp1wQcJwzFbMklh6YyLkafwOh%2BtIqpH2x0zMonu%2B0zRj%2Bs6JI2nQBHOwAyWPCUMs2dadNrHhi5ji6rYtqsGyNWq%2BbwvY78L6u4MI05xbRSiczQxcekxt8adfCo7RMnmQ7GFWUxoww%2FXyj8%2BEDihStJ1vEbz9wKAd2jW71HvLd1eKUPIlVeRFDCJu%2Fa%2BBjqkAa6BsW6PLPkxtm09uop4qebzE5W8dYM1mY9HPNTm5NGQt8BI2CAQaq5AOi%2BDgvjqxAt2I4GsbtMOGgEYgiZjRdsdG%2FVyFGjvMpT17896bYPTRbmtP0XEEfc56Itw83JFBaqERFN7dVVkuhSKgc%2FVszXbfrmuq5yTkESLA9w1V3jMPqgdN0eX%2Bb%2BxCrky%2FcNe%2FWN10923BVXcotvmRp15LP2QyzIr&X-Amz-Signature=5532d554fa2313288b275cf5dea4827ce3b61d7dd9a130a19859ce50ea0c67f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7WOIQY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCce17f7IFkKPuuv5%2FIh%2BrJSc0HrY7MyaM6%2Bd5lFAiZOgIhAIaUuyyNZccUNb02FqborEBmB9b%2BxPdJBK%2BQQuWj0G0VKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAuAGu61rYjRe2k3kq3AOIK2OTZW0U0FCS7BheUEgaTjONSrVUz3liLbsA3hTyCR6zX%2B2gwIPgtb0xnw4nMH67xRMJLrLTq%2BXyR65h6l8TP3xGXeO8wOsD3VqB8PK9Td4mN2EEezXMLqSVKc5JHR1priK88rrjcxCJj352XovUKhkX4gD2GAZEUdZPAZxFFWFqRyAa5BOMn9Rm1pMRLvev58Q4Hi9MmWdrnTw40FYjQK9Xy2X30cpGH9OiL5pa9z475BRsQYl90DkD58sSZgbvjmiETtZKNq1f0A%2BR5hm91a78aUVblcPsdeFHIOPfij42fM44tbNiWyJ9MesyZJppK3nMMSVHKTMi7RYx8Vn75xSnA4IYLzCZz3JG7P8aD9fXOXhomvIOXE2tdHaRWwQ8gnZjERv2I5MStRPIw7g12%2B2gRNqbVkIzOWU%2F1%2FClyJvTAiEeBnymQlj35Ofqr6LgsvsugOp1wQcJwzFbMklh6YyLkafwOh%2BtIqpH2x0zMonu%2B0zRj%2Bs6JI2nQBHOwAyWPCUMs2dadNrHhi5ji6rYtqsGyNWq%2BbwvY78L6u4MI05xbRSiczQxcekxt8adfCo7RMnmQ7GFWUxoww%2FXyj8%2BEDihStJ1vEbz9wKAd2jW71HvLd1eKUPIlVeRFDCJu%2Fa%2BBjqkAa6BsW6PLPkxtm09uop4qebzE5W8dYM1mY9HPNTm5NGQt8BI2CAQaq5AOi%2BDgvjqxAt2I4GsbtMOGgEYgiZjRdsdG%2FVyFGjvMpT17896bYPTRbmtP0XEEfc56Itw83JFBaqERFN7dVVkuhSKgc%2FVszXbfrmuq5yTkESLA9w1V3jMPqgdN0eX%2Bb%2BxCrky%2FcNe%2FWN10923BVXcotvmRp15LP2QyzIr&X-Amz-Signature=2a7d8ded6530bff7f65b32cf6d2febac3647a94867ba403f760c8106cc551a49&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7WOIQY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCce17f7IFkKPuuv5%2FIh%2BrJSc0HrY7MyaM6%2Bd5lFAiZOgIhAIaUuyyNZccUNb02FqborEBmB9b%2BxPdJBK%2BQQuWj0G0VKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAuAGu61rYjRe2k3kq3AOIK2OTZW0U0FCS7BheUEgaTjONSrVUz3liLbsA3hTyCR6zX%2B2gwIPgtb0xnw4nMH67xRMJLrLTq%2BXyR65h6l8TP3xGXeO8wOsD3VqB8PK9Td4mN2EEezXMLqSVKc5JHR1priK88rrjcxCJj352XovUKhkX4gD2GAZEUdZPAZxFFWFqRyAa5BOMn9Rm1pMRLvev58Q4Hi9MmWdrnTw40FYjQK9Xy2X30cpGH9OiL5pa9z475BRsQYl90DkD58sSZgbvjmiETtZKNq1f0A%2BR5hm91a78aUVblcPsdeFHIOPfij42fM44tbNiWyJ9MesyZJppK3nMMSVHKTMi7RYx8Vn75xSnA4IYLzCZz3JG7P8aD9fXOXhomvIOXE2tdHaRWwQ8gnZjERv2I5MStRPIw7g12%2B2gRNqbVkIzOWU%2F1%2FClyJvTAiEeBnymQlj35Ofqr6LgsvsugOp1wQcJwzFbMklh6YyLkafwOh%2BtIqpH2x0zMonu%2B0zRj%2Bs6JI2nQBHOwAyWPCUMs2dadNrHhi5ji6rYtqsGyNWq%2BbwvY78L6u4MI05xbRSiczQxcekxt8adfCo7RMnmQ7GFWUxoww%2FXyj8%2BEDihStJ1vEbz9wKAd2jW71HvLd1eKUPIlVeRFDCJu%2Fa%2BBjqkAa6BsW6PLPkxtm09uop4qebzE5W8dYM1mY9HPNTm5NGQt8BI2CAQaq5AOi%2BDgvjqxAt2I4GsbtMOGgEYgiZjRdsdG%2FVyFGjvMpT17896bYPTRbmtP0XEEfc56Itw83JFBaqERFN7dVVkuhSKgc%2FVszXbfrmuq5yTkESLA9w1V3jMPqgdN0eX%2Bb%2BxCrky%2FcNe%2FWN10923BVXcotvmRp15LP2QyzIr&X-Amz-Signature=6dbae8e015f997005d50854ecc743d5794f5a34544681d8092ef8975764eb153&X-Amz-SignedHeaders=host&x-id=GetObject)
