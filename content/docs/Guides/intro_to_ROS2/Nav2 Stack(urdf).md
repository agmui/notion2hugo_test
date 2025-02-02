---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVZ6SZI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGDduLm6OlrKZZelpFLwlYGtEWycAaAhUXKlPSNnZy%2FAIgfzABQtT9KY73mvvSD%2FHqBD77hrqweR9KgZaVo3FTRmAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOHIGA92YwOEX%2BZOSrcAx8nppNp5NxrzAN5SS%2FEqFVvAxlYb17xzS%2BrqnPPzj%2BBulrCuMywJfWP7dnRa3K0AgANycecf4wkwTGI%2FbIrqbFYMn0yFzg2Z3QNnFGsAg0eVYeZg3q9ezaaCP3zKmNUEyvYIVTxbCra4OItOXAbYxWvhh794TxPUEnWFy3lXi72WuS4m85lX0gWtDEFKjwf9aKXo%2FrmmN8Frp3ONJSMPGA0vyaR4m8vOzKNcBueMo%2B%2FDMG70SaBkXLG3k3PJLczCiCYG9RLmabcYf%2FL0nqPcafTapZQCRdefz3Ni3F5C2h5Y8gxGrkKXAi9puU7M6x5JGIEgcN0JDufp0zrFteWpSxpsntC5Vp21wCKicrcq%2FuGSlFKAOgMc9T%2Fob4Pb6WXx3nDW1nokp9Vm6tsNgx80SwDm%2BV8%2F0kQMHT%2Biyrk%2Fwo6IfxV%2By8YcBHKzX%2FIbHH4eEcdcgKLUdvpzUGhhLQQNg%2BXCucPPS07JcL5n3XWngvIdiluooJdBavEFVadrV4ye8Ftz%2BTXR%2FJi9nbaS3VBoriL9rZqeb9JMYx%2BCVh7Cd%2BNtruTEU%2B8BHtwfCDS5R7CS5UkfHrsaV6g%2BS17KhWuwGLCo4d2ZS%2FFoYwK0swjEwsV%2BRMy5ChYQ6Ku9L72MM7j%2B7wGOqUBPg3CV%2B8CqT190UW%2BJB9OX52V07FP9OYLTjZjFMKpA46MmbF8zt%2BmOWbcz1Gm6du2S2swSpHL9SRp3WBPwVAHNhES45loi1RK%2F3hZXQXRzrk8GdoI3OP5MH7enldIHnyKkBIKOBoOBjvq91HosDDIbLBmK9wBexdDh8vMeFDyuXuyKSpuGWU2vvjJM4Niz6vkoq5psIOzy8gShsttj7EVTRJOgjxB&X-Amz-Signature=5fcfa616b18438956760d9e8bcb3899404c55594899346796d86737d1f96a232&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVZ6SZI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGDduLm6OlrKZZelpFLwlYGtEWycAaAhUXKlPSNnZy%2FAIgfzABQtT9KY73mvvSD%2FHqBD77hrqweR9KgZaVo3FTRmAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOHIGA92YwOEX%2BZOSrcAx8nppNp5NxrzAN5SS%2FEqFVvAxlYb17xzS%2BrqnPPzj%2BBulrCuMywJfWP7dnRa3K0AgANycecf4wkwTGI%2FbIrqbFYMn0yFzg2Z3QNnFGsAg0eVYeZg3q9ezaaCP3zKmNUEyvYIVTxbCra4OItOXAbYxWvhh794TxPUEnWFy3lXi72WuS4m85lX0gWtDEFKjwf9aKXo%2FrmmN8Frp3ONJSMPGA0vyaR4m8vOzKNcBueMo%2B%2FDMG70SaBkXLG3k3PJLczCiCYG9RLmabcYf%2FL0nqPcafTapZQCRdefz3Ni3F5C2h5Y8gxGrkKXAi9puU7M6x5JGIEgcN0JDufp0zrFteWpSxpsntC5Vp21wCKicrcq%2FuGSlFKAOgMc9T%2Fob4Pb6WXx3nDW1nokp9Vm6tsNgx80SwDm%2BV8%2F0kQMHT%2Biyrk%2Fwo6IfxV%2By8YcBHKzX%2FIbHH4eEcdcgKLUdvpzUGhhLQQNg%2BXCucPPS07JcL5n3XWngvIdiluooJdBavEFVadrV4ye8Ftz%2BTXR%2FJi9nbaS3VBoriL9rZqeb9JMYx%2BCVh7Cd%2BNtruTEU%2B8BHtwfCDS5R7CS5UkfHrsaV6g%2BS17KhWuwGLCo4d2ZS%2FFoYwK0swjEwsV%2BRMy5ChYQ6Ku9L72MM7j%2B7wGOqUBPg3CV%2B8CqT190UW%2BJB9OX52V07FP9OYLTjZjFMKpA46MmbF8zt%2BmOWbcz1Gm6du2S2swSpHL9SRp3WBPwVAHNhES45loi1RK%2F3hZXQXRzrk8GdoI3OP5MH7enldIHnyKkBIKOBoOBjvq91HosDDIbLBmK9wBexdDh8vMeFDyuXuyKSpuGWU2vvjJM4Niz6vkoq5psIOzy8gShsttj7EVTRJOgjxB&X-Amz-Signature=daa0724ab3ef9412272e5ec6ae7adbf4e288e8f94410eb8b29f46d0c0f94b4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVZ6SZI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGDduLm6OlrKZZelpFLwlYGtEWycAaAhUXKlPSNnZy%2FAIgfzABQtT9KY73mvvSD%2FHqBD77hrqweR9KgZaVo3FTRmAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOHIGA92YwOEX%2BZOSrcAx8nppNp5NxrzAN5SS%2FEqFVvAxlYb17xzS%2BrqnPPzj%2BBulrCuMywJfWP7dnRa3K0AgANycecf4wkwTGI%2FbIrqbFYMn0yFzg2Z3QNnFGsAg0eVYeZg3q9ezaaCP3zKmNUEyvYIVTxbCra4OItOXAbYxWvhh794TxPUEnWFy3lXi72WuS4m85lX0gWtDEFKjwf9aKXo%2FrmmN8Frp3ONJSMPGA0vyaR4m8vOzKNcBueMo%2B%2FDMG70SaBkXLG3k3PJLczCiCYG9RLmabcYf%2FL0nqPcafTapZQCRdefz3Ni3F5C2h5Y8gxGrkKXAi9puU7M6x5JGIEgcN0JDufp0zrFteWpSxpsntC5Vp21wCKicrcq%2FuGSlFKAOgMc9T%2Fob4Pb6WXx3nDW1nokp9Vm6tsNgx80SwDm%2BV8%2F0kQMHT%2Biyrk%2Fwo6IfxV%2By8YcBHKzX%2FIbHH4eEcdcgKLUdvpzUGhhLQQNg%2BXCucPPS07JcL5n3XWngvIdiluooJdBavEFVadrV4ye8Ftz%2BTXR%2FJi9nbaS3VBoriL9rZqeb9JMYx%2BCVh7Cd%2BNtruTEU%2B8BHtwfCDS5R7CS5UkfHrsaV6g%2BS17KhWuwGLCo4d2ZS%2FFoYwK0swjEwsV%2BRMy5ChYQ6Ku9L72MM7j%2B7wGOqUBPg3CV%2B8CqT190UW%2BJB9OX52V07FP9OYLTjZjFMKpA46MmbF8zt%2BmOWbcz1Gm6du2S2swSpHL9SRp3WBPwVAHNhES45loi1RK%2F3hZXQXRzrk8GdoI3OP5MH7enldIHnyKkBIKOBoOBjvq91HosDDIbLBmK9wBexdDh8vMeFDyuXuyKSpuGWU2vvjJM4Niz6vkoq5psIOzy8gShsttj7EVTRJOgjxB&X-Amz-Signature=4cff633df5cc61499a380772c8a8a82ada946176697c1ed596fa9c2461d6b2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVZ6SZI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGDduLm6OlrKZZelpFLwlYGtEWycAaAhUXKlPSNnZy%2FAIgfzABQtT9KY73mvvSD%2FHqBD77hrqweR9KgZaVo3FTRmAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOHIGA92YwOEX%2BZOSrcAx8nppNp5NxrzAN5SS%2FEqFVvAxlYb17xzS%2BrqnPPzj%2BBulrCuMywJfWP7dnRa3K0AgANycecf4wkwTGI%2FbIrqbFYMn0yFzg2Z3QNnFGsAg0eVYeZg3q9ezaaCP3zKmNUEyvYIVTxbCra4OItOXAbYxWvhh794TxPUEnWFy3lXi72WuS4m85lX0gWtDEFKjwf9aKXo%2FrmmN8Frp3ONJSMPGA0vyaR4m8vOzKNcBueMo%2B%2FDMG70SaBkXLG3k3PJLczCiCYG9RLmabcYf%2FL0nqPcafTapZQCRdefz3Ni3F5C2h5Y8gxGrkKXAi9puU7M6x5JGIEgcN0JDufp0zrFteWpSxpsntC5Vp21wCKicrcq%2FuGSlFKAOgMc9T%2Fob4Pb6WXx3nDW1nokp9Vm6tsNgx80SwDm%2BV8%2F0kQMHT%2Biyrk%2Fwo6IfxV%2By8YcBHKzX%2FIbHH4eEcdcgKLUdvpzUGhhLQQNg%2BXCucPPS07JcL5n3XWngvIdiluooJdBavEFVadrV4ye8Ftz%2BTXR%2FJi9nbaS3VBoriL9rZqeb9JMYx%2BCVh7Cd%2BNtruTEU%2B8BHtwfCDS5R7CS5UkfHrsaV6g%2BS17KhWuwGLCo4d2ZS%2FFoYwK0swjEwsV%2BRMy5ChYQ6Ku9L72MM7j%2B7wGOqUBPg3CV%2B8CqT190UW%2BJB9OX52V07FP9OYLTjZjFMKpA46MmbF8zt%2BmOWbcz1Gm6du2S2swSpHL9SRp3WBPwVAHNhES45loi1RK%2F3hZXQXRzrk8GdoI3OP5MH7enldIHnyKkBIKOBoOBjvq91HosDDIbLBmK9wBexdDh8vMeFDyuXuyKSpuGWU2vvjJM4Niz6vkoq5psIOzy8gShsttj7EVTRJOgjxB&X-Amz-Signature=d011774e95f40a13426b69f0b60d20e060cec1efabc6c81b251bde0250811271&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVZ6SZI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGDduLm6OlrKZZelpFLwlYGtEWycAaAhUXKlPSNnZy%2FAIgfzABQtT9KY73mvvSD%2FHqBD77hrqweR9KgZaVo3FTRmAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOHIGA92YwOEX%2BZOSrcAx8nppNp5NxrzAN5SS%2FEqFVvAxlYb17xzS%2BrqnPPzj%2BBulrCuMywJfWP7dnRa3K0AgANycecf4wkwTGI%2FbIrqbFYMn0yFzg2Z3QNnFGsAg0eVYeZg3q9ezaaCP3zKmNUEyvYIVTxbCra4OItOXAbYxWvhh794TxPUEnWFy3lXi72WuS4m85lX0gWtDEFKjwf9aKXo%2FrmmN8Frp3ONJSMPGA0vyaR4m8vOzKNcBueMo%2B%2FDMG70SaBkXLG3k3PJLczCiCYG9RLmabcYf%2FL0nqPcafTapZQCRdefz3Ni3F5C2h5Y8gxGrkKXAi9puU7M6x5JGIEgcN0JDufp0zrFteWpSxpsntC5Vp21wCKicrcq%2FuGSlFKAOgMc9T%2Fob4Pb6WXx3nDW1nokp9Vm6tsNgx80SwDm%2BV8%2F0kQMHT%2Biyrk%2Fwo6IfxV%2By8YcBHKzX%2FIbHH4eEcdcgKLUdvpzUGhhLQQNg%2BXCucPPS07JcL5n3XWngvIdiluooJdBavEFVadrV4ye8Ftz%2BTXR%2FJi9nbaS3VBoriL9rZqeb9JMYx%2BCVh7Cd%2BNtruTEU%2B8BHtwfCDS5R7CS5UkfHrsaV6g%2BS17KhWuwGLCo4d2ZS%2FFoYwK0swjEwsV%2BRMy5ChYQ6Ku9L72MM7j%2B7wGOqUBPg3CV%2B8CqT190UW%2BJB9OX52V07FP9OYLTjZjFMKpA46MmbF8zt%2BmOWbcz1Gm6du2S2swSpHL9SRp3WBPwVAHNhES45loi1RK%2F3hZXQXRzrk8GdoI3OP5MH7enldIHnyKkBIKOBoOBjvq91HosDDIbLBmK9wBexdDh8vMeFDyuXuyKSpuGWU2vvjJM4Niz6vkoq5psIOzy8gShsttj7EVTRJOgjxB&X-Amz-Signature=cbca5a719ae19308542b2805193bc433b92f4106930625964c234b6ae6b6ff94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVZ6SZI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGDduLm6OlrKZZelpFLwlYGtEWycAaAhUXKlPSNnZy%2FAIgfzABQtT9KY73mvvSD%2FHqBD77hrqweR9KgZaVo3FTRmAqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOHIGA92YwOEX%2BZOSrcAx8nppNp5NxrzAN5SS%2FEqFVvAxlYb17xzS%2BrqnPPzj%2BBulrCuMywJfWP7dnRa3K0AgANycecf4wkwTGI%2FbIrqbFYMn0yFzg2Z3QNnFGsAg0eVYeZg3q9ezaaCP3zKmNUEyvYIVTxbCra4OItOXAbYxWvhh794TxPUEnWFy3lXi72WuS4m85lX0gWtDEFKjwf9aKXo%2FrmmN8Frp3ONJSMPGA0vyaR4m8vOzKNcBueMo%2B%2FDMG70SaBkXLG3k3PJLczCiCYG9RLmabcYf%2FL0nqPcafTapZQCRdefz3Ni3F5C2h5Y8gxGrkKXAi9puU7M6x5JGIEgcN0JDufp0zrFteWpSxpsntC5Vp21wCKicrcq%2FuGSlFKAOgMc9T%2Fob4Pb6WXx3nDW1nokp9Vm6tsNgx80SwDm%2BV8%2F0kQMHT%2Biyrk%2Fwo6IfxV%2By8YcBHKzX%2FIbHH4eEcdcgKLUdvpzUGhhLQQNg%2BXCucPPS07JcL5n3XWngvIdiluooJdBavEFVadrV4ye8Ftz%2BTXR%2FJi9nbaS3VBoriL9rZqeb9JMYx%2BCVh7Cd%2BNtruTEU%2B8BHtwfCDS5R7CS5UkfHrsaV6g%2BS17KhWuwGLCo4d2ZS%2FFoYwK0swjEwsV%2BRMy5ChYQ6Ku9L72MM7j%2B7wGOqUBPg3CV%2B8CqT190UW%2BJB9OX52V07FP9OYLTjZjFMKpA46MmbF8zt%2BmOWbcz1Gm6du2S2swSpHL9SRp3WBPwVAHNhES45loi1RK%2F3hZXQXRzrk8GdoI3OP5MH7enldIHnyKkBIKOBoOBjvq91HosDDIbLBmK9wBexdDh8vMeFDyuXuyKSpuGWU2vvjJM4Niz6vkoq5psIOzy8gShsttj7EVTRJOgjxB&X-Amz-Signature=7dc56f87ca2727a3105d82680d274ac2f05ada785ad09c87add45b56c73528ce&X-Amz-SignedHeaders=host&x-id=GetObject)
