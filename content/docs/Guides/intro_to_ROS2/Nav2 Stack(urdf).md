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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DXZ2Q6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDA7Y4JzCCaHelEFgXB6Jo7a%2B02ovxVrYMrVfLdwnOWJAIhAOUzC8Zb%2BrbSgsUeni%2BZB%2FMwht9M8GThUMLXn1p5L89yKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxquz1s1CdeugnLAGYq3APJP%2Fjx72hb%2FKs8TrRF0l7qOFGWRRqFhzlvcrtAaKCKIUTpNKAnnLmfYgM8sWbb4G78yenVb896sijnq%2BRlao32xL646j%2Fk8yErYKVbwMqg1cu8tOZxch%2B2a4GnhOQ2GZqOAi4DsNLDOFUpfozh%2B7QvCMu10kCrifj8eXmMW2HlkMltErT10pVk4wNe1aHX%2FSK1Cu8q%2BUZMJo7qCUuOHkGMq%2BXcSgElXBs%2FQDLzJ7NASihkptxirDpI40gl4%2Bt%2BE3NbG9f3BvdwxgAQpyBfj0NHKq%2BCwMWZ%2B%2FTU47FKykRodhdj1XSpymUbpBONQacV%2BI1U9ovBQkjvUDjQVEvqMe7A5z1jv%2FR3ABlJpSnVQzWTkN2nck324f0j8bVu%2Fg9oXP8brc1y0u8IMxMdxUnc9EAfoMKEmZf0Mr94t9m7%2BVRSeJDZqnwLEv1FUu%2Brij3WjxTedJu8rOo2kr%2FnVIz2mKzUlsXiqYnMg%2FYNP09J1mMTlFT5tHfTFyDnwBdhdNJMFORGbFP%2BQkI1tnb6zuoRDRU8xU0Ofazp29iismnrWDQ1v5EorNhwLZASOcG%2BTX39b3DNDDXOM3aIad6UbyzxoJmiLRYwzk13HUE6TvYejVfER9c%2BbQ%2BmJe2dUdpOYzCg5NPABjqkAU7xblp8%2F2mxMk680hxo2jJIQm1ouYQm0uuEosfV5d%2FHBZE1u8iroawKealpr%2FIY9XzY%2FlbvLiOJ0dCfh9x4y%2BqoLOmXMmN%2BVJrU5GR%2FfA%2FTggSgpqbyFDTJ3LswoccayFNhf0mtWr4GbH2x%2F614vW7SRgutIZ62T1vSs8moEECPo2FhzCLUJM7RmPY0KcnteS224PIpmtaJ%2BbPYdRd0S2Hq3v8s&X-Amz-Signature=e1143526fba50bdafc5ecff8ca7af08537d338780e73934c8bd80c4829a51c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DXZ2Q6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDA7Y4JzCCaHelEFgXB6Jo7a%2B02ovxVrYMrVfLdwnOWJAIhAOUzC8Zb%2BrbSgsUeni%2BZB%2FMwht9M8GThUMLXn1p5L89yKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxquz1s1CdeugnLAGYq3APJP%2Fjx72hb%2FKs8TrRF0l7qOFGWRRqFhzlvcrtAaKCKIUTpNKAnnLmfYgM8sWbb4G78yenVb896sijnq%2BRlao32xL646j%2Fk8yErYKVbwMqg1cu8tOZxch%2B2a4GnhOQ2GZqOAi4DsNLDOFUpfozh%2B7QvCMu10kCrifj8eXmMW2HlkMltErT10pVk4wNe1aHX%2FSK1Cu8q%2BUZMJo7qCUuOHkGMq%2BXcSgElXBs%2FQDLzJ7NASihkptxirDpI40gl4%2Bt%2BE3NbG9f3BvdwxgAQpyBfj0NHKq%2BCwMWZ%2B%2FTU47FKykRodhdj1XSpymUbpBONQacV%2BI1U9ovBQkjvUDjQVEvqMe7A5z1jv%2FR3ABlJpSnVQzWTkN2nck324f0j8bVu%2Fg9oXP8brc1y0u8IMxMdxUnc9EAfoMKEmZf0Mr94t9m7%2BVRSeJDZqnwLEv1FUu%2Brij3WjxTedJu8rOo2kr%2FnVIz2mKzUlsXiqYnMg%2FYNP09J1mMTlFT5tHfTFyDnwBdhdNJMFORGbFP%2BQkI1tnb6zuoRDRU8xU0Ofazp29iismnrWDQ1v5EorNhwLZASOcG%2BTX39b3DNDDXOM3aIad6UbyzxoJmiLRYwzk13HUE6TvYejVfER9c%2BbQ%2BmJe2dUdpOYzCg5NPABjqkAU7xblp8%2F2mxMk680hxo2jJIQm1ouYQm0uuEosfV5d%2FHBZE1u8iroawKealpr%2FIY9XzY%2FlbvLiOJ0dCfh9x4y%2BqoLOmXMmN%2BVJrU5GR%2FfA%2FTggSgpqbyFDTJ3LswoccayFNhf0mtWr4GbH2x%2F614vW7SRgutIZ62T1vSs8moEECPo2FhzCLUJM7RmPY0KcnteS224PIpmtaJ%2BbPYdRd0S2Hq3v8s&X-Amz-Signature=d0b0d874e8ef50729e4574b3fed8b5b66e13319e1fcfd823ddfc132231394dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DXZ2Q6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDA7Y4JzCCaHelEFgXB6Jo7a%2B02ovxVrYMrVfLdwnOWJAIhAOUzC8Zb%2BrbSgsUeni%2BZB%2FMwht9M8GThUMLXn1p5L89yKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxquz1s1CdeugnLAGYq3APJP%2Fjx72hb%2FKs8TrRF0l7qOFGWRRqFhzlvcrtAaKCKIUTpNKAnnLmfYgM8sWbb4G78yenVb896sijnq%2BRlao32xL646j%2Fk8yErYKVbwMqg1cu8tOZxch%2B2a4GnhOQ2GZqOAi4DsNLDOFUpfozh%2B7QvCMu10kCrifj8eXmMW2HlkMltErT10pVk4wNe1aHX%2FSK1Cu8q%2BUZMJo7qCUuOHkGMq%2BXcSgElXBs%2FQDLzJ7NASihkptxirDpI40gl4%2Bt%2BE3NbG9f3BvdwxgAQpyBfj0NHKq%2BCwMWZ%2B%2FTU47FKykRodhdj1XSpymUbpBONQacV%2BI1U9ovBQkjvUDjQVEvqMe7A5z1jv%2FR3ABlJpSnVQzWTkN2nck324f0j8bVu%2Fg9oXP8brc1y0u8IMxMdxUnc9EAfoMKEmZf0Mr94t9m7%2BVRSeJDZqnwLEv1FUu%2Brij3WjxTedJu8rOo2kr%2FnVIz2mKzUlsXiqYnMg%2FYNP09J1mMTlFT5tHfTFyDnwBdhdNJMFORGbFP%2BQkI1tnb6zuoRDRU8xU0Ofazp29iismnrWDQ1v5EorNhwLZASOcG%2BTX39b3DNDDXOM3aIad6UbyzxoJmiLRYwzk13HUE6TvYejVfER9c%2BbQ%2BmJe2dUdpOYzCg5NPABjqkAU7xblp8%2F2mxMk680hxo2jJIQm1ouYQm0uuEosfV5d%2FHBZE1u8iroawKealpr%2FIY9XzY%2FlbvLiOJ0dCfh9x4y%2BqoLOmXMmN%2BVJrU5GR%2FfA%2FTggSgpqbyFDTJ3LswoccayFNhf0mtWr4GbH2x%2F614vW7SRgutIZ62T1vSs8moEECPo2FhzCLUJM7RmPY0KcnteS224PIpmtaJ%2BbPYdRd0S2Hq3v8s&X-Amz-Signature=5359abdc49507a80fcf3cbf507308db6fa16f7842318b8eb1d936e5558aa4f51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DXZ2Q6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDA7Y4JzCCaHelEFgXB6Jo7a%2B02ovxVrYMrVfLdwnOWJAIhAOUzC8Zb%2BrbSgsUeni%2BZB%2FMwht9M8GThUMLXn1p5L89yKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxquz1s1CdeugnLAGYq3APJP%2Fjx72hb%2FKs8TrRF0l7qOFGWRRqFhzlvcrtAaKCKIUTpNKAnnLmfYgM8sWbb4G78yenVb896sijnq%2BRlao32xL646j%2Fk8yErYKVbwMqg1cu8tOZxch%2B2a4GnhOQ2GZqOAi4DsNLDOFUpfozh%2B7QvCMu10kCrifj8eXmMW2HlkMltErT10pVk4wNe1aHX%2FSK1Cu8q%2BUZMJo7qCUuOHkGMq%2BXcSgElXBs%2FQDLzJ7NASihkptxirDpI40gl4%2Bt%2BE3NbG9f3BvdwxgAQpyBfj0NHKq%2BCwMWZ%2B%2FTU47FKykRodhdj1XSpymUbpBONQacV%2BI1U9ovBQkjvUDjQVEvqMe7A5z1jv%2FR3ABlJpSnVQzWTkN2nck324f0j8bVu%2Fg9oXP8brc1y0u8IMxMdxUnc9EAfoMKEmZf0Mr94t9m7%2BVRSeJDZqnwLEv1FUu%2Brij3WjxTedJu8rOo2kr%2FnVIz2mKzUlsXiqYnMg%2FYNP09J1mMTlFT5tHfTFyDnwBdhdNJMFORGbFP%2BQkI1tnb6zuoRDRU8xU0Ofazp29iismnrWDQ1v5EorNhwLZASOcG%2BTX39b3DNDDXOM3aIad6UbyzxoJmiLRYwzk13HUE6TvYejVfER9c%2BbQ%2BmJe2dUdpOYzCg5NPABjqkAU7xblp8%2F2mxMk680hxo2jJIQm1ouYQm0uuEosfV5d%2FHBZE1u8iroawKealpr%2FIY9XzY%2FlbvLiOJ0dCfh9x4y%2BqoLOmXMmN%2BVJrU5GR%2FfA%2FTggSgpqbyFDTJ3LswoccayFNhf0mtWr4GbH2x%2F614vW7SRgutIZ62T1vSs8moEECPo2FhzCLUJM7RmPY0KcnteS224PIpmtaJ%2BbPYdRd0S2Hq3v8s&X-Amz-Signature=eb93fe5215f339cd00c4cd6e1130b61de1bf60512a02f85e76b0ee7ba6a8a9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DXZ2Q6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDA7Y4JzCCaHelEFgXB6Jo7a%2B02ovxVrYMrVfLdwnOWJAIhAOUzC8Zb%2BrbSgsUeni%2BZB%2FMwht9M8GThUMLXn1p5L89yKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxquz1s1CdeugnLAGYq3APJP%2Fjx72hb%2FKs8TrRF0l7qOFGWRRqFhzlvcrtAaKCKIUTpNKAnnLmfYgM8sWbb4G78yenVb896sijnq%2BRlao32xL646j%2Fk8yErYKVbwMqg1cu8tOZxch%2B2a4GnhOQ2GZqOAi4DsNLDOFUpfozh%2B7QvCMu10kCrifj8eXmMW2HlkMltErT10pVk4wNe1aHX%2FSK1Cu8q%2BUZMJo7qCUuOHkGMq%2BXcSgElXBs%2FQDLzJ7NASihkptxirDpI40gl4%2Bt%2BE3NbG9f3BvdwxgAQpyBfj0NHKq%2BCwMWZ%2B%2FTU47FKykRodhdj1XSpymUbpBONQacV%2BI1U9ovBQkjvUDjQVEvqMe7A5z1jv%2FR3ABlJpSnVQzWTkN2nck324f0j8bVu%2Fg9oXP8brc1y0u8IMxMdxUnc9EAfoMKEmZf0Mr94t9m7%2BVRSeJDZqnwLEv1FUu%2Brij3WjxTedJu8rOo2kr%2FnVIz2mKzUlsXiqYnMg%2FYNP09J1mMTlFT5tHfTFyDnwBdhdNJMFORGbFP%2BQkI1tnb6zuoRDRU8xU0Ofazp29iismnrWDQ1v5EorNhwLZASOcG%2BTX39b3DNDDXOM3aIad6UbyzxoJmiLRYwzk13HUE6TvYejVfER9c%2BbQ%2BmJe2dUdpOYzCg5NPABjqkAU7xblp8%2F2mxMk680hxo2jJIQm1ouYQm0uuEosfV5d%2FHBZE1u8iroawKealpr%2FIY9XzY%2FlbvLiOJ0dCfh9x4y%2BqoLOmXMmN%2BVJrU5GR%2FfA%2FTggSgpqbyFDTJ3LswoccayFNhf0mtWr4GbH2x%2F614vW7SRgutIZ62T1vSs8moEECPo2FhzCLUJM7RmPY0KcnteS224PIpmtaJ%2BbPYdRd0S2Hq3v8s&X-Amz-Signature=7bd40037f139c2088247597185dc13fe69fcf4338b5782e7800a57c22af64b21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DXZ2Q6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDA7Y4JzCCaHelEFgXB6Jo7a%2B02ovxVrYMrVfLdwnOWJAIhAOUzC8Zb%2BrbSgsUeni%2BZB%2FMwht9M8GThUMLXn1p5L89yKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxquz1s1CdeugnLAGYq3APJP%2Fjx72hb%2FKs8TrRF0l7qOFGWRRqFhzlvcrtAaKCKIUTpNKAnnLmfYgM8sWbb4G78yenVb896sijnq%2BRlao32xL646j%2Fk8yErYKVbwMqg1cu8tOZxch%2B2a4GnhOQ2GZqOAi4DsNLDOFUpfozh%2B7QvCMu10kCrifj8eXmMW2HlkMltErT10pVk4wNe1aHX%2FSK1Cu8q%2BUZMJo7qCUuOHkGMq%2BXcSgElXBs%2FQDLzJ7NASihkptxirDpI40gl4%2Bt%2BE3NbG9f3BvdwxgAQpyBfj0NHKq%2BCwMWZ%2B%2FTU47FKykRodhdj1XSpymUbpBONQacV%2BI1U9ovBQkjvUDjQVEvqMe7A5z1jv%2FR3ABlJpSnVQzWTkN2nck324f0j8bVu%2Fg9oXP8brc1y0u8IMxMdxUnc9EAfoMKEmZf0Mr94t9m7%2BVRSeJDZqnwLEv1FUu%2Brij3WjxTedJu8rOo2kr%2FnVIz2mKzUlsXiqYnMg%2FYNP09J1mMTlFT5tHfTFyDnwBdhdNJMFORGbFP%2BQkI1tnb6zuoRDRU8xU0Ofazp29iismnrWDQ1v5EorNhwLZASOcG%2BTX39b3DNDDXOM3aIad6UbyzxoJmiLRYwzk13HUE6TvYejVfER9c%2BbQ%2BmJe2dUdpOYzCg5NPABjqkAU7xblp8%2F2mxMk680hxo2jJIQm1ouYQm0uuEosfV5d%2FHBZE1u8iroawKealpr%2FIY9XzY%2FlbvLiOJ0dCfh9x4y%2BqoLOmXMmN%2BVJrU5GR%2FfA%2FTggSgpqbyFDTJ3LswoccayFNhf0mtWr4GbH2x%2F614vW7SRgutIZ62T1vSs8moEECPo2FhzCLUJM7RmPY0KcnteS224PIpmtaJ%2BbPYdRd0S2Hq3v8s&X-Amz-Signature=e1b4a5649974fa409a06636cf6e8e8c36703d2ae423e39a3c3b6f0a63795e5ee&X-Amz-SignedHeaders=host&x-id=GetObject)
