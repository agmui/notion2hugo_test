---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZ5OXZX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHviDd%2FAatcWi3hQS%2FYailvD2PaZXt6Olvr%2BDoD5lXUsAiEAx8OKIMIOsZn8iqHrn57%2FKcedYvk901O%2BBYlPDNmWcdgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwvHTv6s61ahBTx0ircA%2BSDXbq2%2BX7CS%2BX52DQMaLLScDR3QFPKoQg9j%2FHgOjHkzWB8nwR%2BwOH%2FOBCnnRTpLcp1VEZ5wduvtEVjAt8t%2BGsPYzFse3pyZOLfDDKF2J2I%2Fbp9h91LCEvLm7PaTdBnFYstcN2CY8ck6af9q45nXm4TV810QKw4lRwNHmLKSIWnrdQHkMp%2FvOLh4SCjgbSx3leEJ2pyKuAdqTPrtFecdi2Pzd6oXK8ZncR7JyFk0AayzCjbfacjj9gnuTTQ0hUVMWpNBmVrn6bZrVCh7KMccrx6CrGS5FqpPaTO%2BFJzUblKZEjeCWqbWxkgbFW0V9RyVL%2Fgf4%2BCkmfoobOEMxKvpzyFQ5wPE02%2FgwuLaCYrUNlf209nnpjLuVkW6DlT5kH6S9lcUJT8jy%2Fyb7%2BGuhNcTqSEzjNMhsPb4wnzuTCcOzJ1lJlgdkQpUOIYr9MwnqWdV3cENJfGEtcvEPBEcI7xnstr4Sa61X6EB5C7KJuSY6ZTK2Pq018DxnaxcBLSoI9P4alD2v3JaWEz6KOh4YsN774E7Id4XXZeqC7btrHzOpgLgGemrzOZZjlPuxiR4xsUiGcCbfmyLUAaj0Y6wX%2Bg00Jq%2FYb7xVU4Guu5Ug5DJwn1WYJ4ezFfcPD3mfYdMM3v9MMGOqUBiCOHaJbo46NoIJwg8lIHW8ixNX1FssOeyhu5R%2BLc5xjOU1F9BTses%2Fw6O8cNdNuB2nYfcMuSNxhMJy4%2BWlSTP3iN3AW6D7w3FcmBKRxT9v34njpxYb%2BfCVrTl69ufZmwOdc0wpPQGTiHCVQSiN%2BI0lU17Or6jfLDz9LEJp5gDQCYacw7Ir1Lqm%2FiTGntzrc5Xcd8fxi38lNdALwF6tS%2BzG9lfeNz&X-Amz-Signature=dd97aa88f91e0e95de5e392cee102fa0cd1b9f1ed48ce511d6d2e1b417177d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZ5OXZX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHviDd%2FAatcWi3hQS%2FYailvD2PaZXt6Olvr%2BDoD5lXUsAiEAx8OKIMIOsZn8iqHrn57%2FKcedYvk901O%2BBYlPDNmWcdgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwvHTv6s61ahBTx0ircA%2BSDXbq2%2BX7CS%2BX52DQMaLLScDR3QFPKoQg9j%2FHgOjHkzWB8nwR%2BwOH%2FOBCnnRTpLcp1VEZ5wduvtEVjAt8t%2BGsPYzFse3pyZOLfDDKF2J2I%2Fbp9h91LCEvLm7PaTdBnFYstcN2CY8ck6af9q45nXm4TV810QKw4lRwNHmLKSIWnrdQHkMp%2FvOLh4SCjgbSx3leEJ2pyKuAdqTPrtFecdi2Pzd6oXK8ZncR7JyFk0AayzCjbfacjj9gnuTTQ0hUVMWpNBmVrn6bZrVCh7KMccrx6CrGS5FqpPaTO%2BFJzUblKZEjeCWqbWxkgbFW0V9RyVL%2Fgf4%2BCkmfoobOEMxKvpzyFQ5wPE02%2FgwuLaCYrUNlf209nnpjLuVkW6DlT5kH6S9lcUJT8jy%2Fyb7%2BGuhNcTqSEzjNMhsPb4wnzuTCcOzJ1lJlgdkQpUOIYr9MwnqWdV3cENJfGEtcvEPBEcI7xnstr4Sa61X6EB5C7KJuSY6ZTK2Pq018DxnaxcBLSoI9P4alD2v3JaWEz6KOh4YsN774E7Id4XXZeqC7btrHzOpgLgGemrzOZZjlPuxiR4xsUiGcCbfmyLUAaj0Y6wX%2Bg00Jq%2FYb7xVU4Guu5Ug5DJwn1WYJ4ezFfcPD3mfYdMM3v9MMGOqUBiCOHaJbo46NoIJwg8lIHW8ixNX1FssOeyhu5R%2BLc5xjOU1F9BTses%2Fw6O8cNdNuB2nYfcMuSNxhMJy4%2BWlSTP3iN3AW6D7w3FcmBKRxT9v34njpxYb%2BfCVrTl69ufZmwOdc0wpPQGTiHCVQSiN%2BI0lU17Or6jfLDz9LEJp5gDQCYacw7Ir1Lqm%2FiTGntzrc5Xcd8fxi38lNdALwF6tS%2BzG9lfeNz&X-Amz-Signature=1927cf42429b9c0707bd37d440b2bab4c5722548375ba52287f795347319fb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZ5OXZX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHviDd%2FAatcWi3hQS%2FYailvD2PaZXt6Olvr%2BDoD5lXUsAiEAx8OKIMIOsZn8iqHrn57%2FKcedYvk901O%2BBYlPDNmWcdgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwvHTv6s61ahBTx0ircA%2BSDXbq2%2BX7CS%2BX52DQMaLLScDR3QFPKoQg9j%2FHgOjHkzWB8nwR%2BwOH%2FOBCnnRTpLcp1VEZ5wduvtEVjAt8t%2BGsPYzFse3pyZOLfDDKF2J2I%2Fbp9h91LCEvLm7PaTdBnFYstcN2CY8ck6af9q45nXm4TV810QKw4lRwNHmLKSIWnrdQHkMp%2FvOLh4SCjgbSx3leEJ2pyKuAdqTPrtFecdi2Pzd6oXK8ZncR7JyFk0AayzCjbfacjj9gnuTTQ0hUVMWpNBmVrn6bZrVCh7KMccrx6CrGS5FqpPaTO%2BFJzUblKZEjeCWqbWxkgbFW0V9RyVL%2Fgf4%2BCkmfoobOEMxKvpzyFQ5wPE02%2FgwuLaCYrUNlf209nnpjLuVkW6DlT5kH6S9lcUJT8jy%2Fyb7%2BGuhNcTqSEzjNMhsPb4wnzuTCcOzJ1lJlgdkQpUOIYr9MwnqWdV3cENJfGEtcvEPBEcI7xnstr4Sa61X6EB5C7KJuSY6ZTK2Pq018DxnaxcBLSoI9P4alD2v3JaWEz6KOh4YsN774E7Id4XXZeqC7btrHzOpgLgGemrzOZZjlPuxiR4xsUiGcCbfmyLUAaj0Y6wX%2Bg00Jq%2FYb7xVU4Guu5Ug5DJwn1WYJ4ezFfcPD3mfYdMM3v9MMGOqUBiCOHaJbo46NoIJwg8lIHW8ixNX1FssOeyhu5R%2BLc5xjOU1F9BTses%2Fw6O8cNdNuB2nYfcMuSNxhMJy4%2BWlSTP3iN3AW6D7w3FcmBKRxT9v34njpxYb%2BfCVrTl69ufZmwOdc0wpPQGTiHCVQSiN%2BI0lU17Or6jfLDz9LEJp5gDQCYacw7Ir1Lqm%2FiTGntzrc5Xcd8fxi38lNdALwF6tS%2BzG9lfeNz&X-Amz-Signature=2a08e3e3533d085ac93f92c3bc6e3d50bec42e0bab1b646aaa56786cf919fe36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZ5OXZX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHviDd%2FAatcWi3hQS%2FYailvD2PaZXt6Olvr%2BDoD5lXUsAiEAx8OKIMIOsZn8iqHrn57%2FKcedYvk901O%2BBYlPDNmWcdgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwvHTv6s61ahBTx0ircA%2BSDXbq2%2BX7CS%2BX52DQMaLLScDR3QFPKoQg9j%2FHgOjHkzWB8nwR%2BwOH%2FOBCnnRTpLcp1VEZ5wduvtEVjAt8t%2BGsPYzFse3pyZOLfDDKF2J2I%2Fbp9h91LCEvLm7PaTdBnFYstcN2CY8ck6af9q45nXm4TV810QKw4lRwNHmLKSIWnrdQHkMp%2FvOLh4SCjgbSx3leEJ2pyKuAdqTPrtFecdi2Pzd6oXK8ZncR7JyFk0AayzCjbfacjj9gnuTTQ0hUVMWpNBmVrn6bZrVCh7KMccrx6CrGS5FqpPaTO%2BFJzUblKZEjeCWqbWxkgbFW0V9RyVL%2Fgf4%2BCkmfoobOEMxKvpzyFQ5wPE02%2FgwuLaCYrUNlf209nnpjLuVkW6DlT5kH6S9lcUJT8jy%2Fyb7%2BGuhNcTqSEzjNMhsPb4wnzuTCcOzJ1lJlgdkQpUOIYr9MwnqWdV3cENJfGEtcvEPBEcI7xnstr4Sa61X6EB5C7KJuSY6ZTK2Pq018DxnaxcBLSoI9P4alD2v3JaWEz6KOh4YsN774E7Id4XXZeqC7btrHzOpgLgGemrzOZZjlPuxiR4xsUiGcCbfmyLUAaj0Y6wX%2Bg00Jq%2FYb7xVU4Guu5Ug5DJwn1WYJ4ezFfcPD3mfYdMM3v9MMGOqUBiCOHaJbo46NoIJwg8lIHW8ixNX1FssOeyhu5R%2BLc5xjOU1F9BTses%2Fw6O8cNdNuB2nYfcMuSNxhMJy4%2BWlSTP3iN3AW6D7w3FcmBKRxT9v34njpxYb%2BfCVrTl69ufZmwOdc0wpPQGTiHCVQSiN%2BI0lU17Or6jfLDz9LEJp5gDQCYacw7Ir1Lqm%2FiTGntzrc5Xcd8fxi38lNdALwF6tS%2BzG9lfeNz&X-Amz-Signature=857ca12027631c68c12246ebfa87be088b7dde624337e3f9148bbdffd1a53fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZ5OXZX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHviDd%2FAatcWi3hQS%2FYailvD2PaZXt6Olvr%2BDoD5lXUsAiEAx8OKIMIOsZn8iqHrn57%2FKcedYvk901O%2BBYlPDNmWcdgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwvHTv6s61ahBTx0ircA%2BSDXbq2%2BX7CS%2BX52DQMaLLScDR3QFPKoQg9j%2FHgOjHkzWB8nwR%2BwOH%2FOBCnnRTpLcp1VEZ5wduvtEVjAt8t%2BGsPYzFse3pyZOLfDDKF2J2I%2Fbp9h91LCEvLm7PaTdBnFYstcN2CY8ck6af9q45nXm4TV810QKw4lRwNHmLKSIWnrdQHkMp%2FvOLh4SCjgbSx3leEJ2pyKuAdqTPrtFecdi2Pzd6oXK8ZncR7JyFk0AayzCjbfacjj9gnuTTQ0hUVMWpNBmVrn6bZrVCh7KMccrx6CrGS5FqpPaTO%2BFJzUblKZEjeCWqbWxkgbFW0V9RyVL%2Fgf4%2BCkmfoobOEMxKvpzyFQ5wPE02%2FgwuLaCYrUNlf209nnpjLuVkW6DlT5kH6S9lcUJT8jy%2Fyb7%2BGuhNcTqSEzjNMhsPb4wnzuTCcOzJ1lJlgdkQpUOIYr9MwnqWdV3cENJfGEtcvEPBEcI7xnstr4Sa61X6EB5C7KJuSY6ZTK2Pq018DxnaxcBLSoI9P4alD2v3JaWEz6KOh4YsN774E7Id4XXZeqC7btrHzOpgLgGemrzOZZjlPuxiR4xsUiGcCbfmyLUAaj0Y6wX%2Bg00Jq%2FYb7xVU4Guu5Ug5DJwn1WYJ4ezFfcPD3mfYdMM3v9MMGOqUBiCOHaJbo46NoIJwg8lIHW8ixNX1FssOeyhu5R%2BLc5xjOU1F9BTses%2Fw6O8cNdNuB2nYfcMuSNxhMJy4%2BWlSTP3iN3AW6D7w3FcmBKRxT9v34njpxYb%2BfCVrTl69ufZmwOdc0wpPQGTiHCVQSiN%2BI0lU17Or6jfLDz9LEJp5gDQCYacw7Ir1Lqm%2FiTGntzrc5Xcd8fxi38lNdALwF6tS%2BzG9lfeNz&X-Amz-Signature=e9c2596d1e31e78532e562f194e0ec37fae44a5bcccb09a0da670eadd52d3591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZ5OXZX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHviDd%2FAatcWi3hQS%2FYailvD2PaZXt6Olvr%2BDoD5lXUsAiEAx8OKIMIOsZn8iqHrn57%2FKcedYvk901O%2BBYlPDNmWcdgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwvHTv6s61ahBTx0ircA%2BSDXbq2%2BX7CS%2BX52DQMaLLScDR3QFPKoQg9j%2FHgOjHkzWB8nwR%2BwOH%2FOBCnnRTpLcp1VEZ5wduvtEVjAt8t%2BGsPYzFse3pyZOLfDDKF2J2I%2Fbp9h91LCEvLm7PaTdBnFYstcN2CY8ck6af9q45nXm4TV810QKw4lRwNHmLKSIWnrdQHkMp%2FvOLh4SCjgbSx3leEJ2pyKuAdqTPrtFecdi2Pzd6oXK8ZncR7JyFk0AayzCjbfacjj9gnuTTQ0hUVMWpNBmVrn6bZrVCh7KMccrx6CrGS5FqpPaTO%2BFJzUblKZEjeCWqbWxkgbFW0V9RyVL%2Fgf4%2BCkmfoobOEMxKvpzyFQ5wPE02%2FgwuLaCYrUNlf209nnpjLuVkW6DlT5kH6S9lcUJT8jy%2Fyb7%2BGuhNcTqSEzjNMhsPb4wnzuTCcOzJ1lJlgdkQpUOIYr9MwnqWdV3cENJfGEtcvEPBEcI7xnstr4Sa61X6EB5C7KJuSY6ZTK2Pq018DxnaxcBLSoI9P4alD2v3JaWEz6KOh4YsN774E7Id4XXZeqC7btrHzOpgLgGemrzOZZjlPuxiR4xsUiGcCbfmyLUAaj0Y6wX%2Bg00Jq%2FYb7xVU4Guu5Ug5DJwn1WYJ4ezFfcPD3mfYdMM3v9MMGOqUBiCOHaJbo46NoIJwg8lIHW8ixNX1FssOeyhu5R%2BLc5xjOU1F9BTses%2Fw6O8cNdNuB2nYfcMuSNxhMJy4%2BWlSTP3iN3AW6D7w3FcmBKRxT9v34njpxYb%2BfCVrTl69ufZmwOdc0wpPQGTiHCVQSiN%2BI0lU17Or6jfLDz9LEJp5gDQCYacw7Ir1Lqm%2FiTGntzrc5Xcd8fxi38lNdALwF6tS%2BzG9lfeNz&X-Amz-Signature=aeff2646683b886b2a130e76b876acd4cf2b7c3d851241be9c6291cabdf3d91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZ5OXZX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHviDd%2FAatcWi3hQS%2FYailvD2PaZXt6Olvr%2BDoD5lXUsAiEAx8OKIMIOsZn8iqHrn57%2FKcedYvk901O%2BBYlPDNmWcdgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwvHTv6s61ahBTx0ircA%2BSDXbq2%2BX7CS%2BX52DQMaLLScDR3QFPKoQg9j%2FHgOjHkzWB8nwR%2BwOH%2FOBCnnRTpLcp1VEZ5wduvtEVjAt8t%2BGsPYzFse3pyZOLfDDKF2J2I%2Fbp9h91LCEvLm7PaTdBnFYstcN2CY8ck6af9q45nXm4TV810QKw4lRwNHmLKSIWnrdQHkMp%2FvOLh4SCjgbSx3leEJ2pyKuAdqTPrtFecdi2Pzd6oXK8ZncR7JyFk0AayzCjbfacjj9gnuTTQ0hUVMWpNBmVrn6bZrVCh7KMccrx6CrGS5FqpPaTO%2BFJzUblKZEjeCWqbWxkgbFW0V9RyVL%2Fgf4%2BCkmfoobOEMxKvpzyFQ5wPE02%2FgwuLaCYrUNlf209nnpjLuVkW6DlT5kH6S9lcUJT8jy%2Fyb7%2BGuhNcTqSEzjNMhsPb4wnzuTCcOzJ1lJlgdkQpUOIYr9MwnqWdV3cENJfGEtcvEPBEcI7xnstr4Sa61X6EB5C7KJuSY6ZTK2Pq018DxnaxcBLSoI9P4alD2v3JaWEz6KOh4YsN774E7Id4XXZeqC7btrHzOpgLgGemrzOZZjlPuxiR4xsUiGcCbfmyLUAaj0Y6wX%2Bg00Jq%2FYb7xVU4Guu5Ug5DJwn1WYJ4ezFfcPD3mfYdMM3v9MMGOqUBiCOHaJbo46NoIJwg8lIHW8ixNX1FssOeyhu5R%2BLc5xjOU1F9BTses%2Fw6O8cNdNuB2nYfcMuSNxhMJy4%2BWlSTP3iN3AW6D7w3FcmBKRxT9v34njpxYb%2BfCVrTl69ufZmwOdc0wpPQGTiHCVQSiN%2BI0lU17Or6jfLDz9LEJp5gDQCYacw7Ir1Lqm%2FiTGntzrc5Xcd8fxi38lNdALwF6tS%2BzG9lfeNz&X-Amz-Signature=0b4a509c7c0283a8faf1f0501867d2c650da510f495d4389ba4eac79fd4d6987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
