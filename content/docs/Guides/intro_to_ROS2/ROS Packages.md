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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXSBF7D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMTmfmI3gqWtyOs6wOnuheR0fhy6yXE5x3xBSBCqO82AiAsfJ6YbuuAzawcIS9H34PiNgG%2BL0EXNB2KQMW9IqUf%2FCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDPVhimPClbXfc3JjKtwDWB8Q1f%2BwGIDFYi7D%2Fv01av4DCzQNaLgs8H9noFMDk3B4DTu1q2JlDSdZ4NROtWtxCgXKGTJbeVbEWC1dnoY2pfL78KM3TB4b1wJHdYTZDnIYsbrmyEc9IujrvWfyLv9Mn5TaHLA6wh%2BSmDlMlILGq5Fk%2BOFY2ql3wR44PJzSN%2B85I0GYHHx2ZeyXlnEFOt4dFHBKM2N%2FeLbJamdpJfwlxAa7p4qUyD8lm3rVxXcHriYSAv2lUvamHNMumoE5PQXro7mS6zbvm6ZQbZnwusWNd%2BLnZ10csp12%2B1s985I8scoAlEtot6UKmmi4%2FInyl0uYSGTPRBaeDvYuc%2Fl%2F0kwX29raz%2BsS2TOthE%2FeY8Bp3ZaGzIKNwXtgRkhOyrrbBNr4924s7tgqSIAvAfax%2BBmU2Bnuj9EOVY7SSfkpk30VS1S3zjq8vH8gMyLhJV1mkHfRIVlBJ3zBZnBL1yJRGikrFpdu9XWFOeBD%2BzNWcfXY0Qb%2FqhEE99tKYnHt5sdW0EAukUXx1mWfAAe6I%2B%2BHo0EWiLLQiQ3eWaoJSiHrTX6awi1QCxxK6DrllG5f52TPOhcIqzmp7RCK9M0yrLVATTMeue0XqzV39trVe%2BT95wrcuZf70WVWiAB8aqCoBB0wgJW8wAY6pgFaVZU6B2yjsFGz9bgTMtZX%2FjFonhGaQ77knTWTnAP1JtcjH%2BEH8s3vLgUSMpbwiibnfa4CqW9LtgQoVg2LOEWcgvXr3rUgUDPuvsmAomLCQMhVS8qacLAMPjQ5%2B5XpD%2Bsj1WcFfbYjKS%2F9a3JMcwj5EMwYKQXczAhOTQHJ7Oq3ZDXfWf5s7320DpGfQ7BAJSQkBmbV9cE1tdKYy97v6WEM2fP459Qf&X-Amz-Signature=a0ad76eff92e9309c3dac6f27bde95085c801a99d48d5460bbdee996ac184bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXSBF7D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMTmfmI3gqWtyOs6wOnuheR0fhy6yXE5x3xBSBCqO82AiAsfJ6YbuuAzawcIS9H34PiNgG%2BL0EXNB2KQMW9IqUf%2FCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDPVhimPClbXfc3JjKtwDWB8Q1f%2BwGIDFYi7D%2Fv01av4DCzQNaLgs8H9noFMDk3B4DTu1q2JlDSdZ4NROtWtxCgXKGTJbeVbEWC1dnoY2pfL78KM3TB4b1wJHdYTZDnIYsbrmyEc9IujrvWfyLv9Mn5TaHLA6wh%2BSmDlMlILGq5Fk%2BOFY2ql3wR44PJzSN%2B85I0GYHHx2ZeyXlnEFOt4dFHBKM2N%2FeLbJamdpJfwlxAa7p4qUyD8lm3rVxXcHriYSAv2lUvamHNMumoE5PQXro7mS6zbvm6ZQbZnwusWNd%2BLnZ10csp12%2B1s985I8scoAlEtot6UKmmi4%2FInyl0uYSGTPRBaeDvYuc%2Fl%2F0kwX29raz%2BsS2TOthE%2FeY8Bp3ZaGzIKNwXtgRkhOyrrbBNr4924s7tgqSIAvAfax%2BBmU2Bnuj9EOVY7SSfkpk30VS1S3zjq8vH8gMyLhJV1mkHfRIVlBJ3zBZnBL1yJRGikrFpdu9XWFOeBD%2BzNWcfXY0Qb%2FqhEE99tKYnHt5sdW0EAukUXx1mWfAAe6I%2B%2BHo0EWiLLQiQ3eWaoJSiHrTX6awi1QCxxK6DrllG5f52TPOhcIqzmp7RCK9M0yrLVATTMeue0XqzV39trVe%2BT95wrcuZf70WVWiAB8aqCoBB0wgJW8wAY6pgFaVZU6B2yjsFGz9bgTMtZX%2FjFonhGaQ77knTWTnAP1JtcjH%2BEH8s3vLgUSMpbwiibnfa4CqW9LtgQoVg2LOEWcgvXr3rUgUDPuvsmAomLCQMhVS8qacLAMPjQ5%2B5XpD%2Bsj1WcFfbYjKS%2F9a3JMcwj5EMwYKQXczAhOTQHJ7Oq3ZDXfWf5s7320DpGfQ7BAJSQkBmbV9cE1tdKYy97v6WEM2fP459Qf&X-Amz-Signature=da825555a43e23c32d586afdd8a8da7034b930bc5f9ee459fd321385b4671d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXSBF7D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMTmfmI3gqWtyOs6wOnuheR0fhy6yXE5x3xBSBCqO82AiAsfJ6YbuuAzawcIS9H34PiNgG%2BL0EXNB2KQMW9IqUf%2FCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDPVhimPClbXfc3JjKtwDWB8Q1f%2BwGIDFYi7D%2Fv01av4DCzQNaLgs8H9noFMDk3B4DTu1q2JlDSdZ4NROtWtxCgXKGTJbeVbEWC1dnoY2pfL78KM3TB4b1wJHdYTZDnIYsbrmyEc9IujrvWfyLv9Mn5TaHLA6wh%2BSmDlMlILGq5Fk%2BOFY2ql3wR44PJzSN%2B85I0GYHHx2ZeyXlnEFOt4dFHBKM2N%2FeLbJamdpJfwlxAa7p4qUyD8lm3rVxXcHriYSAv2lUvamHNMumoE5PQXro7mS6zbvm6ZQbZnwusWNd%2BLnZ10csp12%2B1s985I8scoAlEtot6UKmmi4%2FInyl0uYSGTPRBaeDvYuc%2Fl%2F0kwX29raz%2BsS2TOthE%2FeY8Bp3ZaGzIKNwXtgRkhOyrrbBNr4924s7tgqSIAvAfax%2BBmU2Bnuj9EOVY7SSfkpk30VS1S3zjq8vH8gMyLhJV1mkHfRIVlBJ3zBZnBL1yJRGikrFpdu9XWFOeBD%2BzNWcfXY0Qb%2FqhEE99tKYnHt5sdW0EAukUXx1mWfAAe6I%2B%2BHo0EWiLLQiQ3eWaoJSiHrTX6awi1QCxxK6DrllG5f52TPOhcIqzmp7RCK9M0yrLVATTMeue0XqzV39trVe%2BT95wrcuZf70WVWiAB8aqCoBB0wgJW8wAY6pgFaVZU6B2yjsFGz9bgTMtZX%2FjFonhGaQ77knTWTnAP1JtcjH%2BEH8s3vLgUSMpbwiibnfa4CqW9LtgQoVg2LOEWcgvXr3rUgUDPuvsmAomLCQMhVS8qacLAMPjQ5%2B5XpD%2Bsj1WcFfbYjKS%2F9a3JMcwj5EMwYKQXczAhOTQHJ7Oq3ZDXfWf5s7320DpGfQ7BAJSQkBmbV9cE1tdKYy97v6WEM2fP459Qf&X-Amz-Signature=1eeabb7ceba416d89c6a32bf5f0302acc62786b7a1bd53cc16306f8fc1a3e32a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXSBF7D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMTmfmI3gqWtyOs6wOnuheR0fhy6yXE5x3xBSBCqO82AiAsfJ6YbuuAzawcIS9H34PiNgG%2BL0EXNB2KQMW9IqUf%2FCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDPVhimPClbXfc3JjKtwDWB8Q1f%2BwGIDFYi7D%2Fv01av4DCzQNaLgs8H9noFMDk3B4DTu1q2JlDSdZ4NROtWtxCgXKGTJbeVbEWC1dnoY2pfL78KM3TB4b1wJHdYTZDnIYsbrmyEc9IujrvWfyLv9Mn5TaHLA6wh%2BSmDlMlILGq5Fk%2BOFY2ql3wR44PJzSN%2B85I0GYHHx2ZeyXlnEFOt4dFHBKM2N%2FeLbJamdpJfwlxAa7p4qUyD8lm3rVxXcHriYSAv2lUvamHNMumoE5PQXro7mS6zbvm6ZQbZnwusWNd%2BLnZ10csp12%2B1s985I8scoAlEtot6UKmmi4%2FInyl0uYSGTPRBaeDvYuc%2Fl%2F0kwX29raz%2BsS2TOthE%2FeY8Bp3ZaGzIKNwXtgRkhOyrrbBNr4924s7tgqSIAvAfax%2BBmU2Bnuj9EOVY7SSfkpk30VS1S3zjq8vH8gMyLhJV1mkHfRIVlBJ3zBZnBL1yJRGikrFpdu9XWFOeBD%2BzNWcfXY0Qb%2FqhEE99tKYnHt5sdW0EAukUXx1mWfAAe6I%2B%2BHo0EWiLLQiQ3eWaoJSiHrTX6awi1QCxxK6DrllG5f52TPOhcIqzmp7RCK9M0yrLVATTMeue0XqzV39trVe%2BT95wrcuZf70WVWiAB8aqCoBB0wgJW8wAY6pgFaVZU6B2yjsFGz9bgTMtZX%2FjFonhGaQ77knTWTnAP1JtcjH%2BEH8s3vLgUSMpbwiibnfa4CqW9LtgQoVg2LOEWcgvXr3rUgUDPuvsmAomLCQMhVS8qacLAMPjQ5%2B5XpD%2Bsj1WcFfbYjKS%2F9a3JMcwj5EMwYKQXczAhOTQHJ7Oq3ZDXfWf5s7320DpGfQ7BAJSQkBmbV9cE1tdKYy97v6WEM2fP459Qf&X-Amz-Signature=85099af8ac086b3b44d8a1ade68b48ff622ab78cd53b8fd11d3b34fd135a5b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXSBF7D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMTmfmI3gqWtyOs6wOnuheR0fhy6yXE5x3xBSBCqO82AiAsfJ6YbuuAzawcIS9H34PiNgG%2BL0EXNB2KQMW9IqUf%2FCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDPVhimPClbXfc3JjKtwDWB8Q1f%2BwGIDFYi7D%2Fv01av4DCzQNaLgs8H9noFMDk3B4DTu1q2JlDSdZ4NROtWtxCgXKGTJbeVbEWC1dnoY2pfL78KM3TB4b1wJHdYTZDnIYsbrmyEc9IujrvWfyLv9Mn5TaHLA6wh%2BSmDlMlILGq5Fk%2BOFY2ql3wR44PJzSN%2B85I0GYHHx2ZeyXlnEFOt4dFHBKM2N%2FeLbJamdpJfwlxAa7p4qUyD8lm3rVxXcHriYSAv2lUvamHNMumoE5PQXro7mS6zbvm6ZQbZnwusWNd%2BLnZ10csp12%2B1s985I8scoAlEtot6UKmmi4%2FInyl0uYSGTPRBaeDvYuc%2Fl%2F0kwX29raz%2BsS2TOthE%2FeY8Bp3ZaGzIKNwXtgRkhOyrrbBNr4924s7tgqSIAvAfax%2BBmU2Bnuj9EOVY7SSfkpk30VS1S3zjq8vH8gMyLhJV1mkHfRIVlBJ3zBZnBL1yJRGikrFpdu9XWFOeBD%2BzNWcfXY0Qb%2FqhEE99tKYnHt5sdW0EAukUXx1mWfAAe6I%2B%2BHo0EWiLLQiQ3eWaoJSiHrTX6awi1QCxxK6DrllG5f52TPOhcIqzmp7RCK9M0yrLVATTMeue0XqzV39trVe%2BT95wrcuZf70WVWiAB8aqCoBB0wgJW8wAY6pgFaVZU6B2yjsFGz9bgTMtZX%2FjFonhGaQ77knTWTnAP1JtcjH%2BEH8s3vLgUSMpbwiibnfa4CqW9LtgQoVg2LOEWcgvXr3rUgUDPuvsmAomLCQMhVS8qacLAMPjQ5%2B5XpD%2Bsj1WcFfbYjKS%2F9a3JMcwj5EMwYKQXczAhOTQHJ7Oq3ZDXfWf5s7320DpGfQ7BAJSQkBmbV9cE1tdKYy97v6WEM2fP459Qf&X-Amz-Signature=8f893948aea79c2efd84a3dfe88a05e7451ca40db45fb7e1270ad9d203df291c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXSBF7D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMTmfmI3gqWtyOs6wOnuheR0fhy6yXE5x3xBSBCqO82AiAsfJ6YbuuAzawcIS9H34PiNgG%2BL0EXNB2KQMW9IqUf%2FCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDPVhimPClbXfc3JjKtwDWB8Q1f%2BwGIDFYi7D%2Fv01av4DCzQNaLgs8H9noFMDk3B4DTu1q2JlDSdZ4NROtWtxCgXKGTJbeVbEWC1dnoY2pfL78KM3TB4b1wJHdYTZDnIYsbrmyEc9IujrvWfyLv9Mn5TaHLA6wh%2BSmDlMlILGq5Fk%2BOFY2ql3wR44PJzSN%2B85I0GYHHx2ZeyXlnEFOt4dFHBKM2N%2FeLbJamdpJfwlxAa7p4qUyD8lm3rVxXcHriYSAv2lUvamHNMumoE5PQXro7mS6zbvm6ZQbZnwusWNd%2BLnZ10csp12%2B1s985I8scoAlEtot6UKmmi4%2FInyl0uYSGTPRBaeDvYuc%2Fl%2F0kwX29raz%2BsS2TOthE%2FeY8Bp3ZaGzIKNwXtgRkhOyrrbBNr4924s7tgqSIAvAfax%2BBmU2Bnuj9EOVY7SSfkpk30VS1S3zjq8vH8gMyLhJV1mkHfRIVlBJ3zBZnBL1yJRGikrFpdu9XWFOeBD%2BzNWcfXY0Qb%2FqhEE99tKYnHt5sdW0EAukUXx1mWfAAe6I%2B%2BHo0EWiLLQiQ3eWaoJSiHrTX6awi1QCxxK6DrllG5f52TPOhcIqzmp7RCK9M0yrLVATTMeue0XqzV39trVe%2BT95wrcuZf70WVWiAB8aqCoBB0wgJW8wAY6pgFaVZU6B2yjsFGz9bgTMtZX%2FjFonhGaQ77knTWTnAP1JtcjH%2BEH8s3vLgUSMpbwiibnfa4CqW9LtgQoVg2LOEWcgvXr3rUgUDPuvsmAomLCQMhVS8qacLAMPjQ5%2B5XpD%2Bsj1WcFfbYjKS%2F9a3JMcwj5EMwYKQXczAhOTQHJ7Oq3ZDXfWf5s7320DpGfQ7BAJSQkBmbV9cE1tdKYy97v6WEM2fP459Qf&X-Amz-Signature=d883a7bba5286ba4dd9248e487d5ae155c5a5fc6ace84371cf06f11d2e0a8aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXSBF7D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMTmfmI3gqWtyOs6wOnuheR0fhy6yXE5x3xBSBCqO82AiAsfJ6YbuuAzawcIS9H34PiNgG%2BL0EXNB2KQMW9IqUf%2FCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMDPVhimPClbXfc3JjKtwDWB8Q1f%2BwGIDFYi7D%2Fv01av4DCzQNaLgs8H9noFMDk3B4DTu1q2JlDSdZ4NROtWtxCgXKGTJbeVbEWC1dnoY2pfL78KM3TB4b1wJHdYTZDnIYsbrmyEc9IujrvWfyLv9Mn5TaHLA6wh%2BSmDlMlILGq5Fk%2BOFY2ql3wR44PJzSN%2B85I0GYHHx2ZeyXlnEFOt4dFHBKM2N%2FeLbJamdpJfwlxAa7p4qUyD8lm3rVxXcHriYSAv2lUvamHNMumoE5PQXro7mS6zbvm6ZQbZnwusWNd%2BLnZ10csp12%2B1s985I8scoAlEtot6UKmmi4%2FInyl0uYSGTPRBaeDvYuc%2Fl%2F0kwX29raz%2BsS2TOthE%2FeY8Bp3ZaGzIKNwXtgRkhOyrrbBNr4924s7tgqSIAvAfax%2BBmU2Bnuj9EOVY7SSfkpk30VS1S3zjq8vH8gMyLhJV1mkHfRIVlBJ3zBZnBL1yJRGikrFpdu9XWFOeBD%2BzNWcfXY0Qb%2FqhEE99tKYnHt5sdW0EAukUXx1mWfAAe6I%2B%2BHo0EWiLLQiQ3eWaoJSiHrTX6awi1QCxxK6DrllG5f52TPOhcIqzmp7RCK9M0yrLVATTMeue0XqzV39trVe%2BT95wrcuZf70WVWiAB8aqCoBB0wgJW8wAY6pgFaVZU6B2yjsFGz9bgTMtZX%2FjFonhGaQ77knTWTnAP1JtcjH%2BEH8s3vLgUSMpbwiibnfa4CqW9LtgQoVg2LOEWcgvXr3rUgUDPuvsmAomLCQMhVS8qacLAMPjQ5%2B5XpD%2Bsj1WcFfbYjKS%2F9a3JMcwj5EMwYKQXczAhOTQHJ7Oq3ZDXfWf5s7320DpGfQ7BAJSQkBmbV9cE1tdKYy97v6WEM2fP459Qf&X-Amz-Signature=cba502c8353223a8e134d6a47ea2319017b662aaaee46c03f066dbb8ccd69c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
