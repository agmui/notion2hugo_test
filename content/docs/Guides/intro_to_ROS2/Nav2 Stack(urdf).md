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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGESKTJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BDgfHpWAFGs2TTWR6Uc3Ay5wcAu0HHOOy7dVFWVVbiAiAkFBaVEDHO9UkEZgN0Az5nm%2Bv4RxjqBbB4%2BuGSRwA8ACqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv0CbCFmyxL9jk%2BLaKtwD7rpqCeW9Jbp8ws%2FLV4yCQ20TkBXgW%2B%2FPZSaAKx0Dmi4Cv%2F1piMFicfTK9tmOdN1ngfdn%2BJKklZmEr%2FwrvMSEXAdIv%2FRyZemwvjddS3tCe0DZn0ic2DHRiBXEp5amTnvnuYAn%2BJ8tsRpig8MxqIPLFuttvdgZiNiuIoxNS%2B7Ojf9JEzCC1csau0ZBVAaQ80anptltaN8BYB6kUH%2BRKJnRHf5W9YSv5NnwAlgcMU10gxM0I4ISNp1AgFa4Dz1tSwyz4l3kH6RRqCZgE7wcgyVqy3HYF3EVscRiHwBfkh0DMXpnYQhbf5%2BbtN1cZqXdg1aOnYvRexKemMDt8V%2FGhy1vAmHlycjYousWGgKv25cUBesZmLmXrSDytES2N3k8szgd0KNH6vj%2BdBcZaxrfyHR9L%2B6%2BuuaGlVOqqO6Gc5LMf31uaZvpeQkdDhJdUYVCwwwo9l6uhnyOsLwN%2BpJOSH%2BJEOa0ovx49o4MV9%2F6iLVeLrilKYmfkudP3qPdc5kvL7X3XRtFoLhECeGUqM%2FynYJ0%2FFE3XVpT7ONktPXkj6HXuOsPDH2n5474Sd7SUYG33iHp6YZmCHy3y00K7u51v%2FGl0Vs%2F17WHuE0QK%2Bg8vgoFYa%2Bpry3E4nm%2Fxcqh3Jkw1Y%2F%2FwgY6pgGTm4rPfizqHHl4f%2BHRgbLkEmqLhonts7LtWQWM%2B6yaC0v3CYG%2FblCPUeig7T5B6BUG6WFVtrEZsZLh4NQBDHgmgPxajExXKMiZltZy1v0AZNcDchW9FGxtvzJbe%2FprAPbo8LRSAtVESrJiaN%2FepWjg6DRPbrrYF7rO5S966841Fofw%2Bi6Fm%2FQyHfMGCR%2FxKEnxEjXEF%2BwkgmKcO%2FVLKHoJy7GGekPb&X-Amz-Signature=5cd82a20487319835fa0030ef74e470e32e2ad00e89d9edec80c0613f62c86f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGESKTJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BDgfHpWAFGs2TTWR6Uc3Ay5wcAu0HHOOy7dVFWVVbiAiAkFBaVEDHO9UkEZgN0Az5nm%2Bv4RxjqBbB4%2BuGSRwA8ACqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv0CbCFmyxL9jk%2BLaKtwD7rpqCeW9Jbp8ws%2FLV4yCQ20TkBXgW%2B%2FPZSaAKx0Dmi4Cv%2F1piMFicfTK9tmOdN1ngfdn%2BJKklZmEr%2FwrvMSEXAdIv%2FRyZemwvjddS3tCe0DZn0ic2DHRiBXEp5amTnvnuYAn%2BJ8tsRpig8MxqIPLFuttvdgZiNiuIoxNS%2B7Ojf9JEzCC1csau0ZBVAaQ80anptltaN8BYB6kUH%2BRKJnRHf5W9YSv5NnwAlgcMU10gxM0I4ISNp1AgFa4Dz1tSwyz4l3kH6RRqCZgE7wcgyVqy3HYF3EVscRiHwBfkh0DMXpnYQhbf5%2BbtN1cZqXdg1aOnYvRexKemMDt8V%2FGhy1vAmHlycjYousWGgKv25cUBesZmLmXrSDytES2N3k8szgd0KNH6vj%2BdBcZaxrfyHR9L%2B6%2BuuaGlVOqqO6Gc5LMf31uaZvpeQkdDhJdUYVCwwwo9l6uhnyOsLwN%2BpJOSH%2BJEOa0ovx49o4MV9%2F6iLVeLrilKYmfkudP3qPdc5kvL7X3XRtFoLhECeGUqM%2FynYJ0%2FFE3XVpT7ONktPXkj6HXuOsPDH2n5474Sd7SUYG33iHp6YZmCHy3y00K7u51v%2FGl0Vs%2F17WHuE0QK%2Bg8vgoFYa%2Bpry3E4nm%2Fxcqh3Jkw1Y%2F%2FwgY6pgGTm4rPfizqHHl4f%2BHRgbLkEmqLhonts7LtWQWM%2B6yaC0v3CYG%2FblCPUeig7T5B6BUG6WFVtrEZsZLh4NQBDHgmgPxajExXKMiZltZy1v0AZNcDchW9FGxtvzJbe%2FprAPbo8LRSAtVESrJiaN%2FepWjg6DRPbrrYF7rO5S966841Fofw%2Bi6Fm%2FQyHfMGCR%2FxKEnxEjXEF%2BwkgmKcO%2FVLKHoJy7GGekPb&X-Amz-Signature=9610c310ca2cbd1ecd86d00325683a7c93ec8ed1289a05e497105f786535bc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGESKTJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BDgfHpWAFGs2TTWR6Uc3Ay5wcAu0HHOOy7dVFWVVbiAiAkFBaVEDHO9UkEZgN0Az5nm%2Bv4RxjqBbB4%2BuGSRwA8ACqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv0CbCFmyxL9jk%2BLaKtwD7rpqCeW9Jbp8ws%2FLV4yCQ20TkBXgW%2B%2FPZSaAKx0Dmi4Cv%2F1piMFicfTK9tmOdN1ngfdn%2BJKklZmEr%2FwrvMSEXAdIv%2FRyZemwvjddS3tCe0DZn0ic2DHRiBXEp5amTnvnuYAn%2BJ8tsRpig8MxqIPLFuttvdgZiNiuIoxNS%2B7Ojf9JEzCC1csau0ZBVAaQ80anptltaN8BYB6kUH%2BRKJnRHf5W9YSv5NnwAlgcMU10gxM0I4ISNp1AgFa4Dz1tSwyz4l3kH6RRqCZgE7wcgyVqy3HYF3EVscRiHwBfkh0DMXpnYQhbf5%2BbtN1cZqXdg1aOnYvRexKemMDt8V%2FGhy1vAmHlycjYousWGgKv25cUBesZmLmXrSDytES2N3k8szgd0KNH6vj%2BdBcZaxrfyHR9L%2B6%2BuuaGlVOqqO6Gc5LMf31uaZvpeQkdDhJdUYVCwwwo9l6uhnyOsLwN%2BpJOSH%2BJEOa0ovx49o4MV9%2F6iLVeLrilKYmfkudP3qPdc5kvL7X3XRtFoLhECeGUqM%2FynYJ0%2FFE3XVpT7ONktPXkj6HXuOsPDH2n5474Sd7SUYG33iHp6YZmCHy3y00K7u51v%2FGl0Vs%2F17WHuE0QK%2Bg8vgoFYa%2Bpry3E4nm%2Fxcqh3Jkw1Y%2F%2FwgY6pgGTm4rPfizqHHl4f%2BHRgbLkEmqLhonts7LtWQWM%2B6yaC0v3CYG%2FblCPUeig7T5B6BUG6WFVtrEZsZLh4NQBDHgmgPxajExXKMiZltZy1v0AZNcDchW9FGxtvzJbe%2FprAPbo8LRSAtVESrJiaN%2FepWjg6DRPbrrYF7rO5S966841Fofw%2Bi6Fm%2FQyHfMGCR%2FxKEnxEjXEF%2BwkgmKcO%2FVLKHoJy7GGekPb&X-Amz-Signature=6301eb92fccfd31352b028d639920da4ac4815d6a70560cc59a4e8ec41529651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGESKTJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BDgfHpWAFGs2TTWR6Uc3Ay5wcAu0HHOOy7dVFWVVbiAiAkFBaVEDHO9UkEZgN0Az5nm%2Bv4RxjqBbB4%2BuGSRwA8ACqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv0CbCFmyxL9jk%2BLaKtwD7rpqCeW9Jbp8ws%2FLV4yCQ20TkBXgW%2B%2FPZSaAKx0Dmi4Cv%2F1piMFicfTK9tmOdN1ngfdn%2BJKklZmEr%2FwrvMSEXAdIv%2FRyZemwvjddS3tCe0DZn0ic2DHRiBXEp5amTnvnuYAn%2BJ8tsRpig8MxqIPLFuttvdgZiNiuIoxNS%2B7Ojf9JEzCC1csau0ZBVAaQ80anptltaN8BYB6kUH%2BRKJnRHf5W9YSv5NnwAlgcMU10gxM0I4ISNp1AgFa4Dz1tSwyz4l3kH6RRqCZgE7wcgyVqy3HYF3EVscRiHwBfkh0DMXpnYQhbf5%2BbtN1cZqXdg1aOnYvRexKemMDt8V%2FGhy1vAmHlycjYousWGgKv25cUBesZmLmXrSDytES2N3k8szgd0KNH6vj%2BdBcZaxrfyHR9L%2B6%2BuuaGlVOqqO6Gc5LMf31uaZvpeQkdDhJdUYVCwwwo9l6uhnyOsLwN%2BpJOSH%2BJEOa0ovx49o4MV9%2F6iLVeLrilKYmfkudP3qPdc5kvL7X3XRtFoLhECeGUqM%2FynYJ0%2FFE3XVpT7ONktPXkj6HXuOsPDH2n5474Sd7SUYG33iHp6YZmCHy3y00K7u51v%2FGl0Vs%2F17WHuE0QK%2Bg8vgoFYa%2Bpry3E4nm%2Fxcqh3Jkw1Y%2F%2FwgY6pgGTm4rPfizqHHl4f%2BHRgbLkEmqLhonts7LtWQWM%2B6yaC0v3CYG%2FblCPUeig7T5B6BUG6WFVtrEZsZLh4NQBDHgmgPxajExXKMiZltZy1v0AZNcDchW9FGxtvzJbe%2FprAPbo8LRSAtVESrJiaN%2FepWjg6DRPbrrYF7rO5S966841Fofw%2Bi6Fm%2FQyHfMGCR%2FxKEnxEjXEF%2BwkgmKcO%2FVLKHoJy7GGekPb&X-Amz-Signature=57fbab0ee836ddfb4a8c85b14b6c4070122bcd4e35e8e5f5dec823ee2ec48d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGESKTJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BDgfHpWAFGs2TTWR6Uc3Ay5wcAu0HHOOy7dVFWVVbiAiAkFBaVEDHO9UkEZgN0Az5nm%2Bv4RxjqBbB4%2BuGSRwA8ACqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv0CbCFmyxL9jk%2BLaKtwD7rpqCeW9Jbp8ws%2FLV4yCQ20TkBXgW%2B%2FPZSaAKx0Dmi4Cv%2F1piMFicfTK9tmOdN1ngfdn%2BJKklZmEr%2FwrvMSEXAdIv%2FRyZemwvjddS3tCe0DZn0ic2DHRiBXEp5amTnvnuYAn%2BJ8tsRpig8MxqIPLFuttvdgZiNiuIoxNS%2B7Ojf9JEzCC1csau0ZBVAaQ80anptltaN8BYB6kUH%2BRKJnRHf5W9YSv5NnwAlgcMU10gxM0I4ISNp1AgFa4Dz1tSwyz4l3kH6RRqCZgE7wcgyVqy3HYF3EVscRiHwBfkh0DMXpnYQhbf5%2BbtN1cZqXdg1aOnYvRexKemMDt8V%2FGhy1vAmHlycjYousWGgKv25cUBesZmLmXrSDytES2N3k8szgd0KNH6vj%2BdBcZaxrfyHR9L%2B6%2BuuaGlVOqqO6Gc5LMf31uaZvpeQkdDhJdUYVCwwwo9l6uhnyOsLwN%2BpJOSH%2BJEOa0ovx49o4MV9%2F6iLVeLrilKYmfkudP3qPdc5kvL7X3XRtFoLhECeGUqM%2FynYJ0%2FFE3XVpT7ONktPXkj6HXuOsPDH2n5474Sd7SUYG33iHp6YZmCHy3y00K7u51v%2FGl0Vs%2F17WHuE0QK%2Bg8vgoFYa%2Bpry3E4nm%2Fxcqh3Jkw1Y%2F%2FwgY6pgGTm4rPfizqHHl4f%2BHRgbLkEmqLhonts7LtWQWM%2B6yaC0v3CYG%2FblCPUeig7T5B6BUG6WFVtrEZsZLh4NQBDHgmgPxajExXKMiZltZy1v0AZNcDchW9FGxtvzJbe%2FprAPbo8LRSAtVESrJiaN%2FepWjg6DRPbrrYF7rO5S966841Fofw%2Bi6Fm%2FQyHfMGCR%2FxKEnxEjXEF%2BwkgmKcO%2FVLKHoJy7GGekPb&X-Amz-Signature=b7d9d930da344480310b5a40d8686f6d30ef1a7c718e95228c581846b646d398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UGESKTJ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BDgfHpWAFGs2TTWR6Uc3Ay5wcAu0HHOOy7dVFWVVbiAiAkFBaVEDHO9UkEZgN0Az5nm%2Bv4RxjqBbB4%2BuGSRwA8ACqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv0CbCFmyxL9jk%2BLaKtwD7rpqCeW9Jbp8ws%2FLV4yCQ20TkBXgW%2B%2FPZSaAKx0Dmi4Cv%2F1piMFicfTK9tmOdN1ngfdn%2BJKklZmEr%2FwrvMSEXAdIv%2FRyZemwvjddS3tCe0DZn0ic2DHRiBXEp5amTnvnuYAn%2BJ8tsRpig8MxqIPLFuttvdgZiNiuIoxNS%2B7Ojf9JEzCC1csau0ZBVAaQ80anptltaN8BYB6kUH%2BRKJnRHf5W9YSv5NnwAlgcMU10gxM0I4ISNp1AgFa4Dz1tSwyz4l3kH6RRqCZgE7wcgyVqy3HYF3EVscRiHwBfkh0DMXpnYQhbf5%2BbtN1cZqXdg1aOnYvRexKemMDt8V%2FGhy1vAmHlycjYousWGgKv25cUBesZmLmXrSDytES2N3k8szgd0KNH6vj%2BdBcZaxrfyHR9L%2B6%2BuuaGlVOqqO6Gc5LMf31uaZvpeQkdDhJdUYVCwwwo9l6uhnyOsLwN%2BpJOSH%2BJEOa0ovx49o4MV9%2F6iLVeLrilKYmfkudP3qPdc5kvL7X3XRtFoLhECeGUqM%2FynYJ0%2FFE3XVpT7ONktPXkj6HXuOsPDH2n5474Sd7SUYG33iHp6YZmCHy3y00K7u51v%2FGl0Vs%2F17WHuE0QK%2Bg8vgoFYa%2Bpry3E4nm%2Fxcqh3Jkw1Y%2F%2FwgY6pgGTm4rPfizqHHl4f%2BHRgbLkEmqLhonts7LtWQWM%2B6yaC0v3CYG%2FblCPUeig7T5B6BUG6WFVtrEZsZLh4NQBDHgmgPxajExXKMiZltZy1v0AZNcDchW9FGxtvzJbe%2FprAPbo8LRSAtVESrJiaN%2FepWjg6DRPbrrYF7rO5S966841Fofw%2Bi6Fm%2FQyHfMGCR%2FxKEnxEjXEF%2BwkgmKcO%2FVLKHoJy7GGekPb&X-Amz-Signature=ed77c2b09e6deff2a6de93551b6f8046cc8040770be088dd3346f7d0f50e2995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
