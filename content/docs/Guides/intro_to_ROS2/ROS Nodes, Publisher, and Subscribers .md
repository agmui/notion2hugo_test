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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=20d1a4c8b7c2ac6eec98bb9d0689efe07d2ea28f623c23ba9de8fefaf679aa84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=fb3695146c7638d2cda375f0704f82402b9d649141523cda4f6a41ae154a3847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=c08e45267c558773723839d1a36e7ebb964cd439a6a1a8af41f3e2bce9fa22cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=86bd4cfdd9e1947836ce9c58a3828ea5d006e0566f553e0c5b56ad882e5c84e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=54555120b192ff421a8dbf9b26655b9d60a80e58baa33de7d0cb6a84bf6baad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=03d4cf0301bee1cd0eee5bb8305890c809ca3e81f6bfabdd546e447ad309ba3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=0f618e3e0aff7d35ee740121675d6a65869ba6f31453c213109851f1688a7bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKWWSQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FNz7Gz6w2SzirZGaM71OgWHZQgt7RW5g9uzMB0zgHBgIhAJLYGOSn0weLz2T%2FUZo%2FuXrpjsieOqu%2BDqxUItlU%2BGNOKv8DCF0QABoMNjM3NDIzMTgzODA1IgyyH62y1lBM%2Bfw01Kkq3AOAb6GR%2BRfCT9wcKWD34nbJ8JZm91RSwmZuzhgFmPORBwY8ih9nlHPcnI7VfLy9nrWEpmakjKDesAam39KO6y4oM5wVkOiLmg0w7iBAbDsVFToiWO1ILd294NxZytuHGTQaKrJwPyNEh6eAp5%2Fwr9s999Z8u5qEkXNy%2BIQk7o%2FODoL7uHsfkHGn5cw9ET4upW303nv9CkwrH%2F8rwb1d%2Fh1l4m7AwT5jW9koghV8TmjLAynEKkqoSOP2MHGnOWv8OGbem2dpv2noRXMoM%2BEM1vjvHA8lZXWVQ5js7cLYlYYtUHO47qLoIPTmmGijiO5I7GLOooykALbiGYphC22eAQDd4FZ%2B%2FQhCv3wwlKGlPBGjbC7mKXniSrC6VajB3uSjPLqfUvX3VCmTXYZQEd9NOuU%2BnWoE1Uom2iwaeyBMUwRYPenOLo9Oj8XQDa1GCPrE75%2B51xv%2FJ4MqLO1Y5TVvuwGftkvfwHVBnSsluJMKU0nYQcjIoaaWDhvBJ4fr%2BEAjEpoCqDZuL9zevtinE52RiCj%2FFGRsJ0%2FVIVQuwurjf9kIfFSB0it7PCzXqgGD67cAczbPxwdGgMyI79B7zJvf6KXqXcCdiDG%2BGceBf28CxCKj1p1zU28XIeXMmOtKlzCZ%2BpLEBjqkASdUo1piDe4FGp0aqPjmnKtlpQ6N2wQrE05RDVsXNMGFgtfTCU7npYQhkdJS3GE0zwVusRvPYT0bvruK%2BCRQKlFAPBTZLXNK%2FiIw6%2BMM2t0TFv2y%2BbCEiqBllJW128gLjNdtU0520M3VCfHYSlWytbZt25wkfQmXBVE5V9edudDkIRmB%2FIbtZxGtGt0Z8uAYYGWDMyNIL9AbwD%2BZkzole%2BDVt7BX&X-Amz-Signature=4057d4600aa9a6ce6e2b9427e68be91d83022976e37bf5f231670c0a5ae45fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
