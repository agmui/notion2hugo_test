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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFRDUSB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCNQku4FFHAjGO2aIZN8ZafvYMU%2BpjNCXbtd3TZj%2F3n2wIgU5x5uNgnNXEQZDJv2cZx4EFD1Ax%2Bc1LvFBEIYvKrUFwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1vNCjyH5nIJbgbqyrcA4dsT1ECXqjTFlrs%2BjBcDa2O8DJpLBosZTOrtmKroBoJogc4h1LiKZTWJ6F%2B9Pq8cAXIKXGRr26fe1AxbZkFMDyvuuSQ8MAS49n3A0UP9%2B2S0n35nMNPMHQW1dVvyfGK%2BRr8DDwzikQkIR8miaPnBzBYT9K2EjaH5SIGBDUm3ASh17c7DuMqOKCe%2FD7uRmGlTxBwt%2BzF2toL1%2FVlfWI7xyDKr%2F4AAsT9im%2Bg2WlEgMn8pm%2BP7KdN9ab5I8w%2BKQ1sPNgWdgRiJ8Yv%2Bdb%2FZzNHNEhtJYUXyRDKwgdSX8ilh4x7K91hTVG%2FDQ5Lj111jLRp6M27IGpN6lOg1LGLpRPQMjsNKYgjLcCSlxKND0KfKQY6lZnTV1lhNw%2Bjjh%2BGvBN7Y4oNDbaa%2FWIdEE3rl5bpTpv4EvT86e9mHJ75%2Bihv3yh9hMXUGHnx9f6v5RtS5R%2FHsUItAppGf1M2oA39KhmVVPAXYoYriW5ljrEdZZCBK4BFKfMXfAYuGeq%2Blom8UfUzijycps1N7Z3URGaePkDspseBlgKioHVtWAr8gpeBBsJDiDwjVla6NDCZ7cL%2FR2bnzX%2FF%2BTrgv50NaJR1F%2BP3pzN8aLTSuo%2Ba2uJE6LvtAFPLRC%2Fya3qVyfO53gZYMOLu08QGOqUB39ZgBCAKMuiWNeGQR2iSB82Ef93B0nQMwmaLsHdHyUjs4F%2BG1ym7gzVAsk2iFk4LNMjQ2yre98XfHHni9QLZylZXjUiUh%2BIVU9zXtkRo%2Bb0BK9NXRTnT%2BaXyTuyPUX09QfUuY7owNz9cTcib6D1KYnBRy6qxMV3xAA1Qj%2B2TRNg%2FG1yn%2FigTdesm0IbMLk9ORUTNAZdClyNDaZVEUEcu0nTt1SxX&X-Amz-Signature=e466eca1b7ae9ea535931abecd716a8aa2c709100180208c2c89373636cb0ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=544282a91a8b6907f1152df758cda77cc6ba4313cfecb3cd91cbfcb2d829dfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=db83840dc2280cf28cdcdf482de5ab430dada403272926305e10ff54f3e7355f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=6eccc2e02f51e799f62392028b475fee5d09ba6dd2bda85927ebf4036158a64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=49c6b91d7382cc76dde1359c7e3230f3eb82b12785a6213dccebc8d288a1b929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=f7178b4635128bff07ac5119224dd4bfba4642ec8f6c8ef3c07467dff5d8de52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=3a61c403f7ba54dc0894fa4052816739dc57835316a63fe475a1a41247320a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=463634da0d37812f615d4020d39196e29107602ddb3cb872a8e4d2ec57ae71d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=b2b0b50c5a94b29a29cb6dda6c791d28a23a4607111437b8681f504058455396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=ae047e7efdcca35d072032ccb3b34bad980099f101aa62c8ad36b9be3a0b0ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOYOHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCVOoyKPU6mYFvZt8CGW5ZP5A2yNqC16kQWpLFMSBavcgIgYAM2oZPJzQhfMnoiieA5xFmWJxjw5%2F%2BuimKKA2tY2M8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0H12CoBWoWE0EZQyrcAx%2Fo84kRQzreAtMKaHoI%2BB2uAjUn7Dl2sEHVzrNL1qXzgoPqacqogSyoCw60anUCe7h58j1xz8A0Ur7kruJxGhEPKIS4gk7axi8zjC4%2Bt6T%2FR%2FTH9pcMh%2FbVtsvZz0994CqeRRwTQ04U6bmoM5p%2BzmK4O9wBEz9OKLPYwwmYYt21snBiMPe8rVoM1BTBocDCGLcMPYJvY%2BQuPZZ4jpWkXJTue5PHlzEIm0CKtg5t%2Bb5hHRysxiGwNWG1rI3g2SXvbjUDF0411ChaYs%2BuIV43oXgkgrYDSJ44AK7m%2BxO9A7T%2FCPDRMankIa1%2BQWYSi0MTVnWD%2BQNMg3%2B753FrBKnNDW%2FLoG%2F%2F1MYwO5ojutXOlVFMb74%2Fp%2FP6DX8f9jU1XXUuDGp2B%2Fesp6GlBbnmgEC3ucSJ1tJmwX4CBnbOG0fYPPTNd5ZhPl35v4nb%2F%2BMcxnF7LniY38x0r9VMAjuXt5Dn1hFJeLMT%2FU4C57sHuFTmke1pUj1U%2BAad1CbVKDxHtic2xWYt%2Fl0EBSW%2FIni%2FpsxYTqC7Ds%2Bgd0HK%2BGzimY5VsickkYSvK3oO4d3zISeofSXMamyJrSaBJzAMA1l9FAHliiAaiDf987P2A01d1MyG1JD2rpUpaf8KJpiA4DwpML7u08QGOqUBkOdfpHUAPRbwsctj%2Bc%2BVyouOnKyYfudgksGV4t%2Fm2%2ByBwylGwDejf7QSBCr8wUfYxstE5P2UNA5UukTOEnVBjIzNAGr1oHjRfmKnwIn1MIxFb8qBppQBpI5L%2Buz6Y4wuPhrwWfE56tEuAtLcdcZ6gfoFu8Ek8Kv8TuB0hpwxT8mdFWNrokhEyxkmjdT23goawPubKhEXQjl3qm6aOxSoGnjps%2BJJ&X-Amz-Signature=49c6b91d7382cc76dde1359c7e3230f3eb82b12785a6213dccebc8d288a1b929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
