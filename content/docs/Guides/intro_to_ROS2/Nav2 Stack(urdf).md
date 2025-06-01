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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKIMRES%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEAL7oGGLDP6kcZ370wclyyyqthz7XWb0Yr4H%2FJzmgQIAiEAyU%2BE5yAJbAn2dl3n8HBnIFON%2FMt2hvIJTUGrAhg4W54qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy4zjGv9XgxjaBciyrcA1E%2BSngKUNZFQFcvWpvhGYiJeP4owZDluE4oqZ3%2FnCHUo4RRFcEj%2FPg0WaNUaqaltWV8YHju3wJ1NCTQ7GNvNuxPOld2D4Ama84DXHQ8RBVNs4QpirGnStTOhi033mvsp4HvJhtqubD8vLiE%2BfrBFMTbwTrsuAq0hY5AZVs09E%2BHxYJn0wsdzZdCTmVaqNZsbOlw8f%2BSCFuyQTwo47edbkKyL%2BqCAuLIw0bfKL%2FPvWJrRhtRszoI01BNgZDmtqakDtl%2BKQzvbuL4PMEoYqiOfdYi5VfffiHW1ROyUczde4olPwqMBl1czyIl9fM2PhiGZjDJuH5SY48D%2BgE1BMOJi40UBoLpozdlNntBiIGGpwMk2Vdczq4mjOefWXJLyauCKEhzpnBpnVLKN0q4sz6j8pLQR5UniiBbMPGjEoYCS165QNexEhHxTGdS8F8%2FEbMuvovTXeW3iOB0a4oUkgA96U85CVVe1MlbRi3orsNVmcxwnHNX3dLpdJApl%2Fr69AotJ8xys%2FfLXcxDY3TPKiVImdPvyu5SiS31%2ByG%2Bk2jXXmadXOAcFlmq1BrSj%2FrzqIYh4vMX35E%2FS20PpDPwWy0yq7190tlLhGF8fagMLCLpcUxzpl0pIuUPuqNGkAVVMNLf8MEGOqUBlWMQSkNfyVKKPJ7qBuXpxS0OUt%2Fc6JBofmjv48DZ%2B5NvfD1kJv3jaCGdBvFNsqQa%2Fi09cFFeWGw3j4%2BRajL%2BPXkesHXSW56%2FLruQ0COZTI4LzC7n6GTJbRy%2BUoBNp2eHRlHTyzZC5mg5m1b%2B974EEYxWWwBKuiNW9D4axFywLaJsNovg3d1L8CV84jETF0eqZVIVl9a1PK4PizV0hJEZms%2FtVAYO&X-Amz-Signature=1a931405a7e85c23dd60a513593d645379611f91a5633c24497bd6fe5c042733&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKIMRES%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEAL7oGGLDP6kcZ370wclyyyqthz7XWb0Yr4H%2FJzmgQIAiEAyU%2BE5yAJbAn2dl3n8HBnIFON%2FMt2hvIJTUGrAhg4W54qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy4zjGv9XgxjaBciyrcA1E%2BSngKUNZFQFcvWpvhGYiJeP4owZDluE4oqZ3%2FnCHUo4RRFcEj%2FPg0WaNUaqaltWV8YHju3wJ1NCTQ7GNvNuxPOld2D4Ama84DXHQ8RBVNs4QpirGnStTOhi033mvsp4HvJhtqubD8vLiE%2BfrBFMTbwTrsuAq0hY5AZVs09E%2BHxYJn0wsdzZdCTmVaqNZsbOlw8f%2BSCFuyQTwo47edbkKyL%2BqCAuLIw0bfKL%2FPvWJrRhtRszoI01BNgZDmtqakDtl%2BKQzvbuL4PMEoYqiOfdYi5VfffiHW1ROyUczde4olPwqMBl1czyIl9fM2PhiGZjDJuH5SY48D%2BgE1BMOJi40UBoLpozdlNntBiIGGpwMk2Vdczq4mjOefWXJLyauCKEhzpnBpnVLKN0q4sz6j8pLQR5UniiBbMPGjEoYCS165QNexEhHxTGdS8F8%2FEbMuvovTXeW3iOB0a4oUkgA96U85CVVe1MlbRi3orsNVmcxwnHNX3dLpdJApl%2Fr69AotJ8xys%2FfLXcxDY3TPKiVImdPvyu5SiS31%2ByG%2Bk2jXXmadXOAcFlmq1BrSj%2FrzqIYh4vMX35E%2FS20PpDPwWy0yq7190tlLhGF8fagMLCLpcUxzpl0pIuUPuqNGkAVVMNLf8MEGOqUBlWMQSkNfyVKKPJ7qBuXpxS0OUt%2Fc6JBofmjv48DZ%2B5NvfD1kJv3jaCGdBvFNsqQa%2Fi09cFFeWGw3j4%2BRajL%2BPXkesHXSW56%2FLruQ0COZTI4LzC7n6GTJbRy%2BUoBNp2eHRlHTyzZC5mg5m1b%2B974EEYxWWwBKuiNW9D4axFywLaJsNovg3d1L8CV84jETF0eqZVIVl9a1PK4PizV0hJEZms%2FtVAYO&X-Amz-Signature=44a0e78bde4f59ba1ac66ce9aa8d780bae25dedd7c3e7d11057ec11b2af9f864&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKIMRES%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEAL7oGGLDP6kcZ370wclyyyqthz7XWb0Yr4H%2FJzmgQIAiEAyU%2BE5yAJbAn2dl3n8HBnIFON%2FMt2hvIJTUGrAhg4W54qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy4zjGv9XgxjaBciyrcA1E%2BSngKUNZFQFcvWpvhGYiJeP4owZDluE4oqZ3%2FnCHUo4RRFcEj%2FPg0WaNUaqaltWV8YHju3wJ1NCTQ7GNvNuxPOld2D4Ama84DXHQ8RBVNs4QpirGnStTOhi033mvsp4HvJhtqubD8vLiE%2BfrBFMTbwTrsuAq0hY5AZVs09E%2BHxYJn0wsdzZdCTmVaqNZsbOlw8f%2BSCFuyQTwo47edbkKyL%2BqCAuLIw0bfKL%2FPvWJrRhtRszoI01BNgZDmtqakDtl%2BKQzvbuL4PMEoYqiOfdYi5VfffiHW1ROyUczde4olPwqMBl1czyIl9fM2PhiGZjDJuH5SY48D%2BgE1BMOJi40UBoLpozdlNntBiIGGpwMk2Vdczq4mjOefWXJLyauCKEhzpnBpnVLKN0q4sz6j8pLQR5UniiBbMPGjEoYCS165QNexEhHxTGdS8F8%2FEbMuvovTXeW3iOB0a4oUkgA96U85CVVe1MlbRi3orsNVmcxwnHNX3dLpdJApl%2Fr69AotJ8xys%2FfLXcxDY3TPKiVImdPvyu5SiS31%2ByG%2Bk2jXXmadXOAcFlmq1BrSj%2FrzqIYh4vMX35E%2FS20PpDPwWy0yq7190tlLhGF8fagMLCLpcUxzpl0pIuUPuqNGkAVVMNLf8MEGOqUBlWMQSkNfyVKKPJ7qBuXpxS0OUt%2Fc6JBofmjv48DZ%2B5NvfD1kJv3jaCGdBvFNsqQa%2Fi09cFFeWGw3j4%2BRajL%2BPXkesHXSW56%2FLruQ0COZTI4LzC7n6GTJbRy%2BUoBNp2eHRlHTyzZC5mg5m1b%2B974EEYxWWwBKuiNW9D4axFywLaJsNovg3d1L8CV84jETF0eqZVIVl9a1PK4PizV0hJEZms%2FtVAYO&X-Amz-Signature=9b555cc755ffde7bb95eaf7a54fe1f3eab1c7935672297181e78051e80de2dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKIMRES%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEAL7oGGLDP6kcZ370wclyyyqthz7XWb0Yr4H%2FJzmgQIAiEAyU%2BE5yAJbAn2dl3n8HBnIFON%2FMt2hvIJTUGrAhg4W54qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy4zjGv9XgxjaBciyrcA1E%2BSngKUNZFQFcvWpvhGYiJeP4owZDluE4oqZ3%2FnCHUo4RRFcEj%2FPg0WaNUaqaltWV8YHju3wJ1NCTQ7GNvNuxPOld2D4Ama84DXHQ8RBVNs4QpirGnStTOhi033mvsp4HvJhtqubD8vLiE%2BfrBFMTbwTrsuAq0hY5AZVs09E%2BHxYJn0wsdzZdCTmVaqNZsbOlw8f%2BSCFuyQTwo47edbkKyL%2BqCAuLIw0bfKL%2FPvWJrRhtRszoI01BNgZDmtqakDtl%2BKQzvbuL4PMEoYqiOfdYi5VfffiHW1ROyUczde4olPwqMBl1czyIl9fM2PhiGZjDJuH5SY48D%2BgE1BMOJi40UBoLpozdlNntBiIGGpwMk2Vdczq4mjOefWXJLyauCKEhzpnBpnVLKN0q4sz6j8pLQR5UniiBbMPGjEoYCS165QNexEhHxTGdS8F8%2FEbMuvovTXeW3iOB0a4oUkgA96U85CVVe1MlbRi3orsNVmcxwnHNX3dLpdJApl%2Fr69AotJ8xys%2FfLXcxDY3TPKiVImdPvyu5SiS31%2ByG%2Bk2jXXmadXOAcFlmq1BrSj%2FrzqIYh4vMX35E%2FS20PpDPwWy0yq7190tlLhGF8fagMLCLpcUxzpl0pIuUPuqNGkAVVMNLf8MEGOqUBlWMQSkNfyVKKPJ7qBuXpxS0OUt%2Fc6JBofmjv48DZ%2B5NvfD1kJv3jaCGdBvFNsqQa%2Fi09cFFeWGw3j4%2BRajL%2BPXkesHXSW56%2FLruQ0COZTI4LzC7n6GTJbRy%2BUoBNp2eHRlHTyzZC5mg5m1b%2B974EEYxWWwBKuiNW9D4axFywLaJsNovg3d1L8CV84jETF0eqZVIVl9a1PK4PizV0hJEZms%2FtVAYO&X-Amz-Signature=5e0bdefe35efbff9b078166dc14c954a794f7485cf11e1c8df6aded78860a4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKIMRES%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEAL7oGGLDP6kcZ370wclyyyqthz7XWb0Yr4H%2FJzmgQIAiEAyU%2BE5yAJbAn2dl3n8HBnIFON%2FMt2hvIJTUGrAhg4W54qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy4zjGv9XgxjaBciyrcA1E%2BSngKUNZFQFcvWpvhGYiJeP4owZDluE4oqZ3%2FnCHUo4RRFcEj%2FPg0WaNUaqaltWV8YHju3wJ1NCTQ7GNvNuxPOld2D4Ama84DXHQ8RBVNs4QpirGnStTOhi033mvsp4HvJhtqubD8vLiE%2BfrBFMTbwTrsuAq0hY5AZVs09E%2BHxYJn0wsdzZdCTmVaqNZsbOlw8f%2BSCFuyQTwo47edbkKyL%2BqCAuLIw0bfKL%2FPvWJrRhtRszoI01BNgZDmtqakDtl%2BKQzvbuL4PMEoYqiOfdYi5VfffiHW1ROyUczde4olPwqMBl1czyIl9fM2PhiGZjDJuH5SY48D%2BgE1BMOJi40UBoLpozdlNntBiIGGpwMk2Vdczq4mjOefWXJLyauCKEhzpnBpnVLKN0q4sz6j8pLQR5UniiBbMPGjEoYCS165QNexEhHxTGdS8F8%2FEbMuvovTXeW3iOB0a4oUkgA96U85CVVe1MlbRi3orsNVmcxwnHNX3dLpdJApl%2Fr69AotJ8xys%2FfLXcxDY3TPKiVImdPvyu5SiS31%2ByG%2Bk2jXXmadXOAcFlmq1BrSj%2FrzqIYh4vMX35E%2FS20PpDPwWy0yq7190tlLhGF8fagMLCLpcUxzpl0pIuUPuqNGkAVVMNLf8MEGOqUBlWMQSkNfyVKKPJ7qBuXpxS0OUt%2Fc6JBofmjv48DZ%2B5NvfD1kJv3jaCGdBvFNsqQa%2Fi09cFFeWGw3j4%2BRajL%2BPXkesHXSW56%2FLruQ0COZTI4LzC7n6GTJbRy%2BUoBNp2eHRlHTyzZC5mg5m1b%2B974EEYxWWwBKuiNW9D4axFywLaJsNovg3d1L8CV84jETF0eqZVIVl9a1PK4PizV0hJEZms%2FtVAYO&X-Amz-Signature=de0e3826cd5b9c387678e416a3f15dadad847ac7d50e301ecc0c702c2202f02b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKIMRES%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEAL7oGGLDP6kcZ370wclyyyqthz7XWb0Yr4H%2FJzmgQIAiEAyU%2BE5yAJbAn2dl3n8HBnIFON%2FMt2hvIJTUGrAhg4W54qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy4zjGv9XgxjaBciyrcA1E%2BSngKUNZFQFcvWpvhGYiJeP4owZDluE4oqZ3%2FnCHUo4RRFcEj%2FPg0WaNUaqaltWV8YHju3wJ1NCTQ7GNvNuxPOld2D4Ama84DXHQ8RBVNs4QpirGnStTOhi033mvsp4HvJhtqubD8vLiE%2BfrBFMTbwTrsuAq0hY5AZVs09E%2BHxYJn0wsdzZdCTmVaqNZsbOlw8f%2BSCFuyQTwo47edbkKyL%2BqCAuLIw0bfKL%2FPvWJrRhtRszoI01BNgZDmtqakDtl%2BKQzvbuL4PMEoYqiOfdYi5VfffiHW1ROyUczde4olPwqMBl1czyIl9fM2PhiGZjDJuH5SY48D%2BgE1BMOJi40UBoLpozdlNntBiIGGpwMk2Vdczq4mjOefWXJLyauCKEhzpnBpnVLKN0q4sz6j8pLQR5UniiBbMPGjEoYCS165QNexEhHxTGdS8F8%2FEbMuvovTXeW3iOB0a4oUkgA96U85CVVe1MlbRi3orsNVmcxwnHNX3dLpdJApl%2Fr69AotJ8xys%2FfLXcxDY3TPKiVImdPvyu5SiS31%2ByG%2Bk2jXXmadXOAcFlmq1BrSj%2FrzqIYh4vMX35E%2FS20PpDPwWy0yq7190tlLhGF8fagMLCLpcUxzpl0pIuUPuqNGkAVVMNLf8MEGOqUBlWMQSkNfyVKKPJ7qBuXpxS0OUt%2Fc6JBofmjv48DZ%2B5NvfD1kJv3jaCGdBvFNsqQa%2Fi09cFFeWGw3j4%2BRajL%2BPXkesHXSW56%2FLruQ0COZTI4LzC7n6GTJbRy%2BUoBNp2eHRlHTyzZC5mg5m1b%2B974EEYxWWwBKuiNW9D4axFywLaJsNovg3d1L8CV84jETF0eqZVIVl9a1PK4PizV0hJEZms%2FtVAYO&X-Amz-Signature=11fd955bf796ca93ad01df241db4dbc001bc72d1494db7f46d908557f2a4e3a1&X-Amz-SignedHeaders=host&x-id=GetObject)
