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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHHU33Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKSu5DBcw2DRf5Oc6vqxslTGyKyx94wSaVlcV81175QIhANnVg5Sl255jKBVAt8%2BEfzKXi7HGgm%2B7TTS2uAh9CHBiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8vAS%2B%2F4DhwK3nqeMq3ANJ%2FNF2Swy%2BkDGdS1b91dzZK8Mg9f7SLOzFy7%2B9hc5P7iZWE1dNzzKNQ24WqXH7DJCafRxl%2BkBknqnDQ%2FMwy1FmAoLYxwKrmtqPbgnNjiATG163shk5S9%2Bgw8ZlEhjBlZxyJAdwGFSHZSyluNhLhpsLg6hEZxnTViEdhnQAO50mF6IjhL8JuqtBVutk%2BmnAhfEnJplz59ilyzFHp%2F39qNgF6I9R%2BxqohJk7TvrfFMT%2By7Q7FKj3eVHBN7%2FAQillD%2FghIsEQdDPKwMpmRFqmzz2Zmp71Lj4MYVQxsKUnckxRpDwiI6h%2FWd3YcOzRV2kHYi90hr%2Fr9TYMkwt0MJXBaX0G%2Fan48AcKkewnEdDn5O4o7IUO%2BFTfLIkkjGLcuxzsGJYDgcjz1uFuemX0JWJ4oJsesCa3ObCKp5ksxCaO7lUZlVkZg38Z3lgSHZplp7UtloAPvFaPnd7%2F11cNHyc%2BEyDYZI9cQEPjuTsnp5%2F%2Br4ltmkCMdavE4NZJ3ZZwNUT1%2Fwz21dglBDGFM9UXUhaRSPt%2F4Kxv4yzcsJbR2adBJ2WrAuWb%2FtESGcWWXej%2BFp0W3KN2ZANSF%2FNUtUo7QFiHL6X716hk30AIlYDxwgxKt3qKeACHJYaHr2UXjqxaZjDgnLu%2FBjqkARmbWFDRaH5voZePA%2FjlR5IMgwLupgKQiQ8jkClt%2F0VpOHazR9BM%2Fv33xH%2FxHklBMeT1XmHZXn%2FwtjYuzaVuW0cXoaptBnQm%2Fr4nXL6nncKlPrc0hhtF4fgGnhvMJ%2FyEQzz9CCBnHPBJbOJZsuYYGoE0%2Bcul33rtMjPwRDbh7cuLjJ1DXa8slcYwBIDiMPfpk22bPCyESocQ%2BhhOmvukJJNq4Vs2&X-Amz-Signature=f59c51fd734002778649ef572bed70a2dd54b1d5fdf758e6618ad8b0e58908e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHHU33Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKSu5DBcw2DRf5Oc6vqxslTGyKyx94wSaVlcV81175QIhANnVg5Sl255jKBVAt8%2BEfzKXi7HGgm%2B7TTS2uAh9CHBiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8vAS%2B%2F4DhwK3nqeMq3ANJ%2FNF2Swy%2BkDGdS1b91dzZK8Mg9f7SLOzFy7%2B9hc5P7iZWE1dNzzKNQ24WqXH7DJCafRxl%2BkBknqnDQ%2FMwy1FmAoLYxwKrmtqPbgnNjiATG163shk5S9%2Bgw8ZlEhjBlZxyJAdwGFSHZSyluNhLhpsLg6hEZxnTViEdhnQAO50mF6IjhL8JuqtBVutk%2BmnAhfEnJplz59ilyzFHp%2F39qNgF6I9R%2BxqohJk7TvrfFMT%2By7Q7FKj3eVHBN7%2FAQillD%2FghIsEQdDPKwMpmRFqmzz2Zmp71Lj4MYVQxsKUnckxRpDwiI6h%2FWd3YcOzRV2kHYi90hr%2Fr9TYMkwt0MJXBaX0G%2Fan48AcKkewnEdDn5O4o7IUO%2BFTfLIkkjGLcuxzsGJYDgcjz1uFuemX0JWJ4oJsesCa3ObCKp5ksxCaO7lUZlVkZg38Z3lgSHZplp7UtloAPvFaPnd7%2F11cNHyc%2BEyDYZI9cQEPjuTsnp5%2F%2Br4ltmkCMdavE4NZJ3ZZwNUT1%2Fwz21dglBDGFM9UXUhaRSPt%2F4Kxv4yzcsJbR2adBJ2WrAuWb%2FtESGcWWXej%2BFp0W3KN2ZANSF%2FNUtUo7QFiHL6X716hk30AIlYDxwgxKt3qKeACHJYaHr2UXjqxaZjDgnLu%2FBjqkARmbWFDRaH5voZePA%2FjlR5IMgwLupgKQiQ8jkClt%2F0VpOHazR9BM%2Fv33xH%2FxHklBMeT1XmHZXn%2FwtjYuzaVuW0cXoaptBnQm%2Fr4nXL6nncKlPrc0hhtF4fgGnhvMJ%2FyEQzz9CCBnHPBJbOJZsuYYGoE0%2Bcul33rtMjPwRDbh7cuLjJ1DXa8slcYwBIDiMPfpk22bPCyESocQ%2BhhOmvukJJNq4Vs2&X-Amz-Signature=5c1cd57d3581cb96b8a9aaaae09046b8718ede5fd1f05b825e27f773deac93fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHHU33Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKSu5DBcw2DRf5Oc6vqxslTGyKyx94wSaVlcV81175QIhANnVg5Sl255jKBVAt8%2BEfzKXi7HGgm%2B7TTS2uAh9CHBiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8vAS%2B%2F4DhwK3nqeMq3ANJ%2FNF2Swy%2BkDGdS1b91dzZK8Mg9f7SLOzFy7%2B9hc5P7iZWE1dNzzKNQ24WqXH7DJCafRxl%2BkBknqnDQ%2FMwy1FmAoLYxwKrmtqPbgnNjiATG163shk5S9%2Bgw8ZlEhjBlZxyJAdwGFSHZSyluNhLhpsLg6hEZxnTViEdhnQAO50mF6IjhL8JuqtBVutk%2BmnAhfEnJplz59ilyzFHp%2F39qNgF6I9R%2BxqohJk7TvrfFMT%2By7Q7FKj3eVHBN7%2FAQillD%2FghIsEQdDPKwMpmRFqmzz2Zmp71Lj4MYVQxsKUnckxRpDwiI6h%2FWd3YcOzRV2kHYi90hr%2Fr9TYMkwt0MJXBaX0G%2Fan48AcKkewnEdDn5O4o7IUO%2BFTfLIkkjGLcuxzsGJYDgcjz1uFuemX0JWJ4oJsesCa3ObCKp5ksxCaO7lUZlVkZg38Z3lgSHZplp7UtloAPvFaPnd7%2F11cNHyc%2BEyDYZI9cQEPjuTsnp5%2F%2Br4ltmkCMdavE4NZJ3ZZwNUT1%2Fwz21dglBDGFM9UXUhaRSPt%2F4Kxv4yzcsJbR2adBJ2WrAuWb%2FtESGcWWXej%2BFp0W3KN2ZANSF%2FNUtUo7QFiHL6X716hk30AIlYDxwgxKt3qKeACHJYaHr2UXjqxaZjDgnLu%2FBjqkARmbWFDRaH5voZePA%2FjlR5IMgwLupgKQiQ8jkClt%2F0VpOHazR9BM%2Fv33xH%2FxHklBMeT1XmHZXn%2FwtjYuzaVuW0cXoaptBnQm%2Fr4nXL6nncKlPrc0hhtF4fgGnhvMJ%2FyEQzz9CCBnHPBJbOJZsuYYGoE0%2Bcul33rtMjPwRDbh7cuLjJ1DXa8slcYwBIDiMPfpk22bPCyESocQ%2BhhOmvukJJNq4Vs2&X-Amz-Signature=15487f221928402c57f54dfe6ebc526b158c736a91776e5a20390e64d867bc19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHHU33Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKSu5DBcw2DRf5Oc6vqxslTGyKyx94wSaVlcV81175QIhANnVg5Sl255jKBVAt8%2BEfzKXi7HGgm%2B7TTS2uAh9CHBiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8vAS%2B%2F4DhwK3nqeMq3ANJ%2FNF2Swy%2BkDGdS1b91dzZK8Mg9f7SLOzFy7%2B9hc5P7iZWE1dNzzKNQ24WqXH7DJCafRxl%2BkBknqnDQ%2FMwy1FmAoLYxwKrmtqPbgnNjiATG163shk5S9%2Bgw8ZlEhjBlZxyJAdwGFSHZSyluNhLhpsLg6hEZxnTViEdhnQAO50mF6IjhL8JuqtBVutk%2BmnAhfEnJplz59ilyzFHp%2F39qNgF6I9R%2BxqohJk7TvrfFMT%2By7Q7FKj3eVHBN7%2FAQillD%2FghIsEQdDPKwMpmRFqmzz2Zmp71Lj4MYVQxsKUnckxRpDwiI6h%2FWd3YcOzRV2kHYi90hr%2Fr9TYMkwt0MJXBaX0G%2Fan48AcKkewnEdDn5O4o7IUO%2BFTfLIkkjGLcuxzsGJYDgcjz1uFuemX0JWJ4oJsesCa3ObCKp5ksxCaO7lUZlVkZg38Z3lgSHZplp7UtloAPvFaPnd7%2F11cNHyc%2BEyDYZI9cQEPjuTsnp5%2F%2Br4ltmkCMdavE4NZJ3ZZwNUT1%2Fwz21dglBDGFM9UXUhaRSPt%2F4Kxv4yzcsJbR2adBJ2WrAuWb%2FtESGcWWXej%2BFp0W3KN2ZANSF%2FNUtUo7QFiHL6X716hk30AIlYDxwgxKt3qKeACHJYaHr2UXjqxaZjDgnLu%2FBjqkARmbWFDRaH5voZePA%2FjlR5IMgwLupgKQiQ8jkClt%2F0VpOHazR9BM%2Fv33xH%2FxHklBMeT1XmHZXn%2FwtjYuzaVuW0cXoaptBnQm%2Fr4nXL6nncKlPrc0hhtF4fgGnhvMJ%2FyEQzz9CCBnHPBJbOJZsuYYGoE0%2Bcul33rtMjPwRDbh7cuLjJ1DXa8slcYwBIDiMPfpk22bPCyESocQ%2BhhOmvukJJNq4Vs2&X-Amz-Signature=684e891f6317537696311d6805620669e89005eae9300fc3145965eab9b840d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHHU33Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKSu5DBcw2DRf5Oc6vqxslTGyKyx94wSaVlcV81175QIhANnVg5Sl255jKBVAt8%2BEfzKXi7HGgm%2B7TTS2uAh9CHBiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8vAS%2B%2F4DhwK3nqeMq3ANJ%2FNF2Swy%2BkDGdS1b91dzZK8Mg9f7SLOzFy7%2B9hc5P7iZWE1dNzzKNQ24WqXH7DJCafRxl%2BkBknqnDQ%2FMwy1FmAoLYxwKrmtqPbgnNjiATG163shk5S9%2Bgw8ZlEhjBlZxyJAdwGFSHZSyluNhLhpsLg6hEZxnTViEdhnQAO50mF6IjhL8JuqtBVutk%2BmnAhfEnJplz59ilyzFHp%2F39qNgF6I9R%2BxqohJk7TvrfFMT%2By7Q7FKj3eVHBN7%2FAQillD%2FghIsEQdDPKwMpmRFqmzz2Zmp71Lj4MYVQxsKUnckxRpDwiI6h%2FWd3YcOzRV2kHYi90hr%2Fr9TYMkwt0MJXBaX0G%2Fan48AcKkewnEdDn5O4o7IUO%2BFTfLIkkjGLcuxzsGJYDgcjz1uFuemX0JWJ4oJsesCa3ObCKp5ksxCaO7lUZlVkZg38Z3lgSHZplp7UtloAPvFaPnd7%2F11cNHyc%2BEyDYZI9cQEPjuTsnp5%2F%2Br4ltmkCMdavE4NZJ3ZZwNUT1%2Fwz21dglBDGFM9UXUhaRSPt%2F4Kxv4yzcsJbR2adBJ2WrAuWb%2FtESGcWWXej%2BFp0W3KN2ZANSF%2FNUtUo7QFiHL6X716hk30AIlYDxwgxKt3qKeACHJYaHr2UXjqxaZjDgnLu%2FBjqkARmbWFDRaH5voZePA%2FjlR5IMgwLupgKQiQ8jkClt%2F0VpOHazR9BM%2Fv33xH%2FxHklBMeT1XmHZXn%2FwtjYuzaVuW0cXoaptBnQm%2Fr4nXL6nncKlPrc0hhtF4fgGnhvMJ%2FyEQzz9CCBnHPBJbOJZsuYYGoE0%2Bcul33rtMjPwRDbh7cuLjJ1DXa8slcYwBIDiMPfpk22bPCyESocQ%2BhhOmvukJJNq4Vs2&X-Amz-Signature=bdd64ae2fdd01232aeec18417703e09ce69e1aad5328c4f2ec0aa9debf5dd2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJHHU33Z%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKSu5DBcw2DRf5Oc6vqxslTGyKyx94wSaVlcV81175QIhANnVg5Sl255jKBVAt8%2BEfzKXi7HGgm%2B7TTS2uAh9CHBiKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8vAS%2B%2F4DhwK3nqeMq3ANJ%2FNF2Swy%2BkDGdS1b91dzZK8Mg9f7SLOzFy7%2B9hc5P7iZWE1dNzzKNQ24WqXH7DJCafRxl%2BkBknqnDQ%2FMwy1FmAoLYxwKrmtqPbgnNjiATG163shk5S9%2Bgw8ZlEhjBlZxyJAdwGFSHZSyluNhLhpsLg6hEZxnTViEdhnQAO50mF6IjhL8JuqtBVutk%2BmnAhfEnJplz59ilyzFHp%2F39qNgF6I9R%2BxqohJk7TvrfFMT%2By7Q7FKj3eVHBN7%2FAQillD%2FghIsEQdDPKwMpmRFqmzz2Zmp71Lj4MYVQxsKUnckxRpDwiI6h%2FWd3YcOzRV2kHYi90hr%2Fr9TYMkwt0MJXBaX0G%2Fan48AcKkewnEdDn5O4o7IUO%2BFTfLIkkjGLcuxzsGJYDgcjz1uFuemX0JWJ4oJsesCa3ObCKp5ksxCaO7lUZlVkZg38Z3lgSHZplp7UtloAPvFaPnd7%2F11cNHyc%2BEyDYZI9cQEPjuTsnp5%2F%2Br4ltmkCMdavE4NZJ3ZZwNUT1%2Fwz21dglBDGFM9UXUhaRSPt%2F4Kxv4yzcsJbR2adBJ2WrAuWb%2FtESGcWWXej%2BFp0W3KN2ZANSF%2FNUtUo7QFiHL6X716hk30AIlYDxwgxKt3qKeACHJYaHr2UXjqxaZjDgnLu%2FBjqkARmbWFDRaH5voZePA%2FjlR5IMgwLupgKQiQ8jkClt%2F0VpOHazR9BM%2Fv33xH%2FxHklBMeT1XmHZXn%2FwtjYuzaVuW0cXoaptBnQm%2Fr4nXL6nncKlPrc0hhtF4fgGnhvMJ%2FyEQzz9CCBnHPBJbOJZsuYYGoE0%2Bcul33rtMjPwRDbh7cuLjJ1DXa8slcYwBIDiMPfpk22bPCyESocQ%2BhhOmvukJJNq4Vs2&X-Amz-Signature=786ff3aa63130237b1aabdd39cc7627db0a376e3059e91922ed3dc94420e6304&X-Amz-SignedHeaders=host&x-id=GetObject)
