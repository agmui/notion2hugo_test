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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3WQ3IQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwN4PxFjtTMu43Ea1Pfu0aj96viVnP1cbXDVkwhFwQAIhAPrGPYa4IkB10J55uMj2RWo7tSbp7FTYRpHktOsyEVWhKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLL6Qaqf1MJCv36ucq3AOlkxuCq9ZOR7ntLVTrTJ7Nd93tgmpolYmyLtR178g%2FDVprE%2Bofkv2%2FBcppIYMolPTfBNxya%2B81qXX0%2FIqBDlK%2FGVUivpLTctRgVcG9HXzVOVtJwmnrhgeq2PT5qk0LiYifEbhvH%2F1d4kHko1yekH%2FZjbJOTvnvuuIhIbQLGYznIKvI9Q8wBpBszswsdtaHIfNFa%2BaRpGNuPDx27%2Fm3tdVuQiJxD0WMLg49%2FnQWPwCEwqkx%2B3f1lC0lLQ9nBHen%2FfUR095e9Xl4HXCoUO7uacPfpbl9fFGlbHqv4L4y1KgHghwr8oU%2B76EwXFOoGlrp30j5jPdfq8Hnh2lYNFYv%2FLjkTGwWgNKfksVP09D4WZGknSHqsLgZcnkOpBCFQ%2Ff49g19V75HHt9mrI9g%2Fxz3juaXebaRtn9dsQkFgWCgioEsK7wkTYNOH5fqp%2BSNfnmilR3x7xnuW90junX8px%2BkvAFSoCk1sx9GCvoyfCkJ4nZPhP5nzg22F%2Fy5Y07aJtPIQXonLRqEc%2Fu1eEKXi1rMF4cJ1N4lLNT174Cn74Wo6%2BA9qMDw8JpEzpl2ZPKu93%2F56i1G41kMSYuDobftphMykuif4%2FHBaW9K09QuD1zG0KiCW0FyNp%2F3yU%2FgUwL86DDb4KS9BjqkAc0u%2Fvth8Gk954O%2F9qE1gV3xULkT%2FF3NljOWZiS9sHW1mzRhRA9YdnvW%2B89aUt%2FF8GxBcJHEkuyIUUZi2ikQDEsU4SknkhimnisCxzanNqOZCLBJWc%2B9nY2Xiwe6IxmAzVMMlgS15WtL0ho9CszeVDiSOMeECb4URyZZIfn7JWMA2hEcDgiNKHW8xJImriZYVm6gJOz6bUEtS8hfCh053vqJTKzE&X-Amz-Signature=c9493105855d1fc1c1bc225d9462e49423a5e13b329201c01f0b7321ab0a7acb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3WQ3IQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwN4PxFjtTMu43Ea1Pfu0aj96viVnP1cbXDVkwhFwQAIhAPrGPYa4IkB10J55uMj2RWo7tSbp7FTYRpHktOsyEVWhKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLL6Qaqf1MJCv36ucq3AOlkxuCq9ZOR7ntLVTrTJ7Nd93tgmpolYmyLtR178g%2FDVprE%2Bofkv2%2FBcppIYMolPTfBNxya%2B81qXX0%2FIqBDlK%2FGVUivpLTctRgVcG9HXzVOVtJwmnrhgeq2PT5qk0LiYifEbhvH%2F1d4kHko1yekH%2FZjbJOTvnvuuIhIbQLGYznIKvI9Q8wBpBszswsdtaHIfNFa%2BaRpGNuPDx27%2Fm3tdVuQiJxD0WMLg49%2FnQWPwCEwqkx%2B3f1lC0lLQ9nBHen%2FfUR095e9Xl4HXCoUO7uacPfpbl9fFGlbHqv4L4y1KgHghwr8oU%2B76EwXFOoGlrp30j5jPdfq8Hnh2lYNFYv%2FLjkTGwWgNKfksVP09D4WZGknSHqsLgZcnkOpBCFQ%2Ff49g19V75HHt9mrI9g%2Fxz3juaXebaRtn9dsQkFgWCgioEsK7wkTYNOH5fqp%2BSNfnmilR3x7xnuW90junX8px%2BkvAFSoCk1sx9GCvoyfCkJ4nZPhP5nzg22F%2Fy5Y07aJtPIQXonLRqEc%2Fu1eEKXi1rMF4cJ1N4lLNT174Cn74Wo6%2BA9qMDw8JpEzpl2ZPKu93%2F56i1G41kMSYuDobftphMykuif4%2FHBaW9K09QuD1zG0KiCW0FyNp%2F3yU%2FgUwL86DDb4KS9BjqkAc0u%2Fvth8Gk954O%2F9qE1gV3xULkT%2FF3NljOWZiS9sHW1mzRhRA9YdnvW%2B89aUt%2FF8GxBcJHEkuyIUUZi2ikQDEsU4SknkhimnisCxzanNqOZCLBJWc%2B9nY2Xiwe6IxmAzVMMlgS15WtL0ho9CszeVDiSOMeECb4URyZZIfn7JWMA2hEcDgiNKHW8xJImriZYVm6gJOz6bUEtS8hfCh053vqJTKzE&X-Amz-Signature=4104fcc76e418180d4cad25db1ebc5cb42053da2c237079f03ca668a60293057&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3WQ3IQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwN4PxFjtTMu43Ea1Pfu0aj96viVnP1cbXDVkwhFwQAIhAPrGPYa4IkB10J55uMj2RWo7tSbp7FTYRpHktOsyEVWhKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLL6Qaqf1MJCv36ucq3AOlkxuCq9ZOR7ntLVTrTJ7Nd93tgmpolYmyLtR178g%2FDVprE%2Bofkv2%2FBcppIYMolPTfBNxya%2B81qXX0%2FIqBDlK%2FGVUivpLTctRgVcG9HXzVOVtJwmnrhgeq2PT5qk0LiYifEbhvH%2F1d4kHko1yekH%2FZjbJOTvnvuuIhIbQLGYznIKvI9Q8wBpBszswsdtaHIfNFa%2BaRpGNuPDx27%2Fm3tdVuQiJxD0WMLg49%2FnQWPwCEwqkx%2B3f1lC0lLQ9nBHen%2FfUR095e9Xl4HXCoUO7uacPfpbl9fFGlbHqv4L4y1KgHghwr8oU%2B76EwXFOoGlrp30j5jPdfq8Hnh2lYNFYv%2FLjkTGwWgNKfksVP09D4WZGknSHqsLgZcnkOpBCFQ%2Ff49g19V75HHt9mrI9g%2Fxz3juaXebaRtn9dsQkFgWCgioEsK7wkTYNOH5fqp%2BSNfnmilR3x7xnuW90junX8px%2BkvAFSoCk1sx9GCvoyfCkJ4nZPhP5nzg22F%2Fy5Y07aJtPIQXonLRqEc%2Fu1eEKXi1rMF4cJ1N4lLNT174Cn74Wo6%2BA9qMDw8JpEzpl2ZPKu93%2F56i1G41kMSYuDobftphMykuif4%2FHBaW9K09QuD1zG0KiCW0FyNp%2F3yU%2FgUwL86DDb4KS9BjqkAc0u%2Fvth8Gk954O%2F9qE1gV3xULkT%2FF3NljOWZiS9sHW1mzRhRA9YdnvW%2B89aUt%2FF8GxBcJHEkuyIUUZi2ikQDEsU4SknkhimnisCxzanNqOZCLBJWc%2B9nY2Xiwe6IxmAzVMMlgS15WtL0ho9CszeVDiSOMeECb4URyZZIfn7JWMA2hEcDgiNKHW8xJImriZYVm6gJOz6bUEtS8hfCh053vqJTKzE&X-Amz-Signature=90356fc23e1a6adb8450faae6c882232b2175cee4a746e916da3b6b7118b39a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3WQ3IQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwN4PxFjtTMu43Ea1Pfu0aj96viVnP1cbXDVkwhFwQAIhAPrGPYa4IkB10J55uMj2RWo7tSbp7FTYRpHktOsyEVWhKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLL6Qaqf1MJCv36ucq3AOlkxuCq9ZOR7ntLVTrTJ7Nd93tgmpolYmyLtR178g%2FDVprE%2Bofkv2%2FBcppIYMolPTfBNxya%2B81qXX0%2FIqBDlK%2FGVUivpLTctRgVcG9HXzVOVtJwmnrhgeq2PT5qk0LiYifEbhvH%2F1d4kHko1yekH%2FZjbJOTvnvuuIhIbQLGYznIKvI9Q8wBpBszswsdtaHIfNFa%2BaRpGNuPDx27%2Fm3tdVuQiJxD0WMLg49%2FnQWPwCEwqkx%2B3f1lC0lLQ9nBHen%2FfUR095e9Xl4HXCoUO7uacPfpbl9fFGlbHqv4L4y1KgHghwr8oU%2B76EwXFOoGlrp30j5jPdfq8Hnh2lYNFYv%2FLjkTGwWgNKfksVP09D4WZGknSHqsLgZcnkOpBCFQ%2Ff49g19V75HHt9mrI9g%2Fxz3juaXebaRtn9dsQkFgWCgioEsK7wkTYNOH5fqp%2BSNfnmilR3x7xnuW90junX8px%2BkvAFSoCk1sx9GCvoyfCkJ4nZPhP5nzg22F%2Fy5Y07aJtPIQXonLRqEc%2Fu1eEKXi1rMF4cJ1N4lLNT174Cn74Wo6%2BA9qMDw8JpEzpl2ZPKu93%2F56i1G41kMSYuDobftphMykuif4%2FHBaW9K09QuD1zG0KiCW0FyNp%2F3yU%2FgUwL86DDb4KS9BjqkAc0u%2Fvth8Gk954O%2F9qE1gV3xULkT%2FF3NljOWZiS9sHW1mzRhRA9YdnvW%2B89aUt%2FF8GxBcJHEkuyIUUZi2ikQDEsU4SknkhimnisCxzanNqOZCLBJWc%2B9nY2Xiwe6IxmAzVMMlgS15WtL0ho9CszeVDiSOMeECb4URyZZIfn7JWMA2hEcDgiNKHW8xJImriZYVm6gJOz6bUEtS8hfCh053vqJTKzE&X-Amz-Signature=26fefca1e08ca191970de70e58aed588114089229375fb3d7b806cd4bb51d16c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3WQ3IQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwN4PxFjtTMu43Ea1Pfu0aj96viVnP1cbXDVkwhFwQAIhAPrGPYa4IkB10J55uMj2RWo7tSbp7FTYRpHktOsyEVWhKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLL6Qaqf1MJCv36ucq3AOlkxuCq9ZOR7ntLVTrTJ7Nd93tgmpolYmyLtR178g%2FDVprE%2Bofkv2%2FBcppIYMolPTfBNxya%2B81qXX0%2FIqBDlK%2FGVUivpLTctRgVcG9HXzVOVtJwmnrhgeq2PT5qk0LiYifEbhvH%2F1d4kHko1yekH%2FZjbJOTvnvuuIhIbQLGYznIKvI9Q8wBpBszswsdtaHIfNFa%2BaRpGNuPDx27%2Fm3tdVuQiJxD0WMLg49%2FnQWPwCEwqkx%2B3f1lC0lLQ9nBHen%2FfUR095e9Xl4HXCoUO7uacPfpbl9fFGlbHqv4L4y1KgHghwr8oU%2B76EwXFOoGlrp30j5jPdfq8Hnh2lYNFYv%2FLjkTGwWgNKfksVP09D4WZGknSHqsLgZcnkOpBCFQ%2Ff49g19V75HHt9mrI9g%2Fxz3juaXebaRtn9dsQkFgWCgioEsK7wkTYNOH5fqp%2BSNfnmilR3x7xnuW90junX8px%2BkvAFSoCk1sx9GCvoyfCkJ4nZPhP5nzg22F%2Fy5Y07aJtPIQXonLRqEc%2Fu1eEKXi1rMF4cJ1N4lLNT174Cn74Wo6%2BA9qMDw8JpEzpl2ZPKu93%2F56i1G41kMSYuDobftphMykuif4%2FHBaW9K09QuD1zG0KiCW0FyNp%2F3yU%2FgUwL86DDb4KS9BjqkAc0u%2Fvth8Gk954O%2F9qE1gV3xULkT%2FF3NljOWZiS9sHW1mzRhRA9YdnvW%2B89aUt%2FF8GxBcJHEkuyIUUZi2ikQDEsU4SknkhimnisCxzanNqOZCLBJWc%2B9nY2Xiwe6IxmAzVMMlgS15WtL0ho9CszeVDiSOMeECb4URyZZIfn7JWMA2hEcDgiNKHW8xJImriZYVm6gJOz6bUEtS8hfCh053vqJTKzE&X-Amz-Signature=d1af72248ba442264b9c183115fc6e8561640c086c313a658464ba059f211482&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3WQ3IQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwN4PxFjtTMu43Ea1Pfu0aj96viVnP1cbXDVkwhFwQAIhAPrGPYa4IkB10J55uMj2RWo7tSbp7FTYRpHktOsyEVWhKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLL6Qaqf1MJCv36ucq3AOlkxuCq9ZOR7ntLVTrTJ7Nd93tgmpolYmyLtR178g%2FDVprE%2Bofkv2%2FBcppIYMolPTfBNxya%2B81qXX0%2FIqBDlK%2FGVUivpLTctRgVcG9HXzVOVtJwmnrhgeq2PT5qk0LiYifEbhvH%2F1d4kHko1yekH%2FZjbJOTvnvuuIhIbQLGYznIKvI9Q8wBpBszswsdtaHIfNFa%2BaRpGNuPDx27%2Fm3tdVuQiJxD0WMLg49%2FnQWPwCEwqkx%2B3f1lC0lLQ9nBHen%2FfUR095e9Xl4HXCoUO7uacPfpbl9fFGlbHqv4L4y1KgHghwr8oU%2B76EwXFOoGlrp30j5jPdfq8Hnh2lYNFYv%2FLjkTGwWgNKfksVP09D4WZGknSHqsLgZcnkOpBCFQ%2Ff49g19V75HHt9mrI9g%2Fxz3juaXebaRtn9dsQkFgWCgioEsK7wkTYNOH5fqp%2BSNfnmilR3x7xnuW90junX8px%2BkvAFSoCk1sx9GCvoyfCkJ4nZPhP5nzg22F%2Fy5Y07aJtPIQXonLRqEc%2Fu1eEKXi1rMF4cJ1N4lLNT174Cn74Wo6%2BA9qMDw8JpEzpl2ZPKu93%2F56i1G41kMSYuDobftphMykuif4%2FHBaW9K09QuD1zG0KiCW0FyNp%2F3yU%2FgUwL86DDb4KS9BjqkAc0u%2Fvth8Gk954O%2F9qE1gV3xULkT%2FF3NljOWZiS9sHW1mzRhRA9YdnvW%2B89aUt%2FF8GxBcJHEkuyIUUZi2ikQDEsU4SknkhimnisCxzanNqOZCLBJWc%2B9nY2Xiwe6IxmAzVMMlgS15WtL0ho9CszeVDiSOMeECb4URyZZIfn7JWMA2hEcDgiNKHW8xJImriZYVm6gJOz6bUEtS8hfCh053vqJTKzE&X-Amz-Signature=ab0e1ee4b65c405aa57f5d791d64a058cd18b961db2e643e4b6f8ab14254eea6&X-Amz-SignedHeaders=host&x-id=GetObject)
