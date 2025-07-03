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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=4814ad5d342c20c05c99714fcfb102e1dff8c21ba8885cf713476a8c21334552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=55af4aced85472635332c754efda93c5cc20635bc565250895b9df8a6711b837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=752f17a73e21a14dc752acc14b69e1189477854d3d601a5486b1e07ec47c3992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=13fb06144da9ec72499061f69d39ca3b6894180914bc3c40883066c3b8e58fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=dae2da7599246c9ad1ec031c81a6b50f3431c90500f0105e56de261236d6abfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=6117b9bdd7fa8581a2a73da096518b323676398aeebba259ea587f92842d0ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=374dad0931ed185907b6a0187bfa0c4670b2c66ac702dfcfcab254af0a23774a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQTWILRH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIEpiGRaFg8g8a9psbV%2BTFvyJJHssyrzh%2BKnxnfOh2daeAiA85du2SRbo5iCZjvjbBAzOjDKaLnZuBgyo8oJMwS0oFyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMcobv2nnxWO%2Bq13gdKtwDyz3GI7CLOn8tfSGcF%2Fv17UTKgLIfpUJVyDVRnbkgMBpZt1oR5fnRGdNPqu72SdUXoVZWe0VIiIsb0iVTTjXi8Qpd1OFIDnPND%2BDRAc8Q38MVKy30zNckfcIlnI%2BDGvaYykOM8zJDuQFeoQhmsmACL8Ku0TOu6wD3QsvAVC1rod7E66NRNNZwlX618LDTloihJBgjdTivYMXNTHEhjEmRMw8zuXCNAkhIdTqZ1azNJ3sH3l3HdFc913TRuGBOpkSBwcOc216%2FAE%2FdNoBs08p0if%2F7VDvkyS%2FAMoztTheLee8EDmQJEB9hK6g7kUOwEh7h1vs4kh0Op4lMRrO65v4Lc9Yf2BtIQql7sDkf3uKm4UCrDHvKwS3eJRCuGMNPST%2Bxj6vHoPVwlNS%2Fy9lrILmyvW0rlOc%2FCZKQ42Lrh9yqRLZhzbp4HIJCCUTbGqM71lhU0ozoMyys%2BO%2FII3BpXCvVDLdpoV4BbdJ7RQwVn1RfIJzGpEJFnfrzM5QoIhOitgiX638Br5sNOjhrbvbjNrMMBJiN%2FfrhQdXq9bbY93P%2BS6YLoclMfwzwN7cmR3fJ2htIAWClc2HQNAz3JaJCu0ska%2BK12Ubrxg%2FUS3R0YYqt09zalKNRa2o6J2ORv3YwkuKZwwY6pgHVZNWsCgII%2F1I%2BEryZAjqI7WUXsy4zmwE7%2BkE1QaLfESsG1KOl%2BjC0eANMyM6VRiUk3dhJyQXqeManUsUfMb21PFQN9SVvt%2Bvp%2FLvqIvWOiRtXxcn845ihE2teUkOrHwEGVF7neF%2BcDBVaKPZJfCBweJTWs1Xa4wgDtK1myxkhfJD6WiXSeZEAAArRlxnEL683Rv5ZzLjSVXFtzavUnsKu2whHVceW&X-Amz-Signature=b3e55e6ef6fd6657c2abcbfdc61f79c14165aeee83f232de55a7bd9197b91708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
