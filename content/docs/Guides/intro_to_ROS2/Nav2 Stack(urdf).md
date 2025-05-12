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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTZJ7XY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBS6hjJJU3jPxQh7D43kt3nbZM%2Bf1IAhKfK1AWv%2BS%2BV%2FAiEA6P33cuQ0bDwfRHK63ebcqZURUN5ELkvA1k8h8u2R5KoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqeNegScAesrFKxfCrcA7T%2B9hGyd4hFyAgHfP30tOUKROUvZ17b7xyZSK82Y%2FZIoP5BxVxonWdeAo07mTyY4FqFzgoKfgDVMTfobslMmMaw4B1ewLTRY9i32hTH4R%2B8tNjt3TkC1mMbwsLxXu%2Bnkl1S0J4jpBJeuF3vwo%2BUIpkCf6r8DjLg8gHLZROo2UJgW%2BHcl3zguV5uy6qI%2FKuXXesYRIhxRxo3%2BvyszhqDzhw0gfGrvUPpWhDkciV2dcncsd9cY4m1b4%2B2EoJVFbtDxaDbWVDG0x%2FB84N28r8tVz1Cv%2BHtmEUOYEHjpi%2F0uKIkL4WLsa46ZutEsdWNkAFzBAP7GZfNpLrr44%2FhgKaprvKCvNZ%2Bwdf%2FXo7B40X9Rc4oaG8tdMR2jTh39ozYGDl84keeAMYI4McXJlGhLX5zfROeliDMErclE5%2FMLGvoopnupC35pjcl8eJf62uVC8g%2BWzI6tuuIi22WmMVxeSHM8XFIL0uLuEFGSWNK0o3RlZJJpt%2BCSM9j%2FY79qEasCzftxV0L6i0tWKLJ0zCMLypgrOh3rHsdraqRW%2B%2BbL2ccgepmRJVw9%2BpC4cHGMw6ez2N7LCXDQTClMWLFrRGorGms9Jng1t%2BUXsoQutDNqA3Ag6xBgh6XjASSD0XTlCrgMLLrhcEGOqUBqKYspZfSTpUTgiLOmlkW%2BFuu5pqtAZyhCSWOZHQzcF8C%2BtF14O7LD9DdQWbDA0C07tQrYVSbHUaWLN4OavQfU9bKey8waORSIAZZCSSKiArfFUG2hkOl4rq8pLfGcca8fKZJtJSpv%2BUO4e0IjEGvKybFcd0LgfGIJfNX36yLfkHgMdULP0CkGuuA5AgKRhxLS4zbGPq%2BgOo8QGA%2BQ%2FMUKPwmsa2e&X-Amz-Signature=e529e2d43080ca09e01e0b775a858508065d553ecc0f10d7321445fdd170dee7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTZJ7XY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBS6hjJJU3jPxQh7D43kt3nbZM%2Bf1IAhKfK1AWv%2BS%2BV%2FAiEA6P33cuQ0bDwfRHK63ebcqZURUN5ELkvA1k8h8u2R5KoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqeNegScAesrFKxfCrcA7T%2B9hGyd4hFyAgHfP30tOUKROUvZ17b7xyZSK82Y%2FZIoP5BxVxonWdeAo07mTyY4FqFzgoKfgDVMTfobslMmMaw4B1ewLTRY9i32hTH4R%2B8tNjt3TkC1mMbwsLxXu%2Bnkl1S0J4jpBJeuF3vwo%2BUIpkCf6r8DjLg8gHLZROo2UJgW%2BHcl3zguV5uy6qI%2FKuXXesYRIhxRxo3%2BvyszhqDzhw0gfGrvUPpWhDkciV2dcncsd9cY4m1b4%2B2EoJVFbtDxaDbWVDG0x%2FB84N28r8tVz1Cv%2BHtmEUOYEHjpi%2F0uKIkL4WLsa46ZutEsdWNkAFzBAP7GZfNpLrr44%2FhgKaprvKCvNZ%2Bwdf%2FXo7B40X9Rc4oaG8tdMR2jTh39ozYGDl84keeAMYI4McXJlGhLX5zfROeliDMErclE5%2FMLGvoopnupC35pjcl8eJf62uVC8g%2BWzI6tuuIi22WmMVxeSHM8XFIL0uLuEFGSWNK0o3RlZJJpt%2BCSM9j%2FY79qEasCzftxV0L6i0tWKLJ0zCMLypgrOh3rHsdraqRW%2B%2BbL2ccgepmRJVw9%2BpC4cHGMw6ez2N7LCXDQTClMWLFrRGorGms9Jng1t%2BUXsoQutDNqA3Ag6xBgh6XjASSD0XTlCrgMLLrhcEGOqUBqKYspZfSTpUTgiLOmlkW%2BFuu5pqtAZyhCSWOZHQzcF8C%2BtF14O7LD9DdQWbDA0C07tQrYVSbHUaWLN4OavQfU9bKey8waORSIAZZCSSKiArfFUG2hkOl4rq8pLfGcca8fKZJtJSpv%2BUO4e0IjEGvKybFcd0LgfGIJfNX36yLfkHgMdULP0CkGuuA5AgKRhxLS4zbGPq%2BgOo8QGA%2BQ%2FMUKPwmsa2e&X-Amz-Signature=33521c268b9f51bd1a730a29017424fd67926be0b03f748836a5ac12faa8e2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTZJ7XY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBS6hjJJU3jPxQh7D43kt3nbZM%2Bf1IAhKfK1AWv%2BS%2BV%2FAiEA6P33cuQ0bDwfRHK63ebcqZURUN5ELkvA1k8h8u2R5KoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqeNegScAesrFKxfCrcA7T%2B9hGyd4hFyAgHfP30tOUKROUvZ17b7xyZSK82Y%2FZIoP5BxVxonWdeAo07mTyY4FqFzgoKfgDVMTfobslMmMaw4B1ewLTRY9i32hTH4R%2B8tNjt3TkC1mMbwsLxXu%2Bnkl1S0J4jpBJeuF3vwo%2BUIpkCf6r8DjLg8gHLZROo2UJgW%2BHcl3zguV5uy6qI%2FKuXXesYRIhxRxo3%2BvyszhqDzhw0gfGrvUPpWhDkciV2dcncsd9cY4m1b4%2B2EoJVFbtDxaDbWVDG0x%2FB84N28r8tVz1Cv%2BHtmEUOYEHjpi%2F0uKIkL4WLsa46ZutEsdWNkAFzBAP7GZfNpLrr44%2FhgKaprvKCvNZ%2Bwdf%2FXo7B40X9Rc4oaG8tdMR2jTh39ozYGDl84keeAMYI4McXJlGhLX5zfROeliDMErclE5%2FMLGvoopnupC35pjcl8eJf62uVC8g%2BWzI6tuuIi22WmMVxeSHM8XFIL0uLuEFGSWNK0o3RlZJJpt%2BCSM9j%2FY79qEasCzftxV0L6i0tWKLJ0zCMLypgrOh3rHsdraqRW%2B%2BbL2ccgepmRJVw9%2BpC4cHGMw6ez2N7LCXDQTClMWLFrRGorGms9Jng1t%2BUXsoQutDNqA3Ag6xBgh6XjASSD0XTlCrgMLLrhcEGOqUBqKYspZfSTpUTgiLOmlkW%2BFuu5pqtAZyhCSWOZHQzcF8C%2BtF14O7LD9DdQWbDA0C07tQrYVSbHUaWLN4OavQfU9bKey8waORSIAZZCSSKiArfFUG2hkOl4rq8pLfGcca8fKZJtJSpv%2BUO4e0IjEGvKybFcd0LgfGIJfNX36yLfkHgMdULP0CkGuuA5AgKRhxLS4zbGPq%2BgOo8QGA%2BQ%2FMUKPwmsa2e&X-Amz-Signature=17dc07838623f0f0a2938984d22223b74eb06719247a2f54434d40d1757fa189&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTZJ7XY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBS6hjJJU3jPxQh7D43kt3nbZM%2Bf1IAhKfK1AWv%2BS%2BV%2FAiEA6P33cuQ0bDwfRHK63ebcqZURUN5ELkvA1k8h8u2R5KoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqeNegScAesrFKxfCrcA7T%2B9hGyd4hFyAgHfP30tOUKROUvZ17b7xyZSK82Y%2FZIoP5BxVxonWdeAo07mTyY4FqFzgoKfgDVMTfobslMmMaw4B1ewLTRY9i32hTH4R%2B8tNjt3TkC1mMbwsLxXu%2Bnkl1S0J4jpBJeuF3vwo%2BUIpkCf6r8DjLg8gHLZROo2UJgW%2BHcl3zguV5uy6qI%2FKuXXesYRIhxRxo3%2BvyszhqDzhw0gfGrvUPpWhDkciV2dcncsd9cY4m1b4%2B2EoJVFbtDxaDbWVDG0x%2FB84N28r8tVz1Cv%2BHtmEUOYEHjpi%2F0uKIkL4WLsa46ZutEsdWNkAFzBAP7GZfNpLrr44%2FhgKaprvKCvNZ%2Bwdf%2FXo7B40X9Rc4oaG8tdMR2jTh39ozYGDl84keeAMYI4McXJlGhLX5zfROeliDMErclE5%2FMLGvoopnupC35pjcl8eJf62uVC8g%2BWzI6tuuIi22WmMVxeSHM8XFIL0uLuEFGSWNK0o3RlZJJpt%2BCSM9j%2FY79qEasCzftxV0L6i0tWKLJ0zCMLypgrOh3rHsdraqRW%2B%2BbL2ccgepmRJVw9%2BpC4cHGMw6ez2N7LCXDQTClMWLFrRGorGms9Jng1t%2BUXsoQutDNqA3Ag6xBgh6XjASSD0XTlCrgMLLrhcEGOqUBqKYspZfSTpUTgiLOmlkW%2BFuu5pqtAZyhCSWOZHQzcF8C%2BtF14O7LD9DdQWbDA0C07tQrYVSbHUaWLN4OavQfU9bKey8waORSIAZZCSSKiArfFUG2hkOl4rq8pLfGcca8fKZJtJSpv%2BUO4e0IjEGvKybFcd0LgfGIJfNX36yLfkHgMdULP0CkGuuA5AgKRhxLS4zbGPq%2BgOo8QGA%2BQ%2FMUKPwmsa2e&X-Amz-Signature=ba6f5e46b4ab393143e4e8458c7bbf8dc8c97435858373f166593f3c9969d4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTZJ7XY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBS6hjJJU3jPxQh7D43kt3nbZM%2Bf1IAhKfK1AWv%2BS%2BV%2FAiEA6P33cuQ0bDwfRHK63ebcqZURUN5ELkvA1k8h8u2R5KoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqeNegScAesrFKxfCrcA7T%2B9hGyd4hFyAgHfP30tOUKROUvZ17b7xyZSK82Y%2FZIoP5BxVxonWdeAo07mTyY4FqFzgoKfgDVMTfobslMmMaw4B1ewLTRY9i32hTH4R%2B8tNjt3TkC1mMbwsLxXu%2Bnkl1S0J4jpBJeuF3vwo%2BUIpkCf6r8DjLg8gHLZROo2UJgW%2BHcl3zguV5uy6qI%2FKuXXesYRIhxRxo3%2BvyszhqDzhw0gfGrvUPpWhDkciV2dcncsd9cY4m1b4%2B2EoJVFbtDxaDbWVDG0x%2FB84N28r8tVz1Cv%2BHtmEUOYEHjpi%2F0uKIkL4WLsa46ZutEsdWNkAFzBAP7GZfNpLrr44%2FhgKaprvKCvNZ%2Bwdf%2FXo7B40X9Rc4oaG8tdMR2jTh39ozYGDl84keeAMYI4McXJlGhLX5zfROeliDMErclE5%2FMLGvoopnupC35pjcl8eJf62uVC8g%2BWzI6tuuIi22WmMVxeSHM8XFIL0uLuEFGSWNK0o3RlZJJpt%2BCSM9j%2FY79qEasCzftxV0L6i0tWKLJ0zCMLypgrOh3rHsdraqRW%2B%2BbL2ccgepmRJVw9%2BpC4cHGMw6ez2N7LCXDQTClMWLFrRGorGms9Jng1t%2BUXsoQutDNqA3Ag6xBgh6XjASSD0XTlCrgMLLrhcEGOqUBqKYspZfSTpUTgiLOmlkW%2BFuu5pqtAZyhCSWOZHQzcF8C%2BtF14O7LD9DdQWbDA0C07tQrYVSbHUaWLN4OavQfU9bKey8waORSIAZZCSSKiArfFUG2hkOl4rq8pLfGcca8fKZJtJSpv%2BUO4e0IjEGvKybFcd0LgfGIJfNX36yLfkHgMdULP0CkGuuA5AgKRhxLS4zbGPq%2BgOo8QGA%2BQ%2FMUKPwmsa2e&X-Amz-Signature=ec0b1c8dfc7f80510714030dee83c662756cf1eef714bfca08da1cca863dd5bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTZJ7XY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBS6hjJJU3jPxQh7D43kt3nbZM%2Bf1IAhKfK1AWv%2BS%2BV%2FAiEA6P33cuQ0bDwfRHK63ebcqZURUN5ELkvA1k8h8u2R5KoqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqeNegScAesrFKxfCrcA7T%2B9hGyd4hFyAgHfP30tOUKROUvZ17b7xyZSK82Y%2FZIoP5BxVxonWdeAo07mTyY4FqFzgoKfgDVMTfobslMmMaw4B1ewLTRY9i32hTH4R%2B8tNjt3TkC1mMbwsLxXu%2Bnkl1S0J4jpBJeuF3vwo%2BUIpkCf6r8DjLg8gHLZROo2UJgW%2BHcl3zguV5uy6qI%2FKuXXesYRIhxRxo3%2BvyszhqDzhw0gfGrvUPpWhDkciV2dcncsd9cY4m1b4%2B2EoJVFbtDxaDbWVDG0x%2FB84N28r8tVz1Cv%2BHtmEUOYEHjpi%2F0uKIkL4WLsa46ZutEsdWNkAFzBAP7GZfNpLrr44%2FhgKaprvKCvNZ%2Bwdf%2FXo7B40X9Rc4oaG8tdMR2jTh39ozYGDl84keeAMYI4McXJlGhLX5zfROeliDMErclE5%2FMLGvoopnupC35pjcl8eJf62uVC8g%2BWzI6tuuIi22WmMVxeSHM8XFIL0uLuEFGSWNK0o3RlZJJpt%2BCSM9j%2FY79qEasCzftxV0L6i0tWKLJ0zCMLypgrOh3rHsdraqRW%2B%2BbL2ccgepmRJVw9%2BpC4cHGMw6ez2N7LCXDQTClMWLFrRGorGms9Jng1t%2BUXsoQutDNqA3Ag6xBgh6XjASSD0XTlCrgMLLrhcEGOqUBqKYspZfSTpUTgiLOmlkW%2BFuu5pqtAZyhCSWOZHQzcF8C%2BtF14O7LD9DdQWbDA0C07tQrYVSbHUaWLN4OavQfU9bKey8waORSIAZZCSSKiArfFUG2hkOl4rq8pLfGcca8fKZJtJSpv%2BUO4e0IjEGvKybFcd0LgfGIJfNX36yLfkHgMdULP0CkGuuA5AgKRhxLS4zbGPq%2BgOo8QGA%2BQ%2FMUKPwmsa2e&X-Amz-Signature=7ad8b9f035cd6ef6bd079482c1cdf6a6e0831f8633fb40424885700885be031c&X-Amz-SignedHeaders=host&x-id=GetObject)
