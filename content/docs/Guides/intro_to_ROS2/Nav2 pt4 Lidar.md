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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJ6GXQB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDbQf%2BMJ3LAse1nTNyIc9uNQt%2FqZghC2jY8EV6f%2FbFxiQIgHn2mvgAQhPZC%2BfpICfvfzhJNW1cFk2cBnpU%2FiyZjKXkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDINyCbz0W%2F1zjCcAOyrcA74j8VYwaLARpXkeXcw07bUD3A8kZw8Zo6ifVyr%2BOAO6eiV%2B3aRZo6AFnVo61UGBTH3hWuHt6VdDFkaaW8NtO4OIuvE9ViSmZFmbQs9mR0X86w28WKhf6A9G8V%2B%2BsEeemBg1DEHtfpWW%2BK4bgj2ZPPUv%2BpMPBIvQ2dbq1Z%2FV9qLqlaGVqUHLyX6LVTBmCvHGbyeX0X2Nbi4NLg7Q6%2FwlyCenbs7BLI6cqsx%2BDMbkqEEe0x9r114bxbjTkSx8HduPmPkKIwdBHrPKTLZFBYyIppsqKBfHuBWHpG5pgRh2T%2FFg1HC883vnjWKvd1AkMIrKA7oL%2Fq2PdvPiVnVisbhbEqvmGCp2A5hxRYHkFmY9wkLYJe6ZUrAFs3BfxFDd%2BvfrttgmcaHFKgyGJe9EOnge5vHnCWVdicz%2BJAKXxXz5jW%2Bg4PKT8SEn4cwTyiHDrtN8ssrPGbcQy%2BXBExcFkpkPIrYovz26KKCiNnYAW2dbExmi3ZAbQ7JjzAwYaTDk0VPbtcthZnefHxEFGOG8f%2BZzjxDgIJzST7YBPp3iZl5zFRzoFDDxd9NnE01QhjU%2FXQKGuwkIC63T%2FoYPxyC35%2BmJmE%2BASVHoRVM97ShuNx8TPYSjow8ZFcsiAIQZl8TxMLyVvskGOqUBq7XT37v11y5MAB1fnip%2Bl5A14rfbv4eqxyaa5PockeLZRl1LjGsoy%2Fz%2BbdPzKrIxtPgl6jpBfAHxTdwRMQyfpfFIgxlMJnzjOxDedHGuTEt4DDBJ0%2Fr%2BkbVM3BBNfWvwjJiGSMLKc0Ap%2BLVCJVjJrGpXbtNJCSJsojAxFvwl9svTubMPWbuj5lHrq3jPLEcXt1GBk283XhebFNmxKpgk2bLNfada&X-Amz-Signature=2b8fdd16f211dfcdc06b6ef601845485e860b70a11c0af706be57e97ef59b49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=63feb7574e0f3e94633c0e6f193e9f10291a77eee4b49dcfbd38291866adb467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=13a4f0552ce62ed14d834b8e56f196702c79a51da3672d9a66880dbb3c9e253d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=3a48780f9cf64045d3d12f534437068f98e1fdfe552ef5bcab902f9f7708f581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=ea7a944e59a7ee7302307210a274115f37ccf350ff6344d2f5457c7afbca6efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=3a294dc70265be5ab390059e32a7f2ab6149d7f5eaa0acf25d73b177292a2d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=b3eb26b7c8ab3413cea64594e62b3aa7625220335b9f4e72ae1bee65588dbe50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=291625c4d81860847f53a9c2b632a9d68cc7b886d04034547116001bc21e24c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=e13d0fb14771736b0c6ea047298dda17dc46274b31488a3aecd9425165bc8baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=5a0fd302118bc3b0b47f947c87a478e061c2e4e6c2479d884b429765cf49f77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MUKLLK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDS745CJ3Ts1zxVWLsf%2BfT3ab7h%2FW5jkCeGzuHnLCMFvAiBlW%2Fj0hNpNZdMSifXZ9DlgCnLYTEXTj55DBEHBE78C%2Fir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqXiLPXvltoD54t8CKtwDjqN9xGjelzrfZKKUR1Xe0lryTxNiqBq%2FmpmPsWiJ89JDIcP9M8g2jQKBxzb6NHLW6BD%2FB4%2FWDFyy50cpd0x4nJZ8foEg6J8ZkXaj%2BWsAzgERqQWPBLetmwjCkpbxbSYuJaTxj9ofIYVPnoZbIAMb8VBVjtTVWNo5S%2BpMjWEiXmvfi3cJq6R68LwjQexXxlFkiBjc4PIL5uW84bopQtYemv%2FApJgLauRY6lJOtc2FHBprGpLLoP2DPNC%2BxxA38mmRNpGVVJzG0v3wb9HXo7cM1IKIMPupidXS2BEzL1crS7frtJNL7mVD7fN1x21FN%2F1ojO9AxF79o777r8lcW9d0yz61GvIEdl03vti56Dz%2FLWIzxsZlUEwM5YHL%2B6dNTfMwcASnxH%2FgFS3dfc1hsUsrq2HzKHByJw24PPe6FDxkP3HJyAsmh2KnCBBhvz3F5bmnJzLcprpWPf22ysPCE87UGstWRydQpTAUBlXp9OA9ncL8LwbGDTQ2XmoDLrxFe%2BuYPQZy2xDgPystSylRBA0lk3Baa5500n6i6Xn6ztOFY7EiU2L6isR9ZCRRnoCCL5gI4PPy5QxJ7FB%2F0is%2BEc9Gp47V7E9LSFm9W4FfrhZrrmEtJ2l%2B0f7cyiQ2coUwp6G%2ByQY6pgGB6hapAf5C4vnPGYLuNV74DTvafW7UxARaZSY3jYYWyvBR4%2FTdW8COgNMRlhIX2pPDx0XKnjUxt3VEz32ykj7WYjO5RmmXrEmStciObB0y%2FK%2FH8MW8TY0zy6Rb0gBBKxmqWA8h8XNVtNwlK2lK%2FRwHGbcmsqZyFFnZ8uVPeEWNOE%2BaTi1nKy9GB0vVZV75goGJbaFkXjQEFzifa1dN0c786gtnlo%2Bf&X-Amz-Signature=ea7a944e59a7ee7302307210a274115f37ccf350ff6344d2f5457c7afbca6efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
