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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=3ecc5eccc0d7f9dce2a56180226cf3eb177c6572735aedd56cd16afb0f8cb6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=0c28b58e9088e5f2fc7d6e89e4858097dec0113773b1d89d2a7a92c9d09f00d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=93558742edbc8dbd90b30180ca27b735a23dd9167af8408e0b799545e58024d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=4f50fb03c46f11f4a1a54528f0a62b4cb48f6399ba9e43b71d5ebd0c55fcb972&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=49273b90d7371e0c7b1e6afe751c24c9e4127bbccc6f382ac377a88094de3c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=574119934318aa18a4738dca599272bcf265822ff9e2d13c898f45d9a8e2b0be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=2cd2b659efd8cadc46d2390b1c569f321b58357404be87a879e16277d7218ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QID4MZHU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFW3GiXhwGRhbfRUNNPafNRymgU%2B5mQQjNUHQbymYlRxAiEAr6pw1HQe60nwm4nu1HyF%2FZ7xwH4uxtXBQL56r9Z6Ik0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGld4F05P%2F6%2FMdPYcyrcA3N4kRql0oxkKuKjoKP6GwitNc7rHP5i%2FxWj9NGLdimBll4gYvZPJ%2F7Go%2BK1jkQOFAEG8IZVQ9x7b9dfZFs6ewJT2%2BlEt2DRwVTTjj7FlVJ8q3gI%2F8l86%2Fe2Ir0ZodG3PRVxDpxgoyllN%2FQOEQc55bj8z%2Fo29EGS8SE6vfeMCXlq%2FCOQVM%2BXfcEVpweC2FzqN2s5K4Z51EbvTBNDFVndjJcf3RteKEl%2FUJUjKwFEtclb1YhqObjEYclfdb9wpAscVp%2FOAPwWvgzgwHPTHzqpeTr5nkzoGg8lad78UfoeUa7jzS9ghkVzGo5xKGR7do2hOAu1DcxF0q5Klz2kuaI89cqRGS7ZEf5%2FtMil%2FnOfJ7DPHJ1Rwnn02jqoSdPj7pEiTbR47TkE2xMcjaK%2FaDErRPaTmDH0e6pBTVipF2uzpq7Qnk3NrcQMvQ5hqUv0e2%2FyAdu522F2QBlwv6Vxiz7okFIk%2BZEfnnsOJ0hK91UB4%2FAg5%2FwzMHYyp%2BPgniXggL4K1MDUIjW9azZEOHpWqJZnKt48yyv8uw7fWBfN7qO0SxV1TNqA4aBZYLbYuzHZjoTvKtIVeEqv%2F3ILCntxf728NjaQgrQgWlkDmry4iBtxfsAsqm3mKspJLmQY6r0KMNiOh8EGOqUB3dFhlKx4Zihqkk%2B2ZGhYTj0uchHRTyWRz%2BtOf5AYQNjZUiEyYzSq72ZccFTkCbZV3L%2BfU%2Fs%2FD1mw3DdgMwb5ASyN1VczdUxUrjXDheXn7Hgj%2F5nZq3B0tjCSKWwkrlIDMfXEjYpLNaanluV8uDvyENVx6A9LmcZnDsH1XBfKZMLKg1pNOPl3F5ZtLyLyfGHji%2BCULedM6TzeWNEdNp8bGjYNpn%2Bc&X-Amz-Signature=9eb702c3febe107a60c3385a5c25a637699b4841fbf469044cfac351da08b58e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
