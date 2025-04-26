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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=98e5dbba18b2b94380e81cb06a8df0e7d6d1c6a4a77cb855b0ecf6115247e428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=1d286355b31c104362bbbe84168c5139ab45f1f0385cef71d197c2550c09eec7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=96633aaac94bd2dbf9c4bf317665241977c82818c5a6f047880baa894b72fd65&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=1011d3c67a6fff3302136308e9627a2f2c5197cae727e1c51ddc66d96b6ecf54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=4a91bbe2d02b8d7c9c5c8bd7e15ed05f8d47573c18d9a288f9df987521da8bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=803ef0cffb9ebffcac5347bdec16ddfec9e8cd901134a0f86a5d3e606432e19e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=a651812023045675e0daa679b44840e8c4525dc2e8bfeab2f86fb59d0fd977bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OIOLED3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJUEcqqKV9nNzWzcXCAsZJ82Djk9SwU5MxjpnwDrK0VAiEA%2F1cuSkRbdJeFI9RRzb4vz6nsE23hutH%2FA0zgqi2Nwecq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDI08uUww4xyOsI7qiCrcAw%2BMPDdCk5tSqtzzP3rYuJWzV5isO7B3rOBEyc1d4yu5zgJkCn%2B8q4eVQpgRJmdrtM9UV1as0iWTNsUzRXqpqHl6sdB6acjK8NbpyJb6FlOWM6u13nnm3dJv7si%2FYLkW85x7amQQjGHWdk2%2BZ6sNp4HO65L6uaeA7OqG%2B0f22Pj6UN%2FUtSbCdZAFhDjLp3iSO%2B9cefknSDLYkbaom4jGatGYYc5NINjY%2B8J5yr%2FVbTBwW5hdH37jsmcoruQxszkT8ZLDRJX92JNumcpxpItqRLU48UJESETEP5p9TldoPx%2FN0V6KYNkOOF0%2FfCY8QUyeGFW2fxeAR%2B7PPQ2CgFAhgHX8D3RFKgICgz2cEdSWEaGeFc6xcMyqyvfx71Xw2lUnEJrcgNDZAnwPRReYbGefxKSRoZulWZwN%2BLlQbIc5RWTK8jaVmS7fa0jg7fahotjAaPBWp1rranHpy%2BVuAZcpwQ86S%2FC2bJDKG%2FhWAfVtDM75qUwitdgt0S1cz1xw%2BdNLT4PZMOVZnr4TQUEni72XKQ3h%2B08%2BfI6t59nvIdki1DCBTvU%2Bp7BQJ21ltWprNkWszSrcmlIh8rPmHHUNJT9L%2BX8B%2BzAHAzAmmh9SUbdj7oJE18%2FQRTzf79uyt5nVMJj0sMAGOqUB0ysncq2WY%2FnV3l95hfiypGLWvH4qds%2BHBE7NTO19nYn9lzywxGMtK2I4wdU4sdZf4hBmodRWMOks65g%2BlzYGU5IiqCYp6CaYOn5X2jYdr6o7cqhyu7L13q%2F8Np20pfXxwElfyIEI7J6genQuy4D382PFErB6JaxjyELavrKP%2BQPKZ2R8eLfayKHyeKV%2BekM09Zm9aEW%2BlIjmkwVmCbMS4JCrnsTN&X-Amz-Signature=463975f273618895a2e6a1ac89e1cb08b4640ecd3644985e7713130593382806&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
