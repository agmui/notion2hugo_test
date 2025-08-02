---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OLDHLXY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPV4aH3bV4x0yl4NoCkKgZsqBJBeTjfP1F27n23j2CZAiBQWNMloNxN%2BF2VPKmbPL3ojVAPXmSEK6dlM49AIWgqkCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMo4MPakvYBqkq4aVKKtwD2TZ90aV8G%2Fy8peJcPCc591wpuV2vpfGac71%2BIvLl7uhcvHtT9iuKqmUF4IFfDFLBf2jXdJ2vupxCkxQKDV5CpowdK6VoyrRzr9h1ylVnkBauESapnvvUoJUI3qksX30LV6S9nw%2FN1v9Btj2Wl0isTcOJ4pI9Grpo%2FOAP9NYCgyzBX3KSFC8j1Bl4u7f%2Byb%2BS2Cmh2DhAxiuDcEcR04Ov3jbGh4vJDTGz3l3S%2BULYDMqaC44kRnbkBe8XlCo2421agJ3GGYx64V%2BXANJdF6yRR7yu5skiU8MZbhIsrc3XynT9m0jnEwPZZaqtAnVbp5OwFuEG%2FKYyluzcbSz%2FQD5MarOdf68MxHi46UrVbP18cuIXkNgO2KK4kBS%2FsH7xF2aeSLhSi2ASACaWL8Sk9OGgMtTGd1lfY%2BdbSHPNEF8xkT5OD30PLgf%2FpIaVKK8OFzGrczrAb0ILmY3icR9BHPVXWjxzfV23dG4zSL9K2jXcSa8D1YuIUx4Pk0x0cFFKqbp04qC2HLs2XfK6rsdUDlRB9%2BWDH2%2BIsLDU5sENyaa6WwXCfnm4vO50Xbqy7WaP%2FTpXs7ceGStvDOeeyHbaR6fl%2FQ6cYeUPb%2BPAPT2g1icIwoOxpXrdXPYstdhzHRowvI%2B4xAY6pgHUjDJ6uArHqTWQhH4z6CUX3BKMDHBxsab8mNRbEpQfLvDg5kIdkAGavohbIwDktHMiLrKNEldGSXukVFysLPmnrFzqJ%2B4rLBtjwTqYQdqf4M887gEtk7bCx5Tt%2FT1ypqFIbTFjQI9YcggQT5go%2BpGTBFNC%2FvFgbhxPPyOyEhhv%2F8pERO1wDxLEh9K2MJvjQ%2FcaWLQP2Jt4jACUKY0%2FRAq0gnUiP7oV&X-Amz-Signature=f49fbdf97537bc0c5a3cdd5a9eb65a74cf11ccc38d7a6712feedfae999930d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=aaaaa287eef2d33256c2a6a0c10793c9e7b0f63758e52b5f6dd443f4e9ad94a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=4961c79e322b34983221edc072cac9c34cd7f55cafa803a46d259c79891181d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=fdeb86701d745e1b89074f62275cbd740698fa0da83a72c973cc4dcea3b54152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=edf699df36d8757f99556020368ff19a2d0be4b76b414c983c188648403e4dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=a12da26785ca761dbb592c44fa03fb39d705f6c14f1a32460d86bca16a7f4155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=1fafb6a2f51a613460c4509e87c8935cea2d811c0655ef52a850713854c472df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=567b960756fad818d37fa3aee001d865a902d31c6d2d32385dbf6e071ab54442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=66cf022a1f55e92683558fc583c4d0ffb2374dbdc693385b7ba99d362e735d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=e9f8256fc7904e978788516ac5c2eca6f2e063344c0861c16360bc2a918bf840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQFXZUM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvE%2BrxCXjP689MeAyDCckQHeSp7HRXn7H3KuZCLfG7XwIgTYae4t2b4eX3gl%2FNAffPO8YTF67SUILbci5xo0M1DhEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCnDiMJrk%2Bxf7j%2F6dircA0IE3wmhE6Xj4GBHRVgSBPQ769jAWNgUE5MyQME7zvVgDYj9kWutSislPsAMM5iHGfKB1kN8bGPstwWjKUePCKXlxIPzE%2FP6FQX%2FXbGMNYZmEXgKdKwYT7%2Bh0IaAELqYoYtShOuPF7ED1p1V9zY8nZ0adxwSQ3xU7F1FKusGHDfbeuqdFkQdca%2FtPC1DcjdClfY4mczg0ZIjxzR1fUDYSC47qYb74jF6GSw3TrckD0aG9U1MmQaO2x40C4Sfg7DFo7uUwNraIOrtF4KtcVZKBjtvl1DL6rnW1Wm3hsRebouoywWep0f1bSH3hJyKyz2WgTjSGitWqI%2B%2B0cwzrxPJuTl%2F69k%2FbP38aZ1RCQjui%2FKsPvr3%2FQVAHor%2Fg9adCAMEKMHpNa7VqsqZbzhjUZWDM5RvbEpQmlYTCwzzoQrw72Bbgqgt03cUfNvxi5jnQUlpN8g6tK3RcRhwmXqIbIYWE3K7K0%2Fb3QEHAoG3RC0JFwGTsDmQIKX0p7Q4XmmxPJVfBOnetNaY50%2Bz7DMZIwd%2BvTHXb4lSAb1Veqm5M3hLwfzEUrS4W54n4mNPC6AJCCewwZs8Q03yl5OCtTQxKYeR4qU7zE0MHU5xgr9eMlTbpC63q59up0EbCseHQDGsMNmLuMQGOqUBcMerdu1ORSwplD08YLFLTRefoATyh52y1G7AY%2FuU%2FOsjrVDTv2NZXJnW50D0RRikxn1STXr8DDJexJnMcySzNnNIVomRFkWL3gkFLIpkDe5xhjgYxFULDGiJBxdMQLCtMADXyeszyF0svAm2rsOhZlI2zfTygXZdg40ZjDTBkRadFyb5jT9RiEuehcHLkP0WQIQQN3DcOA2S3HYkeq2tastOO1WB&X-Amz-Signature=edf699df36d8757f99556020368ff19a2d0be4b76b414c983c188648403e4dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
