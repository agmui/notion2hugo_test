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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LTEQNG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iO8XNA0Kw09PRYgilygWQR%2BzPfq7khYl%2Fc7OGMxOtAIgR29TnX9%2B%2BAs3gRq8am%2F%2FSTX1VCjOmX70P9Ugf%2BHGUngqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRh%2FnL8QXESeZewiCrcA5gjN7iPMV2LzdYFgRTPZft5Iixia%2FsveIMl8uCOX0qEmMShmwsXFfXWFz2KHV99ALNHVh9rZlEEunejpIbtMrfOVdMZeA9pxjRJQtH%2Bzo1PzgelKjcKwgWRh0JVOE%2FPK18KOjZcaJFeKAj4YH4xPAnv0TMv3Zk6KwtcSz7fReKVEE1CjcrAUjosgY%2Bx%2FRJDa8w9sw9%2B358mzrsLlEblqhUFq2NOFtVGJKdg6ts9YJtUocGOyqzzvQAKFcRb3Y21%2BVYKiifAz5SX0c77JL8i401Yo0rsxmZqJoh%2FsKJQYcAojxb5TZZmuT%2BUPJk8CWeBNmNn8%2FGMKyJbjkdgcRcKStAIVoFyzvuPTa1eOl8QLz8Og05lkaJJkjBVa7SXmeNCjMBzKIEGzxL%2FpgVqACHm6OwzVIMeeQ9Xn1qXcHWVUrZQKkrXPHS0nbaBNzMoAQyUxUAZzheQna6Cw9pssN2%2Fkm%2FYZo%2FEuEIkEeLzbKQrcHvISBYhfqXiKwzk6Iv7BtIATV%2FwEl5x5uhyabx16Ud50dnarFnuhGz0Z5R0E%2FYp7riRfNkDD%2FUT4m8eaHC4EMOnu6F7R%2B5nmRjzsL6BPBLPMjjnLPzcpcHsEzBKeD8R1BDGW7912CvZGVZFL14AMILeqsEGOqUBelmLJ8bvOoFF9rq4uosQvs8OUi1hHbPysllIf0nLFMYWGbc0SvkPAd7HiHFDpBtxx2C3QSme1CTAljJCKLotdTPCdo0TnwwPngorbxNjwWzjZtUtKzwhhpx7wFHQgTc8wUsjfnpGZkVzYg0e02ZApczymm2vgD%2BTLDpnR8%2BDBsD9fZ48fLVuSBR%2FmrQaJn%2FV3t5jwNl3FEBJQa2fnDTwNsMmJDEi&X-Amz-Signature=06dca2b2a95792bf6025f6de4cbe1c064de65f3627e43d37c2a0e790a5f7ceb1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LTEQNG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iO8XNA0Kw09PRYgilygWQR%2BzPfq7khYl%2Fc7OGMxOtAIgR29TnX9%2B%2BAs3gRq8am%2F%2FSTX1VCjOmX70P9Ugf%2BHGUngqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRh%2FnL8QXESeZewiCrcA5gjN7iPMV2LzdYFgRTPZft5Iixia%2FsveIMl8uCOX0qEmMShmwsXFfXWFz2KHV99ALNHVh9rZlEEunejpIbtMrfOVdMZeA9pxjRJQtH%2Bzo1PzgelKjcKwgWRh0JVOE%2FPK18KOjZcaJFeKAj4YH4xPAnv0TMv3Zk6KwtcSz7fReKVEE1CjcrAUjosgY%2Bx%2FRJDa8w9sw9%2B358mzrsLlEblqhUFq2NOFtVGJKdg6ts9YJtUocGOyqzzvQAKFcRb3Y21%2BVYKiifAz5SX0c77JL8i401Yo0rsxmZqJoh%2FsKJQYcAojxb5TZZmuT%2BUPJk8CWeBNmNn8%2FGMKyJbjkdgcRcKStAIVoFyzvuPTa1eOl8QLz8Og05lkaJJkjBVa7SXmeNCjMBzKIEGzxL%2FpgVqACHm6OwzVIMeeQ9Xn1qXcHWVUrZQKkrXPHS0nbaBNzMoAQyUxUAZzheQna6Cw9pssN2%2Fkm%2FYZo%2FEuEIkEeLzbKQrcHvISBYhfqXiKwzk6Iv7BtIATV%2FwEl5x5uhyabx16Ud50dnarFnuhGz0Z5R0E%2FYp7riRfNkDD%2FUT4m8eaHC4EMOnu6F7R%2B5nmRjzsL6BPBLPMjjnLPzcpcHsEzBKeD8R1BDGW7912CvZGVZFL14AMILeqsEGOqUBelmLJ8bvOoFF9rq4uosQvs8OUi1hHbPysllIf0nLFMYWGbc0SvkPAd7HiHFDpBtxx2C3QSme1CTAljJCKLotdTPCdo0TnwwPngorbxNjwWzjZtUtKzwhhpx7wFHQgTc8wUsjfnpGZkVzYg0e02ZApczymm2vgD%2BTLDpnR8%2BDBsD9fZ48fLVuSBR%2FmrQaJn%2FV3t5jwNl3FEBJQa2fnDTwNsMmJDEi&X-Amz-Signature=075534ba9b8a16eb047f57df0c50c99ab7b73f38f2e5c06f98459b6db54f5019&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LTEQNG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iO8XNA0Kw09PRYgilygWQR%2BzPfq7khYl%2Fc7OGMxOtAIgR29TnX9%2B%2BAs3gRq8am%2F%2FSTX1VCjOmX70P9Ugf%2BHGUngqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRh%2FnL8QXESeZewiCrcA5gjN7iPMV2LzdYFgRTPZft5Iixia%2FsveIMl8uCOX0qEmMShmwsXFfXWFz2KHV99ALNHVh9rZlEEunejpIbtMrfOVdMZeA9pxjRJQtH%2Bzo1PzgelKjcKwgWRh0JVOE%2FPK18KOjZcaJFeKAj4YH4xPAnv0TMv3Zk6KwtcSz7fReKVEE1CjcrAUjosgY%2Bx%2FRJDa8w9sw9%2B358mzrsLlEblqhUFq2NOFtVGJKdg6ts9YJtUocGOyqzzvQAKFcRb3Y21%2BVYKiifAz5SX0c77JL8i401Yo0rsxmZqJoh%2FsKJQYcAojxb5TZZmuT%2BUPJk8CWeBNmNn8%2FGMKyJbjkdgcRcKStAIVoFyzvuPTa1eOl8QLz8Og05lkaJJkjBVa7SXmeNCjMBzKIEGzxL%2FpgVqACHm6OwzVIMeeQ9Xn1qXcHWVUrZQKkrXPHS0nbaBNzMoAQyUxUAZzheQna6Cw9pssN2%2Fkm%2FYZo%2FEuEIkEeLzbKQrcHvISBYhfqXiKwzk6Iv7BtIATV%2FwEl5x5uhyabx16Ud50dnarFnuhGz0Z5R0E%2FYp7riRfNkDD%2FUT4m8eaHC4EMOnu6F7R%2B5nmRjzsL6BPBLPMjjnLPzcpcHsEzBKeD8R1BDGW7912CvZGVZFL14AMILeqsEGOqUBelmLJ8bvOoFF9rq4uosQvs8OUi1hHbPysllIf0nLFMYWGbc0SvkPAd7HiHFDpBtxx2C3QSme1CTAljJCKLotdTPCdo0TnwwPngorbxNjwWzjZtUtKzwhhpx7wFHQgTc8wUsjfnpGZkVzYg0e02ZApczymm2vgD%2BTLDpnR8%2BDBsD9fZ48fLVuSBR%2FmrQaJn%2FV3t5jwNl3FEBJQa2fnDTwNsMmJDEi&X-Amz-Signature=2ac08a88506be19513d0880cd8e1d5ef8e0d60b82a870c309ad2515a531c547e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LTEQNG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iO8XNA0Kw09PRYgilygWQR%2BzPfq7khYl%2Fc7OGMxOtAIgR29TnX9%2B%2BAs3gRq8am%2F%2FSTX1VCjOmX70P9Ugf%2BHGUngqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRh%2FnL8QXESeZewiCrcA5gjN7iPMV2LzdYFgRTPZft5Iixia%2FsveIMl8uCOX0qEmMShmwsXFfXWFz2KHV99ALNHVh9rZlEEunejpIbtMrfOVdMZeA9pxjRJQtH%2Bzo1PzgelKjcKwgWRh0JVOE%2FPK18KOjZcaJFeKAj4YH4xPAnv0TMv3Zk6KwtcSz7fReKVEE1CjcrAUjosgY%2Bx%2FRJDa8w9sw9%2B358mzrsLlEblqhUFq2NOFtVGJKdg6ts9YJtUocGOyqzzvQAKFcRb3Y21%2BVYKiifAz5SX0c77JL8i401Yo0rsxmZqJoh%2FsKJQYcAojxb5TZZmuT%2BUPJk8CWeBNmNn8%2FGMKyJbjkdgcRcKStAIVoFyzvuPTa1eOl8QLz8Og05lkaJJkjBVa7SXmeNCjMBzKIEGzxL%2FpgVqACHm6OwzVIMeeQ9Xn1qXcHWVUrZQKkrXPHS0nbaBNzMoAQyUxUAZzheQna6Cw9pssN2%2Fkm%2FYZo%2FEuEIkEeLzbKQrcHvISBYhfqXiKwzk6Iv7BtIATV%2FwEl5x5uhyabx16Ud50dnarFnuhGz0Z5R0E%2FYp7riRfNkDD%2FUT4m8eaHC4EMOnu6F7R%2B5nmRjzsL6BPBLPMjjnLPzcpcHsEzBKeD8R1BDGW7912CvZGVZFL14AMILeqsEGOqUBelmLJ8bvOoFF9rq4uosQvs8OUi1hHbPysllIf0nLFMYWGbc0SvkPAd7HiHFDpBtxx2C3QSme1CTAljJCKLotdTPCdo0TnwwPngorbxNjwWzjZtUtKzwhhpx7wFHQgTc8wUsjfnpGZkVzYg0e02ZApczymm2vgD%2BTLDpnR8%2BDBsD9fZ48fLVuSBR%2FmrQaJn%2FV3t5jwNl3FEBJQa2fnDTwNsMmJDEi&X-Amz-Signature=bbbfd96255efd4349ec07c8716755b0acea5f1348cf41dfc7ecdeaa416b5e7de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LTEQNG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iO8XNA0Kw09PRYgilygWQR%2BzPfq7khYl%2Fc7OGMxOtAIgR29TnX9%2B%2BAs3gRq8am%2F%2FSTX1VCjOmX70P9Ugf%2BHGUngqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRh%2FnL8QXESeZewiCrcA5gjN7iPMV2LzdYFgRTPZft5Iixia%2FsveIMl8uCOX0qEmMShmwsXFfXWFz2KHV99ALNHVh9rZlEEunejpIbtMrfOVdMZeA9pxjRJQtH%2Bzo1PzgelKjcKwgWRh0JVOE%2FPK18KOjZcaJFeKAj4YH4xPAnv0TMv3Zk6KwtcSz7fReKVEE1CjcrAUjosgY%2Bx%2FRJDa8w9sw9%2B358mzrsLlEblqhUFq2NOFtVGJKdg6ts9YJtUocGOyqzzvQAKFcRb3Y21%2BVYKiifAz5SX0c77JL8i401Yo0rsxmZqJoh%2FsKJQYcAojxb5TZZmuT%2BUPJk8CWeBNmNn8%2FGMKyJbjkdgcRcKStAIVoFyzvuPTa1eOl8QLz8Og05lkaJJkjBVa7SXmeNCjMBzKIEGzxL%2FpgVqACHm6OwzVIMeeQ9Xn1qXcHWVUrZQKkrXPHS0nbaBNzMoAQyUxUAZzheQna6Cw9pssN2%2Fkm%2FYZo%2FEuEIkEeLzbKQrcHvISBYhfqXiKwzk6Iv7BtIATV%2FwEl5x5uhyabx16Ud50dnarFnuhGz0Z5R0E%2FYp7riRfNkDD%2FUT4m8eaHC4EMOnu6F7R%2B5nmRjzsL6BPBLPMjjnLPzcpcHsEzBKeD8R1BDGW7912CvZGVZFL14AMILeqsEGOqUBelmLJ8bvOoFF9rq4uosQvs8OUi1hHbPysllIf0nLFMYWGbc0SvkPAd7HiHFDpBtxx2C3QSme1CTAljJCKLotdTPCdo0TnwwPngorbxNjwWzjZtUtKzwhhpx7wFHQgTc8wUsjfnpGZkVzYg0e02ZApczymm2vgD%2BTLDpnR8%2BDBsD9fZ48fLVuSBR%2FmrQaJn%2FV3t5jwNl3FEBJQa2fnDTwNsMmJDEi&X-Amz-Signature=7170e8c03c01f2fd08776aefc6ede51afab293a8957e52e227fdcea7e99df490&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LTEQNG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iO8XNA0Kw09PRYgilygWQR%2BzPfq7khYl%2Fc7OGMxOtAIgR29TnX9%2B%2BAs3gRq8am%2F%2FSTX1VCjOmX70P9Ugf%2BHGUngqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRh%2FnL8QXESeZewiCrcA5gjN7iPMV2LzdYFgRTPZft5Iixia%2FsveIMl8uCOX0qEmMShmwsXFfXWFz2KHV99ALNHVh9rZlEEunejpIbtMrfOVdMZeA9pxjRJQtH%2Bzo1PzgelKjcKwgWRh0JVOE%2FPK18KOjZcaJFeKAj4YH4xPAnv0TMv3Zk6KwtcSz7fReKVEE1CjcrAUjosgY%2Bx%2FRJDa8w9sw9%2B358mzrsLlEblqhUFq2NOFtVGJKdg6ts9YJtUocGOyqzzvQAKFcRb3Y21%2BVYKiifAz5SX0c77JL8i401Yo0rsxmZqJoh%2FsKJQYcAojxb5TZZmuT%2BUPJk8CWeBNmNn8%2FGMKyJbjkdgcRcKStAIVoFyzvuPTa1eOl8QLz8Og05lkaJJkjBVa7SXmeNCjMBzKIEGzxL%2FpgVqACHm6OwzVIMeeQ9Xn1qXcHWVUrZQKkrXPHS0nbaBNzMoAQyUxUAZzheQna6Cw9pssN2%2Fkm%2FYZo%2FEuEIkEeLzbKQrcHvISBYhfqXiKwzk6Iv7BtIATV%2FwEl5x5uhyabx16Ud50dnarFnuhGz0Z5R0E%2FYp7riRfNkDD%2FUT4m8eaHC4EMOnu6F7R%2B5nmRjzsL6BPBLPMjjnLPzcpcHsEzBKeD8R1BDGW7912CvZGVZFL14AMILeqsEGOqUBelmLJ8bvOoFF9rq4uosQvs8OUi1hHbPysllIf0nLFMYWGbc0SvkPAd7HiHFDpBtxx2C3QSme1CTAljJCKLotdTPCdo0TnwwPngorbxNjwWzjZtUtKzwhhpx7wFHQgTc8wUsjfnpGZkVzYg0e02ZApczymm2vgD%2BTLDpnR8%2BDBsD9fZ48fLVuSBR%2FmrQaJn%2FV3t5jwNl3FEBJQa2fnDTwNsMmJDEi&X-Amz-Signature=06f7a3a71834af23d874d27a20ba51fe09e62d2807783b48dc13a8f92c5f7041&X-Amz-SignedHeaders=host&x-id=GetObject)
