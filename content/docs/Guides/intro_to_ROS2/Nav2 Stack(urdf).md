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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKSE6TB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBEtXABTuM%2FhGETirYMe2Fx8fFvHEADiGJXwfP7Yb03VAiAevXfpUMIvmMoYATRe6a8QK3Dqw78LO1AhjCmIGn5hWSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1AaOylqkg2cWPFg6KtwDDmn9fXsvljyypRM2WfSafXsRjwIW098gT%2BIOf5bLecdUo9c1XntD1q9g8Du1HBmP2Zy6F6T%2FO8cYQkXVFo8xaH89ctaycMr5%2FpHfuNH47BGJAhYy21GUvJhNdgDJERxaCx%2FAfyPwhn9rzgN8xrItaCZaXeR6I2rF2EZBH5LX0zJlNHpNEv%2BHBPl1kPU12AId1lTG%2BCdcvYcEWgH4%2B8ldbIFQ4bZ9kmGk0FKogg2%2BbceFbdIWjyyzVwe1NNSCRWKC5IkaalKtuc%2FDUuTsH5BEdPgr5kNaNFtBywVh6E4TzStOCJENNGFO0c%2FjgEL4pElTauxkIGAkfjlsIA85m0ehQlU0Lh0TNA7ScBq1emD6%2BclboXc6CLvPbQXEGSMD%2FPzIh67oJ6V0BrVzmAXRLNY5pZE5Bm4TvfYdwS0WpAhWho1JE%2BUuPyaPrEuxhOmnQu5m12dVh3KpPHYIx8pCrEOR%2B9%2FHpUREovOOm0qJZ%2FgLVET3aA6G0x8t8B3lSSUPY6FdkMgyO5S%2FePd6YAq%2BYEyNNBBXICEwUgVIaNU1pgsdan8PmQp8MrT53Adc4kYLrDANviDIt5irQ9GfLDR8W9S3AMFHAjZLsejlyxP3tQxuyi6xgSpbj4EFBgyHHjYwh%2Fq4vgY6pgHW%2BW%2Bbh2ofC46ppmcRh9qdorungHL4C0AXO%2Fc9F5to4YK7KKv%2BDQALXE8u18bzgda5WPY2VK7ZStVR2OB8%2FMgqeWWuAeInDGJsSZCUC0K224Ct9zr4CkcgNcL%2FqaonOux9%2BLq4dKiDo2%2F883qXg3tUGofPpArAoNApQGyJlqWNnw8az5uStPsxsDzD9sjAxf3SMfQiERlMwuMl1idXn%2FTs95OGeRU%2B&X-Amz-Signature=c8c0311378cc32ed8628b1f347a7ba75978e5a1704be9709aaba3dfceddbb3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKSE6TB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBEtXABTuM%2FhGETirYMe2Fx8fFvHEADiGJXwfP7Yb03VAiAevXfpUMIvmMoYATRe6a8QK3Dqw78LO1AhjCmIGn5hWSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1AaOylqkg2cWPFg6KtwDDmn9fXsvljyypRM2WfSafXsRjwIW098gT%2BIOf5bLecdUo9c1XntD1q9g8Du1HBmP2Zy6F6T%2FO8cYQkXVFo8xaH89ctaycMr5%2FpHfuNH47BGJAhYy21GUvJhNdgDJERxaCx%2FAfyPwhn9rzgN8xrItaCZaXeR6I2rF2EZBH5LX0zJlNHpNEv%2BHBPl1kPU12AId1lTG%2BCdcvYcEWgH4%2B8ldbIFQ4bZ9kmGk0FKogg2%2BbceFbdIWjyyzVwe1NNSCRWKC5IkaalKtuc%2FDUuTsH5BEdPgr5kNaNFtBywVh6E4TzStOCJENNGFO0c%2FjgEL4pElTauxkIGAkfjlsIA85m0ehQlU0Lh0TNA7ScBq1emD6%2BclboXc6CLvPbQXEGSMD%2FPzIh67oJ6V0BrVzmAXRLNY5pZE5Bm4TvfYdwS0WpAhWho1JE%2BUuPyaPrEuxhOmnQu5m12dVh3KpPHYIx8pCrEOR%2B9%2FHpUREovOOm0qJZ%2FgLVET3aA6G0x8t8B3lSSUPY6FdkMgyO5S%2FePd6YAq%2BYEyNNBBXICEwUgVIaNU1pgsdan8PmQp8MrT53Adc4kYLrDANviDIt5irQ9GfLDR8W9S3AMFHAjZLsejlyxP3tQxuyi6xgSpbj4EFBgyHHjYwh%2Fq4vgY6pgHW%2BW%2Bbh2ofC46ppmcRh9qdorungHL4C0AXO%2Fc9F5to4YK7KKv%2BDQALXE8u18bzgda5WPY2VK7ZStVR2OB8%2FMgqeWWuAeInDGJsSZCUC0K224Ct9zr4CkcgNcL%2FqaonOux9%2BLq4dKiDo2%2F883qXg3tUGofPpArAoNApQGyJlqWNnw8az5uStPsxsDzD9sjAxf3SMfQiERlMwuMl1idXn%2FTs95OGeRU%2B&X-Amz-Signature=0402a7cc30909baceb7ef6c67f976d0454fdefe8f17b279fcfeeb0aaaa090281&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKSE6TB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBEtXABTuM%2FhGETirYMe2Fx8fFvHEADiGJXwfP7Yb03VAiAevXfpUMIvmMoYATRe6a8QK3Dqw78LO1AhjCmIGn5hWSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1AaOylqkg2cWPFg6KtwDDmn9fXsvljyypRM2WfSafXsRjwIW098gT%2BIOf5bLecdUo9c1XntD1q9g8Du1HBmP2Zy6F6T%2FO8cYQkXVFo8xaH89ctaycMr5%2FpHfuNH47BGJAhYy21GUvJhNdgDJERxaCx%2FAfyPwhn9rzgN8xrItaCZaXeR6I2rF2EZBH5LX0zJlNHpNEv%2BHBPl1kPU12AId1lTG%2BCdcvYcEWgH4%2B8ldbIFQ4bZ9kmGk0FKogg2%2BbceFbdIWjyyzVwe1NNSCRWKC5IkaalKtuc%2FDUuTsH5BEdPgr5kNaNFtBywVh6E4TzStOCJENNGFO0c%2FjgEL4pElTauxkIGAkfjlsIA85m0ehQlU0Lh0TNA7ScBq1emD6%2BclboXc6CLvPbQXEGSMD%2FPzIh67oJ6V0BrVzmAXRLNY5pZE5Bm4TvfYdwS0WpAhWho1JE%2BUuPyaPrEuxhOmnQu5m12dVh3KpPHYIx8pCrEOR%2B9%2FHpUREovOOm0qJZ%2FgLVET3aA6G0x8t8B3lSSUPY6FdkMgyO5S%2FePd6YAq%2BYEyNNBBXICEwUgVIaNU1pgsdan8PmQp8MrT53Adc4kYLrDANviDIt5irQ9GfLDR8W9S3AMFHAjZLsejlyxP3tQxuyi6xgSpbj4EFBgyHHjYwh%2Fq4vgY6pgHW%2BW%2Bbh2ofC46ppmcRh9qdorungHL4C0AXO%2Fc9F5to4YK7KKv%2BDQALXE8u18bzgda5WPY2VK7ZStVR2OB8%2FMgqeWWuAeInDGJsSZCUC0K224Ct9zr4CkcgNcL%2FqaonOux9%2BLq4dKiDo2%2F883qXg3tUGofPpArAoNApQGyJlqWNnw8az5uStPsxsDzD9sjAxf3SMfQiERlMwuMl1idXn%2FTs95OGeRU%2B&X-Amz-Signature=a47f6d95166e0c04f59d4b056e4e6cdfc36156df4ca38309900ec0663eba3e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKSE6TB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBEtXABTuM%2FhGETirYMe2Fx8fFvHEADiGJXwfP7Yb03VAiAevXfpUMIvmMoYATRe6a8QK3Dqw78LO1AhjCmIGn5hWSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1AaOylqkg2cWPFg6KtwDDmn9fXsvljyypRM2WfSafXsRjwIW098gT%2BIOf5bLecdUo9c1XntD1q9g8Du1HBmP2Zy6F6T%2FO8cYQkXVFo8xaH89ctaycMr5%2FpHfuNH47BGJAhYy21GUvJhNdgDJERxaCx%2FAfyPwhn9rzgN8xrItaCZaXeR6I2rF2EZBH5LX0zJlNHpNEv%2BHBPl1kPU12AId1lTG%2BCdcvYcEWgH4%2B8ldbIFQ4bZ9kmGk0FKogg2%2BbceFbdIWjyyzVwe1NNSCRWKC5IkaalKtuc%2FDUuTsH5BEdPgr5kNaNFtBywVh6E4TzStOCJENNGFO0c%2FjgEL4pElTauxkIGAkfjlsIA85m0ehQlU0Lh0TNA7ScBq1emD6%2BclboXc6CLvPbQXEGSMD%2FPzIh67oJ6V0BrVzmAXRLNY5pZE5Bm4TvfYdwS0WpAhWho1JE%2BUuPyaPrEuxhOmnQu5m12dVh3KpPHYIx8pCrEOR%2B9%2FHpUREovOOm0qJZ%2FgLVET3aA6G0x8t8B3lSSUPY6FdkMgyO5S%2FePd6YAq%2BYEyNNBBXICEwUgVIaNU1pgsdan8PmQp8MrT53Adc4kYLrDANviDIt5irQ9GfLDR8W9S3AMFHAjZLsejlyxP3tQxuyi6xgSpbj4EFBgyHHjYwh%2Fq4vgY6pgHW%2BW%2Bbh2ofC46ppmcRh9qdorungHL4C0AXO%2Fc9F5to4YK7KKv%2BDQALXE8u18bzgda5WPY2VK7ZStVR2OB8%2FMgqeWWuAeInDGJsSZCUC0K224Ct9zr4CkcgNcL%2FqaonOux9%2BLq4dKiDo2%2F883qXg3tUGofPpArAoNApQGyJlqWNnw8az5uStPsxsDzD9sjAxf3SMfQiERlMwuMl1idXn%2FTs95OGeRU%2B&X-Amz-Signature=f937b01d0fa4546b8316dd1912a6696cc0243bd40c30e6ae195a99b3a05a4c07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKSE6TB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBEtXABTuM%2FhGETirYMe2Fx8fFvHEADiGJXwfP7Yb03VAiAevXfpUMIvmMoYATRe6a8QK3Dqw78LO1AhjCmIGn5hWSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1AaOylqkg2cWPFg6KtwDDmn9fXsvljyypRM2WfSafXsRjwIW098gT%2BIOf5bLecdUo9c1XntD1q9g8Du1HBmP2Zy6F6T%2FO8cYQkXVFo8xaH89ctaycMr5%2FpHfuNH47BGJAhYy21GUvJhNdgDJERxaCx%2FAfyPwhn9rzgN8xrItaCZaXeR6I2rF2EZBH5LX0zJlNHpNEv%2BHBPl1kPU12AId1lTG%2BCdcvYcEWgH4%2B8ldbIFQ4bZ9kmGk0FKogg2%2BbceFbdIWjyyzVwe1NNSCRWKC5IkaalKtuc%2FDUuTsH5BEdPgr5kNaNFtBywVh6E4TzStOCJENNGFO0c%2FjgEL4pElTauxkIGAkfjlsIA85m0ehQlU0Lh0TNA7ScBq1emD6%2BclboXc6CLvPbQXEGSMD%2FPzIh67oJ6V0BrVzmAXRLNY5pZE5Bm4TvfYdwS0WpAhWho1JE%2BUuPyaPrEuxhOmnQu5m12dVh3KpPHYIx8pCrEOR%2B9%2FHpUREovOOm0qJZ%2FgLVET3aA6G0x8t8B3lSSUPY6FdkMgyO5S%2FePd6YAq%2BYEyNNBBXICEwUgVIaNU1pgsdan8PmQp8MrT53Adc4kYLrDANviDIt5irQ9GfLDR8W9S3AMFHAjZLsejlyxP3tQxuyi6xgSpbj4EFBgyHHjYwh%2Fq4vgY6pgHW%2BW%2Bbh2ofC46ppmcRh9qdorungHL4C0AXO%2Fc9F5to4YK7KKv%2BDQALXE8u18bzgda5WPY2VK7ZStVR2OB8%2FMgqeWWuAeInDGJsSZCUC0K224Ct9zr4CkcgNcL%2FqaonOux9%2BLq4dKiDo2%2F883qXg3tUGofPpArAoNApQGyJlqWNnw8az5uStPsxsDzD9sjAxf3SMfQiERlMwuMl1idXn%2FTs95OGeRU%2B&X-Amz-Signature=c0f2bb564be9978241371f845a7fb127da32d74dcc0e0518e30965c7142b3d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKSE6TB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBEtXABTuM%2FhGETirYMe2Fx8fFvHEADiGJXwfP7Yb03VAiAevXfpUMIvmMoYATRe6a8QK3Dqw78LO1AhjCmIGn5hWSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1AaOylqkg2cWPFg6KtwDDmn9fXsvljyypRM2WfSafXsRjwIW098gT%2BIOf5bLecdUo9c1XntD1q9g8Du1HBmP2Zy6F6T%2FO8cYQkXVFo8xaH89ctaycMr5%2FpHfuNH47BGJAhYy21GUvJhNdgDJERxaCx%2FAfyPwhn9rzgN8xrItaCZaXeR6I2rF2EZBH5LX0zJlNHpNEv%2BHBPl1kPU12AId1lTG%2BCdcvYcEWgH4%2B8ldbIFQ4bZ9kmGk0FKogg2%2BbceFbdIWjyyzVwe1NNSCRWKC5IkaalKtuc%2FDUuTsH5BEdPgr5kNaNFtBywVh6E4TzStOCJENNGFO0c%2FjgEL4pElTauxkIGAkfjlsIA85m0ehQlU0Lh0TNA7ScBq1emD6%2BclboXc6CLvPbQXEGSMD%2FPzIh67oJ6V0BrVzmAXRLNY5pZE5Bm4TvfYdwS0WpAhWho1JE%2BUuPyaPrEuxhOmnQu5m12dVh3KpPHYIx8pCrEOR%2B9%2FHpUREovOOm0qJZ%2FgLVET3aA6G0x8t8B3lSSUPY6FdkMgyO5S%2FePd6YAq%2BYEyNNBBXICEwUgVIaNU1pgsdan8PmQp8MrT53Adc4kYLrDANviDIt5irQ9GfLDR8W9S3AMFHAjZLsejlyxP3tQxuyi6xgSpbj4EFBgyHHjYwh%2Fq4vgY6pgHW%2BW%2Bbh2ofC46ppmcRh9qdorungHL4C0AXO%2Fc9F5to4YK7KKv%2BDQALXE8u18bzgda5WPY2VK7ZStVR2OB8%2FMgqeWWuAeInDGJsSZCUC0K224Ct9zr4CkcgNcL%2FqaonOux9%2BLq4dKiDo2%2F883qXg3tUGofPpArAoNApQGyJlqWNnw8az5uStPsxsDzD9sjAxf3SMfQiERlMwuMl1idXn%2FTs95OGeRU%2B&X-Amz-Signature=d78ddbffb727e69a78597beec32e97b2ae8ffaa8cfac0d5a6f62f9f357df80db&X-Amz-SignedHeaders=host&x-id=GetObject)
