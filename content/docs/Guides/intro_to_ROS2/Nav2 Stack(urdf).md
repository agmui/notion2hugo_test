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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I36JEHB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixCJwS%2FYHIpwznU%2Bx3cnDPu91lcKAPEUtperVjOO6ygIgZU01X1HjYkWI0b9tTRgxMBwaOA0BAQ%2Fv3OSDGx%2Bmxm0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxmmy5V8ey484hkzSrcA%2B6at9OuMrzvxIdpo5SRsx0o0FI0qwgwiPWkpVbeZIwyBbfAYHEE19yenOkaZ6VVbA8jri80a8XSGlMVIIEIFB7Fsk9UixP0zwziWnQ9lumn5G%2FqSejWQAxaIOV51qGE9OkxhoLOTezvP6k19%2BZ1gUPCqsbUNY0zxCtG%2FBYnquE3IsOncYHQs9oNJ%2Bin6Wwgv00TNjepG2EfA9LH1wKAbtYkZFYtTQUMtonpjuTlG4I67ygTKDEPzzSeZ59EP3kqkkY8wrYmLWuWaFOD%2F7PCTVo%2Bf5E632Tf5AFCA2dvlH2apZdprTiDPqyKvzqG9FNYfi%2FIEtyfT4mipMVw3Fx29PHyuHn8%2FGu6hKrJCzf8UkTdE7wHMKzJX6OMCViln%2BeFH%2Bcs7m6wBiuDnmmhb0gT0xA8v%2Fbv1j2fm2CdPSKntm1Q7Mp0vxDu9OYf6YhHU6mhjRpb6DpX17ZCWwzXsvK6IUmM1qgAFYY8pS2BtZoZNbooo9JFJceaTQzNogp5o3zMSkKnl%2BxLCTnl4IV8IHmjW2WgmfjWbEc%2FgTX1LHoAqYlyyRYRFiW1ccriIt9VDTkL4PS4QLe3iRHh8X6mL2SWuoxQtWiWxzau%2F%2Fk9LmqKJpUNJylxg%2BT36vOZ7PaKMOeXssEGOqUBkwMb9T4w3nbSdkRSsf2ga4n90xP55Ahsrdin%2Bt4GPFZhVgzQ8kePSkiN4XeATm%2BhYrBZvfRwhmMpfjnPT%2FoHzvzF93B%2BFirBRkZTzgR9wH8%2BucvVVCdWSINtd9ukTpXRtMAt%2BbCFdyL8Vtg8qTIX2yOUg2OFzQLqf1cF7kYSh2X5PwKFdxdagOo8OwZUf3fjgx8iubFtquKuQcb5IwcwydQT3jt5&X-Amz-Signature=0376fd63a55c648d26452d43225fd849e3c568a4b2fa6bc2d5d9f3bbc958b969&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I36JEHB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixCJwS%2FYHIpwznU%2Bx3cnDPu91lcKAPEUtperVjOO6ygIgZU01X1HjYkWI0b9tTRgxMBwaOA0BAQ%2Fv3OSDGx%2Bmxm0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxmmy5V8ey484hkzSrcA%2B6at9OuMrzvxIdpo5SRsx0o0FI0qwgwiPWkpVbeZIwyBbfAYHEE19yenOkaZ6VVbA8jri80a8XSGlMVIIEIFB7Fsk9UixP0zwziWnQ9lumn5G%2FqSejWQAxaIOV51qGE9OkxhoLOTezvP6k19%2BZ1gUPCqsbUNY0zxCtG%2FBYnquE3IsOncYHQs9oNJ%2Bin6Wwgv00TNjepG2EfA9LH1wKAbtYkZFYtTQUMtonpjuTlG4I67ygTKDEPzzSeZ59EP3kqkkY8wrYmLWuWaFOD%2F7PCTVo%2Bf5E632Tf5AFCA2dvlH2apZdprTiDPqyKvzqG9FNYfi%2FIEtyfT4mipMVw3Fx29PHyuHn8%2FGu6hKrJCzf8UkTdE7wHMKzJX6OMCViln%2BeFH%2Bcs7m6wBiuDnmmhb0gT0xA8v%2Fbv1j2fm2CdPSKntm1Q7Mp0vxDu9OYf6YhHU6mhjRpb6DpX17ZCWwzXsvK6IUmM1qgAFYY8pS2BtZoZNbooo9JFJceaTQzNogp5o3zMSkKnl%2BxLCTnl4IV8IHmjW2WgmfjWbEc%2FgTX1LHoAqYlyyRYRFiW1ccriIt9VDTkL4PS4QLe3iRHh8X6mL2SWuoxQtWiWxzau%2F%2Fk9LmqKJpUNJylxg%2BT36vOZ7PaKMOeXssEGOqUBkwMb9T4w3nbSdkRSsf2ga4n90xP55Ahsrdin%2Bt4GPFZhVgzQ8kePSkiN4XeATm%2BhYrBZvfRwhmMpfjnPT%2FoHzvzF93B%2BFirBRkZTzgR9wH8%2BucvVVCdWSINtd9ukTpXRtMAt%2BbCFdyL8Vtg8qTIX2yOUg2OFzQLqf1cF7kYSh2X5PwKFdxdagOo8OwZUf3fjgx8iubFtquKuQcb5IwcwydQT3jt5&X-Amz-Signature=643e8346b5a41f108cf5bae5d1f24ca8cb87921485e393d5aef1c9c58b883eea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I36JEHB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixCJwS%2FYHIpwznU%2Bx3cnDPu91lcKAPEUtperVjOO6ygIgZU01X1HjYkWI0b9tTRgxMBwaOA0BAQ%2Fv3OSDGx%2Bmxm0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxmmy5V8ey484hkzSrcA%2B6at9OuMrzvxIdpo5SRsx0o0FI0qwgwiPWkpVbeZIwyBbfAYHEE19yenOkaZ6VVbA8jri80a8XSGlMVIIEIFB7Fsk9UixP0zwziWnQ9lumn5G%2FqSejWQAxaIOV51qGE9OkxhoLOTezvP6k19%2BZ1gUPCqsbUNY0zxCtG%2FBYnquE3IsOncYHQs9oNJ%2Bin6Wwgv00TNjepG2EfA9LH1wKAbtYkZFYtTQUMtonpjuTlG4I67ygTKDEPzzSeZ59EP3kqkkY8wrYmLWuWaFOD%2F7PCTVo%2Bf5E632Tf5AFCA2dvlH2apZdprTiDPqyKvzqG9FNYfi%2FIEtyfT4mipMVw3Fx29PHyuHn8%2FGu6hKrJCzf8UkTdE7wHMKzJX6OMCViln%2BeFH%2Bcs7m6wBiuDnmmhb0gT0xA8v%2Fbv1j2fm2CdPSKntm1Q7Mp0vxDu9OYf6YhHU6mhjRpb6DpX17ZCWwzXsvK6IUmM1qgAFYY8pS2BtZoZNbooo9JFJceaTQzNogp5o3zMSkKnl%2BxLCTnl4IV8IHmjW2WgmfjWbEc%2FgTX1LHoAqYlyyRYRFiW1ccriIt9VDTkL4PS4QLe3iRHh8X6mL2SWuoxQtWiWxzau%2F%2Fk9LmqKJpUNJylxg%2BT36vOZ7PaKMOeXssEGOqUBkwMb9T4w3nbSdkRSsf2ga4n90xP55Ahsrdin%2Bt4GPFZhVgzQ8kePSkiN4XeATm%2BhYrBZvfRwhmMpfjnPT%2FoHzvzF93B%2BFirBRkZTzgR9wH8%2BucvVVCdWSINtd9ukTpXRtMAt%2BbCFdyL8Vtg8qTIX2yOUg2OFzQLqf1cF7kYSh2X5PwKFdxdagOo8OwZUf3fjgx8iubFtquKuQcb5IwcwydQT3jt5&X-Amz-Signature=0c93a6b3c712f4533f0cceb16346ec10849bdc9a0c1605c2913902d208809798&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I36JEHB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixCJwS%2FYHIpwznU%2Bx3cnDPu91lcKAPEUtperVjOO6ygIgZU01X1HjYkWI0b9tTRgxMBwaOA0BAQ%2Fv3OSDGx%2Bmxm0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxmmy5V8ey484hkzSrcA%2B6at9OuMrzvxIdpo5SRsx0o0FI0qwgwiPWkpVbeZIwyBbfAYHEE19yenOkaZ6VVbA8jri80a8XSGlMVIIEIFB7Fsk9UixP0zwziWnQ9lumn5G%2FqSejWQAxaIOV51qGE9OkxhoLOTezvP6k19%2BZ1gUPCqsbUNY0zxCtG%2FBYnquE3IsOncYHQs9oNJ%2Bin6Wwgv00TNjepG2EfA9LH1wKAbtYkZFYtTQUMtonpjuTlG4I67ygTKDEPzzSeZ59EP3kqkkY8wrYmLWuWaFOD%2F7PCTVo%2Bf5E632Tf5AFCA2dvlH2apZdprTiDPqyKvzqG9FNYfi%2FIEtyfT4mipMVw3Fx29PHyuHn8%2FGu6hKrJCzf8UkTdE7wHMKzJX6OMCViln%2BeFH%2Bcs7m6wBiuDnmmhb0gT0xA8v%2Fbv1j2fm2CdPSKntm1Q7Mp0vxDu9OYf6YhHU6mhjRpb6DpX17ZCWwzXsvK6IUmM1qgAFYY8pS2BtZoZNbooo9JFJceaTQzNogp5o3zMSkKnl%2BxLCTnl4IV8IHmjW2WgmfjWbEc%2FgTX1LHoAqYlyyRYRFiW1ccriIt9VDTkL4PS4QLe3iRHh8X6mL2SWuoxQtWiWxzau%2F%2Fk9LmqKJpUNJylxg%2BT36vOZ7PaKMOeXssEGOqUBkwMb9T4w3nbSdkRSsf2ga4n90xP55Ahsrdin%2Bt4GPFZhVgzQ8kePSkiN4XeATm%2BhYrBZvfRwhmMpfjnPT%2FoHzvzF93B%2BFirBRkZTzgR9wH8%2BucvVVCdWSINtd9ukTpXRtMAt%2BbCFdyL8Vtg8qTIX2yOUg2OFzQLqf1cF7kYSh2X5PwKFdxdagOo8OwZUf3fjgx8iubFtquKuQcb5IwcwydQT3jt5&X-Amz-Signature=110938ddbcd6ff586820114eae85ec093d52012762606caf2eca051a982c753a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I36JEHB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixCJwS%2FYHIpwznU%2Bx3cnDPu91lcKAPEUtperVjOO6ygIgZU01X1HjYkWI0b9tTRgxMBwaOA0BAQ%2Fv3OSDGx%2Bmxm0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxmmy5V8ey484hkzSrcA%2B6at9OuMrzvxIdpo5SRsx0o0FI0qwgwiPWkpVbeZIwyBbfAYHEE19yenOkaZ6VVbA8jri80a8XSGlMVIIEIFB7Fsk9UixP0zwziWnQ9lumn5G%2FqSejWQAxaIOV51qGE9OkxhoLOTezvP6k19%2BZ1gUPCqsbUNY0zxCtG%2FBYnquE3IsOncYHQs9oNJ%2Bin6Wwgv00TNjepG2EfA9LH1wKAbtYkZFYtTQUMtonpjuTlG4I67ygTKDEPzzSeZ59EP3kqkkY8wrYmLWuWaFOD%2F7PCTVo%2Bf5E632Tf5AFCA2dvlH2apZdprTiDPqyKvzqG9FNYfi%2FIEtyfT4mipMVw3Fx29PHyuHn8%2FGu6hKrJCzf8UkTdE7wHMKzJX6OMCViln%2BeFH%2Bcs7m6wBiuDnmmhb0gT0xA8v%2Fbv1j2fm2CdPSKntm1Q7Mp0vxDu9OYf6YhHU6mhjRpb6DpX17ZCWwzXsvK6IUmM1qgAFYY8pS2BtZoZNbooo9JFJceaTQzNogp5o3zMSkKnl%2BxLCTnl4IV8IHmjW2WgmfjWbEc%2FgTX1LHoAqYlyyRYRFiW1ccriIt9VDTkL4PS4QLe3iRHh8X6mL2SWuoxQtWiWxzau%2F%2Fk9LmqKJpUNJylxg%2BT36vOZ7PaKMOeXssEGOqUBkwMb9T4w3nbSdkRSsf2ga4n90xP55Ahsrdin%2Bt4GPFZhVgzQ8kePSkiN4XeATm%2BhYrBZvfRwhmMpfjnPT%2FoHzvzF93B%2BFirBRkZTzgR9wH8%2BucvVVCdWSINtd9ukTpXRtMAt%2BbCFdyL8Vtg8qTIX2yOUg2OFzQLqf1cF7kYSh2X5PwKFdxdagOo8OwZUf3fjgx8iubFtquKuQcb5IwcwydQT3jt5&X-Amz-Signature=a0600700836220e05aa20763441aa7f32f975c8414471612fb7ddd57fb4e354c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I36JEHB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixCJwS%2FYHIpwznU%2Bx3cnDPu91lcKAPEUtperVjOO6ygIgZU01X1HjYkWI0b9tTRgxMBwaOA0BAQ%2Fv3OSDGx%2Bmxm0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxmmy5V8ey484hkzSrcA%2B6at9OuMrzvxIdpo5SRsx0o0FI0qwgwiPWkpVbeZIwyBbfAYHEE19yenOkaZ6VVbA8jri80a8XSGlMVIIEIFB7Fsk9UixP0zwziWnQ9lumn5G%2FqSejWQAxaIOV51qGE9OkxhoLOTezvP6k19%2BZ1gUPCqsbUNY0zxCtG%2FBYnquE3IsOncYHQs9oNJ%2Bin6Wwgv00TNjepG2EfA9LH1wKAbtYkZFYtTQUMtonpjuTlG4I67ygTKDEPzzSeZ59EP3kqkkY8wrYmLWuWaFOD%2F7PCTVo%2Bf5E632Tf5AFCA2dvlH2apZdprTiDPqyKvzqG9FNYfi%2FIEtyfT4mipMVw3Fx29PHyuHn8%2FGu6hKrJCzf8UkTdE7wHMKzJX6OMCViln%2BeFH%2Bcs7m6wBiuDnmmhb0gT0xA8v%2Fbv1j2fm2CdPSKntm1Q7Mp0vxDu9OYf6YhHU6mhjRpb6DpX17ZCWwzXsvK6IUmM1qgAFYY8pS2BtZoZNbooo9JFJceaTQzNogp5o3zMSkKnl%2BxLCTnl4IV8IHmjW2WgmfjWbEc%2FgTX1LHoAqYlyyRYRFiW1ccriIt9VDTkL4PS4QLe3iRHh8X6mL2SWuoxQtWiWxzau%2F%2Fk9LmqKJpUNJylxg%2BT36vOZ7PaKMOeXssEGOqUBkwMb9T4w3nbSdkRSsf2ga4n90xP55Ahsrdin%2Bt4GPFZhVgzQ8kePSkiN4XeATm%2BhYrBZvfRwhmMpfjnPT%2FoHzvzF93B%2BFirBRkZTzgR9wH8%2BucvVVCdWSINtd9ukTpXRtMAt%2BbCFdyL8Vtg8qTIX2yOUg2OFzQLqf1cF7kYSh2X5PwKFdxdagOo8OwZUf3fjgx8iubFtquKuQcb5IwcwydQT3jt5&X-Amz-Signature=8fea88cc1ec88f8aa013da70f0d64bf9c1d12ccb43c7120ed5b393ac04e6363b&X-Amz-SignedHeaders=host&x-id=GetObject)
