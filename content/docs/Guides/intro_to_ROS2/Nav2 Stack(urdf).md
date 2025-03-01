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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57YHG63%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICp4tym%2B1PmcQ16R2n9lPsJH3j%2Fh6A3FjqTrAQlF%2FQj4AiATEkXAOaYhL%2Fe4IlONuvaAOsG64wCRHFyuZcl4rc9vSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQhu6zla83Bftf1WKtwDwSS86NplYz7ZGzrLrQgLmmilr2%2BzDmQXtPzeazDTmuJEnkNALkjCxDhzJjtl%2BMQapTCTvh9AcOu2%2FyiO27Mu2SMbF8VVHOh6d9PK0MjgEL8Eu%2FAFS4MCQRRvlxEdd1L0dns59Hf7RBqbh2FLzv%2FgWv%2BmqEpsfHIH0isKTuRkToq4QcK8LG0qyPENLJVVyfeJU3I%2FTgl6FWFlVHRg%2Fh3jvh5AvO2%2F2XfbRr3n9t2Oq9Fy7%2F3ANEjjktbjju3SjZp0ZbBDcXH8uXe9na3dPhwISi7vNFLS10bvcWZIKbKnr31MKotvOq8%2BRaSFWXZUtRHN4Z90OEXljcVbBsvOhFjESAEuKROuAsuCH%2F17rEEzHa13FNnyYL5qDA60ir%2Ff3Wgu7cjv6O0NTPAK0Ufpx1jvdp47abySleJSyIulaMUK8r%2BR7s3KsO8dHJwa5MKRbAoqjCJbilsLx2zuiED1h6BynULvkVXPlYIjoJZTfD4W%2B3Ewv6LWXuLEOAWjERRsEx858jIYqWztf5eE3U41SzxuSgS5vjtIljCuceJx0s3SfbCXStucEYTgdxokX%2B8sqid9edrNl%2F4gyscuX7%2ByUpoQI0WP2nFCbCICriVJRHt1qpjSPSaOSdlqKzAryRYwn%2FOJvgY6pgHbskZs8KjDfCyxeHOrXcnuM9rQZDVkAxfFSfqEYlnTnajuceFb1wM5Pc3a7%2FL%2FqNs8uNaPNKCk0WmalfVzR0CSgWBzWzf9KO7xB1eU2SMDNqofTUJT39K0KEMcqq06w%2BIGoacGA2itdiGXPKA3I5X6KDVht5epL3E9bDeNLX2S%2BbkKnm0tC5oCTRcNaU%2BwBHFnB5FURXwS2rSSt2x0YX4v5ydNtw4u&X-Amz-Signature=a204ee847f99d0218dd799ca0764ea719877df2b53419b0cc509c63b2e587aee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57YHG63%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICp4tym%2B1PmcQ16R2n9lPsJH3j%2Fh6A3FjqTrAQlF%2FQj4AiATEkXAOaYhL%2Fe4IlONuvaAOsG64wCRHFyuZcl4rc9vSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQhu6zla83Bftf1WKtwDwSS86NplYz7ZGzrLrQgLmmilr2%2BzDmQXtPzeazDTmuJEnkNALkjCxDhzJjtl%2BMQapTCTvh9AcOu2%2FyiO27Mu2SMbF8VVHOh6d9PK0MjgEL8Eu%2FAFS4MCQRRvlxEdd1L0dns59Hf7RBqbh2FLzv%2FgWv%2BmqEpsfHIH0isKTuRkToq4QcK8LG0qyPENLJVVyfeJU3I%2FTgl6FWFlVHRg%2Fh3jvh5AvO2%2F2XfbRr3n9t2Oq9Fy7%2F3ANEjjktbjju3SjZp0ZbBDcXH8uXe9na3dPhwISi7vNFLS10bvcWZIKbKnr31MKotvOq8%2BRaSFWXZUtRHN4Z90OEXljcVbBsvOhFjESAEuKROuAsuCH%2F17rEEzHa13FNnyYL5qDA60ir%2Ff3Wgu7cjv6O0NTPAK0Ufpx1jvdp47abySleJSyIulaMUK8r%2BR7s3KsO8dHJwa5MKRbAoqjCJbilsLx2zuiED1h6BynULvkVXPlYIjoJZTfD4W%2B3Ewv6LWXuLEOAWjERRsEx858jIYqWztf5eE3U41SzxuSgS5vjtIljCuceJx0s3SfbCXStucEYTgdxokX%2B8sqid9edrNl%2F4gyscuX7%2ByUpoQI0WP2nFCbCICriVJRHt1qpjSPSaOSdlqKzAryRYwn%2FOJvgY6pgHbskZs8KjDfCyxeHOrXcnuM9rQZDVkAxfFSfqEYlnTnajuceFb1wM5Pc3a7%2FL%2FqNs8uNaPNKCk0WmalfVzR0CSgWBzWzf9KO7xB1eU2SMDNqofTUJT39K0KEMcqq06w%2BIGoacGA2itdiGXPKA3I5X6KDVht5epL3E9bDeNLX2S%2BbkKnm0tC5oCTRcNaU%2BwBHFnB5FURXwS2rSSt2x0YX4v5ydNtw4u&X-Amz-Signature=c77c521e6ea2da9bec05929c1544b1ea44fceb46898f2dc06710f22c947bc7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57YHG63%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICp4tym%2B1PmcQ16R2n9lPsJH3j%2Fh6A3FjqTrAQlF%2FQj4AiATEkXAOaYhL%2Fe4IlONuvaAOsG64wCRHFyuZcl4rc9vSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQhu6zla83Bftf1WKtwDwSS86NplYz7ZGzrLrQgLmmilr2%2BzDmQXtPzeazDTmuJEnkNALkjCxDhzJjtl%2BMQapTCTvh9AcOu2%2FyiO27Mu2SMbF8VVHOh6d9PK0MjgEL8Eu%2FAFS4MCQRRvlxEdd1L0dns59Hf7RBqbh2FLzv%2FgWv%2BmqEpsfHIH0isKTuRkToq4QcK8LG0qyPENLJVVyfeJU3I%2FTgl6FWFlVHRg%2Fh3jvh5AvO2%2F2XfbRr3n9t2Oq9Fy7%2F3ANEjjktbjju3SjZp0ZbBDcXH8uXe9na3dPhwISi7vNFLS10bvcWZIKbKnr31MKotvOq8%2BRaSFWXZUtRHN4Z90OEXljcVbBsvOhFjESAEuKROuAsuCH%2F17rEEzHa13FNnyYL5qDA60ir%2Ff3Wgu7cjv6O0NTPAK0Ufpx1jvdp47abySleJSyIulaMUK8r%2BR7s3KsO8dHJwa5MKRbAoqjCJbilsLx2zuiED1h6BynULvkVXPlYIjoJZTfD4W%2B3Ewv6LWXuLEOAWjERRsEx858jIYqWztf5eE3U41SzxuSgS5vjtIljCuceJx0s3SfbCXStucEYTgdxokX%2B8sqid9edrNl%2F4gyscuX7%2ByUpoQI0WP2nFCbCICriVJRHt1qpjSPSaOSdlqKzAryRYwn%2FOJvgY6pgHbskZs8KjDfCyxeHOrXcnuM9rQZDVkAxfFSfqEYlnTnajuceFb1wM5Pc3a7%2FL%2FqNs8uNaPNKCk0WmalfVzR0CSgWBzWzf9KO7xB1eU2SMDNqofTUJT39K0KEMcqq06w%2BIGoacGA2itdiGXPKA3I5X6KDVht5epL3E9bDeNLX2S%2BbkKnm0tC5oCTRcNaU%2BwBHFnB5FURXwS2rSSt2x0YX4v5ydNtw4u&X-Amz-Signature=4c6562efba94f4f222aceb1525ddd6ea4b2472d2d69b321ba77adb3ed6080825&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57YHG63%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICp4tym%2B1PmcQ16R2n9lPsJH3j%2Fh6A3FjqTrAQlF%2FQj4AiATEkXAOaYhL%2Fe4IlONuvaAOsG64wCRHFyuZcl4rc9vSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQhu6zla83Bftf1WKtwDwSS86NplYz7ZGzrLrQgLmmilr2%2BzDmQXtPzeazDTmuJEnkNALkjCxDhzJjtl%2BMQapTCTvh9AcOu2%2FyiO27Mu2SMbF8VVHOh6d9PK0MjgEL8Eu%2FAFS4MCQRRvlxEdd1L0dns59Hf7RBqbh2FLzv%2FgWv%2BmqEpsfHIH0isKTuRkToq4QcK8LG0qyPENLJVVyfeJU3I%2FTgl6FWFlVHRg%2Fh3jvh5AvO2%2F2XfbRr3n9t2Oq9Fy7%2F3ANEjjktbjju3SjZp0ZbBDcXH8uXe9na3dPhwISi7vNFLS10bvcWZIKbKnr31MKotvOq8%2BRaSFWXZUtRHN4Z90OEXljcVbBsvOhFjESAEuKROuAsuCH%2F17rEEzHa13FNnyYL5qDA60ir%2Ff3Wgu7cjv6O0NTPAK0Ufpx1jvdp47abySleJSyIulaMUK8r%2BR7s3KsO8dHJwa5MKRbAoqjCJbilsLx2zuiED1h6BynULvkVXPlYIjoJZTfD4W%2B3Ewv6LWXuLEOAWjERRsEx858jIYqWztf5eE3U41SzxuSgS5vjtIljCuceJx0s3SfbCXStucEYTgdxokX%2B8sqid9edrNl%2F4gyscuX7%2ByUpoQI0WP2nFCbCICriVJRHt1qpjSPSaOSdlqKzAryRYwn%2FOJvgY6pgHbskZs8KjDfCyxeHOrXcnuM9rQZDVkAxfFSfqEYlnTnajuceFb1wM5Pc3a7%2FL%2FqNs8uNaPNKCk0WmalfVzR0CSgWBzWzf9KO7xB1eU2SMDNqofTUJT39K0KEMcqq06w%2BIGoacGA2itdiGXPKA3I5X6KDVht5epL3E9bDeNLX2S%2BbkKnm0tC5oCTRcNaU%2BwBHFnB5FURXwS2rSSt2x0YX4v5ydNtw4u&X-Amz-Signature=59713bd1db2b1934c07f7c14a42309b0c64ace1057202dd353290180d4fda9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57YHG63%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICp4tym%2B1PmcQ16R2n9lPsJH3j%2Fh6A3FjqTrAQlF%2FQj4AiATEkXAOaYhL%2Fe4IlONuvaAOsG64wCRHFyuZcl4rc9vSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQhu6zla83Bftf1WKtwDwSS86NplYz7ZGzrLrQgLmmilr2%2BzDmQXtPzeazDTmuJEnkNALkjCxDhzJjtl%2BMQapTCTvh9AcOu2%2FyiO27Mu2SMbF8VVHOh6d9PK0MjgEL8Eu%2FAFS4MCQRRvlxEdd1L0dns59Hf7RBqbh2FLzv%2FgWv%2BmqEpsfHIH0isKTuRkToq4QcK8LG0qyPENLJVVyfeJU3I%2FTgl6FWFlVHRg%2Fh3jvh5AvO2%2F2XfbRr3n9t2Oq9Fy7%2F3ANEjjktbjju3SjZp0ZbBDcXH8uXe9na3dPhwISi7vNFLS10bvcWZIKbKnr31MKotvOq8%2BRaSFWXZUtRHN4Z90OEXljcVbBsvOhFjESAEuKROuAsuCH%2F17rEEzHa13FNnyYL5qDA60ir%2Ff3Wgu7cjv6O0NTPAK0Ufpx1jvdp47abySleJSyIulaMUK8r%2BR7s3KsO8dHJwa5MKRbAoqjCJbilsLx2zuiED1h6BynULvkVXPlYIjoJZTfD4W%2B3Ewv6LWXuLEOAWjERRsEx858jIYqWztf5eE3U41SzxuSgS5vjtIljCuceJx0s3SfbCXStucEYTgdxokX%2B8sqid9edrNl%2F4gyscuX7%2ByUpoQI0WP2nFCbCICriVJRHt1qpjSPSaOSdlqKzAryRYwn%2FOJvgY6pgHbskZs8KjDfCyxeHOrXcnuM9rQZDVkAxfFSfqEYlnTnajuceFb1wM5Pc3a7%2FL%2FqNs8uNaPNKCk0WmalfVzR0CSgWBzWzf9KO7xB1eU2SMDNqofTUJT39K0KEMcqq06w%2BIGoacGA2itdiGXPKA3I5X6KDVht5epL3E9bDeNLX2S%2BbkKnm0tC5oCTRcNaU%2BwBHFnB5FURXwS2rSSt2x0YX4v5ydNtw4u&X-Amz-Signature=b828afb29a2c64bf0059766c2bd192b0dd01d92679dad16f8e65dc27d0dffbaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57YHG63%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICp4tym%2B1PmcQ16R2n9lPsJH3j%2Fh6A3FjqTrAQlF%2FQj4AiATEkXAOaYhL%2Fe4IlONuvaAOsG64wCRHFyuZcl4rc9vSyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQhu6zla83Bftf1WKtwDwSS86NplYz7ZGzrLrQgLmmilr2%2BzDmQXtPzeazDTmuJEnkNALkjCxDhzJjtl%2BMQapTCTvh9AcOu2%2FyiO27Mu2SMbF8VVHOh6d9PK0MjgEL8Eu%2FAFS4MCQRRvlxEdd1L0dns59Hf7RBqbh2FLzv%2FgWv%2BmqEpsfHIH0isKTuRkToq4QcK8LG0qyPENLJVVyfeJU3I%2FTgl6FWFlVHRg%2Fh3jvh5AvO2%2F2XfbRr3n9t2Oq9Fy7%2F3ANEjjktbjju3SjZp0ZbBDcXH8uXe9na3dPhwISi7vNFLS10bvcWZIKbKnr31MKotvOq8%2BRaSFWXZUtRHN4Z90OEXljcVbBsvOhFjESAEuKROuAsuCH%2F17rEEzHa13FNnyYL5qDA60ir%2Ff3Wgu7cjv6O0NTPAK0Ufpx1jvdp47abySleJSyIulaMUK8r%2BR7s3KsO8dHJwa5MKRbAoqjCJbilsLx2zuiED1h6BynULvkVXPlYIjoJZTfD4W%2B3Ewv6LWXuLEOAWjERRsEx858jIYqWztf5eE3U41SzxuSgS5vjtIljCuceJx0s3SfbCXStucEYTgdxokX%2B8sqid9edrNl%2F4gyscuX7%2ByUpoQI0WP2nFCbCICriVJRHt1qpjSPSaOSdlqKzAryRYwn%2FOJvgY6pgHbskZs8KjDfCyxeHOrXcnuM9rQZDVkAxfFSfqEYlnTnajuceFb1wM5Pc3a7%2FL%2FqNs8uNaPNKCk0WmalfVzR0CSgWBzWzf9KO7xB1eU2SMDNqofTUJT39K0KEMcqq06w%2BIGoacGA2itdiGXPKA3I5X6KDVht5epL3E9bDeNLX2S%2BbkKnm0tC5oCTRcNaU%2BwBHFnB5FURXwS2rSSt2x0YX4v5ydNtw4u&X-Amz-Signature=6709e78cb251e51e05637caf7db70775c0ef9414fe9cf87056ffb51a576a9721&X-Amz-SignedHeaders=host&x-id=GetObject)
