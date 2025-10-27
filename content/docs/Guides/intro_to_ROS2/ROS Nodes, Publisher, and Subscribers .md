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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=b4d6c045fde2c939e71892b557eba6f1a8ae2acd592c3513aa047d0cc152c6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=228543ad40115b846d678abf76c453d0e7ffab976acc621b39738155097ad39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=bdcda6b0303051280f60a55f47a3e3c80f167f7f8f83ccb61ceda46eafdcf4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=45b50368dc1cc99743d69be9ec094b5f6326b0e1750443cad01f7a3640de9bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=3bd4815d50da3451148256d081242c38777ca635146346b760551816b0a76fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=6437e1733a8a4d3417a2c01b5f95f482e7f7d4b9485737334c253f41da5af64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=341fbc19b5a95460efdcadf2769c831ba2d76b8d8ff6eb8ab5d7d23969075b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHIFHY6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbvQlQVE611ahN%2FQ8LQDmkjpb4oQfNvPQ8PRoiPIMdEQIhANS6eRpplI6t7dGCzyD2BiztsBXb8l2o0hkQsIen3jPQKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygQ%2BSGA88qfEytXt0q3AO6DD4Fj2oUpa2wHZYZ%2Byzhg5GE7f%2FR6uUx7P9DqPWNf9uFJTdrfoMAoRetWt5LpoQdtXW%2FA1d6mVpq%2B9dzL2OZWc8toZfe%2FhwkFBOUdzqmmP6q6o0Zwg8OFfnAeYHY4Mq9Svbx8kGgi67arxI66tFkeDRcmiEL7wfzF2USQHBSKbjHKcPiyFOjNZ3Zt%2BHeI5oC%2Fe3%2BvM30m3iklgbgtB2bwQQEFQc5m62CJOwf6lJ9xGb0S%2FgoQ44VBPDyAK8bT%2FHeAUlRkkv90A55yuqw7sUuir3wXAVhyrbehFpU1oFfXR8zQLEzjFlFrWiWR15aKQ%2BTtWEBvyDe4M660krvogC3tPzM2aBRycwR0V%2BUtYUEVp3oOUBW0uCsHR0YCRmJ63oTVnvVfG%2BFFG68chv78TiSvWA28DoKUB36fUH9Yb%2FeMpHKa52OJAESOoRnHfXa%2FuKB9r5Kh%2FyqkpUYVlboOetnI7SG5xR77UxS4lpBoWKEXeKtbNBO87XZ%2BjILMNpwX9d6TQ321GCcbPpG8EgZiSf6JJ3npD9EiYK9RvG9%2FzH59Q1PCCikJrivv97aFZriKM5fjVOV5Axgq5E7HXjLZv0ylNjLo1jvxnDVBUPB%2BPTnQv2zEiFp3ORSdvW%2FGzDvjfvHBjqkAWUjKAdnotXX8FnROpQxcl9eIKjhGj5P1CI3G%2B2tGam90ASpgbwWOF%2FCGhxN5bgu%2BUg%2FkN0Ose3IF80uf%2F6nxleMXwA3CdEFLLDPHTB1ikalaFpBEl6ROC%2FTJJZje5Yl7kSfzL5xqPI9YcJ6HDvGk09B1aY3jbLiqSi6fVIXDpDVFJsiFWV5tuwIF%2BdSc2rRTLV%2FJvkEStAUNN1I4yozkg93Kic8&X-Amz-Signature=bc796f8c1075ba30733fe88efbf929938446f2e3359efd7352fd777996bd0b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
