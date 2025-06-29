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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHXOBJY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA54IG1J%2F3hbTHK2tSOnXU2hZforj4r43O1sW%2B7Vbjm7AiEA4Rg4JqagzmPeJeIXOybsCczykzU6ZCOMMp70UntYqR4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lvVy%2F4Bf4BWR98SrcAxatIHc4C6ofT2dPuhNpdUU6GE64QyYIwjDI9S1qm9r%2BipnukOn8oNb4QtyIPeolNyPCeEMlRFXYrXZUPDowyhSuYKVJOGBFT6yHHcXxSppHCgwx6Z%2FvgdvjFQO9boaw9MlTspzfrjJbmAdkXkmi%2BflUOZ8KFTi24MwNoDagYnfpFAOKTNouoaIhC2YfJqijoZQ5IqgbgBgG0z%2BN8YrFYWxhPlPncasUkC0vhWY7E6OYAuACZeQJaa%2BYVIZ4k9%2Fkrfmm6yVDUCOplOcFLa8H1W%2BIxcNN9GiS%2B72yOEJO21BaBVCQD9HFhkmhuzvuvekZFzZFibzoxnTxY94sHYkoR3Ms5kdf30Zv29tPbHdrQttsmy%2FxNUpkw1D6zSWV%2FtUWghXyPGuunIqs7wrDg1WdOUvMC94Qob0X6ZDaZpPSqHShGAaDAKFaqehUkKcI1JzRRJjxcRD3S2sHQ4AHeeJyEv3wBS%2B%2F1D10T%2B1Xx%2F545BnNeNlNyvhGulFpZSU299LGEUEjROZC4fruOLfdowIx%2B%2BYAXq1pTflCIDW4jf2zwaJThp%2B2uLYtDC3iTyyD1FNSKk7e%2Fqu9hBSCBoWwen1%2FrSy9OhhycPME8SAjkfOSIoi5SQETzjFjv%2BD%2FZoHtMNG7hMMGOqUBHWP26mLYtWd%2FJx%2Fjfc0PK8W5VHFW%2F3NcFTbnfT0Ee8fWhINGN32v4JpDk2Xt2yiOzB3LweSmYqFAhZvDQBWYGoCYFNTYs%2FcEk5BXgitWh8Ecfb%2B5JBExdTN%2Bc9vsRolP%2FeCFCvLIqWry3ddrwgzT0Xw9crTkQvHoXPWFACHOcPQHr0daXk9q0ONzC9QyB%2BUsWvJ7Z7PyozZ%2BO8boT32QN%2F8m%2FUr7&X-Amz-Signature=de9a8e5b8d1757e870cfab7d8c0e2822312b46bd165acac9c695281408705921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHXOBJY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA54IG1J%2F3hbTHK2tSOnXU2hZforj4r43O1sW%2B7Vbjm7AiEA4Rg4JqagzmPeJeIXOybsCczykzU6ZCOMMp70UntYqR4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lvVy%2F4Bf4BWR98SrcAxatIHc4C6ofT2dPuhNpdUU6GE64QyYIwjDI9S1qm9r%2BipnukOn8oNb4QtyIPeolNyPCeEMlRFXYrXZUPDowyhSuYKVJOGBFT6yHHcXxSppHCgwx6Z%2FvgdvjFQO9boaw9MlTspzfrjJbmAdkXkmi%2BflUOZ8KFTi24MwNoDagYnfpFAOKTNouoaIhC2YfJqijoZQ5IqgbgBgG0z%2BN8YrFYWxhPlPncasUkC0vhWY7E6OYAuACZeQJaa%2BYVIZ4k9%2Fkrfmm6yVDUCOplOcFLa8H1W%2BIxcNN9GiS%2B72yOEJO21BaBVCQD9HFhkmhuzvuvekZFzZFibzoxnTxY94sHYkoR3Ms5kdf30Zv29tPbHdrQttsmy%2FxNUpkw1D6zSWV%2FtUWghXyPGuunIqs7wrDg1WdOUvMC94Qob0X6ZDaZpPSqHShGAaDAKFaqehUkKcI1JzRRJjxcRD3S2sHQ4AHeeJyEv3wBS%2B%2F1D10T%2B1Xx%2F545BnNeNlNyvhGulFpZSU299LGEUEjROZC4fruOLfdowIx%2B%2BYAXq1pTflCIDW4jf2zwaJThp%2B2uLYtDC3iTyyD1FNSKk7e%2Fqu9hBSCBoWwen1%2FrSy9OhhycPME8SAjkfOSIoi5SQETzjFjv%2BD%2FZoHtMNG7hMMGOqUBHWP26mLYtWd%2FJx%2Fjfc0PK8W5VHFW%2F3NcFTbnfT0Ee8fWhINGN32v4JpDk2Xt2yiOzB3LweSmYqFAhZvDQBWYGoCYFNTYs%2FcEk5BXgitWh8Ecfb%2B5JBExdTN%2Bc9vsRolP%2FeCFCvLIqWry3ddrwgzT0Xw9crTkQvHoXPWFACHOcPQHr0daXk9q0ONzC9QyB%2BUsWvJ7Z7PyozZ%2BO8boT32QN%2F8m%2FUr7&X-Amz-Signature=3c52d23c62723013a918ea00a189340d1ab8c61745689df18a1bba06a06a576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHXOBJY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA54IG1J%2F3hbTHK2tSOnXU2hZforj4r43O1sW%2B7Vbjm7AiEA4Rg4JqagzmPeJeIXOybsCczykzU6ZCOMMp70UntYqR4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lvVy%2F4Bf4BWR98SrcAxatIHc4C6ofT2dPuhNpdUU6GE64QyYIwjDI9S1qm9r%2BipnukOn8oNb4QtyIPeolNyPCeEMlRFXYrXZUPDowyhSuYKVJOGBFT6yHHcXxSppHCgwx6Z%2FvgdvjFQO9boaw9MlTspzfrjJbmAdkXkmi%2BflUOZ8KFTi24MwNoDagYnfpFAOKTNouoaIhC2YfJqijoZQ5IqgbgBgG0z%2BN8YrFYWxhPlPncasUkC0vhWY7E6OYAuACZeQJaa%2BYVIZ4k9%2Fkrfmm6yVDUCOplOcFLa8H1W%2BIxcNN9GiS%2B72yOEJO21BaBVCQD9HFhkmhuzvuvekZFzZFibzoxnTxY94sHYkoR3Ms5kdf30Zv29tPbHdrQttsmy%2FxNUpkw1D6zSWV%2FtUWghXyPGuunIqs7wrDg1WdOUvMC94Qob0X6ZDaZpPSqHShGAaDAKFaqehUkKcI1JzRRJjxcRD3S2sHQ4AHeeJyEv3wBS%2B%2F1D10T%2B1Xx%2F545BnNeNlNyvhGulFpZSU299LGEUEjROZC4fruOLfdowIx%2B%2BYAXq1pTflCIDW4jf2zwaJThp%2B2uLYtDC3iTyyD1FNSKk7e%2Fqu9hBSCBoWwen1%2FrSy9OhhycPME8SAjkfOSIoi5SQETzjFjv%2BD%2FZoHtMNG7hMMGOqUBHWP26mLYtWd%2FJx%2Fjfc0PK8W5VHFW%2F3NcFTbnfT0Ee8fWhINGN32v4JpDk2Xt2yiOzB3LweSmYqFAhZvDQBWYGoCYFNTYs%2FcEk5BXgitWh8Ecfb%2B5JBExdTN%2Bc9vsRolP%2FeCFCvLIqWry3ddrwgzT0Xw9crTkQvHoXPWFACHOcPQHr0daXk9q0ONzC9QyB%2BUsWvJ7Z7PyozZ%2BO8boT32QN%2F8m%2FUr7&X-Amz-Signature=424e2559e133e149fc8cc22f87c75f560724507b235bffce7d6a233701afdf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHXOBJY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA54IG1J%2F3hbTHK2tSOnXU2hZforj4r43O1sW%2B7Vbjm7AiEA4Rg4JqagzmPeJeIXOybsCczykzU6ZCOMMp70UntYqR4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lvVy%2F4Bf4BWR98SrcAxatIHc4C6ofT2dPuhNpdUU6GE64QyYIwjDI9S1qm9r%2BipnukOn8oNb4QtyIPeolNyPCeEMlRFXYrXZUPDowyhSuYKVJOGBFT6yHHcXxSppHCgwx6Z%2FvgdvjFQO9boaw9MlTspzfrjJbmAdkXkmi%2BflUOZ8KFTi24MwNoDagYnfpFAOKTNouoaIhC2YfJqijoZQ5IqgbgBgG0z%2BN8YrFYWxhPlPncasUkC0vhWY7E6OYAuACZeQJaa%2BYVIZ4k9%2Fkrfmm6yVDUCOplOcFLa8H1W%2BIxcNN9GiS%2B72yOEJO21BaBVCQD9HFhkmhuzvuvekZFzZFibzoxnTxY94sHYkoR3Ms5kdf30Zv29tPbHdrQttsmy%2FxNUpkw1D6zSWV%2FtUWghXyPGuunIqs7wrDg1WdOUvMC94Qob0X6ZDaZpPSqHShGAaDAKFaqehUkKcI1JzRRJjxcRD3S2sHQ4AHeeJyEv3wBS%2B%2F1D10T%2B1Xx%2F545BnNeNlNyvhGulFpZSU299LGEUEjROZC4fruOLfdowIx%2B%2BYAXq1pTflCIDW4jf2zwaJThp%2B2uLYtDC3iTyyD1FNSKk7e%2Fqu9hBSCBoWwen1%2FrSy9OhhycPME8SAjkfOSIoi5SQETzjFjv%2BD%2FZoHtMNG7hMMGOqUBHWP26mLYtWd%2FJx%2Fjfc0PK8W5VHFW%2F3NcFTbnfT0Ee8fWhINGN32v4JpDk2Xt2yiOzB3LweSmYqFAhZvDQBWYGoCYFNTYs%2FcEk5BXgitWh8Ecfb%2B5JBExdTN%2Bc9vsRolP%2FeCFCvLIqWry3ddrwgzT0Xw9crTkQvHoXPWFACHOcPQHr0daXk9q0ONzC9QyB%2BUsWvJ7Z7PyozZ%2BO8boT32QN%2F8m%2FUr7&X-Amz-Signature=7d648528ff48f9c6408b50af7d1f5c5cc6d55da2c171c7cc510cc3bb5c7aac56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHXOBJY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA54IG1J%2F3hbTHK2tSOnXU2hZforj4r43O1sW%2B7Vbjm7AiEA4Rg4JqagzmPeJeIXOybsCczykzU6ZCOMMp70UntYqR4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lvVy%2F4Bf4BWR98SrcAxatIHc4C6ofT2dPuhNpdUU6GE64QyYIwjDI9S1qm9r%2BipnukOn8oNb4QtyIPeolNyPCeEMlRFXYrXZUPDowyhSuYKVJOGBFT6yHHcXxSppHCgwx6Z%2FvgdvjFQO9boaw9MlTspzfrjJbmAdkXkmi%2BflUOZ8KFTi24MwNoDagYnfpFAOKTNouoaIhC2YfJqijoZQ5IqgbgBgG0z%2BN8YrFYWxhPlPncasUkC0vhWY7E6OYAuACZeQJaa%2BYVIZ4k9%2Fkrfmm6yVDUCOplOcFLa8H1W%2BIxcNN9GiS%2B72yOEJO21BaBVCQD9HFhkmhuzvuvekZFzZFibzoxnTxY94sHYkoR3Ms5kdf30Zv29tPbHdrQttsmy%2FxNUpkw1D6zSWV%2FtUWghXyPGuunIqs7wrDg1WdOUvMC94Qob0X6ZDaZpPSqHShGAaDAKFaqehUkKcI1JzRRJjxcRD3S2sHQ4AHeeJyEv3wBS%2B%2F1D10T%2B1Xx%2F545BnNeNlNyvhGulFpZSU299LGEUEjROZC4fruOLfdowIx%2B%2BYAXq1pTflCIDW4jf2zwaJThp%2B2uLYtDC3iTyyD1FNSKk7e%2Fqu9hBSCBoWwen1%2FrSy9OhhycPME8SAjkfOSIoi5SQETzjFjv%2BD%2FZoHtMNG7hMMGOqUBHWP26mLYtWd%2FJx%2Fjfc0PK8W5VHFW%2F3NcFTbnfT0Ee8fWhINGN32v4JpDk2Xt2yiOzB3LweSmYqFAhZvDQBWYGoCYFNTYs%2FcEk5BXgitWh8Ecfb%2B5JBExdTN%2Bc9vsRolP%2FeCFCvLIqWry3ddrwgzT0Xw9crTkQvHoXPWFACHOcPQHr0daXk9q0ONzC9QyB%2BUsWvJ7Z7PyozZ%2BO8boT32QN%2F8m%2FUr7&X-Amz-Signature=5b761248a2598cc74153df914b69f45b93c858454d169f5cb95eb01b6280532d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHXOBJY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA54IG1J%2F3hbTHK2tSOnXU2hZforj4r43O1sW%2B7Vbjm7AiEA4Rg4JqagzmPeJeIXOybsCczykzU6ZCOMMp70UntYqR4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2lvVy%2F4Bf4BWR98SrcAxatIHc4C6ofT2dPuhNpdUU6GE64QyYIwjDI9S1qm9r%2BipnukOn8oNb4QtyIPeolNyPCeEMlRFXYrXZUPDowyhSuYKVJOGBFT6yHHcXxSppHCgwx6Z%2FvgdvjFQO9boaw9MlTspzfrjJbmAdkXkmi%2BflUOZ8KFTi24MwNoDagYnfpFAOKTNouoaIhC2YfJqijoZQ5IqgbgBgG0z%2BN8YrFYWxhPlPncasUkC0vhWY7E6OYAuACZeQJaa%2BYVIZ4k9%2Fkrfmm6yVDUCOplOcFLa8H1W%2BIxcNN9GiS%2B72yOEJO21BaBVCQD9HFhkmhuzvuvekZFzZFibzoxnTxY94sHYkoR3Ms5kdf30Zv29tPbHdrQttsmy%2FxNUpkw1D6zSWV%2FtUWghXyPGuunIqs7wrDg1WdOUvMC94Qob0X6ZDaZpPSqHShGAaDAKFaqehUkKcI1JzRRJjxcRD3S2sHQ4AHeeJyEv3wBS%2B%2F1D10T%2B1Xx%2F545BnNeNlNyvhGulFpZSU299LGEUEjROZC4fruOLfdowIx%2B%2BYAXq1pTflCIDW4jf2zwaJThp%2B2uLYtDC3iTyyD1FNSKk7e%2Fqu9hBSCBoWwen1%2FrSy9OhhycPME8SAjkfOSIoi5SQETzjFjv%2BD%2FZoHtMNG7hMMGOqUBHWP26mLYtWd%2FJx%2Fjfc0PK8W5VHFW%2F3NcFTbnfT0Ee8fWhINGN32v4JpDk2Xt2yiOzB3LweSmYqFAhZvDQBWYGoCYFNTYs%2FcEk5BXgitWh8Ecfb%2B5JBExdTN%2Bc9vsRolP%2FeCFCvLIqWry3ddrwgzT0Xw9crTkQvHoXPWFACHOcPQHr0daXk9q0ONzC9QyB%2BUsWvJ7Z7PyozZ%2BO8boT32QN%2F8m%2FUr7&X-Amz-Signature=9bc8aacb1a99a3480d2dba7421b906b477b89812ef6f76b42b69e392cf2bc7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
