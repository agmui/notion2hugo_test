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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5I3Q4O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwhKd7IU1xUqT7H79JouJz00IXSXRoQl815IEQFu5QQIhAIsezox1ywA%2F4mr4MCPieOhh7%2FSAyFqhgyQQYdMsXATuKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUEiakI8mk7CknxM4q3ANGyA7zGaBzwBE%2BICOtIzIFmxdWfztararEgXNcz5r9vhSSQ%2F0rEaJ197fg8Irmq97CcOBl58%2BI2zbfDRvveGed5h6110Oq5nG%2BEGfC6qpIaWobUayPWmm6FWXFX9ohtZIRpMbXq9D%2FotdUdnd4qYmzdSp9DcTVlDoULA01lF%2BZUiEhQcr9f31i7E8SO%2F4RTKPTnfwdbrov25F9y1yRKVCynn3KmmMciJHu9cVVLBxj5wbIyoEa9JPPXCfFclWK6kj%2BLawt5cWjT3f6dfkipDz%2FOUT%2BHJCmAyGSNprpjcrsMgIBL%2B1Db8Pa3opb0ModXqXbi2wYEnRmg3qUOdvPiIpCvY1P8l%2BQxC9EPDVotjqTL0hg0nAZZXTG76Ry%2FPFgRNIp1hPIbkpgu6jAHbQyupqI17J19x2kPYgres5UgiEhqrzHi%2BrgcAGJK%2BL20WBpotuwg7kuxQ0ssSIW3sDCiox8R5jgpnoQtkfavbkSxsDs7x7ipEKNyldBN1eHOPreRImoSMblCIW1DOZCrCTtzmVSnrqM5RkvTGWtCOO0FsTKo%2BmBCO0MjQc4gtDRnjy96GRle6rDTFEQdxmu1b09Tk3N0c2%2FKj03z9URWgxE50ZeckX%2FLPf9gxZTmCTGezDCyaTCBjqkAef6qloafHtgEVf%2FScD1JX0mfG8XGWWrooOXLlaJE17mPv8e%2B3PnrVj7q0DxByyeHL7CT0CH1vfkuk9%2FJQ%2BZZipWQgn7LNaEehHV35axd72XLyaX%2Bbza9UudRG5D%2BbXxMLFyeNp02pCYpSTLarb7a9NAMSWNmqAAVpvYgGTr3QrJ5IDz8YyVozw9u0K8b0GnUxEDzA3xCgwGbiTK0SKErey9Vhcf&X-Amz-Signature=780ab463d3c11cef1e6db63f931f342299383c7b74142ad39e33dc27d546160f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5I3Q4O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwhKd7IU1xUqT7H79JouJz00IXSXRoQl815IEQFu5QQIhAIsezox1ywA%2F4mr4MCPieOhh7%2FSAyFqhgyQQYdMsXATuKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUEiakI8mk7CknxM4q3ANGyA7zGaBzwBE%2BICOtIzIFmxdWfztararEgXNcz5r9vhSSQ%2F0rEaJ197fg8Irmq97CcOBl58%2BI2zbfDRvveGed5h6110Oq5nG%2BEGfC6qpIaWobUayPWmm6FWXFX9ohtZIRpMbXq9D%2FotdUdnd4qYmzdSp9DcTVlDoULA01lF%2BZUiEhQcr9f31i7E8SO%2F4RTKPTnfwdbrov25F9y1yRKVCynn3KmmMciJHu9cVVLBxj5wbIyoEa9JPPXCfFclWK6kj%2BLawt5cWjT3f6dfkipDz%2FOUT%2BHJCmAyGSNprpjcrsMgIBL%2B1Db8Pa3opb0ModXqXbi2wYEnRmg3qUOdvPiIpCvY1P8l%2BQxC9EPDVotjqTL0hg0nAZZXTG76Ry%2FPFgRNIp1hPIbkpgu6jAHbQyupqI17J19x2kPYgres5UgiEhqrzHi%2BrgcAGJK%2BL20WBpotuwg7kuxQ0ssSIW3sDCiox8R5jgpnoQtkfavbkSxsDs7x7ipEKNyldBN1eHOPreRImoSMblCIW1DOZCrCTtzmVSnrqM5RkvTGWtCOO0FsTKo%2BmBCO0MjQc4gtDRnjy96GRle6rDTFEQdxmu1b09Tk3N0c2%2FKj03z9URWgxE50ZeckX%2FLPf9gxZTmCTGezDCyaTCBjqkAef6qloafHtgEVf%2FScD1JX0mfG8XGWWrooOXLlaJE17mPv8e%2B3PnrVj7q0DxByyeHL7CT0CH1vfkuk9%2FJQ%2BZZipWQgn7LNaEehHV35axd72XLyaX%2Bbza9UudRG5D%2BbXxMLFyeNp02pCYpSTLarb7a9NAMSWNmqAAVpvYgGTr3QrJ5IDz8YyVozw9u0K8b0GnUxEDzA3xCgwGbiTK0SKErey9Vhcf&X-Amz-Signature=c26ab8518492b5f79e0aa86b4753b3b214771b4d806e497baf368b585f0b4e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5I3Q4O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwhKd7IU1xUqT7H79JouJz00IXSXRoQl815IEQFu5QQIhAIsezox1ywA%2F4mr4MCPieOhh7%2FSAyFqhgyQQYdMsXATuKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUEiakI8mk7CknxM4q3ANGyA7zGaBzwBE%2BICOtIzIFmxdWfztararEgXNcz5r9vhSSQ%2F0rEaJ197fg8Irmq97CcOBl58%2BI2zbfDRvveGed5h6110Oq5nG%2BEGfC6qpIaWobUayPWmm6FWXFX9ohtZIRpMbXq9D%2FotdUdnd4qYmzdSp9DcTVlDoULA01lF%2BZUiEhQcr9f31i7E8SO%2F4RTKPTnfwdbrov25F9y1yRKVCynn3KmmMciJHu9cVVLBxj5wbIyoEa9JPPXCfFclWK6kj%2BLawt5cWjT3f6dfkipDz%2FOUT%2BHJCmAyGSNprpjcrsMgIBL%2B1Db8Pa3opb0ModXqXbi2wYEnRmg3qUOdvPiIpCvY1P8l%2BQxC9EPDVotjqTL0hg0nAZZXTG76Ry%2FPFgRNIp1hPIbkpgu6jAHbQyupqI17J19x2kPYgres5UgiEhqrzHi%2BrgcAGJK%2BL20WBpotuwg7kuxQ0ssSIW3sDCiox8R5jgpnoQtkfavbkSxsDs7x7ipEKNyldBN1eHOPreRImoSMblCIW1DOZCrCTtzmVSnrqM5RkvTGWtCOO0FsTKo%2BmBCO0MjQc4gtDRnjy96GRle6rDTFEQdxmu1b09Tk3N0c2%2FKj03z9URWgxE50ZeckX%2FLPf9gxZTmCTGezDCyaTCBjqkAef6qloafHtgEVf%2FScD1JX0mfG8XGWWrooOXLlaJE17mPv8e%2B3PnrVj7q0DxByyeHL7CT0CH1vfkuk9%2FJQ%2BZZipWQgn7LNaEehHV35axd72XLyaX%2Bbza9UudRG5D%2BbXxMLFyeNp02pCYpSTLarb7a9NAMSWNmqAAVpvYgGTr3QrJ5IDz8YyVozw9u0K8b0GnUxEDzA3xCgwGbiTK0SKErey9Vhcf&X-Amz-Signature=a1ad97c2bf92680fbb19bf4716161eea72d064f172288aa532502193d998dad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5I3Q4O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwhKd7IU1xUqT7H79JouJz00IXSXRoQl815IEQFu5QQIhAIsezox1ywA%2F4mr4MCPieOhh7%2FSAyFqhgyQQYdMsXATuKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUEiakI8mk7CknxM4q3ANGyA7zGaBzwBE%2BICOtIzIFmxdWfztararEgXNcz5r9vhSSQ%2F0rEaJ197fg8Irmq97CcOBl58%2BI2zbfDRvveGed5h6110Oq5nG%2BEGfC6qpIaWobUayPWmm6FWXFX9ohtZIRpMbXq9D%2FotdUdnd4qYmzdSp9DcTVlDoULA01lF%2BZUiEhQcr9f31i7E8SO%2F4RTKPTnfwdbrov25F9y1yRKVCynn3KmmMciJHu9cVVLBxj5wbIyoEa9JPPXCfFclWK6kj%2BLawt5cWjT3f6dfkipDz%2FOUT%2BHJCmAyGSNprpjcrsMgIBL%2B1Db8Pa3opb0ModXqXbi2wYEnRmg3qUOdvPiIpCvY1P8l%2BQxC9EPDVotjqTL0hg0nAZZXTG76Ry%2FPFgRNIp1hPIbkpgu6jAHbQyupqI17J19x2kPYgres5UgiEhqrzHi%2BrgcAGJK%2BL20WBpotuwg7kuxQ0ssSIW3sDCiox8R5jgpnoQtkfavbkSxsDs7x7ipEKNyldBN1eHOPreRImoSMblCIW1DOZCrCTtzmVSnrqM5RkvTGWtCOO0FsTKo%2BmBCO0MjQc4gtDRnjy96GRle6rDTFEQdxmu1b09Tk3N0c2%2FKj03z9URWgxE50ZeckX%2FLPf9gxZTmCTGezDCyaTCBjqkAef6qloafHtgEVf%2FScD1JX0mfG8XGWWrooOXLlaJE17mPv8e%2B3PnrVj7q0DxByyeHL7CT0CH1vfkuk9%2FJQ%2BZZipWQgn7LNaEehHV35axd72XLyaX%2Bbza9UudRG5D%2BbXxMLFyeNp02pCYpSTLarb7a9NAMSWNmqAAVpvYgGTr3QrJ5IDz8YyVozw9u0K8b0GnUxEDzA3xCgwGbiTK0SKErey9Vhcf&X-Amz-Signature=c1b1b7830c0b5a38775b581cbca32734c6b03d2385ac83d1a52701fe8521edf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5I3Q4O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwhKd7IU1xUqT7H79JouJz00IXSXRoQl815IEQFu5QQIhAIsezox1ywA%2F4mr4MCPieOhh7%2FSAyFqhgyQQYdMsXATuKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUEiakI8mk7CknxM4q3ANGyA7zGaBzwBE%2BICOtIzIFmxdWfztararEgXNcz5r9vhSSQ%2F0rEaJ197fg8Irmq97CcOBl58%2BI2zbfDRvveGed5h6110Oq5nG%2BEGfC6qpIaWobUayPWmm6FWXFX9ohtZIRpMbXq9D%2FotdUdnd4qYmzdSp9DcTVlDoULA01lF%2BZUiEhQcr9f31i7E8SO%2F4RTKPTnfwdbrov25F9y1yRKVCynn3KmmMciJHu9cVVLBxj5wbIyoEa9JPPXCfFclWK6kj%2BLawt5cWjT3f6dfkipDz%2FOUT%2BHJCmAyGSNprpjcrsMgIBL%2B1Db8Pa3opb0ModXqXbi2wYEnRmg3qUOdvPiIpCvY1P8l%2BQxC9EPDVotjqTL0hg0nAZZXTG76Ry%2FPFgRNIp1hPIbkpgu6jAHbQyupqI17J19x2kPYgres5UgiEhqrzHi%2BrgcAGJK%2BL20WBpotuwg7kuxQ0ssSIW3sDCiox8R5jgpnoQtkfavbkSxsDs7x7ipEKNyldBN1eHOPreRImoSMblCIW1DOZCrCTtzmVSnrqM5RkvTGWtCOO0FsTKo%2BmBCO0MjQc4gtDRnjy96GRle6rDTFEQdxmu1b09Tk3N0c2%2FKj03z9URWgxE50ZeckX%2FLPf9gxZTmCTGezDCyaTCBjqkAef6qloafHtgEVf%2FScD1JX0mfG8XGWWrooOXLlaJE17mPv8e%2B3PnrVj7q0DxByyeHL7CT0CH1vfkuk9%2FJQ%2BZZipWQgn7LNaEehHV35axd72XLyaX%2Bbza9UudRG5D%2BbXxMLFyeNp02pCYpSTLarb7a9NAMSWNmqAAVpvYgGTr3QrJ5IDz8YyVozw9u0K8b0GnUxEDzA3xCgwGbiTK0SKErey9Vhcf&X-Amz-Signature=a0d1149afd45a4edf6fec72b615b857490aa68ec775f6912e0198e109f9be6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5I3Q4O%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFwhKd7IU1xUqT7H79JouJz00IXSXRoQl815IEQFu5QQIhAIsezox1ywA%2F4mr4MCPieOhh7%2FSAyFqhgyQQYdMsXATuKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUEiakI8mk7CknxM4q3ANGyA7zGaBzwBE%2BICOtIzIFmxdWfztararEgXNcz5r9vhSSQ%2F0rEaJ197fg8Irmq97CcOBl58%2BI2zbfDRvveGed5h6110Oq5nG%2BEGfC6qpIaWobUayPWmm6FWXFX9ohtZIRpMbXq9D%2FotdUdnd4qYmzdSp9DcTVlDoULA01lF%2BZUiEhQcr9f31i7E8SO%2F4RTKPTnfwdbrov25F9y1yRKVCynn3KmmMciJHu9cVVLBxj5wbIyoEa9JPPXCfFclWK6kj%2BLawt5cWjT3f6dfkipDz%2FOUT%2BHJCmAyGSNprpjcrsMgIBL%2B1Db8Pa3opb0ModXqXbi2wYEnRmg3qUOdvPiIpCvY1P8l%2BQxC9EPDVotjqTL0hg0nAZZXTG76Ry%2FPFgRNIp1hPIbkpgu6jAHbQyupqI17J19x2kPYgres5UgiEhqrzHi%2BrgcAGJK%2BL20WBpotuwg7kuxQ0ssSIW3sDCiox8R5jgpnoQtkfavbkSxsDs7x7ipEKNyldBN1eHOPreRImoSMblCIW1DOZCrCTtzmVSnrqM5RkvTGWtCOO0FsTKo%2BmBCO0MjQc4gtDRnjy96GRle6rDTFEQdxmu1b09Tk3N0c2%2FKj03z9URWgxE50ZeckX%2FLPf9gxZTmCTGezDCyaTCBjqkAef6qloafHtgEVf%2FScD1JX0mfG8XGWWrooOXLlaJE17mPv8e%2B3PnrVj7q0DxByyeHL7CT0CH1vfkuk9%2FJQ%2BZZipWQgn7LNaEehHV35axd72XLyaX%2Bbza9UudRG5D%2BbXxMLFyeNp02pCYpSTLarb7a9NAMSWNmqAAVpvYgGTr3QrJ5IDz8YyVozw9u0K8b0GnUxEDzA3xCgwGbiTK0SKErey9Vhcf&X-Amz-Signature=59ae3ff56230edfddd321ade08f3de098aa3091c23f25476c699149eb2ed4e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
