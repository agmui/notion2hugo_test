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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWRSLHL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJnyEXDaRWLrKm0f1tmWVPQRzHxfSOPxDfyfuSWPjiPAiBdiPMdhf3zEmI1v6W64llIt2j6iG0LxI0rcOwQgY6S%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BQ6gX2C0ZQXahgdUKtwDRerPp086GBF05MRCN0FS8uksrzLpkhORtS6XyqdgIFguu9XHsxa%2BS%2BgHcuJGGnfesH01vU3%2BxzETcpug%2BkDfeY4Yayt%2FIo8DnZV1hPLKsXKh5QD%2Bu5NvWKERFJbG3Ge2qDIUTocOnCWSj6bw5ud6qT9B22hGMrW9Fyp6EnFGQZmO9dNSH02idL64JWUyM5aRKkClFxV%2FKlQsDc9I3ot6DSUSKmUPNZ%2FEoJtNajEH5e46p2VA1MJbC4ADKACKnGUGcbSEuH6gQj6xZy4uCfAVvVxG%2Fuv37RFngRYwI3qnwQnotdHyrIuQB1xLZTT8lzt1jOTdDXrhe1ZjFeRxxzV07A04hP%2FnwF13xISu4qzxrJkgzOyZVEgM%2FEwgjV%2FnxvhTDUyLSY%2BbPPP%2B5zIC7sThak2evd7kSsVSlAKkIngvz6XQHHZjq9GroF6mA3IZwll6Uj0uASnr5RoNby3CruIqDBTjs9otBDRn7Xt%2BK1wn9fqUUnS1k6pDmfYO9f92%2F5rVcvb8wEBsPdnogAl7WuhrwWF3icqBNxw5l1kozFE8lNZg0VpeUGXCpi0z5PtHinWHvRtppgljYdO3Pejiiot3pOWs6uo%2FTb2BFi49ZttAd48cvfskM4WGiekEOYow4d%2BrvgY6pgFgpt3XpVxcWOZ5oLBCwjWY3gWM6XCDuxn59JD9wJngVoQTE0Q8ykcYiiPIpXnR%2FtZch%2F9Yi%2F5345JOBl%2FjLn%2FM1s%2FAIBKggYUWJ65ENb%2B7gcI8rGISsJOX3mipiqYdjiN%2BooXZmyrjuEFHLQOx6NdOL28l57%2BF5Jb8aTJuD4hxM8gdD8hTknt4K%2FSPgyex43AP4pgdPByIZa7yaCvdmmN60YjC1gV3&X-Amz-Signature=83561ce1ca7bbca0cd6d34b5484a8e542a547e82a508417f9b3eab99ab81fa20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWRSLHL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJnyEXDaRWLrKm0f1tmWVPQRzHxfSOPxDfyfuSWPjiPAiBdiPMdhf3zEmI1v6W64llIt2j6iG0LxI0rcOwQgY6S%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BQ6gX2C0ZQXahgdUKtwDRerPp086GBF05MRCN0FS8uksrzLpkhORtS6XyqdgIFguu9XHsxa%2BS%2BgHcuJGGnfesH01vU3%2BxzETcpug%2BkDfeY4Yayt%2FIo8DnZV1hPLKsXKh5QD%2Bu5NvWKERFJbG3Ge2qDIUTocOnCWSj6bw5ud6qT9B22hGMrW9Fyp6EnFGQZmO9dNSH02idL64JWUyM5aRKkClFxV%2FKlQsDc9I3ot6DSUSKmUPNZ%2FEoJtNajEH5e46p2VA1MJbC4ADKACKnGUGcbSEuH6gQj6xZy4uCfAVvVxG%2Fuv37RFngRYwI3qnwQnotdHyrIuQB1xLZTT8lzt1jOTdDXrhe1ZjFeRxxzV07A04hP%2FnwF13xISu4qzxrJkgzOyZVEgM%2FEwgjV%2FnxvhTDUyLSY%2BbPPP%2B5zIC7sThak2evd7kSsVSlAKkIngvz6XQHHZjq9GroF6mA3IZwll6Uj0uASnr5RoNby3CruIqDBTjs9otBDRn7Xt%2BK1wn9fqUUnS1k6pDmfYO9f92%2F5rVcvb8wEBsPdnogAl7WuhrwWF3icqBNxw5l1kozFE8lNZg0VpeUGXCpi0z5PtHinWHvRtppgljYdO3Pejiiot3pOWs6uo%2FTb2BFi49ZttAd48cvfskM4WGiekEOYow4d%2BrvgY6pgFgpt3XpVxcWOZ5oLBCwjWY3gWM6XCDuxn59JD9wJngVoQTE0Q8ykcYiiPIpXnR%2FtZch%2F9Yi%2F5345JOBl%2FjLn%2FM1s%2FAIBKggYUWJ65ENb%2B7gcI8rGISsJOX3mipiqYdjiN%2BooXZmyrjuEFHLQOx6NdOL28l57%2BF5Jb8aTJuD4hxM8gdD8hTknt4K%2FSPgyex43AP4pgdPByIZa7yaCvdmmN60YjC1gV3&X-Amz-Signature=6f827b27f25c36fc3738b52655440cae4ce15472d0ecf1d7aa454056709e139c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWRSLHL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJnyEXDaRWLrKm0f1tmWVPQRzHxfSOPxDfyfuSWPjiPAiBdiPMdhf3zEmI1v6W64llIt2j6iG0LxI0rcOwQgY6S%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BQ6gX2C0ZQXahgdUKtwDRerPp086GBF05MRCN0FS8uksrzLpkhORtS6XyqdgIFguu9XHsxa%2BS%2BgHcuJGGnfesH01vU3%2BxzETcpug%2BkDfeY4Yayt%2FIo8DnZV1hPLKsXKh5QD%2Bu5NvWKERFJbG3Ge2qDIUTocOnCWSj6bw5ud6qT9B22hGMrW9Fyp6EnFGQZmO9dNSH02idL64JWUyM5aRKkClFxV%2FKlQsDc9I3ot6DSUSKmUPNZ%2FEoJtNajEH5e46p2VA1MJbC4ADKACKnGUGcbSEuH6gQj6xZy4uCfAVvVxG%2Fuv37RFngRYwI3qnwQnotdHyrIuQB1xLZTT8lzt1jOTdDXrhe1ZjFeRxxzV07A04hP%2FnwF13xISu4qzxrJkgzOyZVEgM%2FEwgjV%2FnxvhTDUyLSY%2BbPPP%2B5zIC7sThak2evd7kSsVSlAKkIngvz6XQHHZjq9GroF6mA3IZwll6Uj0uASnr5RoNby3CruIqDBTjs9otBDRn7Xt%2BK1wn9fqUUnS1k6pDmfYO9f92%2F5rVcvb8wEBsPdnogAl7WuhrwWF3icqBNxw5l1kozFE8lNZg0VpeUGXCpi0z5PtHinWHvRtppgljYdO3Pejiiot3pOWs6uo%2FTb2BFi49ZttAd48cvfskM4WGiekEOYow4d%2BrvgY6pgFgpt3XpVxcWOZ5oLBCwjWY3gWM6XCDuxn59JD9wJngVoQTE0Q8ykcYiiPIpXnR%2FtZch%2F9Yi%2F5345JOBl%2FjLn%2FM1s%2FAIBKggYUWJ65ENb%2B7gcI8rGISsJOX3mipiqYdjiN%2BooXZmyrjuEFHLQOx6NdOL28l57%2BF5Jb8aTJuD4hxM8gdD8hTknt4K%2FSPgyex43AP4pgdPByIZa7yaCvdmmN60YjC1gV3&X-Amz-Signature=91987b76abbe98704dc254f731769f8804b2b02738e124c9a39e1ed21f5ad25d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWRSLHL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJnyEXDaRWLrKm0f1tmWVPQRzHxfSOPxDfyfuSWPjiPAiBdiPMdhf3zEmI1v6W64llIt2j6iG0LxI0rcOwQgY6S%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BQ6gX2C0ZQXahgdUKtwDRerPp086GBF05MRCN0FS8uksrzLpkhORtS6XyqdgIFguu9XHsxa%2BS%2BgHcuJGGnfesH01vU3%2BxzETcpug%2BkDfeY4Yayt%2FIo8DnZV1hPLKsXKh5QD%2Bu5NvWKERFJbG3Ge2qDIUTocOnCWSj6bw5ud6qT9B22hGMrW9Fyp6EnFGQZmO9dNSH02idL64JWUyM5aRKkClFxV%2FKlQsDc9I3ot6DSUSKmUPNZ%2FEoJtNajEH5e46p2VA1MJbC4ADKACKnGUGcbSEuH6gQj6xZy4uCfAVvVxG%2Fuv37RFngRYwI3qnwQnotdHyrIuQB1xLZTT8lzt1jOTdDXrhe1ZjFeRxxzV07A04hP%2FnwF13xISu4qzxrJkgzOyZVEgM%2FEwgjV%2FnxvhTDUyLSY%2BbPPP%2B5zIC7sThak2evd7kSsVSlAKkIngvz6XQHHZjq9GroF6mA3IZwll6Uj0uASnr5RoNby3CruIqDBTjs9otBDRn7Xt%2BK1wn9fqUUnS1k6pDmfYO9f92%2F5rVcvb8wEBsPdnogAl7WuhrwWF3icqBNxw5l1kozFE8lNZg0VpeUGXCpi0z5PtHinWHvRtppgljYdO3Pejiiot3pOWs6uo%2FTb2BFi49ZttAd48cvfskM4WGiekEOYow4d%2BrvgY6pgFgpt3XpVxcWOZ5oLBCwjWY3gWM6XCDuxn59JD9wJngVoQTE0Q8ykcYiiPIpXnR%2FtZch%2F9Yi%2F5345JOBl%2FjLn%2FM1s%2FAIBKggYUWJ65ENb%2B7gcI8rGISsJOX3mipiqYdjiN%2BooXZmyrjuEFHLQOx6NdOL28l57%2BF5Jb8aTJuD4hxM8gdD8hTknt4K%2FSPgyex43AP4pgdPByIZa7yaCvdmmN60YjC1gV3&X-Amz-Signature=0f0305709f098784680a2932aaca039c463c8da4f389620f102a293ecbf4dc08&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWRSLHL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJnyEXDaRWLrKm0f1tmWVPQRzHxfSOPxDfyfuSWPjiPAiBdiPMdhf3zEmI1v6W64llIt2j6iG0LxI0rcOwQgY6S%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BQ6gX2C0ZQXahgdUKtwDRerPp086GBF05MRCN0FS8uksrzLpkhORtS6XyqdgIFguu9XHsxa%2BS%2BgHcuJGGnfesH01vU3%2BxzETcpug%2BkDfeY4Yayt%2FIo8DnZV1hPLKsXKh5QD%2Bu5NvWKERFJbG3Ge2qDIUTocOnCWSj6bw5ud6qT9B22hGMrW9Fyp6EnFGQZmO9dNSH02idL64JWUyM5aRKkClFxV%2FKlQsDc9I3ot6DSUSKmUPNZ%2FEoJtNajEH5e46p2VA1MJbC4ADKACKnGUGcbSEuH6gQj6xZy4uCfAVvVxG%2Fuv37RFngRYwI3qnwQnotdHyrIuQB1xLZTT8lzt1jOTdDXrhe1ZjFeRxxzV07A04hP%2FnwF13xISu4qzxrJkgzOyZVEgM%2FEwgjV%2FnxvhTDUyLSY%2BbPPP%2B5zIC7sThak2evd7kSsVSlAKkIngvz6XQHHZjq9GroF6mA3IZwll6Uj0uASnr5RoNby3CruIqDBTjs9otBDRn7Xt%2BK1wn9fqUUnS1k6pDmfYO9f92%2F5rVcvb8wEBsPdnogAl7WuhrwWF3icqBNxw5l1kozFE8lNZg0VpeUGXCpi0z5PtHinWHvRtppgljYdO3Pejiiot3pOWs6uo%2FTb2BFi49ZttAd48cvfskM4WGiekEOYow4d%2BrvgY6pgFgpt3XpVxcWOZ5oLBCwjWY3gWM6XCDuxn59JD9wJngVoQTE0Q8ykcYiiPIpXnR%2FtZch%2F9Yi%2F5345JOBl%2FjLn%2FM1s%2FAIBKggYUWJ65ENb%2B7gcI8rGISsJOX3mipiqYdjiN%2BooXZmyrjuEFHLQOx6NdOL28l57%2BF5Jb8aTJuD4hxM8gdD8hTknt4K%2FSPgyex43AP4pgdPByIZa7yaCvdmmN60YjC1gV3&X-Amz-Signature=5234e3f6e7671f2d589b5442ad820d61afb3949436db487e500d6502192748e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWRSLHL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJnyEXDaRWLrKm0f1tmWVPQRzHxfSOPxDfyfuSWPjiPAiBdiPMdhf3zEmI1v6W64llIt2j6iG0LxI0rcOwQgY6S%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BQ6gX2C0ZQXahgdUKtwDRerPp086GBF05MRCN0FS8uksrzLpkhORtS6XyqdgIFguu9XHsxa%2BS%2BgHcuJGGnfesH01vU3%2BxzETcpug%2BkDfeY4Yayt%2FIo8DnZV1hPLKsXKh5QD%2Bu5NvWKERFJbG3Ge2qDIUTocOnCWSj6bw5ud6qT9B22hGMrW9Fyp6EnFGQZmO9dNSH02idL64JWUyM5aRKkClFxV%2FKlQsDc9I3ot6DSUSKmUPNZ%2FEoJtNajEH5e46p2VA1MJbC4ADKACKnGUGcbSEuH6gQj6xZy4uCfAVvVxG%2Fuv37RFngRYwI3qnwQnotdHyrIuQB1xLZTT8lzt1jOTdDXrhe1ZjFeRxxzV07A04hP%2FnwF13xISu4qzxrJkgzOyZVEgM%2FEwgjV%2FnxvhTDUyLSY%2BbPPP%2B5zIC7sThak2evd7kSsVSlAKkIngvz6XQHHZjq9GroF6mA3IZwll6Uj0uASnr5RoNby3CruIqDBTjs9otBDRn7Xt%2BK1wn9fqUUnS1k6pDmfYO9f92%2F5rVcvb8wEBsPdnogAl7WuhrwWF3icqBNxw5l1kozFE8lNZg0VpeUGXCpi0z5PtHinWHvRtppgljYdO3Pejiiot3pOWs6uo%2FTb2BFi49ZttAd48cvfskM4WGiekEOYow4d%2BrvgY6pgFgpt3XpVxcWOZ5oLBCwjWY3gWM6XCDuxn59JD9wJngVoQTE0Q8ykcYiiPIpXnR%2FtZch%2F9Yi%2F5345JOBl%2FjLn%2FM1s%2FAIBKggYUWJ65ENb%2B7gcI8rGISsJOX3mipiqYdjiN%2BooXZmyrjuEFHLQOx6NdOL28l57%2BF5Jb8aTJuD4hxM8gdD8hTknt4K%2FSPgyex43AP4pgdPByIZa7yaCvdmmN60YjC1gV3&X-Amz-Signature=445c797c4abac3b4f34db5b8d32ee799fc005ac733156f27826b24c619f703ec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YWRSLHL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJnyEXDaRWLrKm0f1tmWVPQRzHxfSOPxDfyfuSWPjiPAiBdiPMdhf3zEmI1v6W64llIt2j6iG0LxI0rcOwQgY6S%2FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BQ6gX2C0ZQXahgdUKtwDRerPp086GBF05MRCN0FS8uksrzLpkhORtS6XyqdgIFguu9XHsxa%2BS%2BgHcuJGGnfesH01vU3%2BxzETcpug%2BkDfeY4Yayt%2FIo8DnZV1hPLKsXKh5QD%2Bu5NvWKERFJbG3Ge2qDIUTocOnCWSj6bw5ud6qT9B22hGMrW9Fyp6EnFGQZmO9dNSH02idL64JWUyM5aRKkClFxV%2FKlQsDc9I3ot6DSUSKmUPNZ%2FEoJtNajEH5e46p2VA1MJbC4ADKACKnGUGcbSEuH6gQj6xZy4uCfAVvVxG%2Fuv37RFngRYwI3qnwQnotdHyrIuQB1xLZTT8lzt1jOTdDXrhe1ZjFeRxxzV07A04hP%2FnwF13xISu4qzxrJkgzOyZVEgM%2FEwgjV%2FnxvhTDUyLSY%2BbPPP%2B5zIC7sThak2evd7kSsVSlAKkIngvz6XQHHZjq9GroF6mA3IZwll6Uj0uASnr5RoNby3CruIqDBTjs9otBDRn7Xt%2BK1wn9fqUUnS1k6pDmfYO9f92%2F5rVcvb8wEBsPdnogAl7WuhrwWF3icqBNxw5l1kozFE8lNZg0VpeUGXCpi0z5PtHinWHvRtppgljYdO3Pejiiot3pOWs6uo%2FTb2BFi49ZttAd48cvfskM4WGiekEOYow4d%2BrvgY6pgFgpt3XpVxcWOZ5oLBCwjWY3gWM6XCDuxn59JD9wJngVoQTE0Q8ykcYiiPIpXnR%2FtZch%2F9Yi%2F5345JOBl%2FjLn%2FM1s%2FAIBKggYUWJ65ENb%2B7gcI8rGISsJOX3mipiqYdjiN%2BooXZmyrjuEFHLQOx6NdOL28l57%2BF5Jb8aTJuD4hxM8gdD8hTknt4K%2FSPgyex43AP4pgdPByIZa7yaCvdmmN60YjC1gV3&X-Amz-Signature=15c16b0a1b2ab54d506acc339cbb12c50fc077c6b96608a81b4869d02bb4fb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
