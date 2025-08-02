---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T01:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T01:09:00.000Z"
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

TODO: check inertial block

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

    ~~<inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>~~

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBSVMJM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm8Ii9%2Bkvqb5orHJWBonPPMeoY%2FIJxKJhNh58PhnGmdgIhAJEMTzMSmEiCOhUU5Rn%2BvZTfJ8FyxXU9FnvU9XP4tTGUKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0U%2BZyyRTgMBzlsmEq3AMdcYaViKej67xOi7kgi8q%2Bx1J6Wxrlj8ezUhVD6QD6l4kvbnZr8C5ac47%2F%2Fx3tbfkFUlOzDFtwphsIPVhAfVodKW08yR8PqHi8VvzOmNIVWy7XniXqJavY8yXU0gK909CJukjPdSOdx7TqTW2KtsSMI7Y8Pgq0ac8z0qzJgDU5NrPIhDqiI0iGEfjRJD%2Fh7%2B6iSAxokkTA5de6xFQlyjieck7HjTrNcI1UQSTVeC0WjgL38s9Ao4vaXeprjTPlBsxRnr1VP15KqN70DdCy5P70PCzd2pr0y2VCkU%2BhKxpIEBxfoqxrkDOyENMWxZsL2RnLvZqvm8L%2FKtOAaXeWpjVYSNo1kQRvBa8cIXRtjEl9zMO7ho1YewJYSc2WWDGdu2RD38BwMx53DaTtoGmH24SD3b44a9yQwb7gmpnW0hOtamuKVQkRTEiCVw0BEe5xxdedbQfv7IrD7avLBzoUZKtbBiC7fd8mL0YrbL%2Fp3Z7qfen7Fren9zbaPc520sYMJKqvsNi%2Fe2CDH13FvcUuqTXKJl48%2BjTgQrGivz8B%2BUSOc6ndyaLFA5t8yUP0NsCrRFYQjt719wntDSSz0BnFg9kv9Juj0%2FEjPQTUbNwcecx5LhUXRIvaA7zXvClElzDunLbEBjqkASVumy4WwSaPnZJbbNXSiS4MaqZEOA7e5vbafqndfb6MMJCvbJpINrJhNji%2BJwF0Pz6nH2IsQJCC%2B%2Fr8HaYjRhIEjXpHwL1B9Z%2BbaW6d49uVVp7hbbVZh3eCmnkT0Dh0ifDkBuvE8TtLLDdvPlb1bqFuCzXMfTg01ihNbvusI0cp52z6ndVD%2FuAbM3DyL%2FRmqSIed2NLztpVhFcjcHyq84CB8DF0&X-Amz-Signature=ae3c46f8e1f5bc3741cc4e31633b72adb21561d48ddef76cec363b23aa8c7f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=d80ba5d7d4bb3b73988402d1325d13c53b7a7fcef6d785c8c244ee5b005df09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=9a0dbd264cabe34a6b0c9978ab505b2f26f9939f88a882aaffb795fb91322503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=ea61de673276d78a75f21d476da4e32f33245941a90ae360ea1df76fb91473cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=910372e81702adbdd51bba19e88fd87f5b2ef72e76c5f58d34b293fbd1c9bd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=85ba34876b5ac1f33600606f35c837660f919b78d2f31b8e2c8b743a93a4865d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=5abccaca004478b9df28e387d5b5e3f94edb06e6ee1d35f468c035c07efbb841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=8a60d2947d2d9d8f3f773c34c216cb0d6f720dbb1531cae88560f6999cd8b448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=d17b84768ad4fc78a19256064bfa63f6b8125c82c81d9544606ed1ee7878ffbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=29e53094c611cd6efe8fe269ef98f65fc0ae6a31f1ca6c80f754a269a12e008a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGQ463C%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXAuGJ9u7Jfx0r17ekTgUgYWdWAFfvPpNZ0KBJatOQVAiEAg2k06r6rBlQlGoB8Lk7kGUJI21zRlPU884FONtN9%2Bb8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3OnzUESdtEUPycrCrcAxOivLmdY%2F3DuBVdRe6KenCzsvviwdY2Hyx3chbYs%2B4nI4o4eemp%2B%2BJ1RhZntPIi0wXbsYL%2BeRE5gUV5yC8xgoFEAIF2PaJlbncsJWoXgKjMjmrcrBdong3AFdu1ICq9xnrrYG8eKCQL%2B3mRyfKfc4IKqG5wzhhETto%2BJM1OeaMstdvYGGHA48k0cCKDfRYoJGT1m2GPewYCvTK3Iu4imSXrlNhdrh42U5IfxtF4TaSMJJDjQKZJFg7WfJb%2B5%2BqqCKWJzzyRu9AkWrv33I9o7J7s%2BLTomIhtYzjeUrzFh0%2Fxj1HvAI3c%2BDDMKniIQdq48UR3Cr5Tk6N7k4Gvr3aCJyTx6ZyQ2Kg2rtwZ2oPIocfAphb%2FWA146uP5Lvrba2%2FkYpniMlo5foI%2BHXC5kwwdivIRUih51HDB7ILVW2O5Rbquyv7uZEg67U05dzpFBJdcXs0PuylrcQ%2FtNlB2RzsFvzdxZWBB1UxrwrcSSJfL2shW9Mg%2Fqqu6u4CQl4aA5XlKQ3TvfDlKIL8nbvW%2BUUnR%2BhhAAXWjDwh6nO1%2FAMu6nnbKMlk0%2BTiXw%2FMEbviCc49wfbX058XzhvgLKibJDARrwntLN7ACJFDRYuzJvtJoMclz5MnWBOwq%2BoyAA55wMMictsQGOqUBsk5yi8X1RvkcRjI53SbVUlGOHsMUMQiewpmDhw%2Fk7IulH8AsgEva42bY%2FVcaa1jwhNcwIy8Bbfo4Qc4IV9%2FrATqtRu7NjW4VCf%2Ftf3rJsaxO2b3f8YGwZdFnUJtHHyVWV0bfdTYdj8BuBuN6uMgJ418I88VJP8So8t%2FWPTfNeK1%2FBZm0MUcfViruFECBRWMUgWKxBA2jhHJ83YFzz8duKsY%2FD9jN&X-Amz-Signature=d44bf6253cd8a8b4dac72a2db7546f400fef9b28c54bcf76516a8751d8ce6c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
