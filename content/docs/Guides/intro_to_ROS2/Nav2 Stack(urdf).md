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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZGOG4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEWBDzzZ7%2F%2FOLIF9rdeagNdyvuOsbbDubtmst6xZTbx3AiEA8%2BKy4XmXdUeqnRdG2bubcTNHoTr2GYtHhksTJZ%2F2FGgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrkAyz12DThKoqTLircA1EH1sBHFgtXThnQfFdgOb%2B6%2F2vu%2FlWpg2LDyhkqiRgCkNhw4SwQhSh%2B6pcw%2FNV4CFiG1i9RbT33Dk41kheKctDPN7IXtLlB%2F%2FE9VDTyI%2F%2B8rjLHmaulKYXhzNbj0mxIzl7bcRmrbjqNh%2FaCoGKNAxugZm%2FLaF0ZmbxeSO81V6HBsAnN%2BW0so0LDfgLo5r%2BCnlpCYuyl5zGd3fw6UAS2VM48eu0HR8Zn5lkyu7pA4kujL9pfVo%2Bi9Q%2BwcQUV0Wwq4vK7iD%2FxLzIW60MehilQFX9rdguKWLLFQw7U8n2aUjB5xIiEGCjjFckpnGA3L8ePZhaTywM0ZPHOZJenNO%2BIiufTIggxKfwZz9koXJ7V9bjUYeHXylUUB9QgQiuEUbZXZuZRX7QmH0BtHlhOYbbNj%2BLi0B7Q5JPoANcDoPcO8Vav6q3vkchtq1j1kGCKhYqUeDVwWsK8WcxfLYvcgmQJ%2FOuMPxFiD2MZn0yC7X58T%2Fvt9hHVsvD4vMmLnXEvKHE%2FDZsGqE1RZbc9d2%2FsGxHZOgrNJZxEGmX7ixk366F%2BCWUYyJBcKcV8xylx6FqSAiyfIlFBeJPV7UcD8suQxTWKrfH%2FoZ6oe5kC80CBxHLBDJTxtC0zZl5ORDErNSnKMKXP88EGOqUBLoGlJCZFvRILVPWHhVHqcmFBInzPUe%2BUOV6E3biUwYPXhzDipVM6UwImtY56eDBevRkRIvvs8C8r2gmRyaZQqN%2FCj8sSso7e0%2BTceIAIdf3cryRgvYm0HhBSvIjvjCMdiVDfhgehoQfIQUnI7p6cU4gsuY097eU1IboiueQcnoQx9glSVT%2BBEHukko6wgsNgrogsLhFLS6zLBHtkq93ldK%2BHoPYn&X-Amz-Signature=17d76b51800db300ce5dd98f74cabac34fd71d3ad724de76019133df8b4c6c93&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZGOG4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEWBDzzZ7%2F%2FOLIF9rdeagNdyvuOsbbDubtmst6xZTbx3AiEA8%2BKy4XmXdUeqnRdG2bubcTNHoTr2GYtHhksTJZ%2F2FGgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrkAyz12DThKoqTLircA1EH1sBHFgtXThnQfFdgOb%2B6%2F2vu%2FlWpg2LDyhkqiRgCkNhw4SwQhSh%2B6pcw%2FNV4CFiG1i9RbT33Dk41kheKctDPN7IXtLlB%2F%2FE9VDTyI%2F%2B8rjLHmaulKYXhzNbj0mxIzl7bcRmrbjqNh%2FaCoGKNAxugZm%2FLaF0ZmbxeSO81V6HBsAnN%2BW0so0LDfgLo5r%2BCnlpCYuyl5zGd3fw6UAS2VM48eu0HR8Zn5lkyu7pA4kujL9pfVo%2Bi9Q%2BwcQUV0Wwq4vK7iD%2FxLzIW60MehilQFX9rdguKWLLFQw7U8n2aUjB5xIiEGCjjFckpnGA3L8ePZhaTywM0ZPHOZJenNO%2BIiufTIggxKfwZz9koXJ7V9bjUYeHXylUUB9QgQiuEUbZXZuZRX7QmH0BtHlhOYbbNj%2BLi0B7Q5JPoANcDoPcO8Vav6q3vkchtq1j1kGCKhYqUeDVwWsK8WcxfLYvcgmQJ%2FOuMPxFiD2MZn0yC7X58T%2Fvt9hHVsvD4vMmLnXEvKHE%2FDZsGqE1RZbc9d2%2FsGxHZOgrNJZxEGmX7ixk366F%2BCWUYyJBcKcV8xylx6FqSAiyfIlFBeJPV7UcD8suQxTWKrfH%2FoZ6oe5kC80CBxHLBDJTxtC0zZl5ORDErNSnKMKXP88EGOqUBLoGlJCZFvRILVPWHhVHqcmFBInzPUe%2BUOV6E3biUwYPXhzDipVM6UwImtY56eDBevRkRIvvs8C8r2gmRyaZQqN%2FCj8sSso7e0%2BTceIAIdf3cryRgvYm0HhBSvIjvjCMdiVDfhgehoQfIQUnI7p6cU4gsuY097eU1IboiueQcnoQx9glSVT%2BBEHukko6wgsNgrogsLhFLS6zLBHtkq93ldK%2BHoPYn&X-Amz-Signature=35a672df177769f47dd2bb428cea6006e268474b56b7691016cc9ab9f17f8a63&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZGOG4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEWBDzzZ7%2F%2FOLIF9rdeagNdyvuOsbbDubtmst6xZTbx3AiEA8%2BKy4XmXdUeqnRdG2bubcTNHoTr2GYtHhksTJZ%2F2FGgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrkAyz12DThKoqTLircA1EH1sBHFgtXThnQfFdgOb%2B6%2F2vu%2FlWpg2LDyhkqiRgCkNhw4SwQhSh%2B6pcw%2FNV4CFiG1i9RbT33Dk41kheKctDPN7IXtLlB%2F%2FE9VDTyI%2F%2B8rjLHmaulKYXhzNbj0mxIzl7bcRmrbjqNh%2FaCoGKNAxugZm%2FLaF0ZmbxeSO81V6HBsAnN%2BW0so0LDfgLo5r%2BCnlpCYuyl5zGd3fw6UAS2VM48eu0HR8Zn5lkyu7pA4kujL9pfVo%2Bi9Q%2BwcQUV0Wwq4vK7iD%2FxLzIW60MehilQFX9rdguKWLLFQw7U8n2aUjB5xIiEGCjjFckpnGA3L8ePZhaTywM0ZPHOZJenNO%2BIiufTIggxKfwZz9koXJ7V9bjUYeHXylUUB9QgQiuEUbZXZuZRX7QmH0BtHlhOYbbNj%2BLi0B7Q5JPoANcDoPcO8Vav6q3vkchtq1j1kGCKhYqUeDVwWsK8WcxfLYvcgmQJ%2FOuMPxFiD2MZn0yC7X58T%2Fvt9hHVsvD4vMmLnXEvKHE%2FDZsGqE1RZbc9d2%2FsGxHZOgrNJZxEGmX7ixk366F%2BCWUYyJBcKcV8xylx6FqSAiyfIlFBeJPV7UcD8suQxTWKrfH%2FoZ6oe5kC80CBxHLBDJTxtC0zZl5ORDErNSnKMKXP88EGOqUBLoGlJCZFvRILVPWHhVHqcmFBInzPUe%2BUOV6E3biUwYPXhzDipVM6UwImtY56eDBevRkRIvvs8C8r2gmRyaZQqN%2FCj8sSso7e0%2BTceIAIdf3cryRgvYm0HhBSvIjvjCMdiVDfhgehoQfIQUnI7p6cU4gsuY097eU1IboiueQcnoQx9glSVT%2BBEHukko6wgsNgrogsLhFLS6zLBHtkq93ldK%2BHoPYn&X-Amz-Signature=e25ea4efbd22f4540e0bfab7fd864d3f1e1e3b28f58da917878c81925b97a3de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZGOG4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEWBDzzZ7%2F%2FOLIF9rdeagNdyvuOsbbDubtmst6xZTbx3AiEA8%2BKy4XmXdUeqnRdG2bubcTNHoTr2GYtHhksTJZ%2F2FGgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrkAyz12DThKoqTLircA1EH1sBHFgtXThnQfFdgOb%2B6%2F2vu%2FlWpg2LDyhkqiRgCkNhw4SwQhSh%2B6pcw%2FNV4CFiG1i9RbT33Dk41kheKctDPN7IXtLlB%2F%2FE9VDTyI%2F%2B8rjLHmaulKYXhzNbj0mxIzl7bcRmrbjqNh%2FaCoGKNAxugZm%2FLaF0ZmbxeSO81V6HBsAnN%2BW0so0LDfgLo5r%2BCnlpCYuyl5zGd3fw6UAS2VM48eu0HR8Zn5lkyu7pA4kujL9pfVo%2Bi9Q%2BwcQUV0Wwq4vK7iD%2FxLzIW60MehilQFX9rdguKWLLFQw7U8n2aUjB5xIiEGCjjFckpnGA3L8ePZhaTywM0ZPHOZJenNO%2BIiufTIggxKfwZz9koXJ7V9bjUYeHXylUUB9QgQiuEUbZXZuZRX7QmH0BtHlhOYbbNj%2BLi0B7Q5JPoANcDoPcO8Vav6q3vkchtq1j1kGCKhYqUeDVwWsK8WcxfLYvcgmQJ%2FOuMPxFiD2MZn0yC7X58T%2Fvt9hHVsvD4vMmLnXEvKHE%2FDZsGqE1RZbc9d2%2FsGxHZOgrNJZxEGmX7ixk366F%2BCWUYyJBcKcV8xylx6FqSAiyfIlFBeJPV7UcD8suQxTWKrfH%2FoZ6oe5kC80CBxHLBDJTxtC0zZl5ORDErNSnKMKXP88EGOqUBLoGlJCZFvRILVPWHhVHqcmFBInzPUe%2BUOV6E3biUwYPXhzDipVM6UwImtY56eDBevRkRIvvs8C8r2gmRyaZQqN%2FCj8sSso7e0%2BTceIAIdf3cryRgvYm0HhBSvIjvjCMdiVDfhgehoQfIQUnI7p6cU4gsuY097eU1IboiueQcnoQx9glSVT%2BBEHukko6wgsNgrogsLhFLS6zLBHtkq93ldK%2BHoPYn&X-Amz-Signature=823109cd29f459349f2b709a690f67370acf50586c92f51ecd173c21eb9d0531&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZGOG4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEWBDzzZ7%2F%2FOLIF9rdeagNdyvuOsbbDubtmst6xZTbx3AiEA8%2BKy4XmXdUeqnRdG2bubcTNHoTr2GYtHhksTJZ%2F2FGgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrkAyz12DThKoqTLircA1EH1sBHFgtXThnQfFdgOb%2B6%2F2vu%2FlWpg2LDyhkqiRgCkNhw4SwQhSh%2B6pcw%2FNV4CFiG1i9RbT33Dk41kheKctDPN7IXtLlB%2F%2FE9VDTyI%2F%2B8rjLHmaulKYXhzNbj0mxIzl7bcRmrbjqNh%2FaCoGKNAxugZm%2FLaF0ZmbxeSO81V6HBsAnN%2BW0so0LDfgLo5r%2BCnlpCYuyl5zGd3fw6UAS2VM48eu0HR8Zn5lkyu7pA4kujL9pfVo%2Bi9Q%2BwcQUV0Wwq4vK7iD%2FxLzIW60MehilQFX9rdguKWLLFQw7U8n2aUjB5xIiEGCjjFckpnGA3L8ePZhaTywM0ZPHOZJenNO%2BIiufTIggxKfwZz9koXJ7V9bjUYeHXylUUB9QgQiuEUbZXZuZRX7QmH0BtHlhOYbbNj%2BLi0B7Q5JPoANcDoPcO8Vav6q3vkchtq1j1kGCKhYqUeDVwWsK8WcxfLYvcgmQJ%2FOuMPxFiD2MZn0yC7X58T%2Fvt9hHVsvD4vMmLnXEvKHE%2FDZsGqE1RZbc9d2%2FsGxHZOgrNJZxEGmX7ixk366F%2BCWUYyJBcKcV8xylx6FqSAiyfIlFBeJPV7UcD8suQxTWKrfH%2FoZ6oe5kC80CBxHLBDJTxtC0zZl5ORDErNSnKMKXP88EGOqUBLoGlJCZFvRILVPWHhVHqcmFBInzPUe%2BUOV6E3biUwYPXhzDipVM6UwImtY56eDBevRkRIvvs8C8r2gmRyaZQqN%2FCj8sSso7e0%2BTceIAIdf3cryRgvYm0HhBSvIjvjCMdiVDfhgehoQfIQUnI7p6cU4gsuY097eU1IboiueQcnoQx9glSVT%2BBEHukko6wgsNgrogsLhFLS6zLBHtkq93ldK%2BHoPYn&X-Amz-Signature=dab6fc89c8338ac7b5875da14af7f38197be6d6340da7bc0c33b98c8625324f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WGZGOG4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEWBDzzZ7%2F%2FOLIF9rdeagNdyvuOsbbDubtmst6xZTbx3AiEA8%2BKy4XmXdUeqnRdG2bubcTNHoTr2GYtHhksTJZ%2F2FGgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrkAyz12DThKoqTLircA1EH1sBHFgtXThnQfFdgOb%2B6%2F2vu%2FlWpg2LDyhkqiRgCkNhw4SwQhSh%2B6pcw%2FNV4CFiG1i9RbT33Dk41kheKctDPN7IXtLlB%2F%2FE9VDTyI%2F%2B8rjLHmaulKYXhzNbj0mxIzl7bcRmrbjqNh%2FaCoGKNAxugZm%2FLaF0ZmbxeSO81V6HBsAnN%2BW0so0LDfgLo5r%2BCnlpCYuyl5zGd3fw6UAS2VM48eu0HR8Zn5lkyu7pA4kujL9pfVo%2Bi9Q%2BwcQUV0Wwq4vK7iD%2FxLzIW60MehilQFX9rdguKWLLFQw7U8n2aUjB5xIiEGCjjFckpnGA3L8ePZhaTywM0ZPHOZJenNO%2BIiufTIggxKfwZz9koXJ7V9bjUYeHXylUUB9QgQiuEUbZXZuZRX7QmH0BtHlhOYbbNj%2BLi0B7Q5JPoANcDoPcO8Vav6q3vkchtq1j1kGCKhYqUeDVwWsK8WcxfLYvcgmQJ%2FOuMPxFiD2MZn0yC7X58T%2Fvt9hHVsvD4vMmLnXEvKHE%2FDZsGqE1RZbc9d2%2FsGxHZOgrNJZxEGmX7ixk366F%2BCWUYyJBcKcV8xylx6FqSAiyfIlFBeJPV7UcD8suQxTWKrfH%2FoZ6oe5kC80CBxHLBDJTxtC0zZl5ORDErNSnKMKXP88EGOqUBLoGlJCZFvRILVPWHhVHqcmFBInzPUe%2BUOV6E3biUwYPXhzDipVM6UwImtY56eDBevRkRIvvs8C8r2gmRyaZQqN%2FCj8sSso7e0%2BTceIAIdf3cryRgvYm0HhBSvIjvjCMdiVDfhgehoQfIQUnI7p6cU4gsuY097eU1IboiueQcnoQx9glSVT%2BBEHukko6wgsNgrogsLhFLS6zLBHtkq93ldK%2BHoPYn&X-Amz-Signature=a4d2b11ed4c8935334e724fbbf92ea613b1e08e7258725f05ac0e303fb99c560&X-Amz-SignedHeaders=host&x-id=GetObject)
