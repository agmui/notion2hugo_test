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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTW5XWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAozVVIvxfkBidWu1BTV9tQpFT5KGJpyBY8GckdlNx7gIhAJcZSWk6atF%2B0742N%2BNTGOOJ8MdvdMZ%2FhBEM2SzA5TxcKv8DCEwQABoMNjM3NDIzMTgzODA1Igw26%2Br%2BdK3burVzx9kq3AMows7LkCL7tCrA0QOLa%2BNgda%2F8pPfzgj6spFTjWsTlSA1UWXQJ8UbydzpiHdGE%2BHgmhHztxHEtUa8QLrsW4l0BB5Y3epz1zsIGSD67OGMYHQLI2y9NQvmOErf7TiVacINA2tGCoSwEXY2B%2B8dfNwnH%2FzNetNHEdwuz2Yh1V3dAcJnuirgcS3DQGqgwCRrrNbfl0%2BMz6m%2BDb1fyn4uFDpJHrdbtE%2BXDDZSBMcKLAAYrHFD%2BjbM7ryM3iZYAzypIshW54RUON8Pjn5eDerwkffx1UvtRCBqdThX7dVhEwCrd364LoAoEe6rGHZgwrWEnfjYpLZlVXdBXtJV2bI7uAUG%2Fz4TShEqZKyxC61%2FAVbSLI5%2FCG4kdm9%2FXUTg1eUfPlqF7vqK5VA1iixELFRCn7RV2vey01UFcOfpu1VkHK2q2uKrwVmf%2Bi5xGHKW2v7A18WBBpS8dbiUesxxW90pxnBRO1bkqKSuKH9pJXnE2urw7Hr2nN8FSEaHQYIPY%2F66WT18XBLixFKD8YNwtEeoKiGxEhx3XoRMlzyn%2BeGC6GfOVIjJpQ2XBccUgouLV7o4thzQ5S3AbemvxQkPHXgY2qPKLONDOXaZ1yiHr13vY1qrN1sFIxcl3VOU63n5SrDD014fCBjqkAQQ%2FO0cy0c%2FMVcDLdzTgoOcWvEvxX4WxVWhqBUVJMUcnCVvU1783sqi3viBsM8IZ%2FH7uByvQeLI34Aww2CWYNctOOkxP9v%2B6OczY3YoC%2FDJfhWhiCjyosDSAfYEC24RU5E5pcurM0qqelbwIeQ3VieiPOF8fi0YurvgfEa8NXAv3hNMlcaCrmu99Qh92Qqocrof3ynfdmMQvENTySybsnbEtjLng&X-Amz-Signature=ddb6b744a1368fa2f4080455311f313e0f64ee016a176b7effe485480df97a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTW5XWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAozVVIvxfkBidWu1BTV9tQpFT5KGJpyBY8GckdlNx7gIhAJcZSWk6atF%2B0742N%2BNTGOOJ8MdvdMZ%2FhBEM2SzA5TxcKv8DCEwQABoMNjM3NDIzMTgzODA1Igw26%2Br%2BdK3burVzx9kq3AMows7LkCL7tCrA0QOLa%2BNgda%2F8pPfzgj6spFTjWsTlSA1UWXQJ8UbydzpiHdGE%2BHgmhHztxHEtUa8QLrsW4l0BB5Y3epz1zsIGSD67OGMYHQLI2y9NQvmOErf7TiVacINA2tGCoSwEXY2B%2B8dfNwnH%2FzNetNHEdwuz2Yh1V3dAcJnuirgcS3DQGqgwCRrrNbfl0%2BMz6m%2BDb1fyn4uFDpJHrdbtE%2BXDDZSBMcKLAAYrHFD%2BjbM7ryM3iZYAzypIshW54RUON8Pjn5eDerwkffx1UvtRCBqdThX7dVhEwCrd364LoAoEe6rGHZgwrWEnfjYpLZlVXdBXtJV2bI7uAUG%2Fz4TShEqZKyxC61%2FAVbSLI5%2FCG4kdm9%2FXUTg1eUfPlqF7vqK5VA1iixELFRCn7RV2vey01UFcOfpu1VkHK2q2uKrwVmf%2Bi5xGHKW2v7A18WBBpS8dbiUesxxW90pxnBRO1bkqKSuKH9pJXnE2urw7Hr2nN8FSEaHQYIPY%2F66WT18XBLixFKD8YNwtEeoKiGxEhx3XoRMlzyn%2BeGC6GfOVIjJpQ2XBccUgouLV7o4thzQ5S3AbemvxQkPHXgY2qPKLONDOXaZ1yiHr13vY1qrN1sFIxcl3VOU63n5SrDD014fCBjqkAQQ%2FO0cy0c%2FMVcDLdzTgoOcWvEvxX4WxVWhqBUVJMUcnCVvU1783sqi3viBsM8IZ%2FH7uByvQeLI34Aww2CWYNctOOkxP9v%2B6OczY3YoC%2FDJfhWhiCjyosDSAfYEC24RU5E5pcurM0qqelbwIeQ3VieiPOF8fi0YurvgfEa8NXAv3hNMlcaCrmu99Qh92Qqocrof3ynfdmMQvENTySybsnbEtjLng&X-Amz-Signature=69aea5d2275ebb5d807f310ce10d78a68f866c7e0393ed44f28f9ebd6c82e1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTW5XWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAozVVIvxfkBidWu1BTV9tQpFT5KGJpyBY8GckdlNx7gIhAJcZSWk6atF%2B0742N%2BNTGOOJ8MdvdMZ%2FhBEM2SzA5TxcKv8DCEwQABoMNjM3NDIzMTgzODA1Igw26%2Br%2BdK3burVzx9kq3AMows7LkCL7tCrA0QOLa%2BNgda%2F8pPfzgj6spFTjWsTlSA1UWXQJ8UbydzpiHdGE%2BHgmhHztxHEtUa8QLrsW4l0BB5Y3epz1zsIGSD67OGMYHQLI2y9NQvmOErf7TiVacINA2tGCoSwEXY2B%2B8dfNwnH%2FzNetNHEdwuz2Yh1V3dAcJnuirgcS3DQGqgwCRrrNbfl0%2BMz6m%2BDb1fyn4uFDpJHrdbtE%2BXDDZSBMcKLAAYrHFD%2BjbM7ryM3iZYAzypIshW54RUON8Pjn5eDerwkffx1UvtRCBqdThX7dVhEwCrd364LoAoEe6rGHZgwrWEnfjYpLZlVXdBXtJV2bI7uAUG%2Fz4TShEqZKyxC61%2FAVbSLI5%2FCG4kdm9%2FXUTg1eUfPlqF7vqK5VA1iixELFRCn7RV2vey01UFcOfpu1VkHK2q2uKrwVmf%2Bi5xGHKW2v7A18WBBpS8dbiUesxxW90pxnBRO1bkqKSuKH9pJXnE2urw7Hr2nN8FSEaHQYIPY%2F66WT18XBLixFKD8YNwtEeoKiGxEhx3XoRMlzyn%2BeGC6GfOVIjJpQ2XBccUgouLV7o4thzQ5S3AbemvxQkPHXgY2qPKLONDOXaZ1yiHr13vY1qrN1sFIxcl3VOU63n5SrDD014fCBjqkAQQ%2FO0cy0c%2FMVcDLdzTgoOcWvEvxX4WxVWhqBUVJMUcnCVvU1783sqi3viBsM8IZ%2FH7uByvQeLI34Aww2CWYNctOOkxP9v%2B6OczY3YoC%2FDJfhWhiCjyosDSAfYEC24RU5E5pcurM0qqelbwIeQ3VieiPOF8fi0YurvgfEa8NXAv3hNMlcaCrmu99Qh92Qqocrof3ynfdmMQvENTySybsnbEtjLng&X-Amz-Signature=426dbd2f66dd3e1738c35daae43317ac357bbe607791f3e19713928006f25832&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTW5XWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAozVVIvxfkBidWu1BTV9tQpFT5KGJpyBY8GckdlNx7gIhAJcZSWk6atF%2B0742N%2BNTGOOJ8MdvdMZ%2FhBEM2SzA5TxcKv8DCEwQABoMNjM3NDIzMTgzODA1Igw26%2Br%2BdK3burVzx9kq3AMows7LkCL7tCrA0QOLa%2BNgda%2F8pPfzgj6spFTjWsTlSA1UWXQJ8UbydzpiHdGE%2BHgmhHztxHEtUa8QLrsW4l0BB5Y3epz1zsIGSD67OGMYHQLI2y9NQvmOErf7TiVacINA2tGCoSwEXY2B%2B8dfNwnH%2FzNetNHEdwuz2Yh1V3dAcJnuirgcS3DQGqgwCRrrNbfl0%2BMz6m%2BDb1fyn4uFDpJHrdbtE%2BXDDZSBMcKLAAYrHFD%2BjbM7ryM3iZYAzypIshW54RUON8Pjn5eDerwkffx1UvtRCBqdThX7dVhEwCrd364LoAoEe6rGHZgwrWEnfjYpLZlVXdBXtJV2bI7uAUG%2Fz4TShEqZKyxC61%2FAVbSLI5%2FCG4kdm9%2FXUTg1eUfPlqF7vqK5VA1iixELFRCn7RV2vey01UFcOfpu1VkHK2q2uKrwVmf%2Bi5xGHKW2v7A18WBBpS8dbiUesxxW90pxnBRO1bkqKSuKH9pJXnE2urw7Hr2nN8FSEaHQYIPY%2F66WT18XBLixFKD8YNwtEeoKiGxEhx3XoRMlzyn%2BeGC6GfOVIjJpQ2XBccUgouLV7o4thzQ5S3AbemvxQkPHXgY2qPKLONDOXaZ1yiHr13vY1qrN1sFIxcl3VOU63n5SrDD014fCBjqkAQQ%2FO0cy0c%2FMVcDLdzTgoOcWvEvxX4WxVWhqBUVJMUcnCVvU1783sqi3viBsM8IZ%2FH7uByvQeLI34Aww2CWYNctOOkxP9v%2B6OczY3YoC%2FDJfhWhiCjyosDSAfYEC24RU5E5pcurM0qqelbwIeQ3VieiPOF8fi0YurvgfEa8NXAv3hNMlcaCrmu99Qh92Qqocrof3ynfdmMQvENTySybsnbEtjLng&X-Amz-Signature=a9a84e88c2b9874ddc8fa6281e1abb8c68be5c40be476a1fc3c572718c68b94a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTW5XWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAozVVIvxfkBidWu1BTV9tQpFT5KGJpyBY8GckdlNx7gIhAJcZSWk6atF%2B0742N%2BNTGOOJ8MdvdMZ%2FhBEM2SzA5TxcKv8DCEwQABoMNjM3NDIzMTgzODA1Igw26%2Br%2BdK3burVzx9kq3AMows7LkCL7tCrA0QOLa%2BNgda%2F8pPfzgj6spFTjWsTlSA1UWXQJ8UbydzpiHdGE%2BHgmhHztxHEtUa8QLrsW4l0BB5Y3epz1zsIGSD67OGMYHQLI2y9NQvmOErf7TiVacINA2tGCoSwEXY2B%2B8dfNwnH%2FzNetNHEdwuz2Yh1V3dAcJnuirgcS3DQGqgwCRrrNbfl0%2BMz6m%2BDb1fyn4uFDpJHrdbtE%2BXDDZSBMcKLAAYrHFD%2BjbM7ryM3iZYAzypIshW54RUON8Pjn5eDerwkffx1UvtRCBqdThX7dVhEwCrd364LoAoEe6rGHZgwrWEnfjYpLZlVXdBXtJV2bI7uAUG%2Fz4TShEqZKyxC61%2FAVbSLI5%2FCG4kdm9%2FXUTg1eUfPlqF7vqK5VA1iixELFRCn7RV2vey01UFcOfpu1VkHK2q2uKrwVmf%2Bi5xGHKW2v7A18WBBpS8dbiUesxxW90pxnBRO1bkqKSuKH9pJXnE2urw7Hr2nN8FSEaHQYIPY%2F66WT18XBLixFKD8YNwtEeoKiGxEhx3XoRMlzyn%2BeGC6GfOVIjJpQ2XBccUgouLV7o4thzQ5S3AbemvxQkPHXgY2qPKLONDOXaZ1yiHr13vY1qrN1sFIxcl3VOU63n5SrDD014fCBjqkAQQ%2FO0cy0c%2FMVcDLdzTgoOcWvEvxX4WxVWhqBUVJMUcnCVvU1783sqi3viBsM8IZ%2FH7uByvQeLI34Aww2CWYNctOOkxP9v%2B6OczY3YoC%2FDJfhWhiCjyosDSAfYEC24RU5E5pcurM0qqelbwIeQ3VieiPOF8fi0YurvgfEa8NXAv3hNMlcaCrmu99Qh92Qqocrof3ynfdmMQvENTySybsnbEtjLng&X-Amz-Signature=cc0a1ca4c32b0d7231ae94f1a8d4f9a5395235b9daa7db9e31a2c176d43cdf59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTW5XWK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCAozVVIvxfkBidWu1BTV9tQpFT5KGJpyBY8GckdlNx7gIhAJcZSWk6atF%2B0742N%2BNTGOOJ8MdvdMZ%2FhBEM2SzA5TxcKv8DCEwQABoMNjM3NDIzMTgzODA1Igw26%2Br%2BdK3burVzx9kq3AMows7LkCL7tCrA0QOLa%2BNgda%2F8pPfzgj6spFTjWsTlSA1UWXQJ8UbydzpiHdGE%2BHgmhHztxHEtUa8QLrsW4l0BB5Y3epz1zsIGSD67OGMYHQLI2y9NQvmOErf7TiVacINA2tGCoSwEXY2B%2B8dfNwnH%2FzNetNHEdwuz2Yh1V3dAcJnuirgcS3DQGqgwCRrrNbfl0%2BMz6m%2BDb1fyn4uFDpJHrdbtE%2BXDDZSBMcKLAAYrHFD%2BjbM7ryM3iZYAzypIshW54RUON8Pjn5eDerwkffx1UvtRCBqdThX7dVhEwCrd364LoAoEe6rGHZgwrWEnfjYpLZlVXdBXtJV2bI7uAUG%2Fz4TShEqZKyxC61%2FAVbSLI5%2FCG4kdm9%2FXUTg1eUfPlqF7vqK5VA1iixELFRCn7RV2vey01UFcOfpu1VkHK2q2uKrwVmf%2Bi5xGHKW2v7A18WBBpS8dbiUesxxW90pxnBRO1bkqKSuKH9pJXnE2urw7Hr2nN8FSEaHQYIPY%2F66WT18XBLixFKD8YNwtEeoKiGxEhx3XoRMlzyn%2BeGC6GfOVIjJpQ2XBccUgouLV7o4thzQ5S3AbemvxQkPHXgY2qPKLONDOXaZ1yiHr13vY1qrN1sFIxcl3VOU63n5SrDD014fCBjqkAQQ%2FO0cy0c%2FMVcDLdzTgoOcWvEvxX4WxVWhqBUVJMUcnCVvU1783sqi3viBsM8IZ%2FH7uByvQeLI34Aww2CWYNctOOkxP9v%2B6OczY3YoC%2FDJfhWhiCjyosDSAfYEC24RU5E5pcurM0qqelbwIeQ3VieiPOF8fi0YurvgfEa8NXAv3hNMlcaCrmu99Qh92Qqocrof3ynfdmMQvENTySybsnbEtjLng&X-Amz-Signature=d74696e285def1ee1e8a11e03a029a9a48a02892baa22a248d1a7bad981b08f6&X-Amz-SignedHeaders=host&x-id=GetObject)
