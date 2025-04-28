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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUVHENI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwPrmGLBcxfbBWunh%2FJXvY6pETNx9Udw6UUQT45aNgVAIhANNorDUzLV2u%2Fmp1R3q9UnmCVUjc4RwFFWSoqx9PymjGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwOBSK1RBYQ%2BbaGU3Yq3AMKkSVqgmSzxBiAFFO1KLt6JofD2vKYAjCm3yIgnVnCmt8XGkYBCHKJ3VT9BzxKujm%2FJZETSFWOGlxTSpfDk%2B8lDB85aIIhYMoUUUg54QAdOgpUjpe6bD7EptBnKBXezPf2fbxKh27MPnj0qPi2EtuWyQqIICJfj14%2FssOZkZ9F7j%2FUopsH35QwKfgBqAB5PyY32rXusssn0UuUGZUh3iMbX7mtRTOwOF%2BylZibQgKQeLGHBorQ3OlBcWj0Qfn%2FyowTQqDpzMxX7lt0oHzb6Y1o%2BNkFdARUEsVAcU1ch%2FURJngnSKkrx%2FRifLy%2BsVOzzpL0bIfRAyzRGgHXT1FohzWfq1sG0J4J1aZcBDV1Qkjt%2FJfKi5R1zdRzp9EuA7%2BZQn22BVSb4lidMJz%2FKsykmXZmHH3Wa%2FZZ3c1fKCcOShCl6Qk0mhk6hAiXWY4tTOPh5emjcXTErTPyM6B6PaV9FeDWC25rkjj3NEUq0xhGdKW5RVYAGoRgtWRRixxYs0HrvzlCUw31lbe7ed1I3S0HaXCTlYQMCOAq55ihcSfo%2BVFI%2Bl33xrXWNZSazvHZM%2Fjht1IIMQpTj%2BDL6pMkQqGXYhgF2ONorhaGkdZbtpp9G%2BpD4Pjwqr3KHheLK0xF%2BzCtyL3ABjqkAXlJ4jFwTicgXIKfx9H%2BBrgor6%2BpZEHIuDpDh1i%2F4Cuj3IPstcPZGtWsXBFByG8NdfY%2BQf36NXESnXHxjNWgqrnjOTk9x186g8mapbiltx%2BoI%2B%2FY2I76C%2Bx16GJHDriqHY5etcU6qW27ibonwxIkTMRxtiadLfU8ukIMLVuzLUhrR7J%2FweGeGVf7TZApNCrP0W0pP7AIxvMSuRlzo4Bfj%2B24V2ZL&X-Amz-Signature=9dc078beb74c124078214ba5262fe20ac303ba4b19d5dd22514def9e1c3fe83b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUVHENI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwPrmGLBcxfbBWunh%2FJXvY6pETNx9Udw6UUQT45aNgVAIhANNorDUzLV2u%2Fmp1R3q9UnmCVUjc4RwFFWSoqx9PymjGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwOBSK1RBYQ%2BbaGU3Yq3AMKkSVqgmSzxBiAFFO1KLt6JofD2vKYAjCm3yIgnVnCmt8XGkYBCHKJ3VT9BzxKujm%2FJZETSFWOGlxTSpfDk%2B8lDB85aIIhYMoUUUg54QAdOgpUjpe6bD7EptBnKBXezPf2fbxKh27MPnj0qPi2EtuWyQqIICJfj14%2FssOZkZ9F7j%2FUopsH35QwKfgBqAB5PyY32rXusssn0UuUGZUh3iMbX7mtRTOwOF%2BylZibQgKQeLGHBorQ3OlBcWj0Qfn%2FyowTQqDpzMxX7lt0oHzb6Y1o%2BNkFdARUEsVAcU1ch%2FURJngnSKkrx%2FRifLy%2BsVOzzpL0bIfRAyzRGgHXT1FohzWfq1sG0J4J1aZcBDV1Qkjt%2FJfKi5R1zdRzp9EuA7%2BZQn22BVSb4lidMJz%2FKsykmXZmHH3Wa%2FZZ3c1fKCcOShCl6Qk0mhk6hAiXWY4tTOPh5emjcXTErTPyM6B6PaV9FeDWC25rkjj3NEUq0xhGdKW5RVYAGoRgtWRRixxYs0HrvzlCUw31lbe7ed1I3S0HaXCTlYQMCOAq55ihcSfo%2BVFI%2Bl33xrXWNZSazvHZM%2Fjht1IIMQpTj%2BDL6pMkQqGXYhgF2ONorhaGkdZbtpp9G%2BpD4Pjwqr3KHheLK0xF%2BzCtyL3ABjqkAXlJ4jFwTicgXIKfx9H%2BBrgor6%2BpZEHIuDpDh1i%2F4Cuj3IPstcPZGtWsXBFByG8NdfY%2BQf36NXESnXHxjNWgqrnjOTk9x186g8mapbiltx%2BoI%2B%2FY2I76C%2Bx16GJHDriqHY5etcU6qW27ibonwxIkTMRxtiadLfU8ukIMLVuzLUhrR7J%2FweGeGVf7TZApNCrP0W0pP7AIxvMSuRlzo4Bfj%2B24V2ZL&X-Amz-Signature=aa24c814057af759dd597f9dc45b177b9aaa309d623901c0086d1dd4c36cd528&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUVHENI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwPrmGLBcxfbBWunh%2FJXvY6pETNx9Udw6UUQT45aNgVAIhANNorDUzLV2u%2Fmp1R3q9UnmCVUjc4RwFFWSoqx9PymjGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwOBSK1RBYQ%2BbaGU3Yq3AMKkSVqgmSzxBiAFFO1KLt6JofD2vKYAjCm3yIgnVnCmt8XGkYBCHKJ3VT9BzxKujm%2FJZETSFWOGlxTSpfDk%2B8lDB85aIIhYMoUUUg54QAdOgpUjpe6bD7EptBnKBXezPf2fbxKh27MPnj0qPi2EtuWyQqIICJfj14%2FssOZkZ9F7j%2FUopsH35QwKfgBqAB5PyY32rXusssn0UuUGZUh3iMbX7mtRTOwOF%2BylZibQgKQeLGHBorQ3OlBcWj0Qfn%2FyowTQqDpzMxX7lt0oHzb6Y1o%2BNkFdARUEsVAcU1ch%2FURJngnSKkrx%2FRifLy%2BsVOzzpL0bIfRAyzRGgHXT1FohzWfq1sG0J4J1aZcBDV1Qkjt%2FJfKi5R1zdRzp9EuA7%2BZQn22BVSb4lidMJz%2FKsykmXZmHH3Wa%2FZZ3c1fKCcOShCl6Qk0mhk6hAiXWY4tTOPh5emjcXTErTPyM6B6PaV9FeDWC25rkjj3NEUq0xhGdKW5RVYAGoRgtWRRixxYs0HrvzlCUw31lbe7ed1I3S0HaXCTlYQMCOAq55ihcSfo%2BVFI%2Bl33xrXWNZSazvHZM%2Fjht1IIMQpTj%2BDL6pMkQqGXYhgF2ONorhaGkdZbtpp9G%2BpD4Pjwqr3KHheLK0xF%2BzCtyL3ABjqkAXlJ4jFwTicgXIKfx9H%2BBrgor6%2BpZEHIuDpDh1i%2F4Cuj3IPstcPZGtWsXBFByG8NdfY%2BQf36NXESnXHxjNWgqrnjOTk9x186g8mapbiltx%2BoI%2B%2FY2I76C%2Bx16GJHDriqHY5etcU6qW27ibonwxIkTMRxtiadLfU8ukIMLVuzLUhrR7J%2FweGeGVf7TZApNCrP0W0pP7AIxvMSuRlzo4Bfj%2B24V2ZL&X-Amz-Signature=944af7fe59d7c0e277a44fed9209e8f5b9bfe4b559bad49b4511069e6a908a49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUVHENI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwPrmGLBcxfbBWunh%2FJXvY6pETNx9Udw6UUQT45aNgVAIhANNorDUzLV2u%2Fmp1R3q9UnmCVUjc4RwFFWSoqx9PymjGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwOBSK1RBYQ%2BbaGU3Yq3AMKkSVqgmSzxBiAFFO1KLt6JofD2vKYAjCm3yIgnVnCmt8XGkYBCHKJ3VT9BzxKujm%2FJZETSFWOGlxTSpfDk%2B8lDB85aIIhYMoUUUg54QAdOgpUjpe6bD7EptBnKBXezPf2fbxKh27MPnj0qPi2EtuWyQqIICJfj14%2FssOZkZ9F7j%2FUopsH35QwKfgBqAB5PyY32rXusssn0UuUGZUh3iMbX7mtRTOwOF%2BylZibQgKQeLGHBorQ3OlBcWj0Qfn%2FyowTQqDpzMxX7lt0oHzb6Y1o%2BNkFdARUEsVAcU1ch%2FURJngnSKkrx%2FRifLy%2BsVOzzpL0bIfRAyzRGgHXT1FohzWfq1sG0J4J1aZcBDV1Qkjt%2FJfKi5R1zdRzp9EuA7%2BZQn22BVSb4lidMJz%2FKsykmXZmHH3Wa%2FZZ3c1fKCcOShCl6Qk0mhk6hAiXWY4tTOPh5emjcXTErTPyM6B6PaV9FeDWC25rkjj3NEUq0xhGdKW5RVYAGoRgtWRRixxYs0HrvzlCUw31lbe7ed1I3S0HaXCTlYQMCOAq55ihcSfo%2BVFI%2Bl33xrXWNZSazvHZM%2Fjht1IIMQpTj%2BDL6pMkQqGXYhgF2ONorhaGkdZbtpp9G%2BpD4Pjwqr3KHheLK0xF%2BzCtyL3ABjqkAXlJ4jFwTicgXIKfx9H%2BBrgor6%2BpZEHIuDpDh1i%2F4Cuj3IPstcPZGtWsXBFByG8NdfY%2BQf36NXESnXHxjNWgqrnjOTk9x186g8mapbiltx%2BoI%2B%2FY2I76C%2Bx16GJHDriqHY5etcU6qW27ibonwxIkTMRxtiadLfU8ukIMLVuzLUhrR7J%2FweGeGVf7TZApNCrP0W0pP7AIxvMSuRlzo4Bfj%2B24V2ZL&X-Amz-Signature=cff885a3a9a64d59f46cc14cf33382bde1cbf06f11153bc90ed27ae58115dfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUVHENI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwPrmGLBcxfbBWunh%2FJXvY6pETNx9Udw6UUQT45aNgVAIhANNorDUzLV2u%2Fmp1R3q9UnmCVUjc4RwFFWSoqx9PymjGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwOBSK1RBYQ%2BbaGU3Yq3AMKkSVqgmSzxBiAFFO1KLt6JofD2vKYAjCm3yIgnVnCmt8XGkYBCHKJ3VT9BzxKujm%2FJZETSFWOGlxTSpfDk%2B8lDB85aIIhYMoUUUg54QAdOgpUjpe6bD7EptBnKBXezPf2fbxKh27MPnj0qPi2EtuWyQqIICJfj14%2FssOZkZ9F7j%2FUopsH35QwKfgBqAB5PyY32rXusssn0UuUGZUh3iMbX7mtRTOwOF%2BylZibQgKQeLGHBorQ3OlBcWj0Qfn%2FyowTQqDpzMxX7lt0oHzb6Y1o%2BNkFdARUEsVAcU1ch%2FURJngnSKkrx%2FRifLy%2BsVOzzpL0bIfRAyzRGgHXT1FohzWfq1sG0J4J1aZcBDV1Qkjt%2FJfKi5R1zdRzp9EuA7%2BZQn22BVSb4lidMJz%2FKsykmXZmHH3Wa%2FZZ3c1fKCcOShCl6Qk0mhk6hAiXWY4tTOPh5emjcXTErTPyM6B6PaV9FeDWC25rkjj3NEUq0xhGdKW5RVYAGoRgtWRRixxYs0HrvzlCUw31lbe7ed1I3S0HaXCTlYQMCOAq55ihcSfo%2BVFI%2Bl33xrXWNZSazvHZM%2Fjht1IIMQpTj%2BDL6pMkQqGXYhgF2ONorhaGkdZbtpp9G%2BpD4Pjwqr3KHheLK0xF%2BzCtyL3ABjqkAXlJ4jFwTicgXIKfx9H%2BBrgor6%2BpZEHIuDpDh1i%2F4Cuj3IPstcPZGtWsXBFByG8NdfY%2BQf36NXESnXHxjNWgqrnjOTk9x186g8mapbiltx%2BoI%2B%2FY2I76C%2Bx16GJHDriqHY5etcU6qW27ibonwxIkTMRxtiadLfU8ukIMLVuzLUhrR7J%2FweGeGVf7TZApNCrP0W0pP7AIxvMSuRlzo4Bfj%2B24V2ZL&X-Amz-Signature=01e3954fab7f7df2ce4e7fe48aa7bc8f338d0c2c359649542c4b01f979776cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DUVHENI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwPrmGLBcxfbBWunh%2FJXvY6pETNx9Udw6UUQT45aNgVAIhANNorDUzLV2u%2Fmp1R3q9UnmCVUjc4RwFFWSoqx9PymjGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwOBSK1RBYQ%2BbaGU3Yq3AMKkSVqgmSzxBiAFFO1KLt6JofD2vKYAjCm3yIgnVnCmt8XGkYBCHKJ3VT9BzxKujm%2FJZETSFWOGlxTSpfDk%2B8lDB85aIIhYMoUUUg54QAdOgpUjpe6bD7EptBnKBXezPf2fbxKh27MPnj0qPi2EtuWyQqIICJfj14%2FssOZkZ9F7j%2FUopsH35QwKfgBqAB5PyY32rXusssn0UuUGZUh3iMbX7mtRTOwOF%2BylZibQgKQeLGHBorQ3OlBcWj0Qfn%2FyowTQqDpzMxX7lt0oHzb6Y1o%2BNkFdARUEsVAcU1ch%2FURJngnSKkrx%2FRifLy%2BsVOzzpL0bIfRAyzRGgHXT1FohzWfq1sG0J4J1aZcBDV1Qkjt%2FJfKi5R1zdRzp9EuA7%2BZQn22BVSb4lidMJz%2FKsykmXZmHH3Wa%2FZZ3c1fKCcOShCl6Qk0mhk6hAiXWY4tTOPh5emjcXTErTPyM6B6PaV9FeDWC25rkjj3NEUq0xhGdKW5RVYAGoRgtWRRixxYs0HrvzlCUw31lbe7ed1I3S0HaXCTlYQMCOAq55ihcSfo%2BVFI%2Bl33xrXWNZSazvHZM%2Fjht1IIMQpTj%2BDL6pMkQqGXYhgF2ONorhaGkdZbtpp9G%2BpD4Pjwqr3KHheLK0xF%2BzCtyL3ABjqkAXlJ4jFwTicgXIKfx9H%2BBrgor6%2BpZEHIuDpDh1i%2F4Cuj3IPstcPZGtWsXBFByG8NdfY%2BQf36NXESnXHxjNWgqrnjOTk9x186g8mapbiltx%2BoI%2B%2FY2I76C%2Bx16GJHDriqHY5etcU6qW27ibonwxIkTMRxtiadLfU8ukIMLVuzLUhrR7J%2FweGeGVf7TZApNCrP0W0pP7AIxvMSuRlzo4Bfj%2B24V2ZL&X-Amz-Signature=7e0b451b078450c46735bdaa23125b737b28a8386f1718288738e0f7b1f0d056&X-Amz-SignedHeaders=host&x-id=GetObject)
