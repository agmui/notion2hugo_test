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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=5cecd81e4335a62fd6bf66518cf77a321841dd53c7eeffde38c5358af73923b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=43fe321895b434ef2c1c62e78747d964973b690a0196363352d6606a3b48a368&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=c92c545be149ec5d00440d962a1b380d2052832a557ff96a28dd91be0afdf96a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=61b158fdcb6b8b8fddcab53627b09e077cbd4e3d7af6cff56f89952f6ef57b41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=b15feedf9e6c69c09048871da8376dfc7b4eac54eadd5ce063caf0244a06c7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=047b6c0bad87d613a122783a09fc33f9d340e0534e850b1a9e8c8fa3df3d44a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=ba0eed2f27b377e94d61a5322ff3144d2dab37f5b20217d90277221d0eb9e325&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFGDIAL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDgtzinruR%2Bpt%2Fl4zbaD9eKakYvUGzszodDjB13D%2FGICQIgR%2FFe%2Fj9ERblQvKoxydV5DQLDx%2BwdH8lzbjIfF8bUBZkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEheQEq%2BYa%2Ff18VqGCrcA0U5%2BgX5vAMJ7QKPZMq9gADaLzrp%2F%2B2v61IZUmNLOrBHnhCvY3s3sDdWvtE2xDHSwv5ewVUafnvyFOcYas5h7RMwCaB45A6l83kjyKHUnhk441ykOCmFkcnXAjpgEmKUZHG142%2FHm%2FKJG4Cukjvc3RFe41gba79EnSYnqKUBBbFZZT8yhLhZzYGvERjGJJy3AE1BoiasDeqoxu1pRSVVZgN8cN4OvSLzm94Gcm0zgkWDq4GTVs%2FfosoryywGIwEHvQOaG6ip4e39to8JZDpFRkXRLkILFHxrSWBtFpVWeFtC4ES5kYQ3T1fPFlS0%2BpJXKcgWG%2Bbi%2FLHNr%2FHaLVjAyhMjZvh8yulmfIlfwg4X%2BZi1P7tFUWy6snlimmaU7BvvcKAZ84PB3Qw13mUedlVKaIw9%2FxA4NXjOgmQDan7C34l7%2B45EMZ63U7QDxpYu5tszmrs%2FajM49TZd1qg2xqQTAU163CyykaEat%2F2h9IpAYHCN3iqDNwfparlpA3FmRhD%2BDEF4zWNvb4MGVCHSN94ztQ%2BFJfdSw6kp2sDo39zX6Y1GYGLzFVm8WtAedaZZOF3cbWlggAbYrATtH6n1fsqn47J2G9FJ14AxlXQ8W8y5aEFDu8UpfmWXQko1P%2FMoMLWkyb0GOqUBdN2y7Fw8ky6feQxISGSqsOfTJCabRUbLGFhzBNn76CGiC47OQ9w3zLUpnjkzjlsOm95oFIFFmbIdO9UiuKGHV70cBdTZQDXB91fEHLX23%2FkKYwe9PfOMC5GjQreawZ6stebsraC4IE6lhpSxXyzxmCIlyHaLTiMYfCiYtNxrH7j1XXnnCj7qGWZGoZh7kS9OgiFgPtCujhmTm2%2B6KcXo3UFBYEQW&X-Amz-Signature=f8be7bb6fe831159c593d9f457c1967c25f626c7fb0f6d8187e0c617e46d1d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
