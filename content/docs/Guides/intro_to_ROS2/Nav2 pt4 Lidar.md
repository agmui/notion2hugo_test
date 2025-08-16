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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRZJEUY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCSOktB5UVhTberUzfkQskJfI3LoNCOCViE%2BzZzXtO%2FvgIgPl1AZD89Nl3CpdhDngD04L%2Bl0%2Bx5rkOJvrP7mgdkLuEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCvaWf6g8nrwy7VliCrcA%2F3YiuZMVY0lUX0Bb8oLr%2FVEdruQzXlRn6PkJrxmJ54%2B91OtB2MXuFy2juXcsQLfPGuHxIriv%2BEP6QO%2BZFs5IA3%2FsXcuQA4iGxvh6spo9TMdThrwMTdthO%2FkN%2B%2Ft9CvHkYW9gVQbGX3lJQMu4XSsif%2FN4caET0y%2FwCShh8mvHTwf%2FShuw48DdC6oSjhh65wFdPwQlu60ZfCMiAGW1iaSrp2mgW4NGEOLOpyS3lvEqNDBeEHbxrret7ZYz%2Bmks88NukVZjJevH9RK5r%2B0v2r4YUvvR1X%2FinZ5%2BvgX04JGUeqFh4E%2FKXTn7aozAN7kzdCepHk1N%2F8iGqp6Ch0PKBggvT8FqB9kZlgVMyiiQ7S%2B%2F9CyFVAA0DyNUOF%2Bv4rR%2FT33qTWuxALMdcxHnjUGL%2BBTC8XtjJVOtz2NwZ4ihvVUmH8WmPyeY9lSi9aT04VTnExf4R71oLxizejmv69qXLR2%2FcTkHXrptyyLi00K03EjcZIqm7QWzrGxswPgEfyAgfZ818snN2Y5Yf1c9WHd1iPIp%2BUmU9HkKi7s0p5Z3xuNzUDtTnVd7itmkK%2B4sYx9YR2k%2Fe3gsViuEI4Yoj1rTkWw2VV3uuY5nvszjEaFKwH4z6MA%2BLOXO10CdmqLVAibMPH3gMUGOqUBOAVXAQO4xA47SBSJOF8xSoGcT7C%2Fz9%2BDtXb0P3VjZtLp%2B893C89uffhGwGRDb5eyLHsIoOzvvWlM0prbWj5Ze8rYMITKziY3t8lgcy9AP6vcUdSxkPtHIOznzMJBcwHTMTemHGw8sugp4Wut%2FJjx8WjYKsl%2BqQCvSaphr1AQ6QGqA%2FUstcZ4X543kBYsFwS07FTYxv03a%2Bgn6etWqcpNTHuO%2FSrM&X-Amz-Signature=09792fd80fc4c2338e7dccc14101901c8d8313286cfdc6b6cd08442d0a4f990c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=4a717dc6231da88f95e71758fa610425715e37aa520cc34e1801eb542d430781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=bc8f45ed4948539b136c49e791b1d45d756931ee6fbf0f46ddc4b68f994f1d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=e55ed6b001412c135ec271ee36b94f6e3f9fce5c260c8bc5d96de0ae9c03d65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=a57573b423f7563208de7156c380d04e653c96783990f6fa6b3df83211c057fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=3bac8d3971b2092cd8465bdc5c4da86da199738221de951c4fa1e6232250efcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=6857aad69e8657760763c92f55696be6e27ddcde13081c3b3889bac6b6c5a698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=40d65ea8a13e1d506fecd38a57af3c904785ffae37c08d5857f2a5733b9e299e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=c8201e987778bf84ef74c9fd9b0072b0c2a4e06d21e22685929260d7abb84aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=cbccbf13dd3073c0ebf4efb1add3527f529dc515b3a8ee7c4f2be7083a8d66b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVKO4DY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCncy8qLLrmRi9VuxbZeQdp%2B3ipnuWvSsnYPwkAgRwP8AIhAP66Vf41dvF18kcRpUu1EXqyA%2F7yGB5GcIDQmtKnxCfqKv8DCHEQABoMNjM3NDIzMTgzODA1IgyrkmjVCQ2X%2F2jzyUQq3AMI7RcCkQjL6%2FB5qucou9%2FRZ8x9JN5%2F7r2Nc705bKP0iTlsqcRSiqXrZDAXk%2FMDvIkojmnTY%2Fnct6%2BjUnw4ex4Tn6MuuJsyvLDviOYj7jkTtSNHt8viv%2B8ztrdDxIhIKzYAmdyWv9zUIHpmc7cosYY0e2koZNJ%2BSW9FtMM3rYve7gFtOznQpqTXoO65vguoLybOBegZOu%2F7cVCv7sIyCZizDpq40Q0SoY54ktLcRcNn9G%2B2WkD2RXXfbXjLi%2F1zurcIfVFa8RCTJdEViKgG5plnHmo%2BOKp%2B3iiiosUjQ8VJv%2FYeBdmbefkNR03ndV2B6SeDy3vO1rpmZ3lT1hJvIYkH17V3eOKchk%2FceDotfE3alY9NbRo9PvWhIwPX%2BoB8sgGKxQ00a8pR9laGMUY16a5St6lr%2B8J6ANwW0S6iTQ1vTvIankdvpiepeMhCRuUoljPsPyUQzTaCi%2BV8fK9rHpCi4GIQvkXV3cjiIlMBEDfVPv2eSfMxxZVzDSJX3qXyBmgncqBVjQVdf4c6jreIc3MZ99w48xxZUbkpuhRh6UBPfKiDCZ9D4uQa9TEKPTGc8ztEESl2iuFumCTGrkAhbthZrLILll1ELXWAO%2BJ8mOoKD3WuYJxE%2FnnkVEojjDCc%2BIDFBjqkAbuXXTFo3IEpbpy8KXeJMPWHeZNjpf53fhlCwGRMrsur9CebEnZQWergHOTOuv7Wyn7vBZTugX2F8wlPIY2GwR%2FYWN%2By4ou5HXAbOUorrqmseR%2BWLSL2k%2BBNv%2FFdHsCOJWtz%2BWBdqsguG2vc%2FrgIu5Qnch451MsJCIuvxHKlkJ9lcV0E5n5gwp%2FX36PJwTmajmpnKwp%2BbgLcTdX8b2EyabzS7fRm&X-Amz-Signature=a57573b423f7563208de7156c380d04e653c96783990f6fa6b3df83211c057fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
