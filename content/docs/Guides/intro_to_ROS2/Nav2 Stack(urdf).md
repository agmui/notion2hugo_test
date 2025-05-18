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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W35SUI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKR%2FBZCAIayZT7lWbRYszjZIeGb3HMMVmnWPpb4h3HEgIhAMJFf9XmGcw8BWMf2Z%2Fcqb6U2rMOAox0KZN96h4LSR8PKv8DCHAQABoMNjM3NDIzMTgzODA1Igyf3e5dNspxFLGdePcq3AOjscrgEy1JgGFX95Bct0D29DUtOubuw8fa0QHZ%2BVy4FeZne5ldD0cXKqBZQK1AH8XwbbcG9ePG7HEnPVIQr9JGhdBpLKkQnJsDHeJm5WfT7yFu4Dr3xDNrz4wtpTGxY9oJUKNnuVNL7vTVCFBC%2BozvXwNnUNF7uZRGZoFCT5BoEI7zN2D66LWOcMXWcd8H9JrRIEH06kNvPXLFljqUgbpkilwO97CXVXJXygFpm1qkiy76HPVVEi3jxF6q%2FZPDH5p6Tj8Q15AnGUhT7VYNxjLNTSWRe29m75bQ1UsUJMnWOgSAyaAl8dQg7nLuu470YIh0EFYsgczWxXZ%2Br3WluVcwMC%2FAVvPm%2BasKfkzJnspndaUy3iQwIxpPcUya3pcy4CVHt%2BIQylj1k0odIP505pCG28RelEq4V19j%2BX%2B3oVCkZOl1%2BG7%2BmVAJce0zvlbzJSm6buyJZhxM%2BS5d0EMScD5YQGhsN6%2FNyChhk3obcjbYmD4aV1JqgSWquOdUyOR3WPeUZ7JwabZhXgulzxH8%2BKriYzRreMHzWkhdifwLQfjK3%2BXgLiU%2BuWot60qLndUii%2Fn1VcsLsG2hrcxtEpH7wtrrgBMWW54JRJzw%2Bb0gX5zOCi40EpQZw93mEGUOZzDq%2FKXBBjqkAVDRCmT%2BOsIcPv5sUmqcGFYKfW6LWcjLBCBHFtxfM0fsEsCi5NB3PCWO%2B2VJCDjQteprYAqW2z%2FlhLUM0cxIL7DIJuP4Jr35ne7RyLqvrPxJpB2S7pEKbeLzF6mkZeIt0afCy4Syz2LhSpcbzG8EveKqzOW3T3cvNjpi5UCUckauIComDcaXIZYd14vXHRL24vlaIFUTI%2BnsfKBombtNeqUIworN&X-Amz-Signature=19c219782dfe3c97f5462de1dcf5c92f13422e568fcc242d0e774feb258096dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W35SUI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKR%2FBZCAIayZT7lWbRYszjZIeGb3HMMVmnWPpb4h3HEgIhAMJFf9XmGcw8BWMf2Z%2Fcqb6U2rMOAox0KZN96h4LSR8PKv8DCHAQABoMNjM3NDIzMTgzODA1Igyf3e5dNspxFLGdePcq3AOjscrgEy1JgGFX95Bct0D29DUtOubuw8fa0QHZ%2BVy4FeZne5ldD0cXKqBZQK1AH8XwbbcG9ePG7HEnPVIQr9JGhdBpLKkQnJsDHeJm5WfT7yFu4Dr3xDNrz4wtpTGxY9oJUKNnuVNL7vTVCFBC%2BozvXwNnUNF7uZRGZoFCT5BoEI7zN2D66LWOcMXWcd8H9JrRIEH06kNvPXLFljqUgbpkilwO97CXVXJXygFpm1qkiy76HPVVEi3jxF6q%2FZPDH5p6Tj8Q15AnGUhT7VYNxjLNTSWRe29m75bQ1UsUJMnWOgSAyaAl8dQg7nLuu470YIh0EFYsgczWxXZ%2Br3WluVcwMC%2FAVvPm%2BasKfkzJnspndaUy3iQwIxpPcUya3pcy4CVHt%2BIQylj1k0odIP505pCG28RelEq4V19j%2BX%2B3oVCkZOl1%2BG7%2BmVAJce0zvlbzJSm6buyJZhxM%2BS5d0EMScD5YQGhsN6%2FNyChhk3obcjbYmD4aV1JqgSWquOdUyOR3WPeUZ7JwabZhXgulzxH8%2BKriYzRreMHzWkhdifwLQfjK3%2BXgLiU%2BuWot60qLndUii%2Fn1VcsLsG2hrcxtEpH7wtrrgBMWW54JRJzw%2Bb0gX5zOCi40EpQZw93mEGUOZzDq%2FKXBBjqkAVDRCmT%2BOsIcPv5sUmqcGFYKfW6LWcjLBCBHFtxfM0fsEsCi5NB3PCWO%2B2VJCDjQteprYAqW2z%2FlhLUM0cxIL7DIJuP4Jr35ne7RyLqvrPxJpB2S7pEKbeLzF6mkZeIt0afCy4Syz2LhSpcbzG8EveKqzOW3T3cvNjpi5UCUckauIComDcaXIZYd14vXHRL24vlaIFUTI%2BnsfKBombtNeqUIworN&X-Amz-Signature=878ed6b5511096088c7afcbd2756b7de4e5e9cc68e24d0b172dc19e0fc494958&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W35SUI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKR%2FBZCAIayZT7lWbRYszjZIeGb3HMMVmnWPpb4h3HEgIhAMJFf9XmGcw8BWMf2Z%2Fcqb6U2rMOAox0KZN96h4LSR8PKv8DCHAQABoMNjM3NDIzMTgzODA1Igyf3e5dNspxFLGdePcq3AOjscrgEy1JgGFX95Bct0D29DUtOubuw8fa0QHZ%2BVy4FeZne5ldD0cXKqBZQK1AH8XwbbcG9ePG7HEnPVIQr9JGhdBpLKkQnJsDHeJm5WfT7yFu4Dr3xDNrz4wtpTGxY9oJUKNnuVNL7vTVCFBC%2BozvXwNnUNF7uZRGZoFCT5BoEI7zN2D66LWOcMXWcd8H9JrRIEH06kNvPXLFljqUgbpkilwO97CXVXJXygFpm1qkiy76HPVVEi3jxF6q%2FZPDH5p6Tj8Q15AnGUhT7VYNxjLNTSWRe29m75bQ1UsUJMnWOgSAyaAl8dQg7nLuu470YIh0EFYsgczWxXZ%2Br3WluVcwMC%2FAVvPm%2BasKfkzJnspndaUy3iQwIxpPcUya3pcy4CVHt%2BIQylj1k0odIP505pCG28RelEq4V19j%2BX%2B3oVCkZOl1%2BG7%2BmVAJce0zvlbzJSm6buyJZhxM%2BS5d0EMScD5YQGhsN6%2FNyChhk3obcjbYmD4aV1JqgSWquOdUyOR3WPeUZ7JwabZhXgulzxH8%2BKriYzRreMHzWkhdifwLQfjK3%2BXgLiU%2BuWot60qLndUii%2Fn1VcsLsG2hrcxtEpH7wtrrgBMWW54JRJzw%2Bb0gX5zOCi40EpQZw93mEGUOZzDq%2FKXBBjqkAVDRCmT%2BOsIcPv5sUmqcGFYKfW6LWcjLBCBHFtxfM0fsEsCi5NB3PCWO%2B2VJCDjQteprYAqW2z%2FlhLUM0cxIL7DIJuP4Jr35ne7RyLqvrPxJpB2S7pEKbeLzF6mkZeIt0afCy4Syz2LhSpcbzG8EveKqzOW3T3cvNjpi5UCUckauIComDcaXIZYd14vXHRL24vlaIFUTI%2BnsfKBombtNeqUIworN&X-Amz-Signature=ebc76c9544045c2bfcace1df6cffcb1fab2a79f1375ef78c9b22f16bc878a07e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W35SUI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKR%2FBZCAIayZT7lWbRYszjZIeGb3HMMVmnWPpb4h3HEgIhAMJFf9XmGcw8BWMf2Z%2Fcqb6U2rMOAox0KZN96h4LSR8PKv8DCHAQABoMNjM3NDIzMTgzODA1Igyf3e5dNspxFLGdePcq3AOjscrgEy1JgGFX95Bct0D29DUtOubuw8fa0QHZ%2BVy4FeZne5ldD0cXKqBZQK1AH8XwbbcG9ePG7HEnPVIQr9JGhdBpLKkQnJsDHeJm5WfT7yFu4Dr3xDNrz4wtpTGxY9oJUKNnuVNL7vTVCFBC%2BozvXwNnUNF7uZRGZoFCT5BoEI7zN2D66LWOcMXWcd8H9JrRIEH06kNvPXLFljqUgbpkilwO97CXVXJXygFpm1qkiy76HPVVEi3jxF6q%2FZPDH5p6Tj8Q15AnGUhT7VYNxjLNTSWRe29m75bQ1UsUJMnWOgSAyaAl8dQg7nLuu470YIh0EFYsgczWxXZ%2Br3WluVcwMC%2FAVvPm%2BasKfkzJnspndaUy3iQwIxpPcUya3pcy4CVHt%2BIQylj1k0odIP505pCG28RelEq4V19j%2BX%2B3oVCkZOl1%2BG7%2BmVAJce0zvlbzJSm6buyJZhxM%2BS5d0EMScD5YQGhsN6%2FNyChhk3obcjbYmD4aV1JqgSWquOdUyOR3WPeUZ7JwabZhXgulzxH8%2BKriYzRreMHzWkhdifwLQfjK3%2BXgLiU%2BuWot60qLndUii%2Fn1VcsLsG2hrcxtEpH7wtrrgBMWW54JRJzw%2Bb0gX5zOCi40EpQZw93mEGUOZzDq%2FKXBBjqkAVDRCmT%2BOsIcPv5sUmqcGFYKfW6LWcjLBCBHFtxfM0fsEsCi5NB3PCWO%2B2VJCDjQteprYAqW2z%2FlhLUM0cxIL7DIJuP4Jr35ne7RyLqvrPxJpB2S7pEKbeLzF6mkZeIt0afCy4Syz2LhSpcbzG8EveKqzOW3T3cvNjpi5UCUckauIComDcaXIZYd14vXHRL24vlaIFUTI%2BnsfKBombtNeqUIworN&X-Amz-Signature=d7d20362df8215fc38b6ff0ea3921dcbfb851f5fe311cca6077a36faf0cd5206&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W35SUI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKR%2FBZCAIayZT7lWbRYszjZIeGb3HMMVmnWPpb4h3HEgIhAMJFf9XmGcw8BWMf2Z%2Fcqb6U2rMOAox0KZN96h4LSR8PKv8DCHAQABoMNjM3NDIzMTgzODA1Igyf3e5dNspxFLGdePcq3AOjscrgEy1JgGFX95Bct0D29DUtOubuw8fa0QHZ%2BVy4FeZne5ldD0cXKqBZQK1AH8XwbbcG9ePG7HEnPVIQr9JGhdBpLKkQnJsDHeJm5WfT7yFu4Dr3xDNrz4wtpTGxY9oJUKNnuVNL7vTVCFBC%2BozvXwNnUNF7uZRGZoFCT5BoEI7zN2D66LWOcMXWcd8H9JrRIEH06kNvPXLFljqUgbpkilwO97CXVXJXygFpm1qkiy76HPVVEi3jxF6q%2FZPDH5p6Tj8Q15AnGUhT7VYNxjLNTSWRe29m75bQ1UsUJMnWOgSAyaAl8dQg7nLuu470YIh0EFYsgczWxXZ%2Br3WluVcwMC%2FAVvPm%2BasKfkzJnspndaUy3iQwIxpPcUya3pcy4CVHt%2BIQylj1k0odIP505pCG28RelEq4V19j%2BX%2B3oVCkZOl1%2BG7%2BmVAJce0zvlbzJSm6buyJZhxM%2BS5d0EMScD5YQGhsN6%2FNyChhk3obcjbYmD4aV1JqgSWquOdUyOR3WPeUZ7JwabZhXgulzxH8%2BKriYzRreMHzWkhdifwLQfjK3%2BXgLiU%2BuWot60qLndUii%2Fn1VcsLsG2hrcxtEpH7wtrrgBMWW54JRJzw%2Bb0gX5zOCi40EpQZw93mEGUOZzDq%2FKXBBjqkAVDRCmT%2BOsIcPv5sUmqcGFYKfW6LWcjLBCBHFtxfM0fsEsCi5NB3PCWO%2B2VJCDjQteprYAqW2z%2FlhLUM0cxIL7DIJuP4Jr35ne7RyLqvrPxJpB2S7pEKbeLzF6mkZeIt0afCy4Syz2LhSpcbzG8EveKqzOW3T3cvNjpi5UCUckauIComDcaXIZYd14vXHRL24vlaIFUTI%2BnsfKBombtNeqUIworN&X-Amz-Signature=2e0e297a98d03474772650875c92e5825357d527a5115d9ba26768dabe29d28d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663W35SUI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKR%2FBZCAIayZT7lWbRYszjZIeGb3HMMVmnWPpb4h3HEgIhAMJFf9XmGcw8BWMf2Z%2Fcqb6U2rMOAox0KZN96h4LSR8PKv8DCHAQABoMNjM3NDIzMTgzODA1Igyf3e5dNspxFLGdePcq3AOjscrgEy1JgGFX95Bct0D29DUtOubuw8fa0QHZ%2BVy4FeZne5ldD0cXKqBZQK1AH8XwbbcG9ePG7HEnPVIQr9JGhdBpLKkQnJsDHeJm5WfT7yFu4Dr3xDNrz4wtpTGxY9oJUKNnuVNL7vTVCFBC%2BozvXwNnUNF7uZRGZoFCT5BoEI7zN2D66LWOcMXWcd8H9JrRIEH06kNvPXLFljqUgbpkilwO97CXVXJXygFpm1qkiy76HPVVEi3jxF6q%2FZPDH5p6Tj8Q15AnGUhT7VYNxjLNTSWRe29m75bQ1UsUJMnWOgSAyaAl8dQg7nLuu470YIh0EFYsgczWxXZ%2Br3WluVcwMC%2FAVvPm%2BasKfkzJnspndaUy3iQwIxpPcUya3pcy4CVHt%2BIQylj1k0odIP505pCG28RelEq4V19j%2BX%2B3oVCkZOl1%2BG7%2BmVAJce0zvlbzJSm6buyJZhxM%2BS5d0EMScD5YQGhsN6%2FNyChhk3obcjbYmD4aV1JqgSWquOdUyOR3WPeUZ7JwabZhXgulzxH8%2BKriYzRreMHzWkhdifwLQfjK3%2BXgLiU%2BuWot60qLndUii%2Fn1VcsLsG2hrcxtEpH7wtrrgBMWW54JRJzw%2Bb0gX5zOCi40EpQZw93mEGUOZzDq%2FKXBBjqkAVDRCmT%2BOsIcPv5sUmqcGFYKfW6LWcjLBCBHFtxfM0fsEsCi5NB3PCWO%2B2VJCDjQteprYAqW2z%2FlhLUM0cxIL7DIJuP4Jr35ne7RyLqvrPxJpB2S7pEKbeLzF6mkZeIt0afCy4Syz2LhSpcbzG8EveKqzOW3T3cvNjpi5UCUckauIComDcaXIZYd14vXHRL24vlaIFUTI%2BnsfKBombtNeqUIworN&X-Amz-Signature=93e674d3f8363591e06d3b009caca767b8c2e4e5ae7901de403976b86e0e602b&X-Amz-SignedHeaders=host&x-id=GetObject)
