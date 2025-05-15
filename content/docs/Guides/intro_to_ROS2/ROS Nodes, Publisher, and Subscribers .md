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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=23ecb4c1f668234f4da8c3f7a83e2c694d5040766fd2efc2ab6a0d9af8647d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=40c18fda5f92fd4c5995e01ef29e7daeea16a7876ac60c0c5b85c2d96d5f70bf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=d00bd827d6254b04644b9d05ad8a958a8352cfc91e6f0543c18b7c63728867fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=c796c2316a5a90367d19f239b5d06ffc95296316420f8ea7e897be8318c134dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=1a12eba46539b4e06507633f7ae84898756a82c3164c5ef06238939e6a8f1cec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=8320901318711513a452c168bb2729f09c5f764f0ef382858f9d578e1a6d95c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=44571a47f4bb1d3c021cb851217ba5a5cd8f0c0873299466714a34b8eaf2c886&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZOBTN7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0VAmB6%2BTOzjBpstn7UlbFShmR00jUu1HgpdpUMalFYAiEA8bgld6hSCwcHsYNrg38fvgEyqYDmeeot6fiuCHT6AJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCLQW6potQMQCbbNeyrcA9o79BrgkzMPbC%2BTPc7yXw%2B%2BxRmNGW1xzB0HSXrbKYbQvqbCkoXJgjnuSgk5QrLB1W30Qc1BHYGo4e%2F7QQDPLCBzXeGkBGrRjsLOGuuoyiVbBL8OlZz28N%2FbSgjLAh21OPX0EQBTZm9QC3MmwcusBDlbWbKGHa4u7%2Bo8E3Z9ZcaxL7b7bT5lrDy23k3TGiLzFSEBQd2Od0o6VjYOi21IeETV8Hl6c5MKDlpLWQSsuD%2BZS61hGThn0w2xmh07GXxSKRAg7JoecUp1dEF7Qwnn2Q5M5d9svmgZ8o%2BBnXIizMHRFP6AhBmhaqS45%2FSG3rcsRzV52ze1PQE2TFq5ikws42Ghuw%2Bu1zOowdxRWyVCdK7QjuGgaTH2MUkt%2BGKr924TgfVGqySRxCyaGsZJ1Xsk9S7F78WIGQleEXlIJKfA7144OGKvIA9pRjG9ltTVlb8ah3J6%2Bs01zrlYJ%2BHgB%2BTM8l3c9jdNlENugzZRhaYD2zve0QQcSJFeWDR4eMmn4DCWYM0iUuau0NKEP0C3YlH3NtWnwkEuA2uydHGUEAtu8Nc0hT9VbFwi8g6Rv1PXeDhwdxeTo4skWdw2HEiQL6CpTLAsdzl7t692oFmWWAa%2BMv%2FA3epXOi%2BNFUzccgpJMITslsEGOqUBZAFPQKIr0KHxC7IBzd6uLGeopfX2r7QnJXUmzpyt%2B1DEbBFjwBkqJhouSbGr%2Be0yyJsZlyiznvK%2BpTHdOegfRv%2FlXfE3HZ9xjRiCIJOkCC%2F%2FMap2oHxCiV9gA308V%2Fhv267gG7HkzDzGMXAKhCq3dTAm6BcUt%2FqE0PUTHos2GRIuB8nZxZeR%2BYUJY2IHQ9ymnsq97wUP4zlC0uHkzBVKFUhmLn3T&X-Amz-Signature=8d42d64301e26c198d998fd025d52aeb81482028dd3c7f2370706c7ae7c80410&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
