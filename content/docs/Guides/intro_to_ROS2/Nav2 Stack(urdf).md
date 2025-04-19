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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFHJKNO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDnf6Vibvx0VfbNGZ0JxV54Y5nfdPAcqOG57YfGU%2FHAJAIhAIv76ThspWfxSIlOO%2BQifI7GaXznce8jY%2Flq2gkdGay7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkjviHHnhk0El7kGAq3AOIDsefL6WkT6M9rnyed3qyXuTKwAyiIcu2FdXVOXWN5PZo1ndgA9jLujKujUcwAkkbYCwsm0GRm7K%2FaWgMFp6Nc%2FzihMCTaKzGOUCqJcsVLSyTATGhL4%2FcDyCVc4vKNi8TJrJpn2XnLwksI0h16%2Fcl40JpY%2BAaC3WAXzP0U02TAT4Y5pQgAESueR9LO6erU6f6j7PaAglRSTbdZZN%2F4wtP7kHbmTGlmMd%2BCPjr4P4JvggfzLfPFR2ddiUVd0filQimYCxgbRBe%2BkfE20eVB%2BEwBYpuIUV8QNWVrg06CIUZwp06sHfnrL0i24hHk3bfdyJtQ8HEJ8aA8kRvT6yLsCFeIpNWr5FzySYJN0aIV0TUxKWpvZ6QNzwPeMLXAjr3Lnm3oUn5CSf%2FcsqwFpN42IPhjgueUET2SjRMQZeIKraeQ8K3k8In3c3jmEw9il4eUgw1QuRUnZkpgXhsdQCoeYo1GFQ0R0vUoLNJNTcWrn7luyZgc9ZVAVAOgOd5HV4IFDKgOi%2FRG9Tt93BcIRNDQYecSHXgSufaAOh5o8BXcev8zYMusMa9TAEaJyXfYVsQih4OsKpueG8wU58WBg1ks38CDgderfOFC7w3RhGuTNd4g1noVDot61RnEtIhnzD03o7ABjqkAZczWMY1Qv4WYOCKEVbe8ic%2Fyc0z7gnWvpqck60KkRJCkksoCPZgag6RxiESSFV4LH7QL4EeIFWqqE5oFnEh9Y8RqpDXcxtlQIz4mQ6VKNuK%2Fe6%2BqBaCXbn9m9NsZs%2BWqnGYga4co%2BCKd%2BuG%2FtDpbkNu9fqJIZO1yjIPMVidglpzS3ZgkDvhBkMaQp5G8%2F%2BBLxZhZCzSH4d6Q1%2Fe%2BZ%2Fc1XdwJa61&X-Amz-Signature=677705b8503c18620acf221348c4fd91356a2f6181901a68047e14605553c09f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFHJKNO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDnf6Vibvx0VfbNGZ0JxV54Y5nfdPAcqOG57YfGU%2FHAJAIhAIv76ThspWfxSIlOO%2BQifI7GaXznce8jY%2Flq2gkdGay7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkjviHHnhk0El7kGAq3AOIDsefL6WkT6M9rnyed3qyXuTKwAyiIcu2FdXVOXWN5PZo1ndgA9jLujKujUcwAkkbYCwsm0GRm7K%2FaWgMFp6Nc%2FzihMCTaKzGOUCqJcsVLSyTATGhL4%2FcDyCVc4vKNi8TJrJpn2XnLwksI0h16%2Fcl40JpY%2BAaC3WAXzP0U02TAT4Y5pQgAESueR9LO6erU6f6j7PaAglRSTbdZZN%2F4wtP7kHbmTGlmMd%2BCPjr4P4JvggfzLfPFR2ddiUVd0filQimYCxgbRBe%2BkfE20eVB%2BEwBYpuIUV8QNWVrg06CIUZwp06sHfnrL0i24hHk3bfdyJtQ8HEJ8aA8kRvT6yLsCFeIpNWr5FzySYJN0aIV0TUxKWpvZ6QNzwPeMLXAjr3Lnm3oUn5CSf%2FcsqwFpN42IPhjgueUET2SjRMQZeIKraeQ8K3k8In3c3jmEw9il4eUgw1QuRUnZkpgXhsdQCoeYo1GFQ0R0vUoLNJNTcWrn7luyZgc9ZVAVAOgOd5HV4IFDKgOi%2FRG9Tt93BcIRNDQYecSHXgSufaAOh5o8BXcev8zYMusMa9TAEaJyXfYVsQih4OsKpueG8wU58WBg1ks38CDgderfOFC7w3RhGuTNd4g1noVDot61RnEtIhnzD03o7ABjqkAZczWMY1Qv4WYOCKEVbe8ic%2Fyc0z7gnWvpqck60KkRJCkksoCPZgag6RxiESSFV4LH7QL4EeIFWqqE5oFnEh9Y8RqpDXcxtlQIz4mQ6VKNuK%2Fe6%2BqBaCXbn9m9NsZs%2BWqnGYga4co%2BCKd%2BuG%2FtDpbkNu9fqJIZO1yjIPMVidglpzS3ZgkDvhBkMaQp5G8%2F%2BBLxZhZCzSH4d6Q1%2Fe%2BZ%2Fc1XdwJa61&X-Amz-Signature=bec0b9e16650c680b74053c4be64f44805d90ae5aef45e32bca5a18512f332fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFHJKNO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDnf6Vibvx0VfbNGZ0JxV54Y5nfdPAcqOG57YfGU%2FHAJAIhAIv76ThspWfxSIlOO%2BQifI7GaXznce8jY%2Flq2gkdGay7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkjviHHnhk0El7kGAq3AOIDsefL6WkT6M9rnyed3qyXuTKwAyiIcu2FdXVOXWN5PZo1ndgA9jLujKujUcwAkkbYCwsm0GRm7K%2FaWgMFp6Nc%2FzihMCTaKzGOUCqJcsVLSyTATGhL4%2FcDyCVc4vKNi8TJrJpn2XnLwksI0h16%2Fcl40JpY%2BAaC3WAXzP0U02TAT4Y5pQgAESueR9LO6erU6f6j7PaAglRSTbdZZN%2F4wtP7kHbmTGlmMd%2BCPjr4P4JvggfzLfPFR2ddiUVd0filQimYCxgbRBe%2BkfE20eVB%2BEwBYpuIUV8QNWVrg06CIUZwp06sHfnrL0i24hHk3bfdyJtQ8HEJ8aA8kRvT6yLsCFeIpNWr5FzySYJN0aIV0TUxKWpvZ6QNzwPeMLXAjr3Lnm3oUn5CSf%2FcsqwFpN42IPhjgueUET2SjRMQZeIKraeQ8K3k8In3c3jmEw9il4eUgw1QuRUnZkpgXhsdQCoeYo1GFQ0R0vUoLNJNTcWrn7luyZgc9ZVAVAOgOd5HV4IFDKgOi%2FRG9Tt93BcIRNDQYecSHXgSufaAOh5o8BXcev8zYMusMa9TAEaJyXfYVsQih4OsKpueG8wU58WBg1ks38CDgderfOFC7w3RhGuTNd4g1noVDot61RnEtIhnzD03o7ABjqkAZczWMY1Qv4WYOCKEVbe8ic%2Fyc0z7gnWvpqck60KkRJCkksoCPZgag6RxiESSFV4LH7QL4EeIFWqqE5oFnEh9Y8RqpDXcxtlQIz4mQ6VKNuK%2Fe6%2BqBaCXbn9m9NsZs%2BWqnGYga4co%2BCKd%2BuG%2FtDpbkNu9fqJIZO1yjIPMVidglpzS3ZgkDvhBkMaQp5G8%2F%2BBLxZhZCzSH4d6Q1%2Fe%2BZ%2Fc1XdwJa61&X-Amz-Signature=a9367c11b45e9c07e1cee8a63ab968430afa5c229fc311bc72b478001cdf239c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFHJKNO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDnf6Vibvx0VfbNGZ0JxV54Y5nfdPAcqOG57YfGU%2FHAJAIhAIv76ThspWfxSIlOO%2BQifI7GaXznce8jY%2Flq2gkdGay7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkjviHHnhk0El7kGAq3AOIDsefL6WkT6M9rnyed3qyXuTKwAyiIcu2FdXVOXWN5PZo1ndgA9jLujKujUcwAkkbYCwsm0GRm7K%2FaWgMFp6Nc%2FzihMCTaKzGOUCqJcsVLSyTATGhL4%2FcDyCVc4vKNi8TJrJpn2XnLwksI0h16%2Fcl40JpY%2BAaC3WAXzP0U02TAT4Y5pQgAESueR9LO6erU6f6j7PaAglRSTbdZZN%2F4wtP7kHbmTGlmMd%2BCPjr4P4JvggfzLfPFR2ddiUVd0filQimYCxgbRBe%2BkfE20eVB%2BEwBYpuIUV8QNWVrg06CIUZwp06sHfnrL0i24hHk3bfdyJtQ8HEJ8aA8kRvT6yLsCFeIpNWr5FzySYJN0aIV0TUxKWpvZ6QNzwPeMLXAjr3Lnm3oUn5CSf%2FcsqwFpN42IPhjgueUET2SjRMQZeIKraeQ8K3k8In3c3jmEw9il4eUgw1QuRUnZkpgXhsdQCoeYo1GFQ0R0vUoLNJNTcWrn7luyZgc9ZVAVAOgOd5HV4IFDKgOi%2FRG9Tt93BcIRNDQYecSHXgSufaAOh5o8BXcev8zYMusMa9TAEaJyXfYVsQih4OsKpueG8wU58WBg1ks38CDgderfOFC7w3RhGuTNd4g1noVDot61RnEtIhnzD03o7ABjqkAZczWMY1Qv4WYOCKEVbe8ic%2Fyc0z7gnWvpqck60KkRJCkksoCPZgag6RxiESSFV4LH7QL4EeIFWqqE5oFnEh9Y8RqpDXcxtlQIz4mQ6VKNuK%2Fe6%2BqBaCXbn9m9NsZs%2BWqnGYga4co%2BCKd%2BuG%2FtDpbkNu9fqJIZO1yjIPMVidglpzS3ZgkDvhBkMaQp5G8%2F%2BBLxZhZCzSH4d6Q1%2Fe%2BZ%2Fc1XdwJa61&X-Amz-Signature=43a62a1b9a356b3e65e0b250c5f952cfde20d980c562111c20922436e8edabfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFHJKNO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDnf6Vibvx0VfbNGZ0JxV54Y5nfdPAcqOG57YfGU%2FHAJAIhAIv76ThspWfxSIlOO%2BQifI7GaXznce8jY%2Flq2gkdGay7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkjviHHnhk0El7kGAq3AOIDsefL6WkT6M9rnyed3qyXuTKwAyiIcu2FdXVOXWN5PZo1ndgA9jLujKujUcwAkkbYCwsm0GRm7K%2FaWgMFp6Nc%2FzihMCTaKzGOUCqJcsVLSyTATGhL4%2FcDyCVc4vKNi8TJrJpn2XnLwksI0h16%2Fcl40JpY%2BAaC3WAXzP0U02TAT4Y5pQgAESueR9LO6erU6f6j7PaAglRSTbdZZN%2F4wtP7kHbmTGlmMd%2BCPjr4P4JvggfzLfPFR2ddiUVd0filQimYCxgbRBe%2BkfE20eVB%2BEwBYpuIUV8QNWVrg06CIUZwp06sHfnrL0i24hHk3bfdyJtQ8HEJ8aA8kRvT6yLsCFeIpNWr5FzySYJN0aIV0TUxKWpvZ6QNzwPeMLXAjr3Lnm3oUn5CSf%2FcsqwFpN42IPhjgueUET2SjRMQZeIKraeQ8K3k8In3c3jmEw9il4eUgw1QuRUnZkpgXhsdQCoeYo1GFQ0R0vUoLNJNTcWrn7luyZgc9ZVAVAOgOd5HV4IFDKgOi%2FRG9Tt93BcIRNDQYecSHXgSufaAOh5o8BXcev8zYMusMa9TAEaJyXfYVsQih4OsKpueG8wU58WBg1ks38CDgderfOFC7w3RhGuTNd4g1noVDot61RnEtIhnzD03o7ABjqkAZczWMY1Qv4WYOCKEVbe8ic%2Fyc0z7gnWvpqck60KkRJCkksoCPZgag6RxiESSFV4LH7QL4EeIFWqqE5oFnEh9Y8RqpDXcxtlQIz4mQ6VKNuK%2Fe6%2BqBaCXbn9m9NsZs%2BWqnGYga4co%2BCKd%2BuG%2FtDpbkNu9fqJIZO1yjIPMVidglpzS3ZgkDvhBkMaQp5G8%2F%2BBLxZhZCzSH4d6Q1%2Fe%2BZ%2Fc1XdwJa61&X-Amz-Signature=fe923935b268dc85761f25616d8ba74a6274a89a78a14377c26202129663cbaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFHJKNO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDnf6Vibvx0VfbNGZ0JxV54Y5nfdPAcqOG57YfGU%2FHAJAIhAIv76ThspWfxSIlOO%2BQifI7GaXznce8jY%2Flq2gkdGay7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkjviHHnhk0El7kGAq3AOIDsefL6WkT6M9rnyed3qyXuTKwAyiIcu2FdXVOXWN5PZo1ndgA9jLujKujUcwAkkbYCwsm0GRm7K%2FaWgMFp6Nc%2FzihMCTaKzGOUCqJcsVLSyTATGhL4%2FcDyCVc4vKNi8TJrJpn2XnLwksI0h16%2Fcl40JpY%2BAaC3WAXzP0U02TAT4Y5pQgAESueR9LO6erU6f6j7PaAglRSTbdZZN%2F4wtP7kHbmTGlmMd%2BCPjr4P4JvggfzLfPFR2ddiUVd0filQimYCxgbRBe%2BkfE20eVB%2BEwBYpuIUV8QNWVrg06CIUZwp06sHfnrL0i24hHk3bfdyJtQ8HEJ8aA8kRvT6yLsCFeIpNWr5FzySYJN0aIV0TUxKWpvZ6QNzwPeMLXAjr3Lnm3oUn5CSf%2FcsqwFpN42IPhjgueUET2SjRMQZeIKraeQ8K3k8In3c3jmEw9il4eUgw1QuRUnZkpgXhsdQCoeYo1GFQ0R0vUoLNJNTcWrn7luyZgc9ZVAVAOgOd5HV4IFDKgOi%2FRG9Tt93BcIRNDQYecSHXgSufaAOh5o8BXcev8zYMusMa9TAEaJyXfYVsQih4OsKpueG8wU58WBg1ks38CDgderfOFC7w3RhGuTNd4g1noVDot61RnEtIhnzD03o7ABjqkAZczWMY1Qv4WYOCKEVbe8ic%2Fyc0z7gnWvpqck60KkRJCkksoCPZgag6RxiESSFV4LH7QL4EeIFWqqE5oFnEh9Y8RqpDXcxtlQIz4mQ6VKNuK%2Fe6%2BqBaCXbn9m9NsZs%2BWqnGYga4co%2BCKd%2BuG%2FtDpbkNu9fqJIZO1yjIPMVidglpzS3ZgkDvhBkMaQp5G8%2F%2BBLxZhZCzSH4d6Q1%2Fe%2BZ%2Fc1XdwJa61&X-Amz-Signature=d60b1fb20d919334c45658ed1cb295c0be78e91c16b66fa92cc3e3b581e0fa80&X-Amz-SignedHeaders=host&x-id=GetObject)
