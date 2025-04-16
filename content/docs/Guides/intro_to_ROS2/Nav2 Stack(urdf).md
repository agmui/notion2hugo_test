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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH4VW5X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8igWs1EUUqzyYrCj%2F8PXAjUjjKzxRH8%2F7YkkfN%2B5lAIhAPD8LeX2ogM8e8cl4bDlDbfz8kM0IedlU98tseOEOf%2FcKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrA9EDwzABp4qfhpgq3AMUGqt%2Fd8Db3brFj%2Fw6f37I%2F7eDnpG5bM7nGONxFlXGEVD%2BYPZ%2B51giTXOgdHcm1q9wtuA4a0z2M7Imuwyy%2BRBXBflidDw3FknUcvHwiKg3QWTlaCfeSvVWHSc%2FfpsvtbjLLoqejtLf6Neq9KDqfOqxno6LtqyaRFIRsrY2zAtRDpFdhThl9tyQJ%2Fb8tMjYYnNIQxxDLHRpOzRhUqZ2IF%2FnMzY8g1ACkQnTHkUxPZose%2FPMqm98Pk91924O5IAcAreqtT6u1IjxhJqVmEuqutD5aIT5stIlrf2D21mxs%2Fk9TDyqbrJf%2BGAQJ%2FspjfKOnxYCt1hJT0qSC%2BCtiS%2FdgQ460IToRjICgiZmitQJicaBxGGZNaTal6X2uNHLXA5fSjKhR%2F0pQKVd5cP3KuJBuoCljtUBcX3bqwYnrUr4DQQE%2BIHILWEP5YV1GoERaGCBROwOHgo9yCmxHXTIG1gBDXPsVgKTMK13WL4KteyuY02hnnVI0DtCXDGnBwlw9ncdpsYSdS6IcPd7kUKwaKnDK1SHZ7Ve1%2B64jkAuAbgKMw2lkPgwGY3gf9pnENX505RuxczfRjyZwbSPXlEpSQ5FONpWHfdP8QHkm9Jn5xT2uTljx9xgZMkcAaCNZfOxyzDe8fy%2FBjqkAZ4tPqBP%2FJo97gHKNAq6Jbya6w4KD4AtRcm9svuk9WpLne9BwmZM791OYQTu9OKE9ySoRkgsxTSHaZO1dxvex69Ps59MRL9bpVmbboz7VTzcDFYKBrStFNRXZqJJ8yHi2YEaZrVBr8exFZnFDhFNlzk1RsdkfGxOtg05rIlwdYH4pmIRPBS8DbQaoP52mQzzmIgTQ4kD9vrGIAk5GyADX3WZlqZR&X-Amz-Signature=bfe1cb822a9a87d294d386e7220a358eabb96c49c896eb6132cb03867faa786f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH4VW5X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8igWs1EUUqzyYrCj%2F8PXAjUjjKzxRH8%2F7YkkfN%2B5lAIhAPD8LeX2ogM8e8cl4bDlDbfz8kM0IedlU98tseOEOf%2FcKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrA9EDwzABp4qfhpgq3AMUGqt%2Fd8Db3brFj%2Fw6f37I%2F7eDnpG5bM7nGONxFlXGEVD%2BYPZ%2B51giTXOgdHcm1q9wtuA4a0z2M7Imuwyy%2BRBXBflidDw3FknUcvHwiKg3QWTlaCfeSvVWHSc%2FfpsvtbjLLoqejtLf6Neq9KDqfOqxno6LtqyaRFIRsrY2zAtRDpFdhThl9tyQJ%2Fb8tMjYYnNIQxxDLHRpOzRhUqZ2IF%2FnMzY8g1ACkQnTHkUxPZose%2FPMqm98Pk91924O5IAcAreqtT6u1IjxhJqVmEuqutD5aIT5stIlrf2D21mxs%2Fk9TDyqbrJf%2BGAQJ%2FspjfKOnxYCt1hJT0qSC%2BCtiS%2FdgQ460IToRjICgiZmitQJicaBxGGZNaTal6X2uNHLXA5fSjKhR%2F0pQKVd5cP3KuJBuoCljtUBcX3bqwYnrUr4DQQE%2BIHILWEP5YV1GoERaGCBROwOHgo9yCmxHXTIG1gBDXPsVgKTMK13WL4KteyuY02hnnVI0DtCXDGnBwlw9ncdpsYSdS6IcPd7kUKwaKnDK1SHZ7Ve1%2B64jkAuAbgKMw2lkPgwGY3gf9pnENX505RuxczfRjyZwbSPXlEpSQ5FONpWHfdP8QHkm9Jn5xT2uTljx9xgZMkcAaCNZfOxyzDe8fy%2FBjqkAZ4tPqBP%2FJo97gHKNAq6Jbya6w4KD4AtRcm9svuk9WpLne9BwmZM791OYQTu9OKE9ySoRkgsxTSHaZO1dxvex69Ps59MRL9bpVmbboz7VTzcDFYKBrStFNRXZqJJ8yHi2YEaZrVBr8exFZnFDhFNlzk1RsdkfGxOtg05rIlwdYH4pmIRPBS8DbQaoP52mQzzmIgTQ4kD9vrGIAk5GyADX3WZlqZR&X-Amz-Signature=9104606bbb91ea45008d32acec7771bfb67feded917eb9528213c644350081c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH4VW5X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8igWs1EUUqzyYrCj%2F8PXAjUjjKzxRH8%2F7YkkfN%2B5lAIhAPD8LeX2ogM8e8cl4bDlDbfz8kM0IedlU98tseOEOf%2FcKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrA9EDwzABp4qfhpgq3AMUGqt%2Fd8Db3brFj%2Fw6f37I%2F7eDnpG5bM7nGONxFlXGEVD%2BYPZ%2B51giTXOgdHcm1q9wtuA4a0z2M7Imuwyy%2BRBXBflidDw3FknUcvHwiKg3QWTlaCfeSvVWHSc%2FfpsvtbjLLoqejtLf6Neq9KDqfOqxno6LtqyaRFIRsrY2zAtRDpFdhThl9tyQJ%2Fb8tMjYYnNIQxxDLHRpOzRhUqZ2IF%2FnMzY8g1ACkQnTHkUxPZose%2FPMqm98Pk91924O5IAcAreqtT6u1IjxhJqVmEuqutD5aIT5stIlrf2D21mxs%2Fk9TDyqbrJf%2BGAQJ%2FspjfKOnxYCt1hJT0qSC%2BCtiS%2FdgQ460IToRjICgiZmitQJicaBxGGZNaTal6X2uNHLXA5fSjKhR%2F0pQKVd5cP3KuJBuoCljtUBcX3bqwYnrUr4DQQE%2BIHILWEP5YV1GoERaGCBROwOHgo9yCmxHXTIG1gBDXPsVgKTMK13WL4KteyuY02hnnVI0DtCXDGnBwlw9ncdpsYSdS6IcPd7kUKwaKnDK1SHZ7Ve1%2B64jkAuAbgKMw2lkPgwGY3gf9pnENX505RuxczfRjyZwbSPXlEpSQ5FONpWHfdP8QHkm9Jn5xT2uTljx9xgZMkcAaCNZfOxyzDe8fy%2FBjqkAZ4tPqBP%2FJo97gHKNAq6Jbya6w4KD4AtRcm9svuk9WpLne9BwmZM791OYQTu9OKE9ySoRkgsxTSHaZO1dxvex69Ps59MRL9bpVmbboz7VTzcDFYKBrStFNRXZqJJ8yHi2YEaZrVBr8exFZnFDhFNlzk1RsdkfGxOtg05rIlwdYH4pmIRPBS8DbQaoP52mQzzmIgTQ4kD9vrGIAk5GyADX3WZlqZR&X-Amz-Signature=c93098a80fd0a0a01da8311d6bac81c13b1fbd101c1f637112658e876b09e82a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH4VW5X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8igWs1EUUqzyYrCj%2F8PXAjUjjKzxRH8%2F7YkkfN%2B5lAIhAPD8LeX2ogM8e8cl4bDlDbfz8kM0IedlU98tseOEOf%2FcKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrA9EDwzABp4qfhpgq3AMUGqt%2Fd8Db3brFj%2Fw6f37I%2F7eDnpG5bM7nGONxFlXGEVD%2BYPZ%2B51giTXOgdHcm1q9wtuA4a0z2M7Imuwyy%2BRBXBflidDw3FknUcvHwiKg3QWTlaCfeSvVWHSc%2FfpsvtbjLLoqejtLf6Neq9KDqfOqxno6LtqyaRFIRsrY2zAtRDpFdhThl9tyQJ%2Fb8tMjYYnNIQxxDLHRpOzRhUqZ2IF%2FnMzY8g1ACkQnTHkUxPZose%2FPMqm98Pk91924O5IAcAreqtT6u1IjxhJqVmEuqutD5aIT5stIlrf2D21mxs%2Fk9TDyqbrJf%2BGAQJ%2FspjfKOnxYCt1hJT0qSC%2BCtiS%2FdgQ460IToRjICgiZmitQJicaBxGGZNaTal6X2uNHLXA5fSjKhR%2F0pQKVd5cP3KuJBuoCljtUBcX3bqwYnrUr4DQQE%2BIHILWEP5YV1GoERaGCBROwOHgo9yCmxHXTIG1gBDXPsVgKTMK13WL4KteyuY02hnnVI0DtCXDGnBwlw9ncdpsYSdS6IcPd7kUKwaKnDK1SHZ7Ve1%2B64jkAuAbgKMw2lkPgwGY3gf9pnENX505RuxczfRjyZwbSPXlEpSQ5FONpWHfdP8QHkm9Jn5xT2uTljx9xgZMkcAaCNZfOxyzDe8fy%2FBjqkAZ4tPqBP%2FJo97gHKNAq6Jbya6w4KD4AtRcm9svuk9WpLne9BwmZM791OYQTu9OKE9ySoRkgsxTSHaZO1dxvex69Ps59MRL9bpVmbboz7VTzcDFYKBrStFNRXZqJJ8yHi2YEaZrVBr8exFZnFDhFNlzk1RsdkfGxOtg05rIlwdYH4pmIRPBS8DbQaoP52mQzzmIgTQ4kD9vrGIAk5GyADX3WZlqZR&X-Amz-Signature=a0d203425b22464b3e00714d962be47810159bd607fe13b7eef3bdc9a7471b21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH4VW5X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8igWs1EUUqzyYrCj%2F8PXAjUjjKzxRH8%2F7YkkfN%2B5lAIhAPD8LeX2ogM8e8cl4bDlDbfz8kM0IedlU98tseOEOf%2FcKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrA9EDwzABp4qfhpgq3AMUGqt%2Fd8Db3brFj%2Fw6f37I%2F7eDnpG5bM7nGONxFlXGEVD%2BYPZ%2B51giTXOgdHcm1q9wtuA4a0z2M7Imuwyy%2BRBXBflidDw3FknUcvHwiKg3QWTlaCfeSvVWHSc%2FfpsvtbjLLoqejtLf6Neq9KDqfOqxno6LtqyaRFIRsrY2zAtRDpFdhThl9tyQJ%2Fb8tMjYYnNIQxxDLHRpOzRhUqZ2IF%2FnMzY8g1ACkQnTHkUxPZose%2FPMqm98Pk91924O5IAcAreqtT6u1IjxhJqVmEuqutD5aIT5stIlrf2D21mxs%2Fk9TDyqbrJf%2BGAQJ%2FspjfKOnxYCt1hJT0qSC%2BCtiS%2FdgQ460IToRjICgiZmitQJicaBxGGZNaTal6X2uNHLXA5fSjKhR%2F0pQKVd5cP3KuJBuoCljtUBcX3bqwYnrUr4DQQE%2BIHILWEP5YV1GoERaGCBROwOHgo9yCmxHXTIG1gBDXPsVgKTMK13WL4KteyuY02hnnVI0DtCXDGnBwlw9ncdpsYSdS6IcPd7kUKwaKnDK1SHZ7Ve1%2B64jkAuAbgKMw2lkPgwGY3gf9pnENX505RuxczfRjyZwbSPXlEpSQ5FONpWHfdP8QHkm9Jn5xT2uTljx9xgZMkcAaCNZfOxyzDe8fy%2FBjqkAZ4tPqBP%2FJo97gHKNAq6Jbya6w4KD4AtRcm9svuk9WpLne9BwmZM791OYQTu9OKE9ySoRkgsxTSHaZO1dxvex69Ps59MRL9bpVmbboz7VTzcDFYKBrStFNRXZqJJ8yHi2YEaZrVBr8exFZnFDhFNlzk1RsdkfGxOtg05rIlwdYH4pmIRPBS8DbQaoP52mQzzmIgTQ4kD9vrGIAk5GyADX3WZlqZR&X-Amz-Signature=d07634b0675256095233de07365771a6409677b339d427684651b62dee79b36f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHH4VW5X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD8igWs1EUUqzyYrCj%2F8PXAjUjjKzxRH8%2F7YkkfN%2B5lAIhAPD8LeX2ogM8e8cl4bDlDbfz8kM0IedlU98tseOEOf%2FcKv8DCD4QABoMNjM3NDIzMTgzODA1IgyrA9EDwzABp4qfhpgq3AMUGqt%2Fd8Db3brFj%2Fw6f37I%2F7eDnpG5bM7nGONxFlXGEVD%2BYPZ%2B51giTXOgdHcm1q9wtuA4a0z2M7Imuwyy%2BRBXBflidDw3FknUcvHwiKg3QWTlaCfeSvVWHSc%2FfpsvtbjLLoqejtLf6Neq9KDqfOqxno6LtqyaRFIRsrY2zAtRDpFdhThl9tyQJ%2Fb8tMjYYnNIQxxDLHRpOzRhUqZ2IF%2FnMzY8g1ACkQnTHkUxPZose%2FPMqm98Pk91924O5IAcAreqtT6u1IjxhJqVmEuqutD5aIT5stIlrf2D21mxs%2Fk9TDyqbrJf%2BGAQJ%2FspjfKOnxYCt1hJT0qSC%2BCtiS%2FdgQ460IToRjICgiZmitQJicaBxGGZNaTal6X2uNHLXA5fSjKhR%2F0pQKVd5cP3KuJBuoCljtUBcX3bqwYnrUr4DQQE%2BIHILWEP5YV1GoERaGCBROwOHgo9yCmxHXTIG1gBDXPsVgKTMK13WL4KteyuY02hnnVI0DtCXDGnBwlw9ncdpsYSdS6IcPd7kUKwaKnDK1SHZ7Ve1%2B64jkAuAbgKMw2lkPgwGY3gf9pnENX505RuxczfRjyZwbSPXlEpSQ5FONpWHfdP8QHkm9Jn5xT2uTljx9xgZMkcAaCNZfOxyzDe8fy%2FBjqkAZ4tPqBP%2FJo97gHKNAq6Jbya6w4KD4AtRcm9svuk9WpLne9BwmZM791OYQTu9OKE9ySoRkgsxTSHaZO1dxvex69Ps59MRL9bpVmbboz7VTzcDFYKBrStFNRXZqJJ8yHi2YEaZrVBr8exFZnFDhFNlzk1RsdkfGxOtg05rIlwdYH4pmIRPBS8DbQaoP52mQzzmIgTQ4kD9vrGIAk5GyADX3WZlqZR&X-Amz-Signature=8abd995d3fb0321b26ef53935149f73b0455a1339527b595c28035733785f5de&X-Amz-SignedHeaders=host&x-id=GetObject)
