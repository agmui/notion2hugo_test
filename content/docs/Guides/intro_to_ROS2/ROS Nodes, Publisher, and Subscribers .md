---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=19cff775ee601342ffa645e13c9d60feaba6a0dc5c44b812ed93c3adb02b5b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=f31a2430ac1b731dc914f59b2d8eb97aeb1d7835464b725c840f64557c9d1207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=8a91ed95bb0118204c4da1cbeeb92934f11e5b3c818f2b172a4eaef66f984082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=f904f39bb5a4c6dc48af42ac86cd81fd7c46b023e8e708052713f5a35e86d0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=6c8a1a70d3476223ad6104780a2e2ecb4ae07b54688c15c0345d3b3c3a87a04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=33b8d1c6a376136b3a03857c892300e2a2ab5e94086dbcbe134bc7d849f57acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=539ff2aa993aee782b665f3cbb8454940d2e9fb149ec60922dde982ec2bd1013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXSGIHZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCz7rTf40V0GGVK0YUk6cKU2b9rWRXss%2BmqkaVq0Vi99AIgWdzD6P2Ygj4qyPGNkeZudGFKQYhQUt3sg8l9knRxmbMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLu3dOca7UsntEmhACrcA%2B8W9BvEVemyFd%2FWADYoQEcEWjwqOO94b6n7CmDSHZRz6H7R%2Fa5Cz7WvaDcR7hleEYw3%2Bunws%2BQyq386oXwRzw2XKLmz0L%2B8E6LRFvdXJQWHX7oDkmJuWhTcPx%2BCzVVJRdDp8OLaAEgwhfA3wgCXC2LXrHbBrdHI9ckgDkRrEyitKhufRRmVaYjCb1mbUCQ9fDoyh0Y4HNbAwz5ePGFEbdtycRz5gUzfMp23x26cC6dQWzzmKdgJndshEg2NbuHPfOmjzdfQA5nS9olpcd8AGQv%2BIIB9MB1OYHDuTNgD5Hv9618NDimJqVkGqIKu%2BCAuVQY8lhvFoQKkw1QeQux5DZrrkACcsgQvdzZyrvv1NczRJU5bMwGR2cuJbws9JQ0dioM2BGxYjWh%2F2UfAe5Cy5noXna6JmXjVb9OWsPCFgU4DyZzE00ifVK0y%2BXnu%2FubZdgmanKjcrPt7Pw2k9drhQNmHqhxwuS7B%2FeeP8adP5JdqY5huw1LaWimnVg%2FPSbTr3sk0VDyBi2FXZ8T6YtlYXFUemfHRBdXaRV%2B2QS9%2BsEObmnoSY0OedpM0OCK0hAQifnOdAf04057PucCrWYAKdPMi0uairsD2oq0aIcPmemuGl2sy1bPTEINIWzmPMKr5xMQGOqUBXJcv8qgjJUcZa9Axzyx%2FARzdbSyLrFyyMZaOV4RbPU2q5yl1wNz5Lo1DL%2F38Mtj%2FVa2Jz2NURHbJGNu8FQSkThd%2Fe%2FQWCtslSjbrQKPK98IKEsa285J0qNzla2eEPa7cCaIHSgpUKBfjxTVv3COvoPFfAJQRwqpzCQSLY8xcqMhDoam4e76Nw097boecY6TzztG2eBPTxEWKiO53RsY%2FAOF1Xguo&X-Amz-Signature=dcb79680e844f34c1ad3f6e14248e924dd0ba83616158212c0aa7ac815af20c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
