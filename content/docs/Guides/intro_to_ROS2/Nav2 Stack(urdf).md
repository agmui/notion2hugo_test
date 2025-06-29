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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIM46BA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNldhsgBYYOK0jqYEq%2FJOiND7sP1muisEz5dl7wWzO2AiEAnLxDbgFEFHyjkBW1ROpMV6fHiqG6nxpYwpUCpPM2wK4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPLHAtYrBWYv6n1rCrcA%2BlMUlRuthysNpUAmaamkMurGzdbj%2FZUeSLwECmuqSpLuFCJrEg1qDMVAuRPmU2t1B47VFW1wWVg6IbY9ZrdqLlRLhVDjAbj5rcmSwmL32gqcD6AvVMzEjqXPwjDVbKKp1guHvPPbvAXxhxiAtL94J%2BemmUBqeqrYIZWP9QwfHnfzWYEtcRQf6B2kvZTC%2BgTHUbxBYuF7Ely%2FB4I3xsriM4wCqLnoaUF%2FA7b1rZMDA8HYw6I5XJmk15NwxsffWo1u%2BIFClUOnEnCdZot%2FD7UsaL%2FVfe7VxZcAaB2F00CJeUK4v%2BkQGV6r7xsMNisk7mRVAG2F8e3LUaPVnFoall3iS%2Bp57AAS1PalhSapFVcU1SCajQst9kPz3GJWNUZG93w10FnELIX4o915BaNSoNFWO5MMUEVe01WJn1VURQBr%2FAOHpeRPPeqacBEzZC%2Fs5N04tzSwBSsocZSQYqIrVTwO160df%2BWSZO6IKfsI5QLNAwVQmlJuyzMooTeDS3JpdP7pzE2NHcUfz%2BE91nJIh0s%2BuKWYlOKbLCfKQdsACMhQvyWNo7yx%2FGK%2F%2BnHgKnN0btjDBkbr4Y68MnYzegeIxv7iiXy%2BVc3QSBOxL2PvjmW2XZPciRegKsijOD8pOGVMLDfgsMGOqUBdjTfsA%2Boiw2xgrVERnewjuB9TP7Ec5mpwMcrJ3h9PCvCDEloQkkUn7io%2FHn%2FZKXcJyHHLiXKfljoqn5ZflfKFOU8hANuKZX%2ByBtzy%2F%2FM8VlxclsjwDVBtcX2qRzMK2nhDBw24%2FJgkLdBftWxrMPp2VyplDvQP%2FPGAMbkA2wpVUrWgbAPs9GZ3kUiK5Ani1WuKTssyeOWP8gIVSGEHJHtwa8%2Fx9ko&X-Amz-Signature=c14d71986fbbb62ea853f181f2c747eaabc3aaad411baa972262fd9d6d4afef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIM46BA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNldhsgBYYOK0jqYEq%2FJOiND7sP1muisEz5dl7wWzO2AiEAnLxDbgFEFHyjkBW1ROpMV6fHiqG6nxpYwpUCpPM2wK4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPLHAtYrBWYv6n1rCrcA%2BlMUlRuthysNpUAmaamkMurGzdbj%2FZUeSLwECmuqSpLuFCJrEg1qDMVAuRPmU2t1B47VFW1wWVg6IbY9ZrdqLlRLhVDjAbj5rcmSwmL32gqcD6AvVMzEjqXPwjDVbKKp1guHvPPbvAXxhxiAtL94J%2BemmUBqeqrYIZWP9QwfHnfzWYEtcRQf6B2kvZTC%2BgTHUbxBYuF7Ely%2FB4I3xsriM4wCqLnoaUF%2FA7b1rZMDA8HYw6I5XJmk15NwxsffWo1u%2BIFClUOnEnCdZot%2FD7UsaL%2FVfe7VxZcAaB2F00CJeUK4v%2BkQGV6r7xsMNisk7mRVAG2F8e3LUaPVnFoall3iS%2Bp57AAS1PalhSapFVcU1SCajQst9kPz3GJWNUZG93w10FnELIX4o915BaNSoNFWO5MMUEVe01WJn1VURQBr%2FAOHpeRPPeqacBEzZC%2Fs5N04tzSwBSsocZSQYqIrVTwO160df%2BWSZO6IKfsI5QLNAwVQmlJuyzMooTeDS3JpdP7pzE2NHcUfz%2BE91nJIh0s%2BuKWYlOKbLCfKQdsACMhQvyWNo7yx%2FGK%2F%2BnHgKnN0btjDBkbr4Y68MnYzegeIxv7iiXy%2BVc3QSBOxL2PvjmW2XZPciRegKsijOD8pOGVMLDfgsMGOqUBdjTfsA%2Boiw2xgrVERnewjuB9TP7Ec5mpwMcrJ3h9PCvCDEloQkkUn7io%2FHn%2FZKXcJyHHLiXKfljoqn5ZflfKFOU8hANuKZX%2ByBtzy%2F%2FM8VlxclsjwDVBtcX2qRzMK2nhDBw24%2FJgkLdBftWxrMPp2VyplDvQP%2FPGAMbkA2wpVUrWgbAPs9GZ3kUiK5Ani1WuKTssyeOWP8gIVSGEHJHtwa8%2Fx9ko&X-Amz-Signature=46f32a04347b06345228ebfc2034191e386faab4859a60ad61d906d5d881ad34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIM46BA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNldhsgBYYOK0jqYEq%2FJOiND7sP1muisEz5dl7wWzO2AiEAnLxDbgFEFHyjkBW1ROpMV6fHiqG6nxpYwpUCpPM2wK4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPLHAtYrBWYv6n1rCrcA%2BlMUlRuthysNpUAmaamkMurGzdbj%2FZUeSLwECmuqSpLuFCJrEg1qDMVAuRPmU2t1B47VFW1wWVg6IbY9ZrdqLlRLhVDjAbj5rcmSwmL32gqcD6AvVMzEjqXPwjDVbKKp1guHvPPbvAXxhxiAtL94J%2BemmUBqeqrYIZWP9QwfHnfzWYEtcRQf6B2kvZTC%2BgTHUbxBYuF7Ely%2FB4I3xsriM4wCqLnoaUF%2FA7b1rZMDA8HYw6I5XJmk15NwxsffWo1u%2BIFClUOnEnCdZot%2FD7UsaL%2FVfe7VxZcAaB2F00CJeUK4v%2BkQGV6r7xsMNisk7mRVAG2F8e3LUaPVnFoall3iS%2Bp57AAS1PalhSapFVcU1SCajQst9kPz3GJWNUZG93w10FnELIX4o915BaNSoNFWO5MMUEVe01WJn1VURQBr%2FAOHpeRPPeqacBEzZC%2Fs5N04tzSwBSsocZSQYqIrVTwO160df%2BWSZO6IKfsI5QLNAwVQmlJuyzMooTeDS3JpdP7pzE2NHcUfz%2BE91nJIh0s%2BuKWYlOKbLCfKQdsACMhQvyWNo7yx%2FGK%2F%2BnHgKnN0btjDBkbr4Y68MnYzegeIxv7iiXy%2BVc3QSBOxL2PvjmW2XZPciRegKsijOD8pOGVMLDfgsMGOqUBdjTfsA%2Boiw2xgrVERnewjuB9TP7Ec5mpwMcrJ3h9PCvCDEloQkkUn7io%2FHn%2FZKXcJyHHLiXKfljoqn5ZflfKFOU8hANuKZX%2ByBtzy%2F%2FM8VlxclsjwDVBtcX2qRzMK2nhDBw24%2FJgkLdBftWxrMPp2VyplDvQP%2FPGAMbkA2wpVUrWgbAPs9GZ3kUiK5Ani1WuKTssyeOWP8gIVSGEHJHtwa8%2Fx9ko&X-Amz-Signature=6f5fc09eec62aad3099a82159957bfdfcfe30b0d71d6d5786e8ce643e32d2f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIM46BA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNldhsgBYYOK0jqYEq%2FJOiND7sP1muisEz5dl7wWzO2AiEAnLxDbgFEFHyjkBW1ROpMV6fHiqG6nxpYwpUCpPM2wK4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPLHAtYrBWYv6n1rCrcA%2BlMUlRuthysNpUAmaamkMurGzdbj%2FZUeSLwECmuqSpLuFCJrEg1qDMVAuRPmU2t1B47VFW1wWVg6IbY9ZrdqLlRLhVDjAbj5rcmSwmL32gqcD6AvVMzEjqXPwjDVbKKp1guHvPPbvAXxhxiAtL94J%2BemmUBqeqrYIZWP9QwfHnfzWYEtcRQf6B2kvZTC%2BgTHUbxBYuF7Ely%2FB4I3xsriM4wCqLnoaUF%2FA7b1rZMDA8HYw6I5XJmk15NwxsffWo1u%2BIFClUOnEnCdZot%2FD7UsaL%2FVfe7VxZcAaB2F00CJeUK4v%2BkQGV6r7xsMNisk7mRVAG2F8e3LUaPVnFoall3iS%2Bp57AAS1PalhSapFVcU1SCajQst9kPz3GJWNUZG93w10FnELIX4o915BaNSoNFWO5MMUEVe01WJn1VURQBr%2FAOHpeRPPeqacBEzZC%2Fs5N04tzSwBSsocZSQYqIrVTwO160df%2BWSZO6IKfsI5QLNAwVQmlJuyzMooTeDS3JpdP7pzE2NHcUfz%2BE91nJIh0s%2BuKWYlOKbLCfKQdsACMhQvyWNo7yx%2FGK%2F%2BnHgKnN0btjDBkbr4Y68MnYzegeIxv7iiXy%2BVc3QSBOxL2PvjmW2XZPciRegKsijOD8pOGVMLDfgsMGOqUBdjTfsA%2Boiw2xgrVERnewjuB9TP7Ec5mpwMcrJ3h9PCvCDEloQkkUn7io%2FHn%2FZKXcJyHHLiXKfljoqn5ZflfKFOU8hANuKZX%2ByBtzy%2F%2FM8VlxclsjwDVBtcX2qRzMK2nhDBw24%2FJgkLdBftWxrMPp2VyplDvQP%2FPGAMbkA2wpVUrWgbAPs9GZ3kUiK5Ani1WuKTssyeOWP8gIVSGEHJHtwa8%2Fx9ko&X-Amz-Signature=64105252be50fcc4e686f5f6ae82d25dca26bc4763d4cca72bec5ba72767c7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIM46BA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNldhsgBYYOK0jqYEq%2FJOiND7sP1muisEz5dl7wWzO2AiEAnLxDbgFEFHyjkBW1ROpMV6fHiqG6nxpYwpUCpPM2wK4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPLHAtYrBWYv6n1rCrcA%2BlMUlRuthysNpUAmaamkMurGzdbj%2FZUeSLwECmuqSpLuFCJrEg1qDMVAuRPmU2t1B47VFW1wWVg6IbY9ZrdqLlRLhVDjAbj5rcmSwmL32gqcD6AvVMzEjqXPwjDVbKKp1guHvPPbvAXxhxiAtL94J%2BemmUBqeqrYIZWP9QwfHnfzWYEtcRQf6B2kvZTC%2BgTHUbxBYuF7Ely%2FB4I3xsriM4wCqLnoaUF%2FA7b1rZMDA8HYw6I5XJmk15NwxsffWo1u%2BIFClUOnEnCdZot%2FD7UsaL%2FVfe7VxZcAaB2F00CJeUK4v%2BkQGV6r7xsMNisk7mRVAG2F8e3LUaPVnFoall3iS%2Bp57AAS1PalhSapFVcU1SCajQst9kPz3GJWNUZG93w10FnELIX4o915BaNSoNFWO5MMUEVe01WJn1VURQBr%2FAOHpeRPPeqacBEzZC%2Fs5N04tzSwBSsocZSQYqIrVTwO160df%2BWSZO6IKfsI5QLNAwVQmlJuyzMooTeDS3JpdP7pzE2NHcUfz%2BE91nJIh0s%2BuKWYlOKbLCfKQdsACMhQvyWNo7yx%2FGK%2F%2BnHgKnN0btjDBkbr4Y68MnYzegeIxv7iiXy%2BVc3QSBOxL2PvjmW2XZPciRegKsijOD8pOGVMLDfgsMGOqUBdjTfsA%2Boiw2xgrVERnewjuB9TP7Ec5mpwMcrJ3h9PCvCDEloQkkUn7io%2FHn%2FZKXcJyHHLiXKfljoqn5ZflfKFOU8hANuKZX%2ByBtzy%2F%2FM8VlxclsjwDVBtcX2qRzMK2nhDBw24%2FJgkLdBftWxrMPp2VyplDvQP%2FPGAMbkA2wpVUrWgbAPs9GZ3kUiK5Ani1WuKTssyeOWP8gIVSGEHJHtwa8%2Fx9ko&X-Amz-Signature=4a9651c8f9ecc6c69115164bc2c7d998a964a037afde7a7c1c1c04766ff13966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIM46BA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNldhsgBYYOK0jqYEq%2FJOiND7sP1muisEz5dl7wWzO2AiEAnLxDbgFEFHyjkBW1ROpMV6fHiqG6nxpYwpUCpPM2wK4qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPLHAtYrBWYv6n1rCrcA%2BlMUlRuthysNpUAmaamkMurGzdbj%2FZUeSLwECmuqSpLuFCJrEg1qDMVAuRPmU2t1B47VFW1wWVg6IbY9ZrdqLlRLhVDjAbj5rcmSwmL32gqcD6AvVMzEjqXPwjDVbKKp1guHvPPbvAXxhxiAtL94J%2BemmUBqeqrYIZWP9QwfHnfzWYEtcRQf6B2kvZTC%2BgTHUbxBYuF7Ely%2FB4I3xsriM4wCqLnoaUF%2FA7b1rZMDA8HYw6I5XJmk15NwxsffWo1u%2BIFClUOnEnCdZot%2FD7UsaL%2FVfe7VxZcAaB2F00CJeUK4v%2BkQGV6r7xsMNisk7mRVAG2F8e3LUaPVnFoall3iS%2Bp57AAS1PalhSapFVcU1SCajQst9kPz3GJWNUZG93w10FnELIX4o915BaNSoNFWO5MMUEVe01WJn1VURQBr%2FAOHpeRPPeqacBEzZC%2Fs5N04tzSwBSsocZSQYqIrVTwO160df%2BWSZO6IKfsI5QLNAwVQmlJuyzMooTeDS3JpdP7pzE2NHcUfz%2BE91nJIh0s%2BuKWYlOKbLCfKQdsACMhQvyWNo7yx%2FGK%2F%2BnHgKnN0btjDBkbr4Y68MnYzegeIxv7iiXy%2BVc3QSBOxL2PvjmW2XZPciRegKsijOD8pOGVMLDfgsMGOqUBdjTfsA%2Boiw2xgrVERnewjuB9TP7Ec5mpwMcrJ3h9PCvCDEloQkkUn7io%2FHn%2FZKXcJyHHLiXKfljoqn5ZflfKFOU8hANuKZX%2ByBtzy%2F%2FM8VlxclsjwDVBtcX2qRzMK2nhDBw24%2FJgkLdBftWxrMPp2VyplDvQP%2FPGAMbkA2wpVUrWgbAPs9GZ3kUiK5Ani1WuKTssyeOWP8gIVSGEHJHtwa8%2Fx9ko&X-Amz-Signature=d4ec6e85e6f290b89add85644141fb678da3231ff209cdaf74314fb30dd63376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
