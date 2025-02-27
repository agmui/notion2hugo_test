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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBU5GO7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBILocgzXZ79bfvfztfC3AvbUoX2zP6KfkociHCrfc7qAiBzCAu6t4ozxQPEOeWSgWzJ1xjaE4Y8iAybhCPyWD3CHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMa9WHvuaqR9ovSQFjKtwDmx%2FpKNwyHtyIDiblRU8RM%2BP0JIgj%2Be%2BLBwXZ7qM1rK%2BVRYC%2BUpY4K9ik8fjROomhbRkqt1WcJ7yz1SIz5pPn6XzSuaRA3aDVDQofcV6QQo5P9OT6o7Ptoywmn8oZHhfXbpvfzrm9UHL9au8Lg0Q13e2G%2BnZa02ev4WSJVvqHJaU%2B3V1FGZTooD7XeMsBm03RL3Bs3jo4XibwjG%2B8Dd9oq5baIpmLlqsOeUbC7luIFCiZOYugZBiO%2FkzvOLgE6B8ojcE61Uig88ZzsSS2xD2%2Ba%2BfIKcmPIOtg0ufO2rzmLbIq2%2BI%2Bz0JAz70PmrcHqpGSCVXMNwB8iK1EkqVERVxjW9tmmaZ%2B1JTJ%2BoEfgv9hKDF2ja7h0jlMVez50lBqaRAtpd2yUhfm9NfOojliZgv6kr4hGZV6%2BBWYuxrPGdT%2BG42XwsWZnfNVZVXrTI0EVAm%2FL7cVvxEsNSFeyZLEpCjbTNtZx%2BSj7vZy5f9%2B3oh5LQswRNiD1CVz%2BfA8cAxylC9O2rQRa0QY0Qz9QoInMYhCTDIqjWc6zkvOCyiuWxPblINswVSak5TI09HQFc1t4lQIDxkrXRAbGGbgMilozZCYuqbmFiqHrKhtWzjtxF%2BylDoTlLLM6YlIrsf2H0kwkPb%2BvQY6pgGkKx9ZXlYKUqaOy5g02%2FpNjC0udFFYINjkIfSd6dJkSUyGPJfvraI%2Fubu7stBPApymxAKj6dCqB81VMAX8rjrt%2F02Mhbt8%2Ba%2Bh56Rg07lZ70yP%2BmAS1JTP2XmukiUl3we8H%2Fd0GCQRCeInGaOSwARKVtpyRFpfEbtUP3fib%2B0%2FlgoTIyphmbJetZNW5%2F%2Fof1AybxUSWfMSCZo2NG7%2B%2Bin5FgkRq9vF&X-Amz-Signature=ae84830d48b834369ec95db73abb0a04b7a3b6610a8dfb621e5ebbcc88903f74&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBU5GO7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBILocgzXZ79bfvfztfC3AvbUoX2zP6KfkociHCrfc7qAiBzCAu6t4ozxQPEOeWSgWzJ1xjaE4Y8iAybhCPyWD3CHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMa9WHvuaqR9ovSQFjKtwDmx%2FpKNwyHtyIDiblRU8RM%2BP0JIgj%2Be%2BLBwXZ7qM1rK%2BVRYC%2BUpY4K9ik8fjROomhbRkqt1WcJ7yz1SIz5pPn6XzSuaRA3aDVDQofcV6QQo5P9OT6o7Ptoywmn8oZHhfXbpvfzrm9UHL9au8Lg0Q13e2G%2BnZa02ev4WSJVvqHJaU%2B3V1FGZTooD7XeMsBm03RL3Bs3jo4XibwjG%2B8Dd9oq5baIpmLlqsOeUbC7luIFCiZOYugZBiO%2FkzvOLgE6B8ojcE61Uig88ZzsSS2xD2%2Ba%2BfIKcmPIOtg0ufO2rzmLbIq2%2BI%2Bz0JAz70PmrcHqpGSCVXMNwB8iK1EkqVERVxjW9tmmaZ%2B1JTJ%2BoEfgv9hKDF2ja7h0jlMVez50lBqaRAtpd2yUhfm9NfOojliZgv6kr4hGZV6%2BBWYuxrPGdT%2BG42XwsWZnfNVZVXrTI0EVAm%2FL7cVvxEsNSFeyZLEpCjbTNtZx%2BSj7vZy5f9%2B3oh5LQswRNiD1CVz%2BfA8cAxylC9O2rQRa0QY0Qz9QoInMYhCTDIqjWc6zkvOCyiuWxPblINswVSak5TI09HQFc1t4lQIDxkrXRAbGGbgMilozZCYuqbmFiqHrKhtWzjtxF%2BylDoTlLLM6YlIrsf2H0kwkPb%2BvQY6pgGkKx9ZXlYKUqaOy5g02%2FpNjC0udFFYINjkIfSd6dJkSUyGPJfvraI%2Fubu7stBPApymxAKj6dCqB81VMAX8rjrt%2F02Mhbt8%2Ba%2Bh56Rg07lZ70yP%2BmAS1JTP2XmukiUl3we8H%2Fd0GCQRCeInGaOSwARKVtpyRFpfEbtUP3fib%2B0%2FlgoTIyphmbJetZNW5%2F%2Fof1AybxUSWfMSCZo2NG7%2B%2Bin5FgkRq9vF&X-Amz-Signature=b55b0f1ccd31916b495dbfb8bf143682d662af38583126cc3a3228b929851994&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBU5GO7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBILocgzXZ79bfvfztfC3AvbUoX2zP6KfkociHCrfc7qAiBzCAu6t4ozxQPEOeWSgWzJ1xjaE4Y8iAybhCPyWD3CHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMa9WHvuaqR9ovSQFjKtwDmx%2FpKNwyHtyIDiblRU8RM%2BP0JIgj%2Be%2BLBwXZ7qM1rK%2BVRYC%2BUpY4K9ik8fjROomhbRkqt1WcJ7yz1SIz5pPn6XzSuaRA3aDVDQofcV6QQo5P9OT6o7Ptoywmn8oZHhfXbpvfzrm9UHL9au8Lg0Q13e2G%2BnZa02ev4WSJVvqHJaU%2B3V1FGZTooD7XeMsBm03RL3Bs3jo4XibwjG%2B8Dd9oq5baIpmLlqsOeUbC7luIFCiZOYugZBiO%2FkzvOLgE6B8ojcE61Uig88ZzsSS2xD2%2Ba%2BfIKcmPIOtg0ufO2rzmLbIq2%2BI%2Bz0JAz70PmrcHqpGSCVXMNwB8iK1EkqVERVxjW9tmmaZ%2B1JTJ%2BoEfgv9hKDF2ja7h0jlMVez50lBqaRAtpd2yUhfm9NfOojliZgv6kr4hGZV6%2BBWYuxrPGdT%2BG42XwsWZnfNVZVXrTI0EVAm%2FL7cVvxEsNSFeyZLEpCjbTNtZx%2BSj7vZy5f9%2B3oh5LQswRNiD1CVz%2BfA8cAxylC9O2rQRa0QY0Qz9QoInMYhCTDIqjWc6zkvOCyiuWxPblINswVSak5TI09HQFc1t4lQIDxkrXRAbGGbgMilozZCYuqbmFiqHrKhtWzjtxF%2BylDoTlLLM6YlIrsf2H0kwkPb%2BvQY6pgGkKx9ZXlYKUqaOy5g02%2FpNjC0udFFYINjkIfSd6dJkSUyGPJfvraI%2Fubu7stBPApymxAKj6dCqB81VMAX8rjrt%2F02Mhbt8%2Ba%2Bh56Rg07lZ70yP%2BmAS1JTP2XmukiUl3we8H%2Fd0GCQRCeInGaOSwARKVtpyRFpfEbtUP3fib%2B0%2FlgoTIyphmbJetZNW5%2F%2Fof1AybxUSWfMSCZo2NG7%2B%2Bin5FgkRq9vF&X-Amz-Signature=63f55c48d088f64d10fba1d03fcbe0649a6fbcc608aa6312b2775363f8c1b2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBU5GO7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBILocgzXZ79bfvfztfC3AvbUoX2zP6KfkociHCrfc7qAiBzCAu6t4ozxQPEOeWSgWzJ1xjaE4Y8iAybhCPyWD3CHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMa9WHvuaqR9ovSQFjKtwDmx%2FpKNwyHtyIDiblRU8RM%2BP0JIgj%2Be%2BLBwXZ7qM1rK%2BVRYC%2BUpY4K9ik8fjROomhbRkqt1WcJ7yz1SIz5pPn6XzSuaRA3aDVDQofcV6QQo5P9OT6o7Ptoywmn8oZHhfXbpvfzrm9UHL9au8Lg0Q13e2G%2BnZa02ev4WSJVvqHJaU%2B3V1FGZTooD7XeMsBm03RL3Bs3jo4XibwjG%2B8Dd9oq5baIpmLlqsOeUbC7luIFCiZOYugZBiO%2FkzvOLgE6B8ojcE61Uig88ZzsSS2xD2%2Ba%2BfIKcmPIOtg0ufO2rzmLbIq2%2BI%2Bz0JAz70PmrcHqpGSCVXMNwB8iK1EkqVERVxjW9tmmaZ%2B1JTJ%2BoEfgv9hKDF2ja7h0jlMVez50lBqaRAtpd2yUhfm9NfOojliZgv6kr4hGZV6%2BBWYuxrPGdT%2BG42XwsWZnfNVZVXrTI0EVAm%2FL7cVvxEsNSFeyZLEpCjbTNtZx%2BSj7vZy5f9%2B3oh5LQswRNiD1CVz%2BfA8cAxylC9O2rQRa0QY0Qz9QoInMYhCTDIqjWc6zkvOCyiuWxPblINswVSak5TI09HQFc1t4lQIDxkrXRAbGGbgMilozZCYuqbmFiqHrKhtWzjtxF%2BylDoTlLLM6YlIrsf2H0kwkPb%2BvQY6pgGkKx9ZXlYKUqaOy5g02%2FpNjC0udFFYINjkIfSd6dJkSUyGPJfvraI%2Fubu7stBPApymxAKj6dCqB81VMAX8rjrt%2F02Mhbt8%2Ba%2Bh56Rg07lZ70yP%2BmAS1JTP2XmukiUl3we8H%2Fd0GCQRCeInGaOSwARKVtpyRFpfEbtUP3fib%2B0%2FlgoTIyphmbJetZNW5%2F%2Fof1AybxUSWfMSCZo2NG7%2B%2Bin5FgkRq9vF&X-Amz-Signature=c35a641edaa06cb5a8b8cabc054e078331be23bffa1668593b9ce33428d79cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBU5GO7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBILocgzXZ79bfvfztfC3AvbUoX2zP6KfkociHCrfc7qAiBzCAu6t4ozxQPEOeWSgWzJ1xjaE4Y8iAybhCPyWD3CHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMa9WHvuaqR9ovSQFjKtwDmx%2FpKNwyHtyIDiblRU8RM%2BP0JIgj%2Be%2BLBwXZ7qM1rK%2BVRYC%2BUpY4K9ik8fjROomhbRkqt1WcJ7yz1SIz5pPn6XzSuaRA3aDVDQofcV6QQo5P9OT6o7Ptoywmn8oZHhfXbpvfzrm9UHL9au8Lg0Q13e2G%2BnZa02ev4WSJVvqHJaU%2B3V1FGZTooD7XeMsBm03RL3Bs3jo4XibwjG%2B8Dd9oq5baIpmLlqsOeUbC7luIFCiZOYugZBiO%2FkzvOLgE6B8ojcE61Uig88ZzsSS2xD2%2Ba%2BfIKcmPIOtg0ufO2rzmLbIq2%2BI%2Bz0JAz70PmrcHqpGSCVXMNwB8iK1EkqVERVxjW9tmmaZ%2B1JTJ%2BoEfgv9hKDF2ja7h0jlMVez50lBqaRAtpd2yUhfm9NfOojliZgv6kr4hGZV6%2BBWYuxrPGdT%2BG42XwsWZnfNVZVXrTI0EVAm%2FL7cVvxEsNSFeyZLEpCjbTNtZx%2BSj7vZy5f9%2B3oh5LQswRNiD1CVz%2BfA8cAxylC9O2rQRa0QY0Qz9QoInMYhCTDIqjWc6zkvOCyiuWxPblINswVSak5TI09HQFc1t4lQIDxkrXRAbGGbgMilozZCYuqbmFiqHrKhtWzjtxF%2BylDoTlLLM6YlIrsf2H0kwkPb%2BvQY6pgGkKx9ZXlYKUqaOy5g02%2FpNjC0udFFYINjkIfSd6dJkSUyGPJfvraI%2Fubu7stBPApymxAKj6dCqB81VMAX8rjrt%2F02Mhbt8%2Ba%2Bh56Rg07lZ70yP%2BmAS1JTP2XmukiUl3we8H%2Fd0GCQRCeInGaOSwARKVtpyRFpfEbtUP3fib%2B0%2FlgoTIyphmbJetZNW5%2F%2Fof1AybxUSWfMSCZo2NG7%2B%2Bin5FgkRq9vF&X-Amz-Signature=e89681a24628e7e30beeb68b1b77cefc2f012c563caf508f054599fe01ad11da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBU5GO7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBILocgzXZ79bfvfztfC3AvbUoX2zP6KfkociHCrfc7qAiBzCAu6t4ozxQPEOeWSgWzJ1xjaE4Y8iAybhCPyWD3CHyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMa9WHvuaqR9ovSQFjKtwDmx%2FpKNwyHtyIDiblRU8RM%2BP0JIgj%2Be%2BLBwXZ7qM1rK%2BVRYC%2BUpY4K9ik8fjROomhbRkqt1WcJ7yz1SIz5pPn6XzSuaRA3aDVDQofcV6QQo5P9OT6o7Ptoywmn8oZHhfXbpvfzrm9UHL9au8Lg0Q13e2G%2BnZa02ev4WSJVvqHJaU%2B3V1FGZTooD7XeMsBm03RL3Bs3jo4XibwjG%2B8Dd9oq5baIpmLlqsOeUbC7luIFCiZOYugZBiO%2FkzvOLgE6B8ojcE61Uig88ZzsSS2xD2%2Ba%2BfIKcmPIOtg0ufO2rzmLbIq2%2BI%2Bz0JAz70PmrcHqpGSCVXMNwB8iK1EkqVERVxjW9tmmaZ%2B1JTJ%2BoEfgv9hKDF2ja7h0jlMVez50lBqaRAtpd2yUhfm9NfOojliZgv6kr4hGZV6%2BBWYuxrPGdT%2BG42XwsWZnfNVZVXrTI0EVAm%2FL7cVvxEsNSFeyZLEpCjbTNtZx%2BSj7vZy5f9%2B3oh5LQswRNiD1CVz%2BfA8cAxylC9O2rQRa0QY0Qz9QoInMYhCTDIqjWc6zkvOCyiuWxPblINswVSak5TI09HQFc1t4lQIDxkrXRAbGGbgMilozZCYuqbmFiqHrKhtWzjtxF%2BylDoTlLLM6YlIrsf2H0kwkPb%2BvQY6pgGkKx9ZXlYKUqaOy5g02%2FpNjC0udFFYINjkIfSd6dJkSUyGPJfvraI%2Fubu7stBPApymxAKj6dCqB81VMAX8rjrt%2F02Mhbt8%2Ba%2Bh56Rg07lZ70yP%2BmAS1JTP2XmukiUl3we8H%2Fd0GCQRCeInGaOSwARKVtpyRFpfEbtUP3fib%2B0%2FlgoTIyphmbJetZNW5%2F%2Fof1AybxUSWfMSCZo2NG7%2B%2Bin5FgkRq9vF&X-Amz-Signature=88ecc0effcb5186ccc2c188ea9de0b11e04ee86b3b0cdf47a0893c335d2e1f66&X-Amz-SignedHeaders=host&x-id=GetObject)
