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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=1475781ffde8f4f978925d2592d592e90000a0b8b94ebf565c60352d48c4e078&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=197b14f1abf9d68c1293b91d4cb799c5aaa96880a8e3c7910309ccbaaa0b22c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=6189a052670dec0b7623182aeece63bc424f054ccb801bbf3a2c928af99ae7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=110413677d1d43284fe29c7b8a6d5fadb2875624a555cb25bf8ca6f9b7d7dc31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=404412118eedb1cc060e166efa50ebbea0c79e4ae10c623df1346153792a16de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=4d97ffc1d8049ed4ccd0e86629d26a713c05f8cec44cdba4b81bb317de2bb9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=4ddf4dc1c315608bf7021a16827c6227edf7dd2983da2e659dc344ed521b8cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2G5JZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8cVEQPVDhBbR%2Bib6RHnV7TBSmtEaPKHYApfA7ydpGOAiEA02ksSK6qOheLgiimelszKUUcE5QBPnq9tLMtVm8Hiuwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCk7U0LXqz2GL8GqaSrcAzit5CPDqyDZ1JEsi5LDjflwYvgzxvq10CxO0XMF37ygbZP8hvTKqewgcXIO33gTK8cQ3yZp376u%2FWTZNHsbqPuijQqVj%2FNRr6LAIh4WoVmJTmUCpCyxAFtYObfN7zc%2BoLDn7j2QhqNM%2FKuRbbnaiHdUrRnB7EsQCAkkf%2FUsowj7Lz1n1FGszKaCRgo5PU4V2VQMoMUYrw0mxd35O0y7vHuG47sJdjcSvw4a%2FS9PFpRDgtu1G7YY0Yf%2FPiUu96U4c3Rfp1XYUWd6uV3QjuYJuZaj30HG1FwtlcC350HnXGY6A6Ssx7gOpGSt%2BmFc3ShFRtd1DiBWk7hJXazjgNw9od%2F8jHhHdjuawZyVp4B4R4T1gAxk3nNc5fzg9wCbS%2BWS3fukHKOIWOk84aJQt%2BEmXYC0zEPgZx3QP3xXD2YoGkyqUG3KN55NKzfUxRbb6XIWguwbcwqxp7LKoVrypsiU79zElLMyGQd4eGQDEoZDVIYEqsvsoBcUpFYeeOrwM%2BLng%2BGXKR%2F4SLW0f3uY1GqNqJcDuAMDPjORfQWKzvQBY5JiBhDPUpl1%2F3dY5HlhPMxTvwacU4kzotbr%2BEBhHfVJd7niuAfgWzVqLiHx0JI2daIvi4oKqtIEkDCHSOc5MOCd3b4GOqUBWhezvHsD740JP94aNS4cezMPY%2FhEr%2FoQqjWPG%2B2B6sRr0e1Yjqwhp7ygMi4o00Ln7lBzNGdiuf701ExQHjV2BPaV8%2BAOZC0zeVze%2FaPhSrlSBKcOkHfW9SnZnin4bHXDfFG3HlT1bksK27JhGYo94BI%2F7NnyK6lQasAI5vN2nvKZn6APxdHWu5ciqIzdFbKHivGKJnTQ9tbuXjWlmXyUa0HEMkC%2F&X-Amz-Signature=5209380e5f61dbfbb0ed23ad7d892e6e2cdde9982489da2d9ee62e7431824bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
