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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=68f37be085390b856f7b1cfa3fd97f3d440d49c1e58c7b34290e2064f3a64c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=f4167743339cca873d3ff718dcaf848e3b9097878bf7a0c33c7c67a4108883e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=fba164a5a027a0b16c4a251ec755ff96217d23166e00f71795f94084d471b56a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=cc3873395a2ed9db15fdf4cbe2982be2455e40349db68ba67e30216526609c89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=36ca97147f93d72391ddad3d19c05512d98f58d79189dd69c7ea460194339150&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=a63d40c8d9b141bc0eb5649a801821f13deb4a1b1b5271235ecd8f5700f14f74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=7a4c79f42dd8af5fee853efbf17bda657560bffb50948302129a94745a80d839&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6Z5VCL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHjZ%2BXDsoDHdGZj4Ma1iinZEP506r4aK6kmxJR82%2B7rwAiEAggtWfUIFbDZeZMFEGn99vMAMbuBFTCqgWZjTwvQzPxIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKD%2B%2FSuT9TNk0CbNACrcA1efsn53QXxexwnNc3ezdHoe0bwzsjCDDVN3Sv2RPg2uky5Iz56zX%2F1C2TvfNlSpw3xyPUdHbhXe3rWeHOqxFi3RT%2F8Gm2B78Q2W4uo7miZUFGUsCRdZikVTVNwt6V3TkL2hPRkpJSI%2FUApEvW%2F%2BUJlW9%2BcDwDXEWWZ0RK1kAzPKsI8zhyAIFEUAl8PCvZqEo91ACyXQ2R%2FLtjtmAVoo9299h7yA4YajDw7rXwlfsYBV5C6EqHuAHp792L9CdNKM8BtEIsUhousllDG8dZz%2BJLMNPnPXJSboF9RuUstbyveCWNMAHenNDstPJMJev8qzYWc4rz250eNO0e%2FsM%2BaA6KVXZ0EM8Bid0W%2FQCVjPpGIrSUV74ZMiMjJMvc7F2hgcYzhuwb3UYOk0Pz7pdePlBzZVXwn6HaoJ%2BuAjRiLun5V%2B9%2BoqYyt3XALpqEmL6O7cYy0feqjHnf%2BqiIaCAfDUD3vtZNxA6u4%2BVBFeEICyywRXi3NLPxAStTJ4PEy3RV2bgpsn%2FCGFHPztr9U3YqI7M5evpo9EycEaoSn0lDeweEo9oSfGHG29gcROyFvnqT7IhsaOKDRhRgZR6kQbdGbnBo%2B2mi23um9Jfrd0GfDjvI42YNka7b2DkibW4R1aMN%2B8%2Bb0GOqUBesRbmPt0f4BusjLoLfP7x2yPwvS8qZBkxKFnM6wpnSNtwTtEmCQhXeBE%2BUPYts7%2BVaSpammevQ02UyAGyz%2FyDn8LAJiURugIxY8a9O%2FxI326S5D945G05qLL96b7YRZAWx7f706ETtePmP%2BapUE4NxyemLjs0N%2B7VPwWfFMYeicd%2FWX8ipSyI5RKqzlOKmvAr%2FBYaoTSaC9lpyZVeIprPHd8QQF6&X-Amz-Signature=826b62e5670ccb84bbf80009031097ac0691fda9e0bfb6b19555c5021d3da2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
