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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=a27324210091be0cf08f0b2aca2b7f454274f0efcfbaad3d1d4bf62be3dca279&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=39ab4e6cf6aa9d12be583a638e3344bff1a667d386b7fa357d9994e52b80f7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=b43c249ced2b2cb39072bbf04c6949040b6defb8256d60107750d7cb8a1d3bac&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=1052476d7822977f4a4bf34a637c07799b6f969d4f59ce6093525820708ad93f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=d3c6579fb4f7cc605af4f770f0a083c5f6ab6dc247bbcee28decc90a36a23bea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=d8fb98c39ee63e826d2b35b611c467074ddcb2e7c96421ecff8fa72cd2fdd8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=75d1487f2ed982d4dc1dd2a09cc2b6847b16852fb5d7968adcde7ac4a6b5b2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKY7LOLR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwstTz9Md0JTSzfQppWKQ2hQ2CKp6OnKmpjiHUgiU%2BCgIhAJcPKAWyw7ypu1yelmphhEJVq5Jd0WPwUmWd4BB26ah7Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxLxcbYvBHgjG%2FmLeAq3APcBHnRGL8ioP0AyHSPzgNZXzGrz4sVkDmuxQhcM3xz6s0eXTRuRpiWqQD4aQssq3Dmlr58%2FeOsfPKrpEcB%2B9TWOLK36xrTR1TJOI78aBitB5aBR04xXTurb9TQOu7UsUCALMgpMPC2hNJZz8Y3WroSAeI7RQXFyXEQJfIwA0ftlitzTRTIqKynPR0lsYQtz%2B3%2FOuXZOkX4EpUvehf1a91ilpoaBb4zpHj5nPeUgxJjbtZx9c0otGNaC7RLrFbSXqpyQRy%2FObJ0CZsefU%2BvPcPH2du%2F3LYVCJgWRvMfvl6tnaodwEavISD3oF87vSVNBxRQK3QIzjLDhEQjAC3BANpKziSWjy%2FQq07pIe%2FTsXX2b2U3d7tkoMvLGEZqIQA4dnnHEyY1dmDsol6vkCP49Xk18lQr88YTt8EKBXNRN%2B7u0Lj7yTZN0aRu766AC4ZNiV1HTPzF0qIg9AKqjhzdBx794LQY%2FBWoSbe8O718EQgMaMOYzvmD27og9qdDldCf9Rc52M3lBoIXvIyuS16CXEKG5drNy7eA0LTiZ5v7yZ2GHE9ABpAPZDIc5G7uYHCTzIAjNGPUZ2nCl%2FU2yAYpSesyRtqphCs1QLHHuIx194nHcI19uaIECXhrLJHmhzCB2tXBBjqkATgs%2BAUBJkz5Gjf64PvTGsKUgUbVn9y7sMWbW%2FsKdd%2FJ0QiH%2FtcF83uf4myT5jxnN9AlohTsvjDkRpIs6SGEbH21b6fTYBBk2osGGL5ywPIY9TNk61LveglSaS%2FPaVlQPOWaUv2g1KViXG18neJk23nzGLwH%2B9UTvg97LRoTywnMMQNOhtIm7LB8NCAcx%2FCpzg9g647m3eUF1QKvqC4QGIiprY7%2B&X-Amz-Signature=f199dc67d3de3c7f1c877f00248e2a79cb8a9ea1dfd20e673c0d2754719ed030&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
