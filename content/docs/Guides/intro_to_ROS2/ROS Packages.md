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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3EO7LY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCpChB8jsY2WduKYxDja5B9c61IbF0aNLfs%2BbOkGf3ZwIgFJdYsYnb5a0CF1vnFx5pWJz2Oa3vUiuSgBHHoRUoBigqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPdw%2B61iYkswgEH1yrcA2WJeptOcoN%2Bg8m7nymq5yIW94KNVk%2FsUj9ZLxpePX7Z6865NLgxf3MltTBut%2BwbVbXzyx%2BCyFW6brEsnH0xCbtZ70RyhM2EMEeT07UCPMsBu6515JTIyTY4oxvO1Jv0fXkk2k6%2ByHmHM8Y6FXrnoCjeMJmdL8%2F%2FAvhxqISbZYNXK9TPSoG1JTZuHluW6mR3Wz2KmzlxalAXiFqt06rCMKIi0iKdx4k2fs9eqdz9%2BleE3cqMS4QedAM1QTLpcZayEw3qgUP4bWLFEJNmtUZlfG2rNIVeWW4d7T7VBMSBNVYQnYvSvIEMYN8tR%2Fi6vjQZU5qwlcXkNRb%2FvzHTIK9soQQedRppzNI%2FmubTZbX%2Bplp1XqXKkcx7OayQzcUZBcUXxx71B7G2%2B72Unt92O5NGPw5XK994t8AodKhUPxodQBvc7uLm2bTdq9LrUMaNfsM0098lI8hEZs%2BrLZakvL9t2%2F8JHfcudiOPoHo7hRc0bHgALosiLjpL919SkA3zjxfXPPtSFjSCv%2BbDDHke8uaaWVXheF%2BMbIuMMsjkZcRStcf9ejD6cF%2BiZKq4qmsgw6jWhp5Tjl4qZWLNSJSEtoMZMMhWza1WAEv6QHC3%2BiTGE2BmHcNHWycNBqn%2Fus63MN6QnL0GOqUBmwjS1PPkSwMX%2FUDcHGbTgsPKTuONjpp%2F8YV4HuJ5bnmbgZc%2F6ZI6NEQt8vyCbVsakg0kOFsjWGMHhYRwm9EpFyBeifgXwO%2FaVbPw4SDftPPw10Jss63axms22BJg5Ji0hWyMuF%2FsLZax8to%2BAl2tq%2FHRO9IEEH9tYTqyiDeM7ljYR1UIyoyfiXtff5idRcR8CCMIN1w37feohHXoQyzmqmnArsYj&X-Amz-Signature=1728754c6d7eb415a851703ec0b7847ec34c2d2c55d1a6cbd3af34f1fdce1554&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3EO7LY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCpChB8jsY2WduKYxDja5B9c61IbF0aNLfs%2BbOkGf3ZwIgFJdYsYnb5a0CF1vnFx5pWJz2Oa3vUiuSgBHHoRUoBigqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPdw%2B61iYkswgEH1yrcA2WJeptOcoN%2Bg8m7nymq5yIW94KNVk%2FsUj9ZLxpePX7Z6865NLgxf3MltTBut%2BwbVbXzyx%2BCyFW6brEsnH0xCbtZ70RyhM2EMEeT07UCPMsBu6515JTIyTY4oxvO1Jv0fXkk2k6%2ByHmHM8Y6FXrnoCjeMJmdL8%2F%2FAvhxqISbZYNXK9TPSoG1JTZuHluW6mR3Wz2KmzlxalAXiFqt06rCMKIi0iKdx4k2fs9eqdz9%2BleE3cqMS4QedAM1QTLpcZayEw3qgUP4bWLFEJNmtUZlfG2rNIVeWW4d7T7VBMSBNVYQnYvSvIEMYN8tR%2Fi6vjQZU5qwlcXkNRb%2FvzHTIK9soQQedRppzNI%2FmubTZbX%2Bplp1XqXKkcx7OayQzcUZBcUXxx71B7G2%2B72Unt92O5NGPw5XK994t8AodKhUPxodQBvc7uLm2bTdq9LrUMaNfsM0098lI8hEZs%2BrLZakvL9t2%2F8JHfcudiOPoHo7hRc0bHgALosiLjpL919SkA3zjxfXPPtSFjSCv%2BbDDHke8uaaWVXheF%2BMbIuMMsjkZcRStcf9ejD6cF%2BiZKq4qmsgw6jWhp5Tjl4qZWLNSJSEtoMZMMhWza1WAEv6QHC3%2BiTGE2BmHcNHWycNBqn%2Fus63MN6QnL0GOqUBmwjS1PPkSwMX%2FUDcHGbTgsPKTuONjpp%2F8YV4HuJ5bnmbgZc%2F6ZI6NEQt8vyCbVsakg0kOFsjWGMHhYRwm9EpFyBeifgXwO%2FaVbPw4SDftPPw10Jss63axms22BJg5Ji0hWyMuF%2FsLZax8to%2BAl2tq%2FHRO9IEEH9tYTqyiDeM7ljYR1UIyoyfiXtff5idRcR8CCMIN1w37feohHXoQyzmqmnArsYj&X-Amz-Signature=5e34ad1fe3a0307e7856490ce5ee7589360941a31b54d4d1379a2b5eea4058e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3EO7LY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCpChB8jsY2WduKYxDja5B9c61IbF0aNLfs%2BbOkGf3ZwIgFJdYsYnb5a0CF1vnFx5pWJz2Oa3vUiuSgBHHoRUoBigqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPdw%2B61iYkswgEH1yrcA2WJeptOcoN%2Bg8m7nymq5yIW94KNVk%2FsUj9ZLxpePX7Z6865NLgxf3MltTBut%2BwbVbXzyx%2BCyFW6brEsnH0xCbtZ70RyhM2EMEeT07UCPMsBu6515JTIyTY4oxvO1Jv0fXkk2k6%2ByHmHM8Y6FXrnoCjeMJmdL8%2F%2FAvhxqISbZYNXK9TPSoG1JTZuHluW6mR3Wz2KmzlxalAXiFqt06rCMKIi0iKdx4k2fs9eqdz9%2BleE3cqMS4QedAM1QTLpcZayEw3qgUP4bWLFEJNmtUZlfG2rNIVeWW4d7T7VBMSBNVYQnYvSvIEMYN8tR%2Fi6vjQZU5qwlcXkNRb%2FvzHTIK9soQQedRppzNI%2FmubTZbX%2Bplp1XqXKkcx7OayQzcUZBcUXxx71B7G2%2B72Unt92O5NGPw5XK994t8AodKhUPxodQBvc7uLm2bTdq9LrUMaNfsM0098lI8hEZs%2BrLZakvL9t2%2F8JHfcudiOPoHo7hRc0bHgALosiLjpL919SkA3zjxfXPPtSFjSCv%2BbDDHke8uaaWVXheF%2BMbIuMMsjkZcRStcf9ejD6cF%2BiZKq4qmsgw6jWhp5Tjl4qZWLNSJSEtoMZMMhWza1WAEv6QHC3%2BiTGE2BmHcNHWycNBqn%2Fus63MN6QnL0GOqUBmwjS1PPkSwMX%2FUDcHGbTgsPKTuONjpp%2F8YV4HuJ5bnmbgZc%2F6ZI6NEQt8vyCbVsakg0kOFsjWGMHhYRwm9EpFyBeifgXwO%2FaVbPw4SDftPPw10Jss63axms22BJg5Ji0hWyMuF%2FsLZax8to%2BAl2tq%2FHRO9IEEH9tYTqyiDeM7ljYR1UIyoyfiXtff5idRcR8CCMIN1w37feohHXoQyzmqmnArsYj&X-Amz-Signature=5d7841da904e6c0f17765c2d9adc409af569f4a00a7a399c7a54b4a3aa2faff8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3EO7LY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCpChB8jsY2WduKYxDja5B9c61IbF0aNLfs%2BbOkGf3ZwIgFJdYsYnb5a0CF1vnFx5pWJz2Oa3vUiuSgBHHoRUoBigqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPdw%2B61iYkswgEH1yrcA2WJeptOcoN%2Bg8m7nymq5yIW94KNVk%2FsUj9ZLxpePX7Z6865NLgxf3MltTBut%2BwbVbXzyx%2BCyFW6brEsnH0xCbtZ70RyhM2EMEeT07UCPMsBu6515JTIyTY4oxvO1Jv0fXkk2k6%2ByHmHM8Y6FXrnoCjeMJmdL8%2F%2FAvhxqISbZYNXK9TPSoG1JTZuHluW6mR3Wz2KmzlxalAXiFqt06rCMKIi0iKdx4k2fs9eqdz9%2BleE3cqMS4QedAM1QTLpcZayEw3qgUP4bWLFEJNmtUZlfG2rNIVeWW4d7T7VBMSBNVYQnYvSvIEMYN8tR%2Fi6vjQZU5qwlcXkNRb%2FvzHTIK9soQQedRppzNI%2FmubTZbX%2Bplp1XqXKkcx7OayQzcUZBcUXxx71B7G2%2B72Unt92O5NGPw5XK994t8AodKhUPxodQBvc7uLm2bTdq9LrUMaNfsM0098lI8hEZs%2BrLZakvL9t2%2F8JHfcudiOPoHo7hRc0bHgALosiLjpL919SkA3zjxfXPPtSFjSCv%2BbDDHke8uaaWVXheF%2BMbIuMMsjkZcRStcf9ejD6cF%2BiZKq4qmsgw6jWhp5Tjl4qZWLNSJSEtoMZMMhWza1WAEv6QHC3%2BiTGE2BmHcNHWycNBqn%2Fus63MN6QnL0GOqUBmwjS1PPkSwMX%2FUDcHGbTgsPKTuONjpp%2F8YV4HuJ5bnmbgZc%2F6ZI6NEQt8vyCbVsakg0kOFsjWGMHhYRwm9EpFyBeifgXwO%2FaVbPw4SDftPPw10Jss63axms22BJg5Ji0hWyMuF%2FsLZax8to%2BAl2tq%2FHRO9IEEH9tYTqyiDeM7ljYR1UIyoyfiXtff5idRcR8CCMIN1w37feohHXoQyzmqmnArsYj&X-Amz-Signature=0888f102bdbd56702038c62376e5b47720f5d101a877845445bbda6d4cfa687e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3EO7LY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCpChB8jsY2WduKYxDja5B9c61IbF0aNLfs%2BbOkGf3ZwIgFJdYsYnb5a0CF1vnFx5pWJz2Oa3vUiuSgBHHoRUoBigqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPdw%2B61iYkswgEH1yrcA2WJeptOcoN%2Bg8m7nymq5yIW94KNVk%2FsUj9ZLxpePX7Z6865NLgxf3MltTBut%2BwbVbXzyx%2BCyFW6brEsnH0xCbtZ70RyhM2EMEeT07UCPMsBu6515JTIyTY4oxvO1Jv0fXkk2k6%2ByHmHM8Y6FXrnoCjeMJmdL8%2F%2FAvhxqISbZYNXK9TPSoG1JTZuHluW6mR3Wz2KmzlxalAXiFqt06rCMKIi0iKdx4k2fs9eqdz9%2BleE3cqMS4QedAM1QTLpcZayEw3qgUP4bWLFEJNmtUZlfG2rNIVeWW4d7T7VBMSBNVYQnYvSvIEMYN8tR%2Fi6vjQZU5qwlcXkNRb%2FvzHTIK9soQQedRppzNI%2FmubTZbX%2Bplp1XqXKkcx7OayQzcUZBcUXxx71B7G2%2B72Unt92O5NGPw5XK994t8AodKhUPxodQBvc7uLm2bTdq9LrUMaNfsM0098lI8hEZs%2BrLZakvL9t2%2F8JHfcudiOPoHo7hRc0bHgALosiLjpL919SkA3zjxfXPPtSFjSCv%2BbDDHke8uaaWVXheF%2BMbIuMMsjkZcRStcf9ejD6cF%2BiZKq4qmsgw6jWhp5Tjl4qZWLNSJSEtoMZMMhWza1WAEv6QHC3%2BiTGE2BmHcNHWycNBqn%2Fus63MN6QnL0GOqUBmwjS1PPkSwMX%2FUDcHGbTgsPKTuONjpp%2F8YV4HuJ5bnmbgZc%2F6ZI6NEQt8vyCbVsakg0kOFsjWGMHhYRwm9EpFyBeifgXwO%2FaVbPw4SDftPPw10Jss63axms22BJg5Ji0hWyMuF%2FsLZax8to%2BAl2tq%2FHRO9IEEH9tYTqyiDeM7ljYR1UIyoyfiXtff5idRcR8CCMIN1w37feohHXoQyzmqmnArsYj&X-Amz-Signature=824ea0f69b042b8c1af5b8a6816e30ec2ba1a4875c03a9f7143cb92aa8cb5db2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3EO7LY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCpChB8jsY2WduKYxDja5B9c61IbF0aNLfs%2BbOkGf3ZwIgFJdYsYnb5a0CF1vnFx5pWJz2Oa3vUiuSgBHHoRUoBigqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPdw%2B61iYkswgEH1yrcA2WJeptOcoN%2Bg8m7nymq5yIW94KNVk%2FsUj9ZLxpePX7Z6865NLgxf3MltTBut%2BwbVbXzyx%2BCyFW6brEsnH0xCbtZ70RyhM2EMEeT07UCPMsBu6515JTIyTY4oxvO1Jv0fXkk2k6%2ByHmHM8Y6FXrnoCjeMJmdL8%2F%2FAvhxqISbZYNXK9TPSoG1JTZuHluW6mR3Wz2KmzlxalAXiFqt06rCMKIi0iKdx4k2fs9eqdz9%2BleE3cqMS4QedAM1QTLpcZayEw3qgUP4bWLFEJNmtUZlfG2rNIVeWW4d7T7VBMSBNVYQnYvSvIEMYN8tR%2Fi6vjQZU5qwlcXkNRb%2FvzHTIK9soQQedRppzNI%2FmubTZbX%2Bplp1XqXKkcx7OayQzcUZBcUXxx71B7G2%2B72Unt92O5NGPw5XK994t8AodKhUPxodQBvc7uLm2bTdq9LrUMaNfsM0098lI8hEZs%2BrLZakvL9t2%2F8JHfcudiOPoHo7hRc0bHgALosiLjpL919SkA3zjxfXPPtSFjSCv%2BbDDHke8uaaWVXheF%2BMbIuMMsjkZcRStcf9ejD6cF%2BiZKq4qmsgw6jWhp5Tjl4qZWLNSJSEtoMZMMhWza1WAEv6QHC3%2BiTGE2BmHcNHWycNBqn%2Fus63MN6QnL0GOqUBmwjS1PPkSwMX%2FUDcHGbTgsPKTuONjpp%2F8YV4HuJ5bnmbgZc%2F6ZI6NEQt8vyCbVsakg0kOFsjWGMHhYRwm9EpFyBeifgXwO%2FaVbPw4SDftPPw10Jss63axms22BJg5Ji0hWyMuF%2FsLZax8to%2BAl2tq%2FHRO9IEEH9tYTqyiDeM7ljYR1UIyoyfiXtff5idRcR8CCMIN1w37feohHXoQyzmqmnArsYj&X-Amz-Signature=0511f5eadeb1967daed991a5d29b89f00312ec946933f8142629181489adde05&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3EO7LY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T080908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDCpChB8jsY2WduKYxDja5B9c61IbF0aNLfs%2BbOkGf3ZwIgFJdYsYnb5a0CF1vnFx5pWJz2Oa3vUiuSgBHHoRUoBigqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPdw%2B61iYkswgEH1yrcA2WJeptOcoN%2Bg8m7nymq5yIW94KNVk%2FsUj9ZLxpePX7Z6865NLgxf3MltTBut%2BwbVbXzyx%2BCyFW6brEsnH0xCbtZ70RyhM2EMEeT07UCPMsBu6515JTIyTY4oxvO1Jv0fXkk2k6%2ByHmHM8Y6FXrnoCjeMJmdL8%2F%2FAvhxqISbZYNXK9TPSoG1JTZuHluW6mR3Wz2KmzlxalAXiFqt06rCMKIi0iKdx4k2fs9eqdz9%2BleE3cqMS4QedAM1QTLpcZayEw3qgUP4bWLFEJNmtUZlfG2rNIVeWW4d7T7VBMSBNVYQnYvSvIEMYN8tR%2Fi6vjQZU5qwlcXkNRb%2FvzHTIK9soQQedRppzNI%2FmubTZbX%2Bplp1XqXKkcx7OayQzcUZBcUXxx71B7G2%2B72Unt92O5NGPw5XK994t8AodKhUPxodQBvc7uLm2bTdq9LrUMaNfsM0098lI8hEZs%2BrLZakvL9t2%2F8JHfcudiOPoHo7hRc0bHgALosiLjpL919SkA3zjxfXPPtSFjSCv%2BbDDHke8uaaWVXheF%2BMbIuMMsjkZcRStcf9ejD6cF%2BiZKq4qmsgw6jWhp5Tjl4qZWLNSJSEtoMZMMhWza1WAEv6QHC3%2BiTGE2BmHcNHWycNBqn%2Fus63MN6QnL0GOqUBmwjS1PPkSwMX%2FUDcHGbTgsPKTuONjpp%2F8YV4HuJ5bnmbgZc%2F6ZI6NEQt8vyCbVsakg0kOFsjWGMHhYRwm9EpFyBeifgXwO%2FaVbPw4SDftPPw10Jss63axms22BJg5Ji0hWyMuF%2FsLZax8to%2BAl2tq%2FHRO9IEEH9tYTqyiDeM7ljYR1UIyoyfiXtff5idRcR8CCMIN1w37feohHXoQyzmqmnArsYj&X-Amz-Signature=71b260ca06bf81c1bae45c1eab76c757e2cb234808241acb1da21edce8b47b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
