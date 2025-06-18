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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=80bfd587e25057faaa4ffffe10052df0bb7159fee3c462e3845e01ce871d4ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=e8ca7bbd2548c8e192b94edb24767ce10b36f771d0c69f8551c6ab855e0d1c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=4a9cbe5a0d50ad67025c15a0a2cb03b96ae1e3bf3c1ff7d45dc41cf96f4711d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=56e9dd5a11e64bb02e2eac158561654137dbda4cb493403cb78dc52b1918cc61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=f43743f2f5c41af770a56ff05d9f021e80743c6942fad2f4e3f0a78d590f29c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=5f2144fc9240ecd8574acb82c88589ac0eb4b412ebcb8cd2f1c1d3e36ed5442b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=c91a2d632b9b349f3cc4879fef0cb70f9340006ad308f256310571989083e7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQJZPWFW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FGUur6XawNmlAFr9XlWmXQQdHmNeeJzaZRJdBOn%2BcgIgIF46PP03KLFVGHSpezJatRVAZhKYuNGbNhz%2FQ%2BkQyCYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHu0FbwZRsvYdpnNzircA5ecgAB4EbNmIV7SHR21E1YfQAPE3koqC0S9XC5aHY3wOaybIRdHYZjneDq4ugnqpSm2twGzkw%2BhMUKrYUBxaYJ9Ni1SNhFy9VyK%2FeZgTBuoTc3yC1T4DOtAz6Tvch0McF5lWjMooJFCnCjowfSCQ0rEqbLBJMW2%2FR1t0smhZWDQHbc%2BDkV1bf1CqMkjB77FxXHJhXFnIw01Ixd396vFdtvXjUzfGBkUHRVP5cNIcZUiTkWJXW9b%2BI55YMMjHi8vAAIZ2L57P%2BiY8v1f1j9vpvt7kAgYwQCKkuu9zmJmdPNr%2BE4PvIYU9bW%2FuVmXyozQ9l%2Bwf%2FW5PclY9Bq94YRDwVwl4FAGlPQGSEinYeZUpI2GRzut0eld3uQe3AE03NeMjwA8dPAC%2FYMtUmpDkaaHWl6BRyS%2BqRtjP%2Fk%2FzZJXBvt5g2TMDUdT%2BXO4tIni3qpOM3R3sEoi8xj4UJExuVwf17kqLe%2B5IjLdymrXc11vuUaeLRYuNkACGraBj2LZ6mSwvaa1e2LP6GRk4emobzlLhZLxwjMH44OE6Sxw%2F65v0R5zkHA4D9lYGO0ZnX0p1xc4ufTfKSee%2FCSdj5C1myrUW6HQQNesSSChiBF6Ho1son3DQGwrHnDFqVfjU0O9MKGkycIGOqUBW4SVcE7XXvFngmPXZDYlgPC9TBDw9WBe6ZsywGlAauKRIqWD5RVY%2FNcm2vEAqx4yQ430XA%2BFCKyDVMTRqygUYXVYjUeUCnVoOKJzBaJwoHWoFI30aE9wqQTe%2BmdQkAAcmfKpcYcMEa1ivtJ7Fl80QTOnp3CfYSgjjsPt7ywaIx5vtSlBQo9DwDiX1jwLuDADiUlu7c27KM43Fs9bTxJNAmnRwvb7&X-Amz-Signature=c2c0f6c391d2860761549b2ee1dc1c9f3b8f996b0f8397ac8bdbf5507a5d51a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
