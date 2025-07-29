---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=3ac35dcec2908a50a5d31fce8a911a6f8e2e33c0a03dc0e48713dc6841488808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=1feeed120248c635512def3dd79ab29f70cd567d6414ba601d5de54f31e7b3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=902d64576fa2dbee4dc104d11f494e44aa2e9dac5d1d572fa27305215ef39a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=e20b98bf038c9e1cd06ab11f19f9aafe6764ae9d61e346039382c0dee5409be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=b55c5c0dc0bc2ea6e3e5649ddbaf6698909901ce8818230043df97fe889683d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=7086005e573f1e6dc44514c57d856f047770a1a03aabdd7cde708e027d4750d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=7458186c4251b7e456349426ab1ba40ee6adf67f5674061ab9fd169738b84c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=e6af1a66c6281694f0b78a13339da981adf1e2bcb4994b4d1a030bc5098b6244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=55ab71a860820951515aab7555d9934fb2d271cb8ccfb88d7e0b479c870b396d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXGEWXS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDiwzVcLLUXyVBD6Dx4Ba2qTpiHJ9I3DkuoPd%2BxDXh%2FkAIhAP5AgFaUEzCikr0cP3THWFGvS1%2BoMSnECn%2FSsor34P60KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6w%2F%2F4qmPccvGwbsq3AP528JC1nz%2FmPNIwRvSH2RspayOQ6xTu8UmgkdjL8WxaLsqHojH75Wv9o26JpVF9xHHAxPbgwr1SAMjr0WsSDu8xseh81mEuf%2FkXKuxiZnAWnWeLc0NeJIdz2RmY78Rqo5GNvAkFcxJPI5JyTPUbPNOek2yfys5kRUF%2Fp7%2BjlPcwfJTHgRIIOvJPHemfbZlHq4bHtgJhvl2nXSu%2BCeCyYcvvSL9SjHGtyt4cLrVbx86Tx8fqGZp0vQH3HTwkg3Gvj4XpEZjgtm4y20xtlKrRa1LO9eLOF9%2F2XeobY1zeK2wzhuz5xiE%2F9fQg07LgL0igphy0G9Fe%2Fz3MxurUYJrbzaXMeMq760c4GXjG1Mb406M6iol7WxyopBYFBxUwKM%2F73PJHJXa206L1fiq5bbX3dOqQ%2FJLyaMyeSfDz2ctItU5ysiWmRWMvDdoyz7QR45ovoE98PhIwlPxVTHkaHZamEH2BHo4mxN84yjhyb4L96tOqMtiLXQE%2FZNDb0fkMmltogsz76UNSv%2BBF1CmDH%2FDqjS5H%2BQLJRE2SG3elQw5uOSnPRwrTQH2TF5Ei5TXRR73WpzHLt%2Fllqms%2BMDAvpActFLx7CCoNGld4ShLTrtGjLWChL9rTwJ1OMNXEQya8TCitaHEBjqkARxu%2Bcs440irtRaex0HGP%2BsRHcceLuz8ehyOvHgR1RjOv2KoFPoaX%2FlWtwlSrkAC6sZCNXe2THB605iijUStk4oACkzlm54vT74CCGwlPKfTm0toOWumz%2FLcbDnh6dtKxZoyKIKizoNIxAD5k4vikWLpWxlg%2FohkG8B60ObTv2nXSIDX9Gw7WEZJuLO5M3itsy7IWUriRJprNWDx8Pt%2B16swv7bU&X-Amz-Signature=4e47ac57d46e6829d19fee031da7e2f63f2d27db67676007c3dcb6f8dcc721ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
