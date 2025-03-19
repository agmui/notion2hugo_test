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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDXVLOC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH1Nq%2B%2Fw5UXXrP5GR7lPT3RWlU4H%2BuYJ6RkevsvHjiVUAiEAjJ5Aq4qB9ehkNHrwh4e5UUKF5oOlB4KSPus0ArqfCvMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOFppOv%2BNfsC5lrEMircA%2BDirokL9vWAk1FEPlMo3feXqCuogYkY8Z2gRbHA5BucEdYVMG1hPXp0jXQ7D4ySUCP%2BjA%2B%2BIz82Zj%2FWf92JKT61eXbPb41GUKptCypz1imONmQS6M%2BbFiR%2FStuCCgSPW0Vm94ArGyXHIkvtivDvQfUxvfLJfELfZ8YuN0m1PYQUyo3wyMdPAmISY%2BJW5%2BYoJ%2B7%2BRrjqHmOATMZa5jldnk3tsbZF6pqJzEPzbaCxCLj0n0Zq14bbbSaosIwcJUqBjy9ZK3XwSd8i6xfBaLt03sdpEjnNTtt6R4bgvfFlVeiZ8DBFC35%2B6OB8fyIjPa3aa7AXrl3DaD8OLvEUrAC1MTf1fz74LBaRb%2B%2Bb6x5nlwMcjXiOoxHhmZWQjui0ZsKuP7yIqPiv5MSs8HMlmqSGeOU2iYKhokiaoKLAffVN2vlekVfNU1cBpv4eECdo8vL%2Fobs7s0LxvGMytRoEqt29QdySsqV04pAbvDPsLY22%2BmYBYlo84%2Bjnh3xZ%2B7F1XDb5YDU4sL1M3ypDbSL93p4bFf0IRQHJhEiR9Bev%2B%2FMB1lm0Lszg0j0NDFIGwxyb6TFawLI68ujzqdHyPcfs%2F3LoDhj%2Bh6tjC2qdevVfF2hSC1PoOEsTKFKJYjLGi9ANMNHe6L4GOqUBk2WsoJeOnhaAaoDVjUuIL6QLCTLamZD9LaXdthNi9fbdoUX4hLWJ5mC%2FgOKHv1RFMP2Js7SFnmMm6qynOSRYXdpYQJkWX6iHA7m5CbtXCWU0LC3nHZtaDcxXT19m5B0GKtY5BRIeDyt%2BNdH1%2F9VPMQgZXq0UoURqzuK%2FiD%2Bva89sdC%2FFIPfeZJF8HJXU5tpeH86gi1dYHXYtARUy9tejYuc4w4ov&X-Amz-Signature=1cb547561ae8c45611f8ddde151a1c8a06403b831ee73711b2cf65844fa5169d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDXVLOC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH1Nq%2B%2Fw5UXXrP5GR7lPT3RWlU4H%2BuYJ6RkevsvHjiVUAiEAjJ5Aq4qB9ehkNHrwh4e5UUKF5oOlB4KSPus0ArqfCvMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOFppOv%2BNfsC5lrEMircA%2BDirokL9vWAk1FEPlMo3feXqCuogYkY8Z2gRbHA5BucEdYVMG1hPXp0jXQ7D4ySUCP%2BjA%2B%2BIz82Zj%2FWf92JKT61eXbPb41GUKptCypz1imONmQS6M%2BbFiR%2FStuCCgSPW0Vm94ArGyXHIkvtivDvQfUxvfLJfELfZ8YuN0m1PYQUyo3wyMdPAmISY%2BJW5%2BYoJ%2B7%2BRrjqHmOATMZa5jldnk3tsbZF6pqJzEPzbaCxCLj0n0Zq14bbbSaosIwcJUqBjy9ZK3XwSd8i6xfBaLt03sdpEjnNTtt6R4bgvfFlVeiZ8DBFC35%2B6OB8fyIjPa3aa7AXrl3DaD8OLvEUrAC1MTf1fz74LBaRb%2B%2Bb6x5nlwMcjXiOoxHhmZWQjui0ZsKuP7yIqPiv5MSs8HMlmqSGeOU2iYKhokiaoKLAffVN2vlekVfNU1cBpv4eECdo8vL%2Fobs7s0LxvGMytRoEqt29QdySsqV04pAbvDPsLY22%2BmYBYlo84%2Bjnh3xZ%2B7F1XDb5YDU4sL1M3ypDbSL93p4bFf0IRQHJhEiR9Bev%2B%2FMB1lm0Lszg0j0NDFIGwxyb6TFawLI68ujzqdHyPcfs%2F3LoDhj%2Bh6tjC2qdevVfF2hSC1PoOEsTKFKJYjLGi9ANMNHe6L4GOqUBk2WsoJeOnhaAaoDVjUuIL6QLCTLamZD9LaXdthNi9fbdoUX4hLWJ5mC%2FgOKHv1RFMP2Js7SFnmMm6qynOSRYXdpYQJkWX6iHA7m5CbtXCWU0LC3nHZtaDcxXT19m5B0GKtY5BRIeDyt%2BNdH1%2F9VPMQgZXq0UoURqzuK%2FiD%2Bva89sdC%2FFIPfeZJF8HJXU5tpeH86gi1dYHXYtARUy9tejYuc4w4ov&X-Amz-Signature=eb1b9afb85d1d9ef0b77cbdf9c4c01972f1f4da4d39e5c6bad39410d0480f631&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDXVLOC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH1Nq%2B%2Fw5UXXrP5GR7lPT3RWlU4H%2BuYJ6RkevsvHjiVUAiEAjJ5Aq4qB9ehkNHrwh4e5UUKF5oOlB4KSPus0ArqfCvMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOFppOv%2BNfsC5lrEMircA%2BDirokL9vWAk1FEPlMo3feXqCuogYkY8Z2gRbHA5BucEdYVMG1hPXp0jXQ7D4ySUCP%2BjA%2B%2BIz82Zj%2FWf92JKT61eXbPb41GUKptCypz1imONmQS6M%2BbFiR%2FStuCCgSPW0Vm94ArGyXHIkvtivDvQfUxvfLJfELfZ8YuN0m1PYQUyo3wyMdPAmISY%2BJW5%2BYoJ%2B7%2BRrjqHmOATMZa5jldnk3tsbZF6pqJzEPzbaCxCLj0n0Zq14bbbSaosIwcJUqBjy9ZK3XwSd8i6xfBaLt03sdpEjnNTtt6R4bgvfFlVeiZ8DBFC35%2B6OB8fyIjPa3aa7AXrl3DaD8OLvEUrAC1MTf1fz74LBaRb%2B%2Bb6x5nlwMcjXiOoxHhmZWQjui0ZsKuP7yIqPiv5MSs8HMlmqSGeOU2iYKhokiaoKLAffVN2vlekVfNU1cBpv4eECdo8vL%2Fobs7s0LxvGMytRoEqt29QdySsqV04pAbvDPsLY22%2BmYBYlo84%2Bjnh3xZ%2B7F1XDb5YDU4sL1M3ypDbSL93p4bFf0IRQHJhEiR9Bev%2B%2FMB1lm0Lszg0j0NDFIGwxyb6TFawLI68ujzqdHyPcfs%2F3LoDhj%2Bh6tjC2qdevVfF2hSC1PoOEsTKFKJYjLGi9ANMNHe6L4GOqUBk2WsoJeOnhaAaoDVjUuIL6QLCTLamZD9LaXdthNi9fbdoUX4hLWJ5mC%2FgOKHv1RFMP2Js7SFnmMm6qynOSRYXdpYQJkWX6iHA7m5CbtXCWU0LC3nHZtaDcxXT19m5B0GKtY5BRIeDyt%2BNdH1%2F9VPMQgZXq0UoURqzuK%2FiD%2Bva89sdC%2FFIPfeZJF8HJXU5tpeH86gi1dYHXYtARUy9tejYuc4w4ov&X-Amz-Signature=cbce47a224653f1756d00a00ca112208ed705ae4a9057838772b08afcf69ffb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDXVLOC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH1Nq%2B%2Fw5UXXrP5GR7lPT3RWlU4H%2BuYJ6RkevsvHjiVUAiEAjJ5Aq4qB9ehkNHrwh4e5UUKF5oOlB4KSPus0ArqfCvMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOFppOv%2BNfsC5lrEMircA%2BDirokL9vWAk1FEPlMo3feXqCuogYkY8Z2gRbHA5BucEdYVMG1hPXp0jXQ7D4ySUCP%2BjA%2B%2BIz82Zj%2FWf92JKT61eXbPb41GUKptCypz1imONmQS6M%2BbFiR%2FStuCCgSPW0Vm94ArGyXHIkvtivDvQfUxvfLJfELfZ8YuN0m1PYQUyo3wyMdPAmISY%2BJW5%2BYoJ%2B7%2BRrjqHmOATMZa5jldnk3tsbZF6pqJzEPzbaCxCLj0n0Zq14bbbSaosIwcJUqBjy9ZK3XwSd8i6xfBaLt03sdpEjnNTtt6R4bgvfFlVeiZ8DBFC35%2B6OB8fyIjPa3aa7AXrl3DaD8OLvEUrAC1MTf1fz74LBaRb%2B%2Bb6x5nlwMcjXiOoxHhmZWQjui0ZsKuP7yIqPiv5MSs8HMlmqSGeOU2iYKhokiaoKLAffVN2vlekVfNU1cBpv4eECdo8vL%2Fobs7s0LxvGMytRoEqt29QdySsqV04pAbvDPsLY22%2BmYBYlo84%2Bjnh3xZ%2B7F1XDb5YDU4sL1M3ypDbSL93p4bFf0IRQHJhEiR9Bev%2B%2FMB1lm0Lszg0j0NDFIGwxyb6TFawLI68ujzqdHyPcfs%2F3LoDhj%2Bh6tjC2qdevVfF2hSC1PoOEsTKFKJYjLGi9ANMNHe6L4GOqUBk2WsoJeOnhaAaoDVjUuIL6QLCTLamZD9LaXdthNi9fbdoUX4hLWJ5mC%2FgOKHv1RFMP2Js7SFnmMm6qynOSRYXdpYQJkWX6iHA7m5CbtXCWU0LC3nHZtaDcxXT19m5B0GKtY5BRIeDyt%2BNdH1%2F9VPMQgZXq0UoURqzuK%2FiD%2Bva89sdC%2FFIPfeZJF8HJXU5tpeH86gi1dYHXYtARUy9tejYuc4w4ov&X-Amz-Signature=d1830d857c8b53b8f96ffb6bf9ddddf1bac00ca06ad20136288843bf167f4edc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDXVLOC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH1Nq%2B%2Fw5UXXrP5GR7lPT3RWlU4H%2BuYJ6RkevsvHjiVUAiEAjJ5Aq4qB9ehkNHrwh4e5UUKF5oOlB4KSPus0ArqfCvMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOFppOv%2BNfsC5lrEMircA%2BDirokL9vWAk1FEPlMo3feXqCuogYkY8Z2gRbHA5BucEdYVMG1hPXp0jXQ7D4ySUCP%2BjA%2B%2BIz82Zj%2FWf92JKT61eXbPb41GUKptCypz1imONmQS6M%2BbFiR%2FStuCCgSPW0Vm94ArGyXHIkvtivDvQfUxvfLJfELfZ8YuN0m1PYQUyo3wyMdPAmISY%2BJW5%2BYoJ%2B7%2BRrjqHmOATMZa5jldnk3tsbZF6pqJzEPzbaCxCLj0n0Zq14bbbSaosIwcJUqBjy9ZK3XwSd8i6xfBaLt03sdpEjnNTtt6R4bgvfFlVeiZ8DBFC35%2B6OB8fyIjPa3aa7AXrl3DaD8OLvEUrAC1MTf1fz74LBaRb%2B%2Bb6x5nlwMcjXiOoxHhmZWQjui0ZsKuP7yIqPiv5MSs8HMlmqSGeOU2iYKhokiaoKLAffVN2vlekVfNU1cBpv4eECdo8vL%2Fobs7s0LxvGMytRoEqt29QdySsqV04pAbvDPsLY22%2BmYBYlo84%2Bjnh3xZ%2B7F1XDb5YDU4sL1M3ypDbSL93p4bFf0IRQHJhEiR9Bev%2B%2FMB1lm0Lszg0j0NDFIGwxyb6TFawLI68ujzqdHyPcfs%2F3LoDhj%2Bh6tjC2qdevVfF2hSC1PoOEsTKFKJYjLGi9ANMNHe6L4GOqUBk2WsoJeOnhaAaoDVjUuIL6QLCTLamZD9LaXdthNi9fbdoUX4hLWJ5mC%2FgOKHv1RFMP2Js7SFnmMm6qynOSRYXdpYQJkWX6iHA7m5CbtXCWU0LC3nHZtaDcxXT19m5B0GKtY5BRIeDyt%2BNdH1%2F9VPMQgZXq0UoURqzuK%2FiD%2Bva89sdC%2FFIPfeZJF8HJXU5tpeH86gi1dYHXYtARUy9tejYuc4w4ov&X-Amz-Signature=9844ecc3681914835e9e9566bdf3a57917c9f6cd593155064062953af341c43a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDXVLOC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIH1Nq%2B%2Fw5UXXrP5GR7lPT3RWlU4H%2BuYJ6RkevsvHjiVUAiEAjJ5Aq4qB9ehkNHrwh4e5UUKF5oOlB4KSPus0ArqfCvMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOFppOv%2BNfsC5lrEMircA%2BDirokL9vWAk1FEPlMo3feXqCuogYkY8Z2gRbHA5BucEdYVMG1hPXp0jXQ7D4ySUCP%2BjA%2B%2BIz82Zj%2FWf92JKT61eXbPb41GUKptCypz1imONmQS6M%2BbFiR%2FStuCCgSPW0Vm94ArGyXHIkvtivDvQfUxvfLJfELfZ8YuN0m1PYQUyo3wyMdPAmISY%2BJW5%2BYoJ%2B7%2BRrjqHmOATMZa5jldnk3tsbZF6pqJzEPzbaCxCLj0n0Zq14bbbSaosIwcJUqBjy9ZK3XwSd8i6xfBaLt03sdpEjnNTtt6R4bgvfFlVeiZ8DBFC35%2B6OB8fyIjPa3aa7AXrl3DaD8OLvEUrAC1MTf1fz74LBaRb%2B%2Bb6x5nlwMcjXiOoxHhmZWQjui0ZsKuP7yIqPiv5MSs8HMlmqSGeOU2iYKhokiaoKLAffVN2vlekVfNU1cBpv4eECdo8vL%2Fobs7s0LxvGMytRoEqt29QdySsqV04pAbvDPsLY22%2BmYBYlo84%2Bjnh3xZ%2B7F1XDb5YDU4sL1M3ypDbSL93p4bFf0IRQHJhEiR9Bev%2B%2FMB1lm0Lszg0j0NDFIGwxyb6TFawLI68ujzqdHyPcfs%2F3LoDhj%2Bh6tjC2qdevVfF2hSC1PoOEsTKFKJYjLGi9ANMNHe6L4GOqUBk2WsoJeOnhaAaoDVjUuIL6QLCTLamZD9LaXdthNi9fbdoUX4hLWJ5mC%2FgOKHv1RFMP2Js7SFnmMm6qynOSRYXdpYQJkWX6iHA7m5CbtXCWU0LC3nHZtaDcxXT19m5B0GKtY5BRIeDyt%2BNdH1%2F9VPMQgZXq0UoURqzuK%2FiD%2Bva89sdC%2FFIPfeZJF8HJXU5tpeH86gi1dYHXYtARUy9tejYuc4w4ov&X-Amz-Signature=70fad25ef7ec354f901657bde0ae895afed3aa78d61408245d15459cc57295b2&X-Amz-SignedHeaders=host&x-id=GetObject)
