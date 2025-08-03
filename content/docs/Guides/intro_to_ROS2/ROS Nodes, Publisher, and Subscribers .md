---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=897dbbbfe42dc0457c1bc9b2272f926514fa28491eaba087d4156645433022b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=d05ddfc41e94e467e6166b9749d3a70f60f942ca3ed60b024122b3f23f598a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=c411733cea48b31051183352d37d5e1e6fe688dedb438811ec8865773e705fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=3d8a4eb4dfc77cf809fc9fe49fc274237930bd0c293fff4fe687075b6d32a598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=2de2c0c5288aa6a9c7246b257acd09b835b7c63e3241ce9c743fd9106cd6f2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=018b77fe4e1146f32945e7a54543a2fa91908c198ae7843e6ea483e5f7b4b1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=39b4f9aa6debe8ce637e6be212e92c4bd870f6fbb5ca31aa1ddcb298c25fbf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I2X7VFU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoiWkEeyzOeP%2FM7DTSjDgqlDZ%2FzP44iMKVJTD%2BBMI56AiBSlk0%2FL37l6enqmwtEBesrY%2FY2yA74j9mCWv9DimNzbyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMWEKI33X%2BCHhGtwDgKtwDGakRlr0CUqPlBsDKrHmnt18q%2Bix9ejaiUnMwLhX0dTg3km0I3T%2BUS2ER2D1UcwuSaH28EXIqrJqdxzDrmK8zjwnpfedW3eownf8LGpoFdCMb1ozfCWnB3PeEyqdpJiGiwP2cjc8qCti68C2QEo6bvQPb0cGGBKcJu8uQPkRkWuJxTO24g%2FXTzS1DYUTVbxvAepbQkJv4b6NyRHBlqaRfQCDy%2FZU1Y%2F0S3BLNT92qAEYtZAtgdkVpj5Bwo8widvePoYSqS6ijhW15FW9ZhftDc7irOhLQbYsiBVEOwYUt0tZQgQGJS%2B34Gv47pj5ECI26FFLps3o1mkq9gntv8010C7N%2FX8oeQpU48gkweh%2FT%2FyM1EdJyPIg%2FAI%2Bg0zSfSqiDcFW70xMqfl4lLY6qGSdHlC6XPfl%2BcCxeSAq59LUntK43keW%2F7LXMdbTIIHZ5iBHlhNFXrrhYmcTy5Kmc0cY5%2Fku%2FDGGEhZRkS%2BC4g8SPl23rtKYdidKWtfdi7zyB6e9ODPRCHiXHkwNgdWVpO5lewNS8Yi1LbjIi7sySdGKnkYzqNiBA02U3TxClE2ukIYN6%2FhGFXqN5HL7xNP0MEq5P9g4VsxRGtckz9h5UhFkLjbn%2B9CSUVUzfqFeN%2FKowmtm%2BxAY6pgGxNbnReH%2BQz4GKcIeEkjfSACY50i48tcz2l7zYN30H2yJAg3kqC6UBfbNvFN3Dc4ppn7aBzIHpwYW2w6KXbrAIDrsZbkV4%2BWKtBVIJVE%2Fztxy8Ulilimsdc8RlTabA0ZDPeESaXzUIQX4p6zHMvCeU5gs7KJnsjXrFNubQfQx9Tz6dWf5qTOgZ%2B0ouOs2hdVIJbE4HjGv%2BlThog%2BVbfAQCOgjxZdMx&X-Amz-Signature=f6d329aaa86d3e449ce1115274d279374b4c93d388a3fd68b9aaa5bfa317f901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
