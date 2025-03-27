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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUWCLLN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWKWViTg%2BAUdEDJMIWTUd1HZBttnUrdfiHa8mXj%2BKDuAiEA%2FtiYiXP1zbGcjB3cTOpXS8PZ3Dz0d3UYP%2FU4xHPqPDYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTgiqy7RLC7lR6CbyrcA0rBl4cKdE%2FoqGHXBsA4TWE88%2FM1669ojmKHFZhAYeLdMK5fXl81WY8WUuLNYV%2F%2BWyn%2BuLMdQuR32PxcK5gIMHxXij5rMojWkSyIrEq%2FrSSuHPcxloo18%2FbQGLYDB1iVPlTj%2B%2FAzdxgt6VHn2klNtyVn72bda%2FWR3Sz1YIuRcB7krjD%2BOcRfVdYMLnU2gPNqbi9WLz0hDSeFfDgftCzm3lv5JhCt0SXeijzb2pQs%2BX3DrW40Pq%2Beet38rEnljRYvKCwwqTclOaKx61VVghyxeGPUJneeD01dPN3thsu5HCdDpuPiF3tvCoT8auc0woq1H91wl611vSX5VxsMmseyhgJz%2FhcBOviUcKz1q9cVBota%2BKpdqzBAXWKUPE88i9M4dZdHWxJ%2B5BmnaAaVRN18%2FqA9f%2BhOHd6zDXanud7teFpVDFEQQiTxqK6ofY2Dk%2FZs%2BuyWZxfTdUafuJZL8QtxY5P3X2qL3qsovzs2K0Ywkmna%2FdWcI%2FWDN5YfyVLpEKQwgkNJlE1MXVMB0TQ2%2BKyp6EoITqtzGAHxjK%2BVYuOpOapnPxaEcfF5hRPeGfhKzO4OOimg2sKrbbZLinNEgTUN3re5AjWU3Ucs7O4sR9p92PVLEjPkeiEtd%2FhqTShrMOaMkr8GOqUBgnjyMaq9aQ06nYTbG8nEvV6oEN2u9qQpkciPssdKzBdbnlIIS2IgsEUL1VBOWdUeouq3drLUKfc5efUi0UJP4sGHwvdKnPzb8sFOLQEtV4o5%2BjA7XNt0sfq3dhmiSrXkakigOyzxDtKKDzc9kfDZmRRuysOEUfeKUdPGZsIsFiFSb0OuCcGDkgIV1w9mXXgwIMc68%2FEihK0j1PAIo1EjLHOEesR9&X-Amz-Signature=a1c794b8ced09d25fe50d46348c8cf552b5ee28ebbda0f46112609674f0bb8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUWCLLN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWKWViTg%2BAUdEDJMIWTUd1HZBttnUrdfiHa8mXj%2BKDuAiEA%2FtiYiXP1zbGcjB3cTOpXS8PZ3Dz0d3UYP%2FU4xHPqPDYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTgiqy7RLC7lR6CbyrcA0rBl4cKdE%2FoqGHXBsA4TWE88%2FM1669ojmKHFZhAYeLdMK5fXl81WY8WUuLNYV%2F%2BWyn%2BuLMdQuR32PxcK5gIMHxXij5rMojWkSyIrEq%2FrSSuHPcxloo18%2FbQGLYDB1iVPlTj%2B%2FAzdxgt6VHn2klNtyVn72bda%2FWR3Sz1YIuRcB7krjD%2BOcRfVdYMLnU2gPNqbi9WLz0hDSeFfDgftCzm3lv5JhCt0SXeijzb2pQs%2BX3DrW40Pq%2Beet38rEnljRYvKCwwqTclOaKx61VVghyxeGPUJneeD01dPN3thsu5HCdDpuPiF3tvCoT8auc0woq1H91wl611vSX5VxsMmseyhgJz%2FhcBOviUcKz1q9cVBota%2BKpdqzBAXWKUPE88i9M4dZdHWxJ%2B5BmnaAaVRN18%2FqA9f%2BhOHd6zDXanud7teFpVDFEQQiTxqK6ofY2Dk%2FZs%2BuyWZxfTdUafuJZL8QtxY5P3X2qL3qsovzs2K0Ywkmna%2FdWcI%2FWDN5YfyVLpEKQwgkNJlE1MXVMB0TQ2%2BKyp6EoITqtzGAHxjK%2BVYuOpOapnPxaEcfF5hRPeGfhKzO4OOimg2sKrbbZLinNEgTUN3re5AjWU3Ucs7O4sR9p92PVLEjPkeiEtd%2FhqTShrMOaMkr8GOqUBgnjyMaq9aQ06nYTbG8nEvV6oEN2u9qQpkciPssdKzBdbnlIIS2IgsEUL1VBOWdUeouq3drLUKfc5efUi0UJP4sGHwvdKnPzb8sFOLQEtV4o5%2BjA7XNt0sfq3dhmiSrXkakigOyzxDtKKDzc9kfDZmRRuysOEUfeKUdPGZsIsFiFSb0OuCcGDkgIV1w9mXXgwIMc68%2FEihK0j1PAIo1EjLHOEesR9&X-Amz-Signature=27d757c73698745f78a0d92b44b59836c51e499b5af8f031135977b6e632f442&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUWCLLN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWKWViTg%2BAUdEDJMIWTUd1HZBttnUrdfiHa8mXj%2BKDuAiEA%2FtiYiXP1zbGcjB3cTOpXS8PZ3Dz0d3UYP%2FU4xHPqPDYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTgiqy7RLC7lR6CbyrcA0rBl4cKdE%2FoqGHXBsA4TWE88%2FM1669ojmKHFZhAYeLdMK5fXl81WY8WUuLNYV%2F%2BWyn%2BuLMdQuR32PxcK5gIMHxXij5rMojWkSyIrEq%2FrSSuHPcxloo18%2FbQGLYDB1iVPlTj%2B%2FAzdxgt6VHn2klNtyVn72bda%2FWR3Sz1YIuRcB7krjD%2BOcRfVdYMLnU2gPNqbi9WLz0hDSeFfDgftCzm3lv5JhCt0SXeijzb2pQs%2BX3DrW40Pq%2Beet38rEnljRYvKCwwqTclOaKx61VVghyxeGPUJneeD01dPN3thsu5HCdDpuPiF3tvCoT8auc0woq1H91wl611vSX5VxsMmseyhgJz%2FhcBOviUcKz1q9cVBota%2BKpdqzBAXWKUPE88i9M4dZdHWxJ%2B5BmnaAaVRN18%2FqA9f%2BhOHd6zDXanud7teFpVDFEQQiTxqK6ofY2Dk%2FZs%2BuyWZxfTdUafuJZL8QtxY5P3X2qL3qsovzs2K0Ywkmna%2FdWcI%2FWDN5YfyVLpEKQwgkNJlE1MXVMB0TQ2%2BKyp6EoITqtzGAHxjK%2BVYuOpOapnPxaEcfF5hRPeGfhKzO4OOimg2sKrbbZLinNEgTUN3re5AjWU3Ucs7O4sR9p92PVLEjPkeiEtd%2FhqTShrMOaMkr8GOqUBgnjyMaq9aQ06nYTbG8nEvV6oEN2u9qQpkciPssdKzBdbnlIIS2IgsEUL1VBOWdUeouq3drLUKfc5efUi0UJP4sGHwvdKnPzb8sFOLQEtV4o5%2BjA7XNt0sfq3dhmiSrXkakigOyzxDtKKDzc9kfDZmRRuysOEUfeKUdPGZsIsFiFSb0OuCcGDkgIV1w9mXXgwIMc68%2FEihK0j1PAIo1EjLHOEesR9&X-Amz-Signature=c3d9bb208b2f669b6710b147764ff324a8917a3265a1296b75903c5035e902c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUWCLLN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWKWViTg%2BAUdEDJMIWTUd1HZBttnUrdfiHa8mXj%2BKDuAiEA%2FtiYiXP1zbGcjB3cTOpXS8PZ3Dz0d3UYP%2FU4xHPqPDYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTgiqy7RLC7lR6CbyrcA0rBl4cKdE%2FoqGHXBsA4TWE88%2FM1669ojmKHFZhAYeLdMK5fXl81WY8WUuLNYV%2F%2BWyn%2BuLMdQuR32PxcK5gIMHxXij5rMojWkSyIrEq%2FrSSuHPcxloo18%2FbQGLYDB1iVPlTj%2B%2FAzdxgt6VHn2klNtyVn72bda%2FWR3Sz1YIuRcB7krjD%2BOcRfVdYMLnU2gPNqbi9WLz0hDSeFfDgftCzm3lv5JhCt0SXeijzb2pQs%2BX3DrW40Pq%2Beet38rEnljRYvKCwwqTclOaKx61VVghyxeGPUJneeD01dPN3thsu5HCdDpuPiF3tvCoT8auc0woq1H91wl611vSX5VxsMmseyhgJz%2FhcBOviUcKz1q9cVBota%2BKpdqzBAXWKUPE88i9M4dZdHWxJ%2B5BmnaAaVRN18%2FqA9f%2BhOHd6zDXanud7teFpVDFEQQiTxqK6ofY2Dk%2FZs%2BuyWZxfTdUafuJZL8QtxY5P3X2qL3qsovzs2K0Ywkmna%2FdWcI%2FWDN5YfyVLpEKQwgkNJlE1MXVMB0TQ2%2BKyp6EoITqtzGAHxjK%2BVYuOpOapnPxaEcfF5hRPeGfhKzO4OOimg2sKrbbZLinNEgTUN3re5AjWU3Ucs7O4sR9p92PVLEjPkeiEtd%2FhqTShrMOaMkr8GOqUBgnjyMaq9aQ06nYTbG8nEvV6oEN2u9qQpkciPssdKzBdbnlIIS2IgsEUL1VBOWdUeouq3drLUKfc5efUi0UJP4sGHwvdKnPzb8sFOLQEtV4o5%2BjA7XNt0sfq3dhmiSrXkakigOyzxDtKKDzc9kfDZmRRuysOEUfeKUdPGZsIsFiFSb0OuCcGDkgIV1w9mXXgwIMc68%2FEihK0j1PAIo1EjLHOEesR9&X-Amz-Signature=509f01087609166af79266ca8017d0b37e31dc582267f135c3b68820ad7be84f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUWCLLN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWKWViTg%2BAUdEDJMIWTUd1HZBttnUrdfiHa8mXj%2BKDuAiEA%2FtiYiXP1zbGcjB3cTOpXS8PZ3Dz0d3UYP%2FU4xHPqPDYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTgiqy7RLC7lR6CbyrcA0rBl4cKdE%2FoqGHXBsA4TWE88%2FM1669ojmKHFZhAYeLdMK5fXl81WY8WUuLNYV%2F%2BWyn%2BuLMdQuR32PxcK5gIMHxXij5rMojWkSyIrEq%2FrSSuHPcxloo18%2FbQGLYDB1iVPlTj%2B%2FAzdxgt6VHn2klNtyVn72bda%2FWR3Sz1YIuRcB7krjD%2BOcRfVdYMLnU2gPNqbi9WLz0hDSeFfDgftCzm3lv5JhCt0SXeijzb2pQs%2BX3DrW40Pq%2Beet38rEnljRYvKCwwqTclOaKx61VVghyxeGPUJneeD01dPN3thsu5HCdDpuPiF3tvCoT8auc0woq1H91wl611vSX5VxsMmseyhgJz%2FhcBOviUcKz1q9cVBota%2BKpdqzBAXWKUPE88i9M4dZdHWxJ%2B5BmnaAaVRN18%2FqA9f%2BhOHd6zDXanud7teFpVDFEQQiTxqK6ofY2Dk%2FZs%2BuyWZxfTdUafuJZL8QtxY5P3X2qL3qsovzs2K0Ywkmna%2FdWcI%2FWDN5YfyVLpEKQwgkNJlE1MXVMB0TQ2%2BKyp6EoITqtzGAHxjK%2BVYuOpOapnPxaEcfF5hRPeGfhKzO4OOimg2sKrbbZLinNEgTUN3re5AjWU3Ucs7O4sR9p92PVLEjPkeiEtd%2FhqTShrMOaMkr8GOqUBgnjyMaq9aQ06nYTbG8nEvV6oEN2u9qQpkciPssdKzBdbnlIIS2IgsEUL1VBOWdUeouq3drLUKfc5efUi0UJP4sGHwvdKnPzb8sFOLQEtV4o5%2BjA7XNt0sfq3dhmiSrXkakigOyzxDtKKDzc9kfDZmRRuysOEUfeKUdPGZsIsFiFSb0OuCcGDkgIV1w9mXXgwIMc68%2FEihK0j1PAIo1EjLHOEesR9&X-Amz-Signature=25b6341765b28809829b7bae08d21338e9977a3fd3e8dd1c097c6047b902f2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUWCLLN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWKWViTg%2BAUdEDJMIWTUd1HZBttnUrdfiHa8mXj%2BKDuAiEA%2FtiYiXP1zbGcjB3cTOpXS8PZ3Dz0d3UYP%2FU4xHPqPDYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHTgiqy7RLC7lR6CbyrcA0rBl4cKdE%2FoqGHXBsA4TWE88%2FM1669ojmKHFZhAYeLdMK5fXl81WY8WUuLNYV%2F%2BWyn%2BuLMdQuR32PxcK5gIMHxXij5rMojWkSyIrEq%2FrSSuHPcxloo18%2FbQGLYDB1iVPlTj%2B%2FAzdxgt6VHn2klNtyVn72bda%2FWR3Sz1YIuRcB7krjD%2BOcRfVdYMLnU2gPNqbi9WLz0hDSeFfDgftCzm3lv5JhCt0SXeijzb2pQs%2BX3DrW40Pq%2Beet38rEnljRYvKCwwqTclOaKx61VVghyxeGPUJneeD01dPN3thsu5HCdDpuPiF3tvCoT8auc0woq1H91wl611vSX5VxsMmseyhgJz%2FhcBOviUcKz1q9cVBota%2BKpdqzBAXWKUPE88i9M4dZdHWxJ%2B5BmnaAaVRN18%2FqA9f%2BhOHd6zDXanud7teFpVDFEQQiTxqK6ofY2Dk%2FZs%2BuyWZxfTdUafuJZL8QtxY5P3X2qL3qsovzs2K0Ywkmna%2FdWcI%2FWDN5YfyVLpEKQwgkNJlE1MXVMB0TQ2%2BKyp6EoITqtzGAHxjK%2BVYuOpOapnPxaEcfF5hRPeGfhKzO4OOimg2sKrbbZLinNEgTUN3re5AjWU3Ucs7O4sR9p92PVLEjPkeiEtd%2FhqTShrMOaMkr8GOqUBgnjyMaq9aQ06nYTbG8nEvV6oEN2u9qQpkciPssdKzBdbnlIIS2IgsEUL1VBOWdUeouq3drLUKfc5efUi0UJP4sGHwvdKnPzb8sFOLQEtV4o5%2BjA7XNt0sfq3dhmiSrXkakigOyzxDtKKDzc9kfDZmRRuysOEUfeKUdPGZsIsFiFSb0OuCcGDkgIV1w9mXXgwIMc68%2FEihK0j1PAIo1EjLHOEesR9&X-Amz-Signature=4b89d96245d123bdbccf0c9c9fd3f6a707ea0797d2fdf7eb13e555a1722d8610&X-Amz-SignedHeaders=host&x-id=GetObject)
