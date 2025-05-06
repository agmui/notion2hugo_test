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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFE4U5W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOk9%2FhTp%2FhRPT82sW61R8I3cTtUlfuvLInFhftIz74AiBgip%2BfetqToLvaURAo%2Bz5MsozsAvFeswZ97uDq9ZmETyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMezq8lh6z3gPF7mgwKtwDLR2B7IWdT0u3R30W%2F8UFtAw6MeJlbpfF9wnmZm279XxaDFCSsbeEZJP15E66w9YJ%2FQ6JoYwN4JCISbONnHYxa77THs2%2FvoFjOtj6gDRn8JWFY5XNeF6ocngsyxPneb06vl6aFfCfW%2FTCeyJEpRnmC%2FRHYFMQGSQmV7Uwc%2F3SdMFtOxH5EVoF6wtdk6Qr3v6miquIq2ZKpvX5nvkF0bWjoTfdLszNL7MPFAc8%2FlkySf%2FL57pRoGZtEpnbZ42DJjragMz7WztSiBS5411gQOpFeIUlIbDe2PerPZ0o5FX09fGsW34P%2F58xkdum4fmrI0eEfRSPqBMV2VrEudmB4rb5Vrf3V3XrUi2rK%2FxWt8tzMn2ng9VYa%2F68BqVANsHPWbE6kt5GA%2B22BnKFM8VUXNXOqVPqdCruht74VA5tsZL8OUVy0lejGofg%2FaEkR3khPL6Fgx5VAdT7Bn6GpndcOgf0aXtDBd81VCLfenWMPrJbChRT%2F24cyZvZrmCDEKF7%2BaPs7l6vWBNsJq1BlZsxgNF1B5sDGHVVA2TsBVkt48wKVKHKh70tZugLVCIUKS%2FO4lfMgn4hFV8HisVwJeoWABeib9VH3gsw4dxTGnO3tgSkblCdZGyuFN9LunuqNsUw8sLnwAY6pgFBQiinc4n9P5Wp40uWnIQNlea2Uz%2FZwZVahLxGXSN8kg%2BCCPqdu0Bc%2FwTwtH8zh7m2RaHj58G2n0XYjb%2FeT3nxBMAOk0l4ilsO3LqelmvT6%2FLnaKv9GPuc%2FiF3OzlJo6rFtCZc1qEnVaMcUjfvTNK2MsTHGkbpbj5zJqSeE9SQXY6mFIFfKpifJ%2Bqrje48y7VXxpoPNOg81H6tBXm0O6IRZjfvpune&X-Amz-Signature=bb8cad4e3765abc585b53adc6e5ffca7ce65bbed109a9271aa095c0bc4884317&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFE4U5W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOk9%2FhTp%2FhRPT82sW61R8I3cTtUlfuvLInFhftIz74AiBgip%2BfetqToLvaURAo%2Bz5MsozsAvFeswZ97uDq9ZmETyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMezq8lh6z3gPF7mgwKtwDLR2B7IWdT0u3R30W%2F8UFtAw6MeJlbpfF9wnmZm279XxaDFCSsbeEZJP15E66w9YJ%2FQ6JoYwN4JCISbONnHYxa77THs2%2FvoFjOtj6gDRn8JWFY5XNeF6ocngsyxPneb06vl6aFfCfW%2FTCeyJEpRnmC%2FRHYFMQGSQmV7Uwc%2F3SdMFtOxH5EVoF6wtdk6Qr3v6miquIq2ZKpvX5nvkF0bWjoTfdLszNL7MPFAc8%2FlkySf%2FL57pRoGZtEpnbZ42DJjragMz7WztSiBS5411gQOpFeIUlIbDe2PerPZ0o5FX09fGsW34P%2F58xkdum4fmrI0eEfRSPqBMV2VrEudmB4rb5Vrf3V3XrUi2rK%2FxWt8tzMn2ng9VYa%2F68BqVANsHPWbE6kt5GA%2B22BnKFM8VUXNXOqVPqdCruht74VA5tsZL8OUVy0lejGofg%2FaEkR3khPL6Fgx5VAdT7Bn6GpndcOgf0aXtDBd81VCLfenWMPrJbChRT%2F24cyZvZrmCDEKF7%2BaPs7l6vWBNsJq1BlZsxgNF1B5sDGHVVA2TsBVkt48wKVKHKh70tZugLVCIUKS%2FO4lfMgn4hFV8HisVwJeoWABeib9VH3gsw4dxTGnO3tgSkblCdZGyuFN9LunuqNsUw8sLnwAY6pgFBQiinc4n9P5Wp40uWnIQNlea2Uz%2FZwZVahLxGXSN8kg%2BCCPqdu0Bc%2FwTwtH8zh7m2RaHj58G2n0XYjb%2FeT3nxBMAOk0l4ilsO3LqelmvT6%2FLnaKv9GPuc%2FiF3OzlJo6rFtCZc1qEnVaMcUjfvTNK2MsTHGkbpbj5zJqSeE9SQXY6mFIFfKpifJ%2Bqrje48y7VXxpoPNOg81H6tBXm0O6IRZjfvpune&X-Amz-Signature=061b3a9a5bca40ade2d45c26901453de2ef37d8beb83cb1610606bb3ac1a6a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFE4U5W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOk9%2FhTp%2FhRPT82sW61R8I3cTtUlfuvLInFhftIz74AiBgip%2BfetqToLvaURAo%2Bz5MsozsAvFeswZ97uDq9ZmETyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMezq8lh6z3gPF7mgwKtwDLR2B7IWdT0u3R30W%2F8UFtAw6MeJlbpfF9wnmZm279XxaDFCSsbeEZJP15E66w9YJ%2FQ6JoYwN4JCISbONnHYxa77THs2%2FvoFjOtj6gDRn8JWFY5XNeF6ocngsyxPneb06vl6aFfCfW%2FTCeyJEpRnmC%2FRHYFMQGSQmV7Uwc%2F3SdMFtOxH5EVoF6wtdk6Qr3v6miquIq2ZKpvX5nvkF0bWjoTfdLszNL7MPFAc8%2FlkySf%2FL57pRoGZtEpnbZ42DJjragMz7WztSiBS5411gQOpFeIUlIbDe2PerPZ0o5FX09fGsW34P%2F58xkdum4fmrI0eEfRSPqBMV2VrEudmB4rb5Vrf3V3XrUi2rK%2FxWt8tzMn2ng9VYa%2F68BqVANsHPWbE6kt5GA%2B22BnKFM8VUXNXOqVPqdCruht74VA5tsZL8OUVy0lejGofg%2FaEkR3khPL6Fgx5VAdT7Bn6GpndcOgf0aXtDBd81VCLfenWMPrJbChRT%2F24cyZvZrmCDEKF7%2BaPs7l6vWBNsJq1BlZsxgNF1B5sDGHVVA2TsBVkt48wKVKHKh70tZugLVCIUKS%2FO4lfMgn4hFV8HisVwJeoWABeib9VH3gsw4dxTGnO3tgSkblCdZGyuFN9LunuqNsUw8sLnwAY6pgFBQiinc4n9P5Wp40uWnIQNlea2Uz%2FZwZVahLxGXSN8kg%2BCCPqdu0Bc%2FwTwtH8zh7m2RaHj58G2n0XYjb%2FeT3nxBMAOk0l4ilsO3LqelmvT6%2FLnaKv9GPuc%2FiF3OzlJo6rFtCZc1qEnVaMcUjfvTNK2MsTHGkbpbj5zJqSeE9SQXY6mFIFfKpifJ%2Bqrje48y7VXxpoPNOg81H6tBXm0O6IRZjfvpune&X-Amz-Signature=0374903238bd1d43e03d62ddbf703893ef641987c9983be3881fbe7a332cde5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFE4U5W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOk9%2FhTp%2FhRPT82sW61R8I3cTtUlfuvLInFhftIz74AiBgip%2BfetqToLvaURAo%2Bz5MsozsAvFeswZ97uDq9ZmETyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMezq8lh6z3gPF7mgwKtwDLR2B7IWdT0u3R30W%2F8UFtAw6MeJlbpfF9wnmZm279XxaDFCSsbeEZJP15E66w9YJ%2FQ6JoYwN4JCISbONnHYxa77THs2%2FvoFjOtj6gDRn8JWFY5XNeF6ocngsyxPneb06vl6aFfCfW%2FTCeyJEpRnmC%2FRHYFMQGSQmV7Uwc%2F3SdMFtOxH5EVoF6wtdk6Qr3v6miquIq2ZKpvX5nvkF0bWjoTfdLszNL7MPFAc8%2FlkySf%2FL57pRoGZtEpnbZ42DJjragMz7WztSiBS5411gQOpFeIUlIbDe2PerPZ0o5FX09fGsW34P%2F58xkdum4fmrI0eEfRSPqBMV2VrEudmB4rb5Vrf3V3XrUi2rK%2FxWt8tzMn2ng9VYa%2F68BqVANsHPWbE6kt5GA%2B22BnKFM8VUXNXOqVPqdCruht74VA5tsZL8OUVy0lejGofg%2FaEkR3khPL6Fgx5VAdT7Bn6GpndcOgf0aXtDBd81VCLfenWMPrJbChRT%2F24cyZvZrmCDEKF7%2BaPs7l6vWBNsJq1BlZsxgNF1B5sDGHVVA2TsBVkt48wKVKHKh70tZugLVCIUKS%2FO4lfMgn4hFV8HisVwJeoWABeib9VH3gsw4dxTGnO3tgSkblCdZGyuFN9LunuqNsUw8sLnwAY6pgFBQiinc4n9P5Wp40uWnIQNlea2Uz%2FZwZVahLxGXSN8kg%2BCCPqdu0Bc%2FwTwtH8zh7m2RaHj58G2n0XYjb%2FeT3nxBMAOk0l4ilsO3LqelmvT6%2FLnaKv9GPuc%2FiF3OzlJo6rFtCZc1qEnVaMcUjfvTNK2MsTHGkbpbj5zJqSeE9SQXY6mFIFfKpifJ%2Bqrje48y7VXxpoPNOg81H6tBXm0O6IRZjfvpune&X-Amz-Signature=80f6c5ac846a2766b190e4e41822ab81ed941bbe5efe1546a2ddb3308b4c094d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFE4U5W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOk9%2FhTp%2FhRPT82sW61R8I3cTtUlfuvLInFhftIz74AiBgip%2BfetqToLvaURAo%2Bz5MsozsAvFeswZ97uDq9ZmETyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMezq8lh6z3gPF7mgwKtwDLR2B7IWdT0u3R30W%2F8UFtAw6MeJlbpfF9wnmZm279XxaDFCSsbeEZJP15E66w9YJ%2FQ6JoYwN4JCISbONnHYxa77THs2%2FvoFjOtj6gDRn8JWFY5XNeF6ocngsyxPneb06vl6aFfCfW%2FTCeyJEpRnmC%2FRHYFMQGSQmV7Uwc%2F3SdMFtOxH5EVoF6wtdk6Qr3v6miquIq2ZKpvX5nvkF0bWjoTfdLszNL7MPFAc8%2FlkySf%2FL57pRoGZtEpnbZ42DJjragMz7WztSiBS5411gQOpFeIUlIbDe2PerPZ0o5FX09fGsW34P%2F58xkdum4fmrI0eEfRSPqBMV2VrEudmB4rb5Vrf3V3XrUi2rK%2FxWt8tzMn2ng9VYa%2F68BqVANsHPWbE6kt5GA%2B22BnKFM8VUXNXOqVPqdCruht74VA5tsZL8OUVy0lejGofg%2FaEkR3khPL6Fgx5VAdT7Bn6GpndcOgf0aXtDBd81VCLfenWMPrJbChRT%2F24cyZvZrmCDEKF7%2BaPs7l6vWBNsJq1BlZsxgNF1B5sDGHVVA2TsBVkt48wKVKHKh70tZugLVCIUKS%2FO4lfMgn4hFV8HisVwJeoWABeib9VH3gsw4dxTGnO3tgSkblCdZGyuFN9LunuqNsUw8sLnwAY6pgFBQiinc4n9P5Wp40uWnIQNlea2Uz%2FZwZVahLxGXSN8kg%2BCCPqdu0Bc%2FwTwtH8zh7m2RaHj58G2n0XYjb%2FeT3nxBMAOk0l4ilsO3LqelmvT6%2FLnaKv9GPuc%2FiF3OzlJo6rFtCZc1qEnVaMcUjfvTNK2MsTHGkbpbj5zJqSeE9SQXY6mFIFfKpifJ%2Bqrje48y7VXxpoPNOg81H6tBXm0O6IRZjfvpune&X-Amz-Signature=f85da261addcd87aa6cf2130fb7b78c4c509245b2c451cdf668049e9adb9bfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFE4U5W%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfOk9%2FhTp%2FhRPT82sW61R8I3cTtUlfuvLInFhftIz74AiBgip%2BfetqToLvaURAo%2Bz5MsozsAvFeswZ97uDq9ZmETyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMezq8lh6z3gPF7mgwKtwDLR2B7IWdT0u3R30W%2F8UFtAw6MeJlbpfF9wnmZm279XxaDFCSsbeEZJP15E66w9YJ%2FQ6JoYwN4JCISbONnHYxa77THs2%2FvoFjOtj6gDRn8JWFY5XNeF6ocngsyxPneb06vl6aFfCfW%2FTCeyJEpRnmC%2FRHYFMQGSQmV7Uwc%2F3SdMFtOxH5EVoF6wtdk6Qr3v6miquIq2ZKpvX5nvkF0bWjoTfdLszNL7MPFAc8%2FlkySf%2FL57pRoGZtEpnbZ42DJjragMz7WztSiBS5411gQOpFeIUlIbDe2PerPZ0o5FX09fGsW34P%2F58xkdum4fmrI0eEfRSPqBMV2VrEudmB4rb5Vrf3V3XrUi2rK%2FxWt8tzMn2ng9VYa%2F68BqVANsHPWbE6kt5GA%2B22BnKFM8VUXNXOqVPqdCruht74VA5tsZL8OUVy0lejGofg%2FaEkR3khPL6Fgx5VAdT7Bn6GpndcOgf0aXtDBd81VCLfenWMPrJbChRT%2F24cyZvZrmCDEKF7%2BaPs7l6vWBNsJq1BlZsxgNF1B5sDGHVVA2TsBVkt48wKVKHKh70tZugLVCIUKS%2FO4lfMgn4hFV8HisVwJeoWABeib9VH3gsw4dxTGnO3tgSkblCdZGyuFN9LunuqNsUw8sLnwAY6pgFBQiinc4n9P5Wp40uWnIQNlea2Uz%2FZwZVahLxGXSN8kg%2BCCPqdu0Bc%2FwTwtH8zh7m2RaHj58G2n0XYjb%2FeT3nxBMAOk0l4ilsO3LqelmvT6%2FLnaKv9GPuc%2FiF3OzlJo6rFtCZc1qEnVaMcUjfvTNK2MsTHGkbpbj5zJqSeE9SQXY6mFIFfKpifJ%2Bqrje48y7VXxpoPNOg81H6tBXm0O6IRZjfvpune&X-Amz-Signature=d0dcad4dc79879be894008bc7994de28f5b177f7838adce7e201ce50d1c5b742&X-Amz-SignedHeaders=host&x-id=GetObject)
