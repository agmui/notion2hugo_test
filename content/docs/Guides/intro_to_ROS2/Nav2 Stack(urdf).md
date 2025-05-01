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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3RII6M%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA%2BRucKYPXliISK7ba7lkN4MJqc%2FNeVGWxf%2BlPPAWLOrAiEAgjfqZey8VM02q7AxCB14shwH%2B8ze9iH2KtOxQOvGavoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVgSJ79WxSNd3qXMyrcAy8g%2FHWAStGMM%2F6d%2FWkVfRip5Nqre3F%2FGuY0IkPB3lQuxFqQtlVWlwZVw54%2FzN0eFjCN4LhzytOQi1OL3qNY62SaH6aqGj3t%2BVhLaA8GqhpasHKhCcWtbm%2B0VN9h2KFq%2BhMxrl%2BKoii9o7lSNpr%2BY91i6TMkXKfLTFiIFm74a2kSczChWyVFcUNICUwDTexcIH4LMpfm9xJSk%2FtmPHO645WhIunnnwOMvbvnyXuh4Bn3FGypr%2FH1aUD2ZE59Y0QTPS6Lq15hCoHyBwVyayFyYZHB7UIxNHbH%2Fp9AqyA96vFhcXlQuaxvKoqVKSvfDNNKzSOvdFhhugJFLlVJGb8AggN2S21grJdMMOhLK%2BKhtJAt9YoL3ROXfwMKnvifROxivBDyZJTVTsz69n8scRcBCyHkV0US0qkyshPWYR3IrXH4rpa40ZsFbeyMKEiAWnQ7wPeEnNyGiT58pOjbQwSWuyI72Ni%2FLVmj2mkIbpQaCLKJBP4B9Vi%2BZGJS3cNGbzDE59Din81gFaOycdYk9d0%2F1yk6d8F7xJNKk14J%2B1giVxhPch8dBYIY0u93d6AP4YgAbBTH6QwMVVEQd6ITM%2B9hmYfCvIjN6GvsDEzG5A%2F5Ij9pEgvxZfJWuwOabVsiMIOezcAGOqUBhp23ENzoVCpoxWGCQvvPTk8mEeMmxsQj8afKTilxhs%2Btf0k4GNc2jNnJcNW6A6Ym3EgyKnCMUBpM6miRHVt90PA%2Bf1iOk71ampKrIyUcsZtyMDp3ftfBk4KeOdPVCCZQzXhf8uhMAsGAqCiLMC%2FnlUf96qpdNXKS00mhe%2FgofyuuNB6XZq3%2Fz%2FOo4PQmUxGmYxtG0H2RjwC8Dfn4zMS5BGT3TrzT&X-Amz-Signature=238651ff092e8fd96279a7b0381f18a564fdddce361c64536f03428251da0179&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3RII6M%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA%2BRucKYPXliISK7ba7lkN4MJqc%2FNeVGWxf%2BlPPAWLOrAiEAgjfqZey8VM02q7AxCB14shwH%2B8ze9iH2KtOxQOvGavoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVgSJ79WxSNd3qXMyrcAy8g%2FHWAStGMM%2F6d%2FWkVfRip5Nqre3F%2FGuY0IkPB3lQuxFqQtlVWlwZVw54%2FzN0eFjCN4LhzytOQi1OL3qNY62SaH6aqGj3t%2BVhLaA8GqhpasHKhCcWtbm%2B0VN9h2KFq%2BhMxrl%2BKoii9o7lSNpr%2BY91i6TMkXKfLTFiIFm74a2kSczChWyVFcUNICUwDTexcIH4LMpfm9xJSk%2FtmPHO645WhIunnnwOMvbvnyXuh4Bn3FGypr%2FH1aUD2ZE59Y0QTPS6Lq15hCoHyBwVyayFyYZHB7UIxNHbH%2Fp9AqyA96vFhcXlQuaxvKoqVKSvfDNNKzSOvdFhhugJFLlVJGb8AggN2S21grJdMMOhLK%2BKhtJAt9YoL3ROXfwMKnvifROxivBDyZJTVTsz69n8scRcBCyHkV0US0qkyshPWYR3IrXH4rpa40ZsFbeyMKEiAWnQ7wPeEnNyGiT58pOjbQwSWuyI72Ni%2FLVmj2mkIbpQaCLKJBP4B9Vi%2BZGJS3cNGbzDE59Din81gFaOycdYk9d0%2F1yk6d8F7xJNKk14J%2B1giVxhPch8dBYIY0u93d6AP4YgAbBTH6QwMVVEQd6ITM%2B9hmYfCvIjN6GvsDEzG5A%2F5Ij9pEgvxZfJWuwOabVsiMIOezcAGOqUBhp23ENzoVCpoxWGCQvvPTk8mEeMmxsQj8afKTilxhs%2Btf0k4GNc2jNnJcNW6A6Ym3EgyKnCMUBpM6miRHVt90PA%2Bf1iOk71ampKrIyUcsZtyMDp3ftfBk4KeOdPVCCZQzXhf8uhMAsGAqCiLMC%2FnlUf96qpdNXKS00mhe%2FgofyuuNB6XZq3%2Fz%2FOo4PQmUxGmYxtG0H2RjwC8Dfn4zMS5BGT3TrzT&X-Amz-Signature=ce670fdb2600a9bf31737186478cdd8cb2e1ba20a2ba799b4e234d9fa20ccaaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3RII6M%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA%2BRucKYPXliISK7ba7lkN4MJqc%2FNeVGWxf%2BlPPAWLOrAiEAgjfqZey8VM02q7AxCB14shwH%2B8ze9iH2KtOxQOvGavoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVgSJ79WxSNd3qXMyrcAy8g%2FHWAStGMM%2F6d%2FWkVfRip5Nqre3F%2FGuY0IkPB3lQuxFqQtlVWlwZVw54%2FzN0eFjCN4LhzytOQi1OL3qNY62SaH6aqGj3t%2BVhLaA8GqhpasHKhCcWtbm%2B0VN9h2KFq%2BhMxrl%2BKoii9o7lSNpr%2BY91i6TMkXKfLTFiIFm74a2kSczChWyVFcUNICUwDTexcIH4LMpfm9xJSk%2FtmPHO645WhIunnnwOMvbvnyXuh4Bn3FGypr%2FH1aUD2ZE59Y0QTPS6Lq15hCoHyBwVyayFyYZHB7UIxNHbH%2Fp9AqyA96vFhcXlQuaxvKoqVKSvfDNNKzSOvdFhhugJFLlVJGb8AggN2S21grJdMMOhLK%2BKhtJAt9YoL3ROXfwMKnvifROxivBDyZJTVTsz69n8scRcBCyHkV0US0qkyshPWYR3IrXH4rpa40ZsFbeyMKEiAWnQ7wPeEnNyGiT58pOjbQwSWuyI72Ni%2FLVmj2mkIbpQaCLKJBP4B9Vi%2BZGJS3cNGbzDE59Din81gFaOycdYk9d0%2F1yk6d8F7xJNKk14J%2B1giVxhPch8dBYIY0u93d6AP4YgAbBTH6QwMVVEQd6ITM%2B9hmYfCvIjN6GvsDEzG5A%2F5Ij9pEgvxZfJWuwOabVsiMIOezcAGOqUBhp23ENzoVCpoxWGCQvvPTk8mEeMmxsQj8afKTilxhs%2Btf0k4GNc2jNnJcNW6A6Ym3EgyKnCMUBpM6miRHVt90PA%2Bf1iOk71ampKrIyUcsZtyMDp3ftfBk4KeOdPVCCZQzXhf8uhMAsGAqCiLMC%2FnlUf96qpdNXKS00mhe%2FgofyuuNB6XZq3%2Fz%2FOo4PQmUxGmYxtG0H2RjwC8Dfn4zMS5BGT3TrzT&X-Amz-Signature=4894fef86c1d41b5a19a826ee6997af50ad80575c149ee3b6d5447c7538160dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3RII6M%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA%2BRucKYPXliISK7ba7lkN4MJqc%2FNeVGWxf%2BlPPAWLOrAiEAgjfqZey8VM02q7AxCB14shwH%2B8ze9iH2KtOxQOvGavoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVgSJ79WxSNd3qXMyrcAy8g%2FHWAStGMM%2F6d%2FWkVfRip5Nqre3F%2FGuY0IkPB3lQuxFqQtlVWlwZVw54%2FzN0eFjCN4LhzytOQi1OL3qNY62SaH6aqGj3t%2BVhLaA8GqhpasHKhCcWtbm%2B0VN9h2KFq%2BhMxrl%2BKoii9o7lSNpr%2BY91i6TMkXKfLTFiIFm74a2kSczChWyVFcUNICUwDTexcIH4LMpfm9xJSk%2FtmPHO645WhIunnnwOMvbvnyXuh4Bn3FGypr%2FH1aUD2ZE59Y0QTPS6Lq15hCoHyBwVyayFyYZHB7UIxNHbH%2Fp9AqyA96vFhcXlQuaxvKoqVKSvfDNNKzSOvdFhhugJFLlVJGb8AggN2S21grJdMMOhLK%2BKhtJAt9YoL3ROXfwMKnvifROxivBDyZJTVTsz69n8scRcBCyHkV0US0qkyshPWYR3IrXH4rpa40ZsFbeyMKEiAWnQ7wPeEnNyGiT58pOjbQwSWuyI72Ni%2FLVmj2mkIbpQaCLKJBP4B9Vi%2BZGJS3cNGbzDE59Din81gFaOycdYk9d0%2F1yk6d8F7xJNKk14J%2B1giVxhPch8dBYIY0u93d6AP4YgAbBTH6QwMVVEQd6ITM%2B9hmYfCvIjN6GvsDEzG5A%2F5Ij9pEgvxZfJWuwOabVsiMIOezcAGOqUBhp23ENzoVCpoxWGCQvvPTk8mEeMmxsQj8afKTilxhs%2Btf0k4GNc2jNnJcNW6A6Ym3EgyKnCMUBpM6miRHVt90PA%2Bf1iOk71ampKrIyUcsZtyMDp3ftfBk4KeOdPVCCZQzXhf8uhMAsGAqCiLMC%2FnlUf96qpdNXKS00mhe%2FgofyuuNB6XZq3%2Fz%2FOo4PQmUxGmYxtG0H2RjwC8Dfn4zMS5BGT3TrzT&X-Amz-Signature=472ad801e7d216101b6eb23e2f8d7c137c275ca43df8ab8200f32b8d0305e821&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3RII6M%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA%2BRucKYPXliISK7ba7lkN4MJqc%2FNeVGWxf%2BlPPAWLOrAiEAgjfqZey8VM02q7AxCB14shwH%2B8ze9iH2KtOxQOvGavoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVgSJ79WxSNd3qXMyrcAy8g%2FHWAStGMM%2F6d%2FWkVfRip5Nqre3F%2FGuY0IkPB3lQuxFqQtlVWlwZVw54%2FzN0eFjCN4LhzytOQi1OL3qNY62SaH6aqGj3t%2BVhLaA8GqhpasHKhCcWtbm%2B0VN9h2KFq%2BhMxrl%2BKoii9o7lSNpr%2BY91i6TMkXKfLTFiIFm74a2kSczChWyVFcUNICUwDTexcIH4LMpfm9xJSk%2FtmPHO645WhIunnnwOMvbvnyXuh4Bn3FGypr%2FH1aUD2ZE59Y0QTPS6Lq15hCoHyBwVyayFyYZHB7UIxNHbH%2Fp9AqyA96vFhcXlQuaxvKoqVKSvfDNNKzSOvdFhhugJFLlVJGb8AggN2S21grJdMMOhLK%2BKhtJAt9YoL3ROXfwMKnvifROxivBDyZJTVTsz69n8scRcBCyHkV0US0qkyshPWYR3IrXH4rpa40ZsFbeyMKEiAWnQ7wPeEnNyGiT58pOjbQwSWuyI72Ni%2FLVmj2mkIbpQaCLKJBP4B9Vi%2BZGJS3cNGbzDE59Din81gFaOycdYk9d0%2F1yk6d8F7xJNKk14J%2B1giVxhPch8dBYIY0u93d6AP4YgAbBTH6QwMVVEQd6ITM%2B9hmYfCvIjN6GvsDEzG5A%2F5Ij9pEgvxZfJWuwOabVsiMIOezcAGOqUBhp23ENzoVCpoxWGCQvvPTk8mEeMmxsQj8afKTilxhs%2Btf0k4GNc2jNnJcNW6A6Ym3EgyKnCMUBpM6miRHVt90PA%2Bf1iOk71ampKrIyUcsZtyMDp3ftfBk4KeOdPVCCZQzXhf8uhMAsGAqCiLMC%2FnlUf96qpdNXKS00mhe%2FgofyuuNB6XZq3%2Fz%2FOo4PQmUxGmYxtG0H2RjwC8Dfn4zMS5BGT3TrzT&X-Amz-Signature=eb8c3162811a9f4a32822fb35eb2482442dcceb78aee3faa2cbc83da73d6868a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3RII6M%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIA%2BRucKYPXliISK7ba7lkN4MJqc%2FNeVGWxf%2BlPPAWLOrAiEAgjfqZey8VM02q7AxCB14shwH%2B8ze9iH2KtOxQOvGavoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVgSJ79WxSNd3qXMyrcAy8g%2FHWAStGMM%2F6d%2FWkVfRip5Nqre3F%2FGuY0IkPB3lQuxFqQtlVWlwZVw54%2FzN0eFjCN4LhzytOQi1OL3qNY62SaH6aqGj3t%2BVhLaA8GqhpasHKhCcWtbm%2B0VN9h2KFq%2BhMxrl%2BKoii9o7lSNpr%2BY91i6TMkXKfLTFiIFm74a2kSczChWyVFcUNICUwDTexcIH4LMpfm9xJSk%2FtmPHO645WhIunnnwOMvbvnyXuh4Bn3FGypr%2FH1aUD2ZE59Y0QTPS6Lq15hCoHyBwVyayFyYZHB7UIxNHbH%2Fp9AqyA96vFhcXlQuaxvKoqVKSvfDNNKzSOvdFhhugJFLlVJGb8AggN2S21grJdMMOhLK%2BKhtJAt9YoL3ROXfwMKnvifROxivBDyZJTVTsz69n8scRcBCyHkV0US0qkyshPWYR3IrXH4rpa40ZsFbeyMKEiAWnQ7wPeEnNyGiT58pOjbQwSWuyI72Ni%2FLVmj2mkIbpQaCLKJBP4B9Vi%2BZGJS3cNGbzDE59Din81gFaOycdYk9d0%2F1yk6d8F7xJNKk14J%2B1giVxhPch8dBYIY0u93d6AP4YgAbBTH6QwMVVEQd6ITM%2B9hmYfCvIjN6GvsDEzG5A%2F5Ij9pEgvxZfJWuwOabVsiMIOezcAGOqUBhp23ENzoVCpoxWGCQvvPTk8mEeMmxsQj8afKTilxhs%2Btf0k4GNc2jNnJcNW6A6Ym3EgyKnCMUBpM6miRHVt90PA%2Bf1iOk71ampKrIyUcsZtyMDp3ftfBk4KeOdPVCCZQzXhf8uhMAsGAqCiLMC%2FnlUf96qpdNXKS00mhe%2FgofyuuNB6XZq3%2Fz%2FOo4PQmUxGmYxtG0H2RjwC8Dfn4zMS5BGT3TrzT&X-Amz-Signature=7e8482d881b06682fe2d171ad1147e7db08db0a7801e2fb5f9af0773e5634c5d&X-Amz-SignedHeaders=host&x-id=GetObject)
