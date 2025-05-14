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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFD34DQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCses%2FyZze6prfgSRKFuaHBQmO7ead4rxaL1JSijK3JfgIhAPnPcoxIwnpblYGnxveoDLs9sN9LrFIZpP%2FfoDJypBzTKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FUkaxWny1E86b3Iq3ANRFNjPp1gfZalDdb08%2FOSqb8pjZUSflm3qtiqrY9rXf58RDcwccaGm7GB%2FSgrNFkfPKCfE7iYmLIgWmcx5RKMizzOaKD%2Bo1Ubg9zjsbLuBUVASZrdz%2BAnVsPEutTy%2Fu7O2grPZtiOCbDs3YoKblkPG84MMVbzDaPj6FYDvmkhHzy7anxeHHCpRdiMfb69E7U%2F0dF%2FlvcoCrkn2fSZhS6lMLMh6ZZXM%2FrJmZUvTaL7G2qXbaWnjVTP%2F18rKvj7WXCR0ZjrUkBRMfecsYtCz9DK33XRlAMRPbqv12BYn62bnDO%2FzBvCMbPM739OwKHI4ISgDRAq29fAu%2F6Hsw%2BfETtkBiSoZgC1JHvKfwlSyqHnmZM7Bo86NNPwynH8Y7IcQh9B5zTghkNIqXkupYlziOfjlR0xaBHNeu8gNIXqAsl0QLkzMmuUH9Mf%2BEIae5IdJqSVqdBf1nf55CFVEPYzX82%2Fd0%2FcXyagi9fJdnL7vzMwQCvCRS0c4PrPKqJmXxktMpejVAGX4SLjNSb7kDDWZtSgH1rFxH7lg1tB0VZy76mfunN4fY4uxfkGaZjEAGka2ttp0LS4kn6o7eciHQU%2FRThep%2BXMTPjegUpnWzpCq6A%2Fui628AuCZMYKM3JO3ADCWoZDBBjqkAaFXm4z4HvDzGaBmwce%2Fc2Zor75ISy%2BqOKCZPTCoMmu4YCBOVzmpwo8S8uEN14cCWx%2BtNbGkpR4Z5ZLkedYxYhWf8Mojqjdg0rsVWtcUdbgF94L0n0jyrEU2uUs38ouxLAuZCll3Oa5mhCv6DzyIqrc6ZeRK22n%2Bx%2FHhYlWzIU%2BUU%2FRG2%2F9zUmNJZavmaMPm2gvfFhOzuatANhFpZyxgrxrSDn5I&X-Amz-Signature=85cf922d4eb95be6bfb545debfbe02b178ccf43d7bdaaa8c370a48277d7a0658&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFD34DQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCses%2FyZze6prfgSRKFuaHBQmO7ead4rxaL1JSijK3JfgIhAPnPcoxIwnpblYGnxveoDLs9sN9LrFIZpP%2FfoDJypBzTKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FUkaxWny1E86b3Iq3ANRFNjPp1gfZalDdb08%2FOSqb8pjZUSflm3qtiqrY9rXf58RDcwccaGm7GB%2FSgrNFkfPKCfE7iYmLIgWmcx5RKMizzOaKD%2Bo1Ubg9zjsbLuBUVASZrdz%2BAnVsPEutTy%2Fu7O2grPZtiOCbDs3YoKblkPG84MMVbzDaPj6FYDvmkhHzy7anxeHHCpRdiMfb69E7U%2F0dF%2FlvcoCrkn2fSZhS6lMLMh6ZZXM%2FrJmZUvTaL7G2qXbaWnjVTP%2F18rKvj7WXCR0ZjrUkBRMfecsYtCz9DK33XRlAMRPbqv12BYn62bnDO%2FzBvCMbPM739OwKHI4ISgDRAq29fAu%2F6Hsw%2BfETtkBiSoZgC1JHvKfwlSyqHnmZM7Bo86NNPwynH8Y7IcQh9B5zTghkNIqXkupYlziOfjlR0xaBHNeu8gNIXqAsl0QLkzMmuUH9Mf%2BEIae5IdJqSVqdBf1nf55CFVEPYzX82%2Fd0%2FcXyagi9fJdnL7vzMwQCvCRS0c4PrPKqJmXxktMpejVAGX4SLjNSb7kDDWZtSgH1rFxH7lg1tB0VZy76mfunN4fY4uxfkGaZjEAGka2ttp0LS4kn6o7eciHQU%2FRThep%2BXMTPjegUpnWzpCq6A%2Fui628AuCZMYKM3JO3ADCWoZDBBjqkAaFXm4z4HvDzGaBmwce%2Fc2Zor75ISy%2BqOKCZPTCoMmu4YCBOVzmpwo8S8uEN14cCWx%2BtNbGkpR4Z5ZLkedYxYhWf8Mojqjdg0rsVWtcUdbgF94L0n0jyrEU2uUs38ouxLAuZCll3Oa5mhCv6DzyIqrc6ZeRK22n%2Bx%2FHhYlWzIU%2BUU%2FRG2%2F9zUmNJZavmaMPm2gvfFhOzuatANhFpZyxgrxrSDn5I&X-Amz-Signature=60811b3acd4665f6dddd3e8bbdf42c2e98e3b430c9427a9768a7c38049970c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFD34DQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCses%2FyZze6prfgSRKFuaHBQmO7ead4rxaL1JSijK3JfgIhAPnPcoxIwnpblYGnxveoDLs9sN9LrFIZpP%2FfoDJypBzTKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FUkaxWny1E86b3Iq3ANRFNjPp1gfZalDdb08%2FOSqb8pjZUSflm3qtiqrY9rXf58RDcwccaGm7GB%2FSgrNFkfPKCfE7iYmLIgWmcx5RKMizzOaKD%2Bo1Ubg9zjsbLuBUVASZrdz%2BAnVsPEutTy%2Fu7O2grPZtiOCbDs3YoKblkPG84MMVbzDaPj6FYDvmkhHzy7anxeHHCpRdiMfb69E7U%2F0dF%2FlvcoCrkn2fSZhS6lMLMh6ZZXM%2FrJmZUvTaL7G2qXbaWnjVTP%2F18rKvj7WXCR0ZjrUkBRMfecsYtCz9DK33XRlAMRPbqv12BYn62bnDO%2FzBvCMbPM739OwKHI4ISgDRAq29fAu%2F6Hsw%2BfETtkBiSoZgC1JHvKfwlSyqHnmZM7Bo86NNPwynH8Y7IcQh9B5zTghkNIqXkupYlziOfjlR0xaBHNeu8gNIXqAsl0QLkzMmuUH9Mf%2BEIae5IdJqSVqdBf1nf55CFVEPYzX82%2Fd0%2FcXyagi9fJdnL7vzMwQCvCRS0c4PrPKqJmXxktMpejVAGX4SLjNSb7kDDWZtSgH1rFxH7lg1tB0VZy76mfunN4fY4uxfkGaZjEAGka2ttp0LS4kn6o7eciHQU%2FRThep%2BXMTPjegUpnWzpCq6A%2Fui628AuCZMYKM3JO3ADCWoZDBBjqkAaFXm4z4HvDzGaBmwce%2Fc2Zor75ISy%2BqOKCZPTCoMmu4YCBOVzmpwo8S8uEN14cCWx%2BtNbGkpR4Z5ZLkedYxYhWf8Mojqjdg0rsVWtcUdbgF94L0n0jyrEU2uUs38ouxLAuZCll3Oa5mhCv6DzyIqrc6ZeRK22n%2Bx%2FHhYlWzIU%2BUU%2FRG2%2F9zUmNJZavmaMPm2gvfFhOzuatANhFpZyxgrxrSDn5I&X-Amz-Signature=78580bd16595a8cebef37f1ea91c42e81e9eb6345e77934d78232170d40bd799&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFD34DQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCses%2FyZze6prfgSRKFuaHBQmO7ead4rxaL1JSijK3JfgIhAPnPcoxIwnpblYGnxveoDLs9sN9LrFIZpP%2FfoDJypBzTKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FUkaxWny1E86b3Iq3ANRFNjPp1gfZalDdb08%2FOSqb8pjZUSflm3qtiqrY9rXf58RDcwccaGm7GB%2FSgrNFkfPKCfE7iYmLIgWmcx5RKMizzOaKD%2Bo1Ubg9zjsbLuBUVASZrdz%2BAnVsPEutTy%2Fu7O2grPZtiOCbDs3YoKblkPG84MMVbzDaPj6FYDvmkhHzy7anxeHHCpRdiMfb69E7U%2F0dF%2FlvcoCrkn2fSZhS6lMLMh6ZZXM%2FrJmZUvTaL7G2qXbaWnjVTP%2F18rKvj7WXCR0ZjrUkBRMfecsYtCz9DK33XRlAMRPbqv12BYn62bnDO%2FzBvCMbPM739OwKHI4ISgDRAq29fAu%2F6Hsw%2BfETtkBiSoZgC1JHvKfwlSyqHnmZM7Bo86NNPwynH8Y7IcQh9B5zTghkNIqXkupYlziOfjlR0xaBHNeu8gNIXqAsl0QLkzMmuUH9Mf%2BEIae5IdJqSVqdBf1nf55CFVEPYzX82%2Fd0%2FcXyagi9fJdnL7vzMwQCvCRS0c4PrPKqJmXxktMpejVAGX4SLjNSb7kDDWZtSgH1rFxH7lg1tB0VZy76mfunN4fY4uxfkGaZjEAGka2ttp0LS4kn6o7eciHQU%2FRThep%2BXMTPjegUpnWzpCq6A%2Fui628AuCZMYKM3JO3ADCWoZDBBjqkAaFXm4z4HvDzGaBmwce%2Fc2Zor75ISy%2BqOKCZPTCoMmu4YCBOVzmpwo8S8uEN14cCWx%2BtNbGkpR4Z5ZLkedYxYhWf8Mojqjdg0rsVWtcUdbgF94L0n0jyrEU2uUs38ouxLAuZCll3Oa5mhCv6DzyIqrc6ZeRK22n%2Bx%2FHhYlWzIU%2BUU%2FRG2%2F9zUmNJZavmaMPm2gvfFhOzuatANhFpZyxgrxrSDn5I&X-Amz-Signature=0ea94089b38c8eab29607519303dd94e259869f642f2cd3a3caf51d7d7d772d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFD34DQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCses%2FyZze6prfgSRKFuaHBQmO7ead4rxaL1JSijK3JfgIhAPnPcoxIwnpblYGnxveoDLs9sN9LrFIZpP%2FfoDJypBzTKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FUkaxWny1E86b3Iq3ANRFNjPp1gfZalDdb08%2FOSqb8pjZUSflm3qtiqrY9rXf58RDcwccaGm7GB%2FSgrNFkfPKCfE7iYmLIgWmcx5RKMizzOaKD%2Bo1Ubg9zjsbLuBUVASZrdz%2BAnVsPEutTy%2Fu7O2grPZtiOCbDs3YoKblkPG84MMVbzDaPj6FYDvmkhHzy7anxeHHCpRdiMfb69E7U%2F0dF%2FlvcoCrkn2fSZhS6lMLMh6ZZXM%2FrJmZUvTaL7G2qXbaWnjVTP%2F18rKvj7WXCR0ZjrUkBRMfecsYtCz9DK33XRlAMRPbqv12BYn62bnDO%2FzBvCMbPM739OwKHI4ISgDRAq29fAu%2F6Hsw%2BfETtkBiSoZgC1JHvKfwlSyqHnmZM7Bo86NNPwynH8Y7IcQh9B5zTghkNIqXkupYlziOfjlR0xaBHNeu8gNIXqAsl0QLkzMmuUH9Mf%2BEIae5IdJqSVqdBf1nf55CFVEPYzX82%2Fd0%2FcXyagi9fJdnL7vzMwQCvCRS0c4PrPKqJmXxktMpejVAGX4SLjNSb7kDDWZtSgH1rFxH7lg1tB0VZy76mfunN4fY4uxfkGaZjEAGka2ttp0LS4kn6o7eciHQU%2FRThep%2BXMTPjegUpnWzpCq6A%2Fui628AuCZMYKM3JO3ADCWoZDBBjqkAaFXm4z4HvDzGaBmwce%2Fc2Zor75ISy%2BqOKCZPTCoMmu4YCBOVzmpwo8S8uEN14cCWx%2BtNbGkpR4Z5ZLkedYxYhWf8Mojqjdg0rsVWtcUdbgF94L0n0jyrEU2uUs38ouxLAuZCll3Oa5mhCv6DzyIqrc6ZeRK22n%2Bx%2FHhYlWzIU%2BUU%2FRG2%2F9zUmNJZavmaMPm2gvfFhOzuatANhFpZyxgrxrSDn5I&X-Amz-Signature=2b332145f01a1bbd33990b6fd9db6238e494337d972a246be204631005917b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFD34DQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCses%2FyZze6prfgSRKFuaHBQmO7ead4rxaL1JSijK3JfgIhAPnPcoxIwnpblYGnxveoDLs9sN9LrFIZpP%2FfoDJypBzTKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FUkaxWny1E86b3Iq3ANRFNjPp1gfZalDdb08%2FOSqb8pjZUSflm3qtiqrY9rXf58RDcwccaGm7GB%2FSgrNFkfPKCfE7iYmLIgWmcx5RKMizzOaKD%2Bo1Ubg9zjsbLuBUVASZrdz%2BAnVsPEutTy%2Fu7O2grPZtiOCbDs3YoKblkPG84MMVbzDaPj6FYDvmkhHzy7anxeHHCpRdiMfb69E7U%2F0dF%2FlvcoCrkn2fSZhS6lMLMh6ZZXM%2FrJmZUvTaL7G2qXbaWnjVTP%2F18rKvj7WXCR0ZjrUkBRMfecsYtCz9DK33XRlAMRPbqv12BYn62bnDO%2FzBvCMbPM739OwKHI4ISgDRAq29fAu%2F6Hsw%2BfETtkBiSoZgC1JHvKfwlSyqHnmZM7Bo86NNPwynH8Y7IcQh9B5zTghkNIqXkupYlziOfjlR0xaBHNeu8gNIXqAsl0QLkzMmuUH9Mf%2BEIae5IdJqSVqdBf1nf55CFVEPYzX82%2Fd0%2FcXyagi9fJdnL7vzMwQCvCRS0c4PrPKqJmXxktMpejVAGX4SLjNSb7kDDWZtSgH1rFxH7lg1tB0VZy76mfunN4fY4uxfkGaZjEAGka2ttp0LS4kn6o7eciHQU%2FRThep%2BXMTPjegUpnWzpCq6A%2Fui628AuCZMYKM3JO3ADCWoZDBBjqkAaFXm4z4HvDzGaBmwce%2Fc2Zor75ISy%2BqOKCZPTCoMmu4YCBOVzmpwo8S8uEN14cCWx%2BtNbGkpR4Z5ZLkedYxYhWf8Mojqjdg0rsVWtcUdbgF94L0n0jyrEU2uUs38ouxLAuZCll3Oa5mhCv6DzyIqrc6ZeRK22n%2Bx%2FHhYlWzIU%2BUU%2FRG2%2F9zUmNJZavmaMPm2gvfFhOzuatANhFpZyxgrxrSDn5I&X-Amz-Signature=844f46dcd5355e36ca594b0307e0da758a3a1854b957a135ab65f98389888e8b&X-Amz-SignedHeaders=host&x-id=GetObject)
