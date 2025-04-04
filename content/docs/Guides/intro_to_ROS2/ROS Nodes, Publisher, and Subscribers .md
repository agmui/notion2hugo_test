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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=724ec2f36e13d8600cec9400aa9b82e77761538f82d511dc13ccba6dc6d19fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=16960804357952dbd2fb6bdd928a093d5a5eb3e8f5f32bd9c2793a59a65adea7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=424a65def2ac679a32f542bad5fc45395cef678b79b6cf2644c5f8aab5ce9e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=f588c2f2ff0b9b4bb0ae5acc16788990fb847aa6a88794cb62c16e95fdc6830c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=54f722a64fe3e497fbaa49b610b5b08f47344b95611303775d626ba11b784bca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=1d4fc35cb19e84770239bf381c8c9f378a7b175a4f5154d23e2ea98072094b97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=5f303b166f383c594b1f069f5f267a4580cf2aff5b08a9e01a2a0885d3c0cbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPA5DJBC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDjMJe%2Bkh83gCkRuIhtcA43OMZwNC%2BqZxWC%2B7QD6xLhAiEAwNnmEp7cxx%2FEcQk6JOcXaNLfvD%2FGXaSCmkPu84YcvZgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDOk%2BRkreidVuk24DGSrcA7jncL0jqA5Q9yyhR35f077kK4AtDzrnh%2BXuBC%2BDLyQTEuOTHBkx5svf1TF7gqt56lKMRKEGvJaYbA2YSROlVDuL6mAxGf77KM1V0U0Fd81KFi67Z66Fw0Onw%2F0wRM7pE1%2BPPpIpjU9N%2Be%2FO6iy9GY0wU0nkBI%2BVOTrCjLHPIiXec%2Bm6rCAdkMB1%2FVnuxGJOClr39BvYIYLjofavdW9SdMkJa0D%2BFKzCM8ZxETlfUr99aRLdGAB26uB8eFBJ8yypkOA5YCEjVEtEgDilL6rHP2dfblUNO0IhG42deKjC6xbaNXyOsaKPtR28zeN4%2Bynuw%2Bf9Qw5ICjhCIJbjbef1K4sKcxXoGx8FxHU%2BvWYoPm3q2lxXdjD17%2F1SN%2BQBaLnQKcs9NxDkILBhIAc4ikHd4xBcnMGRo3UHjaE3WTe%2BUzFcv43grhoNIT36pm18agrk3qhiasL11ZEPJpWMzm9%2Fdo9lABXFeoyJHs8lWsKEFuT7LAyvsIzlwjA6QaBf9%2FG%2FvIKdMZRgH1dpN2AWxYvjwcxS0swbVMTMKeaCahVlDeFJRfha8fGroRHCBOEp61L%2BuLY9fTJMo%2Bo5eHjXSoHfShRHMtPCkgcyIlJMLfmZSxi3tSqimA7Uqd9CwCjBMN%2FTwL8GOqUBUfa7oNmgWISLQoTd%2BG5z7hCEr%2BXquuzjtGiL4NQnk46vdsSYk3tF0LNLuk7wGFzvLYUnpVSRkxfgwU8OMV6MOc8zXXO4l6rJQSgYj75KBtX0N%2BitNOIoP%2Fx0906DCAyoW0v6ty6pQ1StQ5Z2QXZzdzXy3kf%2FlZr7U3t%2BoSiaYkNA3wPpLju0H31gyFHvoRiMwY8O86wv%2BrWF7kU%2FCIzTIlkzNDkK&X-Amz-Signature=6247789ee2e55c41f7f32330b1dce90b0749987db96fbe0d827ee4b95d99838c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
