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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA2CABM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkESzr74ts%2FSGOS7eTFHA1sJ1sa%2BPhIEPNKyzIPpIVAIhAPjSnlOE0nm6g3Ntrs8UM4RTeYzqURwASpCZmabdNdu1Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyE8qu%2F4R7o1uxoDXQq3APYws%2FdrPtgRc%2FqKFrr63q%2FmBwE7SS%2BvXoXC4AnIRVun25BsZfO8NJMXDXx%2BdoZQCoL1OlzI%2FJgtlFcnYkHV1%2BS8z7b%2FsNJIcQOFutjmOEByDLB4FaaTlXipqVSe81JFpIsKj1RVq4hMV2d0Czd6KyezhQP2gGwe7zSqR7cMLlCAxhZfWZEymYtvGBNJvrvSWnRm9KiaubHIu4tqE%2F46VWn3nGod8HTFmKmtwOro1LLC79fex3Mek%2B0xGBi%2BUxHAXezayqiWaIg%2BX%2BghvhnRJlBdR8p2ejGbEzBxr68lhEqxEMH%2BODKhWk4xb2kOHcRK7nBmljVq02LAxQ7oP3sO87OCPhhM95dcaFbHiZ9K9guXuOcyyA3uKV%2BilqxTS16oCZak7TyN36Y44VbRzRGvptoRyJNOlGr9Rt9omqoXIxSD1V%2FNDUQnHNNckeRyKlJd88ZqymhAOmS9qjHkx%2FufTT7fdJeNQ6ciSm55AZBYxkgNjBYrkWWKPgFs6aoORSC%2F5kbKA9IOiGWMIrAvBBGZ%2FBjHBPkJvOpUXEkgEKm%2FtFqmdcB9GutEzIn5ABU0vK8veV7eSrIriaPmPR21y6DHpnihhJTQpmtbE0pbp%2FPzzuHs2sMva34hKjOyBXLhjCUzJi%2FBjqkAZV9uuaNVFPVaTjW5YtHFAFFILFkebCZDpHC6FiDpgnGOR3DNAq7nVeMJKKuGSjeiu4ZArvLSSwqyS7X%2B%2FCqmxkdKUNw8nn2QoSDOKOxq5QenEp8N%2B0YzggRn4d3as6x07q6eOodlTg6FQK0cv1yeYBJIKnlXcBR70R5UjNbMlrCKYP9vQF6Xae%2B%2FeDbF3%2BOfcsewhT6AGegOgIN5aPrnoR%2Fq291&X-Amz-Signature=dff09a6f72a39827f78f137489da9c71627ba81b24afb5dc5b301cdf3d63495e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA2CABM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkESzr74ts%2FSGOS7eTFHA1sJ1sa%2BPhIEPNKyzIPpIVAIhAPjSnlOE0nm6g3Ntrs8UM4RTeYzqURwASpCZmabdNdu1Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyE8qu%2F4R7o1uxoDXQq3APYws%2FdrPtgRc%2FqKFrr63q%2FmBwE7SS%2BvXoXC4AnIRVun25BsZfO8NJMXDXx%2BdoZQCoL1OlzI%2FJgtlFcnYkHV1%2BS8z7b%2FsNJIcQOFutjmOEByDLB4FaaTlXipqVSe81JFpIsKj1RVq4hMV2d0Czd6KyezhQP2gGwe7zSqR7cMLlCAxhZfWZEymYtvGBNJvrvSWnRm9KiaubHIu4tqE%2F46VWn3nGod8HTFmKmtwOro1LLC79fex3Mek%2B0xGBi%2BUxHAXezayqiWaIg%2BX%2BghvhnRJlBdR8p2ejGbEzBxr68lhEqxEMH%2BODKhWk4xb2kOHcRK7nBmljVq02LAxQ7oP3sO87OCPhhM95dcaFbHiZ9K9guXuOcyyA3uKV%2BilqxTS16oCZak7TyN36Y44VbRzRGvptoRyJNOlGr9Rt9omqoXIxSD1V%2FNDUQnHNNckeRyKlJd88ZqymhAOmS9qjHkx%2FufTT7fdJeNQ6ciSm55AZBYxkgNjBYrkWWKPgFs6aoORSC%2F5kbKA9IOiGWMIrAvBBGZ%2FBjHBPkJvOpUXEkgEKm%2FtFqmdcB9GutEzIn5ABU0vK8veV7eSrIriaPmPR21y6DHpnihhJTQpmtbE0pbp%2FPzzuHs2sMva34hKjOyBXLhjCUzJi%2FBjqkAZV9uuaNVFPVaTjW5YtHFAFFILFkebCZDpHC6FiDpgnGOR3DNAq7nVeMJKKuGSjeiu4ZArvLSSwqyS7X%2B%2FCqmxkdKUNw8nn2QoSDOKOxq5QenEp8N%2B0YzggRn4d3as6x07q6eOodlTg6FQK0cv1yeYBJIKnlXcBR70R5UjNbMlrCKYP9vQF6Xae%2B%2FeDbF3%2BOfcsewhT6AGegOgIN5aPrnoR%2Fq291&X-Amz-Signature=dd6092d26263396e91006e74bea4bcc0b862ece6c3e5e72ed0d7a6669a806ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA2CABM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkESzr74ts%2FSGOS7eTFHA1sJ1sa%2BPhIEPNKyzIPpIVAIhAPjSnlOE0nm6g3Ntrs8UM4RTeYzqURwASpCZmabdNdu1Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyE8qu%2F4R7o1uxoDXQq3APYws%2FdrPtgRc%2FqKFrr63q%2FmBwE7SS%2BvXoXC4AnIRVun25BsZfO8NJMXDXx%2BdoZQCoL1OlzI%2FJgtlFcnYkHV1%2BS8z7b%2FsNJIcQOFutjmOEByDLB4FaaTlXipqVSe81JFpIsKj1RVq4hMV2d0Czd6KyezhQP2gGwe7zSqR7cMLlCAxhZfWZEymYtvGBNJvrvSWnRm9KiaubHIu4tqE%2F46VWn3nGod8HTFmKmtwOro1LLC79fex3Mek%2B0xGBi%2BUxHAXezayqiWaIg%2BX%2BghvhnRJlBdR8p2ejGbEzBxr68lhEqxEMH%2BODKhWk4xb2kOHcRK7nBmljVq02LAxQ7oP3sO87OCPhhM95dcaFbHiZ9K9guXuOcyyA3uKV%2BilqxTS16oCZak7TyN36Y44VbRzRGvptoRyJNOlGr9Rt9omqoXIxSD1V%2FNDUQnHNNckeRyKlJd88ZqymhAOmS9qjHkx%2FufTT7fdJeNQ6ciSm55AZBYxkgNjBYrkWWKPgFs6aoORSC%2F5kbKA9IOiGWMIrAvBBGZ%2FBjHBPkJvOpUXEkgEKm%2FtFqmdcB9GutEzIn5ABU0vK8veV7eSrIriaPmPR21y6DHpnihhJTQpmtbE0pbp%2FPzzuHs2sMva34hKjOyBXLhjCUzJi%2FBjqkAZV9uuaNVFPVaTjW5YtHFAFFILFkebCZDpHC6FiDpgnGOR3DNAq7nVeMJKKuGSjeiu4ZArvLSSwqyS7X%2B%2FCqmxkdKUNw8nn2QoSDOKOxq5QenEp8N%2B0YzggRn4d3as6x07q6eOodlTg6FQK0cv1yeYBJIKnlXcBR70R5UjNbMlrCKYP9vQF6Xae%2B%2FeDbF3%2BOfcsewhT6AGegOgIN5aPrnoR%2Fq291&X-Amz-Signature=f59697f0fcc2a94e83535a4ad109d9d43766265438ba27f15b39708d4e0c32a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA2CABM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkESzr74ts%2FSGOS7eTFHA1sJ1sa%2BPhIEPNKyzIPpIVAIhAPjSnlOE0nm6g3Ntrs8UM4RTeYzqURwASpCZmabdNdu1Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyE8qu%2F4R7o1uxoDXQq3APYws%2FdrPtgRc%2FqKFrr63q%2FmBwE7SS%2BvXoXC4AnIRVun25BsZfO8NJMXDXx%2BdoZQCoL1OlzI%2FJgtlFcnYkHV1%2BS8z7b%2FsNJIcQOFutjmOEByDLB4FaaTlXipqVSe81JFpIsKj1RVq4hMV2d0Czd6KyezhQP2gGwe7zSqR7cMLlCAxhZfWZEymYtvGBNJvrvSWnRm9KiaubHIu4tqE%2F46VWn3nGod8HTFmKmtwOro1LLC79fex3Mek%2B0xGBi%2BUxHAXezayqiWaIg%2BX%2BghvhnRJlBdR8p2ejGbEzBxr68lhEqxEMH%2BODKhWk4xb2kOHcRK7nBmljVq02LAxQ7oP3sO87OCPhhM95dcaFbHiZ9K9guXuOcyyA3uKV%2BilqxTS16oCZak7TyN36Y44VbRzRGvptoRyJNOlGr9Rt9omqoXIxSD1V%2FNDUQnHNNckeRyKlJd88ZqymhAOmS9qjHkx%2FufTT7fdJeNQ6ciSm55AZBYxkgNjBYrkWWKPgFs6aoORSC%2F5kbKA9IOiGWMIrAvBBGZ%2FBjHBPkJvOpUXEkgEKm%2FtFqmdcB9GutEzIn5ABU0vK8veV7eSrIriaPmPR21y6DHpnihhJTQpmtbE0pbp%2FPzzuHs2sMva34hKjOyBXLhjCUzJi%2FBjqkAZV9uuaNVFPVaTjW5YtHFAFFILFkebCZDpHC6FiDpgnGOR3DNAq7nVeMJKKuGSjeiu4ZArvLSSwqyS7X%2B%2FCqmxkdKUNw8nn2QoSDOKOxq5QenEp8N%2B0YzggRn4d3as6x07q6eOodlTg6FQK0cv1yeYBJIKnlXcBR70R5UjNbMlrCKYP9vQF6Xae%2B%2FeDbF3%2BOfcsewhT6AGegOgIN5aPrnoR%2Fq291&X-Amz-Signature=122630ae308a58a707462103c10e83efce4f14cc907847fc607b7d80cdd4fbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA2CABM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkESzr74ts%2FSGOS7eTFHA1sJ1sa%2BPhIEPNKyzIPpIVAIhAPjSnlOE0nm6g3Ntrs8UM4RTeYzqURwASpCZmabdNdu1Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyE8qu%2F4R7o1uxoDXQq3APYws%2FdrPtgRc%2FqKFrr63q%2FmBwE7SS%2BvXoXC4AnIRVun25BsZfO8NJMXDXx%2BdoZQCoL1OlzI%2FJgtlFcnYkHV1%2BS8z7b%2FsNJIcQOFutjmOEByDLB4FaaTlXipqVSe81JFpIsKj1RVq4hMV2d0Czd6KyezhQP2gGwe7zSqR7cMLlCAxhZfWZEymYtvGBNJvrvSWnRm9KiaubHIu4tqE%2F46VWn3nGod8HTFmKmtwOro1LLC79fex3Mek%2B0xGBi%2BUxHAXezayqiWaIg%2BX%2BghvhnRJlBdR8p2ejGbEzBxr68lhEqxEMH%2BODKhWk4xb2kOHcRK7nBmljVq02LAxQ7oP3sO87OCPhhM95dcaFbHiZ9K9guXuOcyyA3uKV%2BilqxTS16oCZak7TyN36Y44VbRzRGvptoRyJNOlGr9Rt9omqoXIxSD1V%2FNDUQnHNNckeRyKlJd88ZqymhAOmS9qjHkx%2FufTT7fdJeNQ6ciSm55AZBYxkgNjBYrkWWKPgFs6aoORSC%2F5kbKA9IOiGWMIrAvBBGZ%2FBjHBPkJvOpUXEkgEKm%2FtFqmdcB9GutEzIn5ABU0vK8veV7eSrIriaPmPR21y6DHpnihhJTQpmtbE0pbp%2FPzzuHs2sMva34hKjOyBXLhjCUzJi%2FBjqkAZV9uuaNVFPVaTjW5YtHFAFFILFkebCZDpHC6FiDpgnGOR3DNAq7nVeMJKKuGSjeiu4ZArvLSSwqyS7X%2B%2FCqmxkdKUNw8nn2QoSDOKOxq5QenEp8N%2B0YzggRn4d3as6x07q6eOodlTg6FQK0cv1yeYBJIKnlXcBR70R5UjNbMlrCKYP9vQF6Xae%2B%2FeDbF3%2BOfcsewhT6AGegOgIN5aPrnoR%2Fq291&X-Amz-Signature=8ab0776c68c08c64db11c59dceb7026995e3448c284b5b08816379025ccaf155&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA2CABM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkESzr74ts%2FSGOS7eTFHA1sJ1sa%2BPhIEPNKyzIPpIVAIhAPjSnlOE0nm6g3Ntrs8UM4RTeYzqURwASpCZmabdNdu1Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyE8qu%2F4R7o1uxoDXQq3APYws%2FdrPtgRc%2FqKFrr63q%2FmBwE7SS%2BvXoXC4AnIRVun25BsZfO8NJMXDXx%2BdoZQCoL1OlzI%2FJgtlFcnYkHV1%2BS8z7b%2FsNJIcQOFutjmOEByDLB4FaaTlXipqVSe81JFpIsKj1RVq4hMV2d0Czd6KyezhQP2gGwe7zSqR7cMLlCAxhZfWZEymYtvGBNJvrvSWnRm9KiaubHIu4tqE%2F46VWn3nGod8HTFmKmtwOro1LLC79fex3Mek%2B0xGBi%2BUxHAXezayqiWaIg%2BX%2BghvhnRJlBdR8p2ejGbEzBxr68lhEqxEMH%2BODKhWk4xb2kOHcRK7nBmljVq02LAxQ7oP3sO87OCPhhM95dcaFbHiZ9K9guXuOcyyA3uKV%2BilqxTS16oCZak7TyN36Y44VbRzRGvptoRyJNOlGr9Rt9omqoXIxSD1V%2FNDUQnHNNckeRyKlJd88ZqymhAOmS9qjHkx%2FufTT7fdJeNQ6ciSm55AZBYxkgNjBYrkWWKPgFs6aoORSC%2F5kbKA9IOiGWMIrAvBBGZ%2FBjHBPkJvOpUXEkgEKm%2FtFqmdcB9GutEzIn5ABU0vK8veV7eSrIriaPmPR21y6DHpnihhJTQpmtbE0pbp%2FPzzuHs2sMva34hKjOyBXLhjCUzJi%2FBjqkAZV9uuaNVFPVaTjW5YtHFAFFILFkebCZDpHC6FiDpgnGOR3DNAq7nVeMJKKuGSjeiu4ZArvLSSwqyS7X%2B%2FCqmxkdKUNw8nn2QoSDOKOxq5QenEp8N%2B0YzggRn4d3as6x07q6eOodlTg6FQK0cv1yeYBJIKnlXcBR70R5UjNbMlrCKYP9vQF6Xae%2B%2FeDbF3%2BOfcsewhT6AGegOgIN5aPrnoR%2Fq291&X-Amz-Signature=154ca4465e4a77bd599666564a2b7d007da17c748566fdbdb198cd41a70c4f77&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA2CABM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYkESzr74ts%2FSGOS7eTFHA1sJ1sa%2BPhIEPNKyzIPpIVAIhAPjSnlOE0nm6g3Ntrs8UM4RTeYzqURwASpCZmabdNdu1Kv8DCFYQABoMNjM3NDIzMTgzODA1IgyE8qu%2F4R7o1uxoDXQq3APYws%2FdrPtgRc%2FqKFrr63q%2FmBwE7SS%2BvXoXC4AnIRVun25BsZfO8NJMXDXx%2BdoZQCoL1OlzI%2FJgtlFcnYkHV1%2BS8z7b%2FsNJIcQOFutjmOEByDLB4FaaTlXipqVSe81JFpIsKj1RVq4hMV2d0Czd6KyezhQP2gGwe7zSqR7cMLlCAxhZfWZEymYtvGBNJvrvSWnRm9KiaubHIu4tqE%2F46VWn3nGod8HTFmKmtwOro1LLC79fex3Mek%2B0xGBi%2BUxHAXezayqiWaIg%2BX%2BghvhnRJlBdR8p2ejGbEzBxr68lhEqxEMH%2BODKhWk4xb2kOHcRK7nBmljVq02LAxQ7oP3sO87OCPhhM95dcaFbHiZ9K9guXuOcyyA3uKV%2BilqxTS16oCZak7TyN36Y44VbRzRGvptoRyJNOlGr9Rt9omqoXIxSD1V%2FNDUQnHNNckeRyKlJd88ZqymhAOmS9qjHkx%2FufTT7fdJeNQ6ciSm55AZBYxkgNjBYrkWWKPgFs6aoORSC%2F5kbKA9IOiGWMIrAvBBGZ%2FBjHBPkJvOpUXEkgEKm%2FtFqmdcB9GutEzIn5ABU0vK8veV7eSrIriaPmPR21y6DHpnihhJTQpmtbE0pbp%2FPzzuHs2sMva34hKjOyBXLhjCUzJi%2FBjqkAZV9uuaNVFPVaTjW5YtHFAFFILFkebCZDpHC6FiDpgnGOR3DNAq7nVeMJKKuGSjeiu4ZArvLSSwqyS7X%2B%2FCqmxkdKUNw8nn2QoSDOKOxq5QenEp8N%2B0YzggRn4d3as6x07q6eOodlTg6FQK0cv1yeYBJIKnlXcBR70R5UjNbMlrCKYP9vQF6Xae%2B%2FeDbF3%2BOfcsewhT6AGegOgIN5aPrnoR%2Fq291&X-Amz-Signature=c25798053074710cf53825bad5a35adbf296c035e3e113f219419eba4e370c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
