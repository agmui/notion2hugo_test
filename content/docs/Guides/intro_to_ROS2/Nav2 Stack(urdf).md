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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFH3H5VF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCa4g6FH7zkBQYdQ%2BUlJ9DAjS5T5DGS0TBHRwzzSk7lSAIgA%2BOcflK8EHUr9VlXEp6rGVGrjfGRi8sGUxGHyuMIcxMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPS8ErYcNQYIeM93ZCrcA5t28dXCW13cupGr6B%2BLdAD%2FgwP8pvy3TdFTD%2BZHmRTlKE12RzcrnmDTCmw6otVmMFc1MtWJcLTOV6fXcj8zIchR%2F1LlCjDBNsQkkAVtqim7rMGeywmMKxLk85c1ixNrzdrxMtjCND6%2BDBPcposqU0Ypkb215RM%2FpODlhLa1O5Jcy7ZFhwfjqZWJ%2BIuARcXMdjIBJL9eJPmzbWkOweDn1YTLPqnEUg0L8y9kFlub%2FosVILkjv%2FmxzUKK6dCfTiDXO6EbsPwqk6UkL7m7foeJYzMkLkK38jcKvp4w7bAVda7UdS9y1KTklDibyLTlp6JzJybhAxohJDfNvflscK%2BPhd19x8A%2BIXHlGPYd%2Fca1Oz0t6QU0yphNuh6QJAZq%2BPJ55WGuKCGX8NfRTobWilRFnkH5T2eUDCGk5JRgk4GyZraxlFOf9oMUag8%2FDCCLyErmcVEbrVaxAaBh6fQNOZDaMtuOkF7R22NSgz1s3OsKX48LTWUUKuEWvKK8BJJBmfXr4GATNIMca1lQ%2Fvl%2FRrJV2QtmMCFn9%2FLdpjeW6nDGNa3k3nTAQZZ%2FJeMlpsAS3lrtmJc8gjR88NFoEge56Lu2ZM1apweWbXj1NJJKe5FDVZsvKOUBdoWHARSRaeqwMLyx574GOqUB8eO3skWi3YJDeclyhBy1zfpDpasuuVAWOvPWA59nkbnWrQujyI39EgsqCUODgvzQmvaUI%2FzvHWyJdP5j2pjzWItg9G9LQBC0vjgYWPsxJaq4qZICcYqWYEjECXK5uvoYcKnMfr%2Fh5U%2B0zUfs9L6jclzF%2F3MbtORRfXUJ27YpgpuXJkGLi2nh4cNYSAltfSVaB7y8LHoiiEgoCrLK7xu%2FPduxk0RJ&X-Amz-Signature=006ddc1a8aa3efab887b626b23079ab1630887a569446e6504b04e63f49ef918&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFH3H5VF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCa4g6FH7zkBQYdQ%2BUlJ9DAjS5T5DGS0TBHRwzzSk7lSAIgA%2BOcflK8EHUr9VlXEp6rGVGrjfGRi8sGUxGHyuMIcxMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPS8ErYcNQYIeM93ZCrcA5t28dXCW13cupGr6B%2BLdAD%2FgwP8pvy3TdFTD%2BZHmRTlKE12RzcrnmDTCmw6otVmMFc1MtWJcLTOV6fXcj8zIchR%2F1LlCjDBNsQkkAVtqim7rMGeywmMKxLk85c1ixNrzdrxMtjCND6%2BDBPcposqU0Ypkb215RM%2FpODlhLa1O5Jcy7ZFhwfjqZWJ%2BIuARcXMdjIBJL9eJPmzbWkOweDn1YTLPqnEUg0L8y9kFlub%2FosVILkjv%2FmxzUKK6dCfTiDXO6EbsPwqk6UkL7m7foeJYzMkLkK38jcKvp4w7bAVda7UdS9y1KTklDibyLTlp6JzJybhAxohJDfNvflscK%2BPhd19x8A%2BIXHlGPYd%2Fca1Oz0t6QU0yphNuh6QJAZq%2BPJ55WGuKCGX8NfRTobWilRFnkH5T2eUDCGk5JRgk4GyZraxlFOf9oMUag8%2FDCCLyErmcVEbrVaxAaBh6fQNOZDaMtuOkF7R22NSgz1s3OsKX48LTWUUKuEWvKK8BJJBmfXr4GATNIMca1lQ%2Fvl%2FRrJV2QtmMCFn9%2FLdpjeW6nDGNa3k3nTAQZZ%2FJeMlpsAS3lrtmJc8gjR88NFoEge56Lu2ZM1apweWbXj1NJJKe5FDVZsvKOUBdoWHARSRaeqwMLyx574GOqUB8eO3skWi3YJDeclyhBy1zfpDpasuuVAWOvPWA59nkbnWrQujyI39EgsqCUODgvzQmvaUI%2FzvHWyJdP5j2pjzWItg9G9LQBC0vjgYWPsxJaq4qZICcYqWYEjECXK5uvoYcKnMfr%2Fh5U%2B0zUfs9L6jclzF%2F3MbtORRfXUJ27YpgpuXJkGLi2nh4cNYSAltfSVaB7y8LHoiiEgoCrLK7xu%2FPduxk0RJ&X-Amz-Signature=0da774f7c529f4d712a81bdea9ab42fa158bdb34e5287f9d3e17406fa9e80493&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFH3H5VF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCa4g6FH7zkBQYdQ%2BUlJ9DAjS5T5DGS0TBHRwzzSk7lSAIgA%2BOcflK8EHUr9VlXEp6rGVGrjfGRi8sGUxGHyuMIcxMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPS8ErYcNQYIeM93ZCrcA5t28dXCW13cupGr6B%2BLdAD%2FgwP8pvy3TdFTD%2BZHmRTlKE12RzcrnmDTCmw6otVmMFc1MtWJcLTOV6fXcj8zIchR%2F1LlCjDBNsQkkAVtqim7rMGeywmMKxLk85c1ixNrzdrxMtjCND6%2BDBPcposqU0Ypkb215RM%2FpODlhLa1O5Jcy7ZFhwfjqZWJ%2BIuARcXMdjIBJL9eJPmzbWkOweDn1YTLPqnEUg0L8y9kFlub%2FosVILkjv%2FmxzUKK6dCfTiDXO6EbsPwqk6UkL7m7foeJYzMkLkK38jcKvp4w7bAVda7UdS9y1KTklDibyLTlp6JzJybhAxohJDfNvflscK%2BPhd19x8A%2BIXHlGPYd%2Fca1Oz0t6QU0yphNuh6QJAZq%2BPJ55WGuKCGX8NfRTobWilRFnkH5T2eUDCGk5JRgk4GyZraxlFOf9oMUag8%2FDCCLyErmcVEbrVaxAaBh6fQNOZDaMtuOkF7R22NSgz1s3OsKX48LTWUUKuEWvKK8BJJBmfXr4GATNIMca1lQ%2Fvl%2FRrJV2QtmMCFn9%2FLdpjeW6nDGNa3k3nTAQZZ%2FJeMlpsAS3lrtmJc8gjR88NFoEge56Lu2ZM1apweWbXj1NJJKe5FDVZsvKOUBdoWHARSRaeqwMLyx574GOqUB8eO3skWi3YJDeclyhBy1zfpDpasuuVAWOvPWA59nkbnWrQujyI39EgsqCUODgvzQmvaUI%2FzvHWyJdP5j2pjzWItg9G9LQBC0vjgYWPsxJaq4qZICcYqWYEjECXK5uvoYcKnMfr%2Fh5U%2B0zUfs9L6jclzF%2F3MbtORRfXUJ27YpgpuXJkGLi2nh4cNYSAltfSVaB7y8LHoiiEgoCrLK7xu%2FPduxk0RJ&X-Amz-Signature=9a6fdb7e3b693dd81d8adfa28258d321682bcf1527b100614ba342dfc9815a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFH3H5VF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCa4g6FH7zkBQYdQ%2BUlJ9DAjS5T5DGS0TBHRwzzSk7lSAIgA%2BOcflK8EHUr9VlXEp6rGVGrjfGRi8sGUxGHyuMIcxMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPS8ErYcNQYIeM93ZCrcA5t28dXCW13cupGr6B%2BLdAD%2FgwP8pvy3TdFTD%2BZHmRTlKE12RzcrnmDTCmw6otVmMFc1MtWJcLTOV6fXcj8zIchR%2F1LlCjDBNsQkkAVtqim7rMGeywmMKxLk85c1ixNrzdrxMtjCND6%2BDBPcposqU0Ypkb215RM%2FpODlhLa1O5Jcy7ZFhwfjqZWJ%2BIuARcXMdjIBJL9eJPmzbWkOweDn1YTLPqnEUg0L8y9kFlub%2FosVILkjv%2FmxzUKK6dCfTiDXO6EbsPwqk6UkL7m7foeJYzMkLkK38jcKvp4w7bAVda7UdS9y1KTklDibyLTlp6JzJybhAxohJDfNvflscK%2BPhd19x8A%2BIXHlGPYd%2Fca1Oz0t6QU0yphNuh6QJAZq%2BPJ55WGuKCGX8NfRTobWilRFnkH5T2eUDCGk5JRgk4GyZraxlFOf9oMUag8%2FDCCLyErmcVEbrVaxAaBh6fQNOZDaMtuOkF7R22NSgz1s3OsKX48LTWUUKuEWvKK8BJJBmfXr4GATNIMca1lQ%2Fvl%2FRrJV2QtmMCFn9%2FLdpjeW6nDGNa3k3nTAQZZ%2FJeMlpsAS3lrtmJc8gjR88NFoEge56Lu2ZM1apweWbXj1NJJKe5FDVZsvKOUBdoWHARSRaeqwMLyx574GOqUB8eO3skWi3YJDeclyhBy1zfpDpasuuVAWOvPWA59nkbnWrQujyI39EgsqCUODgvzQmvaUI%2FzvHWyJdP5j2pjzWItg9G9LQBC0vjgYWPsxJaq4qZICcYqWYEjECXK5uvoYcKnMfr%2Fh5U%2B0zUfs9L6jclzF%2F3MbtORRfXUJ27YpgpuXJkGLi2nh4cNYSAltfSVaB7y8LHoiiEgoCrLK7xu%2FPduxk0RJ&X-Amz-Signature=e6903bec53d4ebd7aad92d69ae3371deab142973f9e9bce0976248f405023b18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFH3H5VF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCa4g6FH7zkBQYdQ%2BUlJ9DAjS5T5DGS0TBHRwzzSk7lSAIgA%2BOcflK8EHUr9VlXEp6rGVGrjfGRi8sGUxGHyuMIcxMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPS8ErYcNQYIeM93ZCrcA5t28dXCW13cupGr6B%2BLdAD%2FgwP8pvy3TdFTD%2BZHmRTlKE12RzcrnmDTCmw6otVmMFc1MtWJcLTOV6fXcj8zIchR%2F1LlCjDBNsQkkAVtqim7rMGeywmMKxLk85c1ixNrzdrxMtjCND6%2BDBPcposqU0Ypkb215RM%2FpODlhLa1O5Jcy7ZFhwfjqZWJ%2BIuARcXMdjIBJL9eJPmzbWkOweDn1YTLPqnEUg0L8y9kFlub%2FosVILkjv%2FmxzUKK6dCfTiDXO6EbsPwqk6UkL7m7foeJYzMkLkK38jcKvp4w7bAVda7UdS9y1KTklDibyLTlp6JzJybhAxohJDfNvflscK%2BPhd19x8A%2BIXHlGPYd%2Fca1Oz0t6QU0yphNuh6QJAZq%2BPJ55WGuKCGX8NfRTobWilRFnkH5T2eUDCGk5JRgk4GyZraxlFOf9oMUag8%2FDCCLyErmcVEbrVaxAaBh6fQNOZDaMtuOkF7R22NSgz1s3OsKX48LTWUUKuEWvKK8BJJBmfXr4GATNIMca1lQ%2Fvl%2FRrJV2QtmMCFn9%2FLdpjeW6nDGNa3k3nTAQZZ%2FJeMlpsAS3lrtmJc8gjR88NFoEge56Lu2ZM1apweWbXj1NJJKe5FDVZsvKOUBdoWHARSRaeqwMLyx574GOqUB8eO3skWi3YJDeclyhBy1zfpDpasuuVAWOvPWA59nkbnWrQujyI39EgsqCUODgvzQmvaUI%2FzvHWyJdP5j2pjzWItg9G9LQBC0vjgYWPsxJaq4qZICcYqWYEjECXK5uvoYcKnMfr%2Fh5U%2B0zUfs9L6jclzF%2F3MbtORRfXUJ27YpgpuXJkGLi2nh4cNYSAltfSVaB7y8LHoiiEgoCrLK7xu%2FPduxk0RJ&X-Amz-Signature=7b477e1c84626ba3c42925c3d8235710fdfd868ec3ee42166cce99b1633f21fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFH3H5VF%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCa4g6FH7zkBQYdQ%2BUlJ9DAjS5T5DGS0TBHRwzzSk7lSAIgA%2BOcflK8EHUr9VlXEp6rGVGrjfGRi8sGUxGHyuMIcxMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPS8ErYcNQYIeM93ZCrcA5t28dXCW13cupGr6B%2BLdAD%2FgwP8pvy3TdFTD%2BZHmRTlKE12RzcrnmDTCmw6otVmMFc1MtWJcLTOV6fXcj8zIchR%2F1LlCjDBNsQkkAVtqim7rMGeywmMKxLk85c1ixNrzdrxMtjCND6%2BDBPcposqU0Ypkb215RM%2FpODlhLa1O5Jcy7ZFhwfjqZWJ%2BIuARcXMdjIBJL9eJPmzbWkOweDn1YTLPqnEUg0L8y9kFlub%2FosVILkjv%2FmxzUKK6dCfTiDXO6EbsPwqk6UkL7m7foeJYzMkLkK38jcKvp4w7bAVda7UdS9y1KTklDibyLTlp6JzJybhAxohJDfNvflscK%2BPhd19x8A%2BIXHlGPYd%2Fca1Oz0t6QU0yphNuh6QJAZq%2BPJ55WGuKCGX8NfRTobWilRFnkH5T2eUDCGk5JRgk4GyZraxlFOf9oMUag8%2FDCCLyErmcVEbrVaxAaBh6fQNOZDaMtuOkF7R22NSgz1s3OsKX48LTWUUKuEWvKK8BJJBmfXr4GATNIMca1lQ%2Fvl%2FRrJV2QtmMCFn9%2FLdpjeW6nDGNa3k3nTAQZZ%2FJeMlpsAS3lrtmJc8gjR88NFoEge56Lu2ZM1apweWbXj1NJJKe5FDVZsvKOUBdoWHARSRaeqwMLyx574GOqUB8eO3skWi3YJDeclyhBy1zfpDpasuuVAWOvPWA59nkbnWrQujyI39EgsqCUODgvzQmvaUI%2FzvHWyJdP5j2pjzWItg9G9LQBC0vjgYWPsxJaq4qZICcYqWYEjECXK5uvoYcKnMfr%2Fh5U%2B0zUfs9L6jclzF%2F3MbtORRfXUJ27YpgpuXJkGLi2nh4cNYSAltfSVaB7y8LHoiiEgoCrLK7xu%2FPduxk0RJ&X-Amz-Signature=b4981fd04000f8feb3bd33c8af25249efc752217bfa2976e3b8555e2d9439ef8&X-Amz-SignedHeaders=host&x-id=GetObject)
