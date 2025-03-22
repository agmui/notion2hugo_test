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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RVAJBWK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC1eblZQQY699pqyO4hlrJzGr2M1QyGPM2lYBhMfwU3nAIhAMNYQEn1yGRqkMvpwVeTvZ9wxHq8QZx3Ysf10GqyDXSjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4s%2BJNKIhzUTI25gq3AMOcYQrE2iktjsszipnciHoOI0zh%2BEPSsdusA8%2BiLB9jJBLwSYG%2FLe4Yz%2FrT5Py2%2FfY9wx06x%2FJKvpStZHFufKoU%2B1qpoV%2FpAqrxF3pmJ5YAOFleZkNAyvlHxoncMGcYnEHHhu1%2BLQnJ9H%2F6RZFlL9aJ00wqT4A3GUq3g4qsf%2FLgd2RmoKBvHlJ%2BE%2BX5PPKqaAI4HYM6My4y0ZiOf5xGqR7WLmF7yGUmyNai5yBEiQP%2BcQsX6wUvtJzrlzAGltvepPIYFr%2B6T9V4YmZv6N%2FEPfyeHP1uetZp7k%2FZlIkozq5zn5Hcgn4%2BPScqXObf9V4NGBRDQo2wW8kiFSC5wuUEVfzLQfTwWHuepKjKl%2F7oCPe3h%2FrTKaWMk2UgQqYbW4wikCmFj26NDNDc19ZzY83QzS%2FsXkMFRO%2FdNhxfxP0g1olpqV%2FmM5kkZ%2B6iCadQo3A2OOFwntolmg7LnrCfjUEf4cvKPfhANbS3wBrVFIInwk9wPUqcYxGFidMeTaaUSxGVagR%2BYURUx5DKu%2BjBPsmGPUOHJMPBwROWa6oxpZEmjze%2BDyahCA3kxrx56vY4aOC0pElkCNe4x%2B%2FiPWHrYV7Nl7DH4cPqx6Gk09Q87dp6t%2BtBDW8b0P2svkDfPdpiDD76Pi%2BBjqkAfl1%2BnDUzOR76ixVV2k7%2FY55O5EQEczzzabL%2BL4IwhkeKYCq3geg2G%2BqlK9pUfOBTN%2B6GmX0%2FrZKPewbuEq3TB%2FvqL6jkr%2BNgeDdAYJ67bKfg4d3vyeuEzHENcGnK9CqwfmWmgNxfZ0QVu4b4b56or%2BP9O0gIMIvA4E0OLJEXB%2F2L2K%2Bv2wkouLsK8X7k1sJMMVpgFAiP11ytO0hBu5HMobp8n4H&X-Amz-Signature=3d97ee0021fcd07e4c2d16d8d94ad0755a8eefddd7c4cd53376208ab1f82fd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RVAJBWK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC1eblZQQY699pqyO4hlrJzGr2M1QyGPM2lYBhMfwU3nAIhAMNYQEn1yGRqkMvpwVeTvZ9wxHq8QZx3Ysf10GqyDXSjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4s%2BJNKIhzUTI25gq3AMOcYQrE2iktjsszipnciHoOI0zh%2BEPSsdusA8%2BiLB9jJBLwSYG%2FLe4Yz%2FrT5Py2%2FfY9wx06x%2FJKvpStZHFufKoU%2B1qpoV%2FpAqrxF3pmJ5YAOFleZkNAyvlHxoncMGcYnEHHhu1%2BLQnJ9H%2F6RZFlL9aJ00wqT4A3GUq3g4qsf%2FLgd2RmoKBvHlJ%2BE%2BX5PPKqaAI4HYM6My4y0ZiOf5xGqR7WLmF7yGUmyNai5yBEiQP%2BcQsX6wUvtJzrlzAGltvepPIYFr%2B6T9V4YmZv6N%2FEPfyeHP1uetZp7k%2FZlIkozq5zn5Hcgn4%2BPScqXObf9V4NGBRDQo2wW8kiFSC5wuUEVfzLQfTwWHuepKjKl%2F7oCPe3h%2FrTKaWMk2UgQqYbW4wikCmFj26NDNDc19ZzY83QzS%2FsXkMFRO%2FdNhxfxP0g1olpqV%2FmM5kkZ%2B6iCadQo3A2OOFwntolmg7LnrCfjUEf4cvKPfhANbS3wBrVFIInwk9wPUqcYxGFidMeTaaUSxGVagR%2BYURUx5DKu%2BjBPsmGPUOHJMPBwROWa6oxpZEmjze%2BDyahCA3kxrx56vY4aOC0pElkCNe4x%2B%2FiPWHrYV7Nl7DH4cPqx6Gk09Q87dp6t%2BtBDW8b0P2svkDfPdpiDD76Pi%2BBjqkAfl1%2BnDUzOR76ixVV2k7%2FY55O5EQEczzzabL%2BL4IwhkeKYCq3geg2G%2BqlK9pUfOBTN%2B6GmX0%2FrZKPewbuEq3TB%2FvqL6jkr%2BNgeDdAYJ67bKfg4d3vyeuEzHENcGnK9CqwfmWmgNxfZ0QVu4b4b56or%2BP9O0gIMIvA4E0OLJEXB%2F2L2K%2Bv2wkouLsK8X7k1sJMMVpgFAiP11ytO0hBu5HMobp8n4H&X-Amz-Signature=9ae057f003613a6a2fb59c2cc552c48fc4357146f7df343157e73ec4cbcfd164&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RVAJBWK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC1eblZQQY699pqyO4hlrJzGr2M1QyGPM2lYBhMfwU3nAIhAMNYQEn1yGRqkMvpwVeTvZ9wxHq8QZx3Ysf10GqyDXSjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4s%2BJNKIhzUTI25gq3AMOcYQrE2iktjsszipnciHoOI0zh%2BEPSsdusA8%2BiLB9jJBLwSYG%2FLe4Yz%2FrT5Py2%2FfY9wx06x%2FJKvpStZHFufKoU%2B1qpoV%2FpAqrxF3pmJ5YAOFleZkNAyvlHxoncMGcYnEHHhu1%2BLQnJ9H%2F6RZFlL9aJ00wqT4A3GUq3g4qsf%2FLgd2RmoKBvHlJ%2BE%2BX5PPKqaAI4HYM6My4y0ZiOf5xGqR7WLmF7yGUmyNai5yBEiQP%2BcQsX6wUvtJzrlzAGltvepPIYFr%2B6T9V4YmZv6N%2FEPfyeHP1uetZp7k%2FZlIkozq5zn5Hcgn4%2BPScqXObf9V4NGBRDQo2wW8kiFSC5wuUEVfzLQfTwWHuepKjKl%2F7oCPe3h%2FrTKaWMk2UgQqYbW4wikCmFj26NDNDc19ZzY83QzS%2FsXkMFRO%2FdNhxfxP0g1olpqV%2FmM5kkZ%2B6iCadQo3A2OOFwntolmg7LnrCfjUEf4cvKPfhANbS3wBrVFIInwk9wPUqcYxGFidMeTaaUSxGVagR%2BYURUx5DKu%2BjBPsmGPUOHJMPBwROWa6oxpZEmjze%2BDyahCA3kxrx56vY4aOC0pElkCNe4x%2B%2FiPWHrYV7Nl7DH4cPqx6Gk09Q87dp6t%2BtBDW8b0P2svkDfPdpiDD76Pi%2BBjqkAfl1%2BnDUzOR76ixVV2k7%2FY55O5EQEczzzabL%2BL4IwhkeKYCq3geg2G%2BqlK9pUfOBTN%2B6GmX0%2FrZKPewbuEq3TB%2FvqL6jkr%2BNgeDdAYJ67bKfg4d3vyeuEzHENcGnK9CqwfmWmgNxfZ0QVu4b4b56or%2BP9O0gIMIvA4E0OLJEXB%2F2L2K%2Bv2wkouLsK8X7k1sJMMVpgFAiP11ytO0hBu5HMobp8n4H&X-Amz-Signature=b7a3c6f2bc3e0303dec620aa539711d3ef5666ff2fa94320f5bce8d7fa0db580&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RVAJBWK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC1eblZQQY699pqyO4hlrJzGr2M1QyGPM2lYBhMfwU3nAIhAMNYQEn1yGRqkMvpwVeTvZ9wxHq8QZx3Ysf10GqyDXSjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4s%2BJNKIhzUTI25gq3AMOcYQrE2iktjsszipnciHoOI0zh%2BEPSsdusA8%2BiLB9jJBLwSYG%2FLe4Yz%2FrT5Py2%2FfY9wx06x%2FJKvpStZHFufKoU%2B1qpoV%2FpAqrxF3pmJ5YAOFleZkNAyvlHxoncMGcYnEHHhu1%2BLQnJ9H%2F6RZFlL9aJ00wqT4A3GUq3g4qsf%2FLgd2RmoKBvHlJ%2BE%2BX5PPKqaAI4HYM6My4y0ZiOf5xGqR7WLmF7yGUmyNai5yBEiQP%2BcQsX6wUvtJzrlzAGltvepPIYFr%2B6T9V4YmZv6N%2FEPfyeHP1uetZp7k%2FZlIkozq5zn5Hcgn4%2BPScqXObf9V4NGBRDQo2wW8kiFSC5wuUEVfzLQfTwWHuepKjKl%2F7oCPe3h%2FrTKaWMk2UgQqYbW4wikCmFj26NDNDc19ZzY83QzS%2FsXkMFRO%2FdNhxfxP0g1olpqV%2FmM5kkZ%2B6iCadQo3A2OOFwntolmg7LnrCfjUEf4cvKPfhANbS3wBrVFIInwk9wPUqcYxGFidMeTaaUSxGVagR%2BYURUx5DKu%2BjBPsmGPUOHJMPBwROWa6oxpZEmjze%2BDyahCA3kxrx56vY4aOC0pElkCNe4x%2B%2FiPWHrYV7Nl7DH4cPqx6Gk09Q87dp6t%2BtBDW8b0P2svkDfPdpiDD76Pi%2BBjqkAfl1%2BnDUzOR76ixVV2k7%2FY55O5EQEczzzabL%2BL4IwhkeKYCq3geg2G%2BqlK9pUfOBTN%2B6GmX0%2FrZKPewbuEq3TB%2FvqL6jkr%2BNgeDdAYJ67bKfg4d3vyeuEzHENcGnK9CqwfmWmgNxfZ0QVu4b4b56or%2BP9O0gIMIvA4E0OLJEXB%2F2L2K%2Bv2wkouLsK8X7k1sJMMVpgFAiP11ytO0hBu5HMobp8n4H&X-Amz-Signature=7934674f228cb4ab44b4e3bd20fac2c464831a61745faf9baccfe2e3457621ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RVAJBWK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC1eblZQQY699pqyO4hlrJzGr2M1QyGPM2lYBhMfwU3nAIhAMNYQEn1yGRqkMvpwVeTvZ9wxHq8QZx3Ysf10GqyDXSjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4s%2BJNKIhzUTI25gq3AMOcYQrE2iktjsszipnciHoOI0zh%2BEPSsdusA8%2BiLB9jJBLwSYG%2FLe4Yz%2FrT5Py2%2FfY9wx06x%2FJKvpStZHFufKoU%2B1qpoV%2FpAqrxF3pmJ5YAOFleZkNAyvlHxoncMGcYnEHHhu1%2BLQnJ9H%2F6RZFlL9aJ00wqT4A3GUq3g4qsf%2FLgd2RmoKBvHlJ%2BE%2BX5PPKqaAI4HYM6My4y0ZiOf5xGqR7WLmF7yGUmyNai5yBEiQP%2BcQsX6wUvtJzrlzAGltvepPIYFr%2B6T9V4YmZv6N%2FEPfyeHP1uetZp7k%2FZlIkozq5zn5Hcgn4%2BPScqXObf9V4NGBRDQo2wW8kiFSC5wuUEVfzLQfTwWHuepKjKl%2F7oCPe3h%2FrTKaWMk2UgQqYbW4wikCmFj26NDNDc19ZzY83QzS%2FsXkMFRO%2FdNhxfxP0g1olpqV%2FmM5kkZ%2B6iCadQo3A2OOFwntolmg7LnrCfjUEf4cvKPfhANbS3wBrVFIInwk9wPUqcYxGFidMeTaaUSxGVagR%2BYURUx5DKu%2BjBPsmGPUOHJMPBwROWa6oxpZEmjze%2BDyahCA3kxrx56vY4aOC0pElkCNe4x%2B%2FiPWHrYV7Nl7DH4cPqx6Gk09Q87dp6t%2BtBDW8b0P2svkDfPdpiDD76Pi%2BBjqkAfl1%2BnDUzOR76ixVV2k7%2FY55O5EQEczzzabL%2BL4IwhkeKYCq3geg2G%2BqlK9pUfOBTN%2B6GmX0%2FrZKPewbuEq3TB%2FvqL6jkr%2BNgeDdAYJ67bKfg4d3vyeuEzHENcGnK9CqwfmWmgNxfZ0QVu4b4b56or%2BP9O0gIMIvA4E0OLJEXB%2F2L2K%2Bv2wkouLsK8X7k1sJMMVpgFAiP11ytO0hBu5HMobp8n4H&X-Amz-Signature=742b76015e754d49fcc96c396933993aa17e17f81c2f004d03b972a9e4733d80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RVAJBWK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC1eblZQQY699pqyO4hlrJzGr2M1QyGPM2lYBhMfwU3nAIhAMNYQEn1yGRqkMvpwVeTvZ9wxHq8QZx3Ysf10GqyDXSjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzu4s%2BJNKIhzUTI25gq3AMOcYQrE2iktjsszipnciHoOI0zh%2BEPSsdusA8%2BiLB9jJBLwSYG%2FLe4Yz%2FrT5Py2%2FfY9wx06x%2FJKvpStZHFufKoU%2B1qpoV%2FpAqrxF3pmJ5YAOFleZkNAyvlHxoncMGcYnEHHhu1%2BLQnJ9H%2F6RZFlL9aJ00wqT4A3GUq3g4qsf%2FLgd2RmoKBvHlJ%2BE%2BX5PPKqaAI4HYM6My4y0ZiOf5xGqR7WLmF7yGUmyNai5yBEiQP%2BcQsX6wUvtJzrlzAGltvepPIYFr%2B6T9V4YmZv6N%2FEPfyeHP1uetZp7k%2FZlIkozq5zn5Hcgn4%2BPScqXObf9V4NGBRDQo2wW8kiFSC5wuUEVfzLQfTwWHuepKjKl%2F7oCPe3h%2FrTKaWMk2UgQqYbW4wikCmFj26NDNDc19ZzY83QzS%2FsXkMFRO%2FdNhxfxP0g1olpqV%2FmM5kkZ%2B6iCadQo3A2OOFwntolmg7LnrCfjUEf4cvKPfhANbS3wBrVFIInwk9wPUqcYxGFidMeTaaUSxGVagR%2BYURUx5DKu%2BjBPsmGPUOHJMPBwROWa6oxpZEmjze%2BDyahCA3kxrx56vY4aOC0pElkCNe4x%2B%2FiPWHrYV7Nl7DH4cPqx6Gk09Q87dp6t%2BtBDW8b0P2svkDfPdpiDD76Pi%2BBjqkAfl1%2BnDUzOR76ixVV2k7%2FY55O5EQEczzzabL%2BL4IwhkeKYCq3geg2G%2BqlK9pUfOBTN%2B6GmX0%2FrZKPewbuEq3TB%2FvqL6jkr%2BNgeDdAYJ67bKfg4d3vyeuEzHENcGnK9CqwfmWmgNxfZ0QVu4b4b56or%2BP9O0gIMIvA4E0OLJEXB%2F2L2K%2Bv2wkouLsK8X7k1sJMMVpgFAiP11ytO0hBu5HMobp8n4H&X-Amz-Signature=bdb87957689d130f8e3e696fbd95112502511a493fe220c0c5e232334e693b57&X-Amz-SignedHeaders=host&x-id=GetObject)
