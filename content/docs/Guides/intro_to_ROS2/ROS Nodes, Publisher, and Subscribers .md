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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=d5da6db5c6f1cb83aef19297ef10fe91508796ae4efa434c8c79f512ee303237&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=d82f814fc05c1b8c9c78fbb87843c1a1258c2bbf91a7c9bbbb30288bea0e3a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=3a3096da856dd4a31f7e2e1aaa6fc5f76778bc1e697c226127ecdfbe2c0de746&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=04a57a115cc05c2b85b8758beb19b537e1b920707ba7ce176ec11fd360e446f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=adf82f5ecd4d619603e135b4453d0488c2ac3d1a5244c4d7f5ead92e12592eea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=b5a3ff5bb536fc3953f2e6b15832c24217d4eea4966f815f90f34724dade8df9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=a48ce7b70455e893db5228d624a5e612cf548d526ffef6f95b4f5fdcbf930d06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPOWQME%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDTB9lPJQ6EL2k05aZUcpzMK725WlT%2B2vYWUY1VubZKQIhAIZ17qASmggiviNiSohQ%2FuSM8ZdO%2F7akA4AHauBDchpNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FIifk7NLKpqy3Q7Yq3AOFQPBAjkExSNFbwleznEzL%2F92g7xWzGpxkGY2H68sEHRXTVJvd0qY7TKGfj4Qnxyi6iITnZL19fKHPYN5XbBWgFImst1KMilfOF2PawzPTUcKL5FRGPvCn%2Bexn36JV0nReliacrnTimqMTQddBswzjp%2FHRmmFKPTyYBYKtTb5ohafZEgsak5GBRDbk%2BTpA5Q5DeR2%2Fv9DlIwS67l4NOXDN6NXbgWZPexDxOs4PAakEcoyPDqaCRWvkfkUiV3PjTaM6YPqzMC%2FSvTUEBo%2B5%2FqkIimV87pJWXzAhnGMMnkzi5M4e%2BJfGZjx30fwwYq3Ruzd42AFN%2Fj2%2F%2FnDVLxV0Izu4LttrXtt%2BNdXLg3dh0sc8zIdriFx0qL3hxGE8TDSYcS1ayogA6H65zO9jSmtHENP9X2WQvVFnsoKh8rP1TUSQaccKWft9QiJ5a6E840rmTkS%2F3oXroQAQrZiQnGPA5Es1PZsfihkrpnUO1pjXNmnze0Km5TH068%2FWhr%2BRUnQ7K8Reo%2Bt1g3hztmYyOxXwcVj0SlH7AEB%2BJN6uS%2BkPDpM05R2Bq61b6dTO58TVhPzSn5N7YphpOjU4osFfCChLLwx2jzRdSSsIF7s81K%2BP3JCEkLhbxFhaE2Gc9ozT%2BjDNreq9BjqkAUeEwEQDPnFrC33Pc%2BMDxstKd20OWb1fa6eIGqMcibqP%2FBssgWYHtjuHVK%2B6pV9rctOur7LI%2F0sMMIb7fXg749HO8VJNQmCidsU%2BopukhwO%2FJb98i%2F5boTn04T7DiLRZ6hnBPb1ltnDMysy2mdu%2BWLhnO5rhNLtfg8m5fU%2F7yhpcsPRQnBDQq%2FqP1TsBfSHGmj7dBHAQB8Zc03f7c%2BdS64045Zaw&X-Amz-Signature=125fe24497a1f8324cc94be2ab251f08c0008542ae9168d4252f34c72ff44534&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
