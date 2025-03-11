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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=69909f82f0244ea0a2b1525ba6d9dec86939db08c8a15b1fe108778026f769ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=85f05a45affdd31d9019171ddc734a04f357ed7000181bc552fd00c446cdb2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=f72b5e97856527225cb2fbe20cad20ca9dc6243810ee8a894961fc808f4e1e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=82074ceaecd6093cef717f7a5a832ea315e179976ce7f029300cc0e639f698e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=faa2db5151e6df24e446991b90a2d3c49b603608086060f62f6e1455d93464cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=119f635638afc1ae3dfbecfea7c32fead86a9de31429e4a05b7a865a8edb65c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=719cf5d66c8693752818cf566ee62eefdf18aa7807b83874d5a10aa7c8fab47f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F6FUZ5O%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGyiq%2FBiPtsQaMH5y8K16b3SOT8pJbPS13zGvRsm%2BJI7AiBEq40ylptl%2BefQlqqBKZT%2BeS3Bb3yAyh1x2PB92zXyyCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMACJnlcQebWbvIylEKtwDEsIGiA53oX4bgt9CYGYTUI9oN8Ay32vIJBx3p0r3mxK3FgIxD2EfzfDUQvsSUr%2FvAZqMLyl0ad2VMEjSo4DHFrEDLiJtSBunOjyoHmsKeMZONuT52%2BV1Onby4qyJO5ScwF%2FGcFTQI3DYphPFUBZ9qvVZCJE8zr0X9w1k0P3P14dwq4YQIyMNPt8yr%2F8UUTBY1gCI3YWfNoWBIgHJqKrODVrI63SNGdmm6xAkaaf6zI3bq%2BV6uITOzq0H4Jw%2FNuHZ5iN2pRfoeV7BiAT7Tsjmxk1UZTVH2Cag%2Fafp7qphbGuh9Da%2FPbc%2Bva2%2F60IkjGooeHvOiFd9PwrKoqSf2onOGLihkbKWe8LmahITmnLbVXuROY0L1oRGVVmL0EOzpGddtH2mZ3fllmtvETUY9B%2FC3bQWruVbmHlcFY0Z6rRFSwR5kI13p2ZaEDC6LiVrx1erbYJtAZ%2Fy9QnOmSsnLDZQsLFdoecvq4s0L3yuoIvQT6EDaPLDvN%2FRHrfPrkzWLtVPVZcUslZ9iPL4kwPig6FMAMX43N8%2FhC4NU1277T6%2BMwvTDuePMdy%2B2hUo2EAjQF1gaHVk7nAJBVU6OQv1RqesmB3p0%2FuxshpIxwTEiKJkXKJR4e%2FVgl03qtXarVcw4rHCvgY6pgF5O%2BC1qqIYIngAozi6HpJB2bqHDFPmHWFs01VlwA2JTVJcxEvzmw%2Bu793tIIGeIUwDKnVOkBXrGzfD7dvl6abFpeaRFdVX7frZTgYnAsSgFUoR1KazQQ5gBAoICT%2FYiyW9fhQ3MQpxZa%2Fyoj93hROmaffy%2Fj6Zosou19moRdUxXRLlBmrhJ93naPing1Wb93Io5GJ8LnoSPGUIEVP9btrJBCwsu1tL&X-Amz-Signature=299aa1112a19310251aa70f527e1b62762fc2bd46c3ceb601184ff091d286f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
