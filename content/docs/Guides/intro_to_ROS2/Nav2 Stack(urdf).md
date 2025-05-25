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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3FW54D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFKOxMN1gcVDqQuX5SPONF2i5WEAIasWqLS%2FvcN3oSB3AiA7FEN3I8yAqJYmUuC0wrMEMn6hJUq1iuJNAaNV8M%2Fyuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMiq0XBXM9ojnIEB3SKtwDDVe9cN%2BoqxUYKbHpkZQsGZTIG%2BACzFcoevhj7t16wAGkZQXgnOuRMQnOqJ%2B0gPkDP%2B8jbcKE%2BArvpQKbM%2B0P7fEr%2BZ9UhaHDmlYoTrAaUX2xmQJU1Qwv%2BVB4ZCp2IOcobFnhwIDuiD%2FgjMt4iQChwqE%2BaLcOhywH0Doy8AjuOnMb772h8zj10dd4qaP1uBoP5L%2BCcrI6DVxU2%2F%2BDKrrkpzRt7%2BliqXvDMHoqdtIpYZcH%2BpWzz4WInVGfmDZlqKWKAbmkTJUwJU%2Bij77uhaZ%2FS33%2FdEwjeBURvyJ1Cgvhy0oquaXvqZpt7Cyq5IaLalvbw%2FO5R4ZNVzqxSQ42WIxvIHNXUHG1pUlW0WAh%2B1dDmIjhqLpyrnaQVuXN%2F19nW503GjDwRrtZb5IjcTI0zQ7rrK9HIvjeCi0EwBjHa%2FYMRwu63hhVJlkWFhgueNhmpju80IRMn%2FzYRjv2IWGQSyFmm7gAmFWoAhUKuylvhIJQ5i15phTKdDort1q14KUZPxAOHAjmbn31fWiiINDXmIIzmUClsHagR5JjoPDHKlZRxnmdct4rnK7JgfXJwrfXsLcFjtXS%2FyNMH1cPZ6EDLQghZ33vXBvWEM6kjZW75Cd3GDQ4263IMo7VbOL7YI4w9%2FTNwQY6pgH1AQP77eCaNxGleA1u0IcNGzyUa9%2FFwDnSBlsN6JzumPa1oTXYgJygPfDZoBt6ytruK4l5S8rL%2FcYzRtsWr0dfBo03NGlMFMMDzfpwU52vQWMWtcphgS803BVxD%2FtAsw6NgmxH%2BJxqfkoYGeDUbBwfzogpOVpqbrnpc22WiIzj1vEMMNUwd9YBzon4ZtM%2B7zepaoTe%2BnSoN3wmUqp9qy3br%2BSthw5Y&X-Amz-Signature=b55784fd79418ac281054502c68dc0d5551eeec925cebf17bd0d51606c700971&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3FW54D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFKOxMN1gcVDqQuX5SPONF2i5WEAIasWqLS%2FvcN3oSB3AiA7FEN3I8yAqJYmUuC0wrMEMn6hJUq1iuJNAaNV8M%2Fyuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMiq0XBXM9ojnIEB3SKtwDDVe9cN%2BoqxUYKbHpkZQsGZTIG%2BACzFcoevhj7t16wAGkZQXgnOuRMQnOqJ%2B0gPkDP%2B8jbcKE%2BArvpQKbM%2B0P7fEr%2BZ9UhaHDmlYoTrAaUX2xmQJU1Qwv%2BVB4ZCp2IOcobFnhwIDuiD%2FgjMt4iQChwqE%2BaLcOhywH0Doy8AjuOnMb772h8zj10dd4qaP1uBoP5L%2BCcrI6DVxU2%2F%2BDKrrkpzRt7%2BliqXvDMHoqdtIpYZcH%2BpWzz4WInVGfmDZlqKWKAbmkTJUwJU%2Bij77uhaZ%2FS33%2FdEwjeBURvyJ1Cgvhy0oquaXvqZpt7Cyq5IaLalvbw%2FO5R4ZNVzqxSQ42WIxvIHNXUHG1pUlW0WAh%2B1dDmIjhqLpyrnaQVuXN%2F19nW503GjDwRrtZb5IjcTI0zQ7rrK9HIvjeCi0EwBjHa%2FYMRwu63hhVJlkWFhgueNhmpju80IRMn%2FzYRjv2IWGQSyFmm7gAmFWoAhUKuylvhIJQ5i15phTKdDort1q14KUZPxAOHAjmbn31fWiiINDXmIIzmUClsHagR5JjoPDHKlZRxnmdct4rnK7JgfXJwrfXsLcFjtXS%2FyNMH1cPZ6EDLQghZ33vXBvWEM6kjZW75Cd3GDQ4263IMo7VbOL7YI4w9%2FTNwQY6pgH1AQP77eCaNxGleA1u0IcNGzyUa9%2FFwDnSBlsN6JzumPa1oTXYgJygPfDZoBt6ytruK4l5S8rL%2FcYzRtsWr0dfBo03NGlMFMMDzfpwU52vQWMWtcphgS803BVxD%2FtAsw6NgmxH%2BJxqfkoYGeDUbBwfzogpOVpqbrnpc22WiIzj1vEMMNUwd9YBzon4ZtM%2B7zepaoTe%2BnSoN3wmUqp9qy3br%2BSthw5Y&X-Amz-Signature=9210cb4d272ed845d81d3ffc21598e6f40f84903275ac0f9da4a67b52959c24c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3FW54D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFKOxMN1gcVDqQuX5SPONF2i5WEAIasWqLS%2FvcN3oSB3AiA7FEN3I8yAqJYmUuC0wrMEMn6hJUq1iuJNAaNV8M%2Fyuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMiq0XBXM9ojnIEB3SKtwDDVe9cN%2BoqxUYKbHpkZQsGZTIG%2BACzFcoevhj7t16wAGkZQXgnOuRMQnOqJ%2B0gPkDP%2B8jbcKE%2BArvpQKbM%2B0P7fEr%2BZ9UhaHDmlYoTrAaUX2xmQJU1Qwv%2BVB4ZCp2IOcobFnhwIDuiD%2FgjMt4iQChwqE%2BaLcOhywH0Doy8AjuOnMb772h8zj10dd4qaP1uBoP5L%2BCcrI6DVxU2%2F%2BDKrrkpzRt7%2BliqXvDMHoqdtIpYZcH%2BpWzz4WInVGfmDZlqKWKAbmkTJUwJU%2Bij77uhaZ%2FS33%2FdEwjeBURvyJ1Cgvhy0oquaXvqZpt7Cyq5IaLalvbw%2FO5R4ZNVzqxSQ42WIxvIHNXUHG1pUlW0WAh%2B1dDmIjhqLpyrnaQVuXN%2F19nW503GjDwRrtZb5IjcTI0zQ7rrK9HIvjeCi0EwBjHa%2FYMRwu63hhVJlkWFhgueNhmpju80IRMn%2FzYRjv2IWGQSyFmm7gAmFWoAhUKuylvhIJQ5i15phTKdDort1q14KUZPxAOHAjmbn31fWiiINDXmIIzmUClsHagR5JjoPDHKlZRxnmdct4rnK7JgfXJwrfXsLcFjtXS%2FyNMH1cPZ6EDLQghZ33vXBvWEM6kjZW75Cd3GDQ4263IMo7VbOL7YI4w9%2FTNwQY6pgH1AQP77eCaNxGleA1u0IcNGzyUa9%2FFwDnSBlsN6JzumPa1oTXYgJygPfDZoBt6ytruK4l5S8rL%2FcYzRtsWr0dfBo03NGlMFMMDzfpwU52vQWMWtcphgS803BVxD%2FtAsw6NgmxH%2BJxqfkoYGeDUbBwfzogpOVpqbrnpc22WiIzj1vEMMNUwd9YBzon4ZtM%2B7zepaoTe%2BnSoN3wmUqp9qy3br%2BSthw5Y&X-Amz-Signature=a355e9745c384f35aeee324239dffb269373e3d80ba8592267af191d1802f30a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3FW54D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFKOxMN1gcVDqQuX5SPONF2i5WEAIasWqLS%2FvcN3oSB3AiA7FEN3I8yAqJYmUuC0wrMEMn6hJUq1iuJNAaNV8M%2Fyuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMiq0XBXM9ojnIEB3SKtwDDVe9cN%2BoqxUYKbHpkZQsGZTIG%2BACzFcoevhj7t16wAGkZQXgnOuRMQnOqJ%2B0gPkDP%2B8jbcKE%2BArvpQKbM%2B0P7fEr%2BZ9UhaHDmlYoTrAaUX2xmQJU1Qwv%2BVB4ZCp2IOcobFnhwIDuiD%2FgjMt4iQChwqE%2BaLcOhywH0Doy8AjuOnMb772h8zj10dd4qaP1uBoP5L%2BCcrI6DVxU2%2F%2BDKrrkpzRt7%2BliqXvDMHoqdtIpYZcH%2BpWzz4WInVGfmDZlqKWKAbmkTJUwJU%2Bij77uhaZ%2FS33%2FdEwjeBURvyJ1Cgvhy0oquaXvqZpt7Cyq5IaLalvbw%2FO5R4ZNVzqxSQ42WIxvIHNXUHG1pUlW0WAh%2B1dDmIjhqLpyrnaQVuXN%2F19nW503GjDwRrtZb5IjcTI0zQ7rrK9HIvjeCi0EwBjHa%2FYMRwu63hhVJlkWFhgueNhmpju80IRMn%2FzYRjv2IWGQSyFmm7gAmFWoAhUKuylvhIJQ5i15phTKdDort1q14KUZPxAOHAjmbn31fWiiINDXmIIzmUClsHagR5JjoPDHKlZRxnmdct4rnK7JgfXJwrfXsLcFjtXS%2FyNMH1cPZ6EDLQghZ33vXBvWEM6kjZW75Cd3GDQ4263IMo7VbOL7YI4w9%2FTNwQY6pgH1AQP77eCaNxGleA1u0IcNGzyUa9%2FFwDnSBlsN6JzumPa1oTXYgJygPfDZoBt6ytruK4l5S8rL%2FcYzRtsWr0dfBo03NGlMFMMDzfpwU52vQWMWtcphgS803BVxD%2FtAsw6NgmxH%2BJxqfkoYGeDUbBwfzogpOVpqbrnpc22WiIzj1vEMMNUwd9YBzon4ZtM%2B7zepaoTe%2BnSoN3wmUqp9qy3br%2BSthw5Y&X-Amz-Signature=1cf667a67160808d04737278c982047c213e8c6c582094c788eeb143c26db3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3FW54D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFKOxMN1gcVDqQuX5SPONF2i5WEAIasWqLS%2FvcN3oSB3AiA7FEN3I8yAqJYmUuC0wrMEMn6hJUq1iuJNAaNV8M%2Fyuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMiq0XBXM9ojnIEB3SKtwDDVe9cN%2BoqxUYKbHpkZQsGZTIG%2BACzFcoevhj7t16wAGkZQXgnOuRMQnOqJ%2B0gPkDP%2B8jbcKE%2BArvpQKbM%2B0P7fEr%2BZ9UhaHDmlYoTrAaUX2xmQJU1Qwv%2BVB4ZCp2IOcobFnhwIDuiD%2FgjMt4iQChwqE%2BaLcOhywH0Doy8AjuOnMb772h8zj10dd4qaP1uBoP5L%2BCcrI6DVxU2%2F%2BDKrrkpzRt7%2BliqXvDMHoqdtIpYZcH%2BpWzz4WInVGfmDZlqKWKAbmkTJUwJU%2Bij77uhaZ%2FS33%2FdEwjeBURvyJ1Cgvhy0oquaXvqZpt7Cyq5IaLalvbw%2FO5R4ZNVzqxSQ42WIxvIHNXUHG1pUlW0WAh%2B1dDmIjhqLpyrnaQVuXN%2F19nW503GjDwRrtZb5IjcTI0zQ7rrK9HIvjeCi0EwBjHa%2FYMRwu63hhVJlkWFhgueNhmpju80IRMn%2FzYRjv2IWGQSyFmm7gAmFWoAhUKuylvhIJQ5i15phTKdDort1q14KUZPxAOHAjmbn31fWiiINDXmIIzmUClsHagR5JjoPDHKlZRxnmdct4rnK7JgfXJwrfXsLcFjtXS%2FyNMH1cPZ6EDLQghZ33vXBvWEM6kjZW75Cd3GDQ4263IMo7VbOL7YI4w9%2FTNwQY6pgH1AQP77eCaNxGleA1u0IcNGzyUa9%2FFwDnSBlsN6JzumPa1oTXYgJygPfDZoBt6ytruK4l5S8rL%2FcYzRtsWr0dfBo03NGlMFMMDzfpwU52vQWMWtcphgS803BVxD%2FtAsw6NgmxH%2BJxqfkoYGeDUbBwfzogpOVpqbrnpc22WiIzj1vEMMNUwd9YBzon4ZtM%2B7zepaoTe%2BnSoN3wmUqp9qy3br%2BSthw5Y&X-Amz-Signature=c86376515049cb0ded947421c16268f5dbdfc859c57f6a00ac3428b42e164743&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3FW54D%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFKOxMN1gcVDqQuX5SPONF2i5WEAIasWqLS%2FvcN3oSB3AiA7FEN3I8yAqJYmUuC0wrMEMn6hJUq1iuJNAaNV8M%2Fyuyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMiq0XBXM9ojnIEB3SKtwDDVe9cN%2BoqxUYKbHpkZQsGZTIG%2BACzFcoevhj7t16wAGkZQXgnOuRMQnOqJ%2B0gPkDP%2B8jbcKE%2BArvpQKbM%2B0P7fEr%2BZ9UhaHDmlYoTrAaUX2xmQJU1Qwv%2BVB4ZCp2IOcobFnhwIDuiD%2FgjMt4iQChwqE%2BaLcOhywH0Doy8AjuOnMb772h8zj10dd4qaP1uBoP5L%2BCcrI6DVxU2%2F%2BDKrrkpzRt7%2BliqXvDMHoqdtIpYZcH%2BpWzz4WInVGfmDZlqKWKAbmkTJUwJU%2Bij77uhaZ%2FS33%2FdEwjeBURvyJ1Cgvhy0oquaXvqZpt7Cyq5IaLalvbw%2FO5R4ZNVzqxSQ42WIxvIHNXUHG1pUlW0WAh%2B1dDmIjhqLpyrnaQVuXN%2F19nW503GjDwRrtZb5IjcTI0zQ7rrK9HIvjeCi0EwBjHa%2FYMRwu63hhVJlkWFhgueNhmpju80IRMn%2FzYRjv2IWGQSyFmm7gAmFWoAhUKuylvhIJQ5i15phTKdDort1q14KUZPxAOHAjmbn31fWiiINDXmIIzmUClsHagR5JjoPDHKlZRxnmdct4rnK7JgfXJwrfXsLcFjtXS%2FyNMH1cPZ6EDLQghZ33vXBvWEM6kjZW75Cd3GDQ4263IMo7VbOL7YI4w9%2FTNwQY6pgH1AQP77eCaNxGleA1u0IcNGzyUa9%2FFwDnSBlsN6JzumPa1oTXYgJygPfDZoBt6ytruK4l5S8rL%2FcYzRtsWr0dfBo03NGlMFMMDzfpwU52vQWMWtcphgS803BVxD%2FtAsw6NgmxH%2BJxqfkoYGeDUbBwfzogpOVpqbrnpc22WiIzj1vEMMNUwd9YBzon4ZtM%2B7zepaoTe%2BnSoN3wmUqp9qy3br%2BSthw5Y&X-Amz-Signature=733771925ac0d9d7078a46f8aa578c3412eedf38d69a81acf31d9392aae339b1&X-Amz-SignedHeaders=host&x-id=GetObject)
