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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTVLRHP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCmt7JXYrEgVjRnGSpCj6goHLPGEWVpXa1mSQX8BMP51gIgA8UQ%2FrmugXhCjRuWl1JFJ9JlQuNLnbMkl3kgCCb19dQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHICoX9y51ynp88U8CrcA6WtTQ5IJLe0U0snTaNgDKgniYcXwED2X8wY3XQhXCZq0C201X6nW4IEfcb8GhD6%2Bs6hTrF47G64SaQL%2BMsyHqYozodniQDKolh6mFBEtP3idd9OqoIQ92GxetwZSf33Ju24uQMQxhmhZXx29lpTaMFUwAxcwwR0V%2BmwT5%2B%2Be7iFU2DwjVP0wc3HEQjrcKYeYdoq76jLumGANIMqKP9542ymm6j7JnB2QkrtuJUJx2MtHkYlt2Khfzqq5ClYutJ8CVa9Ycn1GWr%2BtAEKmuQUludyqcxXhm%2BT25oZdQJ5cwOa7HCLvy9zIVvka6VatShAeo1tH7U7oq7ELph42KJIBRoH5nwFelFPg6JEe8dLuPvM0MaHBDLBFwEqRm9dHs8zskVCRa581MGnl42e8JP2OVYz7XStBXiCQN565zkqc1CexCdFGzPsdqB4T%2FPMnp%2B1kv9cYaDL7r0mUSIFXoeIjz6GMRdoeEHF9QRpOC9hB0Uwm12z%2BKAUH%2Bjcdv2ufde8dRYWr7vdtvlAByzb73%2FmThZrITcti%2BqXmgvuy1pcdvaZynohU6mOHcHbO8f2RZXVhkrhqW08TQYgOyUPACSHDSFJhqaJUT%2Bovu3a38TuCJtzi9du36%2F%2FcFhSuZRMMLyi0MQGOqUB3erLhfLSmel82qXv065A0vKL4Jcce%2FYGiX%2FXq70h5VEHuG7VKbdaKTkV2mRYa%2BryQ3pY17JN9zLRNC9yNH%2BBUx2qg%2BEri5UY4mnBTRVptJaD8tXdHjnzpV3aJeNQv2ejOe14X9ZGaavdsjn7XC3%2BMhWKPsUi2sEZQVFxhyvAjPkEBMozMkWwJk7SxFxWp27mTEL5rLIeUxABzfV1973UvvWl%2BHc0&X-Amz-Signature=0ebc4f26ac018414ca115777628018ae5ca59a2efc797231c0675386e85abe97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=5750fab70f1739338e87bb777e22e0d20b4045aeea142d38dc6be2ed21293fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=732a733c293056c59313c272356f1970a7e80884c2be348e349fc19f240bbc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=6a12b0a6eac108cae6a0e0c4914133b57a5dbc8648bb64f4bb6ea3c33ef8a3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=8c178a841500af23d31491bf9f404b2c4b621c4b4d4faac8499588fe292e2e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=bd50b44cb3a75bcf4b1c1d77397c2e96914847d9466599e1a28cb99b3b7d8a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=78a83ccc8e54db0988c32a4a3cab6aba9c1eb8684f305383dc1265bc7f672a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=d4343ab109c65b9e63fabd7519d2110df65653f74a49158fb606641c2f295212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=95b880977d48303c4112d4c4a90d6af41284b84d6780a1858c6a7d3a886000a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=c89b494decefae6ef68a5d09b2585b2397243e54a5d6190196bf0dfc20c72973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB25CLF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFMyDggxttgLcryRblQUt5wqSEpDTpOkaxUv9nrtZY6cAiBV4QCxZuk8GdGzUTNsWs%2FFmvFAStM0ctdnxa8uNi4ZPyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBurXe5xmjxfzr2JEKtwDgIHHZKh0GVd4NmlNRiyXYNelaEoSlb1EgptQU7DKVh%2BZbVRYog8AZSeWIKIeHpazpFnNMEVzJRDOg5Nha39g1KAPOIIiPgKpW%2FO%2Fh1Nw3v8%2BUQTjg7MOJcLtDFmJnUKaAjuebl50T2Niqb3GdQcvT86u5KCgmBinBK59gL0N2QMwpPqxhTCQb2tdPMo%2FTVTdNB7zR%2FYku3hJav5u7b11YJFbv%2BwVQGS0qfT9ka23kC4CZMblqFAeqX8Qg83e7E9U7sCkL%2B6IPhdEGVTXYrPl4%2BR%2Fp6HMbe3Y7P40Udp7AkWqiLIEXHWAjqdlWmmgXRgm%2FToB0b9ZgxL%2BBjcurnleVEEkaycm8X4AQhW%2BKHACK9cAmqiP%2BCaVkpVp4Z9UHdr7BkIhiCP8i5qCHqHTfAucsgihUJ8CWmIPmsM9jwU86123nwOCCwV%2BaiN5qvvttvHss74fIRpI%2FsbPLRT2fKUymsagRZID2tIzAN9TgciBKNUVi0LEcWk%2BmQiy1GhbBTY8PvQpty5UU%2BeBtlVAz2JMkLWMjl8tuqr8fgpsDKM1sISEDzrLJXQ6l0Gr6xfP3YycBLboEb0OmOPRY1gEJ33BsNdvaeBMrRAM%2FMXuLxxD0EbPSjxWF%2FBFywu%2BwG8wpqLQxAY6pgFB4GLtY1CYcWbHRcbvupjBRjN%2FHU1dGqBPTzkyBQ6mZx%2BnS04rYaI7eI8a8WeSGpqmKUp97d%2BA1gYXS%2BHliNakN9R3ah93mz%2BaZ29OagkygvgLjYhwb82UduofzejcxKBLm2apv5rS5kI%2FFHP6Jd422d%2BJIsi%2BwPxD2DyPyJ301uoEGkmtRezGKVPJNacvz1EOjuZPDUIK7RdJoHISxWTVsPb0myjU&X-Amz-Signature=8c178a841500af23d31491bf9f404b2c4b621c4b4d4faac8499588fe292e2e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
