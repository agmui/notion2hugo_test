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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VQXTER%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCiVfK5B51qZFXH2cPYMPRrvf0cdvllA2wgbI91mnVFQAIhAKwWvSrAMHinBpvORT%2B6h8pQj3iJB%2Fy25KzQ1jo1jpYTKv8DCBQQABoMNjM3NDIzMTgzODA1IgzQ1ILrDzOYhPvoT2cq3ANCR8HnvkVmssewodVcRpKYItxUt9aTmLVzZbxrH4CczUbae2vwoafYPmCmUJy3V4k%2FlrCCebBLkSVDaanrxhEvnp%2FSakv2kFx3d0So%2BHbZ%2Btio%2Fb3EkrBQMiVkVpjVlWGQBfGLdJBPKQcsbiG3Vq8VuF0YqdF2AMA%2F4fyiZJV9KiJ0LOD2mhdx2LlBPj3xY8kD3iVcdcRHu%2BdDguLSKWvpTKZ%2BP58So%2FYZY0jvOzWpFprU1RdKyVOc6xwBqhJy1g28PUa5TBbTtGUpQ%2B6KG0eAlTiiiCkUYkgyAz4KbWhhaUNdrz7XskaGwR5HoG1tWBj%2BwkgYun7cC%2BNXbJ162DC2IMh073%2FrrPHqLxOJJc0VR9zS4KqvvtrmCy02SjI%2BZs39I4y91h0t7PrjRfl0lxNytwBLIrXG9271hZt8EO4cGMSE8fa4qD9ko54yfQRjGZRRdsdCU96Xiy%2Bvv%2B%2FmeOXduMM56b78UlLllHbg7dYYm9PH5lz20t6tX%2F3ZVBpDQ0B4nPYRkebJTop8%2Fsl3H6y2l%2BlG0zNUnwFDnP1TY53rQaoUvS1gDjyn2Wtsw5n0ZcALekXQ5czcXS%2F8yauOTtENkd0MAOQ%2FNbTGFclYsli0gTuqccV5avCqMvmsQTDQ%2F6%2FCBjqkAaocKx%2Ftogp1rZyrkfwa2KFxrc91xaplMJhhtmJdw0ejAK3NeWsQsmnXFB5Ugs3iVHgvqhQ%2ByfoUPnyM9Cm8CcueQF%2Fk9bYKyoxXUceNJ17Gl7MgABjsqoZCn4dT5Fb4zIv0nmv9nrxTkdOcWOgZ5K2WUFTafJLIgT8NoNPpw8mdCfMXJPY4Au7q10YHbt8c6JSychwtIPfBoGy9%2FyH3ph8NWvcZ&X-Amz-Signature=2d272bd7008f4111ee0e5ada0c2fe3aa73f7f0b398f6474a7662633149109f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VQXTER%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCiVfK5B51qZFXH2cPYMPRrvf0cdvllA2wgbI91mnVFQAIhAKwWvSrAMHinBpvORT%2B6h8pQj3iJB%2Fy25KzQ1jo1jpYTKv8DCBQQABoMNjM3NDIzMTgzODA1IgzQ1ILrDzOYhPvoT2cq3ANCR8HnvkVmssewodVcRpKYItxUt9aTmLVzZbxrH4CczUbae2vwoafYPmCmUJy3V4k%2FlrCCebBLkSVDaanrxhEvnp%2FSakv2kFx3d0So%2BHbZ%2Btio%2Fb3EkrBQMiVkVpjVlWGQBfGLdJBPKQcsbiG3Vq8VuF0YqdF2AMA%2F4fyiZJV9KiJ0LOD2mhdx2LlBPj3xY8kD3iVcdcRHu%2BdDguLSKWvpTKZ%2BP58So%2FYZY0jvOzWpFprU1RdKyVOc6xwBqhJy1g28PUa5TBbTtGUpQ%2B6KG0eAlTiiiCkUYkgyAz4KbWhhaUNdrz7XskaGwR5HoG1tWBj%2BwkgYun7cC%2BNXbJ162DC2IMh073%2FrrPHqLxOJJc0VR9zS4KqvvtrmCy02SjI%2BZs39I4y91h0t7PrjRfl0lxNytwBLIrXG9271hZt8EO4cGMSE8fa4qD9ko54yfQRjGZRRdsdCU96Xiy%2Bvv%2B%2FmeOXduMM56b78UlLllHbg7dYYm9PH5lz20t6tX%2F3ZVBpDQ0B4nPYRkebJTop8%2Fsl3H6y2l%2BlG0zNUnwFDnP1TY53rQaoUvS1gDjyn2Wtsw5n0ZcALekXQ5czcXS%2F8yauOTtENkd0MAOQ%2FNbTGFclYsli0gTuqccV5avCqMvmsQTDQ%2F6%2FCBjqkAaocKx%2Ftogp1rZyrkfwa2KFxrc91xaplMJhhtmJdw0ejAK3NeWsQsmnXFB5Ugs3iVHgvqhQ%2ByfoUPnyM9Cm8CcueQF%2Fk9bYKyoxXUceNJ17Gl7MgABjsqoZCn4dT5Fb4zIv0nmv9nrxTkdOcWOgZ5K2WUFTafJLIgT8NoNPpw8mdCfMXJPY4Au7q10YHbt8c6JSychwtIPfBoGy9%2FyH3ph8NWvcZ&X-Amz-Signature=8b735cefaf0d4aa867b9c10326805fba7c4dbceee2150c1b29d95bbce5b039b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VQXTER%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCiVfK5B51qZFXH2cPYMPRrvf0cdvllA2wgbI91mnVFQAIhAKwWvSrAMHinBpvORT%2B6h8pQj3iJB%2Fy25KzQ1jo1jpYTKv8DCBQQABoMNjM3NDIzMTgzODA1IgzQ1ILrDzOYhPvoT2cq3ANCR8HnvkVmssewodVcRpKYItxUt9aTmLVzZbxrH4CczUbae2vwoafYPmCmUJy3V4k%2FlrCCebBLkSVDaanrxhEvnp%2FSakv2kFx3d0So%2BHbZ%2Btio%2Fb3EkrBQMiVkVpjVlWGQBfGLdJBPKQcsbiG3Vq8VuF0YqdF2AMA%2F4fyiZJV9KiJ0LOD2mhdx2LlBPj3xY8kD3iVcdcRHu%2BdDguLSKWvpTKZ%2BP58So%2FYZY0jvOzWpFprU1RdKyVOc6xwBqhJy1g28PUa5TBbTtGUpQ%2B6KG0eAlTiiiCkUYkgyAz4KbWhhaUNdrz7XskaGwR5HoG1tWBj%2BwkgYun7cC%2BNXbJ162DC2IMh073%2FrrPHqLxOJJc0VR9zS4KqvvtrmCy02SjI%2BZs39I4y91h0t7PrjRfl0lxNytwBLIrXG9271hZt8EO4cGMSE8fa4qD9ko54yfQRjGZRRdsdCU96Xiy%2Bvv%2B%2FmeOXduMM56b78UlLllHbg7dYYm9PH5lz20t6tX%2F3ZVBpDQ0B4nPYRkebJTop8%2Fsl3H6y2l%2BlG0zNUnwFDnP1TY53rQaoUvS1gDjyn2Wtsw5n0ZcALekXQ5czcXS%2F8yauOTtENkd0MAOQ%2FNbTGFclYsli0gTuqccV5avCqMvmsQTDQ%2F6%2FCBjqkAaocKx%2Ftogp1rZyrkfwa2KFxrc91xaplMJhhtmJdw0ejAK3NeWsQsmnXFB5Ugs3iVHgvqhQ%2ByfoUPnyM9Cm8CcueQF%2Fk9bYKyoxXUceNJ17Gl7MgABjsqoZCn4dT5Fb4zIv0nmv9nrxTkdOcWOgZ5K2WUFTafJLIgT8NoNPpw8mdCfMXJPY4Au7q10YHbt8c6JSychwtIPfBoGy9%2FyH3ph8NWvcZ&X-Amz-Signature=4a43f4707804cc509ad6ac50dbf2cd27c64490627023a5cb0152fddd671396a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VQXTER%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCiVfK5B51qZFXH2cPYMPRrvf0cdvllA2wgbI91mnVFQAIhAKwWvSrAMHinBpvORT%2B6h8pQj3iJB%2Fy25KzQ1jo1jpYTKv8DCBQQABoMNjM3NDIzMTgzODA1IgzQ1ILrDzOYhPvoT2cq3ANCR8HnvkVmssewodVcRpKYItxUt9aTmLVzZbxrH4CczUbae2vwoafYPmCmUJy3V4k%2FlrCCebBLkSVDaanrxhEvnp%2FSakv2kFx3d0So%2BHbZ%2Btio%2Fb3EkrBQMiVkVpjVlWGQBfGLdJBPKQcsbiG3Vq8VuF0YqdF2AMA%2F4fyiZJV9KiJ0LOD2mhdx2LlBPj3xY8kD3iVcdcRHu%2BdDguLSKWvpTKZ%2BP58So%2FYZY0jvOzWpFprU1RdKyVOc6xwBqhJy1g28PUa5TBbTtGUpQ%2B6KG0eAlTiiiCkUYkgyAz4KbWhhaUNdrz7XskaGwR5HoG1tWBj%2BwkgYun7cC%2BNXbJ162DC2IMh073%2FrrPHqLxOJJc0VR9zS4KqvvtrmCy02SjI%2BZs39I4y91h0t7PrjRfl0lxNytwBLIrXG9271hZt8EO4cGMSE8fa4qD9ko54yfQRjGZRRdsdCU96Xiy%2Bvv%2B%2FmeOXduMM56b78UlLllHbg7dYYm9PH5lz20t6tX%2F3ZVBpDQ0B4nPYRkebJTop8%2Fsl3H6y2l%2BlG0zNUnwFDnP1TY53rQaoUvS1gDjyn2Wtsw5n0ZcALekXQ5czcXS%2F8yauOTtENkd0MAOQ%2FNbTGFclYsli0gTuqccV5avCqMvmsQTDQ%2F6%2FCBjqkAaocKx%2Ftogp1rZyrkfwa2KFxrc91xaplMJhhtmJdw0ejAK3NeWsQsmnXFB5Ugs3iVHgvqhQ%2ByfoUPnyM9Cm8CcueQF%2Fk9bYKyoxXUceNJ17Gl7MgABjsqoZCn4dT5Fb4zIv0nmv9nrxTkdOcWOgZ5K2WUFTafJLIgT8NoNPpw8mdCfMXJPY4Au7q10YHbt8c6JSychwtIPfBoGy9%2FyH3ph8NWvcZ&X-Amz-Signature=46776a378e27050ebda25c3a6fb3c7ffeb0476a8d449379c6d07e86c26a2e917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VQXTER%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCiVfK5B51qZFXH2cPYMPRrvf0cdvllA2wgbI91mnVFQAIhAKwWvSrAMHinBpvORT%2B6h8pQj3iJB%2Fy25KzQ1jo1jpYTKv8DCBQQABoMNjM3NDIzMTgzODA1IgzQ1ILrDzOYhPvoT2cq3ANCR8HnvkVmssewodVcRpKYItxUt9aTmLVzZbxrH4CczUbae2vwoafYPmCmUJy3V4k%2FlrCCebBLkSVDaanrxhEvnp%2FSakv2kFx3d0So%2BHbZ%2Btio%2Fb3EkrBQMiVkVpjVlWGQBfGLdJBPKQcsbiG3Vq8VuF0YqdF2AMA%2F4fyiZJV9KiJ0LOD2mhdx2LlBPj3xY8kD3iVcdcRHu%2BdDguLSKWvpTKZ%2BP58So%2FYZY0jvOzWpFprU1RdKyVOc6xwBqhJy1g28PUa5TBbTtGUpQ%2B6KG0eAlTiiiCkUYkgyAz4KbWhhaUNdrz7XskaGwR5HoG1tWBj%2BwkgYun7cC%2BNXbJ162DC2IMh073%2FrrPHqLxOJJc0VR9zS4KqvvtrmCy02SjI%2BZs39I4y91h0t7PrjRfl0lxNytwBLIrXG9271hZt8EO4cGMSE8fa4qD9ko54yfQRjGZRRdsdCU96Xiy%2Bvv%2B%2FmeOXduMM56b78UlLllHbg7dYYm9PH5lz20t6tX%2F3ZVBpDQ0B4nPYRkebJTop8%2Fsl3H6y2l%2BlG0zNUnwFDnP1TY53rQaoUvS1gDjyn2Wtsw5n0ZcALekXQ5czcXS%2F8yauOTtENkd0MAOQ%2FNbTGFclYsli0gTuqccV5avCqMvmsQTDQ%2F6%2FCBjqkAaocKx%2Ftogp1rZyrkfwa2KFxrc91xaplMJhhtmJdw0ejAK3NeWsQsmnXFB5Ugs3iVHgvqhQ%2ByfoUPnyM9Cm8CcueQF%2Fk9bYKyoxXUceNJ17Gl7MgABjsqoZCn4dT5Fb4zIv0nmv9nrxTkdOcWOgZ5K2WUFTafJLIgT8NoNPpw8mdCfMXJPY4Au7q10YHbt8c6JSychwtIPfBoGy9%2FyH3ph8NWvcZ&X-Amz-Signature=e09dac81ef7195151ffc810cd555937752393396adedcd4cc705d9e6cdc836f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VQXTER%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCiVfK5B51qZFXH2cPYMPRrvf0cdvllA2wgbI91mnVFQAIhAKwWvSrAMHinBpvORT%2B6h8pQj3iJB%2Fy25KzQ1jo1jpYTKv8DCBQQABoMNjM3NDIzMTgzODA1IgzQ1ILrDzOYhPvoT2cq3ANCR8HnvkVmssewodVcRpKYItxUt9aTmLVzZbxrH4CczUbae2vwoafYPmCmUJy3V4k%2FlrCCebBLkSVDaanrxhEvnp%2FSakv2kFx3d0So%2BHbZ%2Btio%2Fb3EkrBQMiVkVpjVlWGQBfGLdJBPKQcsbiG3Vq8VuF0YqdF2AMA%2F4fyiZJV9KiJ0LOD2mhdx2LlBPj3xY8kD3iVcdcRHu%2BdDguLSKWvpTKZ%2BP58So%2FYZY0jvOzWpFprU1RdKyVOc6xwBqhJy1g28PUa5TBbTtGUpQ%2B6KG0eAlTiiiCkUYkgyAz4KbWhhaUNdrz7XskaGwR5HoG1tWBj%2BwkgYun7cC%2BNXbJ162DC2IMh073%2FrrPHqLxOJJc0VR9zS4KqvvtrmCy02SjI%2BZs39I4y91h0t7PrjRfl0lxNytwBLIrXG9271hZt8EO4cGMSE8fa4qD9ko54yfQRjGZRRdsdCU96Xiy%2Bvv%2B%2FmeOXduMM56b78UlLllHbg7dYYm9PH5lz20t6tX%2F3ZVBpDQ0B4nPYRkebJTop8%2Fsl3H6y2l%2BlG0zNUnwFDnP1TY53rQaoUvS1gDjyn2Wtsw5n0ZcALekXQ5czcXS%2F8yauOTtENkd0MAOQ%2FNbTGFclYsli0gTuqccV5avCqMvmsQTDQ%2F6%2FCBjqkAaocKx%2Ftogp1rZyrkfwa2KFxrc91xaplMJhhtmJdw0ejAK3NeWsQsmnXFB5Ugs3iVHgvqhQ%2ByfoUPnyM9Cm8CcueQF%2Fk9bYKyoxXUceNJ17Gl7MgABjsqoZCn4dT5Fb4zIv0nmv9nrxTkdOcWOgZ5K2WUFTafJLIgT8NoNPpw8mdCfMXJPY4Au7q10YHbt8c6JSychwtIPfBoGy9%2FyH3ph8NWvcZ&X-Amz-Signature=96276ac379f2391f8793b109bfc5538580a153dacd6a0051c488006f2e25f3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
