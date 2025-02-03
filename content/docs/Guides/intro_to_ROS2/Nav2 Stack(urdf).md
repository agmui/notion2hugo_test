---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2PP2HC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAP3X8BDnvKIemcGIaPKPEZCc67TWPWe%2FOezBl4rmNG2AiEA8SZ2bRJEiOhCFPR9LfcGwqTQkqIiKgkyGrhX61wspFAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHvzOi30pL7sRu5ycCrcA6GO4VzD367RcTm6fPGh%2BdKRvA9hkZoUal74Ob4kZk53MKXHoOg%2BijJcweqEVXj14FGsql1023S8smRTvDwGmJ1TJTSJbCAxyTDtk8T1HI6KAdQKDGfDUvBr2FKoXk4UNOaakKC3edN2sm2%2B6Cl%2B3gxLxL2FWWq%2Fw%2FFt1eOS%2BsBWW2IivaE0CIbh1U0oCvJlIeCPy5vNN57AwEBRZs4s%2Fq3zWohc%2FD70Yh6MiSLtbOVPNX8DwpLZa9AjbZgcp6r8WqEtGRhcUW%2BB5FGC9Tb5QnabRG%2BeWIU5%2F0Q7riZbBTCZ9%2FC3s5u7qZhSBBKumWnkilhFD%2Fk9jfEyT9gCnCI0guJfNIFfz1a7V3NZspdXReDAD%2F2LGEXfTuz6Y%2FQ94FlOyReIw%2B6CSpv10WTSZaPJVSLSw2hqgFucsMa2GiByY5Eor3zdMvfR%2BsEoY6%2F8Z01O60ZDMBuM5XvdfZszxAV%2F%2BCTIqnygwr9tNuXzZkkwpu%2BOkjUmQOUvQA1s6IKSYwjb7oVs156TgXUeQLwz%2FkJ5OT1M%2BrZjZ5wqzcmYU6jQfC1%2Ba9TtDgBlMjt5Tl8FUfmtd6bia7g7No6wFW1I7Hr%2BwmPzQQeH9C%2FdevSZLYzLSibyCylyInLkVYC2ID6JMKnMg70GOqUBrLqJGPNeSK71%2FKiqClhuLm7eUnol8lrWOT00eXZ8KSC4mZ96Ausz1k%2FB7eWrZSOoVWDsj%2FlwS7h78ekG%2BBC4KGmiA%2FM3GNYxL1PlyLMDpjDrawT2DISTLKvYb0BztLLNmjyTiEWFLehY64sKZ%2BYu4grPXCR%2FwIafr%2BuZlpy%2F08xoaI5G0wJzs0e7rMqpUTqcvUEwDz%2FVPj2SdmQOjhq9yJvAvboj&X-Amz-Signature=19ce6f50fcd001985abec4daf6ff9bd3d3ba02fdd2b18963b2397ef233b82e62&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2PP2HC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAP3X8BDnvKIemcGIaPKPEZCc67TWPWe%2FOezBl4rmNG2AiEA8SZ2bRJEiOhCFPR9LfcGwqTQkqIiKgkyGrhX61wspFAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHvzOi30pL7sRu5ycCrcA6GO4VzD367RcTm6fPGh%2BdKRvA9hkZoUal74Ob4kZk53MKXHoOg%2BijJcweqEVXj14FGsql1023S8smRTvDwGmJ1TJTSJbCAxyTDtk8T1HI6KAdQKDGfDUvBr2FKoXk4UNOaakKC3edN2sm2%2B6Cl%2B3gxLxL2FWWq%2Fw%2FFt1eOS%2BsBWW2IivaE0CIbh1U0oCvJlIeCPy5vNN57AwEBRZs4s%2Fq3zWohc%2FD70Yh6MiSLtbOVPNX8DwpLZa9AjbZgcp6r8WqEtGRhcUW%2BB5FGC9Tb5QnabRG%2BeWIU5%2F0Q7riZbBTCZ9%2FC3s5u7qZhSBBKumWnkilhFD%2Fk9jfEyT9gCnCI0guJfNIFfz1a7V3NZspdXReDAD%2F2LGEXfTuz6Y%2FQ94FlOyReIw%2B6CSpv10WTSZaPJVSLSw2hqgFucsMa2GiByY5Eor3zdMvfR%2BsEoY6%2F8Z01O60ZDMBuM5XvdfZszxAV%2F%2BCTIqnygwr9tNuXzZkkwpu%2BOkjUmQOUvQA1s6IKSYwjb7oVs156TgXUeQLwz%2FkJ5OT1M%2BrZjZ5wqzcmYU6jQfC1%2Ba9TtDgBlMjt5Tl8FUfmtd6bia7g7No6wFW1I7Hr%2BwmPzQQeH9C%2FdevSZLYzLSibyCylyInLkVYC2ID6JMKnMg70GOqUBrLqJGPNeSK71%2FKiqClhuLm7eUnol8lrWOT00eXZ8KSC4mZ96Ausz1k%2FB7eWrZSOoVWDsj%2FlwS7h78ekG%2BBC4KGmiA%2FM3GNYxL1PlyLMDpjDrawT2DISTLKvYb0BztLLNmjyTiEWFLehY64sKZ%2BYu4grPXCR%2FwIafr%2BuZlpy%2F08xoaI5G0wJzs0e7rMqpUTqcvUEwDz%2FVPj2SdmQOjhq9yJvAvboj&X-Amz-Signature=a9bf5e555f076767bb170692361184f599df27be67815491ce6708e97f370189&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2PP2HC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAP3X8BDnvKIemcGIaPKPEZCc67TWPWe%2FOezBl4rmNG2AiEA8SZ2bRJEiOhCFPR9LfcGwqTQkqIiKgkyGrhX61wspFAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHvzOi30pL7sRu5ycCrcA6GO4VzD367RcTm6fPGh%2BdKRvA9hkZoUal74Ob4kZk53MKXHoOg%2BijJcweqEVXj14FGsql1023S8smRTvDwGmJ1TJTSJbCAxyTDtk8T1HI6KAdQKDGfDUvBr2FKoXk4UNOaakKC3edN2sm2%2B6Cl%2B3gxLxL2FWWq%2Fw%2FFt1eOS%2BsBWW2IivaE0CIbh1U0oCvJlIeCPy5vNN57AwEBRZs4s%2Fq3zWohc%2FD70Yh6MiSLtbOVPNX8DwpLZa9AjbZgcp6r8WqEtGRhcUW%2BB5FGC9Tb5QnabRG%2BeWIU5%2F0Q7riZbBTCZ9%2FC3s5u7qZhSBBKumWnkilhFD%2Fk9jfEyT9gCnCI0guJfNIFfz1a7V3NZspdXReDAD%2F2LGEXfTuz6Y%2FQ94FlOyReIw%2B6CSpv10WTSZaPJVSLSw2hqgFucsMa2GiByY5Eor3zdMvfR%2BsEoY6%2F8Z01O60ZDMBuM5XvdfZszxAV%2F%2BCTIqnygwr9tNuXzZkkwpu%2BOkjUmQOUvQA1s6IKSYwjb7oVs156TgXUeQLwz%2FkJ5OT1M%2BrZjZ5wqzcmYU6jQfC1%2Ba9TtDgBlMjt5Tl8FUfmtd6bia7g7No6wFW1I7Hr%2BwmPzQQeH9C%2FdevSZLYzLSibyCylyInLkVYC2ID6JMKnMg70GOqUBrLqJGPNeSK71%2FKiqClhuLm7eUnol8lrWOT00eXZ8KSC4mZ96Ausz1k%2FB7eWrZSOoVWDsj%2FlwS7h78ekG%2BBC4KGmiA%2FM3GNYxL1PlyLMDpjDrawT2DISTLKvYb0BztLLNmjyTiEWFLehY64sKZ%2BYu4grPXCR%2FwIafr%2BuZlpy%2F08xoaI5G0wJzs0e7rMqpUTqcvUEwDz%2FVPj2SdmQOjhq9yJvAvboj&X-Amz-Signature=fd79337604145121a1334aa7342f494226ffa2fe5127d68858192cac4b885bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2PP2HC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAP3X8BDnvKIemcGIaPKPEZCc67TWPWe%2FOezBl4rmNG2AiEA8SZ2bRJEiOhCFPR9LfcGwqTQkqIiKgkyGrhX61wspFAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHvzOi30pL7sRu5ycCrcA6GO4VzD367RcTm6fPGh%2BdKRvA9hkZoUal74Ob4kZk53MKXHoOg%2BijJcweqEVXj14FGsql1023S8smRTvDwGmJ1TJTSJbCAxyTDtk8T1HI6KAdQKDGfDUvBr2FKoXk4UNOaakKC3edN2sm2%2B6Cl%2B3gxLxL2FWWq%2Fw%2FFt1eOS%2BsBWW2IivaE0CIbh1U0oCvJlIeCPy5vNN57AwEBRZs4s%2Fq3zWohc%2FD70Yh6MiSLtbOVPNX8DwpLZa9AjbZgcp6r8WqEtGRhcUW%2BB5FGC9Tb5QnabRG%2BeWIU5%2F0Q7riZbBTCZ9%2FC3s5u7qZhSBBKumWnkilhFD%2Fk9jfEyT9gCnCI0guJfNIFfz1a7V3NZspdXReDAD%2F2LGEXfTuz6Y%2FQ94FlOyReIw%2B6CSpv10WTSZaPJVSLSw2hqgFucsMa2GiByY5Eor3zdMvfR%2BsEoY6%2F8Z01O60ZDMBuM5XvdfZszxAV%2F%2BCTIqnygwr9tNuXzZkkwpu%2BOkjUmQOUvQA1s6IKSYwjb7oVs156TgXUeQLwz%2FkJ5OT1M%2BrZjZ5wqzcmYU6jQfC1%2Ba9TtDgBlMjt5Tl8FUfmtd6bia7g7No6wFW1I7Hr%2BwmPzQQeH9C%2FdevSZLYzLSibyCylyInLkVYC2ID6JMKnMg70GOqUBrLqJGPNeSK71%2FKiqClhuLm7eUnol8lrWOT00eXZ8KSC4mZ96Ausz1k%2FB7eWrZSOoVWDsj%2FlwS7h78ekG%2BBC4KGmiA%2FM3GNYxL1PlyLMDpjDrawT2DISTLKvYb0BztLLNmjyTiEWFLehY64sKZ%2BYu4grPXCR%2FwIafr%2BuZlpy%2F08xoaI5G0wJzs0e7rMqpUTqcvUEwDz%2FVPj2SdmQOjhq9yJvAvboj&X-Amz-Signature=2b1a857695d4ab4ce89538dc9316d50a71d95f51a5d7117d40e5b7c7091b835a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2PP2HC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAP3X8BDnvKIemcGIaPKPEZCc67TWPWe%2FOezBl4rmNG2AiEA8SZ2bRJEiOhCFPR9LfcGwqTQkqIiKgkyGrhX61wspFAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHvzOi30pL7sRu5ycCrcA6GO4VzD367RcTm6fPGh%2BdKRvA9hkZoUal74Ob4kZk53MKXHoOg%2BijJcweqEVXj14FGsql1023S8smRTvDwGmJ1TJTSJbCAxyTDtk8T1HI6KAdQKDGfDUvBr2FKoXk4UNOaakKC3edN2sm2%2B6Cl%2B3gxLxL2FWWq%2Fw%2FFt1eOS%2BsBWW2IivaE0CIbh1U0oCvJlIeCPy5vNN57AwEBRZs4s%2Fq3zWohc%2FD70Yh6MiSLtbOVPNX8DwpLZa9AjbZgcp6r8WqEtGRhcUW%2BB5FGC9Tb5QnabRG%2BeWIU5%2F0Q7riZbBTCZ9%2FC3s5u7qZhSBBKumWnkilhFD%2Fk9jfEyT9gCnCI0guJfNIFfz1a7V3NZspdXReDAD%2F2LGEXfTuz6Y%2FQ94FlOyReIw%2B6CSpv10WTSZaPJVSLSw2hqgFucsMa2GiByY5Eor3zdMvfR%2BsEoY6%2F8Z01O60ZDMBuM5XvdfZszxAV%2F%2BCTIqnygwr9tNuXzZkkwpu%2BOkjUmQOUvQA1s6IKSYwjb7oVs156TgXUeQLwz%2FkJ5OT1M%2BrZjZ5wqzcmYU6jQfC1%2Ba9TtDgBlMjt5Tl8FUfmtd6bia7g7No6wFW1I7Hr%2BwmPzQQeH9C%2FdevSZLYzLSibyCylyInLkVYC2ID6JMKnMg70GOqUBrLqJGPNeSK71%2FKiqClhuLm7eUnol8lrWOT00eXZ8KSC4mZ96Ausz1k%2FB7eWrZSOoVWDsj%2FlwS7h78ekG%2BBC4KGmiA%2FM3GNYxL1PlyLMDpjDrawT2DISTLKvYb0BztLLNmjyTiEWFLehY64sKZ%2BYu4grPXCR%2FwIafr%2BuZlpy%2F08xoaI5G0wJzs0e7rMqpUTqcvUEwDz%2FVPj2SdmQOjhq9yJvAvboj&X-Amz-Signature=b0e476ed91556d8fbe8ef86aac4a135f8b32f0459116ef2fc80c654f3e4353af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY2PP2HC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIAP3X8BDnvKIemcGIaPKPEZCc67TWPWe%2FOezBl4rmNG2AiEA8SZ2bRJEiOhCFPR9LfcGwqTQkqIiKgkyGrhX61wspFAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHvzOi30pL7sRu5ycCrcA6GO4VzD367RcTm6fPGh%2BdKRvA9hkZoUal74Ob4kZk53MKXHoOg%2BijJcweqEVXj14FGsql1023S8smRTvDwGmJ1TJTSJbCAxyTDtk8T1HI6KAdQKDGfDUvBr2FKoXk4UNOaakKC3edN2sm2%2B6Cl%2B3gxLxL2FWWq%2Fw%2FFt1eOS%2BsBWW2IivaE0CIbh1U0oCvJlIeCPy5vNN57AwEBRZs4s%2Fq3zWohc%2FD70Yh6MiSLtbOVPNX8DwpLZa9AjbZgcp6r8WqEtGRhcUW%2BB5FGC9Tb5QnabRG%2BeWIU5%2F0Q7riZbBTCZ9%2FC3s5u7qZhSBBKumWnkilhFD%2Fk9jfEyT9gCnCI0guJfNIFfz1a7V3NZspdXReDAD%2F2LGEXfTuz6Y%2FQ94FlOyReIw%2B6CSpv10WTSZaPJVSLSw2hqgFucsMa2GiByY5Eor3zdMvfR%2BsEoY6%2F8Z01O60ZDMBuM5XvdfZszxAV%2F%2BCTIqnygwr9tNuXzZkkwpu%2BOkjUmQOUvQA1s6IKSYwjb7oVs156TgXUeQLwz%2FkJ5OT1M%2BrZjZ5wqzcmYU6jQfC1%2Ba9TtDgBlMjt5Tl8FUfmtd6bia7g7No6wFW1I7Hr%2BwmPzQQeH9C%2FdevSZLYzLSibyCylyInLkVYC2ID6JMKnMg70GOqUBrLqJGPNeSK71%2FKiqClhuLm7eUnol8lrWOT00eXZ8KSC4mZ96Ausz1k%2FB7eWrZSOoVWDsj%2FlwS7h78ekG%2BBC4KGmiA%2FM3GNYxL1PlyLMDpjDrawT2DISTLKvYb0BztLLNmjyTiEWFLehY64sKZ%2BYu4grPXCR%2FwIafr%2BuZlpy%2F08xoaI5G0wJzs0e7rMqpUTqcvUEwDz%2FVPj2SdmQOjhq9yJvAvboj&X-Amz-Signature=acc56af3efe4713dad506f5adcd3d661ed098abe0ccff0b6cf00b3648b4d22cf&X-Amz-SignedHeaders=host&x-id=GetObject)
