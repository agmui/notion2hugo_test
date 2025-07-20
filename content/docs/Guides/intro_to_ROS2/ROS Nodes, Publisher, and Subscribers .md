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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=c3b2d083ca1695a61b729cb34c80a67e85db3b59135fe84351a5203dfa70d343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=ff82abb1090a6278ded78804a54dcbae356949fb403b45e720ca3975384640f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=ed22a1c95f58f9c9f6500353a448628a8333579854f97dc8bd00e1a453c62808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=7e3ddf2bf23334d29f1367888ef1b4b314634b4b8986478a2f229efe753945f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=cf82eec1caff5a1f284d8b3ccfb016336bc639ba2e9188619527326dc2f5b2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=3c0ef8b87189c3dcccc739e4d867629e127433d6fd8c9c03356db7346540d558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=a3e7ab3bc9ee42fc38fb45084923b810de3f51a1304df900d54f0c278d94b9c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADN25MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOcygVR7t4x3dSqP3bTlk0RQrkvuNg0%2F2RjP3%2FFh%2BwbAiEA%2FookebYxWaJhyiJH7MfT7N%2Bx6sgFQeTBzyoIZkmKTZcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzW7umIf9Re6NUUJyrcA9OlsBtRd4jpsAiBIKAXa6vi%2FEpSiPXjQHsb%2FRp42yvhOASRrByJn9o9fWTfmHsYws2o6t%2BFHBbCCXiN70Yz5pcOaGLRLdNm5yQQ%2FYXjjve1OvsIBZK2hKt2OxIdT2LnldEjj6%2BW8kgvPLkW9FPk207dAbPLGyIikZduLt7C8eQyom%2BCqYmoViv2Gk6oh6JslKx2CbOxYGzq%2FcfZzKrVDKcMBOVhDFNLYDPDBtLTw5oGJyU7TiNDt84zrI1ojpdCHH9dp5AiSgQfM7uYgQj6Bjcsywfi5P5FF02gxzc%2FcGflth0Nq0WSG0f7HdS%2BwP930jnhVLbzW0jCrE3f82nTUp58xIFD1MvhIVW6a4jQ6MsrT3rlvtnuz5mQlpaMQyy09jy1QrMVceoRDwxFtrLaWXE%2FNCpk%2F5cXwpAQasqu3DfbrUAqrgIRjCw1JX3YY1ospFS4SunAZeYPtOHLeKdgp7GZDsHhzUacGokzlQnllPwJx3BsMG6bleuYbayHrwNHeg5zfBVHyAjldorXWR5g8cuisLs8ecxiuaAO6c%2BQYG3GA%2FtmVLDmDkyvMXXf56f8ye2oBxtQNKhBns39WuWB361iG7yXGoq0cK4YXlu75mAvInrmXWA3HfJAm95kMO%2F49MMGOqUBoQzwyFF%2F5L74m7gCwPFl4bAAFecbALx3UZdT5mufAx%2F4ryN94HPBX2HX2F3dOhTWPHdD5%2FNreqIdRnAj8UGeuxWH1c99Dn%2BKFM6pWNsVKYEJgsMLdMO%2F30ZpSzUegH8qG8ph8628UiEOyj67xbxPBW4JvjQdkHCCtxLdjU7GpMLb1RHJ5wm6wczNkfEcPbkJqb0ZnH7dUjA0SCPv0%2FfXojMZWde2&X-Amz-Signature=a4b88f42afa5ca0f634120cbac92beaf7e98230681d9c1f00ff2534a66650cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
