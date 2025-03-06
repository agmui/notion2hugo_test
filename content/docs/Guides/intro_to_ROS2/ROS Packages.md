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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH35VYPC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMEbVsZ5HhiFzCMyDNoXNVl8HdyDZzzSLBC5Gy4VCw7AiEA4zMZQDmia9u5qV%2B%2BYh%2FEtzrJC%2BOFXif9aybv6um2MDAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMlxlwQs46GLUiRo3CrcAytrTeuYLKsBlHXS9JpQpPTbuOL0cWThN0Pv5H2j1NbIjwejmFQ6uyPEfhF4cVOhZ1kJgFU4U%2BeeM0y%2FYvILcKJxOnr9GOCD0dkqMws8GuUMe0cuSvQHNR%2FUFoBnDBOl5ZShk8M9d%2FPS4rhtA8MEykRtrxN23vvAk9laVGjNHSH1UPE11hGv5VU9VQ0lE94rydY6R2x%2FcEHkFlO39rMZEl1tiJAnJDbA6Hd58A8eqVc43wImS4p14gpfesfgoLJT3kMp7DNbMozcwSXk%2F0iwpW8nt1K8vdYUwr%2F8vkiDTesQVYGO93Do6Dwho5mZemVG0GLIlJhneYasc%2FkBrSt6O2j9VP0OTTd7uOi48EUAug0K2PCgH8rCD0EWAnWKQWcPe8F2qNek%2B3o1tXdl3FcOby0NpGAhbAC6pYKQqSvGYAN21L62vF80V5cUlUFgiRpQ1sidFtfxYjZZc8nTmh8HwKL%2B9AGyGeJ%2FBUTm%2BocvbrN%2B11g5eqsUPOjYZ7F2g3NpQ%2BnQPj2VGR6IDxqAAqAo3t9AD6tiD%2Fo33T5hxWjmmXRSkAfvy%2B%2B5hWrJGQf3I5kWUC36mb8VLxvgbP0YRqEDut%2BQjOsbzcZ8wlMT4QMtlhbFiq1KcbRUDRcAB%2FrLMM%2FNp74GOqUBvS6u6UW09H3bGU4ubAvqNtgL7KWLnW4K4IDvDUdguyIlfVnUdGI3Du3TJZB5IbzcoZHFRNjo%2BjkyGZhnWMigBRSe6maiAqQ6MHMPlYiygiIkxB5Z2EsxhK%2FdJ7uf2Qxjk0w%2FVhcyVeDY2phE5HWuPYRVyvjhwr6N85KJ20gxNqU%2B6H5%2BBCsDdW0uCnD%2BXS4v7DFBKzyaAC%2Baq9%2F3%2FEMjdA5QwGPM&X-Amz-Signature=b1808b6b3db9d8cb36538633e25ff2f4172730904bab81b93295f84a80edb504&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH35VYPC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMEbVsZ5HhiFzCMyDNoXNVl8HdyDZzzSLBC5Gy4VCw7AiEA4zMZQDmia9u5qV%2B%2BYh%2FEtzrJC%2BOFXif9aybv6um2MDAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMlxlwQs46GLUiRo3CrcAytrTeuYLKsBlHXS9JpQpPTbuOL0cWThN0Pv5H2j1NbIjwejmFQ6uyPEfhF4cVOhZ1kJgFU4U%2BeeM0y%2FYvILcKJxOnr9GOCD0dkqMws8GuUMe0cuSvQHNR%2FUFoBnDBOl5ZShk8M9d%2FPS4rhtA8MEykRtrxN23vvAk9laVGjNHSH1UPE11hGv5VU9VQ0lE94rydY6R2x%2FcEHkFlO39rMZEl1tiJAnJDbA6Hd58A8eqVc43wImS4p14gpfesfgoLJT3kMp7DNbMozcwSXk%2F0iwpW8nt1K8vdYUwr%2F8vkiDTesQVYGO93Do6Dwho5mZemVG0GLIlJhneYasc%2FkBrSt6O2j9VP0OTTd7uOi48EUAug0K2PCgH8rCD0EWAnWKQWcPe8F2qNek%2B3o1tXdl3FcOby0NpGAhbAC6pYKQqSvGYAN21L62vF80V5cUlUFgiRpQ1sidFtfxYjZZc8nTmh8HwKL%2B9AGyGeJ%2FBUTm%2BocvbrN%2B11g5eqsUPOjYZ7F2g3NpQ%2BnQPj2VGR6IDxqAAqAo3t9AD6tiD%2Fo33T5hxWjmmXRSkAfvy%2B%2B5hWrJGQf3I5kWUC36mb8VLxvgbP0YRqEDut%2BQjOsbzcZ8wlMT4QMtlhbFiq1KcbRUDRcAB%2FrLMM%2FNp74GOqUBvS6u6UW09H3bGU4ubAvqNtgL7KWLnW4K4IDvDUdguyIlfVnUdGI3Du3TJZB5IbzcoZHFRNjo%2BjkyGZhnWMigBRSe6maiAqQ6MHMPlYiygiIkxB5Z2EsxhK%2FdJ7uf2Qxjk0w%2FVhcyVeDY2phE5HWuPYRVyvjhwr6N85KJ20gxNqU%2B6H5%2BBCsDdW0uCnD%2BXS4v7DFBKzyaAC%2Baq9%2F3%2FEMjdA5QwGPM&X-Amz-Signature=b28f8eb15b3cbeeecea1db303cdd8dc7b5c911d8988b53ee620c0618c26b234a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH35VYPC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMEbVsZ5HhiFzCMyDNoXNVl8HdyDZzzSLBC5Gy4VCw7AiEA4zMZQDmia9u5qV%2B%2BYh%2FEtzrJC%2BOFXif9aybv6um2MDAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMlxlwQs46GLUiRo3CrcAytrTeuYLKsBlHXS9JpQpPTbuOL0cWThN0Pv5H2j1NbIjwejmFQ6uyPEfhF4cVOhZ1kJgFU4U%2BeeM0y%2FYvILcKJxOnr9GOCD0dkqMws8GuUMe0cuSvQHNR%2FUFoBnDBOl5ZShk8M9d%2FPS4rhtA8MEykRtrxN23vvAk9laVGjNHSH1UPE11hGv5VU9VQ0lE94rydY6R2x%2FcEHkFlO39rMZEl1tiJAnJDbA6Hd58A8eqVc43wImS4p14gpfesfgoLJT3kMp7DNbMozcwSXk%2F0iwpW8nt1K8vdYUwr%2F8vkiDTesQVYGO93Do6Dwho5mZemVG0GLIlJhneYasc%2FkBrSt6O2j9VP0OTTd7uOi48EUAug0K2PCgH8rCD0EWAnWKQWcPe8F2qNek%2B3o1tXdl3FcOby0NpGAhbAC6pYKQqSvGYAN21L62vF80V5cUlUFgiRpQ1sidFtfxYjZZc8nTmh8HwKL%2B9AGyGeJ%2FBUTm%2BocvbrN%2B11g5eqsUPOjYZ7F2g3NpQ%2BnQPj2VGR6IDxqAAqAo3t9AD6tiD%2Fo33T5hxWjmmXRSkAfvy%2B%2B5hWrJGQf3I5kWUC36mb8VLxvgbP0YRqEDut%2BQjOsbzcZ8wlMT4QMtlhbFiq1KcbRUDRcAB%2FrLMM%2FNp74GOqUBvS6u6UW09H3bGU4ubAvqNtgL7KWLnW4K4IDvDUdguyIlfVnUdGI3Du3TJZB5IbzcoZHFRNjo%2BjkyGZhnWMigBRSe6maiAqQ6MHMPlYiygiIkxB5Z2EsxhK%2FdJ7uf2Qxjk0w%2FVhcyVeDY2phE5HWuPYRVyvjhwr6N85KJ20gxNqU%2B6H5%2BBCsDdW0uCnD%2BXS4v7DFBKzyaAC%2Baq9%2F3%2FEMjdA5QwGPM&X-Amz-Signature=3c01c73bf2db23f5eaecdf498ebb6bc96b43c4ce0a62e599ba99c94935895aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH35VYPC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMEbVsZ5HhiFzCMyDNoXNVl8HdyDZzzSLBC5Gy4VCw7AiEA4zMZQDmia9u5qV%2B%2BYh%2FEtzrJC%2BOFXif9aybv6um2MDAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMlxlwQs46GLUiRo3CrcAytrTeuYLKsBlHXS9JpQpPTbuOL0cWThN0Pv5H2j1NbIjwejmFQ6uyPEfhF4cVOhZ1kJgFU4U%2BeeM0y%2FYvILcKJxOnr9GOCD0dkqMws8GuUMe0cuSvQHNR%2FUFoBnDBOl5ZShk8M9d%2FPS4rhtA8MEykRtrxN23vvAk9laVGjNHSH1UPE11hGv5VU9VQ0lE94rydY6R2x%2FcEHkFlO39rMZEl1tiJAnJDbA6Hd58A8eqVc43wImS4p14gpfesfgoLJT3kMp7DNbMozcwSXk%2F0iwpW8nt1K8vdYUwr%2F8vkiDTesQVYGO93Do6Dwho5mZemVG0GLIlJhneYasc%2FkBrSt6O2j9VP0OTTd7uOi48EUAug0K2PCgH8rCD0EWAnWKQWcPe8F2qNek%2B3o1tXdl3FcOby0NpGAhbAC6pYKQqSvGYAN21L62vF80V5cUlUFgiRpQ1sidFtfxYjZZc8nTmh8HwKL%2B9AGyGeJ%2FBUTm%2BocvbrN%2B11g5eqsUPOjYZ7F2g3NpQ%2BnQPj2VGR6IDxqAAqAo3t9AD6tiD%2Fo33T5hxWjmmXRSkAfvy%2B%2B5hWrJGQf3I5kWUC36mb8VLxvgbP0YRqEDut%2BQjOsbzcZ8wlMT4QMtlhbFiq1KcbRUDRcAB%2FrLMM%2FNp74GOqUBvS6u6UW09H3bGU4ubAvqNtgL7KWLnW4K4IDvDUdguyIlfVnUdGI3Du3TJZB5IbzcoZHFRNjo%2BjkyGZhnWMigBRSe6maiAqQ6MHMPlYiygiIkxB5Z2EsxhK%2FdJ7uf2Qxjk0w%2FVhcyVeDY2phE5HWuPYRVyvjhwr6N85KJ20gxNqU%2B6H5%2BBCsDdW0uCnD%2BXS4v7DFBKzyaAC%2Baq9%2F3%2FEMjdA5QwGPM&X-Amz-Signature=1a20e057471c39427c2b705eb52a1653bf471d1ff4eb8ed2b129f111024fe2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH35VYPC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMEbVsZ5HhiFzCMyDNoXNVl8HdyDZzzSLBC5Gy4VCw7AiEA4zMZQDmia9u5qV%2B%2BYh%2FEtzrJC%2BOFXif9aybv6um2MDAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMlxlwQs46GLUiRo3CrcAytrTeuYLKsBlHXS9JpQpPTbuOL0cWThN0Pv5H2j1NbIjwejmFQ6uyPEfhF4cVOhZ1kJgFU4U%2BeeM0y%2FYvILcKJxOnr9GOCD0dkqMws8GuUMe0cuSvQHNR%2FUFoBnDBOl5ZShk8M9d%2FPS4rhtA8MEykRtrxN23vvAk9laVGjNHSH1UPE11hGv5VU9VQ0lE94rydY6R2x%2FcEHkFlO39rMZEl1tiJAnJDbA6Hd58A8eqVc43wImS4p14gpfesfgoLJT3kMp7DNbMozcwSXk%2F0iwpW8nt1K8vdYUwr%2F8vkiDTesQVYGO93Do6Dwho5mZemVG0GLIlJhneYasc%2FkBrSt6O2j9VP0OTTd7uOi48EUAug0K2PCgH8rCD0EWAnWKQWcPe8F2qNek%2B3o1tXdl3FcOby0NpGAhbAC6pYKQqSvGYAN21L62vF80V5cUlUFgiRpQ1sidFtfxYjZZc8nTmh8HwKL%2B9AGyGeJ%2FBUTm%2BocvbrN%2B11g5eqsUPOjYZ7F2g3NpQ%2BnQPj2VGR6IDxqAAqAo3t9AD6tiD%2Fo33T5hxWjmmXRSkAfvy%2B%2B5hWrJGQf3I5kWUC36mb8VLxvgbP0YRqEDut%2BQjOsbzcZ8wlMT4QMtlhbFiq1KcbRUDRcAB%2FrLMM%2FNp74GOqUBvS6u6UW09H3bGU4ubAvqNtgL7KWLnW4K4IDvDUdguyIlfVnUdGI3Du3TJZB5IbzcoZHFRNjo%2BjkyGZhnWMigBRSe6maiAqQ6MHMPlYiygiIkxB5Z2EsxhK%2FdJ7uf2Qxjk0w%2FVhcyVeDY2phE5HWuPYRVyvjhwr6N85KJ20gxNqU%2B6H5%2BBCsDdW0uCnD%2BXS4v7DFBKzyaAC%2Baq9%2F3%2FEMjdA5QwGPM&X-Amz-Signature=10f19fee78d40a4be4260777f55176821ba36a263f2c87b26f84ad3c10cdf387&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH35VYPC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMEbVsZ5HhiFzCMyDNoXNVl8HdyDZzzSLBC5Gy4VCw7AiEA4zMZQDmia9u5qV%2B%2BYh%2FEtzrJC%2BOFXif9aybv6um2MDAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMlxlwQs46GLUiRo3CrcAytrTeuYLKsBlHXS9JpQpPTbuOL0cWThN0Pv5H2j1NbIjwejmFQ6uyPEfhF4cVOhZ1kJgFU4U%2BeeM0y%2FYvILcKJxOnr9GOCD0dkqMws8GuUMe0cuSvQHNR%2FUFoBnDBOl5ZShk8M9d%2FPS4rhtA8MEykRtrxN23vvAk9laVGjNHSH1UPE11hGv5VU9VQ0lE94rydY6R2x%2FcEHkFlO39rMZEl1tiJAnJDbA6Hd58A8eqVc43wImS4p14gpfesfgoLJT3kMp7DNbMozcwSXk%2F0iwpW8nt1K8vdYUwr%2F8vkiDTesQVYGO93Do6Dwho5mZemVG0GLIlJhneYasc%2FkBrSt6O2j9VP0OTTd7uOi48EUAug0K2PCgH8rCD0EWAnWKQWcPe8F2qNek%2B3o1tXdl3FcOby0NpGAhbAC6pYKQqSvGYAN21L62vF80V5cUlUFgiRpQ1sidFtfxYjZZc8nTmh8HwKL%2B9AGyGeJ%2FBUTm%2BocvbrN%2B11g5eqsUPOjYZ7F2g3NpQ%2BnQPj2VGR6IDxqAAqAo3t9AD6tiD%2Fo33T5hxWjmmXRSkAfvy%2B%2B5hWrJGQf3I5kWUC36mb8VLxvgbP0YRqEDut%2BQjOsbzcZ8wlMT4QMtlhbFiq1KcbRUDRcAB%2FrLMM%2FNp74GOqUBvS6u6UW09H3bGU4ubAvqNtgL7KWLnW4K4IDvDUdguyIlfVnUdGI3Du3TJZB5IbzcoZHFRNjo%2BjkyGZhnWMigBRSe6maiAqQ6MHMPlYiygiIkxB5Z2EsxhK%2FdJ7uf2Qxjk0w%2FVhcyVeDY2phE5HWuPYRVyvjhwr6N85KJ20gxNqU%2B6H5%2BBCsDdW0uCnD%2BXS4v7DFBKzyaAC%2Baq9%2F3%2FEMjdA5QwGPM&X-Amz-Signature=6eccd93cc2d4fd0a6485b4dbfd5893cf4f49fa1c50c786e4f2efeaeca4a6983e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH35VYPC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMEbVsZ5HhiFzCMyDNoXNVl8HdyDZzzSLBC5Gy4VCw7AiEA4zMZQDmia9u5qV%2B%2BYh%2FEtzrJC%2BOFXif9aybv6um2MDAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMlxlwQs46GLUiRo3CrcAytrTeuYLKsBlHXS9JpQpPTbuOL0cWThN0Pv5H2j1NbIjwejmFQ6uyPEfhF4cVOhZ1kJgFU4U%2BeeM0y%2FYvILcKJxOnr9GOCD0dkqMws8GuUMe0cuSvQHNR%2FUFoBnDBOl5ZShk8M9d%2FPS4rhtA8MEykRtrxN23vvAk9laVGjNHSH1UPE11hGv5VU9VQ0lE94rydY6R2x%2FcEHkFlO39rMZEl1tiJAnJDbA6Hd58A8eqVc43wImS4p14gpfesfgoLJT3kMp7DNbMozcwSXk%2F0iwpW8nt1K8vdYUwr%2F8vkiDTesQVYGO93Do6Dwho5mZemVG0GLIlJhneYasc%2FkBrSt6O2j9VP0OTTd7uOi48EUAug0K2PCgH8rCD0EWAnWKQWcPe8F2qNek%2B3o1tXdl3FcOby0NpGAhbAC6pYKQqSvGYAN21L62vF80V5cUlUFgiRpQ1sidFtfxYjZZc8nTmh8HwKL%2B9AGyGeJ%2FBUTm%2BocvbrN%2B11g5eqsUPOjYZ7F2g3NpQ%2BnQPj2VGR6IDxqAAqAo3t9AD6tiD%2Fo33T5hxWjmmXRSkAfvy%2B%2B5hWrJGQf3I5kWUC36mb8VLxvgbP0YRqEDut%2BQjOsbzcZ8wlMT4QMtlhbFiq1KcbRUDRcAB%2FrLMM%2FNp74GOqUBvS6u6UW09H3bGU4ubAvqNtgL7KWLnW4K4IDvDUdguyIlfVnUdGI3Du3TJZB5IbzcoZHFRNjo%2BjkyGZhnWMigBRSe6maiAqQ6MHMPlYiygiIkxB5Z2EsxhK%2FdJ7uf2Qxjk0w%2FVhcyVeDY2phE5HWuPYRVyvjhwr6N85KJ20gxNqU%2B6H5%2BBCsDdW0uCnD%2BXS4v7DFBKzyaAC%2Baq9%2F3%2FEMjdA5QwGPM&X-Amz-Signature=986979ba3e3bdb98263c83db706ae7338facd444aa5ad00dd550d00a855b7046&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
