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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=c454401013074cdc00bed6d85f7d85033c491287007a13be89e58fd7233d1eab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=6a4682a6772d580c1e319e2beb960611ad108482d3959ee239048e4f55178740&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=53e2eb99c3630a0e72ad8a3e34fc79d4f6e22270f8d498fc4090266437c44bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=2d129cc0bf1fe02aba0b19b08a03d72cc3b88f7b93f1f32a7464771bc8ce9e79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=08e429caaa0356896a7ccd91e2f45d85412973a6e14effa8a4970d4631b8d054&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=120fbd2425073077cc82c22aa125524b5196dfa12a3601bc2537024d4157d827&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=d334746601c26a5b075b1e60c69bff3b27e17a411b66700b2c71cda5e747daa0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDM772I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBgx4r1uSk1XSK%2FNglWoXzrhqlj%2F4M3pHOlxpnFsNxCAiEA%2FHtvj8J81K7gJQELZePhgohVx1GjuvQ1nyo5FpFkt%2Fgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOYgAB0%2BFccTec15zyrcA%2FTVjScHOyFMqrTn20ADOv8vUgxSXMZ5S5mMfQLRsMyU851YJ8JmrU7CWny84gNm23Gf%2FC2Lq%2FisKmlZBIWuf%2F8CAeZklE7jZyCaTFE1zorI8tDpAqkQfpXmxx7QrG04bx55Ekdj7mYRPusOghHWht65PbwlBAFAtGDh%2BKVEXj%2BAvs5H%2Fg60rS%2Bj704MUQySnFxDw2XRnR4cy0FCCfrgQDFWFYYiIhFXYnBl%2FOH16JFuoILoTxve5oAxxe5F30a8PabvK4pwKkXa%2BYh2yKLrQ%2BpG1nB9jo0UYN8CI7ItOOGqZPy%2B5H2%2B9VcGdSTSHN7WAjKcI1AxSx1nmEleZPxidOG%2BAy2Vq%2F6Xiuc5eu93HrKhQ%2Ff%2F%2BLsduzfdgLuepGJX6nptfRfeZZ%2Ba74EAf%2FIMnhxgyScuwpUugKiopCT6yQ6CKPISNg0KG2ZZMTFkmrkEEz9HrscJSK%2FOIQYz5e8NZ7Ima7GmPojjoPSrIjeVeO33SjhCbtnwDgpbOvIsn%2BW77kuIbyhYlaMvC56xmGEV2wpb0qziJ0rLuuWHn%2FNetbZYe7BC5hXZ66lRfU4vc5XkEyALrD1lMkqX2aV8wzug2zjd8OQyq6puSRDNU3Zuk1oZjP6tSrQJdp21e6XpMK7XpMEGOqUBnlaehokKSerxN1zQ8T4f4fD%2BDxTPw3P4DVe1dRAnKHeT%2Bo%2FxU%2Fy5ga4kJ3PPoY5rH5mbEiYqH2EreLOEtxSrTxug5xvagISBqQxX4rqowjLP4OfPqH%2B8Y6mTaMqdr84PU6vVidF1befMIRqdcPIlR2dv5OanicjfZWQ73v76hPtWZzycSFCRwhpObvMbzYeoi235UfPfI%2FpCmCDTNE30A3sH5lGJ&X-Amz-Signature=1e768f2f960367265cf0b97e71aa0b22f2c07294a72146664ebfc47d99f95f82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
