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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7MJ72J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBkfn9uZ4JxeO6sjldFMCwSYEVXUWYVKfG6YlcPvofQIgDh4MPnFDfJiBFQ%2F6huXQq3N9Eo6kl0DsrakCphji8tEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcbjgzlFnLiGl90qircA2wFaniJx8UiayOhjKvjkxLcqj0U5zMh9mgEM5XA7nQnawPGonJfzFEekc6QOUGx%2BWDXiSa9TUSYqcBWdZxKo1FV5KB6cbBAyL36zZ9PeutYTsEfrwWWxIH%2FFbG%2FTt8rdL3i%2FLKSnhRxFzux9SmA%2BxBctqC89uoPwdSkZl8yIPlnIcbTFQYsx1fO3R31Y4jEVaCAIRfXUrcYLKP8rhkH6jwPu%2B%2BvwNQzEOkhWVnskxN0vVRNQtW%2Bh0pshroOKBWLyTscl6EBz7Y47RJUUsVjUJmHRpPjHqWcDdi2BPrjUF3cVI0x%2BaoO2mQKVsgM4D2GTFRIs6gyl9r3ISI5WeXhe19VVAnNyI6YiZO97e97wO8zNI94qd7Dj%2BMWoouul21sTXfsLyJ2vdVDhlagyytz4nXJ3LG%2FOA1e0qnNw%2FPqUz51AwyLKfjwVuGWjk2DmsVg4n2p8LU14iZx81E6aX%2FbfDGjiW1u32Rc0%2FGdV3TnvdoDL%2BuW954xYVO70jfXW25affJSQ2gPXNIL7Bg886BENM67a2nwWQYOG5tpiWcAMWwzMh5PAFamHCkmnyHCkI46qN326RycsQzXqZ9cl33ZkJP9P5yvmgA3%2FjkbkCyr%2FmVlUoSTHXJjoe7sIzNuMKi7y74GOqUBriFqmSIWfdjeb8nZHswMczUkL0uAiFDUfIUAIr45f%2BEALdliCNFIXOg3Vbht1hIw0rbodE4G2xOwibtwtoriUKfAL1u7mlst5dNLJBKgZjN0ijGPzMMN4fxCq9xXwsE4rZA%2B8Z6t7M%2FHgNeP49QnZxIn3NodoZULdyE5mT65mPganJxnU1%2F6znXIYWIHl8sYn0BwlkaLFFdDs8QZPGldWuQaLEGq&X-Amz-Signature=a0f242dfeba305f72ea7af15184ea48db066a310a339a787b648d4b6662b53f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7MJ72J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBkfn9uZ4JxeO6sjldFMCwSYEVXUWYVKfG6YlcPvofQIgDh4MPnFDfJiBFQ%2F6huXQq3N9Eo6kl0DsrakCphji8tEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcbjgzlFnLiGl90qircA2wFaniJx8UiayOhjKvjkxLcqj0U5zMh9mgEM5XA7nQnawPGonJfzFEekc6QOUGx%2BWDXiSa9TUSYqcBWdZxKo1FV5KB6cbBAyL36zZ9PeutYTsEfrwWWxIH%2FFbG%2FTt8rdL3i%2FLKSnhRxFzux9SmA%2BxBctqC89uoPwdSkZl8yIPlnIcbTFQYsx1fO3R31Y4jEVaCAIRfXUrcYLKP8rhkH6jwPu%2B%2BvwNQzEOkhWVnskxN0vVRNQtW%2Bh0pshroOKBWLyTscl6EBz7Y47RJUUsVjUJmHRpPjHqWcDdi2BPrjUF3cVI0x%2BaoO2mQKVsgM4D2GTFRIs6gyl9r3ISI5WeXhe19VVAnNyI6YiZO97e97wO8zNI94qd7Dj%2BMWoouul21sTXfsLyJ2vdVDhlagyytz4nXJ3LG%2FOA1e0qnNw%2FPqUz51AwyLKfjwVuGWjk2DmsVg4n2p8LU14iZx81E6aX%2FbfDGjiW1u32Rc0%2FGdV3TnvdoDL%2BuW954xYVO70jfXW25affJSQ2gPXNIL7Bg886BENM67a2nwWQYOG5tpiWcAMWwzMh5PAFamHCkmnyHCkI46qN326RycsQzXqZ9cl33ZkJP9P5yvmgA3%2FjkbkCyr%2FmVlUoSTHXJjoe7sIzNuMKi7y74GOqUBriFqmSIWfdjeb8nZHswMczUkL0uAiFDUfIUAIr45f%2BEALdliCNFIXOg3Vbht1hIw0rbodE4G2xOwibtwtoriUKfAL1u7mlst5dNLJBKgZjN0ijGPzMMN4fxCq9xXwsE4rZA%2B8Z6t7M%2FHgNeP49QnZxIn3NodoZULdyE5mT65mPganJxnU1%2F6znXIYWIHl8sYn0BwlkaLFFdDs8QZPGldWuQaLEGq&X-Amz-Signature=eb355d35761b7b326dbb373d409c1c5481f57f2061e5d9c45e81bd29d04aae8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7MJ72J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBkfn9uZ4JxeO6sjldFMCwSYEVXUWYVKfG6YlcPvofQIgDh4MPnFDfJiBFQ%2F6huXQq3N9Eo6kl0DsrakCphji8tEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcbjgzlFnLiGl90qircA2wFaniJx8UiayOhjKvjkxLcqj0U5zMh9mgEM5XA7nQnawPGonJfzFEekc6QOUGx%2BWDXiSa9TUSYqcBWdZxKo1FV5KB6cbBAyL36zZ9PeutYTsEfrwWWxIH%2FFbG%2FTt8rdL3i%2FLKSnhRxFzux9SmA%2BxBctqC89uoPwdSkZl8yIPlnIcbTFQYsx1fO3R31Y4jEVaCAIRfXUrcYLKP8rhkH6jwPu%2B%2BvwNQzEOkhWVnskxN0vVRNQtW%2Bh0pshroOKBWLyTscl6EBz7Y47RJUUsVjUJmHRpPjHqWcDdi2BPrjUF3cVI0x%2BaoO2mQKVsgM4D2GTFRIs6gyl9r3ISI5WeXhe19VVAnNyI6YiZO97e97wO8zNI94qd7Dj%2BMWoouul21sTXfsLyJ2vdVDhlagyytz4nXJ3LG%2FOA1e0qnNw%2FPqUz51AwyLKfjwVuGWjk2DmsVg4n2p8LU14iZx81E6aX%2FbfDGjiW1u32Rc0%2FGdV3TnvdoDL%2BuW954xYVO70jfXW25affJSQ2gPXNIL7Bg886BENM67a2nwWQYOG5tpiWcAMWwzMh5PAFamHCkmnyHCkI46qN326RycsQzXqZ9cl33ZkJP9P5yvmgA3%2FjkbkCyr%2FmVlUoSTHXJjoe7sIzNuMKi7y74GOqUBriFqmSIWfdjeb8nZHswMczUkL0uAiFDUfIUAIr45f%2BEALdliCNFIXOg3Vbht1hIw0rbodE4G2xOwibtwtoriUKfAL1u7mlst5dNLJBKgZjN0ijGPzMMN4fxCq9xXwsE4rZA%2B8Z6t7M%2FHgNeP49QnZxIn3NodoZULdyE5mT65mPganJxnU1%2F6znXIYWIHl8sYn0BwlkaLFFdDs8QZPGldWuQaLEGq&X-Amz-Signature=305c504b4852ab010110d9339aa06256a244cf57891ef1375782a1df6cd56a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7MJ72J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBkfn9uZ4JxeO6sjldFMCwSYEVXUWYVKfG6YlcPvofQIgDh4MPnFDfJiBFQ%2F6huXQq3N9Eo6kl0DsrakCphji8tEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcbjgzlFnLiGl90qircA2wFaniJx8UiayOhjKvjkxLcqj0U5zMh9mgEM5XA7nQnawPGonJfzFEekc6QOUGx%2BWDXiSa9TUSYqcBWdZxKo1FV5KB6cbBAyL36zZ9PeutYTsEfrwWWxIH%2FFbG%2FTt8rdL3i%2FLKSnhRxFzux9SmA%2BxBctqC89uoPwdSkZl8yIPlnIcbTFQYsx1fO3R31Y4jEVaCAIRfXUrcYLKP8rhkH6jwPu%2B%2BvwNQzEOkhWVnskxN0vVRNQtW%2Bh0pshroOKBWLyTscl6EBz7Y47RJUUsVjUJmHRpPjHqWcDdi2BPrjUF3cVI0x%2BaoO2mQKVsgM4D2GTFRIs6gyl9r3ISI5WeXhe19VVAnNyI6YiZO97e97wO8zNI94qd7Dj%2BMWoouul21sTXfsLyJ2vdVDhlagyytz4nXJ3LG%2FOA1e0qnNw%2FPqUz51AwyLKfjwVuGWjk2DmsVg4n2p8LU14iZx81E6aX%2FbfDGjiW1u32Rc0%2FGdV3TnvdoDL%2BuW954xYVO70jfXW25affJSQ2gPXNIL7Bg886BENM67a2nwWQYOG5tpiWcAMWwzMh5PAFamHCkmnyHCkI46qN326RycsQzXqZ9cl33ZkJP9P5yvmgA3%2FjkbkCyr%2FmVlUoSTHXJjoe7sIzNuMKi7y74GOqUBriFqmSIWfdjeb8nZHswMczUkL0uAiFDUfIUAIr45f%2BEALdliCNFIXOg3Vbht1hIw0rbodE4G2xOwibtwtoriUKfAL1u7mlst5dNLJBKgZjN0ijGPzMMN4fxCq9xXwsE4rZA%2B8Z6t7M%2FHgNeP49QnZxIn3NodoZULdyE5mT65mPganJxnU1%2F6znXIYWIHl8sYn0BwlkaLFFdDs8QZPGldWuQaLEGq&X-Amz-Signature=3fe3f89ad9394eddd7419f51fcba52c248a988cdbfd352b8dbbe02cc927f3a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7MJ72J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBkfn9uZ4JxeO6sjldFMCwSYEVXUWYVKfG6YlcPvofQIgDh4MPnFDfJiBFQ%2F6huXQq3N9Eo6kl0DsrakCphji8tEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcbjgzlFnLiGl90qircA2wFaniJx8UiayOhjKvjkxLcqj0U5zMh9mgEM5XA7nQnawPGonJfzFEekc6QOUGx%2BWDXiSa9TUSYqcBWdZxKo1FV5KB6cbBAyL36zZ9PeutYTsEfrwWWxIH%2FFbG%2FTt8rdL3i%2FLKSnhRxFzux9SmA%2BxBctqC89uoPwdSkZl8yIPlnIcbTFQYsx1fO3R31Y4jEVaCAIRfXUrcYLKP8rhkH6jwPu%2B%2BvwNQzEOkhWVnskxN0vVRNQtW%2Bh0pshroOKBWLyTscl6EBz7Y47RJUUsVjUJmHRpPjHqWcDdi2BPrjUF3cVI0x%2BaoO2mQKVsgM4D2GTFRIs6gyl9r3ISI5WeXhe19VVAnNyI6YiZO97e97wO8zNI94qd7Dj%2BMWoouul21sTXfsLyJ2vdVDhlagyytz4nXJ3LG%2FOA1e0qnNw%2FPqUz51AwyLKfjwVuGWjk2DmsVg4n2p8LU14iZx81E6aX%2FbfDGjiW1u32Rc0%2FGdV3TnvdoDL%2BuW954xYVO70jfXW25affJSQ2gPXNIL7Bg886BENM67a2nwWQYOG5tpiWcAMWwzMh5PAFamHCkmnyHCkI46qN326RycsQzXqZ9cl33ZkJP9P5yvmgA3%2FjkbkCyr%2FmVlUoSTHXJjoe7sIzNuMKi7y74GOqUBriFqmSIWfdjeb8nZHswMczUkL0uAiFDUfIUAIr45f%2BEALdliCNFIXOg3Vbht1hIw0rbodE4G2xOwibtwtoriUKfAL1u7mlst5dNLJBKgZjN0ijGPzMMN4fxCq9xXwsE4rZA%2B8Z6t7M%2FHgNeP49QnZxIn3NodoZULdyE5mT65mPganJxnU1%2F6znXIYWIHl8sYn0BwlkaLFFdDs8QZPGldWuQaLEGq&X-Amz-Signature=3e92f8b0bfd56d511972ee8da9ed9f156f71fecf3f5990229f5903b477e91d84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7MJ72J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBkfn9uZ4JxeO6sjldFMCwSYEVXUWYVKfG6YlcPvofQIgDh4MPnFDfJiBFQ%2F6huXQq3N9Eo6kl0DsrakCphji8tEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcbjgzlFnLiGl90qircA2wFaniJx8UiayOhjKvjkxLcqj0U5zMh9mgEM5XA7nQnawPGonJfzFEekc6QOUGx%2BWDXiSa9TUSYqcBWdZxKo1FV5KB6cbBAyL36zZ9PeutYTsEfrwWWxIH%2FFbG%2FTt8rdL3i%2FLKSnhRxFzux9SmA%2BxBctqC89uoPwdSkZl8yIPlnIcbTFQYsx1fO3R31Y4jEVaCAIRfXUrcYLKP8rhkH6jwPu%2B%2BvwNQzEOkhWVnskxN0vVRNQtW%2Bh0pshroOKBWLyTscl6EBz7Y47RJUUsVjUJmHRpPjHqWcDdi2BPrjUF3cVI0x%2BaoO2mQKVsgM4D2GTFRIs6gyl9r3ISI5WeXhe19VVAnNyI6YiZO97e97wO8zNI94qd7Dj%2BMWoouul21sTXfsLyJ2vdVDhlagyytz4nXJ3LG%2FOA1e0qnNw%2FPqUz51AwyLKfjwVuGWjk2DmsVg4n2p8LU14iZx81E6aX%2FbfDGjiW1u32Rc0%2FGdV3TnvdoDL%2BuW954xYVO70jfXW25affJSQ2gPXNIL7Bg886BENM67a2nwWQYOG5tpiWcAMWwzMh5PAFamHCkmnyHCkI46qN326RycsQzXqZ9cl33ZkJP9P5yvmgA3%2FjkbkCyr%2FmVlUoSTHXJjoe7sIzNuMKi7y74GOqUBriFqmSIWfdjeb8nZHswMczUkL0uAiFDUfIUAIr45f%2BEALdliCNFIXOg3Vbht1hIw0rbodE4G2xOwibtwtoriUKfAL1u7mlst5dNLJBKgZjN0ijGPzMMN4fxCq9xXwsE4rZA%2B8Z6t7M%2FHgNeP49QnZxIn3NodoZULdyE5mT65mPganJxnU1%2F6znXIYWIHl8sYn0BwlkaLFFdDs8QZPGldWuQaLEGq&X-Amz-Signature=7b37df74512cb71611a9b6a558539a5687303d88d108d10355df94ad3d4a6299&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7MJ72J%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgBkfn9uZ4JxeO6sjldFMCwSYEVXUWYVKfG6YlcPvofQIgDh4MPnFDfJiBFQ%2F6huXQq3N9Eo6kl0DsrakCphji8tEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcbjgzlFnLiGl90qircA2wFaniJx8UiayOhjKvjkxLcqj0U5zMh9mgEM5XA7nQnawPGonJfzFEekc6QOUGx%2BWDXiSa9TUSYqcBWdZxKo1FV5KB6cbBAyL36zZ9PeutYTsEfrwWWxIH%2FFbG%2FTt8rdL3i%2FLKSnhRxFzux9SmA%2BxBctqC89uoPwdSkZl8yIPlnIcbTFQYsx1fO3R31Y4jEVaCAIRfXUrcYLKP8rhkH6jwPu%2B%2BvwNQzEOkhWVnskxN0vVRNQtW%2Bh0pshroOKBWLyTscl6EBz7Y47RJUUsVjUJmHRpPjHqWcDdi2BPrjUF3cVI0x%2BaoO2mQKVsgM4D2GTFRIs6gyl9r3ISI5WeXhe19VVAnNyI6YiZO97e97wO8zNI94qd7Dj%2BMWoouul21sTXfsLyJ2vdVDhlagyytz4nXJ3LG%2FOA1e0qnNw%2FPqUz51AwyLKfjwVuGWjk2DmsVg4n2p8LU14iZx81E6aX%2FbfDGjiW1u32Rc0%2FGdV3TnvdoDL%2BuW954xYVO70jfXW25affJSQ2gPXNIL7Bg886BENM67a2nwWQYOG5tpiWcAMWwzMh5PAFamHCkmnyHCkI46qN326RycsQzXqZ9cl33ZkJP9P5yvmgA3%2FjkbkCyr%2FmVlUoSTHXJjoe7sIzNuMKi7y74GOqUBriFqmSIWfdjeb8nZHswMczUkL0uAiFDUfIUAIr45f%2BEALdliCNFIXOg3Vbht1hIw0rbodE4G2xOwibtwtoriUKfAL1u7mlst5dNLJBKgZjN0ijGPzMMN4fxCq9xXwsE4rZA%2B8Z6t7M%2FHgNeP49QnZxIn3NodoZULdyE5mT65mPganJxnU1%2F6znXIYWIHl8sYn0BwlkaLFFdDs8QZPGldWuQaLEGq&X-Amz-Signature=843501232fd4f047566e3a301a8eeef82c2e7d36afc430fd5faa05f9e4d6046c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
