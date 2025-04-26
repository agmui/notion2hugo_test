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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=fe7eb82f172277ed0e23e5d46d172ff569d365012b28088c4e80a745d26a39f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=b70944610bce1467f1a7177e695be782e389d79d6f507d6bcb02b7543e8790de&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=64c17c8f891b942f618b3465ecf2f4bccec54faebf5a2da0a7258612f37d0fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=8fb00a823cc051146db8b614b847d2d2406e2f707e7afee1c2e783018edc7042&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=360641429f9698f5b5a2678dcc1b10baad78d52ca4375d959002cd413c403692&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=1b68eb83adefbf09a258184d0b4bb5faffdecd7da8dab4298205cf1f330e3aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=bff0ad0525d3c0b6ca8e6baa8cd1baa92f72c8cec87af732018a3f2e0f68fb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGZEDPN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWlwT5KZdZ%2BG5uhTCWSCLqGxLvphB%2Fb2zgqwaqtfbuKQIhAO3kL4GLsLw0mvTBkYkihcp2bICl%2F3dIvzP3IOi3ijn9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgywtQbAvkY5xI9Vu0kq3AOKf7LWfa1DiLgnSPvhuDTNSSrbv%2FGQMXZ08EehyoDaskjGpMXRJGUks7RwN0y5VN%2BxzAMWS%2BeJ9Y5Cfa%2BaAZnauyznHnWVSmhlMAbRALslwEAuAsXH6jU%2B%2F9WagW2yHSgSFXVNjM2HNsc4lNU6%2BAniz83IQ%2FFY6DRHBpnAwKLcQkBafFEsHMmASn65L%2BvntCfzGn%2FClGk9BxArL3%2FmgHmENPxC6B73GuOoQxPBHFCucRtL8iHdeOmSiG%2FqlLDc5AZ2wrz2RfkB6maZQcYhLuGDksjKe4ywivkcKPYW3ID%2BbQUJWg3ELc7OmNViaKm2Pp2LqH9VZe4FBATOJHrSvMhB3Xzw5BqRnI8%2Fe9OoT%2F%2FHhLyU1rE4NYq%2BMUbQG%2B0ncXwGxehccx8%2FwYnlEp7zxsYIzKEOvsZD1Lixr3RyybadxrlMhRGjxwNwhOVu3XyFspG0MpN0AafSZOAovIhTHRq3prXJ7NWajJBDBuRwv2ZshWrKXYXhbdRwJjgZ%2FSD2gmYm%2B9UtFInNLcFFVGKNudKFNHv5pkZ3Unyuwk%2BmfEJOUBQJ46ORSmRMOHFDDRJDxH2b96HJ5Rir0LQzdOZQ80KsCWuYs3KDJH5mTdn8N0O8KZYv0ds6HUPGyrynjTDzg7LABjqkAZFnaoI6B8BnY019SXzhUtU8pmXn9LVOmjSXg9uZLCES%2B3TPCu2McwBMPScRxZyVNqslXwVN8QKIvxLsMDepIlxqXj%2FIpy0qioCDXxT7sgNw6zyJY60Qj%2F0szn2k9Ap3ngCm7Qvx%2BFk7Ef%2BkD1fL2egpsgkPgcKqt0Xnu6tRV13%2FNA3ypz1%2BtO7bsij5cOpBfoETzRTZZseduT3qwxPzgJfcHpep&X-Amz-Signature=125113a1bac9c90d22a997636c92b102763627ab2ab61eb5769a3528bfdec43d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
