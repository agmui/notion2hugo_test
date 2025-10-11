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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOHUPSKU%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDtm2vgXwxBx2IXwVvSxRsqk9mb4zbCNjqD5xf4TQRkQAiEAojXuiXpmFzsOV%2FAP9Gw9%2BxZMPogk7XXYHDphGYu80JUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzvHH1yr8dM1dcJxCrcA7ndpSCXXFzOtPVFgRDaWjjFIR5jmA7oPykZKY1mPcTN%2BYdehWEbumWHzcB3wYNfV1ti6rsJNQZswS9QkJPgvTrAcfjOrOUFccHz7UZ88%2FUSALVKLBnnUwExFiEk%2FqxWhzZI4YL1i%2Bj0geXtl2Kn%2F6JclHvhVjgqP9dLK7QbuKSufvxqKQ8jhIsQUi5795Ehb8tMgswHTDTMBCdGkuXfVYIst%2FVvIKPOeWepKo3aflsynMydhGiOBLvD4n5PPAEtvIF5BwqA7E9FFZTQKwWvo9%2F1jGej%2FbdydrD5%2FKTkXVGofkE1Jho8uAi7wXm8zsry803%2BNWDSmAlMlK4Z8NIJtvin103Ha9YwD8hrxINF6RVuWHtpJtbDJ5i1U5gEcEac2AvqbqRqwB72570K2UeuXNiWLwE%2BEATbi7JJzDZSbdyDbZB1Dn%2Ba3oyiVBUK%2Bh2LHtDW8hrdAn%2FUMW2Qo8KULlhQCUG6bd2X87dizad7yQ6jx2eieggJntRfZ%2BLPmlSEEdSCadjvSYjqeV%2FAGf6pamxYLGcZewyp3HyqkTk3FBtI1hUp%2BfJLRlcFmVZCmyT%2FIV%2Bk%2FustzGjRSpI5eFTh7QxhcQh1z4RN04TnH15XTlMXYekF%2BcsosvkwkYU0MOLXpscGOqUB4DlOVCOUOpBOKFQgYOSqM9AwpYm3mmZTrbNdZm4qnN9J7zm%2F5XdD9bINY8wafg05oe0Hs16YBBtcmnOqCyAeLEzGUV%2BiRoREdqHW8IDrh%2BNNbum%2Fnkm0P%2BYSOGos%2Fqpls8Ou6HppXZ%2FtHEVjXhDOJgKjAF03IQoD%2BxaejG2%2FR%2FquZCTlY515Bg7h5Wgqm5oWKtPj%2FoSy2PJJ7oiZvf6Ob20A4JMZ&X-Amz-Signature=e91d05a699056370b8852f51aafca548ce4dded1d75eaa3e53bbfc906f464987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=18babb73ff419d6796e399dbea4ce648f9e4ef97db3cc5d9b13c6f19228cc01e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=8ee511268891411380a994ec3f543c2e14c40e301d8259736eb37258593dc295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=56a0c5dad8d5fecf89a802c6a05a942814d5067aaf61343fbc40146339ed4a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=803733340f0763b8c7512beadf8f58d90576951d01228716ede6c847854be613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=7303f667f5450bb9c931e20d291765e748397dfff7d755b506e9bc7cc0ff5e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=d13334a1d118668d0caf0e53551789201c254f76c949f56425bfc4b0326c0e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=a4a49b2dfae3c581473417cebe7c3a11c5eb6ace582d5fb4a16326cf01a1e25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=4ffb0b2329b545687de31bf9f2235cceb7d95ead0fe83219dbec049fa2e9e53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=83b12c1291477f4bccbc5885e5245ddc9429724901fa045b22cae26cab42162e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6R73X7%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBRFFJsg5VghFQHahIZ%2BN1ygUon3fq8MBwWLPDkMrHg%2FAiEAp2Ojca%2FgpVZm3A53WuIPv99nrXdSc989jDu6%2FLe%2FJn4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOpZG2PeCS8WlHszSrcAzR3L1vQAjqVupwsiTKQdP7ciDPuTEtBW2pEZ6GNtGStpuQvIn2iTARcXTKDcDMXtBbpLoARztq8qAOa%2B6wJfeD6VlV6N8SgML4QydBVPVNSzL0IV%2Fn4uBXjIz9YxKE99UlCWJnMqqMivsLM7Z8NLOfpjE%2Bz4WiZTpT0mgfoIO2aNfUohqKQUPl2tGYGCEkM3BLs%2B8U2fO8hW1RX6bADDKoAk4fXQ%2BdIQGSkbSrjUlZ%2F%2FDQd1PSV5hwwHUUfnbNCoF8MDkAoO28t8TidZuib5pdY5T5IJ7aUgeWhqbgYiAv8mLTbbpg3ft2yd6IRbcDlBkyxDBH0v5IMfb%2BmDQDWR0cCEI9RsoG%2FH0uuzHYacBO7RMb2tTsXjqToae7Pg4T8UfVyR%2FjlAXaxT36wUtj00uHgrv0RhRnu9L3X1vrqRzkt7jIpy5JUqWEcdL9IWyk3Js7jHqixExzY%2BcmtwnY%2FnlOC7gnEgcEXjCAqXdi7bMSqquRo5mq46RKAAUPhT5dBnBUOFCTjc5IzqlzxAtYj6T5KY4ee7ih9No7jaQCh%2BNdoapdBAA7OPuM5LsuGNtNcLp5QQNAtpAe8Eijx23nhRxOa2SrOYJhfHS1xoWUTLj3v3gJh85qvjqz0jPqQMNPYpscGOqUBKz8Ps79AkVSj5Sj5rMfheDBcZWOYWTwySyABxsFE9oR3noWAcK2AJc5eZb2ESuL6nNdsC4%2F2%2BZ0R9aBHzadbJwkH1uEwrb5gWJ2dZj71AreiUcOCKtBrjhVENFPtav6zFZdBRFVdYtYFuieQ3dRoANPC5zJT6xwLvI6U67W%2BpIlXZowE0bQdLHwmhEu7GLv%2FS7ur68Qm64P8czVtoKWQvseQirPK&X-Amz-Signature=803733340f0763b8c7512beadf8f58d90576951d01228716ede6c847854be613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
