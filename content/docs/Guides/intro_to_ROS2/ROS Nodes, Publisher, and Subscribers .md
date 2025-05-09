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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=0cbf24006edafce79ba0e0088c71728fb6715bac86bd42010f9cd12e8b049b90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=b6ebab8941ca8e0ae0aaf50e528671373862a4c372c8418495443a830604bed6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=ed555dd1e1026598610f5ecd9603b84e7cff1ab7d3b6f4dbcf5a75a405fb582f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=af84f725aa5002811041e21e970f5dc31afa4f2facda22c54e99c09c898412ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=93fc456a5676fd5cbfea1a2472283dd5a01326158b155aba1983110f186bfd50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=8a5e1ff9ebe922dbcf4c7e628afff2cd3251c2b3719be6c1f0474aff76cf8af2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=b6bf3876b3089ff42e418ff693a4f24b632a5149b95ab85a80a37911e3a51497&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP32JE4V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO3rqAZ27n4i3pNspL9z3ESDnM8rlVp765HbeNAaJ0AAiBY%2FaSIAFbxHadZo3pKbXoF71FgzjCP3uhoF0J44fu1piqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt8ZH0yiq%2BgEa9Tv3KtwDtb7kPohB0Pd0pTH79DcQ8HkGbiFd5GhSDwYn2WXvO4Q58l0izpwVe7C8T%2Bk6SVmemFNg7%2B8zA4xysFdRK197z3hGaubx3DzK0yEVlOIHIg4weiUu5GSbkry1b1GO99XRO27MtufwAvjy1zj4jAf3m7tIeASJeoqRg%2FAzzVtbL6j8D7o3ta%2BZrQbS93sUcZL9SQ3sltWeeODvNRvVT3Dl0Z9YftxQdhVe%2B2Yl7A%2Bqbg1O8Yd4EjMWghRCj%2F9%2BCbc0MwgcyrdM9jGovX6v3eQoMp%2FWzvo8HduEMqlqO2FWwb7JdP%2BZgNXKIrwTBKcIBz42id%2FCkWvopAprc0USDU%2B73cAwONSxSd7azLKG1L%2Bu%2BsY7LAbb%2Bznquek3XavYirb%2FIvLyEHOUd9zdIG6k3k2Jm1bHTqDJpMtKzRzr8DIBkNn3x%2FOfkhyBjqMXRRDNj9t3RDm%2BnEYvHiEHZBnvDBV4vilCibFZYE98eROLSKzeEH6gTSYUKWwnDSgezDYgZMIUF%2FkKt7iQdYZ%2FYoJcO522vo76GTyksn0x9Hb00YSu30VC3MAMTVnpDURjLM6t5GcPdmQYxDsPIe1duTYshIpWWee7FfzclUQZ1yPU1aw8aC5hgkS%2BkdaxoTBMLfIwy6v5wAY6pgGWz5tsvcNBRXDXCWb9IMZ5xX57JXktSd%2BosNCoVP6I9QqpNxWAgtZoIMJQPkYI5xvYFG6wNQELAwubz01nlXwPY54RXyB4arTEvukeUxW9wvaNz7mwbYbo9QEO1oHfcB4KnrJZFzJbCbVgwt%2FdGp%2BFs1Sua2VU6Z4K277NvnRbrtCQWwaiCwmnKua5%2BpLd%2FLr7ms4Fe%2BQxmQFz8pp%2F6uAdwwTJpx%2Bs&X-Amz-Signature=dba41674a47d3da31455b2440874016ffeeabbe174b230adbf94f2281f6f3545&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
