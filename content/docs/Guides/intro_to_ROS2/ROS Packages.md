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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GP66QLU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDG7eI%2BhBwYutW5v7Lw5HpmB8kxBOAQiPI8tEtKFm9NyAIhAIxwJ%2F8ZGdWRzRYruo9lruTaOteYpM%2F0CQQY0%2FUUaANVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkwXvnPreIkOP2Zu8q3AN8DrjVC0KuRhew7xAgMCaqiu6hSMqZGGLM55Et9Qa9769UkUaZEJh3j94NDwyfbIo%2Fp3WbcOT8dI%2BlLkvFnKOl31v6ki74iU8zDl4gId1OkgywfrhvjUoPeyG8gvihuIQxREHInh0DiZQDodk9pesC%2BEpaD9TNGRZVD4k4NxNtvhfu7jnGSLsSfrtdzFmGmm8K8EyUr5uZUKzwGglKSyi%2FGh7EJ0b253oe1CHZWF8A%2BckCpzog2J32UrlSRe7qxFnbsy6qCfS47Ju8ZvvwJ0MrqyMUTzuF3QdvQGPmcIs6RuJu0M5Io2b9AUJCcLe9%2BUyXt6ROZc%2FL6RhHOZmPR8HNC6uV3SpK%2FhGEsAYh37TaXZCM70y2Ktf%2BWgOVsWQ0j8YVerEr64wrd4%2FGup26mOb4ACgQtjdwdciqVO%2FL%2FtialKieQe3pL5kEMMpUA2%2Bj%2B3HfQmmQmC4ubkfHWELq1y56lKzJU01sud1VhdLn9dVY6rt3KEweFYQwJmcKlq2sactd8YsiLqMPhVdfoBuKUGRrp4Hilupw9OLatRoscqUjdD2bPFog4pQEQ%2FZk0EMf3QBnavcfvGqBs3PrvpbZDW9EW9RxAUm%2B7lD6SQmHp%2BA5FuuDr79nD7NmUJF0MzC5k%2BHCBjqkAaNTt7swGoCSVjdtV1O2h8HwmAx9RHSLWHdsKgZ4XjpplVIl1CgC82AwtuNfpV0%2FqrZF5HyI2HOMq63fX7gbA1WhwMc4hsPjLJnjY8ag3WIeyCCGSKRyjbDYHpeyBO7NgO53Mo%2BirfH%2Ft%2FREMwF0xOzpJAd3T2ZgdiLYeTgccPgCs9yVyxbCISWtEfpAqRvhwDkUDBp93j%2BQQIbzaMdmQTr4jqV4&X-Amz-Signature=df06c5979cbd24e55b9fbd687c3bd8921f2b19cc56284439080286f365c2cd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GP66QLU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDG7eI%2BhBwYutW5v7Lw5HpmB8kxBOAQiPI8tEtKFm9NyAIhAIxwJ%2F8ZGdWRzRYruo9lruTaOteYpM%2F0CQQY0%2FUUaANVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkwXvnPreIkOP2Zu8q3AN8DrjVC0KuRhew7xAgMCaqiu6hSMqZGGLM55Et9Qa9769UkUaZEJh3j94NDwyfbIo%2Fp3WbcOT8dI%2BlLkvFnKOl31v6ki74iU8zDl4gId1OkgywfrhvjUoPeyG8gvihuIQxREHInh0DiZQDodk9pesC%2BEpaD9TNGRZVD4k4NxNtvhfu7jnGSLsSfrtdzFmGmm8K8EyUr5uZUKzwGglKSyi%2FGh7EJ0b253oe1CHZWF8A%2BckCpzog2J32UrlSRe7qxFnbsy6qCfS47Ju8ZvvwJ0MrqyMUTzuF3QdvQGPmcIs6RuJu0M5Io2b9AUJCcLe9%2BUyXt6ROZc%2FL6RhHOZmPR8HNC6uV3SpK%2FhGEsAYh37TaXZCM70y2Ktf%2BWgOVsWQ0j8YVerEr64wrd4%2FGup26mOb4ACgQtjdwdciqVO%2FL%2FtialKieQe3pL5kEMMpUA2%2Bj%2B3HfQmmQmC4ubkfHWELq1y56lKzJU01sud1VhdLn9dVY6rt3KEweFYQwJmcKlq2sactd8YsiLqMPhVdfoBuKUGRrp4Hilupw9OLatRoscqUjdD2bPFog4pQEQ%2FZk0EMf3QBnavcfvGqBs3PrvpbZDW9EW9RxAUm%2B7lD6SQmHp%2BA5FuuDr79nD7NmUJF0MzC5k%2BHCBjqkAaNTt7swGoCSVjdtV1O2h8HwmAx9RHSLWHdsKgZ4XjpplVIl1CgC82AwtuNfpV0%2FqrZF5HyI2HOMq63fX7gbA1WhwMc4hsPjLJnjY8ag3WIeyCCGSKRyjbDYHpeyBO7NgO53Mo%2BirfH%2Ft%2FREMwF0xOzpJAd3T2ZgdiLYeTgccPgCs9yVyxbCISWtEfpAqRvhwDkUDBp93j%2BQQIbzaMdmQTr4jqV4&X-Amz-Signature=e12ce34858a7a9b695cd147e2315a011f02693bc77d50fd13cabdd118d7b93dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GP66QLU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDG7eI%2BhBwYutW5v7Lw5HpmB8kxBOAQiPI8tEtKFm9NyAIhAIxwJ%2F8ZGdWRzRYruo9lruTaOteYpM%2F0CQQY0%2FUUaANVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkwXvnPreIkOP2Zu8q3AN8DrjVC0KuRhew7xAgMCaqiu6hSMqZGGLM55Et9Qa9769UkUaZEJh3j94NDwyfbIo%2Fp3WbcOT8dI%2BlLkvFnKOl31v6ki74iU8zDl4gId1OkgywfrhvjUoPeyG8gvihuIQxREHInh0DiZQDodk9pesC%2BEpaD9TNGRZVD4k4NxNtvhfu7jnGSLsSfrtdzFmGmm8K8EyUr5uZUKzwGglKSyi%2FGh7EJ0b253oe1CHZWF8A%2BckCpzog2J32UrlSRe7qxFnbsy6qCfS47Ju8ZvvwJ0MrqyMUTzuF3QdvQGPmcIs6RuJu0M5Io2b9AUJCcLe9%2BUyXt6ROZc%2FL6RhHOZmPR8HNC6uV3SpK%2FhGEsAYh37TaXZCM70y2Ktf%2BWgOVsWQ0j8YVerEr64wrd4%2FGup26mOb4ACgQtjdwdciqVO%2FL%2FtialKieQe3pL5kEMMpUA2%2Bj%2B3HfQmmQmC4ubkfHWELq1y56lKzJU01sud1VhdLn9dVY6rt3KEweFYQwJmcKlq2sactd8YsiLqMPhVdfoBuKUGRrp4Hilupw9OLatRoscqUjdD2bPFog4pQEQ%2FZk0EMf3QBnavcfvGqBs3PrvpbZDW9EW9RxAUm%2B7lD6SQmHp%2BA5FuuDr79nD7NmUJF0MzC5k%2BHCBjqkAaNTt7swGoCSVjdtV1O2h8HwmAx9RHSLWHdsKgZ4XjpplVIl1CgC82AwtuNfpV0%2FqrZF5HyI2HOMq63fX7gbA1WhwMc4hsPjLJnjY8ag3WIeyCCGSKRyjbDYHpeyBO7NgO53Mo%2BirfH%2Ft%2FREMwF0xOzpJAd3T2ZgdiLYeTgccPgCs9yVyxbCISWtEfpAqRvhwDkUDBp93j%2BQQIbzaMdmQTr4jqV4&X-Amz-Signature=cffe3cbac15d137d76a6da5c8dc7dc69885899ff42f774a0900c1c5d7bd5e88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GP66QLU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDG7eI%2BhBwYutW5v7Lw5HpmB8kxBOAQiPI8tEtKFm9NyAIhAIxwJ%2F8ZGdWRzRYruo9lruTaOteYpM%2F0CQQY0%2FUUaANVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkwXvnPreIkOP2Zu8q3AN8DrjVC0KuRhew7xAgMCaqiu6hSMqZGGLM55Et9Qa9769UkUaZEJh3j94NDwyfbIo%2Fp3WbcOT8dI%2BlLkvFnKOl31v6ki74iU8zDl4gId1OkgywfrhvjUoPeyG8gvihuIQxREHInh0DiZQDodk9pesC%2BEpaD9TNGRZVD4k4NxNtvhfu7jnGSLsSfrtdzFmGmm8K8EyUr5uZUKzwGglKSyi%2FGh7EJ0b253oe1CHZWF8A%2BckCpzog2J32UrlSRe7qxFnbsy6qCfS47Ju8ZvvwJ0MrqyMUTzuF3QdvQGPmcIs6RuJu0M5Io2b9AUJCcLe9%2BUyXt6ROZc%2FL6RhHOZmPR8HNC6uV3SpK%2FhGEsAYh37TaXZCM70y2Ktf%2BWgOVsWQ0j8YVerEr64wrd4%2FGup26mOb4ACgQtjdwdciqVO%2FL%2FtialKieQe3pL5kEMMpUA2%2Bj%2B3HfQmmQmC4ubkfHWELq1y56lKzJU01sud1VhdLn9dVY6rt3KEweFYQwJmcKlq2sactd8YsiLqMPhVdfoBuKUGRrp4Hilupw9OLatRoscqUjdD2bPFog4pQEQ%2FZk0EMf3QBnavcfvGqBs3PrvpbZDW9EW9RxAUm%2B7lD6SQmHp%2BA5FuuDr79nD7NmUJF0MzC5k%2BHCBjqkAaNTt7swGoCSVjdtV1O2h8HwmAx9RHSLWHdsKgZ4XjpplVIl1CgC82AwtuNfpV0%2FqrZF5HyI2HOMq63fX7gbA1WhwMc4hsPjLJnjY8ag3WIeyCCGSKRyjbDYHpeyBO7NgO53Mo%2BirfH%2Ft%2FREMwF0xOzpJAd3T2ZgdiLYeTgccPgCs9yVyxbCISWtEfpAqRvhwDkUDBp93j%2BQQIbzaMdmQTr4jqV4&X-Amz-Signature=c2d86c8ed82c0aaf18f488d57aa08cddf388b5c65d5cfa3159d135c7cbe17d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GP66QLU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDG7eI%2BhBwYutW5v7Lw5HpmB8kxBOAQiPI8tEtKFm9NyAIhAIxwJ%2F8ZGdWRzRYruo9lruTaOteYpM%2F0CQQY0%2FUUaANVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkwXvnPreIkOP2Zu8q3AN8DrjVC0KuRhew7xAgMCaqiu6hSMqZGGLM55Et9Qa9769UkUaZEJh3j94NDwyfbIo%2Fp3WbcOT8dI%2BlLkvFnKOl31v6ki74iU8zDl4gId1OkgywfrhvjUoPeyG8gvihuIQxREHInh0DiZQDodk9pesC%2BEpaD9TNGRZVD4k4NxNtvhfu7jnGSLsSfrtdzFmGmm8K8EyUr5uZUKzwGglKSyi%2FGh7EJ0b253oe1CHZWF8A%2BckCpzog2J32UrlSRe7qxFnbsy6qCfS47Ju8ZvvwJ0MrqyMUTzuF3QdvQGPmcIs6RuJu0M5Io2b9AUJCcLe9%2BUyXt6ROZc%2FL6RhHOZmPR8HNC6uV3SpK%2FhGEsAYh37TaXZCM70y2Ktf%2BWgOVsWQ0j8YVerEr64wrd4%2FGup26mOb4ACgQtjdwdciqVO%2FL%2FtialKieQe3pL5kEMMpUA2%2Bj%2B3HfQmmQmC4ubkfHWELq1y56lKzJU01sud1VhdLn9dVY6rt3KEweFYQwJmcKlq2sactd8YsiLqMPhVdfoBuKUGRrp4Hilupw9OLatRoscqUjdD2bPFog4pQEQ%2FZk0EMf3QBnavcfvGqBs3PrvpbZDW9EW9RxAUm%2B7lD6SQmHp%2BA5FuuDr79nD7NmUJF0MzC5k%2BHCBjqkAaNTt7swGoCSVjdtV1O2h8HwmAx9RHSLWHdsKgZ4XjpplVIl1CgC82AwtuNfpV0%2FqrZF5HyI2HOMq63fX7gbA1WhwMc4hsPjLJnjY8ag3WIeyCCGSKRyjbDYHpeyBO7NgO53Mo%2BirfH%2Ft%2FREMwF0xOzpJAd3T2ZgdiLYeTgccPgCs9yVyxbCISWtEfpAqRvhwDkUDBp93j%2BQQIbzaMdmQTr4jqV4&X-Amz-Signature=cd5454e8257fdeb742797edfee0f74e06cb37f5220b15a66fdf8dd1f13871411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GP66QLU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDG7eI%2BhBwYutW5v7Lw5HpmB8kxBOAQiPI8tEtKFm9NyAIhAIxwJ%2F8ZGdWRzRYruo9lruTaOteYpM%2F0CQQY0%2FUUaANVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkwXvnPreIkOP2Zu8q3AN8DrjVC0KuRhew7xAgMCaqiu6hSMqZGGLM55Et9Qa9769UkUaZEJh3j94NDwyfbIo%2Fp3WbcOT8dI%2BlLkvFnKOl31v6ki74iU8zDl4gId1OkgywfrhvjUoPeyG8gvihuIQxREHInh0DiZQDodk9pesC%2BEpaD9TNGRZVD4k4NxNtvhfu7jnGSLsSfrtdzFmGmm8K8EyUr5uZUKzwGglKSyi%2FGh7EJ0b253oe1CHZWF8A%2BckCpzog2J32UrlSRe7qxFnbsy6qCfS47Ju8ZvvwJ0MrqyMUTzuF3QdvQGPmcIs6RuJu0M5Io2b9AUJCcLe9%2BUyXt6ROZc%2FL6RhHOZmPR8HNC6uV3SpK%2FhGEsAYh37TaXZCM70y2Ktf%2BWgOVsWQ0j8YVerEr64wrd4%2FGup26mOb4ACgQtjdwdciqVO%2FL%2FtialKieQe3pL5kEMMpUA2%2Bj%2B3HfQmmQmC4ubkfHWELq1y56lKzJU01sud1VhdLn9dVY6rt3KEweFYQwJmcKlq2sactd8YsiLqMPhVdfoBuKUGRrp4Hilupw9OLatRoscqUjdD2bPFog4pQEQ%2FZk0EMf3QBnavcfvGqBs3PrvpbZDW9EW9RxAUm%2B7lD6SQmHp%2BA5FuuDr79nD7NmUJF0MzC5k%2BHCBjqkAaNTt7swGoCSVjdtV1O2h8HwmAx9RHSLWHdsKgZ4XjpplVIl1CgC82AwtuNfpV0%2FqrZF5HyI2HOMq63fX7gbA1WhwMc4hsPjLJnjY8ag3WIeyCCGSKRyjbDYHpeyBO7NgO53Mo%2BirfH%2Ft%2FREMwF0xOzpJAd3T2ZgdiLYeTgccPgCs9yVyxbCISWtEfpAqRvhwDkUDBp93j%2BQQIbzaMdmQTr4jqV4&X-Amz-Signature=8c51b2c091b6dc12df84c238a9d045f8ace94ba5f85076173abf522993cd181e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GP66QLU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDG7eI%2BhBwYutW5v7Lw5HpmB8kxBOAQiPI8tEtKFm9NyAIhAIxwJ%2F8ZGdWRzRYruo9lruTaOteYpM%2F0CQQY0%2FUUaANVKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkwXvnPreIkOP2Zu8q3AN8DrjVC0KuRhew7xAgMCaqiu6hSMqZGGLM55Et9Qa9769UkUaZEJh3j94NDwyfbIo%2Fp3WbcOT8dI%2BlLkvFnKOl31v6ki74iU8zDl4gId1OkgywfrhvjUoPeyG8gvihuIQxREHInh0DiZQDodk9pesC%2BEpaD9TNGRZVD4k4NxNtvhfu7jnGSLsSfrtdzFmGmm8K8EyUr5uZUKzwGglKSyi%2FGh7EJ0b253oe1CHZWF8A%2BckCpzog2J32UrlSRe7qxFnbsy6qCfS47Ju8ZvvwJ0MrqyMUTzuF3QdvQGPmcIs6RuJu0M5Io2b9AUJCcLe9%2BUyXt6ROZc%2FL6RhHOZmPR8HNC6uV3SpK%2FhGEsAYh37TaXZCM70y2Ktf%2BWgOVsWQ0j8YVerEr64wrd4%2FGup26mOb4ACgQtjdwdciqVO%2FL%2FtialKieQe3pL5kEMMpUA2%2Bj%2B3HfQmmQmC4ubkfHWELq1y56lKzJU01sud1VhdLn9dVY6rt3KEweFYQwJmcKlq2sactd8YsiLqMPhVdfoBuKUGRrp4Hilupw9OLatRoscqUjdD2bPFog4pQEQ%2FZk0EMf3QBnavcfvGqBs3PrvpbZDW9EW9RxAUm%2B7lD6SQmHp%2BA5FuuDr79nD7NmUJF0MzC5k%2BHCBjqkAaNTt7swGoCSVjdtV1O2h8HwmAx9RHSLWHdsKgZ4XjpplVIl1CgC82AwtuNfpV0%2FqrZF5HyI2HOMq63fX7gbA1WhwMc4hsPjLJnjY8ag3WIeyCCGSKRyjbDYHpeyBO7NgO53Mo%2BirfH%2Ft%2FREMwF0xOzpJAd3T2ZgdiLYeTgccPgCs9yVyxbCISWtEfpAqRvhwDkUDBp93j%2BQQIbzaMdmQTr4jqV4&X-Amz-Signature=252a9ad79f36892ed0894b04da77d22007bed22c43bb43ebc170135c2aace0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
