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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYX6WVO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDIpOABjNptysk5sQoDfvE3FWbnfsfPY6gBD7apF9Q1EwIhAPDLWAcL8X1BIo0GwqWWxvSqwZaM63CUE4yHc1nqdewjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjC0whmq44z%2BOsfWAq3AND%2F8V6VBNNFkUHDaZmVAP5FUS2g1m3rvlhcfbZ%2FS55w6msKLEFyklwdk8fYM9wDALg1SDSxxfYjlkazfG0MBQO8JTDb9w5v7565zUtGHXsXF1TtX%2B%2F6FzQQZcbm3J21KR0ZFkeiIXZSeitjG4XGcTqu6FdwQp9xNIMdgEen%2BX%2FXf%2Ftju23LN%2BbINDmzNBnd1BjpE3JfcXqKgiMMtVVnHwEPMXRe24wJzziYoR%2B7HhTZzK882avSiUAZsav2y%2FfTJAwssLqJorIYeNAhQJi14dUaqA%2BfmlNbU6k6i2iY59BRuwRLD9zvvsge4%2B%2ByRsQQfGzmz%2FbUxubW6ePjJCPt0PrhAlmzktUXZys3kXgyRH%2BW2pK3VaX4H1Qt2LoPoAZaLJEYYiYZqPYbxEqMq5%2BObYFVmDMg14JRZeUt8VLoGFB7yToIKqHwC%2BXtl372xWwsLnr3oA1a6SOU59RJyYDPXnlllYrWLphxiEuK0LxVcsCfn%2FxFTvzm18UO4xoC0OEUhL5%2FXIqlc2E0nLdXBYnR7su8c1ZR26Jn4yz%2Bh79cOoCAL0R7WewTssTOKsB3zaELNWr2Ubg0YmgOIiGNOKJL30QCL65MTXWQy%2FmrSoWQ2KaMvO1pHX%2FkN1A1GkLODDw9tjABjqkAVQLhNmCObw69%2BZjm%2F8Q5Z6gXiOFXmLg8i34X77uiubAGiLyDjAJRrjKWorMZ8P2yfZKh7%2Bb9TMQJRjpXFmFjLBpuQS4nCpYRDsOrMBL%2FYlIv%2FnaoZ0z%2BbvED5WcZoKK0KC1SL2UIL%2Bh6jMMrcYkSXoqN3QJKpjDAcNhCJkQcg0RDu8P3wZUR0u0QyuT0HDju27EGN%2BnHD1CdrQfGl20st%2BPuZOq&X-Amz-Signature=8fd06cf874d9d8adae5fc3e04f41e25629efbd6b2860fb94b29115772b53eace&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYX6WVO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDIpOABjNptysk5sQoDfvE3FWbnfsfPY6gBD7apF9Q1EwIhAPDLWAcL8X1BIo0GwqWWxvSqwZaM63CUE4yHc1nqdewjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjC0whmq44z%2BOsfWAq3AND%2F8V6VBNNFkUHDaZmVAP5FUS2g1m3rvlhcfbZ%2FS55w6msKLEFyklwdk8fYM9wDALg1SDSxxfYjlkazfG0MBQO8JTDb9w5v7565zUtGHXsXF1TtX%2B%2F6FzQQZcbm3J21KR0ZFkeiIXZSeitjG4XGcTqu6FdwQp9xNIMdgEen%2BX%2FXf%2Ftju23LN%2BbINDmzNBnd1BjpE3JfcXqKgiMMtVVnHwEPMXRe24wJzziYoR%2B7HhTZzK882avSiUAZsav2y%2FfTJAwssLqJorIYeNAhQJi14dUaqA%2BfmlNbU6k6i2iY59BRuwRLD9zvvsge4%2B%2ByRsQQfGzmz%2FbUxubW6ePjJCPt0PrhAlmzktUXZys3kXgyRH%2BW2pK3VaX4H1Qt2LoPoAZaLJEYYiYZqPYbxEqMq5%2BObYFVmDMg14JRZeUt8VLoGFB7yToIKqHwC%2BXtl372xWwsLnr3oA1a6SOU59RJyYDPXnlllYrWLphxiEuK0LxVcsCfn%2FxFTvzm18UO4xoC0OEUhL5%2FXIqlc2E0nLdXBYnR7su8c1ZR26Jn4yz%2Bh79cOoCAL0R7WewTssTOKsB3zaELNWr2Ubg0YmgOIiGNOKJL30QCL65MTXWQy%2FmrSoWQ2KaMvO1pHX%2FkN1A1GkLODDw9tjABjqkAVQLhNmCObw69%2BZjm%2F8Q5Z6gXiOFXmLg8i34X77uiubAGiLyDjAJRrjKWorMZ8P2yfZKh7%2Bb9TMQJRjpXFmFjLBpuQS4nCpYRDsOrMBL%2FYlIv%2FnaoZ0z%2BbvED5WcZoKK0KC1SL2UIL%2Bh6jMMrcYkSXoqN3QJKpjDAcNhCJkQcg0RDu8P3wZUR0u0QyuT0HDju27EGN%2BnHD1CdrQfGl20st%2BPuZOq&X-Amz-Signature=40f2f9c7a1ab67590ee13ed1cb0b0f12f5fe4d01d1665c30902ceb8e8ee3e90f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYX6WVO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDIpOABjNptysk5sQoDfvE3FWbnfsfPY6gBD7apF9Q1EwIhAPDLWAcL8X1BIo0GwqWWxvSqwZaM63CUE4yHc1nqdewjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjC0whmq44z%2BOsfWAq3AND%2F8V6VBNNFkUHDaZmVAP5FUS2g1m3rvlhcfbZ%2FS55w6msKLEFyklwdk8fYM9wDALg1SDSxxfYjlkazfG0MBQO8JTDb9w5v7565zUtGHXsXF1TtX%2B%2F6FzQQZcbm3J21KR0ZFkeiIXZSeitjG4XGcTqu6FdwQp9xNIMdgEen%2BX%2FXf%2Ftju23LN%2BbINDmzNBnd1BjpE3JfcXqKgiMMtVVnHwEPMXRe24wJzziYoR%2B7HhTZzK882avSiUAZsav2y%2FfTJAwssLqJorIYeNAhQJi14dUaqA%2BfmlNbU6k6i2iY59BRuwRLD9zvvsge4%2B%2ByRsQQfGzmz%2FbUxubW6ePjJCPt0PrhAlmzktUXZys3kXgyRH%2BW2pK3VaX4H1Qt2LoPoAZaLJEYYiYZqPYbxEqMq5%2BObYFVmDMg14JRZeUt8VLoGFB7yToIKqHwC%2BXtl372xWwsLnr3oA1a6SOU59RJyYDPXnlllYrWLphxiEuK0LxVcsCfn%2FxFTvzm18UO4xoC0OEUhL5%2FXIqlc2E0nLdXBYnR7su8c1ZR26Jn4yz%2Bh79cOoCAL0R7WewTssTOKsB3zaELNWr2Ubg0YmgOIiGNOKJL30QCL65MTXWQy%2FmrSoWQ2KaMvO1pHX%2FkN1A1GkLODDw9tjABjqkAVQLhNmCObw69%2BZjm%2F8Q5Z6gXiOFXmLg8i34X77uiubAGiLyDjAJRrjKWorMZ8P2yfZKh7%2Bb9TMQJRjpXFmFjLBpuQS4nCpYRDsOrMBL%2FYlIv%2FnaoZ0z%2BbvED5WcZoKK0KC1SL2UIL%2Bh6jMMrcYkSXoqN3QJKpjDAcNhCJkQcg0RDu8P3wZUR0u0QyuT0HDju27EGN%2BnHD1CdrQfGl20st%2BPuZOq&X-Amz-Signature=51239b2bd83dd9514e21ce3b58ef7b0724725f67305ed7b09fbbcb76970877d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYX6WVO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDIpOABjNptysk5sQoDfvE3FWbnfsfPY6gBD7apF9Q1EwIhAPDLWAcL8X1BIo0GwqWWxvSqwZaM63CUE4yHc1nqdewjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjC0whmq44z%2BOsfWAq3AND%2F8V6VBNNFkUHDaZmVAP5FUS2g1m3rvlhcfbZ%2FS55w6msKLEFyklwdk8fYM9wDALg1SDSxxfYjlkazfG0MBQO8JTDb9w5v7565zUtGHXsXF1TtX%2B%2F6FzQQZcbm3J21KR0ZFkeiIXZSeitjG4XGcTqu6FdwQp9xNIMdgEen%2BX%2FXf%2Ftju23LN%2BbINDmzNBnd1BjpE3JfcXqKgiMMtVVnHwEPMXRe24wJzziYoR%2B7HhTZzK882avSiUAZsav2y%2FfTJAwssLqJorIYeNAhQJi14dUaqA%2BfmlNbU6k6i2iY59BRuwRLD9zvvsge4%2B%2ByRsQQfGzmz%2FbUxubW6ePjJCPt0PrhAlmzktUXZys3kXgyRH%2BW2pK3VaX4H1Qt2LoPoAZaLJEYYiYZqPYbxEqMq5%2BObYFVmDMg14JRZeUt8VLoGFB7yToIKqHwC%2BXtl372xWwsLnr3oA1a6SOU59RJyYDPXnlllYrWLphxiEuK0LxVcsCfn%2FxFTvzm18UO4xoC0OEUhL5%2FXIqlc2E0nLdXBYnR7su8c1ZR26Jn4yz%2Bh79cOoCAL0R7WewTssTOKsB3zaELNWr2Ubg0YmgOIiGNOKJL30QCL65MTXWQy%2FmrSoWQ2KaMvO1pHX%2FkN1A1GkLODDw9tjABjqkAVQLhNmCObw69%2BZjm%2F8Q5Z6gXiOFXmLg8i34X77uiubAGiLyDjAJRrjKWorMZ8P2yfZKh7%2Bb9TMQJRjpXFmFjLBpuQS4nCpYRDsOrMBL%2FYlIv%2FnaoZ0z%2BbvED5WcZoKK0KC1SL2UIL%2Bh6jMMrcYkSXoqN3QJKpjDAcNhCJkQcg0RDu8P3wZUR0u0QyuT0HDju27EGN%2BnHD1CdrQfGl20st%2BPuZOq&X-Amz-Signature=b2373781877fd36ae366d6887469fb77608eae8a185b7879200c04188382a1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYX6WVO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDIpOABjNptysk5sQoDfvE3FWbnfsfPY6gBD7apF9Q1EwIhAPDLWAcL8X1BIo0GwqWWxvSqwZaM63CUE4yHc1nqdewjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjC0whmq44z%2BOsfWAq3AND%2F8V6VBNNFkUHDaZmVAP5FUS2g1m3rvlhcfbZ%2FS55w6msKLEFyklwdk8fYM9wDALg1SDSxxfYjlkazfG0MBQO8JTDb9w5v7565zUtGHXsXF1TtX%2B%2F6FzQQZcbm3J21KR0ZFkeiIXZSeitjG4XGcTqu6FdwQp9xNIMdgEen%2BX%2FXf%2Ftju23LN%2BbINDmzNBnd1BjpE3JfcXqKgiMMtVVnHwEPMXRe24wJzziYoR%2B7HhTZzK882avSiUAZsav2y%2FfTJAwssLqJorIYeNAhQJi14dUaqA%2BfmlNbU6k6i2iY59BRuwRLD9zvvsge4%2B%2ByRsQQfGzmz%2FbUxubW6ePjJCPt0PrhAlmzktUXZys3kXgyRH%2BW2pK3VaX4H1Qt2LoPoAZaLJEYYiYZqPYbxEqMq5%2BObYFVmDMg14JRZeUt8VLoGFB7yToIKqHwC%2BXtl372xWwsLnr3oA1a6SOU59RJyYDPXnlllYrWLphxiEuK0LxVcsCfn%2FxFTvzm18UO4xoC0OEUhL5%2FXIqlc2E0nLdXBYnR7su8c1ZR26Jn4yz%2Bh79cOoCAL0R7WewTssTOKsB3zaELNWr2Ubg0YmgOIiGNOKJL30QCL65MTXWQy%2FmrSoWQ2KaMvO1pHX%2FkN1A1GkLODDw9tjABjqkAVQLhNmCObw69%2BZjm%2F8Q5Z6gXiOFXmLg8i34X77uiubAGiLyDjAJRrjKWorMZ8P2yfZKh7%2Bb9TMQJRjpXFmFjLBpuQS4nCpYRDsOrMBL%2FYlIv%2FnaoZ0z%2BbvED5WcZoKK0KC1SL2UIL%2Bh6jMMrcYkSXoqN3QJKpjDAcNhCJkQcg0RDu8P3wZUR0u0QyuT0HDju27EGN%2BnHD1CdrQfGl20st%2BPuZOq&X-Amz-Signature=b372550eaf56e778f04a49cd8942c07e8cc81c2e517a804d0a36e2b3f84043a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYX6WVO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDIpOABjNptysk5sQoDfvE3FWbnfsfPY6gBD7apF9Q1EwIhAPDLWAcL8X1BIo0GwqWWxvSqwZaM63CUE4yHc1nqdewjKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjC0whmq44z%2BOsfWAq3AND%2F8V6VBNNFkUHDaZmVAP5FUS2g1m3rvlhcfbZ%2FS55w6msKLEFyklwdk8fYM9wDALg1SDSxxfYjlkazfG0MBQO8JTDb9w5v7565zUtGHXsXF1TtX%2B%2F6FzQQZcbm3J21KR0ZFkeiIXZSeitjG4XGcTqu6FdwQp9xNIMdgEen%2BX%2FXf%2Ftju23LN%2BbINDmzNBnd1BjpE3JfcXqKgiMMtVVnHwEPMXRe24wJzziYoR%2B7HhTZzK882avSiUAZsav2y%2FfTJAwssLqJorIYeNAhQJi14dUaqA%2BfmlNbU6k6i2iY59BRuwRLD9zvvsge4%2B%2ByRsQQfGzmz%2FbUxubW6ePjJCPt0PrhAlmzktUXZys3kXgyRH%2BW2pK3VaX4H1Qt2LoPoAZaLJEYYiYZqPYbxEqMq5%2BObYFVmDMg14JRZeUt8VLoGFB7yToIKqHwC%2BXtl372xWwsLnr3oA1a6SOU59RJyYDPXnlllYrWLphxiEuK0LxVcsCfn%2FxFTvzm18UO4xoC0OEUhL5%2FXIqlc2E0nLdXBYnR7su8c1ZR26Jn4yz%2Bh79cOoCAL0R7WewTssTOKsB3zaELNWr2Ubg0YmgOIiGNOKJL30QCL65MTXWQy%2FmrSoWQ2KaMvO1pHX%2FkN1A1GkLODDw9tjABjqkAVQLhNmCObw69%2BZjm%2F8Q5Z6gXiOFXmLg8i34X77uiubAGiLyDjAJRrjKWorMZ8P2yfZKh7%2Bb9TMQJRjpXFmFjLBpuQS4nCpYRDsOrMBL%2FYlIv%2FnaoZ0z%2BbvED5WcZoKK0KC1SL2UIL%2Bh6jMMrcYkSXoqN3QJKpjDAcNhCJkQcg0RDu8P3wZUR0u0QyuT0HDju27EGN%2BnHD1CdrQfGl20st%2BPuZOq&X-Amz-Signature=18477524a57e648648141086c6cdbd18dffffcbf1daf63c2f4dfd274dc40dbe3&X-Amz-SignedHeaders=host&x-id=GetObject)
