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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=408aced1a9c80e7db9503d507501ab6d7995279e06df7a67ec50565607e7821b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=925c9d0f041a4e32e3abd316c87debce1abec5fb793e70687b17a9bc0196cd37&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=4e446e97bbd64106b570775a88ed21b24e841b2cc656d5a9220e0345cb0ac84d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=3b25548e626ad484af8c8b895867cc74e9e4605a43b95787bdd590e660645430&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=f68e65b18dd5f33a1d63c1765a184f48a0e1a65ba7614f79aefa8cf65d41865c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=3d454eb1a7b8a39446faf4fd9f2edcf0d161edeae1ca242d2794d6fb104ebf50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=f8f14424e4c19e2cda49a02f09299d17eddfa28ea8d0f678be3725cdaddfb2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNG3CO2%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD2quIyv8N1i1POOcG6%2FIQt6Eynd7raBDSHKyf6mWmlEQIgTelo84COo6G%2FmnAb2y0Kxolum9YT5iZxXB16LdE0ix8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVm8L%2FCW5SVF4aGEircAy1EoBongsuvPYjk64O60LjnTmZWJyAYxXO7WKK7Zv3jhlNLWqBzrlhuSCARTFUEnyVEtJR%2FMgmywEkoxBrE5AocCxfg03zLvfkm6N%2FIbuk%2Ft%2Bio8gK3gzToSkYbxH1%2FEM2EalBV3kL84oGPKCnADGm8p5gdXW4d2b7qGVWStIWLiBUu8OCBuPRBff1xtWvB1O9LtK2pMP3sN0sWz%2FC9vS76R0f2Vbqbh%2FypQioHht4uqt8O4Pvpu86V7Mr5LtgvzdlB8OivrGG6Bt1pUfhanBEXZBVz06uXizlM%2Fl2NwfDfm6v4evj7vMW0HdptIuuNFXcWLe%2FE2xLCz1tDE4vGgymE6lsTKjKXOSU0TYBTLzF1%2BQi3ZgHl2oL5KcrbRlPs4oKVShaN3lyuzvTbAPCkFOGNeJ0ziYms8azEI3ED0naki31UPfE%2BftHF%2BxHXja%2B6H7L5vc6cbdWSOWxbZSc8VAX0YBBals3TFFWaHR4NHx70lhkf9qwCaMiK5RDtI8ta5LR5knXFN%2Fcdm3Q5Xrvw5AAjsEfY5nCTW3Bm0AnPhaeYf3ti8zqt1Gdx741c1ExQDLYSsElv6oUIH3InxESvyOEsOXaglUQN3%2FsEGTp3CJLAGo0XWBUkDreK2Y80MJSdycAGOqUBd7MyEbPPuj5d3TdYh%2FaNybeDkhKBjC5wrXy%2B4lbjH3k7pYUUh2Y6OgiYNI4rwuMlqAFCaxC0U145eFUDJ%2Bcp%2F9JyDV%2FB0eiX0ilF%2BqDUvkjSXXxyUYmXV0QRj2FXoDLbBo94p6laPLgtJHvaT2wGNPllRtLaT2r8BqqdDhHHtRBDAC09fajPTQsP9Q9rcRHjGEwHAD6NzlYgOl91wPVhjnfir8KY&X-Amz-Signature=928c6ca766e839203606f2a0fe8ea39573930786368f25862053a63a32dd8617&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
