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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=fa93f5fa0a807f94ca64842e10cdc83598340893ad8acc11ea4e63fdafa7e0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=736ccf6980037ef83916ef3ba5bc4bb967aa4ab8490db2b610483c322e590fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=729d3eaf82d93e905a8a6ccf533c8ed23b89c09da06fb18ce2e88ef836818a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=a1cb7e790d7284b3399bd45b7cbb89858c3807c62d46971779806105dee34142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=9755bea69c090204a6fb3536cd07d45a8d902deab9ef5e820d34c80296a5f27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=d040b04ae812b6cfc75f37c2ff6e3ba4bf3f2a44a2313f2b3c0f0874798e486d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=ab4d37613efb07ae54822605d99f41fe2e5a65f8ac25eacda0f4f90cd7e8c76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYF2GIK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDIETAhQwDMfQFgQgpFxXrxtvswaAsndW5DO%2BC%2BioWO8QIgVUoZHrYp2FTj5lnk%2FjvVFvgaVNUJ8bP8wz7%2BLRshu7cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFIzMtnOY27IJ1aUACrcAy2MqMkbblJxlbHfqv7d8yf%2Fe6oDpo14D7nLeIwbG%2FJkQGgjBI9eoTdeRXTbHrV%2BQipe9uWGk0HpvD0SjdD9iJDj3T0lvUqPfpYpEL5GYhbASdSb2uwdzfjxelyedHwNTPwTWoQSF%2FXsMgC2J3BuSs9oF0uw9lcA9LBcB3rdwYkd%2BZ2HCDR3G%2B%2BckE4L6UCco2cybVoi9bTErYcR0fHNO1Lo3z3PRifpmoDW2OuyqbQJPtFRWvz78UdeX5ajCaoZQORh9U%2FsqhTvXt7ZvBQ1NnOXsRaz%2Bmjewll%2BY%2FtrGdHOIfv1tWGDCgYc5kApQPVmGEDSDjnZKcZE3RBON%2FdN2eKXiTMslj6wt07nzaF2hqxrjlCnHrH9%2Ft5aBX1GrbwgazMQA7m1OSgugi4is7p22dzSSfw08aOI2H6QN%2BhYuu%2FC5TxNiICADxilFbHdVp51eZ%2FLjjOR1F9ciDiRhMTp2Vz2ykHYNz0mEttqC5OiMFsSMl7z4TCuPwgQ5ZQiORnYCarrk3samBvzbGBocZneI%2Bzc%2BYE%2BmkNcMaj2w4a8%2FdQFSBw3Lhm1M%2FvJp4tG472O6fmWMB095S%2BHXcEmW%2Fg1AE4169adPcrZHmZBc22SiE7EUhto68J75vsxNRw6MNu3rsMGOqUBRMruy7grOR4V7oK9b55M4%2BF6VkiyWyUucWWhuDrv%2BcmUa3xK3dCDJUAcaAKM54Kkp5NnAqpZoVi20d%2FsF7MPLay2JLPejVJvBGa4wcD7UZHyCMxTCVT%2BWoBj%2BlY3m0n7AqUG6Jsn0%2BmIwM30F%2BpyzGESWbg2STyZ1WhcOUzwW9%2FbB5osH1rCGl%2B%2FxYHVFT6PwZA%2Bxr%2FqCyUhnP8%2BWEUr%2F9kGadgB&X-Amz-Signature=9ebb0c8cbf3f256438b7f60b32220d7514bb463730ae0b804b103c0be43249a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
