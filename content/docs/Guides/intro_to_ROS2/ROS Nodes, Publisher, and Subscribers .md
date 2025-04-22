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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=a8e604be28ece407b6bb865059c5a1f286403a7821fe383b8c4e332b3a58421a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=7c1262b33e2b7cceb8be960fe002f087ea0a8be27e62be02fdafc128287707e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=5b8072f5b633cb077d8c02b251bbce5b9f191a145374018c2cb1d1952cbfc260&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=bb3c5ffd35509477cd15089be9b2593a5938437de2cd3bca3e83938245c9df2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=5a938b5af16652f378b833bfbe01cae0011dab30d9fa5b2b5dcefe0fceed402c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=adf23094afe03380576dbf2efacf063fd1ce7b12aea2b96443487222d2a7aadf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=c9ba15f9af4e46f81bc85a4d63b05807fc65050896c80e40cda81d5ee1c7b03b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFX2PRU3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGZHVXQRWVMfoDmz1PG%2BDJxf9PKbCXXAcJkEkJ9iONAaAiAkCJu1oLlNoHt1z3sGqswKXwNGTSFrvw2dAlF9JNQaqyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxH%2BV1pRfP7UyLByBKtwDNoVpxiLdfHW3ZERjsUT4HDTec25HEm30ZOQp2tRN4p2NUZhXsdlbUBgaextuo%2BFeflA6jAtwXBnjM4R%2BQ7RNK7OS%2FMn0uEMg6rfM%2FizKr6%2FxNCpFokN0OzVN5KN0PNXkBEr01GWhhFwvkmX%2F%2Ftq6hleOetbIAJP0XvXPo%2FksaDVl1AVImskAxxhX0T72rObFHJifhLgPYsyFmDYEUv8UKEzCvjfBM1sPNxkSIOj2iI%2BvcYCH9b0nk78WHOkrIXtw5iAAnzCnrj6hpEHRLIgR7NxCBiQ%2BxHFoDLpkyf%2FuWV39r%2BnusDljFdUDoN2uyHjqYB7TN1Sh5Z3dNuf8C%2FeIT6rGmN8pETkBkVWZ3FTeo8JpqHymOYHLuICwvxNcXKcCoyrGSYJp0uBI98V6hwwG6K20WWGmorezbpiNkMUJYVzFIKrMB9P0Jrwb4b5yvEPWnoF0ShZvhDxg4KJpiaiu%2FCIDXbZjeU91%2BXwD9VixDTnvgO2xRXHq3NbkyiQ8glTH1Qs%2BkXpDu8RfnuDJlc9yWS9wbJturNXrC2EZlccPeAHbr72pIbvyovL1ioy4feLmNMBxEnI1%2FxEofvEVL6jFRSTTKAQB71DHxMOqaTJTVPJSui%2BHfvPHx%2BvugFAwnqKcwAY6pgGIXaKuOlmEzSWbaPevBpzXiUcR28cOtCJkHI7xja%2FM%2FpG8pPUaWucDmGEI77PH4TMBmi5d6FlPaWfpK6DKNmTacbcssVVeaiCPSGKHCzoV3IlBtaWeLDnw45wI6WjHXzFPe9aug6qvZVq2xrqmEORztJVwUKYKXN7OUXUmCRksRhFT8s2Wx9WSfW9YABsCh20V4YCfjTWrQ17KRFgZSD8qtVTRMUe9&X-Amz-Signature=1c28d4905d4cf968574824e8f7f21fb1f2c8d35e609da73f4232c5bb35c00b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
