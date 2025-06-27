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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD3BFDK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEzeCdImlLAVBToa%2F2bI0swZris9riBgB0k6ozRA8XTSAiEA0MxC36euK0gElqbeSpkKNIDAjjhzeH4QYWNzhz9FomIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBTqI2l%2FwA14qLBHPyrcA%2Bi%2BCKN4%2BAWYsmWxU3GYLfV5fF73HNxISkZwnv3E8oeUHqvosw9L1NtgtUc6aiR8bqz4Arr7pV5OIUnLI2DtutJZKh8IJA%2B0Zet95DrZRwBS%2BzirOapazkRhQCLM%2FBEzWB74J%2FjakLSwrfyPL1wWHZ1yt69vB8lZ79Z7pMcsMbjCjTII1E7NOcwyP8XuG1G5xO%2FOVYakmL8F1Cx%2BOyu%2FUsz%2Bd9okav%2Bba82iuxduZJiN%2FrKXZz97rP4Et4%2BCXPhBsevQy9VQMoUtw1xV25dJHuqysbyrkzBCjljJIWOVVu9eUYerLgGUB78Ttu8aRPkjnAnpZtF8KE6SVulrpkI%2BCJ5sgk4QwjVHyse0beHDC6onP5ObQZ1o4D1Qtx%2Bpk5g4PKIZkj2eP3Lre4EhrirE%2BUFRpS7Zcae6EpkvHIVroJdsEpExgNUFv5TBoiQWX9geNX2uccZtiyw95CNBRHxTNjEMXMYlv%2B2a9fUXAvKxtPgnrkzV52NehalHE%2FHnbhAjF74gtPJYsvyyRDdEQSuorRIJ2139XABYNGzSgGg7XvY1FjitHeHvJBfCYA1XmpPEthsyG275A1Ed65w1sqJ8%2F6tti%2BHofIvbvVOeZK8CNRhWhBJ4Gw75LNXglRWNMIv198IGOqUBKZxkE2WSw%2FdW4wK6DW5wTGBAW9%2B42r7N3b1mgEXXygmNEJRfztJCN3iZimxgg9LAP3%2FIszH4Iebop%2B5Y8Tp%2F9JUHh5fhM3hyL%2FrepcT%2FpWwYwR%2FZF0%2Bclur1tFyIS6Wof1JV%2Bd0fYTt1dLAduCpv%2F5SjElhNa%2Fe%2BWd7WS61awojxhwK5vUXTsOrQ3Bk4S%2Fww4zP15N8Ib%2B6jaSPQgEoh5AguUyhg&X-Amz-Signature=bf3a42d3a92b7b0cf02e6f1ecdece75fb72f595501424c57c8c730e7142f48e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD3BFDK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEzeCdImlLAVBToa%2F2bI0swZris9riBgB0k6ozRA8XTSAiEA0MxC36euK0gElqbeSpkKNIDAjjhzeH4QYWNzhz9FomIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBTqI2l%2FwA14qLBHPyrcA%2Bi%2BCKN4%2BAWYsmWxU3GYLfV5fF73HNxISkZwnv3E8oeUHqvosw9L1NtgtUc6aiR8bqz4Arr7pV5OIUnLI2DtutJZKh8IJA%2B0Zet95DrZRwBS%2BzirOapazkRhQCLM%2FBEzWB74J%2FjakLSwrfyPL1wWHZ1yt69vB8lZ79Z7pMcsMbjCjTII1E7NOcwyP8XuG1G5xO%2FOVYakmL8F1Cx%2BOyu%2FUsz%2Bd9okav%2Bba82iuxduZJiN%2FrKXZz97rP4Et4%2BCXPhBsevQy9VQMoUtw1xV25dJHuqysbyrkzBCjljJIWOVVu9eUYerLgGUB78Ttu8aRPkjnAnpZtF8KE6SVulrpkI%2BCJ5sgk4QwjVHyse0beHDC6onP5ObQZ1o4D1Qtx%2Bpk5g4PKIZkj2eP3Lre4EhrirE%2BUFRpS7Zcae6EpkvHIVroJdsEpExgNUFv5TBoiQWX9geNX2uccZtiyw95CNBRHxTNjEMXMYlv%2B2a9fUXAvKxtPgnrkzV52NehalHE%2FHnbhAjF74gtPJYsvyyRDdEQSuorRIJ2139XABYNGzSgGg7XvY1FjitHeHvJBfCYA1XmpPEthsyG275A1Ed65w1sqJ8%2F6tti%2BHofIvbvVOeZK8CNRhWhBJ4Gw75LNXglRWNMIv198IGOqUBKZxkE2WSw%2FdW4wK6DW5wTGBAW9%2B42r7N3b1mgEXXygmNEJRfztJCN3iZimxgg9LAP3%2FIszH4Iebop%2B5Y8Tp%2F9JUHh5fhM3hyL%2FrepcT%2FpWwYwR%2FZF0%2Bclur1tFyIS6Wof1JV%2Bd0fYTt1dLAduCpv%2F5SjElhNa%2Fe%2BWd7WS61awojxhwK5vUXTsOrQ3Bk4S%2Fww4zP15N8Ib%2B6jaSPQgEoh5AguUyhg&X-Amz-Signature=41494a35fdca4ac09bdea7f2a82defd2eb2ff1a71fc844c7282e8b2023256d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD3BFDK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEzeCdImlLAVBToa%2F2bI0swZris9riBgB0k6ozRA8XTSAiEA0MxC36euK0gElqbeSpkKNIDAjjhzeH4QYWNzhz9FomIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBTqI2l%2FwA14qLBHPyrcA%2Bi%2BCKN4%2BAWYsmWxU3GYLfV5fF73HNxISkZwnv3E8oeUHqvosw9L1NtgtUc6aiR8bqz4Arr7pV5OIUnLI2DtutJZKh8IJA%2B0Zet95DrZRwBS%2BzirOapazkRhQCLM%2FBEzWB74J%2FjakLSwrfyPL1wWHZ1yt69vB8lZ79Z7pMcsMbjCjTII1E7NOcwyP8XuG1G5xO%2FOVYakmL8F1Cx%2BOyu%2FUsz%2Bd9okav%2Bba82iuxduZJiN%2FrKXZz97rP4Et4%2BCXPhBsevQy9VQMoUtw1xV25dJHuqysbyrkzBCjljJIWOVVu9eUYerLgGUB78Ttu8aRPkjnAnpZtF8KE6SVulrpkI%2BCJ5sgk4QwjVHyse0beHDC6onP5ObQZ1o4D1Qtx%2Bpk5g4PKIZkj2eP3Lre4EhrirE%2BUFRpS7Zcae6EpkvHIVroJdsEpExgNUFv5TBoiQWX9geNX2uccZtiyw95CNBRHxTNjEMXMYlv%2B2a9fUXAvKxtPgnrkzV52NehalHE%2FHnbhAjF74gtPJYsvyyRDdEQSuorRIJ2139XABYNGzSgGg7XvY1FjitHeHvJBfCYA1XmpPEthsyG275A1Ed65w1sqJ8%2F6tti%2BHofIvbvVOeZK8CNRhWhBJ4Gw75LNXglRWNMIv198IGOqUBKZxkE2WSw%2FdW4wK6DW5wTGBAW9%2B42r7N3b1mgEXXygmNEJRfztJCN3iZimxgg9LAP3%2FIszH4Iebop%2B5Y8Tp%2F9JUHh5fhM3hyL%2FrepcT%2FpWwYwR%2FZF0%2Bclur1tFyIS6Wof1JV%2Bd0fYTt1dLAduCpv%2F5SjElhNa%2Fe%2BWd7WS61awojxhwK5vUXTsOrQ3Bk4S%2Fww4zP15N8Ib%2B6jaSPQgEoh5AguUyhg&X-Amz-Signature=c5f23435edaed84f0c42061ecc75323844052ebaf0440e0afdf205353ced0441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD3BFDK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEzeCdImlLAVBToa%2F2bI0swZris9riBgB0k6ozRA8XTSAiEA0MxC36euK0gElqbeSpkKNIDAjjhzeH4QYWNzhz9FomIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBTqI2l%2FwA14qLBHPyrcA%2Bi%2BCKN4%2BAWYsmWxU3GYLfV5fF73HNxISkZwnv3E8oeUHqvosw9L1NtgtUc6aiR8bqz4Arr7pV5OIUnLI2DtutJZKh8IJA%2B0Zet95DrZRwBS%2BzirOapazkRhQCLM%2FBEzWB74J%2FjakLSwrfyPL1wWHZ1yt69vB8lZ79Z7pMcsMbjCjTII1E7NOcwyP8XuG1G5xO%2FOVYakmL8F1Cx%2BOyu%2FUsz%2Bd9okav%2Bba82iuxduZJiN%2FrKXZz97rP4Et4%2BCXPhBsevQy9VQMoUtw1xV25dJHuqysbyrkzBCjljJIWOVVu9eUYerLgGUB78Ttu8aRPkjnAnpZtF8KE6SVulrpkI%2BCJ5sgk4QwjVHyse0beHDC6onP5ObQZ1o4D1Qtx%2Bpk5g4PKIZkj2eP3Lre4EhrirE%2BUFRpS7Zcae6EpkvHIVroJdsEpExgNUFv5TBoiQWX9geNX2uccZtiyw95CNBRHxTNjEMXMYlv%2B2a9fUXAvKxtPgnrkzV52NehalHE%2FHnbhAjF74gtPJYsvyyRDdEQSuorRIJ2139XABYNGzSgGg7XvY1FjitHeHvJBfCYA1XmpPEthsyG275A1Ed65w1sqJ8%2F6tti%2BHofIvbvVOeZK8CNRhWhBJ4Gw75LNXglRWNMIv198IGOqUBKZxkE2WSw%2FdW4wK6DW5wTGBAW9%2B42r7N3b1mgEXXygmNEJRfztJCN3iZimxgg9LAP3%2FIszH4Iebop%2B5Y8Tp%2F9JUHh5fhM3hyL%2FrepcT%2FpWwYwR%2FZF0%2Bclur1tFyIS6Wof1JV%2Bd0fYTt1dLAduCpv%2F5SjElhNa%2Fe%2BWd7WS61awojxhwK5vUXTsOrQ3Bk4S%2Fww4zP15N8Ib%2B6jaSPQgEoh5AguUyhg&X-Amz-Signature=1be9c08cd7be5a2e162a1c9f1c4af007c7a042adca11eb833159b85eece7e0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD3BFDK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEzeCdImlLAVBToa%2F2bI0swZris9riBgB0k6ozRA8XTSAiEA0MxC36euK0gElqbeSpkKNIDAjjhzeH4QYWNzhz9FomIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBTqI2l%2FwA14qLBHPyrcA%2Bi%2BCKN4%2BAWYsmWxU3GYLfV5fF73HNxISkZwnv3E8oeUHqvosw9L1NtgtUc6aiR8bqz4Arr7pV5OIUnLI2DtutJZKh8IJA%2B0Zet95DrZRwBS%2BzirOapazkRhQCLM%2FBEzWB74J%2FjakLSwrfyPL1wWHZ1yt69vB8lZ79Z7pMcsMbjCjTII1E7NOcwyP8XuG1G5xO%2FOVYakmL8F1Cx%2BOyu%2FUsz%2Bd9okav%2Bba82iuxduZJiN%2FrKXZz97rP4Et4%2BCXPhBsevQy9VQMoUtw1xV25dJHuqysbyrkzBCjljJIWOVVu9eUYerLgGUB78Ttu8aRPkjnAnpZtF8KE6SVulrpkI%2BCJ5sgk4QwjVHyse0beHDC6onP5ObQZ1o4D1Qtx%2Bpk5g4PKIZkj2eP3Lre4EhrirE%2BUFRpS7Zcae6EpkvHIVroJdsEpExgNUFv5TBoiQWX9geNX2uccZtiyw95CNBRHxTNjEMXMYlv%2B2a9fUXAvKxtPgnrkzV52NehalHE%2FHnbhAjF74gtPJYsvyyRDdEQSuorRIJ2139XABYNGzSgGg7XvY1FjitHeHvJBfCYA1XmpPEthsyG275A1Ed65w1sqJ8%2F6tti%2BHofIvbvVOeZK8CNRhWhBJ4Gw75LNXglRWNMIv198IGOqUBKZxkE2WSw%2FdW4wK6DW5wTGBAW9%2B42r7N3b1mgEXXygmNEJRfztJCN3iZimxgg9LAP3%2FIszH4Iebop%2B5Y8Tp%2F9JUHh5fhM3hyL%2FrepcT%2FpWwYwR%2FZF0%2Bclur1tFyIS6Wof1JV%2Bd0fYTt1dLAduCpv%2F5SjElhNa%2Fe%2BWd7WS61awojxhwK5vUXTsOrQ3Bk4S%2Fww4zP15N8Ib%2B6jaSPQgEoh5AguUyhg&X-Amz-Signature=9d9d91a9b92fde3a45cdba741e72b82a9994ffbb4b88b84c948b3bdbcbc72111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGD3BFDK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEzeCdImlLAVBToa%2F2bI0swZris9riBgB0k6ozRA8XTSAiEA0MxC36euK0gElqbeSpkKNIDAjjhzeH4QYWNzhz9FomIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBTqI2l%2FwA14qLBHPyrcA%2Bi%2BCKN4%2BAWYsmWxU3GYLfV5fF73HNxISkZwnv3E8oeUHqvosw9L1NtgtUc6aiR8bqz4Arr7pV5OIUnLI2DtutJZKh8IJA%2B0Zet95DrZRwBS%2BzirOapazkRhQCLM%2FBEzWB74J%2FjakLSwrfyPL1wWHZ1yt69vB8lZ79Z7pMcsMbjCjTII1E7NOcwyP8XuG1G5xO%2FOVYakmL8F1Cx%2BOyu%2FUsz%2Bd9okav%2Bba82iuxduZJiN%2FrKXZz97rP4Et4%2BCXPhBsevQy9VQMoUtw1xV25dJHuqysbyrkzBCjljJIWOVVu9eUYerLgGUB78Ttu8aRPkjnAnpZtF8KE6SVulrpkI%2BCJ5sgk4QwjVHyse0beHDC6onP5ObQZ1o4D1Qtx%2Bpk5g4PKIZkj2eP3Lre4EhrirE%2BUFRpS7Zcae6EpkvHIVroJdsEpExgNUFv5TBoiQWX9geNX2uccZtiyw95CNBRHxTNjEMXMYlv%2B2a9fUXAvKxtPgnrkzV52NehalHE%2FHnbhAjF74gtPJYsvyyRDdEQSuorRIJ2139XABYNGzSgGg7XvY1FjitHeHvJBfCYA1XmpPEthsyG275A1Ed65w1sqJ8%2F6tti%2BHofIvbvVOeZK8CNRhWhBJ4Gw75LNXglRWNMIv198IGOqUBKZxkE2WSw%2FdW4wK6DW5wTGBAW9%2B42r7N3b1mgEXXygmNEJRfztJCN3iZimxgg9LAP3%2FIszH4Iebop%2B5Y8Tp%2F9JUHh5fhM3hyL%2FrepcT%2FpWwYwR%2FZF0%2Bclur1tFyIS6Wof1JV%2Bd0fYTt1dLAduCpv%2F5SjElhNa%2Fe%2BWd7WS61awojxhwK5vUXTsOrQ3Bk4S%2Fww4zP15N8Ib%2B6jaSPQgEoh5AguUyhg&X-Amz-Signature=cce449e3c57a03361aedcc6f54d06c297d2a9f962a67f45fba2086ea4321dba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
