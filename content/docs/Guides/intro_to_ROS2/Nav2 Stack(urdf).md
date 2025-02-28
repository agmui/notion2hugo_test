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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUGAB32Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDs6XzruHqwe3RmHjd%2BFn5jJplNeoiCNFEkDFOt%2FUD5dQIhAONr82sBKNkW2YE7i9yJ0tuy6VnjrFU1I0UP25%2FHqlZfKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUj7LALYNj6Xe66q8q3AOa5gfUE7Mu8OCqtxpgmVaa1pA%2FbkmVFe%2FOe9uW9IdOlYCcFjBkLK%2FuDPeBw5WIQZMtCvOPEkWkdb4mjh6hczyQkZvCAQ0v9MTNXLZd1PotMmaDk7m4pzcjgbJXQwrVEe096OoVKkWB%2FQWMjMyPg%2Fp%2FKtSGbNc6TUqMHmQQk%2FfykNoVU6Y1h9ElPITjoDdHOaAcMCeBRvq9sNdi46KMJjd81kl6nYlEmtcFqRBdo8s9GLXcyVw1heeV2YhOE%2F%2FQEAKeewROut8nWTaIJkOefnHo5cwfkvb3joqi6bjr6IphGTdHs9PaLg0tgRYJi2jDjLf18cz%2FbSCg%2BnQVq1RKAUthtKgp0l0x%2BBUGRNYmzfBr1pRWaQoluP5HtIkuS6r0oIMbnzeR%2BXA0qpeWoSuzqSORNQA72Q14SVJTeS%2FpoabeNdDzPKqBmw2No7iE%2B4wkVKSLdWZ7lRSW%2BAe53MQNMBZkDH%2FY1xUID7%2FpJ6YYAGy0pWNQ5UARAhgDUV5lgEHAeX6SaYmJWN5P2I2TpRddn0BIrqOFiFzaKViiDjf1rFQ4l%2F7GA5%2Fz3irQeH%2Bnh9346nVVTurvMVAzXkjhK1lynzolQWwRSui6rAH2chF%2B2jRIaPPepSygwIjyz8eaEzC3kIe%2BBjqkAadHEWULXU3HxBtnejoaMTjbY7qaUMR0CQgMALkbhEIazUddFg1L0VzPqMfRmXBGDJ%2FpsxfVqFhpFgdkuG1Imw%2Fxi4B%2Fdz4ECH%2FJcfdV0gTXTASYUMecJ6CSCLWf7OFaVEaRAqD0KYdxV18fq%2Bi6qvjoTe9KpNzy9tdTT6pEuxolpt32r1C40GaQAZVqO8e9Nr21nJb58tRFSfm26%2Fp7lSTk%2B%2BPq&X-Amz-Signature=aba18bc55a08399eb5ab5c6b9fb54460635aaf4d351871653f0cdbeede964552&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUGAB32Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDs6XzruHqwe3RmHjd%2BFn5jJplNeoiCNFEkDFOt%2FUD5dQIhAONr82sBKNkW2YE7i9yJ0tuy6VnjrFU1I0UP25%2FHqlZfKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUj7LALYNj6Xe66q8q3AOa5gfUE7Mu8OCqtxpgmVaa1pA%2FbkmVFe%2FOe9uW9IdOlYCcFjBkLK%2FuDPeBw5WIQZMtCvOPEkWkdb4mjh6hczyQkZvCAQ0v9MTNXLZd1PotMmaDk7m4pzcjgbJXQwrVEe096OoVKkWB%2FQWMjMyPg%2Fp%2FKtSGbNc6TUqMHmQQk%2FfykNoVU6Y1h9ElPITjoDdHOaAcMCeBRvq9sNdi46KMJjd81kl6nYlEmtcFqRBdo8s9GLXcyVw1heeV2YhOE%2F%2FQEAKeewROut8nWTaIJkOefnHo5cwfkvb3joqi6bjr6IphGTdHs9PaLg0tgRYJi2jDjLf18cz%2FbSCg%2BnQVq1RKAUthtKgp0l0x%2BBUGRNYmzfBr1pRWaQoluP5HtIkuS6r0oIMbnzeR%2BXA0qpeWoSuzqSORNQA72Q14SVJTeS%2FpoabeNdDzPKqBmw2No7iE%2B4wkVKSLdWZ7lRSW%2BAe53MQNMBZkDH%2FY1xUID7%2FpJ6YYAGy0pWNQ5UARAhgDUV5lgEHAeX6SaYmJWN5P2I2TpRddn0BIrqOFiFzaKViiDjf1rFQ4l%2F7GA5%2Fz3irQeH%2Bnh9346nVVTurvMVAzXkjhK1lynzolQWwRSui6rAH2chF%2B2jRIaPPepSygwIjyz8eaEzC3kIe%2BBjqkAadHEWULXU3HxBtnejoaMTjbY7qaUMR0CQgMALkbhEIazUddFg1L0VzPqMfRmXBGDJ%2FpsxfVqFhpFgdkuG1Imw%2Fxi4B%2Fdz4ECH%2FJcfdV0gTXTASYUMecJ6CSCLWf7OFaVEaRAqD0KYdxV18fq%2Bi6qvjoTe9KpNzy9tdTT6pEuxolpt32r1C40GaQAZVqO8e9Nr21nJb58tRFSfm26%2Fp7lSTk%2B%2BPq&X-Amz-Signature=64597d1eac79d52db518b4b884cbfe63444ded10295cfc6ead6f78886a3990e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUGAB32Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDs6XzruHqwe3RmHjd%2BFn5jJplNeoiCNFEkDFOt%2FUD5dQIhAONr82sBKNkW2YE7i9yJ0tuy6VnjrFU1I0UP25%2FHqlZfKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUj7LALYNj6Xe66q8q3AOa5gfUE7Mu8OCqtxpgmVaa1pA%2FbkmVFe%2FOe9uW9IdOlYCcFjBkLK%2FuDPeBw5WIQZMtCvOPEkWkdb4mjh6hczyQkZvCAQ0v9MTNXLZd1PotMmaDk7m4pzcjgbJXQwrVEe096OoVKkWB%2FQWMjMyPg%2Fp%2FKtSGbNc6TUqMHmQQk%2FfykNoVU6Y1h9ElPITjoDdHOaAcMCeBRvq9sNdi46KMJjd81kl6nYlEmtcFqRBdo8s9GLXcyVw1heeV2YhOE%2F%2FQEAKeewROut8nWTaIJkOefnHo5cwfkvb3joqi6bjr6IphGTdHs9PaLg0tgRYJi2jDjLf18cz%2FbSCg%2BnQVq1RKAUthtKgp0l0x%2BBUGRNYmzfBr1pRWaQoluP5HtIkuS6r0oIMbnzeR%2BXA0qpeWoSuzqSORNQA72Q14SVJTeS%2FpoabeNdDzPKqBmw2No7iE%2B4wkVKSLdWZ7lRSW%2BAe53MQNMBZkDH%2FY1xUID7%2FpJ6YYAGy0pWNQ5UARAhgDUV5lgEHAeX6SaYmJWN5P2I2TpRddn0BIrqOFiFzaKViiDjf1rFQ4l%2F7GA5%2Fz3irQeH%2Bnh9346nVVTurvMVAzXkjhK1lynzolQWwRSui6rAH2chF%2B2jRIaPPepSygwIjyz8eaEzC3kIe%2BBjqkAadHEWULXU3HxBtnejoaMTjbY7qaUMR0CQgMALkbhEIazUddFg1L0VzPqMfRmXBGDJ%2FpsxfVqFhpFgdkuG1Imw%2Fxi4B%2Fdz4ECH%2FJcfdV0gTXTASYUMecJ6CSCLWf7OFaVEaRAqD0KYdxV18fq%2Bi6qvjoTe9KpNzy9tdTT6pEuxolpt32r1C40GaQAZVqO8e9Nr21nJb58tRFSfm26%2Fp7lSTk%2B%2BPq&X-Amz-Signature=583136cce81008348d1edfcbccc96bfec5f5d39e71123b8805e8bd74d037ac85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUGAB32Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDs6XzruHqwe3RmHjd%2BFn5jJplNeoiCNFEkDFOt%2FUD5dQIhAONr82sBKNkW2YE7i9yJ0tuy6VnjrFU1I0UP25%2FHqlZfKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUj7LALYNj6Xe66q8q3AOa5gfUE7Mu8OCqtxpgmVaa1pA%2FbkmVFe%2FOe9uW9IdOlYCcFjBkLK%2FuDPeBw5WIQZMtCvOPEkWkdb4mjh6hczyQkZvCAQ0v9MTNXLZd1PotMmaDk7m4pzcjgbJXQwrVEe096OoVKkWB%2FQWMjMyPg%2Fp%2FKtSGbNc6TUqMHmQQk%2FfykNoVU6Y1h9ElPITjoDdHOaAcMCeBRvq9sNdi46KMJjd81kl6nYlEmtcFqRBdo8s9GLXcyVw1heeV2YhOE%2F%2FQEAKeewROut8nWTaIJkOefnHo5cwfkvb3joqi6bjr6IphGTdHs9PaLg0tgRYJi2jDjLf18cz%2FbSCg%2BnQVq1RKAUthtKgp0l0x%2BBUGRNYmzfBr1pRWaQoluP5HtIkuS6r0oIMbnzeR%2BXA0qpeWoSuzqSORNQA72Q14SVJTeS%2FpoabeNdDzPKqBmw2No7iE%2B4wkVKSLdWZ7lRSW%2BAe53MQNMBZkDH%2FY1xUID7%2FpJ6YYAGy0pWNQ5UARAhgDUV5lgEHAeX6SaYmJWN5P2I2TpRddn0BIrqOFiFzaKViiDjf1rFQ4l%2F7GA5%2Fz3irQeH%2Bnh9346nVVTurvMVAzXkjhK1lynzolQWwRSui6rAH2chF%2B2jRIaPPepSygwIjyz8eaEzC3kIe%2BBjqkAadHEWULXU3HxBtnejoaMTjbY7qaUMR0CQgMALkbhEIazUddFg1L0VzPqMfRmXBGDJ%2FpsxfVqFhpFgdkuG1Imw%2Fxi4B%2Fdz4ECH%2FJcfdV0gTXTASYUMecJ6CSCLWf7OFaVEaRAqD0KYdxV18fq%2Bi6qvjoTe9KpNzy9tdTT6pEuxolpt32r1C40GaQAZVqO8e9Nr21nJb58tRFSfm26%2Fp7lSTk%2B%2BPq&X-Amz-Signature=c824cda643367e86ac5c7b9423f193b28042fd802b9200dcf670681080ae5f63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUGAB32Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDs6XzruHqwe3RmHjd%2BFn5jJplNeoiCNFEkDFOt%2FUD5dQIhAONr82sBKNkW2YE7i9yJ0tuy6VnjrFU1I0UP25%2FHqlZfKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUj7LALYNj6Xe66q8q3AOa5gfUE7Mu8OCqtxpgmVaa1pA%2FbkmVFe%2FOe9uW9IdOlYCcFjBkLK%2FuDPeBw5WIQZMtCvOPEkWkdb4mjh6hczyQkZvCAQ0v9MTNXLZd1PotMmaDk7m4pzcjgbJXQwrVEe096OoVKkWB%2FQWMjMyPg%2Fp%2FKtSGbNc6TUqMHmQQk%2FfykNoVU6Y1h9ElPITjoDdHOaAcMCeBRvq9sNdi46KMJjd81kl6nYlEmtcFqRBdo8s9GLXcyVw1heeV2YhOE%2F%2FQEAKeewROut8nWTaIJkOefnHo5cwfkvb3joqi6bjr6IphGTdHs9PaLg0tgRYJi2jDjLf18cz%2FbSCg%2BnQVq1RKAUthtKgp0l0x%2BBUGRNYmzfBr1pRWaQoluP5HtIkuS6r0oIMbnzeR%2BXA0qpeWoSuzqSORNQA72Q14SVJTeS%2FpoabeNdDzPKqBmw2No7iE%2B4wkVKSLdWZ7lRSW%2BAe53MQNMBZkDH%2FY1xUID7%2FpJ6YYAGy0pWNQ5UARAhgDUV5lgEHAeX6SaYmJWN5P2I2TpRddn0BIrqOFiFzaKViiDjf1rFQ4l%2F7GA5%2Fz3irQeH%2Bnh9346nVVTurvMVAzXkjhK1lynzolQWwRSui6rAH2chF%2B2jRIaPPepSygwIjyz8eaEzC3kIe%2BBjqkAadHEWULXU3HxBtnejoaMTjbY7qaUMR0CQgMALkbhEIazUddFg1L0VzPqMfRmXBGDJ%2FpsxfVqFhpFgdkuG1Imw%2Fxi4B%2Fdz4ECH%2FJcfdV0gTXTASYUMecJ6CSCLWf7OFaVEaRAqD0KYdxV18fq%2Bi6qvjoTe9KpNzy9tdTT6pEuxolpt32r1C40GaQAZVqO8e9Nr21nJb58tRFSfm26%2Fp7lSTk%2B%2BPq&X-Amz-Signature=36dfe7ea54b914949a85a687f324e2c14ab2552f050f0ed500d22fc1043dd091&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUGAB32Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDs6XzruHqwe3RmHjd%2BFn5jJplNeoiCNFEkDFOt%2FUD5dQIhAONr82sBKNkW2YE7i9yJ0tuy6VnjrFU1I0UP25%2FHqlZfKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUj7LALYNj6Xe66q8q3AOa5gfUE7Mu8OCqtxpgmVaa1pA%2FbkmVFe%2FOe9uW9IdOlYCcFjBkLK%2FuDPeBw5WIQZMtCvOPEkWkdb4mjh6hczyQkZvCAQ0v9MTNXLZd1PotMmaDk7m4pzcjgbJXQwrVEe096OoVKkWB%2FQWMjMyPg%2Fp%2FKtSGbNc6TUqMHmQQk%2FfykNoVU6Y1h9ElPITjoDdHOaAcMCeBRvq9sNdi46KMJjd81kl6nYlEmtcFqRBdo8s9GLXcyVw1heeV2YhOE%2F%2FQEAKeewROut8nWTaIJkOefnHo5cwfkvb3joqi6bjr6IphGTdHs9PaLg0tgRYJi2jDjLf18cz%2FbSCg%2BnQVq1RKAUthtKgp0l0x%2BBUGRNYmzfBr1pRWaQoluP5HtIkuS6r0oIMbnzeR%2BXA0qpeWoSuzqSORNQA72Q14SVJTeS%2FpoabeNdDzPKqBmw2No7iE%2B4wkVKSLdWZ7lRSW%2BAe53MQNMBZkDH%2FY1xUID7%2FpJ6YYAGy0pWNQ5UARAhgDUV5lgEHAeX6SaYmJWN5P2I2TpRddn0BIrqOFiFzaKViiDjf1rFQ4l%2F7GA5%2Fz3irQeH%2Bnh9346nVVTurvMVAzXkjhK1lynzolQWwRSui6rAH2chF%2B2jRIaPPepSygwIjyz8eaEzC3kIe%2BBjqkAadHEWULXU3HxBtnejoaMTjbY7qaUMR0CQgMALkbhEIazUddFg1L0VzPqMfRmXBGDJ%2FpsxfVqFhpFgdkuG1Imw%2Fxi4B%2Fdz4ECH%2FJcfdV0gTXTASYUMecJ6CSCLWf7OFaVEaRAqD0KYdxV18fq%2Bi6qvjoTe9KpNzy9tdTT6pEuxolpt32r1C40GaQAZVqO8e9Nr21nJb58tRFSfm26%2Fp7lSTk%2B%2BPq&X-Amz-Signature=9ac46e25e8897b7205f82b51be415b09f280989b3abab6054446412445e55045&X-Amz-SignedHeaders=host&x-id=GetObject)
