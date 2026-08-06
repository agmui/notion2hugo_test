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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVHQE3Z%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDBSpd5sGEgb3sgxO85Zg%2Bow1oejFlcEnv0z7Qu6DJkPgIgR2PtQYH0YcVs1apVkWWzyxHI2c8ov70%2FySdlTszOrRwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDIvhUM6kmMM47gjr%2FSrcA8ksrO2Uaftj%2Fmn3ZpTd09GTe9AXCmOTyjs2nqi%2BAQZ87JtOS01KShYsTW%2FsB9gDlStM24FZ3wJE9BRze9cUDmxBXJ3yuGkyjb8na%2B%2FeWP%2FcGr1JAqZvJRzvK%2BUtLELNxJT8kDK0HgVX5moKP6omCtI1H7L77%2Fohaxsys4DJAelfiXGt4qcycdg2m5qTqRLrQl8k6wX9QyblFlB%2BuDOfxzVBIaOd%2FWsP51Q2qPwrYuKdE4eZ6ee6JH1qkQSYFlw9I6KKmo3%2F8TrNaAeDC4db5ihe4CGQJ7mnvmX6qKyYX38Lt%2FXTjp1CSQoivVbU1w6eUDZSCE0a57NN%2BJiRZldpfUmqSxH2%2BYcKIAuEhLp%2FQ8DHRw1nWomqBbyE96e%2BXrZgYd63VYdwQkB%2FZdI201lDVzAD6RQZn9Y1oGUTKYaU91HKN4N1rM1KfFiJNv5JWuCF6mpaIgCW7nEu1PtXajfJ%2FGo9XW6LeI2c5sG40ZoQ3TSOrWAjIoPoXff%2Bp6Lk%2F19rmxgwpKU%2BEbcsyzM%2BVv2VnaIdW6FV%2BH1qgOTrn%2BEfOKqeR%2BFElccCMSvs2XuK8pGeTNS9pnIf7JbArAlZZeoUelVJU7m1fta%2FYgJ6%2B%2B%2Fdrx4%2BcCgqlfDM72OEWzAEMO%2FWz9MGOqUBzi5x%2FpN1Er6y3eomttgtU7g1jphfqwzThPS4MVLOvSOq6DqkPUc56oZKQHTqn7bMS2MuIz%2FBIUoqasQWbfVgAHcxV0q%2BGe9qPGQRUBHyaLN%2FA8R2qOCmNKGWto5%2Bf05wE%2Fv9PT19FltaIWayU9XtOtb7QKSrmmSNFDBsqnOdPXbTIW%2FnFElJD%2B8%2FY2PQq4%2BvHo75nYD5h%2BB5g63SnsmV1MQVUL12&X-Amz-Signature=b9b79284f0fa7e0b92e77032e2d52abd57036edcc4c48de2e88bbc536fcd6917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=b2e8851ca946d9d881c56e5514e8d57f1c5df0640de5966ae2d07c2da1626180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=c492ef02147b7a24c739ba1588881f68233dd090dbd79d3dba432e1759c991e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=0acb161adfff4fe78b2c5959f36cc803bc9bea68027fff6c3643b31944232a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=a068a1ea92916f9810bc646dbfc689d2e234784960cc6e3f27d83e7dbed06519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=1ab12251768b7329c00eccbb5ffa018ff189f8145308ef3015ea12c113d842c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=5b00ae7816848dbb7e4f1b32a591b8600c92696e1408be1ff685038f3eaca39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=b61801e90072b23c17c9d3773d245a23a07216f7ee938bb7ab600a17fc13f5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=83c61f53e165d444f7667a2931b912a91abafbeeadf7d89367f61a69b9756506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=bf75ac6d83d86e014cae6a5c7fda41594c6931dd0b1534ad73b655901358ca2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NDUFIR%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDOWkKMGefm5A%2F6QUB93Urodm0LqfWOQeoABDRJ6I6qnAiEAxLExa6Is8VJV8tB6nzDA3LoIg0w1%2FBfeN3HSwFTU2CIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKZafUIc%2B5P1%2Fx297ircAwrNMoMiMLn9kGa1ju8DW2i72VFTIX5BMTKbnqvPXfI6UnKZaYMvYH69Z7IYtC4VU9I1B1Eq1aNC0O%2BDIuKqV068s7JmPSlSZa6EgwpWDf4nE0VVcp9apyfNrpgIcMlT7NaEmD6squE8g%2Fnlz3bHNPSAULX2QOTIoQ8SxzDPw3sUOAW%2B0iLDCyOtNrFKQ2dPcPlGdXwk7wj4HQm5RlPbfnzAbd4%2Blueri0NRGHsRRtmviMQveWvG%2FofMSVwxaOWFzkbYTE2seza%2Bm%2FFqmeKPRjDtNBBrchJV9CsSQ7dBiP%2BS679kQgRzhgHe7nsTr6F0ATms9GsTSN7XtNudPec%2BECc8UbuFLkMpDtnv3iAYrq%2BQxX5TES1sLI7qXOuK6ozGATtFf2FmS0J96dh%2Bx3HdeYP7uJ7Jff1aVZsI3zW%2Fas8fUJjiB%2BP3ERnTGk%2BZnIh9FCuD2Zq%2BUP25hjR9Q1f6r2kzlGyxZvzIQ47JSK0tE3Fs6qLJSCZPEOURNsEo%2B7vcXWGWj7%2FI8gveb5NSSAog6ZXM7UC0%2FlE0MBiOKI%2BNsh6jrjiAAywcyHF49ML3UqgR9scDK0cKAJoB6sxiW%2BsStb60tFq2pw0ZNPOqKLxtPYrcltVFR4EnEgzXOzYgMJnXz9MGOqUBj%2FJjw%2Bfyc%2Fv6CHz%2BXCH%2FUEmb7%2BnjQGq4dScTmW6LqQabAyzxuEDMOv%2FScqbFMAs2MJOBBJQpOAHum3bWBc%2F2iSm8BXWyWOSU3KVUgAtXNoTT7d%2FiKRgqP1x0KnzKLdTnmpPHLLKvfpKFhzXe2tHpsRf82bstW9BQE%2F38dPzAAPh%2B1jBZK%2FIFifWMpADvfy%2FM7ayOo%2FON0MhsYPrOLLhiSrsZA17f&X-Amz-Signature=a068a1ea92916f9810bc646dbfc689d2e234784960cc6e3f27d83e7dbed06519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
