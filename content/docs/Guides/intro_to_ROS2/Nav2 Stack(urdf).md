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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6IXQRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ02qvKrqCC8qR%2FgQ1tCwSnY6FuTB%2FbVsNhB3bQw%2FEjAiEAyvMQxXMj3p1eLMVFYHn4Ll4mWutfThQ6uaYRPAkqAEkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzCviYLbMwVxfQuxyrcA7Yv4p3tZf67U%2FrPJT%2BkZz544wIJNC2KDVg6KUFhPxINOlon7gVFtt0mJXriP7Ss7tqJiB7DgKK3%2ByAEcMEZmyK457sBs4%2BNR5uhmnXg1hRbCuZf8f0B%2BP5eyOVcbE6xpa9d%2FI7WEJysqzProqfGDA3UxTTEmMOGvjwKjSbU9p07YPDHtEbIhpjdZgDHreRfb5G4Mr1CvhLaFDehPloaGaGuwjlCIRFHPukDM9WMsBZYtwXDcMRYiNsJt8UfpRgjkIdnzdMBEFzBPEhmQd60aRIQHBx%2BrXUaua3ZugCrFhFK2pz3aAk5cR34925EhnoZe43iWHBrzGAWdZL6U4rRnQaR9omLnxGHXrm5WitI0RosHNs2%2F%2BmKcPVw%2Bit6DcN832FGT2ITRycJAzc3B70xey4rtY014H3fK1v7qJgrPDb%2B1khe2BrCLAnmUmV2sUz2ethe8ONhFFvNumOVw8aoBy8%2BWHzzifRjDhLIu7xRgt0c4lZ0ukYlZGoqw2fVPDWRJSvhd3YQxdSTfKbqJPHcScL1UCSZr9JYreL28yl9HPyyKRF4SrqyM6xj%2B0PD95qxzk4UsiEILlshuSVRQDJIujwGcdF7E5gr3IF2%2Fd11bq06K7Uo97Rasm2VKsdIMO6mxcIGOqUBw2QrsQ2TYu0d5zy8MxKnEosu8Yvsza5GxFxoOz0eogwGVQrSOFH%2BTh44OEOXH%2BWpwF5sjwQZX%2FQHvohRpskGacAI9NE2gtyt%2FemteP7VcFaQyLAV024a1WkSNANtn%2FHQBSJ6Yejs7s5Wc3zUhRC5K%2BzlfRKBbYxL%2BusQsf%2FZpkysIFtg3GpG4xtliivUY6mP8Ei371eQTMqHjz%2FTHoyToFW7SanG&X-Amz-Signature=48bdae5f719719c09958472e7590f967452a174e80f35f87f422f6227de32fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6IXQRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ02qvKrqCC8qR%2FgQ1tCwSnY6FuTB%2FbVsNhB3bQw%2FEjAiEAyvMQxXMj3p1eLMVFYHn4Ll4mWutfThQ6uaYRPAkqAEkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzCviYLbMwVxfQuxyrcA7Yv4p3tZf67U%2FrPJT%2BkZz544wIJNC2KDVg6KUFhPxINOlon7gVFtt0mJXriP7Ss7tqJiB7DgKK3%2ByAEcMEZmyK457sBs4%2BNR5uhmnXg1hRbCuZf8f0B%2BP5eyOVcbE6xpa9d%2FI7WEJysqzProqfGDA3UxTTEmMOGvjwKjSbU9p07YPDHtEbIhpjdZgDHreRfb5G4Mr1CvhLaFDehPloaGaGuwjlCIRFHPukDM9WMsBZYtwXDcMRYiNsJt8UfpRgjkIdnzdMBEFzBPEhmQd60aRIQHBx%2BrXUaua3ZugCrFhFK2pz3aAk5cR34925EhnoZe43iWHBrzGAWdZL6U4rRnQaR9omLnxGHXrm5WitI0RosHNs2%2F%2BmKcPVw%2Bit6DcN832FGT2ITRycJAzc3B70xey4rtY014H3fK1v7qJgrPDb%2B1khe2BrCLAnmUmV2sUz2ethe8ONhFFvNumOVw8aoBy8%2BWHzzifRjDhLIu7xRgt0c4lZ0ukYlZGoqw2fVPDWRJSvhd3YQxdSTfKbqJPHcScL1UCSZr9JYreL28yl9HPyyKRF4SrqyM6xj%2B0PD95qxzk4UsiEILlshuSVRQDJIujwGcdF7E5gr3IF2%2Fd11bq06K7Uo97Rasm2VKsdIMO6mxcIGOqUBw2QrsQ2TYu0d5zy8MxKnEosu8Yvsza5GxFxoOz0eogwGVQrSOFH%2BTh44OEOXH%2BWpwF5sjwQZX%2FQHvohRpskGacAI9NE2gtyt%2FemteP7VcFaQyLAV024a1WkSNANtn%2FHQBSJ6Yejs7s5Wc3zUhRC5K%2BzlfRKBbYxL%2BusQsf%2FZpkysIFtg3GpG4xtliivUY6mP8Ei371eQTMqHjz%2FTHoyToFW7SanG&X-Amz-Signature=2bff48951ac4f7f5aac04545de9beb30f36eab3da58ccf58e0ef3f31b016e50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6IXQRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ02qvKrqCC8qR%2FgQ1tCwSnY6FuTB%2FbVsNhB3bQw%2FEjAiEAyvMQxXMj3p1eLMVFYHn4Ll4mWutfThQ6uaYRPAkqAEkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzCviYLbMwVxfQuxyrcA7Yv4p3tZf67U%2FrPJT%2BkZz544wIJNC2KDVg6KUFhPxINOlon7gVFtt0mJXriP7Ss7tqJiB7DgKK3%2ByAEcMEZmyK457sBs4%2BNR5uhmnXg1hRbCuZf8f0B%2BP5eyOVcbE6xpa9d%2FI7WEJysqzProqfGDA3UxTTEmMOGvjwKjSbU9p07YPDHtEbIhpjdZgDHreRfb5G4Mr1CvhLaFDehPloaGaGuwjlCIRFHPukDM9WMsBZYtwXDcMRYiNsJt8UfpRgjkIdnzdMBEFzBPEhmQd60aRIQHBx%2BrXUaua3ZugCrFhFK2pz3aAk5cR34925EhnoZe43iWHBrzGAWdZL6U4rRnQaR9omLnxGHXrm5WitI0RosHNs2%2F%2BmKcPVw%2Bit6DcN832FGT2ITRycJAzc3B70xey4rtY014H3fK1v7qJgrPDb%2B1khe2BrCLAnmUmV2sUz2ethe8ONhFFvNumOVw8aoBy8%2BWHzzifRjDhLIu7xRgt0c4lZ0ukYlZGoqw2fVPDWRJSvhd3YQxdSTfKbqJPHcScL1UCSZr9JYreL28yl9HPyyKRF4SrqyM6xj%2B0PD95qxzk4UsiEILlshuSVRQDJIujwGcdF7E5gr3IF2%2Fd11bq06K7Uo97Rasm2VKsdIMO6mxcIGOqUBw2QrsQ2TYu0d5zy8MxKnEosu8Yvsza5GxFxoOz0eogwGVQrSOFH%2BTh44OEOXH%2BWpwF5sjwQZX%2FQHvohRpskGacAI9NE2gtyt%2FemteP7VcFaQyLAV024a1WkSNANtn%2FHQBSJ6Yejs7s5Wc3zUhRC5K%2BzlfRKBbYxL%2BusQsf%2FZpkysIFtg3GpG4xtliivUY6mP8Ei371eQTMqHjz%2FTHoyToFW7SanG&X-Amz-Signature=374872dca71e0b137c5d85818e8de425d3671bbb64b40410c987bcac4cb85e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6IXQRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ02qvKrqCC8qR%2FgQ1tCwSnY6FuTB%2FbVsNhB3bQw%2FEjAiEAyvMQxXMj3p1eLMVFYHn4Ll4mWutfThQ6uaYRPAkqAEkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzCviYLbMwVxfQuxyrcA7Yv4p3tZf67U%2FrPJT%2BkZz544wIJNC2KDVg6KUFhPxINOlon7gVFtt0mJXriP7Ss7tqJiB7DgKK3%2ByAEcMEZmyK457sBs4%2BNR5uhmnXg1hRbCuZf8f0B%2BP5eyOVcbE6xpa9d%2FI7WEJysqzProqfGDA3UxTTEmMOGvjwKjSbU9p07YPDHtEbIhpjdZgDHreRfb5G4Mr1CvhLaFDehPloaGaGuwjlCIRFHPukDM9WMsBZYtwXDcMRYiNsJt8UfpRgjkIdnzdMBEFzBPEhmQd60aRIQHBx%2BrXUaua3ZugCrFhFK2pz3aAk5cR34925EhnoZe43iWHBrzGAWdZL6U4rRnQaR9omLnxGHXrm5WitI0RosHNs2%2F%2BmKcPVw%2Bit6DcN832FGT2ITRycJAzc3B70xey4rtY014H3fK1v7qJgrPDb%2B1khe2BrCLAnmUmV2sUz2ethe8ONhFFvNumOVw8aoBy8%2BWHzzifRjDhLIu7xRgt0c4lZ0ukYlZGoqw2fVPDWRJSvhd3YQxdSTfKbqJPHcScL1UCSZr9JYreL28yl9HPyyKRF4SrqyM6xj%2B0PD95qxzk4UsiEILlshuSVRQDJIujwGcdF7E5gr3IF2%2Fd11bq06K7Uo97Rasm2VKsdIMO6mxcIGOqUBw2QrsQ2TYu0d5zy8MxKnEosu8Yvsza5GxFxoOz0eogwGVQrSOFH%2BTh44OEOXH%2BWpwF5sjwQZX%2FQHvohRpskGacAI9NE2gtyt%2FemteP7VcFaQyLAV024a1WkSNANtn%2FHQBSJ6Yejs7s5Wc3zUhRC5K%2BzlfRKBbYxL%2BusQsf%2FZpkysIFtg3GpG4xtliivUY6mP8Ei371eQTMqHjz%2FTHoyToFW7SanG&X-Amz-Signature=86f6ef85cc9711d4a2996b1b03d0b925b6dbbc6531149121443cb951a095fa7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6IXQRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ02qvKrqCC8qR%2FgQ1tCwSnY6FuTB%2FbVsNhB3bQw%2FEjAiEAyvMQxXMj3p1eLMVFYHn4Ll4mWutfThQ6uaYRPAkqAEkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzCviYLbMwVxfQuxyrcA7Yv4p3tZf67U%2FrPJT%2BkZz544wIJNC2KDVg6KUFhPxINOlon7gVFtt0mJXriP7Ss7tqJiB7DgKK3%2ByAEcMEZmyK457sBs4%2BNR5uhmnXg1hRbCuZf8f0B%2BP5eyOVcbE6xpa9d%2FI7WEJysqzProqfGDA3UxTTEmMOGvjwKjSbU9p07YPDHtEbIhpjdZgDHreRfb5G4Mr1CvhLaFDehPloaGaGuwjlCIRFHPukDM9WMsBZYtwXDcMRYiNsJt8UfpRgjkIdnzdMBEFzBPEhmQd60aRIQHBx%2BrXUaua3ZugCrFhFK2pz3aAk5cR34925EhnoZe43iWHBrzGAWdZL6U4rRnQaR9omLnxGHXrm5WitI0RosHNs2%2F%2BmKcPVw%2Bit6DcN832FGT2ITRycJAzc3B70xey4rtY014H3fK1v7qJgrPDb%2B1khe2BrCLAnmUmV2sUz2ethe8ONhFFvNumOVw8aoBy8%2BWHzzifRjDhLIu7xRgt0c4lZ0ukYlZGoqw2fVPDWRJSvhd3YQxdSTfKbqJPHcScL1UCSZr9JYreL28yl9HPyyKRF4SrqyM6xj%2B0PD95qxzk4UsiEILlshuSVRQDJIujwGcdF7E5gr3IF2%2Fd11bq06K7Uo97Rasm2VKsdIMO6mxcIGOqUBw2QrsQ2TYu0d5zy8MxKnEosu8Yvsza5GxFxoOz0eogwGVQrSOFH%2BTh44OEOXH%2BWpwF5sjwQZX%2FQHvohRpskGacAI9NE2gtyt%2FemteP7VcFaQyLAV024a1WkSNANtn%2FHQBSJ6Yejs7s5Wc3zUhRC5K%2BzlfRKBbYxL%2BusQsf%2FZpkysIFtg3GpG4xtliivUY6mP8Ei371eQTMqHjz%2FTHoyToFW7SanG&X-Amz-Signature=b37317649a2ddc57217103ef7ab448e2384d07d9499816752067fc1e580de5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6IXQRP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ02qvKrqCC8qR%2FgQ1tCwSnY6FuTB%2FbVsNhB3bQw%2FEjAiEAyvMQxXMj3p1eLMVFYHn4Ll4mWutfThQ6uaYRPAkqAEkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPzCviYLbMwVxfQuxyrcA7Yv4p3tZf67U%2FrPJT%2BkZz544wIJNC2KDVg6KUFhPxINOlon7gVFtt0mJXriP7Ss7tqJiB7DgKK3%2ByAEcMEZmyK457sBs4%2BNR5uhmnXg1hRbCuZf8f0B%2BP5eyOVcbE6xpa9d%2FI7WEJysqzProqfGDA3UxTTEmMOGvjwKjSbU9p07YPDHtEbIhpjdZgDHreRfb5G4Mr1CvhLaFDehPloaGaGuwjlCIRFHPukDM9WMsBZYtwXDcMRYiNsJt8UfpRgjkIdnzdMBEFzBPEhmQd60aRIQHBx%2BrXUaua3ZugCrFhFK2pz3aAk5cR34925EhnoZe43iWHBrzGAWdZL6U4rRnQaR9omLnxGHXrm5WitI0RosHNs2%2F%2BmKcPVw%2Bit6DcN832FGT2ITRycJAzc3B70xey4rtY014H3fK1v7qJgrPDb%2B1khe2BrCLAnmUmV2sUz2ethe8ONhFFvNumOVw8aoBy8%2BWHzzifRjDhLIu7xRgt0c4lZ0ukYlZGoqw2fVPDWRJSvhd3YQxdSTfKbqJPHcScL1UCSZr9JYreL28yl9HPyyKRF4SrqyM6xj%2B0PD95qxzk4UsiEILlshuSVRQDJIujwGcdF7E5gr3IF2%2Fd11bq06K7Uo97Rasm2VKsdIMO6mxcIGOqUBw2QrsQ2TYu0d5zy8MxKnEosu8Yvsza5GxFxoOz0eogwGVQrSOFH%2BTh44OEOXH%2BWpwF5sjwQZX%2FQHvohRpskGacAI9NE2gtyt%2FemteP7VcFaQyLAV024a1WkSNANtn%2FHQBSJ6Yejs7s5Wc3zUhRC5K%2BzlfRKBbYxL%2BusQsf%2FZpkysIFtg3GpG4xtliivUY6mP8Ei371eQTMqHjz%2FTHoyToFW7SanG&X-Amz-Signature=b83d57e2c64eeb58a9f9af82df188b9c6c76c48b3046745012a4f8d9475c68d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
