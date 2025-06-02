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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SAXVRL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEKnT6s4QpUsmdDJQ%2FBUne9MxvfoQuW%2B26J9zFPJwwL1AiEAxbpDGanhGRfCgLLf14sNQM3aUMhArdpdK3UA6uMGbpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI243hHiBNa1rMy8jyrcA8d22rZUZXrwNur%2FWXE9N6f9RDUIcmBFmaQpEWs8bzEmwaFEaJYTAx6B55whHlYO1XqJT9uGp%2BzfjAfcZ1nvGBMIvzs9giJhkqF2sWadZIn4YOFpLdb57ai02UzJ%2FdR2f3bvxEe%2BVKXR%2Bkj8dgTAn8BWWsCpTk9C29Hj%2FDSZ9Y4jyq2Bl%2Fooc%2BIy397L7Uuq5J52mnHt%2FcuxY9yMVlFiPwVL7FatxZvGK1X3iQUo0dmeDPwqwyo3jRYOtxn4rpgkxMU0waQikQx2Uaxr2UsfjmuA6wfzqr5ZStA%2BexeHEkceFXSBmocij3j2phLo10N1alclrrqzrA8TwkK8gmriJGoeQiBYKfjL0woL5xg8fgb%2BDQpA1NRuYDTQWYJlLg%2BxZpdKpr45L5BBfOEG6RgZrkVIidOombk1mBLRELPK0uwJVl8gzu0vEJytmu8gPgveODgT59wcyNn9Rl9VTRf%2FNLWhwDjvcTPnSnOm0itrp3bvXrf8DC5S4TZYW0Bp%2BuQnkjXigNDwjc8g1s0XrZ%2BrsgxBYxc8nPwVATVi%2BFEoLRhdQAk75aXb2lEKjYo%2BTpiDtCe%2F41pwqC8YBLB1ZruR0jeSiNU2krCc1d3eQoXMIDXn7E3EzudjKt8cXhUfMMKy98EGOqUBjfHYCkRNmciYk8ASZqLierjy9wTZbq8E1UfMy4Q9pyu5eeoOtYbRylxWK9%2BVGf3%2Fc%2BTvh8YJrRc0jy1y%2BcydolwQDE4kle1XsAVvWvlAZofHhOEG8ZmdMHHP1nI3A7%2FBs2kD7O%2BHUPw9dzHYHHOOaMI4RDEcrTp5KTQzqERp9tyualtPz4wJw9od5P%2F1MUTAtwR%2BaOWwSJeQ2Pa%2BG%2By1zIUCjIOX&X-Amz-Signature=bb8b449bd7c564c8aad2432a24e35c8d46706a50af2408064832d4b542814a01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SAXVRL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEKnT6s4QpUsmdDJQ%2FBUne9MxvfoQuW%2B26J9zFPJwwL1AiEAxbpDGanhGRfCgLLf14sNQM3aUMhArdpdK3UA6uMGbpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI243hHiBNa1rMy8jyrcA8d22rZUZXrwNur%2FWXE9N6f9RDUIcmBFmaQpEWs8bzEmwaFEaJYTAx6B55whHlYO1XqJT9uGp%2BzfjAfcZ1nvGBMIvzs9giJhkqF2sWadZIn4YOFpLdb57ai02UzJ%2FdR2f3bvxEe%2BVKXR%2Bkj8dgTAn8BWWsCpTk9C29Hj%2FDSZ9Y4jyq2Bl%2Fooc%2BIy397L7Uuq5J52mnHt%2FcuxY9yMVlFiPwVL7FatxZvGK1X3iQUo0dmeDPwqwyo3jRYOtxn4rpgkxMU0waQikQx2Uaxr2UsfjmuA6wfzqr5ZStA%2BexeHEkceFXSBmocij3j2phLo10N1alclrrqzrA8TwkK8gmriJGoeQiBYKfjL0woL5xg8fgb%2BDQpA1NRuYDTQWYJlLg%2BxZpdKpr45L5BBfOEG6RgZrkVIidOombk1mBLRELPK0uwJVl8gzu0vEJytmu8gPgveODgT59wcyNn9Rl9VTRf%2FNLWhwDjvcTPnSnOm0itrp3bvXrf8DC5S4TZYW0Bp%2BuQnkjXigNDwjc8g1s0XrZ%2BrsgxBYxc8nPwVATVi%2BFEoLRhdQAk75aXb2lEKjYo%2BTpiDtCe%2F41pwqC8YBLB1ZruR0jeSiNU2krCc1d3eQoXMIDXn7E3EzudjKt8cXhUfMMKy98EGOqUBjfHYCkRNmciYk8ASZqLierjy9wTZbq8E1UfMy4Q9pyu5eeoOtYbRylxWK9%2BVGf3%2Fc%2BTvh8YJrRc0jy1y%2BcydolwQDE4kle1XsAVvWvlAZofHhOEG8ZmdMHHP1nI3A7%2FBs2kD7O%2BHUPw9dzHYHHOOaMI4RDEcrTp5KTQzqERp9tyualtPz4wJw9od5P%2F1MUTAtwR%2BaOWwSJeQ2Pa%2BG%2By1zIUCjIOX&X-Amz-Signature=edea297386deb888f0fea3ee56c0ff4ca82e294b6e97fd981998e0a7c52842ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SAXVRL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEKnT6s4QpUsmdDJQ%2FBUne9MxvfoQuW%2B26J9zFPJwwL1AiEAxbpDGanhGRfCgLLf14sNQM3aUMhArdpdK3UA6uMGbpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI243hHiBNa1rMy8jyrcA8d22rZUZXrwNur%2FWXE9N6f9RDUIcmBFmaQpEWs8bzEmwaFEaJYTAx6B55whHlYO1XqJT9uGp%2BzfjAfcZ1nvGBMIvzs9giJhkqF2sWadZIn4YOFpLdb57ai02UzJ%2FdR2f3bvxEe%2BVKXR%2Bkj8dgTAn8BWWsCpTk9C29Hj%2FDSZ9Y4jyq2Bl%2Fooc%2BIy397L7Uuq5J52mnHt%2FcuxY9yMVlFiPwVL7FatxZvGK1X3iQUo0dmeDPwqwyo3jRYOtxn4rpgkxMU0waQikQx2Uaxr2UsfjmuA6wfzqr5ZStA%2BexeHEkceFXSBmocij3j2phLo10N1alclrrqzrA8TwkK8gmriJGoeQiBYKfjL0woL5xg8fgb%2BDQpA1NRuYDTQWYJlLg%2BxZpdKpr45L5BBfOEG6RgZrkVIidOombk1mBLRELPK0uwJVl8gzu0vEJytmu8gPgveODgT59wcyNn9Rl9VTRf%2FNLWhwDjvcTPnSnOm0itrp3bvXrf8DC5S4TZYW0Bp%2BuQnkjXigNDwjc8g1s0XrZ%2BrsgxBYxc8nPwVATVi%2BFEoLRhdQAk75aXb2lEKjYo%2BTpiDtCe%2F41pwqC8YBLB1ZruR0jeSiNU2krCc1d3eQoXMIDXn7E3EzudjKt8cXhUfMMKy98EGOqUBjfHYCkRNmciYk8ASZqLierjy9wTZbq8E1UfMy4Q9pyu5eeoOtYbRylxWK9%2BVGf3%2Fc%2BTvh8YJrRc0jy1y%2BcydolwQDE4kle1XsAVvWvlAZofHhOEG8ZmdMHHP1nI3A7%2FBs2kD7O%2BHUPw9dzHYHHOOaMI4RDEcrTp5KTQzqERp9tyualtPz4wJw9od5P%2F1MUTAtwR%2BaOWwSJeQ2Pa%2BG%2By1zIUCjIOX&X-Amz-Signature=b1e3a8eca3066639c8e40d14501cdda87670713ea371b3107e23797fd9e02867&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SAXVRL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEKnT6s4QpUsmdDJQ%2FBUne9MxvfoQuW%2B26J9zFPJwwL1AiEAxbpDGanhGRfCgLLf14sNQM3aUMhArdpdK3UA6uMGbpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI243hHiBNa1rMy8jyrcA8d22rZUZXrwNur%2FWXE9N6f9RDUIcmBFmaQpEWs8bzEmwaFEaJYTAx6B55whHlYO1XqJT9uGp%2BzfjAfcZ1nvGBMIvzs9giJhkqF2sWadZIn4YOFpLdb57ai02UzJ%2FdR2f3bvxEe%2BVKXR%2Bkj8dgTAn8BWWsCpTk9C29Hj%2FDSZ9Y4jyq2Bl%2Fooc%2BIy397L7Uuq5J52mnHt%2FcuxY9yMVlFiPwVL7FatxZvGK1X3iQUo0dmeDPwqwyo3jRYOtxn4rpgkxMU0waQikQx2Uaxr2UsfjmuA6wfzqr5ZStA%2BexeHEkceFXSBmocij3j2phLo10N1alclrrqzrA8TwkK8gmriJGoeQiBYKfjL0woL5xg8fgb%2BDQpA1NRuYDTQWYJlLg%2BxZpdKpr45L5BBfOEG6RgZrkVIidOombk1mBLRELPK0uwJVl8gzu0vEJytmu8gPgveODgT59wcyNn9Rl9VTRf%2FNLWhwDjvcTPnSnOm0itrp3bvXrf8DC5S4TZYW0Bp%2BuQnkjXigNDwjc8g1s0XrZ%2BrsgxBYxc8nPwVATVi%2BFEoLRhdQAk75aXb2lEKjYo%2BTpiDtCe%2F41pwqC8YBLB1ZruR0jeSiNU2krCc1d3eQoXMIDXn7E3EzudjKt8cXhUfMMKy98EGOqUBjfHYCkRNmciYk8ASZqLierjy9wTZbq8E1UfMy4Q9pyu5eeoOtYbRylxWK9%2BVGf3%2Fc%2BTvh8YJrRc0jy1y%2BcydolwQDE4kle1XsAVvWvlAZofHhOEG8ZmdMHHP1nI3A7%2FBs2kD7O%2BHUPw9dzHYHHOOaMI4RDEcrTp5KTQzqERp9tyualtPz4wJw9od5P%2F1MUTAtwR%2BaOWwSJeQ2Pa%2BG%2By1zIUCjIOX&X-Amz-Signature=2afff75ae01f93504f0556237fa7c934eb69032b20d5442c1691591aa7114907&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SAXVRL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEKnT6s4QpUsmdDJQ%2FBUne9MxvfoQuW%2B26J9zFPJwwL1AiEAxbpDGanhGRfCgLLf14sNQM3aUMhArdpdK3UA6uMGbpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI243hHiBNa1rMy8jyrcA8d22rZUZXrwNur%2FWXE9N6f9RDUIcmBFmaQpEWs8bzEmwaFEaJYTAx6B55whHlYO1XqJT9uGp%2BzfjAfcZ1nvGBMIvzs9giJhkqF2sWadZIn4YOFpLdb57ai02UzJ%2FdR2f3bvxEe%2BVKXR%2Bkj8dgTAn8BWWsCpTk9C29Hj%2FDSZ9Y4jyq2Bl%2Fooc%2BIy397L7Uuq5J52mnHt%2FcuxY9yMVlFiPwVL7FatxZvGK1X3iQUo0dmeDPwqwyo3jRYOtxn4rpgkxMU0waQikQx2Uaxr2UsfjmuA6wfzqr5ZStA%2BexeHEkceFXSBmocij3j2phLo10N1alclrrqzrA8TwkK8gmriJGoeQiBYKfjL0woL5xg8fgb%2BDQpA1NRuYDTQWYJlLg%2BxZpdKpr45L5BBfOEG6RgZrkVIidOombk1mBLRELPK0uwJVl8gzu0vEJytmu8gPgveODgT59wcyNn9Rl9VTRf%2FNLWhwDjvcTPnSnOm0itrp3bvXrf8DC5S4TZYW0Bp%2BuQnkjXigNDwjc8g1s0XrZ%2BrsgxBYxc8nPwVATVi%2BFEoLRhdQAk75aXb2lEKjYo%2BTpiDtCe%2F41pwqC8YBLB1ZruR0jeSiNU2krCc1d3eQoXMIDXn7E3EzudjKt8cXhUfMMKy98EGOqUBjfHYCkRNmciYk8ASZqLierjy9wTZbq8E1UfMy4Q9pyu5eeoOtYbRylxWK9%2BVGf3%2Fc%2BTvh8YJrRc0jy1y%2BcydolwQDE4kle1XsAVvWvlAZofHhOEG8ZmdMHHP1nI3A7%2FBs2kD7O%2BHUPw9dzHYHHOOaMI4RDEcrTp5KTQzqERp9tyualtPz4wJw9od5P%2F1MUTAtwR%2BaOWwSJeQ2Pa%2BG%2By1zIUCjIOX&X-Amz-Signature=1ec8595faf2f3d38ef865666a426c33877080eb10863f03b6d7a375559a42496&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SAXVRL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEKnT6s4QpUsmdDJQ%2FBUne9MxvfoQuW%2B26J9zFPJwwL1AiEAxbpDGanhGRfCgLLf14sNQM3aUMhArdpdK3UA6uMGbpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI243hHiBNa1rMy8jyrcA8d22rZUZXrwNur%2FWXE9N6f9RDUIcmBFmaQpEWs8bzEmwaFEaJYTAx6B55whHlYO1XqJT9uGp%2BzfjAfcZ1nvGBMIvzs9giJhkqF2sWadZIn4YOFpLdb57ai02UzJ%2FdR2f3bvxEe%2BVKXR%2Bkj8dgTAn8BWWsCpTk9C29Hj%2FDSZ9Y4jyq2Bl%2Fooc%2BIy397L7Uuq5J52mnHt%2FcuxY9yMVlFiPwVL7FatxZvGK1X3iQUo0dmeDPwqwyo3jRYOtxn4rpgkxMU0waQikQx2Uaxr2UsfjmuA6wfzqr5ZStA%2BexeHEkceFXSBmocij3j2phLo10N1alclrrqzrA8TwkK8gmriJGoeQiBYKfjL0woL5xg8fgb%2BDQpA1NRuYDTQWYJlLg%2BxZpdKpr45L5BBfOEG6RgZrkVIidOombk1mBLRELPK0uwJVl8gzu0vEJytmu8gPgveODgT59wcyNn9Rl9VTRf%2FNLWhwDjvcTPnSnOm0itrp3bvXrf8DC5S4TZYW0Bp%2BuQnkjXigNDwjc8g1s0XrZ%2BrsgxBYxc8nPwVATVi%2BFEoLRhdQAk75aXb2lEKjYo%2BTpiDtCe%2F41pwqC8YBLB1ZruR0jeSiNU2krCc1d3eQoXMIDXn7E3EzudjKt8cXhUfMMKy98EGOqUBjfHYCkRNmciYk8ASZqLierjy9wTZbq8E1UfMy4Q9pyu5eeoOtYbRylxWK9%2BVGf3%2Fc%2BTvh8YJrRc0jy1y%2BcydolwQDE4kle1XsAVvWvlAZofHhOEG8ZmdMHHP1nI3A7%2FBs2kD7O%2BHUPw9dzHYHHOOaMI4RDEcrTp5KTQzqERp9tyualtPz4wJw9od5P%2F1MUTAtwR%2BaOWwSJeQ2Pa%2BG%2By1zIUCjIOX&X-Amz-Signature=3f94a16d30812cdc0b7b14307b0f113d17d1e389cc672cda6bb8b10cc7ff62b9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SAXVRL%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEKnT6s4QpUsmdDJQ%2FBUne9MxvfoQuW%2B26J9zFPJwwL1AiEAxbpDGanhGRfCgLLf14sNQM3aUMhArdpdK3UA6uMGbpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI243hHiBNa1rMy8jyrcA8d22rZUZXrwNur%2FWXE9N6f9RDUIcmBFmaQpEWs8bzEmwaFEaJYTAx6B55whHlYO1XqJT9uGp%2BzfjAfcZ1nvGBMIvzs9giJhkqF2sWadZIn4YOFpLdb57ai02UzJ%2FdR2f3bvxEe%2BVKXR%2Bkj8dgTAn8BWWsCpTk9C29Hj%2FDSZ9Y4jyq2Bl%2Fooc%2BIy397L7Uuq5J52mnHt%2FcuxY9yMVlFiPwVL7FatxZvGK1X3iQUo0dmeDPwqwyo3jRYOtxn4rpgkxMU0waQikQx2Uaxr2UsfjmuA6wfzqr5ZStA%2BexeHEkceFXSBmocij3j2phLo10N1alclrrqzrA8TwkK8gmriJGoeQiBYKfjL0woL5xg8fgb%2BDQpA1NRuYDTQWYJlLg%2BxZpdKpr45L5BBfOEG6RgZrkVIidOombk1mBLRELPK0uwJVl8gzu0vEJytmu8gPgveODgT59wcyNn9Rl9VTRf%2FNLWhwDjvcTPnSnOm0itrp3bvXrf8DC5S4TZYW0Bp%2BuQnkjXigNDwjc8g1s0XrZ%2BrsgxBYxc8nPwVATVi%2BFEoLRhdQAk75aXb2lEKjYo%2BTpiDtCe%2F41pwqC8YBLB1ZruR0jeSiNU2krCc1d3eQoXMIDXn7E3EzudjKt8cXhUfMMKy98EGOqUBjfHYCkRNmciYk8ASZqLierjy9wTZbq8E1UfMy4Q9pyu5eeoOtYbRylxWK9%2BVGf3%2Fc%2BTvh8YJrRc0jy1y%2BcydolwQDE4kle1XsAVvWvlAZofHhOEG8ZmdMHHP1nI3A7%2FBs2kD7O%2BHUPw9dzHYHHOOaMI4RDEcrTp5KTQzqERp9tyualtPz4wJw9od5P%2F1MUTAtwR%2BaOWwSJeQ2Pa%2BG%2By1zIUCjIOX&X-Amz-Signature=890c307cbe91a60846ed9f313a26d2153080966408abd2380690556c30978611&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
