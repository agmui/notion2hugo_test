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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=be841b17249fe84b866a5570c94712a7bff22d07c43e8278e6429b94fefa1e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=53857daa286cf0b74970ada973c100e68817c8dee6d44d9afa976e5c45a34f42&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=ba56da8aa20b0e7722fe4cca36237d5319d04f1ea26aa26888835cdf846f229b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=89751fe4bc49fbbb4f17179186527f1c97279a2c2f4672c98bb694a663d4bd9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=badc144192d5a4950efd4fc9edcd7b70bcc751188d73a546fabf86d8bd7d33c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=121e5b002d84c939ea44c6616da3fcbcc3dcd5fc69224d2184fafe8dbc88d511&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=1089a37b4a2fc54346089073306825de99a0b4d6fbb5e63576695624c2fa1025&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHOXJMG3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYYwoqkbE2WwH7%2F2KjJj3ur3ihFUfDC3FQf4BIQY9%2BLAiEA1xZ9Ai5ryNxD16dCIBuwDUKHyjRXkFfSNTA9eMQWogAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJbLB6b0uOnyLVnY3yrcA7iKEdG4sM2agPdhzk9mK%2BJV2f5IkDDUJV8Yw6ec%2F9zH53BzlmMBh5nk%2Boqw3yl3lRRWIMptm3kJHQYculdxpQTBWhqOaEKyJFElz1TSonglNiPXLSieEPxetR6wxWeKhNTaprYiYV4u2j%2FBRIlG5CxOHDFGdOE%2BFsrt7GXz9V1eWAdm7HjeqNWkINzFeYNxXRoxefbpXTKkH3gwKM5V%2FpoNcvO9K6DHd%2BU7F49ovG1BZbDPN8W8CGIU2vQqdytwtqLi1WKL9Iq6el84C2b%2FfnXDc3YwTlBH28odmUuAunLsieHw8qm9qDaANglD9%2FJ3DEhsYGO8V8vIxNpnd7GFUjJScdyultWzRLm73i6mv%2Be7wjXJrxDyRnEE8U2nytbNePUbdsM1zyWClXhkWE92xJuC6kcJT4klg4DFggtpLw2IApHkg9bx4Hng10k%2FCMYFgO%2BDRyZDzVVqovXVkbwasGgZksSQztIxZdMit69xvgOmY9WCfrkPdP8MZRLw17x3OyKeg2sXOopBILQBCukYIz8UFYJ71UoYESR5ebrfjbUlLS2lu9JspQQG87ODjTNMm%2Bp1YhIAEHzitigpJlXUlCin2VrLdz6gy%2BFswGrhpPuvr96zW%2FlsjW3oQKkMMJXJisAGOqUBVv1Kfk1yplbgXXRYVpyewf2spRgVSO7uK2vsfarodsH7vpCtgTqi3%2FSKFuvm6LpPxH%2FidATZQpXrSz82pb9AwudguJwi4kDu25FWn7%2BR%2BpwOam65TiDECFFUt9UVI9z438nDbUSYwa56QS8ekbB5Y%2BpRbGnZC%2FDjNm0eax41M2sJf%2BYS3CvxydEnf0kARaPM9LB82fk5AD0CZkcgLEWZgoz0O5kH&X-Amz-Signature=5fb4f2ae3c4d5af8b4876f32154dbeee03ab7d57d23d7aebe1814fea80db56a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
