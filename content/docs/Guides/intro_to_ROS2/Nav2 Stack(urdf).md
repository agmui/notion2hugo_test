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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZEP3SF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCvQgQCFmMHzydq%2FkTjI6CElvenPiA3D8%2F5AqbqEqENLAIhAP1eMW5hEgvfaUsaof2dLoXrFOfV%2FSNcsHaDPW2oKtxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyrMqpF5JIadbSdJZwq3ANFLrVsDrPnx%2Fbi%2Bom3DHNvTP0hOwGLM9vCCx2hlFiPQFKQZMk1Q5O8%2FzbrzA64yYsySUMSl6B%2BpNe5ITP2EcWNc%2FyqYZjB3MhIkXghb4tqEly%2FtDmAr%2BaiGC8iTXQOp4YnQ9NX2MhJAJMtsvIK79cS404A31TkDBeDK3yd64VsKlLkTV3uuCCY6piWlUEgkL4ZJUHdjv2OBBM1s2cVMTtXN1FXH7zD3nNqnvWMboVueN8dYk5BEO9LilaW2NCD0pGV1APpDxZT87aARkLpMAIWKgJjNbQVsfRlxhM0msFAiTxDp0weXI4JLUNJh8D42S20JcNkck0ekU6KkKaDakZLWx%2B5UZRiFHBsNMRGGOHX5E27a%2B8h0Zm4neFIPnkJiUO6tVamD%2Bo3j7A4IgA59BKqoHKeRMeFQ4%2BXPP0gn42c9rYCDcNwKqAfGLJAHIeZDINO3lNO0Rkqx%2FOmjswNCxL2vISUfAkfv91B6CZcDdvDfCUEPh45qkxNlK0nsxo2b5VMc9J4HGuaa%2BPDKTW2N%2FP%2FMapKy4cFcSPxpGOaXfzKPadpqg8TAmzqqeBHcrvxJSSC8YBys0Hqa%2FtO%2B74xZaJm6vtI7jBjpClvg%2FZsqYkhugEQKfq%2BRxZvtj7DIDCps%2BfCBjqkARp9093uZqeyjzmReDsGB4ZGx%2B9ims%2FxXmXVnM96dukVdXT0fUJvdh5ARJ0ywEXm7ZysU%2BB%2FMbnMJk5IOj8vBx58BD%2FkVSI9jj9SDL%2B6Pnbo4wgbwQvIlc9G6wPJqB7bxBKBXHN3CGOQNntMwLmf7N6DO%2FLn1d%2B5CafEP6jItSAGFfd%2FRj1DQ8LW99CfFz6L%2Fpp8tTHssWnORHUoyOd0GMYT3NW2&X-Amz-Signature=29a93c123a8ba83024c5bed4dcd22a3eb3a986a1fefebca0021dcfc635aaa3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZEP3SF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCvQgQCFmMHzydq%2FkTjI6CElvenPiA3D8%2F5AqbqEqENLAIhAP1eMW5hEgvfaUsaof2dLoXrFOfV%2FSNcsHaDPW2oKtxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyrMqpF5JIadbSdJZwq3ANFLrVsDrPnx%2Fbi%2Bom3DHNvTP0hOwGLM9vCCx2hlFiPQFKQZMk1Q5O8%2FzbrzA64yYsySUMSl6B%2BpNe5ITP2EcWNc%2FyqYZjB3MhIkXghb4tqEly%2FtDmAr%2BaiGC8iTXQOp4YnQ9NX2MhJAJMtsvIK79cS404A31TkDBeDK3yd64VsKlLkTV3uuCCY6piWlUEgkL4ZJUHdjv2OBBM1s2cVMTtXN1FXH7zD3nNqnvWMboVueN8dYk5BEO9LilaW2NCD0pGV1APpDxZT87aARkLpMAIWKgJjNbQVsfRlxhM0msFAiTxDp0weXI4JLUNJh8D42S20JcNkck0ekU6KkKaDakZLWx%2B5UZRiFHBsNMRGGOHX5E27a%2B8h0Zm4neFIPnkJiUO6tVamD%2Bo3j7A4IgA59BKqoHKeRMeFQ4%2BXPP0gn42c9rYCDcNwKqAfGLJAHIeZDINO3lNO0Rkqx%2FOmjswNCxL2vISUfAkfv91B6CZcDdvDfCUEPh45qkxNlK0nsxo2b5VMc9J4HGuaa%2BPDKTW2N%2FP%2FMapKy4cFcSPxpGOaXfzKPadpqg8TAmzqqeBHcrvxJSSC8YBys0Hqa%2FtO%2B74xZaJm6vtI7jBjpClvg%2FZsqYkhugEQKfq%2BRxZvtj7DIDCps%2BfCBjqkARp9093uZqeyjzmReDsGB4ZGx%2B9ims%2FxXmXVnM96dukVdXT0fUJvdh5ARJ0ywEXm7ZysU%2BB%2FMbnMJk5IOj8vBx58BD%2FkVSI9jj9SDL%2B6Pnbo4wgbwQvIlc9G6wPJqB7bxBKBXHN3CGOQNntMwLmf7N6DO%2FLn1d%2B5CafEP6jItSAGFfd%2FRj1DQ8LW99CfFz6L%2Fpp8tTHssWnORHUoyOd0GMYT3NW2&X-Amz-Signature=e691be83536ae590c1e04348d0d060adc83090b310ff7a1cc9dc4028b291df66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZEP3SF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCvQgQCFmMHzydq%2FkTjI6CElvenPiA3D8%2F5AqbqEqENLAIhAP1eMW5hEgvfaUsaof2dLoXrFOfV%2FSNcsHaDPW2oKtxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyrMqpF5JIadbSdJZwq3ANFLrVsDrPnx%2Fbi%2Bom3DHNvTP0hOwGLM9vCCx2hlFiPQFKQZMk1Q5O8%2FzbrzA64yYsySUMSl6B%2BpNe5ITP2EcWNc%2FyqYZjB3MhIkXghb4tqEly%2FtDmAr%2BaiGC8iTXQOp4YnQ9NX2MhJAJMtsvIK79cS404A31TkDBeDK3yd64VsKlLkTV3uuCCY6piWlUEgkL4ZJUHdjv2OBBM1s2cVMTtXN1FXH7zD3nNqnvWMboVueN8dYk5BEO9LilaW2NCD0pGV1APpDxZT87aARkLpMAIWKgJjNbQVsfRlxhM0msFAiTxDp0weXI4JLUNJh8D42S20JcNkck0ekU6KkKaDakZLWx%2B5UZRiFHBsNMRGGOHX5E27a%2B8h0Zm4neFIPnkJiUO6tVamD%2Bo3j7A4IgA59BKqoHKeRMeFQ4%2BXPP0gn42c9rYCDcNwKqAfGLJAHIeZDINO3lNO0Rkqx%2FOmjswNCxL2vISUfAkfv91B6CZcDdvDfCUEPh45qkxNlK0nsxo2b5VMc9J4HGuaa%2BPDKTW2N%2FP%2FMapKy4cFcSPxpGOaXfzKPadpqg8TAmzqqeBHcrvxJSSC8YBys0Hqa%2FtO%2B74xZaJm6vtI7jBjpClvg%2FZsqYkhugEQKfq%2BRxZvtj7DIDCps%2BfCBjqkARp9093uZqeyjzmReDsGB4ZGx%2B9ims%2FxXmXVnM96dukVdXT0fUJvdh5ARJ0ywEXm7ZysU%2BB%2FMbnMJk5IOj8vBx58BD%2FkVSI9jj9SDL%2B6Pnbo4wgbwQvIlc9G6wPJqB7bxBKBXHN3CGOQNntMwLmf7N6DO%2FLn1d%2B5CafEP6jItSAGFfd%2FRj1DQ8LW99CfFz6L%2Fpp8tTHssWnORHUoyOd0GMYT3NW2&X-Amz-Signature=af2fcb002f9e5b2972e243c2d624dc014667ff6241d20b34136e57641c7de498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZEP3SF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCvQgQCFmMHzydq%2FkTjI6CElvenPiA3D8%2F5AqbqEqENLAIhAP1eMW5hEgvfaUsaof2dLoXrFOfV%2FSNcsHaDPW2oKtxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyrMqpF5JIadbSdJZwq3ANFLrVsDrPnx%2Fbi%2Bom3DHNvTP0hOwGLM9vCCx2hlFiPQFKQZMk1Q5O8%2FzbrzA64yYsySUMSl6B%2BpNe5ITP2EcWNc%2FyqYZjB3MhIkXghb4tqEly%2FtDmAr%2BaiGC8iTXQOp4YnQ9NX2MhJAJMtsvIK79cS404A31TkDBeDK3yd64VsKlLkTV3uuCCY6piWlUEgkL4ZJUHdjv2OBBM1s2cVMTtXN1FXH7zD3nNqnvWMboVueN8dYk5BEO9LilaW2NCD0pGV1APpDxZT87aARkLpMAIWKgJjNbQVsfRlxhM0msFAiTxDp0weXI4JLUNJh8D42S20JcNkck0ekU6KkKaDakZLWx%2B5UZRiFHBsNMRGGOHX5E27a%2B8h0Zm4neFIPnkJiUO6tVamD%2Bo3j7A4IgA59BKqoHKeRMeFQ4%2BXPP0gn42c9rYCDcNwKqAfGLJAHIeZDINO3lNO0Rkqx%2FOmjswNCxL2vISUfAkfv91B6CZcDdvDfCUEPh45qkxNlK0nsxo2b5VMc9J4HGuaa%2BPDKTW2N%2FP%2FMapKy4cFcSPxpGOaXfzKPadpqg8TAmzqqeBHcrvxJSSC8YBys0Hqa%2FtO%2B74xZaJm6vtI7jBjpClvg%2FZsqYkhugEQKfq%2BRxZvtj7DIDCps%2BfCBjqkARp9093uZqeyjzmReDsGB4ZGx%2B9ims%2FxXmXVnM96dukVdXT0fUJvdh5ARJ0ywEXm7ZysU%2BB%2FMbnMJk5IOj8vBx58BD%2FkVSI9jj9SDL%2B6Pnbo4wgbwQvIlc9G6wPJqB7bxBKBXHN3CGOQNntMwLmf7N6DO%2FLn1d%2B5CafEP6jItSAGFfd%2FRj1DQ8LW99CfFz6L%2Fpp8tTHssWnORHUoyOd0GMYT3NW2&X-Amz-Signature=815a3f90411f0e45de9fee24e699c1ac0b04c9f10179fe444d3ffb89e78ae25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZEP3SF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCvQgQCFmMHzydq%2FkTjI6CElvenPiA3D8%2F5AqbqEqENLAIhAP1eMW5hEgvfaUsaof2dLoXrFOfV%2FSNcsHaDPW2oKtxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyrMqpF5JIadbSdJZwq3ANFLrVsDrPnx%2Fbi%2Bom3DHNvTP0hOwGLM9vCCx2hlFiPQFKQZMk1Q5O8%2FzbrzA64yYsySUMSl6B%2BpNe5ITP2EcWNc%2FyqYZjB3MhIkXghb4tqEly%2FtDmAr%2BaiGC8iTXQOp4YnQ9NX2MhJAJMtsvIK79cS404A31TkDBeDK3yd64VsKlLkTV3uuCCY6piWlUEgkL4ZJUHdjv2OBBM1s2cVMTtXN1FXH7zD3nNqnvWMboVueN8dYk5BEO9LilaW2NCD0pGV1APpDxZT87aARkLpMAIWKgJjNbQVsfRlxhM0msFAiTxDp0weXI4JLUNJh8D42S20JcNkck0ekU6KkKaDakZLWx%2B5UZRiFHBsNMRGGOHX5E27a%2B8h0Zm4neFIPnkJiUO6tVamD%2Bo3j7A4IgA59BKqoHKeRMeFQ4%2BXPP0gn42c9rYCDcNwKqAfGLJAHIeZDINO3lNO0Rkqx%2FOmjswNCxL2vISUfAkfv91B6CZcDdvDfCUEPh45qkxNlK0nsxo2b5VMc9J4HGuaa%2BPDKTW2N%2FP%2FMapKy4cFcSPxpGOaXfzKPadpqg8TAmzqqeBHcrvxJSSC8YBys0Hqa%2FtO%2B74xZaJm6vtI7jBjpClvg%2FZsqYkhugEQKfq%2BRxZvtj7DIDCps%2BfCBjqkARp9093uZqeyjzmReDsGB4ZGx%2B9ims%2FxXmXVnM96dukVdXT0fUJvdh5ARJ0ywEXm7ZysU%2BB%2FMbnMJk5IOj8vBx58BD%2FkVSI9jj9SDL%2B6Pnbo4wgbwQvIlc9G6wPJqB7bxBKBXHN3CGOQNntMwLmf7N6DO%2FLn1d%2B5CafEP6jItSAGFfd%2FRj1DQ8LW99CfFz6L%2Fpp8tTHssWnORHUoyOd0GMYT3NW2&X-Amz-Signature=07a7545edad29649dc7ab3ca97a3be8ea6d5d00da45ffc51ea297abd72917089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZEP3SF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCvQgQCFmMHzydq%2FkTjI6CElvenPiA3D8%2F5AqbqEqENLAIhAP1eMW5hEgvfaUsaof2dLoXrFOfV%2FSNcsHaDPW2oKtxnKv8DCCAQABoMNjM3NDIzMTgzODA1IgyrMqpF5JIadbSdJZwq3ANFLrVsDrPnx%2Fbi%2Bom3DHNvTP0hOwGLM9vCCx2hlFiPQFKQZMk1Q5O8%2FzbrzA64yYsySUMSl6B%2BpNe5ITP2EcWNc%2FyqYZjB3MhIkXghb4tqEly%2FtDmAr%2BaiGC8iTXQOp4YnQ9NX2MhJAJMtsvIK79cS404A31TkDBeDK3yd64VsKlLkTV3uuCCY6piWlUEgkL4ZJUHdjv2OBBM1s2cVMTtXN1FXH7zD3nNqnvWMboVueN8dYk5BEO9LilaW2NCD0pGV1APpDxZT87aARkLpMAIWKgJjNbQVsfRlxhM0msFAiTxDp0weXI4JLUNJh8D42S20JcNkck0ekU6KkKaDakZLWx%2B5UZRiFHBsNMRGGOHX5E27a%2B8h0Zm4neFIPnkJiUO6tVamD%2Bo3j7A4IgA59BKqoHKeRMeFQ4%2BXPP0gn42c9rYCDcNwKqAfGLJAHIeZDINO3lNO0Rkqx%2FOmjswNCxL2vISUfAkfv91B6CZcDdvDfCUEPh45qkxNlK0nsxo2b5VMc9J4HGuaa%2BPDKTW2N%2FP%2FMapKy4cFcSPxpGOaXfzKPadpqg8TAmzqqeBHcrvxJSSC8YBys0Hqa%2FtO%2B74xZaJm6vtI7jBjpClvg%2FZsqYkhugEQKfq%2BRxZvtj7DIDCps%2BfCBjqkARp9093uZqeyjzmReDsGB4ZGx%2B9ims%2FxXmXVnM96dukVdXT0fUJvdh5ARJ0ywEXm7ZysU%2BB%2FMbnMJk5IOj8vBx58BD%2FkVSI9jj9SDL%2B6Pnbo4wgbwQvIlc9G6wPJqB7bxBKBXHN3CGOQNntMwLmf7N6DO%2FLn1d%2B5CafEP6jItSAGFfd%2FRj1DQ8LW99CfFz6L%2Fpp8tTHssWnORHUoyOd0GMYT3NW2&X-Amz-Signature=9e79d8a14a5986d56b5f65bb37a917c9427434982365cade20d7067e183ff1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
