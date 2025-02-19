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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGWHSPX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFu3cpGXfAGA%2Fg9%2BLEVk6rT1SEcfqCsQNQCScEFUjKyAiEAwpsUA0KKIeUYYL7nH10D5SzJa1FAuCEkBlPWRMWK3%2BIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMUMWBSZBDG3eHUkCrcA9pRL7knEtDIPkZ3pIwDpQ%2Fnvsyu1Qb5v%2F8GkpuCvFGKr3JqAnmYBGACTGLqB4ipcU1uo9mm5CyVGrOqSCRDPYIa4WRpFRHmA4IAEvWzuKZHHZo1%2Bn3pU2AbsONyQAhU5X%2FLLL%2Brf6s184C2aq0pj%2Fdhha8XrV1s3GwKqYqh4kT0w4EzUzNj36qgV%2FBZIpkCD1CfwYEcyl9bNNuoZMJIvQ7rXAk3i0xTpcRFd%2F50%2B0yeXA8d6N%2F2a%2FjTJuHhqdmlRCowOW0ZOiw30r0xcEjlfkQOxpfv77Xjeg0O78Y%2B8DcwC%2Fy159%2FL%2Bg7lJQiq4uNpS8xju81USyuSEQmgauy%2B3m9Z0939qfV18UBc%2Bl%2FtmKAbX9XzDfuogOSNBUaylHlkcvUuC%2Fnw%2Bo7erwyamYNPKeY0xpVAQSaK4eYYmyX6MKJBmi%2Bul0bsp%2BaKugwtVYM42WHd91Z3Q6zUwSp8yXQ51S0T9E7ItzcfOuzsro7EPEyL04AO%2BskFwMNQ7FxZ1oVQOZ84Qkp1pOFj0KTu7Bdd6L4KMRaxPncunBxnWEfzcD4vkyjf7oJlTcc5E45P%2B8CxLUS2HUlEYye5NggPCbFLxtcMZaA8sz0mbBzlAgfpYmPWvdxzwqRdDgwTihr2MJTT2L0GOqUBzhrLukbGPGyy%2B9u0x6BmUVmT7exMS6tnxbK7bjeEDHzCOGSx5dARW6qZxI7D4RWeHsQZ4a%2BOp6Vj4VMabDD1tfXNCtLi%2Bzn9wEiKimmTZS05JcpWAlKHZJ%2Fo4o2Kak7ELMZxQG8yiv7PxHbJsH2KRXcGCNVQKYgKPqx1L5TvJCowexd%2BUBKUBbt5rdqurU%2FcertlFMoNkpJ2TZsEkcGNnnvFQSLC&X-Amz-Signature=c1cc2e25b77c952d15f3c0de83a5e01cc9a25277a1f4dc9ecd6fd716a58358fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGWHSPX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFu3cpGXfAGA%2Fg9%2BLEVk6rT1SEcfqCsQNQCScEFUjKyAiEAwpsUA0KKIeUYYL7nH10D5SzJa1FAuCEkBlPWRMWK3%2BIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMUMWBSZBDG3eHUkCrcA9pRL7knEtDIPkZ3pIwDpQ%2Fnvsyu1Qb5v%2F8GkpuCvFGKr3JqAnmYBGACTGLqB4ipcU1uo9mm5CyVGrOqSCRDPYIa4WRpFRHmA4IAEvWzuKZHHZo1%2Bn3pU2AbsONyQAhU5X%2FLLL%2Brf6s184C2aq0pj%2Fdhha8XrV1s3GwKqYqh4kT0w4EzUzNj36qgV%2FBZIpkCD1CfwYEcyl9bNNuoZMJIvQ7rXAk3i0xTpcRFd%2F50%2B0yeXA8d6N%2F2a%2FjTJuHhqdmlRCowOW0ZOiw30r0xcEjlfkQOxpfv77Xjeg0O78Y%2B8DcwC%2Fy159%2FL%2Bg7lJQiq4uNpS8xju81USyuSEQmgauy%2B3m9Z0939qfV18UBc%2Bl%2FtmKAbX9XzDfuogOSNBUaylHlkcvUuC%2Fnw%2Bo7erwyamYNPKeY0xpVAQSaK4eYYmyX6MKJBmi%2Bul0bsp%2BaKugwtVYM42WHd91Z3Q6zUwSp8yXQ51S0T9E7ItzcfOuzsro7EPEyL04AO%2BskFwMNQ7FxZ1oVQOZ84Qkp1pOFj0KTu7Bdd6L4KMRaxPncunBxnWEfzcD4vkyjf7oJlTcc5E45P%2B8CxLUS2HUlEYye5NggPCbFLxtcMZaA8sz0mbBzlAgfpYmPWvdxzwqRdDgwTihr2MJTT2L0GOqUBzhrLukbGPGyy%2B9u0x6BmUVmT7exMS6tnxbK7bjeEDHzCOGSx5dARW6qZxI7D4RWeHsQZ4a%2BOp6Vj4VMabDD1tfXNCtLi%2Bzn9wEiKimmTZS05JcpWAlKHZJ%2Fo4o2Kak7ELMZxQG8yiv7PxHbJsH2KRXcGCNVQKYgKPqx1L5TvJCowexd%2BUBKUBbt5rdqurU%2FcertlFMoNkpJ2TZsEkcGNnnvFQSLC&X-Amz-Signature=b408ec46a5964e412db4806bff8662209d6026769cf9b9a344554060e9390442&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGWHSPX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFu3cpGXfAGA%2Fg9%2BLEVk6rT1SEcfqCsQNQCScEFUjKyAiEAwpsUA0KKIeUYYL7nH10D5SzJa1FAuCEkBlPWRMWK3%2BIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMUMWBSZBDG3eHUkCrcA9pRL7knEtDIPkZ3pIwDpQ%2Fnvsyu1Qb5v%2F8GkpuCvFGKr3JqAnmYBGACTGLqB4ipcU1uo9mm5CyVGrOqSCRDPYIa4WRpFRHmA4IAEvWzuKZHHZo1%2Bn3pU2AbsONyQAhU5X%2FLLL%2Brf6s184C2aq0pj%2Fdhha8XrV1s3GwKqYqh4kT0w4EzUzNj36qgV%2FBZIpkCD1CfwYEcyl9bNNuoZMJIvQ7rXAk3i0xTpcRFd%2F50%2B0yeXA8d6N%2F2a%2FjTJuHhqdmlRCowOW0ZOiw30r0xcEjlfkQOxpfv77Xjeg0O78Y%2B8DcwC%2Fy159%2FL%2Bg7lJQiq4uNpS8xju81USyuSEQmgauy%2B3m9Z0939qfV18UBc%2Bl%2FtmKAbX9XzDfuogOSNBUaylHlkcvUuC%2Fnw%2Bo7erwyamYNPKeY0xpVAQSaK4eYYmyX6MKJBmi%2Bul0bsp%2BaKugwtVYM42WHd91Z3Q6zUwSp8yXQ51S0T9E7ItzcfOuzsro7EPEyL04AO%2BskFwMNQ7FxZ1oVQOZ84Qkp1pOFj0KTu7Bdd6L4KMRaxPncunBxnWEfzcD4vkyjf7oJlTcc5E45P%2B8CxLUS2HUlEYye5NggPCbFLxtcMZaA8sz0mbBzlAgfpYmPWvdxzwqRdDgwTihr2MJTT2L0GOqUBzhrLukbGPGyy%2B9u0x6BmUVmT7exMS6tnxbK7bjeEDHzCOGSx5dARW6qZxI7D4RWeHsQZ4a%2BOp6Vj4VMabDD1tfXNCtLi%2Bzn9wEiKimmTZS05JcpWAlKHZJ%2Fo4o2Kak7ELMZxQG8yiv7PxHbJsH2KRXcGCNVQKYgKPqx1L5TvJCowexd%2BUBKUBbt5rdqurU%2FcertlFMoNkpJ2TZsEkcGNnnvFQSLC&X-Amz-Signature=eb5d6001428fdf698f4d1541b53034332c00453b877c17e0daa0fe88e30c3930&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGWHSPX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFu3cpGXfAGA%2Fg9%2BLEVk6rT1SEcfqCsQNQCScEFUjKyAiEAwpsUA0KKIeUYYL7nH10D5SzJa1FAuCEkBlPWRMWK3%2BIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMUMWBSZBDG3eHUkCrcA9pRL7knEtDIPkZ3pIwDpQ%2Fnvsyu1Qb5v%2F8GkpuCvFGKr3JqAnmYBGACTGLqB4ipcU1uo9mm5CyVGrOqSCRDPYIa4WRpFRHmA4IAEvWzuKZHHZo1%2Bn3pU2AbsONyQAhU5X%2FLLL%2Brf6s184C2aq0pj%2Fdhha8XrV1s3GwKqYqh4kT0w4EzUzNj36qgV%2FBZIpkCD1CfwYEcyl9bNNuoZMJIvQ7rXAk3i0xTpcRFd%2F50%2B0yeXA8d6N%2F2a%2FjTJuHhqdmlRCowOW0ZOiw30r0xcEjlfkQOxpfv77Xjeg0O78Y%2B8DcwC%2Fy159%2FL%2Bg7lJQiq4uNpS8xju81USyuSEQmgauy%2B3m9Z0939qfV18UBc%2Bl%2FtmKAbX9XzDfuogOSNBUaylHlkcvUuC%2Fnw%2Bo7erwyamYNPKeY0xpVAQSaK4eYYmyX6MKJBmi%2Bul0bsp%2BaKugwtVYM42WHd91Z3Q6zUwSp8yXQ51S0T9E7ItzcfOuzsro7EPEyL04AO%2BskFwMNQ7FxZ1oVQOZ84Qkp1pOFj0KTu7Bdd6L4KMRaxPncunBxnWEfzcD4vkyjf7oJlTcc5E45P%2B8CxLUS2HUlEYye5NggPCbFLxtcMZaA8sz0mbBzlAgfpYmPWvdxzwqRdDgwTihr2MJTT2L0GOqUBzhrLukbGPGyy%2B9u0x6BmUVmT7exMS6tnxbK7bjeEDHzCOGSx5dARW6qZxI7D4RWeHsQZ4a%2BOp6Vj4VMabDD1tfXNCtLi%2Bzn9wEiKimmTZS05JcpWAlKHZJ%2Fo4o2Kak7ELMZxQG8yiv7PxHbJsH2KRXcGCNVQKYgKPqx1L5TvJCowexd%2BUBKUBbt5rdqurU%2FcertlFMoNkpJ2TZsEkcGNnnvFQSLC&X-Amz-Signature=ccc4051c0d23c01238d381db05cb462f744cc097482e978321e6e7cf2f5fe857&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGWHSPX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFu3cpGXfAGA%2Fg9%2BLEVk6rT1SEcfqCsQNQCScEFUjKyAiEAwpsUA0KKIeUYYL7nH10D5SzJa1FAuCEkBlPWRMWK3%2BIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMUMWBSZBDG3eHUkCrcA9pRL7knEtDIPkZ3pIwDpQ%2Fnvsyu1Qb5v%2F8GkpuCvFGKr3JqAnmYBGACTGLqB4ipcU1uo9mm5CyVGrOqSCRDPYIa4WRpFRHmA4IAEvWzuKZHHZo1%2Bn3pU2AbsONyQAhU5X%2FLLL%2Brf6s184C2aq0pj%2Fdhha8XrV1s3GwKqYqh4kT0w4EzUzNj36qgV%2FBZIpkCD1CfwYEcyl9bNNuoZMJIvQ7rXAk3i0xTpcRFd%2F50%2B0yeXA8d6N%2F2a%2FjTJuHhqdmlRCowOW0ZOiw30r0xcEjlfkQOxpfv77Xjeg0O78Y%2B8DcwC%2Fy159%2FL%2Bg7lJQiq4uNpS8xju81USyuSEQmgauy%2B3m9Z0939qfV18UBc%2Bl%2FtmKAbX9XzDfuogOSNBUaylHlkcvUuC%2Fnw%2Bo7erwyamYNPKeY0xpVAQSaK4eYYmyX6MKJBmi%2Bul0bsp%2BaKugwtVYM42WHd91Z3Q6zUwSp8yXQ51S0T9E7ItzcfOuzsro7EPEyL04AO%2BskFwMNQ7FxZ1oVQOZ84Qkp1pOFj0KTu7Bdd6L4KMRaxPncunBxnWEfzcD4vkyjf7oJlTcc5E45P%2B8CxLUS2HUlEYye5NggPCbFLxtcMZaA8sz0mbBzlAgfpYmPWvdxzwqRdDgwTihr2MJTT2L0GOqUBzhrLukbGPGyy%2B9u0x6BmUVmT7exMS6tnxbK7bjeEDHzCOGSx5dARW6qZxI7D4RWeHsQZ4a%2BOp6Vj4VMabDD1tfXNCtLi%2Bzn9wEiKimmTZS05JcpWAlKHZJ%2Fo4o2Kak7ELMZxQG8yiv7PxHbJsH2KRXcGCNVQKYgKPqx1L5TvJCowexd%2BUBKUBbt5rdqurU%2FcertlFMoNkpJ2TZsEkcGNnnvFQSLC&X-Amz-Signature=2917961ffddfb394698740da981be46e3e13afa57c8a7d22dcdc4159d9529415&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGWHSPX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFu3cpGXfAGA%2Fg9%2BLEVk6rT1SEcfqCsQNQCScEFUjKyAiEAwpsUA0KKIeUYYL7nH10D5SzJa1FAuCEkBlPWRMWK3%2BIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMUMWBSZBDG3eHUkCrcA9pRL7knEtDIPkZ3pIwDpQ%2Fnvsyu1Qb5v%2F8GkpuCvFGKr3JqAnmYBGACTGLqB4ipcU1uo9mm5CyVGrOqSCRDPYIa4WRpFRHmA4IAEvWzuKZHHZo1%2Bn3pU2AbsONyQAhU5X%2FLLL%2Brf6s184C2aq0pj%2Fdhha8XrV1s3GwKqYqh4kT0w4EzUzNj36qgV%2FBZIpkCD1CfwYEcyl9bNNuoZMJIvQ7rXAk3i0xTpcRFd%2F50%2B0yeXA8d6N%2F2a%2FjTJuHhqdmlRCowOW0ZOiw30r0xcEjlfkQOxpfv77Xjeg0O78Y%2B8DcwC%2Fy159%2FL%2Bg7lJQiq4uNpS8xju81USyuSEQmgauy%2B3m9Z0939qfV18UBc%2Bl%2FtmKAbX9XzDfuogOSNBUaylHlkcvUuC%2Fnw%2Bo7erwyamYNPKeY0xpVAQSaK4eYYmyX6MKJBmi%2Bul0bsp%2BaKugwtVYM42WHd91Z3Q6zUwSp8yXQ51S0T9E7ItzcfOuzsro7EPEyL04AO%2BskFwMNQ7FxZ1oVQOZ84Qkp1pOFj0KTu7Bdd6L4KMRaxPncunBxnWEfzcD4vkyjf7oJlTcc5E45P%2B8CxLUS2HUlEYye5NggPCbFLxtcMZaA8sz0mbBzlAgfpYmPWvdxzwqRdDgwTihr2MJTT2L0GOqUBzhrLukbGPGyy%2B9u0x6BmUVmT7exMS6tnxbK7bjeEDHzCOGSx5dARW6qZxI7D4RWeHsQZ4a%2BOp6Vj4VMabDD1tfXNCtLi%2Bzn9wEiKimmTZS05JcpWAlKHZJ%2Fo4o2Kak7ELMZxQG8yiv7PxHbJsH2KRXcGCNVQKYgKPqx1L5TvJCowexd%2BUBKUBbt5rdqurU%2FcertlFMoNkpJ2TZsEkcGNnnvFQSLC&X-Amz-Signature=7327916132bc5eeb9d72cc007ae259929d2e43ccb06983f74cc0bf1be44c9a84&X-Amz-SignedHeaders=host&x-id=GetObject)
