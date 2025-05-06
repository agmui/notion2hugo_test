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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=1dc524dbde9e349ade31d426899867c0e0112c6fa9418e03ceceb8383c43ed07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=b378d5f8c0858a1ff22f7f07cc5d73c74c73f3cb75ba986802e224e3ff26ea50&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=25b02bee3b450d3371953284f0668080555a12bed071bec72d058a7ba4878e09&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=34a8cc6e412ee9eb03f9e82eeedbff5f77601ed8ec7ab046a6898fc210cbfc07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=07f957d62c80b4d51f56d69ab7cf16d4068bcd99793b643fa35b5c28e21ad542&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=dbeb85511504342e95dd335caafa2062140a54427260220d4b7aa55aa22cafc2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=356a1a66db3e7f5d68e3aacae60dcb6a2c59bf72422f26719812267345485367&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5FJO3H%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbciSEQIQVuC7qF47eirypmxNtfI%2BodffLTF%2F1OqKQAIhAOZlgxA2nPz%2B04KuirwRDAcgCi0yGG%2FvEXP9PjHKBSt0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzD7E2rBUupIYFTn8Qq3AOhJIbVJi%2FtAhZJanoH2B1Rc8gegpyNMBf2M%2FnGwJuWnwDvlApmPF%2FOQbVJF9vvAZruXMGGK9oDvNL4rGQB%2F%2BHwY0v3WdIrMo9kB8Aly9V9ufNrpOUj7hJaofgfJJnEgEfggzNA91ZLM1Exb2g9rWU6EYrfMRcvMA3PD9iSQI8Vx%2F5NA%2Bn25DSJDjA9YANQLwog9eyeBO9bSOswEocqcFxVEx%2BYFZU%2Flpbjj3jZc9EO%2FzxWLuZ8i%2BYGVTDNzhVF1d5%2Ffxeuiz4Uw1HlnPTVdOTYw0Rv%2BVXZWm48Q9HumH1VRSgT3P6XsRwBPiDkLSFoBA4b%2B4m6h8jVsPUDOSNfp6zlM5lTKkw8kBCcTLhCp68VNSxKh0acpe3xwCKrW7cCtnH5Rr%2FWJguCnvq5%2BJSd5mH5fVzddyANG%2FdKhQXrXdJjHf7kW8LOb3AZZ99m17YYFg%2F3OFc8QdA%2Bv3MAYQ55z8e4u37QURJCqqFkgajiHWORmhUqqrmdyXh8G4limd9QQB9fdzh4tI5cJgwnlvs%2FkGSYZ96uiuUokMPOmPSe2Sqe%2FfjUhNTy%2FybFJmGsf9Suq9nQeaH9fiKXYmBaZxyQcOhMtmDSIR2uZ3tznAr%2FoqR4ZtWTMlMBICeNThuU6TCatOnABjqkAXCPIkyXUeGQSV3yBT9h8DlO%2BX3ABinJulkw2CyCNAXbtcnTZVe6eA54QRidtUKq9JKdUicySGyaJNV1WzeCuIQmMfZIRqYZwO9TIMUBkYfeSv56iuD4XEntL9LVFrh7vRL2H2HFlc3D5d3YYN4MDrveuGz6nmLGuuWeR9nbTFVqE7kPSWqy1GYsZ1p7myNljRyscXAzIzPa3MeFApS2rUCC7JwS&X-Amz-Signature=a63eae286fbe1f081b4f836de22013ef909994578d266c21ea3bfec5838ee0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
