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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGNVIM5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUcrEqFSwfuB80N8IirncGCUioxzpCgFMViBM%2FQxJWTwIhANNDM4rAH6IJ2JwMYnOsOZ7QuzRFNHiRhP2sJuVrxX2UKv8DCCMQABoMNjM3NDIzMTgzODA1IgzTpnPoB05bjkd3Kukq3AP9S9KggD9awJC%2BoLP2CKTlCRQQ%2FoaOtUgN2baRiubA7CTbEvOUbEEsIJM7u29d13g%2FYbOXTYn4f2rFXPquOY8N9tEa7kyc9zEW4Pkng7XAYvso13dQmLmMsx%2B%2F8KmgKR2DoJ2FGtLuQR9ABczdUZtAc1LfGvAzHdPAAJyOPDcJZOXiVkYxo2t9luTlcN%2Bx%2BwXQYvd5IhT3I7fERL%2FRl4M1IgO%2Fh9loFgBMmXhT6q29etLm72Pgs61zBILA%2B1zptIDJSQNT7XftTkRewYI%2FO3ItREcNT9zXYnZfmDAOkA%2B6F8E4hhT9rBznFkP%2B1Tq140JnBdUKsZHFyom9ZVdtLK7s%2F0BObeWS2YN4U6OrTatBaLoCKMn8jBGaLH1mTdH0T6j7q9o6JWgDIc23gTJ45FDxVM9IFex5QbEwArzREZGa5cgCRcJaT2Nv9HzKOyNp7lFDvQJaMCtHc2IQ31kwlNFs7%2FhRo2BEwBenW1%2BfuPWQ1%2Fu%2Bx5pUFpVtRJkGVPalDo%2BCA2Lp2GdKTI71CcxDaujU%2FAQEHlToc1JAV9ZkdLsuqZONhiWPPkHNgILIa01rA8Mel7lKIBLZ6OGN3xN8a%2BlqzVS9Fpyf7UZC1ousviCVYZ4KKb9f%2ByRqst4P8zCBo8K%2FBjqkAfOikawvJ2d%2BN2QTD1Xv6PnG%2Fl0MsujC49HAiIRvJEnJ8u%2FHu5ds89fT3j4qDKYKghfn%2Fw2bV1RVezooesfejCSrM9sp5qqke7R%2BLutWShCA9HHGx0JmuMNGaj1xBKbKQ7FV0uouuX7cIoVDOVyldXmf9%2BooNmKKV%2BoN9DW54Fj3UL9lq0ljiKR7ILUqv10zzFizQFftA8%2Bv5%2FoXpI4kiWu9Z4aq&X-Amz-Signature=73523ef7b2489bbfbb8cdc2aad54b21bbbe177dea776f8f7766bae0faf7b4018&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGNVIM5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUcrEqFSwfuB80N8IirncGCUioxzpCgFMViBM%2FQxJWTwIhANNDM4rAH6IJ2JwMYnOsOZ7QuzRFNHiRhP2sJuVrxX2UKv8DCCMQABoMNjM3NDIzMTgzODA1IgzTpnPoB05bjkd3Kukq3AP9S9KggD9awJC%2BoLP2CKTlCRQQ%2FoaOtUgN2baRiubA7CTbEvOUbEEsIJM7u29d13g%2FYbOXTYn4f2rFXPquOY8N9tEa7kyc9zEW4Pkng7XAYvso13dQmLmMsx%2B%2F8KmgKR2DoJ2FGtLuQR9ABczdUZtAc1LfGvAzHdPAAJyOPDcJZOXiVkYxo2t9luTlcN%2Bx%2BwXQYvd5IhT3I7fERL%2FRl4M1IgO%2Fh9loFgBMmXhT6q29etLm72Pgs61zBILA%2B1zptIDJSQNT7XftTkRewYI%2FO3ItREcNT9zXYnZfmDAOkA%2B6F8E4hhT9rBznFkP%2B1Tq140JnBdUKsZHFyom9ZVdtLK7s%2F0BObeWS2YN4U6OrTatBaLoCKMn8jBGaLH1mTdH0T6j7q9o6JWgDIc23gTJ45FDxVM9IFex5QbEwArzREZGa5cgCRcJaT2Nv9HzKOyNp7lFDvQJaMCtHc2IQ31kwlNFs7%2FhRo2BEwBenW1%2BfuPWQ1%2Fu%2Bx5pUFpVtRJkGVPalDo%2BCA2Lp2GdKTI71CcxDaujU%2FAQEHlToc1JAV9ZkdLsuqZONhiWPPkHNgILIa01rA8Mel7lKIBLZ6OGN3xN8a%2BlqzVS9Fpyf7UZC1ousviCVYZ4KKb9f%2ByRqst4P8zCBo8K%2FBjqkAfOikawvJ2d%2BN2QTD1Xv6PnG%2Fl0MsujC49HAiIRvJEnJ8u%2FHu5ds89fT3j4qDKYKghfn%2Fw2bV1RVezooesfejCSrM9sp5qqke7R%2BLutWShCA9HHGx0JmuMNGaj1xBKbKQ7FV0uouuX7cIoVDOVyldXmf9%2BooNmKKV%2BoN9DW54Fj3UL9lq0ljiKR7ILUqv10zzFizQFftA8%2Bv5%2FoXpI4kiWu9Z4aq&X-Amz-Signature=eafed16f6f0b85bb4dab8e6e4bf8152c4c7ae0d3cb616b849ac548b97eb22596&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGNVIM5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUcrEqFSwfuB80N8IirncGCUioxzpCgFMViBM%2FQxJWTwIhANNDM4rAH6IJ2JwMYnOsOZ7QuzRFNHiRhP2sJuVrxX2UKv8DCCMQABoMNjM3NDIzMTgzODA1IgzTpnPoB05bjkd3Kukq3AP9S9KggD9awJC%2BoLP2CKTlCRQQ%2FoaOtUgN2baRiubA7CTbEvOUbEEsIJM7u29d13g%2FYbOXTYn4f2rFXPquOY8N9tEa7kyc9zEW4Pkng7XAYvso13dQmLmMsx%2B%2F8KmgKR2DoJ2FGtLuQR9ABczdUZtAc1LfGvAzHdPAAJyOPDcJZOXiVkYxo2t9luTlcN%2Bx%2BwXQYvd5IhT3I7fERL%2FRl4M1IgO%2Fh9loFgBMmXhT6q29etLm72Pgs61zBILA%2B1zptIDJSQNT7XftTkRewYI%2FO3ItREcNT9zXYnZfmDAOkA%2B6F8E4hhT9rBznFkP%2B1Tq140JnBdUKsZHFyom9ZVdtLK7s%2F0BObeWS2YN4U6OrTatBaLoCKMn8jBGaLH1mTdH0T6j7q9o6JWgDIc23gTJ45FDxVM9IFex5QbEwArzREZGa5cgCRcJaT2Nv9HzKOyNp7lFDvQJaMCtHc2IQ31kwlNFs7%2FhRo2BEwBenW1%2BfuPWQ1%2Fu%2Bx5pUFpVtRJkGVPalDo%2BCA2Lp2GdKTI71CcxDaujU%2FAQEHlToc1JAV9ZkdLsuqZONhiWPPkHNgILIa01rA8Mel7lKIBLZ6OGN3xN8a%2BlqzVS9Fpyf7UZC1ousviCVYZ4KKb9f%2ByRqst4P8zCBo8K%2FBjqkAfOikawvJ2d%2BN2QTD1Xv6PnG%2Fl0MsujC49HAiIRvJEnJ8u%2FHu5ds89fT3j4qDKYKghfn%2Fw2bV1RVezooesfejCSrM9sp5qqke7R%2BLutWShCA9HHGx0JmuMNGaj1xBKbKQ7FV0uouuX7cIoVDOVyldXmf9%2BooNmKKV%2BoN9DW54Fj3UL9lq0ljiKR7ILUqv10zzFizQFftA8%2Bv5%2FoXpI4kiWu9Z4aq&X-Amz-Signature=b3fd29880fd07a5a2ff1c1708fc3efac96e1de597864629e32e3f822d2b60103&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGNVIM5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUcrEqFSwfuB80N8IirncGCUioxzpCgFMViBM%2FQxJWTwIhANNDM4rAH6IJ2JwMYnOsOZ7QuzRFNHiRhP2sJuVrxX2UKv8DCCMQABoMNjM3NDIzMTgzODA1IgzTpnPoB05bjkd3Kukq3AP9S9KggD9awJC%2BoLP2CKTlCRQQ%2FoaOtUgN2baRiubA7CTbEvOUbEEsIJM7u29d13g%2FYbOXTYn4f2rFXPquOY8N9tEa7kyc9zEW4Pkng7XAYvso13dQmLmMsx%2B%2F8KmgKR2DoJ2FGtLuQR9ABczdUZtAc1LfGvAzHdPAAJyOPDcJZOXiVkYxo2t9luTlcN%2Bx%2BwXQYvd5IhT3I7fERL%2FRl4M1IgO%2Fh9loFgBMmXhT6q29etLm72Pgs61zBILA%2B1zptIDJSQNT7XftTkRewYI%2FO3ItREcNT9zXYnZfmDAOkA%2B6F8E4hhT9rBznFkP%2B1Tq140JnBdUKsZHFyom9ZVdtLK7s%2F0BObeWS2YN4U6OrTatBaLoCKMn8jBGaLH1mTdH0T6j7q9o6JWgDIc23gTJ45FDxVM9IFex5QbEwArzREZGa5cgCRcJaT2Nv9HzKOyNp7lFDvQJaMCtHc2IQ31kwlNFs7%2FhRo2BEwBenW1%2BfuPWQ1%2Fu%2Bx5pUFpVtRJkGVPalDo%2BCA2Lp2GdKTI71CcxDaujU%2FAQEHlToc1JAV9ZkdLsuqZONhiWPPkHNgILIa01rA8Mel7lKIBLZ6OGN3xN8a%2BlqzVS9Fpyf7UZC1ousviCVYZ4KKb9f%2ByRqst4P8zCBo8K%2FBjqkAfOikawvJ2d%2BN2QTD1Xv6PnG%2Fl0MsujC49HAiIRvJEnJ8u%2FHu5ds89fT3j4qDKYKghfn%2Fw2bV1RVezooesfejCSrM9sp5qqke7R%2BLutWShCA9HHGx0JmuMNGaj1xBKbKQ7FV0uouuX7cIoVDOVyldXmf9%2BooNmKKV%2BoN9DW54Fj3UL9lq0ljiKR7ILUqv10zzFizQFftA8%2Bv5%2FoXpI4kiWu9Z4aq&X-Amz-Signature=67c3049bcaa5e0859a19eef45b1d34b424947f7d221607745ba3fc2d687c2f92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGNVIM5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUcrEqFSwfuB80N8IirncGCUioxzpCgFMViBM%2FQxJWTwIhANNDM4rAH6IJ2JwMYnOsOZ7QuzRFNHiRhP2sJuVrxX2UKv8DCCMQABoMNjM3NDIzMTgzODA1IgzTpnPoB05bjkd3Kukq3AP9S9KggD9awJC%2BoLP2CKTlCRQQ%2FoaOtUgN2baRiubA7CTbEvOUbEEsIJM7u29d13g%2FYbOXTYn4f2rFXPquOY8N9tEa7kyc9zEW4Pkng7XAYvso13dQmLmMsx%2B%2F8KmgKR2DoJ2FGtLuQR9ABczdUZtAc1LfGvAzHdPAAJyOPDcJZOXiVkYxo2t9luTlcN%2Bx%2BwXQYvd5IhT3I7fERL%2FRl4M1IgO%2Fh9loFgBMmXhT6q29etLm72Pgs61zBILA%2B1zptIDJSQNT7XftTkRewYI%2FO3ItREcNT9zXYnZfmDAOkA%2B6F8E4hhT9rBznFkP%2B1Tq140JnBdUKsZHFyom9ZVdtLK7s%2F0BObeWS2YN4U6OrTatBaLoCKMn8jBGaLH1mTdH0T6j7q9o6JWgDIc23gTJ45FDxVM9IFex5QbEwArzREZGa5cgCRcJaT2Nv9HzKOyNp7lFDvQJaMCtHc2IQ31kwlNFs7%2FhRo2BEwBenW1%2BfuPWQ1%2Fu%2Bx5pUFpVtRJkGVPalDo%2BCA2Lp2GdKTI71CcxDaujU%2FAQEHlToc1JAV9ZkdLsuqZONhiWPPkHNgILIa01rA8Mel7lKIBLZ6OGN3xN8a%2BlqzVS9Fpyf7UZC1ousviCVYZ4KKb9f%2ByRqst4P8zCBo8K%2FBjqkAfOikawvJ2d%2BN2QTD1Xv6PnG%2Fl0MsujC49HAiIRvJEnJ8u%2FHu5ds89fT3j4qDKYKghfn%2Fw2bV1RVezooesfejCSrM9sp5qqke7R%2BLutWShCA9HHGx0JmuMNGaj1xBKbKQ7FV0uouuX7cIoVDOVyldXmf9%2BooNmKKV%2BoN9DW54Fj3UL9lq0ljiKR7ILUqv10zzFizQFftA8%2Bv5%2FoXpI4kiWu9Z4aq&X-Amz-Signature=a10281ad805e804b84ae876c5596ce3a72fb4573eb883e5425a14107a4b7541a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPGNVIM5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUcrEqFSwfuB80N8IirncGCUioxzpCgFMViBM%2FQxJWTwIhANNDM4rAH6IJ2JwMYnOsOZ7QuzRFNHiRhP2sJuVrxX2UKv8DCCMQABoMNjM3NDIzMTgzODA1IgzTpnPoB05bjkd3Kukq3AP9S9KggD9awJC%2BoLP2CKTlCRQQ%2FoaOtUgN2baRiubA7CTbEvOUbEEsIJM7u29d13g%2FYbOXTYn4f2rFXPquOY8N9tEa7kyc9zEW4Pkng7XAYvso13dQmLmMsx%2B%2F8KmgKR2DoJ2FGtLuQR9ABczdUZtAc1LfGvAzHdPAAJyOPDcJZOXiVkYxo2t9luTlcN%2Bx%2BwXQYvd5IhT3I7fERL%2FRl4M1IgO%2Fh9loFgBMmXhT6q29etLm72Pgs61zBILA%2B1zptIDJSQNT7XftTkRewYI%2FO3ItREcNT9zXYnZfmDAOkA%2B6F8E4hhT9rBznFkP%2B1Tq140JnBdUKsZHFyom9ZVdtLK7s%2F0BObeWS2YN4U6OrTatBaLoCKMn8jBGaLH1mTdH0T6j7q9o6JWgDIc23gTJ45FDxVM9IFex5QbEwArzREZGa5cgCRcJaT2Nv9HzKOyNp7lFDvQJaMCtHc2IQ31kwlNFs7%2FhRo2BEwBenW1%2BfuPWQ1%2Fu%2Bx5pUFpVtRJkGVPalDo%2BCA2Lp2GdKTI71CcxDaujU%2FAQEHlToc1JAV9ZkdLsuqZONhiWPPkHNgILIa01rA8Mel7lKIBLZ6OGN3xN8a%2BlqzVS9Fpyf7UZC1ousviCVYZ4KKb9f%2ByRqst4P8zCBo8K%2FBjqkAfOikawvJ2d%2BN2QTD1Xv6PnG%2Fl0MsujC49HAiIRvJEnJ8u%2FHu5ds89fT3j4qDKYKghfn%2Fw2bV1RVezooesfejCSrM9sp5qqke7R%2BLutWShCA9HHGx0JmuMNGaj1xBKbKQ7FV0uouuX7cIoVDOVyldXmf9%2BooNmKKV%2BoN9DW54Fj3UL9lq0ljiKR7ILUqv10zzFizQFftA8%2Bv5%2FoXpI4kiWu9Z4aq&X-Amz-Signature=c9dc5bb3950327408c921c78ea780b6e14445c5f9f1ae5bb61c35bb8b04db489&X-Amz-SignedHeaders=host&x-id=GetObject)
