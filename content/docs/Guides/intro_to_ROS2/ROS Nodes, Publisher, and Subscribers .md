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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=c8c2bc6d3b7b2c8f49777563874a722314e9fbee70436037c533e8409daeaa0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=de1f596de615f6fb393c6197f223781d582007f902dde5aeb426390ad54e8f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=d6e78c5c10c85e84053973646296820320ceb65ef1a36c460226ebd166bd6f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=e5a0098ed72323d0d5f4a751598ca526c731a6d0c96ceffbf181286b2921630a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=8e278fd1ad660d878a0081f68e8c256b8ee5709bada39441c8940b25cdd0ef52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=e670531a67545d79a5cc4957f59b1439ed63232d0b24b932abb9736229ee48c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=665c5887476af16d885c1842f847d929d481fe63651d7246e79bc6bbfad9b40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHYT5K4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomxyzaRBHdXnrMa2qQChFKpqPiAEaY0IygxFGJAc4GQIgBRi2dAPAgRsiALhiztTljqhkoBoZO5x%2F4NujmkyWZPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCeB5Y0dX3STcIjaircA0jz5%2BykbfuTe53Z6c3OvALW0MO2sX7QD%2FJagubwQHW6P45q76toJjISWs2CihkIDIp0WuibMYNYhbpoCrQh1LKFpImViwx%2F4aD0UUD4ZESiLP1IltFY9Y%2BJOU%2FzX5%2FYqU1e8etmaQdzUbrdlI54mht6Jc%2FTgGS6dZr75geMqYF8iZDHSdOyqvdh1r51fbjfCYanTvqYWJAivkJ%2Fwp1yOFcGKKqEPUX9xL29WIGxPJxk0OkdHA15dY7q2n3KBbtxda6%2BEAJ%2FAsODd7TmfsB66xHbCvrWDo8pltk8juDUVGL0RWuUdt5WyF8ANRYk89BR6lR%2FuQp7UCzB6sf6xTrHvTC55ZKaQuX828Y%2FGZgj4F9PUy7NzMQMMw7TKosWsCXpKIWgdLri5Km%2BnhfwnvldiX4mpOk1jPapL2MVkmjxitaFFBjB%2BYiD%2FPYlgPCdV4P7PUOdjBaUl9uhhVnOuOkKljGfN9r5sAGiewFyOkM7XqCiAOD5cQPKS3YNhF1AkiHZWbJIKWgG6tasUGIrYuP1oPF4oMae4kbZ58UQ6Py3OAYKdJ6S7vik1irDWmO5IPyffHgYxER%2F%2F%2BtWzkFSxD9QcWDKeqF1B3BJeHHcZN2x0ef9XlJjJXRnnrLlaCA6MP6bscQGOqUBL%2FmZnNMCiiuD3LZxVCDZLpSivUfey%2F%2FCVSVZGBAMZlRySsIjBkUnAZbP33XA7cL57iWFhlm%2FWDHM30KxTY8gNW%2FR7lqpot90ZSR%2Fg4xyroaOzIpq%2FVeixT5HRFGBzjfuBCLPEiYzv8Y%2BidIzyknxdyRDbGB2fc0tB1tmYYeZryqdrdBM4jvp7hXOE4mj19oktz9K4IzqvCAAR%2BziCYtgcC1TG0jB&X-Amz-Signature=66879d2e0e04ea7c29067f56dce980025796a5bd6ff15b4eadf9a47037458666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
