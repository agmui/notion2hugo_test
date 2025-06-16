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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=53e1a7f5513bb0c80c93381787f27719f195129ab741b9d9e9a2a50f32183317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=724b4e1abb1ca4dbacb9a6fe7638f0152f27e9da4710b715f5ebf8b66f45813d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=aa2db0c99a436ad56fa46495e27d7e43df05a87d7a39e5a28fd2aee3d21e785e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=3c098e3c2cb58cd6aa23a672ef68f9d79070af138eb102fd41d670653f1c46f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=71a0517a57e3dfd71180ac2060b0d823aa1e825fbd10c626658cac8df65644dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=f82abbb091d3f4e62fa6f54823c655a9e64b430851be1dd27d55ded584392866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=3fd43f3653811f424467dcc03dc0cbafafc7c7d1d03f3699c6f71c748fbb6434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDQU2RG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqqQv65T6CUJwQoBQxMmyAKRR5orgsZMNuMUa5lzzd%2BAIgcA1P%2FooDcJ%2Bxcw4hC5KXeKAbewFbPA6Jlc3W7qfazREq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJaJtYoybnnYtmwunSrcA%2BRgbS0gPN%2FZndVeXlc%2BMGsUnIMR4l2JesvmOHxla4CRPFnwJK11RTP1Tmqr7zLdhAVE8u8jCmpCrRefm26f9zdSdGo9uliEOR2CE%2BIRT3FhrNVsl50BMS0x6CoOT%2FHpa1ZnsuWVd4YT0xToqc2hEq4tAxu5UDEwgupPK3aiG5%2BWNsrd1y9pq2bz%2FPSjf2dA4vq5voo%2BYm16DK3EcdAjDzL6T0hOSyqC9rS%2FmfCX8QVeakaUH2q732pxm1j1UAIjvalGtPchiUUgHMxcq9igqReWV3Pfjmh5SLqWNRDDs9ggi2YzdtgBNPLy7zsRFBA%2BU5pW07UykCp8ZfBCYcdszs3jKFpUBBYLcr3e3TAvLBiI9e8ojwsmS67D0YYajHKYgx83ASjZ2nSUa3PBSuaTBUFi5g7tmQoiob4fV2dSD9dgVvWd%2BucXFW9YREiLeqwWU9%2B%2FTGFc5l3vmiOqyC2BMySmogVgbks3OQZLw6Dx%2BoqnIewCuEXj2ZL%2BRhKTWmMzqaVECF%2FPKUWusWfDDj0YzNzHyt8D%2BHZST5kmu6%2BFc9zVy%2FelWVaqlTto15GjwS9reaq5qeyG0qYS0CjaIbQSf2wxpWLUxOHjuzjnk%2FUOBxAJeEDGAxQJnEnkiMnnMKq4wsIGOqUBWFFx5OXcpNKRyvrswSIR1Afbhnnc2g6hKZjrJj20QrUb%2BR4xz7oMtD3IidyzcFqIceHYWpHOWpN1u%2BiKSGlXAgZABIVj%2BWFJ%2BgdO9bV5RoenDJnVprtdSH0rAq0%2B3swoLccl27rtp3htYjGs5Sbr3RjtvRrxXqabXVeLoQLkaxRYeuD4hfnLmPyUvNyzFpLjdojOEJaxouVc56BP20%2FoKTphdZqg&X-Amz-Signature=3d5ac0016fd706923fb6867160fbbf94228085df09eb9d59b990b50619f4f723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
