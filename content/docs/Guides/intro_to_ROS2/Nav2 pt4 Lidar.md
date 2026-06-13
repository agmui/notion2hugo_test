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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XMTVMPT%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDL1DdhKolxRCO9RiaIcgJHnsLdlZFRFite%2FNXpMyE%2BtAIgXpGDyIc8rBH2xog2kMgF06%2F7wPZRug1RdtKTSnUhg70q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLHeTUlb29jcst7W9CrcAzXv4JQCbvfCl7ankM8%2FIqlbBZHhTD4sRVzlQUzCcTe4i81wFa%2BVP1vYnMewAeMp7NzMz5aTp1SOvVSaCuXPLuz%2BDTvIPcBrbTcRlZGYYhNwIsNYFaRVvjX6%2FHin67AXFFhPkDDK636%2FyfvD6RSeft9uUGqbQyrPNTJpsNOb%2BYbAjqr1ucT0tWuAuQ6Y5zGqnxuPLo9EUu5%2BIsY%2FUSvyZzCgt38E6UF%2Bbw7mW3e57CZ4ETnl8wsXYHBSzQ4%2FLIuRPeKAjey0NPNhxof%2BYHxO4RVE63fj9Tow6P4RvGYtyzmNc3C3AOJIaV%2BR9tnCgSXTUqTsTxkHIWvtr4KxfTFvV%2FsLNFl1jyQ0QRZxWFjuv8Sps0RTCySRg59rPs5YUDHTZYYD3wsvqBsajmd%2FSP0gL%2FjAtddNH9wYMFvdpSxjwx8tI7BnmMC%2F1k7Ijkb7kYT2OIiCsRxI10GRkh9ptrw5H9kTAGeloeWEQzugKxgEMmp2WoSqbg14ecqKzuiolAWHHKPyalnEaQQC8JxajHiVLJ9QlysvDMZiaLnZn61iKDuUAXrlXk%2BnFZhFW9P9DZJ%2BQbjRe8pqzKAwSLe9FNA6PoH%2BvDBi0ARcKDTj4JQ13q0OCw0WScfXJzhsGyXuMO35stEGOqUBUsPUHP5DRUVjZFtwqY72ZH4QaTC0icLAN7NuGLjOeGpV26nDdHnK1z0TwoVSjitrdBhhMUpq%2Fuz4FehO9Xz0ZxMlm2VYX%2FMu%2FSsBTXlHkJt1jA%2Fu0INZk%2FSye%2FdZ%2F%2F6I0gH5nDrHihp%2B%2BYzVDGTeOLUS6cX7W7iLCLvwhDZciOi6VWmmsCipfLtB6Zt2BFX0Czp0w8jFDv5utpKovnfBD8eBa%2Fyn&X-Amz-Signature=c3a557101b19a4beac598ba477823de18accb96dfd1024de3bc0a91cea33e36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=8eed5059079bf1e665af317c67ef31988746ac27f8970529de3cfccd5808172d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=23420681a218a2c0f62199123f73e660833c4f152545e80252175d52ed8c780a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=3b2121a876cfe00f8cc88b73d3f0d638ebdb054646a89b3697db5463bd16c906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=c8ab721e610c158bedcd6747facb49abeaa4379077d1a396302425606e183407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=9269360773b8439879f63324f5eeee0e01d45579100a23b377a7b1997ff31886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=ce662a7ea38fb460aaa39169ee77e408831c40819f66ea4ec7ea02506fa72652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=ecf9dd4c5b61da62199814d488ed35f34bce0164cd859ee3f56de0c88d3cae36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=a3a1031429bfbe674d6c83c8384b10f9e0406e96465ac8e25eefadb963364a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=4412d7e6a77f8c1c8d467dd265ab686500c0cb64453f95866664e837f7d901d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466375JEDLH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBq1rn8EnVztyuyvPvAtPsvvzu4xskt42uWUAV8W0pNnAiA%2BTZW3JuGFDRWj9lA6NFjGLK5zvT6ZjFEWh2Db3eiUHyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJButKMMrQ5epMrI%2FKtwDkms%2F5t0fU7nQkGrRdPKIKfbdVfrJ2lopTdDS1kqnYRadycKQshJo3ew17%2BH%2B2dABPL1TvekMIiav7DEW6wX%2FSVSlmC94oHvMfcDV9nbv%2FqNzQ4KKgD3BP1wU5YZqV%2Blo9mqNTUILQ72buhxbGf6rQPv3M%2FufjCUSv668nymlA1XER6u8wKznqlCwRgfQ2%2B%2FjyGlo2A0oqds8EnHVbJwoWyhgRxTZQZqN4m%2B6WGpEwpkpyF2SMGSfzrR4B4WG%2BEL0kDpVrEw9n9QptURBBv1j74ULMRsv9W1KMm42aKEIKX7bE9ymjMCUJysm0NcXu9cWnfPy7kDiS2Jt%2Fm6mAfF9NWOnC%2BSzLDQKL97%2FdqXa447iKxKWa5G5XvfVzAZXO8uWpSRfKnKAmGLrR5hLHIoDzq7qJSERcjmwO2sYMppNJUv5hN1lXnWa%2BUTWVTuyQzN1iovrv6Yh2DXMDfYPURZ7PbuFTvVigZbYQIUdYZuEPw8ZaYX08fwafqxJ9rRNnx40zvgqmHUz7HijebnHFLKCHw6RNRDTXdaqnQDVxyok7Oe%2FlaGbzzkB6r0wkR%2Fna5v8v38M5OAC7j0uRLELCYGn7JKDxedquPi91RiS0JIMJ%2Fzn4tZ7pCwIeDoGdbQwiPuy0QY6pgGxAOOg9G6aCKuEqeLWKnBYS0fZ3oaS3CNntgXuyNNB2qPufKgsDiKrv%2BC65om%2FyyAySPPnI3cBWeTds7p1lgoAYzlYoE3hTNBOethML0vx0GvCcwvsuRMQE%2BW8YBbRA913lnuXUKxNKVT4vkuu1FJ%2FAUJnrZ4v6ivb7uAJNU21J%2Bupwjxs%2Ft7I9dDg4lY2XalIpEySzEs7opDV3SPaBh1sbxbFcKKq&X-Amz-Signature=c8ab721e610c158bedcd6747facb49abeaa4379077d1a396302425606e183407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
