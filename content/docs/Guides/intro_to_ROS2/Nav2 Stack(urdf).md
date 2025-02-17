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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PZNZHO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDt%2B2AsQuH7EqEgkwtP%2BEwmwkCWDKSgk%2BZTHNhbShkTbQIgG%2B66QQTP94XaccfayNNZYr4W70rfZ2wYiTKv6lYNmz8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMJfp1mEXw3zXu%2BbjSrcAz6JBrZ3yF4zvsQamTGtia64M93P80mi3lWviC9G7xTaQJlUa47ZfUr2ufp1epvWq08AeXCCTjX3TodD1ZEwYqxDBfxZS31y%2BnAV1GfrurDYNWQZCAXPuUAw7JtFnIA4Yb1q7fUA194QV%2FNJ2jr7%2FGAkwUGhllOqZrJq2nl8mdEdL9ffYw2F7kaiIx1ncO%2FvD7NxTrSb5npnrNuHPjJmS6d7NM6IPKOqbBTv5dfg7XgFYeutzjgIFcxSXmLdaFm2Tp1RMQs19g77AsWdpOL%2FsV827oOzBpDnltYr7LjeHqgn7hklg%2BePeJW0MSNH%2BDQLK99HNY7g9S38UVC1E4yNo96vq1TfgwjTMFMMjm8ooUrm%2Fr2UHax3zKUb3NhkxioWu3CUcxHAGGV5w1KWuhzvMAkZpbSdNKqG1pDf19IXu34IpJKRXLifSHUNhcUo7L2pST13SCjy8b5VZDMnkCyrxefNGpkw1m%2F3%2BW2%2F79T531oJs3P%2B1jSal5Ef3Uouf48AJZne%2Fq87nDvAnFiOJtdX%2BTrSApSATH%2FtmZAisg75jnoKjtF6pWuxirjKej8Y7Fk02XAkYvDacsApG6YT15ByfR3bLc%2BbdTbvqaP0EkVVbkX32CIl%2B2nAE43ZqdQYMKiWzb0GOqUB%2F%2B22pV6U9%2BqzvOia4bcApR2ABrBDS35XmCqWdrsdsJInegBsqNnKpkjxWixN8nf4pz647sptj%2B16BzeIK1erz0OxMNhnTQq2MhzYpKzfyyXLrA8ONXbECFOwbpC6im8TNAkVx9hbFBlCeyS0LMIsgMlCDgTVkkoW%2BPbA1sm668r4dW2o72jIYJzoCgCkWsmlqZoYCF451zOLjGOiAMVG4w8DNjPi&X-Amz-Signature=a0e8608cd1ee213c06574c5a4685805cc9dd5dba08de3db8ed7280ddde99f81b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PZNZHO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDt%2B2AsQuH7EqEgkwtP%2BEwmwkCWDKSgk%2BZTHNhbShkTbQIgG%2B66QQTP94XaccfayNNZYr4W70rfZ2wYiTKv6lYNmz8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMJfp1mEXw3zXu%2BbjSrcAz6JBrZ3yF4zvsQamTGtia64M93P80mi3lWviC9G7xTaQJlUa47ZfUr2ufp1epvWq08AeXCCTjX3TodD1ZEwYqxDBfxZS31y%2BnAV1GfrurDYNWQZCAXPuUAw7JtFnIA4Yb1q7fUA194QV%2FNJ2jr7%2FGAkwUGhllOqZrJq2nl8mdEdL9ffYw2F7kaiIx1ncO%2FvD7NxTrSb5npnrNuHPjJmS6d7NM6IPKOqbBTv5dfg7XgFYeutzjgIFcxSXmLdaFm2Tp1RMQs19g77AsWdpOL%2FsV827oOzBpDnltYr7LjeHqgn7hklg%2BePeJW0MSNH%2BDQLK99HNY7g9S38UVC1E4yNo96vq1TfgwjTMFMMjm8ooUrm%2Fr2UHax3zKUb3NhkxioWu3CUcxHAGGV5w1KWuhzvMAkZpbSdNKqG1pDf19IXu34IpJKRXLifSHUNhcUo7L2pST13SCjy8b5VZDMnkCyrxefNGpkw1m%2F3%2BW2%2F79T531oJs3P%2B1jSal5Ef3Uouf48AJZne%2Fq87nDvAnFiOJtdX%2BTrSApSATH%2FtmZAisg75jnoKjtF6pWuxirjKej8Y7Fk02XAkYvDacsApG6YT15ByfR3bLc%2BbdTbvqaP0EkVVbkX32CIl%2B2nAE43ZqdQYMKiWzb0GOqUB%2F%2B22pV6U9%2BqzvOia4bcApR2ABrBDS35XmCqWdrsdsJInegBsqNnKpkjxWixN8nf4pz647sptj%2B16BzeIK1erz0OxMNhnTQq2MhzYpKzfyyXLrA8ONXbECFOwbpC6im8TNAkVx9hbFBlCeyS0LMIsgMlCDgTVkkoW%2BPbA1sm668r4dW2o72jIYJzoCgCkWsmlqZoYCF451zOLjGOiAMVG4w8DNjPi&X-Amz-Signature=fdb35c9e964a994a9414bf49a0cd4d260af2156ca692e3ed4028ed67518512fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PZNZHO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDt%2B2AsQuH7EqEgkwtP%2BEwmwkCWDKSgk%2BZTHNhbShkTbQIgG%2B66QQTP94XaccfayNNZYr4W70rfZ2wYiTKv6lYNmz8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMJfp1mEXw3zXu%2BbjSrcAz6JBrZ3yF4zvsQamTGtia64M93P80mi3lWviC9G7xTaQJlUa47ZfUr2ufp1epvWq08AeXCCTjX3TodD1ZEwYqxDBfxZS31y%2BnAV1GfrurDYNWQZCAXPuUAw7JtFnIA4Yb1q7fUA194QV%2FNJ2jr7%2FGAkwUGhllOqZrJq2nl8mdEdL9ffYw2F7kaiIx1ncO%2FvD7NxTrSb5npnrNuHPjJmS6d7NM6IPKOqbBTv5dfg7XgFYeutzjgIFcxSXmLdaFm2Tp1RMQs19g77AsWdpOL%2FsV827oOzBpDnltYr7LjeHqgn7hklg%2BePeJW0MSNH%2BDQLK99HNY7g9S38UVC1E4yNo96vq1TfgwjTMFMMjm8ooUrm%2Fr2UHax3zKUb3NhkxioWu3CUcxHAGGV5w1KWuhzvMAkZpbSdNKqG1pDf19IXu34IpJKRXLifSHUNhcUo7L2pST13SCjy8b5VZDMnkCyrxefNGpkw1m%2F3%2BW2%2F79T531oJs3P%2B1jSal5Ef3Uouf48AJZne%2Fq87nDvAnFiOJtdX%2BTrSApSATH%2FtmZAisg75jnoKjtF6pWuxirjKej8Y7Fk02XAkYvDacsApG6YT15ByfR3bLc%2BbdTbvqaP0EkVVbkX32CIl%2B2nAE43ZqdQYMKiWzb0GOqUB%2F%2B22pV6U9%2BqzvOia4bcApR2ABrBDS35XmCqWdrsdsJInegBsqNnKpkjxWixN8nf4pz647sptj%2B16BzeIK1erz0OxMNhnTQq2MhzYpKzfyyXLrA8ONXbECFOwbpC6im8TNAkVx9hbFBlCeyS0LMIsgMlCDgTVkkoW%2BPbA1sm668r4dW2o72jIYJzoCgCkWsmlqZoYCF451zOLjGOiAMVG4w8DNjPi&X-Amz-Signature=f458d30b65b2ab8fb4c0ce816218546f15bf7ad42eacb91d508f66749833d370&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PZNZHO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDt%2B2AsQuH7EqEgkwtP%2BEwmwkCWDKSgk%2BZTHNhbShkTbQIgG%2B66QQTP94XaccfayNNZYr4W70rfZ2wYiTKv6lYNmz8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMJfp1mEXw3zXu%2BbjSrcAz6JBrZ3yF4zvsQamTGtia64M93P80mi3lWviC9G7xTaQJlUa47ZfUr2ufp1epvWq08AeXCCTjX3TodD1ZEwYqxDBfxZS31y%2BnAV1GfrurDYNWQZCAXPuUAw7JtFnIA4Yb1q7fUA194QV%2FNJ2jr7%2FGAkwUGhllOqZrJq2nl8mdEdL9ffYw2F7kaiIx1ncO%2FvD7NxTrSb5npnrNuHPjJmS6d7NM6IPKOqbBTv5dfg7XgFYeutzjgIFcxSXmLdaFm2Tp1RMQs19g77AsWdpOL%2FsV827oOzBpDnltYr7LjeHqgn7hklg%2BePeJW0MSNH%2BDQLK99HNY7g9S38UVC1E4yNo96vq1TfgwjTMFMMjm8ooUrm%2Fr2UHax3zKUb3NhkxioWu3CUcxHAGGV5w1KWuhzvMAkZpbSdNKqG1pDf19IXu34IpJKRXLifSHUNhcUo7L2pST13SCjy8b5VZDMnkCyrxefNGpkw1m%2F3%2BW2%2F79T531oJs3P%2B1jSal5Ef3Uouf48AJZne%2Fq87nDvAnFiOJtdX%2BTrSApSATH%2FtmZAisg75jnoKjtF6pWuxirjKej8Y7Fk02XAkYvDacsApG6YT15ByfR3bLc%2BbdTbvqaP0EkVVbkX32CIl%2B2nAE43ZqdQYMKiWzb0GOqUB%2F%2B22pV6U9%2BqzvOia4bcApR2ABrBDS35XmCqWdrsdsJInegBsqNnKpkjxWixN8nf4pz647sptj%2B16BzeIK1erz0OxMNhnTQq2MhzYpKzfyyXLrA8ONXbECFOwbpC6im8TNAkVx9hbFBlCeyS0LMIsgMlCDgTVkkoW%2BPbA1sm668r4dW2o72jIYJzoCgCkWsmlqZoYCF451zOLjGOiAMVG4w8DNjPi&X-Amz-Signature=ce395b412798b1780d0c65409ee1b79352545837278e2eaaae0d49526b772334&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PZNZHO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDt%2B2AsQuH7EqEgkwtP%2BEwmwkCWDKSgk%2BZTHNhbShkTbQIgG%2B66QQTP94XaccfayNNZYr4W70rfZ2wYiTKv6lYNmz8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMJfp1mEXw3zXu%2BbjSrcAz6JBrZ3yF4zvsQamTGtia64M93P80mi3lWviC9G7xTaQJlUa47ZfUr2ufp1epvWq08AeXCCTjX3TodD1ZEwYqxDBfxZS31y%2BnAV1GfrurDYNWQZCAXPuUAw7JtFnIA4Yb1q7fUA194QV%2FNJ2jr7%2FGAkwUGhllOqZrJq2nl8mdEdL9ffYw2F7kaiIx1ncO%2FvD7NxTrSb5npnrNuHPjJmS6d7NM6IPKOqbBTv5dfg7XgFYeutzjgIFcxSXmLdaFm2Tp1RMQs19g77AsWdpOL%2FsV827oOzBpDnltYr7LjeHqgn7hklg%2BePeJW0MSNH%2BDQLK99HNY7g9S38UVC1E4yNo96vq1TfgwjTMFMMjm8ooUrm%2Fr2UHax3zKUb3NhkxioWu3CUcxHAGGV5w1KWuhzvMAkZpbSdNKqG1pDf19IXu34IpJKRXLifSHUNhcUo7L2pST13SCjy8b5VZDMnkCyrxefNGpkw1m%2F3%2BW2%2F79T531oJs3P%2B1jSal5Ef3Uouf48AJZne%2Fq87nDvAnFiOJtdX%2BTrSApSATH%2FtmZAisg75jnoKjtF6pWuxirjKej8Y7Fk02XAkYvDacsApG6YT15ByfR3bLc%2BbdTbvqaP0EkVVbkX32CIl%2B2nAE43ZqdQYMKiWzb0GOqUB%2F%2B22pV6U9%2BqzvOia4bcApR2ABrBDS35XmCqWdrsdsJInegBsqNnKpkjxWixN8nf4pz647sptj%2B16BzeIK1erz0OxMNhnTQq2MhzYpKzfyyXLrA8ONXbECFOwbpC6im8TNAkVx9hbFBlCeyS0LMIsgMlCDgTVkkoW%2BPbA1sm668r4dW2o72jIYJzoCgCkWsmlqZoYCF451zOLjGOiAMVG4w8DNjPi&X-Amz-Signature=cd269b46af8387a178075af575255178988f00ce3579866cf8e28296971ccaa5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PZNZHO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDt%2B2AsQuH7EqEgkwtP%2BEwmwkCWDKSgk%2BZTHNhbShkTbQIgG%2B66QQTP94XaccfayNNZYr4W70rfZ2wYiTKv6lYNmz8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMJfp1mEXw3zXu%2BbjSrcAz6JBrZ3yF4zvsQamTGtia64M93P80mi3lWviC9G7xTaQJlUa47ZfUr2ufp1epvWq08AeXCCTjX3TodD1ZEwYqxDBfxZS31y%2BnAV1GfrurDYNWQZCAXPuUAw7JtFnIA4Yb1q7fUA194QV%2FNJ2jr7%2FGAkwUGhllOqZrJq2nl8mdEdL9ffYw2F7kaiIx1ncO%2FvD7NxTrSb5npnrNuHPjJmS6d7NM6IPKOqbBTv5dfg7XgFYeutzjgIFcxSXmLdaFm2Tp1RMQs19g77AsWdpOL%2FsV827oOzBpDnltYr7LjeHqgn7hklg%2BePeJW0MSNH%2BDQLK99HNY7g9S38UVC1E4yNo96vq1TfgwjTMFMMjm8ooUrm%2Fr2UHax3zKUb3NhkxioWu3CUcxHAGGV5w1KWuhzvMAkZpbSdNKqG1pDf19IXu34IpJKRXLifSHUNhcUo7L2pST13SCjy8b5VZDMnkCyrxefNGpkw1m%2F3%2BW2%2F79T531oJs3P%2B1jSal5Ef3Uouf48AJZne%2Fq87nDvAnFiOJtdX%2BTrSApSATH%2FtmZAisg75jnoKjtF6pWuxirjKej8Y7Fk02XAkYvDacsApG6YT15ByfR3bLc%2BbdTbvqaP0EkVVbkX32CIl%2B2nAE43ZqdQYMKiWzb0GOqUB%2F%2B22pV6U9%2BqzvOia4bcApR2ABrBDS35XmCqWdrsdsJInegBsqNnKpkjxWixN8nf4pz647sptj%2B16BzeIK1erz0OxMNhnTQq2MhzYpKzfyyXLrA8ONXbECFOwbpC6im8TNAkVx9hbFBlCeyS0LMIsgMlCDgTVkkoW%2BPbA1sm668r4dW2o72jIYJzoCgCkWsmlqZoYCF451zOLjGOiAMVG4w8DNjPi&X-Amz-Signature=ad4eb88d27d019c1944cbeaff7c961ab6d75769e9007f8f5685a320435b06287&X-Amz-SignedHeaders=host&x-id=GetObject)
