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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWYDIHA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLdfic01vFRtYSdmkdJxHg9NtuS3WwrpH8PTEYw5ogAIhANVJSJEMCM5qzCy0iktH4N9GY9xoruHEXOecqPG3wg2uKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySzhvee4EvUppBpTUq3AMzVZb4huquw7wjRHLd5aT%2B3hL9yRMi%2FBle%2FO3Rvx5O%2FLZqX5e%2Bd%2FpxCMLN5m%2BCoGlkiMVB7VVXCTQtrSFHeUqnMVKAYaVTBpzdApQab%2FI332bqfBIR5sim%2F3pq%2FY5WhUJ00uF%2BWvWk2up91m0PqmqmL%2FyRTXdMm%2BBY25OTBZ1gzHeF5SekI0NLuS27xDg%2BYmPxBhrORsVf%2Bip9%2BYsAioPI9OV3%2BAhJI1H6EonQf2pxK36SAk0qZrYyQIxVMLtKRHlI1XisPD%2FHlS0vzIT%2BM4ThUAJFhBUoXMXW8%2FE%2FT151EVhJTNxIMM0lL1sRwpk8MkVZYiAGVbNFAMjuUL0QWcHdCLvn8UdV0%2FwPjLu3uRehbi83o0RQVcbkGnbBGCHUofd23O9mx0odC7HNhbOt95%2FgNjspx8OmBOskY%2FhNjExTMlcrlMhY%2F3qSKzbtNSDX9JUaIOv8WqJMJ3Mm8a3ji4KwzrDN2BR6%2Blq5%2BVMJwsuzJQwVcJGnx3L0VSQzYoSVSCBOmqjVi5ZqJ1uWJcBOOz6hsctG%2FzDZpHtv9u21S0eR6yvNpL4B3xe9q06vCXtsgxT3m%2BEECx9FsLXcwGI%2B3vsA5tu4taL%2BFpQjTzBb95woGVFRTYu4nofk3PxyPDDp4fPDBjqkAQiHviAgbSM44T7CHNmu%2FAbaEQ0YjWZYiP4jPhpUobbQURUeBtDohcA3qJg2KiChPNTv7VBLRkwjyLPqXdvza1UPRFLnofS7uEfDlJjtqfTgAfD6Wm%2BnEJlAs4OMD80mt02ZLxypTCt1PNYCoDnnrjNPmHt0u0cTM2AEVJdzMqvists1zxQENdX3ov%2F%2B4prlEriHFLyKhOCyWG8Ok6i5eVc4u9UU&X-Amz-Signature=e1447208185bfc22cd42247027e8caeea89f1812215eb2d76ea987949704b10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWYDIHA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLdfic01vFRtYSdmkdJxHg9NtuS3WwrpH8PTEYw5ogAIhANVJSJEMCM5qzCy0iktH4N9GY9xoruHEXOecqPG3wg2uKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySzhvee4EvUppBpTUq3AMzVZb4huquw7wjRHLd5aT%2B3hL9yRMi%2FBle%2FO3Rvx5O%2FLZqX5e%2Bd%2FpxCMLN5m%2BCoGlkiMVB7VVXCTQtrSFHeUqnMVKAYaVTBpzdApQab%2FI332bqfBIR5sim%2F3pq%2FY5WhUJ00uF%2BWvWk2up91m0PqmqmL%2FyRTXdMm%2BBY25OTBZ1gzHeF5SekI0NLuS27xDg%2BYmPxBhrORsVf%2Bip9%2BYsAioPI9OV3%2BAhJI1H6EonQf2pxK36SAk0qZrYyQIxVMLtKRHlI1XisPD%2FHlS0vzIT%2BM4ThUAJFhBUoXMXW8%2FE%2FT151EVhJTNxIMM0lL1sRwpk8MkVZYiAGVbNFAMjuUL0QWcHdCLvn8UdV0%2FwPjLu3uRehbi83o0RQVcbkGnbBGCHUofd23O9mx0odC7HNhbOt95%2FgNjspx8OmBOskY%2FhNjExTMlcrlMhY%2F3qSKzbtNSDX9JUaIOv8WqJMJ3Mm8a3ji4KwzrDN2BR6%2Blq5%2BVMJwsuzJQwVcJGnx3L0VSQzYoSVSCBOmqjVi5ZqJ1uWJcBOOz6hsctG%2FzDZpHtv9u21S0eR6yvNpL4B3xe9q06vCXtsgxT3m%2BEECx9FsLXcwGI%2B3vsA5tu4taL%2BFpQjTzBb95woGVFRTYu4nofk3PxyPDDp4fPDBjqkAQiHviAgbSM44T7CHNmu%2FAbaEQ0YjWZYiP4jPhpUobbQURUeBtDohcA3qJg2KiChPNTv7VBLRkwjyLPqXdvza1UPRFLnofS7uEfDlJjtqfTgAfD6Wm%2BnEJlAs4OMD80mt02ZLxypTCt1PNYCoDnnrjNPmHt0u0cTM2AEVJdzMqvists1zxQENdX3ov%2F%2B4prlEriHFLyKhOCyWG8Ok6i5eVc4u9UU&X-Amz-Signature=5758dab3d328bef1e26d5fa01faaf81a9dacabc44e0c67466ab894462f4a422c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWYDIHA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLdfic01vFRtYSdmkdJxHg9NtuS3WwrpH8PTEYw5ogAIhANVJSJEMCM5qzCy0iktH4N9GY9xoruHEXOecqPG3wg2uKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySzhvee4EvUppBpTUq3AMzVZb4huquw7wjRHLd5aT%2B3hL9yRMi%2FBle%2FO3Rvx5O%2FLZqX5e%2Bd%2FpxCMLN5m%2BCoGlkiMVB7VVXCTQtrSFHeUqnMVKAYaVTBpzdApQab%2FI332bqfBIR5sim%2F3pq%2FY5WhUJ00uF%2BWvWk2up91m0PqmqmL%2FyRTXdMm%2BBY25OTBZ1gzHeF5SekI0NLuS27xDg%2BYmPxBhrORsVf%2Bip9%2BYsAioPI9OV3%2BAhJI1H6EonQf2pxK36SAk0qZrYyQIxVMLtKRHlI1XisPD%2FHlS0vzIT%2BM4ThUAJFhBUoXMXW8%2FE%2FT151EVhJTNxIMM0lL1sRwpk8MkVZYiAGVbNFAMjuUL0QWcHdCLvn8UdV0%2FwPjLu3uRehbi83o0RQVcbkGnbBGCHUofd23O9mx0odC7HNhbOt95%2FgNjspx8OmBOskY%2FhNjExTMlcrlMhY%2F3qSKzbtNSDX9JUaIOv8WqJMJ3Mm8a3ji4KwzrDN2BR6%2Blq5%2BVMJwsuzJQwVcJGnx3L0VSQzYoSVSCBOmqjVi5ZqJ1uWJcBOOz6hsctG%2FzDZpHtv9u21S0eR6yvNpL4B3xe9q06vCXtsgxT3m%2BEECx9FsLXcwGI%2B3vsA5tu4taL%2BFpQjTzBb95woGVFRTYu4nofk3PxyPDDp4fPDBjqkAQiHviAgbSM44T7CHNmu%2FAbaEQ0YjWZYiP4jPhpUobbQURUeBtDohcA3qJg2KiChPNTv7VBLRkwjyLPqXdvza1UPRFLnofS7uEfDlJjtqfTgAfD6Wm%2BnEJlAs4OMD80mt02ZLxypTCt1PNYCoDnnrjNPmHt0u0cTM2AEVJdzMqvists1zxQENdX3ov%2F%2B4prlEriHFLyKhOCyWG8Ok6i5eVc4u9UU&X-Amz-Signature=bcf445831c936f62bcb195728fc73c2429f5156947b0cd5ea313860f6445625f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWYDIHA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLdfic01vFRtYSdmkdJxHg9NtuS3WwrpH8PTEYw5ogAIhANVJSJEMCM5qzCy0iktH4N9GY9xoruHEXOecqPG3wg2uKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySzhvee4EvUppBpTUq3AMzVZb4huquw7wjRHLd5aT%2B3hL9yRMi%2FBle%2FO3Rvx5O%2FLZqX5e%2Bd%2FpxCMLN5m%2BCoGlkiMVB7VVXCTQtrSFHeUqnMVKAYaVTBpzdApQab%2FI332bqfBIR5sim%2F3pq%2FY5WhUJ00uF%2BWvWk2up91m0PqmqmL%2FyRTXdMm%2BBY25OTBZ1gzHeF5SekI0NLuS27xDg%2BYmPxBhrORsVf%2Bip9%2BYsAioPI9OV3%2BAhJI1H6EonQf2pxK36SAk0qZrYyQIxVMLtKRHlI1XisPD%2FHlS0vzIT%2BM4ThUAJFhBUoXMXW8%2FE%2FT151EVhJTNxIMM0lL1sRwpk8MkVZYiAGVbNFAMjuUL0QWcHdCLvn8UdV0%2FwPjLu3uRehbi83o0RQVcbkGnbBGCHUofd23O9mx0odC7HNhbOt95%2FgNjspx8OmBOskY%2FhNjExTMlcrlMhY%2F3qSKzbtNSDX9JUaIOv8WqJMJ3Mm8a3ji4KwzrDN2BR6%2Blq5%2BVMJwsuzJQwVcJGnx3L0VSQzYoSVSCBOmqjVi5ZqJ1uWJcBOOz6hsctG%2FzDZpHtv9u21S0eR6yvNpL4B3xe9q06vCXtsgxT3m%2BEECx9FsLXcwGI%2B3vsA5tu4taL%2BFpQjTzBb95woGVFRTYu4nofk3PxyPDDp4fPDBjqkAQiHviAgbSM44T7CHNmu%2FAbaEQ0YjWZYiP4jPhpUobbQURUeBtDohcA3qJg2KiChPNTv7VBLRkwjyLPqXdvza1UPRFLnofS7uEfDlJjtqfTgAfD6Wm%2BnEJlAs4OMD80mt02ZLxypTCt1PNYCoDnnrjNPmHt0u0cTM2AEVJdzMqvists1zxQENdX3ov%2F%2B4prlEriHFLyKhOCyWG8Ok6i5eVc4u9UU&X-Amz-Signature=bec307ddd1ec68e56a2d17e33471e2f795f46e5d0c3b4f7f287b64c3c45db480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWYDIHA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLdfic01vFRtYSdmkdJxHg9NtuS3WwrpH8PTEYw5ogAIhANVJSJEMCM5qzCy0iktH4N9GY9xoruHEXOecqPG3wg2uKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySzhvee4EvUppBpTUq3AMzVZb4huquw7wjRHLd5aT%2B3hL9yRMi%2FBle%2FO3Rvx5O%2FLZqX5e%2Bd%2FpxCMLN5m%2BCoGlkiMVB7VVXCTQtrSFHeUqnMVKAYaVTBpzdApQab%2FI332bqfBIR5sim%2F3pq%2FY5WhUJ00uF%2BWvWk2up91m0PqmqmL%2FyRTXdMm%2BBY25OTBZ1gzHeF5SekI0NLuS27xDg%2BYmPxBhrORsVf%2Bip9%2BYsAioPI9OV3%2BAhJI1H6EonQf2pxK36SAk0qZrYyQIxVMLtKRHlI1XisPD%2FHlS0vzIT%2BM4ThUAJFhBUoXMXW8%2FE%2FT151EVhJTNxIMM0lL1sRwpk8MkVZYiAGVbNFAMjuUL0QWcHdCLvn8UdV0%2FwPjLu3uRehbi83o0RQVcbkGnbBGCHUofd23O9mx0odC7HNhbOt95%2FgNjspx8OmBOskY%2FhNjExTMlcrlMhY%2F3qSKzbtNSDX9JUaIOv8WqJMJ3Mm8a3ji4KwzrDN2BR6%2Blq5%2BVMJwsuzJQwVcJGnx3L0VSQzYoSVSCBOmqjVi5ZqJ1uWJcBOOz6hsctG%2FzDZpHtv9u21S0eR6yvNpL4B3xe9q06vCXtsgxT3m%2BEECx9FsLXcwGI%2B3vsA5tu4taL%2BFpQjTzBb95woGVFRTYu4nofk3PxyPDDp4fPDBjqkAQiHviAgbSM44T7CHNmu%2FAbaEQ0YjWZYiP4jPhpUobbQURUeBtDohcA3qJg2KiChPNTv7VBLRkwjyLPqXdvza1UPRFLnofS7uEfDlJjtqfTgAfD6Wm%2BnEJlAs4OMD80mt02ZLxypTCt1PNYCoDnnrjNPmHt0u0cTM2AEVJdzMqvists1zxQENdX3ov%2F%2B4prlEriHFLyKhOCyWG8Ok6i5eVc4u9UU&X-Amz-Signature=5152a61c5e5b0734655c56d798945113da69c3f04c760766e3bb4ca6aad65aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWYDIHA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFLdfic01vFRtYSdmkdJxHg9NtuS3WwrpH8PTEYw5ogAIhANVJSJEMCM5qzCy0iktH4N9GY9xoruHEXOecqPG3wg2uKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySzhvee4EvUppBpTUq3AMzVZb4huquw7wjRHLd5aT%2B3hL9yRMi%2FBle%2FO3Rvx5O%2FLZqX5e%2Bd%2FpxCMLN5m%2BCoGlkiMVB7VVXCTQtrSFHeUqnMVKAYaVTBpzdApQab%2FI332bqfBIR5sim%2F3pq%2FY5WhUJ00uF%2BWvWk2up91m0PqmqmL%2FyRTXdMm%2BBY25OTBZ1gzHeF5SekI0NLuS27xDg%2BYmPxBhrORsVf%2Bip9%2BYsAioPI9OV3%2BAhJI1H6EonQf2pxK36SAk0qZrYyQIxVMLtKRHlI1XisPD%2FHlS0vzIT%2BM4ThUAJFhBUoXMXW8%2FE%2FT151EVhJTNxIMM0lL1sRwpk8MkVZYiAGVbNFAMjuUL0QWcHdCLvn8UdV0%2FwPjLu3uRehbi83o0RQVcbkGnbBGCHUofd23O9mx0odC7HNhbOt95%2FgNjspx8OmBOskY%2FhNjExTMlcrlMhY%2F3qSKzbtNSDX9JUaIOv8WqJMJ3Mm8a3ji4KwzrDN2BR6%2Blq5%2BVMJwsuzJQwVcJGnx3L0VSQzYoSVSCBOmqjVi5ZqJ1uWJcBOOz6hsctG%2FzDZpHtv9u21S0eR6yvNpL4B3xe9q06vCXtsgxT3m%2BEECx9FsLXcwGI%2B3vsA5tu4taL%2BFpQjTzBb95woGVFRTYu4nofk3PxyPDDp4fPDBjqkAQiHviAgbSM44T7CHNmu%2FAbaEQ0YjWZYiP4jPhpUobbQURUeBtDohcA3qJg2KiChPNTv7VBLRkwjyLPqXdvza1UPRFLnofS7uEfDlJjtqfTgAfD6Wm%2BnEJlAs4OMD80mt02ZLxypTCt1PNYCoDnnrjNPmHt0u0cTM2AEVJdzMqvists1zxQENdX3ov%2F%2B4prlEriHFLyKhOCyWG8Ok6i5eVc4u9UU&X-Amz-Signature=1112b683bbc9bea0ea8a7faee1b003699e2777002ccf928ac1a3b27cc1157447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
