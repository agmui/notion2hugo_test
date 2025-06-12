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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=21166dffeeb3e45166f4fcbd1fe80b0a48fb89452daa037d83328c5e3e032c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=f705d62b869e92c37ba62067a92ca890daf53b9e45c41745b4c2fac7612dbd84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=2d8bf146487dc033a89ea67bc38717489f05b4d71b8dffda2e93dd1243dd6c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=69a89b5fccc07857f380f7c291ec9983df31770d94f638193b115e75ece24398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=ce3dc36bd811199cbd4cc0c4a3ad939cdd401035124a320904968c3b3a6ec8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=4d1e01dc9d358d267ca428727f73519e454276a028d02c0c5f5b915f61052b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=eab7d30811767ba2ce731ebb88292fc81dbe92c0d3ccc8dcb1c7336d2bf0e9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUB3KL4B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBChkfSwB4Y%2BEsktAAc03WoStAPezfOe1oE6Im9TbrCPAiEAkRU0V1PRbg8cVa2m5XhkFJeVeLEHece5wSttn2K76SwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiOmIqJj5VEkX2byyrcA5%2FzfaNc%2FHM4WoHi3pYtzovkemdcVDN5ZFryv1jsvZ%2FTnRjB6xSc0JrJMDicsyvshhBn%2FFy%2FScUYxIL37IJJleEJOby4qtxVFbk7%2BsYcilGskoWbw44A%2BsVJ97YWnks433JRzyOvotAdNAcWaY%2Ba1ki4tQmLPCmKY9fz6He%2FHTQjvD%2FAI2dOptH0qMi87193DMur8bxRIi2ZGCvuaPkuL8QGO7A7gTPLjsL2KLM09NGHp51Vix8QNzx5g3XIhinkVpABqH0lVtZm%2FaEEiS8L6n%2BU95inwder435z1PCLtUWdZQUwSRDeGFOyZlNr0K4UGPEBFRa5zB0GOJQWC%2F%2FooaR%2FTNjX925IQ6Z6t6f5zIZbHYmVgIaqnUwcXcNU69Gkpz%2B28oS7DMVGiRHF85cSZ%2FwMsx9lpatNYQ9MXA7T%2BhpzqsURZrcjcrpyq8lTKB%2FpuSdrkEhP43eW5MI1tcset8fuVwv11mhUFlgQmhEhl%2BWmaQHCYuDwcuI388qKEHE10vXSnN4%2FbMrkUJVYbA9uXZ5Stp%2Fc87BqHk7m3flT3ajjiJQYbPZ0mxaPDOirqrbzN9IJoOFaDUoXtxizpaeCU83TXfTzapPu6McA49%2FsEwiMRxdyuBh3blnEBTNqMMW4rcIGOqUBLappwkOh8rrNkac%2Fk1V7L0IFBM8vAYZHb8X6jorL4qoZ9XwaL45iRt104k5Tz8mLT1rwcOmgFsuLVaaagcaUP6bV%2BEVDga84mNi6DFB0jIplN6feY6QuMRlJ6uXy5lGTcT%2FTOMFRqlXFua4mUvNqnhGmi4S8VsaG1UU%2BeZ%2FXNmtPf1xS4M%2Bfzc0AZB5SAy6ifTz3nB8%2Bcb%2FQ87aOST0Eoa2FZHNz&X-Amz-Signature=137dab06340d9ac5befe9cb786350c37fcd79a6ce3742911a6f88037ab7f1f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
