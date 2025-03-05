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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYRV6F3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Bd7PZ2sPCfYj68pR07J4w%2FHpiplmp5puwEw5xnjxiAiEAvTt4kwl%2FPoaGWy1Fe18AwhcAqXJnOfiRVr47uXyJBOoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKQzUiR%2FYRa6kgvIXircA3VjOE4vQljDGQxcdNi4bXzw2junGDac%2F7S5C2VUMEAytnVneUjcXAS1vXBMwKGPsg7SoMoIhKlVhyAtHlP%2BShuk4O3%2FOeGE9ylEnd%2BneRkiHKXnrLcFfNIaxWdsNVHUw6%2BN6AZZWXhvOH5hfR9jjMv6g9YUUc6PBjwezzyeQahx8eTQnhiC4xun8PFqMOskUAn6AZuACdw%2BMfnJSKHtCxOH4Zq0MztwVaH4zWnZ5pPA%2BFvCQCFJX4cGPBHSkd2HHoI5qWsGYDB3TLQyvEnzkKBuP3rimOQUJr0ySLrvqSlX3Oqj8c4AqPtxNUWAv6Me2154Z6cl7Wjid%2BEDzSwPtfzp31iE8iHctTso3j%2F2IqeSRUfuOl0oUMEol0syuEAI73itfgsIsmfXFPgAk5lSpvQLXuhtIioS4A4X%2BaRs7QceGah8aUb4yaeS53tUEHMCljrIKeNZRTfy3zb4qKrKGbFcdn7wQ9vDoUE0w95C9ndosqXzOpIR2ZaVk672V28d6BBUqxWcfl3vqcAgNLiRsZcej08IKQVQ4c55eAfqyRG4SGa2YNQyZb2yPKbRXjqFF5bIH9qtZ%2FZZ8VjxRYVGfW72Ae3uPdMGYPxGU0MomQsE4zSwZxk344weNUxkMNCDor4GOqUBPBuovgY6GcEJARFRTKlyBGbto%2Bpqz%2FHMqVPtWK7OOWkKpwZH9BeIwCzw05bbpgePhuGq%2BPp53gPieRnUQdK7JpPkuQ%2FTkbw3faFUp1HYi3%2BIwJozhbMMhe2q9Ll03uu%2BmJ%2BGi8pBlSzqeu12Hv0xsVwo6Qlgxx5CEseLTAreA0FUBmychpvs1ZV2SNy9Z89EEAxajQ09oGG3WqYRkl4Bda3EC3Nx&X-Amz-Signature=6bc5c71f8d21ed59219ec5466a806c77921bc0a593d775185fb0ea13a273396f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYRV6F3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Bd7PZ2sPCfYj68pR07J4w%2FHpiplmp5puwEw5xnjxiAiEAvTt4kwl%2FPoaGWy1Fe18AwhcAqXJnOfiRVr47uXyJBOoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKQzUiR%2FYRa6kgvIXircA3VjOE4vQljDGQxcdNi4bXzw2junGDac%2F7S5C2VUMEAytnVneUjcXAS1vXBMwKGPsg7SoMoIhKlVhyAtHlP%2BShuk4O3%2FOeGE9ylEnd%2BneRkiHKXnrLcFfNIaxWdsNVHUw6%2BN6AZZWXhvOH5hfR9jjMv6g9YUUc6PBjwezzyeQahx8eTQnhiC4xun8PFqMOskUAn6AZuACdw%2BMfnJSKHtCxOH4Zq0MztwVaH4zWnZ5pPA%2BFvCQCFJX4cGPBHSkd2HHoI5qWsGYDB3TLQyvEnzkKBuP3rimOQUJr0ySLrvqSlX3Oqj8c4AqPtxNUWAv6Me2154Z6cl7Wjid%2BEDzSwPtfzp31iE8iHctTso3j%2F2IqeSRUfuOl0oUMEol0syuEAI73itfgsIsmfXFPgAk5lSpvQLXuhtIioS4A4X%2BaRs7QceGah8aUb4yaeS53tUEHMCljrIKeNZRTfy3zb4qKrKGbFcdn7wQ9vDoUE0w95C9ndosqXzOpIR2ZaVk672V28d6BBUqxWcfl3vqcAgNLiRsZcej08IKQVQ4c55eAfqyRG4SGa2YNQyZb2yPKbRXjqFF5bIH9qtZ%2FZZ8VjxRYVGfW72Ae3uPdMGYPxGU0MomQsE4zSwZxk344weNUxkMNCDor4GOqUBPBuovgY6GcEJARFRTKlyBGbto%2Bpqz%2FHMqVPtWK7OOWkKpwZH9BeIwCzw05bbpgePhuGq%2BPp53gPieRnUQdK7JpPkuQ%2FTkbw3faFUp1HYi3%2BIwJozhbMMhe2q9Ll03uu%2BmJ%2BGi8pBlSzqeu12Hv0xsVwo6Qlgxx5CEseLTAreA0FUBmychpvs1ZV2SNy9Z89EEAxajQ09oGG3WqYRkl4Bda3EC3Nx&X-Amz-Signature=88cddd64f6e30bc7e37719beebd7c41b454aee459cbec751346bb54d6cf58b80&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYRV6F3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Bd7PZ2sPCfYj68pR07J4w%2FHpiplmp5puwEw5xnjxiAiEAvTt4kwl%2FPoaGWy1Fe18AwhcAqXJnOfiRVr47uXyJBOoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKQzUiR%2FYRa6kgvIXircA3VjOE4vQljDGQxcdNi4bXzw2junGDac%2F7S5C2VUMEAytnVneUjcXAS1vXBMwKGPsg7SoMoIhKlVhyAtHlP%2BShuk4O3%2FOeGE9ylEnd%2BneRkiHKXnrLcFfNIaxWdsNVHUw6%2BN6AZZWXhvOH5hfR9jjMv6g9YUUc6PBjwezzyeQahx8eTQnhiC4xun8PFqMOskUAn6AZuACdw%2BMfnJSKHtCxOH4Zq0MztwVaH4zWnZ5pPA%2BFvCQCFJX4cGPBHSkd2HHoI5qWsGYDB3TLQyvEnzkKBuP3rimOQUJr0ySLrvqSlX3Oqj8c4AqPtxNUWAv6Me2154Z6cl7Wjid%2BEDzSwPtfzp31iE8iHctTso3j%2F2IqeSRUfuOl0oUMEol0syuEAI73itfgsIsmfXFPgAk5lSpvQLXuhtIioS4A4X%2BaRs7QceGah8aUb4yaeS53tUEHMCljrIKeNZRTfy3zb4qKrKGbFcdn7wQ9vDoUE0w95C9ndosqXzOpIR2ZaVk672V28d6BBUqxWcfl3vqcAgNLiRsZcej08IKQVQ4c55eAfqyRG4SGa2YNQyZb2yPKbRXjqFF5bIH9qtZ%2FZZ8VjxRYVGfW72Ae3uPdMGYPxGU0MomQsE4zSwZxk344weNUxkMNCDor4GOqUBPBuovgY6GcEJARFRTKlyBGbto%2Bpqz%2FHMqVPtWK7OOWkKpwZH9BeIwCzw05bbpgePhuGq%2BPp53gPieRnUQdK7JpPkuQ%2FTkbw3faFUp1HYi3%2BIwJozhbMMhe2q9Ll03uu%2BmJ%2BGi8pBlSzqeu12Hv0xsVwo6Qlgxx5CEseLTAreA0FUBmychpvs1ZV2SNy9Z89EEAxajQ09oGG3WqYRkl4Bda3EC3Nx&X-Amz-Signature=6c58e8799fcce4e9e806736303f1b1e4ccba21e9bb11d0d40d18f1f4366e4bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYRV6F3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Bd7PZ2sPCfYj68pR07J4w%2FHpiplmp5puwEw5xnjxiAiEAvTt4kwl%2FPoaGWy1Fe18AwhcAqXJnOfiRVr47uXyJBOoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKQzUiR%2FYRa6kgvIXircA3VjOE4vQljDGQxcdNi4bXzw2junGDac%2F7S5C2VUMEAytnVneUjcXAS1vXBMwKGPsg7SoMoIhKlVhyAtHlP%2BShuk4O3%2FOeGE9ylEnd%2BneRkiHKXnrLcFfNIaxWdsNVHUw6%2BN6AZZWXhvOH5hfR9jjMv6g9YUUc6PBjwezzyeQahx8eTQnhiC4xun8PFqMOskUAn6AZuACdw%2BMfnJSKHtCxOH4Zq0MztwVaH4zWnZ5pPA%2BFvCQCFJX4cGPBHSkd2HHoI5qWsGYDB3TLQyvEnzkKBuP3rimOQUJr0ySLrvqSlX3Oqj8c4AqPtxNUWAv6Me2154Z6cl7Wjid%2BEDzSwPtfzp31iE8iHctTso3j%2F2IqeSRUfuOl0oUMEol0syuEAI73itfgsIsmfXFPgAk5lSpvQLXuhtIioS4A4X%2BaRs7QceGah8aUb4yaeS53tUEHMCljrIKeNZRTfy3zb4qKrKGbFcdn7wQ9vDoUE0w95C9ndosqXzOpIR2ZaVk672V28d6BBUqxWcfl3vqcAgNLiRsZcej08IKQVQ4c55eAfqyRG4SGa2YNQyZb2yPKbRXjqFF5bIH9qtZ%2FZZ8VjxRYVGfW72Ae3uPdMGYPxGU0MomQsE4zSwZxk344weNUxkMNCDor4GOqUBPBuovgY6GcEJARFRTKlyBGbto%2Bpqz%2FHMqVPtWK7OOWkKpwZH9BeIwCzw05bbpgePhuGq%2BPp53gPieRnUQdK7JpPkuQ%2FTkbw3faFUp1HYi3%2BIwJozhbMMhe2q9Ll03uu%2BmJ%2BGi8pBlSzqeu12Hv0xsVwo6Qlgxx5CEseLTAreA0FUBmychpvs1ZV2SNy9Z89EEAxajQ09oGG3WqYRkl4Bda3EC3Nx&X-Amz-Signature=40e24b6be9edaada21af9c56fa41b644356ec04257b19c598557e1aa6f27314c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYRV6F3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Bd7PZ2sPCfYj68pR07J4w%2FHpiplmp5puwEw5xnjxiAiEAvTt4kwl%2FPoaGWy1Fe18AwhcAqXJnOfiRVr47uXyJBOoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKQzUiR%2FYRa6kgvIXircA3VjOE4vQljDGQxcdNi4bXzw2junGDac%2F7S5C2VUMEAytnVneUjcXAS1vXBMwKGPsg7SoMoIhKlVhyAtHlP%2BShuk4O3%2FOeGE9ylEnd%2BneRkiHKXnrLcFfNIaxWdsNVHUw6%2BN6AZZWXhvOH5hfR9jjMv6g9YUUc6PBjwezzyeQahx8eTQnhiC4xun8PFqMOskUAn6AZuACdw%2BMfnJSKHtCxOH4Zq0MztwVaH4zWnZ5pPA%2BFvCQCFJX4cGPBHSkd2HHoI5qWsGYDB3TLQyvEnzkKBuP3rimOQUJr0ySLrvqSlX3Oqj8c4AqPtxNUWAv6Me2154Z6cl7Wjid%2BEDzSwPtfzp31iE8iHctTso3j%2F2IqeSRUfuOl0oUMEol0syuEAI73itfgsIsmfXFPgAk5lSpvQLXuhtIioS4A4X%2BaRs7QceGah8aUb4yaeS53tUEHMCljrIKeNZRTfy3zb4qKrKGbFcdn7wQ9vDoUE0w95C9ndosqXzOpIR2ZaVk672V28d6BBUqxWcfl3vqcAgNLiRsZcej08IKQVQ4c55eAfqyRG4SGa2YNQyZb2yPKbRXjqFF5bIH9qtZ%2FZZ8VjxRYVGfW72Ae3uPdMGYPxGU0MomQsE4zSwZxk344weNUxkMNCDor4GOqUBPBuovgY6GcEJARFRTKlyBGbto%2Bpqz%2FHMqVPtWK7OOWkKpwZH9BeIwCzw05bbpgePhuGq%2BPp53gPieRnUQdK7JpPkuQ%2FTkbw3faFUp1HYi3%2BIwJozhbMMhe2q9Ll03uu%2BmJ%2BGi8pBlSzqeu12Hv0xsVwo6Qlgxx5CEseLTAreA0FUBmychpvs1ZV2SNy9Z89EEAxajQ09oGG3WqYRkl4Bda3EC3Nx&X-Amz-Signature=463257572038f96e8cec59e0421e79688ef487650c01c4cabc0f93354b9fd672&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYRV6F3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Bd7PZ2sPCfYj68pR07J4w%2FHpiplmp5puwEw5xnjxiAiEAvTt4kwl%2FPoaGWy1Fe18AwhcAqXJnOfiRVr47uXyJBOoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKQzUiR%2FYRa6kgvIXircA3VjOE4vQljDGQxcdNi4bXzw2junGDac%2F7S5C2VUMEAytnVneUjcXAS1vXBMwKGPsg7SoMoIhKlVhyAtHlP%2BShuk4O3%2FOeGE9ylEnd%2BneRkiHKXnrLcFfNIaxWdsNVHUw6%2BN6AZZWXhvOH5hfR9jjMv6g9YUUc6PBjwezzyeQahx8eTQnhiC4xun8PFqMOskUAn6AZuACdw%2BMfnJSKHtCxOH4Zq0MztwVaH4zWnZ5pPA%2BFvCQCFJX4cGPBHSkd2HHoI5qWsGYDB3TLQyvEnzkKBuP3rimOQUJr0ySLrvqSlX3Oqj8c4AqPtxNUWAv6Me2154Z6cl7Wjid%2BEDzSwPtfzp31iE8iHctTso3j%2F2IqeSRUfuOl0oUMEol0syuEAI73itfgsIsmfXFPgAk5lSpvQLXuhtIioS4A4X%2BaRs7QceGah8aUb4yaeS53tUEHMCljrIKeNZRTfy3zb4qKrKGbFcdn7wQ9vDoUE0w95C9ndosqXzOpIR2ZaVk672V28d6BBUqxWcfl3vqcAgNLiRsZcej08IKQVQ4c55eAfqyRG4SGa2YNQyZb2yPKbRXjqFF5bIH9qtZ%2FZZ8VjxRYVGfW72Ae3uPdMGYPxGU0MomQsE4zSwZxk344weNUxkMNCDor4GOqUBPBuovgY6GcEJARFRTKlyBGbto%2Bpqz%2FHMqVPtWK7OOWkKpwZH9BeIwCzw05bbpgePhuGq%2BPp53gPieRnUQdK7JpPkuQ%2FTkbw3faFUp1HYi3%2BIwJozhbMMhe2q9Ll03uu%2BmJ%2BGi8pBlSzqeu12Hv0xsVwo6Qlgxx5CEseLTAreA0FUBmychpvs1ZV2SNy9Z89EEAxajQ09oGG3WqYRkl4Bda3EC3Nx&X-Amz-Signature=5746304e9cdadd24e5176e6e04dc2584c63e9789b232933bfe2e3a4a6636b728&X-Amz-SignedHeaders=host&x-id=GetObject)
