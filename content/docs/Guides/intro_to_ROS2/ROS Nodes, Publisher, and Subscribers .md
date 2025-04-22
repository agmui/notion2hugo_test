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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=82ee47e91d188bdd5a7bff324e855c952a0ddabcf16360bd7455c0330011a735&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=7bf6047e29efb156af218431794694e6abbd5ad837cc411c967506bf58f58958&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=724388f1154dad224b4b39671e66a97729f4f8dbd6e1a7e12a87e2858a80ce03&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=80a41f4aeb1283e89d93cd41314b66160c63c311d5665812596a5a4f2a070152&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=d6a839cd91a6664a0c5f783c42aa0a6e8958b809788881837124c29c500ad238&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=b62e71e2e3acce48fe10147a7556f14c1e15d40338819d906d8c4a5c90c0d5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=f52c5105d3be46eb866b54b6c675aab84661938953e1aa63dd69c35407dedfef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5A2OHD7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIAe0qx7g%2F3BI%2B09mbPCvuH1Sk92V9eypV6oHqwyqAekiAiEAwJu3jMYsF8bd%2BJ4V40xQi4reqL5DLUuKi5aYgmUnIwoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCp%2B0NmW4ce%2FmXLAqyrcA7mZe3%2FjE5JwUGZl1SzrI91aIaU3ha6Ch%2BH7mTa0JKUjDRSpOAj1MRQ0LBqcBfIQwYtKgEIoC3M0EQbazSthbE8EtnLwMJ6Sjgc7%2FzL6QB3BmyUpJCEePVBJfouwQrpM0SzzLF51SmrO5tdA%2FgRaWoHOTI689V8mz4DjQnBNj%2Bd%2B%2BEhU4qx4JEKs2rMM0jZorAeMtWmWmWdKCiMK1i4Mx1mPSfEp59LppA31G6Lba6CG9FAi2T1WRSCPAqK9aKYPCW%2BBEgievKLpxvduvr8P8O5Snb5FfQx5M5FEeroZeXsCqESGdrt%2F%2FPQ%2BisTZN76QozUcqSXNU%2Bv47doLBlAez5uioPWO%2BwiYRTfWvC5s8GeubLuxtvnGg5w9joSDu6PGNT%2B16E14%2F7oeV%2FNj%2FJGQYr8TqEMjITA8DUv%2FCwU5Yc2jPhJ2YlkUpwYuCGQTM3yJn41lI1KRGpe0t%2BWhzWzU%2BSfE5r7Y6ZIfx3bUcxJd65KyBsCEXYvs2usyjr8Kwn2c9EPLzacxnDfGMJYkLxV0BeUGVm%2B%2BUfwUlnqy0WdF%2FPO5yrdeC1PzcSHk27yAYXdOJJb6XCV%2BVMtt1QKRIVivATPqnQ7nbH1ponjdCD7xwizdO4iLntIJHIBhUDDwMJyLncAGOqUBVII58Ck0729DyJ%2BKwpzz2acEWvRx6AaZ7SRxGvR15oDh%2Bdx1W71lltxziFlLlYQP4M2QRkBTcmYiadAvIpVDDHIVEc3ZDSuglypw6eT9mdOkvtBopi3pgIORn36CFdschGyD8G47wi0RsgT5wIn8Vl2OMqxUESIZyXcmxdOfKE6X4hIXf7UrNPTU7QmtS6Hcrp5W5wxv966VNwv6FB84sOcDtYSZ&X-Amz-Signature=17dda33995b6f82d262f76f2fb69a84314a2ed18d2d697d6cacfaf8f355ec3de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
