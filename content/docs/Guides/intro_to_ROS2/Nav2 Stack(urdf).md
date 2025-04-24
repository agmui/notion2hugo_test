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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLVUIUT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBIp3HBXtp4quLXJUxazbzIqEShGECHCUFLPvXLaAgC3AiBgXzDwvoNNwCP5Tkgi14b7ZtBEaIew82wpRtwCur8hLyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMF9XtJ4NKD2XuSoRyKtwDrlcMNuv30d7QterDvMR9jpE8IiS%2FQvkHiLxsdJ8FcIsyTLsXB5Se9JU7RVVQoKnmxjjTptbXeQT3JVO4s2iORLi5mSKJIu7X0KklHxC9m4JZj1%2FTQR4hqBrUA7CPaa8ZtdVKp1bxteXE7H0htomaOp%2BobgtZrbYquisoaSDpsI6rbbgC%2B8559OEHapOTewXVvCEU%2BjUvIfJTYhHgaxVR2BYa6PO66hd2mdxN2b2VuPPrDzMgt9uZFCAtILzKChTeUYxywY3Ec3DukP7nWs4BhGOksXGMjad4QlU7NoIkLzDBatD4E9PH%2B%2Fjj%2Fq5LA0DLGat6ZIZWj1br6aUBgppuJcKQaHF4tgnlCS5NlQur9AuVnR6Z414KPyPvUHxr1zkvlSqwuinvqg09Tpeq36Ag0S6JXoM%2Ft9obCd%2FakgTSO9nx9jvClmtU%2BhhY1BiMB7JGc%2B6G7y2ZyLTMJOrsCfYERXDoz0gX%2FSvZAoJjGKM%2FFFzkfGUsIDw3%2FYNUvTI9EQNG%2FZiRpV3ADasRYcesePL5cO2w8WSdqvTIvhAdU58SZJqBGwuAFpjVAh6MYYXx92AQY4mKLGg1UhmGsEaNV%2BmOyq%2F64W6tvQkTOXi0aW61x%2FT3XaYtKQYwYkzgA6own4SowAY6pgGqNY0q0I2knMoUhvpNffDGx2L3Yn1XFlRMr57dHoUJEc4%2Blrcd33XrYSAHyLIrifQV8Q4cthkjBhbBwBg0b4XoL%2BfqgaK8SM7yIVURnyD5CyBb3377Biil8hBj7c3unXK2iIC6yoWS%2BT0Cir4b1lR8uk22nUmZ2u%2B0Cdi2KoHJGx9AVlrzDgwmh97Y7uFIsM4NWDtcNVQqnT1%2BWN0wwCU9zUwr%2BSqS&X-Amz-Signature=bcf990905f7b04ad386fb287947feec5fa266972bd279806ce7b16b1103b85fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLVUIUT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBIp3HBXtp4quLXJUxazbzIqEShGECHCUFLPvXLaAgC3AiBgXzDwvoNNwCP5Tkgi14b7ZtBEaIew82wpRtwCur8hLyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMF9XtJ4NKD2XuSoRyKtwDrlcMNuv30d7QterDvMR9jpE8IiS%2FQvkHiLxsdJ8FcIsyTLsXB5Se9JU7RVVQoKnmxjjTptbXeQT3JVO4s2iORLi5mSKJIu7X0KklHxC9m4JZj1%2FTQR4hqBrUA7CPaa8ZtdVKp1bxteXE7H0htomaOp%2BobgtZrbYquisoaSDpsI6rbbgC%2B8559OEHapOTewXVvCEU%2BjUvIfJTYhHgaxVR2BYa6PO66hd2mdxN2b2VuPPrDzMgt9uZFCAtILzKChTeUYxywY3Ec3DukP7nWs4BhGOksXGMjad4QlU7NoIkLzDBatD4E9PH%2B%2Fjj%2Fq5LA0DLGat6ZIZWj1br6aUBgppuJcKQaHF4tgnlCS5NlQur9AuVnR6Z414KPyPvUHxr1zkvlSqwuinvqg09Tpeq36Ag0S6JXoM%2Ft9obCd%2FakgTSO9nx9jvClmtU%2BhhY1BiMB7JGc%2B6G7y2ZyLTMJOrsCfYERXDoz0gX%2FSvZAoJjGKM%2FFFzkfGUsIDw3%2FYNUvTI9EQNG%2FZiRpV3ADasRYcesePL5cO2w8WSdqvTIvhAdU58SZJqBGwuAFpjVAh6MYYXx92AQY4mKLGg1UhmGsEaNV%2BmOyq%2F64W6tvQkTOXi0aW61x%2FT3XaYtKQYwYkzgA6own4SowAY6pgGqNY0q0I2knMoUhvpNffDGx2L3Yn1XFlRMr57dHoUJEc4%2Blrcd33XrYSAHyLIrifQV8Q4cthkjBhbBwBg0b4XoL%2BfqgaK8SM7yIVURnyD5CyBb3377Biil8hBj7c3unXK2iIC6yoWS%2BT0Cir4b1lR8uk22nUmZ2u%2B0Cdi2KoHJGx9AVlrzDgwmh97Y7uFIsM4NWDtcNVQqnT1%2BWN0wwCU9zUwr%2BSqS&X-Amz-Signature=0a73e08e4f98ecad185e20976c0896bfe75d916af3d95532e86660e2abc2c809&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLVUIUT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBIp3HBXtp4quLXJUxazbzIqEShGECHCUFLPvXLaAgC3AiBgXzDwvoNNwCP5Tkgi14b7ZtBEaIew82wpRtwCur8hLyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMF9XtJ4NKD2XuSoRyKtwDrlcMNuv30d7QterDvMR9jpE8IiS%2FQvkHiLxsdJ8FcIsyTLsXB5Se9JU7RVVQoKnmxjjTptbXeQT3JVO4s2iORLi5mSKJIu7X0KklHxC9m4JZj1%2FTQR4hqBrUA7CPaa8ZtdVKp1bxteXE7H0htomaOp%2BobgtZrbYquisoaSDpsI6rbbgC%2B8559OEHapOTewXVvCEU%2BjUvIfJTYhHgaxVR2BYa6PO66hd2mdxN2b2VuPPrDzMgt9uZFCAtILzKChTeUYxywY3Ec3DukP7nWs4BhGOksXGMjad4QlU7NoIkLzDBatD4E9PH%2B%2Fjj%2Fq5LA0DLGat6ZIZWj1br6aUBgppuJcKQaHF4tgnlCS5NlQur9AuVnR6Z414KPyPvUHxr1zkvlSqwuinvqg09Tpeq36Ag0S6JXoM%2Ft9obCd%2FakgTSO9nx9jvClmtU%2BhhY1BiMB7JGc%2B6G7y2ZyLTMJOrsCfYERXDoz0gX%2FSvZAoJjGKM%2FFFzkfGUsIDw3%2FYNUvTI9EQNG%2FZiRpV3ADasRYcesePL5cO2w8WSdqvTIvhAdU58SZJqBGwuAFpjVAh6MYYXx92AQY4mKLGg1UhmGsEaNV%2BmOyq%2F64W6tvQkTOXi0aW61x%2FT3XaYtKQYwYkzgA6own4SowAY6pgGqNY0q0I2knMoUhvpNffDGx2L3Yn1XFlRMr57dHoUJEc4%2Blrcd33XrYSAHyLIrifQV8Q4cthkjBhbBwBg0b4XoL%2BfqgaK8SM7yIVURnyD5CyBb3377Biil8hBj7c3unXK2iIC6yoWS%2BT0Cir4b1lR8uk22nUmZ2u%2B0Cdi2KoHJGx9AVlrzDgwmh97Y7uFIsM4NWDtcNVQqnT1%2BWN0wwCU9zUwr%2BSqS&X-Amz-Signature=77ba88ed2639d1406de9c90d6e660981026554aa372946c9295c481cf06d3512&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLVUIUT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBIp3HBXtp4quLXJUxazbzIqEShGECHCUFLPvXLaAgC3AiBgXzDwvoNNwCP5Tkgi14b7ZtBEaIew82wpRtwCur8hLyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMF9XtJ4NKD2XuSoRyKtwDrlcMNuv30d7QterDvMR9jpE8IiS%2FQvkHiLxsdJ8FcIsyTLsXB5Se9JU7RVVQoKnmxjjTptbXeQT3JVO4s2iORLi5mSKJIu7X0KklHxC9m4JZj1%2FTQR4hqBrUA7CPaa8ZtdVKp1bxteXE7H0htomaOp%2BobgtZrbYquisoaSDpsI6rbbgC%2B8559OEHapOTewXVvCEU%2BjUvIfJTYhHgaxVR2BYa6PO66hd2mdxN2b2VuPPrDzMgt9uZFCAtILzKChTeUYxywY3Ec3DukP7nWs4BhGOksXGMjad4QlU7NoIkLzDBatD4E9PH%2B%2Fjj%2Fq5LA0DLGat6ZIZWj1br6aUBgppuJcKQaHF4tgnlCS5NlQur9AuVnR6Z414KPyPvUHxr1zkvlSqwuinvqg09Tpeq36Ag0S6JXoM%2Ft9obCd%2FakgTSO9nx9jvClmtU%2BhhY1BiMB7JGc%2B6G7y2ZyLTMJOrsCfYERXDoz0gX%2FSvZAoJjGKM%2FFFzkfGUsIDw3%2FYNUvTI9EQNG%2FZiRpV3ADasRYcesePL5cO2w8WSdqvTIvhAdU58SZJqBGwuAFpjVAh6MYYXx92AQY4mKLGg1UhmGsEaNV%2BmOyq%2F64W6tvQkTOXi0aW61x%2FT3XaYtKQYwYkzgA6own4SowAY6pgGqNY0q0I2knMoUhvpNffDGx2L3Yn1XFlRMr57dHoUJEc4%2Blrcd33XrYSAHyLIrifQV8Q4cthkjBhbBwBg0b4XoL%2BfqgaK8SM7yIVURnyD5CyBb3377Biil8hBj7c3unXK2iIC6yoWS%2BT0Cir4b1lR8uk22nUmZ2u%2B0Cdi2KoHJGx9AVlrzDgwmh97Y7uFIsM4NWDtcNVQqnT1%2BWN0wwCU9zUwr%2BSqS&X-Amz-Signature=4f97b9ed7fe4ec66935e88ff3813ff1d4a0dd9b47d4213745f4c2e9268005bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLVUIUT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBIp3HBXtp4quLXJUxazbzIqEShGECHCUFLPvXLaAgC3AiBgXzDwvoNNwCP5Tkgi14b7ZtBEaIew82wpRtwCur8hLyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMF9XtJ4NKD2XuSoRyKtwDrlcMNuv30d7QterDvMR9jpE8IiS%2FQvkHiLxsdJ8FcIsyTLsXB5Se9JU7RVVQoKnmxjjTptbXeQT3JVO4s2iORLi5mSKJIu7X0KklHxC9m4JZj1%2FTQR4hqBrUA7CPaa8ZtdVKp1bxteXE7H0htomaOp%2BobgtZrbYquisoaSDpsI6rbbgC%2B8559OEHapOTewXVvCEU%2BjUvIfJTYhHgaxVR2BYa6PO66hd2mdxN2b2VuPPrDzMgt9uZFCAtILzKChTeUYxywY3Ec3DukP7nWs4BhGOksXGMjad4QlU7NoIkLzDBatD4E9PH%2B%2Fjj%2Fq5LA0DLGat6ZIZWj1br6aUBgppuJcKQaHF4tgnlCS5NlQur9AuVnR6Z414KPyPvUHxr1zkvlSqwuinvqg09Tpeq36Ag0S6JXoM%2Ft9obCd%2FakgTSO9nx9jvClmtU%2BhhY1BiMB7JGc%2B6G7y2ZyLTMJOrsCfYERXDoz0gX%2FSvZAoJjGKM%2FFFzkfGUsIDw3%2FYNUvTI9EQNG%2FZiRpV3ADasRYcesePL5cO2w8WSdqvTIvhAdU58SZJqBGwuAFpjVAh6MYYXx92AQY4mKLGg1UhmGsEaNV%2BmOyq%2F64W6tvQkTOXi0aW61x%2FT3XaYtKQYwYkzgA6own4SowAY6pgGqNY0q0I2knMoUhvpNffDGx2L3Yn1XFlRMr57dHoUJEc4%2Blrcd33XrYSAHyLIrifQV8Q4cthkjBhbBwBg0b4XoL%2BfqgaK8SM7yIVURnyD5CyBb3377Biil8hBj7c3unXK2iIC6yoWS%2BT0Cir4b1lR8uk22nUmZ2u%2B0Cdi2KoHJGx9AVlrzDgwmh97Y7uFIsM4NWDtcNVQqnT1%2BWN0wwCU9zUwr%2BSqS&X-Amz-Signature=743c5b89116989f449b1965d867099e039071cda307a6a4f07a25da959e81d81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLVUIUT%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBIp3HBXtp4quLXJUxazbzIqEShGECHCUFLPvXLaAgC3AiBgXzDwvoNNwCP5Tkgi14b7ZtBEaIew82wpRtwCur8hLyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMF9XtJ4NKD2XuSoRyKtwDrlcMNuv30d7QterDvMR9jpE8IiS%2FQvkHiLxsdJ8FcIsyTLsXB5Se9JU7RVVQoKnmxjjTptbXeQT3JVO4s2iORLi5mSKJIu7X0KklHxC9m4JZj1%2FTQR4hqBrUA7CPaa8ZtdVKp1bxteXE7H0htomaOp%2BobgtZrbYquisoaSDpsI6rbbgC%2B8559OEHapOTewXVvCEU%2BjUvIfJTYhHgaxVR2BYa6PO66hd2mdxN2b2VuPPrDzMgt9uZFCAtILzKChTeUYxywY3Ec3DukP7nWs4BhGOksXGMjad4QlU7NoIkLzDBatD4E9PH%2B%2Fjj%2Fq5LA0DLGat6ZIZWj1br6aUBgppuJcKQaHF4tgnlCS5NlQur9AuVnR6Z414KPyPvUHxr1zkvlSqwuinvqg09Tpeq36Ag0S6JXoM%2Ft9obCd%2FakgTSO9nx9jvClmtU%2BhhY1BiMB7JGc%2B6G7y2ZyLTMJOrsCfYERXDoz0gX%2FSvZAoJjGKM%2FFFzkfGUsIDw3%2FYNUvTI9EQNG%2FZiRpV3ADasRYcesePL5cO2w8WSdqvTIvhAdU58SZJqBGwuAFpjVAh6MYYXx92AQY4mKLGg1UhmGsEaNV%2BmOyq%2F64W6tvQkTOXi0aW61x%2FT3XaYtKQYwYkzgA6own4SowAY6pgGqNY0q0I2knMoUhvpNffDGx2L3Yn1XFlRMr57dHoUJEc4%2Blrcd33XrYSAHyLIrifQV8Q4cthkjBhbBwBg0b4XoL%2BfqgaK8SM7yIVURnyD5CyBb3377Biil8hBj7c3unXK2iIC6yoWS%2BT0Cir4b1lR8uk22nUmZ2u%2B0Cdi2KoHJGx9AVlrzDgwmh97Y7uFIsM4NWDtcNVQqnT1%2BWN0wwCU9zUwr%2BSqS&X-Amz-Signature=162535d82d8171911ea0cbe1c98b44deee8071035c0a6bb86063a8a61c89598f&X-Amz-SignedHeaders=host&x-id=GetObject)
