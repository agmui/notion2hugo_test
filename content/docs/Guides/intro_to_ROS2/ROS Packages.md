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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2OW22X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmKLd3myUwFS6ZjIQxK796McBH%2Bf%2FYhHE%2BwgFwuN3sigIhAKynMG5xMldmLHHXcnqTRHznAfYBHZ9RqpuYo035Cx6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ7zxVnSMz9fKCXhIq3AP117vOHV3ys7VwA5SIA5C8nsiwXBde3ews7UnQp08EDoT3Lk5Vaoc2T8dRvBtZwJZMo%2FqvSvsMs9q17W2YJWJgP3JSLytb28zpNcyNVOiYQdM2azSnsk1cMkkOgU%2FKNRk1Lk%2FgewyL5qm2oclJ1FhodZWtgXKjTOWOnFqLSzMr6JPvl4teZumf8cDt%2BcaCO%2FzwKLMLyRzswXLRSNih3VzdeLF9D7FXXEpN4u0QgtSi%2F%2Bn8VNziVwCraYpxSJqjEcH458mjL8r%2FSch9ZiGcP7jBzDg9BW4d%2FjLXEm0CxnoITYBltunVVuC4StQu2VCV%2Bdsc7jCfrIh9xJYZ%2BPkv%2Fl4POOAsIC7PR8fwbo%2Fe8hEOgIvQf%2BsaPmMCMu4m%2BPMwzEMPz4ayWLWPFY2NnqtQsTPm8Mgblu7BR4pzGYkSD%2FTRALXV49%2B9PQz2bSzsgJO0NwwyhK4SMpHwfEkFXxXSZJ%2BBt1iStGYV1d4UDV6o6f1935eVZYkm%2BDDxa1haiyqzRe0GWmRRH7berPw1S37H9ACOxMoUnJpWlh1GtgJXwTuoWxmyTLqIsbcLUyXngiSu35jSQGVoNiN2a4SMndPIWGu6qFc8SukSAxATLYN%2BeGjW9WXx8c95OhGVubsvCTDi887ABjqkAf0vh56q3L34R9VsfEEJnG6tIOwOT0g22THjnrUvn5et7XlvnovLHwfLhNrnXpGgIrq5UOKaNSrPDkvSvp2kgu6bHqpUNqGWsgL01%2B8fRUIFaMxk2u7XUe3mV6DR%2FLLepWfFQCP9Ukv1BaCDufkc97Qd%2BZQTNwLhuJ8KXX4n3%2B6ANoZ26uxEsXFjcDuhB%2FSiSIcHt43XbLvG2UU9Tc7CsOpTZNvl&X-Amz-Signature=0bf10e35b8619dc16c0a00364370b178b2ff64c893abf8c5752f4bac8baa601b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2OW22X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmKLd3myUwFS6ZjIQxK796McBH%2Bf%2FYhHE%2BwgFwuN3sigIhAKynMG5xMldmLHHXcnqTRHznAfYBHZ9RqpuYo035Cx6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ7zxVnSMz9fKCXhIq3AP117vOHV3ys7VwA5SIA5C8nsiwXBde3ews7UnQp08EDoT3Lk5Vaoc2T8dRvBtZwJZMo%2FqvSvsMs9q17W2YJWJgP3JSLytb28zpNcyNVOiYQdM2azSnsk1cMkkOgU%2FKNRk1Lk%2FgewyL5qm2oclJ1FhodZWtgXKjTOWOnFqLSzMr6JPvl4teZumf8cDt%2BcaCO%2FzwKLMLyRzswXLRSNih3VzdeLF9D7FXXEpN4u0QgtSi%2F%2Bn8VNziVwCraYpxSJqjEcH458mjL8r%2FSch9ZiGcP7jBzDg9BW4d%2FjLXEm0CxnoITYBltunVVuC4StQu2VCV%2Bdsc7jCfrIh9xJYZ%2BPkv%2Fl4POOAsIC7PR8fwbo%2Fe8hEOgIvQf%2BsaPmMCMu4m%2BPMwzEMPz4ayWLWPFY2NnqtQsTPm8Mgblu7BR4pzGYkSD%2FTRALXV49%2B9PQz2bSzsgJO0NwwyhK4SMpHwfEkFXxXSZJ%2BBt1iStGYV1d4UDV6o6f1935eVZYkm%2BDDxa1haiyqzRe0GWmRRH7berPw1S37H9ACOxMoUnJpWlh1GtgJXwTuoWxmyTLqIsbcLUyXngiSu35jSQGVoNiN2a4SMndPIWGu6qFc8SukSAxATLYN%2BeGjW9WXx8c95OhGVubsvCTDi887ABjqkAf0vh56q3L34R9VsfEEJnG6tIOwOT0g22THjnrUvn5et7XlvnovLHwfLhNrnXpGgIrq5UOKaNSrPDkvSvp2kgu6bHqpUNqGWsgL01%2B8fRUIFaMxk2u7XUe3mV6DR%2FLLepWfFQCP9Ukv1BaCDufkc97Qd%2BZQTNwLhuJ8KXX4n3%2B6ANoZ26uxEsXFjcDuhB%2FSiSIcHt43XbLvG2UU9Tc7CsOpTZNvl&X-Amz-Signature=c7c82fe443db78ab9c571e5fa30f8d7f525c5dcd14d158242d438582374b3667&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2OW22X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmKLd3myUwFS6ZjIQxK796McBH%2Bf%2FYhHE%2BwgFwuN3sigIhAKynMG5xMldmLHHXcnqTRHznAfYBHZ9RqpuYo035Cx6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ7zxVnSMz9fKCXhIq3AP117vOHV3ys7VwA5SIA5C8nsiwXBde3ews7UnQp08EDoT3Lk5Vaoc2T8dRvBtZwJZMo%2FqvSvsMs9q17W2YJWJgP3JSLytb28zpNcyNVOiYQdM2azSnsk1cMkkOgU%2FKNRk1Lk%2FgewyL5qm2oclJ1FhodZWtgXKjTOWOnFqLSzMr6JPvl4teZumf8cDt%2BcaCO%2FzwKLMLyRzswXLRSNih3VzdeLF9D7FXXEpN4u0QgtSi%2F%2Bn8VNziVwCraYpxSJqjEcH458mjL8r%2FSch9ZiGcP7jBzDg9BW4d%2FjLXEm0CxnoITYBltunVVuC4StQu2VCV%2Bdsc7jCfrIh9xJYZ%2BPkv%2Fl4POOAsIC7PR8fwbo%2Fe8hEOgIvQf%2BsaPmMCMu4m%2BPMwzEMPz4ayWLWPFY2NnqtQsTPm8Mgblu7BR4pzGYkSD%2FTRALXV49%2B9PQz2bSzsgJO0NwwyhK4SMpHwfEkFXxXSZJ%2BBt1iStGYV1d4UDV6o6f1935eVZYkm%2BDDxa1haiyqzRe0GWmRRH7berPw1S37H9ACOxMoUnJpWlh1GtgJXwTuoWxmyTLqIsbcLUyXngiSu35jSQGVoNiN2a4SMndPIWGu6qFc8SukSAxATLYN%2BeGjW9WXx8c95OhGVubsvCTDi887ABjqkAf0vh56q3L34R9VsfEEJnG6tIOwOT0g22THjnrUvn5et7XlvnovLHwfLhNrnXpGgIrq5UOKaNSrPDkvSvp2kgu6bHqpUNqGWsgL01%2B8fRUIFaMxk2u7XUe3mV6DR%2FLLepWfFQCP9Ukv1BaCDufkc97Qd%2BZQTNwLhuJ8KXX4n3%2B6ANoZ26uxEsXFjcDuhB%2FSiSIcHt43XbLvG2UU9Tc7CsOpTZNvl&X-Amz-Signature=1ee58921bcf53d0f6a7987fb146bf91d3954a7e372743dbc069d56c1455434d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2OW22X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmKLd3myUwFS6ZjIQxK796McBH%2Bf%2FYhHE%2BwgFwuN3sigIhAKynMG5xMldmLHHXcnqTRHznAfYBHZ9RqpuYo035Cx6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ7zxVnSMz9fKCXhIq3AP117vOHV3ys7VwA5SIA5C8nsiwXBde3ews7UnQp08EDoT3Lk5Vaoc2T8dRvBtZwJZMo%2FqvSvsMs9q17W2YJWJgP3JSLytb28zpNcyNVOiYQdM2azSnsk1cMkkOgU%2FKNRk1Lk%2FgewyL5qm2oclJ1FhodZWtgXKjTOWOnFqLSzMr6JPvl4teZumf8cDt%2BcaCO%2FzwKLMLyRzswXLRSNih3VzdeLF9D7FXXEpN4u0QgtSi%2F%2Bn8VNziVwCraYpxSJqjEcH458mjL8r%2FSch9ZiGcP7jBzDg9BW4d%2FjLXEm0CxnoITYBltunVVuC4StQu2VCV%2Bdsc7jCfrIh9xJYZ%2BPkv%2Fl4POOAsIC7PR8fwbo%2Fe8hEOgIvQf%2BsaPmMCMu4m%2BPMwzEMPz4ayWLWPFY2NnqtQsTPm8Mgblu7BR4pzGYkSD%2FTRALXV49%2B9PQz2bSzsgJO0NwwyhK4SMpHwfEkFXxXSZJ%2BBt1iStGYV1d4UDV6o6f1935eVZYkm%2BDDxa1haiyqzRe0GWmRRH7berPw1S37H9ACOxMoUnJpWlh1GtgJXwTuoWxmyTLqIsbcLUyXngiSu35jSQGVoNiN2a4SMndPIWGu6qFc8SukSAxATLYN%2BeGjW9WXx8c95OhGVubsvCTDi887ABjqkAf0vh56q3L34R9VsfEEJnG6tIOwOT0g22THjnrUvn5et7XlvnovLHwfLhNrnXpGgIrq5UOKaNSrPDkvSvp2kgu6bHqpUNqGWsgL01%2B8fRUIFaMxk2u7XUe3mV6DR%2FLLepWfFQCP9Ukv1BaCDufkc97Qd%2BZQTNwLhuJ8KXX4n3%2B6ANoZ26uxEsXFjcDuhB%2FSiSIcHt43XbLvG2UU9Tc7CsOpTZNvl&X-Amz-Signature=a96b1d62f20a872e00d92463386682455c843137e853a1b536a28f6369f67208&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2OW22X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmKLd3myUwFS6ZjIQxK796McBH%2Bf%2FYhHE%2BwgFwuN3sigIhAKynMG5xMldmLHHXcnqTRHznAfYBHZ9RqpuYo035Cx6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ7zxVnSMz9fKCXhIq3AP117vOHV3ys7VwA5SIA5C8nsiwXBde3ews7UnQp08EDoT3Lk5Vaoc2T8dRvBtZwJZMo%2FqvSvsMs9q17W2YJWJgP3JSLytb28zpNcyNVOiYQdM2azSnsk1cMkkOgU%2FKNRk1Lk%2FgewyL5qm2oclJ1FhodZWtgXKjTOWOnFqLSzMr6JPvl4teZumf8cDt%2BcaCO%2FzwKLMLyRzswXLRSNih3VzdeLF9D7FXXEpN4u0QgtSi%2F%2Bn8VNziVwCraYpxSJqjEcH458mjL8r%2FSch9ZiGcP7jBzDg9BW4d%2FjLXEm0CxnoITYBltunVVuC4StQu2VCV%2Bdsc7jCfrIh9xJYZ%2BPkv%2Fl4POOAsIC7PR8fwbo%2Fe8hEOgIvQf%2BsaPmMCMu4m%2BPMwzEMPz4ayWLWPFY2NnqtQsTPm8Mgblu7BR4pzGYkSD%2FTRALXV49%2B9PQz2bSzsgJO0NwwyhK4SMpHwfEkFXxXSZJ%2BBt1iStGYV1d4UDV6o6f1935eVZYkm%2BDDxa1haiyqzRe0GWmRRH7berPw1S37H9ACOxMoUnJpWlh1GtgJXwTuoWxmyTLqIsbcLUyXngiSu35jSQGVoNiN2a4SMndPIWGu6qFc8SukSAxATLYN%2BeGjW9WXx8c95OhGVubsvCTDi887ABjqkAf0vh56q3L34R9VsfEEJnG6tIOwOT0g22THjnrUvn5et7XlvnovLHwfLhNrnXpGgIrq5UOKaNSrPDkvSvp2kgu6bHqpUNqGWsgL01%2B8fRUIFaMxk2u7XUe3mV6DR%2FLLepWfFQCP9Ukv1BaCDufkc97Qd%2BZQTNwLhuJ8KXX4n3%2B6ANoZ26uxEsXFjcDuhB%2FSiSIcHt43XbLvG2UU9Tc7CsOpTZNvl&X-Amz-Signature=53954cda892e24607a0c11bec1eca4dc89a0ef04653908af6bb97a684927275f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2OW22X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmKLd3myUwFS6ZjIQxK796McBH%2Bf%2FYhHE%2BwgFwuN3sigIhAKynMG5xMldmLHHXcnqTRHznAfYBHZ9RqpuYo035Cx6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ7zxVnSMz9fKCXhIq3AP117vOHV3ys7VwA5SIA5C8nsiwXBde3ews7UnQp08EDoT3Lk5Vaoc2T8dRvBtZwJZMo%2FqvSvsMs9q17W2YJWJgP3JSLytb28zpNcyNVOiYQdM2azSnsk1cMkkOgU%2FKNRk1Lk%2FgewyL5qm2oclJ1FhodZWtgXKjTOWOnFqLSzMr6JPvl4teZumf8cDt%2BcaCO%2FzwKLMLyRzswXLRSNih3VzdeLF9D7FXXEpN4u0QgtSi%2F%2Bn8VNziVwCraYpxSJqjEcH458mjL8r%2FSch9ZiGcP7jBzDg9BW4d%2FjLXEm0CxnoITYBltunVVuC4StQu2VCV%2Bdsc7jCfrIh9xJYZ%2BPkv%2Fl4POOAsIC7PR8fwbo%2Fe8hEOgIvQf%2BsaPmMCMu4m%2BPMwzEMPz4ayWLWPFY2NnqtQsTPm8Mgblu7BR4pzGYkSD%2FTRALXV49%2B9PQz2bSzsgJO0NwwyhK4SMpHwfEkFXxXSZJ%2BBt1iStGYV1d4UDV6o6f1935eVZYkm%2BDDxa1haiyqzRe0GWmRRH7berPw1S37H9ACOxMoUnJpWlh1GtgJXwTuoWxmyTLqIsbcLUyXngiSu35jSQGVoNiN2a4SMndPIWGu6qFc8SukSAxATLYN%2BeGjW9WXx8c95OhGVubsvCTDi887ABjqkAf0vh56q3L34R9VsfEEJnG6tIOwOT0g22THjnrUvn5et7XlvnovLHwfLhNrnXpGgIrq5UOKaNSrPDkvSvp2kgu6bHqpUNqGWsgL01%2B8fRUIFaMxk2u7XUe3mV6DR%2FLLepWfFQCP9Ukv1BaCDufkc97Qd%2BZQTNwLhuJ8KXX4n3%2B6ANoZ26uxEsXFjcDuhB%2FSiSIcHt43XbLvG2UU9Tc7CsOpTZNvl&X-Amz-Signature=09189a569138ab78a5bca151550c8c3f086843bfe6e00d80cda908855d6c2050&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2OW22X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmKLd3myUwFS6ZjIQxK796McBH%2Bf%2FYhHE%2BwgFwuN3sigIhAKynMG5xMldmLHHXcnqTRHznAfYBHZ9RqpuYo035Cx6eKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ7zxVnSMz9fKCXhIq3AP117vOHV3ys7VwA5SIA5C8nsiwXBde3ews7UnQp08EDoT3Lk5Vaoc2T8dRvBtZwJZMo%2FqvSvsMs9q17W2YJWJgP3JSLytb28zpNcyNVOiYQdM2azSnsk1cMkkOgU%2FKNRk1Lk%2FgewyL5qm2oclJ1FhodZWtgXKjTOWOnFqLSzMr6JPvl4teZumf8cDt%2BcaCO%2FzwKLMLyRzswXLRSNih3VzdeLF9D7FXXEpN4u0QgtSi%2F%2Bn8VNziVwCraYpxSJqjEcH458mjL8r%2FSch9ZiGcP7jBzDg9BW4d%2FjLXEm0CxnoITYBltunVVuC4StQu2VCV%2Bdsc7jCfrIh9xJYZ%2BPkv%2Fl4POOAsIC7PR8fwbo%2Fe8hEOgIvQf%2BsaPmMCMu4m%2BPMwzEMPz4ayWLWPFY2NnqtQsTPm8Mgblu7BR4pzGYkSD%2FTRALXV49%2B9PQz2bSzsgJO0NwwyhK4SMpHwfEkFXxXSZJ%2BBt1iStGYV1d4UDV6o6f1935eVZYkm%2BDDxa1haiyqzRe0GWmRRH7berPw1S37H9ACOxMoUnJpWlh1GtgJXwTuoWxmyTLqIsbcLUyXngiSu35jSQGVoNiN2a4SMndPIWGu6qFc8SukSAxATLYN%2BeGjW9WXx8c95OhGVubsvCTDi887ABjqkAf0vh56q3L34R9VsfEEJnG6tIOwOT0g22THjnrUvn5et7XlvnovLHwfLhNrnXpGgIrq5UOKaNSrPDkvSvp2kgu6bHqpUNqGWsgL01%2B8fRUIFaMxk2u7XUe3mV6DR%2FLLepWfFQCP9Ukv1BaCDufkc97Qd%2BZQTNwLhuJ8KXX4n3%2B6ANoZ26uxEsXFjcDuhB%2FSiSIcHt43XbLvG2UU9Tc7CsOpTZNvl&X-Amz-Signature=5a2115f23189e5e60362084019da671eae88247519d70feb8abdeb867a5212fd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
