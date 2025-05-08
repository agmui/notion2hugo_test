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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=00c3750da0124377b75ecb81c4fcf6660842f2b96c1f0cafe976bac00be1ab52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=2c0f0d401a50f9537bd1be74c90c8329f3de3ed1ccebf26e83c0d9c681b9d0af&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=f02599dc4dabc9532ef19a8b73ed7af9701a5aad9f6ec6472462511405b06f78&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=eca071a5fafad556955b46503f5646dd2c4b05c7c66cbfad5ce2efaea4755d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=b6486c6f40622e96be860b420044c3e24b342be8bf853490e8c2e057887a4f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=9a332eb495b1690bd64731ad97055c981447336c5e9fd5f03a0885c6ac0ffb95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=c39bebbd315cf08e8c3b47aca9d02e768e65d8d7ff2efcb7f2bc7f4dd0bd6ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRD2E5I%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF05euWEXEn3hug%2FBA%2F4dhZ9GSbQfTNoOdHTl0%2Baoza7AiEAnuBzqKmc8vLc5GwlU00mbJLq7H8EH3T4Ktxk6xMB3s0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAwLC0QfGisVMFIzayrcA7%2FLFB9KkM3JCSGvXhpv7Ue5xAecqs%2BEB52ruWnqC5%2Bh5BMLwfPLdTXkezmTM8HQA5Vt7hQzDIShNOsORWTvuGMgrZXrSW9q40mqFHtcEU6j7Aqz7LQvZ%2Be9uynT9dRt878pGkig9nOtkjW%2F2c5UwnS4ZF0WJzjQ%2Fa91jCsU%2Fqj0Idxf%2Fu85qFJp7Y6aDnNOOYulzcoGacQfLAOQFqyE%2BWYpauCUfzPjqyzmLXGKYecfMc3cYPSJ0QhuFUocqurIJ1CaTpm2VQubltz4tfy%2B4rbX5eCScsmDEKX1LiF4XPT74QcLy2QiMwamgGBlFmTpvidOoyJ3WvLPzwC%2FKiDN7JP2wzlMY99FLL99zFdeMboxKA4x%2BtZv5CTxgfNQT5qaCFZW07WsuZMSEsjsduYZpoZkP%2Fp1VcXEU%2BTV5HKGVUx8rIcdj7DXu1JLVFrrWBCk53JDENxNETURbFdkakI%2B2gOLgyDzR6F7QAYlYtujBE132g0Z0cJ%2B1c%2FEd1C%2BTYUG9NFe6bjVKINuxYS8j%2FmdsKc4HMQj%2F35s82AoiYJVP%2FsGU42hrf2ar0xtDJ59WTziA1qA3Zdxt%2FfJ6IzomW3srmhxEUTyyVdWtCS2xoTlRUj55Ga0GA2kLDEMcOUdMMbm88AGOqUB71MWjkhtmW%2BD5TQn7aE4Ee8oHFJ8kSO3WQ2N4YGjsowRTb4hPAEKd4stJqhmImUSEa%2BakvYuCCdET2eyRT1k67i4TpKBlGoaNDwX5xxBWsd7wd6SAfrN7KwWyeWNHMcYgD3ANcxRLbKv5IsWbp0p04U%2FvoY9X8Af26TI3c4i98wnVIvBCLel9m4uKy7L451SZ%2BITWhuXaB9jv6gUoNecrqEMkJT5&X-Amz-Signature=2007c690109b6eaed7d8be97c52c46ac18945752293a12bc3de65946c257c2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
