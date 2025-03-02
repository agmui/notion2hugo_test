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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDB6FRP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlCy7AVjh8inWhpcpkIexS%2Bv2iIIZKQV%2FqSXwpFmO2pAiEAuEwimiXhYgMev0iSaxb7Q%2FSSuix%2BMVraKVeQT4CTl9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyWJOZjN1EVHjeewCrcAxJ2sxO4Hj5LDyeMdKg7gSyTdWStkxUa5R9edhO5ZNALu3YNrWq2g4wxBZuGKz9%2FHb%2FufJiQHYxE9kzaENNpdfh4kAtqF13JNQpPIlzUWArhD8WbygJ0jgqEU4lVvxV50g4jiRTjNtkM%2BSmTtY5u7l%2BULIuiy2Dz1oCaoWzpIU%2Frs5zIDjKwkWliqgoNGWgcY7nV5fQMnGMUqGjOO8%2BdP%2FgcDm%2BDCknTqtM3LOJhMeLDJWZjrH0UjqeKpRIjt97OG14YmoRcPpzOku6MMiM%2BD%2FoaVwzwkTqBvD6BXXbnEVNaEaf6fQdOqqYFv1%2BwhtwcOYTb6vGITR5ny46v5mndZetZ1zFlu5kAR6v%2BmAxGMdRaMiFy0F6tiC7zPvLbTXX8eDOCjW5muCjBXfazCYu3yNaaheuq2ttIFWeDs4XDLCD8ymM8DlousQhQmhA49Z%2Fmgs%2B%2BxwPK0Ljt03LPyeMyFVH%2FJwxpQEY3fpCZhnd5hRCfPChFXfWPD7ZJlVTZ%2BrssUMySGePNIOeRSRy4fMz8znQpxwo%2BP0pOOK6WWWvLaAPeJPlP0AdE7l9WpLt9kzqWK72TSuCYriMbFQrOszxpO1EIeoZt7jCYURYjp7QsP3yrHBNrN5%2BJOdP0CCIpMPH3kL4GOqUBByKxlTLvFYQ5jlmeiqZfFq3pvcM49ITDpc8IFE14ABgeVjaaoqSwVRLXtTfjNTJshljI%2Bh8ruYD2nRyfsqig3ohN0dUmuU7ZLkwFXitIDm%2B77%2FvmUAOpTb1yOW%2FO6FR9HGH35GRrc1HiqGx%2FOreP8BhwcvwHpPXMSbha7n4kr0c9ROpXVumQpTbgJQsJC60WxYeVnj372LgDensO2dePn2VnoRDF&X-Amz-Signature=8e5cf6c883c16c1971b4f1ded5f0a91b8116cc800ebb1d2ba70e4557af52d64a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDB6FRP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlCy7AVjh8inWhpcpkIexS%2Bv2iIIZKQV%2FqSXwpFmO2pAiEAuEwimiXhYgMev0iSaxb7Q%2FSSuix%2BMVraKVeQT4CTl9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyWJOZjN1EVHjeewCrcAxJ2sxO4Hj5LDyeMdKg7gSyTdWStkxUa5R9edhO5ZNALu3YNrWq2g4wxBZuGKz9%2FHb%2FufJiQHYxE9kzaENNpdfh4kAtqF13JNQpPIlzUWArhD8WbygJ0jgqEU4lVvxV50g4jiRTjNtkM%2BSmTtY5u7l%2BULIuiy2Dz1oCaoWzpIU%2Frs5zIDjKwkWliqgoNGWgcY7nV5fQMnGMUqGjOO8%2BdP%2FgcDm%2BDCknTqtM3LOJhMeLDJWZjrH0UjqeKpRIjt97OG14YmoRcPpzOku6MMiM%2BD%2FoaVwzwkTqBvD6BXXbnEVNaEaf6fQdOqqYFv1%2BwhtwcOYTb6vGITR5ny46v5mndZetZ1zFlu5kAR6v%2BmAxGMdRaMiFy0F6tiC7zPvLbTXX8eDOCjW5muCjBXfazCYu3yNaaheuq2ttIFWeDs4XDLCD8ymM8DlousQhQmhA49Z%2Fmgs%2B%2BxwPK0Ljt03LPyeMyFVH%2FJwxpQEY3fpCZhnd5hRCfPChFXfWPD7ZJlVTZ%2BrssUMySGePNIOeRSRy4fMz8znQpxwo%2BP0pOOK6WWWvLaAPeJPlP0AdE7l9WpLt9kzqWK72TSuCYriMbFQrOszxpO1EIeoZt7jCYURYjp7QsP3yrHBNrN5%2BJOdP0CCIpMPH3kL4GOqUBByKxlTLvFYQ5jlmeiqZfFq3pvcM49ITDpc8IFE14ABgeVjaaoqSwVRLXtTfjNTJshljI%2Bh8ruYD2nRyfsqig3ohN0dUmuU7ZLkwFXitIDm%2B77%2FvmUAOpTb1yOW%2FO6FR9HGH35GRrc1HiqGx%2FOreP8BhwcvwHpPXMSbha7n4kr0c9ROpXVumQpTbgJQsJC60WxYeVnj372LgDensO2dePn2VnoRDF&X-Amz-Signature=449eb3dd405a1d21b8e829c97247c24d0a76c79870f512de3779a535b10afb93&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDB6FRP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlCy7AVjh8inWhpcpkIexS%2Bv2iIIZKQV%2FqSXwpFmO2pAiEAuEwimiXhYgMev0iSaxb7Q%2FSSuix%2BMVraKVeQT4CTl9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyWJOZjN1EVHjeewCrcAxJ2sxO4Hj5LDyeMdKg7gSyTdWStkxUa5R9edhO5ZNALu3YNrWq2g4wxBZuGKz9%2FHb%2FufJiQHYxE9kzaENNpdfh4kAtqF13JNQpPIlzUWArhD8WbygJ0jgqEU4lVvxV50g4jiRTjNtkM%2BSmTtY5u7l%2BULIuiy2Dz1oCaoWzpIU%2Frs5zIDjKwkWliqgoNGWgcY7nV5fQMnGMUqGjOO8%2BdP%2FgcDm%2BDCknTqtM3LOJhMeLDJWZjrH0UjqeKpRIjt97OG14YmoRcPpzOku6MMiM%2BD%2FoaVwzwkTqBvD6BXXbnEVNaEaf6fQdOqqYFv1%2BwhtwcOYTb6vGITR5ny46v5mndZetZ1zFlu5kAR6v%2BmAxGMdRaMiFy0F6tiC7zPvLbTXX8eDOCjW5muCjBXfazCYu3yNaaheuq2ttIFWeDs4XDLCD8ymM8DlousQhQmhA49Z%2Fmgs%2B%2BxwPK0Ljt03LPyeMyFVH%2FJwxpQEY3fpCZhnd5hRCfPChFXfWPD7ZJlVTZ%2BrssUMySGePNIOeRSRy4fMz8znQpxwo%2BP0pOOK6WWWvLaAPeJPlP0AdE7l9WpLt9kzqWK72TSuCYriMbFQrOszxpO1EIeoZt7jCYURYjp7QsP3yrHBNrN5%2BJOdP0CCIpMPH3kL4GOqUBByKxlTLvFYQ5jlmeiqZfFq3pvcM49ITDpc8IFE14ABgeVjaaoqSwVRLXtTfjNTJshljI%2Bh8ruYD2nRyfsqig3ohN0dUmuU7ZLkwFXitIDm%2B77%2FvmUAOpTb1yOW%2FO6FR9HGH35GRrc1HiqGx%2FOreP8BhwcvwHpPXMSbha7n4kr0c9ROpXVumQpTbgJQsJC60WxYeVnj372LgDensO2dePn2VnoRDF&X-Amz-Signature=95db0a6374cb77511fa8ec2d95229cd661c3fff38e90decdf5561f5c477d84b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDB6FRP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlCy7AVjh8inWhpcpkIexS%2Bv2iIIZKQV%2FqSXwpFmO2pAiEAuEwimiXhYgMev0iSaxb7Q%2FSSuix%2BMVraKVeQT4CTl9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyWJOZjN1EVHjeewCrcAxJ2sxO4Hj5LDyeMdKg7gSyTdWStkxUa5R9edhO5ZNALu3YNrWq2g4wxBZuGKz9%2FHb%2FufJiQHYxE9kzaENNpdfh4kAtqF13JNQpPIlzUWArhD8WbygJ0jgqEU4lVvxV50g4jiRTjNtkM%2BSmTtY5u7l%2BULIuiy2Dz1oCaoWzpIU%2Frs5zIDjKwkWliqgoNGWgcY7nV5fQMnGMUqGjOO8%2BdP%2FgcDm%2BDCknTqtM3LOJhMeLDJWZjrH0UjqeKpRIjt97OG14YmoRcPpzOku6MMiM%2BD%2FoaVwzwkTqBvD6BXXbnEVNaEaf6fQdOqqYFv1%2BwhtwcOYTb6vGITR5ny46v5mndZetZ1zFlu5kAR6v%2BmAxGMdRaMiFy0F6tiC7zPvLbTXX8eDOCjW5muCjBXfazCYu3yNaaheuq2ttIFWeDs4XDLCD8ymM8DlousQhQmhA49Z%2Fmgs%2B%2BxwPK0Ljt03LPyeMyFVH%2FJwxpQEY3fpCZhnd5hRCfPChFXfWPD7ZJlVTZ%2BrssUMySGePNIOeRSRy4fMz8znQpxwo%2BP0pOOK6WWWvLaAPeJPlP0AdE7l9WpLt9kzqWK72TSuCYriMbFQrOszxpO1EIeoZt7jCYURYjp7QsP3yrHBNrN5%2BJOdP0CCIpMPH3kL4GOqUBByKxlTLvFYQ5jlmeiqZfFq3pvcM49ITDpc8IFE14ABgeVjaaoqSwVRLXtTfjNTJshljI%2Bh8ruYD2nRyfsqig3ohN0dUmuU7ZLkwFXitIDm%2B77%2FvmUAOpTb1yOW%2FO6FR9HGH35GRrc1HiqGx%2FOreP8BhwcvwHpPXMSbha7n4kr0c9ROpXVumQpTbgJQsJC60WxYeVnj372LgDensO2dePn2VnoRDF&X-Amz-Signature=161ab646eb7e89a8e583ec2591eaffdd615baf1c495f34fa13e36dce96d01f38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDB6FRP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlCy7AVjh8inWhpcpkIexS%2Bv2iIIZKQV%2FqSXwpFmO2pAiEAuEwimiXhYgMev0iSaxb7Q%2FSSuix%2BMVraKVeQT4CTl9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyWJOZjN1EVHjeewCrcAxJ2sxO4Hj5LDyeMdKg7gSyTdWStkxUa5R9edhO5ZNALu3YNrWq2g4wxBZuGKz9%2FHb%2FufJiQHYxE9kzaENNpdfh4kAtqF13JNQpPIlzUWArhD8WbygJ0jgqEU4lVvxV50g4jiRTjNtkM%2BSmTtY5u7l%2BULIuiy2Dz1oCaoWzpIU%2Frs5zIDjKwkWliqgoNGWgcY7nV5fQMnGMUqGjOO8%2BdP%2FgcDm%2BDCknTqtM3LOJhMeLDJWZjrH0UjqeKpRIjt97OG14YmoRcPpzOku6MMiM%2BD%2FoaVwzwkTqBvD6BXXbnEVNaEaf6fQdOqqYFv1%2BwhtwcOYTb6vGITR5ny46v5mndZetZ1zFlu5kAR6v%2BmAxGMdRaMiFy0F6tiC7zPvLbTXX8eDOCjW5muCjBXfazCYu3yNaaheuq2ttIFWeDs4XDLCD8ymM8DlousQhQmhA49Z%2Fmgs%2B%2BxwPK0Ljt03LPyeMyFVH%2FJwxpQEY3fpCZhnd5hRCfPChFXfWPD7ZJlVTZ%2BrssUMySGePNIOeRSRy4fMz8znQpxwo%2BP0pOOK6WWWvLaAPeJPlP0AdE7l9WpLt9kzqWK72TSuCYriMbFQrOszxpO1EIeoZt7jCYURYjp7QsP3yrHBNrN5%2BJOdP0CCIpMPH3kL4GOqUBByKxlTLvFYQ5jlmeiqZfFq3pvcM49ITDpc8IFE14ABgeVjaaoqSwVRLXtTfjNTJshljI%2Bh8ruYD2nRyfsqig3ohN0dUmuU7ZLkwFXitIDm%2B77%2FvmUAOpTb1yOW%2FO6FR9HGH35GRrc1HiqGx%2FOreP8BhwcvwHpPXMSbha7n4kr0c9ROpXVumQpTbgJQsJC60WxYeVnj372LgDensO2dePn2VnoRDF&X-Amz-Signature=d2561c8483ce4940c8c6eb454b84e9cf6f967477da759dc43622259a0171bb13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDB6FRP%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlCy7AVjh8inWhpcpkIexS%2Bv2iIIZKQV%2FqSXwpFmO2pAiEAuEwimiXhYgMev0iSaxb7Q%2FSSuix%2BMVraKVeQT4CTl9YqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyWJOZjN1EVHjeewCrcAxJ2sxO4Hj5LDyeMdKg7gSyTdWStkxUa5R9edhO5ZNALu3YNrWq2g4wxBZuGKz9%2FHb%2FufJiQHYxE9kzaENNpdfh4kAtqF13JNQpPIlzUWArhD8WbygJ0jgqEU4lVvxV50g4jiRTjNtkM%2BSmTtY5u7l%2BULIuiy2Dz1oCaoWzpIU%2Frs5zIDjKwkWliqgoNGWgcY7nV5fQMnGMUqGjOO8%2BdP%2FgcDm%2BDCknTqtM3LOJhMeLDJWZjrH0UjqeKpRIjt97OG14YmoRcPpzOku6MMiM%2BD%2FoaVwzwkTqBvD6BXXbnEVNaEaf6fQdOqqYFv1%2BwhtwcOYTb6vGITR5ny46v5mndZetZ1zFlu5kAR6v%2BmAxGMdRaMiFy0F6tiC7zPvLbTXX8eDOCjW5muCjBXfazCYu3yNaaheuq2ttIFWeDs4XDLCD8ymM8DlousQhQmhA49Z%2Fmgs%2B%2BxwPK0Ljt03LPyeMyFVH%2FJwxpQEY3fpCZhnd5hRCfPChFXfWPD7ZJlVTZ%2BrssUMySGePNIOeRSRy4fMz8znQpxwo%2BP0pOOK6WWWvLaAPeJPlP0AdE7l9WpLt9kzqWK72TSuCYriMbFQrOszxpO1EIeoZt7jCYURYjp7QsP3yrHBNrN5%2BJOdP0CCIpMPH3kL4GOqUBByKxlTLvFYQ5jlmeiqZfFq3pvcM49ITDpc8IFE14ABgeVjaaoqSwVRLXtTfjNTJshljI%2Bh8ruYD2nRyfsqig3ohN0dUmuU7ZLkwFXitIDm%2B77%2FvmUAOpTb1yOW%2FO6FR9HGH35GRrc1HiqGx%2FOreP8BhwcvwHpPXMSbha7n4kr0c9ROpXVumQpTbgJQsJC60WxYeVnj372LgDensO2dePn2VnoRDF&X-Amz-Signature=845687b532009e8c62b1a89869b5fb89c8ec025c35b7a4f0ff019254d8c83a0f&X-Amz-SignedHeaders=host&x-id=GetObject)
