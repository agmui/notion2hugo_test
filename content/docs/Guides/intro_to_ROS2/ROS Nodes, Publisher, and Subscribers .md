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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=5fd3e6bd72b97d538773541043b51dda75e1b2544d3d38e12d521a0c1c3e4683&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=4e0dec66b6133a19f8b8edf619f52563c413d46119b806b77ed9732e74f704c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=65204b3fe996b3b384d56b2bfad99394b979a7d1eaad5af3d47f7001e829b0b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=148fe8e2f008a4c9a6b730bae4336d63aec52ede1e2386a16012742473bc1668&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=f5d65309b6e80f331944ff2ab1d01f558efb6eaf76be2c93383c0b8b932da005&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=31e92c1d235a5c0aa5bdc15f469c5d60ac16e53c25e96d66994001eab511a7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=2da63c8b849bc57db6c3261daf2c2750120adf4b5390980b9461d7a25e2fe005&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSXQIST%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHdgpxqgVSh%2BHnkfSxLs76O1z0jBv34hOUNgYlgrIeLdAiEAwKGWCgsX4A9%2BDid6iwNZ8BV52DSmh%2BE0KDsUSaDfLkkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNqNcmF5X15XJBZ31SrcA5%2Bm4aCK%2BcCK5%2FyyYi3J6nirETJ82J7Xo0eeeIh7Ze0jjmT7CHC7QSSQpQwyEejlIqkFIkUdSL%2FuBT1%2BlljjVF0kOlxH3ONFapwPq4YIFU9FJCSmaGDbVUyvBoKHXFLaMXIiYAlWAIdwBuK8ACrn%2BNL0Kzz8wb5yObObXRG7JnbjG%2Ffp%2Bp2BJ8%2FOc%2BEIZQAij5uLmtjei%2FN8NX26QC1pj2huFtYcP08mJsUfKymUAkLQqJJbVNwHUZgYnI9pPMyv9TnLrE9Pycj7ls7R4Ss5JMpRY5ijUxbYYrhLU7lDPixyoydVVj0AiU4sa27MszjhNR%2B0SE0IlVMUFiICYg%2FVE5w8OlDfG%2FE41EAbBiM2lwwPirC174BJX7hcAE%2F35i2FePsWT04Zk7xPtyaXRdKIZG3aw0WIfJtoPPCGODhXJn8ppL1s9nnNRb3XHiGPfr30hboc3WxEAHz6RZhnsOiHBnYdzNfRz%2F4sgIa374FeCkP%2FBHxLdqx3tfuo9envgwo5lOjALFnXytS9XE4S8MduoRniKoKlqpI4QvYseSOX%2FtNng8pM7j2qwmnveVw%2BCYQITN3goVOBdN6X9mEgo%2FgSSEYuPn9lefTUxeDlUBn5Hk4OF8qv6T%2FnF3%2FttYjsMOjqvL0GOqUBWymMfwM0C%2Br1u5ShEedoKBr6%2BOpC4xQtLSzBRQi1nlPEPnd2EW4dzTUT3V0iqsdMRlbtXNNw1vSfszc%2FmkmaGvnMzOo9OBnlmJqxB8zm%2FINUsxhh%2BVYoCvFj7ud%2FfZZMJ%2BJWxBeChMjchFjsiqaeqYdd1lfzcWMcHhO%2FLPdNJ1a0Mp5x%2BhxnIcT6RuhIgOAsCnoBgDSmbG2JG9qvDfV7IJLdpQeI&X-Amz-Signature=358f8ca2d46512cc10290ba109b1bfac44142d8d4e40b990165acfc4fef2b91b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
