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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SMKWTI%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCdJlBqw313xPVkmRfLxuKGtMHQ3T6Heed%2FFEFmlS8bwIhAKy8Wug2Yh3qevpQH%2B1k%2FE9diKLBu2fotrTbX1JylNjEKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFJjDCE1w4jcW6x38q3AOI8SvXXW%2Bcdgtn%2F2ia7CfsRhsA8gt1szjEKNEvFwjd0eKLIsQ2u3EibpfTzgXpclZUu7mcm28Jw57vXKA%2FW48cE0a6NKn17lo9gwuhKlZflRlqp%2F8gvAZQmshxTddghOzxBC9bHXhvkduRuU1fgCnoiFwCRdz566VZ2rbp%2BSbk8C2MnnmlyQFB6XOdKi1ziI3wc7NjMio4g3OEpXVsWk%2BAi8zBKCYEQeVHfDpOukVgSzZuSa7S38FnGEsro1%2FkZU7s27hLndPXVw37KgvHwkl%2FOmQlXs3NzLyQC8BxZ4vA8ZW%2FYut588basK1%2FJnBDL9GxxDKE%2Bu%2Bi0jZXwAiDjIQG%2BgJbxOBtqZ0hQu4OM9thGganhH3JQclbkCwvOs5S8g4reRDDGsb7SzjlX1pQgaSlMmAJ1hP787b%2BVObXdCd5I6QN3loFS8sYMHy4%2FKMouXqTYcADSCJBoo1E2Lme1la%2BmSrRnPZtsCuCf92Pomvtr%2F55vZNyfNgE7yUFkiajxtIy%2BBwOXkhSnx%2BfZOr6ikYOVEKvJildz2UFbX6hTwJjlCoU21SoDf7qAFWRw78I%2By8GifQmpWNOMDgE%2FCtLTjTSf0NbLA8CAcRiiS0nRCpTElFSLGWReJVsslsOizCbns7FBjqkAeIRZjeKJaWP2TV9eytK7ZHtTLPw0P%2FcuJua36ETb8f91%2F9r6B1E7x0dqiPssA6Cp1Rh2XUws5P6j9WaJyS5%2F%2FgLjlgrOA4BEsqAZhGhKjS9mKJNWBDtqujooHDrTqIjqVDn2wS1ov46ChaAIIf53f%2FOcLNRtVMPn01uqq6uWk845V9cCilP91YbQpSrU8caUcevURIDKdO8IrO9NFdOqpQoEn2f&X-Amz-Signature=c626a541f740fce6502d943f908528258aeac0c7a47c90fae5bc58a2da938f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=2aa19e4def5eafe70ec93909d2364db2c9881064b535e8b27b9ca804ef919928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=5e6d416a038a50286999c621fadf5aa1c41a40abfa7526574d935d57eea6c750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=b26302445f00b37b27e88fb2f1e79198b42ea14b39d4266e0072bb21e5899f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=1450f5a87e9307c9e2b4cd1aa92a38979b6676c084f6261dd48c75d393275132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=a8ebda1f7c3df06fa24054f3ba64079932d240b6e257bbbe29135d0da327712c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=cd7eacc3aa5eaffc2f858293a49c7e4f3d311a51602038c469d455c646314138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=aa1d86ae555f5bc654623fd1f4c3464074b983ed153108eaf659a12c2c64b089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=39fed5fa1f8d5889fe35357fdf83066eed551e495ddc40c299370c57ca1a4d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=384d4b3ab1dcd7e02bddbe36ec05b9cb103c695294744aa2fd7d32c3ae978598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNAOUB5%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BAgTMFd2CnP8D3ALwqIcBdBS%2B8rZkVp9xJ%2Be6DMlwFAiEAzxgSwinwwgdqH4JmDP%2FpgMh439TxTgiORTeqop%2FuY2oqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1izDc9n%2Bh38rjxpSrcAzTxoZf0Zgdp%2Bh%2FLQFDrMu4mp4nepew3T2pGbMnJesHZ9V2T51no1u0wXxhUnVvZh5DrZi8ajYR3ylanfENPBSPYrDAN9c6stqJFydSAjHAAUelCYpR1FA7SNL5DoDLeBWFPfyjFCKeg6%2FodW7VSSfQQ7H3pZB0hv3kw1PHnCcnoyhNgz3O9TmLUUE8soKJ4q%2FDAu4Bk%2FDeCd5zdVpJjH0CCKyqz%2FDzE4IoHvcoEcNISM9KtNKFnBTkJVa7Jfe%2FtGTmSwmAIx6MDgq%2B9XXTkppIq8u98rTL%2BKOm4QqHBDiWvSwvF5L0VSw586HZuzHe7dOKrn3uK0dqBu1CrlgBfOhtcmMUVSvhtlzQdhldNr6ZntpaQ2HxTLuq4VQDxbSGtEmqswj%2F89BFdoWoKG7QqeXVs%2BtoN0PUnAt9sIhDSPMTXA4YQsQF9S7uYBAx4mI0yRZNa9KKLaIEdVRESjtIMoxE2PiTL8rTAu9MbQ1frlvn0woVxsdwus6YgnAgUeUMdt3tM6FySD4kMFeYmNzk7oQB5fJ5oRm0NBLP8KGS0vxGFS6Rdok0Rq%2FeXu9PKBU7APYYX1aHqX1NOgrLSyKhcUogmk6f4gt4JZz9PA3M65GNEtmNYmhDvgAW8i2ytMI6ezsUGOqUB1NfYFwQzBWq68q0cxpSZXlnuFyHIN%2Bfw5P3KskWD2MjM8niSlcQsHnNP8cnWV7tlNSwD5LEB37ZQhTAMjMi9WqDfhQlCtv5K7Oow6XYPg6klhAvLKpxwjs1BnhODV6p3StA0bv%2BEfM8wqCtjeo9Jny9KacWxIa4lh5PqU4ko98YV6Nx%2Fb6W2obGkwSZQC4oRU3Sv1zuV7RIFJGIofsvnTGHeKt9R&X-Amz-Signature=1450f5a87e9307c9e2b4cd1aa92a38979b6676c084f6261dd48c75d393275132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
