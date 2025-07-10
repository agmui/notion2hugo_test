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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=7dce5d6596a436964383a6e0f3a50842d78258fc32bca617170ba1440698aad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=8b0ab2e8acf4df357c3b72ada5070e3b970ae08901c586b40db0cd5c5f927475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=0c93821bf76309ed5bda9f6c754fb65b16c838ff7c5d203ef8876286a2c78c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=49afe357db45206fa7335dc09eafb240a011a1cea6636a966471f13c77c1098d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=16ae1d91f9ff52c5331406a326cbe54639745cf2e5e1d55e737538207775974d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=559639c268f78e0e82c1b59d0e1a9d48c7f7daa40c8c9e9a78a16d8359bea6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=73dd34332a3685d32a9d42623f43e7c8e046af3261825ec29d051446a333e3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCOYRGO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FeR%2BZNUHWfxH48%2Bn%2BG12FkLT%2B3Rplh0vBRPbilnYkVAiAk8Mph66So3qG4KUs6u6RCYqMcGMlZcGUno3FYVxnxhyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0dcU043BmBwi05VKtwDYEGtwwoeBW616rWjfM9S%2BWGW0bxtsQrd22lRPto8jOOMJjnUm%2BPl1vpwMxZ1EksseCGX%2BctetNM4uxZtKPTTsbSEKxK3GDiGJhQqYhTD5Mz5nuUcobNwe2kdt0XItrvneMiXl3EZgYIXsop6YCMLmvRViMAY7%2BLtqhE%2FFZAjejGXIqs6laFmuUjtgsGJ021P0jdB%2BWPMc%2FvvPhXOt9%2FpPiN%2BgI8te2X0%2FxZ2%2FpsKcEr%2FNQ85JRMdJbdUrCjmN0tAZaFo1vm3DI%2BvDrYSz%2BiPGulgZ2fV%2FkkO4loQ4QwhN5ac5Q6KZ%2FDATBDQL33Oi8CyZ%2FrWSDEqXYMa%2BplelkBXI9Zhb%2FfdwX2TshjLmDLrFy0WzVmnCr28ydn9m%2BAkn0UGjuifOeYrN6ZD8Cl0bKyFBScv1ADR89aIdQeWAZr1NRK%2BSrqNUsPejTp6IOemIu7i5QtGmSFJEd6PLfhPg3tEDOJSD6V8XYo1V%2BWqnwHd44E7PVJA78f7rycZgwV9YDeF8wkEVczX8FlRLYk3TXuBzK2Bn4Il3PpVPN%2F6GRr0odFEsvKrfkV2%2BK%2BiV1wInkgtBw9mCJp%2F6tyDMSQRNrvV8vd23eKX%2F%2FQsethytKM1JmZ6oYeh53JhwIKRvZ0w8fC7wwY6pgF9jOZdq6R9e0a2e%2BfOvO58TyUeXtuY4jtXeWe8pMnLmbsL2t5SXj8cy8s2nlEH1vntmWQ4jh%2BulDdTWzMf4UzQzxhrYY9kVuWjQ3xNCBPxbThg2tUiDJycWY8ZPg88RWy1i3uHUC5w2118bivwkiCcfsFQYEi2oe3xRi97yUq7B%2BmxDnTCD9w1p9e7vMewVQ7Jti2vb6vwC9OxLy2W91IdP%2FcTOtnL&X-Amz-Signature=077cf4c13199eca4942603d546230b4d34b3d795514b792c6e059b5376f908db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
