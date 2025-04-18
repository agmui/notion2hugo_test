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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7XMHDD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBp8gY9HDN5aR%2F6sQv79kcymYdbp9NkbTYrQKpw4ZeJgIhANCbhD%2BMtjUI5o%2BFOyAXcaN%2BbmSsvdgCU4ueDdFcO4WqKv8DCHIQABoMNjM3NDIzMTgzODA1IgxPD1IPgs6COkvDuH8q3AOZkK48sHtTAQ0zH2tQHy3UCSlLsnmPkY023XvOS4k9OCnD2Vtyg0O3y%2BeVUHDEfDBN2Pg90GXboW465rFaWDZujN3sFWxHrOLVWnwPufvep7tgXQ8dZo%2BqQjMhScnO%2FNor1HSfuNxw8TI3kf2f5vVwYfdFnWxb4xm9rpeJoVcduEh3gIBm1a1JMOICxshI4in%2BvDWwquRUmR4Ghu5QyyPjXaHm4w1XuUEbd5JcCfuzsPkKUy5vQUCh%2FigvR8HW5KQopWzk%2FUPQLhnegsEC9Myel2kjvwfLb%2FxcZu04WwL23ecNjCCmKmdGb6xB%2F%2BbEHqrqPDjlPT953dvSOYbKXZbg2ZzJe9pKqPSy46D%2FKF9gRYrb4RCxUd7QgkesQgUJFNBmTmZrAYJxH2UZhBguOrlO0GLt7D6M%2BfH86lPTjZYoOuEW6hNd2fW0WcwioWpNK1ueR%2Bfs3KeK8V7%2FjIVjuZ9vOorLBtVjak5TS4bp6DEN3empIQ0BJPDLeEXksaCOndsEjtoYU9sRw9atTe14qkw8gFisI4UVyVJJpiTovh8VeNuga22JdPFfuXU8ZodNt3pBWN3jV7onLqeyFMb4KTD4INi4TwU8vgyn6oCoTTW4nloFszDrkZzbR4riojD4rIjABjqkAaJwYEXxYKhRQJdBlEMWLLMRJ%2F5Rs7hQqBXbFkNBRs5cnKvMKTPSjy4iO%2BpHb4y501uefeLuYPWRiAlO9JdK8KEn4VXDu3HQOa2yVdqtWk65NibIaVDd1KBU3Eef78IL1R50fk72fMgo8k%2BdAkRinLSHgR9ShGTXeb%2BsehVHtfw462ZkvCYRvZ0y7DSQSqi7C%2FWvGFFQteKZkGm3p%2FjbUk3ZzKyC&X-Amz-Signature=c6802f6bc8d53f9336890de1cf6967c4a11fe3f45441fa1bdec44097ed135459&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7XMHDD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBp8gY9HDN5aR%2F6sQv79kcymYdbp9NkbTYrQKpw4ZeJgIhANCbhD%2BMtjUI5o%2BFOyAXcaN%2BbmSsvdgCU4ueDdFcO4WqKv8DCHIQABoMNjM3NDIzMTgzODA1IgxPD1IPgs6COkvDuH8q3AOZkK48sHtTAQ0zH2tQHy3UCSlLsnmPkY023XvOS4k9OCnD2Vtyg0O3y%2BeVUHDEfDBN2Pg90GXboW465rFaWDZujN3sFWxHrOLVWnwPufvep7tgXQ8dZo%2BqQjMhScnO%2FNor1HSfuNxw8TI3kf2f5vVwYfdFnWxb4xm9rpeJoVcduEh3gIBm1a1JMOICxshI4in%2BvDWwquRUmR4Ghu5QyyPjXaHm4w1XuUEbd5JcCfuzsPkKUy5vQUCh%2FigvR8HW5KQopWzk%2FUPQLhnegsEC9Myel2kjvwfLb%2FxcZu04WwL23ecNjCCmKmdGb6xB%2F%2BbEHqrqPDjlPT953dvSOYbKXZbg2ZzJe9pKqPSy46D%2FKF9gRYrb4RCxUd7QgkesQgUJFNBmTmZrAYJxH2UZhBguOrlO0GLt7D6M%2BfH86lPTjZYoOuEW6hNd2fW0WcwioWpNK1ueR%2Bfs3KeK8V7%2FjIVjuZ9vOorLBtVjak5TS4bp6DEN3empIQ0BJPDLeEXksaCOndsEjtoYU9sRw9atTe14qkw8gFisI4UVyVJJpiTovh8VeNuga22JdPFfuXU8ZodNt3pBWN3jV7onLqeyFMb4KTD4INi4TwU8vgyn6oCoTTW4nloFszDrkZzbR4riojD4rIjABjqkAaJwYEXxYKhRQJdBlEMWLLMRJ%2F5Rs7hQqBXbFkNBRs5cnKvMKTPSjy4iO%2BpHb4y501uefeLuYPWRiAlO9JdK8KEn4VXDu3HQOa2yVdqtWk65NibIaVDd1KBU3Eef78IL1R50fk72fMgo8k%2BdAkRinLSHgR9ShGTXeb%2BsehVHtfw462ZkvCYRvZ0y7DSQSqi7C%2FWvGFFQteKZkGm3p%2FjbUk3ZzKyC&X-Amz-Signature=2eee507183fa4e946301f26f6377dc80f024b4019a6d00e2f3aba67d7eff77f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7XMHDD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBp8gY9HDN5aR%2F6sQv79kcymYdbp9NkbTYrQKpw4ZeJgIhANCbhD%2BMtjUI5o%2BFOyAXcaN%2BbmSsvdgCU4ueDdFcO4WqKv8DCHIQABoMNjM3NDIzMTgzODA1IgxPD1IPgs6COkvDuH8q3AOZkK48sHtTAQ0zH2tQHy3UCSlLsnmPkY023XvOS4k9OCnD2Vtyg0O3y%2BeVUHDEfDBN2Pg90GXboW465rFaWDZujN3sFWxHrOLVWnwPufvep7tgXQ8dZo%2BqQjMhScnO%2FNor1HSfuNxw8TI3kf2f5vVwYfdFnWxb4xm9rpeJoVcduEh3gIBm1a1JMOICxshI4in%2BvDWwquRUmR4Ghu5QyyPjXaHm4w1XuUEbd5JcCfuzsPkKUy5vQUCh%2FigvR8HW5KQopWzk%2FUPQLhnegsEC9Myel2kjvwfLb%2FxcZu04WwL23ecNjCCmKmdGb6xB%2F%2BbEHqrqPDjlPT953dvSOYbKXZbg2ZzJe9pKqPSy46D%2FKF9gRYrb4RCxUd7QgkesQgUJFNBmTmZrAYJxH2UZhBguOrlO0GLt7D6M%2BfH86lPTjZYoOuEW6hNd2fW0WcwioWpNK1ueR%2Bfs3KeK8V7%2FjIVjuZ9vOorLBtVjak5TS4bp6DEN3empIQ0BJPDLeEXksaCOndsEjtoYU9sRw9atTe14qkw8gFisI4UVyVJJpiTovh8VeNuga22JdPFfuXU8ZodNt3pBWN3jV7onLqeyFMb4KTD4INi4TwU8vgyn6oCoTTW4nloFszDrkZzbR4riojD4rIjABjqkAaJwYEXxYKhRQJdBlEMWLLMRJ%2F5Rs7hQqBXbFkNBRs5cnKvMKTPSjy4iO%2BpHb4y501uefeLuYPWRiAlO9JdK8KEn4VXDu3HQOa2yVdqtWk65NibIaVDd1KBU3Eef78IL1R50fk72fMgo8k%2BdAkRinLSHgR9ShGTXeb%2BsehVHtfw462ZkvCYRvZ0y7DSQSqi7C%2FWvGFFQteKZkGm3p%2FjbUk3ZzKyC&X-Amz-Signature=e559c0814cbfdbe8dac52a16fe987132d29ad414fb25a797cc9d96cfe6f9b69c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7XMHDD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBp8gY9HDN5aR%2F6sQv79kcymYdbp9NkbTYrQKpw4ZeJgIhANCbhD%2BMtjUI5o%2BFOyAXcaN%2BbmSsvdgCU4ueDdFcO4WqKv8DCHIQABoMNjM3NDIzMTgzODA1IgxPD1IPgs6COkvDuH8q3AOZkK48sHtTAQ0zH2tQHy3UCSlLsnmPkY023XvOS4k9OCnD2Vtyg0O3y%2BeVUHDEfDBN2Pg90GXboW465rFaWDZujN3sFWxHrOLVWnwPufvep7tgXQ8dZo%2BqQjMhScnO%2FNor1HSfuNxw8TI3kf2f5vVwYfdFnWxb4xm9rpeJoVcduEh3gIBm1a1JMOICxshI4in%2BvDWwquRUmR4Ghu5QyyPjXaHm4w1XuUEbd5JcCfuzsPkKUy5vQUCh%2FigvR8HW5KQopWzk%2FUPQLhnegsEC9Myel2kjvwfLb%2FxcZu04WwL23ecNjCCmKmdGb6xB%2F%2BbEHqrqPDjlPT953dvSOYbKXZbg2ZzJe9pKqPSy46D%2FKF9gRYrb4RCxUd7QgkesQgUJFNBmTmZrAYJxH2UZhBguOrlO0GLt7D6M%2BfH86lPTjZYoOuEW6hNd2fW0WcwioWpNK1ueR%2Bfs3KeK8V7%2FjIVjuZ9vOorLBtVjak5TS4bp6DEN3empIQ0BJPDLeEXksaCOndsEjtoYU9sRw9atTe14qkw8gFisI4UVyVJJpiTovh8VeNuga22JdPFfuXU8ZodNt3pBWN3jV7onLqeyFMb4KTD4INi4TwU8vgyn6oCoTTW4nloFszDrkZzbR4riojD4rIjABjqkAaJwYEXxYKhRQJdBlEMWLLMRJ%2F5Rs7hQqBXbFkNBRs5cnKvMKTPSjy4iO%2BpHb4y501uefeLuYPWRiAlO9JdK8KEn4VXDu3HQOa2yVdqtWk65NibIaVDd1KBU3Eef78IL1R50fk72fMgo8k%2BdAkRinLSHgR9ShGTXeb%2BsehVHtfw462ZkvCYRvZ0y7DSQSqi7C%2FWvGFFQteKZkGm3p%2FjbUk3ZzKyC&X-Amz-Signature=c6e17ef8595763229539af955710434eaf6ea634568f28012a49721fd3524772&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7XMHDD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBp8gY9HDN5aR%2F6sQv79kcymYdbp9NkbTYrQKpw4ZeJgIhANCbhD%2BMtjUI5o%2BFOyAXcaN%2BbmSsvdgCU4ueDdFcO4WqKv8DCHIQABoMNjM3NDIzMTgzODA1IgxPD1IPgs6COkvDuH8q3AOZkK48sHtTAQ0zH2tQHy3UCSlLsnmPkY023XvOS4k9OCnD2Vtyg0O3y%2BeVUHDEfDBN2Pg90GXboW465rFaWDZujN3sFWxHrOLVWnwPufvep7tgXQ8dZo%2BqQjMhScnO%2FNor1HSfuNxw8TI3kf2f5vVwYfdFnWxb4xm9rpeJoVcduEh3gIBm1a1JMOICxshI4in%2BvDWwquRUmR4Ghu5QyyPjXaHm4w1XuUEbd5JcCfuzsPkKUy5vQUCh%2FigvR8HW5KQopWzk%2FUPQLhnegsEC9Myel2kjvwfLb%2FxcZu04WwL23ecNjCCmKmdGb6xB%2F%2BbEHqrqPDjlPT953dvSOYbKXZbg2ZzJe9pKqPSy46D%2FKF9gRYrb4RCxUd7QgkesQgUJFNBmTmZrAYJxH2UZhBguOrlO0GLt7D6M%2BfH86lPTjZYoOuEW6hNd2fW0WcwioWpNK1ueR%2Bfs3KeK8V7%2FjIVjuZ9vOorLBtVjak5TS4bp6DEN3empIQ0BJPDLeEXksaCOndsEjtoYU9sRw9atTe14qkw8gFisI4UVyVJJpiTovh8VeNuga22JdPFfuXU8ZodNt3pBWN3jV7onLqeyFMb4KTD4INi4TwU8vgyn6oCoTTW4nloFszDrkZzbR4riojD4rIjABjqkAaJwYEXxYKhRQJdBlEMWLLMRJ%2F5Rs7hQqBXbFkNBRs5cnKvMKTPSjy4iO%2BpHb4y501uefeLuYPWRiAlO9JdK8KEn4VXDu3HQOa2yVdqtWk65NibIaVDd1KBU3Eef78IL1R50fk72fMgo8k%2BdAkRinLSHgR9ShGTXeb%2BsehVHtfw462ZkvCYRvZ0y7DSQSqi7C%2FWvGFFQteKZkGm3p%2FjbUk3ZzKyC&X-Amz-Signature=2aec6b8d1c280c58de5080d78f2629b70a0c82c83b31717a1f56e3e05858c27f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7XMHDD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBp8gY9HDN5aR%2F6sQv79kcymYdbp9NkbTYrQKpw4ZeJgIhANCbhD%2BMtjUI5o%2BFOyAXcaN%2BbmSsvdgCU4ueDdFcO4WqKv8DCHIQABoMNjM3NDIzMTgzODA1IgxPD1IPgs6COkvDuH8q3AOZkK48sHtTAQ0zH2tQHy3UCSlLsnmPkY023XvOS4k9OCnD2Vtyg0O3y%2BeVUHDEfDBN2Pg90GXboW465rFaWDZujN3sFWxHrOLVWnwPufvep7tgXQ8dZo%2BqQjMhScnO%2FNor1HSfuNxw8TI3kf2f5vVwYfdFnWxb4xm9rpeJoVcduEh3gIBm1a1JMOICxshI4in%2BvDWwquRUmR4Ghu5QyyPjXaHm4w1XuUEbd5JcCfuzsPkKUy5vQUCh%2FigvR8HW5KQopWzk%2FUPQLhnegsEC9Myel2kjvwfLb%2FxcZu04WwL23ecNjCCmKmdGb6xB%2F%2BbEHqrqPDjlPT953dvSOYbKXZbg2ZzJe9pKqPSy46D%2FKF9gRYrb4RCxUd7QgkesQgUJFNBmTmZrAYJxH2UZhBguOrlO0GLt7D6M%2BfH86lPTjZYoOuEW6hNd2fW0WcwioWpNK1ueR%2Bfs3KeK8V7%2FjIVjuZ9vOorLBtVjak5TS4bp6DEN3empIQ0BJPDLeEXksaCOndsEjtoYU9sRw9atTe14qkw8gFisI4UVyVJJpiTovh8VeNuga22JdPFfuXU8ZodNt3pBWN3jV7onLqeyFMb4KTD4INi4TwU8vgyn6oCoTTW4nloFszDrkZzbR4riojD4rIjABjqkAaJwYEXxYKhRQJdBlEMWLLMRJ%2F5Rs7hQqBXbFkNBRs5cnKvMKTPSjy4iO%2BpHb4y501uefeLuYPWRiAlO9JdK8KEn4VXDu3HQOa2yVdqtWk65NibIaVDd1KBU3Eef78IL1R50fk72fMgo8k%2BdAkRinLSHgR9ShGTXeb%2BsehVHtfw462ZkvCYRvZ0y7DSQSqi7C%2FWvGFFQteKZkGm3p%2FjbUk3ZzKyC&X-Amz-Signature=a82babeb51ad93fadcdab39eaaff4acc4f1cae24e829db3b765bbdff5a313675&X-Amz-SignedHeaders=host&x-id=GetObject)
