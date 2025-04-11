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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=c999a5c9548aae85efda6dfeac9a11b003a007abcf6f9b5de3a29ca973dcbc09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=a2352bc9f5558aaed3d0cb63f38c1f660a21dadbaadc87978c0521d8464a1903&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=785a2f07e4386c7212e3fe6074ddedee4fa079579ca55dcca971a5b6abc7eac1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=45e247be08488faef7379c88698ff53dc2b613aad848b4a8727292902654484d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=1ccdf14f574a215531c3f04c2880a8608992305db4713f79d8ebc2e426aff05a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=9480ebb934ce5cfbd5320ff3509f5e9a56a92605df08d417670ab421d35c0978&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=5e0711654deaa88f375a88ee49bf093768c1fd39fad3a09c4ff11aa9c1f23d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUEAHXEZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZNDqzNnbwt59bcxLO0Zyg04HXgYBHwq6YwGmw%2FfpF2QIgYT2stRhOUlMZiyJIpa2jYw4zE0utLX%2BJF0aVNPPSii4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9EJiQ9VwBJmWpgbircA4WGBsiio8ySyK9W5%2FUETxW9wlYDlG0mWh8T3TIQfE%2FQHy4T6bKTu%2BBs%2BSeGlJr2z4v73GssqsmJhSsslItUqoi5%2BASIz43%2BchPCyEuH6qwWXE6HFXR%2BPdxmPNQ9q6Mq%2B8cTEkHo9eBti4HW%2Bk3kfaBKOL2%2FMAfma3MmVn5RGr4hQBPcJGmW2MohPoteqr5XObhMANRSSMUM8znqntfucUDhzNeM6muFlKGIXFQrzWWcn6PGrc%2BFGreFSVJ81TfDoVG1dcFaUGWJd7PJiKYrU%2FCpSHWQ4CgHMVEFwMrBG%2BpscHcJxv6z8RTckAC3NUp1rAI7lnUOAVoGa6%2Fwy0kaW%2F7JLHNigEaL2LEZSVZor2SD%2BiVVqoAhWOYooMDn7MXFJDSfSv2y%2FgQfZRTxkO4H%2Bk1%2BIuC3BC%2FPGSyp5YxRCkRq1n7ePoBGdU2YTyfwZUnt%2FK%2FWO5raGVnNjXx%2FVgI9%2BBQ6Fjc8WcSFxU7Vq9Ak3iwY2zVDTPqZexPNKXewNZvnb0%2FbLQUHZUvMb7S5Wdch6lsdcWV0pdIZJq464oUjJqfNfLENe29J2a%2BWYb5ShEzlt5qz9DAasyPWyY80LStjYPJVog1oHIOP6th1P67GJ1R27gGf9zWCi1KPNX8tMMec5L8GOqUBoH0CIWsUpaLuFlrIvBL%2FLpiH3n9Q03iW%2BFrQQF5LBWwfH1TnPjvjD8J88BgquLqRtvczuF5px2F3KgT8QOqI9H1Arir56DVULuPA0b29pu8w%2FlH0LNipIg14Kc5gFH4GZWfSnzau31iCbfJ3DWP4nIH4GnLFFN1z3x5jNGKx0WGG9wkbPjVOmNXNIgIflQjP5zYjuE1my5tTslanbngm9HsDMUx8&X-Amz-Signature=6dc4245b4486ddbb4673f0841a1ef2facb094e73293fa1a03f7862ff7ba6e49d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
