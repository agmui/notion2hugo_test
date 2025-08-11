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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=2f8fb7e95063eb72650a9602f475e26c71765b45c2cbf9a32f4c4afc16655939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=9451f25fd3f1c1b9d5bec5e1c3df3ce289e804c1f7a4a2441f4dbc656279fd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=cc1f2a9b031591fb34f9a0addf2e252f161bd7f7367aba9e4588a933cace4dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=d07895ffc901c0cc1e56ec914432deceffd8a9b07e44d92dbdb6dd63690f6146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=0fc1e0139472badb978691c6c7611fcb5a543f67ccb3261003d3e29141ac27b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=4ec83ffa86f3f56eb9f19c77f39644b9e608783d1bddba4d438232b0ebe80642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=2f7a4227aae6461d68355aca5406041d2923002fe5b413ec630284b57b434e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUXUPJN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FQF7TYVkKdYoFSXurEa84%2FaWeIOZhkn5%2BWSPtApWpuAiEA%2FTzhlkbE2z%2BK%2Be99B00c%2Fa1lUqpGKoxPEo1qGs1vMn8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXt3UO%2F%2BIwosx1tAircA7tsyv943ivwwpj1mnubGWK2MyGdrxWk0WJWlqZttnCYM0Abie7X1rZDzjYlFyj9JSLnBIhOU%2F2i42EhWr4NJB0hLMDfazTzIpe7Xo11UCd95WYsSq1uYhB954AgNgk3YPvXVwlEKt1XmImc0FHpZOCQWMTR%2F5Gqjz2CHB53YaZ5CrqRp9NBtH7QaP8%2B0cZ%2Fb9x%2FEDVbcmnGh2ysldTk4w1wHmG%2FRcg5x86HbPqxjgDtMrFRFRBA69inQoZ7bgNd4r1nhxFcbQN9%2FUqaMJrUbr7FsTwRLhF7VXs%2FgxDiRJtBSCMCX%2BGnfHCqBGY2QuHP6uV4QQb%2F3nY0Z%2Bg6Uie22h%2F%2FHS5dChEgbUBwIenYpcp4MTS9Sbc8GtME5Tv3197e90QQfndt8oKQpCoXMGwZcT1us6oO6Nfd0PHGX0V5pgtYvQ06SLSGywxt5hFhDm2KZdm1BkoFyyVbzC2owmXiF%2B4alrtCnvzeVs%2FY22uBiXms8C%2FIhnmxk9Tes5cFawB8g3df7HNa6Sp%2B6zoBpJ9lgNpabGFupcaX%2FFG9kGCERQNfUkyTCfs4K4GGue74ZTYfT3mZsgluICbF%2B8hl7NtKalad9rCkNMUA4M2E5F3W4M%2BlR%2BzfEioeUWz3H5xmMOPH58QGOqUB7mbJ3DnjoSHPBxGqlRsbuCy57MDK50%2BwUxdcHZYtGBvXe6Y%2FeqfRnaerIKo0XzHvzxltLQkbPj8ta58cG4k8U7JACDx3ECi7C7SQM1ObG2FODfUzhkkWHSYwRnOYWYTsVdN0Huvx9Q2Iw1uCsUe7o10wRMSnnjQcVjRDGeetjjTVhRW6Dau28TSg7T2hbJyYIp4MoUZ6iuwDS7VKPT0XDpsdgThI&X-Amz-Signature=0e34e5b2a7f3c3a72bf7f883a2248e6ccab7edec23ee5f766ecc76e73064157d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
