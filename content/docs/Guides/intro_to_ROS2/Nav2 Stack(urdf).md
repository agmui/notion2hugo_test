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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQWPUBB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5gI7jl4DMqCltDGZsVRRtQW5vuq5HDmFkdaIzk10LAiAryrMDeh%2F7LAFGZH9rIeiDLoyOEPuFDAVH5KAiv7hlfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMuQkf9wte31%2FGWpYJKtwD%2FIWD%2FWUrlMSnVAORx2%2FJdYMsrCtU%2Fcv3eKesWwK8yhNWX7p8aF6zhltscHzrebji8jMXuVfK07ysQw9Qw5QeU62zb02F%2Bf8ZQSnQk9zSnr7bqqUks%2B9CkWhpA5xADV%2BXI7Kmh29DT2VSG7woLls1hHR1aomy3SB3yNxJtKCxsRK1oSUE57TBiiqSPNOqHUXbGq2nCIcOYX5m7lWDDWnhQow68geBFGa%2FvIIaosEmHyZvlAQ1oJNZ1PFGuLfB1FZ6lBiqWKkwAuAHBjDAH43w%2BLhS7Flrmal0yEk3kRbcolZf93FeZLV7BVPLLfzzE1Nc%2FsdHwwIvD%2BiDuBTXWIo8Z4cOG2GFR%2FqdQn7KzvgcKIziVqu0s1QaAEY32c5Icjz8L9Q5Ae1c1ld1RgG%2BdvT7d8CrmS%2B%2F6FbzD0LcbtaBV8RE6mCRxZlmYnmfIjdtNVCu%2BHfmpYlIa8XFRCfDbC4w3PT7m9IIBeCUGZuPED76AGq0iGyyyO2nl4NddNLzpGt%2BdZNxKi9gXHnHQ6MDe0QYVYhpNVA8Vmb9o0xCS%2FRQvhPFMg29L%2BNy%2BMA6OqS1DlIzuhI8EzqoT8zxvp5pS4VVtiPqIxjQOEq%2F68n5IQDE%2BSUak%2FNvjW9ccyExPUUwx%2BTXwQY6pgG6RizOkvkyaeqmatHsbeeAS2JL5Kwhu5gWMs6Imq3O156i6lvvKhEYIGJXCA6Cj6UVWS6QR6nUvRibUyKpKAm%2FJvCmTeXOkpTlGtDqbtFzBHmRwhVF%2FaZvc17iCGXGVOuSnTnMFLK6KQxOD1FGBm1kfEor3EecpUVnCgfS%2BX8imF9BO8I4qXhcO7CX7SN1VQI%2BBRKVUVQp%2FBJAFaxItrL76MDp2uPZ&X-Amz-Signature=e9877c047cea8fb51edecd910ce616c572dfc17f533028bb2bd271f2e7fc5ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQWPUBB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5gI7jl4DMqCltDGZsVRRtQW5vuq5HDmFkdaIzk10LAiAryrMDeh%2F7LAFGZH9rIeiDLoyOEPuFDAVH5KAiv7hlfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMuQkf9wte31%2FGWpYJKtwD%2FIWD%2FWUrlMSnVAORx2%2FJdYMsrCtU%2Fcv3eKesWwK8yhNWX7p8aF6zhltscHzrebji8jMXuVfK07ysQw9Qw5QeU62zb02F%2Bf8ZQSnQk9zSnr7bqqUks%2B9CkWhpA5xADV%2BXI7Kmh29DT2VSG7woLls1hHR1aomy3SB3yNxJtKCxsRK1oSUE57TBiiqSPNOqHUXbGq2nCIcOYX5m7lWDDWnhQow68geBFGa%2FvIIaosEmHyZvlAQ1oJNZ1PFGuLfB1FZ6lBiqWKkwAuAHBjDAH43w%2BLhS7Flrmal0yEk3kRbcolZf93FeZLV7BVPLLfzzE1Nc%2FsdHwwIvD%2BiDuBTXWIo8Z4cOG2GFR%2FqdQn7KzvgcKIziVqu0s1QaAEY32c5Icjz8L9Q5Ae1c1ld1RgG%2BdvT7d8CrmS%2B%2F6FbzD0LcbtaBV8RE6mCRxZlmYnmfIjdtNVCu%2BHfmpYlIa8XFRCfDbC4w3PT7m9IIBeCUGZuPED76AGq0iGyyyO2nl4NddNLzpGt%2BdZNxKi9gXHnHQ6MDe0QYVYhpNVA8Vmb9o0xCS%2FRQvhPFMg29L%2BNy%2BMA6OqS1DlIzuhI8EzqoT8zxvp5pS4VVtiPqIxjQOEq%2F68n5IQDE%2BSUak%2FNvjW9ccyExPUUwx%2BTXwQY6pgG6RizOkvkyaeqmatHsbeeAS2JL5Kwhu5gWMs6Imq3O156i6lvvKhEYIGJXCA6Cj6UVWS6QR6nUvRibUyKpKAm%2FJvCmTeXOkpTlGtDqbtFzBHmRwhVF%2FaZvc17iCGXGVOuSnTnMFLK6KQxOD1FGBm1kfEor3EecpUVnCgfS%2BX8imF9BO8I4qXhcO7CX7SN1VQI%2BBRKVUVQp%2FBJAFaxItrL76MDp2uPZ&X-Amz-Signature=70f86cd90dacbd2dd517f2be452d40d291064d157460e370f2e93b2a9fd7fcc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQWPUBB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5gI7jl4DMqCltDGZsVRRtQW5vuq5HDmFkdaIzk10LAiAryrMDeh%2F7LAFGZH9rIeiDLoyOEPuFDAVH5KAiv7hlfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMuQkf9wte31%2FGWpYJKtwD%2FIWD%2FWUrlMSnVAORx2%2FJdYMsrCtU%2Fcv3eKesWwK8yhNWX7p8aF6zhltscHzrebji8jMXuVfK07ysQw9Qw5QeU62zb02F%2Bf8ZQSnQk9zSnr7bqqUks%2B9CkWhpA5xADV%2BXI7Kmh29DT2VSG7woLls1hHR1aomy3SB3yNxJtKCxsRK1oSUE57TBiiqSPNOqHUXbGq2nCIcOYX5m7lWDDWnhQow68geBFGa%2FvIIaosEmHyZvlAQ1oJNZ1PFGuLfB1FZ6lBiqWKkwAuAHBjDAH43w%2BLhS7Flrmal0yEk3kRbcolZf93FeZLV7BVPLLfzzE1Nc%2FsdHwwIvD%2BiDuBTXWIo8Z4cOG2GFR%2FqdQn7KzvgcKIziVqu0s1QaAEY32c5Icjz8L9Q5Ae1c1ld1RgG%2BdvT7d8CrmS%2B%2F6FbzD0LcbtaBV8RE6mCRxZlmYnmfIjdtNVCu%2BHfmpYlIa8XFRCfDbC4w3PT7m9IIBeCUGZuPED76AGq0iGyyyO2nl4NddNLzpGt%2BdZNxKi9gXHnHQ6MDe0QYVYhpNVA8Vmb9o0xCS%2FRQvhPFMg29L%2BNy%2BMA6OqS1DlIzuhI8EzqoT8zxvp5pS4VVtiPqIxjQOEq%2F68n5IQDE%2BSUak%2FNvjW9ccyExPUUwx%2BTXwQY6pgG6RizOkvkyaeqmatHsbeeAS2JL5Kwhu5gWMs6Imq3O156i6lvvKhEYIGJXCA6Cj6UVWS6QR6nUvRibUyKpKAm%2FJvCmTeXOkpTlGtDqbtFzBHmRwhVF%2FaZvc17iCGXGVOuSnTnMFLK6KQxOD1FGBm1kfEor3EecpUVnCgfS%2BX8imF9BO8I4qXhcO7CX7SN1VQI%2BBRKVUVQp%2FBJAFaxItrL76MDp2uPZ&X-Amz-Signature=279e8042f10e8b9186fec682966672d91a20de61f85987e9888cd002b0ca2f12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQWPUBB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5gI7jl4DMqCltDGZsVRRtQW5vuq5HDmFkdaIzk10LAiAryrMDeh%2F7LAFGZH9rIeiDLoyOEPuFDAVH5KAiv7hlfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMuQkf9wte31%2FGWpYJKtwD%2FIWD%2FWUrlMSnVAORx2%2FJdYMsrCtU%2Fcv3eKesWwK8yhNWX7p8aF6zhltscHzrebji8jMXuVfK07ysQw9Qw5QeU62zb02F%2Bf8ZQSnQk9zSnr7bqqUks%2B9CkWhpA5xADV%2BXI7Kmh29DT2VSG7woLls1hHR1aomy3SB3yNxJtKCxsRK1oSUE57TBiiqSPNOqHUXbGq2nCIcOYX5m7lWDDWnhQow68geBFGa%2FvIIaosEmHyZvlAQ1oJNZ1PFGuLfB1FZ6lBiqWKkwAuAHBjDAH43w%2BLhS7Flrmal0yEk3kRbcolZf93FeZLV7BVPLLfzzE1Nc%2FsdHwwIvD%2BiDuBTXWIo8Z4cOG2GFR%2FqdQn7KzvgcKIziVqu0s1QaAEY32c5Icjz8L9Q5Ae1c1ld1RgG%2BdvT7d8CrmS%2B%2F6FbzD0LcbtaBV8RE6mCRxZlmYnmfIjdtNVCu%2BHfmpYlIa8XFRCfDbC4w3PT7m9IIBeCUGZuPED76AGq0iGyyyO2nl4NddNLzpGt%2BdZNxKi9gXHnHQ6MDe0QYVYhpNVA8Vmb9o0xCS%2FRQvhPFMg29L%2BNy%2BMA6OqS1DlIzuhI8EzqoT8zxvp5pS4VVtiPqIxjQOEq%2F68n5IQDE%2BSUak%2FNvjW9ccyExPUUwx%2BTXwQY6pgG6RizOkvkyaeqmatHsbeeAS2JL5Kwhu5gWMs6Imq3O156i6lvvKhEYIGJXCA6Cj6UVWS6QR6nUvRibUyKpKAm%2FJvCmTeXOkpTlGtDqbtFzBHmRwhVF%2FaZvc17iCGXGVOuSnTnMFLK6KQxOD1FGBm1kfEor3EecpUVnCgfS%2BX8imF9BO8I4qXhcO7CX7SN1VQI%2BBRKVUVQp%2FBJAFaxItrL76MDp2uPZ&X-Amz-Signature=dfb45bc8d534d9039b233724370cd9b365adcbbb34b42c83dd99ac34973248c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQWPUBB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5gI7jl4DMqCltDGZsVRRtQW5vuq5HDmFkdaIzk10LAiAryrMDeh%2F7LAFGZH9rIeiDLoyOEPuFDAVH5KAiv7hlfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMuQkf9wte31%2FGWpYJKtwD%2FIWD%2FWUrlMSnVAORx2%2FJdYMsrCtU%2Fcv3eKesWwK8yhNWX7p8aF6zhltscHzrebji8jMXuVfK07ysQw9Qw5QeU62zb02F%2Bf8ZQSnQk9zSnr7bqqUks%2B9CkWhpA5xADV%2BXI7Kmh29DT2VSG7woLls1hHR1aomy3SB3yNxJtKCxsRK1oSUE57TBiiqSPNOqHUXbGq2nCIcOYX5m7lWDDWnhQow68geBFGa%2FvIIaosEmHyZvlAQ1oJNZ1PFGuLfB1FZ6lBiqWKkwAuAHBjDAH43w%2BLhS7Flrmal0yEk3kRbcolZf93FeZLV7BVPLLfzzE1Nc%2FsdHwwIvD%2BiDuBTXWIo8Z4cOG2GFR%2FqdQn7KzvgcKIziVqu0s1QaAEY32c5Icjz8L9Q5Ae1c1ld1RgG%2BdvT7d8CrmS%2B%2F6FbzD0LcbtaBV8RE6mCRxZlmYnmfIjdtNVCu%2BHfmpYlIa8XFRCfDbC4w3PT7m9IIBeCUGZuPED76AGq0iGyyyO2nl4NddNLzpGt%2BdZNxKi9gXHnHQ6MDe0QYVYhpNVA8Vmb9o0xCS%2FRQvhPFMg29L%2BNy%2BMA6OqS1DlIzuhI8EzqoT8zxvp5pS4VVtiPqIxjQOEq%2F68n5IQDE%2BSUak%2FNvjW9ccyExPUUwx%2BTXwQY6pgG6RizOkvkyaeqmatHsbeeAS2JL5Kwhu5gWMs6Imq3O156i6lvvKhEYIGJXCA6Cj6UVWS6QR6nUvRibUyKpKAm%2FJvCmTeXOkpTlGtDqbtFzBHmRwhVF%2FaZvc17iCGXGVOuSnTnMFLK6KQxOD1FGBm1kfEor3EecpUVnCgfS%2BX8imF9BO8I4qXhcO7CX7SN1VQI%2BBRKVUVQp%2FBJAFaxItrL76MDp2uPZ&X-Amz-Signature=67b114a527d23fa89d99e489660d9d063213ea2192eb89dd24355231c76e305a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQWPUBB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5gI7jl4DMqCltDGZsVRRtQW5vuq5HDmFkdaIzk10LAiAryrMDeh%2F7LAFGZH9rIeiDLoyOEPuFDAVH5KAiv7hlfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMuQkf9wte31%2FGWpYJKtwD%2FIWD%2FWUrlMSnVAORx2%2FJdYMsrCtU%2Fcv3eKesWwK8yhNWX7p8aF6zhltscHzrebji8jMXuVfK07ysQw9Qw5QeU62zb02F%2Bf8ZQSnQk9zSnr7bqqUks%2B9CkWhpA5xADV%2BXI7Kmh29DT2VSG7woLls1hHR1aomy3SB3yNxJtKCxsRK1oSUE57TBiiqSPNOqHUXbGq2nCIcOYX5m7lWDDWnhQow68geBFGa%2FvIIaosEmHyZvlAQ1oJNZ1PFGuLfB1FZ6lBiqWKkwAuAHBjDAH43w%2BLhS7Flrmal0yEk3kRbcolZf93FeZLV7BVPLLfzzE1Nc%2FsdHwwIvD%2BiDuBTXWIo8Z4cOG2GFR%2FqdQn7KzvgcKIziVqu0s1QaAEY32c5Icjz8L9Q5Ae1c1ld1RgG%2BdvT7d8CrmS%2B%2F6FbzD0LcbtaBV8RE6mCRxZlmYnmfIjdtNVCu%2BHfmpYlIa8XFRCfDbC4w3PT7m9IIBeCUGZuPED76AGq0iGyyyO2nl4NddNLzpGt%2BdZNxKi9gXHnHQ6MDe0QYVYhpNVA8Vmb9o0xCS%2FRQvhPFMg29L%2BNy%2BMA6OqS1DlIzuhI8EzqoT8zxvp5pS4VVtiPqIxjQOEq%2F68n5IQDE%2BSUak%2FNvjW9ccyExPUUwx%2BTXwQY6pgG6RizOkvkyaeqmatHsbeeAS2JL5Kwhu5gWMs6Imq3O156i6lvvKhEYIGJXCA6Cj6UVWS6QR6nUvRibUyKpKAm%2FJvCmTeXOkpTlGtDqbtFzBHmRwhVF%2FaZvc17iCGXGVOuSnTnMFLK6KQxOD1FGBm1kfEor3EecpUVnCgfS%2BX8imF9BO8I4qXhcO7CX7SN1VQI%2BBRKVUVQp%2FBJAFaxItrL76MDp2uPZ&X-Amz-Signature=3182e093026644afd885f0a99907bc0de36c2f014d442b33e38ddbfe6a2b11b6&X-Amz-SignedHeaders=host&x-id=GetObject)
