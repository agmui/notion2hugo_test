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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CEU35S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFYZzZBopirv0rkU4DRDfmWvk7ts5Lr3IsdnZ1wHiO9AiEAhRjUDYx4uMpQtVyWu4LP6SjPKCWQrMYzPQgQ6u4QOPEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmeyetPxNMJ9eJuSCrcA6RuMiGXpnn8%2FqFGl8DCslRtsj7bwOWum%2FCVmLHbzn7CY1LVi3jBB9vZ8BTQyxAtnDOj0tU%2BRIsBObLg8jyZ31wt0NmEQV3ychwnr%2BDAAAu13DOujKLx5wl68Wt0cOjWBq8fcWvZaXOhS1JbNvNK4TOJB8H0GPKDJI92qoik8XgWkqjIeJ5j09AngL6CD4bXLXgpP6CDRj1DkvlE%2F1uKdo6jIm4nIqDV3%2FC9xkwyz2AG5AuJnlFpKsqKGaVeQj3lzyC3ww4xEpBD1FA0D%2F9eKLEZGoOFHOZ8CepnzFYagKo%2BYntANaN9BcKYes0AmiKzK%2B7xu6QX%2FrTS36MwOlezR%2FCyytg6Ajdj%2FwC6w27gt4moxIcVZNpfuAiOgHg307oxz6Oxn4W0fQr5ZxHYvusQPIoM5nUlgts04108FjpP0pDtNKTIzrJj36O%2B44bj3MjonqAHEENEVdzusfPnHTlc5pcomcPzaM7rz%2FMH95aMNjkvgQNeWE8EBf%2BJLizu27pGzehUGxFiKnzn8SIOOgTHw5xMOnOJ0wU4Bz%2FdM%2FIphanUFSuPm2IK2wwYXy6IPhvYvDdmZNYi2s1GItEGRp3%2FI4UgNnmfo1OhxZ%2B0uCaFRaEPBDo435HtAUKUuuHYML29lsMGOqUBeIa5ds5KgbNBqc9%2BsdEGwpeH%2FuskVD4Mcb2xONqqFawQk%2BF927GdEI9HBDIse9HCBsuf7ZtSDPl8JvzRx440%2FbZGt2c53%2FW80%2Bsryo47bnOTRh9TtbUtWy21doDnX0o%2B%2FhrfgGixGmzKv8iGd%2F4Hfy6xmQAArWwD9uMdT%2BkIFt6ewBYElT%2B8gC6rhI0My019kbr6RoF10IeTuwL6CnRQ09hxBWRq&X-Amz-Signature=635fe2040507bd183b7ffeb40d70cfe655962a0402b2df9962732151b3e8d6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CEU35S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFYZzZBopirv0rkU4DRDfmWvk7ts5Lr3IsdnZ1wHiO9AiEAhRjUDYx4uMpQtVyWu4LP6SjPKCWQrMYzPQgQ6u4QOPEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmeyetPxNMJ9eJuSCrcA6RuMiGXpnn8%2FqFGl8DCslRtsj7bwOWum%2FCVmLHbzn7CY1LVi3jBB9vZ8BTQyxAtnDOj0tU%2BRIsBObLg8jyZ31wt0NmEQV3ychwnr%2BDAAAu13DOujKLx5wl68Wt0cOjWBq8fcWvZaXOhS1JbNvNK4TOJB8H0GPKDJI92qoik8XgWkqjIeJ5j09AngL6CD4bXLXgpP6CDRj1DkvlE%2F1uKdo6jIm4nIqDV3%2FC9xkwyz2AG5AuJnlFpKsqKGaVeQj3lzyC3ww4xEpBD1FA0D%2F9eKLEZGoOFHOZ8CepnzFYagKo%2BYntANaN9BcKYes0AmiKzK%2B7xu6QX%2FrTS36MwOlezR%2FCyytg6Ajdj%2FwC6w27gt4moxIcVZNpfuAiOgHg307oxz6Oxn4W0fQr5ZxHYvusQPIoM5nUlgts04108FjpP0pDtNKTIzrJj36O%2B44bj3MjonqAHEENEVdzusfPnHTlc5pcomcPzaM7rz%2FMH95aMNjkvgQNeWE8EBf%2BJLizu27pGzehUGxFiKnzn8SIOOgTHw5xMOnOJ0wU4Bz%2FdM%2FIphanUFSuPm2IK2wwYXy6IPhvYvDdmZNYi2s1GItEGRp3%2FI4UgNnmfo1OhxZ%2B0uCaFRaEPBDo435HtAUKUuuHYML29lsMGOqUBeIa5ds5KgbNBqc9%2BsdEGwpeH%2FuskVD4Mcb2xONqqFawQk%2BF927GdEI9HBDIse9HCBsuf7ZtSDPl8JvzRx440%2FbZGt2c53%2FW80%2Bsryo47bnOTRh9TtbUtWy21doDnX0o%2B%2FhrfgGixGmzKv8iGd%2F4Hfy6xmQAArWwD9uMdT%2BkIFt6ewBYElT%2B8gC6rhI0My019kbr6RoF10IeTuwL6CnRQ09hxBWRq&X-Amz-Signature=53065c923b09652534b945d356c92ecda4282f91026a9d0944e34e0bd3c64970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CEU35S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFYZzZBopirv0rkU4DRDfmWvk7ts5Lr3IsdnZ1wHiO9AiEAhRjUDYx4uMpQtVyWu4LP6SjPKCWQrMYzPQgQ6u4QOPEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmeyetPxNMJ9eJuSCrcA6RuMiGXpnn8%2FqFGl8DCslRtsj7bwOWum%2FCVmLHbzn7CY1LVi3jBB9vZ8BTQyxAtnDOj0tU%2BRIsBObLg8jyZ31wt0NmEQV3ychwnr%2BDAAAu13DOujKLx5wl68Wt0cOjWBq8fcWvZaXOhS1JbNvNK4TOJB8H0GPKDJI92qoik8XgWkqjIeJ5j09AngL6CD4bXLXgpP6CDRj1DkvlE%2F1uKdo6jIm4nIqDV3%2FC9xkwyz2AG5AuJnlFpKsqKGaVeQj3lzyC3ww4xEpBD1FA0D%2F9eKLEZGoOFHOZ8CepnzFYagKo%2BYntANaN9BcKYes0AmiKzK%2B7xu6QX%2FrTS36MwOlezR%2FCyytg6Ajdj%2FwC6w27gt4moxIcVZNpfuAiOgHg307oxz6Oxn4W0fQr5ZxHYvusQPIoM5nUlgts04108FjpP0pDtNKTIzrJj36O%2B44bj3MjonqAHEENEVdzusfPnHTlc5pcomcPzaM7rz%2FMH95aMNjkvgQNeWE8EBf%2BJLizu27pGzehUGxFiKnzn8SIOOgTHw5xMOnOJ0wU4Bz%2FdM%2FIphanUFSuPm2IK2wwYXy6IPhvYvDdmZNYi2s1GItEGRp3%2FI4UgNnmfo1OhxZ%2B0uCaFRaEPBDo435HtAUKUuuHYML29lsMGOqUBeIa5ds5KgbNBqc9%2BsdEGwpeH%2FuskVD4Mcb2xONqqFawQk%2BF927GdEI9HBDIse9HCBsuf7ZtSDPl8JvzRx440%2FbZGt2c53%2FW80%2Bsryo47bnOTRh9TtbUtWy21doDnX0o%2B%2FhrfgGixGmzKv8iGd%2F4Hfy6xmQAArWwD9uMdT%2BkIFt6ewBYElT%2B8gC6rhI0My019kbr6RoF10IeTuwL6CnRQ09hxBWRq&X-Amz-Signature=000c97b055e67fc0dba31ea03f3157844f5377dd909051309c11f025b20e12fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CEU35S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFYZzZBopirv0rkU4DRDfmWvk7ts5Lr3IsdnZ1wHiO9AiEAhRjUDYx4uMpQtVyWu4LP6SjPKCWQrMYzPQgQ6u4QOPEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmeyetPxNMJ9eJuSCrcA6RuMiGXpnn8%2FqFGl8DCslRtsj7bwOWum%2FCVmLHbzn7CY1LVi3jBB9vZ8BTQyxAtnDOj0tU%2BRIsBObLg8jyZ31wt0NmEQV3ychwnr%2BDAAAu13DOujKLx5wl68Wt0cOjWBq8fcWvZaXOhS1JbNvNK4TOJB8H0GPKDJI92qoik8XgWkqjIeJ5j09AngL6CD4bXLXgpP6CDRj1DkvlE%2F1uKdo6jIm4nIqDV3%2FC9xkwyz2AG5AuJnlFpKsqKGaVeQj3lzyC3ww4xEpBD1FA0D%2F9eKLEZGoOFHOZ8CepnzFYagKo%2BYntANaN9BcKYes0AmiKzK%2B7xu6QX%2FrTS36MwOlezR%2FCyytg6Ajdj%2FwC6w27gt4moxIcVZNpfuAiOgHg307oxz6Oxn4W0fQr5ZxHYvusQPIoM5nUlgts04108FjpP0pDtNKTIzrJj36O%2B44bj3MjonqAHEENEVdzusfPnHTlc5pcomcPzaM7rz%2FMH95aMNjkvgQNeWE8EBf%2BJLizu27pGzehUGxFiKnzn8SIOOgTHw5xMOnOJ0wU4Bz%2FdM%2FIphanUFSuPm2IK2wwYXy6IPhvYvDdmZNYi2s1GItEGRp3%2FI4UgNnmfo1OhxZ%2B0uCaFRaEPBDo435HtAUKUuuHYML29lsMGOqUBeIa5ds5KgbNBqc9%2BsdEGwpeH%2FuskVD4Mcb2xONqqFawQk%2BF927GdEI9HBDIse9HCBsuf7ZtSDPl8JvzRx440%2FbZGt2c53%2FW80%2Bsryo47bnOTRh9TtbUtWy21doDnX0o%2B%2FhrfgGixGmzKv8iGd%2F4Hfy6xmQAArWwD9uMdT%2BkIFt6ewBYElT%2B8gC6rhI0My019kbr6RoF10IeTuwL6CnRQ09hxBWRq&X-Amz-Signature=c86893db91bf3a7a22daace572fa1a43c365a62a430d04b368a5b5202c9552fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CEU35S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFYZzZBopirv0rkU4DRDfmWvk7ts5Lr3IsdnZ1wHiO9AiEAhRjUDYx4uMpQtVyWu4LP6SjPKCWQrMYzPQgQ6u4QOPEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmeyetPxNMJ9eJuSCrcA6RuMiGXpnn8%2FqFGl8DCslRtsj7bwOWum%2FCVmLHbzn7CY1LVi3jBB9vZ8BTQyxAtnDOj0tU%2BRIsBObLg8jyZ31wt0NmEQV3ychwnr%2BDAAAu13DOujKLx5wl68Wt0cOjWBq8fcWvZaXOhS1JbNvNK4TOJB8H0GPKDJI92qoik8XgWkqjIeJ5j09AngL6CD4bXLXgpP6CDRj1DkvlE%2F1uKdo6jIm4nIqDV3%2FC9xkwyz2AG5AuJnlFpKsqKGaVeQj3lzyC3ww4xEpBD1FA0D%2F9eKLEZGoOFHOZ8CepnzFYagKo%2BYntANaN9BcKYes0AmiKzK%2B7xu6QX%2FrTS36MwOlezR%2FCyytg6Ajdj%2FwC6w27gt4moxIcVZNpfuAiOgHg307oxz6Oxn4W0fQr5ZxHYvusQPIoM5nUlgts04108FjpP0pDtNKTIzrJj36O%2B44bj3MjonqAHEENEVdzusfPnHTlc5pcomcPzaM7rz%2FMH95aMNjkvgQNeWE8EBf%2BJLizu27pGzehUGxFiKnzn8SIOOgTHw5xMOnOJ0wU4Bz%2FdM%2FIphanUFSuPm2IK2wwYXy6IPhvYvDdmZNYi2s1GItEGRp3%2FI4UgNnmfo1OhxZ%2B0uCaFRaEPBDo435HtAUKUuuHYML29lsMGOqUBeIa5ds5KgbNBqc9%2BsdEGwpeH%2FuskVD4Mcb2xONqqFawQk%2BF927GdEI9HBDIse9HCBsuf7ZtSDPl8JvzRx440%2FbZGt2c53%2FW80%2Bsryo47bnOTRh9TtbUtWy21doDnX0o%2B%2FhrfgGixGmzKv8iGd%2F4Hfy6xmQAArWwD9uMdT%2BkIFt6ewBYElT%2B8gC6rhI0My019kbr6RoF10IeTuwL6CnRQ09hxBWRq&X-Amz-Signature=2155dca75ca41dd043701d711e8bb9b3d2cee3d08783f8e247ff9777a01cb1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CEU35S%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFYZzZBopirv0rkU4DRDfmWvk7ts5Lr3IsdnZ1wHiO9AiEAhRjUDYx4uMpQtVyWu4LP6SjPKCWQrMYzPQgQ6u4QOPEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmeyetPxNMJ9eJuSCrcA6RuMiGXpnn8%2FqFGl8DCslRtsj7bwOWum%2FCVmLHbzn7CY1LVi3jBB9vZ8BTQyxAtnDOj0tU%2BRIsBObLg8jyZ31wt0NmEQV3ychwnr%2BDAAAu13DOujKLx5wl68Wt0cOjWBq8fcWvZaXOhS1JbNvNK4TOJB8H0GPKDJI92qoik8XgWkqjIeJ5j09AngL6CD4bXLXgpP6CDRj1DkvlE%2F1uKdo6jIm4nIqDV3%2FC9xkwyz2AG5AuJnlFpKsqKGaVeQj3lzyC3ww4xEpBD1FA0D%2F9eKLEZGoOFHOZ8CepnzFYagKo%2BYntANaN9BcKYes0AmiKzK%2B7xu6QX%2FrTS36MwOlezR%2FCyytg6Ajdj%2FwC6w27gt4moxIcVZNpfuAiOgHg307oxz6Oxn4W0fQr5ZxHYvusQPIoM5nUlgts04108FjpP0pDtNKTIzrJj36O%2B44bj3MjonqAHEENEVdzusfPnHTlc5pcomcPzaM7rz%2FMH95aMNjkvgQNeWE8EBf%2BJLizu27pGzehUGxFiKnzn8SIOOgTHw5xMOnOJ0wU4Bz%2FdM%2FIphanUFSuPm2IK2wwYXy6IPhvYvDdmZNYi2s1GItEGRp3%2FI4UgNnmfo1OhxZ%2B0uCaFRaEPBDo435HtAUKUuuHYML29lsMGOqUBeIa5ds5KgbNBqc9%2BsdEGwpeH%2FuskVD4Mcb2xONqqFawQk%2BF927GdEI9HBDIse9HCBsuf7ZtSDPl8JvzRx440%2FbZGt2c53%2FW80%2Bsryo47bnOTRh9TtbUtWy21doDnX0o%2B%2FhrfgGixGmzKv8iGd%2F4Hfy6xmQAArWwD9uMdT%2BkIFt6ewBYElT%2B8gC6rhI0My019kbr6RoF10IeTuwL6CnRQ09hxBWRq&X-Amz-Signature=781ba5698620097b29456dfb8047b30693bb6d1f9810fe686f2c8a6faef1f21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
