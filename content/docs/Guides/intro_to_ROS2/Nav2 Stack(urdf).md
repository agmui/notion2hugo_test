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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBRSOAL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYdIckcrB5n3Dr9WsL6IBNXtbYmRyVGvArMA8UkhAa8AiAcNCHVE3vRkU2qwhZGxZ9JsVrFnsqXxjqZZ7RwqSDt9SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp35XSYeYOYNU6e2IKtwDTMsrvIPiAApzTbAbGs%2BixrLJG5RAdW8Wqqvrs6%2FeaCtVHwHCXwGSlJesKfGg%2B2DHWbe%2BVkjYOEsXBwslmkvp%2B29k%2BJ9jXgxJymZSaNaMrIkIA6c4EviM7ANKNZ8PYKADBYQFVb%2Bs2uyYwk0iOGE8pI69FsnIKJ94NT1LYbI1Nt8jHoB1cBYsXsJJhy1T%2FZwZ1koWwY02JNytKzWJv1LjU9KC5WrR2wJxSIrm22Ccta%2FxXfHHm4Mm44gRAyxWKZp8Xp796zofZkYNO7i1klGblVQ1q60y0lyowzL1e8ss%2FAS5acvF8y0UfTYFDPuBWDU5KfAWrXe%2BFnZEg2EaB8yRRA%2B0H%2BGosd%2BWPoYU8BcSXQzPHHnPWG4h2juXAXKujbi%2FhcRbVGDF5wsV5hhj3nA6ueG1UqwvB6wEQT3v673uUrdYaW5yJezZbLLHy4HYSZZ6ItLAKTPpUTNdS1e%2BMtCTIsgCyjfWvkg7t2YAgtikOL%2FbyHU97GyGFRAtG0RWCe%2B3RIstQwFfBEdWTIzPMdWDJ1qu1rm68Dmu1xpTSz%2F%2B%2BLjQUTcRAEaRtxiRasutvM4lyGc00wIchnq1UgO2SmrIHyz79rs2BZ9FUIy2WtVmLWa6wtMjDDL%2F7oqQlh8w0br7wAY6pgENjQ7qq4oLSSHxo700r3r82EH%2Fs6FF0fnb4eMQreurgA9cQndM0T8%2Bnw%2Ff8E1%2FoJ%2F6pF8NEzcfJ1a4Lew9%2FzOnazpJCN9ftmLEayuRUD8hlXdXngM5%2B%2FR3dQsX%2Frn1dBN7mpjwVO7cYojnxkpsyFUYIYPhuIUsg5w0lOUas4RiowwGpneyuBcFMlcTNCdFu%2FilgnkGaitatby7RGmbLeaZMcz839HY&X-Amz-Signature=04150c3d9fc8f9824154fcf2e5976ca5608b46f9caf144fb5ef455034a079f76&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBRSOAL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYdIckcrB5n3Dr9WsL6IBNXtbYmRyVGvArMA8UkhAa8AiAcNCHVE3vRkU2qwhZGxZ9JsVrFnsqXxjqZZ7RwqSDt9SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp35XSYeYOYNU6e2IKtwDTMsrvIPiAApzTbAbGs%2BixrLJG5RAdW8Wqqvrs6%2FeaCtVHwHCXwGSlJesKfGg%2B2DHWbe%2BVkjYOEsXBwslmkvp%2B29k%2BJ9jXgxJymZSaNaMrIkIA6c4EviM7ANKNZ8PYKADBYQFVb%2Bs2uyYwk0iOGE8pI69FsnIKJ94NT1LYbI1Nt8jHoB1cBYsXsJJhy1T%2FZwZ1koWwY02JNytKzWJv1LjU9KC5WrR2wJxSIrm22Ccta%2FxXfHHm4Mm44gRAyxWKZp8Xp796zofZkYNO7i1klGblVQ1q60y0lyowzL1e8ss%2FAS5acvF8y0UfTYFDPuBWDU5KfAWrXe%2BFnZEg2EaB8yRRA%2B0H%2BGosd%2BWPoYU8BcSXQzPHHnPWG4h2juXAXKujbi%2FhcRbVGDF5wsV5hhj3nA6ueG1UqwvB6wEQT3v673uUrdYaW5yJezZbLLHy4HYSZZ6ItLAKTPpUTNdS1e%2BMtCTIsgCyjfWvkg7t2YAgtikOL%2FbyHU97GyGFRAtG0RWCe%2B3RIstQwFfBEdWTIzPMdWDJ1qu1rm68Dmu1xpTSz%2F%2B%2BLjQUTcRAEaRtxiRasutvM4lyGc00wIchnq1UgO2SmrIHyz79rs2BZ9FUIy2WtVmLWa6wtMjDDL%2F7oqQlh8w0br7wAY6pgENjQ7qq4oLSSHxo700r3r82EH%2Fs6FF0fnb4eMQreurgA9cQndM0T8%2Bnw%2Ff8E1%2FoJ%2F6pF8NEzcfJ1a4Lew9%2FzOnazpJCN9ftmLEayuRUD8hlXdXngM5%2B%2FR3dQsX%2Frn1dBN7mpjwVO7cYojnxkpsyFUYIYPhuIUsg5w0lOUas4RiowwGpneyuBcFMlcTNCdFu%2FilgnkGaitatby7RGmbLeaZMcz839HY&X-Amz-Signature=a427a3052591c90e1e602eb7d5ad0966ed0f0187bd7f74ada1982dcf3f44442a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBRSOAL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYdIckcrB5n3Dr9WsL6IBNXtbYmRyVGvArMA8UkhAa8AiAcNCHVE3vRkU2qwhZGxZ9JsVrFnsqXxjqZZ7RwqSDt9SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp35XSYeYOYNU6e2IKtwDTMsrvIPiAApzTbAbGs%2BixrLJG5RAdW8Wqqvrs6%2FeaCtVHwHCXwGSlJesKfGg%2B2DHWbe%2BVkjYOEsXBwslmkvp%2B29k%2BJ9jXgxJymZSaNaMrIkIA6c4EviM7ANKNZ8PYKADBYQFVb%2Bs2uyYwk0iOGE8pI69FsnIKJ94NT1LYbI1Nt8jHoB1cBYsXsJJhy1T%2FZwZ1koWwY02JNytKzWJv1LjU9KC5WrR2wJxSIrm22Ccta%2FxXfHHm4Mm44gRAyxWKZp8Xp796zofZkYNO7i1klGblVQ1q60y0lyowzL1e8ss%2FAS5acvF8y0UfTYFDPuBWDU5KfAWrXe%2BFnZEg2EaB8yRRA%2B0H%2BGosd%2BWPoYU8BcSXQzPHHnPWG4h2juXAXKujbi%2FhcRbVGDF5wsV5hhj3nA6ueG1UqwvB6wEQT3v673uUrdYaW5yJezZbLLHy4HYSZZ6ItLAKTPpUTNdS1e%2BMtCTIsgCyjfWvkg7t2YAgtikOL%2FbyHU97GyGFRAtG0RWCe%2B3RIstQwFfBEdWTIzPMdWDJ1qu1rm68Dmu1xpTSz%2F%2B%2BLjQUTcRAEaRtxiRasutvM4lyGc00wIchnq1UgO2SmrIHyz79rs2BZ9FUIy2WtVmLWa6wtMjDDL%2F7oqQlh8w0br7wAY6pgENjQ7qq4oLSSHxo700r3r82EH%2Fs6FF0fnb4eMQreurgA9cQndM0T8%2Bnw%2Ff8E1%2FoJ%2F6pF8NEzcfJ1a4Lew9%2FzOnazpJCN9ftmLEayuRUD8hlXdXngM5%2B%2FR3dQsX%2Frn1dBN7mpjwVO7cYojnxkpsyFUYIYPhuIUsg5w0lOUas4RiowwGpneyuBcFMlcTNCdFu%2FilgnkGaitatby7RGmbLeaZMcz839HY&X-Amz-Signature=ce5cc4cd0e6498c63d0ab50e45c534d4bbb3291905355031772ce1e471bf44dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBRSOAL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYdIckcrB5n3Dr9WsL6IBNXtbYmRyVGvArMA8UkhAa8AiAcNCHVE3vRkU2qwhZGxZ9JsVrFnsqXxjqZZ7RwqSDt9SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp35XSYeYOYNU6e2IKtwDTMsrvIPiAApzTbAbGs%2BixrLJG5RAdW8Wqqvrs6%2FeaCtVHwHCXwGSlJesKfGg%2B2DHWbe%2BVkjYOEsXBwslmkvp%2B29k%2BJ9jXgxJymZSaNaMrIkIA6c4EviM7ANKNZ8PYKADBYQFVb%2Bs2uyYwk0iOGE8pI69FsnIKJ94NT1LYbI1Nt8jHoB1cBYsXsJJhy1T%2FZwZ1koWwY02JNytKzWJv1LjU9KC5WrR2wJxSIrm22Ccta%2FxXfHHm4Mm44gRAyxWKZp8Xp796zofZkYNO7i1klGblVQ1q60y0lyowzL1e8ss%2FAS5acvF8y0UfTYFDPuBWDU5KfAWrXe%2BFnZEg2EaB8yRRA%2B0H%2BGosd%2BWPoYU8BcSXQzPHHnPWG4h2juXAXKujbi%2FhcRbVGDF5wsV5hhj3nA6ueG1UqwvB6wEQT3v673uUrdYaW5yJezZbLLHy4HYSZZ6ItLAKTPpUTNdS1e%2BMtCTIsgCyjfWvkg7t2YAgtikOL%2FbyHU97GyGFRAtG0RWCe%2B3RIstQwFfBEdWTIzPMdWDJ1qu1rm68Dmu1xpTSz%2F%2B%2BLjQUTcRAEaRtxiRasutvM4lyGc00wIchnq1UgO2SmrIHyz79rs2BZ9FUIy2WtVmLWa6wtMjDDL%2F7oqQlh8w0br7wAY6pgENjQ7qq4oLSSHxo700r3r82EH%2Fs6FF0fnb4eMQreurgA9cQndM0T8%2Bnw%2Ff8E1%2FoJ%2F6pF8NEzcfJ1a4Lew9%2FzOnazpJCN9ftmLEayuRUD8hlXdXngM5%2B%2FR3dQsX%2Frn1dBN7mpjwVO7cYojnxkpsyFUYIYPhuIUsg5w0lOUas4RiowwGpneyuBcFMlcTNCdFu%2FilgnkGaitatby7RGmbLeaZMcz839HY&X-Amz-Signature=63d25972d485696ed05c9eab7e90e97781dc3f823b020811dee4b0e1cd54eece&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBRSOAL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYdIckcrB5n3Dr9WsL6IBNXtbYmRyVGvArMA8UkhAa8AiAcNCHVE3vRkU2qwhZGxZ9JsVrFnsqXxjqZZ7RwqSDt9SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp35XSYeYOYNU6e2IKtwDTMsrvIPiAApzTbAbGs%2BixrLJG5RAdW8Wqqvrs6%2FeaCtVHwHCXwGSlJesKfGg%2B2DHWbe%2BVkjYOEsXBwslmkvp%2B29k%2BJ9jXgxJymZSaNaMrIkIA6c4EviM7ANKNZ8PYKADBYQFVb%2Bs2uyYwk0iOGE8pI69FsnIKJ94NT1LYbI1Nt8jHoB1cBYsXsJJhy1T%2FZwZ1koWwY02JNytKzWJv1LjU9KC5WrR2wJxSIrm22Ccta%2FxXfHHm4Mm44gRAyxWKZp8Xp796zofZkYNO7i1klGblVQ1q60y0lyowzL1e8ss%2FAS5acvF8y0UfTYFDPuBWDU5KfAWrXe%2BFnZEg2EaB8yRRA%2B0H%2BGosd%2BWPoYU8BcSXQzPHHnPWG4h2juXAXKujbi%2FhcRbVGDF5wsV5hhj3nA6ueG1UqwvB6wEQT3v673uUrdYaW5yJezZbLLHy4HYSZZ6ItLAKTPpUTNdS1e%2BMtCTIsgCyjfWvkg7t2YAgtikOL%2FbyHU97GyGFRAtG0RWCe%2B3RIstQwFfBEdWTIzPMdWDJ1qu1rm68Dmu1xpTSz%2F%2B%2BLjQUTcRAEaRtxiRasutvM4lyGc00wIchnq1UgO2SmrIHyz79rs2BZ9FUIy2WtVmLWa6wtMjDDL%2F7oqQlh8w0br7wAY6pgENjQ7qq4oLSSHxo700r3r82EH%2Fs6FF0fnb4eMQreurgA9cQndM0T8%2Bnw%2Ff8E1%2FoJ%2F6pF8NEzcfJ1a4Lew9%2FzOnazpJCN9ftmLEayuRUD8hlXdXngM5%2B%2FR3dQsX%2Frn1dBN7mpjwVO7cYojnxkpsyFUYIYPhuIUsg5w0lOUas4RiowwGpneyuBcFMlcTNCdFu%2FilgnkGaitatby7RGmbLeaZMcz839HY&X-Amz-Signature=f635e916a3da15d07462e78016f615980a046e132962e1b2a43c9d3437009b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBRSOAL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYdIckcrB5n3Dr9WsL6IBNXtbYmRyVGvArMA8UkhAa8AiAcNCHVE3vRkU2qwhZGxZ9JsVrFnsqXxjqZZ7RwqSDt9SqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp35XSYeYOYNU6e2IKtwDTMsrvIPiAApzTbAbGs%2BixrLJG5RAdW8Wqqvrs6%2FeaCtVHwHCXwGSlJesKfGg%2B2DHWbe%2BVkjYOEsXBwslmkvp%2B29k%2BJ9jXgxJymZSaNaMrIkIA6c4EviM7ANKNZ8PYKADBYQFVb%2Bs2uyYwk0iOGE8pI69FsnIKJ94NT1LYbI1Nt8jHoB1cBYsXsJJhy1T%2FZwZ1koWwY02JNytKzWJv1LjU9KC5WrR2wJxSIrm22Ccta%2FxXfHHm4Mm44gRAyxWKZp8Xp796zofZkYNO7i1klGblVQ1q60y0lyowzL1e8ss%2FAS5acvF8y0UfTYFDPuBWDU5KfAWrXe%2BFnZEg2EaB8yRRA%2B0H%2BGosd%2BWPoYU8BcSXQzPHHnPWG4h2juXAXKujbi%2FhcRbVGDF5wsV5hhj3nA6ueG1UqwvB6wEQT3v673uUrdYaW5yJezZbLLHy4HYSZZ6ItLAKTPpUTNdS1e%2BMtCTIsgCyjfWvkg7t2YAgtikOL%2FbyHU97GyGFRAtG0RWCe%2B3RIstQwFfBEdWTIzPMdWDJ1qu1rm68Dmu1xpTSz%2F%2B%2BLjQUTcRAEaRtxiRasutvM4lyGc00wIchnq1UgO2SmrIHyz79rs2BZ9FUIy2WtVmLWa6wtMjDDL%2F7oqQlh8w0br7wAY6pgENjQ7qq4oLSSHxo700r3r82EH%2Fs6FF0fnb4eMQreurgA9cQndM0T8%2Bnw%2Ff8E1%2FoJ%2F6pF8NEzcfJ1a4Lew9%2FzOnazpJCN9ftmLEayuRUD8hlXdXngM5%2B%2FR3dQsX%2Frn1dBN7mpjwVO7cYojnxkpsyFUYIYPhuIUsg5w0lOUas4RiowwGpneyuBcFMlcTNCdFu%2FilgnkGaitatby7RGmbLeaZMcz839HY&X-Amz-Signature=38b0cb23d17fd22452ff07e20832217337de46aa758c374652e6c7abbc2a06d2&X-Amz-SignedHeaders=host&x-id=GetObject)
