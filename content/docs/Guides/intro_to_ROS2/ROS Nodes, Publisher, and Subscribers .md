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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=46b02d21000706be441631cec2f54725155167d9c4c673522e8d58ea3d65200b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=0ce1774984a06cdb5b42cf4dc8076909bbaf14622d6474f4c78a331003e088fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=c5082a628c1549e2ab6f78788fe87fa0ecad48f081e86719969c7727100bd2db&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=ec1eee4a8e49d0d10eb8d36ef0399f81e364e7a1d02eac9f031e329feb1630b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=c372b4f2884bcfe86553908a2fd47bc5a22cb57d0768c24ce855a6fbb85e6624&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=4e05664b4124e31887118bcc2b5cd3b0f2650fecfafd6542bf1245c3f6562ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=fbd387a92c85e16295ca1aa9b843979f1cdeaf89dd21791e82f8163a8ac25ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YINGP5T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDofF%2BReHHlISF7jbUj15bvUbzNQtvIrwLdEbrIVe1%2BaQIgbIXEDl9UwiHv8MsqcaRiMIpIc3XnJgs9lNKCrKBjGFMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxgQYHcgvvi9N%2BHIyrcA5rZXWcd1BF5aHHbixGJ1xDZ6lwifvTxc0Q8n8cu%2BdAGMSYV5T4WzK2xAQgCnFsPpEIL70k%2BjVgG8z49onh%2B99HrbN8T3K%2FLV7%2FW8PZYrZBS6dXOe8YACnHgVmjiyQMtIYDNirheMCxhlImollD84AMU3tR%2B%2Bh%2BFXxUgOqQH0XMDLkZKUdfHD9D35ARlgslOrkxKGjjpZjEcor8mUI3%2FbgtYY2IVVFCQG1RxoObqYmJHzz89mWkPz2h6l3Fy82SqPizmgujl0uYdK%2B%2FNrFUvzVb5zFJ%2FE0R8D8Um%2FqF7ldgdlfFUXc8xcH1WmbnD%2BqlHxMjNPAFmfoXJDqnXsBPFCWX8%2F1zvWE9IaZyDCMx6ZCzw2caf2D5JuMzqqNnyM0FHk5KWGLma9hhXWVoe2OHU%2BbsrAn80PBvnAT2lvNLrXIkWc6hCXb%2Bols9Y4QVXFpys4%2FgCajYjGZ70tMn60QAC45lVsjInIcxyQP4xkEU0PLbBiu5xiCLgkpl%2FDvu4CJNuz5QXWZMl8uHvW5DtDOJl47Fw2LKVTI3%2BIJFvg4JhU6zdr%2FiMO9b45sctrkYgPWSXT7%2FHYJfpPqBpALqUtnP7VnHjQ18a4%2B0PIqMqcbv%2FRr5iitpPSZWnllS1A4OTMK2lrb0GOqUBPav1VEJlcu7wj6a4s3MAnJ4fckI8Ld4iul3KYUFkwJXHCXOgo03PBdKYM5EbGxPw4q4r1Vi0qm9Nr65QaDABjlNH%2Ff2x7gkL8qxJ%2BIkW5KH%2FW0BZAfcVIB518Wf9b6tEBO3iCH9DN37rHbkAywFyqqH0J1vRSbGEsphGW%2Bfam9ZN7xDS8y7UarGjMScKyrLm%2B01wJ%2FZT5YkhS4bLMQIWbSrQ9nhc&X-Amz-Signature=2027ec5d9a11f09bda950864ef1aa95f920fd1fa8b6337faa3b4d0d95892ea06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
