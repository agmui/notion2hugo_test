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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZBU4BE%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDsrgF%2BPuMA6SKc%2B4LT83EgyHPrH5THXlME1v11q3zTegIhANXOOfYuNr5Ox8FrO6JtafZPmd6i4HA42XgjQCihRURKKv8DCDsQABoMNjM3NDIzMTgzODA1IgwZe96gIgQOTzE9gwoq3AN1kOUNmAQ1RLBwMNWkHEuS3JzcZjG6npvt3XIM%2BrB14UBN2Wiewpw7thArPhi0at4lIeKThrSP%2BDpm%2FxoMPvPAsvf5uK6Q9oZLDVrNZeo1%2FQkz3xzQpVQ1JAt6S3%2BVA9RkI2o4o2194ABXLMg6eQTFUuFKBgd0xWn8F2EMHcW17VaSUt0xBXroDHop2OLkcgp80An%2F1GmaRVYO4B5IQ5V7Bs4pyBVTccSI1k1ravvN1PN1qHht%2FjcgKibqbHZn%2FZHr1LWR%2BMXiQsAA%2FLB9KAiy%2BsCtGA4P3P6nVxSvzSjR3zj64Bsxm2nUvFJWwQ8m4Dr2xJgAMn%2BBZh%2F6GVjmr36KV79dpD%2BjQHEPT2d%2B3%2BHirnjwiFdOfuzEwnn%2BCJ6i83omFQAKWJ7abJpxvNLb3OH%2FdOx19FeQ4BnS%2F8z63I2%2BZ6Pf%2FIZ2uBtiJFUlG7W3%2F4eV%2BCCD6H4ljVf3yaxcdEgAXG87ofAVRBvLw9HtJk3mta2vKGNhksr%2BSX%2FHjno0N016Q5dDVg3nrFuBkljMq8BgQP%2B7q8tnwcZqAUkJ5adRd2HJrjzIRFkSWAvBO1NG521SnNUu4HaXAITIWrwGbcoiLSVdh8pPUXxe1G2IuXgCiK5D1AL%2FIn4oj3AurDDum7jRBjqkAQ4hofJh3dq0d88C%2BAEzC3rRJfWQDA0IsMNatUnXYI8mo39oJOfZ%2FBsZsduQoLE6pidXwkoiAOacwGO02XwqaV1R212jAIsHlP0DWYx55O%2BEzrd%2BrQxoomrnw2KG%2B1oRC%2FhxpetrkylHZfdCRGEQcGg2BOXSSHcBglS2X2wXY9BvKIaVH%2BZpqtRr2U%2BriFV3yiy8oP330AKSTyLS5bciwGqYq2MO&X-Amz-Signature=66a1d106ccc8f0cf00f39940980d835813052009b389f8427feca1dce1008e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=126bbb9574245f69c5b1cece49d17d31e4d8caa7f5d5f297c662853b2d30245a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=5940edeca0f3a813ea6b91f58cad15be3b6d1a73af4595205ad7c41fd9dd515e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=b40d688d717928a4c30e17272769fe9db91f97e71c76e94643434b4674af54f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=6b5742eb75d441b55d9633da67b419b86d39e8ebe9169abb989b9a9fee8ce46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=238b790c0b180ca6b400c61a332dbca03e6f1215b3b91314063845efb3c68a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=b42ddc10640ffb53d76988b0baed584fa74e82c5ccfee1bd817d954310615201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=068d5cc8a8f68d4d2f8ac473a88372cff30e405b55d9b1ea57e510af1981e8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=c7804966544e8451f122ce39f386a05aaef94ee4b3f4b6c33b54a26996dda5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=20f94331537078be7bdb5595138249d322dfda02b5a64fb88b1b1decc9078590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJV6J567%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKIkgEmPpV5g9Y1diqEJ2dqzRBIfEPUtw3b0Gq6%2FD%2F5wIgDbei1NiNajCB2WuL49IG9%2Bm5HmngELbzPYuJIIKrOQkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMdPbo1fYXCvVrIHbyrcA9RYb%2Bs1NQP6cWsf0Duh%2BKkBTR5powkSP5xnJ6hn8t8xBxJpEuysKnGmuyL%2F5zZOjUW4b04CatiGRpBPufYzqgwbClueopsHBiEt8N3MGqmO%2Ffeflmi8gy4zrzNYsguC2o8hIZCrhCEVqYJEk3iqGduqQ6IJhyL%2FlutlT9AvH%2B%2F%2BQPtNATVqGvYpaBrfH9pEu%2F7d9gj8Jvr5EsisR0hBLwpJJ8Tmhuq88qgPRyKOF9Np42TjRAt7cpb1n0NixARQ3aYz4xa6tiNMuXj5LpA9uhUocMeod27ihi7aWiJ2zAuVQNVMzVG%2FD3UHuVCZIIEtEhOblIyi7OT%2Fc%2B37tYoB2aODklvypzrw24saQ%2FldExUCOXxTGDfZA2U0xhEISqUUU6fLu34TtkUUz%2Fd%2FpeRa6nkUIIOnGTxBpPwkCSVl9FNKkVajan36aHihq%2BViZo2EM3969TT8P%2BfUNMWg2zED7fauLVphgZsQqwlVvF7tm8BU5Oyov46hfF%2FwvAOIonHzAeUYAV665GT0gkbxSwoZgB33%2BCW4JtSAtV6OUpKnJWlLg%2Fc3VkkgN3CpB%2Fy3vVrlO2tbTxoI3vjnKy13cbkmsTGJvAkzCY%2BAVxFvm2%2B1hvemCFO5rA%2FECneX46mfMOucuNEGOqUBpk2oS2ZW1MfliUERrsNA6cJLiZYhr5ede6mz8nA2zZmcvZ3c%2Fo5b8VBcpZZno5zccT6oPbSRkW357NKUjl2nZhAG3jwD%2BfLWKbwrmSYb1ynBlLWoE8xWKCNLB8d6RuWZ5z0V9vBzW2Lp3C9jUn4LQROORv%2BBhvCy48fzLaihU0k1waFlIpqR4PTjBkkPzvLM1e2J0Ur84tG6sZvzgWBwhfNga0So&X-Amz-Signature=d068c566a088bae04a8e858321a369df090de3eb17d98e08e1e95166627e364d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
