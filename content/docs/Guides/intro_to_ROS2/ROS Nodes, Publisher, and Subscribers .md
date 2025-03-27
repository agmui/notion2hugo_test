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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=80b79cd17de0ed6bbba07ddc9302234fca951d0ac7df0593e046533cd028a05c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=91d68f6f882860610adc43f476b61c523e4fefecab791a079a1a68634a626c25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=b4c3e48f2e51d6451026b870c6ea3dd77fe303cd5f55abbe1cf3554c1229b7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=b29e1da836c505062c9c7b697c414d690c7d2a7522789337ec707261667c7e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=973a3b77e4bf29660b90051b30238810348749d9d52549ab63a799ccc3db5aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=c9368217ee2375abccd29b514deb26cb2ad5f3e49ee883acfccf597ed5f7fec8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=910168dd3f80f6ba7c18061bb386296b2b7757880644e0921f4735ae716e1360&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRNB3L%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B3%2FJlu9HBb4uDf7v6pEM62gnKPxnqpeGHI5Q8LPDyeAiEAgH2WyZBXtfEQaF6FPbbq31rykOYULmA55m4rE3MQhsUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFmyFNNCB%2BdATL9eRCrcA8VUoIyiW9sbJEvrnQus7mU4RfRrOLYq9Dr46KGKqiVHobjm01HcOAWlyb1o3tAsmLCGyWTDDIn7PSyZo7xgm%2BUnIUsYjApzf5gon%2B%2F2s9hQrPmlH%2FV05KH%2FLiPl0oNGRGpb%2BNQaGpGUH2hfK1GRc0weXf0MKg0p2RZpJK2M5QAAiE5yOaMc45Nk7Mn4UQpjhXuu%2FtpHGFyLnl%2Fxt%2B3pP3AkqAozgYh4x9XAsVcbMwdc7sb7uWlhgLCrruMnLRSqF0GT6AeVPn%2BPkbNXHSPHQ2a9BXQ9dedvxUg6eULpIO2wSaTJNyGZa5KrWcVAObcq3HwZNG9hDk6PzdwbAZMb%2BcXq0y1RIskwIa0E0GvSIEPVe571pxRBFl8ksmHiMHDcymOnkUNAsUTx6imPQCt0n7OCUo%2FGfJGyHoXCZ7anUpUi16FYYeOv2FLH2JcDWf%2BM%2F5ZtlsEemU7FFugDxXVxyr9Ea5tjNibl1EFKhCau1vT5D5Juyq9iQtOamzZJtxb7YXil1Xj86BDxNeb%2FvCwoUj%2BkngnwsHIh2i9qDvMAOEa63mV3b6qpHF1%2FfRgnHZc0LtZ%2Ba4eknXyH6Krn8r2p3ibgOk0PaJcmm6KRawyoa6aZx8gvvwVDWJqMivRPMPq%2Flr8GOqUBpXE5RC%2Bl%2F%2F6Pf3g3qkKZNCegLgjx%2BcZW99YFJ%2B%2FZ8QXPxRIm1qKEVtYO3%2BTX%2BesOI9nlgMA0F8oOIoUobbKlmI81g3a3Ep7WsVqJHiw8xvm9oXa1niF%2FT2GP0ZfmRBntFJ8hU3z9RW15MKfUH0CPbC2Q8XOlZxqdbTfdwPsQfxNQGmuvFwUpwfmYU5KQoMUAfafxG89atSmPrAKldy8QWWScw8xq&X-Amz-Signature=97a3d593d3c89b07e2573187f522f4f0b7a210cc9f3cf3c49c020144acc7f0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
