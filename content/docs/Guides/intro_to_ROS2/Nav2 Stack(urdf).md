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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMFNOYT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXSGDRnhAzscTCt6CWaHJSQYp0jJMmGt0OD2sMh9QZAIgUrOs9fP5A2FhGLA5zabbkBLUnEnQSHv8fILGGmH4KywqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGENALIMzxufi1wNyrcAyDXDe8h1xPKkOh0C4JV6EhTL5PkHnHQC%2BDk0HFl5pn9h2w5mUWGWOmzRNbVywpDVnniyzvbAg%2Ff36h7j6S%2F2T545%2F6CvPxufvCf1HpPIbWD4zNi6OmHfV77CZI30%2BPTlUgcuwykrpPXh%2Fbbfh%2BF5m2TWZV93ndMosbMuRiSBzdtzmiVQrtUFvKOftMpPAU5MWYy%2FQuPM3sjuWWWcvIrYBzsr2i%2FuSEqmWJrxj6RE1rXhFGYVBKuu0X0nkuydYdkmpOV2m3qVJHDEY4qxxns%2BOHrYOTJeWY4ny%2FXYHrlIzQxvQXLXqUPHKOhBN4%2BnShtPKSrRkwuLsUs2Ed1PiBSsftTn4Quz%2BpwPz6MO%2BLDSTay5kotB32fMaySBBdPGtWUNm4V%2BmKxubsY%2FXHkWhBFNPz%2Blw6Y6nUom5yOh4DiGJHg0Dt2%2B6IWQ3doZLzSXDmOg8%2B9%2BxnWRkmiZVdexspBeCHHVHJRlgK2RZ9VCYvSfu9lLXJ4VaPvdLNYpqqmoCcG%2FdpxkTfzlJMKrf5C%2F7ZYAYXudA8298OUH5KtUcvR4gj00iBJT3R0vooaWILEDgbCRHhn%2BxT8qqkGumhfA1S0zD%2Btn4g9BDura%2BN4byagZLpKfSFHViUziOfEYpsPMI6Eo70GOqUBIaiJzMp%2BiCRk9aC7Yz3fFiw2yh522Oon%2B2aayjaFTDHxThAsal%2FT25Sr1so1aLxLAI7CiJNR%2BaQc2JQ3lHjiEcGdodyrL%2BkQZX2X%2FsHTkcfrOFdScWhfF6ZaAkE%2FVF%2FwrAI30gdRYzn44WAdonkHlmRNKv3dc8michqzLSGSzpu5TzIUBn6kdfW4RPBZtV6063hzuF0YK64PdenZ3nSrEuIawvvW&X-Amz-Signature=9b5a4dc63cb47c9a40b16cf5b88883721d347608d0eda73aafa0a86166d66914&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMFNOYT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXSGDRnhAzscTCt6CWaHJSQYp0jJMmGt0OD2sMh9QZAIgUrOs9fP5A2FhGLA5zabbkBLUnEnQSHv8fILGGmH4KywqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGENALIMzxufi1wNyrcAyDXDe8h1xPKkOh0C4JV6EhTL5PkHnHQC%2BDk0HFl5pn9h2w5mUWGWOmzRNbVywpDVnniyzvbAg%2Ff36h7j6S%2F2T545%2F6CvPxufvCf1HpPIbWD4zNi6OmHfV77CZI30%2BPTlUgcuwykrpPXh%2Fbbfh%2BF5m2TWZV93ndMosbMuRiSBzdtzmiVQrtUFvKOftMpPAU5MWYy%2FQuPM3sjuWWWcvIrYBzsr2i%2FuSEqmWJrxj6RE1rXhFGYVBKuu0X0nkuydYdkmpOV2m3qVJHDEY4qxxns%2BOHrYOTJeWY4ny%2FXYHrlIzQxvQXLXqUPHKOhBN4%2BnShtPKSrRkwuLsUs2Ed1PiBSsftTn4Quz%2BpwPz6MO%2BLDSTay5kotB32fMaySBBdPGtWUNm4V%2BmKxubsY%2FXHkWhBFNPz%2Blw6Y6nUom5yOh4DiGJHg0Dt2%2B6IWQ3doZLzSXDmOg8%2B9%2BxnWRkmiZVdexspBeCHHVHJRlgK2RZ9VCYvSfu9lLXJ4VaPvdLNYpqqmoCcG%2FdpxkTfzlJMKrf5C%2F7ZYAYXudA8298OUH5KtUcvR4gj00iBJT3R0vooaWILEDgbCRHhn%2BxT8qqkGumhfA1S0zD%2Btn4g9BDura%2BN4byagZLpKfSFHViUziOfEYpsPMI6Eo70GOqUBIaiJzMp%2BiCRk9aC7Yz3fFiw2yh522Oon%2B2aayjaFTDHxThAsal%2FT25Sr1so1aLxLAI7CiJNR%2BaQc2JQ3lHjiEcGdodyrL%2BkQZX2X%2FsHTkcfrOFdScWhfF6ZaAkE%2FVF%2FwrAI30gdRYzn44WAdonkHlmRNKv3dc8michqzLSGSzpu5TzIUBn6kdfW4RPBZtV6063hzuF0YK64PdenZ3nSrEuIawvvW&X-Amz-Signature=90c6bc3289a90a218eb0c565484a52fc53072e21ba7b3b6483dcd03bc827f3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMFNOYT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXSGDRnhAzscTCt6CWaHJSQYp0jJMmGt0OD2sMh9QZAIgUrOs9fP5A2FhGLA5zabbkBLUnEnQSHv8fILGGmH4KywqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGENALIMzxufi1wNyrcAyDXDe8h1xPKkOh0C4JV6EhTL5PkHnHQC%2BDk0HFl5pn9h2w5mUWGWOmzRNbVywpDVnniyzvbAg%2Ff36h7j6S%2F2T545%2F6CvPxufvCf1HpPIbWD4zNi6OmHfV77CZI30%2BPTlUgcuwykrpPXh%2Fbbfh%2BF5m2TWZV93ndMosbMuRiSBzdtzmiVQrtUFvKOftMpPAU5MWYy%2FQuPM3sjuWWWcvIrYBzsr2i%2FuSEqmWJrxj6RE1rXhFGYVBKuu0X0nkuydYdkmpOV2m3qVJHDEY4qxxns%2BOHrYOTJeWY4ny%2FXYHrlIzQxvQXLXqUPHKOhBN4%2BnShtPKSrRkwuLsUs2Ed1PiBSsftTn4Quz%2BpwPz6MO%2BLDSTay5kotB32fMaySBBdPGtWUNm4V%2BmKxubsY%2FXHkWhBFNPz%2Blw6Y6nUom5yOh4DiGJHg0Dt2%2B6IWQ3doZLzSXDmOg8%2B9%2BxnWRkmiZVdexspBeCHHVHJRlgK2RZ9VCYvSfu9lLXJ4VaPvdLNYpqqmoCcG%2FdpxkTfzlJMKrf5C%2F7ZYAYXudA8298OUH5KtUcvR4gj00iBJT3R0vooaWILEDgbCRHhn%2BxT8qqkGumhfA1S0zD%2Btn4g9BDura%2BN4byagZLpKfSFHViUziOfEYpsPMI6Eo70GOqUBIaiJzMp%2BiCRk9aC7Yz3fFiw2yh522Oon%2B2aayjaFTDHxThAsal%2FT25Sr1so1aLxLAI7CiJNR%2BaQc2JQ3lHjiEcGdodyrL%2BkQZX2X%2FsHTkcfrOFdScWhfF6ZaAkE%2FVF%2FwrAI30gdRYzn44WAdonkHlmRNKv3dc8michqzLSGSzpu5TzIUBn6kdfW4RPBZtV6063hzuF0YK64PdenZ3nSrEuIawvvW&X-Amz-Signature=aaca4a063a5e051022093cf95d59d6b4369772ffc9577a1ccfec2baa320562e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMFNOYT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXSGDRnhAzscTCt6CWaHJSQYp0jJMmGt0OD2sMh9QZAIgUrOs9fP5A2FhGLA5zabbkBLUnEnQSHv8fILGGmH4KywqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGENALIMzxufi1wNyrcAyDXDe8h1xPKkOh0C4JV6EhTL5PkHnHQC%2BDk0HFl5pn9h2w5mUWGWOmzRNbVywpDVnniyzvbAg%2Ff36h7j6S%2F2T545%2F6CvPxufvCf1HpPIbWD4zNi6OmHfV77CZI30%2BPTlUgcuwykrpPXh%2Fbbfh%2BF5m2TWZV93ndMosbMuRiSBzdtzmiVQrtUFvKOftMpPAU5MWYy%2FQuPM3sjuWWWcvIrYBzsr2i%2FuSEqmWJrxj6RE1rXhFGYVBKuu0X0nkuydYdkmpOV2m3qVJHDEY4qxxns%2BOHrYOTJeWY4ny%2FXYHrlIzQxvQXLXqUPHKOhBN4%2BnShtPKSrRkwuLsUs2Ed1PiBSsftTn4Quz%2BpwPz6MO%2BLDSTay5kotB32fMaySBBdPGtWUNm4V%2BmKxubsY%2FXHkWhBFNPz%2Blw6Y6nUom5yOh4DiGJHg0Dt2%2B6IWQ3doZLzSXDmOg8%2B9%2BxnWRkmiZVdexspBeCHHVHJRlgK2RZ9VCYvSfu9lLXJ4VaPvdLNYpqqmoCcG%2FdpxkTfzlJMKrf5C%2F7ZYAYXudA8298OUH5KtUcvR4gj00iBJT3R0vooaWILEDgbCRHhn%2BxT8qqkGumhfA1S0zD%2Btn4g9BDura%2BN4byagZLpKfSFHViUziOfEYpsPMI6Eo70GOqUBIaiJzMp%2BiCRk9aC7Yz3fFiw2yh522Oon%2B2aayjaFTDHxThAsal%2FT25Sr1so1aLxLAI7CiJNR%2BaQc2JQ3lHjiEcGdodyrL%2BkQZX2X%2FsHTkcfrOFdScWhfF6ZaAkE%2FVF%2FwrAI30gdRYzn44WAdonkHlmRNKv3dc8michqzLSGSzpu5TzIUBn6kdfW4RPBZtV6063hzuF0YK64PdenZ3nSrEuIawvvW&X-Amz-Signature=bd6815ce7313c2588b386d47fe3a82d67191b68481828458d1ad606751f2add9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMFNOYT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXSGDRnhAzscTCt6CWaHJSQYp0jJMmGt0OD2sMh9QZAIgUrOs9fP5A2FhGLA5zabbkBLUnEnQSHv8fILGGmH4KywqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGENALIMzxufi1wNyrcAyDXDe8h1xPKkOh0C4JV6EhTL5PkHnHQC%2BDk0HFl5pn9h2w5mUWGWOmzRNbVywpDVnniyzvbAg%2Ff36h7j6S%2F2T545%2F6CvPxufvCf1HpPIbWD4zNi6OmHfV77CZI30%2BPTlUgcuwykrpPXh%2Fbbfh%2BF5m2TWZV93ndMosbMuRiSBzdtzmiVQrtUFvKOftMpPAU5MWYy%2FQuPM3sjuWWWcvIrYBzsr2i%2FuSEqmWJrxj6RE1rXhFGYVBKuu0X0nkuydYdkmpOV2m3qVJHDEY4qxxns%2BOHrYOTJeWY4ny%2FXYHrlIzQxvQXLXqUPHKOhBN4%2BnShtPKSrRkwuLsUs2Ed1PiBSsftTn4Quz%2BpwPz6MO%2BLDSTay5kotB32fMaySBBdPGtWUNm4V%2BmKxubsY%2FXHkWhBFNPz%2Blw6Y6nUom5yOh4DiGJHg0Dt2%2B6IWQ3doZLzSXDmOg8%2B9%2BxnWRkmiZVdexspBeCHHVHJRlgK2RZ9VCYvSfu9lLXJ4VaPvdLNYpqqmoCcG%2FdpxkTfzlJMKrf5C%2F7ZYAYXudA8298OUH5KtUcvR4gj00iBJT3R0vooaWILEDgbCRHhn%2BxT8qqkGumhfA1S0zD%2Btn4g9BDura%2BN4byagZLpKfSFHViUziOfEYpsPMI6Eo70GOqUBIaiJzMp%2BiCRk9aC7Yz3fFiw2yh522Oon%2B2aayjaFTDHxThAsal%2FT25Sr1so1aLxLAI7CiJNR%2BaQc2JQ3lHjiEcGdodyrL%2BkQZX2X%2FsHTkcfrOFdScWhfF6ZaAkE%2FVF%2FwrAI30gdRYzn44WAdonkHlmRNKv3dc8michqzLSGSzpu5TzIUBn6kdfW4RPBZtV6063hzuF0YK64PdenZ3nSrEuIawvvW&X-Amz-Signature=4d4429e35bfe122c0ced91c65ebcad322b8dae171e6378146128f8d5f7f24f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMFNOYT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyXSGDRnhAzscTCt6CWaHJSQYp0jJMmGt0OD2sMh9QZAIgUrOs9fP5A2FhGLA5zabbkBLUnEnQSHv8fILGGmH4KywqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGENALIMzxufi1wNyrcAyDXDe8h1xPKkOh0C4JV6EhTL5PkHnHQC%2BDk0HFl5pn9h2w5mUWGWOmzRNbVywpDVnniyzvbAg%2Ff36h7j6S%2F2T545%2F6CvPxufvCf1HpPIbWD4zNi6OmHfV77CZI30%2BPTlUgcuwykrpPXh%2Fbbfh%2BF5m2TWZV93ndMosbMuRiSBzdtzmiVQrtUFvKOftMpPAU5MWYy%2FQuPM3sjuWWWcvIrYBzsr2i%2FuSEqmWJrxj6RE1rXhFGYVBKuu0X0nkuydYdkmpOV2m3qVJHDEY4qxxns%2BOHrYOTJeWY4ny%2FXYHrlIzQxvQXLXqUPHKOhBN4%2BnShtPKSrRkwuLsUs2Ed1PiBSsftTn4Quz%2BpwPz6MO%2BLDSTay5kotB32fMaySBBdPGtWUNm4V%2BmKxubsY%2FXHkWhBFNPz%2Blw6Y6nUom5yOh4DiGJHg0Dt2%2B6IWQ3doZLzSXDmOg8%2B9%2BxnWRkmiZVdexspBeCHHVHJRlgK2RZ9VCYvSfu9lLXJ4VaPvdLNYpqqmoCcG%2FdpxkTfzlJMKrf5C%2F7ZYAYXudA8298OUH5KtUcvR4gj00iBJT3R0vooaWILEDgbCRHhn%2BxT8qqkGumhfA1S0zD%2Btn4g9BDura%2BN4byagZLpKfSFHViUziOfEYpsPMI6Eo70GOqUBIaiJzMp%2BiCRk9aC7Yz3fFiw2yh522Oon%2B2aayjaFTDHxThAsal%2FT25Sr1so1aLxLAI7CiJNR%2BaQc2JQ3lHjiEcGdodyrL%2BkQZX2X%2FsHTkcfrOFdScWhfF6ZaAkE%2FVF%2FwrAI30gdRYzn44WAdonkHlmRNKv3dc8michqzLSGSzpu5TzIUBn6kdfW4RPBZtV6063hzuF0YK64PdenZ3nSrEuIawvvW&X-Amz-Signature=f81c0bba85652f284ff3e5e931acf63541bbc04dd8894cf62c621247c27e2e5f&X-Amz-SignedHeaders=host&x-id=GetObject)
