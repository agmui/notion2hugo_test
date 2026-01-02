---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=1ee5cad027beb02cfd9b59cc2bb75223601387d4b256423ba5721067edc24aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=dbb3d40d20c5794b763fe96f5dd16ee83f725af0ff3c0a5854d2ac252d3ec6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=6f72186ba3c8b9f64eed6673055070b87a1df07c8093cacb51b4615fe4b2da84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=8a9347f15223b0982c7eb39c23c5801c02a09f1b764f75996141857eed3a5492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=68eb82375579304c9c9f6ea58b0ff1b0d413efe50bb7675af0bc0865b11379fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=6501c1b46dcd38fd6597e3e87d200a5493362f27f87aa9f59e6314f3789cc8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=78d1558815dab86b0b731a061c980ce5d5b985a196c126593b461f7df569b5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5OFV3M%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIGlrCKqHp%2Ba7GKFuvng6gxyUncgQKr3hJ8zIz0PESc3WAiEA27zwup%2FiOhubTMhAmnRAoeLbVzQ%2BdqmN4TRGpj9yZmcqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLubuE%2B8ps3DwYUg%2ByrcAw%2BGJmi8EqN1zte8uQDiYlxrBRyHyyaHk4njYg%2F37PibNJkheZhppnvcwzLFeNJluVXDDFl9qzAsBfeJQYFGjO7HpBPuEZReue1OSQncBKUS4%2BbWS29CVbmsrQI9buU%2FJo2DCeH4ye3OW2yGOaI2QInY%2FQ%2BMd0fy0d1mh5hmvhqvGV7sHYq%2BRnOhsiWD9dlaRxB6yXPKID8a6h3m217efdz839x87AZihXaPtnawIH2%2BtlJvBT1WEzDETv3Y%2FhiLYx%2Fl%2FtPqGMiVSvLvhnLSmkYYtPksSpu03P8qCJssPYpVyptqtN3Nq32v38XE%2B5piGiruAh0ag3v53oQGj8mf%2FMrPDUBALiMapahlC5%2B0K30QK3bT3FnhqzwPpD4fX1nDiyUklEKR21Qdsau%2BxpU66p6I5YkDhm69bkwlFYhWLeQbUy3lXiQ%2FnkggnP8y6mk1oCiUU5NkBSaobjEf%2Fsy97keOadcch884oTwXTuMBz1MdaIVhbqKXP4G%2BbN4cRblee852%2FjpZFgQ2O4%2FoQUmPqZBXmt%2FvsWu2xLekuEN7hvjFRUnAtXtUwAlTDflU%2BZx2Zdb884l3Se4ITD1gZe%2F3JSwY3%2BnE%2FzqQbvpIsBX9m5dZoc1ftxF5ROV4aEC%2FMJ7m28oGOqUBfYIz4ClZMzm8SDdJiI9YN0K3P9MMPXK62j1P66wP4xUI42w63xA7PD7n8s0Kd%2FDodXsYhmoT0TZnJOUSCoc%2Fz8cuQjOCibysD1qoV60uqdrL1oDawZPCnMJjzY7Wp3z1re81G412seOJSPvOYCoCtTQVDlHk0YjNe7BhYatW6s7ccUSu75gFmlrtDi99YO15jvnCk2rvL%2FEa2EvMnPAfQKiaqYMO&X-Amz-Signature=0134190c90d40ec994e4d9390c8eb1960015cb356b4d9e72942846e6078d097c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
