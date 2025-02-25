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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=0d3724411e4a2f7586161632042b795b4b6c4b07682428c008495060d6240d58&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=db0a12e5fcd266952ce80911a02e80d114641b452024839e121bfa45114ffd51&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=90b1c4fad6baf3d970c543d24c48a4f9eac8389c0d42996109e93c8d67e6f773&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=fb6ce4219b10e52886fc71c84ccdf84c80c5bb127a3966ea02c8608a70d33517&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=1f111642c80e56a0f332926ece02d9059973215978422ab27792641558480647&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=b8bef1bbc7db3ecd989a0f22f9ae8728a293d3c7286e998c5bddf99fae354e02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=d2d2a94afe9ee58e20ce204959161fd0f81f786ff372a786299cd1f0205c058e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DYO2EI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIE%2BN8pbH5ud5SbBlDP%2FjmcZpE1S66t2UPKSAQj6QvXwAAiEAoCcpwj9q9zfOr5D%2BJZl%2FwrTVJyz0W7WTIEBm4hlah%2Fwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDC0dNYUSU9ol8mFnZircA1iV1cgg9TdJ1zQcEHsrpRwRw%2FXYPT7yyMcwfwhTbXMId9gm898cWT1Ilf70ME2fO8Q1zArdVmAj5%2B%2BXDMPMWoMpZhiM4qqlwo3ivyBlR2g%2Ftpb9cRNh7GeKWRUzPHNEVsgdxKGHj%2Fm%2B6hpdbTYwi07bJLNoKUs00lMsz%2FxtknoOP3EeftbR2aQis0WCntlLqB1rrsElBgWuvfSpe%2BslxFcyD6bUHiOKzPVlYVTHDY2YGpYnWC7m%2BAXivj%2BmInhhSn5JFW9bceHXCjLgeAXsh00j5biFc0b4k2yX7JsnoLAfuucmKljTna1qzagAAcsUiQ5MyEe7g40cLaMuKlIr1pIEUMDCyru7Svj8B%2FWP3U5ekL0R3kNCJs2t6rz52S42GtGuh3d%2BY%2BWzGzOkAFi04C6r06M13R4JXbNryeuci8yWGBWjnFr0Ztj1IhlJF6qqcxlVRRUJE%2BMRv7%2B2klaUK8J8UlL8YTacga%2FvPwopsMA7Y17Vv%2BRTQuliEHlZDlxSjdxfqOmnOXNITeGSg6BHmbuNQFfKSnymNym5Bg7u%2FSiQpJKFTKExq3Eg9tyuifNNFf2aO%2FmLePiIOICfyLoEHVdkqQJqGbhpUlJhIn0IBa1OfSZygyvTsY7o19fZMIaI%2FL0GOqUBGOBwEYN0K6XxTfuXeg5JnGAuvR0XNNc08AvX9wrR8YLZmfzBxujRx90mSlvu79MsgNzfMEnJp%2FnBdPlTbdmZXoB9OTQm2t0Dptx0s3yPP3r8Dpuk3vkGhX1iElUSR9pc1DwHaqbcJ4fOXOWrPsoFBdffL5Y3rd7BoYPuApNw36nlbUH8Bjf%2BX4BiC5XSSv64KvJi8kfDSRzVQnbPUvaOT6LUfCWL&X-Amz-Signature=4d4fea5d624ab1957d4877dbb052f066e9303c3d40b844a5b099a644ecad046a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
