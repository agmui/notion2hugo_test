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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=d979b5aa48d56485beef8f2bc8f9e3a2ac926255a7e924081965f651cb255ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=9b08400a822707e90dec5919ae9fdd3410b7456f20bd578aeb25ed038d125fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=21cc58987d53a4d034fa43ed0b4614cc17629a1b2e2486013bf158360ef113f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=0bfeb47aff2d25bf4c4e7c68746576e9969220eeb60f0e606099300292d38128&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=e0811480e013d213ea08cd4a7bb4483d0eeffafff518560c90d676b9659d7352&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=a7f6343a27465769afc608c83c2165d36f56b1faec37b4849c0c37ea79c7a310&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=b1126060755ba53e28526c1adf2cd3b7d389aea236481b27dde75106d483e0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUSJBAE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY4p%2BuwfgUJlsiaZxANA2o6oDSOgc85V6DZychswJWEAIhANHfdJU%2BGohRSRPFUJKsgRE17jCp9iy0TqfHJ9rfzuhgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmeQuIM6wKkGl2rvoq3APvJJuIb1nMm%2FQjQGhYCXxtLA%2FjxsJEvfisnyhSCW2enh0rde2Ms58UbeDmoAV%2BIYwDddjrBX5VVGDkzAth8fdVHncQ8eJ3OB3fY17usgH%2FziITMXntEDkK9tcazkeuAV0rAWT2tlzt5lmMXwrQAQ9IddyPNMQJ8%2FWDxb7xWvaQYjr077jK0EEtKTUHvUdz6ghNQ9OHD8aB5w5SR7Wjc35mXszZO7Vt8pf6JsYW%2FVJoGjWJVvq9%2B5AdINaBwWcr%2FAF%2BmZ8W1%2FRW6g%2BAi4RSlm0JZMn4KkP2MDVDIskagrmbFGm3RAKl7ieuC2fdf3c2Jro2TcdfbIBZ1WuXuhTS%2F2ubHFpmk0p4DVpM6XD37Y53sCKTdpEO%2B8rlGZK%2B16jVC9Y5RzIsgnoPA8CafHP0oEo1UIMqHXzW8EO4bzLW8%2B%2BB6i40%2FvGK46f3h0Jzi%2BtdgjTZY0Mh2C3eHwpHYLGU1QtbeRR3EM5ehhlNTSFUA9BK%2Fe7BD536MMI3uZeQUOXUIy6XFt3PzBhCB%2Fo1fMIYMdRaNfsK6YdAahB8AhFu3SYuH6JAZ%2F5M0GXeRZ%2FVBbcQ1yE7XgcIbGyhI3bM2R6mWyR0KV4VYsqLS4gb1joLEmAid7lNpt9V7DXNoqWoFzC7r7K9BjqkAYd1GIkHfaYQMSLRzouLI7In%2F3KJeKWN1Jdfzr4ZN1YDf5aZZKEx2lIMGOOQxcK9cfoETJ40vp9I6XCH3YGKj4MtlFSY0wYEFtsIYoiy78VcpcrdSMdrUXonuPg3mgid%2Ba9ooUQh5yZEDnOpvcVg79RLYK1qw92PCMNuHMRK%2BTsT8vgldsiVvbjDuTZZW5U4koexfAQkUt2iLWwo1Bjy3C5qlqv8&X-Amz-Signature=766cd3e8fe9875f26f07904addb8443d2c624417a38e1c1956e3ae2d66daf00b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
