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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGB5634%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2BKn00T1lZ9ckgYFIJrFB1JKpUCjWsmaaSuJ1QwBb%2FpAiBLXyK9zUHUYYdxJPOWXUcrZvUKD4cRPU29QWNzss5pcyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVMJQqRqa493nZdsKtwDswQ2rqipbqcRnaowiSxJOXThRkSxPXEDN9aw1o2mnQ0wLjA%2FRJfMsD4rXr8Gz2kc%2FseUGAFGBVivw792a7wOEHfmF6WcolyY0j4lQ8FhzZoWWalNPvMs9QGcPiaPg9WQtCD1E1Tcf%2FQZ%2FY53cdyE9b7sov1Ip2rSeinQvnTAIhv%2FEwhPUvDVv6L6LaRFQr9tO42JE86%2FuMCo2gbiZLd58u9x9zqs5J74c9KblH2uz8alif5KvUXhQTAQiAIuNm8j7E4YTqK4Mrn6yNBmXLWgmIWa41934lAEFwG0y1hOUMwuLfm0AmkD1%2Bct0xQOPcXICygoH%2BO97yKx38xQuv2VkFLchSbMyAwYL3wXd994%2Femf7LhomZp3UEN1bgcPks90YTTqhHRvdVFAL7Qdv6E3%2F0CRK5s5zwN70oPYXygm0T8DxDLyaNYJhcw3ejOGtM2ybQYeuYMJQLJWvEMg1kCACHtbgakYRnSOIDjub%2Fn5MKYtOmSK46Bcw3WRNnZSs25wcRX37qNhKR8HplGqxVORzheIN2HvtrF2ST28%2F2ZhC9N5SOlf7Dg%2BVWLCuZU4lw8BZEFZ89V4P%2BeN7JlsdjWz7yQBqjsnaovnbV6gZUiPWnda7x7Y%2F5ftGscyMc4w1sPIwAY6pgEuM1cKDB7yNMt1YjWZmFku9vvGKBj5VwuS%2B9lEWQjeTj1Ok0wX6xXRojMnXfm84I5Vz6GWPhj44ETlPDvo%2FUmZCJ0vJ%2BzE9WvN156cXtd5R4lMcuoIOHYsJ0IR%2B3dvGhaGOJNVfs9yV5XklME%2BRNtkupecIrW5EghoIQhbq0MPVVx3xPy1NzxoxNorUJ%2FhBwZvMc26cMvDApvdSn%2FCaiH4BEf0Lf0E&X-Amz-Signature=415d296e9f7415d55404f5375d525a90ad8307cbf4fa555569bb56c1f4aab46b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGB5634%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2BKn00T1lZ9ckgYFIJrFB1JKpUCjWsmaaSuJ1QwBb%2FpAiBLXyK9zUHUYYdxJPOWXUcrZvUKD4cRPU29QWNzss5pcyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVMJQqRqa493nZdsKtwDswQ2rqipbqcRnaowiSxJOXThRkSxPXEDN9aw1o2mnQ0wLjA%2FRJfMsD4rXr8Gz2kc%2FseUGAFGBVivw792a7wOEHfmF6WcolyY0j4lQ8FhzZoWWalNPvMs9QGcPiaPg9WQtCD1E1Tcf%2FQZ%2FY53cdyE9b7sov1Ip2rSeinQvnTAIhv%2FEwhPUvDVv6L6LaRFQr9tO42JE86%2FuMCo2gbiZLd58u9x9zqs5J74c9KblH2uz8alif5KvUXhQTAQiAIuNm8j7E4YTqK4Mrn6yNBmXLWgmIWa41934lAEFwG0y1hOUMwuLfm0AmkD1%2Bct0xQOPcXICygoH%2BO97yKx38xQuv2VkFLchSbMyAwYL3wXd994%2Femf7LhomZp3UEN1bgcPks90YTTqhHRvdVFAL7Qdv6E3%2F0CRK5s5zwN70oPYXygm0T8DxDLyaNYJhcw3ejOGtM2ybQYeuYMJQLJWvEMg1kCACHtbgakYRnSOIDjub%2Fn5MKYtOmSK46Bcw3WRNnZSs25wcRX37qNhKR8HplGqxVORzheIN2HvtrF2ST28%2F2ZhC9N5SOlf7Dg%2BVWLCuZU4lw8BZEFZ89V4P%2BeN7JlsdjWz7yQBqjsnaovnbV6gZUiPWnda7x7Y%2F5ftGscyMc4w1sPIwAY6pgEuM1cKDB7yNMt1YjWZmFku9vvGKBj5VwuS%2B9lEWQjeTj1Ok0wX6xXRojMnXfm84I5Vz6GWPhj44ETlPDvo%2FUmZCJ0vJ%2BzE9WvN156cXtd5R4lMcuoIOHYsJ0IR%2B3dvGhaGOJNVfs9yV5XklME%2BRNtkupecIrW5EghoIQhbq0MPVVx3xPy1NzxoxNorUJ%2FhBwZvMc26cMvDApvdSn%2FCaiH4BEf0Lf0E&X-Amz-Signature=858c98ebe0d0df7fa248326e0ecf0ccbf5b1c5c858fa679cd460d747031a6d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGB5634%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2BKn00T1lZ9ckgYFIJrFB1JKpUCjWsmaaSuJ1QwBb%2FpAiBLXyK9zUHUYYdxJPOWXUcrZvUKD4cRPU29QWNzss5pcyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVMJQqRqa493nZdsKtwDswQ2rqipbqcRnaowiSxJOXThRkSxPXEDN9aw1o2mnQ0wLjA%2FRJfMsD4rXr8Gz2kc%2FseUGAFGBVivw792a7wOEHfmF6WcolyY0j4lQ8FhzZoWWalNPvMs9QGcPiaPg9WQtCD1E1Tcf%2FQZ%2FY53cdyE9b7sov1Ip2rSeinQvnTAIhv%2FEwhPUvDVv6L6LaRFQr9tO42JE86%2FuMCo2gbiZLd58u9x9zqs5J74c9KblH2uz8alif5KvUXhQTAQiAIuNm8j7E4YTqK4Mrn6yNBmXLWgmIWa41934lAEFwG0y1hOUMwuLfm0AmkD1%2Bct0xQOPcXICygoH%2BO97yKx38xQuv2VkFLchSbMyAwYL3wXd994%2Femf7LhomZp3UEN1bgcPks90YTTqhHRvdVFAL7Qdv6E3%2F0CRK5s5zwN70oPYXygm0T8DxDLyaNYJhcw3ejOGtM2ybQYeuYMJQLJWvEMg1kCACHtbgakYRnSOIDjub%2Fn5MKYtOmSK46Bcw3WRNnZSs25wcRX37qNhKR8HplGqxVORzheIN2HvtrF2ST28%2F2ZhC9N5SOlf7Dg%2BVWLCuZU4lw8BZEFZ89V4P%2BeN7JlsdjWz7yQBqjsnaovnbV6gZUiPWnda7x7Y%2F5ftGscyMc4w1sPIwAY6pgEuM1cKDB7yNMt1YjWZmFku9vvGKBj5VwuS%2B9lEWQjeTj1Ok0wX6xXRojMnXfm84I5Vz6GWPhj44ETlPDvo%2FUmZCJ0vJ%2BzE9WvN156cXtd5R4lMcuoIOHYsJ0IR%2B3dvGhaGOJNVfs9yV5XklME%2BRNtkupecIrW5EghoIQhbq0MPVVx3xPy1NzxoxNorUJ%2FhBwZvMc26cMvDApvdSn%2FCaiH4BEf0Lf0E&X-Amz-Signature=3b3978405c62faef655c2106b90dd5f6d5a749cd8bc8958331e2ac422a103f90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGB5634%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2BKn00T1lZ9ckgYFIJrFB1JKpUCjWsmaaSuJ1QwBb%2FpAiBLXyK9zUHUYYdxJPOWXUcrZvUKD4cRPU29QWNzss5pcyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVMJQqRqa493nZdsKtwDswQ2rqipbqcRnaowiSxJOXThRkSxPXEDN9aw1o2mnQ0wLjA%2FRJfMsD4rXr8Gz2kc%2FseUGAFGBVivw792a7wOEHfmF6WcolyY0j4lQ8FhzZoWWalNPvMs9QGcPiaPg9WQtCD1E1Tcf%2FQZ%2FY53cdyE9b7sov1Ip2rSeinQvnTAIhv%2FEwhPUvDVv6L6LaRFQr9tO42JE86%2FuMCo2gbiZLd58u9x9zqs5J74c9KblH2uz8alif5KvUXhQTAQiAIuNm8j7E4YTqK4Mrn6yNBmXLWgmIWa41934lAEFwG0y1hOUMwuLfm0AmkD1%2Bct0xQOPcXICygoH%2BO97yKx38xQuv2VkFLchSbMyAwYL3wXd994%2Femf7LhomZp3UEN1bgcPks90YTTqhHRvdVFAL7Qdv6E3%2F0CRK5s5zwN70oPYXygm0T8DxDLyaNYJhcw3ejOGtM2ybQYeuYMJQLJWvEMg1kCACHtbgakYRnSOIDjub%2Fn5MKYtOmSK46Bcw3WRNnZSs25wcRX37qNhKR8HplGqxVORzheIN2HvtrF2ST28%2F2ZhC9N5SOlf7Dg%2BVWLCuZU4lw8BZEFZ89V4P%2BeN7JlsdjWz7yQBqjsnaovnbV6gZUiPWnda7x7Y%2F5ftGscyMc4w1sPIwAY6pgEuM1cKDB7yNMt1YjWZmFku9vvGKBj5VwuS%2B9lEWQjeTj1Ok0wX6xXRojMnXfm84I5Vz6GWPhj44ETlPDvo%2FUmZCJ0vJ%2BzE9WvN156cXtd5R4lMcuoIOHYsJ0IR%2B3dvGhaGOJNVfs9yV5XklME%2BRNtkupecIrW5EghoIQhbq0MPVVx3xPy1NzxoxNorUJ%2FhBwZvMc26cMvDApvdSn%2FCaiH4BEf0Lf0E&X-Amz-Signature=5a0cb97887e54c4bbbd5b4e10f9b0bb87fb829cab44e178deeb54e2f34ad7058&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGB5634%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2BKn00T1lZ9ckgYFIJrFB1JKpUCjWsmaaSuJ1QwBb%2FpAiBLXyK9zUHUYYdxJPOWXUcrZvUKD4cRPU29QWNzss5pcyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVMJQqRqa493nZdsKtwDswQ2rqipbqcRnaowiSxJOXThRkSxPXEDN9aw1o2mnQ0wLjA%2FRJfMsD4rXr8Gz2kc%2FseUGAFGBVivw792a7wOEHfmF6WcolyY0j4lQ8FhzZoWWalNPvMs9QGcPiaPg9WQtCD1E1Tcf%2FQZ%2FY53cdyE9b7sov1Ip2rSeinQvnTAIhv%2FEwhPUvDVv6L6LaRFQr9tO42JE86%2FuMCo2gbiZLd58u9x9zqs5J74c9KblH2uz8alif5KvUXhQTAQiAIuNm8j7E4YTqK4Mrn6yNBmXLWgmIWa41934lAEFwG0y1hOUMwuLfm0AmkD1%2Bct0xQOPcXICygoH%2BO97yKx38xQuv2VkFLchSbMyAwYL3wXd994%2Femf7LhomZp3UEN1bgcPks90YTTqhHRvdVFAL7Qdv6E3%2F0CRK5s5zwN70oPYXygm0T8DxDLyaNYJhcw3ejOGtM2ybQYeuYMJQLJWvEMg1kCACHtbgakYRnSOIDjub%2Fn5MKYtOmSK46Bcw3WRNnZSs25wcRX37qNhKR8HplGqxVORzheIN2HvtrF2ST28%2F2ZhC9N5SOlf7Dg%2BVWLCuZU4lw8BZEFZ89V4P%2BeN7JlsdjWz7yQBqjsnaovnbV6gZUiPWnda7x7Y%2F5ftGscyMc4w1sPIwAY6pgEuM1cKDB7yNMt1YjWZmFku9vvGKBj5VwuS%2B9lEWQjeTj1Ok0wX6xXRojMnXfm84I5Vz6GWPhj44ETlPDvo%2FUmZCJ0vJ%2BzE9WvN156cXtd5R4lMcuoIOHYsJ0IR%2B3dvGhaGOJNVfs9yV5XklME%2BRNtkupecIrW5EghoIQhbq0MPVVx3xPy1NzxoxNorUJ%2FhBwZvMc26cMvDApvdSn%2FCaiH4BEf0Lf0E&X-Amz-Signature=48a0ab2885e890e29e6c69b0f7f6c7501a3069ed8a17a54ea19ef489448f772a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGB5634%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG%2BKn00T1lZ9ckgYFIJrFB1JKpUCjWsmaaSuJ1QwBb%2FpAiBLXyK9zUHUYYdxJPOWXUcrZvUKD4cRPU29QWNzss5pcyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVMJQqRqa493nZdsKtwDswQ2rqipbqcRnaowiSxJOXThRkSxPXEDN9aw1o2mnQ0wLjA%2FRJfMsD4rXr8Gz2kc%2FseUGAFGBVivw792a7wOEHfmF6WcolyY0j4lQ8FhzZoWWalNPvMs9QGcPiaPg9WQtCD1E1Tcf%2FQZ%2FY53cdyE9b7sov1Ip2rSeinQvnTAIhv%2FEwhPUvDVv6L6LaRFQr9tO42JE86%2FuMCo2gbiZLd58u9x9zqs5J74c9KblH2uz8alif5KvUXhQTAQiAIuNm8j7E4YTqK4Mrn6yNBmXLWgmIWa41934lAEFwG0y1hOUMwuLfm0AmkD1%2Bct0xQOPcXICygoH%2BO97yKx38xQuv2VkFLchSbMyAwYL3wXd994%2Femf7LhomZp3UEN1bgcPks90YTTqhHRvdVFAL7Qdv6E3%2F0CRK5s5zwN70oPYXygm0T8DxDLyaNYJhcw3ejOGtM2ybQYeuYMJQLJWvEMg1kCACHtbgakYRnSOIDjub%2Fn5MKYtOmSK46Bcw3WRNnZSs25wcRX37qNhKR8HplGqxVORzheIN2HvtrF2ST28%2F2ZhC9N5SOlf7Dg%2BVWLCuZU4lw8BZEFZ89V4P%2BeN7JlsdjWz7yQBqjsnaovnbV6gZUiPWnda7x7Y%2F5ftGscyMc4w1sPIwAY6pgEuM1cKDB7yNMt1YjWZmFku9vvGKBj5VwuS%2B9lEWQjeTj1Ok0wX6xXRojMnXfm84I5Vz6GWPhj44ETlPDvo%2FUmZCJ0vJ%2BzE9WvN156cXtd5R4lMcuoIOHYsJ0IR%2B3dvGhaGOJNVfs9yV5XklME%2BRNtkupecIrW5EghoIQhbq0MPVVx3xPy1NzxoxNorUJ%2FhBwZvMc26cMvDApvdSn%2FCaiH4BEf0Lf0E&X-Amz-Signature=0fdc0d12ada950c638db567c87fe89f470e0e72936a50d432c6048abc8cf9ad5&X-Amz-SignedHeaders=host&x-id=GetObject)
