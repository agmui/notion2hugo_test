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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=d2e60c1d0794cdc5f4c7a2430327778efa3cd86af191697b9833accd759ecd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=37f12ff28f0b4c9e1485a0d82b4fd534a97562c76bd1c32f6b00f3ddc48612bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=c9c2300e376eb761ccd2b4ad0339388b8b55225fc37c50c52d51d84116eae548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=0f7ec07f10a922e3dc6528a3a73ac3873c5342b7207de31faa05cfd6437d1fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=7f8255cc1ccef0c8fc40760dfe29ed319ba96d2e798d4a437d4772bdea2d5f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=a640d509ed1f7c3016ac61eee16c9876491f5751d4cce94c947fa6ff9816c359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=a198831cb032a056fd99f9a633c056917869bd7491f3a922c30d14831d8788ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUQAAAK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC2mKnzY14IMHpHhe4GWUMHMCpmc5pMmkqFP1Yip%2FjEbwIgdOeh7AyrTOebo%2FnEjUod33LrGfD3vPEX6IQEVZxvXs4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI18PnSJxNAIBaSMOircA8eubGC%2FrnWy0eokrRfkAJ4t3DZCBCnhorESs432rDTc%2B%2BoRXNZbBiTODVM5PagK2KGnNiXQwht2jOoONtcVhcrRdT8TJ%2Fnjx9WhgPynaVnZxLN2DBzzdOtq%2FG%2FAOLM5l0HQxCb2nWbG7lSEJPerPh%2FcrrR4fNUOYlmceaKHWpaZSYNyctqj23Q32aHlZ6dwEIBPkJ5jFrZD1ZItaVDxJTPK%2BM6gl%2FRhuVIzQSWGjXZbA2T6q2RmQtcWeKHlSZlJuGkv65Nau%2BXTZeGgTHF6XV2N7YMTTRFSNYiQoIpxcCAWgCSMJa0BY5GdokofK9hSiagVP6ofN%2FX5HJv2BBbx6HT2nDmjfJ7CWCmUbVY7TDdvEaXp85meBdNeu3PztTRQiO7lXYMkKngFhrk2lWenWci2sfHztPtbDWs51mJHJPWvNeGVWUJlLBUwoImgw%2BVOE5W%2FStE9bH7JMpQmO6kkkmthbPnS7D5yKCb979Su%2B2LQEVPq0Xu7btEFuVF8TWGpoq084QxUfbKbbFUcO01pLT%2BpzqUfe35h8SdHMicYA%2B1FPYmdsBoMLKr1XvNh8j1XYaZ2vZVlpDnMPmHVvtlBDWf92B5aMv3p7LaQrORp1avOAHvjhjt%2B1HEw2WEAMLbh8MIGOqUBBoOa902SP1A5VvwH2O2Zvl%2BPQJoPkWdKd22AB33OA2TJuNU72L3STBHdk971h4LlxQ8ozLTmzsYSKdcKByunJf97WKJsWGv%2FUBorsCs8WBvnKCHkI4ez5FFux4CAdqtF0mzZmMt2j10RJw10fOXV2JuiePzBv%2Bfa4Gq8JbTCoZ3YGbkB24BX%2FlO7ojfQrcRHZ92CrGCUwr%2BVgE4r7yNj1tGu992p&X-Amz-Signature=a0f687e86ee78ffed5c46930a76661e49292583f4a1cbf32a03d66adc6c7f321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
