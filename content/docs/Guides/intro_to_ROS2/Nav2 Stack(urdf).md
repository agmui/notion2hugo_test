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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKH4JBE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICK%2B06M3SQxgbS%2BTPvvQBu5AkliSyaQm%2BTZ%2F%2Bgj19QyYAiEA2hGK3cH1z1EOaKCK%2BPbO5Dei%2BvH%2BJDK3BXZt0MYpyoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG1L2PL3AF4C1ydSyircAxN8HYkVN7eUN6ZQDz%2Bjsosb%2BX9IrFOVDWEfIcc0OliEOFDPUsjc2CaWysAON0z%2BthxIe2IgU65Wf2B57NESc11gZqb2oKakUCg3UGuJZGIv3RU2NrrPwp2JFzB2LSVj6%2FxBtTB%2BpFfxTA9BpN%2BOFTBTEj2hKY6Gnprr5%2FBVJIfgiMqUurBumDsI0uqaotalWZ1ol%2BK%2BApvGltzgq4Q%2FCmDxKnwYWbe%2FSPliXCl%2BRIb368sR%2B4MsDhFVB7os%2FS8zanSFjRhwmOG4fIU1jdOrn613DrXxHa5GWjR65td7ade20oIiMvyVWDgqz35RQN%2B7NtPq5U%2BN1JHKdLxdg0%2BMUZkEPShs%2F9sdh6lQw9jtCsDcf5HCNnpBTZd48tkKBnRCFk3rssWqVthEs%2Bn%2BL8tcwZx6d9t8vNdygJLEP7qFeKl2eGaWB7GiIaFcpynHUkggy%2BKqtWjlGj4w2DhRiqZJnAP%2FGwkK0cCyeZrxvtO11bPte3w1sPG3OBaKCOiWADEFoWAGlZFkKCEf9EZLOonH8z3mjHp%2BBmBRwDkWGdJoKwnnqUeCuv4%2FTqIdddYNpSOQsG8OoErjJUtN1vescV9n2cVKa2wLdpiKUJdKAR3Z4Buhb0URbRUuNdG%2B5pqIMLL%2BlL0GOqUBGTEaOg6mXe78%2FUtMvnk7iPxNFLYEZGdOG86wqjnK3fOhLFzwTAPT2G5cVhzEaQI6ERWGVBpoTqWJbwbWz3tkvYfob8jprA3sKnEPhCVE1ayKJrMHQaenLexXYxCg6JO2z5C4DDi%2B4pXm4gglJjzUzqssehsbQeCy5%2B%2FS4PZNEPEu%2B2H9ll5y2jHV%2BRXBI3YDn2zPfjayZSaoaq0%2BYdnqK%2BIa6YHD&X-Amz-Signature=f337ebba95e5abb384fa276f5baaf03fbe8cb54ed524f5e866737ebdaf666808&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKH4JBE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICK%2B06M3SQxgbS%2BTPvvQBu5AkliSyaQm%2BTZ%2F%2Bgj19QyYAiEA2hGK3cH1z1EOaKCK%2BPbO5Dei%2BvH%2BJDK3BXZt0MYpyoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG1L2PL3AF4C1ydSyircAxN8HYkVN7eUN6ZQDz%2Bjsosb%2BX9IrFOVDWEfIcc0OliEOFDPUsjc2CaWysAON0z%2BthxIe2IgU65Wf2B57NESc11gZqb2oKakUCg3UGuJZGIv3RU2NrrPwp2JFzB2LSVj6%2FxBtTB%2BpFfxTA9BpN%2BOFTBTEj2hKY6Gnprr5%2FBVJIfgiMqUurBumDsI0uqaotalWZ1ol%2BK%2BApvGltzgq4Q%2FCmDxKnwYWbe%2FSPliXCl%2BRIb368sR%2B4MsDhFVB7os%2FS8zanSFjRhwmOG4fIU1jdOrn613DrXxHa5GWjR65td7ade20oIiMvyVWDgqz35RQN%2B7NtPq5U%2BN1JHKdLxdg0%2BMUZkEPShs%2F9sdh6lQw9jtCsDcf5HCNnpBTZd48tkKBnRCFk3rssWqVthEs%2Bn%2BL8tcwZx6d9t8vNdygJLEP7qFeKl2eGaWB7GiIaFcpynHUkggy%2BKqtWjlGj4w2DhRiqZJnAP%2FGwkK0cCyeZrxvtO11bPte3w1sPG3OBaKCOiWADEFoWAGlZFkKCEf9EZLOonH8z3mjHp%2BBmBRwDkWGdJoKwnnqUeCuv4%2FTqIdddYNpSOQsG8OoErjJUtN1vescV9n2cVKa2wLdpiKUJdKAR3Z4Buhb0URbRUuNdG%2B5pqIMLL%2BlL0GOqUBGTEaOg6mXe78%2FUtMvnk7iPxNFLYEZGdOG86wqjnK3fOhLFzwTAPT2G5cVhzEaQI6ERWGVBpoTqWJbwbWz3tkvYfob8jprA3sKnEPhCVE1ayKJrMHQaenLexXYxCg6JO2z5C4DDi%2B4pXm4gglJjzUzqssehsbQeCy5%2B%2FS4PZNEPEu%2B2H9ll5y2jHV%2BRXBI3YDn2zPfjayZSaoaq0%2BYdnqK%2BIa6YHD&X-Amz-Signature=200464b0a5dd60f261e3d9e1b15f22db61b0ebd6286c05b098b75a4a2e2ea009&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKH4JBE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICK%2B06M3SQxgbS%2BTPvvQBu5AkliSyaQm%2BTZ%2F%2Bgj19QyYAiEA2hGK3cH1z1EOaKCK%2BPbO5Dei%2BvH%2BJDK3BXZt0MYpyoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG1L2PL3AF4C1ydSyircAxN8HYkVN7eUN6ZQDz%2Bjsosb%2BX9IrFOVDWEfIcc0OliEOFDPUsjc2CaWysAON0z%2BthxIe2IgU65Wf2B57NESc11gZqb2oKakUCg3UGuJZGIv3RU2NrrPwp2JFzB2LSVj6%2FxBtTB%2BpFfxTA9BpN%2BOFTBTEj2hKY6Gnprr5%2FBVJIfgiMqUurBumDsI0uqaotalWZ1ol%2BK%2BApvGltzgq4Q%2FCmDxKnwYWbe%2FSPliXCl%2BRIb368sR%2B4MsDhFVB7os%2FS8zanSFjRhwmOG4fIU1jdOrn613DrXxHa5GWjR65td7ade20oIiMvyVWDgqz35RQN%2B7NtPq5U%2BN1JHKdLxdg0%2BMUZkEPShs%2F9sdh6lQw9jtCsDcf5HCNnpBTZd48tkKBnRCFk3rssWqVthEs%2Bn%2BL8tcwZx6d9t8vNdygJLEP7qFeKl2eGaWB7GiIaFcpynHUkggy%2BKqtWjlGj4w2DhRiqZJnAP%2FGwkK0cCyeZrxvtO11bPte3w1sPG3OBaKCOiWADEFoWAGlZFkKCEf9EZLOonH8z3mjHp%2BBmBRwDkWGdJoKwnnqUeCuv4%2FTqIdddYNpSOQsG8OoErjJUtN1vescV9n2cVKa2wLdpiKUJdKAR3Z4Buhb0URbRUuNdG%2B5pqIMLL%2BlL0GOqUBGTEaOg6mXe78%2FUtMvnk7iPxNFLYEZGdOG86wqjnK3fOhLFzwTAPT2G5cVhzEaQI6ERWGVBpoTqWJbwbWz3tkvYfob8jprA3sKnEPhCVE1ayKJrMHQaenLexXYxCg6JO2z5C4DDi%2B4pXm4gglJjzUzqssehsbQeCy5%2B%2FS4PZNEPEu%2B2H9ll5y2jHV%2BRXBI3YDn2zPfjayZSaoaq0%2BYdnqK%2BIa6YHD&X-Amz-Signature=0f2fd7f141d1d5be6f86a6722175982f66139e346c70c4d50590fe6357539c78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKH4JBE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICK%2B06M3SQxgbS%2BTPvvQBu5AkliSyaQm%2BTZ%2F%2Bgj19QyYAiEA2hGK3cH1z1EOaKCK%2BPbO5Dei%2BvH%2BJDK3BXZt0MYpyoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG1L2PL3AF4C1ydSyircAxN8HYkVN7eUN6ZQDz%2Bjsosb%2BX9IrFOVDWEfIcc0OliEOFDPUsjc2CaWysAON0z%2BthxIe2IgU65Wf2B57NESc11gZqb2oKakUCg3UGuJZGIv3RU2NrrPwp2JFzB2LSVj6%2FxBtTB%2BpFfxTA9BpN%2BOFTBTEj2hKY6Gnprr5%2FBVJIfgiMqUurBumDsI0uqaotalWZ1ol%2BK%2BApvGltzgq4Q%2FCmDxKnwYWbe%2FSPliXCl%2BRIb368sR%2B4MsDhFVB7os%2FS8zanSFjRhwmOG4fIU1jdOrn613DrXxHa5GWjR65td7ade20oIiMvyVWDgqz35RQN%2B7NtPq5U%2BN1JHKdLxdg0%2BMUZkEPShs%2F9sdh6lQw9jtCsDcf5HCNnpBTZd48tkKBnRCFk3rssWqVthEs%2Bn%2BL8tcwZx6d9t8vNdygJLEP7qFeKl2eGaWB7GiIaFcpynHUkggy%2BKqtWjlGj4w2DhRiqZJnAP%2FGwkK0cCyeZrxvtO11bPte3w1sPG3OBaKCOiWADEFoWAGlZFkKCEf9EZLOonH8z3mjHp%2BBmBRwDkWGdJoKwnnqUeCuv4%2FTqIdddYNpSOQsG8OoErjJUtN1vescV9n2cVKa2wLdpiKUJdKAR3Z4Buhb0URbRUuNdG%2B5pqIMLL%2BlL0GOqUBGTEaOg6mXe78%2FUtMvnk7iPxNFLYEZGdOG86wqjnK3fOhLFzwTAPT2G5cVhzEaQI6ERWGVBpoTqWJbwbWz3tkvYfob8jprA3sKnEPhCVE1ayKJrMHQaenLexXYxCg6JO2z5C4DDi%2B4pXm4gglJjzUzqssehsbQeCy5%2B%2FS4PZNEPEu%2B2H9ll5y2jHV%2BRXBI3YDn2zPfjayZSaoaq0%2BYdnqK%2BIa6YHD&X-Amz-Signature=e4daed2eb24de2c45dfa0b8b330e923f65e8b0b1ee8d802969e812b4cd97b0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKH4JBE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICK%2B06M3SQxgbS%2BTPvvQBu5AkliSyaQm%2BTZ%2F%2Bgj19QyYAiEA2hGK3cH1z1EOaKCK%2BPbO5Dei%2BvH%2BJDK3BXZt0MYpyoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG1L2PL3AF4C1ydSyircAxN8HYkVN7eUN6ZQDz%2Bjsosb%2BX9IrFOVDWEfIcc0OliEOFDPUsjc2CaWysAON0z%2BthxIe2IgU65Wf2B57NESc11gZqb2oKakUCg3UGuJZGIv3RU2NrrPwp2JFzB2LSVj6%2FxBtTB%2BpFfxTA9BpN%2BOFTBTEj2hKY6Gnprr5%2FBVJIfgiMqUurBumDsI0uqaotalWZ1ol%2BK%2BApvGltzgq4Q%2FCmDxKnwYWbe%2FSPliXCl%2BRIb368sR%2B4MsDhFVB7os%2FS8zanSFjRhwmOG4fIU1jdOrn613DrXxHa5GWjR65td7ade20oIiMvyVWDgqz35RQN%2B7NtPq5U%2BN1JHKdLxdg0%2BMUZkEPShs%2F9sdh6lQw9jtCsDcf5HCNnpBTZd48tkKBnRCFk3rssWqVthEs%2Bn%2BL8tcwZx6d9t8vNdygJLEP7qFeKl2eGaWB7GiIaFcpynHUkggy%2BKqtWjlGj4w2DhRiqZJnAP%2FGwkK0cCyeZrxvtO11bPte3w1sPG3OBaKCOiWADEFoWAGlZFkKCEf9EZLOonH8z3mjHp%2BBmBRwDkWGdJoKwnnqUeCuv4%2FTqIdddYNpSOQsG8OoErjJUtN1vescV9n2cVKa2wLdpiKUJdKAR3Z4Buhb0URbRUuNdG%2B5pqIMLL%2BlL0GOqUBGTEaOg6mXe78%2FUtMvnk7iPxNFLYEZGdOG86wqjnK3fOhLFzwTAPT2G5cVhzEaQI6ERWGVBpoTqWJbwbWz3tkvYfob8jprA3sKnEPhCVE1ayKJrMHQaenLexXYxCg6JO2z5C4DDi%2B4pXm4gglJjzUzqssehsbQeCy5%2B%2FS4PZNEPEu%2B2H9ll5y2jHV%2BRXBI3YDn2zPfjayZSaoaq0%2BYdnqK%2BIa6YHD&X-Amz-Signature=f284da689515884b4a4c022ba1bf59f53be7b01aee41555f6c3cd8f455040d79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQKH4JBE%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICK%2B06M3SQxgbS%2BTPvvQBu5AkliSyaQm%2BTZ%2F%2Bgj19QyYAiEA2hGK3cH1z1EOaKCK%2BPbO5Dei%2BvH%2BJDK3BXZt0MYpyoEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDG1L2PL3AF4C1ydSyircAxN8HYkVN7eUN6ZQDz%2Bjsosb%2BX9IrFOVDWEfIcc0OliEOFDPUsjc2CaWysAON0z%2BthxIe2IgU65Wf2B57NESc11gZqb2oKakUCg3UGuJZGIv3RU2NrrPwp2JFzB2LSVj6%2FxBtTB%2BpFfxTA9BpN%2BOFTBTEj2hKY6Gnprr5%2FBVJIfgiMqUurBumDsI0uqaotalWZ1ol%2BK%2BApvGltzgq4Q%2FCmDxKnwYWbe%2FSPliXCl%2BRIb368sR%2B4MsDhFVB7os%2FS8zanSFjRhwmOG4fIU1jdOrn613DrXxHa5GWjR65td7ade20oIiMvyVWDgqz35RQN%2B7NtPq5U%2BN1JHKdLxdg0%2BMUZkEPShs%2F9sdh6lQw9jtCsDcf5HCNnpBTZd48tkKBnRCFk3rssWqVthEs%2Bn%2BL8tcwZx6d9t8vNdygJLEP7qFeKl2eGaWB7GiIaFcpynHUkggy%2BKqtWjlGj4w2DhRiqZJnAP%2FGwkK0cCyeZrxvtO11bPte3w1sPG3OBaKCOiWADEFoWAGlZFkKCEf9EZLOonH8z3mjHp%2BBmBRwDkWGdJoKwnnqUeCuv4%2FTqIdddYNpSOQsG8OoErjJUtN1vescV9n2cVKa2wLdpiKUJdKAR3Z4Buhb0URbRUuNdG%2B5pqIMLL%2BlL0GOqUBGTEaOg6mXe78%2FUtMvnk7iPxNFLYEZGdOG86wqjnK3fOhLFzwTAPT2G5cVhzEaQI6ERWGVBpoTqWJbwbWz3tkvYfob8jprA3sKnEPhCVE1ayKJrMHQaenLexXYxCg6JO2z5C4DDi%2B4pXm4gglJjzUzqssehsbQeCy5%2B%2FS4PZNEPEu%2B2H9ll5y2jHV%2BRXBI3YDn2zPfjayZSaoaq0%2BYdnqK%2BIa6YHD&X-Amz-Signature=ea025038d7266fa984c50079c27dc752fa3f46822b4bf3a3eef8571fcaed5def&X-Amz-SignedHeaders=host&x-id=GetObject)
