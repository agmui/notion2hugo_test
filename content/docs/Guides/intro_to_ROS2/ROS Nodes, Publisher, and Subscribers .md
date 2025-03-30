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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=4deae5956e55c94d8eb8c7c41a3ca9d509f706a839f423288dc01ce51516300a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=56ad9c1fb5dd024c5683b538de6a0e661b84914457bc2c5fb554cfc18e3f2560&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=9b5b6013edb3fc87729c94767c7adddc636039b1abc9ea79d4664c02cf866b84&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=6010d2eba2baef6044a111c6e670604a329068ec4304cb7b609249ae684b64f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=2c9586325564458ade8ad65f2909d5fb9296a5de0bcaf4a94427c2ce1bcbf263&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=6655ffcc4a7fb35e3923b88343c06add529603672280af12b17916998287f350&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=49d7caf9e3dc842dcedccc2cdc8e24ef6f358362ab24383427c13ba3f9c71591&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM67EPY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIG2dt%2BKr99bUafqUrAc19EZQCa5W%2BovNXFfXhCCXut%2FMAiEArZTngc35dKRF8an1cWpt57bdwI5HfElgaNugKA2VCOEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3X7RV6b8n9WHmnyircA1Y0LYQIH3bxEWS8uVrVFPxneN3%2BoIkG%2FpRdmgGVeGYHr2n6N2WQ8lAVyIClNisrfYdyFFnkOCXkUGsUlgmEpruKVvqrKPGVCeBKRWCPaSgpYVpjQn2UBJNiyTS6cGysfGfUwOX0%2Bojb83aHjBaf6G%2Fq3oD7eDYAPALkIYiduuBPPnHv3U%2BJB06p4UB7H3JUkfF35iodZYl0bZx33a7zGL0ieqrfD1KeSAztLHHQJU0blTD5%2FMQrZj0goaPnfKBeFBZhsr6257PYUEv%2F%2Bq88EEnadIskXUPblqGYsyue2VWwVcWMB5eAFAovmz6AVl1yFcFUgKZYnz3bgxMuZplDbUd9hegTcRKdGJdEc8eyuap%2BPvMUbsgNpHhbufLLCTWe7%2BamSKQuR6z3Gvan4j%2B0Uxpjv6b772U3hxb9O3b2FRgVAwfnyfosuabcTyEAoeUcp6KjZRu0wzK51CQjb77IbxyZomf4rR0UcDnrCnO7jD5sbvGUBCmIQNoO7ySGhZKL2q%2FbBnDUNO7CyqLtL3le9aQkUBSsMql6SRgA9TYm0mXURD4FCsOzJO4e4%2FZ45EPpFMCiY2DBaiNAlOwlim%2FlbNJ7T3p%2FlxuRQMrLRY0N80pLqSUg4E9eaCQsw3w3MO3tpb8GOqUBP06X3wi0DFRN1pXg43tLr4MQ98Rwo7v74IPeXeihzPZIWNGGcdF6MenZ7tWbMGBLfwNdJdpCZFOglvqTJ5gwHL4cjNjKBeuLnjnMR8p7j145ets1FhpDkHVi04JpFUl8QBON1dKlCIio5j9BP7On%2F%2BZN7ho3pHZNA%2BA4OojX7vcK5wAgPWTRksQQ0kRUokNTkyikJ8ni6RLC27L9vY6jON3UJH%2Ft&X-Amz-Signature=3b563d1fdaf041c4e77d4445a0202508817ddb31169160cccc65c8c7f9f05955&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
