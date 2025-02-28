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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG6PS67%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCOqSsmnIqUEnU%2B4i8BtMb7J01KhKyazhB9eImZmAtxsAIhAODoS8QtcRTf4hw76KDzGgTc6Amxdonrrf2pYINMOALDKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6lc1km8qmHFCS8k4q3AM%2Bl1jO79Ae661nrq6g%2BNENhLip6mx%2B%2B6zr33PRVm1DLc8C2Pz5B5J4k1j0TkGkw2TBca%2FMF84k7KS0y1Fr9unb%2F1ANXxkao8qAjLzw4pOu388z1ojkZ1r%2FXwx%2BmYEjl5yjGgnVNnmZ3q90rmo6KkNHYskgJvX%2F2%2ByjKCK0lv0IvIgW3kVRquNRD12Fi3rmeGrd9q6o0Q7ERBP3q4U60Bb3LbaeScyp5G2VlD6PxMMkJ2cknZ96svKwPbB5NDaPkF56jDjizZt9L%2BVueNBLzt0y1H2NLyARLk4RKVTJW7lQtVWOvVG0y4kqMo8I%2F%2Bcww%2BHlPLJs%2BlCRvmYeltD2TMLwVL492YKo8zKgLj28Aj4b6vlkf1Y8WGvVcw5OidBrgLE0b%2Fp3%2BowuYe9SRGFWyztKrH1zkcRKxEJutDav%2FGaNImBsDmFSW0d%2BTnL7BUSUOH%2FMZ%2Fk4wfx3ZnIDUw5oDFKje7g%2BohvVXcf8Vzga6bQPubO59YIlhhHDHlv9N5mO03odwu3ktgzvXODpu9ZqJuwhiqIhtxf2Y8KLm6JJPkKWQ01lSgB%2B6gKod%2F1sLKU1f%2BhQ9%2BLR5gwaEe80axjwhir7sHVNENUe7hHV0huuhRF7nOKCMIAICEXo%2BwhCpjD69YW%2BBjqkAaChJDokMBaDMCrmLY1FFyCH03KaDeanuklXa0NxQ8IlomPa1npQlJswsfVhUDV9%2FSch89LNEz5fIXIUPbl7Dga9KjSgbnfK3kDoOoPvxE4gz1ssKztUxTZUUm9yISWtjtltFP74gUCvFOvIL%2BBzUXwtIU8605AC7waiaDS9fW1e3jixJsNuN3M6keSa4lOQCMNPJYJTtG6ZkcmmWRI4UfgsWCH1&X-Amz-Signature=0a7728e1cbda9584d2d2f9a934d4f00ef47660098dcc7a0252adb4ec9029e248&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG6PS67%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCOqSsmnIqUEnU%2B4i8BtMb7J01KhKyazhB9eImZmAtxsAIhAODoS8QtcRTf4hw76KDzGgTc6Amxdonrrf2pYINMOALDKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6lc1km8qmHFCS8k4q3AM%2Bl1jO79Ae661nrq6g%2BNENhLip6mx%2B%2B6zr33PRVm1DLc8C2Pz5B5J4k1j0TkGkw2TBca%2FMF84k7KS0y1Fr9unb%2F1ANXxkao8qAjLzw4pOu388z1ojkZ1r%2FXwx%2BmYEjl5yjGgnVNnmZ3q90rmo6KkNHYskgJvX%2F2%2ByjKCK0lv0IvIgW3kVRquNRD12Fi3rmeGrd9q6o0Q7ERBP3q4U60Bb3LbaeScyp5G2VlD6PxMMkJ2cknZ96svKwPbB5NDaPkF56jDjizZt9L%2BVueNBLzt0y1H2NLyARLk4RKVTJW7lQtVWOvVG0y4kqMo8I%2F%2Bcww%2BHlPLJs%2BlCRvmYeltD2TMLwVL492YKo8zKgLj28Aj4b6vlkf1Y8WGvVcw5OidBrgLE0b%2Fp3%2BowuYe9SRGFWyztKrH1zkcRKxEJutDav%2FGaNImBsDmFSW0d%2BTnL7BUSUOH%2FMZ%2Fk4wfx3ZnIDUw5oDFKje7g%2BohvVXcf8Vzga6bQPubO59YIlhhHDHlv9N5mO03odwu3ktgzvXODpu9ZqJuwhiqIhtxf2Y8KLm6JJPkKWQ01lSgB%2B6gKod%2F1sLKU1f%2BhQ9%2BLR5gwaEe80axjwhir7sHVNENUe7hHV0huuhRF7nOKCMIAICEXo%2BwhCpjD69YW%2BBjqkAaChJDokMBaDMCrmLY1FFyCH03KaDeanuklXa0NxQ8IlomPa1npQlJswsfVhUDV9%2FSch89LNEz5fIXIUPbl7Dga9KjSgbnfK3kDoOoPvxE4gz1ssKztUxTZUUm9yISWtjtltFP74gUCvFOvIL%2BBzUXwtIU8605AC7waiaDS9fW1e3jixJsNuN3M6keSa4lOQCMNPJYJTtG6ZkcmmWRI4UfgsWCH1&X-Amz-Signature=5ac70a075453aa6444b6a9a443f751543ca8632097531411f3b4379bd3e43036&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG6PS67%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCOqSsmnIqUEnU%2B4i8BtMb7J01KhKyazhB9eImZmAtxsAIhAODoS8QtcRTf4hw76KDzGgTc6Amxdonrrf2pYINMOALDKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6lc1km8qmHFCS8k4q3AM%2Bl1jO79Ae661nrq6g%2BNENhLip6mx%2B%2B6zr33PRVm1DLc8C2Pz5B5J4k1j0TkGkw2TBca%2FMF84k7KS0y1Fr9unb%2F1ANXxkao8qAjLzw4pOu388z1ojkZ1r%2FXwx%2BmYEjl5yjGgnVNnmZ3q90rmo6KkNHYskgJvX%2F2%2ByjKCK0lv0IvIgW3kVRquNRD12Fi3rmeGrd9q6o0Q7ERBP3q4U60Bb3LbaeScyp5G2VlD6PxMMkJ2cknZ96svKwPbB5NDaPkF56jDjizZt9L%2BVueNBLzt0y1H2NLyARLk4RKVTJW7lQtVWOvVG0y4kqMo8I%2F%2Bcww%2BHlPLJs%2BlCRvmYeltD2TMLwVL492YKo8zKgLj28Aj4b6vlkf1Y8WGvVcw5OidBrgLE0b%2Fp3%2BowuYe9SRGFWyztKrH1zkcRKxEJutDav%2FGaNImBsDmFSW0d%2BTnL7BUSUOH%2FMZ%2Fk4wfx3ZnIDUw5oDFKje7g%2BohvVXcf8Vzga6bQPubO59YIlhhHDHlv9N5mO03odwu3ktgzvXODpu9ZqJuwhiqIhtxf2Y8KLm6JJPkKWQ01lSgB%2B6gKod%2F1sLKU1f%2BhQ9%2BLR5gwaEe80axjwhir7sHVNENUe7hHV0huuhRF7nOKCMIAICEXo%2BwhCpjD69YW%2BBjqkAaChJDokMBaDMCrmLY1FFyCH03KaDeanuklXa0NxQ8IlomPa1npQlJswsfVhUDV9%2FSch89LNEz5fIXIUPbl7Dga9KjSgbnfK3kDoOoPvxE4gz1ssKztUxTZUUm9yISWtjtltFP74gUCvFOvIL%2BBzUXwtIU8605AC7waiaDS9fW1e3jixJsNuN3M6keSa4lOQCMNPJYJTtG6ZkcmmWRI4UfgsWCH1&X-Amz-Signature=44b542572e9ce2030f11cf9c5b1818e2b31cf8c5bc1f45fd1afdef036de02c18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG6PS67%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCOqSsmnIqUEnU%2B4i8BtMb7J01KhKyazhB9eImZmAtxsAIhAODoS8QtcRTf4hw76KDzGgTc6Amxdonrrf2pYINMOALDKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6lc1km8qmHFCS8k4q3AM%2Bl1jO79Ae661nrq6g%2BNENhLip6mx%2B%2B6zr33PRVm1DLc8C2Pz5B5J4k1j0TkGkw2TBca%2FMF84k7KS0y1Fr9unb%2F1ANXxkao8qAjLzw4pOu388z1ojkZ1r%2FXwx%2BmYEjl5yjGgnVNnmZ3q90rmo6KkNHYskgJvX%2F2%2ByjKCK0lv0IvIgW3kVRquNRD12Fi3rmeGrd9q6o0Q7ERBP3q4U60Bb3LbaeScyp5G2VlD6PxMMkJ2cknZ96svKwPbB5NDaPkF56jDjizZt9L%2BVueNBLzt0y1H2NLyARLk4RKVTJW7lQtVWOvVG0y4kqMo8I%2F%2Bcww%2BHlPLJs%2BlCRvmYeltD2TMLwVL492YKo8zKgLj28Aj4b6vlkf1Y8WGvVcw5OidBrgLE0b%2Fp3%2BowuYe9SRGFWyztKrH1zkcRKxEJutDav%2FGaNImBsDmFSW0d%2BTnL7BUSUOH%2FMZ%2Fk4wfx3ZnIDUw5oDFKje7g%2BohvVXcf8Vzga6bQPubO59YIlhhHDHlv9N5mO03odwu3ktgzvXODpu9ZqJuwhiqIhtxf2Y8KLm6JJPkKWQ01lSgB%2B6gKod%2F1sLKU1f%2BhQ9%2BLR5gwaEe80axjwhir7sHVNENUe7hHV0huuhRF7nOKCMIAICEXo%2BwhCpjD69YW%2BBjqkAaChJDokMBaDMCrmLY1FFyCH03KaDeanuklXa0NxQ8IlomPa1npQlJswsfVhUDV9%2FSch89LNEz5fIXIUPbl7Dga9KjSgbnfK3kDoOoPvxE4gz1ssKztUxTZUUm9yISWtjtltFP74gUCvFOvIL%2BBzUXwtIU8605AC7waiaDS9fW1e3jixJsNuN3M6keSa4lOQCMNPJYJTtG6ZkcmmWRI4UfgsWCH1&X-Amz-Signature=f4b8dac15f8a18c3a882991581bd9f90c19fa5750e93b589218fe729c313ddb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG6PS67%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCOqSsmnIqUEnU%2B4i8BtMb7J01KhKyazhB9eImZmAtxsAIhAODoS8QtcRTf4hw76KDzGgTc6Amxdonrrf2pYINMOALDKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6lc1km8qmHFCS8k4q3AM%2Bl1jO79Ae661nrq6g%2BNENhLip6mx%2B%2B6zr33PRVm1DLc8C2Pz5B5J4k1j0TkGkw2TBca%2FMF84k7KS0y1Fr9unb%2F1ANXxkao8qAjLzw4pOu388z1ojkZ1r%2FXwx%2BmYEjl5yjGgnVNnmZ3q90rmo6KkNHYskgJvX%2F2%2ByjKCK0lv0IvIgW3kVRquNRD12Fi3rmeGrd9q6o0Q7ERBP3q4U60Bb3LbaeScyp5G2VlD6PxMMkJ2cknZ96svKwPbB5NDaPkF56jDjizZt9L%2BVueNBLzt0y1H2NLyARLk4RKVTJW7lQtVWOvVG0y4kqMo8I%2F%2Bcww%2BHlPLJs%2BlCRvmYeltD2TMLwVL492YKo8zKgLj28Aj4b6vlkf1Y8WGvVcw5OidBrgLE0b%2Fp3%2BowuYe9SRGFWyztKrH1zkcRKxEJutDav%2FGaNImBsDmFSW0d%2BTnL7BUSUOH%2FMZ%2Fk4wfx3ZnIDUw5oDFKje7g%2BohvVXcf8Vzga6bQPubO59YIlhhHDHlv9N5mO03odwu3ktgzvXODpu9ZqJuwhiqIhtxf2Y8KLm6JJPkKWQ01lSgB%2B6gKod%2F1sLKU1f%2BhQ9%2BLR5gwaEe80axjwhir7sHVNENUe7hHV0huuhRF7nOKCMIAICEXo%2BwhCpjD69YW%2BBjqkAaChJDokMBaDMCrmLY1FFyCH03KaDeanuklXa0NxQ8IlomPa1npQlJswsfVhUDV9%2FSch89LNEz5fIXIUPbl7Dga9KjSgbnfK3kDoOoPvxE4gz1ssKztUxTZUUm9yISWtjtltFP74gUCvFOvIL%2BBzUXwtIU8605AC7waiaDS9fW1e3jixJsNuN3M6keSa4lOQCMNPJYJTtG6ZkcmmWRI4UfgsWCH1&X-Amz-Signature=06506e99f6b8f8f970754fd49f1ce715c06398cf9c3ca9a4b6aa542248a957a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TG6PS67%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCOqSsmnIqUEnU%2B4i8BtMb7J01KhKyazhB9eImZmAtxsAIhAODoS8QtcRTf4hw76KDzGgTc6Amxdonrrf2pYINMOALDKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6lc1km8qmHFCS8k4q3AM%2Bl1jO79Ae661nrq6g%2BNENhLip6mx%2B%2B6zr33PRVm1DLc8C2Pz5B5J4k1j0TkGkw2TBca%2FMF84k7KS0y1Fr9unb%2F1ANXxkao8qAjLzw4pOu388z1ojkZ1r%2FXwx%2BmYEjl5yjGgnVNnmZ3q90rmo6KkNHYskgJvX%2F2%2ByjKCK0lv0IvIgW3kVRquNRD12Fi3rmeGrd9q6o0Q7ERBP3q4U60Bb3LbaeScyp5G2VlD6PxMMkJ2cknZ96svKwPbB5NDaPkF56jDjizZt9L%2BVueNBLzt0y1H2NLyARLk4RKVTJW7lQtVWOvVG0y4kqMo8I%2F%2Bcww%2BHlPLJs%2BlCRvmYeltD2TMLwVL492YKo8zKgLj28Aj4b6vlkf1Y8WGvVcw5OidBrgLE0b%2Fp3%2BowuYe9SRGFWyztKrH1zkcRKxEJutDav%2FGaNImBsDmFSW0d%2BTnL7BUSUOH%2FMZ%2Fk4wfx3ZnIDUw5oDFKje7g%2BohvVXcf8Vzga6bQPubO59YIlhhHDHlv9N5mO03odwu3ktgzvXODpu9ZqJuwhiqIhtxf2Y8KLm6JJPkKWQ01lSgB%2B6gKod%2F1sLKU1f%2BhQ9%2BLR5gwaEe80axjwhir7sHVNENUe7hHV0huuhRF7nOKCMIAICEXo%2BwhCpjD69YW%2BBjqkAaChJDokMBaDMCrmLY1FFyCH03KaDeanuklXa0NxQ8IlomPa1npQlJswsfVhUDV9%2FSch89LNEz5fIXIUPbl7Dga9KjSgbnfK3kDoOoPvxE4gz1ssKztUxTZUUm9yISWtjtltFP74gUCvFOvIL%2BBzUXwtIU8605AC7waiaDS9fW1e3jixJsNuN3M6keSa4lOQCMNPJYJTtG6ZkcmmWRI4UfgsWCH1&X-Amz-Signature=1d24fa9e4f438d50b816a14834fc539649b94f1619ed5be6a423c4694d8e7fed&X-Amz-SignedHeaders=host&x-id=GetObject)
