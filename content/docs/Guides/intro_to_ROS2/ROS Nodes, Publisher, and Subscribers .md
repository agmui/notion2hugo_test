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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=ae38dc5e336945c6dd7ec6432bba2cbc562c1ba06d0811c27b371aaf047ff9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=1461ba74a6124cf04ccae55c528b59dc32b7b865e0bb7766d68b2ceede9dfbc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=50b5a268077c8b9ee62c89b5dd435a799912843d24525263e15280b20ff1302d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=b3e3ca2657e446718b7143a6e873e6e98007cd1232a248585a876609c14dfefc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=de1c3e0e26bf5d2f607b5b8d507a30304421e6fe1f5bbd16c541940b0203a9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=42230300d99357eef4685e4028c00b49d388a40073d018d11dddd6e956a36e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=a7c0683ef31b6c03b3ca3f517d009aa4e1e526c077ffffd05544c1fc98cb5947&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJGYCMM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPJ3ESuBt94H2Q%2BZ%2BZSCL6LbiXELXRlsLy%2FK4soTPEAIgAU5xWDsJQNKUxWZITFyylFQkOHcojjgPcFBIKneIjToq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDP%2FNTTTBp8FwZq7u%2FircAzBz%2BjwVR7b7x%2Fa%2BHD%2FRo9z5SOkkjmizBnK5vrwvCOTJOb2w9YgnvA80BdlgRvCdoLsMA8p5Du186h8tjgu%2BRkDqUKLckoQpVy%2F0BRXiu5Kkzm%2BFy5X%2FwNjsiBNh6109BiFQbE5YDpQWkbYVXMZZ3xqB4ZSc%2By70OtyDkgW3KNY7k5Eq6sm5aOReNQdq40gvD%2Fx3jalbKoJMW1OK4T593vYsU6Es4l4u6jy%2BPKMqcCINF9ggSnhV0nfRvv%2BMATMI9F5g90uaNs%2BWw2Je4sWMLBxVqqmlQrwyhbvRgYvp2fwAgHkaCSHGpG9cRVqkoO39yiE%2BqHwt1HljrWhm0IFptsk%2FhoTSSafV2K%2Blk5tIYc4A1fdyJhylj%2FK0jG%2FQ%2B2NU2u2viyK3WqKQYMKOLfmFrAgO4QkzkyUDUhi9v4knZ6M1sDb6M%2FurzkO8ifOAr2ALv%2FNRjv%2F8t2RTt2Hlc8OUlDQw7XCU7vKK25B3BtqP228wUzr6sMGVlBVFMSk5rmtxJlodQzfuBU5vLc8JeiO%2FRAmBLDUHb7chWXTWi4NUgJAI%2BdDXg0gd7U6SSv7AlgploVHlPaEqXQsXZ8yvvX82%2F1LmsQ%2FH3jepkAz%2F%2BgdXWi3GyE64LxDwEfbgOUAmMMCSxr8GOqUB69rJu4QKN%2BEx9xQHKtu%2FsEyNTGVK517wESz774nzxPQeFLbYCaF6VfmZhETvl6%2B0%2FmXSvh2GMGYfYQAbyuzOXEORZJx9ECxESMrpvGBeV1Jm%2BnjI%2BA0sTQ%2B0hZPr5xwsr7F249W%2BA9dZen217p9DgG2PC%2B%2F2geXIRFmlX0bfQiGqyGyJyfVLMBrKNLSuaWdbf3vRSq0er6l8LhFnF16gy9xM4F%2Bz&X-Amz-Signature=9d60a33afe828a768ba01fd0c36d5263c4d0ade071bd5e3221f73c9fd8f388fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
