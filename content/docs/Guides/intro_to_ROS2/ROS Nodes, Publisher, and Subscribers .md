---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=cd4b292548c19a9645243123afd961a9b53b9fb6700c4ad064467b72162886f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=9ce0c149f10e46af464f13897c059ddfa635f4a890b10c927ed35512fdd9124a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=a1aa69136c8a17ba978d4bee7a027d7db01b824927bd126f386eb68396a5f88f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=fa4d622801a242d1049f4161dbfb2c18dd86e84158e1e7e8bb4efa2a0cb081a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=9d57d5355529e7595b2f29f2db46fb6043b739edb1f453a38f941da7f98fba80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=c9c33d710b251e4826da93782257a2508658b062c887af07e4c2b7f7704327eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=0c919bcb5d6e3cab4a06ed21902235c85a410a977751ad037d805803b06224ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO5C4BGV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAU0pcqStmeTR1Xd3zTPDeP7zLxE%2Bb5p4vkUxMkdYgGWAiEAiBjx7IAH%2BQpT5MlBr0%2BCVkeT2tctWzu71h8l%2BOG3apoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZhV3ycdGBF6ZqXjyrcAwW%2Fe7h3n7WyU93hzopQimwFvvERgnmCMrP1x%2FXwFuLtj33B3%2Fi%2BdhAQR4lMizyItf6h74Y5J3f9z8FpnzQU8kJCWlBx2RLlDQ3xpuvYKdGpKFvmBjvpUNemcbrF9JImw1aH5RzXLHLlhDwdWalvYMK%2BQLPMyC2lX4lR5YWd0sUnHAmhn5i2v%2BEyKbW7WDIvkb07lovr05hIbzwFqTDtmQZ5W06kEzWzerajpC9B8nqUm83US6YuAZH%2FGHayJ2BCZ%2B9EIs79M8qJXRK%2BHXwADvYBxGgk9b%2FUpEpn9VssiRaVHNTk0HxD64ycxIl5r2shy%2BtUOQfQ4jCNqCHxXq3qeFHZ2hRtpqs4pR%2BRtCnsdA0jKdQ53LplfjIMNq1OT30Dme%2Bkr3NQpGR7jpinY5Oaq3hsXQm4VCcJwzZBiC4MMvhO7JbwBwFU2MrIBrlcXMvfM1i6Hd05rY1CqMhtXDruScTUtNcPcCemPs9Q36ed6BKi0G9dQwgoNkgkXi1aeKgaVRydbR79mgYD2tV37Q6mD%2BwJcH8%2FhIXvd%2Fu%2FfvcEQjV2HitBZxp8vurwbd%2FZ5%2F9pEPAs6GvAMuZBsO0UJPlXHJdnsHsGvKL6aCCUsTP8F9oucVH2LpFCkTIgDrDHMNmjksAGOqUBOrB0SdbWULBEiSaNoUbp8NMeSaHJddsgg1GzKqlU3%2B7xs6cn76PEaFFVEzqYB82Z3qvBxEIEkfavsyjqiCH5Yl9kwZA6AO9MFAubOlog9iw1HFnzCySp0t9haccNPeXXIDX4Eo8Fc90qV2LTvqdYFm4HHOL%2BPFeXowbY9O4GsPauSCIWCuKXOn3xDaFWuPWog%2Bqc4UJU3P35tkbUo3%2BQS5yxEF1D&X-Amz-Signature=258e14d294b78bc3499f313fe26e23f0d381dd9d1c6d8f142d93fd1c0ead74a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
