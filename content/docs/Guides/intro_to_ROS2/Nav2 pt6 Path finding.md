---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=e8e50c159e7189d10ad9ba4c2fb252fbd5348fb5ebd7f6978853efbf08532bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=68951325a935916e3eb079013686e10275490531f30b1ea3c5f7e2ba74888848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=ad02272e877be4c5026ec7b8b3d936b47e4d455dda3fad602a4ab6f969b5ee60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=c0eab85ea72063b8a861073c01f48a9491ad3d178e839bde2fa3d1a3a919bf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=5bc2ecd413a2e440746219e16f5ca5c4ae14e0e49344dfd5fcae8b0276c80ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=df8fe23b25f4430c3b9263981d4f50738d4611997bed191503753228db467740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=497af19b88604a271c7f1477a0757b2d204856987131bc4593ec70edee890b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=4e6e095cd94dfba73c9c0741cb50e6ac89cf2e54fcb79632923cc3fa22e6edca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=5458610b406a9ff7f398cdcfecab66fd85cb62e29b391e77f0aca25242a35d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=c4556cd6e6db8271417f36a457d558d0a5fada6752355b990af53774e3dfe99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=2350b3550c425c7cbedbaa613fcf11b974a42862fbd29923d688f1c9a270c737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=44d967df2280ad69a2874ef32cbde096950213defe5e4c4b32929f0acde784fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFUPZ2Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1PMv1HWLATfIxKLRiPd%2BSukCXnrw0zHIjDLkF6j3i4AiBiLqm28ReEfM3OTPzubxMYpLAEeL617lHgH%2BD0WW5%2BkyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe5DXXIb9PJb0tLeRKtwDQAjNZVvbwT%2FHmvI1s7xaEbzddTJTCkMoGo3SRb054n40zix0PN88RlsJ06uhvi4Z29jNmOJPzTQNrHcQMYMFotFb85%2B%2Fx3zoroyVp96b2MeUxGQQp1SHeY3n%2Bw22mwUEyLkFxcH3M%2BJScywCZXOBJEZprl5Ct679AZkKWeX4I2SSlihFIl0kH6Djv0RzSk4RVIVyFSKKfl%2FOKbiHlz8pjsy%2B1xaLcIRYiFQBe0JYGQbh008Tmux3HmokmPPTdv3YH386N2jfopIjdfHsv19IOjHoAd7TQ6X89%2BUK3vv2pzsuIJm84ueS7KOhKEt5EN2wAqICYLUstONK8pO3JfeJuM5XVrD5DVSwBEpo2ECvnMoBfphAuG8ut0bIsoCjR0J0UuqhLbiAxfVRF6TmMCEm%2BFw6Snh%2BAePCnWeLi5tXS2e6s16j8no8ANxhqGCDlvXRUk45kGVP%2BH%2BoZg4i%2BkchyQg3Olelc9mqSmkLTH0vLLrBz3GBp4lNakgINEeIKk4J6ag9hfpZCP3oc%2FKibCjp3kwlamanVTHC8oxxrUOJSMmpCtZb01HAW%2FaR%2BmY66GsKFMU07hHOMLYi826GhFARpMnRYfnGyavSHY%2FdU%2FsgF2OVEB7Y%2FClKQdkT9xYw7b7ixAY6pgGM5gFMb%2FCvB22YxMPmynL2NqDIyHnvtnDVxo7ei3Qc8q4B0AzylWQFMapr9Lpe%2FY9a2n4vkpNVDDyWYEy0uiRL2Mv5ZzL52J6Kusw0Mo09aD9BeKsq4uUDlCDLdJq%2Bvv5FgdOyScpsH%2F1smQSFcDJEhSWOz0c1NEVo7VOXQd1lS5l7JMWo08jEQA4FFmHD%2BwWYcXNw5u0nla%2BIsy%2F2owhlb7ZiiuXr&X-Amz-Signature=d3b21530a4da9d67bd415e7342d33fd60282c5bffed93fb89589a584e7f276e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
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
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
