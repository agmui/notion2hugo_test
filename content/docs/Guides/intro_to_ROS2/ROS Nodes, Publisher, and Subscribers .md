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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=ae0016953fbb4c2bf91f9b9964d806d91e43211a7903aa57e8f7bfe6e69cce25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=3ed991388dcc869f6b8042692963351ee725222cfdf2623f1b5074b6a50584f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=aa0930a87422953468b6c9494ae61b97295dbc528a5e6fc9acc4aaca7a50d2a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=4181c954baa9f96b79848258715a02c50ebb7c5ee89a026a944d0c15fe2b7b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=1c0ddf9529ae21fcdec6d74d6dc071793acb00428a517d0408783a041268c8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=d9d808305f7e1aa2fbc9569d0ebc466acf5de0059ffe854b174567c3e9b18fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=7aad983721d36c4993ba4d0e7bc90c1a7c7016fed2f2f44726ab1cad1906c422&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2MB3R2W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBftlUV453JEkSxrEPOFGg6YtfncDEa9T%2FRr6ib7htIzAiA43nugXg5JshTTuIwpD3%2F%2FihSxOc4zsXRQXcfk4RSN6Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8IVD7%2FHsP7U2AYd5KtwDa5L%2Fhlh%2BfwYeI5%2Fm9di7k7qLMzzmJR3ZJxbzDqDv4wB0zQhI89qNPLGW2CfKA6y5KsJ5FwuEL2H7gpdZ57NvVT29twBi2xApK3PtOIgWCV9a34dZ74sEqbOdReqp4U1Gh8T0Im5tjJK152uP1gzN6DyMQ8KuJb249lLsQUC8cFkLeXk275DQ4ccaHBtQBy%2BPPAikHllTK9FYdbbKf94EWIL0uuhF1ESOUFlLkmxast9qxFp%2BoWiGEVOe2bEPUpzShGFtJrxXpo2I6N%2ByVTYPrK1ByWiKU43EjLxlyB%2FqSBycLBIoc3yGYSE8NYu1vq7CNRkPJMXIK2hmouqt%2FfnEwnBqFLfgpPU9atqxMrDuZ1zyDfpaDyOoReBjobI8XL7XtwiFynnnxNCa2w0rM%2Bib3KrHP0oETBWT1JVS%2FienfrCYJAeD6OxDliLQ6cgbTco7hmMa0%2FsfIK7Mua55ku2ucMJKbCzDxqvij9NKnLAubX1hovKFzHGpRuCnul1PJZzobGz1SDyfdwlLbKTGP3yPFoyiwrLM0VpQ1PvpKi0o8UZFuergmx%2BbJnqA4uiZQN%2BBvecaStDkJzvYCOHVc%2BbQVIRNsximblmw0ZMRHKKaZY9QQaLsvGWBceRUCUownYSywAY6pgFl%2Fh1BTwi0kzEGZd2uZrgb4s8zxb3iTJA4qRF%2BodEWIy97kUG%2BNa1gmrtK7vABfThdR0MccsLL3%2Fg2SMPb3YdCe1iM3rQUjI3UrKuuR8RcToNvyornDOCOhwEnXWKwZxrIN1UGpN3pFF%2Fg17Wc8t%2BVEqHuwchotPb4Zcdv%2BwCsk908ZE3JGj8zPsU4yRJHZJogQ3xwOllGRMln1g1m6MSp%2BvTgudng&X-Amz-Signature=f5424fecad71cda55f897a0070caee06eaca673f82140dfa207a71967b42f762&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
