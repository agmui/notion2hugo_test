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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLIAENB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHMWOlno%2B42Lw4oaH1qIWKhI%2FEKrvbcJ5tcp0Z0%2FW775AiEAinnJlnCbBi8akkPD6UAmL6QU8Qj882JWG4XUWwVo6Y8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmt9gPwj2py%2Fq7YfSrcA%2B2%2B%2FxP%2B7oCzOJfKn%2BID5sQ8TZiiJjKsNBdE%2B6ClVZgK7RF7TVdWIfCLeoWDiBsvMN1sNuSF0EhniyabVR7vzIYmrTuQ1XPFTtZ04yi28LwlsLtwwKrw0SXhly5EBdvPQWlikCRdJyZ4ESUTKhIdXJzzxXWlDPamj%2BjsXG4%2F8WBN64bobY9JxQtbE3AGZGxBTxMqzR2n2eaMgAr0hrycAoy875D5cTWJUgvTNAzyT8ihr%2Fw4BlvUXpxhOMrfgbJufSw5IZpP1B62CRj0kXUA%2BmwCem5fMZyRyyiSQ%2BVZiGpG1W1vy1y6NAMWw0YDkVvJw08%2Bva3BmlS4rS6GvgH8salucQKgSZ02RMtZumSq5CyszVwQIIrAD%2FI1l%2F2W8Ggox1%2FpeX%2Blqe2%2BPXFnGffUVsApH5XjECGXjItKcxeGKMaAEFR8dBH1VBJZf0AqPcMNdwrLE53loJTRiEEL%2Bxm7B2t4TafQ1mf8HpSRxXB4Z2ktMs21p7iLA6mjCaDvVkBVFcXHqQaQsYESkNPKJoNgfXw2sa%2Ft28oTWDHVFnBFqpZ%2ByZKlWaad%2FEmIi3jiNXqk4LhK62P6x2r%2Bp754u585I00EwRzu0Ljj%2FWZJTCCm9sgIS6veIirl5zgEZhvfMIPwo78GOqUBDVT5lLWsjXIH8naf2iB7S1Dqnhbyh9NIALINeGGpSXLQbgK6I7sbpNVojbu6Fztf6%2Fl9M4248n2zidXjXW0wbStrR7%2B%2BnIHo7qXifBadCilXTDxCZ8VAo3aYKxp1oAdRUXMo%2FgP3vU7Nxrk4Fg9PtCLurlLMF1HfTv7AHb1so%2FHyaf0%2Bj2vLzKUsVvfFJ2fnWtC8SAnmc%2B4mg0iBctuRboKb2SEu&X-Amz-Signature=4e7670b0a47e3541552c0beade4a787139ed218b8d2c545fe328c49dc8ded584&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLIAENB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHMWOlno%2B42Lw4oaH1qIWKhI%2FEKrvbcJ5tcp0Z0%2FW775AiEAinnJlnCbBi8akkPD6UAmL6QU8Qj882JWG4XUWwVo6Y8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmt9gPwj2py%2Fq7YfSrcA%2B2%2B%2FxP%2B7oCzOJfKn%2BID5sQ8TZiiJjKsNBdE%2B6ClVZgK7RF7TVdWIfCLeoWDiBsvMN1sNuSF0EhniyabVR7vzIYmrTuQ1XPFTtZ04yi28LwlsLtwwKrw0SXhly5EBdvPQWlikCRdJyZ4ESUTKhIdXJzzxXWlDPamj%2BjsXG4%2F8WBN64bobY9JxQtbE3AGZGxBTxMqzR2n2eaMgAr0hrycAoy875D5cTWJUgvTNAzyT8ihr%2Fw4BlvUXpxhOMrfgbJufSw5IZpP1B62CRj0kXUA%2BmwCem5fMZyRyyiSQ%2BVZiGpG1W1vy1y6NAMWw0YDkVvJw08%2Bva3BmlS4rS6GvgH8salucQKgSZ02RMtZumSq5CyszVwQIIrAD%2FI1l%2F2W8Ggox1%2FpeX%2Blqe2%2BPXFnGffUVsApH5XjECGXjItKcxeGKMaAEFR8dBH1VBJZf0AqPcMNdwrLE53loJTRiEEL%2Bxm7B2t4TafQ1mf8HpSRxXB4Z2ktMs21p7iLA6mjCaDvVkBVFcXHqQaQsYESkNPKJoNgfXw2sa%2Ft28oTWDHVFnBFqpZ%2ByZKlWaad%2FEmIi3jiNXqk4LhK62P6x2r%2Bp754u585I00EwRzu0Ljj%2FWZJTCCm9sgIS6veIirl5zgEZhvfMIPwo78GOqUBDVT5lLWsjXIH8naf2iB7S1Dqnhbyh9NIALINeGGpSXLQbgK6I7sbpNVojbu6Fztf6%2Fl9M4248n2zidXjXW0wbStrR7%2B%2BnIHo7qXifBadCilXTDxCZ8VAo3aYKxp1oAdRUXMo%2FgP3vU7Nxrk4Fg9PtCLurlLMF1HfTv7AHb1so%2FHyaf0%2Bj2vLzKUsVvfFJ2fnWtC8SAnmc%2B4mg0iBctuRboKb2SEu&X-Amz-Signature=6336de9245e81d6939ae76539442a8379a69aa07afe519ca7fead4f87403d8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLIAENB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHMWOlno%2B42Lw4oaH1qIWKhI%2FEKrvbcJ5tcp0Z0%2FW775AiEAinnJlnCbBi8akkPD6UAmL6QU8Qj882JWG4XUWwVo6Y8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmt9gPwj2py%2Fq7YfSrcA%2B2%2B%2FxP%2B7oCzOJfKn%2BID5sQ8TZiiJjKsNBdE%2B6ClVZgK7RF7TVdWIfCLeoWDiBsvMN1sNuSF0EhniyabVR7vzIYmrTuQ1XPFTtZ04yi28LwlsLtwwKrw0SXhly5EBdvPQWlikCRdJyZ4ESUTKhIdXJzzxXWlDPamj%2BjsXG4%2F8WBN64bobY9JxQtbE3AGZGxBTxMqzR2n2eaMgAr0hrycAoy875D5cTWJUgvTNAzyT8ihr%2Fw4BlvUXpxhOMrfgbJufSw5IZpP1B62CRj0kXUA%2BmwCem5fMZyRyyiSQ%2BVZiGpG1W1vy1y6NAMWw0YDkVvJw08%2Bva3BmlS4rS6GvgH8salucQKgSZ02RMtZumSq5CyszVwQIIrAD%2FI1l%2F2W8Ggox1%2FpeX%2Blqe2%2BPXFnGffUVsApH5XjECGXjItKcxeGKMaAEFR8dBH1VBJZf0AqPcMNdwrLE53loJTRiEEL%2Bxm7B2t4TafQ1mf8HpSRxXB4Z2ktMs21p7iLA6mjCaDvVkBVFcXHqQaQsYESkNPKJoNgfXw2sa%2Ft28oTWDHVFnBFqpZ%2ByZKlWaad%2FEmIi3jiNXqk4LhK62P6x2r%2Bp754u585I00EwRzu0Ljj%2FWZJTCCm9sgIS6veIirl5zgEZhvfMIPwo78GOqUBDVT5lLWsjXIH8naf2iB7S1Dqnhbyh9NIALINeGGpSXLQbgK6I7sbpNVojbu6Fztf6%2Fl9M4248n2zidXjXW0wbStrR7%2B%2BnIHo7qXifBadCilXTDxCZ8VAo3aYKxp1oAdRUXMo%2FgP3vU7Nxrk4Fg9PtCLurlLMF1HfTv7AHb1so%2FHyaf0%2Bj2vLzKUsVvfFJ2fnWtC8SAnmc%2B4mg0iBctuRboKb2SEu&X-Amz-Signature=4f151b84efd0ad8d38fa6d1752f9411bab71047c2634da3bc43b4b2367a1248b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLIAENB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHMWOlno%2B42Lw4oaH1qIWKhI%2FEKrvbcJ5tcp0Z0%2FW775AiEAinnJlnCbBi8akkPD6UAmL6QU8Qj882JWG4XUWwVo6Y8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmt9gPwj2py%2Fq7YfSrcA%2B2%2B%2FxP%2B7oCzOJfKn%2BID5sQ8TZiiJjKsNBdE%2B6ClVZgK7RF7TVdWIfCLeoWDiBsvMN1sNuSF0EhniyabVR7vzIYmrTuQ1XPFTtZ04yi28LwlsLtwwKrw0SXhly5EBdvPQWlikCRdJyZ4ESUTKhIdXJzzxXWlDPamj%2BjsXG4%2F8WBN64bobY9JxQtbE3AGZGxBTxMqzR2n2eaMgAr0hrycAoy875D5cTWJUgvTNAzyT8ihr%2Fw4BlvUXpxhOMrfgbJufSw5IZpP1B62CRj0kXUA%2BmwCem5fMZyRyyiSQ%2BVZiGpG1W1vy1y6NAMWw0YDkVvJw08%2Bva3BmlS4rS6GvgH8salucQKgSZ02RMtZumSq5CyszVwQIIrAD%2FI1l%2F2W8Ggox1%2FpeX%2Blqe2%2BPXFnGffUVsApH5XjECGXjItKcxeGKMaAEFR8dBH1VBJZf0AqPcMNdwrLE53loJTRiEEL%2Bxm7B2t4TafQ1mf8HpSRxXB4Z2ktMs21p7iLA6mjCaDvVkBVFcXHqQaQsYESkNPKJoNgfXw2sa%2Ft28oTWDHVFnBFqpZ%2ByZKlWaad%2FEmIi3jiNXqk4LhK62P6x2r%2Bp754u585I00EwRzu0Ljj%2FWZJTCCm9sgIS6veIirl5zgEZhvfMIPwo78GOqUBDVT5lLWsjXIH8naf2iB7S1Dqnhbyh9NIALINeGGpSXLQbgK6I7sbpNVojbu6Fztf6%2Fl9M4248n2zidXjXW0wbStrR7%2B%2BnIHo7qXifBadCilXTDxCZ8VAo3aYKxp1oAdRUXMo%2FgP3vU7Nxrk4Fg9PtCLurlLMF1HfTv7AHb1so%2FHyaf0%2Bj2vLzKUsVvfFJ2fnWtC8SAnmc%2B4mg0iBctuRboKb2SEu&X-Amz-Signature=a06f9f60fa7d615f5315105da76c29d121994dbd0a75ea6e282f1c98f531f913&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLIAENB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHMWOlno%2B42Lw4oaH1qIWKhI%2FEKrvbcJ5tcp0Z0%2FW775AiEAinnJlnCbBi8akkPD6UAmL6QU8Qj882JWG4XUWwVo6Y8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmt9gPwj2py%2Fq7YfSrcA%2B2%2B%2FxP%2B7oCzOJfKn%2BID5sQ8TZiiJjKsNBdE%2B6ClVZgK7RF7TVdWIfCLeoWDiBsvMN1sNuSF0EhniyabVR7vzIYmrTuQ1XPFTtZ04yi28LwlsLtwwKrw0SXhly5EBdvPQWlikCRdJyZ4ESUTKhIdXJzzxXWlDPamj%2BjsXG4%2F8WBN64bobY9JxQtbE3AGZGxBTxMqzR2n2eaMgAr0hrycAoy875D5cTWJUgvTNAzyT8ihr%2Fw4BlvUXpxhOMrfgbJufSw5IZpP1B62CRj0kXUA%2BmwCem5fMZyRyyiSQ%2BVZiGpG1W1vy1y6NAMWw0YDkVvJw08%2Bva3BmlS4rS6GvgH8salucQKgSZ02RMtZumSq5CyszVwQIIrAD%2FI1l%2F2W8Ggox1%2FpeX%2Blqe2%2BPXFnGffUVsApH5XjECGXjItKcxeGKMaAEFR8dBH1VBJZf0AqPcMNdwrLE53loJTRiEEL%2Bxm7B2t4TafQ1mf8HpSRxXB4Z2ktMs21p7iLA6mjCaDvVkBVFcXHqQaQsYESkNPKJoNgfXw2sa%2Ft28oTWDHVFnBFqpZ%2ByZKlWaad%2FEmIi3jiNXqk4LhK62P6x2r%2Bp754u585I00EwRzu0Ljj%2FWZJTCCm9sgIS6veIirl5zgEZhvfMIPwo78GOqUBDVT5lLWsjXIH8naf2iB7S1Dqnhbyh9NIALINeGGpSXLQbgK6I7sbpNVojbu6Fztf6%2Fl9M4248n2zidXjXW0wbStrR7%2B%2BnIHo7qXifBadCilXTDxCZ8VAo3aYKxp1oAdRUXMo%2FgP3vU7Nxrk4Fg9PtCLurlLMF1HfTv7AHb1so%2FHyaf0%2Bj2vLzKUsVvfFJ2fnWtC8SAnmc%2B4mg0iBctuRboKb2SEu&X-Amz-Signature=e50ef89d4b28b9686c78d24bf4bf3df893e81ec97b543c75323528cfc1870013&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLIAENB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHMWOlno%2B42Lw4oaH1qIWKhI%2FEKrvbcJ5tcp0Z0%2FW775AiEAinnJlnCbBi8akkPD6UAmL6QU8Qj882JWG4XUWwVo6Y8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmt9gPwj2py%2Fq7YfSrcA%2B2%2B%2FxP%2B7oCzOJfKn%2BID5sQ8TZiiJjKsNBdE%2B6ClVZgK7RF7TVdWIfCLeoWDiBsvMN1sNuSF0EhniyabVR7vzIYmrTuQ1XPFTtZ04yi28LwlsLtwwKrw0SXhly5EBdvPQWlikCRdJyZ4ESUTKhIdXJzzxXWlDPamj%2BjsXG4%2F8WBN64bobY9JxQtbE3AGZGxBTxMqzR2n2eaMgAr0hrycAoy875D5cTWJUgvTNAzyT8ihr%2Fw4BlvUXpxhOMrfgbJufSw5IZpP1B62CRj0kXUA%2BmwCem5fMZyRyyiSQ%2BVZiGpG1W1vy1y6NAMWw0YDkVvJw08%2Bva3BmlS4rS6GvgH8salucQKgSZ02RMtZumSq5CyszVwQIIrAD%2FI1l%2F2W8Ggox1%2FpeX%2Blqe2%2BPXFnGffUVsApH5XjECGXjItKcxeGKMaAEFR8dBH1VBJZf0AqPcMNdwrLE53loJTRiEEL%2Bxm7B2t4TafQ1mf8HpSRxXB4Z2ktMs21p7iLA6mjCaDvVkBVFcXHqQaQsYESkNPKJoNgfXw2sa%2Ft28oTWDHVFnBFqpZ%2ByZKlWaad%2FEmIi3jiNXqk4LhK62P6x2r%2Bp754u585I00EwRzu0Ljj%2FWZJTCCm9sgIS6veIirl5zgEZhvfMIPwo78GOqUBDVT5lLWsjXIH8naf2iB7S1Dqnhbyh9NIALINeGGpSXLQbgK6I7sbpNVojbu6Fztf6%2Fl9M4248n2zidXjXW0wbStrR7%2B%2BnIHo7qXifBadCilXTDxCZ8VAo3aYKxp1oAdRUXMo%2FgP3vU7Nxrk4Fg9PtCLurlLMF1HfTv7AHb1so%2FHyaf0%2Bj2vLzKUsVvfFJ2fnWtC8SAnmc%2B4mg0iBctuRboKb2SEu&X-Amz-Signature=040217184a908578de8a1423677940701ca8e98585be4d2c6154124e2b4f26a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLIAENB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIHMWOlno%2B42Lw4oaH1qIWKhI%2FEKrvbcJ5tcp0Z0%2FW775AiEAinnJlnCbBi8akkPD6UAmL6QU8Qj882JWG4XUWwVo6Y8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmt9gPwj2py%2Fq7YfSrcA%2B2%2B%2FxP%2B7oCzOJfKn%2BID5sQ8TZiiJjKsNBdE%2B6ClVZgK7RF7TVdWIfCLeoWDiBsvMN1sNuSF0EhniyabVR7vzIYmrTuQ1XPFTtZ04yi28LwlsLtwwKrw0SXhly5EBdvPQWlikCRdJyZ4ESUTKhIdXJzzxXWlDPamj%2BjsXG4%2F8WBN64bobY9JxQtbE3AGZGxBTxMqzR2n2eaMgAr0hrycAoy875D5cTWJUgvTNAzyT8ihr%2Fw4BlvUXpxhOMrfgbJufSw5IZpP1B62CRj0kXUA%2BmwCem5fMZyRyyiSQ%2BVZiGpG1W1vy1y6NAMWw0YDkVvJw08%2Bva3BmlS4rS6GvgH8salucQKgSZ02RMtZumSq5CyszVwQIIrAD%2FI1l%2F2W8Ggox1%2FpeX%2Blqe2%2BPXFnGffUVsApH5XjECGXjItKcxeGKMaAEFR8dBH1VBJZf0AqPcMNdwrLE53loJTRiEEL%2Bxm7B2t4TafQ1mf8HpSRxXB4Z2ktMs21p7iLA6mjCaDvVkBVFcXHqQaQsYESkNPKJoNgfXw2sa%2Ft28oTWDHVFnBFqpZ%2ByZKlWaad%2FEmIi3jiNXqk4LhK62P6x2r%2Bp754u585I00EwRzu0Ljj%2FWZJTCCm9sgIS6veIirl5zgEZhvfMIPwo78GOqUBDVT5lLWsjXIH8naf2iB7S1Dqnhbyh9NIALINeGGpSXLQbgK6I7sbpNVojbu6Fztf6%2Fl9M4248n2zidXjXW0wbStrR7%2B%2BnIHo7qXifBadCilXTDxCZ8VAo3aYKxp1oAdRUXMo%2FgP3vU7Nxrk4Fg9PtCLurlLMF1HfTv7AHb1so%2FHyaf0%2Bj2vLzKUsVvfFJ2fnWtC8SAnmc%2B4mg0iBctuRboKb2SEu&X-Amz-Signature=38de63548b60bf16fd0d1afb3ea9a27d7f6b2d0b512aa46b94ff1557e2d3b75f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
