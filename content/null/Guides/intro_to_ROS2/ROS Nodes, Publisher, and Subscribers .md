---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=d644b1e7ac444fbe07bbc6afa1b5430b6020c33662f0307b006da592c297421d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=6ebd919fc6f45c1e6d1ddc7b47ccdf875dbc1f5b4cf046b4e531b1e5ad7fc546&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=e74121704a8b4866d82d431e2c1cd3a87cdb295f09871dc0936584a02155a3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=8d456b9adb494abe0ddba16d88ef383875293fa74973f816022dd6c19140a882&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=aebdf8575398a89df195a522c9aebe618f0e892de6f6d1625d7aa6750fb3b86c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=1226a53ac6d51dc413c4ddcf0157c7ec1126ff27907fb4d9822d3f1b069ceaf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=02aa08e2479791709a4b45abf43023cd7c93f8a322340807858f2d77c9263618&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEIFUAC%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC0JiPFuQ2mwUnKuAAg9VKIi61iepRht6oQK314Qa28hQIgBhngUVF%2BBTUkhsDn3GuhM4uMaNJEQmUGXpkoQIbG1cIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDC0g9wR8JcsWWQaOjyrcA9%2Bk57bVwW1alZXP01JkBsLz7l3F6sJy6UG0%2FAl8g%2B8bdLSTAiu4h1CnWQIIwx3oNykdpmdi%2FnkdSBnTcYJezq8wpkcGq%2FdgxESD7AU%2FQX6%2BAzxQaoCQS1hJNF%2B%2BiLV8sHVXAeNhoTKCt%2BgZwS06CUM%2BFlltctQFTOUSpEf6zVxwSB4M92vMgw2LGdlsLBio4B%2BhbWxqJDaOXU%2BrBcy6jUEDA1%2BLSuAlpIOGvmDo%2FwVjExZ3kmp7t9F%2B2J27tXCLe7j%2BKR78fqjrIYFXgJK4UefznAFH7KdkvjeP18Ae6LmSDrT4CH5htytqAeW%2F3StTiqhHnLJRfQEdG641x9VcYDBJnD9CT2olQdIM2wOCMmCaKEopd%2Bz8%2BC7U44RLzKTIeu%2Fl82%2FB36BS%2F3PRUzpWL4YsHU8BOd1Rs0IsLOeGmds8QpPl%2FanLY0JsJU0dPJt2Z0fd342mXd1%2BJT9BZnDajS2BdIprkJFzZuCynp8ne5N1rnvwZjjaPDT3VM7T3oxQi9vAOl5evoJsZAlnQMU8ST%2FwcUHAZwXoAhleTXBFispB2tD4OeuhGjRcXsT6RkX4G%2Fpwtif9xDZbTc8Ji5bL%2FEUV95mdLBZuCyqr%2B10u3Ftn4vjctbUQcqU5bgjLMK6Vir0GOqUBioV00nC9JZu4gRcHFh2NpUgUiXdZoAGv3v5Rps1QWC2wHnbOY4MCWbaL1HR5Fc2JIPGd5zYt%2FWBdaz8qX75DQQs7Pr2nnzPQqjd8u71W4GzQQGfVY%2BSmwD3i%2BL2vWKFISg1WH3I8fcp4ee4MzhySEp5%2F3VzKIX2E%2BGt9Cj8yNVhMQ%2FmSwOR4TV%2FwRKVJhI1faiqQy1eoIQ9M2tPfqUjOcQucVh9N&X-Amz-Signature=71b467cb09582d7916c34f63059678a2e3fdf88bcc815b947a054a7ccc32ad97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
