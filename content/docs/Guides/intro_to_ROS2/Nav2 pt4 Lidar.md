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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZLJQ7T%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCG3pxTGlHO6GPDWxRozTdIAUAsB2jcDEOELSIPfoolvQIgHQ%2BZOUc0uxch1eVZAv6BUYydbz3KZjnMrm16vinclfgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSLF8yTpTx1IS7NPircA%2FEge1OMuI41Ei0TXGX1iYrRHTExYFXwhSfnGsy%2BgYgz%2BGIOajvmhChm6IZ6bZqZ2PUKcxb%2B%2BdgagkO4QCljUhT6rGSf%2Fd0Bv0uYAwO4%2BzHGkt0zdGNFVr7t6o4EcSTbngfjnJ%2Fujk%2FiCMNoskyWWkKcAF3Z2zaEUP9R7w4H57uD6tMEO9TAlGEfdIdWtFPUOjvAOTOAB7Nu4nIHA0QssNG0I1UAbc7%2BkKICGJvULQrKt0MSHN7BVM55lySD6heYJGRE38nezCKQ%2BjVN8iZuwf0pbXe9vSLI7wElkyVUYLf3eMNjSRAWSyDidvGpbVgRUsICTkQthX8%2FIKqHciOGew5Ly1%2BwMg1S18D8xxDjuZnh8um8zVG3wphzUZO6Pc9ZbJZDmr0B1ixp4%2FmoEnIJe9f7Wuoc3MHtmPmkpNV6ZQ9NnjlVicD4craaYh6rrKqFAw1EKnlw83nTtdIUNDicCnVqXEBBuU%2FsJF%2Fs3UJaxl7AA9lAsJCpjRDJm6G0tVWvuDxpnD8ZWM3xfK5RIrP%2BWZR1RJgjQHkcV3QceB2feKkLhxpL0aky2u9csTk097rp3%2BX9M3HGLr68jh%2F63vFXNNg6bLbfR52r2N7hDEh%2B3qItEPocxYoOPOOVj%2B7%2FMLPJkccGOqUBZHG%2BzYJJVXRtn8kgIoyi6WLnB75FP%2Fgfhzpw92vfgaoJXtHgGVR3OT51V9NEzPdJPoOmeS0p1o94K%2BYdAm2inv%2B5QKY%2FL3HCLLTA4jGamO4Sc8Fj2PckcV4LDYiyFc5WCuOYucMrbYJhYKBeFJXiv4QklH0mpUKIciOOsUIXgXvxN3aPVMB1%2B0O3ueBPVoELzkyR4OkEGC3mCPY8B0xoLJ7iGNYm&X-Amz-Signature=d701fbb0c9a8bacc0005101c83767250c5bbdb8196c9514595b41454da4f427c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=349480ae8c60df15e2d92b817eac8d9e371e48cfed65710b63b3cf7a2bc88153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=dc5ad076220bc3de2cc14023fa080895226b2a5e9a9fd17005c1a73f4626caee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=716ff3be30e422e5a767551b2e6121c587ec9e70c8b0f5662933bf8c750929a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=2a898db1013e6629370d3f43c01932d0320b06d906ce723dd84a3231738ce96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=07eef85bfec343f93a482eca08e1b7fbdec48b75ae97fa36887502ea22a84a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=8fad601b7331144d2233d29a202deaa5e6e3415798aaa0ac2b8f8089e91fc016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=7b50af64bc8050406aa6bad9a516d407713dfdf21086fd30da51b2f0b13d364f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=02acab648eac8fb905ee33102c3b81a7e946c53a5a291245a397fd445dbb3238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=54c416d09fbbfd7735a70b7a3502bdb92672b0dec30ef683fb72885c7590d84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MLOP7KF%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB09SprT199%2FUoSfvmVM1TfBje7tTFcAW2VXvE%2FJVaKDAiEAtqeAd0lbBSjFVHJsnAV50CunxOvECGA4ZqkiGZFEmBMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN%2FGkTj2n3O5dI6ircAweEXIelOHH3K%2FXUtShHQNXGQ7NpUSZORxVMd1fQYlRZ2wPcPnK2oMqO6pr8Fhc8NMaAIfMM1mbC2bzrprmzbWKr3kR3r%2Fv1CJnO6Nr%2Bkan2qQtGYUcl29anqRWFF9ncukVlBl8aL6%2BsvNGM7MJ4T4VDwBpWPJweKkxNfKYPyW%2FngJbiD00aAoBQhb3AD2Lr1EMs2KAs4272eIVAgNkG%2FaHMBLDRm5EcZOhW%2B4YwZTTvVUDyqkES3ifDSLMNpi5oNNog5QduQ4NeCnXJ0zNmG5JjtPr7kuPvs3krEKz2slrC9ShT0HEm6VyuVP%2FniMPxE8ni15e74IL2ZqDp8r9s1rUyZHIhTU8XCqLdllN3vOmjxITBcu6eZqE6dDhtMqTUupdhBoobwCstm%2BG5I8F4MKT4ugh56HBm0dWl0izWONECPk1BDOF%2Bod5xvrWYoknPbNqK1G9yX%2FXcVLhBvQtTa8gH6U%2FhDBIFkvlw06BgwSOn4AXdqHSWtJSEuT%2BWZmVAtf6t2pYgb6SJNEEpV0ZMVopVp1ThVmNmNfrSQ8VED2uMFXb4CGBLSNLIFddsBaViYhTf5eSKGnOtjzazue8JAkXg7nq218Q54derw9kTb159CimxwFIih85BFAU2MMfJkccGOqUB%2FrsGRg40kFp3Ro%2B2rsZL5kM3ISxFKaQviHi%2BUwodbTT7mL4BOe608VczakOy2KqC0coDpaW7xgxRSivkLrH8PSVsfaVxWi3G0drBYKHCfRNoLhOsJ5Tc9YxhlKsXpn%2BxV5z7Y%2Fua2jsfj7z4e8vuVr%2BAqOxYt9Lmv9jaK0Tm4M7ayROaXrt0CYZ%2BjoANwDfJJL79bV0S4ZjQ0zRqefFD71AcM64Z&X-Amz-Signature=53d6aaad9e46a9045fb343e0872bfc30db019b2a92609ba01c8d80524cd26a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
