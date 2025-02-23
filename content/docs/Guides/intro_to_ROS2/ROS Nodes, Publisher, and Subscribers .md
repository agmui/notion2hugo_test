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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=4e93df40031ed35b91553ac46abb38ebf8d045151bc50997859b31b7557fe997&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=3e1205c1487c8ca2ab4c4c23a3e6ef30e1e0311793fa1fb7beafe4fbcc4fc254&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=4fb23eb5a3b72677f20c0406781d231e5a87c860906c9903089369bdd7d53bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=c2605973c6159d9dab52e7ea2d9b255e708dbb512c60f4bd88607ce64e52d313&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=2d996c8600b63d65d90e01970acc90e8960cbfaaaa4b5d40fefa3714df73c428&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=8aaefe91c35cdfe5cad1c5d9e0431eb02ceed419da98412ff9a0a0a2265b542b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=baee2061523f26908f6e3fd038b7e6a61167617d6edf8b5bb3b040f422236e85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTME7ZS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FpY%2FQGcEt1sLVBV0zrNnzLPqYWpXE%2Fx4Qt5vWBeAMwIgALJF4W057sTRcZ7vCmUJ74g93D9KC82RbDaDHlImTRMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDN93KYK9nBW1xl%2FWkSrcA%2BFcBMPdgF23V8B0PFEh%2BbUdteLaxKAi6rw2q81eLBcj4W40Y5Pd%2Bw07zoaglBHU1G3LnhhqahdLLLyO9ktdz7bA0WOcQb2K3NybKqnBA4DLBPRCOgpJBvdgmyiDhEBsvQPeLX1DX1CDMeVoNTywvCpvsOiSSFDIWQ5aUsV4sndj1gsXMvlNGuHvOULPYSxDaDJa4Dwr7IC9fkEPhZqI9Hz%2BkiKcujJjlxmLYPcYKLrrwb%2FUKRvaxIt%2FBMKZmbIR5xmIFPdoQNk3vJNvmlljshrvXiw97NbIfRlHGzqTE4F21cy8kpds9PYmIg08%2FWiAh2KIqjM8MXlJl3scjO%2B%2BswAtQvwH%2Bflw1D7urmtxj%2FmLDVO3f5pjKH8joEwuMSQDRiF0HNoJrz7QWN9bcIzki9b1N3eTs3v%2BQ3DRoYihGWkL7zr3M0eK3folYBJc3Yy99eqVGS2zQa87vk2UrZGUx%2FTzOmnbDIJHXC8dL3UvCxu5FEz37PCYMyes6AKcjwkoeBd6IMD0H5AZ%2BsvkScgGL1wF99XCJAqyRCIYP9S69oKHHm%2Bb9E61j%2Flsc00yAcAYvS0GgLtPRYLJ2%2FWDcNgzXqMmU270KWcNzhqvUw8Aa9h3SJaeo0fKp0OKEo2NML7q7L0GOqUBYNl0g%2B5JzcAanr7HsduCrJVNALF8Jr%2FIFX%2FTc7Ytlxfcm5SVhDhx9foBFEdu3b5hypnHWkeRmt1fFg498tLjBI5aAhzc%2BF2ljRzP58bvBBC1qlQFYjwniB4UyCz690rws4Y6TkxJ3x8rjOXM0zUEqm96VCXcG7QMwWUppMc%2BY%2F2Vys1jPFnZ8PS9JbO2Fz7653Xtl%2BcFtpUA1u3KSN6ebb4ROnwG&X-Amz-Signature=e90b449708b2ad50b035d905863d8155a23e384e1eae40cb78a0dacdf132241e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
