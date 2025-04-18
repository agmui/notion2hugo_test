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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E4RNEI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF1eQakp5yL%2FhXYG0dHQUahvyXtVn30lRQfNFkmXm%2FKAiEAniPsXQnG8fPkb4gaxWgcOEmvW5D0VDJLiu6bXt5b21gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDlJxeBF3VdO5RY89ircA%2FGmMUCz%2FNdsoLmFFJXUsC%2F8uMwTKph6b2R%2F0izdXAniswBbZuMsG8S%2FHAozPkV2jiTvWK73sEM39cORGe8BCYh15KWAAjKnB8N4%2BgnJphN7OrQQNyYobyC2qbcSO3eg4hIHrbvA7tKrOGygKVD69QPKdNZFQw5p3OMBvbSichKQaKNpVTMgZwmBOQ4T2UYdmJbqU%2FB9pgOo%2BBnJA9vxjpu6p15YTBQ%2BS%2B002Wc1hXP2HuKkaDFW7jrbgz8FptjMwW1MZHM0p%2ByAdNYa2%2Fa%2FzVTgUpHglfrY5HjtaotI4b0jS19MRw%2BTRN7H5FPX66Lz0GIuYhwB05E0B6GpN34pAk34P%2BTkmd7sDrcBruGuKkWWOUqyGvAnrLZCF97QF%2FF9oi5b%2F1rW342KDOY%2BVm1vCoLVTCuEtIbjfgQHxNVssu7WynJ9%2BWv%2B1euH02nwKyVfRSFVnTkJqO%2BOnqKmYJsgTrZjIY7xO%2BpF6ZnnBQl1%2BK4Fa5tgqKCE3eDwcAYiFAG2Ctmfp7Lo4EHk2M%2FSwXvMrdmZ0OTzq4UZbIFiN%2BINRUdJ3ElCDItRZ87zFrq4h1Kya6sWBJFDVgeauF4SV4UPbi%2BQtSkmq2mIgUpMVmfF3gOCzFPbaY6TmUcvOcDnMObeh8AGOqUB59VflJ%2BODwdIuwSOeEuZXG9lkCOcsagHQrlu9TyZPhZPMaouo05dB1IEkRBZe8Xp8BQGQk3Vsy25IkOtZ561c9Hhi31gOZzlLegKLA03gLkt%2BPpdSn4f4edVQ5g5ZaYERO0t5cYJKgORNnzyjxTWlFhWPtcfFnYjd7gXBjDRSM1hdSyy6%2FvKihzYIfElgTMErWz2qZ%2BK%2BT8sOoW2n2M5S%2Bitzoqk&X-Amz-Signature=9bb64fd897a8111bffeccbe82f63bc76b68a7b76c0a82080a02db9a7debd50fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E4RNEI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF1eQakp5yL%2FhXYG0dHQUahvyXtVn30lRQfNFkmXm%2FKAiEAniPsXQnG8fPkb4gaxWgcOEmvW5D0VDJLiu6bXt5b21gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDlJxeBF3VdO5RY89ircA%2FGmMUCz%2FNdsoLmFFJXUsC%2F8uMwTKph6b2R%2F0izdXAniswBbZuMsG8S%2FHAozPkV2jiTvWK73sEM39cORGe8BCYh15KWAAjKnB8N4%2BgnJphN7OrQQNyYobyC2qbcSO3eg4hIHrbvA7tKrOGygKVD69QPKdNZFQw5p3OMBvbSichKQaKNpVTMgZwmBOQ4T2UYdmJbqU%2FB9pgOo%2BBnJA9vxjpu6p15YTBQ%2BS%2B002Wc1hXP2HuKkaDFW7jrbgz8FptjMwW1MZHM0p%2ByAdNYa2%2Fa%2FzVTgUpHglfrY5HjtaotI4b0jS19MRw%2BTRN7H5FPX66Lz0GIuYhwB05E0B6GpN34pAk34P%2BTkmd7sDrcBruGuKkWWOUqyGvAnrLZCF97QF%2FF9oi5b%2F1rW342KDOY%2BVm1vCoLVTCuEtIbjfgQHxNVssu7WynJ9%2BWv%2B1euH02nwKyVfRSFVnTkJqO%2BOnqKmYJsgTrZjIY7xO%2BpF6ZnnBQl1%2BK4Fa5tgqKCE3eDwcAYiFAG2Ctmfp7Lo4EHk2M%2FSwXvMrdmZ0OTzq4UZbIFiN%2BINRUdJ3ElCDItRZ87zFrq4h1Kya6sWBJFDVgeauF4SV4UPbi%2BQtSkmq2mIgUpMVmfF3gOCzFPbaY6TmUcvOcDnMObeh8AGOqUB59VflJ%2BODwdIuwSOeEuZXG9lkCOcsagHQrlu9TyZPhZPMaouo05dB1IEkRBZe8Xp8BQGQk3Vsy25IkOtZ561c9Hhi31gOZzlLegKLA03gLkt%2BPpdSn4f4edVQ5g5ZaYERO0t5cYJKgORNnzyjxTWlFhWPtcfFnYjd7gXBjDRSM1hdSyy6%2FvKihzYIfElgTMErWz2qZ%2BK%2BT8sOoW2n2M5S%2Bitzoqk&X-Amz-Signature=4853399ed890a1fabccd4c4a82efbed81079079d876b6f9ad0d28c1b7dcde512&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E4RNEI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF1eQakp5yL%2FhXYG0dHQUahvyXtVn30lRQfNFkmXm%2FKAiEAniPsXQnG8fPkb4gaxWgcOEmvW5D0VDJLiu6bXt5b21gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDlJxeBF3VdO5RY89ircA%2FGmMUCz%2FNdsoLmFFJXUsC%2F8uMwTKph6b2R%2F0izdXAniswBbZuMsG8S%2FHAozPkV2jiTvWK73sEM39cORGe8BCYh15KWAAjKnB8N4%2BgnJphN7OrQQNyYobyC2qbcSO3eg4hIHrbvA7tKrOGygKVD69QPKdNZFQw5p3OMBvbSichKQaKNpVTMgZwmBOQ4T2UYdmJbqU%2FB9pgOo%2BBnJA9vxjpu6p15YTBQ%2BS%2B002Wc1hXP2HuKkaDFW7jrbgz8FptjMwW1MZHM0p%2ByAdNYa2%2Fa%2FzVTgUpHglfrY5HjtaotI4b0jS19MRw%2BTRN7H5FPX66Lz0GIuYhwB05E0B6GpN34pAk34P%2BTkmd7sDrcBruGuKkWWOUqyGvAnrLZCF97QF%2FF9oi5b%2F1rW342KDOY%2BVm1vCoLVTCuEtIbjfgQHxNVssu7WynJ9%2BWv%2B1euH02nwKyVfRSFVnTkJqO%2BOnqKmYJsgTrZjIY7xO%2BpF6ZnnBQl1%2BK4Fa5tgqKCE3eDwcAYiFAG2Ctmfp7Lo4EHk2M%2FSwXvMrdmZ0OTzq4UZbIFiN%2BINRUdJ3ElCDItRZ87zFrq4h1Kya6sWBJFDVgeauF4SV4UPbi%2BQtSkmq2mIgUpMVmfF3gOCzFPbaY6TmUcvOcDnMObeh8AGOqUB59VflJ%2BODwdIuwSOeEuZXG9lkCOcsagHQrlu9TyZPhZPMaouo05dB1IEkRBZe8Xp8BQGQk3Vsy25IkOtZ561c9Hhi31gOZzlLegKLA03gLkt%2BPpdSn4f4edVQ5g5ZaYERO0t5cYJKgORNnzyjxTWlFhWPtcfFnYjd7gXBjDRSM1hdSyy6%2FvKihzYIfElgTMErWz2qZ%2BK%2BT8sOoW2n2M5S%2Bitzoqk&X-Amz-Signature=1d5035b51de5d038dfcac7d34a15608b284107548fff7f7c02c7b686abe356ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E4RNEI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF1eQakp5yL%2FhXYG0dHQUahvyXtVn30lRQfNFkmXm%2FKAiEAniPsXQnG8fPkb4gaxWgcOEmvW5D0VDJLiu6bXt5b21gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDlJxeBF3VdO5RY89ircA%2FGmMUCz%2FNdsoLmFFJXUsC%2F8uMwTKph6b2R%2F0izdXAniswBbZuMsG8S%2FHAozPkV2jiTvWK73sEM39cORGe8BCYh15KWAAjKnB8N4%2BgnJphN7OrQQNyYobyC2qbcSO3eg4hIHrbvA7tKrOGygKVD69QPKdNZFQw5p3OMBvbSichKQaKNpVTMgZwmBOQ4T2UYdmJbqU%2FB9pgOo%2BBnJA9vxjpu6p15YTBQ%2BS%2B002Wc1hXP2HuKkaDFW7jrbgz8FptjMwW1MZHM0p%2ByAdNYa2%2Fa%2FzVTgUpHglfrY5HjtaotI4b0jS19MRw%2BTRN7H5FPX66Lz0GIuYhwB05E0B6GpN34pAk34P%2BTkmd7sDrcBruGuKkWWOUqyGvAnrLZCF97QF%2FF9oi5b%2F1rW342KDOY%2BVm1vCoLVTCuEtIbjfgQHxNVssu7WynJ9%2BWv%2B1euH02nwKyVfRSFVnTkJqO%2BOnqKmYJsgTrZjIY7xO%2BpF6ZnnBQl1%2BK4Fa5tgqKCE3eDwcAYiFAG2Ctmfp7Lo4EHk2M%2FSwXvMrdmZ0OTzq4UZbIFiN%2BINRUdJ3ElCDItRZ87zFrq4h1Kya6sWBJFDVgeauF4SV4UPbi%2BQtSkmq2mIgUpMVmfF3gOCzFPbaY6TmUcvOcDnMObeh8AGOqUB59VflJ%2BODwdIuwSOeEuZXG9lkCOcsagHQrlu9TyZPhZPMaouo05dB1IEkRBZe8Xp8BQGQk3Vsy25IkOtZ561c9Hhi31gOZzlLegKLA03gLkt%2BPpdSn4f4edVQ5g5ZaYERO0t5cYJKgORNnzyjxTWlFhWPtcfFnYjd7gXBjDRSM1hdSyy6%2FvKihzYIfElgTMErWz2qZ%2BK%2BT8sOoW2n2M5S%2Bitzoqk&X-Amz-Signature=4f48be098095acaa9839f66a6b5364adfb5dcea557f7c01df3f9c28fc9de6c41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E4RNEI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF1eQakp5yL%2FhXYG0dHQUahvyXtVn30lRQfNFkmXm%2FKAiEAniPsXQnG8fPkb4gaxWgcOEmvW5D0VDJLiu6bXt5b21gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDlJxeBF3VdO5RY89ircA%2FGmMUCz%2FNdsoLmFFJXUsC%2F8uMwTKph6b2R%2F0izdXAniswBbZuMsG8S%2FHAozPkV2jiTvWK73sEM39cORGe8BCYh15KWAAjKnB8N4%2BgnJphN7OrQQNyYobyC2qbcSO3eg4hIHrbvA7tKrOGygKVD69QPKdNZFQw5p3OMBvbSichKQaKNpVTMgZwmBOQ4T2UYdmJbqU%2FB9pgOo%2BBnJA9vxjpu6p15YTBQ%2BS%2B002Wc1hXP2HuKkaDFW7jrbgz8FptjMwW1MZHM0p%2ByAdNYa2%2Fa%2FzVTgUpHglfrY5HjtaotI4b0jS19MRw%2BTRN7H5FPX66Lz0GIuYhwB05E0B6GpN34pAk34P%2BTkmd7sDrcBruGuKkWWOUqyGvAnrLZCF97QF%2FF9oi5b%2F1rW342KDOY%2BVm1vCoLVTCuEtIbjfgQHxNVssu7WynJ9%2BWv%2B1euH02nwKyVfRSFVnTkJqO%2BOnqKmYJsgTrZjIY7xO%2BpF6ZnnBQl1%2BK4Fa5tgqKCE3eDwcAYiFAG2Ctmfp7Lo4EHk2M%2FSwXvMrdmZ0OTzq4UZbIFiN%2BINRUdJ3ElCDItRZ87zFrq4h1Kya6sWBJFDVgeauF4SV4UPbi%2BQtSkmq2mIgUpMVmfF3gOCzFPbaY6TmUcvOcDnMObeh8AGOqUB59VflJ%2BODwdIuwSOeEuZXG9lkCOcsagHQrlu9TyZPhZPMaouo05dB1IEkRBZe8Xp8BQGQk3Vsy25IkOtZ561c9Hhi31gOZzlLegKLA03gLkt%2BPpdSn4f4edVQ5g5ZaYERO0t5cYJKgORNnzyjxTWlFhWPtcfFnYjd7gXBjDRSM1hdSyy6%2FvKihzYIfElgTMErWz2qZ%2BK%2BT8sOoW2n2M5S%2Bitzoqk&X-Amz-Signature=2e5c88994abd516b248a7181adee5855a27480223ad659372bcbd99015dd897d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7E4RNEI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF1eQakp5yL%2FhXYG0dHQUahvyXtVn30lRQfNFkmXm%2FKAiEAniPsXQnG8fPkb4gaxWgcOEmvW5D0VDJLiu6bXt5b21gq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDlJxeBF3VdO5RY89ircA%2FGmMUCz%2FNdsoLmFFJXUsC%2F8uMwTKph6b2R%2F0izdXAniswBbZuMsG8S%2FHAozPkV2jiTvWK73sEM39cORGe8BCYh15KWAAjKnB8N4%2BgnJphN7OrQQNyYobyC2qbcSO3eg4hIHrbvA7tKrOGygKVD69QPKdNZFQw5p3OMBvbSichKQaKNpVTMgZwmBOQ4T2UYdmJbqU%2FB9pgOo%2BBnJA9vxjpu6p15YTBQ%2BS%2B002Wc1hXP2HuKkaDFW7jrbgz8FptjMwW1MZHM0p%2ByAdNYa2%2Fa%2FzVTgUpHglfrY5HjtaotI4b0jS19MRw%2BTRN7H5FPX66Lz0GIuYhwB05E0B6GpN34pAk34P%2BTkmd7sDrcBruGuKkWWOUqyGvAnrLZCF97QF%2FF9oi5b%2F1rW342KDOY%2BVm1vCoLVTCuEtIbjfgQHxNVssu7WynJ9%2BWv%2B1euH02nwKyVfRSFVnTkJqO%2BOnqKmYJsgTrZjIY7xO%2BpF6ZnnBQl1%2BK4Fa5tgqKCE3eDwcAYiFAG2Ctmfp7Lo4EHk2M%2FSwXvMrdmZ0OTzq4UZbIFiN%2BINRUdJ3ElCDItRZ87zFrq4h1Kya6sWBJFDVgeauF4SV4UPbi%2BQtSkmq2mIgUpMVmfF3gOCzFPbaY6TmUcvOcDnMObeh8AGOqUB59VflJ%2BODwdIuwSOeEuZXG9lkCOcsagHQrlu9TyZPhZPMaouo05dB1IEkRBZe8Xp8BQGQk3Vsy25IkOtZ561c9Hhi31gOZzlLegKLA03gLkt%2BPpdSn4f4edVQ5g5ZaYERO0t5cYJKgORNnzyjxTWlFhWPtcfFnYjd7gXBjDRSM1hdSyy6%2FvKihzYIfElgTMErWz2qZ%2BK%2BT8sOoW2n2M5S%2Bitzoqk&X-Amz-Signature=c8cbfede165be8bd7dd475a32ffd78f29fd9aa81096077dd1cb191c62c54321f&X-Amz-SignedHeaders=host&x-id=GetObject)
