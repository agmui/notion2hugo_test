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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJNHIJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0ss2MYN2vVFhUPhuIK8Zyk4FLieDcU66IN8HszSV0WAiBU64iNg%2B%2BgCspoGR9xh6rgcDkLJaUMLUC9dSXBKVoK9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNNrn0lfcdy5Pw7%2BPKtwD2awqLjqYcHXCgdOTcqaxRTwpt7gn%2F6QeMiE8WiqZK19xux2EdoDoBeNg8HGhZT3NWrcYjwltMIJX0NN5khIKtG0x7oToHlo8xLuNYOYYIcZ52AcVAAeDFmN9LT59ESannixD9WlmYAUjtbFdk6fRgww%2F6MJnZytC3ckv8dPKrlXEr2E0ylGih0bOATr38Ti21yS%2BxD%2BK8zqchyaXaiBDccvJGuN1XaShWXb97PfCutvYC6MTEvlb61ivTO%2B%2BFYcmh48G2YmJeq7WY%2BQfYyOmfDLT1%2BgO1by1bbjAxxKaIZ%2Bgx693zUL8JOCr0FD67YCIUDhqRlnEtXb63v3IoM%2B8xdlyVU5WbkJZk7U4vOhnht2RLJttfC2a1zxXIfIhiLy%2BzdxiCdTmUL5WtCQa%2B8PW54A8IYXIAD3rYQGzRsgveI5XeN0kWWjzYwQZZhIcxsTQRBI%2BW%2B0xqf3dsaKyGY8SGteXr2kB91lzOMb8ZAJbPzcHe50jaPiYdaCxZmmTUSv42C94HXoJP%2F8F%2BMdd%2F%2Bb93mqxe7mqMSuevWc%2BkOmNMCj4dSzNWKA6PQLt4SJEYC112w08NlBgwoSKmDE%2BdpsRgiJbwy8yb1sSjApBFOOoRUOVAGGS0DeIW973SYQwkZuZvQY6pgForwOLe7eboiNuR4CTro41vElarO%2BgSzTGXvD3P0RxEpYqL1EHwDprUWuJTtZxqtDfPwn1Hm1b2aE39%2FVlWNkEhSzavqr0iR1UXRI9BAKkzt2yIZFoLKYXB%2Fb648r592sjlOFx6qHNDGtpaQlMJTzS9hlXaaoaiV%2FWpbxx7rzgcGwdIQEA6gbOtKxRuTjcbEVAXDDkOiCWIDwstVcQRGGcwgKZGO0I&X-Amz-Signature=8c4ed7e4d8ad63b9a7ea9c040f7b835c6f60f1c68fc87149fc77ad1c70511274&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJNHIJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0ss2MYN2vVFhUPhuIK8Zyk4FLieDcU66IN8HszSV0WAiBU64iNg%2B%2BgCspoGR9xh6rgcDkLJaUMLUC9dSXBKVoK9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNNrn0lfcdy5Pw7%2BPKtwD2awqLjqYcHXCgdOTcqaxRTwpt7gn%2F6QeMiE8WiqZK19xux2EdoDoBeNg8HGhZT3NWrcYjwltMIJX0NN5khIKtG0x7oToHlo8xLuNYOYYIcZ52AcVAAeDFmN9LT59ESannixD9WlmYAUjtbFdk6fRgww%2F6MJnZytC3ckv8dPKrlXEr2E0ylGih0bOATr38Ti21yS%2BxD%2BK8zqchyaXaiBDccvJGuN1XaShWXb97PfCutvYC6MTEvlb61ivTO%2B%2BFYcmh48G2YmJeq7WY%2BQfYyOmfDLT1%2BgO1by1bbjAxxKaIZ%2Bgx693zUL8JOCr0FD67YCIUDhqRlnEtXb63v3IoM%2B8xdlyVU5WbkJZk7U4vOhnht2RLJttfC2a1zxXIfIhiLy%2BzdxiCdTmUL5WtCQa%2B8PW54A8IYXIAD3rYQGzRsgveI5XeN0kWWjzYwQZZhIcxsTQRBI%2BW%2B0xqf3dsaKyGY8SGteXr2kB91lzOMb8ZAJbPzcHe50jaPiYdaCxZmmTUSv42C94HXoJP%2F8F%2BMdd%2F%2Bb93mqxe7mqMSuevWc%2BkOmNMCj4dSzNWKA6PQLt4SJEYC112w08NlBgwoSKmDE%2BdpsRgiJbwy8yb1sSjApBFOOoRUOVAGGS0DeIW973SYQwkZuZvQY6pgForwOLe7eboiNuR4CTro41vElarO%2BgSzTGXvD3P0RxEpYqL1EHwDprUWuJTtZxqtDfPwn1Hm1b2aE39%2FVlWNkEhSzavqr0iR1UXRI9BAKkzt2yIZFoLKYXB%2Fb648r592sjlOFx6qHNDGtpaQlMJTzS9hlXaaoaiV%2FWpbxx7rzgcGwdIQEA6gbOtKxRuTjcbEVAXDDkOiCWIDwstVcQRGGcwgKZGO0I&X-Amz-Signature=46f4c7ca32a537d298d0be964a983a1c85f61b1608d6efb313d0817355c4db9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJNHIJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0ss2MYN2vVFhUPhuIK8Zyk4FLieDcU66IN8HszSV0WAiBU64iNg%2B%2BgCspoGR9xh6rgcDkLJaUMLUC9dSXBKVoK9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNNrn0lfcdy5Pw7%2BPKtwD2awqLjqYcHXCgdOTcqaxRTwpt7gn%2F6QeMiE8WiqZK19xux2EdoDoBeNg8HGhZT3NWrcYjwltMIJX0NN5khIKtG0x7oToHlo8xLuNYOYYIcZ52AcVAAeDFmN9LT59ESannixD9WlmYAUjtbFdk6fRgww%2F6MJnZytC3ckv8dPKrlXEr2E0ylGih0bOATr38Ti21yS%2BxD%2BK8zqchyaXaiBDccvJGuN1XaShWXb97PfCutvYC6MTEvlb61ivTO%2B%2BFYcmh48G2YmJeq7WY%2BQfYyOmfDLT1%2BgO1by1bbjAxxKaIZ%2Bgx693zUL8JOCr0FD67YCIUDhqRlnEtXb63v3IoM%2B8xdlyVU5WbkJZk7U4vOhnht2RLJttfC2a1zxXIfIhiLy%2BzdxiCdTmUL5WtCQa%2B8PW54A8IYXIAD3rYQGzRsgveI5XeN0kWWjzYwQZZhIcxsTQRBI%2BW%2B0xqf3dsaKyGY8SGteXr2kB91lzOMb8ZAJbPzcHe50jaPiYdaCxZmmTUSv42C94HXoJP%2F8F%2BMdd%2F%2Bb93mqxe7mqMSuevWc%2BkOmNMCj4dSzNWKA6PQLt4SJEYC112w08NlBgwoSKmDE%2BdpsRgiJbwy8yb1sSjApBFOOoRUOVAGGS0DeIW973SYQwkZuZvQY6pgForwOLe7eboiNuR4CTro41vElarO%2BgSzTGXvD3P0RxEpYqL1EHwDprUWuJTtZxqtDfPwn1Hm1b2aE39%2FVlWNkEhSzavqr0iR1UXRI9BAKkzt2yIZFoLKYXB%2Fb648r592sjlOFx6qHNDGtpaQlMJTzS9hlXaaoaiV%2FWpbxx7rzgcGwdIQEA6gbOtKxRuTjcbEVAXDDkOiCWIDwstVcQRGGcwgKZGO0I&X-Amz-Signature=f4f56b55c85efbe360eee3e26d1b5a0f4658460de0edb437397b9ab287170486&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJNHIJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0ss2MYN2vVFhUPhuIK8Zyk4FLieDcU66IN8HszSV0WAiBU64iNg%2B%2BgCspoGR9xh6rgcDkLJaUMLUC9dSXBKVoK9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNNrn0lfcdy5Pw7%2BPKtwD2awqLjqYcHXCgdOTcqaxRTwpt7gn%2F6QeMiE8WiqZK19xux2EdoDoBeNg8HGhZT3NWrcYjwltMIJX0NN5khIKtG0x7oToHlo8xLuNYOYYIcZ52AcVAAeDFmN9LT59ESannixD9WlmYAUjtbFdk6fRgww%2F6MJnZytC3ckv8dPKrlXEr2E0ylGih0bOATr38Ti21yS%2BxD%2BK8zqchyaXaiBDccvJGuN1XaShWXb97PfCutvYC6MTEvlb61ivTO%2B%2BFYcmh48G2YmJeq7WY%2BQfYyOmfDLT1%2BgO1by1bbjAxxKaIZ%2Bgx693zUL8JOCr0FD67YCIUDhqRlnEtXb63v3IoM%2B8xdlyVU5WbkJZk7U4vOhnht2RLJttfC2a1zxXIfIhiLy%2BzdxiCdTmUL5WtCQa%2B8PW54A8IYXIAD3rYQGzRsgveI5XeN0kWWjzYwQZZhIcxsTQRBI%2BW%2B0xqf3dsaKyGY8SGteXr2kB91lzOMb8ZAJbPzcHe50jaPiYdaCxZmmTUSv42C94HXoJP%2F8F%2BMdd%2F%2Bb93mqxe7mqMSuevWc%2BkOmNMCj4dSzNWKA6PQLt4SJEYC112w08NlBgwoSKmDE%2BdpsRgiJbwy8yb1sSjApBFOOoRUOVAGGS0DeIW973SYQwkZuZvQY6pgForwOLe7eboiNuR4CTro41vElarO%2BgSzTGXvD3P0RxEpYqL1EHwDprUWuJTtZxqtDfPwn1Hm1b2aE39%2FVlWNkEhSzavqr0iR1UXRI9BAKkzt2yIZFoLKYXB%2Fb648r592sjlOFx6qHNDGtpaQlMJTzS9hlXaaoaiV%2FWpbxx7rzgcGwdIQEA6gbOtKxRuTjcbEVAXDDkOiCWIDwstVcQRGGcwgKZGO0I&X-Amz-Signature=4d668e1f49894daad2c4f1575b5d29c9200e89119bf26e53b9ae16e631937418&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJNHIJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0ss2MYN2vVFhUPhuIK8Zyk4FLieDcU66IN8HszSV0WAiBU64iNg%2B%2BgCspoGR9xh6rgcDkLJaUMLUC9dSXBKVoK9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNNrn0lfcdy5Pw7%2BPKtwD2awqLjqYcHXCgdOTcqaxRTwpt7gn%2F6QeMiE8WiqZK19xux2EdoDoBeNg8HGhZT3NWrcYjwltMIJX0NN5khIKtG0x7oToHlo8xLuNYOYYIcZ52AcVAAeDFmN9LT59ESannixD9WlmYAUjtbFdk6fRgww%2F6MJnZytC3ckv8dPKrlXEr2E0ylGih0bOATr38Ti21yS%2BxD%2BK8zqchyaXaiBDccvJGuN1XaShWXb97PfCutvYC6MTEvlb61ivTO%2B%2BFYcmh48G2YmJeq7WY%2BQfYyOmfDLT1%2BgO1by1bbjAxxKaIZ%2Bgx693zUL8JOCr0FD67YCIUDhqRlnEtXb63v3IoM%2B8xdlyVU5WbkJZk7U4vOhnht2RLJttfC2a1zxXIfIhiLy%2BzdxiCdTmUL5WtCQa%2B8PW54A8IYXIAD3rYQGzRsgveI5XeN0kWWjzYwQZZhIcxsTQRBI%2BW%2B0xqf3dsaKyGY8SGteXr2kB91lzOMb8ZAJbPzcHe50jaPiYdaCxZmmTUSv42C94HXoJP%2F8F%2BMdd%2F%2Bb93mqxe7mqMSuevWc%2BkOmNMCj4dSzNWKA6PQLt4SJEYC112w08NlBgwoSKmDE%2BdpsRgiJbwy8yb1sSjApBFOOoRUOVAGGS0DeIW973SYQwkZuZvQY6pgForwOLe7eboiNuR4CTro41vElarO%2BgSzTGXvD3P0RxEpYqL1EHwDprUWuJTtZxqtDfPwn1Hm1b2aE39%2FVlWNkEhSzavqr0iR1UXRI9BAKkzt2yIZFoLKYXB%2Fb648r592sjlOFx6qHNDGtpaQlMJTzS9hlXaaoaiV%2FWpbxx7rzgcGwdIQEA6gbOtKxRuTjcbEVAXDDkOiCWIDwstVcQRGGcwgKZGO0I&X-Amz-Signature=e97865b912d131ddddede23f0fb63ac3a5cf98d704ba58e150bc86795f49fdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJNHIJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0ss2MYN2vVFhUPhuIK8Zyk4FLieDcU66IN8HszSV0WAiBU64iNg%2B%2BgCspoGR9xh6rgcDkLJaUMLUC9dSXBKVoK9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNNrn0lfcdy5Pw7%2BPKtwD2awqLjqYcHXCgdOTcqaxRTwpt7gn%2F6QeMiE8WiqZK19xux2EdoDoBeNg8HGhZT3NWrcYjwltMIJX0NN5khIKtG0x7oToHlo8xLuNYOYYIcZ52AcVAAeDFmN9LT59ESannixD9WlmYAUjtbFdk6fRgww%2F6MJnZytC3ckv8dPKrlXEr2E0ylGih0bOATr38Ti21yS%2BxD%2BK8zqchyaXaiBDccvJGuN1XaShWXb97PfCutvYC6MTEvlb61ivTO%2B%2BFYcmh48G2YmJeq7WY%2BQfYyOmfDLT1%2BgO1by1bbjAxxKaIZ%2Bgx693zUL8JOCr0FD67YCIUDhqRlnEtXb63v3IoM%2B8xdlyVU5WbkJZk7U4vOhnht2RLJttfC2a1zxXIfIhiLy%2BzdxiCdTmUL5WtCQa%2B8PW54A8IYXIAD3rYQGzRsgveI5XeN0kWWjzYwQZZhIcxsTQRBI%2BW%2B0xqf3dsaKyGY8SGteXr2kB91lzOMb8ZAJbPzcHe50jaPiYdaCxZmmTUSv42C94HXoJP%2F8F%2BMdd%2F%2Bb93mqxe7mqMSuevWc%2BkOmNMCj4dSzNWKA6PQLt4SJEYC112w08NlBgwoSKmDE%2BdpsRgiJbwy8yb1sSjApBFOOoRUOVAGGS0DeIW973SYQwkZuZvQY6pgForwOLe7eboiNuR4CTro41vElarO%2BgSzTGXvD3P0RxEpYqL1EHwDprUWuJTtZxqtDfPwn1Hm1b2aE39%2FVlWNkEhSzavqr0iR1UXRI9BAKkzt2yIZFoLKYXB%2Fb648r592sjlOFx6qHNDGtpaQlMJTzS9hlXaaoaiV%2FWpbxx7rzgcGwdIQEA6gbOtKxRuTjcbEVAXDDkOiCWIDwstVcQRGGcwgKZGO0I&X-Amz-Signature=2716ee459e194d5083f8a734f550775cd06e0a4ce41f14944e5f2fc4741dfb98&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJNHIJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0ss2MYN2vVFhUPhuIK8Zyk4FLieDcU66IN8HszSV0WAiBU64iNg%2B%2BgCspoGR9xh6rgcDkLJaUMLUC9dSXBKVoK9Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMNNrn0lfcdy5Pw7%2BPKtwD2awqLjqYcHXCgdOTcqaxRTwpt7gn%2F6QeMiE8WiqZK19xux2EdoDoBeNg8HGhZT3NWrcYjwltMIJX0NN5khIKtG0x7oToHlo8xLuNYOYYIcZ52AcVAAeDFmN9LT59ESannixD9WlmYAUjtbFdk6fRgww%2F6MJnZytC3ckv8dPKrlXEr2E0ylGih0bOATr38Ti21yS%2BxD%2BK8zqchyaXaiBDccvJGuN1XaShWXb97PfCutvYC6MTEvlb61ivTO%2B%2BFYcmh48G2YmJeq7WY%2BQfYyOmfDLT1%2BgO1by1bbjAxxKaIZ%2Bgx693zUL8JOCr0FD67YCIUDhqRlnEtXb63v3IoM%2B8xdlyVU5WbkJZk7U4vOhnht2RLJttfC2a1zxXIfIhiLy%2BzdxiCdTmUL5WtCQa%2B8PW54A8IYXIAD3rYQGzRsgveI5XeN0kWWjzYwQZZhIcxsTQRBI%2BW%2B0xqf3dsaKyGY8SGteXr2kB91lzOMb8ZAJbPzcHe50jaPiYdaCxZmmTUSv42C94HXoJP%2F8F%2BMdd%2F%2Bb93mqxe7mqMSuevWc%2BkOmNMCj4dSzNWKA6PQLt4SJEYC112w08NlBgwoSKmDE%2BdpsRgiJbwy8yb1sSjApBFOOoRUOVAGGS0DeIW973SYQwkZuZvQY6pgForwOLe7eboiNuR4CTro41vElarO%2BgSzTGXvD3P0RxEpYqL1EHwDprUWuJTtZxqtDfPwn1Hm1b2aE39%2FVlWNkEhSzavqr0iR1UXRI9BAKkzt2yIZFoLKYXB%2Fb648r592sjlOFx6qHNDGtpaQlMJTzS9hlXaaoaiV%2FWpbxx7rzgcGwdIQEA6gbOtKxRuTjcbEVAXDDkOiCWIDwstVcQRGGcwgKZGO0I&X-Amz-Signature=9f41951f740cbc2c40d6b2da2350d25cac7e76fa5fa552138582d3d2308ee00b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
