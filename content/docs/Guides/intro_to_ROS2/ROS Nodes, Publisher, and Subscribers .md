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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=bd6d90f3ece8d292fb1f3f4687fc8892d1606a05a59c910f9f6b4052bcd1c99a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=4ce485490f9f89841cdaca0451efd594c716115a9f69d662346580bba2635f35&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=29f89502afca4f51183fe7697b9052dd52be473582862770ac89804222796f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=7e22f375f2804d1fb9bb29c1581112add44163b012cc64825431be456dbe4270&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=a00d2fe9dded83371618b3c5453ea90f457e596d7771cfc79585b0cef152bb83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=a3c4f4716dd752bc21166df865b308190427589ff7d6d9bd408d8269bc97dbd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=c1e104534d36ce19d2486751fee5212e876d8927a305f3933fc2080fa2962301&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVOZ7WO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD55CL2ClAnkXzjRDgqzAgDpFZmZzpv76hcPeBfRkO7iwIhANR7fPm9E8divKoJevuHqC7rQvKwOPf2fNodISoryXMXKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZdUzuTSC8rR6DAAq3AMNy3fO6iNJG5DmAKCrJYk1Zrn2T3r%2FsCs5dU38GwOyUseN1wPtDNZWuOOL%2FUSe78qEEu%2B8VDFXFmsqU6IS0svV%2BElcL57iSH0kfcMJ2ujTXFmIYwfDfkWlts3neKfu9K%2FPBSVViCgnlwaF1yP51I3FoYvO0BOTeGjnN0PAikGWvlv2TzO8NGsjDgrkDxWpfs9Bu57%2BiSGasJW6ffEhWbzdPfV3ytDquA5vifCGH8BLPfc%2FbDKBzppFy80XwX58cofO3M%2Fo%2BdEui8599urMFFA6zdLeDmXiEtAdAPIsksBLqMtYaZphVzU1fFRyj1%2BDdiFxbNjDmHcjwe4TDX8ejcQEtrZP8fORAfKRuKgdMSBcPJWDrg%2F8MZq3XVbCzTVqfrhXwJibXrNh8xhlJZLiS9C7tb%2Bclt8vbqEDVIP1iZ%2BroIjojI2JqWiLeM6lvbJSjuCCvEuw0wV%2B16SeziknF4fHLgwIm4EBsBlBBZo8hOmrxmZd8PNa3XVJV6uVgLRfp7nFkoc9dyf%2BY6gQaVDMh77gxuyzfGmwJFAd3%2BAE38ZyqNsHFLKPA0cQPqFrHD4MedcOqoD%2Fk0FfWlrZW%2BvPaxCFlf5NnRK7%2BJiQv1ayV%2F6SQ889F%2Fk7OhAzYygjMzCq%2FMLABjqkAVI1Br40tiVNFDAXvxj74L53XJnXeuX%2FGb01J91Yd31gI2DZFe%2BiXt1m5H5g3Hvw3YLuoj3caeHJb%2Bo51tPDgoKkN13T23MMMfUGgazuO1bjKSchm2hStrcq1ETBiCC6owPr1oR1IT3qL1VojVdr%2FSF473SbNsOuAutVt8DBEJXuYRuhOTwGEd%2BXa35zq097Err4yymqvjcUiyfveADt9LioN4cz&X-Amz-Signature=aec5d15fe007ac9419b75c12dff82ff44ced9363e14b63e25bb0242ddf54ef07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
