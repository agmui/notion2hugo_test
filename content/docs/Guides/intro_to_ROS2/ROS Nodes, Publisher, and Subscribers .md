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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=97d4d167f2e2457f5cda858f1284d8fccf06f6da3d0ff24a49e1b1e84c47ab21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=d35c1c6773ac08d3f5a24a601346f942e2a664feb894516f0050083a1b4df54a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=f65d2b47395331bfa002a4990375a6928180763a8beb7bc6aea6a857722de7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=bf6bbd15b06ca6d491ba1094df5a575794766215c90d76d2c1f09ec0b824d2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=a45396ea88951c55a3266b334ad6b77eef5d844348270035475f7ba0fa84c444&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=6b0730636e7f4a041cd6936ce8d143ae8fe854387a77d59b4fc44af05398c1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=cf8ed07cf500f01b40cd23abfe102c10fbd550bc694be71220ecb85406b08452&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRSEYDX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAy%2FF8aRlY0D%2F63pOMYhUByS991UOsDjhCJexQyUlGmgIgDRk7laM9Tw4D46WzAAcDQ9jCxrExl5MUt1pA1yFl%2BSwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbXQA0Ss1XP%2F18BSrcA5wyJHdmGax1OV9qH1s%2F2%2Bridi%2BnEWOvoxLteWz2oxOgtz%2BOt%2F8pFRJjblDUclTCoqaKos0NHYvip%2BeIQZpG0TBRJmSUFvZzJTxA4pH0ZOg9bRl3IF98Uqox2nhRFhz9X7cQggsxaCk6ezIc4jIdOzpNrBdyogu2tJTB3NH4YX4DAa5Ym4OAJVTkevtyktIBPfyBjoNRyMrHexeOiNYq9cgEhB5GSwRuT%2FtbE0QR9gOKz4koX8%2FiM14PIaA5uScGXEqFzYe4m92hte0FvXpDaOiTxAizRea2y4ykH6fpWgc4LAAJAhSu9J18qdNYJapt429oancSnzGrEz0BUnNN8W9UE%2BbdB1GtzrB77FKIt6Ibqcbv7AES4N9UUJuxgP9uSNs3do5kaJesQHtHib0Y6aiZRCrhaWcrMhf81kW8Fxwjbzv7uSCvaKtjuG%2FiklhTpidRAxUNXJwzoBSwibGKOWpTVTW1ajHEMHhsHWnwiruXmXlFnXorg3QKgSu73h7uktmiJVDsDyHT7zqsWgOBQfTUxLrD%2FwzP541%2B2A3cgQqWNnKNGUwrkOPww1%2Fsc56F2sRSxXvux01B%2Bd0DmCskPIHDgchU41QYqJNvnIHIyCPUs1wOlS9Z%2BH117EKEMKiA6LwGOqUB3M0LyWay%2B0hSp47sVWzhrXOsSxMeajzYa1beriRP0VkhH7ev1I4uCPiGTE%2BedUFrT7pv29r04MCEB45xgPinivV%2BNvi0rULtJ93FslweRGhHqRlnIlhKWrSZR%2FdQyI7X3XGwC4j%2BcODuxO3LZrL36FgekDS2BXpAtKl5lnWnRPfhUJcGfAstqEJbs27iI07PC%2FkULNxtGt02F17DuDnwYA1cP26O&X-Amz-Signature=70f76babfb546b3a1b81c6ce909d058bb5cb7c40d9a71dd1b63da28187019805&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
