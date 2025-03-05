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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=39b0f3359723d6b714db6c3c094903f54cfc5759cacaf22c9631bfeedb5928bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=9ce0a6cce350b0846f4aa9ea46920f11333e05ea631bbdb4c2c28484074d100b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=4ccaf514f461c064feeee17397677d194d2d456d87cb58cdccc260e2d000f22e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=91ee92afa0acc5f766af5a40aa3fea5be37286180bb3e81817b3b42dda50683d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=624f7012e21db563829ce3a95b607cc91a4e25337daea1839a2715fd92253e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=8a73b322dbc8237292c1d4fb5f15013f2533a7e84d80ee2f8258c6c5c48b1539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=7691f0dfa528e4cbfccde49627de80521ecab80ebfc3338da1dd9d111a4a48ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47YZTXK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChUH9KbgzpHWateGL3U4qDFyXhEXJfWRXajUebtXqqgQIgQacxggJq2ONQG3Uw5zLRANO%2BcyKmsE9HScamvnyJazMqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEehzMbnhRPlCRl5dyrcA0SRlYPgyS0P5%2FNSYJDTAceqVbxmtx8o7t6ZdePyfSjZdm0rNAHq9ZQD3AcdsmuSjD1nt6kgSG%2FiyyIhBsCZ61DihUHPu604ZOCSWHTrr8%2BVWRmzWLVXMCSUSOjqH8RjQ6c3jNWVO7imRLT0Xgme6140HlrFP2SoWn67D2exqLmQ1WWRE9vPHS%2BTYOTISB2HMRFVCBGEWEBtyqdtbQNlEnmFXSWKbUT23BiYEOpd8xslqrThKFD4LffOmcLwv2QRHNdOcmIA2772CIugjgQlF8VwxoG5McpwOdTzjRwvLycLxgYLFdDWbSOPNEndd8H0FS9f29GNwOzAegCyU26tMcOzm%2FfHOUDINs87c6oUAdwtzDQxSP5g8VwZ0PPeAhVtzF3lUiPxLvHw3uH1RoIZhi99%2BGd0Y%2BzLPPqQTABYxYTAxztOdex%2BGARlYIKVp3udg4XxjOUAdao16ZwMwMjNE2R%2F%2B86Z5%2FiljCUx7lfMkbrfuNtthvPJsps2qwS5NQzGE2X%2BwNg2yDBFInQYMnn776XP2HeHBJmiZ9%2Bx0XozDQ565e5zZaXSA%2Fa7ZotZWHyzHOLV5kotO3ehISNipNuSChkS9G9iKYJZ%2FWvlehUSSeE%2FWg22gZXZQeiVWGd1MMyenr4GOqUBEfRqv%2FhheqxoGV5v1f%2BVAYE0GHSg3ATXK81cPZLQiFuDgMmVwNF9vchdqegYZEpEt0wex5L2oNksLDsjd7Doapf2Xw9uiFoBjBx0SatRMu2rU8C5UfRv1RkNoNqqoPBreqtaK57QurcFGjvDWSeuKDY1t3jW34nRiI5%2B4WFnVnu6ZytDlD7blLxTIWaKtfdQoQlvb70vAS7eUTBXjwRTEpjhOZ8w&X-Amz-Signature=f95943b980a3e5e28aec60c5de6bc77bc62397ff8f2194da813519b1a009ac76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
