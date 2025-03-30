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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665535QYHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICBDWiQ%2BHnM2mTfNWPE69c4dMz2BccF2tThMokLAWdnNAiEAqdq%2BIxTQ%2BlptGny7W8Oi7tHTZXCTwu0RQNWcOe3ZFlIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEbgbNH7Mt1Bgg4YCrcA%2FSQF41ULMXZg2cded2Mvztc4Z96R6rCDmzY4q%2FwJ0FZ3f5%2FOuIYksocEtKtjFB09VL%2BTsR%2F84ysxZAGS49a5dr0c1bAUVta6ehhEiDlC615kAywzNNObr6jJkz37u84Y6ayvhG01fsMvzZepXP7cuv1LH8wdhui5zryjsareegJiFJ4MpIqF%2F88742wKRILkP4meTiH6a8YimRKtjoeQSfhbGzFiLqobhA%2BWPmHDiP2vkEDkCQ%2FF74HXDl8pikB6QUWOUU9IKeJxMmm%2Bhqi1NIhPUaEUqLAXcK3iZSZo4fr2QtV8WaJe3OvBv1j1dvaYxJ4MLnHBMV9frpH3QB2UXA1hIHb6bZRyIF1DMCa6idpasBnCXPMo7vL2%2FK3OcYdQJSfuf20Hys5%2BQx54j528AsT45GezbVtVdC0pt79W6h8dSi%2BBEgDMgqJlUD0oqwFMbtJmRF40Jp68GtobofGnJunVPalcgQjQ26zBA9H3miFQSpwlJD4w3Y6QAIhzOdiUdBfubgt7pmvTTWyq4U4ddYz4y48cm%2FYelMtkcGaFfGIRYYS7GT7%2FdpzWIdJSyER7dlHds1tCDlbcsQ5a%2FtlaleUDKzAYzyDEFCMfd35vLDIekbbGMc8KIWd18r8MI3upb8GOqUB7wOsPqZW3KWjTHhMZsjm5w0CRKXj6Sa13XNsyEwRLmJSmHyM9mZR8IKOu9I6y%2Fy%2FwuJ7jQt8SPqTtXO4txrsYZXJDLvX%2FbYdw4WAQ8TU4uf5IlZAHXG3j4vaumIANWc%2FxvhXig314PTGm2%2BwjqhflCX3jQqPmU%2BEwfsCAvyZsTmZVwGBIx46YlceRpe04wE1Yj5BBpDmN8%2Fffr82BB2CZNe08Dv3&X-Amz-Signature=5cec367822ee98b151e1bf10e45d997254f3f6bb59a37f0cd752913173ea479e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665535QYHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICBDWiQ%2BHnM2mTfNWPE69c4dMz2BccF2tThMokLAWdnNAiEAqdq%2BIxTQ%2BlptGny7W8Oi7tHTZXCTwu0RQNWcOe3ZFlIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEbgbNH7Mt1Bgg4YCrcA%2FSQF41ULMXZg2cded2Mvztc4Z96R6rCDmzY4q%2FwJ0FZ3f5%2FOuIYksocEtKtjFB09VL%2BTsR%2F84ysxZAGS49a5dr0c1bAUVta6ehhEiDlC615kAywzNNObr6jJkz37u84Y6ayvhG01fsMvzZepXP7cuv1LH8wdhui5zryjsareegJiFJ4MpIqF%2F88742wKRILkP4meTiH6a8YimRKtjoeQSfhbGzFiLqobhA%2BWPmHDiP2vkEDkCQ%2FF74HXDl8pikB6QUWOUU9IKeJxMmm%2Bhqi1NIhPUaEUqLAXcK3iZSZo4fr2QtV8WaJe3OvBv1j1dvaYxJ4MLnHBMV9frpH3QB2UXA1hIHb6bZRyIF1DMCa6idpasBnCXPMo7vL2%2FK3OcYdQJSfuf20Hys5%2BQx54j528AsT45GezbVtVdC0pt79W6h8dSi%2BBEgDMgqJlUD0oqwFMbtJmRF40Jp68GtobofGnJunVPalcgQjQ26zBA9H3miFQSpwlJD4w3Y6QAIhzOdiUdBfubgt7pmvTTWyq4U4ddYz4y48cm%2FYelMtkcGaFfGIRYYS7GT7%2FdpzWIdJSyER7dlHds1tCDlbcsQ5a%2FtlaleUDKzAYzyDEFCMfd35vLDIekbbGMc8KIWd18r8MI3upb8GOqUB7wOsPqZW3KWjTHhMZsjm5w0CRKXj6Sa13XNsyEwRLmJSmHyM9mZR8IKOu9I6y%2Fy%2FwuJ7jQt8SPqTtXO4txrsYZXJDLvX%2FbYdw4WAQ8TU4uf5IlZAHXG3j4vaumIANWc%2FxvhXig314PTGm2%2BwjqhflCX3jQqPmU%2BEwfsCAvyZsTmZVwGBIx46YlceRpe04wE1Yj5BBpDmN8%2Fffr82BB2CZNe08Dv3&X-Amz-Signature=5a45a0e9ef0b06c17ce4222422963a1e3935e1c9fc4a9817bee06c6e338f98b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665535QYHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICBDWiQ%2BHnM2mTfNWPE69c4dMz2BccF2tThMokLAWdnNAiEAqdq%2BIxTQ%2BlptGny7W8Oi7tHTZXCTwu0RQNWcOe3ZFlIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEbgbNH7Mt1Bgg4YCrcA%2FSQF41ULMXZg2cded2Mvztc4Z96R6rCDmzY4q%2FwJ0FZ3f5%2FOuIYksocEtKtjFB09VL%2BTsR%2F84ysxZAGS49a5dr0c1bAUVta6ehhEiDlC615kAywzNNObr6jJkz37u84Y6ayvhG01fsMvzZepXP7cuv1LH8wdhui5zryjsareegJiFJ4MpIqF%2F88742wKRILkP4meTiH6a8YimRKtjoeQSfhbGzFiLqobhA%2BWPmHDiP2vkEDkCQ%2FF74HXDl8pikB6QUWOUU9IKeJxMmm%2Bhqi1NIhPUaEUqLAXcK3iZSZo4fr2QtV8WaJe3OvBv1j1dvaYxJ4MLnHBMV9frpH3QB2UXA1hIHb6bZRyIF1DMCa6idpasBnCXPMo7vL2%2FK3OcYdQJSfuf20Hys5%2BQx54j528AsT45GezbVtVdC0pt79W6h8dSi%2BBEgDMgqJlUD0oqwFMbtJmRF40Jp68GtobofGnJunVPalcgQjQ26zBA9H3miFQSpwlJD4w3Y6QAIhzOdiUdBfubgt7pmvTTWyq4U4ddYz4y48cm%2FYelMtkcGaFfGIRYYS7GT7%2FdpzWIdJSyER7dlHds1tCDlbcsQ5a%2FtlaleUDKzAYzyDEFCMfd35vLDIekbbGMc8KIWd18r8MI3upb8GOqUB7wOsPqZW3KWjTHhMZsjm5w0CRKXj6Sa13XNsyEwRLmJSmHyM9mZR8IKOu9I6y%2Fy%2FwuJ7jQt8SPqTtXO4txrsYZXJDLvX%2FbYdw4WAQ8TU4uf5IlZAHXG3j4vaumIANWc%2FxvhXig314PTGm2%2BwjqhflCX3jQqPmU%2BEwfsCAvyZsTmZVwGBIx46YlceRpe04wE1Yj5BBpDmN8%2Fffr82BB2CZNe08Dv3&X-Amz-Signature=ab31bd272076736323cfe4fdcf6856902f555c4f785c89d5a23f9a90293968c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665535QYHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICBDWiQ%2BHnM2mTfNWPE69c4dMz2BccF2tThMokLAWdnNAiEAqdq%2BIxTQ%2BlptGny7W8Oi7tHTZXCTwu0RQNWcOe3ZFlIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEbgbNH7Mt1Bgg4YCrcA%2FSQF41ULMXZg2cded2Mvztc4Z96R6rCDmzY4q%2FwJ0FZ3f5%2FOuIYksocEtKtjFB09VL%2BTsR%2F84ysxZAGS49a5dr0c1bAUVta6ehhEiDlC615kAywzNNObr6jJkz37u84Y6ayvhG01fsMvzZepXP7cuv1LH8wdhui5zryjsareegJiFJ4MpIqF%2F88742wKRILkP4meTiH6a8YimRKtjoeQSfhbGzFiLqobhA%2BWPmHDiP2vkEDkCQ%2FF74HXDl8pikB6QUWOUU9IKeJxMmm%2Bhqi1NIhPUaEUqLAXcK3iZSZo4fr2QtV8WaJe3OvBv1j1dvaYxJ4MLnHBMV9frpH3QB2UXA1hIHb6bZRyIF1DMCa6idpasBnCXPMo7vL2%2FK3OcYdQJSfuf20Hys5%2BQx54j528AsT45GezbVtVdC0pt79W6h8dSi%2BBEgDMgqJlUD0oqwFMbtJmRF40Jp68GtobofGnJunVPalcgQjQ26zBA9H3miFQSpwlJD4w3Y6QAIhzOdiUdBfubgt7pmvTTWyq4U4ddYz4y48cm%2FYelMtkcGaFfGIRYYS7GT7%2FdpzWIdJSyER7dlHds1tCDlbcsQ5a%2FtlaleUDKzAYzyDEFCMfd35vLDIekbbGMc8KIWd18r8MI3upb8GOqUB7wOsPqZW3KWjTHhMZsjm5w0CRKXj6Sa13XNsyEwRLmJSmHyM9mZR8IKOu9I6y%2Fy%2FwuJ7jQt8SPqTtXO4txrsYZXJDLvX%2FbYdw4WAQ8TU4uf5IlZAHXG3j4vaumIANWc%2FxvhXig314PTGm2%2BwjqhflCX3jQqPmU%2BEwfsCAvyZsTmZVwGBIx46YlceRpe04wE1Yj5BBpDmN8%2Fffr82BB2CZNe08Dv3&X-Amz-Signature=313ade0704ababad4c657656357a45e197e0dfeaf6b5f73e5a9d31d5f58682b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665535QYHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICBDWiQ%2BHnM2mTfNWPE69c4dMz2BccF2tThMokLAWdnNAiEAqdq%2BIxTQ%2BlptGny7W8Oi7tHTZXCTwu0RQNWcOe3ZFlIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEbgbNH7Mt1Bgg4YCrcA%2FSQF41ULMXZg2cded2Mvztc4Z96R6rCDmzY4q%2FwJ0FZ3f5%2FOuIYksocEtKtjFB09VL%2BTsR%2F84ysxZAGS49a5dr0c1bAUVta6ehhEiDlC615kAywzNNObr6jJkz37u84Y6ayvhG01fsMvzZepXP7cuv1LH8wdhui5zryjsareegJiFJ4MpIqF%2F88742wKRILkP4meTiH6a8YimRKtjoeQSfhbGzFiLqobhA%2BWPmHDiP2vkEDkCQ%2FF74HXDl8pikB6QUWOUU9IKeJxMmm%2Bhqi1NIhPUaEUqLAXcK3iZSZo4fr2QtV8WaJe3OvBv1j1dvaYxJ4MLnHBMV9frpH3QB2UXA1hIHb6bZRyIF1DMCa6idpasBnCXPMo7vL2%2FK3OcYdQJSfuf20Hys5%2BQx54j528AsT45GezbVtVdC0pt79W6h8dSi%2BBEgDMgqJlUD0oqwFMbtJmRF40Jp68GtobofGnJunVPalcgQjQ26zBA9H3miFQSpwlJD4w3Y6QAIhzOdiUdBfubgt7pmvTTWyq4U4ddYz4y48cm%2FYelMtkcGaFfGIRYYS7GT7%2FdpzWIdJSyER7dlHds1tCDlbcsQ5a%2FtlaleUDKzAYzyDEFCMfd35vLDIekbbGMc8KIWd18r8MI3upb8GOqUB7wOsPqZW3KWjTHhMZsjm5w0CRKXj6Sa13XNsyEwRLmJSmHyM9mZR8IKOu9I6y%2Fy%2FwuJ7jQt8SPqTtXO4txrsYZXJDLvX%2FbYdw4WAQ8TU4uf5IlZAHXG3j4vaumIANWc%2FxvhXig314PTGm2%2BwjqhflCX3jQqPmU%2BEwfsCAvyZsTmZVwGBIx46YlceRpe04wE1Yj5BBpDmN8%2Fffr82BB2CZNe08Dv3&X-Amz-Signature=0f35c3bf3b197635adf5c7bff46e6e8f4c2121259b0f0305190638d32a16be68&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665535QYHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICBDWiQ%2BHnM2mTfNWPE69c4dMz2BccF2tThMokLAWdnNAiEAqdq%2BIxTQ%2BlptGny7W8Oi7tHTZXCTwu0RQNWcOe3ZFlIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEbgbNH7Mt1Bgg4YCrcA%2FSQF41ULMXZg2cded2Mvztc4Z96R6rCDmzY4q%2FwJ0FZ3f5%2FOuIYksocEtKtjFB09VL%2BTsR%2F84ysxZAGS49a5dr0c1bAUVta6ehhEiDlC615kAywzNNObr6jJkz37u84Y6ayvhG01fsMvzZepXP7cuv1LH8wdhui5zryjsareegJiFJ4MpIqF%2F88742wKRILkP4meTiH6a8YimRKtjoeQSfhbGzFiLqobhA%2BWPmHDiP2vkEDkCQ%2FF74HXDl8pikB6QUWOUU9IKeJxMmm%2Bhqi1NIhPUaEUqLAXcK3iZSZo4fr2QtV8WaJe3OvBv1j1dvaYxJ4MLnHBMV9frpH3QB2UXA1hIHb6bZRyIF1DMCa6idpasBnCXPMo7vL2%2FK3OcYdQJSfuf20Hys5%2BQx54j528AsT45GezbVtVdC0pt79W6h8dSi%2BBEgDMgqJlUD0oqwFMbtJmRF40Jp68GtobofGnJunVPalcgQjQ26zBA9H3miFQSpwlJD4w3Y6QAIhzOdiUdBfubgt7pmvTTWyq4U4ddYz4y48cm%2FYelMtkcGaFfGIRYYS7GT7%2FdpzWIdJSyER7dlHds1tCDlbcsQ5a%2FtlaleUDKzAYzyDEFCMfd35vLDIekbbGMc8KIWd18r8MI3upb8GOqUB7wOsPqZW3KWjTHhMZsjm5w0CRKXj6Sa13XNsyEwRLmJSmHyM9mZR8IKOu9I6y%2Fy%2FwuJ7jQt8SPqTtXO4txrsYZXJDLvX%2FbYdw4WAQ8TU4uf5IlZAHXG3j4vaumIANWc%2FxvhXig314PTGm2%2BwjqhflCX3jQqPmU%2BEwfsCAvyZsTmZVwGBIx46YlceRpe04wE1Yj5BBpDmN8%2Fffr82BB2CZNe08Dv3&X-Amz-Signature=0f3db6b95f7264647ba3ec0cdad9d6a8372d8af564598323fe2d61898c3b9c36&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665535QYHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICBDWiQ%2BHnM2mTfNWPE69c4dMz2BccF2tThMokLAWdnNAiEAqdq%2BIxTQ%2BlptGny7W8Oi7tHTZXCTwu0RQNWcOe3ZFlIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEbgbNH7Mt1Bgg4YCrcA%2FSQF41ULMXZg2cded2Mvztc4Z96R6rCDmzY4q%2FwJ0FZ3f5%2FOuIYksocEtKtjFB09VL%2BTsR%2F84ysxZAGS49a5dr0c1bAUVta6ehhEiDlC615kAywzNNObr6jJkz37u84Y6ayvhG01fsMvzZepXP7cuv1LH8wdhui5zryjsareegJiFJ4MpIqF%2F88742wKRILkP4meTiH6a8YimRKtjoeQSfhbGzFiLqobhA%2BWPmHDiP2vkEDkCQ%2FF74HXDl8pikB6QUWOUU9IKeJxMmm%2Bhqi1NIhPUaEUqLAXcK3iZSZo4fr2QtV8WaJe3OvBv1j1dvaYxJ4MLnHBMV9frpH3QB2UXA1hIHb6bZRyIF1DMCa6idpasBnCXPMo7vL2%2FK3OcYdQJSfuf20Hys5%2BQx54j528AsT45GezbVtVdC0pt79W6h8dSi%2BBEgDMgqJlUD0oqwFMbtJmRF40Jp68GtobofGnJunVPalcgQjQ26zBA9H3miFQSpwlJD4w3Y6QAIhzOdiUdBfubgt7pmvTTWyq4U4ddYz4y48cm%2FYelMtkcGaFfGIRYYS7GT7%2FdpzWIdJSyER7dlHds1tCDlbcsQ5a%2FtlaleUDKzAYzyDEFCMfd35vLDIekbbGMc8KIWd18r8MI3upb8GOqUB7wOsPqZW3KWjTHhMZsjm5w0CRKXj6Sa13XNsyEwRLmJSmHyM9mZR8IKOu9I6y%2Fy%2FwuJ7jQt8SPqTtXO4txrsYZXJDLvX%2FbYdw4WAQ8TU4uf5IlZAHXG3j4vaumIANWc%2FxvhXig314PTGm2%2BwjqhflCX3jQqPmU%2BEwfsCAvyZsTmZVwGBIx46YlceRpe04wE1Yj5BBpDmN8%2Fffr82BB2CZNe08Dv3&X-Amz-Signature=b42aff02a6f3e06fd7fae6f68e45f716cf834f3b15e0544bec9a15c6b4a7cdf9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
