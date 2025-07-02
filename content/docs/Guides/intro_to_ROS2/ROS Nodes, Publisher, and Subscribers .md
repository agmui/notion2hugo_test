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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=7e72c839dc102faa4d3a65a3e314bf289acf45e2e71042fac1c2ab7a7dbc2d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=e5242dfda9f80278e51138cd0d766613d7439fcc340a8210b78297a0249ac576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=5a364ba129d1caee75af84b392528e722fc959cfcc9d5a3a92ab5bee03bb2c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=d579488d5a059a35aea16c7e178aad31f790b9ff7c5de11f01f55255085133b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=92c6516e77d66154d3fc6959d057aa9b2cf3a8f9199a07be34ef575032ab8249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=6a2e30f90736534984fa8a1aa2711a0fd3bf8e20d674ccf546484cbe1cee7dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=f48f06992d79b1883c4b3831a47494d5542fbb4535b45f7bc01615d9d44179b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZE7XMWY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPyNy1oFKZoTPAw1rCz%2B9Wxg9a1sTvxmWYTnBT5mVSAiEAvJ6xWryVvSkO%2FHVFjNV0IVk%2FzC0Lq9iwmaF%2FfcYBQZYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2FCfKjtrp%2B%2FzDLoyrcA%2FpgLyrOhwhDJzSihF6LBDuKUXoRNUI4YH%2BlPKRXQXpP9GoWfjienBDcFTWqE5b3ZWxPhTgWtnvXK%2FmZwKPWzRkcbQPi5EOiECnuI4XnsS814UbEd2kUKz1DY1oOIx%2Fw9Jg3UW7TsiydqAI2Ab%2BCwiaW%2BwzOEBRHb274uLgfkkBr3Y35nAnghoA8R1fqSw%2B%2FwqqlCiietNU9I4c7DzwzWUlftInV%2BXbm9qk946%2FxwDVljkbMIFgpqdcmhxH7nq%2FvOWfelenXxf50EZpmYJwcyLOtzZ%2FxB4GhDMJbrvpJWE7UuF%2BIk6H6b04CJngZn0KqD4XNKSnUx0w4a8vTlyw4%2Bg1Kw8O6%2BQ%2BYKQ%2BBIxu8vMh7cVdVCwRAV52k%2FtgjTaejkJv0FxLwrX6h0pKFEDDGktbGZMRnXqQ2oT4HxKWDPJgUCjtJ2L7zurRGjhuzOwcorYS37csYzFaNiLuA30kOQaKSGvgheQJtAX073FenHvvcsAEQZDIOHVxFIY7rHtG2jGsODHhulCzisNRy3p8%2FPf9CB0rEcMxLhqV8cX7p%2BQkK5cT2demzvPPNlKWzPYCF3baaByzH969izLkxvqSbYtjYGbRRapmruULEJUpBLkszQdbb%2BvsNh0Xn9NmmMKeTlcMGOqUBxpCaNYbkxP7s0BpkrzmHNSotxLxDcBWx4yuVozS%2FLZVs1LFUXIazoRd2MDZ30NISG5BnQlQKKP1MI%2Btgg%2FBaqj0HhL7iNYvYQWa1mDhN3rKhdR0towQnM3hxyRAfsmLURfkT47lJVh1i4u%2FxmbQ0Tzjz0kP%2FrO0znsB1dV7Q2Y14d9M6keq6VLM%2FcW72OEMaiqV3Wy%2Bx%2BsxqM19vZCiRQCtGUa0B&X-Amz-Signature=608ec90b5e832ab167e849f57eb8265d88b6682a02f4fa8928ab9ff4f40ec596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
