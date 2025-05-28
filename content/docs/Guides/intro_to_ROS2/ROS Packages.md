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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647V3MLK3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FZ3%2Fgo3TnlhOFEWGo6HPEDXBCKi%2FlbzQbVY5u8LAoEQIhAMVPCIGSYJ8H36fWotJz6UY2zqIqwt8R2LkiNUbuvXJhKv8DCG8QABoMNjM3NDIzMTgzODA1IgyY3m7Pbm%2FdCvjtpC8q3ANqw%2B%2FBEPWzmGgaBw6qUb1s0r%2BtqSNWpCI8ICh9JnvthMKeqP5Dl15%2FedVFUS%2BF8oQdhRnvdMk0%2BaFkZJ0T%2BKTShQkL4tZaE%2FysjY6qgZ17a%2BHjiwLTcLmxSMKkiyj%2FGogsatgHJboNvfYfVcSd78uVRDCzz21VZO4OsSiWlu0lq9cQEBx9gG2LgGyht4NIT9MEGyINLTYZrLwWzB87qCvelnGIDbbJgXPNudP6aF7oswifOIgE1MHwmUy2RXrqBIsYEf1lN21SmQ9jmqEsMBpT4%2By5J%2BUJJVDDGpxg%2BfN1bWHnAjLQ2Okf3hAuWfFllHu27aOEaMAQtgS7qyIzBDh1Oxlzcx0S4kUW9wV7t2tHUcLicygic9JiOsfcL0NhjQ1YVqR0pFqtQOggQA%2FuXwTcJt%2B4Cr8ulY9T5Cr5xgmXZbqCYmXHzCQJ8iGl9JqKPkRTwVMkBqBsQCMOesvaiuEhVTDAKgxUaWef6UmekuQF8ftpsIxo234Zj%2Bh3qOzzBU5kCqykZGhbxg46ghheIFGYcYjdVd9r73BVpov4VGN6StFqilCWF0cgpFzuvrpT%2F%2BS4dXxDn%2BEf3RrL%2FR05SpkDIoo%2Byz0%2B6EUbywVO8lTFrvGQvkInpDK5w7BrtzCxxNrBBjqkAfn9iw2%2F5wflzKFg1RlwVBn5yIEyclm7oaIysFBShc4KqbSrGcKltSbonNrB2leu8WsaMD2gZMA3yYoHczOplyBwhsyCoHcvBw0sxP%2BgF6GruXmGXMSXS0IB%2F3cgmjaKv9DJR4n3qmApUMXGceZ1q%2BgD%2FgDo5uVjYVcIkdji1n8zv9nUCNPEL%2FS0850%2FmeBUvhqbmKwS%2BxzF3poX7d7wb8E%2Bb8fN&X-Amz-Signature=34d878097df264b2c581eb9038e03101677a651e347b8b4363d7d31e471e3e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647V3MLK3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FZ3%2Fgo3TnlhOFEWGo6HPEDXBCKi%2FlbzQbVY5u8LAoEQIhAMVPCIGSYJ8H36fWotJz6UY2zqIqwt8R2LkiNUbuvXJhKv8DCG8QABoMNjM3NDIzMTgzODA1IgyY3m7Pbm%2FdCvjtpC8q3ANqw%2B%2FBEPWzmGgaBw6qUb1s0r%2BtqSNWpCI8ICh9JnvthMKeqP5Dl15%2FedVFUS%2BF8oQdhRnvdMk0%2BaFkZJ0T%2BKTShQkL4tZaE%2FysjY6qgZ17a%2BHjiwLTcLmxSMKkiyj%2FGogsatgHJboNvfYfVcSd78uVRDCzz21VZO4OsSiWlu0lq9cQEBx9gG2LgGyht4NIT9MEGyINLTYZrLwWzB87qCvelnGIDbbJgXPNudP6aF7oswifOIgE1MHwmUy2RXrqBIsYEf1lN21SmQ9jmqEsMBpT4%2By5J%2BUJJVDDGpxg%2BfN1bWHnAjLQ2Okf3hAuWfFllHu27aOEaMAQtgS7qyIzBDh1Oxlzcx0S4kUW9wV7t2tHUcLicygic9JiOsfcL0NhjQ1YVqR0pFqtQOggQA%2FuXwTcJt%2B4Cr8ulY9T5Cr5xgmXZbqCYmXHzCQJ8iGl9JqKPkRTwVMkBqBsQCMOesvaiuEhVTDAKgxUaWef6UmekuQF8ftpsIxo234Zj%2Bh3qOzzBU5kCqykZGhbxg46ghheIFGYcYjdVd9r73BVpov4VGN6StFqilCWF0cgpFzuvrpT%2F%2BS4dXxDn%2BEf3RrL%2FR05SpkDIoo%2Byz0%2B6EUbywVO8lTFrvGQvkInpDK5w7BrtzCxxNrBBjqkAfn9iw2%2F5wflzKFg1RlwVBn5yIEyclm7oaIysFBShc4KqbSrGcKltSbonNrB2leu8WsaMD2gZMA3yYoHczOplyBwhsyCoHcvBw0sxP%2BgF6GruXmGXMSXS0IB%2F3cgmjaKv9DJR4n3qmApUMXGceZ1q%2BgD%2FgDo5uVjYVcIkdji1n8zv9nUCNPEL%2FS0850%2FmeBUvhqbmKwS%2BxzF3poX7d7wb8E%2Bb8fN&X-Amz-Signature=1aa1925becd8b0ef7cc6f1a566f1843aead6dcdd480c89e27f3feaf26dbb9b13&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647V3MLK3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FZ3%2Fgo3TnlhOFEWGo6HPEDXBCKi%2FlbzQbVY5u8LAoEQIhAMVPCIGSYJ8H36fWotJz6UY2zqIqwt8R2LkiNUbuvXJhKv8DCG8QABoMNjM3NDIzMTgzODA1IgyY3m7Pbm%2FdCvjtpC8q3ANqw%2B%2FBEPWzmGgaBw6qUb1s0r%2BtqSNWpCI8ICh9JnvthMKeqP5Dl15%2FedVFUS%2BF8oQdhRnvdMk0%2BaFkZJ0T%2BKTShQkL4tZaE%2FysjY6qgZ17a%2BHjiwLTcLmxSMKkiyj%2FGogsatgHJboNvfYfVcSd78uVRDCzz21VZO4OsSiWlu0lq9cQEBx9gG2LgGyht4NIT9MEGyINLTYZrLwWzB87qCvelnGIDbbJgXPNudP6aF7oswifOIgE1MHwmUy2RXrqBIsYEf1lN21SmQ9jmqEsMBpT4%2By5J%2BUJJVDDGpxg%2BfN1bWHnAjLQ2Okf3hAuWfFllHu27aOEaMAQtgS7qyIzBDh1Oxlzcx0S4kUW9wV7t2tHUcLicygic9JiOsfcL0NhjQ1YVqR0pFqtQOggQA%2FuXwTcJt%2B4Cr8ulY9T5Cr5xgmXZbqCYmXHzCQJ8iGl9JqKPkRTwVMkBqBsQCMOesvaiuEhVTDAKgxUaWef6UmekuQF8ftpsIxo234Zj%2Bh3qOzzBU5kCqykZGhbxg46ghheIFGYcYjdVd9r73BVpov4VGN6StFqilCWF0cgpFzuvrpT%2F%2BS4dXxDn%2BEf3RrL%2FR05SpkDIoo%2Byz0%2B6EUbywVO8lTFrvGQvkInpDK5w7BrtzCxxNrBBjqkAfn9iw2%2F5wflzKFg1RlwVBn5yIEyclm7oaIysFBShc4KqbSrGcKltSbonNrB2leu8WsaMD2gZMA3yYoHczOplyBwhsyCoHcvBw0sxP%2BgF6GruXmGXMSXS0IB%2F3cgmjaKv9DJR4n3qmApUMXGceZ1q%2BgD%2FgDo5uVjYVcIkdji1n8zv9nUCNPEL%2FS0850%2FmeBUvhqbmKwS%2BxzF3poX7d7wb8E%2Bb8fN&X-Amz-Signature=d236f9cf13d1b11e5d9d893a6eb08e4bb2032328045f42f71bfbcccd862d72fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647V3MLK3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FZ3%2Fgo3TnlhOFEWGo6HPEDXBCKi%2FlbzQbVY5u8LAoEQIhAMVPCIGSYJ8H36fWotJz6UY2zqIqwt8R2LkiNUbuvXJhKv8DCG8QABoMNjM3NDIzMTgzODA1IgyY3m7Pbm%2FdCvjtpC8q3ANqw%2B%2FBEPWzmGgaBw6qUb1s0r%2BtqSNWpCI8ICh9JnvthMKeqP5Dl15%2FedVFUS%2BF8oQdhRnvdMk0%2BaFkZJ0T%2BKTShQkL4tZaE%2FysjY6qgZ17a%2BHjiwLTcLmxSMKkiyj%2FGogsatgHJboNvfYfVcSd78uVRDCzz21VZO4OsSiWlu0lq9cQEBx9gG2LgGyht4NIT9MEGyINLTYZrLwWzB87qCvelnGIDbbJgXPNudP6aF7oswifOIgE1MHwmUy2RXrqBIsYEf1lN21SmQ9jmqEsMBpT4%2By5J%2BUJJVDDGpxg%2BfN1bWHnAjLQ2Okf3hAuWfFllHu27aOEaMAQtgS7qyIzBDh1Oxlzcx0S4kUW9wV7t2tHUcLicygic9JiOsfcL0NhjQ1YVqR0pFqtQOggQA%2FuXwTcJt%2B4Cr8ulY9T5Cr5xgmXZbqCYmXHzCQJ8iGl9JqKPkRTwVMkBqBsQCMOesvaiuEhVTDAKgxUaWef6UmekuQF8ftpsIxo234Zj%2Bh3qOzzBU5kCqykZGhbxg46ghheIFGYcYjdVd9r73BVpov4VGN6StFqilCWF0cgpFzuvrpT%2F%2BS4dXxDn%2BEf3RrL%2FR05SpkDIoo%2Byz0%2B6EUbywVO8lTFrvGQvkInpDK5w7BrtzCxxNrBBjqkAfn9iw2%2F5wflzKFg1RlwVBn5yIEyclm7oaIysFBShc4KqbSrGcKltSbonNrB2leu8WsaMD2gZMA3yYoHczOplyBwhsyCoHcvBw0sxP%2BgF6GruXmGXMSXS0IB%2F3cgmjaKv9DJR4n3qmApUMXGceZ1q%2BgD%2FgDo5uVjYVcIkdji1n8zv9nUCNPEL%2FS0850%2FmeBUvhqbmKwS%2BxzF3poX7d7wb8E%2Bb8fN&X-Amz-Signature=37cef19d6058bc197fe70321a3f4a046cfcec4b2108143425a51688059a4c6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647V3MLK3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FZ3%2Fgo3TnlhOFEWGo6HPEDXBCKi%2FlbzQbVY5u8LAoEQIhAMVPCIGSYJ8H36fWotJz6UY2zqIqwt8R2LkiNUbuvXJhKv8DCG8QABoMNjM3NDIzMTgzODA1IgyY3m7Pbm%2FdCvjtpC8q3ANqw%2B%2FBEPWzmGgaBw6qUb1s0r%2BtqSNWpCI8ICh9JnvthMKeqP5Dl15%2FedVFUS%2BF8oQdhRnvdMk0%2BaFkZJ0T%2BKTShQkL4tZaE%2FysjY6qgZ17a%2BHjiwLTcLmxSMKkiyj%2FGogsatgHJboNvfYfVcSd78uVRDCzz21VZO4OsSiWlu0lq9cQEBx9gG2LgGyht4NIT9MEGyINLTYZrLwWzB87qCvelnGIDbbJgXPNudP6aF7oswifOIgE1MHwmUy2RXrqBIsYEf1lN21SmQ9jmqEsMBpT4%2By5J%2BUJJVDDGpxg%2BfN1bWHnAjLQ2Okf3hAuWfFllHu27aOEaMAQtgS7qyIzBDh1Oxlzcx0S4kUW9wV7t2tHUcLicygic9JiOsfcL0NhjQ1YVqR0pFqtQOggQA%2FuXwTcJt%2B4Cr8ulY9T5Cr5xgmXZbqCYmXHzCQJ8iGl9JqKPkRTwVMkBqBsQCMOesvaiuEhVTDAKgxUaWef6UmekuQF8ftpsIxo234Zj%2Bh3qOzzBU5kCqykZGhbxg46ghheIFGYcYjdVd9r73BVpov4VGN6StFqilCWF0cgpFzuvrpT%2F%2BS4dXxDn%2BEf3RrL%2FR05SpkDIoo%2Byz0%2B6EUbywVO8lTFrvGQvkInpDK5w7BrtzCxxNrBBjqkAfn9iw2%2F5wflzKFg1RlwVBn5yIEyclm7oaIysFBShc4KqbSrGcKltSbonNrB2leu8WsaMD2gZMA3yYoHczOplyBwhsyCoHcvBw0sxP%2BgF6GruXmGXMSXS0IB%2F3cgmjaKv9DJR4n3qmApUMXGceZ1q%2BgD%2FgDo5uVjYVcIkdji1n8zv9nUCNPEL%2FS0850%2FmeBUvhqbmKwS%2BxzF3poX7d7wb8E%2Bb8fN&X-Amz-Signature=433e8b7830ff3456488217ef4ee37017e38fd15d00f6537543a132b73f27d7af&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647V3MLK3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FZ3%2Fgo3TnlhOFEWGo6HPEDXBCKi%2FlbzQbVY5u8LAoEQIhAMVPCIGSYJ8H36fWotJz6UY2zqIqwt8R2LkiNUbuvXJhKv8DCG8QABoMNjM3NDIzMTgzODA1IgyY3m7Pbm%2FdCvjtpC8q3ANqw%2B%2FBEPWzmGgaBw6qUb1s0r%2BtqSNWpCI8ICh9JnvthMKeqP5Dl15%2FedVFUS%2BF8oQdhRnvdMk0%2BaFkZJ0T%2BKTShQkL4tZaE%2FysjY6qgZ17a%2BHjiwLTcLmxSMKkiyj%2FGogsatgHJboNvfYfVcSd78uVRDCzz21VZO4OsSiWlu0lq9cQEBx9gG2LgGyht4NIT9MEGyINLTYZrLwWzB87qCvelnGIDbbJgXPNudP6aF7oswifOIgE1MHwmUy2RXrqBIsYEf1lN21SmQ9jmqEsMBpT4%2By5J%2BUJJVDDGpxg%2BfN1bWHnAjLQ2Okf3hAuWfFllHu27aOEaMAQtgS7qyIzBDh1Oxlzcx0S4kUW9wV7t2tHUcLicygic9JiOsfcL0NhjQ1YVqR0pFqtQOggQA%2FuXwTcJt%2B4Cr8ulY9T5Cr5xgmXZbqCYmXHzCQJ8iGl9JqKPkRTwVMkBqBsQCMOesvaiuEhVTDAKgxUaWef6UmekuQF8ftpsIxo234Zj%2Bh3qOzzBU5kCqykZGhbxg46ghheIFGYcYjdVd9r73BVpov4VGN6StFqilCWF0cgpFzuvrpT%2F%2BS4dXxDn%2BEf3RrL%2FR05SpkDIoo%2Byz0%2B6EUbywVO8lTFrvGQvkInpDK5w7BrtzCxxNrBBjqkAfn9iw2%2F5wflzKFg1RlwVBn5yIEyclm7oaIysFBShc4KqbSrGcKltSbonNrB2leu8WsaMD2gZMA3yYoHczOplyBwhsyCoHcvBw0sxP%2BgF6GruXmGXMSXS0IB%2F3cgmjaKv9DJR4n3qmApUMXGceZ1q%2BgD%2FgDo5uVjYVcIkdji1n8zv9nUCNPEL%2FS0850%2FmeBUvhqbmKwS%2BxzF3poX7d7wb8E%2Bb8fN&X-Amz-Signature=2745f50274f4f2c17167a71654b4b85d12b4b1d7a3ba0bff13a73adb9c592a98&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647V3MLK3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FZ3%2Fgo3TnlhOFEWGo6HPEDXBCKi%2FlbzQbVY5u8LAoEQIhAMVPCIGSYJ8H36fWotJz6UY2zqIqwt8R2LkiNUbuvXJhKv8DCG8QABoMNjM3NDIzMTgzODA1IgyY3m7Pbm%2FdCvjtpC8q3ANqw%2B%2FBEPWzmGgaBw6qUb1s0r%2BtqSNWpCI8ICh9JnvthMKeqP5Dl15%2FedVFUS%2BF8oQdhRnvdMk0%2BaFkZJ0T%2BKTShQkL4tZaE%2FysjY6qgZ17a%2BHjiwLTcLmxSMKkiyj%2FGogsatgHJboNvfYfVcSd78uVRDCzz21VZO4OsSiWlu0lq9cQEBx9gG2LgGyht4NIT9MEGyINLTYZrLwWzB87qCvelnGIDbbJgXPNudP6aF7oswifOIgE1MHwmUy2RXrqBIsYEf1lN21SmQ9jmqEsMBpT4%2By5J%2BUJJVDDGpxg%2BfN1bWHnAjLQ2Okf3hAuWfFllHu27aOEaMAQtgS7qyIzBDh1Oxlzcx0S4kUW9wV7t2tHUcLicygic9JiOsfcL0NhjQ1YVqR0pFqtQOggQA%2FuXwTcJt%2B4Cr8ulY9T5Cr5xgmXZbqCYmXHzCQJ8iGl9JqKPkRTwVMkBqBsQCMOesvaiuEhVTDAKgxUaWef6UmekuQF8ftpsIxo234Zj%2Bh3qOzzBU5kCqykZGhbxg46ghheIFGYcYjdVd9r73BVpov4VGN6StFqilCWF0cgpFzuvrpT%2F%2BS4dXxDn%2BEf3RrL%2FR05SpkDIoo%2Byz0%2B6EUbywVO8lTFrvGQvkInpDK5w7BrtzCxxNrBBjqkAfn9iw2%2F5wflzKFg1RlwVBn5yIEyclm7oaIysFBShc4KqbSrGcKltSbonNrB2leu8WsaMD2gZMA3yYoHczOplyBwhsyCoHcvBw0sxP%2BgF6GruXmGXMSXS0IB%2F3cgmjaKv9DJR4n3qmApUMXGceZ1q%2BgD%2FgDo5uVjYVcIkdji1n8zv9nUCNPEL%2FS0850%2FmeBUvhqbmKwS%2BxzF3poX7d7wb8E%2Bb8fN&X-Amz-Signature=893096835668a194b1802286e0bf8cb1c9e28b741af0e05a7c87bba472e35bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
