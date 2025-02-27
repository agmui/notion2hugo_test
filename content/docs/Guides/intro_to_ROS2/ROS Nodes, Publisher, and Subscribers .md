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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=665d46d592b1fde69f130a6cbf15c155522b320d7b441a69dd612a42e84466ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=5563cd21de9aae00fb495513b5338154a32ead14755b602b00ee8f64a1753c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=d4e96924631d41eb65f53a6f67b3c2f733ff1e119e26433091332cb7da949ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=ac7b80a7410658fcd9d61c49cf9b499386493ae69b2352969c524a4f5d550e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=ed116c4673344e479b65c5eb38050bd5b488f9f14be5a64fdd2e1197827d07fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=759b0f4aa4eb424f7a1209d46ca05ae316559d5946ee60cf55ae4575d0ede88d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=07d35d3d1012f5e2e0cadb6e578683bd02d395f3b9e3909baec4afcfe12e2166&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NTWTR2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDe0jTUOZxoF0VKKhT9A4FHjMmE5a%2FW0yHoV80XE69vGQIhAM1Lw1cibSZQuAiznn5wzaiFFEr5r%2Ff9H2%2FR2ahG6eZnKv8DCGoQABoMNjM3NDIzMTgzODA1IgwQHmcwNP%2Fof59pGxcq3APJ1lyVGAsW6WEr7Piqs6Adum2%2BZ4qHPLTh5HlQrpu5qpXwEOHPTxtZXL9aOfN2tL9JdGBVeTtej16htifyiQnBr%2BAYwCkNKVdvnf3%2FhCGdGAddCEjX5Vnyxzj%2Bw84nEbNOOPUT74eB%2F8ndeXy0RDe7PuaX17k1TxFhpgv6ami46B1O6dJomUyHrRY9iUBv9GXhdfBGMSYwr%2BfHq%2FcR19L%2B3B3xSB6mGMtauUS9dEM7Rv%2FaFLST6S%2Fu2dA4Nz%2FwksvcV2o3drFmRPCcT7BpSctPq8LL%2B21MEyZlu0TpkFlhuj2JFY4YiWlMK4U5xJKgmVu2emfXF0ORHA4Vc89DbYYibiqT8tebwTsa5oa6BRI%2FDiCT3IcnXNy7IHpjdJHVHOHrXJuAvqwXiwLCNPHBwWoupQjwpXcRQIqoJfNCP%2FAlttEZCSZQi4V4j5vVisoKVZ6wfvQQEEiNEnujbPYvJPqo7%2FJAno96Fon3P2IbNSvYMycxOVa3s8p%2FKQBQcSFXk5kAru2saTzsMkRlwdDK1SNhWROWyELvG5t7s5C65JObxrE4tfJz2uoXRvofjTX3k4uV6VqfTv99fo04lFQ5vS6ev%2FYhD%2B7ZiqUztLbE2q2b26St5DGhm9PFeEGQZDC39v69BjqkAZ395oKMvsstzFgMCUxVeBXwsfVnLS5bdfHttqJe4HiYE5V5LzyfIlOWM4Q1Q7QCaFtPPxnX%2FByRBC01zKq5yeGz5qrVP5A92w0sL7K1S12e4Iqfia3yU4d19sc%2FFVxM11j%2FTSI3co2%2FvGXEU%2BLpnFZsz%2BCe6ZdEJZtsWP9TDX7dWzMel818%2BVI7kEjjeSNQBoVWK%2F8hQPTsPQ%2FNjBR4P9Uf1e2%2F&X-Amz-Signature=596d275e26794c14b4053d9aa6cadbef1484129a1569cfd8ef9a764885476426&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
