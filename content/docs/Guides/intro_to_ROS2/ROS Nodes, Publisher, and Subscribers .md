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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=37d9d745d5c0f8584bb1cc5794e3b9d6a56011b5e9b61bfb3a7c5923b77e337c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=ad0d2061139f2ba9cf8e41f2c7c41214bc72330b4294048eb61d79f6c076830b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=6da36f5084152181e4f78fa507d5ed0d983dd575a1aaaa30c4c72d3483d245f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=0fa9a974f416b41fe7372755f1069e018c3cabc06efe8f632d8f1cc042c42bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=0ba8df3af773366a489b7c5b74011620865c87f1041ce2e8135541cc54035f75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=6e826e33c9709441e0bfba4abaac7d340a6e6f65e15e215fe9bf587db252bcbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=f7e07da4ada64dfd04acd7c696e7dcb2ed0c647d5345d1fca39d880c390bc341&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYOQWO7Z%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFqD%2FHH%2FvyFRvSxCDCkUFHNLdnsU5QWdYb9dPdY8zc3aAiEA5b%2B75bxEZ3uzr3QL4wH00UeT%2FaxWItcU%2Brk4L78DSN4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwCNgaInILgqgl9JCrcAwg86eWBvzR8Xoim%2FCgzEzP6bbMIu55%2BeVF9YXQH4V2EII%2FZKq7AsjoXTBwBTDtL9Bdh639jYfVZJMaIU7q0RU5Mft6Rc7rmFAA%2B3AgFdlYTM2U3J5NP2boXjGHvjcHhDwN6EAWBp7sQ5jAij9FHM5N0%2BiormTBuXeEvNXrcsAIlCka5MTuClR%2BFXfvxe%2FzmDqW%2B0d3%2FSazEaxSHS%2F7Fxme%2FbzYD8sTa6S6Mq1TwvUGWcbPh%2FnGejEXtiL9jtCdrbCz3OR0mt8Xt0Ndbuklil9Zt1C%2BL6N4vKma9JG8qRcaSfKK093O2k5QyyJ29mLXrSt4%2BA6FBWuKvGVhBo%2FlcxDkZLuQERFGKTk3zfTtKD%2FogCH8%2BaM0QiRsY2qZ2J%2B5G4kU8mvyqBo1WyRF7e2CdWdZOpcelIxrbKMs1I17zq7y7kC3SJebqdwWrcOvjmgqQCapIE21NdnHxiXAaToHO2CZiPTpByx2r31OzmYcIjOIvTiKhdo7uuZ6bwo8yYz0faubwdwdpFns77%2BKx2lhenBhuRcYF6nZ3K5S5vczvcb%2FmDwArDNWAl9bOpWxzR97Xx8p3NrPQgRtt4s4Q0qXkwGPR4ny8g9zU%2BDQO58FkYlDlPHRdPMi7ExMqoGo0MMmy2b8GOqUBRL9iImLyGUt5DaJdEeG3OaPBOeBjk0s2%2Bi663Ra%2Fr%2FrqJoKKWw8wshSatdsslO9zAr4xnZV%2BAfc7B3t5JsQw3EsxQE25XhIFeb9JqTCSf3DPdcnxEBFLYMZ0tOisvSic7dKHR60%2B35DOCOc%2BryfuIYovwsCBD9S%2BI9by49a4cjLo7YZbZg%2F5DA391nai9xWvt%2BSv16YavdyX2ZWdgbVabO5SUCiv&X-Amz-Signature=7054123da3ec3f9fce23508365ffdeb9503960b64fabaf372c4def7c43bc4d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
