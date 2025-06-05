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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=f9e0a7e90e56e7f17fea15f731af24eafd54f9ef2d16ab31a18f12c19379619e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=e4c7fbe615d6e24cbc5acb2b9a5691576787a37773e30e43a5885e17856eed26&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=6bc531c08b9a853db86802f3c709ddfcac65aa1d5d727aae6364c26ab271abfc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=daf4a2a2126bdca73abf7bdec81ea91fede176fbbe755cc99e31af8ab69ca8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=102ec32fd0cac60418b53b8f07763b6a8e6700380af4014da331a16f3ae8cadb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=7284c2ee61f3b9480d92e19d7da2d7759aa58cd479a4d221732d116cf38eae56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=2e6f27fb39f17691263d6edb028bf6bf01623b21f4a6927d5b53ae53ad45062a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XJXTCQE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDG%2Bs%2F9fKpKJXwLeg64bWxPUHn236gMjhEQWqb9DU4Q1gIgX8ytLz2NcZ1XauiWyvTUgO5q7PMbdg56eCoHPX8cpqkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDC3lH1Ka30ZOF826LyrcA013tsvwOe4b%2FRyqIO1mTPmBm26e23fU79rxlsfZvnD%2FSNIykqTEOf2ScWZBKOr5utoIWX7vBAiL7uMCFVpc47skpOdp4EuDE6vwRi6P0Oy18aWgkxpMKoQ8yYZuIMyP2IeBL1WRFITTpMZrp0BCcswJLylfAfKhMWqfVWbOXVabupghGKNEXfUCWACmi5StE6qSHowjDyuNOYc4m%2F%2Fxw4%2BnaAO3gjXeNAa3Djz0uZKCDPCSucOUyJ8ViyoCTkCrsCd4W2gnopOrJqlw58lumQm6s5CFIKRKWr2QvgCWXlI%2BWPs1z%2FW0AwYOj%2FrxcFXiuk0%2FypWpPRT1Gd44XncFnVn%2BPH2uFhbbuXcbiDpsJ%2Bg5MqTLelKPbwlIFXMTvpOg0QtujaYJH1%2BOGEASINnfJED3%2BoDxn4tBm5a%2F4pKstgRQflXqGovlCuXocKQTkNdpoVn9%2BRYkzmwqXho269gtPT3X1ysSyKW1rwvlDeVsr9FcwYPajjXv03u6BXxbnS%2FxnF3i0DxbJnBGnUR6P51nya6uNrS5FB1RRSbtKcXQrb9PTuyS9Zt5ARHiFSrka4ulQV1YlYKrWUCPi5q7GAMdBfVqGjqutmlYi4e5xvEuykAarQMXeNrdLICZhyWfML%2FnhsIGOqUBBE7QMtiJpTjhSTEuVx4l%2BXwRdjgHr1cRkf5BkqO4EnRAlbakPODBeyXALqJxVIfD6P4BXbkOqnHBrm%2F77iQ8bk%2BHPAIwNYUOzjVoQGfBDqd7v4Yjo9paC054ElrS%2BE3%2FGeiUNavCZX0STY2%2BWFWhJabxoVSFxlW97nds1wdOEcvCUlVcnabjkQISMFVCbNMPS2%2B2DNlrs2lj1D4o96rAhGkKnH5z&X-Amz-Signature=02784fd4f3de6f7df3b4960bd8e7511051e77bd114c9a6a3bbabe8c21c9ffe8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
