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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LENDLXF%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1n3C%2F1uIkcbke7O3obm7nIKaobqelp0nD20wG%2Fu9KAIhAMtLz7UPfaxqL5JhKVBXoT763PVFX7MVKuM%2FZa1AMQzCKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy75IN1%2BWFU2GdfpYUq3AOKAk16poHAShelBiOXw6S9tg8ksh64PSnw%2FLqnsVkYW9x6JgYPNuG38RB8nxH3YFAwgB1uiqrsVQ1%2Bhp9weak0EygjYi56LhpgI%2B%2FFbqK%2FeqPkfwSvGvpbLStGaQp%2FqARClv8rk8xlVpwYzaIkp022g70ac%2F4DRb2tKV3O3rf2yuocIGRv2wbiEmSzKolno%2BRSOUeqbpZkGOVpxj4IJOxzEmlV53LHC%2Bi9n%2F2gDc2esGucFQrTMgPGhXLmpVVo9tVz2C8DtVhz6bal1iOAxpB3oGrWZri3CcndhHAQ3XOwTY8kWUzANFHh%2F4KADFZeuUHcvJWZmiEoEPzCPc36RmoEL6vLeLQKFouqiocMRkr0OjAdpV4cU7jMzjq9q9HtmdSPijkeTXobGFzQXw1t3gf4JrxDeYZV13DlsrPYNLBm7pEUPwjznkrdTYJVOYVXgOFtyjM4RcG2HuW04deo%2F1vnxKYxZ%2Fb5ajNO%2Bbio7BI9pXOk1uW2LlXOeABH%2Fc9LUFpz6WdskWoRqbHY4TJjVOuGENOwmdbUzlVL%2FKJ0kdSvOV9m6RmU4KIl8KsTMzVeMFV%2BP5YRKS4oxhmr5cSU3r6ihYXkJmjb2DSWP%2BBbG8ZKSXzRbx%2FP6cHgEDTTXDDt9IzOBjqkAWsbp4%2F65iKZEtI0iGchs7wDiyyRxi1Ou%2BxufeRsxrimCFg1FMwJ0B%2FLsKVCx%2BGoB5hpQIO%2Fpzsay0y38xe4U0OQN827rzOsYGRhZG8L%2B66ipUQ2EWypkAYHI1ghqETlmfG9kIyVn%2BgAVv0G9J8%2BsRFQKJQK%2F4CtX0LCziO04esZkX3ylzCASGlrNc1o6pfU0rUJle3s%2BCWNvHyMD9y4O7i8LWj1&X-Amz-Signature=803df39bea55edee0b64d2266286e9b279d996dfcf7ff76102a0c163f1511a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=438fcde20ce6f200e9ab805697b5429d81d5ee70d5d6652d75b329cfeba3690a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=7586bda49e0a21e24e315f27ba323f2fd9eb4701763bf131ee8d27a6f91df35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=d5498f43602c010e2df7b25bb4f4c0033720f6b25b6a5a2a46cb4a45baabfaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=f34845c5283e9a3c53782fb33ee853e938d7c7eb0be9067f1d7e24a03fe9626e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=2b8afb9e799ee17c14f96dcc78d164fcb354d5e36a0d2d3674a3faad623e6c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=7ea085c57f966827bf47d8c7fc7467b17b4cc826c956493f294e0e6b4632ce3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=5833578ace88f078da0c537f32cbe5e2ba246f23de8fbbd75ce543e45d0c3e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=ae31add3f3cc939c3a21e811ae36965a068deecb02cae948d1bddfbc142329ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=0f7f9f7b5de6ef40e66fdcda96d10d3148392b0c2bb5753a50d828bbd23e7ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YVO4OSH%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpS%2BdKnGvAQKQGe%2F7AQu7qPfvmVC6ANkdXK%2B92oXW4eAIhAOOmsc2VKD5wSUk1Ps2KfZseSclxpdjwwv0l7knt11fTKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL%2BycKvMCtitmGNPkq3AOE%2BpcVBoAO1uymaG8F6snPewbW1kcq4s7mTxuL%2FQ%2BgfJblQqtYNonOcqKfCXB5v%2FKzIV5NTkaF%2Frm52yep7pgh2Zpi6VydOKyLp3P2WurPMGiKiXYJQrQwapKh0xJYuCkQIfu0mBfEC9RfNhuu%2BJKufv5vsnOAXgCkTHfYBWegT388EiUfxfl7jFQRlPFGd1lOkLze3NNt0QKpGLha5PO%2FdF%2BUi%2BmsnejDqKYsBU5vhQP7WutQBq255Y3jmb25Iipk7kinK%2Fu6pBrhA5N%2B1w9mZGmT8DlETsomT4SF38C6uznluQHPyLKVZTGrwaRllrbNWG5bUpIvAzxdZ41tJozMIuRGe%2Bo3VW5l%2F%2FC9RR8%2BGT3nCFRFjmq2WNsf%2F6tjouKdZbzt%2Bu%2FHHZpkyRcRYZNLlR55FKm9K1RZtGpn6GYRoacD6XOw4gywJ92IjOs8H6ffPVqwKmAuNwcgwDyoaxsTCZj%2FjTlzjPqRdPboAg0ZvnriTguBgcfYFVZmnNp2IANV1DWCpJEWOVZTNXNXFm7HuTa%2FcTJlWriHWqZhYObX%2BKMcrnbYxQAlralRhGGQKKUVbEy9Qdsk8l8qM4q1G5Lr6aDE6upPu7DEphdCV0xSJe7an6vyyb%2FN4YQ1OjCP9IzOBjqkAXEx2Gc%2F274pbz7QTKeKovXXt7fCKURYKBLaDP%2FRuwu1G3VHdbXguV8%2Bge3xT%2FNA9bvKHGOxgSz7xDy1%2FDLfl1Gug8cIEKKNF8i0ql%2FRNRlph7FpHtA84q29PcBW3BOzwIvOBQqkCE7wWI0wXwdO3DcHjQ71Sk8SN9pvd8NdJOpT6GCwRzj0PmgIlemfulN5VzpL%2FtnN9sWX1nQwPPbKUz0719rX&X-Amz-Signature=fea3f2364959ebc66dc5e8cfd6b6bc8b763e466ed23f11d7a19fbf19ac3a55a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
