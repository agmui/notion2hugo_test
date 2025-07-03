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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=42093e4c48915a77813f3605cf58f43e8b92930f92de1adfed6817ae5e5603c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=7f4aa173a468fcdf9062a1a8e9db6918aa37e6250019acc4322d3bd5c78a0548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=6536b905a9e2dc81a7158bde4d81eb699194c0381bf12efd5602170a98254ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=bc5138edaa6956b45a6712b36fc37dee04049cfc77aa0dffe4e30925d01b3797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=9292cf2df59b5ff7b93b5f0f10f90a36e839eef8a326dedb7fc3cb1c9b569f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=04e52a847a718c2aee0ba01478baa897969292a39664ebcff29d7c1fed947f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=9c94d1bebb44622141ea6896eb7a9d57269c18ef9308a3ff7577e3a3d2cabf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNJFDVC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDNnDMWP20nDuLwZLsvUImeSJ0%2BWFvGuV2vCVFXkOLhygIhALGFBtKR%2FRsZGZo2rCUrfnrUBGlPBfxTJT0wxdvIxkdWKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOudPlG6uz8%2Fk29msq3ANxq%2BCMuWKPZAhdXzkyT4X%2Bx47PYMZ7OLg75%2F8BDobvLlfuhLYmGTl4AHFm39VE6135v7Y37UnwO9UnblAafTaSaSuZuC06AGR%2FlPoYvXqpckDzecHrYQ5vHcIKW7ULxeJ87DD0e1ACkg9cgHPyCHRArM%2F6yzHZVRktv5CBGlG2FnCONdwLg13NhL7INxreJLL8A%2FloBWKhzbdkZI%2BR9wrp0R6GjtnGCzm70Orw3t8bLc9iXXfaFnpQtNJ0wwKUOOSPH61jGxdZRMUW0b%2FZbz8K693NviXOlXPM7m%2BHgbaWqHohuU1b9rqKgHj%2FlBUssMsEnH7IOp7zfMKNPjBL93J0ilZDvzSWJWwdY7kbyea44HIpPs09%2BjR3UPqAD22VBrn0Q0MGB9f8cieoL9X1cdvH01AewCJSHoYJdoThD6PJj1tUmcUuqSJC2jgEWhfWzwnqwzOEas1wpCXfePvd5OPEkeuIs058%2FCSWaigeG7VtZaLp%2BN53ytmgaMKmBSIUbDA4R%2Bkf1sYz%2FSd9pL1pwL65%2B3VEGo9W%2BoPne9Ahad0n1tQK%2B%2FTw0t%2F76u7N1s2G3rrTf7OY%2BdVVO%2Bz97QvftPZ9E8ELDuqNMRh5UD%2FlJC1uxwrgEYjmknlYrbPhvDCBiJjDBjqkAZWnUNVSnWMWsWXDbI7pHhRiBMcQ%2FED4lIzs5pBtKcn2uuDH4JBmV97JgAI60vNVmEvkDDZnbgwFJjonwTmnDr54%2B5ifcmY8m%2BlyNpLds0OTQsr87TBsMJPP1j3ypyHf5YH2VkRSgXRD%2BLZU74Wy5YksOgzYUUqLs12Ewz2Xb1Qo0gb%2FmRjaNZZ%2FhQ1ONGwTmGasMjT4KuAjZqk%2B7YcZIvWZ31P6&X-Amz-Signature=e6f115f350ac3a2efa244db8aa68cb4d443ac2d8d33b8c0563ec673b3765c3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
