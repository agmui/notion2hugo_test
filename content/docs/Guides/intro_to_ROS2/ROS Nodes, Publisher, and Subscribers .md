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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=474fa70e787dd8ac59dc9556f16bb2aa18640de148dabbcf342342c7026a037b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=d8eab9bf56a5af7c59fa1d43686afe38b27c139fe74733ceaf975d46ff118d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=359c9ec1388865171ec956d1e0b32b65f228198ad91f6dca2427c1f25b1e8ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=5fdae37c97952a26ad7e6d40c6453b58fbcce8deb140988960a5b6d41b50b2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=5a34167b324c8ddebeddf20847fbb5b6442bde8a1b9f1b66e9ab7e71ca02a807&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=ea4c53951950ea30e88964276b8636b4b09294b254ed5f0ce911665bf8ec34e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=ca751e1eb2bb66476a1a1fd51b3cd437b47620802ee336a2c06c0d7bab5403da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2R2XNM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCjerlo%2B3zYh3c4ZLdWl%2FYoRdpAhFhQMd7jDglptFxGxwIgIMpx%2FgEak99naCuFWVRVXl9IqKJFf1y89qHkLSe7BKAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHZ%2Fa6kFRXwPSOlSvCrcA8so%2FQBwmaPdXg%2FVgQJd3%2FtpGsUa783LLww78%2F3SMSVP3rR5POe9a4VmG0LcloIcBZure6HzW65%2FIoeEA9hCbQ4wVtZmQH4agaL%2Fc4nXry8bwGFbWgcYgwwJP8YhVAoFetIyF1pgyYneLbpue0sfjv6JVrAytNLm3AhtFMG82EcmQ0aLPqWBxKh%2BQEBJw8KDPd6%2FsEX0xCjQM%2F6tCru36uugPrjguoaFO%2ByEDBjvqBMbPT3WGvH9hyDgGwpFcrfFKazXz1TXSlzlfBWL0azQt13oou5PATAJ%2BjyKxFhekhgotmHhcuKkDw%2F8bQ0v6qfhBgPfaRNQ%2Bf12yYftJi%2B6%2BcE4VuxYFCSwp0PAK4ZEgDT%2F2mFqduhRkPRfDcTq6YR8GGlDABmNoRsADanoFV7MQ4GVxCIgtbV490v57qi8b1WNgHWjmW4uinUAefDxJ7hS85BhT7vsvwxyiMhTZZOi8flrAbNKgyzNPLeg5Z9af5b6BIBLlPeCoFeWJvcJ49a35KGmsB9KmfoFe26ifD%2BpCMs5pw8vV110RL6SlFRQb8HNn3Rf4%2FubX8mXxMm2qjkAHZB2lCL5AYoCTnYYFxZ6ndj37n%2F%2BYqw04k4NtKHMvV3BXV5jaLDkPSvBsr6cMOv0zcEGOqUB3q2kpJVIuuaQQaVpqPyHd5JdZqwI4ef%2FrL9ejmtwTfusoKeumtlM4EQ6KqdFgMvQajF3Xf%2B5F%2FOI%2FYQIWCyws3LhBLIox678qSe%2FadS%2BxIvgPEDqjXgzbNzHBNsjaNL2f5TUt61QTcly46AI31DbfiE40ope%2Bg1F8HoXz7PJUS11wA6A4fagu6WNkWuY5NEMPvF85WupBJ2MeKnrR%2BRr5wPZVLoH&X-Amz-Signature=77fae07d058394ba69cda2e45d178ded864bb0a74d7e7c005e222451d6fe7cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
