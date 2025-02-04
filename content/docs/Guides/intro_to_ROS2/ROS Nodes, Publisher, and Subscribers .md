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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=0086d2a91c370dfb998b4abed36d6cf32a15c1ee92a0e1138d9ca8c6e1814d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=ef244433c2155e1ae0cf792a9cf113744766a0ae39db9e0d0b3481ed1c2abe95&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=a8f329e1088058a7401e01b2e07bed6a5b4514ab12c3f06ae3c12ea404263ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=f16c79a604678e3ed935801095d94bd983d0fade24ca6493eb733fed6c284735&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=48b76ae7b577897be3ccf3874c95cef61e5edb14ed77a91063f1b447d580800c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=027c4243600fe8bcec4213ca71be7cc4036f084f89c757b78fe3a6521d8ca8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=c57870d6c21f6a87e2b75ac2481d3a8d9e54e672efb463a7804ef6e28c9db85a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARLOLFN%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC1bbXc%2BfYBIe0N7wzqT3zYkiMTEiU1X8norXN0mLqFQwIhALeM2u%2FGoJnabq5Ak163hgq27SIWbheZX9%2F4hw4TDVlpKv8DCCYQABoMNjM3NDIzMTgzODA1IgxDJxSQ5CkdfXubG8Mq3ANe3agDUnfILnrow1eXY6bW1zeYTZzHyHej4ASlCYjDZZwOStp1dMlTfu%2FIREJrHjuA9Ajc85QYx2aK5xnB7Qn1SWN%2BdVe%2FGWTgMx26O3QJLvLGYVQC1EyHugD8GwV0iRba4mbtAMUP7SvAhGRTAYnoi0ajwrDzz8DmqLi7tqG1QsIhZdOaMchmL0%2FeE3Zh7XBpXjBDTrCSvWcoaCd65RyZzWOfqJa7%2BGAO92dTmpgb1%2FnOuO7EyTlM9Vj31KiGI4Al84Wic5KiTXp4j1jLZBsKSuA6mKrc8Y7EDj8chS%2F7m%2BnZkbL2%2BZchZCof7LS%2B4%2F7OgzFktztA%2Bo40WMTA8ACLM3iGBLg12QFYC3hbGC8F0m3PbK1a82ykd9uHQ4mXkd0rfZKIKy85rsL7yWRm2RhClH2fewQSd%2Bb%2FRV%2BLE%2BWd4P78hglBtnGzQo1c6iXGEgzSwitoDm6aoYf7vearnIH1P0pofD6ES7H23TQnLxN7oqqn32jt%2FtlscvFwu1WPtbok25xADZtPTz6%2B744cUJHl%2FNvs92SLR94ZX9J2ETXAmKtYMd8GWuSEV8qco4uTPwYmUrIrZQMeObIEbA42Xyc1pGQ%2Be%2B93I%2BTy%2F09ufBEImYiKda47VoqyvN6pUDDfv4a9BjqkAXgQzYnwKhxdmZPo%2F1Jc0dJ59wEDcxEk1mJFxHnKOazVGJ4XxuiOt7gD4y61uOx6nglg9EOQt3zhuMjW0w6Hu4YPZTc7ZATrNJOA8KloMfkuRCXrPg%2BlJt9JwiISgESPR68e%2BbjmPOvMZd7jxUZkhWZjenAfupRtgWg%2B2HE3oOt3snLK5lxpNKYaIdk3fgk4ejDrKGPPH2dHs7oD5kdpgUPLVtv3&X-Amz-Signature=2b248257ca50ff94254b250504c461fbaec8a355372c8facf07ad8ad162351f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
