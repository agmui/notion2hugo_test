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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG5N3MQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFelfHuX%2B48KvVDtFEer5t4VD%2B49OzRzLiqR%2BqxxJbebAiEA6JbT70bp%2FzfLS9jWYs0Kf83QTFUqoFy2TWxnAC%2BGDN4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkXDHRiKm5%2FeSOt3ircA%2BRFIv8xHU71IclU%2FyuNtm4D4xcK6KGBlkT7me1ZAE0bTmsNy6OwlRsHcRRlnqJh3pEnP5w2Zxm70y8yQ2IBP4N%2B3IPRYnYa%2FVM4gM5jMhW8fH7wnpYGAH7pYWswlLvUP5ojsASsIObSGAQqctSLGU1x03VB98WtyXES%2BkMrnI2d9SCO1jG8rESx45Ofl7jKK%2BUsNpeaoQL4GPcrKS3VOzhtHlnJSPxhiZHkWoGkfQTqeKekSGmPHykIjhHTo97nwyE%2BeP6c9TCjWRwIUV2DCMPR7jpc8xi0YcG4u%2BviPZzu3qdQxCk4t33flOXMzFykh5N2O67ZE3GUyNznBaFP1Stz%2Bb96LFLnnO0mCqjG40xsugzvrAmRfJJo5Yom1fOYLq%2BE2Rwf8uh7rEUPlRW%2Fm9HkRxjixk3SmgYcnGEdqRwez7JvVTD317QKqrN%2Bt1vFpurHU6Szm99JB9OuahCM2RQPpjeBydrTxbRtQgStwJUb4wxs8auZbHOBOaXEcWCHqR8Ox%2BWYffwnHrdaaBOMiACb%2FHSGhV%2Fcmee%2FC6MgnF4TRLpxq%2B5fIN1ASV94U5GvOTUHbRZfARQ2KnAgiG1mcwKjUat5I29bpRJA1%2BxuCeWVYeu%2F692PNPFsdrqRMLWzqsIGOqUB0fLsychOYvT8Gtb058lnkICxV3LOq2I9o58i%2B0T09dM39fHDE2HncxVe7KECBhoISXbQJJCx4zTCKGALGf09CwjjSR1KKK1IvC9622i5m69VRaq5YbPhfTttHZKUVf72B%2Fr83lJzfptXp9UfTo6HOyuGdpfbhfrrTpbXnERjnwaccxQHzoUp%2Bs8UMlBO3LDgVUs8uG9VV5eNzC3nAceifi9XGG8t&X-Amz-Signature=a5d7f7b4f0f19facde615b33ed60a6f8bd09e19e5a1e9763e84ac99f715c2c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG5N3MQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFelfHuX%2B48KvVDtFEer5t4VD%2B49OzRzLiqR%2BqxxJbebAiEA6JbT70bp%2FzfLS9jWYs0Kf83QTFUqoFy2TWxnAC%2BGDN4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkXDHRiKm5%2FeSOt3ircA%2BRFIv8xHU71IclU%2FyuNtm4D4xcK6KGBlkT7me1ZAE0bTmsNy6OwlRsHcRRlnqJh3pEnP5w2Zxm70y8yQ2IBP4N%2B3IPRYnYa%2FVM4gM5jMhW8fH7wnpYGAH7pYWswlLvUP5ojsASsIObSGAQqctSLGU1x03VB98WtyXES%2BkMrnI2d9SCO1jG8rESx45Ofl7jKK%2BUsNpeaoQL4GPcrKS3VOzhtHlnJSPxhiZHkWoGkfQTqeKekSGmPHykIjhHTo97nwyE%2BeP6c9TCjWRwIUV2DCMPR7jpc8xi0YcG4u%2BviPZzu3qdQxCk4t33flOXMzFykh5N2O67ZE3GUyNznBaFP1Stz%2Bb96LFLnnO0mCqjG40xsugzvrAmRfJJo5Yom1fOYLq%2BE2Rwf8uh7rEUPlRW%2Fm9HkRxjixk3SmgYcnGEdqRwez7JvVTD317QKqrN%2Bt1vFpurHU6Szm99JB9OuahCM2RQPpjeBydrTxbRtQgStwJUb4wxs8auZbHOBOaXEcWCHqR8Ox%2BWYffwnHrdaaBOMiACb%2FHSGhV%2Fcmee%2FC6MgnF4TRLpxq%2B5fIN1ASV94U5GvOTUHbRZfARQ2KnAgiG1mcwKjUat5I29bpRJA1%2BxuCeWVYeu%2F692PNPFsdrqRMLWzqsIGOqUB0fLsychOYvT8Gtb058lnkICxV3LOq2I9o58i%2B0T09dM39fHDE2HncxVe7KECBhoISXbQJJCx4zTCKGALGf09CwjjSR1KKK1IvC9622i5m69VRaq5YbPhfTttHZKUVf72B%2Fr83lJzfptXp9UfTo6HOyuGdpfbhfrrTpbXnERjnwaccxQHzoUp%2Bs8UMlBO3LDgVUs8uG9VV5eNzC3nAceifi9XGG8t&X-Amz-Signature=3cd4acace7259cb3c5252b38c43ea412bfbd1d246c6eefadb091123e243d712e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG5N3MQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFelfHuX%2B48KvVDtFEer5t4VD%2B49OzRzLiqR%2BqxxJbebAiEA6JbT70bp%2FzfLS9jWYs0Kf83QTFUqoFy2TWxnAC%2BGDN4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkXDHRiKm5%2FeSOt3ircA%2BRFIv8xHU71IclU%2FyuNtm4D4xcK6KGBlkT7me1ZAE0bTmsNy6OwlRsHcRRlnqJh3pEnP5w2Zxm70y8yQ2IBP4N%2B3IPRYnYa%2FVM4gM5jMhW8fH7wnpYGAH7pYWswlLvUP5ojsASsIObSGAQqctSLGU1x03VB98WtyXES%2BkMrnI2d9SCO1jG8rESx45Ofl7jKK%2BUsNpeaoQL4GPcrKS3VOzhtHlnJSPxhiZHkWoGkfQTqeKekSGmPHykIjhHTo97nwyE%2BeP6c9TCjWRwIUV2DCMPR7jpc8xi0YcG4u%2BviPZzu3qdQxCk4t33flOXMzFykh5N2O67ZE3GUyNznBaFP1Stz%2Bb96LFLnnO0mCqjG40xsugzvrAmRfJJo5Yom1fOYLq%2BE2Rwf8uh7rEUPlRW%2Fm9HkRxjixk3SmgYcnGEdqRwez7JvVTD317QKqrN%2Bt1vFpurHU6Szm99JB9OuahCM2RQPpjeBydrTxbRtQgStwJUb4wxs8auZbHOBOaXEcWCHqR8Ox%2BWYffwnHrdaaBOMiACb%2FHSGhV%2Fcmee%2FC6MgnF4TRLpxq%2B5fIN1ASV94U5GvOTUHbRZfARQ2KnAgiG1mcwKjUat5I29bpRJA1%2BxuCeWVYeu%2F692PNPFsdrqRMLWzqsIGOqUB0fLsychOYvT8Gtb058lnkICxV3LOq2I9o58i%2B0T09dM39fHDE2HncxVe7KECBhoISXbQJJCx4zTCKGALGf09CwjjSR1KKK1IvC9622i5m69VRaq5YbPhfTttHZKUVf72B%2Fr83lJzfptXp9UfTo6HOyuGdpfbhfrrTpbXnERjnwaccxQHzoUp%2Bs8UMlBO3LDgVUs8uG9VV5eNzC3nAceifi9XGG8t&X-Amz-Signature=9a2be635a519fe8e109b30fa3e14edbfcfc66e6be9442c6e5cae0c51679467bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG5N3MQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFelfHuX%2B48KvVDtFEer5t4VD%2B49OzRzLiqR%2BqxxJbebAiEA6JbT70bp%2FzfLS9jWYs0Kf83QTFUqoFy2TWxnAC%2BGDN4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkXDHRiKm5%2FeSOt3ircA%2BRFIv8xHU71IclU%2FyuNtm4D4xcK6KGBlkT7me1ZAE0bTmsNy6OwlRsHcRRlnqJh3pEnP5w2Zxm70y8yQ2IBP4N%2B3IPRYnYa%2FVM4gM5jMhW8fH7wnpYGAH7pYWswlLvUP5ojsASsIObSGAQqctSLGU1x03VB98WtyXES%2BkMrnI2d9SCO1jG8rESx45Ofl7jKK%2BUsNpeaoQL4GPcrKS3VOzhtHlnJSPxhiZHkWoGkfQTqeKekSGmPHykIjhHTo97nwyE%2BeP6c9TCjWRwIUV2DCMPR7jpc8xi0YcG4u%2BviPZzu3qdQxCk4t33flOXMzFykh5N2O67ZE3GUyNznBaFP1Stz%2Bb96LFLnnO0mCqjG40xsugzvrAmRfJJo5Yom1fOYLq%2BE2Rwf8uh7rEUPlRW%2Fm9HkRxjixk3SmgYcnGEdqRwez7JvVTD317QKqrN%2Bt1vFpurHU6Szm99JB9OuahCM2RQPpjeBydrTxbRtQgStwJUb4wxs8auZbHOBOaXEcWCHqR8Ox%2BWYffwnHrdaaBOMiACb%2FHSGhV%2Fcmee%2FC6MgnF4TRLpxq%2B5fIN1ASV94U5GvOTUHbRZfARQ2KnAgiG1mcwKjUat5I29bpRJA1%2BxuCeWVYeu%2F692PNPFsdrqRMLWzqsIGOqUB0fLsychOYvT8Gtb058lnkICxV3LOq2I9o58i%2B0T09dM39fHDE2HncxVe7KECBhoISXbQJJCx4zTCKGALGf09CwjjSR1KKK1IvC9622i5m69VRaq5YbPhfTttHZKUVf72B%2Fr83lJzfptXp9UfTo6HOyuGdpfbhfrrTpbXnERjnwaccxQHzoUp%2Bs8UMlBO3LDgVUs8uG9VV5eNzC3nAceifi9XGG8t&X-Amz-Signature=36b4a960435a56b0dc691f70adb43695414e2c193e9d0a80ffa1052bc7facb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG5N3MQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFelfHuX%2B48KvVDtFEer5t4VD%2B49OzRzLiqR%2BqxxJbebAiEA6JbT70bp%2FzfLS9jWYs0Kf83QTFUqoFy2TWxnAC%2BGDN4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkXDHRiKm5%2FeSOt3ircA%2BRFIv8xHU71IclU%2FyuNtm4D4xcK6KGBlkT7me1ZAE0bTmsNy6OwlRsHcRRlnqJh3pEnP5w2Zxm70y8yQ2IBP4N%2B3IPRYnYa%2FVM4gM5jMhW8fH7wnpYGAH7pYWswlLvUP5ojsASsIObSGAQqctSLGU1x03VB98WtyXES%2BkMrnI2d9SCO1jG8rESx45Ofl7jKK%2BUsNpeaoQL4GPcrKS3VOzhtHlnJSPxhiZHkWoGkfQTqeKekSGmPHykIjhHTo97nwyE%2BeP6c9TCjWRwIUV2DCMPR7jpc8xi0YcG4u%2BviPZzu3qdQxCk4t33flOXMzFykh5N2O67ZE3GUyNznBaFP1Stz%2Bb96LFLnnO0mCqjG40xsugzvrAmRfJJo5Yom1fOYLq%2BE2Rwf8uh7rEUPlRW%2Fm9HkRxjixk3SmgYcnGEdqRwez7JvVTD317QKqrN%2Bt1vFpurHU6Szm99JB9OuahCM2RQPpjeBydrTxbRtQgStwJUb4wxs8auZbHOBOaXEcWCHqR8Ox%2BWYffwnHrdaaBOMiACb%2FHSGhV%2Fcmee%2FC6MgnF4TRLpxq%2B5fIN1ASV94U5GvOTUHbRZfARQ2KnAgiG1mcwKjUat5I29bpRJA1%2BxuCeWVYeu%2F692PNPFsdrqRMLWzqsIGOqUB0fLsychOYvT8Gtb058lnkICxV3LOq2I9o58i%2B0T09dM39fHDE2HncxVe7KECBhoISXbQJJCx4zTCKGALGf09CwjjSR1KKK1IvC9622i5m69VRaq5YbPhfTttHZKUVf72B%2Fr83lJzfptXp9UfTo6HOyuGdpfbhfrrTpbXnERjnwaccxQHzoUp%2Bs8UMlBO3LDgVUs8uG9VV5eNzC3nAceifi9XGG8t&X-Amz-Signature=b792e359bc82c53b705bb7a6f997c87c23c35fa46b4b4cc3212778d934753152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG5N3MQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFelfHuX%2B48KvVDtFEer5t4VD%2B49OzRzLiqR%2BqxxJbebAiEA6JbT70bp%2FzfLS9jWYs0Kf83QTFUqoFy2TWxnAC%2BGDN4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkXDHRiKm5%2FeSOt3ircA%2BRFIv8xHU71IclU%2FyuNtm4D4xcK6KGBlkT7me1ZAE0bTmsNy6OwlRsHcRRlnqJh3pEnP5w2Zxm70y8yQ2IBP4N%2B3IPRYnYa%2FVM4gM5jMhW8fH7wnpYGAH7pYWswlLvUP5ojsASsIObSGAQqctSLGU1x03VB98WtyXES%2BkMrnI2d9SCO1jG8rESx45Ofl7jKK%2BUsNpeaoQL4GPcrKS3VOzhtHlnJSPxhiZHkWoGkfQTqeKekSGmPHykIjhHTo97nwyE%2BeP6c9TCjWRwIUV2DCMPR7jpc8xi0YcG4u%2BviPZzu3qdQxCk4t33flOXMzFykh5N2O67ZE3GUyNznBaFP1Stz%2Bb96LFLnnO0mCqjG40xsugzvrAmRfJJo5Yom1fOYLq%2BE2Rwf8uh7rEUPlRW%2Fm9HkRxjixk3SmgYcnGEdqRwez7JvVTD317QKqrN%2Bt1vFpurHU6Szm99JB9OuahCM2RQPpjeBydrTxbRtQgStwJUb4wxs8auZbHOBOaXEcWCHqR8Ox%2BWYffwnHrdaaBOMiACb%2FHSGhV%2Fcmee%2FC6MgnF4TRLpxq%2B5fIN1ASV94U5GvOTUHbRZfARQ2KnAgiG1mcwKjUat5I29bpRJA1%2BxuCeWVYeu%2F692PNPFsdrqRMLWzqsIGOqUB0fLsychOYvT8Gtb058lnkICxV3LOq2I9o58i%2B0T09dM39fHDE2HncxVe7KECBhoISXbQJJCx4zTCKGALGf09CwjjSR1KKK1IvC9622i5m69VRaq5YbPhfTttHZKUVf72B%2Fr83lJzfptXp9UfTo6HOyuGdpfbhfrrTpbXnERjnwaccxQHzoUp%2Bs8UMlBO3LDgVUs8uG9VV5eNzC3nAceifi9XGG8t&X-Amz-Signature=1f43dde956db907a41ee0d1ccc1682b52188fd451f9701b8a4f7afa7b1729e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
