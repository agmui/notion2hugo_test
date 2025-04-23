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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=ab98c2b36ae1c1fc448a6c848911b37b094afe8f2e78b8b9ea92ab058e4876f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=fe06c83223438b41ac41e33bf10ad5438488d098db65af19508160e3b4c5f3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=a8b288ac76bc6428f4f0865f7f3d3298f49eef985319971f24bf720e8962c765&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=f008d551a356cf3398e76b579c113e6d5e72a6fefb9dea883f0c0b7442595597&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=9f9dc3decd6bf5e7c8daee5579057f45ad9578e863855690939fe820ad62e5ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=445f685ab79322a2dd28ef86794b6a856537fea3456671ce5a7979ef75407696&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=c298d67aca79ca8962590264d1293c035cc665dae27553c0676e1f5072876ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOOAA6B%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvSU0T3Pabup%2F0cLABSP8gN%2FILagU1HSz%2F%2Bi%2BcScA3tAiEA41ll%2BbyLhT%2Bx%2BIxhTk1kMz9uQe4RWyob%2FEe6VnV0AQwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8010Biuo%2BSbGofsyrcAx54QBG51jRWyIrPBVz%2BJktBHDHpbhbpK0%2F7ail5KCVYTLpPc2AOSuOrCyurcJyE2lG3aCvUdwfDS%2BRXGXaLVj%2Fjp3m7KX0Nkx4H7u5vgUPwsUbPnWQ56dLbS0SlBVQz4l6j0J2%2Fgoe44QdzFnX74mhScJ%2BLi5BkRN2XsJdmvdvwLWdlgCT6M8KASTFvRRRI4qPl7hu6CgZDfpF9J8xgw0u4Zq7i78ToW2PpchKyhZU21q64jxZzzlWCgb4nQAm76IL%2F%2B7OPDLk5mG2kE%2BCzNIhkBWasSpJ%2Bo%2FYBILA05W5tWjZzHIZ7%2Bg6OwlQS3U9ccHtD4%2BLXyCzeTAozU902j5MV4PV%2BDJWWDUv7O%2FZkc5f6Q0CfD1XF%2BC%2Bo4pUqgHDC8iOF%2FRLhV3LkTSKbJWOjlQswP0tUrcLy5fe%2FS2ROkUJbpD2L3qBZBz1Jr9lVPDVoX0YC7VbQ4gYez1A65QxQMU7ENcC59uScXdPxoiihDd9N%2BhAtPdoYzlXQNDpAs9KzZyrJ00oKluJ2HQq%2F8cvv51sevxrJSPGcJEg%2BDZcFFOOalcS%2FMLNkW5uCdXNOyUJWBEjUNUSEfnZgq%2BexjsB8YZxLChOGmVucBhYR2qOOT4wlIpOGhBFWktz2okqsMJm7o8AGOqUBuES43OYvI41brzzijKrwnwucG%2B0Fq%2FYC0uz7JXBLrlnqVAzftaSNZ%2FqA%2Fs6%2F%2FDvtM6JHlZt%2B8o1qUIn3vzNnf8kBqgR3YLPId9lIA%2FsnAymh6D%2BEqvRxUFgm16lNdZSc3ajAmNkO5Hp3Y8OGX1b8iIIMruQwlzWnQ%2FgwQOZM32uFA9iqLcsHNLCkLrvZgWI6KOQAwDj0orDH4QRsS0EKDm6nU4Da&X-Amz-Signature=a299471ae4bc5605a211c846d200cb6208fdd5d90acb833fa74be2a8fbe578d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
