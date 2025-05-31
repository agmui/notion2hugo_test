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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKXXNXH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp6bhBoQwf9PcCB2syyBVUENt43MqK9X%2FFoQ3tqwZZUAiEAztwDZ4MHtcVasYJ9pkzVQifQtpg4stpVxgzO2ei%2Bj3IqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOo6O78pmCBqYSeqyrcA8q4Nb8Sh8KKjOP92Q%2FX4zeF2lbzoSIYiJccnzeL5ZVGieWOYdY5tZ7vfWnWWRHJM74qsgXN0VAZf6%2B57UnrKrmWJ6i4eZsZy3Mkb0sazUCy%2B6%2Fu5gMbU%2FWvPJeuQXzheWzo%2F1cAi67800Hon7d%2BF0SvZ1w%2FIYPnzEi%2B3%2FjPqD96m54FkMc1tCPFVx6APmlEvinTIIZJ5KQjipNdjp7mewC%2BYsEPmGS5dCvRrOfIoDZEVJUCHc%2BOsekfWT0Z%2B2TVBZ5%2BPHd29aMBOZdWGwgtbHpFX8xcfqQrG3%2F3qaymLXi%2BW%2FnlWchIrWolHfybbaRdDcUoKTgVOnRJERvhTt4ba%2F3N4oyASm0PfIb1OLtC%2Bti1easLw1%2BVPPBo%2F9CzeOq0BFVJywRYg0lBJ6PtBNTZuxa6vni463V6xZpFhr5Ul%2BiDBLOADw2jOFdzAQ8EPXxRHWPVSZUVKLDaGz9hNwKacxLHmcD7hEJsHjaMzCku5k9z8XOTam6n%2BbsVjgo%2BPlIcqPW4C5E4sdaiB2AwJV5%2Fw%2FWyIuP5GHA6nueXvbMc9sKPHNQdhPCuuZEG7gKDWhwnBsqLK31jy6PgVoCxMsLKMGaDzaqMg6wb4Gk6IcFeGg%2Fqt1VD0VF%2FGqe%2BL%2FfPMNCM6sEGOqUBIzcPsGRhMxa0lTgzPxXuQ9odUiFZiwaGbbgXdTGEb%2FIyeWaE4%2B2J%2FT6YZc%2FgjpWSdvQTeHQptN%2BBNpTVBahmTcIxuOAQ7BQGql6J2VRVgUCiz2CMY9VQBY2NsGWaeJznlkpsytM0Fgmt0E3g6XNETeOTFsOUTQgj4fXYCRMa5JF37bxsnjaj%2FfEqYnXHVNAsNHRld6jDKV6U5%2FdzOUWikSQOd2Z8&X-Amz-Signature=5546aff287105506fd5c841d07889ab1e337e0f2fce14803dcb3266200534683&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKXXNXH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp6bhBoQwf9PcCB2syyBVUENt43MqK9X%2FFoQ3tqwZZUAiEAztwDZ4MHtcVasYJ9pkzVQifQtpg4stpVxgzO2ei%2Bj3IqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOo6O78pmCBqYSeqyrcA8q4Nb8Sh8KKjOP92Q%2FX4zeF2lbzoSIYiJccnzeL5ZVGieWOYdY5tZ7vfWnWWRHJM74qsgXN0VAZf6%2B57UnrKrmWJ6i4eZsZy3Mkb0sazUCy%2B6%2Fu5gMbU%2FWvPJeuQXzheWzo%2F1cAi67800Hon7d%2BF0SvZ1w%2FIYPnzEi%2B3%2FjPqD96m54FkMc1tCPFVx6APmlEvinTIIZJ5KQjipNdjp7mewC%2BYsEPmGS5dCvRrOfIoDZEVJUCHc%2BOsekfWT0Z%2B2TVBZ5%2BPHd29aMBOZdWGwgtbHpFX8xcfqQrG3%2F3qaymLXi%2BW%2FnlWchIrWolHfybbaRdDcUoKTgVOnRJERvhTt4ba%2F3N4oyASm0PfIb1OLtC%2Bti1easLw1%2BVPPBo%2F9CzeOq0BFVJywRYg0lBJ6PtBNTZuxa6vni463V6xZpFhr5Ul%2BiDBLOADw2jOFdzAQ8EPXxRHWPVSZUVKLDaGz9hNwKacxLHmcD7hEJsHjaMzCku5k9z8XOTam6n%2BbsVjgo%2BPlIcqPW4C5E4sdaiB2AwJV5%2Fw%2FWyIuP5GHA6nueXvbMc9sKPHNQdhPCuuZEG7gKDWhwnBsqLK31jy6PgVoCxMsLKMGaDzaqMg6wb4Gk6IcFeGg%2Fqt1VD0VF%2FGqe%2BL%2FfPMNCM6sEGOqUBIzcPsGRhMxa0lTgzPxXuQ9odUiFZiwaGbbgXdTGEb%2FIyeWaE4%2B2J%2FT6YZc%2FgjpWSdvQTeHQptN%2BBNpTVBahmTcIxuOAQ7BQGql6J2VRVgUCiz2CMY9VQBY2NsGWaeJznlkpsytM0Fgmt0E3g6XNETeOTFsOUTQgj4fXYCRMa5JF37bxsnjaj%2FfEqYnXHVNAsNHRld6jDKV6U5%2FdzOUWikSQOd2Z8&X-Amz-Signature=5bed8a8500312668e5aeb337c555f907b39b59bceb03ddaa82ae3559b701d66d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKXXNXH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp6bhBoQwf9PcCB2syyBVUENt43MqK9X%2FFoQ3tqwZZUAiEAztwDZ4MHtcVasYJ9pkzVQifQtpg4stpVxgzO2ei%2Bj3IqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOo6O78pmCBqYSeqyrcA8q4Nb8Sh8KKjOP92Q%2FX4zeF2lbzoSIYiJccnzeL5ZVGieWOYdY5tZ7vfWnWWRHJM74qsgXN0VAZf6%2B57UnrKrmWJ6i4eZsZy3Mkb0sazUCy%2B6%2Fu5gMbU%2FWvPJeuQXzheWzo%2F1cAi67800Hon7d%2BF0SvZ1w%2FIYPnzEi%2B3%2FjPqD96m54FkMc1tCPFVx6APmlEvinTIIZJ5KQjipNdjp7mewC%2BYsEPmGS5dCvRrOfIoDZEVJUCHc%2BOsekfWT0Z%2B2TVBZ5%2BPHd29aMBOZdWGwgtbHpFX8xcfqQrG3%2F3qaymLXi%2BW%2FnlWchIrWolHfybbaRdDcUoKTgVOnRJERvhTt4ba%2F3N4oyASm0PfIb1OLtC%2Bti1easLw1%2BVPPBo%2F9CzeOq0BFVJywRYg0lBJ6PtBNTZuxa6vni463V6xZpFhr5Ul%2BiDBLOADw2jOFdzAQ8EPXxRHWPVSZUVKLDaGz9hNwKacxLHmcD7hEJsHjaMzCku5k9z8XOTam6n%2BbsVjgo%2BPlIcqPW4C5E4sdaiB2AwJV5%2Fw%2FWyIuP5GHA6nueXvbMc9sKPHNQdhPCuuZEG7gKDWhwnBsqLK31jy6PgVoCxMsLKMGaDzaqMg6wb4Gk6IcFeGg%2Fqt1VD0VF%2FGqe%2BL%2FfPMNCM6sEGOqUBIzcPsGRhMxa0lTgzPxXuQ9odUiFZiwaGbbgXdTGEb%2FIyeWaE4%2B2J%2FT6YZc%2FgjpWSdvQTeHQptN%2BBNpTVBahmTcIxuOAQ7BQGql6J2VRVgUCiz2CMY9VQBY2NsGWaeJznlkpsytM0Fgmt0E3g6XNETeOTFsOUTQgj4fXYCRMa5JF37bxsnjaj%2FfEqYnXHVNAsNHRld6jDKV6U5%2FdzOUWikSQOd2Z8&X-Amz-Signature=e5865db88b122ee0fa7a4a31f8602f9a09c43f3f1e1848d3d0599c867eb23cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKXXNXH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp6bhBoQwf9PcCB2syyBVUENt43MqK9X%2FFoQ3tqwZZUAiEAztwDZ4MHtcVasYJ9pkzVQifQtpg4stpVxgzO2ei%2Bj3IqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOo6O78pmCBqYSeqyrcA8q4Nb8Sh8KKjOP92Q%2FX4zeF2lbzoSIYiJccnzeL5ZVGieWOYdY5tZ7vfWnWWRHJM74qsgXN0VAZf6%2B57UnrKrmWJ6i4eZsZy3Mkb0sazUCy%2B6%2Fu5gMbU%2FWvPJeuQXzheWzo%2F1cAi67800Hon7d%2BF0SvZ1w%2FIYPnzEi%2B3%2FjPqD96m54FkMc1tCPFVx6APmlEvinTIIZJ5KQjipNdjp7mewC%2BYsEPmGS5dCvRrOfIoDZEVJUCHc%2BOsekfWT0Z%2B2TVBZ5%2BPHd29aMBOZdWGwgtbHpFX8xcfqQrG3%2F3qaymLXi%2BW%2FnlWchIrWolHfybbaRdDcUoKTgVOnRJERvhTt4ba%2F3N4oyASm0PfIb1OLtC%2Bti1easLw1%2BVPPBo%2F9CzeOq0BFVJywRYg0lBJ6PtBNTZuxa6vni463V6xZpFhr5Ul%2BiDBLOADw2jOFdzAQ8EPXxRHWPVSZUVKLDaGz9hNwKacxLHmcD7hEJsHjaMzCku5k9z8XOTam6n%2BbsVjgo%2BPlIcqPW4C5E4sdaiB2AwJV5%2Fw%2FWyIuP5GHA6nueXvbMc9sKPHNQdhPCuuZEG7gKDWhwnBsqLK31jy6PgVoCxMsLKMGaDzaqMg6wb4Gk6IcFeGg%2Fqt1VD0VF%2FGqe%2BL%2FfPMNCM6sEGOqUBIzcPsGRhMxa0lTgzPxXuQ9odUiFZiwaGbbgXdTGEb%2FIyeWaE4%2B2J%2FT6YZc%2FgjpWSdvQTeHQptN%2BBNpTVBahmTcIxuOAQ7BQGql6J2VRVgUCiz2CMY9VQBY2NsGWaeJznlkpsytM0Fgmt0E3g6XNETeOTFsOUTQgj4fXYCRMa5JF37bxsnjaj%2FfEqYnXHVNAsNHRld6jDKV6U5%2FdzOUWikSQOd2Z8&X-Amz-Signature=fef987436c93b4832c72055337bace14fe6df07705ba5aea36383408d09310cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKXXNXH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp6bhBoQwf9PcCB2syyBVUENt43MqK9X%2FFoQ3tqwZZUAiEAztwDZ4MHtcVasYJ9pkzVQifQtpg4stpVxgzO2ei%2Bj3IqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOo6O78pmCBqYSeqyrcA8q4Nb8Sh8KKjOP92Q%2FX4zeF2lbzoSIYiJccnzeL5ZVGieWOYdY5tZ7vfWnWWRHJM74qsgXN0VAZf6%2B57UnrKrmWJ6i4eZsZy3Mkb0sazUCy%2B6%2Fu5gMbU%2FWvPJeuQXzheWzo%2F1cAi67800Hon7d%2BF0SvZ1w%2FIYPnzEi%2B3%2FjPqD96m54FkMc1tCPFVx6APmlEvinTIIZJ5KQjipNdjp7mewC%2BYsEPmGS5dCvRrOfIoDZEVJUCHc%2BOsekfWT0Z%2B2TVBZ5%2BPHd29aMBOZdWGwgtbHpFX8xcfqQrG3%2F3qaymLXi%2BW%2FnlWchIrWolHfybbaRdDcUoKTgVOnRJERvhTt4ba%2F3N4oyASm0PfIb1OLtC%2Bti1easLw1%2BVPPBo%2F9CzeOq0BFVJywRYg0lBJ6PtBNTZuxa6vni463V6xZpFhr5Ul%2BiDBLOADw2jOFdzAQ8EPXxRHWPVSZUVKLDaGz9hNwKacxLHmcD7hEJsHjaMzCku5k9z8XOTam6n%2BbsVjgo%2BPlIcqPW4C5E4sdaiB2AwJV5%2Fw%2FWyIuP5GHA6nueXvbMc9sKPHNQdhPCuuZEG7gKDWhwnBsqLK31jy6PgVoCxMsLKMGaDzaqMg6wb4Gk6IcFeGg%2Fqt1VD0VF%2FGqe%2BL%2FfPMNCM6sEGOqUBIzcPsGRhMxa0lTgzPxXuQ9odUiFZiwaGbbgXdTGEb%2FIyeWaE4%2B2J%2FT6YZc%2FgjpWSdvQTeHQptN%2BBNpTVBahmTcIxuOAQ7BQGql6J2VRVgUCiz2CMY9VQBY2NsGWaeJznlkpsytM0Fgmt0E3g6XNETeOTFsOUTQgj4fXYCRMa5JF37bxsnjaj%2FfEqYnXHVNAsNHRld6jDKV6U5%2FdzOUWikSQOd2Z8&X-Amz-Signature=639d65075ff4bdc30571ddee54660eebe2a6bf1fd778612eab440738fcaa1b36&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKXXNXH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp6bhBoQwf9PcCB2syyBVUENt43MqK9X%2FFoQ3tqwZZUAiEAztwDZ4MHtcVasYJ9pkzVQifQtpg4stpVxgzO2ei%2Bj3IqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOo6O78pmCBqYSeqyrcA8q4Nb8Sh8KKjOP92Q%2FX4zeF2lbzoSIYiJccnzeL5ZVGieWOYdY5tZ7vfWnWWRHJM74qsgXN0VAZf6%2B57UnrKrmWJ6i4eZsZy3Mkb0sazUCy%2B6%2Fu5gMbU%2FWvPJeuQXzheWzo%2F1cAi67800Hon7d%2BF0SvZ1w%2FIYPnzEi%2B3%2FjPqD96m54FkMc1tCPFVx6APmlEvinTIIZJ5KQjipNdjp7mewC%2BYsEPmGS5dCvRrOfIoDZEVJUCHc%2BOsekfWT0Z%2B2TVBZ5%2BPHd29aMBOZdWGwgtbHpFX8xcfqQrG3%2F3qaymLXi%2BW%2FnlWchIrWolHfybbaRdDcUoKTgVOnRJERvhTt4ba%2F3N4oyASm0PfIb1OLtC%2Bti1easLw1%2BVPPBo%2F9CzeOq0BFVJywRYg0lBJ6PtBNTZuxa6vni463V6xZpFhr5Ul%2BiDBLOADw2jOFdzAQ8EPXxRHWPVSZUVKLDaGz9hNwKacxLHmcD7hEJsHjaMzCku5k9z8XOTam6n%2BbsVjgo%2BPlIcqPW4C5E4sdaiB2AwJV5%2Fw%2FWyIuP5GHA6nueXvbMc9sKPHNQdhPCuuZEG7gKDWhwnBsqLK31jy6PgVoCxMsLKMGaDzaqMg6wb4Gk6IcFeGg%2Fqt1VD0VF%2FGqe%2BL%2FfPMNCM6sEGOqUBIzcPsGRhMxa0lTgzPxXuQ9odUiFZiwaGbbgXdTGEb%2FIyeWaE4%2B2J%2FT6YZc%2FgjpWSdvQTeHQptN%2BBNpTVBahmTcIxuOAQ7BQGql6J2VRVgUCiz2CMY9VQBY2NsGWaeJznlkpsytM0Fgmt0E3g6XNETeOTFsOUTQgj4fXYCRMa5JF37bxsnjaj%2FfEqYnXHVNAsNHRld6jDKV6U5%2FdzOUWikSQOd2Z8&X-Amz-Signature=c265edbcb706a00da97241848ac936ee92f0e6f313d319359117d551399916ed&X-Amz-SignedHeaders=host&x-id=GetObject)
