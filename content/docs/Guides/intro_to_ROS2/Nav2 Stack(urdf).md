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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5WFL3Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCDxrtR0T8t5Kza0BxwyTC1tWZ5j3yGgLal56JQLfTA5AIgJDu7y%2FJDoiI0YzTr9mALKrAs0fG0THXchXABKv96CHAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIwavDUCPiFKhP72ircA4%2F28KCaKT40DTabIO0zTrRj%2FRK8VwidcSgaNuasTULs1siZ8JiSqus6bLsgJYv%2B9oZYsbGDZ1tqGVIBe7U1zPd2PrkodZ4PxpdYe8zYh05c62TuSMvTbiCa%2BknSLdhNaN6iNo0zf7xjceFdZZ2%2Fd4ctJZFkB0tQlTe%2BV6e7lBlmtC1IHqlyUnhZO%2FdiDU5NlOtstgCH6f8WuTwfxP%2Bpk7hvuyFE4hm0v6u7G0J6JILlYJ5XbIgD0ilqj4gecz68MjJOv9fCnVmuU2ofKfSVG1WDCnayAb1KACZVC%2B%2FusM238fQ7wfvv6RY6AQQqQVEoFf%2FlXKQd2TEG9R25Ab4HF7g%2F6zw98LuCylw%2F2tSS6yL4iWBWYryNlrqL8CKF%2B2W%2Fu2CS7yMMBMKhAejpPbLxFYZcTHt1wOR4oBAeDJJuY9dlK20Vpuk5iBvBjYgMojxnWcoG9KRdLjJBkcFFKq2tWjkth7jBawoEdRH2kEPP61Y3Kjdwoy8oBJc2M6F4qs7a9smoxFQJGQDY2sHgooRzGDU0CsW%2BlSqJGLFiYM9n3YmIA0MHksKmDY30pwwURb%2BqjbbLXbBGYHcR5CJuUWFNYOoh3sNkhhNgVNZtWr1pSy68rvr47cziNycL%2Bf7QMJ%2FIur4GOqUBr%2FvtZluBg11zV1KdewAqeAzL7vU3a7Gbrq%2F2mIYkpskP37z3Yi0Wq1iU3eUdwtsG7qTkrJsOncK8OvFHPIyZqFUDfheiG9wGC93951Rue4FBJDDi5rkAEPnPpXAcWzvIQ2YJxFg3w%2F07WBGAgtisJy5Pwo17DwM8UIWUKQZe6uPQ2aT3H1VkWJl6OhrEZizPlAKcqb%2F4kFSQqD6TsK2EkUnKN4Tm&X-Amz-Signature=5050f4446aa5ff06aa6d9d16a6b29428c200003d93493cd92688f307573a408a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5WFL3Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCDxrtR0T8t5Kza0BxwyTC1tWZ5j3yGgLal56JQLfTA5AIgJDu7y%2FJDoiI0YzTr9mALKrAs0fG0THXchXABKv96CHAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIwavDUCPiFKhP72ircA4%2F28KCaKT40DTabIO0zTrRj%2FRK8VwidcSgaNuasTULs1siZ8JiSqus6bLsgJYv%2B9oZYsbGDZ1tqGVIBe7U1zPd2PrkodZ4PxpdYe8zYh05c62TuSMvTbiCa%2BknSLdhNaN6iNo0zf7xjceFdZZ2%2Fd4ctJZFkB0tQlTe%2BV6e7lBlmtC1IHqlyUnhZO%2FdiDU5NlOtstgCH6f8WuTwfxP%2Bpk7hvuyFE4hm0v6u7G0J6JILlYJ5XbIgD0ilqj4gecz68MjJOv9fCnVmuU2ofKfSVG1WDCnayAb1KACZVC%2B%2FusM238fQ7wfvv6RY6AQQqQVEoFf%2FlXKQd2TEG9R25Ab4HF7g%2F6zw98LuCylw%2F2tSS6yL4iWBWYryNlrqL8CKF%2B2W%2Fu2CS7yMMBMKhAejpPbLxFYZcTHt1wOR4oBAeDJJuY9dlK20Vpuk5iBvBjYgMojxnWcoG9KRdLjJBkcFFKq2tWjkth7jBawoEdRH2kEPP61Y3Kjdwoy8oBJc2M6F4qs7a9smoxFQJGQDY2sHgooRzGDU0CsW%2BlSqJGLFiYM9n3YmIA0MHksKmDY30pwwURb%2BqjbbLXbBGYHcR5CJuUWFNYOoh3sNkhhNgVNZtWr1pSy68rvr47cziNycL%2Bf7QMJ%2FIur4GOqUBr%2FvtZluBg11zV1KdewAqeAzL7vU3a7Gbrq%2F2mIYkpskP37z3Yi0Wq1iU3eUdwtsG7qTkrJsOncK8OvFHPIyZqFUDfheiG9wGC93951Rue4FBJDDi5rkAEPnPpXAcWzvIQ2YJxFg3w%2F07WBGAgtisJy5Pwo17DwM8UIWUKQZe6uPQ2aT3H1VkWJl6OhrEZizPlAKcqb%2F4kFSQqD6TsK2EkUnKN4Tm&X-Amz-Signature=e77c42a589e9629c6b2d3d25ce8ad3cc029323630d7f108249334db70a8c6bec&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5WFL3Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCDxrtR0T8t5Kza0BxwyTC1tWZ5j3yGgLal56JQLfTA5AIgJDu7y%2FJDoiI0YzTr9mALKrAs0fG0THXchXABKv96CHAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIwavDUCPiFKhP72ircA4%2F28KCaKT40DTabIO0zTrRj%2FRK8VwidcSgaNuasTULs1siZ8JiSqus6bLsgJYv%2B9oZYsbGDZ1tqGVIBe7U1zPd2PrkodZ4PxpdYe8zYh05c62TuSMvTbiCa%2BknSLdhNaN6iNo0zf7xjceFdZZ2%2Fd4ctJZFkB0tQlTe%2BV6e7lBlmtC1IHqlyUnhZO%2FdiDU5NlOtstgCH6f8WuTwfxP%2Bpk7hvuyFE4hm0v6u7G0J6JILlYJ5XbIgD0ilqj4gecz68MjJOv9fCnVmuU2ofKfSVG1WDCnayAb1KACZVC%2B%2FusM238fQ7wfvv6RY6AQQqQVEoFf%2FlXKQd2TEG9R25Ab4HF7g%2F6zw98LuCylw%2F2tSS6yL4iWBWYryNlrqL8CKF%2B2W%2Fu2CS7yMMBMKhAejpPbLxFYZcTHt1wOR4oBAeDJJuY9dlK20Vpuk5iBvBjYgMojxnWcoG9KRdLjJBkcFFKq2tWjkth7jBawoEdRH2kEPP61Y3Kjdwoy8oBJc2M6F4qs7a9smoxFQJGQDY2sHgooRzGDU0CsW%2BlSqJGLFiYM9n3YmIA0MHksKmDY30pwwURb%2BqjbbLXbBGYHcR5CJuUWFNYOoh3sNkhhNgVNZtWr1pSy68rvr47cziNycL%2Bf7QMJ%2FIur4GOqUBr%2FvtZluBg11zV1KdewAqeAzL7vU3a7Gbrq%2F2mIYkpskP37z3Yi0Wq1iU3eUdwtsG7qTkrJsOncK8OvFHPIyZqFUDfheiG9wGC93951Rue4FBJDDi5rkAEPnPpXAcWzvIQ2YJxFg3w%2F07WBGAgtisJy5Pwo17DwM8UIWUKQZe6uPQ2aT3H1VkWJl6OhrEZizPlAKcqb%2F4kFSQqD6TsK2EkUnKN4Tm&X-Amz-Signature=460074444a09e58dc6d458a92d6b4ff5aa91eec1e0114f48993b3b237de8fe75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5WFL3Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCDxrtR0T8t5Kza0BxwyTC1tWZ5j3yGgLal56JQLfTA5AIgJDu7y%2FJDoiI0YzTr9mALKrAs0fG0THXchXABKv96CHAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIwavDUCPiFKhP72ircA4%2F28KCaKT40DTabIO0zTrRj%2FRK8VwidcSgaNuasTULs1siZ8JiSqus6bLsgJYv%2B9oZYsbGDZ1tqGVIBe7U1zPd2PrkodZ4PxpdYe8zYh05c62TuSMvTbiCa%2BknSLdhNaN6iNo0zf7xjceFdZZ2%2Fd4ctJZFkB0tQlTe%2BV6e7lBlmtC1IHqlyUnhZO%2FdiDU5NlOtstgCH6f8WuTwfxP%2Bpk7hvuyFE4hm0v6u7G0J6JILlYJ5XbIgD0ilqj4gecz68MjJOv9fCnVmuU2ofKfSVG1WDCnayAb1KACZVC%2B%2FusM238fQ7wfvv6RY6AQQqQVEoFf%2FlXKQd2TEG9R25Ab4HF7g%2F6zw98LuCylw%2F2tSS6yL4iWBWYryNlrqL8CKF%2B2W%2Fu2CS7yMMBMKhAejpPbLxFYZcTHt1wOR4oBAeDJJuY9dlK20Vpuk5iBvBjYgMojxnWcoG9KRdLjJBkcFFKq2tWjkth7jBawoEdRH2kEPP61Y3Kjdwoy8oBJc2M6F4qs7a9smoxFQJGQDY2sHgooRzGDU0CsW%2BlSqJGLFiYM9n3YmIA0MHksKmDY30pwwURb%2BqjbbLXbBGYHcR5CJuUWFNYOoh3sNkhhNgVNZtWr1pSy68rvr47cziNycL%2Bf7QMJ%2FIur4GOqUBr%2FvtZluBg11zV1KdewAqeAzL7vU3a7Gbrq%2F2mIYkpskP37z3Yi0Wq1iU3eUdwtsG7qTkrJsOncK8OvFHPIyZqFUDfheiG9wGC93951Rue4FBJDDi5rkAEPnPpXAcWzvIQ2YJxFg3w%2F07WBGAgtisJy5Pwo17DwM8UIWUKQZe6uPQ2aT3H1VkWJl6OhrEZizPlAKcqb%2F4kFSQqD6TsK2EkUnKN4Tm&X-Amz-Signature=2a5fbeaa958b7be067eaf09d532a15f4aa9a80787f737872c358bef51dd91d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5WFL3Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCDxrtR0T8t5Kza0BxwyTC1tWZ5j3yGgLal56JQLfTA5AIgJDu7y%2FJDoiI0YzTr9mALKrAs0fG0THXchXABKv96CHAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIwavDUCPiFKhP72ircA4%2F28KCaKT40DTabIO0zTrRj%2FRK8VwidcSgaNuasTULs1siZ8JiSqus6bLsgJYv%2B9oZYsbGDZ1tqGVIBe7U1zPd2PrkodZ4PxpdYe8zYh05c62TuSMvTbiCa%2BknSLdhNaN6iNo0zf7xjceFdZZ2%2Fd4ctJZFkB0tQlTe%2BV6e7lBlmtC1IHqlyUnhZO%2FdiDU5NlOtstgCH6f8WuTwfxP%2Bpk7hvuyFE4hm0v6u7G0J6JILlYJ5XbIgD0ilqj4gecz68MjJOv9fCnVmuU2ofKfSVG1WDCnayAb1KACZVC%2B%2FusM238fQ7wfvv6RY6AQQqQVEoFf%2FlXKQd2TEG9R25Ab4HF7g%2F6zw98LuCylw%2F2tSS6yL4iWBWYryNlrqL8CKF%2B2W%2Fu2CS7yMMBMKhAejpPbLxFYZcTHt1wOR4oBAeDJJuY9dlK20Vpuk5iBvBjYgMojxnWcoG9KRdLjJBkcFFKq2tWjkth7jBawoEdRH2kEPP61Y3Kjdwoy8oBJc2M6F4qs7a9smoxFQJGQDY2sHgooRzGDU0CsW%2BlSqJGLFiYM9n3YmIA0MHksKmDY30pwwURb%2BqjbbLXbBGYHcR5CJuUWFNYOoh3sNkhhNgVNZtWr1pSy68rvr47cziNycL%2Bf7QMJ%2FIur4GOqUBr%2FvtZluBg11zV1KdewAqeAzL7vU3a7Gbrq%2F2mIYkpskP37z3Yi0Wq1iU3eUdwtsG7qTkrJsOncK8OvFHPIyZqFUDfheiG9wGC93951Rue4FBJDDi5rkAEPnPpXAcWzvIQ2YJxFg3w%2F07WBGAgtisJy5Pwo17DwM8UIWUKQZe6uPQ2aT3H1VkWJl6OhrEZizPlAKcqb%2F4kFSQqD6TsK2EkUnKN4Tm&X-Amz-Signature=06d1eb15bb4f4e95074f2ce6bad956adedfbb66dc16187e4f17044e731c1ac54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5WFL3Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCDxrtR0T8t5Kza0BxwyTC1tWZ5j3yGgLal56JQLfTA5AIgJDu7y%2FJDoiI0YzTr9mALKrAs0fG0THXchXABKv96CHAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIwavDUCPiFKhP72ircA4%2F28KCaKT40DTabIO0zTrRj%2FRK8VwidcSgaNuasTULs1siZ8JiSqus6bLsgJYv%2B9oZYsbGDZ1tqGVIBe7U1zPd2PrkodZ4PxpdYe8zYh05c62TuSMvTbiCa%2BknSLdhNaN6iNo0zf7xjceFdZZ2%2Fd4ctJZFkB0tQlTe%2BV6e7lBlmtC1IHqlyUnhZO%2FdiDU5NlOtstgCH6f8WuTwfxP%2Bpk7hvuyFE4hm0v6u7G0J6JILlYJ5XbIgD0ilqj4gecz68MjJOv9fCnVmuU2ofKfSVG1WDCnayAb1KACZVC%2B%2FusM238fQ7wfvv6RY6AQQqQVEoFf%2FlXKQd2TEG9R25Ab4HF7g%2F6zw98LuCylw%2F2tSS6yL4iWBWYryNlrqL8CKF%2B2W%2Fu2CS7yMMBMKhAejpPbLxFYZcTHt1wOR4oBAeDJJuY9dlK20Vpuk5iBvBjYgMojxnWcoG9KRdLjJBkcFFKq2tWjkth7jBawoEdRH2kEPP61Y3Kjdwoy8oBJc2M6F4qs7a9smoxFQJGQDY2sHgooRzGDU0CsW%2BlSqJGLFiYM9n3YmIA0MHksKmDY30pwwURb%2BqjbbLXbBGYHcR5CJuUWFNYOoh3sNkhhNgVNZtWr1pSy68rvr47cziNycL%2Bf7QMJ%2FIur4GOqUBr%2FvtZluBg11zV1KdewAqeAzL7vU3a7Gbrq%2F2mIYkpskP37z3Yi0Wq1iU3eUdwtsG7qTkrJsOncK8OvFHPIyZqFUDfheiG9wGC93951Rue4FBJDDi5rkAEPnPpXAcWzvIQ2YJxFg3w%2F07WBGAgtisJy5Pwo17DwM8UIWUKQZe6uPQ2aT3H1VkWJl6OhrEZizPlAKcqb%2F4kFSQqD6TsK2EkUnKN4Tm&X-Amz-Signature=4b650463f2aeeaed523cd45098e85e6630f0c09d2b06831c7f32def37305fdcc&X-Amz-SignedHeaders=host&x-id=GetObject)
