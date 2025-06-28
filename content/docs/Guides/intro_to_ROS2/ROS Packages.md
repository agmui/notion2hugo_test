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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXAII2O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6Kjc%2Fo%2BJ1uwy0672agyLVrnbE3PzEZQuV7bKL9mMkwIhAILlbHHrzaKesy3rO6te1HrfhNv%2BS%2F%2FPWubpAWcHsY4QKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR%2B4vydiJOFrED%2Fegq3APvHP54iuWi%2BBOdBmuCQPnwuRAwgEI9BTGBEyMkPEbJt8SXAuHZbQdzBrXZFo925yAdvXjUsaQEofQaeSya%2BCf0vBkI6m78LPelto76FSCSM4Hgsw8PqEP2AFCnzhUJPgwn8j%2FWQxY9evaI7hUajQSKBIKOgo4m7IJa0Euew5pnm62bVI2zf9USDXz5KeO3Ohfx1X72m9sVZRfXHtQt5VleUCv%2Bt3085R3SgKyaexGrSntOhiZPG3K4%2Bd1S6z%2BXUp1CWVmdXqh%2F74jgy0JhjjfJUmK5zNi%2Fe6A7DYGY5phldN3b949yP%2BoJQmbzxBhFKi%2BcM5EuA%2FthsaBY53OkvynPBccnkdTMPpDZQ5MhK1woZv4LarBK5a6V73RrXurGj9%2FwIu5RFFgPYvYJoIO1D0BPF0qPMfVV%2FrIN1ZvXTb8RLRNSoC6jNxSYypz%2Bac4ai1t0rQU9Z8BRg8eJIRUsPbpDkx%2Bs40xwo0unY2IHLbL6wFX8Gjp6rb%2BAmyumJQ%2BWFFOVGIQbjeygW8mtQvi%2FydLpU8c4w%2Bdr4ARLHkprOxir3ZP%2BFMlIkPOH3PB0BZNl9veDzvXn%2Fb4RJe2CoI05egRtF03h%2FbooJPapOI%2Bz4pZnzzHqi0vUFNmTiD9GLTCPgP3CBjqkARdDmqUB4pUd4eCiashhRBL2je01om85QAVud89VGkAvFNZ89cOCO9dTFsRW9NhBe7RCiksvqV0MLRrVxS7isgwZiXeJJePSshNxVZnbynTNNJejeFDEC6LyLrSD70N1gE5IaIc5hcpRp5eG6GC%2FB3Ls3QFwVA0shyXDa6TbTEM92SPm6RTUl7wkhxe1rM1jeVR8OQxeYfe96gekIWP8BDrmyaM%2F&X-Amz-Signature=32ec773bc180e52658857e1071e6d2bee7b3f4a7a99f4dafc3ae883866eda523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXAII2O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6Kjc%2Fo%2BJ1uwy0672agyLVrnbE3PzEZQuV7bKL9mMkwIhAILlbHHrzaKesy3rO6te1HrfhNv%2BS%2F%2FPWubpAWcHsY4QKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR%2B4vydiJOFrED%2Fegq3APvHP54iuWi%2BBOdBmuCQPnwuRAwgEI9BTGBEyMkPEbJt8SXAuHZbQdzBrXZFo925yAdvXjUsaQEofQaeSya%2BCf0vBkI6m78LPelto76FSCSM4Hgsw8PqEP2AFCnzhUJPgwn8j%2FWQxY9evaI7hUajQSKBIKOgo4m7IJa0Euew5pnm62bVI2zf9USDXz5KeO3Ohfx1X72m9sVZRfXHtQt5VleUCv%2Bt3085R3SgKyaexGrSntOhiZPG3K4%2Bd1S6z%2BXUp1CWVmdXqh%2F74jgy0JhjjfJUmK5zNi%2Fe6A7DYGY5phldN3b949yP%2BoJQmbzxBhFKi%2BcM5EuA%2FthsaBY53OkvynPBccnkdTMPpDZQ5MhK1woZv4LarBK5a6V73RrXurGj9%2FwIu5RFFgPYvYJoIO1D0BPF0qPMfVV%2FrIN1ZvXTb8RLRNSoC6jNxSYypz%2Bac4ai1t0rQU9Z8BRg8eJIRUsPbpDkx%2Bs40xwo0unY2IHLbL6wFX8Gjp6rb%2BAmyumJQ%2BWFFOVGIQbjeygW8mtQvi%2FydLpU8c4w%2Bdr4ARLHkprOxir3ZP%2BFMlIkPOH3PB0BZNl9veDzvXn%2Fb4RJe2CoI05egRtF03h%2FbooJPapOI%2Bz4pZnzzHqi0vUFNmTiD9GLTCPgP3CBjqkARdDmqUB4pUd4eCiashhRBL2je01om85QAVud89VGkAvFNZ89cOCO9dTFsRW9NhBe7RCiksvqV0MLRrVxS7isgwZiXeJJePSshNxVZnbynTNNJejeFDEC6LyLrSD70N1gE5IaIc5hcpRp5eG6GC%2FB3Ls3QFwVA0shyXDa6TbTEM92SPm6RTUl7wkhxe1rM1jeVR8OQxeYfe96gekIWP8BDrmyaM%2F&X-Amz-Signature=03d44b9b6e39d2abdfac9329f628bd6fc20250a2ba0fa7020db00003e7df87f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXAII2O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6Kjc%2Fo%2BJ1uwy0672agyLVrnbE3PzEZQuV7bKL9mMkwIhAILlbHHrzaKesy3rO6te1HrfhNv%2BS%2F%2FPWubpAWcHsY4QKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR%2B4vydiJOFrED%2Fegq3APvHP54iuWi%2BBOdBmuCQPnwuRAwgEI9BTGBEyMkPEbJt8SXAuHZbQdzBrXZFo925yAdvXjUsaQEofQaeSya%2BCf0vBkI6m78LPelto76FSCSM4Hgsw8PqEP2AFCnzhUJPgwn8j%2FWQxY9evaI7hUajQSKBIKOgo4m7IJa0Euew5pnm62bVI2zf9USDXz5KeO3Ohfx1X72m9sVZRfXHtQt5VleUCv%2Bt3085R3SgKyaexGrSntOhiZPG3K4%2Bd1S6z%2BXUp1CWVmdXqh%2F74jgy0JhjjfJUmK5zNi%2Fe6A7DYGY5phldN3b949yP%2BoJQmbzxBhFKi%2BcM5EuA%2FthsaBY53OkvynPBccnkdTMPpDZQ5MhK1woZv4LarBK5a6V73RrXurGj9%2FwIu5RFFgPYvYJoIO1D0BPF0qPMfVV%2FrIN1ZvXTb8RLRNSoC6jNxSYypz%2Bac4ai1t0rQU9Z8BRg8eJIRUsPbpDkx%2Bs40xwo0unY2IHLbL6wFX8Gjp6rb%2BAmyumJQ%2BWFFOVGIQbjeygW8mtQvi%2FydLpU8c4w%2Bdr4ARLHkprOxir3ZP%2BFMlIkPOH3PB0BZNl9veDzvXn%2Fb4RJe2CoI05egRtF03h%2FbooJPapOI%2Bz4pZnzzHqi0vUFNmTiD9GLTCPgP3CBjqkARdDmqUB4pUd4eCiashhRBL2je01om85QAVud89VGkAvFNZ89cOCO9dTFsRW9NhBe7RCiksvqV0MLRrVxS7isgwZiXeJJePSshNxVZnbynTNNJejeFDEC6LyLrSD70N1gE5IaIc5hcpRp5eG6GC%2FB3Ls3QFwVA0shyXDa6TbTEM92SPm6RTUl7wkhxe1rM1jeVR8OQxeYfe96gekIWP8BDrmyaM%2F&X-Amz-Signature=8aee7935cce3110e8d0e23fd2ad81718c1f22c7b987e49d09579618a58a5c098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXAII2O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6Kjc%2Fo%2BJ1uwy0672agyLVrnbE3PzEZQuV7bKL9mMkwIhAILlbHHrzaKesy3rO6te1HrfhNv%2BS%2F%2FPWubpAWcHsY4QKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR%2B4vydiJOFrED%2Fegq3APvHP54iuWi%2BBOdBmuCQPnwuRAwgEI9BTGBEyMkPEbJt8SXAuHZbQdzBrXZFo925yAdvXjUsaQEofQaeSya%2BCf0vBkI6m78LPelto76FSCSM4Hgsw8PqEP2AFCnzhUJPgwn8j%2FWQxY9evaI7hUajQSKBIKOgo4m7IJa0Euew5pnm62bVI2zf9USDXz5KeO3Ohfx1X72m9sVZRfXHtQt5VleUCv%2Bt3085R3SgKyaexGrSntOhiZPG3K4%2Bd1S6z%2BXUp1CWVmdXqh%2F74jgy0JhjjfJUmK5zNi%2Fe6A7DYGY5phldN3b949yP%2BoJQmbzxBhFKi%2BcM5EuA%2FthsaBY53OkvynPBccnkdTMPpDZQ5MhK1woZv4LarBK5a6V73RrXurGj9%2FwIu5RFFgPYvYJoIO1D0BPF0qPMfVV%2FrIN1ZvXTb8RLRNSoC6jNxSYypz%2Bac4ai1t0rQU9Z8BRg8eJIRUsPbpDkx%2Bs40xwo0unY2IHLbL6wFX8Gjp6rb%2BAmyumJQ%2BWFFOVGIQbjeygW8mtQvi%2FydLpU8c4w%2Bdr4ARLHkprOxir3ZP%2BFMlIkPOH3PB0BZNl9veDzvXn%2Fb4RJe2CoI05egRtF03h%2FbooJPapOI%2Bz4pZnzzHqi0vUFNmTiD9GLTCPgP3CBjqkARdDmqUB4pUd4eCiashhRBL2je01om85QAVud89VGkAvFNZ89cOCO9dTFsRW9NhBe7RCiksvqV0MLRrVxS7isgwZiXeJJePSshNxVZnbynTNNJejeFDEC6LyLrSD70N1gE5IaIc5hcpRp5eG6GC%2FB3Ls3QFwVA0shyXDa6TbTEM92SPm6RTUl7wkhxe1rM1jeVR8OQxeYfe96gekIWP8BDrmyaM%2F&X-Amz-Signature=65b8933d34a79b223dd1f93c8297d3299902a982e99b01a4a52ce2dbe05aea2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXAII2O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6Kjc%2Fo%2BJ1uwy0672agyLVrnbE3PzEZQuV7bKL9mMkwIhAILlbHHrzaKesy3rO6te1HrfhNv%2BS%2F%2FPWubpAWcHsY4QKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR%2B4vydiJOFrED%2Fegq3APvHP54iuWi%2BBOdBmuCQPnwuRAwgEI9BTGBEyMkPEbJt8SXAuHZbQdzBrXZFo925yAdvXjUsaQEofQaeSya%2BCf0vBkI6m78LPelto76FSCSM4Hgsw8PqEP2AFCnzhUJPgwn8j%2FWQxY9evaI7hUajQSKBIKOgo4m7IJa0Euew5pnm62bVI2zf9USDXz5KeO3Ohfx1X72m9sVZRfXHtQt5VleUCv%2Bt3085R3SgKyaexGrSntOhiZPG3K4%2Bd1S6z%2BXUp1CWVmdXqh%2F74jgy0JhjjfJUmK5zNi%2Fe6A7DYGY5phldN3b949yP%2BoJQmbzxBhFKi%2BcM5EuA%2FthsaBY53OkvynPBccnkdTMPpDZQ5MhK1woZv4LarBK5a6V73RrXurGj9%2FwIu5RFFgPYvYJoIO1D0BPF0qPMfVV%2FrIN1ZvXTb8RLRNSoC6jNxSYypz%2Bac4ai1t0rQU9Z8BRg8eJIRUsPbpDkx%2Bs40xwo0unY2IHLbL6wFX8Gjp6rb%2BAmyumJQ%2BWFFOVGIQbjeygW8mtQvi%2FydLpU8c4w%2Bdr4ARLHkprOxir3ZP%2BFMlIkPOH3PB0BZNl9veDzvXn%2Fb4RJe2CoI05egRtF03h%2FbooJPapOI%2Bz4pZnzzHqi0vUFNmTiD9GLTCPgP3CBjqkARdDmqUB4pUd4eCiashhRBL2je01om85QAVud89VGkAvFNZ89cOCO9dTFsRW9NhBe7RCiksvqV0MLRrVxS7isgwZiXeJJePSshNxVZnbynTNNJejeFDEC6LyLrSD70N1gE5IaIc5hcpRp5eG6GC%2FB3Ls3QFwVA0shyXDa6TbTEM92SPm6RTUl7wkhxe1rM1jeVR8OQxeYfe96gekIWP8BDrmyaM%2F&X-Amz-Signature=127c74484195f50b5414e62f8dfec683c15d48ed24fdb8cd7b1b4221364c4393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXAII2O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6Kjc%2Fo%2BJ1uwy0672agyLVrnbE3PzEZQuV7bKL9mMkwIhAILlbHHrzaKesy3rO6te1HrfhNv%2BS%2F%2FPWubpAWcHsY4QKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR%2B4vydiJOFrED%2Fegq3APvHP54iuWi%2BBOdBmuCQPnwuRAwgEI9BTGBEyMkPEbJt8SXAuHZbQdzBrXZFo925yAdvXjUsaQEofQaeSya%2BCf0vBkI6m78LPelto76FSCSM4Hgsw8PqEP2AFCnzhUJPgwn8j%2FWQxY9evaI7hUajQSKBIKOgo4m7IJa0Euew5pnm62bVI2zf9USDXz5KeO3Ohfx1X72m9sVZRfXHtQt5VleUCv%2Bt3085R3SgKyaexGrSntOhiZPG3K4%2Bd1S6z%2BXUp1CWVmdXqh%2F74jgy0JhjjfJUmK5zNi%2Fe6A7DYGY5phldN3b949yP%2BoJQmbzxBhFKi%2BcM5EuA%2FthsaBY53OkvynPBccnkdTMPpDZQ5MhK1woZv4LarBK5a6V73RrXurGj9%2FwIu5RFFgPYvYJoIO1D0BPF0qPMfVV%2FrIN1ZvXTb8RLRNSoC6jNxSYypz%2Bac4ai1t0rQU9Z8BRg8eJIRUsPbpDkx%2Bs40xwo0unY2IHLbL6wFX8Gjp6rb%2BAmyumJQ%2BWFFOVGIQbjeygW8mtQvi%2FydLpU8c4w%2Bdr4ARLHkprOxir3ZP%2BFMlIkPOH3PB0BZNl9veDzvXn%2Fb4RJe2CoI05egRtF03h%2FbooJPapOI%2Bz4pZnzzHqi0vUFNmTiD9GLTCPgP3CBjqkARdDmqUB4pUd4eCiashhRBL2je01om85QAVud89VGkAvFNZ89cOCO9dTFsRW9NhBe7RCiksvqV0MLRrVxS7isgwZiXeJJePSshNxVZnbynTNNJejeFDEC6LyLrSD70N1gE5IaIc5hcpRp5eG6GC%2FB3Ls3QFwVA0shyXDa6TbTEM92SPm6RTUl7wkhxe1rM1jeVR8OQxeYfe96gekIWP8BDrmyaM%2F&X-Amz-Signature=b8a4c2ceeed22341c16dd3bd0c9e06543f002d3d6011c42ac6be493b9b909cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXAII2O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF6Kjc%2Fo%2BJ1uwy0672agyLVrnbE3PzEZQuV7bKL9mMkwIhAILlbHHrzaKesy3rO6te1HrfhNv%2BS%2F%2FPWubpAWcHsY4QKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR%2B4vydiJOFrED%2Fegq3APvHP54iuWi%2BBOdBmuCQPnwuRAwgEI9BTGBEyMkPEbJt8SXAuHZbQdzBrXZFo925yAdvXjUsaQEofQaeSya%2BCf0vBkI6m78LPelto76FSCSM4Hgsw8PqEP2AFCnzhUJPgwn8j%2FWQxY9evaI7hUajQSKBIKOgo4m7IJa0Euew5pnm62bVI2zf9USDXz5KeO3Ohfx1X72m9sVZRfXHtQt5VleUCv%2Bt3085R3SgKyaexGrSntOhiZPG3K4%2Bd1S6z%2BXUp1CWVmdXqh%2F74jgy0JhjjfJUmK5zNi%2Fe6A7DYGY5phldN3b949yP%2BoJQmbzxBhFKi%2BcM5EuA%2FthsaBY53OkvynPBccnkdTMPpDZQ5MhK1woZv4LarBK5a6V73RrXurGj9%2FwIu5RFFgPYvYJoIO1D0BPF0qPMfVV%2FrIN1ZvXTb8RLRNSoC6jNxSYypz%2Bac4ai1t0rQU9Z8BRg8eJIRUsPbpDkx%2Bs40xwo0unY2IHLbL6wFX8Gjp6rb%2BAmyumJQ%2BWFFOVGIQbjeygW8mtQvi%2FydLpU8c4w%2Bdr4ARLHkprOxir3ZP%2BFMlIkPOH3PB0BZNl9veDzvXn%2Fb4RJe2CoI05egRtF03h%2FbooJPapOI%2Bz4pZnzzHqi0vUFNmTiD9GLTCPgP3CBjqkARdDmqUB4pUd4eCiashhRBL2je01om85QAVud89VGkAvFNZ89cOCO9dTFsRW9NhBe7RCiksvqV0MLRrVxS7isgwZiXeJJePSshNxVZnbynTNNJejeFDEC6LyLrSD70N1gE5IaIc5hcpRp5eG6GC%2FB3Ls3QFwVA0shyXDa6TbTEM92SPm6RTUl7wkhxe1rM1jeVR8OQxeYfe96gekIWP8BDrmyaM%2F&X-Amz-Signature=ee8045423e6d7186d5265d78ad29eb16c714b62fc4bac7021925dc885b373fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
