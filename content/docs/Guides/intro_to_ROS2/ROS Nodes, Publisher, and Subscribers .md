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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=0e5ee04b75dc0a3518dbdbba2d7afe0a8016b73eca9617fd8c64b5bc341a2eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=156e62af1b514564737d955e802f7c7feee743e7b31a56459d899bf33daad1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=70b115c756caecaf7fb1f8670053e7b73c15dde0324f4eea2ec1a64d6b6ed7de&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=df12f034ed579626e12ba58aa75d2bee455ada20915ab97f42f8a57eb73f65f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=f72d3a88d4689fed84172fafbc311caabb115f9f41148db20198f10b45e68903&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=dc05c6c4e130149934ce2b3957b560f57070f9f0c1d0a9a069f61173aa8511b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=e93613ae13dc3fbd5bd9a8d8e872efd40c6514c61506888c85e482dcdb25ada4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPKSE6I%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFO8FsHuyRFN5N6HhyRDm%2FZpdQ5vmJPKscFwSbxE89KAiEAzONtyLg8aCcgrb0qXBaS%2FHF8ySkfMa1ZoCHga2ay140qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwToCfjjEdJV9LnPyrcA9IkTucjAgT5B87Leqs7%2BrX2B0tbLhLk161JyC35wVB5gnUeH%2FewuVxNsrPvuO6W44J%2FAIkF4TfJJ5LWs%2FP75%2Fc9UYMWJABmXWPZemYhGKET1%2BZ44Lv6tRp2n1C5eqqBbqgaF6UcATCbxsUwGPMnkBtst%2BeCFn1YCzzFc6aMqANG3wuvUYJuMQKvFvgJZcEiuye9YKjqM2jOrV9m6fCrA3EFNTX286S5QNRvEK8QNnDt8hChvSVPW18yPdXssv0Tl5xEaDD0dBqR5bDNQ8Am7EbpPhjhKB6mJmfVMMm7x9wqTgFgEGBoQsY6uFc%2Fu9hQ9CXsoSIq3VEWQA588lqH1%2BpP8ypkARBKhmIwZIDFsVi0bnC4sJl63TlnaHyyDi9krDzguH7yZvuvznqkMrW%2ByxVBYBQZ8hLRfubMDEegE8ihmh271h%2BqMdXnbKU6zMzrY4GCuKoFCi7KNn1JHmbYtlBM%2FA3v5vVqGR31PyY9oBJ0PvS5EqJDFqb%2F2ieB0ssTmuOUplWfbiC8bvja8vuDVS%2BcM8AC14LceXj66lRfXd3wXraRIQSCUwMh1XAJWN3yBnXb2v3GpW%2Fn3cnEQ23we2gdk8MjFrEiG6vw4dkHBN8LJi6V4foIs55L29G4MOPK370GOqUBboyqegTRh6C24FYXyAIqffqwA3vwn13SEK8gi3zoS00PcLTWtaN%2FINrilJOmwtarMeJaucX0bQUfJxhtNB1r055CxEiXx5aLfPIC5Xon6Ak9mocuO%2B09stonZEqDULdDDfTpyugQVesIRiADrhp5d2bXOU4mlA2QNyGZCQAb3dpLGXtOQRpviUKZLnbsecmsZQNGveaJ0AisaunyQQ4JAaSIGnRd&X-Amz-Signature=8c2bcc285cc2d1df58ff57965a046b6ac10e070789981bcfeb27190590b3461f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
