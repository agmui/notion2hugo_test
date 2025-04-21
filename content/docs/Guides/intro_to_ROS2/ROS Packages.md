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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FWE74J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH%2Fzx4s6d9iovzymHPEn8xpeBvcxL2Nfi4aCACV%2FjSHMAiEA9unaf9ndBHinMHX5qflosz7rYRTvEWSenqo5SQbEaAcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOJDZ7H%2BE0u2qvffSrcA%2F8Gq%2FGUI74xtqeG8%2BlbzfnZoi4caMaKkyl0bJ5Qjsv8Iej6w%2Bn23sQ8dXNEBfklxU9cUWBhValR%2FL%2F2qy2djjk5kfwDPvTUxFzkKEEHBnJrfCy6H7phUeAGOgn%2F93pHwoPXjT%2B%2F9mdHEN75alBDKlEgXIufvvAdxCUuEH984EMrA6Fk%2FNbUqLcGGxBRX%2FSsXqY6Zq1N4MWrFGerzmY1e0gN%2FwrtmgyJNVbf8sFreXOUcVvxmhVMWT4iKyM3NbIRItNqOSmRaBah2WHIX7q2VUnFy6VJEMhPthjX8pRSK2SSTzIKmssqgaYJQoHtXhVrH%2BMj%2B%2Bu%2FhSDZQ27ruyNeY1jT0JF%2B1uq7kgukVXiN5AX%2FKDWWDfZltuqUOobEwP6gLCDfjp8Qn7BivHTRdBhxFt2V55dlSz5McUwlLJPjJOZK8bpRJ9w%2Ff1RWdloDkAJd0tHpOUXSCWIW3O3evHhQrLBUMgToNzCVJ9t9tbABEvMNl2Q0RD0HuoChdJGrX4JFXdaAk95758FU3E78iFWqLl%2BxatI%2BLYFlPPQuKXDqyyH%2F8761cAi9TR%2BtCJ%2Fq1mVww7s3m7kLKGH1%2FgAKYnxPWJ6UjMuPyTYocuPNOjglMqGp2PtvN5O8kftDwMLKMJ%2BHm8AGOqUBKFh3yaLJfMQ%2FYHvjYre3D0n4vsSLeNYYkJ7rlTY%2FAGGyeSuG1FVyS3h0Jlnfk5qjcrhGpz8E%2FCHy5fLEUSecJsKWwfdiWxIjrilmJALFP4WSxAHGQ5SUp%2Fbz5UYNiR8gQgm0nYgd6LvR4qkaiQhQDcrmxAHlRm5%2BfRcXpS3YocEniL6%2B7oLyReIA4n%2BqsiV3Cgi7P356xkiqCe6ERJ0v6mZxA465&X-Amz-Signature=72e5e6a536a08b268803b26981695c14447b4e67649cfe86ad4957a58c2b751c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FWE74J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH%2Fzx4s6d9iovzymHPEn8xpeBvcxL2Nfi4aCACV%2FjSHMAiEA9unaf9ndBHinMHX5qflosz7rYRTvEWSenqo5SQbEaAcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOJDZ7H%2BE0u2qvffSrcA%2F8Gq%2FGUI74xtqeG8%2BlbzfnZoi4caMaKkyl0bJ5Qjsv8Iej6w%2Bn23sQ8dXNEBfklxU9cUWBhValR%2FL%2F2qy2djjk5kfwDPvTUxFzkKEEHBnJrfCy6H7phUeAGOgn%2F93pHwoPXjT%2B%2F9mdHEN75alBDKlEgXIufvvAdxCUuEH984EMrA6Fk%2FNbUqLcGGxBRX%2FSsXqY6Zq1N4MWrFGerzmY1e0gN%2FwrtmgyJNVbf8sFreXOUcVvxmhVMWT4iKyM3NbIRItNqOSmRaBah2WHIX7q2VUnFy6VJEMhPthjX8pRSK2SSTzIKmssqgaYJQoHtXhVrH%2BMj%2B%2Bu%2FhSDZQ27ruyNeY1jT0JF%2B1uq7kgukVXiN5AX%2FKDWWDfZltuqUOobEwP6gLCDfjp8Qn7BivHTRdBhxFt2V55dlSz5McUwlLJPjJOZK8bpRJ9w%2Ff1RWdloDkAJd0tHpOUXSCWIW3O3evHhQrLBUMgToNzCVJ9t9tbABEvMNl2Q0RD0HuoChdJGrX4JFXdaAk95758FU3E78iFWqLl%2BxatI%2BLYFlPPQuKXDqyyH%2F8761cAi9TR%2BtCJ%2Fq1mVww7s3m7kLKGH1%2FgAKYnxPWJ6UjMuPyTYocuPNOjglMqGp2PtvN5O8kftDwMLKMJ%2BHm8AGOqUBKFh3yaLJfMQ%2FYHvjYre3D0n4vsSLeNYYkJ7rlTY%2FAGGyeSuG1FVyS3h0Jlnfk5qjcrhGpz8E%2FCHy5fLEUSecJsKWwfdiWxIjrilmJALFP4WSxAHGQ5SUp%2Fbz5UYNiR8gQgm0nYgd6LvR4qkaiQhQDcrmxAHlRm5%2BfRcXpS3YocEniL6%2B7oLyReIA4n%2BqsiV3Cgi7P356xkiqCe6ERJ0v6mZxA465&X-Amz-Signature=c4a3de885e69180c9e16ff4f8e100a2242eb1c5e87cc353882aaf07aaccae3da&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FWE74J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH%2Fzx4s6d9iovzymHPEn8xpeBvcxL2Nfi4aCACV%2FjSHMAiEA9unaf9ndBHinMHX5qflosz7rYRTvEWSenqo5SQbEaAcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOJDZ7H%2BE0u2qvffSrcA%2F8Gq%2FGUI74xtqeG8%2BlbzfnZoi4caMaKkyl0bJ5Qjsv8Iej6w%2Bn23sQ8dXNEBfklxU9cUWBhValR%2FL%2F2qy2djjk5kfwDPvTUxFzkKEEHBnJrfCy6H7phUeAGOgn%2F93pHwoPXjT%2B%2F9mdHEN75alBDKlEgXIufvvAdxCUuEH984EMrA6Fk%2FNbUqLcGGxBRX%2FSsXqY6Zq1N4MWrFGerzmY1e0gN%2FwrtmgyJNVbf8sFreXOUcVvxmhVMWT4iKyM3NbIRItNqOSmRaBah2WHIX7q2VUnFy6VJEMhPthjX8pRSK2SSTzIKmssqgaYJQoHtXhVrH%2BMj%2B%2Bu%2FhSDZQ27ruyNeY1jT0JF%2B1uq7kgukVXiN5AX%2FKDWWDfZltuqUOobEwP6gLCDfjp8Qn7BivHTRdBhxFt2V55dlSz5McUwlLJPjJOZK8bpRJ9w%2Ff1RWdloDkAJd0tHpOUXSCWIW3O3evHhQrLBUMgToNzCVJ9t9tbABEvMNl2Q0RD0HuoChdJGrX4JFXdaAk95758FU3E78iFWqLl%2BxatI%2BLYFlPPQuKXDqyyH%2F8761cAi9TR%2BtCJ%2Fq1mVww7s3m7kLKGH1%2FgAKYnxPWJ6UjMuPyTYocuPNOjglMqGp2PtvN5O8kftDwMLKMJ%2BHm8AGOqUBKFh3yaLJfMQ%2FYHvjYre3D0n4vsSLeNYYkJ7rlTY%2FAGGyeSuG1FVyS3h0Jlnfk5qjcrhGpz8E%2FCHy5fLEUSecJsKWwfdiWxIjrilmJALFP4WSxAHGQ5SUp%2Fbz5UYNiR8gQgm0nYgd6LvR4qkaiQhQDcrmxAHlRm5%2BfRcXpS3YocEniL6%2B7oLyReIA4n%2BqsiV3Cgi7P356xkiqCe6ERJ0v6mZxA465&X-Amz-Signature=259ff676b39e9daf4ed22c484e2471e981091529cc6b73ec0365cd7203e1592d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FWE74J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH%2Fzx4s6d9iovzymHPEn8xpeBvcxL2Nfi4aCACV%2FjSHMAiEA9unaf9ndBHinMHX5qflosz7rYRTvEWSenqo5SQbEaAcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOJDZ7H%2BE0u2qvffSrcA%2F8Gq%2FGUI74xtqeG8%2BlbzfnZoi4caMaKkyl0bJ5Qjsv8Iej6w%2Bn23sQ8dXNEBfklxU9cUWBhValR%2FL%2F2qy2djjk5kfwDPvTUxFzkKEEHBnJrfCy6H7phUeAGOgn%2F93pHwoPXjT%2B%2F9mdHEN75alBDKlEgXIufvvAdxCUuEH984EMrA6Fk%2FNbUqLcGGxBRX%2FSsXqY6Zq1N4MWrFGerzmY1e0gN%2FwrtmgyJNVbf8sFreXOUcVvxmhVMWT4iKyM3NbIRItNqOSmRaBah2WHIX7q2VUnFy6VJEMhPthjX8pRSK2SSTzIKmssqgaYJQoHtXhVrH%2BMj%2B%2Bu%2FhSDZQ27ruyNeY1jT0JF%2B1uq7kgukVXiN5AX%2FKDWWDfZltuqUOobEwP6gLCDfjp8Qn7BivHTRdBhxFt2V55dlSz5McUwlLJPjJOZK8bpRJ9w%2Ff1RWdloDkAJd0tHpOUXSCWIW3O3evHhQrLBUMgToNzCVJ9t9tbABEvMNl2Q0RD0HuoChdJGrX4JFXdaAk95758FU3E78iFWqLl%2BxatI%2BLYFlPPQuKXDqyyH%2F8761cAi9TR%2BtCJ%2Fq1mVww7s3m7kLKGH1%2FgAKYnxPWJ6UjMuPyTYocuPNOjglMqGp2PtvN5O8kftDwMLKMJ%2BHm8AGOqUBKFh3yaLJfMQ%2FYHvjYre3D0n4vsSLeNYYkJ7rlTY%2FAGGyeSuG1FVyS3h0Jlnfk5qjcrhGpz8E%2FCHy5fLEUSecJsKWwfdiWxIjrilmJALFP4WSxAHGQ5SUp%2Fbz5UYNiR8gQgm0nYgd6LvR4qkaiQhQDcrmxAHlRm5%2BfRcXpS3YocEniL6%2B7oLyReIA4n%2BqsiV3Cgi7P356xkiqCe6ERJ0v6mZxA465&X-Amz-Signature=599c60ad8604f29061a26da494cd3cadab77c7baaea198277148a65c6f5a8a27&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FWE74J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH%2Fzx4s6d9iovzymHPEn8xpeBvcxL2Nfi4aCACV%2FjSHMAiEA9unaf9ndBHinMHX5qflosz7rYRTvEWSenqo5SQbEaAcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOJDZ7H%2BE0u2qvffSrcA%2F8Gq%2FGUI74xtqeG8%2BlbzfnZoi4caMaKkyl0bJ5Qjsv8Iej6w%2Bn23sQ8dXNEBfklxU9cUWBhValR%2FL%2F2qy2djjk5kfwDPvTUxFzkKEEHBnJrfCy6H7phUeAGOgn%2F93pHwoPXjT%2B%2F9mdHEN75alBDKlEgXIufvvAdxCUuEH984EMrA6Fk%2FNbUqLcGGxBRX%2FSsXqY6Zq1N4MWrFGerzmY1e0gN%2FwrtmgyJNVbf8sFreXOUcVvxmhVMWT4iKyM3NbIRItNqOSmRaBah2WHIX7q2VUnFy6VJEMhPthjX8pRSK2SSTzIKmssqgaYJQoHtXhVrH%2BMj%2B%2Bu%2FhSDZQ27ruyNeY1jT0JF%2B1uq7kgukVXiN5AX%2FKDWWDfZltuqUOobEwP6gLCDfjp8Qn7BivHTRdBhxFt2V55dlSz5McUwlLJPjJOZK8bpRJ9w%2Ff1RWdloDkAJd0tHpOUXSCWIW3O3evHhQrLBUMgToNzCVJ9t9tbABEvMNl2Q0RD0HuoChdJGrX4JFXdaAk95758FU3E78iFWqLl%2BxatI%2BLYFlPPQuKXDqyyH%2F8761cAi9TR%2BtCJ%2Fq1mVww7s3m7kLKGH1%2FgAKYnxPWJ6UjMuPyTYocuPNOjglMqGp2PtvN5O8kftDwMLKMJ%2BHm8AGOqUBKFh3yaLJfMQ%2FYHvjYre3D0n4vsSLeNYYkJ7rlTY%2FAGGyeSuG1FVyS3h0Jlnfk5qjcrhGpz8E%2FCHy5fLEUSecJsKWwfdiWxIjrilmJALFP4WSxAHGQ5SUp%2Fbz5UYNiR8gQgm0nYgd6LvR4qkaiQhQDcrmxAHlRm5%2BfRcXpS3YocEniL6%2B7oLyReIA4n%2BqsiV3Cgi7P356xkiqCe6ERJ0v6mZxA465&X-Amz-Signature=72b664937f7a44fe73495be46ab233c30cc4bc71d5caa9633c0a77fe6b7ab16b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FWE74J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH%2Fzx4s6d9iovzymHPEn8xpeBvcxL2Nfi4aCACV%2FjSHMAiEA9unaf9ndBHinMHX5qflosz7rYRTvEWSenqo5SQbEaAcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOJDZ7H%2BE0u2qvffSrcA%2F8Gq%2FGUI74xtqeG8%2BlbzfnZoi4caMaKkyl0bJ5Qjsv8Iej6w%2Bn23sQ8dXNEBfklxU9cUWBhValR%2FL%2F2qy2djjk5kfwDPvTUxFzkKEEHBnJrfCy6H7phUeAGOgn%2F93pHwoPXjT%2B%2F9mdHEN75alBDKlEgXIufvvAdxCUuEH984EMrA6Fk%2FNbUqLcGGxBRX%2FSsXqY6Zq1N4MWrFGerzmY1e0gN%2FwrtmgyJNVbf8sFreXOUcVvxmhVMWT4iKyM3NbIRItNqOSmRaBah2WHIX7q2VUnFy6VJEMhPthjX8pRSK2SSTzIKmssqgaYJQoHtXhVrH%2BMj%2B%2Bu%2FhSDZQ27ruyNeY1jT0JF%2B1uq7kgukVXiN5AX%2FKDWWDfZltuqUOobEwP6gLCDfjp8Qn7BivHTRdBhxFt2V55dlSz5McUwlLJPjJOZK8bpRJ9w%2Ff1RWdloDkAJd0tHpOUXSCWIW3O3evHhQrLBUMgToNzCVJ9t9tbABEvMNl2Q0RD0HuoChdJGrX4JFXdaAk95758FU3E78iFWqLl%2BxatI%2BLYFlPPQuKXDqyyH%2F8761cAi9TR%2BtCJ%2Fq1mVww7s3m7kLKGH1%2FgAKYnxPWJ6UjMuPyTYocuPNOjglMqGp2PtvN5O8kftDwMLKMJ%2BHm8AGOqUBKFh3yaLJfMQ%2FYHvjYre3D0n4vsSLeNYYkJ7rlTY%2FAGGyeSuG1FVyS3h0Jlnfk5qjcrhGpz8E%2FCHy5fLEUSecJsKWwfdiWxIjrilmJALFP4WSxAHGQ5SUp%2Fbz5UYNiR8gQgm0nYgd6LvR4qkaiQhQDcrmxAHlRm5%2BfRcXpS3YocEniL6%2B7oLyReIA4n%2BqsiV3Cgi7P356xkiqCe6ERJ0v6mZxA465&X-Amz-Signature=d14adf73634192186440509c0555fb704f8fe1c4309f27f900a17ce0e27f301a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FWE74J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH%2Fzx4s6d9iovzymHPEn8xpeBvcxL2Nfi4aCACV%2FjSHMAiEA9unaf9ndBHinMHX5qflosz7rYRTvEWSenqo5SQbEaAcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOJDZ7H%2BE0u2qvffSrcA%2F8Gq%2FGUI74xtqeG8%2BlbzfnZoi4caMaKkyl0bJ5Qjsv8Iej6w%2Bn23sQ8dXNEBfklxU9cUWBhValR%2FL%2F2qy2djjk5kfwDPvTUxFzkKEEHBnJrfCy6H7phUeAGOgn%2F93pHwoPXjT%2B%2F9mdHEN75alBDKlEgXIufvvAdxCUuEH984EMrA6Fk%2FNbUqLcGGxBRX%2FSsXqY6Zq1N4MWrFGerzmY1e0gN%2FwrtmgyJNVbf8sFreXOUcVvxmhVMWT4iKyM3NbIRItNqOSmRaBah2WHIX7q2VUnFy6VJEMhPthjX8pRSK2SSTzIKmssqgaYJQoHtXhVrH%2BMj%2B%2Bu%2FhSDZQ27ruyNeY1jT0JF%2B1uq7kgukVXiN5AX%2FKDWWDfZltuqUOobEwP6gLCDfjp8Qn7BivHTRdBhxFt2V55dlSz5McUwlLJPjJOZK8bpRJ9w%2Ff1RWdloDkAJd0tHpOUXSCWIW3O3evHhQrLBUMgToNzCVJ9t9tbABEvMNl2Q0RD0HuoChdJGrX4JFXdaAk95758FU3E78iFWqLl%2BxatI%2BLYFlPPQuKXDqyyH%2F8761cAi9TR%2BtCJ%2Fq1mVww7s3m7kLKGH1%2FgAKYnxPWJ6UjMuPyTYocuPNOjglMqGp2PtvN5O8kftDwMLKMJ%2BHm8AGOqUBKFh3yaLJfMQ%2FYHvjYre3D0n4vsSLeNYYkJ7rlTY%2FAGGyeSuG1FVyS3h0Jlnfk5qjcrhGpz8E%2FCHy5fLEUSecJsKWwfdiWxIjrilmJALFP4WSxAHGQ5SUp%2Fbz5UYNiR8gQgm0nYgd6LvR4qkaiQhQDcrmxAHlRm5%2BfRcXpS3YocEniL6%2B7oLyReIA4n%2BqsiV3Cgi7P356xkiqCe6ERJ0v6mZxA465&X-Amz-Signature=2ee216bd64e01d37ce786e5397ea1ca8a55c7856af97133cfbb28e41433c64dd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
