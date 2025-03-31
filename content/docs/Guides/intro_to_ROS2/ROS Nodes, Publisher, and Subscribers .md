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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=3f818b89d6d9441a03a4f977702ba89d229064331262d7c702c24a7e00d87fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=f6d24eb50b8659546896889e46f44ea6c44b132899a20d2daa8f43093bc39f39&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=e6e1e2ce78298283929f6d5120679cd5272684cb7abdda270035e81f5e686970&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=52baad985a536035b5a117d636f5fdbcec4c20463b5ec2f6e959d9746d62522d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=94588319c90b11d3c0ec2c9083162521432e628f6b37f6c08ad251d3b73e89b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=5add49027af4cc3f47317b607f06bd5b677afd98274d700b34fd378a30abccd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=1302b4ee6cafbd9145bd40f0bfb20fc85b0665f4f9a63337f387624a7384d5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNC3CFWN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCX0EXO9jnJ6D6in56YN08COsKBHqEmKJuU8qldTxtfTwIhAODldsij4S8dZA45U%2F8MKUrU5CW5FbNUBuZf7sg0cAeGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV2mUul2oQN%2FdZgtkq3AMo0k75XR5Mm9RctytwKmI3eARbUCUnM%2F3hAZNEqjWsOcPnO06knIPcUbetyl2%2Fh7vZ4WFBOLRRwdqV4nxjMTpvfBlgcVkhkH6qHwysqGFtwwF7Pi8EpRL%2BZuHjGmZX%2FAh2P1e8P%2FPmdxVBzYy1u%2F0w%2F1WtsGNq%2F5W%2BkrMQSMyWaq4aXCD1qLODE5uxVKzhkX%2Byf4aez%2B%2Fx4qNiMcysUZdqVPkC9Gcvbf1SAcsqs6l2HzCjOn54cY1LUVJxVUAhB5Efc5L8HNdp2A%2F6ou%2BSW5Zu3h8l6XcrhahvcYEhcZyI7piz4g%2BYokqkIFAowiqVgLXrqNhPKF9pixRCVQqB%2B8lCmuF0Ve2OA3pVDRB2XnUnZWtvN%2FcLLmw15vMm2aVE1wsr0LaERqSWpHcPtPz%2B98yBxg39plsM6q2ltojdLcuVmojk%2BSg5YQuvheWUmWrX0pDR7ttJNUbAL%2FLeiea%2Bwo7XIBP39neyAibkP8F4kWHhB6pmkEr%2F%2Fv4%2FxqdscN9RV6t2G8p4E%2FNhcIt%2BXyYQyNQWsEdkJKNFu5WRZ2ItbFwUwfmP2tbWQSu0JRNBWmQcU2uz9GWvfwh4%2Fwjp7Q%2FO7E69nSb1uEobjYcAi3PvRPIxc4ah46loUdde8n9b%2FDDZ5qm%2FBjqkAacNNZN5hmKmTFPG0n2ka2Cew0C6fr9O4xXo1Bvh%2FH6qS%2FefJXyZdOSz73NLkCIM7NYrLAcUmGqxIQ1zZaez1LcnhpuWJo2h6VQOhnhPSSmoKFKGw8TT%2BsEwQQKGbAdx2vJxQsFIv4boqHJwkLhjQ3htdfJiF3MbY21ATj41SgOJK2psauiNRmFDAwtyMDIkrjocrNpd%2FSIYMS64ah%2BIjZ9cosh8&X-Amz-Signature=7570bfbf9b4e63067b57566d343d18a69dcc6cf031dcdd28ecfefcdb35d73977&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
