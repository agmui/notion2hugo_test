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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSM2O63%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdouEaHDHowVPtxIGkYyTD9wP0HVjuP%2FhejvOGTnWb%2FQIgW3kQy0mbnsQSF2pKqZXAV4SP4XXJxQA055ecexargk0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL83g8nLzlAsfTlF0ircA0gSZijXS06o1rB7928B5KQVzfl7Rs6Gu4T2p3ZlDKXAneEI9J%2FQH7g5lp9fu%2FkMB11lhFUJpWQ39GPTCgxfk4PgvZqnjCCPu98rCI7HRUemc6hynGM81dr9%2FnQ9WHIb2vDkiJIsgErWHCikUJWcZQfBmf%2FJCqtBYPuPIQXSOw%2FhZYxhMbcbElg4af50IDf%2F3CBxmTODA0YbTqtklHqX20HzCVeJVI%2FqzOy14UYXyFiZgApZj%2FEfodOweCcS5W%2F0hNnVJeMMe8xnX4JUNizhvgaEuHtEL8ipYZu8hjHAuQq4p6NeARL5TMinL953aRJl6fG1BwL6XVpUppSYSFMOj6SFZKSF8%2FXdJ5o8cQ545HImEJLP6JfUJVf7DT1y%2BxFQ%2BOEYgamHc1JqB5Ja6le2UVxzGsqrzfSAQX0EOVO3ITby0T%2FL6708bBg3pRYPmg0ActAhDdhy4wE4thmtZfWyQMsPQELDZQCV6VJG3iWG%2BaMrhrqddxq2mFC8RFi4sravan7amnvamfHMIv%2FUoyGDfPweLvOafAOM7eEXaPt16Gfi%2FvpIB3BpZgd5Gx2JyXotLhNFu%2Bn7HbJHOH2Qp3AEU%2FWLq2lLyvCOmydImFHEzfar7I7okOwc%2BeVuEf5cMNn%2FyL8GOqUBrbuZbi80ZOPPKxCOMmvPUuDCxpQ4F%2BO8TVUpgHSMjAJOxokaZV%2BTsPxzXz%2F3z0fC9KS0OmWqvaCVcQTDnik9Sw5HQGEXjk%2FK4bPHggP%2Bllxs%2BDdRefWRNHdqD1Ernb0mtBtKLFWtimcw9huk5jtHscTjQJ1ESvDYlvf28b2yRlxRCjw5DBLzbo%2FLADmD05K2iXCBKOfokGJRD9HmgeVt3u7nCuA5&X-Amz-Signature=70f0e59bef5e6bee38c40580a97a6b3b55f20f27ed8a5482dcf77c9934f3f8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSM2O63%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdouEaHDHowVPtxIGkYyTD9wP0HVjuP%2FhejvOGTnWb%2FQIgW3kQy0mbnsQSF2pKqZXAV4SP4XXJxQA055ecexargk0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL83g8nLzlAsfTlF0ircA0gSZijXS06o1rB7928B5KQVzfl7Rs6Gu4T2p3ZlDKXAneEI9J%2FQH7g5lp9fu%2FkMB11lhFUJpWQ39GPTCgxfk4PgvZqnjCCPu98rCI7HRUemc6hynGM81dr9%2FnQ9WHIb2vDkiJIsgErWHCikUJWcZQfBmf%2FJCqtBYPuPIQXSOw%2FhZYxhMbcbElg4af50IDf%2F3CBxmTODA0YbTqtklHqX20HzCVeJVI%2FqzOy14UYXyFiZgApZj%2FEfodOweCcS5W%2F0hNnVJeMMe8xnX4JUNizhvgaEuHtEL8ipYZu8hjHAuQq4p6NeARL5TMinL953aRJl6fG1BwL6XVpUppSYSFMOj6SFZKSF8%2FXdJ5o8cQ545HImEJLP6JfUJVf7DT1y%2BxFQ%2BOEYgamHc1JqB5Ja6le2UVxzGsqrzfSAQX0EOVO3ITby0T%2FL6708bBg3pRYPmg0ActAhDdhy4wE4thmtZfWyQMsPQELDZQCV6VJG3iWG%2BaMrhrqddxq2mFC8RFi4sravan7amnvamfHMIv%2FUoyGDfPweLvOafAOM7eEXaPt16Gfi%2FvpIB3BpZgd5Gx2JyXotLhNFu%2Bn7HbJHOH2Qp3AEU%2FWLq2lLyvCOmydImFHEzfar7I7okOwc%2BeVuEf5cMNn%2FyL8GOqUBrbuZbi80ZOPPKxCOMmvPUuDCxpQ4F%2BO8TVUpgHSMjAJOxokaZV%2BTsPxzXz%2F3z0fC9KS0OmWqvaCVcQTDnik9Sw5HQGEXjk%2FK4bPHggP%2Bllxs%2BDdRefWRNHdqD1Ernb0mtBtKLFWtimcw9huk5jtHscTjQJ1ESvDYlvf28b2yRlxRCjw5DBLzbo%2FLADmD05K2iXCBKOfokGJRD9HmgeVt3u7nCuA5&X-Amz-Signature=09b682fbc1e85dce272d49b39b9f4999cf54f0930bb38ea83ae5bef5a78f4217&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSM2O63%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdouEaHDHowVPtxIGkYyTD9wP0HVjuP%2FhejvOGTnWb%2FQIgW3kQy0mbnsQSF2pKqZXAV4SP4XXJxQA055ecexargk0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL83g8nLzlAsfTlF0ircA0gSZijXS06o1rB7928B5KQVzfl7Rs6Gu4T2p3ZlDKXAneEI9J%2FQH7g5lp9fu%2FkMB11lhFUJpWQ39GPTCgxfk4PgvZqnjCCPu98rCI7HRUemc6hynGM81dr9%2FnQ9WHIb2vDkiJIsgErWHCikUJWcZQfBmf%2FJCqtBYPuPIQXSOw%2FhZYxhMbcbElg4af50IDf%2F3CBxmTODA0YbTqtklHqX20HzCVeJVI%2FqzOy14UYXyFiZgApZj%2FEfodOweCcS5W%2F0hNnVJeMMe8xnX4JUNizhvgaEuHtEL8ipYZu8hjHAuQq4p6NeARL5TMinL953aRJl6fG1BwL6XVpUppSYSFMOj6SFZKSF8%2FXdJ5o8cQ545HImEJLP6JfUJVf7DT1y%2BxFQ%2BOEYgamHc1JqB5Ja6le2UVxzGsqrzfSAQX0EOVO3ITby0T%2FL6708bBg3pRYPmg0ActAhDdhy4wE4thmtZfWyQMsPQELDZQCV6VJG3iWG%2BaMrhrqddxq2mFC8RFi4sravan7amnvamfHMIv%2FUoyGDfPweLvOafAOM7eEXaPt16Gfi%2FvpIB3BpZgd5Gx2JyXotLhNFu%2Bn7HbJHOH2Qp3AEU%2FWLq2lLyvCOmydImFHEzfar7I7okOwc%2BeVuEf5cMNn%2FyL8GOqUBrbuZbi80ZOPPKxCOMmvPUuDCxpQ4F%2BO8TVUpgHSMjAJOxokaZV%2BTsPxzXz%2F3z0fC9KS0OmWqvaCVcQTDnik9Sw5HQGEXjk%2FK4bPHggP%2Bllxs%2BDdRefWRNHdqD1Ernb0mtBtKLFWtimcw9huk5jtHscTjQJ1ESvDYlvf28b2yRlxRCjw5DBLzbo%2FLADmD05K2iXCBKOfokGJRD9HmgeVt3u7nCuA5&X-Amz-Signature=d978fa1dba51dcd6147a46ef4c70100161fd34bc4fbde755e51c9ea7a4dc4e28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSM2O63%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdouEaHDHowVPtxIGkYyTD9wP0HVjuP%2FhejvOGTnWb%2FQIgW3kQy0mbnsQSF2pKqZXAV4SP4XXJxQA055ecexargk0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL83g8nLzlAsfTlF0ircA0gSZijXS06o1rB7928B5KQVzfl7Rs6Gu4T2p3ZlDKXAneEI9J%2FQH7g5lp9fu%2FkMB11lhFUJpWQ39GPTCgxfk4PgvZqnjCCPu98rCI7HRUemc6hynGM81dr9%2FnQ9WHIb2vDkiJIsgErWHCikUJWcZQfBmf%2FJCqtBYPuPIQXSOw%2FhZYxhMbcbElg4af50IDf%2F3CBxmTODA0YbTqtklHqX20HzCVeJVI%2FqzOy14UYXyFiZgApZj%2FEfodOweCcS5W%2F0hNnVJeMMe8xnX4JUNizhvgaEuHtEL8ipYZu8hjHAuQq4p6NeARL5TMinL953aRJl6fG1BwL6XVpUppSYSFMOj6SFZKSF8%2FXdJ5o8cQ545HImEJLP6JfUJVf7DT1y%2BxFQ%2BOEYgamHc1JqB5Ja6le2UVxzGsqrzfSAQX0EOVO3ITby0T%2FL6708bBg3pRYPmg0ActAhDdhy4wE4thmtZfWyQMsPQELDZQCV6VJG3iWG%2BaMrhrqddxq2mFC8RFi4sravan7amnvamfHMIv%2FUoyGDfPweLvOafAOM7eEXaPt16Gfi%2FvpIB3BpZgd5Gx2JyXotLhNFu%2Bn7HbJHOH2Qp3AEU%2FWLq2lLyvCOmydImFHEzfar7I7okOwc%2BeVuEf5cMNn%2FyL8GOqUBrbuZbi80ZOPPKxCOMmvPUuDCxpQ4F%2BO8TVUpgHSMjAJOxokaZV%2BTsPxzXz%2F3z0fC9KS0OmWqvaCVcQTDnik9Sw5HQGEXjk%2FK4bPHggP%2Bllxs%2BDdRefWRNHdqD1Ernb0mtBtKLFWtimcw9huk5jtHscTjQJ1ESvDYlvf28b2yRlxRCjw5DBLzbo%2FLADmD05K2iXCBKOfokGJRD9HmgeVt3u7nCuA5&X-Amz-Signature=07de613d43bcc4a7e1b0b990e3b821a4350c2426de473b10be4e50e3a1bd8203&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSM2O63%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdouEaHDHowVPtxIGkYyTD9wP0HVjuP%2FhejvOGTnWb%2FQIgW3kQy0mbnsQSF2pKqZXAV4SP4XXJxQA055ecexargk0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL83g8nLzlAsfTlF0ircA0gSZijXS06o1rB7928B5KQVzfl7Rs6Gu4T2p3ZlDKXAneEI9J%2FQH7g5lp9fu%2FkMB11lhFUJpWQ39GPTCgxfk4PgvZqnjCCPu98rCI7HRUemc6hynGM81dr9%2FnQ9WHIb2vDkiJIsgErWHCikUJWcZQfBmf%2FJCqtBYPuPIQXSOw%2FhZYxhMbcbElg4af50IDf%2F3CBxmTODA0YbTqtklHqX20HzCVeJVI%2FqzOy14UYXyFiZgApZj%2FEfodOweCcS5W%2F0hNnVJeMMe8xnX4JUNizhvgaEuHtEL8ipYZu8hjHAuQq4p6NeARL5TMinL953aRJl6fG1BwL6XVpUppSYSFMOj6SFZKSF8%2FXdJ5o8cQ545HImEJLP6JfUJVf7DT1y%2BxFQ%2BOEYgamHc1JqB5Ja6le2UVxzGsqrzfSAQX0EOVO3ITby0T%2FL6708bBg3pRYPmg0ActAhDdhy4wE4thmtZfWyQMsPQELDZQCV6VJG3iWG%2BaMrhrqddxq2mFC8RFi4sravan7amnvamfHMIv%2FUoyGDfPweLvOafAOM7eEXaPt16Gfi%2FvpIB3BpZgd5Gx2JyXotLhNFu%2Bn7HbJHOH2Qp3AEU%2FWLq2lLyvCOmydImFHEzfar7I7okOwc%2BeVuEf5cMNn%2FyL8GOqUBrbuZbi80ZOPPKxCOMmvPUuDCxpQ4F%2BO8TVUpgHSMjAJOxokaZV%2BTsPxzXz%2F3z0fC9KS0OmWqvaCVcQTDnik9Sw5HQGEXjk%2FK4bPHggP%2Bllxs%2BDdRefWRNHdqD1Ernb0mtBtKLFWtimcw9huk5jtHscTjQJ1ESvDYlvf28b2yRlxRCjw5DBLzbo%2FLADmD05K2iXCBKOfokGJRD9HmgeVt3u7nCuA5&X-Amz-Signature=c9321789f2f3d8bd082ef6328253ad1f79ac9ac4b28daac8255f1a375611cd70&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHSM2O63%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdouEaHDHowVPtxIGkYyTD9wP0HVjuP%2FhejvOGTnWb%2FQIgW3kQy0mbnsQSF2pKqZXAV4SP4XXJxQA055ecexargk0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDL83g8nLzlAsfTlF0ircA0gSZijXS06o1rB7928B5KQVzfl7Rs6Gu4T2p3ZlDKXAneEI9J%2FQH7g5lp9fu%2FkMB11lhFUJpWQ39GPTCgxfk4PgvZqnjCCPu98rCI7HRUemc6hynGM81dr9%2FnQ9WHIb2vDkiJIsgErWHCikUJWcZQfBmf%2FJCqtBYPuPIQXSOw%2FhZYxhMbcbElg4af50IDf%2F3CBxmTODA0YbTqtklHqX20HzCVeJVI%2FqzOy14UYXyFiZgApZj%2FEfodOweCcS5W%2F0hNnVJeMMe8xnX4JUNizhvgaEuHtEL8ipYZu8hjHAuQq4p6NeARL5TMinL953aRJl6fG1BwL6XVpUppSYSFMOj6SFZKSF8%2FXdJ5o8cQ545HImEJLP6JfUJVf7DT1y%2BxFQ%2BOEYgamHc1JqB5Ja6le2UVxzGsqrzfSAQX0EOVO3ITby0T%2FL6708bBg3pRYPmg0ActAhDdhy4wE4thmtZfWyQMsPQELDZQCV6VJG3iWG%2BaMrhrqddxq2mFC8RFi4sravan7amnvamfHMIv%2FUoyGDfPweLvOafAOM7eEXaPt16Gfi%2FvpIB3BpZgd5Gx2JyXotLhNFu%2Bn7HbJHOH2Qp3AEU%2FWLq2lLyvCOmydImFHEzfar7I7okOwc%2BeVuEf5cMNn%2FyL8GOqUBrbuZbi80ZOPPKxCOMmvPUuDCxpQ4F%2BO8TVUpgHSMjAJOxokaZV%2BTsPxzXz%2F3z0fC9KS0OmWqvaCVcQTDnik9Sw5HQGEXjk%2FK4bPHggP%2Bllxs%2BDdRefWRNHdqD1Ernb0mtBtKLFWtimcw9huk5jtHscTjQJ1ESvDYlvf28b2yRlxRCjw5DBLzbo%2FLADmD05K2iXCBKOfokGJRD9HmgeVt3u7nCuA5&X-Amz-Signature=91424b2ac5ce25e2333cc9827487f451342813032571cda7fc7c00fe5bde42c0&X-Amz-SignedHeaders=host&x-id=GetObject)
