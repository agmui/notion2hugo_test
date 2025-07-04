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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL2ZN4I%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD9c%2FJCqdqdudPjMS40NF31WgwaBLTr%2FwgS6OvpQ%2BInuwIhAPoqwSufoXqg4IjVtnAkfemxLUiOJ5qWBT597zSOVsyqKv8DCC4QABoMNjM3NDIzMTgzODA1Igz6niisnPZIi3BY2Csq3APBiKomd4lfi2iqHgrJTXuVLVeKRcEIhUe%2Ffny8njRDePuT%2Bb6Ncn8zDUrYY0yfPAsgAWQB%2FF5H0dI41HE1iaVT7mPsDwcjHD5DeiE34L0ugcfDVJUdbDXVF0gJlkraNd8HlDdJzcESBS6CKTqFM%2BwqXkhffxIDYLXP692TpvwU%2BPPM0WHNyoORjqKkEobVFwKiavJue305x1a8HJ42vRRNdNK57e9VHeUU62qtUpGP7AiRp7gbsHcFiBV4pJINRoYaFXuNhn58B5gIjJox5Q19UvowVhsjuwmV1MGA0EgB%2BXr4%2BikTSyWz9NhGl21oRGyLS7E6qIh5Bj0Pdts6g07r%2BzbUJSQkvD%2BLIQvTGuognkxC%2FSULNHJIFvIFNB6t0SEEZpueXqogko6fIGciNdSOMIfoGOmWVVN0LkzxUR5cPfL8mdDkUvHOYhhWP2b78x2zBe91sKaVBl3p%2F1WJs8%2BBviMrPb%2FbRpxLBRP1EPN8yhN55cPOYkuNYSolEDaqLQNd3NEnSeQRwEyZhdMCGfe%2Ffu9UUv9Lb9RGPoMaz8JIin04Wni090mGtN582q2Yy48sOYa9qS5bzB%2FFqmUDHecyEV2sARPaDrtIeDrp%2F9RNMeNyY1m9N7f5OevCzTDTm5%2FDBjqkAY85Tnw2Id%2BkghFE0mKGrHTwXog5s1Un1jpniW%2F4ParS6QIJDWxs%2F0MwhHlFGekS%2BsroaKWhR00vNN%2FydB%2BixOEv9Er5n56FuBEwcxPtBQEp0zaVlbf28KcgdCx7JXCIIsh%2FyfJAXN2axe4iuvbmmtZxtn1Sua%2FwYZGx4L29%2B0qrNEFiS5rzQDssO3GfshmdR9tckGz5Dz%2BdrnGA%2BCsJWLgE1Llk&X-Amz-Signature=8d6e8121d2a3074b581086627d992a2b9a8c94341c02013c68af35deaae940e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL2ZN4I%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD9c%2FJCqdqdudPjMS40NF31WgwaBLTr%2FwgS6OvpQ%2BInuwIhAPoqwSufoXqg4IjVtnAkfemxLUiOJ5qWBT597zSOVsyqKv8DCC4QABoMNjM3NDIzMTgzODA1Igz6niisnPZIi3BY2Csq3APBiKomd4lfi2iqHgrJTXuVLVeKRcEIhUe%2Ffny8njRDePuT%2Bb6Ncn8zDUrYY0yfPAsgAWQB%2FF5H0dI41HE1iaVT7mPsDwcjHD5DeiE34L0ugcfDVJUdbDXVF0gJlkraNd8HlDdJzcESBS6CKTqFM%2BwqXkhffxIDYLXP692TpvwU%2BPPM0WHNyoORjqKkEobVFwKiavJue305x1a8HJ42vRRNdNK57e9VHeUU62qtUpGP7AiRp7gbsHcFiBV4pJINRoYaFXuNhn58B5gIjJox5Q19UvowVhsjuwmV1MGA0EgB%2BXr4%2BikTSyWz9NhGl21oRGyLS7E6qIh5Bj0Pdts6g07r%2BzbUJSQkvD%2BLIQvTGuognkxC%2FSULNHJIFvIFNB6t0SEEZpueXqogko6fIGciNdSOMIfoGOmWVVN0LkzxUR5cPfL8mdDkUvHOYhhWP2b78x2zBe91sKaVBl3p%2F1WJs8%2BBviMrPb%2FbRpxLBRP1EPN8yhN55cPOYkuNYSolEDaqLQNd3NEnSeQRwEyZhdMCGfe%2Ffu9UUv9Lb9RGPoMaz8JIin04Wni090mGtN582q2Yy48sOYa9qS5bzB%2FFqmUDHecyEV2sARPaDrtIeDrp%2F9RNMeNyY1m9N7f5OevCzTDTm5%2FDBjqkAY85Tnw2Id%2BkghFE0mKGrHTwXog5s1Un1jpniW%2F4ParS6QIJDWxs%2F0MwhHlFGekS%2BsroaKWhR00vNN%2FydB%2BixOEv9Er5n56FuBEwcxPtBQEp0zaVlbf28KcgdCx7JXCIIsh%2FyfJAXN2axe4iuvbmmtZxtn1Sua%2FwYZGx4L29%2B0qrNEFiS5rzQDssO3GfshmdR9tckGz5Dz%2BdrnGA%2BCsJWLgE1Llk&X-Amz-Signature=cdf0c67683bbf2e8f8597f3d7f84b0155f370c2b1660f44312df950422e15f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL2ZN4I%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD9c%2FJCqdqdudPjMS40NF31WgwaBLTr%2FwgS6OvpQ%2BInuwIhAPoqwSufoXqg4IjVtnAkfemxLUiOJ5qWBT597zSOVsyqKv8DCC4QABoMNjM3NDIzMTgzODA1Igz6niisnPZIi3BY2Csq3APBiKomd4lfi2iqHgrJTXuVLVeKRcEIhUe%2Ffny8njRDePuT%2Bb6Ncn8zDUrYY0yfPAsgAWQB%2FF5H0dI41HE1iaVT7mPsDwcjHD5DeiE34L0ugcfDVJUdbDXVF0gJlkraNd8HlDdJzcESBS6CKTqFM%2BwqXkhffxIDYLXP692TpvwU%2BPPM0WHNyoORjqKkEobVFwKiavJue305x1a8HJ42vRRNdNK57e9VHeUU62qtUpGP7AiRp7gbsHcFiBV4pJINRoYaFXuNhn58B5gIjJox5Q19UvowVhsjuwmV1MGA0EgB%2BXr4%2BikTSyWz9NhGl21oRGyLS7E6qIh5Bj0Pdts6g07r%2BzbUJSQkvD%2BLIQvTGuognkxC%2FSULNHJIFvIFNB6t0SEEZpueXqogko6fIGciNdSOMIfoGOmWVVN0LkzxUR5cPfL8mdDkUvHOYhhWP2b78x2zBe91sKaVBl3p%2F1WJs8%2BBviMrPb%2FbRpxLBRP1EPN8yhN55cPOYkuNYSolEDaqLQNd3NEnSeQRwEyZhdMCGfe%2Ffu9UUv9Lb9RGPoMaz8JIin04Wni090mGtN582q2Yy48sOYa9qS5bzB%2FFqmUDHecyEV2sARPaDrtIeDrp%2F9RNMeNyY1m9N7f5OevCzTDTm5%2FDBjqkAY85Tnw2Id%2BkghFE0mKGrHTwXog5s1Un1jpniW%2F4ParS6QIJDWxs%2F0MwhHlFGekS%2BsroaKWhR00vNN%2FydB%2BixOEv9Er5n56FuBEwcxPtBQEp0zaVlbf28KcgdCx7JXCIIsh%2FyfJAXN2axe4iuvbmmtZxtn1Sua%2FwYZGx4L29%2B0qrNEFiS5rzQDssO3GfshmdR9tckGz5Dz%2BdrnGA%2BCsJWLgE1Llk&X-Amz-Signature=2edc1b6f357c63ede1db85a88547ef9ab5ffae1ab3b98cafa5e4384ec15e2215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL2ZN4I%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD9c%2FJCqdqdudPjMS40NF31WgwaBLTr%2FwgS6OvpQ%2BInuwIhAPoqwSufoXqg4IjVtnAkfemxLUiOJ5qWBT597zSOVsyqKv8DCC4QABoMNjM3NDIzMTgzODA1Igz6niisnPZIi3BY2Csq3APBiKomd4lfi2iqHgrJTXuVLVeKRcEIhUe%2Ffny8njRDePuT%2Bb6Ncn8zDUrYY0yfPAsgAWQB%2FF5H0dI41HE1iaVT7mPsDwcjHD5DeiE34L0ugcfDVJUdbDXVF0gJlkraNd8HlDdJzcESBS6CKTqFM%2BwqXkhffxIDYLXP692TpvwU%2BPPM0WHNyoORjqKkEobVFwKiavJue305x1a8HJ42vRRNdNK57e9VHeUU62qtUpGP7AiRp7gbsHcFiBV4pJINRoYaFXuNhn58B5gIjJox5Q19UvowVhsjuwmV1MGA0EgB%2BXr4%2BikTSyWz9NhGl21oRGyLS7E6qIh5Bj0Pdts6g07r%2BzbUJSQkvD%2BLIQvTGuognkxC%2FSULNHJIFvIFNB6t0SEEZpueXqogko6fIGciNdSOMIfoGOmWVVN0LkzxUR5cPfL8mdDkUvHOYhhWP2b78x2zBe91sKaVBl3p%2F1WJs8%2BBviMrPb%2FbRpxLBRP1EPN8yhN55cPOYkuNYSolEDaqLQNd3NEnSeQRwEyZhdMCGfe%2Ffu9UUv9Lb9RGPoMaz8JIin04Wni090mGtN582q2Yy48sOYa9qS5bzB%2FFqmUDHecyEV2sARPaDrtIeDrp%2F9RNMeNyY1m9N7f5OevCzTDTm5%2FDBjqkAY85Tnw2Id%2BkghFE0mKGrHTwXog5s1Un1jpniW%2F4ParS6QIJDWxs%2F0MwhHlFGekS%2BsroaKWhR00vNN%2FydB%2BixOEv9Er5n56FuBEwcxPtBQEp0zaVlbf28KcgdCx7JXCIIsh%2FyfJAXN2axe4iuvbmmtZxtn1Sua%2FwYZGx4L29%2B0qrNEFiS5rzQDssO3GfshmdR9tckGz5Dz%2BdrnGA%2BCsJWLgE1Llk&X-Amz-Signature=43f4818813a340bfd1e41c67b5845fcbc9d6feac4e8bbd8d90b6a2246bb6d918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL2ZN4I%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD9c%2FJCqdqdudPjMS40NF31WgwaBLTr%2FwgS6OvpQ%2BInuwIhAPoqwSufoXqg4IjVtnAkfemxLUiOJ5qWBT597zSOVsyqKv8DCC4QABoMNjM3NDIzMTgzODA1Igz6niisnPZIi3BY2Csq3APBiKomd4lfi2iqHgrJTXuVLVeKRcEIhUe%2Ffny8njRDePuT%2Bb6Ncn8zDUrYY0yfPAsgAWQB%2FF5H0dI41HE1iaVT7mPsDwcjHD5DeiE34L0ugcfDVJUdbDXVF0gJlkraNd8HlDdJzcESBS6CKTqFM%2BwqXkhffxIDYLXP692TpvwU%2BPPM0WHNyoORjqKkEobVFwKiavJue305x1a8HJ42vRRNdNK57e9VHeUU62qtUpGP7AiRp7gbsHcFiBV4pJINRoYaFXuNhn58B5gIjJox5Q19UvowVhsjuwmV1MGA0EgB%2BXr4%2BikTSyWz9NhGl21oRGyLS7E6qIh5Bj0Pdts6g07r%2BzbUJSQkvD%2BLIQvTGuognkxC%2FSULNHJIFvIFNB6t0SEEZpueXqogko6fIGciNdSOMIfoGOmWVVN0LkzxUR5cPfL8mdDkUvHOYhhWP2b78x2zBe91sKaVBl3p%2F1WJs8%2BBviMrPb%2FbRpxLBRP1EPN8yhN55cPOYkuNYSolEDaqLQNd3NEnSeQRwEyZhdMCGfe%2Ffu9UUv9Lb9RGPoMaz8JIin04Wni090mGtN582q2Yy48sOYa9qS5bzB%2FFqmUDHecyEV2sARPaDrtIeDrp%2F9RNMeNyY1m9N7f5OevCzTDTm5%2FDBjqkAY85Tnw2Id%2BkghFE0mKGrHTwXog5s1Un1jpniW%2F4ParS6QIJDWxs%2F0MwhHlFGekS%2BsroaKWhR00vNN%2FydB%2BixOEv9Er5n56FuBEwcxPtBQEp0zaVlbf28KcgdCx7JXCIIsh%2FyfJAXN2axe4iuvbmmtZxtn1Sua%2FwYZGx4L29%2B0qrNEFiS5rzQDssO3GfshmdR9tckGz5Dz%2BdrnGA%2BCsJWLgE1Llk&X-Amz-Signature=8ae254aa742a882142f4e9ffb69de309ab5ddad90346581df37211af5a692cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHL2ZN4I%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD9c%2FJCqdqdudPjMS40NF31WgwaBLTr%2FwgS6OvpQ%2BInuwIhAPoqwSufoXqg4IjVtnAkfemxLUiOJ5qWBT597zSOVsyqKv8DCC4QABoMNjM3NDIzMTgzODA1Igz6niisnPZIi3BY2Csq3APBiKomd4lfi2iqHgrJTXuVLVeKRcEIhUe%2Ffny8njRDePuT%2Bb6Ncn8zDUrYY0yfPAsgAWQB%2FF5H0dI41HE1iaVT7mPsDwcjHD5DeiE34L0ugcfDVJUdbDXVF0gJlkraNd8HlDdJzcESBS6CKTqFM%2BwqXkhffxIDYLXP692TpvwU%2BPPM0WHNyoORjqKkEobVFwKiavJue305x1a8HJ42vRRNdNK57e9VHeUU62qtUpGP7AiRp7gbsHcFiBV4pJINRoYaFXuNhn58B5gIjJox5Q19UvowVhsjuwmV1MGA0EgB%2BXr4%2BikTSyWz9NhGl21oRGyLS7E6qIh5Bj0Pdts6g07r%2BzbUJSQkvD%2BLIQvTGuognkxC%2FSULNHJIFvIFNB6t0SEEZpueXqogko6fIGciNdSOMIfoGOmWVVN0LkzxUR5cPfL8mdDkUvHOYhhWP2b78x2zBe91sKaVBl3p%2F1WJs8%2BBviMrPb%2FbRpxLBRP1EPN8yhN55cPOYkuNYSolEDaqLQNd3NEnSeQRwEyZhdMCGfe%2Ffu9UUv9Lb9RGPoMaz8JIin04Wni090mGtN582q2Yy48sOYa9qS5bzB%2FFqmUDHecyEV2sARPaDrtIeDrp%2F9RNMeNyY1m9N7f5OevCzTDTm5%2FDBjqkAY85Tnw2Id%2BkghFE0mKGrHTwXog5s1Un1jpniW%2F4ParS6QIJDWxs%2F0MwhHlFGekS%2BsroaKWhR00vNN%2FydB%2BixOEv9Er5n56FuBEwcxPtBQEp0zaVlbf28KcgdCx7JXCIIsh%2FyfJAXN2axe4iuvbmmtZxtn1Sua%2FwYZGx4L29%2B0qrNEFiS5rzQDssO3GfshmdR9tckGz5Dz%2BdrnGA%2BCsJWLgE1Llk&X-Amz-Signature=2c7ae63d25974c5ba5bef72a9edad77d2fe57b7c3320fa84e125bac0ddd615e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
