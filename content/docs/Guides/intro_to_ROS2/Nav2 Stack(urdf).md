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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUTS4U4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCID3qgYhAEL4R18wU9zu5Px0%2BJ3wmZvYF1CmUlgmJ7D89AiB0WB%2F9MsQrHvxwKbulQnhMas%2FMPhqr1xeTBOa1jZmuKyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9VreQv0NAGJKuGb5KtwDby0kCzAPkHLFprqdvZ%2FfEolBhvYEe79bYHW0GHPI8pdV%2F%2Fdf1y5dfSAn5Gmin5kEexZpNMGQ4%2BPzEwMroHNyw3m9zULrXz0rYQYZHjN1Z5lFc90e7EzRSrc6nLLXcloc7FyYgqbNtWqV%2FIxYnAhEuLN3BT04pA7zO6WCm81u2OTM0k0jTPnsE6%2FV7%2BSEfwVHGTjtlBDosATE5f8huXscydHsmcuVc82%2B4%2Ftq4vhbxED0E2ZaUKCI0WNISE0yZn%2FUnoYBIdy5qDbhdPPatqfofDqodrirrQHU8NvMnvZktbd9g1O7tujg7nzyRS2utagg9Noe%2BLvtggQsjNn86kr6AGfRg%2BDXDvq7Pt%2B6BVyEYe1%2B12F9bxxpbVZJq%2BtmoxCblYSbUk3djgOtZpCqgN1FHCJL0VHcy%2Bjv%2BN6%2BADy1CPD3lKxofg50x%2FhBxuCRJQJP2tyJkBWDKjWmswcQovtvevUnluK4p5c8BU%2BkcuAHirGuPrW6qMiEmxHR0CICVMbB0OL65bPBn8aMmSMoqSirSq0zl8R9Ya5aW4yw9ATydEaBTr4pcCrHmV21e1wxyicVajVAzJ3ralVKeyd2iD9TwZcqgUJd0CbCLmT9M94TsGae%2B7bcdHNhRnx9xHQwlP%2B4wgY6pgG4QEkA%2BIQXx49U9sO983iGd12xvl2U2pjoPjWF1uAAT%2FAK3JjUBli8atMz%2BG%2BFlFBng6dVKwBc3KG1ew%2BCliUUOTBpxWx%2BmYDOCBZlQpBnH6NC3Z%2FIN9%2B6OrZ4KmHIZ0J1p8pgD2lPvFHmQHcQSB%2B7KNlrzlOZZVdFzZxkISh3F1D%2BVm%2BFVj7azupzZ7hUDsBGiv1qpPzbmXDMOfTMIDpjNrjcmq7A&X-Amz-Signature=1db53d254d92481b92ce5936533e04185808818a85661a56b7eb924fd3061b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUTS4U4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCID3qgYhAEL4R18wU9zu5Px0%2BJ3wmZvYF1CmUlgmJ7D89AiB0WB%2F9MsQrHvxwKbulQnhMas%2FMPhqr1xeTBOa1jZmuKyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9VreQv0NAGJKuGb5KtwDby0kCzAPkHLFprqdvZ%2FfEolBhvYEe79bYHW0GHPI8pdV%2F%2Fdf1y5dfSAn5Gmin5kEexZpNMGQ4%2BPzEwMroHNyw3m9zULrXz0rYQYZHjN1Z5lFc90e7EzRSrc6nLLXcloc7FyYgqbNtWqV%2FIxYnAhEuLN3BT04pA7zO6WCm81u2OTM0k0jTPnsE6%2FV7%2BSEfwVHGTjtlBDosATE5f8huXscydHsmcuVc82%2B4%2Ftq4vhbxED0E2ZaUKCI0WNISE0yZn%2FUnoYBIdy5qDbhdPPatqfofDqodrirrQHU8NvMnvZktbd9g1O7tujg7nzyRS2utagg9Noe%2BLvtggQsjNn86kr6AGfRg%2BDXDvq7Pt%2B6BVyEYe1%2B12F9bxxpbVZJq%2BtmoxCblYSbUk3djgOtZpCqgN1FHCJL0VHcy%2Bjv%2BN6%2BADy1CPD3lKxofg50x%2FhBxuCRJQJP2tyJkBWDKjWmswcQovtvevUnluK4p5c8BU%2BkcuAHirGuPrW6qMiEmxHR0CICVMbB0OL65bPBn8aMmSMoqSirSq0zl8R9Ya5aW4yw9ATydEaBTr4pcCrHmV21e1wxyicVajVAzJ3ralVKeyd2iD9TwZcqgUJd0CbCLmT9M94TsGae%2B7bcdHNhRnx9xHQwlP%2B4wgY6pgG4QEkA%2BIQXx49U9sO983iGd12xvl2U2pjoPjWF1uAAT%2FAK3JjUBli8atMz%2BG%2BFlFBng6dVKwBc3KG1ew%2BCliUUOTBpxWx%2BmYDOCBZlQpBnH6NC3Z%2FIN9%2B6OrZ4KmHIZ0J1p8pgD2lPvFHmQHcQSB%2B7KNlrzlOZZVdFzZxkISh3F1D%2BVm%2BFVj7azupzZ7hUDsBGiv1qpPzbmXDMOfTMIDpjNrjcmq7A&X-Amz-Signature=002282192775c9c684f68e0afd52a3cbfe8814d09a328299a2818a2bebaea7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUTS4U4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCID3qgYhAEL4R18wU9zu5Px0%2BJ3wmZvYF1CmUlgmJ7D89AiB0WB%2F9MsQrHvxwKbulQnhMas%2FMPhqr1xeTBOa1jZmuKyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9VreQv0NAGJKuGb5KtwDby0kCzAPkHLFprqdvZ%2FfEolBhvYEe79bYHW0GHPI8pdV%2F%2Fdf1y5dfSAn5Gmin5kEexZpNMGQ4%2BPzEwMroHNyw3m9zULrXz0rYQYZHjN1Z5lFc90e7EzRSrc6nLLXcloc7FyYgqbNtWqV%2FIxYnAhEuLN3BT04pA7zO6WCm81u2OTM0k0jTPnsE6%2FV7%2BSEfwVHGTjtlBDosATE5f8huXscydHsmcuVc82%2B4%2Ftq4vhbxED0E2ZaUKCI0WNISE0yZn%2FUnoYBIdy5qDbhdPPatqfofDqodrirrQHU8NvMnvZktbd9g1O7tujg7nzyRS2utagg9Noe%2BLvtggQsjNn86kr6AGfRg%2BDXDvq7Pt%2B6BVyEYe1%2B12F9bxxpbVZJq%2BtmoxCblYSbUk3djgOtZpCqgN1FHCJL0VHcy%2Bjv%2BN6%2BADy1CPD3lKxofg50x%2FhBxuCRJQJP2tyJkBWDKjWmswcQovtvevUnluK4p5c8BU%2BkcuAHirGuPrW6qMiEmxHR0CICVMbB0OL65bPBn8aMmSMoqSirSq0zl8R9Ya5aW4yw9ATydEaBTr4pcCrHmV21e1wxyicVajVAzJ3ralVKeyd2iD9TwZcqgUJd0CbCLmT9M94TsGae%2B7bcdHNhRnx9xHQwlP%2B4wgY6pgG4QEkA%2BIQXx49U9sO983iGd12xvl2U2pjoPjWF1uAAT%2FAK3JjUBli8atMz%2BG%2BFlFBng6dVKwBc3KG1ew%2BCliUUOTBpxWx%2BmYDOCBZlQpBnH6NC3Z%2FIN9%2B6OrZ4KmHIZ0J1p8pgD2lPvFHmQHcQSB%2B7KNlrzlOZZVdFzZxkISh3F1D%2BVm%2BFVj7azupzZ7hUDsBGiv1qpPzbmXDMOfTMIDpjNrjcmq7A&X-Amz-Signature=1b5650f04d7616026d2e523811b2eefc4d4007acdfa77f27c9fd5a83386dbb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUTS4U4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCID3qgYhAEL4R18wU9zu5Px0%2BJ3wmZvYF1CmUlgmJ7D89AiB0WB%2F9MsQrHvxwKbulQnhMas%2FMPhqr1xeTBOa1jZmuKyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9VreQv0NAGJKuGb5KtwDby0kCzAPkHLFprqdvZ%2FfEolBhvYEe79bYHW0GHPI8pdV%2F%2Fdf1y5dfSAn5Gmin5kEexZpNMGQ4%2BPzEwMroHNyw3m9zULrXz0rYQYZHjN1Z5lFc90e7EzRSrc6nLLXcloc7FyYgqbNtWqV%2FIxYnAhEuLN3BT04pA7zO6WCm81u2OTM0k0jTPnsE6%2FV7%2BSEfwVHGTjtlBDosATE5f8huXscydHsmcuVc82%2B4%2Ftq4vhbxED0E2ZaUKCI0WNISE0yZn%2FUnoYBIdy5qDbhdPPatqfofDqodrirrQHU8NvMnvZktbd9g1O7tujg7nzyRS2utagg9Noe%2BLvtggQsjNn86kr6AGfRg%2BDXDvq7Pt%2B6BVyEYe1%2B12F9bxxpbVZJq%2BtmoxCblYSbUk3djgOtZpCqgN1FHCJL0VHcy%2Bjv%2BN6%2BADy1CPD3lKxofg50x%2FhBxuCRJQJP2tyJkBWDKjWmswcQovtvevUnluK4p5c8BU%2BkcuAHirGuPrW6qMiEmxHR0CICVMbB0OL65bPBn8aMmSMoqSirSq0zl8R9Ya5aW4yw9ATydEaBTr4pcCrHmV21e1wxyicVajVAzJ3ralVKeyd2iD9TwZcqgUJd0CbCLmT9M94TsGae%2B7bcdHNhRnx9xHQwlP%2B4wgY6pgG4QEkA%2BIQXx49U9sO983iGd12xvl2U2pjoPjWF1uAAT%2FAK3JjUBli8atMz%2BG%2BFlFBng6dVKwBc3KG1ew%2BCliUUOTBpxWx%2BmYDOCBZlQpBnH6NC3Z%2FIN9%2B6OrZ4KmHIZ0J1p8pgD2lPvFHmQHcQSB%2B7KNlrzlOZZVdFzZxkISh3F1D%2BVm%2BFVj7azupzZ7hUDsBGiv1qpPzbmXDMOfTMIDpjNrjcmq7A&X-Amz-Signature=76db467765d2674021f21a652c7d9fa87b405486ea0c96dc2d7aea7839a3aa94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUTS4U4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCID3qgYhAEL4R18wU9zu5Px0%2BJ3wmZvYF1CmUlgmJ7D89AiB0WB%2F9MsQrHvxwKbulQnhMas%2FMPhqr1xeTBOa1jZmuKyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9VreQv0NAGJKuGb5KtwDby0kCzAPkHLFprqdvZ%2FfEolBhvYEe79bYHW0GHPI8pdV%2F%2Fdf1y5dfSAn5Gmin5kEexZpNMGQ4%2BPzEwMroHNyw3m9zULrXz0rYQYZHjN1Z5lFc90e7EzRSrc6nLLXcloc7FyYgqbNtWqV%2FIxYnAhEuLN3BT04pA7zO6WCm81u2OTM0k0jTPnsE6%2FV7%2BSEfwVHGTjtlBDosATE5f8huXscydHsmcuVc82%2B4%2Ftq4vhbxED0E2ZaUKCI0WNISE0yZn%2FUnoYBIdy5qDbhdPPatqfofDqodrirrQHU8NvMnvZktbd9g1O7tujg7nzyRS2utagg9Noe%2BLvtggQsjNn86kr6AGfRg%2BDXDvq7Pt%2B6BVyEYe1%2B12F9bxxpbVZJq%2BtmoxCblYSbUk3djgOtZpCqgN1FHCJL0VHcy%2Bjv%2BN6%2BADy1CPD3lKxofg50x%2FhBxuCRJQJP2tyJkBWDKjWmswcQovtvevUnluK4p5c8BU%2BkcuAHirGuPrW6qMiEmxHR0CICVMbB0OL65bPBn8aMmSMoqSirSq0zl8R9Ya5aW4yw9ATydEaBTr4pcCrHmV21e1wxyicVajVAzJ3ralVKeyd2iD9TwZcqgUJd0CbCLmT9M94TsGae%2B7bcdHNhRnx9xHQwlP%2B4wgY6pgG4QEkA%2BIQXx49U9sO983iGd12xvl2U2pjoPjWF1uAAT%2FAK3JjUBli8atMz%2BG%2BFlFBng6dVKwBc3KG1ew%2BCliUUOTBpxWx%2BmYDOCBZlQpBnH6NC3Z%2FIN9%2B6OrZ4KmHIZ0J1p8pgD2lPvFHmQHcQSB%2B7KNlrzlOZZVdFzZxkISh3F1D%2BVm%2BFVj7azupzZ7hUDsBGiv1qpPzbmXDMOfTMIDpjNrjcmq7A&X-Amz-Signature=3f5c69a8e73962138f28cd7e74246ae888136131165d939aea5298df95cb283f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUTS4U4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCID3qgYhAEL4R18wU9zu5Px0%2BJ3wmZvYF1CmUlgmJ7D89AiB0WB%2F9MsQrHvxwKbulQnhMas%2FMPhqr1xeTBOa1jZmuKyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM9VreQv0NAGJKuGb5KtwDby0kCzAPkHLFprqdvZ%2FfEolBhvYEe79bYHW0GHPI8pdV%2F%2Fdf1y5dfSAn5Gmin5kEexZpNMGQ4%2BPzEwMroHNyw3m9zULrXz0rYQYZHjN1Z5lFc90e7EzRSrc6nLLXcloc7FyYgqbNtWqV%2FIxYnAhEuLN3BT04pA7zO6WCm81u2OTM0k0jTPnsE6%2FV7%2BSEfwVHGTjtlBDosATE5f8huXscydHsmcuVc82%2B4%2Ftq4vhbxED0E2ZaUKCI0WNISE0yZn%2FUnoYBIdy5qDbhdPPatqfofDqodrirrQHU8NvMnvZktbd9g1O7tujg7nzyRS2utagg9Noe%2BLvtggQsjNn86kr6AGfRg%2BDXDvq7Pt%2B6BVyEYe1%2B12F9bxxpbVZJq%2BtmoxCblYSbUk3djgOtZpCqgN1FHCJL0VHcy%2Bjv%2BN6%2BADy1CPD3lKxofg50x%2FhBxuCRJQJP2tyJkBWDKjWmswcQovtvevUnluK4p5c8BU%2BkcuAHirGuPrW6qMiEmxHR0CICVMbB0OL65bPBn8aMmSMoqSirSq0zl8R9Ya5aW4yw9ATydEaBTr4pcCrHmV21e1wxyicVajVAzJ3ralVKeyd2iD9TwZcqgUJd0CbCLmT9M94TsGae%2B7bcdHNhRnx9xHQwlP%2B4wgY6pgG4QEkA%2BIQXx49U9sO983iGd12xvl2U2pjoPjWF1uAAT%2FAK3JjUBli8atMz%2BG%2BFlFBng6dVKwBc3KG1ew%2BCliUUOTBpxWx%2BmYDOCBZlQpBnH6NC3Z%2FIN9%2B6OrZ4KmHIZ0J1p8pgD2lPvFHmQHcQSB%2B7KNlrzlOZZVdFzZxkISh3F1D%2BVm%2BFVj7azupzZ7hUDsBGiv1qpPzbmXDMOfTMIDpjNrjcmq7A&X-Amz-Signature=1ca3149a7b5fb5ad4a6b3c8cf5e28613118bd52a3941dbb546512f9f2a9b5491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
