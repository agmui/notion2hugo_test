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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LXBEQD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBg2mCckUKRaFdldTkWzWUgtcTCpL%2BG9CSp95s%2Bt9tw%2BAiEA0s%2BiIipeJylGdNhNXKDt3g6JfSW9082DlGEv8%2Fh89qEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIph08DsuXNMBv8pAyrcA2Axc6G8Pq7AVSrSEWd75siAn1oJHy6ZDLP8A23kcExwZ%2FbZdfQnCduxwtQwHbb95sE28ywpo0j3p0neo6N8H9vyskAPD4Pz3gGAWYkcAYdi2NN%2BH97Zw7cSSp1UTmrVkYAUzC%2FAKzc3kX9pyESFj%2BpdZLpMqdBnxFyMoF8qpvFXaLNraPseDTM7YbMk0aZN1u1wVMpaPO33byswSPElfri71qllkjrdCO0O65c%2BJze0FxlPKhP6bEzC%2FrIt2oDLlsvkqsvFTPt6sqsCsrnT44QnqOjFSj8t9ZlWvaQmSdKe1qb3RYE0Fh7wbBWIYKs81yHOTAJdfzM5poM%2BbqG7hhpwjIm3NKbUJicIgMJvpVMyzVobFv%2BT0htSu5kLYbs453IQC9gHT4sMv3UWF%2F68xGagD5Hxj44gLSFcPybd%2F3WxWo155ty9m%2BfoHM7OpLGHyEAiZnU%2FuICUbp%2FVJUlb8hVyB4H5XOE5bjGaBcvN%2BeCvoc72I70q%2BISEcT5J0JjjXIiE3f7%2BmxVCzS4VnGI8WrQ0fdPTU21whtWphdrEOtSCCNBsuyD9v31VdQQmZslhE5CIhFRe%2BTyWCrxGSQ%2FtNd6LlztY4cTtkxjNnye%2Bfqf1kYFXH2%2FmCZMX2BZ1MIehsL8GOqUBC86TyTOBO33VX7DHtYmgKd4LRDUDBMSwubg04%2BYKO4cgafCWoHUTgzTMJuqNteBw9PrDQSmk2oJtZaV6EVh3PYlwkNxVvu7VuOBL08bPsVSDQoKUrrBZTBXvpx3FsHgDvZDTZ0FWn4auaX8RmozA0%2BuqLE4c23syLYVAJWhUANwWYp%2Ffbq6CDRBMUayg8D7Fvz%2BIhUbIPh%2FD%2FcJQyHnV%2FwfjwNt4&X-Amz-Signature=eeb5542300a0cf5f13a74adaecdb3211cc13ed681b4248a3d6568e9aa11e16e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LXBEQD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBg2mCckUKRaFdldTkWzWUgtcTCpL%2BG9CSp95s%2Bt9tw%2BAiEA0s%2BiIipeJylGdNhNXKDt3g6JfSW9082DlGEv8%2Fh89qEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIph08DsuXNMBv8pAyrcA2Axc6G8Pq7AVSrSEWd75siAn1oJHy6ZDLP8A23kcExwZ%2FbZdfQnCduxwtQwHbb95sE28ywpo0j3p0neo6N8H9vyskAPD4Pz3gGAWYkcAYdi2NN%2BH97Zw7cSSp1UTmrVkYAUzC%2FAKzc3kX9pyESFj%2BpdZLpMqdBnxFyMoF8qpvFXaLNraPseDTM7YbMk0aZN1u1wVMpaPO33byswSPElfri71qllkjrdCO0O65c%2BJze0FxlPKhP6bEzC%2FrIt2oDLlsvkqsvFTPt6sqsCsrnT44QnqOjFSj8t9ZlWvaQmSdKe1qb3RYE0Fh7wbBWIYKs81yHOTAJdfzM5poM%2BbqG7hhpwjIm3NKbUJicIgMJvpVMyzVobFv%2BT0htSu5kLYbs453IQC9gHT4sMv3UWF%2F68xGagD5Hxj44gLSFcPybd%2F3WxWo155ty9m%2BfoHM7OpLGHyEAiZnU%2FuICUbp%2FVJUlb8hVyB4H5XOE5bjGaBcvN%2BeCvoc72I70q%2BISEcT5J0JjjXIiE3f7%2BmxVCzS4VnGI8WrQ0fdPTU21whtWphdrEOtSCCNBsuyD9v31VdQQmZslhE5CIhFRe%2BTyWCrxGSQ%2FtNd6LlztY4cTtkxjNnye%2Bfqf1kYFXH2%2FmCZMX2BZ1MIehsL8GOqUBC86TyTOBO33VX7DHtYmgKd4LRDUDBMSwubg04%2BYKO4cgafCWoHUTgzTMJuqNteBw9PrDQSmk2oJtZaV6EVh3PYlwkNxVvu7VuOBL08bPsVSDQoKUrrBZTBXvpx3FsHgDvZDTZ0FWn4auaX8RmozA0%2BuqLE4c23syLYVAJWhUANwWYp%2Ffbq6CDRBMUayg8D7Fvz%2BIhUbIPh%2FD%2FcJQyHnV%2FwfjwNt4&X-Amz-Signature=8d1dfe295e72abdf359e5cccc36f8e7ac6724ff44d1cf455393eac777d4f8289&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LXBEQD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBg2mCckUKRaFdldTkWzWUgtcTCpL%2BG9CSp95s%2Bt9tw%2BAiEA0s%2BiIipeJylGdNhNXKDt3g6JfSW9082DlGEv8%2Fh89qEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIph08DsuXNMBv8pAyrcA2Axc6G8Pq7AVSrSEWd75siAn1oJHy6ZDLP8A23kcExwZ%2FbZdfQnCduxwtQwHbb95sE28ywpo0j3p0neo6N8H9vyskAPD4Pz3gGAWYkcAYdi2NN%2BH97Zw7cSSp1UTmrVkYAUzC%2FAKzc3kX9pyESFj%2BpdZLpMqdBnxFyMoF8qpvFXaLNraPseDTM7YbMk0aZN1u1wVMpaPO33byswSPElfri71qllkjrdCO0O65c%2BJze0FxlPKhP6bEzC%2FrIt2oDLlsvkqsvFTPt6sqsCsrnT44QnqOjFSj8t9ZlWvaQmSdKe1qb3RYE0Fh7wbBWIYKs81yHOTAJdfzM5poM%2BbqG7hhpwjIm3NKbUJicIgMJvpVMyzVobFv%2BT0htSu5kLYbs453IQC9gHT4sMv3UWF%2F68xGagD5Hxj44gLSFcPybd%2F3WxWo155ty9m%2BfoHM7OpLGHyEAiZnU%2FuICUbp%2FVJUlb8hVyB4H5XOE5bjGaBcvN%2BeCvoc72I70q%2BISEcT5J0JjjXIiE3f7%2BmxVCzS4VnGI8WrQ0fdPTU21whtWphdrEOtSCCNBsuyD9v31VdQQmZslhE5CIhFRe%2BTyWCrxGSQ%2FtNd6LlztY4cTtkxjNnye%2Bfqf1kYFXH2%2FmCZMX2BZ1MIehsL8GOqUBC86TyTOBO33VX7DHtYmgKd4LRDUDBMSwubg04%2BYKO4cgafCWoHUTgzTMJuqNteBw9PrDQSmk2oJtZaV6EVh3PYlwkNxVvu7VuOBL08bPsVSDQoKUrrBZTBXvpx3FsHgDvZDTZ0FWn4auaX8RmozA0%2BuqLE4c23syLYVAJWhUANwWYp%2Ffbq6CDRBMUayg8D7Fvz%2BIhUbIPh%2FD%2FcJQyHnV%2FwfjwNt4&X-Amz-Signature=a7f44a7752851d66d5fe03c389d2098330d237f27d12408f66f593bd9d184973&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LXBEQD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBg2mCckUKRaFdldTkWzWUgtcTCpL%2BG9CSp95s%2Bt9tw%2BAiEA0s%2BiIipeJylGdNhNXKDt3g6JfSW9082DlGEv8%2Fh89qEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIph08DsuXNMBv8pAyrcA2Axc6G8Pq7AVSrSEWd75siAn1oJHy6ZDLP8A23kcExwZ%2FbZdfQnCduxwtQwHbb95sE28ywpo0j3p0neo6N8H9vyskAPD4Pz3gGAWYkcAYdi2NN%2BH97Zw7cSSp1UTmrVkYAUzC%2FAKzc3kX9pyESFj%2BpdZLpMqdBnxFyMoF8qpvFXaLNraPseDTM7YbMk0aZN1u1wVMpaPO33byswSPElfri71qllkjrdCO0O65c%2BJze0FxlPKhP6bEzC%2FrIt2oDLlsvkqsvFTPt6sqsCsrnT44QnqOjFSj8t9ZlWvaQmSdKe1qb3RYE0Fh7wbBWIYKs81yHOTAJdfzM5poM%2BbqG7hhpwjIm3NKbUJicIgMJvpVMyzVobFv%2BT0htSu5kLYbs453IQC9gHT4sMv3UWF%2F68xGagD5Hxj44gLSFcPybd%2F3WxWo155ty9m%2BfoHM7OpLGHyEAiZnU%2FuICUbp%2FVJUlb8hVyB4H5XOE5bjGaBcvN%2BeCvoc72I70q%2BISEcT5J0JjjXIiE3f7%2BmxVCzS4VnGI8WrQ0fdPTU21whtWphdrEOtSCCNBsuyD9v31VdQQmZslhE5CIhFRe%2BTyWCrxGSQ%2FtNd6LlztY4cTtkxjNnye%2Bfqf1kYFXH2%2FmCZMX2BZ1MIehsL8GOqUBC86TyTOBO33VX7DHtYmgKd4LRDUDBMSwubg04%2BYKO4cgafCWoHUTgzTMJuqNteBw9PrDQSmk2oJtZaV6EVh3PYlwkNxVvu7VuOBL08bPsVSDQoKUrrBZTBXvpx3FsHgDvZDTZ0FWn4auaX8RmozA0%2BuqLE4c23syLYVAJWhUANwWYp%2Ffbq6CDRBMUayg8D7Fvz%2BIhUbIPh%2FD%2FcJQyHnV%2FwfjwNt4&X-Amz-Signature=a11e5ff986c331dd2a5e07ef5618d04118da2a428c4567d984e1ede2f63a523c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LXBEQD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBg2mCckUKRaFdldTkWzWUgtcTCpL%2BG9CSp95s%2Bt9tw%2BAiEA0s%2BiIipeJylGdNhNXKDt3g6JfSW9082DlGEv8%2Fh89qEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIph08DsuXNMBv8pAyrcA2Axc6G8Pq7AVSrSEWd75siAn1oJHy6ZDLP8A23kcExwZ%2FbZdfQnCduxwtQwHbb95sE28ywpo0j3p0neo6N8H9vyskAPD4Pz3gGAWYkcAYdi2NN%2BH97Zw7cSSp1UTmrVkYAUzC%2FAKzc3kX9pyESFj%2BpdZLpMqdBnxFyMoF8qpvFXaLNraPseDTM7YbMk0aZN1u1wVMpaPO33byswSPElfri71qllkjrdCO0O65c%2BJze0FxlPKhP6bEzC%2FrIt2oDLlsvkqsvFTPt6sqsCsrnT44QnqOjFSj8t9ZlWvaQmSdKe1qb3RYE0Fh7wbBWIYKs81yHOTAJdfzM5poM%2BbqG7hhpwjIm3NKbUJicIgMJvpVMyzVobFv%2BT0htSu5kLYbs453IQC9gHT4sMv3UWF%2F68xGagD5Hxj44gLSFcPybd%2F3WxWo155ty9m%2BfoHM7OpLGHyEAiZnU%2FuICUbp%2FVJUlb8hVyB4H5XOE5bjGaBcvN%2BeCvoc72I70q%2BISEcT5J0JjjXIiE3f7%2BmxVCzS4VnGI8WrQ0fdPTU21whtWphdrEOtSCCNBsuyD9v31VdQQmZslhE5CIhFRe%2BTyWCrxGSQ%2FtNd6LlztY4cTtkxjNnye%2Bfqf1kYFXH2%2FmCZMX2BZ1MIehsL8GOqUBC86TyTOBO33VX7DHtYmgKd4LRDUDBMSwubg04%2BYKO4cgafCWoHUTgzTMJuqNteBw9PrDQSmk2oJtZaV6EVh3PYlwkNxVvu7VuOBL08bPsVSDQoKUrrBZTBXvpx3FsHgDvZDTZ0FWn4auaX8RmozA0%2BuqLE4c23syLYVAJWhUANwWYp%2Ffbq6CDRBMUayg8D7Fvz%2BIhUbIPh%2FD%2FcJQyHnV%2FwfjwNt4&X-Amz-Signature=db59e9491294a16ca8162166410d9696ed0407e4d8a82ae2a018f2bc7da4f1b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LXBEQD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBg2mCckUKRaFdldTkWzWUgtcTCpL%2BG9CSp95s%2Bt9tw%2BAiEA0s%2BiIipeJylGdNhNXKDt3g6JfSW9082DlGEv8%2Fh89qEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIph08DsuXNMBv8pAyrcA2Axc6G8Pq7AVSrSEWd75siAn1oJHy6ZDLP8A23kcExwZ%2FbZdfQnCduxwtQwHbb95sE28ywpo0j3p0neo6N8H9vyskAPD4Pz3gGAWYkcAYdi2NN%2BH97Zw7cSSp1UTmrVkYAUzC%2FAKzc3kX9pyESFj%2BpdZLpMqdBnxFyMoF8qpvFXaLNraPseDTM7YbMk0aZN1u1wVMpaPO33byswSPElfri71qllkjrdCO0O65c%2BJze0FxlPKhP6bEzC%2FrIt2oDLlsvkqsvFTPt6sqsCsrnT44QnqOjFSj8t9ZlWvaQmSdKe1qb3RYE0Fh7wbBWIYKs81yHOTAJdfzM5poM%2BbqG7hhpwjIm3NKbUJicIgMJvpVMyzVobFv%2BT0htSu5kLYbs453IQC9gHT4sMv3UWF%2F68xGagD5Hxj44gLSFcPybd%2F3WxWo155ty9m%2BfoHM7OpLGHyEAiZnU%2FuICUbp%2FVJUlb8hVyB4H5XOE5bjGaBcvN%2BeCvoc72I70q%2BISEcT5J0JjjXIiE3f7%2BmxVCzS4VnGI8WrQ0fdPTU21whtWphdrEOtSCCNBsuyD9v31VdQQmZslhE5CIhFRe%2BTyWCrxGSQ%2FtNd6LlztY4cTtkxjNnye%2Bfqf1kYFXH2%2FmCZMX2BZ1MIehsL8GOqUBC86TyTOBO33VX7DHtYmgKd4LRDUDBMSwubg04%2BYKO4cgafCWoHUTgzTMJuqNteBw9PrDQSmk2oJtZaV6EVh3PYlwkNxVvu7VuOBL08bPsVSDQoKUrrBZTBXvpx3FsHgDvZDTZ0FWn4auaX8RmozA0%2BuqLE4c23syLYVAJWhUANwWYp%2Ffbq6CDRBMUayg8D7Fvz%2BIhUbIPh%2FD%2FcJQyHnV%2FwfjwNt4&X-Amz-Signature=bdc95096d17c5b290b6c6cb8c67da66dd480b72a4b4f97afe862ecc8734ba033&X-Amz-SignedHeaders=host&x-id=GetObject)
