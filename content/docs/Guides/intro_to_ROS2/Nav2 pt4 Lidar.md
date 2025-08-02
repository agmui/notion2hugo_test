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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKU6DX6T%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPY9ht2fqykLzr8I1bHPyXWsqoyD%2BomDp4higi%2FL4N%2BAiEA%2BzyG8s61mZfHADF%2BE72TK1d2g6hzcAEmbUUb9LAE0Fgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAH4k%2FhEA6If%2FXq2fyrcA%2Bfw82GY%2FUcKd5%2FsWA49PeUqAWXRBnrg%2FnVV0t4KiJ2tt%2BO6N123B8q68k1yXyi00yoxg4jCaO1EMOUNUGoVoXNHuCGjvSuywXKcJuAnXaVcoIMvLwhA2lU3j%2FA8uQ2pSLLZjDCNhH8owNTf4ysbYmM5pPk5I1G2JXBT5%2BoWx1cVT6s19hUlu2UDaN5E22NcwPVsTGMU%2F6gqzR6rKM7REFTxMcM71iTtXgVA%2BiXAf4FN1EJFZCGLI5U5Nr%2F%2FAXbYZ1YJkdOS%2Fp%2F6Os3ycojyNAa6Y1ocBPUoKQRMsZFI37qduVWo1FLQ59Gngq80G5DwVGc9qEEGftxEriT9IW0AUpKZ2bzjcTabdyeRBoQoMlusjxiC8Kll0VH1PyCIP0iZL%2FoPg4VNbIf0H%2FYSaJ%2F8TrwblbHjz0820JpsdtzPJASSYnLDgoZHMGPJULIAnQfHOX8kxyDWzEVkpyzegInPIryvRHjXjPdYN5RFdtGlYQzDUAK3h%2BFmkUAcpEOO8v5eLAuMcKgycWw5yDd9rsM8ktybGsAaOv%2FF7epgixhOF4Fuku4uS9qwAFQvDoljAI%2BUAY0wTPKCUa5F9KwyojyUcTyp2Iv%2BhCKZZZPRSEQqypZNlDfMEXw72L1XFLn%2BMPGAusQGOqUB1%2ByVQdU%2F52kxRBF%2FnpRR29MZfFa2KLNqNej73wtGAC1j7d7V4sU9oN6tEbtw1N1ldKg98gnAnhqAsE0L0dwNCRNxzkfxWgY1riMDbphY7CY56X7KGlJ0GYntxle7%2B5MPlS2H9g%2F0p9XJ8s5FTMw6RYpYw2uNF25xCvjltsazct%2BdCdljbFnzGvR17G2B9sYG%2BJ4tOeNPWyrDlKa%2BgFjyEOqHlM9W&X-Amz-Signature=233be6c39d4ab61430da5917e9df65e2dc6f2177f700a2cdec6a4b42e4b2ab9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=96fc4aa25f849b7bfdcfe30370857aad8835f8a7f69ad7bd7d437e56430d4de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=c0f2e393195d894692731dfbf0fb968881d81b00bc20059d22bca2f1248db1bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=0f705bce06ee344727e8165365873e0ba73763768bd478b30449214eb80c2034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=f0809c54b06dc127733063e68cc0b7c596b60c4e617fe91104076a416bb020d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=e39499ee6045c29443bb4b34390aa9b07ef904e6fb60fa2855e666afb4e60aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=2a35d614c4222307ffffb71049aa730789b372154233296016dc0afc11a38dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=5cbb0a091a2291bc12dfa8f80b37a56c93a4fc1f9949b615df0e366e023a02cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=02bc715dba3f90868bdae5c5c2eb73b9b74f533b8f3f3f3bb11c629b7dea159b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=c9aabc769cc972675ffdcfd1ee4e2856e6303947d218bee810f4b60ca4322665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSVFVZZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHF%2FNZI%2FJYq%2Fc2Da8dX8Ll1qisxhQZbTyo8MwGif21CAiEAu%2FwCSfV1JfHQpk4vsd3jp0I9EsXCiPgKzzkYcEsySosq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEetC6Lk6%2FKZa%2FOaZircAyzPqRhQZ4vP8XV6g5%2FpHCyNhUwZkyfAAQ%2Bs%2B99qAMTKvAyznFo%2FFYWa6x1iTnNNAkOgmKWkqQPRBYTOmEwm7d%2B182jqHLkvJK78Tf4WOKbkUVMNh7GxGC1Gj0mzylx3QiOtudjvXp%2BVDcf7%2F39rCVJ14loBXUbojUU37gaTjeB4ZPqeWge%2BaLs4oqWr7Oo03LCS6mqy13ZvZXnq11xn4tQab3y8QnRbe0pFnm1vJBJ71vWrVljsmaFGIpLGRcvC5ARMyI6y4S0tb83zi6WJhRVBwgJJgC4E6FCVovWbnErZ9bpkiD7sUs1Z5TSGA2WTERCue8F9myWsCcj%2FtXEEUcOnoXA7oEPHKoNMIjRWKFA89CGjy4jLOOVRv7rYZxQjyrDuhtA9%2B8RGXtGVpxuzqPDTUBnkYCTKd8ndVije1Vxt3Twxt9c4RzBXINYIKmE67OCIfIAwh9gILkJVR8jXJd8O5rQlRxwbnAKmIZzIOEoGE1YxzUBYuY%2B3lro3SYbPJBO5RzRR%2Fqa20Bs2eF%2BWH2mAMsYh%2Ba%2FlIWUjPHKRt05Zu6MAeCzwsIfySmCd83aUuHSJESuSkl18f34og7ewdwWknVqYaRGLFndX%2BSdExDkkNKvwQa3Mjcoq7g2tMJyAusQGOqUB1RUuWPH90xgs%2FEiG49gOMLhIOH4VE3H2lN2B%2B4rxkpLIRIEMDVmTNfJJuq%2F2dMJKOOE6vSwMSnJ%2FiIIvbkDIJ%2FLDQfgLkwjANtk9YGzmsw5YdzXnUPBvYm1M64czNGXax5sztHuLVD51BLLr6Xlo9jiJHEJfEUJVisvx5bWdusLCnL4lZttaJ2u8s8LKvVjHFdUQQXotjUhD806DUlAYR4l2hVM0&X-Amz-Signature=7b5c4387fb4f6c8704285dcb6fc6d692d5e52c0b3b90a7000037cf29691d2a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
