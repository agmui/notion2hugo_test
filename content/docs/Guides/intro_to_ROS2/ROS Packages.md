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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMZLPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCCfzkarhBMpqLHUqDLFrTnQNJRzde0G4%2BWxmQTkkX2rAIhAIZKWfGt3WMDm3Qm9strAQCzKcuqP%2BtR%2FTu7dR5bB6XuKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BIxgR23MiLPPdHIq3AOyY1FO4Jsmt36YjD0zGgbecUalvRjUZNkQZ8%2BgBW4krqbO0yZDK2QDqVqXU%2FzRsxDZc%2Bcshp7L7I4NZADXD%2FU4lrM9LRAlWTDrzMLdzx1EJ2ZHK0cxunLoT1T2%2Bh8fHqMLSVUYjNT%2BombgLrnZpRxWvvmi8qWDK%2BCPJL%2F5NqfHJ1M57WD3g1Bo723d9aULYti7QFbjR3ZBc2I2vxJNwGpZxAb8FPhHOi4VX7Tgw4iP%2FOlVEm1yb1ZOez9hQJfgnODsuVcyhim1%2FnPKmit86bDrhPDbZg71hPeGYQOykrtxQ6U4iC76jcBmH1uNnM2V14WjD5%2BXsLvD8LGG8QpncsaFdXLIq7cFASPK8y%2FkMys0%2BivgpHhs4VD7fQ0r5dIOl8eFIUT%2F6B2Aouhuzvx6K%2B94CtvOO7qcyKw1Tg5443kEAKYHT7md0TpjxSngvHtVrOSoOt8gZD2r5YHdJoQAdWkSLQFpdeZEz%2BR40Al8WFBzoKoKwO10RoeNrodOijAHFM0izWVKfx5tkI%2BqXDWMG89IVk1YiqUepdVI0w2WNQzButQ0B3E%2BIlx0ofRW2cgGgjEyMoPYPFFRwraCGPZH92IqErFTnXvWDg%2FAaXjleQREZkmDXBOcvO%2ByD28V0TDp18PBBjqkAYzqmgtPxqe1t5q5S4L0kGvlIQyN1m2nMG22QUseLBTFLIyCawCQDS1CmAV0Js86PuNzvNoEWXEbKG9j5On7aALkXp3TcwW433Gk1AgaI1ADg0dmflZ%2F2BmJpEcetH3XWE90Bj0BpjEqfgvXmShMXUU3yKsbw%2BDbuOZAF40%2FIC0RWOhx%2FMnhTyPdg5R%2BSyO2OZUY80jxaZArto0UbJrJUWknS7Pt&X-Amz-Signature=5c0a91e933d7bc47bd0b47fce736f29421b3be02558688fa61d7619409630377&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMZLPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCCfzkarhBMpqLHUqDLFrTnQNJRzde0G4%2BWxmQTkkX2rAIhAIZKWfGt3WMDm3Qm9strAQCzKcuqP%2BtR%2FTu7dR5bB6XuKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BIxgR23MiLPPdHIq3AOyY1FO4Jsmt36YjD0zGgbecUalvRjUZNkQZ8%2BgBW4krqbO0yZDK2QDqVqXU%2FzRsxDZc%2Bcshp7L7I4NZADXD%2FU4lrM9LRAlWTDrzMLdzx1EJ2ZHK0cxunLoT1T2%2Bh8fHqMLSVUYjNT%2BombgLrnZpRxWvvmi8qWDK%2BCPJL%2F5NqfHJ1M57WD3g1Bo723d9aULYti7QFbjR3ZBc2I2vxJNwGpZxAb8FPhHOi4VX7Tgw4iP%2FOlVEm1yb1ZOez9hQJfgnODsuVcyhim1%2FnPKmit86bDrhPDbZg71hPeGYQOykrtxQ6U4iC76jcBmH1uNnM2V14WjD5%2BXsLvD8LGG8QpncsaFdXLIq7cFASPK8y%2FkMys0%2BivgpHhs4VD7fQ0r5dIOl8eFIUT%2F6B2Aouhuzvx6K%2B94CtvOO7qcyKw1Tg5443kEAKYHT7md0TpjxSngvHtVrOSoOt8gZD2r5YHdJoQAdWkSLQFpdeZEz%2BR40Al8WFBzoKoKwO10RoeNrodOijAHFM0izWVKfx5tkI%2BqXDWMG89IVk1YiqUepdVI0w2WNQzButQ0B3E%2BIlx0ofRW2cgGgjEyMoPYPFFRwraCGPZH92IqErFTnXvWDg%2FAaXjleQREZkmDXBOcvO%2ByD28V0TDp18PBBjqkAYzqmgtPxqe1t5q5S4L0kGvlIQyN1m2nMG22QUseLBTFLIyCawCQDS1CmAV0Js86PuNzvNoEWXEbKG9j5On7aALkXp3TcwW433Gk1AgaI1ADg0dmflZ%2F2BmJpEcetH3XWE90Bj0BpjEqfgvXmShMXUU3yKsbw%2BDbuOZAF40%2FIC0RWOhx%2FMnhTyPdg5R%2BSyO2OZUY80jxaZArto0UbJrJUWknS7Pt&X-Amz-Signature=797428a6e5b97f3c8f795971ef3cc7156dec382a480d700baf23eea09b317601&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMZLPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCCfzkarhBMpqLHUqDLFrTnQNJRzde0G4%2BWxmQTkkX2rAIhAIZKWfGt3WMDm3Qm9strAQCzKcuqP%2BtR%2FTu7dR5bB6XuKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BIxgR23MiLPPdHIq3AOyY1FO4Jsmt36YjD0zGgbecUalvRjUZNkQZ8%2BgBW4krqbO0yZDK2QDqVqXU%2FzRsxDZc%2Bcshp7L7I4NZADXD%2FU4lrM9LRAlWTDrzMLdzx1EJ2ZHK0cxunLoT1T2%2Bh8fHqMLSVUYjNT%2BombgLrnZpRxWvvmi8qWDK%2BCPJL%2F5NqfHJ1M57WD3g1Bo723d9aULYti7QFbjR3ZBc2I2vxJNwGpZxAb8FPhHOi4VX7Tgw4iP%2FOlVEm1yb1ZOez9hQJfgnODsuVcyhim1%2FnPKmit86bDrhPDbZg71hPeGYQOykrtxQ6U4iC76jcBmH1uNnM2V14WjD5%2BXsLvD8LGG8QpncsaFdXLIq7cFASPK8y%2FkMys0%2BivgpHhs4VD7fQ0r5dIOl8eFIUT%2F6B2Aouhuzvx6K%2B94CtvOO7qcyKw1Tg5443kEAKYHT7md0TpjxSngvHtVrOSoOt8gZD2r5YHdJoQAdWkSLQFpdeZEz%2BR40Al8WFBzoKoKwO10RoeNrodOijAHFM0izWVKfx5tkI%2BqXDWMG89IVk1YiqUepdVI0w2WNQzButQ0B3E%2BIlx0ofRW2cgGgjEyMoPYPFFRwraCGPZH92IqErFTnXvWDg%2FAaXjleQREZkmDXBOcvO%2ByD28V0TDp18PBBjqkAYzqmgtPxqe1t5q5S4L0kGvlIQyN1m2nMG22QUseLBTFLIyCawCQDS1CmAV0Js86PuNzvNoEWXEbKG9j5On7aALkXp3TcwW433Gk1AgaI1ADg0dmflZ%2F2BmJpEcetH3XWE90Bj0BpjEqfgvXmShMXUU3yKsbw%2BDbuOZAF40%2FIC0RWOhx%2FMnhTyPdg5R%2BSyO2OZUY80jxaZArto0UbJrJUWknS7Pt&X-Amz-Signature=38b4c3d34d115bdb628bac39bcc92ce5471119c4ac95591d14137be810f58e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMZLPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCCfzkarhBMpqLHUqDLFrTnQNJRzde0G4%2BWxmQTkkX2rAIhAIZKWfGt3WMDm3Qm9strAQCzKcuqP%2BtR%2FTu7dR5bB6XuKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BIxgR23MiLPPdHIq3AOyY1FO4Jsmt36YjD0zGgbecUalvRjUZNkQZ8%2BgBW4krqbO0yZDK2QDqVqXU%2FzRsxDZc%2Bcshp7L7I4NZADXD%2FU4lrM9LRAlWTDrzMLdzx1EJ2ZHK0cxunLoT1T2%2Bh8fHqMLSVUYjNT%2BombgLrnZpRxWvvmi8qWDK%2BCPJL%2F5NqfHJ1M57WD3g1Bo723d9aULYti7QFbjR3ZBc2I2vxJNwGpZxAb8FPhHOi4VX7Tgw4iP%2FOlVEm1yb1ZOez9hQJfgnODsuVcyhim1%2FnPKmit86bDrhPDbZg71hPeGYQOykrtxQ6U4iC76jcBmH1uNnM2V14WjD5%2BXsLvD8LGG8QpncsaFdXLIq7cFASPK8y%2FkMys0%2BivgpHhs4VD7fQ0r5dIOl8eFIUT%2F6B2Aouhuzvx6K%2B94CtvOO7qcyKw1Tg5443kEAKYHT7md0TpjxSngvHtVrOSoOt8gZD2r5YHdJoQAdWkSLQFpdeZEz%2BR40Al8WFBzoKoKwO10RoeNrodOijAHFM0izWVKfx5tkI%2BqXDWMG89IVk1YiqUepdVI0w2WNQzButQ0B3E%2BIlx0ofRW2cgGgjEyMoPYPFFRwraCGPZH92IqErFTnXvWDg%2FAaXjleQREZkmDXBOcvO%2ByD28V0TDp18PBBjqkAYzqmgtPxqe1t5q5S4L0kGvlIQyN1m2nMG22QUseLBTFLIyCawCQDS1CmAV0Js86PuNzvNoEWXEbKG9j5On7aALkXp3TcwW433Gk1AgaI1ADg0dmflZ%2F2BmJpEcetH3XWE90Bj0BpjEqfgvXmShMXUU3yKsbw%2BDbuOZAF40%2FIC0RWOhx%2FMnhTyPdg5R%2BSyO2OZUY80jxaZArto0UbJrJUWknS7Pt&X-Amz-Signature=ca42bc2c5944e2b49eb999541f5a718cf5df044b426ad9bcb1d81da8a30a72ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMZLPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCCfzkarhBMpqLHUqDLFrTnQNJRzde0G4%2BWxmQTkkX2rAIhAIZKWfGt3WMDm3Qm9strAQCzKcuqP%2BtR%2FTu7dR5bB6XuKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BIxgR23MiLPPdHIq3AOyY1FO4Jsmt36YjD0zGgbecUalvRjUZNkQZ8%2BgBW4krqbO0yZDK2QDqVqXU%2FzRsxDZc%2Bcshp7L7I4NZADXD%2FU4lrM9LRAlWTDrzMLdzx1EJ2ZHK0cxunLoT1T2%2Bh8fHqMLSVUYjNT%2BombgLrnZpRxWvvmi8qWDK%2BCPJL%2F5NqfHJ1M57WD3g1Bo723d9aULYti7QFbjR3ZBc2I2vxJNwGpZxAb8FPhHOi4VX7Tgw4iP%2FOlVEm1yb1ZOez9hQJfgnODsuVcyhim1%2FnPKmit86bDrhPDbZg71hPeGYQOykrtxQ6U4iC76jcBmH1uNnM2V14WjD5%2BXsLvD8LGG8QpncsaFdXLIq7cFASPK8y%2FkMys0%2BivgpHhs4VD7fQ0r5dIOl8eFIUT%2F6B2Aouhuzvx6K%2B94CtvOO7qcyKw1Tg5443kEAKYHT7md0TpjxSngvHtVrOSoOt8gZD2r5YHdJoQAdWkSLQFpdeZEz%2BR40Al8WFBzoKoKwO10RoeNrodOijAHFM0izWVKfx5tkI%2BqXDWMG89IVk1YiqUepdVI0w2WNQzButQ0B3E%2BIlx0ofRW2cgGgjEyMoPYPFFRwraCGPZH92IqErFTnXvWDg%2FAaXjleQREZkmDXBOcvO%2ByD28V0TDp18PBBjqkAYzqmgtPxqe1t5q5S4L0kGvlIQyN1m2nMG22QUseLBTFLIyCawCQDS1CmAV0Js86PuNzvNoEWXEbKG9j5On7aALkXp3TcwW433Gk1AgaI1ADg0dmflZ%2F2BmJpEcetH3XWE90Bj0BpjEqfgvXmShMXUU3yKsbw%2BDbuOZAF40%2FIC0RWOhx%2FMnhTyPdg5R%2BSyO2OZUY80jxaZArto0UbJrJUWknS7Pt&X-Amz-Signature=67431e3d933080b3a5dbf1e2b7d1bda798b24ab99bbf37fb3bec4eaf91288889&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMZLPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCCfzkarhBMpqLHUqDLFrTnQNJRzde0G4%2BWxmQTkkX2rAIhAIZKWfGt3WMDm3Qm9strAQCzKcuqP%2BtR%2FTu7dR5bB6XuKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BIxgR23MiLPPdHIq3AOyY1FO4Jsmt36YjD0zGgbecUalvRjUZNkQZ8%2BgBW4krqbO0yZDK2QDqVqXU%2FzRsxDZc%2Bcshp7L7I4NZADXD%2FU4lrM9LRAlWTDrzMLdzx1EJ2ZHK0cxunLoT1T2%2Bh8fHqMLSVUYjNT%2BombgLrnZpRxWvvmi8qWDK%2BCPJL%2F5NqfHJ1M57WD3g1Bo723d9aULYti7QFbjR3ZBc2I2vxJNwGpZxAb8FPhHOi4VX7Tgw4iP%2FOlVEm1yb1ZOez9hQJfgnODsuVcyhim1%2FnPKmit86bDrhPDbZg71hPeGYQOykrtxQ6U4iC76jcBmH1uNnM2V14WjD5%2BXsLvD8LGG8QpncsaFdXLIq7cFASPK8y%2FkMys0%2BivgpHhs4VD7fQ0r5dIOl8eFIUT%2F6B2Aouhuzvx6K%2B94CtvOO7qcyKw1Tg5443kEAKYHT7md0TpjxSngvHtVrOSoOt8gZD2r5YHdJoQAdWkSLQFpdeZEz%2BR40Al8WFBzoKoKwO10RoeNrodOijAHFM0izWVKfx5tkI%2BqXDWMG89IVk1YiqUepdVI0w2WNQzButQ0B3E%2BIlx0ofRW2cgGgjEyMoPYPFFRwraCGPZH92IqErFTnXvWDg%2FAaXjleQREZkmDXBOcvO%2ByD28V0TDp18PBBjqkAYzqmgtPxqe1t5q5S4L0kGvlIQyN1m2nMG22QUseLBTFLIyCawCQDS1CmAV0Js86PuNzvNoEWXEbKG9j5On7aALkXp3TcwW433Gk1AgaI1ADg0dmflZ%2F2BmJpEcetH3XWE90Bj0BpjEqfgvXmShMXUU3yKsbw%2BDbuOZAF40%2FIC0RWOhx%2FMnhTyPdg5R%2BSyO2OZUY80jxaZArto0UbJrJUWknS7Pt&X-Amz-Signature=488af0ca289f167acc20068e353f2aadb50d0ed4efaf1eb1eac5b42b16c557f0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMZLPW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCCfzkarhBMpqLHUqDLFrTnQNJRzde0G4%2BWxmQTkkX2rAIhAIZKWfGt3WMDm3Qm9strAQCzKcuqP%2BtR%2FTu7dR5bB6XuKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BIxgR23MiLPPdHIq3AOyY1FO4Jsmt36YjD0zGgbecUalvRjUZNkQZ8%2BgBW4krqbO0yZDK2QDqVqXU%2FzRsxDZc%2Bcshp7L7I4NZADXD%2FU4lrM9LRAlWTDrzMLdzx1EJ2ZHK0cxunLoT1T2%2Bh8fHqMLSVUYjNT%2BombgLrnZpRxWvvmi8qWDK%2BCPJL%2F5NqfHJ1M57WD3g1Bo723d9aULYti7QFbjR3ZBc2I2vxJNwGpZxAb8FPhHOi4VX7Tgw4iP%2FOlVEm1yb1ZOez9hQJfgnODsuVcyhim1%2FnPKmit86bDrhPDbZg71hPeGYQOykrtxQ6U4iC76jcBmH1uNnM2V14WjD5%2BXsLvD8LGG8QpncsaFdXLIq7cFASPK8y%2FkMys0%2BivgpHhs4VD7fQ0r5dIOl8eFIUT%2F6B2Aouhuzvx6K%2B94CtvOO7qcyKw1Tg5443kEAKYHT7md0TpjxSngvHtVrOSoOt8gZD2r5YHdJoQAdWkSLQFpdeZEz%2BR40Al8WFBzoKoKwO10RoeNrodOijAHFM0izWVKfx5tkI%2BqXDWMG89IVk1YiqUepdVI0w2WNQzButQ0B3E%2BIlx0ofRW2cgGgjEyMoPYPFFRwraCGPZH92IqErFTnXvWDg%2FAaXjleQREZkmDXBOcvO%2ByD28V0TDp18PBBjqkAYzqmgtPxqe1t5q5S4L0kGvlIQyN1m2nMG22QUseLBTFLIyCawCQDS1CmAV0Js86PuNzvNoEWXEbKG9j5On7aALkXp3TcwW433Gk1AgaI1ADg0dmflZ%2F2BmJpEcetH3XWE90Bj0BpjEqfgvXmShMXUU3yKsbw%2BDbuOZAF40%2FIC0RWOhx%2FMnhTyPdg5R%2BSyO2OZUY80jxaZArto0UbJrJUWknS7Pt&X-Amz-Signature=6188898efdfd79cf5b38f5de2105a9eb4649759e73c9787640627acbc8005f75&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
