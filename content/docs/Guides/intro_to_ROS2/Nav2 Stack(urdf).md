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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJKLNKY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEUAt14%2BtJ5WOSzXJZcSNdygKIJds%2BoVBaJnuupY2w%2FAAiEAg1Tq9wRC8G8A1TG83Pm3zezFVA0yCJY5192LaqDNbZ4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEt5zB5%2FcqfDjJUCrcA%2F1DJ32%2BipXkj6hP3zsvZLT%2B9jEpy92ar4xAXZF8%2FxSrgj2dK7cTL8NfIT%2FjfUyimrgaZ8kunfgvoYtQ2rU01W3Sj0QTNwWYAbNTZCX7vaVvjQ11mvCKBdKL99XqcCM%2BUlNaX1o2fsMsEsxz72NsaMpK8gg%2BfAluCw3aJ7tAU7jsfa%2Fgwxu1IIHfq%2BUsJjh1DQ3eKx6uxQNy%2FM9YENNGAz1h81TQT82B113vWwbDOJqhVwqeZMDt%2BAiiC8CQRNoeSXN9aEJZ7AW6J8EmtBG0ziz1PvgTOtCtHUY4O09DTjQWDYV%2Fz%2FVgLJRsTQspF3eQQfcvtjHXzh2yp7cXQ9kr95n3RR0sZCsFoiDe%2BZky0cvxLmamDWioi1Ck4dJjr0s4RVi6BJ5UYhc8dJi6%2Bh6yiL7%2FWlCRPnL02D0EYNku0RZjko%2FPD2tE9md8vLarVjQ%2B0dl4jbYwFaYS03Wm1APgECBobdTC2HvmsNo1Javtzq%2BYxqT1txXqNjV6TuDMpgO3sRWfka3lzUwlN2hoP7JggcOBgFhHju6nXxgcvHU4J3Yh1hzskBB4zEfl788h1WRsHtjKMfaytwbBla0iDGAtIuB06PnLTNuujgYkkxLUH3zryDAXtyWztlTV%2FZr8MMGgj8AGOqUBlQyhfLw848r2098ijwAqsvTL5nUDseTK0i8xMxIBmzLVKtkjOGf2pp%2F8%2FffHA8h88cqV65tK02%2FxGPEZ86cUU7WR%2BXEL%2FP2KXSj2sqCXFAP8VHM%2B6jBRFOwAPWMDetAiTBF0SG2AMGct%2FawVuJDo8gpWg3UBdETIeUjNTXADSg%2FG%2BM1qD59Z23bDlh3KGE9noQ4SbbviqEUeViFBwZ6oljI7sqxD&X-Amz-Signature=20c5f9ee7ed9bf1c9f10948d849378b9279490a811dc910d73ad3ef5d437504b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJKLNKY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEUAt14%2BtJ5WOSzXJZcSNdygKIJds%2BoVBaJnuupY2w%2FAAiEAg1Tq9wRC8G8A1TG83Pm3zezFVA0yCJY5192LaqDNbZ4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEt5zB5%2FcqfDjJUCrcA%2F1DJ32%2BipXkj6hP3zsvZLT%2B9jEpy92ar4xAXZF8%2FxSrgj2dK7cTL8NfIT%2FjfUyimrgaZ8kunfgvoYtQ2rU01W3Sj0QTNwWYAbNTZCX7vaVvjQ11mvCKBdKL99XqcCM%2BUlNaX1o2fsMsEsxz72NsaMpK8gg%2BfAluCw3aJ7tAU7jsfa%2Fgwxu1IIHfq%2BUsJjh1DQ3eKx6uxQNy%2FM9YENNGAz1h81TQT82B113vWwbDOJqhVwqeZMDt%2BAiiC8CQRNoeSXN9aEJZ7AW6J8EmtBG0ziz1PvgTOtCtHUY4O09DTjQWDYV%2Fz%2FVgLJRsTQspF3eQQfcvtjHXzh2yp7cXQ9kr95n3RR0sZCsFoiDe%2BZky0cvxLmamDWioi1Ck4dJjr0s4RVi6BJ5UYhc8dJi6%2Bh6yiL7%2FWlCRPnL02D0EYNku0RZjko%2FPD2tE9md8vLarVjQ%2B0dl4jbYwFaYS03Wm1APgECBobdTC2HvmsNo1Javtzq%2BYxqT1txXqNjV6TuDMpgO3sRWfka3lzUwlN2hoP7JggcOBgFhHju6nXxgcvHU4J3Yh1hzskBB4zEfl788h1WRsHtjKMfaytwbBla0iDGAtIuB06PnLTNuujgYkkxLUH3zryDAXtyWztlTV%2FZr8MMGgj8AGOqUBlQyhfLw848r2098ijwAqsvTL5nUDseTK0i8xMxIBmzLVKtkjOGf2pp%2F8%2FffHA8h88cqV65tK02%2FxGPEZ86cUU7WR%2BXEL%2FP2KXSj2sqCXFAP8VHM%2B6jBRFOwAPWMDetAiTBF0SG2AMGct%2FawVuJDo8gpWg3UBdETIeUjNTXADSg%2FG%2BM1qD59Z23bDlh3KGE9noQ4SbbviqEUeViFBwZ6oljI7sqxD&X-Amz-Signature=9602db1f607e5de854d1ff5018686e3e71648e022023322d20ca4dc238fbd335&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJKLNKY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEUAt14%2BtJ5WOSzXJZcSNdygKIJds%2BoVBaJnuupY2w%2FAAiEAg1Tq9wRC8G8A1TG83Pm3zezFVA0yCJY5192LaqDNbZ4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEt5zB5%2FcqfDjJUCrcA%2F1DJ32%2BipXkj6hP3zsvZLT%2B9jEpy92ar4xAXZF8%2FxSrgj2dK7cTL8NfIT%2FjfUyimrgaZ8kunfgvoYtQ2rU01W3Sj0QTNwWYAbNTZCX7vaVvjQ11mvCKBdKL99XqcCM%2BUlNaX1o2fsMsEsxz72NsaMpK8gg%2BfAluCw3aJ7tAU7jsfa%2Fgwxu1IIHfq%2BUsJjh1DQ3eKx6uxQNy%2FM9YENNGAz1h81TQT82B113vWwbDOJqhVwqeZMDt%2BAiiC8CQRNoeSXN9aEJZ7AW6J8EmtBG0ziz1PvgTOtCtHUY4O09DTjQWDYV%2Fz%2FVgLJRsTQspF3eQQfcvtjHXzh2yp7cXQ9kr95n3RR0sZCsFoiDe%2BZky0cvxLmamDWioi1Ck4dJjr0s4RVi6BJ5UYhc8dJi6%2Bh6yiL7%2FWlCRPnL02D0EYNku0RZjko%2FPD2tE9md8vLarVjQ%2B0dl4jbYwFaYS03Wm1APgECBobdTC2HvmsNo1Javtzq%2BYxqT1txXqNjV6TuDMpgO3sRWfka3lzUwlN2hoP7JggcOBgFhHju6nXxgcvHU4J3Yh1hzskBB4zEfl788h1WRsHtjKMfaytwbBla0iDGAtIuB06PnLTNuujgYkkxLUH3zryDAXtyWztlTV%2FZr8MMGgj8AGOqUBlQyhfLw848r2098ijwAqsvTL5nUDseTK0i8xMxIBmzLVKtkjOGf2pp%2F8%2FffHA8h88cqV65tK02%2FxGPEZ86cUU7WR%2BXEL%2FP2KXSj2sqCXFAP8VHM%2B6jBRFOwAPWMDetAiTBF0SG2AMGct%2FawVuJDo8gpWg3UBdETIeUjNTXADSg%2FG%2BM1qD59Z23bDlh3KGE9noQ4SbbviqEUeViFBwZ6oljI7sqxD&X-Amz-Signature=610130c50452843d2ebd29807083772a907ca803cc3d61869d7dc693a7f6159d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJKLNKY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEUAt14%2BtJ5WOSzXJZcSNdygKIJds%2BoVBaJnuupY2w%2FAAiEAg1Tq9wRC8G8A1TG83Pm3zezFVA0yCJY5192LaqDNbZ4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEt5zB5%2FcqfDjJUCrcA%2F1DJ32%2BipXkj6hP3zsvZLT%2B9jEpy92ar4xAXZF8%2FxSrgj2dK7cTL8NfIT%2FjfUyimrgaZ8kunfgvoYtQ2rU01W3Sj0QTNwWYAbNTZCX7vaVvjQ11mvCKBdKL99XqcCM%2BUlNaX1o2fsMsEsxz72NsaMpK8gg%2BfAluCw3aJ7tAU7jsfa%2Fgwxu1IIHfq%2BUsJjh1DQ3eKx6uxQNy%2FM9YENNGAz1h81TQT82B113vWwbDOJqhVwqeZMDt%2BAiiC8CQRNoeSXN9aEJZ7AW6J8EmtBG0ziz1PvgTOtCtHUY4O09DTjQWDYV%2Fz%2FVgLJRsTQspF3eQQfcvtjHXzh2yp7cXQ9kr95n3RR0sZCsFoiDe%2BZky0cvxLmamDWioi1Ck4dJjr0s4RVi6BJ5UYhc8dJi6%2Bh6yiL7%2FWlCRPnL02D0EYNku0RZjko%2FPD2tE9md8vLarVjQ%2B0dl4jbYwFaYS03Wm1APgECBobdTC2HvmsNo1Javtzq%2BYxqT1txXqNjV6TuDMpgO3sRWfka3lzUwlN2hoP7JggcOBgFhHju6nXxgcvHU4J3Yh1hzskBB4zEfl788h1WRsHtjKMfaytwbBla0iDGAtIuB06PnLTNuujgYkkxLUH3zryDAXtyWztlTV%2FZr8MMGgj8AGOqUBlQyhfLw848r2098ijwAqsvTL5nUDseTK0i8xMxIBmzLVKtkjOGf2pp%2F8%2FffHA8h88cqV65tK02%2FxGPEZ86cUU7WR%2BXEL%2FP2KXSj2sqCXFAP8VHM%2B6jBRFOwAPWMDetAiTBF0SG2AMGct%2FawVuJDo8gpWg3UBdETIeUjNTXADSg%2FG%2BM1qD59Z23bDlh3KGE9noQ4SbbviqEUeViFBwZ6oljI7sqxD&X-Amz-Signature=f021062d23b3cf5989e1d1b2c8cb1f7bb1b421011db272895e69e1d2de64de9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJKLNKY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEUAt14%2BtJ5WOSzXJZcSNdygKIJds%2BoVBaJnuupY2w%2FAAiEAg1Tq9wRC8G8A1TG83Pm3zezFVA0yCJY5192LaqDNbZ4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEt5zB5%2FcqfDjJUCrcA%2F1DJ32%2BipXkj6hP3zsvZLT%2B9jEpy92ar4xAXZF8%2FxSrgj2dK7cTL8NfIT%2FjfUyimrgaZ8kunfgvoYtQ2rU01W3Sj0QTNwWYAbNTZCX7vaVvjQ11mvCKBdKL99XqcCM%2BUlNaX1o2fsMsEsxz72NsaMpK8gg%2BfAluCw3aJ7tAU7jsfa%2Fgwxu1IIHfq%2BUsJjh1DQ3eKx6uxQNy%2FM9YENNGAz1h81TQT82B113vWwbDOJqhVwqeZMDt%2BAiiC8CQRNoeSXN9aEJZ7AW6J8EmtBG0ziz1PvgTOtCtHUY4O09DTjQWDYV%2Fz%2FVgLJRsTQspF3eQQfcvtjHXzh2yp7cXQ9kr95n3RR0sZCsFoiDe%2BZky0cvxLmamDWioi1Ck4dJjr0s4RVi6BJ5UYhc8dJi6%2Bh6yiL7%2FWlCRPnL02D0EYNku0RZjko%2FPD2tE9md8vLarVjQ%2B0dl4jbYwFaYS03Wm1APgECBobdTC2HvmsNo1Javtzq%2BYxqT1txXqNjV6TuDMpgO3sRWfka3lzUwlN2hoP7JggcOBgFhHju6nXxgcvHU4J3Yh1hzskBB4zEfl788h1WRsHtjKMfaytwbBla0iDGAtIuB06PnLTNuujgYkkxLUH3zryDAXtyWztlTV%2FZr8MMGgj8AGOqUBlQyhfLw848r2098ijwAqsvTL5nUDseTK0i8xMxIBmzLVKtkjOGf2pp%2F8%2FffHA8h88cqV65tK02%2FxGPEZ86cUU7WR%2BXEL%2FP2KXSj2sqCXFAP8VHM%2B6jBRFOwAPWMDetAiTBF0SG2AMGct%2FawVuJDo8gpWg3UBdETIeUjNTXADSg%2FG%2BM1qD59Z23bDlh3KGE9noQ4SbbviqEUeViFBwZ6oljI7sqxD&X-Amz-Signature=a3f08d91c43cb23dd96eeebe59a110d7e8e56af6203ab3006d7ebbf964568857&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CJKLNKY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEUAt14%2BtJ5WOSzXJZcSNdygKIJds%2BoVBaJnuupY2w%2FAAiEAg1Tq9wRC8G8A1TG83Pm3zezFVA0yCJY5192LaqDNbZ4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKEt5zB5%2FcqfDjJUCrcA%2F1DJ32%2BipXkj6hP3zsvZLT%2B9jEpy92ar4xAXZF8%2FxSrgj2dK7cTL8NfIT%2FjfUyimrgaZ8kunfgvoYtQ2rU01W3Sj0QTNwWYAbNTZCX7vaVvjQ11mvCKBdKL99XqcCM%2BUlNaX1o2fsMsEsxz72NsaMpK8gg%2BfAluCw3aJ7tAU7jsfa%2Fgwxu1IIHfq%2BUsJjh1DQ3eKx6uxQNy%2FM9YENNGAz1h81TQT82B113vWwbDOJqhVwqeZMDt%2BAiiC8CQRNoeSXN9aEJZ7AW6J8EmtBG0ziz1PvgTOtCtHUY4O09DTjQWDYV%2Fz%2FVgLJRsTQspF3eQQfcvtjHXzh2yp7cXQ9kr95n3RR0sZCsFoiDe%2BZky0cvxLmamDWioi1Ck4dJjr0s4RVi6BJ5UYhc8dJi6%2Bh6yiL7%2FWlCRPnL02D0EYNku0RZjko%2FPD2tE9md8vLarVjQ%2B0dl4jbYwFaYS03Wm1APgECBobdTC2HvmsNo1Javtzq%2BYxqT1txXqNjV6TuDMpgO3sRWfka3lzUwlN2hoP7JggcOBgFhHju6nXxgcvHU4J3Yh1hzskBB4zEfl788h1WRsHtjKMfaytwbBla0iDGAtIuB06PnLTNuujgYkkxLUH3zryDAXtyWztlTV%2FZr8MMGgj8AGOqUBlQyhfLw848r2098ijwAqsvTL5nUDseTK0i8xMxIBmzLVKtkjOGf2pp%2F8%2FffHA8h88cqV65tK02%2FxGPEZ86cUU7WR%2BXEL%2FP2KXSj2sqCXFAP8VHM%2B6jBRFOwAPWMDetAiTBF0SG2AMGct%2FawVuJDo8gpWg3UBdETIeUjNTXADSg%2FG%2BM1qD59Z23bDlh3KGE9noQ4SbbviqEUeViFBwZ6oljI7sqxD&X-Amz-Signature=a16e2782efc1079553a86c0a6febf3cfa2221809e662b8038e74ab5b88d3a046&X-Amz-SignedHeaders=host&x-id=GetObject)
