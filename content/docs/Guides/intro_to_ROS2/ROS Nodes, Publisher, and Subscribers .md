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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=77784e386e1efce5356d1102d045aae6ece510ddbfdd66750ad7523ebfd53f02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=0af3ff2984473880ba940d4345a6c0fb8c8d4e43635913ed6df4de0a30c9709f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=21153ed181c23e198253ce3583dd068f82e90431e41d9b75e179b78ba7921def&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=ac46da27de50f7d90cbdad83c6f7df1beffaec041b8d8dd2a2285964e9b5c071&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=a1380af6a8253123c73910fcb63222c804995e777d0b72effe2dc7fed2701548&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=18c247f990b2afecb0258eaca37aa4d8eaebec8f1b11be1dd3c283418be78706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=1ceee70d71b9fb1396f21473ac9b9f875e4d52f1f66d40d840287686010a33df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45LSF5K%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCh863qbe2XL8Ddcuy0reJPJ5%2BrNT6rbsvr%2FedoGloAfwIhANy%2FJ5TLb7izufiI5qoKlmgrl%2BIDR1PRGYOnq2sCXZAvKv8DCHQQABoMNjM3NDIzMTgzODA1IgwAYdmn%2B%2F1aSWBbTO0q3AP%2FrzMiOTgBGVKuyptxiHAl8ZSlyXPdWcYrHTtAC5KZ7bQZkN7qL4hsjXaTEYtBy%2FhDVyPuwK48CmmMxDNu6KDmrYETRiGCrPNT3pEDmoc5UVqIUzb03XSPbvUr4rxZ%2B0K3VtAhhMKVwm9OYkRzuy6tNAm72UsvjNgNB9LvCnnltRyKm5MYfkm3Iia6geXyV6nWbVAgiQZN%2B6CrJlXfChKxBEMjrqjARBj50lcxQA3Dsla%2FC6w1%2FDnXpOBq9pqXcbWBK2iwlye92jhLkvCwgct9mg1E7nIN9w5t%2FaFINKwFbipN%2BrhBcxMOUMm%2BMenzy9Sh%2FKu99HnyqxsxaMqNacuEF%2BkK0CCzYWgXajT4s%2FZH2QpyKGf1hJ4BKhxjRz70chHAv%2FBN%2FBt6OUVhBD7pMMpQo4IpOSfMiOwu36Q%2FvCc97wWhMufkqc4PoD0gFWTKXaY6CEppGmPPQ62c%2FYGeZV9J0p2ByeUShnmDJzwXvEYRZvSBy%2BNfuCh2lOMgBCQLGbhg7pb2JdhUxoyuRwUKfMIUk4aJ%2FFoHLdU0c2ihMqP1stdpIvqa684l0Nr1rVRuQ%2BSRQ32V8wfeLBWbNXq1pCAJGvzvF8nxQG66SHRMMrHJfmMPGO1XJorXOj2SjjCmkIG%2BBjqkAWtJKwuCR8Yl9Y%2B%2Fwa5L7wsKfpmZks9a9FNqy5TVbtSR6dhlb6ClKLyjZPA2AnkqhhjGh168Px6oHnPmneGP7VN7QgiofWkNxa0%2BB7QeEsEsG2zTsFp92BQXc31ZhYQQqsozlE1w8mVQIMdzNaSs8RATOKHDlHiA3mEq%2F7vio8sl6ARMr0H7%2FMqrtyPpneTF0jUzIIEKcexT7yuTj5yc4noi2kTP&X-Amz-Signature=4c240502deb9d7d9e39f1811145eecd483736ea2b2c299e4f5df985ac854f29c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
