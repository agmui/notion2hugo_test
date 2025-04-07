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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKQP5IF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvCyj3Sq9nqcST%2Fllqga3mxOdleEXC1db1YRJmarJ%2BugIhAJ7ZrQPhnAnjbrYiSWvxZJw7u9XblK8IQyLHX5EtkXEqKv8DCFoQABoMNjM3NDIzMTgzODA1Igw9ag1CNufFIupaZk8q3AOzq7ciZZ8j6TjB%2FRYWdcU0wUigi0ZKQ6JXOTkm8Btv%2FWUkAa2d70DVz5hFtEZUqNWSm%2BTvkdFDhGxVoan05JnWB9bSL3qwQhsjgZps4XGvlgI6En5gzPxujUDXr1mkjlBo0VJ7YfIylEh4Av6v3%2BVcjcx%2B3pHzPRKbBfjZrX3N6V3ln87GqardS%2FDucKFVTzjam%2FYJ2rWHrxP58SCLoS3KZQm3tKS1HgjgHAOaw5Tp1hSe3%2BZJoFnsn6JDxm2F4afhL%2B%2FOYESl9QOQYoMEdal9sz9jr7N2lAX435yO0vv6EeQZ5v%2Brh4pE6zRG%2Bk%2BrPfgUFryWJ9y%2FNJNLoVh5NQZkb2DHpVdD7bzBXpZszR6Z%2BOINvoj%2BMGaZJe8VJ4mM1z%2FbRZQS9y7l7HSY%2FMZ3jWBagVRRnBuUX10uMn5knhWJSYxLC%2FO2MvOK7%2FbpizuDzzXDybb%2FmtJjUUrLDiatGEdt65wKgNZXzKfw%2BdgmEQdtNnKj3iBeWnI%2FhZZk6Btb0UGe926nR9qa%2FiBHYjNSPVPayqTUwq10bNcM4rsN6lTYzyErXHmGbWSOPjBJJUGz5a1d1YIMvnvhsfAdO0pK98uuT8JMmywZszPCAflGry1jPjTf96w4mO%2Bx5NgNOjDXoc6%2FBjqkAS1YyHrQMzk79ORxGmSlH%2FdlTWPxc%2BbXRHNEeCnhT3YIW1KBVPo95JhZkCd5%2Bit6lbsDY2YRnft2DGAQkQGsn4A01pbAW%2BjbhnHFH3V0lLvsYrxqGrL8oTUesi9d7PRY2mzclbub5OKqlwkvW79Pxfhuei%2FXwAC%2B6UTCcEBPo6zQ6LIM29BIYVwqw9MgBxcBy66hkwp%2BKs8rKB1xnijxDofPvoBY&X-Amz-Signature=e459346b352c13edd3494751be4a68f20b6e03ef8f61db7f58a8da24704720a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKQP5IF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvCyj3Sq9nqcST%2Fllqga3mxOdleEXC1db1YRJmarJ%2BugIhAJ7ZrQPhnAnjbrYiSWvxZJw7u9XblK8IQyLHX5EtkXEqKv8DCFoQABoMNjM3NDIzMTgzODA1Igw9ag1CNufFIupaZk8q3AOzq7ciZZ8j6TjB%2FRYWdcU0wUigi0ZKQ6JXOTkm8Btv%2FWUkAa2d70DVz5hFtEZUqNWSm%2BTvkdFDhGxVoan05JnWB9bSL3qwQhsjgZps4XGvlgI6En5gzPxujUDXr1mkjlBo0VJ7YfIylEh4Av6v3%2BVcjcx%2B3pHzPRKbBfjZrX3N6V3ln87GqardS%2FDucKFVTzjam%2FYJ2rWHrxP58SCLoS3KZQm3tKS1HgjgHAOaw5Tp1hSe3%2BZJoFnsn6JDxm2F4afhL%2B%2FOYESl9QOQYoMEdal9sz9jr7N2lAX435yO0vv6EeQZ5v%2Brh4pE6zRG%2Bk%2BrPfgUFryWJ9y%2FNJNLoVh5NQZkb2DHpVdD7bzBXpZszR6Z%2BOINvoj%2BMGaZJe8VJ4mM1z%2FbRZQS9y7l7HSY%2FMZ3jWBagVRRnBuUX10uMn5knhWJSYxLC%2FO2MvOK7%2FbpizuDzzXDybb%2FmtJjUUrLDiatGEdt65wKgNZXzKfw%2BdgmEQdtNnKj3iBeWnI%2FhZZk6Btb0UGe926nR9qa%2FiBHYjNSPVPayqTUwq10bNcM4rsN6lTYzyErXHmGbWSOPjBJJUGz5a1d1YIMvnvhsfAdO0pK98uuT8JMmywZszPCAflGry1jPjTf96w4mO%2Bx5NgNOjDXoc6%2FBjqkAS1YyHrQMzk79ORxGmSlH%2FdlTWPxc%2BbXRHNEeCnhT3YIW1KBVPo95JhZkCd5%2Bit6lbsDY2YRnft2DGAQkQGsn4A01pbAW%2BjbhnHFH3V0lLvsYrxqGrL8oTUesi9d7PRY2mzclbub5OKqlwkvW79Pxfhuei%2FXwAC%2B6UTCcEBPo6zQ6LIM29BIYVwqw9MgBxcBy66hkwp%2BKs8rKB1xnijxDofPvoBY&X-Amz-Signature=0f8ee6cd00cf42cc6489950ae18939d3959df18c8ff35c1fd4fe73b10da201c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKQP5IF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvCyj3Sq9nqcST%2Fllqga3mxOdleEXC1db1YRJmarJ%2BugIhAJ7ZrQPhnAnjbrYiSWvxZJw7u9XblK8IQyLHX5EtkXEqKv8DCFoQABoMNjM3NDIzMTgzODA1Igw9ag1CNufFIupaZk8q3AOzq7ciZZ8j6TjB%2FRYWdcU0wUigi0ZKQ6JXOTkm8Btv%2FWUkAa2d70DVz5hFtEZUqNWSm%2BTvkdFDhGxVoan05JnWB9bSL3qwQhsjgZps4XGvlgI6En5gzPxujUDXr1mkjlBo0VJ7YfIylEh4Av6v3%2BVcjcx%2B3pHzPRKbBfjZrX3N6V3ln87GqardS%2FDucKFVTzjam%2FYJ2rWHrxP58SCLoS3KZQm3tKS1HgjgHAOaw5Tp1hSe3%2BZJoFnsn6JDxm2F4afhL%2B%2FOYESl9QOQYoMEdal9sz9jr7N2lAX435yO0vv6EeQZ5v%2Brh4pE6zRG%2Bk%2BrPfgUFryWJ9y%2FNJNLoVh5NQZkb2DHpVdD7bzBXpZszR6Z%2BOINvoj%2BMGaZJe8VJ4mM1z%2FbRZQS9y7l7HSY%2FMZ3jWBagVRRnBuUX10uMn5knhWJSYxLC%2FO2MvOK7%2FbpizuDzzXDybb%2FmtJjUUrLDiatGEdt65wKgNZXzKfw%2BdgmEQdtNnKj3iBeWnI%2FhZZk6Btb0UGe926nR9qa%2FiBHYjNSPVPayqTUwq10bNcM4rsN6lTYzyErXHmGbWSOPjBJJUGz5a1d1YIMvnvhsfAdO0pK98uuT8JMmywZszPCAflGry1jPjTf96w4mO%2Bx5NgNOjDXoc6%2FBjqkAS1YyHrQMzk79ORxGmSlH%2FdlTWPxc%2BbXRHNEeCnhT3YIW1KBVPo95JhZkCd5%2Bit6lbsDY2YRnft2DGAQkQGsn4A01pbAW%2BjbhnHFH3V0lLvsYrxqGrL8oTUesi9d7PRY2mzclbub5OKqlwkvW79Pxfhuei%2FXwAC%2B6UTCcEBPo6zQ6LIM29BIYVwqw9MgBxcBy66hkwp%2BKs8rKB1xnijxDofPvoBY&X-Amz-Signature=93d0d767fe5154774dac34f28f98b0df02245fa41ce6f092669b639d9807b440&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKQP5IF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvCyj3Sq9nqcST%2Fllqga3mxOdleEXC1db1YRJmarJ%2BugIhAJ7ZrQPhnAnjbrYiSWvxZJw7u9XblK8IQyLHX5EtkXEqKv8DCFoQABoMNjM3NDIzMTgzODA1Igw9ag1CNufFIupaZk8q3AOzq7ciZZ8j6TjB%2FRYWdcU0wUigi0ZKQ6JXOTkm8Btv%2FWUkAa2d70DVz5hFtEZUqNWSm%2BTvkdFDhGxVoan05JnWB9bSL3qwQhsjgZps4XGvlgI6En5gzPxujUDXr1mkjlBo0VJ7YfIylEh4Av6v3%2BVcjcx%2B3pHzPRKbBfjZrX3N6V3ln87GqardS%2FDucKFVTzjam%2FYJ2rWHrxP58SCLoS3KZQm3tKS1HgjgHAOaw5Tp1hSe3%2BZJoFnsn6JDxm2F4afhL%2B%2FOYESl9QOQYoMEdal9sz9jr7N2lAX435yO0vv6EeQZ5v%2Brh4pE6zRG%2Bk%2BrPfgUFryWJ9y%2FNJNLoVh5NQZkb2DHpVdD7bzBXpZszR6Z%2BOINvoj%2BMGaZJe8VJ4mM1z%2FbRZQS9y7l7HSY%2FMZ3jWBagVRRnBuUX10uMn5knhWJSYxLC%2FO2MvOK7%2FbpizuDzzXDybb%2FmtJjUUrLDiatGEdt65wKgNZXzKfw%2BdgmEQdtNnKj3iBeWnI%2FhZZk6Btb0UGe926nR9qa%2FiBHYjNSPVPayqTUwq10bNcM4rsN6lTYzyErXHmGbWSOPjBJJUGz5a1d1YIMvnvhsfAdO0pK98uuT8JMmywZszPCAflGry1jPjTf96w4mO%2Bx5NgNOjDXoc6%2FBjqkAS1YyHrQMzk79ORxGmSlH%2FdlTWPxc%2BbXRHNEeCnhT3YIW1KBVPo95JhZkCd5%2Bit6lbsDY2YRnft2DGAQkQGsn4A01pbAW%2BjbhnHFH3V0lLvsYrxqGrL8oTUesi9d7PRY2mzclbub5OKqlwkvW79Pxfhuei%2FXwAC%2B6UTCcEBPo6zQ6LIM29BIYVwqw9MgBxcBy66hkwp%2BKs8rKB1xnijxDofPvoBY&X-Amz-Signature=89885bf6650666297c4600eccd6edf54c08e9f240e468f9d994596d2f4b4d865&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKQP5IF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvCyj3Sq9nqcST%2Fllqga3mxOdleEXC1db1YRJmarJ%2BugIhAJ7ZrQPhnAnjbrYiSWvxZJw7u9XblK8IQyLHX5EtkXEqKv8DCFoQABoMNjM3NDIzMTgzODA1Igw9ag1CNufFIupaZk8q3AOzq7ciZZ8j6TjB%2FRYWdcU0wUigi0ZKQ6JXOTkm8Btv%2FWUkAa2d70DVz5hFtEZUqNWSm%2BTvkdFDhGxVoan05JnWB9bSL3qwQhsjgZps4XGvlgI6En5gzPxujUDXr1mkjlBo0VJ7YfIylEh4Av6v3%2BVcjcx%2B3pHzPRKbBfjZrX3N6V3ln87GqardS%2FDucKFVTzjam%2FYJ2rWHrxP58SCLoS3KZQm3tKS1HgjgHAOaw5Tp1hSe3%2BZJoFnsn6JDxm2F4afhL%2B%2FOYESl9QOQYoMEdal9sz9jr7N2lAX435yO0vv6EeQZ5v%2Brh4pE6zRG%2Bk%2BrPfgUFryWJ9y%2FNJNLoVh5NQZkb2DHpVdD7bzBXpZszR6Z%2BOINvoj%2BMGaZJe8VJ4mM1z%2FbRZQS9y7l7HSY%2FMZ3jWBagVRRnBuUX10uMn5knhWJSYxLC%2FO2MvOK7%2FbpizuDzzXDybb%2FmtJjUUrLDiatGEdt65wKgNZXzKfw%2BdgmEQdtNnKj3iBeWnI%2FhZZk6Btb0UGe926nR9qa%2FiBHYjNSPVPayqTUwq10bNcM4rsN6lTYzyErXHmGbWSOPjBJJUGz5a1d1YIMvnvhsfAdO0pK98uuT8JMmywZszPCAflGry1jPjTf96w4mO%2Bx5NgNOjDXoc6%2FBjqkAS1YyHrQMzk79ORxGmSlH%2FdlTWPxc%2BbXRHNEeCnhT3YIW1KBVPo95JhZkCd5%2Bit6lbsDY2YRnft2DGAQkQGsn4A01pbAW%2BjbhnHFH3V0lLvsYrxqGrL8oTUesi9d7PRY2mzclbub5OKqlwkvW79Pxfhuei%2FXwAC%2B6UTCcEBPo6zQ6LIM29BIYVwqw9MgBxcBy66hkwp%2BKs8rKB1xnijxDofPvoBY&X-Amz-Signature=f77253d2031e8c660ebd79b4ebc9c9d8705f605df02ce2d8940ee7f8c5a55df7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKQP5IF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvCyj3Sq9nqcST%2Fllqga3mxOdleEXC1db1YRJmarJ%2BugIhAJ7ZrQPhnAnjbrYiSWvxZJw7u9XblK8IQyLHX5EtkXEqKv8DCFoQABoMNjM3NDIzMTgzODA1Igw9ag1CNufFIupaZk8q3AOzq7ciZZ8j6TjB%2FRYWdcU0wUigi0ZKQ6JXOTkm8Btv%2FWUkAa2d70DVz5hFtEZUqNWSm%2BTvkdFDhGxVoan05JnWB9bSL3qwQhsjgZps4XGvlgI6En5gzPxujUDXr1mkjlBo0VJ7YfIylEh4Av6v3%2BVcjcx%2B3pHzPRKbBfjZrX3N6V3ln87GqardS%2FDucKFVTzjam%2FYJ2rWHrxP58SCLoS3KZQm3tKS1HgjgHAOaw5Tp1hSe3%2BZJoFnsn6JDxm2F4afhL%2B%2FOYESl9QOQYoMEdal9sz9jr7N2lAX435yO0vv6EeQZ5v%2Brh4pE6zRG%2Bk%2BrPfgUFryWJ9y%2FNJNLoVh5NQZkb2DHpVdD7bzBXpZszR6Z%2BOINvoj%2BMGaZJe8VJ4mM1z%2FbRZQS9y7l7HSY%2FMZ3jWBagVRRnBuUX10uMn5knhWJSYxLC%2FO2MvOK7%2FbpizuDzzXDybb%2FmtJjUUrLDiatGEdt65wKgNZXzKfw%2BdgmEQdtNnKj3iBeWnI%2FhZZk6Btb0UGe926nR9qa%2FiBHYjNSPVPayqTUwq10bNcM4rsN6lTYzyErXHmGbWSOPjBJJUGz5a1d1YIMvnvhsfAdO0pK98uuT8JMmywZszPCAflGry1jPjTf96w4mO%2Bx5NgNOjDXoc6%2FBjqkAS1YyHrQMzk79ORxGmSlH%2FdlTWPxc%2BbXRHNEeCnhT3YIW1KBVPo95JhZkCd5%2Bit6lbsDY2YRnft2DGAQkQGsn4A01pbAW%2BjbhnHFH3V0lLvsYrxqGrL8oTUesi9d7PRY2mzclbub5OKqlwkvW79Pxfhuei%2FXwAC%2B6UTCcEBPo6zQ6LIM29BIYVwqw9MgBxcBy66hkwp%2BKs8rKB1xnijxDofPvoBY&X-Amz-Signature=339862e44a5a649eefcecf320aadf160f441c3c95a292277f29886a27b9559bb&X-Amz-SignedHeaders=host&x-id=GetObject)
