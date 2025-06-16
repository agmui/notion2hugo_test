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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=ff13b8564830dfba54bfab7eda7e6810d5c46661847dffe5107503902ba2890b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=ad9d2a90c93e038223fa974132c3732540c6161eda1c76d4c9251716fb7dab8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=6945218adf3d74988c04d11d5eaee40c1903cd5b81181040fd7ccbae70baf471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=23c6ae2600219dab391e9a1bd518b06484c7c555193cd460ed1688f331ef0d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=2e54179fac4e82278506f9095d7be661c6f7177ef2f4558b6d30469f1153fa8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=5dfa1b72bc735d9b9f2b9cc4aaf2bf25ee7d0f7d145e78cf8c0a7c79b858f157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=2202dcf2ecdb8e57e886c9d3cdf93866537fb1f260fca5c7083d71a422721878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N554O6X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEGRSNquLIRCFoyceQcUUUKYU13jjXemoGiqn4EN63XyAiEAsUkLmFrTIdHykp%2F8ZUSLGhm9ioTLBY2GvZI4ugGEJ%2FMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGdCRg%2BDpd1J6tOZuSrcA8SVDjyErY5lTp8U%2F15WfbHUbg2fP97sTau9BWyBO4bWMKSdmzmlsSUCUTzEIUI6h3FglGtZA2GUBfIpvJYkpDxHYjUdDQstJjt4ICh0gE910lMKie5fr4m5TRxChqbKdwsdowfefHH67XE9P5DCo2znm72OkPhRegAzOQItOd%2BQwxOtmxaSzoTymi4sYy860OIHkKNreboozgGEB7bCVNgDZMTjnfCwT0cUDJL70flsudOvNddPR7yaQm2FmGOc0xY2zLj0Nwq4i%2BhJlJxQeT9euY7DpJrJjgA%2BtRqu3ZzIeuXlaLnJprY6zjZ7U8fAfqDTiw%2BcC02VqaY0GXw6bxQ%2BRPiTHEoWUlo2D53vZ4Wr2Q1otMVHbwtIVgOOSVjZ37DR4uQMRXAvh7LPYiG5B4%2FEpMqX0Af%2BkuZoKzTOLH%2B2atoSOqDt8R9nEfjn24OV7wlEME8k9g61kFsVzTh8xAs6xQD28b8thkXowMrHT5TgkNeT9aQosdDYawi%2BODtwfJUiDqBhnkTgc0I%2BkXibxBLoDsOWBmotDA%2FZ%2BWl3mFYlmN6XPCXfCPZ2W4v0eXG6P8Bmzq1WmbqqwLD6mqP6d%2FKOcEESJCe0MPPumE%2FsxZHiTR%2B6I%2BcdAf%2FKBA4bMJvRvsIGOqUBSj%2FwCcuuceagUyvOxS9uTbRII6iD7A9yHXuAZ0fkDRH0DyrJf21K6Fq2UpogF%2Be7Bkzv%2BtEVqGtOX0Ur8mVRn%2FZ0%2BUaAk0MUvrH%2BGe1uu%2FsAmjO5c1ZVxL7HcaqCG9s5G%2BpyxhGZR%2BuAS%2BjnMoDRnR0hfMb5rm5ws0JgGvF4G7KMEyym09W92eK45OQgVS2JYuF92mU6qRv0SqqL7APOv6sKZMT2&X-Amz-Signature=f23e39e791b0c134dffcbdbeb8b170e4e71ddbc6bba55e370c576b0a3b86bebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
