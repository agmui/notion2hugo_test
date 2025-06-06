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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKXWOWQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDFyeAPZig1LGr10jJ39vXjhD8545ltBIbcyUglvgHA9AiEAheDTTC2Zyd60nt2yhI4aKceDaVhBRHEaWCYwk4azGIkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIGmE9QSrPxde5JG1CrcAzNST3YGKwbwvZmZukLhdUG%2FZhOZto6dN6XXyzYGQ10s9A8PUuiqiNia8NyxJnj5MKc8yuAo7euy2tOQYK8%2FIUYQW4sUATT59Gg7oO5HRpWdNYKKqcyNFnayZXvFKJGZXz6jSiKgTkCAOnHVdPvot%2BCs6fppn%2Bv42uicRECkfNXMd8zi7J%2Ftp%2F2SYDYf0sDChjIkN9Bqo%2FlIibsGkJhnDcF3TZdLEOPr%2BrENXNucpw5COPibBKeeP3FQvOjdeQ0HCq387rCnjIUeNeO6F4CjAyWQToUeS9nce6NFkJCPzJD49sAjr%2FbeeXwt7MHZzfMXnZkTCOghQeFFjan%2BiiWKtiH52RAdua8TezOCs57bO%2BPVdOswyTjagx6%2BtdNYOhJ6863GLtvgM9FPodI3cckxD%2F6wRhk9BtqxMtkhmZOG70nvtdmnXWHt1SrV9B7yTZAhf3ognsNag2qiW%2BIR%2F17W33FFEiPmmaAA4pUNcgo4mxNmB62nz5ix%2FV%2Fzb713wBX9h5aRTEIJ00bOOwkS%2Fbd3lYHZ0%2FsXBFfsNYyDyw3EZmCkaaJW%2FIN%2FbEoHoWQvixM2cc6%2FxM44gbpjdsQmcJv%2BhFnW2JL21sRyvHvpVsfAZaAGRJROfbBR%2FKyHlA3jMLXgicIGOqUB7qpYnugCelHLFkVwByYtwOXU2f1U3aaKlyXIwETXfMpSrWM0iVUZjspHN%2FA2dmj8GMv5NNrcmOQde%2FRZh2c8d1sr72IeYQST7Ucy9rcRLCbeHPcmmynvLtMDxXekupg0RNTgGDU9K2sOGETD04m1onEeKJ9%2BZkQqHGZc9Cfpz%2BbyZwpfI9sS9nX8TI%2BYCt7PiKpg%2Fu%2FjR02%2BqyV%2FCN3jfSKafu8d&X-Amz-Signature=db73faa77eb7dacb2a92a6976762255cb11444ef8941a90257c3d4fc2becce08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKXWOWQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDFyeAPZig1LGr10jJ39vXjhD8545ltBIbcyUglvgHA9AiEAheDTTC2Zyd60nt2yhI4aKceDaVhBRHEaWCYwk4azGIkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIGmE9QSrPxde5JG1CrcAzNST3YGKwbwvZmZukLhdUG%2FZhOZto6dN6XXyzYGQ10s9A8PUuiqiNia8NyxJnj5MKc8yuAo7euy2tOQYK8%2FIUYQW4sUATT59Gg7oO5HRpWdNYKKqcyNFnayZXvFKJGZXz6jSiKgTkCAOnHVdPvot%2BCs6fppn%2Bv42uicRECkfNXMd8zi7J%2Ftp%2F2SYDYf0sDChjIkN9Bqo%2FlIibsGkJhnDcF3TZdLEOPr%2BrENXNucpw5COPibBKeeP3FQvOjdeQ0HCq387rCnjIUeNeO6F4CjAyWQToUeS9nce6NFkJCPzJD49sAjr%2FbeeXwt7MHZzfMXnZkTCOghQeFFjan%2BiiWKtiH52RAdua8TezOCs57bO%2BPVdOswyTjagx6%2BtdNYOhJ6863GLtvgM9FPodI3cckxD%2F6wRhk9BtqxMtkhmZOG70nvtdmnXWHt1SrV9B7yTZAhf3ognsNag2qiW%2BIR%2F17W33FFEiPmmaAA4pUNcgo4mxNmB62nz5ix%2FV%2Fzb713wBX9h5aRTEIJ00bOOwkS%2Fbd3lYHZ0%2FsXBFfsNYyDyw3EZmCkaaJW%2FIN%2FbEoHoWQvixM2cc6%2FxM44gbpjdsQmcJv%2BhFnW2JL21sRyvHvpVsfAZaAGRJROfbBR%2FKyHlA3jMLXgicIGOqUB7qpYnugCelHLFkVwByYtwOXU2f1U3aaKlyXIwETXfMpSrWM0iVUZjspHN%2FA2dmj8GMv5NNrcmOQde%2FRZh2c8d1sr72IeYQST7Ucy9rcRLCbeHPcmmynvLtMDxXekupg0RNTgGDU9K2sOGETD04m1onEeKJ9%2BZkQqHGZc9Cfpz%2BbyZwpfI9sS9nX8TI%2BYCt7PiKpg%2Fu%2FjR02%2BqyV%2FCN3jfSKafu8d&X-Amz-Signature=0d6bb9fe64929590defecf71ee2a6fe159426a279ab70178f0ab84f4dd1b493c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKXWOWQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDFyeAPZig1LGr10jJ39vXjhD8545ltBIbcyUglvgHA9AiEAheDTTC2Zyd60nt2yhI4aKceDaVhBRHEaWCYwk4azGIkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIGmE9QSrPxde5JG1CrcAzNST3YGKwbwvZmZukLhdUG%2FZhOZto6dN6XXyzYGQ10s9A8PUuiqiNia8NyxJnj5MKc8yuAo7euy2tOQYK8%2FIUYQW4sUATT59Gg7oO5HRpWdNYKKqcyNFnayZXvFKJGZXz6jSiKgTkCAOnHVdPvot%2BCs6fppn%2Bv42uicRECkfNXMd8zi7J%2Ftp%2F2SYDYf0sDChjIkN9Bqo%2FlIibsGkJhnDcF3TZdLEOPr%2BrENXNucpw5COPibBKeeP3FQvOjdeQ0HCq387rCnjIUeNeO6F4CjAyWQToUeS9nce6NFkJCPzJD49sAjr%2FbeeXwt7MHZzfMXnZkTCOghQeFFjan%2BiiWKtiH52RAdua8TezOCs57bO%2BPVdOswyTjagx6%2BtdNYOhJ6863GLtvgM9FPodI3cckxD%2F6wRhk9BtqxMtkhmZOG70nvtdmnXWHt1SrV9B7yTZAhf3ognsNag2qiW%2BIR%2F17W33FFEiPmmaAA4pUNcgo4mxNmB62nz5ix%2FV%2Fzb713wBX9h5aRTEIJ00bOOwkS%2Fbd3lYHZ0%2FsXBFfsNYyDyw3EZmCkaaJW%2FIN%2FbEoHoWQvixM2cc6%2FxM44gbpjdsQmcJv%2BhFnW2JL21sRyvHvpVsfAZaAGRJROfbBR%2FKyHlA3jMLXgicIGOqUB7qpYnugCelHLFkVwByYtwOXU2f1U3aaKlyXIwETXfMpSrWM0iVUZjspHN%2FA2dmj8GMv5NNrcmOQde%2FRZh2c8d1sr72IeYQST7Ucy9rcRLCbeHPcmmynvLtMDxXekupg0RNTgGDU9K2sOGETD04m1onEeKJ9%2BZkQqHGZc9Cfpz%2BbyZwpfI9sS9nX8TI%2BYCt7PiKpg%2Fu%2FjR02%2BqyV%2FCN3jfSKafu8d&X-Amz-Signature=7adf161c02c48366d3a067de972183834e3f37af95f03fc1baa0c0a31d0d21c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKXWOWQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDFyeAPZig1LGr10jJ39vXjhD8545ltBIbcyUglvgHA9AiEAheDTTC2Zyd60nt2yhI4aKceDaVhBRHEaWCYwk4azGIkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIGmE9QSrPxde5JG1CrcAzNST3YGKwbwvZmZukLhdUG%2FZhOZto6dN6XXyzYGQ10s9A8PUuiqiNia8NyxJnj5MKc8yuAo7euy2tOQYK8%2FIUYQW4sUATT59Gg7oO5HRpWdNYKKqcyNFnayZXvFKJGZXz6jSiKgTkCAOnHVdPvot%2BCs6fppn%2Bv42uicRECkfNXMd8zi7J%2Ftp%2F2SYDYf0sDChjIkN9Bqo%2FlIibsGkJhnDcF3TZdLEOPr%2BrENXNucpw5COPibBKeeP3FQvOjdeQ0HCq387rCnjIUeNeO6F4CjAyWQToUeS9nce6NFkJCPzJD49sAjr%2FbeeXwt7MHZzfMXnZkTCOghQeFFjan%2BiiWKtiH52RAdua8TezOCs57bO%2BPVdOswyTjagx6%2BtdNYOhJ6863GLtvgM9FPodI3cckxD%2F6wRhk9BtqxMtkhmZOG70nvtdmnXWHt1SrV9B7yTZAhf3ognsNag2qiW%2BIR%2F17W33FFEiPmmaAA4pUNcgo4mxNmB62nz5ix%2FV%2Fzb713wBX9h5aRTEIJ00bOOwkS%2Fbd3lYHZ0%2FsXBFfsNYyDyw3EZmCkaaJW%2FIN%2FbEoHoWQvixM2cc6%2FxM44gbpjdsQmcJv%2BhFnW2JL21sRyvHvpVsfAZaAGRJROfbBR%2FKyHlA3jMLXgicIGOqUB7qpYnugCelHLFkVwByYtwOXU2f1U3aaKlyXIwETXfMpSrWM0iVUZjspHN%2FA2dmj8GMv5NNrcmOQde%2FRZh2c8d1sr72IeYQST7Ucy9rcRLCbeHPcmmynvLtMDxXekupg0RNTgGDU9K2sOGETD04m1onEeKJ9%2BZkQqHGZc9Cfpz%2BbyZwpfI9sS9nX8TI%2BYCt7PiKpg%2Fu%2FjR02%2BqyV%2FCN3jfSKafu8d&X-Amz-Signature=c98fbea1615d0fe31af07cd14d98d7fcab03620a762f8eea7a8f2c29911ee397&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKXWOWQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDFyeAPZig1LGr10jJ39vXjhD8545ltBIbcyUglvgHA9AiEAheDTTC2Zyd60nt2yhI4aKceDaVhBRHEaWCYwk4azGIkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIGmE9QSrPxde5JG1CrcAzNST3YGKwbwvZmZukLhdUG%2FZhOZto6dN6XXyzYGQ10s9A8PUuiqiNia8NyxJnj5MKc8yuAo7euy2tOQYK8%2FIUYQW4sUATT59Gg7oO5HRpWdNYKKqcyNFnayZXvFKJGZXz6jSiKgTkCAOnHVdPvot%2BCs6fppn%2Bv42uicRECkfNXMd8zi7J%2Ftp%2F2SYDYf0sDChjIkN9Bqo%2FlIibsGkJhnDcF3TZdLEOPr%2BrENXNucpw5COPibBKeeP3FQvOjdeQ0HCq387rCnjIUeNeO6F4CjAyWQToUeS9nce6NFkJCPzJD49sAjr%2FbeeXwt7MHZzfMXnZkTCOghQeFFjan%2BiiWKtiH52RAdua8TezOCs57bO%2BPVdOswyTjagx6%2BtdNYOhJ6863GLtvgM9FPodI3cckxD%2F6wRhk9BtqxMtkhmZOG70nvtdmnXWHt1SrV9B7yTZAhf3ognsNag2qiW%2BIR%2F17W33FFEiPmmaAA4pUNcgo4mxNmB62nz5ix%2FV%2Fzb713wBX9h5aRTEIJ00bOOwkS%2Fbd3lYHZ0%2FsXBFfsNYyDyw3EZmCkaaJW%2FIN%2FbEoHoWQvixM2cc6%2FxM44gbpjdsQmcJv%2BhFnW2JL21sRyvHvpVsfAZaAGRJROfbBR%2FKyHlA3jMLXgicIGOqUB7qpYnugCelHLFkVwByYtwOXU2f1U3aaKlyXIwETXfMpSrWM0iVUZjspHN%2FA2dmj8GMv5NNrcmOQde%2FRZh2c8d1sr72IeYQST7Ucy9rcRLCbeHPcmmynvLtMDxXekupg0RNTgGDU9K2sOGETD04m1onEeKJ9%2BZkQqHGZc9Cfpz%2BbyZwpfI9sS9nX8TI%2BYCt7PiKpg%2Fu%2FjR02%2BqyV%2FCN3jfSKafu8d&X-Amz-Signature=0c5b137e42af906a3f6b99aff3914d64dc7d9819441f164936db94658c263f58&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKXWOWQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDFyeAPZig1LGr10jJ39vXjhD8545ltBIbcyUglvgHA9AiEAheDTTC2Zyd60nt2yhI4aKceDaVhBRHEaWCYwk4azGIkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIGmE9QSrPxde5JG1CrcAzNST3YGKwbwvZmZukLhdUG%2FZhOZto6dN6XXyzYGQ10s9A8PUuiqiNia8NyxJnj5MKc8yuAo7euy2tOQYK8%2FIUYQW4sUATT59Gg7oO5HRpWdNYKKqcyNFnayZXvFKJGZXz6jSiKgTkCAOnHVdPvot%2BCs6fppn%2Bv42uicRECkfNXMd8zi7J%2Ftp%2F2SYDYf0sDChjIkN9Bqo%2FlIibsGkJhnDcF3TZdLEOPr%2BrENXNucpw5COPibBKeeP3FQvOjdeQ0HCq387rCnjIUeNeO6F4CjAyWQToUeS9nce6NFkJCPzJD49sAjr%2FbeeXwt7MHZzfMXnZkTCOghQeFFjan%2BiiWKtiH52RAdua8TezOCs57bO%2BPVdOswyTjagx6%2BtdNYOhJ6863GLtvgM9FPodI3cckxD%2F6wRhk9BtqxMtkhmZOG70nvtdmnXWHt1SrV9B7yTZAhf3ognsNag2qiW%2BIR%2F17W33FFEiPmmaAA4pUNcgo4mxNmB62nz5ix%2FV%2Fzb713wBX9h5aRTEIJ00bOOwkS%2Fbd3lYHZ0%2FsXBFfsNYyDyw3EZmCkaaJW%2FIN%2FbEoHoWQvixM2cc6%2FxM44gbpjdsQmcJv%2BhFnW2JL21sRyvHvpVsfAZaAGRJROfbBR%2FKyHlA3jMLXgicIGOqUB7qpYnugCelHLFkVwByYtwOXU2f1U3aaKlyXIwETXfMpSrWM0iVUZjspHN%2FA2dmj8GMv5NNrcmOQde%2FRZh2c8d1sr72IeYQST7Ucy9rcRLCbeHPcmmynvLtMDxXekupg0RNTgGDU9K2sOGETD04m1onEeKJ9%2BZkQqHGZc9Cfpz%2BbyZwpfI9sS9nX8TI%2BYCt7PiKpg%2Fu%2FjR02%2BqyV%2FCN3jfSKafu8d&X-Amz-Signature=e26355597b7550c7b7cee0eb7cc861a9da0a9f9e4dad6e3faff4b9b2bf24daa3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKXWOWQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIDFyeAPZig1LGr10jJ39vXjhD8545ltBIbcyUglvgHA9AiEAheDTTC2Zyd60nt2yhI4aKceDaVhBRHEaWCYwk4azGIkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIGmE9QSrPxde5JG1CrcAzNST3YGKwbwvZmZukLhdUG%2FZhOZto6dN6XXyzYGQ10s9A8PUuiqiNia8NyxJnj5MKc8yuAo7euy2tOQYK8%2FIUYQW4sUATT59Gg7oO5HRpWdNYKKqcyNFnayZXvFKJGZXz6jSiKgTkCAOnHVdPvot%2BCs6fppn%2Bv42uicRECkfNXMd8zi7J%2Ftp%2F2SYDYf0sDChjIkN9Bqo%2FlIibsGkJhnDcF3TZdLEOPr%2BrENXNucpw5COPibBKeeP3FQvOjdeQ0HCq387rCnjIUeNeO6F4CjAyWQToUeS9nce6NFkJCPzJD49sAjr%2FbeeXwt7MHZzfMXnZkTCOghQeFFjan%2BiiWKtiH52RAdua8TezOCs57bO%2BPVdOswyTjagx6%2BtdNYOhJ6863GLtvgM9FPodI3cckxD%2F6wRhk9BtqxMtkhmZOG70nvtdmnXWHt1SrV9B7yTZAhf3ognsNag2qiW%2BIR%2F17W33FFEiPmmaAA4pUNcgo4mxNmB62nz5ix%2FV%2Fzb713wBX9h5aRTEIJ00bOOwkS%2Fbd3lYHZ0%2FsXBFfsNYyDyw3EZmCkaaJW%2FIN%2FbEoHoWQvixM2cc6%2FxM44gbpjdsQmcJv%2BhFnW2JL21sRyvHvpVsfAZaAGRJROfbBR%2FKyHlA3jMLXgicIGOqUB7qpYnugCelHLFkVwByYtwOXU2f1U3aaKlyXIwETXfMpSrWM0iVUZjspHN%2FA2dmj8GMv5NNrcmOQde%2FRZh2c8d1sr72IeYQST7Ucy9rcRLCbeHPcmmynvLtMDxXekupg0RNTgGDU9K2sOGETD04m1onEeKJ9%2BZkQqHGZc9Cfpz%2BbyZwpfI9sS9nX8TI%2BYCt7PiKpg%2Fu%2FjR02%2BqyV%2FCN3jfSKafu8d&X-Amz-Signature=d4fc2f4f56360e4e0b6dcf81dd978205d589ed15f3770c2aee4eda663ce48618&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
