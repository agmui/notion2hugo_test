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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7JGQG4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEb5bGDjeydJmdB%2FJy2Oe2AvYtaxIrVk9xMJMY1rBaPFAiEAs1mhVrrcoVMrZqi19lAYXeloJ6oRuCHHEEw168SpXsoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBwuCWGpwU05HL46DircA5X9rwQfwxCjXpdjbvU6l5imGTR7GexJhKI5a9ubdgK%2FvuszReK5Ap%2Bt9%2F20CglKUCfY8abu4%2FJvkXUkpZV1NwjFSG73iBQl%2FCXK3pbNeLsA%2FXQyJN6yaPfA4oHx2%2ByGu82LD56R1Qe0FWByt1uByc7xRxcF2W31HFDSlOtF9AR26gTWbG2N0hjSReW4Zi5MFaOXObEwVOiNtKEa9CUkR2sOURo9ENJdKGSOR6f6my0F6lmjTDiJFwgvcAAl%2FcfTY%2BGY7Yu3tZof4fdmTf7a%2B15u7A6dai4cOapH1KeHnPxxBoht83gYOvFrs7aFHPZ8%2Bz8epUETpvFbVNoyPE%2Bm7oSNrum1ER3LW6OS5Yxm71nEGh5iInHuz2EkSrPZ%2BO7SB37tyBkiuurFPUXGexjwmIRK051l9I1VZGZa3MjhSK5v6g8JiaFXmtoiykcOSNz9u2sLeAWEx8ERW5EoChNVeVoaB9KwAESjW7dd670S6Sp7nnDuhlhrwdLpwAkStGRdTLHEfqCbPlmw5Pc1BbNSWLa7%2BztH0dl3LNvovfcXBqoVlnod1MDRQSNtN5JPPlBfJSi8XRafuDCqYwlrEGHvNC6f2DEr9Kk7OKEEf2n66IdP3q2e62%2FOQvsJBo5NMOiq0cEGOqUBhSnxgV2lOZUXG%2FiJp2xLdBLkDPz28r8HYE4qhainR8EJio93ymhJ56VB63mln5lHlKt1ejL2B32zYhtL7T22NTAxvOFbzLR4Z3cHBw8xPzf6yXT7030NNninwX2C06Uw3ylinLj8zOH5MJGbWf9BQlB%2FibeVjbDuaemFdHf%2BGr1y6nnnlFJhSoTalZzvrQprrv8j2Y59fM032YYQV3WXve558VZ5&X-Amz-Signature=e41e211228a917023db361faa558a510f7e2a2d0f793a1f4cfdf7df43d5a4d11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7JGQG4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEb5bGDjeydJmdB%2FJy2Oe2AvYtaxIrVk9xMJMY1rBaPFAiEAs1mhVrrcoVMrZqi19lAYXeloJ6oRuCHHEEw168SpXsoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBwuCWGpwU05HL46DircA5X9rwQfwxCjXpdjbvU6l5imGTR7GexJhKI5a9ubdgK%2FvuszReK5Ap%2Bt9%2F20CglKUCfY8abu4%2FJvkXUkpZV1NwjFSG73iBQl%2FCXK3pbNeLsA%2FXQyJN6yaPfA4oHx2%2ByGu82LD56R1Qe0FWByt1uByc7xRxcF2W31HFDSlOtF9AR26gTWbG2N0hjSReW4Zi5MFaOXObEwVOiNtKEa9CUkR2sOURo9ENJdKGSOR6f6my0F6lmjTDiJFwgvcAAl%2FcfTY%2BGY7Yu3tZof4fdmTf7a%2B15u7A6dai4cOapH1KeHnPxxBoht83gYOvFrs7aFHPZ8%2Bz8epUETpvFbVNoyPE%2Bm7oSNrum1ER3LW6OS5Yxm71nEGh5iInHuz2EkSrPZ%2BO7SB37tyBkiuurFPUXGexjwmIRK051l9I1VZGZa3MjhSK5v6g8JiaFXmtoiykcOSNz9u2sLeAWEx8ERW5EoChNVeVoaB9KwAESjW7dd670S6Sp7nnDuhlhrwdLpwAkStGRdTLHEfqCbPlmw5Pc1BbNSWLa7%2BztH0dl3LNvovfcXBqoVlnod1MDRQSNtN5JPPlBfJSi8XRafuDCqYwlrEGHvNC6f2DEr9Kk7OKEEf2n66IdP3q2e62%2FOQvsJBo5NMOiq0cEGOqUBhSnxgV2lOZUXG%2FiJp2xLdBLkDPz28r8HYE4qhainR8EJio93ymhJ56VB63mln5lHlKt1ejL2B32zYhtL7T22NTAxvOFbzLR4Z3cHBw8xPzf6yXT7030NNninwX2C06Uw3ylinLj8zOH5MJGbWf9BQlB%2FibeVjbDuaemFdHf%2BGr1y6nnnlFJhSoTalZzvrQprrv8j2Y59fM032YYQV3WXve558VZ5&X-Amz-Signature=d572fd31ac2201731158d24099dc13079a0fd776126a9f5689a397ffd1964b73&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7JGQG4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEb5bGDjeydJmdB%2FJy2Oe2AvYtaxIrVk9xMJMY1rBaPFAiEAs1mhVrrcoVMrZqi19lAYXeloJ6oRuCHHEEw168SpXsoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBwuCWGpwU05HL46DircA5X9rwQfwxCjXpdjbvU6l5imGTR7GexJhKI5a9ubdgK%2FvuszReK5Ap%2Bt9%2F20CglKUCfY8abu4%2FJvkXUkpZV1NwjFSG73iBQl%2FCXK3pbNeLsA%2FXQyJN6yaPfA4oHx2%2ByGu82LD56R1Qe0FWByt1uByc7xRxcF2W31HFDSlOtF9AR26gTWbG2N0hjSReW4Zi5MFaOXObEwVOiNtKEa9CUkR2sOURo9ENJdKGSOR6f6my0F6lmjTDiJFwgvcAAl%2FcfTY%2BGY7Yu3tZof4fdmTf7a%2B15u7A6dai4cOapH1KeHnPxxBoht83gYOvFrs7aFHPZ8%2Bz8epUETpvFbVNoyPE%2Bm7oSNrum1ER3LW6OS5Yxm71nEGh5iInHuz2EkSrPZ%2BO7SB37tyBkiuurFPUXGexjwmIRK051l9I1VZGZa3MjhSK5v6g8JiaFXmtoiykcOSNz9u2sLeAWEx8ERW5EoChNVeVoaB9KwAESjW7dd670S6Sp7nnDuhlhrwdLpwAkStGRdTLHEfqCbPlmw5Pc1BbNSWLa7%2BztH0dl3LNvovfcXBqoVlnod1MDRQSNtN5JPPlBfJSi8XRafuDCqYwlrEGHvNC6f2DEr9Kk7OKEEf2n66IdP3q2e62%2FOQvsJBo5NMOiq0cEGOqUBhSnxgV2lOZUXG%2FiJp2xLdBLkDPz28r8HYE4qhainR8EJio93ymhJ56VB63mln5lHlKt1ejL2B32zYhtL7T22NTAxvOFbzLR4Z3cHBw8xPzf6yXT7030NNninwX2C06Uw3ylinLj8zOH5MJGbWf9BQlB%2FibeVjbDuaemFdHf%2BGr1y6nnnlFJhSoTalZzvrQprrv8j2Y59fM032YYQV3WXve558VZ5&X-Amz-Signature=d74e80275b5c7ca2a453ccd772730aa52e3ab26954ceb3e7593ec2434a6fade6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7JGQG4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEb5bGDjeydJmdB%2FJy2Oe2AvYtaxIrVk9xMJMY1rBaPFAiEAs1mhVrrcoVMrZqi19lAYXeloJ6oRuCHHEEw168SpXsoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBwuCWGpwU05HL46DircA5X9rwQfwxCjXpdjbvU6l5imGTR7GexJhKI5a9ubdgK%2FvuszReK5Ap%2Bt9%2F20CglKUCfY8abu4%2FJvkXUkpZV1NwjFSG73iBQl%2FCXK3pbNeLsA%2FXQyJN6yaPfA4oHx2%2ByGu82LD56R1Qe0FWByt1uByc7xRxcF2W31HFDSlOtF9AR26gTWbG2N0hjSReW4Zi5MFaOXObEwVOiNtKEa9CUkR2sOURo9ENJdKGSOR6f6my0F6lmjTDiJFwgvcAAl%2FcfTY%2BGY7Yu3tZof4fdmTf7a%2B15u7A6dai4cOapH1KeHnPxxBoht83gYOvFrs7aFHPZ8%2Bz8epUETpvFbVNoyPE%2Bm7oSNrum1ER3LW6OS5Yxm71nEGh5iInHuz2EkSrPZ%2BO7SB37tyBkiuurFPUXGexjwmIRK051l9I1VZGZa3MjhSK5v6g8JiaFXmtoiykcOSNz9u2sLeAWEx8ERW5EoChNVeVoaB9KwAESjW7dd670S6Sp7nnDuhlhrwdLpwAkStGRdTLHEfqCbPlmw5Pc1BbNSWLa7%2BztH0dl3LNvovfcXBqoVlnod1MDRQSNtN5JPPlBfJSi8XRafuDCqYwlrEGHvNC6f2DEr9Kk7OKEEf2n66IdP3q2e62%2FOQvsJBo5NMOiq0cEGOqUBhSnxgV2lOZUXG%2FiJp2xLdBLkDPz28r8HYE4qhainR8EJio93ymhJ56VB63mln5lHlKt1ejL2B32zYhtL7T22NTAxvOFbzLR4Z3cHBw8xPzf6yXT7030NNninwX2C06Uw3ylinLj8zOH5MJGbWf9BQlB%2FibeVjbDuaemFdHf%2BGr1y6nnnlFJhSoTalZzvrQprrv8j2Y59fM032YYQV3WXve558VZ5&X-Amz-Signature=be6e5cc953250f1a2d9ec49b3dafa1b6ef77642318599da8af90e96ef6fb5429&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7JGQG4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEb5bGDjeydJmdB%2FJy2Oe2AvYtaxIrVk9xMJMY1rBaPFAiEAs1mhVrrcoVMrZqi19lAYXeloJ6oRuCHHEEw168SpXsoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBwuCWGpwU05HL46DircA5X9rwQfwxCjXpdjbvU6l5imGTR7GexJhKI5a9ubdgK%2FvuszReK5Ap%2Bt9%2F20CglKUCfY8abu4%2FJvkXUkpZV1NwjFSG73iBQl%2FCXK3pbNeLsA%2FXQyJN6yaPfA4oHx2%2ByGu82LD56R1Qe0FWByt1uByc7xRxcF2W31HFDSlOtF9AR26gTWbG2N0hjSReW4Zi5MFaOXObEwVOiNtKEa9CUkR2sOURo9ENJdKGSOR6f6my0F6lmjTDiJFwgvcAAl%2FcfTY%2BGY7Yu3tZof4fdmTf7a%2B15u7A6dai4cOapH1KeHnPxxBoht83gYOvFrs7aFHPZ8%2Bz8epUETpvFbVNoyPE%2Bm7oSNrum1ER3LW6OS5Yxm71nEGh5iInHuz2EkSrPZ%2BO7SB37tyBkiuurFPUXGexjwmIRK051l9I1VZGZa3MjhSK5v6g8JiaFXmtoiykcOSNz9u2sLeAWEx8ERW5EoChNVeVoaB9KwAESjW7dd670S6Sp7nnDuhlhrwdLpwAkStGRdTLHEfqCbPlmw5Pc1BbNSWLa7%2BztH0dl3LNvovfcXBqoVlnod1MDRQSNtN5JPPlBfJSi8XRafuDCqYwlrEGHvNC6f2DEr9Kk7OKEEf2n66IdP3q2e62%2FOQvsJBo5NMOiq0cEGOqUBhSnxgV2lOZUXG%2FiJp2xLdBLkDPz28r8HYE4qhainR8EJio93ymhJ56VB63mln5lHlKt1ejL2B32zYhtL7T22NTAxvOFbzLR4Z3cHBw8xPzf6yXT7030NNninwX2C06Uw3ylinLj8zOH5MJGbWf9BQlB%2FibeVjbDuaemFdHf%2BGr1y6nnnlFJhSoTalZzvrQprrv8j2Y59fM032YYQV3WXve558VZ5&X-Amz-Signature=18d12e52cbae4ac55ec186ca56c82a4173fc73a265576d228e0e92cca2947792&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7JGQG4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEb5bGDjeydJmdB%2FJy2Oe2AvYtaxIrVk9xMJMY1rBaPFAiEAs1mhVrrcoVMrZqi19lAYXeloJ6oRuCHHEEw168SpXsoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBwuCWGpwU05HL46DircA5X9rwQfwxCjXpdjbvU6l5imGTR7GexJhKI5a9ubdgK%2FvuszReK5Ap%2Bt9%2F20CglKUCfY8abu4%2FJvkXUkpZV1NwjFSG73iBQl%2FCXK3pbNeLsA%2FXQyJN6yaPfA4oHx2%2ByGu82LD56R1Qe0FWByt1uByc7xRxcF2W31HFDSlOtF9AR26gTWbG2N0hjSReW4Zi5MFaOXObEwVOiNtKEa9CUkR2sOURo9ENJdKGSOR6f6my0F6lmjTDiJFwgvcAAl%2FcfTY%2BGY7Yu3tZof4fdmTf7a%2B15u7A6dai4cOapH1KeHnPxxBoht83gYOvFrs7aFHPZ8%2Bz8epUETpvFbVNoyPE%2Bm7oSNrum1ER3LW6OS5Yxm71nEGh5iInHuz2EkSrPZ%2BO7SB37tyBkiuurFPUXGexjwmIRK051l9I1VZGZa3MjhSK5v6g8JiaFXmtoiykcOSNz9u2sLeAWEx8ERW5EoChNVeVoaB9KwAESjW7dd670S6Sp7nnDuhlhrwdLpwAkStGRdTLHEfqCbPlmw5Pc1BbNSWLa7%2BztH0dl3LNvovfcXBqoVlnod1MDRQSNtN5JPPlBfJSi8XRafuDCqYwlrEGHvNC6f2DEr9Kk7OKEEf2n66IdP3q2e62%2FOQvsJBo5NMOiq0cEGOqUBhSnxgV2lOZUXG%2FiJp2xLdBLkDPz28r8HYE4qhainR8EJio93ymhJ56VB63mln5lHlKt1ejL2B32zYhtL7T22NTAxvOFbzLR4Z3cHBw8xPzf6yXT7030NNninwX2C06Uw3ylinLj8zOH5MJGbWf9BQlB%2FibeVjbDuaemFdHf%2BGr1y6nnnlFJhSoTalZzvrQprrv8j2Y59fM032YYQV3WXve558VZ5&X-Amz-Signature=9ff9ced829429ede6ea83697600121abb65a2bd2b670a5ad436f6378eab387f4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7JGQG4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEb5bGDjeydJmdB%2FJy2Oe2AvYtaxIrVk9xMJMY1rBaPFAiEAs1mhVrrcoVMrZqi19lAYXeloJ6oRuCHHEEw168SpXsoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDBwuCWGpwU05HL46DircA5X9rwQfwxCjXpdjbvU6l5imGTR7GexJhKI5a9ubdgK%2FvuszReK5Ap%2Bt9%2F20CglKUCfY8abu4%2FJvkXUkpZV1NwjFSG73iBQl%2FCXK3pbNeLsA%2FXQyJN6yaPfA4oHx2%2ByGu82LD56R1Qe0FWByt1uByc7xRxcF2W31HFDSlOtF9AR26gTWbG2N0hjSReW4Zi5MFaOXObEwVOiNtKEa9CUkR2sOURo9ENJdKGSOR6f6my0F6lmjTDiJFwgvcAAl%2FcfTY%2BGY7Yu3tZof4fdmTf7a%2B15u7A6dai4cOapH1KeHnPxxBoht83gYOvFrs7aFHPZ8%2Bz8epUETpvFbVNoyPE%2Bm7oSNrum1ER3LW6OS5Yxm71nEGh5iInHuz2EkSrPZ%2BO7SB37tyBkiuurFPUXGexjwmIRK051l9I1VZGZa3MjhSK5v6g8JiaFXmtoiykcOSNz9u2sLeAWEx8ERW5EoChNVeVoaB9KwAESjW7dd670S6Sp7nnDuhlhrwdLpwAkStGRdTLHEfqCbPlmw5Pc1BbNSWLa7%2BztH0dl3LNvovfcXBqoVlnod1MDRQSNtN5JPPlBfJSi8XRafuDCqYwlrEGHvNC6f2DEr9Kk7OKEEf2n66IdP3q2e62%2FOQvsJBo5NMOiq0cEGOqUBhSnxgV2lOZUXG%2FiJp2xLdBLkDPz28r8HYE4qhainR8EJio93ymhJ56VB63mln5lHlKt1ejL2B32zYhtL7T22NTAxvOFbzLR4Z3cHBw8xPzf6yXT7030NNninwX2C06Uw3ylinLj8zOH5MJGbWf9BQlB%2FibeVjbDuaemFdHf%2BGr1y6nnnlFJhSoTalZzvrQprrv8j2Y59fM032YYQV3WXve558VZ5&X-Amz-Signature=37d17199d582805290d23cec9429cda093ba69d396f226e6c8aceeeae070cb6b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
