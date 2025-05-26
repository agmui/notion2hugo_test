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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=e6657a332c1608d4049f253fe70435a8b065fa50106e7178f1508dced54e5295&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=28c2a96104b2dc55e6244093b683f45f0bafb8b3be1353e1940976d2cf58d240&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=6df7c3f1411b971f2fa4c45cae815cd93b60181f1a5231780b91b4d3d0739b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=0ddb865c73efc9e155502eb31ae25e52fbfa524e2d2e7c779f1f37efe6e6abe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=3a64ad87fc86d3f8d6bf3607d9c4c4380de57b527d5a9a295d8d4741263db5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=d997414c634dac934c405ef88042683b8b897f36dcc68e1c410b9575707c3830&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=fbd8273de4b45877118f600754f3f568d600ae0e3d26d80d12353adfeca8c53b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRQR6SDR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV6F9NIHfCI1fEcWRXFKZPPCSWtH4tlS%2BcOEQSG%2FRPIAiBALJcpIJMjlYS60E4uDwBkAR9vNbIOkEfdJ1i8iuS4BCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMp4CxX7N8CcnwqJelKtwDmv3jui37%2BXG0GWA%2FPsuqyMvbcAmwu5kcsFjSbLIsYkH8RympFHu1RLq3YmgW0fEAfWAeCqW%2FBxfZp6Y6Ff2fSOx9zglDzrEWpluoE1E0voV0re1gRJM1Q9zraDKPcbnaDL%2FuJG9z43UvDOlaHpXqcjwagub2dehhHCL38pox%2B2D7UZJeC5ybEYuCd3w4MKFuoHTu%2BXI3YucVIYTMEGmZEOQNcNPlLjOON%2Fs2EDXgbz93qnEvBy%2F5qfsfJ0Kj7pL2JrDJv5pExayxE9AP3rbQ1IUE%2B2UADmskeoQUSSLmVYg7QA3Ep0fEbUhSFP86kqdk4afwK8oquXNZ26nN%2BjilYeRgIF9%2BVmzNwVZD9h8mDg28jkJWrOzfTiqkXyiFNeJjAtup0Bv9sZ7luT%2Bi9dEAloZGyksSOkESAgSbmfZ35HyaGCPJp%2BBIPR7I4b4Tna2CVYtu3VKzQrs73gALBR2Mbh5SQrpc7glmNV%2B53G6D4QCQniUNIHSh19eA0zvFXKDvXP1J1aaU2%2B28wWzIWknwQmJh7gSzQ6j63BHCVkxn2KMr0EBvyZ412TidV9TKz3X9mtGjD1YcXh%2BivzJ4sFX69r5F7PEP9kl8Rh6p3mpjn0dWlAR4JSPThUw7SrYw%2BM%2FSwQY6pgHGqTsPodBnQdh9e7KKLSzpJx%2Foou06Na8Tm2DXbtm750NsrVaGrBQ7nGEASfJYt0hqNiE%2FYn%2Br9f8wpAPwG8o%2BApaDvLJzTi%2BAuEonOVe21odXP27IAzKpw7zRaj8ljjdUahKC4DlNPWwvLxZYOFH9EWQ6vn9%2FGHG2rVx88A6SvJkyyps2XIeO80uMrgK8d%2Fu8JB5rPY%2B6SL9AOpPtl6ik1%2FUDG%2B8N&X-Amz-Signature=eb93b5208ee3c806fa00b2820d5d2ff9390f6f9da7e751f9f1a35a8f79f3aa46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
