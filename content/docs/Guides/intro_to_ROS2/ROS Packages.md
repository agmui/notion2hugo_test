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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFMTX5A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH2z218Mtsm03azzfhWA8anA0nduIqhu7Lwv%2FpAlVK3cAiEA9%2Fqee%2BWDwJtk%2BsSoqCePTbcmMhWW5zAcJRg49yGQ%2B1Uq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOCCKJQhqHvF2VADKCrcAzkPiPfYdiv8XNT63MfOeu0DONMmP4sf%2BH0i7jM2GytNTkyeBujlE69RGxzu6AuP5aipAoa08MZRlJIfFUGe1A1LaURRl%2Bv%2FOq4bBrhsbRIbSDB7Nn8jLNRC7qmwK8inClgPj61I052uj%2BO2vCI1N3ugufx9HolzMm1u4OFPVsUY9%2BlWg%2F2gJZ5axIL0mJ6NFHs8f8pAbpNIqro2As%2Ft6U9jv1MUnbZvf%2BhNGD%2FDiAl9xlY%2Flph3U126qo3QUZaFnb1OHeenS6IbOlFthCMYEgqHAWeVAYSJRNNjKb0BOdKSiGuzRhjBbQKg1UKH8SWNo2ZeLjhFb0xopwR24M195ytXovp7TAhWTv9UY9eZxXpEa%2FCJ2b6JXlGWLqMRuCkl8uEl1yiB0J%2BS%2FXVP%2FJSFBnF0xrPvjdYj5JBM0JLrbdC1E5%2F3Q0ayyFjSZ8BsIaoyMdcGkCiYyWbttjh2h0Y8FAYLgiCNx09FkwuYLIaSKNr9TtJUeBZ%2F60tY4Ye7CsxedKwgXcHV1aT%2BpIni04EaEk9HwIF0vtCDXWCI%2FCGU7LWfxYmcoLg%2F4kP843gRHY73DjDupmwJ1%2B0TVIwbTWN%2Fo7FaR2ZveOlimpXkbOT7xy0lbGnt%2BeoiW%2B%2Fxz8cEMMaircMGOqUB5aWUs67Dod8YpD5i5rnrSMbSEsadYetvQ7hxEy8gIvsWOalw0AKoSeZhMf2MIgToalgUgJDNOHh2j9onPgh45yv31mrUHT%2FJz8pB9kKemUx%2B6pF0KFyTvsRRbqhZcjB2S57BTQlGFH1r8hrRtFiE8v2lzCaQq8BivD1efHDQBCfOxSYMS207ZxEP5rX5Nl7G78tPtCmLv%2BOJ6DP%2BtV2xk6jkCgHd&X-Amz-Signature=210a490e16e9829543af197357291856bdda1d1af7200b1f522968c156b7fddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFMTX5A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH2z218Mtsm03azzfhWA8anA0nduIqhu7Lwv%2FpAlVK3cAiEA9%2Fqee%2BWDwJtk%2BsSoqCePTbcmMhWW5zAcJRg49yGQ%2B1Uq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOCCKJQhqHvF2VADKCrcAzkPiPfYdiv8XNT63MfOeu0DONMmP4sf%2BH0i7jM2GytNTkyeBujlE69RGxzu6AuP5aipAoa08MZRlJIfFUGe1A1LaURRl%2Bv%2FOq4bBrhsbRIbSDB7Nn8jLNRC7qmwK8inClgPj61I052uj%2BO2vCI1N3ugufx9HolzMm1u4OFPVsUY9%2BlWg%2F2gJZ5axIL0mJ6NFHs8f8pAbpNIqro2As%2Ft6U9jv1MUnbZvf%2BhNGD%2FDiAl9xlY%2Flph3U126qo3QUZaFnb1OHeenS6IbOlFthCMYEgqHAWeVAYSJRNNjKb0BOdKSiGuzRhjBbQKg1UKH8SWNo2ZeLjhFb0xopwR24M195ytXovp7TAhWTv9UY9eZxXpEa%2FCJ2b6JXlGWLqMRuCkl8uEl1yiB0J%2BS%2FXVP%2FJSFBnF0xrPvjdYj5JBM0JLrbdC1E5%2F3Q0ayyFjSZ8BsIaoyMdcGkCiYyWbttjh2h0Y8FAYLgiCNx09FkwuYLIaSKNr9TtJUeBZ%2F60tY4Ye7CsxedKwgXcHV1aT%2BpIni04EaEk9HwIF0vtCDXWCI%2FCGU7LWfxYmcoLg%2F4kP843gRHY73DjDupmwJ1%2B0TVIwbTWN%2Fo7FaR2ZveOlimpXkbOT7xy0lbGnt%2BeoiW%2B%2Fxz8cEMMaircMGOqUB5aWUs67Dod8YpD5i5rnrSMbSEsadYetvQ7hxEy8gIvsWOalw0AKoSeZhMf2MIgToalgUgJDNOHh2j9onPgh45yv31mrUHT%2FJz8pB9kKemUx%2B6pF0KFyTvsRRbqhZcjB2S57BTQlGFH1r8hrRtFiE8v2lzCaQq8BivD1efHDQBCfOxSYMS207ZxEP5rX5Nl7G78tPtCmLv%2BOJ6DP%2BtV2xk6jkCgHd&X-Amz-Signature=a08b42710beb78fbce25a9d8fef619cb96d71ba5bcdbefab2df503b1c183bbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFMTX5A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH2z218Mtsm03azzfhWA8anA0nduIqhu7Lwv%2FpAlVK3cAiEA9%2Fqee%2BWDwJtk%2BsSoqCePTbcmMhWW5zAcJRg49yGQ%2B1Uq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOCCKJQhqHvF2VADKCrcAzkPiPfYdiv8XNT63MfOeu0DONMmP4sf%2BH0i7jM2GytNTkyeBujlE69RGxzu6AuP5aipAoa08MZRlJIfFUGe1A1LaURRl%2Bv%2FOq4bBrhsbRIbSDB7Nn8jLNRC7qmwK8inClgPj61I052uj%2BO2vCI1N3ugufx9HolzMm1u4OFPVsUY9%2BlWg%2F2gJZ5axIL0mJ6NFHs8f8pAbpNIqro2As%2Ft6U9jv1MUnbZvf%2BhNGD%2FDiAl9xlY%2Flph3U126qo3QUZaFnb1OHeenS6IbOlFthCMYEgqHAWeVAYSJRNNjKb0BOdKSiGuzRhjBbQKg1UKH8SWNo2ZeLjhFb0xopwR24M195ytXovp7TAhWTv9UY9eZxXpEa%2FCJ2b6JXlGWLqMRuCkl8uEl1yiB0J%2BS%2FXVP%2FJSFBnF0xrPvjdYj5JBM0JLrbdC1E5%2F3Q0ayyFjSZ8BsIaoyMdcGkCiYyWbttjh2h0Y8FAYLgiCNx09FkwuYLIaSKNr9TtJUeBZ%2F60tY4Ye7CsxedKwgXcHV1aT%2BpIni04EaEk9HwIF0vtCDXWCI%2FCGU7LWfxYmcoLg%2F4kP843gRHY73DjDupmwJ1%2B0TVIwbTWN%2Fo7FaR2ZveOlimpXkbOT7xy0lbGnt%2BeoiW%2B%2Fxz8cEMMaircMGOqUB5aWUs67Dod8YpD5i5rnrSMbSEsadYetvQ7hxEy8gIvsWOalw0AKoSeZhMf2MIgToalgUgJDNOHh2j9onPgh45yv31mrUHT%2FJz8pB9kKemUx%2B6pF0KFyTvsRRbqhZcjB2S57BTQlGFH1r8hrRtFiE8v2lzCaQq8BivD1efHDQBCfOxSYMS207ZxEP5rX5Nl7G78tPtCmLv%2BOJ6DP%2BtV2xk6jkCgHd&X-Amz-Signature=2b3979e1418fb96462d8c7c6ebe9843c9cfb070262465e271c4806ce7270768b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFMTX5A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH2z218Mtsm03azzfhWA8anA0nduIqhu7Lwv%2FpAlVK3cAiEA9%2Fqee%2BWDwJtk%2BsSoqCePTbcmMhWW5zAcJRg49yGQ%2B1Uq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOCCKJQhqHvF2VADKCrcAzkPiPfYdiv8XNT63MfOeu0DONMmP4sf%2BH0i7jM2GytNTkyeBujlE69RGxzu6AuP5aipAoa08MZRlJIfFUGe1A1LaURRl%2Bv%2FOq4bBrhsbRIbSDB7Nn8jLNRC7qmwK8inClgPj61I052uj%2BO2vCI1N3ugufx9HolzMm1u4OFPVsUY9%2BlWg%2F2gJZ5axIL0mJ6NFHs8f8pAbpNIqro2As%2Ft6U9jv1MUnbZvf%2BhNGD%2FDiAl9xlY%2Flph3U126qo3QUZaFnb1OHeenS6IbOlFthCMYEgqHAWeVAYSJRNNjKb0BOdKSiGuzRhjBbQKg1UKH8SWNo2ZeLjhFb0xopwR24M195ytXovp7TAhWTv9UY9eZxXpEa%2FCJ2b6JXlGWLqMRuCkl8uEl1yiB0J%2BS%2FXVP%2FJSFBnF0xrPvjdYj5JBM0JLrbdC1E5%2F3Q0ayyFjSZ8BsIaoyMdcGkCiYyWbttjh2h0Y8FAYLgiCNx09FkwuYLIaSKNr9TtJUeBZ%2F60tY4Ye7CsxedKwgXcHV1aT%2BpIni04EaEk9HwIF0vtCDXWCI%2FCGU7LWfxYmcoLg%2F4kP843gRHY73DjDupmwJ1%2B0TVIwbTWN%2Fo7FaR2ZveOlimpXkbOT7xy0lbGnt%2BeoiW%2B%2Fxz8cEMMaircMGOqUB5aWUs67Dod8YpD5i5rnrSMbSEsadYetvQ7hxEy8gIvsWOalw0AKoSeZhMf2MIgToalgUgJDNOHh2j9onPgh45yv31mrUHT%2FJz8pB9kKemUx%2B6pF0KFyTvsRRbqhZcjB2S57BTQlGFH1r8hrRtFiE8v2lzCaQq8BivD1efHDQBCfOxSYMS207ZxEP5rX5Nl7G78tPtCmLv%2BOJ6DP%2BtV2xk6jkCgHd&X-Amz-Signature=69a75159992fa7968077219698de941c296ca239767f4fff6f06a5d1fc43a0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFMTX5A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH2z218Mtsm03azzfhWA8anA0nduIqhu7Lwv%2FpAlVK3cAiEA9%2Fqee%2BWDwJtk%2BsSoqCePTbcmMhWW5zAcJRg49yGQ%2B1Uq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOCCKJQhqHvF2VADKCrcAzkPiPfYdiv8XNT63MfOeu0DONMmP4sf%2BH0i7jM2GytNTkyeBujlE69RGxzu6AuP5aipAoa08MZRlJIfFUGe1A1LaURRl%2Bv%2FOq4bBrhsbRIbSDB7Nn8jLNRC7qmwK8inClgPj61I052uj%2BO2vCI1N3ugufx9HolzMm1u4OFPVsUY9%2BlWg%2F2gJZ5axIL0mJ6NFHs8f8pAbpNIqro2As%2Ft6U9jv1MUnbZvf%2BhNGD%2FDiAl9xlY%2Flph3U126qo3QUZaFnb1OHeenS6IbOlFthCMYEgqHAWeVAYSJRNNjKb0BOdKSiGuzRhjBbQKg1UKH8SWNo2ZeLjhFb0xopwR24M195ytXovp7TAhWTv9UY9eZxXpEa%2FCJ2b6JXlGWLqMRuCkl8uEl1yiB0J%2BS%2FXVP%2FJSFBnF0xrPvjdYj5JBM0JLrbdC1E5%2F3Q0ayyFjSZ8BsIaoyMdcGkCiYyWbttjh2h0Y8FAYLgiCNx09FkwuYLIaSKNr9TtJUeBZ%2F60tY4Ye7CsxedKwgXcHV1aT%2BpIni04EaEk9HwIF0vtCDXWCI%2FCGU7LWfxYmcoLg%2F4kP843gRHY73DjDupmwJ1%2B0TVIwbTWN%2Fo7FaR2ZveOlimpXkbOT7xy0lbGnt%2BeoiW%2B%2Fxz8cEMMaircMGOqUB5aWUs67Dod8YpD5i5rnrSMbSEsadYetvQ7hxEy8gIvsWOalw0AKoSeZhMf2MIgToalgUgJDNOHh2j9onPgh45yv31mrUHT%2FJz8pB9kKemUx%2B6pF0KFyTvsRRbqhZcjB2S57BTQlGFH1r8hrRtFiE8v2lzCaQq8BivD1efHDQBCfOxSYMS207ZxEP5rX5Nl7G78tPtCmLv%2BOJ6DP%2BtV2xk6jkCgHd&X-Amz-Signature=e46f7a51bee0c308da3a9c07fd638753153c891861756b7221d01a41cb8944a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFMTX5A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH2z218Mtsm03azzfhWA8anA0nduIqhu7Lwv%2FpAlVK3cAiEA9%2Fqee%2BWDwJtk%2BsSoqCePTbcmMhWW5zAcJRg49yGQ%2B1Uq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOCCKJQhqHvF2VADKCrcAzkPiPfYdiv8XNT63MfOeu0DONMmP4sf%2BH0i7jM2GytNTkyeBujlE69RGxzu6AuP5aipAoa08MZRlJIfFUGe1A1LaURRl%2Bv%2FOq4bBrhsbRIbSDB7Nn8jLNRC7qmwK8inClgPj61I052uj%2BO2vCI1N3ugufx9HolzMm1u4OFPVsUY9%2BlWg%2F2gJZ5axIL0mJ6NFHs8f8pAbpNIqro2As%2Ft6U9jv1MUnbZvf%2BhNGD%2FDiAl9xlY%2Flph3U126qo3QUZaFnb1OHeenS6IbOlFthCMYEgqHAWeVAYSJRNNjKb0BOdKSiGuzRhjBbQKg1UKH8SWNo2ZeLjhFb0xopwR24M195ytXovp7TAhWTv9UY9eZxXpEa%2FCJ2b6JXlGWLqMRuCkl8uEl1yiB0J%2BS%2FXVP%2FJSFBnF0xrPvjdYj5JBM0JLrbdC1E5%2F3Q0ayyFjSZ8BsIaoyMdcGkCiYyWbttjh2h0Y8FAYLgiCNx09FkwuYLIaSKNr9TtJUeBZ%2F60tY4Ye7CsxedKwgXcHV1aT%2BpIni04EaEk9HwIF0vtCDXWCI%2FCGU7LWfxYmcoLg%2F4kP843gRHY73DjDupmwJ1%2B0TVIwbTWN%2Fo7FaR2ZveOlimpXkbOT7xy0lbGnt%2BeoiW%2B%2Fxz8cEMMaircMGOqUB5aWUs67Dod8YpD5i5rnrSMbSEsadYetvQ7hxEy8gIvsWOalw0AKoSeZhMf2MIgToalgUgJDNOHh2j9onPgh45yv31mrUHT%2FJz8pB9kKemUx%2B6pF0KFyTvsRRbqhZcjB2S57BTQlGFH1r8hrRtFiE8v2lzCaQq8BivD1efHDQBCfOxSYMS207ZxEP5rX5Nl7G78tPtCmLv%2BOJ6DP%2BtV2xk6jkCgHd&X-Amz-Signature=05dab1b67afc66b7bb79243d72386941d1e5cd201cc5fa655e50a658e4510d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFMTX5A%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH2z218Mtsm03azzfhWA8anA0nduIqhu7Lwv%2FpAlVK3cAiEA9%2Fqee%2BWDwJtk%2BsSoqCePTbcmMhWW5zAcJRg49yGQ%2B1Uq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOCCKJQhqHvF2VADKCrcAzkPiPfYdiv8XNT63MfOeu0DONMmP4sf%2BH0i7jM2GytNTkyeBujlE69RGxzu6AuP5aipAoa08MZRlJIfFUGe1A1LaURRl%2Bv%2FOq4bBrhsbRIbSDB7Nn8jLNRC7qmwK8inClgPj61I052uj%2BO2vCI1N3ugufx9HolzMm1u4OFPVsUY9%2BlWg%2F2gJZ5axIL0mJ6NFHs8f8pAbpNIqro2As%2Ft6U9jv1MUnbZvf%2BhNGD%2FDiAl9xlY%2Flph3U126qo3QUZaFnb1OHeenS6IbOlFthCMYEgqHAWeVAYSJRNNjKb0BOdKSiGuzRhjBbQKg1UKH8SWNo2ZeLjhFb0xopwR24M195ytXovp7TAhWTv9UY9eZxXpEa%2FCJ2b6JXlGWLqMRuCkl8uEl1yiB0J%2BS%2FXVP%2FJSFBnF0xrPvjdYj5JBM0JLrbdC1E5%2F3Q0ayyFjSZ8BsIaoyMdcGkCiYyWbttjh2h0Y8FAYLgiCNx09FkwuYLIaSKNr9TtJUeBZ%2F60tY4Ye7CsxedKwgXcHV1aT%2BpIni04EaEk9HwIF0vtCDXWCI%2FCGU7LWfxYmcoLg%2F4kP843gRHY73DjDupmwJ1%2B0TVIwbTWN%2Fo7FaR2ZveOlimpXkbOT7xy0lbGnt%2BeoiW%2B%2Fxz8cEMMaircMGOqUB5aWUs67Dod8YpD5i5rnrSMbSEsadYetvQ7hxEy8gIvsWOalw0AKoSeZhMf2MIgToalgUgJDNOHh2j9onPgh45yv31mrUHT%2FJz8pB9kKemUx%2B6pF0KFyTvsRRbqhZcjB2S57BTQlGFH1r8hrRtFiE8v2lzCaQq8BivD1efHDQBCfOxSYMS207ZxEP5rX5Nl7G78tPtCmLv%2BOJ6DP%2BtV2xk6jkCgHd&X-Amz-Signature=0207ea41f3448a26d07c323195b6c07cb2981861732280e85a7e2b5defcb7673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
