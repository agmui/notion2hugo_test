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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=8ff9533c00fa9246d9667517568cec3f23bcba987e06715547af1715de29c900&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=b6f7c62c5e00e9e0c29206a63d65b066979840cb66cee30ec2550805864d415e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=074727216a5b9714bc438e247ba1baee0330f3809039b3b62cecd7268009a831&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=d338832189e3cae99b435d0229c626c66f021be6a31f044bcca70a8d23254b25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=2fae76129aea7df790604b5a73bc95b7095343ef80b23a14f5102aa6031840b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=3162d66fabd809f3d7c90f800635f0ff4c6cbd2c9de0da6073396079062b3781&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=752f9d3dc623d0fdec92f35c540ee757f06d300a4b750497f438831c7c13da4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHCFAJM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDbILsv9s%2BQgIh7rqbowv9RmaU3nz7AqwTUt6Uxb%2BulAiAPL7NWzUk4XnSXLRudDOyU8RckBIMm888PNYDSmukz6yqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIFPEE%2BH4xY9JN5uKtwDkw2dWD5js9u94WXT1ZOpwTjRs4nDqP35pHpBmjxJ9GNCnGFq5P0O2lvDKneH6ReTdQyk7NnXDmoMBlinjHE8ZAkRt%2FWX3p7UKMLtUW%2FIQDN7TjR%2BO83MrnAHunSPyjEozkPDNvrxdwCt3kKM20RVl60i4mN1rsMJOFoaiHPcjpy6%2Br5eq%2BlNO6LTosnQx9Qfzdu5%2FuZC1f7fxOXMrVzV3Q0NyaInrQ64N%2FSdiyJPjztUsRxmaKb2OlzJ%2FouoDceuS%2FAsIEUJIfZgpviEcPsEouzGoZhLKWhCcbmHOMRT8mrvnycoBDAy3hvYzS7c3uLLK%2FjFamKBX1GZhisFFmn4zhCq2lY%2BDlQuRRd0Rh%2FNRn0EcrzeTuSaqvQ9AwnkfyGIe2%2Bg%2B7Jn6T0nDv5MuIWUyHj4pjTNe8v3Hm%2FrHy2iJJCKpDfVlr4t2icd2%2BHxjeTFn%2BiWfhWkD7dHR8lqDiYcshj8pFvtv%2B5sO5GpeS%2F6l2R77UeCLNgAI5J71KFQxxomE7gBvg6lfIi5M1RtEcBZ2vMRys5Cv4dMDm8I1MpmK0KWE8CrOW5namplXKMkiPvCdI0iozvxEdDmXJr%2B%2F5C9lfMWC57SusJxjxdMPQEwQbOg%2BkY6QerV5%2FGwD4MwsLvLvgY6pgHiBG9iuP3UzZL97vvsShBJ48%2FB4dhmzgPRvPFGYHV7XGX3F6ZMa7fBXvUBnH2ncAG2WgLf8DiJQc7tuU6llVfxbPdCK39qW5pA6oyoMg%2FXYv83z5A5lffpb8L3wmb0Qw05HplsAUpuTqMJiGux%2Bj7O78wYMowz5qCfN%2Bxl727az7KvDn%2Be7wKturQiQULSV%2BUQkaKZCQsQrkzcNRCEnQKyzl6z7Ws9&X-Amz-Signature=8f0fab0f135efd744735709c83b8d7c70617d007b95cb7eb9c23db8b02122a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
