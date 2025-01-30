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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=c8a6e3a64b8187cff044cf5c1688eb50cd9734325b637e29cb889d46201b09ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=15b060229f487410bb64ae3954b8d43045889fc3203e77d13818c10f4f54bd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=3dec4a716aec17ee2ee5860f3be75a05fa3e0c758a0814f4a9c76fe57a216cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=365d3646f50d29ea7b2539a3cd9d8e6478ce9eed099d26df5ef123f9ddf803a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=be920cdcd8cc1c44d404d2b8cf8b261203042b0b321e246b64713492648682bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=a67c8102e89972a7e93247008119b64175456e1cb591b09ce8e885e14edebd7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=77f1fb762b6d52a81712ec9b28f0f72f711353c6bd5d558a1cbc4bad67fde713&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBV5RFM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm281MvMSdnJFkVJjnZY0rWac%2B3pJcHMRVlulzs4ZgUAiBYJVPpeNQMvL%2FJKirrgRJa4RpHkeNGXQfX%2FvjeADyxlCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlcQu%2BDI0H4ljH6lnKtwDjwFRr1GihNkVTSHez5vQUrL8iaubm7MLOACJl7e7OxGx%2FZYTCjfqZd00AM52lbzAnTkMPJBAaCjqeZIs8tVbVAe%2F8X3oPDu2EZ7%2FZyQC%2Beu4wd1587bJQcnmZ2bn0E9%2BIvKSl%2Fp8AIQrBfo5TXnrYZoDOitPPp3K1%2FkYhdNbuYfq9SZzGuLUKRRvqDJEkeJIVBxyqS9GbJJfgZO0HYQpcyOcRj1sajooyISBUR5whnBcSLc6Hg7YDYTCXZ%2FfcJ0m%2FsotycBVrjZD%2Bbx98qvGBRAIRadfH%2F%2BHQQGncmjrZcWYzSFq%2BFkrcZiXoNR54Acusf6FzJwVNlr%2FWngEwwjiMFqBDVkoVF9Q5rUNAc0r92oTv0wGVtXLVr5u8uWL2zpaeug44L42mjiIxdfviadqOoI5uwyB0%2BBpfCc6PHLcPVgCEey7kp5V%2FAeWgxB2ry1Q3vY1kO5KA7N7VKzSICN9l6vGIXWKUhM98W06xSwOoGrWhl5jtnsEqtI1RfIUPZQ9PSO8y6Z10R7s%2BIFl7xQgxCfg%2F%2Bnbywx1XJpMOxma7JFeTzK%2Fj0CNIfjggjChT%2FYnPD56TcQ6jb194jQz6URU%2BU0hUZdVdELlcow49rXC2rsTZvluZQq6nACREm4w4KrvvAY6pgHW4eA31QW2WOW5kFB4jGkXPJRhdlz77dwxkmB%2F5D%2Bm%2FsrTIev%2FHerrXvkwjXJcgokXJBA6rgTzI8Lx1quIFyu%2FXDnMvCzjpGPMGoZtRxr8eLrYSFOzmIoBXDuO3mZsVLmAJ44s3i6GXh16Q8z2sfspBNCXgNkDifPfZ6BuWTRhtA9hJezUhxnwdgUR38GMPFyY7GnuBQB7odCkzwIZBUZqxaCIS%2BBq&X-Amz-Signature=52a0cfc8338b4e21edc8003a3bdf5e0cd8f24bd9e407dcf01efe8c28964de15d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
