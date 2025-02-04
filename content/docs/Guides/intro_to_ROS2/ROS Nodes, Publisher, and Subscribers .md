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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=7234ded6cec038c93160e1b1170bb8a9bbf30e0b067b80e8aaa40b49c326aecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=02170670c49a090ab36fb7e2be006375c0be38769b826088aab8e43dc0d0fe2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=64d463d7025c9dd43981f1dab6356f3139b836ebe42046e6bcd30fdd6c190a28&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=358e09207c1cd715b90ede0f451dfa142339082901820cdd301e2af45983aeae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=2aa45c2544bbece864a55d59b6aa1c87bdf0b3e1ceb2a806817d75b2a3c37bce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=23e565adf1728de1d4bfe2c9b695793855e2e7f1536e2d0033707606b31da337&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=5fd5ef5e776a89a08f872950d0acec14dccb0f3f75e8f7001ec60656a9e37864&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53TEG4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAvP%2FBQKNYAEp4Tlb1vqUIedBZStp%2Fai2B0lNJhlRvsAiA%2BfAplRrGWnGK1ETFP7c4sOQT72LBye8OIFGSVl2%2BgPCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2Bf%2B6v8ylgZmOxFYKtwDlTBmpP0kg8WpdOyh%2FUrTAJiwJCSflXuRuL9eiTKzMdcfrQ5lIgQRHMASklS1%2BMFD4H5yerRdt%2B7J3XXd5y%2BKDgydSk1Hao0gLXNOg424BlXYFDIruyPuxJHZ0SdsNUpK%2Fb8Te4w53WqbjTYLJoVJBA6k4ZRAtPXsX5oXHbJmcqcxy3X2junxVPIhhto9kuML93NfaGM3cVbTTMhtZdy7P65SE24yMYpUNj5GgOJULJyhe1nMe6VHqaTUP4AEzLABj0ArIUqf7fXuRv78T1yy25hil%2BbPTT5X%2BIwde%2FX2usuSZ1dAjsdwSAFKhQxSBxM9BPx%2BfqMo12ai%2BYz2ILIPC8VeIwD8M3IQ1j96%2BqW7DO0nGaEpGpHflqg2hpeil3fWvM1d0Uoeg7ml9yVu59uifGe48WPSxvD7DHrOrQzRvO1XhVqhTnOMNvy1X3vJkdPsTOAxPX%2BZe0BrAy8fkMmTaQNsEXpaIuQ2Webx%2Bf%2F7B%2FLN46lI7S0A1LEGLfy4vwSaGw0Rl%2FL3pNJIZ%2FZ7X4%2FUR8o5ohLIen07FBNAl%2FACbnBLOqGJk7B1gk0Z5gwVZVbu89rzsEjmxyxre5cxpnnF%2BEz65ine%2BRbzbv16%2FbYX7lWyMHi7OjjoDfcFfUwwy6%2BHvQY6pgG84IWdrJ5zUMxLVXFzDIcgFZCJp5GdaLMFUD%2Fw%2FmQBqbPxEghYSz3Lg%2BG5%2BUyTFvgoMa%2FDjL4DTKmhfaW%2BtIe0GzQb6x2uf9q%2FTrMb%2FOPuzZVOq5ZIvO63MQyRKfCZO9CHmszwIvlkQo724sExBqyJaQ4JM2Q7frtjvnzLykbCwmI1inDEQBnJQE23k9SOGMOgoCKJuWJRmgNFB9k78RgE1D32nfHw&X-Amz-Signature=0aceffe0719b6122972e19f712c555c03bcf0e4a0bae6e299b6820c0e9fd3d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
