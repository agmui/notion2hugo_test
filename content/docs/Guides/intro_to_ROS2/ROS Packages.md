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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEJZFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp3gnGfz2rE66ITJYggy1m6UTPvDoBybYsR1Rk1YNJvAiEAhjDdt1%2FCb1aA7MFJNr3N5ophCRPp2xjqKu8iPZmp5ugq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMgj1bDQxQpj78YB8ircA82Zw9XLsCFulC7j41Ze8MMwZPhKoqRmORNSc2zvgqBlfqZlJAXLdl0s7t6xjq30%2FsWpt0WFudYuGT%2FpKOaqptxH1ZJ8EpAShpNE%2BuinzoUhW3gqcD9dGNoEYZ%2BgePl0iKyp9HlbJMD2e2YylAVWqStAEXK8A%2BKWlvtYv7YMtjmGaR3Mc1mOvuueBhH0PFl1TWj%2BIbVzF%2B9aDeiMWvki7dfuyLX5tpYyDnitxA7c7iAdrTMtfSzXKSGl9pFc3PRGexn03tbjl%2B%2BRjRVqyUr7DfR4IJOl6tLpWXGO0VNZAwvgaPkPYGSZp8k56ova5XfhbtztvioQSgbLnwq%2BxapRW20dkS0ObzK9fr%2B8lv4D834zMj6gCQoaChcIn58%2FZkg%2Brzu0bhrYZPwBA%2BEkn3h6pEweji2Ww2Whu9QkLjdxjjqLfg3geuiJF4X2TXLqMv5lRNKoqW6eVK3fO9pkSztw1jWc0gXJufDz%2FfhvNnV1oxTc99GQMkiGpNGhHsAn8KHzd6kQJH5AHvOvmaN6IkxpNOdOMrEuWq6mX%2B%2BhdsFAnmVKYCPxAtMaWRJco1BDorQaxsUcqMT%2BDNWvJg2%2FuriDdo1BxKzA8yD6LHdjTVneMfTBEhzCZ%2BJG6PuFCrTZMO%2BW2MEGOqUBlqF8%2BLRXq50VrQ0uEDRuAKmV6EhQa2sSzn7KkWjL8fmpmt8L5SQscBqJprQr5BrsZ%2FN9rY9a6pYpVJx62CZaetQPbulZxDhHHnRFDgajAI6p4fXlyH1NYuJfPJ%2BC6gWB8WM3IaVYCkeVEn88yFBxjVSjInOpZMiaCQqmMa32ha%2BXRnYIyZE%2Bv2pT1b8t5LXfKX9MYEumC9eOlkWoxcbAUE2tKO10&X-Amz-Signature=1325fa834fa427d015f7a775e5f962fdfce6174f52c0499f0e8d65ba8ebde012&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEJZFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp3gnGfz2rE66ITJYggy1m6UTPvDoBybYsR1Rk1YNJvAiEAhjDdt1%2FCb1aA7MFJNr3N5ophCRPp2xjqKu8iPZmp5ugq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMgj1bDQxQpj78YB8ircA82Zw9XLsCFulC7j41Ze8MMwZPhKoqRmORNSc2zvgqBlfqZlJAXLdl0s7t6xjq30%2FsWpt0WFudYuGT%2FpKOaqptxH1ZJ8EpAShpNE%2BuinzoUhW3gqcD9dGNoEYZ%2BgePl0iKyp9HlbJMD2e2YylAVWqStAEXK8A%2BKWlvtYv7YMtjmGaR3Mc1mOvuueBhH0PFl1TWj%2BIbVzF%2B9aDeiMWvki7dfuyLX5tpYyDnitxA7c7iAdrTMtfSzXKSGl9pFc3PRGexn03tbjl%2B%2BRjRVqyUr7DfR4IJOl6tLpWXGO0VNZAwvgaPkPYGSZp8k56ova5XfhbtztvioQSgbLnwq%2BxapRW20dkS0ObzK9fr%2B8lv4D834zMj6gCQoaChcIn58%2FZkg%2Brzu0bhrYZPwBA%2BEkn3h6pEweji2Ww2Whu9QkLjdxjjqLfg3geuiJF4X2TXLqMv5lRNKoqW6eVK3fO9pkSztw1jWc0gXJufDz%2FfhvNnV1oxTc99GQMkiGpNGhHsAn8KHzd6kQJH5AHvOvmaN6IkxpNOdOMrEuWq6mX%2B%2BhdsFAnmVKYCPxAtMaWRJco1BDorQaxsUcqMT%2BDNWvJg2%2FuriDdo1BxKzA8yD6LHdjTVneMfTBEhzCZ%2BJG6PuFCrTZMO%2BW2MEGOqUBlqF8%2BLRXq50VrQ0uEDRuAKmV6EhQa2sSzn7KkWjL8fmpmt8L5SQscBqJprQr5BrsZ%2FN9rY9a6pYpVJx62CZaetQPbulZxDhHHnRFDgajAI6p4fXlyH1NYuJfPJ%2BC6gWB8WM3IaVYCkeVEn88yFBxjVSjInOpZMiaCQqmMa32ha%2BXRnYIyZE%2Bv2pT1b8t5LXfKX9MYEumC9eOlkWoxcbAUE2tKO10&X-Amz-Signature=fca115e85f3e976d387d827d9d5ed227b30ffcf39f3c90307b8e5fae67863fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEJZFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp3gnGfz2rE66ITJYggy1m6UTPvDoBybYsR1Rk1YNJvAiEAhjDdt1%2FCb1aA7MFJNr3N5ophCRPp2xjqKu8iPZmp5ugq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMgj1bDQxQpj78YB8ircA82Zw9XLsCFulC7j41Ze8MMwZPhKoqRmORNSc2zvgqBlfqZlJAXLdl0s7t6xjq30%2FsWpt0WFudYuGT%2FpKOaqptxH1ZJ8EpAShpNE%2BuinzoUhW3gqcD9dGNoEYZ%2BgePl0iKyp9HlbJMD2e2YylAVWqStAEXK8A%2BKWlvtYv7YMtjmGaR3Mc1mOvuueBhH0PFl1TWj%2BIbVzF%2B9aDeiMWvki7dfuyLX5tpYyDnitxA7c7iAdrTMtfSzXKSGl9pFc3PRGexn03tbjl%2B%2BRjRVqyUr7DfR4IJOl6tLpWXGO0VNZAwvgaPkPYGSZp8k56ova5XfhbtztvioQSgbLnwq%2BxapRW20dkS0ObzK9fr%2B8lv4D834zMj6gCQoaChcIn58%2FZkg%2Brzu0bhrYZPwBA%2BEkn3h6pEweji2Ww2Whu9QkLjdxjjqLfg3geuiJF4X2TXLqMv5lRNKoqW6eVK3fO9pkSztw1jWc0gXJufDz%2FfhvNnV1oxTc99GQMkiGpNGhHsAn8KHzd6kQJH5AHvOvmaN6IkxpNOdOMrEuWq6mX%2B%2BhdsFAnmVKYCPxAtMaWRJco1BDorQaxsUcqMT%2BDNWvJg2%2FuriDdo1BxKzA8yD6LHdjTVneMfTBEhzCZ%2BJG6PuFCrTZMO%2BW2MEGOqUBlqF8%2BLRXq50VrQ0uEDRuAKmV6EhQa2sSzn7KkWjL8fmpmt8L5SQscBqJprQr5BrsZ%2FN9rY9a6pYpVJx62CZaetQPbulZxDhHHnRFDgajAI6p4fXlyH1NYuJfPJ%2BC6gWB8WM3IaVYCkeVEn88yFBxjVSjInOpZMiaCQqmMa32ha%2BXRnYIyZE%2Bv2pT1b8t5LXfKX9MYEumC9eOlkWoxcbAUE2tKO10&X-Amz-Signature=2266966b17949dac909caf84599a9704264ccbf7b24c2a578c96e33e0dbde60a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEJZFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp3gnGfz2rE66ITJYggy1m6UTPvDoBybYsR1Rk1YNJvAiEAhjDdt1%2FCb1aA7MFJNr3N5ophCRPp2xjqKu8iPZmp5ugq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMgj1bDQxQpj78YB8ircA82Zw9XLsCFulC7j41Ze8MMwZPhKoqRmORNSc2zvgqBlfqZlJAXLdl0s7t6xjq30%2FsWpt0WFudYuGT%2FpKOaqptxH1ZJ8EpAShpNE%2BuinzoUhW3gqcD9dGNoEYZ%2BgePl0iKyp9HlbJMD2e2YylAVWqStAEXK8A%2BKWlvtYv7YMtjmGaR3Mc1mOvuueBhH0PFl1TWj%2BIbVzF%2B9aDeiMWvki7dfuyLX5tpYyDnitxA7c7iAdrTMtfSzXKSGl9pFc3PRGexn03tbjl%2B%2BRjRVqyUr7DfR4IJOl6tLpWXGO0VNZAwvgaPkPYGSZp8k56ova5XfhbtztvioQSgbLnwq%2BxapRW20dkS0ObzK9fr%2B8lv4D834zMj6gCQoaChcIn58%2FZkg%2Brzu0bhrYZPwBA%2BEkn3h6pEweji2Ww2Whu9QkLjdxjjqLfg3geuiJF4X2TXLqMv5lRNKoqW6eVK3fO9pkSztw1jWc0gXJufDz%2FfhvNnV1oxTc99GQMkiGpNGhHsAn8KHzd6kQJH5AHvOvmaN6IkxpNOdOMrEuWq6mX%2B%2BhdsFAnmVKYCPxAtMaWRJco1BDorQaxsUcqMT%2BDNWvJg2%2FuriDdo1BxKzA8yD6LHdjTVneMfTBEhzCZ%2BJG6PuFCrTZMO%2BW2MEGOqUBlqF8%2BLRXq50VrQ0uEDRuAKmV6EhQa2sSzn7KkWjL8fmpmt8L5SQscBqJprQr5BrsZ%2FN9rY9a6pYpVJx62CZaetQPbulZxDhHHnRFDgajAI6p4fXlyH1NYuJfPJ%2BC6gWB8WM3IaVYCkeVEn88yFBxjVSjInOpZMiaCQqmMa32ha%2BXRnYIyZE%2Bv2pT1b8t5LXfKX9MYEumC9eOlkWoxcbAUE2tKO10&X-Amz-Signature=d3b00adaa94ccc11455a4d5dece584e193e1e2365081d4862eca27562d23a9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEJZFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp3gnGfz2rE66ITJYggy1m6UTPvDoBybYsR1Rk1YNJvAiEAhjDdt1%2FCb1aA7MFJNr3N5ophCRPp2xjqKu8iPZmp5ugq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMgj1bDQxQpj78YB8ircA82Zw9XLsCFulC7j41Ze8MMwZPhKoqRmORNSc2zvgqBlfqZlJAXLdl0s7t6xjq30%2FsWpt0WFudYuGT%2FpKOaqptxH1ZJ8EpAShpNE%2BuinzoUhW3gqcD9dGNoEYZ%2BgePl0iKyp9HlbJMD2e2YylAVWqStAEXK8A%2BKWlvtYv7YMtjmGaR3Mc1mOvuueBhH0PFl1TWj%2BIbVzF%2B9aDeiMWvki7dfuyLX5tpYyDnitxA7c7iAdrTMtfSzXKSGl9pFc3PRGexn03tbjl%2B%2BRjRVqyUr7DfR4IJOl6tLpWXGO0VNZAwvgaPkPYGSZp8k56ova5XfhbtztvioQSgbLnwq%2BxapRW20dkS0ObzK9fr%2B8lv4D834zMj6gCQoaChcIn58%2FZkg%2Brzu0bhrYZPwBA%2BEkn3h6pEweji2Ww2Whu9QkLjdxjjqLfg3geuiJF4X2TXLqMv5lRNKoqW6eVK3fO9pkSztw1jWc0gXJufDz%2FfhvNnV1oxTc99GQMkiGpNGhHsAn8KHzd6kQJH5AHvOvmaN6IkxpNOdOMrEuWq6mX%2B%2BhdsFAnmVKYCPxAtMaWRJco1BDorQaxsUcqMT%2BDNWvJg2%2FuriDdo1BxKzA8yD6LHdjTVneMfTBEhzCZ%2BJG6PuFCrTZMO%2BW2MEGOqUBlqF8%2BLRXq50VrQ0uEDRuAKmV6EhQa2sSzn7KkWjL8fmpmt8L5SQscBqJprQr5BrsZ%2FN9rY9a6pYpVJx62CZaetQPbulZxDhHHnRFDgajAI6p4fXlyH1NYuJfPJ%2BC6gWB8WM3IaVYCkeVEn88yFBxjVSjInOpZMiaCQqmMa32ha%2BXRnYIyZE%2Bv2pT1b8t5LXfKX9MYEumC9eOlkWoxcbAUE2tKO10&X-Amz-Signature=c65d2455820765a96ca2a01a29d3901a13c0a5c7da1b79bbc3101ddb6e037efa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEJZFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp3gnGfz2rE66ITJYggy1m6UTPvDoBybYsR1Rk1YNJvAiEAhjDdt1%2FCb1aA7MFJNr3N5ophCRPp2xjqKu8iPZmp5ugq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMgj1bDQxQpj78YB8ircA82Zw9XLsCFulC7j41Ze8MMwZPhKoqRmORNSc2zvgqBlfqZlJAXLdl0s7t6xjq30%2FsWpt0WFudYuGT%2FpKOaqptxH1ZJ8EpAShpNE%2BuinzoUhW3gqcD9dGNoEYZ%2BgePl0iKyp9HlbJMD2e2YylAVWqStAEXK8A%2BKWlvtYv7YMtjmGaR3Mc1mOvuueBhH0PFl1TWj%2BIbVzF%2B9aDeiMWvki7dfuyLX5tpYyDnitxA7c7iAdrTMtfSzXKSGl9pFc3PRGexn03tbjl%2B%2BRjRVqyUr7DfR4IJOl6tLpWXGO0VNZAwvgaPkPYGSZp8k56ova5XfhbtztvioQSgbLnwq%2BxapRW20dkS0ObzK9fr%2B8lv4D834zMj6gCQoaChcIn58%2FZkg%2Brzu0bhrYZPwBA%2BEkn3h6pEweji2Ww2Whu9QkLjdxjjqLfg3geuiJF4X2TXLqMv5lRNKoqW6eVK3fO9pkSztw1jWc0gXJufDz%2FfhvNnV1oxTc99GQMkiGpNGhHsAn8KHzd6kQJH5AHvOvmaN6IkxpNOdOMrEuWq6mX%2B%2BhdsFAnmVKYCPxAtMaWRJco1BDorQaxsUcqMT%2BDNWvJg2%2FuriDdo1BxKzA8yD6LHdjTVneMfTBEhzCZ%2BJG6PuFCrTZMO%2BW2MEGOqUBlqF8%2BLRXq50VrQ0uEDRuAKmV6EhQa2sSzn7KkWjL8fmpmt8L5SQscBqJprQr5BrsZ%2FN9rY9a6pYpVJx62CZaetQPbulZxDhHHnRFDgajAI6p4fXlyH1NYuJfPJ%2BC6gWB8WM3IaVYCkeVEn88yFBxjVSjInOpZMiaCQqmMa32ha%2BXRnYIyZE%2Bv2pT1b8t5LXfKX9MYEumC9eOlkWoxcbAUE2tKO10&X-Amz-Signature=33f20068ac1df7050006940dcbda0605ad1bcfe866200296e6becf8c4c296163&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEJZFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp3gnGfz2rE66ITJYggy1m6UTPvDoBybYsR1Rk1YNJvAiEAhjDdt1%2FCb1aA7MFJNr3N5ophCRPp2xjqKu8iPZmp5ugq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDMgj1bDQxQpj78YB8ircA82Zw9XLsCFulC7j41Ze8MMwZPhKoqRmORNSc2zvgqBlfqZlJAXLdl0s7t6xjq30%2FsWpt0WFudYuGT%2FpKOaqptxH1ZJ8EpAShpNE%2BuinzoUhW3gqcD9dGNoEYZ%2BgePl0iKyp9HlbJMD2e2YylAVWqStAEXK8A%2BKWlvtYv7YMtjmGaR3Mc1mOvuueBhH0PFl1TWj%2BIbVzF%2B9aDeiMWvki7dfuyLX5tpYyDnitxA7c7iAdrTMtfSzXKSGl9pFc3PRGexn03tbjl%2B%2BRjRVqyUr7DfR4IJOl6tLpWXGO0VNZAwvgaPkPYGSZp8k56ova5XfhbtztvioQSgbLnwq%2BxapRW20dkS0ObzK9fr%2B8lv4D834zMj6gCQoaChcIn58%2FZkg%2Brzu0bhrYZPwBA%2BEkn3h6pEweji2Ww2Whu9QkLjdxjjqLfg3geuiJF4X2TXLqMv5lRNKoqW6eVK3fO9pkSztw1jWc0gXJufDz%2FfhvNnV1oxTc99GQMkiGpNGhHsAn8KHzd6kQJH5AHvOvmaN6IkxpNOdOMrEuWq6mX%2B%2BhdsFAnmVKYCPxAtMaWRJco1BDorQaxsUcqMT%2BDNWvJg2%2FuriDdo1BxKzA8yD6LHdjTVneMfTBEhzCZ%2BJG6PuFCrTZMO%2BW2MEGOqUBlqF8%2BLRXq50VrQ0uEDRuAKmV6EhQa2sSzn7KkWjL8fmpmt8L5SQscBqJprQr5BrsZ%2FN9rY9a6pYpVJx62CZaetQPbulZxDhHHnRFDgajAI6p4fXlyH1NYuJfPJ%2BC6gWB8WM3IaVYCkeVEn88yFBxjVSjInOpZMiaCQqmMa32ha%2BXRnYIyZE%2Bv2pT1b8t5LXfKX9MYEumC9eOlkWoxcbAUE2tKO10&X-Amz-Signature=510d75c8fdf176d2fc96b4fdb028ac8788df63c93a44796614bc72f20859ef0a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
