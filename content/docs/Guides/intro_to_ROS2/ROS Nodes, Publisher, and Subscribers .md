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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=13b12ce9c127faace71c1ac960a77012b7f6955b07b6ce6a26e5025b7b89b06b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=af2e9eb820ef93583984454423f6b365fb3d2d873c03926ad265ad659c0190ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=199f292bb48fc854d1855816a78662ec9b4dd19885058d750dab22653dad1ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=2786d1c86f3fe6c87cfacb73a6401d3fb169d659c82c0a53cf9807fa67afb531&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=4606166daf4a907d9037baeac95de9f79b6862d8ad25a6dbe518f4a27c0b6afd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=6bd7eb1b87be18f93310f724125a78e08c6869d0eb67f62fd1a9c003c24c935d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=bb89473bf7b93f8e9573bdfea543bdc0ed634a5e8ef7afb7d77d874511ac5a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFSEQGSU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCvSDrfDq4Qt96264IMeKSxysAkh4IWRBHEEYDYxa%2FJsAIhAL%2B9r%2B3Uo6EFRYaMLiDlXQWN62QALjZfXkd9PJO7ApScKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwnPbFGFYS2WXEgq3APm6xhEvf8Mv%2Bb1KHGJEvet0jIc%2BwRrZbcJj62NADtkML4nuyFIYCZoV5W185LfdiLbC4quzE4wzEMxAAeNzXJcefjsODGK%2Fcf4W5K56e9syMQRISpm2FQN6m94e%2FPV8MnJanJky5u3jUo%2FhTP45TNeP4cOvmMs874U9t3XbMwW73bVTmMaznpzI6LtcymgXcmaVO2uW39ajZOlngZuYtSZ2TzCbDid%2FDLV0IuAZZXC9g28SB3CbdEditVfzkF95ha6CMdnawx2AP0n%2F%2FSjFLDitYwcyUhJBjHGe6V7oNKh7OeKAlL59BiGPZF6QefQ2x28nE4ZbTvZQYqJskvxD8gVEZ3BXYQ0npXqAUFB2%2FcVhbOhB2UklCCpwDS1djeImOYTs%2BA7cw%2FNWepLcdFNJ%2BzVrjcoZeo%2FQyu%2F7JbPLDc5Tiv2nXsyEz8sOfdeFeTtxAHOFMnwAScPbp3Psle530koLsAbOj9Nq1DXN1j0FR3Lb8wcHvyJ2yR21bgaS5waEzyFC1RGwbQh5lYkPWgLjPfDxcG6wgo6aj8ubab%2FxcKq0JrJpHNMBhvqQARgcLUccOPFRfDlgG0Fjuc82TOv0eftB%2F9PvYp%2BGJs00Cw5BEn1cV%2FogUPFfqvW1JNPqTD60cK%2BBjqkAY7dVRdXyCi2OMZg0xh%2BG7Aw%2BSIroNrNNinKmi5wDzrDKoSEByXrs1tqUlIz6OpO2sO0dLuv2A1RJIWtvGrCI5JrUeHnB6sP7Fobh4jI%2F02YvS4Y4T0VKQ6KXsaik0vhp02pbasm%2BiovqMa5w3cDGVCzAfYEXrwmYMDqP1%2FnzIJu1tO36BzDwb0yDDBmRS6iQCLw%2BRqxY5h02x2MR5jxbLjdEHtm&X-Amz-Signature=4755e59889c5fa7978acafeb98ee36c54be471c34ea7dc585141e236e4ef9635&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
