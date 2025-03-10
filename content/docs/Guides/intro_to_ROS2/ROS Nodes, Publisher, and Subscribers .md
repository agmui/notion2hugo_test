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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=db976873b2647d0369d0b884d55ce202baeaa5d35baf6c1f40349eb325782907&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=9cebe32df95e35bdf9cb464361fb376b45bf04df4c026f1db706e4b1f108a13e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=f4466a518e4c7448effbb8f55e5a7f12fde14a0aa6cdbbe47a3d3af1d25c5ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=64cbb138a443167ebbe2d52471b08ca7a97f25457bccca842443f53826861ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=5cb3af6cee5737de3f921cd7eeb241859a46bb2b157cd762dcf0069668c49fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=593737df4eaca51eafcbd5061ab0e745298c69bc91007e6c7b2ccabc6e054406&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=cc399878bc8211e4f8b31ad44d52486c9242fbd83e02fab9a88cb9bb1777e4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7DB6RLQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEgGXoQ9lVNMLv%2FKTS0PkHZ5MVCETkBfYXKEvhwAZvbzAiBtBL8xaUCBffol7zfoIkG4iTNAwxP5rq0MwzcSLxWbuSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6J%2F8HamO7uUMzmrKtwDzNjwW2T4MpIAB5Nh6Dcu3%2B7NnotJAFnNLLXRmarG%2BG5s1n4LeJ%2FyxaPJoDLyn4SuG4tcqBmyFQJaDnRWor5ozr1ERIi2AKY98LB2RT5BVRs3jOn8g%2FNDiPrUBVei%2Bve%2Fk2vCtPWnLk%2BBm3ZXUwo82LYwpGwgg5gu3BGEtJ5JGEyUh4%2BE5O6M8NSqiIB1LGEScrBEBqX%2BD7HvxT%2FH1iVuiQQaFpPSOCy1gd7GeeAvuqZrNnpr%2BonvLWhuAw9orUWAT6d5MX%2F2L36tKcXSvkgluK7hWNVdHcW1nOfJ%2FpWp8wGEBONfEkAzLbtk1NZZX0yV9kBKiwrun7rN1mYgbuEkk%2Bk%2B6Ijnzh5%2F1TJrZxlbfX132Oiig%2FSCVof%2FrFQdqr5anMWjtUTe3rKQwgigj6YibKFc06NZALvmMmmfsZ%2F3NsF3SY%2BUlpPxlO8lMtoxQNZ10WfHHTlis02LLewodR%2BjTMCgqGyupNusdLGwyUY4%2FjpGZJjHsDbDOsjq2syybw%2FXHebISKH%2FLWPozs%2B0HWhRFCN%2FtFDbl1yglSJwiOmiX2JShf0PM%2Bo7jyI%2FLaaXvUgyiYhrKG1vRB%2F%2F0Oa0kdwTvBv%2FthfA74JLNfTxQAkpMeHCrMFy0bFIvm7o6y4w%2Bay9vgY6pgGOZ1qMLyZtPoHTaC5AOMausAhrEfEKVQOqARJ7AyBSVPZ0lh%2Bwxwd2AAKTehbI%2FJbJ9XaSZ8WbYl3lOQxf3rpvmQZgrPTwXnP15YfkN66n4uZ5PWzUptXrUN0k44LK0RanSr3z4lh8cDgEsWBcl9vPfLcUVaNTr2SDIMPNTf3rsHFHErFK7UIHMG5IMOOJCMBkIDL1xZEAnewWVWo1%2BomppCbhs%2Fcf&X-Amz-Signature=1108cc2b688f628d0578ffcb43a03627c6275b83a09eaf5748c3431d50b80fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
