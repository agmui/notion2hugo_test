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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=8ed9e03f00de0b6520af973f7ce725e3c270ff244fcef480b0e5def3f5961c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=a03260f2532a49bc7c663d5b6f1cc4717d867eeee5054ea5e1ae9bf9b07fc2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=4b6e01b1dec9531ec93c162720df631076f4a12c3ec0389068168a7a09817043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=86f3f9a11b7b491847a060c5b3c90cfb599f73f904273f95e61c804984ca8c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=1f628b9fa7bb99cc02ed0d9de39067a658fa72e13fa972453ad53da96c64979e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=85d6c1ead6ce0078ff3c5dcdfa29a0a8764f8bfa5bd15d0eae3fff3106051728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=50d512f78456d306fd1a2c140ec8e5bfff5a91bee024b6126f57afcbcd318857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DC7OOFA%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgwf%2FOneHFqvQMdpf2Ww6DEQcMOoN6gHj0vWah5v1LAiEAv6EyN4GCumI8BscTg%2F6a4V2RJrMdlj6GotLqCoasFssqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdt39kSqwdEVO163ircA8OHdkNpJCtl4z1yiLBLVB6r42LUnVXI3AKyiB3RHNIH975OJbT6dko0Knc7K38yx3w1v%2B12y%2B7dx865qW95khsMMpgS2J8JPM7FiuvBWmMSPQYNi0mfqk1h9PfknnfvNWImf5BVfxTHWGG2C3CLcsvbGL3kJFPwXgJ8Z0tBkArRdISreYV8lBe9amm278jyVC0deu9iRd%2FUpz273HiEKPTajthHjF3vr0LvqDgfbg3ajvrtM7mn7o4ZP7lRhwCA2mUF4OFob71ULuiReDFyNHIHyrXNO5aANxPOHMy6LfZ9pAmgQ%2BBJtB9Takzr4tazU4BMpYQNf8M1G9AGuUy%2F8ohasWRph1ziPhpYvtwccJcINYIYM28clabnvjtUNyES3yRfGGfVcXHu4kDBHbE6tCUUmSl4XrUbbK4Bx8mn7iq9dy8PvmYdXcHXS3TtQPSPuhWIoKEDXxmytPkgVAH8AQxnzd4CWFJMTSyzLuuKwAtWbp46oyVQ%2Bjb0eI%2BLEaNaX5In8chyl4G2XtJ1UvPejGdKj7Pv8BUbidpF7JnBZSZ9vKIvrDbbkEf6UkUYxDrw8kbeB56RUSKh2MUko2diR8ufVRAYX7Qi7T1Lci7oDyAlqxXXpU5akJKsu7AVML6v8sMGOqUB7LNTLkasVBaq2S%2BLbGzbK2qUCy32jkS6veIjYp0Kk%2BBNSCPdLM8k9PM4H5e1YmVNRwE7s2dWIrElSvdGwiU456WmTLnAVl%2FbvPDxvpAf3xVgziVNLMq3C4Ro6C%2FCJtheKVzwE9GxDuWJAKHq7u%2BzKyn4qS%2BIqQpRMMuLtsDXyy5m88QOQ%2BBkaJ15eyeaUy5oJqo3fDwVnDlK7e7nNHwtlTGPO4rX&X-Amz-Signature=d937eb47e61d27a37fbcd5ccc80a730e5466d7b6087599badc899692d2447ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
