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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X736YAYF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2dhWccHVaab%2BmZSeVpmvF70e3Oq91H3IGC54td6WVgIgCKfIE4v7v7pVvpOPJ5UZ5PisAoU4le1kys5O%2BRLyqCAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFcTw8jj1cgHF0RIyCrcA9wR2jSXbWDJJeb1L3o6VtJWAlTwCbzovLIchiDo9EX5SnuWlv9vqC%2B27zYJwdd%2FVx6b8j7shX79rZJTDN%2FuGs%2B11bhPW8PS1hFSEY%2B8SNHCL32SPcxpb8iw69e%2FngZdYNpUJmYi1JMGkINzQXteeh8qmW7FgnPQCLGnJvM%2B4fSGGc1DRFOcTUjoOhnBVJUW5iuhdjm0RnWlokfZ%2Botpgh9bMwH5bVpu9Gq10HyVbwQx3pylW9HMlFwvKPahWfw8wn5BejDUMOH9BP5umjeeAbnaNHPSJ4HAkRy14JFeaulHrKIpulXBMWdGXGppR1G4y99b7xFrhDjSMjKI%2F1xIhcFbknmbzL7WVn4FN%2B3Puns7DNzT86zBFxr05xbgLrmlayC3Uwm79V6F0fRgSdceY7uoFCoPOCy4aViG807kdKtZBHW608aXKD%2FA5WWqmquNRxlsA9dpQnFLAcOJWjSP%2FtP63KWcIgWYJrjANZ0sdJ0C7s%2BQuohy8GrtVe1ZbMNWsIPXkNo6%2BPN1S%2FC2ILTP9lUVnXSjtDuUB3LdeFU%2FIerynL23PmFlemNFgg%2Bqwnq4cdH6g4W0vSWuDpEbY95sMSBksprrtOiOGyR7IOoe1E%2FjkK%2F3IH2nnLqXN2v3MILhgsAGOqUBhSt0DKqpPzPU80aIVZGqHDKARDAPtBRUcOailjKbqE1RyUCANDf19rr%2BBAkUmnE9BV8NUAiUbx4NnZYl7ZSwdr%2FsYrjTM4u2kjEV86xE86WyaxYP%2Furc0vpZFlY13scaj1M6FbVxWns55o239OcJAESWrXbWRwvr5UviEazD06BmrNTHGQ2rAU2XbJ8upnAe37SGZiXYrbhqOMynuWJVae5vR0eh&X-Amz-Signature=618fd13beb8dc25c032d740c38c80b39323391c7e1879bda8e51a3b7b6679a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X736YAYF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2dhWccHVaab%2BmZSeVpmvF70e3Oq91H3IGC54td6WVgIgCKfIE4v7v7pVvpOPJ5UZ5PisAoU4le1kys5O%2BRLyqCAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFcTw8jj1cgHF0RIyCrcA9wR2jSXbWDJJeb1L3o6VtJWAlTwCbzovLIchiDo9EX5SnuWlv9vqC%2B27zYJwdd%2FVx6b8j7shX79rZJTDN%2FuGs%2B11bhPW8PS1hFSEY%2B8SNHCL32SPcxpb8iw69e%2FngZdYNpUJmYi1JMGkINzQXteeh8qmW7FgnPQCLGnJvM%2B4fSGGc1DRFOcTUjoOhnBVJUW5iuhdjm0RnWlokfZ%2Botpgh9bMwH5bVpu9Gq10HyVbwQx3pylW9HMlFwvKPahWfw8wn5BejDUMOH9BP5umjeeAbnaNHPSJ4HAkRy14JFeaulHrKIpulXBMWdGXGppR1G4y99b7xFrhDjSMjKI%2F1xIhcFbknmbzL7WVn4FN%2B3Puns7DNzT86zBFxr05xbgLrmlayC3Uwm79V6F0fRgSdceY7uoFCoPOCy4aViG807kdKtZBHW608aXKD%2FA5WWqmquNRxlsA9dpQnFLAcOJWjSP%2FtP63KWcIgWYJrjANZ0sdJ0C7s%2BQuohy8GrtVe1ZbMNWsIPXkNo6%2BPN1S%2FC2ILTP9lUVnXSjtDuUB3LdeFU%2FIerynL23PmFlemNFgg%2Bqwnq4cdH6g4W0vSWuDpEbY95sMSBksprrtOiOGyR7IOoe1E%2FjkK%2F3IH2nnLqXN2v3MILhgsAGOqUBhSt0DKqpPzPU80aIVZGqHDKARDAPtBRUcOailjKbqE1RyUCANDf19rr%2BBAkUmnE9BV8NUAiUbx4NnZYl7ZSwdr%2FsYrjTM4u2kjEV86xE86WyaxYP%2Furc0vpZFlY13scaj1M6FbVxWns55o239OcJAESWrXbWRwvr5UviEazD06BmrNTHGQ2rAU2XbJ8upnAe37SGZiXYrbhqOMynuWJVae5vR0eh&X-Amz-Signature=2892935987625eb67c3db20d89649eb99a85adb2283235417ea4a9131fbcfd33&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X736YAYF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2dhWccHVaab%2BmZSeVpmvF70e3Oq91H3IGC54td6WVgIgCKfIE4v7v7pVvpOPJ5UZ5PisAoU4le1kys5O%2BRLyqCAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFcTw8jj1cgHF0RIyCrcA9wR2jSXbWDJJeb1L3o6VtJWAlTwCbzovLIchiDo9EX5SnuWlv9vqC%2B27zYJwdd%2FVx6b8j7shX79rZJTDN%2FuGs%2B11bhPW8PS1hFSEY%2B8SNHCL32SPcxpb8iw69e%2FngZdYNpUJmYi1JMGkINzQXteeh8qmW7FgnPQCLGnJvM%2B4fSGGc1DRFOcTUjoOhnBVJUW5iuhdjm0RnWlokfZ%2Botpgh9bMwH5bVpu9Gq10HyVbwQx3pylW9HMlFwvKPahWfw8wn5BejDUMOH9BP5umjeeAbnaNHPSJ4HAkRy14JFeaulHrKIpulXBMWdGXGppR1G4y99b7xFrhDjSMjKI%2F1xIhcFbknmbzL7WVn4FN%2B3Puns7DNzT86zBFxr05xbgLrmlayC3Uwm79V6F0fRgSdceY7uoFCoPOCy4aViG807kdKtZBHW608aXKD%2FA5WWqmquNRxlsA9dpQnFLAcOJWjSP%2FtP63KWcIgWYJrjANZ0sdJ0C7s%2BQuohy8GrtVe1ZbMNWsIPXkNo6%2BPN1S%2FC2ILTP9lUVnXSjtDuUB3LdeFU%2FIerynL23PmFlemNFgg%2Bqwnq4cdH6g4W0vSWuDpEbY95sMSBksprrtOiOGyR7IOoe1E%2FjkK%2F3IH2nnLqXN2v3MILhgsAGOqUBhSt0DKqpPzPU80aIVZGqHDKARDAPtBRUcOailjKbqE1RyUCANDf19rr%2BBAkUmnE9BV8NUAiUbx4NnZYl7ZSwdr%2FsYrjTM4u2kjEV86xE86WyaxYP%2Furc0vpZFlY13scaj1M6FbVxWns55o239OcJAESWrXbWRwvr5UviEazD06BmrNTHGQ2rAU2XbJ8upnAe37SGZiXYrbhqOMynuWJVae5vR0eh&X-Amz-Signature=6694cc6ef7fa9f0e9164eea95a2728bf2b390898a7e912c31e28ca939c0bf5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X736YAYF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2dhWccHVaab%2BmZSeVpmvF70e3Oq91H3IGC54td6WVgIgCKfIE4v7v7pVvpOPJ5UZ5PisAoU4le1kys5O%2BRLyqCAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFcTw8jj1cgHF0RIyCrcA9wR2jSXbWDJJeb1L3o6VtJWAlTwCbzovLIchiDo9EX5SnuWlv9vqC%2B27zYJwdd%2FVx6b8j7shX79rZJTDN%2FuGs%2B11bhPW8PS1hFSEY%2B8SNHCL32SPcxpb8iw69e%2FngZdYNpUJmYi1JMGkINzQXteeh8qmW7FgnPQCLGnJvM%2B4fSGGc1DRFOcTUjoOhnBVJUW5iuhdjm0RnWlokfZ%2Botpgh9bMwH5bVpu9Gq10HyVbwQx3pylW9HMlFwvKPahWfw8wn5BejDUMOH9BP5umjeeAbnaNHPSJ4HAkRy14JFeaulHrKIpulXBMWdGXGppR1G4y99b7xFrhDjSMjKI%2F1xIhcFbknmbzL7WVn4FN%2B3Puns7DNzT86zBFxr05xbgLrmlayC3Uwm79V6F0fRgSdceY7uoFCoPOCy4aViG807kdKtZBHW608aXKD%2FA5WWqmquNRxlsA9dpQnFLAcOJWjSP%2FtP63KWcIgWYJrjANZ0sdJ0C7s%2BQuohy8GrtVe1ZbMNWsIPXkNo6%2BPN1S%2FC2ILTP9lUVnXSjtDuUB3LdeFU%2FIerynL23PmFlemNFgg%2Bqwnq4cdH6g4W0vSWuDpEbY95sMSBksprrtOiOGyR7IOoe1E%2FjkK%2F3IH2nnLqXN2v3MILhgsAGOqUBhSt0DKqpPzPU80aIVZGqHDKARDAPtBRUcOailjKbqE1RyUCANDf19rr%2BBAkUmnE9BV8NUAiUbx4NnZYl7ZSwdr%2FsYrjTM4u2kjEV86xE86WyaxYP%2Furc0vpZFlY13scaj1M6FbVxWns55o239OcJAESWrXbWRwvr5UviEazD06BmrNTHGQ2rAU2XbJ8upnAe37SGZiXYrbhqOMynuWJVae5vR0eh&X-Amz-Signature=e2df58d3cc841c500ec073d7d1bb4e2005123fbae2b6eb586e9de5df6aeb5bde&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X736YAYF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2dhWccHVaab%2BmZSeVpmvF70e3Oq91H3IGC54td6WVgIgCKfIE4v7v7pVvpOPJ5UZ5PisAoU4le1kys5O%2BRLyqCAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFcTw8jj1cgHF0RIyCrcA9wR2jSXbWDJJeb1L3o6VtJWAlTwCbzovLIchiDo9EX5SnuWlv9vqC%2B27zYJwdd%2FVx6b8j7shX79rZJTDN%2FuGs%2B11bhPW8PS1hFSEY%2B8SNHCL32SPcxpb8iw69e%2FngZdYNpUJmYi1JMGkINzQXteeh8qmW7FgnPQCLGnJvM%2B4fSGGc1DRFOcTUjoOhnBVJUW5iuhdjm0RnWlokfZ%2Botpgh9bMwH5bVpu9Gq10HyVbwQx3pylW9HMlFwvKPahWfw8wn5BejDUMOH9BP5umjeeAbnaNHPSJ4HAkRy14JFeaulHrKIpulXBMWdGXGppR1G4y99b7xFrhDjSMjKI%2F1xIhcFbknmbzL7WVn4FN%2B3Puns7DNzT86zBFxr05xbgLrmlayC3Uwm79V6F0fRgSdceY7uoFCoPOCy4aViG807kdKtZBHW608aXKD%2FA5WWqmquNRxlsA9dpQnFLAcOJWjSP%2FtP63KWcIgWYJrjANZ0sdJ0C7s%2BQuohy8GrtVe1ZbMNWsIPXkNo6%2BPN1S%2FC2ILTP9lUVnXSjtDuUB3LdeFU%2FIerynL23PmFlemNFgg%2Bqwnq4cdH6g4W0vSWuDpEbY95sMSBksprrtOiOGyR7IOoe1E%2FjkK%2F3IH2nnLqXN2v3MILhgsAGOqUBhSt0DKqpPzPU80aIVZGqHDKARDAPtBRUcOailjKbqE1RyUCANDf19rr%2BBAkUmnE9BV8NUAiUbx4NnZYl7ZSwdr%2FsYrjTM4u2kjEV86xE86WyaxYP%2Furc0vpZFlY13scaj1M6FbVxWns55o239OcJAESWrXbWRwvr5UviEazD06BmrNTHGQ2rAU2XbJ8upnAe37SGZiXYrbhqOMynuWJVae5vR0eh&X-Amz-Signature=a05b47023707e13af3823d5b8ad83c954a0577132b52edf54afc2e057638bbc5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X736YAYF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2dhWccHVaab%2BmZSeVpmvF70e3Oq91H3IGC54td6WVgIgCKfIE4v7v7pVvpOPJ5UZ5PisAoU4le1kys5O%2BRLyqCAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFcTw8jj1cgHF0RIyCrcA9wR2jSXbWDJJeb1L3o6VtJWAlTwCbzovLIchiDo9EX5SnuWlv9vqC%2B27zYJwdd%2FVx6b8j7shX79rZJTDN%2FuGs%2B11bhPW8PS1hFSEY%2B8SNHCL32SPcxpb8iw69e%2FngZdYNpUJmYi1JMGkINzQXteeh8qmW7FgnPQCLGnJvM%2B4fSGGc1DRFOcTUjoOhnBVJUW5iuhdjm0RnWlokfZ%2Botpgh9bMwH5bVpu9Gq10HyVbwQx3pylW9HMlFwvKPahWfw8wn5BejDUMOH9BP5umjeeAbnaNHPSJ4HAkRy14JFeaulHrKIpulXBMWdGXGppR1G4y99b7xFrhDjSMjKI%2F1xIhcFbknmbzL7WVn4FN%2B3Puns7DNzT86zBFxr05xbgLrmlayC3Uwm79V6F0fRgSdceY7uoFCoPOCy4aViG807kdKtZBHW608aXKD%2FA5WWqmquNRxlsA9dpQnFLAcOJWjSP%2FtP63KWcIgWYJrjANZ0sdJ0C7s%2BQuohy8GrtVe1ZbMNWsIPXkNo6%2BPN1S%2FC2ILTP9lUVnXSjtDuUB3LdeFU%2FIerynL23PmFlemNFgg%2Bqwnq4cdH6g4W0vSWuDpEbY95sMSBksprrtOiOGyR7IOoe1E%2FjkK%2F3IH2nnLqXN2v3MILhgsAGOqUBhSt0DKqpPzPU80aIVZGqHDKARDAPtBRUcOailjKbqE1RyUCANDf19rr%2BBAkUmnE9BV8NUAiUbx4NnZYl7ZSwdr%2FsYrjTM4u2kjEV86xE86WyaxYP%2Furc0vpZFlY13scaj1M6FbVxWns55o239OcJAESWrXbWRwvr5UviEazD06BmrNTHGQ2rAU2XbJ8upnAe37SGZiXYrbhqOMynuWJVae5vR0eh&X-Amz-Signature=0b84fdf2463fe51e2f8b2d3fd4fe9650d8a7d9c5370241bed1dcbe6921fa09aa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X736YAYF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2dhWccHVaab%2BmZSeVpmvF70e3Oq91H3IGC54td6WVgIgCKfIE4v7v7pVvpOPJ5UZ5PisAoU4le1kys5O%2BRLyqCAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFcTw8jj1cgHF0RIyCrcA9wR2jSXbWDJJeb1L3o6VtJWAlTwCbzovLIchiDo9EX5SnuWlv9vqC%2B27zYJwdd%2FVx6b8j7shX79rZJTDN%2FuGs%2B11bhPW8PS1hFSEY%2B8SNHCL32SPcxpb8iw69e%2FngZdYNpUJmYi1JMGkINzQXteeh8qmW7FgnPQCLGnJvM%2B4fSGGc1DRFOcTUjoOhnBVJUW5iuhdjm0RnWlokfZ%2Botpgh9bMwH5bVpu9Gq10HyVbwQx3pylW9HMlFwvKPahWfw8wn5BejDUMOH9BP5umjeeAbnaNHPSJ4HAkRy14JFeaulHrKIpulXBMWdGXGppR1G4y99b7xFrhDjSMjKI%2F1xIhcFbknmbzL7WVn4FN%2B3Puns7DNzT86zBFxr05xbgLrmlayC3Uwm79V6F0fRgSdceY7uoFCoPOCy4aViG807kdKtZBHW608aXKD%2FA5WWqmquNRxlsA9dpQnFLAcOJWjSP%2FtP63KWcIgWYJrjANZ0sdJ0C7s%2BQuohy8GrtVe1ZbMNWsIPXkNo6%2BPN1S%2FC2ILTP9lUVnXSjtDuUB3LdeFU%2FIerynL23PmFlemNFgg%2Bqwnq4cdH6g4W0vSWuDpEbY95sMSBksprrtOiOGyR7IOoe1E%2FjkK%2F3IH2nnLqXN2v3MILhgsAGOqUBhSt0DKqpPzPU80aIVZGqHDKARDAPtBRUcOailjKbqE1RyUCANDf19rr%2BBAkUmnE9BV8NUAiUbx4NnZYl7ZSwdr%2FsYrjTM4u2kjEV86xE86WyaxYP%2Furc0vpZFlY13scaj1M6FbVxWns55o239OcJAESWrXbWRwvr5UviEazD06BmrNTHGQ2rAU2XbJ8upnAe37SGZiXYrbhqOMynuWJVae5vR0eh&X-Amz-Signature=d5d57029649136b2f94a34797f18a252c322ae487d7421979db280ebd0b9b3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
