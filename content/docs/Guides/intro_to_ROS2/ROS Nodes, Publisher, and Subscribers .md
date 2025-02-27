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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=84704e851f885f11e5bf4656ace16585c14979ef85f09982418a2d4b4166b4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=c6af84b9733fd65cf4ee6f8f66797b29b48986cfa8d2f8feda8f3ca5e27e00b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=e704c6e09f76c8565b7dadc318069a59249c76a51d8d6e0514da5f5ea6567d11&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=e968beda15c6534f27b986123022f879788734f4dd4bd871bb80d7365416ea26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=06d81607983f0cc823fdf3cad1a416e0e1946987fa704c7d99fd8d25ea59adac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=1661166c1b35950c9e09cc06bd3920b40c70b0a908217c5f3108fdffd6d84161&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=6001a1fe91a361585a89dbe360301f80e1098973a895c42d348e4759e77b6c06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TCUCIM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHaL8IviX1c%2BQVcznJMz0l1jmi7k4ZqHHwcWUVa3g7ZFAiEAvY3pX9nh28dprLe%2FsonKCffn4viKQtr8WRnYT4GGO%2Bsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDE8Lzp%2B2GfWF8Ek72yrcAw6hRd7Pfa9OtRHv7023nSlx2dFyVXDp61P%2BmwiPEuKnGiBha1dbsMP7iHKtn5Kzzu6koQgx48MmAS5Uooghy%2Bl%2Bu6MYQoTSZ0t97ZPnInH1EO0jNYJXEzsGvKotluinTnUtpQdVHQx2cBO6zN6RuUq4HTVtAY0IrukTBwXq5CbitQIzbJZ5T86SdoVlLSYF7LQ%2Fw0G5wcZmpzImG8FH%2Bj%2BeaawXeJb%2BS%2BYWGatCIgkvb8Y9ZWzbpxbM7i%2BC7H6ZB8idEmAwwN5W885YTGzgKAlOYI52laQq0NHhn65NOrzqyPdF1Oz4l9VGhRJvZK5YMKOii2ivjDJd4NJ8jxDrnEYTT40xPv7yxUKsDUCinDq4C9wSx3G2SrT65X%2BO6y5%2FS%2BZrgg%2B%2Fais6LwWa3BFZ5yULkgSDb6I8TVRnwfe8eRNS%2Bt3IJI37ibJvgjY1vw7LIhSYAlp2bvgb%2FWnrdiVIWIPPYxLMUdNmNlwPgU6OGE46w9N1jdMsbfaJHjJ%2BqACJDIsAwUV%2BJImFPmcWRUD7PH9G%2FQRASdscdt3wpMQctGk6OfTCdFsWyLjaXVZlTo6qKSSX9aVCK4R%2BkN%2BI%2B2jGWPFXC3yR1KD0YnwfTVx37Ki89u%2BFiCbtHTBBWjrJMOTSgr4GOqUBmAUE9Z%2F9xYON3y5dLuLV8eQrxRTBrBJEIngGTT9pGIfdRXYU3yejA9%2FuUkzEFHdc8Zgnvq1IA05gYPz3GOb%2BAhgRMGgdWFo0nwOukT49zfqW4dpf%2Bedi2wQwBwK6wTcpJDmRW4qYDmNpQwl4HuCN%2F6meNGSE%2FlpKqgI%2F%2FmYJmj50QtsZUiaESDhu3qV8vNLAAgBw2mcrH%2FvLx6ItUzw2mFZKFWJF&X-Amz-Signature=3ceec9fed4a3e889afa39e248997554850f33742aae209046ca386385479f04b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
