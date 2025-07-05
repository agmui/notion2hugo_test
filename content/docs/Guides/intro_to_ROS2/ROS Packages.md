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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLJOSQM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICvUWviXHbJuULcKPqodNVEj484yvyhO96S4CUktIhnOAiAqIzvdL9lWffgfMdI2ia2X5yfMb28jujlZVT5cd3Qo6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMVstIxz4CcoPS%2FZTKtwDBuV8NLQi7xL15%2B96T8vvUk5XdeXtl5FbJbAQ2TlD9sHu%2F4a9g5m%2BG5xqPb9%2FGNADo1TnkGSFWldkCKTXHc3EBAE2HJsLGb%2BOhYuSnsN5nC83L83MG4Y9BJrZW3WJo6pyFQrAAetSga0ucdiuEpdxoqK9bgKIWa6jX%2B7sCBlgRTU9vAOmnBwyVmT3KIDy3hinjQG33BMF37%2F2Wt86ho6lthnLJuAoqlE5%2FduOgLby%2FS%2FLPOOhcSMMJbUuaf0g10czE%2BcTp6WAJ1sNovJNRFfTOBuaYR0AEGWt4gT60VnXimIpBe%2BhrU8aIGnTx1vA8n0oCpucwyHfk83NDxKAxxTT0NhF8uh37Zl5v%2BY9T0pxYH1uimRBArFB5JA5N4GhgjPaLail%2B4cNkQtjkASCbAiDUm244T0y4KJnNn3pPDteNV6KbC81yb6GEmqK%2Fx9uwINd4sZOJfugifRUh9bgZFqykHm9RvCsuD0tYVX27aKNJPWnEU817KKtfFwitJx10STJ%2B7HU%2FUInPMcC1yTXgHMrZTZeF%2FQQAzf4yFTN9SqliR8Mt7jmBuUKRtvwLkz0%2FnhbhGUkBZa7pGaHGg354fand%2BANB%2FGIZsLy2pAZguH1PpaX%2FO9F2buvcIHMkncwhLGjwwY6pgHPYjYpLdE2UVh88enYfehT8Fb%2BJC01elY6Ypy%2FBdqt8SQCCsG6dPUpT%2F05RcWma9jpPb6NNbGV3JE0l%2BP3BySEQ4%2Bod9390URaHjIwKxNkPA1g4vwWz3iZi3E%2BWzaO73JdN2h6o%2FWk4618KiZaIJuiH%2FETP3vqGW5MUgi%2BHDiqA0ajAjK87qMi%2BKV6OiBzlD%2BSQJRAFFYqlQ72NP6oeKkpEz7XWquQ&X-Amz-Signature=cf630e446d27905a21096e2490e0a5e14dfe8c9b61fece3ff730c1b5a281952d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLJOSQM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICvUWviXHbJuULcKPqodNVEj484yvyhO96S4CUktIhnOAiAqIzvdL9lWffgfMdI2ia2X5yfMb28jujlZVT5cd3Qo6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMVstIxz4CcoPS%2FZTKtwDBuV8NLQi7xL15%2B96T8vvUk5XdeXtl5FbJbAQ2TlD9sHu%2F4a9g5m%2BG5xqPb9%2FGNADo1TnkGSFWldkCKTXHc3EBAE2HJsLGb%2BOhYuSnsN5nC83L83MG4Y9BJrZW3WJo6pyFQrAAetSga0ucdiuEpdxoqK9bgKIWa6jX%2B7sCBlgRTU9vAOmnBwyVmT3KIDy3hinjQG33BMF37%2F2Wt86ho6lthnLJuAoqlE5%2FduOgLby%2FS%2FLPOOhcSMMJbUuaf0g10czE%2BcTp6WAJ1sNovJNRFfTOBuaYR0AEGWt4gT60VnXimIpBe%2BhrU8aIGnTx1vA8n0oCpucwyHfk83NDxKAxxTT0NhF8uh37Zl5v%2BY9T0pxYH1uimRBArFB5JA5N4GhgjPaLail%2B4cNkQtjkASCbAiDUm244T0y4KJnNn3pPDteNV6KbC81yb6GEmqK%2Fx9uwINd4sZOJfugifRUh9bgZFqykHm9RvCsuD0tYVX27aKNJPWnEU817KKtfFwitJx10STJ%2B7HU%2FUInPMcC1yTXgHMrZTZeF%2FQQAzf4yFTN9SqliR8Mt7jmBuUKRtvwLkz0%2FnhbhGUkBZa7pGaHGg354fand%2BANB%2FGIZsLy2pAZguH1PpaX%2FO9F2buvcIHMkncwhLGjwwY6pgHPYjYpLdE2UVh88enYfehT8Fb%2BJC01elY6Ypy%2FBdqt8SQCCsG6dPUpT%2F05RcWma9jpPb6NNbGV3JE0l%2BP3BySEQ4%2Bod9390URaHjIwKxNkPA1g4vwWz3iZi3E%2BWzaO73JdN2h6o%2FWk4618KiZaIJuiH%2FETP3vqGW5MUgi%2BHDiqA0ajAjK87qMi%2BKV6OiBzlD%2BSQJRAFFYqlQ72NP6oeKkpEz7XWquQ&X-Amz-Signature=d8155d127d942ead7e46f742bff1fa95227326facad1b1e472de8dce077ac2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLJOSQM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICvUWviXHbJuULcKPqodNVEj484yvyhO96S4CUktIhnOAiAqIzvdL9lWffgfMdI2ia2X5yfMb28jujlZVT5cd3Qo6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMVstIxz4CcoPS%2FZTKtwDBuV8NLQi7xL15%2B96T8vvUk5XdeXtl5FbJbAQ2TlD9sHu%2F4a9g5m%2BG5xqPb9%2FGNADo1TnkGSFWldkCKTXHc3EBAE2HJsLGb%2BOhYuSnsN5nC83L83MG4Y9BJrZW3WJo6pyFQrAAetSga0ucdiuEpdxoqK9bgKIWa6jX%2B7sCBlgRTU9vAOmnBwyVmT3KIDy3hinjQG33BMF37%2F2Wt86ho6lthnLJuAoqlE5%2FduOgLby%2FS%2FLPOOhcSMMJbUuaf0g10czE%2BcTp6WAJ1sNovJNRFfTOBuaYR0AEGWt4gT60VnXimIpBe%2BhrU8aIGnTx1vA8n0oCpucwyHfk83NDxKAxxTT0NhF8uh37Zl5v%2BY9T0pxYH1uimRBArFB5JA5N4GhgjPaLail%2B4cNkQtjkASCbAiDUm244T0y4KJnNn3pPDteNV6KbC81yb6GEmqK%2Fx9uwINd4sZOJfugifRUh9bgZFqykHm9RvCsuD0tYVX27aKNJPWnEU817KKtfFwitJx10STJ%2B7HU%2FUInPMcC1yTXgHMrZTZeF%2FQQAzf4yFTN9SqliR8Mt7jmBuUKRtvwLkz0%2FnhbhGUkBZa7pGaHGg354fand%2BANB%2FGIZsLy2pAZguH1PpaX%2FO9F2buvcIHMkncwhLGjwwY6pgHPYjYpLdE2UVh88enYfehT8Fb%2BJC01elY6Ypy%2FBdqt8SQCCsG6dPUpT%2F05RcWma9jpPb6NNbGV3JE0l%2BP3BySEQ4%2Bod9390URaHjIwKxNkPA1g4vwWz3iZi3E%2BWzaO73JdN2h6o%2FWk4618KiZaIJuiH%2FETP3vqGW5MUgi%2BHDiqA0ajAjK87qMi%2BKV6OiBzlD%2BSQJRAFFYqlQ72NP6oeKkpEz7XWquQ&X-Amz-Signature=76fed499cfc80420c647e071c2a1c70cfbf338943884c168b887bb77844ee9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLJOSQM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICvUWviXHbJuULcKPqodNVEj484yvyhO96S4CUktIhnOAiAqIzvdL9lWffgfMdI2ia2X5yfMb28jujlZVT5cd3Qo6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMVstIxz4CcoPS%2FZTKtwDBuV8NLQi7xL15%2B96T8vvUk5XdeXtl5FbJbAQ2TlD9sHu%2F4a9g5m%2BG5xqPb9%2FGNADo1TnkGSFWldkCKTXHc3EBAE2HJsLGb%2BOhYuSnsN5nC83L83MG4Y9BJrZW3WJo6pyFQrAAetSga0ucdiuEpdxoqK9bgKIWa6jX%2B7sCBlgRTU9vAOmnBwyVmT3KIDy3hinjQG33BMF37%2F2Wt86ho6lthnLJuAoqlE5%2FduOgLby%2FS%2FLPOOhcSMMJbUuaf0g10czE%2BcTp6WAJ1sNovJNRFfTOBuaYR0AEGWt4gT60VnXimIpBe%2BhrU8aIGnTx1vA8n0oCpucwyHfk83NDxKAxxTT0NhF8uh37Zl5v%2BY9T0pxYH1uimRBArFB5JA5N4GhgjPaLail%2B4cNkQtjkASCbAiDUm244T0y4KJnNn3pPDteNV6KbC81yb6GEmqK%2Fx9uwINd4sZOJfugifRUh9bgZFqykHm9RvCsuD0tYVX27aKNJPWnEU817KKtfFwitJx10STJ%2B7HU%2FUInPMcC1yTXgHMrZTZeF%2FQQAzf4yFTN9SqliR8Mt7jmBuUKRtvwLkz0%2FnhbhGUkBZa7pGaHGg354fand%2BANB%2FGIZsLy2pAZguH1PpaX%2FO9F2buvcIHMkncwhLGjwwY6pgHPYjYpLdE2UVh88enYfehT8Fb%2BJC01elY6Ypy%2FBdqt8SQCCsG6dPUpT%2F05RcWma9jpPb6NNbGV3JE0l%2BP3BySEQ4%2Bod9390URaHjIwKxNkPA1g4vwWz3iZi3E%2BWzaO73JdN2h6o%2FWk4618KiZaIJuiH%2FETP3vqGW5MUgi%2BHDiqA0ajAjK87qMi%2BKV6OiBzlD%2BSQJRAFFYqlQ72NP6oeKkpEz7XWquQ&X-Amz-Signature=8537f4359d0f54d6720a2f9c44bfa9c8105fc701e4b9fc1418be3744b1d6b6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLJOSQM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICvUWviXHbJuULcKPqodNVEj484yvyhO96S4CUktIhnOAiAqIzvdL9lWffgfMdI2ia2X5yfMb28jujlZVT5cd3Qo6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMVstIxz4CcoPS%2FZTKtwDBuV8NLQi7xL15%2B96T8vvUk5XdeXtl5FbJbAQ2TlD9sHu%2F4a9g5m%2BG5xqPb9%2FGNADo1TnkGSFWldkCKTXHc3EBAE2HJsLGb%2BOhYuSnsN5nC83L83MG4Y9BJrZW3WJo6pyFQrAAetSga0ucdiuEpdxoqK9bgKIWa6jX%2B7sCBlgRTU9vAOmnBwyVmT3KIDy3hinjQG33BMF37%2F2Wt86ho6lthnLJuAoqlE5%2FduOgLby%2FS%2FLPOOhcSMMJbUuaf0g10czE%2BcTp6WAJ1sNovJNRFfTOBuaYR0AEGWt4gT60VnXimIpBe%2BhrU8aIGnTx1vA8n0oCpucwyHfk83NDxKAxxTT0NhF8uh37Zl5v%2BY9T0pxYH1uimRBArFB5JA5N4GhgjPaLail%2B4cNkQtjkASCbAiDUm244T0y4KJnNn3pPDteNV6KbC81yb6GEmqK%2Fx9uwINd4sZOJfugifRUh9bgZFqykHm9RvCsuD0tYVX27aKNJPWnEU817KKtfFwitJx10STJ%2B7HU%2FUInPMcC1yTXgHMrZTZeF%2FQQAzf4yFTN9SqliR8Mt7jmBuUKRtvwLkz0%2FnhbhGUkBZa7pGaHGg354fand%2BANB%2FGIZsLy2pAZguH1PpaX%2FO9F2buvcIHMkncwhLGjwwY6pgHPYjYpLdE2UVh88enYfehT8Fb%2BJC01elY6Ypy%2FBdqt8SQCCsG6dPUpT%2F05RcWma9jpPb6NNbGV3JE0l%2BP3BySEQ4%2Bod9390URaHjIwKxNkPA1g4vwWz3iZi3E%2BWzaO73JdN2h6o%2FWk4618KiZaIJuiH%2FETP3vqGW5MUgi%2BHDiqA0ajAjK87qMi%2BKV6OiBzlD%2BSQJRAFFYqlQ72NP6oeKkpEz7XWquQ&X-Amz-Signature=11444516a37fcb2c7e23fa280987db766dbb19403a06e9a1e8ac884d1020914e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLJOSQM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICvUWviXHbJuULcKPqodNVEj484yvyhO96S4CUktIhnOAiAqIzvdL9lWffgfMdI2ia2X5yfMb28jujlZVT5cd3Qo6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMVstIxz4CcoPS%2FZTKtwDBuV8NLQi7xL15%2B96T8vvUk5XdeXtl5FbJbAQ2TlD9sHu%2F4a9g5m%2BG5xqPb9%2FGNADo1TnkGSFWldkCKTXHc3EBAE2HJsLGb%2BOhYuSnsN5nC83L83MG4Y9BJrZW3WJo6pyFQrAAetSga0ucdiuEpdxoqK9bgKIWa6jX%2B7sCBlgRTU9vAOmnBwyVmT3KIDy3hinjQG33BMF37%2F2Wt86ho6lthnLJuAoqlE5%2FduOgLby%2FS%2FLPOOhcSMMJbUuaf0g10czE%2BcTp6WAJ1sNovJNRFfTOBuaYR0AEGWt4gT60VnXimIpBe%2BhrU8aIGnTx1vA8n0oCpucwyHfk83NDxKAxxTT0NhF8uh37Zl5v%2BY9T0pxYH1uimRBArFB5JA5N4GhgjPaLail%2B4cNkQtjkASCbAiDUm244T0y4KJnNn3pPDteNV6KbC81yb6GEmqK%2Fx9uwINd4sZOJfugifRUh9bgZFqykHm9RvCsuD0tYVX27aKNJPWnEU817KKtfFwitJx10STJ%2B7HU%2FUInPMcC1yTXgHMrZTZeF%2FQQAzf4yFTN9SqliR8Mt7jmBuUKRtvwLkz0%2FnhbhGUkBZa7pGaHGg354fand%2BANB%2FGIZsLy2pAZguH1PpaX%2FO9F2buvcIHMkncwhLGjwwY6pgHPYjYpLdE2UVh88enYfehT8Fb%2BJC01elY6Ypy%2FBdqt8SQCCsG6dPUpT%2F05RcWma9jpPb6NNbGV3JE0l%2BP3BySEQ4%2Bod9390URaHjIwKxNkPA1g4vwWz3iZi3E%2BWzaO73JdN2h6o%2FWk4618KiZaIJuiH%2FETP3vqGW5MUgi%2BHDiqA0ajAjK87qMi%2BKV6OiBzlD%2BSQJRAFFYqlQ72NP6oeKkpEz7XWquQ&X-Amz-Signature=1360d237ba51910df902e5d32c436f3acda97b0518b1506ab343e4ebc09f19b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YLJOSQM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICvUWviXHbJuULcKPqodNVEj484yvyhO96S4CUktIhnOAiAqIzvdL9lWffgfMdI2ia2X5yfMb28jujlZVT5cd3Qo6ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMMVstIxz4CcoPS%2FZTKtwDBuV8NLQi7xL15%2B96T8vvUk5XdeXtl5FbJbAQ2TlD9sHu%2F4a9g5m%2BG5xqPb9%2FGNADo1TnkGSFWldkCKTXHc3EBAE2HJsLGb%2BOhYuSnsN5nC83L83MG4Y9BJrZW3WJo6pyFQrAAetSga0ucdiuEpdxoqK9bgKIWa6jX%2B7sCBlgRTU9vAOmnBwyVmT3KIDy3hinjQG33BMF37%2F2Wt86ho6lthnLJuAoqlE5%2FduOgLby%2FS%2FLPOOhcSMMJbUuaf0g10czE%2BcTp6WAJ1sNovJNRFfTOBuaYR0AEGWt4gT60VnXimIpBe%2BhrU8aIGnTx1vA8n0oCpucwyHfk83NDxKAxxTT0NhF8uh37Zl5v%2BY9T0pxYH1uimRBArFB5JA5N4GhgjPaLail%2B4cNkQtjkASCbAiDUm244T0y4KJnNn3pPDteNV6KbC81yb6GEmqK%2Fx9uwINd4sZOJfugifRUh9bgZFqykHm9RvCsuD0tYVX27aKNJPWnEU817KKtfFwitJx10STJ%2B7HU%2FUInPMcC1yTXgHMrZTZeF%2FQQAzf4yFTN9SqliR8Mt7jmBuUKRtvwLkz0%2FnhbhGUkBZa7pGaHGg354fand%2BANB%2FGIZsLy2pAZguH1PpaX%2FO9F2buvcIHMkncwhLGjwwY6pgHPYjYpLdE2UVh88enYfehT8Fb%2BJC01elY6Ypy%2FBdqt8SQCCsG6dPUpT%2F05RcWma9jpPb6NNbGV3JE0l%2BP3BySEQ4%2Bod9390URaHjIwKxNkPA1g4vwWz3iZi3E%2BWzaO73JdN2h6o%2FWk4618KiZaIJuiH%2FETP3vqGW5MUgi%2BHDiqA0ajAjK87qMi%2BKV6OiBzlD%2BSQJRAFFYqlQ72NP6oeKkpEz7XWquQ&X-Amz-Signature=9652334562d9818980910308b3aec49cd9b9bf72f0d5cddf148f6f208381e326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
