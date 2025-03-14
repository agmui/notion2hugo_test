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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WAEGNY%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9SC6w3JMfqZC3ZFxuEK2j3S09G%2Fw7OkLAmmhcpPRl6AiEAv0DvgxJM6e5Ysfh6ydCOhWNoUMHyOLQGWip1B5SZMx8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIZ0mfCTCD%2Fz27cHyrcA%2FSPU46L%2B7IYjI2n6sBot4T%2B%2FsgrtyIIDK%2FBYIDEQsot5wmcfAawiqNdIOALFPjvXuxW4EYkKI4PmFYUjX0F64ZoF3ko3lAjSS4RCxMtwL0KrhFrM4QDpvADv46hqxxsIeTG17ULt1xvs0XPi%2ByuRzM7u3mKwN8D0MYW7Z0SlfhrJ88v0Fu2XgdmQ5CYHVe%2F6oNdhjZoUsAZrMP0CFIp3e1aybvoJZVrhO%2FRdug9T8L1cGMr%2FPJz1gN6yskEUdtHryDI0fmVXX%2FsqedN9PreelDRzPEopxHs3g%2BPht%2FcW6d650%2BgXJ%2FKjMhrM0eCCsHNQblo1%2BR8DIek6Sy3clgR94Zxgcsxf7iSNLsAfSd%2FbYnD19kwG70vTyF0y6I8n6e1uGDfAjbuWalxmZqL37oILDSro6OyurCqPeTrG79aQAQ8bmrq8pjAgMtVmVqGrh13UhNQQ2jBp1My94po21cHCH2sYvH0k2f3GVglo%2FdscF58zZTwk7UUtfZw8w%2FwnzFulC7O%2FmRpqWuqHw6l5Tv9Cw57J59Bw%2BAs3x9gQMAz0V4102IRSxNH2CadLa%2FtEBJOeJiPKnxzDwTbSyDWaCPdOMdw8OtIQWlT7Xa4RREEsU9R%2BFETcf7HB%2BdtvicwMOTuzb4GOqUBN5JxkTOzgHrcO7FffjUnAlNqliW4XjB2aIoLs1Iy0PGddWUgqYhVaLtTnh%2F9UJOtiGpE6DmhZsTBsDvPrk3s10UP4q2biOh69RieIQN%2FrL9ojTNBjpuxedjihvs0lgpYz5memvlfRgfBF5PXv6lEX4mdlZ0tieslKz61cIxaSCbI1xF5ajg9G5WZXvRof3OPaU84kIvYhhjXMk4mfD60pvN1mG6d&X-Amz-Signature=0d07bab5382348c0d53a03447d9195c6996501eb4d7700647c26ab0c107bce97&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WAEGNY%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9SC6w3JMfqZC3ZFxuEK2j3S09G%2Fw7OkLAmmhcpPRl6AiEAv0DvgxJM6e5Ysfh6ydCOhWNoUMHyOLQGWip1B5SZMx8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIZ0mfCTCD%2Fz27cHyrcA%2FSPU46L%2B7IYjI2n6sBot4T%2B%2FsgrtyIIDK%2FBYIDEQsot5wmcfAawiqNdIOALFPjvXuxW4EYkKI4PmFYUjX0F64ZoF3ko3lAjSS4RCxMtwL0KrhFrM4QDpvADv46hqxxsIeTG17ULt1xvs0XPi%2ByuRzM7u3mKwN8D0MYW7Z0SlfhrJ88v0Fu2XgdmQ5CYHVe%2F6oNdhjZoUsAZrMP0CFIp3e1aybvoJZVrhO%2FRdug9T8L1cGMr%2FPJz1gN6yskEUdtHryDI0fmVXX%2FsqedN9PreelDRzPEopxHs3g%2BPht%2FcW6d650%2BgXJ%2FKjMhrM0eCCsHNQblo1%2BR8DIek6Sy3clgR94Zxgcsxf7iSNLsAfSd%2FbYnD19kwG70vTyF0y6I8n6e1uGDfAjbuWalxmZqL37oILDSro6OyurCqPeTrG79aQAQ8bmrq8pjAgMtVmVqGrh13UhNQQ2jBp1My94po21cHCH2sYvH0k2f3GVglo%2FdscF58zZTwk7UUtfZw8w%2FwnzFulC7O%2FmRpqWuqHw6l5Tv9Cw57J59Bw%2BAs3x9gQMAz0V4102IRSxNH2CadLa%2FtEBJOeJiPKnxzDwTbSyDWaCPdOMdw8OtIQWlT7Xa4RREEsU9R%2BFETcf7HB%2BdtvicwMOTuzb4GOqUBN5JxkTOzgHrcO7FffjUnAlNqliW4XjB2aIoLs1Iy0PGddWUgqYhVaLtTnh%2F9UJOtiGpE6DmhZsTBsDvPrk3s10UP4q2biOh69RieIQN%2FrL9ojTNBjpuxedjihvs0lgpYz5memvlfRgfBF5PXv6lEX4mdlZ0tieslKz61cIxaSCbI1xF5ajg9G5WZXvRof3OPaU84kIvYhhjXMk4mfD60pvN1mG6d&X-Amz-Signature=a5f75698a1a2d52c95bb8cfcb438056adab35dd166ed77f1e161bbb6e06bcfe5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WAEGNY%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9SC6w3JMfqZC3ZFxuEK2j3S09G%2Fw7OkLAmmhcpPRl6AiEAv0DvgxJM6e5Ysfh6ydCOhWNoUMHyOLQGWip1B5SZMx8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIZ0mfCTCD%2Fz27cHyrcA%2FSPU46L%2B7IYjI2n6sBot4T%2B%2FsgrtyIIDK%2FBYIDEQsot5wmcfAawiqNdIOALFPjvXuxW4EYkKI4PmFYUjX0F64ZoF3ko3lAjSS4RCxMtwL0KrhFrM4QDpvADv46hqxxsIeTG17ULt1xvs0XPi%2ByuRzM7u3mKwN8D0MYW7Z0SlfhrJ88v0Fu2XgdmQ5CYHVe%2F6oNdhjZoUsAZrMP0CFIp3e1aybvoJZVrhO%2FRdug9T8L1cGMr%2FPJz1gN6yskEUdtHryDI0fmVXX%2FsqedN9PreelDRzPEopxHs3g%2BPht%2FcW6d650%2BgXJ%2FKjMhrM0eCCsHNQblo1%2BR8DIek6Sy3clgR94Zxgcsxf7iSNLsAfSd%2FbYnD19kwG70vTyF0y6I8n6e1uGDfAjbuWalxmZqL37oILDSro6OyurCqPeTrG79aQAQ8bmrq8pjAgMtVmVqGrh13UhNQQ2jBp1My94po21cHCH2sYvH0k2f3GVglo%2FdscF58zZTwk7UUtfZw8w%2FwnzFulC7O%2FmRpqWuqHw6l5Tv9Cw57J59Bw%2BAs3x9gQMAz0V4102IRSxNH2CadLa%2FtEBJOeJiPKnxzDwTbSyDWaCPdOMdw8OtIQWlT7Xa4RREEsU9R%2BFETcf7HB%2BdtvicwMOTuzb4GOqUBN5JxkTOzgHrcO7FffjUnAlNqliW4XjB2aIoLs1Iy0PGddWUgqYhVaLtTnh%2F9UJOtiGpE6DmhZsTBsDvPrk3s10UP4q2biOh69RieIQN%2FrL9ojTNBjpuxedjihvs0lgpYz5memvlfRgfBF5PXv6lEX4mdlZ0tieslKz61cIxaSCbI1xF5ajg9G5WZXvRof3OPaU84kIvYhhjXMk4mfD60pvN1mG6d&X-Amz-Signature=4f9381175821ab78b3b4fbff174fdef8e3819cbdd2c4ab404ea278f2b283ef03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WAEGNY%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9SC6w3JMfqZC3ZFxuEK2j3S09G%2Fw7OkLAmmhcpPRl6AiEAv0DvgxJM6e5Ysfh6ydCOhWNoUMHyOLQGWip1B5SZMx8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIZ0mfCTCD%2Fz27cHyrcA%2FSPU46L%2B7IYjI2n6sBot4T%2B%2FsgrtyIIDK%2FBYIDEQsot5wmcfAawiqNdIOALFPjvXuxW4EYkKI4PmFYUjX0F64ZoF3ko3lAjSS4RCxMtwL0KrhFrM4QDpvADv46hqxxsIeTG17ULt1xvs0XPi%2ByuRzM7u3mKwN8D0MYW7Z0SlfhrJ88v0Fu2XgdmQ5CYHVe%2F6oNdhjZoUsAZrMP0CFIp3e1aybvoJZVrhO%2FRdug9T8L1cGMr%2FPJz1gN6yskEUdtHryDI0fmVXX%2FsqedN9PreelDRzPEopxHs3g%2BPht%2FcW6d650%2BgXJ%2FKjMhrM0eCCsHNQblo1%2BR8DIek6Sy3clgR94Zxgcsxf7iSNLsAfSd%2FbYnD19kwG70vTyF0y6I8n6e1uGDfAjbuWalxmZqL37oILDSro6OyurCqPeTrG79aQAQ8bmrq8pjAgMtVmVqGrh13UhNQQ2jBp1My94po21cHCH2sYvH0k2f3GVglo%2FdscF58zZTwk7UUtfZw8w%2FwnzFulC7O%2FmRpqWuqHw6l5Tv9Cw57J59Bw%2BAs3x9gQMAz0V4102IRSxNH2CadLa%2FtEBJOeJiPKnxzDwTbSyDWaCPdOMdw8OtIQWlT7Xa4RREEsU9R%2BFETcf7HB%2BdtvicwMOTuzb4GOqUBN5JxkTOzgHrcO7FffjUnAlNqliW4XjB2aIoLs1Iy0PGddWUgqYhVaLtTnh%2F9UJOtiGpE6DmhZsTBsDvPrk3s10UP4q2biOh69RieIQN%2FrL9ojTNBjpuxedjihvs0lgpYz5memvlfRgfBF5PXv6lEX4mdlZ0tieslKz61cIxaSCbI1xF5ajg9G5WZXvRof3OPaU84kIvYhhjXMk4mfD60pvN1mG6d&X-Amz-Signature=fa2fa48d5da9b7c0f2b5fe2f2da0837af26887a4264894a43b3149e43e3a5bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WAEGNY%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9SC6w3JMfqZC3ZFxuEK2j3S09G%2Fw7OkLAmmhcpPRl6AiEAv0DvgxJM6e5Ysfh6ydCOhWNoUMHyOLQGWip1B5SZMx8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIZ0mfCTCD%2Fz27cHyrcA%2FSPU46L%2B7IYjI2n6sBot4T%2B%2FsgrtyIIDK%2FBYIDEQsot5wmcfAawiqNdIOALFPjvXuxW4EYkKI4PmFYUjX0F64ZoF3ko3lAjSS4RCxMtwL0KrhFrM4QDpvADv46hqxxsIeTG17ULt1xvs0XPi%2ByuRzM7u3mKwN8D0MYW7Z0SlfhrJ88v0Fu2XgdmQ5CYHVe%2F6oNdhjZoUsAZrMP0CFIp3e1aybvoJZVrhO%2FRdug9T8L1cGMr%2FPJz1gN6yskEUdtHryDI0fmVXX%2FsqedN9PreelDRzPEopxHs3g%2BPht%2FcW6d650%2BgXJ%2FKjMhrM0eCCsHNQblo1%2BR8DIek6Sy3clgR94Zxgcsxf7iSNLsAfSd%2FbYnD19kwG70vTyF0y6I8n6e1uGDfAjbuWalxmZqL37oILDSro6OyurCqPeTrG79aQAQ8bmrq8pjAgMtVmVqGrh13UhNQQ2jBp1My94po21cHCH2sYvH0k2f3GVglo%2FdscF58zZTwk7UUtfZw8w%2FwnzFulC7O%2FmRpqWuqHw6l5Tv9Cw57J59Bw%2BAs3x9gQMAz0V4102IRSxNH2CadLa%2FtEBJOeJiPKnxzDwTbSyDWaCPdOMdw8OtIQWlT7Xa4RREEsU9R%2BFETcf7HB%2BdtvicwMOTuzb4GOqUBN5JxkTOzgHrcO7FffjUnAlNqliW4XjB2aIoLs1Iy0PGddWUgqYhVaLtTnh%2F9UJOtiGpE6DmhZsTBsDvPrk3s10UP4q2biOh69RieIQN%2FrL9ojTNBjpuxedjihvs0lgpYz5memvlfRgfBF5PXv6lEX4mdlZ0tieslKz61cIxaSCbI1xF5ajg9G5WZXvRof3OPaU84kIvYhhjXMk4mfD60pvN1mG6d&X-Amz-Signature=23c297fcf13c641914e70cb86efa2c6fb936eb9339b449dbb149d86b3c6a1217&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2WAEGNY%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9SC6w3JMfqZC3ZFxuEK2j3S09G%2Fw7OkLAmmhcpPRl6AiEAv0DvgxJM6e5Ysfh6ydCOhWNoUMHyOLQGWip1B5SZMx8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIZ0mfCTCD%2Fz27cHyrcA%2FSPU46L%2B7IYjI2n6sBot4T%2B%2FsgrtyIIDK%2FBYIDEQsot5wmcfAawiqNdIOALFPjvXuxW4EYkKI4PmFYUjX0F64ZoF3ko3lAjSS4RCxMtwL0KrhFrM4QDpvADv46hqxxsIeTG17ULt1xvs0XPi%2ByuRzM7u3mKwN8D0MYW7Z0SlfhrJ88v0Fu2XgdmQ5CYHVe%2F6oNdhjZoUsAZrMP0CFIp3e1aybvoJZVrhO%2FRdug9T8L1cGMr%2FPJz1gN6yskEUdtHryDI0fmVXX%2FsqedN9PreelDRzPEopxHs3g%2BPht%2FcW6d650%2BgXJ%2FKjMhrM0eCCsHNQblo1%2BR8DIek6Sy3clgR94Zxgcsxf7iSNLsAfSd%2FbYnD19kwG70vTyF0y6I8n6e1uGDfAjbuWalxmZqL37oILDSro6OyurCqPeTrG79aQAQ8bmrq8pjAgMtVmVqGrh13UhNQQ2jBp1My94po21cHCH2sYvH0k2f3GVglo%2FdscF58zZTwk7UUtfZw8w%2FwnzFulC7O%2FmRpqWuqHw6l5Tv9Cw57J59Bw%2BAs3x9gQMAz0V4102IRSxNH2CadLa%2FtEBJOeJiPKnxzDwTbSyDWaCPdOMdw8OtIQWlT7Xa4RREEsU9R%2BFETcf7HB%2BdtvicwMOTuzb4GOqUBN5JxkTOzgHrcO7FffjUnAlNqliW4XjB2aIoLs1Iy0PGddWUgqYhVaLtTnh%2F9UJOtiGpE6DmhZsTBsDvPrk3s10UP4q2biOh69RieIQN%2FrL9ojTNBjpuxedjihvs0lgpYz5memvlfRgfBF5PXv6lEX4mdlZ0tieslKz61cIxaSCbI1xF5ajg9G5WZXvRof3OPaU84kIvYhhjXMk4mfD60pvN1mG6d&X-Amz-Signature=c1692f2c3f763309c7fbd5446d0d32d1a21d6cd34c504d4a5101fc5c71341030&X-Amz-SignedHeaders=host&x-id=GetObject)
