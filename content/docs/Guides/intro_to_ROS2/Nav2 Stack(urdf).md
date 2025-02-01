---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIFOWQZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYMYETQSEelOWPmpSAuJexkyMm3nVUCpz1opzugeBwzwIgGD904FsISRCxSZ%2FnpAToWXL1OEhy0Uvp00%2F4eKAz8pcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD49HJ%2BcNF2ael2qircAzhO9MOACXgYHd3lGa%2Bk6Yg4GvxOWqLBaCQ%2ByZkQD%2FV8OTctc4MJ6H50XqmCpCANq9r6A5dVEfcHR%2Fzxmkcc92ptHMfbM8EJan%2F8uhwLiGOtSvt9zpCi0JfZ0rjKSKDOl%2FPQ813guds6FI4H5dwsuPhj6kuLAocOBm1ojRL04lei4ZIEwac7GCc6%2BGXlusZcFV4EsIWd6X7G%2BHh9ub%2BbZINqz6wiDFqaVKidIrxRP5EAYQ6u9X%2FKo29M9KXLxUzmFaay4rjXMX0HhC0bFrRb56hPm1w7duJYsAgCNMX%2Bfzf94dwP7te7my%2BACJJJ8AB%2FME5%2FvwA6EgHag81KQKV20K2zm0LDlnK9WGLKVQfk7QNLkaPjmDTAWMiNvRCOyKEAtrT5uNLvp%2BiqZ4ylXodDssbnDD6D2YUve7teaUJM32NNMqsTG1xx9HjEovtr%2BM2kvNWM9bfq7M%2BTbYbg%2FeCt%2F4CwN1o%2BpbX0M%2FoCt5T%2FOxOx1DmpT4FucL2Qb9x9w7dhtK8Z5D0iOM5Lkx%2FA2KNPNBBY9UowLWLhFYeeg3nJIeA94GVpVQwC5DGDtSFW2quR3mkvwyi5%2BI9oP1QEHGGmtZqdSLREzkp14ts%2FOc9rCWoKdhSEcH9%2BW6s4H96eMIKm97wGOqUB7ts7Iajui7PwI557CPSluIwoy%2BaOgPNZvICwr%2Bi%2F1t3yGtT1VVgv9qyO2RU%2BIsJJ5iD1wn9J%2Byw%2BRwHqqObb5LGPjQQC9QPHwH1%2B9V5BO2OEeduDpiLN3Y7EBqE2TUak43%2FvL8WlH3PHtqJNkfa%2Fmz2X4vUa6WELZAx1OpnPXZnZldRwenz%2B9%2F6tHS%2BOb8Z377io%2BZm8VbOVvdR0ys2qteNGQyRb&X-Amz-Signature=1c949dd1d83532ca238c7263eb903344f632b28fbaace4689389f0af465475e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIFOWQZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYMYETQSEelOWPmpSAuJexkyMm3nVUCpz1opzugeBwzwIgGD904FsISRCxSZ%2FnpAToWXL1OEhy0Uvp00%2F4eKAz8pcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD49HJ%2BcNF2ael2qircAzhO9MOACXgYHd3lGa%2Bk6Yg4GvxOWqLBaCQ%2ByZkQD%2FV8OTctc4MJ6H50XqmCpCANq9r6A5dVEfcHR%2Fzxmkcc92ptHMfbM8EJan%2F8uhwLiGOtSvt9zpCi0JfZ0rjKSKDOl%2FPQ813guds6FI4H5dwsuPhj6kuLAocOBm1ojRL04lei4ZIEwac7GCc6%2BGXlusZcFV4EsIWd6X7G%2BHh9ub%2BbZINqz6wiDFqaVKidIrxRP5EAYQ6u9X%2FKo29M9KXLxUzmFaay4rjXMX0HhC0bFrRb56hPm1w7duJYsAgCNMX%2Bfzf94dwP7te7my%2BACJJJ8AB%2FME5%2FvwA6EgHag81KQKV20K2zm0LDlnK9WGLKVQfk7QNLkaPjmDTAWMiNvRCOyKEAtrT5uNLvp%2BiqZ4ylXodDssbnDD6D2YUve7teaUJM32NNMqsTG1xx9HjEovtr%2BM2kvNWM9bfq7M%2BTbYbg%2FeCt%2F4CwN1o%2BpbX0M%2FoCt5T%2FOxOx1DmpT4FucL2Qb9x9w7dhtK8Z5D0iOM5Lkx%2FA2KNPNBBY9UowLWLhFYeeg3nJIeA94GVpVQwC5DGDtSFW2quR3mkvwyi5%2BI9oP1QEHGGmtZqdSLREzkp14ts%2FOc9rCWoKdhSEcH9%2BW6s4H96eMIKm97wGOqUB7ts7Iajui7PwI557CPSluIwoy%2BaOgPNZvICwr%2Bi%2F1t3yGtT1VVgv9qyO2RU%2BIsJJ5iD1wn9J%2Byw%2BRwHqqObb5LGPjQQC9QPHwH1%2B9V5BO2OEeduDpiLN3Y7EBqE2TUak43%2FvL8WlH3PHtqJNkfa%2Fmz2X4vUa6WELZAx1OpnPXZnZldRwenz%2B9%2F6tHS%2BOb8Z377io%2BZm8VbOVvdR0ys2qteNGQyRb&X-Amz-Signature=568c3cd3b91564b1ad6ba3be135beca9c5f95564447163c48a7b2ad9f76aa631&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIFOWQZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYMYETQSEelOWPmpSAuJexkyMm3nVUCpz1opzugeBwzwIgGD904FsISRCxSZ%2FnpAToWXL1OEhy0Uvp00%2F4eKAz8pcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD49HJ%2BcNF2ael2qircAzhO9MOACXgYHd3lGa%2Bk6Yg4GvxOWqLBaCQ%2ByZkQD%2FV8OTctc4MJ6H50XqmCpCANq9r6A5dVEfcHR%2Fzxmkcc92ptHMfbM8EJan%2F8uhwLiGOtSvt9zpCi0JfZ0rjKSKDOl%2FPQ813guds6FI4H5dwsuPhj6kuLAocOBm1ojRL04lei4ZIEwac7GCc6%2BGXlusZcFV4EsIWd6X7G%2BHh9ub%2BbZINqz6wiDFqaVKidIrxRP5EAYQ6u9X%2FKo29M9KXLxUzmFaay4rjXMX0HhC0bFrRb56hPm1w7duJYsAgCNMX%2Bfzf94dwP7te7my%2BACJJJ8AB%2FME5%2FvwA6EgHag81KQKV20K2zm0LDlnK9WGLKVQfk7QNLkaPjmDTAWMiNvRCOyKEAtrT5uNLvp%2BiqZ4ylXodDssbnDD6D2YUve7teaUJM32NNMqsTG1xx9HjEovtr%2BM2kvNWM9bfq7M%2BTbYbg%2FeCt%2F4CwN1o%2BpbX0M%2FoCt5T%2FOxOx1DmpT4FucL2Qb9x9w7dhtK8Z5D0iOM5Lkx%2FA2KNPNBBY9UowLWLhFYeeg3nJIeA94GVpVQwC5DGDtSFW2quR3mkvwyi5%2BI9oP1QEHGGmtZqdSLREzkp14ts%2FOc9rCWoKdhSEcH9%2BW6s4H96eMIKm97wGOqUB7ts7Iajui7PwI557CPSluIwoy%2BaOgPNZvICwr%2Bi%2F1t3yGtT1VVgv9qyO2RU%2BIsJJ5iD1wn9J%2Byw%2BRwHqqObb5LGPjQQC9QPHwH1%2B9V5BO2OEeduDpiLN3Y7EBqE2TUak43%2FvL8WlH3PHtqJNkfa%2Fmz2X4vUa6WELZAx1OpnPXZnZldRwenz%2B9%2F6tHS%2BOb8Z377io%2BZm8VbOVvdR0ys2qteNGQyRb&X-Amz-Signature=17332348fc733b3d2093595e7c0426f0c4342db8e9b91c1fa49e6aabc4dad1dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIFOWQZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYMYETQSEelOWPmpSAuJexkyMm3nVUCpz1opzugeBwzwIgGD904FsISRCxSZ%2FnpAToWXL1OEhy0Uvp00%2F4eKAz8pcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD49HJ%2BcNF2ael2qircAzhO9MOACXgYHd3lGa%2Bk6Yg4GvxOWqLBaCQ%2ByZkQD%2FV8OTctc4MJ6H50XqmCpCANq9r6A5dVEfcHR%2Fzxmkcc92ptHMfbM8EJan%2F8uhwLiGOtSvt9zpCi0JfZ0rjKSKDOl%2FPQ813guds6FI4H5dwsuPhj6kuLAocOBm1ojRL04lei4ZIEwac7GCc6%2BGXlusZcFV4EsIWd6X7G%2BHh9ub%2BbZINqz6wiDFqaVKidIrxRP5EAYQ6u9X%2FKo29M9KXLxUzmFaay4rjXMX0HhC0bFrRb56hPm1w7duJYsAgCNMX%2Bfzf94dwP7te7my%2BACJJJ8AB%2FME5%2FvwA6EgHag81KQKV20K2zm0LDlnK9WGLKVQfk7QNLkaPjmDTAWMiNvRCOyKEAtrT5uNLvp%2BiqZ4ylXodDssbnDD6D2YUve7teaUJM32NNMqsTG1xx9HjEovtr%2BM2kvNWM9bfq7M%2BTbYbg%2FeCt%2F4CwN1o%2BpbX0M%2FoCt5T%2FOxOx1DmpT4FucL2Qb9x9w7dhtK8Z5D0iOM5Lkx%2FA2KNPNBBY9UowLWLhFYeeg3nJIeA94GVpVQwC5DGDtSFW2quR3mkvwyi5%2BI9oP1QEHGGmtZqdSLREzkp14ts%2FOc9rCWoKdhSEcH9%2BW6s4H96eMIKm97wGOqUB7ts7Iajui7PwI557CPSluIwoy%2BaOgPNZvICwr%2Bi%2F1t3yGtT1VVgv9qyO2RU%2BIsJJ5iD1wn9J%2Byw%2BRwHqqObb5LGPjQQC9QPHwH1%2B9V5BO2OEeduDpiLN3Y7EBqE2TUak43%2FvL8WlH3PHtqJNkfa%2Fmz2X4vUa6WELZAx1OpnPXZnZldRwenz%2B9%2F6tHS%2BOb8Z377io%2BZm8VbOVvdR0ys2qteNGQyRb&X-Amz-Signature=ee8c3b14868dd0d44dc5b851dcb7bad4135cb56770bf3a1949374e22d1bc88dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIFOWQZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYMYETQSEelOWPmpSAuJexkyMm3nVUCpz1opzugeBwzwIgGD904FsISRCxSZ%2FnpAToWXL1OEhy0Uvp00%2F4eKAz8pcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD49HJ%2BcNF2ael2qircAzhO9MOACXgYHd3lGa%2Bk6Yg4GvxOWqLBaCQ%2ByZkQD%2FV8OTctc4MJ6H50XqmCpCANq9r6A5dVEfcHR%2Fzxmkcc92ptHMfbM8EJan%2F8uhwLiGOtSvt9zpCi0JfZ0rjKSKDOl%2FPQ813guds6FI4H5dwsuPhj6kuLAocOBm1ojRL04lei4ZIEwac7GCc6%2BGXlusZcFV4EsIWd6X7G%2BHh9ub%2BbZINqz6wiDFqaVKidIrxRP5EAYQ6u9X%2FKo29M9KXLxUzmFaay4rjXMX0HhC0bFrRb56hPm1w7duJYsAgCNMX%2Bfzf94dwP7te7my%2BACJJJ8AB%2FME5%2FvwA6EgHag81KQKV20K2zm0LDlnK9WGLKVQfk7QNLkaPjmDTAWMiNvRCOyKEAtrT5uNLvp%2BiqZ4ylXodDssbnDD6D2YUve7teaUJM32NNMqsTG1xx9HjEovtr%2BM2kvNWM9bfq7M%2BTbYbg%2FeCt%2F4CwN1o%2BpbX0M%2FoCt5T%2FOxOx1DmpT4FucL2Qb9x9w7dhtK8Z5D0iOM5Lkx%2FA2KNPNBBY9UowLWLhFYeeg3nJIeA94GVpVQwC5DGDtSFW2quR3mkvwyi5%2BI9oP1QEHGGmtZqdSLREzkp14ts%2FOc9rCWoKdhSEcH9%2BW6s4H96eMIKm97wGOqUB7ts7Iajui7PwI557CPSluIwoy%2BaOgPNZvICwr%2Bi%2F1t3yGtT1VVgv9qyO2RU%2BIsJJ5iD1wn9J%2Byw%2BRwHqqObb5LGPjQQC9QPHwH1%2B9V5BO2OEeduDpiLN3Y7EBqE2TUak43%2FvL8WlH3PHtqJNkfa%2Fmz2X4vUa6WELZAx1OpnPXZnZldRwenz%2B9%2F6tHS%2BOb8Z377io%2BZm8VbOVvdR0ys2qteNGQyRb&X-Amz-Signature=78673785a14fb81b3dbafe39b76cd15a908948773cdc73140f150e07e786acc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIFOWQZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYMYETQSEelOWPmpSAuJexkyMm3nVUCpz1opzugeBwzwIgGD904FsISRCxSZ%2FnpAToWXL1OEhy0Uvp00%2F4eKAz8pcqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD49HJ%2BcNF2ael2qircAzhO9MOACXgYHd3lGa%2Bk6Yg4GvxOWqLBaCQ%2ByZkQD%2FV8OTctc4MJ6H50XqmCpCANq9r6A5dVEfcHR%2Fzxmkcc92ptHMfbM8EJan%2F8uhwLiGOtSvt9zpCi0JfZ0rjKSKDOl%2FPQ813guds6FI4H5dwsuPhj6kuLAocOBm1ojRL04lei4ZIEwac7GCc6%2BGXlusZcFV4EsIWd6X7G%2BHh9ub%2BbZINqz6wiDFqaVKidIrxRP5EAYQ6u9X%2FKo29M9KXLxUzmFaay4rjXMX0HhC0bFrRb56hPm1w7duJYsAgCNMX%2Bfzf94dwP7te7my%2BACJJJ8AB%2FME5%2FvwA6EgHag81KQKV20K2zm0LDlnK9WGLKVQfk7QNLkaPjmDTAWMiNvRCOyKEAtrT5uNLvp%2BiqZ4ylXodDssbnDD6D2YUve7teaUJM32NNMqsTG1xx9HjEovtr%2BM2kvNWM9bfq7M%2BTbYbg%2FeCt%2F4CwN1o%2BpbX0M%2FoCt5T%2FOxOx1DmpT4FucL2Qb9x9w7dhtK8Z5D0iOM5Lkx%2FA2KNPNBBY9UowLWLhFYeeg3nJIeA94GVpVQwC5DGDtSFW2quR3mkvwyi5%2BI9oP1QEHGGmtZqdSLREzkp14ts%2FOc9rCWoKdhSEcH9%2BW6s4H96eMIKm97wGOqUB7ts7Iajui7PwI557CPSluIwoy%2BaOgPNZvICwr%2Bi%2F1t3yGtT1VVgv9qyO2RU%2BIsJJ5iD1wn9J%2Byw%2BRwHqqObb5LGPjQQC9QPHwH1%2B9V5BO2OEeduDpiLN3Y7EBqE2TUak43%2FvL8WlH3PHtqJNkfa%2Fmz2X4vUa6WELZAx1OpnPXZnZldRwenz%2B9%2F6tHS%2BOb8Z377io%2BZm8VbOVvdR0ys2qteNGQyRb&X-Amz-Signature=2138082cb209b2e354841a19188ea19d73e0ebe9e834bbd040dd5cc19a5d5e5c&X-Amz-SignedHeaders=host&x-id=GetObject)
