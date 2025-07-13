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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSOYBD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwUiDs7dsc6YGDtIz%2FZJFzryWy%2FBmJUFMVHRUOhbVEgIgV4h1QnNoo5W8qRMTX8k1Cbjfd%2BNLEXT73ES2cZcswPMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitME351i8jJY29OircA6Urm79JvogWk%2F5hIBwmAoIrNv76HYtNeQwCLRemxmtFmrwiVHiiNRv2y9jadRZRLqyreowKsXO3x2KJM1wJHZssmUwtqsKqg8ZGtnNdSHwvDLforCALHZfG84I0g%2FMeie6TdzkJiTF2M1ky427zXognnrCGyaUKryZXLtWE9SInnkH7fHQ8%2BAbCn9GKOgwqoiFBQH5KSMCl%2FTYnEJObd3YjoQqnRXzHNw0JKkSruCpnz%2Fcl7P8GSolRaFa4yK3pcJJaXdoVRxTqZsYN%2F2JGZLZh3LUyJLQLNhKHiQicq1Q%2FgHUDQuoOIpfgQshIdyTf2K9oyW%2BD6xylWKJVgIvTh%2Fyq0LgjXTbQE6%2Fbp8WkiYkGnDc%2FIDqAJwqjmbXUTTK1Njag%2FsvrvLSiva4m4R%2F0sQDvjY2me0lxHEsGDMdAgTX6kSlw4mh0xB8%2FTkugOVyCVEXZF0hZxtilGwengVhbijqKgwHjbbcku%2FFde933Eyi1AusvWWfCmEy122fURYM92K3BnHc8TelmgEOpupIFDQNvUyeo9loDBn41yFPjslNIlZX3y43PHCKLegV4Hq0MuohkslB1YFW9q3FQiItE9auI6K6hySeQjs9filsJFVZ3Ub6fOhJxMM1njgwmMNSkzcMGOqUB1btqEcTDwt0t%2B%2Fy6vldYPQrE95G1Zef5LEwzx2ml8pSy%2BXBmGUsmlL209ZswtmdUhC1p%2FJgs81ODbuTIehXoAm57NRVLAaAO7Hj5ndRwQBZWntQLp6hABg7pyU77pMWtoKhe5GHsuFsqVwXwYILKzzIgFTh9taBrYQW%2B8xB5oERfxEGzXZvZwAh%2BVNJ11wfJiWTdkrJiHfgJtUQQD1CTOWT38szi&X-Amz-Signature=ec4a251e5c4747064823102d29ad17d7e03d0518cd19e87da77da2db0fab65a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSOYBD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwUiDs7dsc6YGDtIz%2FZJFzryWy%2FBmJUFMVHRUOhbVEgIgV4h1QnNoo5W8qRMTX8k1Cbjfd%2BNLEXT73ES2cZcswPMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitME351i8jJY29OircA6Urm79JvogWk%2F5hIBwmAoIrNv76HYtNeQwCLRemxmtFmrwiVHiiNRv2y9jadRZRLqyreowKsXO3x2KJM1wJHZssmUwtqsKqg8ZGtnNdSHwvDLforCALHZfG84I0g%2FMeie6TdzkJiTF2M1ky427zXognnrCGyaUKryZXLtWE9SInnkH7fHQ8%2BAbCn9GKOgwqoiFBQH5KSMCl%2FTYnEJObd3YjoQqnRXzHNw0JKkSruCpnz%2Fcl7P8GSolRaFa4yK3pcJJaXdoVRxTqZsYN%2F2JGZLZh3LUyJLQLNhKHiQicq1Q%2FgHUDQuoOIpfgQshIdyTf2K9oyW%2BD6xylWKJVgIvTh%2Fyq0LgjXTbQE6%2Fbp8WkiYkGnDc%2FIDqAJwqjmbXUTTK1Njag%2FsvrvLSiva4m4R%2F0sQDvjY2me0lxHEsGDMdAgTX6kSlw4mh0xB8%2FTkugOVyCVEXZF0hZxtilGwengVhbijqKgwHjbbcku%2FFde933Eyi1AusvWWfCmEy122fURYM92K3BnHc8TelmgEOpupIFDQNvUyeo9loDBn41yFPjslNIlZX3y43PHCKLegV4Hq0MuohkslB1YFW9q3FQiItE9auI6K6hySeQjs9filsJFVZ3Ub6fOhJxMM1njgwmMNSkzcMGOqUB1btqEcTDwt0t%2B%2Fy6vldYPQrE95G1Zef5LEwzx2ml8pSy%2BXBmGUsmlL209ZswtmdUhC1p%2FJgs81ODbuTIehXoAm57NRVLAaAO7Hj5ndRwQBZWntQLp6hABg7pyU77pMWtoKhe5GHsuFsqVwXwYILKzzIgFTh9taBrYQW%2B8xB5oERfxEGzXZvZwAh%2BVNJ11wfJiWTdkrJiHfgJtUQQD1CTOWT38szi&X-Amz-Signature=79077b6d42c6a27aaa1d9241534f80b60d70c014757051a6ec90d155460dc890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSOYBD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwUiDs7dsc6YGDtIz%2FZJFzryWy%2FBmJUFMVHRUOhbVEgIgV4h1QnNoo5W8qRMTX8k1Cbjfd%2BNLEXT73ES2cZcswPMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitME351i8jJY29OircA6Urm79JvogWk%2F5hIBwmAoIrNv76HYtNeQwCLRemxmtFmrwiVHiiNRv2y9jadRZRLqyreowKsXO3x2KJM1wJHZssmUwtqsKqg8ZGtnNdSHwvDLforCALHZfG84I0g%2FMeie6TdzkJiTF2M1ky427zXognnrCGyaUKryZXLtWE9SInnkH7fHQ8%2BAbCn9GKOgwqoiFBQH5KSMCl%2FTYnEJObd3YjoQqnRXzHNw0JKkSruCpnz%2Fcl7P8GSolRaFa4yK3pcJJaXdoVRxTqZsYN%2F2JGZLZh3LUyJLQLNhKHiQicq1Q%2FgHUDQuoOIpfgQshIdyTf2K9oyW%2BD6xylWKJVgIvTh%2Fyq0LgjXTbQE6%2Fbp8WkiYkGnDc%2FIDqAJwqjmbXUTTK1Njag%2FsvrvLSiva4m4R%2F0sQDvjY2me0lxHEsGDMdAgTX6kSlw4mh0xB8%2FTkugOVyCVEXZF0hZxtilGwengVhbijqKgwHjbbcku%2FFde933Eyi1AusvWWfCmEy122fURYM92K3BnHc8TelmgEOpupIFDQNvUyeo9loDBn41yFPjslNIlZX3y43PHCKLegV4Hq0MuohkslB1YFW9q3FQiItE9auI6K6hySeQjs9filsJFVZ3Ub6fOhJxMM1njgwmMNSkzcMGOqUB1btqEcTDwt0t%2B%2Fy6vldYPQrE95G1Zef5LEwzx2ml8pSy%2BXBmGUsmlL209ZswtmdUhC1p%2FJgs81ODbuTIehXoAm57NRVLAaAO7Hj5ndRwQBZWntQLp6hABg7pyU77pMWtoKhe5GHsuFsqVwXwYILKzzIgFTh9taBrYQW%2B8xB5oERfxEGzXZvZwAh%2BVNJ11wfJiWTdkrJiHfgJtUQQD1CTOWT38szi&X-Amz-Signature=540cbb8578db628c80529e2e0716f24bf4c990fe9d0760de291649c18fac6769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSOYBD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwUiDs7dsc6YGDtIz%2FZJFzryWy%2FBmJUFMVHRUOhbVEgIgV4h1QnNoo5W8qRMTX8k1Cbjfd%2BNLEXT73ES2cZcswPMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitME351i8jJY29OircA6Urm79JvogWk%2F5hIBwmAoIrNv76HYtNeQwCLRemxmtFmrwiVHiiNRv2y9jadRZRLqyreowKsXO3x2KJM1wJHZssmUwtqsKqg8ZGtnNdSHwvDLforCALHZfG84I0g%2FMeie6TdzkJiTF2M1ky427zXognnrCGyaUKryZXLtWE9SInnkH7fHQ8%2BAbCn9GKOgwqoiFBQH5KSMCl%2FTYnEJObd3YjoQqnRXzHNw0JKkSruCpnz%2Fcl7P8GSolRaFa4yK3pcJJaXdoVRxTqZsYN%2F2JGZLZh3LUyJLQLNhKHiQicq1Q%2FgHUDQuoOIpfgQshIdyTf2K9oyW%2BD6xylWKJVgIvTh%2Fyq0LgjXTbQE6%2Fbp8WkiYkGnDc%2FIDqAJwqjmbXUTTK1Njag%2FsvrvLSiva4m4R%2F0sQDvjY2me0lxHEsGDMdAgTX6kSlw4mh0xB8%2FTkugOVyCVEXZF0hZxtilGwengVhbijqKgwHjbbcku%2FFde933Eyi1AusvWWfCmEy122fURYM92K3BnHc8TelmgEOpupIFDQNvUyeo9loDBn41yFPjslNIlZX3y43PHCKLegV4Hq0MuohkslB1YFW9q3FQiItE9auI6K6hySeQjs9filsJFVZ3Ub6fOhJxMM1njgwmMNSkzcMGOqUB1btqEcTDwt0t%2B%2Fy6vldYPQrE95G1Zef5LEwzx2ml8pSy%2BXBmGUsmlL209ZswtmdUhC1p%2FJgs81ODbuTIehXoAm57NRVLAaAO7Hj5ndRwQBZWntQLp6hABg7pyU77pMWtoKhe5GHsuFsqVwXwYILKzzIgFTh9taBrYQW%2B8xB5oERfxEGzXZvZwAh%2BVNJ11wfJiWTdkrJiHfgJtUQQD1CTOWT38szi&X-Amz-Signature=710cd571afb98c90f37950fc1be719e74ae2f0b34db937fb9252d76117b86d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSOYBD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwUiDs7dsc6YGDtIz%2FZJFzryWy%2FBmJUFMVHRUOhbVEgIgV4h1QnNoo5W8qRMTX8k1Cbjfd%2BNLEXT73ES2cZcswPMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitME351i8jJY29OircA6Urm79JvogWk%2F5hIBwmAoIrNv76HYtNeQwCLRemxmtFmrwiVHiiNRv2y9jadRZRLqyreowKsXO3x2KJM1wJHZssmUwtqsKqg8ZGtnNdSHwvDLforCALHZfG84I0g%2FMeie6TdzkJiTF2M1ky427zXognnrCGyaUKryZXLtWE9SInnkH7fHQ8%2BAbCn9GKOgwqoiFBQH5KSMCl%2FTYnEJObd3YjoQqnRXzHNw0JKkSruCpnz%2Fcl7P8GSolRaFa4yK3pcJJaXdoVRxTqZsYN%2F2JGZLZh3LUyJLQLNhKHiQicq1Q%2FgHUDQuoOIpfgQshIdyTf2K9oyW%2BD6xylWKJVgIvTh%2Fyq0LgjXTbQE6%2Fbp8WkiYkGnDc%2FIDqAJwqjmbXUTTK1Njag%2FsvrvLSiva4m4R%2F0sQDvjY2me0lxHEsGDMdAgTX6kSlw4mh0xB8%2FTkugOVyCVEXZF0hZxtilGwengVhbijqKgwHjbbcku%2FFde933Eyi1AusvWWfCmEy122fURYM92K3BnHc8TelmgEOpupIFDQNvUyeo9loDBn41yFPjslNIlZX3y43PHCKLegV4Hq0MuohkslB1YFW9q3FQiItE9auI6K6hySeQjs9filsJFVZ3Ub6fOhJxMM1njgwmMNSkzcMGOqUB1btqEcTDwt0t%2B%2Fy6vldYPQrE95G1Zef5LEwzx2ml8pSy%2BXBmGUsmlL209ZswtmdUhC1p%2FJgs81ODbuTIehXoAm57NRVLAaAO7Hj5ndRwQBZWntQLp6hABg7pyU77pMWtoKhe5GHsuFsqVwXwYILKzzIgFTh9taBrYQW%2B8xB5oERfxEGzXZvZwAh%2BVNJ11wfJiWTdkrJiHfgJtUQQD1CTOWT38szi&X-Amz-Signature=a3d6d0b5ef04d8c99ccb8474997f28dfc9059d40cd18e163f3d7432589faa600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSOYBD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwUiDs7dsc6YGDtIz%2FZJFzryWy%2FBmJUFMVHRUOhbVEgIgV4h1QnNoo5W8qRMTX8k1Cbjfd%2BNLEXT73ES2cZcswPMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitME351i8jJY29OircA6Urm79JvogWk%2F5hIBwmAoIrNv76HYtNeQwCLRemxmtFmrwiVHiiNRv2y9jadRZRLqyreowKsXO3x2KJM1wJHZssmUwtqsKqg8ZGtnNdSHwvDLforCALHZfG84I0g%2FMeie6TdzkJiTF2M1ky427zXognnrCGyaUKryZXLtWE9SInnkH7fHQ8%2BAbCn9GKOgwqoiFBQH5KSMCl%2FTYnEJObd3YjoQqnRXzHNw0JKkSruCpnz%2Fcl7P8GSolRaFa4yK3pcJJaXdoVRxTqZsYN%2F2JGZLZh3LUyJLQLNhKHiQicq1Q%2FgHUDQuoOIpfgQshIdyTf2K9oyW%2BD6xylWKJVgIvTh%2Fyq0LgjXTbQE6%2Fbp8WkiYkGnDc%2FIDqAJwqjmbXUTTK1Njag%2FsvrvLSiva4m4R%2F0sQDvjY2me0lxHEsGDMdAgTX6kSlw4mh0xB8%2FTkugOVyCVEXZF0hZxtilGwengVhbijqKgwHjbbcku%2FFde933Eyi1AusvWWfCmEy122fURYM92K3BnHc8TelmgEOpupIFDQNvUyeo9loDBn41yFPjslNIlZX3y43PHCKLegV4Hq0MuohkslB1YFW9q3FQiItE9auI6K6hySeQjs9filsJFVZ3Ub6fOhJxMM1njgwmMNSkzcMGOqUB1btqEcTDwt0t%2B%2Fy6vldYPQrE95G1Zef5LEwzx2ml8pSy%2BXBmGUsmlL209ZswtmdUhC1p%2FJgs81ODbuTIehXoAm57NRVLAaAO7Hj5ndRwQBZWntQLp6hABg7pyU77pMWtoKhe5GHsuFsqVwXwYILKzzIgFTh9taBrYQW%2B8xB5oERfxEGzXZvZwAh%2BVNJ11wfJiWTdkrJiHfgJtUQQD1CTOWT38szi&X-Amz-Signature=f960bb9a3856552b8c9b0bd646774431e91770de9c10121f5080930e5f91cdc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
