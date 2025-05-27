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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=3c6124753ab0761cddac35254b2daafcc5b32c2f5b5b4a32b5072af132d75b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=4b7805e0384739fbde3f22f700016493043dd1a5537af2fa7e9da2f13e1ff616&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=521a443865ffc7e6d495d86b3351fc256f02760509cf1e9cbdfbbd57dc2629bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=aa13b5367d54127dec23b8bd068f587f58326813d2beeeeea9c9a67218850e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=da9b7aafcf76f0d6ad69ee29d39ee34c5978f0da9b788981ddc1782c2be38a61&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=1f8fed42cd87a4bc53cf5189a6e99ea74227903a3d242e3b0aa4979519ecf016&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=d17c7fe7736476e1ee309ea5b09bc8a54422bdab79e10614c28813947bda53fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672526EB5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaFWOrInm1ezdBLHsl7vR4AHUaEmryKTVE2IwuHepjbAiEAm69Mucg32iau3rjUfVO01PL4asuCj8GO9E5tq7OKpcsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOT5UHgz6ScvcjyGPyrcA37mwvBaPPrHo1bYlkXdWL6B4FaQZhofu8YmFGb6u9ST6vlpN4H95Gi49C124dcn4sFzM2Oor0cJ4NIUmFM1%2FFhGwCsYveyN7hqT0G%2B9CCxXuM5NQsv3K3xdctBgGUupmnWd942Kp0lhXAOPOptorhrWC3No2iQ7EbRlCL7Hn8FTUdpLD790WTuzaM76DiPxe9K%2FxnGUkJ4rHHpf7WXzewTejp0KvMMxDuuR1sphYWXtrqZOr55dYmyrrasz%2F%2FgMuNTw%2FcdifEk4gbWn2zgGW8ldOiVNJY1MlpvVgtFJVsauKUn4u3%2FiVuaAvBaJ4yxfqhp%2BAEQaL%2FD52fVwjjtk9r%2FNTLfaAMeAooaWJaR6PPM1OeQ1Y1oSaQQxKgFlCVDxEadr9yUcLRbLA7yOSkDw6hTvTpGXErJ2%2F8YT7cUagCLG%2Bmzk%2BJKkdzc%2BPurQqxZdYd3gmqUZW2ktCbNbeTwtG8U%2BuMVg055B4XjKFhCDkZn1GZUC9r2Mg136MosHlQ0zyFnHr%2FQC%2FFWps0XAH4FKepBrhcIbnU8h%2BCgaCf77P9V%2FHZrDLGhnh9n3VBX%2FkbDyeYqLvrrYQ93UkjORwIyIaBN6n%2F5%2Bcud96w5Nx9IKx8IuYgLH%2FJj4Y2AOqpy2MP%2F81sEGOqUBtOFsKOzjgqGTtoBDvdc6D38KlziDH7U61TD%2FI9exZI2E3z7iYyTVNXcOtlkUjqDfEr8M8AzTqFXfRO3FM7Ehhgy%2Fe8hFzvdSS0fR%2Fb1eVHJ1mQivHVRfHWXHiBf5H9F400ELtIQ6S%2Brj7zCsJf%2FqtMzx9PfsWwjstN%2BPsvXYtQ3oQLmcBoQFdVj0u17psHtKLYv4vAUb%2FsKcSmo6zNh2cqPvosnX&X-Amz-Signature=5e70d0aee8baa1750de420dbad865f6ba97bae787b46d531d2b9a8f0ea77cb4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
