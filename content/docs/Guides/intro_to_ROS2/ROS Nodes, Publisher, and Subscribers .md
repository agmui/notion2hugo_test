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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=a449263c8495c88752dd22f72f6f973c1984c05740e8dd679e2ddf0ec2e78acf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=27d6623110d93b09cee6dfa61b7a8cea0ed5c4570f841ca596095b7db32b2ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=a5906494eb8a2c56ce73e1a2ad9756fc00f67d0dfe30301627b6bb0d5854e7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=48df5b91e9451abd728fa8cf2d1191a892f0903c977d54ac2884be14223897cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=6cc788e5724d62fcb7278b902da560c9148bf549dcd04d4a38f6671499ca7543&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=57582fb6601c526e32c3220cdd0a5bfe6c983a425c66dd5a7e9faef03666e291&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=946037fb2140daa54e33583b86f1dbf623fd74301983bb881fc66cab7f83efe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UGV6OQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiGo0BPKPfvILS1CIyUzus9ijODKmIe7zvY6O8%2BOdnAIhALE71iNM%2FRNco8KRrN4muSTwjkM7B8I5MgJHGevp6NluKv8DCBoQABoMNjM3NDIzMTgzODA1IgxgboBvgKXifaxzH20q3AORdxIRajftp72M7wIN0xYvzb%2BKtX34eas%2BYzIfpKqqZAmxpCV5VpqUT%2Fji5Kghprk5zzM1%2FcKMdds8UGPPNsE5xxRu1jkFITAl3MAnWtD0jUFqodZ07bNUikm2mbJ9Huy256u0l1LsI7iCKdK7wNiFx6JONsgk8kRxX%2FciEB1MvSXaLV5RGDj6GkW99RzD7GdD2XOVXyTf%2BYqGGsiyG6DbQFf39iAzo1WHe6pRzvSAV6RD8hgWp4XBHbzoW2SZpisrLKlGJ236pXExVRhWEssAlOmXSe0cdnw9oGwEBGieTl3%2BJIZc5KhiBCLH4%2Fu09VNFc%2BxdyvvBeLEEVJABjDbwI59SLL%2BAtn9EZfouKtid6IEwlsHr7XQyGCjzAXmH0DcRXatWFw68VqXjYQcNs0lIEJvnlfkof7Z0Uf6rylLAN%2BR7IsQ0hBe1178CdozLWKsdneA65Fj2uf3XjnGy4PUrk9epKi02HVJrdAshF7r8s%2FH8hkDDDoFzIUBSMF2Gzu75LkpSXEjWfv4oChncKM6hjqZR8EFzjzfMrtvsZzOLkA89h1gmYjvYg1wCFzY0aXUPgd6FXgUQp%2B%2BhKUxwrxBXVMg9O%2Bba%2FUYDBO4rjxNXjGVkIoUTS4I6DO9X4DC5ncC%2FBjqkAfA4U%2FLqetucvBtpPzX3rxlL7KWfrFP1dAHq7Xr8P3VhOF%2FeqLV%2BARLZ8LCbtroOpxZsonkSUL5ZuaqIttr7SksD6D5MntfLvTCjbeT8Z6s%2FAK5zttYJxJ1%2BWJ3hIO1H3VJdlb3Tm%2BMr7qWfpj6Lub1lJLECBFAEWvqPxqXQ42k6a1Rkz3Z4zeuCepqVi6uaEpAYLGhMTYxevzGpCTXQI70d02ft&X-Amz-Signature=3d6a5e21659547216069d4d917185c414f6f8f3602bb0a1410cdac1dba92044f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
