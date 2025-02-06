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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=bb6ac6699e46e72f60b83b2935538250049b2ba7aeef906b26c3d38abba84b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=af66ed8129fc6c6b8755763029afe0d8c6338b213951913d00c002ed163efda0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=204cac291540002553b9e8a0baba4fb68e60970f4369ea899fe41e872f15e8a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=118f611888703985282c9e195f395acc1f6d8e4ab6138a87cfbdb935e4421a76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=5f8068d69ff5978b18cee151f022ff8cf1b448a3e6610ab4de3baf932881cc02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=89f0b73d304a2af18f63de9fc11822cfe1a9d1c77cad5ec5bbebe3defee11e44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=3c4d164a1b134aed29a6f2ccc75ba9eef7871bd447415b9351979f3e60b1f373&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BMLCEWY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICYjUPIwAm1G1hP8ldEACez%2F%2FYHWdEYiKuTw1sdegL6kAiEAuFTab3pqevrPN3NhD1pRfvkFzKgEsWG6AjSxCKZ3uV8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFC1zrgd3B0tvmnHbircAzj9v2lIjfFk1d4a9LxqClv%2BWY0%2Fv3%2FmQHvIWW%2BonnU%2BQq1yemI7YYK%2Fx7KQYZhSjI0LmItaLuhGAqHf8IPogkjfKFNkkpMuWV61e3XwwdR4XA09jX%2FsjISGRHqYZJ%2Bt%2FS0a1DbNyw2PuAXNtJe7J7Txyz66HXEo0kXyeuppWjs1EqAnFMIrouvR8tOq%2FV%2Bbt3378W2Qf%2BPE1LTr7pa1nsAwvmNurw1U87LsRjnGRPUc9aWIL9OVL%2FUQToBz%2BHK2Hr7vYmJGyhyNpChzJlgcksmaHBrW8A%2F%2FJRDbzjvCbEiWpyWbhOUu2SnrGDKo%2F1oltZQWG4TQWiEoDgdAOZ8anNt2z0T0Q%2FIHtLj0t4uNDkwp8E3QZUXXTvKvDWxPERVkixVDVv8owRq8N3n1l3uZs6R%2F4oHrR4LL%2B2I%2FdxX6Il%2Bf7uz4XGkRictqZonIwlRyv7KIzjm5WdzESXPcHkrNn3pKovMlG%2FVCSP0dxudy8W5bI3%2FphcaFlLIMMj97uU2Wz5jbngsxkK7Fb723ETWqWKlSbvpfkydQ5S%2FoQDCb%2B8gE4teaXhk%2BXOheqWQQuIh0zxgY3K1kOON%2FxiIaXEJj2zQoiATKTGqhzScO5JIQgXsFWgsFyOEXSk%2BtmtAaMIW5lL0GOqUB6b%2Bqaowom5quOjhsio7jWlBM4U9ztsnT5Bv68ZoVKL%2Fe%2FLLeGr8Lywa339sKY%2FPV62FvsbvLorS22crXEeGuwbMduc3DSQOsrTfVlq6Popxn%2Fbz1fdWe1lYh9GkkB%2BLSI3taCK125bB%2Bfbqsqv8GvZlAEMXwaxuK2mvBTzyR08PrJ6lXCG%2FqdjD4NGeXmis7jgS%2F8SxfEAe6Tl7e8YAGjXnSOHiB&X-Amz-Signature=34dcbeda1b70b8d832857da17b1d8396656da488e056b9a8af9e5deb63cc2327&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
