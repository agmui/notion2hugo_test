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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=4da527bba52fc0329042740917525abe33775debf2ce86eece5ea728520f73af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=b9eb2067d39d8d8056b7c0363ebba392aa598052c563b3a73936a4375da9cade&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=dae20bae3f80b2233f5ea4e34705de6c4436d4652a882052da9142586faf0137&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=2bd9cac5b59de106b45ce7a080f5eb129b45fa7a0f8a30a59978314e4991d574&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=5e261aa365b183848a8b063fe8ceeafaef036e3db05bfe871e3206f312f7336c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=42f473c29c0169eee432d583ef37b40f7214b9c22cf8b781ba2e273b3831fc25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=718e0bd5ed517e61c3935cdcd8ff2480f965f46d97531dcaead0b0e3e57cfb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA6WYTWV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BpqARGBxvCYvy%2B%2FY3d6QfMqA3x2kmHamNTVvhqjs0AIgS2FwZvlewe%2BOlusTJARNCkPiKzCl0tOpc%2Fmr4lUvz8Qq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBHRj1thjMXcb%2F0nWyrcAyp3nLvwhzTR1F%2FQ0n7Enrxv79m5fSG3qIQqo3WxO4y6IcGgCr1lRtDLxGMqoPCvy52nPHT41x2xKuSzRaTVuw13ezJgd6NyVE9em%2FPajURDp5u01DtU2Ww9Tn2WGrKy5RzADgFr8rRrcCEBr1BYdbtnZezdDoXXHpVoeqGbv%2B2lkk5P2%2BgjrlAEgMSUBhjJPJRXbbu955RAAMIm8fOtk7T4g2rA1iYPHf5B1HEGTTVgmQUHEYumR%2BWvndwlRfpbyewffacQubLye0epjEYjfYg6CwqXqHQ4OJ0RyItD1OVXlmyK0NMPoj85I3rYxNAgRH2AkisVFRbK1M1o%2BeS5qlhhGHkMGHp9687GWa6bNsfnoCYZG5Pjqqy3KPaFpZWciW%2F3FF4R9lc%2F9IyaRhzLlpuwaRFn%2Bl%2BCJY7Fn7oqTVn6Ufq4IiaVG7uMttobwPmjOCMTK%2F5Gc5h7ITL19NYNTMBwi0OW4fsfcuCwodaKmePBe0QC6rUrYaxde%2BooIs8EdXoz97%2BhDFEdP8JjKNOow3HJ0cx%2B62FQ0nujoh9cPSYZWi85o%2FvJGEfq%2BaFbBJDcLNvBVxxnNzHhGdM7V7rOO6uIKbKwcTyQLwChKRvZyQxCPEJ9uE9Rwj1w7yn8MKqT2r4GOqUB8dGSiijteTHvgcYo4jN4NdsLRrPD9UzuVOg4CMZUa4tE942tjQHJi50fCcw1kxVa9YGOeaNCPeoUFwnjeYxHiIkC46wIOqhz9gqgv9GVV0eiq2MYHKSNcwLbYNlw%2FwFLXqI1iHWoiWEpwpVG85c9U4laEP0G5DMrCQVfiXZ2mEMs82YLTDsClFig7HSs51joWI4xfeZY%2B%2BiLjs4WdEEtvgbrROqO&X-Amz-Signature=cbb3c3a19fc6b969a28d8827a169fc907973dfc441c68576a158b4ce66a788ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
