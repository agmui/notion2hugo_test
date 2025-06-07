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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W357PA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWGiYIe8tOS6nA8D3%2Bz62%2Fw3tOk0bGr4RE5KcF6H5NgIgU0Xz%2FwZqFY12mQAx8RqWMidxRtzXFgVtLt9XvoAGxfoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBfTA4PNQTEj2RzH3ircAzangi6eE%2FDpIRQdYNYE2eoTHTjCcKRFaPVRWnnCL3JJbgtcPyPEVdsXSSExejVZF0aatrf7Jg0tRfN3s%2FPWxMassKy0r5mNMgmfFjmxsMuTqnT0hyGeP6qnPtXPggsIADP5ZPn3YWdvCrol41V2y534%2Bty3QAdBhfVMmvLv%2BLT6l%2FbnjD%2F14TwSLRWitmNopSdd0fXOcITSRfpohGwaZFDgWn6y9h9p8%2F0j5ExgYwKrAgJhAEVcMuZmgyZSVRa%2BWatqvp33RdZAeYua0EHKj3Wu%2FtrG7NFSjE5cYQl4HrDvlU%2FX3G4uI4njQq5%2Bv4qu7M69uCvLLT5CHj%2BQtG7jx8BCv2EfT1Atg64fASpaVezffrAbKHxb%2ForqydkFg6upQZukXJNQXQLJxOsilTnPYidpHEY%2F6R5YfYPZKQ%2FJlP25L%2BJfCUvSeRJtbSonYT0I2JoGeXCaHhg62yTKDXT8t%2FsIzeXVBrCgqTuKKVQ%2BhgLET2b8Uw1L5lSifQNN0m6AI7cUd7aeg0cI9h6aJ7y3nLyXddMmFjsvWGmyw90I1GuUDEKeJ0sgxdR30e0t%2FW3AyhCHkjNf%2FJpgo%2FmpRvrcfgAFqQzbC3hx6RnHTPVci3fuZ0xkiPQf74SXnQRKMPu3j8IGOqUBwRhs7fQKun8H4GVzF7CZvCLcBFxSbdVtGS9S7jtWTJXNuAx2GDKkFz%2BhDfBwfhv5250m7omMoaccovxGJFLac82PXMmE%2BWG%2Bod%2BHg0BZ7ba%2FWE107ouAG2pwXFNz4yQLMx4PPZZHsZwoAegfBa7EQZpMBrhWx5w5%2FdInic00sGnZzpwFQEq0afW4pUelJ8fVdJ1tR0ixUn7audGYqnMfwF21fdrO&X-Amz-Signature=53b283cb9df49b959c4b6bbabde6f3cae6b4bfccded2df6d0b1042d750ea2f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W357PA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWGiYIe8tOS6nA8D3%2Bz62%2Fw3tOk0bGr4RE5KcF6H5NgIgU0Xz%2FwZqFY12mQAx8RqWMidxRtzXFgVtLt9XvoAGxfoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBfTA4PNQTEj2RzH3ircAzangi6eE%2FDpIRQdYNYE2eoTHTjCcKRFaPVRWnnCL3JJbgtcPyPEVdsXSSExejVZF0aatrf7Jg0tRfN3s%2FPWxMassKy0r5mNMgmfFjmxsMuTqnT0hyGeP6qnPtXPggsIADP5ZPn3YWdvCrol41V2y534%2Bty3QAdBhfVMmvLv%2BLT6l%2FbnjD%2F14TwSLRWitmNopSdd0fXOcITSRfpohGwaZFDgWn6y9h9p8%2F0j5ExgYwKrAgJhAEVcMuZmgyZSVRa%2BWatqvp33RdZAeYua0EHKj3Wu%2FtrG7NFSjE5cYQl4HrDvlU%2FX3G4uI4njQq5%2Bv4qu7M69uCvLLT5CHj%2BQtG7jx8BCv2EfT1Atg64fASpaVezffrAbKHxb%2ForqydkFg6upQZukXJNQXQLJxOsilTnPYidpHEY%2F6R5YfYPZKQ%2FJlP25L%2BJfCUvSeRJtbSonYT0I2JoGeXCaHhg62yTKDXT8t%2FsIzeXVBrCgqTuKKVQ%2BhgLET2b8Uw1L5lSifQNN0m6AI7cUd7aeg0cI9h6aJ7y3nLyXddMmFjsvWGmyw90I1GuUDEKeJ0sgxdR30e0t%2FW3AyhCHkjNf%2FJpgo%2FmpRvrcfgAFqQzbC3hx6RnHTPVci3fuZ0xkiPQf74SXnQRKMPu3j8IGOqUBwRhs7fQKun8H4GVzF7CZvCLcBFxSbdVtGS9S7jtWTJXNuAx2GDKkFz%2BhDfBwfhv5250m7omMoaccovxGJFLac82PXMmE%2BWG%2Bod%2BHg0BZ7ba%2FWE107ouAG2pwXFNz4yQLMx4PPZZHsZwoAegfBa7EQZpMBrhWx5w5%2FdInic00sGnZzpwFQEq0afW4pUelJ8fVdJ1tR0ixUn7audGYqnMfwF21fdrO&X-Amz-Signature=6bc00bba5225b2ac3178700fa25615fa15e89096d40050e6192fa837d9f2f9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W357PA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWGiYIe8tOS6nA8D3%2Bz62%2Fw3tOk0bGr4RE5KcF6H5NgIgU0Xz%2FwZqFY12mQAx8RqWMidxRtzXFgVtLt9XvoAGxfoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBfTA4PNQTEj2RzH3ircAzangi6eE%2FDpIRQdYNYE2eoTHTjCcKRFaPVRWnnCL3JJbgtcPyPEVdsXSSExejVZF0aatrf7Jg0tRfN3s%2FPWxMassKy0r5mNMgmfFjmxsMuTqnT0hyGeP6qnPtXPggsIADP5ZPn3YWdvCrol41V2y534%2Bty3QAdBhfVMmvLv%2BLT6l%2FbnjD%2F14TwSLRWitmNopSdd0fXOcITSRfpohGwaZFDgWn6y9h9p8%2F0j5ExgYwKrAgJhAEVcMuZmgyZSVRa%2BWatqvp33RdZAeYua0EHKj3Wu%2FtrG7NFSjE5cYQl4HrDvlU%2FX3G4uI4njQq5%2Bv4qu7M69uCvLLT5CHj%2BQtG7jx8BCv2EfT1Atg64fASpaVezffrAbKHxb%2ForqydkFg6upQZukXJNQXQLJxOsilTnPYidpHEY%2F6R5YfYPZKQ%2FJlP25L%2BJfCUvSeRJtbSonYT0I2JoGeXCaHhg62yTKDXT8t%2FsIzeXVBrCgqTuKKVQ%2BhgLET2b8Uw1L5lSifQNN0m6AI7cUd7aeg0cI9h6aJ7y3nLyXddMmFjsvWGmyw90I1GuUDEKeJ0sgxdR30e0t%2FW3AyhCHkjNf%2FJpgo%2FmpRvrcfgAFqQzbC3hx6RnHTPVci3fuZ0xkiPQf74SXnQRKMPu3j8IGOqUBwRhs7fQKun8H4GVzF7CZvCLcBFxSbdVtGS9S7jtWTJXNuAx2GDKkFz%2BhDfBwfhv5250m7omMoaccovxGJFLac82PXMmE%2BWG%2Bod%2BHg0BZ7ba%2FWE107ouAG2pwXFNz4yQLMx4PPZZHsZwoAegfBa7EQZpMBrhWx5w5%2FdInic00sGnZzpwFQEq0afW4pUelJ8fVdJ1tR0ixUn7audGYqnMfwF21fdrO&X-Amz-Signature=37377a94c4cd781f4c9ba8360f0b4f1ad1f92ff40f299517fee8377cd335f0c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W357PA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWGiYIe8tOS6nA8D3%2Bz62%2Fw3tOk0bGr4RE5KcF6H5NgIgU0Xz%2FwZqFY12mQAx8RqWMidxRtzXFgVtLt9XvoAGxfoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBfTA4PNQTEj2RzH3ircAzangi6eE%2FDpIRQdYNYE2eoTHTjCcKRFaPVRWnnCL3JJbgtcPyPEVdsXSSExejVZF0aatrf7Jg0tRfN3s%2FPWxMassKy0r5mNMgmfFjmxsMuTqnT0hyGeP6qnPtXPggsIADP5ZPn3YWdvCrol41V2y534%2Bty3QAdBhfVMmvLv%2BLT6l%2FbnjD%2F14TwSLRWitmNopSdd0fXOcITSRfpohGwaZFDgWn6y9h9p8%2F0j5ExgYwKrAgJhAEVcMuZmgyZSVRa%2BWatqvp33RdZAeYua0EHKj3Wu%2FtrG7NFSjE5cYQl4HrDvlU%2FX3G4uI4njQq5%2Bv4qu7M69uCvLLT5CHj%2BQtG7jx8BCv2EfT1Atg64fASpaVezffrAbKHxb%2ForqydkFg6upQZukXJNQXQLJxOsilTnPYidpHEY%2F6R5YfYPZKQ%2FJlP25L%2BJfCUvSeRJtbSonYT0I2JoGeXCaHhg62yTKDXT8t%2FsIzeXVBrCgqTuKKVQ%2BhgLET2b8Uw1L5lSifQNN0m6AI7cUd7aeg0cI9h6aJ7y3nLyXddMmFjsvWGmyw90I1GuUDEKeJ0sgxdR30e0t%2FW3AyhCHkjNf%2FJpgo%2FmpRvrcfgAFqQzbC3hx6RnHTPVci3fuZ0xkiPQf74SXnQRKMPu3j8IGOqUBwRhs7fQKun8H4GVzF7CZvCLcBFxSbdVtGS9S7jtWTJXNuAx2GDKkFz%2BhDfBwfhv5250m7omMoaccovxGJFLac82PXMmE%2BWG%2Bod%2BHg0BZ7ba%2FWE107ouAG2pwXFNz4yQLMx4PPZZHsZwoAegfBa7EQZpMBrhWx5w5%2FdInic00sGnZzpwFQEq0afW4pUelJ8fVdJ1tR0ixUn7audGYqnMfwF21fdrO&X-Amz-Signature=c2f2148e8ea71fcc512a94e59989f83d84766b890420ad3b94c9ba0a60c689da&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W357PA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWGiYIe8tOS6nA8D3%2Bz62%2Fw3tOk0bGr4RE5KcF6H5NgIgU0Xz%2FwZqFY12mQAx8RqWMidxRtzXFgVtLt9XvoAGxfoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBfTA4PNQTEj2RzH3ircAzangi6eE%2FDpIRQdYNYE2eoTHTjCcKRFaPVRWnnCL3JJbgtcPyPEVdsXSSExejVZF0aatrf7Jg0tRfN3s%2FPWxMassKy0r5mNMgmfFjmxsMuTqnT0hyGeP6qnPtXPggsIADP5ZPn3YWdvCrol41V2y534%2Bty3QAdBhfVMmvLv%2BLT6l%2FbnjD%2F14TwSLRWitmNopSdd0fXOcITSRfpohGwaZFDgWn6y9h9p8%2F0j5ExgYwKrAgJhAEVcMuZmgyZSVRa%2BWatqvp33RdZAeYua0EHKj3Wu%2FtrG7NFSjE5cYQl4HrDvlU%2FX3G4uI4njQq5%2Bv4qu7M69uCvLLT5CHj%2BQtG7jx8BCv2EfT1Atg64fASpaVezffrAbKHxb%2ForqydkFg6upQZukXJNQXQLJxOsilTnPYidpHEY%2F6R5YfYPZKQ%2FJlP25L%2BJfCUvSeRJtbSonYT0I2JoGeXCaHhg62yTKDXT8t%2FsIzeXVBrCgqTuKKVQ%2BhgLET2b8Uw1L5lSifQNN0m6AI7cUd7aeg0cI9h6aJ7y3nLyXddMmFjsvWGmyw90I1GuUDEKeJ0sgxdR30e0t%2FW3AyhCHkjNf%2FJpgo%2FmpRvrcfgAFqQzbC3hx6RnHTPVci3fuZ0xkiPQf74SXnQRKMPu3j8IGOqUBwRhs7fQKun8H4GVzF7CZvCLcBFxSbdVtGS9S7jtWTJXNuAx2GDKkFz%2BhDfBwfhv5250m7omMoaccovxGJFLac82PXMmE%2BWG%2Bod%2BHg0BZ7ba%2FWE107ouAG2pwXFNz4yQLMx4PPZZHsZwoAegfBa7EQZpMBrhWx5w5%2FdInic00sGnZzpwFQEq0afW4pUelJ8fVdJ1tR0ixUn7audGYqnMfwF21fdrO&X-Amz-Signature=cf2cc1e615414add78e3958d19066a926083c7b76396269c9f7dcc71ccd33cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W357PA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWGiYIe8tOS6nA8D3%2Bz62%2Fw3tOk0bGr4RE5KcF6H5NgIgU0Xz%2FwZqFY12mQAx8RqWMidxRtzXFgVtLt9XvoAGxfoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBfTA4PNQTEj2RzH3ircAzangi6eE%2FDpIRQdYNYE2eoTHTjCcKRFaPVRWnnCL3JJbgtcPyPEVdsXSSExejVZF0aatrf7Jg0tRfN3s%2FPWxMassKy0r5mNMgmfFjmxsMuTqnT0hyGeP6qnPtXPggsIADP5ZPn3YWdvCrol41V2y534%2Bty3QAdBhfVMmvLv%2BLT6l%2FbnjD%2F14TwSLRWitmNopSdd0fXOcITSRfpohGwaZFDgWn6y9h9p8%2F0j5ExgYwKrAgJhAEVcMuZmgyZSVRa%2BWatqvp33RdZAeYua0EHKj3Wu%2FtrG7NFSjE5cYQl4HrDvlU%2FX3G4uI4njQq5%2Bv4qu7M69uCvLLT5CHj%2BQtG7jx8BCv2EfT1Atg64fASpaVezffrAbKHxb%2ForqydkFg6upQZukXJNQXQLJxOsilTnPYidpHEY%2F6R5YfYPZKQ%2FJlP25L%2BJfCUvSeRJtbSonYT0I2JoGeXCaHhg62yTKDXT8t%2FsIzeXVBrCgqTuKKVQ%2BhgLET2b8Uw1L5lSifQNN0m6AI7cUd7aeg0cI9h6aJ7y3nLyXddMmFjsvWGmyw90I1GuUDEKeJ0sgxdR30e0t%2FW3AyhCHkjNf%2FJpgo%2FmpRvrcfgAFqQzbC3hx6RnHTPVci3fuZ0xkiPQf74SXnQRKMPu3j8IGOqUBwRhs7fQKun8H4GVzF7CZvCLcBFxSbdVtGS9S7jtWTJXNuAx2GDKkFz%2BhDfBwfhv5250m7omMoaccovxGJFLac82PXMmE%2BWG%2Bod%2BHg0BZ7ba%2FWE107ouAG2pwXFNz4yQLMx4PPZZHsZwoAegfBa7EQZpMBrhWx5w5%2FdInic00sGnZzpwFQEq0afW4pUelJ8fVdJ1tR0ixUn7audGYqnMfwF21fdrO&X-Amz-Signature=287a9a6bf8070b8def788df4280ded880ba2cdcb2968e2a6f63a0add5af9de46&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W357PA%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcWGiYIe8tOS6nA8D3%2Bz62%2Fw3tOk0bGr4RE5KcF6H5NgIgU0Xz%2FwZqFY12mQAx8RqWMidxRtzXFgVtLt9XvoAGxfoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBfTA4PNQTEj2RzH3ircAzangi6eE%2FDpIRQdYNYE2eoTHTjCcKRFaPVRWnnCL3JJbgtcPyPEVdsXSSExejVZF0aatrf7Jg0tRfN3s%2FPWxMassKy0r5mNMgmfFjmxsMuTqnT0hyGeP6qnPtXPggsIADP5ZPn3YWdvCrol41V2y534%2Bty3QAdBhfVMmvLv%2BLT6l%2FbnjD%2F14TwSLRWitmNopSdd0fXOcITSRfpohGwaZFDgWn6y9h9p8%2F0j5ExgYwKrAgJhAEVcMuZmgyZSVRa%2BWatqvp33RdZAeYua0EHKj3Wu%2FtrG7NFSjE5cYQl4HrDvlU%2FX3G4uI4njQq5%2Bv4qu7M69uCvLLT5CHj%2BQtG7jx8BCv2EfT1Atg64fASpaVezffrAbKHxb%2ForqydkFg6upQZukXJNQXQLJxOsilTnPYidpHEY%2F6R5YfYPZKQ%2FJlP25L%2BJfCUvSeRJtbSonYT0I2JoGeXCaHhg62yTKDXT8t%2FsIzeXVBrCgqTuKKVQ%2BhgLET2b8Uw1L5lSifQNN0m6AI7cUd7aeg0cI9h6aJ7y3nLyXddMmFjsvWGmyw90I1GuUDEKeJ0sgxdR30e0t%2FW3AyhCHkjNf%2FJpgo%2FmpRvrcfgAFqQzbC3hx6RnHTPVci3fuZ0xkiPQf74SXnQRKMPu3j8IGOqUBwRhs7fQKun8H4GVzF7CZvCLcBFxSbdVtGS9S7jtWTJXNuAx2GDKkFz%2BhDfBwfhv5250m7omMoaccovxGJFLac82PXMmE%2BWG%2Bod%2BHg0BZ7ba%2FWE107ouAG2pwXFNz4yQLMx4PPZZHsZwoAegfBa7EQZpMBrhWx5w5%2FdInic00sGnZzpwFQEq0afW4pUelJ8fVdJ1tR0ixUn7audGYqnMfwF21fdrO&X-Amz-Signature=c55c33184bb3ba83183b13954e441a96479b8dc1d90b688adcd7fd06f91433eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
