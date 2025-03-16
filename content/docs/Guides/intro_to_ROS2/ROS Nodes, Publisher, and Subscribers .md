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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=5c01427240eaf6b80efe6b1073d99a77870a5186bd474836e4070bc3e44ee727&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=bf61028cc3a6eba0e7c0d25734056f9b74947b6d710a891e1be3b4f8722f710a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=1d940ca1c63f3edda9dd410d752979d40c87a51daa5ca64507ac1d19e762033a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=86af21bad3b208af54579eefd0c9a74c19d871aad292ba35290647394ed7e003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=432e8a5c87917978df9eef19ba2eaf819fc14b673d6bda7cf300c4765583ca2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=5015cf7055f068866b85c8b1cb54bb4e3afb413585fdf2bed69fab177cdf17bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=c57e1e6c321a9dd25c69d82b3d9c8bdcccaf0fc807740c5bc3bcfedb008d8639&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMHPNAN2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqE%2FNPOhuVM%2BeoEE9u3oKoUC4Ab3c3U7DTsQBw1LtWxwIhALNBgw%2FWcVgSem58dRS7xfB8l667aP7IlmtdUBvSgxOEKv8DCCgQABoMNjM3NDIzMTgzODA1IgzfwhH9fQzgCBebxW0q3APViQ1x3j3%2Bv6IEo5BseV35QFlSsm%2BTjNrnh22OuJmO2DPaDXSDiqbsbzBhzf6JlM2hMq%2BTsZlDwCKWF09Lm4KZAzJmVqNJaju5TGmk3gHpw7sCRa0a1C38rfL8RKxxsBY2YJf01Ch67Zrtt5ycNjt86u8Uwshyo92CPdsupNMkbZBFA75kBYk%2BUUXvZ7lMuK%2BeYgyccqQmz6%2Fgp11r23BK%2BRCMLbwD5AeMXdJYU0R8CCx3GpF8pmprHY3qQvorgFjeyzAQ627Rt754v%2Fzi15q1MyCdncaO4Qq7it8tr3XYABOFlTI6iFVITTcPgnVbKqk2bht1uDAeHbX%2BgGlPcF97vws9P9FzCaR%2BDJGppLZLx%2Fd9jLlIUx5uiuT329getXaYc2nzEBHmSTOwrRBk8COYI0MH7nANxZyhIL8iRopL%2BFWFabEcG29VTuLGBhijeTsEqcbRvi55zdg8I2reucDkcLBFAvGsr6SkONE7wEyVa46Dn4rNLpPZe5dFn7Z72LHEP2oCJa7kOTWaQrWKSuctqBChHBtoyCl5jPtfWovWVozaK9fS18PM5Cy6WJb6y6CxcoFvMDVLO3uXNZsiN5fx4ECM53zw9g1guXsFlhHvkfFgDIKt53tODHTz%2BDDy6tm%2BBjqkAcHYSS0C07%2BYjnQBkV2SZOa3RPZVoln78kf2UoKlyXz17fDqexjS5uilq8mRfQIzOJEgcivTkQgsviNnK3ulZqzYEG2uzApG4%2Bdx6fAgooPoeJCLo36779CcMNAQ%2FME8jQx5m%2Fg0mQwJPEffki2xtupp0FbjcBfzYoXRNyb1iEIYg0Zx6TUAduLTHGcH0gJu%2FLzBZ96NVCI62oK%2FQzoSXmIDVHJy&X-Amz-Signature=a847d3fa34efb8185c9deb58c4e840d8026b30bcb5420f3fbb3c6ccac8f1133e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
