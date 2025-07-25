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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=b72e87c95b86d10cd6a3241034a0acd5c8c14a489e43463816a8724e74af012a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=4545da9ff9801cc75e5b6a5419261e68e098539fc689d2c4328d579f413ba3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=26f90d77eb35f106f3cf6fb25ee47c63ed9b890f13f6a61d36ab1ed7e12bd16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=02bcfb5bc1022f54f44f2d2b9939668a0ac1afe212832bf623c8b07d4b81d966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=1243634c184b4a767225527ac8c90bbbacfcdff7dd48d8260c671906ac290861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=7821e0c337201b1ece19836da8e09a1bb30039fbe696189d96fbf34999c5d00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=03185bf4876d3fc1259f77087e2ee6edb4a25172c9965de24430b3b32a91d858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTBYOBA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDlUoNxEpfFu3MxFEqoabPNtwyk6jXC5dy3yWlZ%2F%2FOlpwIgLVcCP7ox5RW%2FX2ksK4YCGMOFMn0TB82vw5Baa7quCfsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHH4na35VNG%2FMlHjJircA6oIUSAvADE4gHzte83erkJYKPG51DqKfnxMAAkRWMgn12c4WwqCVa85dRqjexc%2BkJofwmcuB8aSV7Fo4d%2Big4pDHUPfDYzaEq%2BXQhttP3R1ZN3%2BRcNcOauX3pWJFutkw%2BlW7t7qXfmYSMkQT96yq%2B06K1vdjna7BWAy63I%2B0kUZrKRMeQPSYpoIXV%2ByAxnZ%2FxCUCT1E3VWEe2bf4pSCwVUMR7LYpPDRNsGbBig042cdGIAC6biw7Dz3%2B6tIRF9Ybf5KE3Gf44l09yWw3N5oQOytXFseeMZZCe3HteeyIMlPjtpWsN46WCskU8g81Lip%2BS9ErPHo6MPCRTv8A2yCJN8bubWsY0L%2FLPhmGo%2FdDEc4dyXt5ULaWMCG60RoOMXBQzpmzT4Yme1gJ7FxABneZgnQ8FCdS%2B74XqQzCbjucRW5NaA33Cv7QvExkAoh%2BNEEz%2BcID5diZNsRvcS0eK0%2B4BrchIZDrPSmMMWrTl9PZPMXNh3jsOQy%2FA4sVrFVylVgWuQHNk%2FRy7d4NLcoezdkwSiRtXoPT9ES4f8pUJ%2B%2F6z3srAqxdbNsLzbe2T24UeE1bNCEePONiKdJzHUaKy8Pbc3Ye5QKeJ7krFaHv5eX7I2Awbje1%2BMddal7wC8OMI%2BGj8QGOqUBCGilZZnLQCn7SG5iP9pnwP0Lo0o0GoC%2BU0%2FC0T%2BGfImOKvq%2B9UdzJR0TdL%2Brypz7ICaYZuOMK7XOCkPKI31PRz2qnQ5JYa3yiJme%2FhfVJeaHxCx53twOU3XxixMt7XOtLtQ0WroEfnqyVw8IYCvTSBIrNb3whtFW4G6JD5KLmuUhLeHGy4MLyOH3TmGVXn1k1v2s1pqxWIcPxDKQwBdpdkj2F8kb&X-Amz-Signature=34b9015fc2e8bee63b801c083fe180384f7243cd291d046b8875014842671a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
