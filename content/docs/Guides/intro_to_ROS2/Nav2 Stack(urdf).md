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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCK25J3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl%2BJNCwN0bikIPWr%2F8EAYj%2BFLSlyXpIR0Pb0pqm5BKNAiBbUKTj1niczYlVCaz7i1D8DKWc%2B%2BPl8S9nC868UN37UyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPCueGdXEAwKcgDdeKtwDVI7uU67mJk2pW7EidSscUhx0OOiQ8bxwjHIRP2%2FkYUXzWBkf9J9VAOG7Maj%2F6GIu3HnKlP%2BzfPfC8nYHlj4QrqsDN9Eqx3IIwG1baFjUI6gTzC4bRhfiebvI1ONseyMDHDpvyNZZv0I5170t54oQzM8JhX%2BKJnOiS664uJUxnYrau84vegirXOKxjv9TqELXJ16tS5XDVMwBTzhZhz60Zy8oNhIe5bKgpyvkXHB2xbAB2z%2FFcyYyCIi7NWJujQieQGrYdYUhLEwoiUeroMx2alphh0jGE4VpVR79bPVhjV1zn9mRzRbSeLkht9HspZ%2FLmxUEItu8HgUpJPdNy%2BMDNmcHbqvwwA8y3ZT3Q3A6sCqJ3R%2FkPCgvhRJMkq7UvIXy3FwftqFT0zET8zgete68XRnpjptToS9h%2B5tQLSIOC%2F1YemVVjRjFsYFlMYWWBC%2FkdKLgYngbhw3P8%2Fe%2B2Epwj%2FqNseiKA%2FolUrJlOF7Z5QMiayvCP9Z831HxMKa9VdNYXPQmva97IJeZ6fgJBFK2OezclhNR5HWFyB9n0GWEnC6OtJDSmSnfylkS303ArIeSljPpvvr%2FtDhtck%2Fug%2F12DXkIDHNxhRGlDQBHCdrWTdn7QMQw3JuiaB2NDHsw%2F8%2FHwwY6pgG1lSmApvNccoAgfyvCScGw9UpYsbjFKnsYJdI6U8vd%2FO%2BKNlYlTD%2By9vlWQY1ndIjtjcPbFAo04iLLtDJ95iZJl0pIccXWCEkZ0sSge5jQ2GVp2aFp%2Bertadd60w2hkvxlz7AMZ%2BBT4jGNj8GOxEt1ozO%2BvNLZ7gtPIRb10NuxEFsb1WFcOKAwY4ah3JahV9gtCjF4v3M1Q8fQB%2FPHRLyyxzqycSme&X-Amz-Signature=1d719c8c81f3f11704d21912648bc6c920e4793d6a44a926309aae1df28c34f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCK25J3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl%2BJNCwN0bikIPWr%2F8EAYj%2BFLSlyXpIR0Pb0pqm5BKNAiBbUKTj1niczYlVCaz7i1D8DKWc%2B%2BPl8S9nC868UN37UyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPCueGdXEAwKcgDdeKtwDVI7uU67mJk2pW7EidSscUhx0OOiQ8bxwjHIRP2%2FkYUXzWBkf9J9VAOG7Maj%2F6GIu3HnKlP%2BzfPfC8nYHlj4QrqsDN9Eqx3IIwG1baFjUI6gTzC4bRhfiebvI1ONseyMDHDpvyNZZv0I5170t54oQzM8JhX%2BKJnOiS664uJUxnYrau84vegirXOKxjv9TqELXJ16tS5XDVMwBTzhZhz60Zy8oNhIe5bKgpyvkXHB2xbAB2z%2FFcyYyCIi7NWJujQieQGrYdYUhLEwoiUeroMx2alphh0jGE4VpVR79bPVhjV1zn9mRzRbSeLkht9HspZ%2FLmxUEItu8HgUpJPdNy%2BMDNmcHbqvwwA8y3ZT3Q3A6sCqJ3R%2FkPCgvhRJMkq7UvIXy3FwftqFT0zET8zgete68XRnpjptToS9h%2B5tQLSIOC%2F1YemVVjRjFsYFlMYWWBC%2FkdKLgYngbhw3P8%2Fe%2B2Epwj%2FqNseiKA%2FolUrJlOF7Z5QMiayvCP9Z831HxMKa9VdNYXPQmva97IJeZ6fgJBFK2OezclhNR5HWFyB9n0GWEnC6OtJDSmSnfylkS303ArIeSljPpvvr%2FtDhtck%2Fug%2F12DXkIDHNxhRGlDQBHCdrWTdn7QMQw3JuiaB2NDHsw%2F8%2FHwwY6pgG1lSmApvNccoAgfyvCScGw9UpYsbjFKnsYJdI6U8vd%2FO%2BKNlYlTD%2By9vlWQY1ndIjtjcPbFAo04iLLtDJ95iZJl0pIccXWCEkZ0sSge5jQ2GVp2aFp%2Bertadd60w2hkvxlz7AMZ%2BBT4jGNj8GOxEt1ozO%2BvNLZ7gtPIRb10NuxEFsb1WFcOKAwY4ah3JahV9gtCjF4v3M1Q8fQB%2FPHRLyyxzqycSme&X-Amz-Signature=0f3a66da05e85ccfd80a49eb55f3e4995f03a9fef27a810c2e39c4ba0bb1966d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCK25J3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl%2BJNCwN0bikIPWr%2F8EAYj%2BFLSlyXpIR0Pb0pqm5BKNAiBbUKTj1niczYlVCaz7i1D8DKWc%2B%2BPl8S9nC868UN37UyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPCueGdXEAwKcgDdeKtwDVI7uU67mJk2pW7EidSscUhx0OOiQ8bxwjHIRP2%2FkYUXzWBkf9J9VAOG7Maj%2F6GIu3HnKlP%2BzfPfC8nYHlj4QrqsDN9Eqx3IIwG1baFjUI6gTzC4bRhfiebvI1ONseyMDHDpvyNZZv0I5170t54oQzM8JhX%2BKJnOiS664uJUxnYrau84vegirXOKxjv9TqELXJ16tS5XDVMwBTzhZhz60Zy8oNhIe5bKgpyvkXHB2xbAB2z%2FFcyYyCIi7NWJujQieQGrYdYUhLEwoiUeroMx2alphh0jGE4VpVR79bPVhjV1zn9mRzRbSeLkht9HspZ%2FLmxUEItu8HgUpJPdNy%2BMDNmcHbqvwwA8y3ZT3Q3A6sCqJ3R%2FkPCgvhRJMkq7UvIXy3FwftqFT0zET8zgete68XRnpjptToS9h%2B5tQLSIOC%2F1YemVVjRjFsYFlMYWWBC%2FkdKLgYngbhw3P8%2Fe%2B2Epwj%2FqNseiKA%2FolUrJlOF7Z5QMiayvCP9Z831HxMKa9VdNYXPQmva97IJeZ6fgJBFK2OezclhNR5HWFyB9n0GWEnC6OtJDSmSnfylkS303ArIeSljPpvvr%2FtDhtck%2Fug%2F12DXkIDHNxhRGlDQBHCdrWTdn7QMQw3JuiaB2NDHsw%2F8%2FHwwY6pgG1lSmApvNccoAgfyvCScGw9UpYsbjFKnsYJdI6U8vd%2FO%2BKNlYlTD%2By9vlWQY1ndIjtjcPbFAo04iLLtDJ95iZJl0pIccXWCEkZ0sSge5jQ2GVp2aFp%2Bertadd60w2hkvxlz7AMZ%2BBT4jGNj8GOxEt1ozO%2BvNLZ7gtPIRb10NuxEFsb1WFcOKAwY4ah3JahV9gtCjF4v3M1Q8fQB%2FPHRLyyxzqycSme&X-Amz-Signature=8fe42e49447f0f26944c2e36b22b0dc6354f295135a0c28a95a008c11956bb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCK25J3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl%2BJNCwN0bikIPWr%2F8EAYj%2BFLSlyXpIR0Pb0pqm5BKNAiBbUKTj1niczYlVCaz7i1D8DKWc%2B%2BPl8S9nC868UN37UyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPCueGdXEAwKcgDdeKtwDVI7uU67mJk2pW7EidSscUhx0OOiQ8bxwjHIRP2%2FkYUXzWBkf9J9VAOG7Maj%2F6GIu3HnKlP%2BzfPfC8nYHlj4QrqsDN9Eqx3IIwG1baFjUI6gTzC4bRhfiebvI1ONseyMDHDpvyNZZv0I5170t54oQzM8JhX%2BKJnOiS664uJUxnYrau84vegirXOKxjv9TqELXJ16tS5XDVMwBTzhZhz60Zy8oNhIe5bKgpyvkXHB2xbAB2z%2FFcyYyCIi7NWJujQieQGrYdYUhLEwoiUeroMx2alphh0jGE4VpVR79bPVhjV1zn9mRzRbSeLkht9HspZ%2FLmxUEItu8HgUpJPdNy%2BMDNmcHbqvwwA8y3ZT3Q3A6sCqJ3R%2FkPCgvhRJMkq7UvIXy3FwftqFT0zET8zgete68XRnpjptToS9h%2B5tQLSIOC%2F1YemVVjRjFsYFlMYWWBC%2FkdKLgYngbhw3P8%2Fe%2B2Epwj%2FqNseiKA%2FolUrJlOF7Z5QMiayvCP9Z831HxMKa9VdNYXPQmva97IJeZ6fgJBFK2OezclhNR5HWFyB9n0GWEnC6OtJDSmSnfylkS303ArIeSljPpvvr%2FtDhtck%2Fug%2F12DXkIDHNxhRGlDQBHCdrWTdn7QMQw3JuiaB2NDHsw%2F8%2FHwwY6pgG1lSmApvNccoAgfyvCScGw9UpYsbjFKnsYJdI6U8vd%2FO%2BKNlYlTD%2By9vlWQY1ndIjtjcPbFAo04iLLtDJ95iZJl0pIccXWCEkZ0sSge5jQ2GVp2aFp%2Bertadd60w2hkvxlz7AMZ%2BBT4jGNj8GOxEt1ozO%2BvNLZ7gtPIRb10NuxEFsb1WFcOKAwY4ah3JahV9gtCjF4v3M1Q8fQB%2FPHRLyyxzqycSme&X-Amz-Signature=6955ed3d24396296044a9cd32c1ad29922a66059a2531f32d3b575bec465368e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCK25J3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl%2BJNCwN0bikIPWr%2F8EAYj%2BFLSlyXpIR0Pb0pqm5BKNAiBbUKTj1niczYlVCaz7i1D8DKWc%2B%2BPl8S9nC868UN37UyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPCueGdXEAwKcgDdeKtwDVI7uU67mJk2pW7EidSscUhx0OOiQ8bxwjHIRP2%2FkYUXzWBkf9J9VAOG7Maj%2F6GIu3HnKlP%2BzfPfC8nYHlj4QrqsDN9Eqx3IIwG1baFjUI6gTzC4bRhfiebvI1ONseyMDHDpvyNZZv0I5170t54oQzM8JhX%2BKJnOiS664uJUxnYrau84vegirXOKxjv9TqELXJ16tS5XDVMwBTzhZhz60Zy8oNhIe5bKgpyvkXHB2xbAB2z%2FFcyYyCIi7NWJujQieQGrYdYUhLEwoiUeroMx2alphh0jGE4VpVR79bPVhjV1zn9mRzRbSeLkht9HspZ%2FLmxUEItu8HgUpJPdNy%2BMDNmcHbqvwwA8y3ZT3Q3A6sCqJ3R%2FkPCgvhRJMkq7UvIXy3FwftqFT0zET8zgete68XRnpjptToS9h%2B5tQLSIOC%2F1YemVVjRjFsYFlMYWWBC%2FkdKLgYngbhw3P8%2Fe%2B2Epwj%2FqNseiKA%2FolUrJlOF7Z5QMiayvCP9Z831HxMKa9VdNYXPQmva97IJeZ6fgJBFK2OezclhNR5HWFyB9n0GWEnC6OtJDSmSnfylkS303ArIeSljPpvvr%2FtDhtck%2Fug%2F12DXkIDHNxhRGlDQBHCdrWTdn7QMQw3JuiaB2NDHsw%2F8%2FHwwY6pgG1lSmApvNccoAgfyvCScGw9UpYsbjFKnsYJdI6U8vd%2FO%2BKNlYlTD%2By9vlWQY1ndIjtjcPbFAo04iLLtDJ95iZJl0pIccXWCEkZ0sSge5jQ2GVp2aFp%2Bertadd60w2hkvxlz7AMZ%2BBT4jGNj8GOxEt1ozO%2BvNLZ7gtPIRb10NuxEFsb1WFcOKAwY4ah3JahV9gtCjF4v3M1Q8fQB%2FPHRLyyxzqycSme&X-Amz-Signature=d3669b12c9711a1a1eb41cf5a21844294d459d71d46f36ce40a532fab79a64f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGCK25J3%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl%2BJNCwN0bikIPWr%2F8EAYj%2BFLSlyXpIR0Pb0pqm5BKNAiBbUKTj1niczYlVCaz7i1D8DKWc%2B%2BPl8S9nC868UN37UyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPCueGdXEAwKcgDdeKtwDVI7uU67mJk2pW7EidSscUhx0OOiQ8bxwjHIRP2%2FkYUXzWBkf9J9VAOG7Maj%2F6GIu3HnKlP%2BzfPfC8nYHlj4QrqsDN9Eqx3IIwG1baFjUI6gTzC4bRhfiebvI1ONseyMDHDpvyNZZv0I5170t54oQzM8JhX%2BKJnOiS664uJUxnYrau84vegirXOKxjv9TqELXJ16tS5XDVMwBTzhZhz60Zy8oNhIe5bKgpyvkXHB2xbAB2z%2FFcyYyCIi7NWJujQieQGrYdYUhLEwoiUeroMx2alphh0jGE4VpVR79bPVhjV1zn9mRzRbSeLkht9HspZ%2FLmxUEItu8HgUpJPdNy%2BMDNmcHbqvwwA8y3ZT3Q3A6sCqJ3R%2FkPCgvhRJMkq7UvIXy3FwftqFT0zET8zgete68XRnpjptToS9h%2B5tQLSIOC%2F1YemVVjRjFsYFlMYWWBC%2FkdKLgYngbhw3P8%2Fe%2B2Epwj%2FqNseiKA%2FolUrJlOF7Z5QMiayvCP9Z831HxMKa9VdNYXPQmva97IJeZ6fgJBFK2OezclhNR5HWFyB9n0GWEnC6OtJDSmSnfylkS303ArIeSljPpvvr%2FtDhtck%2Fug%2F12DXkIDHNxhRGlDQBHCdrWTdn7QMQw3JuiaB2NDHsw%2F8%2FHwwY6pgG1lSmApvNccoAgfyvCScGw9UpYsbjFKnsYJdI6U8vd%2FO%2BKNlYlTD%2By9vlWQY1ndIjtjcPbFAo04iLLtDJ95iZJl0pIccXWCEkZ0sSge5jQ2GVp2aFp%2Bertadd60w2hkvxlz7AMZ%2BBT4jGNj8GOxEt1ozO%2BvNLZ7gtPIRb10NuxEFsb1WFcOKAwY4ah3JahV9gtCjF4v3M1Q8fQB%2FPHRLyyxzqycSme&X-Amz-Signature=a50b1dd452592e8732373f6b33f44159a440a306453473808bbe53b5bf6adef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
