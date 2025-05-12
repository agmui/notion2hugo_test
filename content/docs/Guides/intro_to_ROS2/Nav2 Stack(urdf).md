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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTSQXJP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnAc1XjmZwlcHCe5ZMOkquHiN0maVXz0kIX5UZQGfgegIhAOY2vCD%2F8%2FeCIetLXebAm0dYgRB0pH6AXA726LKf5zlaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4bgnMOHOfRZEuHHIq3ANqKzF6jBq3SgY%2FGVrDlMz6fb1LkEbqpW9n%2FcWjpiNTgfU2uSckuJzi62aZghIhq9dZ3N%2BkG%2FXunyXc9m9%2F%2FHSdQLUNxyhjlJ7EL%2BV8uONIuUAnmAtMSe0P7aZTaPtNtKmRXjhgOQJy6gqOGxzi%2BF5Bk4jGCHNnkSeO36j8GjO9VU8Lf7tsHWg9ZAS4Y8hgZxBw7EsokLIaSL3xYk8BrSP9OqlPMI7EjKo3VTO8zoCct7mpFivUGEHs7AOKRmS5vDEvxmI36zD8TGV3p%2Fv2Hoe6XNM8z4Wsm%2FrICg6liNw7XksBxQFYQuJig%2F8btJPxIk9%2Bmv41fMj6a5jyUaP%2BlH6YzItyKzIiWjwByWRKd9pZRl%2FFbzKG8pY%2FXQV%2F6u%2F1SglpRKlGwGzUOFTs2lSQB0NZ4WT4%2FPqNY0vCCZKymCtwutF5o%2F7Vhs10heaWat85oe7QFASt5w8ShKqlpWOclURcM9TQXYyv9ateAomygSFscplaNFmH4HOOpanrRafRkYRiMFE62xWyAcyltTi5T1vlxauO7lHt43c8meO2W8O46gdXs46YlQ2xfx77M9c%2BG4u6jnRZbera%2B%2BC01ZFqv6AmLvAdU3Th5%2BQRh4dgrYCGjcBrXrnEysosAr9E%2BDCShIbBBjqkAb8Ym43I2DQMVDQgan36V3xcqBoZ%2BZkmzEAoWpR7hGBFNXHY5YLnFsTN93sotwjVZVt1f208OL2KGo75pWptGxV46ZfQgQqtimdgjbD4inehlXiB3rSl58NfYavgup%2BeDBJN1IfY2xtnR1izS7FCFThe9mB5nuraYrfBflSMCXZm4JxuZAS6bXW4sh5q1kc5u%2BSIGLBVKCRmEwMr7dGbxJqHD2nx&X-Amz-Signature=ec24d58910bb1dc0de8946dcb70ec0802b8ea3f2cfbb63acf221eff996bcdab8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTSQXJP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnAc1XjmZwlcHCe5ZMOkquHiN0maVXz0kIX5UZQGfgegIhAOY2vCD%2F8%2FeCIetLXebAm0dYgRB0pH6AXA726LKf5zlaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4bgnMOHOfRZEuHHIq3ANqKzF6jBq3SgY%2FGVrDlMz6fb1LkEbqpW9n%2FcWjpiNTgfU2uSckuJzi62aZghIhq9dZ3N%2BkG%2FXunyXc9m9%2F%2FHSdQLUNxyhjlJ7EL%2BV8uONIuUAnmAtMSe0P7aZTaPtNtKmRXjhgOQJy6gqOGxzi%2BF5Bk4jGCHNnkSeO36j8GjO9VU8Lf7tsHWg9ZAS4Y8hgZxBw7EsokLIaSL3xYk8BrSP9OqlPMI7EjKo3VTO8zoCct7mpFivUGEHs7AOKRmS5vDEvxmI36zD8TGV3p%2Fv2Hoe6XNM8z4Wsm%2FrICg6liNw7XksBxQFYQuJig%2F8btJPxIk9%2Bmv41fMj6a5jyUaP%2BlH6YzItyKzIiWjwByWRKd9pZRl%2FFbzKG8pY%2FXQV%2F6u%2F1SglpRKlGwGzUOFTs2lSQB0NZ4WT4%2FPqNY0vCCZKymCtwutF5o%2F7Vhs10heaWat85oe7QFASt5w8ShKqlpWOclURcM9TQXYyv9ateAomygSFscplaNFmH4HOOpanrRafRkYRiMFE62xWyAcyltTi5T1vlxauO7lHt43c8meO2W8O46gdXs46YlQ2xfx77M9c%2BG4u6jnRZbera%2B%2BC01ZFqv6AmLvAdU3Th5%2BQRh4dgrYCGjcBrXrnEysosAr9E%2BDCShIbBBjqkAb8Ym43I2DQMVDQgan36V3xcqBoZ%2BZkmzEAoWpR7hGBFNXHY5YLnFsTN93sotwjVZVt1f208OL2KGo75pWptGxV46ZfQgQqtimdgjbD4inehlXiB3rSl58NfYavgup%2BeDBJN1IfY2xtnR1izS7FCFThe9mB5nuraYrfBflSMCXZm4JxuZAS6bXW4sh5q1kc5u%2BSIGLBVKCRmEwMr7dGbxJqHD2nx&X-Amz-Signature=f3590f6cf12bb73436f5111a0449780e83aafb904ab32e6fa376a84553012909&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTSQXJP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnAc1XjmZwlcHCe5ZMOkquHiN0maVXz0kIX5UZQGfgegIhAOY2vCD%2F8%2FeCIetLXebAm0dYgRB0pH6AXA726LKf5zlaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4bgnMOHOfRZEuHHIq3ANqKzF6jBq3SgY%2FGVrDlMz6fb1LkEbqpW9n%2FcWjpiNTgfU2uSckuJzi62aZghIhq9dZ3N%2BkG%2FXunyXc9m9%2F%2FHSdQLUNxyhjlJ7EL%2BV8uONIuUAnmAtMSe0P7aZTaPtNtKmRXjhgOQJy6gqOGxzi%2BF5Bk4jGCHNnkSeO36j8GjO9VU8Lf7tsHWg9ZAS4Y8hgZxBw7EsokLIaSL3xYk8BrSP9OqlPMI7EjKo3VTO8zoCct7mpFivUGEHs7AOKRmS5vDEvxmI36zD8TGV3p%2Fv2Hoe6XNM8z4Wsm%2FrICg6liNw7XksBxQFYQuJig%2F8btJPxIk9%2Bmv41fMj6a5jyUaP%2BlH6YzItyKzIiWjwByWRKd9pZRl%2FFbzKG8pY%2FXQV%2F6u%2F1SglpRKlGwGzUOFTs2lSQB0NZ4WT4%2FPqNY0vCCZKymCtwutF5o%2F7Vhs10heaWat85oe7QFASt5w8ShKqlpWOclURcM9TQXYyv9ateAomygSFscplaNFmH4HOOpanrRafRkYRiMFE62xWyAcyltTi5T1vlxauO7lHt43c8meO2W8O46gdXs46YlQ2xfx77M9c%2BG4u6jnRZbera%2B%2BC01ZFqv6AmLvAdU3Th5%2BQRh4dgrYCGjcBrXrnEysosAr9E%2BDCShIbBBjqkAb8Ym43I2DQMVDQgan36V3xcqBoZ%2BZkmzEAoWpR7hGBFNXHY5YLnFsTN93sotwjVZVt1f208OL2KGo75pWptGxV46ZfQgQqtimdgjbD4inehlXiB3rSl58NfYavgup%2BeDBJN1IfY2xtnR1izS7FCFThe9mB5nuraYrfBflSMCXZm4JxuZAS6bXW4sh5q1kc5u%2BSIGLBVKCRmEwMr7dGbxJqHD2nx&X-Amz-Signature=ce3f2c4e58d68e8f7a30b67ea0eedaeb0ff573f997526b5f37a3f7acb350c620&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTSQXJP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnAc1XjmZwlcHCe5ZMOkquHiN0maVXz0kIX5UZQGfgegIhAOY2vCD%2F8%2FeCIetLXebAm0dYgRB0pH6AXA726LKf5zlaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4bgnMOHOfRZEuHHIq3ANqKzF6jBq3SgY%2FGVrDlMz6fb1LkEbqpW9n%2FcWjpiNTgfU2uSckuJzi62aZghIhq9dZ3N%2BkG%2FXunyXc9m9%2F%2FHSdQLUNxyhjlJ7EL%2BV8uONIuUAnmAtMSe0P7aZTaPtNtKmRXjhgOQJy6gqOGxzi%2BF5Bk4jGCHNnkSeO36j8GjO9VU8Lf7tsHWg9ZAS4Y8hgZxBw7EsokLIaSL3xYk8BrSP9OqlPMI7EjKo3VTO8zoCct7mpFivUGEHs7AOKRmS5vDEvxmI36zD8TGV3p%2Fv2Hoe6XNM8z4Wsm%2FrICg6liNw7XksBxQFYQuJig%2F8btJPxIk9%2Bmv41fMj6a5jyUaP%2BlH6YzItyKzIiWjwByWRKd9pZRl%2FFbzKG8pY%2FXQV%2F6u%2F1SglpRKlGwGzUOFTs2lSQB0NZ4WT4%2FPqNY0vCCZKymCtwutF5o%2F7Vhs10heaWat85oe7QFASt5w8ShKqlpWOclURcM9TQXYyv9ateAomygSFscplaNFmH4HOOpanrRafRkYRiMFE62xWyAcyltTi5T1vlxauO7lHt43c8meO2W8O46gdXs46YlQ2xfx77M9c%2BG4u6jnRZbera%2B%2BC01ZFqv6AmLvAdU3Th5%2BQRh4dgrYCGjcBrXrnEysosAr9E%2BDCShIbBBjqkAb8Ym43I2DQMVDQgan36V3xcqBoZ%2BZkmzEAoWpR7hGBFNXHY5YLnFsTN93sotwjVZVt1f208OL2KGo75pWptGxV46ZfQgQqtimdgjbD4inehlXiB3rSl58NfYavgup%2BeDBJN1IfY2xtnR1izS7FCFThe9mB5nuraYrfBflSMCXZm4JxuZAS6bXW4sh5q1kc5u%2BSIGLBVKCRmEwMr7dGbxJqHD2nx&X-Amz-Signature=f0d040d4e8fa5e5598bc62f8338bb6bb950c1fc0d2197a2e592d5d996490db32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTSQXJP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnAc1XjmZwlcHCe5ZMOkquHiN0maVXz0kIX5UZQGfgegIhAOY2vCD%2F8%2FeCIetLXebAm0dYgRB0pH6AXA726LKf5zlaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4bgnMOHOfRZEuHHIq3ANqKzF6jBq3SgY%2FGVrDlMz6fb1LkEbqpW9n%2FcWjpiNTgfU2uSckuJzi62aZghIhq9dZ3N%2BkG%2FXunyXc9m9%2F%2FHSdQLUNxyhjlJ7EL%2BV8uONIuUAnmAtMSe0P7aZTaPtNtKmRXjhgOQJy6gqOGxzi%2BF5Bk4jGCHNnkSeO36j8GjO9VU8Lf7tsHWg9ZAS4Y8hgZxBw7EsokLIaSL3xYk8BrSP9OqlPMI7EjKo3VTO8zoCct7mpFivUGEHs7AOKRmS5vDEvxmI36zD8TGV3p%2Fv2Hoe6XNM8z4Wsm%2FrICg6liNw7XksBxQFYQuJig%2F8btJPxIk9%2Bmv41fMj6a5jyUaP%2BlH6YzItyKzIiWjwByWRKd9pZRl%2FFbzKG8pY%2FXQV%2F6u%2F1SglpRKlGwGzUOFTs2lSQB0NZ4WT4%2FPqNY0vCCZKymCtwutF5o%2F7Vhs10heaWat85oe7QFASt5w8ShKqlpWOclURcM9TQXYyv9ateAomygSFscplaNFmH4HOOpanrRafRkYRiMFE62xWyAcyltTi5T1vlxauO7lHt43c8meO2W8O46gdXs46YlQ2xfx77M9c%2BG4u6jnRZbera%2B%2BC01ZFqv6AmLvAdU3Th5%2BQRh4dgrYCGjcBrXrnEysosAr9E%2BDCShIbBBjqkAb8Ym43I2DQMVDQgan36V3xcqBoZ%2BZkmzEAoWpR7hGBFNXHY5YLnFsTN93sotwjVZVt1f208OL2KGo75pWptGxV46ZfQgQqtimdgjbD4inehlXiB3rSl58NfYavgup%2BeDBJN1IfY2xtnR1izS7FCFThe9mB5nuraYrfBflSMCXZm4JxuZAS6bXW4sh5q1kc5u%2BSIGLBVKCRmEwMr7dGbxJqHD2nx&X-Amz-Signature=44300bd55ddde51e9e09eefe91390ca0d788607877d84f0df1a6ad8e853d81af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTSQXJP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnAc1XjmZwlcHCe5ZMOkquHiN0maVXz0kIX5UZQGfgegIhAOY2vCD%2F8%2FeCIetLXebAm0dYgRB0pH6AXA726LKf5zlaKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4bgnMOHOfRZEuHHIq3ANqKzF6jBq3SgY%2FGVrDlMz6fb1LkEbqpW9n%2FcWjpiNTgfU2uSckuJzi62aZghIhq9dZ3N%2BkG%2FXunyXc9m9%2F%2FHSdQLUNxyhjlJ7EL%2BV8uONIuUAnmAtMSe0P7aZTaPtNtKmRXjhgOQJy6gqOGxzi%2BF5Bk4jGCHNnkSeO36j8GjO9VU8Lf7tsHWg9ZAS4Y8hgZxBw7EsokLIaSL3xYk8BrSP9OqlPMI7EjKo3VTO8zoCct7mpFivUGEHs7AOKRmS5vDEvxmI36zD8TGV3p%2Fv2Hoe6XNM8z4Wsm%2FrICg6liNw7XksBxQFYQuJig%2F8btJPxIk9%2Bmv41fMj6a5jyUaP%2BlH6YzItyKzIiWjwByWRKd9pZRl%2FFbzKG8pY%2FXQV%2F6u%2F1SglpRKlGwGzUOFTs2lSQB0NZ4WT4%2FPqNY0vCCZKymCtwutF5o%2F7Vhs10heaWat85oe7QFASt5w8ShKqlpWOclURcM9TQXYyv9ateAomygSFscplaNFmH4HOOpanrRafRkYRiMFE62xWyAcyltTi5T1vlxauO7lHt43c8meO2W8O46gdXs46YlQ2xfx77M9c%2BG4u6jnRZbera%2B%2BC01ZFqv6AmLvAdU3Th5%2BQRh4dgrYCGjcBrXrnEysosAr9E%2BDCShIbBBjqkAb8Ym43I2DQMVDQgan36V3xcqBoZ%2BZkmzEAoWpR7hGBFNXHY5YLnFsTN93sotwjVZVt1f208OL2KGo75pWptGxV46ZfQgQqtimdgjbD4inehlXiB3rSl58NfYavgup%2BeDBJN1IfY2xtnR1izS7FCFThe9mB5nuraYrfBflSMCXZm4JxuZAS6bXW4sh5q1kc5u%2BSIGLBVKCRmEwMr7dGbxJqHD2nx&X-Amz-Signature=6c74220e57d8d7b0b489e91664ec41ced096358cd3a48261aa46314aaab764e7&X-Amz-SignedHeaders=host&x-id=GetObject)
