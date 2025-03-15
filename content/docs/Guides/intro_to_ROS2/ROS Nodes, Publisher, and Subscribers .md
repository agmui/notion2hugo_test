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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=db8f10417686ffec11c6b116f56aeacc6dd64a8f39538ee402923f570d34c6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=44bac7755723ad4c8fd13ad1561bfb29e59929a61ce5d674873df05680c02a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=f5567d51d774c0bab0d187e426f809ab98ffcbda752cd327500dbfd6ae09b5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=59da08bac235c2feb6f7fbd891b6fede323f4e7d031164ec7ed3e360f4ede2a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=528ae30a94ca2ba2637aa907ba91528a65eaf2e33929c9cbc889229422ef7061&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=067feea71492e86d8f89c498a2aa184807d8fde7e4f6c5b6b37fb360c6e769d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=efa6d8f0910b9d90018597a3c645328eb715a5eb1d7e1e2d449b0fe4213f3f01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6ARHER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9bVkuiwqGfPv3KUzKNObqeiP0mQxl8Kr4Va9MS9Fe5AiEA2E19atULUB1nJrBB9XoTcdP18P6cUc%2BtT82WxQYod5Yq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDFnJTv7wcu9dxCK3SrcA0OWucxGO1B3f7Dhyyn4i4fUrR7KvXy7KYlmwYqEyC3RewyjoawYhhjyaW0zLwclMmQYQME6%2BUwGqQBe%2F7265vkgv%2FMfrWPccQii7f8cki2lFpcT7Gbatnh1DvJ%2BCwO9MgCPo6t53GYTw06V6K4b8gOoLq2fxU15fAc0J1SPf9Ww9PrC9OKAfKoKHYpO7EzWEc6FXXTxPrfarMHSISgqNT3MVk8vnhai1rhwf5aDuNQ%2FzXu8e5s8lvWqSmo9VrLm97fD68Nsm%2BFhh6PBxgXd4x%2B8aC1cTtSjpPUhLNcOF2KMdIacU8rrGqPpwUTpcwZbxrhQun3Og10cwbhkmxd0DZteO775Eza7xVecaNyP8udUyMYvdigmOuqA01%2BIUjmAcxuoA5nd5J9sOzvjPgikqLLHGWDs2dangbCx0NqN7wu4207iP0DFcEAQw3sVBvBL987%2F0JoPR8wp%2Bz6PcH9uhUx7ikg5KxOPjM0Y7ryMQ2oDgNPZkxYUtR9pzCSK%2FS4NA18Cj3PNQeYNSDg%2BAhLJTC23QBTrWw9us1Jz4c72FObXDwuXFGpd4uvnx%2BlVr8bXyLAmAV5wommhs5ZflTPR1fyJr%2F4zj2uxgurVhIeoz%2BFTzFC7fq2gTJeIRXagMIHj174GOqUBx43u1coe6KhHGBPXPSHqrJlvHtPclcPe97ZHbUIBy1dxLrQTSb6n%2BYAbrDYwsTFFGUDYruevwpt%2FGlOZ8Tb2bHnuu8UK%2BqR2O0KuZ%2BLzmLI7o3JH46vGJtWfkDCAvQzO8SN9263TpoQ3NBB%2Ftpv9jZmiTi%2BWFiXCTB2MBMioneYSHZUslPK96qlFSXWrNkat%2FTMn6%2BMJdbcKH1chZJ%2F%2FtnAWC%2FXc&X-Amz-Signature=e7f06d1bb41a01dd09fddefc0eb44b1639d99ce5553c2c8ec8f8047eb9c151d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
