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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=e55429031bd9eccc790de1a774cd32f11bf65acdc2dc32c93d58ae377105382c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=93c5c3b7ebfcc86c3755b8541bd1d0b7ef4a47a48a1122251c806eb2ec88a0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=374042988659044ed4593cb0b974df231cf49512e572e74af69bc2e757247b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=bed4e69c9caa9ee7cfbe6e350962d080c7af609c0e1fba4ee4d3e380755969f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=7ce59f507c349cb3919b043003d12c9bb6b8ad1e370b536cf7e0a07b6d7c36ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=39bea29f79af3e64b15e88dbcbebbeb77a13cf5f27f4303956f646d59e6ca17d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=5ac9395136cfa76120784f8fb55aa2ec2793c6d8f6ef820706a400ac6edac8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZYORKNK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICkpQO5tVGzk%2FWV6XJtwoG6xGq9E%2B7sl2Ufwkml9JxcTAiEAgBJIa%2F5lhwRaWiOApP63jbjSCUfcZDXdpx5drK%2BxvX8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMlMQPXea%2FONDylcCrcA0Yu9TQKrcSUiLO4CdjGtyWUdE8lLHqaWL3TNmOgNOYLWDfRl5nZtzAu8RL%2FuU%2BRKpmcmPiCJ%2FA9IAXJBvGHQqvutfMVYfh3KbXteHdk5ejKr9hfDvj14H9gcarb5pY6jJGx9x4SC6mEl8aL6F2z2ObOTexw1lbPp8BeJKTSV5QN652lTmfbN1pCG2V%2F085%2F2hnGzr%2B9S98nwh3emgBnjJxeZM2XOZZTJ4rgV2AaYxjP8YCEp5ThmhgexmPd%2FNXF%2Fe6xoEMFNPJQQo7tlUIMaYClcYYjIC0w2iDE9cT8N6s0rE%2FOT1ZbJTrDvtynd%2FCriqRRg79EsCLjvoOWrq7imNt81udnhbeBcFZcYirvQ9wxyEwVZfLyo%2F3ZYFJ%2FtknsWsnjvVB0f36lth8o%2BwfGh0e77SQddZitA4KXHz4YHeIK6%2F0LL1ld%2FgNo3M0Nq0kZoo9d7Ty7VoDia3mkhJCTDyDjGQCH9kD6NHzi7fZnKNqi2cnUOCifiOPtTTnN52l7UqUDadaWYO9Qzdla03bbTBYbVH7bTiAhtPWNpLN9Cua3S8yVTmqMyGsLJOfkvfiy7rqGvBTL3YR2wDkPjAaemetAir7PEYRHAh0H6wjAGFwH9ILw13tK7l7KEG6%2BMPLZ0cAGOqUBgwS4b9bKj8DXwRhRkevFVOO9j4Vke%2BskiIuQ1OY%2FK5zBqvav0t07ZmEit2PoUFjgDQDlLhzOs2TjFDJs1AKb%2BiIiK0IOK4p6s3nFlVwW1bc9KVlAiCjvdS8jQ5ERQByLUvFB0BLT6fIUM2Iuv3FFPyINxiBS9KkE2Te9%2BwGmEQT5XVWK7ocE801Kr73dz%2FIXrxWs0KlcVxEElHAYO36lSOPNhdBe&X-Amz-Signature=d4b81e5592aed36322688d196642881c3d40e2415e0dc5d089894f91a63001df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
