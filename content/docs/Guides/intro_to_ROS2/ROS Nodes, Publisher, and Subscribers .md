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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=fe22df402828b5943f37675dc72ecbf426aed4d79f237dfe3442c0f6620b5800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=640250a6019c0af3ed932eb36dfc16a5d9900888acb4319a784b56efc5075afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=03c4fc5c7d787b57deebb26860766c79869c6e576b97e69e5e8979f8ab5fcf31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=2d665982d539881a44f67c7f44af25c85619eee1eed738103ae9574f551f69c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=77ed4b51585c38fd98aea395f70b9c026ae9e448027bcc923e9df98663336437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=ad4b37a53ffab9306a9120c390f43f8e0ab54fcf22a654d32c18ccbaf34bfff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=8071fc27a30f9f6a2914b5621a8dc6baf63572d0ad9475321808088dc1e569cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5NKXF6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIClDx7DUAaXycOiGvqNvdUPh1jggxRUdrBnILDn%2FgJ2eAiEA2KZ4ZWWZzgiNu86lfyvsDy4wah0zn0cdBkl8QxQLPqwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCKPceyE8rKj3qEzmircA6WxCVZ3vS9paVPGkm1jZZI0Xa5F%2F2dOng9PK6kYztfzsI9Pg7yKfT0zwW%2Fmo0wGlRBKZcPQ4QwFJbOqa%2BuqxUuRXRLivVnMkwQIw%2FCijcOae%2BN8PPGdAoZmvdejIGdxJgyWQ1RFYFBiQ7aT%2Bjd7v6aezYvtCnN8rA8v3ZUIqQVJ5BLDIzE01OWbSKu54zlCI883hzlLHsw1eqWBpvwJDRRZKNQ%2BhrENAEx%2F1%2B5trfJMjBz1H0vFGGQv9ka59NUbkRL2uvrGLQy6lTMwxeH0%2FP2Lb3xYhHNQNjX%2BI0TKXjizyAbCLhfrsE4X3PJAz4kKYncJYoWHFNBLaJ21mnMOyqkZ2NwrJxfU4NT%2FFoqgVoVZDoyWFG2qJ1DYmuS%2F9hcTQHf8p0K6RlMc9SIii0oaZeDDYfBs6hn3g3EcR035%2BLbyez3zG6w8GEBjDWbx%2FIrX3qP9ttWaoCAOR%2B2%2FIm9LzkVYKtiJcFmMG84rZTFutMplPB91Q2%2Frj4kbJ9SJMWTvRKPjytVwdT7DWVX120MKtPZ7f1%2Fh7gMFn%2BOn8cP%2FycQ6AhaUq1rVubuRjvW5oBXmpIAZDpDtRO18Gy6CSq02FZqFmW2BH%2BRO5NU5YRBCtncopOeYLbT6gJbtLACqMODI0MMGOqUBsNmHXPjjlCeOpG41v01lP6k9zEnlU8ycpL3M2nJNqd0pevxvCrCt0j1UCcen0d1htZ5FuE%2FYTmaLcIIYjJCXIylRiB21UAItAGbb%2BLWiRZjqJF3c3Em8Pad0dtccw%2FOo5HKMgzJG3pbUlu4Mf9wHXeY59ke31gIucvX3PzIqHOThZ0u%2BRsWrRvZCGQL%2BThNH0wDfWr%2FSRocLM3JdTXtw%2BlA2YYLQ&X-Amz-Signature=409141a78c86e19b0d120fdd8481cfb4fa12baa46b6b20f030f08845cbe78c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
