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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z5PYU2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBHpbpv6E1K8Sx90fcpCXK%2BlIcjGAHLmeB5DimfL0cxiAiEA9ug%2Bz0rtdFCBavZYOqZ1peCjaNBeUHlvty7lOHGK1I0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMEtpWRv7Z1IJUibyrcA5RlORXTzzroS0HcNI3pdEzlO9RlhMs7otoyPNqREDT4j%2F8eyDvG0S7YCTGvc16ThrICXPcol9SbNE%2FviG9CRoCdLTEqRVz%2B0TAFlRjjHFJ244xMHYktocshJV7t%2BaV%2FRpMCJGAn%2BEWGCDZyM7%2BK1LCUB6Y11a6h%2Bma75RRPjEk7iLFLnghzN7Tfa1kBDJUa9lgRGFI%2B8ywAZt6kwwlk9bmaVHOoUfmJcFfBC%2Fy2eOODKAX%2FTtJqdHs7yoSKCzTW2IUpL22B659Dnh6eEDx0NN1wxIWfkRfeLvpCsA2t6JCkmLhrCekVl1ytpAmtLDribWWxtYg0PeIYBsAgyiJxQG7eqq5OoyUsrqo%2F0rareAT3WZLI9fMxguQutQXpDWvwX5YDWZNvHdK5T1R2RfJ8K3fq34%2BYStyCXdFXdtyaWdO18h04sC%2FcIjZm30kq849EKCWKpgMht61%2F0Q1EpS7oVDy1AIXdKOfBloymGkKUA0Kwbf%2FBUikVIKhwPPLyuTpNvqWPVxfCA%2FOtJQtygV2gkqgjfcWYQyVG%2BN4hPMpndBrMmx2OjHunAiz2NvDz76iy0SRlabq90a3J%2BSiL8fQpFmECsutl2CVN4qKEru1RG%2FiaGq0C8PUBoXNoXtxUMInopsIGOqUBJBjZJQDJfAf%2FPp9DzJL1MD1KRr1L6i3xl8kdBbiMlpB45IWW7GDhKFWQ6uIvJlmdjGDf9YyQMNtRvRgLnkLLTdD6LazomLvHziZBhedyXrelHRYagA3L9ZuaDKFbp%2FUJarf2SnoIdrH7LjRWrhFABwTnyJFHg3SFtlcpQS6bXRp%2FyxVlWBONWeLOs2W53uPshgZcWeauX0ijj%2BkNlUW157UBYxKA&X-Amz-Signature=883b0f7bdd229fce943da102f4d1b08dba10b22057381511aad0945d1ebe804e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z5PYU2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBHpbpv6E1K8Sx90fcpCXK%2BlIcjGAHLmeB5DimfL0cxiAiEA9ug%2Bz0rtdFCBavZYOqZ1peCjaNBeUHlvty7lOHGK1I0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMEtpWRv7Z1IJUibyrcA5RlORXTzzroS0HcNI3pdEzlO9RlhMs7otoyPNqREDT4j%2F8eyDvG0S7YCTGvc16ThrICXPcol9SbNE%2FviG9CRoCdLTEqRVz%2B0TAFlRjjHFJ244xMHYktocshJV7t%2BaV%2FRpMCJGAn%2BEWGCDZyM7%2BK1LCUB6Y11a6h%2Bma75RRPjEk7iLFLnghzN7Tfa1kBDJUa9lgRGFI%2B8ywAZt6kwwlk9bmaVHOoUfmJcFfBC%2Fy2eOODKAX%2FTtJqdHs7yoSKCzTW2IUpL22B659Dnh6eEDx0NN1wxIWfkRfeLvpCsA2t6JCkmLhrCekVl1ytpAmtLDribWWxtYg0PeIYBsAgyiJxQG7eqq5OoyUsrqo%2F0rareAT3WZLI9fMxguQutQXpDWvwX5YDWZNvHdK5T1R2RfJ8K3fq34%2BYStyCXdFXdtyaWdO18h04sC%2FcIjZm30kq849EKCWKpgMht61%2F0Q1EpS7oVDy1AIXdKOfBloymGkKUA0Kwbf%2FBUikVIKhwPPLyuTpNvqWPVxfCA%2FOtJQtygV2gkqgjfcWYQyVG%2BN4hPMpndBrMmx2OjHunAiz2NvDz76iy0SRlabq90a3J%2BSiL8fQpFmECsutl2CVN4qKEru1RG%2FiaGq0C8PUBoXNoXtxUMInopsIGOqUBJBjZJQDJfAf%2FPp9DzJL1MD1KRr1L6i3xl8kdBbiMlpB45IWW7GDhKFWQ6uIvJlmdjGDf9YyQMNtRvRgLnkLLTdD6LazomLvHziZBhedyXrelHRYagA3L9ZuaDKFbp%2FUJarf2SnoIdrH7LjRWrhFABwTnyJFHg3SFtlcpQS6bXRp%2FyxVlWBONWeLOs2W53uPshgZcWeauX0ijj%2BkNlUW157UBYxKA&X-Amz-Signature=c77fe7b6b6ad7ac1516920a8842d68de36c774db029bf019dfc023548dcc38ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z5PYU2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBHpbpv6E1K8Sx90fcpCXK%2BlIcjGAHLmeB5DimfL0cxiAiEA9ug%2Bz0rtdFCBavZYOqZ1peCjaNBeUHlvty7lOHGK1I0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMEtpWRv7Z1IJUibyrcA5RlORXTzzroS0HcNI3pdEzlO9RlhMs7otoyPNqREDT4j%2F8eyDvG0S7YCTGvc16ThrICXPcol9SbNE%2FviG9CRoCdLTEqRVz%2B0TAFlRjjHFJ244xMHYktocshJV7t%2BaV%2FRpMCJGAn%2BEWGCDZyM7%2BK1LCUB6Y11a6h%2Bma75RRPjEk7iLFLnghzN7Tfa1kBDJUa9lgRGFI%2B8ywAZt6kwwlk9bmaVHOoUfmJcFfBC%2Fy2eOODKAX%2FTtJqdHs7yoSKCzTW2IUpL22B659Dnh6eEDx0NN1wxIWfkRfeLvpCsA2t6JCkmLhrCekVl1ytpAmtLDribWWxtYg0PeIYBsAgyiJxQG7eqq5OoyUsrqo%2F0rareAT3WZLI9fMxguQutQXpDWvwX5YDWZNvHdK5T1R2RfJ8K3fq34%2BYStyCXdFXdtyaWdO18h04sC%2FcIjZm30kq849EKCWKpgMht61%2F0Q1EpS7oVDy1AIXdKOfBloymGkKUA0Kwbf%2FBUikVIKhwPPLyuTpNvqWPVxfCA%2FOtJQtygV2gkqgjfcWYQyVG%2BN4hPMpndBrMmx2OjHunAiz2NvDz76iy0SRlabq90a3J%2BSiL8fQpFmECsutl2CVN4qKEru1RG%2FiaGq0C8PUBoXNoXtxUMInopsIGOqUBJBjZJQDJfAf%2FPp9DzJL1MD1KRr1L6i3xl8kdBbiMlpB45IWW7GDhKFWQ6uIvJlmdjGDf9YyQMNtRvRgLnkLLTdD6LazomLvHziZBhedyXrelHRYagA3L9ZuaDKFbp%2FUJarf2SnoIdrH7LjRWrhFABwTnyJFHg3SFtlcpQS6bXRp%2FyxVlWBONWeLOs2W53uPshgZcWeauX0ijj%2BkNlUW157UBYxKA&X-Amz-Signature=e0f989b4cde565421af39639650612a89a2b7aa0c3caead84834acc8a38377ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z5PYU2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBHpbpv6E1K8Sx90fcpCXK%2BlIcjGAHLmeB5DimfL0cxiAiEA9ug%2Bz0rtdFCBavZYOqZ1peCjaNBeUHlvty7lOHGK1I0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMEtpWRv7Z1IJUibyrcA5RlORXTzzroS0HcNI3pdEzlO9RlhMs7otoyPNqREDT4j%2F8eyDvG0S7YCTGvc16ThrICXPcol9SbNE%2FviG9CRoCdLTEqRVz%2B0TAFlRjjHFJ244xMHYktocshJV7t%2BaV%2FRpMCJGAn%2BEWGCDZyM7%2BK1LCUB6Y11a6h%2Bma75RRPjEk7iLFLnghzN7Tfa1kBDJUa9lgRGFI%2B8ywAZt6kwwlk9bmaVHOoUfmJcFfBC%2Fy2eOODKAX%2FTtJqdHs7yoSKCzTW2IUpL22B659Dnh6eEDx0NN1wxIWfkRfeLvpCsA2t6JCkmLhrCekVl1ytpAmtLDribWWxtYg0PeIYBsAgyiJxQG7eqq5OoyUsrqo%2F0rareAT3WZLI9fMxguQutQXpDWvwX5YDWZNvHdK5T1R2RfJ8K3fq34%2BYStyCXdFXdtyaWdO18h04sC%2FcIjZm30kq849EKCWKpgMht61%2F0Q1EpS7oVDy1AIXdKOfBloymGkKUA0Kwbf%2FBUikVIKhwPPLyuTpNvqWPVxfCA%2FOtJQtygV2gkqgjfcWYQyVG%2BN4hPMpndBrMmx2OjHunAiz2NvDz76iy0SRlabq90a3J%2BSiL8fQpFmECsutl2CVN4qKEru1RG%2FiaGq0C8PUBoXNoXtxUMInopsIGOqUBJBjZJQDJfAf%2FPp9DzJL1MD1KRr1L6i3xl8kdBbiMlpB45IWW7GDhKFWQ6uIvJlmdjGDf9YyQMNtRvRgLnkLLTdD6LazomLvHziZBhedyXrelHRYagA3L9ZuaDKFbp%2FUJarf2SnoIdrH7LjRWrhFABwTnyJFHg3SFtlcpQS6bXRp%2FyxVlWBONWeLOs2W53uPshgZcWeauX0ijj%2BkNlUW157UBYxKA&X-Amz-Signature=ab0b264da1a1a57c202ae3323ef6a2e57bd7c7cc0b1d533a35fa754e74b37c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z5PYU2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBHpbpv6E1K8Sx90fcpCXK%2BlIcjGAHLmeB5DimfL0cxiAiEA9ug%2Bz0rtdFCBavZYOqZ1peCjaNBeUHlvty7lOHGK1I0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMEtpWRv7Z1IJUibyrcA5RlORXTzzroS0HcNI3pdEzlO9RlhMs7otoyPNqREDT4j%2F8eyDvG0S7YCTGvc16ThrICXPcol9SbNE%2FviG9CRoCdLTEqRVz%2B0TAFlRjjHFJ244xMHYktocshJV7t%2BaV%2FRpMCJGAn%2BEWGCDZyM7%2BK1LCUB6Y11a6h%2Bma75RRPjEk7iLFLnghzN7Tfa1kBDJUa9lgRGFI%2B8ywAZt6kwwlk9bmaVHOoUfmJcFfBC%2Fy2eOODKAX%2FTtJqdHs7yoSKCzTW2IUpL22B659Dnh6eEDx0NN1wxIWfkRfeLvpCsA2t6JCkmLhrCekVl1ytpAmtLDribWWxtYg0PeIYBsAgyiJxQG7eqq5OoyUsrqo%2F0rareAT3WZLI9fMxguQutQXpDWvwX5YDWZNvHdK5T1R2RfJ8K3fq34%2BYStyCXdFXdtyaWdO18h04sC%2FcIjZm30kq849EKCWKpgMht61%2F0Q1EpS7oVDy1AIXdKOfBloymGkKUA0Kwbf%2FBUikVIKhwPPLyuTpNvqWPVxfCA%2FOtJQtygV2gkqgjfcWYQyVG%2BN4hPMpndBrMmx2OjHunAiz2NvDz76iy0SRlabq90a3J%2BSiL8fQpFmECsutl2CVN4qKEru1RG%2FiaGq0C8PUBoXNoXtxUMInopsIGOqUBJBjZJQDJfAf%2FPp9DzJL1MD1KRr1L6i3xl8kdBbiMlpB45IWW7GDhKFWQ6uIvJlmdjGDf9YyQMNtRvRgLnkLLTdD6LazomLvHziZBhedyXrelHRYagA3L9ZuaDKFbp%2FUJarf2SnoIdrH7LjRWrhFABwTnyJFHg3SFtlcpQS6bXRp%2FyxVlWBONWeLOs2W53uPshgZcWeauX0ijj%2BkNlUW157UBYxKA&X-Amz-Signature=26a34a204850da73bf173e2fc5ad062f6520f3ffa8dbc2c3e1f275f313b2c026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Z5PYU2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBHpbpv6E1K8Sx90fcpCXK%2BlIcjGAHLmeB5DimfL0cxiAiEA9ug%2Bz0rtdFCBavZYOqZ1peCjaNBeUHlvty7lOHGK1I0qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMEtpWRv7Z1IJUibyrcA5RlORXTzzroS0HcNI3pdEzlO9RlhMs7otoyPNqREDT4j%2F8eyDvG0S7YCTGvc16ThrICXPcol9SbNE%2FviG9CRoCdLTEqRVz%2B0TAFlRjjHFJ244xMHYktocshJV7t%2BaV%2FRpMCJGAn%2BEWGCDZyM7%2BK1LCUB6Y11a6h%2Bma75RRPjEk7iLFLnghzN7Tfa1kBDJUa9lgRGFI%2B8ywAZt6kwwlk9bmaVHOoUfmJcFfBC%2Fy2eOODKAX%2FTtJqdHs7yoSKCzTW2IUpL22B659Dnh6eEDx0NN1wxIWfkRfeLvpCsA2t6JCkmLhrCekVl1ytpAmtLDribWWxtYg0PeIYBsAgyiJxQG7eqq5OoyUsrqo%2F0rareAT3WZLI9fMxguQutQXpDWvwX5YDWZNvHdK5T1R2RfJ8K3fq34%2BYStyCXdFXdtyaWdO18h04sC%2FcIjZm30kq849EKCWKpgMht61%2F0Q1EpS7oVDy1AIXdKOfBloymGkKUA0Kwbf%2FBUikVIKhwPPLyuTpNvqWPVxfCA%2FOtJQtygV2gkqgjfcWYQyVG%2BN4hPMpndBrMmx2OjHunAiz2NvDz76iy0SRlabq90a3J%2BSiL8fQpFmECsutl2CVN4qKEru1RG%2FiaGq0C8PUBoXNoXtxUMInopsIGOqUBJBjZJQDJfAf%2FPp9DzJL1MD1KRr1L6i3xl8kdBbiMlpB45IWW7GDhKFWQ6uIvJlmdjGDf9YyQMNtRvRgLnkLLTdD6LazomLvHziZBhedyXrelHRYagA3L9ZuaDKFbp%2FUJarf2SnoIdrH7LjRWrhFABwTnyJFHg3SFtlcpQS6bXRp%2FyxVlWBONWeLOs2W53uPshgZcWeauX0ijj%2BkNlUW157UBYxKA&X-Amz-Signature=fd75f6c67d74bf05f58266cc5e7bac163cabccfe1ff5382ad92a791ff80f2552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
