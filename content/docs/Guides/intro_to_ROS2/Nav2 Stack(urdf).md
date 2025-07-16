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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMH3PQVF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCKDyT0Q2rjn8zlR8dGVNzhDq9OBKFPd6A8H4HWCXEvcgIhAKf2wl0XMgAJKBJijB78qVwEKFO32XG1nM50pBmNnIAiKv8DCFkQABoMNjM3NDIzMTgzODA1Igxyvz9s0TPKcHCNxUoq3AO1TsPLGlnki%2BlVk2R5msfgqjqDyqys5OiaK58clkXHsZ6%2BfKaAMUaBJ%2BsGl2EledzYmk0R%2FTGaknktY9QddFFC%2BjGjstWvWcr5fIfoIAh%2B7NntwZfhEORyI4G9vgsap5pJ8p9RY8F%2B7b%2BqJ9%2BzKD9vWffEDgicOVmjPABORtbdWB5B1eBZiIen03BZiReBWIwnKvxwsAq3bDDZTLEU0J4qIGXx%2BWi0DMAf9WI8cuqEXQ6DBJTK7KPHQqLnXg%2BT2fpeskMclU3M6aNeedahastp6ggt6ZdXcKXv55tsdeHEGTlsJTF%2Fg1VCKUoSMzmDWs%2BnlEwE90GIVosThSvMnLjEpLz35mwdX8lnffhLVGSyxCFlvuxefm5GcXhSCyHFVAdB9phC8b0sOeZYQLq%2FznJC9fg%2FwRQ3%2FunKNS8zX83eeKHxMZceGkBp7x4ON7p7MXpK73UA4wafNEvJnKVQZ1EKfCfeuBoBIX68jXHnvAY%2BnFkx4Hsnbtfq9IzECq6cd42jTNOJC8jWEfeZT%2BnTgacJVt%2B%2FWwkpwW3UB1aHLvkZF8MPNxzw8WZdhZk1UUt0MX1UD9KFDeqdy9Zki%2F7BgtpR4hShV9wFUwtJIQsIQiR%2B4C2HgD3FAo%2BDtmmJmDCqvd3DBjqkAQfIq92FGTgrDIWWy7U4GFPG%2FN24oON5ahW4dO9FFZhZ1rzVV%2BOykCJCV7gq0aZvGryontNJU7qXqEgFPmvj3mn8sKoRc7aNu6CCNLdaneA51fmer2Sg%2BXCAEIfuVCOJIurS0%2BTbKrCHG3I9V2mqo%2B3lPov2sqniLUs3bpmujHjS3sqEq0TeDqmMkCgudI6FDKUH5baFC9f2GUvWfQ9zcNeFdW47&X-Amz-Signature=831b720bb5df37ea10cb32c561f8ad13f4a98a059c4b2a3b89c1814fae82b695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMH3PQVF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCKDyT0Q2rjn8zlR8dGVNzhDq9OBKFPd6A8H4HWCXEvcgIhAKf2wl0XMgAJKBJijB78qVwEKFO32XG1nM50pBmNnIAiKv8DCFkQABoMNjM3NDIzMTgzODA1Igxyvz9s0TPKcHCNxUoq3AO1TsPLGlnki%2BlVk2R5msfgqjqDyqys5OiaK58clkXHsZ6%2BfKaAMUaBJ%2BsGl2EledzYmk0R%2FTGaknktY9QddFFC%2BjGjstWvWcr5fIfoIAh%2B7NntwZfhEORyI4G9vgsap5pJ8p9RY8F%2B7b%2BqJ9%2BzKD9vWffEDgicOVmjPABORtbdWB5B1eBZiIen03BZiReBWIwnKvxwsAq3bDDZTLEU0J4qIGXx%2BWi0DMAf9WI8cuqEXQ6DBJTK7KPHQqLnXg%2BT2fpeskMclU3M6aNeedahastp6ggt6ZdXcKXv55tsdeHEGTlsJTF%2Fg1VCKUoSMzmDWs%2BnlEwE90GIVosThSvMnLjEpLz35mwdX8lnffhLVGSyxCFlvuxefm5GcXhSCyHFVAdB9phC8b0sOeZYQLq%2FznJC9fg%2FwRQ3%2FunKNS8zX83eeKHxMZceGkBp7x4ON7p7MXpK73UA4wafNEvJnKVQZ1EKfCfeuBoBIX68jXHnvAY%2BnFkx4Hsnbtfq9IzECq6cd42jTNOJC8jWEfeZT%2BnTgacJVt%2B%2FWwkpwW3UB1aHLvkZF8MPNxzw8WZdhZk1UUt0MX1UD9KFDeqdy9Zki%2F7BgtpR4hShV9wFUwtJIQsIQiR%2B4C2HgD3FAo%2BDtmmJmDCqvd3DBjqkAQfIq92FGTgrDIWWy7U4GFPG%2FN24oON5ahW4dO9FFZhZ1rzVV%2BOykCJCV7gq0aZvGryontNJU7qXqEgFPmvj3mn8sKoRc7aNu6CCNLdaneA51fmer2Sg%2BXCAEIfuVCOJIurS0%2BTbKrCHG3I9V2mqo%2B3lPov2sqniLUs3bpmujHjS3sqEq0TeDqmMkCgudI6FDKUH5baFC9f2GUvWfQ9zcNeFdW47&X-Amz-Signature=2d27666c54acab49f692afffd1f18f762d4109d106248bbf4564b599a10ca93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMH3PQVF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCKDyT0Q2rjn8zlR8dGVNzhDq9OBKFPd6A8H4HWCXEvcgIhAKf2wl0XMgAJKBJijB78qVwEKFO32XG1nM50pBmNnIAiKv8DCFkQABoMNjM3NDIzMTgzODA1Igxyvz9s0TPKcHCNxUoq3AO1TsPLGlnki%2BlVk2R5msfgqjqDyqys5OiaK58clkXHsZ6%2BfKaAMUaBJ%2BsGl2EledzYmk0R%2FTGaknktY9QddFFC%2BjGjstWvWcr5fIfoIAh%2B7NntwZfhEORyI4G9vgsap5pJ8p9RY8F%2B7b%2BqJ9%2BzKD9vWffEDgicOVmjPABORtbdWB5B1eBZiIen03BZiReBWIwnKvxwsAq3bDDZTLEU0J4qIGXx%2BWi0DMAf9WI8cuqEXQ6DBJTK7KPHQqLnXg%2BT2fpeskMclU3M6aNeedahastp6ggt6ZdXcKXv55tsdeHEGTlsJTF%2Fg1VCKUoSMzmDWs%2BnlEwE90GIVosThSvMnLjEpLz35mwdX8lnffhLVGSyxCFlvuxefm5GcXhSCyHFVAdB9phC8b0sOeZYQLq%2FznJC9fg%2FwRQ3%2FunKNS8zX83eeKHxMZceGkBp7x4ON7p7MXpK73UA4wafNEvJnKVQZ1EKfCfeuBoBIX68jXHnvAY%2BnFkx4Hsnbtfq9IzECq6cd42jTNOJC8jWEfeZT%2BnTgacJVt%2B%2FWwkpwW3UB1aHLvkZF8MPNxzw8WZdhZk1UUt0MX1UD9KFDeqdy9Zki%2F7BgtpR4hShV9wFUwtJIQsIQiR%2B4C2HgD3FAo%2BDtmmJmDCqvd3DBjqkAQfIq92FGTgrDIWWy7U4GFPG%2FN24oON5ahW4dO9FFZhZ1rzVV%2BOykCJCV7gq0aZvGryontNJU7qXqEgFPmvj3mn8sKoRc7aNu6CCNLdaneA51fmer2Sg%2BXCAEIfuVCOJIurS0%2BTbKrCHG3I9V2mqo%2B3lPov2sqniLUs3bpmujHjS3sqEq0TeDqmMkCgudI6FDKUH5baFC9f2GUvWfQ9zcNeFdW47&X-Amz-Signature=dca67100706dc4fe86b17e5efe5a43e8830bbf5af0604b3806aadd5c5e6645d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMH3PQVF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCKDyT0Q2rjn8zlR8dGVNzhDq9OBKFPd6A8H4HWCXEvcgIhAKf2wl0XMgAJKBJijB78qVwEKFO32XG1nM50pBmNnIAiKv8DCFkQABoMNjM3NDIzMTgzODA1Igxyvz9s0TPKcHCNxUoq3AO1TsPLGlnki%2BlVk2R5msfgqjqDyqys5OiaK58clkXHsZ6%2BfKaAMUaBJ%2BsGl2EledzYmk0R%2FTGaknktY9QddFFC%2BjGjstWvWcr5fIfoIAh%2B7NntwZfhEORyI4G9vgsap5pJ8p9RY8F%2B7b%2BqJ9%2BzKD9vWffEDgicOVmjPABORtbdWB5B1eBZiIen03BZiReBWIwnKvxwsAq3bDDZTLEU0J4qIGXx%2BWi0DMAf9WI8cuqEXQ6DBJTK7KPHQqLnXg%2BT2fpeskMclU3M6aNeedahastp6ggt6ZdXcKXv55tsdeHEGTlsJTF%2Fg1VCKUoSMzmDWs%2BnlEwE90GIVosThSvMnLjEpLz35mwdX8lnffhLVGSyxCFlvuxefm5GcXhSCyHFVAdB9phC8b0sOeZYQLq%2FznJC9fg%2FwRQ3%2FunKNS8zX83eeKHxMZceGkBp7x4ON7p7MXpK73UA4wafNEvJnKVQZ1EKfCfeuBoBIX68jXHnvAY%2BnFkx4Hsnbtfq9IzECq6cd42jTNOJC8jWEfeZT%2BnTgacJVt%2B%2FWwkpwW3UB1aHLvkZF8MPNxzw8WZdhZk1UUt0MX1UD9KFDeqdy9Zki%2F7BgtpR4hShV9wFUwtJIQsIQiR%2B4C2HgD3FAo%2BDtmmJmDCqvd3DBjqkAQfIq92FGTgrDIWWy7U4GFPG%2FN24oON5ahW4dO9FFZhZ1rzVV%2BOykCJCV7gq0aZvGryontNJU7qXqEgFPmvj3mn8sKoRc7aNu6CCNLdaneA51fmer2Sg%2BXCAEIfuVCOJIurS0%2BTbKrCHG3I9V2mqo%2B3lPov2sqniLUs3bpmujHjS3sqEq0TeDqmMkCgudI6FDKUH5baFC9f2GUvWfQ9zcNeFdW47&X-Amz-Signature=715b917dca8f4ad940c13ed7edc67ecf4dc1b9070fec511b3ac25128208b5661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMH3PQVF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCKDyT0Q2rjn8zlR8dGVNzhDq9OBKFPd6A8H4HWCXEvcgIhAKf2wl0XMgAJKBJijB78qVwEKFO32XG1nM50pBmNnIAiKv8DCFkQABoMNjM3NDIzMTgzODA1Igxyvz9s0TPKcHCNxUoq3AO1TsPLGlnki%2BlVk2R5msfgqjqDyqys5OiaK58clkXHsZ6%2BfKaAMUaBJ%2BsGl2EledzYmk0R%2FTGaknktY9QddFFC%2BjGjstWvWcr5fIfoIAh%2B7NntwZfhEORyI4G9vgsap5pJ8p9RY8F%2B7b%2BqJ9%2BzKD9vWffEDgicOVmjPABORtbdWB5B1eBZiIen03BZiReBWIwnKvxwsAq3bDDZTLEU0J4qIGXx%2BWi0DMAf9WI8cuqEXQ6DBJTK7KPHQqLnXg%2BT2fpeskMclU3M6aNeedahastp6ggt6ZdXcKXv55tsdeHEGTlsJTF%2Fg1VCKUoSMzmDWs%2BnlEwE90GIVosThSvMnLjEpLz35mwdX8lnffhLVGSyxCFlvuxefm5GcXhSCyHFVAdB9phC8b0sOeZYQLq%2FznJC9fg%2FwRQ3%2FunKNS8zX83eeKHxMZceGkBp7x4ON7p7MXpK73UA4wafNEvJnKVQZ1EKfCfeuBoBIX68jXHnvAY%2BnFkx4Hsnbtfq9IzECq6cd42jTNOJC8jWEfeZT%2BnTgacJVt%2B%2FWwkpwW3UB1aHLvkZF8MPNxzw8WZdhZk1UUt0MX1UD9KFDeqdy9Zki%2F7BgtpR4hShV9wFUwtJIQsIQiR%2B4C2HgD3FAo%2BDtmmJmDCqvd3DBjqkAQfIq92FGTgrDIWWy7U4GFPG%2FN24oON5ahW4dO9FFZhZ1rzVV%2BOykCJCV7gq0aZvGryontNJU7qXqEgFPmvj3mn8sKoRc7aNu6CCNLdaneA51fmer2Sg%2BXCAEIfuVCOJIurS0%2BTbKrCHG3I9V2mqo%2B3lPov2sqniLUs3bpmujHjS3sqEq0TeDqmMkCgudI6FDKUH5baFC9f2GUvWfQ9zcNeFdW47&X-Amz-Signature=7e91d5e0d8095878d7c6dfe43b3915747eb562f516f5af6a3cbce65eafa95475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMH3PQVF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCKDyT0Q2rjn8zlR8dGVNzhDq9OBKFPd6A8H4HWCXEvcgIhAKf2wl0XMgAJKBJijB78qVwEKFO32XG1nM50pBmNnIAiKv8DCFkQABoMNjM3NDIzMTgzODA1Igxyvz9s0TPKcHCNxUoq3AO1TsPLGlnki%2BlVk2R5msfgqjqDyqys5OiaK58clkXHsZ6%2BfKaAMUaBJ%2BsGl2EledzYmk0R%2FTGaknktY9QddFFC%2BjGjstWvWcr5fIfoIAh%2B7NntwZfhEORyI4G9vgsap5pJ8p9RY8F%2B7b%2BqJ9%2BzKD9vWffEDgicOVmjPABORtbdWB5B1eBZiIen03BZiReBWIwnKvxwsAq3bDDZTLEU0J4qIGXx%2BWi0DMAf9WI8cuqEXQ6DBJTK7KPHQqLnXg%2BT2fpeskMclU3M6aNeedahastp6ggt6ZdXcKXv55tsdeHEGTlsJTF%2Fg1VCKUoSMzmDWs%2BnlEwE90GIVosThSvMnLjEpLz35mwdX8lnffhLVGSyxCFlvuxefm5GcXhSCyHFVAdB9phC8b0sOeZYQLq%2FznJC9fg%2FwRQ3%2FunKNS8zX83eeKHxMZceGkBp7x4ON7p7MXpK73UA4wafNEvJnKVQZ1EKfCfeuBoBIX68jXHnvAY%2BnFkx4Hsnbtfq9IzECq6cd42jTNOJC8jWEfeZT%2BnTgacJVt%2B%2FWwkpwW3UB1aHLvkZF8MPNxzw8WZdhZk1UUt0MX1UD9KFDeqdy9Zki%2F7BgtpR4hShV9wFUwtJIQsIQiR%2B4C2HgD3FAo%2BDtmmJmDCqvd3DBjqkAQfIq92FGTgrDIWWy7U4GFPG%2FN24oON5ahW4dO9FFZhZ1rzVV%2BOykCJCV7gq0aZvGryontNJU7qXqEgFPmvj3mn8sKoRc7aNu6CCNLdaneA51fmer2Sg%2BXCAEIfuVCOJIurS0%2BTbKrCHG3I9V2mqo%2B3lPov2sqniLUs3bpmujHjS3sqEq0TeDqmMkCgudI6FDKUH5baFC9f2GUvWfQ9zcNeFdW47&X-Amz-Signature=306c37b006d9d9756c553a66f6556319f87127c40839de82ef131b8425339487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
