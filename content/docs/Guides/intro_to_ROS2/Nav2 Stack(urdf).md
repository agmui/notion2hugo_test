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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564AMP72%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BvLfr0VSwFxsap2fDOntmgNXaB8hoUsA1%2FNdgCpdfFAIhAKkkNhr01RWctMpvVWof%2BQbF25UG9AJOMDoK7FJd2Jq7KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFj8DXpxOn5pi7Y0q3AOXD6avmn9FETli6rCgCqV7RAK7Ux%2FS0gVW%2FcQglrUeKfr2EgSXuZFuoEt2pSBxWE21SRvOHWg3%2FMD9GiutP6rdQ6V73NPtQdtEnPO61CQpHxT2m8DtTsbSMwsxS4U45fv4gfNXQ5aohy8Du3s6VoBupAwGIk605LiieVL995VXdZ%2Bzu6e03PZgaqPsyWMYyWJRQ%2FnKxZb%2BvdhyJrAwtYs3Znp4ij4IM5pSuxKfNGm95Ewtd2up%2FlOJahVyNqp7xUgyRlkGR%2FCn0dRGQMg7qyPmjAjdbvFL1YNaK%2FjuesFhR1Gvrrnl73U77Gi%2BjbpkWSIA5vkOWBxfqcskqQvIOXdhDkGJAqgxp7sd09HJkuPfK81dRnN3ZwaOKK7Vkcj90ocx3KngTE5piLbhkDsqfwn7WqtjIMzc35D5tA2RkuONjcZn9WypnZhyVJDHE4bjPIsXv%2BTROacs5tXmzuKxMdmEiLQbKYkMz6x%2BpJJNKNUcmxkJQ3agrgYt2aHPpCs6F1homIcPK4L7PjSqleCokXk8pjIjnySOQjJkIc8%2FG7u4zkNNAA28Bo57KhM1HRNK0UxskWkpU%2BkQC2fcssAviiG4NGZc1jIhoS%2F8tEBdggO4B4%2B4uJ45gbCnWlvSwzD6u6i9BjqkAVuGnIUWM5Oguli0uqWC9edZThx%2BSFKdv7lTsB8FllPEBgxsyuNctpDtxVfDLzpIkQGY0tsRUTepC515fmUCJjM5UclhC5m8wfIU54y2jEfZ9C7ykZA2QQOrzhzf%2BNAcC7pMDgmI559C%2FQW3Kj6AZ4vngvpKA5znBekA5NyOE7GRCwS6o0XNmiy6mk%2BnErC%2FP6XeE6mFgDZthz%2B7LYSj3lRCxbmq&X-Amz-Signature=73124871c7d39468c20b9f9cb7bff715959552806ff88c459c38afd7a4e1cb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564AMP72%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BvLfr0VSwFxsap2fDOntmgNXaB8hoUsA1%2FNdgCpdfFAIhAKkkNhr01RWctMpvVWof%2BQbF25UG9AJOMDoK7FJd2Jq7KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFj8DXpxOn5pi7Y0q3AOXD6avmn9FETli6rCgCqV7RAK7Ux%2FS0gVW%2FcQglrUeKfr2EgSXuZFuoEt2pSBxWE21SRvOHWg3%2FMD9GiutP6rdQ6V73NPtQdtEnPO61CQpHxT2m8DtTsbSMwsxS4U45fv4gfNXQ5aohy8Du3s6VoBupAwGIk605LiieVL995VXdZ%2Bzu6e03PZgaqPsyWMYyWJRQ%2FnKxZb%2BvdhyJrAwtYs3Znp4ij4IM5pSuxKfNGm95Ewtd2up%2FlOJahVyNqp7xUgyRlkGR%2FCn0dRGQMg7qyPmjAjdbvFL1YNaK%2FjuesFhR1Gvrrnl73U77Gi%2BjbpkWSIA5vkOWBxfqcskqQvIOXdhDkGJAqgxp7sd09HJkuPfK81dRnN3ZwaOKK7Vkcj90ocx3KngTE5piLbhkDsqfwn7WqtjIMzc35D5tA2RkuONjcZn9WypnZhyVJDHE4bjPIsXv%2BTROacs5tXmzuKxMdmEiLQbKYkMz6x%2BpJJNKNUcmxkJQ3agrgYt2aHPpCs6F1homIcPK4L7PjSqleCokXk8pjIjnySOQjJkIc8%2FG7u4zkNNAA28Bo57KhM1HRNK0UxskWkpU%2BkQC2fcssAviiG4NGZc1jIhoS%2F8tEBdggO4B4%2B4uJ45gbCnWlvSwzD6u6i9BjqkAVuGnIUWM5Oguli0uqWC9edZThx%2BSFKdv7lTsB8FllPEBgxsyuNctpDtxVfDLzpIkQGY0tsRUTepC515fmUCJjM5UclhC5m8wfIU54y2jEfZ9C7ykZA2QQOrzhzf%2BNAcC7pMDgmI559C%2FQW3Kj6AZ4vngvpKA5znBekA5NyOE7GRCwS6o0XNmiy6mk%2BnErC%2FP6XeE6mFgDZthz%2B7LYSj3lRCxbmq&X-Amz-Signature=df1287817ce22aa72eaaadd307e3539a66fc4bed63cf7e86f8cee5607e119ede&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564AMP72%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BvLfr0VSwFxsap2fDOntmgNXaB8hoUsA1%2FNdgCpdfFAIhAKkkNhr01RWctMpvVWof%2BQbF25UG9AJOMDoK7FJd2Jq7KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFj8DXpxOn5pi7Y0q3AOXD6avmn9FETli6rCgCqV7RAK7Ux%2FS0gVW%2FcQglrUeKfr2EgSXuZFuoEt2pSBxWE21SRvOHWg3%2FMD9GiutP6rdQ6V73NPtQdtEnPO61CQpHxT2m8DtTsbSMwsxS4U45fv4gfNXQ5aohy8Du3s6VoBupAwGIk605LiieVL995VXdZ%2Bzu6e03PZgaqPsyWMYyWJRQ%2FnKxZb%2BvdhyJrAwtYs3Znp4ij4IM5pSuxKfNGm95Ewtd2up%2FlOJahVyNqp7xUgyRlkGR%2FCn0dRGQMg7qyPmjAjdbvFL1YNaK%2FjuesFhR1Gvrrnl73U77Gi%2BjbpkWSIA5vkOWBxfqcskqQvIOXdhDkGJAqgxp7sd09HJkuPfK81dRnN3ZwaOKK7Vkcj90ocx3KngTE5piLbhkDsqfwn7WqtjIMzc35D5tA2RkuONjcZn9WypnZhyVJDHE4bjPIsXv%2BTROacs5tXmzuKxMdmEiLQbKYkMz6x%2BpJJNKNUcmxkJQ3agrgYt2aHPpCs6F1homIcPK4L7PjSqleCokXk8pjIjnySOQjJkIc8%2FG7u4zkNNAA28Bo57KhM1HRNK0UxskWkpU%2BkQC2fcssAviiG4NGZc1jIhoS%2F8tEBdggO4B4%2B4uJ45gbCnWlvSwzD6u6i9BjqkAVuGnIUWM5Oguli0uqWC9edZThx%2BSFKdv7lTsB8FllPEBgxsyuNctpDtxVfDLzpIkQGY0tsRUTepC515fmUCJjM5UclhC5m8wfIU54y2jEfZ9C7ykZA2QQOrzhzf%2BNAcC7pMDgmI559C%2FQW3Kj6AZ4vngvpKA5znBekA5NyOE7GRCwS6o0XNmiy6mk%2BnErC%2FP6XeE6mFgDZthz%2B7LYSj3lRCxbmq&X-Amz-Signature=59f987975c9607610ce3a47a53ee1a677a4f7b2a09737a24b0d190f0d2134ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564AMP72%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BvLfr0VSwFxsap2fDOntmgNXaB8hoUsA1%2FNdgCpdfFAIhAKkkNhr01RWctMpvVWof%2BQbF25UG9AJOMDoK7FJd2Jq7KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFj8DXpxOn5pi7Y0q3AOXD6avmn9FETli6rCgCqV7RAK7Ux%2FS0gVW%2FcQglrUeKfr2EgSXuZFuoEt2pSBxWE21SRvOHWg3%2FMD9GiutP6rdQ6V73NPtQdtEnPO61CQpHxT2m8DtTsbSMwsxS4U45fv4gfNXQ5aohy8Du3s6VoBupAwGIk605LiieVL995VXdZ%2Bzu6e03PZgaqPsyWMYyWJRQ%2FnKxZb%2BvdhyJrAwtYs3Znp4ij4IM5pSuxKfNGm95Ewtd2up%2FlOJahVyNqp7xUgyRlkGR%2FCn0dRGQMg7qyPmjAjdbvFL1YNaK%2FjuesFhR1Gvrrnl73U77Gi%2BjbpkWSIA5vkOWBxfqcskqQvIOXdhDkGJAqgxp7sd09HJkuPfK81dRnN3ZwaOKK7Vkcj90ocx3KngTE5piLbhkDsqfwn7WqtjIMzc35D5tA2RkuONjcZn9WypnZhyVJDHE4bjPIsXv%2BTROacs5tXmzuKxMdmEiLQbKYkMz6x%2BpJJNKNUcmxkJQ3agrgYt2aHPpCs6F1homIcPK4L7PjSqleCokXk8pjIjnySOQjJkIc8%2FG7u4zkNNAA28Bo57KhM1HRNK0UxskWkpU%2BkQC2fcssAviiG4NGZc1jIhoS%2F8tEBdggO4B4%2B4uJ45gbCnWlvSwzD6u6i9BjqkAVuGnIUWM5Oguli0uqWC9edZThx%2BSFKdv7lTsB8FllPEBgxsyuNctpDtxVfDLzpIkQGY0tsRUTepC515fmUCJjM5UclhC5m8wfIU54y2jEfZ9C7ykZA2QQOrzhzf%2BNAcC7pMDgmI559C%2FQW3Kj6AZ4vngvpKA5znBekA5NyOE7GRCwS6o0XNmiy6mk%2BnErC%2FP6XeE6mFgDZthz%2B7LYSj3lRCxbmq&X-Amz-Signature=c68d0716319221a6424b64dce561ec63cc22494907f2035af6ef472ec9d86967&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564AMP72%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BvLfr0VSwFxsap2fDOntmgNXaB8hoUsA1%2FNdgCpdfFAIhAKkkNhr01RWctMpvVWof%2BQbF25UG9AJOMDoK7FJd2Jq7KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFj8DXpxOn5pi7Y0q3AOXD6avmn9FETli6rCgCqV7RAK7Ux%2FS0gVW%2FcQglrUeKfr2EgSXuZFuoEt2pSBxWE21SRvOHWg3%2FMD9GiutP6rdQ6V73NPtQdtEnPO61CQpHxT2m8DtTsbSMwsxS4U45fv4gfNXQ5aohy8Du3s6VoBupAwGIk605LiieVL995VXdZ%2Bzu6e03PZgaqPsyWMYyWJRQ%2FnKxZb%2BvdhyJrAwtYs3Znp4ij4IM5pSuxKfNGm95Ewtd2up%2FlOJahVyNqp7xUgyRlkGR%2FCn0dRGQMg7qyPmjAjdbvFL1YNaK%2FjuesFhR1Gvrrnl73U77Gi%2BjbpkWSIA5vkOWBxfqcskqQvIOXdhDkGJAqgxp7sd09HJkuPfK81dRnN3ZwaOKK7Vkcj90ocx3KngTE5piLbhkDsqfwn7WqtjIMzc35D5tA2RkuONjcZn9WypnZhyVJDHE4bjPIsXv%2BTROacs5tXmzuKxMdmEiLQbKYkMz6x%2BpJJNKNUcmxkJQ3agrgYt2aHPpCs6F1homIcPK4L7PjSqleCokXk8pjIjnySOQjJkIc8%2FG7u4zkNNAA28Bo57KhM1HRNK0UxskWkpU%2BkQC2fcssAviiG4NGZc1jIhoS%2F8tEBdggO4B4%2B4uJ45gbCnWlvSwzD6u6i9BjqkAVuGnIUWM5Oguli0uqWC9edZThx%2BSFKdv7lTsB8FllPEBgxsyuNctpDtxVfDLzpIkQGY0tsRUTepC515fmUCJjM5UclhC5m8wfIU54y2jEfZ9C7ykZA2QQOrzhzf%2BNAcC7pMDgmI559C%2FQW3Kj6AZ4vngvpKA5znBekA5NyOE7GRCwS6o0XNmiy6mk%2BnErC%2FP6XeE6mFgDZthz%2B7LYSj3lRCxbmq&X-Amz-Signature=5c1be7becfb98120ede8e78c93cd9e1da823f454814fd6f09511ff67aa9f7c70&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564AMP72%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T170637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BvLfr0VSwFxsap2fDOntmgNXaB8hoUsA1%2FNdgCpdfFAIhAKkkNhr01RWctMpvVWof%2BQbF25UG9AJOMDoK7FJd2Jq7KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqFj8DXpxOn5pi7Y0q3AOXD6avmn9FETli6rCgCqV7RAK7Ux%2FS0gVW%2FcQglrUeKfr2EgSXuZFuoEt2pSBxWE21SRvOHWg3%2FMD9GiutP6rdQ6V73NPtQdtEnPO61CQpHxT2m8DtTsbSMwsxS4U45fv4gfNXQ5aohy8Du3s6VoBupAwGIk605LiieVL995VXdZ%2Bzu6e03PZgaqPsyWMYyWJRQ%2FnKxZb%2BvdhyJrAwtYs3Znp4ij4IM5pSuxKfNGm95Ewtd2up%2FlOJahVyNqp7xUgyRlkGR%2FCn0dRGQMg7qyPmjAjdbvFL1YNaK%2FjuesFhR1Gvrrnl73U77Gi%2BjbpkWSIA5vkOWBxfqcskqQvIOXdhDkGJAqgxp7sd09HJkuPfK81dRnN3ZwaOKK7Vkcj90ocx3KngTE5piLbhkDsqfwn7WqtjIMzc35D5tA2RkuONjcZn9WypnZhyVJDHE4bjPIsXv%2BTROacs5tXmzuKxMdmEiLQbKYkMz6x%2BpJJNKNUcmxkJQ3agrgYt2aHPpCs6F1homIcPK4L7PjSqleCokXk8pjIjnySOQjJkIc8%2FG7u4zkNNAA28Bo57KhM1HRNK0UxskWkpU%2BkQC2fcssAviiG4NGZc1jIhoS%2F8tEBdggO4B4%2B4uJ45gbCnWlvSwzD6u6i9BjqkAVuGnIUWM5Oguli0uqWC9edZThx%2BSFKdv7lTsB8FllPEBgxsyuNctpDtxVfDLzpIkQGY0tsRUTepC515fmUCJjM5UclhC5m8wfIU54y2jEfZ9C7ykZA2QQOrzhzf%2BNAcC7pMDgmI559C%2FQW3Kj6AZ4vngvpKA5znBekA5NyOE7GRCwS6o0XNmiy6mk%2BnErC%2FP6XeE6mFgDZthz%2B7LYSj3lRCxbmq&X-Amz-Signature=1fe9809842bea0f043f57665f6d74eac1fa440895cfd5bf197badba27002609a&X-Amz-SignedHeaders=host&x-id=GetObject)
