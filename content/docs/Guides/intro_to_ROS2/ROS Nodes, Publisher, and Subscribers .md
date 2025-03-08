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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=035732ec49bb31f131f216f39fc83990c19be1c534bcf358799810fccec84ef7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=a000bbbb375ee30c879d89806dc3f959ba7c9d1e763cfe04247e691caa562215&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=dfb3b2e11cd4699bfa9db0154241fa39fff5fcf18dd33ecb321d276bf5f0e930&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=0127d021d7b1dab73bed1fdfe207a919f7b3a772a94b8910170d0f540c6d3af0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=4f6617acc6f2eeb218e03d9432dfd912f02f9dacbffb431328e512a43edd616e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=037d1a4d59d87ea306fadfcd30ea3e1ea8f5228b450e44e414517990f9470095&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=d85aed8f322e7fc680229034e044c8c6e1d0960a3bfe5519c980a08996ba22bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ45GMR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLyz9ClYgFA3Ia7cUX2L0TSlmp36nFQvcBDcx%2FbtNpHAiEAsh04TVDX3K9seT1dCxQoMAVLRuAVA8cv9nKjxplRy7sq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBiD2fQ2qiA5TEAZcSrcAxEoVMyHTnTZxo%2Fdqveposi9CvFKfRp87RYeYjF3hMczyZcsgkVHHmuhSHoSfO7OaQZLGBTG4c9WGKdevSeyeCKEt3Du56uduZ2KFILp%2BU3aOxYwjoM8mjjPHSg5bdv7RnDSYWT3Mge8%2BNd4c9zFhqSO16SPL9wpeWIVePwB9D0p0yKZatwY4wEe5d2T1Uob7sWxeGu7NeqMipTlMVEezxjGBAP%2BBGJPAD6%2FvSKd013zPhoOYLfopIPDC8zFJ5H3Zza4vqN0bqiKbihprMoLl%2BGOdqpwQxhL%2BKBJiiOpEO0Inq1%2FopkbqTN4hvDGm%2F0rD2Nb2GF0mvB8AAwUr4JShBkjdQtyi%2FCW%2BmGbfVj26kvfjQwc8GH3ydL6o39zTur%2BD%2BUYTAmU0a1anKMAUIcmtqlr6wZc9Ntvx31rORCGFNE5K%2BY9FW0CqCn9xDF9LZ0njStui4zhfDEKll1lninYV9jnpUS7KxLAvs3ZENkh2MR9TbY0x0S7%2F93f%2F3qI%2BUBE1xBXn1QlGfNzfIJYUAqfv2jFX9pcN%2FWqDIpslbGoO%2FJRcJLoXrOzAAbqGgvl3JObIYxRVyWUd9iESYMqAHKm1bQpZl6vTiGwP%2BXXjitGuVMf5lm6wzuwhn6St8kmMJb7rr4GOqUBofZ0GY3hncGYMnH5HXwNkijm9H5QlV215Q5lx%2F3lKfI7f5yDSb9zs6bmA3ocrLYyRnDGJixhGQIkZRF0TpyFURCtk3lWtQy8%2BfUNMlFzwovY9oPFMKPtMkxI98gaamy4po6O4SbRnsOPwPrUGw153RYa33Wr%2BRoDIekI6%2BGaIpqUgytyfnXI2e17eEscPfyC%2BvzBrVbSrIMiDX06TFnlY2BBJD2V&X-Amz-Signature=5d8faecd258dda2eef568ed8b3e32f221781806b7ab46f7b16d59c7f897e401f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
