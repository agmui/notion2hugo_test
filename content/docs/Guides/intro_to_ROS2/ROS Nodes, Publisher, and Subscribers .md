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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=3998cffdf56f5ee4dbcf611e6cd6d1d19abe4323ee7e73930bb94968af79e7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=5bfcf37595c4ecc6ab3b568c8d1eb1aaf21256ded2eea544df3c2e50fce8f74f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=b19fbbeb89a4b36b36b3411b3728dce93d3673a4fa70a01d006e44292cd0c962&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=beee7ff9a7fdefcd7d781b3ddfb0f004c837134c05264ce7ff5f8349faaef612&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=ae8a18382b287b6e9abeca05a5f0116451b5329fedec0f61549340d80a032eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=0275928cd4efed83c82bef1db6abf15865585608ea785c9d47e3b02d61115afe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=86f8b530fbbb8bfc17ad092f817958937a725aab70b0fd8fcba935b8cb46564a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVZDQQJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDk43awdLLKkGmRGs16GsZRYXMiHm%2FPdqVRpgI056GdlwIgSlYq9JubvZzuwBvS92T7DdMClokFR0a5qpyQDaaN7a4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI0jb7UcXISR7O%2FiyircAzjf%2FvTwF9EokGiiuxNXufwDjDz0g7AXyXXx2QWOJgjgs%2BmDVeM6RDipL8JsQzbleAKH2LKtNZXFtdHJEn3LF76d5D%2FaxHo5mrOQPaWSSpTJ6vh23VzlERUIW7coOfPdawu0zRN22BFy%2FmLuChS1KijXbvADVIrRHgjxpIdA3RZahxG1FOutGIcp2Fg5yja6L20U2825XlWKn0q2lzYz%2BfAzx7YzKCgiFCXdXOCv%2BFQk0B1ceavAIxW3ilGjPDDm42fzuFAqL3w2Tvzk4%2BJi8F5Z2EIfttXsFEgitmiajxldjmc8eDHzYI%2Be6TKwOCfVvhyk1m1jr3sTT%2FbcfivEtDHrJSnfDktO%2Bu%2FfZ7s9ixomdElXkn3HHaBwo3vdR%2B8UeeO3s3qpebCmnKiMal9w0XocffFZaXtf1Fk8FMMQS138O2WMijtU0NEt8o3FBhD420ICg7e2CHZSfQ0Wp6aeshh2Vwz0DDi4RpBlhkyPVugf3QxsDvzVlVaVZf6Sy%2FLwr%2FBRn%2FU7vDHoW3dd9HlsxKe6%2F%2Bta24U82DzuKc5rOr2YfJ%2Fuk%2FkjQqTiGzaMEh3FWezKe%2BmrSeLs3bn4L6UVL%2BnM7RfnPieR%2BPWQ5w6fPaEBMpJFXlPXmCkaR9HNMIz4iMIGOqUBPrGRs%2FL411h%2FFgHVblpe0yFcJQ5H194Ew54SQqWt7JE6DI1xxmkhF07FtNnC4bwdQEVCZye7JGXMOe091aK4hckI2YSWs62%2BpTh5ihVQ2LUzvRWosebQxcqFGSnTzd8y3%2B0y%2BIigBzVbH64wtPzoY%2F19YJsqSx1cQd8%2FKjCiTfKIGH8lBkOcl3RejpeeZWW9KFuII61Rro0YZwBnMXGrMBbtgYan&X-Amz-Signature=37a29ca6ef3e31e1565d0b6ad82b3d48c1e896e4de80b645721b656b7418e701&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
