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
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULQLXSC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVkBK0iEFPDYnr8bix6qU0cdra6qRoP3jX3oXL90sUBQIgFCd1kIBf5e4wYYx8pnLyIFfG0afR4oPmqaQSZhkXvI8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnDja0Ie3A3BfUCDSrcAwUgdy8Pu53G6WKTqBRgH%2BC7SDxHeAGGH%2FL2YsW569QPfr3nOGW2Wc7%2BS3Zjai2l3C9CpLq0ytzsE2%2B%2BJp%2BAWoNFLDRox2DjROstL%2FVtjeufy4IPUbnDyo9KMXTkS1LAvFhcLZQJmrPdVuXzxRXPP%2FVOsIY1vqwWsu%2BioaXyZ7hWWwtxxAGNzdcOLMOiPANAltidIOOW7vFvr3nhgcRTyP9N4xGWZ2fijzMtGsFV0VQFjPXpZvK%2FZwXFkveuNE%2BoptH9uFGK6%2Fefzg7WJjZwGnSGxY1PUpmiakr8q9ZNCJrJFurz9WcnSijUELaKIzN%2Bby2%2Fl3LfELo7K4xBtzNX%2F%2B%2FEmmiub%2F0C5ggt5HSZtiq4kE0sMqZc0UsEN9J5Uke7uc0%2BoN3qvtgnMZghEXYlfpXMUpyaIhMk3QZjEpFG2t4L61IgqMgxtZuJ73kizsGdiEyB0uPLyBLJ9K8y059jpaxVMxITVMBW2GHXZuD9K5zVQbdsffUrcGFvz5xAy8ojCy8cvmQL74TBT%2BhKIRCowsDYREUKDPX7pB9IvBBOkZyeyUEUAuPDQav38WzjHZ8b3X4II2IQk1yzlvUay5JpTj4h%2BSum1fGj%2BSFFx0JDDntAT6w6CgIpvy9x2xAjMJWW48QGOqUBOugVklje2DkoHxebxS180sm0XhaFf5l45cB8nJaWPRQMpY9%2BwfvQjdI9zLS4%2Fi3wcTOJSjL%2Bxy0fKUtx5nEa57louYNfGMCL5cPhptddqBf%2FmvAJyPIrlGD3mHJxrYFg%2F3moxpWLlR4kh8vig%2BdQjzlA66djD6d8S5zeMJUtpfA3HU9RjX%2B0ICvALGoTb7zEAsSWt%2FYX6UwT9DVRp8osN%2Fz0EqR9&X-Amz-Signature=9b367c28fdd7089b5852c06a7c445a351a8fe68fc0b06541c0d44ac0f5e17a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=c3c8c2076af06ad2d9c871a393e04646f7ba1836d759385c7e8f444482d8c35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=5fbeccb1639aeba621e0b17c73d738538e509a5fb707f448b52378a297e8bb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=49be5a4303ee468aa187ae8bec62cae6ca42ee1314dfdcf300fbb0f155fe2189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=24eca84bc4556ed56916f7e19d548b5f73bffc39e1c5f82c4bda47d6657b7ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=73d67b3cff58df0d8d6caeca391dad006c30ef429789ea235a7d60326eb85b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=c4c5d297f222b8e19b45b23dd47c246a07d59c90ca78a456bad8e44e45693478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=b559dea0175e2deb30d89446e61cf1f4a3d675fbac3aca8535b6bf87636c2208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=d0b9dc4cec5e40ac568325581f9efef3c60f26f521a6934dbe78d0b01a1cf183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

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
      <summary>Finding Lidar USB port:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=1f2b491cd3b85b70ab85788b481b1151ddcf85a31f26c1b1132da7dffe222082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3MRPOEL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0uq3JbyQCB%2FOdG2zmix8KOi5gqXzV2tmxECPe8MLoAgIhAOcMH3NAhFf3%2F%2FYXEJvfu0KunGjJMec8l%2FFlRnsozk2UKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB6eADCColWMu5dEQq3ANWDEXzJ0Wm9ooqy%2FwQgSwkCK37VfBaFId%2FVyiWx7lKsFp6O%2Fa2BvAvAc10pYJaetwXuDNLU%2FRYlVXHPk4PEj1XZ99rfy03mhv6mACNycwQIKhFhO71bWBuNdwvwTvoAu9uw3jz8y3ELmCEPaWrAG1YeTxAs9vGzI4rKTEoyGSmpn%2BllJ8AOik%2FHH0DCba%2B0y6%2BaMBTBeX3ef%2FN3Bly2OTz5I5qywo3sACqJhDhII%2BnU1LUNjUbsaEicVcPbI4mYxU7fxbCr7ixH1hqIVWHeVJwSay2nJyuq6WB7biJ%2F5sTFnw9CJsb9k0aaDTkNr1pp%2B3KJQagssdqfI7XD5cOtCfoQfPUQ2%2Bd%2FweU0Fqcpyj5306LJroe5X1rPuO8h7AcaT1Bvpak004eLaCQrZOcUg1BDiw9p%2BVKIZhOfdgXvKT%2B16535L1NRfgPJerLCAUpvuTebO82E1kSbQzG0aGNR3HWMg472wFA7y9uKN0FIMUKGtoukJtWOORA5FxfQyh%2F4d29IaV8bwkjegyW4qzpJA5HgYC5phFtKEwe087Z1%2FrNAdNlrDwMDSBhUbOzZeFyfVh%2BvQyqASiLtxo%2FNfhisiPMMMFDsxfZuykU7xaeYzI8C0tUysadIqOmOwMjajD0lePEBjqkASLX2lpGH23p739vvVaKi5J9rb%2BCEua8xVZzTIZnm0pTsMmhZMglO87lvXMdp8FDs5OYGs1261b0Zee%2B5k7Xnd46oaGBlrlVDFvCBPeKjrXmna5beP8gOIAf2MY6s8Kna6yAkJjRoyYSG9MZj0KhuiPxqP%2Bw1WTYasqdgnRinDokDDOlO1yqZK%2FWG9lLaHakJcdT7kkCFQgoRAvpw%2FUNlQ%2BAiLTI&X-Amz-Signature=24eca84bc4556ed56916f7e19d548b5f73bffc39e1c5f82c4bda47d6657b7ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

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
