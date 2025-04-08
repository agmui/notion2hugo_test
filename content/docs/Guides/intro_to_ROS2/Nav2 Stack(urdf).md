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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIHT3MP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsENopEzatNpdLK1eo27NftBKQniwNnHvMAd3xuCgMXAiBSjxJJGJBGYN87yV7K1DosgMGuusD%2BeNgi76qZljdPJir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM3jANNJA4yv8yZ2CQKtwD6joyQEDaRg%2BRFp%2FxDRyhbWBQAZ4zS4q3O0r5HP9aHFhHukUEaaFMat96wCjRkP7a%2FGewCwruPCWaLpHUJ5py%2FGGf0C1lCb8nIvx7R7U7dw3A1uACmY1wbccLKtmBQ%2B5KPVRT1lBXmOotHQdgi6FLUgdnWJ5Uypacf4cc9A8l9l76YDQDQcpRrn3c4z4RPRnpvzILGEOoK%2BZ8IeYtUW2HUj%2FeZ3HwHu6thXKUwFEytuiNLv%2FCuPLQrPPETo44GqwC2kegUDIRpe5Hy0ZcRlGV%2BaVWuypP5bW58BrsheqQUZHEDaR3OG2ksJ4RvWyyreD7p5HXhlFwhFMWQx%2BzxgwIZ6rNpbVFcLm%2FvdHIiuU0tKwqS3elDZV0CgqVrmFMMBSTaeaHGgUgKG%2B%2BVsIu%2FcmjOQO807Wf7kOKtjF%2FVUfSdL3Gcu2r9kGHrQ1l9pkgoeQMi4CO7f%2FOH2F2Gid3qdxFPrEu7mhpqJpQJP3ZphVlN6ZkS4RDK%2B%2BC5idC1chyL9WOKd1pmBTSwWA7uxgMVGVWIYi5vbqt0UUp16EeKaK5czyEQGI9%2F%2F1t1setHQA0Sh4hk%2BMgDRWhdyOrqaR5Iwk3wAUfkU0pJYBdAJYFLhpOslpGLdDz1jzmNIjz2UUw9YXTvwY6pgGpb9E%2BwSOgeM6NNcmtGoiz3MfLloBTdQ2Cj5xeMfYqEclYgwhGhyHxna240uG2ycMK%2Fa9hxqnZQ3d4TvRe%2FJWhT0BagPoQmqp078qetkDr2VV3DgGvG4D4zamCAsXdfWWayjkidXoNIWjNwZ9aozVXNOgcYUrmwNCBvh83G0jiKWfSdE%2FlOi5CPxPrYJXb1dyhtcdo2Zp9shE1zsvUtdxABMgXXT0s&X-Amz-Signature=2f7c89d2a1d7ab20d896bc5c04ba47ffee1067a5cf2b4142f8a136a3b6f67e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIHT3MP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsENopEzatNpdLK1eo27NftBKQniwNnHvMAd3xuCgMXAiBSjxJJGJBGYN87yV7K1DosgMGuusD%2BeNgi76qZljdPJir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM3jANNJA4yv8yZ2CQKtwD6joyQEDaRg%2BRFp%2FxDRyhbWBQAZ4zS4q3O0r5HP9aHFhHukUEaaFMat96wCjRkP7a%2FGewCwruPCWaLpHUJ5py%2FGGf0C1lCb8nIvx7R7U7dw3A1uACmY1wbccLKtmBQ%2B5KPVRT1lBXmOotHQdgi6FLUgdnWJ5Uypacf4cc9A8l9l76YDQDQcpRrn3c4z4RPRnpvzILGEOoK%2BZ8IeYtUW2HUj%2FeZ3HwHu6thXKUwFEytuiNLv%2FCuPLQrPPETo44GqwC2kegUDIRpe5Hy0ZcRlGV%2BaVWuypP5bW58BrsheqQUZHEDaR3OG2ksJ4RvWyyreD7p5HXhlFwhFMWQx%2BzxgwIZ6rNpbVFcLm%2FvdHIiuU0tKwqS3elDZV0CgqVrmFMMBSTaeaHGgUgKG%2B%2BVsIu%2FcmjOQO807Wf7kOKtjF%2FVUfSdL3Gcu2r9kGHrQ1l9pkgoeQMi4CO7f%2FOH2F2Gid3qdxFPrEu7mhpqJpQJP3ZphVlN6ZkS4RDK%2B%2BC5idC1chyL9WOKd1pmBTSwWA7uxgMVGVWIYi5vbqt0UUp16EeKaK5czyEQGI9%2F%2F1t1setHQA0Sh4hk%2BMgDRWhdyOrqaR5Iwk3wAUfkU0pJYBdAJYFLhpOslpGLdDz1jzmNIjz2UUw9YXTvwY6pgGpb9E%2BwSOgeM6NNcmtGoiz3MfLloBTdQ2Cj5xeMfYqEclYgwhGhyHxna240uG2ycMK%2Fa9hxqnZQ3d4TvRe%2FJWhT0BagPoQmqp078qetkDr2VV3DgGvG4D4zamCAsXdfWWayjkidXoNIWjNwZ9aozVXNOgcYUrmwNCBvh83G0jiKWfSdE%2FlOi5CPxPrYJXb1dyhtcdo2Zp9shE1zsvUtdxABMgXXT0s&X-Amz-Signature=fc878dd746e0ea8e728c6d20c8e08c670320a71670be9c1d66574eac6138f534&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIHT3MP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsENopEzatNpdLK1eo27NftBKQniwNnHvMAd3xuCgMXAiBSjxJJGJBGYN87yV7K1DosgMGuusD%2BeNgi76qZljdPJir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM3jANNJA4yv8yZ2CQKtwD6joyQEDaRg%2BRFp%2FxDRyhbWBQAZ4zS4q3O0r5HP9aHFhHukUEaaFMat96wCjRkP7a%2FGewCwruPCWaLpHUJ5py%2FGGf0C1lCb8nIvx7R7U7dw3A1uACmY1wbccLKtmBQ%2B5KPVRT1lBXmOotHQdgi6FLUgdnWJ5Uypacf4cc9A8l9l76YDQDQcpRrn3c4z4RPRnpvzILGEOoK%2BZ8IeYtUW2HUj%2FeZ3HwHu6thXKUwFEytuiNLv%2FCuPLQrPPETo44GqwC2kegUDIRpe5Hy0ZcRlGV%2BaVWuypP5bW58BrsheqQUZHEDaR3OG2ksJ4RvWyyreD7p5HXhlFwhFMWQx%2BzxgwIZ6rNpbVFcLm%2FvdHIiuU0tKwqS3elDZV0CgqVrmFMMBSTaeaHGgUgKG%2B%2BVsIu%2FcmjOQO807Wf7kOKtjF%2FVUfSdL3Gcu2r9kGHrQ1l9pkgoeQMi4CO7f%2FOH2F2Gid3qdxFPrEu7mhpqJpQJP3ZphVlN6ZkS4RDK%2B%2BC5idC1chyL9WOKd1pmBTSwWA7uxgMVGVWIYi5vbqt0UUp16EeKaK5czyEQGI9%2F%2F1t1setHQA0Sh4hk%2BMgDRWhdyOrqaR5Iwk3wAUfkU0pJYBdAJYFLhpOslpGLdDz1jzmNIjz2UUw9YXTvwY6pgGpb9E%2BwSOgeM6NNcmtGoiz3MfLloBTdQ2Cj5xeMfYqEclYgwhGhyHxna240uG2ycMK%2Fa9hxqnZQ3d4TvRe%2FJWhT0BagPoQmqp078qetkDr2VV3DgGvG4D4zamCAsXdfWWayjkidXoNIWjNwZ9aozVXNOgcYUrmwNCBvh83G0jiKWfSdE%2FlOi5CPxPrYJXb1dyhtcdo2Zp9shE1zsvUtdxABMgXXT0s&X-Amz-Signature=44147e3d369f14423fb6795c9d431201bd7942e5f9bca45a56499c13b378d296&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIHT3MP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsENopEzatNpdLK1eo27NftBKQniwNnHvMAd3xuCgMXAiBSjxJJGJBGYN87yV7K1DosgMGuusD%2BeNgi76qZljdPJir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM3jANNJA4yv8yZ2CQKtwD6joyQEDaRg%2BRFp%2FxDRyhbWBQAZ4zS4q3O0r5HP9aHFhHukUEaaFMat96wCjRkP7a%2FGewCwruPCWaLpHUJ5py%2FGGf0C1lCb8nIvx7R7U7dw3A1uACmY1wbccLKtmBQ%2B5KPVRT1lBXmOotHQdgi6FLUgdnWJ5Uypacf4cc9A8l9l76YDQDQcpRrn3c4z4RPRnpvzILGEOoK%2BZ8IeYtUW2HUj%2FeZ3HwHu6thXKUwFEytuiNLv%2FCuPLQrPPETo44GqwC2kegUDIRpe5Hy0ZcRlGV%2BaVWuypP5bW58BrsheqQUZHEDaR3OG2ksJ4RvWyyreD7p5HXhlFwhFMWQx%2BzxgwIZ6rNpbVFcLm%2FvdHIiuU0tKwqS3elDZV0CgqVrmFMMBSTaeaHGgUgKG%2B%2BVsIu%2FcmjOQO807Wf7kOKtjF%2FVUfSdL3Gcu2r9kGHrQ1l9pkgoeQMi4CO7f%2FOH2F2Gid3qdxFPrEu7mhpqJpQJP3ZphVlN6ZkS4RDK%2B%2BC5idC1chyL9WOKd1pmBTSwWA7uxgMVGVWIYi5vbqt0UUp16EeKaK5czyEQGI9%2F%2F1t1setHQA0Sh4hk%2BMgDRWhdyOrqaR5Iwk3wAUfkU0pJYBdAJYFLhpOslpGLdDz1jzmNIjz2UUw9YXTvwY6pgGpb9E%2BwSOgeM6NNcmtGoiz3MfLloBTdQ2Cj5xeMfYqEclYgwhGhyHxna240uG2ycMK%2Fa9hxqnZQ3d4TvRe%2FJWhT0BagPoQmqp078qetkDr2VV3DgGvG4D4zamCAsXdfWWayjkidXoNIWjNwZ9aozVXNOgcYUrmwNCBvh83G0jiKWfSdE%2FlOi5CPxPrYJXb1dyhtcdo2Zp9shE1zsvUtdxABMgXXT0s&X-Amz-Signature=b7c0af836c37b91ef5c9eecaef1f117ed9797084167c9f77d25426b367d89c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIHT3MP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsENopEzatNpdLK1eo27NftBKQniwNnHvMAd3xuCgMXAiBSjxJJGJBGYN87yV7K1DosgMGuusD%2BeNgi76qZljdPJir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM3jANNJA4yv8yZ2CQKtwD6joyQEDaRg%2BRFp%2FxDRyhbWBQAZ4zS4q3O0r5HP9aHFhHukUEaaFMat96wCjRkP7a%2FGewCwruPCWaLpHUJ5py%2FGGf0C1lCb8nIvx7R7U7dw3A1uACmY1wbccLKtmBQ%2B5KPVRT1lBXmOotHQdgi6FLUgdnWJ5Uypacf4cc9A8l9l76YDQDQcpRrn3c4z4RPRnpvzILGEOoK%2BZ8IeYtUW2HUj%2FeZ3HwHu6thXKUwFEytuiNLv%2FCuPLQrPPETo44GqwC2kegUDIRpe5Hy0ZcRlGV%2BaVWuypP5bW58BrsheqQUZHEDaR3OG2ksJ4RvWyyreD7p5HXhlFwhFMWQx%2BzxgwIZ6rNpbVFcLm%2FvdHIiuU0tKwqS3elDZV0CgqVrmFMMBSTaeaHGgUgKG%2B%2BVsIu%2FcmjOQO807Wf7kOKtjF%2FVUfSdL3Gcu2r9kGHrQ1l9pkgoeQMi4CO7f%2FOH2F2Gid3qdxFPrEu7mhpqJpQJP3ZphVlN6ZkS4RDK%2B%2BC5idC1chyL9WOKd1pmBTSwWA7uxgMVGVWIYi5vbqt0UUp16EeKaK5czyEQGI9%2F%2F1t1setHQA0Sh4hk%2BMgDRWhdyOrqaR5Iwk3wAUfkU0pJYBdAJYFLhpOslpGLdDz1jzmNIjz2UUw9YXTvwY6pgGpb9E%2BwSOgeM6NNcmtGoiz3MfLloBTdQ2Cj5xeMfYqEclYgwhGhyHxna240uG2ycMK%2Fa9hxqnZQ3d4TvRe%2FJWhT0BagPoQmqp078qetkDr2VV3DgGvG4D4zamCAsXdfWWayjkidXoNIWjNwZ9aozVXNOgcYUrmwNCBvh83G0jiKWfSdE%2FlOi5CPxPrYJXb1dyhtcdo2Zp9shE1zsvUtdxABMgXXT0s&X-Amz-Signature=f99ea901127c63da6a89d9edbc55316f133eb291f38dd05d1fa5cc6ab34663d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIHT3MP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsENopEzatNpdLK1eo27NftBKQniwNnHvMAd3xuCgMXAiBSjxJJGJBGYN87yV7K1DosgMGuusD%2BeNgi76qZljdPJir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM3jANNJA4yv8yZ2CQKtwD6joyQEDaRg%2BRFp%2FxDRyhbWBQAZ4zS4q3O0r5HP9aHFhHukUEaaFMat96wCjRkP7a%2FGewCwruPCWaLpHUJ5py%2FGGf0C1lCb8nIvx7R7U7dw3A1uACmY1wbccLKtmBQ%2B5KPVRT1lBXmOotHQdgi6FLUgdnWJ5Uypacf4cc9A8l9l76YDQDQcpRrn3c4z4RPRnpvzILGEOoK%2BZ8IeYtUW2HUj%2FeZ3HwHu6thXKUwFEytuiNLv%2FCuPLQrPPETo44GqwC2kegUDIRpe5Hy0ZcRlGV%2BaVWuypP5bW58BrsheqQUZHEDaR3OG2ksJ4RvWyyreD7p5HXhlFwhFMWQx%2BzxgwIZ6rNpbVFcLm%2FvdHIiuU0tKwqS3elDZV0CgqVrmFMMBSTaeaHGgUgKG%2B%2BVsIu%2FcmjOQO807Wf7kOKtjF%2FVUfSdL3Gcu2r9kGHrQ1l9pkgoeQMi4CO7f%2FOH2F2Gid3qdxFPrEu7mhpqJpQJP3ZphVlN6ZkS4RDK%2B%2BC5idC1chyL9WOKd1pmBTSwWA7uxgMVGVWIYi5vbqt0UUp16EeKaK5czyEQGI9%2F%2F1t1setHQA0Sh4hk%2BMgDRWhdyOrqaR5Iwk3wAUfkU0pJYBdAJYFLhpOslpGLdDz1jzmNIjz2UUw9YXTvwY6pgGpb9E%2BwSOgeM6NNcmtGoiz3MfLloBTdQ2Cj5xeMfYqEclYgwhGhyHxna240uG2ycMK%2Fa9hxqnZQ3d4TvRe%2FJWhT0BagPoQmqp078qetkDr2VV3DgGvG4D4zamCAsXdfWWayjkidXoNIWjNwZ9aozVXNOgcYUrmwNCBvh83G0jiKWfSdE%2FlOi5CPxPrYJXb1dyhtcdo2Zp9shE1zsvUtdxABMgXXT0s&X-Amz-Signature=381c8861e70c7a582fd829f3a1b208cf7b4cf0760c14d7a2dfe54661707c4700&X-Amz-SignedHeaders=host&x-id=GetObject)
