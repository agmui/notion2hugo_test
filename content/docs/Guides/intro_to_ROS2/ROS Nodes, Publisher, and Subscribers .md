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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=c32c57caca87ea2bae993caae16c77ad177e713502a29c6c6b4c9148d568686e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=635afec59ef87c66a66177f3dd4c09e0fd9c00d1832104074275cc67b314df92&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=d228b05e5e3a2b19f2c6a5db81fb65e0c05301700936c065fc8c89ac82298742&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=79d74c678a8822291a6cafbcb6792078c0a03f485f18e0b70503b38209f97f51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=ea43863a7b03390667f5cd8128037403e5be4d5a66521ed2f832209637dfb42e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=5e05298254ddbadfa807a629e121212aa9b03ec55604a72431128a1d0204ad53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=4e6359af058c22c2c898a0b67d1089354eea9220831615fd9427ea2b33bd01d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTHRZ7UP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAMTlH4YYrx6Ef0WwDFTafsMDRY1dM9vLMuRI2AFlEQIgDvAPvN8VLwbLgkkiUn64qflIt4Pg6De2catXiTMyP60q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCVHyi2RtwrwTblmXircAwInwFR6%2BVmWUolWM4YgOrilBr1DJLkcKmhCKiXgVCxT11U4eRxv%2FygVn3NOtChDJEoimqnGM9K8ySkyQg08pFiUrlMJ78XRhFgUR1NVwT%2FFFGzUYC37u3NZVONhD6sm7Z1tbeHPD775BQ56jLIGPxvywZQnmCTu4wh9L1jfSoeLS0ZOP3QzJ%2BDiXwtRvy8ZmfrhaXec3D2dN09LEQnDnFR3eDNM0kqWiFKwlOq84evVnbTk17JE%2BldQx2bEnbM3Ui9uMVCHpegQIcx9ycFixG0SYas96LgbUxs93RiJEJ20o1fI8uuN1cv2tQlv2Ohvtav9RZMXOaV5kNxDoZVBkpOqOx1USJVtYqD%2FsxnNythQ%2FynoTsaDkXnXPRYLzSrszIFvwAs9EMlz5egZ37TPcLVhyphNxRoiH3uvGJ%2B%2F37G8elWC4iepYOJjRDsZtmfAAbgcB5gkmLu%2FvR5MbP4qk%2BpcrpBDPW1JCDAH28bo%2BkYjguBDoMiTlaVURx69wBbfx1yV2hewwqlY8lNjqKyHlpsFtlbx%2FBBymweO5mqkAwWKL3yb0iSmJLVQQteOn4%2BOhodYQgh%2BZ770Zljb%2Bt3pLXfGstdyQ3aXERBjPwzkSuW8KkpxJT56bVNRskb5MPqS3MEGOqUBbRkWdCJPc4hFqYRaA%2FeWcpz84jZGjxX1BtWcjYzu%2FfGY4NB2IWtkzFNk9m9biF60CN%2BF3jsL6X3dYdNFB2SlILbGa7eBliyQxRcImF9iq3XcgOGXzKAN9RX7TFGhHJGYwvinHhCiwXPpYbUgxBXNauRVcU%2FBpsq%2BaynvioDNnp7fEoI7u77s8vg7JsxqmUuajLV5pupo%2FYWI5vdTYMVbQiK4d2mz&X-Amz-Signature=31650dc9951574bc7bdcf8a88444a11374a5a0a290816ddfb7ab147de8b0d453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
