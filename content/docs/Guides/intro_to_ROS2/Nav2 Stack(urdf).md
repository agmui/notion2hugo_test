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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPEBG2Y%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIENBeh8VqM8ltVUdSWC0VDXOG%2BossElIw0IKQ%2FlxhGKGAiEAwu%2BGSKK8HidEUf%2BJMcLtlntx8C0saamuEBMEgZtFItQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRRLt4UWGFnwAM25ircAzyGj0O3Cem7QWnh8ineFJNIQ7EWU798RDWCPcgS1A17PoVDVJP%2FVS4swBAqVc%2Bs2Z3UiD4MCC%2FXkVjamO6jNz2JAL3qFiXVB2XtiF%2FUcctW2Md9NcrsemuKmQqm7fLgFElHyKjiusuCtjjSAXWKyjLN9Q%2FVPoZGhr4NpTvHa5jmSSuz%2Bmp1oFtg2Rsqfc7bbYEYVTnn0QTht%2F13NQ0sG%2Ft9wtVkvD73KDJsML%2Fq5a7IKxMhXHTjR3w0YnqKIsVmlRd0P12JErhJz52p7EfbYFpYB%2BRCsmrnEuRRglbosb0%2Bf6ytdh%2BA%2BbxE5yjAjTeUeapfVuJGEeoMCKSHmf6FGJd1kBKf2gC0qbNU1flMCtDPxn6mGVeuxHfDNG4STr%2B5l8LLPg96HchyV8BHR70m9qydcV6L%2BVvs1UeeAVt0gbEAkOaVFuD3iD1tjfT4cGqnMbyAvSEpCj8h0M45AEN%2FiSOu79S9wXTbUZW2B%2Brv%2F2vMiiBgF5joH2dqB0GGuIKqCy1w9ZMbs%2FokqM61eSCkAbtEthCjbX82UsaWRMHIkW%2F%2FHtkbu1CBGca8ux%2Fjv3F0Bi1JKj1Lyi8raVNbe99%2FgnPFR7%2BJD4waw3onYJGfOkzsOaEde0hdQDRtz2isMKPu1cAGOqUBV3HfIaB%2B%2FKk265E5oJGIy%2F9ZM%2BUdG%2F0%2FNmXUsKgpjnT%2FrK6UgGbXt%2FQz71W0bo6%2FKubQL6emO%2F%2FCrPhj%2FAotYnjl7mvPNoVZ3QEc%2FCkOkffN2NYf45DL8ZL5roxWFFvVg5tiQIBAYVvvuTuMyD0gzoA2Es28SmZTERr7W%2BxU%2BhND1iwFwNxVOSC%2BeKPHVU5e03kP9y5%2F5rOhhHl2FNzpQbmqnJlu&X-Amz-Signature=2db6aad5286ddb591673667c34ec43c43a471a187707ab17c5b516cdd3f71ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPEBG2Y%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIENBeh8VqM8ltVUdSWC0VDXOG%2BossElIw0IKQ%2FlxhGKGAiEAwu%2BGSKK8HidEUf%2BJMcLtlntx8C0saamuEBMEgZtFItQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRRLt4UWGFnwAM25ircAzyGj0O3Cem7QWnh8ineFJNIQ7EWU798RDWCPcgS1A17PoVDVJP%2FVS4swBAqVc%2Bs2Z3UiD4MCC%2FXkVjamO6jNz2JAL3qFiXVB2XtiF%2FUcctW2Md9NcrsemuKmQqm7fLgFElHyKjiusuCtjjSAXWKyjLN9Q%2FVPoZGhr4NpTvHa5jmSSuz%2Bmp1oFtg2Rsqfc7bbYEYVTnn0QTht%2F13NQ0sG%2Ft9wtVkvD73KDJsML%2Fq5a7IKxMhXHTjR3w0YnqKIsVmlRd0P12JErhJz52p7EfbYFpYB%2BRCsmrnEuRRglbosb0%2Bf6ytdh%2BA%2BbxE5yjAjTeUeapfVuJGEeoMCKSHmf6FGJd1kBKf2gC0qbNU1flMCtDPxn6mGVeuxHfDNG4STr%2B5l8LLPg96HchyV8BHR70m9qydcV6L%2BVvs1UeeAVt0gbEAkOaVFuD3iD1tjfT4cGqnMbyAvSEpCj8h0M45AEN%2FiSOu79S9wXTbUZW2B%2Brv%2F2vMiiBgF5joH2dqB0GGuIKqCy1w9ZMbs%2FokqM61eSCkAbtEthCjbX82UsaWRMHIkW%2F%2FHtkbu1CBGca8ux%2Fjv3F0Bi1JKj1Lyi8raVNbe99%2FgnPFR7%2BJD4waw3onYJGfOkzsOaEde0hdQDRtz2isMKPu1cAGOqUBV3HfIaB%2B%2FKk265E5oJGIy%2F9ZM%2BUdG%2F0%2FNmXUsKgpjnT%2FrK6UgGbXt%2FQz71W0bo6%2FKubQL6emO%2F%2FCrPhj%2FAotYnjl7mvPNoVZ3QEc%2FCkOkffN2NYf45DL8ZL5roxWFFvVg5tiQIBAYVvvuTuMyD0gzoA2Es28SmZTERr7W%2BxU%2BhND1iwFwNxVOSC%2BeKPHVU5e03kP9y5%2F5rOhhHl2FNzpQbmqnJlu&X-Amz-Signature=495ca89a9a95f052a27c3ef8f59000b88b0854e3b6a69bf9e4fe9a763513d2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPEBG2Y%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIENBeh8VqM8ltVUdSWC0VDXOG%2BossElIw0IKQ%2FlxhGKGAiEAwu%2BGSKK8HidEUf%2BJMcLtlntx8C0saamuEBMEgZtFItQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRRLt4UWGFnwAM25ircAzyGj0O3Cem7QWnh8ineFJNIQ7EWU798RDWCPcgS1A17PoVDVJP%2FVS4swBAqVc%2Bs2Z3UiD4MCC%2FXkVjamO6jNz2JAL3qFiXVB2XtiF%2FUcctW2Md9NcrsemuKmQqm7fLgFElHyKjiusuCtjjSAXWKyjLN9Q%2FVPoZGhr4NpTvHa5jmSSuz%2Bmp1oFtg2Rsqfc7bbYEYVTnn0QTht%2F13NQ0sG%2Ft9wtVkvD73KDJsML%2Fq5a7IKxMhXHTjR3w0YnqKIsVmlRd0P12JErhJz52p7EfbYFpYB%2BRCsmrnEuRRglbosb0%2Bf6ytdh%2BA%2BbxE5yjAjTeUeapfVuJGEeoMCKSHmf6FGJd1kBKf2gC0qbNU1flMCtDPxn6mGVeuxHfDNG4STr%2B5l8LLPg96HchyV8BHR70m9qydcV6L%2BVvs1UeeAVt0gbEAkOaVFuD3iD1tjfT4cGqnMbyAvSEpCj8h0M45AEN%2FiSOu79S9wXTbUZW2B%2Brv%2F2vMiiBgF5joH2dqB0GGuIKqCy1w9ZMbs%2FokqM61eSCkAbtEthCjbX82UsaWRMHIkW%2F%2FHtkbu1CBGca8ux%2Fjv3F0Bi1JKj1Lyi8raVNbe99%2FgnPFR7%2BJD4waw3onYJGfOkzsOaEde0hdQDRtz2isMKPu1cAGOqUBV3HfIaB%2B%2FKk265E5oJGIy%2F9ZM%2BUdG%2F0%2FNmXUsKgpjnT%2FrK6UgGbXt%2FQz71W0bo6%2FKubQL6emO%2F%2FCrPhj%2FAotYnjl7mvPNoVZ3QEc%2FCkOkffN2NYf45DL8ZL5roxWFFvVg5tiQIBAYVvvuTuMyD0gzoA2Es28SmZTERr7W%2BxU%2BhND1iwFwNxVOSC%2BeKPHVU5e03kP9y5%2F5rOhhHl2FNzpQbmqnJlu&X-Amz-Signature=87c82a306b024d898fd25830ec7ce84fc22b40997e122b5b04a55ea2bba2737e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPEBG2Y%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIENBeh8VqM8ltVUdSWC0VDXOG%2BossElIw0IKQ%2FlxhGKGAiEAwu%2BGSKK8HidEUf%2BJMcLtlntx8C0saamuEBMEgZtFItQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRRLt4UWGFnwAM25ircAzyGj0O3Cem7QWnh8ineFJNIQ7EWU798RDWCPcgS1A17PoVDVJP%2FVS4swBAqVc%2Bs2Z3UiD4MCC%2FXkVjamO6jNz2JAL3qFiXVB2XtiF%2FUcctW2Md9NcrsemuKmQqm7fLgFElHyKjiusuCtjjSAXWKyjLN9Q%2FVPoZGhr4NpTvHa5jmSSuz%2Bmp1oFtg2Rsqfc7bbYEYVTnn0QTht%2F13NQ0sG%2Ft9wtVkvD73KDJsML%2Fq5a7IKxMhXHTjR3w0YnqKIsVmlRd0P12JErhJz52p7EfbYFpYB%2BRCsmrnEuRRglbosb0%2Bf6ytdh%2BA%2BbxE5yjAjTeUeapfVuJGEeoMCKSHmf6FGJd1kBKf2gC0qbNU1flMCtDPxn6mGVeuxHfDNG4STr%2B5l8LLPg96HchyV8BHR70m9qydcV6L%2BVvs1UeeAVt0gbEAkOaVFuD3iD1tjfT4cGqnMbyAvSEpCj8h0M45AEN%2FiSOu79S9wXTbUZW2B%2Brv%2F2vMiiBgF5joH2dqB0GGuIKqCy1w9ZMbs%2FokqM61eSCkAbtEthCjbX82UsaWRMHIkW%2F%2FHtkbu1CBGca8ux%2Fjv3F0Bi1JKj1Lyi8raVNbe99%2FgnPFR7%2BJD4waw3onYJGfOkzsOaEde0hdQDRtz2isMKPu1cAGOqUBV3HfIaB%2B%2FKk265E5oJGIy%2F9ZM%2BUdG%2F0%2FNmXUsKgpjnT%2FrK6UgGbXt%2FQz71W0bo6%2FKubQL6emO%2F%2FCrPhj%2FAotYnjl7mvPNoVZ3QEc%2FCkOkffN2NYf45DL8ZL5roxWFFvVg5tiQIBAYVvvuTuMyD0gzoA2Es28SmZTERr7W%2BxU%2BhND1iwFwNxVOSC%2BeKPHVU5e03kP9y5%2F5rOhhHl2FNzpQbmqnJlu&X-Amz-Signature=42ef8ef875ec4175c6a4de9ee54233fb5e413002281ca34fffacc8b9f19fed57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPEBG2Y%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIENBeh8VqM8ltVUdSWC0VDXOG%2BossElIw0IKQ%2FlxhGKGAiEAwu%2BGSKK8HidEUf%2BJMcLtlntx8C0saamuEBMEgZtFItQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRRLt4UWGFnwAM25ircAzyGj0O3Cem7QWnh8ineFJNIQ7EWU798RDWCPcgS1A17PoVDVJP%2FVS4swBAqVc%2Bs2Z3UiD4MCC%2FXkVjamO6jNz2JAL3qFiXVB2XtiF%2FUcctW2Md9NcrsemuKmQqm7fLgFElHyKjiusuCtjjSAXWKyjLN9Q%2FVPoZGhr4NpTvHa5jmSSuz%2Bmp1oFtg2Rsqfc7bbYEYVTnn0QTht%2F13NQ0sG%2Ft9wtVkvD73KDJsML%2Fq5a7IKxMhXHTjR3w0YnqKIsVmlRd0P12JErhJz52p7EfbYFpYB%2BRCsmrnEuRRglbosb0%2Bf6ytdh%2BA%2BbxE5yjAjTeUeapfVuJGEeoMCKSHmf6FGJd1kBKf2gC0qbNU1flMCtDPxn6mGVeuxHfDNG4STr%2B5l8LLPg96HchyV8BHR70m9qydcV6L%2BVvs1UeeAVt0gbEAkOaVFuD3iD1tjfT4cGqnMbyAvSEpCj8h0M45AEN%2FiSOu79S9wXTbUZW2B%2Brv%2F2vMiiBgF5joH2dqB0GGuIKqCy1w9ZMbs%2FokqM61eSCkAbtEthCjbX82UsaWRMHIkW%2F%2FHtkbu1CBGca8ux%2Fjv3F0Bi1JKj1Lyi8raVNbe99%2FgnPFR7%2BJD4waw3onYJGfOkzsOaEde0hdQDRtz2isMKPu1cAGOqUBV3HfIaB%2B%2FKk265E5oJGIy%2F9ZM%2BUdG%2F0%2FNmXUsKgpjnT%2FrK6UgGbXt%2FQz71W0bo6%2FKubQL6emO%2F%2FCrPhj%2FAotYnjl7mvPNoVZ3QEc%2FCkOkffN2NYf45DL8ZL5roxWFFvVg5tiQIBAYVvvuTuMyD0gzoA2Es28SmZTERr7W%2BxU%2BhND1iwFwNxVOSC%2BeKPHVU5e03kP9y5%2F5rOhhHl2FNzpQbmqnJlu&X-Amz-Signature=f5fe815a6baf0c9de10c0c5bd61229ff07e1436ada2eb56fca4091f02d3c7e57&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WPEBG2Y%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIENBeh8VqM8ltVUdSWC0VDXOG%2BossElIw0IKQ%2FlxhGKGAiEAwu%2BGSKK8HidEUf%2BJMcLtlntx8C0saamuEBMEgZtFItQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRRLt4UWGFnwAM25ircAzyGj0O3Cem7QWnh8ineFJNIQ7EWU798RDWCPcgS1A17PoVDVJP%2FVS4swBAqVc%2Bs2Z3UiD4MCC%2FXkVjamO6jNz2JAL3qFiXVB2XtiF%2FUcctW2Md9NcrsemuKmQqm7fLgFElHyKjiusuCtjjSAXWKyjLN9Q%2FVPoZGhr4NpTvHa5jmSSuz%2Bmp1oFtg2Rsqfc7bbYEYVTnn0QTht%2F13NQ0sG%2Ft9wtVkvD73KDJsML%2Fq5a7IKxMhXHTjR3w0YnqKIsVmlRd0P12JErhJz52p7EfbYFpYB%2BRCsmrnEuRRglbosb0%2Bf6ytdh%2BA%2BbxE5yjAjTeUeapfVuJGEeoMCKSHmf6FGJd1kBKf2gC0qbNU1flMCtDPxn6mGVeuxHfDNG4STr%2B5l8LLPg96HchyV8BHR70m9qydcV6L%2BVvs1UeeAVt0gbEAkOaVFuD3iD1tjfT4cGqnMbyAvSEpCj8h0M45AEN%2FiSOu79S9wXTbUZW2B%2Brv%2F2vMiiBgF5joH2dqB0GGuIKqCy1w9ZMbs%2FokqM61eSCkAbtEthCjbX82UsaWRMHIkW%2F%2FHtkbu1CBGca8ux%2Fjv3F0Bi1JKj1Lyi8raVNbe99%2FgnPFR7%2BJD4waw3onYJGfOkzsOaEde0hdQDRtz2isMKPu1cAGOqUBV3HfIaB%2B%2FKk265E5oJGIy%2F9ZM%2BUdG%2F0%2FNmXUsKgpjnT%2FrK6UgGbXt%2FQz71W0bo6%2FKubQL6emO%2F%2FCrPhj%2FAotYnjl7mvPNoVZ3QEc%2FCkOkffN2NYf45DL8ZL5roxWFFvVg5tiQIBAYVvvuTuMyD0gzoA2Es28SmZTERr7W%2BxU%2BhND1iwFwNxVOSC%2BeKPHVU5e03kP9y5%2F5rOhhHl2FNzpQbmqnJlu&X-Amz-Signature=94a343d4ca493bfedff6623690ebbdd07b9dc19223f71739b279fec2d39a4089&X-Amz-SignedHeaders=host&x-id=GetObject)
