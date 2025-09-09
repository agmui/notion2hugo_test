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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J666MTY%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCQKMZoJzx1YhkN%2BYsN7BcjMrm72G0PiU3Z8CMkMCNErgIgKuaLD%2BYS0LHP6BdDvuZlnq8kE0U1GUr2F94o7JcFoOYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTfSsXS3qUA0d28syrcA%2Byo%2FDf1aO7KdzHa50mbRky3tGyBoOoHY8UBuV8qxOsIWHkTOglapRE%2FzHA4CaQAVayJD8%2Fb6eHobUEwKloew3gJhK4AWY%2F8ksXYY0D4sq%2F6rLXSF7KWW%2BpkvmCWpc7PjLLP%2FRskIr9AZ%2FLvdDl%2FuyfeHB%2BI50fu%2FHcq90gb42t33QPARpUii1IDjWH4iA9YVWCLOpdD6n8QUKp%2BHpOsno2aH3vz6kt0%2Bg1Ln%2BuiWKzo7vu6R%2FJigxMNGCouJswWkNO0S5VysD1yV4rdq%2FCZVzC3djt1MuBL4wrQe8K7YIWurgW6EwKtgvaLtLxtoXuOrLazSqeC6i6DiNz05g3%2BEhAr%2FY1Mg19F1u%2BHK1AOlyOYIMEDyVK1B0jeJJgwux528jJ332ftYbF%2FPl6DXlabNkCPFmqbaENo5GIfzqRy8iHJCnRUvh%2Fp0pf05g3d4H29DS8z4p8irWsHt7N1yNVuCM8DRCuBi6w9KlFH%2FZms9Q41YwBSa7QpAvH81RUZLRZaP%2B7ENVMoPk0XUe9vtwChdkZB6NRgJp2h2rVG6RtV3MYrRzMEXDiJoMMqDmszbtSGbRI4NJUHLQ4nwU9FF4Vkl8uwpO537YTywOpI1K4gKt8dUcDy3w8M2Q9p87lAMPHy%2FcUGOqUBrEW1vinsU0MzuaLGuLmi%2FRycnJCzBDp3YyFMDFD0lq4HVaO42I90ijfO9kgmPcWJeYesElQpjLvvPNyw35LLIKyKBblvbfI2jSV8vZmzi76g7pD%2F%2F4PZrtpxy7KNHBptQGK1jjx5D76GBVK7AlIZ4Yc8w5VUSd%2BAe0zEXuScP%2Bthu2c4fqIE0nexz9Rl9YSlcrvzAvo6EiKLmuIfOLvGMj65I46I&X-Amz-Signature=bdf4cbc596a20fa609280734a1bc6afe1f0d6ce734d8e6e063627ff3fd1d09fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=050c4314bbb1293079e1c00fb09c4142f23c6ece2ace3b504c49acffb122438f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=0eb36804eb014e3c686d7218c8359447ebf9281f575fcacb1acc88658bb7b63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=a186ea5eab5e086563e98ea8188cf8936665b3511d1a7f8ed3e36baa569fa961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=712bf0ea9e8e2de7963283c5019cde5f3638360b03d8ae5f2246d165078e47d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=28b71fce0126ac6db1da0d58b44f08ba58892f818ab279a015100621be71fa7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=8e25844ca61f409cc7cca69f2e2c789d9744b743dd1cc001e10b3cfbe46cdeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=592eeebcb4720826cca7503724934de0428774634f26b8be0a10a3809568d3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=57a832d23d7be14ce1cdd4229c8ba38caba5a7bc16e2962cef142a6f230315b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=d66a987434f9eab0d8e918a717cd6de739b793f76aebdb0b62a2b18d2305d099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AIOQQ%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD1Wg33Wr%2FMdRZi33%2BKbEyhi7QFUxyBqvz%2B0l%2F5d0ABzgIgFrQkjxH7QZjtxo1dpjRlaAv4FlFm44Vgvhn7Q04dHyUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGA83OUVO3bZFvyfircA8GSC2HXDSPFtmhWVmp4rDv2ho7ozAKUumTS2F3tlUTtm9xcn%2BJC0Di5hdeS73dF5dELJyxnH%2B7mH9iTG0qg%2FRSwR6Q5Vck%2F00WJomHWOvxPURpfVGE%2Bqs8SEWZn3zoKVvKJxAeEBTTUJh8X7tL%2FJIfGtteozJ1ycoQOpJCyFuedvBDHb00aed1jGNF4nA6kLxI4unFgodaGTSt47aI35%2B96pM7cqP9nnHX24g6A1QNDcpSCBelxZIMZwY6PXAhKukMDcSkC%2BDpr%2FuCob7jGfIxJOg0jAQiEgPg8%2Bc1I6efW09Mibyy%2B%2FVPjcVPUErD3UJW420uRayBBvUfPTkwxX0avhlt5%2FaeYjQ5Q%2BvasRRCC0G3%2B1dXbexE7gBZcHoOa7XVUvduumzN6BUZXjdP0Iz5rTw51MTI4kFFzMltcwWl7JwnreYq7C8Pn9K3eu0LYRC22R7iDzsRKuVODklx7qklp0e6sJPToGYsqYDf1f3%2FJJxa%2F4DyGciD2hb9jQrLUoGjRTqlTE4UUzeJZZbGeSr%2BLFuZ0yzZJQp4tk2HseO6r6GfeSserXf1xuu3Nb2lyjSGXQ1qPUE4z5MMpdC1i94vHF8QoJr233gQacKVe%2BFZoX4iH80NR6UEKLnLRMPPy%2FcUGOqUBEiRE4IwiVyqNJ361OPK1FHudJ3oXzffA%2B9iUM8tIIJYPiQOi2DMwZn7RM4uXFgMHf%2BiGViNdG%2BfmNxtq87ulequMDskMa%2FplC4hebubY6VI2XS8l6JuHAmdHBxPVilhKRyxYbvW3Wm7TVEMLl1Q4hG9zkYMjVYr%2BZC9NRgC3FKCoa3lV%2FDYvPluf%2BU8ngHJEztsbIpU2%2FbPdSlM1YdmWH2gCbtch&X-Amz-Signature=712bf0ea9e8e2de7963283c5019cde5f3638360b03d8ae5f2246d165078e47d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
