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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=b0d47cc61bb8bed97113874789747cdd2dee86eb8165f8a0abce144f45b5c0af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=fc65972330052575032e81ba358504a406893f4edc9f96e9c3684f4be1d48719&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=ed0c85fa5b7f44f3ed23d13dd0486c5f44273c67204304a1656c735a53e54f52&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=246c1a42304d92b4382273e1f1ff8729796887d7c1cf24761f1186c8e938affe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=cd8cca1d169254ca94f5386c17035c039dccdf0724776cc7bdb1bf3e1eb87854&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=8b3e597d7d550bd7ab99748daba0b18833d9b6b978ba7667f55217e92d95fc89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=716fb2d951ddc7863e3d78ffd63f0067e27df78b3e8acf59e534783df080cbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EL7RS6X%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjA%2F7NcRiB%2BN%2FNwUHqQIOXR5AUntuYytl%2Bomt5lYlukAIgA%2BJgs6vgvf%2B22TqvVOE9CfVxSE7mvhJAxey3c%2FrIEqQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8XNvMwPNBFdN%2BfDircA9gy3SGkOUHIqdoi8Z2veC2b5j%2FX%2BDOlHr%2BiMgvzYG6%2FzXjj7TNIXfCaLfSaZ%2Fudlg4IagTJoPaDiahhZILoxdXeHqS8eNg%2FqYYZmUTs0V8ITqkw7gQYoiGGPC9NyvKKslu3RfF8F8cv2w0o5kjL67l2wat3AtuLA1p3gYqG5jDTJuJnK8hcrIvCbAJ1qk9het87WX3upexBPX5F40yOhhVoF1oWtvWRtBbSb%2Ftb15TcOyeo8FMlspnJrO7kShwR04lcOmNuYAe2RKc5yuBpnNCbXxoM4SArJnQkfocg4wdT5PHSEel2tBVM2oO7xtXb6FGxJFbwUgvhkc6KhdumlFJIMgBIY0Abkb9rrO7oG1s5DSIIg0uVlcTd8mbn%2FDLxyaLJDCUM1sh7F8RCUE99CfrczuKUeYeyRDsOoaxZzjnO9OsWHxHqLTtWrv%2FxvVJl1Bz2YHNM%2Bmbx6tXRvZPbx0HN%2Fe%2B5jRH1Mz8oPrj8SuPzDyCSMKoBJu8FvpG97cC1tFFEpMGVrwClpm6P%2FFNInkM12jhNqxE1e5tEAIoEuBGOUnD%2B%2F%2BraRgPEZESg1l%2BqkGloUuutxNQrl70Knvpdug3EeHyhP8ODaBVy4DFqPK7AZ%2BCBNNtCpPRgliyiMIuy4cEGOqUBigIPCaWRiBYu1jiH8HR3RjyDB0wyrXcXurPdNU0kWRo30noqYfE6mYqxyKAHsLaL6Z1CvTkuY7%2BwPgvIVbj6uLr2axhG%2Fgdnkn8d9WkCYTcb%2FJTsIWEoAKPMIKKUcKRd%2BTEBpSuykGY1HigxFmnK6S17eEsYHxUDY2vHZb0LBPOJa9JfcjFdxEHGNsbOAOXbetXu5ThFUnbyfaf%2B5FPppk3wWz3y&X-Amz-Signature=e6d2342765649c2adbffec03d895c85d83be7fb50ca67a6f9eb706c089ade4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
