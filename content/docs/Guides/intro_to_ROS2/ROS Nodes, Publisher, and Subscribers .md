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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=392a76338d6166c6089c37ef4c11d687382a1a4fea9dd4bbeeead6c7b9c2643a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=eec32de50c8c16027c84ebeb7c255355896fb88634a4ef0cca10aaf62ff6a8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=b9f42e97181d19b37bc9fba9a882be6ad072fb347ed8371eb66686294d02b8ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=c4a32b891fcac24898a1d386cf2f90435aa35d725602993f04f04660d5ac25b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=d37ab22abd149066217982886dc7b311288eba687a6a87446c95889f09b210d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=875bc23852354c32fbf3158fffce075eb8dc3559b67e81e0fe7368ada4f47646&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=2448e8ec7bcaabbbdab2909e29077e036cfd373203787fd158a38d9698395b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627JP7NPX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8CZ6sCuYSl7oAgVoW13G7asmet36BzNHJYkQF%2FPHUmAIhALDVEoP2W3dDx1hS2DAEeU25mFpsbF5eerhKADcwl21hKv8DCGUQABoMNjM3NDIzMTgzODA1Igwbz2AcH2pHj3zV3uYq3AOF8yOVBo7Ee4LnbSHMKtxj0uVllAtPzFqb%2FxLEbIx%2Bpr9OXDx2tB1WXlj4%2BBHV5Vd3tFFophyOLs%2FaYRYTYkDI7x3lzslr69Ixxm9VYAKgr3fawuMucReQmKqlIK8EsDADEpRYeHxQvs0W%2FzszSJSlJJ5uMBQiJOKxKVsJEnKXwAKc5f1UuEjFJYi1bThu%2FpD22FYl6jMlnmXGi8y1TPwspTlu%2FPrsFmg0pjCQkZMXE%2BHKDvA2KYvG%2Fpi%2FNJhbQB5Y6Bk6ggA67eIiEsyJPX2mJSi5NlPTtpgKjaUfh0L%2F4tJ3LgpMMCiX7jjI7CB1P9x39PAHq5HV4algb%2B4DVejY1SiDTkVqKWo%2Ba%2ByWb1gsqDE%2BSianEN%2BYNsuD54uV7mKhSA8FQj83wOAphKhGL8BMzK0N6rmM4Q35FI%2BcAx577O%2BQ8rATY2EtMQIj79N%2FQEFnEo55DAxOaPqWcrbV42ElMCo9diEXY%2Fqjc3W%2BiN27mdfiBxMCFHmnhHTGSvlkU5jYzZN%2FxIltKnLNo0rHPFxO8%2BfBKJ3I42lLxGGb9rkb9PzJ%2BMAy6Fnq2rToxJGPVNep1txxiq0mdLuYVZJx6S7dulqCq1s%2B966pl6v9urDctOqhD3rrCG4wcnjbfTC05NC%2FBjqkASga6zCImhhyUpOoqUHXC%2FFkcVV8KxTcghxk%2BFWBDHK9I8F0NL26gcrrgl4%2FpC0A1HEP52RsuSXuFCy4fLTFgMiU%2B5WdkK2vB9vXtwcK%2BJFIaYdxFjOa%2BtPN8PIBWKnKt5xUjrIaQM%2FXd2pQFe4MM3pSZAsUMnkIydMhHy4xDhz2FNuxE85Qeo3UQF0VNfPQAycKaYlulysKC7oBb7Xb36VjlRCK&X-Amz-Signature=93fcbb8c3a71f070fc27b25ef3a44a70a4288a073a03e56d37bf530c16721d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
