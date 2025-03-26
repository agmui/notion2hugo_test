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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUTSXK6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8u0qy2uQ%2FKC%2F367oVyg%2FPLAqYCNaiEdlacDzPcZXXAAiAUf83h2B%2B32KFnmVY20IPbLIP%2FCcU%2FMDElnyLIq81Nyyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXvYmO4BY9gPffJX5KtwDqxGc80Y4yueZDPq1VwjkzAk%2F47JOU8D8FJQDwP4NbqzcrDl4YNglsE5OkQkTIi9vh1WvVAQFh3HiCwIt76Oc%2F%2FrFi0xYGWlfuo4Jwv9gjcc8bXWC7uh1dlFlfEmHgH6O8T%2B49%2BGNuetqcdNaOgfdLXZ%2FWZo%2FZZ5Q%2Bg1zgztFdiS6S6WxkMxQ%2BUnp%2Fqv4%2BlYWLAxc87%2FM%2FUoSVKJy4J8O7Csz3OdTiQlycCbLcJbS0QGDTMTeXzHrea7csH1Vu1Hu1kDzCzg%2B5JXDCee1CWyvzcaaX%2FsNkZJnsLCtGuOEREQcKikQaZC3hwZDjYHYDMnJugEOrNu7BfaEuyevxmqy4iksNb%2BW0sH7iJgKT6BgumylizxnTaQ0O1dP%2FQLtj9M%2F1nWMDZbYc7wfACI6H%2FPlZY%2Fk2y%2Fwlf%2FcL6QJ%2FhkvHqmecVXbIhE6rZtMiLRqzRM7pXb7UlQRcQBADwcXGA34qbM9DNvKfko6hwwkkDfhYGcimvGU0yS8nH9EB4to8CHohEe7G%2Bln3DuzN3dywFS4Ar9%2BhuTwlXDXedaTQzgkoNB1EF8MwQbqESMyDg2Euxoygy8hqhGiHx6mXuKpJ46YduY107Dy0EXDzwJbL1SXtUIc7atTT6LID81mPGYwsYuPvwY6pgGuAPng5bUaYhi7sm2jD%2FQmJgHs0R%2BneLmS9w%2FEm6RpK%2FT%2Bn296%2BkZ56o6JWVCXzVjarcllA1mgpcf0KVlz8mFe9JP%2BHYosHJ1q8ou%2BiifUsZbve5rkoh03Rc3J2ntlF4%2Br1KG1pRJoZ3Pmw9X7Cjp9paAdtCrJx4yseQunQkNHB2pXj%2Brrguwj8uOHG5qzZ1QRJXsPk2KXxxwIYpejrMdgdfsKJf85&X-Amz-Signature=cba28352298f04d88bf027b8a315014454126ab8bada7d57c5e6611d9e253126&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUTSXK6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8u0qy2uQ%2FKC%2F367oVyg%2FPLAqYCNaiEdlacDzPcZXXAAiAUf83h2B%2B32KFnmVY20IPbLIP%2FCcU%2FMDElnyLIq81Nyyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXvYmO4BY9gPffJX5KtwDqxGc80Y4yueZDPq1VwjkzAk%2F47JOU8D8FJQDwP4NbqzcrDl4YNglsE5OkQkTIi9vh1WvVAQFh3HiCwIt76Oc%2F%2FrFi0xYGWlfuo4Jwv9gjcc8bXWC7uh1dlFlfEmHgH6O8T%2B49%2BGNuetqcdNaOgfdLXZ%2FWZo%2FZZ5Q%2Bg1zgztFdiS6S6WxkMxQ%2BUnp%2Fqv4%2BlYWLAxc87%2FM%2FUoSVKJy4J8O7Csz3OdTiQlycCbLcJbS0QGDTMTeXzHrea7csH1Vu1Hu1kDzCzg%2B5JXDCee1CWyvzcaaX%2FsNkZJnsLCtGuOEREQcKikQaZC3hwZDjYHYDMnJugEOrNu7BfaEuyevxmqy4iksNb%2BW0sH7iJgKT6BgumylizxnTaQ0O1dP%2FQLtj9M%2F1nWMDZbYc7wfACI6H%2FPlZY%2Fk2y%2Fwlf%2FcL6QJ%2FhkvHqmecVXbIhE6rZtMiLRqzRM7pXb7UlQRcQBADwcXGA34qbM9DNvKfko6hwwkkDfhYGcimvGU0yS8nH9EB4to8CHohEe7G%2Bln3DuzN3dywFS4Ar9%2BhuTwlXDXedaTQzgkoNB1EF8MwQbqESMyDg2Euxoygy8hqhGiHx6mXuKpJ46YduY107Dy0EXDzwJbL1SXtUIc7atTT6LID81mPGYwsYuPvwY6pgGuAPng5bUaYhi7sm2jD%2FQmJgHs0R%2BneLmS9w%2FEm6RpK%2FT%2Bn296%2BkZ56o6JWVCXzVjarcllA1mgpcf0KVlz8mFe9JP%2BHYosHJ1q8ou%2BiifUsZbve5rkoh03Rc3J2ntlF4%2Br1KG1pRJoZ3Pmw9X7Cjp9paAdtCrJx4yseQunQkNHB2pXj%2Brrguwj8uOHG5qzZ1QRJXsPk2KXxxwIYpejrMdgdfsKJf85&X-Amz-Signature=fd9523d6fdccccebea366aa25c68ecd9f357212fdc8f70e06433bc8132603458&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUTSXK6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8u0qy2uQ%2FKC%2F367oVyg%2FPLAqYCNaiEdlacDzPcZXXAAiAUf83h2B%2B32KFnmVY20IPbLIP%2FCcU%2FMDElnyLIq81Nyyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXvYmO4BY9gPffJX5KtwDqxGc80Y4yueZDPq1VwjkzAk%2F47JOU8D8FJQDwP4NbqzcrDl4YNglsE5OkQkTIi9vh1WvVAQFh3HiCwIt76Oc%2F%2FrFi0xYGWlfuo4Jwv9gjcc8bXWC7uh1dlFlfEmHgH6O8T%2B49%2BGNuetqcdNaOgfdLXZ%2FWZo%2FZZ5Q%2Bg1zgztFdiS6S6WxkMxQ%2BUnp%2Fqv4%2BlYWLAxc87%2FM%2FUoSVKJy4J8O7Csz3OdTiQlycCbLcJbS0QGDTMTeXzHrea7csH1Vu1Hu1kDzCzg%2B5JXDCee1CWyvzcaaX%2FsNkZJnsLCtGuOEREQcKikQaZC3hwZDjYHYDMnJugEOrNu7BfaEuyevxmqy4iksNb%2BW0sH7iJgKT6BgumylizxnTaQ0O1dP%2FQLtj9M%2F1nWMDZbYc7wfACI6H%2FPlZY%2Fk2y%2Fwlf%2FcL6QJ%2FhkvHqmecVXbIhE6rZtMiLRqzRM7pXb7UlQRcQBADwcXGA34qbM9DNvKfko6hwwkkDfhYGcimvGU0yS8nH9EB4to8CHohEe7G%2Bln3DuzN3dywFS4Ar9%2BhuTwlXDXedaTQzgkoNB1EF8MwQbqESMyDg2Euxoygy8hqhGiHx6mXuKpJ46YduY107Dy0EXDzwJbL1SXtUIc7atTT6LID81mPGYwsYuPvwY6pgGuAPng5bUaYhi7sm2jD%2FQmJgHs0R%2BneLmS9w%2FEm6RpK%2FT%2Bn296%2BkZ56o6JWVCXzVjarcllA1mgpcf0KVlz8mFe9JP%2BHYosHJ1q8ou%2BiifUsZbve5rkoh03Rc3J2ntlF4%2Br1KG1pRJoZ3Pmw9X7Cjp9paAdtCrJx4yseQunQkNHB2pXj%2Brrguwj8uOHG5qzZ1QRJXsPk2KXxxwIYpejrMdgdfsKJf85&X-Amz-Signature=9bd4be6f8618347f183b175b1b8738e6cfb6d20bc0d1906ace4c880ef185f8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUTSXK6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8u0qy2uQ%2FKC%2F367oVyg%2FPLAqYCNaiEdlacDzPcZXXAAiAUf83h2B%2B32KFnmVY20IPbLIP%2FCcU%2FMDElnyLIq81Nyyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXvYmO4BY9gPffJX5KtwDqxGc80Y4yueZDPq1VwjkzAk%2F47JOU8D8FJQDwP4NbqzcrDl4YNglsE5OkQkTIi9vh1WvVAQFh3HiCwIt76Oc%2F%2FrFi0xYGWlfuo4Jwv9gjcc8bXWC7uh1dlFlfEmHgH6O8T%2B49%2BGNuetqcdNaOgfdLXZ%2FWZo%2FZZ5Q%2Bg1zgztFdiS6S6WxkMxQ%2BUnp%2Fqv4%2BlYWLAxc87%2FM%2FUoSVKJy4J8O7Csz3OdTiQlycCbLcJbS0QGDTMTeXzHrea7csH1Vu1Hu1kDzCzg%2B5JXDCee1CWyvzcaaX%2FsNkZJnsLCtGuOEREQcKikQaZC3hwZDjYHYDMnJugEOrNu7BfaEuyevxmqy4iksNb%2BW0sH7iJgKT6BgumylizxnTaQ0O1dP%2FQLtj9M%2F1nWMDZbYc7wfACI6H%2FPlZY%2Fk2y%2Fwlf%2FcL6QJ%2FhkvHqmecVXbIhE6rZtMiLRqzRM7pXb7UlQRcQBADwcXGA34qbM9DNvKfko6hwwkkDfhYGcimvGU0yS8nH9EB4to8CHohEe7G%2Bln3DuzN3dywFS4Ar9%2BhuTwlXDXedaTQzgkoNB1EF8MwQbqESMyDg2Euxoygy8hqhGiHx6mXuKpJ46YduY107Dy0EXDzwJbL1SXtUIc7atTT6LID81mPGYwsYuPvwY6pgGuAPng5bUaYhi7sm2jD%2FQmJgHs0R%2BneLmS9w%2FEm6RpK%2FT%2Bn296%2BkZ56o6JWVCXzVjarcllA1mgpcf0KVlz8mFe9JP%2BHYosHJ1q8ou%2BiifUsZbve5rkoh03Rc3J2ntlF4%2Br1KG1pRJoZ3Pmw9X7Cjp9paAdtCrJx4yseQunQkNHB2pXj%2Brrguwj8uOHG5qzZ1QRJXsPk2KXxxwIYpejrMdgdfsKJf85&X-Amz-Signature=875e265d265f74faf7de2a0e9aeeaa2f1a2099430325fe79d27483e6ce70b95d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUTSXK6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8u0qy2uQ%2FKC%2F367oVyg%2FPLAqYCNaiEdlacDzPcZXXAAiAUf83h2B%2B32KFnmVY20IPbLIP%2FCcU%2FMDElnyLIq81Nyyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXvYmO4BY9gPffJX5KtwDqxGc80Y4yueZDPq1VwjkzAk%2F47JOU8D8FJQDwP4NbqzcrDl4YNglsE5OkQkTIi9vh1WvVAQFh3HiCwIt76Oc%2F%2FrFi0xYGWlfuo4Jwv9gjcc8bXWC7uh1dlFlfEmHgH6O8T%2B49%2BGNuetqcdNaOgfdLXZ%2FWZo%2FZZ5Q%2Bg1zgztFdiS6S6WxkMxQ%2BUnp%2Fqv4%2BlYWLAxc87%2FM%2FUoSVKJy4J8O7Csz3OdTiQlycCbLcJbS0QGDTMTeXzHrea7csH1Vu1Hu1kDzCzg%2B5JXDCee1CWyvzcaaX%2FsNkZJnsLCtGuOEREQcKikQaZC3hwZDjYHYDMnJugEOrNu7BfaEuyevxmqy4iksNb%2BW0sH7iJgKT6BgumylizxnTaQ0O1dP%2FQLtj9M%2F1nWMDZbYc7wfACI6H%2FPlZY%2Fk2y%2Fwlf%2FcL6QJ%2FhkvHqmecVXbIhE6rZtMiLRqzRM7pXb7UlQRcQBADwcXGA34qbM9DNvKfko6hwwkkDfhYGcimvGU0yS8nH9EB4to8CHohEe7G%2Bln3DuzN3dywFS4Ar9%2BhuTwlXDXedaTQzgkoNB1EF8MwQbqESMyDg2Euxoygy8hqhGiHx6mXuKpJ46YduY107Dy0EXDzwJbL1SXtUIc7atTT6LID81mPGYwsYuPvwY6pgGuAPng5bUaYhi7sm2jD%2FQmJgHs0R%2BneLmS9w%2FEm6RpK%2FT%2Bn296%2BkZ56o6JWVCXzVjarcllA1mgpcf0KVlz8mFe9JP%2BHYosHJ1q8ou%2BiifUsZbve5rkoh03Rc3J2ntlF4%2Br1KG1pRJoZ3Pmw9X7Cjp9paAdtCrJx4yseQunQkNHB2pXj%2Brrguwj8uOHG5qzZ1QRJXsPk2KXxxwIYpejrMdgdfsKJf85&X-Amz-Signature=f24f9b757c49c2b01870055e7c4057e340c561b7b15204266f8c0471668b2438&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUTSXK6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8u0qy2uQ%2FKC%2F367oVyg%2FPLAqYCNaiEdlacDzPcZXXAAiAUf83h2B%2B32KFnmVY20IPbLIP%2FCcU%2FMDElnyLIq81Nyyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXvYmO4BY9gPffJX5KtwDqxGc80Y4yueZDPq1VwjkzAk%2F47JOU8D8FJQDwP4NbqzcrDl4YNglsE5OkQkTIi9vh1WvVAQFh3HiCwIt76Oc%2F%2FrFi0xYGWlfuo4Jwv9gjcc8bXWC7uh1dlFlfEmHgH6O8T%2B49%2BGNuetqcdNaOgfdLXZ%2FWZo%2FZZ5Q%2Bg1zgztFdiS6S6WxkMxQ%2BUnp%2Fqv4%2BlYWLAxc87%2FM%2FUoSVKJy4J8O7Csz3OdTiQlycCbLcJbS0QGDTMTeXzHrea7csH1Vu1Hu1kDzCzg%2B5JXDCee1CWyvzcaaX%2FsNkZJnsLCtGuOEREQcKikQaZC3hwZDjYHYDMnJugEOrNu7BfaEuyevxmqy4iksNb%2BW0sH7iJgKT6BgumylizxnTaQ0O1dP%2FQLtj9M%2F1nWMDZbYc7wfACI6H%2FPlZY%2Fk2y%2Fwlf%2FcL6QJ%2FhkvHqmecVXbIhE6rZtMiLRqzRM7pXb7UlQRcQBADwcXGA34qbM9DNvKfko6hwwkkDfhYGcimvGU0yS8nH9EB4to8CHohEe7G%2Bln3DuzN3dywFS4Ar9%2BhuTwlXDXedaTQzgkoNB1EF8MwQbqESMyDg2Euxoygy8hqhGiHx6mXuKpJ46YduY107Dy0EXDzwJbL1SXtUIc7atTT6LID81mPGYwsYuPvwY6pgGuAPng5bUaYhi7sm2jD%2FQmJgHs0R%2BneLmS9w%2FEm6RpK%2FT%2Bn296%2BkZ56o6JWVCXzVjarcllA1mgpcf0KVlz8mFe9JP%2BHYosHJ1q8ou%2BiifUsZbve5rkoh03Rc3J2ntlF4%2Br1KG1pRJoZ3Pmw9X7Cjp9paAdtCrJx4yseQunQkNHB2pXj%2Brrguwj8uOHG5qzZ1QRJXsPk2KXxxwIYpejrMdgdfsKJf85&X-Amz-Signature=ea097ec2c8c7e31317520c4daf3dda3abd7ffc566019a2ebfafa4d1af9c1ce43&X-Amz-SignedHeaders=host&x-id=GetObject)
