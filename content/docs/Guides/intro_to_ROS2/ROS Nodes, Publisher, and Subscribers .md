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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=419ea1326c302bdb994cda7d814a0b448e1e0bb50de5fcaca1938b0a8d62e82a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=cbf86e647d09d990439e7ce3aac78766433d6b4c8c5d76a7d30739d39a66f4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=8df01f7c7cc09f4ed208899ca6983bc1f46baf4160af5315f1e741c48c6b4517&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=605c4da47fb557c052a5f82dd7e312203dbac14702b4e8f15c7db56e08e7a1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=6c9d830b3037648846a726c8b9cacf96d0e4e8f4440bfe1d210815dd999cf4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=e3f625ef938c3d03b1b0c7e2118f6ae7ae6722bfb6ad04a7f503b52610777c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=f6a6e4a9e5704a4505c77ac78744ff9fb768509412eea0dbd5eba5ea2aa13dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2MCDUVR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2GGmG6z2y7v5RQbsdkwGrJ40oEt28tb6NxNr9TaR%2B%2FgIgfUAQPi%2FJRLFgcphb%2Bwh1Hv4GEpN389PtpP6Wy7jRXOoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6kde88YwQOcQcXMyrcAy5oz3GHyROsBvnwP9YlF5RhGx9hxQcYIBzwQwBNFwo9BfJmoSv7hzD3SL0rFRrm15bpKj6AkFewK%2FLTBTbACohUDDsbRdDcM%2BpESUEEnvV0YQHCZqdiiV40oXgOkFyIilw95OxsnLTG9jVxaRYrRmPFhRUjgGRQco8JzSeahk5cBBqn%2BwFjvsAsDTvvDA9k6jmSASrbO3hqYj2GdB6YUD8BpvxOYW39BnI39wdY77uzvBq2Hs6tcgUt33%2Fj2VjuflgKzpA0JasgJ785F1TV686C31OhdAH5AoopxBBNnwxVtCW5Ibf9hoSuWvyHbk5eXEq%2Ftfp53UpwqiM%2Bau53PgINjF7AKSeGxboZosxwVrjZM2WowsurQPMNythNYebZUIfeiC%2BCHMHPdi7kSq5Wzc3V3FddHPW4qGyrVUw7jyxHKMTiWJNKIrlTT3ukc5q3SuNm7gf0o0HayuR1Wg6NcQpXcZ5z3GG%2FtQaABsDcxKQcNbTAt6uLOBRtgdJ9KrPcVTHQ9qELXvTE3C4cHtNKav3Teji9NpLjy6Gvq6j3uHVcMWin%2B2ZRq9JxHTseNuVLxzY3uiJJ2T4tLfx9DgmaD8Bi4BXQrREbvS8E2Ymh6S0rw92qlzbkZhJHjZQ%2BMKSN074GOqUBVsl3lb%2BibYmC%2BaeoLQ2sMhDRiUgKcxlloBlu0%2Be%2BxSCBnAbtZqTcf9UhP1xh1BUoU3hXN%2BNp3yFm8GDGjUMveQyEmdRJVKr%2B5X5E2rkLQiiO3yC4Swihmx7jZkicUyzJkRoUaQ1bON2HGWUJcFMq%2BeifELBX5YB1sr8ZR6NAW2JMp5lyV2KWS0%2BeweNt6u%2Fh607R8PXkCFesZmi%2BhGSpNYns04Xv&X-Amz-Signature=db74d281959ec3c87a8df3cbd3345c18e4adcf7dfba0dfe16b947cba6fe6e69e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
