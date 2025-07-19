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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJ6IAR4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6NJi%2Bg8RMvtaFU0GSU3L2qG0Ld9VdP7cS0FwLqMTEuAiEAsJbmlQMOvCtU%2FiwLgfwXzpovxFWJ728dSFVLSt%2FJeUcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsswIso67zMas%2FjXSrcA6Gb%2F2HAmzZqDoP9uaym6GA7W21tHKSdCZM4QDuPgGvv%2FIho5xtBo7RszfvGc9VhJvuCEikSFfZMQ4d8npQkgMceMPNzLdMm0VQ7uBLccuuc18JHXigZy6tRQswvjOyOKKfw2Hk8w5AN6l98FrMOoAZDVSW1cy1Hyb7xPAjm8dmxjO2f%2Fn1oT8myStxpzL3IU%2FEJuO71M6NRomuwyCbv%2Fv7B1dv0EpoGu6%2FCRVizBZRZPeE16b3Ch%2B3rUh3gmTYD9gEaFpd3dZvfbGGvUJt0iMDuN8d7dhNb4%2BySg4NkCXI1h0wbAiYYlIbxZiDAnuEeR%2FGHIPYlTpDt1pC%2BLbBJ0XNIvbTp8535fXCY33MIL5M%2BgHgzJGAQM4kWiFLyBOt1HLfQA%2F%2Fv8KFe%2Ff9s91b26%2FDrnu3FMnBWVju75ePcSIdQbH6qt6iGhWnrJ6t57J6bmEkbTG9G4dAUAYh9bVHk1alYS9W%2Fn6JQZyzZodRD5eNTatUj%2F5bacHIusFstl3JPI7Qg47e1f8IU5xmEtsl1SNLuO3em4oSKU1brTQGWwBoWqMCWdQuck2r18Mxi2WVbpaYq9G17JwqRGfNYXYh7J31gYN0VLiLspLJww0GatLegNAIkG%2Fq1OUurK2NFMPbF7MMGOqUBs9uu4KMCLnQjhQkHY6L8%2FDBFxSy0VaubmTbRjR3%2FVvH2uExQShqxtF9jYxf%2FUrAFb7zJab3KYKcvpfZeO4%2FynwWYChBZrFj7zlu%2BtNkmFJ%2B%2FZFHI4mLDozG6EysV47P9%2Bw7LPbisibF3RYXM39WDtM6%2B73rAZAZR%2BCd0LKw0Pe0r0A86KWJZCZu%2FqSHOJCtnwCM1PQMSEAZGft4mKf1topSX12qD&X-Amz-Signature=98e4d7fb3a8e5b41d94e8e2bb2016017193a9dee7c81c3c4c471d485a964c96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJ6IAR4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6NJi%2Bg8RMvtaFU0GSU3L2qG0Ld9VdP7cS0FwLqMTEuAiEAsJbmlQMOvCtU%2FiwLgfwXzpovxFWJ728dSFVLSt%2FJeUcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsswIso67zMas%2FjXSrcA6Gb%2F2HAmzZqDoP9uaym6GA7W21tHKSdCZM4QDuPgGvv%2FIho5xtBo7RszfvGc9VhJvuCEikSFfZMQ4d8npQkgMceMPNzLdMm0VQ7uBLccuuc18JHXigZy6tRQswvjOyOKKfw2Hk8w5AN6l98FrMOoAZDVSW1cy1Hyb7xPAjm8dmxjO2f%2Fn1oT8myStxpzL3IU%2FEJuO71M6NRomuwyCbv%2Fv7B1dv0EpoGu6%2FCRVizBZRZPeE16b3Ch%2B3rUh3gmTYD9gEaFpd3dZvfbGGvUJt0iMDuN8d7dhNb4%2BySg4NkCXI1h0wbAiYYlIbxZiDAnuEeR%2FGHIPYlTpDt1pC%2BLbBJ0XNIvbTp8535fXCY33MIL5M%2BgHgzJGAQM4kWiFLyBOt1HLfQA%2F%2Fv8KFe%2Ff9s91b26%2FDrnu3FMnBWVju75ePcSIdQbH6qt6iGhWnrJ6t57J6bmEkbTG9G4dAUAYh9bVHk1alYS9W%2Fn6JQZyzZodRD5eNTatUj%2F5bacHIusFstl3JPI7Qg47e1f8IU5xmEtsl1SNLuO3em4oSKU1brTQGWwBoWqMCWdQuck2r18Mxi2WVbpaYq9G17JwqRGfNYXYh7J31gYN0VLiLspLJww0GatLegNAIkG%2Fq1OUurK2NFMPbF7MMGOqUBs9uu4KMCLnQjhQkHY6L8%2FDBFxSy0VaubmTbRjR3%2FVvH2uExQShqxtF9jYxf%2FUrAFb7zJab3KYKcvpfZeO4%2FynwWYChBZrFj7zlu%2BtNkmFJ%2B%2FZFHI4mLDozG6EysV47P9%2Bw7LPbisibF3RYXM39WDtM6%2B73rAZAZR%2BCd0LKw0Pe0r0A86KWJZCZu%2FqSHOJCtnwCM1PQMSEAZGft4mKf1topSX12qD&X-Amz-Signature=db84c4318681b0158129a29caff18af57fa2ebf3ba01e0eacb11c2fac170e658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJ6IAR4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6NJi%2Bg8RMvtaFU0GSU3L2qG0Ld9VdP7cS0FwLqMTEuAiEAsJbmlQMOvCtU%2FiwLgfwXzpovxFWJ728dSFVLSt%2FJeUcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsswIso67zMas%2FjXSrcA6Gb%2F2HAmzZqDoP9uaym6GA7W21tHKSdCZM4QDuPgGvv%2FIho5xtBo7RszfvGc9VhJvuCEikSFfZMQ4d8npQkgMceMPNzLdMm0VQ7uBLccuuc18JHXigZy6tRQswvjOyOKKfw2Hk8w5AN6l98FrMOoAZDVSW1cy1Hyb7xPAjm8dmxjO2f%2Fn1oT8myStxpzL3IU%2FEJuO71M6NRomuwyCbv%2Fv7B1dv0EpoGu6%2FCRVizBZRZPeE16b3Ch%2B3rUh3gmTYD9gEaFpd3dZvfbGGvUJt0iMDuN8d7dhNb4%2BySg4NkCXI1h0wbAiYYlIbxZiDAnuEeR%2FGHIPYlTpDt1pC%2BLbBJ0XNIvbTp8535fXCY33MIL5M%2BgHgzJGAQM4kWiFLyBOt1HLfQA%2F%2Fv8KFe%2Ff9s91b26%2FDrnu3FMnBWVju75ePcSIdQbH6qt6iGhWnrJ6t57J6bmEkbTG9G4dAUAYh9bVHk1alYS9W%2Fn6JQZyzZodRD5eNTatUj%2F5bacHIusFstl3JPI7Qg47e1f8IU5xmEtsl1SNLuO3em4oSKU1brTQGWwBoWqMCWdQuck2r18Mxi2WVbpaYq9G17JwqRGfNYXYh7J31gYN0VLiLspLJww0GatLegNAIkG%2Fq1OUurK2NFMPbF7MMGOqUBs9uu4KMCLnQjhQkHY6L8%2FDBFxSy0VaubmTbRjR3%2FVvH2uExQShqxtF9jYxf%2FUrAFb7zJab3KYKcvpfZeO4%2FynwWYChBZrFj7zlu%2BtNkmFJ%2B%2FZFHI4mLDozG6EysV47P9%2Bw7LPbisibF3RYXM39WDtM6%2B73rAZAZR%2BCd0LKw0Pe0r0A86KWJZCZu%2FqSHOJCtnwCM1PQMSEAZGft4mKf1topSX12qD&X-Amz-Signature=ada9f1966bdb1da8f0ba9f26a3d07902b9347bd4bdd63c6263e880849e55aadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJ6IAR4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6NJi%2Bg8RMvtaFU0GSU3L2qG0Ld9VdP7cS0FwLqMTEuAiEAsJbmlQMOvCtU%2FiwLgfwXzpovxFWJ728dSFVLSt%2FJeUcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsswIso67zMas%2FjXSrcA6Gb%2F2HAmzZqDoP9uaym6GA7W21tHKSdCZM4QDuPgGvv%2FIho5xtBo7RszfvGc9VhJvuCEikSFfZMQ4d8npQkgMceMPNzLdMm0VQ7uBLccuuc18JHXigZy6tRQswvjOyOKKfw2Hk8w5AN6l98FrMOoAZDVSW1cy1Hyb7xPAjm8dmxjO2f%2Fn1oT8myStxpzL3IU%2FEJuO71M6NRomuwyCbv%2Fv7B1dv0EpoGu6%2FCRVizBZRZPeE16b3Ch%2B3rUh3gmTYD9gEaFpd3dZvfbGGvUJt0iMDuN8d7dhNb4%2BySg4NkCXI1h0wbAiYYlIbxZiDAnuEeR%2FGHIPYlTpDt1pC%2BLbBJ0XNIvbTp8535fXCY33MIL5M%2BgHgzJGAQM4kWiFLyBOt1HLfQA%2F%2Fv8KFe%2Ff9s91b26%2FDrnu3FMnBWVju75ePcSIdQbH6qt6iGhWnrJ6t57J6bmEkbTG9G4dAUAYh9bVHk1alYS9W%2Fn6JQZyzZodRD5eNTatUj%2F5bacHIusFstl3JPI7Qg47e1f8IU5xmEtsl1SNLuO3em4oSKU1brTQGWwBoWqMCWdQuck2r18Mxi2WVbpaYq9G17JwqRGfNYXYh7J31gYN0VLiLspLJww0GatLegNAIkG%2Fq1OUurK2NFMPbF7MMGOqUBs9uu4KMCLnQjhQkHY6L8%2FDBFxSy0VaubmTbRjR3%2FVvH2uExQShqxtF9jYxf%2FUrAFb7zJab3KYKcvpfZeO4%2FynwWYChBZrFj7zlu%2BtNkmFJ%2B%2FZFHI4mLDozG6EysV47P9%2Bw7LPbisibF3RYXM39WDtM6%2B73rAZAZR%2BCd0LKw0Pe0r0A86KWJZCZu%2FqSHOJCtnwCM1PQMSEAZGft4mKf1topSX12qD&X-Amz-Signature=ee850e91b321650f138fda5b3ff62caf4e7a6866cfd331414f9d30e7e7b853f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJ6IAR4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6NJi%2Bg8RMvtaFU0GSU3L2qG0Ld9VdP7cS0FwLqMTEuAiEAsJbmlQMOvCtU%2FiwLgfwXzpovxFWJ728dSFVLSt%2FJeUcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsswIso67zMas%2FjXSrcA6Gb%2F2HAmzZqDoP9uaym6GA7W21tHKSdCZM4QDuPgGvv%2FIho5xtBo7RszfvGc9VhJvuCEikSFfZMQ4d8npQkgMceMPNzLdMm0VQ7uBLccuuc18JHXigZy6tRQswvjOyOKKfw2Hk8w5AN6l98FrMOoAZDVSW1cy1Hyb7xPAjm8dmxjO2f%2Fn1oT8myStxpzL3IU%2FEJuO71M6NRomuwyCbv%2Fv7B1dv0EpoGu6%2FCRVizBZRZPeE16b3Ch%2B3rUh3gmTYD9gEaFpd3dZvfbGGvUJt0iMDuN8d7dhNb4%2BySg4NkCXI1h0wbAiYYlIbxZiDAnuEeR%2FGHIPYlTpDt1pC%2BLbBJ0XNIvbTp8535fXCY33MIL5M%2BgHgzJGAQM4kWiFLyBOt1HLfQA%2F%2Fv8KFe%2Ff9s91b26%2FDrnu3FMnBWVju75ePcSIdQbH6qt6iGhWnrJ6t57J6bmEkbTG9G4dAUAYh9bVHk1alYS9W%2Fn6JQZyzZodRD5eNTatUj%2F5bacHIusFstl3JPI7Qg47e1f8IU5xmEtsl1SNLuO3em4oSKU1brTQGWwBoWqMCWdQuck2r18Mxi2WVbpaYq9G17JwqRGfNYXYh7J31gYN0VLiLspLJww0GatLegNAIkG%2Fq1OUurK2NFMPbF7MMGOqUBs9uu4KMCLnQjhQkHY6L8%2FDBFxSy0VaubmTbRjR3%2FVvH2uExQShqxtF9jYxf%2FUrAFb7zJab3KYKcvpfZeO4%2FynwWYChBZrFj7zlu%2BtNkmFJ%2B%2FZFHI4mLDozG6EysV47P9%2Bw7LPbisibF3RYXM39WDtM6%2B73rAZAZR%2BCd0LKw0Pe0r0A86KWJZCZu%2FqSHOJCtnwCM1PQMSEAZGft4mKf1topSX12qD&X-Amz-Signature=9a53ac6368fdeb9337244430fb8c8a063951f4bb9143f8b2727f443325d235f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJ6IAR4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6NJi%2Bg8RMvtaFU0GSU3L2qG0Ld9VdP7cS0FwLqMTEuAiEAsJbmlQMOvCtU%2FiwLgfwXzpovxFWJ728dSFVLSt%2FJeUcqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsswIso67zMas%2FjXSrcA6Gb%2F2HAmzZqDoP9uaym6GA7W21tHKSdCZM4QDuPgGvv%2FIho5xtBo7RszfvGc9VhJvuCEikSFfZMQ4d8npQkgMceMPNzLdMm0VQ7uBLccuuc18JHXigZy6tRQswvjOyOKKfw2Hk8w5AN6l98FrMOoAZDVSW1cy1Hyb7xPAjm8dmxjO2f%2Fn1oT8myStxpzL3IU%2FEJuO71M6NRomuwyCbv%2Fv7B1dv0EpoGu6%2FCRVizBZRZPeE16b3Ch%2B3rUh3gmTYD9gEaFpd3dZvfbGGvUJt0iMDuN8d7dhNb4%2BySg4NkCXI1h0wbAiYYlIbxZiDAnuEeR%2FGHIPYlTpDt1pC%2BLbBJ0XNIvbTp8535fXCY33MIL5M%2BgHgzJGAQM4kWiFLyBOt1HLfQA%2F%2Fv8KFe%2Ff9s91b26%2FDrnu3FMnBWVju75ePcSIdQbH6qt6iGhWnrJ6t57J6bmEkbTG9G4dAUAYh9bVHk1alYS9W%2Fn6JQZyzZodRD5eNTatUj%2F5bacHIusFstl3JPI7Qg47e1f8IU5xmEtsl1SNLuO3em4oSKU1brTQGWwBoWqMCWdQuck2r18Mxi2WVbpaYq9G17JwqRGfNYXYh7J31gYN0VLiLspLJww0GatLegNAIkG%2Fq1OUurK2NFMPbF7MMGOqUBs9uu4KMCLnQjhQkHY6L8%2FDBFxSy0VaubmTbRjR3%2FVvH2uExQShqxtF9jYxf%2FUrAFb7zJab3KYKcvpfZeO4%2FynwWYChBZrFj7zlu%2BtNkmFJ%2B%2FZFHI4mLDozG6EysV47P9%2Bw7LPbisibF3RYXM39WDtM6%2B73rAZAZR%2BCd0LKw0Pe0r0A86KWJZCZu%2FqSHOJCtnwCM1PQMSEAZGft4mKf1topSX12qD&X-Amz-Signature=b3f24e53237613b2b01e38e31b5d2f2183aaf51fc1b2b52b7ce53fd3ef9e2f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
