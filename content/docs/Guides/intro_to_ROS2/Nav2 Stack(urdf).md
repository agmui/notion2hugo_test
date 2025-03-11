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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2T63JP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDYCkZIjWZflVMOy7Et7V8SpKKv3KLxqCMXmhmpuG%2FewAiEA5VDHJPkqNyVY8jBohywju9Dm2DOp0OwPg2wIfwekNr0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3gF%2BCqC4ouyaFDyrcA6lIEYIQl5XGQPYgFmr7nO9cptl5C%2F9Os1cc0%2B1QB6rulPWW4%2FlSA3ierXunipj5d4muR4ORDzZeovThzLubd5EjozzsFtWG%2Bc2TrrrAEZzSQ2Uhux9tklhkx1%2Bu%2BTO53S5mYN9t71oI5mLds9glRw06QkRUwovynhpb5BrOiNfJyTd4USKqbgAzeF9LwGTiuiNTOjnUnvyzI2nsXcSgq2X0qWG99zFwgU11ULJ4I1jfgj%2BQPeHg%2FxONHAF%2F4hfX9Yt8ClRSo4hzZVdT5TnQd45V3ooq%2F4IsvtNGRMCRn81Yw28CRgGSRuO2KFlpsEsgGelFgrvCpcNsbgcj1C1Smfpx2FwJvvK8CEI686j8XP9BGU7ycKhVEikTyfh0bxlyzwGljUngZKY9%2B9DS0OmGTuk4AwL5Y7PaAxbns3cfJiXG7CDWYvCWX6crXxBYxK8EYMGCVnI3R3JHuSxDMAyplQ%2BYaHmPU6fz0bZffkxHBgdD8urEU0UhxwB%2BKNNrx0gb33KcLP%2BscM1%2Bv6CO4Z5PEJKdIyiSuRF3JsYj13zxaX0UcfvCqI%2Flo4xu8a3%2FQpehvmoaz69qXxsfNp9L2VvEhe49gQ3afBKL5vJh9FmIH3uajc98eYXGi%2FtZTnJbMNTrwL4GOqUBz1Cev5OKt6r6ylVJ9CTYqwmAo1l3cthZ5QSp6MAkK46RQdO6stlqCIjjVpxtO4T9VRgPkFHXYLk%2FF3WTWYV0G7bdyVpBN7eWKkHMJOS1EJ8xxRIImWhzS%2FMti%2Bb6yNU12zHLsCJpqOuhQ2MnvpACz%2FKbecdehU5w8%2Fgy%2Bf20wxatlhREIPN53mVFzGaaDldvtxYyqonhNyzh3H0dfQgAmX2lyVuS&X-Amz-Signature=dba4c34c2c19cfeb4a64cd6321c79feef81c152c602b74bc0e504118a349cfdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2T63JP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDYCkZIjWZflVMOy7Et7V8SpKKv3KLxqCMXmhmpuG%2FewAiEA5VDHJPkqNyVY8jBohywju9Dm2DOp0OwPg2wIfwekNr0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3gF%2BCqC4ouyaFDyrcA6lIEYIQl5XGQPYgFmr7nO9cptl5C%2F9Os1cc0%2B1QB6rulPWW4%2FlSA3ierXunipj5d4muR4ORDzZeovThzLubd5EjozzsFtWG%2Bc2TrrrAEZzSQ2Uhux9tklhkx1%2Bu%2BTO53S5mYN9t71oI5mLds9glRw06QkRUwovynhpb5BrOiNfJyTd4USKqbgAzeF9LwGTiuiNTOjnUnvyzI2nsXcSgq2X0qWG99zFwgU11ULJ4I1jfgj%2BQPeHg%2FxONHAF%2F4hfX9Yt8ClRSo4hzZVdT5TnQd45V3ooq%2F4IsvtNGRMCRn81Yw28CRgGSRuO2KFlpsEsgGelFgrvCpcNsbgcj1C1Smfpx2FwJvvK8CEI686j8XP9BGU7ycKhVEikTyfh0bxlyzwGljUngZKY9%2B9DS0OmGTuk4AwL5Y7PaAxbns3cfJiXG7CDWYvCWX6crXxBYxK8EYMGCVnI3R3JHuSxDMAyplQ%2BYaHmPU6fz0bZffkxHBgdD8urEU0UhxwB%2BKNNrx0gb33KcLP%2BscM1%2Bv6CO4Z5PEJKdIyiSuRF3JsYj13zxaX0UcfvCqI%2Flo4xu8a3%2FQpehvmoaz69qXxsfNp9L2VvEhe49gQ3afBKL5vJh9FmIH3uajc98eYXGi%2FtZTnJbMNTrwL4GOqUBz1Cev5OKt6r6ylVJ9CTYqwmAo1l3cthZ5QSp6MAkK46RQdO6stlqCIjjVpxtO4T9VRgPkFHXYLk%2FF3WTWYV0G7bdyVpBN7eWKkHMJOS1EJ8xxRIImWhzS%2FMti%2Bb6yNU12zHLsCJpqOuhQ2MnvpACz%2FKbecdehU5w8%2Fgy%2Bf20wxatlhREIPN53mVFzGaaDldvtxYyqonhNyzh3H0dfQgAmX2lyVuS&X-Amz-Signature=f7a2b521367553ed0e0135160d98f908c16be4bcac1ec52e8bba4b3f3d7a3ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2T63JP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDYCkZIjWZflVMOy7Et7V8SpKKv3KLxqCMXmhmpuG%2FewAiEA5VDHJPkqNyVY8jBohywju9Dm2DOp0OwPg2wIfwekNr0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3gF%2BCqC4ouyaFDyrcA6lIEYIQl5XGQPYgFmr7nO9cptl5C%2F9Os1cc0%2B1QB6rulPWW4%2FlSA3ierXunipj5d4muR4ORDzZeovThzLubd5EjozzsFtWG%2Bc2TrrrAEZzSQ2Uhux9tklhkx1%2Bu%2BTO53S5mYN9t71oI5mLds9glRw06QkRUwovynhpb5BrOiNfJyTd4USKqbgAzeF9LwGTiuiNTOjnUnvyzI2nsXcSgq2X0qWG99zFwgU11ULJ4I1jfgj%2BQPeHg%2FxONHAF%2F4hfX9Yt8ClRSo4hzZVdT5TnQd45V3ooq%2F4IsvtNGRMCRn81Yw28CRgGSRuO2KFlpsEsgGelFgrvCpcNsbgcj1C1Smfpx2FwJvvK8CEI686j8XP9BGU7ycKhVEikTyfh0bxlyzwGljUngZKY9%2B9DS0OmGTuk4AwL5Y7PaAxbns3cfJiXG7CDWYvCWX6crXxBYxK8EYMGCVnI3R3JHuSxDMAyplQ%2BYaHmPU6fz0bZffkxHBgdD8urEU0UhxwB%2BKNNrx0gb33KcLP%2BscM1%2Bv6CO4Z5PEJKdIyiSuRF3JsYj13zxaX0UcfvCqI%2Flo4xu8a3%2FQpehvmoaz69qXxsfNp9L2VvEhe49gQ3afBKL5vJh9FmIH3uajc98eYXGi%2FtZTnJbMNTrwL4GOqUBz1Cev5OKt6r6ylVJ9CTYqwmAo1l3cthZ5QSp6MAkK46RQdO6stlqCIjjVpxtO4T9VRgPkFHXYLk%2FF3WTWYV0G7bdyVpBN7eWKkHMJOS1EJ8xxRIImWhzS%2FMti%2Bb6yNU12zHLsCJpqOuhQ2MnvpACz%2FKbecdehU5w8%2Fgy%2Bf20wxatlhREIPN53mVFzGaaDldvtxYyqonhNyzh3H0dfQgAmX2lyVuS&X-Amz-Signature=4ab2d0782fb4a11a78dd33f1fe3c4874a800282804f44bbc0944c7d11f4172f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2T63JP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDYCkZIjWZflVMOy7Et7V8SpKKv3KLxqCMXmhmpuG%2FewAiEA5VDHJPkqNyVY8jBohywju9Dm2DOp0OwPg2wIfwekNr0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3gF%2BCqC4ouyaFDyrcA6lIEYIQl5XGQPYgFmr7nO9cptl5C%2F9Os1cc0%2B1QB6rulPWW4%2FlSA3ierXunipj5d4muR4ORDzZeovThzLubd5EjozzsFtWG%2Bc2TrrrAEZzSQ2Uhux9tklhkx1%2Bu%2BTO53S5mYN9t71oI5mLds9glRw06QkRUwovynhpb5BrOiNfJyTd4USKqbgAzeF9LwGTiuiNTOjnUnvyzI2nsXcSgq2X0qWG99zFwgU11ULJ4I1jfgj%2BQPeHg%2FxONHAF%2F4hfX9Yt8ClRSo4hzZVdT5TnQd45V3ooq%2F4IsvtNGRMCRn81Yw28CRgGSRuO2KFlpsEsgGelFgrvCpcNsbgcj1C1Smfpx2FwJvvK8CEI686j8XP9BGU7ycKhVEikTyfh0bxlyzwGljUngZKY9%2B9DS0OmGTuk4AwL5Y7PaAxbns3cfJiXG7CDWYvCWX6crXxBYxK8EYMGCVnI3R3JHuSxDMAyplQ%2BYaHmPU6fz0bZffkxHBgdD8urEU0UhxwB%2BKNNrx0gb33KcLP%2BscM1%2Bv6CO4Z5PEJKdIyiSuRF3JsYj13zxaX0UcfvCqI%2Flo4xu8a3%2FQpehvmoaz69qXxsfNp9L2VvEhe49gQ3afBKL5vJh9FmIH3uajc98eYXGi%2FtZTnJbMNTrwL4GOqUBz1Cev5OKt6r6ylVJ9CTYqwmAo1l3cthZ5QSp6MAkK46RQdO6stlqCIjjVpxtO4T9VRgPkFHXYLk%2FF3WTWYV0G7bdyVpBN7eWKkHMJOS1EJ8xxRIImWhzS%2FMti%2Bb6yNU12zHLsCJpqOuhQ2MnvpACz%2FKbecdehU5w8%2Fgy%2Bf20wxatlhREIPN53mVFzGaaDldvtxYyqonhNyzh3H0dfQgAmX2lyVuS&X-Amz-Signature=a753d4175cfbf517b26aacbf7d8cbf386d178bd2f5070e5be76887a51904a8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2T63JP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDYCkZIjWZflVMOy7Et7V8SpKKv3KLxqCMXmhmpuG%2FewAiEA5VDHJPkqNyVY8jBohywju9Dm2DOp0OwPg2wIfwekNr0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3gF%2BCqC4ouyaFDyrcA6lIEYIQl5XGQPYgFmr7nO9cptl5C%2F9Os1cc0%2B1QB6rulPWW4%2FlSA3ierXunipj5d4muR4ORDzZeovThzLubd5EjozzsFtWG%2Bc2TrrrAEZzSQ2Uhux9tklhkx1%2Bu%2BTO53S5mYN9t71oI5mLds9glRw06QkRUwovynhpb5BrOiNfJyTd4USKqbgAzeF9LwGTiuiNTOjnUnvyzI2nsXcSgq2X0qWG99zFwgU11ULJ4I1jfgj%2BQPeHg%2FxONHAF%2F4hfX9Yt8ClRSo4hzZVdT5TnQd45V3ooq%2F4IsvtNGRMCRn81Yw28CRgGSRuO2KFlpsEsgGelFgrvCpcNsbgcj1C1Smfpx2FwJvvK8CEI686j8XP9BGU7ycKhVEikTyfh0bxlyzwGljUngZKY9%2B9DS0OmGTuk4AwL5Y7PaAxbns3cfJiXG7CDWYvCWX6crXxBYxK8EYMGCVnI3R3JHuSxDMAyplQ%2BYaHmPU6fz0bZffkxHBgdD8urEU0UhxwB%2BKNNrx0gb33KcLP%2BscM1%2Bv6CO4Z5PEJKdIyiSuRF3JsYj13zxaX0UcfvCqI%2Flo4xu8a3%2FQpehvmoaz69qXxsfNp9L2VvEhe49gQ3afBKL5vJh9FmIH3uajc98eYXGi%2FtZTnJbMNTrwL4GOqUBz1Cev5OKt6r6ylVJ9CTYqwmAo1l3cthZ5QSp6MAkK46RQdO6stlqCIjjVpxtO4T9VRgPkFHXYLk%2FF3WTWYV0G7bdyVpBN7eWKkHMJOS1EJ8xxRIImWhzS%2FMti%2Bb6yNU12zHLsCJpqOuhQ2MnvpACz%2FKbecdehU5w8%2Fgy%2Bf20wxatlhREIPN53mVFzGaaDldvtxYyqonhNyzh3H0dfQgAmX2lyVuS&X-Amz-Signature=2b12bf77620a15041b6bbc52f5683d2ddd09fe4f6e3b2e0a1edc465d36585cb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2T63JP%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDYCkZIjWZflVMOy7Et7V8SpKKv3KLxqCMXmhmpuG%2FewAiEA5VDHJPkqNyVY8jBohywju9Dm2DOp0OwPg2wIfwekNr0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn3gF%2BCqC4ouyaFDyrcA6lIEYIQl5XGQPYgFmr7nO9cptl5C%2F9Os1cc0%2B1QB6rulPWW4%2FlSA3ierXunipj5d4muR4ORDzZeovThzLubd5EjozzsFtWG%2Bc2TrrrAEZzSQ2Uhux9tklhkx1%2Bu%2BTO53S5mYN9t71oI5mLds9glRw06QkRUwovynhpb5BrOiNfJyTd4USKqbgAzeF9LwGTiuiNTOjnUnvyzI2nsXcSgq2X0qWG99zFwgU11ULJ4I1jfgj%2BQPeHg%2FxONHAF%2F4hfX9Yt8ClRSo4hzZVdT5TnQd45V3ooq%2F4IsvtNGRMCRn81Yw28CRgGSRuO2KFlpsEsgGelFgrvCpcNsbgcj1C1Smfpx2FwJvvK8CEI686j8XP9BGU7ycKhVEikTyfh0bxlyzwGljUngZKY9%2B9DS0OmGTuk4AwL5Y7PaAxbns3cfJiXG7CDWYvCWX6crXxBYxK8EYMGCVnI3R3JHuSxDMAyplQ%2BYaHmPU6fz0bZffkxHBgdD8urEU0UhxwB%2BKNNrx0gb33KcLP%2BscM1%2Bv6CO4Z5PEJKdIyiSuRF3JsYj13zxaX0UcfvCqI%2Flo4xu8a3%2FQpehvmoaz69qXxsfNp9L2VvEhe49gQ3afBKL5vJh9FmIH3uajc98eYXGi%2FtZTnJbMNTrwL4GOqUBz1Cev5OKt6r6ylVJ9CTYqwmAo1l3cthZ5QSp6MAkK46RQdO6stlqCIjjVpxtO4T9VRgPkFHXYLk%2FF3WTWYV0G7bdyVpBN7eWKkHMJOS1EJ8xxRIImWhzS%2FMti%2Bb6yNU12zHLsCJpqOuhQ2MnvpACz%2FKbecdehU5w8%2Fgy%2Bf20wxatlhREIPN53mVFzGaaDldvtxYyqonhNyzh3H0dfQgAmX2lyVuS&X-Amz-Signature=4990a9aed9516db6f2f6d1fe63f2e77b582b2d6d796bc90a9085a38a111f6279&X-Amz-SignedHeaders=host&x-id=GetObject)
