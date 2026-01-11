---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ4L4W5%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDaZq3mxa9%2BRLYaZpEcTAuw7wG4xMrRIoQ1BmhLMpQEEAiADuysj4wsjIRuTE1g4MvFcuv8BphTVR%2FZDyPg586ddFiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1ntlkmytMiSe2RJKtwDTMJZXKc6BGDtLjORr%2F5baXXz2ElOucYzyKY7J1nhTiLLVXEUpEvbmhL4J%2F9gUEYiX70DlYCaOj7xBX7u6RHpK8Ahvj%2B2CPZfVcPSH14CUF5kVH2wNSC0NTvwIEEaWoyiCHu4QVz2JKENYKuin5rq9WKN%2FI8NQeGidjB1wnO5STCYdFCNaSMw8NvwNIfgP%2FC%2FtK4wywahNS2RE9daW5jI6C%2BTZDSeVUWXklIv3fFEAMyxyNJdnBE19bW0x%2BHKInDvS%2FWRIduRvL9sF6XP95OcJtq7gjuoWm4yRhFlgZ%2BDzrx58BOGHpGlrx9BlUTpYV0yQSv5pgkBrALnwgT8SEM2Xuk8wg7vWJ6hsSceBsrx4OhGF2K47%2F6w8zo4kpkiJafO69gaQtxw3fxRI81j905zL7J2apYz%2BbgNe%2Fm7vC%2BKqUBoVKmLLjc9zXqeVPY12KAfp3Xz6gPKb3%2F9wxrmiSTiT0%2BHLCRxIC%2FoCNsz88661%2FElT6L8ZDmyVo9nrZFMMRFfgc77MB6KlnXZv%2BjXisOGnIrfoLJtM6DOm9ScJaIhOvRTWitB9x9jTr1ZRnWTdkibIqnhrWiG%2FfEYiEVXPzujKTXc9Co61ZXuh0Pz2ARdSG2l9kctee4TxslSol8wvYKMywY6pgGObq5GPT4HvyRST29J4U8MaJHe0nCR9HUWbiiXs5ylCqNU%2B0np3VcbFTrgFUM6olJoMaTc6htXWglL2HOF6Q7jZKO8tyNwOjIPd3lHNsSezyJ2GJwubix4e5JXS0JyjajZT3B%2FW8JrB3ItDobaDe4%2FVNjbYQu56K7MxF5QSXDAVxSoj6D3E62AhuZ7p8L38NFhC3ome6%2BmqGNxKhlnMqhFoDiGEPZ0&X-Amz-Signature=67279582aee7aefde13e02650349e98b1e91c2f5ba8069bd99881e355b7cffee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ4L4W5%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDaZq3mxa9%2BRLYaZpEcTAuw7wG4xMrRIoQ1BmhLMpQEEAiADuysj4wsjIRuTE1g4MvFcuv8BphTVR%2FZDyPg586ddFiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1ntlkmytMiSe2RJKtwDTMJZXKc6BGDtLjORr%2F5baXXz2ElOucYzyKY7J1nhTiLLVXEUpEvbmhL4J%2F9gUEYiX70DlYCaOj7xBX7u6RHpK8Ahvj%2B2CPZfVcPSH14CUF5kVH2wNSC0NTvwIEEaWoyiCHu4QVz2JKENYKuin5rq9WKN%2FI8NQeGidjB1wnO5STCYdFCNaSMw8NvwNIfgP%2FC%2FtK4wywahNS2RE9daW5jI6C%2BTZDSeVUWXklIv3fFEAMyxyNJdnBE19bW0x%2BHKInDvS%2FWRIduRvL9sF6XP95OcJtq7gjuoWm4yRhFlgZ%2BDzrx58BOGHpGlrx9BlUTpYV0yQSv5pgkBrALnwgT8SEM2Xuk8wg7vWJ6hsSceBsrx4OhGF2K47%2F6w8zo4kpkiJafO69gaQtxw3fxRI81j905zL7J2apYz%2BbgNe%2Fm7vC%2BKqUBoVKmLLjc9zXqeVPY12KAfp3Xz6gPKb3%2F9wxrmiSTiT0%2BHLCRxIC%2FoCNsz88661%2FElT6L8ZDmyVo9nrZFMMRFfgc77MB6KlnXZv%2BjXisOGnIrfoLJtM6DOm9ScJaIhOvRTWitB9x9jTr1ZRnWTdkibIqnhrWiG%2FfEYiEVXPzujKTXc9Co61ZXuh0Pz2ARdSG2l9kctee4TxslSol8wvYKMywY6pgGObq5GPT4HvyRST29J4U8MaJHe0nCR9HUWbiiXs5ylCqNU%2B0np3VcbFTrgFUM6olJoMaTc6htXWglL2HOF6Q7jZKO8tyNwOjIPd3lHNsSezyJ2GJwubix4e5JXS0JyjajZT3B%2FW8JrB3ItDobaDe4%2FVNjbYQu56K7MxF5QSXDAVxSoj6D3E62AhuZ7p8L38NFhC3ome6%2BmqGNxKhlnMqhFoDiGEPZ0&X-Amz-Signature=810f763b7276d966f3675537b478de326dedcabf24e9fa4c4b3f171a4b264a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ4L4W5%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDaZq3mxa9%2BRLYaZpEcTAuw7wG4xMrRIoQ1BmhLMpQEEAiADuysj4wsjIRuTE1g4MvFcuv8BphTVR%2FZDyPg586ddFiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1ntlkmytMiSe2RJKtwDTMJZXKc6BGDtLjORr%2F5baXXz2ElOucYzyKY7J1nhTiLLVXEUpEvbmhL4J%2F9gUEYiX70DlYCaOj7xBX7u6RHpK8Ahvj%2B2CPZfVcPSH14CUF5kVH2wNSC0NTvwIEEaWoyiCHu4QVz2JKENYKuin5rq9WKN%2FI8NQeGidjB1wnO5STCYdFCNaSMw8NvwNIfgP%2FC%2FtK4wywahNS2RE9daW5jI6C%2BTZDSeVUWXklIv3fFEAMyxyNJdnBE19bW0x%2BHKInDvS%2FWRIduRvL9sF6XP95OcJtq7gjuoWm4yRhFlgZ%2BDzrx58BOGHpGlrx9BlUTpYV0yQSv5pgkBrALnwgT8SEM2Xuk8wg7vWJ6hsSceBsrx4OhGF2K47%2F6w8zo4kpkiJafO69gaQtxw3fxRI81j905zL7J2apYz%2BbgNe%2Fm7vC%2BKqUBoVKmLLjc9zXqeVPY12KAfp3Xz6gPKb3%2F9wxrmiSTiT0%2BHLCRxIC%2FoCNsz88661%2FElT6L8ZDmyVo9nrZFMMRFfgc77MB6KlnXZv%2BjXisOGnIrfoLJtM6DOm9ScJaIhOvRTWitB9x9jTr1ZRnWTdkibIqnhrWiG%2FfEYiEVXPzujKTXc9Co61ZXuh0Pz2ARdSG2l9kctee4TxslSol8wvYKMywY6pgGObq5GPT4HvyRST29J4U8MaJHe0nCR9HUWbiiXs5ylCqNU%2B0np3VcbFTrgFUM6olJoMaTc6htXWglL2HOF6Q7jZKO8tyNwOjIPd3lHNsSezyJ2GJwubix4e5JXS0JyjajZT3B%2FW8JrB3ItDobaDe4%2FVNjbYQu56K7MxF5QSXDAVxSoj6D3E62AhuZ7p8L38NFhC3ome6%2BmqGNxKhlnMqhFoDiGEPZ0&X-Amz-Signature=8a79d6f79009c8fda713f9a9c93376c3875248e08a72f4a2c49bca9b33ac1f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ4L4W5%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDaZq3mxa9%2BRLYaZpEcTAuw7wG4xMrRIoQ1BmhLMpQEEAiADuysj4wsjIRuTE1g4MvFcuv8BphTVR%2FZDyPg586ddFiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1ntlkmytMiSe2RJKtwDTMJZXKc6BGDtLjORr%2F5baXXz2ElOucYzyKY7J1nhTiLLVXEUpEvbmhL4J%2F9gUEYiX70DlYCaOj7xBX7u6RHpK8Ahvj%2B2CPZfVcPSH14CUF5kVH2wNSC0NTvwIEEaWoyiCHu4QVz2JKENYKuin5rq9WKN%2FI8NQeGidjB1wnO5STCYdFCNaSMw8NvwNIfgP%2FC%2FtK4wywahNS2RE9daW5jI6C%2BTZDSeVUWXklIv3fFEAMyxyNJdnBE19bW0x%2BHKInDvS%2FWRIduRvL9sF6XP95OcJtq7gjuoWm4yRhFlgZ%2BDzrx58BOGHpGlrx9BlUTpYV0yQSv5pgkBrALnwgT8SEM2Xuk8wg7vWJ6hsSceBsrx4OhGF2K47%2F6w8zo4kpkiJafO69gaQtxw3fxRI81j905zL7J2apYz%2BbgNe%2Fm7vC%2BKqUBoVKmLLjc9zXqeVPY12KAfp3Xz6gPKb3%2F9wxrmiSTiT0%2BHLCRxIC%2FoCNsz88661%2FElT6L8ZDmyVo9nrZFMMRFfgc77MB6KlnXZv%2BjXisOGnIrfoLJtM6DOm9ScJaIhOvRTWitB9x9jTr1ZRnWTdkibIqnhrWiG%2FfEYiEVXPzujKTXc9Co61ZXuh0Pz2ARdSG2l9kctee4TxslSol8wvYKMywY6pgGObq5GPT4HvyRST29J4U8MaJHe0nCR9HUWbiiXs5ylCqNU%2B0np3VcbFTrgFUM6olJoMaTc6htXWglL2HOF6Q7jZKO8tyNwOjIPd3lHNsSezyJ2GJwubix4e5JXS0JyjajZT3B%2FW8JrB3ItDobaDe4%2FVNjbYQu56K7MxF5QSXDAVxSoj6D3E62AhuZ7p8L38NFhC3ome6%2BmqGNxKhlnMqhFoDiGEPZ0&X-Amz-Signature=233048988153349b42afa6decc1ecd4c671b251c6f453ce0b3fbe42476ac5e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ4L4W5%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDaZq3mxa9%2BRLYaZpEcTAuw7wG4xMrRIoQ1BmhLMpQEEAiADuysj4wsjIRuTE1g4MvFcuv8BphTVR%2FZDyPg586ddFiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1ntlkmytMiSe2RJKtwDTMJZXKc6BGDtLjORr%2F5baXXz2ElOucYzyKY7J1nhTiLLVXEUpEvbmhL4J%2F9gUEYiX70DlYCaOj7xBX7u6RHpK8Ahvj%2B2CPZfVcPSH14CUF5kVH2wNSC0NTvwIEEaWoyiCHu4QVz2JKENYKuin5rq9WKN%2FI8NQeGidjB1wnO5STCYdFCNaSMw8NvwNIfgP%2FC%2FtK4wywahNS2RE9daW5jI6C%2BTZDSeVUWXklIv3fFEAMyxyNJdnBE19bW0x%2BHKInDvS%2FWRIduRvL9sF6XP95OcJtq7gjuoWm4yRhFlgZ%2BDzrx58BOGHpGlrx9BlUTpYV0yQSv5pgkBrALnwgT8SEM2Xuk8wg7vWJ6hsSceBsrx4OhGF2K47%2F6w8zo4kpkiJafO69gaQtxw3fxRI81j905zL7J2apYz%2BbgNe%2Fm7vC%2BKqUBoVKmLLjc9zXqeVPY12KAfp3Xz6gPKb3%2F9wxrmiSTiT0%2BHLCRxIC%2FoCNsz88661%2FElT6L8ZDmyVo9nrZFMMRFfgc77MB6KlnXZv%2BjXisOGnIrfoLJtM6DOm9ScJaIhOvRTWitB9x9jTr1ZRnWTdkibIqnhrWiG%2FfEYiEVXPzujKTXc9Co61ZXuh0Pz2ARdSG2l9kctee4TxslSol8wvYKMywY6pgGObq5GPT4HvyRST29J4U8MaJHe0nCR9HUWbiiXs5ylCqNU%2B0np3VcbFTrgFUM6olJoMaTc6htXWglL2HOF6Q7jZKO8tyNwOjIPd3lHNsSezyJ2GJwubix4e5JXS0JyjajZT3B%2FW8JrB3ItDobaDe4%2FVNjbYQu56K7MxF5QSXDAVxSoj6D3E62AhuZ7p8L38NFhC3ome6%2BmqGNxKhlnMqhFoDiGEPZ0&X-Amz-Signature=3a965afad12f823fe7183c0c563c171fdceef3b1e5b993d397b970d8a3d7d5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ4L4W5%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDaZq3mxa9%2BRLYaZpEcTAuw7wG4xMrRIoQ1BmhLMpQEEAiADuysj4wsjIRuTE1g4MvFcuv8BphTVR%2FZDyPg586ddFiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1ntlkmytMiSe2RJKtwDTMJZXKc6BGDtLjORr%2F5baXXz2ElOucYzyKY7J1nhTiLLVXEUpEvbmhL4J%2F9gUEYiX70DlYCaOj7xBX7u6RHpK8Ahvj%2B2CPZfVcPSH14CUF5kVH2wNSC0NTvwIEEaWoyiCHu4QVz2JKENYKuin5rq9WKN%2FI8NQeGidjB1wnO5STCYdFCNaSMw8NvwNIfgP%2FC%2FtK4wywahNS2RE9daW5jI6C%2BTZDSeVUWXklIv3fFEAMyxyNJdnBE19bW0x%2BHKInDvS%2FWRIduRvL9sF6XP95OcJtq7gjuoWm4yRhFlgZ%2BDzrx58BOGHpGlrx9BlUTpYV0yQSv5pgkBrALnwgT8SEM2Xuk8wg7vWJ6hsSceBsrx4OhGF2K47%2F6w8zo4kpkiJafO69gaQtxw3fxRI81j905zL7J2apYz%2BbgNe%2Fm7vC%2BKqUBoVKmLLjc9zXqeVPY12KAfp3Xz6gPKb3%2F9wxrmiSTiT0%2BHLCRxIC%2FoCNsz88661%2FElT6L8ZDmyVo9nrZFMMRFfgc77MB6KlnXZv%2BjXisOGnIrfoLJtM6DOm9ScJaIhOvRTWitB9x9jTr1ZRnWTdkibIqnhrWiG%2FfEYiEVXPzujKTXc9Co61ZXuh0Pz2ARdSG2l9kctee4TxslSol8wvYKMywY6pgGObq5GPT4HvyRST29J4U8MaJHe0nCR9HUWbiiXs5ylCqNU%2B0np3VcbFTrgFUM6olJoMaTc6htXWglL2HOF6Q7jZKO8tyNwOjIPd3lHNsSezyJ2GJwubix4e5JXS0JyjajZT3B%2FW8JrB3ItDobaDe4%2FVNjbYQu56K7MxF5QSXDAVxSoj6D3E62AhuZ7p8L38NFhC3ome6%2BmqGNxKhlnMqhFoDiGEPZ0&X-Amz-Signature=bc02fa775f994329ddfd8f5e932af230fee45fd52e36ebe284d3c9ad41964f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PJ4L4W5%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDaZq3mxa9%2BRLYaZpEcTAuw7wG4xMrRIoQ1BmhLMpQEEAiADuysj4wsjIRuTE1g4MvFcuv8BphTVR%2FZDyPg586ddFiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1ntlkmytMiSe2RJKtwDTMJZXKc6BGDtLjORr%2F5baXXz2ElOucYzyKY7J1nhTiLLVXEUpEvbmhL4J%2F9gUEYiX70DlYCaOj7xBX7u6RHpK8Ahvj%2B2CPZfVcPSH14CUF5kVH2wNSC0NTvwIEEaWoyiCHu4QVz2JKENYKuin5rq9WKN%2FI8NQeGidjB1wnO5STCYdFCNaSMw8NvwNIfgP%2FC%2FtK4wywahNS2RE9daW5jI6C%2BTZDSeVUWXklIv3fFEAMyxyNJdnBE19bW0x%2BHKInDvS%2FWRIduRvL9sF6XP95OcJtq7gjuoWm4yRhFlgZ%2BDzrx58BOGHpGlrx9BlUTpYV0yQSv5pgkBrALnwgT8SEM2Xuk8wg7vWJ6hsSceBsrx4OhGF2K47%2F6w8zo4kpkiJafO69gaQtxw3fxRI81j905zL7J2apYz%2BbgNe%2Fm7vC%2BKqUBoVKmLLjc9zXqeVPY12KAfp3Xz6gPKb3%2F9wxrmiSTiT0%2BHLCRxIC%2FoCNsz88661%2FElT6L8ZDmyVo9nrZFMMRFfgc77MB6KlnXZv%2BjXisOGnIrfoLJtM6DOm9ScJaIhOvRTWitB9x9jTr1ZRnWTdkibIqnhrWiG%2FfEYiEVXPzujKTXc9Co61ZXuh0Pz2ARdSG2l9kctee4TxslSol8wvYKMywY6pgGObq5GPT4HvyRST29J4U8MaJHe0nCR9HUWbiiXs5ylCqNU%2B0np3VcbFTrgFUM6olJoMaTc6htXWglL2HOF6Q7jZKO8tyNwOjIPd3lHNsSezyJ2GJwubix4e5JXS0JyjajZT3B%2FW8JrB3ItDobaDe4%2FVNjbYQu56K7MxF5QSXDAVxSoj6D3E62AhuZ7p8L38NFhC3ome6%2BmqGNxKhlnMqhFoDiGEPZ0&X-Amz-Signature=4c472edf3710eb1dde87c5f2df94fef6747bf8620773be156ee2181580d58167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
