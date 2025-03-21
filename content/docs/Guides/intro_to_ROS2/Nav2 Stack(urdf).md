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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIQN7RX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDMWqueW97LvNo0Y81tnsapxvieb2W4FmD9oHPztCJK9gIgI9mOJyKkGmgBsXwmCA7MAd2qBG5PsNmUB1uIX2dNQjEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFgBtxApqdTVxH0iircA0hWf2BpNsD0ebusx8fYuixogvXKfNY9z97ldZyKZg5ZdHG%2F9%2BJiq0WTet3wnaU73q%2FQczM7eOb6H5TZAdRTqioeLjE8ajThoujwBZkO1pKAcuoPI3aX0RyKfJbuAHWh54XN8uEaM2KFFSSDyNNp9GOi2dwKvrnmFbU6qwOtmDJ7qAAjmCmNWwVVFNiBxKBdsU76DhnOrGaR33R7pWgekEafOXi6SHt50lOSOQVk0W0LiGeaEfUIzoNCQ5imrh76bGIPjXMilUofooCV9slMhSNxfpwif4T8zidgUQQoxv4mUPSO8nSeBqjY8jo4IuI%2FVdenr5U%2Bk4VOIQ4V12atoAebFl%2B4N%2Bpp%2BbFBoru%2BvLxmbjDcHMRVoMVRUwtxxc2yqwqa2c4Pt67q%2Bv0cwv5TCRDWTfJtr7PZCNgjICuMgPCQVLmOkH8a4oymDaVmvFByGHK5CCE8BZl6we%2BTdW%2Fq9XvR515hy9bzkyjoLsYcjuM3APKFB%2Bbh8reXlJH%2FLDkNGBv2iTi06Tf5try28PCdbP70Uq%2BgvG9z0R6dO6CVdcfyaX3LQmUe%2FewAaV1lRw7y4crOcVWDM50iera%2F33S7TcONuB16ZV10fZuByb5A0K0uucSev%2BsbT84r%2FNc6MI%2BZ874GOqUBh0lwiYTORWZe3A%2F5h%2FABnnnrAjlwuVKZ6SzW3R4FsTggsJHLjJKO1ucYXxALjl0swuEmOpuRu8D0S7qWDugE%2B%2FPKmJvTISrtUrxOAAmS3jLOyYe0E1vbSoolVNQDe78Gp625IdNa6ed9GaoAkz04By02Yg9PnGIH43JbKNQpMdzhB52JcOJQUsmXeP6N0No9iGSH9KrQ1fBo1u2WJideJxvvj8p0&X-Amz-Signature=7b2746a512c55a0f8ac9e87c73ebabe6e1f4a4596edf56be469fcb6d3d67e1f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIQN7RX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDMWqueW97LvNo0Y81tnsapxvieb2W4FmD9oHPztCJK9gIgI9mOJyKkGmgBsXwmCA7MAd2qBG5PsNmUB1uIX2dNQjEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFgBtxApqdTVxH0iircA0hWf2BpNsD0ebusx8fYuixogvXKfNY9z97ldZyKZg5ZdHG%2F9%2BJiq0WTet3wnaU73q%2FQczM7eOb6H5TZAdRTqioeLjE8ajThoujwBZkO1pKAcuoPI3aX0RyKfJbuAHWh54XN8uEaM2KFFSSDyNNp9GOi2dwKvrnmFbU6qwOtmDJ7qAAjmCmNWwVVFNiBxKBdsU76DhnOrGaR33R7pWgekEafOXi6SHt50lOSOQVk0W0LiGeaEfUIzoNCQ5imrh76bGIPjXMilUofooCV9slMhSNxfpwif4T8zidgUQQoxv4mUPSO8nSeBqjY8jo4IuI%2FVdenr5U%2Bk4VOIQ4V12atoAebFl%2B4N%2Bpp%2BbFBoru%2BvLxmbjDcHMRVoMVRUwtxxc2yqwqa2c4Pt67q%2Bv0cwv5TCRDWTfJtr7PZCNgjICuMgPCQVLmOkH8a4oymDaVmvFByGHK5CCE8BZl6we%2BTdW%2Fq9XvR515hy9bzkyjoLsYcjuM3APKFB%2Bbh8reXlJH%2FLDkNGBv2iTi06Tf5try28PCdbP70Uq%2BgvG9z0R6dO6CVdcfyaX3LQmUe%2FewAaV1lRw7y4crOcVWDM50iera%2F33S7TcONuB16ZV10fZuByb5A0K0uucSev%2BsbT84r%2FNc6MI%2BZ874GOqUBh0lwiYTORWZe3A%2F5h%2FABnnnrAjlwuVKZ6SzW3R4FsTggsJHLjJKO1ucYXxALjl0swuEmOpuRu8D0S7qWDugE%2B%2FPKmJvTISrtUrxOAAmS3jLOyYe0E1vbSoolVNQDe78Gp625IdNa6ed9GaoAkz04By02Yg9PnGIH43JbKNQpMdzhB52JcOJQUsmXeP6N0No9iGSH9KrQ1fBo1u2WJideJxvvj8p0&X-Amz-Signature=a2aec60265a6d9c626efbbd3f00e40a98407a16ffc2e577cb8564dd2cc8d58c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIQN7RX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDMWqueW97LvNo0Y81tnsapxvieb2W4FmD9oHPztCJK9gIgI9mOJyKkGmgBsXwmCA7MAd2qBG5PsNmUB1uIX2dNQjEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFgBtxApqdTVxH0iircA0hWf2BpNsD0ebusx8fYuixogvXKfNY9z97ldZyKZg5ZdHG%2F9%2BJiq0WTet3wnaU73q%2FQczM7eOb6H5TZAdRTqioeLjE8ajThoujwBZkO1pKAcuoPI3aX0RyKfJbuAHWh54XN8uEaM2KFFSSDyNNp9GOi2dwKvrnmFbU6qwOtmDJ7qAAjmCmNWwVVFNiBxKBdsU76DhnOrGaR33R7pWgekEafOXi6SHt50lOSOQVk0W0LiGeaEfUIzoNCQ5imrh76bGIPjXMilUofooCV9slMhSNxfpwif4T8zidgUQQoxv4mUPSO8nSeBqjY8jo4IuI%2FVdenr5U%2Bk4VOIQ4V12atoAebFl%2B4N%2Bpp%2BbFBoru%2BvLxmbjDcHMRVoMVRUwtxxc2yqwqa2c4Pt67q%2Bv0cwv5TCRDWTfJtr7PZCNgjICuMgPCQVLmOkH8a4oymDaVmvFByGHK5CCE8BZl6we%2BTdW%2Fq9XvR515hy9bzkyjoLsYcjuM3APKFB%2Bbh8reXlJH%2FLDkNGBv2iTi06Tf5try28PCdbP70Uq%2BgvG9z0R6dO6CVdcfyaX3LQmUe%2FewAaV1lRw7y4crOcVWDM50iera%2F33S7TcONuB16ZV10fZuByb5A0K0uucSev%2BsbT84r%2FNc6MI%2BZ874GOqUBh0lwiYTORWZe3A%2F5h%2FABnnnrAjlwuVKZ6SzW3R4FsTggsJHLjJKO1ucYXxALjl0swuEmOpuRu8D0S7qWDugE%2B%2FPKmJvTISrtUrxOAAmS3jLOyYe0E1vbSoolVNQDe78Gp625IdNa6ed9GaoAkz04By02Yg9PnGIH43JbKNQpMdzhB52JcOJQUsmXeP6N0No9iGSH9KrQ1fBo1u2WJideJxvvj8p0&X-Amz-Signature=52bfb338adce7ce4df70b68a7d8a1e7b8ba0dc570807426ba5e3169f074d349c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIQN7RX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDMWqueW97LvNo0Y81tnsapxvieb2W4FmD9oHPztCJK9gIgI9mOJyKkGmgBsXwmCA7MAd2qBG5PsNmUB1uIX2dNQjEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFgBtxApqdTVxH0iircA0hWf2BpNsD0ebusx8fYuixogvXKfNY9z97ldZyKZg5ZdHG%2F9%2BJiq0WTet3wnaU73q%2FQczM7eOb6H5TZAdRTqioeLjE8ajThoujwBZkO1pKAcuoPI3aX0RyKfJbuAHWh54XN8uEaM2KFFSSDyNNp9GOi2dwKvrnmFbU6qwOtmDJ7qAAjmCmNWwVVFNiBxKBdsU76DhnOrGaR33R7pWgekEafOXi6SHt50lOSOQVk0W0LiGeaEfUIzoNCQ5imrh76bGIPjXMilUofooCV9slMhSNxfpwif4T8zidgUQQoxv4mUPSO8nSeBqjY8jo4IuI%2FVdenr5U%2Bk4VOIQ4V12atoAebFl%2B4N%2Bpp%2BbFBoru%2BvLxmbjDcHMRVoMVRUwtxxc2yqwqa2c4Pt67q%2Bv0cwv5TCRDWTfJtr7PZCNgjICuMgPCQVLmOkH8a4oymDaVmvFByGHK5CCE8BZl6we%2BTdW%2Fq9XvR515hy9bzkyjoLsYcjuM3APKFB%2Bbh8reXlJH%2FLDkNGBv2iTi06Tf5try28PCdbP70Uq%2BgvG9z0R6dO6CVdcfyaX3LQmUe%2FewAaV1lRw7y4crOcVWDM50iera%2F33S7TcONuB16ZV10fZuByb5A0K0uucSev%2BsbT84r%2FNc6MI%2BZ874GOqUBh0lwiYTORWZe3A%2F5h%2FABnnnrAjlwuVKZ6SzW3R4FsTggsJHLjJKO1ucYXxALjl0swuEmOpuRu8D0S7qWDugE%2B%2FPKmJvTISrtUrxOAAmS3jLOyYe0E1vbSoolVNQDe78Gp625IdNa6ed9GaoAkz04By02Yg9PnGIH43JbKNQpMdzhB52JcOJQUsmXeP6N0No9iGSH9KrQ1fBo1u2WJideJxvvj8p0&X-Amz-Signature=18e217be56d240d022ac87bf722ddcf687607441355a2a47c77b528ded013257&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIQN7RX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDMWqueW97LvNo0Y81tnsapxvieb2W4FmD9oHPztCJK9gIgI9mOJyKkGmgBsXwmCA7MAd2qBG5PsNmUB1uIX2dNQjEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFgBtxApqdTVxH0iircA0hWf2BpNsD0ebusx8fYuixogvXKfNY9z97ldZyKZg5ZdHG%2F9%2BJiq0WTet3wnaU73q%2FQczM7eOb6H5TZAdRTqioeLjE8ajThoujwBZkO1pKAcuoPI3aX0RyKfJbuAHWh54XN8uEaM2KFFSSDyNNp9GOi2dwKvrnmFbU6qwOtmDJ7qAAjmCmNWwVVFNiBxKBdsU76DhnOrGaR33R7pWgekEafOXi6SHt50lOSOQVk0W0LiGeaEfUIzoNCQ5imrh76bGIPjXMilUofooCV9slMhSNxfpwif4T8zidgUQQoxv4mUPSO8nSeBqjY8jo4IuI%2FVdenr5U%2Bk4VOIQ4V12atoAebFl%2B4N%2Bpp%2BbFBoru%2BvLxmbjDcHMRVoMVRUwtxxc2yqwqa2c4Pt67q%2Bv0cwv5TCRDWTfJtr7PZCNgjICuMgPCQVLmOkH8a4oymDaVmvFByGHK5CCE8BZl6we%2BTdW%2Fq9XvR515hy9bzkyjoLsYcjuM3APKFB%2Bbh8reXlJH%2FLDkNGBv2iTi06Tf5try28PCdbP70Uq%2BgvG9z0R6dO6CVdcfyaX3LQmUe%2FewAaV1lRw7y4crOcVWDM50iera%2F33S7TcONuB16ZV10fZuByb5A0K0uucSev%2BsbT84r%2FNc6MI%2BZ874GOqUBh0lwiYTORWZe3A%2F5h%2FABnnnrAjlwuVKZ6SzW3R4FsTggsJHLjJKO1ucYXxALjl0swuEmOpuRu8D0S7qWDugE%2B%2FPKmJvTISrtUrxOAAmS3jLOyYe0E1vbSoolVNQDe78Gp625IdNa6ed9GaoAkz04By02Yg9PnGIH43JbKNQpMdzhB52JcOJQUsmXeP6N0No9iGSH9KrQ1fBo1u2WJideJxvvj8p0&X-Amz-Signature=44c690d8dcd91b43badf3b122acae7fde763d2aff38c2d6e88b1fd104eeb318c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIQN7RX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T032238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDMWqueW97LvNo0Y81tnsapxvieb2W4FmD9oHPztCJK9gIgI9mOJyKkGmgBsXwmCA7MAd2qBG5PsNmUB1uIX2dNQjEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFgBtxApqdTVxH0iircA0hWf2BpNsD0ebusx8fYuixogvXKfNY9z97ldZyKZg5ZdHG%2F9%2BJiq0WTet3wnaU73q%2FQczM7eOb6H5TZAdRTqioeLjE8ajThoujwBZkO1pKAcuoPI3aX0RyKfJbuAHWh54XN8uEaM2KFFSSDyNNp9GOi2dwKvrnmFbU6qwOtmDJ7qAAjmCmNWwVVFNiBxKBdsU76DhnOrGaR33R7pWgekEafOXi6SHt50lOSOQVk0W0LiGeaEfUIzoNCQ5imrh76bGIPjXMilUofooCV9slMhSNxfpwif4T8zidgUQQoxv4mUPSO8nSeBqjY8jo4IuI%2FVdenr5U%2Bk4VOIQ4V12atoAebFl%2B4N%2Bpp%2BbFBoru%2BvLxmbjDcHMRVoMVRUwtxxc2yqwqa2c4Pt67q%2Bv0cwv5TCRDWTfJtr7PZCNgjICuMgPCQVLmOkH8a4oymDaVmvFByGHK5CCE8BZl6we%2BTdW%2Fq9XvR515hy9bzkyjoLsYcjuM3APKFB%2Bbh8reXlJH%2FLDkNGBv2iTi06Tf5try28PCdbP70Uq%2BgvG9z0R6dO6CVdcfyaX3LQmUe%2FewAaV1lRw7y4crOcVWDM50iera%2F33S7TcONuB16ZV10fZuByb5A0K0uucSev%2BsbT84r%2FNc6MI%2BZ874GOqUBh0lwiYTORWZe3A%2F5h%2FABnnnrAjlwuVKZ6SzW3R4FsTggsJHLjJKO1ucYXxALjl0swuEmOpuRu8D0S7qWDugE%2B%2FPKmJvTISrtUrxOAAmS3jLOyYe0E1vbSoolVNQDe78Gp625IdNa6ed9GaoAkz04By02Yg9PnGIH43JbKNQpMdzhB52JcOJQUsmXeP6N0No9iGSH9KrQ1fBo1u2WJideJxvvj8p0&X-Amz-Signature=ef89a83415375c3cfb0f9893413c3923670a7fa20d27e875d2afb5dfb40461cf&X-Amz-SignedHeaders=host&x-id=GetObject)
