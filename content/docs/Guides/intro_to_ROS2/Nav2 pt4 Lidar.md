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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINGIOHE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8XAatu5Ex19vdizNKmFQQW%2FVj9l9N06prL7VO%2Bc0dBAiAv7OTr33cp3NtOGMDmxBHYzdgjA0X0yknZS%2FxFRnMZ6yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqgycdsdYoByZaU1xKtwDc3LRiwFOQbbTxCYlCk4mDoENHUoYbBLj960OllJUSiJHf%2BNFzppQNoPBKQdSJMtUOHuIilz%2Foary9mPmusCe7V%2FBf00KkPgj8lzSZwmbYYc1AlEfIZG36wvBM64%2FmzATLxOT3IhkN0IZcc5b6Pio%2BGIXPE6J%2BsXbID0nnVtwFt2aV6aOzMLLBFjkugFaAnnB6KPO0VodbH7KCSKQkxsqOItmfK6XIykS351nTXMVTzZvbSjBYB5h3cGeRlrmEmNi1%2BuwpVsFG8rGI01aq3KvcyBWVlqsjbUJU21Bh6wh7%2FQKJ3PMXOnc8v4l3Z4bkMuxz2tP4rvoEadcjRAinl735IgrWAyn6nYV8awhjYCVuUzzzO6pkN763u06iJsFAn0K9b%2B2xQ43n7pzEUTwuxmVnqe6od3tj309DFHFirhy3%2F2fK23fRHdgvGWbjE7qB%2FMHJ5RaRyEzlHc5tMD006B5bsWAfhMZCDzJQ7bubkl%2BVjYuqsriLJ5%2BP8lGUUpZYfhES4njAfDUjIEQChoAYjTAgGfixZo%2BXl7rskDzTf2%2By%2F44KnBdVR9yTWb4N3BjK2vz1AmFvK67CMB8g4jNUyTT2I3jOSYXq7YtBShF4%2FtB7PDxpHI4EjuRGYFZVhYwp4nexAY6pgEPwgqFr%2FD3OMG2ylLZ88wqNP1dsm27CJFBpHMa%2FVPCMc0KtcTMAAOANHy5ZXF4qs%2BDVc3so%2BSIhOjqxz7g2VF2FzcrzXco45PcAdw5%2BMxVHLOTQjoGaLjm4UMtumfWfVPGQShECqZOFEy0xtT9fLRFr3ol73b%2FLYEM044ex5G5jlco8F9RVqliaWrWc9i%2FqveVV1IOND1HVv9b1iKBaDW960cY7MpV&X-Amz-Signature=884561ed3a889e4f42adce37d981a97bfff1ec4c67288cf31e32f417ba2f1720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=6c7e42f892162425d220674a8f101ff20ba541274a45851ebfa2e0407fe67c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=1129ee9dada7681f44fa60b3bdf18b6bbfa483c31cee5c103c6a5b5138867986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=7c6f27cb815e0f4d0056977118a5be75a92f92131a0a97b650cc9f82b1f28ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=49b7a0a22df9890f35b494ed4526002a117fe278fa896357dfbdfae0bef0102f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=209e808f9c912202d75fca30bb52bd0cbd170aba55831c62e84ed23bfab20e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=846e88dd9fd8554e58fed6c3df338ea653767ffc17daf0599089c74b3bd6f2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=5cb244651b0033a29c4d4426b198b0817c311023346b9437242968826f4853fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=2fdcbc9e8a8a2b1c25584bef4d77bedc008c38774c752203b2fe9639a29cb050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=34da0c5e8d23dec7a8b4452409f10dcf6a98f66774eab0f93e1a795d2566f59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2LONGI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhKyBQ855aJuTt%2FUsaHZw6Vn7su0JttEM7gSQ0L3vqKAiEA35LaNbznU4GM75mzzmjgqzhXrbucVufGo%2Fq7Mh1fuZ0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzb2HDYWLkSvtbkJSrcAyaPB194%2FZzUd4Y4HVwoR%2BqIiz%2BXKWxTgx8IqR5q46wJfQxJLYenjBr1mE6RJ%2BTwzvjAFbaZZIVkIcjAUbanE9I%2BMXeCFnQAcWCIozWTBAUnJsKuqcbCffJXJnhuDHvEWIV5x%2BmxYOa6rJjeSVAGOxYFj5jxaQjAb6wMXMl6s0i04Ddw6JSV7PmvPMtDt5eATuCZpU4AafN5l%2BtsgRFBTY616OdXuHZVYs8UmooR5E%2BTnHvvISR6crY3ETm3DN6oW5K%2F%2BSBv9bH0oJKp907lA0SkzcWwGfGLAkb%2FL03o6MFFJVP2qdLHvcha8ErdHlmipArcEskGAXBaPP1hqT7uvUR8ZZWAGZSwF1op77QCWOkFef7MZJ0g2iWo4NUfwK9af5xPAhioiNtAWdtfkvr5g0sAg%2BSnAeWCnG5TPlv1S8qYvz4apcrJ75NFgt%2B7AEjmRb3lsvFECxIlYpTbvC1orK5FiVM6qQFQX4woSykdBMng0g1qKlIECbSdU9H8s77uwzC3dilWbcgEX8x5RVJxHDlh6qJ3tIc7w06J3SJeZp9JHMAADSkWGyr2Yt6gshZhsObBNofTC2Jhw66g6U%2BWRMb3V%2BITV62hL5SZxEZbLB4gMOggjAy53AxIjKl0MJSF3sQGOqUB9WExGddFdUDOwJcKP0wxiL7pH0wK69xfoYKEGNCUt9TnBaIhDmEWiKMqKusJ1%2FfSjR%2B2ulzqwIxn58SBe4rPixJc72V%2BcJxG5H8SJ7K8lPagwcXzBejo04izg852JDh9WrP0kLILH7ZtvQMV0uzxmrQsEMTRDvfzErgO3Lc3gjVAOE7c5HajBxCbA%2FHZVzBtr9E1%2BZcLV66MwBP%2FoSAdR7AXHdcY&X-Amz-Signature=49b7a0a22df9890f35b494ed4526002a117fe278fa896357dfbdfae0bef0102f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
