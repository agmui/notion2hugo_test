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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CHNME3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID5WtA1jrWWDkVssg8w1pyIakLJV53p8M%2FxFcjHFafFbAiAclb2TzfwcpN%2Fexkqa09AQ93WNNbPXh1aErMm7vjq8eiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA80IQVXR70d7hnsEKtwDg0cumf%2Fqm229VxlLLLBB0rE%2F1P50G5GzzY%2FsUb%2BUXr1p2pC3In9Pv33IEnMkzteg5vzmDTHFVUD7mdIxuuoc9RP35u5NM8A1DuvqH%2BNQZAqnachgHTVFwL3gCn9vfp4YnPjXmVSEWsQ%2BeEAUeuYnjISMqa0yyvV0eGGHyErcOFq%2Bv%2F5ZyW%2BDsV8OOYArtsI2M8W2LKuCeO0K%2FmVERSoCyxUcW4nPDTn512HRz3qdR2aOZpSMDXACtmQKfwJDSuoS6qBj5UvsWWvL8ClJIavS%2BH2PA2s468eOWjvEN2NCBSLNnEukcdfv6FVG%2FAy1l%2Bb8Z3eZjJAesmH0xZDy13ifZ4xTqy9moTssg61bKtfhO32%2FAS6OjTohcOrj6ap6P9ZLf%2Fvmq7uktMb4hYWeH8ro9mL8RXTzE0FHxlxTUxDjNYARDL19VfQBOaV6XPqOAgWtDxLrNMMDRdyu%2BYYPdNkw%2BroaasmCEjfqVmJzFALbEWeCjD333wO8mgksbAp8Rm%2FVtG65qqjX2rw%2BpxtZIABaFTjrviiJZSfex%2F%2BPz1X5IycHIZ02ya261T%2FU9FEs9lHGjZ3kKIzDBQhSiRw%2BCcbqNASfGxmlZtVtyBXu3dTFUt14wgDiapRTlpRObHIwvoWawAY6pgGndFgzS3ufYW8tiWhaHKWmhOopQfdCvsNUZG2se9FxV0K9Mam1L021OUIkAJliNIBPTq0waTqzm%2B9d4Ysulz%2FhvXKW6GDpK731SRZE2uEbPdQvxmnsdj2BAk3EwCidkR6yY%2BMLNNHFj9OC6DllsYXFObAUDDYGjhkMRtg0pd0pFF95YOrBsiTIGTEQg5jd27li0x52a7KBm2VEn7L9Egr1cexdUsHk&X-Amz-Signature=c1b1469b4df8077df2ae46d328092c0c87fea82e9ade5ea7b5f902ec019b528e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CHNME3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID5WtA1jrWWDkVssg8w1pyIakLJV53p8M%2FxFcjHFafFbAiAclb2TzfwcpN%2Fexkqa09AQ93WNNbPXh1aErMm7vjq8eiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA80IQVXR70d7hnsEKtwDg0cumf%2Fqm229VxlLLLBB0rE%2F1P50G5GzzY%2FsUb%2BUXr1p2pC3In9Pv33IEnMkzteg5vzmDTHFVUD7mdIxuuoc9RP35u5NM8A1DuvqH%2BNQZAqnachgHTVFwL3gCn9vfp4YnPjXmVSEWsQ%2BeEAUeuYnjISMqa0yyvV0eGGHyErcOFq%2Bv%2F5ZyW%2BDsV8OOYArtsI2M8W2LKuCeO0K%2FmVERSoCyxUcW4nPDTn512HRz3qdR2aOZpSMDXACtmQKfwJDSuoS6qBj5UvsWWvL8ClJIavS%2BH2PA2s468eOWjvEN2NCBSLNnEukcdfv6FVG%2FAy1l%2Bb8Z3eZjJAesmH0xZDy13ifZ4xTqy9moTssg61bKtfhO32%2FAS6OjTohcOrj6ap6P9ZLf%2Fvmq7uktMb4hYWeH8ro9mL8RXTzE0FHxlxTUxDjNYARDL19VfQBOaV6XPqOAgWtDxLrNMMDRdyu%2BYYPdNkw%2BroaasmCEjfqVmJzFALbEWeCjD333wO8mgksbAp8Rm%2FVtG65qqjX2rw%2BpxtZIABaFTjrviiJZSfex%2F%2BPz1X5IycHIZ02ya261T%2FU9FEs9lHGjZ3kKIzDBQhSiRw%2BCcbqNASfGxmlZtVtyBXu3dTFUt14wgDiapRTlpRObHIwvoWawAY6pgGndFgzS3ufYW8tiWhaHKWmhOopQfdCvsNUZG2se9FxV0K9Mam1L021OUIkAJliNIBPTq0waTqzm%2B9d4Ysulz%2FhvXKW6GDpK731SRZE2uEbPdQvxmnsdj2BAk3EwCidkR6yY%2BMLNNHFj9OC6DllsYXFObAUDDYGjhkMRtg0pd0pFF95YOrBsiTIGTEQg5jd27li0x52a7KBm2VEn7L9Egr1cexdUsHk&X-Amz-Signature=9d49251b807563920fed44a9e6cf0857ce51246c54c2f526039bd226203e45ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CHNME3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID5WtA1jrWWDkVssg8w1pyIakLJV53p8M%2FxFcjHFafFbAiAclb2TzfwcpN%2Fexkqa09AQ93WNNbPXh1aErMm7vjq8eiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA80IQVXR70d7hnsEKtwDg0cumf%2Fqm229VxlLLLBB0rE%2F1P50G5GzzY%2FsUb%2BUXr1p2pC3In9Pv33IEnMkzteg5vzmDTHFVUD7mdIxuuoc9RP35u5NM8A1DuvqH%2BNQZAqnachgHTVFwL3gCn9vfp4YnPjXmVSEWsQ%2BeEAUeuYnjISMqa0yyvV0eGGHyErcOFq%2Bv%2F5ZyW%2BDsV8OOYArtsI2M8W2LKuCeO0K%2FmVERSoCyxUcW4nPDTn512HRz3qdR2aOZpSMDXACtmQKfwJDSuoS6qBj5UvsWWvL8ClJIavS%2BH2PA2s468eOWjvEN2NCBSLNnEukcdfv6FVG%2FAy1l%2Bb8Z3eZjJAesmH0xZDy13ifZ4xTqy9moTssg61bKtfhO32%2FAS6OjTohcOrj6ap6P9ZLf%2Fvmq7uktMb4hYWeH8ro9mL8RXTzE0FHxlxTUxDjNYARDL19VfQBOaV6XPqOAgWtDxLrNMMDRdyu%2BYYPdNkw%2BroaasmCEjfqVmJzFALbEWeCjD333wO8mgksbAp8Rm%2FVtG65qqjX2rw%2BpxtZIABaFTjrviiJZSfex%2F%2BPz1X5IycHIZ02ya261T%2FU9FEs9lHGjZ3kKIzDBQhSiRw%2BCcbqNASfGxmlZtVtyBXu3dTFUt14wgDiapRTlpRObHIwvoWawAY6pgGndFgzS3ufYW8tiWhaHKWmhOopQfdCvsNUZG2se9FxV0K9Mam1L021OUIkAJliNIBPTq0waTqzm%2B9d4Ysulz%2FhvXKW6GDpK731SRZE2uEbPdQvxmnsdj2BAk3EwCidkR6yY%2BMLNNHFj9OC6DllsYXFObAUDDYGjhkMRtg0pd0pFF95YOrBsiTIGTEQg5jd27li0x52a7KBm2VEn7L9Egr1cexdUsHk&X-Amz-Signature=76731b1c8b3a83d3a999236047aaa26f9a75aa4a97dad0b198f09f35dfdb48f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CHNME3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID5WtA1jrWWDkVssg8w1pyIakLJV53p8M%2FxFcjHFafFbAiAclb2TzfwcpN%2Fexkqa09AQ93WNNbPXh1aErMm7vjq8eiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA80IQVXR70d7hnsEKtwDg0cumf%2Fqm229VxlLLLBB0rE%2F1P50G5GzzY%2FsUb%2BUXr1p2pC3In9Pv33IEnMkzteg5vzmDTHFVUD7mdIxuuoc9RP35u5NM8A1DuvqH%2BNQZAqnachgHTVFwL3gCn9vfp4YnPjXmVSEWsQ%2BeEAUeuYnjISMqa0yyvV0eGGHyErcOFq%2Bv%2F5ZyW%2BDsV8OOYArtsI2M8W2LKuCeO0K%2FmVERSoCyxUcW4nPDTn512HRz3qdR2aOZpSMDXACtmQKfwJDSuoS6qBj5UvsWWvL8ClJIavS%2BH2PA2s468eOWjvEN2NCBSLNnEukcdfv6FVG%2FAy1l%2Bb8Z3eZjJAesmH0xZDy13ifZ4xTqy9moTssg61bKtfhO32%2FAS6OjTohcOrj6ap6P9ZLf%2Fvmq7uktMb4hYWeH8ro9mL8RXTzE0FHxlxTUxDjNYARDL19VfQBOaV6XPqOAgWtDxLrNMMDRdyu%2BYYPdNkw%2BroaasmCEjfqVmJzFALbEWeCjD333wO8mgksbAp8Rm%2FVtG65qqjX2rw%2BpxtZIABaFTjrviiJZSfex%2F%2BPz1X5IycHIZ02ya261T%2FU9FEs9lHGjZ3kKIzDBQhSiRw%2BCcbqNASfGxmlZtVtyBXu3dTFUt14wgDiapRTlpRObHIwvoWawAY6pgGndFgzS3ufYW8tiWhaHKWmhOopQfdCvsNUZG2se9FxV0K9Mam1L021OUIkAJliNIBPTq0waTqzm%2B9d4Ysulz%2FhvXKW6GDpK731SRZE2uEbPdQvxmnsdj2BAk3EwCidkR6yY%2BMLNNHFj9OC6DllsYXFObAUDDYGjhkMRtg0pd0pFF95YOrBsiTIGTEQg5jd27li0x52a7KBm2VEn7L9Egr1cexdUsHk&X-Amz-Signature=b3c5627da27057e2be1c96ae371ba9683bb5f635ff8e95711ce8614a23c629f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CHNME3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID5WtA1jrWWDkVssg8w1pyIakLJV53p8M%2FxFcjHFafFbAiAclb2TzfwcpN%2Fexkqa09AQ93WNNbPXh1aErMm7vjq8eiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA80IQVXR70d7hnsEKtwDg0cumf%2Fqm229VxlLLLBB0rE%2F1P50G5GzzY%2FsUb%2BUXr1p2pC3In9Pv33IEnMkzteg5vzmDTHFVUD7mdIxuuoc9RP35u5NM8A1DuvqH%2BNQZAqnachgHTVFwL3gCn9vfp4YnPjXmVSEWsQ%2BeEAUeuYnjISMqa0yyvV0eGGHyErcOFq%2Bv%2F5ZyW%2BDsV8OOYArtsI2M8W2LKuCeO0K%2FmVERSoCyxUcW4nPDTn512HRz3qdR2aOZpSMDXACtmQKfwJDSuoS6qBj5UvsWWvL8ClJIavS%2BH2PA2s468eOWjvEN2NCBSLNnEukcdfv6FVG%2FAy1l%2Bb8Z3eZjJAesmH0xZDy13ifZ4xTqy9moTssg61bKtfhO32%2FAS6OjTohcOrj6ap6P9ZLf%2Fvmq7uktMb4hYWeH8ro9mL8RXTzE0FHxlxTUxDjNYARDL19VfQBOaV6XPqOAgWtDxLrNMMDRdyu%2BYYPdNkw%2BroaasmCEjfqVmJzFALbEWeCjD333wO8mgksbAp8Rm%2FVtG65qqjX2rw%2BpxtZIABaFTjrviiJZSfex%2F%2BPz1X5IycHIZ02ya261T%2FU9FEs9lHGjZ3kKIzDBQhSiRw%2BCcbqNASfGxmlZtVtyBXu3dTFUt14wgDiapRTlpRObHIwvoWawAY6pgGndFgzS3ufYW8tiWhaHKWmhOopQfdCvsNUZG2se9FxV0K9Mam1L021OUIkAJliNIBPTq0waTqzm%2B9d4Ysulz%2FhvXKW6GDpK731SRZE2uEbPdQvxmnsdj2BAk3EwCidkR6yY%2BMLNNHFj9OC6DllsYXFObAUDDYGjhkMRtg0pd0pFF95YOrBsiTIGTEQg5jd27li0x52a7KBm2VEn7L9Egr1cexdUsHk&X-Amz-Signature=125a478c7fae3400a5032d648a1e1da392e76d24a370b220fce9d73890ee1651&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CHNME3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCID5WtA1jrWWDkVssg8w1pyIakLJV53p8M%2FxFcjHFafFbAiAclb2TzfwcpN%2Fexkqa09AQ93WNNbPXh1aErMm7vjq8eiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA80IQVXR70d7hnsEKtwDg0cumf%2Fqm229VxlLLLBB0rE%2F1P50G5GzzY%2FsUb%2BUXr1p2pC3In9Pv33IEnMkzteg5vzmDTHFVUD7mdIxuuoc9RP35u5NM8A1DuvqH%2BNQZAqnachgHTVFwL3gCn9vfp4YnPjXmVSEWsQ%2BeEAUeuYnjISMqa0yyvV0eGGHyErcOFq%2Bv%2F5ZyW%2BDsV8OOYArtsI2M8W2LKuCeO0K%2FmVERSoCyxUcW4nPDTn512HRz3qdR2aOZpSMDXACtmQKfwJDSuoS6qBj5UvsWWvL8ClJIavS%2BH2PA2s468eOWjvEN2NCBSLNnEukcdfv6FVG%2FAy1l%2Bb8Z3eZjJAesmH0xZDy13ifZ4xTqy9moTssg61bKtfhO32%2FAS6OjTohcOrj6ap6P9ZLf%2Fvmq7uktMb4hYWeH8ro9mL8RXTzE0FHxlxTUxDjNYARDL19VfQBOaV6XPqOAgWtDxLrNMMDRdyu%2BYYPdNkw%2BroaasmCEjfqVmJzFALbEWeCjD333wO8mgksbAp8Rm%2FVtG65qqjX2rw%2BpxtZIABaFTjrviiJZSfex%2F%2BPz1X5IycHIZ02ya261T%2FU9FEs9lHGjZ3kKIzDBQhSiRw%2BCcbqNASfGxmlZtVtyBXu3dTFUt14wgDiapRTlpRObHIwvoWawAY6pgGndFgzS3ufYW8tiWhaHKWmhOopQfdCvsNUZG2se9FxV0K9Mam1L021OUIkAJliNIBPTq0waTqzm%2B9d4Ysulz%2FhvXKW6GDpK731SRZE2uEbPdQvxmnsdj2BAk3EwCidkR6yY%2BMLNNHFj9OC6DllsYXFObAUDDYGjhkMRtg0pd0pFF95YOrBsiTIGTEQg5jd27li0x52a7KBm2VEn7L9Egr1cexdUsHk&X-Amz-Signature=5149a3e468a045e80de3a4f45e2e01a0009d5fd6ffd6c90b8b73dcdbbaaa90a4&X-Amz-SignedHeaders=host&x-id=GetObject)
