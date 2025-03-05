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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=b9d59a8f33b9979ad3bfeb5dcb2c56af08b695d8bfa0295e58056f866cf90686&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=9052ff7de62bd4d8382279dbfcc9dfb0a4de55d94a15209ee82a811651c50570&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=4ea9841bbf6f2e26fb3bdea87362382a86fb9b601497ed9bb6e1bab45e8456bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=a2a9c6b6b496272280edeebb20f5f2c96515d29861b6c1f52901edbd1595fc2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=3c47aca7036e548cef17d5f016341e33a0821a7a07896c805f98d9c3c1b04cae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=0bfd120d2783b9d352c2c6af791b2daa864fdc064ce2a5df93c2b11a1411c17b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=4dea97fcd1bc964b9697d0378dee3d5f7e10b73729c78313e37b02a1f8f50fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72JTPOJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFONkOptT0PPDGzEhkD8qerqhIhZ40zyBtIpGW8KL7XmAiEA26vwpEw67ms932EtiPqkvaMs0rftwr7phSM%2BBH%2BNIqkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKgxgUKcSbOhi8ca7CrcAxk8YxPQ8%2BCSyExYnQvMLVm%2Fi8JlutlY3WLMgH%2BRzO36vZekHzwULV%2FGoX0PpNwzBjFefT%2FEewU2RvX5daUsUkyP5%2FTKtu7DA35VBUHtFACK%2FVFzdLRBPbIjLHecNG0jf%2B%2BC9tL2Td3k4xYGKuDs8OAjBHRH6vErcfk3axUnul6noS4%2BGLkx8VAnFjSlYZ82bOxWWjLr6X%2BknP%2B82vaDE5VbWWsc98Z6ZDPabJnOMhjONKzJOSAJRW%2BvCg0KQ6DRNYF187pjh2Hu5gy5ODCNA9gV%2F9B09tE%2F3uAzYvjCA0wz%2FX3Dhb6tgdjLflqlxiOhbyt51jCPd%2BKPKbztlAYF%2FaQV9Tbd5lClc698S5uqWWOYlHMN6PHKfb%2F42SVKQCTLcvqWoUVHmnykIob3eChlHlF5zrg3d0o3P%2FK3kSQJ0vea4VME9bVcvJ0WpQ4QQHsvsUjxklphUDFyx%2Bvp%2B80NNAfKfNtJPMwaozOxgwSqnVtnLKrPadRHBzFg7qB1f8r2f3vRLAIFk20M1C2bFrtiZ6XAzcV41VHl1V%2FPFMP2emhRcEczUvCh5vmllzvlZeUxzlK%2F4lTOg%2BxLbgFHufqUbgYyIm2xZJNOtmzkOknto7Zko7WNDcDpls14Sv1ZMMODor4GOqUBHFdOYlVHgFV3KSQcAEfanjczK27%2FiFXQuv8NATMvfc7f4HN0yNFH3saz0%2FCfj8FLdK53FcTQQeVdwmj5xqmc1fs6XcvJq%2FIrOQNar%2F%2B%2F5Gnf0thkUiuqKeBDTv%2FtgvIscqOMyKKDNgWC7O5dib294DakS0yJQDOcXhMzA8Rb65R5amq3Blk9npyzftxkOfeYihH91rH4y5d8lTvXR8%2Fn%2FEsmnrXh&X-Amz-Signature=731af7bb095f21372054e91e793d518cd6556dcf62b96bd5680338026f99254c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
