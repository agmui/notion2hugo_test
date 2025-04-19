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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=29c906ec596308679fda2ba9f37d9c952bb9d41079b85d89a5e4543dcce779ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=d11ac964142e6ebf00be4ae8b68976a665cb6c6c9f3737cc38a1ecc86414ce1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=dbebf62f6e6bffc93e488e5b5e6885e8eb9c0655677a62b0d2d2ae4ef75feee0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=e1a9fc0f59f86b8bcfb6e1882f1317d69740a381915d15025052348a8268f9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=7c128a8cb5a5407e4db3f96fbe69237e8aff7cd645283809f5d6759a1e905adb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=a24d28fc92ec5d96e09e0d56ffed4e0bef8ea3f0668d7e035c8128dac335d028&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=26f129d167750646c9659ba1e297c88c5187cae5520f887a05fb165543caebcc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWGR7R6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFCGNFE%2Bpqn3i19mHMv%2BuxOc4Hhd%2FN%2FaPAbRWPQG4tCKAiEA9OP9qTjB0ipFMY%2BZ10O2ahNSJ0JD5ZBMVMaYlazwNyEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FKptw4TJmqrN0sOyrcA0Rzbp01e6gv2SMF6yANPL%2FqfPRTVxscrEVFCPiqgLzzwEB6XpXRuO0z4MutO4oiO6I%2FeH%2FjB93jIoPoaHHOhJVWzt7bDUTbT1ksc3wOP6uOCnF11qgbPDrWzh3QfJm2m5osFJDT66E%2BraXfbfIg4uB3rNB23HlzQH41L9XtPmR8qtNVRjEX9nV%2FttPa%2F40RusSpxYmeXtEHkPyRXquI8UPPleYUdARcMyJE%2Bn3aLXf09rSr8wlCqVL8KeRxxG20rZOPYZhfMFFt0iUAioCJWXjTl%2Bhbydc0QWR5xj0v%2B0COG91SsSf1sJn1QRdVnsA0QgaY470PqxN5CD9dMoTw3xWMxcH5UMZJhxzTd1eH%2BQERwXOUcqALOmTEfReMeV1OHQ%2FD6YYDoTFBqI2g4oioznrerigRPFtHuzIe0wF96NbqsDrM6wIYhdXmY5Y3i3%2FnXXgoDHPIdxWGK5AxCqxwDVHdbO619RVRVm0%2F51t%2FbSU%2FSoL4aQ1TmVuloi4wK5X7JFwCY1doWi9iAISh6TMlvbfjK42ntBIHn9ihG%2FrdcVGEJFfDyG3Nz3rv%2B6TSnbnwYRydcZQESFL%2Bff9mkZSt7TV%2BHe2xs3eabaW%2BpnOSCKPGKDGietouiUNle21UMJCgj8AGOqUBGyUVVS84ysAZxkRT7Ay%2BU2TswDpVjmVaST2I8sI7hH4nLJJs%2BGcb4vSO4UbtTnPiEPeeFhuvH0KiG7f4Cv0J%2FU6SejrPgJuPN9vEVBJZIgeeNGqLHD%2FvqmR%2F1tq7kuRvoPPFN%2Ba0qzn17CDy5xpegDQEJjzi9XByBrDo3kp7wDdo9sD%2BFhXtUSet3tUajRMquyWLPKdZRCfwUNtUAkw%2BvsdCEofo&X-Amz-Signature=050c8427e66cbf77cc7ea8a5bfa96468938a3a2f8f0bd87499e83b4e9fbda39c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
