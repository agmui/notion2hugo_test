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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWFIVGM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPI%2B4Blx%2F3Goz82tpfQPWSFMIzB7y4cF9PozTtwm1DIQIgWkC4XM5E29qxA3sGwXLp2XUf11qM%2F7gLN71yzQUqvV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPezI4A%2FYp5nJ9G0ayrcA7nqJ%2FMpAydbG9akhA0Lm%2F7cKRaM3MUI59TdbcdnHtc7bQLybhFk87vpDO5meaLLnXTVuOBCVD9YpisyaxYiIrzTwMOcJosMES%2F%2F%2BFn0brzxJaec9CNK5TJqFLcQLYvgAiQ1a%2FH%2BfDBTgbxk5F6hXXBQc8A5ZNLlFX65KhlGQJQoHy51dxB48kUfd7rMMRSW0ziWBAKafeFlgS8%2FbRWmMAa7J%2FEIK%2FM5gBUq%2BEu5jMCLSy%2F9hlvVVqto6W998e6oQfKEqY6mmtxaDW7u4%2BzoBUgjFztx1GdBikSAC%2FEu9uSfhI0oM4Z49GRDHtLs3RSTRJ3FwmxfGukVqNAymafiWQMsgiJadhu4%2FeXVY5kbMmBMsmxPFtviAITMCTJ1GcpLb2FBN9kc%2B0KFZ02cUYs%2FfzrbH5%2F%2BRVNZ7tK%2FNkChLZQqfMX5G1ayRJ%2BH60LOOJI2UQBa1AcBgOcZ61Ng6mDPifw7F4xtedl4Mtrcmmm%2BTnNfOCiZbopR5sgKOHP9KfDWff4%2FK2dkqF8xej7KjTrdIMH8Q3Zgf4bU9uKZz8gTzilEEWyJgaTD1JqYnfJckZT0etQUd3odc8bIbTtR8xvWB2tVkIyVp55qWtkvOIsi%2FqTMLxBI0edMdiqMaTJvMJym97wGOqUBu7cQWzcvPgQnsQzPerjpEhkQFwJxEImF0CmxeLCe0wqrbPAYkdoQ8LxWsx3xxfZOpaPvvofjwXGNkxgXEUE6SX603kyCDl5VYJPLIper6hHOxz%2BUKVRXtwzPiNH%2BINtHugLsYlkL7o0Nx92jUFIHVNRVaf%2Fj7xVxVUoB%2ByUd3oC1ZTnIj0JsO4rN1hAxisFITkdSSI83NCQdDQLNMdp8g9Zc%2BtE3&X-Amz-Signature=6fe02f8df22092ac8433ddc7b21f20a1116b01a2758f121b451520651fe39d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWFIVGM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPI%2B4Blx%2F3Goz82tpfQPWSFMIzB7y4cF9PozTtwm1DIQIgWkC4XM5E29qxA3sGwXLp2XUf11qM%2F7gLN71yzQUqvV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPezI4A%2FYp5nJ9G0ayrcA7nqJ%2FMpAydbG9akhA0Lm%2F7cKRaM3MUI59TdbcdnHtc7bQLybhFk87vpDO5meaLLnXTVuOBCVD9YpisyaxYiIrzTwMOcJosMES%2F%2F%2BFn0brzxJaec9CNK5TJqFLcQLYvgAiQ1a%2FH%2BfDBTgbxk5F6hXXBQc8A5ZNLlFX65KhlGQJQoHy51dxB48kUfd7rMMRSW0ziWBAKafeFlgS8%2FbRWmMAa7J%2FEIK%2FM5gBUq%2BEu5jMCLSy%2F9hlvVVqto6W998e6oQfKEqY6mmtxaDW7u4%2BzoBUgjFztx1GdBikSAC%2FEu9uSfhI0oM4Z49GRDHtLs3RSTRJ3FwmxfGukVqNAymafiWQMsgiJadhu4%2FeXVY5kbMmBMsmxPFtviAITMCTJ1GcpLb2FBN9kc%2B0KFZ02cUYs%2FfzrbH5%2F%2BRVNZ7tK%2FNkChLZQqfMX5G1ayRJ%2BH60LOOJI2UQBa1AcBgOcZ61Ng6mDPifw7F4xtedl4Mtrcmmm%2BTnNfOCiZbopR5sgKOHP9KfDWff4%2FK2dkqF8xej7KjTrdIMH8Q3Zgf4bU9uKZz8gTzilEEWyJgaTD1JqYnfJckZT0etQUd3odc8bIbTtR8xvWB2tVkIyVp55qWtkvOIsi%2FqTMLxBI0edMdiqMaTJvMJym97wGOqUBu7cQWzcvPgQnsQzPerjpEhkQFwJxEImF0CmxeLCe0wqrbPAYkdoQ8LxWsx3xxfZOpaPvvofjwXGNkxgXEUE6SX603kyCDl5VYJPLIper6hHOxz%2BUKVRXtwzPiNH%2BINtHugLsYlkL7o0Nx92jUFIHVNRVaf%2Fj7xVxVUoB%2ByUd3oC1ZTnIj0JsO4rN1hAxisFITkdSSI83NCQdDQLNMdp8g9Zc%2BtE3&X-Amz-Signature=ce4d6013475da604d0cb803f73291236333bdc92a0ada4b8d1254604332a4fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWFIVGM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPI%2B4Blx%2F3Goz82tpfQPWSFMIzB7y4cF9PozTtwm1DIQIgWkC4XM5E29qxA3sGwXLp2XUf11qM%2F7gLN71yzQUqvV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPezI4A%2FYp5nJ9G0ayrcA7nqJ%2FMpAydbG9akhA0Lm%2F7cKRaM3MUI59TdbcdnHtc7bQLybhFk87vpDO5meaLLnXTVuOBCVD9YpisyaxYiIrzTwMOcJosMES%2F%2F%2BFn0brzxJaec9CNK5TJqFLcQLYvgAiQ1a%2FH%2BfDBTgbxk5F6hXXBQc8A5ZNLlFX65KhlGQJQoHy51dxB48kUfd7rMMRSW0ziWBAKafeFlgS8%2FbRWmMAa7J%2FEIK%2FM5gBUq%2BEu5jMCLSy%2F9hlvVVqto6W998e6oQfKEqY6mmtxaDW7u4%2BzoBUgjFztx1GdBikSAC%2FEu9uSfhI0oM4Z49GRDHtLs3RSTRJ3FwmxfGukVqNAymafiWQMsgiJadhu4%2FeXVY5kbMmBMsmxPFtviAITMCTJ1GcpLb2FBN9kc%2B0KFZ02cUYs%2FfzrbH5%2F%2BRVNZ7tK%2FNkChLZQqfMX5G1ayRJ%2BH60LOOJI2UQBa1AcBgOcZ61Ng6mDPifw7F4xtedl4Mtrcmmm%2BTnNfOCiZbopR5sgKOHP9KfDWff4%2FK2dkqF8xej7KjTrdIMH8Q3Zgf4bU9uKZz8gTzilEEWyJgaTD1JqYnfJckZT0etQUd3odc8bIbTtR8xvWB2tVkIyVp55qWtkvOIsi%2FqTMLxBI0edMdiqMaTJvMJym97wGOqUBu7cQWzcvPgQnsQzPerjpEhkQFwJxEImF0CmxeLCe0wqrbPAYkdoQ8LxWsx3xxfZOpaPvvofjwXGNkxgXEUE6SX603kyCDl5VYJPLIper6hHOxz%2BUKVRXtwzPiNH%2BINtHugLsYlkL7o0Nx92jUFIHVNRVaf%2Fj7xVxVUoB%2ByUd3oC1ZTnIj0JsO4rN1hAxisFITkdSSI83NCQdDQLNMdp8g9Zc%2BtE3&X-Amz-Signature=73ae63df34fe0b0725d4ba2578843bdfdd32088b8f2e1cff06d6e5c9884fc6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWFIVGM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPI%2B4Blx%2F3Goz82tpfQPWSFMIzB7y4cF9PozTtwm1DIQIgWkC4XM5E29qxA3sGwXLp2XUf11qM%2F7gLN71yzQUqvV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPezI4A%2FYp5nJ9G0ayrcA7nqJ%2FMpAydbG9akhA0Lm%2F7cKRaM3MUI59TdbcdnHtc7bQLybhFk87vpDO5meaLLnXTVuOBCVD9YpisyaxYiIrzTwMOcJosMES%2F%2F%2BFn0brzxJaec9CNK5TJqFLcQLYvgAiQ1a%2FH%2BfDBTgbxk5F6hXXBQc8A5ZNLlFX65KhlGQJQoHy51dxB48kUfd7rMMRSW0ziWBAKafeFlgS8%2FbRWmMAa7J%2FEIK%2FM5gBUq%2BEu5jMCLSy%2F9hlvVVqto6W998e6oQfKEqY6mmtxaDW7u4%2BzoBUgjFztx1GdBikSAC%2FEu9uSfhI0oM4Z49GRDHtLs3RSTRJ3FwmxfGukVqNAymafiWQMsgiJadhu4%2FeXVY5kbMmBMsmxPFtviAITMCTJ1GcpLb2FBN9kc%2B0KFZ02cUYs%2FfzrbH5%2F%2BRVNZ7tK%2FNkChLZQqfMX5G1ayRJ%2BH60LOOJI2UQBa1AcBgOcZ61Ng6mDPifw7F4xtedl4Mtrcmmm%2BTnNfOCiZbopR5sgKOHP9KfDWff4%2FK2dkqF8xej7KjTrdIMH8Q3Zgf4bU9uKZz8gTzilEEWyJgaTD1JqYnfJckZT0etQUd3odc8bIbTtR8xvWB2tVkIyVp55qWtkvOIsi%2FqTMLxBI0edMdiqMaTJvMJym97wGOqUBu7cQWzcvPgQnsQzPerjpEhkQFwJxEImF0CmxeLCe0wqrbPAYkdoQ8LxWsx3xxfZOpaPvvofjwXGNkxgXEUE6SX603kyCDl5VYJPLIper6hHOxz%2BUKVRXtwzPiNH%2BINtHugLsYlkL7o0Nx92jUFIHVNRVaf%2Fj7xVxVUoB%2ByUd3oC1ZTnIj0JsO4rN1hAxisFITkdSSI83NCQdDQLNMdp8g9Zc%2BtE3&X-Amz-Signature=50fc8d0d58d682fcf9cf26504d733566dd28b9cc0f2140fe5d54358add4de4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWFIVGM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPI%2B4Blx%2F3Goz82tpfQPWSFMIzB7y4cF9PozTtwm1DIQIgWkC4XM5E29qxA3sGwXLp2XUf11qM%2F7gLN71yzQUqvV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPezI4A%2FYp5nJ9G0ayrcA7nqJ%2FMpAydbG9akhA0Lm%2F7cKRaM3MUI59TdbcdnHtc7bQLybhFk87vpDO5meaLLnXTVuOBCVD9YpisyaxYiIrzTwMOcJosMES%2F%2F%2BFn0brzxJaec9CNK5TJqFLcQLYvgAiQ1a%2FH%2BfDBTgbxk5F6hXXBQc8A5ZNLlFX65KhlGQJQoHy51dxB48kUfd7rMMRSW0ziWBAKafeFlgS8%2FbRWmMAa7J%2FEIK%2FM5gBUq%2BEu5jMCLSy%2F9hlvVVqto6W998e6oQfKEqY6mmtxaDW7u4%2BzoBUgjFztx1GdBikSAC%2FEu9uSfhI0oM4Z49GRDHtLs3RSTRJ3FwmxfGukVqNAymafiWQMsgiJadhu4%2FeXVY5kbMmBMsmxPFtviAITMCTJ1GcpLb2FBN9kc%2B0KFZ02cUYs%2FfzrbH5%2F%2BRVNZ7tK%2FNkChLZQqfMX5G1ayRJ%2BH60LOOJI2UQBa1AcBgOcZ61Ng6mDPifw7F4xtedl4Mtrcmmm%2BTnNfOCiZbopR5sgKOHP9KfDWff4%2FK2dkqF8xej7KjTrdIMH8Q3Zgf4bU9uKZz8gTzilEEWyJgaTD1JqYnfJckZT0etQUd3odc8bIbTtR8xvWB2tVkIyVp55qWtkvOIsi%2FqTMLxBI0edMdiqMaTJvMJym97wGOqUBu7cQWzcvPgQnsQzPerjpEhkQFwJxEImF0CmxeLCe0wqrbPAYkdoQ8LxWsx3xxfZOpaPvvofjwXGNkxgXEUE6SX603kyCDl5VYJPLIper6hHOxz%2BUKVRXtwzPiNH%2BINtHugLsYlkL7o0Nx92jUFIHVNRVaf%2Fj7xVxVUoB%2ByUd3oC1ZTnIj0JsO4rN1hAxisFITkdSSI83NCQdDQLNMdp8g9Zc%2BtE3&X-Amz-Signature=b1c7d3aafc5a2bc3f5e4f1e9a77852de11747f23244543a250095616061e8186&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWFIVGM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPI%2B4Blx%2F3Goz82tpfQPWSFMIzB7y4cF9PozTtwm1DIQIgWkC4XM5E29qxA3sGwXLp2XUf11qM%2F7gLN71yzQUqvV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPezI4A%2FYp5nJ9G0ayrcA7nqJ%2FMpAydbG9akhA0Lm%2F7cKRaM3MUI59TdbcdnHtc7bQLybhFk87vpDO5meaLLnXTVuOBCVD9YpisyaxYiIrzTwMOcJosMES%2F%2F%2BFn0brzxJaec9CNK5TJqFLcQLYvgAiQ1a%2FH%2BfDBTgbxk5F6hXXBQc8A5ZNLlFX65KhlGQJQoHy51dxB48kUfd7rMMRSW0ziWBAKafeFlgS8%2FbRWmMAa7J%2FEIK%2FM5gBUq%2BEu5jMCLSy%2F9hlvVVqto6W998e6oQfKEqY6mmtxaDW7u4%2BzoBUgjFztx1GdBikSAC%2FEu9uSfhI0oM4Z49GRDHtLs3RSTRJ3FwmxfGukVqNAymafiWQMsgiJadhu4%2FeXVY5kbMmBMsmxPFtviAITMCTJ1GcpLb2FBN9kc%2B0KFZ02cUYs%2FfzrbH5%2F%2BRVNZ7tK%2FNkChLZQqfMX5G1ayRJ%2BH60LOOJI2UQBa1AcBgOcZ61Ng6mDPifw7F4xtedl4Mtrcmmm%2BTnNfOCiZbopR5sgKOHP9KfDWff4%2FK2dkqF8xej7KjTrdIMH8Q3Zgf4bU9uKZz8gTzilEEWyJgaTD1JqYnfJckZT0etQUd3odc8bIbTtR8xvWB2tVkIyVp55qWtkvOIsi%2FqTMLxBI0edMdiqMaTJvMJym97wGOqUBu7cQWzcvPgQnsQzPerjpEhkQFwJxEImF0CmxeLCe0wqrbPAYkdoQ8LxWsx3xxfZOpaPvvofjwXGNkxgXEUE6SX603kyCDl5VYJPLIper6hHOxz%2BUKVRXtwzPiNH%2BINtHugLsYlkL7o0Nx92jUFIHVNRVaf%2Fj7xVxVUoB%2ByUd3oC1ZTnIj0JsO4rN1hAxisFITkdSSI83NCQdDQLNMdp8g9Zc%2BtE3&X-Amz-Signature=947f04d16daf0cea13594da721193a05de91eb1782754e6e4cef751265ddacd0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TWFIVGM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPI%2B4Blx%2F3Goz82tpfQPWSFMIzB7y4cF9PozTtwm1DIQIgWkC4XM5E29qxA3sGwXLp2XUf11qM%2F7gLN71yzQUqvV0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPezI4A%2FYp5nJ9G0ayrcA7nqJ%2FMpAydbG9akhA0Lm%2F7cKRaM3MUI59TdbcdnHtc7bQLybhFk87vpDO5meaLLnXTVuOBCVD9YpisyaxYiIrzTwMOcJosMES%2F%2F%2BFn0brzxJaec9CNK5TJqFLcQLYvgAiQ1a%2FH%2BfDBTgbxk5F6hXXBQc8A5ZNLlFX65KhlGQJQoHy51dxB48kUfd7rMMRSW0ziWBAKafeFlgS8%2FbRWmMAa7J%2FEIK%2FM5gBUq%2BEu5jMCLSy%2F9hlvVVqto6W998e6oQfKEqY6mmtxaDW7u4%2BzoBUgjFztx1GdBikSAC%2FEu9uSfhI0oM4Z49GRDHtLs3RSTRJ3FwmxfGukVqNAymafiWQMsgiJadhu4%2FeXVY5kbMmBMsmxPFtviAITMCTJ1GcpLb2FBN9kc%2B0KFZ02cUYs%2FfzrbH5%2F%2BRVNZ7tK%2FNkChLZQqfMX5G1ayRJ%2BH60LOOJI2UQBa1AcBgOcZ61Ng6mDPifw7F4xtedl4Mtrcmmm%2BTnNfOCiZbopR5sgKOHP9KfDWff4%2FK2dkqF8xej7KjTrdIMH8Q3Zgf4bU9uKZz8gTzilEEWyJgaTD1JqYnfJckZT0etQUd3odc8bIbTtR8xvWB2tVkIyVp55qWtkvOIsi%2FqTMLxBI0edMdiqMaTJvMJym97wGOqUBu7cQWzcvPgQnsQzPerjpEhkQFwJxEImF0CmxeLCe0wqrbPAYkdoQ8LxWsx3xxfZOpaPvvofjwXGNkxgXEUE6SX603kyCDl5VYJPLIper6hHOxz%2BUKVRXtwzPiNH%2BINtHugLsYlkL7o0Nx92jUFIHVNRVaf%2Fj7xVxVUoB%2ByUd3oC1ZTnIj0JsO4rN1hAxisFITkdSSI83NCQdDQLNMdp8g9Zc%2BtE3&X-Amz-Signature=6f27fa88976538fb9821db03f2881351f7cd515220fb52827cb63f5f63521d04&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
