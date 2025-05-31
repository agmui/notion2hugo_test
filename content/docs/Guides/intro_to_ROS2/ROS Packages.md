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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOLYNQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejxsHIVpo8GSanORmKO1E00uPRcsaRAnJqZtOz0D9agIgSZi0OfZExp%2FfyO08uzR1IrSTRC846oYYl9z0H4mQ0ngqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpT7357pZWYfc%2Fd4ircAyQXwn7%2FQoFPls5M0e75ggNdrmg9CHJnelTYKB94%2FvDaimlpazlKmcNiT91ovgTj%2BDOlZcSrdlxt7f%2B7DMmviCKtOorcLsxuNONHDDd5%2BLmFwYYPealUQoQud7ZgIN0PwiSYGJK7NtY6dxjFALMTJMti6cO%2BCkAuqPrh9N%2FqeLMX7ACXRuG0iltZJwfo9Ddj55%2FLJpz09wU8387fMsGn3kGf8v4vqK6Pw6POjb8ASYLQelI%2FesQMPpvIsEsBiEdFm9O%2BUQPrOCRAEjocx4H2LX%2FXPjxrIdRJUzWqwnzWMT7hAaq%2BH%2FGlGonSTf6L5AVmGk7rm106mFsewSPXgYtZVeZ2igUFsfqav8sqqs%2Bg%2F5Va9YKdQ4nP%2Bqw2r38cN%2F1t6VKTNrMtv77OdX2ygDMRiTYYgZN0XALv1Iq8%2BcP5udf7EJO13PycLuWFLzo7%2FtpleN3WVgmIioy0OXoH9FXWE8qcXjyz0OILjk4tfZ7WSES1VMS5hKBw8%2F%2BjCD9fGJ%2FFrh2%2Fnc9cAWQjX6WRIHhQaoeQSw64bXxgi4OAQbsU9duRK1xiIUhkWRcAhH4%2BkuYZzU5M656fbZLDMLgcuTX03hIBA95iKloHmAYvPDXKe0%2B8jQMRxg%2FYB3fKvFGmMLeM6sEGOqUBaFkd3Dh5cu7BKWNTxqdcy2oBXp86Ji4Ld3HLEhq8HSKHYCVgm04oaMS2dy3iZzfm%2FA1xTi31dqdNGnDnlE7yLD6OJFaLXkgnCCZetHyJyzdaQvtNKqCmniZqMkDzrAX5CR5mqfMtJJVzlAMT3YNW9ONkKkAzA3udXsAzHI0fmr7KNqSCQmOmX2mWIgGKZsFrsIzKvyi3k82voD73oK3Iahz3W5pP&X-Amz-Signature=188adbe922ebfe6fdd4faa75a38cc0b662ffb3c9fee52d7981702878295db67f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOLYNQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejxsHIVpo8GSanORmKO1E00uPRcsaRAnJqZtOz0D9agIgSZi0OfZExp%2FfyO08uzR1IrSTRC846oYYl9z0H4mQ0ngqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpT7357pZWYfc%2Fd4ircAyQXwn7%2FQoFPls5M0e75ggNdrmg9CHJnelTYKB94%2FvDaimlpazlKmcNiT91ovgTj%2BDOlZcSrdlxt7f%2B7DMmviCKtOorcLsxuNONHDDd5%2BLmFwYYPealUQoQud7ZgIN0PwiSYGJK7NtY6dxjFALMTJMti6cO%2BCkAuqPrh9N%2FqeLMX7ACXRuG0iltZJwfo9Ddj55%2FLJpz09wU8387fMsGn3kGf8v4vqK6Pw6POjb8ASYLQelI%2FesQMPpvIsEsBiEdFm9O%2BUQPrOCRAEjocx4H2LX%2FXPjxrIdRJUzWqwnzWMT7hAaq%2BH%2FGlGonSTf6L5AVmGk7rm106mFsewSPXgYtZVeZ2igUFsfqav8sqqs%2Bg%2F5Va9YKdQ4nP%2Bqw2r38cN%2F1t6VKTNrMtv77OdX2ygDMRiTYYgZN0XALv1Iq8%2BcP5udf7EJO13PycLuWFLzo7%2FtpleN3WVgmIioy0OXoH9FXWE8qcXjyz0OILjk4tfZ7WSES1VMS5hKBw8%2F%2BjCD9fGJ%2FFrh2%2Fnc9cAWQjX6WRIHhQaoeQSw64bXxgi4OAQbsU9duRK1xiIUhkWRcAhH4%2BkuYZzU5M656fbZLDMLgcuTX03hIBA95iKloHmAYvPDXKe0%2B8jQMRxg%2FYB3fKvFGmMLeM6sEGOqUBaFkd3Dh5cu7BKWNTxqdcy2oBXp86Ji4Ld3HLEhq8HSKHYCVgm04oaMS2dy3iZzfm%2FA1xTi31dqdNGnDnlE7yLD6OJFaLXkgnCCZetHyJyzdaQvtNKqCmniZqMkDzrAX5CR5mqfMtJJVzlAMT3YNW9ONkKkAzA3udXsAzHI0fmr7KNqSCQmOmX2mWIgGKZsFrsIzKvyi3k82voD73oK3Iahz3W5pP&X-Amz-Signature=1b00f2ee3cc1867967b477982c066aadb772fe0c1e8bd3215d2c5829d2cd6c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOLYNQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejxsHIVpo8GSanORmKO1E00uPRcsaRAnJqZtOz0D9agIgSZi0OfZExp%2FfyO08uzR1IrSTRC846oYYl9z0H4mQ0ngqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpT7357pZWYfc%2Fd4ircAyQXwn7%2FQoFPls5M0e75ggNdrmg9CHJnelTYKB94%2FvDaimlpazlKmcNiT91ovgTj%2BDOlZcSrdlxt7f%2B7DMmviCKtOorcLsxuNONHDDd5%2BLmFwYYPealUQoQud7ZgIN0PwiSYGJK7NtY6dxjFALMTJMti6cO%2BCkAuqPrh9N%2FqeLMX7ACXRuG0iltZJwfo9Ddj55%2FLJpz09wU8387fMsGn3kGf8v4vqK6Pw6POjb8ASYLQelI%2FesQMPpvIsEsBiEdFm9O%2BUQPrOCRAEjocx4H2LX%2FXPjxrIdRJUzWqwnzWMT7hAaq%2BH%2FGlGonSTf6L5AVmGk7rm106mFsewSPXgYtZVeZ2igUFsfqav8sqqs%2Bg%2F5Va9YKdQ4nP%2Bqw2r38cN%2F1t6VKTNrMtv77OdX2ygDMRiTYYgZN0XALv1Iq8%2BcP5udf7EJO13PycLuWFLzo7%2FtpleN3WVgmIioy0OXoH9FXWE8qcXjyz0OILjk4tfZ7WSES1VMS5hKBw8%2F%2BjCD9fGJ%2FFrh2%2Fnc9cAWQjX6WRIHhQaoeQSw64bXxgi4OAQbsU9duRK1xiIUhkWRcAhH4%2BkuYZzU5M656fbZLDMLgcuTX03hIBA95iKloHmAYvPDXKe0%2B8jQMRxg%2FYB3fKvFGmMLeM6sEGOqUBaFkd3Dh5cu7BKWNTxqdcy2oBXp86Ji4Ld3HLEhq8HSKHYCVgm04oaMS2dy3iZzfm%2FA1xTi31dqdNGnDnlE7yLD6OJFaLXkgnCCZetHyJyzdaQvtNKqCmniZqMkDzrAX5CR5mqfMtJJVzlAMT3YNW9ONkKkAzA3udXsAzHI0fmr7KNqSCQmOmX2mWIgGKZsFrsIzKvyi3k82voD73oK3Iahz3W5pP&X-Amz-Signature=c420755b095834e938606e3962f02f0ac391ce4cd6a922d6d528dada4a7cfa23&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOLYNQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejxsHIVpo8GSanORmKO1E00uPRcsaRAnJqZtOz0D9agIgSZi0OfZExp%2FfyO08uzR1IrSTRC846oYYl9z0H4mQ0ngqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpT7357pZWYfc%2Fd4ircAyQXwn7%2FQoFPls5M0e75ggNdrmg9CHJnelTYKB94%2FvDaimlpazlKmcNiT91ovgTj%2BDOlZcSrdlxt7f%2B7DMmviCKtOorcLsxuNONHDDd5%2BLmFwYYPealUQoQud7ZgIN0PwiSYGJK7NtY6dxjFALMTJMti6cO%2BCkAuqPrh9N%2FqeLMX7ACXRuG0iltZJwfo9Ddj55%2FLJpz09wU8387fMsGn3kGf8v4vqK6Pw6POjb8ASYLQelI%2FesQMPpvIsEsBiEdFm9O%2BUQPrOCRAEjocx4H2LX%2FXPjxrIdRJUzWqwnzWMT7hAaq%2BH%2FGlGonSTf6L5AVmGk7rm106mFsewSPXgYtZVeZ2igUFsfqav8sqqs%2Bg%2F5Va9YKdQ4nP%2Bqw2r38cN%2F1t6VKTNrMtv77OdX2ygDMRiTYYgZN0XALv1Iq8%2BcP5udf7EJO13PycLuWFLzo7%2FtpleN3WVgmIioy0OXoH9FXWE8qcXjyz0OILjk4tfZ7WSES1VMS5hKBw8%2F%2BjCD9fGJ%2FFrh2%2Fnc9cAWQjX6WRIHhQaoeQSw64bXxgi4OAQbsU9duRK1xiIUhkWRcAhH4%2BkuYZzU5M656fbZLDMLgcuTX03hIBA95iKloHmAYvPDXKe0%2B8jQMRxg%2FYB3fKvFGmMLeM6sEGOqUBaFkd3Dh5cu7BKWNTxqdcy2oBXp86Ji4Ld3HLEhq8HSKHYCVgm04oaMS2dy3iZzfm%2FA1xTi31dqdNGnDnlE7yLD6OJFaLXkgnCCZetHyJyzdaQvtNKqCmniZqMkDzrAX5CR5mqfMtJJVzlAMT3YNW9ONkKkAzA3udXsAzHI0fmr7KNqSCQmOmX2mWIgGKZsFrsIzKvyi3k82voD73oK3Iahz3W5pP&X-Amz-Signature=f613d9abed02bd04cf39d338b76aa6e2f41a2c36ec06c9887c80b3a432356dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOLYNQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejxsHIVpo8GSanORmKO1E00uPRcsaRAnJqZtOz0D9agIgSZi0OfZExp%2FfyO08uzR1IrSTRC846oYYl9z0H4mQ0ngqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpT7357pZWYfc%2Fd4ircAyQXwn7%2FQoFPls5M0e75ggNdrmg9CHJnelTYKB94%2FvDaimlpazlKmcNiT91ovgTj%2BDOlZcSrdlxt7f%2B7DMmviCKtOorcLsxuNONHDDd5%2BLmFwYYPealUQoQud7ZgIN0PwiSYGJK7NtY6dxjFALMTJMti6cO%2BCkAuqPrh9N%2FqeLMX7ACXRuG0iltZJwfo9Ddj55%2FLJpz09wU8387fMsGn3kGf8v4vqK6Pw6POjb8ASYLQelI%2FesQMPpvIsEsBiEdFm9O%2BUQPrOCRAEjocx4H2LX%2FXPjxrIdRJUzWqwnzWMT7hAaq%2BH%2FGlGonSTf6L5AVmGk7rm106mFsewSPXgYtZVeZ2igUFsfqav8sqqs%2Bg%2F5Va9YKdQ4nP%2Bqw2r38cN%2F1t6VKTNrMtv77OdX2ygDMRiTYYgZN0XALv1Iq8%2BcP5udf7EJO13PycLuWFLzo7%2FtpleN3WVgmIioy0OXoH9FXWE8qcXjyz0OILjk4tfZ7WSES1VMS5hKBw8%2F%2BjCD9fGJ%2FFrh2%2Fnc9cAWQjX6WRIHhQaoeQSw64bXxgi4OAQbsU9duRK1xiIUhkWRcAhH4%2BkuYZzU5M656fbZLDMLgcuTX03hIBA95iKloHmAYvPDXKe0%2B8jQMRxg%2FYB3fKvFGmMLeM6sEGOqUBaFkd3Dh5cu7BKWNTxqdcy2oBXp86Ji4Ld3HLEhq8HSKHYCVgm04oaMS2dy3iZzfm%2FA1xTi31dqdNGnDnlE7yLD6OJFaLXkgnCCZetHyJyzdaQvtNKqCmniZqMkDzrAX5CR5mqfMtJJVzlAMT3YNW9ONkKkAzA3udXsAzHI0fmr7KNqSCQmOmX2mWIgGKZsFrsIzKvyi3k82voD73oK3Iahz3W5pP&X-Amz-Signature=ca1f283ede13881ea635a729a00fab92853b80d84ab337e534227f02ba1740ab&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOLYNQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejxsHIVpo8GSanORmKO1E00uPRcsaRAnJqZtOz0D9agIgSZi0OfZExp%2FfyO08uzR1IrSTRC846oYYl9z0H4mQ0ngqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpT7357pZWYfc%2Fd4ircAyQXwn7%2FQoFPls5M0e75ggNdrmg9CHJnelTYKB94%2FvDaimlpazlKmcNiT91ovgTj%2BDOlZcSrdlxt7f%2B7DMmviCKtOorcLsxuNONHDDd5%2BLmFwYYPealUQoQud7ZgIN0PwiSYGJK7NtY6dxjFALMTJMti6cO%2BCkAuqPrh9N%2FqeLMX7ACXRuG0iltZJwfo9Ddj55%2FLJpz09wU8387fMsGn3kGf8v4vqK6Pw6POjb8ASYLQelI%2FesQMPpvIsEsBiEdFm9O%2BUQPrOCRAEjocx4H2LX%2FXPjxrIdRJUzWqwnzWMT7hAaq%2BH%2FGlGonSTf6L5AVmGk7rm106mFsewSPXgYtZVeZ2igUFsfqav8sqqs%2Bg%2F5Va9YKdQ4nP%2Bqw2r38cN%2F1t6VKTNrMtv77OdX2ygDMRiTYYgZN0XALv1Iq8%2BcP5udf7EJO13PycLuWFLzo7%2FtpleN3WVgmIioy0OXoH9FXWE8qcXjyz0OILjk4tfZ7WSES1VMS5hKBw8%2F%2BjCD9fGJ%2FFrh2%2Fnc9cAWQjX6WRIHhQaoeQSw64bXxgi4OAQbsU9duRK1xiIUhkWRcAhH4%2BkuYZzU5M656fbZLDMLgcuTX03hIBA95iKloHmAYvPDXKe0%2B8jQMRxg%2FYB3fKvFGmMLeM6sEGOqUBaFkd3Dh5cu7BKWNTxqdcy2oBXp86Ji4Ld3HLEhq8HSKHYCVgm04oaMS2dy3iZzfm%2FA1xTi31dqdNGnDnlE7yLD6OJFaLXkgnCCZetHyJyzdaQvtNKqCmniZqMkDzrAX5CR5mqfMtJJVzlAMT3YNW9ONkKkAzA3udXsAzHI0fmr7KNqSCQmOmX2mWIgGKZsFrsIzKvyi3k82voD73oK3Iahz3W5pP&X-Amz-Signature=b7dcf065b5f3e5b3697393a5a93605bb96bd5b49d4f1cccfad87dddb08c9f82d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6MOLYNQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejxsHIVpo8GSanORmKO1E00uPRcsaRAnJqZtOz0D9agIgSZi0OfZExp%2FfyO08uzR1IrSTRC846oYYl9z0H4mQ0ngqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpT7357pZWYfc%2Fd4ircAyQXwn7%2FQoFPls5M0e75ggNdrmg9CHJnelTYKB94%2FvDaimlpazlKmcNiT91ovgTj%2BDOlZcSrdlxt7f%2B7DMmviCKtOorcLsxuNONHDDd5%2BLmFwYYPealUQoQud7ZgIN0PwiSYGJK7NtY6dxjFALMTJMti6cO%2BCkAuqPrh9N%2FqeLMX7ACXRuG0iltZJwfo9Ddj55%2FLJpz09wU8387fMsGn3kGf8v4vqK6Pw6POjb8ASYLQelI%2FesQMPpvIsEsBiEdFm9O%2BUQPrOCRAEjocx4H2LX%2FXPjxrIdRJUzWqwnzWMT7hAaq%2BH%2FGlGonSTf6L5AVmGk7rm106mFsewSPXgYtZVeZ2igUFsfqav8sqqs%2Bg%2F5Va9YKdQ4nP%2Bqw2r38cN%2F1t6VKTNrMtv77OdX2ygDMRiTYYgZN0XALv1Iq8%2BcP5udf7EJO13PycLuWFLzo7%2FtpleN3WVgmIioy0OXoH9FXWE8qcXjyz0OILjk4tfZ7WSES1VMS5hKBw8%2F%2BjCD9fGJ%2FFrh2%2Fnc9cAWQjX6WRIHhQaoeQSw64bXxgi4OAQbsU9duRK1xiIUhkWRcAhH4%2BkuYZzU5M656fbZLDMLgcuTX03hIBA95iKloHmAYvPDXKe0%2B8jQMRxg%2FYB3fKvFGmMLeM6sEGOqUBaFkd3Dh5cu7BKWNTxqdcy2oBXp86Ji4Ld3HLEhq8HSKHYCVgm04oaMS2dy3iZzfm%2FA1xTi31dqdNGnDnlE7yLD6OJFaLXkgnCCZetHyJyzdaQvtNKqCmniZqMkDzrAX5CR5mqfMtJJVzlAMT3YNW9ONkKkAzA3udXsAzHI0fmr7KNqSCQmOmX2mWIgGKZsFrsIzKvyi3k82voD73oK3Iahz3W5pP&X-Amz-Signature=ef241e7ef6576522db01f8c42d323236e771a4d77e4a0be714cf21bb9ed9d6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
