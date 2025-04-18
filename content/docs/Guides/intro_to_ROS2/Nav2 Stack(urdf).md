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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXRXGS3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TVklICyjvS4YBi43360AwdXOnky1QA9x5M5%2BsM5tfwIhAPHZqcSiUKKYsPvRbJCvZfzHKWNp4UKHaX65fbSvjfnzKv8DCGoQABoMNjM3NDIzMTgzODA1Igw4sL0Eooqezm3O6kkq3ANiAi5%2FWpMb%2Bjz1zzob%2BeYsNimrJeNQAZcKwgy%2F3DQThYCza57Uh%2BCmZFf7h3D89s71%2BeAugpGHmPXTHQ%2BjaWletiaBO6uCrmhg%2BBiq47NfTW0Qis0xUKMurOGg0j%2F7oWfH77G0vlurIz%2FH7aFSd35MLKK7Vy9zZQ0m54p17EsXPcdgya%2BVMzwIRpENXIqDtkQ3mdGTMwaDF1VPjjGmK%2FbzfeHXBXkPYOFbrQYgGCc54q7Ke25wpl0JBUiPmHnvZtwFX1q8gV0oMKKHE0aIRP6KYGTWyyPBhPELtmAM4Fnl2f4gJpVgWNAA1wi6Csm1d%2FuzGqTVY%2FbvkpOx8o0bgUlREKCKXiIAvumaay1s%2BVlwDLe6qp3HWgKpqsFult4pGohgn7iHv4i%2FzLzjVRVd%2BVjbGrIvTNGW0eB20XeUUWLAXHpEYjZlu6rzB4Ut9AAaQ93VPsfODimGGZxNiR7NbdcUxrPU5tzsIPAcwJIUScDI22Rfqp8PMgipq95QwwM4KcZ9MRdcAAtz%2FKxuwDKBivpbdDmuGkfhD69qZzi2cpMbRJk%2BZqDuWI0JBoQk%2BjGMCUP0ecwhsoUE2Ynl5cA2mMh88XMc61h7SVDaJJU9FLFtkQR2CjB8IIjvp7isZTCfvYbABjqkAapHdK%2B0i4zvKM5FS0%2B9KFiV5IytWdZLF5wTKRL9T%2F3%2BhM4dDuwQDO%2F%2F9fO9vJoK2ZpY2mwa8Wxyn3eJgfZeRTxjkw7KeiOpBTfFIwdq7ifXPfNMtaU7pWV7h8DxJc8SArOyuUyfXKHYnPAfkO3sDYhbv4exiYv%2BqG4GzxyhYDfyv0LtxGVcBhvjKDxDyTxXkhllNZBqFLt2GPINueU%2FLbX16zIt&X-Amz-Signature=7e9e25d1e916a300a63954ed105064c7a47112ca516d2eb6d8a098bcba3cdb08&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXRXGS3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TVklICyjvS4YBi43360AwdXOnky1QA9x5M5%2BsM5tfwIhAPHZqcSiUKKYsPvRbJCvZfzHKWNp4UKHaX65fbSvjfnzKv8DCGoQABoMNjM3NDIzMTgzODA1Igw4sL0Eooqezm3O6kkq3ANiAi5%2FWpMb%2Bjz1zzob%2BeYsNimrJeNQAZcKwgy%2F3DQThYCza57Uh%2BCmZFf7h3D89s71%2BeAugpGHmPXTHQ%2BjaWletiaBO6uCrmhg%2BBiq47NfTW0Qis0xUKMurOGg0j%2F7oWfH77G0vlurIz%2FH7aFSd35MLKK7Vy9zZQ0m54p17EsXPcdgya%2BVMzwIRpENXIqDtkQ3mdGTMwaDF1VPjjGmK%2FbzfeHXBXkPYOFbrQYgGCc54q7Ke25wpl0JBUiPmHnvZtwFX1q8gV0oMKKHE0aIRP6KYGTWyyPBhPELtmAM4Fnl2f4gJpVgWNAA1wi6Csm1d%2FuzGqTVY%2FbvkpOx8o0bgUlREKCKXiIAvumaay1s%2BVlwDLe6qp3HWgKpqsFult4pGohgn7iHv4i%2FzLzjVRVd%2BVjbGrIvTNGW0eB20XeUUWLAXHpEYjZlu6rzB4Ut9AAaQ93VPsfODimGGZxNiR7NbdcUxrPU5tzsIPAcwJIUScDI22Rfqp8PMgipq95QwwM4KcZ9MRdcAAtz%2FKxuwDKBivpbdDmuGkfhD69qZzi2cpMbRJk%2BZqDuWI0JBoQk%2BjGMCUP0ecwhsoUE2Ynl5cA2mMh88XMc61h7SVDaJJU9FLFtkQR2CjB8IIjvp7isZTCfvYbABjqkAapHdK%2B0i4zvKM5FS0%2B9KFiV5IytWdZLF5wTKRL9T%2F3%2BhM4dDuwQDO%2F%2F9fO9vJoK2ZpY2mwa8Wxyn3eJgfZeRTxjkw7KeiOpBTfFIwdq7ifXPfNMtaU7pWV7h8DxJc8SArOyuUyfXKHYnPAfkO3sDYhbv4exiYv%2BqG4GzxyhYDfyv0LtxGVcBhvjKDxDyTxXkhllNZBqFLt2GPINueU%2FLbX16zIt&X-Amz-Signature=a1772390bb7fef2a0176e76a8a135f23d6024d5df57cf5a5cab12a41080a9857&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXRXGS3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TVklICyjvS4YBi43360AwdXOnky1QA9x5M5%2BsM5tfwIhAPHZqcSiUKKYsPvRbJCvZfzHKWNp4UKHaX65fbSvjfnzKv8DCGoQABoMNjM3NDIzMTgzODA1Igw4sL0Eooqezm3O6kkq3ANiAi5%2FWpMb%2Bjz1zzob%2BeYsNimrJeNQAZcKwgy%2F3DQThYCza57Uh%2BCmZFf7h3D89s71%2BeAugpGHmPXTHQ%2BjaWletiaBO6uCrmhg%2BBiq47NfTW0Qis0xUKMurOGg0j%2F7oWfH77G0vlurIz%2FH7aFSd35MLKK7Vy9zZQ0m54p17EsXPcdgya%2BVMzwIRpENXIqDtkQ3mdGTMwaDF1VPjjGmK%2FbzfeHXBXkPYOFbrQYgGCc54q7Ke25wpl0JBUiPmHnvZtwFX1q8gV0oMKKHE0aIRP6KYGTWyyPBhPELtmAM4Fnl2f4gJpVgWNAA1wi6Csm1d%2FuzGqTVY%2FbvkpOx8o0bgUlREKCKXiIAvumaay1s%2BVlwDLe6qp3HWgKpqsFult4pGohgn7iHv4i%2FzLzjVRVd%2BVjbGrIvTNGW0eB20XeUUWLAXHpEYjZlu6rzB4Ut9AAaQ93VPsfODimGGZxNiR7NbdcUxrPU5tzsIPAcwJIUScDI22Rfqp8PMgipq95QwwM4KcZ9MRdcAAtz%2FKxuwDKBivpbdDmuGkfhD69qZzi2cpMbRJk%2BZqDuWI0JBoQk%2BjGMCUP0ecwhsoUE2Ynl5cA2mMh88XMc61h7SVDaJJU9FLFtkQR2CjB8IIjvp7isZTCfvYbABjqkAapHdK%2B0i4zvKM5FS0%2B9KFiV5IytWdZLF5wTKRL9T%2F3%2BhM4dDuwQDO%2F%2F9fO9vJoK2ZpY2mwa8Wxyn3eJgfZeRTxjkw7KeiOpBTfFIwdq7ifXPfNMtaU7pWV7h8DxJc8SArOyuUyfXKHYnPAfkO3sDYhbv4exiYv%2BqG4GzxyhYDfyv0LtxGVcBhvjKDxDyTxXkhllNZBqFLt2GPINueU%2FLbX16zIt&X-Amz-Signature=28f9a38f2696460b7f08d9ec464b9f7ddc9c1e789ec1e11ed0ea3d02ea9e23ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXRXGS3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TVklICyjvS4YBi43360AwdXOnky1QA9x5M5%2BsM5tfwIhAPHZqcSiUKKYsPvRbJCvZfzHKWNp4UKHaX65fbSvjfnzKv8DCGoQABoMNjM3NDIzMTgzODA1Igw4sL0Eooqezm3O6kkq3ANiAi5%2FWpMb%2Bjz1zzob%2BeYsNimrJeNQAZcKwgy%2F3DQThYCza57Uh%2BCmZFf7h3D89s71%2BeAugpGHmPXTHQ%2BjaWletiaBO6uCrmhg%2BBiq47NfTW0Qis0xUKMurOGg0j%2F7oWfH77G0vlurIz%2FH7aFSd35MLKK7Vy9zZQ0m54p17EsXPcdgya%2BVMzwIRpENXIqDtkQ3mdGTMwaDF1VPjjGmK%2FbzfeHXBXkPYOFbrQYgGCc54q7Ke25wpl0JBUiPmHnvZtwFX1q8gV0oMKKHE0aIRP6KYGTWyyPBhPELtmAM4Fnl2f4gJpVgWNAA1wi6Csm1d%2FuzGqTVY%2FbvkpOx8o0bgUlREKCKXiIAvumaay1s%2BVlwDLe6qp3HWgKpqsFult4pGohgn7iHv4i%2FzLzjVRVd%2BVjbGrIvTNGW0eB20XeUUWLAXHpEYjZlu6rzB4Ut9AAaQ93VPsfODimGGZxNiR7NbdcUxrPU5tzsIPAcwJIUScDI22Rfqp8PMgipq95QwwM4KcZ9MRdcAAtz%2FKxuwDKBivpbdDmuGkfhD69qZzi2cpMbRJk%2BZqDuWI0JBoQk%2BjGMCUP0ecwhsoUE2Ynl5cA2mMh88XMc61h7SVDaJJU9FLFtkQR2CjB8IIjvp7isZTCfvYbABjqkAapHdK%2B0i4zvKM5FS0%2B9KFiV5IytWdZLF5wTKRL9T%2F3%2BhM4dDuwQDO%2F%2F9fO9vJoK2ZpY2mwa8Wxyn3eJgfZeRTxjkw7KeiOpBTfFIwdq7ifXPfNMtaU7pWV7h8DxJc8SArOyuUyfXKHYnPAfkO3sDYhbv4exiYv%2BqG4GzxyhYDfyv0LtxGVcBhvjKDxDyTxXkhllNZBqFLt2GPINueU%2FLbX16zIt&X-Amz-Signature=adda52ca84331a5ab53abb8cfd1dd69d3773cf865d8cffb9c2c3edcb4c5d1123&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXRXGS3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TVklICyjvS4YBi43360AwdXOnky1QA9x5M5%2BsM5tfwIhAPHZqcSiUKKYsPvRbJCvZfzHKWNp4UKHaX65fbSvjfnzKv8DCGoQABoMNjM3NDIzMTgzODA1Igw4sL0Eooqezm3O6kkq3ANiAi5%2FWpMb%2Bjz1zzob%2BeYsNimrJeNQAZcKwgy%2F3DQThYCza57Uh%2BCmZFf7h3D89s71%2BeAugpGHmPXTHQ%2BjaWletiaBO6uCrmhg%2BBiq47NfTW0Qis0xUKMurOGg0j%2F7oWfH77G0vlurIz%2FH7aFSd35MLKK7Vy9zZQ0m54p17EsXPcdgya%2BVMzwIRpENXIqDtkQ3mdGTMwaDF1VPjjGmK%2FbzfeHXBXkPYOFbrQYgGCc54q7Ke25wpl0JBUiPmHnvZtwFX1q8gV0oMKKHE0aIRP6KYGTWyyPBhPELtmAM4Fnl2f4gJpVgWNAA1wi6Csm1d%2FuzGqTVY%2FbvkpOx8o0bgUlREKCKXiIAvumaay1s%2BVlwDLe6qp3HWgKpqsFult4pGohgn7iHv4i%2FzLzjVRVd%2BVjbGrIvTNGW0eB20XeUUWLAXHpEYjZlu6rzB4Ut9AAaQ93VPsfODimGGZxNiR7NbdcUxrPU5tzsIPAcwJIUScDI22Rfqp8PMgipq95QwwM4KcZ9MRdcAAtz%2FKxuwDKBivpbdDmuGkfhD69qZzi2cpMbRJk%2BZqDuWI0JBoQk%2BjGMCUP0ecwhsoUE2Ynl5cA2mMh88XMc61h7SVDaJJU9FLFtkQR2CjB8IIjvp7isZTCfvYbABjqkAapHdK%2B0i4zvKM5FS0%2B9KFiV5IytWdZLF5wTKRL9T%2F3%2BhM4dDuwQDO%2F%2F9fO9vJoK2ZpY2mwa8Wxyn3eJgfZeRTxjkw7KeiOpBTfFIwdq7ifXPfNMtaU7pWV7h8DxJc8SArOyuUyfXKHYnPAfkO3sDYhbv4exiYv%2BqG4GzxyhYDfyv0LtxGVcBhvjKDxDyTxXkhllNZBqFLt2GPINueU%2FLbX16zIt&X-Amz-Signature=46358666ebf2234d4b62f817a6a7696e6694755eae204875750e77c2d7476951&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXRXGS3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TVklICyjvS4YBi43360AwdXOnky1QA9x5M5%2BsM5tfwIhAPHZqcSiUKKYsPvRbJCvZfzHKWNp4UKHaX65fbSvjfnzKv8DCGoQABoMNjM3NDIzMTgzODA1Igw4sL0Eooqezm3O6kkq3ANiAi5%2FWpMb%2Bjz1zzob%2BeYsNimrJeNQAZcKwgy%2F3DQThYCza57Uh%2BCmZFf7h3D89s71%2BeAugpGHmPXTHQ%2BjaWletiaBO6uCrmhg%2BBiq47NfTW0Qis0xUKMurOGg0j%2F7oWfH77G0vlurIz%2FH7aFSd35MLKK7Vy9zZQ0m54p17EsXPcdgya%2BVMzwIRpENXIqDtkQ3mdGTMwaDF1VPjjGmK%2FbzfeHXBXkPYOFbrQYgGCc54q7Ke25wpl0JBUiPmHnvZtwFX1q8gV0oMKKHE0aIRP6KYGTWyyPBhPELtmAM4Fnl2f4gJpVgWNAA1wi6Csm1d%2FuzGqTVY%2FbvkpOx8o0bgUlREKCKXiIAvumaay1s%2BVlwDLe6qp3HWgKpqsFult4pGohgn7iHv4i%2FzLzjVRVd%2BVjbGrIvTNGW0eB20XeUUWLAXHpEYjZlu6rzB4Ut9AAaQ93VPsfODimGGZxNiR7NbdcUxrPU5tzsIPAcwJIUScDI22Rfqp8PMgipq95QwwM4KcZ9MRdcAAtz%2FKxuwDKBivpbdDmuGkfhD69qZzi2cpMbRJk%2BZqDuWI0JBoQk%2BjGMCUP0ecwhsoUE2Ynl5cA2mMh88XMc61h7SVDaJJU9FLFtkQR2CjB8IIjvp7isZTCfvYbABjqkAapHdK%2B0i4zvKM5FS0%2B9KFiV5IytWdZLF5wTKRL9T%2F3%2BhM4dDuwQDO%2F%2F9fO9vJoK2ZpY2mwa8Wxyn3eJgfZeRTxjkw7KeiOpBTfFIwdq7ifXPfNMtaU7pWV7h8DxJc8SArOyuUyfXKHYnPAfkO3sDYhbv4exiYv%2BqG4GzxyhYDfyv0LtxGVcBhvjKDxDyTxXkhllNZBqFLt2GPINueU%2FLbX16zIt&X-Amz-Signature=df649f8e2d963714ade9db59e95a132034071f398ddd8d21542c4aba9bc569a4&X-Amz-SignedHeaders=host&x-id=GetObject)
