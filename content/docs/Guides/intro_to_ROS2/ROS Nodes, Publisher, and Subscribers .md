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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=e8efe96cb974b39ac4db0c9e810ae29f85dca1b1deede23870e736587ef0b17b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=fac325d1d04650e1068a884a9482ea61fc3ff36d10e51b1ba582cf4dca7128ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=acf9d9853f7d27c70734524d0d681ce474f89254747930376065ba9e96464e58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=4815f358fde9eea4c5cc73525e58cbfd0954491bbf73bf2502d90e357f3a9b29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=5b3ec525deec5e5e427eb22dde6e2ea57ea223e7498d3d1367c517e5b3092fab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=e2c82577bf332cb11b108fa7e31488e04aee39bc562b88e019de991625321bae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=d42b39a17b5d24c34dc713d7fe347077f0475d66c9f569c678fd30979e92595f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EAKOMDB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUZObqJydy5o3xzQcN8gga%2BFyNppkDoF09ebCsXgzFGAiEAuQ9RIdnLvc%2Bxd68b7JbDddrGCEVyES5Ca5QWM4QVarIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCh%2Bj%2F%2B%2BHngnNuo6vSrcAyhwoJEmNpu8KaDqsf9A2FPLzbpx79txNvC4cFeEtb0FbuTVE1nQAeuiKNnXzpXYUV%2BfBP2WwGsVU2qNGz7tK6CBiewcflnKnCNnv5J2HXU4RmTUH%2BulAGfg5JPuQnLHV7lJRPFLt9Cw4q%2BTRrvfxNILdvcdWplOwe%2BQoOa0SczSpA3ac0ezKkaGElAUojoHII6iQVNMvcASCsFiCsOSTDwJmNBQTv1wTTF2%2FK80VnaGChGfYM%2FiBllEb3s7dXB7Z%2BXJk5wW5%2BPlNuwLD4Kd0m0upd%2BE9n26B%2B1Z4ateBbFFgOBPQTj3RHHGAa0aXxhR1XefZAWBbOVzZbGQL7Cb4BZy5wKdyswtC27IyothN%2FzehEobwe9WosGLbspN%2B2tZuhJYeCdHD7AsGxnxvUPECyKGAYi2hOsVzQLbWF8R7ekBoX40XMWWiAJL%2FYOwNBtCqlG2UAjnThJA94ks6Tb%2BpuLQNZOlHcFYQSLQ4C6fnqn3hMWwEl8KNh0mzYbUOEnnIGlFy2CBLsrE2BAXO0R75X4bJzZAcdz8FYziN%2BJxKlmVxKc%2BMxKHX1%2BFMamrTrRC5PcGusmRlb3h2Pn3fpfj8TXCXCqBzn4NI%2BM622aLADcEBkzOyWOQ9WrTG%2Fq5MIGr7bwGOqUBE8mN00wNj5vDz9vIsiu3Mo7QvQJryGFVo7Z5VIvGqmstYhLjCoOPVMpxD3eQquFFdSGZDI5%2BEauYxJMxy%2BzGaRlXXI03XJESV%2Fhob1P9HoKlFtlMwCF9oenJVwzv1v8j0xgkkXrImT%2BM6MN2S0OmTrGL5tgBSFxLm%2BEerz8Ppqouow4LoEFupLsoHJxlu1tP%2F%2Bn2VXoJmEQL7TvPiP%2BKCbN5YlYw&X-Amz-Signature=a20f1e237bfc7b981e01705e26693a5237adc2c8be59a7af54fcc8a5be29cfa6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
