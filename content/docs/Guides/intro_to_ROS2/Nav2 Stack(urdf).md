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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNHCZOC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HXUMuMUY%2F0xi%2BlwhZCkqLxmdR%2B3OA7ly7qNaZajR9wIhAP%2FV5eVIul%2B6QZ0BYpPZH9F62U8GjweaPvmOwhqUa9FBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CyY8oB4z9FdrUVUq3ANyxNJHwhPhxU8Sg2Z1i1QUgNVDAkRQVaa3LSeShlEQURjfRGBZ3nucYL7HaK4D9mc6pv5EcJSn5Ikpl9kk%2Br9cM6xWIV024pw5L7C29su9Q6pS4nWiIBiP3ipZp76ZOPBr8osXipOs6MMcgKIK4GKOB2Pxl%2FFhAwnLWn1mXSgGlNfs5qNVw%2BnUu6J3qKlG7n13xtcVd0z4ttBHwEI1q609dNmhgAmPrK3zIFFR3suB%2Bh5UvabzaFVNj12DMnCPf%2BJ3Lv%2BMYGZ88caYJmc7g3uulduwfNDmL5Sd8Gh6PG17j%2BQurgnubu7XsH6lNDVtXFaEJTfAfzgRk9ArC%2B8BBbdb4OY0DG9VKiY%2Fa3Ux3aAlOnzx6O6fLlDvOQ8mB9PA1haHVwSRyDN8TUw23BZcNmblOxokggov%2Bm2FeNQB1WsOrVkjCs0UJ9Mk2y9TuvRKzq%2FOvrJVFu8kiypTRaWPhM37%2FQUKas7%2FpVN4mthW329q357Ed0lk1i6B9do3eAUPNmOq32680Nfz9mjGTGm%2Bj%2FHSe6YwJWmYpU5A9AuYfby05TyuL27UCNeUdEU9ablJVsptx8BDK%2FgrQqXAlNc4hVcZALQTFHjBOIOBC1YrlYnrS0hW7gC02PBadELIeDC0tJPDBjqkAVAOdoSrsd8vJMR2dCHg14x3s7sLSW33uPks5QI7O1soSjFMDdZdqtSPG9WB6xPF05adXbv3nZnLcfJ6rycJVKyIVMW%2B4JwYM2eZhXiKThC%2FokmZMDqnADAp9SMITbta0U666tENFRm7IVuQYnXuWvBMbD2FrIFXiKTw9HoIo7UVp4c4ds4oSII7dK35SPiQRIXrwuL%2BreCrGxo9PWLmq14bwwIi&X-Amz-Signature=86cd609490db33655d3ba4b4e67532b88ca60761d76adace181f0424a565a684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNHCZOC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HXUMuMUY%2F0xi%2BlwhZCkqLxmdR%2B3OA7ly7qNaZajR9wIhAP%2FV5eVIul%2B6QZ0BYpPZH9F62U8GjweaPvmOwhqUa9FBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CyY8oB4z9FdrUVUq3ANyxNJHwhPhxU8Sg2Z1i1QUgNVDAkRQVaa3LSeShlEQURjfRGBZ3nucYL7HaK4D9mc6pv5EcJSn5Ikpl9kk%2Br9cM6xWIV024pw5L7C29su9Q6pS4nWiIBiP3ipZp76ZOPBr8osXipOs6MMcgKIK4GKOB2Pxl%2FFhAwnLWn1mXSgGlNfs5qNVw%2BnUu6J3qKlG7n13xtcVd0z4ttBHwEI1q609dNmhgAmPrK3zIFFR3suB%2Bh5UvabzaFVNj12DMnCPf%2BJ3Lv%2BMYGZ88caYJmc7g3uulduwfNDmL5Sd8Gh6PG17j%2BQurgnubu7XsH6lNDVtXFaEJTfAfzgRk9ArC%2B8BBbdb4OY0DG9VKiY%2Fa3Ux3aAlOnzx6O6fLlDvOQ8mB9PA1haHVwSRyDN8TUw23BZcNmblOxokggov%2Bm2FeNQB1WsOrVkjCs0UJ9Mk2y9TuvRKzq%2FOvrJVFu8kiypTRaWPhM37%2FQUKas7%2FpVN4mthW329q357Ed0lk1i6B9do3eAUPNmOq32680Nfz9mjGTGm%2Bj%2FHSe6YwJWmYpU5A9AuYfby05TyuL27UCNeUdEU9ablJVsptx8BDK%2FgrQqXAlNc4hVcZALQTFHjBOIOBC1YrlYnrS0hW7gC02PBadELIeDC0tJPDBjqkAVAOdoSrsd8vJMR2dCHg14x3s7sLSW33uPks5QI7O1soSjFMDdZdqtSPG9WB6xPF05adXbv3nZnLcfJ6rycJVKyIVMW%2B4JwYM2eZhXiKThC%2FokmZMDqnADAp9SMITbta0U666tENFRm7IVuQYnXuWvBMbD2FrIFXiKTw9HoIo7UVp4c4ds4oSII7dK35SPiQRIXrwuL%2BreCrGxo9PWLmq14bwwIi&X-Amz-Signature=71e976b2751359d38dd158ee4726736a09f2820e307e3a4f8e949e784a4be9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNHCZOC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HXUMuMUY%2F0xi%2BlwhZCkqLxmdR%2B3OA7ly7qNaZajR9wIhAP%2FV5eVIul%2B6QZ0BYpPZH9F62U8GjweaPvmOwhqUa9FBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CyY8oB4z9FdrUVUq3ANyxNJHwhPhxU8Sg2Z1i1QUgNVDAkRQVaa3LSeShlEQURjfRGBZ3nucYL7HaK4D9mc6pv5EcJSn5Ikpl9kk%2Br9cM6xWIV024pw5L7C29su9Q6pS4nWiIBiP3ipZp76ZOPBr8osXipOs6MMcgKIK4GKOB2Pxl%2FFhAwnLWn1mXSgGlNfs5qNVw%2BnUu6J3qKlG7n13xtcVd0z4ttBHwEI1q609dNmhgAmPrK3zIFFR3suB%2Bh5UvabzaFVNj12DMnCPf%2BJ3Lv%2BMYGZ88caYJmc7g3uulduwfNDmL5Sd8Gh6PG17j%2BQurgnubu7XsH6lNDVtXFaEJTfAfzgRk9ArC%2B8BBbdb4OY0DG9VKiY%2Fa3Ux3aAlOnzx6O6fLlDvOQ8mB9PA1haHVwSRyDN8TUw23BZcNmblOxokggov%2Bm2FeNQB1WsOrVkjCs0UJ9Mk2y9TuvRKzq%2FOvrJVFu8kiypTRaWPhM37%2FQUKas7%2FpVN4mthW329q357Ed0lk1i6B9do3eAUPNmOq32680Nfz9mjGTGm%2Bj%2FHSe6YwJWmYpU5A9AuYfby05TyuL27UCNeUdEU9ablJVsptx8BDK%2FgrQqXAlNc4hVcZALQTFHjBOIOBC1YrlYnrS0hW7gC02PBadELIeDC0tJPDBjqkAVAOdoSrsd8vJMR2dCHg14x3s7sLSW33uPks5QI7O1soSjFMDdZdqtSPG9WB6xPF05adXbv3nZnLcfJ6rycJVKyIVMW%2B4JwYM2eZhXiKThC%2FokmZMDqnADAp9SMITbta0U666tENFRm7IVuQYnXuWvBMbD2FrIFXiKTw9HoIo7UVp4c4ds4oSII7dK35SPiQRIXrwuL%2BreCrGxo9PWLmq14bwwIi&X-Amz-Signature=b79231d6f58a52104c69a863801795435251dc66f89c3d0909820a561e86a01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNHCZOC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HXUMuMUY%2F0xi%2BlwhZCkqLxmdR%2B3OA7ly7qNaZajR9wIhAP%2FV5eVIul%2B6QZ0BYpPZH9F62U8GjweaPvmOwhqUa9FBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CyY8oB4z9FdrUVUq3ANyxNJHwhPhxU8Sg2Z1i1QUgNVDAkRQVaa3LSeShlEQURjfRGBZ3nucYL7HaK4D9mc6pv5EcJSn5Ikpl9kk%2Br9cM6xWIV024pw5L7C29su9Q6pS4nWiIBiP3ipZp76ZOPBr8osXipOs6MMcgKIK4GKOB2Pxl%2FFhAwnLWn1mXSgGlNfs5qNVw%2BnUu6J3qKlG7n13xtcVd0z4ttBHwEI1q609dNmhgAmPrK3zIFFR3suB%2Bh5UvabzaFVNj12DMnCPf%2BJ3Lv%2BMYGZ88caYJmc7g3uulduwfNDmL5Sd8Gh6PG17j%2BQurgnubu7XsH6lNDVtXFaEJTfAfzgRk9ArC%2B8BBbdb4OY0DG9VKiY%2Fa3Ux3aAlOnzx6O6fLlDvOQ8mB9PA1haHVwSRyDN8TUw23BZcNmblOxokggov%2Bm2FeNQB1WsOrVkjCs0UJ9Mk2y9TuvRKzq%2FOvrJVFu8kiypTRaWPhM37%2FQUKas7%2FpVN4mthW329q357Ed0lk1i6B9do3eAUPNmOq32680Nfz9mjGTGm%2Bj%2FHSe6YwJWmYpU5A9AuYfby05TyuL27UCNeUdEU9ablJVsptx8BDK%2FgrQqXAlNc4hVcZALQTFHjBOIOBC1YrlYnrS0hW7gC02PBadELIeDC0tJPDBjqkAVAOdoSrsd8vJMR2dCHg14x3s7sLSW33uPks5QI7O1soSjFMDdZdqtSPG9WB6xPF05adXbv3nZnLcfJ6rycJVKyIVMW%2B4JwYM2eZhXiKThC%2FokmZMDqnADAp9SMITbta0U666tENFRm7IVuQYnXuWvBMbD2FrIFXiKTw9HoIo7UVp4c4ds4oSII7dK35SPiQRIXrwuL%2BreCrGxo9PWLmq14bwwIi&X-Amz-Signature=f2cc554e4f915a8a50186559e81253c478754bd5969c0a4825bde08c85fc3a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNHCZOC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HXUMuMUY%2F0xi%2BlwhZCkqLxmdR%2B3OA7ly7qNaZajR9wIhAP%2FV5eVIul%2B6QZ0BYpPZH9F62U8GjweaPvmOwhqUa9FBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CyY8oB4z9FdrUVUq3ANyxNJHwhPhxU8Sg2Z1i1QUgNVDAkRQVaa3LSeShlEQURjfRGBZ3nucYL7HaK4D9mc6pv5EcJSn5Ikpl9kk%2Br9cM6xWIV024pw5L7C29su9Q6pS4nWiIBiP3ipZp76ZOPBr8osXipOs6MMcgKIK4GKOB2Pxl%2FFhAwnLWn1mXSgGlNfs5qNVw%2BnUu6J3qKlG7n13xtcVd0z4ttBHwEI1q609dNmhgAmPrK3zIFFR3suB%2Bh5UvabzaFVNj12DMnCPf%2BJ3Lv%2BMYGZ88caYJmc7g3uulduwfNDmL5Sd8Gh6PG17j%2BQurgnubu7XsH6lNDVtXFaEJTfAfzgRk9ArC%2B8BBbdb4OY0DG9VKiY%2Fa3Ux3aAlOnzx6O6fLlDvOQ8mB9PA1haHVwSRyDN8TUw23BZcNmblOxokggov%2Bm2FeNQB1WsOrVkjCs0UJ9Mk2y9TuvRKzq%2FOvrJVFu8kiypTRaWPhM37%2FQUKas7%2FpVN4mthW329q357Ed0lk1i6B9do3eAUPNmOq32680Nfz9mjGTGm%2Bj%2FHSe6YwJWmYpU5A9AuYfby05TyuL27UCNeUdEU9ablJVsptx8BDK%2FgrQqXAlNc4hVcZALQTFHjBOIOBC1YrlYnrS0hW7gC02PBadELIeDC0tJPDBjqkAVAOdoSrsd8vJMR2dCHg14x3s7sLSW33uPks5QI7O1soSjFMDdZdqtSPG9WB6xPF05adXbv3nZnLcfJ6rycJVKyIVMW%2B4JwYM2eZhXiKThC%2FokmZMDqnADAp9SMITbta0U666tENFRm7IVuQYnXuWvBMbD2FrIFXiKTw9HoIo7UVp4c4ds4oSII7dK35SPiQRIXrwuL%2BreCrGxo9PWLmq14bwwIi&X-Amz-Signature=3ac28742b12d53130d3d31bcfd57bf5b4d72c7725fe07cf92d9d56f173dd8418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNHCZOC%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8HXUMuMUY%2F0xi%2BlwhZCkqLxmdR%2B3OA7ly7qNaZajR9wIhAP%2FV5eVIul%2B6QZ0BYpPZH9F62U8GjweaPvmOwhqUa9FBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CyY8oB4z9FdrUVUq3ANyxNJHwhPhxU8Sg2Z1i1QUgNVDAkRQVaa3LSeShlEQURjfRGBZ3nucYL7HaK4D9mc6pv5EcJSn5Ikpl9kk%2Br9cM6xWIV024pw5L7C29su9Q6pS4nWiIBiP3ipZp76ZOPBr8osXipOs6MMcgKIK4GKOB2Pxl%2FFhAwnLWn1mXSgGlNfs5qNVw%2BnUu6J3qKlG7n13xtcVd0z4ttBHwEI1q609dNmhgAmPrK3zIFFR3suB%2Bh5UvabzaFVNj12DMnCPf%2BJ3Lv%2BMYGZ88caYJmc7g3uulduwfNDmL5Sd8Gh6PG17j%2BQurgnubu7XsH6lNDVtXFaEJTfAfzgRk9ArC%2B8BBbdb4OY0DG9VKiY%2Fa3Ux3aAlOnzx6O6fLlDvOQ8mB9PA1haHVwSRyDN8TUw23BZcNmblOxokggov%2Bm2FeNQB1WsOrVkjCs0UJ9Mk2y9TuvRKzq%2FOvrJVFu8kiypTRaWPhM37%2FQUKas7%2FpVN4mthW329q357Ed0lk1i6B9do3eAUPNmOq32680Nfz9mjGTGm%2Bj%2FHSe6YwJWmYpU5A9AuYfby05TyuL27UCNeUdEU9ablJVsptx8BDK%2FgrQqXAlNc4hVcZALQTFHjBOIOBC1YrlYnrS0hW7gC02PBadELIeDC0tJPDBjqkAVAOdoSrsd8vJMR2dCHg14x3s7sLSW33uPks5QI7O1soSjFMDdZdqtSPG9WB6xPF05adXbv3nZnLcfJ6rycJVKyIVMW%2B4JwYM2eZhXiKThC%2FokmZMDqnADAp9SMITbta0U666tENFRm7IVuQYnXuWvBMbD2FrIFXiKTw9HoIo7UVp4c4ds4oSII7dK35SPiQRIXrwuL%2BreCrGxo9PWLmq14bwwIi&X-Amz-Signature=08098ce7ea3652041fddd0c9daa91fd311838a205353ba04cf8bfcd16a1bb904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
