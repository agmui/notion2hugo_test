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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=6ea7e3d50155acdd28ef86ced0fc10fcbf2366fbf6bdeaf763440d6a91136b95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=9f8041914514cff5c7b2c359cc8ac67048c06cfca7d8a7961717615aa8a2f64d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=12a245493f992b17ceb97913449344af644776c306deb4fe2260e14ef3e085a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=0f5bfc79522b33af9e8d160a47fe8fc7a3933d5f918424c0c35687cc504dcece&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=3d55d3eb680c54ca09d28fa9b33e59732e7b3c73c78627fa6e483b446858c539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=8a85abc2ac16740307f62847234bc24f981fe9ecf8b10a0d24cc478b56dc0d50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=57bbb576775703ceea4f1675f67b1fe4dce4842522997d5194ea2d89757bb525&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WZRGOO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0FcTX8ydIGnC3nIjOZ6LCQ1XpofY19PZ3IIobUfdt9AiEAsoZIQcqkL1i1iEMgdtlQoi2f5PGXAkXkbhQl22WjiEIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHaqmcHbUm846EMAjCrcA4psw6JEKCujkLWho2JKrmBy04%2F2hj0yscyuK7xQDFs5C7uH6yDhH9FKsKNfrp6JfkJv%2BUZnxp6AjjOTN2mvYDFAp7dpS3E%2BXyrXeK78jHn8cPsEOGaM8%2F8XfjIhJL0sx%2Fi3C0pQ%2BdVdd6aLn6Xe5UPUE0cpBPfxDWY43jwYe79PtNa5EhJNehlb%2F1u8X5px%2BPwZdfQ6GqdZWFOq94L%2BHTtXuwj4KPyXAnuftLGSQ9ycBJbDOoddO%2BwAjwHmbEaQead9IZaaOFOvRSmk%2FcJs4T4wRaqfGGx%2B%2Fenl5J0fAl3KNjaY4Jwww6WofzaZ4zzNx9Zg63ydbnTWWuHmTLpZ7b0oRl1unT4LZcslIxMric93WALFvp2QgFMgZ3seRzxGyZSbklMe7nAxM4B53gt6sy59dpQovDnqqSoBSlj%2F5NtGPgAl8uu0NZflbRSAFXS4yYl0tg80j4MwrXB1svInez%2FKPwUEeZluPNgUc9uUzbW36puC%2BRw6Jf92BhhQunNYNwK3lBJbJG2KzaiftVxGanHeEWmPhukDQXzB%2BpDt%2FiwXDkUTSbBoTBEbLoMrdHFKSwnZOzgSdhKBD4Ds1oAu2zmOtjgJfCszcAzQH2AJgHljHvdYMLkMX1Go4Rj1MLDk18EGOqUBDfxEyCe8gphHwzRV3btl9VMRy69RPUH2039lMNnxN0oUhajTQSaCdKqOLfDtrPTpJz%2FZxPKc6j5ljQXWBBG5j9h01jyDqdlyYhzhbu8MYcc%2BhQC577NdXy38ydxQswa1%2BOzVO4t1x5GaIJw8%2FtdPTBIVmZJHrkYmfOzRmOivsAvyqBth%2F2yG3c8pd712HRHHAdGLlSbrTEeS2acPLtCRTFcI2wy9&X-Amz-Signature=f7b20bb317a6311d9b297d79a842383bd5801c0541881bff6b371a0eba4317de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
