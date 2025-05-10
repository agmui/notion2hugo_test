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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67LADA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCdql2EDDh6%2BkAKBOiuFRhTyPXUt1jWmgnydNwauj8CAiB3tixe8FjyoMIWPLlAZ6eq%2BnL0%2Fnnt7%2BGTGzWtc4ANvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bazkrm83EX2AjVVoKtwDYXqnWSRhHrg%2BuurabPxrbC674gLaBzo9dnIS3VCQULLuioKbsz9keedC4bWoV0SZSl3no6PnwRvfwP%2B2MVjdMLqq4svRM5hKxeLuI19cLCADnrelduxdcPHgwqv660%2Fhy%2BBWI3%2BWth9Q%2BSQ%2BNAhsWxDPH%2F1CiBOxuKv667tH1xBp8EaFWfmXUeAP8QORc2QHoa3U2xYp3uyZepugiPUy2v3OGNGNGlxRpB8zmEdnI8vAEyyZngoIF0TjuRxvj5%2FtTYqGOUhBOU4lcd3xx4DPCxqKjfIBW0VphDgwk4UB26gtAZKyRNm7qUIKGHmwd4SlNWmeuXbydl6kNfd68yC%2F0QJHhjNfjPYOmU1BFCmBiHlDK8rLJ51z5uthR4REeTPNA3m%2BftOzPTqkwxE4GZmsocP%2F%2BwANurAgGmIle2hzn0uKWD4YIog3yrvdoCabvuzcDyjDeTyXIioppUvYj8Fg7nTj3aLC07S%2FTPxYRpK8S95sqfzNmd%2FX2sdsWZynjJioTjd1zzXhnO2FkyXxBIDC%2BWoTO6Txcvf8bZQ6OdacsW2LbMyBbAsVZC7EtFTFNnuSwb2tmCFBPHiO23Oj5%2BGls3WiIlihcC17ythLlsKoLv3sQbRZH%2FkrpOonR1owiqn9wAY6pgFb8lZsEKDxnEpIZaJeeO9NDZCWS8x%2FkYSb%2BGYBYb%2B0%2F7kcAOzGzhOz6S3GX5mGMgrn%2Fc1FBe04kMlAFyPV0JAzC4UuBJMq7702%2BPL4Sj1GUcqDwEiSNMj%2BURIWOdpg0fKU%2Bz%2BUO0Yt03R8DuqcHZCKyZlkgRzb6rSp7FDDF2VyUTn%2B%2F9SxqYgTeehcq5kmWihA3XoVBQvpReqr%2BJ7gIHk26w16WQw7&X-Amz-Signature=d0f2a481d035447877183ec26bc678777b71850f88a95483a980d807e97f73a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67LADA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCdql2EDDh6%2BkAKBOiuFRhTyPXUt1jWmgnydNwauj8CAiB3tixe8FjyoMIWPLlAZ6eq%2BnL0%2Fnnt7%2BGTGzWtc4ANvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bazkrm83EX2AjVVoKtwDYXqnWSRhHrg%2BuurabPxrbC674gLaBzo9dnIS3VCQULLuioKbsz9keedC4bWoV0SZSl3no6PnwRvfwP%2B2MVjdMLqq4svRM5hKxeLuI19cLCADnrelduxdcPHgwqv660%2Fhy%2BBWI3%2BWth9Q%2BSQ%2BNAhsWxDPH%2F1CiBOxuKv667tH1xBp8EaFWfmXUeAP8QORc2QHoa3U2xYp3uyZepugiPUy2v3OGNGNGlxRpB8zmEdnI8vAEyyZngoIF0TjuRxvj5%2FtTYqGOUhBOU4lcd3xx4DPCxqKjfIBW0VphDgwk4UB26gtAZKyRNm7qUIKGHmwd4SlNWmeuXbydl6kNfd68yC%2F0QJHhjNfjPYOmU1BFCmBiHlDK8rLJ51z5uthR4REeTPNA3m%2BftOzPTqkwxE4GZmsocP%2F%2BwANurAgGmIle2hzn0uKWD4YIog3yrvdoCabvuzcDyjDeTyXIioppUvYj8Fg7nTj3aLC07S%2FTPxYRpK8S95sqfzNmd%2FX2sdsWZynjJioTjd1zzXhnO2FkyXxBIDC%2BWoTO6Txcvf8bZQ6OdacsW2LbMyBbAsVZC7EtFTFNnuSwb2tmCFBPHiO23Oj5%2BGls3WiIlihcC17ythLlsKoLv3sQbRZH%2FkrpOonR1owiqn9wAY6pgFb8lZsEKDxnEpIZaJeeO9NDZCWS8x%2FkYSb%2BGYBYb%2B0%2F7kcAOzGzhOz6S3GX5mGMgrn%2Fc1FBe04kMlAFyPV0JAzC4UuBJMq7702%2BPL4Sj1GUcqDwEiSNMj%2BURIWOdpg0fKU%2Bz%2BUO0Yt03R8DuqcHZCKyZlkgRzb6rSp7FDDF2VyUTn%2B%2F9SxqYgTeehcq5kmWihA3XoVBQvpReqr%2BJ7gIHk26w16WQw7&X-Amz-Signature=411a8b1d1ccb68e42ff35d054f8989f1186b0e130fdb3a1202f9213354c27b95&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67LADA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCdql2EDDh6%2BkAKBOiuFRhTyPXUt1jWmgnydNwauj8CAiB3tixe8FjyoMIWPLlAZ6eq%2BnL0%2Fnnt7%2BGTGzWtc4ANvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bazkrm83EX2AjVVoKtwDYXqnWSRhHrg%2BuurabPxrbC674gLaBzo9dnIS3VCQULLuioKbsz9keedC4bWoV0SZSl3no6PnwRvfwP%2B2MVjdMLqq4svRM5hKxeLuI19cLCADnrelduxdcPHgwqv660%2Fhy%2BBWI3%2BWth9Q%2BSQ%2BNAhsWxDPH%2F1CiBOxuKv667tH1xBp8EaFWfmXUeAP8QORc2QHoa3U2xYp3uyZepugiPUy2v3OGNGNGlxRpB8zmEdnI8vAEyyZngoIF0TjuRxvj5%2FtTYqGOUhBOU4lcd3xx4DPCxqKjfIBW0VphDgwk4UB26gtAZKyRNm7qUIKGHmwd4SlNWmeuXbydl6kNfd68yC%2F0QJHhjNfjPYOmU1BFCmBiHlDK8rLJ51z5uthR4REeTPNA3m%2BftOzPTqkwxE4GZmsocP%2F%2BwANurAgGmIle2hzn0uKWD4YIog3yrvdoCabvuzcDyjDeTyXIioppUvYj8Fg7nTj3aLC07S%2FTPxYRpK8S95sqfzNmd%2FX2sdsWZynjJioTjd1zzXhnO2FkyXxBIDC%2BWoTO6Txcvf8bZQ6OdacsW2LbMyBbAsVZC7EtFTFNnuSwb2tmCFBPHiO23Oj5%2BGls3WiIlihcC17ythLlsKoLv3sQbRZH%2FkrpOonR1owiqn9wAY6pgFb8lZsEKDxnEpIZaJeeO9NDZCWS8x%2FkYSb%2BGYBYb%2B0%2F7kcAOzGzhOz6S3GX5mGMgrn%2Fc1FBe04kMlAFyPV0JAzC4UuBJMq7702%2BPL4Sj1GUcqDwEiSNMj%2BURIWOdpg0fKU%2Bz%2BUO0Yt03R8DuqcHZCKyZlkgRzb6rSp7FDDF2VyUTn%2B%2F9SxqYgTeehcq5kmWihA3XoVBQvpReqr%2BJ7gIHk26w16WQw7&X-Amz-Signature=d7bec63c3fe7c5b25a275b8c60e08e4e9ad6bae646fdd1f850d5b62d5d95c745&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67LADA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCdql2EDDh6%2BkAKBOiuFRhTyPXUt1jWmgnydNwauj8CAiB3tixe8FjyoMIWPLlAZ6eq%2BnL0%2Fnnt7%2BGTGzWtc4ANvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bazkrm83EX2AjVVoKtwDYXqnWSRhHrg%2BuurabPxrbC674gLaBzo9dnIS3VCQULLuioKbsz9keedC4bWoV0SZSl3no6PnwRvfwP%2B2MVjdMLqq4svRM5hKxeLuI19cLCADnrelduxdcPHgwqv660%2Fhy%2BBWI3%2BWth9Q%2BSQ%2BNAhsWxDPH%2F1CiBOxuKv667tH1xBp8EaFWfmXUeAP8QORc2QHoa3U2xYp3uyZepugiPUy2v3OGNGNGlxRpB8zmEdnI8vAEyyZngoIF0TjuRxvj5%2FtTYqGOUhBOU4lcd3xx4DPCxqKjfIBW0VphDgwk4UB26gtAZKyRNm7qUIKGHmwd4SlNWmeuXbydl6kNfd68yC%2F0QJHhjNfjPYOmU1BFCmBiHlDK8rLJ51z5uthR4REeTPNA3m%2BftOzPTqkwxE4GZmsocP%2F%2BwANurAgGmIle2hzn0uKWD4YIog3yrvdoCabvuzcDyjDeTyXIioppUvYj8Fg7nTj3aLC07S%2FTPxYRpK8S95sqfzNmd%2FX2sdsWZynjJioTjd1zzXhnO2FkyXxBIDC%2BWoTO6Txcvf8bZQ6OdacsW2LbMyBbAsVZC7EtFTFNnuSwb2tmCFBPHiO23Oj5%2BGls3WiIlihcC17ythLlsKoLv3sQbRZH%2FkrpOonR1owiqn9wAY6pgFb8lZsEKDxnEpIZaJeeO9NDZCWS8x%2FkYSb%2BGYBYb%2B0%2F7kcAOzGzhOz6S3GX5mGMgrn%2Fc1FBe04kMlAFyPV0JAzC4UuBJMq7702%2BPL4Sj1GUcqDwEiSNMj%2BURIWOdpg0fKU%2Bz%2BUO0Yt03R8DuqcHZCKyZlkgRzb6rSp7FDDF2VyUTn%2B%2F9SxqYgTeehcq5kmWihA3XoVBQvpReqr%2BJ7gIHk26w16WQw7&X-Amz-Signature=2ad6b66e2d229cd94117d3a3136817700fa42f04773ec2ce1bd5639a0a237747&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67LADA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCdql2EDDh6%2BkAKBOiuFRhTyPXUt1jWmgnydNwauj8CAiB3tixe8FjyoMIWPLlAZ6eq%2BnL0%2Fnnt7%2BGTGzWtc4ANvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bazkrm83EX2AjVVoKtwDYXqnWSRhHrg%2BuurabPxrbC674gLaBzo9dnIS3VCQULLuioKbsz9keedC4bWoV0SZSl3no6PnwRvfwP%2B2MVjdMLqq4svRM5hKxeLuI19cLCADnrelduxdcPHgwqv660%2Fhy%2BBWI3%2BWth9Q%2BSQ%2BNAhsWxDPH%2F1CiBOxuKv667tH1xBp8EaFWfmXUeAP8QORc2QHoa3U2xYp3uyZepugiPUy2v3OGNGNGlxRpB8zmEdnI8vAEyyZngoIF0TjuRxvj5%2FtTYqGOUhBOU4lcd3xx4DPCxqKjfIBW0VphDgwk4UB26gtAZKyRNm7qUIKGHmwd4SlNWmeuXbydl6kNfd68yC%2F0QJHhjNfjPYOmU1BFCmBiHlDK8rLJ51z5uthR4REeTPNA3m%2BftOzPTqkwxE4GZmsocP%2F%2BwANurAgGmIle2hzn0uKWD4YIog3yrvdoCabvuzcDyjDeTyXIioppUvYj8Fg7nTj3aLC07S%2FTPxYRpK8S95sqfzNmd%2FX2sdsWZynjJioTjd1zzXhnO2FkyXxBIDC%2BWoTO6Txcvf8bZQ6OdacsW2LbMyBbAsVZC7EtFTFNnuSwb2tmCFBPHiO23Oj5%2BGls3WiIlihcC17ythLlsKoLv3sQbRZH%2FkrpOonR1owiqn9wAY6pgFb8lZsEKDxnEpIZaJeeO9NDZCWS8x%2FkYSb%2BGYBYb%2B0%2F7kcAOzGzhOz6S3GX5mGMgrn%2Fc1FBe04kMlAFyPV0JAzC4UuBJMq7702%2BPL4Sj1GUcqDwEiSNMj%2BURIWOdpg0fKU%2Bz%2BUO0Yt03R8DuqcHZCKyZlkgRzb6rSp7FDDF2VyUTn%2B%2F9SxqYgTeehcq5kmWihA3XoVBQvpReqr%2BJ7gIHk26w16WQw7&X-Amz-Signature=96323870332db473430f59ec6f755e9641fbffcec43ba56ac0c203a14945d21b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67LADA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCdql2EDDh6%2BkAKBOiuFRhTyPXUt1jWmgnydNwauj8CAiB3tixe8FjyoMIWPLlAZ6eq%2BnL0%2Fnnt7%2BGTGzWtc4ANvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bazkrm83EX2AjVVoKtwDYXqnWSRhHrg%2BuurabPxrbC674gLaBzo9dnIS3VCQULLuioKbsz9keedC4bWoV0SZSl3no6PnwRvfwP%2B2MVjdMLqq4svRM5hKxeLuI19cLCADnrelduxdcPHgwqv660%2Fhy%2BBWI3%2BWth9Q%2BSQ%2BNAhsWxDPH%2F1CiBOxuKv667tH1xBp8EaFWfmXUeAP8QORc2QHoa3U2xYp3uyZepugiPUy2v3OGNGNGlxRpB8zmEdnI8vAEyyZngoIF0TjuRxvj5%2FtTYqGOUhBOU4lcd3xx4DPCxqKjfIBW0VphDgwk4UB26gtAZKyRNm7qUIKGHmwd4SlNWmeuXbydl6kNfd68yC%2F0QJHhjNfjPYOmU1BFCmBiHlDK8rLJ51z5uthR4REeTPNA3m%2BftOzPTqkwxE4GZmsocP%2F%2BwANurAgGmIle2hzn0uKWD4YIog3yrvdoCabvuzcDyjDeTyXIioppUvYj8Fg7nTj3aLC07S%2FTPxYRpK8S95sqfzNmd%2FX2sdsWZynjJioTjd1zzXhnO2FkyXxBIDC%2BWoTO6Txcvf8bZQ6OdacsW2LbMyBbAsVZC7EtFTFNnuSwb2tmCFBPHiO23Oj5%2BGls3WiIlihcC17ythLlsKoLv3sQbRZH%2FkrpOonR1owiqn9wAY6pgFb8lZsEKDxnEpIZaJeeO9NDZCWS8x%2FkYSb%2BGYBYb%2B0%2F7kcAOzGzhOz6S3GX5mGMgrn%2Fc1FBe04kMlAFyPV0JAzC4UuBJMq7702%2BPL4Sj1GUcqDwEiSNMj%2BURIWOdpg0fKU%2Bz%2BUO0Yt03R8DuqcHZCKyZlkgRzb6rSp7FDDF2VyUTn%2B%2F9SxqYgTeehcq5kmWihA3XoVBQvpReqr%2BJ7gIHk26w16WQw7&X-Amz-Signature=98f849a2b905ec6f9b9914d9039aac15ce93b64941ac54c539f044b304bf550a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT67LADA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCdql2EDDh6%2BkAKBOiuFRhTyPXUt1jWmgnydNwauj8CAiB3tixe8FjyoMIWPLlAZ6eq%2BnL0%2Fnnt7%2BGTGzWtc4ANvyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bazkrm83EX2AjVVoKtwDYXqnWSRhHrg%2BuurabPxrbC674gLaBzo9dnIS3VCQULLuioKbsz9keedC4bWoV0SZSl3no6PnwRvfwP%2B2MVjdMLqq4svRM5hKxeLuI19cLCADnrelduxdcPHgwqv660%2Fhy%2BBWI3%2BWth9Q%2BSQ%2BNAhsWxDPH%2F1CiBOxuKv667tH1xBp8EaFWfmXUeAP8QORc2QHoa3U2xYp3uyZepugiPUy2v3OGNGNGlxRpB8zmEdnI8vAEyyZngoIF0TjuRxvj5%2FtTYqGOUhBOU4lcd3xx4DPCxqKjfIBW0VphDgwk4UB26gtAZKyRNm7qUIKGHmwd4SlNWmeuXbydl6kNfd68yC%2F0QJHhjNfjPYOmU1BFCmBiHlDK8rLJ51z5uthR4REeTPNA3m%2BftOzPTqkwxE4GZmsocP%2F%2BwANurAgGmIle2hzn0uKWD4YIog3yrvdoCabvuzcDyjDeTyXIioppUvYj8Fg7nTj3aLC07S%2FTPxYRpK8S95sqfzNmd%2FX2sdsWZynjJioTjd1zzXhnO2FkyXxBIDC%2BWoTO6Txcvf8bZQ6OdacsW2LbMyBbAsVZC7EtFTFNnuSwb2tmCFBPHiO23Oj5%2BGls3WiIlihcC17ythLlsKoLv3sQbRZH%2FkrpOonR1owiqn9wAY6pgFb8lZsEKDxnEpIZaJeeO9NDZCWS8x%2FkYSb%2BGYBYb%2B0%2F7kcAOzGzhOz6S3GX5mGMgrn%2Fc1FBe04kMlAFyPV0JAzC4UuBJMq7702%2BPL4Sj1GUcqDwEiSNMj%2BURIWOdpg0fKU%2Bz%2BUO0Yt03R8DuqcHZCKyZlkgRzb6rSp7FDDF2VyUTn%2B%2F9SxqYgTeehcq5kmWihA3XoVBQvpReqr%2BJ7gIHk26w16WQw7&X-Amz-Signature=36c84391ef718da7f302e8172bfffa814fcbaa086ce43a9d191bfce25f680e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
