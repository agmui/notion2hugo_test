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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED7SIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh03zJ%2Fmt5YQKy7T90MA70O74YQNbmZ9HX%2FkLM7YfiJAIgXl1JrHuDzjg5fDzyaqRcmhxME0BQA08PHj7rlSpA1i4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE8tbWrv%2BPvpfZMzyrcAzVD%2FxMtTHHYwesgRn%2BDS6MYm6IWBj3fdyzX1hmYgI%2Bcc5T8jdNt3WUMt%2Fmgxl3ktxb%2BqY9P4IV2QZq7qzJhF6MOy5heez7ReTB8BDOUi%2Bt%2BVFICTGMO6A49nSBz0NU%2Fb7ohzsLJ4SFERqhmH3AiCN1y5B0i0%2Fl%2FW9JfmtzckP2wEWjvj3AWNyXAaP0rV0wM%2Ff0%2BfMBQUgH3%2BbvoNhDNuv9tu06BFo%2BPmtYmBJn5aaARw4igQCtJC88pVuMzD8U0XDXS25XTpwFLGQmr1XQmDuZQS0XdCg%2BkxwXyQtolj74N91seGg7DLWlIclZGI3RIn9VVwqNFCAqhUMzo2AmdU9FmD0ACMlMXOnpZw9W3jOZ6BcjTncgoOTTgqXumh4HZ2ze1PkzphGxkZvk%2B7MqL1Hfgj89J%2FoHi6FFLMuS%2BOMmI8t4jYiUs5KysTXAreNro5ULZItyub%2FTHqjFr7TbvToVNZx2fMOr92vFmq%2BBwlRiXraL4TB5ySmUOFtHdqTFnfdKSGqSvUnbmQjitVE8yPXq0kbesOATdNZHVojOawR61MxSBl%2FtgMpkbXHypWUCDIsZmCmz79VJ6b6XysdLKDOy2XFtOLwoCsgyOGFeZYwYEUe4fdTUdNkekL2vQMPPXj74GOqUBTmkCym%2FT5EnH8fG9mETbpj1JgGh08D4nTIGX1wG4DPMxhPh6L0Hac0y%2Bo9i2d%2FfyoMPdr6LKILn91OpfTDAdqYClJrnl3OOONVnNmfXaO8rWuIJDRxNmCS8gOfHNYANPbIhBNPha8LBjtrRxufisCpxKKyk6VlGUCDz67984A%2FUzUFksVgJ6wcCu0Ie9fT1%2Bkk0O7015G8GwFBAF%2B6NaGg6MFaja&X-Amz-Signature=98116bebfa7f97a1b1d387ec0635cbb2e5ad6832d39068b2045a355566422681&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED7SIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh03zJ%2Fmt5YQKy7T90MA70O74YQNbmZ9HX%2FkLM7YfiJAIgXl1JrHuDzjg5fDzyaqRcmhxME0BQA08PHj7rlSpA1i4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE8tbWrv%2BPvpfZMzyrcAzVD%2FxMtTHHYwesgRn%2BDS6MYm6IWBj3fdyzX1hmYgI%2Bcc5T8jdNt3WUMt%2Fmgxl3ktxb%2BqY9P4IV2QZq7qzJhF6MOy5heez7ReTB8BDOUi%2Bt%2BVFICTGMO6A49nSBz0NU%2Fb7ohzsLJ4SFERqhmH3AiCN1y5B0i0%2Fl%2FW9JfmtzckP2wEWjvj3AWNyXAaP0rV0wM%2Ff0%2BfMBQUgH3%2BbvoNhDNuv9tu06BFo%2BPmtYmBJn5aaARw4igQCtJC88pVuMzD8U0XDXS25XTpwFLGQmr1XQmDuZQS0XdCg%2BkxwXyQtolj74N91seGg7DLWlIclZGI3RIn9VVwqNFCAqhUMzo2AmdU9FmD0ACMlMXOnpZw9W3jOZ6BcjTncgoOTTgqXumh4HZ2ze1PkzphGxkZvk%2B7MqL1Hfgj89J%2FoHi6FFLMuS%2BOMmI8t4jYiUs5KysTXAreNro5ULZItyub%2FTHqjFr7TbvToVNZx2fMOr92vFmq%2BBwlRiXraL4TB5ySmUOFtHdqTFnfdKSGqSvUnbmQjitVE8yPXq0kbesOATdNZHVojOawR61MxSBl%2FtgMpkbXHypWUCDIsZmCmz79VJ6b6XysdLKDOy2XFtOLwoCsgyOGFeZYwYEUe4fdTUdNkekL2vQMPPXj74GOqUBTmkCym%2FT5EnH8fG9mETbpj1JgGh08D4nTIGX1wG4DPMxhPh6L0Hac0y%2Bo9i2d%2FfyoMPdr6LKILn91OpfTDAdqYClJrnl3OOONVnNmfXaO8rWuIJDRxNmCS8gOfHNYANPbIhBNPha8LBjtrRxufisCpxKKyk6VlGUCDz67984A%2FUzUFksVgJ6wcCu0Ie9fT1%2Bkk0O7015G8GwFBAF%2B6NaGg6MFaja&X-Amz-Signature=9a8e56b7fc05d1c4f15657593166e767ee77139592c1bd806de64eab708e9ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED7SIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh03zJ%2Fmt5YQKy7T90MA70O74YQNbmZ9HX%2FkLM7YfiJAIgXl1JrHuDzjg5fDzyaqRcmhxME0BQA08PHj7rlSpA1i4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE8tbWrv%2BPvpfZMzyrcAzVD%2FxMtTHHYwesgRn%2BDS6MYm6IWBj3fdyzX1hmYgI%2Bcc5T8jdNt3WUMt%2Fmgxl3ktxb%2BqY9P4IV2QZq7qzJhF6MOy5heez7ReTB8BDOUi%2Bt%2BVFICTGMO6A49nSBz0NU%2Fb7ohzsLJ4SFERqhmH3AiCN1y5B0i0%2Fl%2FW9JfmtzckP2wEWjvj3AWNyXAaP0rV0wM%2Ff0%2BfMBQUgH3%2BbvoNhDNuv9tu06BFo%2BPmtYmBJn5aaARw4igQCtJC88pVuMzD8U0XDXS25XTpwFLGQmr1XQmDuZQS0XdCg%2BkxwXyQtolj74N91seGg7DLWlIclZGI3RIn9VVwqNFCAqhUMzo2AmdU9FmD0ACMlMXOnpZw9W3jOZ6BcjTncgoOTTgqXumh4HZ2ze1PkzphGxkZvk%2B7MqL1Hfgj89J%2FoHi6FFLMuS%2BOMmI8t4jYiUs5KysTXAreNro5ULZItyub%2FTHqjFr7TbvToVNZx2fMOr92vFmq%2BBwlRiXraL4TB5ySmUOFtHdqTFnfdKSGqSvUnbmQjitVE8yPXq0kbesOATdNZHVojOawR61MxSBl%2FtgMpkbXHypWUCDIsZmCmz79VJ6b6XysdLKDOy2XFtOLwoCsgyOGFeZYwYEUe4fdTUdNkekL2vQMPPXj74GOqUBTmkCym%2FT5EnH8fG9mETbpj1JgGh08D4nTIGX1wG4DPMxhPh6L0Hac0y%2Bo9i2d%2FfyoMPdr6LKILn91OpfTDAdqYClJrnl3OOONVnNmfXaO8rWuIJDRxNmCS8gOfHNYANPbIhBNPha8LBjtrRxufisCpxKKyk6VlGUCDz67984A%2FUzUFksVgJ6wcCu0Ie9fT1%2Bkk0O7015G8GwFBAF%2B6NaGg6MFaja&X-Amz-Signature=88f1ce419cceb65e84f63fe31b0f9ad7878d08f4e108b95c966553e8f1fceb39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED7SIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh03zJ%2Fmt5YQKy7T90MA70O74YQNbmZ9HX%2FkLM7YfiJAIgXl1JrHuDzjg5fDzyaqRcmhxME0BQA08PHj7rlSpA1i4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE8tbWrv%2BPvpfZMzyrcAzVD%2FxMtTHHYwesgRn%2BDS6MYm6IWBj3fdyzX1hmYgI%2Bcc5T8jdNt3WUMt%2Fmgxl3ktxb%2BqY9P4IV2QZq7qzJhF6MOy5heez7ReTB8BDOUi%2Bt%2BVFICTGMO6A49nSBz0NU%2Fb7ohzsLJ4SFERqhmH3AiCN1y5B0i0%2Fl%2FW9JfmtzckP2wEWjvj3AWNyXAaP0rV0wM%2Ff0%2BfMBQUgH3%2BbvoNhDNuv9tu06BFo%2BPmtYmBJn5aaARw4igQCtJC88pVuMzD8U0XDXS25XTpwFLGQmr1XQmDuZQS0XdCg%2BkxwXyQtolj74N91seGg7DLWlIclZGI3RIn9VVwqNFCAqhUMzo2AmdU9FmD0ACMlMXOnpZw9W3jOZ6BcjTncgoOTTgqXumh4HZ2ze1PkzphGxkZvk%2B7MqL1Hfgj89J%2FoHi6FFLMuS%2BOMmI8t4jYiUs5KysTXAreNro5ULZItyub%2FTHqjFr7TbvToVNZx2fMOr92vFmq%2BBwlRiXraL4TB5ySmUOFtHdqTFnfdKSGqSvUnbmQjitVE8yPXq0kbesOATdNZHVojOawR61MxSBl%2FtgMpkbXHypWUCDIsZmCmz79VJ6b6XysdLKDOy2XFtOLwoCsgyOGFeZYwYEUe4fdTUdNkekL2vQMPPXj74GOqUBTmkCym%2FT5EnH8fG9mETbpj1JgGh08D4nTIGX1wG4DPMxhPh6L0Hac0y%2Bo9i2d%2FfyoMPdr6LKILn91OpfTDAdqYClJrnl3OOONVnNmfXaO8rWuIJDRxNmCS8gOfHNYANPbIhBNPha8LBjtrRxufisCpxKKyk6VlGUCDz67984A%2FUzUFksVgJ6wcCu0Ie9fT1%2Bkk0O7015G8GwFBAF%2B6NaGg6MFaja&X-Amz-Signature=441dff2c3de84c021e87e2a9abd8dcbd6dd9f2bb2bba2296506d6a821ad92536&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED7SIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh03zJ%2Fmt5YQKy7T90MA70O74YQNbmZ9HX%2FkLM7YfiJAIgXl1JrHuDzjg5fDzyaqRcmhxME0BQA08PHj7rlSpA1i4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE8tbWrv%2BPvpfZMzyrcAzVD%2FxMtTHHYwesgRn%2BDS6MYm6IWBj3fdyzX1hmYgI%2Bcc5T8jdNt3WUMt%2Fmgxl3ktxb%2BqY9P4IV2QZq7qzJhF6MOy5heez7ReTB8BDOUi%2Bt%2BVFICTGMO6A49nSBz0NU%2Fb7ohzsLJ4SFERqhmH3AiCN1y5B0i0%2Fl%2FW9JfmtzckP2wEWjvj3AWNyXAaP0rV0wM%2Ff0%2BfMBQUgH3%2BbvoNhDNuv9tu06BFo%2BPmtYmBJn5aaARw4igQCtJC88pVuMzD8U0XDXS25XTpwFLGQmr1XQmDuZQS0XdCg%2BkxwXyQtolj74N91seGg7DLWlIclZGI3RIn9VVwqNFCAqhUMzo2AmdU9FmD0ACMlMXOnpZw9W3jOZ6BcjTncgoOTTgqXumh4HZ2ze1PkzphGxkZvk%2B7MqL1Hfgj89J%2FoHi6FFLMuS%2BOMmI8t4jYiUs5KysTXAreNro5ULZItyub%2FTHqjFr7TbvToVNZx2fMOr92vFmq%2BBwlRiXraL4TB5ySmUOFtHdqTFnfdKSGqSvUnbmQjitVE8yPXq0kbesOATdNZHVojOawR61MxSBl%2FtgMpkbXHypWUCDIsZmCmz79VJ6b6XysdLKDOy2XFtOLwoCsgyOGFeZYwYEUe4fdTUdNkekL2vQMPPXj74GOqUBTmkCym%2FT5EnH8fG9mETbpj1JgGh08D4nTIGX1wG4DPMxhPh6L0Hac0y%2Bo9i2d%2FfyoMPdr6LKILn91OpfTDAdqYClJrnl3OOONVnNmfXaO8rWuIJDRxNmCS8gOfHNYANPbIhBNPha8LBjtrRxufisCpxKKyk6VlGUCDz67984A%2FUzUFksVgJ6wcCu0Ie9fT1%2Bkk0O7015G8GwFBAF%2B6NaGg6MFaja&X-Amz-Signature=9442642528f6cadfdb82cceb99057da41a9bccfff7d4487bafe04ce4f1e78e78&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFED7SIM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh03zJ%2Fmt5YQKy7T90MA70O74YQNbmZ9HX%2FkLM7YfiJAIgXl1JrHuDzjg5fDzyaqRcmhxME0BQA08PHj7rlSpA1i4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE8tbWrv%2BPvpfZMzyrcAzVD%2FxMtTHHYwesgRn%2BDS6MYm6IWBj3fdyzX1hmYgI%2Bcc5T8jdNt3WUMt%2Fmgxl3ktxb%2BqY9P4IV2QZq7qzJhF6MOy5heez7ReTB8BDOUi%2Bt%2BVFICTGMO6A49nSBz0NU%2Fb7ohzsLJ4SFERqhmH3AiCN1y5B0i0%2Fl%2FW9JfmtzckP2wEWjvj3AWNyXAaP0rV0wM%2Ff0%2BfMBQUgH3%2BbvoNhDNuv9tu06BFo%2BPmtYmBJn5aaARw4igQCtJC88pVuMzD8U0XDXS25XTpwFLGQmr1XQmDuZQS0XdCg%2BkxwXyQtolj74N91seGg7DLWlIclZGI3RIn9VVwqNFCAqhUMzo2AmdU9FmD0ACMlMXOnpZw9W3jOZ6BcjTncgoOTTgqXumh4HZ2ze1PkzphGxkZvk%2B7MqL1Hfgj89J%2FoHi6FFLMuS%2BOMmI8t4jYiUs5KysTXAreNro5ULZItyub%2FTHqjFr7TbvToVNZx2fMOr92vFmq%2BBwlRiXraL4TB5ySmUOFtHdqTFnfdKSGqSvUnbmQjitVE8yPXq0kbesOATdNZHVojOawR61MxSBl%2FtgMpkbXHypWUCDIsZmCmz79VJ6b6XysdLKDOy2XFtOLwoCsgyOGFeZYwYEUe4fdTUdNkekL2vQMPPXj74GOqUBTmkCym%2FT5EnH8fG9mETbpj1JgGh08D4nTIGX1wG4DPMxhPh6L0Hac0y%2Bo9i2d%2FfyoMPdr6LKILn91OpfTDAdqYClJrnl3OOONVnNmfXaO8rWuIJDRxNmCS8gOfHNYANPbIhBNPha8LBjtrRxufisCpxKKyk6VlGUCDz67984A%2FUzUFksVgJ6wcCu0Ie9fT1%2Bkk0O7015G8GwFBAF%2B6NaGg6MFaja&X-Amz-Signature=52e6f12360ebba8e3c253ce17d83554fdd393860f5ea87532a3d8eabc521dd6d&X-Amz-SignedHeaders=host&x-id=GetObject)
