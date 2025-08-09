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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=a6918f8ee44e55502a05e316c7fb9c52711d6ec18ca4d535aa842b825e6f0f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=4a2a725b1695a98a0f28ed2fa9631eb28a8ebbd8373e9444c624ec8090ff0574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=69fd97474beb8aee17ba99fd8f214304b1be5f0527bc524bb6a66d2ba49d08b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=2d9d67d5b55a59711af68d379505e15e6ea4e7ec38ae00a096480a75cfd8b289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=5751e35b1ebb87182cba519ef99a4552906f65e1d0ff52ee80234a073e09986e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=c287143be09069cf1fc971a36895c0859a31ad6ee19edff76bc0af330b70ce89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=5f00a923ffaf1e92a39a0f0fd846056cb44c47b97c413402ca206b7921577225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUIDQBE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpusOgKvXkVCgycnLeVMXgjztCtC0gDj2qndSgbP7cbAiEA68YzOID8FHPU6Xz42EgngSpfGD9W%2BJcZJL9EPMQrXJEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpxMj3jFLai5NNwbircAze4wNfl3IFwfcwlLtkGFs2JUgPiJmgroDcEplj3ReQ1SL6CLqNQiUuHbu6%2BbpCG%2BuMKD0PEB9eYGM0q8zxapnC2%2B63y%2FdAQO%2BbRV%2F9uVGs1r9U0VJngBkdBegb28kFJwXiT%2FWGvJu429EJZpO%2BAg7tUPY%2BOt1AHdc5yWse5ZmprLy58AMHlxdFclW2bzjKu3CR8JAcbWjAGdUAFQZPbEU5rsyQLjy3o%2BAercc6VAjl3KQf%2Bmv8fn6VbUyKRSx%2F3vMHZQHCb3BCbTUNnqhz0OnXLj%2Fw1mWbepKLxSiti0kRdZlreTmocBAio7HuY7w3%2FOqIdLI77Tal%2F%2FSsfuu4ckY8%2BXyno74whUOhQ9A%2Blr3TPsB8lb3BoMjGyZ5OxuvCtIHPbn2PT5Y0MIMZV%2BUPWSlc8Yfzc4iiDxcxai8GTB34iz2zwLw7E%2BLrpzlX3CKuOmAo8jIgpwlIjUMNdodXoXMM3i4GGvPl1OD3iwYtAlkLAINC58F0CYh8aboeqIRksXZXDimgpMBdj2rnb6IuQ2meM4CIKsCRz%2BNlK%2FVYOOcwjniiqj6e7aI%2BfTEk07Y2oym%2BQ4Ap6X5f2DMavWH6v6VcWsHYdx6FzVmT0Jv1%2FuVqRuBsZiTEz6rHRLFmWMMzo3MQGOqUBYEQXzHtNHDHEQGSXfZ65VTC8X5gb%2BAARz%2FKsLq6I4Y08ToZKmnXZWqrJ5yeEYAzP0OnJRTzlGH%2BQliRfV4mPXlDL2ObO4aMijE2zTV4aBmYHYz6GBIwxeTLfFWKzgwNOF1FbWULqVZS5YIW8qk4qz6bfeSaLO5ck6Ggi17MTPCYpqGEms4VL5zf2Tuh4RvJxcdYTXNJBTak0W4Yqth2I%2BK8%2F69Rr&X-Amz-Signature=f112a169159652f8dc9b4e0485e9e5d6de180524ee1496b1dd575c1e7c6719bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
