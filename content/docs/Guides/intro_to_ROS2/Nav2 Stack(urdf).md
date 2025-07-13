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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRGD4NU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECAwqXSvAKW3XrfYHvAFu5y0BpcBTaYwUPaTlo3wBjgIhAMdphjYNqg1Jto74KaIgJCegQKeN39SFSPCe1c%2BbjqBwKv8DCBAQABoMNjM3NDIzMTgzODA1IgzFkrgf4usAgyeTNDUq3AMt4ifdWV3Vkph6O%2FHVnWJEf9Jqwb5s8nQan3ToPPjtZ4Y3CkDIsaxUdnsfIPCfY3tLPDjh5KJX1clB%2Fc3x7SiocZzWZtKVo15AblCOdLEeg%2BE5NP%2BGrFBEDs4MebEWcFZcjik3VHUx%2BpOlSeZKKZ0ENB1iN%2BxnUxjADrq%2FsbxY1Y3SXA4qsOcIBctm6%2Brnn4SPYbGLRiAtQuMpoKjOSmr%2Blptfm1H12I6PtWbMiEv%2F3ejino0Bu72z2OWmtcYWxQHGfnBUutDQDdAkheVUBfe5S%2FScSiFb8nxt4HhmgjcFBjPRrL3IsdESMEFe9lbBptLDCqqHSnEMa8xNSaSFiOY0rHSgEgoRZMtGCFo9YdcsNn3mI7FTu9QnGwspF4%2F2%2Bo2G62LxYQluTi89msSqBc23LL%2Fl1PsdHnyrOOaoBsELfEb2D0by0ZOWtG5x8uDbJ%2FDEdmv8aaI%2BAd4GPpTGaKgp0kQJ9u9U5vjiuvzqSoXz09CQcAjQUVdaC2kmo4R9AmUuOjlYrgfTOuO5aT%2FEYfXP%2BF2A5a0wNEF6QtEqm6HC9pe7QM6OyEz90LD0oilS8nIvV%2Ff4o4wndlHNGnETwzawCPl%2BfjJVr%2BhCu%2FRLspujWaH6kEokuxAnNtgNbzDRqs3DBjqkAejPgqYBmrcEkatirK9jUn%2B9FmeUpwWBKGIvkb%2BCXt8WsS%2Br73Bw0j3MCxE%2Bpbu18gi5BI5pKmU9p13R0AtD6EUIQLdvsw7Amizp5pKXMuxuJm1EB54Uhve%2BsQqmMDYTpUbd388MTubfULxj2ThbdsrWpCbeKJEJBngf27%2BsuJWwJOapV8%2BWEO11N%2FX0Rg4R6ie2HGZ0PGH93ZmjtdzbCf4IYh08&X-Amz-Signature=f679bc422f208aec9aea2cf14da10f675c4ada8b0e33d587378a0d38f8e21086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRGD4NU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECAwqXSvAKW3XrfYHvAFu5y0BpcBTaYwUPaTlo3wBjgIhAMdphjYNqg1Jto74KaIgJCegQKeN39SFSPCe1c%2BbjqBwKv8DCBAQABoMNjM3NDIzMTgzODA1IgzFkrgf4usAgyeTNDUq3AMt4ifdWV3Vkph6O%2FHVnWJEf9Jqwb5s8nQan3ToPPjtZ4Y3CkDIsaxUdnsfIPCfY3tLPDjh5KJX1clB%2Fc3x7SiocZzWZtKVo15AblCOdLEeg%2BE5NP%2BGrFBEDs4MebEWcFZcjik3VHUx%2BpOlSeZKKZ0ENB1iN%2BxnUxjADrq%2FsbxY1Y3SXA4qsOcIBctm6%2Brnn4SPYbGLRiAtQuMpoKjOSmr%2Blptfm1H12I6PtWbMiEv%2F3ejino0Bu72z2OWmtcYWxQHGfnBUutDQDdAkheVUBfe5S%2FScSiFb8nxt4HhmgjcFBjPRrL3IsdESMEFe9lbBptLDCqqHSnEMa8xNSaSFiOY0rHSgEgoRZMtGCFo9YdcsNn3mI7FTu9QnGwspF4%2F2%2Bo2G62LxYQluTi89msSqBc23LL%2Fl1PsdHnyrOOaoBsELfEb2D0by0ZOWtG5x8uDbJ%2FDEdmv8aaI%2BAd4GPpTGaKgp0kQJ9u9U5vjiuvzqSoXz09CQcAjQUVdaC2kmo4R9AmUuOjlYrgfTOuO5aT%2FEYfXP%2BF2A5a0wNEF6QtEqm6HC9pe7QM6OyEz90LD0oilS8nIvV%2Ff4o4wndlHNGnETwzawCPl%2BfjJVr%2BhCu%2FRLspujWaH6kEokuxAnNtgNbzDRqs3DBjqkAejPgqYBmrcEkatirK9jUn%2B9FmeUpwWBKGIvkb%2BCXt8WsS%2Br73Bw0j3MCxE%2Bpbu18gi5BI5pKmU9p13R0AtD6EUIQLdvsw7Amizp5pKXMuxuJm1EB54Uhve%2BsQqmMDYTpUbd388MTubfULxj2ThbdsrWpCbeKJEJBngf27%2BsuJWwJOapV8%2BWEO11N%2FX0Rg4R6ie2HGZ0PGH93ZmjtdzbCf4IYh08&X-Amz-Signature=223961d00281898a08c842430d03b853f2906954bd25094405ed4c28354e497c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRGD4NU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECAwqXSvAKW3XrfYHvAFu5y0BpcBTaYwUPaTlo3wBjgIhAMdphjYNqg1Jto74KaIgJCegQKeN39SFSPCe1c%2BbjqBwKv8DCBAQABoMNjM3NDIzMTgzODA1IgzFkrgf4usAgyeTNDUq3AMt4ifdWV3Vkph6O%2FHVnWJEf9Jqwb5s8nQan3ToPPjtZ4Y3CkDIsaxUdnsfIPCfY3tLPDjh5KJX1clB%2Fc3x7SiocZzWZtKVo15AblCOdLEeg%2BE5NP%2BGrFBEDs4MebEWcFZcjik3VHUx%2BpOlSeZKKZ0ENB1iN%2BxnUxjADrq%2FsbxY1Y3SXA4qsOcIBctm6%2Brnn4SPYbGLRiAtQuMpoKjOSmr%2Blptfm1H12I6PtWbMiEv%2F3ejino0Bu72z2OWmtcYWxQHGfnBUutDQDdAkheVUBfe5S%2FScSiFb8nxt4HhmgjcFBjPRrL3IsdESMEFe9lbBptLDCqqHSnEMa8xNSaSFiOY0rHSgEgoRZMtGCFo9YdcsNn3mI7FTu9QnGwspF4%2F2%2Bo2G62LxYQluTi89msSqBc23LL%2Fl1PsdHnyrOOaoBsELfEb2D0by0ZOWtG5x8uDbJ%2FDEdmv8aaI%2BAd4GPpTGaKgp0kQJ9u9U5vjiuvzqSoXz09CQcAjQUVdaC2kmo4R9AmUuOjlYrgfTOuO5aT%2FEYfXP%2BF2A5a0wNEF6QtEqm6HC9pe7QM6OyEz90LD0oilS8nIvV%2Ff4o4wndlHNGnETwzawCPl%2BfjJVr%2BhCu%2FRLspujWaH6kEokuxAnNtgNbzDRqs3DBjqkAejPgqYBmrcEkatirK9jUn%2B9FmeUpwWBKGIvkb%2BCXt8WsS%2Br73Bw0j3MCxE%2Bpbu18gi5BI5pKmU9p13R0AtD6EUIQLdvsw7Amizp5pKXMuxuJm1EB54Uhve%2BsQqmMDYTpUbd388MTubfULxj2ThbdsrWpCbeKJEJBngf27%2BsuJWwJOapV8%2BWEO11N%2FX0Rg4R6ie2HGZ0PGH93ZmjtdzbCf4IYh08&X-Amz-Signature=7f17ceacde3553ce7d24c7ccc8fdf0ca1f8fc5b58a0587b86b93df915a694774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRGD4NU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECAwqXSvAKW3XrfYHvAFu5y0BpcBTaYwUPaTlo3wBjgIhAMdphjYNqg1Jto74KaIgJCegQKeN39SFSPCe1c%2BbjqBwKv8DCBAQABoMNjM3NDIzMTgzODA1IgzFkrgf4usAgyeTNDUq3AMt4ifdWV3Vkph6O%2FHVnWJEf9Jqwb5s8nQan3ToPPjtZ4Y3CkDIsaxUdnsfIPCfY3tLPDjh5KJX1clB%2Fc3x7SiocZzWZtKVo15AblCOdLEeg%2BE5NP%2BGrFBEDs4MebEWcFZcjik3VHUx%2BpOlSeZKKZ0ENB1iN%2BxnUxjADrq%2FsbxY1Y3SXA4qsOcIBctm6%2Brnn4SPYbGLRiAtQuMpoKjOSmr%2Blptfm1H12I6PtWbMiEv%2F3ejino0Bu72z2OWmtcYWxQHGfnBUutDQDdAkheVUBfe5S%2FScSiFb8nxt4HhmgjcFBjPRrL3IsdESMEFe9lbBptLDCqqHSnEMa8xNSaSFiOY0rHSgEgoRZMtGCFo9YdcsNn3mI7FTu9QnGwspF4%2F2%2Bo2G62LxYQluTi89msSqBc23LL%2Fl1PsdHnyrOOaoBsELfEb2D0by0ZOWtG5x8uDbJ%2FDEdmv8aaI%2BAd4GPpTGaKgp0kQJ9u9U5vjiuvzqSoXz09CQcAjQUVdaC2kmo4R9AmUuOjlYrgfTOuO5aT%2FEYfXP%2BF2A5a0wNEF6QtEqm6HC9pe7QM6OyEz90LD0oilS8nIvV%2Ff4o4wndlHNGnETwzawCPl%2BfjJVr%2BhCu%2FRLspujWaH6kEokuxAnNtgNbzDRqs3DBjqkAejPgqYBmrcEkatirK9jUn%2B9FmeUpwWBKGIvkb%2BCXt8WsS%2Br73Bw0j3MCxE%2Bpbu18gi5BI5pKmU9p13R0AtD6EUIQLdvsw7Amizp5pKXMuxuJm1EB54Uhve%2BsQqmMDYTpUbd388MTubfULxj2ThbdsrWpCbeKJEJBngf27%2BsuJWwJOapV8%2BWEO11N%2FX0Rg4R6ie2HGZ0PGH93ZmjtdzbCf4IYh08&X-Amz-Signature=adbeac27211e31900b86d6befdd464030f2e43cf8542637c1ff742b1e99de55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRGD4NU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECAwqXSvAKW3XrfYHvAFu5y0BpcBTaYwUPaTlo3wBjgIhAMdphjYNqg1Jto74KaIgJCegQKeN39SFSPCe1c%2BbjqBwKv8DCBAQABoMNjM3NDIzMTgzODA1IgzFkrgf4usAgyeTNDUq3AMt4ifdWV3Vkph6O%2FHVnWJEf9Jqwb5s8nQan3ToPPjtZ4Y3CkDIsaxUdnsfIPCfY3tLPDjh5KJX1clB%2Fc3x7SiocZzWZtKVo15AblCOdLEeg%2BE5NP%2BGrFBEDs4MebEWcFZcjik3VHUx%2BpOlSeZKKZ0ENB1iN%2BxnUxjADrq%2FsbxY1Y3SXA4qsOcIBctm6%2Brnn4SPYbGLRiAtQuMpoKjOSmr%2Blptfm1H12I6PtWbMiEv%2F3ejino0Bu72z2OWmtcYWxQHGfnBUutDQDdAkheVUBfe5S%2FScSiFb8nxt4HhmgjcFBjPRrL3IsdESMEFe9lbBptLDCqqHSnEMa8xNSaSFiOY0rHSgEgoRZMtGCFo9YdcsNn3mI7FTu9QnGwspF4%2F2%2Bo2G62LxYQluTi89msSqBc23LL%2Fl1PsdHnyrOOaoBsELfEb2D0by0ZOWtG5x8uDbJ%2FDEdmv8aaI%2BAd4GPpTGaKgp0kQJ9u9U5vjiuvzqSoXz09CQcAjQUVdaC2kmo4R9AmUuOjlYrgfTOuO5aT%2FEYfXP%2BF2A5a0wNEF6QtEqm6HC9pe7QM6OyEz90LD0oilS8nIvV%2Ff4o4wndlHNGnETwzawCPl%2BfjJVr%2BhCu%2FRLspujWaH6kEokuxAnNtgNbzDRqs3DBjqkAejPgqYBmrcEkatirK9jUn%2B9FmeUpwWBKGIvkb%2BCXt8WsS%2Br73Bw0j3MCxE%2Bpbu18gi5BI5pKmU9p13R0AtD6EUIQLdvsw7Amizp5pKXMuxuJm1EB54Uhve%2BsQqmMDYTpUbd388MTubfULxj2ThbdsrWpCbeKJEJBngf27%2BsuJWwJOapV8%2BWEO11N%2FX0Rg4R6ie2HGZ0PGH93ZmjtdzbCf4IYh08&X-Amz-Signature=5a486b75bc01be6fbd4c1e8bce6c3f3b31aac98656707c3cb22afcc1718bf855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRGD4NU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCECAwqXSvAKW3XrfYHvAFu5y0BpcBTaYwUPaTlo3wBjgIhAMdphjYNqg1Jto74KaIgJCegQKeN39SFSPCe1c%2BbjqBwKv8DCBAQABoMNjM3NDIzMTgzODA1IgzFkrgf4usAgyeTNDUq3AMt4ifdWV3Vkph6O%2FHVnWJEf9Jqwb5s8nQan3ToPPjtZ4Y3CkDIsaxUdnsfIPCfY3tLPDjh5KJX1clB%2Fc3x7SiocZzWZtKVo15AblCOdLEeg%2BE5NP%2BGrFBEDs4MebEWcFZcjik3VHUx%2BpOlSeZKKZ0ENB1iN%2BxnUxjADrq%2FsbxY1Y3SXA4qsOcIBctm6%2Brnn4SPYbGLRiAtQuMpoKjOSmr%2Blptfm1H12I6PtWbMiEv%2F3ejino0Bu72z2OWmtcYWxQHGfnBUutDQDdAkheVUBfe5S%2FScSiFb8nxt4HhmgjcFBjPRrL3IsdESMEFe9lbBptLDCqqHSnEMa8xNSaSFiOY0rHSgEgoRZMtGCFo9YdcsNn3mI7FTu9QnGwspF4%2F2%2Bo2G62LxYQluTi89msSqBc23LL%2Fl1PsdHnyrOOaoBsELfEb2D0by0ZOWtG5x8uDbJ%2FDEdmv8aaI%2BAd4GPpTGaKgp0kQJ9u9U5vjiuvzqSoXz09CQcAjQUVdaC2kmo4R9AmUuOjlYrgfTOuO5aT%2FEYfXP%2BF2A5a0wNEF6QtEqm6HC9pe7QM6OyEz90LD0oilS8nIvV%2Ff4o4wndlHNGnETwzawCPl%2BfjJVr%2BhCu%2FRLspujWaH6kEokuxAnNtgNbzDRqs3DBjqkAejPgqYBmrcEkatirK9jUn%2B9FmeUpwWBKGIvkb%2BCXt8WsS%2Br73Bw0j3MCxE%2Bpbu18gi5BI5pKmU9p13R0AtD6EUIQLdvsw7Amizp5pKXMuxuJm1EB54Uhve%2BsQqmMDYTpUbd388MTubfULxj2ThbdsrWpCbeKJEJBngf27%2BsuJWwJOapV8%2BWEO11N%2FX0Rg4R6ie2HGZ0PGH93ZmjtdzbCf4IYh08&X-Amz-Signature=2f509d0ed28d6b99b3165fd64e2df1c1941c47d7cb37a325a756638147b11769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
