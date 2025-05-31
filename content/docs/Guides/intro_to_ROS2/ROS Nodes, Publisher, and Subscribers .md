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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=633a26ae778f648bde348de6bca435eebb726a81c00291c4ca8f2c201ff0bd98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=f7864560c32d01a56ca6b656677ce45e04036de227da5e77e5bd3d683b7cc400&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=d25fc9331d2250b77804afc2a482ee4f4d5a2b68e1bbb66d5b9c63576ec0f6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=a47d9e449285bc51f54d10fae44b269f0e9eaa620e87c98e99c0aeda85f35910&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=a6aa533c295603e3e2826e52ce9bb11d204f9fffe97cc99e01b285a77c54ca4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=10077f948287fc6ad332882b03ebb17656a8e3f4075cfb33a86b8d90676a2cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=d6aecc099ae3835cc1079ac6aa2f913cef4c4d55de9c5aa69847f4661e52740f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNSAHT%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FmqmwdgPmuBEZq9R6%2BdDz7V2umJmnlZIAUTSSvx3PAIhAORPpYhTpZRbRyWOmaTRzoVJU5Dp5uk2h2ynTLj5lSytKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dVt8XVib%2FXT7EeUq3APM9EJmcvLIq3drZdly34XqwnDuLbmmRnK0eoZSEm0TpSloMyDar2SdBC6a1edDB17WTCLdNgAmcQg%2BnGekSo2WWi6Ij8ZZsnAjckCA3j8m4y2hbWjrAjIKLdJueuWyXDOfUP7%2B%2FAlPqXtXnlvuyChAwYdnJeQ5%2B7vxXdHnFfaLKVeh9qcdU%2FQ%2F5K708JPuv%2BPAosQJMpT8H%2FujP3tPkmLXVWlknSRZT6KUA4EOrrip%2BlOV6fjfKzapBmjdmFZgqeIHCLpAxGBSLyGU4fFOS5U3yIeYpl9z45mZ9u8NrwgT5%2Bl6tCHiit62xx0tGfSU1%2FQHMKhF1%2FdC6oYRBd2qy5JQ9i8AqiTtiHxW4jX8uLNYBXKtN2Oh%2Fdkqew5b%2B43oZD5VGRdTaWGvraBTMCToDYyWDPtn594HFYg3cOpVxPzPW6Y04%2FipRFRANy%2FTG1RCEeElIjTbqB7w4j41KfUH8Do6U65bvQE6EdRu26qSr8tcjhErMtXCzG8yWtAGzzdILO9J3yshUnyNbamLXPKUWFJTwu8c2gTam8prgeeyK6vxPAcqQypGApaB%2FC49qStdh4mRByxVZzvOq3l3gWRXAPZY7UmgTQzIO8%2FLUbBWaVFA0KKmB4U28OSshwOEQDCM5enBBjqkASLeA6Df6a0RgaEYrC9Z4rlMORYdl2V7plNtEhaD4G%2FSGJAl8%2BkNyygske7CzvYauRRiCV9nFtpKDyBYZbVHuYOeQrLaaBffcLCAcpSOozlHDTp1hisjrL3MIkBXkxG1Gya2%2BUENdgjNvgf7L651iyMI74QoVax1jYom31HggaEyNIGJCpGzye4PxWggcxwHlycchYe%2Bq4UKmf8YT0%2FFM5NeH%2F6n&X-Amz-Signature=01b08f4c2ae91bf19835cd8258d91e74c1c7b387aaa7b72256617ef0c59f263b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
