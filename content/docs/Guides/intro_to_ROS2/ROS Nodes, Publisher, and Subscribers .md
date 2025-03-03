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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=926140619ef26bd3b708bf10fe1cfca55c03ba3d6b043c9a52fed6d1892434a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=62120c3addc75e274b328463ce3710508eac7d29a5a3d3b50c1efa0c69f6c065&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=e340c79adf1ec9c6f8927215f1b47d26eda3f29b40e60baab95b2b9455d21ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=fccae1ef93530f4b46a9b17fa56a35add241cf9c955ad9acc262834859ab27ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=263f3b71f9c69aab2ba7c1df92d19fe716f1eae013850bfc71501cd1b6ce40f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=c3e1a1ab05c8b1262318a8a79f16ccabef0c80c26482af30a47e16417c5894ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=277b433454c6edf4d12609e4907fdb8ed4f3d67bb264cd896821c5b493ec8e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSH2C5F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpofrsc1%2ByAqIapbWQt2fjckR%2FhjYLpHqW6bHtU%2FJNjAIgQFPbA9oAwpmbf0yND2mpPuQr6FO4uaauwW9uxvy8euoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4bvSckTeX7MhvOOCrcA%2BxcK2Zpozz9luG2cSiYIlWE1Ny9L5E%2FCav34rP3HA%2B01lEG3wrBuOmBWabqjQxLNDXDOESpGzY153OuPAniyNCG%2BoL3dwa32YT9Zpi0IUX2jrphutriZ4a7Dbt9tHQuR1nf34H7HtnCzuJiqLbDEgjTxq7VVZTiugBy4pCI9gp9N%2FkRfH6qPZ9MRjsEDrQWIcTc%2BsRdH43zZVxvrkV%2BgZBuSqUy%2Bn8PdmdNgr26S84IUKgdWLfEfRNTY0sL%2BzO7a357I%2B9elPTOrA3GQ%2BA1%2B7s4ZHwIW9VsLU6NG8uSvKPopuNLf3KKFfumhEVL5TWeqAAjiGKMw5%2F9ow%2B8xAkTdfUaKKgijV7pOJVi6w9cMzVZAqP2m4vbpil%2FqGbrFzx88E6YLPz8rjGUcJVMOXN7SePN897jPQiZnOkzpXkymXiqlnl0rUitKMY2FcqBkbehyf1Fd7Cx2GPMENA9cqi0wWOWnIt95DBz71K%2FCXyOhpE%2BZXUQIa2UA8XopC2wnqWPmiiE4ZhbAddO0mKZSAMFeGFNZydGAEM530RFbKGtpOHCuZjonhr52toVoWYw2TuygAY4gwYxYRNx7crC1vcH9tLyT0AKj3ho%2FeNTf1boQfZzdQYDQ79Kv3otytR9MNq5mL4GOqUBNFIDlvuhZGfcrGdiTZZE%2BOyDspxTkA8bioN3A9SUF2ALYPdqy3CoM1C1g880jdzpkkuXctzNaLWyAuYlSnPRimMIfnsDQeVBd6sNgmWPc0avgNbhhlvSk0ZhezsAiFEDwE0KBiusFHDgLfiq0aPlrcKc6tNpBfWsA1u53L0iLEDgrRSsgEFUNx9d03gHiGlpBNpW0%2B1kSjlVTuxYrCFfgUQEmekX&X-Amz-Signature=7868814f0504e8390f9c3db7000cda64faca96831c6f7cd83edec5e706da8696&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
