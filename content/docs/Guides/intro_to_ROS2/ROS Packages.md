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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCB6RDV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbKrCSkwQdNT0xkexgtOAzxiHvk%2B6NCjAUg2QZvAbshwIhAIv5yGXeNKg%2F8Z6nCwYIuB3BYnhRR2Zlp9xjSL50U2JOKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC%2Bqqr2po84xxdyTIq3AOMXQZyX8VNZp0pS4VWPvMkFKoj7d3TXcSc7LyR49B%2Bw4CfabVDtSqj6FEAwvMtlOmVm0j1Jyjk8wS3bITXz8GAqq%2BW6fbhngahkXgdMNZrIhhGXWiQUJXEx7qNF%2F6%2BFUtukriuCvLogTqMpKYCeV25KQ43pN4JTQQOQnkghWp1N4dkc%2BBc5PVgVN9decEqW4UcKVYHFWjdbFqcGGmpr%2BD9n1jAYG2NgUxSqrRahtsStfOhng4w5prO5Vf7%2BDC0GsnkCSAuZLllEi2yfcvWNlG0lFKjM4QhaOA0Knd2QXnYFuu%2F7Ety7q%2FscN3KdLdSVMUOVrvBYqm4uPEcluF9%2FTwhFDN%2B1MmhtCeUjoHnskUwp4zYGsFOQmjfY1vzyyZuKO8MSkF%2B7pZ%2Ff41MPIQoYYvn9AYb6xdn%2BhidjbzVXkvk7FDAQViG6E0GBpBP8AOaVS5lt3Xdu2RRObKo6i%2BZMbBpygMxw5BS4XSuaSoq2eqywZ%2BgGF6jbK3QdxzIJah3NbvhN6i%2BC1QJrl10dpcJvDA9HaFO0n%2BXpmigsTy7TxObsBKakQsfUn31GfvuFV4K92%2FLukGzwIN9%2BTG5iFgzAiRzjcdkFyCuWNlWQaTbh%2BKjoCruCTKVRtsG9Bx0WzCNlrjEBjqkATIlTLiCRLJXpg41SoE%2FnfLQj1Ht%2F9RYuvATo%2FFwdgY1RULDK28z%2BsCUpBTE4QWMHCqx64bMFe9VZDAn1ljS6mzbxyKnChyxh%2BP%2FGpxoSD%2FucgdxUKKj1CXJANCGL9PWNq%2B5qVM8nGSxrG3OC8fTlNfDik%2FFL%2BwjCoAUn1%2Bmm%2FU9Fe%2BvAcrkTcPQsdF1qaICjHSkdhmmldducxq2aLjQfjkSgsea&X-Amz-Signature=e3bc135971dd49b6dba0f646104a087572d1bdd962e6b4973f9314af86dc7e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCB6RDV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbKrCSkwQdNT0xkexgtOAzxiHvk%2B6NCjAUg2QZvAbshwIhAIv5yGXeNKg%2F8Z6nCwYIuB3BYnhRR2Zlp9xjSL50U2JOKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC%2Bqqr2po84xxdyTIq3AOMXQZyX8VNZp0pS4VWPvMkFKoj7d3TXcSc7LyR49B%2Bw4CfabVDtSqj6FEAwvMtlOmVm0j1Jyjk8wS3bITXz8GAqq%2BW6fbhngahkXgdMNZrIhhGXWiQUJXEx7qNF%2F6%2BFUtukriuCvLogTqMpKYCeV25KQ43pN4JTQQOQnkghWp1N4dkc%2BBc5PVgVN9decEqW4UcKVYHFWjdbFqcGGmpr%2BD9n1jAYG2NgUxSqrRahtsStfOhng4w5prO5Vf7%2BDC0GsnkCSAuZLllEi2yfcvWNlG0lFKjM4QhaOA0Knd2QXnYFuu%2F7Ety7q%2FscN3KdLdSVMUOVrvBYqm4uPEcluF9%2FTwhFDN%2B1MmhtCeUjoHnskUwp4zYGsFOQmjfY1vzyyZuKO8MSkF%2B7pZ%2Ff41MPIQoYYvn9AYb6xdn%2BhidjbzVXkvk7FDAQViG6E0GBpBP8AOaVS5lt3Xdu2RRObKo6i%2BZMbBpygMxw5BS4XSuaSoq2eqywZ%2BgGF6jbK3QdxzIJah3NbvhN6i%2BC1QJrl10dpcJvDA9HaFO0n%2BXpmigsTy7TxObsBKakQsfUn31GfvuFV4K92%2FLukGzwIN9%2BTG5iFgzAiRzjcdkFyCuWNlWQaTbh%2BKjoCruCTKVRtsG9Bx0WzCNlrjEBjqkATIlTLiCRLJXpg41SoE%2FnfLQj1Ht%2F9RYuvATo%2FFwdgY1RULDK28z%2BsCUpBTE4QWMHCqx64bMFe9VZDAn1ljS6mzbxyKnChyxh%2BP%2FGpxoSD%2FucgdxUKKj1CXJANCGL9PWNq%2B5qVM8nGSxrG3OC8fTlNfDik%2FFL%2BwjCoAUn1%2Bmm%2FU9Fe%2BvAcrkTcPQsdF1qaICjHSkdhmmldducxq2aLjQfjkSgsea&X-Amz-Signature=b84831ab6291d617d6a710b9c03deba00dcf5dba0474a2e76c52a6072a1566ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCB6RDV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbKrCSkwQdNT0xkexgtOAzxiHvk%2B6NCjAUg2QZvAbshwIhAIv5yGXeNKg%2F8Z6nCwYIuB3BYnhRR2Zlp9xjSL50U2JOKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC%2Bqqr2po84xxdyTIq3AOMXQZyX8VNZp0pS4VWPvMkFKoj7d3TXcSc7LyR49B%2Bw4CfabVDtSqj6FEAwvMtlOmVm0j1Jyjk8wS3bITXz8GAqq%2BW6fbhngahkXgdMNZrIhhGXWiQUJXEx7qNF%2F6%2BFUtukriuCvLogTqMpKYCeV25KQ43pN4JTQQOQnkghWp1N4dkc%2BBc5PVgVN9decEqW4UcKVYHFWjdbFqcGGmpr%2BD9n1jAYG2NgUxSqrRahtsStfOhng4w5prO5Vf7%2BDC0GsnkCSAuZLllEi2yfcvWNlG0lFKjM4QhaOA0Knd2QXnYFuu%2F7Ety7q%2FscN3KdLdSVMUOVrvBYqm4uPEcluF9%2FTwhFDN%2B1MmhtCeUjoHnskUwp4zYGsFOQmjfY1vzyyZuKO8MSkF%2B7pZ%2Ff41MPIQoYYvn9AYb6xdn%2BhidjbzVXkvk7FDAQViG6E0GBpBP8AOaVS5lt3Xdu2RRObKo6i%2BZMbBpygMxw5BS4XSuaSoq2eqywZ%2BgGF6jbK3QdxzIJah3NbvhN6i%2BC1QJrl10dpcJvDA9HaFO0n%2BXpmigsTy7TxObsBKakQsfUn31GfvuFV4K92%2FLukGzwIN9%2BTG5iFgzAiRzjcdkFyCuWNlWQaTbh%2BKjoCruCTKVRtsG9Bx0WzCNlrjEBjqkATIlTLiCRLJXpg41SoE%2FnfLQj1Ht%2F9RYuvATo%2FFwdgY1RULDK28z%2BsCUpBTE4QWMHCqx64bMFe9VZDAn1ljS6mzbxyKnChyxh%2BP%2FGpxoSD%2FucgdxUKKj1CXJANCGL9PWNq%2B5qVM8nGSxrG3OC8fTlNfDik%2FFL%2BwjCoAUn1%2Bmm%2FU9Fe%2BvAcrkTcPQsdF1qaICjHSkdhmmldducxq2aLjQfjkSgsea&X-Amz-Signature=bd074d0ce23e53fa4d48dca098daca347aa08a93527fe508321cb3b8f0fca1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCB6RDV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbKrCSkwQdNT0xkexgtOAzxiHvk%2B6NCjAUg2QZvAbshwIhAIv5yGXeNKg%2F8Z6nCwYIuB3BYnhRR2Zlp9xjSL50U2JOKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC%2Bqqr2po84xxdyTIq3AOMXQZyX8VNZp0pS4VWPvMkFKoj7d3TXcSc7LyR49B%2Bw4CfabVDtSqj6FEAwvMtlOmVm0j1Jyjk8wS3bITXz8GAqq%2BW6fbhngahkXgdMNZrIhhGXWiQUJXEx7qNF%2F6%2BFUtukriuCvLogTqMpKYCeV25KQ43pN4JTQQOQnkghWp1N4dkc%2BBc5PVgVN9decEqW4UcKVYHFWjdbFqcGGmpr%2BD9n1jAYG2NgUxSqrRahtsStfOhng4w5prO5Vf7%2BDC0GsnkCSAuZLllEi2yfcvWNlG0lFKjM4QhaOA0Knd2QXnYFuu%2F7Ety7q%2FscN3KdLdSVMUOVrvBYqm4uPEcluF9%2FTwhFDN%2B1MmhtCeUjoHnskUwp4zYGsFOQmjfY1vzyyZuKO8MSkF%2B7pZ%2Ff41MPIQoYYvn9AYb6xdn%2BhidjbzVXkvk7FDAQViG6E0GBpBP8AOaVS5lt3Xdu2RRObKo6i%2BZMbBpygMxw5BS4XSuaSoq2eqywZ%2BgGF6jbK3QdxzIJah3NbvhN6i%2BC1QJrl10dpcJvDA9HaFO0n%2BXpmigsTy7TxObsBKakQsfUn31GfvuFV4K92%2FLukGzwIN9%2BTG5iFgzAiRzjcdkFyCuWNlWQaTbh%2BKjoCruCTKVRtsG9Bx0WzCNlrjEBjqkATIlTLiCRLJXpg41SoE%2FnfLQj1Ht%2F9RYuvATo%2FFwdgY1RULDK28z%2BsCUpBTE4QWMHCqx64bMFe9VZDAn1ljS6mzbxyKnChyxh%2BP%2FGpxoSD%2FucgdxUKKj1CXJANCGL9PWNq%2B5qVM8nGSxrG3OC8fTlNfDik%2FFL%2BwjCoAUn1%2Bmm%2FU9Fe%2BvAcrkTcPQsdF1qaICjHSkdhmmldducxq2aLjQfjkSgsea&X-Amz-Signature=167c5d3e2148d90eab8227acd1df67eb79d194a9732775c632b203dce116fe39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCB6RDV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbKrCSkwQdNT0xkexgtOAzxiHvk%2B6NCjAUg2QZvAbshwIhAIv5yGXeNKg%2F8Z6nCwYIuB3BYnhRR2Zlp9xjSL50U2JOKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC%2Bqqr2po84xxdyTIq3AOMXQZyX8VNZp0pS4VWPvMkFKoj7d3TXcSc7LyR49B%2Bw4CfabVDtSqj6FEAwvMtlOmVm0j1Jyjk8wS3bITXz8GAqq%2BW6fbhngahkXgdMNZrIhhGXWiQUJXEx7qNF%2F6%2BFUtukriuCvLogTqMpKYCeV25KQ43pN4JTQQOQnkghWp1N4dkc%2BBc5PVgVN9decEqW4UcKVYHFWjdbFqcGGmpr%2BD9n1jAYG2NgUxSqrRahtsStfOhng4w5prO5Vf7%2BDC0GsnkCSAuZLllEi2yfcvWNlG0lFKjM4QhaOA0Knd2QXnYFuu%2F7Ety7q%2FscN3KdLdSVMUOVrvBYqm4uPEcluF9%2FTwhFDN%2B1MmhtCeUjoHnskUwp4zYGsFOQmjfY1vzyyZuKO8MSkF%2B7pZ%2Ff41MPIQoYYvn9AYb6xdn%2BhidjbzVXkvk7FDAQViG6E0GBpBP8AOaVS5lt3Xdu2RRObKo6i%2BZMbBpygMxw5BS4XSuaSoq2eqywZ%2BgGF6jbK3QdxzIJah3NbvhN6i%2BC1QJrl10dpcJvDA9HaFO0n%2BXpmigsTy7TxObsBKakQsfUn31GfvuFV4K92%2FLukGzwIN9%2BTG5iFgzAiRzjcdkFyCuWNlWQaTbh%2BKjoCruCTKVRtsG9Bx0WzCNlrjEBjqkATIlTLiCRLJXpg41SoE%2FnfLQj1Ht%2F9RYuvATo%2FFwdgY1RULDK28z%2BsCUpBTE4QWMHCqx64bMFe9VZDAn1ljS6mzbxyKnChyxh%2BP%2FGpxoSD%2FucgdxUKKj1CXJANCGL9PWNq%2B5qVM8nGSxrG3OC8fTlNfDik%2FFL%2BwjCoAUn1%2Bmm%2FU9Fe%2BvAcrkTcPQsdF1qaICjHSkdhmmldducxq2aLjQfjkSgsea&X-Amz-Signature=b74aa0acd010fdedc75fe7d2cf69099995baf87ecf83048c7e714c8c9351f730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCB6RDV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbKrCSkwQdNT0xkexgtOAzxiHvk%2B6NCjAUg2QZvAbshwIhAIv5yGXeNKg%2F8Z6nCwYIuB3BYnhRR2Zlp9xjSL50U2JOKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC%2Bqqr2po84xxdyTIq3AOMXQZyX8VNZp0pS4VWPvMkFKoj7d3TXcSc7LyR49B%2Bw4CfabVDtSqj6FEAwvMtlOmVm0j1Jyjk8wS3bITXz8GAqq%2BW6fbhngahkXgdMNZrIhhGXWiQUJXEx7qNF%2F6%2BFUtukriuCvLogTqMpKYCeV25KQ43pN4JTQQOQnkghWp1N4dkc%2BBc5PVgVN9decEqW4UcKVYHFWjdbFqcGGmpr%2BD9n1jAYG2NgUxSqrRahtsStfOhng4w5prO5Vf7%2BDC0GsnkCSAuZLllEi2yfcvWNlG0lFKjM4QhaOA0Knd2QXnYFuu%2F7Ety7q%2FscN3KdLdSVMUOVrvBYqm4uPEcluF9%2FTwhFDN%2B1MmhtCeUjoHnskUwp4zYGsFOQmjfY1vzyyZuKO8MSkF%2B7pZ%2Ff41MPIQoYYvn9AYb6xdn%2BhidjbzVXkvk7FDAQViG6E0GBpBP8AOaVS5lt3Xdu2RRObKo6i%2BZMbBpygMxw5BS4XSuaSoq2eqywZ%2BgGF6jbK3QdxzIJah3NbvhN6i%2BC1QJrl10dpcJvDA9HaFO0n%2BXpmigsTy7TxObsBKakQsfUn31GfvuFV4K92%2FLukGzwIN9%2BTG5iFgzAiRzjcdkFyCuWNlWQaTbh%2BKjoCruCTKVRtsG9Bx0WzCNlrjEBjqkATIlTLiCRLJXpg41SoE%2FnfLQj1Ht%2F9RYuvATo%2FFwdgY1RULDK28z%2BsCUpBTE4QWMHCqx64bMFe9VZDAn1ljS6mzbxyKnChyxh%2BP%2FGpxoSD%2FucgdxUKKj1CXJANCGL9PWNq%2B5qVM8nGSxrG3OC8fTlNfDik%2FFL%2BwjCoAUn1%2Bmm%2FU9Fe%2BvAcrkTcPQsdF1qaICjHSkdhmmldducxq2aLjQfjkSgsea&X-Amz-Signature=2b0aa19c1292dc1fe6a76a3248d8527b7479e90d80112bc3e894dd68680a9961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCB6RDV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbKrCSkwQdNT0xkexgtOAzxiHvk%2B6NCjAUg2QZvAbshwIhAIv5yGXeNKg%2F8Z6nCwYIuB3BYnhRR2Zlp9xjSL50U2JOKv8DCBYQABoMNjM3NDIzMTgzODA1IgwC%2Bqqr2po84xxdyTIq3AOMXQZyX8VNZp0pS4VWPvMkFKoj7d3TXcSc7LyR49B%2Bw4CfabVDtSqj6FEAwvMtlOmVm0j1Jyjk8wS3bITXz8GAqq%2BW6fbhngahkXgdMNZrIhhGXWiQUJXEx7qNF%2F6%2BFUtukriuCvLogTqMpKYCeV25KQ43pN4JTQQOQnkghWp1N4dkc%2BBc5PVgVN9decEqW4UcKVYHFWjdbFqcGGmpr%2BD9n1jAYG2NgUxSqrRahtsStfOhng4w5prO5Vf7%2BDC0GsnkCSAuZLllEi2yfcvWNlG0lFKjM4QhaOA0Knd2QXnYFuu%2F7Ety7q%2FscN3KdLdSVMUOVrvBYqm4uPEcluF9%2FTwhFDN%2B1MmhtCeUjoHnskUwp4zYGsFOQmjfY1vzyyZuKO8MSkF%2B7pZ%2Ff41MPIQoYYvn9AYb6xdn%2BhidjbzVXkvk7FDAQViG6E0GBpBP8AOaVS5lt3Xdu2RRObKo6i%2BZMbBpygMxw5BS4XSuaSoq2eqywZ%2BgGF6jbK3QdxzIJah3NbvhN6i%2BC1QJrl10dpcJvDA9HaFO0n%2BXpmigsTy7TxObsBKakQsfUn31GfvuFV4K92%2FLukGzwIN9%2BTG5iFgzAiRzjcdkFyCuWNlWQaTbh%2BKjoCruCTKVRtsG9Bx0WzCNlrjEBjqkATIlTLiCRLJXpg41SoE%2FnfLQj1Ht%2F9RYuvATo%2FFwdgY1RULDK28z%2BsCUpBTE4QWMHCqx64bMFe9VZDAn1ljS6mzbxyKnChyxh%2BP%2FGpxoSD%2FucgdxUKKj1CXJANCGL9PWNq%2B5qVM8nGSxrG3OC8fTlNfDik%2FFL%2BwjCoAUn1%2Bmm%2FU9Fe%2BvAcrkTcPQsdF1qaICjHSkdhmmldducxq2aLjQfjkSgsea&X-Amz-Signature=96380f36a8c9fd8b14aa124c86fccfebc9c8384f32a7de0859f158866c569a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
