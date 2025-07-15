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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTDDEQV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCTfi61tXGlDCjb2KNNBzvhlOgdlixF8MqOUp4W%2Bakj1gIgeHPZ1OetW2a52Dz5IyppsIS54lcJf%2BHxpMFtMkhOQ3gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDANEIc8RYVFvpM%2FojircAxIHPAMiirH9TVwi%2BaESE91wmvFR5F4F%2F4sPdKqHGwi5Abo22Y8ZlkpHl1OEsSzl9sQu9Cea8E4xe27cR7Pi2mI1qJFUXp5pUkyqcbS61fTGBtiltCkWkwx6pKp3kobTIRPwmadowKIIikM7G3SBhj61mFLEi2C1UsC1MUV5%2BeNq6qbaQb85VSYfdTNy3%2FgDDT9i12JYvQXhpppZ%2FY0pskKAjWB2P5uWIDfN51ZGX%2BFs7xLyjzQu1Sxh2D9oxl41InhQ4vuwRB2x%2BbjBKCaTSTgp6%2BQ%2FGYegjaOT6dlaYAQgCNZZePRQsPKlh3Yk%2FDl7sktaDGC7UFqk3Xq%2B%2FzxEQmWeyxhDfNcGd8SFKUDtcoTh2cvUApGz48Fry93bHKOM3tZg2HgRHZRHOxKcrmWFUlk5rzkaMTVGdxz0%2Fzm07bSsT551aycc7jbgmLUe%2Fbd6f3lDu3hzIaccEOJdSmj87uBvHXJbBnoRMA9RrHjzYtez7m0HFUSBAtGM0AZDUmbu9fq%2Bi%2FTV%2FNacYSJjShwgacmmbJC4muHz9BP68qcPAdpdsnUv4v%2BAcVnCRtwLImK%2FBPW2gpt0iHpjt5sTC9w6wGHOl8WcGNA3vlLO8ad2%2FTiTVJ0%2BOm15MV80USxQMP%2Bq18MGOqUB%2F8LktkzokQOOAoq%2Fputyd3l0Mb1gh6kRv2PFd4kuXb39mJ0xwEKfY8pJP%2F9RC3veOOxrF90BabL39I1av6kwLfS7f866v4TxLzS2Q3ON7wd%2Fd2rCO85ImC3xiQFgwdHHNEgMwcyGm%2F1jat%2BZI2x%2BRrPjEFJW05Zqa7DWnslvWIC4wX6xEBdqijnLVjSHkXlto0KWfRu9PlpZwj%2F%2BRGagdTCfoAhV&X-Amz-Signature=a4483c3e14a3d5d2c7135d35775993d999694801a51937d540230993d124e61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTDDEQV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCTfi61tXGlDCjb2KNNBzvhlOgdlixF8MqOUp4W%2Bakj1gIgeHPZ1OetW2a52Dz5IyppsIS54lcJf%2BHxpMFtMkhOQ3gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDANEIc8RYVFvpM%2FojircAxIHPAMiirH9TVwi%2BaESE91wmvFR5F4F%2F4sPdKqHGwi5Abo22Y8ZlkpHl1OEsSzl9sQu9Cea8E4xe27cR7Pi2mI1qJFUXp5pUkyqcbS61fTGBtiltCkWkwx6pKp3kobTIRPwmadowKIIikM7G3SBhj61mFLEi2C1UsC1MUV5%2BeNq6qbaQb85VSYfdTNy3%2FgDDT9i12JYvQXhpppZ%2FY0pskKAjWB2P5uWIDfN51ZGX%2BFs7xLyjzQu1Sxh2D9oxl41InhQ4vuwRB2x%2BbjBKCaTSTgp6%2BQ%2FGYegjaOT6dlaYAQgCNZZePRQsPKlh3Yk%2FDl7sktaDGC7UFqk3Xq%2B%2FzxEQmWeyxhDfNcGd8SFKUDtcoTh2cvUApGz48Fry93bHKOM3tZg2HgRHZRHOxKcrmWFUlk5rzkaMTVGdxz0%2Fzm07bSsT551aycc7jbgmLUe%2Fbd6f3lDu3hzIaccEOJdSmj87uBvHXJbBnoRMA9RrHjzYtez7m0HFUSBAtGM0AZDUmbu9fq%2Bi%2FTV%2FNacYSJjShwgacmmbJC4muHz9BP68qcPAdpdsnUv4v%2BAcVnCRtwLImK%2FBPW2gpt0iHpjt5sTC9w6wGHOl8WcGNA3vlLO8ad2%2FTiTVJ0%2BOm15MV80USxQMP%2Bq18MGOqUB%2F8LktkzokQOOAoq%2Fputyd3l0Mb1gh6kRv2PFd4kuXb39mJ0xwEKfY8pJP%2F9RC3veOOxrF90BabL39I1av6kwLfS7f866v4TxLzS2Q3ON7wd%2Fd2rCO85ImC3xiQFgwdHHNEgMwcyGm%2F1jat%2BZI2x%2BRrPjEFJW05Zqa7DWnslvWIC4wX6xEBdqijnLVjSHkXlto0KWfRu9PlpZwj%2F%2BRGagdTCfoAhV&X-Amz-Signature=257fec317788aedee16713c65cc63a05028db62d577aeaab29b8341c7ec91a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTDDEQV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCTfi61tXGlDCjb2KNNBzvhlOgdlixF8MqOUp4W%2Bakj1gIgeHPZ1OetW2a52Dz5IyppsIS54lcJf%2BHxpMFtMkhOQ3gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDANEIc8RYVFvpM%2FojircAxIHPAMiirH9TVwi%2BaESE91wmvFR5F4F%2F4sPdKqHGwi5Abo22Y8ZlkpHl1OEsSzl9sQu9Cea8E4xe27cR7Pi2mI1qJFUXp5pUkyqcbS61fTGBtiltCkWkwx6pKp3kobTIRPwmadowKIIikM7G3SBhj61mFLEi2C1UsC1MUV5%2BeNq6qbaQb85VSYfdTNy3%2FgDDT9i12JYvQXhpppZ%2FY0pskKAjWB2P5uWIDfN51ZGX%2BFs7xLyjzQu1Sxh2D9oxl41InhQ4vuwRB2x%2BbjBKCaTSTgp6%2BQ%2FGYegjaOT6dlaYAQgCNZZePRQsPKlh3Yk%2FDl7sktaDGC7UFqk3Xq%2B%2FzxEQmWeyxhDfNcGd8SFKUDtcoTh2cvUApGz48Fry93bHKOM3tZg2HgRHZRHOxKcrmWFUlk5rzkaMTVGdxz0%2Fzm07bSsT551aycc7jbgmLUe%2Fbd6f3lDu3hzIaccEOJdSmj87uBvHXJbBnoRMA9RrHjzYtez7m0HFUSBAtGM0AZDUmbu9fq%2Bi%2FTV%2FNacYSJjShwgacmmbJC4muHz9BP68qcPAdpdsnUv4v%2BAcVnCRtwLImK%2FBPW2gpt0iHpjt5sTC9w6wGHOl8WcGNA3vlLO8ad2%2FTiTVJ0%2BOm15MV80USxQMP%2Bq18MGOqUB%2F8LktkzokQOOAoq%2Fputyd3l0Mb1gh6kRv2PFd4kuXb39mJ0xwEKfY8pJP%2F9RC3veOOxrF90BabL39I1av6kwLfS7f866v4TxLzS2Q3ON7wd%2Fd2rCO85ImC3xiQFgwdHHNEgMwcyGm%2F1jat%2BZI2x%2BRrPjEFJW05Zqa7DWnslvWIC4wX6xEBdqijnLVjSHkXlto0KWfRu9PlpZwj%2F%2BRGagdTCfoAhV&X-Amz-Signature=48d73b4ea8955e48fc26d2eec7884684cd62ffe5c8652db6155648e28ffb5476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTDDEQV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCTfi61tXGlDCjb2KNNBzvhlOgdlixF8MqOUp4W%2Bakj1gIgeHPZ1OetW2a52Dz5IyppsIS54lcJf%2BHxpMFtMkhOQ3gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDANEIc8RYVFvpM%2FojircAxIHPAMiirH9TVwi%2BaESE91wmvFR5F4F%2F4sPdKqHGwi5Abo22Y8ZlkpHl1OEsSzl9sQu9Cea8E4xe27cR7Pi2mI1qJFUXp5pUkyqcbS61fTGBtiltCkWkwx6pKp3kobTIRPwmadowKIIikM7G3SBhj61mFLEi2C1UsC1MUV5%2BeNq6qbaQb85VSYfdTNy3%2FgDDT9i12JYvQXhpppZ%2FY0pskKAjWB2P5uWIDfN51ZGX%2BFs7xLyjzQu1Sxh2D9oxl41InhQ4vuwRB2x%2BbjBKCaTSTgp6%2BQ%2FGYegjaOT6dlaYAQgCNZZePRQsPKlh3Yk%2FDl7sktaDGC7UFqk3Xq%2B%2FzxEQmWeyxhDfNcGd8SFKUDtcoTh2cvUApGz48Fry93bHKOM3tZg2HgRHZRHOxKcrmWFUlk5rzkaMTVGdxz0%2Fzm07bSsT551aycc7jbgmLUe%2Fbd6f3lDu3hzIaccEOJdSmj87uBvHXJbBnoRMA9RrHjzYtez7m0HFUSBAtGM0AZDUmbu9fq%2Bi%2FTV%2FNacYSJjShwgacmmbJC4muHz9BP68qcPAdpdsnUv4v%2BAcVnCRtwLImK%2FBPW2gpt0iHpjt5sTC9w6wGHOl8WcGNA3vlLO8ad2%2FTiTVJ0%2BOm15MV80USxQMP%2Bq18MGOqUB%2F8LktkzokQOOAoq%2Fputyd3l0Mb1gh6kRv2PFd4kuXb39mJ0xwEKfY8pJP%2F9RC3veOOxrF90BabL39I1av6kwLfS7f866v4TxLzS2Q3ON7wd%2Fd2rCO85ImC3xiQFgwdHHNEgMwcyGm%2F1jat%2BZI2x%2BRrPjEFJW05Zqa7DWnslvWIC4wX6xEBdqijnLVjSHkXlto0KWfRu9PlpZwj%2F%2BRGagdTCfoAhV&X-Amz-Signature=256b584a4529cd5778c02ead3ff65cad70b2032c9f02f38b2b48e0eca5d5b46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTDDEQV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCTfi61tXGlDCjb2KNNBzvhlOgdlixF8MqOUp4W%2Bakj1gIgeHPZ1OetW2a52Dz5IyppsIS54lcJf%2BHxpMFtMkhOQ3gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDANEIc8RYVFvpM%2FojircAxIHPAMiirH9TVwi%2BaESE91wmvFR5F4F%2F4sPdKqHGwi5Abo22Y8ZlkpHl1OEsSzl9sQu9Cea8E4xe27cR7Pi2mI1qJFUXp5pUkyqcbS61fTGBtiltCkWkwx6pKp3kobTIRPwmadowKIIikM7G3SBhj61mFLEi2C1UsC1MUV5%2BeNq6qbaQb85VSYfdTNy3%2FgDDT9i12JYvQXhpppZ%2FY0pskKAjWB2P5uWIDfN51ZGX%2BFs7xLyjzQu1Sxh2D9oxl41InhQ4vuwRB2x%2BbjBKCaTSTgp6%2BQ%2FGYegjaOT6dlaYAQgCNZZePRQsPKlh3Yk%2FDl7sktaDGC7UFqk3Xq%2B%2FzxEQmWeyxhDfNcGd8SFKUDtcoTh2cvUApGz48Fry93bHKOM3tZg2HgRHZRHOxKcrmWFUlk5rzkaMTVGdxz0%2Fzm07bSsT551aycc7jbgmLUe%2Fbd6f3lDu3hzIaccEOJdSmj87uBvHXJbBnoRMA9RrHjzYtez7m0HFUSBAtGM0AZDUmbu9fq%2Bi%2FTV%2FNacYSJjShwgacmmbJC4muHz9BP68qcPAdpdsnUv4v%2BAcVnCRtwLImK%2FBPW2gpt0iHpjt5sTC9w6wGHOl8WcGNA3vlLO8ad2%2FTiTVJ0%2BOm15MV80USxQMP%2Bq18MGOqUB%2F8LktkzokQOOAoq%2Fputyd3l0Mb1gh6kRv2PFd4kuXb39mJ0xwEKfY8pJP%2F9RC3veOOxrF90BabL39I1av6kwLfS7f866v4TxLzS2Q3ON7wd%2Fd2rCO85ImC3xiQFgwdHHNEgMwcyGm%2F1jat%2BZI2x%2BRrPjEFJW05Zqa7DWnslvWIC4wX6xEBdqijnLVjSHkXlto0KWfRu9PlpZwj%2F%2BRGagdTCfoAhV&X-Amz-Signature=55cf5791fad5ddedf38f55587748f8c3120b50d03ae9e15a1547f817239ef8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTDDEQV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCTfi61tXGlDCjb2KNNBzvhlOgdlixF8MqOUp4W%2Bakj1gIgeHPZ1OetW2a52Dz5IyppsIS54lcJf%2BHxpMFtMkhOQ3gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDANEIc8RYVFvpM%2FojircAxIHPAMiirH9TVwi%2BaESE91wmvFR5F4F%2F4sPdKqHGwi5Abo22Y8ZlkpHl1OEsSzl9sQu9Cea8E4xe27cR7Pi2mI1qJFUXp5pUkyqcbS61fTGBtiltCkWkwx6pKp3kobTIRPwmadowKIIikM7G3SBhj61mFLEi2C1UsC1MUV5%2BeNq6qbaQb85VSYfdTNy3%2FgDDT9i12JYvQXhpppZ%2FY0pskKAjWB2P5uWIDfN51ZGX%2BFs7xLyjzQu1Sxh2D9oxl41InhQ4vuwRB2x%2BbjBKCaTSTgp6%2BQ%2FGYegjaOT6dlaYAQgCNZZePRQsPKlh3Yk%2FDl7sktaDGC7UFqk3Xq%2B%2FzxEQmWeyxhDfNcGd8SFKUDtcoTh2cvUApGz48Fry93bHKOM3tZg2HgRHZRHOxKcrmWFUlk5rzkaMTVGdxz0%2Fzm07bSsT551aycc7jbgmLUe%2Fbd6f3lDu3hzIaccEOJdSmj87uBvHXJbBnoRMA9RrHjzYtez7m0HFUSBAtGM0AZDUmbu9fq%2Bi%2FTV%2FNacYSJjShwgacmmbJC4muHz9BP68qcPAdpdsnUv4v%2BAcVnCRtwLImK%2FBPW2gpt0iHpjt5sTC9w6wGHOl8WcGNA3vlLO8ad2%2FTiTVJ0%2BOm15MV80USxQMP%2Bq18MGOqUB%2F8LktkzokQOOAoq%2Fputyd3l0Mb1gh6kRv2PFd4kuXb39mJ0xwEKfY8pJP%2F9RC3veOOxrF90BabL39I1av6kwLfS7f866v4TxLzS2Q3ON7wd%2Fd2rCO85ImC3xiQFgwdHHNEgMwcyGm%2F1jat%2BZI2x%2BRrPjEFJW05Zqa7DWnslvWIC4wX6xEBdqijnLVjSHkXlto0KWfRu9PlpZwj%2F%2BRGagdTCfoAhV&X-Amz-Signature=95bc4737a651c1c7bfcd6341dc0e89e339bacc137d2b7f80e724bb30fb705c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
