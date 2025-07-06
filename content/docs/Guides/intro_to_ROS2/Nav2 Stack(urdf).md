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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=a9472ceb7544d9b392575e8400861c97b97cc698d754dec148371edf308e13b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=b0ea2d68bdb16d237927ad0422ee4e465d0a5ed07fa65392677fcb154e70e585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=244a24152bf194553bfc211afa5589906cc4bf35d6adcd6055f3d3a403675699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=6aad73c52fb03dc3acb83889a46881a48b1dffb1db7d90cd3a23122c40f1d350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=16420a5425618e2b7ee6f717ae42e47f1f6e743f7ee064065925a474ef4f4d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWKGXNC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T042342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHxR%2FT%2Bfna1EpqP8FAXjmbrQAnBIRRbF3LREmCT6gNNxAiA2Tow7Sjllm5g%2FR2emU%2F%2F%2BFj2fG6ErciBP5Bw0WTECYSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMOsveMPrCSevGd%2BWNKtwDxnKK2V2pOkz8ApnASpY8qD7N9u6aNyZgfT7t6vjrr68a0dUcSxeTQUB%2FLSkdxtX6e4UIw%2BMyaJqXRNBolnJoVfmHqxK3OGCr2pnENM06y5%2B3R59teKkaITbcGK6oLNkxDyQTa%2FL%2BHgpzz30PYRlTbEiY1GgxSIr9X%2FGynow0ezHKeftiq%2BrHj8y7%2FnQaXVn5F9hNS%2FAyNNkmrU2h4VQN24wYZuKhLXOtuDjdt0XAMNfIA%2FyAuCa1ST4fSa5PZMT3DCZtGPw%2FLY9uxMANs5Tb9w%2BZk7suuscUkXTwRyDwiusXEJJ0v0I7EcJbwEnQ1QLD3etvTiz0bXZog0jXm%2B0Az0X19NIeGYXUafasMJ0Hanp9SC4j%2F6bQl2YCsgcggBxcHuac9CJHe0k44tZmVRLkWcOA35UgvQvI3ZC9NkHcB4j%2BfeeILzQjse2JpUapgEUkb%2BgsCTmW5LZJiuyz1oeSEq8e3YlRjRsLAP0ywEABjIt3w%2FYZqfT60Gyu0DIEf3rJC1c%2BxNI1tVGdN8geRXEy7bOhAoMtSsEfL8XjrqMplxwOtsgPBGWlTWlqilYHdebKn64MfUeJYZLFTPAaS3XgcA2qRfF%2BIMLH%2BswyxOFKW2afFF81x4wBM0Ea0kcw2oWnwwY6pgE9dWVFH7UH5VlUYi%2BYEOxiF7iHfWxOQEkesFfcTg6y1FFyB8bWIlvejzkpQI2M5xtCeZmNTV6QGDCLBGig3VPTAlyeMMLOZYxzjoyAiyUhGNuzr9l%2Be7lqwY%2FWu3jSle8pJH3e564tIT5HIBkmG4ANHbT%2FHivP9r2tnvGlaULzXXIX3uGIsImhxzSNDMCde2h%2F24bJIIFGvWEgbmjMizNWnjycI0IH&X-Amz-Signature=70ebe2b26556dc3f111edf2289cf89e750dca5baab522d39be6343299eec0887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
