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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=d5824d49da56dd5de7d70a460f54cbb19bee3c42a783910b8162b75155edf389&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=90b4509bab6783984d4c461166c45da22204ec1177290db231c7822cd5491762&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=362455da4780dc656495d47a527cc7a0a1dffc490bd7d3126ea5d192c4a91761&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=0fa4d8d6d1bb7f8461775964ba7c9f1321414b22fa76971b824b1fc73b52499c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=72b56d0d900ebee8ecbd2dd67ab8e857f7fdeb7c8e0810e5c05541fb2927d5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=3fc9347d9acead315aa1ef6642961e7d3207a02d83475a39c4de0c1c7493ebc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=6743369285965a2165aa200b7e0b0308f5385a8e7acdf9ff23c0c0fce1dd130b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVJXWBBG%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGT4mN9fr5kDmX4kRZ%2FzzP16d0FuToL3p19exeX0q46AiEAqwTAN2WOgCwWGPfoUKZ8YWr6Df3VuEgZ6O3JDeZR0l8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLLiXhPvbiX%2FTPXayrcA%2F4Vk5J68royK6jecwb%2ByWYwgRvC%2B%2B33ZVJosZOpPL8xlGOSeFbEBBvq3KRid8EpB59cIH%2FR243%2BRME6Y97qRNqRdj5L9YX6B3L6HkP7lBwKHb7jrBsvMEOHLXhI7HLiywdHjJuhN3sOUrlNTnqInhuhviKADZmdkkwACNoYLpNYrpSYJvLSCE8gqoa0sO9YcpqbnjY1Goj7OB8kMB2BZdZ%2B5RTKSS1kEdthqVo663%2FXXxYJjLB2iSS4tsJUOMD%2B%2FDWFS1gPB8x0aI4bhCabA7CSjB%2FN2S%2FW919tW%2FZHhq5AFF7Pm5Xfl%2FOoOqpbiSL6Vqk6uI0c%2FR9bslw7jn5c%2FA7DKa5uuIy%2BUtgsZmm30mczJXL%2FVfuTpr1eHT414ZgQjE4j9QCZlx8upppINNWjKUTbz6Tyvx0i2L5AztXSg5SnHiSFWTjnzRUQTRqAjOEoQXOsVXWdDcEVZc4ySHC%2BMmiN8mNr%2BlgmACb8iK%2FZ%2Bu2SJEmzmi1SN6zxeSfkYCC2YL3zBtuXbUVK%2Ff7gyynWeK9wUZ6VmA7VG9TxRsR9nc2mum2M%2F5QsHoMjHnAr0ryvITlueRgy97zQbzi%2BE4OsK1SrbIuRwnqkyiO%2BLtR5gmSriSPJo1Ss3x%2FHLloqMLrjg78GOqUBq%2BXD4A9O6skdjMuGd%2FJKWW98I87O8%2BbTOM9vyG3%2B4Ue2K7rAzYsR4cdoiUQ9%2FOau09eemnD44LQ%2F499emVGnLYXk5Ww1ClezooDRknoW0xi3v47BMNQyE7BsPv8SOSE86%2F7SIV8US0lfN6zQsY6xhIqV9L%2FrGqWvuhNfN0vGagfQpjXnjre7L%2FHFvDgQ7rG8JDaHNF2TMLmJAQ%2BIfCDVLq0QY2Yn&X-Amz-Signature=62ad807a3f111d838d0dfedfe6303ec033b5caa937a0b86c2f256ae500af83be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
