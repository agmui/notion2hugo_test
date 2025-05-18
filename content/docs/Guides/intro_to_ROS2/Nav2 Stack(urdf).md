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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7KABG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIWOb9DqZgLc4CZGp%2BrQIJaB5%2FpiOHleX7OUEHGducugIhAKJ34XsnmuL8Lg7t6nlxPASqOugZqovBTMmWVUOtK6keKv8DCHUQABoMNjM3NDIzMTgzODA1IgwuxOBOuFAVDfmEhZcq3AONgJjJPCXSjw2%2F96xqJdp9kxgzs%2F3yYyPrmmA6S3vV3GDgD%2BBAGmokeFpRAIGCS9KWOmP4i5sukHQBa2%2BANDDCeZ0MSoS6SIQ30KSeP5Izin82ZIQ1h3eDq0c4kVSf8t6XQz5UDWLcEv%2FDqBb%2Bf0WqIK4hEEZ7vZpxz%2Fu3pFP4aUmiZKRDrrd3YNK8oQiFvKJ%2FQtSFcIEyXY3z%2FuqGRDOxqUHcWbBGsY4RGaSl1Z1aKd28jVlhLp8zKwkB%2FFpxrNL6UzGeEcnTA61yQajn9IcGzHCFaDFyzNdBLxvOZjhnlGCb85gL%2FoaeiBd014ULaSFTqlihwUpoEkLuylQ5nxCM8mxvnxr57EeV5ufyW%2FPu%2BDM65kh%2BxjZceERBjaldg4cx8QL9R8Y6xybhdJVWwHFNFyTXEmmKWWy0QdqOWA3hGENoN64ETisQZ%2BaywG95C4RbcdmAQTsmDrZZwyHTbf5Aer4XIPqFL0FmHnPrsLfmrR0DoBqaJH3Ue29Wh58bNzra8AjYV8dtWrnnXs1kJoOgEoIcBTmpxeIDDjo9WJvnncY6wsh88ysKKpJSQl8BCxLxtPlx37oCKmnCIK6SkHugmZmZwceho7TPJe%2BosNQgwxFaCjlgEkRLsSBgSDD2mKfBBjqkAXuuZHBGuoVfPegQ8xMS3sPq%2BqBnYck7sLTtgX5rxZA4uVQhD4LTiQ9HjDMEvdsL2M0acplbLVEx2ozTk9gzCTxZKyh52%2F%2BJXGQtbiac9ce3uqlRtSdneWNxz13nRJ8yMY9is6SJIh%2BY4vGFYp9dXDRMPqdkhg8hxqIyT5ztc8tsoAlT2IAt%2BY42A85HXgOlvMQDXC%2BeXaRySu9Wi3Zf4Cjv4Ift&X-Amz-Signature=082913037acc17f81a092c97e6041f247e7a7bf9e2d7a96a0207332e9f025506&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7KABG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIWOb9DqZgLc4CZGp%2BrQIJaB5%2FpiOHleX7OUEHGducugIhAKJ34XsnmuL8Lg7t6nlxPASqOugZqovBTMmWVUOtK6keKv8DCHUQABoMNjM3NDIzMTgzODA1IgwuxOBOuFAVDfmEhZcq3AONgJjJPCXSjw2%2F96xqJdp9kxgzs%2F3yYyPrmmA6S3vV3GDgD%2BBAGmokeFpRAIGCS9KWOmP4i5sukHQBa2%2BANDDCeZ0MSoS6SIQ30KSeP5Izin82ZIQ1h3eDq0c4kVSf8t6XQz5UDWLcEv%2FDqBb%2Bf0WqIK4hEEZ7vZpxz%2Fu3pFP4aUmiZKRDrrd3YNK8oQiFvKJ%2FQtSFcIEyXY3z%2FuqGRDOxqUHcWbBGsY4RGaSl1Z1aKd28jVlhLp8zKwkB%2FFpxrNL6UzGeEcnTA61yQajn9IcGzHCFaDFyzNdBLxvOZjhnlGCb85gL%2FoaeiBd014ULaSFTqlihwUpoEkLuylQ5nxCM8mxvnxr57EeV5ufyW%2FPu%2BDM65kh%2BxjZceERBjaldg4cx8QL9R8Y6xybhdJVWwHFNFyTXEmmKWWy0QdqOWA3hGENoN64ETisQZ%2BaywG95C4RbcdmAQTsmDrZZwyHTbf5Aer4XIPqFL0FmHnPrsLfmrR0DoBqaJH3Ue29Wh58bNzra8AjYV8dtWrnnXs1kJoOgEoIcBTmpxeIDDjo9WJvnncY6wsh88ysKKpJSQl8BCxLxtPlx37oCKmnCIK6SkHugmZmZwceho7TPJe%2BosNQgwxFaCjlgEkRLsSBgSDD2mKfBBjqkAXuuZHBGuoVfPegQ8xMS3sPq%2BqBnYck7sLTtgX5rxZA4uVQhD4LTiQ9HjDMEvdsL2M0acplbLVEx2ozTk9gzCTxZKyh52%2F%2BJXGQtbiac9ce3uqlRtSdneWNxz13nRJ8yMY9is6SJIh%2BY4vGFYp9dXDRMPqdkhg8hxqIyT5ztc8tsoAlT2IAt%2BY42A85HXgOlvMQDXC%2BeXaRySu9Wi3Zf4Cjv4Ift&X-Amz-Signature=91e7216916128d45f806adb19dc335c9c3d3f46f3713bbb9dbb2740ba9c51d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7KABG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIWOb9DqZgLc4CZGp%2BrQIJaB5%2FpiOHleX7OUEHGducugIhAKJ34XsnmuL8Lg7t6nlxPASqOugZqovBTMmWVUOtK6keKv8DCHUQABoMNjM3NDIzMTgzODA1IgwuxOBOuFAVDfmEhZcq3AONgJjJPCXSjw2%2F96xqJdp9kxgzs%2F3yYyPrmmA6S3vV3GDgD%2BBAGmokeFpRAIGCS9KWOmP4i5sukHQBa2%2BANDDCeZ0MSoS6SIQ30KSeP5Izin82ZIQ1h3eDq0c4kVSf8t6XQz5UDWLcEv%2FDqBb%2Bf0WqIK4hEEZ7vZpxz%2Fu3pFP4aUmiZKRDrrd3YNK8oQiFvKJ%2FQtSFcIEyXY3z%2FuqGRDOxqUHcWbBGsY4RGaSl1Z1aKd28jVlhLp8zKwkB%2FFpxrNL6UzGeEcnTA61yQajn9IcGzHCFaDFyzNdBLxvOZjhnlGCb85gL%2FoaeiBd014ULaSFTqlihwUpoEkLuylQ5nxCM8mxvnxr57EeV5ufyW%2FPu%2BDM65kh%2BxjZceERBjaldg4cx8QL9R8Y6xybhdJVWwHFNFyTXEmmKWWy0QdqOWA3hGENoN64ETisQZ%2BaywG95C4RbcdmAQTsmDrZZwyHTbf5Aer4XIPqFL0FmHnPrsLfmrR0DoBqaJH3Ue29Wh58bNzra8AjYV8dtWrnnXs1kJoOgEoIcBTmpxeIDDjo9WJvnncY6wsh88ysKKpJSQl8BCxLxtPlx37oCKmnCIK6SkHugmZmZwceho7TPJe%2BosNQgwxFaCjlgEkRLsSBgSDD2mKfBBjqkAXuuZHBGuoVfPegQ8xMS3sPq%2BqBnYck7sLTtgX5rxZA4uVQhD4LTiQ9HjDMEvdsL2M0acplbLVEx2ozTk9gzCTxZKyh52%2F%2BJXGQtbiac9ce3uqlRtSdneWNxz13nRJ8yMY9is6SJIh%2BY4vGFYp9dXDRMPqdkhg8hxqIyT5ztc8tsoAlT2IAt%2BY42A85HXgOlvMQDXC%2BeXaRySu9Wi3Zf4Cjv4Ift&X-Amz-Signature=876ccd6ef6355782a7492f6424b35ddb9e9e4436bde056bc7869793c88d58ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7KABG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIWOb9DqZgLc4CZGp%2BrQIJaB5%2FpiOHleX7OUEHGducugIhAKJ34XsnmuL8Lg7t6nlxPASqOugZqovBTMmWVUOtK6keKv8DCHUQABoMNjM3NDIzMTgzODA1IgwuxOBOuFAVDfmEhZcq3AONgJjJPCXSjw2%2F96xqJdp9kxgzs%2F3yYyPrmmA6S3vV3GDgD%2BBAGmokeFpRAIGCS9KWOmP4i5sukHQBa2%2BANDDCeZ0MSoS6SIQ30KSeP5Izin82ZIQ1h3eDq0c4kVSf8t6XQz5UDWLcEv%2FDqBb%2Bf0WqIK4hEEZ7vZpxz%2Fu3pFP4aUmiZKRDrrd3YNK8oQiFvKJ%2FQtSFcIEyXY3z%2FuqGRDOxqUHcWbBGsY4RGaSl1Z1aKd28jVlhLp8zKwkB%2FFpxrNL6UzGeEcnTA61yQajn9IcGzHCFaDFyzNdBLxvOZjhnlGCb85gL%2FoaeiBd014ULaSFTqlihwUpoEkLuylQ5nxCM8mxvnxr57EeV5ufyW%2FPu%2BDM65kh%2BxjZceERBjaldg4cx8QL9R8Y6xybhdJVWwHFNFyTXEmmKWWy0QdqOWA3hGENoN64ETisQZ%2BaywG95C4RbcdmAQTsmDrZZwyHTbf5Aer4XIPqFL0FmHnPrsLfmrR0DoBqaJH3Ue29Wh58bNzra8AjYV8dtWrnnXs1kJoOgEoIcBTmpxeIDDjo9WJvnncY6wsh88ysKKpJSQl8BCxLxtPlx37oCKmnCIK6SkHugmZmZwceho7TPJe%2BosNQgwxFaCjlgEkRLsSBgSDD2mKfBBjqkAXuuZHBGuoVfPegQ8xMS3sPq%2BqBnYck7sLTtgX5rxZA4uVQhD4LTiQ9HjDMEvdsL2M0acplbLVEx2ozTk9gzCTxZKyh52%2F%2BJXGQtbiac9ce3uqlRtSdneWNxz13nRJ8yMY9is6SJIh%2BY4vGFYp9dXDRMPqdkhg8hxqIyT5ztc8tsoAlT2IAt%2BY42A85HXgOlvMQDXC%2BeXaRySu9Wi3Zf4Cjv4Ift&X-Amz-Signature=ddcac32331f10cd9af00e741d0895099600df9e355a55b4389698eb8eb9f7a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7KABG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIWOb9DqZgLc4CZGp%2BrQIJaB5%2FpiOHleX7OUEHGducugIhAKJ34XsnmuL8Lg7t6nlxPASqOugZqovBTMmWVUOtK6keKv8DCHUQABoMNjM3NDIzMTgzODA1IgwuxOBOuFAVDfmEhZcq3AONgJjJPCXSjw2%2F96xqJdp9kxgzs%2F3yYyPrmmA6S3vV3GDgD%2BBAGmokeFpRAIGCS9KWOmP4i5sukHQBa2%2BANDDCeZ0MSoS6SIQ30KSeP5Izin82ZIQ1h3eDq0c4kVSf8t6XQz5UDWLcEv%2FDqBb%2Bf0WqIK4hEEZ7vZpxz%2Fu3pFP4aUmiZKRDrrd3YNK8oQiFvKJ%2FQtSFcIEyXY3z%2FuqGRDOxqUHcWbBGsY4RGaSl1Z1aKd28jVlhLp8zKwkB%2FFpxrNL6UzGeEcnTA61yQajn9IcGzHCFaDFyzNdBLxvOZjhnlGCb85gL%2FoaeiBd014ULaSFTqlihwUpoEkLuylQ5nxCM8mxvnxr57EeV5ufyW%2FPu%2BDM65kh%2BxjZceERBjaldg4cx8QL9R8Y6xybhdJVWwHFNFyTXEmmKWWy0QdqOWA3hGENoN64ETisQZ%2BaywG95C4RbcdmAQTsmDrZZwyHTbf5Aer4XIPqFL0FmHnPrsLfmrR0DoBqaJH3Ue29Wh58bNzra8AjYV8dtWrnnXs1kJoOgEoIcBTmpxeIDDjo9WJvnncY6wsh88ysKKpJSQl8BCxLxtPlx37oCKmnCIK6SkHugmZmZwceho7TPJe%2BosNQgwxFaCjlgEkRLsSBgSDD2mKfBBjqkAXuuZHBGuoVfPegQ8xMS3sPq%2BqBnYck7sLTtgX5rxZA4uVQhD4LTiQ9HjDMEvdsL2M0acplbLVEx2ozTk9gzCTxZKyh52%2F%2BJXGQtbiac9ce3uqlRtSdneWNxz13nRJ8yMY9is6SJIh%2BY4vGFYp9dXDRMPqdkhg8hxqIyT5ztc8tsoAlT2IAt%2BY42A85HXgOlvMQDXC%2BeXaRySu9Wi3Zf4Cjv4Ift&X-Amz-Signature=3f1183a4e7920d89f92cb08200fdbd5224f4a1eaece0571316dc010878ad4c72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM7KABG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIWOb9DqZgLc4CZGp%2BrQIJaB5%2FpiOHleX7OUEHGducugIhAKJ34XsnmuL8Lg7t6nlxPASqOugZqovBTMmWVUOtK6keKv8DCHUQABoMNjM3NDIzMTgzODA1IgwuxOBOuFAVDfmEhZcq3AONgJjJPCXSjw2%2F96xqJdp9kxgzs%2F3yYyPrmmA6S3vV3GDgD%2BBAGmokeFpRAIGCS9KWOmP4i5sukHQBa2%2BANDDCeZ0MSoS6SIQ30KSeP5Izin82ZIQ1h3eDq0c4kVSf8t6XQz5UDWLcEv%2FDqBb%2Bf0WqIK4hEEZ7vZpxz%2Fu3pFP4aUmiZKRDrrd3YNK8oQiFvKJ%2FQtSFcIEyXY3z%2FuqGRDOxqUHcWbBGsY4RGaSl1Z1aKd28jVlhLp8zKwkB%2FFpxrNL6UzGeEcnTA61yQajn9IcGzHCFaDFyzNdBLxvOZjhnlGCb85gL%2FoaeiBd014ULaSFTqlihwUpoEkLuylQ5nxCM8mxvnxr57EeV5ufyW%2FPu%2BDM65kh%2BxjZceERBjaldg4cx8QL9R8Y6xybhdJVWwHFNFyTXEmmKWWy0QdqOWA3hGENoN64ETisQZ%2BaywG95C4RbcdmAQTsmDrZZwyHTbf5Aer4XIPqFL0FmHnPrsLfmrR0DoBqaJH3Ue29Wh58bNzra8AjYV8dtWrnnXs1kJoOgEoIcBTmpxeIDDjo9WJvnncY6wsh88ysKKpJSQl8BCxLxtPlx37oCKmnCIK6SkHugmZmZwceho7TPJe%2BosNQgwxFaCjlgEkRLsSBgSDD2mKfBBjqkAXuuZHBGuoVfPegQ8xMS3sPq%2BqBnYck7sLTtgX5rxZA4uVQhD4LTiQ9HjDMEvdsL2M0acplbLVEx2ozTk9gzCTxZKyh52%2F%2BJXGQtbiac9ce3uqlRtSdneWNxz13nRJ8yMY9is6SJIh%2BY4vGFYp9dXDRMPqdkhg8hxqIyT5ztc8tsoAlT2IAt%2BY42A85HXgOlvMQDXC%2BeXaRySu9Wi3Zf4Cjv4Ift&X-Amz-Signature=bab851137c428eac17e59aaf1acfc30173cf0c7c7c1f2c4e3cba2061dede8652&X-Amz-SignedHeaders=host&x-id=GetObject)
