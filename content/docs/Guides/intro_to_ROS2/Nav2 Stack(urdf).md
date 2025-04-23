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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOD5KDN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfj97JtjdRLrvhCbij2G751iumeFfEbHrxMWv2nqVhjAiBgXRozsuLyMKobVLo3vz9R%2F7cSwZ1Wu0911uAKJEiO4yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56C0%2FA%2Bjit91gwqJKtwDZDhOrDE9Y4%2FWbze7c7zeSoe1Z5zmO8lDQAB263wa%2BuzCzUJB%2BhEeRRoMBo%2BFfEjzmM1kKCqO1D4Wgsgkd3Yln2MbQJqmgK4Z9Uob1rCErHhxie5Rnik1EgN325rSOAh3P6ynIWOotDQ%2Fq29j9Ip0Gzq8opKcT2aiB%2BSGgLXgqIIEP95wzJOMKbCNwtgEtfXyI1AdgYeLm43mah%2FtCZytrJVdOAFnS0fp44CQU69cGuvoXB9kjHSL64ndFclyjbkbsCqn36wE8N%2FFTBnPjuw25nN3EIyNZw2XxU1KnsbMwf3ZrEPFhjxdi8H0KUUKP1dN%2BL36j%2BVxaMaAAGXdTLQSZI8%2F%2BWVgUTDj7dux2EksMHYTHMx1BCSttFqz1FeyGTNoLVebeNgTy6HawA8%2BLdOAJS0rI5jz%2FnxnBKaYG7VORlp09D2Hwsdf222DJYowEmTvbQHGf0pf3UI6dfQMgHdmFCr353vEI9UzoGkFJn%2Fs%2FPG9FV5X1N4f5Uw9KR6qOaFeEWKiVoX0VVt6cVpDJqnEPk6cm5%2FvfLyZOX39B%2FOnAQ8RwyzerxaajBc2RBSmn%2B8CbOl%2FPeOxJ4mW1oMFlK%2BHNFpU7yr5RQKEm9rc27%2FvwbUgx2XQOM3Ak0mrDw4wrseiwAY6pgHaFO0%2BwUhnoDtvOSEDYvs31pYboOTUluOLiPue5sJ%2FKhTgdR2HxUiZICoht29N8B6%2FGTwPjMq1eHqebJE5k%2B5tZKTL2ssXp7rB5zC9jZ6vTaTReTfkoXxswStFrD3pdpz2vN5Ni%2Frk7Ukia3VOYYDyGlohMEWsCtFNc9d9ohnY%2BA22VgH%2FTyNZaXUmFWbSruc8kJr%2FGtAZ0AOQHLEz1KTotEVEVIfA&X-Amz-Signature=e4286f594157baf8575960743b34b74c8e59c25d253eb94ba21596aebb76d078&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOD5KDN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfj97JtjdRLrvhCbij2G751iumeFfEbHrxMWv2nqVhjAiBgXRozsuLyMKobVLo3vz9R%2F7cSwZ1Wu0911uAKJEiO4yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56C0%2FA%2Bjit91gwqJKtwDZDhOrDE9Y4%2FWbze7c7zeSoe1Z5zmO8lDQAB263wa%2BuzCzUJB%2BhEeRRoMBo%2BFfEjzmM1kKCqO1D4Wgsgkd3Yln2MbQJqmgK4Z9Uob1rCErHhxie5Rnik1EgN325rSOAh3P6ynIWOotDQ%2Fq29j9Ip0Gzq8opKcT2aiB%2BSGgLXgqIIEP95wzJOMKbCNwtgEtfXyI1AdgYeLm43mah%2FtCZytrJVdOAFnS0fp44CQU69cGuvoXB9kjHSL64ndFclyjbkbsCqn36wE8N%2FFTBnPjuw25nN3EIyNZw2XxU1KnsbMwf3ZrEPFhjxdi8H0KUUKP1dN%2BL36j%2BVxaMaAAGXdTLQSZI8%2F%2BWVgUTDj7dux2EksMHYTHMx1BCSttFqz1FeyGTNoLVebeNgTy6HawA8%2BLdOAJS0rI5jz%2FnxnBKaYG7VORlp09D2Hwsdf222DJYowEmTvbQHGf0pf3UI6dfQMgHdmFCr353vEI9UzoGkFJn%2Fs%2FPG9FV5X1N4f5Uw9KR6qOaFeEWKiVoX0VVt6cVpDJqnEPk6cm5%2FvfLyZOX39B%2FOnAQ8RwyzerxaajBc2RBSmn%2B8CbOl%2FPeOxJ4mW1oMFlK%2BHNFpU7yr5RQKEm9rc27%2FvwbUgx2XQOM3Ak0mrDw4wrseiwAY6pgHaFO0%2BwUhnoDtvOSEDYvs31pYboOTUluOLiPue5sJ%2FKhTgdR2HxUiZICoht29N8B6%2FGTwPjMq1eHqebJE5k%2B5tZKTL2ssXp7rB5zC9jZ6vTaTReTfkoXxswStFrD3pdpz2vN5Ni%2Frk7Ukia3VOYYDyGlohMEWsCtFNc9d9ohnY%2BA22VgH%2FTyNZaXUmFWbSruc8kJr%2FGtAZ0AOQHLEz1KTotEVEVIfA&X-Amz-Signature=3c7efb61ad52aff3e113aa0701cddabce163f64cf8f42e20135b7cf4da84aa8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOD5KDN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfj97JtjdRLrvhCbij2G751iumeFfEbHrxMWv2nqVhjAiBgXRozsuLyMKobVLo3vz9R%2F7cSwZ1Wu0911uAKJEiO4yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56C0%2FA%2Bjit91gwqJKtwDZDhOrDE9Y4%2FWbze7c7zeSoe1Z5zmO8lDQAB263wa%2BuzCzUJB%2BhEeRRoMBo%2BFfEjzmM1kKCqO1D4Wgsgkd3Yln2MbQJqmgK4Z9Uob1rCErHhxie5Rnik1EgN325rSOAh3P6ynIWOotDQ%2Fq29j9Ip0Gzq8opKcT2aiB%2BSGgLXgqIIEP95wzJOMKbCNwtgEtfXyI1AdgYeLm43mah%2FtCZytrJVdOAFnS0fp44CQU69cGuvoXB9kjHSL64ndFclyjbkbsCqn36wE8N%2FFTBnPjuw25nN3EIyNZw2XxU1KnsbMwf3ZrEPFhjxdi8H0KUUKP1dN%2BL36j%2BVxaMaAAGXdTLQSZI8%2F%2BWVgUTDj7dux2EksMHYTHMx1BCSttFqz1FeyGTNoLVebeNgTy6HawA8%2BLdOAJS0rI5jz%2FnxnBKaYG7VORlp09D2Hwsdf222DJYowEmTvbQHGf0pf3UI6dfQMgHdmFCr353vEI9UzoGkFJn%2Fs%2FPG9FV5X1N4f5Uw9KR6qOaFeEWKiVoX0VVt6cVpDJqnEPk6cm5%2FvfLyZOX39B%2FOnAQ8RwyzerxaajBc2RBSmn%2B8CbOl%2FPeOxJ4mW1oMFlK%2BHNFpU7yr5RQKEm9rc27%2FvwbUgx2XQOM3Ak0mrDw4wrseiwAY6pgHaFO0%2BwUhnoDtvOSEDYvs31pYboOTUluOLiPue5sJ%2FKhTgdR2HxUiZICoht29N8B6%2FGTwPjMq1eHqebJE5k%2B5tZKTL2ssXp7rB5zC9jZ6vTaTReTfkoXxswStFrD3pdpz2vN5Ni%2Frk7Ukia3VOYYDyGlohMEWsCtFNc9d9ohnY%2BA22VgH%2FTyNZaXUmFWbSruc8kJr%2FGtAZ0AOQHLEz1KTotEVEVIfA&X-Amz-Signature=d94c4b1773a076d6a990d00d69becf04d622cf0a550fa8f38420e82259f15d43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOD5KDN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfj97JtjdRLrvhCbij2G751iumeFfEbHrxMWv2nqVhjAiBgXRozsuLyMKobVLo3vz9R%2F7cSwZ1Wu0911uAKJEiO4yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56C0%2FA%2Bjit91gwqJKtwDZDhOrDE9Y4%2FWbze7c7zeSoe1Z5zmO8lDQAB263wa%2BuzCzUJB%2BhEeRRoMBo%2BFfEjzmM1kKCqO1D4Wgsgkd3Yln2MbQJqmgK4Z9Uob1rCErHhxie5Rnik1EgN325rSOAh3P6ynIWOotDQ%2Fq29j9Ip0Gzq8opKcT2aiB%2BSGgLXgqIIEP95wzJOMKbCNwtgEtfXyI1AdgYeLm43mah%2FtCZytrJVdOAFnS0fp44CQU69cGuvoXB9kjHSL64ndFclyjbkbsCqn36wE8N%2FFTBnPjuw25nN3EIyNZw2XxU1KnsbMwf3ZrEPFhjxdi8H0KUUKP1dN%2BL36j%2BVxaMaAAGXdTLQSZI8%2F%2BWVgUTDj7dux2EksMHYTHMx1BCSttFqz1FeyGTNoLVebeNgTy6HawA8%2BLdOAJS0rI5jz%2FnxnBKaYG7VORlp09D2Hwsdf222DJYowEmTvbQHGf0pf3UI6dfQMgHdmFCr353vEI9UzoGkFJn%2Fs%2FPG9FV5X1N4f5Uw9KR6qOaFeEWKiVoX0VVt6cVpDJqnEPk6cm5%2FvfLyZOX39B%2FOnAQ8RwyzerxaajBc2RBSmn%2B8CbOl%2FPeOxJ4mW1oMFlK%2BHNFpU7yr5RQKEm9rc27%2FvwbUgx2XQOM3Ak0mrDw4wrseiwAY6pgHaFO0%2BwUhnoDtvOSEDYvs31pYboOTUluOLiPue5sJ%2FKhTgdR2HxUiZICoht29N8B6%2FGTwPjMq1eHqebJE5k%2B5tZKTL2ssXp7rB5zC9jZ6vTaTReTfkoXxswStFrD3pdpz2vN5Ni%2Frk7Ukia3VOYYDyGlohMEWsCtFNc9d9ohnY%2BA22VgH%2FTyNZaXUmFWbSruc8kJr%2FGtAZ0AOQHLEz1KTotEVEVIfA&X-Amz-Signature=dd882bfa839504f9fa1934e95cb3a8e30eaeba40dc92887b280830ad07aed9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOD5KDN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfj97JtjdRLrvhCbij2G751iumeFfEbHrxMWv2nqVhjAiBgXRozsuLyMKobVLo3vz9R%2F7cSwZ1Wu0911uAKJEiO4yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56C0%2FA%2Bjit91gwqJKtwDZDhOrDE9Y4%2FWbze7c7zeSoe1Z5zmO8lDQAB263wa%2BuzCzUJB%2BhEeRRoMBo%2BFfEjzmM1kKCqO1D4Wgsgkd3Yln2MbQJqmgK4Z9Uob1rCErHhxie5Rnik1EgN325rSOAh3P6ynIWOotDQ%2Fq29j9Ip0Gzq8opKcT2aiB%2BSGgLXgqIIEP95wzJOMKbCNwtgEtfXyI1AdgYeLm43mah%2FtCZytrJVdOAFnS0fp44CQU69cGuvoXB9kjHSL64ndFclyjbkbsCqn36wE8N%2FFTBnPjuw25nN3EIyNZw2XxU1KnsbMwf3ZrEPFhjxdi8H0KUUKP1dN%2BL36j%2BVxaMaAAGXdTLQSZI8%2F%2BWVgUTDj7dux2EksMHYTHMx1BCSttFqz1FeyGTNoLVebeNgTy6HawA8%2BLdOAJS0rI5jz%2FnxnBKaYG7VORlp09D2Hwsdf222DJYowEmTvbQHGf0pf3UI6dfQMgHdmFCr353vEI9UzoGkFJn%2Fs%2FPG9FV5X1N4f5Uw9KR6qOaFeEWKiVoX0VVt6cVpDJqnEPk6cm5%2FvfLyZOX39B%2FOnAQ8RwyzerxaajBc2RBSmn%2B8CbOl%2FPeOxJ4mW1oMFlK%2BHNFpU7yr5RQKEm9rc27%2FvwbUgx2XQOM3Ak0mrDw4wrseiwAY6pgHaFO0%2BwUhnoDtvOSEDYvs31pYboOTUluOLiPue5sJ%2FKhTgdR2HxUiZICoht29N8B6%2FGTwPjMq1eHqebJE5k%2B5tZKTL2ssXp7rB5zC9jZ6vTaTReTfkoXxswStFrD3pdpz2vN5Ni%2Frk7Ukia3VOYYDyGlohMEWsCtFNc9d9ohnY%2BA22VgH%2FTyNZaXUmFWbSruc8kJr%2FGtAZ0AOQHLEz1KTotEVEVIfA&X-Amz-Signature=a1b085b630a6fb1eb19d79f129cefb4e21b806c76b0876679472ffe45d731e09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOD5KDN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T091009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfj97JtjdRLrvhCbij2G751iumeFfEbHrxMWv2nqVhjAiBgXRozsuLyMKobVLo3vz9R%2F7cSwZ1Wu0911uAKJEiO4yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM56C0%2FA%2Bjit91gwqJKtwDZDhOrDE9Y4%2FWbze7c7zeSoe1Z5zmO8lDQAB263wa%2BuzCzUJB%2BhEeRRoMBo%2BFfEjzmM1kKCqO1D4Wgsgkd3Yln2MbQJqmgK4Z9Uob1rCErHhxie5Rnik1EgN325rSOAh3P6ynIWOotDQ%2Fq29j9Ip0Gzq8opKcT2aiB%2BSGgLXgqIIEP95wzJOMKbCNwtgEtfXyI1AdgYeLm43mah%2FtCZytrJVdOAFnS0fp44CQU69cGuvoXB9kjHSL64ndFclyjbkbsCqn36wE8N%2FFTBnPjuw25nN3EIyNZw2XxU1KnsbMwf3ZrEPFhjxdi8H0KUUKP1dN%2BL36j%2BVxaMaAAGXdTLQSZI8%2F%2BWVgUTDj7dux2EksMHYTHMx1BCSttFqz1FeyGTNoLVebeNgTy6HawA8%2BLdOAJS0rI5jz%2FnxnBKaYG7VORlp09D2Hwsdf222DJYowEmTvbQHGf0pf3UI6dfQMgHdmFCr353vEI9UzoGkFJn%2Fs%2FPG9FV5X1N4f5Uw9KR6qOaFeEWKiVoX0VVt6cVpDJqnEPk6cm5%2FvfLyZOX39B%2FOnAQ8RwyzerxaajBc2RBSmn%2B8CbOl%2FPeOxJ4mW1oMFlK%2BHNFpU7yr5RQKEm9rc27%2FvwbUgx2XQOM3Ak0mrDw4wrseiwAY6pgHaFO0%2BwUhnoDtvOSEDYvs31pYboOTUluOLiPue5sJ%2FKhTgdR2HxUiZICoht29N8B6%2FGTwPjMq1eHqebJE5k%2B5tZKTL2ssXp7rB5zC9jZ6vTaTReTfkoXxswStFrD3pdpz2vN5Ni%2Frk7Ukia3VOYYDyGlohMEWsCtFNc9d9ohnY%2BA22VgH%2FTyNZaXUmFWbSruc8kJr%2FGtAZ0AOQHLEz1KTotEVEVIfA&X-Amz-Signature=863d3dfe25ee365b1c5a5078e7ed1eccb16f2c03594fc61aee26164783e7b353&X-Amz-SignedHeaders=host&x-id=GetObject)
