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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKQFXS3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fCk1esjF7qqme8Kub6zl99BZ%2Bzns%2B7k4SoY0Xd4H1QIgakKgIqAwIufOHt3wIn5OBz5u93cJXZChJzqSMTcmzaYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ4sGy0GWqCTmhKFvCrcA5LMoxbGttqRjps8OHW378s2%2BIBrSCiHXgVHiobo754IPXK7iCJJFbDL%2BjK10WYUz8PA%2FVYMONshCVTFRf59NqPVb%2BeICTyHy1C%2B2YMLl5oOfXgBNDTLCS%2B03a9OD%2FSypcmkN32OYmQYUmqAJPO5RX2bqzLzzu2aDEbVseL9PhEs4gWqSvHibSPE65XaXjXAEaKc8JjbyAMxmHU%2FnDqh%2FZVsK06nFMR1gypa9UuRA7wDcGRqThwHzyKnJZ3uOIqE4KsrP2XgMFjyQL1kvprY3xNw3BdyeXzUfgfUKEbvpvhUb7UhcB8blI9BsMxYjEOqiDfHNJDLXmLHmDVpEtRa4RCsCEKjRxjY53qPxyAJUJqI3rViUv40ph1gcRbveL1NYjWQwSAkbH9D%2BCWevNtUJinGx5i62%2FaEt6WRFOnZTzUpM3hrlzVQ5Qpkf0OES7TDDx4QHINOSxMEmNmYD7oQIS3wIxguzMfccJ3Mufbctx7P4DWEeqTx2tf3TME25JSve4ZfZzDDk%2BlDBAeReHDUjd3Qcu6Q4I0%2FPtqznwia9%2Bwuq0EZCG9%2FMXguAQ%2B0aZcZIM%2FqQPpgOI95FHVLucg4ekKEdNDls51pZISzHkfUD%2FSvhkOWSCCiJMgwWDQKMJax5sAGOqUB43mix3NIfdi9gFvdlFf0la8bL03MPJ9oTDyWuYRDheMCE5zadFJb4yy9n4GyfaFa%2B00vtX%2BPWHBLeK3FhcX88uFpnWZ2f2yHU8CdKQajbq8r5zrxmOxeLip55MKdqfFDGqvB0iHKXE4XV0hpsXXCGJpWb0FzNcFvgD19McCYuGUmOhuM8sfCfzLZ2GZglfPoi2hmSm5eY0OG2yQhpoKHVLQTS2UQ&X-Amz-Signature=1d2e945ac3c71181ffd9ce78b1bae829c164938517403b3489b5901800307b69&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKQFXS3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fCk1esjF7qqme8Kub6zl99BZ%2Bzns%2B7k4SoY0Xd4H1QIgakKgIqAwIufOHt3wIn5OBz5u93cJXZChJzqSMTcmzaYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ4sGy0GWqCTmhKFvCrcA5LMoxbGttqRjps8OHW378s2%2BIBrSCiHXgVHiobo754IPXK7iCJJFbDL%2BjK10WYUz8PA%2FVYMONshCVTFRf59NqPVb%2BeICTyHy1C%2B2YMLl5oOfXgBNDTLCS%2B03a9OD%2FSypcmkN32OYmQYUmqAJPO5RX2bqzLzzu2aDEbVseL9PhEs4gWqSvHibSPE65XaXjXAEaKc8JjbyAMxmHU%2FnDqh%2FZVsK06nFMR1gypa9UuRA7wDcGRqThwHzyKnJZ3uOIqE4KsrP2XgMFjyQL1kvprY3xNw3BdyeXzUfgfUKEbvpvhUb7UhcB8blI9BsMxYjEOqiDfHNJDLXmLHmDVpEtRa4RCsCEKjRxjY53qPxyAJUJqI3rViUv40ph1gcRbveL1NYjWQwSAkbH9D%2BCWevNtUJinGx5i62%2FaEt6WRFOnZTzUpM3hrlzVQ5Qpkf0OES7TDDx4QHINOSxMEmNmYD7oQIS3wIxguzMfccJ3Mufbctx7P4DWEeqTx2tf3TME25JSve4ZfZzDDk%2BlDBAeReHDUjd3Qcu6Q4I0%2FPtqznwia9%2Bwuq0EZCG9%2FMXguAQ%2B0aZcZIM%2FqQPpgOI95FHVLucg4ekKEdNDls51pZISzHkfUD%2FSvhkOWSCCiJMgwWDQKMJax5sAGOqUB43mix3NIfdi9gFvdlFf0la8bL03MPJ9oTDyWuYRDheMCE5zadFJb4yy9n4GyfaFa%2B00vtX%2BPWHBLeK3FhcX88uFpnWZ2f2yHU8CdKQajbq8r5zrxmOxeLip55MKdqfFDGqvB0iHKXE4XV0hpsXXCGJpWb0FzNcFvgD19McCYuGUmOhuM8sfCfzLZ2GZglfPoi2hmSm5eY0OG2yQhpoKHVLQTS2UQ&X-Amz-Signature=fd0a240e6391d903c775a7a0f4c143e6192d17a1efb647e4e6f9fae8a60ab4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKQFXS3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fCk1esjF7qqme8Kub6zl99BZ%2Bzns%2B7k4SoY0Xd4H1QIgakKgIqAwIufOHt3wIn5OBz5u93cJXZChJzqSMTcmzaYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ4sGy0GWqCTmhKFvCrcA5LMoxbGttqRjps8OHW378s2%2BIBrSCiHXgVHiobo754IPXK7iCJJFbDL%2BjK10WYUz8PA%2FVYMONshCVTFRf59NqPVb%2BeICTyHy1C%2B2YMLl5oOfXgBNDTLCS%2B03a9OD%2FSypcmkN32OYmQYUmqAJPO5RX2bqzLzzu2aDEbVseL9PhEs4gWqSvHibSPE65XaXjXAEaKc8JjbyAMxmHU%2FnDqh%2FZVsK06nFMR1gypa9UuRA7wDcGRqThwHzyKnJZ3uOIqE4KsrP2XgMFjyQL1kvprY3xNw3BdyeXzUfgfUKEbvpvhUb7UhcB8blI9BsMxYjEOqiDfHNJDLXmLHmDVpEtRa4RCsCEKjRxjY53qPxyAJUJqI3rViUv40ph1gcRbveL1NYjWQwSAkbH9D%2BCWevNtUJinGx5i62%2FaEt6WRFOnZTzUpM3hrlzVQ5Qpkf0OES7TDDx4QHINOSxMEmNmYD7oQIS3wIxguzMfccJ3Mufbctx7P4DWEeqTx2tf3TME25JSve4ZfZzDDk%2BlDBAeReHDUjd3Qcu6Q4I0%2FPtqznwia9%2Bwuq0EZCG9%2FMXguAQ%2B0aZcZIM%2FqQPpgOI95FHVLucg4ekKEdNDls51pZISzHkfUD%2FSvhkOWSCCiJMgwWDQKMJax5sAGOqUB43mix3NIfdi9gFvdlFf0la8bL03MPJ9oTDyWuYRDheMCE5zadFJb4yy9n4GyfaFa%2B00vtX%2BPWHBLeK3FhcX88uFpnWZ2f2yHU8CdKQajbq8r5zrxmOxeLip55MKdqfFDGqvB0iHKXE4XV0hpsXXCGJpWb0FzNcFvgD19McCYuGUmOhuM8sfCfzLZ2GZglfPoi2hmSm5eY0OG2yQhpoKHVLQTS2UQ&X-Amz-Signature=f67adf7e504888d05235d22f619ff020d83f6433bc5dad63093070f04ca52779&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKQFXS3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fCk1esjF7qqme8Kub6zl99BZ%2Bzns%2B7k4SoY0Xd4H1QIgakKgIqAwIufOHt3wIn5OBz5u93cJXZChJzqSMTcmzaYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ4sGy0GWqCTmhKFvCrcA5LMoxbGttqRjps8OHW378s2%2BIBrSCiHXgVHiobo754IPXK7iCJJFbDL%2BjK10WYUz8PA%2FVYMONshCVTFRf59NqPVb%2BeICTyHy1C%2B2YMLl5oOfXgBNDTLCS%2B03a9OD%2FSypcmkN32OYmQYUmqAJPO5RX2bqzLzzu2aDEbVseL9PhEs4gWqSvHibSPE65XaXjXAEaKc8JjbyAMxmHU%2FnDqh%2FZVsK06nFMR1gypa9UuRA7wDcGRqThwHzyKnJZ3uOIqE4KsrP2XgMFjyQL1kvprY3xNw3BdyeXzUfgfUKEbvpvhUb7UhcB8blI9BsMxYjEOqiDfHNJDLXmLHmDVpEtRa4RCsCEKjRxjY53qPxyAJUJqI3rViUv40ph1gcRbveL1NYjWQwSAkbH9D%2BCWevNtUJinGx5i62%2FaEt6WRFOnZTzUpM3hrlzVQ5Qpkf0OES7TDDx4QHINOSxMEmNmYD7oQIS3wIxguzMfccJ3Mufbctx7P4DWEeqTx2tf3TME25JSve4ZfZzDDk%2BlDBAeReHDUjd3Qcu6Q4I0%2FPtqznwia9%2Bwuq0EZCG9%2FMXguAQ%2B0aZcZIM%2FqQPpgOI95FHVLucg4ekKEdNDls51pZISzHkfUD%2FSvhkOWSCCiJMgwWDQKMJax5sAGOqUB43mix3NIfdi9gFvdlFf0la8bL03MPJ9oTDyWuYRDheMCE5zadFJb4yy9n4GyfaFa%2B00vtX%2BPWHBLeK3FhcX88uFpnWZ2f2yHU8CdKQajbq8r5zrxmOxeLip55MKdqfFDGqvB0iHKXE4XV0hpsXXCGJpWb0FzNcFvgD19McCYuGUmOhuM8sfCfzLZ2GZglfPoi2hmSm5eY0OG2yQhpoKHVLQTS2UQ&X-Amz-Signature=de7b587adab864073a5e9ad146f59a60c46a18062c9004fb48b7ad8cd5f61619&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKQFXS3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fCk1esjF7qqme8Kub6zl99BZ%2Bzns%2B7k4SoY0Xd4H1QIgakKgIqAwIufOHt3wIn5OBz5u93cJXZChJzqSMTcmzaYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ4sGy0GWqCTmhKFvCrcA5LMoxbGttqRjps8OHW378s2%2BIBrSCiHXgVHiobo754IPXK7iCJJFbDL%2BjK10WYUz8PA%2FVYMONshCVTFRf59NqPVb%2BeICTyHy1C%2B2YMLl5oOfXgBNDTLCS%2B03a9OD%2FSypcmkN32OYmQYUmqAJPO5RX2bqzLzzu2aDEbVseL9PhEs4gWqSvHibSPE65XaXjXAEaKc8JjbyAMxmHU%2FnDqh%2FZVsK06nFMR1gypa9UuRA7wDcGRqThwHzyKnJZ3uOIqE4KsrP2XgMFjyQL1kvprY3xNw3BdyeXzUfgfUKEbvpvhUb7UhcB8blI9BsMxYjEOqiDfHNJDLXmLHmDVpEtRa4RCsCEKjRxjY53qPxyAJUJqI3rViUv40ph1gcRbveL1NYjWQwSAkbH9D%2BCWevNtUJinGx5i62%2FaEt6WRFOnZTzUpM3hrlzVQ5Qpkf0OES7TDDx4QHINOSxMEmNmYD7oQIS3wIxguzMfccJ3Mufbctx7P4DWEeqTx2tf3TME25JSve4ZfZzDDk%2BlDBAeReHDUjd3Qcu6Q4I0%2FPtqznwia9%2Bwuq0EZCG9%2FMXguAQ%2B0aZcZIM%2FqQPpgOI95FHVLucg4ekKEdNDls51pZISzHkfUD%2FSvhkOWSCCiJMgwWDQKMJax5sAGOqUB43mix3NIfdi9gFvdlFf0la8bL03MPJ9oTDyWuYRDheMCE5zadFJb4yy9n4GyfaFa%2B00vtX%2BPWHBLeK3FhcX88uFpnWZ2f2yHU8CdKQajbq8r5zrxmOxeLip55MKdqfFDGqvB0iHKXE4XV0hpsXXCGJpWb0FzNcFvgD19McCYuGUmOhuM8sfCfzLZ2GZglfPoi2hmSm5eY0OG2yQhpoKHVLQTS2UQ&X-Amz-Signature=6a9b83874dec1b7605086c1266797552903ae1249dd07b4a478cb488b48b95cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKQFXS3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9fCk1esjF7qqme8Kub6zl99BZ%2Bzns%2B7k4SoY0Xd4H1QIgakKgIqAwIufOHt3wIn5OBz5u93cJXZChJzqSMTcmzaYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJ4sGy0GWqCTmhKFvCrcA5LMoxbGttqRjps8OHW378s2%2BIBrSCiHXgVHiobo754IPXK7iCJJFbDL%2BjK10WYUz8PA%2FVYMONshCVTFRf59NqPVb%2BeICTyHy1C%2B2YMLl5oOfXgBNDTLCS%2B03a9OD%2FSypcmkN32OYmQYUmqAJPO5RX2bqzLzzu2aDEbVseL9PhEs4gWqSvHibSPE65XaXjXAEaKc8JjbyAMxmHU%2FnDqh%2FZVsK06nFMR1gypa9UuRA7wDcGRqThwHzyKnJZ3uOIqE4KsrP2XgMFjyQL1kvprY3xNw3BdyeXzUfgfUKEbvpvhUb7UhcB8blI9BsMxYjEOqiDfHNJDLXmLHmDVpEtRa4RCsCEKjRxjY53qPxyAJUJqI3rViUv40ph1gcRbveL1NYjWQwSAkbH9D%2BCWevNtUJinGx5i62%2FaEt6WRFOnZTzUpM3hrlzVQ5Qpkf0OES7TDDx4QHINOSxMEmNmYD7oQIS3wIxguzMfccJ3Mufbctx7P4DWEeqTx2tf3TME25JSve4ZfZzDDk%2BlDBAeReHDUjd3Qcu6Q4I0%2FPtqznwia9%2Bwuq0EZCG9%2FMXguAQ%2B0aZcZIM%2FqQPpgOI95FHVLucg4ekKEdNDls51pZISzHkfUD%2FSvhkOWSCCiJMgwWDQKMJax5sAGOqUB43mix3NIfdi9gFvdlFf0la8bL03MPJ9oTDyWuYRDheMCE5zadFJb4yy9n4GyfaFa%2B00vtX%2BPWHBLeK3FhcX88uFpnWZ2f2yHU8CdKQajbq8r5zrxmOxeLip55MKdqfFDGqvB0iHKXE4XV0hpsXXCGJpWb0FzNcFvgD19McCYuGUmOhuM8sfCfzLZ2GZglfPoi2hmSm5eY0OG2yQhpoKHVLQTS2UQ&X-Amz-Signature=5e2e42747316f5fd4cacb1eaa45207b6f06b88e589d15b9705bc8f2d3b106a67&X-Amz-SignedHeaders=host&x-id=GetObject)
