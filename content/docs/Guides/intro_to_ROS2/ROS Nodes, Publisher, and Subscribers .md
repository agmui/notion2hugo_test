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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=cf1057d67996eb558eeff81aebeff6a1ee80e5a6f28d376403e299b3ce0ac324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=8028c0c3e18b11b22a30b8a6cf96eb47d548e8f87db799c459fe1a78639baa49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=da0067d340df9ef6b8a983cb9447126c50c72114cc93aa275731be56b8bd5eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=eaa429b4289ba5726218c499fd246ffe3f3f62a274268e05f52b519fdbbd16e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=48038118b50291fcd525c4ccffae70daf8034143267549d6f7c7e257281b1af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=5c2f387e3e2052210865bcfe71c4ad591eab828526ef9f9b204ea16c33049d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=942792741f52f848537171fbaa48f381bf96bd065b7b1f5f022fbdd1732b8332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNRRSKMD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXX1ho2IZZmxHpHuvsEI5BCj05p3jTsCyiF2Ar%2FD3v6QIhANXKiXXAEfB6qFsUA%2FoRoPe%2BqSYAVG3BordhOUlw9S4lKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdQYL69O4l1eSt5ZYq3AOt%2FdYCy%2FjIGqs3%2F2WuNu5HML20DyMccWtackAcs9FP6v9ovQUQ93dqyVo6ESB8%2FrT1pTDma3%2FrFdpQtNnaqNisBhoDgFPsGgXNBjorBehjXbQiMuWI18ixabOUmCrITZ3UY8O0EhwqSpEIiQMBPzmY0Yei87N7udTdjED%2FABz3XKuE7dSFsBRMVx5pKibqJc%2BqNbimyV0J3vZb28bQEtzSg6OqSsyMIlCTdTrmSeOKeXrU6aDg0ZwBQ%2ByS4MqbVeVdImir8gOuGAs%2FZx0z6hxOPe55Vnv3sCvCJrR%2Bvar8Ihskf7%2FD0B8g5uwG860dnKY3%2Bg%2FSeVbTBqh4oJO0znNRHvo%2BRNz7Vs%2ByWo3KYLs2oXtARCpHwRv0eCYXPXxzmQ7vFdQ0ZUw2qkDwIOFui91Hc8RzDq1zdTZv3PdTtn3RVXAKCs0gfiCMqXbcnwBD1OcXGinPVygPZWoF3eEi21AYpnHD7Yo3oTG%2B4WoIqDt9WuwsC57eB8WJWI2lc3z2a%2Bg%2F%2B89I%2BVqEMYYAqZwMnNWza8vcsrLOCoPZ2ghHfsrEjb1OzWdCOdb0wdfEHMbRsVJ1cHMxOXBt03rzAP8HuPYTi7lStQwYiNlYYmdyfu7KdZh8quDZ55S94UkYDDCWyaTCBjqkAaS7rzUzdIYit8eKShUxkHZlroPfPl6ibrYmI8hM6nSGZ6JVfc79hjZHeNCisq7vRLjeEsPg%2BlQbb3pdfDa3PnoCYwVMLxMHI0Ec5BecU%2FfNO8d1Dqz4f3SMDsg8FDiXq0MxYITFWfxoQXK%2FTe7QQ%2FHjrLnT49jQaYtvn3%2BzNCMdXpV0B%2BuVI%2B6SLxYjKtOnqetO7LgPtSG9du1lLFAGjPx5570J&X-Amz-Signature=c1bad2f21e045d5dab47b7f5cfb9f205a599003ac77a86c8629f9c97f12db70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
