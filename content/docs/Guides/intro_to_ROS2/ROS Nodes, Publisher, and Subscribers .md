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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=169fdbfaa8c73565fb956218aa942e955da72d5b3072fceeed781efe481eda2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=044436cbd6b6e0eb45425344c87fc10382f3698d46d34e2e1d4fc50f83085b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=85caf82d73cccad821765c0a24beb26e9f8dd164789b90f1c1314b9620547f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=a5bbd96df5f7cb611b714b202feb95fa70481f2888505e3b0cfa929806ee8a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=f1b75110ae9db85355223d6871ec84423b90266316fd6c6c068bd07c594e0f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=29924e98774272ae74de87f2288f26929b50a717eb91383750d36956d0bdd0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=3a28e7be797bdc4b69f4e548a37f1c719c871d797b6a341c28d9aa2ac210841f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X72Y3RJI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FBO2KfvIzC1Q9o5FErqr9xy9UKYyQ0uZzloW2PO%2B%2BkQIhAMUlRBdb8AHksZniZ8QR2YlPKRVPPicjHsycQ01IkUsmKv8DCCkQABoMNjM3NDIzMTgzODA1Igz3VAv5r05Cbvu4TbUq3AO6KrILScGWD%2FivoNEaO9XbT4wc8w05SifwER6j34DkDjilpdI1gPP7McUtY20iGK1KWJJKSjHTjs8PB0L39grdmztIcr0XFFCNcdwZt5Sq6UyQ2k4dD4Alidwh6g41zNS4rWGgG3DCBMRgZAAS6vGaipy6ruKvMK8OV5aFgXy49YjkhgDgoQInfmW7p%2BdBPPseV2EQmx9yBcx84ZrMIRgYJEyK8qDIv%2Fd%2Fg6osG5pzmNB3kQcOvQBC6FoNCoMdsRQEAUFRopy86XOI%2BGDBcbE%2BRqp%2F05wiXhDYXTvmLwOvOk4zTTF%2Fmu9kZau8pOO1tT3coqThJ1qkWZchiQpADaAyUpmZHIDBwXxTl8buL5reTMPRdpO4opoalQponTq%2F0FBqVbyGS9Gk8Ciq3R6CSRV%2FhUETockxyYE4W%2BFeiSit2YxKrChMa5T4%2B3UMRdGYwrnB8pUZCTs5Yg2y0QIWoFoTrAI1F9RFqCmLC8bDOATWTefqkEV%2Fs%2BlF%2FJ2t6BLhcKPpIfbzFbDs1ENaEU%2F%2BteSSZ%2F7%2FP2kG6dowjyehtywTTwQXDxBgbGsGiYb2IorSo5KtUvOV0%2B2CoJ%2B3Be86%2BX3nCPjj6Y%2BnKZjGgJIsOFSRZJF10crsWBxU0cRMMjCh7I6%2FBjqkAS7hXeEp4eIVlSx65iL2C8ugrNjq6G6YSdSyhKah4XRp26rUvWyCnvUgibmTEhBao%2FgBQvoPXafOtQ6lQo1WenTbpghasAy36ZgI3COTDl5JoiuV0HhbCL6qKt9bWIgsBQC0c0SkyNzZIhTJPwDwyU32FD%2FcDGT3xV8jG%2FNEh1n%2FJuSiZMyH%2BvvcUNNlboCfA5tdUJ6sx2Wx91HcnD8MYsgH%2FLw%2F&X-Amz-Signature=78c418f0213873630caad224d326601c1c290649ab2b90f1ea842cd6b4f8faf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
