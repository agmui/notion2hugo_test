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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=a16dc21024758a0ffd58d21a3687bb4aaaa513bddcfc250f02f1bb76b543cee4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=41eba1c44e036821b7ed21564a544f6dfd2c08dceed3680977768c730d9a892d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=ad146674dde10b7ed2598c734c8dbcb51e20780caed0a4d87e298bd13367d3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=6eb15abb680cbd9fdac897a0b44e3147a8f187428219db0314b7f4b0e359f906&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=63f088d17849a9e6184b05d0a5f02329e50af62c2283d3e4c0062fad303b3d32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=7c1bcdf42df7991f2dc552ab597973ccd3eaca1fccff49540f4f5c1fb4db6f23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=5e84bbd0f57f416377b7fe2aea137be328b9058ba09e65f2e7e93c93a787641d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBH2W5R%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMmsUGlEDN%2BObqn4QrESKJAUmzYC9rqSs%2FBULwE%2BRu5AiEAtnz0HWOj947ma103Kol3oj1neBqyJ151gisOIKZv2%2FQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDH0PtUlCa5qbu4UoWCrcA5Y1bH1oBpBBqZS%2FSp%2B96i8ExDK3KPyVMOUU1hBENlsfnuMhjwe99lJfETNW0fHVe7ocQrFO1NWguWlEKY%2F2BiLvg4Z9GQpUvOeqF7xzFmSoiSDpGSdRXrWCevUGgT5915ZuZEVc49MmJ9o%2BmAjMoOu618GhQnytjqrwl0DbTDn3fdpbIkXfZ1OWJVwnBf3jctgzQowJflbUPgnQFdd6qSDfLc6Y2BpeCRYMBI5wNm%2Bk624N%2BOfyuGj%2FYDDPp8YnnRG5CVjFmEkHd46AWaznaOh21%2FA%2FNYy91kkLFf1NM%2BqW%2FsKP36o6Ka5P7prUqJeAvJdVTr3BuhG857e6qYqOTtBOH2l%2FQhIdAnV0SLvhXKplaBb8Vfdzkksrn1ZMsvrx4o1OPshLDrPGITcmLcqJODvijfFJeb51o1ZdpNNCl2hs6TQaHGUFCPsxmd0PwJsFxBhGCeQ%2BDUglgWJHAuj9TM8gbXT0VX0VqAgEoe1Aw7qwkcAXoTVfdn7qzABLtqZb41iP1MyuuBcmnE9nB3s239x5QvXEYvsf2SYNUh4U9OYUlVIwV7GnSc3oSzfL80QRSdVVHbPK9BKw3%2F16AqM7ER%2Baxs0pxImrrij%2Bo7M6vNM4JKvhui670yNFYrj4MPGhjMIGOqUBwFYEtHP2ZVQjYnMLFN6k44N1mpYPaJBZajcHden9Z%2BJ523ZpKfGN%2FrCwGgzmNriTUhcREgTnJReqW1FvOOcH3lhb3%2FEqwn7N4DJWSHQsXfSZz2Qpg662Y%2Fn%2FAIG%2BZBVXsV9UZBsosMdX0h6h%2B6ThO4AL%2F5r9pa5zXDL4Kd0Be%2FMlcNiPwwIejO1oYkkpbOBeKNq730PNUze0S%2FhjsuemzQuyxaGQ&X-Amz-Signature=2a411417d168eb87c05107319542797b3864394be7fe3cd517a755310d9b14c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
