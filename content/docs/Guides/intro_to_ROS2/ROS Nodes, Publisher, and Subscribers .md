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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=d54154e6dd9fcebfa014f7672be9464ff155c542e4e0dab7675e76f6abadd953&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=fcc716cbadcba3536805d7c4cacc7fccf80bc139a93062f4b2eb5df616618a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=8194526700a64c0ae28fc7ea749604052deadf8c9b1d4de19a3d4d39183587a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=16a320f33e6a88b8056f26196eed0e58610c8622c6fbeb1b93ac439be71e74ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=8189f236b31cade163f23b065bfebfeecd4c157af7ee8c4df42c01e1a6d9f5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=2cf712789f1e22733466b0494d480a67ba817071a98fa07ef614434477e315ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=abb52a683f7fed8dd61833735642125e4f00f800a624674747fb9df2c713f855&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZK3OJLA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFTJIVz0srepCHC3yE7rODJeGCoU6b1lWut3M8NubSqRAiEA%2FJvIstdNshbmUtGPggRH%2Bl3Vqbpw9kdUOdbcvXHK85Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKDL8WEGPdm9VM603SrcA4qyDdvOca4IVqp0oNUc2m6amtaZWPn0V28HxrJLDkslpwCj11I4WoBrUQvWWrFSX44hhEL%2FcCV3cfP8KuhBelE7%2BcCRLlkLaLmRjo0T5%2FbBQwhMWukn%2BC8ORiCQlSRkQviudJDq%2BEeyV5YT56VihBdibru3WeP8jfqXzwGmCpONBEv%2BrEtMp%2FoBfuh0Nv2UEpajoZsY93EMRfnqUyLIFMBZ6UmUOacldsU9aXgcSbXFbUPXt7ZXDFLk6sTmnstj2gPxdBBR6gfVLDs9yVQX6R%2Bhsd1v6VSXH78w8jnk79fkPTnA9E96gspuLTODKxjMTSHO6nIMWsTpddQhxlpEEgFNssecxsRKDcM0w94qdV9EFAXiSoVQObVqbSVoQo5Tkb6XCpqepmnod0wOFUR06%2BNbg2dVO2B5qR0OCqvHCQ2WkuNTj4f2t%2Fw%2F7aF94Af0zpohtvVWqPX2RVyqEteH8izaoU4bgb%2F2dKmyVRMnVYpsLY4LAwgp1IN51YRWZZPKs%2BdR85xqSlzkEkkOQE%2BmCaFqWZdkNlGm2%2FEIFR%2FD%2B1jRRzBVSYaZfT8wt2dLY5NH9FfuBpvT155khDm%2BE3LoMAefNnbIP%2FO3lniLbw7MhZFfnvZCU2q4kD6%2FP%2BqvMLSh1b8GOqUB%2BOl9k5wQ6CpgRwoX%2BlKyQZeU1lKYyH6oa1lADoqTIPG55ur4y7BETPMFPRZsmc9eo%2F9MIDijWHLJLjYslzfWlwaOXMK4WJLbLSD7snBAxIccTZXELMytq6G%2FEdPVhjAOReCJOi5amYQT6jkQGol7i0EkSFKJoOqWqXvNvhRwuVsA3Xm4LlcaLUgdWn9mVEi4vCdAh29qI8xrmVbGqa93t3urHV4o&X-Amz-Signature=6a4033b9854c44c801523986e0f0267565683c1a8d1d2fe92e73b43d54c1cdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
