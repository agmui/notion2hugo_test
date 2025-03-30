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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXAORAV%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDVL4LOP0CuIUG%2BAoNf2SOGWNfBTL7K0RRxdDz0yWKYAQIgUQezd5tyyJh4zozdEbCTDZadwXZbzqT32PFUYRYfDcYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsq5ThotiH1UnP4NSrcA6F4coKWJnGm1yOwSFRqfxkriEt6LGykeCcPSsoKSZ47uRqJGevzP8cD9z5%2FSh4IWR67ms2Frm6fm8ESFr0vMD%2F1rG3P3CNPYEsmyKS3xACIKLk%2FA6AJisF3KhnixDuMw1sUqyRP73G3zh4BWZz9pu6f51ZC%2FPqkeculCm9GY1T0dvpUgsSlX8zRjooekNRPxq4N0x3WGbZXLKxFtC7DignDUJK%2F28sQNx6UJj8Ys9q9KGvZArn5WRpOKxHd4FVb0H6v8GSjuzmkC7z12zKbwVrsWG6Lnj36BaoEnzNLj7GJtnzGI5XvXPb7p%2FM2HUbbb8QXdqxQbzq6X95lFgimiLkcGGseHb4aeqx1qcwFx6flXgwU%2BogV8923zFa%2BUglvG%2FPRSWZu7d9%2F%2FZqZ81jbtxPOabn09unIFa4azufaMiidwvtqkNX7gMS8bsotUMZ%2BVInzeroF5t18IBq6J5k30ujuiyt7IbJwYm%2FNlcZaqj3RKQocefmWKHkgAMfw4gVeFzwlcdDElqXi2ZAGadJCC6U2iudh0DPQon0OOo6rOVMMHto3sq9cqXRsrbL%2BuBohUONr9qL%2F94L0sTriz2XsvC54OS70jyXIQ%2Bn%2F3Z65ptD%2B6cIUBvNOAvPeq6jvMOqapr8GOqUBjfPVtuxQ8nDRYx4TUH59b0H6uz1DPkfZbCDwoTwpkICFCDCMLlZfz%2BeEw5rWOKR3vQo5pIKoV3Uxznl%2FiK1wJ7V6RlycULc44XA4%2FhDHvfUhFAG7R4cGROJpcuTvbQZyT85Gp7TC9Sio6%2FHpdv7oCVjM%2BczAFMk2Ip3wHHb0WINm8kz2NNQ1orNjIShOzGDLG0jWsOKUHKF%2FUVNosOoIIbH8rDT2&X-Amz-Signature=791068b9c754b310c2277a4fbd3c270b456ac60d32fc328b85e79c53954b1351&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXAORAV%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDVL4LOP0CuIUG%2BAoNf2SOGWNfBTL7K0RRxdDz0yWKYAQIgUQezd5tyyJh4zozdEbCTDZadwXZbzqT32PFUYRYfDcYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsq5ThotiH1UnP4NSrcA6F4coKWJnGm1yOwSFRqfxkriEt6LGykeCcPSsoKSZ47uRqJGevzP8cD9z5%2FSh4IWR67ms2Frm6fm8ESFr0vMD%2F1rG3P3CNPYEsmyKS3xACIKLk%2FA6AJisF3KhnixDuMw1sUqyRP73G3zh4BWZz9pu6f51ZC%2FPqkeculCm9GY1T0dvpUgsSlX8zRjooekNRPxq4N0x3WGbZXLKxFtC7DignDUJK%2F28sQNx6UJj8Ys9q9KGvZArn5WRpOKxHd4FVb0H6v8GSjuzmkC7z12zKbwVrsWG6Lnj36BaoEnzNLj7GJtnzGI5XvXPb7p%2FM2HUbbb8QXdqxQbzq6X95lFgimiLkcGGseHb4aeqx1qcwFx6flXgwU%2BogV8923zFa%2BUglvG%2FPRSWZu7d9%2F%2FZqZ81jbtxPOabn09unIFa4azufaMiidwvtqkNX7gMS8bsotUMZ%2BVInzeroF5t18IBq6J5k30ujuiyt7IbJwYm%2FNlcZaqj3RKQocefmWKHkgAMfw4gVeFzwlcdDElqXi2ZAGadJCC6U2iudh0DPQon0OOo6rOVMMHto3sq9cqXRsrbL%2BuBohUONr9qL%2F94L0sTriz2XsvC54OS70jyXIQ%2Bn%2F3Z65ptD%2B6cIUBvNOAvPeq6jvMOqapr8GOqUBjfPVtuxQ8nDRYx4TUH59b0H6uz1DPkfZbCDwoTwpkICFCDCMLlZfz%2BeEw5rWOKR3vQo5pIKoV3Uxznl%2FiK1wJ7V6RlycULc44XA4%2FhDHvfUhFAG7R4cGROJpcuTvbQZyT85Gp7TC9Sio6%2FHpdv7oCVjM%2BczAFMk2Ip3wHHb0WINm8kz2NNQ1orNjIShOzGDLG0jWsOKUHKF%2FUVNosOoIIbH8rDT2&X-Amz-Signature=56d207bb4eaea9d6f92b24a5c9629838a0ae51fe7808c24e26c4ab9193aec15c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXAORAV%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDVL4LOP0CuIUG%2BAoNf2SOGWNfBTL7K0RRxdDz0yWKYAQIgUQezd5tyyJh4zozdEbCTDZadwXZbzqT32PFUYRYfDcYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsq5ThotiH1UnP4NSrcA6F4coKWJnGm1yOwSFRqfxkriEt6LGykeCcPSsoKSZ47uRqJGevzP8cD9z5%2FSh4IWR67ms2Frm6fm8ESFr0vMD%2F1rG3P3CNPYEsmyKS3xACIKLk%2FA6AJisF3KhnixDuMw1sUqyRP73G3zh4BWZz9pu6f51ZC%2FPqkeculCm9GY1T0dvpUgsSlX8zRjooekNRPxq4N0x3WGbZXLKxFtC7DignDUJK%2F28sQNx6UJj8Ys9q9KGvZArn5WRpOKxHd4FVb0H6v8GSjuzmkC7z12zKbwVrsWG6Lnj36BaoEnzNLj7GJtnzGI5XvXPb7p%2FM2HUbbb8QXdqxQbzq6X95lFgimiLkcGGseHb4aeqx1qcwFx6flXgwU%2BogV8923zFa%2BUglvG%2FPRSWZu7d9%2F%2FZqZ81jbtxPOabn09unIFa4azufaMiidwvtqkNX7gMS8bsotUMZ%2BVInzeroF5t18IBq6J5k30ujuiyt7IbJwYm%2FNlcZaqj3RKQocefmWKHkgAMfw4gVeFzwlcdDElqXi2ZAGadJCC6U2iudh0DPQon0OOo6rOVMMHto3sq9cqXRsrbL%2BuBohUONr9qL%2F94L0sTriz2XsvC54OS70jyXIQ%2Bn%2F3Z65ptD%2B6cIUBvNOAvPeq6jvMOqapr8GOqUBjfPVtuxQ8nDRYx4TUH59b0H6uz1DPkfZbCDwoTwpkICFCDCMLlZfz%2BeEw5rWOKR3vQo5pIKoV3Uxznl%2FiK1wJ7V6RlycULc44XA4%2FhDHvfUhFAG7R4cGROJpcuTvbQZyT85Gp7TC9Sio6%2FHpdv7oCVjM%2BczAFMk2Ip3wHHb0WINm8kz2NNQ1orNjIShOzGDLG0jWsOKUHKF%2FUVNosOoIIbH8rDT2&X-Amz-Signature=f1d92c06626691f015ab5c6295007b6a1e820a0a089b7f8dd76bb3e37a29f8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXAORAV%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDVL4LOP0CuIUG%2BAoNf2SOGWNfBTL7K0RRxdDz0yWKYAQIgUQezd5tyyJh4zozdEbCTDZadwXZbzqT32PFUYRYfDcYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsq5ThotiH1UnP4NSrcA6F4coKWJnGm1yOwSFRqfxkriEt6LGykeCcPSsoKSZ47uRqJGevzP8cD9z5%2FSh4IWR67ms2Frm6fm8ESFr0vMD%2F1rG3P3CNPYEsmyKS3xACIKLk%2FA6AJisF3KhnixDuMw1sUqyRP73G3zh4BWZz9pu6f51ZC%2FPqkeculCm9GY1T0dvpUgsSlX8zRjooekNRPxq4N0x3WGbZXLKxFtC7DignDUJK%2F28sQNx6UJj8Ys9q9KGvZArn5WRpOKxHd4FVb0H6v8GSjuzmkC7z12zKbwVrsWG6Lnj36BaoEnzNLj7GJtnzGI5XvXPb7p%2FM2HUbbb8QXdqxQbzq6X95lFgimiLkcGGseHb4aeqx1qcwFx6flXgwU%2BogV8923zFa%2BUglvG%2FPRSWZu7d9%2F%2FZqZ81jbtxPOabn09unIFa4azufaMiidwvtqkNX7gMS8bsotUMZ%2BVInzeroF5t18IBq6J5k30ujuiyt7IbJwYm%2FNlcZaqj3RKQocefmWKHkgAMfw4gVeFzwlcdDElqXi2ZAGadJCC6U2iudh0DPQon0OOo6rOVMMHto3sq9cqXRsrbL%2BuBohUONr9qL%2F94L0sTriz2XsvC54OS70jyXIQ%2Bn%2F3Z65ptD%2B6cIUBvNOAvPeq6jvMOqapr8GOqUBjfPVtuxQ8nDRYx4TUH59b0H6uz1DPkfZbCDwoTwpkICFCDCMLlZfz%2BeEw5rWOKR3vQo5pIKoV3Uxznl%2FiK1wJ7V6RlycULc44XA4%2FhDHvfUhFAG7R4cGROJpcuTvbQZyT85Gp7TC9Sio6%2FHpdv7oCVjM%2BczAFMk2Ip3wHHb0WINm8kz2NNQ1orNjIShOzGDLG0jWsOKUHKF%2FUVNosOoIIbH8rDT2&X-Amz-Signature=40daa9c1db7b456734a9a29f4ea4bbf0941b8314bc14d451e580c2063b2c6cda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXAORAV%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDVL4LOP0CuIUG%2BAoNf2SOGWNfBTL7K0RRxdDz0yWKYAQIgUQezd5tyyJh4zozdEbCTDZadwXZbzqT32PFUYRYfDcYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsq5ThotiH1UnP4NSrcA6F4coKWJnGm1yOwSFRqfxkriEt6LGykeCcPSsoKSZ47uRqJGevzP8cD9z5%2FSh4IWR67ms2Frm6fm8ESFr0vMD%2F1rG3P3CNPYEsmyKS3xACIKLk%2FA6AJisF3KhnixDuMw1sUqyRP73G3zh4BWZz9pu6f51ZC%2FPqkeculCm9GY1T0dvpUgsSlX8zRjooekNRPxq4N0x3WGbZXLKxFtC7DignDUJK%2F28sQNx6UJj8Ys9q9KGvZArn5WRpOKxHd4FVb0H6v8GSjuzmkC7z12zKbwVrsWG6Lnj36BaoEnzNLj7GJtnzGI5XvXPb7p%2FM2HUbbb8QXdqxQbzq6X95lFgimiLkcGGseHb4aeqx1qcwFx6flXgwU%2BogV8923zFa%2BUglvG%2FPRSWZu7d9%2F%2FZqZ81jbtxPOabn09unIFa4azufaMiidwvtqkNX7gMS8bsotUMZ%2BVInzeroF5t18IBq6J5k30ujuiyt7IbJwYm%2FNlcZaqj3RKQocefmWKHkgAMfw4gVeFzwlcdDElqXi2ZAGadJCC6U2iudh0DPQon0OOo6rOVMMHto3sq9cqXRsrbL%2BuBohUONr9qL%2F94L0sTriz2XsvC54OS70jyXIQ%2Bn%2F3Z65ptD%2B6cIUBvNOAvPeq6jvMOqapr8GOqUBjfPVtuxQ8nDRYx4TUH59b0H6uz1DPkfZbCDwoTwpkICFCDCMLlZfz%2BeEw5rWOKR3vQo5pIKoV3Uxznl%2FiK1wJ7V6RlycULc44XA4%2FhDHvfUhFAG7R4cGROJpcuTvbQZyT85Gp7TC9Sio6%2FHpdv7oCVjM%2BczAFMk2Ip3wHHb0WINm8kz2NNQ1orNjIShOzGDLG0jWsOKUHKF%2FUVNosOoIIbH8rDT2&X-Amz-Signature=03d996d91482b6ba3eeb02fe53ca730a7ebdca0a4ad96e9b2f4b740edb3451e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXAORAV%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDVL4LOP0CuIUG%2BAoNf2SOGWNfBTL7K0RRxdDz0yWKYAQIgUQezd5tyyJh4zozdEbCTDZadwXZbzqT32PFUYRYfDcYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsq5ThotiH1UnP4NSrcA6F4coKWJnGm1yOwSFRqfxkriEt6LGykeCcPSsoKSZ47uRqJGevzP8cD9z5%2FSh4IWR67ms2Frm6fm8ESFr0vMD%2F1rG3P3CNPYEsmyKS3xACIKLk%2FA6AJisF3KhnixDuMw1sUqyRP73G3zh4BWZz9pu6f51ZC%2FPqkeculCm9GY1T0dvpUgsSlX8zRjooekNRPxq4N0x3WGbZXLKxFtC7DignDUJK%2F28sQNx6UJj8Ys9q9KGvZArn5WRpOKxHd4FVb0H6v8GSjuzmkC7z12zKbwVrsWG6Lnj36BaoEnzNLj7GJtnzGI5XvXPb7p%2FM2HUbbb8QXdqxQbzq6X95lFgimiLkcGGseHb4aeqx1qcwFx6flXgwU%2BogV8923zFa%2BUglvG%2FPRSWZu7d9%2F%2FZqZ81jbtxPOabn09unIFa4azufaMiidwvtqkNX7gMS8bsotUMZ%2BVInzeroF5t18IBq6J5k30ujuiyt7IbJwYm%2FNlcZaqj3RKQocefmWKHkgAMfw4gVeFzwlcdDElqXi2ZAGadJCC6U2iudh0DPQon0OOo6rOVMMHto3sq9cqXRsrbL%2BuBohUONr9qL%2F94L0sTriz2XsvC54OS70jyXIQ%2Bn%2F3Z65ptD%2B6cIUBvNOAvPeq6jvMOqapr8GOqUBjfPVtuxQ8nDRYx4TUH59b0H6uz1DPkfZbCDwoTwpkICFCDCMLlZfz%2BeEw5rWOKR3vQo5pIKoV3Uxznl%2FiK1wJ7V6RlycULc44XA4%2FhDHvfUhFAG7R4cGROJpcuTvbQZyT85Gp7TC9Sio6%2FHpdv7oCVjM%2BczAFMk2Ip3wHHb0WINm8kz2NNQ1orNjIShOzGDLG0jWsOKUHKF%2FUVNosOoIIbH8rDT2&X-Amz-Signature=47ceb2b35adf8b0ec010a946befe068317ad5cd4fc4c3adb910b56c6655874e3&X-Amz-SignedHeaders=host&x-id=GetObject)
