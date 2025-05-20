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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=b1efdf5dd831d2171ac7944ceff71c284c5a403b6abf7800cbd63d40c0b48398&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=2d2e92c895c72ff9231826740416c72f7a12b40be3fd67d472ba6deb3fece806&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=c20f15417b54667004dd4f69eb686dc8255f64abbed5d32d0ea5bf1e47bd5123&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=473e37acf460a29c6deb20daf267f68fd4a7d0a13ed836ad1fa5abc9e5f6d3d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=b985eea381e3adb3bb922f8ca3ee5e9ea913853380f08ade470827fa8332fa2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=16cc3c1402aefa663679d492f51c720c95793e2142abddf6db0f14263f0804b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=477b9924079b9d772a860295ba4a2daeee90e418e5d713489760cb56a36c6a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZLLGBT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzgWo5XpvOuLPA3c0NJ8KIdn%2B2xwhHdKqHuQnoPZSKzAiEAl%2FofaU9JffAXhZSQUHeHsWiQwQGs75iDG%2BmEKmgTFPwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeZHK3O35U%2BnuDUdSrcA6iefOfMxWcnoSopsYUMm43Vc8usaX7scBA3Tx4Mec02FKdlUtO85AquoKPY54HiKT7P0SFKYNbDG8lbUXBuhyoToOkEDFcBYRtmJXObPNfzxQ3Ep9aCgi%2FIdgRkicbxHZ6rhx%2BQhI9tBGeWJ850GXCkFP6KMbngMEB3TMvoNa2pzAsD9xjrIcGzPtTf9S1Z629LU8WB7UkTKKWsiZTZK2htEYzMX7QBqBhvjTrGagpl1Z3AX%2BYinIgOgW7XPSKlHjEWpPC9ElCvLVMyN9AMkFiUvZkSPx2M0bFLwtanZn4j3UeuywiXUIjQho%2Fh4rSbX6YtpJk9LCiCnNC05NjCnGueKig1sKDCjXASDTvWZTW5deHNcYSuKxgAdvLgfkhxpgtnUHIDWiNuaCDuuO7XVkBphzNkxyjMTWMlEvRJ7%2FjDO91oZZLLNKulNPdShbCdWVf5bXff6sktrx432cY5a8RRe02VkX821VLEqOmJm4OhwkhJobqy%2FYrPgK5n6899sx%2FMqzMvWH%2BssX4h3h9m1vMZ9X%2BcdieTivjLjc3NHWSsmVC85DTxd5iKyhZJdpAitsorENOri5C36de9SFAA4bPAyMJtvgQBiJT%2BRLoAjPWuqC4deT6GQYAvjBZeMOGtscEGOqUB4QBkIQzBn5clYQihnKPyP%2BPX5BC8ITQljH2tUmijqfpfU8AZlSlTG0CooO4gXIfJrJ9g20DfVefOC%2BLFxpxpYhmrudOX7ReNY3xj5Zuk27YH30TTZ8YnG26tpSHc%2BkRtGA%2F6NvVWu5H6LtRlpEFXiP0lx2adfsrkTsOQ94HC2bZzv%2FN1%2Bd%2BfHq4T4SEmDAzgeFNzQxTwgtpIJy1S2VgM9z8X99Ci&X-Amz-Signature=831e05a36e5f299b381b907183bebeda5d8848501a7d30c9fd6bb00968697a32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
