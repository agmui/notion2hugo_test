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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=b7b8e43c6c5508d4582e800e4067f8fd6e0ae1d64565c68f478be2af9f6bbfd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=19d670fcb81282e371133ce0519aa20a3f0039d43359d35c0cf9452e9bd3171c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=ddf52dd1954ced6043450c911fdd79fa79683e20f175d630be9e06ca31f42422&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=872a7c306ae2a10afd4f633833555c43303ae7aaacf34f78697c4c5ff7f6807d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=b25e06d85f806d79a068a215fc94dedc85d2b5fcad6db932286cc77f42592361&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=e34006aa4618ab55c101f1423f7db4daf6e57d97c41394ac871f6842eaa4f6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=c2b1d87ada4dc7a6b7dec85fa776bdb98793f42f75aaf063f1dc8fa420cc09ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFOVM7F%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDMCvjJ6isFKgzxm2tiP2aEHivGWDAkkyPSYXeWN5ylXwIgJrn6mEPjvtBWFMWp8SWAVRBghLdlcLgC86e%2B4K27BkIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6SUMHDD5SbdMSeiCrcA6InY6SON%2BXYJTyjCsIij8LwtEyH2ium8hR0PatDkPjvccoK0W3AeVR7oniMghkoYneKtGi16h5wWbWlYNho%2Ff%2Fge9wDzcTBkYiofv5%2BqjuMjdW5JEhhukhzYvJG1%2Bl3fOPY1lpab03Gv8kTxrsfPOIhkKWFATC0t7BpYcZHvaeOj7wkoF3esb8HystFqAc3%2FVeOe3DP5sw6IoqhfrgdfP3jLQPe6MfTP2ZL9w%2BVr8AmlKr%2FVzf31owfdobgT%2BHcgwsg1CBsy8ltkaS62SxhRKtuaw%2BjkNWkWewN5O%2FNye%2FQKPQdLgnPXP%2BBEEsmj4L0BW0v8g5srWasmL9Bdcg1yaLCiNA7hShwWuwNtP%2FAOHyfppDCy4K34Cse4fqN8mBdTPVGYdsvKMluEEjX2B9QAvfwWAmD5OKkW%2FTS5qBMrQCab%2Fsx4%2BjdQmYApiUgOAGm%2Bvl4sm0%2Bg80jTtuADQOk6JwQU4IdEWBHP8D6W9YQ8VaywfUr%2F%2BGyc216e4xlaBkIuyyi%2FJPSfOq9Gx30HiZSf3CKbqUqcq3IwyST433HhjsmSXPY2pqdeQ7M92NdEjkzfYRFE8H67D5TnRdFhM5HBEO2iUzqrFaLoEhkSrmlLBoYWrisq8%2BM90iqpxazMJKKrb8GOqUByzkYaxHyqaIDxqNN9ayxlPNZr7dyKb%2FwgboWRyDEXAor%2FT7YRSZSIYCbDs4BxcnBc4X2CsUPJV3mUvsD3MjJtYZ08L55zRus0WYDTEvCWJfGk44QBdP%2B4zGuPpjc5uBFgF0IxlNy65sCW5YvzQueC5uY5iJ9DfXQbV%2FBbi7QhgRVD2AqkKO8VKCLQ%2BadFYWijax3oa6xrAHzy0OCezeE15gklA0I&X-Amz-Signature=44c8c9f577208088071098f84596419ef2c1d1ef841fe6c8135883feedefeb45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
