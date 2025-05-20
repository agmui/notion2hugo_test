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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4Z34P5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlDXmqb%2FH%2FDeJNBHjhMcFiaLVsgw9mpPofD4DaKpJ1GAiEAvg5deJt%2BD7wZI9UhsputvdagL87AgM5%2Fsj0ddttnDBwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADtT7MetuX4R9i1myrcA%2Ba8kg4GEgrcx0KxWnwNKYnaD6PoDTNlf2w%2FkkhCOwa1IMxjiFKLOAXfPyw%2FSc3DhkvjeIo%2F8F5uZB74ukDl1unVw8ydhxgU3%2B%2BksPNILU1xvhDSWL5LMS7PtCd2F3%2FS48hpxLtxkBVtege3acVrvyUp7aKYrBDz6ieiy2TqEEmpSpBV4S5Qq6J8RHdnGJvFSqKwz9zwD7k8mdZEZrkvFBa5BGYJDQrpaLAHKd7mMK4VUQroLHYCzhsuCXqwEKzGd9legx0fmKmLvVh1pIqLN25%2BfP7NsdUisP3jnrPqblhWmlAF2mW6EUCajWpGSbkh%2BcXAG1Zs1VY2n%2BCP5wSiymETrHesy3%2Byf0sb6lLpTBWNalmXVT7GhkZSOJJzf1Q2nl1Y02Fiql%2B4JkvQOgSAPJ%2Fljjhtx3S3GLvxdmvnk6vLEvto1Bk2SOCcXEzF88zLLFxFHO4S1sMAm%2BROMr%2F2SEgyx0%2B2PdXBL4TXW2OOYDrLJ6lijqyVC54EEW3Y9CpFqPLkUgAlzvbjzCvFyxSFdQ9rXuWoxVBfkEsU2XIUgLgxTDviHFQDK0uHnvnuSGCycMkJUc93ugBxBXHn0H2CMQZdEV3Fk53ox1FfQ5Si4EhhsDUrC6Wxk5x1OZkdMLyar8EGOqUBBmrXEQXlwgK%2FgsBrgMsn803ujgb3NZnMX4QWHsqyw7j5SnC7soMg4rqqknQwzOiur51szpaQoG0oxMRre93dnMa6a9xqmrH4uc2TTF05JqWVia0VurW%2FDbzB9eDS6IgcNzHsuOJYf4tzWTsC8oL84ILrIVJfWVGM9hlgqOlTC%2B7eY4lUhkLzRf7X5EV34Tv8NGCxT2aAbqp9KXXKxgRCncPgvqz3&X-Amz-Signature=7382edbcb954612ee0dbeafb5157a128e98683365c330ade7a1ae512f8598aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4Z34P5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlDXmqb%2FH%2FDeJNBHjhMcFiaLVsgw9mpPofD4DaKpJ1GAiEAvg5deJt%2BD7wZI9UhsputvdagL87AgM5%2Fsj0ddttnDBwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADtT7MetuX4R9i1myrcA%2Ba8kg4GEgrcx0KxWnwNKYnaD6PoDTNlf2w%2FkkhCOwa1IMxjiFKLOAXfPyw%2FSc3DhkvjeIo%2F8F5uZB74ukDl1unVw8ydhxgU3%2B%2BksPNILU1xvhDSWL5LMS7PtCd2F3%2FS48hpxLtxkBVtege3acVrvyUp7aKYrBDz6ieiy2TqEEmpSpBV4S5Qq6J8RHdnGJvFSqKwz9zwD7k8mdZEZrkvFBa5BGYJDQrpaLAHKd7mMK4VUQroLHYCzhsuCXqwEKzGd9legx0fmKmLvVh1pIqLN25%2BfP7NsdUisP3jnrPqblhWmlAF2mW6EUCajWpGSbkh%2BcXAG1Zs1VY2n%2BCP5wSiymETrHesy3%2Byf0sb6lLpTBWNalmXVT7GhkZSOJJzf1Q2nl1Y02Fiql%2B4JkvQOgSAPJ%2Fljjhtx3S3GLvxdmvnk6vLEvto1Bk2SOCcXEzF88zLLFxFHO4S1sMAm%2BROMr%2F2SEgyx0%2B2PdXBL4TXW2OOYDrLJ6lijqyVC54EEW3Y9CpFqPLkUgAlzvbjzCvFyxSFdQ9rXuWoxVBfkEsU2XIUgLgxTDviHFQDK0uHnvnuSGCycMkJUc93ugBxBXHn0H2CMQZdEV3Fk53ox1FfQ5Si4EhhsDUrC6Wxk5x1OZkdMLyar8EGOqUBBmrXEQXlwgK%2FgsBrgMsn803ujgb3NZnMX4QWHsqyw7j5SnC7soMg4rqqknQwzOiur51szpaQoG0oxMRre93dnMa6a9xqmrH4uc2TTF05JqWVia0VurW%2FDbzB9eDS6IgcNzHsuOJYf4tzWTsC8oL84ILrIVJfWVGM9hlgqOlTC%2B7eY4lUhkLzRf7X5EV34Tv8NGCxT2aAbqp9KXXKxgRCncPgvqz3&X-Amz-Signature=c78049395798e5b3b341136cfb6bb4996fc866e62956139af9128154c3bf4819&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4Z34P5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlDXmqb%2FH%2FDeJNBHjhMcFiaLVsgw9mpPofD4DaKpJ1GAiEAvg5deJt%2BD7wZI9UhsputvdagL87AgM5%2Fsj0ddttnDBwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADtT7MetuX4R9i1myrcA%2Ba8kg4GEgrcx0KxWnwNKYnaD6PoDTNlf2w%2FkkhCOwa1IMxjiFKLOAXfPyw%2FSc3DhkvjeIo%2F8F5uZB74ukDl1unVw8ydhxgU3%2B%2BksPNILU1xvhDSWL5LMS7PtCd2F3%2FS48hpxLtxkBVtege3acVrvyUp7aKYrBDz6ieiy2TqEEmpSpBV4S5Qq6J8RHdnGJvFSqKwz9zwD7k8mdZEZrkvFBa5BGYJDQrpaLAHKd7mMK4VUQroLHYCzhsuCXqwEKzGd9legx0fmKmLvVh1pIqLN25%2BfP7NsdUisP3jnrPqblhWmlAF2mW6EUCajWpGSbkh%2BcXAG1Zs1VY2n%2BCP5wSiymETrHesy3%2Byf0sb6lLpTBWNalmXVT7GhkZSOJJzf1Q2nl1Y02Fiql%2B4JkvQOgSAPJ%2Fljjhtx3S3GLvxdmvnk6vLEvto1Bk2SOCcXEzF88zLLFxFHO4S1sMAm%2BROMr%2F2SEgyx0%2B2PdXBL4TXW2OOYDrLJ6lijqyVC54EEW3Y9CpFqPLkUgAlzvbjzCvFyxSFdQ9rXuWoxVBfkEsU2XIUgLgxTDviHFQDK0uHnvnuSGCycMkJUc93ugBxBXHn0H2CMQZdEV3Fk53ox1FfQ5Si4EhhsDUrC6Wxk5x1OZkdMLyar8EGOqUBBmrXEQXlwgK%2FgsBrgMsn803ujgb3NZnMX4QWHsqyw7j5SnC7soMg4rqqknQwzOiur51szpaQoG0oxMRre93dnMa6a9xqmrH4uc2TTF05JqWVia0VurW%2FDbzB9eDS6IgcNzHsuOJYf4tzWTsC8oL84ILrIVJfWVGM9hlgqOlTC%2B7eY4lUhkLzRf7X5EV34Tv8NGCxT2aAbqp9KXXKxgRCncPgvqz3&X-Amz-Signature=7b4a7abb79ae08c94d5a363cb0e553eecb116fe1d71c498386563d4ade5fc97c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4Z34P5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlDXmqb%2FH%2FDeJNBHjhMcFiaLVsgw9mpPofD4DaKpJ1GAiEAvg5deJt%2BD7wZI9UhsputvdagL87AgM5%2Fsj0ddttnDBwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADtT7MetuX4R9i1myrcA%2Ba8kg4GEgrcx0KxWnwNKYnaD6PoDTNlf2w%2FkkhCOwa1IMxjiFKLOAXfPyw%2FSc3DhkvjeIo%2F8F5uZB74ukDl1unVw8ydhxgU3%2B%2BksPNILU1xvhDSWL5LMS7PtCd2F3%2FS48hpxLtxkBVtege3acVrvyUp7aKYrBDz6ieiy2TqEEmpSpBV4S5Qq6J8RHdnGJvFSqKwz9zwD7k8mdZEZrkvFBa5BGYJDQrpaLAHKd7mMK4VUQroLHYCzhsuCXqwEKzGd9legx0fmKmLvVh1pIqLN25%2BfP7NsdUisP3jnrPqblhWmlAF2mW6EUCajWpGSbkh%2BcXAG1Zs1VY2n%2BCP5wSiymETrHesy3%2Byf0sb6lLpTBWNalmXVT7GhkZSOJJzf1Q2nl1Y02Fiql%2B4JkvQOgSAPJ%2Fljjhtx3S3GLvxdmvnk6vLEvto1Bk2SOCcXEzF88zLLFxFHO4S1sMAm%2BROMr%2F2SEgyx0%2B2PdXBL4TXW2OOYDrLJ6lijqyVC54EEW3Y9CpFqPLkUgAlzvbjzCvFyxSFdQ9rXuWoxVBfkEsU2XIUgLgxTDviHFQDK0uHnvnuSGCycMkJUc93ugBxBXHn0H2CMQZdEV3Fk53ox1FfQ5Si4EhhsDUrC6Wxk5x1OZkdMLyar8EGOqUBBmrXEQXlwgK%2FgsBrgMsn803ujgb3NZnMX4QWHsqyw7j5SnC7soMg4rqqknQwzOiur51szpaQoG0oxMRre93dnMa6a9xqmrH4uc2TTF05JqWVia0VurW%2FDbzB9eDS6IgcNzHsuOJYf4tzWTsC8oL84ILrIVJfWVGM9hlgqOlTC%2B7eY4lUhkLzRf7X5EV34Tv8NGCxT2aAbqp9KXXKxgRCncPgvqz3&X-Amz-Signature=95c629e7368a355e8de7d612a9076046f14618314caa59ea0d5c4ce97868ad79&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4Z34P5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlDXmqb%2FH%2FDeJNBHjhMcFiaLVsgw9mpPofD4DaKpJ1GAiEAvg5deJt%2BD7wZI9UhsputvdagL87AgM5%2Fsj0ddttnDBwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADtT7MetuX4R9i1myrcA%2Ba8kg4GEgrcx0KxWnwNKYnaD6PoDTNlf2w%2FkkhCOwa1IMxjiFKLOAXfPyw%2FSc3DhkvjeIo%2F8F5uZB74ukDl1unVw8ydhxgU3%2B%2BksPNILU1xvhDSWL5LMS7PtCd2F3%2FS48hpxLtxkBVtege3acVrvyUp7aKYrBDz6ieiy2TqEEmpSpBV4S5Qq6J8RHdnGJvFSqKwz9zwD7k8mdZEZrkvFBa5BGYJDQrpaLAHKd7mMK4VUQroLHYCzhsuCXqwEKzGd9legx0fmKmLvVh1pIqLN25%2BfP7NsdUisP3jnrPqblhWmlAF2mW6EUCajWpGSbkh%2BcXAG1Zs1VY2n%2BCP5wSiymETrHesy3%2Byf0sb6lLpTBWNalmXVT7GhkZSOJJzf1Q2nl1Y02Fiql%2B4JkvQOgSAPJ%2Fljjhtx3S3GLvxdmvnk6vLEvto1Bk2SOCcXEzF88zLLFxFHO4S1sMAm%2BROMr%2F2SEgyx0%2B2PdXBL4TXW2OOYDrLJ6lijqyVC54EEW3Y9CpFqPLkUgAlzvbjzCvFyxSFdQ9rXuWoxVBfkEsU2XIUgLgxTDviHFQDK0uHnvnuSGCycMkJUc93ugBxBXHn0H2CMQZdEV3Fk53ox1FfQ5Si4EhhsDUrC6Wxk5x1OZkdMLyar8EGOqUBBmrXEQXlwgK%2FgsBrgMsn803ujgb3NZnMX4QWHsqyw7j5SnC7soMg4rqqknQwzOiur51szpaQoG0oxMRre93dnMa6a9xqmrH4uc2TTF05JqWVia0VurW%2FDbzB9eDS6IgcNzHsuOJYf4tzWTsC8oL84ILrIVJfWVGM9hlgqOlTC%2B7eY4lUhkLzRf7X5EV34Tv8NGCxT2aAbqp9KXXKxgRCncPgvqz3&X-Amz-Signature=b21f49e452e06c0408457640128501b3ee4beb49ec07fddd2926c98737490540&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4Z34P5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlDXmqb%2FH%2FDeJNBHjhMcFiaLVsgw9mpPofD4DaKpJ1GAiEAvg5deJt%2BD7wZI9UhsputvdagL87AgM5%2Fsj0ddttnDBwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADtT7MetuX4R9i1myrcA%2Ba8kg4GEgrcx0KxWnwNKYnaD6PoDTNlf2w%2FkkhCOwa1IMxjiFKLOAXfPyw%2FSc3DhkvjeIo%2F8F5uZB74ukDl1unVw8ydhxgU3%2B%2BksPNILU1xvhDSWL5LMS7PtCd2F3%2FS48hpxLtxkBVtege3acVrvyUp7aKYrBDz6ieiy2TqEEmpSpBV4S5Qq6J8RHdnGJvFSqKwz9zwD7k8mdZEZrkvFBa5BGYJDQrpaLAHKd7mMK4VUQroLHYCzhsuCXqwEKzGd9legx0fmKmLvVh1pIqLN25%2BfP7NsdUisP3jnrPqblhWmlAF2mW6EUCajWpGSbkh%2BcXAG1Zs1VY2n%2BCP5wSiymETrHesy3%2Byf0sb6lLpTBWNalmXVT7GhkZSOJJzf1Q2nl1Y02Fiql%2B4JkvQOgSAPJ%2Fljjhtx3S3GLvxdmvnk6vLEvto1Bk2SOCcXEzF88zLLFxFHO4S1sMAm%2BROMr%2F2SEgyx0%2B2PdXBL4TXW2OOYDrLJ6lijqyVC54EEW3Y9CpFqPLkUgAlzvbjzCvFyxSFdQ9rXuWoxVBfkEsU2XIUgLgxTDviHFQDK0uHnvnuSGCycMkJUc93ugBxBXHn0H2CMQZdEV3Fk53ox1FfQ5Si4EhhsDUrC6Wxk5x1OZkdMLyar8EGOqUBBmrXEQXlwgK%2FgsBrgMsn803ujgb3NZnMX4QWHsqyw7j5SnC7soMg4rqqknQwzOiur51szpaQoG0oxMRre93dnMa6a9xqmrH4uc2TTF05JqWVia0VurW%2FDbzB9eDS6IgcNzHsuOJYf4tzWTsC8oL84ILrIVJfWVGM9hlgqOlTC%2B7eY4lUhkLzRf7X5EV34Tv8NGCxT2aAbqp9KXXKxgRCncPgvqz3&X-Amz-Signature=82742561fd64d690b41cca93853df2ac26079d5dc8af16188fb702b633b43c41&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4Z34P5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlDXmqb%2FH%2FDeJNBHjhMcFiaLVsgw9mpPofD4DaKpJ1GAiEAvg5deJt%2BD7wZI9UhsputvdagL87AgM5%2Fsj0ddttnDBwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADtT7MetuX4R9i1myrcA%2Ba8kg4GEgrcx0KxWnwNKYnaD6PoDTNlf2w%2FkkhCOwa1IMxjiFKLOAXfPyw%2FSc3DhkvjeIo%2F8F5uZB74ukDl1unVw8ydhxgU3%2B%2BksPNILU1xvhDSWL5LMS7PtCd2F3%2FS48hpxLtxkBVtege3acVrvyUp7aKYrBDz6ieiy2TqEEmpSpBV4S5Qq6J8RHdnGJvFSqKwz9zwD7k8mdZEZrkvFBa5BGYJDQrpaLAHKd7mMK4VUQroLHYCzhsuCXqwEKzGd9legx0fmKmLvVh1pIqLN25%2BfP7NsdUisP3jnrPqblhWmlAF2mW6EUCajWpGSbkh%2BcXAG1Zs1VY2n%2BCP5wSiymETrHesy3%2Byf0sb6lLpTBWNalmXVT7GhkZSOJJzf1Q2nl1Y02Fiql%2B4JkvQOgSAPJ%2Fljjhtx3S3GLvxdmvnk6vLEvto1Bk2SOCcXEzF88zLLFxFHO4S1sMAm%2BROMr%2F2SEgyx0%2B2PdXBL4TXW2OOYDrLJ6lijqyVC54EEW3Y9CpFqPLkUgAlzvbjzCvFyxSFdQ9rXuWoxVBfkEsU2XIUgLgxTDviHFQDK0uHnvnuSGCycMkJUc93ugBxBXHn0H2CMQZdEV3Fk53ox1FfQ5Si4EhhsDUrC6Wxk5x1OZkdMLyar8EGOqUBBmrXEQXlwgK%2FgsBrgMsn803ujgb3NZnMX4QWHsqyw7j5SnC7soMg4rqqknQwzOiur51szpaQoG0oxMRre93dnMa6a9xqmrH4uc2TTF05JqWVia0VurW%2FDbzB9eDS6IgcNzHsuOJYf4tzWTsC8oL84ILrIVJfWVGM9hlgqOlTC%2B7eY4lUhkLzRf7X5EV34Tv8NGCxT2aAbqp9KXXKxgRCncPgvqz3&X-Amz-Signature=d2edeab839f2ff820b0c4bce15b326105086f1e0b5fe05aa81123c97c966ab7b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
