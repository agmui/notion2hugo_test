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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=b155ec34accb4523477252606f824d8a3451a5450fec5bf2be16a515519f362c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=dd453d09bd32d8a40f295c30149736d5bf1d832e49b589175bbde0504ba72edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=00d7589e34b49b1bd901626a1585cfd7984b9d5a2b84de64e1a1c0bdeac318ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=b51ed60a374b0a7b61e1c133b24b7b80eddf266ce797b6f4c5a8d95dc8ec9e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=4846deb90fe51d96d32dea126f3c9cea4f26297e2957b6baadab438c740145f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=74a175bab1c0e283f312836669adfe59d5008884face29d50a92e86f0023475b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=d83fb75e592a2381197c0e7608bcc98944687fb48f6fea72b38f28cae5d87da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGTAEWH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FnEDc71tiAZ%2F0kEDkDrN%2BXm0nd0vfzcExqeWuHMrrRAiEAgphFukRPDCNK4zwpKSpPuBcs3G7DPXJWdpqlz2CTPkoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhBePni3Ym2HfJ2UircA5fRSlg5M9Jnn4oM2gu4XwfNZdwF1itTp6YjMyt8TM%2FB67Yl0mi6K1ttaGCICGUpNGDgFlEtSxeBze4n0a0YtOJX2Pi%2FpS4Oamsdm21h53TuyVzzyhFGEw56lGJCYSUSQrBO4IJNOVnkRriy31F0Cq6X7UgmZon0urD8Mbzs%2B1OvsjkSqVrYS5M5prXqbL8hztqIElUJSrek16e9RRpDmDEAY6BPZFWZ%2BoTC55HTZZUhmUE3OES6IGblX8Vj%2F3bjsB0X0d1M5x60drfR4BWlK%2BQ0CaRGkasSbZigr0VGKCl%2BwlEldmVY0PILlKVBF8jLa36kKFOa0zbYXwbCXBsruzBYQgOBz5OG9tE1CtzpxnVnjCZTt3dJfSG6KZqU81kYn4l%2FnulVMkgiCK5bJELPwfBfvQkbv3HObAA%2Bkp40vEq%2BQkP%2FqDhXKna72n8EvS794Jnx0tKntWwuUayLCa1UaUTvqo0JiC6vyKfbibhPosfQ9eZ5r9VkdAIpze8F8xqOzRbNwAw7VXPyTgU593dzZB68zy4HgWcQWliMkj79ueXDWLzj%2BDWzDcr85NpKtwokv%2FTipiKHFr6zBj1LpCU%2B0Bu0O8W7%2FJ1uZ%2BoNQNYSmmz6XiHwFxponFl%2Fi%2FbOMKHcrsQGOqUBk3E4hQmTAzSDyLTgW15qVohImKEG5Rq9J6NoohYvvTRutQ1znQjTLgTJ4WqcWG56kZFKZ%2Be1eu5ACBqm9LgKTRubNFmTvRrToAWXbp6wvSfZsta%2BXViM7kq5W%2Fc3JiAF8kIC0QrAwRSAzzHBpCOB2JSRpVa8lBwhIUsu5wk0u9igJ8VMfOPOy4TfWsWxmHP86fnrWPmyXMhSesAFH%2FwALoPMOFZ9&X-Amz-Signature=fddd0b2ffffcdace40e41222fc3235e690666a494ece25674e7b142d523ffa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
