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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=4a61d0eb604d890befe0df471ab00c72bfdbeaaedfc2008f17a30d46b7b1af11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=ddd2fc0e11fb8dc9d01ebee72156f3cde247b7a17e4559e4ab055fafb7d99b84&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=6c332225131ab9a739329247398ae14c4094a9db226e78ac2ed01578c7855b43&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=24790ab0da3b40b15fdd35436bdf5e3ebfa1eb9882ef44bc9aa36777937b83fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=ce3ed15db4c80fd87e4e6dc85a38e0891408ef356a8a6b08823c9a3983f9a38f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=2fe1404bbd885aeda1f3b61929519d3b33c26baa15f4008f5183289a36660869&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=37d82f451cd03fce5349ed525413a8b6e3ad79cc9d9dc6b0b01c52b076a2c4e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RT273ON%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEpAxnx5Q5LpC8bBgLnkL8TOcoDedl6a%2Bbu7bb1q8Ot4AiEAxIwvwuzBWroOasTSWsmTBDZl1i05%2Fl0ZJjpSKzJe1nUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy541NDfxyTLiB1ZCrcAw5J%2FZZziZ76C%2Bw1FusQHmDE%2FSw6uT%2F9ZOCwTHzlKvGnk1TrFGnLSF654AO%2FwN43UWrkgA85trgQWtIwSP0JSm5x2bM0AWmEfJivKK6XrkuiLb0l%2FbP7fjmPCoImlqY7GoJTVxlMK%2F0CNp5CJHig1wMHuznn%2FukZ9oJNpZ0NZ2yL52PlFLkUICG3vT%2F03M2kixVP0rq2RczFSurwFFjLrySOBEycHoVzsdrkvUF5NFUnT37%2ByJ1WeXKIj8TFGygFnH3XqmPSV43nIzB41GVLBRkBOdCH1mu4Sp9nJYLFVYTnFoyQUegw19LYNa2dVSswd%2FIR51Xs01IpNPtJzFRVmZTJRRvuwPsPyHadO50vAxKdlRAN%2BJWWdY68h27Lpxxf6kZ2hjoTE5N05pBCQ9GdLbtEcUCNc3gASJzVUZP3ZbGd6bSADb79XX7gK2Um5Wn3b8UNn9U7hN%2F0%2B4UP8Qo0HDFX7TWKHk1FpJ2%2FyHH1U%2FXuKAXd2WzlTRW7FCB%2BOm5mMjaOpRqXxbX%2B6VZQxRMCcAs4DlfV9C9W0VjvW3iAj7JKOwT61BhPkt7aRWAUSkEM427IWIEEWpUbZDvFstTtp1zGUjEK61Gj57Xjj7D9cFOHyoVs1P3XaCeobKyjMMyJnMAGOqUB2se%2BUJhQplCm4jDbVeFv4Vhx4M661pV06FNvWcGf4UWIZigLuIpqcEDGDs1USbjx5T7dhz%2BQNM1s7tZ4szYvMeP6T163iu173mYJkUovjL2wvsqQsALpF74lp5MPv%2FM12XGkG%2F%2Bz8dxTakoHll1u7T4mLNhmrkWs5FALqKc03Gyp7QwFwlnWVCGGwVak93q49HnwvdR5vW84Xmc7G4TvlpUn8YJo&X-Amz-Signature=4b321f66c2bf13c55dcf7d410360ee44e243154ea5da4fb82c0c363e2aad0585&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
