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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37O37N4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa6PSFAM2nD%2BlKVB8%2BhKll0HsIII6iZS4%2BijMTsdvzXgIgXhIEWpjoN4x6ShNX2HrhGtT9JfcAXI7H0Pq5lswQUkQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNLHGHbrGNJI9HcGESrcA1jUgjOaEG3S4C0mT%2BneAGfntM9rwXsL7%2Brv4j3S4BcXV%2F1Ni4729MW4wcB%2BgF0p4vC4w6N2jECIvWk4nAJQqAtnECKk1TJj5riOgszNkH0daohkK%2Fk2W4CHj5j3SQBK7V5%2FmxTzkRomPTSmRs1aCzth5z84jtrf7LSK8VcJUUJQPZXlNRDvsC%2F9YrSJWWz1LX0y7BGDORTlbJMKTB8i6IVUYIDGdiBDmR0FidMY4U1EkZF9WqHspxQnVGI0UupZK8cGg3WjI7bcYKBbQ6CvYy4Y1HeTJzIC0J5rvtrqiKufQotkvZFdYCjz9N%2Fvg1Ip2FR2S4ydk%2FS%2FB2sAUltkyjYIfJZCGd0Sbu2FOk68ukhzbR%2FkAaBk9R9Ku5oc2EZg87d2FF8DmxTEcKtQx9QPLUmmX8gWL1NSzaRk2pliCyYsgPp603W72tzUlLam33wktg7jDsgITul7vs7DhuZLhehW4wsbq%2Fj0hcjwbMS1PGFaY4IB4KtUJOhmLCG3gFg6BnUtGykDydL31407G%2B8NM%2B31bZQFL0fjmzrQ9JpnNIQHMUiHqAYuVu1iIhcfFkNcBATFDomRtHjxAELaLCRUGEe5LMBj2lS0gI2i9ybPt72JtTU1HGTTR0AYWV37MOqk2b4GOqUBHyF2j6qrqvTpzNp%2B52LpRDhIEuJpXTB1B0vuQUCTIXP0SnNVCAHhYJeKverezuEh8YOwsuprHUu9e3mvMv4924SVOZlVPboM1GPbYek7e8KeU%2F4pJkAq64EGiZ8lQLZf5IDxOJb7AoajtHPq5rKZHboMN8h8TN%2FluQPFoyy1omceyOhnMi8egV7tTKHjdt1Gd2s4EtAvRF97oS0uFohvOBSc9Gpk&X-Amz-Signature=b0320a1be93eb3be0c4a7a1bfac040827f97d215f522c520ff87149697642650&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37O37N4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa6PSFAM2nD%2BlKVB8%2BhKll0HsIII6iZS4%2BijMTsdvzXgIgXhIEWpjoN4x6ShNX2HrhGtT9JfcAXI7H0Pq5lswQUkQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNLHGHbrGNJI9HcGESrcA1jUgjOaEG3S4C0mT%2BneAGfntM9rwXsL7%2Brv4j3S4BcXV%2F1Ni4729MW4wcB%2BgF0p4vC4w6N2jECIvWk4nAJQqAtnECKk1TJj5riOgszNkH0daohkK%2Fk2W4CHj5j3SQBK7V5%2FmxTzkRomPTSmRs1aCzth5z84jtrf7LSK8VcJUUJQPZXlNRDvsC%2F9YrSJWWz1LX0y7BGDORTlbJMKTB8i6IVUYIDGdiBDmR0FidMY4U1EkZF9WqHspxQnVGI0UupZK8cGg3WjI7bcYKBbQ6CvYy4Y1HeTJzIC0J5rvtrqiKufQotkvZFdYCjz9N%2Fvg1Ip2FR2S4ydk%2FS%2FB2sAUltkyjYIfJZCGd0Sbu2FOk68ukhzbR%2FkAaBk9R9Ku5oc2EZg87d2FF8DmxTEcKtQx9QPLUmmX8gWL1NSzaRk2pliCyYsgPp603W72tzUlLam33wktg7jDsgITul7vs7DhuZLhehW4wsbq%2Fj0hcjwbMS1PGFaY4IB4KtUJOhmLCG3gFg6BnUtGykDydL31407G%2B8NM%2B31bZQFL0fjmzrQ9JpnNIQHMUiHqAYuVu1iIhcfFkNcBATFDomRtHjxAELaLCRUGEe5LMBj2lS0gI2i9ybPt72JtTU1HGTTR0AYWV37MOqk2b4GOqUBHyF2j6qrqvTpzNp%2B52LpRDhIEuJpXTB1B0vuQUCTIXP0SnNVCAHhYJeKverezuEh8YOwsuprHUu9e3mvMv4924SVOZlVPboM1GPbYek7e8KeU%2F4pJkAq64EGiZ8lQLZf5IDxOJb7AoajtHPq5rKZHboMN8h8TN%2FluQPFoyy1omceyOhnMi8egV7tTKHjdt1Gd2s4EtAvRF97oS0uFohvOBSc9Gpk&X-Amz-Signature=8c9b5bcdbeab59ed56388f7f7447e49d8db87804482005193819280431e16933&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37O37N4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa6PSFAM2nD%2BlKVB8%2BhKll0HsIII6iZS4%2BijMTsdvzXgIgXhIEWpjoN4x6ShNX2HrhGtT9JfcAXI7H0Pq5lswQUkQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNLHGHbrGNJI9HcGESrcA1jUgjOaEG3S4C0mT%2BneAGfntM9rwXsL7%2Brv4j3S4BcXV%2F1Ni4729MW4wcB%2BgF0p4vC4w6N2jECIvWk4nAJQqAtnECKk1TJj5riOgszNkH0daohkK%2Fk2W4CHj5j3SQBK7V5%2FmxTzkRomPTSmRs1aCzth5z84jtrf7LSK8VcJUUJQPZXlNRDvsC%2F9YrSJWWz1LX0y7BGDORTlbJMKTB8i6IVUYIDGdiBDmR0FidMY4U1EkZF9WqHspxQnVGI0UupZK8cGg3WjI7bcYKBbQ6CvYy4Y1HeTJzIC0J5rvtrqiKufQotkvZFdYCjz9N%2Fvg1Ip2FR2S4ydk%2FS%2FB2sAUltkyjYIfJZCGd0Sbu2FOk68ukhzbR%2FkAaBk9R9Ku5oc2EZg87d2FF8DmxTEcKtQx9QPLUmmX8gWL1NSzaRk2pliCyYsgPp603W72tzUlLam33wktg7jDsgITul7vs7DhuZLhehW4wsbq%2Fj0hcjwbMS1PGFaY4IB4KtUJOhmLCG3gFg6BnUtGykDydL31407G%2B8NM%2B31bZQFL0fjmzrQ9JpnNIQHMUiHqAYuVu1iIhcfFkNcBATFDomRtHjxAELaLCRUGEe5LMBj2lS0gI2i9ybPt72JtTU1HGTTR0AYWV37MOqk2b4GOqUBHyF2j6qrqvTpzNp%2B52LpRDhIEuJpXTB1B0vuQUCTIXP0SnNVCAHhYJeKverezuEh8YOwsuprHUu9e3mvMv4924SVOZlVPboM1GPbYek7e8KeU%2F4pJkAq64EGiZ8lQLZf5IDxOJb7AoajtHPq5rKZHboMN8h8TN%2FluQPFoyy1omceyOhnMi8egV7tTKHjdt1Gd2s4EtAvRF97oS0uFohvOBSc9Gpk&X-Amz-Signature=868d27b9d808598923fb2c68b71be329635aae5580468ba8720a07e5acf3fb47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37O37N4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa6PSFAM2nD%2BlKVB8%2BhKll0HsIII6iZS4%2BijMTsdvzXgIgXhIEWpjoN4x6ShNX2HrhGtT9JfcAXI7H0Pq5lswQUkQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNLHGHbrGNJI9HcGESrcA1jUgjOaEG3S4C0mT%2BneAGfntM9rwXsL7%2Brv4j3S4BcXV%2F1Ni4729MW4wcB%2BgF0p4vC4w6N2jECIvWk4nAJQqAtnECKk1TJj5riOgszNkH0daohkK%2Fk2W4CHj5j3SQBK7V5%2FmxTzkRomPTSmRs1aCzth5z84jtrf7LSK8VcJUUJQPZXlNRDvsC%2F9YrSJWWz1LX0y7BGDORTlbJMKTB8i6IVUYIDGdiBDmR0FidMY4U1EkZF9WqHspxQnVGI0UupZK8cGg3WjI7bcYKBbQ6CvYy4Y1HeTJzIC0J5rvtrqiKufQotkvZFdYCjz9N%2Fvg1Ip2FR2S4ydk%2FS%2FB2sAUltkyjYIfJZCGd0Sbu2FOk68ukhzbR%2FkAaBk9R9Ku5oc2EZg87d2FF8DmxTEcKtQx9QPLUmmX8gWL1NSzaRk2pliCyYsgPp603W72tzUlLam33wktg7jDsgITul7vs7DhuZLhehW4wsbq%2Fj0hcjwbMS1PGFaY4IB4KtUJOhmLCG3gFg6BnUtGykDydL31407G%2B8NM%2B31bZQFL0fjmzrQ9JpnNIQHMUiHqAYuVu1iIhcfFkNcBATFDomRtHjxAELaLCRUGEe5LMBj2lS0gI2i9ybPt72JtTU1HGTTR0AYWV37MOqk2b4GOqUBHyF2j6qrqvTpzNp%2B52LpRDhIEuJpXTB1B0vuQUCTIXP0SnNVCAHhYJeKverezuEh8YOwsuprHUu9e3mvMv4924SVOZlVPboM1GPbYek7e8KeU%2F4pJkAq64EGiZ8lQLZf5IDxOJb7AoajtHPq5rKZHboMN8h8TN%2FluQPFoyy1omceyOhnMi8egV7tTKHjdt1Gd2s4EtAvRF97oS0uFohvOBSc9Gpk&X-Amz-Signature=59c978bd1a981acd49c8c5e5dea38d8062857d71ffa2ff821329697776d26258&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37O37N4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa6PSFAM2nD%2BlKVB8%2BhKll0HsIII6iZS4%2BijMTsdvzXgIgXhIEWpjoN4x6ShNX2HrhGtT9JfcAXI7H0Pq5lswQUkQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNLHGHbrGNJI9HcGESrcA1jUgjOaEG3S4C0mT%2BneAGfntM9rwXsL7%2Brv4j3S4BcXV%2F1Ni4729MW4wcB%2BgF0p4vC4w6N2jECIvWk4nAJQqAtnECKk1TJj5riOgszNkH0daohkK%2Fk2W4CHj5j3SQBK7V5%2FmxTzkRomPTSmRs1aCzth5z84jtrf7LSK8VcJUUJQPZXlNRDvsC%2F9YrSJWWz1LX0y7BGDORTlbJMKTB8i6IVUYIDGdiBDmR0FidMY4U1EkZF9WqHspxQnVGI0UupZK8cGg3WjI7bcYKBbQ6CvYy4Y1HeTJzIC0J5rvtrqiKufQotkvZFdYCjz9N%2Fvg1Ip2FR2S4ydk%2FS%2FB2sAUltkyjYIfJZCGd0Sbu2FOk68ukhzbR%2FkAaBk9R9Ku5oc2EZg87d2FF8DmxTEcKtQx9QPLUmmX8gWL1NSzaRk2pliCyYsgPp603W72tzUlLam33wktg7jDsgITul7vs7DhuZLhehW4wsbq%2Fj0hcjwbMS1PGFaY4IB4KtUJOhmLCG3gFg6BnUtGykDydL31407G%2B8NM%2B31bZQFL0fjmzrQ9JpnNIQHMUiHqAYuVu1iIhcfFkNcBATFDomRtHjxAELaLCRUGEe5LMBj2lS0gI2i9ybPt72JtTU1HGTTR0AYWV37MOqk2b4GOqUBHyF2j6qrqvTpzNp%2B52LpRDhIEuJpXTB1B0vuQUCTIXP0SnNVCAHhYJeKverezuEh8YOwsuprHUu9e3mvMv4924SVOZlVPboM1GPbYek7e8KeU%2F4pJkAq64EGiZ8lQLZf5IDxOJb7AoajtHPq5rKZHboMN8h8TN%2FluQPFoyy1omceyOhnMi8egV7tTKHjdt1Gd2s4EtAvRF97oS0uFohvOBSc9Gpk&X-Amz-Signature=9a3192e8b714c46a05fdbd98c611cd1478a30e11cc5d54b614729bbd4a039f99&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37O37N4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa6PSFAM2nD%2BlKVB8%2BhKll0HsIII6iZS4%2BijMTsdvzXgIgXhIEWpjoN4x6ShNX2HrhGtT9JfcAXI7H0Pq5lswQUkQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDNLHGHbrGNJI9HcGESrcA1jUgjOaEG3S4C0mT%2BneAGfntM9rwXsL7%2Brv4j3S4BcXV%2F1Ni4729MW4wcB%2BgF0p4vC4w6N2jECIvWk4nAJQqAtnECKk1TJj5riOgszNkH0daohkK%2Fk2W4CHj5j3SQBK7V5%2FmxTzkRomPTSmRs1aCzth5z84jtrf7LSK8VcJUUJQPZXlNRDvsC%2F9YrSJWWz1LX0y7BGDORTlbJMKTB8i6IVUYIDGdiBDmR0FidMY4U1EkZF9WqHspxQnVGI0UupZK8cGg3WjI7bcYKBbQ6CvYy4Y1HeTJzIC0J5rvtrqiKufQotkvZFdYCjz9N%2Fvg1Ip2FR2S4ydk%2FS%2FB2sAUltkyjYIfJZCGd0Sbu2FOk68ukhzbR%2FkAaBk9R9Ku5oc2EZg87d2FF8DmxTEcKtQx9QPLUmmX8gWL1NSzaRk2pliCyYsgPp603W72tzUlLam33wktg7jDsgITul7vs7DhuZLhehW4wsbq%2Fj0hcjwbMS1PGFaY4IB4KtUJOhmLCG3gFg6BnUtGykDydL31407G%2B8NM%2B31bZQFL0fjmzrQ9JpnNIQHMUiHqAYuVu1iIhcfFkNcBATFDomRtHjxAELaLCRUGEe5LMBj2lS0gI2i9ybPt72JtTU1HGTTR0AYWV37MOqk2b4GOqUBHyF2j6qrqvTpzNp%2B52LpRDhIEuJpXTB1B0vuQUCTIXP0SnNVCAHhYJeKverezuEh8YOwsuprHUu9e3mvMv4924SVOZlVPboM1GPbYek7e8KeU%2F4pJkAq64EGiZ8lQLZf5IDxOJb7AoajtHPq5rKZHboMN8h8TN%2FluQPFoyy1omceyOhnMi8egV7tTKHjdt1Gd2s4EtAvRF97oS0uFohvOBSc9Gpk&X-Amz-Signature=b7a63e392799c4470e015a052cc073f930b7667833c887c074438046e69e5b93&X-Amz-SignedHeaders=host&x-id=GetObject)
