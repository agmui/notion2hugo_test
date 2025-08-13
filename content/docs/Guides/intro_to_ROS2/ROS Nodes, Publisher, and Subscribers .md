---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=c475b2bfe9bcac591185ac314e66bfbb203090634fe5c2f77c7e1be9fbf58c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=41a9a743b67073d09050cee7ce7992db1b35cf8f3badea203f35a2371d22c4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=b8f467b43027c83b3e4f6bbc1b5c07351063b803b16d21e87bfda03caf89a96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=ed41a44d4c63b81fcae2b8f133ca0a76118d4667dcff1564999c12772561ba93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=a23d7ca56f448953083bbc0340d059ca861e65054bc2d7c3017cc227cbbcaf4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=29f742cea36e8cc2d7661496499315249b46912680cd47dd636bbc6d4e48c5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=8f3315605ca5314e3beb6504c7654bb70232df166fe9bea501d6de6a0976f929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5QDPF4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDKVMPLSVVe4JmnKioI5y52y50VjxpTmjHnFvNczSy8IAIfdgfFaD8mWTVswo7xM2ibTAsQwlVmEpIe7a6BQfk0rSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMt4z4N222UaS0A%2BvMKtwDuInUdL4Uac4VhvO0WIyYZ%2FbRl7IwhTgXa1YQK75CAxVUZtVjpn5iy8Nax305MdQRRQODiW8Z%2F%2FfkQgIGjtCV7IGqp%2B1aTwQeHCPRQNqE18F6Gt8Y3pv8Y97pTgQbVgBom3i2SncBraqwJ5pPmBWRvDUFhKVdpQ8i7Y6rEAgj9%2BI6S2mRGif%2FSE6lpKBc%2FtmXlBbyaDG3WCGdNTCcIzh12T3eQOjni3FbqD6hn6aTiB3mnmy6jXq65dIIdTMF0CoO0fv6O9o6F8U5W8LM626KGi7w6NL%2BYau10CuLlzAee75yEKW5bYI8qwLk74p4jSeoEetxdQeUEoPr298jYYUCZ7UZtw%2B9Zul0bYHY51PqjgOKgR3%2Br%2BPKq2yJFUPP1pzX0ZJA4fMTN4wDjF4%2FeAKJG5GQubzWJ31VvKMOWFyUx3Q0DciRveZlwUSlFh7aKue2CgtBVXXRkLLrIKep%2BQUXMjs8drYqxUYIOh0OEcCKmGPkHVvbBDUffUi%2BtIEmIGIs4T6ZwXGhecrGkHQHantH9A8ccuxN7vWtLJ7iJhPfrjpjX8zknB%2Fyj6sE6OjrbXXQGngGM%2BFN%2FtiksZUtMXdm1Vd0B2IFOwJ4YCmWRuxnsE6muA1%2FStF7aYbsQR4wnKvwxAY6pgF8tRnmTogQhHuaF6xu4BXB5TZjq%2BWxOhYCerL7RdBQE1DiweKap4f4KOlT7uNR5qXYpMiwSOYjyGYipf6LPVf3XDjyW96L60cphx0pHaSEB%2FbIzoUF7%2BpjSHqMwldfVnfg4gBzrvaha1f0CYf7%2Fci%2BuTiNXEoKRgv3WAMwdzoXRpntPCmPKwum%2ByC4A1ltUtOTyI3gf6cKFAsAXJog4s%2FCLo%2Bv%2BWey&X-Amz-Signature=a000ea80e46000fa8da6349d88a5dbcca977f6f228d7cf887eb9f95a9bb14aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
