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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZYFP2W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrzcR0DxHCgnyE3%2Bc6MtJH9VLrAjOacR3PJ6yygo7J9QIgIOMh87NSchv1KKoU2KC6Odqm9RtX%2BDnMlHAPw%2BKbawMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnAoRjQdyPqAFrdESrcA9K6HHVVA3F8nKjDSmPPI9z3qZn5HJOdcIX6r%2Bhvv%2B7A1K3c622PfbrxfEO%2BKC9fRNMGF20agXxiiTysXPrIuEk%2BBv07QVBWPsq0aZmoAC0%2Bf773qjz2GGZWtRbHuhwkeaA1SwXBtDb1l24fiWzNxHp5GzXFM4prItColc2UybX0nWNavbOn%2Bb7C%2BtlgH%2BtVpod485AG5bd0c0maaMBgoyCtA54brxHGdji%2FVxREpyLkeo2hG5UKtGIPDyfKXD5wRgDAT5NiSEfNv2Mrz9nSYTqC4ts2LfYyMt7m1HZ0GdoctSn%2BVaqo1qG1U95gZqxOzXbZgNpfVumb%2F6cKp%2B1a97QO%2BVQUqTvg2I%2FrDB30Ranf1k76zjme3ahymcs8bF9C1ajMx04bYRpTztxB01qvZNKWMxB%2BjHjReCgaS0iK2N9R%2Fl%2BWL1xR%2FRHO%2FFp9pGZhidDC5iYPJXSBfOJ2mOkVFJ5%2BFIjbR8dVsChVtJa4OfEua49DIhNGoFT7ri0HWvj0XljdMQz7dWTaE4OB%2B8bVZ7fBqa8Zt5HhW0itmjUVsm%2BwL%2BIFD1%2BFPGd89%2F1XHWR%2Baf1k%2BmrtumLJNZYth2DMQZuJpDABOcDJt4ZSfbPV1rRpwoFtT%2BhZlPKuB0xfMOuCvsAGOqUBR8lA3L6oB1jWmoE5GVotMJ%2FqW5kLJQ4B13tQjM8kzd1qeN3Ex8fkB3h0VwHjNEHMj5rFoIHQaRVi9gfhpXwljVTcQxJmTc9P0Q4XiTYvSkDR3RXFFsY1nOguLDyCdoNDfsImelGyEPELBWZuCd%2BXOPX6IS0hW22v%2F4C6DiK01ZgaX6vIq4x0b7%2BazxN2J4FgZkOuAfTIWROJriJs%2FNnBf4fZHDZL&X-Amz-Signature=b39310a45e4e0c72504e2740e4fd03da42e7cf9c1878f1a17da5c1c5d53651d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZYFP2W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrzcR0DxHCgnyE3%2Bc6MtJH9VLrAjOacR3PJ6yygo7J9QIgIOMh87NSchv1KKoU2KC6Odqm9RtX%2BDnMlHAPw%2BKbawMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnAoRjQdyPqAFrdESrcA9K6HHVVA3F8nKjDSmPPI9z3qZn5HJOdcIX6r%2Bhvv%2B7A1K3c622PfbrxfEO%2BKC9fRNMGF20agXxiiTysXPrIuEk%2BBv07QVBWPsq0aZmoAC0%2Bf773qjz2GGZWtRbHuhwkeaA1SwXBtDb1l24fiWzNxHp5GzXFM4prItColc2UybX0nWNavbOn%2Bb7C%2BtlgH%2BtVpod485AG5bd0c0maaMBgoyCtA54brxHGdji%2FVxREpyLkeo2hG5UKtGIPDyfKXD5wRgDAT5NiSEfNv2Mrz9nSYTqC4ts2LfYyMt7m1HZ0GdoctSn%2BVaqo1qG1U95gZqxOzXbZgNpfVumb%2F6cKp%2B1a97QO%2BVQUqTvg2I%2FrDB30Ranf1k76zjme3ahymcs8bF9C1ajMx04bYRpTztxB01qvZNKWMxB%2BjHjReCgaS0iK2N9R%2Fl%2BWL1xR%2FRHO%2FFp9pGZhidDC5iYPJXSBfOJ2mOkVFJ5%2BFIjbR8dVsChVtJa4OfEua49DIhNGoFT7ri0HWvj0XljdMQz7dWTaE4OB%2B8bVZ7fBqa8Zt5HhW0itmjUVsm%2BwL%2BIFD1%2BFPGd89%2F1XHWR%2Baf1k%2BmrtumLJNZYth2DMQZuJpDABOcDJt4ZSfbPV1rRpwoFtT%2BhZlPKuB0xfMOuCvsAGOqUBR8lA3L6oB1jWmoE5GVotMJ%2FqW5kLJQ4B13tQjM8kzd1qeN3Ex8fkB3h0VwHjNEHMj5rFoIHQaRVi9gfhpXwljVTcQxJmTc9P0Q4XiTYvSkDR3RXFFsY1nOguLDyCdoNDfsImelGyEPELBWZuCd%2BXOPX6IS0hW22v%2F4C6DiK01ZgaX6vIq4x0b7%2BazxN2J4FgZkOuAfTIWROJriJs%2FNnBf4fZHDZL&X-Amz-Signature=811516c1711e2693c081fe5740d0c09bf5fc6ae9f406771f68344f8b19fb118a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZYFP2W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrzcR0DxHCgnyE3%2Bc6MtJH9VLrAjOacR3PJ6yygo7J9QIgIOMh87NSchv1KKoU2KC6Odqm9RtX%2BDnMlHAPw%2BKbawMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnAoRjQdyPqAFrdESrcA9K6HHVVA3F8nKjDSmPPI9z3qZn5HJOdcIX6r%2Bhvv%2B7A1K3c622PfbrxfEO%2BKC9fRNMGF20agXxiiTysXPrIuEk%2BBv07QVBWPsq0aZmoAC0%2Bf773qjz2GGZWtRbHuhwkeaA1SwXBtDb1l24fiWzNxHp5GzXFM4prItColc2UybX0nWNavbOn%2Bb7C%2BtlgH%2BtVpod485AG5bd0c0maaMBgoyCtA54brxHGdji%2FVxREpyLkeo2hG5UKtGIPDyfKXD5wRgDAT5NiSEfNv2Mrz9nSYTqC4ts2LfYyMt7m1HZ0GdoctSn%2BVaqo1qG1U95gZqxOzXbZgNpfVumb%2F6cKp%2B1a97QO%2BVQUqTvg2I%2FrDB30Ranf1k76zjme3ahymcs8bF9C1ajMx04bYRpTztxB01qvZNKWMxB%2BjHjReCgaS0iK2N9R%2Fl%2BWL1xR%2FRHO%2FFp9pGZhidDC5iYPJXSBfOJ2mOkVFJ5%2BFIjbR8dVsChVtJa4OfEua49DIhNGoFT7ri0HWvj0XljdMQz7dWTaE4OB%2B8bVZ7fBqa8Zt5HhW0itmjUVsm%2BwL%2BIFD1%2BFPGd89%2F1XHWR%2Baf1k%2BmrtumLJNZYth2DMQZuJpDABOcDJt4ZSfbPV1rRpwoFtT%2BhZlPKuB0xfMOuCvsAGOqUBR8lA3L6oB1jWmoE5GVotMJ%2FqW5kLJQ4B13tQjM8kzd1qeN3Ex8fkB3h0VwHjNEHMj5rFoIHQaRVi9gfhpXwljVTcQxJmTc9P0Q4XiTYvSkDR3RXFFsY1nOguLDyCdoNDfsImelGyEPELBWZuCd%2BXOPX6IS0hW22v%2F4C6DiK01ZgaX6vIq4x0b7%2BazxN2J4FgZkOuAfTIWROJriJs%2FNnBf4fZHDZL&X-Amz-Signature=a879f9f27594632a8fa386a1eac8aff858f1492bb0713a15f387710eafc0186e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZYFP2W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrzcR0DxHCgnyE3%2Bc6MtJH9VLrAjOacR3PJ6yygo7J9QIgIOMh87NSchv1KKoU2KC6Odqm9RtX%2BDnMlHAPw%2BKbawMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnAoRjQdyPqAFrdESrcA9K6HHVVA3F8nKjDSmPPI9z3qZn5HJOdcIX6r%2Bhvv%2B7A1K3c622PfbrxfEO%2BKC9fRNMGF20agXxiiTysXPrIuEk%2BBv07QVBWPsq0aZmoAC0%2Bf773qjz2GGZWtRbHuhwkeaA1SwXBtDb1l24fiWzNxHp5GzXFM4prItColc2UybX0nWNavbOn%2Bb7C%2BtlgH%2BtVpod485AG5bd0c0maaMBgoyCtA54brxHGdji%2FVxREpyLkeo2hG5UKtGIPDyfKXD5wRgDAT5NiSEfNv2Mrz9nSYTqC4ts2LfYyMt7m1HZ0GdoctSn%2BVaqo1qG1U95gZqxOzXbZgNpfVumb%2F6cKp%2B1a97QO%2BVQUqTvg2I%2FrDB30Ranf1k76zjme3ahymcs8bF9C1ajMx04bYRpTztxB01qvZNKWMxB%2BjHjReCgaS0iK2N9R%2Fl%2BWL1xR%2FRHO%2FFp9pGZhidDC5iYPJXSBfOJ2mOkVFJ5%2BFIjbR8dVsChVtJa4OfEua49DIhNGoFT7ri0HWvj0XljdMQz7dWTaE4OB%2B8bVZ7fBqa8Zt5HhW0itmjUVsm%2BwL%2BIFD1%2BFPGd89%2F1XHWR%2Baf1k%2BmrtumLJNZYth2DMQZuJpDABOcDJt4ZSfbPV1rRpwoFtT%2BhZlPKuB0xfMOuCvsAGOqUBR8lA3L6oB1jWmoE5GVotMJ%2FqW5kLJQ4B13tQjM8kzd1qeN3Ex8fkB3h0VwHjNEHMj5rFoIHQaRVi9gfhpXwljVTcQxJmTc9P0Q4XiTYvSkDR3RXFFsY1nOguLDyCdoNDfsImelGyEPELBWZuCd%2BXOPX6IS0hW22v%2F4C6DiK01ZgaX6vIq4x0b7%2BazxN2J4FgZkOuAfTIWROJriJs%2FNnBf4fZHDZL&X-Amz-Signature=71e5b4f05b33596092927606456081a21fe26d340856826e0b5d80bf3dcb0d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZYFP2W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrzcR0DxHCgnyE3%2Bc6MtJH9VLrAjOacR3PJ6yygo7J9QIgIOMh87NSchv1KKoU2KC6Odqm9RtX%2BDnMlHAPw%2BKbawMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnAoRjQdyPqAFrdESrcA9K6HHVVA3F8nKjDSmPPI9z3qZn5HJOdcIX6r%2Bhvv%2B7A1K3c622PfbrxfEO%2BKC9fRNMGF20agXxiiTysXPrIuEk%2BBv07QVBWPsq0aZmoAC0%2Bf773qjz2GGZWtRbHuhwkeaA1SwXBtDb1l24fiWzNxHp5GzXFM4prItColc2UybX0nWNavbOn%2Bb7C%2BtlgH%2BtVpod485AG5bd0c0maaMBgoyCtA54brxHGdji%2FVxREpyLkeo2hG5UKtGIPDyfKXD5wRgDAT5NiSEfNv2Mrz9nSYTqC4ts2LfYyMt7m1HZ0GdoctSn%2BVaqo1qG1U95gZqxOzXbZgNpfVumb%2F6cKp%2B1a97QO%2BVQUqTvg2I%2FrDB30Ranf1k76zjme3ahymcs8bF9C1ajMx04bYRpTztxB01qvZNKWMxB%2BjHjReCgaS0iK2N9R%2Fl%2BWL1xR%2FRHO%2FFp9pGZhidDC5iYPJXSBfOJ2mOkVFJ5%2BFIjbR8dVsChVtJa4OfEua49DIhNGoFT7ri0HWvj0XljdMQz7dWTaE4OB%2B8bVZ7fBqa8Zt5HhW0itmjUVsm%2BwL%2BIFD1%2BFPGd89%2F1XHWR%2Baf1k%2BmrtumLJNZYth2DMQZuJpDABOcDJt4ZSfbPV1rRpwoFtT%2BhZlPKuB0xfMOuCvsAGOqUBR8lA3L6oB1jWmoE5GVotMJ%2FqW5kLJQ4B13tQjM8kzd1qeN3Ex8fkB3h0VwHjNEHMj5rFoIHQaRVi9gfhpXwljVTcQxJmTc9P0Q4XiTYvSkDR3RXFFsY1nOguLDyCdoNDfsImelGyEPELBWZuCd%2BXOPX6IS0hW22v%2F4C6DiK01ZgaX6vIq4x0b7%2BazxN2J4FgZkOuAfTIWROJriJs%2FNnBf4fZHDZL&X-Amz-Signature=674f97d7f0dc879f891bb8a7d9ba4a6c6d692a258b5672a9374a5e4e67cb54cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZYFP2W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrzcR0DxHCgnyE3%2Bc6MtJH9VLrAjOacR3PJ6yygo7J9QIgIOMh87NSchv1KKoU2KC6Odqm9RtX%2BDnMlHAPw%2BKbawMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHnAoRjQdyPqAFrdESrcA9K6HHVVA3F8nKjDSmPPI9z3qZn5HJOdcIX6r%2Bhvv%2B7A1K3c622PfbrxfEO%2BKC9fRNMGF20agXxiiTysXPrIuEk%2BBv07QVBWPsq0aZmoAC0%2Bf773qjz2GGZWtRbHuhwkeaA1SwXBtDb1l24fiWzNxHp5GzXFM4prItColc2UybX0nWNavbOn%2Bb7C%2BtlgH%2BtVpod485AG5bd0c0maaMBgoyCtA54brxHGdji%2FVxREpyLkeo2hG5UKtGIPDyfKXD5wRgDAT5NiSEfNv2Mrz9nSYTqC4ts2LfYyMt7m1HZ0GdoctSn%2BVaqo1qG1U95gZqxOzXbZgNpfVumb%2F6cKp%2B1a97QO%2BVQUqTvg2I%2FrDB30Ranf1k76zjme3ahymcs8bF9C1ajMx04bYRpTztxB01qvZNKWMxB%2BjHjReCgaS0iK2N9R%2Fl%2BWL1xR%2FRHO%2FFp9pGZhidDC5iYPJXSBfOJ2mOkVFJ5%2BFIjbR8dVsChVtJa4OfEua49DIhNGoFT7ri0HWvj0XljdMQz7dWTaE4OB%2B8bVZ7fBqa8Zt5HhW0itmjUVsm%2BwL%2BIFD1%2BFPGd89%2F1XHWR%2Baf1k%2BmrtumLJNZYth2DMQZuJpDABOcDJt4ZSfbPV1rRpwoFtT%2BhZlPKuB0xfMOuCvsAGOqUBR8lA3L6oB1jWmoE5GVotMJ%2FqW5kLJQ4B13tQjM8kzd1qeN3Ex8fkB3h0VwHjNEHMj5rFoIHQaRVi9gfhpXwljVTcQxJmTc9P0Q4XiTYvSkDR3RXFFsY1nOguLDyCdoNDfsImelGyEPELBWZuCd%2BXOPX6IS0hW22v%2F4C6DiK01ZgaX6vIq4x0b7%2BazxN2J4FgZkOuAfTIWROJriJs%2FNnBf4fZHDZL&X-Amz-Signature=07b9d9d9135c63bc0177dfd044fea3d867fe5e7935765c485f313b1485ef6d5e&X-Amz-SignedHeaders=host&x-id=GetObject)
