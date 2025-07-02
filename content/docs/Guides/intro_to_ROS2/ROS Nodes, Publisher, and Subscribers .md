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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=9797d01ae9bd776ff7649fe81d4a6664e903658982f767a2fd2e8dfab94c8601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=ccfa74741ee37234bcd8af2999ec76f4a478359dea3e04cd1ee177712c609cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=1d02b614d7c7f81dd2f9edcb37943274b7aae1d1199a23c9bcf6447c5f1ce1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=006fc3c7b9ab742e0d0e0a15a33e69e44ce2c664177a1dfff3efbb1d6b8c8407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=f8918f7bbcd48800e02bfc450c992c0211d52ecf1d096b6f552701066e13708c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=ae79147fa97ac30d8474462613f1550b20292e9ef40ff4c091ea7b36f7ea7bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=27104b1cb8f43d097ec6964bc095f341ab572089050b6fddbb421b0f2b35a3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN3WER2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDmTs2mcy8yfWpwzoUKDcQoxDv4JgP3QHBd%2BYUuwM7QAiEAvMSm9ExqSapNm1wviDDzs7%2BxJ7Rh86IdXphJCNzJRTsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE47va0D4W4bOHtuzCrcA6b%2FC81D96TQOLw11HjReXL49aAvixII4wyGKDNxUmnY%2B41hPTG6hE9qooTiz5yEmIN5mdoDUckLb1ZvLH5G4yZcNI%2BlVyAtRV8HTwTKoZVkUGbZzj4s8oNWRMh8DFwGwEQhyCHbfSPg%2BZyWLTC%2FqM7Rikhw8JBTYI8AgWLJgC3BsC3%2Bd%2FebgFspJZpgkp6WyIK6wMyvUzlGARVMBH7Sh8qHbBDMGdQyiMjUR2LOS9n%2FNQxHYOdZipAc1Ex5%2FI9qfFm7eVf00unbNXeTyGPXneOArCaDraibne%2BlMrlps1Kgq49ubea67Mibyuz7Kq70%2Ff9nyLvSkEsGFkdMQigBleQ8MF9jNjn9L4fjkmvK%2Ffy8YKsX39Uc4NO61w7CuFy9KCSuAnUvCl5gU22aDpVgPGBTSGLfXFcJ6nUmGNPYm8SKhfSdKm6IsnT7Choe%2BuVSCBnDSLlj%2FmV6UEzKKsrgHt2dWLlOQoqk64UmOZgHkOjrXBYyWrG3pjruhoelJ3zcrZ9z%2FTBnlX7%2BUEHPm753iIlj99iAPjv7Ky%2FVsekmJpnv%2BfmbzTYISFusdacIMWPouv3pxCEfc7EY9EYbV3rdlt%2F%2Bek3nKpNGoLicgp3dQZ7bPPY3gIJAyiOUYhj%2FMKGfksMGOqUBAcd1UP4wPrCjaVMs6RxJmSaI7ywtDth7%2BWLpiPxe7xkfwgQb7cgbtuw9wX%2FevhpMZ1fsEk1bYtCbSV2w4eZ75s7aFgDhNduod9GxkVQnG1ZK3vm69B90QDZAd1CqUsydDkzHCK4XaxYwX0Zv4861weXJJN1hMv56Om9Zx%2B6clNpdI4lNeyIq7wX%2FdrPGjCFCk%2B5vCbnc%2B7kKTuDMKsWJPl2DyHPN&X-Amz-Signature=3970cd74b393c20dbc7d5e60107f5014a9a7e4eaa89a84d8cf14ba349a8c6aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
