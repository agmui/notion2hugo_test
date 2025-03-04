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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSSDKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzYQkIElQ7XVfODM7SFXWv7qjgzn45azIj04xXhpDQAiEA4nRQ%2F6nhnosUNpdUtVqGoJZy%2B7spkYY7GpQBI1q5U%2BkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhYuLqtlpb%2F98827CrcA0%2Fiv70l2pexZkKRwfdQz5FMi974SsEs0QcRdWvnY%2F8NZnSdmvjG%2BYiTxWBaZnn2XsU5MU1Z%2B%2BbQAl8WYpsnyKZuvFVFbq6Y8Bck42BxL9tlThp82v9ZlWoPR0RPFv7NSnwWgvPBC3hTTqGUV9zJkYZaOn1PMF6g9CslXJhU3wHTe%2FdgeUJYMLbtY332pLAlgeOeOJlLsMUNTj%2FpC4XM4WDZiacuYYctmjPQn2FFEEmzECQUs44wULTO6IzYdPlzIsCRKt7x0owZRgNCTImu2PajDIC4dKQePoum7YL4fJSpxxTtunjgEG%2BC6VSnjdGvrNIJ08j%2FUHtnc%2BQcqjhqayYG2ijCmaHC5rtjNc64Ktg%2FLS6OL1Nu3Ty4A8I4yCShnjw1D4qydbSlVBNcLSAIov%2BaEj9AzEWlja6G%2F2LO3z4MNES%2FBsH9764GYeOrWpwYXzi90s2e2xc5%2FX4vOhYF9nHmSAq1uImvcHR6NbEXmpXrV5VSgk2xffbOLxXXne4pKMIO6QEywAZ7%2F1NjQTQ9PXWHsIljDrgDVxBPTx7cnzEczrzzVTF3GQE2NgPZQjqQayO1eR9VYJkJ%2Fh8oR9pYP0eVF0AL9RZRlOZacA3GJN9ZnGSke4hFxrv8eVw%2FMMvGm74GOqUBH647FOsUIEc7DaYkj3bl1E6VP2pIsMR9sjwNLO0VM3Dyy%2BIcD4SMyQcrTygd9dDzqXSwOTX7rD%2FfwUNjAKDqAoG6gSgRs7KOiRR3D7hiPTjwVoke3SbedBD65a4p8eQYz4gF7GaG%2FPVT6WbvuVX%2B6luCT2ACWQ9CLh%2FyPcNmQL6Z6NgmGFBEUzRM%2FPw3cK6Pp2NKQ2MkE9b7ASOnF6G5o7P%2BCRPX&X-Amz-Signature=8486608919c9446a2d38501f52ef7d2cca7dc8beda4166155e490faa56aeda1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSSDKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzYQkIElQ7XVfODM7SFXWv7qjgzn45azIj04xXhpDQAiEA4nRQ%2F6nhnosUNpdUtVqGoJZy%2B7spkYY7GpQBI1q5U%2BkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhYuLqtlpb%2F98827CrcA0%2Fiv70l2pexZkKRwfdQz5FMi974SsEs0QcRdWvnY%2F8NZnSdmvjG%2BYiTxWBaZnn2XsU5MU1Z%2B%2BbQAl8WYpsnyKZuvFVFbq6Y8Bck42BxL9tlThp82v9ZlWoPR0RPFv7NSnwWgvPBC3hTTqGUV9zJkYZaOn1PMF6g9CslXJhU3wHTe%2FdgeUJYMLbtY332pLAlgeOeOJlLsMUNTj%2FpC4XM4WDZiacuYYctmjPQn2FFEEmzECQUs44wULTO6IzYdPlzIsCRKt7x0owZRgNCTImu2PajDIC4dKQePoum7YL4fJSpxxTtunjgEG%2BC6VSnjdGvrNIJ08j%2FUHtnc%2BQcqjhqayYG2ijCmaHC5rtjNc64Ktg%2FLS6OL1Nu3Ty4A8I4yCShnjw1D4qydbSlVBNcLSAIov%2BaEj9AzEWlja6G%2F2LO3z4MNES%2FBsH9764GYeOrWpwYXzi90s2e2xc5%2FX4vOhYF9nHmSAq1uImvcHR6NbEXmpXrV5VSgk2xffbOLxXXne4pKMIO6QEywAZ7%2F1NjQTQ9PXWHsIljDrgDVxBPTx7cnzEczrzzVTF3GQE2NgPZQjqQayO1eR9VYJkJ%2Fh8oR9pYP0eVF0AL9RZRlOZacA3GJN9ZnGSke4hFxrv8eVw%2FMMvGm74GOqUBH647FOsUIEc7DaYkj3bl1E6VP2pIsMR9sjwNLO0VM3Dyy%2BIcD4SMyQcrTygd9dDzqXSwOTX7rD%2FfwUNjAKDqAoG6gSgRs7KOiRR3D7hiPTjwVoke3SbedBD65a4p8eQYz4gF7GaG%2FPVT6WbvuVX%2B6luCT2ACWQ9CLh%2FyPcNmQL6Z6NgmGFBEUzRM%2FPw3cK6Pp2NKQ2MkE9b7ASOnF6G5o7P%2BCRPX&X-Amz-Signature=2cda1aca44bbb62adc6f69f6c9e665eb65c06fbd73aa0e03ca1ff4a863ed5c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSSDKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzYQkIElQ7XVfODM7SFXWv7qjgzn45azIj04xXhpDQAiEA4nRQ%2F6nhnosUNpdUtVqGoJZy%2B7spkYY7GpQBI1q5U%2BkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhYuLqtlpb%2F98827CrcA0%2Fiv70l2pexZkKRwfdQz5FMi974SsEs0QcRdWvnY%2F8NZnSdmvjG%2BYiTxWBaZnn2XsU5MU1Z%2B%2BbQAl8WYpsnyKZuvFVFbq6Y8Bck42BxL9tlThp82v9ZlWoPR0RPFv7NSnwWgvPBC3hTTqGUV9zJkYZaOn1PMF6g9CslXJhU3wHTe%2FdgeUJYMLbtY332pLAlgeOeOJlLsMUNTj%2FpC4XM4WDZiacuYYctmjPQn2FFEEmzECQUs44wULTO6IzYdPlzIsCRKt7x0owZRgNCTImu2PajDIC4dKQePoum7YL4fJSpxxTtunjgEG%2BC6VSnjdGvrNIJ08j%2FUHtnc%2BQcqjhqayYG2ijCmaHC5rtjNc64Ktg%2FLS6OL1Nu3Ty4A8I4yCShnjw1D4qydbSlVBNcLSAIov%2BaEj9AzEWlja6G%2F2LO3z4MNES%2FBsH9764GYeOrWpwYXzi90s2e2xc5%2FX4vOhYF9nHmSAq1uImvcHR6NbEXmpXrV5VSgk2xffbOLxXXne4pKMIO6QEywAZ7%2F1NjQTQ9PXWHsIljDrgDVxBPTx7cnzEczrzzVTF3GQE2NgPZQjqQayO1eR9VYJkJ%2Fh8oR9pYP0eVF0AL9RZRlOZacA3GJN9ZnGSke4hFxrv8eVw%2FMMvGm74GOqUBH647FOsUIEc7DaYkj3bl1E6VP2pIsMR9sjwNLO0VM3Dyy%2BIcD4SMyQcrTygd9dDzqXSwOTX7rD%2FfwUNjAKDqAoG6gSgRs7KOiRR3D7hiPTjwVoke3SbedBD65a4p8eQYz4gF7GaG%2FPVT6WbvuVX%2B6luCT2ACWQ9CLh%2FyPcNmQL6Z6NgmGFBEUzRM%2FPw3cK6Pp2NKQ2MkE9b7ASOnF6G5o7P%2BCRPX&X-Amz-Signature=735ab331b3cf3adb131be2fdba00da5ce7395fc13fa44f2a291f797a52bfa91e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSSDKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzYQkIElQ7XVfODM7SFXWv7qjgzn45azIj04xXhpDQAiEA4nRQ%2F6nhnosUNpdUtVqGoJZy%2B7spkYY7GpQBI1q5U%2BkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhYuLqtlpb%2F98827CrcA0%2Fiv70l2pexZkKRwfdQz5FMi974SsEs0QcRdWvnY%2F8NZnSdmvjG%2BYiTxWBaZnn2XsU5MU1Z%2B%2BbQAl8WYpsnyKZuvFVFbq6Y8Bck42BxL9tlThp82v9ZlWoPR0RPFv7NSnwWgvPBC3hTTqGUV9zJkYZaOn1PMF6g9CslXJhU3wHTe%2FdgeUJYMLbtY332pLAlgeOeOJlLsMUNTj%2FpC4XM4WDZiacuYYctmjPQn2FFEEmzECQUs44wULTO6IzYdPlzIsCRKt7x0owZRgNCTImu2PajDIC4dKQePoum7YL4fJSpxxTtunjgEG%2BC6VSnjdGvrNIJ08j%2FUHtnc%2BQcqjhqayYG2ijCmaHC5rtjNc64Ktg%2FLS6OL1Nu3Ty4A8I4yCShnjw1D4qydbSlVBNcLSAIov%2BaEj9AzEWlja6G%2F2LO3z4MNES%2FBsH9764GYeOrWpwYXzi90s2e2xc5%2FX4vOhYF9nHmSAq1uImvcHR6NbEXmpXrV5VSgk2xffbOLxXXne4pKMIO6QEywAZ7%2F1NjQTQ9PXWHsIljDrgDVxBPTx7cnzEczrzzVTF3GQE2NgPZQjqQayO1eR9VYJkJ%2Fh8oR9pYP0eVF0AL9RZRlOZacA3GJN9ZnGSke4hFxrv8eVw%2FMMvGm74GOqUBH647FOsUIEc7DaYkj3bl1E6VP2pIsMR9sjwNLO0VM3Dyy%2BIcD4SMyQcrTygd9dDzqXSwOTX7rD%2FfwUNjAKDqAoG6gSgRs7KOiRR3D7hiPTjwVoke3SbedBD65a4p8eQYz4gF7GaG%2FPVT6WbvuVX%2B6luCT2ACWQ9CLh%2FyPcNmQL6Z6NgmGFBEUzRM%2FPw3cK6Pp2NKQ2MkE9b7ASOnF6G5o7P%2BCRPX&X-Amz-Signature=de86882b065ef66d4a6f8e60d9b0530d1d741fbb00b8104c00a88652067fd851&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSSDKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzYQkIElQ7XVfODM7SFXWv7qjgzn45azIj04xXhpDQAiEA4nRQ%2F6nhnosUNpdUtVqGoJZy%2B7spkYY7GpQBI1q5U%2BkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhYuLqtlpb%2F98827CrcA0%2Fiv70l2pexZkKRwfdQz5FMi974SsEs0QcRdWvnY%2F8NZnSdmvjG%2BYiTxWBaZnn2XsU5MU1Z%2B%2BbQAl8WYpsnyKZuvFVFbq6Y8Bck42BxL9tlThp82v9ZlWoPR0RPFv7NSnwWgvPBC3hTTqGUV9zJkYZaOn1PMF6g9CslXJhU3wHTe%2FdgeUJYMLbtY332pLAlgeOeOJlLsMUNTj%2FpC4XM4WDZiacuYYctmjPQn2FFEEmzECQUs44wULTO6IzYdPlzIsCRKt7x0owZRgNCTImu2PajDIC4dKQePoum7YL4fJSpxxTtunjgEG%2BC6VSnjdGvrNIJ08j%2FUHtnc%2BQcqjhqayYG2ijCmaHC5rtjNc64Ktg%2FLS6OL1Nu3Ty4A8I4yCShnjw1D4qydbSlVBNcLSAIov%2BaEj9AzEWlja6G%2F2LO3z4MNES%2FBsH9764GYeOrWpwYXzi90s2e2xc5%2FX4vOhYF9nHmSAq1uImvcHR6NbEXmpXrV5VSgk2xffbOLxXXne4pKMIO6QEywAZ7%2F1NjQTQ9PXWHsIljDrgDVxBPTx7cnzEczrzzVTF3GQE2NgPZQjqQayO1eR9VYJkJ%2Fh8oR9pYP0eVF0AL9RZRlOZacA3GJN9ZnGSke4hFxrv8eVw%2FMMvGm74GOqUBH647FOsUIEc7DaYkj3bl1E6VP2pIsMR9sjwNLO0VM3Dyy%2BIcD4SMyQcrTygd9dDzqXSwOTX7rD%2FfwUNjAKDqAoG6gSgRs7KOiRR3D7hiPTjwVoke3SbedBD65a4p8eQYz4gF7GaG%2FPVT6WbvuVX%2B6luCT2ACWQ9CLh%2FyPcNmQL6Z6NgmGFBEUzRM%2FPw3cK6Pp2NKQ2MkE9b7ASOnF6G5o7P%2BCRPX&X-Amz-Signature=b2c7b800a1e84ae906eea3351b7ba808a549e0b6b23718fdabc14299336b7199&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSSDKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzYQkIElQ7XVfODM7SFXWv7qjgzn45azIj04xXhpDQAiEA4nRQ%2F6nhnosUNpdUtVqGoJZy%2B7spkYY7GpQBI1q5U%2BkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhYuLqtlpb%2F98827CrcA0%2Fiv70l2pexZkKRwfdQz5FMi974SsEs0QcRdWvnY%2F8NZnSdmvjG%2BYiTxWBaZnn2XsU5MU1Z%2B%2BbQAl8WYpsnyKZuvFVFbq6Y8Bck42BxL9tlThp82v9ZlWoPR0RPFv7NSnwWgvPBC3hTTqGUV9zJkYZaOn1PMF6g9CslXJhU3wHTe%2FdgeUJYMLbtY332pLAlgeOeOJlLsMUNTj%2FpC4XM4WDZiacuYYctmjPQn2FFEEmzECQUs44wULTO6IzYdPlzIsCRKt7x0owZRgNCTImu2PajDIC4dKQePoum7YL4fJSpxxTtunjgEG%2BC6VSnjdGvrNIJ08j%2FUHtnc%2BQcqjhqayYG2ijCmaHC5rtjNc64Ktg%2FLS6OL1Nu3Ty4A8I4yCShnjw1D4qydbSlVBNcLSAIov%2BaEj9AzEWlja6G%2F2LO3z4MNES%2FBsH9764GYeOrWpwYXzi90s2e2xc5%2FX4vOhYF9nHmSAq1uImvcHR6NbEXmpXrV5VSgk2xffbOLxXXne4pKMIO6QEywAZ7%2F1NjQTQ9PXWHsIljDrgDVxBPTx7cnzEczrzzVTF3GQE2NgPZQjqQayO1eR9VYJkJ%2Fh8oR9pYP0eVF0AL9RZRlOZacA3GJN9ZnGSke4hFxrv8eVw%2FMMvGm74GOqUBH647FOsUIEc7DaYkj3bl1E6VP2pIsMR9sjwNLO0VM3Dyy%2BIcD4SMyQcrTygd9dDzqXSwOTX7rD%2FfwUNjAKDqAoG6gSgRs7KOiRR3D7hiPTjwVoke3SbedBD65a4p8eQYz4gF7GaG%2FPVT6WbvuVX%2B6luCT2ACWQ9CLh%2FyPcNmQL6Z6NgmGFBEUzRM%2FPw3cK6Pp2NKQ2MkE9b7ASOnF6G5o7P%2BCRPX&X-Amz-Signature=6eafeb79903fb60c3b68887550cca2df7ce26a64fbd44835326a783caa001368&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RVSSDKP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzYQkIElQ7XVfODM7SFXWv7qjgzn45azIj04xXhpDQAiEA4nRQ%2F6nhnosUNpdUtVqGoJZy%2B7spkYY7GpQBI1q5U%2BkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhYuLqtlpb%2F98827CrcA0%2Fiv70l2pexZkKRwfdQz5FMi974SsEs0QcRdWvnY%2F8NZnSdmvjG%2BYiTxWBaZnn2XsU5MU1Z%2B%2BbQAl8WYpsnyKZuvFVFbq6Y8Bck42BxL9tlThp82v9ZlWoPR0RPFv7NSnwWgvPBC3hTTqGUV9zJkYZaOn1PMF6g9CslXJhU3wHTe%2FdgeUJYMLbtY332pLAlgeOeOJlLsMUNTj%2FpC4XM4WDZiacuYYctmjPQn2FFEEmzECQUs44wULTO6IzYdPlzIsCRKt7x0owZRgNCTImu2PajDIC4dKQePoum7YL4fJSpxxTtunjgEG%2BC6VSnjdGvrNIJ08j%2FUHtnc%2BQcqjhqayYG2ijCmaHC5rtjNc64Ktg%2FLS6OL1Nu3Ty4A8I4yCShnjw1D4qydbSlVBNcLSAIov%2BaEj9AzEWlja6G%2F2LO3z4MNES%2FBsH9764GYeOrWpwYXzi90s2e2xc5%2FX4vOhYF9nHmSAq1uImvcHR6NbEXmpXrV5VSgk2xffbOLxXXne4pKMIO6QEywAZ7%2F1NjQTQ9PXWHsIljDrgDVxBPTx7cnzEczrzzVTF3GQE2NgPZQjqQayO1eR9VYJkJ%2Fh8oR9pYP0eVF0AL9RZRlOZacA3GJN9ZnGSke4hFxrv8eVw%2FMMvGm74GOqUBH647FOsUIEc7DaYkj3bl1E6VP2pIsMR9sjwNLO0VM3Dyy%2BIcD4SMyQcrTygd9dDzqXSwOTX7rD%2FfwUNjAKDqAoG6gSgRs7KOiRR3D7hiPTjwVoke3SbedBD65a4p8eQYz4gF7GaG%2FPVT6WbvuVX%2B6luCT2ACWQ9CLh%2FyPcNmQL6Z6NgmGFBEUzRM%2FPw3cK6Pp2NKQ2MkE9b7ASOnF6G5o7P%2BCRPX&X-Amz-Signature=0c411ccaf8401e44e48e9ce61fc0a64127c79594cf54745786b1471fef4d130a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
