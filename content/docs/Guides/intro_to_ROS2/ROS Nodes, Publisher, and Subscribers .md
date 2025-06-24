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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=473dc6a2648a6491de50ee3d1068eba1b3ca929e49ba76d1dbccd912fa47b5be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=899e17927018c991a02026e8afa412e0da18176b8bd8ed8108df27f421b3d738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=5275f8c6c232b61169c2fe397df38a8c9e10610b151db5abb585def1f9fbf053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=f56d12b9267857529e9a724f136517097681670f9647d67ec42fb3333697aa90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=81b17e79cf977bfd907b6764a8538fa5e28f0c4f61ab31bae6a314fd9b0e489f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=c8e7918f829121c33c166d9e51548c5b685102e6624d4bcc5e9f8465989b2064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=98e6ee4b2e2c0d961f9de6dd6b7392f5a0448b47f82b38ab6a007bc1f1dbc598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGIDL5AG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCKhl9QwWhPZ63IqT1DfIK%2Fa8Nl%2BAA6EIBE5GEs0mUySgIgTwjn4G%2BBDpAZRXrjjf4xYmSk3SqIkhTScO3XibDysMMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFiua5AOseZCxMGc7CrcA9El3E%2B4JJ0iZ2HFARp%2BA899hn5AiUCoEMjPvd%2FYitpSHmsccgVnXvbqfg65O30gY%2Bu%2FWAsOFIG11QBIZzqZHqF78vumAhkWHO9jfUJr4%2Blh8OiTTTN63ZkWZ5TI2xKgMQjOZoYQ9xJc%2B44Z270iR4Oe0ronhXbJGeIl3ic5KbjMndKHSVod8VRPn%2FHJtusJkrDKjHfqjd65DdrpsWZ2BlrjpTby9Dm2POWsp9n2sFCMgGPFdIaVG50tCs%2BL0JLIh3NDkFxp4Aze0wyACJkR8Zh%2BrBHrprMohZ1xjC9F7Lw5yjiiKyr0b%2F9prFy54Tg0O1a6ZDc1e%2BpiKFDeLPibwuoRQgYk%2B%2FSQ1UHTPXyzxmymNrfOOFUaJsiapEVOL4Wi1%2FeIwGI6cCP5392MkUZ0w8GthRzF9ogm03Ae0QW%2F6g%2FgS8FJh1%2FY9oY4XDHNKjNHh8kneO4DieOfKvpAlXv4RKTNXUbxzljIWT5q3GkgYBWstOf2t6SeyOoplYPjABMhZw%2B5DJDqp1T9C%2BJ92TWTTP5f9FFdS8FwjSCHXcsUO1WeRj6Crce3cvZfINeqkCNXqxDBmzblWV1wdCnW5GFNYrFfCFydad7d2ARUT7UPFiL8gmJoQMhY22mB7%2BXvMP%2BL7MIGOqUBbavX5%2BYboojoc1Zhr9TKEzZGAesSRTJe4R0ERb6knmSLJNPnBi5fsPOhzKKeYE7uiYSWCb%2FxzJ5AmwFuvRPvJwEQZ13P8vQKwVoFg4Y%2FoVs85I8JnRIlCUBmrQta1PiPLz82ynVF0PpsvZzrzRrtK8zsvcJA8RId2zDgaPkK3DCU1c0mSZd8eqDL4Brf54kRPgbjUDYp5GHxE%2Fxb4ClDymhgJA%2B9&X-Amz-Signature=2cfb1edee950e1c53e10b652f0b6d1d153ba38a2e68ed713ec842a4069eaa2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
