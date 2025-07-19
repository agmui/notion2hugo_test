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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REUL3SU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfMOERDmsaJYK%2F3rh94GE2QH4wVyL1fwYuvdmsRIq1AIhAJwquNIzCH4akvZ88ehvm5eMTiSWOoM%2FQ1U8dpOi4PcRKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3c%2BbVTqRNzat9Gs4q3AOjkdWPGqofRfuRqgDVHgu9ymR40VwLcAF4rPrHl1zF%2Fk89qLayjrClV%2Bnfrl3J%2BJ0UkwfWyRHZZOEZx6vnxFtbRlTzaD6UF1KkSqgJsudizDeHiLnpVDfKwPR7RN2bVOd7H3yXtRig7fCd62F70%2BQ7bk7wqcRkOyE1vaNjksTZPCdxsGQj2rjcEr7vwJ66yGdpVg5e2%2FpA2fsh24XCfHgpu95Lhc2DLKsg37ZYHgIdQ8fLocTn1v8hcGUyv7vSfGvVvwJQ1BQ9bi%2FPoj7J3%2BUO9oZoSeM1AEm4OGLdO%2FeL49fp3V603HwBeVKz8w%2Ffz1eRKt4ddX%2FA4gOY55iJCnUDC50f%2F%2BiGirT9XPjOQzTuutb36I1zApmzDSqCd6uEt4bmzUw%2Fsxo2FsepTqPVPkqj7vyfevFiAfu2JiUrsUekFrb07jG0ulVKfC1rtfkY8YmcUffERYibjxrQmdB0Gz7VTg0RTcm6%2BXYI%2B917yA1NQbLQ3sjD9ob9MZQkb4dPwj27c7bvfbxqsxl04KZSVoaEclboAhji%2FBdDtMUM3bqPlvvhrcgNUJSbyfLpZYPgWskHVQ6MSzYgjkXEbdEA3vU6BSRzJlw51gJ8zfad%2BvE9%2BJt%2BOwkFcMGQ617EBjCq%2BOvDBjqkAWkb%2FFfY1y5vNHm%2BQUfsDQF9tL8mmQ8xpNSprRh4BLrZU%2FTjd6FdfwCEi%2BFxZbAsVMefN0pAwI8WtdRsUPvfiRfEgdzEq%2FqV4NgEoHGQC8YJqkbkbPOZ6SZqxCfsSGPlypRPGQGxRSDq%2Fs8T%2Fq6z0HTSUgEhoSsm4KWiAa4JWiSQipUamd7k2%2BrjnATM9G3BtsQX7cLG3LlvXEmfWTe9dwS4%2F%2BW2&X-Amz-Signature=11d1b5157c7b230db165ba234947f282e852d2f26c2c4625e9e28e92464e6e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REUL3SU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfMOERDmsaJYK%2F3rh94GE2QH4wVyL1fwYuvdmsRIq1AIhAJwquNIzCH4akvZ88ehvm5eMTiSWOoM%2FQ1U8dpOi4PcRKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3c%2BbVTqRNzat9Gs4q3AOjkdWPGqofRfuRqgDVHgu9ymR40VwLcAF4rPrHl1zF%2Fk89qLayjrClV%2Bnfrl3J%2BJ0UkwfWyRHZZOEZx6vnxFtbRlTzaD6UF1KkSqgJsudizDeHiLnpVDfKwPR7RN2bVOd7H3yXtRig7fCd62F70%2BQ7bk7wqcRkOyE1vaNjksTZPCdxsGQj2rjcEr7vwJ66yGdpVg5e2%2FpA2fsh24XCfHgpu95Lhc2DLKsg37ZYHgIdQ8fLocTn1v8hcGUyv7vSfGvVvwJQ1BQ9bi%2FPoj7J3%2BUO9oZoSeM1AEm4OGLdO%2FeL49fp3V603HwBeVKz8w%2Ffz1eRKt4ddX%2FA4gOY55iJCnUDC50f%2F%2BiGirT9XPjOQzTuutb36I1zApmzDSqCd6uEt4bmzUw%2Fsxo2FsepTqPVPkqj7vyfevFiAfu2JiUrsUekFrb07jG0ulVKfC1rtfkY8YmcUffERYibjxrQmdB0Gz7VTg0RTcm6%2BXYI%2B917yA1NQbLQ3sjD9ob9MZQkb4dPwj27c7bvfbxqsxl04KZSVoaEclboAhji%2FBdDtMUM3bqPlvvhrcgNUJSbyfLpZYPgWskHVQ6MSzYgjkXEbdEA3vU6BSRzJlw51gJ8zfad%2BvE9%2BJt%2BOwkFcMGQ617EBjCq%2BOvDBjqkAWkb%2FFfY1y5vNHm%2BQUfsDQF9tL8mmQ8xpNSprRh4BLrZU%2FTjd6FdfwCEi%2BFxZbAsVMefN0pAwI8WtdRsUPvfiRfEgdzEq%2FqV4NgEoHGQC8YJqkbkbPOZ6SZqxCfsSGPlypRPGQGxRSDq%2Fs8T%2Fq6z0HTSUgEhoSsm4KWiAa4JWiSQipUamd7k2%2BrjnATM9G3BtsQX7cLG3LlvXEmfWTe9dwS4%2F%2BW2&X-Amz-Signature=3254e9b6c1933cc46fc207e18c6e633792f8c7a485941abe8555edd6ec0908d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REUL3SU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfMOERDmsaJYK%2F3rh94GE2QH4wVyL1fwYuvdmsRIq1AIhAJwquNIzCH4akvZ88ehvm5eMTiSWOoM%2FQ1U8dpOi4PcRKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3c%2BbVTqRNzat9Gs4q3AOjkdWPGqofRfuRqgDVHgu9ymR40VwLcAF4rPrHl1zF%2Fk89qLayjrClV%2Bnfrl3J%2BJ0UkwfWyRHZZOEZx6vnxFtbRlTzaD6UF1KkSqgJsudizDeHiLnpVDfKwPR7RN2bVOd7H3yXtRig7fCd62F70%2BQ7bk7wqcRkOyE1vaNjksTZPCdxsGQj2rjcEr7vwJ66yGdpVg5e2%2FpA2fsh24XCfHgpu95Lhc2DLKsg37ZYHgIdQ8fLocTn1v8hcGUyv7vSfGvVvwJQ1BQ9bi%2FPoj7J3%2BUO9oZoSeM1AEm4OGLdO%2FeL49fp3V603HwBeVKz8w%2Ffz1eRKt4ddX%2FA4gOY55iJCnUDC50f%2F%2BiGirT9XPjOQzTuutb36I1zApmzDSqCd6uEt4bmzUw%2Fsxo2FsepTqPVPkqj7vyfevFiAfu2JiUrsUekFrb07jG0ulVKfC1rtfkY8YmcUffERYibjxrQmdB0Gz7VTg0RTcm6%2BXYI%2B917yA1NQbLQ3sjD9ob9MZQkb4dPwj27c7bvfbxqsxl04KZSVoaEclboAhji%2FBdDtMUM3bqPlvvhrcgNUJSbyfLpZYPgWskHVQ6MSzYgjkXEbdEA3vU6BSRzJlw51gJ8zfad%2BvE9%2BJt%2BOwkFcMGQ617EBjCq%2BOvDBjqkAWkb%2FFfY1y5vNHm%2BQUfsDQF9tL8mmQ8xpNSprRh4BLrZU%2FTjd6FdfwCEi%2BFxZbAsVMefN0pAwI8WtdRsUPvfiRfEgdzEq%2FqV4NgEoHGQC8YJqkbkbPOZ6SZqxCfsSGPlypRPGQGxRSDq%2Fs8T%2Fq6z0HTSUgEhoSsm4KWiAa4JWiSQipUamd7k2%2BrjnATM9G3BtsQX7cLG3LlvXEmfWTe9dwS4%2F%2BW2&X-Amz-Signature=c92e00f6c2538c04da34748671ed88c5be81a9ca5bf3017f6895305af7864228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REUL3SU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfMOERDmsaJYK%2F3rh94GE2QH4wVyL1fwYuvdmsRIq1AIhAJwquNIzCH4akvZ88ehvm5eMTiSWOoM%2FQ1U8dpOi4PcRKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3c%2BbVTqRNzat9Gs4q3AOjkdWPGqofRfuRqgDVHgu9ymR40VwLcAF4rPrHl1zF%2Fk89qLayjrClV%2Bnfrl3J%2BJ0UkwfWyRHZZOEZx6vnxFtbRlTzaD6UF1KkSqgJsudizDeHiLnpVDfKwPR7RN2bVOd7H3yXtRig7fCd62F70%2BQ7bk7wqcRkOyE1vaNjksTZPCdxsGQj2rjcEr7vwJ66yGdpVg5e2%2FpA2fsh24XCfHgpu95Lhc2DLKsg37ZYHgIdQ8fLocTn1v8hcGUyv7vSfGvVvwJQ1BQ9bi%2FPoj7J3%2BUO9oZoSeM1AEm4OGLdO%2FeL49fp3V603HwBeVKz8w%2Ffz1eRKt4ddX%2FA4gOY55iJCnUDC50f%2F%2BiGirT9XPjOQzTuutb36I1zApmzDSqCd6uEt4bmzUw%2Fsxo2FsepTqPVPkqj7vyfevFiAfu2JiUrsUekFrb07jG0ulVKfC1rtfkY8YmcUffERYibjxrQmdB0Gz7VTg0RTcm6%2BXYI%2B917yA1NQbLQ3sjD9ob9MZQkb4dPwj27c7bvfbxqsxl04KZSVoaEclboAhji%2FBdDtMUM3bqPlvvhrcgNUJSbyfLpZYPgWskHVQ6MSzYgjkXEbdEA3vU6BSRzJlw51gJ8zfad%2BvE9%2BJt%2BOwkFcMGQ617EBjCq%2BOvDBjqkAWkb%2FFfY1y5vNHm%2BQUfsDQF9tL8mmQ8xpNSprRh4BLrZU%2FTjd6FdfwCEi%2BFxZbAsVMefN0pAwI8WtdRsUPvfiRfEgdzEq%2FqV4NgEoHGQC8YJqkbkbPOZ6SZqxCfsSGPlypRPGQGxRSDq%2Fs8T%2Fq6z0HTSUgEhoSsm4KWiAa4JWiSQipUamd7k2%2BrjnATM9G3BtsQX7cLG3LlvXEmfWTe9dwS4%2F%2BW2&X-Amz-Signature=a5d4ff828a68c3b84906169d55d34cbcb6467821edace9f97a61f67b4eb447db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REUL3SU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfMOERDmsaJYK%2F3rh94GE2QH4wVyL1fwYuvdmsRIq1AIhAJwquNIzCH4akvZ88ehvm5eMTiSWOoM%2FQ1U8dpOi4PcRKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3c%2BbVTqRNzat9Gs4q3AOjkdWPGqofRfuRqgDVHgu9ymR40VwLcAF4rPrHl1zF%2Fk89qLayjrClV%2Bnfrl3J%2BJ0UkwfWyRHZZOEZx6vnxFtbRlTzaD6UF1KkSqgJsudizDeHiLnpVDfKwPR7RN2bVOd7H3yXtRig7fCd62F70%2BQ7bk7wqcRkOyE1vaNjksTZPCdxsGQj2rjcEr7vwJ66yGdpVg5e2%2FpA2fsh24XCfHgpu95Lhc2DLKsg37ZYHgIdQ8fLocTn1v8hcGUyv7vSfGvVvwJQ1BQ9bi%2FPoj7J3%2BUO9oZoSeM1AEm4OGLdO%2FeL49fp3V603HwBeVKz8w%2Ffz1eRKt4ddX%2FA4gOY55iJCnUDC50f%2F%2BiGirT9XPjOQzTuutb36I1zApmzDSqCd6uEt4bmzUw%2Fsxo2FsepTqPVPkqj7vyfevFiAfu2JiUrsUekFrb07jG0ulVKfC1rtfkY8YmcUffERYibjxrQmdB0Gz7VTg0RTcm6%2BXYI%2B917yA1NQbLQ3sjD9ob9MZQkb4dPwj27c7bvfbxqsxl04KZSVoaEclboAhji%2FBdDtMUM3bqPlvvhrcgNUJSbyfLpZYPgWskHVQ6MSzYgjkXEbdEA3vU6BSRzJlw51gJ8zfad%2BvE9%2BJt%2BOwkFcMGQ617EBjCq%2BOvDBjqkAWkb%2FFfY1y5vNHm%2BQUfsDQF9tL8mmQ8xpNSprRh4BLrZU%2FTjd6FdfwCEi%2BFxZbAsVMefN0pAwI8WtdRsUPvfiRfEgdzEq%2FqV4NgEoHGQC8YJqkbkbPOZ6SZqxCfsSGPlypRPGQGxRSDq%2Fs8T%2Fq6z0HTSUgEhoSsm4KWiAa4JWiSQipUamd7k2%2BrjnATM9G3BtsQX7cLG3LlvXEmfWTe9dwS4%2F%2BW2&X-Amz-Signature=2e4e1388d9a307f54358a86f567d8656cdee095b8db55e9b5077cc021cdb18a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REUL3SU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfMOERDmsaJYK%2F3rh94GE2QH4wVyL1fwYuvdmsRIq1AIhAJwquNIzCH4akvZ88ehvm5eMTiSWOoM%2FQ1U8dpOi4PcRKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3c%2BbVTqRNzat9Gs4q3AOjkdWPGqofRfuRqgDVHgu9ymR40VwLcAF4rPrHl1zF%2Fk89qLayjrClV%2Bnfrl3J%2BJ0UkwfWyRHZZOEZx6vnxFtbRlTzaD6UF1KkSqgJsudizDeHiLnpVDfKwPR7RN2bVOd7H3yXtRig7fCd62F70%2BQ7bk7wqcRkOyE1vaNjksTZPCdxsGQj2rjcEr7vwJ66yGdpVg5e2%2FpA2fsh24XCfHgpu95Lhc2DLKsg37ZYHgIdQ8fLocTn1v8hcGUyv7vSfGvVvwJQ1BQ9bi%2FPoj7J3%2BUO9oZoSeM1AEm4OGLdO%2FeL49fp3V603HwBeVKz8w%2Ffz1eRKt4ddX%2FA4gOY55iJCnUDC50f%2F%2BiGirT9XPjOQzTuutb36I1zApmzDSqCd6uEt4bmzUw%2Fsxo2FsepTqPVPkqj7vyfevFiAfu2JiUrsUekFrb07jG0ulVKfC1rtfkY8YmcUffERYibjxrQmdB0Gz7VTg0RTcm6%2BXYI%2B917yA1NQbLQ3sjD9ob9MZQkb4dPwj27c7bvfbxqsxl04KZSVoaEclboAhji%2FBdDtMUM3bqPlvvhrcgNUJSbyfLpZYPgWskHVQ6MSzYgjkXEbdEA3vU6BSRzJlw51gJ8zfad%2BvE9%2BJt%2BOwkFcMGQ617EBjCq%2BOvDBjqkAWkb%2FFfY1y5vNHm%2BQUfsDQF9tL8mmQ8xpNSprRh4BLrZU%2FTjd6FdfwCEi%2BFxZbAsVMefN0pAwI8WtdRsUPvfiRfEgdzEq%2FqV4NgEoHGQC8YJqkbkbPOZ6SZqxCfsSGPlypRPGQGxRSDq%2Fs8T%2Fq6z0HTSUgEhoSsm4KWiAa4JWiSQipUamd7k2%2BrjnATM9G3BtsQX7cLG3LlvXEmfWTe9dwS4%2F%2BW2&X-Amz-Signature=e162dda69570ed52e4b6ffe2e0f331bc4d2a0f5860f18259c9914d4a9660ff3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
