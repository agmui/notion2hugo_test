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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBS6EZN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsxYc4z1dqEUVcpMyW5q7WYWUG%2BNyEs0znllycPI4cVAiBK8K%2BEz%2FQRhQHPzi4bsLGtRoP2nwut2wgNGiAYeGUKYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3IRmcGCQob0F7%2BYQKtwDPwqkIL0HM2GHTzvZajGEsDp4gBJqFbMYCV3LMFZmOsRhBwwvbP8hudnodkwchSn5me7Hl3jv%2BtUz31RfeaoA9e474LmvA2yycf%2F%2Bem8mfMP0zU5NBnGQ5ys4QMdaRpKTetckMdUz4EVJXw4M%2B4PvpHejy%2BzB94xSfW46aZa1FWPfr9JJwDP%2Bm74p7JzrH12o%2Bg0npLCz4Fetx5oPPiE4jUgc%2BN1XGX1Gpe%2B%2FCBQKxw%2BL1Fh1ER25RqzgewRu6l6lhqv8guNQtPD2qhRpx5qckjCsI0Nfv0akcFGERSRoIhVni6Rqm9%2BnNDIDhkQWEPDzQzsZG4tGJLwG6uiLLVecnJt%2BvseRywPY3BPMmUPkKFId9oK7TmbR1HsS14S8e7wlb1Tsvn%2FgGu45bdnYrz%2F8LU2zZx3I3v6Q875QAZplW1H6ogfqjUkYSp%2BPknL7TxdfgddjJSwyEPxqHty9ixeHpadjxTCzC0hROOh8dXQZeFbevm9BTsOA6z7jSocueVsUGlBs8wIAVqs%2F4ifS0haUI4oLj76aShryW2GPmTjvYyCmaFeYOcDaUnEnX%2BpPwFjIXGjUOmb%2BNaBIyTpoXRF7kPG9Q1gWkBJegTyM1lQo180Yje5M8WRdUjCRNrIwtqywwQY6pgGkydMsbW8%2FFUJvTPsreR0Yw7tNXpEZ52Ipqpqfu7cv19BkA7NJ8HMEboudtAzPfIsTaejt6Gb52EX%2BP8KSGWrG6WtzlLPUkfOIc%2FLC7sNmnO2dtHAJmdJh6ljkd47KwISOWQezHHqhvJwxmigRYPZ6UUrk6WhlLedMOmeruBGVBObKfW%2FZQmkPeYsYKqMvjCe5J3ERe%2FJQkHrqhKGo007VCi8eGL8i&X-Amz-Signature=43dbc98795aa121a9cbfc5b43198dac71d64832f8e1d2a7aac2d20bfdc59b120&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBS6EZN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsxYc4z1dqEUVcpMyW5q7WYWUG%2BNyEs0znllycPI4cVAiBK8K%2BEz%2FQRhQHPzi4bsLGtRoP2nwut2wgNGiAYeGUKYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3IRmcGCQob0F7%2BYQKtwDPwqkIL0HM2GHTzvZajGEsDp4gBJqFbMYCV3LMFZmOsRhBwwvbP8hudnodkwchSn5me7Hl3jv%2BtUz31RfeaoA9e474LmvA2yycf%2F%2Bem8mfMP0zU5NBnGQ5ys4QMdaRpKTetckMdUz4EVJXw4M%2B4PvpHejy%2BzB94xSfW46aZa1FWPfr9JJwDP%2Bm74p7JzrH12o%2Bg0npLCz4Fetx5oPPiE4jUgc%2BN1XGX1Gpe%2B%2FCBQKxw%2BL1Fh1ER25RqzgewRu6l6lhqv8guNQtPD2qhRpx5qckjCsI0Nfv0akcFGERSRoIhVni6Rqm9%2BnNDIDhkQWEPDzQzsZG4tGJLwG6uiLLVecnJt%2BvseRywPY3BPMmUPkKFId9oK7TmbR1HsS14S8e7wlb1Tsvn%2FgGu45bdnYrz%2F8LU2zZx3I3v6Q875QAZplW1H6ogfqjUkYSp%2BPknL7TxdfgddjJSwyEPxqHty9ixeHpadjxTCzC0hROOh8dXQZeFbevm9BTsOA6z7jSocueVsUGlBs8wIAVqs%2F4ifS0haUI4oLj76aShryW2GPmTjvYyCmaFeYOcDaUnEnX%2BpPwFjIXGjUOmb%2BNaBIyTpoXRF7kPG9Q1gWkBJegTyM1lQo180Yje5M8WRdUjCRNrIwtqywwQY6pgGkydMsbW8%2FFUJvTPsreR0Yw7tNXpEZ52Ipqpqfu7cv19BkA7NJ8HMEboudtAzPfIsTaejt6Gb52EX%2BP8KSGWrG6WtzlLPUkfOIc%2FLC7sNmnO2dtHAJmdJh6ljkd47KwISOWQezHHqhvJwxmigRYPZ6UUrk6WhlLedMOmeruBGVBObKfW%2FZQmkPeYsYKqMvjCe5J3ERe%2FJQkHrqhKGo007VCi8eGL8i&X-Amz-Signature=b84e18411bba5a692de8a1036d3831f1fc5d1723b460e09a7767af90ef4be661&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBS6EZN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsxYc4z1dqEUVcpMyW5q7WYWUG%2BNyEs0znllycPI4cVAiBK8K%2BEz%2FQRhQHPzi4bsLGtRoP2nwut2wgNGiAYeGUKYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3IRmcGCQob0F7%2BYQKtwDPwqkIL0HM2GHTzvZajGEsDp4gBJqFbMYCV3LMFZmOsRhBwwvbP8hudnodkwchSn5me7Hl3jv%2BtUz31RfeaoA9e474LmvA2yycf%2F%2Bem8mfMP0zU5NBnGQ5ys4QMdaRpKTetckMdUz4EVJXw4M%2B4PvpHejy%2BzB94xSfW46aZa1FWPfr9JJwDP%2Bm74p7JzrH12o%2Bg0npLCz4Fetx5oPPiE4jUgc%2BN1XGX1Gpe%2B%2FCBQKxw%2BL1Fh1ER25RqzgewRu6l6lhqv8guNQtPD2qhRpx5qckjCsI0Nfv0akcFGERSRoIhVni6Rqm9%2BnNDIDhkQWEPDzQzsZG4tGJLwG6uiLLVecnJt%2BvseRywPY3BPMmUPkKFId9oK7TmbR1HsS14S8e7wlb1Tsvn%2FgGu45bdnYrz%2F8LU2zZx3I3v6Q875QAZplW1H6ogfqjUkYSp%2BPknL7TxdfgddjJSwyEPxqHty9ixeHpadjxTCzC0hROOh8dXQZeFbevm9BTsOA6z7jSocueVsUGlBs8wIAVqs%2F4ifS0haUI4oLj76aShryW2GPmTjvYyCmaFeYOcDaUnEnX%2BpPwFjIXGjUOmb%2BNaBIyTpoXRF7kPG9Q1gWkBJegTyM1lQo180Yje5M8WRdUjCRNrIwtqywwQY6pgGkydMsbW8%2FFUJvTPsreR0Yw7tNXpEZ52Ipqpqfu7cv19BkA7NJ8HMEboudtAzPfIsTaejt6Gb52EX%2BP8KSGWrG6WtzlLPUkfOIc%2FLC7sNmnO2dtHAJmdJh6ljkd47KwISOWQezHHqhvJwxmigRYPZ6UUrk6WhlLedMOmeruBGVBObKfW%2FZQmkPeYsYKqMvjCe5J3ERe%2FJQkHrqhKGo007VCi8eGL8i&X-Amz-Signature=c00df09c0e1457d14c30c7951641cbb301b912803f43badf29796996ae8c5fae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBS6EZN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsxYc4z1dqEUVcpMyW5q7WYWUG%2BNyEs0znllycPI4cVAiBK8K%2BEz%2FQRhQHPzi4bsLGtRoP2nwut2wgNGiAYeGUKYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3IRmcGCQob0F7%2BYQKtwDPwqkIL0HM2GHTzvZajGEsDp4gBJqFbMYCV3LMFZmOsRhBwwvbP8hudnodkwchSn5me7Hl3jv%2BtUz31RfeaoA9e474LmvA2yycf%2F%2Bem8mfMP0zU5NBnGQ5ys4QMdaRpKTetckMdUz4EVJXw4M%2B4PvpHejy%2BzB94xSfW46aZa1FWPfr9JJwDP%2Bm74p7JzrH12o%2Bg0npLCz4Fetx5oPPiE4jUgc%2BN1XGX1Gpe%2B%2FCBQKxw%2BL1Fh1ER25RqzgewRu6l6lhqv8guNQtPD2qhRpx5qckjCsI0Nfv0akcFGERSRoIhVni6Rqm9%2BnNDIDhkQWEPDzQzsZG4tGJLwG6uiLLVecnJt%2BvseRywPY3BPMmUPkKFId9oK7TmbR1HsS14S8e7wlb1Tsvn%2FgGu45bdnYrz%2F8LU2zZx3I3v6Q875QAZplW1H6ogfqjUkYSp%2BPknL7TxdfgddjJSwyEPxqHty9ixeHpadjxTCzC0hROOh8dXQZeFbevm9BTsOA6z7jSocueVsUGlBs8wIAVqs%2F4ifS0haUI4oLj76aShryW2GPmTjvYyCmaFeYOcDaUnEnX%2BpPwFjIXGjUOmb%2BNaBIyTpoXRF7kPG9Q1gWkBJegTyM1lQo180Yje5M8WRdUjCRNrIwtqywwQY6pgGkydMsbW8%2FFUJvTPsreR0Yw7tNXpEZ52Ipqpqfu7cv19BkA7NJ8HMEboudtAzPfIsTaejt6Gb52EX%2BP8KSGWrG6WtzlLPUkfOIc%2FLC7sNmnO2dtHAJmdJh6ljkd47KwISOWQezHHqhvJwxmigRYPZ6UUrk6WhlLedMOmeruBGVBObKfW%2FZQmkPeYsYKqMvjCe5J3ERe%2FJQkHrqhKGo007VCi8eGL8i&X-Amz-Signature=f0913ba105c8046c23631d046ef5987dc0fcec43ef93f3a74539663a52b5be61&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBS6EZN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsxYc4z1dqEUVcpMyW5q7WYWUG%2BNyEs0znllycPI4cVAiBK8K%2BEz%2FQRhQHPzi4bsLGtRoP2nwut2wgNGiAYeGUKYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3IRmcGCQob0F7%2BYQKtwDPwqkIL0HM2GHTzvZajGEsDp4gBJqFbMYCV3LMFZmOsRhBwwvbP8hudnodkwchSn5me7Hl3jv%2BtUz31RfeaoA9e474LmvA2yycf%2F%2Bem8mfMP0zU5NBnGQ5ys4QMdaRpKTetckMdUz4EVJXw4M%2B4PvpHejy%2BzB94xSfW46aZa1FWPfr9JJwDP%2Bm74p7JzrH12o%2Bg0npLCz4Fetx5oPPiE4jUgc%2BN1XGX1Gpe%2B%2FCBQKxw%2BL1Fh1ER25RqzgewRu6l6lhqv8guNQtPD2qhRpx5qckjCsI0Nfv0akcFGERSRoIhVni6Rqm9%2BnNDIDhkQWEPDzQzsZG4tGJLwG6uiLLVecnJt%2BvseRywPY3BPMmUPkKFId9oK7TmbR1HsS14S8e7wlb1Tsvn%2FgGu45bdnYrz%2F8LU2zZx3I3v6Q875QAZplW1H6ogfqjUkYSp%2BPknL7TxdfgddjJSwyEPxqHty9ixeHpadjxTCzC0hROOh8dXQZeFbevm9BTsOA6z7jSocueVsUGlBs8wIAVqs%2F4ifS0haUI4oLj76aShryW2GPmTjvYyCmaFeYOcDaUnEnX%2BpPwFjIXGjUOmb%2BNaBIyTpoXRF7kPG9Q1gWkBJegTyM1lQo180Yje5M8WRdUjCRNrIwtqywwQY6pgGkydMsbW8%2FFUJvTPsreR0Yw7tNXpEZ52Ipqpqfu7cv19BkA7NJ8HMEboudtAzPfIsTaejt6Gb52EX%2BP8KSGWrG6WtzlLPUkfOIc%2FLC7sNmnO2dtHAJmdJh6ljkd47KwISOWQezHHqhvJwxmigRYPZ6UUrk6WhlLedMOmeruBGVBObKfW%2FZQmkPeYsYKqMvjCe5J3ERe%2FJQkHrqhKGo007VCi8eGL8i&X-Amz-Signature=a1f7a63f2049adfda25a34411196746dd9de1659100c32754f7fae2d3ed22cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBS6EZN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsxYc4z1dqEUVcpMyW5q7WYWUG%2BNyEs0znllycPI4cVAiBK8K%2BEz%2FQRhQHPzi4bsLGtRoP2nwut2wgNGiAYeGUKYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3IRmcGCQob0F7%2BYQKtwDPwqkIL0HM2GHTzvZajGEsDp4gBJqFbMYCV3LMFZmOsRhBwwvbP8hudnodkwchSn5me7Hl3jv%2BtUz31RfeaoA9e474LmvA2yycf%2F%2Bem8mfMP0zU5NBnGQ5ys4QMdaRpKTetckMdUz4EVJXw4M%2B4PvpHejy%2BzB94xSfW46aZa1FWPfr9JJwDP%2Bm74p7JzrH12o%2Bg0npLCz4Fetx5oPPiE4jUgc%2BN1XGX1Gpe%2B%2FCBQKxw%2BL1Fh1ER25RqzgewRu6l6lhqv8guNQtPD2qhRpx5qckjCsI0Nfv0akcFGERSRoIhVni6Rqm9%2BnNDIDhkQWEPDzQzsZG4tGJLwG6uiLLVecnJt%2BvseRywPY3BPMmUPkKFId9oK7TmbR1HsS14S8e7wlb1Tsvn%2FgGu45bdnYrz%2F8LU2zZx3I3v6Q875QAZplW1H6ogfqjUkYSp%2BPknL7TxdfgddjJSwyEPxqHty9ixeHpadjxTCzC0hROOh8dXQZeFbevm9BTsOA6z7jSocueVsUGlBs8wIAVqs%2F4ifS0haUI4oLj76aShryW2GPmTjvYyCmaFeYOcDaUnEnX%2BpPwFjIXGjUOmb%2BNaBIyTpoXRF7kPG9Q1gWkBJegTyM1lQo180Yje5M8WRdUjCRNrIwtqywwQY6pgGkydMsbW8%2FFUJvTPsreR0Yw7tNXpEZ52Ipqpqfu7cv19BkA7NJ8HMEboudtAzPfIsTaejt6Gb52EX%2BP8KSGWrG6WtzlLPUkfOIc%2FLC7sNmnO2dtHAJmdJh6ljkd47KwISOWQezHHqhvJwxmigRYPZ6UUrk6WhlLedMOmeruBGVBObKfW%2FZQmkPeYsYKqMvjCe5J3ERe%2FJQkHrqhKGo007VCi8eGL8i&X-Amz-Signature=6039dd790583b59a0fe5fe1cc3227f516db023d1c89c9b7e9d80004a3e0fac4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBS6EZN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsxYc4z1dqEUVcpMyW5q7WYWUG%2BNyEs0znllycPI4cVAiBK8K%2BEz%2FQRhQHPzi4bsLGtRoP2nwut2wgNGiAYeGUKYyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3IRmcGCQob0F7%2BYQKtwDPwqkIL0HM2GHTzvZajGEsDp4gBJqFbMYCV3LMFZmOsRhBwwvbP8hudnodkwchSn5me7Hl3jv%2BtUz31RfeaoA9e474LmvA2yycf%2F%2Bem8mfMP0zU5NBnGQ5ys4QMdaRpKTetckMdUz4EVJXw4M%2B4PvpHejy%2BzB94xSfW46aZa1FWPfr9JJwDP%2Bm74p7JzrH12o%2Bg0npLCz4Fetx5oPPiE4jUgc%2BN1XGX1Gpe%2B%2FCBQKxw%2BL1Fh1ER25RqzgewRu6l6lhqv8guNQtPD2qhRpx5qckjCsI0Nfv0akcFGERSRoIhVni6Rqm9%2BnNDIDhkQWEPDzQzsZG4tGJLwG6uiLLVecnJt%2BvseRywPY3BPMmUPkKFId9oK7TmbR1HsS14S8e7wlb1Tsvn%2FgGu45bdnYrz%2F8LU2zZx3I3v6Q875QAZplW1H6ogfqjUkYSp%2BPknL7TxdfgddjJSwyEPxqHty9ixeHpadjxTCzC0hROOh8dXQZeFbevm9BTsOA6z7jSocueVsUGlBs8wIAVqs%2F4ifS0haUI4oLj76aShryW2GPmTjvYyCmaFeYOcDaUnEnX%2BpPwFjIXGjUOmb%2BNaBIyTpoXRF7kPG9Q1gWkBJegTyM1lQo180Yje5M8WRdUjCRNrIwtqywwQY6pgGkydMsbW8%2FFUJvTPsreR0Yw7tNXpEZ52Ipqpqfu7cv19BkA7NJ8HMEboudtAzPfIsTaejt6Gb52EX%2BP8KSGWrG6WtzlLPUkfOIc%2FLC7sNmnO2dtHAJmdJh6ljkd47KwISOWQezHHqhvJwxmigRYPZ6UUrk6WhlLedMOmeruBGVBObKfW%2FZQmkPeYsYKqMvjCe5J3ERe%2FJQkHrqhKGo007VCi8eGL8i&X-Amz-Signature=cc668bbb251a02b4beca4e8aa8d3a46d7d18b998da6a7975b1afd51c6a0ee6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
