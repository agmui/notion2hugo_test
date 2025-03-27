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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=3f56d4b6fc86b27a10c94b591a45d004b4e8de8d8e50c48d79cdc538d2eefc51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=0681bc082fdf401264b63f3abf28b1f920f813cd32fd3f8d9489d14c409ee30f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=68d2b091aee73d0170b58cb2b85bf0ce67a55ed6175e529ac84585dc97019632&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=dc2c4d95983218c4d850eb8ded099eed279be17b12d693b2a8c4ef08d7924c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=ec3a6d76937fa6f170f7b6d0378359bef146a7a75f9f5063ec89995b9a517a73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=30b75e88fe9a48502672096275bc8fbf245016e086b0e7868b3b94c3bc146c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=2204a1e628da0ae8eeed4122cbba4b6b29d590de00bdd92a60d271310c54f610&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAE5SBJY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERfcr1tBm42OkTzUlU5dXPhhb%2B%2Fv1dMAQf6ptuseFpnAiEAtYNeE7A8DDNs0YmcV9LMAEq6GzD531OPpzplHy9E28wq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNuJslgqSEe47QV5ayrcA7Qwvg4YdFYpvYM8b1KAL38Q%2BBTRdjfg6ARlxYnKJieBLaQHpJv2qkErBbn3gEv%2FFFX5GGo5Cg8tJesy4BdM7wK%2FGMFxeEToZRWZQI7swdKjNzZiiNVkRTESLako8BpI1fL9plytlVDn1L4YuAeeZ02tCizUMgfHarawUQx6%2FFJy57Wy0luS3TZ%2Fm0%2Fl8x5uGPAi%2FeoUuRsqXVRf%2Fgu6Ve8hqdnzGJ1N6uJ78jyIF20XV%2FYPUOFTVJB7TFSnRUK9IWcr6AAOOt%2B%2BlsCIOFKZMsDzkhz9HIGrjFlj1YZexiRDdlDNkDn%2BN3ihnw0SsschlX0BXBqtF4OSysS%2Feh13FMjoHYhYHEEMMHqAcOIcDzsKKAZArvr7t%2F1KhJoje7vLfiyDpRCeKhazRl17h0nMgbfqUeF83XzVy4h9iBfzUBg%2BfQt7VD0CilGUjTQ6enTWY%2BRGRmCWqsezez71zWubQ5IGfwwFFsPPK9THfoENo9GGMYuqJwQpZLs74h4mD5DSNyc918LhlyiZ%2B46SHrzFOM34bmAEoJYVFmmWmU4SObmT4NZ7KOJgfEZHagO9SRsQGAmkhEh5SMG7Q18i9084FU0H75zpJUy93ml%2FN0Bx7tnk23LvCaAzSsGkvnKQMLLNlb8GOqUBr4VJgb4QwmN2u9IqIJ34Vg2gIqAbabjlh1vpvO%2B0jHREdfYP51B%2B%2BEacOM45qouNusS8lj7GQlFrHjN%2Fn8qZ70emRRX0NWQV3aaLRDfAhDK%2FW%2Flkgu6Y8pu%2FhCiFsd%2FWFHJqrR2TQo7GtuoDmV7bZLEwQyQIgpHJ2rNieMaB4n%2BQAZlm%2FJHEjYgdjRdhSkZWIHVeQHZA3VZLXBcwfyG0R%2FDYqSsl&X-Amz-Signature=23eef279ed3bc23fd73c74f45e70d14b5729aa15487705a0b4eeba26ecf82af6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
