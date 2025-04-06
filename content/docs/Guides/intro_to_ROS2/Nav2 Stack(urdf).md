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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUXVJHB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpGwsq0DhHQUAtWMf1HUVwXcfR00mL2fwFH3lE0GSVaAiB2DvkOic0zR9ZXl58kfXAcfghM56H20adO9vlbcRpy3Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM18VM0WXjjlPtpAGuKtwDRsyOI3TefvhAaAcVNG9jkEMmtsf2paUoBlnpkQKOCXvuOrWwR1u%2Bqy9EJWTraqtIgwiFUcHkke3z158p%2FS%2FYeW7xMbAdc4SlwI8Nvt6Icp1fFkOsYDF00i5VJ%2FhhkdmSEpJF5SG4KCsClk358Yydbog5HL5mLtb9vYC99DStnaaHbNj4yy%2FT8cAiH5Vufr%2FkIrstLFdztFG5Va%2B4nXVLtxD7%2FmAaPrR0L9MH0m4PpvnWix7YzxLr7aZ2OcDLj%2BalHO883LAUTrTlIjABEFOeKjyDf5HA3uMrLjVFZGg4V8IPqN5%2FsirmBCGmpVgTIa%2FVS3edN27q%2BpPtz6mN8N9Hzi%2Bym%2F1wBeqenSQiwOMt1Fq1sk49TQVtyC4TLcIuVPMHbucm0MR%2FncOXgmIwhB6pNgArbie1EfVWgcPEDWtgRilajEsFYRAX4fOedPMi7b29aAR94UPv8YWjK%2FCBsGq479pC6DFSYvZ60aBFB6qRdpjYZzHSZUahBJr3OyUzKmXmX3%2BCdjUVIsXwOhgUKIdpAhTSotAm7XHp%2BdoBGwo95DSACeG8WskODMhyaW1Jota4TAma8MbC5W521P2umgCGrUBEe9HD3yYWpPP%2BsgnbXaADEdLYgy5Z4S7u1nUw2dvHvwY6pgFX5Zuc9uIwWN6ncofdilYF5P3jAFU%2Fr5cAG5%2BhXKOfA5xy5J0JSHc4C6wXgswztUdzDAoFYDvmJUg%2F38hSdx27u7C6ENfYPMILi0vpIXZbdAUm2JdbMaBSCxwFo6XiO8KpqP5%2FCGssfauHn%2BgPFyZkIcN%2FH%2BSRFqA7YQnxVxOg%2F4RGD2ILUB5K3nGCH%2BarWKrSuOSXIjdKYr%2B%2FiJ51InNBhe7z2Syn&X-Amz-Signature=e3946a86e55258dc08fb6764dd16c0d8d21d9c138c94842ec630f481d308ff4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUXVJHB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpGwsq0DhHQUAtWMf1HUVwXcfR00mL2fwFH3lE0GSVaAiB2DvkOic0zR9ZXl58kfXAcfghM56H20adO9vlbcRpy3Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM18VM0WXjjlPtpAGuKtwDRsyOI3TefvhAaAcVNG9jkEMmtsf2paUoBlnpkQKOCXvuOrWwR1u%2Bqy9EJWTraqtIgwiFUcHkke3z158p%2FS%2FYeW7xMbAdc4SlwI8Nvt6Icp1fFkOsYDF00i5VJ%2FhhkdmSEpJF5SG4KCsClk358Yydbog5HL5mLtb9vYC99DStnaaHbNj4yy%2FT8cAiH5Vufr%2FkIrstLFdztFG5Va%2B4nXVLtxD7%2FmAaPrR0L9MH0m4PpvnWix7YzxLr7aZ2OcDLj%2BalHO883LAUTrTlIjABEFOeKjyDf5HA3uMrLjVFZGg4V8IPqN5%2FsirmBCGmpVgTIa%2FVS3edN27q%2BpPtz6mN8N9Hzi%2Bym%2F1wBeqenSQiwOMt1Fq1sk49TQVtyC4TLcIuVPMHbucm0MR%2FncOXgmIwhB6pNgArbie1EfVWgcPEDWtgRilajEsFYRAX4fOedPMi7b29aAR94UPv8YWjK%2FCBsGq479pC6DFSYvZ60aBFB6qRdpjYZzHSZUahBJr3OyUzKmXmX3%2BCdjUVIsXwOhgUKIdpAhTSotAm7XHp%2BdoBGwo95DSACeG8WskODMhyaW1Jota4TAma8MbC5W521P2umgCGrUBEe9HD3yYWpPP%2BsgnbXaADEdLYgy5Z4S7u1nUw2dvHvwY6pgFX5Zuc9uIwWN6ncofdilYF5P3jAFU%2Fr5cAG5%2BhXKOfA5xy5J0JSHc4C6wXgswztUdzDAoFYDvmJUg%2F38hSdx27u7C6ENfYPMILi0vpIXZbdAUm2JdbMaBSCxwFo6XiO8KpqP5%2FCGssfauHn%2BgPFyZkIcN%2FH%2BSRFqA7YQnxVxOg%2F4RGD2ILUB5K3nGCH%2BarWKrSuOSXIjdKYr%2B%2FiJ51InNBhe7z2Syn&X-Amz-Signature=4ee47cc3ad689a4ab0c4ef3336e452a70e71cff72ddc6e89c44b26efd7f7b23a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUXVJHB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpGwsq0DhHQUAtWMf1HUVwXcfR00mL2fwFH3lE0GSVaAiB2DvkOic0zR9ZXl58kfXAcfghM56H20adO9vlbcRpy3Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM18VM0WXjjlPtpAGuKtwDRsyOI3TefvhAaAcVNG9jkEMmtsf2paUoBlnpkQKOCXvuOrWwR1u%2Bqy9EJWTraqtIgwiFUcHkke3z158p%2FS%2FYeW7xMbAdc4SlwI8Nvt6Icp1fFkOsYDF00i5VJ%2FhhkdmSEpJF5SG4KCsClk358Yydbog5HL5mLtb9vYC99DStnaaHbNj4yy%2FT8cAiH5Vufr%2FkIrstLFdztFG5Va%2B4nXVLtxD7%2FmAaPrR0L9MH0m4PpvnWix7YzxLr7aZ2OcDLj%2BalHO883LAUTrTlIjABEFOeKjyDf5HA3uMrLjVFZGg4V8IPqN5%2FsirmBCGmpVgTIa%2FVS3edN27q%2BpPtz6mN8N9Hzi%2Bym%2F1wBeqenSQiwOMt1Fq1sk49TQVtyC4TLcIuVPMHbucm0MR%2FncOXgmIwhB6pNgArbie1EfVWgcPEDWtgRilajEsFYRAX4fOedPMi7b29aAR94UPv8YWjK%2FCBsGq479pC6DFSYvZ60aBFB6qRdpjYZzHSZUahBJr3OyUzKmXmX3%2BCdjUVIsXwOhgUKIdpAhTSotAm7XHp%2BdoBGwo95DSACeG8WskODMhyaW1Jota4TAma8MbC5W521P2umgCGrUBEe9HD3yYWpPP%2BsgnbXaADEdLYgy5Z4S7u1nUw2dvHvwY6pgFX5Zuc9uIwWN6ncofdilYF5P3jAFU%2Fr5cAG5%2BhXKOfA5xy5J0JSHc4C6wXgswztUdzDAoFYDvmJUg%2F38hSdx27u7C6ENfYPMILi0vpIXZbdAUm2JdbMaBSCxwFo6XiO8KpqP5%2FCGssfauHn%2BgPFyZkIcN%2FH%2BSRFqA7YQnxVxOg%2F4RGD2ILUB5K3nGCH%2BarWKrSuOSXIjdKYr%2B%2FiJ51InNBhe7z2Syn&X-Amz-Signature=d2f58bb002d5a35e614dedafa268013b0b326737ffb74f33859a0efb00e6ddc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUXVJHB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpGwsq0DhHQUAtWMf1HUVwXcfR00mL2fwFH3lE0GSVaAiB2DvkOic0zR9ZXl58kfXAcfghM56H20adO9vlbcRpy3Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM18VM0WXjjlPtpAGuKtwDRsyOI3TefvhAaAcVNG9jkEMmtsf2paUoBlnpkQKOCXvuOrWwR1u%2Bqy9EJWTraqtIgwiFUcHkke3z158p%2FS%2FYeW7xMbAdc4SlwI8Nvt6Icp1fFkOsYDF00i5VJ%2FhhkdmSEpJF5SG4KCsClk358Yydbog5HL5mLtb9vYC99DStnaaHbNj4yy%2FT8cAiH5Vufr%2FkIrstLFdztFG5Va%2B4nXVLtxD7%2FmAaPrR0L9MH0m4PpvnWix7YzxLr7aZ2OcDLj%2BalHO883LAUTrTlIjABEFOeKjyDf5HA3uMrLjVFZGg4V8IPqN5%2FsirmBCGmpVgTIa%2FVS3edN27q%2BpPtz6mN8N9Hzi%2Bym%2F1wBeqenSQiwOMt1Fq1sk49TQVtyC4TLcIuVPMHbucm0MR%2FncOXgmIwhB6pNgArbie1EfVWgcPEDWtgRilajEsFYRAX4fOedPMi7b29aAR94UPv8YWjK%2FCBsGq479pC6DFSYvZ60aBFB6qRdpjYZzHSZUahBJr3OyUzKmXmX3%2BCdjUVIsXwOhgUKIdpAhTSotAm7XHp%2BdoBGwo95DSACeG8WskODMhyaW1Jota4TAma8MbC5W521P2umgCGrUBEe9HD3yYWpPP%2BsgnbXaADEdLYgy5Z4S7u1nUw2dvHvwY6pgFX5Zuc9uIwWN6ncofdilYF5P3jAFU%2Fr5cAG5%2BhXKOfA5xy5J0JSHc4C6wXgswztUdzDAoFYDvmJUg%2F38hSdx27u7C6ENfYPMILi0vpIXZbdAUm2JdbMaBSCxwFo6XiO8KpqP5%2FCGssfauHn%2BgPFyZkIcN%2FH%2BSRFqA7YQnxVxOg%2F4RGD2ILUB5K3nGCH%2BarWKrSuOSXIjdKYr%2B%2FiJ51InNBhe7z2Syn&X-Amz-Signature=1e1606b652a4fcd56bee9e5529f0550e936e849aa0b2d9dacc7ef6b888717a14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUXVJHB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpGwsq0DhHQUAtWMf1HUVwXcfR00mL2fwFH3lE0GSVaAiB2DvkOic0zR9ZXl58kfXAcfghM56H20adO9vlbcRpy3Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM18VM0WXjjlPtpAGuKtwDRsyOI3TefvhAaAcVNG9jkEMmtsf2paUoBlnpkQKOCXvuOrWwR1u%2Bqy9EJWTraqtIgwiFUcHkke3z158p%2FS%2FYeW7xMbAdc4SlwI8Nvt6Icp1fFkOsYDF00i5VJ%2FhhkdmSEpJF5SG4KCsClk358Yydbog5HL5mLtb9vYC99DStnaaHbNj4yy%2FT8cAiH5Vufr%2FkIrstLFdztFG5Va%2B4nXVLtxD7%2FmAaPrR0L9MH0m4PpvnWix7YzxLr7aZ2OcDLj%2BalHO883LAUTrTlIjABEFOeKjyDf5HA3uMrLjVFZGg4V8IPqN5%2FsirmBCGmpVgTIa%2FVS3edN27q%2BpPtz6mN8N9Hzi%2Bym%2F1wBeqenSQiwOMt1Fq1sk49TQVtyC4TLcIuVPMHbucm0MR%2FncOXgmIwhB6pNgArbie1EfVWgcPEDWtgRilajEsFYRAX4fOedPMi7b29aAR94UPv8YWjK%2FCBsGq479pC6DFSYvZ60aBFB6qRdpjYZzHSZUahBJr3OyUzKmXmX3%2BCdjUVIsXwOhgUKIdpAhTSotAm7XHp%2BdoBGwo95DSACeG8WskODMhyaW1Jota4TAma8MbC5W521P2umgCGrUBEe9HD3yYWpPP%2BsgnbXaADEdLYgy5Z4S7u1nUw2dvHvwY6pgFX5Zuc9uIwWN6ncofdilYF5P3jAFU%2Fr5cAG5%2BhXKOfA5xy5J0JSHc4C6wXgswztUdzDAoFYDvmJUg%2F38hSdx27u7C6ENfYPMILi0vpIXZbdAUm2JdbMaBSCxwFo6XiO8KpqP5%2FCGssfauHn%2BgPFyZkIcN%2FH%2BSRFqA7YQnxVxOg%2F4RGD2ILUB5K3nGCH%2BarWKrSuOSXIjdKYr%2B%2FiJ51InNBhe7z2Syn&X-Amz-Signature=c315ef29e4f648a91b77af14c024bbc50f686a6005a5f5829801e64e279e3d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUXVJHB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpGwsq0DhHQUAtWMf1HUVwXcfR00mL2fwFH3lE0GSVaAiB2DvkOic0zR9ZXl58kfXAcfghM56H20adO9vlbcRpy3Sr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM18VM0WXjjlPtpAGuKtwDRsyOI3TefvhAaAcVNG9jkEMmtsf2paUoBlnpkQKOCXvuOrWwR1u%2Bqy9EJWTraqtIgwiFUcHkke3z158p%2FS%2FYeW7xMbAdc4SlwI8Nvt6Icp1fFkOsYDF00i5VJ%2FhhkdmSEpJF5SG4KCsClk358Yydbog5HL5mLtb9vYC99DStnaaHbNj4yy%2FT8cAiH5Vufr%2FkIrstLFdztFG5Va%2B4nXVLtxD7%2FmAaPrR0L9MH0m4PpvnWix7YzxLr7aZ2OcDLj%2BalHO883LAUTrTlIjABEFOeKjyDf5HA3uMrLjVFZGg4V8IPqN5%2FsirmBCGmpVgTIa%2FVS3edN27q%2BpPtz6mN8N9Hzi%2Bym%2F1wBeqenSQiwOMt1Fq1sk49TQVtyC4TLcIuVPMHbucm0MR%2FncOXgmIwhB6pNgArbie1EfVWgcPEDWtgRilajEsFYRAX4fOedPMi7b29aAR94UPv8YWjK%2FCBsGq479pC6DFSYvZ60aBFB6qRdpjYZzHSZUahBJr3OyUzKmXmX3%2BCdjUVIsXwOhgUKIdpAhTSotAm7XHp%2BdoBGwo95DSACeG8WskODMhyaW1Jota4TAma8MbC5W521P2umgCGrUBEe9HD3yYWpPP%2BsgnbXaADEdLYgy5Z4S7u1nUw2dvHvwY6pgFX5Zuc9uIwWN6ncofdilYF5P3jAFU%2Fr5cAG5%2BhXKOfA5xy5J0JSHc4C6wXgswztUdzDAoFYDvmJUg%2F38hSdx27u7C6ENfYPMILi0vpIXZbdAUm2JdbMaBSCxwFo6XiO8KpqP5%2FCGssfauHn%2BgPFyZkIcN%2FH%2BSRFqA7YQnxVxOg%2F4RGD2ILUB5K3nGCH%2BarWKrSuOSXIjdKYr%2B%2FiJ51InNBhe7z2Syn&X-Amz-Signature=4f5d26b15d39e9dc176d3840c472133480d5df43927a09de6004cc89878ccfa0&X-Amz-SignedHeaders=host&x-id=GetObject)
