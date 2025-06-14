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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKTBRPFM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBSMOXIFuNV1L%2FyWlKf51DmymG%2FVd1GsVu6uNaLqt4SKAiEAqrgTG2mxGcEqlhxwgt1wx8EApg0d2FWaRURpRE1%2F%2BCsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBDYcYRAWGNu8Ww3zircAzw3o4K7FmuiFU97OQfMG7nRhlF2b4CgzuXhh7XYjafQ0wu86OiIA9zYJ1L9Ex1xykZIHb092RmD00bCT7q%2Bums0vC1YxDmwsJK%2FABWvcLW%2BTdNpUXtDkRV2pPHFiw5q8UKQn5dB3M6RS8tdcQuq4WZmuu2WUpHa1SOWnZL299g58FjMnycCz2bKa05Puoc%2FUN1UQwIdJ%2BL3t4J1HrGMYC0uPDVx%2FP47WS20XtoUTtmkQSN7xVMIqx2I39Y3nT6KTp3vdr0SgjEHvv5RJvIhhn%2Fq5E9wyIURpZTEY84jL8Vdqw9WYepwNgK7kg0CVDudYealf6TLa%2BsHdKq60Bop4utzgLIAOwC%2BIOV5EwPilhyDLs2baE1GKVWC5k8NhgsK6I2O3I43nvvlNDTRjMKEABag34%2BBX%2FhWgSdcRUlTiEc5BjnWwcstNLY66rK3DlTj3gUG5i9OqsfMujiBQpnFyZAd7CM3VKAwGlQ5WKXMrZqxjVAI3Lxhec6mGf0slGz2UkB24Y3hpIa6PJTbExPQC1a8QwBJKWzu3tSIDFkMKItWQsjTNISFIPsgltADFcG6fSjJsAIEoM2WJEJW%2BZKp%2FLg3MGXJpQyw2GpHXSK7Be0M0ZVhHKYYFaS%2FkivmMKr2t8IGOqUBfjHusJUZBfxsm3VN1iVVuip9Q6cefFb9v3UZ7Ue0SMiQMh%2FBHnosuL%2FDmfiXj1DJrtSfXF5ezfG%2Ffw2FppztgdArEVfXzzxyZWXe4Zg7FnjwXtFKhY5PExFJk6FbyJTAy0Eq0wWsxZAq1MC6quf0yDAIs6Imxjxj%2BHXHNY8W5cb1awxKV%2BSmwAQMmQGBPTITctSAA%2FpNeV4hLbpFFoKkthYwRoQJ&X-Amz-Signature=0c8e0dc632de499613d1f5009aad6e1f870e4a479305f39925e6adefdb9d0884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKTBRPFM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBSMOXIFuNV1L%2FyWlKf51DmymG%2FVd1GsVu6uNaLqt4SKAiEAqrgTG2mxGcEqlhxwgt1wx8EApg0d2FWaRURpRE1%2F%2BCsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBDYcYRAWGNu8Ww3zircAzw3o4K7FmuiFU97OQfMG7nRhlF2b4CgzuXhh7XYjafQ0wu86OiIA9zYJ1L9Ex1xykZIHb092RmD00bCT7q%2Bums0vC1YxDmwsJK%2FABWvcLW%2BTdNpUXtDkRV2pPHFiw5q8UKQn5dB3M6RS8tdcQuq4WZmuu2WUpHa1SOWnZL299g58FjMnycCz2bKa05Puoc%2FUN1UQwIdJ%2BL3t4J1HrGMYC0uPDVx%2FP47WS20XtoUTtmkQSN7xVMIqx2I39Y3nT6KTp3vdr0SgjEHvv5RJvIhhn%2Fq5E9wyIURpZTEY84jL8Vdqw9WYepwNgK7kg0CVDudYealf6TLa%2BsHdKq60Bop4utzgLIAOwC%2BIOV5EwPilhyDLs2baE1GKVWC5k8NhgsK6I2O3I43nvvlNDTRjMKEABag34%2BBX%2FhWgSdcRUlTiEc5BjnWwcstNLY66rK3DlTj3gUG5i9OqsfMujiBQpnFyZAd7CM3VKAwGlQ5WKXMrZqxjVAI3Lxhec6mGf0slGz2UkB24Y3hpIa6PJTbExPQC1a8QwBJKWzu3tSIDFkMKItWQsjTNISFIPsgltADFcG6fSjJsAIEoM2WJEJW%2BZKp%2FLg3MGXJpQyw2GpHXSK7Be0M0ZVhHKYYFaS%2FkivmMKr2t8IGOqUBfjHusJUZBfxsm3VN1iVVuip9Q6cefFb9v3UZ7Ue0SMiQMh%2FBHnosuL%2FDmfiXj1DJrtSfXF5ezfG%2Ffw2FppztgdArEVfXzzxyZWXe4Zg7FnjwXtFKhY5PExFJk6FbyJTAy0Eq0wWsxZAq1MC6quf0yDAIs6Imxjxj%2BHXHNY8W5cb1awxKV%2BSmwAQMmQGBPTITctSAA%2FpNeV4hLbpFFoKkthYwRoQJ&X-Amz-Signature=02062246b774107d6769d70bfd8d57146a28cb9a664a1bdc2353ec739a384d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKTBRPFM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBSMOXIFuNV1L%2FyWlKf51DmymG%2FVd1GsVu6uNaLqt4SKAiEAqrgTG2mxGcEqlhxwgt1wx8EApg0d2FWaRURpRE1%2F%2BCsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBDYcYRAWGNu8Ww3zircAzw3o4K7FmuiFU97OQfMG7nRhlF2b4CgzuXhh7XYjafQ0wu86OiIA9zYJ1L9Ex1xykZIHb092RmD00bCT7q%2Bums0vC1YxDmwsJK%2FABWvcLW%2BTdNpUXtDkRV2pPHFiw5q8UKQn5dB3M6RS8tdcQuq4WZmuu2WUpHa1SOWnZL299g58FjMnycCz2bKa05Puoc%2FUN1UQwIdJ%2BL3t4J1HrGMYC0uPDVx%2FP47WS20XtoUTtmkQSN7xVMIqx2I39Y3nT6KTp3vdr0SgjEHvv5RJvIhhn%2Fq5E9wyIURpZTEY84jL8Vdqw9WYepwNgK7kg0CVDudYealf6TLa%2BsHdKq60Bop4utzgLIAOwC%2BIOV5EwPilhyDLs2baE1GKVWC5k8NhgsK6I2O3I43nvvlNDTRjMKEABag34%2BBX%2FhWgSdcRUlTiEc5BjnWwcstNLY66rK3DlTj3gUG5i9OqsfMujiBQpnFyZAd7CM3VKAwGlQ5WKXMrZqxjVAI3Lxhec6mGf0slGz2UkB24Y3hpIa6PJTbExPQC1a8QwBJKWzu3tSIDFkMKItWQsjTNISFIPsgltADFcG6fSjJsAIEoM2WJEJW%2BZKp%2FLg3MGXJpQyw2GpHXSK7Be0M0ZVhHKYYFaS%2FkivmMKr2t8IGOqUBfjHusJUZBfxsm3VN1iVVuip9Q6cefFb9v3UZ7Ue0SMiQMh%2FBHnosuL%2FDmfiXj1DJrtSfXF5ezfG%2Ffw2FppztgdArEVfXzzxyZWXe4Zg7FnjwXtFKhY5PExFJk6FbyJTAy0Eq0wWsxZAq1MC6quf0yDAIs6Imxjxj%2BHXHNY8W5cb1awxKV%2BSmwAQMmQGBPTITctSAA%2FpNeV4hLbpFFoKkthYwRoQJ&X-Amz-Signature=5e6dfd875917da217ecf426f3c1c176bcaa9d27d920b62a7bc5ab4f9847cebed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKTBRPFM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBSMOXIFuNV1L%2FyWlKf51DmymG%2FVd1GsVu6uNaLqt4SKAiEAqrgTG2mxGcEqlhxwgt1wx8EApg0d2FWaRURpRE1%2F%2BCsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBDYcYRAWGNu8Ww3zircAzw3o4K7FmuiFU97OQfMG7nRhlF2b4CgzuXhh7XYjafQ0wu86OiIA9zYJ1L9Ex1xykZIHb092RmD00bCT7q%2Bums0vC1YxDmwsJK%2FABWvcLW%2BTdNpUXtDkRV2pPHFiw5q8UKQn5dB3M6RS8tdcQuq4WZmuu2WUpHa1SOWnZL299g58FjMnycCz2bKa05Puoc%2FUN1UQwIdJ%2BL3t4J1HrGMYC0uPDVx%2FP47WS20XtoUTtmkQSN7xVMIqx2I39Y3nT6KTp3vdr0SgjEHvv5RJvIhhn%2Fq5E9wyIURpZTEY84jL8Vdqw9WYepwNgK7kg0CVDudYealf6TLa%2BsHdKq60Bop4utzgLIAOwC%2BIOV5EwPilhyDLs2baE1GKVWC5k8NhgsK6I2O3I43nvvlNDTRjMKEABag34%2BBX%2FhWgSdcRUlTiEc5BjnWwcstNLY66rK3DlTj3gUG5i9OqsfMujiBQpnFyZAd7CM3VKAwGlQ5WKXMrZqxjVAI3Lxhec6mGf0slGz2UkB24Y3hpIa6PJTbExPQC1a8QwBJKWzu3tSIDFkMKItWQsjTNISFIPsgltADFcG6fSjJsAIEoM2WJEJW%2BZKp%2FLg3MGXJpQyw2GpHXSK7Be0M0ZVhHKYYFaS%2FkivmMKr2t8IGOqUBfjHusJUZBfxsm3VN1iVVuip9Q6cefFb9v3UZ7Ue0SMiQMh%2FBHnosuL%2FDmfiXj1DJrtSfXF5ezfG%2Ffw2FppztgdArEVfXzzxyZWXe4Zg7FnjwXtFKhY5PExFJk6FbyJTAy0Eq0wWsxZAq1MC6quf0yDAIs6Imxjxj%2BHXHNY8W5cb1awxKV%2BSmwAQMmQGBPTITctSAA%2FpNeV4hLbpFFoKkthYwRoQJ&X-Amz-Signature=17ea017f838a6b7bbb74891d41d5d32c86bc3c4f92169b20cafe57ffd2d224a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKTBRPFM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBSMOXIFuNV1L%2FyWlKf51DmymG%2FVd1GsVu6uNaLqt4SKAiEAqrgTG2mxGcEqlhxwgt1wx8EApg0d2FWaRURpRE1%2F%2BCsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBDYcYRAWGNu8Ww3zircAzw3o4K7FmuiFU97OQfMG7nRhlF2b4CgzuXhh7XYjafQ0wu86OiIA9zYJ1L9Ex1xykZIHb092RmD00bCT7q%2Bums0vC1YxDmwsJK%2FABWvcLW%2BTdNpUXtDkRV2pPHFiw5q8UKQn5dB3M6RS8tdcQuq4WZmuu2WUpHa1SOWnZL299g58FjMnycCz2bKa05Puoc%2FUN1UQwIdJ%2BL3t4J1HrGMYC0uPDVx%2FP47WS20XtoUTtmkQSN7xVMIqx2I39Y3nT6KTp3vdr0SgjEHvv5RJvIhhn%2Fq5E9wyIURpZTEY84jL8Vdqw9WYepwNgK7kg0CVDudYealf6TLa%2BsHdKq60Bop4utzgLIAOwC%2BIOV5EwPilhyDLs2baE1GKVWC5k8NhgsK6I2O3I43nvvlNDTRjMKEABag34%2BBX%2FhWgSdcRUlTiEc5BjnWwcstNLY66rK3DlTj3gUG5i9OqsfMujiBQpnFyZAd7CM3VKAwGlQ5WKXMrZqxjVAI3Lxhec6mGf0slGz2UkB24Y3hpIa6PJTbExPQC1a8QwBJKWzu3tSIDFkMKItWQsjTNISFIPsgltADFcG6fSjJsAIEoM2WJEJW%2BZKp%2FLg3MGXJpQyw2GpHXSK7Be0M0ZVhHKYYFaS%2FkivmMKr2t8IGOqUBfjHusJUZBfxsm3VN1iVVuip9Q6cefFb9v3UZ7Ue0SMiQMh%2FBHnosuL%2FDmfiXj1DJrtSfXF5ezfG%2Ffw2FppztgdArEVfXzzxyZWXe4Zg7FnjwXtFKhY5PExFJk6FbyJTAy0Eq0wWsxZAq1MC6quf0yDAIs6Imxjxj%2BHXHNY8W5cb1awxKV%2BSmwAQMmQGBPTITctSAA%2FpNeV4hLbpFFoKkthYwRoQJ&X-Amz-Signature=bc08e2d5af1bb2d76fb382dd20b0a160801a5dac8569f86af83d2e65a8262bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKTBRPFM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBSMOXIFuNV1L%2FyWlKf51DmymG%2FVd1GsVu6uNaLqt4SKAiEAqrgTG2mxGcEqlhxwgt1wx8EApg0d2FWaRURpRE1%2F%2BCsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBDYcYRAWGNu8Ww3zircAzw3o4K7FmuiFU97OQfMG7nRhlF2b4CgzuXhh7XYjafQ0wu86OiIA9zYJ1L9Ex1xykZIHb092RmD00bCT7q%2Bums0vC1YxDmwsJK%2FABWvcLW%2BTdNpUXtDkRV2pPHFiw5q8UKQn5dB3M6RS8tdcQuq4WZmuu2WUpHa1SOWnZL299g58FjMnycCz2bKa05Puoc%2FUN1UQwIdJ%2BL3t4J1HrGMYC0uPDVx%2FP47WS20XtoUTtmkQSN7xVMIqx2I39Y3nT6KTp3vdr0SgjEHvv5RJvIhhn%2Fq5E9wyIURpZTEY84jL8Vdqw9WYepwNgK7kg0CVDudYealf6TLa%2BsHdKq60Bop4utzgLIAOwC%2BIOV5EwPilhyDLs2baE1GKVWC5k8NhgsK6I2O3I43nvvlNDTRjMKEABag34%2BBX%2FhWgSdcRUlTiEc5BjnWwcstNLY66rK3DlTj3gUG5i9OqsfMujiBQpnFyZAd7CM3VKAwGlQ5WKXMrZqxjVAI3Lxhec6mGf0slGz2UkB24Y3hpIa6PJTbExPQC1a8QwBJKWzu3tSIDFkMKItWQsjTNISFIPsgltADFcG6fSjJsAIEoM2WJEJW%2BZKp%2FLg3MGXJpQyw2GpHXSK7Be0M0ZVhHKYYFaS%2FkivmMKr2t8IGOqUBfjHusJUZBfxsm3VN1iVVuip9Q6cefFb9v3UZ7Ue0SMiQMh%2FBHnosuL%2FDmfiXj1DJrtSfXF5ezfG%2Ffw2FppztgdArEVfXzzxyZWXe4Zg7FnjwXtFKhY5PExFJk6FbyJTAy0Eq0wWsxZAq1MC6quf0yDAIs6Imxjxj%2BHXHNY8W5cb1awxKV%2BSmwAQMmQGBPTITctSAA%2FpNeV4hLbpFFoKkthYwRoQJ&X-Amz-Signature=8ef3ee3a646eea619d7189eca68fe303746b96ffc77f0a4c04273d257fc036b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
