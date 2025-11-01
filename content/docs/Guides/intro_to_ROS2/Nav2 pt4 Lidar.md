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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTPH6V3%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDU%2B%2BOtBPca%2BHnr7FvlSiRllWSXBGGjyquFhfnIaAIr1gIgEal1JLoDRB%2BbMv5oMpYRMIfA8Rw6c%2BukrR7myo%2FxnfEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDIOrsQYWADjDdcgKUSrcA2Ra8yhMR%2BCrtFjS3noNufoyAqmMRWiBhu0zwSED5yAh7RZI3ZTdTtpqCLp8JuBc74k5dyQulJ7Vl2Hve8Hw7SHtO1uG3Y8wBGK%2BFULEqwdBWAxWn5O0NEvHfGyypr7WCmIfRtxTSSPDbEiyVUve1fNV8Io13eKkUZq9lx2ViB%2Fzma73xmJi1CvLJHHjIS%2BnmBUJh4%2BaFPHg1njfDBcuK35Ytv74LZ%2FX4RjK14uhs0X0oxkHnSKz%2FYAgSBA%2FLxqVQWcZyejrN7bzOP5QwFjJS1jO2yRwruJ78cMP%2FBeTJrSYtzprU%2BmAjaTj0fd%2BkpPtvgGvwogVXuhzV2QSdQN42BUVhmEaCnzX%2BedjHmql0pwpoN3%2BKnHXKSXPPRQ%2F%2BlePNlMRUymXUiDBj3Tqh%2BbJtrZY25wgThuzR8ZTYvQ8eY9D6Rb8AUHor51jg5PwOm%2BOFKSuk5nD9YsO3B1%2BUrp3wGwqcgjElffbcQllDSkxDfHDtKYIYImEpRB0WEgjE6Psok%2BGosyOsfeCS6G35mNfJb7L52CC5Aq4inikFfbDYtWifeQZtrqe9qy52hz1J9wMu1%2FGy%2Bd7DItx%2FTcVzNIiarRoS2YW%2FRU22tLCBc3wqf%2BGDW6jUABOtYNdYbB1MOH6lMgGOqUBo6fypTTOErHAwLsPXC2%2FPmyKdpOPqeIGq4vgaTe%2FmdzwkR%2FOW4tYOl%2BjX%2FNT%2BJQuJ4yN5JPWf%2F72lIgkzGazCCbX0gG4fxsKFNfsf3xR%2BC%2F5QWxV2tjZuEbBxTVdQGHZHqA6gYQxq7sgVt7H9XB7lxzjyXTLd87L9BJieRsysath%2BPv9rG%2BNLcleYGuZGKl9Tn1ybH0PKY0LqwIEUTLg6rGY7LQV&X-Amz-Signature=b1eb94ce902c4c98318e7caddc33c6a5bb8352c6098a7e969b922dd903feca23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=699c256c22a936c726c866ce4bb227107eb33d7ce79dc5f52a3a4b8361cd8a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=02fc47b0bd56a101e16846142f9e5aa515291c2b0c86eb049a4ec79a65ca7b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=8983cdca037f6277c1142d85319f955b6a44dfb9a836fcfc752385d6b8651b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=267e1845ebe32e89e30305ad9395ea5196aa95fc2e05303048611585ab44c9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=5c36a866e57b6e87a0ba5d4b7a324c661eeaf708aa1de05a0b8facdf69eb2d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=05178c7a433fb381b52c272d918551e1f6eebda6d8b0a7aed37297585540c1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=e4a7e56af85872e09f930bf4efe55c110724351bac3740c85d7cfada130be5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=4346808b84f6c0290c0e9e0267407fe140f0e0c8636d40117f41238323c528cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=d779416f06a0960378c4fa8e45d2d84ae9760c2e71ef049befa7f390be870fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQ7GWYQ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEeLuz15EwuCtHldcTytwELpv0FuxOgwNtCuDux88ofeAiEAmy3%2FMYvc4jQWu9E6Zb12ausjsEihqvTxksqpJ9LE2fYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDME1HnCfQ3TmUho3fSrcAxT8hDMtVSuKFSqyuVK2LjrTVzZHd51QFG78VcdyJsbFJlAtG2%2BYMDNaR6gvxOdJYgUWptA7PzWvpQsNh4%2Bq%2FSSXWEMmez6%2FiS7wmY8K7gSk9Xoa%2FVBQ0FuhlidyZ1EjsMwyk70SjEJdpTqVTzRadP4lszVCX%2Fw0TbV8uAoUM%2F3B2To%2FhOlq%2BozaOQEvegVDUMIyphwvXiVk3x2vFDgtjiij7Ew2w%2BBlrstcLD3LxNEEMTsmncWszP0%2FuG4iVHqMLGA5bSf1PLUmAFhloI%2FBFCGetjrkTaCCbEewBTV8g0gOKhoa1KOaFdJbUcUsTFZ2448%2Bv3VxUX8HQcVsSvB1b06YfNTsSmj92IrKUgNsjwelqemFJzUVRmvwNOTMqAgSzGPxpFwUqXBRWKpYCXNoITKAsMvSj9LJbxDMNlVg8j2jas6N2u7HncdGFWm2BbbGIYQPWtrDm9EQoQ9fZkA57yp1GqIqsyUuy7sJJAx5rYkzK8WdOBJ17Sneh2w%2B%2BJoi55nQ%2BAzvcMaeyTifIclKGEr%2BxUx3DgRo01icG3DlPKIWBH%2B%2Fmp5TlJZklPUFfBGtlpk3HeJWTQjwMDSpQMZd4IhsBxBVvOsD0sVWl8LegxvzwS4XG%2FbR07WtdtAAMOL6lMgGOqUBlImeyjihD1Tv3puc2eWVS1bzB3ooRR9hajs2Bewb2iwTD11UFHTqq5nJb8boLdB98mFWQl%2FkGUuoPYeAlQH3FUgtDbTfPOwpbRUFmIlgaBaw%2Bg2sicsfoZfPNr7aWTQbSpEAYEFbXJ160Dr2tq48coyp3FvG0gQnAi%2B0nWQUrtnoRSe84%2FqdlQ9nKmMmbLZuDkI2k4vpEeB%2B7w%2B%2B4QqKeq3lGK%2Fn&X-Amz-Signature=267e1845ebe32e89e30305ad9395ea5196aa95fc2e05303048611585ab44c9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
