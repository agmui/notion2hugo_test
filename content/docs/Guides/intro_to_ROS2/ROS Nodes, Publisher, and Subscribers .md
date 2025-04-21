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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=74ef2027f87330070d5fb97237a28b0eea253ffa7fa2a2b8efe7e3fd03486e78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=5b788bf0036913189992cf3f9287ad00fc702c5f8030a05c1fa4af794c159e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=cdfe249197f1fd5965a8f69d03e091bdd21217c76795306abe36ca2644f0e89f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=066bff0c37d0908702de645266163abce64e6fcd4b5f7198d03884c3f89fc3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=6932a8dba06034fcdc663de2607528c40bc6d59e9755290a84f5eea940ceb726&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=a0a7b47ac74bd5d7fa4b43e876617bc151e7aa27fbde6daa0b25970d65fed327&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=41ea5319fb66107c7cc20b1ae1b20eff576859847c4b7710eb8a7267d7b13124&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEGCCQN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIH1vtxr0HYFBvesEoWtTiXPkAeYip4oizE60wojmReCdAiEAjyWBrvr2qif0QKdw%2B2m01f7deiLw4FA57xcb1TVAtGAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMY%2Fe5ffxmuXJdWrCrcAwXHIieXNPdxHhVh%2FtAMIBmnwA65zFptEZfSUKTopE9lUHd8YmsbY2pNcgaaYJn37u44gukoPlpKRNMXGKcex0wvU9wfx6WguwcH1aFM7zetz6Kwm9loBis6aPF41cskyALmq5LlGpamuurg%2BCtsgD7WRxyTtel%2FzIZcxywSiOm5pQuzL%2BfFK0ApzztImYqUkbcoFOwUvUzC51gjTcyHKroIQDa0D0u7svyFAFB8O1wuo4zhpwN8nVMi%2BrTXytECfTFsXshpS1zFsjht5gaM7OQnkcZboEuuqMSy4RsBc44vMf1ry8%2BGWV3BHfXa564T0S8Vi403zeW%2FKrR%2FdjDG%2FQsvVOmsBO44nxfInISSZFr2XFM4Pg6p2qbqblq%2B2a6jicdaaHtVsadsCavoLANquNtMXOoLDQoOjMWlKtCQ9Fbzh5GeCB0VCdaxMG7%2BdgaNL4XLeFdOxH481y2SzHQLn%2Fk%2B0sZkImL3Sb5Vel9gM0BsXhftCoFoBA%2BpCyzRu5C8vS3URQLwrzoQ0rn%2B6%2FRLtLX2IvAmB3q5n6coVR4co056JbGRULh6HNGJEQ60FQ%2BjNMy0%2F8WRDJZa1bUlpys4vn9Bn31xlvy9qeHDWtu%2BibJqU7l3oGBP7DbGn8uqMMuhmcAGOqUBraO4%2FLG%2BhhsIrWhQq%2Fd6QOV%2F5NzwGYGwj70WAog1XsdYt1c8CSdk3DyNZBLP8zU%2Fy4tfp2wSa813hNiI0i7j0nw3ZGwgbX4XIAmJ7vmQnnriM3g7sI8jym6x09trQ12m58ZlK4pBt%2BchR8cfwN6%2FQqV1g3upfo%2BHDB5VIbfG4nOr5seBtCpupEkWd1npP4XLAMXAiYrLacCYwuBrpNhv9yn78jZA&X-Amz-Signature=ac67af1a20f162a1e554b3bf91545cc9e8d59437c9d69c5dfe834c18f09cd666&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
