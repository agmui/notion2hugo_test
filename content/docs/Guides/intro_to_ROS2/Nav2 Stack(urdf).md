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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQLW6NA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD%2FFjjTieMc0Cf9mi0kj2M01uJBfwAQ8NGuxWf3I8M6iwIgHhul%2BbIa%2FIL4mb1MhHdrmgagSkPO%2BfyJrqD7OuIOb7gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2BFu%2FXirVQb867Y5yrcA6o9oqwblk2tInUvjBScdL0dlnOeyT1o2lUCsiAAWNC7Lnn3wktnKy8Oaxyp1rEJWrmJBuuWqH3DoA0541HBWrSKhYYOTqb3WyQqY0TjN0JI%2FYtMVzUnKRtJ6kVecAQV%2FqjN03i1xBwqFxKuoVNel4MsLHWHdR8PXqBfDAEYAhYtvj%2Ba0CSbR59Tc5rmdPIM%2BOUuCmOpYNsNkihzfhxTumTKCxqAHP1P0oWC9L8QD6HFadiLDPyPrhwl%2BBwal2jdmn%2Fs77VGKRGILHL5pGmeNpv0hwANGoWIM7kWnWuoEysQ%2FWomouC7RHaihW4j%2F40Smaf2h70wgIeAJYLCgK9X2CpVVdLr2r%2FIF1VA3lPP6r4%2BH6McSfeBCz1MvTBfkIbwo3P3mv6VVaCq3v0ziMcKTYt1XxDOkVAJV2PfhXjK%2FsgeBMozJLSFm1zktyI3IgAfYeu5JnLNawxC8KcILOuk3QUVISFvkcMi6pRYtd784pKwXgYhtkzC3%2FuiB%2FBxC%2BeO%2BMyv0lxCBLta%2FmZGL5YeZPlnjYT9tgcxZGWopA0f9x5JwPBeYCEHIZZsP9IsnHbV%2FqHXz7ucAr57skvfXTZUCIXJIXVfD66IBgvDNMF9gTeTcVnkDbavuB2eIHNUMNHG%2BsEGOqUBuMtnmq%2B9GxDtMinnFtkIbXUx%2BIZ61uDxbdVGx06hzNPcijHgAKGLAQBL6WZsZNgdFVSpjC63WJcU8ggW3RfDkmMbfdJwr%2BftKRuaJH1xojd8luRscv0hee3FZcqKZBs%2F6jz%2Bu36tyUsDnKJ66G2oIvNw7Y%2BIgDj%2FYD4Z%2B6zikuuQs5s6bBpR8SUeXPGHLjUOAMMq2DJuuGXN6YMn8S5wreFMIdY%2F&X-Amz-Signature=9f9f3ff69631df9cb9d2f4deb7d106a5bd01207e48502658183e5278a5beb7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQLW6NA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD%2FFjjTieMc0Cf9mi0kj2M01uJBfwAQ8NGuxWf3I8M6iwIgHhul%2BbIa%2FIL4mb1MhHdrmgagSkPO%2BfyJrqD7OuIOb7gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2BFu%2FXirVQb867Y5yrcA6o9oqwblk2tInUvjBScdL0dlnOeyT1o2lUCsiAAWNC7Lnn3wktnKy8Oaxyp1rEJWrmJBuuWqH3DoA0541HBWrSKhYYOTqb3WyQqY0TjN0JI%2FYtMVzUnKRtJ6kVecAQV%2FqjN03i1xBwqFxKuoVNel4MsLHWHdR8PXqBfDAEYAhYtvj%2Ba0CSbR59Tc5rmdPIM%2BOUuCmOpYNsNkihzfhxTumTKCxqAHP1P0oWC9L8QD6HFadiLDPyPrhwl%2BBwal2jdmn%2Fs77VGKRGILHL5pGmeNpv0hwANGoWIM7kWnWuoEysQ%2FWomouC7RHaihW4j%2F40Smaf2h70wgIeAJYLCgK9X2CpVVdLr2r%2FIF1VA3lPP6r4%2BH6McSfeBCz1MvTBfkIbwo3P3mv6VVaCq3v0ziMcKTYt1XxDOkVAJV2PfhXjK%2FsgeBMozJLSFm1zktyI3IgAfYeu5JnLNawxC8KcILOuk3QUVISFvkcMi6pRYtd784pKwXgYhtkzC3%2FuiB%2FBxC%2BeO%2BMyv0lxCBLta%2FmZGL5YeZPlnjYT9tgcxZGWopA0f9x5JwPBeYCEHIZZsP9IsnHbV%2FqHXz7ucAr57skvfXTZUCIXJIXVfD66IBgvDNMF9gTeTcVnkDbavuB2eIHNUMNHG%2BsEGOqUBuMtnmq%2B9GxDtMinnFtkIbXUx%2BIZ61uDxbdVGx06hzNPcijHgAKGLAQBL6WZsZNgdFVSpjC63WJcU8ggW3RfDkmMbfdJwr%2BftKRuaJH1xojd8luRscv0hee3FZcqKZBs%2F6jz%2Bu36tyUsDnKJ66G2oIvNw7Y%2BIgDj%2FYD4Z%2B6zikuuQs5s6bBpR8SUeXPGHLjUOAMMq2DJuuGXN6YMn8S5wreFMIdY%2F&X-Amz-Signature=a52057af454babfdc3b2b8f6cd11c5330324189ee7ecf10fe4157f4927d9a9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQLW6NA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD%2FFjjTieMc0Cf9mi0kj2M01uJBfwAQ8NGuxWf3I8M6iwIgHhul%2BbIa%2FIL4mb1MhHdrmgagSkPO%2BfyJrqD7OuIOb7gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2BFu%2FXirVQb867Y5yrcA6o9oqwblk2tInUvjBScdL0dlnOeyT1o2lUCsiAAWNC7Lnn3wktnKy8Oaxyp1rEJWrmJBuuWqH3DoA0541HBWrSKhYYOTqb3WyQqY0TjN0JI%2FYtMVzUnKRtJ6kVecAQV%2FqjN03i1xBwqFxKuoVNel4MsLHWHdR8PXqBfDAEYAhYtvj%2Ba0CSbR59Tc5rmdPIM%2BOUuCmOpYNsNkihzfhxTumTKCxqAHP1P0oWC9L8QD6HFadiLDPyPrhwl%2BBwal2jdmn%2Fs77VGKRGILHL5pGmeNpv0hwANGoWIM7kWnWuoEysQ%2FWomouC7RHaihW4j%2F40Smaf2h70wgIeAJYLCgK9X2CpVVdLr2r%2FIF1VA3lPP6r4%2BH6McSfeBCz1MvTBfkIbwo3P3mv6VVaCq3v0ziMcKTYt1XxDOkVAJV2PfhXjK%2FsgeBMozJLSFm1zktyI3IgAfYeu5JnLNawxC8KcILOuk3QUVISFvkcMi6pRYtd784pKwXgYhtkzC3%2FuiB%2FBxC%2BeO%2BMyv0lxCBLta%2FmZGL5YeZPlnjYT9tgcxZGWopA0f9x5JwPBeYCEHIZZsP9IsnHbV%2FqHXz7ucAr57skvfXTZUCIXJIXVfD66IBgvDNMF9gTeTcVnkDbavuB2eIHNUMNHG%2BsEGOqUBuMtnmq%2B9GxDtMinnFtkIbXUx%2BIZ61uDxbdVGx06hzNPcijHgAKGLAQBL6WZsZNgdFVSpjC63WJcU8ggW3RfDkmMbfdJwr%2BftKRuaJH1xojd8luRscv0hee3FZcqKZBs%2F6jz%2Bu36tyUsDnKJ66G2oIvNw7Y%2BIgDj%2FYD4Z%2B6zikuuQs5s6bBpR8SUeXPGHLjUOAMMq2DJuuGXN6YMn8S5wreFMIdY%2F&X-Amz-Signature=f5e9ad7169dd015386e950d2600f5b1a449959eed1b6063360054049125a34be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQLW6NA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD%2FFjjTieMc0Cf9mi0kj2M01uJBfwAQ8NGuxWf3I8M6iwIgHhul%2BbIa%2FIL4mb1MhHdrmgagSkPO%2BfyJrqD7OuIOb7gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2BFu%2FXirVQb867Y5yrcA6o9oqwblk2tInUvjBScdL0dlnOeyT1o2lUCsiAAWNC7Lnn3wktnKy8Oaxyp1rEJWrmJBuuWqH3DoA0541HBWrSKhYYOTqb3WyQqY0TjN0JI%2FYtMVzUnKRtJ6kVecAQV%2FqjN03i1xBwqFxKuoVNel4MsLHWHdR8PXqBfDAEYAhYtvj%2Ba0CSbR59Tc5rmdPIM%2BOUuCmOpYNsNkihzfhxTumTKCxqAHP1P0oWC9L8QD6HFadiLDPyPrhwl%2BBwal2jdmn%2Fs77VGKRGILHL5pGmeNpv0hwANGoWIM7kWnWuoEysQ%2FWomouC7RHaihW4j%2F40Smaf2h70wgIeAJYLCgK9X2CpVVdLr2r%2FIF1VA3lPP6r4%2BH6McSfeBCz1MvTBfkIbwo3P3mv6VVaCq3v0ziMcKTYt1XxDOkVAJV2PfhXjK%2FsgeBMozJLSFm1zktyI3IgAfYeu5JnLNawxC8KcILOuk3QUVISFvkcMi6pRYtd784pKwXgYhtkzC3%2FuiB%2FBxC%2BeO%2BMyv0lxCBLta%2FmZGL5YeZPlnjYT9tgcxZGWopA0f9x5JwPBeYCEHIZZsP9IsnHbV%2FqHXz7ucAr57skvfXTZUCIXJIXVfD66IBgvDNMF9gTeTcVnkDbavuB2eIHNUMNHG%2BsEGOqUBuMtnmq%2B9GxDtMinnFtkIbXUx%2BIZ61uDxbdVGx06hzNPcijHgAKGLAQBL6WZsZNgdFVSpjC63WJcU8ggW3RfDkmMbfdJwr%2BftKRuaJH1xojd8luRscv0hee3FZcqKZBs%2F6jz%2Bu36tyUsDnKJ66G2oIvNw7Y%2BIgDj%2FYD4Z%2B6zikuuQs5s6bBpR8SUeXPGHLjUOAMMq2DJuuGXN6YMn8S5wreFMIdY%2F&X-Amz-Signature=c2b96a008c0889d650c6700d9dfcf0960846e379b9fe080d5291c8b24e093704&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQLW6NA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD%2FFjjTieMc0Cf9mi0kj2M01uJBfwAQ8NGuxWf3I8M6iwIgHhul%2BbIa%2FIL4mb1MhHdrmgagSkPO%2BfyJrqD7OuIOb7gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2BFu%2FXirVQb867Y5yrcA6o9oqwblk2tInUvjBScdL0dlnOeyT1o2lUCsiAAWNC7Lnn3wktnKy8Oaxyp1rEJWrmJBuuWqH3DoA0541HBWrSKhYYOTqb3WyQqY0TjN0JI%2FYtMVzUnKRtJ6kVecAQV%2FqjN03i1xBwqFxKuoVNel4MsLHWHdR8PXqBfDAEYAhYtvj%2Ba0CSbR59Tc5rmdPIM%2BOUuCmOpYNsNkihzfhxTumTKCxqAHP1P0oWC9L8QD6HFadiLDPyPrhwl%2BBwal2jdmn%2Fs77VGKRGILHL5pGmeNpv0hwANGoWIM7kWnWuoEysQ%2FWomouC7RHaihW4j%2F40Smaf2h70wgIeAJYLCgK9X2CpVVdLr2r%2FIF1VA3lPP6r4%2BH6McSfeBCz1MvTBfkIbwo3P3mv6VVaCq3v0ziMcKTYt1XxDOkVAJV2PfhXjK%2FsgeBMozJLSFm1zktyI3IgAfYeu5JnLNawxC8KcILOuk3QUVISFvkcMi6pRYtd784pKwXgYhtkzC3%2FuiB%2FBxC%2BeO%2BMyv0lxCBLta%2FmZGL5YeZPlnjYT9tgcxZGWopA0f9x5JwPBeYCEHIZZsP9IsnHbV%2FqHXz7ucAr57skvfXTZUCIXJIXVfD66IBgvDNMF9gTeTcVnkDbavuB2eIHNUMNHG%2BsEGOqUBuMtnmq%2B9GxDtMinnFtkIbXUx%2BIZ61uDxbdVGx06hzNPcijHgAKGLAQBL6WZsZNgdFVSpjC63WJcU8ggW3RfDkmMbfdJwr%2BftKRuaJH1xojd8luRscv0hee3FZcqKZBs%2F6jz%2Bu36tyUsDnKJ66G2oIvNw7Y%2BIgDj%2FYD4Z%2B6zikuuQs5s6bBpR8SUeXPGHLjUOAMMq2DJuuGXN6YMn8S5wreFMIdY%2F&X-Amz-Signature=b87ab5aef823e6f8e74857cb1789b8f7fecfd28376ca8f653ad46fb69e4f4cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLQLW6NA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD%2FFjjTieMc0Cf9mi0kj2M01uJBfwAQ8NGuxWf3I8M6iwIgHhul%2BbIa%2FIL4mb1MhHdrmgagSkPO%2BfyJrqD7OuIOb7gq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2BFu%2FXirVQb867Y5yrcA6o9oqwblk2tInUvjBScdL0dlnOeyT1o2lUCsiAAWNC7Lnn3wktnKy8Oaxyp1rEJWrmJBuuWqH3DoA0541HBWrSKhYYOTqb3WyQqY0TjN0JI%2FYtMVzUnKRtJ6kVecAQV%2FqjN03i1xBwqFxKuoVNel4MsLHWHdR8PXqBfDAEYAhYtvj%2Ba0CSbR59Tc5rmdPIM%2BOUuCmOpYNsNkihzfhxTumTKCxqAHP1P0oWC9L8QD6HFadiLDPyPrhwl%2BBwal2jdmn%2Fs77VGKRGILHL5pGmeNpv0hwANGoWIM7kWnWuoEysQ%2FWomouC7RHaihW4j%2F40Smaf2h70wgIeAJYLCgK9X2CpVVdLr2r%2FIF1VA3lPP6r4%2BH6McSfeBCz1MvTBfkIbwo3P3mv6VVaCq3v0ziMcKTYt1XxDOkVAJV2PfhXjK%2FsgeBMozJLSFm1zktyI3IgAfYeu5JnLNawxC8KcILOuk3QUVISFvkcMi6pRYtd784pKwXgYhtkzC3%2FuiB%2FBxC%2BeO%2BMyv0lxCBLta%2FmZGL5YeZPlnjYT9tgcxZGWopA0f9x5JwPBeYCEHIZZsP9IsnHbV%2FqHXz7ucAr57skvfXTZUCIXJIXVfD66IBgvDNMF9gTeTcVnkDbavuB2eIHNUMNHG%2BsEGOqUBuMtnmq%2B9GxDtMinnFtkIbXUx%2BIZ61uDxbdVGx06hzNPcijHgAKGLAQBL6WZsZNgdFVSpjC63WJcU8ggW3RfDkmMbfdJwr%2BftKRuaJH1xojd8luRscv0hee3FZcqKZBs%2F6jz%2Bu36tyUsDnKJ66G2oIvNw7Y%2BIgDj%2FYD4Z%2B6zikuuQs5s6bBpR8SUeXPGHLjUOAMMq2DJuuGXN6YMn8S5wreFMIdY%2F&X-Amz-Signature=3161bf1ae29833e3ae40f642be0d7a13a0796d8fbc933748e605bff6f5015dd0&X-Amz-SignedHeaders=host&x-id=GetObject)
