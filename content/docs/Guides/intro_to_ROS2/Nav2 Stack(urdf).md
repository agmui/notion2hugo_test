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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6JWI53%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmFAjJ8GD8LuRNc04ZyJ%2BLLA%2FURlXFFuBQqrlyJZ%2FXAIhAOK4pSqUQZbovhbFx4FUMABrnGyFx4pcn4RyKfSK9W9oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykV51tTXuEjt%2FYX%2FMq3AMpT85xRdO%2FFgVEsEdMjdQUnQtZX6gU51xpyvQ6t2pDrTv1y%2FeobdZPSBc16WLoy5Xhr4XHnNoGzgF2EKNQ29UOmxibHt1mZDp1oS1B2v4t%2FeGhKvZRB%2FGPXYfSBn8FfuOn2Y6CnlFKYq47WRQZ19enS6fHMvMBqBPc7G4Er31bysJnZnnSlO2qDlsctNEN6qOOc7YjKnXoVxc2%2BPPiDIivUDA%2FmlaLra35NwLcwgzzgQXaIg0CFEX%2FghjC1YmfEeNiVh5c5f3ns8ivaKKEQJCuP7nA8LzY9UvO702%2BFjtGogYbrdT3qvVefSGrAX4gVaMEn%2BZUzLr%2FYK21Ru1Osn86WZ3vqCMjEucV10I9gzyawPcMXSoPyieDiMtaxjA1fSxw82KW4g9ANR1odeK09q53DRbkws1VWhi3pphnxv7Ar6BRTzy6ioUZ%2Feksl7Ag2EM22YPCmSdCxtEP8Sn0NfdYz%2FOZpmTeQ8hKIXvFBwC5pan24FqWqqvrRY2TRAIRMF44VnYu4BUBTjv9NC2n9f12rk3bk6XBBgs1g4dFXn7elunsfMP6JJriJdfRCyrq3f9dBvRbrtzhZKxlexDeVHE%2B%2BAbzuSReUqrokbhy3Gng342lqfEBg0pIQd3P4jCz9e%2FDBjqkAb97DwhAVMtcTNXlCNG3g6fbb4lwYkpKIecAn4uMl9trTbVrBnGhJtLvT4RD0OUWHf3V%2B8BFac7z9D9ZKCexlpkryd5UDE0xbSxUiI9Ho%2Biwe43kuhiOB9NtbuRYj%2BsV6OirFfdCZ8XSHNSsb2Z6AW5k8S8up7f4aLHBU%2B96pN%2BOlGccUnGAY3hhBYZzxOb8yI6iyut1dglWkrW5jOWO8zn1oGfe&X-Amz-Signature=611e53b730b604e440b80575208a946313ceb4511a0a8dc8dd7183b0726b8a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6JWI53%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmFAjJ8GD8LuRNc04ZyJ%2BLLA%2FURlXFFuBQqrlyJZ%2FXAIhAOK4pSqUQZbovhbFx4FUMABrnGyFx4pcn4RyKfSK9W9oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykV51tTXuEjt%2FYX%2FMq3AMpT85xRdO%2FFgVEsEdMjdQUnQtZX6gU51xpyvQ6t2pDrTv1y%2FeobdZPSBc16WLoy5Xhr4XHnNoGzgF2EKNQ29UOmxibHt1mZDp1oS1B2v4t%2FeGhKvZRB%2FGPXYfSBn8FfuOn2Y6CnlFKYq47WRQZ19enS6fHMvMBqBPc7G4Er31bysJnZnnSlO2qDlsctNEN6qOOc7YjKnXoVxc2%2BPPiDIivUDA%2FmlaLra35NwLcwgzzgQXaIg0CFEX%2FghjC1YmfEeNiVh5c5f3ns8ivaKKEQJCuP7nA8LzY9UvO702%2BFjtGogYbrdT3qvVefSGrAX4gVaMEn%2BZUzLr%2FYK21Ru1Osn86WZ3vqCMjEucV10I9gzyawPcMXSoPyieDiMtaxjA1fSxw82KW4g9ANR1odeK09q53DRbkws1VWhi3pphnxv7Ar6BRTzy6ioUZ%2Feksl7Ag2EM22YPCmSdCxtEP8Sn0NfdYz%2FOZpmTeQ8hKIXvFBwC5pan24FqWqqvrRY2TRAIRMF44VnYu4BUBTjv9NC2n9f12rk3bk6XBBgs1g4dFXn7elunsfMP6JJriJdfRCyrq3f9dBvRbrtzhZKxlexDeVHE%2B%2BAbzuSReUqrokbhy3Gng342lqfEBg0pIQd3P4jCz9e%2FDBjqkAb97DwhAVMtcTNXlCNG3g6fbb4lwYkpKIecAn4uMl9trTbVrBnGhJtLvT4RD0OUWHf3V%2B8BFac7z9D9ZKCexlpkryd5UDE0xbSxUiI9Ho%2Biwe43kuhiOB9NtbuRYj%2BsV6OirFfdCZ8XSHNSsb2Z6AW5k8S8up7f4aLHBU%2B96pN%2BOlGccUnGAY3hhBYZzxOb8yI6iyut1dglWkrW5jOWO8zn1oGfe&X-Amz-Signature=f21d820a36479922076619bb91930bbc3ed17053a527087cf9bed7329446c9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6JWI53%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmFAjJ8GD8LuRNc04ZyJ%2BLLA%2FURlXFFuBQqrlyJZ%2FXAIhAOK4pSqUQZbovhbFx4FUMABrnGyFx4pcn4RyKfSK9W9oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykV51tTXuEjt%2FYX%2FMq3AMpT85xRdO%2FFgVEsEdMjdQUnQtZX6gU51xpyvQ6t2pDrTv1y%2FeobdZPSBc16WLoy5Xhr4XHnNoGzgF2EKNQ29UOmxibHt1mZDp1oS1B2v4t%2FeGhKvZRB%2FGPXYfSBn8FfuOn2Y6CnlFKYq47WRQZ19enS6fHMvMBqBPc7G4Er31bysJnZnnSlO2qDlsctNEN6qOOc7YjKnXoVxc2%2BPPiDIivUDA%2FmlaLra35NwLcwgzzgQXaIg0CFEX%2FghjC1YmfEeNiVh5c5f3ns8ivaKKEQJCuP7nA8LzY9UvO702%2BFjtGogYbrdT3qvVefSGrAX4gVaMEn%2BZUzLr%2FYK21Ru1Osn86WZ3vqCMjEucV10I9gzyawPcMXSoPyieDiMtaxjA1fSxw82KW4g9ANR1odeK09q53DRbkws1VWhi3pphnxv7Ar6BRTzy6ioUZ%2Feksl7Ag2EM22YPCmSdCxtEP8Sn0NfdYz%2FOZpmTeQ8hKIXvFBwC5pan24FqWqqvrRY2TRAIRMF44VnYu4BUBTjv9NC2n9f12rk3bk6XBBgs1g4dFXn7elunsfMP6JJriJdfRCyrq3f9dBvRbrtzhZKxlexDeVHE%2B%2BAbzuSReUqrokbhy3Gng342lqfEBg0pIQd3P4jCz9e%2FDBjqkAb97DwhAVMtcTNXlCNG3g6fbb4lwYkpKIecAn4uMl9trTbVrBnGhJtLvT4RD0OUWHf3V%2B8BFac7z9D9ZKCexlpkryd5UDE0xbSxUiI9Ho%2Biwe43kuhiOB9NtbuRYj%2BsV6OirFfdCZ8XSHNSsb2Z6AW5k8S8up7f4aLHBU%2B96pN%2BOlGccUnGAY3hhBYZzxOb8yI6iyut1dglWkrW5jOWO8zn1oGfe&X-Amz-Signature=67a9d268fcdd058a81d07dd221ffbf44e9fb525b148f6c417eeb9a122474077d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6JWI53%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmFAjJ8GD8LuRNc04ZyJ%2BLLA%2FURlXFFuBQqrlyJZ%2FXAIhAOK4pSqUQZbovhbFx4FUMABrnGyFx4pcn4RyKfSK9W9oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykV51tTXuEjt%2FYX%2FMq3AMpT85xRdO%2FFgVEsEdMjdQUnQtZX6gU51xpyvQ6t2pDrTv1y%2FeobdZPSBc16WLoy5Xhr4XHnNoGzgF2EKNQ29UOmxibHt1mZDp1oS1B2v4t%2FeGhKvZRB%2FGPXYfSBn8FfuOn2Y6CnlFKYq47WRQZ19enS6fHMvMBqBPc7G4Er31bysJnZnnSlO2qDlsctNEN6qOOc7YjKnXoVxc2%2BPPiDIivUDA%2FmlaLra35NwLcwgzzgQXaIg0CFEX%2FghjC1YmfEeNiVh5c5f3ns8ivaKKEQJCuP7nA8LzY9UvO702%2BFjtGogYbrdT3qvVefSGrAX4gVaMEn%2BZUzLr%2FYK21Ru1Osn86WZ3vqCMjEucV10I9gzyawPcMXSoPyieDiMtaxjA1fSxw82KW4g9ANR1odeK09q53DRbkws1VWhi3pphnxv7Ar6BRTzy6ioUZ%2Feksl7Ag2EM22YPCmSdCxtEP8Sn0NfdYz%2FOZpmTeQ8hKIXvFBwC5pan24FqWqqvrRY2TRAIRMF44VnYu4BUBTjv9NC2n9f12rk3bk6XBBgs1g4dFXn7elunsfMP6JJriJdfRCyrq3f9dBvRbrtzhZKxlexDeVHE%2B%2BAbzuSReUqrokbhy3Gng342lqfEBg0pIQd3P4jCz9e%2FDBjqkAb97DwhAVMtcTNXlCNG3g6fbb4lwYkpKIecAn4uMl9trTbVrBnGhJtLvT4RD0OUWHf3V%2B8BFac7z9D9ZKCexlpkryd5UDE0xbSxUiI9Ho%2Biwe43kuhiOB9NtbuRYj%2BsV6OirFfdCZ8XSHNSsb2Z6AW5k8S8up7f4aLHBU%2B96pN%2BOlGccUnGAY3hhBYZzxOb8yI6iyut1dglWkrW5jOWO8zn1oGfe&X-Amz-Signature=9b62b412f4abb9df7cfcd5fb6f5afb006e3a917b3f542973e70911a03b911849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6JWI53%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmFAjJ8GD8LuRNc04ZyJ%2BLLA%2FURlXFFuBQqrlyJZ%2FXAIhAOK4pSqUQZbovhbFx4FUMABrnGyFx4pcn4RyKfSK9W9oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykV51tTXuEjt%2FYX%2FMq3AMpT85xRdO%2FFgVEsEdMjdQUnQtZX6gU51xpyvQ6t2pDrTv1y%2FeobdZPSBc16WLoy5Xhr4XHnNoGzgF2EKNQ29UOmxibHt1mZDp1oS1B2v4t%2FeGhKvZRB%2FGPXYfSBn8FfuOn2Y6CnlFKYq47WRQZ19enS6fHMvMBqBPc7G4Er31bysJnZnnSlO2qDlsctNEN6qOOc7YjKnXoVxc2%2BPPiDIivUDA%2FmlaLra35NwLcwgzzgQXaIg0CFEX%2FghjC1YmfEeNiVh5c5f3ns8ivaKKEQJCuP7nA8LzY9UvO702%2BFjtGogYbrdT3qvVefSGrAX4gVaMEn%2BZUzLr%2FYK21Ru1Osn86WZ3vqCMjEucV10I9gzyawPcMXSoPyieDiMtaxjA1fSxw82KW4g9ANR1odeK09q53DRbkws1VWhi3pphnxv7Ar6BRTzy6ioUZ%2Feksl7Ag2EM22YPCmSdCxtEP8Sn0NfdYz%2FOZpmTeQ8hKIXvFBwC5pan24FqWqqvrRY2TRAIRMF44VnYu4BUBTjv9NC2n9f12rk3bk6XBBgs1g4dFXn7elunsfMP6JJriJdfRCyrq3f9dBvRbrtzhZKxlexDeVHE%2B%2BAbzuSReUqrokbhy3Gng342lqfEBg0pIQd3P4jCz9e%2FDBjqkAb97DwhAVMtcTNXlCNG3g6fbb4lwYkpKIecAn4uMl9trTbVrBnGhJtLvT4RD0OUWHf3V%2B8BFac7z9D9ZKCexlpkryd5UDE0xbSxUiI9Ho%2Biwe43kuhiOB9NtbuRYj%2BsV6OirFfdCZ8XSHNSsb2Z6AW5k8S8up7f4aLHBU%2B96pN%2BOlGccUnGAY3hhBYZzxOb8yI6iyut1dglWkrW5jOWO8zn1oGfe&X-Amz-Signature=f9deefa273e2f53736f93d0597565fe5b02697080f55bd0a4112039ca974db28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6JWI53%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmFAjJ8GD8LuRNc04ZyJ%2BLLA%2FURlXFFuBQqrlyJZ%2FXAIhAOK4pSqUQZbovhbFx4FUMABrnGyFx4pcn4RyKfSK9W9oKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykV51tTXuEjt%2FYX%2FMq3AMpT85xRdO%2FFgVEsEdMjdQUnQtZX6gU51xpyvQ6t2pDrTv1y%2FeobdZPSBc16WLoy5Xhr4XHnNoGzgF2EKNQ29UOmxibHt1mZDp1oS1B2v4t%2FeGhKvZRB%2FGPXYfSBn8FfuOn2Y6CnlFKYq47WRQZ19enS6fHMvMBqBPc7G4Er31bysJnZnnSlO2qDlsctNEN6qOOc7YjKnXoVxc2%2BPPiDIivUDA%2FmlaLra35NwLcwgzzgQXaIg0CFEX%2FghjC1YmfEeNiVh5c5f3ns8ivaKKEQJCuP7nA8LzY9UvO702%2BFjtGogYbrdT3qvVefSGrAX4gVaMEn%2BZUzLr%2FYK21Ru1Osn86WZ3vqCMjEucV10I9gzyawPcMXSoPyieDiMtaxjA1fSxw82KW4g9ANR1odeK09q53DRbkws1VWhi3pphnxv7Ar6BRTzy6ioUZ%2Feksl7Ag2EM22YPCmSdCxtEP8Sn0NfdYz%2FOZpmTeQ8hKIXvFBwC5pan24FqWqqvrRY2TRAIRMF44VnYu4BUBTjv9NC2n9f12rk3bk6XBBgs1g4dFXn7elunsfMP6JJriJdfRCyrq3f9dBvRbrtzhZKxlexDeVHE%2B%2BAbzuSReUqrokbhy3Gng342lqfEBg0pIQd3P4jCz9e%2FDBjqkAb97DwhAVMtcTNXlCNG3g6fbb4lwYkpKIecAn4uMl9trTbVrBnGhJtLvT4RD0OUWHf3V%2B8BFac7z9D9ZKCexlpkryd5UDE0xbSxUiI9Ho%2Biwe43kuhiOB9NtbuRYj%2BsV6OirFfdCZ8XSHNSsb2Z6AW5k8S8up7f4aLHBU%2B96pN%2BOlGccUnGAY3hhBYZzxOb8yI6iyut1dglWkrW5jOWO8zn1oGfe&X-Amz-Signature=53c5f44d50831351ff1cd32611607d1a32bb4b2b1735e866832d7f3f0b1f3f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
