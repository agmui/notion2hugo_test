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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZQRJE2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDko2oUwgfpQToDReZD0An7wsyHZkPvPrUbGJ8O3IKNVgIhAI12AXncxssq3EhQLfQiFje8HjHz%2B5YSz2Nqk8HUtVT1Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BCamLGVV0WkPQabEq3AOne0sItMS0goX%2B8yEl5HqcvSdWklXa4dfgfKdUrq1YS%2Fds8XD1h%2Bfsj1Rr5fEOTK5ZOba%2Flza9CWWRy%2FnpVgPvnE4aETzcfFtFhlyr7MlEjmeQBDpRrpLxaMF%2F2YB2OQL3fNDmF8IkNZIA74nEAUetp9mzQQ7EVEaZcFZTGG%2BYkLe%2BHTZM8PKlKO1F5zNpxqJ0ZyFNugp05awWjs2pMQ1ss4IKS%2BaTl1feI2zBp1HuXKRpY75ZBABK1EoVtsjy4%2B70ydnLPhcJYjMDsEUHjaJUEVVDR4ry7B%2F0wkMURyove7V6Pn7urRxYtTx1u%2B%2FFai5RlmilF6ddPc3ENaB30zYANhdF8cL%2BM5qlBm3MQy0%2BBTZK%2FMrMmuTs8D5GpNDq49J3G%2FsdgySnSGF5bKilbAqTzMBLglZZzLtGhD2%2FO65nj0z83FEKoaKywMxOMfuQV%2BT5EGwaIrNrXggXW62zmI29e%2BX%2FC%2BrcinHpF7%2F1qbMd8lCv%2F7k7FJTrnmAV8M5kJ47hNc1Hpnv%2FCOCbnZTEu7GKsPvw588JHRza0CG9VKuIS5zbeC76NIbIkjlb6%2BUlg7ewumKLTsSa6A9Lxs1wKY6%2F1BihKJtBBwP%2FZTy3VEeh90BEaRGSSLDcvmpVYzC%2F0cXBBjqkAdFAsQFP74MS7lfHmM9VqhvYPnewhaIZyfjutEVjf14Sr5nrID1vtlxO%2Bw3fMe%2F9j3mgfBhH9sLczOWDuXPkt1dN6tEJxcnsE%2Bq4Ey8WC1d7prszpePN7%2FBEN%2BQFF%2Fkp23M8ZFdg0nShwnv%2FwZcX%2FXjmOJ3tu9fjOa4b0qF%2BEQqlGzWalasly2u29IWPCUCap1lZNgdeAoXJ0BtPYjYSH5uhs2eH&X-Amz-Signature=f91d730721eb521b9af1b01155b362f8f16899374be9ba9592ddde88777e0814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZQRJE2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDko2oUwgfpQToDReZD0An7wsyHZkPvPrUbGJ8O3IKNVgIhAI12AXncxssq3EhQLfQiFje8HjHz%2B5YSz2Nqk8HUtVT1Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BCamLGVV0WkPQabEq3AOne0sItMS0goX%2B8yEl5HqcvSdWklXa4dfgfKdUrq1YS%2Fds8XD1h%2Bfsj1Rr5fEOTK5ZOba%2Flza9CWWRy%2FnpVgPvnE4aETzcfFtFhlyr7MlEjmeQBDpRrpLxaMF%2F2YB2OQL3fNDmF8IkNZIA74nEAUetp9mzQQ7EVEaZcFZTGG%2BYkLe%2BHTZM8PKlKO1F5zNpxqJ0ZyFNugp05awWjs2pMQ1ss4IKS%2BaTl1feI2zBp1HuXKRpY75ZBABK1EoVtsjy4%2B70ydnLPhcJYjMDsEUHjaJUEVVDR4ry7B%2F0wkMURyove7V6Pn7urRxYtTx1u%2B%2FFai5RlmilF6ddPc3ENaB30zYANhdF8cL%2BM5qlBm3MQy0%2BBTZK%2FMrMmuTs8D5GpNDq49J3G%2FsdgySnSGF5bKilbAqTzMBLglZZzLtGhD2%2FO65nj0z83FEKoaKywMxOMfuQV%2BT5EGwaIrNrXggXW62zmI29e%2BX%2FC%2BrcinHpF7%2F1qbMd8lCv%2F7k7FJTrnmAV8M5kJ47hNc1Hpnv%2FCOCbnZTEu7GKsPvw588JHRza0CG9VKuIS5zbeC76NIbIkjlb6%2BUlg7ewumKLTsSa6A9Lxs1wKY6%2F1BihKJtBBwP%2FZTy3VEeh90BEaRGSSLDcvmpVYzC%2F0cXBBjqkAdFAsQFP74MS7lfHmM9VqhvYPnewhaIZyfjutEVjf14Sr5nrID1vtlxO%2Bw3fMe%2F9j3mgfBhH9sLczOWDuXPkt1dN6tEJxcnsE%2Bq4Ey8WC1d7prszpePN7%2FBEN%2BQFF%2Fkp23M8ZFdg0nShwnv%2FwZcX%2FXjmOJ3tu9fjOa4b0qF%2BEQqlGzWalasly2u29IWPCUCap1lZNgdeAoXJ0BtPYjYSH5uhs2eH&X-Amz-Signature=5f128756175c196334575170f9e69eaad3be2f90ce1b7fe660c8c643cb782297&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZQRJE2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDko2oUwgfpQToDReZD0An7wsyHZkPvPrUbGJ8O3IKNVgIhAI12AXncxssq3EhQLfQiFje8HjHz%2B5YSz2Nqk8HUtVT1Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BCamLGVV0WkPQabEq3AOne0sItMS0goX%2B8yEl5HqcvSdWklXa4dfgfKdUrq1YS%2Fds8XD1h%2Bfsj1Rr5fEOTK5ZOba%2Flza9CWWRy%2FnpVgPvnE4aETzcfFtFhlyr7MlEjmeQBDpRrpLxaMF%2F2YB2OQL3fNDmF8IkNZIA74nEAUetp9mzQQ7EVEaZcFZTGG%2BYkLe%2BHTZM8PKlKO1F5zNpxqJ0ZyFNugp05awWjs2pMQ1ss4IKS%2BaTl1feI2zBp1HuXKRpY75ZBABK1EoVtsjy4%2B70ydnLPhcJYjMDsEUHjaJUEVVDR4ry7B%2F0wkMURyove7V6Pn7urRxYtTx1u%2B%2FFai5RlmilF6ddPc3ENaB30zYANhdF8cL%2BM5qlBm3MQy0%2BBTZK%2FMrMmuTs8D5GpNDq49J3G%2FsdgySnSGF5bKilbAqTzMBLglZZzLtGhD2%2FO65nj0z83FEKoaKywMxOMfuQV%2BT5EGwaIrNrXggXW62zmI29e%2BX%2FC%2BrcinHpF7%2F1qbMd8lCv%2F7k7FJTrnmAV8M5kJ47hNc1Hpnv%2FCOCbnZTEu7GKsPvw588JHRza0CG9VKuIS5zbeC76NIbIkjlb6%2BUlg7ewumKLTsSa6A9Lxs1wKY6%2F1BihKJtBBwP%2FZTy3VEeh90BEaRGSSLDcvmpVYzC%2F0cXBBjqkAdFAsQFP74MS7lfHmM9VqhvYPnewhaIZyfjutEVjf14Sr5nrID1vtlxO%2Bw3fMe%2F9j3mgfBhH9sLczOWDuXPkt1dN6tEJxcnsE%2Bq4Ey8WC1d7prszpePN7%2FBEN%2BQFF%2Fkp23M8ZFdg0nShwnv%2FwZcX%2FXjmOJ3tu9fjOa4b0qF%2BEQqlGzWalasly2u29IWPCUCap1lZNgdeAoXJ0BtPYjYSH5uhs2eH&X-Amz-Signature=045f9f2b2e08ec01e1775b7b23e23a54fe992941c23ca0c3d235810b234da4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZQRJE2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDko2oUwgfpQToDReZD0An7wsyHZkPvPrUbGJ8O3IKNVgIhAI12AXncxssq3EhQLfQiFje8HjHz%2B5YSz2Nqk8HUtVT1Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BCamLGVV0WkPQabEq3AOne0sItMS0goX%2B8yEl5HqcvSdWklXa4dfgfKdUrq1YS%2Fds8XD1h%2Bfsj1Rr5fEOTK5ZOba%2Flza9CWWRy%2FnpVgPvnE4aETzcfFtFhlyr7MlEjmeQBDpRrpLxaMF%2F2YB2OQL3fNDmF8IkNZIA74nEAUetp9mzQQ7EVEaZcFZTGG%2BYkLe%2BHTZM8PKlKO1F5zNpxqJ0ZyFNugp05awWjs2pMQ1ss4IKS%2BaTl1feI2zBp1HuXKRpY75ZBABK1EoVtsjy4%2B70ydnLPhcJYjMDsEUHjaJUEVVDR4ry7B%2F0wkMURyove7V6Pn7urRxYtTx1u%2B%2FFai5RlmilF6ddPc3ENaB30zYANhdF8cL%2BM5qlBm3MQy0%2BBTZK%2FMrMmuTs8D5GpNDq49J3G%2FsdgySnSGF5bKilbAqTzMBLglZZzLtGhD2%2FO65nj0z83FEKoaKywMxOMfuQV%2BT5EGwaIrNrXggXW62zmI29e%2BX%2FC%2BrcinHpF7%2F1qbMd8lCv%2F7k7FJTrnmAV8M5kJ47hNc1Hpnv%2FCOCbnZTEu7GKsPvw588JHRza0CG9VKuIS5zbeC76NIbIkjlb6%2BUlg7ewumKLTsSa6A9Lxs1wKY6%2F1BihKJtBBwP%2FZTy3VEeh90BEaRGSSLDcvmpVYzC%2F0cXBBjqkAdFAsQFP74MS7lfHmM9VqhvYPnewhaIZyfjutEVjf14Sr5nrID1vtlxO%2Bw3fMe%2F9j3mgfBhH9sLczOWDuXPkt1dN6tEJxcnsE%2Bq4Ey8WC1d7prszpePN7%2FBEN%2BQFF%2Fkp23M8ZFdg0nShwnv%2FwZcX%2FXjmOJ3tu9fjOa4b0qF%2BEQqlGzWalasly2u29IWPCUCap1lZNgdeAoXJ0BtPYjYSH5uhs2eH&X-Amz-Signature=b481339bdb6bfcc202483f1f2cfc35d8fbe66fd1def28660e6b342b1ab2077ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZQRJE2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDko2oUwgfpQToDReZD0An7wsyHZkPvPrUbGJ8O3IKNVgIhAI12AXncxssq3EhQLfQiFje8HjHz%2B5YSz2Nqk8HUtVT1Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BCamLGVV0WkPQabEq3AOne0sItMS0goX%2B8yEl5HqcvSdWklXa4dfgfKdUrq1YS%2Fds8XD1h%2Bfsj1Rr5fEOTK5ZOba%2Flza9CWWRy%2FnpVgPvnE4aETzcfFtFhlyr7MlEjmeQBDpRrpLxaMF%2F2YB2OQL3fNDmF8IkNZIA74nEAUetp9mzQQ7EVEaZcFZTGG%2BYkLe%2BHTZM8PKlKO1F5zNpxqJ0ZyFNugp05awWjs2pMQ1ss4IKS%2BaTl1feI2zBp1HuXKRpY75ZBABK1EoVtsjy4%2B70ydnLPhcJYjMDsEUHjaJUEVVDR4ry7B%2F0wkMURyove7V6Pn7urRxYtTx1u%2B%2FFai5RlmilF6ddPc3ENaB30zYANhdF8cL%2BM5qlBm3MQy0%2BBTZK%2FMrMmuTs8D5GpNDq49J3G%2FsdgySnSGF5bKilbAqTzMBLglZZzLtGhD2%2FO65nj0z83FEKoaKywMxOMfuQV%2BT5EGwaIrNrXggXW62zmI29e%2BX%2FC%2BrcinHpF7%2F1qbMd8lCv%2F7k7FJTrnmAV8M5kJ47hNc1Hpnv%2FCOCbnZTEu7GKsPvw588JHRza0CG9VKuIS5zbeC76NIbIkjlb6%2BUlg7ewumKLTsSa6A9Lxs1wKY6%2F1BihKJtBBwP%2FZTy3VEeh90BEaRGSSLDcvmpVYzC%2F0cXBBjqkAdFAsQFP74MS7lfHmM9VqhvYPnewhaIZyfjutEVjf14Sr5nrID1vtlxO%2Bw3fMe%2F9j3mgfBhH9sLczOWDuXPkt1dN6tEJxcnsE%2Bq4Ey8WC1d7prszpePN7%2FBEN%2BQFF%2Fkp23M8ZFdg0nShwnv%2FwZcX%2FXjmOJ3tu9fjOa4b0qF%2BEQqlGzWalasly2u29IWPCUCap1lZNgdeAoXJ0BtPYjYSH5uhs2eH&X-Amz-Signature=424e5396b77185d77ddab25b1c71dad319eac483227ce6f5df6e261e04aaf98e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZQRJE2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDko2oUwgfpQToDReZD0An7wsyHZkPvPrUbGJ8O3IKNVgIhAI12AXncxssq3EhQLfQiFje8HjHz%2B5YSz2Nqk8HUtVT1Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BCamLGVV0WkPQabEq3AOne0sItMS0goX%2B8yEl5HqcvSdWklXa4dfgfKdUrq1YS%2Fds8XD1h%2Bfsj1Rr5fEOTK5ZOba%2Flza9CWWRy%2FnpVgPvnE4aETzcfFtFhlyr7MlEjmeQBDpRrpLxaMF%2F2YB2OQL3fNDmF8IkNZIA74nEAUetp9mzQQ7EVEaZcFZTGG%2BYkLe%2BHTZM8PKlKO1F5zNpxqJ0ZyFNugp05awWjs2pMQ1ss4IKS%2BaTl1feI2zBp1HuXKRpY75ZBABK1EoVtsjy4%2B70ydnLPhcJYjMDsEUHjaJUEVVDR4ry7B%2F0wkMURyove7V6Pn7urRxYtTx1u%2B%2FFai5RlmilF6ddPc3ENaB30zYANhdF8cL%2BM5qlBm3MQy0%2BBTZK%2FMrMmuTs8D5GpNDq49J3G%2FsdgySnSGF5bKilbAqTzMBLglZZzLtGhD2%2FO65nj0z83FEKoaKywMxOMfuQV%2BT5EGwaIrNrXggXW62zmI29e%2BX%2FC%2BrcinHpF7%2F1qbMd8lCv%2F7k7FJTrnmAV8M5kJ47hNc1Hpnv%2FCOCbnZTEu7GKsPvw588JHRza0CG9VKuIS5zbeC76NIbIkjlb6%2BUlg7ewumKLTsSa6A9Lxs1wKY6%2F1BihKJtBBwP%2FZTy3VEeh90BEaRGSSLDcvmpVYzC%2F0cXBBjqkAdFAsQFP74MS7lfHmM9VqhvYPnewhaIZyfjutEVjf14Sr5nrID1vtlxO%2Bw3fMe%2F9j3mgfBhH9sLczOWDuXPkt1dN6tEJxcnsE%2Bq4Ey8WC1d7prszpePN7%2FBEN%2BQFF%2Fkp23M8ZFdg0nShwnv%2FwZcX%2FXjmOJ3tu9fjOa4b0qF%2BEQqlGzWalasly2u29IWPCUCap1lZNgdeAoXJ0BtPYjYSH5uhs2eH&X-Amz-Signature=817f205431a356ed88d5e722811842bcdce5e1a257cee5f520c9c5b1f0550c61&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLZQRJE2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDko2oUwgfpQToDReZD0An7wsyHZkPvPrUbGJ8O3IKNVgIhAI12AXncxssq3EhQLfQiFje8HjHz%2B5YSz2Nqk8HUtVT1Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BCamLGVV0WkPQabEq3AOne0sItMS0goX%2B8yEl5HqcvSdWklXa4dfgfKdUrq1YS%2Fds8XD1h%2Bfsj1Rr5fEOTK5ZOba%2Flza9CWWRy%2FnpVgPvnE4aETzcfFtFhlyr7MlEjmeQBDpRrpLxaMF%2F2YB2OQL3fNDmF8IkNZIA74nEAUetp9mzQQ7EVEaZcFZTGG%2BYkLe%2BHTZM8PKlKO1F5zNpxqJ0ZyFNugp05awWjs2pMQ1ss4IKS%2BaTl1feI2zBp1HuXKRpY75ZBABK1EoVtsjy4%2B70ydnLPhcJYjMDsEUHjaJUEVVDR4ry7B%2F0wkMURyove7V6Pn7urRxYtTx1u%2B%2FFai5RlmilF6ddPc3ENaB30zYANhdF8cL%2BM5qlBm3MQy0%2BBTZK%2FMrMmuTs8D5GpNDq49J3G%2FsdgySnSGF5bKilbAqTzMBLglZZzLtGhD2%2FO65nj0z83FEKoaKywMxOMfuQV%2BT5EGwaIrNrXggXW62zmI29e%2BX%2FC%2BrcinHpF7%2F1qbMd8lCv%2F7k7FJTrnmAV8M5kJ47hNc1Hpnv%2FCOCbnZTEu7GKsPvw588JHRza0CG9VKuIS5zbeC76NIbIkjlb6%2BUlg7ewumKLTsSa6A9Lxs1wKY6%2F1BihKJtBBwP%2FZTy3VEeh90BEaRGSSLDcvmpVYzC%2F0cXBBjqkAdFAsQFP74MS7lfHmM9VqhvYPnewhaIZyfjutEVjf14Sr5nrID1vtlxO%2Bw3fMe%2F9j3mgfBhH9sLczOWDuXPkt1dN6tEJxcnsE%2Bq4Ey8WC1d7prszpePN7%2FBEN%2BQFF%2Fkp23M8ZFdg0nShwnv%2FwZcX%2FXjmOJ3tu9fjOa4b0qF%2BEQqlGzWalasly2u29IWPCUCap1lZNgdeAoXJ0BtPYjYSH5uhs2eH&X-Amz-Signature=d4e017dec3100317a3239e9df4b7386fe856eaf34ecfe8e9bcc0bd465363db9f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
