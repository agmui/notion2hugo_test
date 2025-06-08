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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXF2PQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ogPL727%2Bp80w8zuM06i7tt28uFrccsaChzEbyhtOrAiAazSbZXvVo5qJgOpb6QkmjP8R62Xj%2BhGJx9TkB7E6FBiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJetzboxNHehXNKE2KtwDfE2RAJCZRI68WCPthIBVoXV0%2B0YmxCrAggwN1W4wr7Bx6vHPghRidAgSZfbNkxYO6w9g5FjjyS%2FUjgbXM3%2F5oUswYxNbMJ3z5EB2qt7x85oAjDScGEIPrk95WAuA7khEYYBUzgpKcJU2MFEjTWmWoqdGh9NYZzGBy4Qhm3uuQCpwEskVezhoLvUn7Is%2BywOCnSV41ROKniDxUhzwO4%2FbELRrPRMEFYm5GCcsCQv0BdPmdTibjEScqjWpTZMiLENHmVf%2BTqw0duIpCUwAgiwjlfvOVyMaQ4KACBww3X04RPMPw94u0yDCqTFkYHk6wDkA8bObc%2Fh3ppp7aC1zoRb0d2CD2CkyCjUDtEf17nDv76%2BRTBwwjNoS5Wtxl%2BGpMJMadWH%2FGQ%2FumpiStSZKXwwPeV1A3gifk1GOASh%2F4w%2BXGR4Ww0InNsL8YLKa2rt%2Bt%2FrES%2BnkXfgKO1nqE1piWNv5AfZUAozn9LXwa%2FLRRN3K8Bcmiba5St4xt0EbUcN%2BN%2Ftu128Bu2MbriovqN9MPOpb1ZvpZQlcyerqd0uPflQiZG6lK0CTbGU9rndtengRImDOF19d2NysEy3B7ukaToCkgk6aQ3VnhvUsET1%2B2PoqHE%2B1Ohz6Q6rnI9YUKDYwhrSWwgY6pgEtwTmREeho2Fg1BJAwfFvb7%2FNGfNrVrJuxhioV8qrEDAmLk0yPtKNs8D5UZKkLMV0T40d%2BE8AihvqmLP5YA13UF0C5rD8h51Dgq7WCwZGArIURg4rpNQIlA2J9Z6zIPFfGc6IsSWb%2BcF5bbISGIEuEKyzb3QZo%2F4LyPjfCLMMwOTBo%2B%2F3uqq31ysCRPr%2BfFVsJGzIampimZ7ed10KJSdUtDJMwNVf0&X-Amz-Signature=b25b21a4e4d3ba8a554789b6ac9ae0c4e2478ff5e6b40aff44dba72655df58fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXF2PQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ogPL727%2Bp80w8zuM06i7tt28uFrccsaChzEbyhtOrAiAazSbZXvVo5qJgOpb6QkmjP8R62Xj%2BhGJx9TkB7E6FBiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJetzboxNHehXNKE2KtwDfE2RAJCZRI68WCPthIBVoXV0%2B0YmxCrAggwN1W4wr7Bx6vHPghRidAgSZfbNkxYO6w9g5FjjyS%2FUjgbXM3%2F5oUswYxNbMJ3z5EB2qt7x85oAjDScGEIPrk95WAuA7khEYYBUzgpKcJU2MFEjTWmWoqdGh9NYZzGBy4Qhm3uuQCpwEskVezhoLvUn7Is%2BywOCnSV41ROKniDxUhzwO4%2FbELRrPRMEFYm5GCcsCQv0BdPmdTibjEScqjWpTZMiLENHmVf%2BTqw0duIpCUwAgiwjlfvOVyMaQ4KACBww3X04RPMPw94u0yDCqTFkYHk6wDkA8bObc%2Fh3ppp7aC1zoRb0d2CD2CkyCjUDtEf17nDv76%2BRTBwwjNoS5Wtxl%2BGpMJMadWH%2FGQ%2FumpiStSZKXwwPeV1A3gifk1GOASh%2F4w%2BXGR4Ww0InNsL8YLKa2rt%2Bt%2FrES%2BnkXfgKO1nqE1piWNv5AfZUAozn9LXwa%2FLRRN3K8Bcmiba5St4xt0EbUcN%2BN%2Ftu128Bu2MbriovqN9MPOpb1ZvpZQlcyerqd0uPflQiZG6lK0CTbGU9rndtengRImDOF19d2NysEy3B7ukaToCkgk6aQ3VnhvUsET1%2B2PoqHE%2B1Ohz6Q6rnI9YUKDYwhrSWwgY6pgEtwTmREeho2Fg1BJAwfFvb7%2FNGfNrVrJuxhioV8qrEDAmLk0yPtKNs8D5UZKkLMV0T40d%2BE8AihvqmLP5YA13UF0C5rD8h51Dgq7WCwZGArIURg4rpNQIlA2J9Z6zIPFfGc6IsSWb%2BcF5bbISGIEuEKyzb3QZo%2F4LyPjfCLMMwOTBo%2B%2F3uqq31ysCRPr%2BfFVsJGzIampimZ7ed10KJSdUtDJMwNVf0&X-Amz-Signature=d832178087d60538c21d6f6318810c5d11dba79c2bfc8e592516e308b883e64b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXF2PQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ogPL727%2Bp80w8zuM06i7tt28uFrccsaChzEbyhtOrAiAazSbZXvVo5qJgOpb6QkmjP8R62Xj%2BhGJx9TkB7E6FBiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJetzboxNHehXNKE2KtwDfE2RAJCZRI68WCPthIBVoXV0%2B0YmxCrAggwN1W4wr7Bx6vHPghRidAgSZfbNkxYO6w9g5FjjyS%2FUjgbXM3%2F5oUswYxNbMJ3z5EB2qt7x85oAjDScGEIPrk95WAuA7khEYYBUzgpKcJU2MFEjTWmWoqdGh9NYZzGBy4Qhm3uuQCpwEskVezhoLvUn7Is%2BywOCnSV41ROKniDxUhzwO4%2FbELRrPRMEFYm5GCcsCQv0BdPmdTibjEScqjWpTZMiLENHmVf%2BTqw0duIpCUwAgiwjlfvOVyMaQ4KACBww3X04RPMPw94u0yDCqTFkYHk6wDkA8bObc%2Fh3ppp7aC1zoRb0d2CD2CkyCjUDtEf17nDv76%2BRTBwwjNoS5Wtxl%2BGpMJMadWH%2FGQ%2FumpiStSZKXwwPeV1A3gifk1GOASh%2F4w%2BXGR4Ww0InNsL8YLKa2rt%2Bt%2FrES%2BnkXfgKO1nqE1piWNv5AfZUAozn9LXwa%2FLRRN3K8Bcmiba5St4xt0EbUcN%2BN%2Ftu128Bu2MbriovqN9MPOpb1ZvpZQlcyerqd0uPflQiZG6lK0CTbGU9rndtengRImDOF19d2NysEy3B7ukaToCkgk6aQ3VnhvUsET1%2B2PoqHE%2B1Ohz6Q6rnI9YUKDYwhrSWwgY6pgEtwTmREeho2Fg1BJAwfFvb7%2FNGfNrVrJuxhioV8qrEDAmLk0yPtKNs8D5UZKkLMV0T40d%2BE8AihvqmLP5YA13UF0C5rD8h51Dgq7WCwZGArIURg4rpNQIlA2J9Z6zIPFfGc6IsSWb%2BcF5bbISGIEuEKyzb3QZo%2F4LyPjfCLMMwOTBo%2B%2F3uqq31ysCRPr%2BfFVsJGzIampimZ7ed10KJSdUtDJMwNVf0&X-Amz-Signature=12cb36451af3496a26d48d9f43a6d7267d9e420220a9f952ca93c47a1771f492&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXF2PQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ogPL727%2Bp80w8zuM06i7tt28uFrccsaChzEbyhtOrAiAazSbZXvVo5qJgOpb6QkmjP8R62Xj%2BhGJx9TkB7E6FBiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJetzboxNHehXNKE2KtwDfE2RAJCZRI68WCPthIBVoXV0%2B0YmxCrAggwN1W4wr7Bx6vHPghRidAgSZfbNkxYO6w9g5FjjyS%2FUjgbXM3%2F5oUswYxNbMJ3z5EB2qt7x85oAjDScGEIPrk95WAuA7khEYYBUzgpKcJU2MFEjTWmWoqdGh9NYZzGBy4Qhm3uuQCpwEskVezhoLvUn7Is%2BywOCnSV41ROKniDxUhzwO4%2FbELRrPRMEFYm5GCcsCQv0BdPmdTibjEScqjWpTZMiLENHmVf%2BTqw0duIpCUwAgiwjlfvOVyMaQ4KACBww3X04RPMPw94u0yDCqTFkYHk6wDkA8bObc%2Fh3ppp7aC1zoRb0d2CD2CkyCjUDtEf17nDv76%2BRTBwwjNoS5Wtxl%2BGpMJMadWH%2FGQ%2FumpiStSZKXwwPeV1A3gifk1GOASh%2F4w%2BXGR4Ww0InNsL8YLKa2rt%2Bt%2FrES%2BnkXfgKO1nqE1piWNv5AfZUAozn9LXwa%2FLRRN3K8Bcmiba5St4xt0EbUcN%2BN%2Ftu128Bu2MbriovqN9MPOpb1ZvpZQlcyerqd0uPflQiZG6lK0CTbGU9rndtengRImDOF19d2NysEy3B7ukaToCkgk6aQ3VnhvUsET1%2B2PoqHE%2B1Ohz6Q6rnI9YUKDYwhrSWwgY6pgEtwTmREeho2Fg1BJAwfFvb7%2FNGfNrVrJuxhioV8qrEDAmLk0yPtKNs8D5UZKkLMV0T40d%2BE8AihvqmLP5YA13UF0C5rD8h51Dgq7WCwZGArIURg4rpNQIlA2J9Z6zIPFfGc6IsSWb%2BcF5bbISGIEuEKyzb3QZo%2F4LyPjfCLMMwOTBo%2B%2F3uqq31ysCRPr%2BfFVsJGzIampimZ7ed10KJSdUtDJMwNVf0&X-Amz-Signature=c8484dd0fb23ed0a3dff1c24f101352f7cc56296882fc0cae6ab68b3650b444a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXF2PQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ogPL727%2Bp80w8zuM06i7tt28uFrccsaChzEbyhtOrAiAazSbZXvVo5qJgOpb6QkmjP8R62Xj%2BhGJx9TkB7E6FBiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJetzboxNHehXNKE2KtwDfE2RAJCZRI68WCPthIBVoXV0%2B0YmxCrAggwN1W4wr7Bx6vHPghRidAgSZfbNkxYO6w9g5FjjyS%2FUjgbXM3%2F5oUswYxNbMJ3z5EB2qt7x85oAjDScGEIPrk95WAuA7khEYYBUzgpKcJU2MFEjTWmWoqdGh9NYZzGBy4Qhm3uuQCpwEskVezhoLvUn7Is%2BywOCnSV41ROKniDxUhzwO4%2FbELRrPRMEFYm5GCcsCQv0BdPmdTibjEScqjWpTZMiLENHmVf%2BTqw0duIpCUwAgiwjlfvOVyMaQ4KACBww3X04RPMPw94u0yDCqTFkYHk6wDkA8bObc%2Fh3ppp7aC1zoRb0d2CD2CkyCjUDtEf17nDv76%2BRTBwwjNoS5Wtxl%2BGpMJMadWH%2FGQ%2FumpiStSZKXwwPeV1A3gifk1GOASh%2F4w%2BXGR4Ww0InNsL8YLKa2rt%2Bt%2FrES%2BnkXfgKO1nqE1piWNv5AfZUAozn9LXwa%2FLRRN3K8Bcmiba5St4xt0EbUcN%2BN%2Ftu128Bu2MbriovqN9MPOpb1ZvpZQlcyerqd0uPflQiZG6lK0CTbGU9rndtengRImDOF19d2NysEy3B7ukaToCkgk6aQ3VnhvUsET1%2B2PoqHE%2B1Ohz6Q6rnI9YUKDYwhrSWwgY6pgEtwTmREeho2Fg1BJAwfFvb7%2FNGfNrVrJuxhioV8qrEDAmLk0yPtKNs8D5UZKkLMV0T40d%2BE8AihvqmLP5YA13UF0C5rD8h51Dgq7WCwZGArIURg4rpNQIlA2J9Z6zIPFfGc6IsSWb%2BcF5bbISGIEuEKyzb3QZo%2F4LyPjfCLMMwOTBo%2B%2F3uqq31ysCRPr%2BfFVsJGzIampimZ7ed10KJSdUtDJMwNVf0&X-Amz-Signature=4254e880b97682a46e7e6af3ac7af45da516d15e1d2b03c3fd811281e5471f13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXF2PQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ogPL727%2Bp80w8zuM06i7tt28uFrccsaChzEbyhtOrAiAazSbZXvVo5qJgOpb6QkmjP8R62Xj%2BhGJx9TkB7E6FBiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJetzboxNHehXNKE2KtwDfE2RAJCZRI68WCPthIBVoXV0%2B0YmxCrAggwN1W4wr7Bx6vHPghRidAgSZfbNkxYO6w9g5FjjyS%2FUjgbXM3%2F5oUswYxNbMJ3z5EB2qt7x85oAjDScGEIPrk95WAuA7khEYYBUzgpKcJU2MFEjTWmWoqdGh9NYZzGBy4Qhm3uuQCpwEskVezhoLvUn7Is%2BywOCnSV41ROKniDxUhzwO4%2FbELRrPRMEFYm5GCcsCQv0BdPmdTibjEScqjWpTZMiLENHmVf%2BTqw0duIpCUwAgiwjlfvOVyMaQ4KACBww3X04RPMPw94u0yDCqTFkYHk6wDkA8bObc%2Fh3ppp7aC1zoRb0d2CD2CkyCjUDtEf17nDv76%2BRTBwwjNoS5Wtxl%2BGpMJMadWH%2FGQ%2FumpiStSZKXwwPeV1A3gifk1GOASh%2F4w%2BXGR4Ww0InNsL8YLKa2rt%2Bt%2FrES%2BnkXfgKO1nqE1piWNv5AfZUAozn9LXwa%2FLRRN3K8Bcmiba5St4xt0EbUcN%2BN%2Ftu128Bu2MbriovqN9MPOpb1ZvpZQlcyerqd0uPflQiZG6lK0CTbGU9rndtengRImDOF19d2NysEy3B7ukaToCkgk6aQ3VnhvUsET1%2B2PoqHE%2B1Ohz6Q6rnI9YUKDYwhrSWwgY6pgEtwTmREeho2Fg1BJAwfFvb7%2FNGfNrVrJuxhioV8qrEDAmLk0yPtKNs8D5UZKkLMV0T40d%2BE8AihvqmLP5YA13UF0C5rD8h51Dgq7WCwZGArIURg4rpNQIlA2J9Z6zIPFfGc6IsSWb%2BcF5bbISGIEuEKyzb3QZo%2F4LyPjfCLMMwOTBo%2B%2F3uqq31ysCRPr%2BfFVsJGzIampimZ7ed10KJSdUtDJMwNVf0&X-Amz-Signature=675b68b7f37c20fc0d04bc5580cc617a45ffb93810677f618534c0bf0e0cb7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RXF2PQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7ogPL727%2Bp80w8zuM06i7tt28uFrccsaChzEbyhtOrAiAazSbZXvVo5qJgOpb6QkmjP8R62Xj%2BhGJx9TkB7E6FBiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJetzboxNHehXNKE2KtwDfE2RAJCZRI68WCPthIBVoXV0%2B0YmxCrAggwN1W4wr7Bx6vHPghRidAgSZfbNkxYO6w9g5FjjyS%2FUjgbXM3%2F5oUswYxNbMJ3z5EB2qt7x85oAjDScGEIPrk95WAuA7khEYYBUzgpKcJU2MFEjTWmWoqdGh9NYZzGBy4Qhm3uuQCpwEskVezhoLvUn7Is%2BywOCnSV41ROKniDxUhzwO4%2FbELRrPRMEFYm5GCcsCQv0BdPmdTibjEScqjWpTZMiLENHmVf%2BTqw0duIpCUwAgiwjlfvOVyMaQ4KACBww3X04RPMPw94u0yDCqTFkYHk6wDkA8bObc%2Fh3ppp7aC1zoRb0d2CD2CkyCjUDtEf17nDv76%2BRTBwwjNoS5Wtxl%2BGpMJMadWH%2FGQ%2FumpiStSZKXwwPeV1A3gifk1GOASh%2F4w%2BXGR4Ww0InNsL8YLKa2rt%2Bt%2FrES%2BnkXfgKO1nqE1piWNv5AfZUAozn9LXwa%2FLRRN3K8Bcmiba5St4xt0EbUcN%2BN%2Ftu128Bu2MbriovqN9MPOpb1ZvpZQlcyerqd0uPflQiZG6lK0CTbGU9rndtengRImDOF19d2NysEy3B7ukaToCkgk6aQ3VnhvUsET1%2B2PoqHE%2B1Ohz6Q6rnI9YUKDYwhrSWwgY6pgEtwTmREeho2Fg1BJAwfFvb7%2FNGfNrVrJuxhioV8qrEDAmLk0yPtKNs8D5UZKkLMV0T40d%2BE8AihvqmLP5YA13UF0C5rD8h51Dgq7WCwZGArIURg4rpNQIlA2J9Z6zIPFfGc6IsSWb%2BcF5bbISGIEuEKyzb3QZo%2F4LyPjfCLMMwOTBo%2B%2F3uqq31ysCRPr%2BfFVsJGzIampimZ7ed10KJSdUtDJMwNVf0&X-Amz-Signature=56ab26ecc859801728caa9d291b4b738a44e135dc47ae389987632f0f76fb580&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
