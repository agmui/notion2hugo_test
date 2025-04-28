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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=52af09d82ce233a1e65d35550d03a1563135c92938130a26ef8d0abd95341b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=30fc7b353d89a86b8d9c4bbfbc7bea2a37e099b2255c428a0a9ee580789af879&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=a671863a682bfb62f5d06d7c330fbb1df4b9c6fcc9328f29adb2903090c86695&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=d3a717b3a14ac7cde5d0db52a004b3f21682c4eca3bb99c43a7ac42d07aec3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=9d6f3559d49b3d1fefd4efc2b57090554fccea100bcfaf3a4f6c26e7b4730848&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=0f3400e2096ce4bd239d0f3a5244e8592d47d7dcaf43d5158abc85e44229fdcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=23b04cc2c7691b5aea1b59e86932153b61b1a7ff7c8f41614ea71bcee9230699&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z33UP6W3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T133326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfQoi30q%2BGOlLobpMUw25L%2B4GCs0vUf6U4lp5z3cw8iAiAAugrDxj31pQ4jV2Fe%2B2Wh97i5M1tofSHsgSspN%2BL0yir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMCcWLOIInjjuCwH88KtwDcceUAbbKKJz%2Bs0bDpOgfJa%2FQv%2FLCnhpsgfgdYRd7DQb%2FfQ%2BR8rMu63qMnyxw7az3nrUtR%2FtV%2F7Wc4nWkjFE1k3mN2nQ0xOhjnNlZHN1Y7%2BtscS2%2B8bJDG6FTinRjaYM0JI8OYeSOPJ3vQyFtFD9d%2FzHAibk67FcBJ4uQP6n3uptpa8sHzNmmGuNPOSkGbexC6b2LMLiQ%2BRMGER7xS0p5FHzzHrT4BvGgnEIa7Q8x0TEhPTRA3%2F1tS0cFYO6ZeIuqESin7VZ6dsO7LNjDpVRQ5yETBymlwPi3wMnfcTf%2Fp4SWVd8FGLxZFB3tH94UFMsgXLt9JnYksH%2FKjaIOc7hvkRYmLJTqEtJhcnJxHF7ZQ5%2FU%2F%2BEz6SS6ejdFVQBLyseXvMFH7lFbLeK9ItiUTfy3fO6%2BnH2vQAd%2Bk%2FkXt8xFVCQRpo3WTsuzuJlcvZktfC%2BwIBN5TvPCkZkl9XENLWLVCpfswaZgfBg9jVKdeokcB67FH1Kcv1kCbRvnYQ9oyO4ABxw29sRo35dIvXOWp4KIn%2FPrBLz%2F7Bi1PSNiByp7Bu56g%2FmZACFztaLMZNmKuOMIQde9KjRNWfd594%2BBZuDHOjYRFga%2BB6aQaVBAkgPaRMTKoWVdOPMR%2BD2Y0Mkwj4O%2BwAY6pgGLl9mmLMHagJdoa9ewA5qSFG69223k36s8Z9dVp3niPUHJFdyGmwIaiNN5dsBY4xvS2caV7njdJhwV5E3Wn5F6s4Vp1ferRhCrAybotnLiBTXBeuzWAM%2F2KnvBdRITOlQV9qXE%2BYpMuXXe0Emo1ICFcyGAmwWaruudf3IJeBwGXge7tdB3PXC7wXEG6OONiYuKD0vExTLr0WAdKTprouda15AOu5IC&X-Amz-Signature=12c92a64b6a393bd254e3e6af6ae9c911e4e82eb4fccb1a82fbdd88c16f79be5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
