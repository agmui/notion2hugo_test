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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=319554ce2db39b1fcca3e90ea4eb9b8ef7670ab45fc7892f42d50c16233a04f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=da24adead2b67636d4b5eb5fa07eb16a1460cd11b1e7712f30ce3b200eec1d05&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=f142370d73cdf59354fd92a0403022ad48fff99559a7ce0b4794ceeaf3d237cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=68844142e8396037cf65d31ee19486c9297abe8a97ee926b0eb0052ab9ec948b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=f5042f2d4337cf60ec809f8c558b881e1d0abf17d3866575394f633a19c4070a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=7c594a18ef2166362f0022a67cddbd238fd5c465f21bda7d1c58d59e2559db43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=c6c96583cb9f69de0fc2ffffb78381b9aa8e1f56062cc3b28679399f23021257&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QFKPSJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhw2qJzV2erBVt2kbYV8%2BCn5HR%2BOBuGHufls8TJbvfzAIgZKLzpLvVHLgt9nqQGoq3IV7U34YGKv2AixB18HH97dEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMv5RRX5Z3gNs2ZBvCrcA%2Fqn8EbDyDwjk%2FwWaQPxXE0uoKD2pwGzjCdbxjOD5n0mrwgegmCrn5ZnQ18O0T1eyWV3KeOY4REVEQkNyhQrm1UsWqs99B%2FEbf7cw0k5tpEPuMqiq2IExYj4FBmbDye85Mv%2BfnXd%2BVnltN8f%2FTiGBWjJlju6xx%2B2%2FVGqEGsyH2iXrwdA3X7MnWz912VUxOqElDU7Ts9sL%2F%2BsHDHFMD6TtFehSVw%2FlYIfJAra%2B4ixMxra7buERjmSQMX43QjyWD3Z1RsoPSiZOmySGbIfSlciOlwDwW1I4opzovFDd2DN7WzmKcUOsAJRlK5DiWv5xi6fnwJP5WR8OHFX1cN%2FJ2zDbmUFe5CewYO8qM5KMyavcvnZ2nn8xwxD1XYJRXIy1fu0DgFjTIWpHgUrrdIxwotkaLQgJFeJzDKGXPw%2Fy8yi63n8Y4KG6M%2FyNoQfCLzS2nisdA2ync5Xi00AM7J82aBnL41zFUTF2c88m%2FvtCqRsKf9YOOZaFQP4Y7WjkEoieR54763hFOY0IWZi8pbLwDGd7rsxKPLJgcFJHEg2AsjFVeIW2QOcDgAUf490yIwuZB7EMnyPS7gusjZ4SZwE8YnI6eJMFa4ajVlBlFY1Fs7CL3vgzuFPkaYii2fcYQm3MIHBjsIGOqUBAe9EF0RJHCmZ2yvSBHNPw37KfOtdDCqwEnkybvIpsGytniR0spOifdUR%2FO%2Bu%2FVellVlm8BCKfy73s7gvddUt1Nu2UKIgLXR%2B776nR4dIlWuHCvaqX0YQr1qVe2Gn%2FSme%2BMTAuehtHYOGUDoIG%2FcJI5KQnkuzebBeeiI9mHi3viMTj7RUOnnxviTI1za4bgjzfdISeA7bU9aTOeZ4p%2FvRhR8wllDx&X-Amz-Signature=e797724eceb80b3cad8637167e8766cf2426e0dec71d1bd77fff3c4d486dc0de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
