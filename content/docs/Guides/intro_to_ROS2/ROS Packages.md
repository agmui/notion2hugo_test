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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPPB3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBnDj606XQXys0%2Boemt1zxtgbq6bX%2F9%2FEBp5bhiv3aIwIhAMwQDlKnoBw7reJp%2BHC2rjASXGiglOFt85N8qzD59D17Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxRXwrRJiyxXdp%2FuBYq3AOA%2Fo70kCWLyhodemlspDKlqJhsUSsdf0LSmq8xzfDlz9%2FJup0%2BdhlzTEwLL%2BclM3p1p7pvLjXvXC05QjzG5lBzRB1p7DCmtBaHJYrtTRE6sz%2FACqpezGR269r6NTGgwlJ5q2EY%2FEgfd1ba5SDi6hlkkJLFTTqF6p2t8E7vAorX0gvc26MLdv8CV7i2RwLcvLLovHygGJ7mB%2BDBFefZj3RKLkN16uwZJO7MFIzlyx9z4fazZA6%2F8WMoPwLFPVrAPwJokgp9KPeG56d9AClgwM80WVN0CKdoP8%2FtBc%2FxPY5N2sFSdsWEWfpwU0ynFoiN31ltuvJ9veJjmYfKq0i2YNdzCvgnWPQBnyRdRvXeHdtVpiwK2YP4zb0Bym7MfEIN9vwhGSa5B0lH57d398pb8F1oSarvQPWFlHFqHGIO1x4xQKNv3q%2FJSVREue2U6SFG1DmX%2B7yySwfMoVkiiWUlfTgeILtUjhwF7LZQ8Q3IFB6uPJkhnvNxv6QqBuxzREJ2WSCjCT%2BgJ2idaSiVWoFtuEJXy%2BcNBPlNDJXcpuk%2B%2B52V72DvBhTx3JoeJ2rpc4NP72vbWIKmXjzQTH8wQZ%2FDHzVy%2FhejVZHk1xamabHdUDtAZ5ybHYvUP7MdCtHP6TD7upbEBjqkAb8%2Fr9Mj48AbZfXIxLyN13SChMude8CcwpvBmGfrU%2Bsr0wHA4xHbCQUs9m20JsiYZKtcHGoA9zE89yCRfPJvi4sok6PNeVxLKu4HGY53YDgLu4NjI8fSU%2F3sOReTKok%2BYMvaWunFKi6vuGc72RJGHyoJk6XEBGgCmYsGHBJFlFHHPzCHv6xQe0W6f3wA0aZdjk8K0iiXJJAl1lcwokP9PspezZTW&X-Amz-Signature=a64659904605c3538a3ca653c85db95974ff3d721837585058dd8f74486e805e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPPB3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBnDj606XQXys0%2Boemt1zxtgbq6bX%2F9%2FEBp5bhiv3aIwIhAMwQDlKnoBw7reJp%2BHC2rjASXGiglOFt85N8qzD59D17Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxRXwrRJiyxXdp%2FuBYq3AOA%2Fo70kCWLyhodemlspDKlqJhsUSsdf0LSmq8xzfDlz9%2FJup0%2BdhlzTEwLL%2BclM3p1p7pvLjXvXC05QjzG5lBzRB1p7DCmtBaHJYrtTRE6sz%2FACqpezGR269r6NTGgwlJ5q2EY%2FEgfd1ba5SDi6hlkkJLFTTqF6p2t8E7vAorX0gvc26MLdv8CV7i2RwLcvLLovHygGJ7mB%2BDBFefZj3RKLkN16uwZJO7MFIzlyx9z4fazZA6%2F8WMoPwLFPVrAPwJokgp9KPeG56d9AClgwM80WVN0CKdoP8%2FtBc%2FxPY5N2sFSdsWEWfpwU0ynFoiN31ltuvJ9veJjmYfKq0i2YNdzCvgnWPQBnyRdRvXeHdtVpiwK2YP4zb0Bym7MfEIN9vwhGSa5B0lH57d398pb8F1oSarvQPWFlHFqHGIO1x4xQKNv3q%2FJSVREue2U6SFG1DmX%2B7yySwfMoVkiiWUlfTgeILtUjhwF7LZQ8Q3IFB6uPJkhnvNxv6QqBuxzREJ2WSCjCT%2BgJ2idaSiVWoFtuEJXy%2BcNBPlNDJXcpuk%2B%2B52V72DvBhTx3JoeJ2rpc4NP72vbWIKmXjzQTH8wQZ%2FDHzVy%2FhejVZHk1xamabHdUDtAZ5ybHYvUP7MdCtHP6TD7upbEBjqkAb8%2Fr9Mj48AbZfXIxLyN13SChMude8CcwpvBmGfrU%2Bsr0wHA4xHbCQUs9m20JsiYZKtcHGoA9zE89yCRfPJvi4sok6PNeVxLKu4HGY53YDgLu4NjI8fSU%2F3sOReTKok%2BYMvaWunFKi6vuGc72RJGHyoJk6XEBGgCmYsGHBJFlFHHPzCHv6xQe0W6f3wA0aZdjk8K0iiXJJAl1lcwokP9PspezZTW&X-Amz-Signature=36ed05d3a769d1b8c386d1257a3e892c2d7ec8f0558ad775af6ace6d89580a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPPB3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBnDj606XQXys0%2Boemt1zxtgbq6bX%2F9%2FEBp5bhiv3aIwIhAMwQDlKnoBw7reJp%2BHC2rjASXGiglOFt85N8qzD59D17Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxRXwrRJiyxXdp%2FuBYq3AOA%2Fo70kCWLyhodemlspDKlqJhsUSsdf0LSmq8xzfDlz9%2FJup0%2BdhlzTEwLL%2BclM3p1p7pvLjXvXC05QjzG5lBzRB1p7DCmtBaHJYrtTRE6sz%2FACqpezGR269r6NTGgwlJ5q2EY%2FEgfd1ba5SDi6hlkkJLFTTqF6p2t8E7vAorX0gvc26MLdv8CV7i2RwLcvLLovHygGJ7mB%2BDBFefZj3RKLkN16uwZJO7MFIzlyx9z4fazZA6%2F8WMoPwLFPVrAPwJokgp9KPeG56d9AClgwM80WVN0CKdoP8%2FtBc%2FxPY5N2sFSdsWEWfpwU0ynFoiN31ltuvJ9veJjmYfKq0i2YNdzCvgnWPQBnyRdRvXeHdtVpiwK2YP4zb0Bym7MfEIN9vwhGSa5B0lH57d398pb8F1oSarvQPWFlHFqHGIO1x4xQKNv3q%2FJSVREue2U6SFG1DmX%2B7yySwfMoVkiiWUlfTgeILtUjhwF7LZQ8Q3IFB6uPJkhnvNxv6QqBuxzREJ2WSCjCT%2BgJ2idaSiVWoFtuEJXy%2BcNBPlNDJXcpuk%2B%2B52V72DvBhTx3JoeJ2rpc4NP72vbWIKmXjzQTH8wQZ%2FDHzVy%2FhejVZHk1xamabHdUDtAZ5ybHYvUP7MdCtHP6TD7upbEBjqkAb8%2Fr9Mj48AbZfXIxLyN13SChMude8CcwpvBmGfrU%2Bsr0wHA4xHbCQUs9m20JsiYZKtcHGoA9zE89yCRfPJvi4sok6PNeVxLKu4HGY53YDgLu4NjI8fSU%2F3sOReTKok%2BYMvaWunFKi6vuGc72RJGHyoJk6XEBGgCmYsGHBJFlFHHPzCHv6xQe0W6f3wA0aZdjk8K0iiXJJAl1lcwokP9PspezZTW&X-Amz-Signature=9db8a4f48d9ab14299d1514b246cb130de34c2bb55810e27c4a7f72f7826490c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPPB3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBnDj606XQXys0%2Boemt1zxtgbq6bX%2F9%2FEBp5bhiv3aIwIhAMwQDlKnoBw7reJp%2BHC2rjASXGiglOFt85N8qzD59D17Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxRXwrRJiyxXdp%2FuBYq3AOA%2Fo70kCWLyhodemlspDKlqJhsUSsdf0LSmq8xzfDlz9%2FJup0%2BdhlzTEwLL%2BclM3p1p7pvLjXvXC05QjzG5lBzRB1p7DCmtBaHJYrtTRE6sz%2FACqpezGR269r6NTGgwlJ5q2EY%2FEgfd1ba5SDi6hlkkJLFTTqF6p2t8E7vAorX0gvc26MLdv8CV7i2RwLcvLLovHygGJ7mB%2BDBFefZj3RKLkN16uwZJO7MFIzlyx9z4fazZA6%2F8WMoPwLFPVrAPwJokgp9KPeG56d9AClgwM80WVN0CKdoP8%2FtBc%2FxPY5N2sFSdsWEWfpwU0ynFoiN31ltuvJ9veJjmYfKq0i2YNdzCvgnWPQBnyRdRvXeHdtVpiwK2YP4zb0Bym7MfEIN9vwhGSa5B0lH57d398pb8F1oSarvQPWFlHFqHGIO1x4xQKNv3q%2FJSVREue2U6SFG1DmX%2B7yySwfMoVkiiWUlfTgeILtUjhwF7LZQ8Q3IFB6uPJkhnvNxv6QqBuxzREJ2WSCjCT%2BgJ2idaSiVWoFtuEJXy%2BcNBPlNDJXcpuk%2B%2B52V72DvBhTx3JoeJ2rpc4NP72vbWIKmXjzQTH8wQZ%2FDHzVy%2FhejVZHk1xamabHdUDtAZ5ybHYvUP7MdCtHP6TD7upbEBjqkAb8%2Fr9Mj48AbZfXIxLyN13SChMude8CcwpvBmGfrU%2Bsr0wHA4xHbCQUs9m20JsiYZKtcHGoA9zE89yCRfPJvi4sok6PNeVxLKu4HGY53YDgLu4NjI8fSU%2F3sOReTKok%2BYMvaWunFKi6vuGc72RJGHyoJk6XEBGgCmYsGHBJFlFHHPzCHv6xQe0W6f3wA0aZdjk8K0iiXJJAl1lcwokP9PspezZTW&X-Amz-Signature=95c1ca16430ec80c9712d724743b9611f639a4ac11f6a2e5e01b2d1a529cdd81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPPB3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBnDj606XQXys0%2Boemt1zxtgbq6bX%2F9%2FEBp5bhiv3aIwIhAMwQDlKnoBw7reJp%2BHC2rjASXGiglOFt85N8qzD59D17Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxRXwrRJiyxXdp%2FuBYq3AOA%2Fo70kCWLyhodemlspDKlqJhsUSsdf0LSmq8xzfDlz9%2FJup0%2BdhlzTEwLL%2BclM3p1p7pvLjXvXC05QjzG5lBzRB1p7DCmtBaHJYrtTRE6sz%2FACqpezGR269r6NTGgwlJ5q2EY%2FEgfd1ba5SDi6hlkkJLFTTqF6p2t8E7vAorX0gvc26MLdv8CV7i2RwLcvLLovHygGJ7mB%2BDBFefZj3RKLkN16uwZJO7MFIzlyx9z4fazZA6%2F8WMoPwLFPVrAPwJokgp9KPeG56d9AClgwM80WVN0CKdoP8%2FtBc%2FxPY5N2sFSdsWEWfpwU0ynFoiN31ltuvJ9veJjmYfKq0i2YNdzCvgnWPQBnyRdRvXeHdtVpiwK2YP4zb0Bym7MfEIN9vwhGSa5B0lH57d398pb8F1oSarvQPWFlHFqHGIO1x4xQKNv3q%2FJSVREue2U6SFG1DmX%2B7yySwfMoVkiiWUlfTgeILtUjhwF7LZQ8Q3IFB6uPJkhnvNxv6QqBuxzREJ2WSCjCT%2BgJ2idaSiVWoFtuEJXy%2BcNBPlNDJXcpuk%2B%2B52V72DvBhTx3JoeJ2rpc4NP72vbWIKmXjzQTH8wQZ%2FDHzVy%2FhejVZHk1xamabHdUDtAZ5ybHYvUP7MdCtHP6TD7upbEBjqkAb8%2Fr9Mj48AbZfXIxLyN13SChMude8CcwpvBmGfrU%2Bsr0wHA4xHbCQUs9m20JsiYZKtcHGoA9zE89yCRfPJvi4sok6PNeVxLKu4HGY53YDgLu4NjI8fSU%2F3sOReTKok%2BYMvaWunFKi6vuGc72RJGHyoJk6XEBGgCmYsGHBJFlFHHPzCHv6xQe0W6f3wA0aZdjk8K0iiXJJAl1lcwokP9PspezZTW&X-Amz-Signature=10521f27a0337b5d8cb950a21dbbf8395f95a35616464810a0aa5751aa138df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPPB3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBnDj606XQXys0%2Boemt1zxtgbq6bX%2F9%2FEBp5bhiv3aIwIhAMwQDlKnoBw7reJp%2BHC2rjASXGiglOFt85N8qzD59D17Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxRXwrRJiyxXdp%2FuBYq3AOA%2Fo70kCWLyhodemlspDKlqJhsUSsdf0LSmq8xzfDlz9%2FJup0%2BdhlzTEwLL%2BclM3p1p7pvLjXvXC05QjzG5lBzRB1p7DCmtBaHJYrtTRE6sz%2FACqpezGR269r6NTGgwlJ5q2EY%2FEgfd1ba5SDi6hlkkJLFTTqF6p2t8E7vAorX0gvc26MLdv8CV7i2RwLcvLLovHygGJ7mB%2BDBFefZj3RKLkN16uwZJO7MFIzlyx9z4fazZA6%2F8WMoPwLFPVrAPwJokgp9KPeG56d9AClgwM80WVN0CKdoP8%2FtBc%2FxPY5N2sFSdsWEWfpwU0ynFoiN31ltuvJ9veJjmYfKq0i2YNdzCvgnWPQBnyRdRvXeHdtVpiwK2YP4zb0Bym7MfEIN9vwhGSa5B0lH57d398pb8F1oSarvQPWFlHFqHGIO1x4xQKNv3q%2FJSVREue2U6SFG1DmX%2B7yySwfMoVkiiWUlfTgeILtUjhwF7LZQ8Q3IFB6uPJkhnvNxv6QqBuxzREJ2WSCjCT%2BgJ2idaSiVWoFtuEJXy%2BcNBPlNDJXcpuk%2B%2B52V72DvBhTx3JoeJ2rpc4NP72vbWIKmXjzQTH8wQZ%2FDHzVy%2FhejVZHk1xamabHdUDtAZ5ybHYvUP7MdCtHP6TD7upbEBjqkAb8%2Fr9Mj48AbZfXIxLyN13SChMude8CcwpvBmGfrU%2Bsr0wHA4xHbCQUs9m20JsiYZKtcHGoA9zE89yCRfPJvi4sok6PNeVxLKu4HGY53YDgLu4NjI8fSU%2F3sOReTKok%2BYMvaWunFKi6vuGc72RJGHyoJk6XEBGgCmYsGHBJFlFHHPzCHv6xQe0W6f3wA0aZdjk8K0iiXJJAl1lcwokP9PspezZTW&X-Amz-Signature=778496838fad862a0c57ff7594d1932f9bbbd0417bdb7cda0037b1f52d26bf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOCPPB3U%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDBnDj606XQXys0%2Boemt1zxtgbq6bX%2F9%2FEBp5bhiv3aIwIhAMwQDlKnoBw7reJp%2BHC2rjASXGiglOFt85N8qzD59D17Kv8DCG0QABoMNjM3NDIzMTgzODA1IgxRXwrRJiyxXdp%2FuBYq3AOA%2Fo70kCWLyhodemlspDKlqJhsUSsdf0LSmq8xzfDlz9%2FJup0%2BdhlzTEwLL%2BclM3p1p7pvLjXvXC05QjzG5lBzRB1p7DCmtBaHJYrtTRE6sz%2FACqpezGR269r6NTGgwlJ5q2EY%2FEgfd1ba5SDi6hlkkJLFTTqF6p2t8E7vAorX0gvc26MLdv8CV7i2RwLcvLLovHygGJ7mB%2BDBFefZj3RKLkN16uwZJO7MFIzlyx9z4fazZA6%2F8WMoPwLFPVrAPwJokgp9KPeG56d9AClgwM80WVN0CKdoP8%2FtBc%2FxPY5N2sFSdsWEWfpwU0ynFoiN31ltuvJ9veJjmYfKq0i2YNdzCvgnWPQBnyRdRvXeHdtVpiwK2YP4zb0Bym7MfEIN9vwhGSa5B0lH57d398pb8F1oSarvQPWFlHFqHGIO1x4xQKNv3q%2FJSVREue2U6SFG1DmX%2B7yySwfMoVkiiWUlfTgeILtUjhwF7LZQ8Q3IFB6uPJkhnvNxv6QqBuxzREJ2WSCjCT%2BgJ2idaSiVWoFtuEJXy%2BcNBPlNDJXcpuk%2B%2B52V72DvBhTx3JoeJ2rpc4NP72vbWIKmXjzQTH8wQZ%2FDHzVy%2FhejVZHk1xamabHdUDtAZ5ybHYvUP7MdCtHP6TD7upbEBjqkAb8%2Fr9Mj48AbZfXIxLyN13SChMude8CcwpvBmGfrU%2Bsr0wHA4xHbCQUs9m20JsiYZKtcHGoA9zE89yCRfPJvi4sok6PNeVxLKu4HGY53YDgLu4NjI8fSU%2F3sOReTKok%2BYMvaWunFKi6vuGc72RJGHyoJk6XEBGgCmYsGHBJFlFHHPzCHv6xQe0W6f3wA0aZdjk8K0iiXJJAl1lcwokP9PspezZTW&X-Amz-Signature=fbe09e84f942a8472f6ea6ce5da74bdeab8b5643eb50e69f943b9a503e2721cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
