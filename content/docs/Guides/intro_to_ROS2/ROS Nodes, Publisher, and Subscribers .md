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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=0a18707d98863fe379d487d716fd376b84a51431fcac36a624aabc8cb874a6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=d6579640f2ba77916bcd72ba0cc0ccf473c19e9d544c98eeaff9357c8593f6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=dee3c7d2bfb33dabaee5a1d86da81684df8d06b111489b822faf121d1c8b0d33&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=c16e2d49bcd907208761e2e6dffab003af28ec6ea31bc9aeafd30f410977591a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=cbca0efacb5d5f508eeb6560606e0d60b48c0eb9a82fe678abb64d38912ce467&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=aceac829d115df988c0bb02ada85b5e9fe8d20ea8eed5b5efcedfa69994e55d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=9a05dde51d185e3595c98505fcff429e38ce0853e78f48e432b310d0aeb335a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6NBYOV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIGA77tg5Cxtisb6YT2slQrNNsIl7fJOpp2F8Gx58y%2FkgAiEA3Q76FuXrmmwwrzUcExVdg65x%2B4084b%2FVszKJ2Bvd3Ocq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAyqnhYZPiwgwl%2FMzSrcA%2BbINYQC3tpst1vnuO5ZJk3VsNffO%2FG1SCK3ruMmNnNyMWkIwSA%2FWOBr19LinzYQTzQk9xZeZbWybFRndVv9t1OQGbJD68qbdd%2BGARPtn7c6G0PIpRsG%2F0XyZBQveZhTjt%2BYIKEsBfUNNkq%2B2PasHXaYDZly9mxp3RyAHNoG%2FYOPvSQUj2xFY0kpZJP8NX8UWJORx0lwYrTnNMivAOLtIAuGTEa6PZ4%2FDAnSYtZU6IdSVhAiokaDgRkzlGEISkJ0RAzoQyEugfUzioHlojbfq4qsn1WR7jek8u37YtH9j3%2FxXiu2sRNZ93Mi%2FD7nuUv0XbcCIdLQfcPn1EuR9HOU%2B596X0JNN9JG%2BnjfzFSntT5QWFwMSSmZtFXqKCf8QKn%2Frdz6d0pByqPLFpnOz0MaQkxBpj4F2fAIWkB82nc1FBvwnLwSAmFQMJihDss%2BG82VWcU4DqevQt8j2xbH2Azu28q1dmCoZkq5E8U1TWSHd1SDbPBZ9APvcoT%2BZkpmLXOloMPOZ5WjyewnsxTbjbuFH5Ux8CCho2%2FT1iUgzPVbaypW9%2BVfPNDR4YQHUIelwVygSD7yh%2B4WC%2Bs9vV03wEMk6ScuXf91UeLzNZl7QiaifI9dggVjbsoa%2Fq7nPPo5MNbX0MEGOqUBZBehohEN%2BE4VVdqsWy%2BxtfiKAnwkkV6D%2FtgwGD%2F0%2F2o1o3eUm8kExtePgjV1HNuuq3%2FSyNqdKG%2BxjPdy7kFshJWEawf6QnbwZ8TyQwXehrEIiqnY63mrBfVfX1RrJxe6J2etnu2XPOl5thfxm21%2BK4Kt0dpoqWWcqGZhpIyXinmWocBiBYbQsOrHJRkaACpDhkrC5aEOpCJiZ2MZXQJQzCzAiQLo&X-Amz-Signature=16cb57dcc10f66f4d6df29784adfb037fa88918bf65066c95fab488c937f0445&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
