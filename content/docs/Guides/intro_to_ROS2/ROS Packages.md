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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPFH6KU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBvojRcW98SP12MIf8sIvX1FkFudf8qGBqhAWrbM4XgIhAPc8o2nz1dqyny5BDpdCDhf%2B61mocRd7qLbck%2BU2AU9pKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHJq8EakDIGlQIxlkq3AOkCoqjEUCbNay1APeC6nIRAuUYBa02xmRKT7vShd%2FzW0xRSN1wVf5R0kt%2B2hfI24dwbUgrqfsFE9ySLozkYKqr0FfLGOVEZoduUcD%2F81%2BpKGLgsD8Mnqe%2FQHyr%2FSie27qq8JDPxYGyDFOAKVDnsikxOtPhgbFhI%2FDCqTl0GWJJb4KzJWqmhiCRBUTbiirFiZuB88NjPz4h8V61LXD74fsO8zLU%2FV2TLPvrFR6YvqQipFEzQgoDupSeTa5s9bIk9mnJh2xvwzq%2BuRBXJYQAgC3wqqp3uDfeUM3tvWlJ9syRztzFOxnjKRst%2FDUacZGon%2BBs23HgstGtscWz4yh3OnKjHY9OZZaQLLpfgm8QvXcD8exia4MpxQPsyRUvRLV7gl0NcTCAhG%2BnTEe%2FmhLey2BdC5IPrmJXqys5vXSN93M2UF8y4JdCSxRPBjgvDv1PYhaJguLBjlcDBaVM61qrvAZVS5%2F9fXtZ%2BsQp98etEP7cAcPPAue1BJzy%2BCpRHkOsfmU8JmLHziLuAzpQu5JUxKrpoqA7M9wakORie%2FSMFhO9Rc3skFR6HtG0O7t4P7jlax7n4Mzk%2BNGYYrV6uQWa0vk41VFB3JBdOA6i3YE11siBSitjBOW%2Fl6NPiPBmuDDZ5eTABjqkAex%2FRyaGgU0WsGTSGcp%2FkIn8G98GMQG5Q5db5nVGL3KHZ3jQmDitFevF15uoupo39NFGZMebrVYlb%2Bms2c7gTFa5Jz8kbwm5zb%2FIHlyJC7PAShyqbKNGHHfVCSgxNUgnPwXoriDvlMYVSaT%2Ba4e6FVhKoJa388Zk585pPNiYjCGfgQz%2B8kK9pasrdCEsuIyizzA9b6r3uqRTlsxMHpzJK%2BS0uAuQ&X-Amz-Signature=2b6bc649e65335d0cda506fdd237284df288c4e6d38f2c2e9481f906f892e01f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPFH6KU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBvojRcW98SP12MIf8sIvX1FkFudf8qGBqhAWrbM4XgIhAPc8o2nz1dqyny5BDpdCDhf%2B61mocRd7qLbck%2BU2AU9pKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHJq8EakDIGlQIxlkq3AOkCoqjEUCbNay1APeC6nIRAuUYBa02xmRKT7vShd%2FzW0xRSN1wVf5R0kt%2B2hfI24dwbUgrqfsFE9ySLozkYKqr0FfLGOVEZoduUcD%2F81%2BpKGLgsD8Mnqe%2FQHyr%2FSie27qq8JDPxYGyDFOAKVDnsikxOtPhgbFhI%2FDCqTl0GWJJb4KzJWqmhiCRBUTbiirFiZuB88NjPz4h8V61LXD74fsO8zLU%2FV2TLPvrFR6YvqQipFEzQgoDupSeTa5s9bIk9mnJh2xvwzq%2BuRBXJYQAgC3wqqp3uDfeUM3tvWlJ9syRztzFOxnjKRst%2FDUacZGon%2BBs23HgstGtscWz4yh3OnKjHY9OZZaQLLpfgm8QvXcD8exia4MpxQPsyRUvRLV7gl0NcTCAhG%2BnTEe%2FmhLey2BdC5IPrmJXqys5vXSN93M2UF8y4JdCSxRPBjgvDv1PYhaJguLBjlcDBaVM61qrvAZVS5%2F9fXtZ%2BsQp98etEP7cAcPPAue1BJzy%2BCpRHkOsfmU8JmLHziLuAzpQu5JUxKrpoqA7M9wakORie%2FSMFhO9Rc3skFR6HtG0O7t4P7jlax7n4Mzk%2BNGYYrV6uQWa0vk41VFB3JBdOA6i3YE11siBSitjBOW%2Fl6NPiPBmuDDZ5eTABjqkAex%2FRyaGgU0WsGTSGcp%2FkIn8G98GMQG5Q5db5nVGL3KHZ3jQmDitFevF15uoupo39NFGZMebrVYlb%2Bms2c7gTFa5Jz8kbwm5zb%2FIHlyJC7PAShyqbKNGHHfVCSgxNUgnPwXoriDvlMYVSaT%2Ba4e6FVhKoJa388Zk585pPNiYjCGfgQz%2B8kK9pasrdCEsuIyizzA9b6r3uqRTlsxMHpzJK%2BS0uAuQ&X-Amz-Signature=667e23a7dd45daf885cfec660a921e94eb0a8574732608b95ea3ecb86dcee02e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPFH6KU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBvojRcW98SP12MIf8sIvX1FkFudf8qGBqhAWrbM4XgIhAPc8o2nz1dqyny5BDpdCDhf%2B61mocRd7qLbck%2BU2AU9pKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHJq8EakDIGlQIxlkq3AOkCoqjEUCbNay1APeC6nIRAuUYBa02xmRKT7vShd%2FzW0xRSN1wVf5R0kt%2B2hfI24dwbUgrqfsFE9ySLozkYKqr0FfLGOVEZoduUcD%2F81%2BpKGLgsD8Mnqe%2FQHyr%2FSie27qq8JDPxYGyDFOAKVDnsikxOtPhgbFhI%2FDCqTl0GWJJb4KzJWqmhiCRBUTbiirFiZuB88NjPz4h8V61LXD74fsO8zLU%2FV2TLPvrFR6YvqQipFEzQgoDupSeTa5s9bIk9mnJh2xvwzq%2BuRBXJYQAgC3wqqp3uDfeUM3tvWlJ9syRztzFOxnjKRst%2FDUacZGon%2BBs23HgstGtscWz4yh3OnKjHY9OZZaQLLpfgm8QvXcD8exia4MpxQPsyRUvRLV7gl0NcTCAhG%2BnTEe%2FmhLey2BdC5IPrmJXqys5vXSN93M2UF8y4JdCSxRPBjgvDv1PYhaJguLBjlcDBaVM61qrvAZVS5%2F9fXtZ%2BsQp98etEP7cAcPPAue1BJzy%2BCpRHkOsfmU8JmLHziLuAzpQu5JUxKrpoqA7M9wakORie%2FSMFhO9Rc3skFR6HtG0O7t4P7jlax7n4Mzk%2BNGYYrV6uQWa0vk41VFB3JBdOA6i3YE11siBSitjBOW%2Fl6NPiPBmuDDZ5eTABjqkAex%2FRyaGgU0WsGTSGcp%2FkIn8G98GMQG5Q5db5nVGL3KHZ3jQmDitFevF15uoupo39NFGZMebrVYlb%2Bms2c7gTFa5Jz8kbwm5zb%2FIHlyJC7PAShyqbKNGHHfVCSgxNUgnPwXoriDvlMYVSaT%2Ba4e6FVhKoJa388Zk585pPNiYjCGfgQz%2B8kK9pasrdCEsuIyizzA9b6r3uqRTlsxMHpzJK%2BS0uAuQ&X-Amz-Signature=727adb56f3dca41c073512414b41dd83fd5a43a9a637a58a5ecdfa6838fbfc99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPFH6KU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBvojRcW98SP12MIf8sIvX1FkFudf8qGBqhAWrbM4XgIhAPc8o2nz1dqyny5BDpdCDhf%2B61mocRd7qLbck%2BU2AU9pKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHJq8EakDIGlQIxlkq3AOkCoqjEUCbNay1APeC6nIRAuUYBa02xmRKT7vShd%2FzW0xRSN1wVf5R0kt%2B2hfI24dwbUgrqfsFE9ySLozkYKqr0FfLGOVEZoduUcD%2F81%2BpKGLgsD8Mnqe%2FQHyr%2FSie27qq8JDPxYGyDFOAKVDnsikxOtPhgbFhI%2FDCqTl0GWJJb4KzJWqmhiCRBUTbiirFiZuB88NjPz4h8V61LXD74fsO8zLU%2FV2TLPvrFR6YvqQipFEzQgoDupSeTa5s9bIk9mnJh2xvwzq%2BuRBXJYQAgC3wqqp3uDfeUM3tvWlJ9syRztzFOxnjKRst%2FDUacZGon%2BBs23HgstGtscWz4yh3OnKjHY9OZZaQLLpfgm8QvXcD8exia4MpxQPsyRUvRLV7gl0NcTCAhG%2BnTEe%2FmhLey2BdC5IPrmJXqys5vXSN93M2UF8y4JdCSxRPBjgvDv1PYhaJguLBjlcDBaVM61qrvAZVS5%2F9fXtZ%2BsQp98etEP7cAcPPAue1BJzy%2BCpRHkOsfmU8JmLHziLuAzpQu5JUxKrpoqA7M9wakORie%2FSMFhO9Rc3skFR6HtG0O7t4P7jlax7n4Mzk%2BNGYYrV6uQWa0vk41VFB3JBdOA6i3YE11siBSitjBOW%2Fl6NPiPBmuDDZ5eTABjqkAex%2FRyaGgU0WsGTSGcp%2FkIn8G98GMQG5Q5db5nVGL3KHZ3jQmDitFevF15uoupo39NFGZMebrVYlb%2Bms2c7gTFa5Jz8kbwm5zb%2FIHlyJC7PAShyqbKNGHHfVCSgxNUgnPwXoriDvlMYVSaT%2Ba4e6FVhKoJa388Zk585pPNiYjCGfgQz%2B8kK9pasrdCEsuIyizzA9b6r3uqRTlsxMHpzJK%2BS0uAuQ&X-Amz-Signature=0862e6b2223de6523b26e4b92518bf49d260bfa3c97ab78b08c90b7e4d0e7e91&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPFH6KU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBvojRcW98SP12MIf8sIvX1FkFudf8qGBqhAWrbM4XgIhAPc8o2nz1dqyny5BDpdCDhf%2B61mocRd7qLbck%2BU2AU9pKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHJq8EakDIGlQIxlkq3AOkCoqjEUCbNay1APeC6nIRAuUYBa02xmRKT7vShd%2FzW0xRSN1wVf5R0kt%2B2hfI24dwbUgrqfsFE9ySLozkYKqr0FfLGOVEZoduUcD%2F81%2BpKGLgsD8Mnqe%2FQHyr%2FSie27qq8JDPxYGyDFOAKVDnsikxOtPhgbFhI%2FDCqTl0GWJJb4KzJWqmhiCRBUTbiirFiZuB88NjPz4h8V61LXD74fsO8zLU%2FV2TLPvrFR6YvqQipFEzQgoDupSeTa5s9bIk9mnJh2xvwzq%2BuRBXJYQAgC3wqqp3uDfeUM3tvWlJ9syRztzFOxnjKRst%2FDUacZGon%2BBs23HgstGtscWz4yh3OnKjHY9OZZaQLLpfgm8QvXcD8exia4MpxQPsyRUvRLV7gl0NcTCAhG%2BnTEe%2FmhLey2BdC5IPrmJXqys5vXSN93M2UF8y4JdCSxRPBjgvDv1PYhaJguLBjlcDBaVM61qrvAZVS5%2F9fXtZ%2BsQp98etEP7cAcPPAue1BJzy%2BCpRHkOsfmU8JmLHziLuAzpQu5JUxKrpoqA7M9wakORie%2FSMFhO9Rc3skFR6HtG0O7t4P7jlax7n4Mzk%2BNGYYrV6uQWa0vk41VFB3JBdOA6i3YE11siBSitjBOW%2Fl6NPiPBmuDDZ5eTABjqkAex%2FRyaGgU0WsGTSGcp%2FkIn8G98GMQG5Q5db5nVGL3KHZ3jQmDitFevF15uoupo39NFGZMebrVYlb%2Bms2c7gTFa5Jz8kbwm5zb%2FIHlyJC7PAShyqbKNGHHfVCSgxNUgnPwXoriDvlMYVSaT%2Ba4e6FVhKoJa388Zk585pPNiYjCGfgQz%2B8kK9pasrdCEsuIyizzA9b6r3uqRTlsxMHpzJK%2BS0uAuQ&X-Amz-Signature=cf4f248763bf37f51f34e6b7cc6aa6e8e9154f8cd1754673d761846f9d06dd30&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPFH6KU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBvojRcW98SP12MIf8sIvX1FkFudf8qGBqhAWrbM4XgIhAPc8o2nz1dqyny5BDpdCDhf%2B61mocRd7qLbck%2BU2AU9pKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHJq8EakDIGlQIxlkq3AOkCoqjEUCbNay1APeC6nIRAuUYBa02xmRKT7vShd%2FzW0xRSN1wVf5R0kt%2B2hfI24dwbUgrqfsFE9ySLozkYKqr0FfLGOVEZoduUcD%2F81%2BpKGLgsD8Mnqe%2FQHyr%2FSie27qq8JDPxYGyDFOAKVDnsikxOtPhgbFhI%2FDCqTl0GWJJb4KzJWqmhiCRBUTbiirFiZuB88NjPz4h8V61LXD74fsO8zLU%2FV2TLPvrFR6YvqQipFEzQgoDupSeTa5s9bIk9mnJh2xvwzq%2BuRBXJYQAgC3wqqp3uDfeUM3tvWlJ9syRztzFOxnjKRst%2FDUacZGon%2BBs23HgstGtscWz4yh3OnKjHY9OZZaQLLpfgm8QvXcD8exia4MpxQPsyRUvRLV7gl0NcTCAhG%2BnTEe%2FmhLey2BdC5IPrmJXqys5vXSN93M2UF8y4JdCSxRPBjgvDv1PYhaJguLBjlcDBaVM61qrvAZVS5%2F9fXtZ%2BsQp98etEP7cAcPPAue1BJzy%2BCpRHkOsfmU8JmLHziLuAzpQu5JUxKrpoqA7M9wakORie%2FSMFhO9Rc3skFR6HtG0O7t4P7jlax7n4Mzk%2BNGYYrV6uQWa0vk41VFB3JBdOA6i3YE11siBSitjBOW%2Fl6NPiPBmuDDZ5eTABjqkAex%2FRyaGgU0WsGTSGcp%2FkIn8G98GMQG5Q5db5nVGL3KHZ3jQmDitFevF15uoupo39NFGZMebrVYlb%2Bms2c7gTFa5Jz8kbwm5zb%2FIHlyJC7PAShyqbKNGHHfVCSgxNUgnPwXoriDvlMYVSaT%2Ba4e6FVhKoJa388Zk585pPNiYjCGfgQz%2B8kK9pasrdCEsuIyizzA9b6r3uqRTlsxMHpzJK%2BS0uAuQ&X-Amz-Signature=88f1df66a29ad1552240ef6e81a638f437f553cb24646e34a0c6e3bacd990a44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPFH6KU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOBvojRcW98SP12MIf8sIvX1FkFudf8qGBqhAWrbM4XgIhAPc8o2nz1dqyny5BDpdCDhf%2B61mocRd7qLbck%2BU2AU9pKv8DCDcQABoMNjM3NDIzMTgzODA1IgzHJq8EakDIGlQIxlkq3AOkCoqjEUCbNay1APeC6nIRAuUYBa02xmRKT7vShd%2FzW0xRSN1wVf5R0kt%2B2hfI24dwbUgrqfsFE9ySLozkYKqr0FfLGOVEZoduUcD%2F81%2BpKGLgsD8Mnqe%2FQHyr%2FSie27qq8JDPxYGyDFOAKVDnsikxOtPhgbFhI%2FDCqTl0GWJJb4KzJWqmhiCRBUTbiirFiZuB88NjPz4h8V61LXD74fsO8zLU%2FV2TLPvrFR6YvqQipFEzQgoDupSeTa5s9bIk9mnJh2xvwzq%2BuRBXJYQAgC3wqqp3uDfeUM3tvWlJ9syRztzFOxnjKRst%2FDUacZGon%2BBs23HgstGtscWz4yh3OnKjHY9OZZaQLLpfgm8QvXcD8exia4MpxQPsyRUvRLV7gl0NcTCAhG%2BnTEe%2FmhLey2BdC5IPrmJXqys5vXSN93M2UF8y4JdCSxRPBjgvDv1PYhaJguLBjlcDBaVM61qrvAZVS5%2F9fXtZ%2BsQp98etEP7cAcPPAue1BJzy%2BCpRHkOsfmU8JmLHziLuAzpQu5JUxKrpoqA7M9wakORie%2FSMFhO9Rc3skFR6HtG0O7t4P7jlax7n4Mzk%2BNGYYrV6uQWa0vk41VFB3JBdOA6i3YE11siBSitjBOW%2Fl6NPiPBmuDDZ5eTABjqkAex%2FRyaGgU0WsGTSGcp%2FkIn8G98GMQG5Q5db5nVGL3KHZ3jQmDitFevF15uoupo39NFGZMebrVYlb%2Bms2c7gTFa5Jz8kbwm5zb%2FIHlyJC7PAShyqbKNGHHfVCSgxNUgnPwXoriDvlMYVSaT%2Ba4e6FVhKoJa388Zk585pPNiYjCGfgQz%2B8kK9pasrdCEsuIyizzA9b6r3uqRTlsxMHpzJK%2BS0uAuQ&X-Amz-Signature=97902318d09c7d361cf679900b553b54ee421d235794fe27c9b9e3e03596a337&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
