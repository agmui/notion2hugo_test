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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77ABFG2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dmShu8Bh%2FQWo7RzqcHVsFLrE7484C%2F%2B2iSGwD1a2BgIhAKhivyIcvgYDhZEEluW4oyeRJidFqhj0i0KSJ%2ByikCpZKv8DCGkQABoMNjM3NDIzMTgzODA1IgzPuV2PwcfUmNoHDl0q3AN9pOFw2vzBqh6KkIRRsVeSzB1OYq%2B5kuJHNCNVJhUcAtKrL%2FLDGYhEY6%2BT6zUGMo7JmAVcxH7drNgVUistwFGXEP3J7Z3n2SWVbtfOk5eTA%2Bk1VkGzGS9wRs8e%2BphUuytOJsx2BX4eRxIjxjDb1WJzQd0ftg1mtc3jWhSRhyh%2FKQyoTokoE%2FAAvPWYpMNcYe5msiwCrl7%2BC%2Fk9EItTzP7oMjRI%2FSfPht1mwdGZcGoTuosbsym%2BYeYPdYmRXOsyQUqo8Mdn39QurEC3SzqWmhAQja8AlHNT%2BgjumoYncd94QCZCTdi6xqfq4bioKrK4V2kbMsCTspuQRrnz6suXYYC7ILINpD%2F%2F41utD5T0nz%2BWpEPkxFbHWkgkrssQxU%2FuF1YVOx7ISzCinDz%2FuIBXJCDKw7DN6hGFXohYSFtv9u5kfl15f%2F%2FiTrhzNg4Fd9THF7LNyL44Qnujf224Wb2LZLQ7LiNLbbsyTbwEC6ocbhti1cHhFexeRYI8sSF8q%2FUMxXVW9Vz3rntZSrx4uu%2FdwUXoneUvMwiZAvsx7Ifv83BRe56Gppi6azc6bJBMOXHjfCo9MNeCmrJEe8EKpdaLfzsx3zcvbphuJq9KqvU%2Fn0jVvo6k4h%2FCURNY%2F3CUjDDF3sLCBjqkAa1%2FCVqKjhoQ7uwWhhWB0p4F0f2G7dNdW7xy5%2FTCQ3PRMFsCWQtcJz0Cgb6zErDgIS1mDIdGI7NGx7wyiEgkAZBRt9kFQMytTcxN4TSwltQFVC%2B8sS2fU6m590E3og2wbPQg7Cml21CoQjc6QQTSC5iq2Y9%2BQhBhddKwzl%2F38%2F%2FMo36p5KI3Lr0HK%2FduTxnVWFZysdikqVgx7e1J4qCv9FVhewRR&X-Amz-Signature=69b879d910d28657efdd3768ca3a1359cbba75b5ca11c573039b4f814b41a517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77ABFG2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dmShu8Bh%2FQWo7RzqcHVsFLrE7484C%2F%2B2iSGwD1a2BgIhAKhivyIcvgYDhZEEluW4oyeRJidFqhj0i0KSJ%2ByikCpZKv8DCGkQABoMNjM3NDIzMTgzODA1IgzPuV2PwcfUmNoHDl0q3AN9pOFw2vzBqh6KkIRRsVeSzB1OYq%2B5kuJHNCNVJhUcAtKrL%2FLDGYhEY6%2BT6zUGMo7JmAVcxH7drNgVUistwFGXEP3J7Z3n2SWVbtfOk5eTA%2Bk1VkGzGS9wRs8e%2BphUuytOJsx2BX4eRxIjxjDb1WJzQd0ftg1mtc3jWhSRhyh%2FKQyoTokoE%2FAAvPWYpMNcYe5msiwCrl7%2BC%2Fk9EItTzP7oMjRI%2FSfPht1mwdGZcGoTuosbsym%2BYeYPdYmRXOsyQUqo8Mdn39QurEC3SzqWmhAQja8AlHNT%2BgjumoYncd94QCZCTdi6xqfq4bioKrK4V2kbMsCTspuQRrnz6suXYYC7ILINpD%2F%2F41utD5T0nz%2BWpEPkxFbHWkgkrssQxU%2FuF1YVOx7ISzCinDz%2FuIBXJCDKw7DN6hGFXohYSFtv9u5kfl15f%2F%2FiTrhzNg4Fd9THF7LNyL44Qnujf224Wb2LZLQ7LiNLbbsyTbwEC6ocbhti1cHhFexeRYI8sSF8q%2FUMxXVW9Vz3rntZSrx4uu%2FdwUXoneUvMwiZAvsx7Ifv83BRe56Gppi6azc6bJBMOXHjfCo9MNeCmrJEe8EKpdaLfzsx3zcvbphuJq9KqvU%2Fn0jVvo6k4h%2FCURNY%2F3CUjDDF3sLCBjqkAa1%2FCVqKjhoQ7uwWhhWB0p4F0f2G7dNdW7xy5%2FTCQ3PRMFsCWQtcJz0Cgb6zErDgIS1mDIdGI7NGx7wyiEgkAZBRt9kFQMytTcxN4TSwltQFVC%2B8sS2fU6m590E3og2wbPQg7Cml21CoQjc6QQTSC5iq2Y9%2BQhBhddKwzl%2F38%2F%2FMo36p5KI3Lr0HK%2FduTxnVWFZysdikqVgx7e1J4qCv9FVhewRR&X-Amz-Signature=082804bab846be1051df83693b686e6d215be303beb9385f138072fb28706d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77ABFG2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dmShu8Bh%2FQWo7RzqcHVsFLrE7484C%2F%2B2iSGwD1a2BgIhAKhivyIcvgYDhZEEluW4oyeRJidFqhj0i0KSJ%2ByikCpZKv8DCGkQABoMNjM3NDIzMTgzODA1IgzPuV2PwcfUmNoHDl0q3AN9pOFw2vzBqh6KkIRRsVeSzB1OYq%2B5kuJHNCNVJhUcAtKrL%2FLDGYhEY6%2BT6zUGMo7JmAVcxH7drNgVUistwFGXEP3J7Z3n2SWVbtfOk5eTA%2Bk1VkGzGS9wRs8e%2BphUuytOJsx2BX4eRxIjxjDb1WJzQd0ftg1mtc3jWhSRhyh%2FKQyoTokoE%2FAAvPWYpMNcYe5msiwCrl7%2BC%2Fk9EItTzP7oMjRI%2FSfPht1mwdGZcGoTuosbsym%2BYeYPdYmRXOsyQUqo8Mdn39QurEC3SzqWmhAQja8AlHNT%2BgjumoYncd94QCZCTdi6xqfq4bioKrK4V2kbMsCTspuQRrnz6suXYYC7ILINpD%2F%2F41utD5T0nz%2BWpEPkxFbHWkgkrssQxU%2FuF1YVOx7ISzCinDz%2FuIBXJCDKw7DN6hGFXohYSFtv9u5kfl15f%2F%2FiTrhzNg4Fd9THF7LNyL44Qnujf224Wb2LZLQ7LiNLbbsyTbwEC6ocbhti1cHhFexeRYI8sSF8q%2FUMxXVW9Vz3rntZSrx4uu%2FdwUXoneUvMwiZAvsx7Ifv83BRe56Gppi6azc6bJBMOXHjfCo9MNeCmrJEe8EKpdaLfzsx3zcvbphuJq9KqvU%2Fn0jVvo6k4h%2FCURNY%2F3CUjDDF3sLCBjqkAa1%2FCVqKjhoQ7uwWhhWB0p4F0f2G7dNdW7xy5%2FTCQ3PRMFsCWQtcJz0Cgb6zErDgIS1mDIdGI7NGx7wyiEgkAZBRt9kFQMytTcxN4TSwltQFVC%2B8sS2fU6m590E3og2wbPQg7Cml21CoQjc6QQTSC5iq2Y9%2BQhBhddKwzl%2F38%2F%2FMo36p5KI3Lr0HK%2FduTxnVWFZysdikqVgx7e1J4qCv9FVhewRR&X-Amz-Signature=15f9c48f9b700a15ad0865828cd0cf06a27605a5627520889be9ff8cf149938e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77ABFG2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dmShu8Bh%2FQWo7RzqcHVsFLrE7484C%2F%2B2iSGwD1a2BgIhAKhivyIcvgYDhZEEluW4oyeRJidFqhj0i0KSJ%2ByikCpZKv8DCGkQABoMNjM3NDIzMTgzODA1IgzPuV2PwcfUmNoHDl0q3AN9pOFw2vzBqh6KkIRRsVeSzB1OYq%2B5kuJHNCNVJhUcAtKrL%2FLDGYhEY6%2BT6zUGMo7JmAVcxH7drNgVUistwFGXEP3J7Z3n2SWVbtfOk5eTA%2Bk1VkGzGS9wRs8e%2BphUuytOJsx2BX4eRxIjxjDb1WJzQd0ftg1mtc3jWhSRhyh%2FKQyoTokoE%2FAAvPWYpMNcYe5msiwCrl7%2BC%2Fk9EItTzP7oMjRI%2FSfPht1mwdGZcGoTuosbsym%2BYeYPdYmRXOsyQUqo8Mdn39QurEC3SzqWmhAQja8AlHNT%2BgjumoYncd94QCZCTdi6xqfq4bioKrK4V2kbMsCTspuQRrnz6suXYYC7ILINpD%2F%2F41utD5T0nz%2BWpEPkxFbHWkgkrssQxU%2FuF1YVOx7ISzCinDz%2FuIBXJCDKw7DN6hGFXohYSFtv9u5kfl15f%2F%2FiTrhzNg4Fd9THF7LNyL44Qnujf224Wb2LZLQ7LiNLbbsyTbwEC6ocbhti1cHhFexeRYI8sSF8q%2FUMxXVW9Vz3rntZSrx4uu%2FdwUXoneUvMwiZAvsx7Ifv83BRe56Gppi6azc6bJBMOXHjfCo9MNeCmrJEe8EKpdaLfzsx3zcvbphuJq9KqvU%2Fn0jVvo6k4h%2FCURNY%2F3CUjDDF3sLCBjqkAa1%2FCVqKjhoQ7uwWhhWB0p4F0f2G7dNdW7xy5%2FTCQ3PRMFsCWQtcJz0Cgb6zErDgIS1mDIdGI7NGx7wyiEgkAZBRt9kFQMytTcxN4TSwltQFVC%2B8sS2fU6m590E3og2wbPQg7Cml21CoQjc6QQTSC5iq2Y9%2BQhBhddKwzl%2F38%2F%2FMo36p5KI3Lr0HK%2FduTxnVWFZysdikqVgx7e1J4qCv9FVhewRR&X-Amz-Signature=4792b7fa8e49cbb1cefb542c8e30680be783d758b5ae0f11af8875c3de809183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77ABFG2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dmShu8Bh%2FQWo7RzqcHVsFLrE7484C%2F%2B2iSGwD1a2BgIhAKhivyIcvgYDhZEEluW4oyeRJidFqhj0i0KSJ%2ByikCpZKv8DCGkQABoMNjM3NDIzMTgzODA1IgzPuV2PwcfUmNoHDl0q3AN9pOFw2vzBqh6KkIRRsVeSzB1OYq%2B5kuJHNCNVJhUcAtKrL%2FLDGYhEY6%2BT6zUGMo7JmAVcxH7drNgVUistwFGXEP3J7Z3n2SWVbtfOk5eTA%2Bk1VkGzGS9wRs8e%2BphUuytOJsx2BX4eRxIjxjDb1WJzQd0ftg1mtc3jWhSRhyh%2FKQyoTokoE%2FAAvPWYpMNcYe5msiwCrl7%2BC%2Fk9EItTzP7oMjRI%2FSfPht1mwdGZcGoTuosbsym%2BYeYPdYmRXOsyQUqo8Mdn39QurEC3SzqWmhAQja8AlHNT%2BgjumoYncd94QCZCTdi6xqfq4bioKrK4V2kbMsCTspuQRrnz6suXYYC7ILINpD%2F%2F41utD5T0nz%2BWpEPkxFbHWkgkrssQxU%2FuF1YVOx7ISzCinDz%2FuIBXJCDKw7DN6hGFXohYSFtv9u5kfl15f%2F%2FiTrhzNg4Fd9THF7LNyL44Qnujf224Wb2LZLQ7LiNLbbsyTbwEC6ocbhti1cHhFexeRYI8sSF8q%2FUMxXVW9Vz3rntZSrx4uu%2FdwUXoneUvMwiZAvsx7Ifv83BRe56Gppi6azc6bJBMOXHjfCo9MNeCmrJEe8EKpdaLfzsx3zcvbphuJq9KqvU%2Fn0jVvo6k4h%2FCURNY%2F3CUjDDF3sLCBjqkAa1%2FCVqKjhoQ7uwWhhWB0p4F0f2G7dNdW7xy5%2FTCQ3PRMFsCWQtcJz0Cgb6zErDgIS1mDIdGI7NGx7wyiEgkAZBRt9kFQMytTcxN4TSwltQFVC%2B8sS2fU6m590E3og2wbPQg7Cml21CoQjc6QQTSC5iq2Y9%2BQhBhddKwzl%2F38%2F%2FMo36p5KI3Lr0HK%2FduTxnVWFZysdikqVgx7e1J4qCv9FVhewRR&X-Amz-Signature=da93054ae160ae5c065daa1a652867dcbd2ac8e5e4a22e0747de66e5d4539e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77ABFG2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dmShu8Bh%2FQWo7RzqcHVsFLrE7484C%2F%2B2iSGwD1a2BgIhAKhivyIcvgYDhZEEluW4oyeRJidFqhj0i0KSJ%2ByikCpZKv8DCGkQABoMNjM3NDIzMTgzODA1IgzPuV2PwcfUmNoHDl0q3AN9pOFw2vzBqh6KkIRRsVeSzB1OYq%2B5kuJHNCNVJhUcAtKrL%2FLDGYhEY6%2BT6zUGMo7JmAVcxH7drNgVUistwFGXEP3J7Z3n2SWVbtfOk5eTA%2Bk1VkGzGS9wRs8e%2BphUuytOJsx2BX4eRxIjxjDb1WJzQd0ftg1mtc3jWhSRhyh%2FKQyoTokoE%2FAAvPWYpMNcYe5msiwCrl7%2BC%2Fk9EItTzP7oMjRI%2FSfPht1mwdGZcGoTuosbsym%2BYeYPdYmRXOsyQUqo8Mdn39QurEC3SzqWmhAQja8AlHNT%2BgjumoYncd94QCZCTdi6xqfq4bioKrK4V2kbMsCTspuQRrnz6suXYYC7ILINpD%2F%2F41utD5T0nz%2BWpEPkxFbHWkgkrssQxU%2FuF1YVOx7ISzCinDz%2FuIBXJCDKw7DN6hGFXohYSFtv9u5kfl15f%2F%2FiTrhzNg4Fd9THF7LNyL44Qnujf224Wb2LZLQ7LiNLbbsyTbwEC6ocbhti1cHhFexeRYI8sSF8q%2FUMxXVW9Vz3rntZSrx4uu%2FdwUXoneUvMwiZAvsx7Ifv83BRe56Gppi6azc6bJBMOXHjfCo9MNeCmrJEe8EKpdaLfzsx3zcvbphuJq9KqvU%2Fn0jVvo6k4h%2FCURNY%2F3CUjDDF3sLCBjqkAa1%2FCVqKjhoQ7uwWhhWB0p4F0f2G7dNdW7xy5%2FTCQ3PRMFsCWQtcJz0Cgb6zErDgIS1mDIdGI7NGx7wyiEgkAZBRt9kFQMytTcxN4TSwltQFVC%2B8sS2fU6m590E3og2wbPQg7Cml21CoQjc6QQTSC5iq2Y9%2BQhBhddKwzl%2F38%2F%2FMo36p5KI3Lr0HK%2FduTxnVWFZysdikqVgx7e1J4qCv9FVhewRR&X-Amz-Signature=773df7b5a5fbf1867e003e12fc8f02a6d0a189f552d21f31067994fe009b4df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77ABFG2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8dmShu8Bh%2FQWo7RzqcHVsFLrE7484C%2F%2B2iSGwD1a2BgIhAKhivyIcvgYDhZEEluW4oyeRJidFqhj0i0KSJ%2ByikCpZKv8DCGkQABoMNjM3NDIzMTgzODA1IgzPuV2PwcfUmNoHDl0q3AN9pOFw2vzBqh6KkIRRsVeSzB1OYq%2B5kuJHNCNVJhUcAtKrL%2FLDGYhEY6%2BT6zUGMo7JmAVcxH7drNgVUistwFGXEP3J7Z3n2SWVbtfOk5eTA%2Bk1VkGzGS9wRs8e%2BphUuytOJsx2BX4eRxIjxjDb1WJzQd0ftg1mtc3jWhSRhyh%2FKQyoTokoE%2FAAvPWYpMNcYe5msiwCrl7%2BC%2Fk9EItTzP7oMjRI%2FSfPht1mwdGZcGoTuosbsym%2BYeYPdYmRXOsyQUqo8Mdn39QurEC3SzqWmhAQja8AlHNT%2BgjumoYncd94QCZCTdi6xqfq4bioKrK4V2kbMsCTspuQRrnz6suXYYC7ILINpD%2F%2F41utD5T0nz%2BWpEPkxFbHWkgkrssQxU%2FuF1YVOx7ISzCinDz%2FuIBXJCDKw7DN6hGFXohYSFtv9u5kfl15f%2F%2FiTrhzNg4Fd9THF7LNyL44Qnujf224Wb2LZLQ7LiNLbbsyTbwEC6ocbhti1cHhFexeRYI8sSF8q%2FUMxXVW9Vz3rntZSrx4uu%2FdwUXoneUvMwiZAvsx7Ifv83BRe56Gppi6azc6bJBMOXHjfCo9MNeCmrJEe8EKpdaLfzsx3zcvbphuJq9KqvU%2Fn0jVvo6k4h%2FCURNY%2F3CUjDDF3sLCBjqkAa1%2FCVqKjhoQ7uwWhhWB0p4F0f2G7dNdW7xy5%2FTCQ3PRMFsCWQtcJz0Cgb6zErDgIS1mDIdGI7NGx7wyiEgkAZBRt9kFQMytTcxN4TSwltQFVC%2B8sS2fU6m590E3og2wbPQg7Cml21CoQjc6QQTSC5iq2Y9%2BQhBhddKwzl%2F38%2F%2FMo36p5KI3Lr0HK%2FduTxnVWFZysdikqVgx7e1J4qCv9FVhewRR&X-Amz-Signature=288d702c113b6567d557958d5769169b6110408ea8d0e07f87e94d80cc90da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
