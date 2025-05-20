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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=2fdc16e0e6e8cb3e1586515e035853c950249e3edd4f1b8f769e27bc3d668239&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=4108206b7a50b0a61fbed9fdc50f923ba7911cda30c79f059aa264c54383d76a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=d39ab63cd96a2765410b8a63505045514f741a038da3227e435426cdaad8d089&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=07214e92b2494705320bca7c280c4b62be0a6a9f27bba9a01d91be70e5537871&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=215c244d1b822173a5e6c40fff2b369c9076c274496a17fb629fc550d1223668&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=4d6ad4e5c587ff7bb88ff84c950ffc58209c62d32099b32095ec47ac3ca2b230&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=4c15885882e1e76ecfe8b2f3bf67e474cac5106a680c72fe88717967cad83638&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65A66TU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdaw2NpOZSjUfMwCg%2BZZVJ0rbfoWyhf2MOOPTTblYe6AIhAINEidYSO1SFgpBrD3ACGkveuLCU8aDVGZN00pjkiL9EKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySlvLYw6PKwo1fnFoq3ANgFgybTB4nQVDlALjAohnVo06h76uunOv6kIA00gCuodg1RDKf5yuSwut5aNhpYG%2BG%2FoI4PgA6SBFHh8wR4NJwKDVydq14TIYZYrMpPIbf0uOgLgziy%2FSy3juR9a7tppAgveSX0sb401tdXX3SZ49oYErIC5Z8wiK%2BPYYRm6PIpIdtLRUxpaLQ2Xn83qphD0GEvUESb1wtiRQM9yTa0Yrv9zAKepcCZTDuZ%2Bg1ncTdUpGez7HDR1xieq9wNoJSst%2F%2FVSffoGiLOS3CueKZH52Ee9zQLLiGIof8l2vvqL6tTHFQflvSH%2FGIg0jXl5L%2BETds3xv3vrPfT%2F40mSTHhb04T7Sh8T3KnYKD7GzGPvRl1YxTf6DukNa5bbKaruKvCa6ZAiHuYD23%2Bf9TAG6KZ3PKNiEa%2BLATJsSv6B0QohvpLj05%2FyyyX77EVl5gBEsQ38HYyrjaCsvxvpGD3DVVShtJQlpgFzMthlSbG7I0N6O6yLg6QJbZ3tJP80LWNExYFDI2M2PeelnUSQj2jjNmVvHjXZ%2BSGhPdepLdKrS%2BNPjVHNbzHIgSMQ0PVzPVyNahs%2FVN49zrfp3O7MBX1TQ3qMUvLVarFCM77ZAR2JcwPmr17LloZlpgxNwURVFQZTCAyrLBBjqkAVOsr%2FBvx8eBlPw7JnyZZWHhfFvDzZUHUV4nBfx5EIpl4tqtahFajYHBcIeDon%2B3%2BuyPVDz%2Ba0mhBmaNLRNm1zLz3%2Bfdt9kfgXKwpqEpd6vi4L56lc87jdDGydtj0fDx2RdlUOUfuc8iiSCJjohdU6CtnNw2nvz6KsEubrzl8x9HK9OJmwimBOM0WRhVdeA1uteQT%2Fm1WTS1k5%2F4cOs2AdJ051gl&X-Amz-Signature=fa252e701d35cf8b70187f9d267b9749bb8399691cba5a925deafc2d86426ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
