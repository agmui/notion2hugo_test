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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=d3c7bdc1bb4276504f3d378b5e207dff8e76f4120c0b2c61112acc77fcfe6b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=9079f96331ba01ae69afdb9116c4c86dff73049b7172f7bf64b67582deeff6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=a506d82b23c1311a9a9d5156074f81558d7c82b97c0875230713c317a10f88cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=7495298e066640aad775bf1da03eb0e9cdba1e6c03d9ef2739333a00de0215f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=7f0650866f7220a1291aecc81fb63d7972f06c3f17322d94727c527baa2b1a69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=3fa7a9ea2b65993f18e646a0da3b8d15d47b82fe2bf59552d6650818048042fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=c161fda1a803e8504088ce5af77668b79ec8eaffb44f8ed3bdf461b4c8e45d35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBEZGLL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcXbIp0KC27Y5%2BaOccwo1mdliog4pFPVApG%2BFMkb0owAIgRF7s%2FxUqFO2%2FEsLyy%2FOQxKtKpBScHYVIgx9YDDcgIUMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1o8iz6XxdRoHyVDircAyngF9MWv0N0ahwlT6swCjl7JKE24DHop1jrb0O83Kq3qEWtQkwwCvjPfK0mgWC0HWjEZVgOMaYpoSaD%2B%2BRy9pJEd34RCzIIh42HETuDPvdBMK93k%2FK1Zx8jp4wxVxh3%2FQLxBgXs%2B1z%2BH2e%2BbNCEbj42jTIgQtJt7Yk%2FjjMijfjY2Fo%2FIaVMfA9TwNfsMvA46EsAYAVuKlnQ%2BqSnUK%2ByVhpE5XdXoxFrsDWxkwkF5AscW65FF9rt82eLtPETnDNArli%2B3y%2FPepjvtM6OqLQDbEPcxfO%2BUZ9JaeoXfAQ17Ms%2FBgEeXaVoa%2BQKmW6VZAFH3loYFcE9JdJVUvonu%2FrrIHIFhTH0eeApKd3gYzDbibjrue0WiKE%2FcXxN6p7oEsHqLTLbezJD25LPs03kArAZ%2F%2FBk2SH3dRyIftAT39hvECmI%2B8ufIrgc%2FOZMmu4uiCCoIMqaJqHxJ4yxS7MCHZRNJDufxoJh9BvLeh9dBWplVMQXud9OlQrnWYpsTYBOz1W%2FFzb0GOvpyq8GA7y%2FGq8tcddYi7HgnhrDoYlfJGK9oS6eCdBkOr5DNfco1xKDwSnX1bCLVLQeb29Zn8Y3wokNUMYvVB%2FP3q9fTbJo0TxtxKJD%2B%2BIe3vDUqkaHd%2B8wMM2E68EGOqUBYznl3eNT1nkSFWZWBxxGgDzgT4lSeLsGyXfAI2iAYn3KzuwMMZlY9TNBH82LJ8TmSLJ7bx7kuL4aZ5sTp0%2BoRQ8ORJ9GQXzVqBMNrUSORhUOWiUtVW9VJeUKHxniTzQ9Ai%2Bw2EieIiN9SzG%2BNE%2B53RIEcAPxpz6IAm%2FfT2lJ%2BFZqgt59Iad6UUZ90jkJnB8b0qWekkEDvYeEkIGOt3MfHHOxdUDt&X-Amz-Signature=33ab0576f5d47096c14e8b2d8cab36655275b2ee7e8584dd0c70a98cfb5a6a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
