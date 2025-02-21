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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJAS6R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlTQVbjsN1miw%2FB%2B8eRsgMQ7cUwwQIjl3WObmEdkYIOAiEAxh0qCSgIwoGSyqHk%2BzC5ZQR0ygxI6mc%2FdML0kGIc%2BlMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2TWq%2B6qU6jMoLg6yrcA2o3jY5NSn793DN2akUOwz0THUi57Otq8MQsr6xWMdBwGE9m6dedWwOOlkYoQLmCAqHtwNq40W05sLCsgN9no8dLpDKR7hANMiaz8ShO0eYWHKHOh%2FTFMpBNpsBQeNbZbABwaTTjih8%2F2%2BuacU6NvKPPD4ItVIxGxrccvu1xeL2Nyogg8GYeABcEtQ9USmrk3npE0EY%2FljDg4eVsZv0Et%2FSxAzVqN0u1R4M5B8uVVudi%2F9qgTvhm%2F0s5orgJymzkp%2F0Y%2Bc8iopYxN%2BeUZp2%2BB6nqV9KICA4S8ye3OeomuHrTpQ2%2B0T3JCqAc7YJXStCHuypAKEwmpNlAzFiNh3fWie3v9FviAzRUc8m%2BgBbsuxJ7DtwBl57sS2Nu%2BmqJ9vXX02eaw5SCHlCb2Jvx0uk7h3DyprZ1sOYKUuq47OBcln9jRkyFwcn4cwjQm3%2F8W2ewAhkE8l7ajOGBCw5y98kqiC2KyLG5%2FbpfFWni5yIZzwUKh3M6htoPHxDczpKc%2FEhz1IrqA9Ptfa0GKxcLLpvThndmR9qHTvf8IQY2%2FwCowNbZ4IfG%2BXa9aFfvefH5NbfOrfmD4ta4pa4KfjGIR3iTjpCO4JJpXr%2B2nx5VdfzmdNuI1XxEgeWKTmSCChREMPOF4L0GOqUBHRsdu0e2x6Pc1jBH%2Ff%2FXt1PPNh7vwM4wA3wtiT5YOurX2aBB7TtKXXwfonCWHcULV4YJBhrnePlvZetu2ouDInGG1m%2B4T%2B1Yp20tFiSgAnl2iOsoAL9Q0qmydoTLMftK1Sq35A%2BfyaCiLEtW3Yt5%2B2dUurKfr9ma2kTUAqDJ1732he8k3pOq3WykJi8UgJPKdhQRTxDgO2w0HR%2B7sF9URmNELwfE&X-Amz-Signature=5a3ec1a8843803a5cf3335651d9b5b84432dcdf95d59ce44e47e1986abec887c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJAS6R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlTQVbjsN1miw%2FB%2B8eRsgMQ7cUwwQIjl3WObmEdkYIOAiEAxh0qCSgIwoGSyqHk%2BzC5ZQR0ygxI6mc%2FdML0kGIc%2BlMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2TWq%2B6qU6jMoLg6yrcA2o3jY5NSn793DN2akUOwz0THUi57Otq8MQsr6xWMdBwGE9m6dedWwOOlkYoQLmCAqHtwNq40W05sLCsgN9no8dLpDKR7hANMiaz8ShO0eYWHKHOh%2FTFMpBNpsBQeNbZbABwaTTjih8%2F2%2BuacU6NvKPPD4ItVIxGxrccvu1xeL2Nyogg8GYeABcEtQ9USmrk3npE0EY%2FljDg4eVsZv0Et%2FSxAzVqN0u1R4M5B8uVVudi%2F9qgTvhm%2F0s5orgJymzkp%2F0Y%2Bc8iopYxN%2BeUZp2%2BB6nqV9KICA4S8ye3OeomuHrTpQ2%2B0T3JCqAc7YJXStCHuypAKEwmpNlAzFiNh3fWie3v9FviAzRUc8m%2BgBbsuxJ7DtwBl57sS2Nu%2BmqJ9vXX02eaw5SCHlCb2Jvx0uk7h3DyprZ1sOYKUuq47OBcln9jRkyFwcn4cwjQm3%2F8W2ewAhkE8l7ajOGBCw5y98kqiC2KyLG5%2FbpfFWni5yIZzwUKh3M6htoPHxDczpKc%2FEhz1IrqA9Ptfa0GKxcLLpvThndmR9qHTvf8IQY2%2FwCowNbZ4IfG%2BXa9aFfvefH5NbfOrfmD4ta4pa4KfjGIR3iTjpCO4JJpXr%2B2nx5VdfzmdNuI1XxEgeWKTmSCChREMPOF4L0GOqUBHRsdu0e2x6Pc1jBH%2Ff%2FXt1PPNh7vwM4wA3wtiT5YOurX2aBB7TtKXXwfonCWHcULV4YJBhrnePlvZetu2ouDInGG1m%2B4T%2B1Yp20tFiSgAnl2iOsoAL9Q0qmydoTLMftK1Sq35A%2BfyaCiLEtW3Yt5%2B2dUurKfr9ma2kTUAqDJ1732he8k3pOq3WykJi8UgJPKdhQRTxDgO2w0HR%2B7sF9URmNELwfE&X-Amz-Signature=464fea4135996a827faecdf0f2bda3c6f2998f3858ffa3d226f4aece100a2f46&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJAS6R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlTQVbjsN1miw%2FB%2B8eRsgMQ7cUwwQIjl3WObmEdkYIOAiEAxh0qCSgIwoGSyqHk%2BzC5ZQR0ygxI6mc%2FdML0kGIc%2BlMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2TWq%2B6qU6jMoLg6yrcA2o3jY5NSn793DN2akUOwz0THUi57Otq8MQsr6xWMdBwGE9m6dedWwOOlkYoQLmCAqHtwNq40W05sLCsgN9no8dLpDKR7hANMiaz8ShO0eYWHKHOh%2FTFMpBNpsBQeNbZbABwaTTjih8%2F2%2BuacU6NvKPPD4ItVIxGxrccvu1xeL2Nyogg8GYeABcEtQ9USmrk3npE0EY%2FljDg4eVsZv0Et%2FSxAzVqN0u1R4M5B8uVVudi%2F9qgTvhm%2F0s5orgJymzkp%2F0Y%2Bc8iopYxN%2BeUZp2%2BB6nqV9KICA4S8ye3OeomuHrTpQ2%2B0T3JCqAc7YJXStCHuypAKEwmpNlAzFiNh3fWie3v9FviAzRUc8m%2BgBbsuxJ7DtwBl57sS2Nu%2BmqJ9vXX02eaw5SCHlCb2Jvx0uk7h3DyprZ1sOYKUuq47OBcln9jRkyFwcn4cwjQm3%2F8W2ewAhkE8l7ajOGBCw5y98kqiC2KyLG5%2FbpfFWni5yIZzwUKh3M6htoPHxDczpKc%2FEhz1IrqA9Ptfa0GKxcLLpvThndmR9qHTvf8IQY2%2FwCowNbZ4IfG%2BXa9aFfvefH5NbfOrfmD4ta4pa4KfjGIR3iTjpCO4JJpXr%2B2nx5VdfzmdNuI1XxEgeWKTmSCChREMPOF4L0GOqUBHRsdu0e2x6Pc1jBH%2Ff%2FXt1PPNh7vwM4wA3wtiT5YOurX2aBB7TtKXXwfonCWHcULV4YJBhrnePlvZetu2ouDInGG1m%2B4T%2B1Yp20tFiSgAnl2iOsoAL9Q0qmydoTLMftK1Sq35A%2BfyaCiLEtW3Yt5%2B2dUurKfr9ma2kTUAqDJ1732he8k3pOq3WykJi8UgJPKdhQRTxDgO2w0HR%2B7sF9URmNELwfE&X-Amz-Signature=11cd1dfe9612e17d99c2f57d0b3f7f943d4c451cbfb4b9251c5c11bb35bfbf18&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJAS6R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlTQVbjsN1miw%2FB%2B8eRsgMQ7cUwwQIjl3WObmEdkYIOAiEAxh0qCSgIwoGSyqHk%2BzC5ZQR0ygxI6mc%2FdML0kGIc%2BlMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2TWq%2B6qU6jMoLg6yrcA2o3jY5NSn793DN2akUOwz0THUi57Otq8MQsr6xWMdBwGE9m6dedWwOOlkYoQLmCAqHtwNq40W05sLCsgN9no8dLpDKR7hANMiaz8ShO0eYWHKHOh%2FTFMpBNpsBQeNbZbABwaTTjih8%2F2%2BuacU6NvKPPD4ItVIxGxrccvu1xeL2Nyogg8GYeABcEtQ9USmrk3npE0EY%2FljDg4eVsZv0Et%2FSxAzVqN0u1R4M5B8uVVudi%2F9qgTvhm%2F0s5orgJymzkp%2F0Y%2Bc8iopYxN%2BeUZp2%2BB6nqV9KICA4S8ye3OeomuHrTpQ2%2B0T3JCqAc7YJXStCHuypAKEwmpNlAzFiNh3fWie3v9FviAzRUc8m%2BgBbsuxJ7DtwBl57sS2Nu%2BmqJ9vXX02eaw5SCHlCb2Jvx0uk7h3DyprZ1sOYKUuq47OBcln9jRkyFwcn4cwjQm3%2F8W2ewAhkE8l7ajOGBCw5y98kqiC2KyLG5%2FbpfFWni5yIZzwUKh3M6htoPHxDczpKc%2FEhz1IrqA9Ptfa0GKxcLLpvThndmR9qHTvf8IQY2%2FwCowNbZ4IfG%2BXa9aFfvefH5NbfOrfmD4ta4pa4KfjGIR3iTjpCO4JJpXr%2B2nx5VdfzmdNuI1XxEgeWKTmSCChREMPOF4L0GOqUBHRsdu0e2x6Pc1jBH%2Ff%2FXt1PPNh7vwM4wA3wtiT5YOurX2aBB7TtKXXwfonCWHcULV4YJBhrnePlvZetu2ouDInGG1m%2B4T%2B1Yp20tFiSgAnl2iOsoAL9Q0qmydoTLMftK1Sq35A%2BfyaCiLEtW3Yt5%2B2dUurKfr9ma2kTUAqDJ1732he8k3pOq3WykJi8UgJPKdhQRTxDgO2w0HR%2B7sF9URmNELwfE&X-Amz-Signature=829c55c79a7639aef8267cf218873cd0494ad2544af25008b0c8ecfcaaa1b754&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJAS6R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlTQVbjsN1miw%2FB%2B8eRsgMQ7cUwwQIjl3WObmEdkYIOAiEAxh0qCSgIwoGSyqHk%2BzC5ZQR0ygxI6mc%2FdML0kGIc%2BlMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2TWq%2B6qU6jMoLg6yrcA2o3jY5NSn793DN2akUOwz0THUi57Otq8MQsr6xWMdBwGE9m6dedWwOOlkYoQLmCAqHtwNq40W05sLCsgN9no8dLpDKR7hANMiaz8ShO0eYWHKHOh%2FTFMpBNpsBQeNbZbABwaTTjih8%2F2%2BuacU6NvKPPD4ItVIxGxrccvu1xeL2Nyogg8GYeABcEtQ9USmrk3npE0EY%2FljDg4eVsZv0Et%2FSxAzVqN0u1R4M5B8uVVudi%2F9qgTvhm%2F0s5orgJymzkp%2F0Y%2Bc8iopYxN%2BeUZp2%2BB6nqV9KICA4S8ye3OeomuHrTpQ2%2B0T3JCqAc7YJXStCHuypAKEwmpNlAzFiNh3fWie3v9FviAzRUc8m%2BgBbsuxJ7DtwBl57sS2Nu%2BmqJ9vXX02eaw5SCHlCb2Jvx0uk7h3DyprZ1sOYKUuq47OBcln9jRkyFwcn4cwjQm3%2F8W2ewAhkE8l7ajOGBCw5y98kqiC2KyLG5%2FbpfFWni5yIZzwUKh3M6htoPHxDczpKc%2FEhz1IrqA9Ptfa0GKxcLLpvThndmR9qHTvf8IQY2%2FwCowNbZ4IfG%2BXa9aFfvefH5NbfOrfmD4ta4pa4KfjGIR3iTjpCO4JJpXr%2B2nx5VdfzmdNuI1XxEgeWKTmSCChREMPOF4L0GOqUBHRsdu0e2x6Pc1jBH%2Ff%2FXt1PPNh7vwM4wA3wtiT5YOurX2aBB7TtKXXwfonCWHcULV4YJBhrnePlvZetu2ouDInGG1m%2B4T%2B1Yp20tFiSgAnl2iOsoAL9Q0qmydoTLMftK1Sq35A%2BfyaCiLEtW3Yt5%2B2dUurKfr9ma2kTUAqDJ1732he8k3pOq3WykJi8UgJPKdhQRTxDgO2w0HR%2B7sF9URmNELwfE&X-Amz-Signature=22d42934962be50a0958aafa4c7c78313ea7c100e9966973ccd5210ef00668a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJAS6R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlTQVbjsN1miw%2FB%2B8eRsgMQ7cUwwQIjl3WObmEdkYIOAiEAxh0qCSgIwoGSyqHk%2BzC5ZQR0ygxI6mc%2FdML0kGIc%2BlMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2TWq%2B6qU6jMoLg6yrcA2o3jY5NSn793DN2akUOwz0THUi57Otq8MQsr6xWMdBwGE9m6dedWwOOlkYoQLmCAqHtwNq40W05sLCsgN9no8dLpDKR7hANMiaz8ShO0eYWHKHOh%2FTFMpBNpsBQeNbZbABwaTTjih8%2F2%2BuacU6NvKPPD4ItVIxGxrccvu1xeL2Nyogg8GYeABcEtQ9USmrk3npE0EY%2FljDg4eVsZv0Et%2FSxAzVqN0u1R4M5B8uVVudi%2F9qgTvhm%2F0s5orgJymzkp%2F0Y%2Bc8iopYxN%2BeUZp2%2BB6nqV9KICA4S8ye3OeomuHrTpQ2%2B0T3JCqAc7YJXStCHuypAKEwmpNlAzFiNh3fWie3v9FviAzRUc8m%2BgBbsuxJ7DtwBl57sS2Nu%2BmqJ9vXX02eaw5SCHlCb2Jvx0uk7h3DyprZ1sOYKUuq47OBcln9jRkyFwcn4cwjQm3%2F8W2ewAhkE8l7ajOGBCw5y98kqiC2KyLG5%2FbpfFWni5yIZzwUKh3M6htoPHxDczpKc%2FEhz1IrqA9Ptfa0GKxcLLpvThndmR9qHTvf8IQY2%2FwCowNbZ4IfG%2BXa9aFfvefH5NbfOrfmD4ta4pa4KfjGIR3iTjpCO4JJpXr%2B2nx5VdfzmdNuI1XxEgeWKTmSCChREMPOF4L0GOqUBHRsdu0e2x6Pc1jBH%2Ff%2FXt1PPNh7vwM4wA3wtiT5YOurX2aBB7TtKXXwfonCWHcULV4YJBhrnePlvZetu2ouDInGG1m%2B4T%2B1Yp20tFiSgAnl2iOsoAL9Q0qmydoTLMftK1Sq35A%2BfyaCiLEtW3Yt5%2B2dUurKfr9ma2kTUAqDJ1732he8k3pOq3WykJi8UgJPKdhQRTxDgO2w0HR%2B7sF9URmNELwfE&X-Amz-Signature=b1554f228e85ab78cd311d57bee25ae617516297f99182963f3241e5754ca8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJAS6R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlTQVbjsN1miw%2FB%2B8eRsgMQ7cUwwQIjl3WObmEdkYIOAiEAxh0qCSgIwoGSyqHk%2BzC5ZQR0ygxI6mc%2FdML0kGIc%2BlMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2TWq%2B6qU6jMoLg6yrcA2o3jY5NSn793DN2akUOwz0THUi57Otq8MQsr6xWMdBwGE9m6dedWwOOlkYoQLmCAqHtwNq40W05sLCsgN9no8dLpDKR7hANMiaz8ShO0eYWHKHOh%2FTFMpBNpsBQeNbZbABwaTTjih8%2F2%2BuacU6NvKPPD4ItVIxGxrccvu1xeL2Nyogg8GYeABcEtQ9USmrk3npE0EY%2FljDg4eVsZv0Et%2FSxAzVqN0u1R4M5B8uVVudi%2F9qgTvhm%2F0s5orgJymzkp%2F0Y%2Bc8iopYxN%2BeUZp2%2BB6nqV9KICA4S8ye3OeomuHrTpQ2%2B0T3JCqAc7YJXStCHuypAKEwmpNlAzFiNh3fWie3v9FviAzRUc8m%2BgBbsuxJ7DtwBl57sS2Nu%2BmqJ9vXX02eaw5SCHlCb2Jvx0uk7h3DyprZ1sOYKUuq47OBcln9jRkyFwcn4cwjQm3%2F8W2ewAhkE8l7ajOGBCw5y98kqiC2KyLG5%2FbpfFWni5yIZzwUKh3M6htoPHxDczpKc%2FEhz1IrqA9Ptfa0GKxcLLpvThndmR9qHTvf8IQY2%2FwCowNbZ4IfG%2BXa9aFfvefH5NbfOrfmD4ta4pa4KfjGIR3iTjpCO4JJpXr%2B2nx5VdfzmdNuI1XxEgeWKTmSCChREMPOF4L0GOqUBHRsdu0e2x6Pc1jBH%2Ff%2FXt1PPNh7vwM4wA3wtiT5YOurX2aBB7TtKXXwfonCWHcULV4YJBhrnePlvZetu2ouDInGG1m%2B4T%2B1Yp20tFiSgAnl2iOsoAL9Q0qmydoTLMftK1Sq35A%2BfyaCiLEtW3Yt5%2B2dUurKfr9ma2kTUAqDJ1732he8k3pOq3WykJi8UgJPKdhQRTxDgO2w0HR%2B7sF9URmNELwfE&X-Amz-Signature=a930b259fcac5f25243095902720b65ccc1154336d5c39e9a9a38c3f7c7b7b79&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
