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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YAHSAVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD6gcahMxMWOn9y4YhyfDrr0nkzyZ9KyhZ%2FAcxPJl%2FM2AIhAIYKqUM5d665fpUpx7TCn2Shb5msL2nExOp6k96NsHxiKv8DCGcQABoMNjM3NDIzMTgzODA1Igz4KbmmBv6amHuezFYq3AOlHwnhKJ0UKWNd79cCY31efrv7JBOz1SBP0Bu4wBzlPOLYSscFK4QmJhxgDzPe6tirVj8fwDlxdOmu3vY0QTZsSkMDhVBr8hG5Ck6p8tQ4ynBG7%2BZ%2FrNogvdMWQbvA2YYPKN4FtDbCPygram4NmHv1z79ZPRycE9MnLlSXdYIL0JewLkIkShE2Yhl5BBKDDI4k%2FMnp2567J4xzujevuvhM9%2Bs68PaCiRANMYm5AmDd9j3tZfIzsv%2BPS6HWJ5aAuQr%2BJtl4rIaYqMh%2BiQphbT00bY0%2FQ1h2R%2FN2exNjQTtknAHpX7GCIYF9sC%2BPPTQSUenUjjYNs98%2FbOnZgvfVqmYsMTSN134Nt17hIyvWHzBcIcLisfOCytLipvOJlaDIHbdsrXjmM0Ogzb%2F1bczdnS1X2%2B99I4AOq%2Fgt20N4m7HPIG3sQbw9lzC2ZExb4nrJR3%2Bazz4n0rOa5DwBv5Zlu8G4UINqzA0vp95Xa5pYs1UPFUEDTlaeh2kv8OqwqL%2B05N1eXc6F%2B4Y1GYA%2FAjdIJBfWodDysC0Yzs%2FhjNjQ5SdB2dOHcOKsbo%2FIP3JYb1dZqBouD3eUPorFAus%2FJzHWoayxHWL6IZCActBhsDhHhCSfaeWdHWf0cGzanvN%2BwjDA2P7EBjqkAZQ3PhzM%2FERFFm7w%2BVxQVaytu15XiatxsABnaVOilF30UH%2FaDRfvjIkYOasmq2NXBEpMCkNwCwBTnSB8jE%2FxU3S1g2AFtp7K%2FCgnWwLdEdOmK2x%2F%2BnQ%2BTuj7AbMYY78a5hv3E2VrFxVlPDZfutUC1XBFumINv4f3FvejKGTbFnsad9Le4q%2BU%2FtjlKXekpe6scYn8O5CsH1JcVlL4VxMiwe%2FgSFTx&X-Amz-Signature=472b6382b07a82eefd6e6bcacf3ec25b6ad7cddd28167517dca43c8b9d27ba60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=3bab88a004c9992551e0dbba8014d0f5c98abd4939d16e9212aaf8e4c8255ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=bbb3944c49944b95a1cdf02bcc3fc0f006bed2d679a83fee3f36cb778874a98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=6c5041db05ed8982577311198151e0c8c23883112536b837116f77f3f05a8173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=6a7bd6e066d222dd12c8bd9116a9d6ca8f353177368831f976009cd207a1590f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=7aa57fbb4eef1c4cfe1cc36e68c1b089008bf5cff90f25c93147bba86273e6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=be45c3fbb8b2a2acc970872c893eab69cf9b93cdbf46beb0b89d876745467791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=bc5514baf59e255f0d283b8a548bcc2657aebccd3a3f89a3a0c4c927b1ebf909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=84b9d7d7753299f1a2942f50a3823fef15b4400a0e1d1d32c0723543040788c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=ca3bd89f9eefa16118f868324fd7f9ea099dcf08c4bdc2b87c1fe54c7f9b4f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2IKNNF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFyyenInJwLqgUtA0OrbPKQf0Vi8j6ToAakC0eFdu4%2F5AiEA9wKnIYXa8NraNcaaeiOB3sv1n1Jgiby7V1nQLYSB9owq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmTpXgVNluDr4SQuSrcA4WhyGGmpQqjxHsXx6lqsu3t%2FnMCeKoOtJqTbzH7fXc9pbDXlzqCffGK4SFV6TVaJHvK8ehokg%2F8kUaFtkSE%2FdgyRSDbl6V8GoFnHMvvS2DG2QB8t%2Fk%2BH0IVfpKf0fmOa4za1jW9jl2JTKLYO1cMAYnQVF%2B1G9otZneJdXye5ZrPPMSaGTZptuESoa5%2F6%2B6nLCjZHbdgg3fATfp%2BM%2FPEscIqBbVCxfqw8q0YZ%2Bo0%2FziM1OxQHwFYplsBsv%2FgG57TsW%2F7XDbIq8WhshlCboNIZIvkHKC0Wc0kLduA72DitluDDasFgdGwFHjE3JWACqzWvfI8hRZyW6mVH3ahNU6g%2BSnP7xSeBPm1k2oSOVTuctOIIMTUqtOB3C6qfPpqheJm49Qo3ZPUw0FyyM3C9cCPwqLG8CtHVATZ7LpqeA3r3MQUF%2BdNnJXvuDloXNli3enX%2Bgy2NXGn6PdOSg4U%2FOLaUNXYC1%2FIR5k46wFDwzrJXYEqXPtmnUotS2%2BKUMmT3HsWnf1pJ0NCmisE%2B8dA%2FgyLVqAZJoidY%2BCN8BgTFAyvjOjcEyLl6fpAb24SWpmsLazq6Apujuy2eKTwM40l1JnJrDK8HAanxZZJDQj%2B9CzKl%2FBgCmrfAqbZouQ%2FGsuKMJnY%2FsQGOqUB1MTVFdn5rrxV7Q6oeUPO%2Fh%2Faw23G9w9g5TywNhJd7xcPxS%2BDUwg%2Boc1ATSsm8ekarVvT7luLy8a1%2F8G0DxjhyMEHLUDA7MFauXx5YEvPaGIMW2l7%2FXPemBpclbGu8JAmGSOMP%2BXoZszhpC%2BHknlBOdKm3ekwwJ%2BEuj0jXa%2FU0WT3u3HtVnkqNO8IGFJAa4tehsFV8pD3YKE5Dw21uqO7cP3k%2BxIo&X-Amz-Signature=6a7bd6e066d222dd12c8bd9116a9d6ca8f353177368831f976009cd207a1590f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
