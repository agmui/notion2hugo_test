---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

</details>



TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRJZYZN%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwtG8Fi5uNOkDwHRZCJ99D3woNx0VMTpZNFw%2F0XXG%2FLAiEAhCJc8vXUsryusq7bt%2BAIVDygHBCbUye5jsF9ekcl%2FLQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDITzjxfvyVuHhsfilircAyaGYDSV1DUA6kSGnX2SV61MAmulVHcUDMX9OMxktBdxTR9Yx9%2FDmS%2BQcba2VPd%2FfI4j1w5bnHIU0R56%2FcUMkXIXx27Wbh01%2FmB599aYeP4hWLqdJ%2B3P3hju6P14MkcmivYeDnAink%2FqxnTAaMUuOIzuOJA%2BcGfjv65750mY1wUhaPsUBooG1oVEb50L4LtRSG7ZgLCQUdzmNIJ12Z3gi3u8fY%2Fwpvlzdo0ew7tDJ8ETbprgLwsMpgq6lQIUZa7mUxsVyP%2BLtTZK9PT05Y6zXyWv%2FX%2BrTs%2B%2FxNZc%2Bzt26eQfV7OcAlyC60e5r98p9Ju%2BO0NLcKJ2068RIrlTCjIJWfj9iAjw7CdHgKcaqs0bEGPFD1sich3RE47rwI4t77wWWz9zZ9%2By1bNhdhaAg7yIqYoPdk9sjkxDpqvCfeYMbYo%2FHZmZCVP%2Bxj9EvaK7O7JhlbZZm17r7N0Dzzw3VwkuC7S9EmFdlaxLOxP09oIopcY4mWj9TL%2FMGytxdzrCAU8A05i1jfsL1WVX%2F9%2FsU6ynesero8tI2uOP5lEH5R4gxXAzEUkHNyPZCPLo53XXliS5B28hlQG6SH%2BWIminqraMO9q0g4IeiILh%2FPhFiU33E6jW8R%2FtbEFeAocBifKbMPW0ztAGOqUBsl2IAfyLfW0da%2Boqz1t8kXXr4nvKko0MfaGzwfM4EXLkt3TqV2PJ3dzaZst0ikMmBg8Ba8%2FGQcfSumB0uVrIZa6k%2F08oFcYuxUWDtkg1S9z5tmQCaB3vOE4YEcLissG9nMfFB7f9DZlKSxrkQ%2BoK0RSNehG0JjmOPbLYOE9jnMszYSpNZAnFhrFk%2BzrjfQAaVkADYMtE7AUYuCQq0J4EY1AKVuWw&X-Amz-Signature=d96a5032c0048c430c47d89825edd92fd519a5a60240d536bbd323dc62276523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=4b129ec214e31cc05e5e723d3f1aafe554b3c99ef78037ab00ddefe3c53badce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=ea3505e4ef9657d698bb4c2fc17f2b0acb1798542cd111982692ad38904e2f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=77fba4a9697de5bf42cd3ffb83867f8fe1a26cc13a618c686023be0ea74b67d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=31f7709aafb86a284285c3ef36daf96155d55b405d7f9651649072903f5ca6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=f8e07b3c4028191e4b6db926f890626d945dee410ba0b9b43cd26d0496ef257d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=2a05cf642f1430d0df8ee0b16b277565eb1e624e9fa8a6aab46de7ffbbb328dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=9e698d2fa00e5a2e7f18b2d205cd4078964bc8d20fb674e3a800d7666a929625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=8a59264597fb22f7ad03246d4737fbd10f4edb3d7eb99b1c9ffb4502c9d3facc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
```bash
ls /dev/ttyUSB*
```

</details>



{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=d3265aefbd7bd2eeb3212dff053f9b9b389f280053c07d3b05e5a6aecd299ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULPTX52%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gH93OIwA29mUcFZlOIEbZ6aLmwmaJH6A8SNxogNZFgIhAIzicleHILyXo6kQloe6np99Bgko5gqjXJqTX1t0g0u9Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxQk5IXeoRh60IOTMoq3AMDw5efeEP%2BGPjrNX7Ipc8rAUqQuNBEMJFFGimf8S%2FtiLpO%2FdBRtTg6l%2BCaw21IbW8jI1sUXMDNQxRWICI%2Fkj2KVWYBC7Fkl8YrISld1v0TQ%2BK8SMhNDOF0QlkFbEU9gG8GwVOvtH1vg2yekQb1MK29yiG2P2NsIrJuuGypfLpCXG4w9%2BHzA%2FuC7Kl94IfD4boYnN%2F9A9KwCVhm%2B2Qep85ItxRf1CYYAmz2bqDbZZafl4EJvcfq0iAnat9%2F4FZwaNcb4RQs0H7JYt1ajdilezvuBybH3K7vS%2BJ0fO9IVYTL7zsBvN%2FU%2FApJiCZgBjWtwEYg5tEzqZLF%2BDy1U0UiRLGHM2JuuwZ5Eud%2BlYU7PW%2FIomVwqcWS1AGzQWYunyQ7FV2DRwJ0rI5mOHtSZJZwzHiaogLie9tAKr89TJo1WSI3ii%2BXfNSnJle05FQfz5fl%2FE6UDscnvNPTrxeG%2BesUmpYv0Tch1UJZcokp9FtAB2mGna7eTd%2Bq52yqHTwUxo1bKK0ZPVFYEZTBvDjC6hyzpfrSa%2BHiy3vhVUGbD8kaSLz3dPDlDFCtEDUGIAEepoZi6ERiJRtWfb7f2vxaVFhxSqMrQowkd0TGN18XaRITL8G3fOvedqne4XVh7ZnpWTDqtM7QBjqkATIgs1pGG0s6nWtTU9QTS4KiRf2OgUUOipuSaYsMYgkS5HrGDRgGER%2BfvxmOSqKLVs7Ex4Nxmgs2eRvG6X%2F6gtUkkWQxsbXF3vXINpa6EoYG0uH7476z8kUBvsRI%2FH3CJdTmCHWpCNFtjF%2BuuvPBhQwHIQxv85G3R9FiW%2FUVb2i8AtAKsW8WCs27aH4HH%2BU%2BsyE5OF0I43kSfG8VhgYxILaT%2B3yN&X-Amz-Signature=89cd523302261458117f65379471765eded3e48606bec1b88879a64f80d57d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
