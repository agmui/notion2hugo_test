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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGYNKCG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCZRoVFXBn9IPAuVWod78Ur6qMzQPtpUn051FvjlWnZ9AIgAjx0ZPYspBQaMwx5W5XvRsOJkMnu6GFVa4w%2Br8ayfiwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV5%2Bu2Pbu2LYoMypyrcA4jfyXO6ZRWHiM77RWggjDtz%2BPPQXQZ1zkIGqj1RoHYSemthS1dZ1TjYeIPcHLgfLKwKYrxb%2FLO%2F93hpTI8aohIdK%2FsTtK3UuipJX5ult%2FWl8xUIhXr20lPRH9xBMSAtKmhqVbWyw1EviZ1MKSuqnu7SdexSN5E9u9JwgOU%2BSALIpnkeOFcKhVdxOgGx3wiFJ2i02f3C2yhKq1YIYx7%2BCJIY4YtoJE5cg89yk5mxk8V7AwuF1kLwVLAETXSlCn09YiML4Xo4ad%2F2shvZTmaWT4eynULrI58z6q9AfgB%2BQe%2FGORpu%2Fs43YHKfiGbfCfouyrO%2FY2ZnN3IAyGR8ZY79j7CA3pgzgAGgUH5mjdaCD2SB0bCfD94piuPxaL8zepJ8bMx3DkbUKyFRqFeWk5kETlwyGAqWHPydAdJtQeiDltsc34hXCJHbELcmmmRc5WfKFH1S4povbDQYQOkrPUTJECU3LDQkV56VOiVj1AmUNLoUinxvtG%2Biyg8tILArfRoRGvD6at%2FyvOpMPZSS8KqRHN8k9sEQkVUJOc9H79EP9uLY7vrHrgJanVSFDTl30WRS3nCavyHjJzeq1VZUbugSkn8Yq%2FN148AsVMdlmMgfpmtEB1rfoxx1ojH8l1JxMKm3j74GOqUB5R8Fq42fSZDzL93YAblO21sc2rVCXHX8YpstWvETq%2BvlPzOgSFNS1B7TvwcuzBiCqCLlNNST7LRd02h%2F1hu9U%2B0bJ8Rgkx98yhKAg7o5f5i40GOFNYWbeW5w5FwWCBgEkp4Sn2LZWB5EcooCymqFkbPhn63Rd5oATAAN%2Feov3C6UMqm%2F6exNN2MNH2Fzq2a509MUvWGKjJKJ4fQh6XPY1OuwzbmK&X-Amz-Signature=a09f445ff9a8f758bcb7f57a2449b779a4c1988a54323697a90533557c6eba84&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGYNKCG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCZRoVFXBn9IPAuVWod78Ur6qMzQPtpUn051FvjlWnZ9AIgAjx0ZPYspBQaMwx5W5XvRsOJkMnu6GFVa4w%2Br8ayfiwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV5%2Bu2Pbu2LYoMypyrcA4jfyXO6ZRWHiM77RWggjDtz%2BPPQXQZ1zkIGqj1RoHYSemthS1dZ1TjYeIPcHLgfLKwKYrxb%2FLO%2F93hpTI8aohIdK%2FsTtK3UuipJX5ult%2FWl8xUIhXr20lPRH9xBMSAtKmhqVbWyw1EviZ1MKSuqnu7SdexSN5E9u9JwgOU%2BSALIpnkeOFcKhVdxOgGx3wiFJ2i02f3C2yhKq1YIYx7%2BCJIY4YtoJE5cg89yk5mxk8V7AwuF1kLwVLAETXSlCn09YiML4Xo4ad%2F2shvZTmaWT4eynULrI58z6q9AfgB%2BQe%2FGORpu%2Fs43YHKfiGbfCfouyrO%2FY2ZnN3IAyGR8ZY79j7CA3pgzgAGgUH5mjdaCD2SB0bCfD94piuPxaL8zepJ8bMx3DkbUKyFRqFeWk5kETlwyGAqWHPydAdJtQeiDltsc34hXCJHbELcmmmRc5WfKFH1S4povbDQYQOkrPUTJECU3LDQkV56VOiVj1AmUNLoUinxvtG%2Biyg8tILArfRoRGvD6at%2FyvOpMPZSS8KqRHN8k9sEQkVUJOc9H79EP9uLY7vrHrgJanVSFDTl30WRS3nCavyHjJzeq1VZUbugSkn8Yq%2FN148AsVMdlmMgfpmtEB1rfoxx1ojH8l1JxMKm3j74GOqUB5R8Fq42fSZDzL93YAblO21sc2rVCXHX8YpstWvETq%2BvlPzOgSFNS1B7TvwcuzBiCqCLlNNST7LRd02h%2F1hu9U%2B0bJ8Rgkx98yhKAg7o5f5i40GOFNYWbeW5w5FwWCBgEkp4Sn2LZWB5EcooCymqFkbPhn63Rd5oATAAN%2Feov3C6UMqm%2F6exNN2MNH2Fzq2a509MUvWGKjJKJ4fQh6XPY1OuwzbmK&X-Amz-Signature=c1c785e184145fb3cf8f39e97329777a5a00fb04a9216c99ed7500c6cc2d35dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGYNKCG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCZRoVFXBn9IPAuVWod78Ur6qMzQPtpUn051FvjlWnZ9AIgAjx0ZPYspBQaMwx5W5XvRsOJkMnu6GFVa4w%2Br8ayfiwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV5%2Bu2Pbu2LYoMypyrcA4jfyXO6ZRWHiM77RWggjDtz%2BPPQXQZ1zkIGqj1RoHYSemthS1dZ1TjYeIPcHLgfLKwKYrxb%2FLO%2F93hpTI8aohIdK%2FsTtK3UuipJX5ult%2FWl8xUIhXr20lPRH9xBMSAtKmhqVbWyw1EviZ1MKSuqnu7SdexSN5E9u9JwgOU%2BSALIpnkeOFcKhVdxOgGx3wiFJ2i02f3C2yhKq1YIYx7%2BCJIY4YtoJE5cg89yk5mxk8V7AwuF1kLwVLAETXSlCn09YiML4Xo4ad%2F2shvZTmaWT4eynULrI58z6q9AfgB%2BQe%2FGORpu%2Fs43YHKfiGbfCfouyrO%2FY2ZnN3IAyGR8ZY79j7CA3pgzgAGgUH5mjdaCD2SB0bCfD94piuPxaL8zepJ8bMx3DkbUKyFRqFeWk5kETlwyGAqWHPydAdJtQeiDltsc34hXCJHbELcmmmRc5WfKFH1S4povbDQYQOkrPUTJECU3LDQkV56VOiVj1AmUNLoUinxvtG%2Biyg8tILArfRoRGvD6at%2FyvOpMPZSS8KqRHN8k9sEQkVUJOc9H79EP9uLY7vrHrgJanVSFDTl30WRS3nCavyHjJzeq1VZUbugSkn8Yq%2FN148AsVMdlmMgfpmtEB1rfoxx1ojH8l1JxMKm3j74GOqUB5R8Fq42fSZDzL93YAblO21sc2rVCXHX8YpstWvETq%2BvlPzOgSFNS1B7TvwcuzBiCqCLlNNST7LRd02h%2F1hu9U%2B0bJ8Rgkx98yhKAg7o5f5i40GOFNYWbeW5w5FwWCBgEkp4Sn2LZWB5EcooCymqFkbPhn63Rd5oATAAN%2Feov3C6UMqm%2F6exNN2MNH2Fzq2a509MUvWGKjJKJ4fQh6XPY1OuwzbmK&X-Amz-Signature=42332fb935f6e0b8f97c7db040715d37149670b2f9bb1ef353da33d99490234d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGYNKCG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCZRoVFXBn9IPAuVWod78Ur6qMzQPtpUn051FvjlWnZ9AIgAjx0ZPYspBQaMwx5W5XvRsOJkMnu6GFVa4w%2Br8ayfiwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV5%2Bu2Pbu2LYoMypyrcA4jfyXO6ZRWHiM77RWggjDtz%2BPPQXQZ1zkIGqj1RoHYSemthS1dZ1TjYeIPcHLgfLKwKYrxb%2FLO%2F93hpTI8aohIdK%2FsTtK3UuipJX5ult%2FWl8xUIhXr20lPRH9xBMSAtKmhqVbWyw1EviZ1MKSuqnu7SdexSN5E9u9JwgOU%2BSALIpnkeOFcKhVdxOgGx3wiFJ2i02f3C2yhKq1YIYx7%2BCJIY4YtoJE5cg89yk5mxk8V7AwuF1kLwVLAETXSlCn09YiML4Xo4ad%2F2shvZTmaWT4eynULrI58z6q9AfgB%2BQe%2FGORpu%2Fs43YHKfiGbfCfouyrO%2FY2ZnN3IAyGR8ZY79j7CA3pgzgAGgUH5mjdaCD2SB0bCfD94piuPxaL8zepJ8bMx3DkbUKyFRqFeWk5kETlwyGAqWHPydAdJtQeiDltsc34hXCJHbELcmmmRc5WfKFH1S4povbDQYQOkrPUTJECU3LDQkV56VOiVj1AmUNLoUinxvtG%2Biyg8tILArfRoRGvD6at%2FyvOpMPZSS8KqRHN8k9sEQkVUJOc9H79EP9uLY7vrHrgJanVSFDTl30WRS3nCavyHjJzeq1VZUbugSkn8Yq%2FN148AsVMdlmMgfpmtEB1rfoxx1ojH8l1JxMKm3j74GOqUB5R8Fq42fSZDzL93YAblO21sc2rVCXHX8YpstWvETq%2BvlPzOgSFNS1B7TvwcuzBiCqCLlNNST7LRd02h%2F1hu9U%2B0bJ8Rgkx98yhKAg7o5f5i40GOFNYWbeW5w5FwWCBgEkp4Sn2LZWB5EcooCymqFkbPhn63Rd5oATAAN%2Feov3C6UMqm%2F6exNN2MNH2Fzq2a509MUvWGKjJKJ4fQh6XPY1OuwzbmK&X-Amz-Signature=96fbe6bdc3e5a2141252f764c0a6a3e7c062e3b461295aa51df141fa9cbc119d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGYNKCG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCZRoVFXBn9IPAuVWod78Ur6qMzQPtpUn051FvjlWnZ9AIgAjx0ZPYspBQaMwx5W5XvRsOJkMnu6GFVa4w%2Br8ayfiwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV5%2Bu2Pbu2LYoMypyrcA4jfyXO6ZRWHiM77RWggjDtz%2BPPQXQZ1zkIGqj1RoHYSemthS1dZ1TjYeIPcHLgfLKwKYrxb%2FLO%2F93hpTI8aohIdK%2FsTtK3UuipJX5ult%2FWl8xUIhXr20lPRH9xBMSAtKmhqVbWyw1EviZ1MKSuqnu7SdexSN5E9u9JwgOU%2BSALIpnkeOFcKhVdxOgGx3wiFJ2i02f3C2yhKq1YIYx7%2BCJIY4YtoJE5cg89yk5mxk8V7AwuF1kLwVLAETXSlCn09YiML4Xo4ad%2F2shvZTmaWT4eynULrI58z6q9AfgB%2BQe%2FGORpu%2Fs43YHKfiGbfCfouyrO%2FY2ZnN3IAyGR8ZY79j7CA3pgzgAGgUH5mjdaCD2SB0bCfD94piuPxaL8zepJ8bMx3DkbUKyFRqFeWk5kETlwyGAqWHPydAdJtQeiDltsc34hXCJHbELcmmmRc5WfKFH1S4povbDQYQOkrPUTJECU3LDQkV56VOiVj1AmUNLoUinxvtG%2Biyg8tILArfRoRGvD6at%2FyvOpMPZSS8KqRHN8k9sEQkVUJOc9H79EP9uLY7vrHrgJanVSFDTl30WRS3nCavyHjJzeq1VZUbugSkn8Yq%2FN148AsVMdlmMgfpmtEB1rfoxx1ojH8l1JxMKm3j74GOqUB5R8Fq42fSZDzL93YAblO21sc2rVCXHX8YpstWvETq%2BvlPzOgSFNS1B7TvwcuzBiCqCLlNNST7LRd02h%2F1hu9U%2B0bJ8Rgkx98yhKAg7o5f5i40GOFNYWbeW5w5FwWCBgEkp4Sn2LZWB5EcooCymqFkbPhn63Rd5oATAAN%2Feov3C6UMqm%2F6exNN2MNH2Fzq2a509MUvWGKjJKJ4fQh6XPY1OuwzbmK&X-Amz-Signature=37a2f1ac0b2639ddd882171123cc8d672454b00a7546334e43d9ada0c5a4ebba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGYNKCG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCZRoVFXBn9IPAuVWod78Ur6qMzQPtpUn051FvjlWnZ9AIgAjx0ZPYspBQaMwx5W5XvRsOJkMnu6GFVa4w%2Br8ayfiwqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV5%2Bu2Pbu2LYoMypyrcA4jfyXO6ZRWHiM77RWggjDtz%2BPPQXQZ1zkIGqj1RoHYSemthS1dZ1TjYeIPcHLgfLKwKYrxb%2FLO%2F93hpTI8aohIdK%2FsTtK3UuipJX5ult%2FWl8xUIhXr20lPRH9xBMSAtKmhqVbWyw1EviZ1MKSuqnu7SdexSN5E9u9JwgOU%2BSALIpnkeOFcKhVdxOgGx3wiFJ2i02f3C2yhKq1YIYx7%2BCJIY4YtoJE5cg89yk5mxk8V7AwuF1kLwVLAETXSlCn09YiML4Xo4ad%2F2shvZTmaWT4eynULrI58z6q9AfgB%2BQe%2FGORpu%2Fs43YHKfiGbfCfouyrO%2FY2ZnN3IAyGR8ZY79j7CA3pgzgAGgUH5mjdaCD2SB0bCfD94piuPxaL8zepJ8bMx3DkbUKyFRqFeWk5kETlwyGAqWHPydAdJtQeiDltsc34hXCJHbELcmmmRc5WfKFH1S4povbDQYQOkrPUTJECU3LDQkV56VOiVj1AmUNLoUinxvtG%2Biyg8tILArfRoRGvD6at%2FyvOpMPZSS8KqRHN8k9sEQkVUJOc9H79EP9uLY7vrHrgJanVSFDTl30WRS3nCavyHjJzeq1VZUbugSkn8Yq%2FN148AsVMdlmMgfpmtEB1rfoxx1ojH8l1JxMKm3j74GOqUB5R8Fq42fSZDzL93YAblO21sc2rVCXHX8YpstWvETq%2BvlPzOgSFNS1B7TvwcuzBiCqCLlNNST7LRd02h%2F1hu9U%2B0bJ8Rgkx98yhKAg7o5f5i40GOFNYWbeW5w5FwWCBgEkp4Sn2LZWB5EcooCymqFkbPhn63Rd5oATAAN%2Feov3C6UMqm%2F6exNN2MNH2Fzq2a509MUvWGKjJKJ4fQh6XPY1OuwzbmK&X-Amz-Signature=0ba42bc572c5e558390bfbc0465fc1831325de1bdd80b9f5283af6d41dfdd839&X-Amz-SignedHeaders=host&x-id=GetObject)
