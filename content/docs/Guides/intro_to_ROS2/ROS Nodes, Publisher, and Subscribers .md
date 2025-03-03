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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=66dcb5524b5cb766f3aa43443f5b70d32816de4c7a7910b39e4e0512b9ab685d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=77738f578a421bd52fb9a01dc1773259376677cc7dace337fef43c50fc180bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=8d274bf24c58434d73464497a5db0188df8923301e23727103e36b5442b6108f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=8c5b21a738e683e14e0469390d4836f20906075714e22bc61ec0015fb9e98b70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=7e13eb041cd78756e3f279aae16c45b0bac5e92a3e032d834ba40be8f0608a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=310f35ebbef07370ce94e640424e59d9f338713d80140c3763da4520b1dfb76e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=a46e2a3c90f764bbb349ed12c59c8d633789eb35531e9aa78426bcd15a82c25b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OB2PO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xvPtu7VvGBUv7wlwTLMAjvdRd1Gkylq2BGwLi3hB7AiEAowOiIrwIQsnPHC0F5buWK60WToHEGqzvvTaPenGZ2PYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVYmVvC4OugBG1KdircA9D0zmUJwfzalvd38mY96fBEVKeHTGqqn2XyDooqHS3J%2B9gmYHSMZgdNae4bkEYFwvepeCwGJ1BEEELstelflCiLxoja%2Fp3Qi8m2RdE5Qs2JibnDHTvOiUV7iEU7tRKx4kf71RNPlp9k2gK1qfmcQZHv7rdtAiLlwpljckscbKQu5tTJ81ilJSbKGDzId797qaEVTs6JFSOzi6s4krHus7S2kmIcqSGPNNfl1BycUYE%2Bbh%2Bg3yVap1tCtuXX0xbGCdgTvuQLlJDrbRm6vtC7AgJBzTTWkMkGCKQROyyp4jJ36RAgiD8O44fzJx0dsgMfnOOLNhGrRmbuGN6M5mZZ%2F5I4Fk1NxyYigv9X0DntIh1TgqTpAjzQTqRERFGQbCMEKAsiqTmuLCM4iiLfeBk1tonn4wY%2BQ8ophYdBwjxbPCgccYYnRdb2ZeYj7ecAarsf8DMwv%2B3gn1Fw2%2FtVmOewuoeZDv%2BmDfIIiEAzROOmhSCdK5Qz3mnAT65wkZGEcDe6e1CZnuEJrHsYKwjV1SkPYepEbYh95HAYOeF3bhe6L%2FOiWoVYsukcm9q%2B6HPjugYVW6j77U%2Fl9FzNjlZ3OSgnWYtpnupwJ5LP4qubUJpmxhNA%2BfavLhGEAPASQa4%2BMPuclr4GOqUBLlU74LDWF6fAWsMVnwbgmy7Iom8lzXXBUT%2BAK%2BrASH0QKqOgJ8bY5EYcccTpmyikAPbZXEbN0coBcrghuKr8CnBmmpSCf%2BtZXDrgMkhtRDvsI94uvSxwiX4kh9Wa7nmDCJKg%2B%2FL2Z5JrRHPDZpmym2wcwv5wK5SnL4bSI1OADvQpYo8YoMd3iZJO2JSyz%2F3Hm9DtIr8IMyBWION0DTH5HlHspXug&X-Amz-Signature=aaac154b48708e1f4c6a839f66f13d021c194108588464de7d65a3eca4bb3b59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
