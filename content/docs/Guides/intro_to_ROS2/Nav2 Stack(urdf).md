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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWRRIYH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCmWIJ%2BPRavAA29Y8iJj%2BiVd7om0L8PXFzo3rn0Nn35VQIhAKVYqq8onmMgrPSpnSSzmwjftlmnJFcKLeYvIz1Xq5p4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp1h9LqsjPn4rVhpEq3ANxiKoWTwOMi7m5Ev8ybggF4rmzrlMOqeyI4g5ovvEbfSlfSodzmQdApMEVw0yb8SSJiUbOcj4bXyC31NQp9jwB8TuVnyVTOeVQqRCJCUNvCygZDFdRPI5fNvdwK%2Fk1utk67WLdc8fPGimsAtkEuZ71rJko8NJyFxxdcOaSUQCdfLfjDCcEZrkAdkzxwA2ObZC%2BIcNAlKu5UlauQftpEs6bmSpkTIhfbqTjYUeCpnyDFLORxpyb3DTGEsLEUL5k0zSK9Q5CM45bVyViwAqVQmOIfomZ4yi3dNA4j8CM4HdR976BhutCnLjV%2BZkbnbWW9xSMMqrjKCFqc2ehITuNeWrvFN03lxBgS4BzPJ37Tlm8lmmMYl4IZ%2BnNWMcfmCe7sY6vcE6nMYyajmRLNbls%2BVAD8nNRL6xGToVJQeRiWgQH7x7eaRqTLOxFnIENA6MQCyDbHet11H%2F0FOGJIBPaovabAuDd7aZFXnXThSW4xFqdq988O7UzTj0AH1X8%2FGsL7LzdaUxatYWJPgkEYOaRyVNFhAz9xUfKmIp8PvO7vqnanbcYAsLc%2FfTmfrlXQ8gfSlQoJx%2BqKE5qtu0Z3gWh0FekCL9UaAvQa9II%2BMGVtt3itz%2FD1nLA352vn55JIDCot%2Be%2FBjqkAeKsT1pt8yCcbhr3Hu%2Bcx7eW%2F%2Bcd1h7Mo%2B2T7SZn3mCz1Bbkl%2B%2Fa2v8lK4%2Fg8pZBtbC96CxZV5iLgVLcIm739ol2oOUCgjplzeKXJnCVj3LENGN3Gp0jOXxDXSwMIL1992Zg%2FepucYhmbd6RtThXwAxCdide5pV9PAbYuVo%2BI%2BgINf4NfLsSAzwgqO71T7UR35abUT04qrLcbwGx1TSXevtTuL0B&X-Amz-Signature=8cca4b43b756b0f1ab2dff09705aa24ba69eb38f52a94df5efd6a692d8f90728&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWRRIYH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCmWIJ%2BPRavAA29Y8iJj%2BiVd7om0L8PXFzo3rn0Nn35VQIhAKVYqq8onmMgrPSpnSSzmwjftlmnJFcKLeYvIz1Xq5p4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp1h9LqsjPn4rVhpEq3ANxiKoWTwOMi7m5Ev8ybggF4rmzrlMOqeyI4g5ovvEbfSlfSodzmQdApMEVw0yb8SSJiUbOcj4bXyC31NQp9jwB8TuVnyVTOeVQqRCJCUNvCygZDFdRPI5fNvdwK%2Fk1utk67WLdc8fPGimsAtkEuZ71rJko8NJyFxxdcOaSUQCdfLfjDCcEZrkAdkzxwA2ObZC%2BIcNAlKu5UlauQftpEs6bmSpkTIhfbqTjYUeCpnyDFLORxpyb3DTGEsLEUL5k0zSK9Q5CM45bVyViwAqVQmOIfomZ4yi3dNA4j8CM4HdR976BhutCnLjV%2BZkbnbWW9xSMMqrjKCFqc2ehITuNeWrvFN03lxBgS4BzPJ37Tlm8lmmMYl4IZ%2BnNWMcfmCe7sY6vcE6nMYyajmRLNbls%2BVAD8nNRL6xGToVJQeRiWgQH7x7eaRqTLOxFnIENA6MQCyDbHet11H%2F0FOGJIBPaovabAuDd7aZFXnXThSW4xFqdq988O7UzTj0AH1X8%2FGsL7LzdaUxatYWJPgkEYOaRyVNFhAz9xUfKmIp8PvO7vqnanbcYAsLc%2FfTmfrlXQ8gfSlQoJx%2BqKE5qtu0Z3gWh0FekCL9UaAvQa9II%2BMGVtt3itz%2FD1nLA352vn55JIDCot%2Be%2FBjqkAeKsT1pt8yCcbhr3Hu%2Bcx7eW%2F%2Bcd1h7Mo%2B2T7SZn3mCz1Bbkl%2B%2Fa2v8lK4%2Fg8pZBtbC96CxZV5iLgVLcIm739ol2oOUCgjplzeKXJnCVj3LENGN3Gp0jOXxDXSwMIL1992Zg%2FepucYhmbd6RtThXwAxCdide5pV9PAbYuVo%2BI%2BgINf4NfLsSAzwgqO71T7UR35abUT04qrLcbwGx1TSXevtTuL0B&X-Amz-Signature=1eb758d63e55a6fdb33c120234181ea73ed73316e77fc89c8cec1ac309b8cf13&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWRRIYH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCmWIJ%2BPRavAA29Y8iJj%2BiVd7om0L8PXFzo3rn0Nn35VQIhAKVYqq8onmMgrPSpnSSzmwjftlmnJFcKLeYvIz1Xq5p4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp1h9LqsjPn4rVhpEq3ANxiKoWTwOMi7m5Ev8ybggF4rmzrlMOqeyI4g5ovvEbfSlfSodzmQdApMEVw0yb8SSJiUbOcj4bXyC31NQp9jwB8TuVnyVTOeVQqRCJCUNvCygZDFdRPI5fNvdwK%2Fk1utk67WLdc8fPGimsAtkEuZ71rJko8NJyFxxdcOaSUQCdfLfjDCcEZrkAdkzxwA2ObZC%2BIcNAlKu5UlauQftpEs6bmSpkTIhfbqTjYUeCpnyDFLORxpyb3DTGEsLEUL5k0zSK9Q5CM45bVyViwAqVQmOIfomZ4yi3dNA4j8CM4HdR976BhutCnLjV%2BZkbnbWW9xSMMqrjKCFqc2ehITuNeWrvFN03lxBgS4BzPJ37Tlm8lmmMYl4IZ%2BnNWMcfmCe7sY6vcE6nMYyajmRLNbls%2BVAD8nNRL6xGToVJQeRiWgQH7x7eaRqTLOxFnIENA6MQCyDbHet11H%2F0FOGJIBPaovabAuDd7aZFXnXThSW4xFqdq988O7UzTj0AH1X8%2FGsL7LzdaUxatYWJPgkEYOaRyVNFhAz9xUfKmIp8PvO7vqnanbcYAsLc%2FfTmfrlXQ8gfSlQoJx%2BqKE5qtu0Z3gWh0FekCL9UaAvQa9II%2BMGVtt3itz%2FD1nLA352vn55JIDCot%2Be%2FBjqkAeKsT1pt8yCcbhr3Hu%2Bcx7eW%2F%2Bcd1h7Mo%2B2T7SZn3mCz1Bbkl%2B%2Fa2v8lK4%2Fg8pZBtbC96CxZV5iLgVLcIm739ol2oOUCgjplzeKXJnCVj3LENGN3Gp0jOXxDXSwMIL1992Zg%2FepucYhmbd6RtThXwAxCdide5pV9PAbYuVo%2BI%2BgINf4NfLsSAzwgqO71T7UR35abUT04qrLcbwGx1TSXevtTuL0B&X-Amz-Signature=91adcaa68d834d74aee5ca1b0e256b50b8d9a995177d0cda18f35b9d97ad922b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWRRIYH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCmWIJ%2BPRavAA29Y8iJj%2BiVd7om0L8PXFzo3rn0Nn35VQIhAKVYqq8onmMgrPSpnSSzmwjftlmnJFcKLeYvIz1Xq5p4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp1h9LqsjPn4rVhpEq3ANxiKoWTwOMi7m5Ev8ybggF4rmzrlMOqeyI4g5ovvEbfSlfSodzmQdApMEVw0yb8SSJiUbOcj4bXyC31NQp9jwB8TuVnyVTOeVQqRCJCUNvCygZDFdRPI5fNvdwK%2Fk1utk67WLdc8fPGimsAtkEuZ71rJko8NJyFxxdcOaSUQCdfLfjDCcEZrkAdkzxwA2ObZC%2BIcNAlKu5UlauQftpEs6bmSpkTIhfbqTjYUeCpnyDFLORxpyb3DTGEsLEUL5k0zSK9Q5CM45bVyViwAqVQmOIfomZ4yi3dNA4j8CM4HdR976BhutCnLjV%2BZkbnbWW9xSMMqrjKCFqc2ehITuNeWrvFN03lxBgS4BzPJ37Tlm8lmmMYl4IZ%2BnNWMcfmCe7sY6vcE6nMYyajmRLNbls%2BVAD8nNRL6xGToVJQeRiWgQH7x7eaRqTLOxFnIENA6MQCyDbHet11H%2F0FOGJIBPaovabAuDd7aZFXnXThSW4xFqdq988O7UzTj0AH1X8%2FGsL7LzdaUxatYWJPgkEYOaRyVNFhAz9xUfKmIp8PvO7vqnanbcYAsLc%2FfTmfrlXQ8gfSlQoJx%2BqKE5qtu0Z3gWh0FekCL9UaAvQa9II%2BMGVtt3itz%2FD1nLA352vn55JIDCot%2Be%2FBjqkAeKsT1pt8yCcbhr3Hu%2Bcx7eW%2F%2Bcd1h7Mo%2B2T7SZn3mCz1Bbkl%2B%2Fa2v8lK4%2Fg8pZBtbC96CxZV5iLgVLcIm739ol2oOUCgjplzeKXJnCVj3LENGN3Gp0jOXxDXSwMIL1992Zg%2FepucYhmbd6RtThXwAxCdide5pV9PAbYuVo%2BI%2BgINf4NfLsSAzwgqO71T7UR35abUT04qrLcbwGx1TSXevtTuL0B&X-Amz-Signature=06c4bf66baa275674252a73cf9c3e358bbbf86843c206f8f90ccdee85c972083&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWRRIYH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCmWIJ%2BPRavAA29Y8iJj%2BiVd7om0L8PXFzo3rn0Nn35VQIhAKVYqq8onmMgrPSpnSSzmwjftlmnJFcKLeYvIz1Xq5p4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp1h9LqsjPn4rVhpEq3ANxiKoWTwOMi7m5Ev8ybggF4rmzrlMOqeyI4g5ovvEbfSlfSodzmQdApMEVw0yb8SSJiUbOcj4bXyC31NQp9jwB8TuVnyVTOeVQqRCJCUNvCygZDFdRPI5fNvdwK%2Fk1utk67WLdc8fPGimsAtkEuZ71rJko8NJyFxxdcOaSUQCdfLfjDCcEZrkAdkzxwA2ObZC%2BIcNAlKu5UlauQftpEs6bmSpkTIhfbqTjYUeCpnyDFLORxpyb3DTGEsLEUL5k0zSK9Q5CM45bVyViwAqVQmOIfomZ4yi3dNA4j8CM4HdR976BhutCnLjV%2BZkbnbWW9xSMMqrjKCFqc2ehITuNeWrvFN03lxBgS4BzPJ37Tlm8lmmMYl4IZ%2BnNWMcfmCe7sY6vcE6nMYyajmRLNbls%2BVAD8nNRL6xGToVJQeRiWgQH7x7eaRqTLOxFnIENA6MQCyDbHet11H%2F0FOGJIBPaovabAuDd7aZFXnXThSW4xFqdq988O7UzTj0AH1X8%2FGsL7LzdaUxatYWJPgkEYOaRyVNFhAz9xUfKmIp8PvO7vqnanbcYAsLc%2FfTmfrlXQ8gfSlQoJx%2BqKE5qtu0Z3gWh0FekCL9UaAvQa9II%2BMGVtt3itz%2FD1nLA352vn55JIDCot%2Be%2FBjqkAeKsT1pt8yCcbhr3Hu%2Bcx7eW%2F%2Bcd1h7Mo%2B2T7SZn3mCz1Bbkl%2B%2Fa2v8lK4%2Fg8pZBtbC96CxZV5iLgVLcIm739ol2oOUCgjplzeKXJnCVj3LENGN3Gp0jOXxDXSwMIL1992Zg%2FepucYhmbd6RtThXwAxCdide5pV9PAbYuVo%2BI%2BgINf4NfLsSAzwgqO71T7UR35abUT04qrLcbwGx1TSXevtTuL0B&X-Amz-Signature=164d5ed4c4325b12e6baa51a898c78125de269950dfb768ea6945ec33b55d470&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWRRIYH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCmWIJ%2BPRavAA29Y8iJj%2BiVd7om0L8PXFzo3rn0Nn35VQIhAKVYqq8onmMgrPSpnSSzmwjftlmnJFcKLeYvIz1Xq5p4KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp1h9LqsjPn4rVhpEq3ANxiKoWTwOMi7m5Ev8ybggF4rmzrlMOqeyI4g5ovvEbfSlfSodzmQdApMEVw0yb8SSJiUbOcj4bXyC31NQp9jwB8TuVnyVTOeVQqRCJCUNvCygZDFdRPI5fNvdwK%2Fk1utk67WLdc8fPGimsAtkEuZ71rJko8NJyFxxdcOaSUQCdfLfjDCcEZrkAdkzxwA2ObZC%2BIcNAlKu5UlauQftpEs6bmSpkTIhfbqTjYUeCpnyDFLORxpyb3DTGEsLEUL5k0zSK9Q5CM45bVyViwAqVQmOIfomZ4yi3dNA4j8CM4HdR976BhutCnLjV%2BZkbnbWW9xSMMqrjKCFqc2ehITuNeWrvFN03lxBgS4BzPJ37Tlm8lmmMYl4IZ%2BnNWMcfmCe7sY6vcE6nMYyajmRLNbls%2BVAD8nNRL6xGToVJQeRiWgQH7x7eaRqTLOxFnIENA6MQCyDbHet11H%2F0FOGJIBPaovabAuDd7aZFXnXThSW4xFqdq988O7UzTj0AH1X8%2FGsL7LzdaUxatYWJPgkEYOaRyVNFhAz9xUfKmIp8PvO7vqnanbcYAsLc%2FfTmfrlXQ8gfSlQoJx%2BqKE5qtu0Z3gWh0FekCL9UaAvQa9II%2BMGVtt3itz%2FD1nLA352vn55JIDCot%2Be%2FBjqkAeKsT1pt8yCcbhr3Hu%2Bcx7eW%2F%2Bcd1h7Mo%2B2T7SZn3mCz1Bbkl%2B%2Fa2v8lK4%2Fg8pZBtbC96CxZV5iLgVLcIm739ol2oOUCgjplzeKXJnCVj3LENGN3Gp0jOXxDXSwMIL1992Zg%2FepucYhmbd6RtThXwAxCdide5pV9PAbYuVo%2BI%2BgINf4NfLsSAzwgqO71T7UR35abUT04qrLcbwGx1TSXevtTuL0B&X-Amz-Signature=073ac8374ca0dd1f75791923e26841d238ae275d4515265d9c85f97c6ff0f5e3&X-Amz-SignedHeaders=host&x-id=GetObject)
