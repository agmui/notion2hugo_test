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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJJHTQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC3b%2B%2FW7NDpR4x71bdjQ9yXDOvO9udVyZxXHfIbIl2UhQIhALH3qF1nquEgZTCvoMc4F9EtDAvEPynKUN4Orh8aSnG3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwqdl3dokAIqIcSQTkq3AMzuVjpfT9Yh4FW9QJk9IiW3e5H28T3fH5DQCQ5k4aEL1eJ%2BmDn7WCO9njkscUJr0xF8j0eYFZRhiBxJK2%2Be3rdB6iEpk2yIkh5hDkpriSxCxDz7CGcnPT%2B5t5pb8NN7x2Ic1LsNIMsxSE%2FNk%2FlhlI5DQF4J2QqT2wQhPeEVfBUmYa4MqwyO71JLMtK%2FN6NqvzGhfg7L%2FEwpzBgb6xDGQt8GDnOM%2FhSAguFUEMoOHpUWkViO3VqO0W7uCDkEmVOI%2F4Yx9EBpzVh2J37ijuGinvH73Q6D7QFAmvmtl54yv7ePKDE%2FmbxATWnaNmtM4CuFHhJGg8JAlpQF8uTU4ZkWrKtz9dEI%2FR6xAba6UyOZXKqntQNM%2FwyhvPRge1Yk3fiDA5Us8xhdZFyDoBLEu%2FO9CI%2Bo2JWxN02v7t%2FQfvaRbmlj3kK%2FpnOaIDDMSjGQkmuRNb7j235APONrSVlm1hTa8VD632rJ%2Bay0YDIOkuRYPF4jrbQzHHFkcDZj27BfGbXUaZnAnC8SMGz%2Fh0R4PoRL2W0O6rtAc5bsU54smAp6K2AmcEDUoOrEqeNqQwnMr2i6XqBgYcC%2FY9hZZf1lKpnjrUoTFFdvilr%2FxdReZICg9QlQNI5M56Xe3TrU1X%2B3jCo1ZfEBjqkATEIxPBbV86Ms0J5XAME9%2B1rnzwBZU4gjbCpI1nC0U0iET7MH2rWoho1U9rz5HpdoHCweWy23Vs%2BYSexcXnVjoELAtq%2FkFE7ff7s2Lj7KJbIOMmHCPcOut0%2BUEb%2F8LmB7zrgKTPVAOxg1pFy60QM9kPx%2BV22L00po%2FlGRWmrtoz9w4kxhbl0AYm5ZqA7U2IpT1OVRMXs8SUQMOGlnJLkcH4PNwQL&X-Amz-Signature=b5687d4ee341b0e8bc30dfe7e343f2f9e04bf183c95dc9d19a5174efd9b76d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJJHTQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC3b%2B%2FW7NDpR4x71bdjQ9yXDOvO9udVyZxXHfIbIl2UhQIhALH3qF1nquEgZTCvoMc4F9EtDAvEPynKUN4Orh8aSnG3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwqdl3dokAIqIcSQTkq3AMzuVjpfT9Yh4FW9QJk9IiW3e5H28T3fH5DQCQ5k4aEL1eJ%2BmDn7WCO9njkscUJr0xF8j0eYFZRhiBxJK2%2Be3rdB6iEpk2yIkh5hDkpriSxCxDz7CGcnPT%2B5t5pb8NN7x2Ic1LsNIMsxSE%2FNk%2FlhlI5DQF4J2QqT2wQhPeEVfBUmYa4MqwyO71JLMtK%2FN6NqvzGhfg7L%2FEwpzBgb6xDGQt8GDnOM%2FhSAguFUEMoOHpUWkViO3VqO0W7uCDkEmVOI%2F4Yx9EBpzVh2J37ijuGinvH73Q6D7QFAmvmtl54yv7ePKDE%2FmbxATWnaNmtM4CuFHhJGg8JAlpQF8uTU4ZkWrKtz9dEI%2FR6xAba6UyOZXKqntQNM%2FwyhvPRge1Yk3fiDA5Us8xhdZFyDoBLEu%2FO9CI%2Bo2JWxN02v7t%2FQfvaRbmlj3kK%2FpnOaIDDMSjGQkmuRNb7j235APONrSVlm1hTa8VD632rJ%2Bay0YDIOkuRYPF4jrbQzHHFkcDZj27BfGbXUaZnAnC8SMGz%2Fh0R4PoRL2W0O6rtAc5bsU54smAp6K2AmcEDUoOrEqeNqQwnMr2i6XqBgYcC%2FY9hZZf1lKpnjrUoTFFdvilr%2FxdReZICg9QlQNI5M56Xe3TrU1X%2B3jCo1ZfEBjqkATEIxPBbV86Ms0J5XAME9%2B1rnzwBZU4gjbCpI1nC0U0iET7MH2rWoho1U9rz5HpdoHCweWy23Vs%2BYSexcXnVjoELAtq%2FkFE7ff7s2Lj7KJbIOMmHCPcOut0%2BUEb%2F8LmB7zrgKTPVAOxg1pFy60QM9kPx%2BV22L00po%2FlGRWmrtoz9w4kxhbl0AYm5ZqA7U2IpT1OVRMXs8SUQMOGlnJLkcH4PNwQL&X-Amz-Signature=06b7ff09fd5ea252288658f87be07412d5e6f03aa270e32104d105c7e4445d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJJHTQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC3b%2B%2FW7NDpR4x71bdjQ9yXDOvO9udVyZxXHfIbIl2UhQIhALH3qF1nquEgZTCvoMc4F9EtDAvEPynKUN4Orh8aSnG3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwqdl3dokAIqIcSQTkq3AMzuVjpfT9Yh4FW9QJk9IiW3e5H28T3fH5DQCQ5k4aEL1eJ%2BmDn7WCO9njkscUJr0xF8j0eYFZRhiBxJK2%2Be3rdB6iEpk2yIkh5hDkpriSxCxDz7CGcnPT%2B5t5pb8NN7x2Ic1LsNIMsxSE%2FNk%2FlhlI5DQF4J2QqT2wQhPeEVfBUmYa4MqwyO71JLMtK%2FN6NqvzGhfg7L%2FEwpzBgb6xDGQt8GDnOM%2FhSAguFUEMoOHpUWkViO3VqO0W7uCDkEmVOI%2F4Yx9EBpzVh2J37ijuGinvH73Q6D7QFAmvmtl54yv7ePKDE%2FmbxATWnaNmtM4CuFHhJGg8JAlpQF8uTU4ZkWrKtz9dEI%2FR6xAba6UyOZXKqntQNM%2FwyhvPRge1Yk3fiDA5Us8xhdZFyDoBLEu%2FO9CI%2Bo2JWxN02v7t%2FQfvaRbmlj3kK%2FpnOaIDDMSjGQkmuRNb7j235APONrSVlm1hTa8VD632rJ%2Bay0YDIOkuRYPF4jrbQzHHFkcDZj27BfGbXUaZnAnC8SMGz%2Fh0R4PoRL2W0O6rtAc5bsU54smAp6K2AmcEDUoOrEqeNqQwnMr2i6XqBgYcC%2FY9hZZf1lKpnjrUoTFFdvilr%2FxdReZICg9QlQNI5M56Xe3TrU1X%2B3jCo1ZfEBjqkATEIxPBbV86Ms0J5XAME9%2B1rnzwBZU4gjbCpI1nC0U0iET7MH2rWoho1U9rz5HpdoHCweWy23Vs%2BYSexcXnVjoELAtq%2FkFE7ff7s2Lj7KJbIOMmHCPcOut0%2BUEb%2F8LmB7zrgKTPVAOxg1pFy60QM9kPx%2BV22L00po%2FlGRWmrtoz9w4kxhbl0AYm5ZqA7U2IpT1OVRMXs8SUQMOGlnJLkcH4PNwQL&X-Amz-Signature=d4c569c9c233aa37a6bc28c945227baab6b9aceeb108c9c2fcf152cc63f1dbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJJHTQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC3b%2B%2FW7NDpR4x71bdjQ9yXDOvO9udVyZxXHfIbIl2UhQIhALH3qF1nquEgZTCvoMc4F9EtDAvEPynKUN4Orh8aSnG3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwqdl3dokAIqIcSQTkq3AMzuVjpfT9Yh4FW9QJk9IiW3e5H28T3fH5DQCQ5k4aEL1eJ%2BmDn7WCO9njkscUJr0xF8j0eYFZRhiBxJK2%2Be3rdB6iEpk2yIkh5hDkpriSxCxDz7CGcnPT%2B5t5pb8NN7x2Ic1LsNIMsxSE%2FNk%2FlhlI5DQF4J2QqT2wQhPeEVfBUmYa4MqwyO71JLMtK%2FN6NqvzGhfg7L%2FEwpzBgb6xDGQt8GDnOM%2FhSAguFUEMoOHpUWkViO3VqO0W7uCDkEmVOI%2F4Yx9EBpzVh2J37ijuGinvH73Q6D7QFAmvmtl54yv7ePKDE%2FmbxATWnaNmtM4CuFHhJGg8JAlpQF8uTU4ZkWrKtz9dEI%2FR6xAba6UyOZXKqntQNM%2FwyhvPRge1Yk3fiDA5Us8xhdZFyDoBLEu%2FO9CI%2Bo2JWxN02v7t%2FQfvaRbmlj3kK%2FpnOaIDDMSjGQkmuRNb7j235APONrSVlm1hTa8VD632rJ%2Bay0YDIOkuRYPF4jrbQzHHFkcDZj27BfGbXUaZnAnC8SMGz%2Fh0R4PoRL2W0O6rtAc5bsU54smAp6K2AmcEDUoOrEqeNqQwnMr2i6XqBgYcC%2FY9hZZf1lKpnjrUoTFFdvilr%2FxdReZICg9QlQNI5M56Xe3TrU1X%2B3jCo1ZfEBjqkATEIxPBbV86Ms0J5XAME9%2B1rnzwBZU4gjbCpI1nC0U0iET7MH2rWoho1U9rz5HpdoHCweWy23Vs%2BYSexcXnVjoELAtq%2FkFE7ff7s2Lj7KJbIOMmHCPcOut0%2BUEb%2F8LmB7zrgKTPVAOxg1pFy60QM9kPx%2BV22L00po%2FlGRWmrtoz9w4kxhbl0AYm5ZqA7U2IpT1OVRMXs8SUQMOGlnJLkcH4PNwQL&X-Amz-Signature=4128b842d604272d58086fb7247a2de0962d7fa2038d43e41f51baf0cb989b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJJHTQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC3b%2B%2FW7NDpR4x71bdjQ9yXDOvO9udVyZxXHfIbIl2UhQIhALH3qF1nquEgZTCvoMc4F9EtDAvEPynKUN4Orh8aSnG3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwqdl3dokAIqIcSQTkq3AMzuVjpfT9Yh4FW9QJk9IiW3e5H28T3fH5DQCQ5k4aEL1eJ%2BmDn7WCO9njkscUJr0xF8j0eYFZRhiBxJK2%2Be3rdB6iEpk2yIkh5hDkpriSxCxDz7CGcnPT%2B5t5pb8NN7x2Ic1LsNIMsxSE%2FNk%2FlhlI5DQF4J2QqT2wQhPeEVfBUmYa4MqwyO71JLMtK%2FN6NqvzGhfg7L%2FEwpzBgb6xDGQt8GDnOM%2FhSAguFUEMoOHpUWkViO3VqO0W7uCDkEmVOI%2F4Yx9EBpzVh2J37ijuGinvH73Q6D7QFAmvmtl54yv7ePKDE%2FmbxATWnaNmtM4CuFHhJGg8JAlpQF8uTU4ZkWrKtz9dEI%2FR6xAba6UyOZXKqntQNM%2FwyhvPRge1Yk3fiDA5Us8xhdZFyDoBLEu%2FO9CI%2Bo2JWxN02v7t%2FQfvaRbmlj3kK%2FpnOaIDDMSjGQkmuRNb7j235APONrSVlm1hTa8VD632rJ%2Bay0YDIOkuRYPF4jrbQzHHFkcDZj27BfGbXUaZnAnC8SMGz%2Fh0R4PoRL2W0O6rtAc5bsU54smAp6K2AmcEDUoOrEqeNqQwnMr2i6XqBgYcC%2FY9hZZf1lKpnjrUoTFFdvilr%2FxdReZICg9QlQNI5M56Xe3TrU1X%2B3jCo1ZfEBjqkATEIxPBbV86Ms0J5XAME9%2B1rnzwBZU4gjbCpI1nC0U0iET7MH2rWoho1U9rz5HpdoHCweWy23Vs%2BYSexcXnVjoELAtq%2FkFE7ff7s2Lj7KJbIOMmHCPcOut0%2BUEb%2F8LmB7zrgKTPVAOxg1pFy60QM9kPx%2BV22L00po%2FlGRWmrtoz9w4kxhbl0AYm5ZqA7U2IpT1OVRMXs8SUQMOGlnJLkcH4PNwQL&X-Amz-Signature=151978dd4ddf60530dc0114666ca91abc42d6ab0c82d373810f615719de9d963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJJHTQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC3b%2B%2FW7NDpR4x71bdjQ9yXDOvO9udVyZxXHfIbIl2UhQIhALH3qF1nquEgZTCvoMc4F9EtDAvEPynKUN4Orh8aSnG3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwqdl3dokAIqIcSQTkq3AMzuVjpfT9Yh4FW9QJk9IiW3e5H28T3fH5DQCQ5k4aEL1eJ%2BmDn7WCO9njkscUJr0xF8j0eYFZRhiBxJK2%2Be3rdB6iEpk2yIkh5hDkpriSxCxDz7CGcnPT%2B5t5pb8NN7x2Ic1LsNIMsxSE%2FNk%2FlhlI5DQF4J2QqT2wQhPeEVfBUmYa4MqwyO71JLMtK%2FN6NqvzGhfg7L%2FEwpzBgb6xDGQt8GDnOM%2FhSAguFUEMoOHpUWkViO3VqO0W7uCDkEmVOI%2F4Yx9EBpzVh2J37ijuGinvH73Q6D7QFAmvmtl54yv7ePKDE%2FmbxATWnaNmtM4CuFHhJGg8JAlpQF8uTU4ZkWrKtz9dEI%2FR6xAba6UyOZXKqntQNM%2FwyhvPRge1Yk3fiDA5Us8xhdZFyDoBLEu%2FO9CI%2Bo2JWxN02v7t%2FQfvaRbmlj3kK%2FpnOaIDDMSjGQkmuRNb7j235APONrSVlm1hTa8VD632rJ%2Bay0YDIOkuRYPF4jrbQzHHFkcDZj27BfGbXUaZnAnC8SMGz%2Fh0R4PoRL2W0O6rtAc5bsU54smAp6K2AmcEDUoOrEqeNqQwnMr2i6XqBgYcC%2FY9hZZf1lKpnjrUoTFFdvilr%2FxdReZICg9QlQNI5M56Xe3TrU1X%2B3jCo1ZfEBjqkATEIxPBbV86Ms0J5XAME9%2B1rnzwBZU4gjbCpI1nC0U0iET7MH2rWoho1U9rz5HpdoHCweWy23Vs%2BYSexcXnVjoELAtq%2FkFE7ff7s2Lj7KJbIOMmHCPcOut0%2BUEb%2F8LmB7zrgKTPVAOxg1pFy60QM9kPx%2BV22L00po%2FlGRWmrtoz9w4kxhbl0AYm5ZqA7U2IpT1OVRMXs8SUQMOGlnJLkcH4PNwQL&X-Amz-Signature=045faf2f8a83df4ceafeaa1915692da59488dc4aad860cc92d99671a0fcbcaaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJJHTQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC3b%2B%2FW7NDpR4x71bdjQ9yXDOvO9udVyZxXHfIbIl2UhQIhALH3qF1nquEgZTCvoMc4F9EtDAvEPynKUN4Orh8aSnG3Kv8DCHIQABoMNjM3NDIzMTgzODA1Igwqdl3dokAIqIcSQTkq3AMzuVjpfT9Yh4FW9QJk9IiW3e5H28T3fH5DQCQ5k4aEL1eJ%2BmDn7WCO9njkscUJr0xF8j0eYFZRhiBxJK2%2Be3rdB6iEpk2yIkh5hDkpriSxCxDz7CGcnPT%2B5t5pb8NN7x2Ic1LsNIMsxSE%2FNk%2FlhlI5DQF4J2QqT2wQhPeEVfBUmYa4MqwyO71JLMtK%2FN6NqvzGhfg7L%2FEwpzBgb6xDGQt8GDnOM%2FhSAguFUEMoOHpUWkViO3VqO0W7uCDkEmVOI%2F4Yx9EBpzVh2J37ijuGinvH73Q6D7QFAmvmtl54yv7ePKDE%2FmbxATWnaNmtM4CuFHhJGg8JAlpQF8uTU4ZkWrKtz9dEI%2FR6xAba6UyOZXKqntQNM%2FwyhvPRge1Yk3fiDA5Us8xhdZFyDoBLEu%2FO9CI%2Bo2JWxN02v7t%2FQfvaRbmlj3kK%2FpnOaIDDMSjGQkmuRNb7j235APONrSVlm1hTa8VD632rJ%2Bay0YDIOkuRYPF4jrbQzHHFkcDZj27BfGbXUaZnAnC8SMGz%2Fh0R4PoRL2W0O6rtAc5bsU54smAp6K2AmcEDUoOrEqeNqQwnMr2i6XqBgYcC%2FY9hZZf1lKpnjrUoTFFdvilr%2FxdReZICg9QlQNI5M56Xe3TrU1X%2B3jCo1ZfEBjqkATEIxPBbV86Ms0J5XAME9%2B1rnzwBZU4gjbCpI1nC0U0iET7MH2rWoho1U9rz5HpdoHCweWy23Vs%2BYSexcXnVjoELAtq%2FkFE7ff7s2Lj7KJbIOMmHCPcOut0%2BUEb%2F8LmB7zrgKTPVAOxg1pFy60QM9kPx%2BV22L00po%2FlGRWmrtoz9w4kxhbl0AYm5ZqA7U2IpT1OVRMXs8SUQMOGlnJLkcH4PNwQL&X-Amz-Signature=6f491683f497321b1f4a92ae699a9a9639c6068e385afd5ca74a41c6017021b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
