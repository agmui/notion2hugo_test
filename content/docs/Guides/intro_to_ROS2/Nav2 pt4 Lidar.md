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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZESCUI2%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9cWTT8RnKSSHco7LSPRzmGwcc33LnV%2Fax1g5hNdnjhgIhAMzWiDPjNUMcuTvzPe2GJ9uREwzJRZswESoQjm5GVr0wKv8DCHkQABoMNjM3NDIzMTgzODA1Igwqyrb8ex2T4ZWbvlAq3AOjblp91ukRLSHyXON2vD2aPpE7HXYWF6gJIhp6n09d7OzmzdzNZxIwfMZ9vVcjEjUYv2tQvNpvSFtxR6f1W2wJuL2mYcmGMr1pzb2MBQycYgO8652LjC8jDq3qCa8pZ7CeAaDnBx%2FMIe0ktZdC8arG40EDcBDcyUHkjWMuoyOmLcGWv%2Fso%2FGvFlvNixzWU9DcDtP0u1Huy6DARHZ9att41CIGkw36YZNp2Esjnjc30k9rxBs0OrMo49wcxjhipIEw2Tu8gdfd3OVK81AUtvoOj8CbGuW7DpZTIqSIOE83clRwYV4qwBEQqn4%2BFGUlduhWmBiacgSzcSuE8qdLtf1t6rZjYsBKiqe8A44ioUavdpTnPyKM%2FscPIjhp8gQavSPV0IXHp3l8Zi%2FtW8HIZFehm2NMU%2BCo8ZLsqb7X8lHKc9zMw5MxbjdTjb2UUCFFY8l1MuYLYZzxz8QrfhCrBMf5vHl9JkMzLZOqlraQ5AptDR007AZtFwKSJHWT41hkjYWLZ095wuO4DLTNJs4ccQCHNz3adaAjL8LxeErR7RQ5uyQYK2w5egA%2BqjrdX7t%2BG6ki9gTAauW4WTzJleaMTW5OjNJz3rqzJxQCdgXtNwTkoV8ij0X3%2B6ct2FhQ53TD15sHKBjqkAQmUwttuVDcj8XIBrYQPzYdCu2y64Jnl2Z9sS47w3ssQnJi9M0N3p0L%2BxUh3OiOadbeTkvGSgtcbDRN6dOILlk3UcAcm93jNI6ZRBCEe42tn5AxZJdjTERDh7nzfOlFckMUTM3ZI%2BeDqPNflzCUIy1FToBJAhOKERHN604JTJdqKeCsSW%2FmrYDmi%2Bnq%2FhXLfNTl3QJ4m0qE5VkkY%2F4Wnhk0D4TkK&X-Amz-Signature=201366d41878f0272482af010ce87afc6e0660fe3757edddb36789c8d3ce4ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=48966c1044177b38e39c96067326af31ce3d70490f55b0c420a71edc16ee3bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=0ed56c11dcebdd38dd86baf8db598f67d9b21cd031af9db4976f614911e9955f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=8a14a48b8d0c4da9b62501eb216d1bab6b1ad2c84ac90ba8f30ad931751bfb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=bb865eb3a8420ce8994995ef495f53ad1a8a740201ed26ad657397fa3b06d246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=6230096ba4b91c012174a2966f5e47d754f7e085399a17c83ead021915a66c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=6dea87685d6c684a987e49200b061b149cd4704168a3da0e233dc14d77e1f47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=e3675e8dc6baca21028c3c1306220a34213ec60f6883fccb0fdfd4271411b0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=e6ec4d51ae10fc973433f58b9bb598472c1cbd78adec66bdd04338aedecb5435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=28e9106cd809f170f6c36cf29a02f895187d86b954c817d14e465b85db893dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUWC3MCI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfn10idf%2Bla%2FwlD65jrlrMmkewtVhyR%2F16C4m9mohRJAIgFtTc4rBJh0toroklBRVvU5CYzVMHbn7YvDCmSNxq0LAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5rjD9kIOiNmrvO4yrcAyQkdzlV8qy8nR%2Fe%2F8UvkLDMEcOmaK6ZyAuMJlBo8JBucmy%2B0m2rSAs0w02ZW9g6u2bW7b04GaWCOe22olhRaoDkEypMgEIQ%2FIiPMXh8wOY1eW5RQ%2FLUrWxBQtX2KMPVB0AzHCsM1d6nued8s3bcKZfT%2FZ9nE2ykHuwxHij7O%2F74LYN9iO5FzpArvgnC80zuOzTt6J3%2FiFDvo0nFYlL49mKTRi3K6rRpv%2B0CqpWfvDbKFp1LEVrucY57LI%2FwSBFcfQ%2FtBKGXbyoti2gRi82Fm%2Bs5fm2aM7ShKa6ahg9SGBHh9gDGB8U61tBWm5EQmImKXN5PrkSh%2Fm2y9%2BVKEF%2F8%2FxaKqHv0Va8p69dwyyaglfUEJmkQwF5NmRM%2F0XKgkwPXa7xKIDuyeRJfa7sfwXCFK%2BSJWduoPQMzU93D4SlNRe4nTdgewoMi8yMBaAwQlMbpavpbtLXzHws24d%2BcGgEF%2Fb1N2NDb6gBIZ3NoNt60LDDeGGVYMsQAjPl9Q1IrjQ1sEbHVkw5eqca3R5G6faNpFy61Ap89HWfKhRw2A638o5kjqCKCDZmeuKw1HKFRCicV9Pxr8ixxkq%2B9mUHbqVy%2BIEoa6QzoX3t6HLEMo7ZPwPRXxgTbIg0W2tL5sSC5MIfrwcoGOqUBqchaIkvawy0ytg1KXaIPE%2FzCudc5PNBXShuT%2FylIwnhTusOFn3BCxcqVhIisoPMCK5CNB8Nt%2FJQ%2B%2BjdFQSm9s%2FPZZfJzR3hTawR7Jj3ilP%2B85XqTsWWWxlqoFDz8VKh8G%2FciMRezrnJRBjCzjXXn6tUuuvbAoaPDLJZJaFjqY6LzpngWv8AHInpbOBOaxt5UbDlIsBCyW9rbV%2F%2FtbBSSGBDmBAl0&X-Amz-Signature=bb865eb3a8420ce8994995ef495f53ad1a8a740201ed26ad657397fa3b06d246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
