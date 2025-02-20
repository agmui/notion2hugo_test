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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=ff5a3e5473acdcc0c8c7a40c1dfc57a159d829db0aeb447bc5601bf4f124f29c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=68b69c10837017ffb2a5b1fc25ceb7c6a427817f5dd5976c56448e37bffa2d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=634d8ff95e4f2abf9e26c915e1fd9e6f3a7f2526b6c8bffe2febe2c0cfff2b15&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=544c7c78061b8c6fc3d053a6bf6028378fd257d84e69a17c9f07c5e665b46b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=cf42e83f16a6b4fd5e62602eadbc83bf94166d8fae5a70f45dfead9fedbc6881&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=f3344e4d0fb8ab4050a125c1d1c15ef9867b5cdcd7d5baf9612809304a92a588&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=81d497d5a4d76b859b995bfaa5169fb87f9cf3a094cca08fde73c22743300277&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGB3HDVW%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAzpKZ%2BWJTFyM4KvqgMqOVT5T%2BrA8f7jP1Lo%2FWD6wUAiA2qGejK9i1hJt38Xia%2FDg29S477YTw6cSwXOTsutiNkiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSfD%2F4LUFS6UyT%2FAKtwDLKPZ2bmgAaZk9M54CdbOTaL3RNKr%2FmplF%2BT%2FxYGsu8ANLAFacWP%2BCe1o5%2FxAVgkEm1oui0Ew5fkxJ1yL69dC3Bkcw7IRaKBYVhh4vBuQ1ih539VJnVtrkbUF8kixpnjyd4GGWDeVExBfNDyRFydN5hJU6qJRUXp2YIgEbJ%2BK%2FulMr1HE%2BVwxFzZ2%2B55kg9sIwjI%2FocbSzG5n2bKbBj%2FFWj5KA%2B9op5zVYYol840a27OuZPsVMMTZBm63q8E0P%2FVOYW%2B8m845Waz%2BzhurIRDi%2FtPs%2FmAzD9AfS%2Bqfjw6TED6EDt28I30tmWeBHiZkLBPsUzGcii97%2BM1hB4KtpktdD31KCkrHmTjpAN1w6slzBDHJuZJGH%2Fhcxu8UgeDYLGZ%2F2Go%2BiJJc0ocUShE6xnnoxipGnypebboDEkYBrDfxjPYOPlLmkm8zECJKn1ahHoXruSIRAcj7i%2BaMqyLR6A5zPH3m%2Fs4Sljq6fJrsXV1Bz1bitPVahTjtsi4n3RQ7fVCy43ac%2B4mWqSQoVTbmsvPVHP7pD7itFtuEcLrMYLA8MdzJWidtOCf08dOGifJ6UZQnqyQoUvSVlmOk4na1%2FGJacQYEHFpmbSYDN1RkmtJDJhmEa5oZGGUT87o9vo0wqo3evQY6pgEmpXka%2BX9nkw2cfZZQhDt4cOtUR%2Fg%2FFfjxHxy0TouaaTRWhPu3mxvTdqiVA3bhXuhgbuK8v14LExlT%2Bws%2BcwyEFp56xrOvbr8u%2BFyrhLzzJmgiKHzGDw%2B8ZKNyG8f8N%2BiPyd6B8tdH5EWqXJjJufPnVL38Rrq6JrE6u5PiCKlPRw2XyxjMjkMhNKf1AuIqjaY6dlsVkpTLlM1JYOrP60WaIxnHfeYj&X-Amz-Signature=83da2f4b5bb76b6302a96b8bd4f3624d8d48c13e4a7838273535c268f93042a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
