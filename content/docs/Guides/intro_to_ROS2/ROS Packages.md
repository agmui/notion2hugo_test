---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGW6L2BZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCs6B7pnMy6NSzhugqA5luxj5mbEMiz4wOv23XPevMC%2FAIgE51PztquNAjvqjmrky%2B3e0XKhCgLkjWPPRaguEr7Vvgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkbXTQHSaoMZn4WEyrcA3eS3YiO1S7CJE27wZSty65zwYzv1qsnVbEfXBuUY0mHK0W6mrLoMPpztVX8NnpiCQTNwgMhFeUuQ80T3CkW7Qnxo54f3bQRgGYzvPTTSJrmqLpFCU6CCOpxA%2BqHwf5hj7NMhVgk3rD%2Fp6KIpGsstF07Enbvf50SLXVci79eFp5In8KoVDcNh5yITwqN4AhQsAbqonA4rf4ZRj3NMmOrPe%2BkuqylgUVzRPbjHOjVkSZzqQOHnUnqtkvtxAEwFk9Yr7v1LgpadtByurKFxicrez2o0s93AuZQ0Pxbyaa%2BSAF54DY02jFXa5%2B3r5ZG1k78Kl1RelsUHIyZePRlqfC4EN7zNCHvpKzODB0Ql6TypGwRB6h50L3uyGvHPbRIgc6YJJvHuIXbuam6wMRXcF45krdZG0KOVy2L7%2F%2FuwIqmoKtTv%2F10pRd1M6CyzIrO6TXFKE5elCjMXok4NxJf9VnujbnI3GGfTQsN31Bv4qJ%2Btq%2BTJPurqLG%2FcvnUayFKoGMkJCw1PtQGwETFeNyw2z7hSMe%2Bwxrs33zA4%2F2YvNHT0yzqyeXsGZ9Ei%2BVXJwKFd%2BHhjfq6Y2CXm1voWmF8L8JWDQ4kpWecVMYG6gwWKNK5O5yiIqqYgh63OJsPwec0MKT7mMQGOqUB0pQ811UyvPS2RB2Y3iQzwr%2B583LVZ48EsaRINVbtLBb7uYvY6HJ1U56xGfPkS6VxI0X8C0RNCzMvI93%2FF4kxPbhJkG8iwUzlbozJEKkCDvT7KhpqDZfbf7mcXJQxbXLnsfKfrJicPG8%2Bn0R9F59K383DOu39UN4PgJCzkxvCGL2%2BtPNhTVwff1%2FDp24L9bu6SuUDxb5i%2FLHPpexkYZtrRgkdqb%2F9&X-Amz-Signature=0090cef8be081da4be03825046aed0c6646a6b2f9b6fbc4d802067cdc4e76dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGW6L2BZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCs6B7pnMy6NSzhugqA5luxj5mbEMiz4wOv23XPevMC%2FAIgE51PztquNAjvqjmrky%2B3e0XKhCgLkjWPPRaguEr7Vvgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkbXTQHSaoMZn4WEyrcA3eS3YiO1S7CJE27wZSty65zwYzv1qsnVbEfXBuUY0mHK0W6mrLoMPpztVX8NnpiCQTNwgMhFeUuQ80T3CkW7Qnxo54f3bQRgGYzvPTTSJrmqLpFCU6CCOpxA%2BqHwf5hj7NMhVgk3rD%2Fp6KIpGsstF07Enbvf50SLXVci79eFp5In8KoVDcNh5yITwqN4AhQsAbqonA4rf4ZRj3NMmOrPe%2BkuqylgUVzRPbjHOjVkSZzqQOHnUnqtkvtxAEwFk9Yr7v1LgpadtByurKFxicrez2o0s93AuZQ0Pxbyaa%2BSAF54DY02jFXa5%2B3r5ZG1k78Kl1RelsUHIyZePRlqfC4EN7zNCHvpKzODB0Ql6TypGwRB6h50L3uyGvHPbRIgc6YJJvHuIXbuam6wMRXcF45krdZG0KOVy2L7%2F%2FuwIqmoKtTv%2F10pRd1M6CyzIrO6TXFKE5elCjMXok4NxJf9VnujbnI3GGfTQsN31Bv4qJ%2Btq%2BTJPurqLG%2FcvnUayFKoGMkJCw1PtQGwETFeNyw2z7hSMe%2Bwxrs33zA4%2F2YvNHT0yzqyeXsGZ9Ei%2BVXJwKFd%2BHhjfq6Y2CXm1voWmF8L8JWDQ4kpWecVMYG6gwWKNK5O5yiIqqYgh63OJsPwec0MKT7mMQGOqUB0pQ811UyvPS2RB2Y3iQzwr%2B583LVZ48EsaRINVbtLBb7uYvY6HJ1U56xGfPkS6VxI0X8C0RNCzMvI93%2FF4kxPbhJkG8iwUzlbozJEKkCDvT7KhpqDZfbf7mcXJQxbXLnsfKfrJicPG8%2Bn0R9F59K383DOu39UN4PgJCzkxvCGL2%2BtPNhTVwff1%2FDp24L9bu6SuUDxb5i%2FLHPpexkYZtrRgkdqb%2F9&X-Amz-Signature=6f5cc0954f46d5f1e100eb36d878818a84a5065f13ad3e9ccfae55bb171d0a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGW6L2BZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCs6B7pnMy6NSzhugqA5luxj5mbEMiz4wOv23XPevMC%2FAIgE51PztquNAjvqjmrky%2B3e0XKhCgLkjWPPRaguEr7Vvgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkbXTQHSaoMZn4WEyrcA3eS3YiO1S7CJE27wZSty65zwYzv1qsnVbEfXBuUY0mHK0W6mrLoMPpztVX8NnpiCQTNwgMhFeUuQ80T3CkW7Qnxo54f3bQRgGYzvPTTSJrmqLpFCU6CCOpxA%2BqHwf5hj7NMhVgk3rD%2Fp6KIpGsstF07Enbvf50SLXVci79eFp5In8KoVDcNh5yITwqN4AhQsAbqonA4rf4ZRj3NMmOrPe%2BkuqylgUVzRPbjHOjVkSZzqQOHnUnqtkvtxAEwFk9Yr7v1LgpadtByurKFxicrez2o0s93AuZQ0Pxbyaa%2BSAF54DY02jFXa5%2B3r5ZG1k78Kl1RelsUHIyZePRlqfC4EN7zNCHvpKzODB0Ql6TypGwRB6h50L3uyGvHPbRIgc6YJJvHuIXbuam6wMRXcF45krdZG0KOVy2L7%2F%2FuwIqmoKtTv%2F10pRd1M6CyzIrO6TXFKE5elCjMXok4NxJf9VnujbnI3GGfTQsN31Bv4qJ%2Btq%2BTJPurqLG%2FcvnUayFKoGMkJCw1PtQGwETFeNyw2z7hSMe%2Bwxrs33zA4%2F2YvNHT0yzqyeXsGZ9Ei%2BVXJwKFd%2BHhjfq6Y2CXm1voWmF8L8JWDQ4kpWecVMYG6gwWKNK5O5yiIqqYgh63OJsPwec0MKT7mMQGOqUB0pQ811UyvPS2RB2Y3iQzwr%2B583LVZ48EsaRINVbtLBb7uYvY6HJ1U56xGfPkS6VxI0X8C0RNCzMvI93%2FF4kxPbhJkG8iwUzlbozJEKkCDvT7KhpqDZfbf7mcXJQxbXLnsfKfrJicPG8%2Bn0R9F59K383DOu39UN4PgJCzkxvCGL2%2BtPNhTVwff1%2FDp24L9bu6SuUDxb5i%2FLHPpexkYZtrRgkdqb%2F9&X-Amz-Signature=c7de05490731231621fb6fbac86a10261f99d04e15f46c4ae5d65561524f63a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGW6L2BZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCs6B7pnMy6NSzhugqA5luxj5mbEMiz4wOv23XPevMC%2FAIgE51PztquNAjvqjmrky%2B3e0XKhCgLkjWPPRaguEr7Vvgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkbXTQHSaoMZn4WEyrcA3eS3YiO1S7CJE27wZSty65zwYzv1qsnVbEfXBuUY0mHK0W6mrLoMPpztVX8NnpiCQTNwgMhFeUuQ80T3CkW7Qnxo54f3bQRgGYzvPTTSJrmqLpFCU6CCOpxA%2BqHwf5hj7NMhVgk3rD%2Fp6KIpGsstF07Enbvf50SLXVci79eFp5In8KoVDcNh5yITwqN4AhQsAbqonA4rf4ZRj3NMmOrPe%2BkuqylgUVzRPbjHOjVkSZzqQOHnUnqtkvtxAEwFk9Yr7v1LgpadtByurKFxicrez2o0s93AuZQ0Pxbyaa%2BSAF54DY02jFXa5%2B3r5ZG1k78Kl1RelsUHIyZePRlqfC4EN7zNCHvpKzODB0Ql6TypGwRB6h50L3uyGvHPbRIgc6YJJvHuIXbuam6wMRXcF45krdZG0KOVy2L7%2F%2FuwIqmoKtTv%2F10pRd1M6CyzIrO6TXFKE5elCjMXok4NxJf9VnujbnI3GGfTQsN31Bv4qJ%2Btq%2BTJPurqLG%2FcvnUayFKoGMkJCw1PtQGwETFeNyw2z7hSMe%2Bwxrs33zA4%2F2YvNHT0yzqyeXsGZ9Ei%2BVXJwKFd%2BHhjfq6Y2CXm1voWmF8L8JWDQ4kpWecVMYG6gwWKNK5O5yiIqqYgh63OJsPwec0MKT7mMQGOqUB0pQ811UyvPS2RB2Y3iQzwr%2B583LVZ48EsaRINVbtLBb7uYvY6HJ1U56xGfPkS6VxI0X8C0RNCzMvI93%2FF4kxPbhJkG8iwUzlbozJEKkCDvT7KhpqDZfbf7mcXJQxbXLnsfKfrJicPG8%2Bn0R9F59K383DOu39UN4PgJCzkxvCGL2%2BtPNhTVwff1%2FDp24L9bu6SuUDxb5i%2FLHPpexkYZtrRgkdqb%2F9&X-Amz-Signature=78625817974d46818191452200e915d482fae6371731a972bb0a92180d980a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGW6L2BZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCs6B7pnMy6NSzhugqA5luxj5mbEMiz4wOv23XPevMC%2FAIgE51PztquNAjvqjmrky%2B3e0XKhCgLkjWPPRaguEr7Vvgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkbXTQHSaoMZn4WEyrcA3eS3YiO1S7CJE27wZSty65zwYzv1qsnVbEfXBuUY0mHK0W6mrLoMPpztVX8NnpiCQTNwgMhFeUuQ80T3CkW7Qnxo54f3bQRgGYzvPTTSJrmqLpFCU6CCOpxA%2BqHwf5hj7NMhVgk3rD%2Fp6KIpGsstF07Enbvf50SLXVci79eFp5In8KoVDcNh5yITwqN4AhQsAbqonA4rf4ZRj3NMmOrPe%2BkuqylgUVzRPbjHOjVkSZzqQOHnUnqtkvtxAEwFk9Yr7v1LgpadtByurKFxicrez2o0s93AuZQ0Pxbyaa%2BSAF54DY02jFXa5%2B3r5ZG1k78Kl1RelsUHIyZePRlqfC4EN7zNCHvpKzODB0Ql6TypGwRB6h50L3uyGvHPbRIgc6YJJvHuIXbuam6wMRXcF45krdZG0KOVy2L7%2F%2FuwIqmoKtTv%2F10pRd1M6CyzIrO6TXFKE5elCjMXok4NxJf9VnujbnI3GGfTQsN31Bv4qJ%2Btq%2BTJPurqLG%2FcvnUayFKoGMkJCw1PtQGwETFeNyw2z7hSMe%2Bwxrs33zA4%2F2YvNHT0yzqyeXsGZ9Ei%2BVXJwKFd%2BHhjfq6Y2CXm1voWmF8L8JWDQ4kpWecVMYG6gwWKNK5O5yiIqqYgh63OJsPwec0MKT7mMQGOqUB0pQ811UyvPS2RB2Y3iQzwr%2B583LVZ48EsaRINVbtLBb7uYvY6HJ1U56xGfPkS6VxI0X8C0RNCzMvI93%2FF4kxPbhJkG8iwUzlbozJEKkCDvT7KhpqDZfbf7mcXJQxbXLnsfKfrJicPG8%2Bn0R9F59K383DOu39UN4PgJCzkxvCGL2%2BtPNhTVwff1%2FDp24L9bu6SuUDxb5i%2FLHPpexkYZtrRgkdqb%2F9&X-Amz-Signature=fbd15373471b9f84c4039af08c2e02a249eaff74af500b56008aba7020db935d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGW6L2BZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCs6B7pnMy6NSzhugqA5luxj5mbEMiz4wOv23XPevMC%2FAIgE51PztquNAjvqjmrky%2B3e0XKhCgLkjWPPRaguEr7Vvgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkbXTQHSaoMZn4WEyrcA3eS3YiO1S7CJE27wZSty65zwYzv1qsnVbEfXBuUY0mHK0W6mrLoMPpztVX8NnpiCQTNwgMhFeUuQ80T3CkW7Qnxo54f3bQRgGYzvPTTSJrmqLpFCU6CCOpxA%2BqHwf5hj7NMhVgk3rD%2Fp6KIpGsstF07Enbvf50SLXVci79eFp5In8KoVDcNh5yITwqN4AhQsAbqonA4rf4ZRj3NMmOrPe%2BkuqylgUVzRPbjHOjVkSZzqQOHnUnqtkvtxAEwFk9Yr7v1LgpadtByurKFxicrez2o0s93AuZQ0Pxbyaa%2BSAF54DY02jFXa5%2B3r5ZG1k78Kl1RelsUHIyZePRlqfC4EN7zNCHvpKzODB0Ql6TypGwRB6h50L3uyGvHPbRIgc6YJJvHuIXbuam6wMRXcF45krdZG0KOVy2L7%2F%2FuwIqmoKtTv%2F10pRd1M6CyzIrO6TXFKE5elCjMXok4NxJf9VnujbnI3GGfTQsN31Bv4qJ%2Btq%2BTJPurqLG%2FcvnUayFKoGMkJCw1PtQGwETFeNyw2z7hSMe%2Bwxrs33zA4%2F2YvNHT0yzqyeXsGZ9Ei%2BVXJwKFd%2BHhjfq6Y2CXm1voWmF8L8JWDQ4kpWecVMYG6gwWKNK5O5yiIqqYgh63OJsPwec0MKT7mMQGOqUB0pQ811UyvPS2RB2Y3iQzwr%2B583LVZ48EsaRINVbtLBb7uYvY6HJ1U56xGfPkS6VxI0X8C0RNCzMvI93%2FF4kxPbhJkG8iwUzlbozJEKkCDvT7KhpqDZfbf7mcXJQxbXLnsfKfrJicPG8%2Bn0R9F59K383DOu39UN4PgJCzkxvCGL2%2BtPNhTVwff1%2FDp24L9bu6SuUDxb5i%2FLHPpexkYZtrRgkdqb%2F9&X-Amz-Signature=86e08c2bbfc703f49ef931d58d0cd368640549d67c77ba8dab89fc3bd149f226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGW6L2BZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCs6B7pnMy6NSzhugqA5luxj5mbEMiz4wOv23XPevMC%2FAIgE51PztquNAjvqjmrky%2B3e0XKhCgLkjWPPRaguEr7Vvgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkbXTQHSaoMZn4WEyrcA3eS3YiO1S7CJE27wZSty65zwYzv1qsnVbEfXBuUY0mHK0W6mrLoMPpztVX8NnpiCQTNwgMhFeUuQ80T3CkW7Qnxo54f3bQRgGYzvPTTSJrmqLpFCU6CCOpxA%2BqHwf5hj7NMhVgk3rD%2Fp6KIpGsstF07Enbvf50SLXVci79eFp5In8KoVDcNh5yITwqN4AhQsAbqonA4rf4ZRj3NMmOrPe%2BkuqylgUVzRPbjHOjVkSZzqQOHnUnqtkvtxAEwFk9Yr7v1LgpadtByurKFxicrez2o0s93AuZQ0Pxbyaa%2BSAF54DY02jFXa5%2B3r5ZG1k78Kl1RelsUHIyZePRlqfC4EN7zNCHvpKzODB0Ql6TypGwRB6h50L3uyGvHPbRIgc6YJJvHuIXbuam6wMRXcF45krdZG0KOVy2L7%2F%2FuwIqmoKtTv%2F10pRd1M6CyzIrO6TXFKE5elCjMXok4NxJf9VnujbnI3GGfTQsN31Bv4qJ%2Btq%2BTJPurqLG%2FcvnUayFKoGMkJCw1PtQGwETFeNyw2z7hSMe%2Bwxrs33zA4%2F2YvNHT0yzqyeXsGZ9Ei%2BVXJwKFd%2BHhjfq6Y2CXm1voWmF8L8JWDQ4kpWecVMYG6gwWKNK5O5yiIqqYgh63OJsPwec0MKT7mMQGOqUB0pQ811UyvPS2RB2Y3iQzwr%2B583LVZ48EsaRINVbtLBb7uYvY6HJ1U56xGfPkS6VxI0X8C0RNCzMvI93%2FF4kxPbhJkG8iwUzlbozJEKkCDvT7KhpqDZfbf7mcXJQxbXLnsfKfrJicPG8%2Bn0R9F59K383DOu39UN4PgJCzkxvCGL2%2BtPNhTVwff1%2FDp24L9bu6SuUDxb5i%2FLHPpexkYZtrRgkdqb%2F9&X-Amz-Signature=be4923c3af9f66d01354e2754b9a98fb7c4db09f826f9a984235b5d70a5cb096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
