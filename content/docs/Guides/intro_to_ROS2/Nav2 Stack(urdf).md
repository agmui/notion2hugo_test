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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GUYDTM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4tJmxZUFKVhQaCnHPxhPpjTq2vteyyujNiFRooqZlBAiEA%2Fe9phNzPgen1zQ1%2Bs39sx6H25kdwKnj2sB91FcPFPZ8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBJUFc1i3Q5ny7rcdSrcAwxba21BRGcr7Bga%2FXJu6k2f%2Fv8IBeXwvaClHaoKaqSnFs57UiYQTzgBii3hLBeXqclRBwwkIyYag%2BAvjbJEV31%2Fv8VidMCheqKkGYOlSNIz%2FpRJPM60PlmLmccDvrusIAFMXNp830Cgul%2F6VFRwiEfzS%2Fhu5L64xPaLgpLD4NAZqlMZY%2FEk5f0IEKzVoMxAcgJ4iK8nD7HkAD1IKYET4AlxW83ORzXKUW51QiPRsEw14Iq1pILUiiRw9POOKUL8OOVvprGkw5j9W3Xid9MZR9MbzMl4K%2FsVfpUlivEildok2Cy1vQa75sC7ainL66E4DWbWbL7U%2FFOkZHXPZAKvce8TisH25b85wElbWz%2BhoPG%2ByaPeNBGHw6NXo7vnfdgDDbs2NEKxoMU4x0VwqXxZjim%2BMAIOcftSB6WbRaZvk8DYjRw7M1nwIAO%2Fd%2BlzWR6R7%2BD2YY6SXhwV3EsPEakHMs7q6YISrO3kd%2FeQbdcwFgZj19s%2BHizdrxts1BmsV8Vo4074qQ9pxjNy7Y3HMkAVTnkCaRuH2C5D%2FZM2EPe3cQHeKfS0quByMiydZV5rrLPf%2FtxNd6jC4N%2F6x%2F%2BNEaSqiE%2FrdTBTnsP8A7AcrcdMqzHvooBJvB2BaBcPRKD6MIf43MEGOqUB%2BUL6tNZwU%2FwlhIVPWHa5p1FAebhSNTM7DpC8KfSMbVKiL49UDtdzEljfI03UVdtauwCt9dOhEEsO0RoMFF1hhGIliqlTNifyqnYx2qVQ9wpGR6PWjuVGuYUrcst67o0OUo4w5WcS4RH6u9Y0eHLmYURJounw0vLkl1dPrkArUbMvlgV2VRc%2Bx5aNaE%2BwkA3OZZ9CqkkTEAAuKq2yM%2BRM4Jw5mTOE&X-Amz-Signature=abb14276be3bedaef5b71cf8a6fa7cb89bcd6208dbb516a66eb38d40fd12c036&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GUYDTM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4tJmxZUFKVhQaCnHPxhPpjTq2vteyyujNiFRooqZlBAiEA%2Fe9phNzPgen1zQ1%2Bs39sx6H25kdwKnj2sB91FcPFPZ8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBJUFc1i3Q5ny7rcdSrcAwxba21BRGcr7Bga%2FXJu6k2f%2Fv8IBeXwvaClHaoKaqSnFs57UiYQTzgBii3hLBeXqclRBwwkIyYag%2BAvjbJEV31%2Fv8VidMCheqKkGYOlSNIz%2FpRJPM60PlmLmccDvrusIAFMXNp830Cgul%2F6VFRwiEfzS%2Fhu5L64xPaLgpLD4NAZqlMZY%2FEk5f0IEKzVoMxAcgJ4iK8nD7HkAD1IKYET4AlxW83ORzXKUW51QiPRsEw14Iq1pILUiiRw9POOKUL8OOVvprGkw5j9W3Xid9MZR9MbzMl4K%2FsVfpUlivEildok2Cy1vQa75sC7ainL66E4DWbWbL7U%2FFOkZHXPZAKvce8TisH25b85wElbWz%2BhoPG%2ByaPeNBGHw6NXo7vnfdgDDbs2NEKxoMU4x0VwqXxZjim%2BMAIOcftSB6WbRaZvk8DYjRw7M1nwIAO%2Fd%2BlzWR6R7%2BD2YY6SXhwV3EsPEakHMs7q6YISrO3kd%2FeQbdcwFgZj19s%2BHizdrxts1BmsV8Vo4074qQ9pxjNy7Y3HMkAVTnkCaRuH2C5D%2FZM2EPe3cQHeKfS0quByMiydZV5rrLPf%2FtxNd6jC4N%2F6x%2F%2BNEaSqiE%2FrdTBTnsP8A7AcrcdMqzHvooBJvB2BaBcPRKD6MIf43MEGOqUB%2BUL6tNZwU%2FwlhIVPWHa5p1FAebhSNTM7DpC8KfSMbVKiL49UDtdzEljfI03UVdtauwCt9dOhEEsO0RoMFF1hhGIliqlTNifyqnYx2qVQ9wpGR6PWjuVGuYUrcst67o0OUo4w5WcS4RH6u9Y0eHLmYURJounw0vLkl1dPrkArUbMvlgV2VRc%2Bx5aNaE%2BwkA3OZZ9CqkkTEAAuKq2yM%2BRM4Jw5mTOE&X-Amz-Signature=b8baddc76d14286f15d3e93fe57df72abe93229c96867cdb40d38abc1c99c445&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GUYDTM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4tJmxZUFKVhQaCnHPxhPpjTq2vteyyujNiFRooqZlBAiEA%2Fe9phNzPgen1zQ1%2Bs39sx6H25kdwKnj2sB91FcPFPZ8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBJUFc1i3Q5ny7rcdSrcAwxba21BRGcr7Bga%2FXJu6k2f%2Fv8IBeXwvaClHaoKaqSnFs57UiYQTzgBii3hLBeXqclRBwwkIyYag%2BAvjbJEV31%2Fv8VidMCheqKkGYOlSNIz%2FpRJPM60PlmLmccDvrusIAFMXNp830Cgul%2F6VFRwiEfzS%2Fhu5L64xPaLgpLD4NAZqlMZY%2FEk5f0IEKzVoMxAcgJ4iK8nD7HkAD1IKYET4AlxW83ORzXKUW51QiPRsEw14Iq1pILUiiRw9POOKUL8OOVvprGkw5j9W3Xid9MZR9MbzMl4K%2FsVfpUlivEildok2Cy1vQa75sC7ainL66E4DWbWbL7U%2FFOkZHXPZAKvce8TisH25b85wElbWz%2BhoPG%2ByaPeNBGHw6NXo7vnfdgDDbs2NEKxoMU4x0VwqXxZjim%2BMAIOcftSB6WbRaZvk8DYjRw7M1nwIAO%2Fd%2BlzWR6R7%2BD2YY6SXhwV3EsPEakHMs7q6YISrO3kd%2FeQbdcwFgZj19s%2BHizdrxts1BmsV8Vo4074qQ9pxjNy7Y3HMkAVTnkCaRuH2C5D%2FZM2EPe3cQHeKfS0quByMiydZV5rrLPf%2FtxNd6jC4N%2F6x%2F%2BNEaSqiE%2FrdTBTnsP8A7AcrcdMqzHvooBJvB2BaBcPRKD6MIf43MEGOqUB%2BUL6tNZwU%2FwlhIVPWHa5p1FAebhSNTM7DpC8KfSMbVKiL49UDtdzEljfI03UVdtauwCt9dOhEEsO0RoMFF1hhGIliqlTNifyqnYx2qVQ9wpGR6PWjuVGuYUrcst67o0OUo4w5WcS4RH6u9Y0eHLmYURJounw0vLkl1dPrkArUbMvlgV2VRc%2Bx5aNaE%2BwkA3OZZ9CqkkTEAAuKq2yM%2BRM4Jw5mTOE&X-Amz-Signature=9cdf33bd0c807556a55af3fae82b7b93a92c4d91752741783213a0b7aab33f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GUYDTM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4tJmxZUFKVhQaCnHPxhPpjTq2vteyyujNiFRooqZlBAiEA%2Fe9phNzPgen1zQ1%2Bs39sx6H25kdwKnj2sB91FcPFPZ8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBJUFc1i3Q5ny7rcdSrcAwxba21BRGcr7Bga%2FXJu6k2f%2Fv8IBeXwvaClHaoKaqSnFs57UiYQTzgBii3hLBeXqclRBwwkIyYag%2BAvjbJEV31%2Fv8VidMCheqKkGYOlSNIz%2FpRJPM60PlmLmccDvrusIAFMXNp830Cgul%2F6VFRwiEfzS%2Fhu5L64xPaLgpLD4NAZqlMZY%2FEk5f0IEKzVoMxAcgJ4iK8nD7HkAD1IKYET4AlxW83ORzXKUW51QiPRsEw14Iq1pILUiiRw9POOKUL8OOVvprGkw5j9W3Xid9MZR9MbzMl4K%2FsVfpUlivEildok2Cy1vQa75sC7ainL66E4DWbWbL7U%2FFOkZHXPZAKvce8TisH25b85wElbWz%2BhoPG%2ByaPeNBGHw6NXo7vnfdgDDbs2NEKxoMU4x0VwqXxZjim%2BMAIOcftSB6WbRaZvk8DYjRw7M1nwIAO%2Fd%2BlzWR6R7%2BD2YY6SXhwV3EsPEakHMs7q6YISrO3kd%2FeQbdcwFgZj19s%2BHizdrxts1BmsV8Vo4074qQ9pxjNy7Y3HMkAVTnkCaRuH2C5D%2FZM2EPe3cQHeKfS0quByMiydZV5rrLPf%2FtxNd6jC4N%2F6x%2F%2BNEaSqiE%2FrdTBTnsP8A7AcrcdMqzHvooBJvB2BaBcPRKD6MIf43MEGOqUB%2BUL6tNZwU%2FwlhIVPWHa5p1FAebhSNTM7DpC8KfSMbVKiL49UDtdzEljfI03UVdtauwCt9dOhEEsO0RoMFF1hhGIliqlTNifyqnYx2qVQ9wpGR6PWjuVGuYUrcst67o0OUo4w5WcS4RH6u9Y0eHLmYURJounw0vLkl1dPrkArUbMvlgV2VRc%2Bx5aNaE%2BwkA3OZZ9CqkkTEAAuKq2yM%2BRM4Jw5mTOE&X-Amz-Signature=dc902dc7da628508509f0f52bc0b701673168400d72d4bd77b9964d7bf06d30d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GUYDTM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4tJmxZUFKVhQaCnHPxhPpjTq2vteyyujNiFRooqZlBAiEA%2Fe9phNzPgen1zQ1%2Bs39sx6H25kdwKnj2sB91FcPFPZ8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBJUFc1i3Q5ny7rcdSrcAwxba21BRGcr7Bga%2FXJu6k2f%2Fv8IBeXwvaClHaoKaqSnFs57UiYQTzgBii3hLBeXqclRBwwkIyYag%2BAvjbJEV31%2Fv8VidMCheqKkGYOlSNIz%2FpRJPM60PlmLmccDvrusIAFMXNp830Cgul%2F6VFRwiEfzS%2Fhu5L64xPaLgpLD4NAZqlMZY%2FEk5f0IEKzVoMxAcgJ4iK8nD7HkAD1IKYET4AlxW83ORzXKUW51QiPRsEw14Iq1pILUiiRw9POOKUL8OOVvprGkw5j9W3Xid9MZR9MbzMl4K%2FsVfpUlivEildok2Cy1vQa75sC7ainL66E4DWbWbL7U%2FFOkZHXPZAKvce8TisH25b85wElbWz%2BhoPG%2ByaPeNBGHw6NXo7vnfdgDDbs2NEKxoMU4x0VwqXxZjim%2BMAIOcftSB6WbRaZvk8DYjRw7M1nwIAO%2Fd%2BlzWR6R7%2BD2YY6SXhwV3EsPEakHMs7q6YISrO3kd%2FeQbdcwFgZj19s%2BHizdrxts1BmsV8Vo4074qQ9pxjNy7Y3HMkAVTnkCaRuH2C5D%2FZM2EPe3cQHeKfS0quByMiydZV5rrLPf%2FtxNd6jC4N%2F6x%2F%2BNEaSqiE%2FrdTBTnsP8A7AcrcdMqzHvooBJvB2BaBcPRKD6MIf43MEGOqUB%2BUL6tNZwU%2FwlhIVPWHa5p1FAebhSNTM7DpC8KfSMbVKiL49UDtdzEljfI03UVdtauwCt9dOhEEsO0RoMFF1hhGIliqlTNifyqnYx2qVQ9wpGR6PWjuVGuYUrcst67o0OUo4w5WcS4RH6u9Y0eHLmYURJounw0vLkl1dPrkArUbMvlgV2VRc%2Bx5aNaE%2BwkA3OZZ9CqkkTEAAuKq2yM%2BRM4Jw5mTOE&X-Amz-Signature=d1b151623f3a5a25ae0f60301cfdeb1ef3e424306146c1890087a8f9db4c4d62&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GUYDTM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4tJmxZUFKVhQaCnHPxhPpjTq2vteyyujNiFRooqZlBAiEA%2Fe9phNzPgen1zQ1%2Bs39sx6H25kdwKnj2sB91FcPFPZ8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBJUFc1i3Q5ny7rcdSrcAwxba21BRGcr7Bga%2FXJu6k2f%2Fv8IBeXwvaClHaoKaqSnFs57UiYQTzgBii3hLBeXqclRBwwkIyYag%2BAvjbJEV31%2Fv8VidMCheqKkGYOlSNIz%2FpRJPM60PlmLmccDvrusIAFMXNp830Cgul%2F6VFRwiEfzS%2Fhu5L64xPaLgpLD4NAZqlMZY%2FEk5f0IEKzVoMxAcgJ4iK8nD7HkAD1IKYET4AlxW83ORzXKUW51QiPRsEw14Iq1pILUiiRw9POOKUL8OOVvprGkw5j9W3Xid9MZR9MbzMl4K%2FsVfpUlivEildok2Cy1vQa75sC7ainL66E4DWbWbL7U%2FFOkZHXPZAKvce8TisH25b85wElbWz%2BhoPG%2ByaPeNBGHw6NXo7vnfdgDDbs2NEKxoMU4x0VwqXxZjim%2BMAIOcftSB6WbRaZvk8DYjRw7M1nwIAO%2Fd%2BlzWR6R7%2BD2YY6SXhwV3EsPEakHMs7q6YISrO3kd%2FeQbdcwFgZj19s%2BHizdrxts1BmsV8Vo4074qQ9pxjNy7Y3HMkAVTnkCaRuH2C5D%2FZM2EPe3cQHeKfS0quByMiydZV5rrLPf%2FtxNd6jC4N%2F6x%2F%2BNEaSqiE%2FrdTBTnsP8A7AcrcdMqzHvooBJvB2BaBcPRKD6MIf43MEGOqUB%2BUL6tNZwU%2FwlhIVPWHa5p1FAebhSNTM7DpC8KfSMbVKiL49UDtdzEljfI03UVdtauwCt9dOhEEsO0RoMFF1hhGIliqlTNifyqnYx2qVQ9wpGR6PWjuVGuYUrcst67o0OUo4w5WcS4RH6u9Y0eHLmYURJounw0vLkl1dPrkArUbMvlgV2VRc%2Bx5aNaE%2BwkA3OZZ9CqkkTEAAuKq2yM%2BRM4Jw5mTOE&X-Amz-Signature=fdeb7660a6c787d1e3685db662d9c3a93b9378de6f7517b6745317460013cf50&X-Amz-SignedHeaders=host&x-id=GetObject)
