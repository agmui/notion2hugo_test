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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INYT2P2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHULwLzE4LyZe0YSt%2FTZEiCraVzRNnfogDc6sXa%2BTyPgIhALuafAC0ObBUMqAeB6aJpRexFYKdX5ICakoCtSTpZqADKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9iiBu1F8ORjNxQYkq3APVjft6lCaD5UFupsH0l34xKPcyg1m8JsDQt32Hq8GEWHyojsrbGDVpCqjdJgDaK13ZIVEIpEcLtxuMGCEkwoKdDto9Zu24GFQ7xc9IfNdv0Hr4lt9dF7b6kXeNKUKandqqxbCohmfVWv78C8DJJzVL0KPZc2%2FHf3jKfLXnhzLlwcAw5vkdUNz5bcYJHBpYsNPOgAjIe8w%2FnuGvl0giq%2B90K%2BfbwASJogQ3Cbm3CZht5hqKNs4eswDYUiTHp6Wc1f7k29C0VOndDYlCCmoa4bvBw5hNnKcJFam9Ujm%2FshgcfmHlb4djNa4UfcTok4wdWr%2FF3WB%2BqndlzU2WuHRKBICfqUIAivtHcmTDe%2B356ATUHnuOyrh39%2Fw4IR7%2FqAVddffUOwYjfQoz%2B2eDvh%2F64bAQyOoE4bPTz5jEqv0zWGH3CaRKLez9ykCK1qPtR8a6dbo4G8t9an0TbXtwZ85PO3B6sW98AZVczhNOVQRxrdkO5wCtIBiK7iZ0wkU8V604X8s5wFaLZIDM1dRtVvzvodqtuwjv6p9ySNWwFaYU2SpXqYA70Abgr%2BOAIFX%2BKTeojgkawaxaxHs8R0SMc4io2UJQcVAbSHhA727nNIoBfxNe80AZR0ixJF25KzqJejDemIy%2FBjqkAevhtu4xA5CH74w4uv7QDpkAy3IpovnbtAEpY2zRoJzVRvvSyHQLXXoR2Ee5scO4gJ5UqMN4gHgZ%2FwQdPaPDygRVfueUqG%2FwvxXZkx1huF9zUeytRTqk%2Fi3B1pFGr9f5qIG81r0DbH2pfVWGhaCZgupD%2Foi7LhSO19eU77apXAhOn7IE0quhlA8l3ZV5brSphdjDx81k1dRA%2FjOx74PBPfTsKdgz&X-Amz-Signature=0f9606594c473ef40095bfd3bc988e854e849ec8e6745eb24bd5f4ae548c3d55&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INYT2P2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHULwLzE4LyZe0YSt%2FTZEiCraVzRNnfogDc6sXa%2BTyPgIhALuafAC0ObBUMqAeB6aJpRexFYKdX5ICakoCtSTpZqADKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9iiBu1F8ORjNxQYkq3APVjft6lCaD5UFupsH0l34xKPcyg1m8JsDQt32Hq8GEWHyojsrbGDVpCqjdJgDaK13ZIVEIpEcLtxuMGCEkwoKdDto9Zu24GFQ7xc9IfNdv0Hr4lt9dF7b6kXeNKUKandqqxbCohmfVWv78C8DJJzVL0KPZc2%2FHf3jKfLXnhzLlwcAw5vkdUNz5bcYJHBpYsNPOgAjIe8w%2FnuGvl0giq%2B90K%2BfbwASJogQ3Cbm3CZht5hqKNs4eswDYUiTHp6Wc1f7k29C0VOndDYlCCmoa4bvBw5hNnKcJFam9Ujm%2FshgcfmHlb4djNa4UfcTok4wdWr%2FF3WB%2BqndlzU2WuHRKBICfqUIAivtHcmTDe%2B356ATUHnuOyrh39%2Fw4IR7%2FqAVddffUOwYjfQoz%2B2eDvh%2F64bAQyOoE4bPTz5jEqv0zWGH3CaRKLez9ykCK1qPtR8a6dbo4G8t9an0TbXtwZ85PO3B6sW98AZVczhNOVQRxrdkO5wCtIBiK7iZ0wkU8V604X8s5wFaLZIDM1dRtVvzvodqtuwjv6p9ySNWwFaYU2SpXqYA70Abgr%2BOAIFX%2BKTeojgkawaxaxHs8R0SMc4io2UJQcVAbSHhA727nNIoBfxNe80AZR0ixJF25KzqJejDemIy%2FBjqkAevhtu4xA5CH74w4uv7QDpkAy3IpovnbtAEpY2zRoJzVRvvSyHQLXXoR2Ee5scO4gJ5UqMN4gHgZ%2FwQdPaPDygRVfueUqG%2FwvxXZkx1huF9zUeytRTqk%2Fi3B1pFGr9f5qIG81r0DbH2pfVWGhaCZgupD%2Foi7LhSO19eU77apXAhOn7IE0quhlA8l3ZV5brSphdjDx81k1dRA%2FjOx74PBPfTsKdgz&X-Amz-Signature=4318b365f745d3a6e449a1a3e6379de9c9da5bd3146d92248d0c44821a2b23e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INYT2P2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHULwLzE4LyZe0YSt%2FTZEiCraVzRNnfogDc6sXa%2BTyPgIhALuafAC0ObBUMqAeB6aJpRexFYKdX5ICakoCtSTpZqADKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9iiBu1F8ORjNxQYkq3APVjft6lCaD5UFupsH0l34xKPcyg1m8JsDQt32Hq8GEWHyojsrbGDVpCqjdJgDaK13ZIVEIpEcLtxuMGCEkwoKdDto9Zu24GFQ7xc9IfNdv0Hr4lt9dF7b6kXeNKUKandqqxbCohmfVWv78C8DJJzVL0KPZc2%2FHf3jKfLXnhzLlwcAw5vkdUNz5bcYJHBpYsNPOgAjIe8w%2FnuGvl0giq%2B90K%2BfbwASJogQ3Cbm3CZht5hqKNs4eswDYUiTHp6Wc1f7k29C0VOndDYlCCmoa4bvBw5hNnKcJFam9Ujm%2FshgcfmHlb4djNa4UfcTok4wdWr%2FF3WB%2BqndlzU2WuHRKBICfqUIAivtHcmTDe%2B356ATUHnuOyrh39%2Fw4IR7%2FqAVddffUOwYjfQoz%2B2eDvh%2F64bAQyOoE4bPTz5jEqv0zWGH3CaRKLez9ykCK1qPtR8a6dbo4G8t9an0TbXtwZ85PO3B6sW98AZVczhNOVQRxrdkO5wCtIBiK7iZ0wkU8V604X8s5wFaLZIDM1dRtVvzvodqtuwjv6p9ySNWwFaYU2SpXqYA70Abgr%2BOAIFX%2BKTeojgkawaxaxHs8R0SMc4io2UJQcVAbSHhA727nNIoBfxNe80AZR0ixJF25KzqJejDemIy%2FBjqkAevhtu4xA5CH74w4uv7QDpkAy3IpovnbtAEpY2zRoJzVRvvSyHQLXXoR2Ee5scO4gJ5UqMN4gHgZ%2FwQdPaPDygRVfueUqG%2FwvxXZkx1huF9zUeytRTqk%2Fi3B1pFGr9f5qIG81r0DbH2pfVWGhaCZgupD%2Foi7LhSO19eU77apXAhOn7IE0quhlA8l3ZV5brSphdjDx81k1dRA%2FjOx74PBPfTsKdgz&X-Amz-Signature=4d1c21a221a08db782f1c791eac0988c50dc2e3dc9c10c5b593b5ebaab2ddbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INYT2P2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHULwLzE4LyZe0YSt%2FTZEiCraVzRNnfogDc6sXa%2BTyPgIhALuafAC0ObBUMqAeB6aJpRexFYKdX5ICakoCtSTpZqADKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9iiBu1F8ORjNxQYkq3APVjft6lCaD5UFupsH0l34xKPcyg1m8JsDQt32Hq8GEWHyojsrbGDVpCqjdJgDaK13ZIVEIpEcLtxuMGCEkwoKdDto9Zu24GFQ7xc9IfNdv0Hr4lt9dF7b6kXeNKUKandqqxbCohmfVWv78C8DJJzVL0KPZc2%2FHf3jKfLXnhzLlwcAw5vkdUNz5bcYJHBpYsNPOgAjIe8w%2FnuGvl0giq%2B90K%2BfbwASJogQ3Cbm3CZht5hqKNs4eswDYUiTHp6Wc1f7k29C0VOndDYlCCmoa4bvBw5hNnKcJFam9Ujm%2FshgcfmHlb4djNa4UfcTok4wdWr%2FF3WB%2BqndlzU2WuHRKBICfqUIAivtHcmTDe%2B356ATUHnuOyrh39%2Fw4IR7%2FqAVddffUOwYjfQoz%2B2eDvh%2F64bAQyOoE4bPTz5jEqv0zWGH3CaRKLez9ykCK1qPtR8a6dbo4G8t9an0TbXtwZ85PO3B6sW98AZVczhNOVQRxrdkO5wCtIBiK7iZ0wkU8V604X8s5wFaLZIDM1dRtVvzvodqtuwjv6p9ySNWwFaYU2SpXqYA70Abgr%2BOAIFX%2BKTeojgkawaxaxHs8R0SMc4io2UJQcVAbSHhA727nNIoBfxNe80AZR0ixJF25KzqJejDemIy%2FBjqkAevhtu4xA5CH74w4uv7QDpkAy3IpovnbtAEpY2zRoJzVRvvSyHQLXXoR2Ee5scO4gJ5UqMN4gHgZ%2FwQdPaPDygRVfueUqG%2FwvxXZkx1huF9zUeytRTqk%2Fi3B1pFGr9f5qIG81r0DbH2pfVWGhaCZgupD%2Foi7LhSO19eU77apXAhOn7IE0quhlA8l3ZV5brSphdjDx81k1dRA%2FjOx74PBPfTsKdgz&X-Amz-Signature=403acc8a5a766fbafb5772807cd6372ec7c809b618d1a82860e36a5c94d9a252&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INYT2P2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHULwLzE4LyZe0YSt%2FTZEiCraVzRNnfogDc6sXa%2BTyPgIhALuafAC0ObBUMqAeB6aJpRexFYKdX5ICakoCtSTpZqADKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9iiBu1F8ORjNxQYkq3APVjft6lCaD5UFupsH0l34xKPcyg1m8JsDQt32Hq8GEWHyojsrbGDVpCqjdJgDaK13ZIVEIpEcLtxuMGCEkwoKdDto9Zu24GFQ7xc9IfNdv0Hr4lt9dF7b6kXeNKUKandqqxbCohmfVWv78C8DJJzVL0KPZc2%2FHf3jKfLXnhzLlwcAw5vkdUNz5bcYJHBpYsNPOgAjIe8w%2FnuGvl0giq%2B90K%2BfbwASJogQ3Cbm3CZht5hqKNs4eswDYUiTHp6Wc1f7k29C0VOndDYlCCmoa4bvBw5hNnKcJFam9Ujm%2FshgcfmHlb4djNa4UfcTok4wdWr%2FF3WB%2BqndlzU2WuHRKBICfqUIAivtHcmTDe%2B356ATUHnuOyrh39%2Fw4IR7%2FqAVddffUOwYjfQoz%2B2eDvh%2F64bAQyOoE4bPTz5jEqv0zWGH3CaRKLez9ykCK1qPtR8a6dbo4G8t9an0TbXtwZ85PO3B6sW98AZVczhNOVQRxrdkO5wCtIBiK7iZ0wkU8V604X8s5wFaLZIDM1dRtVvzvodqtuwjv6p9ySNWwFaYU2SpXqYA70Abgr%2BOAIFX%2BKTeojgkawaxaxHs8R0SMc4io2UJQcVAbSHhA727nNIoBfxNe80AZR0ixJF25KzqJejDemIy%2FBjqkAevhtu4xA5CH74w4uv7QDpkAy3IpovnbtAEpY2zRoJzVRvvSyHQLXXoR2Ee5scO4gJ5UqMN4gHgZ%2FwQdPaPDygRVfueUqG%2FwvxXZkx1huF9zUeytRTqk%2Fi3B1pFGr9f5qIG81r0DbH2pfVWGhaCZgupD%2Foi7LhSO19eU77apXAhOn7IE0quhlA8l3ZV5brSphdjDx81k1dRA%2FjOx74PBPfTsKdgz&X-Amz-Signature=31c18cb8a47d11a976c07e717d4f47760fb00ed485bb90fa12404c1447bcf76b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INYT2P2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHULwLzE4LyZe0YSt%2FTZEiCraVzRNnfogDc6sXa%2BTyPgIhALuafAC0ObBUMqAeB6aJpRexFYKdX5ICakoCtSTpZqADKv8DCB0QABoMNjM3NDIzMTgzODA1Igw9iiBu1F8ORjNxQYkq3APVjft6lCaD5UFupsH0l34xKPcyg1m8JsDQt32Hq8GEWHyojsrbGDVpCqjdJgDaK13ZIVEIpEcLtxuMGCEkwoKdDto9Zu24GFQ7xc9IfNdv0Hr4lt9dF7b6kXeNKUKandqqxbCohmfVWv78C8DJJzVL0KPZc2%2FHf3jKfLXnhzLlwcAw5vkdUNz5bcYJHBpYsNPOgAjIe8w%2FnuGvl0giq%2B90K%2BfbwASJogQ3Cbm3CZht5hqKNs4eswDYUiTHp6Wc1f7k29C0VOndDYlCCmoa4bvBw5hNnKcJFam9Ujm%2FshgcfmHlb4djNa4UfcTok4wdWr%2FF3WB%2BqndlzU2WuHRKBICfqUIAivtHcmTDe%2B356ATUHnuOyrh39%2Fw4IR7%2FqAVddffUOwYjfQoz%2B2eDvh%2F64bAQyOoE4bPTz5jEqv0zWGH3CaRKLez9ykCK1qPtR8a6dbo4G8t9an0TbXtwZ85PO3B6sW98AZVczhNOVQRxrdkO5wCtIBiK7iZ0wkU8V604X8s5wFaLZIDM1dRtVvzvodqtuwjv6p9ySNWwFaYU2SpXqYA70Abgr%2BOAIFX%2BKTeojgkawaxaxHs8R0SMc4io2UJQcVAbSHhA727nNIoBfxNe80AZR0ixJF25KzqJejDemIy%2FBjqkAevhtu4xA5CH74w4uv7QDpkAy3IpovnbtAEpY2zRoJzVRvvSyHQLXXoR2Ee5scO4gJ5UqMN4gHgZ%2FwQdPaPDygRVfueUqG%2FwvxXZkx1huF9zUeytRTqk%2Fi3B1pFGr9f5qIG81r0DbH2pfVWGhaCZgupD%2Foi7LhSO19eU77apXAhOn7IE0quhlA8l3ZV5brSphdjDx81k1dRA%2FjOx74PBPfTsKdgz&X-Amz-Signature=3aa76b809db7b5210da974819daaa2abf6cc71b5c0e0b8385bc3b889247a1f1d&X-Amz-SignedHeaders=host&x-id=GetObject)
