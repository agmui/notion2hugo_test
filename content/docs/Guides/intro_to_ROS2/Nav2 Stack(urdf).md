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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFYO54H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUHYy%2FX9o%2B1hdWhHTd3vAbXdNQWhqITu7dI4jWxjxawIgFnw2vmDwAfdbjdF1yn9JijypHb5brAxlZOCJE1srjiwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDA0whmcvEWzyjWGTiSrcAxOP6SQvzxoXFFjwQx8WSvDl1Z7ewS3WYYOlPKJnVHmRtUL3S%2FmCKOTXYXEuSRI2ndf3M2HATbIelo6wpOOcoI58WzSYzADxQxU6qTg0UsW0II%2FqiMa%2B62qZdYavW%2Fk8y3DP5XMt%2FCaOxTCWWhwlda2syHau9Kujwr2A3G%2BeuvLo%2BiehRc5xXocIsczLwSD1uEaN66RUPW9ZSG7ya%2FquC7Fpv3V4TptpZlt5FMj8gp2t7eLVBCNvug4OH7UjI71IbmhNHv8fqBvIBf4SCpRP%2BbcoGv55qX%2FNTI3xxda3rw1Z5ObjpY7ckE4MsT%2FC%2FSVHWjjehNZ5BqQWtz%2FgajTN0WeQXYdXIWUJQcAWGDyZOlDO%2FFyIpJvk8Y8rZD56PPvnzVtBWwvACUYqurde2Wk7znvISFnQwn2o5DkSiSIXP4IV00YfY0fHgc%2BwxoDh4FlnJCx0EbzHzjEbv51oMI3SSLVjO4RHS23KLzNlaZk%2Bvuw1azLhYcFAT2FU3LWMHb5BpIn3j39WqtfyIJ2mf%2Flm3w6GEGRzV%2BhX0%2FI1XKTPVBZwZeUcZAInQuzJHdE5L7Y8Id2vc7fMo7Y9hUSWS2UI4Ooa5w%2FZiCar5ie6UJ2vmbYX0IbL3mFo7sdXNd4eMLftm8EGOqUBxaXSIemU69WYZ%2BDOGlceUNqsPkx6PvjZHWnwuaj9oE%2BYwmG7DYRSOAL68gYkH1wKy7%2BPf2Hrkf6KYy%2FAKYaUwrREckA%2Bmo3RWdZpn6CwHGn0LyvBztUw%2FfGH2wY%2FlVCvIUJwgPSPBjjgkdrFj3Irb%2B6cUjHiEiKoRk6WxbuimFI12KYFxYrjYh6sUp03iOi4ZB%2BPIwq2bUKowaTzegOSFj9DDF0K&X-Amz-Signature=c5ab525dfba754cbc2ac942d24a2739b79d87699d3ed7fcc43f476c746b7d241&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFYO54H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUHYy%2FX9o%2B1hdWhHTd3vAbXdNQWhqITu7dI4jWxjxawIgFnw2vmDwAfdbjdF1yn9JijypHb5brAxlZOCJE1srjiwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDA0whmcvEWzyjWGTiSrcAxOP6SQvzxoXFFjwQx8WSvDl1Z7ewS3WYYOlPKJnVHmRtUL3S%2FmCKOTXYXEuSRI2ndf3M2HATbIelo6wpOOcoI58WzSYzADxQxU6qTg0UsW0II%2FqiMa%2B62qZdYavW%2Fk8y3DP5XMt%2FCaOxTCWWhwlda2syHau9Kujwr2A3G%2BeuvLo%2BiehRc5xXocIsczLwSD1uEaN66RUPW9ZSG7ya%2FquC7Fpv3V4TptpZlt5FMj8gp2t7eLVBCNvug4OH7UjI71IbmhNHv8fqBvIBf4SCpRP%2BbcoGv55qX%2FNTI3xxda3rw1Z5ObjpY7ckE4MsT%2FC%2FSVHWjjehNZ5BqQWtz%2FgajTN0WeQXYdXIWUJQcAWGDyZOlDO%2FFyIpJvk8Y8rZD56PPvnzVtBWwvACUYqurde2Wk7znvISFnQwn2o5DkSiSIXP4IV00YfY0fHgc%2BwxoDh4FlnJCx0EbzHzjEbv51oMI3SSLVjO4RHS23KLzNlaZk%2Bvuw1azLhYcFAT2FU3LWMHb5BpIn3j39WqtfyIJ2mf%2Flm3w6GEGRzV%2BhX0%2FI1XKTPVBZwZeUcZAInQuzJHdE5L7Y8Id2vc7fMo7Y9hUSWS2UI4Ooa5w%2FZiCar5ie6UJ2vmbYX0IbL3mFo7sdXNd4eMLftm8EGOqUBxaXSIemU69WYZ%2BDOGlceUNqsPkx6PvjZHWnwuaj9oE%2BYwmG7DYRSOAL68gYkH1wKy7%2BPf2Hrkf6KYy%2FAKYaUwrREckA%2Bmo3RWdZpn6CwHGn0LyvBztUw%2FfGH2wY%2FlVCvIUJwgPSPBjjgkdrFj3Irb%2B6cUjHiEiKoRk6WxbuimFI12KYFxYrjYh6sUp03iOi4ZB%2BPIwq2bUKowaTzegOSFj9DDF0K&X-Amz-Signature=266a134e3740dfa53205a7c127ffd3c5ca4139a80574b96bd93d552d4d1f2c38&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFYO54H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUHYy%2FX9o%2B1hdWhHTd3vAbXdNQWhqITu7dI4jWxjxawIgFnw2vmDwAfdbjdF1yn9JijypHb5brAxlZOCJE1srjiwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDA0whmcvEWzyjWGTiSrcAxOP6SQvzxoXFFjwQx8WSvDl1Z7ewS3WYYOlPKJnVHmRtUL3S%2FmCKOTXYXEuSRI2ndf3M2HATbIelo6wpOOcoI58WzSYzADxQxU6qTg0UsW0II%2FqiMa%2B62qZdYavW%2Fk8y3DP5XMt%2FCaOxTCWWhwlda2syHau9Kujwr2A3G%2BeuvLo%2BiehRc5xXocIsczLwSD1uEaN66RUPW9ZSG7ya%2FquC7Fpv3V4TptpZlt5FMj8gp2t7eLVBCNvug4OH7UjI71IbmhNHv8fqBvIBf4SCpRP%2BbcoGv55qX%2FNTI3xxda3rw1Z5ObjpY7ckE4MsT%2FC%2FSVHWjjehNZ5BqQWtz%2FgajTN0WeQXYdXIWUJQcAWGDyZOlDO%2FFyIpJvk8Y8rZD56PPvnzVtBWwvACUYqurde2Wk7znvISFnQwn2o5DkSiSIXP4IV00YfY0fHgc%2BwxoDh4FlnJCx0EbzHzjEbv51oMI3SSLVjO4RHS23KLzNlaZk%2Bvuw1azLhYcFAT2FU3LWMHb5BpIn3j39WqtfyIJ2mf%2Flm3w6GEGRzV%2BhX0%2FI1XKTPVBZwZeUcZAInQuzJHdE5L7Y8Id2vc7fMo7Y9hUSWS2UI4Ooa5w%2FZiCar5ie6UJ2vmbYX0IbL3mFo7sdXNd4eMLftm8EGOqUBxaXSIemU69WYZ%2BDOGlceUNqsPkx6PvjZHWnwuaj9oE%2BYwmG7DYRSOAL68gYkH1wKy7%2BPf2Hrkf6KYy%2FAKYaUwrREckA%2Bmo3RWdZpn6CwHGn0LyvBztUw%2FfGH2wY%2FlVCvIUJwgPSPBjjgkdrFj3Irb%2B6cUjHiEiKoRk6WxbuimFI12KYFxYrjYh6sUp03iOi4ZB%2BPIwq2bUKowaTzegOSFj9DDF0K&X-Amz-Signature=1fc31d36d4868b51886517ae1ee8aa4ee2e4b245c7ba727500a9330467dc85c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFYO54H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUHYy%2FX9o%2B1hdWhHTd3vAbXdNQWhqITu7dI4jWxjxawIgFnw2vmDwAfdbjdF1yn9JijypHb5brAxlZOCJE1srjiwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDA0whmcvEWzyjWGTiSrcAxOP6SQvzxoXFFjwQx8WSvDl1Z7ewS3WYYOlPKJnVHmRtUL3S%2FmCKOTXYXEuSRI2ndf3M2HATbIelo6wpOOcoI58WzSYzADxQxU6qTg0UsW0II%2FqiMa%2B62qZdYavW%2Fk8y3DP5XMt%2FCaOxTCWWhwlda2syHau9Kujwr2A3G%2BeuvLo%2BiehRc5xXocIsczLwSD1uEaN66RUPW9ZSG7ya%2FquC7Fpv3V4TptpZlt5FMj8gp2t7eLVBCNvug4OH7UjI71IbmhNHv8fqBvIBf4SCpRP%2BbcoGv55qX%2FNTI3xxda3rw1Z5ObjpY7ckE4MsT%2FC%2FSVHWjjehNZ5BqQWtz%2FgajTN0WeQXYdXIWUJQcAWGDyZOlDO%2FFyIpJvk8Y8rZD56PPvnzVtBWwvACUYqurde2Wk7znvISFnQwn2o5DkSiSIXP4IV00YfY0fHgc%2BwxoDh4FlnJCx0EbzHzjEbv51oMI3SSLVjO4RHS23KLzNlaZk%2Bvuw1azLhYcFAT2FU3LWMHb5BpIn3j39WqtfyIJ2mf%2Flm3w6GEGRzV%2BhX0%2FI1XKTPVBZwZeUcZAInQuzJHdE5L7Y8Id2vc7fMo7Y9hUSWS2UI4Ooa5w%2FZiCar5ie6UJ2vmbYX0IbL3mFo7sdXNd4eMLftm8EGOqUBxaXSIemU69WYZ%2BDOGlceUNqsPkx6PvjZHWnwuaj9oE%2BYwmG7DYRSOAL68gYkH1wKy7%2BPf2Hrkf6KYy%2FAKYaUwrREckA%2Bmo3RWdZpn6CwHGn0LyvBztUw%2FfGH2wY%2FlVCvIUJwgPSPBjjgkdrFj3Irb%2B6cUjHiEiKoRk6WxbuimFI12KYFxYrjYh6sUp03iOi4ZB%2BPIwq2bUKowaTzegOSFj9DDF0K&X-Amz-Signature=8d79b26c1582abb9744a33c6ea0726746e9ec3207db52bf727b3357a4cc11fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFYO54H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUHYy%2FX9o%2B1hdWhHTd3vAbXdNQWhqITu7dI4jWxjxawIgFnw2vmDwAfdbjdF1yn9JijypHb5brAxlZOCJE1srjiwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDA0whmcvEWzyjWGTiSrcAxOP6SQvzxoXFFjwQx8WSvDl1Z7ewS3WYYOlPKJnVHmRtUL3S%2FmCKOTXYXEuSRI2ndf3M2HATbIelo6wpOOcoI58WzSYzADxQxU6qTg0UsW0II%2FqiMa%2B62qZdYavW%2Fk8y3DP5XMt%2FCaOxTCWWhwlda2syHau9Kujwr2A3G%2BeuvLo%2BiehRc5xXocIsczLwSD1uEaN66RUPW9ZSG7ya%2FquC7Fpv3V4TptpZlt5FMj8gp2t7eLVBCNvug4OH7UjI71IbmhNHv8fqBvIBf4SCpRP%2BbcoGv55qX%2FNTI3xxda3rw1Z5ObjpY7ckE4MsT%2FC%2FSVHWjjehNZ5BqQWtz%2FgajTN0WeQXYdXIWUJQcAWGDyZOlDO%2FFyIpJvk8Y8rZD56PPvnzVtBWwvACUYqurde2Wk7znvISFnQwn2o5DkSiSIXP4IV00YfY0fHgc%2BwxoDh4FlnJCx0EbzHzjEbv51oMI3SSLVjO4RHS23KLzNlaZk%2Bvuw1azLhYcFAT2FU3LWMHb5BpIn3j39WqtfyIJ2mf%2Flm3w6GEGRzV%2BhX0%2FI1XKTPVBZwZeUcZAInQuzJHdE5L7Y8Id2vc7fMo7Y9hUSWS2UI4Ooa5w%2FZiCar5ie6UJ2vmbYX0IbL3mFo7sdXNd4eMLftm8EGOqUBxaXSIemU69WYZ%2BDOGlceUNqsPkx6PvjZHWnwuaj9oE%2BYwmG7DYRSOAL68gYkH1wKy7%2BPf2Hrkf6KYy%2FAKYaUwrREckA%2Bmo3RWdZpn6CwHGn0LyvBztUw%2FfGH2wY%2FlVCvIUJwgPSPBjjgkdrFj3Irb%2B6cUjHiEiKoRk6WxbuimFI12KYFxYrjYh6sUp03iOi4ZB%2BPIwq2bUKowaTzegOSFj9DDF0K&X-Amz-Signature=6cb8a70e429b2f99503008107b7fdedf380285fc5e0a33c1d326461bd4c0bfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFYO54H%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUHYy%2FX9o%2B1hdWhHTd3vAbXdNQWhqITu7dI4jWxjxawIgFnw2vmDwAfdbjdF1yn9JijypHb5brAxlZOCJE1srjiwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDA0whmcvEWzyjWGTiSrcAxOP6SQvzxoXFFjwQx8WSvDl1Z7ewS3WYYOlPKJnVHmRtUL3S%2FmCKOTXYXEuSRI2ndf3M2HATbIelo6wpOOcoI58WzSYzADxQxU6qTg0UsW0II%2FqiMa%2B62qZdYavW%2Fk8y3DP5XMt%2FCaOxTCWWhwlda2syHau9Kujwr2A3G%2BeuvLo%2BiehRc5xXocIsczLwSD1uEaN66RUPW9ZSG7ya%2FquC7Fpv3V4TptpZlt5FMj8gp2t7eLVBCNvug4OH7UjI71IbmhNHv8fqBvIBf4SCpRP%2BbcoGv55qX%2FNTI3xxda3rw1Z5ObjpY7ckE4MsT%2FC%2FSVHWjjehNZ5BqQWtz%2FgajTN0WeQXYdXIWUJQcAWGDyZOlDO%2FFyIpJvk8Y8rZD56PPvnzVtBWwvACUYqurde2Wk7znvISFnQwn2o5DkSiSIXP4IV00YfY0fHgc%2BwxoDh4FlnJCx0EbzHzjEbv51oMI3SSLVjO4RHS23KLzNlaZk%2Bvuw1azLhYcFAT2FU3LWMHb5BpIn3j39WqtfyIJ2mf%2Flm3w6GEGRzV%2BhX0%2FI1XKTPVBZwZeUcZAInQuzJHdE5L7Y8Id2vc7fMo7Y9hUSWS2UI4Ooa5w%2FZiCar5ie6UJ2vmbYX0IbL3mFo7sdXNd4eMLftm8EGOqUBxaXSIemU69WYZ%2BDOGlceUNqsPkx6PvjZHWnwuaj9oE%2BYwmG7DYRSOAL68gYkH1wKy7%2BPf2Hrkf6KYy%2FAKYaUwrREckA%2Bmo3RWdZpn6CwHGn0LyvBztUw%2FfGH2wY%2FlVCvIUJwgPSPBjjgkdrFj3Irb%2B6cUjHiEiKoRk6WxbuimFI12KYFxYrjYh6sUp03iOi4ZB%2BPIwq2bUKowaTzegOSFj9DDF0K&X-Amz-Signature=f2fdea7166677397eac1a1959373fb818ee33dd6ae121dc2b1d3449202865942&X-Amz-SignedHeaders=host&x-id=GetObject)
