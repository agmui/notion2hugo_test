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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHJ42NW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC0MpgNTZrc%2B%2FzKQVWB%2B6nyNSjoi05uHg3rNKrrODgj2QIhAMdu%2Bny4W6aO18%2FwSJvmUwGX4a0QMWjPg43azCh1TZSKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHdj2hGa8K%2FpsL2Toq3ANZv2fo7ssuCUrPj4Xtf%2FqZBWzxmJGVt0Een7c05XABp6ZQ82sXKsvdYcE4WUT5XIxSYb5ShXslswkPXbYsvmMhTdK%2FgM9EEJ5XEF5Puph0WnFo5LFiKwP1wedzL7qNEJtwO%2Bb78fyzJiIyIw2holUxbh6PyesEuYIkQWfYUjks6Kvj8uMa0JcK6ToCcIy5%2FiA%2FRvf7O9DF1bw6oZENFPn4rfbRqakjY6hnhIhnKI%2Btj8svlouRMTxhOBziTocD72AiVLISkSIB2vLVkQ4zUtsF3TwnWQvTi2uOsnw8oAH%2BhccB3ZoOhCxiXF7BYUCWpujg%2FLar3LVEstiYzpRwsmWF58zrmz4K%2BL%2BUJbfjskqx47tt5Y3KJBtp2lsv2uEqqjQHp12qhMVsYvL598MgKc68ix%2ButSD7OkSKpT%2F6LryQdvcNSkVFcCbNf9ajabDklPU%2FVSWqfxFK0VkN5PJ9tvNylSDlIu8HW4de5viWZF4pOsnC7ecDGTUBb8RT7HsgqhZDUBE%2FkAFYnRuIhDf4%2FpPFE%2FIW6lWs3OHaysydw2qXdm4gLnaYUVst2W8tsWF%2F2M2IvaJA74sptxvuc%2FDpgD1Drz8173Py%2FCvqE7J3BS0rvAaTy1ST9k4D4v1ccjD84bzBBjqkAX0%2BYfAj7Vf7os8jM%2FQAc8LbddD8mdlo06t7%2Bup9UKQ%2FDZrw3MHRcv1wwdFksKP%2B11lxBs2DPBCrCVIFJD9lc5zpCH0%2FVlVDlBWDS4VHjnMETidjpAHNkVncOCA0cjLz%2FyNB8AYJnWTXMvGHpb%2FAlcqnjd4iLY2es2kClT4mcfSvktciNLBqyk7RazPVYLbnN6kZacIM08DNnMwuSyB41t73Urlj&X-Amz-Signature=26e6b7938716c50e393f9c70548522c5917afc9ce6a3200d92b3a8fb59128d39&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHJ42NW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC0MpgNTZrc%2B%2FzKQVWB%2B6nyNSjoi05uHg3rNKrrODgj2QIhAMdu%2Bny4W6aO18%2FwSJvmUwGX4a0QMWjPg43azCh1TZSKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHdj2hGa8K%2FpsL2Toq3ANZv2fo7ssuCUrPj4Xtf%2FqZBWzxmJGVt0Een7c05XABp6ZQ82sXKsvdYcE4WUT5XIxSYb5ShXslswkPXbYsvmMhTdK%2FgM9EEJ5XEF5Puph0WnFo5LFiKwP1wedzL7qNEJtwO%2Bb78fyzJiIyIw2holUxbh6PyesEuYIkQWfYUjks6Kvj8uMa0JcK6ToCcIy5%2FiA%2FRvf7O9DF1bw6oZENFPn4rfbRqakjY6hnhIhnKI%2Btj8svlouRMTxhOBziTocD72AiVLISkSIB2vLVkQ4zUtsF3TwnWQvTi2uOsnw8oAH%2BhccB3ZoOhCxiXF7BYUCWpujg%2FLar3LVEstiYzpRwsmWF58zrmz4K%2BL%2BUJbfjskqx47tt5Y3KJBtp2lsv2uEqqjQHp12qhMVsYvL598MgKc68ix%2ButSD7OkSKpT%2F6LryQdvcNSkVFcCbNf9ajabDklPU%2FVSWqfxFK0VkN5PJ9tvNylSDlIu8HW4de5viWZF4pOsnC7ecDGTUBb8RT7HsgqhZDUBE%2FkAFYnRuIhDf4%2FpPFE%2FIW6lWs3OHaysydw2qXdm4gLnaYUVst2W8tsWF%2F2M2IvaJA74sptxvuc%2FDpgD1Drz8173Py%2FCvqE7J3BS0rvAaTy1ST9k4D4v1ccjD84bzBBjqkAX0%2BYfAj7Vf7os8jM%2FQAc8LbddD8mdlo06t7%2Bup9UKQ%2FDZrw3MHRcv1wwdFksKP%2B11lxBs2DPBCrCVIFJD9lc5zpCH0%2FVlVDlBWDS4VHjnMETidjpAHNkVncOCA0cjLz%2FyNB8AYJnWTXMvGHpb%2FAlcqnjd4iLY2es2kClT4mcfSvktciNLBqyk7RazPVYLbnN6kZacIM08DNnMwuSyB41t73Urlj&X-Amz-Signature=c1cdfa0c90e597e9c504759176e9188ba93aaf0d4f86137957ada38b3c9b1d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHJ42NW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC0MpgNTZrc%2B%2FzKQVWB%2B6nyNSjoi05uHg3rNKrrODgj2QIhAMdu%2Bny4W6aO18%2FwSJvmUwGX4a0QMWjPg43azCh1TZSKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHdj2hGa8K%2FpsL2Toq3ANZv2fo7ssuCUrPj4Xtf%2FqZBWzxmJGVt0Een7c05XABp6ZQ82sXKsvdYcE4WUT5XIxSYb5ShXslswkPXbYsvmMhTdK%2FgM9EEJ5XEF5Puph0WnFo5LFiKwP1wedzL7qNEJtwO%2Bb78fyzJiIyIw2holUxbh6PyesEuYIkQWfYUjks6Kvj8uMa0JcK6ToCcIy5%2FiA%2FRvf7O9DF1bw6oZENFPn4rfbRqakjY6hnhIhnKI%2Btj8svlouRMTxhOBziTocD72AiVLISkSIB2vLVkQ4zUtsF3TwnWQvTi2uOsnw8oAH%2BhccB3ZoOhCxiXF7BYUCWpujg%2FLar3LVEstiYzpRwsmWF58zrmz4K%2BL%2BUJbfjskqx47tt5Y3KJBtp2lsv2uEqqjQHp12qhMVsYvL598MgKc68ix%2ButSD7OkSKpT%2F6LryQdvcNSkVFcCbNf9ajabDklPU%2FVSWqfxFK0VkN5PJ9tvNylSDlIu8HW4de5viWZF4pOsnC7ecDGTUBb8RT7HsgqhZDUBE%2FkAFYnRuIhDf4%2FpPFE%2FIW6lWs3OHaysydw2qXdm4gLnaYUVst2W8tsWF%2F2M2IvaJA74sptxvuc%2FDpgD1Drz8173Py%2FCvqE7J3BS0rvAaTy1ST9k4D4v1ccjD84bzBBjqkAX0%2BYfAj7Vf7os8jM%2FQAc8LbddD8mdlo06t7%2Bup9UKQ%2FDZrw3MHRcv1wwdFksKP%2B11lxBs2DPBCrCVIFJD9lc5zpCH0%2FVlVDlBWDS4VHjnMETidjpAHNkVncOCA0cjLz%2FyNB8AYJnWTXMvGHpb%2FAlcqnjd4iLY2es2kClT4mcfSvktciNLBqyk7RazPVYLbnN6kZacIM08DNnMwuSyB41t73Urlj&X-Amz-Signature=a09b8db9cc885387b6cc9d044694facf644672177edb964adad27fa455ff4267&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHJ42NW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC0MpgNTZrc%2B%2FzKQVWB%2B6nyNSjoi05uHg3rNKrrODgj2QIhAMdu%2Bny4W6aO18%2FwSJvmUwGX4a0QMWjPg43azCh1TZSKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHdj2hGa8K%2FpsL2Toq3ANZv2fo7ssuCUrPj4Xtf%2FqZBWzxmJGVt0Een7c05XABp6ZQ82sXKsvdYcE4WUT5XIxSYb5ShXslswkPXbYsvmMhTdK%2FgM9EEJ5XEF5Puph0WnFo5LFiKwP1wedzL7qNEJtwO%2Bb78fyzJiIyIw2holUxbh6PyesEuYIkQWfYUjks6Kvj8uMa0JcK6ToCcIy5%2FiA%2FRvf7O9DF1bw6oZENFPn4rfbRqakjY6hnhIhnKI%2Btj8svlouRMTxhOBziTocD72AiVLISkSIB2vLVkQ4zUtsF3TwnWQvTi2uOsnw8oAH%2BhccB3ZoOhCxiXF7BYUCWpujg%2FLar3LVEstiYzpRwsmWF58zrmz4K%2BL%2BUJbfjskqx47tt5Y3KJBtp2lsv2uEqqjQHp12qhMVsYvL598MgKc68ix%2ButSD7OkSKpT%2F6LryQdvcNSkVFcCbNf9ajabDklPU%2FVSWqfxFK0VkN5PJ9tvNylSDlIu8HW4de5viWZF4pOsnC7ecDGTUBb8RT7HsgqhZDUBE%2FkAFYnRuIhDf4%2FpPFE%2FIW6lWs3OHaysydw2qXdm4gLnaYUVst2W8tsWF%2F2M2IvaJA74sptxvuc%2FDpgD1Drz8173Py%2FCvqE7J3BS0rvAaTy1ST9k4D4v1ccjD84bzBBjqkAX0%2BYfAj7Vf7os8jM%2FQAc8LbddD8mdlo06t7%2Bup9UKQ%2FDZrw3MHRcv1wwdFksKP%2B11lxBs2DPBCrCVIFJD9lc5zpCH0%2FVlVDlBWDS4VHjnMETidjpAHNkVncOCA0cjLz%2FyNB8AYJnWTXMvGHpb%2FAlcqnjd4iLY2es2kClT4mcfSvktciNLBqyk7RazPVYLbnN6kZacIM08DNnMwuSyB41t73Urlj&X-Amz-Signature=86baf76566f52ed3aba014dc768bbc72d300f1fc7d1722db3e502dd5a7ba2f02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHJ42NW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC0MpgNTZrc%2B%2FzKQVWB%2B6nyNSjoi05uHg3rNKrrODgj2QIhAMdu%2Bny4W6aO18%2FwSJvmUwGX4a0QMWjPg43azCh1TZSKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHdj2hGa8K%2FpsL2Toq3ANZv2fo7ssuCUrPj4Xtf%2FqZBWzxmJGVt0Een7c05XABp6ZQ82sXKsvdYcE4WUT5XIxSYb5ShXslswkPXbYsvmMhTdK%2FgM9EEJ5XEF5Puph0WnFo5LFiKwP1wedzL7qNEJtwO%2Bb78fyzJiIyIw2holUxbh6PyesEuYIkQWfYUjks6Kvj8uMa0JcK6ToCcIy5%2FiA%2FRvf7O9DF1bw6oZENFPn4rfbRqakjY6hnhIhnKI%2Btj8svlouRMTxhOBziTocD72AiVLISkSIB2vLVkQ4zUtsF3TwnWQvTi2uOsnw8oAH%2BhccB3ZoOhCxiXF7BYUCWpujg%2FLar3LVEstiYzpRwsmWF58zrmz4K%2BL%2BUJbfjskqx47tt5Y3KJBtp2lsv2uEqqjQHp12qhMVsYvL598MgKc68ix%2ButSD7OkSKpT%2F6LryQdvcNSkVFcCbNf9ajabDklPU%2FVSWqfxFK0VkN5PJ9tvNylSDlIu8HW4de5viWZF4pOsnC7ecDGTUBb8RT7HsgqhZDUBE%2FkAFYnRuIhDf4%2FpPFE%2FIW6lWs3OHaysydw2qXdm4gLnaYUVst2W8tsWF%2F2M2IvaJA74sptxvuc%2FDpgD1Drz8173Py%2FCvqE7J3BS0rvAaTy1ST9k4D4v1ccjD84bzBBjqkAX0%2BYfAj7Vf7os8jM%2FQAc8LbddD8mdlo06t7%2Bup9UKQ%2FDZrw3MHRcv1wwdFksKP%2B11lxBs2DPBCrCVIFJD9lc5zpCH0%2FVlVDlBWDS4VHjnMETidjpAHNkVncOCA0cjLz%2FyNB8AYJnWTXMvGHpb%2FAlcqnjd4iLY2es2kClT4mcfSvktciNLBqyk7RazPVYLbnN6kZacIM08DNnMwuSyB41t73Urlj&X-Amz-Signature=ec00a2db4b4b81274a93bd62047c3119eb34c2e2e8857c1756da52d402dcd61c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHJ42NW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T190714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC0MpgNTZrc%2B%2FzKQVWB%2B6nyNSjoi05uHg3rNKrrODgj2QIhAMdu%2Bny4W6aO18%2FwSJvmUwGX4a0QMWjPg43azCh1TZSKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHdj2hGa8K%2FpsL2Toq3ANZv2fo7ssuCUrPj4Xtf%2FqZBWzxmJGVt0Een7c05XABp6ZQ82sXKsvdYcE4WUT5XIxSYb5ShXslswkPXbYsvmMhTdK%2FgM9EEJ5XEF5Puph0WnFo5LFiKwP1wedzL7qNEJtwO%2Bb78fyzJiIyIw2holUxbh6PyesEuYIkQWfYUjks6Kvj8uMa0JcK6ToCcIy5%2FiA%2FRvf7O9DF1bw6oZENFPn4rfbRqakjY6hnhIhnKI%2Btj8svlouRMTxhOBziTocD72AiVLISkSIB2vLVkQ4zUtsF3TwnWQvTi2uOsnw8oAH%2BhccB3ZoOhCxiXF7BYUCWpujg%2FLar3LVEstiYzpRwsmWF58zrmz4K%2BL%2BUJbfjskqx47tt5Y3KJBtp2lsv2uEqqjQHp12qhMVsYvL598MgKc68ix%2ButSD7OkSKpT%2F6LryQdvcNSkVFcCbNf9ajabDklPU%2FVSWqfxFK0VkN5PJ9tvNylSDlIu8HW4de5viWZF4pOsnC7ecDGTUBb8RT7HsgqhZDUBE%2FkAFYnRuIhDf4%2FpPFE%2FIW6lWs3OHaysydw2qXdm4gLnaYUVst2W8tsWF%2F2M2IvaJA74sptxvuc%2FDpgD1Drz8173Py%2FCvqE7J3BS0rvAaTy1ST9k4D4v1ccjD84bzBBjqkAX0%2BYfAj7Vf7os8jM%2FQAc8LbddD8mdlo06t7%2Bup9UKQ%2FDZrw3MHRcv1wwdFksKP%2B11lxBs2DPBCrCVIFJD9lc5zpCH0%2FVlVDlBWDS4VHjnMETidjpAHNkVncOCA0cjLz%2FyNB8AYJnWTXMvGHpb%2FAlcqnjd4iLY2es2kClT4mcfSvktciNLBqyk7RazPVYLbnN6kZacIM08DNnMwuSyB41t73Urlj&X-Amz-Signature=77b213a04cb88950f5afb3ac73dda9f6a9a8680a5bce73279580456ac6821899&X-Amz-SignedHeaders=host&x-id=GetObject)
