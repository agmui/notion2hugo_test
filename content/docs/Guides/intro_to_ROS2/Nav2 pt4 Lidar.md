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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYF7GJS%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD%2FMduCElrAbrOtvEC%2BOnbye5C2MS0YkdNGrxjCfSHL5QIgSCjS5EaWKb92jF7EAICC5K%2FHhIN6JMFrXA3uXIre95kqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwkUfW0fxkB%2F0zBOyrcA4CTGYxGW3UZ5NpGgKTqfQCtTAbgmDOt1dpET%2FXPb%2FLd7Pdd9LThmdrTocPbn75by4bzaNyGWmsKDPK9wtxNdHvefnbNNcVaZrA48E0DrTMEV8kd1I7tpKKMhHtcCxjTjLWI%2F70VCAMNxYxXiSAUKlv5vZVRWQRRRoyaUk9%2F3VqA69o%2FtYbD7us%2FUyMHC28txBmCdN9%2Fq8DwwKqOylvU0q9lQXxLxh4P%2F7OGZ%2FdfmbhxwLP%2B7krdFRmGIL74ve6bMnJILPf3Af%2B8PZf4E2TnbtzarJbWeOCS45bzQGiCtUHHI%2B2qppaqiN5DPci9n6Ur2Io9uO816NQQdBkCUvTwdPJWtBXc0pq8anczerszW7uhah0paOT05fFjSsbcXp%2BbFxwIZedvp5659Cacdy1KlXF6xkhQFBh%2FF%2BGUXQ%2BWR7hZ%2BQz2s9nAgG3KqUrjnA5RHH3pHE%2F7zOB9PpxGPD6tkanjICa79rK3mUeMg9J8sKguSuhA323HRJE5lBpQ%2BKnfxsdEeJAhoQrWZChpe0gEziyWjiiBbWgWBYKLPkODWzit5mVLCm0fv%2FPfPfFQq11fNIdIOKTZp38fbCPoLq6NH1g74LhhuNmhFXd0FjuZxajK%2BM%2BM9Y5Ep%2BXgIe7oMN2Lg8YGOqUB5ffor4LpHxdXkSP72um1g5%2FLfrRFymOQbi6c0Kx0nBLzH31P8oUH%2FZCScTKhMMrKPBuum1u3ppdx4sjvIW75Z851AorOetmfLkett0pfPTlwcfaAf%2BymSRoRJNBXesXykR8BBjxiVmgFv%2BNRNGWkhs5VkFKhHQkhSlKVDwHposLuEgB5E1XZy%2BrHVXSUzh16K0%2FoLp5V%2F5C1b2rSs0B1634yRf7z&X-Amz-Signature=7e77bea3bc3eb3e2aad6aa6537b8840c8fd9664699d7c044a1b3cf98c35e1a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=651345d10ce38bb8333a021fcebff8f59efb79741c02e28f1521e622f526b940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=6b4904e36b477a9cb00016b440eabfd460bcb9e3a26945ca8738309a142d8f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=d37354ee6f33376413c9d72088b3858b115048f07575086c7fa5d5637ed99d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=0fe1526350b0468f8e51b006676f841e701618708679ff0929b62479e47a6a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=9469e687663f54a57c62c2626ae2664066ac4aeac52675d81b4d7578782bd60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=a8e3c79991621b03f0349e077678501aecd7be19ab4fcb1eaa94d9766120ccfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=904c29f925bdba6f9f84f61dbb88f4a5d338f79e9abbde270c52fbc69d9c978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=79e2312f256165520fcd98a561e47dad03e0bade1074cfccacd7209f78455065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=f883ffaa9079765ebfde18485103cbb35fd72af00e773840f3b0a4a3ec28908e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMQIGPP%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC3nzXgiYAPNsj5QD1490jo%2FpE2ZivuiKhLorDYBc%2BV7wIhAK1aOvAxARR6sG9y9VA4efG4bgyMjYV5Rb4iC2tSPXVbKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMw2h0zPTNnisVjQ0q3ANx90gID9O%2Fo7Ii%2FLMTBbZoTuvPwNElw8H%2BnHLhiZYDQ6crGWKv5xP%2Fcbah7BrYDf1y2Qw3rjXdN02WeWD4ASAWX6Lu9QDFYKoy0ahLh1dLH02bd2HT1hVKYvXnv1uvSfv%2BmSyTWxxhZf29S2t2ccRHoLF46IOnqDOtcuASBr7jYUbscQfK38Gw6eJyAwEXYeahD%2FrZESZcWh56v0iY2vNGXec9xfk31Y2YjQUEm4mjH6jGGmdwgz7pU5D4nHFdkxedDqe7PgIlXaApiKEjqsueeFce6gF6T2SRSL%2BnJPUHhjILgjJAzugD7oomIOpHMyO9RkS%2FTMyv6SEBQEAfvZTItWP3lhjWFXQRqYFA4xsPUWFpFtu9MgNaIkFRVZXtQYtzRMDCdDaaAClo2grMcI%2BVlyFgWo5hp9%2BLrreY8gd6MkgfXpl5niUUlhUAgWCpyK6dB7wXxRC4XJfTFnij%2F2ZYKm6A0OysfOkLMRo3i6uM%2FpLfmX11kNBsqRj%2Bw8pNE1tcEblaidyXXimcXIN9SupqzLIKSexz2KlYh5YUpARvQcUN5i4sAnnTWXzsNfJcae2lwvHnMNzceiu5sTJpRXNqpgnEzjYyJ%2Fz3wK3QxP%2B%2B7BG%2FqQ0sUJQ4umZm6DCsjIPGBjqkAWC7CrMrm0dPi3m8A54nRX5LZAD2wc21KPCgMvdFCX8XpEkGIFIuwq41m3qsn8VmsBVFITVLyh8BYbMVZU7znJM2WLcmmfiKc8i4Apjg%2BXaxfAvku7G91mFl1PF%2BMibtHIACLougxJx2W2Hf%2BoDuDAgYfCdH40fw8JPDoAhztfS3j84Qeihd1mjoip%2BG2%2B2LS7QBFIAZ%2FzpmbPJ2Ar%2FtEyZGQDpn&X-Amz-Signature=0fe1526350b0468f8e51b006676f841e701618708679ff0929b62479e47a6a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
