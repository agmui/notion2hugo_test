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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBQGKJW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnsptvIAJ35MFmejT6EaZka5L27hVRkyfizLGCt%2BBeoAiEA%2FMHmrI1mCxcSKyq9CWbyMQvfS01EbH6FsKAo7qRqVTQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBosmSx3uGKYTjgS3yrcAxvqH1l%2FUeSCRinsmd%2FLAtecE%2BvdqP1YuWHHTpWYkGY5kC%2BJqGwaYa12Zk2LwfeAAt0uXPl21mWU9ghpQ%2Fpd6gqKRr19y7LBlInSWQLyGpSpaGLQlfsR7Vd2fVdo%2BIOjPhxYZDtUlX7mxrwhFAxzXRD2PRheMvUya2E84p8u1aC7p826ul%2FURDFJERzsUmoKtpxK4PCk473XUF6ghmtFkBHjafQJbjg9qvK4iUpMDtePjjM4kG2h%2F3nwfU88cmZhfUsoC1Ym2oUKntDKeoK4MtHKXhhpAR9OLe3CgdeZ07n08CmtCn2JzczHfPcbLsg5jU2sG3QW5UmDUSJxGhiUlFVKNPQvsxjPdBX3Bt41D3%2F%2BrLhgpikMu8HAN3wJpYwrLMONMNp5IfA%2FnIzwk45PfNUOrMKWPr69pCnmx5VUATeugQJMdh7zX%2Fa1a2Vx8OBcT6hxn0eVQlVhxOghXE4m6svtwcHV0FYi0vvKGDRMLwlKgDb1ctbjpWrmHWN71aeQlYTTUJ57COOlQ1D4FyjTpaTCYU94VE%2Fj4ByMQfzHIP6rlvKjDpHWVJipwO%2FnFYSTfD8QPqicoXol0McR5o1j8tfRXzMhQ0CtUcdnJsJJnnaT%2BQ1Nqsllqcj2%2BWR9MMyGzr8GOqUB5Xq2%2B282fKX7BaCw4P682Dcq0ZHq5WDvfju6UBxbtIXCa%2BghSyBCCe8r647XT0cUvnJzVk2yTl2JP1MX%2BKMFtHOqQF%2BiqONNo%2BW%2F2%2Fsrm%2FpsqDUHIwRemOUmkwo1a03VeZOOUnW%2BQ3dC16DoHmDYeF36X2XOnkd%2FmPjvBg634%2FjNCPeub0GIUHgP%2BDXW2UaQfaZBHiftMJ9J7CTM8OIxNACYcDp7&X-Amz-Signature=f30b013b2a6475895680eee32afc2b4695e587fc30c2745baf5b204c9f259228&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBQGKJW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnsptvIAJ35MFmejT6EaZka5L27hVRkyfizLGCt%2BBeoAiEA%2FMHmrI1mCxcSKyq9CWbyMQvfS01EbH6FsKAo7qRqVTQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBosmSx3uGKYTjgS3yrcAxvqH1l%2FUeSCRinsmd%2FLAtecE%2BvdqP1YuWHHTpWYkGY5kC%2BJqGwaYa12Zk2LwfeAAt0uXPl21mWU9ghpQ%2Fpd6gqKRr19y7LBlInSWQLyGpSpaGLQlfsR7Vd2fVdo%2BIOjPhxYZDtUlX7mxrwhFAxzXRD2PRheMvUya2E84p8u1aC7p826ul%2FURDFJERzsUmoKtpxK4PCk473XUF6ghmtFkBHjafQJbjg9qvK4iUpMDtePjjM4kG2h%2F3nwfU88cmZhfUsoC1Ym2oUKntDKeoK4MtHKXhhpAR9OLe3CgdeZ07n08CmtCn2JzczHfPcbLsg5jU2sG3QW5UmDUSJxGhiUlFVKNPQvsxjPdBX3Bt41D3%2F%2BrLhgpikMu8HAN3wJpYwrLMONMNp5IfA%2FnIzwk45PfNUOrMKWPr69pCnmx5VUATeugQJMdh7zX%2Fa1a2Vx8OBcT6hxn0eVQlVhxOghXE4m6svtwcHV0FYi0vvKGDRMLwlKgDb1ctbjpWrmHWN71aeQlYTTUJ57COOlQ1D4FyjTpaTCYU94VE%2Fj4ByMQfzHIP6rlvKjDpHWVJipwO%2FnFYSTfD8QPqicoXol0McR5o1j8tfRXzMhQ0CtUcdnJsJJnnaT%2BQ1Nqsllqcj2%2BWR9MMyGzr8GOqUB5Xq2%2B282fKX7BaCw4P682Dcq0ZHq5WDvfju6UBxbtIXCa%2BghSyBCCe8r647XT0cUvnJzVk2yTl2JP1MX%2BKMFtHOqQF%2BiqONNo%2BW%2F2%2Fsrm%2FpsqDUHIwRemOUmkwo1a03VeZOOUnW%2BQ3dC16DoHmDYeF36X2XOnkd%2FmPjvBg634%2FjNCPeub0GIUHgP%2BDXW2UaQfaZBHiftMJ9J7CTM8OIxNACYcDp7&X-Amz-Signature=6c36ef1821da7c54a3fba8c60f738ea014c08198faedc6e9e34298300ce1144b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBQGKJW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnsptvIAJ35MFmejT6EaZka5L27hVRkyfizLGCt%2BBeoAiEA%2FMHmrI1mCxcSKyq9CWbyMQvfS01EbH6FsKAo7qRqVTQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBosmSx3uGKYTjgS3yrcAxvqH1l%2FUeSCRinsmd%2FLAtecE%2BvdqP1YuWHHTpWYkGY5kC%2BJqGwaYa12Zk2LwfeAAt0uXPl21mWU9ghpQ%2Fpd6gqKRr19y7LBlInSWQLyGpSpaGLQlfsR7Vd2fVdo%2BIOjPhxYZDtUlX7mxrwhFAxzXRD2PRheMvUya2E84p8u1aC7p826ul%2FURDFJERzsUmoKtpxK4PCk473XUF6ghmtFkBHjafQJbjg9qvK4iUpMDtePjjM4kG2h%2F3nwfU88cmZhfUsoC1Ym2oUKntDKeoK4MtHKXhhpAR9OLe3CgdeZ07n08CmtCn2JzczHfPcbLsg5jU2sG3QW5UmDUSJxGhiUlFVKNPQvsxjPdBX3Bt41D3%2F%2BrLhgpikMu8HAN3wJpYwrLMONMNp5IfA%2FnIzwk45PfNUOrMKWPr69pCnmx5VUATeugQJMdh7zX%2Fa1a2Vx8OBcT6hxn0eVQlVhxOghXE4m6svtwcHV0FYi0vvKGDRMLwlKgDb1ctbjpWrmHWN71aeQlYTTUJ57COOlQ1D4FyjTpaTCYU94VE%2Fj4ByMQfzHIP6rlvKjDpHWVJipwO%2FnFYSTfD8QPqicoXol0McR5o1j8tfRXzMhQ0CtUcdnJsJJnnaT%2BQ1Nqsllqcj2%2BWR9MMyGzr8GOqUB5Xq2%2B282fKX7BaCw4P682Dcq0ZHq5WDvfju6UBxbtIXCa%2BghSyBCCe8r647XT0cUvnJzVk2yTl2JP1MX%2BKMFtHOqQF%2BiqONNo%2BW%2F2%2Fsrm%2FpsqDUHIwRemOUmkwo1a03VeZOOUnW%2BQ3dC16DoHmDYeF36X2XOnkd%2FmPjvBg634%2FjNCPeub0GIUHgP%2BDXW2UaQfaZBHiftMJ9J7CTM8OIxNACYcDp7&X-Amz-Signature=57c20033fe5b526c8a8de64091fa1b42bda66f6cefb7e79029de801bc1826dce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBQGKJW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnsptvIAJ35MFmejT6EaZka5L27hVRkyfizLGCt%2BBeoAiEA%2FMHmrI1mCxcSKyq9CWbyMQvfS01EbH6FsKAo7qRqVTQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBosmSx3uGKYTjgS3yrcAxvqH1l%2FUeSCRinsmd%2FLAtecE%2BvdqP1YuWHHTpWYkGY5kC%2BJqGwaYa12Zk2LwfeAAt0uXPl21mWU9ghpQ%2Fpd6gqKRr19y7LBlInSWQLyGpSpaGLQlfsR7Vd2fVdo%2BIOjPhxYZDtUlX7mxrwhFAxzXRD2PRheMvUya2E84p8u1aC7p826ul%2FURDFJERzsUmoKtpxK4PCk473XUF6ghmtFkBHjafQJbjg9qvK4iUpMDtePjjM4kG2h%2F3nwfU88cmZhfUsoC1Ym2oUKntDKeoK4MtHKXhhpAR9OLe3CgdeZ07n08CmtCn2JzczHfPcbLsg5jU2sG3QW5UmDUSJxGhiUlFVKNPQvsxjPdBX3Bt41D3%2F%2BrLhgpikMu8HAN3wJpYwrLMONMNp5IfA%2FnIzwk45PfNUOrMKWPr69pCnmx5VUATeugQJMdh7zX%2Fa1a2Vx8OBcT6hxn0eVQlVhxOghXE4m6svtwcHV0FYi0vvKGDRMLwlKgDb1ctbjpWrmHWN71aeQlYTTUJ57COOlQ1D4FyjTpaTCYU94VE%2Fj4ByMQfzHIP6rlvKjDpHWVJipwO%2FnFYSTfD8QPqicoXol0McR5o1j8tfRXzMhQ0CtUcdnJsJJnnaT%2BQ1Nqsllqcj2%2BWR9MMyGzr8GOqUB5Xq2%2B282fKX7BaCw4P682Dcq0ZHq5WDvfju6UBxbtIXCa%2BghSyBCCe8r647XT0cUvnJzVk2yTl2JP1MX%2BKMFtHOqQF%2BiqONNo%2BW%2F2%2Fsrm%2FpsqDUHIwRemOUmkwo1a03VeZOOUnW%2BQ3dC16DoHmDYeF36X2XOnkd%2FmPjvBg634%2FjNCPeub0GIUHgP%2BDXW2UaQfaZBHiftMJ9J7CTM8OIxNACYcDp7&X-Amz-Signature=c64386f7d37380d0f2dd55994557424941a998bc5317aea76f140e0737ab4063&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBQGKJW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnsptvIAJ35MFmejT6EaZka5L27hVRkyfizLGCt%2BBeoAiEA%2FMHmrI1mCxcSKyq9CWbyMQvfS01EbH6FsKAo7qRqVTQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBosmSx3uGKYTjgS3yrcAxvqH1l%2FUeSCRinsmd%2FLAtecE%2BvdqP1YuWHHTpWYkGY5kC%2BJqGwaYa12Zk2LwfeAAt0uXPl21mWU9ghpQ%2Fpd6gqKRr19y7LBlInSWQLyGpSpaGLQlfsR7Vd2fVdo%2BIOjPhxYZDtUlX7mxrwhFAxzXRD2PRheMvUya2E84p8u1aC7p826ul%2FURDFJERzsUmoKtpxK4PCk473XUF6ghmtFkBHjafQJbjg9qvK4iUpMDtePjjM4kG2h%2F3nwfU88cmZhfUsoC1Ym2oUKntDKeoK4MtHKXhhpAR9OLe3CgdeZ07n08CmtCn2JzczHfPcbLsg5jU2sG3QW5UmDUSJxGhiUlFVKNPQvsxjPdBX3Bt41D3%2F%2BrLhgpikMu8HAN3wJpYwrLMONMNp5IfA%2FnIzwk45PfNUOrMKWPr69pCnmx5VUATeugQJMdh7zX%2Fa1a2Vx8OBcT6hxn0eVQlVhxOghXE4m6svtwcHV0FYi0vvKGDRMLwlKgDb1ctbjpWrmHWN71aeQlYTTUJ57COOlQ1D4FyjTpaTCYU94VE%2Fj4ByMQfzHIP6rlvKjDpHWVJipwO%2FnFYSTfD8QPqicoXol0McR5o1j8tfRXzMhQ0CtUcdnJsJJnnaT%2BQ1Nqsllqcj2%2BWR9MMyGzr8GOqUB5Xq2%2B282fKX7BaCw4P682Dcq0ZHq5WDvfju6UBxbtIXCa%2BghSyBCCe8r647XT0cUvnJzVk2yTl2JP1MX%2BKMFtHOqQF%2BiqONNo%2BW%2F2%2Fsrm%2FpsqDUHIwRemOUmkwo1a03VeZOOUnW%2BQ3dC16DoHmDYeF36X2XOnkd%2FmPjvBg634%2FjNCPeub0GIUHgP%2BDXW2UaQfaZBHiftMJ9J7CTM8OIxNACYcDp7&X-Amz-Signature=1cdbf07a888d2ef613dc5b3d3827e87307ab0ee182a4e0bce11e31131fb4fb91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBQGKJW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnsptvIAJ35MFmejT6EaZka5L27hVRkyfizLGCt%2BBeoAiEA%2FMHmrI1mCxcSKyq9CWbyMQvfS01EbH6FsKAo7qRqVTQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBosmSx3uGKYTjgS3yrcAxvqH1l%2FUeSCRinsmd%2FLAtecE%2BvdqP1YuWHHTpWYkGY5kC%2BJqGwaYa12Zk2LwfeAAt0uXPl21mWU9ghpQ%2Fpd6gqKRr19y7LBlInSWQLyGpSpaGLQlfsR7Vd2fVdo%2BIOjPhxYZDtUlX7mxrwhFAxzXRD2PRheMvUya2E84p8u1aC7p826ul%2FURDFJERzsUmoKtpxK4PCk473XUF6ghmtFkBHjafQJbjg9qvK4iUpMDtePjjM4kG2h%2F3nwfU88cmZhfUsoC1Ym2oUKntDKeoK4MtHKXhhpAR9OLe3CgdeZ07n08CmtCn2JzczHfPcbLsg5jU2sG3QW5UmDUSJxGhiUlFVKNPQvsxjPdBX3Bt41D3%2F%2BrLhgpikMu8HAN3wJpYwrLMONMNp5IfA%2FnIzwk45PfNUOrMKWPr69pCnmx5VUATeugQJMdh7zX%2Fa1a2Vx8OBcT6hxn0eVQlVhxOghXE4m6svtwcHV0FYi0vvKGDRMLwlKgDb1ctbjpWrmHWN71aeQlYTTUJ57COOlQ1D4FyjTpaTCYU94VE%2Fj4ByMQfzHIP6rlvKjDpHWVJipwO%2FnFYSTfD8QPqicoXol0McR5o1j8tfRXzMhQ0CtUcdnJsJJnnaT%2BQ1Nqsllqcj2%2BWR9MMyGzr8GOqUB5Xq2%2B282fKX7BaCw4P682Dcq0ZHq5WDvfju6UBxbtIXCa%2BghSyBCCe8r647XT0cUvnJzVk2yTl2JP1MX%2BKMFtHOqQF%2BiqONNo%2BW%2F2%2Fsrm%2FpsqDUHIwRemOUmkwo1a03VeZOOUnW%2BQ3dC16DoHmDYeF36X2XOnkd%2FmPjvBg634%2FjNCPeub0GIUHgP%2BDXW2UaQfaZBHiftMJ9J7CTM8OIxNACYcDp7&X-Amz-Signature=5bd117231612b09e3e14b024e30f47064830b2dd8c7593f45ba23a51dc347558&X-Amz-SignedHeaders=host&x-id=GetObject)
