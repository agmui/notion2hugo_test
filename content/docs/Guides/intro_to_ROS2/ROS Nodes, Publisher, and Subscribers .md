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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=15a677bea0db7cafa690f88912d7c7b9bb5ddcec61d0f02cd3072d7afc210343&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=5e2fe5a190c4cb603e94bec80574cf42882a2695bad728a9dba6c7434f3ccbad&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=7c7f51fe53f4ef975326beb77b683fa139d19352a78a8414299b6b019d1d0a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=f83be485380effac485ec87ebaa0e1f7c7b944a424a5ed2001e7fbc8ed136b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=4cc7b8272f955b011e4adff6e7877b3be48611d2b4a20d4ad8cef82c88da8483&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=50617cdf0035f69243f5e6017b21a3d707f9211712b07b0bac4d8f6a494ae3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=63a647eb297e10fd1784eef7ae1d3795f951295737f604b3d133d3cc943eb54b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IA22OO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDLC9%2BxYoiuugutYZcq9Z2jrCTTAKTVMWif4C2Ydte0swIhAOlvzCKN99joqC9WjuWvXys0F9JW12DcptudkgR%2FICTqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTEbyyPHH3OkEXeI0q3ANXo66Sd%2Bp09wPCfEWAr%2BqgMGH%2F8eTeHCBNdtA5YKYRB0CQxqUsVb0yzbleRU9WXKt2Hs8aAjWOfEXEU%2FR7qLNfumStIww5dHQ6UrU2SxO%2FN7Y94r6rketYMbCjN8GXQtnptw1LxP0hr22TF82Shdcb5v1dYMreJ%2BmjV7yOThf%2BrtPX3QlHqxcADC40H%2FG04eUvcm4Yuh2SqOZ%2F8KP8HY91TXkrg7UpUw0AXczu4sCOy1sS2mCUeTbHiXC66Pl5x5OEcJvxsmaksnniRo9cb4UPoPyEUbfKERWLjdqXgPUbxSw5jmf6YLQ9%2B9CaETLVn0fdG%2F0W80tvPy%2BbBwZ8QXcuBgdb8Ra%2Bu%2Bb6Gxbz61D6z56f2LgQk9jyMS%2BnvPLustJW1YCHfa%2BNtjc2Me7WnO2II2IkD4GJ8TcJrevsMZnzolG3DubkpEfjAPR%2F7VO5GYibbTG4geiGiyx9eP1gCsviz2zR%2BUVCIDzYX8bPKis2a38GWh4gvuV21R7d%2BhUn6DDnew%2B2jpgZdhOt3k7DOc6qGnsrTLYRBFpX8U0ftmMY4KBcosMU64NI2KW1C0p89mjOLZrtEgJdDN1xVvzjJ2k%2FI44mrCQkLRv7MYroE%2Fnd%2Bzx5O4rS%2FnNGRzpFejCWxo7BBjqkAVxhODSVMMLZ%2FWRU8WrQT2C7syhSWEDUjpzkei%2BDYaCZw%2FwybEWAn9jBvOeN2j83YltsZfSB2hBkHKztCphnkPEaQJFp3m2iPycq9oQcCji5s5iIgEmEPIOK%2F2vWCVldB0UqUuiIkMBE%2B6%2BP3mV6ek7fZc2Nfbp234u%2Bn%2F91tfNJoRyHSAtXe%2BRVsX629xqyq3jptduVVPyha%2BnzSfkt1jE5ocFN&X-Amz-Signature=e382581537fe9b6f0823ecf2b1ca846bcd08e69af3355509ea0d247cf8a88328&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
