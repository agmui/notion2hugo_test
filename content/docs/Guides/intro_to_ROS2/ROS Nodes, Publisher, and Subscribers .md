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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=b328734e983b4940b50b53813425145af40742b1ca408dfaf97d2f748a2e6907&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=a1bc691e9b80cdce944ad16f21a42666651087825f55439e3c3a0082026f603f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=d37325095a36a83ab3d30d58adf3a5845cd6961fb39101e62af37973d0b9da83&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=a6383f019d1160174c1d79dfdea90cdc3b8fdf70c68be7e16d6cc1385bfefaa7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=f06959af415b370a5793c6fd9a20d181d89b1a353ebfe2b10cf6af25b2dd3a94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=a63e4f47487847dbc30dc02fd07dcd94cbabe2d594fc8b574272ec7224f2be5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=628bf6f27e16cf6d8d46cde606bd193f0c28f5f0b6331b6fc20b9001e209585d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DAYVGAN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9Q8uS0znwNulwR7%2BmtQ34iU1qyGi%2FmwJw1fs%2B%2BY8PgIhAPTu4Jb24sFHa4wisxWhIlRyWylJw%2FI%2BABwkZKQJ%2BesbKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySyAkCX%2BaSjNEONLgq3AMRPMOu8FqkZ%2BM6IIsmzwQyM%2Fe1wgK8TAxC2Fd60bfnH3eCK2QPLmABhqlYnRNlvbuBaPfV7PMN%2Fo93YsUGfDI6UcOIh7ufaWJD4m8vBSI1eqHVfmyqmbh7JRGC4M8WS4K7RDfzo593Ojf2sjRbfkKJcbjvEx4OzPr88cBB8j7q2n0hX2nJ7cxea8brMgcC%2Bw0SjG1fq2Smqm8%2FXpQGXpUIXpQlKU%2FD1aLzz8%2FIAMLDujdNSwsV79SY%2BjvfWl7MahwJSqcnvIObBH6XlGpyQGeSpHFb5ohNz3iCy6d%2Bl%2Bqp%2BqhAbOcEFv8uji8%2BzvmrKEV7GbP4CKa8mQvyMzDJmuiAZkPW9q7WcyC%2Fz8JEp1Ucv8hkF5aMhTH2drQUv4rA8YHRgf3VxA9YrsEZBjUxAG4VNkMmtOngP2swTQOp4jFXzYFHdInV3sSc4mNLuVF2NPr1C42i1n%2BH2URbkeWhGpWjGBvw8StuaFytzF2AWbQopqyIG62OcPe4OOX7J6BofunXk2XMa2BPTFiSUDbwnWaQwc58IuxXb71bGuQPS8P5YfnwVBI%2Ba1hFUpRrKKflxA0Y%2B%2B%2FzXmETLPTiLhKrBt3s4wrhnwv9l4D%2BdLjTVoIt7fiFKZ5YtFRcEELJnDDmrfO8BjqkAT8i0hQzIZT%2Bz85SYDbSi0%2BPIL9IG%2FpxQr8HuDlTDjRbC7OqEo7pkIYMYxUQ4nanRHiokfrjNzjmsTX73%2Bt4GQXzHg8p9ipkcfxUAXNxqqKlsgbS%2FPkX4uBxFpoNiWBUGyruYzqGlbpSopVJjxUl%2Flcpea3AhbgqIlSEtlW0woynKwBiZOrBzf%2B3ovfUz1XwwyoQaw2rynteJstBdx8j5BZszmv2&X-Amz-Signature=008e37e7227b155818020280f984a41f12408ea0a4e1d707c6bc88344e22a411&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
