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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AFT6PN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF3l9q%2B8d47hVX%2BVld3H1Q7aEvuCIFSlg%2BpCg5pTom6mAiEAkY3ijr9YMSQSlIGf0nQanvHZiy%2FZ3aq7ciLBFq%2FWONwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0TqhCvilVD%2FPRmGCrcA7b8STe053KmY%2BcCvmhY7MgXFVFqO0wCbnnEHISswWlpkcfigLLKod%2FF6u0NenMq%2BC28i%2BV0ORk%2FOjcdHdGJ%2BDJRJI58Pcuu9KwIcK1%2BT3NzqsAYDkiUb6nITAWDhDGcSFvmlz84jJL%2FCcG%2BeBEUPcxm1bF6Z%2BnrDWGVh6caCG6ibwvbvvLm2jUnJIBNvQ0DEonzUO9aDCRux6VJq2UgopB5x46BzBXMcE2cic1ft9gAvjbrEZSrwkADO5B%2F07kOe%2BKl8gbbKPAHH%2BIGz1CsjUYBgmcnvoCmkthX%2Fw4ZHF%2BeX6dF65DLTwBNAVszwywTpycfKN9BJSX4eQYIQIjJZEivlFVVaMMI3e%2F3EOSDXK81YK6zgOBaIs2Bb0lArKMQxhWBB7%2BFYgfmQ1z5otcZyncJ77tdMOSE%2FHQcWeFc1Km2oWjFTpECA6vdmLcVkB41rky72LyfY07Uq%2F%2By8ad41e%2FlVdfNjIkB%2BGP9SM11p0g8xJ%2BgnfwdRe65L%2FEBB5%2Fecnm5LNVPN0CELi5KrN%2F%2F2tHFxPLeMnkreB5dvXtvCu1B4AWLPfl6QuLxOxFCWIAfhDNMPcGTITQIuci1DanVD5vZb0W%2B7FTnXTgy57yBGabj5fEtGzTz1Uc6GfazMNrLysAGOqUBT2bq3JjomFAs%2FYnsErmoCWJZ4qCFr1FFVvkTsOQaJOnvnQ6j%2FdEXMZ5xf4U6iUybNYEMln4iGD34WCPIDE70N33kIp4izQvJn3wUbGzYtZiJI%2BtH1IiR2tG7MCthq1Dp3yCopXsRwcIiELcdmAKemKsV6FRt%2BWahEDvx%2Bk2uGIIgzUW%2Bjaox8ZqwDETnU0fq%2F4qALCAwFR8iRq1h8fDK0ccGdCnR&X-Amz-Signature=90ba063767a121098dd82e6cde9dc2765efb53b8ccbcfeecfd955b5783b90f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AFT6PN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF3l9q%2B8d47hVX%2BVld3H1Q7aEvuCIFSlg%2BpCg5pTom6mAiEAkY3ijr9YMSQSlIGf0nQanvHZiy%2FZ3aq7ciLBFq%2FWONwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0TqhCvilVD%2FPRmGCrcA7b8STe053KmY%2BcCvmhY7MgXFVFqO0wCbnnEHISswWlpkcfigLLKod%2FF6u0NenMq%2BC28i%2BV0ORk%2FOjcdHdGJ%2BDJRJI58Pcuu9KwIcK1%2BT3NzqsAYDkiUb6nITAWDhDGcSFvmlz84jJL%2FCcG%2BeBEUPcxm1bF6Z%2BnrDWGVh6caCG6ibwvbvvLm2jUnJIBNvQ0DEonzUO9aDCRux6VJq2UgopB5x46BzBXMcE2cic1ft9gAvjbrEZSrwkADO5B%2F07kOe%2BKl8gbbKPAHH%2BIGz1CsjUYBgmcnvoCmkthX%2Fw4ZHF%2BeX6dF65DLTwBNAVszwywTpycfKN9BJSX4eQYIQIjJZEivlFVVaMMI3e%2F3EOSDXK81YK6zgOBaIs2Bb0lArKMQxhWBB7%2BFYgfmQ1z5otcZyncJ77tdMOSE%2FHQcWeFc1Km2oWjFTpECA6vdmLcVkB41rky72LyfY07Uq%2F%2By8ad41e%2FlVdfNjIkB%2BGP9SM11p0g8xJ%2BgnfwdRe65L%2FEBB5%2Fecnm5LNVPN0CELi5KrN%2F%2F2tHFxPLeMnkreB5dvXtvCu1B4AWLPfl6QuLxOxFCWIAfhDNMPcGTITQIuci1DanVD5vZb0W%2B7FTnXTgy57yBGabj5fEtGzTz1Uc6GfazMNrLysAGOqUBT2bq3JjomFAs%2FYnsErmoCWJZ4qCFr1FFVvkTsOQaJOnvnQ6j%2FdEXMZ5xf4U6iUybNYEMln4iGD34WCPIDE70N33kIp4izQvJn3wUbGzYtZiJI%2BtH1IiR2tG7MCthq1Dp3yCopXsRwcIiELcdmAKemKsV6FRt%2BWahEDvx%2Bk2uGIIgzUW%2Bjaox8ZqwDETnU0fq%2F4qALCAwFR8iRq1h8fDK0ccGdCnR&X-Amz-Signature=b73968b3fd38340c0e0fefa2db33ea7380971a73815648df390294b14a6ee281&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AFT6PN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF3l9q%2B8d47hVX%2BVld3H1Q7aEvuCIFSlg%2BpCg5pTom6mAiEAkY3ijr9YMSQSlIGf0nQanvHZiy%2FZ3aq7ciLBFq%2FWONwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0TqhCvilVD%2FPRmGCrcA7b8STe053KmY%2BcCvmhY7MgXFVFqO0wCbnnEHISswWlpkcfigLLKod%2FF6u0NenMq%2BC28i%2BV0ORk%2FOjcdHdGJ%2BDJRJI58Pcuu9KwIcK1%2BT3NzqsAYDkiUb6nITAWDhDGcSFvmlz84jJL%2FCcG%2BeBEUPcxm1bF6Z%2BnrDWGVh6caCG6ibwvbvvLm2jUnJIBNvQ0DEonzUO9aDCRux6VJq2UgopB5x46BzBXMcE2cic1ft9gAvjbrEZSrwkADO5B%2F07kOe%2BKl8gbbKPAHH%2BIGz1CsjUYBgmcnvoCmkthX%2Fw4ZHF%2BeX6dF65DLTwBNAVszwywTpycfKN9BJSX4eQYIQIjJZEivlFVVaMMI3e%2F3EOSDXK81YK6zgOBaIs2Bb0lArKMQxhWBB7%2BFYgfmQ1z5otcZyncJ77tdMOSE%2FHQcWeFc1Km2oWjFTpECA6vdmLcVkB41rky72LyfY07Uq%2F%2By8ad41e%2FlVdfNjIkB%2BGP9SM11p0g8xJ%2BgnfwdRe65L%2FEBB5%2Fecnm5LNVPN0CELi5KrN%2F%2F2tHFxPLeMnkreB5dvXtvCu1B4AWLPfl6QuLxOxFCWIAfhDNMPcGTITQIuci1DanVD5vZb0W%2B7FTnXTgy57yBGabj5fEtGzTz1Uc6GfazMNrLysAGOqUBT2bq3JjomFAs%2FYnsErmoCWJZ4qCFr1FFVvkTsOQaJOnvnQ6j%2FdEXMZ5xf4U6iUybNYEMln4iGD34WCPIDE70N33kIp4izQvJn3wUbGzYtZiJI%2BtH1IiR2tG7MCthq1Dp3yCopXsRwcIiELcdmAKemKsV6FRt%2BWahEDvx%2Bk2uGIIgzUW%2Bjaox8ZqwDETnU0fq%2F4qALCAwFR8iRq1h8fDK0ccGdCnR&X-Amz-Signature=5096f2508664afa532fa7bb0cb6cac3ab8fe9b24e13972dca1e33d604ccc7929&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AFT6PN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF3l9q%2B8d47hVX%2BVld3H1Q7aEvuCIFSlg%2BpCg5pTom6mAiEAkY3ijr9YMSQSlIGf0nQanvHZiy%2FZ3aq7ciLBFq%2FWONwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0TqhCvilVD%2FPRmGCrcA7b8STe053KmY%2BcCvmhY7MgXFVFqO0wCbnnEHISswWlpkcfigLLKod%2FF6u0NenMq%2BC28i%2BV0ORk%2FOjcdHdGJ%2BDJRJI58Pcuu9KwIcK1%2BT3NzqsAYDkiUb6nITAWDhDGcSFvmlz84jJL%2FCcG%2BeBEUPcxm1bF6Z%2BnrDWGVh6caCG6ibwvbvvLm2jUnJIBNvQ0DEonzUO9aDCRux6VJq2UgopB5x46BzBXMcE2cic1ft9gAvjbrEZSrwkADO5B%2F07kOe%2BKl8gbbKPAHH%2BIGz1CsjUYBgmcnvoCmkthX%2Fw4ZHF%2BeX6dF65DLTwBNAVszwywTpycfKN9BJSX4eQYIQIjJZEivlFVVaMMI3e%2F3EOSDXK81YK6zgOBaIs2Bb0lArKMQxhWBB7%2BFYgfmQ1z5otcZyncJ77tdMOSE%2FHQcWeFc1Km2oWjFTpECA6vdmLcVkB41rky72LyfY07Uq%2F%2By8ad41e%2FlVdfNjIkB%2BGP9SM11p0g8xJ%2BgnfwdRe65L%2FEBB5%2Fecnm5LNVPN0CELi5KrN%2F%2F2tHFxPLeMnkreB5dvXtvCu1B4AWLPfl6QuLxOxFCWIAfhDNMPcGTITQIuci1DanVD5vZb0W%2B7FTnXTgy57yBGabj5fEtGzTz1Uc6GfazMNrLysAGOqUBT2bq3JjomFAs%2FYnsErmoCWJZ4qCFr1FFVvkTsOQaJOnvnQ6j%2FdEXMZ5xf4U6iUybNYEMln4iGD34WCPIDE70N33kIp4izQvJn3wUbGzYtZiJI%2BtH1IiR2tG7MCthq1Dp3yCopXsRwcIiELcdmAKemKsV6FRt%2BWahEDvx%2Bk2uGIIgzUW%2Bjaox8ZqwDETnU0fq%2F4qALCAwFR8iRq1h8fDK0ccGdCnR&X-Amz-Signature=04b5d2deca100d8692636fbeba3140e007438caca81aeb7ea5b8238918015720&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AFT6PN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF3l9q%2B8d47hVX%2BVld3H1Q7aEvuCIFSlg%2BpCg5pTom6mAiEAkY3ijr9YMSQSlIGf0nQanvHZiy%2FZ3aq7ciLBFq%2FWONwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0TqhCvilVD%2FPRmGCrcA7b8STe053KmY%2BcCvmhY7MgXFVFqO0wCbnnEHISswWlpkcfigLLKod%2FF6u0NenMq%2BC28i%2BV0ORk%2FOjcdHdGJ%2BDJRJI58Pcuu9KwIcK1%2BT3NzqsAYDkiUb6nITAWDhDGcSFvmlz84jJL%2FCcG%2BeBEUPcxm1bF6Z%2BnrDWGVh6caCG6ibwvbvvLm2jUnJIBNvQ0DEonzUO9aDCRux6VJq2UgopB5x46BzBXMcE2cic1ft9gAvjbrEZSrwkADO5B%2F07kOe%2BKl8gbbKPAHH%2BIGz1CsjUYBgmcnvoCmkthX%2Fw4ZHF%2BeX6dF65DLTwBNAVszwywTpycfKN9BJSX4eQYIQIjJZEivlFVVaMMI3e%2F3EOSDXK81YK6zgOBaIs2Bb0lArKMQxhWBB7%2BFYgfmQ1z5otcZyncJ77tdMOSE%2FHQcWeFc1Km2oWjFTpECA6vdmLcVkB41rky72LyfY07Uq%2F%2By8ad41e%2FlVdfNjIkB%2BGP9SM11p0g8xJ%2BgnfwdRe65L%2FEBB5%2Fecnm5LNVPN0CELi5KrN%2F%2F2tHFxPLeMnkreB5dvXtvCu1B4AWLPfl6QuLxOxFCWIAfhDNMPcGTITQIuci1DanVD5vZb0W%2B7FTnXTgy57yBGabj5fEtGzTz1Uc6GfazMNrLysAGOqUBT2bq3JjomFAs%2FYnsErmoCWJZ4qCFr1FFVvkTsOQaJOnvnQ6j%2FdEXMZ5xf4U6iUybNYEMln4iGD34WCPIDE70N33kIp4izQvJn3wUbGzYtZiJI%2BtH1IiR2tG7MCthq1Dp3yCopXsRwcIiELcdmAKemKsV6FRt%2BWahEDvx%2Bk2uGIIgzUW%2Bjaox8ZqwDETnU0fq%2F4qALCAwFR8iRq1h8fDK0ccGdCnR&X-Amz-Signature=372dc480d3fd626df98b097b15f64bc13f543eb163f2231ae23ec653be8bbf96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AFT6PN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF3l9q%2B8d47hVX%2BVld3H1Q7aEvuCIFSlg%2BpCg5pTom6mAiEAkY3ijr9YMSQSlIGf0nQanvHZiy%2FZ3aq7ciLBFq%2FWONwqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0TqhCvilVD%2FPRmGCrcA7b8STe053KmY%2BcCvmhY7MgXFVFqO0wCbnnEHISswWlpkcfigLLKod%2FF6u0NenMq%2BC28i%2BV0ORk%2FOjcdHdGJ%2BDJRJI58Pcuu9KwIcK1%2BT3NzqsAYDkiUb6nITAWDhDGcSFvmlz84jJL%2FCcG%2BeBEUPcxm1bF6Z%2BnrDWGVh6caCG6ibwvbvvLm2jUnJIBNvQ0DEonzUO9aDCRux6VJq2UgopB5x46BzBXMcE2cic1ft9gAvjbrEZSrwkADO5B%2F07kOe%2BKl8gbbKPAHH%2BIGz1CsjUYBgmcnvoCmkthX%2Fw4ZHF%2BeX6dF65DLTwBNAVszwywTpycfKN9BJSX4eQYIQIjJZEivlFVVaMMI3e%2F3EOSDXK81YK6zgOBaIs2Bb0lArKMQxhWBB7%2BFYgfmQ1z5otcZyncJ77tdMOSE%2FHQcWeFc1Km2oWjFTpECA6vdmLcVkB41rky72LyfY07Uq%2F%2By8ad41e%2FlVdfNjIkB%2BGP9SM11p0g8xJ%2BgnfwdRe65L%2FEBB5%2Fecnm5LNVPN0CELi5KrN%2F%2F2tHFxPLeMnkreB5dvXtvCu1B4AWLPfl6QuLxOxFCWIAfhDNMPcGTITQIuci1DanVD5vZb0W%2B7FTnXTgy57yBGabj5fEtGzTz1Uc6GfazMNrLysAGOqUBT2bq3JjomFAs%2FYnsErmoCWJZ4qCFr1FFVvkTsOQaJOnvnQ6j%2FdEXMZ5xf4U6iUybNYEMln4iGD34WCPIDE70N33kIp4izQvJn3wUbGzYtZiJI%2BtH1IiR2tG7MCthq1Dp3yCopXsRwcIiELcdmAKemKsV6FRt%2BWahEDvx%2Bk2uGIIgzUW%2Bjaox8ZqwDETnU0fq%2F4qALCAwFR8iRq1h8fDK0ccGdCnR&X-Amz-Signature=f046fa35cc6f5aa3f3cad3a36fbf0c37f276ff8cd0fc59c8094977423a3437d3&X-Amz-SignedHeaders=host&x-id=GetObject)
