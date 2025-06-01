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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=0fcc9450c97ad0bfba85267ef331ffd30626e277c8f3801103cdb7e332909751&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=868c7fd651d44cac1252c615e95ea127d2363bf09190a58a16749bc7053d44c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=e01255ae7a1ac75b46c7e411e58fdc8aa932f3bbc0bb452680507de90357a351&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=ea8b62c1c3d59703cfb2c90546bbda868d4119ec450071f4fdb0e471d21ca3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=8aaa9bd20397ec4bace50f6865cc78ba1b2b4e1f198b18eabce009ba3bf0bdc3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=7e32868c6ddae358b88be248efaa87c468317cb89b79b9d85f8113f322dca144&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=be04593eb80d1f22354a6f77fef138041ac3999a69303c21a7e396939c4e79e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFZFKKO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZfaBHPPO32RyrgSsOAkeF9wx%2FAS%2FuFE4aUkGIaHoIWQIhAPDBi61RFE7OezhRGPhUG3TWMWfzqQ6di%2Bn4mKVXgKHAKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUwTJHm3BfA13cWIkq3APdliyuseNaXsTUPlHJ3s13xzlJpbESx%2BH%2FQsAh3vDGPPd6jXys2qh8Uny1G4%2BArMsUdhuDA6SkxVPPaev8tQJ5bxeIov%2FvYCO0OC%2FHXXOWQCcVmGzybIh%2Bycu%2BJg3PiRZlPjDwQicOuq2CKBdayXNd6FQYwluRmvlPUgXDMoM%2B71pXWQY3TGjtEUN%2BHzs8FXEralfBsQYwIvYuFTrQJHBBHsXqxJI66LKJYgEJ9rUtt%2B5Wf3dEw7G%2BtzSga74cgfmwB9fiqWkxXHYLO86UpLFV%2B09zK4h4uBkNiKru0dDxBGD9C4Bwl1ZGCFzRCKFcd7T78El37uj%2FtGt8Q3WMm8grA6cgfQZHUpgNQiZxhyLO%2Byao4z42XchZlZXdIrKZd15c7RrJGXTL2v0brhuSuA4a3fulvF2VF7AowvxXNOq95xGHUOUBkNLOZsIk%2Fk4mGUY9rsxun3MnVr7R%2BsFQiU1l25Q5%2BgqV0rIGMbFOp45GsQAjzX2LW%2FC5jZj1IoVWgdSLZEfznN9VcHga2tdTubtKnK%2BgCVozqUv5rq%2FTB76SO6B2ezlnQgtw7Udp0yGNDIdyT%2B3qdYJIQ5H%2BRgSSOV4urbryppmXyeusT2uyE7pI1U5Iab6HtB7PsEXgujCKifDBBjqkAfOvgEvKIb%2B%2BBrUoBVINEMkZcOxq0R%2BO9KYoDNlcnd3NCZPlyqyCSZt5oWamkj7X1c3DavFdL6L56GQohbNH0uwBGN7lABtA98u2m7qGWYUlqxCgu8Ze3qIkAGGp9njupiBoZn%2B2phUnPES4xAzIhGKwkfvvpSTgOlUShJYMbSriw%2BAijSes19AdKmBoLEjM5Q%2FYt4FZo5d8ZG89EJSb1UTayjtB&X-Amz-Signature=7704c2b319533158cb4805cfd8766ab06064b3213c87a255eab1d16af97cd51a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
