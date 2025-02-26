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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=636726b1f1cc6b3a8aef73163f6913f64b2d93ad50a912dba1961bd5274a1945&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=6287299c37b5cb8401998984b2990d403d5739e5232ac00e7f4869a1ace7c2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=1bce4aaccc03286796ec20b4b698e5162436bf035de50b17c3359deda1cc0b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=ed674ce597785733f27ee8e94bef5f254300edba5ffd135985b829f8a975ab48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=cfa4dd08935cfa29e871e09e054c67ed0619e23b98dc4347ba864e5d8024bbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=dd54b26d3aa35e897324ce2e4ff22c43274c4f3163f9bb25c78fb698ab9c6e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=9cdd6a18fd7665e93b6137bc9e1d7f1f99f21ccfeab8227fb94942d1d8d641a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMC5WEFO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHEMbYSwsbtVc4wl%2BHoM9ohptYZqwRRMx7M3MhUTO563AiEA6PwQE03uZ8VWWxKpfVNIvDq%2FAMcLVXvgp6kaeYvpYbQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBmsIfO7SFEtn6RMLircA%2Fw4Q2%2BjVVluD4RE6hdTgWCXd8vtqE82RO9%2BX2DWrEwfviKjATaBDft75BU12SFtiAtZFDtBWlU8LwE3%2BExcEGU7ndEAwtF8jXeQKc8u5qg4Zxr5qk5dOPM26LsLEiVCdUEAsrpbx2M3ODaYj4FRH7aTKAhuf0eXVEtNFa8QDCnkf9%2Bw84bzpJ0SKNwoEkfmmk6%2BYaJNnivj4hlmyWcjBcEaj0Vy8w%2BNi3N6hVuFe0HU%2B7kdyxr9pjfCQLNa4%2BI04yO5uSLUme6Bxjw5lO3QUPL4ebIEE6VMnAXteo%2BL9KZaWWNDX4Js%2FZ0OLs1F3S%2B3i%2FKs9khKM32T18x09qJugJLfdnFCNTPcpI8MmvcQZF7Jrd6h%2F6Tf4oaNiGEUVKNHxkH7PCAzTMfAABjBQl49Z0ErKVHQxzQu8W%2B8G47xjuVk8H0qVoKRkEmZZX%2FJtv7%2Fm4OCZ%2BaqzsVWFIoNLSRqyLxcXXWH6jR6pv3kuyXr3eBte7v1qe%2Fm5JE7xMZ1JwE%2F%2BwY%2Fhp56%2Fc3Mr69%2FCacQ0pPNqTqstH0xmBN0QVlbBTvDtvzw%2BBJ3%2FqkBsVx9fUEDDbjcFwfMLotw2Zx4SaQbCN7qsUktkJilCBALNfwIibsSbVwlx8uydEMp9IFtMJG9%2Bb0GOqUB8EWrjc5YECa%2BNJTEytohXDNhwarVqYsgND1L2HgH%2FPL8C2Y1TN1e%2FstdfQ1hnV3L5GVRopG70byDkPd9jWyH%2BEHYVOMiJMLlUpFC05lYCURV9E85d5kZyQDYmnhdxlNGRsviG3fQKp3VwQbYEgc8GWsCz5kZYPwn3s%2FLOwMo6igjxtn%2BL4DMYe2C48ZYDxiZt6fHnrX9BnpInuDoLkDXImGYb7kW&X-Amz-Signature=f8c20418a91d3ef7c26d94b82615d0df0b412c678a4bc908182a2ffe65f3a757&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
