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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=d4e0d038f6434b0841e368a6fc64eebf40b319a4f2d3051e3e291efbb60be736&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=2be09d3bdd1d70afb1eddfca6fe41bfbb143cfba35f733eadc42cde41d5575ee&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=18d0b5bdf4c7d1be1364e14232908db61133563d6ee81b36f05dc4b7da40491a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=efea2d2e2cb9f3d508027fff30e20dad0af30baae640bdc7b76862cfed13bd6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=1f6ecdfc7f6ddc4e043de35dbf3baa3c6c225ef8eff97ceb3a6a96038be46dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=af8fddad889ab042cb1e46ed6592fe2d2b538d78d1b412172f3599113a9e09b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=57d1f75b791a0d836a5b4e9aff10d921be0e777774a702959676ce13ecc29b18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOHJ6D3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQbu5hveGmwonKRe3fm0NCmMAn4EGIPINA396TgyYkzAIhAKKaV8Q1Q2Wz4uQWr1dHqiA5w4gEyFIabqc2mg3FF9wnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo7%2FP%2B2ywxDZhNGTIq3AO0eA1aTMpD7AQttpZY9y3GNG3Jnzq2N5lp7s2Ow0hMhsE3faV%2Bd0mnwlQ8RhCao1pNtyNlvlN5gvDxfra7tTBgR1TmnpmLJF0YVrDVwfTWHr0d49hWHldTQeUlp7edIvLAj92DbAk1JDODfeVy%2FJT6W1nYETz%2FtTX%2B3QW1d943%2B%2BJUMoZevdSxiKufySGy10X2t%2B3qt1OedJOvRck0WbBrXumq9355kqEqW%2BMlJGx4siMj90fZrCLDbQABiiBgctcGEbjZcth1bCy%2BxVYd1rWyheDHYfNjNcYVoAGnE3ys6odu71FtaQ%2F3zwQKAANlcdu3x139aMr9dTWOWNbbWmeuaGSaUM%2Flq4%2BU20QwurbFNUqcdFwQMqHW1%2F2gJLUbB5eRolq3IQADMgm0PD0WKNqZT8kqdvSwafAmw8AL2GZdXFPKmw%2FTcvZboInAMQLQiW9ie%2BpW0Ay%2FXHf0s%2F5tucn3uKouG9Pq0%2Ffun3f%2F3gerYlOEx%2FVoHPhIX%2B2eDs8zg7ch6aNETzXx9tAwwJHZG9HU7yqSJHssoL8a%2BF%2FysY%2FFTTHxzKN8t0Mq4rRtOZoPOxrayIJYa3wq4SxoNSvyOwgPTFCc%2Bve1s3uGUInI2Ay0zbgtv4t619uKHiqT%2FjDkr%2FC%2FBjqkAcxii2xQpiO%2FMy2rgVMpGQvbSwcy%2F6tpUcHL04DiFecgEKgUezBM8jllHFOtjHI07nlE5QQfYiA02La%2BlfttGc3bGaRFbU30g17%2BoWQjal5xDLXFQ6d0s%2Bq7Gl%2FGRzfRlTQSL42aAoCi2ZeLY92VJyUiy8w5ndUz7RS6QPOJU6mZssWqDpsDS2pFQfvugI1LAnup5zXU7uD2WCXKc3B9DrNMKER%2F&X-Amz-Signature=37c7b39a183757d844f8f7d3e9e8591495e5c9581bb85e882fb608947873de5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
