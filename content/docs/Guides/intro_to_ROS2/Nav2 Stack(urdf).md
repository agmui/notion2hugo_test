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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5374VQD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvAHbM1xIiSzIXO8jPQcXS2Hn34sWEGNFlCQqr%2FnH9gIhAMHorDlby18HSCqIE%2FUfn9p36YuYAsCim0LFtevxlwMCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTobOePXcjaWdfOc0q3AMelYeeGFf56cACTlOsifK3V7lGRGkcTSHW8Txbw%2FOkMIZaBWasoiw5%2BYiNGLSkvCLAZgh5tBSbWwxRKCsSMWrtdidWPKrOns%2BMND9HqMMedpnl0PUNqQKRHyNIYA2345VcqJS2CWleTSXgE%2B6AZS1sCeluXAdARscsZYubYxXNgm7FqzbGq4hgu%2BFV2DC8JZheS4aYZQfMQ%2BBH2jaNd9gyV1iXK46Z05lZAb%2BErPKU960kc5%2FxkarUOJIlnvNwDOd4mUWXmLfXMp4lQS9%2F24RgERsfHh8QqZ7NsjjvzrL3slT89fzq8wPj8vJgans6n%2FMCirrLna%2FtRgBk7vSfhjgOGM8Fx9dlkPth8R2mePBv87Dm%2Br6W0s3ASkXFUlP4TOMIjxps%2FKwRfGQLvOgHU%2BPA5JccIhz1ARXrquDdLhSZ6BN7KY4gfRnLlrFK77r4ORqUttF78ikaLUVeW4BQOb3oRVx9mjBTRA%2Bu1PLa8O%2FeA%2Bw1J7K5BpLXvh4%2Fm1uwaQIJ98otPCZo3PUV9sHU5us8TLuqaH3dRUnCYHKHTeFaQWtI2Bh8g%2Fc7VsUD%2FoPzn31BzKGAcO7T90fujXusgosq7cZ%2BFyLy1iNHawErCrSnMVS5kKmDi56S4ZSkzjCb%2BYvDBjqkAaib9sqRJWSj%2B4WYzH6C2kC0T0cDAFrrYfNGBuSxUjoogDTBtqV5raKopXVKURdrcIoVOwC2Rz01EhSDCdenO6EkDGyQB9iw8RJ21GVu%2B%2FiciDlxlcUp%2B2GmBj%2F2ccjgyW74ySrVOQFmHHHcuX21P9oVpc2YgFfjTFgf5oGo9IsXbkpXi2ILZvqLsAY3FLAlkso2F9PGpSOFZZOys3nY6d%2FMApx1&X-Amz-Signature=e220d7ef8b952dbfcec3dc0a721b213a51f3b67dfd4a9bbc231f12f4ebd4b03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5374VQD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvAHbM1xIiSzIXO8jPQcXS2Hn34sWEGNFlCQqr%2FnH9gIhAMHorDlby18HSCqIE%2FUfn9p36YuYAsCim0LFtevxlwMCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTobOePXcjaWdfOc0q3AMelYeeGFf56cACTlOsifK3V7lGRGkcTSHW8Txbw%2FOkMIZaBWasoiw5%2BYiNGLSkvCLAZgh5tBSbWwxRKCsSMWrtdidWPKrOns%2BMND9HqMMedpnl0PUNqQKRHyNIYA2345VcqJS2CWleTSXgE%2B6AZS1sCeluXAdARscsZYubYxXNgm7FqzbGq4hgu%2BFV2DC8JZheS4aYZQfMQ%2BBH2jaNd9gyV1iXK46Z05lZAb%2BErPKU960kc5%2FxkarUOJIlnvNwDOd4mUWXmLfXMp4lQS9%2F24RgERsfHh8QqZ7NsjjvzrL3slT89fzq8wPj8vJgans6n%2FMCirrLna%2FtRgBk7vSfhjgOGM8Fx9dlkPth8R2mePBv87Dm%2Br6W0s3ASkXFUlP4TOMIjxps%2FKwRfGQLvOgHU%2BPA5JccIhz1ARXrquDdLhSZ6BN7KY4gfRnLlrFK77r4ORqUttF78ikaLUVeW4BQOb3oRVx9mjBTRA%2Bu1PLa8O%2FeA%2Bw1J7K5BpLXvh4%2Fm1uwaQIJ98otPCZo3PUV9sHU5us8TLuqaH3dRUnCYHKHTeFaQWtI2Bh8g%2Fc7VsUD%2FoPzn31BzKGAcO7T90fujXusgosq7cZ%2BFyLy1iNHawErCrSnMVS5kKmDi56S4ZSkzjCb%2BYvDBjqkAaib9sqRJWSj%2B4WYzH6C2kC0T0cDAFrrYfNGBuSxUjoogDTBtqV5raKopXVKURdrcIoVOwC2Rz01EhSDCdenO6EkDGyQB9iw8RJ21GVu%2B%2FiciDlxlcUp%2B2GmBj%2F2ccjgyW74ySrVOQFmHHHcuX21P9oVpc2YgFfjTFgf5oGo9IsXbkpXi2ILZvqLsAY3FLAlkso2F9PGpSOFZZOys3nY6d%2FMApx1&X-Amz-Signature=1f4f295c6a5723ffc67ef86c3e2ab70288520639cf8e8d646ab4a768effdb27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5374VQD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvAHbM1xIiSzIXO8jPQcXS2Hn34sWEGNFlCQqr%2FnH9gIhAMHorDlby18HSCqIE%2FUfn9p36YuYAsCim0LFtevxlwMCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTobOePXcjaWdfOc0q3AMelYeeGFf56cACTlOsifK3V7lGRGkcTSHW8Txbw%2FOkMIZaBWasoiw5%2BYiNGLSkvCLAZgh5tBSbWwxRKCsSMWrtdidWPKrOns%2BMND9HqMMedpnl0PUNqQKRHyNIYA2345VcqJS2CWleTSXgE%2B6AZS1sCeluXAdARscsZYubYxXNgm7FqzbGq4hgu%2BFV2DC8JZheS4aYZQfMQ%2BBH2jaNd9gyV1iXK46Z05lZAb%2BErPKU960kc5%2FxkarUOJIlnvNwDOd4mUWXmLfXMp4lQS9%2F24RgERsfHh8QqZ7NsjjvzrL3slT89fzq8wPj8vJgans6n%2FMCirrLna%2FtRgBk7vSfhjgOGM8Fx9dlkPth8R2mePBv87Dm%2Br6W0s3ASkXFUlP4TOMIjxps%2FKwRfGQLvOgHU%2BPA5JccIhz1ARXrquDdLhSZ6BN7KY4gfRnLlrFK77r4ORqUttF78ikaLUVeW4BQOb3oRVx9mjBTRA%2Bu1PLa8O%2FeA%2Bw1J7K5BpLXvh4%2Fm1uwaQIJ98otPCZo3PUV9sHU5us8TLuqaH3dRUnCYHKHTeFaQWtI2Bh8g%2Fc7VsUD%2FoPzn31BzKGAcO7T90fujXusgosq7cZ%2BFyLy1iNHawErCrSnMVS5kKmDi56S4ZSkzjCb%2BYvDBjqkAaib9sqRJWSj%2B4WYzH6C2kC0T0cDAFrrYfNGBuSxUjoogDTBtqV5raKopXVKURdrcIoVOwC2Rz01EhSDCdenO6EkDGyQB9iw8RJ21GVu%2B%2FiciDlxlcUp%2B2GmBj%2F2ccjgyW74ySrVOQFmHHHcuX21P9oVpc2YgFfjTFgf5oGo9IsXbkpXi2ILZvqLsAY3FLAlkso2F9PGpSOFZZOys3nY6d%2FMApx1&X-Amz-Signature=2fc20e75516ca8a266cce19aabd4e7c49ca4c2035ebf38273ad3e62287791322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5374VQD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvAHbM1xIiSzIXO8jPQcXS2Hn34sWEGNFlCQqr%2FnH9gIhAMHorDlby18HSCqIE%2FUfn9p36YuYAsCim0LFtevxlwMCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTobOePXcjaWdfOc0q3AMelYeeGFf56cACTlOsifK3V7lGRGkcTSHW8Txbw%2FOkMIZaBWasoiw5%2BYiNGLSkvCLAZgh5tBSbWwxRKCsSMWrtdidWPKrOns%2BMND9HqMMedpnl0PUNqQKRHyNIYA2345VcqJS2CWleTSXgE%2B6AZS1sCeluXAdARscsZYubYxXNgm7FqzbGq4hgu%2BFV2DC8JZheS4aYZQfMQ%2BBH2jaNd9gyV1iXK46Z05lZAb%2BErPKU960kc5%2FxkarUOJIlnvNwDOd4mUWXmLfXMp4lQS9%2F24RgERsfHh8QqZ7NsjjvzrL3slT89fzq8wPj8vJgans6n%2FMCirrLna%2FtRgBk7vSfhjgOGM8Fx9dlkPth8R2mePBv87Dm%2Br6W0s3ASkXFUlP4TOMIjxps%2FKwRfGQLvOgHU%2BPA5JccIhz1ARXrquDdLhSZ6BN7KY4gfRnLlrFK77r4ORqUttF78ikaLUVeW4BQOb3oRVx9mjBTRA%2Bu1PLa8O%2FeA%2Bw1J7K5BpLXvh4%2Fm1uwaQIJ98otPCZo3PUV9sHU5us8TLuqaH3dRUnCYHKHTeFaQWtI2Bh8g%2Fc7VsUD%2FoPzn31BzKGAcO7T90fujXusgosq7cZ%2BFyLy1iNHawErCrSnMVS5kKmDi56S4ZSkzjCb%2BYvDBjqkAaib9sqRJWSj%2B4WYzH6C2kC0T0cDAFrrYfNGBuSxUjoogDTBtqV5raKopXVKURdrcIoVOwC2Rz01EhSDCdenO6EkDGyQB9iw8RJ21GVu%2B%2FiciDlxlcUp%2B2GmBj%2F2ccjgyW74ySrVOQFmHHHcuX21P9oVpc2YgFfjTFgf5oGo9IsXbkpXi2ILZvqLsAY3FLAlkso2F9PGpSOFZZOys3nY6d%2FMApx1&X-Amz-Signature=7797481d8f3407388c9a29ea09abe21c53d6de9ea1eada1fd688a1acb3b12797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5374VQD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvAHbM1xIiSzIXO8jPQcXS2Hn34sWEGNFlCQqr%2FnH9gIhAMHorDlby18HSCqIE%2FUfn9p36YuYAsCim0LFtevxlwMCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTobOePXcjaWdfOc0q3AMelYeeGFf56cACTlOsifK3V7lGRGkcTSHW8Txbw%2FOkMIZaBWasoiw5%2BYiNGLSkvCLAZgh5tBSbWwxRKCsSMWrtdidWPKrOns%2BMND9HqMMedpnl0PUNqQKRHyNIYA2345VcqJS2CWleTSXgE%2B6AZS1sCeluXAdARscsZYubYxXNgm7FqzbGq4hgu%2BFV2DC8JZheS4aYZQfMQ%2BBH2jaNd9gyV1iXK46Z05lZAb%2BErPKU960kc5%2FxkarUOJIlnvNwDOd4mUWXmLfXMp4lQS9%2F24RgERsfHh8QqZ7NsjjvzrL3slT89fzq8wPj8vJgans6n%2FMCirrLna%2FtRgBk7vSfhjgOGM8Fx9dlkPth8R2mePBv87Dm%2Br6W0s3ASkXFUlP4TOMIjxps%2FKwRfGQLvOgHU%2BPA5JccIhz1ARXrquDdLhSZ6BN7KY4gfRnLlrFK77r4ORqUttF78ikaLUVeW4BQOb3oRVx9mjBTRA%2Bu1PLa8O%2FeA%2Bw1J7K5BpLXvh4%2Fm1uwaQIJ98otPCZo3PUV9sHU5us8TLuqaH3dRUnCYHKHTeFaQWtI2Bh8g%2Fc7VsUD%2FoPzn31BzKGAcO7T90fujXusgosq7cZ%2BFyLy1iNHawErCrSnMVS5kKmDi56S4ZSkzjCb%2BYvDBjqkAaib9sqRJWSj%2B4WYzH6C2kC0T0cDAFrrYfNGBuSxUjoogDTBtqV5raKopXVKURdrcIoVOwC2Rz01EhSDCdenO6EkDGyQB9iw8RJ21GVu%2B%2FiciDlxlcUp%2B2GmBj%2F2ccjgyW74ySrVOQFmHHHcuX21P9oVpc2YgFfjTFgf5oGo9IsXbkpXi2ILZvqLsAY3FLAlkso2F9PGpSOFZZOys3nY6d%2FMApx1&X-Amz-Signature=5b65c82c0309ff1e9638e06caca8abd03d9c7bd5abd774278bc6d9b5241dd061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5374VQD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvAHbM1xIiSzIXO8jPQcXS2Hn34sWEGNFlCQqr%2FnH9gIhAMHorDlby18HSCqIE%2FUfn9p36YuYAsCim0LFtevxlwMCKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTobOePXcjaWdfOc0q3AMelYeeGFf56cACTlOsifK3V7lGRGkcTSHW8Txbw%2FOkMIZaBWasoiw5%2BYiNGLSkvCLAZgh5tBSbWwxRKCsSMWrtdidWPKrOns%2BMND9HqMMedpnl0PUNqQKRHyNIYA2345VcqJS2CWleTSXgE%2B6AZS1sCeluXAdARscsZYubYxXNgm7FqzbGq4hgu%2BFV2DC8JZheS4aYZQfMQ%2BBH2jaNd9gyV1iXK46Z05lZAb%2BErPKU960kc5%2FxkarUOJIlnvNwDOd4mUWXmLfXMp4lQS9%2F24RgERsfHh8QqZ7NsjjvzrL3slT89fzq8wPj8vJgans6n%2FMCirrLna%2FtRgBk7vSfhjgOGM8Fx9dlkPth8R2mePBv87Dm%2Br6W0s3ASkXFUlP4TOMIjxps%2FKwRfGQLvOgHU%2BPA5JccIhz1ARXrquDdLhSZ6BN7KY4gfRnLlrFK77r4ORqUttF78ikaLUVeW4BQOb3oRVx9mjBTRA%2Bu1PLa8O%2FeA%2Bw1J7K5BpLXvh4%2Fm1uwaQIJ98otPCZo3PUV9sHU5us8TLuqaH3dRUnCYHKHTeFaQWtI2Bh8g%2Fc7VsUD%2FoPzn31BzKGAcO7T90fujXusgosq7cZ%2BFyLy1iNHawErCrSnMVS5kKmDi56S4ZSkzjCb%2BYvDBjqkAaib9sqRJWSj%2B4WYzH6C2kC0T0cDAFrrYfNGBuSxUjoogDTBtqV5raKopXVKURdrcIoVOwC2Rz01EhSDCdenO6EkDGyQB9iw8RJ21GVu%2B%2FiciDlxlcUp%2B2GmBj%2F2ccjgyW74ySrVOQFmHHHcuX21P9oVpc2YgFfjTFgf5oGo9IsXbkpXi2ILZvqLsAY3FLAlkso2F9PGpSOFZZOys3nY6d%2FMApx1&X-Amz-Signature=064d3c28f1bed61d80637a0d06164f949d5a81205b9908ce18c6968972eb0721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
