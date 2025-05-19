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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=7d0cbacda6b370ad8ee5b6e4f9cd8f17b83a375e11dee8ba113f7cad1bfbda08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=360fcde7f499189c964d6edea577f3cdff4dd96fa091d8d8ef508940c0c383dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=23cdd7e931ba73802f0c12a1591e1e41c2b416d4ff6e8d31674e48dd813bb7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=bd2d0ec0993d108ddb1549d5073184a11c0e25c3a7965e57f1d925758d73f7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=c374e05bb7c81999b35e36c0acd9330605844e5d4654115fb55259b822ac02be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=bd54c0bcd23b1c55cb60e5a9ecdcec547d870f1083b232a5b9d0b4cb0e454c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=64145c76368ede5e19d0f46aa99bd2cf3e3469c424c21e8da9f76c6bc3d29e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGJHLQ6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXNDD%2Bjs5jOonxsMCpn0AHcigqcPYbRcwAKNiksRObQIhAKb9t4JzWPhPx4WLehTCRtz8pFhwX0bRsfOxOVM%2BaaQvKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBZDazPvKHKgdIOJAq3AO6zgAWq0zcCEO%2BeuP2KvL2xzef1OV65tQuAElOlBFdM0VoS6OcYT9inlg9SrMQVSdk4wNaUXJvrZI88OJmm3Qwm1jbIepJJNNmwctp0Wpq%2Fy4SEV1fVWIRJ548yzYH08fwYz9xqpD%2BjKUGhQ2565uvLHLI8JTGFZOds7Oxx3xxA8lbgr3bZh35AHt4IahCtgC0AswOjak873gmB4Y%2FFUG0Ajre%2F40m%2BQ%2FXyJ8BZNeRrw59%2BAgr6LEKVNLOhj2osn3hgl5%2FaM0rdVGMvGRI1ClxGtVuCVpi2xw1PkGeVPJW2ux9QMd%2BPitrMSaZz3ZesDbS3%2BcM%2FhAWGxrAeIwiAcm8o5mPEp4Jw46AG5ynMxjy53SFRTUtZ0pxRVqFRSYANUGhWMiGHoOAANv8TwtVgQqiUvZebJ38knsib2URkp67NaEUkYqVxxHY46aj8ZpbmbHxc4TdZb3Ia1IxNwJW9Q%2BaydjmpyuGmlQwueRhFnwydEtIxarRuOWMOTSHrFbdfibNyG19Jvf0iZsNZ9tq0iGAa5fTVe8Gt8YX5h%2FHVGj8OT7icVdkjjtAX1k5LkKW%2B0dMFvQmf9wP5ahacirgxG33fPkG9diIsNBvNSnmytMJXShCq0fL3YXpNSKmUjCWsqzBBjqkASzOcc1cTtgICmr5Cp0FTJHRBFxiGJsTGscEwHgQWSfotu%2F67DWwUTrdvjtlkRcu2UprTbfXVxbyPoNAVosgHM%2BKjKwRMlQswg0sWcNwsEeNUE5sV4iscAt2F7N2PG%2Fb9irY870UXY%2FR700yz%2BnjzT5OcqyMfws%2B1DC03aTbBSDBwNCMU2hLIVUi4bsUerW9QEcG15sy%2FMAcultm%2FNsbJn%2F7Be4T&X-Amz-Signature=89aeb41c44732ca7ef1dd360f66a9edc79b5c1919a43f872bd86a918f311b211&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
