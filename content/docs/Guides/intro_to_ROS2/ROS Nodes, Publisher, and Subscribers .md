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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=438382e664ee41820fe3733b088699409400ccb9a60e92f750c90254e0a4bdc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=3b7813e766f3273838bd96d45184c693bba2cf22f2a8124742620efd4665d35d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=3c951d6a6da2a2f5c63711f5965c31ffc1af7a08db561a7fcf47edb354d1848e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=b9a8a04baa2d8a7ed8d2a52960b8c02a5c4c5997aa8052bc7b27fc9a99934d53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=765ce0f5864d8f57386c5d771a92005c29de9b83819bf65b9903be71a305d6d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=93025b2c6aaf1d1979427ad39374a7d273c0d4b3af2474e0138ed2ce249c9a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=be1dc1323ebe16adf7cecb69e185c9fe2acf32e51a807b2fa8f0c034b005f96e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV5OA3DI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGpxVJo%2BJaHWmYpoPSw4QnDJZHFIXY5UlWWFbEkAsbL9AiEAnJZV5kuh3f%2Byjx05i2GGtceb%2FkZsHS3p1aPeE201Ci4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FTxPleHZc5jnXraSrcA2jscWwM5xISFQV8Mpe2wobav0poBlX00n3IVvtqnDN05KaNG5rfB0X8OCN%2F4B2Gsxr7mVTXDB%2BKSnXtf99fabiKkiIWTfPho5tz7sJZPv0AXJQ4bZRwOfBIlJMajMsjp729298l8BjBto%2FrbNqY0xsHIvFCC8OKLQJgK7sMtGD%2BUjWt8M34HKt0YBtYCwu1%2BgoMu5j%2FlzZoiz3InadVy2CVLo5X7064qVuBhBlPM3dhuPUd5XrlC4UxNJxVoX2rok%2Fy3rJxs%2BEkcyAvvbNrYjTkHltByC9YAoNRombDGOkSlbI2c2yIJnkSvR7oEJ65AJZgiA4RIx2VTNOl2H4o924p5r53TudmeAnwXZdgbX01pW%2BD1OdrhKKnel%2FB97ZylUBmYqYVqyL4r%2FXY2ephCLXKUs3QEcvMVImjYZs%2Fp2lyz8eg1KqNkfJQnmH0GC1f7wcsEHk5L%2BbmJz7dqRmvCmNFkPTDqyVjFUveNR17KLKymZCgysFXBDrWjBBh5kSsq6SRvqI9ybrI2k8WaJumujsC%2BWGgRRawyGELvxaZpYBwbqo9AnBx5Y15hj2BDo0cpMOK5tnzZb%2FsJMXdM2viimvUgdrEsqG9KMAscXWW%2FQk4%2FaLtmuJWK4asOAFjMJbk08AGOqUBPjyyNlNe4ok05p0zP7bl9V7gENSoyu3QJXSo6ds5SML4Xh84zl%2BUKKjhSfycFMzWM97itX%2FfT%2Bd46sL7Ytw22qUt5DFveZtaQH0wBXEtO3Dxa4QHtN4O1MC2OxHkB6t%2Fo4mhsppreQi20IpxOELXPdtf2LxnexT0P9YxS43o4kElbhFmOWFlZoeEX9wNl4b92m6Q7x3gvGZ0WYeWm15H9qYOQo34&X-Amz-Signature=6890270bb28c40426814221c5fb304444a1a6e09d758b63a8e1c33648f0f53c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
