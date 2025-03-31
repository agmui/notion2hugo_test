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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=a2a2e4c76821b5d5c7dcbcb691149c1428afc8b7bb58ade7d000878011e7b1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=c39c807004f5962d727af26848e2faef7c3a208edfda9f522c44ac96941cc94c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=2547dc622583aa755c50c765b9f2498026b8aaf11fa9742b7f286413c6b99ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=50ba9c03af8c9411e3dac7e119d9f27bcb141132540184767bd7a021833efd1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=ce91df65ffa06853fe0514b337c3ad3904726d639ebc7956d238dd69c84f21d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=9a3bbdf827289b64ebe0e673476e45c57a89f136c225b36183be6b929ac0f1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=fa6ac9482ce0aef7bbf393d13cbebf5399542e55d91aef6f8a3b98dd5fa43447&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKVQQP4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFVb6J8VWnO6edHW5ssiZh9tTtDup6i22KUbjDyTpW9FAiBXoyCJiRZoFwN9XXq3P1IpcipxhyuxxQVYolZTkE4vjiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKlnWwkH03RgG4jpQKtwDI6SFtg%2BFL3OSWMUr677NVn0XJIfbLbZJVjhMyUqaxhZAcZyFfcVKmsPSBPm0%2BBQeOKIaMehA4e5XlF%2B8653K2v29rd2h0o9epuBY5wWu7LIwfECI%2B7KY2PuHI8J9EahmHlaJqSPuuwf4E6DXMwSuAkiu%2BYPpocB9fsR8H40BcKAg5I7lHwuSN%2B%2BFeExpfApGYNVdcWhNFs4HsfJ6d6yHHokBRd%2FE4YXQ%2F3cl%2F0CpiQ9xSqZEwtwrB2pft23E2PLchZYenhoAKQgcl7Q2NuDvKtK2ONHEDNH0%2ByfQJINxxD4bLA696w6ItXHbVq3TMT3rt9vHmrNJ%2BwiKRx6FDYTNwBOWImJBIX6Ekb8NP5NcAdL3WsJvPJt62j5aaMOFdRPpcCiiDxIdNXpdQ2DeAS6XdZw%2BUBZT1A5GfmZhvshBGSB9E2B8ZKAZP2qDa6F5T2wZQOuLF%2BFI4igAizH1bbP4IcaSMNv8e8KLKhjYdIt%2BGhfAgp4WaVU3DoAyKWxiT3YxUu4ME8RkTB0mxZkaI40dEeRZFh8V%2FTCTAkxkgW5PfE%2B3%2FMeCr6ZE7CuyAjpzsiN6gTWW28L2i0FB1cSdZ3Iw9rKtTqBepZU2D28OAtWoDtCiow0KGeAc%2BssW70cwyrirvwY6pgFjbbYfz1z%2BCTRSQHUSujsd8ks3TK22bukN5lKNNaZswDSARDH2NTkZH1TgS4pLyKd9ZUx1vvy8%2FDBRry3ALWqP8z0n9XyJvHzlsdN8FNpfKI5YSmsv1JqdQZtlhoN7T%2BEA5eMEW%2Bb%2BPl2Gb5JIZ4625Y4EkALoWtQcEk1wWxBMrYD2oAWUVZEjrtaZXI0M4qHZ9klSKuPpRtkUi7ixe3S0JMm1qJvN&X-Amz-Signature=4251fe4db34d534933d6200e6558fd71ef2892c890b8e73ee01dbf7966fc331d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
