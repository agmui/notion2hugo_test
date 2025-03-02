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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=16213a65155ea813403036468f3d11ed51e36af1318077e6a510070c4f52282f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=3e2593dc580987e0c7d1a67b3368463b2c983592cb6719f82bde8f253720e151&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=4e04c51f70519821d08ebdb69d0f20a1a78daee8ffabe22db29728c169ce47a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=0e61eaab6a883af3d03f67b93cc5f0a53ab0a406e62aeeb7d858effaece05a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=93357e89fcdbad9c593f7c1630dc83137836b34769c0884ecf605f4e4b5e0816&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=f9eed963efdc53e5d10d36872ce748e368881d7d536f1a620c2d2744a12ba5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=dc7bbdeff3a4a0a72bdda78e61067932eab1375cebf2d312fc5dafa6d5c01ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OW72AV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEhqy3CN1A0z%2BRXsonajJBhMUQ7dgkMU0lJ%2FIzqjpLYyAiEAvRbPbXWrQSIRZeSYP%2B%2BKnWQR5cjiACq1ozsIeV9r7U8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYNkHcUxamyT1DPcSrcA7vsOX0ZjD8Tj0duNhkYPV%2Fq1lexCIbu4WB0HDfhBQgUrAt7Wy5TofsBcY56GYbgJXsaFCc2j1eL9kqmK7UHlNBHFbbtauR0J0lOFJVTLvKIfOM1KSOa4ERWcFclqzQkbQp%2BQqsdDLN1f8ucpk%2FLPlq7lvwx6y1kFyDyWeQeLD%2BDn9Lhl6zZ8mDE7cAJeENMAOFrnpj017R8FZcSMDMzE0nOMJtBI%2Ffs7RguzTRJE%2BgCbBT94oVngQSxceIdGjfzZMmjWe2Xx3pK9%2BgP%2BVsqZ%2BLGH7GUmJ8SlawfXEyIjON7cu10Id%2BJeAlDhJzcTSC62CnrwH%2BX9Yyqfo1kdk%2BbJtZi6fChjawusaGlsZE3B03y1WEE3raj8AbeYLeZI9rBECmwE3Y0i%2FKpIMFBwlAyLRVFRy%2FEbNj47Ey00j3JN7dc7fHHuKtbwoC5uWtytMeAKR55JzL3zAqiUAwZWo3o%2Bmgr7L%2BEIFNtkfDlRDqB94CpxCtHLyuQbj9VsVX4IjtHLvm0tJ%2BluuH%2BjyPhI9nlgFnGq4LCNdoqXPy%2BXnWJwY4Oe3P5Dld%2FM%2BSwAt7GrrR8JgCTyMOxMgFlUg%2FZrIprOSgUKmBhvxyckv9Y1wuhJgzl2sHAyKz9N%2BR9bhUFMI%2FYj74GOqUBWwLnPj3x5wREqBIbyVSkyjccT77PR3ED51ns3Jwle1c6NcL9zlcTATVVa7dJ%2FSIK7Nqu%2B6nTBOeDtRTGHx1%2BRt9lsJFVGni9hx3%2BHTBSs3jPTNvgakpBJuYfRukX2dft4lCG68FyebXast6ry5nyZ5wRHRK9jrm6u6ViHVCLtPuOXOkJ2MKkThe%2FANUrqL0lZdI840XVpRmTQwm50idz7Eeurcbv&X-Amz-Signature=c995ea9ea21f92b7004820673b745de9a767c1ec984525c7ca1594747b68e553&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
