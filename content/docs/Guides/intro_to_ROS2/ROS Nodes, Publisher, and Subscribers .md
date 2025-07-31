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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=07daecbfdf31ecee226e3c67aa55181f4a31b7bda555df97eb7b269e6c4b5812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=b61f8e4a5ece75f02521bd2ce2ff7faa1d07dce24167a40723ec8f9037854138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=5444f4df56eadfca142301c27344fd3456777362a78394c4d595b8bcd0570933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=949cdada0362a29b6b2c5ae0d6dda604ed96c7af1449622015e350da0a36bd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=c0d95ee42c5d542d4bb071a472e22e273db8fd7ee8ad85b5b5aa83d4fd592859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=a46a8cde4efda0d03ffb778ceb2a4d9cc72b28e1eeb21608560b1b82591e02b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=f958f7974d05ccde1fbfb62be5830243c214d9bbeaf86352e65cc458e122db97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4V4SY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGU6NVBP0pMxO%2By%2FPxKPB6z%2Bd2Tf8AXHiLgQXxF48TN%2BAiEAsjxhW5%2BTQCOBBeVBUEK8qU9RHzINGSy7ZOAsZ5T7AEgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9bwCWFO5ia6ZVt8CrcA0NTxZJCiirKQ8xqYb%2F34OmIvam6aqhx17kd3CjRNtw%2BcSfm63k88vlBBNVRkXGg7Becd5nGTO5kyS%2F74rm%2FAr5AMe6gOQrjWsgjw0wT6NSa3A5rT5o1YlMOpA8A6qtDb6SexIWzZEffjYV6%2BUI14n%2Bxt7pxdBdTD6XgKw51DnJ29A50YeWtC%2Bq4Jd0GHBviWPkX8TFo4jZxIlt%2F20sewpRX9mV7h4PjwQJEZpshbMvj%2BuLPFWWj7H6odamhjaWnoJwcfuIBnK2Am%2B322lsVv0FH2UqOzgAVLcGby3u80naYDJPq3C7nEOU%2FYe%2FMXWLmbH4hx%2BhOvNiOyD9%2BbGmEJWw3fhOVuBwQUq4h9zsPbn1njSTD20FnO41BEFfRpFQHlMylc%2Fb3WIW9z1wk0ZIvTw%2Ffcs79QwRvXWoR%2Bwej22kcY4yXqnQ1iJVPYmGrpERnXufUrSow6y%2BFmDSLzLgAOuB3BaezfuYsTb%2BFqSv5XtTKbPej%2B9cFE%2Bo0ndue1%2F2MSEgXaZzHc%2BjPrZFiUxnwgDXfDQsTG%2FxZEJ6YtNMfYeEqgK8%2FAjGmEs4AWXlmdTUPrb8eYRv%2FA2B5f9EU4KRYV6ftTBf38%2Bno0MNaG6miO7x4w2CQmPhnV95qghXBMNiarMQGOqUBVamWGLCjy5zp5A2qzfFkt3Ng5T1BfrByLQfcTiNPk3ASh8A%2F%2BVfm1%2FXyFH5tlOct%2BZAwqHCt6Jjw758eYK8%2FsqwITzgrwgmcmlzKLO99jlCah5KJpf2TQmLovXTUn2M5x96hzQGbnldmzKLSi48YJifLM%2F3h5zRf779q%2Fi6NiIwtwhmscdWdU65jhLwxSPXVbRokWxjk8WfuOTuT09YDLjfspCHf&X-Amz-Signature=4487d87d44e636cbfd59608f43e9841cfc9627169679a3db9d54cf930b4bf6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
