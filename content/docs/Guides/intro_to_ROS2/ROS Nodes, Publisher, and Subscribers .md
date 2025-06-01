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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=8e2d220072ed7b5701253a0e59a06cd044c4dc93414332f63dddce9f3e22a441&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=0a2f2810b74cf6ae65a9c893fe0d9da3b6a793e25184f8a446ec618c31f74971&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=4df2c303c7d06f0e66af80e106b88e437a933104a04ea2c08cee8022ed0139bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=c6c3f3c5b911113857d50f52fe253e1d70bb62fa65eb67fc2f8daa7bfd0ae216&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=60eb58a71232385ebc3a263a8d9f0865108a1c13e334f773c70ac55e509f3ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=dea3cf9f9f0a3c614915999b04f056481070c7621a022be7df5379d740602565&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=1e12d428564adc449c65f048f4996efd4d4959fa8f47825c31a32b1a8e96c3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODOPQPY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDCXL0wta0pwX3jV5nxmkJ3velLrVNGbGWRawp76uNDsAiEAuf7f%2FJ%2Fb77YIqBVe8Hap5ai%2Fac2VTo4oM1z5%2Bvm3RrwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLT56PT51Darc8DfeyrcA7qSFVwaao30U8si8UI05%2B5AOkWZpUJpelCfvd6iQhICm1%2BWd1oLTcbZYJkQ9lOTgmm9OX8Av3rZ5DW6LpcypMtO9sss9wPJh0YQycpeAdWAo4FWoydm9tc07KZAHDfJqMKxMO8whjmp4NyQfObVe91k8Qi0OQVa4APARCIBoMJ%2FKkdIDA10NBMbWC0TnGqJrV37%2Bt0%2FyRrnTUp7oAJAwAhXRlPUSqf7Zsy8r%2Bx5U9r6mJNZKL7o%2BhThxM%2Bf0jqMqLWCdY1XnUWIbdeDrDKZMjm8YcrdztgFGt4%2BDkXElKunOLYYJdmXDkt7BdAJX504rEMpq42f9BQFfzcLeUzTpb1xQr0IXWOFtTvDZnuYuKoBHOYTuZsUmsnbq2XmEBaNIIUD5IwSDZfeWnZJhiS5Qgrj27JxJrIGwsa69fXfkvVz%2BocpDJ%2BaOWlyA%2F%2FneDOHz7%2F%2F2xw5XWA4knzWwlQ4tKoAQzfuupjCs8xgXIN7eLCjZCe9FZHJkKsjuuHHyoQ1mzMiipBU%2BF6Z8IHvdsAriCT2kGOK3goxUqNXIwciYJJsD55YnYxXSDJPLVDZV25ULqskDTGzLFXapKka7MqBtncQnnSpNZxowsnqSDwVCdti6ZIClUdPgUwotMkdMOH%2F8cEGOqUBYsYNrzsLOu1LTpjOr6XKtsntM09ik9fZwoJdfPv2MJa3igXe%2BPuQvI9nzqEUxHtdLvyDrwqvDty5uju3Sh0MuDR%2BQe%2FVdaAlBLYBocROO42MXvi8GK96yyAxlWLKMgbIAlbvlJ%2B%2FqN65zgceCek6nKAmAB5W19%2Fy9feM7sZcQRdaZnTf6WqB0JRWqVVoVslXvi5dFQTtyq%2B4aRmDR%2FTXi35exLKL&X-Amz-Signature=58b4289848eecc12356b8a1852175d035eebe7ccd8ff934787d2775d0233b9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
