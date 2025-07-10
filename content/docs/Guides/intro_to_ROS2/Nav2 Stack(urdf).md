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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWLQMD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O7oFmIfdCZ0c71kuNYxSL4DK2KmjC8KOSkhLMVwNKgIgcvlCI2Ng5SAjXMl63WS42oZ1H3tnOg6wznzWM8MKxKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29kdk7KgQe3u3h%2FCrcA0LtiPpsUF%2BqSmMiCWBvMBW3ErCjRtmu3N6HpX7CErBLsxKuZoR3sfesGz37qwqoulxkyG%2BmIHY37cLx1ycqL26eIXBc3HRCEwWUm6Rtj0ez7%2FFm%2B1jOw6PEH5vdilFiW%2F3wKsE2wRPLhSTHV%2FGvnlNF2DjWraqAt3YZJEE%2FzUDXtwYOnAV34%2FvrnaO62HZVm0dmLcyICa4xRR9t4hPAiWvv71Rzu5yHsrMM3K45yTW7TKYfhv0efI%2FtgudxLykrHfZPDgWemdoMBDRf7H9bRzEd5q5p2TJmMyP0oKyN7rU9czuRYcKtOFHoPdsNtV5k2NWBMvqiSUoju3BHjGoF4e1HM0U%2FLZWa7Pbx%2F1A1pH0GhUyaoTu0MHqv5j9Zp1EUmpanNiFetlCT2VJqraGYgI12HNw43ScFVEYPNrS21yXlzp9T9NTBkNDfGgAKbvD91QjwgRPjzTE%2BGt9cHwY0YqFOE6ox7Oiw8Jg0mIgQUxXwT7lgTKrMQi190P2c1j3gPWwD%2FVvApX5hj%2FxLymPdUgWDEiqw%2FPiUHbGm7SszOpy2lw7%2BsxMjPcFfEpKBUY8QuGClpMWmjDdjvGl4GUr2dbSfg6qc0ZYoaJH%2Bb9btJgP%2FWz%2F8qGTwLTOJBLrYMNaBvsMGOqUB%2BuykIFqQc%2F8o%2BLa0jarl2QB81LrhzryeX6wfVhR8TKKDKfD9ghwbJYFXZhfxOq4oliLShVYTllLxi32UcPEfyOjo1Nxh9AcO8JPDeRez7mZlQg%2FC9hlpP5h1gdkbypqFf77Ep7QGWBAA03XrdoGwdocE2pQXWnS8lTHA5otDNXLBBMTkVDmvsnaU8LenmNxEDpMh9RU6ld%2BI%2Fnpv4MJoWNzo1b1S&X-Amz-Signature=a00b412a8fc4f38ba6b72c86939e3a828dbdd973e9560f73396d023c9783152f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWLQMD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O7oFmIfdCZ0c71kuNYxSL4DK2KmjC8KOSkhLMVwNKgIgcvlCI2Ng5SAjXMl63WS42oZ1H3tnOg6wznzWM8MKxKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29kdk7KgQe3u3h%2FCrcA0LtiPpsUF%2BqSmMiCWBvMBW3ErCjRtmu3N6HpX7CErBLsxKuZoR3sfesGz37qwqoulxkyG%2BmIHY37cLx1ycqL26eIXBc3HRCEwWUm6Rtj0ez7%2FFm%2B1jOw6PEH5vdilFiW%2F3wKsE2wRPLhSTHV%2FGvnlNF2DjWraqAt3YZJEE%2FzUDXtwYOnAV34%2FvrnaO62HZVm0dmLcyICa4xRR9t4hPAiWvv71Rzu5yHsrMM3K45yTW7TKYfhv0efI%2FtgudxLykrHfZPDgWemdoMBDRf7H9bRzEd5q5p2TJmMyP0oKyN7rU9czuRYcKtOFHoPdsNtV5k2NWBMvqiSUoju3BHjGoF4e1HM0U%2FLZWa7Pbx%2F1A1pH0GhUyaoTu0MHqv5j9Zp1EUmpanNiFetlCT2VJqraGYgI12HNw43ScFVEYPNrS21yXlzp9T9NTBkNDfGgAKbvD91QjwgRPjzTE%2BGt9cHwY0YqFOE6ox7Oiw8Jg0mIgQUxXwT7lgTKrMQi190P2c1j3gPWwD%2FVvApX5hj%2FxLymPdUgWDEiqw%2FPiUHbGm7SszOpy2lw7%2BsxMjPcFfEpKBUY8QuGClpMWmjDdjvGl4GUr2dbSfg6qc0ZYoaJH%2Bb9btJgP%2FWz%2F8qGTwLTOJBLrYMNaBvsMGOqUB%2BuykIFqQc%2F8o%2BLa0jarl2QB81LrhzryeX6wfVhR8TKKDKfD9ghwbJYFXZhfxOq4oliLShVYTllLxi32UcPEfyOjo1Nxh9AcO8JPDeRez7mZlQg%2FC9hlpP5h1gdkbypqFf77Ep7QGWBAA03XrdoGwdocE2pQXWnS8lTHA5otDNXLBBMTkVDmvsnaU8LenmNxEDpMh9RU6ld%2BI%2Fnpv4MJoWNzo1b1S&X-Amz-Signature=88b2def3b60d28240454238a9d7e42b3410dc403413dd030ed9d66d61f8fd393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWLQMD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O7oFmIfdCZ0c71kuNYxSL4DK2KmjC8KOSkhLMVwNKgIgcvlCI2Ng5SAjXMl63WS42oZ1H3tnOg6wznzWM8MKxKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29kdk7KgQe3u3h%2FCrcA0LtiPpsUF%2BqSmMiCWBvMBW3ErCjRtmu3N6HpX7CErBLsxKuZoR3sfesGz37qwqoulxkyG%2BmIHY37cLx1ycqL26eIXBc3HRCEwWUm6Rtj0ez7%2FFm%2B1jOw6PEH5vdilFiW%2F3wKsE2wRPLhSTHV%2FGvnlNF2DjWraqAt3YZJEE%2FzUDXtwYOnAV34%2FvrnaO62HZVm0dmLcyICa4xRR9t4hPAiWvv71Rzu5yHsrMM3K45yTW7TKYfhv0efI%2FtgudxLykrHfZPDgWemdoMBDRf7H9bRzEd5q5p2TJmMyP0oKyN7rU9czuRYcKtOFHoPdsNtV5k2NWBMvqiSUoju3BHjGoF4e1HM0U%2FLZWa7Pbx%2F1A1pH0GhUyaoTu0MHqv5j9Zp1EUmpanNiFetlCT2VJqraGYgI12HNw43ScFVEYPNrS21yXlzp9T9NTBkNDfGgAKbvD91QjwgRPjzTE%2BGt9cHwY0YqFOE6ox7Oiw8Jg0mIgQUxXwT7lgTKrMQi190P2c1j3gPWwD%2FVvApX5hj%2FxLymPdUgWDEiqw%2FPiUHbGm7SszOpy2lw7%2BsxMjPcFfEpKBUY8QuGClpMWmjDdjvGl4GUr2dbSfg6qc0ZYoaJH%2Bb9btJgP%2FWz%2F8qGTwLTOJBLrYMNaBvsMGOqUB%2BuykIFqQc%2F8o%2BLa0jarl2QB81LrhzryeX6wfVhR8TKKDKfD9ghwbJYFXZhfxOq4oliLShVYTllLxi32UcPEfyOjo1Nxh9AcO8JPDeRez7mZlQg%2FC9hlpP5h1gdkbypqFf77Ep7QGWBAA03XrdoGwdocE2pQXWnS8lTHA5otDNXLBBMTkVDmvsnaU8LenmNxEDpMh9RU6ld%2BI%2Fnpv4MJoWNzo1b1S&X-Amz-Signature=89bbe15dfdc20038e8fffb53c113b9dd43b01a1df56a190b04b4e14ec202dd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWLQMD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O7oFmIfdCZ0c71kuNYxSL4DK2KmjC8KOSkhLMVwNKgIgcvlCI2Ng5SAjXMl63WS42oZ1H3tnOg6wznzWM8MKxKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29kdk7KgQe3u3h%2FCrcA0LtiPpsUF%2BqSmMiCWBvMBW3ErCjRtmu3N6HpX7CErBLsxKuZoR3sfesGz37qwqoulxkyG%2BmIHY37cLx1ycqL26eIXBc3HRCEwWUm6Rtj0ez7%2FFm%2B1jOw6PEH5vdilFiW%2F3wKsE2wRPLhSTHV%2FGvnlNF2DjWraqAt3YZJEE%2FzUDXtwYOnAV34%2FvrnaO62HZVm0dmLcyICa4xRR9t4hPAiWvv71Rzu5yHsrMM3K45yTW7TKYfhv0efI%2FtgudxLykrHfZPDgWemdoMBDRf7H9bRzEd5q5p2TJmMyP0oKyN7rU9czuRYcKtOFHoPdsNtV5k2NWBMvqiSUoju3BHjGoF4e1HM0U%2FLZWa7Pbx%2F1A1pH0GhUyaoTu0MHqv5j9Zp1EUmpanNiFetlCT2VJqraGYgI12HNw43ScFVEYPNrS21yXlzp9T9NTBkNDfGgAKbvD91QjwgRPjzTE%2BGt9cHwY0YqFOE6ox7Oiw8Jg0mIgQUxXwT7lgTKrMQi190P2c1j3gPWwD%2FVvApX5hj%2FxLymPdUgWDEiqw%2FPiUHbGm7SszOpy2lw7%2BsxMjPcFfEpKBUY8QuGClpMWmjDdjvGl4GUr2dbSfg6qc0ZYoaJH%2Bb9btJgP%2FWz%2F8qGTwLTOJBLrYMNaBvsMGOqUB%2BuykIFqQc%2F8o%2BLa0jarl2QB81LrhzryeX6wfVhR8TKKDKfD9ghwbJYFXZhfxOq4oliLShVYTllLxi32UcPEfyOjo1Nxh9AcO8JPDeRez7mZlQg%2FC9hlpP5h1gdkbypqFf77Ep7QGWBAA03XrdoGwdocE2pQXWnS8lTHA5otDNXLBBMTkVDmvsnaU8LenmNxEDpMh9RU6ld%2BI%2Fnpv4MJoWNzo1b1S&X-Amz-Signature=2b760258219ac50a0e11fe634660b75613d882cb1dd34f95716562a0a662c39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWLQMD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O7oFmIfdCZ0c71kuNYxSL4DK2KmjC8KOSkhLMVwNKgIgcvlCI2Ng5SAjXMl63WS42oZ1H3tnOg6wznzWM8MKxKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29kdk7KgQe3u3h%2FCrcA0LtiPpsUF%2BqSmMiCWBvMBW3ErCjRtmu3N6HpX7CErBLsxKuZoR3sfesGz37qwqoulxkyG%2BmIHY37cLx1ycqL26eIXBc3HRCEwWUm6Rtj0ez7%2FFm%2B1jOw6PEH5vdilFiW%2F3wKsE2wRPLhSTHV%2FGvnlNF2DjWraqAt3YZJEE%2FzUDXtwYOnAV34%2FvrnaO62HZVm0dmLcyICa4xRR9t4hPAiWvv71Rzu5yHsrMM3K45yTW7TKYfhv0efI%2FtgudxLykrHfZPDgWemdoMBDRf7H9bRzEd5q5p2TJmMyP0oKyN7rU9czuRYcKtOFHoPdsNtV5k2NWBMvqiSUoju3BHjGoF4e1HM0U%2FLZWa7Pbx%2F1A1pH0GhUyaoTu0MHqv5j9Zp1EUmpanNiFetlCT2VJqraGYgI12HNw43ScFVEYPNrS21yXlzp9T9NTBkNDfGgAKbvD91QjwgRPjzTE%2BGt9cHwY0YqFOE6ox7Oiw8Jg0mIgQUxXwT7lgTKrMQi190P2c1j3gPWwD%2FVvApX5hj%2FxLymPdUgWDEiqw%2FPiUHbGm7SszOpy2lw7%2BsxMjPcFfEpKBUY8QuGClpMWmjDdjvGl4GUr2dbSfg6qc0ZYoaJH%2Bb9btJgP%2FWz%2F8qGTwLTOJBLrYMNaBvsMGOqUB%2BuykIFqQc%2F8o%2BLa0jarl2QB81LrhzryeX6wfVhR8TKKDKfD9ghwbJYFXZhfxOq4oliLShVYTllLxi32UcPEfyOjo1Nxh9AcO8JPDeRez7mZlQg%2FC9hlpP5h1gdkbypqFf77Ep7QGWBAA03XrdoGwdocE2pQXWnS8lTHA5otDNXLBBMTkVDmvsnaU8LenmNxEDpMh9RU6ld%2BI%2Fnpv4MJoWNzo1b1S&X-Amz-Signature=05a1d34d679e4336ef7aad9ae0d43006d84bc6fd12eebc5a126672ef74f942a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWLQMD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O7oFmIfdCZ0c71kuNYxSL4DK2KmjC8KOSkhLMVwNKgIgcvlCI2Ng5SAjXMl63WS42oZ1H3tnOg6wznzWM8MKxKwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29kdk7KgQe3u3h%2FCrcA0LtiPpsUF%2BqSmMiCWBvMBW3ErCjRtmu3N6HpX7CErBLsxKuZoR3sfesGz37qwqoulxkyG%2BmIHY37cLx1ycqL26eIXBc3HRCEwWUm6Rtj0ez7%2FFm%2B1jOw6PEH5vdilFiW%2F3wKsE2wRPLhSTHV%2FGvnlNF2DjWraqAt3YZJEE%2FzUDXtwYOnAV34%2FvrnaO62HZVm0dmLcyICa4xRR9t4hPAiWvv71Rzu5yHsrMM3K45yTW7TKYfhv0efI%2FtgudxLykrHfZPDgWemdoMBDRf7H9bRzEd5q5p2TJmMyP0oKyN7rU9czuRYcKtOFHoPdsNtV5k2NWBMvqiSUoju3BHjGoF4e1HM0U%2FLZWa7Pbx%2F1A1pH0GhUyaoTu0MHqv5j9Zp1EUmpanNiFetlCT2VJqraGYgI12HNw43ScFVEYPNrS21yXlzp9T9NTBkNDfGgAKbvD91QjwgRPjzTE%2BGt9cHwY0YqFOE6ox7Oiw8Jg0mIgQUxXwT7lgTKrMQi190P2c1j3gPWwD%2FVvApX5hj%2FxLymPdUgWDEiqw%2FPiUHbGm7SszOpy2lw7%2BsxMjPcFfEpKBUY8QuGClpMWmjDdjvGl4GUr2dbSfg6qc0ZYoaJH%2Bb9btJgP%2FWz%2F8qGTwLTOJBLrYMNaBvsMGOqUB%2BuykIFqQc%2F8o%2BLa0jarl2QB81LrhzryeX6wfVhR8TKKDKfD9ghwbJYFXZhfxOq4oliLShVYTllLxi32UcPEfyOjo1Nxh9AcO8JPDeRez7mZlQg%2FC9hlpP5h1gdkbypqFf77Ep7QGWBAA03XrdoGwdocE2pQXWnS8lTHA5otDNXLBBMTkVDmvsnaU8LenmNxEDpMh9RU6ld%2BI%2Fnpv4MJoWNzo1b1S&X-Amz-Signature=47bc9001522940c6165d744f4b5ffc0933c03ea02f333968e3644c799ab87c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
