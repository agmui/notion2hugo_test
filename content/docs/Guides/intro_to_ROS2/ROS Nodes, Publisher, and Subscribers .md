---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=a3a062cc9fa64beeb4635c4ea3252484689aa6398890f6267a98c488f7fe0d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=fc392af2391e7d847995cab8b9a5136b8d264a91036a8bffcb0c75740f649516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=585c93af29777c7d4762d30433427ee96e9c725a4780e1f46367923a51ad0e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=c573cb308d3a8232566b22f42b0b0fb2c8051155cabd2c2a4efc02db02edb06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=657f4fe482763d863b6fd7767dc4ed73da058f14559cf55eb98c9dae67e247c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=7da0c8d584e6c1ef111750d8ab6eca23a1a66c373091dc29b3ee100b926365ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=3b14413e58c89b6da6eb57052a6c4943af7753c1a458c00b0f375f9de0dac0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJZDEET%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfwKwFYXgpptoC9Un3lteQo%2BKZpYRcEFxB12fhk1CYswIgTuNnntDrEXbtQ8juudXhPSzfrYCqv6DE2pYOoMISQUIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDLn4jfI0gVhQa5TYOyrcA5f9aoZfcj%2Boj949zuz5R5rH78HwglPpA8yon6tzb%2FQGd%2BmZRY3UCYwmOuKSOghZ2N4%2BwHHV47ILJ9GA2xGZxjMLHZehxIM2SVzBobqMyCfATQrY172ihdgDl8GOh0tiHVB%2FJ5j5NdUKp26OPYjHAFx%2BqDNXNVSjmUkHKWczb4CdJc%2BVcw0F66xRcnOgHQWW%2FQjnXFbZzt6O0m8W5%2Bu7rrf0n1bTJHuHzh3dNu75BvkbsG%2FdlRse%2BZGEzHtZjFzCLdYWV%2BmFuhKYVePgDHyojGW0HWOQdv6TSdP0g3quATaYBXQsNsvzene6uzikBb1hqby%2BBVDeUVAbKOU9hub36OW38%2Fx2o8Fqvi9XPDNTwNNgZITrDhdTmCZZk9YmLG3VuA1Vsdir8QdhYd4EYE641FA29e4IiqPtvJ%2BJ2XP1Ju9bVPCozh7TA4Lkbh2WnBBxn92%2BtyZSGm56YUweQw%2BRt2aAim%2B3Mqmhaexhm2CvyJl53qlQe2j3MrgC3g0fr8C5mLFua%2FnWtSoQ5qZo%2Fkv227ZhyYGTp9U6VgMm6r0q0LM0DlFjDrT6MUgefoLawjhRAK%2Fu8Dfp%2FV%2BFyCeAJBKDssmGmbxl5LngoHeGVLlkjhLRZJQlboDIXWrb3RRrMLyptscGOqUBPDB7XdTkWYtMO9aaiplpJRtGzkn%2FsbGW8fhUVGKlFz%2Bu5lh3hVzyryb%2BBc4Xbg6fBkQbUats%2BCRTOrEgwcz73RPlUaTW%2B47dhykp%2FILfDie8a8mVcgH4E92cB%2B7z2lqagIz7rPHXP5S8Is4NJ7bLXdvZy%2F%2Beo6c6m6RrK1TXGS9abGPfkRAqK6VhUzkOipUWhGwJZ9s2MeY2PHwSKDcerLjYK7Vl&X-Amz-Signature=9df08883b21d9cc0e7f040757be9cf89bf5ba4ee01d4806a55d2c4ceea751375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
