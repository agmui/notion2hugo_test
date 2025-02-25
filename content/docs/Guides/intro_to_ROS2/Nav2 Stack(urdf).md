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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEATC6HH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCS9W2d39%2FxbcbnoK9rRYw4O4u64z%2FcuzRADhLiT1gj0QIgdtZHUXdjwTKQaFUIXl4EoRbPAzjlZ9mOMK8oNehAs%2Bkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCEWwrvk1CAIhYlmdCrcA2gWofU3lGhdMUsLVC2VV2aAxsBthn%2F3OVbMkteBdORAEa%2BKbbE5SCe81PZfbnLcDJfMqXf7k5Qyutbf63XtnlPpGU76D7Qd3ylo5JTj1ox3eNEQbkzJMofWWd%2BGkk6mSxC5lK49L9W0OlvzXROP4A5jm%2Fvtlnm6UVFHa%2BwvFBWsWySbsxwMB9jwF9zFkwIsTfo%2FK8rsR%2FkQXTSAIJNLJTp0t4WLWs78h8lVQZsSGUlh09Yj52NDILmWBDtGNElIhCUFd5inlUdXBySFLZySll2%2FYZfkAF1KaGEkMUJzNRlcxf0kygKjYgXHTSNxmk0nxWjQRO7%2Bbp%2Fq1ipiGzoWrJsVFWfCzVA%2FbG%2BX4ybW1mHMhHSFXCFQW7h7fFbxRz%2FuvjwFq6KskR8Jrb%2BbaB4r9rqSnQBWTZRvEJnCfVrY8WhG%2BXUzdI5J3sO1NhPGh1RZcxBkFDd88xcVdzi9GTPbWhU80NIx8ECsdIuKOy9oHE60mJO3P%2F%2BlRuTZbberv2IOCEJu7PQukBpXoYHOwxeQDVQwL5KY%2BRwo0e1GD%2Fv0t0tMBL8Zq321jZNfceYAxxISgrsfDgSxcdu0Lflxkx2%2BqicMoCHSVRyDYHsv2fq65aps2WAlNL%2BQINOtUJi4MPuz970GOqUBcoQkAONGYzSKZQp7RvPHlWLgF6IpukTIw%2FL8kPjB5NTlSPI%2BcmzbSnh5M66AY9cVpI8Y%2Fx3kDQrGcul6%2Bn5Ifn3qhAhEGrJiCqKo53ArO8gdY7hOJY6sFSi4YsMPL49auiWiztkVfmDATjrM1ZSxH8VoakShfYO4%2B6b9U8Xxqfh%2F9vyR9ihT30O4ngwXH1sNADnrkaOfmfyxYBOLCz8p5uGX6dzk&X-Amz-Signature=5b1a4d285ee4e690b57f02e46dda87d6e7a86e28d1be52f9c044e79bcb29f4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEATC6HH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCS9W2d39%2FxbcbnoK9rRYw4O4u64z%2FcuzRADhLiT1gj0QIgdtZHUXdjwTKQaFUIXl4EoRbPAzjlZ9mOMK8oNehAs%2Bkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCEWwrvk1CAIhYlmdCrcA2gWofU3lGhdMUsLVC2VV2aAxsBthn%2F3OVbMkteBdORAEa%2BKbbE5SCe81PZfbnLcDJfMqXf7k5Qyutbf63XtnlPpGU76D7Qd3ylo5JTj1ox3eNEQbkzJMofWWd%2BGkk6mSxC5lK49L9W0OlvzXROP4A5jm%2Fvtlnm6UVFHa%2BwvFBWsWySbsxwMB9jwF9zFkwIsTfo%2FK8rsR%2FkQXTSAIJNLJTp0t4WLWs78h8lVQZsSGUlh09Yj52NDILmWBDtGNElIhCUFd5inlUdXBySFLZySll2%2FYZfkAF1KaGEkMUJzNRlcxf0kygKjYgXHTSNxmk0nxWjQRO7%2Bbp%2Fq1ipiGzoWrJsVFWfCzVA%2FbG%2BX4ybW1mHMhHSFXCFQW7h7fFbxRz%2FuvjwFq6KskR8Jrb%2BbaB4r9rqSnQBWTZRvEJnCfVrY8WhG%2BXUzdI5J3sO1NhPGh1RZcxBkFDd88xcVdzi9GTPbWhU80NIx8ECsdIuKOy9oHE60mJO3P%2F%2BlRuTZbberv2IOCEJu7PQukBpXoYHOwxeQDVQwL5KY%2BRwo0e1GD%2Fv0t0tMBL8Zq321jZNfceYAxxISgrsfDgSxcdu0Lflxkx2%2BqicMoCHSVRyDYHsv2fq65aps2WAlNL%2BQINOtUJi4MPuz970GOqUBcoQkAONGYzSKZQp7RvPHlWLgF6IpukTIw%2FL8kPjB5NTlSPI%2BcmzbSnh5M66AY9cVpI8Y%2Fx3kDQrGcul6%2Bn5Ifn3qhAhEGrJiCqKo53ArO8gdY7hOJY6sFSi4YsMPL49auiWiztkVfmDATjrM1ZSxH8VoakShfYO4%2B6b9U8Xxqfh%2F9vyR9ihT30O4ngwXH1sNADnrkaOfmfyxYBOLCz8p5uGX6dzk&X-Amz-Signature=196d4ea62fcc4cbc5b46367ca4ed48c6f2be10cae2a6d832d3d49f488b110ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEATC6HH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCS9W2d39%2FxbcbnoK9rRYw4O4u64z%2FcuzRADhLiT1gj0QIgdtZHUXdjwTKQaFUIXl4EoRbPAzjlZ9mOMK8oNehAs%2Bkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCEWwrvk1CAIhYlmdCrcA2gWofU3lGhdMUsLVC2VV2aAxsBthn%2F3OVbMkteBdORAEa%2BKbbE5SCe81PZfbnLcDJfMqXf7k5Qyutbf63XtnlPpGU76D7Qd3ylo5JTj1ox3eNEQbkzJMofWWd%2BGkk6mSxC5lK49L9W0OlvzXROP4A5jm%2Fvtlnm6UVFHa%2BwvFBWsWySbsxwMB9jwF9zFkwIsTfo%2FK8rsR%2FkQXTSAIJNLJTp0t4WLWs78h8lVQZsSGUlh09Yj52NDILmWBDtGNElIhCUFd5inlUdXBySFLZySll2%2FYZfkAF1KaGEkMUJzNRlcxf0kygKjYgXHTSNxmk0nxWjQRO7%2Bbp%2Fq1ipiGzoWrJsVFWfCzVA%2FbG%2BX4ybW1mHMhHSFXCFQW7h7fFbxRz%2FuvjwFq6KskR8Jrb%2BbaB4r9rqSnQBWTZRvEJnCfVrY8WhG%2BXUzdI5J3sO1NhPGh1RZcxBkFDd88xcVdzi9GTPbWhU80NIx8ECsdIuKOy9oHE60mJO3P%2F%2BlRuTZbberv2IOCEJu7PQukBpXoYHOwxeQDVQwL5KY%2BRwo0e1GD%2Fv0t0tMBL8Zq321jZNfceYAxxISgrsfDgSxcdu0Lflxkx2%2BqicMoCHSVRyDYHsv2fq65aps2WAlNL%2BQINOtUJi4MPuz970GOqUBcoQkAONGYzSKZQp7RvPHlWLgF6IpukTIw%2FL8kPjB5NTlSPI%2BcmzbSnh5M66AY9cVpI8Y%2Fx3kDQrGcul6%2Bn5Ifn3qhAhEGrJiCqKo53ArO8gdY7hOJY6sFSi4YsMPL49auiWiztkVfmDATjrM1ZSxH8VoakShfYO4%2B6b9U8Xxqfh%2F9vyR9ihT30O4ngwXH1sNADnrkaOfmfyxYBOLCz8p5uGX6dzk&X-Amz-Signature=a2ba0af83c4905724ba214567be7b3176f577ab52f3d42846a7a6861c08c9b59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEATC6HH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCS9W2d39%2FxbcbnoK9rRYw4O4u64z%2FcuzRADhLiT1gj0QIgdtZHUXdjwTKQaFUIXl4EoRbPAzjlZ9mOMK8oNehAs%2Bkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCEWwrvk1CAIhYlmdCrcA2gWofU3lGhdMUsLVC2VV2aAxsBthn%2F3OVbMkteBdORAEa%2BKbbE5SCe81PZfbnLcDJfMqXf7k5Qyutbf63XtnlPpGU76D7Qd3ylo5JTj1ox3eNEQbkzJMofWWd%2BGkk6mSxC5lK49L9W0OlvzXROP4A5jm%2Fvtlnm6UVFHa%2BwvFBWsWySbsxwMB9jwF9zFkwIsTfo%2FK8rsR%2FkQXTSAIJNLJTp0t4WLWs78h8lVQZsSGUlh09Yj52NDILmWBDtGNElIhCUFd5inlUdXBySFLZySll2%2FYZfkAF1KaGEkMUJzNRlcxf0kygKjYgXHTSNxmk0nxWjQRO7%2Bbp%2Fq1ipiGzoWrJsVFWfCzVA%2FbG%2BX4ybW1mHMhHSFXCFQW7h7fFbxRz%2FuvjwFq6KskR8Jrb%2BbaB4r9rqSnQBWTZRvEJnCfVrY8WhG%2BXUzdI5J3sO1NhPGh1RZcxBkFDd88xcVdzi9GTPbWhU80NIx8ECsdIuKOy9oHE60mJO3P%2F%2BlRuTZbberv2IOCEJu7PQukBpXoYHOwxeQDVQwL5KY%2BRwo0e1GD%2Fv0t0tMBL8Zq321jZNfceYAxxISgrsfDgSxcdu0Lflxkx2%2BqicMoCHSVRyDYHsv2fq65aps2WAlNL%2BQINOtUJi4MPuz970GOqUBcoQkAONGYzSKZQp7RvPHlWLgF6IpukTIw%2FL8kPjB5NTlSPI%2BcmzbSnh5M66AY9cVpI8Y%2Fx3kDQrGcul6%2Bn5Ifn3qhAhEGrJiCqKo53ArO8gdY7hOJY6sFSi4YsMPL49auiWiztkVfmDATjrM1ZSxH8VoakShfYO4%2B6b9U8Xxqfh%2F9vyR9ihT30O4ngwXH1sNADnrkaOfmfyxYBOLCz8p5uGX6dzk&X-Amz-Signature=4feb1b7a21532f1a9118def64c8e022333a0fc8e0ccf370bb12802d53708fd38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEATC6HH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCS9W2d39%2FxbcbnoK9rRYw4O4u64z%2FcuzRADhLiT1gj0QIgdtZHUXdjwTKQaFUIXl4EoRbPAzjlZ9mOMK8oNehAs%2Bkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCEWwrvk1CAIhYlmdCrcA2gWofU3lGhdMUsLVC2VV2aAxsBthn%2F3OVbMkteBdORAEa%2BKbbE5SCe81PZfbnLcDJfMqXf7k5Qyutbf63XtnlPpGU76D7Qd3ylo5JTj1ox3eNEQbkzJMofWWd%2BGkk6mSxC5lK49L9W0OlvzXROP4A5jm%2Fvtlnm6UVFHa%2BwvFBWsWySbsxwMB9jwF9zFkwIsTfo%2FK8rsR%2FkQXTSAIJNLJTp0t4WLWs78h8lVQZsSGUlh09Yj52NDILmWBDtGNElIhCUFd5inlUdXBySFLZySll2%2FYZfkAF1KaGEkMUJzNRlcxf0kygKjYgXHTSNxmk0nxWjQRO7%2Bbp%2Fq1ipiGzoWrJsVFWfCzVA%2FbG%2BX4ybW1mHMhHSFXCFQW7h7fFbxRz%2FuvjwFq6KskR8Jrb%2BbaB4r9rqSnQBWTZRvEJnCfVrY8WhG%2BXUzdI5J3sO1NhPGh1RZcxBkFDd88xcVdzi9GTPbWhU80NIx8ECsdIuKOy9oHE60mJO3P%2F%2BlRuTZbberv2IOCEJu7PQukBpXoYHOwxeQDVQwL5KY%2BRwo0e1GD%2Fv0t0tMBL8Zq321jZNfceYAxxISgrsfDgSxcdu0Lflxkx2%2BqicMoCHSVRyDYHsv2fq65aps2WAlNL%2BQINOtUJi4MPuz970GOqUBcoQkAONGYzSKZQp7RvPHlWLgF6IpukTIw%2FL8kPjB5NTlSPI%2BcmzbSnh5M66AY9cVpI8Y%2Fx3kDQrGcul6%2Bn5Ifn3qhAhEGrJiCqKo53ArO8gdY7hOJY6sFSi4YsMPL49auiWiztkVfmDATjrM1ZSxH8VoakShfYO4%2B6b9U8Xxqfh%2F9vyR9ihT30O4ngwXH1sNADnrkaOfmfyxYBOLCz8p5uGX6dzk&X-Amz-Signature=6b3a4b15e186af548d0e43f16d6342cc03d11a1e6728cf7ab962d7cdcd0566c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEATC6HH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCS9W2d39%2FxbcbnoK9rRYw4O4u64z%2FcuzRADhLiT1gj0QIgdtZHUXdjwTKQaFUIXl4EoRbPAzjlZ9mOMK8oNehAs%2Bkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCEWwrvk1CAIhYlmdCrcA2gWofU3lGhdMUsLVC2VV2aAxsBthn%2F3OVbMkteBdORAEa%2BKbbE5SCe81PZfbnLcDJfMqXf7k5Qyutbf63XtnlPpGU76D7Qd3ylo5JTj1ox3eNEQbkzJMofWWd%2BGkk6mSxC5lK49L9W0OlvzXROP4A5jm%2Fvtlnm6UVFHa%2BwvFBWsWySbsxwMB9jwF9zFkwIsTfo%2FK8rsR%2FkQXTSAIJNLJTp0t4WLWs78h8lVQZsSGUlh09Yj52NDILmWBDtGNElIhCUFd5inlUdXBySFLZySll2%2FYZfkAF1KaGEkMUJzNRlcxf0kygKjYgXHTSNxmk0nxWjQRO7%2Bbp%2Fq1ipiGzoWrJsVFWfCzVA%2FbG%2BX4ybW1mHMhHSFXCFQW7h7fFbxRz%2FuvjwFq6KskR8Jrb%2BbaB4r9rqSnQBWTZRvEJnCfVrY8WhG%2BXUzdI5J3sO1NhPGh1RZcxBkFDd88xcVdzi9GTPbWhU80NIx8ECsdIuKOy9oHE60mJO3P%2F%2BlRuTZbberv2IOCEJu7PQukBpXoYHOwxeQDVQwL5KY%2BRwo0e1GD%2Fv0t0tMBL8Zq321jZNfceYAxxISgrsfDgSxcdu0Lflxkx2%2BqicMoCHSVRyDYHsv2fq65aps2WAlNL%2BQINOtUJi4MPuz970GOqUBcoQkAONGYzSKZQp7RvPHlWLgF6IpukTIw%2FL8kPjB5NTlSPI%2BcmzbSnh5M66AY9cVpI8Y%2Fx3kDQrGcul6%2Bn5Ifn3qhAhEGrJiCqKo53ArO8gdY7hOJY6sFSi4YsMPL49auiWiztkVfmDATjrM1ZSxH8VoakShfYO4%2B6b9U8Xxqfh%2F9vyR9ihT30O4ngwXH1sNADnrkaOfmfyxYBOLCz8p5uGX6dzk&X-Amz-Signature=d343bc7fdc56abe23336093a87ce5e18d9540e558ecca84f5f8da6e652dad782&X-Amz-SignedHeaders=host&x-id=GetObject)
