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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=c4e388d32681d6b76f1eee6a0875e193aa96c0edc9a1645fe5d7f317e3d8243a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=9528610558371ced9a193da4fae3241c2ed0b53b21f68b9f0072c119e2b53b06&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=64b3197355ceaa48a290d99248aa6887539c65556f3f45058a4dccde50c46823&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=edf67ed53f9c867e60aea6fb612dc61d7e0f66d8edbea9cc9ab99eb8a3238ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=258a17e615855d6038022d40b5cb6ce5c663591a3e731d2a0d24ce3abda5a145&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=a6b534eff715270d71255d3f0357b872706cc9180af31d06f7f7000e549f162e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=82b994064fd2a502cc12a5393903550624d754b62f27c499603bd30330b56798&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6PWZKE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ZkHpfKneDtawmCIRNtt2YIAETAXgALPmpJk06PQREAiEA5B9JndyD3ulET7fUjxF6Xuc%2BLz5uGTB%2BKRLiWRPsh%2FsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPz9WBll2qlbxcvYtSrcA%2FG%2FtRJCHybOjqLdFpEmhrcWcTwkKYmbgi%2BtW2m19tE%2BvlduJ%2F%2FNUKskVsoIGJSyoLOAIHqv23ioTAjwYPX11YU5u3bY9GbZqsJDsbZFA9vU24MvQHGy91YkukurEm9UzjnbQy3wJbdfNzKGZIp06M4erky8eg3bm3GPUucWi8HhcCP6DjLUQ2ps88dTElyse%2Fq%2B%2FeddaYx0gWyS28HwRXp4o2FE%2BLGeYJamkkoUt%2BY63qts7%2FC4d0ii%2BuVRgAd6xJugDhaOy1b35EyfvKMXm0WoX8BBfjdnCVt6BJxQ8YVWFGRn5E75LSfcd7qwY0rTfwNDWs7ufkkSfiz%2BbM1OLXxER9gDaluHEEMeko1MeHvO%2BP3wnGbAyDbHID00DkfK55J4XiYwuaKeNtwHAkXqsIufkEuSvy9S9xslVja%2BS8qsVtUWzHx8I6YuxpU0Y%2FeXNNK8ePmngHcb%2BQuizzJSydJ%2FmsF8fhfGhkfPhZoMFH%2BrHtO3FhG5tmV1Qmz64Sggjg1hxSEegQ4XvyygZGbg8RrS%2Fob%2FkcuFlyLyJdgWor7h7QMlNDq65PtO6V9LJypkbocfPF6JVns1zOjqfhsgdtxzcsC%2BOqcFSNOANqwiyokqoNCuu8OU4q0OhxVqMNvUzL4GOqUB3We7BxZQmG2h%2Bzs4hsT6ubOzBuaWZ3FUyAyQ%2F67lcn0SCuXBJZVD1nB0ni6qpjdfibBM7E%2BzG2qxWBRcFzfzfEP4PbXYsbc%2FaZDqQ7b0SQDYte7ifsb75%2Bvl6%2B23xSrRJhdJzzBlpyHy0P50oLso0Z56O8iTlSHkNfr%2Bw2jRh1T0%2Fygp2T0FmNNxaaotKpjyGm4ysyQyCPIXaq6txUxJI%2B%2BgDUcG&X-Amz-Signature=16edb3e656d527a75deda2255f742e901db37ef2d9c7d02bfc74e35399834ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
