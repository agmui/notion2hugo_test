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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=276edfd4808c98ec0fc49ffc3eb91fb230dbb77173e509b647bf69c4d8af11bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=e748d875ffcbf860185526abd9d21c823c4f7f6996bbb1d9518f96b6463bb3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=5967d8e85fd2e45ade15061c15fb4e3b6b50614c85f7b250c9d9c5a105417ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=cd49ba821c8011994c4f4128f39fc99bf1cc1a1f2f05c42c1cd736274b0f4fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=409a68064b5ea07432ce6cf9a555198feb1ca16dda98ead82db8c1c0f0fe2e37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=d601789c29b9eb6a2f425368d65b2707e39e23e02ae38c47caeb367bc694b35b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=58242bb5600cc111f1d36d24a6935aa72062cc6d3f1fe87c3743f43829245494&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGC4RKP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9x8SUASPXIGwGLOoTyy%2FwnTqpfi32%2BhX1gG1f38f33AiBz%2FZhpRJ6qsLdOX1BsJHsU%2Ba%2FzO6JhOTWOOAxqstkBdiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlZO%2FPmmQIUFajDoKtwDI81uYJDEP7ZHH%2BoZW17QopPsnw4aCcd8nzxdpPDntCAtxVRGkUyAvjkEzccTrvlP64Z2Tf1YsnZKH4ibekFDm4kg9GveD5ToTEUk34%2B9OMDLC2xcIT9AGpdeBdrXq3zlUqxFzfDxEXA4vt8CORzV2T5xJB3Yfz4OuArKSc4wIBMCkPxd2q48wiaRDgWlIaS15%2BTQFKSyLmzIJW%2BbkIbXhRVdaWAj8Cco7yBXrpWGGjH05ebvuLH7VUa1zVG%2Ft3P75jSOV1G9Yem6S%2FYPRjFnQarArp1H5mu7zsJaCttjaSxrbVA1LdAOtq8sP0eSkle6NihfnA%2B8KRu8XjoxHhPAJ4KqXpgNRQs9q3ldGCL%2FswllXZvYRGjxlimr1DtTi1Yt4v05XiXZicVE5FshaqVlnqS%2BEbIuGlLy5FBrAazdbvj2BfZNeDDf%2F3Uv2fV5oKZnmoYwqnji5nF2s3chBtrynjO2xoIfekj9yqE2TmR5Rfew2r3s1CYE8IMAK2xofxAF25QDPMyzRBb3h%2B0uJAnPo8%2FODNwJjRdbvolDaXLJmCoXuvDw6HtgA%2FpE%2BxrXNOOzpBkYYGpId%2FcDXExeW2k6QUHAPpCjJD4Kw9Ek7GxGpEBy%2Fe1nnbwpFPIZ2y0w25y7vwY6pgGxjmNJWelcBWWs68w3uWspP99GqPVSTKhtxY4%2FELSr60fTyXFfYrbqnAva4f9EKKXe9zRDVMMdT4p9SjGZgh%2Fq1q7cE5xX7Dz261gsHHAQDFY3PHyuKjstsf9UOCLjOXjh%2FYrNDAhMTj3TNgZXWXnqvgO5dFq4A%2B8JJGfCXep7wbPm63bEnpS%2F35sMBA6DEJfoIQ9e%2BSH5WT32f9%2BUaG7fnvSnN%2Bah&X-Amz-Signature=6df256f7fd130e279c2fcd784ebb194d520985c91906c2e2481b792a8469008a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
