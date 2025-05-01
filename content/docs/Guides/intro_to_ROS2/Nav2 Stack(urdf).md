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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWYLXZV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCn7CuMCPr15JOX03kgWxFubVri%2BNF3X47mGWiEvOJkLAIhAMjXh%2FDEi1R4cpDakce2DFT%2FtI6SdnVHmDRrt2sY38H4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQr3P2blqsBYquHB0q3ANQ%2BraoZE3RfSI236oSDIulmm3Eief4INg1btzr2SkaBX36m%2BNpudnFQ%2FDn%2FrsLNP7AM%2BG64Im38DxMoTXoz6LLCThY85stY2SQ%2FQU3Geiqub%2F%2F2mORspn%2BGtNWfcduULl0NcZA%2BfHAF%2B7eOnEIPFOASvW%2Ft8rLYsqSy3ghm4bjDi071yNUCYZ44gHUE1UNZ6lekqyUQ0LgPBsSMdTw1ijuBj3DJIuePXrZQDBHGiKJPZ8cMY0G4bb0Br3zAkyvlCknS2Vrsy0S5UGEvYEg89r1lAQjI2BJinOlqTDcTDOP%2Fymzk%2BTOc6tIWb2KI4VMt%2B7T6Z8BLznlsLF5Wc%2FdGw6oICURdVnfeKhqPPDBP6bl%2BNhflkMVN3fFBZj9wxzZyNFj25X2ymlYnLcfoADY2zFYoAdteHSHeicL3dhLxCEjjlIRg%2BY8IKap9tH52ClEWIjeuwJrSikWA3TO%2BsHCkfl2FcGtwnKulgbL5Te5ziCVh7y1wycDzhklSBQ6rzRr5GJRM2XA76GSCAIZOcdc%2F5Iy7h76hegGuDQ11GtdEl%2BZ5qJDYJK8AZPzhZdcLFNlCCNKL7bMkX70AX4Qia1o9K3uxtPORJW6GXNXRfVT%2BhAKC41iDzS%2F3JtgGGVmPzCkos7ABjqkAQ6jEco4MdlBbbLAdZCFjG3Z6SOzXjAShbc51B%2BlX2WnLCtrCrVYKZ4BPCAlFSa%2BHI3skHFNRgUsXS1Ofh5wJ9drlkUu60ZNEhwnSHziW858DH1QrrJ%2FgPjhE329IcGyJu%2Bp2XR5YSiTZ4OXLWVyIet%2Fv7XuxkSz9H8WKfAkLNmzUO9%2BBek5j6wWt%2F7mRKxSn4HnZjQRW4LOHUtqRYlUwa3NSVdw&X-Amz-Signature=576decb5b56ac4bf907cc4e7a53dfa8af231d3276e29f10eac966320ead8f82f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWYLXZV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCn7CuMCPr15JOX03kgWxFubVri%2BNF3X47mGWiEvOJkLAIhAMjXh%2FDEi1R4cpDakce2DFT%2FtI6SdnVHmDRrt2sY38H4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQr3P2blqsBYquHB0q3ANQ%2BraoZE3RfSI236oSDIulmm3Eief4INg1btzr2SkaBX36m%2BNpudnFQ%2FDn%2FrsLNP7AM%2BG64Im38DxMoTXoz6LLCThY85stY2SQ%2FQU3Geiqub%2F%2F2mORspn%2BGtNWfcduULl0NcZA%2BfHAF%2B7eOnEIPFOASvW%2Ft8rLYsqSy3ghm4bjDi071yNUCYZ44gHUE1UNZ6lekqyUQ0LgPBsSMdTw1ijuBj3DJIuePXrZQDBHGiKJPZ8cMY0G4bb0Br3zAkyvlCknS2Vrsy0S5UGEvYEg89r1lAQjI2BJinOlqTDcTDOP%2Fymzk%2BTOc6tIWb2KI4VMt%2B7T6Z8BLznlsLF5Wc%2FdGw6oICURdVnfeKhqPPDBP6bl%2BNhflkMVN3fFBZj9wxzZyNFj25X2ymlYnLcfoADY2zFYoAdteHSHeicL3dhLxCEjjlIRg%2BY8IKap9tH52ClEWIjeuwJrSikWA3TO%2BsHCkfl2FcGtwnKulgbL5Te5ziCVh7y1wycDzhklSBQ6rzRr5GJRM2XA76GSCAIZOcdc%2F5Iy7h76hegGuDQ11GtdEl%2BZ5qJDYJK8AZPzhZdcLFNlCCNKL7bMkX70AX4Qia1o9K3uxtPORJW6GXNXRfVT%2BhAKC41iDzS%2F3JtgGGVmPzCkos7ABjqkAQ6jEco4MdlBbbLAdZCFjG3Z6SOzXjAShbc51B%2BlX2WnLCtrCrVYKZ4BPCAlFSa%2BHI3skHFNRgUsXS1Ofh5wJ9drlkUu60ZNEhwnSHziW858DH1QrrJ%2FgPjhE329IcGyJu%2Bp2XR5YSiTZ4OXLWVyIet%2Fv7XuxkSz9H8WKfAkLNmzUO9%2BBek5j6wWt%2F7mRKxSn4HnZjQRW4LOHUtqRYlUwa3NSVdw&X-Amz-Signature=f70c0bca163e02075ff30704c70a16fee72f864db22732131485bac6fbd9cc02&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWYLXZV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCn7CuMCPr15JOX03kgWxFubVri%2BNF3X47mGWiEvOJkLAIhAMjXh%2FDEi1R4cpDakce2DFT%2FtI6SdnVHmDRrt2sY38H4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQr3P2blqsBYquHB0q3ANQ%2BraoZE3RfSI236oSDIulmm3Eief4INg1btzr2SkaBX36m%2BNpudnFQ%2FDn%2FrsLNP7AM%2BG64Im38DxMoTXoz6LLCThY85stY2SQ%2FQU3Geiqub%2F%2F2mORspn%2BGtNWfcduULl0NcZA%2BfHAF%2B7eOnEIPFOASvW%2Ft8rLYsqSy3ghm4bjDi071yNUCYZ44gHUE1UNZ6lekqyUQ0LgPBsSMdTw1ijuBj3DJIuePXrZQDBHGiKJPZ8cMY0G4bb0Br3zAkyvlCknS2Vrsy0S5UGEvYEg89r1lAQjI2BJinOlqTDcTDOP%2Fymzk%2BTOc6tIWb2KI4VMt%2B7T6Z8BLznlsLF5Wc%2FdGw6oICURdVnfeKhqPPDBP6bl%2BNhflkMVN3fFBZj9wxzZyNFj25X2ymlYnLcfoADY2zFYoAdteHSHeicL3dhLxCEjjlIRg%2BY8IKap9tH52ClEWIjeuwJrSikWA3TO%2BsHCkfl2FcGtwnKulgbL5Te5ziCVh7y1wycDzhklSBQ6rzRr5GJRM2XA76GSCAIZOcdc%2F5Iy7h76hegGuDQ11GtdEl%2BZ5qJDYJK8AZPzhZdcLFNlCCNKL7bMkX70AX4Qia1o9K3uxtPORJW6GXNXRfVT%2BhAKC41iDzS%2F3JtgGGVmPzCkos7ABjqkAQ6jEco4MdlBbbLAdZCFjG3Z6SOzXjAShbc51B%2BlX2WnLCtrCrVYKZ4BPCAlFSa%2BHI3skHFNRgUsXS1Ofh5wJ9drlkUu60ZNEhwnSHziW858DH1QrrJ%2FgPjhE329IcGyJu%2Bp2XR5YSiTZ4OXLWVyIet%2Fv7XuxkSz9H8WKfAkLNmzUO9%2BBek5j6wWt%2F7mRKxSn4HnZjQRW4LOHUtqRYlUwa3NSVdw&X-Amz-Signature=0a0f32147c154f78bec94af32c107249e0260e9c3afb7ef3ce27d00b03bf1df3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWYLXZV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCn7CuMCPr15JOX03kgWxFubVri%2BNF3X47mGWiEvOJkLAIhAMjXh%2FDEi1R4cpDakce2DFT%2FtI6SdnVHmDRrt2sY38H4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQr3P2blqsBYquHB0q3ANQ%2BraoZE3RfSI236oSDIulmm3Eief4INg1btzr2SkaBX36m%2BNpudnFQ%2FDn%2FrsLNP7AM%2BG64Im38DxMoTXoz6LLCThY85stY2SQ%2FQU3Geiqub%2F%2F2mORspn%2BGtNWfcduULl0NcZA%2BfHAF%2B7eOnEIPFOASvW%2Ft8rLYsqSy3ghm4bjDi071yNUCYZ44gHUE1UNZ6lekqyUQ0LgPBsSMdTw1ijuBj3DJIuePXrZQDBHGiKJPZ8cMY0G4bb0Br3zAkyvlCknS2Vrsy0S5UGEvYEg89r1lAQjI2BJinOlqTDcTDOP%2Fymzk%2BTOc6tIWb2KI4VMt%2B7T6Z8BLznlsLF5Wc%2FdGw6oICURdVnfeKhqPPDBP6bl%2BNhflkMVN3fFBZj9wxzZyNFj25X2ymlYnLcfoADY2zFYoAdteHSHeicL3dhLxCEjjlIRg%2BY8IKap9tH52ClEWIjeuwJrSikWA3TO%2BsHCkfl2FcGtwnKulgbL5Te5ziCVh7y1wycDzhklSBQ6rzRr5GJRM2XA76GSCAIZOcdc%2F5Iy7h76hegGuDQ11GtdEl%2BZ5qJDYJK8AZPzhZdcLFNlCCNKL7bMkX70AX4Qia1o9K3uxtPORJW6GXNXRfVT%2BhAKC41iDzS%2F3JtgGGVmPzCkos7ABjqkAQ6jEco4MdlBbbLAdZCFjG3Z6SOzXjAShbc51B%2BlX2WnLCtrCrVYKZ4BPCAlFSa%2BHI3skHFNRgUsXS1Ofh5wJ9drlkUu60ZNEhwnSHziW858DH1QrrJ%2FgPjhE329IcGyJu%2Bp2XR5YSiTZ4OXLWVyIet%2Fv7XuxkSz9H8WKfAkLNmzUO9%2BBek5j6wWt%2F7mRKxSn4HnZjQRW4LOHUtqRYlUwa3NSVdw&X-Amz-Signature=f3b7bfdf6b9b9e66b4c78b07b76dca5a06b896dcbe1e32b72db56e08143b0fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWYLXZV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCn7CuMCPr15JOX03kgWxFubVri%2BNF3X47mGWiEvOJkLAIhAMjXh%2FDEi1R4cpDakce2DFT%2FtI6SdnVHmDRrt2sY38H4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQr3P2blqsBYquHB0q3ANQ%2BraoZE3RfSI236oSDIulmm3Eief4INg1btzr2SkaBX36m%2BNpudnFQ%2FDn%2FrsLNP7AM%2BG64Im38DxMoTXoz6LLCThY85stY2SQ%2FQU3Geiqub%2F%2F2mORspn%2BGtNWfcduULl0NcZA%2BfHAF%2B7eOnEIPFOASvW%2Ft8rLYsqSy3ghm4bjDi071yNUCYZ44gHUE1UNZ6lekqyUQ0LgPBsSMdTw1ijuBj3DJIuePXrZQDBHGiKJPZ8cMY0G4bb0Br3zAkyvlCknS2Vrsy0S5UGEvYEg89r1lAQjI2BJinOlqTDcTDOP%2Fymzk%2BTOc6tIWb2KI4VMt%2B7T6Z8BLznlsLF5Wc%2FdGw6oICURdVnfeKhqPPDBP6bl%2BNhflkMVN3fFBZj9wxzZyNFj25X2ymlYnLcfoADY2zFYoAdteHSHeicL3dhLxCEjjlIRg%2BY8IKap9tH52ClEWIjeuwJrSikWA3TO%2BsHCkfl2FcGtwnKulgbL5Te5ziCVh7y1wycDzhklSBQ6rzRr5GJRM2XA76GSCAIZOcdc%2F5Iy7h76hegGuDQ11GtdEl%2BZ5qJDYJK8AZPzhZdcLFNlCCNKL7bMkX70AX4Qia1o9K3uxtPORJW6GXNXRfVT%2BhAKC41iDzS%2F3JtgGGVmPzCkos7ABjqkAQ6jEco4MdlBbbLAdZCFjG3Z6SOzXjAShbc51B%2BlX2WnLCtrCrVYKZ4BPCAlFSa%2BHI3skHFNRgUsXS1Ofh5wJ9drlkUu60ZNEhwnSHziW858DH1QrrJ%2FgPjhE329IcGyJu%2Bp2XR5YSiTZ4OXLWVyIet%2Fv7XuxkSz9H8WKfAkLNmzUO9%2BBek5j6wWt%2F7mRKxSn4HnZjQRW4LOHUtqRYlUwa3NSVdw&X-Amz-Signature=4097ac1cae7065e59840ac218c14a1b7fb1826520f8258f5dc19ab2ccc63ccea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWYLXZV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCn7CuMCPr15JOX03kgWxFubVri%2BNF3X47mGWiEvOJkLAIhAMjXh%2FDEi1R4cpDakce2DFT%2FtI6SdnVHmDRrt2sY38H4KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQr3P2blqsBYquHB0q3ANQ%2BraoZE3RfSI236oSDIulmm3Eief4INg1btzr2SkaBX36m%2BNpudnFQ%2FDn%2FrsLNP7AM%2BG64Im38DxMoTXoz6LLCThY85stY2SQ%2FQU3Geiqub%2F%2F2mORspn%2BGtNWfcduULl0NcZA%2BfHAF%2B7eOnEIPFOASvW%2Ft8rLYsqSy3ghm4bjDi071yNUCYZ44gHUE1UNZ6lekqyUQ0LgPBsSMdTw1ijuBj3DJIuePXrZQDBHGiKJPZ8cMY0G4bb0Br3zAkyvlCknS2Vrsy0S5UGEvYEg89r1lAQjI2BJinOlqTDcTDOP%2Fymzk%2BTOc6tIWb2KI4VMt%2B7T6Z8BLznlsLF5Wc%2FdGw6oICURdVnfeKhqPPDBP6bl%2BNhflkMVN3fFBZj9wxzZyNFj25X2ymlYnLcfoADY2zFYoAdteHSHeicL3dhLxCEjjlIRg%2BY8IKap9tH52ClEWIjeuwJrSikWA3TO%2BsHCkfl2FcGtwnKulgbL5Te5ziCVh7y1wycDzhklSBQ6rzRr5GJRM2XA76GSCAIZOcdc%2F5Iy7h76hegGuDQ11GtdEl%2BZ5qJDYJK8AZPzhZdcLFNlCCNKL7bMkX70AX4Qia1o9K3uxtPORJW6GXNXRfVT%2BhAKC41iDzS%2F3JtgGGVmPzCkos7ABjqkAQ6jEco4MdlBbbLAdZCFjG3Z6SOzXjAShbc51B%2BlX2WnLCtrCrVYKZ4BPCAlFSa%2BHI3skHFNRgUsXS1Ofh5wJ9drlkUu60ZNEhwnSHziW858DH1QrrJ%2FgPjhE329IcGyJu%2Bp2XR5YSiTZ4OXLWVyIet%2Fv7XuxkSz9H8WKfAkLNmzUO9%2BBek5j6wWt%2F7mRKxSn4HnZjQRW4LOHUtqRYlUwa3NSVdw&X-Amz-Signature=d47354a39e359f35d25a846197778417b15c8980e6f00280a6b18e037080bf80&X-Amz-SignedHeaders=host&x-id=GetObject)
