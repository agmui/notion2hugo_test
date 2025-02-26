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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X6V5YY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAnReQL1O1yrAk38mSzkVdsoftujJ%2FRIu30i1BCcnCUyAiEArMfQev2zzYEZAr7kAd2xy3zaPGxyynWAJUAexiNAV5Yq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNDEG3I%2BgZaejrAMQyrcA%2B7fx3PAUR8TwGtorKjTRHKx3iePEw7J5QJ%2BlRtbww8t7yi5KzcGjbRaQKsIpkZvMdQQmQqO5hdgYbDw0ZVBG9lLxptYKILQvKobUn5F4mL10duCNU3sDevi6diYsOuaWrg6kQWlYQUu6HzH%2FmqOrvSc9oK%2B2DMH1YYc6OygHzBLVgvSpMJV%2B4qd1vwZttOJY3rOXiyjolu%2F%2FnvST6el9dNiVdakqFtoz3f%2FAd9qZqzq2NHizqtWr63UkpubkkiJ7Jjq1DtOXKeinom%2Bho98SY9ki2M%2Fe1uBIiMmW%2BtB7uvnTJ73puC5dugfkoUy5%2FgW0pUIy45nncGBKyjQZF8HxSupJs63w4MOHNx5ZjF985fotXry89hDCRrsbhIL3RSpENOs2%2FYgbCz7eVFQX9lse6Oa%2FuZmEEEnjyBzlA15DZ4TxpykTGEHHwhubwAhlx3psnoMHZyWmTEr%2B9kQEcpscJfSBGU9Xx5zD91K%2Bz1teu1Nc%2FPOlVjF%2BqE%2B4c7W%2Fd48okoUvebIVoLXmMpCrwjWGRGydfkt5O9ejLI5sP1dkMmm8x0MfXJhRUAm1o5BGhLRdkqTsBrlw3bnUUUC3N1GbGiNwMLFo8Ytx6eR%2FRmflCGiYcK69AcZ2WGq4o%2BnMPqH%2FL0GOqUBFQNmSsns3FmjVf4yp8S0aK7chFGzTkxOTxNtNAVnM%2BIKV9DK3JDB8pAtuphNvmhwohQOvURlRBAebIoL%2FnO3HeMyFlflfcCyp2ZYIpqI43KvH0tceuwUua7oGpOTrf%2FO8oYfrs%2FkimSfSdKa9%2BPLblISd4OnX31jLiUfmUxVgWAQGPKknC9koouziVEjkAvGt%2FHJFWMOwmnms2oMuLwU5kF5p6aH&X-Amz-Signature=a1d46ee23df2b7cfd916bc798e959d35a0f32fe489da010824b461dd15504e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X6V5YY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAnReQL1O1yrAk38mSzkVdsoftujJ%2FRIu30i1BCcnCUyAiEArMfQev2zzYEZAr7kAd2xy3zaPGxyynWAJUAexiNAV5Yq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNDEG3I%2BgZaejrAMQyrcA%2B7fx3PAUR8TwGtorKjTRHKx3iePEw7J5QJ%2BlRtbww8t7yi5KzcGjbRaQKsIpkZvMdQQmQqO5hdgYbDw0ZVBG9lLxptYKILQvKobUn5F4mL10duCNU3sDevi6diYsOuaWrg6kQWlYQUu6HzH%2FmqOrvSc9oK%2B2DMH1YYc6OygHzBLVgvSpMJV%2B4qd1vwZttOJY3rOXiyjolu%2F%2FnvST6el9dNiVdakqFtoz3f%2FAd9qZqzq2NHizqtWr63UkpubkkiJ7Jjq1DtOXKeinom%2Bho98SY9ki2M%2Fe1uBIiMmW%2BtB7uvnTJ73puC5dugfkoUy5%2FgW0pUIy45nncGBKyjQZF8HxSupJs63w4MOHNx5ZjF985fotXry89hDCRrsbhIL3RSpENOs2%2FYgbCz7eVFQX9lse6Oa%2FuZmEEEnjyBzlA15DZ4TxpykTGEHHwhubwAhlx3psnoMHZyWmTEr%2B9kQEcpscJfSBGU9Xx5zD91K%2Bz1teu1Nc%2FPOlVjF%2BqE%2B4c7W%2Fd48okoUvebIVoLXmMpCrwjWGRGydfkt5O9ejLI5sP1dkMmm8x0MfXJhRUAm1o5BGhLRdkqTsBrlw3bnUUUC3N1GbGiNwMLFo8Ytx6eR%2FRmflCGiYcK69AcZ2WGq4o%2BnMPqH%2FL0GOqUBFQNmSsns3FmjVf4yp8S0aK7chFGzTkxOTxNtNAVnM%2BIKV9DK3JDB8pAtuphNvmhwohQOvURlRBAebIoL%2FnO3HeMyFlflfcCyp2ZYIpqI43KvH0tceuwUua7oGpOTrf%2FO8oYfrs%2FkimSfSdKa9%2BPLblISd4OnX31jLiUfmUxVgWAQGPKknC9koouziVEjkAvGt%2FHJFWMOwmnms2oMuLwU5kF5p6aH&X-Amz-Signature=4b04b9b973a130d3403321ce787715e05c27f292887f9a571c4feec4d2335e21&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X6V5YY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAnReQL1O1yrAk38mSzkVdsoftujJ%2FRIu30i1BCcnCUyAiEArMfQev2zzYEZAr7kAd2xy3zaPGxyynWAJUAexiNAV5Yq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNDEG3I%2BgZaejrAMQyrcA%2B7fx3PAUR8TwGtorKjTRHKx3iePEw7J5QJ%2BlRtbww8t7yi5KzcGjbRaQKsIpkZvMdQQmQqO5hdgYbDw0ZVBG9lLxptYKILQvKobUn5F4mL10duCNU3sDevi6diYsOuaWrg6kQWlYQUu6HzH%2FmqOrvSc9oK%2B2DMH1YYc6OygHzBLVgvSpMJV%2B4qd1vwZttOJY3rOXiyjolu%2F%2FnvST6el9dNiVdakqFtoz3f%2FAd9qZqzq2NHizqtWr63UkpubkkiJ7Jjq1DtOXKeinom%2Bho98SY9ki2M%2Fe1uBIiMmW%2BtB7uvnTJ73puC5dugfkoUy5%2FgW0pUIy45nncGBKyjQZF8HxSupJs63w4MOHNx5ZjF985fotXry89hDCRrsbhIL3RSpENOs2%2FYgbCz7eVFQX9lse6Oa%2FuZmEEEnjyBzlA15DZ4TxpykTGEHHwhubwAhlx3psnoMHZyWmTEr%2B9kQEcpscJfSBGU9Xx5zD91K%2Bz1teu1Nc%2FPOlVjF%2BqE%2B4c7W%2Fd48okoUvebIVoLXmMpCrwjWGRGydfkt5O9ejLI5sP1dkMmm8x0MfXJhRUAm1o5BGhLRdkqTsBrlw3bnUUUC3N1GbGiNwMLFo8Ytx6eR%2FRmflCGiYcK69AcZ2WGq4o%2BnMPqH%2FL0GOqUBFQNmSsns3FmjVf4yp8S0aK7chFGzTkxOTxNtNAVnM%2BIKV9DK3JDB8pAtuphNvmhwohQOvURlRBAebIoL%2FnO3HeMyFlflfcCyp2ZYIpqI43KvH0tceuwUua7oGpOTrf%2FO8oYfrs%2FkimSfSdKa9%2BPLblISd4OnX31jLiUfmUxVgWAQGPKknC9koouziVEjkAvGt%2FHJFWMOwmnms2oMuLwU5kF5p6aH&X-Amz-Signature=8b5006f47578063c3f7e15c213a0a3495d2efe466aa26207cd8103fe8f974194&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X6V5YY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAnReQL1O1yrAk38mSzkVdsoftujJ%2FRIu30i1BCcnCUyAiEArMfQev2zzYEZAr7kAd2xy3zaPGxyynWAJUAexiNAV5Yq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNDEG3I%2BgZaejrAMQyrcA%2B7fx3PAUR8TwGtorKjTRHKx3iePEw7J5QJ%2BlRtbww8t7yi5KzcGjbRaQKsIpkZvMdQQmQqO5hdgYbDw0ZVBG9lLxptYKILQvKobUn5F4mL10duCNU3sDevi6diYsOuaWrg6kQWlYQUu6HzH%2FmqOrvSc9oK%2B2DMH1YYc6OygHzBLVgvSpMJV%2B4qd1vwZttOJY3rOXiyjolu%2F%2FnvST6el9dNiVdakqFtoz3f%2FAd9qZqzq2NHizqtWr63UkpubkkiJ7Jjq1DtOXKeinom%2Bho98SY9ki2M%2Fe1uBIiMmW%2BtB7uvnTJ73puC5dugfkoUy5%2FgW0pUIy45nncGBKyjQZF8HxSupJs63w4MOHNx5ZjF985fotXry89hDCRrsbhIL3RSpENOs2%2FYgbCz7eVFQX9lse6Oa%2FuZmEEEnjyBzlA15DZ4TxpykTGEHHwhubwAhlx3psnoMHZyWmTEr%2B9kQEcpscJfSBGU9Xx5zD91K%2Bz1teu1Nc%2FPOlVjF%2BqE%2B4c7W%2Fd48okoUvebIVoLXmMpCrwjWGRGydfkt5O9ejLI5sP1dkMmm8x0MfXJhRUAm1o5BGhLRdkqTsBrlw3bnUUUC3N1GbGiNwMLFo8Ytx6eR%2FRmflCGiYcK69AcZ2WGq4o%2BnMPqH%2FL0GOqUBFQNmSsns3FmjVf4yp8S0aK7chFGzTkxOTxNtNAVnM%2BIKV9DK3JDB8pAtuphNvmhwohQOvURlRBAebIoL%2FnO3HeMyFlflfcCyp2ZYIpqI43KvH0tceuwUua7oGpOTrf%2FO8oYfrs%2FkimSfSdKa9%2BPLblISd4OnX31jLiUfmUxVgWAQGPKknC9koouziVEjkAvGt%2FHJFWMOwmnms2oMuLwU5kF5p6aH&X-Amz-Signature=cd4f696be75fc5747c84d56ab4aa7018f073d92d113d224182d64f678909016b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X6V5YY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAnReQL1O1yrAk38mSzkVdsoftujJ%2FRIu30i1BCcnCUyAiEArMfQev2zzYEZAr7kAd2xy3zaPGxyynWAJUAexiNAV5Yq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNDEG3I%2BgZaejrAMQyrcA%2B7fx3PAUR8TwGtorKjTRHKx3iePEw7J5QJ%2BlRtbww8t7yi5KzcGjbRaQKsIpkZvMdQQmQqO5hdgYbDw0ZVBG9lLxptYKILQvKobUn5F4mL10duCNU3sDevi6diYsOuaWrg6kQWlYQUu6HzH%2FmqOrvSc9oK%2B2DMH1YYc6OygHzBLVgvSpMJV%2B4qd1vwZttOJY3rOXiyjolu%2F%2FnvST6el9dNiVdakqFtoz3f%2FAd9qZqzq2NHizqtWr63UkpubkkiJ7Jjq1DtOXKeinom%2Bho98SY9ki2M%2Fe1uBIiMmW%2BtB7uvnTJ73puC5dugfkoUy5%2FgW0pUIy45nncGBKyjQZF8HxSupJs63w4MOHNx5ZjF985fotXry89hDCRrsbhIL3RSpENOs2%2FYgbCz7eVFQX9lse6Oa%2FuZmEEEnjyBzlA15DZ4TxpykTGEHHwhubwAhlx3psnoMHZyWmTEr%2B9kQEcpscJfSBGU9Xx5zD91K%2Bz1teu1Nc%2FPOlVjF%2BqE%2B4c7W%2Fd48okoUvebIVoLXmMpCrwjWGRGydfkt5O9ejLI5sP1dkMmm8x0MfXJhRUAm1o5BGhLRdkqTsBrlw3bnUUUC3N1GbGiNwMLFo8Ytx6eR%2FRmflCGiYcK69AcZ2WGq4o%2BnMPqH%2FL0GOqUBFQNmSsns3FmjVf4yp8S0aK7chFGzTkxOTxNtNAVnM%2BIKV9DK3JDB8pAtuphNvmhwohQOvURlRBAebIoL%2FnO3HeMyFlflfcCyp2ZYIpqI43KvH0tceuwUua7oGpOTrf%2FO8oYfrs%2FkimSfSdKa9%2BPLblISd4OnX31jLiUfmUxVgWAQGPKknC9koouziVEjkAvGt%2FHJFWMOwmnms2oMuLwU5kF5p6aH&X-Amz-Signature=472fe3831aa2bc95855a6d3e8273a789dcd301572f5771f0696879e0726d51b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X6V5YY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAnReQL1O1yrAk38mSzkVdsoftujJ%2FRIu30i1BCcnCUyAiEArMfQev2zzYEZAr7kAd2xy3zaPGxyynWAJUAexiNAV5Yq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNDEG3I%2BgZaejrAMQyrcA%2B7fx3PAUR8TwGtorKjTRHKx3iePEw7J5QJ%2BlRtbww8t7yi5KzcGjbRaQKsIpkZvMdQQmQqO5hdgYbDw0ZVBG9lLxptYKILQvKobUn5F4mL10duCNU3sDevi6diYsOuaWrg6kQWlYQUu6HzH%2FmqOrvSc9oK%2B2DMH1YYc6OygHzBLVgvSpMJV%2B4qd1vwZttOJY3rOXiyjolu%2F%2FnvST6el9dNiVdakqFtoz3f%2FAd9qZqzq2NHizqtWr63UkpubkkiJ7Jjq1DtOXKeinom%2Bho98SY9ki2M%2Fe1uBIiMmW%2BtB7uvnTJ73puC5dugfkoUy5%2FgW0pUIy45nncGBKyjQZF8HxSupJs63w4MOHNx5ZjF985fotXry89hDCRrsbhIL3RSpENOs2%2FYgbCz7eVFQX9lse6Oa%2FuZmEEEnjyBzlA15DZ4TxpykTGEHHwhubwAhlx3psnoMHZyWmTEr%2B9kQEcpscJfSBGU9Xx5zD91K%2Bz1teu1Nc%2FPOlVjF%2BqE%2B4c7W%2Fd48okoUvebIVoLXmMpCrwjWGRGydfkt5O9ejLI5sP1dkMmm8x0MfXJhRUAm1o5BGhLRdkqTsBrlw3bnUUUC3N1GbGiNwMLFo8Ytx6eR%2FRmflCGiYcK69AcZ2WGq4o%2BnMPqH%2FL0GOqUBFQNmSsns3FmjVf4yp8S0aK7chFGzTkxOTxNtNAVnM%2BIKV9DK3JDB8pAtuphNvmhwohQOvURlRBAebIoL%2FnO3HeMyFlflfcCyp2ZYIpqI43KvH0tceuwUua7oGpOTrf%2FO8oYfrs%2FkimSfSdKa9%2BPLblISd4OnX31jLiUfmUxVgWAQGPKknC9koouziVEjkAvGt%2FHJFWMOwmnms2oMuLwU5kF5p6aH&X-Amz-Signature=b15a3d6b56aef711e0b86e86a338a61f2f4149b36529e95dcb0334de2c9561c5&X-Amz-SignedHeaders=host&x-id=GetObject)
