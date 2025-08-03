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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=43bb29ab9908d8327fae29512bdc3fedb9600729f831e0bd551e636aca4112ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=19c5b593455c26cf7049bbb25fd00f52359ec276ad02d85ce351d8652a475472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=831042272a654539e23b91c4d2d2fc613a64487aa30f74c5015689e1dde5f378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=ede95a02f4f7e2d73e23bea7fa056c4220eb4baee9e5a83df287317df7c38dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=910055145d14f9bb0c8028d1861eea626275f271ab591bc8426e0dee6d20d3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=506ea181a5691aa464e33137fdccb093bf9e516dca3b0ddddf9c0fb6fd8a938a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=e2df24286086b3470fd156d69f06de7b4fde492dbe6bff1b39defc71172defef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXER3HHL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmNh11V%2BGn0aroUxLs%2BoGDIAryUFyUvWOo3RqABFyygAiBI5Zyy9hBcv%2Bou3sz1Xs5XLMykvCrNZ0nlOqMoSnBDrCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMwZddETNHu5IgKVSwKtwDZFAHkwNbgHqzpUu%2BYy3anp0JBHfif7AMGNvrjI%2BW9xT0o9Y7W8pJlYs9VyNu%2Bn10GB%2FEDXK2T4%2B1Rq8U90o4pYS21fB03pcxtAXbQkpbcEm47kgi6P091qlE4cz8xDuO9q5W4ecoMW2znKhlRidsXkDnSWeRkLRvdBiEHSYEU1AWpWmKIG0zy%2B2QTn5UhV4S8LPmP8W2emvz%2B7J%2BS0zFwBw%2Ft%2Fzf9TD9Msq0box1mp5EA21S9wbI2ejnH8Ns1lAduSCsYiaqw1%2FpGAsVwpTOaOaUZTeJ3RF49ihdJinPIVBwiNVXN0Jvc8D7YhGTSpsX%2BpaYnCMn2upD0Yy5RxzjjRFXUAq6MspC99dcwqDdw8XEt9p2kghL6yLsb5pcipegZd6nmOUrFY1egZkGlb%2F4qEtzCX5k7yG1UTSV5dMqMgL4xeYB5WQcsJ0GFkw8a3gXD3m6sSZuxJPSKPXYiXB%2BAygfbVsYiP3ScaLMwws1wsJDR0TNPYFCYmWEX%2BTDFNhPR8lrkuDKCT0RWlXWItHHgxLWQnmFXYwMjCcWqCOGVHIAhcdiCmAGbbPj6ogbK56FDHH3BthRe%2BdoIEMP3bvS89yQ8p%2B2UB0QpQCkFWnY1qI5R4F2YxJzN%2FJsbmcw6tG9xAY6pgHqxJ2anxN%2F1VgNnnxachsvY0ejq6Ar9YTJ5xrYw3JfSn6SjW4%2BeJvPL4eXL%2F7qJO5EiMl%2Fr3R%2BaGkfSaiVuWDgbIay7dB2icDs6Y5PwtrTyOKKYKDVt8%2BuNwsFOnWhnYC7BFaFdgUJ2L3EYyyPOcuN0YO8uJNstPHVcqTvvXHzzQGmQETL3F1DgDS3uvVxiq4K7qqjjnnK1Uzz9D%2B7NhJkcvcmM10e&X-Amz-Signature=b6690448d25a7514006700459a0f1124d4731ed848c9f90f9469d1e1fc9ea317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
