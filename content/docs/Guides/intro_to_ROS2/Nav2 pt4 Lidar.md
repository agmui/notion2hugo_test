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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBXIFIC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T211000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDuELnErQ9nQhXTjDH9GXIptty2kdBPEaO8XLYEN4AKVwIhANSfgRavFcQZCN09Tye8p%2F6fAr8%2FXThviVPPbw9IzXMVKv8DCE4QABoMNjM3NDIzMTgzODA1Igzxq1OEBFzi1HzIi28q3AMRd%2BOraCsLaOrBiD2nPByyz2KZ1zjBdNgvehSU3GOj%2BiT8VjK8F1l%2Bs%2FI7p6X1PXr1Xsul8Rs7OshhajcQRzw1AMwHv0XjlHmAI3I7JdP9lBNI6z6%2FP2PqAGAT2McgIeVYfkFKOReiqJf44OaPnxJ1k8Rjc7i0A4K08EsIzhF5rQm1IIANB0PS%2B1d2rwaG26GKsBrppdCo2U5wPnPaZiz9gnCSXO87jBtm1DrzwZsBVGeIC71UKHf%2B5OPGqU6H%2FLzEW2%2Fm31xTeguOoXW7NR8sPp6LqMkKVBXAmcC%2BUUvhuXeutRDJ56OZSKgOz30W0Ft%2F4vTkPAfpol%2FL2Gm0oLNZUyW3t0z68mI3xp7OHFdTvw0lpKqGwdat%2BmKMhSDNP%2BTTDVrJLsqpAix0ZrbmcghSigHz9QxwHca6F342J5%2B%2B7heiJl7fG5r%2Fq0VQjmtreUDhrIMZkHkTR6yizucNc%2FkvkIMEYYiboaRlK9O7%2BNJS3qaNBrQ3yX51fZFS79rSPfci9o45%2BHRWLVJ%2BJHZDd9aTryuCQuRAypNN7Nezqv%2B4auDu7VunLFmSfKh7U3Bi0bpH2SjpL5jTm7XXbKfNC72B8E7m76h7EWxiWLpKoRV%2FYpVfyGtA%2BNAsyMIbZzCvwcTEBjqkAY%2Fe658rq3Y3WAwNmF7mfJT7phZsVjpsHqqCLwTJ0yLWSJQQBgaUODov%2B%2FxQ4lUVHc3K83jm2KaOaSkEdeHCywhonQYKIGzvqe2g1sxJCvxsoJzOanC2pTzEOdnEUiFnJbRyruI%2Fdo2Zn60bgPkKZtpzrZTTPuy2yzWZCDV30qPRUQzWHI6wN5sKpcF3nJ5QdjFKy%2BiIfviH6%2FBEfVJtqPHgFoV2&X-Amz-Signature=53e4788fa23fa420d1450373d0606a071434263d2f8afd54a938e27d52c3e225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=d4da89615f5322fe840f38d5d38babf7289a94030806d3a7f9f3f16d02e34a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=810beba69b7ceb2b49b27edd0930868203f0baf5826a369e276c99c5ed370b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=ed6f6050d92e269bb31d6774a4d517ec370b6e65346b71eb6d0268035bf7fac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=92fdb84aee057bfabed1408968e644bd7613e42c727633fbda4beb0a603a1637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=66e52892e10baac37528d596fe6b47215aaf420b581b312f234db6399e1dc5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=c9c5fe53ba254ac7ccddc692ed21230eae4e18be7a8c8135208c8df3fbf14b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=c910a20ce032cfc72fb84b17b560c953a3ca5b1fb7914806b929f41ec614e83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=7ead1519e78796370dde2c58f0089e1e2dcfc8f98af1ec0c8b6dd9c3b6f977aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=324329f7a317790c943584e809235236770efa95880a98c8efb7ab3d28f737f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZ26T65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF6NwAB60AB7ixPk255w7Zx18JdD78GZZuodc8llrXiDAiEAxsI9rDJR0fBFlri5vKS0DoKUXchwJmBTtjsajri%2BDtcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEvtuIShJLgL8M4IircAxjnI57j%2BQb43P6hcLgVhCrhJCWv3CVtbVg1VaCmBQGvhlb7EPEse3W9FDNln5t5y0P3kBMADQvYo5EHEwT2IVSMxRoxdBSe7ba7rvsMw3cXYjiCNucRLH%2BHw1GV%2B%2FCVUMR2CL85ZRyyarcnbLCo%2BULp2sea7I8RxlIOErJ3iKJgPokDZ3vp26%2FHL8Xkib%2BUgfB8jXK%2FEorT6%2BLTrXzU4ybwp4Sq29FhF7G23u13pczHxVHfl8MdLDf1YGlDf2JnDODXv5J0b8qc7gRGTgDvLIWs81ruhGf9tGKn7VIOB43Hho1TtUovWNbxYCXegECWhZxemhnsYHLc%2FN8FHIE61SZctxQCKkz3x9ju8oyy7q1COrPGa3N8Er%2FKeMS1oGN1m0%2BzdSd4XEEHYHaLYF1UkQchLJKE4D4nnxvKBieHD7yHmAXJXKBtEJl7ttw0ON79LyTCfPVB1rgwArHdYY9XUeDn7SlD5ir1CkT7wcOfAOF913RlJCj%2BL5GeWwVQqiEJ5P5ov6%2B4PknybRKUcjFmCgxqyc2ef6x%2BqgGCNbh4FehGgfFRfdtHzX9qeNEk91hTfebLianxF1B5ci3EGjSb8InnDlJzW4DlPDLdFcnMh%2FsGa62MG7FM6osTwXgAMMrAxMQGOqUBgXi9txmbpGkbs%2F0OCQsBvZEFJCxASDUJ2X2cSyEpWNEOuUtEop9fLwlt6bsiW%2F4oPfGCSejN2NWyTOXsrHMA%2B0ov5EQO%2FHLZ0BhFjOP%2F58MvswaEP2K9wLdG%2F7oNZPV6G6gMjhgJ2uUoO31c09cklokmeJtZAxAUkTxxhFed1lwKclmlnsIk%2FjVZI29UV%2FUHdaRaToS4eJl%2FWML%2BqAbf%2F5Y5HT73&X-Amz-Signature=92fdb84aee057bfabed1408968e644bd7613e42c727633fbda4beb0a603a1637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
