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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43DKPZD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Yu%2FdZnye9qOBbunxOfxAmNeNTNhElOb5OS7nyeQZmAiEAzbAG1Gep4ZyM6PEcnYJvOiSuGXHUeMkIWhk6YmCACC0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBAfZMYmLmhD%2FIvHPircA2tsAwAkbo%2BjrbYMOLIDLwQ%2FUOyBtXiJoWAKIzkyFn1x%2BnT9KC20lb%2FotritffQAQodKzVGNGG7Ix3Nh5Azy9bkG89DM%2FCCW44VHEEoHPdNO%2BJazs1t65XVFTGtc%2BQVg3Q%2BEg4hKZjBAqI5S2EPyFflIHTZ1Gkg76L9t8utTPgcDLBsJCQ2d7TbU2dEQKTRnqFbXW6Tc8kaDhlb57ti77XRnu6bgndeCmaU%2FZvxFIf1d%2FbFXMqL1vjB9JIBG9ERzNEgb5HbCKd0e0crfiwWcIIFbG7Mq%2F9iUG3h9gg12uSQT3lP9MulYJPxaOZexGDxRgPkJnv5CM9%2BhO3RFnlBqSEPBZR2qkzSQqIDvELiRrN5LpdDSWbdhmIN3oxRdSuLCLjZPCOWleDfjKaHwiWjOTcDvVAtSdf4QavyAakG1Ktl5Q3h2NYyhAkFu13th3mXGTTAt554Y2Fvb11ReHyvJY2dB1AFuY70XsG757CZE1AQWR3Q%2B8k4xo2UgsugdF9cPWMzo%2BB3hsMhYzTWGCNlqngnK%2BUs%2BeL%2BhCka%2B5JpyXCugQfvXlpAZfrJzUmd6BnxedJXDcjaj1CWa%2FfW8MA3webiFtVC99y8DTQ8GlsUH6dknlJFBM57V5E%2BMVqVPMPjs670GOqUBnD5KwnCttJTkC050rx%2BI9jq9XOFF6Dmip29U0WTAg6gVuShMkEYBis4uZWQNdiBLKbxJgjNP3UaCBoSWUueqMVkQlGn8OXGhMVG5a6bCS%2BrSOa7DIePO%2BnX82r2n%2Fdr0SJFJ5V9QJ58ESE5qLZiDKgQfRTLmphSh9aCRBKahEFpMS70NQJ9MQsugUJU3MoF0x3AvBBc0hU6ctO91OLTFVPnw6OEw&X-Amz-Signature=ce3127e3062ea2fc264ea03df04a0622bd2cbc184ceab139e294401576761be3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43DKPZD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Yu%2FdZnye9qOBbunxOfxAmNeNTNhElOb5OS7nyeQZmAiEAzbAG1Gep4ZyM6PEcnYJvOiSuGXHUeMkIWhk6YmCACC0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBAfZMYmLmhD%2FIvHPircA2tsAwAkbo%2BjrbYMOLIDLwQ%2FUOyBtXiJoWAKIzkyFn1x%2BnT9KC20lb%2FotritffQAQodKzVGNGG7Ix3Nh5Azy9bkG89DM%2FCCW44VHEEoHPdNO%2BJazs1t65XVFTGtc%2BQVg3Q%2BEg4hKZjBAqI5S2EPyFflIHTZ1Gkg76L9t8utTPgcDLBsJCQ2d7TbU2dEQKTRnqFbXW6Tc8kaDhlb57ti77XRnu6bgndeCmaU%2FZvxFIf1d%2FbFXMqL1vjB9JIBG9ERzNEgb5HbCKd0e0crfiwWcIIFbG7Mq%2F9iUG3h9gg12uSQT3lP9MulYJPxaOZexGDxRgPkJnv5CM9%2BhO3RFnlBqSEPBZR2qkzSQqIDvELiRrN5LpdDSWbdhmIN3oxRdSuLCLjZPCOWleDfjKaHwiWjOTcDvVAtSdf4QavyAakG1Ktl5Q3h2NYyhAkFu13th3mXGTTAt554Y2Fvb11ReHyvJY2dB1AFuY70XsG757CZE1AQWR3Q%2B8k4xo2UgsugdF9cPWMzo%2BB3hsMhYzTWGCNlqngnK%2BUs%2BeL%2BhCka%2B5JpyXCugQfvXlpAZfrJzUmd6BnxedJXDcjaj1CWa%2FfW8MA3webiFtVC99y8DTQ8GlsUH6dknlJFBM57V5E%2BMVqVPMPjs670GOqUBnD5KwnCttJTkC050rx%2BI9jq9XOFF6Dmip29U0WTAg6gVuShMkEYBis4uZWQNdiBLKbxJgjNP3UaCBoSWUueqMVkQlGn8OXGhMVG5a6bCS%2BrSOa7DIePO%2BnX82r2n%2Fdr0SJFJ5V9QJ58ESE5qLZiDKgQfRTLmphSh9aCRBKahEFpMS70NQJ9MQsugUJU3MoF0x3AvBBc0hU6ctO91OLTFVPnw6OEw&X-Amz-Signature=438a8a165f83f8c39f336437c7c1c42d2bc7b92c263f1a73ba57bf0617ed7f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43DKPZD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Yu%2FdZnye9qOBbunxOfxAmNeNTNhElOb5OS7nyeQZmAiEAzbAG1Gep4ZyM6PEcnYJvOiSuGXHUeMkIWhk6YmCACC0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBAfZMYmLmhD%2FIvHPircA2tsAwAkbo%2BjrbYMOLIDLwQ%2FUOyBtXiJoWAKIzkyFn1x%2BnT9KC20lb%2FotritffQAQodKzVGNGG7Ix3Nh5Azy9bkG89DM%2FCCW44VHEEoHPdNO%2BJazs1t65XVFTGtc%2BQVg3Q%2BEg4hKZjBAqI5S2EPyFflIHTZ1Gkg76L9t8utTPgcDLBsJCQ2d7TbU2dEQKTRnqFbXW6Tc8kaDhlb57ti77XRnu6bgndeCmaU%2FZvxFIf1d%2FbFXMqL1vjB9JIBG9ERzNEgb5HbCKd0e0crfiwWcIIFbG7Mq%2F9iUG3h9gg12uSQT3lP9MulYJPxaOZexGDxRgPkJnv5CM9%2BhO3RFnlBqSEPBZR2qkzSQqIDvELiRrN5LpdDSWbdhmIN3oxRdSuLCLjZPCOWleDfjKaHwiWjOTcDvVAtSdf4QavyAakG1Ktl5Q3h2NYyhAkFu13th3mXGTTAt554Y2Fvb11ReHyvJY2dB1AFuY70XsG757CZE1AQWR3Q%2B8k4xo2UgsugdF9cPWMzo%2BB3hsMhYzTWGCNlqngnK%2BUs%2BeL%2BhCka%2B5JpyXCugQfvXlpAZfrJzUmd6BnxedJXDcjaj1CWa%2FfW8MA3webiFtVC99y8DTQ8GlsUH6dknlJFBM57V5E%2BMVqVPMPjs670GOqUBnD5KwnCttJTkC050rx%2BI9jq9XOFF6Dmip29U0WTAg6gVuShMkEYBis4uZWQNdiBLKbxJgjNP3UaCBoSWUueqMVkQlGn8OXGhMVG5a6bCS%2BrSOa7DIePO%2BnX82r2n%2Fdr0SJFJ5V9QJ58ESE5qLZiDKgQfRTLmphSh9aCRBKahEFpMS70NQJ9MQsugUJU3MoF0x3AvBBc0hU6ctO91OLTFVPnw6OEw&X-Amz-Signature=4de470f42b5d38d5d9720a7c5f5a6916d6196a563c9b4890d1893131915f2f77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43DKPZD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Yu%2FdZnye9qOBbunxOfxAmNeNTNhElOb5OS7nyeQZmAiEAzbAG1Gep4ZyM6PEcnYJvOiSuGXHUeMkIWhk6YmCACC0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBAfZMYmLmhD%2FIvHPircA2tsAwAkbo%2BjrbYMOLIDLwQ%2FUOyBtXiJoWAKIzkyFn1x%2BnT9KC20lb%2FotritffQAQodKzVGNGG7Ix3Nh5Azy9bkG89DM%2FCCW44VHEEoHPdNO%2BJazs1t65XVFTGtc%2BQVg3Q%2BEg4hKZjBAqI5S2EPyFflIHTZ1Gkg76L9t8utTPgcDLBsJCQ2d7TbU2dEQKTRnqFbXW6Tc8kaDhlb57ti77XRnu6bgndeCmaU%2FZvxFIf1d%2FbFXMqL1vjB9JIBG9ERzNEgb5HbCKd0e0crfiwWcIIFbG7Mq%2F9iUG3h9gg12uSQT3lP9MulYJPxaOZexGDxRgPkJnv5CM9%2BhO3RFnlBqSEPBZR2qkzSQqIDvELiRrN5LpdDSWbdhmIN3oxRdSuLCLjZPCOWleDfjKaHwiWjOTcDvVAtSdf4QavyAakG1Ktl5Q3h2NYyhAkFu13th3mXGTTAt554Y2Fvb11ReHyvJY2dB1AFuY70XsG757CZE1AQWR3Q%2B8k4xo2UgsugdF9cPWMzo%2BB3hsMhYzTWGCNlqngnK%2BUs%2BeL%2BhCka%2B5JpyXCugQfvXlpAZfrJzUmd6BnxedJXDcjaj1CWa%2FfW8MA3webiFtVC99y8DTQ8GlsUH6dknlJFBM57V5E%2BMVqVPMPjs670GOqUBnD5KwnCttJTkC050rx%2BI9jq9XOFF6Dmip29U0WTAg6gVuShMkEYBis4uZWQNdiBLKbxJgjNP3UaCBoSWUueqMVkQlGn8OXGhMVG5a6bCS%2BrSOa7DIePO%2BnX82r2n%2Fdr0SJFJ5V9QJ58ESE5qLZiDKgQfRTLmphSh9aCRBKahEFpMS70NQJ9MQsugUJU3MoF0x3AvBBc0hU6ctO91OLTFVPnw6OEw&X-Amz-Signature=42cf82f38b8a2ea61130b01c4a3d74a4569957292ba16a8adc283c99cf4afa8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43DKPZD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Yu%2FdZnye9qOBbunxOfxAmNeNTNhElOb5OS7nyeQZmAiEAzbAG1Gep4ZyM6PEcnYJvOiSuGXHUeMkIWhk6YmCACC0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBAfZMYmLmhD%2FIvHPircA2tsAwAkbo%2BjrbYMOLIDLwQ%2FUOyBtXiJoWAKIzkyFn1x%2BnT9KC20lb%2FotritffQAQodKzVGNGG7Ix3Nh5Azy9bkG89DM%2FCCW44VHEEoHPdNO%2BJazs1t65XVFTGtc%2BQVg3Q%2BEg4hKZjBAqI5S2EPyFflIHTZ1Gkg76L9t8utTPgcDLBsJCQ2d7TbU2dEQKTRnqFbXW6Tc8kaDhlb57ti77XRnu6bgndeCmaU%2FZvxFIf1d%2FbFXMqL1vjB9JIBG9ERzNEgb5HbCKd0e0crfiwWcIIFbG7Mq%2F9iUG3h9gg12uSQT3lP9MulYJPxaOZexGDxRgPkJnv5CM9%2BhO3RFnlBqSEPBZR2qkzSQqIDvELiRrN5LpdDSWbdhmIN3oxRdSuLCLjZPCOWleDfjKaHwiWjOTcDvVAtSdf4QavyAakG1Ktl5Q3h2NYyhAkFu13th3mXGTTAt554Y2Fvb11ReHyvJY2dB1AFuY70XsG757CZE1AQWR3Q%2B8k4xo2UgsugdF9cPWMzo%2BB3hsMhYzTWGCNlqngnK%2BUs%2BeL%2BhCka%2B5JpyXCugQfvXlpAZfrJzUmd6BnxedJXDcjaj1CWa%2FfW8MA3webiFtVC99y8DTQ8GlsUH6dknlJFBM57V5E%2BMVqVPMPjs670GOqUBnD5KwnCttJTkC050rx%2BI9jq9XOFF6Dmip29U0WTAg6gVuShMkEYBis4uZWQNdiBLKbxJgjNP3UaCBoSWUueqMVkQlGn8OXGhMVG5a6bCS%2BrSOa7DIePO%2BnX82r2n%2Fdr0SJFJ5V9QJ58ESE5qLZiDKgQfRTLmphSh9aCRBKahEFpMS70NQJ9MQsugUJU3MoF0x3AvBBc0hU6ctO91OLTFVPnw6OEw&X-Amz-Signature=528a430d5480a8e1df2073f7223da682cd422141e53b45d44ede53ad5db3d31c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43DKPZD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7Yu%2FdZnye9qOBbunxOfxAmNeNTNhElOb5OS7nyeQZmAiEAzbAG1Gep4ZyM6PEcnYJvOiSuGXHUeMkIWhk6YmCACC0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBAfZMYmLmhD%2FIvHPircA2tsAwAkbo%2BjrbYMOLIDLwQ%2FUOyBtXiJoWAKIzkyFn1x%2BnT9KC20lb%2FotritffQAQodKzVGNGG7Ix3Nh5Azy9bkG89DM%2FCCW44VHEEoHPdNO%2BJazs1t65XVFTGtc%2BQVg3Q%2BEg4hKZjBAqI5S2EPyFflIHTZ1Gkg76L9t8utTPgcDLBsJCQ2d7TbU2dEQKTRnqFbXW6Tc8kaDhlb57ti77XRnu6bgndeCmaU%2FZvxFIf1d%2FbFXMqL1vjB9JIBG9ERzNEgb5HbCKd0e0crfiwWcIIFbG7Mq%2F9iUG3h9gg12uSQT3lP9MulYJPxaOZexGDxRgPkJnv5CM9%2BhO3RFnlBqSEPBZR2qkzSQqIDvELiRrN5LpdDSWbdhmIN3oxRdSuLCLjZPCOWleDfjKaHwiWjOTcDvVAtSdf4QavyAakG1Ktl5Q3h2NYyhAkFu13th3mXGTTAt554Y2Fvb11ReHyvJY2dB1AFuY70XsG757CZE1AQWR3Q%2B8k4xo2UgsugdF9cPWMzo%2BB3hsMhYzTWGCNlqngnK%2BUs%2BeL%2BhCka%2B5JpyXCugQfvXlpAZfrJzUmd6BnxedJXDcjaj1CWa%2FfW8MA3webiFtVC99y8DTQ8GlsUH6dknlJFBM57V5E%2BMVqVPMPjs670GOqUBnD5KwnCttJTkC050rx%2BI9jq9XOFF6Dmip29U0WTAg6gVuShMkEYBis4uZWQNdiBLKbxJgjNP3UaCBoSWUueqMVkQlGn8OXGhMVG5a6bCS%2BrSOa7DIePO%2BnX82r2n%2Fdr0SJFJ5V9QJ58ESE5qLZiDKgQfRTLmphSh9aCRBKahEFpMS70NQJ9MQsugUJU3MoF0x3AvBBc0hU6ctO91OLTFVPnw6OEw&X-Amz-Signature=41b93880e918603a3d3560edf780153034bb7d525c9ccaf7a95f90493552c39c&X-Amz-SignedHeaders=host&x-id=GetObject)
