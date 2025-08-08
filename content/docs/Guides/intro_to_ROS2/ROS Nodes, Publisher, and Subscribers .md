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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=044919fd8c9d480f7abfec802a2bbad30ec1c969ff54957b5d07b1ce796ad5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=ec1530021781fbad08578d581beb7e256607726940333737940e38943215b190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=13569015fc9da1fb33c753d1d7bdd5b8143cc4a30c42fce3323378ab938f0557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=d493a5608e5f91f3a9ecf2d8f6212e139819ee21cc912edbe039021219d2097d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=7bc41583ff1bb68997492707f87e3391cb3d136d680eeb764616fb5e67010426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=b7aaa5abb8c00281e5367d1129c0ae47568b33669670b47aec522d708534b49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=1f506072d9ed22dddda2d8e0a22ec19702c7e17bc40f009bb2169bfd5c88f2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7MBT432%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD9k4IyKDtM0eprAAOTFTU85xUtjQAzbOzzuVPugEI46AIgLMgLr3zyf7cZLbH2jnK%2Bgm3fAC7OlbAxE7REQC%2Fts28qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxaGzyCOiA8bakU6SrcA%2BfTpTu3OhkCoBO1IBToRqk9vEv%2B3y9LGJBYWke3eug3jsa%2BLYXu%2BAIbbxRkFA3E3og10jMvT4EvGUhWi3dzXCC87L1oPi5tRXt1x0DL9J3k65jVq3CdFHP%2BrtUeeLQpY0AGq6vXkuYf4M5Slhholea%2FJ8e%2Bu%2B83qHZV310LLgwtiu%2FvqvH2A9p856qUg3Ilojt0rcHifey5F7CmsmycMhCNQ1AnU2NJDLDX5AACjvoVVOrpEcUV4UggTNDWctotztw74BpHMNdfnY4Vl7qeyT37sLfl7b4CIGN2kh6nQCi7hIL3PnTcb8BNr%2Fk28o%2FTeO9C%2Bwpz0JVO5fTzkVjkD86Ikvd%2FMmr2hiBc9OQzNaJub8hNYWxGNw4dh06bY7ad4HwbiI4FDTrgiGT7H8%2BQqpZSNNYceO589k7Yp10DsWFuMWSDovJMiAiQVFpbwCzUNvdle%2B0m%2B9GpVc5oFzFEF1Xkcu2uzxLfSKnZKzBSMRmjTITkLC8E24zMemNFs54yVETDZZ9z%2BTjNWe6yK8h4Bz26UssGTAczpIripDZX2G9RK6SbnNtZ%2FgJriSrnqAv1yyYRSwblKn76a4f8fKbi6EKZDUAj%2BY83lIXEwY4auK3%2FnEoP5TCUKzqro3zLMPqn2MQGOqUBj0n%2Bie%2FmkeNeQXne2PDe2Cna%2ByJ03yZgk%2B295rrR0eYRRj21O8IZENLrzSL%2FuUSFFt%2BtsQ%2BR5mJ3KO6TMsg%2B%2FT1ymdnYjtSyluou4F0nTXHc%2FJU0m012jLcYC8IfqU%2BLS9cvZNQR%2FmeRB6DXs1uzuoR542WWKcnosumJBWUA6eV6FOgw16%2Bl75oLtjWysNAeBfLVHNdUqHRiJ%2F9kQbr8O7wxIQGj&X-Amz-Signature=789117efc0e6dbdc9fe66335d2be6c942dc4e6a1f751a3b8f88a330156b0084f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
