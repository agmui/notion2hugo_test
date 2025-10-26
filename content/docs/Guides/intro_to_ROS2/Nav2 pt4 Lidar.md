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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P4BVHB%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI86lQNus2dO8QujXQ9g%2Fb9ICQ5qfHT%2B8U1OWM7BXsIAiAtY4pL6HwEwmEIh840vdjt6Sd6uVZP%2B2js7NB9gGYxXyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4lH5Ds%2BK3KMvfGJJKtwD0pPukpOqcZc%2FQAZCfbvSni%2FjA9%2FUlf5y%2BnJkU7q2EXtIvQ%2B38ozyl5gtOgIDQttVux0%2BnvhMG6YYBlZNQMN2bsDE6P7P8O6ARMuPvPsuT6fN%2Fc0%2FBbfGGRMIPqCGMjF4L311uYzGiubNucz4rgmn2k2SQLrRntq7jikJoGtmJewWI8oN5flIde0iya4YI0dvnDnjv5G9uiIjewmv0meiwKEBrPIPhSSeuG82O22oRZsCY4ePhW4Du2%2FuiF8VOB37bIbVKRNK6cFfQz9OG317NYxleggCdiKdkAfnXrRVES7Rz9cjU1pjgS96o9%2F0oBcgLVIYv%2BKXMU8Cp6NL5z%2B%2FhYlBEARmE1AQzBz6dPRzCYKRt8rRpPSxNQt9NoL%2FpMno1LEARTFo%2FxqgHUEmj%2Bv6iq0IZVNVpyXFgemb0pIyb5%2FUC0ddGa4hfEN3V6PPhO6zW8NzfVH5VDdKotlYwxcVRuNFygzCGKdRY3XSd2kMZYoWkz6jXGDOezafFVDAjhY%2BcUAHkSBJtyv%2FP67OPnfj7W%2B7nUE6X%2Fryf%2FJoXIvhErPbfl6%2FSxTgC14rqBQjb3oLtCcRahnx%2BUfJcG4B%2F4YSCdnS86Yd7yHZ1L4QNIN5v9nbPFG1wJ0rEQkefR0wnqv1xwY6pgG78NLwZesNvdHJ3jvwGZt%2Blxa5W09WS%2Fx8Cgi8T6f%2B5wEhjGlF3Xsg%2BMPLnYntOa71hBBgUy3IE9J2FzVGISdofJj5gCGd5e09RLfSXh5KWTd1uc9lprYU4CBqnZD0R7JW%2F6mID9VsNQ0Jky0FrSBXHiwFoT4F9Ft00678YvgK1xIhXK%2ByqKVXuXmwfWfj0ED3YeKQS2ew%2F3OnX9N84reGtzIfenth&X-Amz-Signature=c8ee9148cda0e199b63c8f4c270b504c4479ab3ef866204bd91b76015e2df1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=faad52d67ca6a5e7acb30e657acd0e7051b78c1b9f61d33bf81a7baf98c60196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=117c5ec1384df40760e5f263d4642e673a4f024ea02c4d9547920dd5d0bfb15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=f5f12b376e309340c5b06e25693b75f8546b63878f10de9ee54132baddd0b3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=9502659e700c0c101a89d5396fffaeb90465927c17d1c11dbeeb72509ee2fc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=84cff849248794541bab89fbd8120dc2f462e98db3a037885006025cb789148e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=37d6be3c0e169ad6263fc87425ff1947c02c3908955f1494504407bba17ffb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=a2335d040e40f5bc54693eaabe935e0137152062997cada01453fc7527a7fa22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=4d71f3e374a2f587e4446f021cd8f0810c63d8770e245fccaee712ba83cc285a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=5580308770dbcdbed024ed575a84e8f0eef2f04436507247272cf5da3fdb8dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZKF2O5%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc%2FNgk6%2FmJhk%2FwPx%2BBMuvHJGJsJUj7XHX7OmZGEhaVYAiEAlNHzaka%2FkvdTKZbXQ6%2Fh7kfNGkDAx04Xo6UL8%2BbvBngqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl4QrmSV6p6j83WySrcA1qAxznkYjqQgK0Aajn16R5DuepQ1TsU9DljEn4H0xVeBdyQLiVjPb3NA1L%2FjDGF5euelDT%2FhGMw0rofuMAWLVqzbUpZqe9ac3%2FHnQRshRO4QaBahcK5Fnw2OZtvDQ%2FA8PqeLpzC%2BIPB2l1BIhYssgHS9u06fl0%2FdkxQMGyaTacNzK2ZlwZxlkQHlpZNwWRvxYmi5qv6p5Lom7k4sP71N52Hf8qFkKffnE%2FAIG20lraIRVHBpDb95foLHZoJF3KseOY9mes9lLofBBhOGty7FZHI1oCJR1kAPIjXi1m5cb1FfPTC6VKgtSlaP9Y4HBzYy2ESjfxKygx1VCjaYq%2BYPtO1J%2Fdre2PjYzNTPzE1Oz0S6t3gdG8NFhtYDrQM1RRoWe0d86rgnYuem%2BWu0v581CS9GQ0z5Uw8maLKcFUdfdE0OOgA8D6L0RGUvssmSldAY09%2B%2FrVo0zNhk4c15wYvV508Z1wOp7EREUOimv2CvcO11yIWjMo8%2FhAPrAFNroSCmDX6ETiuBW%2Bi%2F6jbc62nFP4ANJ4HG9h5JJlaq90L1YPOUXI5a18dK8WV9Lw%2FrXw3Qs%2FydiMlyUzjo3PG7%2FqhWEdHpbjN%2BN%2BoYpesLn8XD1XhNadrYnHzIHMdXI3sML6r9ccGOqUBAfjueewcfIY1n6KIE%2FFma8%2Bz9omtx7orjPPVWs%2BbvQJQslA8094QhPi6%2F6u%2BJGWO5DYmoQXF5V7dZewYrEs2Ty7GCLjUYrBO68iWhGWFS480JJrW6HzqjgFT4%2BTDl7Z71y%2Bd6GNUxJQ%2FraKi%2FdvNewC2MoXG2wzR092obR9nz09meNn7BiTfeluSt2pZwragXr66IeYXpXgGsSIP2Rpe8JkWeZAF&X-Amz-Signature=9502659e700c0c101a89d5396fffaeb90465927c17d1c11dbeeb72509ee2fc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
