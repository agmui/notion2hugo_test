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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VYNU6K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfm%2FRySssx%2F4r2hVmydgV2B%2FeDZkJC9I42qFU1MeNftgIgSi8ohAliU9Tfj%2FJL8OGbkrzPH9X5DeBw30PZUUrBSTcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGPZ9JuUMRmqggzerSrcA0%2F3SGg5Pknps1cYn01mxHXJxNN6Ib2fQtQkTIAveMWV%2FsoXpyHnA4Y2lSDMxYh6o5HmOdgSdSBfITp9RoMVOe6QvMeS5YZiwRz6mnF18AWkvvWhi6EVzs8YBqRjHgigfiWspIVUiNWNQebLDR1z12bStepH%2FepaV8UoEcAORZnfoOK9iY3hw9TkRF4u1pLunla6RCHetM9M4NnICjxP%2FmJiMrKGpZnOCF3uFtohHRvp3pkkhzW5331DNzqgyZyTPAZWBx2N6OoxCEFMnOF3tJ1%2Br5YLmOhEdpzigmcQ9iafE3uBsLLqujRfZjCqQI6q3do4Se8XlgJ80a%2BGcRzNIUgxYzpoC1TwgMMbuC20yavNEFQESZoSII5R0Px3R6fKODtWwq3gdxokLtiv4FuiBtltUBzg1iOnon8N5HIjXcvynVDTRhDiYD5WiO23QjLB1V3NBRSFEazp81BT10FmulkTDwdrPMo9mE0wW8yh%2FcvKz%2BSlmZifb7LnLjhyq1z%2FCSN8hw4MLc%2F5UHvaIO59Etxo4jLQve5bxepJMyPoYFAyMwYbHbWK%2FkkxSHfxUXSMy56vq7MucPuFmzkyO8ZnQPFqzA6OAsNPq60tJlE4MvCYnaXKRi%2BdYRE%2F8crkMLKvhMAGOqUBvZmlC%2BEmaeOA4ngygRH1NXIFI4Hl1UhrlEAGoKbAvXnOqIQ%2FzOP5PvLHS3xoDIc26FJ8O5uppmfPfE7mmeIFFj5Akj77zaNITBSov2he9fuPVCbPKDuVo%2FrXMGlX5uVx%2BYQJONk4EgfroHbrtbPGZQ0KcgVt4lYdrAOFOQ%2F2cHKQNC0TF4zErXHb9uOoG4w%2F%2B7jewPg4k%2F3uXNLj1Qsk%2BoRgaglc&X-Amz-Signature=9d2620e88d6e07c81e6c023ed255daf6a995ac5747564e8977623adb50fd9510&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VYNU6K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfm%2FRySssx%2F4r2hVmydgV2B%2FeDZkJC9I42qFU1MeNftgIgSi8ohAliU9Tfj%2FJL8OGbkrzPH9X5DeBw30PZUUrBSTcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGPZ9JuUMRmqggzerSrcA0%2F3SGg5Pknps1cYn01mxHXJxNN6Ib2fQtQkTIAveMWV%2FsoXpyHnA4Y2lSDMxYh6o5HmOdgSdSBfITp9RoMVOe6QvMeS5YZiwRz6mnF18AWkvvWhi6EVzs8YBqRjHgigfiWspIVUiNWNQebLDR1z12bStepH%2FepaV8UoEcAORZnfoOK9iY3hw9TkRF4u1pLunla6RCHetM9M4NnICjxP%2FmJiMrKGpZnOCF3uFtohHRvp3pkkhzW5331DNzqgyZyTPAZWBx2N6OoxCEFMnOF3tJ1%2Br5YLmOhEdpzigmcQ9iafE3uBsLLqujRfZjCqQI6q3do4Se8XlgJ80a%2BGcRzNIUgxYzpoC1TwgMMbuC20yavNEFQESZoSII5R0Px3R6fKODtWwq3gdxokLtiv4FuiBtltUBzg1iOnon8N5HIjXcvynVDTRhDiYD5WiO23QjLB1V3NBRSFEazp81BT10FmulkTDwdrPMo9mE0wW8yh%2FcvKz%2BSlmZifb7LnLjhyq1z%2FCSN8hw4MLc%2F5UHvaIO59Etxo4jLQve5bxepJMyPoYFAyMwYbHbWK%2FkkxSHfxUXSMy56vq7MucPuFmzkyO8ZnQPFqzA6OAsNPq60tJlE4MvCYnaXKRi%2BdYRE%2F8crkMLKvhMAGOqUBvZmlC%2BEmaeOA4ngygRH1NXIFI4Hl1UhrlEAGoKbAvXnOqIQ%2FzOP5PvLHS3xoDIc26FJ8O5uppmfPfE7mmeIFFj5Akj77zaNITBSov2he9fuPVCbPKDuVo%2FrXMGlX5uVx%2BYQJONk4EgfroHbrtbPGZQ0KcgVt4lYdrAOFOQ%2F2cHKQNC0TF4zErXHb9uOoG4w%2F%2B7jewPg4k%2F3uXNLj1Qsk%2BoRgaglc&X-Amz-Signature=bb65134571a0477f59b45b59dc6c64a9b182c33ddb6040b4bc8e491a106083d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VYNU6K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfm%2FRySssx%2F4r2hVmydgV2B%2FeDZkJC9I42qFU1MeNftgIgSi8ohAliU9Tfj%2FJL8OGbkrzPH9X5DeBw30PZUUrBSTcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGPZ9JuUMRmqggzerSrcA0%2F3SGg5Pknps1cYn01mxHXJxNN6Ib2fQtQkTIAveMWV%2FsoXpyHnA4Y2lSDMxYh6o5HmOdgSdSBfITp9RoMVOe6QvMeS5YZiwRz6mnF18AWkvvWhi6EVzs8YBqRjHgigfiWspIVUiNWNQebLDR1z12bStepH%2FepaV8UoEcAORZnfoOK9iY3hw9TkRF4u1pLunla6RCHetM9M4NnICjxP%2FmJiMrKGpZnOCF3uFtohHRvp3pkkhzW5331DNzqgyZyTPAZWBx2N6OoxCEFMnOF3tJ1%2Br5YLmOhEdpzigmcQ9iafE3uBsLLqujRfZjCqQI6q3do4Se8XlgJ80a%2BGcRzNIUgxYzpoC1TwgMMbuC20yavNEFQESZoSII5R0Px3R6fKODtWwq3gdxokLtiv4FuiBtltUBzg1iOnon8N5HIjXcvynVDTRhDiYD5WiO23QjLB1V3NBRSFEazp81BT10FmulkTDwdrPMo9mE0wW8yh%2FcvKz%2BSlmZifb7LnLjhyq1z%2FCSN8hw4MLc%2F5UHvaIO59Etxo4jLQve5bxepJMyPoYFAyMwYbHbWK%2FkkxSHfxUXSMy56vq7MucPuFmzkyO8ZnQPFqzA6OAsNPq60tJlE4MvCYnaXKRi%2BdYRE%2F8crkMLKvhMAGOqUBvZmlC%2BEmaeOA4ngygRH1NXIFI4Hl1UhrlEAGoKbAvXnOqIQ%2FzOP5PvLHS3xoDIc26FJ8O5uppmfPfE7mmeIFFj5Akj77zaNITBSov2he9fuPVCbPKDuVo%2FrXMGlX5uVx%2BYQJONk4EgfroHbrtbPGZQ0KcgVt4lYdrAOFOQ%2F2cHKQNC0TF4zErXHb9uOoG4w%2F%2B7jewPg4k%2F3uXNLj1Qsk%2BoRgaglc&X-Amz-Signature=a502e5527be90dd92ebfdf13f974178ddeb9475ee039195c75da57699b6bc4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VYNU6K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfm%2FRySssx%2F4r2hVmydgV2B%2FeDZkJC9I42qFU1MeNftgIgSi8ohAliU9Tfj%2FJL8OGbkrzPH9X5DeBw30PZUUrBSTcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGPZ9JuUMRmqggzerSrcA0%2F3SGg5Pknps1cYn01mxHXJxNN6Ib2fQtQkTIAveMWV%2FsoXpyHnA4Y2lSDMxYh6o5HmOdgSdSBfITp9RoMVOe6QvMeS5YZiwRz6mnF18AWkvvWhi6EVzs8YBqRjHgigfiWspIVUiNWNQebLDR1z12bStepH%2FepaV8UoEcAORZnfoOK9iY3hw9TkRF4u1pLunla6RCHetM9M4NnICjxP%2FmJiMrKGpZnOCF3uFtohHRvp3pkkhzW5331DNzqgyZyTPAZWBx2N6OoxCEFMnOF3tJ1%2Br5YLmOhEdpzigmcQ9iafE3uBsLLqujRfZjCqQI6q3do4Se8XlgJ80a%2BGcRzNIUgxYzpoC1TwgMMbuC20yavNEFQESZoSII5R0Px3R6fKODtWwq3gdxokLtiv4FuiBtltUBzg1iOnon8N5HIjXcvynVDTRhDiYD5WiO23QjLB1V3NBRSFEazp81BT10FmulkTDwdrPMo9mE0wW8yh%2FcvKz%2BSlmZifb7LnLjhyq1z%2FCSN8hw4MLc%2F5UHvaIO59Etxo4jLQve5bxepJMyPoYFAyMwYbHbWK%2FkkxSHfxUXSMy56vq7MucPuFmzkyO8ZnQPFqzA6OAsNPq60tJlE4MvCYnaXKRi%2BdYRE%2F8crkMLKvhMAGOqUBvZmlC%2BEmaeOA4ngygRH1NXIFI4Hl1UhrlEAGoKbAvXnOqIQ%2FzOP5PvLHS3xoDIc26FJ8O5uppmfPfE7mmeIFFj5Akj77zaNITBSov2he9fuPVCbPKDuVo%2FrXMGlX5uVx%2BYQJONk4EgfroHbrtbPGZQ0KcgVt4lYdrAOFOQ%2F2cHKQNC0TF4zErXHb9uOoG4w%2F%2B7jewPg4k%2F3uXNLj1Qsk%2BoRgaglc&X-Amz-Signature=08f1e9bae4af3543b3231136a8b36fa512d4439174adf4c6085db5a8618e3ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VYNU6K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfm%2FRySssx%2F4r2hVmydgV2B%2FeDZkJC9I42qFU1MeNftgIgSi8ohAliU9Tfj%2FJL8OGbkrzPH9X5DeBw30PZUUrBSTcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGPZ9JuUMRmqggzerSrcA0%2F3SGg5Pknps1cYn01mxHXJxNN6Ib2fQtQkTIAveMWV%2FsoXpyHnA4Y2lSDMxYh6o5HmOdgSdSBfITp9RoMVOe6QvMeS5YZiwRz6mnF18AWkvvWhi6EVzs8YBqRjHgigfiWspIVUiNWNQebLDR1z12bStepH%2FepaV8UoEcAORZnfoOK9iY3hw9TkRF4u1pLunla6RCHetM9M4NnICjxP%2FmJiMrKGpZnOCF3uFtohHRvp3pkkhzW5331DNzqgyZyTPAZWBx2N6OoxCEFMnOF3tJ1%2Br5YLmOhEdpzigmcQ9iafE3uBsLLqujRfZjCqQI6q3do4Se8XlgJ80a%2BGcRzNIUgxYzpoC1TwgMMbuC20yavNEFQESZoSII5R0Px3R6fKODtWwq3gdxokLtiv4FuiBtltUBzg1iOnon8N5HIjXcvynVDTRhDiYD5WiO23QjLB1V3NBRSFEazp81BT10FmulkTDwdrPMo9mE0wW8yh%2FcvKz%2BSlmZifb7LnLjhyq1z%2FCSN8hw4MLc%2F5UHvaIO59Etxo4jLQve5bxepJMyPoYFAyMwYbHbWK%2FkkxSHfxUXSMy56vq7MucPuFmzkyO8ZnQPFqzA6OAsNPq60tJlE4MvCYnaXKRi%2BdYRE%2F8crkMLKvhMAGOqUBvZmlC%2BEmaeOA4ngygRH1NXIFI4Hl1UhrlEAGoKbAvXnOqIQ%2FzOP5PvLHS3xoDIc26FJ8O5uppmfPfE7mmeIFFj5Akj77zaNITBSov2he9fuPVCbPKDuVo%2FrXMGlX5uVx%2BYQJONk4EgfroHbrtbPGZQ0KcgVt4lYdrAOFOQ%2F2cHKQNC0TF4zErXHb9uOoG4w%2F%2B7jewPg4k%2F3uXNLj1Qsk%2BoRgaglc&X-Amz-Signature=0f5f51b69c0620e98fb24fc6e1890152fbaf61d3197e9f9cc801baea69d4cf13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VYNU6K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfm%2FRySssx%2F4r2hVmydgV2B%2FeDZkJC9I42qFU1MeNftgIgSi8ohAliU9Tfj%2FJL8OGbkrzPH9X5DeBw30PZUUrBSTcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGPZ9JuUMRmqggzerSrcA0%2F3SGg5Pknps1cYn01mxHXJxNN6Ib2fQtQkTIAveMWV%2FsoXpyHnA4Y2lSDMxYh6o5HmOdgSdSBfITp9RoMVOe6QvMeS5YZiwRz6mnF18AWkvvWhi6EVzs8YBqRjHgigfiWspIVUiNWNQebLDR1z12bStepH%2FepaV8UoEcAORZnfoOK9iY3hw9TkRF4u1pLunla6RCHetM9M4NnICjxP%2FmJiMrKGpZnOCF3uFtohHRvp3pkkhzW5331DNzqgyZyTPAZWBx2N6OoxCEFMnOF3tJ1%2Br5YLmOhEdpzigmcQ9iafE3uBsLLqujRfZjCqQI6q3do4Se8XlgJ80a%2BGcRzNIUgxYzpoC1TwgMMbuC20yavNEFQESZoSII5R0Px3R6fKODtWwq3gdxokLtiv4FuiBtltUBzg1iOnon8N5HIjXcvynVDTRhDiYD5WiO23QjLB1V3NBRSFEazp81BT10FmulkTDwdrPMo9mE0wW8yh%2FcvKz%2BSlmZifb7LnLjhyq1z%2FCSN8hw4MLc%2F5UHvaIO59Etxo4jLQve5bxepJMyPoYFAyMwYbHbWK%2FkkxSHfxUXSMy56vq7MucPuFmzkyO8ZnQPFqzA6OAsNPq60tJlE4MvCYnaXKRi%2BdYRE%2F8crkMLKvhMAGOqUBvZmlC%2BEmaeOA4ngygRH1NXIFI4Hl1UhrlEAGoKbAvXnOqIQ%2FzOP5PvLHS3xoDIc26FJ8O5uppmfPfE7mmeIFFj5Akj77zaNITBSov2he9fuPVCbPKDuVo%2FrXMGlX5uVx%2BYQJONk4EgfroHbrtbPGZQ0KcgVt4lYdrAOFOQ%2F2cHKQNC0TF4zErXHb9uOoG4w%2F%2B7jewPg4k%2F3uXNLj1Qsk%2BoRgaglc&X-Amz-Signature=4fdc6f4e60399c5434bdd6c33b29c61f709116a16821ec713e68ae539ad1fa06&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VYNU6K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfm%2FRySssx%2F4r2hVmydgV2B%2FeDZkJC9I42qFU1MeNftgIgSi8ohAliU9Tfj%2FJL8OGbkrzPH9X5DeBw30PZUUrBSTcq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGPZ9JuUMRmqggzerSrcA0%2F3SGg5Pknps1cYn01mxHXJxNN6Ib2fQtQkTIAveMWV%2FsoXpyHnA4Y2lSDMxYh6o5HmOdgSdSBfITp9RoMVOe6QvMeS5YZiwRz6mnF18AWkvvWhi6EVzs8YBqRjHgigfiWspIVUiNWNQebLDR1z12bStepH%2FepaV8UoEcAORZnfoOK9iY3hw9TkRF4u1pLunla6RCHetM9M4NnICjxP%2FmJiMrKGpZnOCF3uFtohHRvp3pkkhzW5331DNzqgyZyTPAZWBx2N6OoxCEFMnOF3tJ1%2Br5YLmOhEdpzigmcQ9iafE3uBsLLqujRfZjCqQI6q3do4Se8XlgJ80a%2BGcRzNIUgxYzpoC1TwgMMbuC20yavNEFQESZoSII5R0Px3R6fKODtWwq3gdxokLtiv4FuiBtltUBzg1iOnon8N5HIjXcvynVDTRhDiYD5WiO23QjLB1V3NBRSFEazp81BT10FmulkTDwdrPMo9mE0wW8yh%2FcvKz%2BSlmZifb7LnLjhyq1z%2FCSN8hw4MLc%2F5UHvaIO59Etxo4jLQve5bxepJMyPoYFAyMwYbHbWK%2FkkxSHfxUXSMy56vq7MucPuFmzkyO8ZnQPFqzA6OAsNPq60tJlE4MvCYnaXKRi%2BdYRE%2F8crkMLKvhMAGOqUBvZmlC%2BEmaeOA4ngygRH1NXIFI4Hl1UhrlEAGoKbAvXnOqIQ%2FzOP5PvLHS3xoDIc26FJ8O5uppmfPfE7mmeIFFj5Akj77zaNITBSov2he9fuPVCbPKDuVo%2FrXMGlX5uVx%2BYQJONk4EgfroHbrtbPGZQ0KcgVt4lYdrAOFOQ%2F2cHKQNC0TF4zErXHb9uOoG4w%2F%2B7jewPg4k%2F3uXNLj1Qsk%2BoRgaglc&X-Amz-Signature=6b6d87ad4d1da5f6de7c3791a6c6543d557988cc814ec6b7a78817f566f52640&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
