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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=884438200c4e472a0ec657a91299437c9abcf45ec8ec8c193422ed1c1baee166&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=273b0726693571bdb969dfde57dbba0efd7fa500c3db99d7c8897afd99954b90&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=fdd33a5c9a372c715df72a5fd7d3597f162767bb2eb581b21c2115de0f23bc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=46ebc8cc624f75007e129ec73b3eaead4bf8ffc317cc50b820ef3eded85f2faa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=432da45d9ae29e9b3bc8d8324e12f895fe1307c5f3a9cce07baedd75fcf62df1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=856c1acd9927b2d50eac938c89e2304169e0074c6f5a903719e098f44d6d085b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=8c396dc588d7305a347c3ad8674d24f50da2a481bb90436b008dc9305c1caf0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZPRYG3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIDVG4VkXLvc162Zgy%2FRpudyUefOHJPqcV2glyd0obWLHAiEA1Ew%2BknDhk%2Fm1fp4iOPUkFv%2BRnxhtEG%2BiYJHJduDEAmMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ3J3qrM4SQvwdDeircA9JsZGwon8dyZ0i1kdeaGszEer59DB0wCzKYPgc6YYNsDllduZjGCy2%2B73jbL6mPUrO7xMBL7BcK%2BxEtjTkAhVENISQu9t%2B%2FDoAQSgdlCAWIM4Kus0%2FyRzX2qo9MsvMpvPZz6kCXBJWvKiC9OFwGMB8jxdvqSe1ds4OJ%2FVxIPfkG0v3uQjDfkIWHG7K7k4MlwjCiX4%2Fy23EgrqySgiNiToi1j2PChArLoPS59uDKmN6AkrqgDjiGJn52Iw1OkEPMb6v80ip9xxGn6Yq2uzs0CuI8SiUbI5vVpDL2O%2Bdynrb7K8Si%2FnNvYnXcAbVant1iynMxXZb%2B%2FH6c3KNiMXVEOCX1kKL%2FPMpfvaHU62RcRVB5ByXT1G9OeR%2BGCuC36V39GxcKEjP2SZ1ar3ZajwQM4bit0xubC3W1b%2FMiSc87NoZzcYCfIYj3qJFNG9eUYYmRa%2F%2BbTFK%2BR4FOUzxF9cYtHyOl0gT2vNsU0bJyV%2B8Ttp%2BI%2FjsAj5YtnQH8DJ9P1ipPYEo5auiNwpqPsFpM9bXGKR9rQ5aZ3ym1fiCviORj01PQR7Q3HKiia8%2FjmpM1e4f9mmd2YIS0h0lIHnXisMVX52%2BAbpToDL6cRuMBPQnt4e3xyx%2F1RHzPeFccMd2aMIS5jr4GOqUBNKwzGzCacj68fTGiz8Pso2XQ%2Becuiiq1pjJb%2FAJnJd5gapJGA92aoH2JHZpOhTcyx1N%2BdHgzSRR5Ac1f%2BAhdTsPHOEFCIIJ2Sy6lUkW2KnfoWxghuVIIAknk1QyyEDbknRJpXHsmdWmB4tQ%2F7WHMueGEhYGLJeEJF5n4THI0j8jp3%2BF2pWELUxT2E5MMTCpL4aoGGce1wWkKwdI2dlvho7vLQ7re&X-Amz-Signature=f245505015f4af8bc795e132a027dad1c13267a39cb9a8f713c747d8408eb6f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
