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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=69658e7fb6c8ed53f29532e2b37d65a6403ad783be034068d3b9fb347507afbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=5d73e2e275f8d40b41b59edf527b7000ad64513bc34a61de172b71d819d7a874&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=3099158dbe06286f030e0df40392e03cbfc5e0baa9b8ed7c46c6a186f3f5aaed&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=45f3fb9b1ff05af5fcbe8867fd54ce687f710a8318950e7b14f802d80af5af10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=0d79b98d98a34a57d646e430e723d98fe948fc149793354d347d8c74f6504476&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=3214cf3cc93fd9296d14c3f52056245a84b3df5fda2c0bd217550c4747466fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=6035751575e14130c6a7792df33343851972b2f948e67340e1adf0598608a82f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKO4GNZ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrTpC41niaP4a%2F1JsZqskgq0zFLH%2BAfWlIkdD3yZ9ZMAIgXu%2F4Ks7cDZNkE%2FrMbr2AX9r6VuFnPdQ7r8keZvXVl94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCBGfAsEIRUDugqIPCrcA%2FGM81kABO1a1PDs5TxvdUO4gkeXow7fdJFMd1G8igGaNApztbuqxkevGkNZzEx30wQBRy1%2Fd06Ue8JDNv0ZBttCqKQNRRRK440hHh0ccz0xZxCs26aUerG%2FFhYp32WYl5xLp3yHTmEdMbUSvSzVJmQK%2BXi7RF2K3UDpq9ItQRz%2BmQ5gx%2BKgLMJ2W%2BJ9ra2R7VxMgDNw2P5f6bGeTCeptkWrT0bmxLudCdMOvFkijS4m0O55800sGHyw5a5ZG7oYXkxmzOxlvYhHwg9zIx9UWH2igIpOVngt74p3FDGbLDV54aK5Eh6xD%2Fa4hW3oJbwgyoCq9aZaouaNXX3egbODSqEA5c8NlBDxGMHUcZp7Gb%2BQGodzR6g1jlx1ED54uTWt%2FmMzTjFdXO34FDCaEmCSXI8tEU1ULFCJH6QbQCAfGxtq%2F2ajhnuuEhCDmBku7uFDFzdJjxAOkUa%2BLchekDjlsAmAA%2BO1CQGD0LHTEyKLlfW7RsvMbJAKHXChCQO9WNM97z1OTJl9dL%2B6s5bi7AyXYUaKqBTvSYKqIj3wiHxQL6y0hq5R4%2FWfsbi6DzNVembN3B6CouS4IBr6oUUKXq0hzU5ePiGvJZi4vw2NwWzb0i1Qnp9tY9NKlixNeNuPMKaq1r8GOqUBgPNDY3wWudIVhqO6VKPsdCUY5kTW96JfBXX2YwYMo9tidsaLGY27JcXQpmjNs2GyOKzAyJacyBl6XMyKm0WPP57hWqAebBcxrPtCjXcIfGvNAzVE5peVoXbZjCcsGTjlRt93PcKoaoeW5p0QIuQ5lH%2FnKoYtz2JuvJuYFo7mpUh%2F64uJo77DSGYEOdeEr9ZZlVpszfsM%2BRnP0Gr5pmjUZ%2FYrnlPL&X-Amz-Signature=ecde39413a902ef083cb063aeb5d5ce132d455fed76374df2d6785a723eb7d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
