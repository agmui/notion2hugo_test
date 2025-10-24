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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFFCJDF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNznUqIZ%2B3WkfdQaFZrOs2JCIRmDeX5TKk5dfVRbhU4AiAMNTdv7Mlpibr2J%2BD%2B2FsL9xIg02GmaGRCyT4MfX8seSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMnIx5uEqKE5X%2BhUTvKtwDOcSZkDhhiqh3QsFJpSF1NdNzLveWKEPTkE3JTsSmHS4M5WlYkeS2tDqE%2BIkIS2nFLHjvfn8uF0ybwkyK6Fx3jBWqdI0bHFDV1ZEjFcTRBAu7ix20%2FhmE7dY%2BnAm%2FaoliK%2FG5JMMvb7EPYBbt831fCllfLqahBnSjRXxd%2Bcm4ZcGM%2BvWk4ejFeCgx1hE0dd6RDOGko02AqJPsvQYbKHyjsCKH2F6BAG441fdJaBprdLBO%2FW1ZjEjuxuhE9rk023dkc8Kt39fdlq21WSE5MUVRgEJqYW0TO3HDFOvPmrFzRWFu8bnu2k30dHRTsP8X7NB9tRXdNDwiKpMDhZmRCurMpL%2F7PXOvzkSBIboMvbm%2BKvXGT42%2F6AZuyaT0act%2FzYjDhLykKH604W1v0uioAbsu9yYxEJqmZCOLTDaNw4DbDfuR6ERbF8DduV40cFHte4%2FaWT5mcAQ5K4SjgD2YomKrMiTjn620w3fleI2xCdHMkfVuKGqWflGbPkC3ERkplMCadnEbly6kpASKI8O6UXXeL7dvqAOUS1qHBvawOBUNDF88dURZYCdh5jurrns4JIZUzCkNEMiABDW4cV2iy6ON4ENFkRkp0okLUalUp0AQj0e42xqGY4%2BxeFT7CIcwwZ%2FrxwY6pgFv%2Bo0%2Fk%2FsMm45k3PnnUEeWzjHEkVhQHkfsO7VFi31KwBRlp%2BF3uqTj%2B6nTZdk04lPd%2FKCl1reVGd%2Bjo5jAyRzDtMMCrIjaGMi80h0jrW0hLeqf%2BrHYMu3MCWx6tOKcGDuG%2F71Wo0PST1%2BRPizhJleFesoHtPRIOOv%2BSP74dsXq0MfzBzeBaevXV8zzIM9WQUC%2BzaYblp%2BFSY14CUAQ%2F%2B%2FhJGGGeZ%2FF&X-Amz-Signature=4a1da8df581798eca85d8b343356d4b779282983a48d0a4b8d30b8ba6835b940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=1910905862be57c2046634656dc39218b8fbd460a5b1ae5d6ff05ab744a03194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=c5750b76fca76782fcf4f886ca7b7cba6b33de576a2ceef5e6b81646768a3403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=c3e8850b63ce43e6a3528bddc2f563a8919a3f6ca48a24745fbb78c067fcc509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=3be3dad13d1ff59b907957a431009271e87e3c95d57d94e08e40a9019d42033c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=75d8184bc2c5b355a0b881c679e4512a68436c94b6088c64f6270ab6c49354ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=2e6b7cd4d33ea8cf845db9a0e98f6b8cb2b25263b1f827545d1b8ab66b63e205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=5ba1d50b0f6566c64befdd0850138b30b9728d8ba70038bfa6117e440b37a9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=d49189fb68966555da19e1440f434073e46f7277ef57d5d35247de898d7cca64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=32136cc313e32ffb42b759b14e3e57737a5df4ef89af46cb25ed70fb0b98796b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXO6OFSF%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlZo7eEbGRNrlpQrY06tlWPGjVdCqY5nEDtHYReCT1hAiEAhe%2FgnMfCrMBljjDT%2FneZ0VUzXJBewHYTZHf6rykqMQgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNQrGcqkDUAt0%2BQLyCrcA6Jt2ZGiapfj%2FYltXlweZ0M7fNXiKNYPWTXZpGu30fIzJeL3RGUpB3RdL3tUg%2FBqAinC3bK3lYH%2BEAUwlv1EmJ1ViVDT2LB3kw3ByzyguP7iRj0Oh0e8DTpiwS0gLWqQjyO9V34ApqJnEsZU1wnnibge35GS1OLgyS2PeUMIoZy9EJ7sTF5hpYbZ5zhjulXt5odA%2BoeNr0yI9oEqyyMH5jNlRq2ap6fNjReOeVeR%2BvzFsChfX9PZ9LF9Cw4Qi87Vb5WSxssO9iOIC8mDLJdtAuTTurvQ55%2Fp9e52MfiLUBB1LJAyP8X9RM5qEE0DqtahbiOwzE%2F8Ae0RsPmyzWOESkpDejafOU%2FEHxSGAFg6VXLhj6RWOLgJSq%2B28m8cdFMexVxvWPXD%2FN6kI1dDZkOPtbpQWtW49so0qDmDSph8DfSATRlEbgG3IEH79LAsMP1jNuWz9Ed9nxrqXb8RjRyDYxmArTBvDH5pggS69YAxj%2F36tWRajO0BUJOGnyBgfxkpZ4vqlYt4lxe4VvMF18GPNJhjTnjlocd7Q00DvAU15nzCOMnGTNNEj6Vw2eaWucvoFxs5CGsgAj%2BejssNFW3mvYjo5N3Ibzw%2BdwVwrh5hhKi7UZxNO0szGoB76U9gMJWf68cGOqUBE5i0wBdIBptKq8kVNniXxhl3VUFFV1juQjy%2B4ncfEoxOBRDrFRYalOzoIJ1O%2FsIrQ1JoArob%2BTxTMmryzibNKS3N8ikONYQXNqth%2Fzj51J0FL6%2FkmvoDi1vvqpX74%2F12TaYDt5YC7Og106bzy%2Fxg9%2F6PX1oHRBhUI2rrI%2FcXL%2BX7Bt%2BZyP1GhNkPzsnV7ajVDe9qCWnP7Ug%2BOuR0zbwGsPP05d4b&X-Amz-Signature=3be3dad13d1ff59b907957a431009271e87e3c95d57d94e08e40a9019d42033c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
