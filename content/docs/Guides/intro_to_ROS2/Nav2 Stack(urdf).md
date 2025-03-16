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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IZSE26%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqXtTLJQs6nqXhOuPTIxLHbo3wW4aTlSFsCEz5xKi9AIgfAYkVBI9k0wpN5XJG93t6ytGKgk8Amtn1V3EY9pjz88q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPHUsYCX1ZYiO3ezwyrcA6tzCVnZrpT39woE5tcs%2FMt8J3K7l4GAkyPsLnw4bTNkOkXGZtMrAnfHyP9bXgz6jzcGpg79alrXnvnPvNn7NFHWTikXUZ5Cn9Q3SIkzx45TBivt%2FWgZwT4O1p%2FweqtSWXnoR9i00DFSfhg8kFdSFmAV1rWmV3svCNTRPngBarx8cD2D%2B8Wq7i2TISDeJg0fxzY4xjDZFdM97vpHaPf64anj%2Fk0DbXp66pI76i%2Bak7e%2FTU46AbTYoI8EANDO7R%2FSf77lngjAbg9gG9QMWs2eyiMV%2B2lNjIlBAgBdzV8XMl3KxQ5kqAqe0%2FByox4ptAIDk3OoF8MD%2Bh6AyaLLrRY9itqvaNDOMDx%2BPo3Iu8yAdjuYkF1IbrsN3mG6eJIIgFW1aZZ74se1Rv4PhLbjIFfS1EKbldecX9IPM9YZ4LUpC2Lq2%2BzJ7glrvd44gTO%2FUY6z2h7yjiPnocM72Xn9tsMNcXPFMFqcS4B7%2FfSlohZ3IG%2FKE84T444dX7p7PMcvTeq0%2BzrBdXGhb1CqrR6M3liZAHOSDyxl4ZZn9NYzQIj6PWaPUHXFoPcxrdeBvO0WMHMFKN5sefqpkvpgkeCZPPkZvei2Ys139zO48l81XvBG0X0y0Gg5LKhrphvL14YJMIW%2B3L4GOqUBzeEzw581k1rFrjcuw31f3vlvjxmfLlXSIjPenxQ2jgjdWgEHp%2FK3DolY1lrPW40RkZ3paidifv0Pyd1zwmDoVtCggxxQkYU0NVUm%2BZeNlyW0DS88Wfr3WhDiAn%2FIxAMV9MivMSqmdgdqd3GmPZ%2FrwGawgYVEHNPjXtiL%2FDDMqlTZcIPGlUQWLCl6c5rTVtwA%2BPaw%2FwFMts0LWegybG6%2BsmiHW3qq&X-Amz-Signature=30fb18b6bd0a85b43149cdf1186fb9d06b25ffbc4bca2cef2e3e9797cbdf6b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IZSE26%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqXtTLJQs6nqXhOuPTIxLHbo3wW4aTlSFsCEz5xKi9AIgfAYkVBI9k0wpN5XJG93t6ytGKgk8Amtn1V3EY9pjz88q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPHUsYCX1ZYiO3ezwyrcA6tzCVnZrpT39woE5tcs%2FMt8J3K7l4GAkyPsLnw4bTNkOkXGZtMrAnfHyP9bXgz6jzcGpg79alrXnvnPvNn7NFHWTikXUZ5Cn9Q3SIkzx45TBivt%2FWgZwT4O1p%2FweqtSWXnoR9i00DFSfhg8kFdSFmAV1rWmV3svCNTRPngBarx8cD2D%2B8Wq7i2TISDeJg0fxzY4xjDZFdM97vpHaPf64anj%2Fk0DbXp66pI76i%2Bak7e%2FTU46AbTYoI8EANDO7R%2FSf77lngjAbg9gG9QMWs2eyiMV%2B2lNjIlBAgBdzV8XMl3KxQ5kqAqe0%2FByox4ptAIDk3OoF8MD%2Bh6AyaLLrRY9itqvaNDOMDx%2BPo3Iu8yAdjuYkF1IbrsN3mG6eJIIgFW1aZZ74se1Rv4PhLbjIFfS1EKbldecX9IPM9YZ4LUpC2Lq2%2BzJ7glrvd44gTO%2FUY6z2h7yjiPnocM72Xn9tsMNcXPFMFqcS4B7%2FfSlohZ3IG%2FKE84T444dX7p7PMcvTeq0%2BzrBdXGhb1CqrR6M3liZAHOSDyxl4ZZn9NYzQIj6PWaPUHXFoPcxrdeBvO0WMHMFKN5sefqpkvpgkeCZPPkZvei2Ys139zO48l81XvBG0X0y0Gg5LKhrphvL14YJMIW%2B3L4GOqUBzeEzw581k1rFrjcuw31f3vlvjxmfLlXSIjPenxQ2jgjdWgEHp%2FK3DolY1lrPW40RkZ3paidifv0Pyd1zwmDoVtCggxxQkYU0NVUm%2BZeNlyW0DS88Wfr3WhDiAn%2FIxAMV9MivMSqmdgdqd3GmPZ%2FrwGawgYVEHNPjXtiL%2FDDMqlTZcIPGlUQWLCl6c5rTVtwA%2BPaw%2FwFMts0LWegybG6%2BsmiHW3qq&X-Amz-Signature=e06e3bdf55b5b114944a09050aa87a73967777e16e97259423f6ac631316b494&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IZSE26%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqXtTLJQs6nqXhOuPTIxLHbo3wW4aTlSFsCEz5xKi9AIgfAYkVBI9k0wpN5XJG93t6ytGKgk8Amtn1V3EY9pjz88q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPHUsYCX1ZYiO3ezwyrcA6tzCVnZrpT39woE5tcs%2FMt8J3K7l4GAkyPsLnw4bTNkOkXGZtMrAnfHyP9bXgz6jzcGpg79alrXnvnPvNn7NFHWTikXUZ5Cn9Q3SIkzx45TBivt%2FWgZwT4O1p%2FweqtSWXnoR9i00DFSfhg8kFdSFmAV1rWmV3svCNTRPngBarx8cD2D%2B8Wq7i2TISDeJg0fxzY4xjDZFdM97vpHaPf64anj%2Fk0DbXp66pI76i%2Bak7e%2FTU46AbTYoI8EANDO7R%2FSf77lngjAbg9gG9QMWs2eyiMV%2B2lNjIlBAgBdzV8XMl3KxQ5kqAqe0%2FByox4ptAIDk3OoF8MD%2Bh6AyaLLrRY9itqvaNDOMDx%2BPo3Iu8yAdjuYkF1IbrsN3mG6eJIIgFW1aZZ74se1Rv4PhLbjIFfS1EKbldecX9IPM9YZ4LUpC2Lq2%2BzJ7glrvd44gTO%2FUY6z2h7yjiPnocM72Xn9tsMNcXPFMFqcS4B7%2FfSlohZ3IG%2FKE84T444dX7p7PMcvTeq0%2BzrBdXGhb1CqrR6M3liZAHOSDyxl4ZZn9NYzQIj6PWaPUHXFoPcxrdeBvO0WMHMFKN5sefqpkvpgkeCZPPkZvei2Ys139zO48l81XvBG0X0y0Gg5LKhrphvL14YJMIW%2B3L4GOqUBzeEzw581k1rFrjcuw31f3vlvjxmfLlXSIjPenxQ2jgjdWgEHp%2FK3DolY1lrPW40RkZ3paidifv0Pyd1zwmDoVtCggxxQkYU0NVUm%2BZeNlyW0DS88Wfr3WhDiAn%2FIxAMV9MivMSqmdgdqd3GmPZ%2FrwGawgYVEHNPjXtiL%2FDDMqlTZcIPGlUQWLCl6c5rTVtwA%2BPaw%2FwFMts0LWegybG6%2BsmiHW3qq&X-Amz-Signature=a8bdfa5a1eb01265901068d9b4119896a93e30d3bcdc5326e1e2a1ce77d7c657&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IZSE26%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqXtTLJQs6nqXhOuPTIxLHbo3wW4aTlSFsCEz5xKi9AIgfAYkVBI9k0wpN5XJG93t6ytGKgk8Amtn1V3EY9pjz88q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPHUsYCX1ZYiO3ezwyrcA6tzCVnZrpT39woE5tcs%2FMt8J3K7l4GAkyPsLnw4bTNkOkXGZtMrAnfHyP9bXgz6jzcGpg79alrXnvnPvNn7NFHWTikXUZ5Cn9Q3SIkzx45TBivt%2FWgZwT4O1p%2FweqtSWXnoR9i00DFSfhg8kFdSFmAV1rWmV3svCNTRPngBarx8cD2D%2B8Wq7i2TISDeJg0fxzY4xjDZFdM97vpHaPf64anj%2Fk0DbXp66pI76i%2Bak7e%2FTU46AbTYoI8EANDO7R%2FSf77lngjAbg9gG9QMWs2eyiMV%2B2lNjIlBAgBdzV8XMl3KxQ5kqAqe0%2FByox4ptAIDk3OoF8MD%2Bh6AyaLLrRY9itqvaNDOMDx%2BPo3Iu8yAdjuYkF1IbrsN3mG6eJIIgFW1aZZ74se1Rv4PhLbjIFfS1EKbldecX9IPM9YZ4LUpC2Lq2%2BzJ7glrvd44gTO%2FUY6z2h7yjiPnocM72Xn9tsMNcXPFMFqcS4B7%2FfSlohZ3IG%2FKE84T444dX7p7PMcvTeq0%2BzrBdXGhb1CqrR6M3liZAHOSDyxl4ZZn9NYzQIj6PWaPUHXFoPcxrdeBvO0WMHMFKN5sefqpkvpgkeCZPPkZvei2Ys139zO48l81XvBG0X0y0Gg5LKhrphvL14YJMIW%2B3L4GOqUBzeEzw581k1rFrjcuw31f3vlvjxmfLlXSIjPenxQ2jgjdWgEHp%2FK3DolY1lrPW40RkZ3paidifv0Pyd1zwmDoVtCggxxQkYU0NVUm%2BZeNlyW0DS88Wfr3WhDiAn%2FIxAMV9MivMSqmdgdqd3GmPZ%2FrwGawgYVEHNPjXtiL%2FDDMqlTZcIPGlUQWLCl6c5rTVtwA%2BPaw%2FwFMts0LWegybG6%2BsmiHW3qq&X-Amz-Signature=967d56ec2fc918ad0d0d37eb8a43196413cba20544944bbf9854d361f4d18781&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IZSE26%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqXtTLJQs6nqXhOuPTIxLHbo3wW4aTlSFsCEz5xKi9AIgfAYkVBI9k0wpN5XJG93t6ytGKgk8Amtn1V3EY9pjz88q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPHUsYCX1ZYiO3ezwyrcA6tzCVnZrpT39woE5tcs%2FMt8J3K7l4GAkyPsLnw4bTNkOkXGZtMrAnfHyP9bXgz6jzcGpg79alrXnvnPvNn7NFHWTikXUZ5Cn9Q3SIkzx45TBivt%2FWgZwT4O1p%2FweqtSWXnoR9i00DFSfhg8kFdSFmAV1rWmV3svCNTRPngBarx8cD2D%2B8Wq7i2TISDeJg0fxzY4xjDZFdM97vpHaPf64anj%2Fk0DbXp66pI76i%2Bak7e%2FTU46AbTYoI8EANDO7R%2FSf77lngjAbg9gG9QMWs2eyiMV%2B2lNjIlBAgBdzV8XMl3KxQ5kqAqe0%2FByox4ptAIDk3OoF8MD%2Bh6AyaLLrRY9itqvaNDOMDx%2BPo3Iu8yAdjuYkF1IbrsN3mG6eJIIgFW1aZZ74se1Rv4PhLbjIFfS1EKbldecX9IPM9YZ4LUpC2Lq2%2BzJ7glrvd44gTO%2FUY6z2h7yjiPnocM72Xn9tsMNcXPFMFqcS4B7%2FfSlohZ3IG%2FKE84T444dX7p7PMcvTeq0%2BzrBdXGhb1CqrR6M3liZAHOSDyxl4ZZn9NYzQIj6PWaPUHXFoPcxrdeBvO0WMHMFKN5sefqpkvpgkeCZPPkZvei2Ys139zO48l81XvBG0X0y0Gg5LKhrphvL14YJMIW%2B3L4GOqUBzeEzw581k1rFrjcuw31f3vlvjxmfLlXSIjPenxQ2jgjdWgEHp%2FK3DolY1lrPW40RkZ3paidifv0Pyd1zwmDoVtCggxxQkYU0NVUm%2BZeNlyW0DS88Wfr3WhDiAn%2FIxAMV9MivMSqmdgdqd3GmPZ%2FrwGawgYVEHNPjXtiL%2FDDMqlTZcIPGlUQWLCl6c5rTVtwA%2BPaw%2FwFMts0LWegybG6%2BsmiHW3qq&X-Amz-Signature=e3c0e0f77c839a48c8ca6b626ebb50e4691b82fcaff6cd0f6c6c596193a0ed71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3IZSE26%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqXtTLJQs6nqXhOuPTIxLHbo3wW4aTlSFsCEz5xKi9AIgfAYkVBI9k0wpN5XJG93t6ytGKgk8Amtn1V3EY9pjz88q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPHUsYCX1ZYiO3ezwyrcA6tzCVnZrpT39woE5tcs%2FMt8J3K7l4GAkyPsLnw4bTNkOkXGZtMrAnfHyP9bXgz6jzcGpg79alrXnvnPvNn7NFHWTikXUZ5Cn9Q3SIkzx45TBivt%2FWgZwT4O1p%2FweqtSWXnoR9i00DFSfhg8kFdSFmAV1rWmV3svCNTRPngBarx8cD2D%2B8Wq7i2TISDeJg0fxzY4xjDZFdM97vpHaPf64anj%2Fk0DbXp66pI76i%2Bak7e%2FTU46AbTYoI8EANDO7R%2FSf77lngjAbg9gG9QMWs2eyiMV%2B2lNjIlBAgBdzV8XMl3KxQ5kqAqe0%2FByox4ptAIDk3OoF8MD%2Bh6AyaLLrRY9itqvaNDOMDx%2BPo3Iu8yAdjuYkF1IbrsN3mG6eJIIgFW1aZZ74se1Rv4PhLbjIFfS1EKbldecX9IPM9YZ4LUpC2Lq2%2BzJ7glrvd44gTO%2FUY6z2h7yjiPnocM72Xn9tsMNcXPFMFqcS4B7%2FfSlohZ3IG%2FKE84T444dX7p7PMcvTeq0%2BzrBdXGhb1CqrR6M3liZAHOSDyxl4ZZn9NYzQIj6PWaPUHXFoPcxrdeBvO0WMHMFKN5sefqpkvpgkeCZPPkZvei2Ys139zO48l81XvBG0X0y0Gg5LKhrphvL14YJMIW%2B3L4GOqUBzeEzw581k1rFrjcuw31f3vlvjxmfLlXSIjPenxQ2jgjdWgEHp%2FK3DolY1lrPW40RkZ3paidifv0Pyd1zwmDoVtCggxxQkYU0NVUm%2BZeNlyW0DS88Wfr3WhDiAn%2FIxAMV9MivMSqmdgdqd3GmPZ%2FrwGawgYVEHNPjXtiL%2FDDMqlTZcIPGlUQWLCl6c5rTVtwA%2BPaw%2FwFMts0LWegybG6%2BsmiHW3qq&X-Amz-Signature=d47f8fad3ba1706ff0ba5f6c4d3b106acac97bf2a52ba9a9b6f8cb52b72d1523&X-Amz-SignedHeaders=host&x-id=GetObject)
