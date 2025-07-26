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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=4aca64e3f1073ff91d5cce844693542f0a39e7918d50bc7ff04f28f7accaab30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=bdd157e36d9a5fe1a5479856c3efdd5673f7b04769bc8707bba3b0a27fa6db70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=2c8fb8090f3d6657eb94bc49ab56e310ebbba4051caa143015cb9b14f9f4092a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=89397c5a0ffe566cad044b292500448af7456cf7a3cd068a3efa6126005e4dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=4f70fc1496188d9eeb5a09da542a06c38d17f8e8574385e0e0f6750c78d2e4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=df2cd40bb0e342a6f15e9f7fa594b006a6ed90e376d73c6912edb527976728f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=3c753be43dccc9276209b80cba183f8ae2cca6fd751e0f61d4320cbd18a22283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3HC32A%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCt9Cs%2FyoIxDYRr5JkKPg0ZI31mMZTI%2B8Qh%2FMRkZGqzzgIhAIHeja4vKL4CC2mf6OBoNkKQ6P3R4H9ZUNK10PlEQsN3Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwmbYYfcUs6JncrT7Mq3AMPXo0FopzEaLJ10Rvi17Hrnw8cXXyO2bs6DCMKAHZu53Nv5lf3UdBxkaLo0b6yKM9qbbpQt0IaWvpqLCxEVIutxH7WuGXBL9IuLVSYH011cHXM4o3YQ4t1rSRU2Bv8SLDZIeQ9686zvVuN0OsVdrzKNrq%2B4PhEj801YBESAeOKyJ29y13jyzSqcq3leYI5N2LfC6IgHMS8b3vdCcfSM4gcqJyFVmPrBN%2Fc4DhEiCJA01EDIsUXIuByhujeupkB7wGKDEsUprSJWQzx9xZvZFt%2BKtRUpACaZO3ExPhIDcip45wPcV7up53bCTKCzG5%2Fhngs0RRtomcpHTyNlGIKowOkXxMiHYMQVRACDgHSOFEuyv8HWEn2209LiCc85yJpqhXK9aMVSu2HjCmmOSq9SAPwS%2FLQtp71BqfMsk4NIFUZU2WYL%2BDlLSHX6fzQ1nSSjtoroAFfVovz1AV05rRJ6mp3FQ7Aho92SVB6iYP3wmrh2JJMZYbcS7%2FW0YqcLAebGx5gw8jPE63pOEG%2Fx3ssF4YR81SxRWnq0OWz%2BLc7EbZqKgIea3eLwBqxTQS067OTn1ehzalWFyDc4F%2BOs47ShQ%2FosIgzPw0i5wHDY070thvPgUPbNWqaXGWYLKOqWDD8q5LEBjqkAbhLpvcilgu%2FLLxhCvR4rOsyoKuZoW02Lz%2F%2BHdHqncFQDHyVUxlUt6TzNBTkthQw7cVN8kNAQfmHJlv7mLNygaTriNoJqcqGNmH5HMpZyUP64LlxCrNNPltC2pZ6twLn6ixIwhJgV5F17HeavOYYfX5Dfz%2BFPgwc2AyQJ40g7Rrx3k16A3NCYsXw%2F%2FF%2FGb04vl4YzLfZvN9kFL2efcRyboKtkJDx&X-Amz-Signature=83b89b31214be6b6c5bce8380b20af16616c5aa51b8a606af22f30925128c357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
