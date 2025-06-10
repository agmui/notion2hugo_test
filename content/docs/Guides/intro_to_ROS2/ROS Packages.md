---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RNZNGO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bw4YHtinLJVQz1M6Rd4CM6R0FCJ%2BbJY3%2BF%2FoooZXK1AiBhNRs6p7CM%2BNdyMl393jIIsEU3lcGMFS4fJ9FqdcV02CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyPucAzH5MU9EvHbKtwDRTYP6H3MufoWOBA4ksWOr6INixvrPX8eAmyCmQoWBFAga3SSAMo5PWMQD7pxLnvaWCK%2BF4WSvpZi49QQ%2F4vJQcE62u6J5QgYZweT4z3REloHrqB7MeX9YYbnnAESjSAAa%2F1%2BMWHgb9LN2EYB2pFCIP13AIGWyVGzcKK3Gnb%2F0C%2F9MuDUdvyxMh%2BEJWi9nkBCnQ2zPwVCIm0myUNhO%2FW6eGeUz7HiJbRvyhS7bpRcglUo8J3t2uB3TcU9hAZPLSDoc29kPv7vkKBU4BEdk1feBZWfVvUGAkSzpx4B82RpqyyY8R3NgTC3R8jFaKDCPX74YDVgjUZ%2Fu9pULKfCGqRsgWH8mKphelSs1uNGR9Jz5UvuJIQYKz1rPe8%2BnjPFhGc%2BVy3nv3v4yPtz5bvNfHeaN74pAuO5l2AsDxo2VUXqMEVrdV%2FAL%2BsqukBO0ZXxtP2UVFi8QZSSAqTOmwgSPxWTgVWW6gAv%2BgTavC2Z4%2FYriNaQlcMXIr%2ByCn3qxhNnHhB1%2BK6dkO65a8t6GSmCTsfgeSAn27%2B56VMsh4Soj9JdIOGd3TnRTvim3DePVauFSp9Wz7L02zLPjBY7GqlQJNmA0ivIfPZWzXG%2FTeqiUKyyF4%2F78rlwifo%2FkR55FggwrrWiwgY6pgHLh9xlohK0BnZtPEi27TBf0Tqb1jUTiENAnxvBKGwH%2F6%2FjDBzu84I9WTbHEyAGTWgODBU2DwTT4J72fiE%2B9P0sCG8TQYGhlIeKZhQCAckZM785EVdrV1qjAoTsAFuBaTnMmFf7AYN2QpRReFKzlKqyEV6mdq%2FPdqpoYR8c85GqZIL6m5S7Ttyx%2BQfF2X4dhGu%2FqE3mIN4ORdUSEUZEwos3iuSZ7e3F&X-Amz-Signature=8dfad9e467d4131deb73ba473f747fe24cb6ea40a3ebc760d8d074de2d505f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RNZNGO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bw4YHtinLJVQz1M6Rd4CM6R0FCJ%2BbJY3%2BF%2FoooZXK1AiBhNRs6p7CM%2BNdyMl393jIIsEU3lcGMFS4fJ9FqdcV02CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyPucAzH5MU9EvHbKtwDRTYP6H3MufoWOBA4ksWOr6INixvrPX8eAmyCmQoWBFAga3SSAMo5PWMQD7pxLnvaWCK%2BF4WSvpZi49QQ%2F4vJQcE62u6J5QgYZweT4z3REloHrqB7MeX9YYbnnAESjSAAa%2F1%2BMWHgb9LN2EYB2pFCIP13AIGWyVGzcKK3Gnb%2F0C%2F9MuDUdvyxMh%2BEJWi9nkBCnQ2zPwVCIm0myUNhO%2FW6eGeUz7HiJbRvyhS7bpRcglUo8J3t2uB3TcU9hAZPLSDoc29kPv7vkKBU4BEdk1feBZWfVvUGAkSzpx4B82RpqyyY8R3NgTC3R8jFaKDCPX74YDVgjUZ%2Fu9pULKfCGqRsgWH8mKphelSs1uNGR9Jz5UvuJIQYKz1rPe8%2BnjPFhGc%2BVy3nv3v4yPtz5bvNfHeaN74pAuO5l2AsDxo2VUXqMEVrdV%2FAL%2BsqukBO0ZXxtP2UVFi8QZSSAqTOmwgSPxWTgVWW6gAv%2BgTavC2Z4%2FYriNaQlcMXIr%2ByCn3qxhNnHhB1%2BK6dkO65a8t6GSmCTsfgeSAn27%2B56VMsh4Soj9JdIOGd3TnRTvim3DePVauFSp9Wz7L02zLPjBY7GqlQJNmA0ivIfPZWzXG%2FTeqiUKyyF4%2F78rlwifo%2FkR55FggwrrWiwgY6pgHLh9xlohK0BnZtPEi27TBf0Tqb1jUTiENAnxvBKGwH%2F6%2FjDBzu84I9WTbHEyAGTWgODBU2DwTT4J72fiE%2B9P0sCG8TQYGhlIeKZhQCAckZM785EVdrV1qjAoTsAFuBaTnMmFf7AYN2QpRReFKzlKqyEV6mdq%2FPdqpoYR8c85GqZIL6m5S7Ttyx%2BQfF2X4dhGu%2FqE3mIN4ORdUSEUZEwos3iuSZ7e3F&X-Amz-Signature=156357dd4df4b6d9bf1d56bf628ac47c58f61cf25d7637b0fb7ef510b32cfac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RNZNGO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bw4YHtinLJVQz1M6Rd4CM6R0FCJ%2BbJY3%2BF%2FoooZXK1AiBhNRs6p7CM%2BNdyMl393jIIsEU3lcGMFS4fJ9FqdcV02CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyPucAzH5MU9EvHbKtwDRTYP6H3MufoWOBA4ksWOr6INixvrPX8eAmyCmQoWBFAga3SSAMo5PWMQD7pxLnvaWCK%2BF4WSvpZi49QQ%2F4vJQcE62u6J5QgYZweT4z3REloHrqB7MeX9YYbnnAESjSAAa%2F1%2BMWHgb9LN2EYB2pFCIP13AIGWyVGzcKK3Gnb%2F0C%2F9MuDUdvyxMh%2BEJWi9nkBCnQ2zPwVCIm0myUNhO%2FW6eGeUz7HiJbRvyhS7bpRcglUo8J3t2uB3TcU9hAZPLSDoc29kPv7vkKBU4BEdk1feBZWfVvUGAkSzpx4B82RpqyyY8R3NgTC3R8jFaKDCPX74YDVgjUZ%2Fu9pULKfCGqRsgWH8mKphelSs1uNGR9Jz5UvuJIQYKz1rPe8%2BnjPFhGc%2BVy3nv3v4yPtz5bvNfHeaN74pAuO5l2AsDxo2VUXqMEVrdV%2FAL%2BsqukBO0ZXxtP2UVFi8QZSSAqTOmwgSPxWTgVWW6gAv%2BgTavC2Z4%2FYriNaQlcMXIr%2ByCn3qxhNnHhB1%2BK6dkO65a8t6GSmCTsfgeSAn27%2B56VMsh4Soj9JdIOGd3TnRTvim3DePVauFSp9Wz7L02zLPjBY7GqlQJNmA0ivIfPZWzXG%2FTeqiUKyyF4%2F78rlwifo%2FkR55FggwrrWiwgY6pgHLh9xlohK0BnZtPEi27TBf0Tqb1jUTiENAnxvBKGwH%2F6%2FjDBzu84I9WTbHEyAGTWgODBU2DwTT4J72fiE%2B9P0sCG8TQYGhlIeKZhQCAckZM785EVdrV1qjAoTsAFuBaTnMmFf7AYN2QpRReFKzlKqyEV6mdq%2FPdqpoYR8c85GqZIL6m5S7Ttyx%2BQfF2X4dhGu%2FqE3mIN4ORdUSEUZEwos3iuSZ7e3F&X-Amz-Signature=2d05361538b1f3ff02ed4ee10f3ed3f3b54a9e45b3ed499d009fb10c76dd919b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RNZNGO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bw4YHtinLJVQz1M6Rd4CM6R0FCJ%2BbJY3%2BF%2FoooZXK1AiBhNRs6p7CM%2BNdyMl393jIIsEU3lcGMFS4fJ9FqdcV02CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyPucAzH5MU9EvHbKtwDRTYP6H3MufoWOBA4ksWOr6INixvrPX8eAmyCmQoWBFAga3SSAMo5PWMQD7pxLnvaWCK%2BF4WSvpZi49QQ%2F4vJQcE62u6J5QgYZweT4z3REloHrqB7MeX9YYbnnAESjSAAa%2F1%2BMWHgb9LN2EYB2pFCIP13AIGWyVGzcKK3Gnb%2F0C%2F9MuDUdvyxMh%2BEJWi9nkBCnQ2zPwVCIm0myUNhO%2FW6eGeUz7HiJbRvyhS7bpRcglUo8J3t2uB3TcU9hAZPLSDoc29kPv7vkKBU4BEdk1feBZWfVvUGAkSzpx4B82RpqyyY8R3NgTC3R8jFaKDCPX74YDVgjUZ%2Fu9pULKfCGqRsgWH8mKphelSs1uNGR9Jz5UvuJIQYKz1rPe8%2BnjPFhGc%2BVy3nv3v4yPtz5bvNfHeaN74pAuO5l2AsDxo2VUXqMEVrdV%2FAL%2BsqukBO0ZXxtP2UVFi8QZSSAqTOmwgSPxWTgVWW6gAv%2BgTavC2Z4%2FYriNaQlcMXIr%2ByCn3qxhNnHhB1%2BK6dkO65a8t6GSmCTsfgeSAn27%2B56VMsh4Soj9JdIOGd3TnRTvim3DePVauFSp9Wz7L02zLPjBY7GqlQJNmA0ivIfPZWzXG%2FTeqiUKyyF4%2F78rlwifo%2FkR55FggwrrWiwgY6pgHLh9xlohK0BnZtPEi27TBf0Tqb1jUTiENAnxvBKGwH%2F6%2FjDBzu84I9WTbHEyAGTWgODBU2DwTT4J72fiE%2B9P0sCG8TQYGhlIeKZhQCAckZM785EVdrV1qjAoTsAFuBaTnMmFf7AYN2QpRReFKzlKqyEV6mdq%2FPdqpoYR8c85GqZIL6m5S7Ttyx%2BQfF2X4dhGu%2FqE3mIN4ORdUSEUZEwos3iuSZ7e3F&X-Amz-Signature=800d18aa3cc4ea32ef2549145502b529820c1d9a42ffa8abc8528ff1346c1a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RNZNGO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bw4YHtinLJVQz1M6Rd4CM6R0FCJ%2BbJY3%2BF%2FoooZXK1AiBhNRs6p7CM%2BNdyMl393jIIsEU3lcGMFS4fJ9FqdcV02CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyPucAzH5MU9EvHbKtwDRTYP6H3MufoWOBA4ksWOr6INixvrPX8eAmyCmQoWBFAga3SSAMo5PWMQD7pxLnvaWCK%2BF4WSvpZi49QQ%2F4vJQcE62u6J5QgYZweT4z3REloHrqB7MeX9YYbnnAESjSAAa%2F1%2BMWHgb9LN2EYB2pFCIP13AIGWyVGzcKK3Gnb%2F0C%2F9MuDUdvyxMh%2BEJWi9nkBCnQ2zPwVCIm0myUNhO%2FW6eGeUz7HiJbRvyhS7bpRcglUo8J3t2uB3TcU9hAZPLSDoc29kPv7vkKBU4BEdk1feBZWfVvUGAkSzpx4B82RpqyyY8R3NgTC3R8jFaKDCPX74YDVgjUZ%2Fu9pULKfCGqRsgWH8mKphelSs1uNGR9Jz5UvuJIQYKz1rPe8%2BnjPFhGc%2BVy3nv3v4yPtz5bvNfHeaN74pAuO5l2AsDxo2VUXqMEVrdV%2FAL%2BsqukBO0ZXxtP2UVFi8QZSSAqTOmwgSPxWTgVWW6gAv%2BgTavC2Z4%2FYriNaQlcMXIr%2ByCn3qxhNnHhB1%2BK6dkO65a8t6GSmCTsfgeSAn27%2B56VMsh4Soj9JdIOGd3TnRTvim3DePVauFSp9Wz7L02zLPjBY7GqlQJNmA0ivIfPZWzXG%2FTeqiUKyyF4%2F78rlwifo%2FkR55FggwrrWiwgY6pgHLh9xlohK0BnZtPEi27TBf0Tqb1jUTiENAnxvBKGwH%2F6%2FjDBzu84I9WTbHEyAGTWgODBU2DwTT4J72fiE%2B9P0sCG8TQYGhlIeKZhQCAckZM785EVdrV1qjAoTsAFuBaTnMmFf7AYN2QpRReFKzlKqyEV6mdq%2FPdqpoYR8c85GqZIL6m5S7Ttyx%2BQfF2X4dhGu%2FqE3mIN4ORdUSEUZEwos3iuSZ7e3F&X-Amz-Signature=43cd9737cc08bf9634ad4bd319ef4a58cebcb95b0f3313b9f344e6f829f6a8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RNZNGO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bw4YHtinLJVQz1M6Rd4CM6R0FCJ%2BbJY3%2BF%2FoooZXK1AiBhNRs6p7CM%2BNdyMl393jIIsEU3lcGMFS4fJ9FqdcV02CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyPucAzH5MU9EvHbKtwDRTYP6H3MufoWOBA4ksWOr6INixvrPX8eAmyCmQoWBFAga3SSAMo5PWMQD7pxLnvaWCK%2BF4WSvpZi49QQ%2F4vJQcE62u6J5QgYZweT4z3REloHrqB7MeX9YYbnnAESjSAAa%2F1%2BMWHgb9LN2EYB2pFCIP13AIGWyVGzcKK3Gnb%2F0C%2F9MuDUdvyxMh%2BEJWi9nkBCnQ2zPwVCIm0myUNhO%2FW6eGeUz7HiJbRvyhS7bpRcglUo8J3t2uB3TcU9hAZPLSDoc29kPv7vkKBU4BEdk1feBZWfVvUGAkSzpx4B82RpqyyY8R3NgTC3R8jFaKDCPX74YDVgjUZ%2Fu9pULKfCGqRsgWH8mKphelSs1uNGR9Jz5UvuJIQYKz1rPe8%2BnjPFhGc%2BVy3nv3v4yPtz5bvNfHeaN74pAuO5l2AsDxo2VUXqMEVrdV%2FAL%2BsqukBO0ZXxtP2UVFi8QZSSAqTOmwgSPxWTgVWW6gAv%2BgTavC2Z4%2FYriNaQlcMXIr%2ByCn3qxhNnHhB1%2BK6dkO65a8t6GSmCTsfgeSAn27%2B56VMsh4Soj9JdIOGd3TnRTvim3DePVauFSp9Wz7L02zLPjBY7GqlQJNmA0ivIfPZWzXG%2FTeqiUKyyF4%2F78rlwifo%2FkR55FggwrrWiwgY6pgHLh9xlohK0BnZtPEi27TBf0Tqb1jUTiENAnxvBKGwH%2F6%2FjDBzu84I9WTbHEyAGTWgODBU2DwTT4J72fiE%2B9P0sCG8TQYGhlIeKZhQCAckZM785EVdrV1qjAoTsAFuBaTnMmFf7AYN2QpRReFKzlKqyEV6mdq%2FPdqpoYR8c85GqZIL6m5S7Ttyx%2BQfF2X4dhGu%2FqE3mIN4ORdUSEUZEwos3iuSZ7e3F&X-Amz-Signature=9ce1dfb5511ab2e4be775b426219cd5de64af6bf33db4d85368db0b1b48c8924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RNZNGO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bw4YHtinLJVQz1M6Rd4CM6R0FCJ%2BbJY3%2BF%2FoooZXK1AiBhNRs6p7CM%2BNdyMl393jIIsEU3lcGMFS4fJ9FqdcV02CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyPucAzH5MU9EvHbKtwDRTYP6H3MufoWOBA4ksWOr6INixvrPX8eAmyCmQoWBFAga3SSAMo5PWMQD7pxLnvaWCK%2BF4WSvpZi49QQ%2F4vJQcE62u6J5QgYZweT4z3REloHrqB7MeX9YYbnnAESjSAAa%2F1%2BMWHgb9LN2EYB2pFCIP13AIGWyVGzcKK3Gnb%2F0C%2F9MuDUdvyxMh%2BEJWi9nkBCnQ2zPwVCIm0myUNhO%2FW6eGeUz7HiJbRvyhS7bpRcglUo8J3t2uB3TcU9hAZPLSDoc29kPv7vkKBU4BEdk1feBZWfVvUGAkSzpx4B82RpqyyY8R3NgTC3R8jFaKDCPX74YDVgjUZ%2Fu9pULKfCGqRsgWH8mKphelSs1uNGR9Jz5UvuJIQYKz1rPe8%2BnjPFhGc%2BVy3nv3v4yPtz5bvNfHeaN74pAuO5l2AsDxo2VUXqMEVrdV%2FAL%2BsqukBO0ZXxtP2UVFi8QZSSAqTOmwgSPxWTgVWW6gAv%2BgTavC2Z4%2FYriNaQlcMXIr%2ByCn3qxhNnHhB1%2BK6dkO65a8t6GSmCTsfgeSAn27%2B56VMsh4Soj9JdIOGd3TnRTvim3DePVauFSp9Wz7L02zLPjBY7GqlQJNmA0ivIfPZWzXG%2FTeqiUKyyF4%2F78rlwifo%2FkR55FggwrrWiwgY6pgHLh9xlohK0BnZtPEi27TBf0Tqb1jUTiENAnxvBKGwH%2F6%2FjDBzu84I9WTbHEyAGTWgODBU2DwTT4J72fiE%2B9P0sCG8TQYGhlIeKZhQCAckZM785EVdrV1qjAoTsAFuBaTnMmFf7AYN2QpRReFKzlKqyEV6mdq%2FPdqpoYR8c85GqZIL6m5S7Ttyx%2BQfF2X4dhGu%2FqE3mIN4ORdUSEUZEwos3iuSZ7e3F&X-Amz-Signature=803b16b65c60d9c941655b587896353529345c47a36ae6bcc498b41af564f4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
