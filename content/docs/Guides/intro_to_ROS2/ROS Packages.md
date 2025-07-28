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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZPJASI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLVZ5ix4c18zqPqp4j8Y7C%2FxQPTjZAk2Vlas8QQm5a3AiEAi371ReEHrquahG8R%2BEELMs%2BQYKJzYj%2FPPYqJAv0XyisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxu5Cce0Jb%2BMbiEWircA%2FW1Iu6sopxhyLTCXJdOjBDG1P4ccTG5ojDuLGBG7H304itxDAZWhu0gH1iJNjBTWHe3w4mnGttc%2BaTmYDLKeTrFdAuzN0dfkeH0XNaRc7aQlYcdlfKTLYG95dcK3mNoOfJvE3Y1SZklXDJp0E4krfVztZ%2BUFVQfMrtPEaUpMwd%2Bb3wBfyWW6XPXKJmJMOPKRt%2BVmsweJL%2FmQhQMQN6JbLHI8%2BPdq0ROmfpgwVPkPp%2BTFXFEfurAgQbvnrB7RvHTcdfrgI6stFCtY7KUFkrVZbR5pXG2qUeKD6X7vC4Zz%2F0PGFEuJ1LIDDEX1LGwl1aFouYE9CHtk70lKCQgFssVYQ%2FQx5jFFEl3GCfahxCnMLg4Qm%2FLL%2B9Gp9WeaLp6XI0%2FDEpeG83nqxBkhAKqQP%2FW5ge97e4VCYtXeObubwuRR0f86uYrMXTobIJzpUcdkm2u1NcjF9o2vo1fOPNoqlVwU0ByEQgDHw0qtow34bKcFIJSi5Mcn5N9ar7i6RBK4%2FQsAvB3rBVln1YHm81p8CUfgrOrcPIZNboSNSWtLpgOQ3n9iJz7q840Mnk9Z2tUZdrNFv9T85MhF3qt39OyaND6tZ%2Fj9NyT64RwsfHY%2BEiMECrtNVvXVHTnEm8Mu0KvMLm5n8QGOqUBLwc%2BYBIo61ObOLUwxwp1qpJodnFUwy8b4B6Kh4puac608iSSM%2B2oY5ZsKX6Wr0VpUzxJo82Lfvwt8y%2BUq2p3oq68Dc52CF7xCpFTlWfWWCw8yCIYX1T4eT8cZJ7e62TqbLbEyC%2F4txblB0pCOqWUa5eqOahvUdZrSxyA5k4aB8x5g21ep3H33UlAZAeiC7k0Q%2FwDxlgWnBWlHWSAKsshBwfCr1oK&X-Amz-Signature=2e1a427b39f829c95025affc3e0e792b3c6a54e83ad95a7e0e53b11378f817ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZPJASI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLVZ5ix4c18zqPqp4j8Y7C%2FxQPTjZAk2Vlas8QQm5a3AiEAi371ReEHrquahG8R%2BEELMs%2BQYKJzYj%2FPPYqJAv0XyisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxu5Cce0Jb%2BMbiEWircA%2FW1Iu6sopxhyLTCXJdOjBDG1P4ccTG5ojDuLGBG7H304itxDAZWhu0gH1iJNjBTWHe3w4mnGttc%2BaTmYDLKeTrFdAuzN0dfkeH0XNaRc7aQlYcdlfKTLYG95dcK3mNoOfJvE3Y1SZklXDJp0E4krfVztZ%2BUFVQfMrtPEaUpMwd%2Bb3wBfyWW6XPXKJmJMOPKRt%2BVmsweJL%2FmQhQMQN6JbLHI8%2BPdq0ROmfpgwVPkPp%2BTFXFEfurAgQbvnrB7RvHTcdfrgI6stFCtY7KUFkrVZbR5pXG2qUeKD6X7vC4Zz%2F0PGFEuJ1LIDDEX1LGwl1aFouYE9CHtk70lKCQgFssVYQ%2FQx5jFFEl3GCfahxCnMLg4Qm%2FLL%2B9Gp9WeaLp6XI0%2FDEpeG83nqxBkhAKqQP%2FW5ge97e4VCYtXeObubwuRR0f86uYrMXTobIJzpUcdkm2u1NcjF9o2vo1fOPNoqlVwU0ByEQgDHw0qtow34bKcFIJSi5Mcn5N9ar7i6RBK4%2FQsAvB3rBVln1YHm81p8CUfgrOrcPIZNboSNSWtLpgOQ3n9iJz7q840Mnk9Z2tUZdrNFv9T85MhF3qt39OyaND6tZ%2Fj9NyT64RwsfHY%2BEiMECrtNVvXVHTnEm8Mu0KvMLm5n8QGOqUBLwc%2BYBIo61ObOLUwxwp1qpJodnFUwy8b4B6Kh4puac608iSSM%2B2oY5ZsKX6Wr0VpUzxJo82Lfvwt8y%2BUq2p3oq68Dc52CF7xCpFTlWfWWCw8yCIYX1T4eT8cZJ7e62TqbLbEyC%2F4txblB0pCOqWUa5eqOahvUdZrSxyA5k4aB8x5g21ep3H33UlAZAeiC7k0Q%2FwDxlgWnBWlHWSAKsshBwfCr1oK&X-Amz-Signature=022f620f382f656efababdcba852af71a73b25d2c5de970224a1d1256a5c66db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZPJASI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLVZ5ix4c18zqPqp4j8Y7C%2FxQPTjZAk2Vlas8QQm5a3AiEAi371ReEHrquahG8R%2BEELMs%2BQYKJzYj%2FPPYqJAv0XyisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxu5Cce0Jb%2BMbiEWircA%2FW1Iu6sopxhyLTCXJdOjBDG1P4ccTG5ojDuLGBG7H304itxDAZWhu0gH1iJNjBTWHe3w4mnGttc%2BaTmYDLKeTrFdAuzN0dfkeH0XNaRc7aQlYcdlfKTLYG95dcK3mNoOfJvE3Y1SZklXDJp0E4krfVztZ%2BUFVQfMrtPEaUpMwd%2Bb3wBfyWW6XPXKJmJMOPKRt%2BVmsweJL%2FmQhQMQN6JbLHI8%2BPdq0ROmfpgwVPkPp%2BTFXFEfurAgQbvnrB7RvHTcdfrgI6stFCtY7KUFkrVZbR5pXG2qUeKD6X7vC4Zz%2F0PGFEuJ1LIDDEX1LGwl1aFouYE9CHtk70lKCQgFssVYQ%2FQx5jFFEl3GCfahxCnMLg4Qm%2FLL%2B9Gp9WeaLp6XI0%2FDEpeG83nqxBkhAKqQP%2FW5ge97e4VCYtXeObubwuRR0f86uYrMXTobIJzpUcdkm2u1NcjF9o2vo1fOPNoqlVwU0ByEQgDHw0qtow34bKcFIJSi5Mcn5N9ar7i6RBK4%2FQsAvB3rBVln1YHm81p8CUfgrOrcPIZNboSNSWtLpgOQ3n9iJz7q840Mnk9Z2tUZdrNFv9T85MhF3qt39OyaND6tZ%2Fj9NyT64RwsfHY%2BEiMECrtNVvXVHTnEm8Mu0KvMLm5n8QGOqUBLwc%2BYBIo61ObOLUwxwp1qpJodnFUwy8b4B6Kh4puac608iSSM%2B2oY5ZsKX6Wr0VpUzxJo82Lfvwt8y%2BUq2p3oq68Dc52CF7xCpFTlWfWWCw8yCIYX1T4eT8cZJ7e62TqbLbEyC%2F4txblB0pCOqWUa5eqOahvUdZrSxyA5k4aB8x5g21ep3H33UlAZAeiC7k0Q%2FwDxlgWnBWlHWSAKsshBwfCr1oK&X-Amz-Signature=82d27df68c99164d8021fad378d64e790a411799563c2317360672ec2ae3ab5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZPJASI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLVZ5ix4c18zqPqp4j8Y7C%2FxQPTjZAk2Vlas8QQm5a3AiEAi371ReEHrquahG8R%2BEELMs%2BQYKJzYj%2FPPYqJAv0XyisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxu5Cce0Jb%2BMbiEWircA%2FW1Iu6sopxhyLTCXJdOjBDG1P4ccTG5ojDuLGBG7H304itxDAZWhu0gH1iJNjBTWHe3w4mnGttc%2BaTmYDLKeTrFdAuzN0dfkeH0XNaRc7aQlYcdlfKTLYG95dcK3mNoOfJvE3Y1SZklXDJp0E4krfVztZ%2BUFVQfMrtPEaUpMwd%2Bb3wBfyWW6XPXKJmJMOPKRt%2BVmsweJL%2FmQhQMQN6JbLHI8%2BPdq0ROmfpgwVPkPp%2BTFXFEfurAgQbvnrB7RvHTcdfrgI6stFCtY7KUFkrVZbR5pXG2qUeKD6X7vC4Zz%2F0PGFEuJ1LIDDEX1LGwl1aFouYE9CHtk70lKCQgFssVYQ%2FQx5jFFEl3GCfahxCnMLg4Qm%2FLL%2B9Gp9WeaLp6XI0%2FDEpeG83nqxBkhAKqQP%2FW5ge97e4VCYtXeObubwuRR0f86uYrMXTobIJzpUcdkm2u1NcjF9o2vo1fOPNoqlVwU0ByEQgDHw0qtow34bKcFIJSi5Mcn5N9ar7i6RBK4%2FQsAvB3rBVln1YHm81p8CUfgrOrcPIZNboSNSWtLpgOQ3n9iJz7q840Mnk9Z2tUZdrNFv9T85MhF3qt39OyaND6tZ%2Fj9NyT64RwsfHY%2BEiMECrtNVvXVHTnEm8Mu0KvMLm5n8QGOqUBLwc%2BYBIo61ObOLUwxwp1qpJodnFUwy8b4B6Kh4puac608iSSM%2B2oY5ZsKX6Wr0VpUzxJo82Lfvwt8y%2BUq2p3oq68Dc52CF7xCpFTlWfWWCw8yCIYX1T4eT8cZJ7e62TqbLbEyC%2F4txblB0pCOqWUa5eqOahvUdZrSxyA5k4aB8x5g21ep3H33UlAZAeiC7k0Q%2FwDxlgWnBWlHWSAKsshBwfCr1oK&X-Amz-Signature=151f9192c95eddd74e202b0dfc23ae61c105bf7a626a78d6c11647673c2e77bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZPJASI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLVZ5ix4c18zqPqp4j8Y7C%2FxQPTjZAk2Vlas8QQm5a3AiEAi371ReEHrquahG8R%2BEELMs%2BQYKJzYj%2FPPYqJAv0XyisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxu5Cce0Jb%2BMbiEWircA%2FW1Iu6sopxhyLTCXJdOjBDG1P4ccTG5ojDuLGBG7H304itxDAZWhu0gH1iJNjBTWHe3w4mnGttc%2BaTmYDLKeTrFdAuzN0dfkeH0XNaRc7aQlYcdlfKTLYG95dcK3mNoOfJvE3Y1SZklXDJp0E4krfVztZ%2BUFVQfMrtPEaUpMwd%2Bb3wBfyWW6XPXKJmJMOPKRt%2BVmsweJL%2FmQhQMQN6JbLHI8%2BPdq0ROmfpgwVPkPp%2BTFXFEfurAgQbvnrB7RvHTcdfrgI6stFCtY7KUFkrVZbR5pXG2qUeKD6X7vC4Zz%2F0PGFEuJ1LIDDEX1LGwl1aFouYE9CHtk70lKCQgFssVYQ%2FQx5jFFEl3GCfahxCnMLg4Qm%2FLL%2B9Gp9WeaLp6XI0%2FDEpeG83nqxBkhAKqQP%2FW5ge97e4VCYtXeObubwuRR0f86uYrMXTobIJzpUcdkm2u1NcjF9o2vo1fOPNoqlVwU0ByEQgDHw0qtow34bKcFIJSi5Mcn5N9ar7i6RBK4%2FQsAvB3rBVln1YHm81p8CUfgrOrcPIZNboSNSWtLpgOQ3n9iJz7q840Mnk9Z2tUZdrNFv9T85MhF3qt39OyaND6tZ%2Fj9NyT64RwsfHY%2BEiMECrtNVvXVHTnEm8Mu0KvMLm5n8QGOqUBLwc%2BYBIo61ObOLUwxwp1qpJodnFUwy8b4B6Kh4puac608iSSM%2B2oY5ZsKX6Wr0VpUzxJo82Lfvwt8y%2BUq2p3oq68Dc52CF7xCpFTlWfWWCw8yCIYX1T4eT8cZJ7e62TqbLbEyC%2F4txblB0pCOqWUa5eqOahvUdZrSxyA5k4aB8x5g21ep3H33UlAZAeiC7k0Q%2FwDxlgWnBWlHWSAKsshBwfCr1oK&X-Amz-Signature=fe06124cc87b4b63cc2890746cf84001ec75f910208398b0f4ec4ae2a7714bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZPJASI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLVZ5ix4c18zqPqp4j8Y7C%2FxQPTjZAk2Vlas8QQm5a3AiEAi371ReEHrquahG8R%2BEELMs%2BQYKJzYj%2FPPYqJAv0XyisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxu5Cce0Jb%2BMbiEWircA%2FW1Iu6sopxhyLTCXJdOjBDG1P4ccTG5ojDuLGBG7H304itxDAZWhu0gH1iJNjBTWHe3w4mnGttc%2BaTmYDLKeTrFdAuzN0dfkeH0XNaRc7aQlYcdlfKTLYG95dcK3mNoOfJvE3Y1SZklXDJp0E4krfVztZ%2BUFVQfMrtPEaUpMwd%2Bb3wBfyWW6XPXKJmJMOPKRt%2BVmsweJL%2FmQhQMQN6JbLHI8%2BPdq0ROmfpgwVPkPp%2BTFXFEfurAgQbvnrB7RvHTcdfrgI6stFCtY7KUFkrVZbR5pXG2qUeKD6X7vC4Zz%2F0PGFEuJ1LIDDEX1LGwl1aFouYE9CHtk70lKCQgFssVYQ%2FQx5jFFEl3GCfahxCnMLg4Qm%2FLL%2B9Gp9WeaLp6XI0%2FDEpeG83nqxBkhAKqQP%2FW5ge97e4VCYtXeObubwuRR0f86uYrMXTobIJzpUcdkm2u1NcjF9o2vo1fOPNoqlVwU0ByEQgDHw0qtow34bKcFIJSi5Mcn5N9ar7i6RBK4%2FQsAvB3rBVln1YHm81p8CUfgrOrcPIZNboSNSWtLpgOQ3n9iJz7q840Mnk9Z2tUZdrNFv9T85MhF3qt39OyaND6tZ%2Fj9NyT64RwsfHY%2BEiMECrtNVvXVHTnEm8Mu0KvMLm5n8QGOqUBLwc%2BYBIo61ObOLUwxwp1qpJodnFUwy8b4B6Kh4puac608iSSM%2B2oY5ZsKX6Wr0VpUzxJo82Lfvwt8y%2BUq2p3oq68Dc52CF7xCpFTlWfWWCw8yCIYX1T4eT8cZJ7e62TqbLbEyC%2F4txblB0pCOqWUa5eqOahvUdZrSxyA5k4aB8x5g21ep3H33UlAZAeiC7k0Q%2FwDxlgWnBWlHWSAKsshBwfCr1oK&X-Amz-Signature=918286bce4d97cdecf0170f022f0ac7e80712f2e230bcff2cdf3d54d45b38798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZPJASI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLVZ5ix4c18zqPqp4j8Y7C%2FxQPTjZAk2Vlas8QQm5a3AiEAi371ReEHrquahG8R%2BEELMs%2BQYKJzYj%2FPPYqJAv0XyisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxu5Cce0Jb%2BMbiEWircA%2FW1Iu6sopxhyLTCXJdOjBDG1P4ccTG5ojDuLGBG7H304itxDAZWhu0gH1iJNjBTWHe3w4mnGttc%2BaTmYDLKeTrFdAuzN0dfkeH0XNaRc7aQlYcdlfKTLYG95dcK3mNoOfJvE3Y1SZklXDJp0E4krfVztZ%2BUFVQfMrtPEaUpMwd%2Bb3wBfyWW6XPXKJmJMOPKRt%2BVmsweJL%2FmQhQMQN6JbLHI8%2BPdq0ROmfpgwVPkPp%2BTFXFEfurAgQbvnrB7RvHTcdfrgI6stFCtY7KUFkrVZbR5pXG2qUeKD6X7vC4Zz%2F0PGFEuJ1LIDDEX1LGwl1aFouYE9CHtk70lKCQgFssVYQ%2FQx5jFFEl3GCfahxCnMLg4Qm%2FLL%2B9Gp9WeaLp6XI0%2FDEpeG83nqxBkhAKqQP%2FW5ge97e4VCYtXeObubwuRR0f86uYrMXTobIJzpUcdkm2u1NcjF9o2vo1fOPNoqlVwU0ByEQgDHw0qtow34bKcFIJSi5Mcn5N9ar7i6RBK4%2FQsAvB3rBVln1YHm81p8CUfgrOrcPIZNboSNSWtLpgOQ3n9iJz7q840Mnk9Z2tUZdrNFv9T85MhF3qt39OyaND6tZ%2Fj9NyT64RwsfHY%2BEiMECrtNVvXVHTnEm8Mu0KvMLm5n8QGOqUBLwc%2BYBIo61ObOLUwxwp1qpJodnFUwy8b4B6Kh4puac608iSSM%2B2oY5ZsKX6Wr0VpUzxJo82Lfvwt8y%2BUq2p3oq68Dc52CF7xCpFTlWfWWCw8yCIYX1T4eT8cZJ7e62TqbLbEyC%2F4txblB0pCOqWUa5eqOahvUdZrSxyA5k4aB8x5g21ep3H33UlAZAeiC7k0Q%2FwDxlgWnBWlHWSAKsshBwfCr1oK&X-Amz-Signature=fd2752dce61d8a95eb23540f2a83c5592a3defd5f7cf90eea08ea4f9bdf1a8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
