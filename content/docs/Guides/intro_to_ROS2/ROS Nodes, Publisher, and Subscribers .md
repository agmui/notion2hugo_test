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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=73fa60e420b2efc27a0faaecdd1e16cf45ebd79f00782376242974fc719ece82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=3938caa2bfc35b24c82fb25c462b891f6e4f857954246d1d1b951ba94f07dd3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=78fa93dd8c7d50ae3685820aba6cf2199541c6bcd2eeb9c11a7179c3c60258a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=d61ed15c4ff9e6b126786dbe82a347ce5ed2951292cb7b045f601812bb8dc8ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=dde982ce8879a44ee43480ffd811b45271eec5eaf1b498364b23f4f2680e6503&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=eeb17df71416045b51fc3c5b7503dc08ba90a570dbc2cabe900905c261aa9b74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=c06c189f1d6bf449d1f0f9a584237a24ef5edbfcf35739de57092a5d265bdd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF3TDDQS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7ewyO3U8wCaG7uJQt3WyTPrVeacPu3W04e93CGt9coAiAxcmj5Ew8VdUf3ZwHiDpNEwy2B8fJZgKgS0xr%2BDIwGQCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZ9tJGHmBN34GSp27KtwDZSCOpazwWLhHlJ3w6YD68bQUUWg3WTBDMe6axXdGjLB7DX0hAtZoH1KiqBhVmtT6%2FXhonn1E2XSuWjM8bWPmeZhfldaG4RW3hvemaTQRMivyNZuorTT0CO2TT7lwL1RdeVgQh4O2gebAnsVxSkh7wF0KkCW2Tio7Udr0HP9v%2B2uIs5L3C5jxmVvuEnIvaRwJjh94KhqT2iWHx70AOLe0AaljC5aej4%2FeGjG0M8nN7weYQKrIO12BjDPOWyYLmTIZJQdRu4FBTk9rG%2FEkt%2FCzROekgFKcm3SCjSEcVep8P0joQAwfLBBbY1k5fmk8tDNJgm37AQZuWt1macQLDdGVUtYpbcvG%2B1iSPkN6ofzWNqB2TldzVcVn02N9Ws27dKOCVNKhZSDYxmODkIOpK8ktNX7Ytgj8doLLdvyrbLR%2F%2Fjr99Zu05ZjjwU5xe0pWQ41d%2BStFF%2BtPyTQFIKHjwA8qBBfsCB97g41PXqFSuM7tAyFHHL%2BZnY8zqTPa450mR2huHKkzuzgiFCIZVOLpsnJ3k8c4%2BQz4er9358mV8XfbSbiE%2FcWuAUEqShnLu8%2BwI25b1G4KM5CLZLrVng91i%2F9GGXfWqVHaHxCQVs33R%2FEt9DMBoHTh4QlxDWodC9swws%2FhwAY6pgEZrfPAOHJILN4utJ6HdEUuE9JJkOULBjepiNndussuooYDSL%2BSQgdsOrWKGx%2BxnHCKukC3pEvR%2ByOxDSdfqOufxd0Zhe15JGMbTdwG15KnNa9gNk6Ofuw%2FAnFijA%2B19Aj%2FVuCowDt9RxWqENfsYX2pdEpwSF96JfZ0gge8xa2zkwWQ8MM7QDr%2F8Yvh3sdkgU1mR4YWeA8GGbtE64y%2FNe9vcvC5q7X9&X-Amz-Signature=f6ba2a16b020576c92641853fc7571969c2d73fd0374fc93dabb1c480e07d670&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
