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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YBEF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHHRhshP1wvN%2FVCQhq6mPjd53whn%2Bh5IbdMm4YGfMOG1AiA9HdpgTcKL2yz26oxQVr9AcLsEZ17S9elzfHG9cM4EVCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfhU85uMdB2w7cbFKtwDAcgPkzOjG1cAtKogYr4Xo08h3sjejSf7hrnBsZnAzZb9roDlHGlyrfkN0UqE1QsjfrcHxEAYpoD7UsOIgljmZtKA9LRlbsaX8XFR4cMAs7BhRWKUCi0U9wEtcp2lfjrbB0AbAuXjlmOjA704k5PHgRo9wVYASmDodyEepM0z0p8PeaHDD2sEVatgM5bo%2BtimEiN0cUjazRXusiMBaJEHifqXDHNBzywo%2FbCTbvjqHfa42zgapuvv9q11EZijdcW47iJLRPnaRpOx%2FjNLzNXMjEZ%2BizNw5JEVTs68CK9pcF3Q1VvlOdrLyzyzsyLrKT7HNBm2hDZem4YQMrbw1XaS7WxtX%2Fze%2BTRX%2FsM%2F73Mx1zBHdAb03KuNRtQl%2Br%2BFtKZzhbuL%2BlkUxX4zoosiUmDlV86BqzqQXIk27%2Bpzjk6LbuaQuAInNG2v8aaOgsmb79PUi3UJuF%2FFUPBoSBsoGat1ceDwYdqDbLyaJOi2TA1RfkmEnVa%2FpyBIpYOvQeHuCOGlR%2F1iCP1COYq4a2uezHsZa2bsIwBCOZW8yrIqPgaCv7s1jfNJrE8JlbqZaf9ysCHcAborwDRc117utj2bqPItOLn6CsF%2BwPV7NNvNcUMElq53xE04abrYLzhE8Q4w08KMwQY6pgFD3%2BwXhtKZguaalEPGx8Y2%2BhgscDzs0iUGbS4FSkflEYc8RmGYH5vsKA93SbjkQhv9RmT2pITj4YK%2BNUwA%2FkmIDg5XowUin%2FrZE6I%2FFx28b1vGeLj3fry7bHumoKOiinK6nmms1N5H7mrLrm1PpQYqcTvwk2RVcpL86Y0S2eCEnY8C4FksmV8Op6Yn0FHuMhRJk46%2F%2BuHNdII6c2eAly3mJbduF5%2Bh&X-Amz-Signature=a83c859de06ac3142bd8a13fd20cdba006a0cbc5fde857e64389c98b128aa85c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YBEF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHHRhshP1wvN%2FVCQhq6mPjd53whn%2Bh5IbdMm4YGfMOG1AiA9HdpgTcKL2yz26oxQVr9AcLsEZ17S9elzfHG9cM4EVCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfhU85uMdB2w7cbFKtwDAcgPkzOjG1cAtKogYr4Xo08h3sjejSf7hrnBsZnAzZb9roDlHGlyrfkN0UqE1QsjfrcHxEAYpoD7UsOIgljmZtKA9LRlbsaX8XFR4cMAs7BhRWKUCi0U9wEtcp2lfjrbB0AbAuXjlmOjA704k5PHgRo9wVYASmDodyEepM0z0p8PeaHDD2sEVatgM5bo%2BtimEiN0cUjazRXusiMBaJEHifqXDHNBzywo%2FbCTbvjqHfa42zgapuvv9q11EZijdcW47iJLRPnaRpOx%2FjNLzNXMjEZ%2BizNw5JEVTs68CK9pcF3Q1VvlOdrLyzyzsyLrKT7HNBm2hDZem4YQMrbw1XaS7WxtX%2Fze%2BTRX%2FsM%2F73Mx1zBHdAb03KuNRtQl%2Br%2BFtKZzhbuL%2BlkUxX4zoosiUmDlV86BqzqQXIk27%2Bpzjk6LbuaQuAInNG2v8aaOgsmb79PUi3UJuF%2FFUPBoSBsoGat1ceDwYdqDbLyaJOi2TA1RfkmEnVa%2FpyBIpYOvQeHuCOGlR%2F1iCP1COYq4a2uezHsZa2bsIwBCOZW8yrIqPgaCv7s1jfNJrE8JlbqZaf9ysCHcAborwDRc117utj2bqPItOLn6CsF%2BwPV7NNvNcUMElq53xE04abrYLzhE8Q4w08KMwQY6pgFD3%2BwXhtKZguaalEPGx8Y2%2BhgscDzs0iUGbS4FSkflEYc8RmGYH5vsKA93SbjkQhv9RmT2pITj4YK%2BNUwA%2FkmIDg5XowUin%2FrZE6I%2FFx28b1vGeLj3fry7bHumoKOiinK6nmms1N5H7mrLrm1PpQYqcTvwk2RVcpL86Y0S2eCEnY8C4FksmV8Op6Yn0FHuMhRJk46%2F%2BuHNdII6c2eAly3mJbduF5%2Bh&X-Amz-Signature=4e4d57ca51cf2f3fc7715e1506823dbef7c9de9ccd3834d3ded7aae9bebd12d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YBEF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHHRhshP1wvN%2FVCQhq6mPjd53whn%2Bh5IbdMm4YGfMOG1AiA9HdpgTcKL2yz26oxQVr9AcLsEZ17S9elzfHG9cM4EVCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfhU85uMdB2w7cbFKtwDAcgPkzOjG1cAtKogYr4Xo08h3sjejSf7hrnBsZnAzZb9roDlHGlyrfkN0UqE1QsjfrcHxEAYpoD7UsOIgljmZtKA9LRlbsaX8XFR4cMAs7BhRWKUCi0U9wEtcp2lfjrbB0AbAuXjlmOjA704k5PHgRo9wVYASmDodyEepM0z0p8PeaHDD2sEVatgM5bo%2BtimEiN0cUjazRXusiMBaJEHifqXDHNBzywo%2FbCTbvjqHfa42zgapuvv9q11EZijdcW47iJLRPnaRpOx%2FjNLzNXMjEZ%2BizNw5JEVTs68CK9pcF3Q1VvlOdrLyzyzsyLrKT7HNBm2hDZem4YQMrbw1XaS7WxtX%2Fze%2BTRX%2FsM%2F73Mx1zBHdAb03KuNRtQl%2Br%2BFtKZzhbuL%2BlkUxX4zoosiUmDlV86BqzqQXIk27%2Bpzjk6LbuaQuAInNG2v8aaOgsmb79PUi3UJuF%2FFUPBoSBsoGat1ceDwYdqDbLyaJOi2TA1RfkmEnVa%2FpyBIpYOvQeHuCOGlR%2F1iCP1COYq4a2uezHsZa2bsIwBCOZW8yrIqPgaCv7s1jfNJrE8JlbqZaf9ysCHcAborwDRc117utj2bqPItOLn6CsF%2BwPV7NNvNcUMElq53xE04abrYLzhE8Q4w08KMwQY6pgFD3%2BwXhtKZguaalEPGx8Y2%2BhgscDzs0iUGbS4FSkflEYc8RmGYH5vsKA93SbjkQhv9RmT2pITj4YK%2BNUwA%2FkmIDg5XowUin%2FrZE6I%2FFx28b1vGeLj3fry7bHumoKOiinK6nmms1N5H7mrLrm1PpQYqcTvwk2RVcpL86Y0S2eCEnY8C4FksmV8Op6Yn0FHuMhRJk46%2F%2BuHNdII6c2eAly3mJbduF5%2Bh&X-Amz-Signature=b716a1be539cb3dfc1684d4b2e36e037d0bebfca8d9bbed0b6124aff4d0ce655&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YBEF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHHRhshP1wvN%2FVCQhq6mPjd53whn%2Bh5IbdMm4YGfMOG1AiA9HdpgTcKL2yz26oxQVr9AcLsEZ17S9elzfHG9cM4EVCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfhU85uMdB2w7cbFKtwDAcgPkzOjG1cAtKogYr4Xo08h3sjejSf7hrnBsZnAzZb9roDlHGlyrfkN0UqE1QsjfrcHxEAYpoD7UsOIgljmZtKA9LRlbsaX8XFR4cMAs7BhRWKUCi0U9wEtcp2lfjrbB0AbAuXjlmOjA704k5PHgRo9wVYASmDodyEepM0z0p8PeaHDD2sEVatgM5bo%2BtimEiN0cUjazRXusiMBaJEHifqXDHNBzywo%2FbCTbvjqHfa42zgapuvv9q11EZijdcW47iJLRPnaRpOx%2FjNLzNXMjEZ%2BizNw5JEVTs68CK9pcF3Q1VvlOdrLyzyzsyLrKT7HNBm2hDZem4YQMrbw1XaS7WxtX%2Fze%2BTRX%2FsM%2F73Mx1zBHdAb03KuNRtQl%2Br%2BFtKZzhbuL%2BlkUxX4zoosiUmDlV86BqzqQXIk27%2Bpzjk6LbuaQuAInNG2v8aaOgsmb79PUi3UJuF%2FFUPBoSBsoGat1ceDwYdqDbLyaJOi2TA1RfkmEnVa%2FpyBIpYOvQeHuCOGlR%2F1iCP1COYq4a2uezHsZa2bsIwBCOZW8yrIqPgaCv7s1jfNJrE8JlbqZaf9ysCHcAborwDRc117utj2bqPItOLn6CsF%2BwPV7NNvNcUMElq53xE04abrYLzhE8Q4w08KMwQY6pgFD3%2BwXhtKZguaalEPGx8Y2%2BhgscDzs0iUGbS4FSkflEYc8RmGYH5vsKA93SbjkQhv9RmT2pITj4YK%2BNUwA%2FkmIDg5XowUin%2FrZE6I%2FFx28b1vGeLj3fry7bHumoKOiinK6nmms1N5H7mrLrm1PpQYqcTvwk2RVcpL86Y0S2eCEnY8C4FksmV8Op6Yn0FHuMhRJk46%2F%2BuHNdII6c2eAly3mJbduF5%2Bh&X-Amz-Signature=f7c6f6ecf0bb99c86312c803529c3ca7eb2e329cf2cb80924e2f7c2967a382d9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YBEF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHHRhshP1wvN%2FVCQhq6mPjd53whn%2Bh5IbdMm4YGfMOG1AiA9HdpgTcKL2yz26oxQVr9AcLsEZ17S9elzfHG9cM4EVCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfhU85uMdB2w7cbFKtwDAcgPkzOjG1cAtKogYr4Xo08h3sjejSf7hrnBsZnAzZb9roDlHGlyrfkN0UqE1QsjfrcHxEAYpoD7UsOIgljmZtKA9LRlbsaX8XFR4cMAs7BhRWKUCi0U9wEtcp2lfjrbB0AbAuXjlmOjA704k5PHgRo9wVYASmDodyEepM0z0p8PeaHDD2sEVatgM5bo%2BtimEiN0cUjazRXusiMBaJEHifqXDHNBzywo%2FbCTbvjqHfa42zgapuvv9q11EZijdcW47iJLRPnaRpOx%2FjNLzNXMjEZ%2BizNw5JEVTs68CK9pcF3Q1VvlOdrLyzyzsyLrKT7HNBm2hDZem4YQMrbw1XaS7WxtX%2Fze%2BTRX%2FsM%2F73Mx1zBHdAb03KuNRtQl%2Br%2BFtKZzhbuL%2BlkUxX4zoosiUmDlV86BqzqQXIk27%2Bpzjk6LbuaQuAInNG2v8aaOgsmb79PUi3UJuF%2FFUPBoSBsoGat1ceDwYdqDbLyaJOi2TA1RfkmEnVa%2FpyBIpYOvQeHuCOGlR%2F1iCP1COYq4a2uezHsZa2bsIwBCOZW8yrIqPgaCv7s1jfNJrE8JlbqZaf9ysCHcAborwDRc117utj2bqPItOLn6CsF%2BwPV7NNvNcUMElq53xE04abrYLzhE8Q4w08KMwQY6pgFD3%2BwXhtKZguaalEPGx8Y2%2BhgscDzs0iUGbS4FSkflEYc8RmGYH5vsKA93SbjkQhv9RmT2pITj4YK%2BNUwA%2FkmIDg5XowUin%2FrZE6I%2FFx28b1vGeLj3fry7bHumoKOiinK6nmms1N5H7mrLrm1PpQYqcTvwk2RVcpL86Y0S2eCEnY8C4FksmV8Op6Yn0FHuMhRJk46%2F%2BuHNdII6c2eAly3mJbduF5%2Bh&X-Amz-Signature=3ade986deefdc0720f4850641a2503984cb0647334e94bbc54f87206296ec1e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YBEF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHHRhshP1wvN%2FVCQhq6mPjd53whn%2Bh5IbdMm4YGfMOG1AiA9HdpgTcKL2yz26oxQVr9AcLsEZ17S9elzfHG9cM4EVCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfhU85uMdB2w7cbFKtwDAcgPkzOjG1cAtKogYr4Xo08h3sjejSf7hrnBsZnAzZb9roDlHGlyrfkN0UqE1QsjfrcHxEAYpoD7UsOIgljmZtKA9LRlbsaX8XFR4cMAs7BhRWKUCi0U9wEtcp2lfjrbB0AbAuXjlmOjA704k5PHgRo9wVYASmDodyEepM0z0p8PeaHDD2sEVatgM5bo%2BtimEiN0cUjazRXusiMBaJEHifqXDHNBzywo%2FbCTbvjqHfa42zgapuvv9q11EZijdcW47iJLRPnaRpOx%2FjNLzNXMjEZ%2BizNw5JEVTs68CK9pcF3Q1VvlOdrLyzyzsyLrKT7HNBm2hDZem4YQMrbw1XaS7WxtX%2Fze%2BTRX%2FsM%2F73Mx1zBHdAb03KuNRtQl%2Br%2BFtKZzhbuL%2BlkUxX4zoosiUmDlV86BqzqQXIk27%2Bpzjk6LbuaQuAInNG2v8aaOgsmb79PUi3UJuF%2FFUPBoSBsoGat1ceDwYdqDbLyaJOi2TA1RfkmEnVa%2FpyBIpYOvQeHuCOGlR%2F1iCP1COYq4a2uezHsZa2bsIwBCOZW8yrIqPgaCv7s1jfNJrE8JlbqZaf9ysCHcAborwDRc117utj2bqPItOLn6CsF%2BwPV7NNvNcUMElq53xE04abrYLzhE8Q4w08KMwQY6pgFD3%2BwXhtKZguaalEPGx8Y2%2BhgscDzs0iUGbS4FSkflEYc8RmGYH5vsKA93SbjkQhv9RmT2pITj4YK%2BNUwA%2FkmIDg5XowUin%2FrZE6I%2FFx28b1vGeLj3fry7bHumoKOiinK6nmms1N5H7mrLrm1PpQYqcTvwk2RVcpL86Y0S2eCEnY8C4FksmV8Op6Yn0FHuMhRJk46%2F%2BuHNdII6c2eAly3mJbduF5%2Bh&X-Amz-Signature=f993fea0e590cfca235f36a4f5c2c82dd021fbeb10948f7ff44f5ba2f096e5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YBEF7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHHRhshP1wvN%2FVCQhq6mPjd53whn%2Bh5IbdMm4YGfMOG1AiA9HdpgTcKL2yz26oxQVr9AcLsEZ17S9elzfHG9cM4EVCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfhU85uMdB2w7cbFKtwDAcgPkzOjG1cAtKogYr4Xo08h3sjejSf7hrnBsZnAzZb9roDlHGlyrfkN0UqE1QsjfrcHxEAYpoD7UsOIgljmZtKA9LRlbsaX8XFR4cMAs7BhRWKUCi0U9wEtcp2lfjrbB0AbAuXjlmOjA704k5PHgRo9wVYASmDodyEepM0z0p8PeaHDD2sEVatgM5bo%2BtimEiN0cUjazRXusiMBaJEHifqXDHNBzywo%2FbCTbvjqHfa42zgapuvv9q11EZijdcW47iJLRPnaRpOx%2FjNLzNXMjEZ%2BizNw5JEVTs68CK9pcF3Q1VvlOdrLyzyzsyLrKT7HNBm2hDZem4YQMrbw1XaS7WxtX%2Fze%2BTRX%2FsM%2F73Mx1zBHdAb03KuNRtQl%2Br%2BFtKZzhbuL%2BlkUxX4zoosiUmDlV86BqzqQXIk27%2Bpzjk6LbuaQuAInNG2v8aaOgsmb79PUi3UJuF%2FFUPBoSBsoGat1ceDwYdqDbLyaJOi2TA1RfkmEnVa%2FpyBIpYOvQeHuCOGlR%2F1iCP1COYq4a2uezHsZa2bsIwBCOZW8yrIqPgaCv7s1jfNJrE8JlbqZaf9ysCHcAborwDRc117utj2bqPItOLn6CsF%2BwPV7NNvNcUMElq53xE04abrYLzhE8Q4w08KMwQY6pgFD3%2BwXhtKZguaalEPGx8Y2%2BhgscDzs0iUGbS4FSkflEYc8RmGYH5vsKA93SbjkQhv9RmT2pITj4YK%2BNUwA%2FkmIDg5XowUin%2FrZE6I%2FFx28b1vGeLj3fry7bHumoKOiinK6nmms1N5H7mrLrm1PpQYqcTvwk2RVcpL86Y0S2eCEnY8C4FksmV8Op6Yn0FHuMhRJk46%2F%2BuHNdII6c2eAly3mJbduF5%2Bh&X-Amz-Signature=f17e8235e9f4da8b5a001e102b0ba332b3ae9985efd4ba41847cf596119ff1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
