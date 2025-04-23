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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=8e151246191bee417ab53ad5130dfd7a0609f32b96f05632f04454ca24b406f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=e26a2029e1a812f5fe9585063bacd971842080bf10b46edf53c921a70705ed05&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=bb70c115ef895419b715dbcdf4c56381a8fb6edfdbf3d875dead36a3733a02fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=7a72a76ace50c2d172f2733c0318e839a62fbb19cf6bf6b42af0585cdfaf4f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=f77a70d18a490b05a5a2ef000dd3de6f650ae0866f592d4d508c9fd51a1efe80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=166dfe91e7ead20d1c18aa91bc45a3204b9a549c0ff8f7aa52902595cd856ccb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=6039f275c2eddaad180e302632eca8e142d56a62350c9575ce8a8d191cb2a4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEPG4ZE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHgBl8A7DClnSEa9uxeTUjZP7n6%2FBRejoqJlZYWkYGZbAiEA%2B1zkBn%2Ff41tTEyay%2F4CKDHSnIisc0fuIiOWPfGijIFUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw6tE5iUBIiC%2BeKTyrcA0HuyJQCluERG%2BbTqGCx83K%2BZwIh8xP%2BU0nKSD3woKvTDZAI6dZ%2BWOSZz4V%2FJlngIXcT9xF0laSDnDTQJeGXsvSqUsrAmOioV6pWaVJ21l1g5FZcHYa7VDNZgztxZ9svY5VSY2wig65qcA935ojOKG2pldNTFMWnVnmglBZMJTttMSvBWNhTMDBm08vpK1dsoREra9ecsWjUO8ayB0cRr1%2Fo44E4%2FftEVAp8NiXRhnQoXiVCLdiJ3hTZlsNeL3zgm4fHnQM%2Fowr1sNY99Sow%2By4APViPNrQcOt8BrpaEObrVAWCb3lFqeflF7hEzpUYkz%2FOWhEVifVddJ%2FuVa06FCxjBxZDZ0sCdFRGMR1sA6l0Ia%2BfN3%2BjhS7FXYlSKFkQhzEvYsZ8Px9HvHOqcx2MYQ5MlFxsfF7dYHwmb34bAx%2FgjrNSZgcJbRAVjq0o6JVVc8XemrL7Y0zcWN9ZSVOh4tSC3m6A8AqlgHGQFG%2BKhwF5Q7Htay1%2BbmuGHMsYrshbfegftVOkG%2FYhwWtcAWTMW2btKoanauuahFTDUcURz1KOJ0UDH5fWupumfm8Rb3JGof34lVTjaZJMAHo5znPx6lKdVFKUPoKAB2RPs%2FLdePjRL0aeyodrKa3vRY%2B96MPX6oMAGOqUBSv9yfVEe3D5txDVCnnPPtWxsS2IA5aCWqt0a097irYiE%2FmeGodGS%2B5f62PO8k6DscAUzB5jnqsGroKUK2LXv1i1XkZWn6TdiS%2B4T8hS%2FQNow33Jg71OCMIKdn97GncprNoc7rIIY3YdwZdRMTzA1GzMK72st91mtMerv%2F38CtNz0mjPAtC3v5JrZIoXLy2JRaUDRKCuonw9f%2B%2FziBM1ZCCFDRNSf&X-Amz-Signature=107feafe63466bc20787dea14e68baeb36c4831894ed27504588d10d7954d72d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
