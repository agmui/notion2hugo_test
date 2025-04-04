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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZS2LNIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqakgPMERS0Zth9LSsE%2BygwLKkjyy3uYCv1SjX6W1mLgIhAL38NGa3cwWuMefmeQohqNhvWzI4lC0KW5HoZpNwAFXxKv8DCBUQABoMNjM3NDIzMTgzODA1IgyDceLIpBM3cSFHltkq3AOMajB3YIjvauu9nDwo98GgmAL24ttF3frF7ejDCnDD4%2FjYKSCkBuvjBEf%2BJAZqNnknIupahDAlcoDvQHiwIzkkCnUkE4h4GrqRL018hYnmsiJr5H3EvrfdXUYS%2FfeJ38lganOC7VQ0yj28SGKFliA3gfKX41EFkXRgM26pbekvPf1re2vyrG9WTXEN91I4%2BS2zd83UXagdRwKwNDgFj%2BZEf%2F3mCtxOh4i0N23x6LxRb%2BmfKc0V12qBorz1nv4OXHU4HQILaxbiTcz0Gy5cTRhf0K7uPMMQ8CCJoXCra8CYBukjFevNEXl6RD7KLQckv9HbdHai6bUdKOavFHyBszVsWlxCNfocHtLCrzM6kQnxB58RcKzEUpzQKA%2F3d77lj3Hioo9Tpkry9%2F3fMBvv7Sx0oe7TBWTCxSzacDMw6q70rY57bkDZqfhYepjHsdQiSNu3o5%2B8p67eRHUxy52%2F3zN1CVI1Tb%2FFrhi22NT8V27LNGrqGDCone7mzXhk%2FL3MbyACnHJhuej1iLsEojKQh6hUolFf1VieluZ2Abqnn%2Fkn6DIapC5G2laOF08UmUQePQwaUDBi%2FUDGzSwIkV4ybQpsJMH0BChyeByMsw%2B7wjKftpLdhW8X%2B8fhEp7JPDD6l7%2B%2FBjqkARE%2B%2B5pLTkEf7lFx%2FbTxytD9aL9zCR3A7dm0dAGRkZojaaAATLu1tWyMwajFeUoLRscUVjWMCN4agBjb%2FFItL3xA7cqVSYR%2BJlcHdEt1zU%2FqKBZs3yXoHrXdFkNRylwnMMd%2FtGKNtPItU7IRXPZdL7%2FDS%2FMpFHQa3C6X9%2Fhkmhas%2BYltjcs97U6YhALRzHWlB9AV5TLrGlOyKiRHcaqlauBRuGra&X-Amz-Signature=567ef97fc6b224d77cfba7e32a55cd421422508282653df67085803b12231f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZS2LNIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqakgPMERS0Zth9LSsE%2BygwLKkjyy3uYCv1SjX6W1mLgIhAL38NGa3cwWuMefmeQohqNhvWzI4lC0KW5HoZpNwAFXxKv8DCBUQABoMNjM3NDIzMTgzODA1IgyDceLIpBM3cSFHltkq3AOMajB3YIjvauu9nDwo98GgmAL24ttF3frF7ejDCnDD4%2FjYKSCkBuvjBEf%2BJAZqNnknIupahDAlcoDvQHiwIzkkCnUkE4h4GrqRL018hYnmsiJr5H3EvrfdXUYS%2FfeJ38lganOC7VQ0yj28SGKFliA3gfKX41EFkXRgM26pbekvPf1re2vyrG9WTXEN91I4%2BS2zd83UXagdRwKwNDgFj%2BZEf%2F3mCtxOh4i0N23x6LxRb%2BmfKc0V12qBorz1nv4OXHU4HQILaxbiTcz0Gy5cTRhf0K7uPMMQ8CCJoXCra8CYBukjFevNEXl6RD7KLQckv9HbdHai6bUdKOavFHyBszVsWlxCNfocHtLCrzM6kQnxB58RcKzEUpzQKA%2F3d77lj3Hioo9Tpkry9%2F3fMBvv7Sx0oe7TBWTCxSzacDMw6q70rY57bkDZqfhYepjHsdQiSNu3o5%2B8p67eRHUxy52%2F3zN1CVI1Tb%2FFrhi22NT8V27LNGrqGDCone7mzXhk%2FL3MbyACnHJhuej1iLsEojKQh6hUolFf1VieluZ2Abqnn%2Fkn6DIapC5G2laOF08UmUQePQwaUDBi%2FUDGzSwIkV4ybQpsJMH0BChyeByMsw%2B7wjKftpLdhW8X%2B8fhEp7JPDD6l7%2B%2FBjqkARE%2B%2B5pLTkEf7lFx%2FbTxytD9aL9zCR3A7dm0dAGRkZojaaAATLu1tWyMwajFeUoLRscUVjWMCN4agBjb%2FFItL3xA7cqVSYR%2BJlcHdEt1zU%2FqKBZs3yXoHrXdFkNRylwnMMd%2FtGKNtPItU7IRXPZdL7%2FDS%2FMpFHQa3C6X9%2Fhkmhas%2BYltjcs97U6YhALRzHWlB9AV5TLrGlOyKiRHcaqlauBRuGra&X-Amz-Signature=c02a7c34311e07dd62ae722c0406b920e81713da30211eb3b20344634ce79c82&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZS2LNIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqakgPMERS0Zth9LSsE%2BygwLKkjyy3uYCv1SjX6W1mLgIhAL38NGa3cwWuMefmeQohqNhvWzI4lC0KW5HoZpNwAFXxKv8DCBUQABoMNjM3NDIzMTgzODA1IgyDceLIpBM3cSFHltkq3AOMajB3YIjvauu9nDwo98GgmAL24ttF3frF7ejDCnDD4%2FjYKSCkBuvjBEf%2BJAZqNnknIupahDAlcoDvQHiwIzkkCnUkE4h4GrqRL018hYnmsiJr5H3EvrfdXUYS%2FfeJ38lganOC7VQ0yj28SGKFliA3gfKX41EFkXRgM26pbekvPf1re2vyrG9WTXEN91I4%2BS2zd83UXagdRwKwNDgFj%2BZEf%2F3mCtxOh4i0N23x6LxRb%2BmfKc0V12qBorz1nv4OXHU4HQILaxbiTcz0Gy5cTRhf0K7uPMMQ8CCJoXCra8CYBukjFevNEXl6RD7KLQckv9HbdHai6bUdKOavFHyBszVsWlxCNfocHtLCrzM6kQnxB58RcKzEUpzQKA%2F3d77lj3Hioo9Tpkry9%2F3fMBvv7Sx0oe7TBWTCxSzacDMw6q70rY57bkDZqfhYepjHsdQiSNu3o5%2B8p67eRHUxy52%2F3zN1CVI1Tb%2FFrhi22NT8V27LNGrqGDCone7mzXhk%2FL3MbyACnHJhuej1iLsEojKQh6hUolFf1VieluZ2Abqnn%2Fkn6DIapC5G2laOF08UmUQePQwaUDBi%2FUDGzSwIkV4ybQpsJMH0BChyeByMsw%2B7wjKftpLdhW8X%2B8fhEp7JPDD6l7%2B%2FBjqkARE%2B%2B5pLTkEf7lFx%2FbTxytD9aL9zCR3A7dm0dAGRkZojaaAATLu1tWyMwajFeUoLRscUVjWMCN4agBjb%2FFItL3xA7cqVSYR%2BJlcHdEt1zU%2FqKBZs3yXoHrXdFkNRylwnMMd%2FtGKNtPItU7IRXPZdL7%2FDS%2FMpFHQa3C6X9%2Fhkmhas%2BYltjcs97U6YhALRzHWlB9AV5TLrGlOyKiRHcaqlauBRuGra&X-Amz-Signature=b95724a4e0b8089ba1d42ea3c8cf3f9f7881cb63becdcf1d1ffdc56b2bbabd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZS2LNIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqakgPMERS0Zth9LSsE%2BygwLKkjyy3uYCv1SjX6W1mLgIhAL38NGa3cwWuMefmeQohqNhvWzI4lC0KW5HoZpNwAFXxKv8DCBUQABoMNjM3NDIzMTgzODA1IgyDceLIpBM3cSFHltkq3AOMajB3YIjvauu9nDwo98GgmAL24ttF3frF7ejDCnDD4%2FjYKSCkBuvjBEf%2BJAZqNnknIupahDAlcoDvQHiwIzkkCnUkE4h4GrqRL018hYnmsiJr5H3EvrfdXUYS%2FfeJ38lganOC7VQ0yj28SGKFliA3gfKX41EFkXRgM26pbekvPf1re2vyrG9WTXEN91I4%2BS2zd83UXagdRwKwNDgFj%2BZEf%2F3mCtxOh4i0N23x6LxRb%2BmfKc0V12qBorz1nv4OXHU4HQILaxbiTcz0Gy5cTRhf0K7uPMMQ8CCJoXCra8CYBukjFevNEXl6RD7KLQckv9HbdHai6bUdKOavFHyBszVsWlxCNfocHtLCrzM6kQnxB58RcKzEUpzQKA%2F3d77lj3Hioo9Tpkry9%2F3fMBvv7Sx0oe7TBWTCxSzacDMw6q70rY57bkDZqfhYepjHsdQiSNu3o5%2B8p67eRHUxy52%2F3zN1CVI1Tb%2FFrhi22NT8V27LNGrqGDCone7mzXhk%2FL3MbyACnHJhuej1iLsEojKQh6hUolFf1VieluZ2Abqnn%2Fkn6DIapC5G2laOF08UmUQePQwaUDBi%2FUDGzSwIkV4ybQpsJMH0BChyeByMsw%2B7wjKftpLdhW8X%2B8fhEp7JPDD6l7%2B%2FBjqkARE%2B%2B5pLTkEf7lFx%2FbTxytD9aL9zCR3A7dm0dAGRkZojaaAATLu1tWyMwajFeUoLRscUVjWMCN4agBjb%2FFItL3xA7cqVSYR%2BJlcHdEt1zU%2FqKBZs3yXoHrXdFkNRylwnMMd%2FtGKNtPItU7IRXPZdL7%2FDS%2FMpFHQa3C6X9%2Fhkmhas%2BYltjcs97U6YhALRzHWlB9AV5TLrGlOyKiRHcaqlauBRuGra&X-Amz-Signature=5849f594258e32d8bdd67e48b9ac8e499f9e48bc9de8ef74605b5ee9cec2e807&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZS2LNIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqakgPMERS0Zth9LSsE%2BygwLKkjyy3uYCv1SjX6W1mLgIhAL38NGa3cwWuMefmeQohqNhvWzI4lC0KW5HoZpNwAFXxKv8DCBUQABoMNjM3NDIzMTgzODA1IgyDceLIpBM3cSFHltkq3AOMajB3YIjvauu9nDwo98GgmAL24ttF3frF7ejDCnDD4%2FjYKSCkBuvjBEf%2BJAZqNnknIupahDAlcoDvQHiwIzkkCnUkE4h4GrqRL018hYnmsiJr5H3EvrfdXUYS%2FfeJ38lganOC7VQ0yj28SGKFliA3gfKX41EFkXRgM26pbekvPf1re2vyrG9WTXEN91I4%2BS2zd83UXagdRwKwNDgFj%2BZEf%2F3mCtxOh4i0N23x6LxRb%2BmfKc0V12qBorz1nv4OXHU4HQILaxbiTcz0Gy5cTRhf0K7uPMMQ8CCJoXCra8CYBukjFevNEXl6RD7KLQckv9HbdHai6bUdKOavFHyBszVsWlxCNfocHtLCrzM6kQnxB58RcKzEUpzQKA%2F3d77lj3Hioo9Tpkry9%2F3fMBvv7Sx0oe7TBWTCxSzacDMw6q70rY57bkDZqfhYepjHsdQiSNu3o5%2B8p67eRHUxy52%2F3zN1CVI1Tb%2FFrhi22NT8V27LNGrqGDCone7mzXhk%2FL3MbyACnHJhuej1iLsEojKQh6hUolFf1VieluZ2Abqnn%2Fkn6DIapC5G2laOF08UmUQePQwaUDBi%2FUDGzSwIkV4ybQpsJMH0BChyeByMsw%2B7wjKftpLdhW8X%2B8fhEp7JPDD6l7%2B%2FBjqkARE%2B%2B5pLTkEf7lFx%2FbTxytD9aL9zCR3A7dm0dAGRkZojaaAATLu1tWyMwajFeUoLRscUVjWMCN4agBjb%2FFItL3xA7cqVSYR%2BJlcHdEt1zU%2FqKBZs3yXoHrXdFkNRylwnMMd%2FtGKNtPItU7IRXPZdL7%2FDS%2FMpFHQa3C6X9%2Fhkmhas%2BYltjcs97U6YhALRzHWlB9AV5TLrGlOyKiRHcaqlauBRuGra&X-Amz-Signature=6db8c746d063e7d9cdbb626012b9665c9c67ac4d8dc506990fa05fad102b03e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZS2LNIG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqakgPMERS0Zth9LSsE%2BygwLKkjyy3uYCv1SjX6W1mLgIhAL38NGa3cwWuMefmeQohqNhvWzI4lC0KW5HoZpNwAFXxKv8DCBUQABoMNjM3NDIzMTgzODA1IgyDceLIpBM3cSFHltkq3AOMajB3YIjvauu9nDwo98GgmAL24ttF3frF7ejDCnDD4%2FjYKSCkBuvjBEf%2BJAZqNnknIupahDAlcoDvQHiwIzkkCnUkE4h4GrqRL018hYnmsiJr5H3EvrfdXUYS%2FfeJ38lganOC7VQ0yj28SGKFliA3gfKX41EFkXRgM26pbekvPf1re2vyrG9WTXEN91I4%2BS2zd83UXagdRwKwNDgFj%2BZEf%2F3mCtxOh4i0N23x6LxRb%2BmfKc0V12qBorz1nv4OXHU4HQILaxbiTcz0Gy5cTRhf0K7uPMMQ8CCJoXCra8CYBukjFevNEXl6RD7KLQckv9HbdHai6bUdKOavFHyBszVsWlxCNfocHtLCrzM6kQnxB58RcKzEUpzQKA%2F3d77lj3Hioo9Tpkry9%2F3fMBvv7Sx0oe7TBWTCxSzacDMw6q70rY57bkDZqfhYepjHsdQiSNu3o5%2B8p67eRHUxy52%2F3zN1CVI1Tb%2FFrhi22NT8V27LNGrqGDCone7mzXhk%2FL3MbyACnHJhuej1iLsEojKQh6hUolFf1VieluZ2Abqnn%2Fkn6DIapC5G2laOF08UmUQePQwaUDBi%2FUDGzSwIkV4ybQpsJMH0BChyeByMsw%2B7wjKftpLdhW8X%2B8fhEp7JPDD6l7%2B%2FBjqkARE%2B%2B5pLTkEf7lFx%2FbTxytD9aL9zCR3A7dm0dAGRkZojaaAATLu1tWyMwajFeUoLRscUVjWMCN4agBjb%2FFItL3xA7cqVSYR%2BJlcHdEt1zU%2FqKBZs3yXoHrXdFkNRylwnMMd%2FtGKNtPItU7IRXPZdL7%2FDS%2FMpFHQa3C6X9%2Fhkmhas%2BYltjcs97U6YhALRzHWlB9AV5TLrGlOyKiRHcaqlauBRuGra&X-Amz-Signature=4b80ee4aac54b2a0787dca8ea65c7ec046c7ad49da9a789ce45b6b3e69230165&X-Amz-SignedHeaders=host&x-id=GetObject)
