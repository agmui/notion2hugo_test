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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=22196ed0e5dec7adc18d5ddb3d1a30c809802720361f055374962cb05b8fa7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=f597142c122c2752aa472b1de215ddcf333660b7e7e1c4278d8ca5a61aebb3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=148434ae9849f9ea06ec6804c82f3cf2a2959b318ac2aa0eb62a70666f0998dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=4ca22ac3732883791f0d81c8fc6aa73784f20fb1946fb0ba9999b1bcc08677e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=5962b95052d44c7158a4f36912ce6cc4e48e6f590bb4cec5a2e694ef9a8bf81c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=d02a8a92f521d90f4038c7c3bae5f7070978ca47df4011cc881f1cb393103368&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=33fff72dcb09390db198e0627e92fc9e4a57af9fe00a2fb4c7cf423e1474e8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJIMP7X%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BwYx9CRi0eym1AuqKk6hRMiOy26sSGl70mRULYL3vdAiEA3RP5ciYW0AXK%2FfpRp86UX0z8eZTCaYf1rYWnY0ZXhhgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPfdklilxtOeTzk4dCrcA2Ouj%2BjAV5vsfFHmE9JIOVuRH03c6SmMlFS2RpayHqr%2F1tkxZvmdfmjqFVZYKzcgxv1LtzBi5g9QHBbr5YWz2JxgTFJ0aWyQhuSgNRNWpQSozM56AFpWkBmsP1tDrYSN2PRExSZOwStsDTuhmJVGE01%2FPm%2B5kVGizSjwnNKb%2BFxUIRoaHh%2Bw9%2FGI0KVp5mZe%2F8bZsojSskk0wr5lITnzrXQyiYUXFq1VY5DCi4t5URAP1u9AZRZZF6hFGf5vKKpGJItWq3JY%2FTQo%2F8ZHrPXJjhp7sS541H6gJmSmAwuGKchyHq4ZvrA99Ms72K1ohYPDCgUKJqVQTtvAlCETGgtNe36CUsnT20zu8ka7%2FfdgGw9xJiPgdwq%2Fw4AcBUpMVKXr0Lloavs3NKElR8Fw6Ze199HTa9GfCuVRj0geFBU4%2Bl2jn%2Bb%2FYFQRFCXH2j4Y%2B6WRsJtrZ4%2Flp84utP3APz%2BiHD9HlgF3m5r8CNaukf8YyTQYP7l4yb0cZUkAk2mc0PJyycbb4uCKPwwBoXLo6laheRMhUUsPhUwHprZ1N%2FfgQQBY2QnpXfLh%2FaxgToU92CjF%2F9OqmOUTRwvhXMtBKImus8UjEO%2BAHa1EqVq%2FrUF7WToW1OMU8wSddTOV3ghVMKHA4r4GOqUBcoxtQU2eFGmhPVt5Gk7TqEkkiZQxNSxBxyc9CuGl%2BWWHkuwh2Op3yp94Ct4i7pUIe42Wh5kYWjqRvFH%2BjkTdK%2BxS42%2FvT%2F3X9bOWlWX2CH6zDhSvSmHftYNT3HFV7d%2BG2Kumn%2BwGedBpy2EYGID4E02TQSFhKp7deQzBKIMS7iRv7tNvJyRjGkKZGGCyRoK0V0%2Bhnv%2BA3bFO2QnvvQmQR25iIGPO&X-Amz-Signature=cbe36287b9fbdc8a421a2d5d2e75599a2b5c8be571e064a483b3de5ea63c88b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
