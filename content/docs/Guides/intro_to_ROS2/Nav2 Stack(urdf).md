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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2PPFJS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKUr6tR1oC6xhwypCPTBdskT%2B%2F3mjVpH1hwiX7CrC%2FegIhAII1%2FPi5vIU8KEkK3IZ2ZebGKrG%2Fu6DQfKnpj%2FHvZIC6KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1aiWxWuHLu9NWBwq3AN0jbUFoZWIs21OwZK2X87x0O%2FYIsfmVQlFu0E9iP4YR%2B7bhTuS5oD32TM30XoKUs8RMFMITgT4vuWeYaMnTIGs7U1Q4DBMSq19heRJNGXHMG544MJo5FYo9oiODbODJzc4NBLUmBRLBDPe9SSnFWEvN5HmHDxr1j2TPBgaSy6Iszv03qoBXLGJA8gmmHj%2BG5KjV%2FoknzotrkIdwETZAXA02uNoxZ5huMAtRfuXxtqLuUZAhAcsxNqPoPWeMig7xKCdufBcX5PBkUAqjfXfBEYaAFCC9ClzyRTYcqyXphVNyADQI4FNQK6edYWV6lxs%2F2ly%2BN5EI61HqD61RtrDhFixpqmOvichTLyzEoyxFTvzLgPsuUF0KF2xKy%2B2aFP5KI2cJT0JNjatNtFW%2FVVDmNzFHicBsjUqOPZEfx7LSJIRGrtmF3ZBywv0mXPNA68zluImlexCmzrS%2BQ%2B%2FabUe%2BYv7zJS%2FL5phU646PzWxM89ydEa1iYvX3qI0eh%2FJyxDwh0Fq8Mynzo8NSxsNxPUogEjjZUzNvhDquuwPhaC4Q3O%2BTNYJh2TNAeZfuKh9UHRE7q%2BVH0phjqOEe59CVRrZdNQaSanQHw2tCPzrjOy7wxFidHH38jHPy31nyGH3pTDyosjDBjqkAa80Gy32y5neybXgPJihC9ZpKLH%2B29quNWZxDoIdG6wwSvT2uwq7%2BkMiEkrh5F7CbDBrWIdnSrWmEvNwn%2FJGh7i2de0fDPcvDxLyS9mROx3rgXEGxTZUy3QYMuhUIoUzwHsVjbYNY57hGqfpDMNTwRfJUfBCvjkftxcwpzJQQl2%2BGWLTQAAGU6Hq%2Fra%2FMsO45iqFynD5mldUW%2BCEMO%2FZP8NYjBMH&X-Amz-Signature=51e6687975d8d26569e9f0ca371da0a51adb4eed0f974953c099f09a9e0a8e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2PPFJS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKUr6tR1oC6xhwypCPTBdskT%2B%2F3mjVpH1hwiX7CrC%2FegIhAII1%2FPi5vIU8KEkK3IZ2ZebGKrG%2Fu6DQfKnpj%2FHvZIC6KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1aiWxWuHLu9NWBwq3AN0jbUFoZWIs21OwZK2X87x0O%2FYIsfmVQlFu0E9iP4YR%2B7bhTuS5oD32TM30XoKUs8RMFMITgT4vuWeYaMnTIGs7U1Q4DBMSq19heRJNGXHMG544MJo5FYo9oiODbODJzc4NBLUmBRLBDPe9SSnFWEvN5HmHDxr1j2TPBgaSy6Iszv03qoBXLGJA8gmmHj%2BG5KjV%2FoknzotrkIdwETZAXA02uNoxZ5huMAtRfuXxtqLuUZAhAcsxNqPoPWeMig7xKCdufBcX5PBkUAqjfXfBEYaAFCC9ClzyRTYcqyXphVNyADQI4FNQK6edYWV6lxs%2F2ly%2BN5EI61HqD61RtrDhFixpqmOvichTLyzEoyxFTvzLgPsuUF0KF2xKy%2B2aFP5KI2cJT0JNjatNtFW%2FVVDmNzFHicBsjUqOPZEfx7LSJIRGrtmF3ZBywv0mXPNA68zluImlexCmzrS%2BQ%2B%2FabUe%2BYv7zJS%2FL5phU646PzWxM89ydEa1iYvX3qI0eh%2FJyxDwh0Fq8Mynzo8NSxsNxPUogEjjZUzNvhDquuwPhaC4Q3O%2BTNYJh2TNAeZfuKh9UHRE7q%2BVH0phjqOEe59CVRrZdNQaSanQHw2tCPzrjOy7wxFidHH38jHPy31nyGH3pTDyosjDBjqkAa80Gy32y5neybXgPJihC9ZpKLH%2B29quNWZxDoIdG6wwSvT2uwq7%2BkMiEkrh5F7CbDBrWIdnSrWmEvNwn%2FJGh7i2de0fDPcvDxLyS9mROx3rgXEGxTZUy3QYMuhUIoUzwHsVjbYNY57hGqfpDMNTwRfJUfBCvjkftxcwpzJQQl2%2BGWLTQAAGU6Hq%2Fra%2FMsO45iqFynD5mldUW%2BCEMO%2FZP8NYjBMH&X-Amz-Signature=6bb37f5b2de1053e9298125ccd516bc33b2d1e4866dad4ef45ae87334106edae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2PPFJS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKUr6tR1oC6xhwypCPTBdskT%2B%2F3mjVpH1hwiX7CrC%2FegIhAII1%2FPi5vIU8KEkK3IZ2ZebGKrG%2Fu6DQfKnpj%2FHvZIC6KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1aiWxWuHLu9NWBwq3AN0jbUFoZWIs21OwZK2X87x0O%2FYIsfmVQlFu0E9iP4YR%2B7bhTuS5oD32TM30XoKUs8RMFMITgT4vuWeYaMnTIGs7U1Q4DBMSq19heRJNGXHMG544MJo5FYo9oiODbODJzc4NBLUmBRLBDPe9SSnFWEvN5HmHDxr1j2TPBgaSy6Iszv03qoBXLGJA8gmmHj%2BG5KjV%2FoknzotrkIdwETZAXA02uNoxZ5huMAtRfuXxtqLuUZAhAcsxNqPoPWeMig7xKCdufBcX5PBkUAqjfXfBEYaAFCC9ClzyRTYcqyXphVNyADQI4FNQK6edYWV6lxs%2F2ly%2BN5EI61HqD61RtrDhFixpqmOvichTLyzEoyxFTvzLgPsuUF0KF2xKy%2B2aFP5KI2cJT0JNjatNtFW%2FVVDmNzFHicBsjUqOPZEfx7LSJIRGrtmF3ZBywv0mXPNA68zluImlexCmzrS%2BQ%2B%2FabUe%2BYv7zJS%2FL5phU646PzWxM89ydEa1iYvX3qI0eh%2FJyxDwh0Fq8Mynzo8NSxsNxPUogEjjZUzNvhDquuwPhaC4Q3O%2BTNYJh2TNAeZfuKh9UHRE7q%2BVH0phjqOEe59CVRrZdNQaSanQHw2tCPzrjOy7wxFidHH38jHPy31nyGH3pTDyosjDBjqkAa80Gy32y5neybXgPJihC9ZpKLH%2B29quNWZxDoIdG6wwSvT2uwq7%2BkMiEkrh5F7CbDBrWIdnSrWmEvNwn%2FJGh7i2de0fDPcvDxLyS9mROx3rgXEGxTZUy3QYMuhUIoUzwHsVjbYNY57hGqfpDMNTwRfJUfBCvjkftxcwpzJQQl2%2BGWLTQAAGU6Hq%2Fra%2FMsO45iqFynD5mldUW%2BCEMO%2FZP8NYjBMH&X-Amz-Signature=051ad95451b2af6ff8b981e17a32d7a4fb5d3d77ee2530c2aba7e28c25fec137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2PPFJS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKUr6tR1oC6xhwypCPTBdskT%2B%2F3mjVpH1hwiX7CrC%2FegIhAII1%2FPi5vIU8KEkK3IZ2ZebGKrG%2Fu6DQfKnpj%2FHvZIC6KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1aiWxWuHLu9NWBwq3AN0jbUFoZWIs21OwZK2X87x0O%2FYIsfmVQlFu0E9iP4YR%2B7bhTuS5oD32TM30XoKUs8RMFMITgT4vuWeYaMnTIGs7U1Q4DBMSq19heRJNGXHMG544MJo5FYo9oiODbODJzc4NBLUmBRLBDPe9SSnFWEvN5HmHDxr1j2TPBgaSy6Iszv03qoBXLGJA8gmmHj%2BG5KjV%2FoknzotrkIdwETZAXA02uNoxZ5huMAtRfuXxtqLuUZAhAcsxNqPoPWeMig7xKCdufBcX5PBkUAqjfXfBEYaAFCC9ClzyRTYcqyXphVNyADQI4FNQK6edYWV6lxs%2F2ly%2BN5EI61HqD61RtrDhFixpqmOvichTLyzEoyxFTvzLgPsuUF0KF2xKy%2B2aFP5KI2cJT0JNjatNtFW%2FVVDmNzFHicBsjUqOPZEfx7LSJIRGrtmF3ZBywv0mXPNA68zluImlexCmzrS%2BQ%2B%2FabUe%2BYv7zJS%2FL5phU646PzWxM89ydEa1iYvX3qI0eh%2FJyxDwh0Fq8Mynzo8NSxsNxPUogEjjZUzNvhDquuwPhaC4Q3O%2BTNYJh2TNAeZfuKh9UHRE7q%2BVH0phjqOEe59CVRrZdNQaSanQHw2tCPzrjOy7wxFidHH38jHPy31nyGH3pTDyosjDBjqkAa80Gy32y5neybXgPJihC9ZpKLH%2B29quNWZxDoIdG6wwSvT2uwq7%2BkMiEkrh5F7CbDBrWIdnSrWmEvNwn%2FJGh7i2de0fDPcvDxLyS9mROx3rgXEGxTZUy3QYMuhUIoUzwHsVjbYNY57hGqfpDMNTwRfJUfBCvjkftxcwpzJQQl2%2BGWLTQAAGU6Hq%2Fra%2FMsO45iqFynD5mldUW%2BCEMO%2FZP8NYjBMH&X-Amz-Signature=4309151fcb7749da505a1a03d53f879dec45363b84e29b95017ddc5be119949d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2PPFJS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKUr6tR1oC6xhwypCPTBdskT%2B%2F3mjVpH1hwiX7CrC%2FegIhAII1%2FPi5vIU8KEkK3IZ2ZebGKrG%2Fu6DQfKnpj%2FHvZIC6KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1aiWxWuHLu9NWBwq3AN0jbUFoZWIs21OwZK2X87x0O%2FYIsfmVQlFu0E9iP4YR%2B7bhTuS5oD32TM30XoKUs8RMFMITgT4vuWeYaMnTIGs7U1Q4DBMSq19heRJNGXHMG544MJo5FYo9oiODbODJzc4NBLUmBRLBDPe9SSnFWEvN5HmHDxr1j2TPBgaSy6Iszv03qoBXLGJA8gmmHj%2BG5KjV%2FoknzotrkIdwETZAXA02uNoxZ5huMAtRfuXxtqLuUZAhAcsxNqPoPWeMig7xKCdufBcX5PBkUAqjfXfBEYaAFCC9ClzyRTYcqyXphVNyADQI4FNQK6edYWV6lxs%2F2ly%2BN5EI61HqD61RtrDhFixpqmOvichTLyzEoyxFTvzLgPsuUF0KF2xKy%2B2aFP5KI2cJT0JNjatNtFW%2FVVDmNzFHicBsjUqOPZEfx7LSJIRGrtmF3ZBywv0mXPNA68zluImlexCmzrS%2BQ%2B%2FabUe%2BYv7zJS%2FL5phU646PzWxM89ydEa1iYvX3qI0eh%2FJyxDwh0Fq8Mynzo8NSxsNxPUogEjjZUzNvhDquuwPhaC4Q3O%2BTNYJh2TNAeZfuKh9UHRE7q%2BVH0phjqOEe59CVRrZdNQaSanQHw2tCPzrjOy7wxFidHH38jHPy31nyGH3pTDyosjDBjqkAa80Gy32y5neybXgPJihC9ZpKLH%2B29quNWZxDoIdG6wwSvT2uwq7%2BkMiEkrh5F7CbDBrWIdnSrWmEvNwn%2FJGh7i2de0fDPcvDxLyS9mROx3rgXEGxTZUy3QYMuhUIoUzwHsVjbYNY57hGqfpDMNTwRfJUfBCvjkftxcwpzJQQl2%2BGWLTQAAGU6Hq%2Fra%2FMsO45iqFynD5mldUW%2BCEMO%2FZP8NYjBMH&X-Amz-Signature=4f663254880b60417e918d65a1251ec117824c44f102160029aaf0a446bd7219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W2PPFJS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKUr6tR1oC6xhwypCPTBdskT%2B%2F3mjVpH1hwiX7CrC%2FegIhAII1%2FPi5vIU8KEkK3IZ2ZebGKrG%2Fu6DQfKnpj%2FHvZIC6KogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1aiWxWuHLu9NWBwq3AN0jbUFoZWIs21OwZK2X87x0O%2FYIsfmVQlFu0E9iP4YR%2B7bhTuS5oD32TM30XoKUs8RMFMITgT4vuWeYaMnTIGs7U1Q4DBMSq19heRJNGXHMG544MJo5FYo9oiODbODJzc4NBLUmBRLBDPe9SSnFWEvN5HmHDxr1j2TPBgaSy6Iszv03qoBXLGJA8gmmHj%2BG5KjV%2FoknzotrkIdwETZAXA02uNoxZ5huMAtRfuXxtqLuUZAhAcsxNqPoPWeMig7xKCdufBcX5PBkUAqjfXfBEYaAFCC9ClzyRTYcqyXphVNyADQI4FNQK6edYWV6lxs%2F2ly%2BN5EI61HqD61RtrDhFixpqmOvichTLyzEoyxFTvzLgPsuUF0KF2xKy%2B2aFP5KI2cJT0JNjatNtFW%2FVVDmNzFHicBsjUqOPZEfx7LSJIRGrtmF3ZBywv0mXPNA68zluImlexCmzrS%2BQ%2B%2FabUe%2BYv7zJS%2FL5phU646PzWxM89ydEa1iYvX3qI0eh%2FJyxDwh0Fq8Mynzo8NSxsNxPUogEjjZUzNvhDquuwPhaC4Q3O%2BTNYJh2TNAeZfuKh9UHRE7q%2BVH0phjqOEe59CVRrZdNQaSanQHw2tCPzrjOy7wxFidHH38jHPy31nyGH3pTDyosjDBjqkAa80Gy32y5neybXgPJihC9ZpKLH%2B29quNWZxDoIdG6wwSvT2uwq7%2BkMiEkrh5F7CbDBrWIdnSrWmEvNwn%2FJGh7i2de0fDPcvDxLyS9mROx3rgXEGxTZUy3QYMuhUIoUzwHsVjbYNY57hGqfpDMNTwRfJUfBCvjkftxcwpzJQQl2%2BGWLTQAAGU6Hq%2Fra%2FMsO45iqFynD5mldUW%2BCEMO%2FZP8NYjBMH&X-Amz-Signature=e6d06b6af2cee964b58be8109d1b13b27afc6f28b38dab85de12a1483ac90dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
