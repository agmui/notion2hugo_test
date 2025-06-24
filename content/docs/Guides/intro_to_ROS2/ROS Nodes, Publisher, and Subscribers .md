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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=1095c8b10cb8045d4df2a599335379413d6d784055cf870a32cf800f1e772ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=9eda42ed8f3377bfdc22f8af012b2fe284c21b54d37202bffa65139dc03acc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=d843acc61b4fa59354c857337c57f27f980635089f7a6eca1963ad0390700ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=e9686f1c6c5b1c2a5f22280616de8d21bff8b39660be8bdd89b275c9dfa32650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=b67197a527ede1bc2e792059e88b22e42befb81108d9d6293eb5e9fcbfa496e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=96d3a849402f0c0712176b0d16abc2cda33933ba8f067ceb5c3580cfda81dbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=50e444e94cf613ac2e848eefdea4ba7d50d4fd60b82582d07f6115337ad5a3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD466WO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDt8MU%2BKKAfkbudPXGq6PDVmXRk3fJBbcWSy%2FQtcEOaUAIgUeZRMJhl2kEkMRY%2BE8FXv%2Fku3yAXUD76D64drtRffxIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGpk%2F6Hk1RCxZ5NAASrcA2m75BbjshcBcK2vxWiBP8KnpMlC8ivbDzf6HdnMz9Vo7Wn2gn1ItokxAFue%2FhkNCpEJmA%2BzKjKBMwWwnBqA4gfbF5X2HmeWjSiLeU3lzDobMRisj3yR3uAZQueQ6U%2Bu%2FfOLyOKXsOGLz7vnPLQcQDlXZdU7gLcZhdlS5LKGpgkmvVHeDz7ZpqgavRPUkr0Chwm75A8%2BzhBh1lkr1orhu9fNIbxHnCNWnMBR5uXNlekz6rFSy5WnJExgTpfBi%2F3IYbhdTLEvXcgzyLxu06YFa3feqjyph5v41zNdHTIyJ%2BWweobEPmbuELcgkIje%2FrsECGec6jhFDNXmbS3HXW93LofP5Bv%2FgwsIAm8B4EVkprS3TDAJWPXaViUgMleRVmlBWUiPMIAUVEWtNSxYuoIbqO%2FhzEJmi%2BPCSzdWXUgWHnY1ShxEi9kh3vA3nqsnysA3kXM3SspcI3caEcum%2BszeIO0MHyH4F4y%2BlYSHBhwadQ39N5Phy2WuUm9YbUpc6NokN49fEITQexpWkhqQ%2BCuV4VmgskBDc8A3ttoO8eLestFyuE80ALJCcitKom3nVlOaGJa1lf2QwXTZ1liyIwxdUH6zIetTsWxuU0zBb%2BjHPHePSMhC3mwnvEXC%2FdDpMKGy6cIGOqUBamn5EIxdCF%2BevWtgZz6UKSGP9vlueCa%2BTJJ8moTDcw1NPvBan5WZlXaPSBRArkFbrb3El8oS6JPvHLEZgehro%2FnXQ4oIZr1VZI06d2eNjq3m%2Fm5jbowoGry4X8hDJHTqvI4WtI6W4sFnUJ9x6mE%2BtNIxR9DOaZzCENbzWwOkai4isaA%2BlREq5QaV8co7Ny7CMlMhT2VKyD3vvr2UeJhi%2Fpy07j41&X-Amz-Signature=84c7cede24826241a298229b09534c53e0149490603bd8cd0129312c169603fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
