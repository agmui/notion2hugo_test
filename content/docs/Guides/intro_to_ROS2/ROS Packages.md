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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSQTMKL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDhIk6KDYQyZdICXJETFmQu%2FYUFdZDaQaxgaqwsH4kuwAiBxNw97G774HTMOlx%2FKumAalzxaw4lFbtlgDn5D2E%2Bj3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZRampD6frsRus9WKtwDItP0uyzsMPhqLLGjn2e%2Fuqe64%2FaQ%2BsRFl7yY%2BxWdR38YXYkgS23fHuPc2jGu%2BnkAVNYctZG%2Bctwo9YwUMx9AKAoKtgPabfvAWDe5h7PdfHBX0hPDjEr9RgM1XWiE7VKEijNP%2BBk%2Bz91lwxA2sA8QgIQWdWXJvKEFtnyvyGnaMjeeLDnaFpjiHv7JoIdr0detDCio7QM5UYPY3e4vm7mq2yD3Ii0EkSGjOoCgR8WRGiFJRym2KWYS8bw1iCZ%2FHiMGISoJ5lu4cLcXLlVKht2xgyzet7iakvsQ7mK2Tz8tf2323dZpzy8jqaDHr3R5yh4tv%2FK9WrMmiwwJ0zeYIKtGOH%2Fh%2FI0PGlPWnw1QW121sw4vk7ct0oEbJz9ProbXq0dk4OIyrZ5RWlO1B4wlTGV%2FzLnD8obcYPwGj06de3I%2FYP966lRHMHfguN353UZu4A%2FoJziGAzyO3ggeHEqJgYWFdphkWWRC6pT8UCGYnz4F0R1GTTyBqzJ9l%2BXIUM1Fcvdi%2BYa8QElmMocYjc4r0aPLaI2mstjufAVoCmw1GAsF46goMSyHjynNo3aw9Xynv4HWpsctsMy5xorUsRclagZjyvg3oxeRSdLRyB8sV0MZb33odI%2F1nvY3GSjwzr8wheLIwAY6pgF0zzpAt9gFtRWppjIa6z8ZqvB2SMg2t5t%2F1eVeRBGL7a7IIuhtiwm2JkoiTPkFCZ%2BgEylRKSFaeMbh5hLDBM5cbCRqE83ZNhCi0SeUOFeUDqrytFaRq90CWQ2tr0ExKt8MacCjgZCVbmgFsGF15WIjp61BGPdt%2BEBkuDolx8lpS1dm3FUmQAmuAad1jsIZnSBKyWDToRyrQBdHckGrVTZ0pWgAy1Wg&X-Amz-Signature=5821b15b693cb1a686b2a4c7bab30c98327637c434e9142f0001e9798de8e5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSQTMKL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDhIk6KDYQyZdICXJETFmQu%2FYUFdZDaQaxgaqwsH4kuwAiBxNw97G774HTMOlx%2FKumAalzxaw4lFbtlgDn5D2E%2Bj3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZRampD6frsRus9WKtwDItP0uyzsMPhqLLGjn2e%2Fuqe64%2FaQ%2BsRFl7yY%2BxWdR38YXYkgS23fHuPc2jGu%2BnkAVNYctZG%2Bctwo9YwUMx9AKAoKtgPabfvAWDe5h7PdfHBX0hPDjEr9RgM1XWiE7VKEijNP%2BBk%2Bz91lwxA2sA8QgIQWdWXJvKEFtnyvyGnaMjeeLDnaFpjiHv7JoIdr0detDCio7QM5UYPY3e4vm7mq2yD3Ii0EkSGjOoCgR8WRGiFJRym2KWYS8bw1iCZ%2FHiMGISoJ5lu4cLcXLlVKht2xgyzet7iakvsQ7mK2Tz8tf2323dZpzy8jqaDHr3R5yh4tv%2FK9WrMmiwwJ0zeYIKtGOH%2Fh%2FI0PGlPWnw1QW121sw4vk7ct0oEbJz9ProbXq0dk4OIyrZ5RWlO1B4wlTGV%2FzLnD8obcYPwGj06de3I%2FYP966lRHMHfguN353UZu4A%2FoJziGAzyO3ggeHEqJgYWFdphkWWRC6pT8UCGYnz4F0R1GTTyBqzJ9l%2BXIUM1Fcvdi%2BYa8QElmMocYjc4r0aPLaI2mstjufAVoCmw1GAsF46goMSyHjynNo3aw9Xynv4HWpsctsMy5xorUsRclagZjyvg3oxeRSdLRyB8sV0MZb33odI%2F1nvY3GSjwzr8wheLIwAY6pgF0zzpAt9gFtRWppjIa6z8ZqvB2SMg2t5t%2F1eVeRBGL7a7IIuhtiwm2JkoiTPkFCZ%2BgEylRKSFaeMbh5hLDBM5cbCRqE83ZNhCi0SeUOFeUDqrytFaRq90CWQ2tr0ExKt8MacCjgZCVbmgFsGF15WIjp61BGPdt%2BEBkuDolx8lpS1dm3FUmQAmuAad1jsIZnSBKyWDToRyrQBdHckGrVTZ0pWgAy1Wg&X-Amz-Signature=547939e0322462fd740748f63604019a35e4f686ef51e1aa3395501da378e3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSQTMKL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDhIk6KDYQyZdICXJETFmQu%2FYUFdZDaQaxgaqwsH4kuwAiBxNw97G774HTMOlx%2FKumAalzxaw4lFbtlgDn5D2E%2Bj3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZRampD6frsRus9WKtwDItP0uyzsMPhqLLGjn2e%2Fuqe64%2FaQ%2BsRFl7yY%2BxWdR38YXYkgS23fHuPc2jGu%2BnkAVNYctZG%2Bctwo9YwUMx9AKAoKtgPabfvAWDe5h7PdfHBX0hPDjEr9RgM1XWiE7VKEijNP%2BBk%2Bz91lwxA2sA8QgIQWdWXJvKEFtnyvyGnaMjeeLDnaFpjiHv7JoIdr0detDCio7QM5UYPY3e4vm7mq2yD3Ii0EkSGjOoCgR8WRGiFJRym2KWYS8bw1iCZ%2FHiMGISoJ5lu4cLcXLlVKht2xgyzet7iakvsQ7mK2Tz8tf2323dZpzy8jqaDHr3R5yh4tv%2FK9WrMmiwwJ0zeYIKtGOH%2Fh%2FI0PGlPWnw1QW121sw4vk7ct0oEbJz9ProbXq0dk4OIyrZ5RWlO1B4wlTGV%2FzLnD8obcYPwGj06de3I%2FYP966lRHMHfguN353UZu4A%2FoJziGAzyO3ggeHEqJgYWFdphkWWRC6pT8UCGYnz4F0R1GTTyBqzJ9l%2BXIUM1Fcvdi%2BYa8QElmMocYjc4r0aPLaI2mstjufAVoCmw1GAsF46goMSyHjynNo3aw9Xynv4HWpsctsMy5xorUsRclagZjyvg3oxeRSdLRyB8sV0MZb33odI%2F1nvY3GSjwzr8wheLIwAY6pgF0zzpAt9gFtRWppjIa6z8ZqvB2SMg2t5t%2F1eVeRBGL7a7IIuhtiwm2JkoiTPkFCZ%2BgEylRKSFaeMbh5hLDBM5cbCRqE83ZNhCi0SeUOFeUDqrytFaRq90CWQ2tr0ExKt8MacCjgZCVbmgFsGF15WIjp61BGPdt%2BEBkuDolx8lpS1dm3FUmQAmuAad1jsIZnSBKyWDToRyrQBdHckGrVTZ0pWgAy1Wg&X-Amz-Signature=dae66c640059fc50e5efef2657d4b97345d967f4aa88c25eab0e090dc1696774&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSQTMKL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDhIk6KDYQyZdICXJETFmQu%2FYUFdZDaQaxgaqwsH4kuwAiBxNw97G774HTMOlx%2FKumAalzxaw4lFbtlgDn5D2E%2Bj3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZRampD6frsRus9WKtwDItP0uyzsMPhqLLGjn2e%2Fuqe64%2FaQ%2BsRFl7yY%2BxWdR38YXYkgS23fHuPc2jGu%2BnkAVNYctZG%2Bctwo9YwUMx9AKAoKtgPabfvAWDe5h7PdfHBX0hPDjEr9RgM1XWiE7VKEijNP%2BBk%2Bz91lwxA2sA8QgIQWdWXJvKEFtnyvyGnaMjeeLDnaFpjiHv7JoIdr0detDCio7QM5UYPY3e4vm7mq2yD3Ii0EkSGjOoCgR8WRGiFJRym2KWYS8bw1iCZ%2FHiMGISoJ5lu4cLcXLlVKht2xgyzet7iakvsQ7mK2Tz8tf2323dZpzy8jqaDHr3R5yh4tv%2FK9WrMmiwwJ0zeYIKtGOH%2Fh%2FI0PGlPWnw1QW121sw4vk7ct0oEbJz9ProbXq0dk4OIyrZ5RWlO1B4wlTGV%2FzLnD8obcYPwGj06de3I%2FYP966lRHMHfguN353UZu4A%2FoJziGAzyO3ggeHEqJgYWFdphkWWRC6pT8UCGYnz4F0R1GTTyBqzJ9l%2BXIUM1Fcvdi%2BYa8QElmMocYjc4r0aPLaI2mstjufAVoCmw1GAsF46goMSyHjynNo3aw9Xynv4HWpsctsMy5xorUsRclagZjyvg3oxeRSdLRyB8sV0MZb33odI%2F1nvY3GSjwzr8wheLIwAY6pgF0zzpAt9gFtRWppjIa6z8ZqvB2SMg2t5t%2F1eVeRBGL7a7IIuhtiwm2JkoiTPkFCZ%2BgEylRKSFaeMbh5hLDBM5cbCRqE83ZNhCi0SeUOFeUDqrytFaRq90CWQ2tr0ExKt8MacCjgZCVbmgFsGF15WIjp61BGPdt%2BEBkuDolx8lpS1dm3FUmQAmuAad1jsIZnSBKyWDToRyrQBdHckGrVTZ0pWgAy1Wg&X-Amz-Signature=121b0d5b80d589403f8641615743c960afe2e04ee317fe1cd8bcc425efcd6e35&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSQTMKL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDhIk6KDYQyZdICXJETFmQu%2FYUFdZDaQaxgaqwsH4kuwAiBxNw97G774HTMOlx%2FKumAalzxaw4lFbtlgDn5D2E%2Bj3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZRampD6frsRus9WKtwDItP0uyzsMPhqLLGjn2e%2Fuqe64%2FaQ%2BsRFl7yY%2BxWdR38YXYkgS23fHuPc2jGu%2BnkAVNYctZG%2Bctwo9YwUMx9AKAoKtgPabfvAWDe5h7PdfHBX0hPDjEr9RgM1XWiE7VKEijNP%2BBk%2Bz91lwxA2sA8QgIQWdWXJvKEFtnyvyGnaMjeeLDnaFpjiHv7JoIdr0detDCio7QM5UYPY3e4vm7mq2yD3Ii0EkSGjOoCgR8WRGiFJRym2KWYS8bw1iCZ%2FHiMGISoJ5lu4cLcXLlVKht2xgyzet7iakvsQ7mK2Tz8tf2323dZpzy8jqaDHr3R5yh4tv%2FK9WrMmiwwJ0zeYIKtGOH%2Fh%2FI0PGlPWnw1QW121sw4vk7ct0oEbJz9ProbXq0dk4OIyrZ5RWlO1B4wlTGV%2FzLnD8obcYPwGj06de3I%2FYP966lRHMHfguN353UZu4A%2FoJziGAzyO3ggeHEqJgYWFdphkWWRC6pT8UCGYnz4F0R1GTTyBqzJ9l%2BXIUM1Fcvdi%2BYa8QElmMocYjc4r0aPLaI2mstjufAVoCmw1GAsF46goMSyHjynNo3aw9Xynv4HWpsctsMy5xorUsRclagZjyvg3oxeRSdLRyB8sV0MZb33odI%2F1nvY3GSjwzr8wheLIwAY6pgF0zzpAt9gFtRWppjIa6z8ZqvB2SMg2t5t%2F1eVeRBGL7a7IIuhtiwm2JkoiTPkFCZ%2BgEylRKSFaeMbh5hLDBM5cbCRqE83ZNhCi0SeUOFeUDqrytFaRq90CWQ2tr0ExKt8MacCjgZCVbmgFsGF15WIjp61BGPdt%2BEBkuDolx8lpS1dm3FUmQAmuAad1jsIZnSBKyWDToRyrQBdHckGrVTZ0pWgAy1Wg&X-Amz-Signature=64bb42f2493b5fed5fab43f258f692627f6074691347570b747b786d82e49269&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSQTMKL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDhIk6KDYQyZdICXJETFmQu%2FYUFdZDaQaxgaqwsH4kuwAiBxNw97G774HTMOlx%2FKumAalzxaw4lFbtlgDn5D2E%2Bj3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZRampD6frsRus9WKtwDItP0uyzsMPhqLLGjn2e%2Fuqe64%2FaQ%2BsRFl7yY%2BxWdR38YXYkgS23fHuPc2jGu%2BnkAVNYctZG%2Bctwo9YwUMx9AKAoKtgPabfvAWDe5h7PdfHBX0hPDjEr9RgM1XWiE7VKEijNP%2BBk%2Bz91lwxA2sA8QgIQWdWXJvKEFtnyvyGnaMjeeLDnaFpjiHv7JoIdr0detDCio7QM5UYPY3e4vm7mq2yD3Ii0EkSGjOoCgR8WRGiFJRym2KWYS8bw1iCZ%2FHiMGISoJ5lu4cLcXLlVKht2xgyzet7iakvsQ7mK2Tz8tf2323dZpzy8jqaDHr3R5yh4tv%2FK9WrMmiwwJ0zeYIKtGOH%2Fh%2FI0PGlPWnw1QW121sw4vk7ct0oEbJz9ProbXq0dk4OIyrZ5RWlO1B4wlTGV%2FzLnD8obcYPwGj06de3I%2FYP966lRHMHfguN353UZu4A%2FoJziGAzyO3ggeHEqJgYWFdphkWWRC6pT8UCGYnz4F0R1GTTyBqzJ9l%2BXIUM1Fcvdi%2BYa8QElmMocYjc4r0aPLaI2mstjufAVoCmw1GAsF46goMSyHjynNo3aw9Xynv4HWpsctsMy5xorUsRclagZjyvg3oxeRSdLRyB8sV0MZb33odI%2F1nvY3GSjwzr8wheLIwAY6pgF0zzpAt9gFtRWppjIa6z8ZqvB2SMg2t5t%2F1eVeRBGL7a7IIuhtiwm2JkoiTPkFCZ%2BgEylRKSFaeMbh5hLDBM5cbCRqE83ZNhCi0SeUOFeUDqrytFaRq90CWQ2tr0ExKt8MacCjgZCVbmgFsGF15WIjp61BGPdt%2BEBkuDolx8lpS1dm3FUmQAmuAad1jsIZnSBKyWDToRyrQBdHckGrVTZ0pWgAy1Wg&X-Amz-Signature=e0a0887a613d8eab95a4191c5f73fa9712219f02fe6b22806cfb9a10209407b7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSQTMKL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDhIk6KDYQyZdICXJETFmQu%2FYUFdZDaQaxgaqwsH4kuwAiBxNw97G774HTMOlx%2FKumAalzxaw4lFbtlgDn5D2E%2Bj3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZRampD6frsRus9WKtwDItP0uyzsMPhqLLGjn2e%2Fuqe64%2FaQ%2BsRFl7yY%2BxWdR38YXYkgS23fHuPc2jGu%2BnkAVNYctZG%2Bctwo9YwUMx9AKAoKtgPabfvAWDe5h7PdfHBX0hPDjEr9RgM1XWiE7VKEijNP%2BBk%2Bz91lwxA2sA8QgIQWdWXJvKEFtnyvyGnaMjeeLDnaFpjiHv7JoIdr0detDCio7QM5UYPY3e4vm7mq2yD3Ii0EkSGjOoCgR8WRGiFJRym2KWYS8bw1iCZ%2FHiMGISoJ5lu4cLcXLlVKht2xgyzet7iakvsQ7mK2Tz8tf2323dZpzy8jqaDHr3R5yh4tv%2FK9WrMmiwwJ0zeYIKtGOH%2Fh%2FI0PGlPWnw1QW121sw4vk7ct0oEbJz9ProbXq0dk4OIyrZ5RWlO1B4wlTGV%2FzLnD8obcYPwGj06de3I%2FYP966lRHMHfguN353UZu4A%2FoJziGAzyO3ggeHEqJgYWFdphkWWRC6pT8UCGYnz4F0R1GTTyBqzJ9l%2BXIUM1Fcvdi%2BYa8QElmMocYjc4r0aPLaI2mstjufAVoCmw1GAsF46goMSyHjynNo3aw9Xynv4HWpsctsMy5xorUsRclagZjyvg3oxeRSdLRyB8sV0MZb33odI%2F1nvY3GSjwzr8wheLIwAY6pgF0zzpAt9gFtRWppjIa6z8ZqvB2SMg2t5t%2F1eVeRBGL7a7IIuhtiwm2JkoiTPkFCZ%2BgEylRKSFaeMbh5hLDBM5cbCRqE83ZNhCi0SeUOFeUDqrytFaRq90CWQ2tr0ExKt8MacCjgZCVbmgFsGF15WIjp61BGPdt%2BEBkuDolx8lpS1dm3FUmQAmuAad1jsIZnSBKyWDToRyrQBdHckGrVTZ0pWgAy1Wg&X-Amz-Signature=20eb525a1cbf88c6dc98017f0bb5d2a1012c96ac5f726a829487e7394b4744a9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
