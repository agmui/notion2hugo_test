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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=345ca4957acacc5192ea0e9b81131f3bc99764b45973ab52d1779b8f4f5f0a06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=ba4fe4b7d21634fdd32a38468359c134c1764a98f542b556c422c0bd18c77665&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=326a4115a49eadbead3a280c695297569f2cdaca0a172f1d87b42912c7c3503b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=9425ec6ddc7fc69d7e09e321a710b035c914d5243cbfbeca14ece7b8c62211e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=62d19a710f6f4e676d87bd2297d1ccc48988af71428b8c6ede488bd174cbece3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=e4fc70106a2c4c87fd7ba195b7093b4894cac05a36644e86c5c7f5e6eaf58fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=3ce1a1f617120a12f054a667ea3fb64fe3dbe657ef3b36fed1bd37ced4ecfe38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS23LMSS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDzyPp7JBGK9%2FT%2B9HLAmLQpup3T8I%2B8uePXYHtgc%2FN%2FwwIgHQigLnHJ3SpcDc6hHXU8kjZUXLXsfdJP20C6Ht1G5NUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdaXq1XzJUiNVPyryrcAwiiNtSU626u3CGyBrR4XsssgAnYENtO9lL5M48WEzCK2iWWdW0nIOWLzwMs%2FG%2FiDPmUoteyS%2FiP3ScIc5Dx0zv6bbo%2FQgLapEH%2FyyAgXpdT2exql9USIf9mbKUx2dK5SrMTnKaqoeUEwD2xyobGLJIkXUyIK0IVL9bv1N9qu4dMD7p8E1Vs6ILZ7Tl%2Fdk8L2m0NCjh57mvZWR1lzR4Tgd2aE5YRUfMTFaJmhY8J18EoAj3uiWzxTHle24%2BWp1gIgkinyZAK3B95RLN0XH6ssj1LcY35mm%2Fhoo%2BgIwVlLm%2BDraFocoWH63an0DissReLGJusr5fSyQ95ZaXJtwyTW%2Bhz055S1miNpfFqc9AXoEyvxwgdxMOhE9rUNJmHQTc3y2XqIPTMKIEaC4VO5H0jgB%2BWZvfGHp6BKhm8qMFIzgENeGE6ttnstgCIE4yT8xQz17gUu1W%2Bjpm%2BQoNIb3hXU%2B6CQg9onacOJUdKTk6kfJz4XS4G%2BPdD6%2FaZSZKQ3l4hNE0p2gwNJjDyAY2qE0s0vkM4YcocHdJSAW5PIe%2F%2FQedFUXrUTXhyXiSRTM3kKiDzR0k8HSsb7dpxWk9z7Iu7JrI4XV5JVeV3j8JqK%2FoAmJwSIkfywPXa8JmCDP8IMJnFvMEGOqUBEysBqrhnBeOcAizmVppI8sfYCfwuP1X9u6bEmrHPXPatl1vFbgWfqxQ%2FE2pUKH6LgJ7Ccr9vLSGFbongVtD9w22UgnH%2BUglYgyd6TcK41buzwhz8ZR%2FcMBlmSPN8pHh0u7ajF%2BQHkA%2BEXifKAtGCqR0Md4UavE%2FDjHMdIB7BPo32uyW%2FOKu7IS737KYCOfez1A9K1Vk7l1xg%2BPTEM5N2drZi78VS&X-Amz-Signature=cb57b3581ba90d52f6254673e5e3cc9d2c1f7b0b4d165ebbf661cee092b65952&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
