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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6YMLLB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGjBC2q4CbUcKQTejIPBPDRMMxZr6Ba6pk%2BUP7y560j2AiEAlNubMaN1r%2BNlvYXdit%2FdBI7U00BqRB%2Bn4Eyd%2BKtNhxoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK0x1G84ZDhPli0KzSrcA%2F1BqBxT6HIzVga%2FqUpbFtdl9brac4EWTKq3WchyRzstiwWnNJWbQjqEbKwwc2U5BoYThtKOtb7oKtuSWcPFneusDFJatJsBoiUDoKMGIc%2Bg1Upy2e7C5dSPLcGyfCsFD26dsnKDuWAXzRY2IgOXB9BIg2AaDi2Fc%2B7ny6VQtFelCDNhuxH8CBazC9ZDjiJyJAA0gDYN4CDtCOMllfWUvpu7OZkgZQP04NRwMfTewbDfb7xHuVvsANXeyfq7qRaFX%2BLNlIaP00moyhDuFowYpRlr3Cz4r%2BUjuSO%2BmyRs4ZcWD%2FnD%2BsL1AmpamBJSdKQdpahFfxIPKYqxvwCd8FUvINhpmjcsL5uu%2BNY2%2FGCCokhC2NjCuE2CSVyFcMAli%2FFcR3Rix4NnLzuMVQK3253qVyNSiY2nvqN2riMlfe6RHtmdvst2uOrXon9rEBP%2B66Ajear9BwJ8RGWDgfiwgBhRFuX9PT9Ulmfgdcl4cTmmq35OW%2FLLPDa%2FxaaXpcDqS%2FQxJzDA770XyW74dFoJiw%2BXwlZ%2Fjc08MA3G3IzsXtqsfPbR5U%2FEObmSK9YtoRMqueQ0ywjyUXrkYBAAo32bZmukRp0LoFP8iwLAwupyYDsIXpd27he4cgacjngQGN8aMPvIwMIGOqUB6vnCBAyMcKrWFWGu7RYcQiVvKiimYe0wgzZ5dB5p4c%2BM4ztEeDBpy9QXAqxthDuFxazEPkfRCIeH6G%2F1CE2ppyP86kDj6j1CJkFu%2FXJpnYdhcAP3vVHqW2RCH85EhDCyB6ioYbqOtwrupC1PI195gzcyzAcX9p2jT2ce1HE1xQmZSeuNc1JWdTrGTXVZ8Pr%2F69NQ%2BxCznQXbEUIfd4UKBzjRd45y&X-Amz-Signature=b7118b262689e8a3dc5582a00c1003c1fa7b1d435c43619aed2194c2ab859e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6YMLLB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGjBC2q4CbUcKQTejIPBPDRMMxZr6Ba6pk%2BUP7y560j2AiEAlNubMaN1r%2BNlvYXdit%2FdBI7U00BqRB%2Bn4Eyd%2BKtNhxoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK0x1G84ZDhPli0KzSrcA%2F1BqBxT6HIzVga%2FqUpbFtdl9brac4EWTKq3WchyRzstiwWnNJWbQjqEbKwwc2U5BoYThtKOtb7oKtuSWcPFneusDFJatJsBoiUDoKMGIc%2Bg1Upy2e7C5dSPLcGyfCsFD26dsnKDuWAXzRY2IgOXB9BIg2AaDi2Fc%2B7ny6VQtFelCDNhuxH8CBazC9ZDjiJyJAA0gDYN4CDtCOMllfWUvpu7OZkgZQP04NRwMfTewbDfb7xHuVvsANXeyfq7qRaFX%2BLNlIaP00moyhDuFowYpRlr3Cz4r%2BUjuSO%2BmyRs4ZcWD%2FnD%2BsL1AmpamBJSdKQdpahFfxIPKYqxvwCd8FUvINhpmjcsL5uu%2BNY2%2FGCCokhC2NjCuE2CSVyFcMAli%2FFcR3Rix4NnLzuMVQK3253qVyNSiY2nvqN2riMlfe6RHtmdvst2uOrXon9rEBP%2B66Ajear9BwJ8RGWDgfiwgBhRFuX9PT9Ulmfgdcl4cTmmq35OW%2FLLPDa%2FxaaXpcDqS%2FQxJzDA770XyW74dFoJiw%2BXwlZ%2Fjc08MA3G3IzsXtqsfPbR5U%2FEObmSK9YtoRMqueQ0ywjyUXrkYBAAo32bZmukRp0LoFP8iwLAwupyYDsIXpd27he4cgacjngQGN8aMPvIwMIGOqUB6vnCBAyMcKrWFWGu7RYcQiVvKiimYe0wgzZ5dB5p4c%2BM4ztEeDBpy9QXAqxthDuFxazEPkfRCIeH6G%2F1CE2ppyP86kDj6j1CJkFu%2FXJpnYdhcAP3vVHqW2RCH85EhDCyB6ioYbqOtwrupC1PI195gzcyzAcX9p2jT2ce1HE1xQmZSeuNc1JWdTrGTXVZ8Pr%2F69NQ%2BxCznQXbEUIfd4UKBzjRd45y&X-Amz-Signature=bf1ad8d4b2c2e5dd94b3072cc7bd774dfe5be6ee542c3dfc25c90d364c70a1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6YMLLB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGjBC2q4CbUcKQTejIPBPDRMMxZr6Ba6pk%2BUP7y560j2AiEAlNubMaN1r%2BNlvYXdit%2FdBI7U00BqRB%2Bn4Eyd%2BKtNhxoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK0x1G84ZDhPli0KzSrcA%2F1BqBxT6HIzVga%2FqUpbFtdl9brac4EWTKq3WchyRzstiwWnNJWbQjqEbKwwc2U5BoYThtKOtb7oKtuSWcPFneusDFJatJsBoiUDoKMGIc%2Bg1Upy2e7C5dSPLcGyfCsFD26dsnKDuWAXzRY2IgOXB9BIg2AaDi2Fc%2B7ny6VQtFelCDNhuxH8CBazC9ZDjiJyJAA0gDYN4CDtCOMllfWUvpu7OZkgZQP04NRwMfTewbDfb7xHuVvsANXeyfq7qRaFX%2BLNlIaP00moyhDuFowYpRlr3Cz4r%2BUjuSO%2BmyRs4ZcWD%2FnD%2BsL1AmpamBJSdKQdpahFfxIPKYqxvwCd8FUvINhpmjcsL5uu%2BNY2%2FGCCokhC2NjCuE2CSVyFcMAli%2FFcR3Rix4NnLzuMVQK3253qVyNSiY2nvqN2riMlfe6RHtmdvst2uOrXon9rEBP%2B66Ajear9BwJ8RGWDgfiwgBhRFuX9PT9Ulmfgdcl4cTmmq35OW%2FLLPDa%2FxaaXpcDqS%2FQxJzDA770XyW74dFoJiw%2BXwlZ%2Fjc08MA3G3IzsXtqsfPbR5U%2FEObmSK9YtoRMqueQ0ywjyUXrkYBAAo32bZmukRp0LoFP8iwLAwupyYDsIXpd27he4cgacjngQGN8aMPvIwMIGOqUB6vnCBAyMcKrWFWGu7RYcQiVvKiimYe0wgzZ5dB5p4c%2BM4ztEeDBpy9QXAqxthDuFxazEPkfRCIeH6G%2F1CE2ppyP86kDj6j1CJkFu%2FXJpnYdhcAP3vVHqW2RCH85EhDCyB6ioYbqOtwrupC1PI195gzcyzAcX9p2jT2ce1HE1xQmZSeuNc1JWdTrGTXVZ8Pr%2F69NQ%2BxCznQXbEUIfd4UKBzjRd45y&X-Amz-Signature=d01e9913587b1184ed0cfb230d65191f43173dcab050c9ab98e6e0b9eda05582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6YMLLB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGjBC2q4CbUcKQTejIPBPDRMMxZr6Ba6pk%2BUP7y560j2AiEAlNubMaN1r%2BNlvYXdit%2FdBI7U00BqRB%2Bn4Eyd%2BKtNhxoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK0x1G84ZDhPli0KzSrcA%2F1BqBxT6HIzVga%2FqUpbFtdl9brac4EWTKq3WchyRzstiwWnNJWbQjqEbKwwc2U5BoYThtKOtb7oKtuSWcPFneusDFJatJsBoiUDoKMGIc%2Bg1Upy2e7C5dSPLcGyfCsFD26dsnKDuWAXzRY2IgOXB9BIg2AaDi2Fc%2B7ny6VQtFelCDNhuxH8CBazC9ZDjiJyJAA0gDYN4CDtCOMllfWUvpu7OZkgZQP04NRwMfTewbDfb7xHuVvsANXeyfq7qRaFX%2BLNlIaP00moyhDuFowYpRlr3Cz4r%2BUjuSO%2BmyRs4ZcWD%2FnD%2BsL1AmpamBJSdKQdpahFfxIPKYqxvwCd8FUvINhpmjcsL5uu%2BNY2%2FGCCokhC2NjCuE2CSVyFcMAli%2FFcR3Rix4NnLzuMVQK3253qVyNSiY2nvqN2riMlfe6RHtmdvst2uOrXon9rEBP%2B66Ajear9BwJ8RGWDgfiwgBhRFuX9PT9Ulmfgdcl4cTmmq35OW%2FLLPDa%2FxaaXpcDqS%2FQxJzDA770XyW74dFoJiw%2BXwlZ%2Fjc08MA3G3IzsXtqsfPbR5U%2FEObmSK9YtoRMqueQ0ywjyUXrkYBAAo32bZmukRp0LoFP8iwLAwupyYDsIXpd27he4cgacjngQGN8aMPvIwMIGOqUB6vnCBAyMcKrWFWGu7RYcQiVvKiimYe0wgzZ5dB5p4c%2BM4ztEeDBpy9QXAqxthDuFxazEPkfRCIeH6G%2F1CE2ppyP86kDj6j1CJkFu%2FXJpnYdhcAP3vVHqW2RCH85EhDCyB6ioYbqOtwrupC1PI195gzcyzAcX9p2jT2ce1HE1xQmZSeuNc1JWdTrGTXVZ8Pr%2F69NQ%2BxCznQXbEUIfd4UKBzjRd45y&X-Amz-Signature=c50cf776049f15e769b6271f7fc254bc8501a8a05e4804bb4731f05b66403eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6YMLLB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGjBC2q4CbUcKQTejIPBPDRMMxZr6Ba6pk%2BUP7y560j2AiEAlNubMaN1r%2BNlvYXdit%2FdBI7U00BqRB%2Bn4Eyd%2BKtNhxoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK0x1G84ZDhPli0KzSrcA%2F1BqBxT6HIzVga%2FqUpbFtdl9brac4EWTKq3WchyRzstiwWnNJWbQjqEbKwwc2U5BoYThtKOtb7oKtuSWcPFneusDFJatJsBoiUDoKMGIc%2Bg1Upy2e7C5dSPLcGyfCsFD26dsnKDuWAXzRY2IgOXB9BIg2AaDi2Fc%2B7ny6VQtFelCDNhuxH8CBazC9ZDjiJyJAA0gDYN4CDtCOMllfWUvpu7OZkgZQP04NRwMfTewbDfb7xHuVvsANXeyfq7qRaFX%2BLNlIaP00moyhDuFowYpRlr3Cz4r%2BUjuSO%2BmyRs4ZcWD%2FnD%2BsL1AmpamBJSdKQdpahFfxIPKYqxvwCd8FUvINhpmjcsL5uu%2BNY2%2FGCCokhC2NjCuE2CSVyFcMAli%2FFcR3Rix4NnLzuMVQK3253qVyNSiY2nvqN2riMlfe6RHtmdvst2uOrXon9rEBP%2B66Ajear9BwJ8RGWDgfiwgBhRFuX9PT9Ulmfgdcl4cTmmq35OW%2FLLPDa%2FxaaXpcDqS%2FQxJzDA770XyW74dFoJiw%2BXwlZ%2Fjc08MA3G3IzsXtqsfPbR5U%2FEObmSK9YtoRMqueQ0ywjyUXrkYBAAo32bZmukRp0LoFP8iwLAwupyYDsIXpd27he4cgacjngQGN8aMPvIwMIGOqUB6vnCBAyMcKrWFWGu7RYcQiVvKiimYe0wgzZ5dB5p4c%2BM4ztEeDBpy9QXAqxthDuFxazEPkfRCIeH6G%2F1CE2ppyP86kDj6j1CJkFu%2FXJpnYdhcAP3vVHqW2RCH85EhDCyB6ioYbqOtwrupC1PI195gzcyzAcX9p2jT2ce1HE1xQmZSeuNc1JWdTrGTXVZ8Pr%2F69NQ%2BxCznQXbEUIfd4UKBzjRd45y&X-Amz-Signature=34cca1984ec5c077a01a1110fbd91a2994769821020299ac7075acbe429a791d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6YMLLB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGjBC2q4CbUcKQTejIPBPDRMMxZr6Ba6pk%2BUP7y560j2AiEAlNubMaN1r%2BNlvYXdit%2FdBI7U00BqRB%2Bn4Eyd%2BKtNhxoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK0x1G84ZDhPli0KzSrcA%2F1BqBxT6HIzVga%2FqUpbFtdl9brac4EWTKq3WchyRzstiwWnNJWbQjqEbKwwc2U5BoYThtKOtb7oKtuSWcPFneusDFJatJsBoiUDoKMGIc%2Bg1Upy2e7C5dSPLcGyfCsFD26dsnKDuWAXzRY2IgOXB9BIg2AaDi2Fc%2B7ny6VQtFelCDNhuxH8CBazC9ZDjiJyJAA0gDYN4CDtCOMllfWUvpu7OZkgZQP04NRwMfTewbDfb7xHuVvsANXeyfq7qRaFX%2BLNlIaP00moyhDuFowYpRlr3Cz4r%2BUjuSO%2BmyRs4ZcWD%2FnD%2BsL1AmpamBJSdKQdpahFfxIPKYqxvwCd8FUvINhpmjcsL5uu%2BNY2%2FGCCokhC2NjCuE2CSVyFcMAli%2FFcR3Rix4NnLzuMVQK3253qVyNSiY2nvqN2riMlfe6RHtmdvst2uOrXon9rEBP%2B66Ajear9BwJ8RGWDgfiwgBhRFuX9PT9Ulmfgdcl4cTmmq35OW%2FLLPDa%2FxaaXpcDqS%2FQxJzDA770XyW74dFoJiw%2BXwlZ%2Fjc08MA3G3IzsXtqsfPbR5U%2FEObmSK9YtoRMqueQ0ywjyUXrkYBAAo32bZmukRp0LoFP8iwLAwupyYDsIXpd27he4cgacjngQGN8aMPvIwMIGOqUB6vnCBAyMcKrWFWGu7RYcQiVvKiimYe0wgzZ5dB5p4c%2BM4ztEeDBpy9QXAqxthDuFxazEPkfRCIeH6G%2F1CE2ppyP86kDj6j1CJkFu%2FXJpnYdhcAP3vVHqW2RCH85EhDCyB6ioYbqOtwrupC1PI195gzcyzAcX9p2jT2ce1HE1xQmZSeuNc1JWdTrGTXVZ8Pr%2F69NQ%2BxCznQXbEUIfd4UKBzjRd45y&X-Amz-Signature=1f44b48d9cac4d76a0a61573150d1efc0b34d68085e17c020525624795d03dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6YMLLB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGjBC2q4CbUcKQTejIPBPDRMMxZr6Ba6pk%2BUP7y560j2AiEAlNubMaN1r%2BNlvYXdit%2FdBI7U00BqRB%2Bn4Eyd%2BKtNhxoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK0x1G84ZDhPli0KzSrcA%2F1BqBxT6HIzVga%2FqUpbFtdl9brac4EWTKq3WchyRzstiwWnNJWbQjqEbKwwc2U5BoYThtKOtb7oKtuSWcPFneusDFJatJsBoiUDoKMGIc%2Bg1Upy2e7C5dSPLcGyfCsFD26dsnKDuWAXzRY2IgOXB9BIg2AaDi2Fc%2B7ny6VQtFelCDNhuxH8CBazC9ZDjiJyJAA0gDYN4CDtCOMllfWUvpu7OZkgZQP04NRwMfTewbDfb7xHuVvsANXeyfq7qRaFX%2BLNlIaP00moyhDuFowYpRlr3Cz4r%2BUjuSO%2BmyRs4ZcWD%2FnD%2BsL1AmpamBJSdKQdpahFfxIPKYqxvwCd8FUvINhpmjcsL5uu%2BNY2%2FGCCokhC2NjCuE2CSVyFcMAli%2FFcR3Rix4NnLzuMVQK3253qVyNSiY2nvqN2riMlfe6RHtmdvst2uOrXon9rEBP%2B66Ajear9BwJ8RGWDgfiwgBhRFuX9PT9Ulmfgdcl4cTmmq35OW%2FLLPDa%2FxaaXpcDqS%2FQxJzDA770XyW74dFoJiw%2BXwlZ%2Fjc08MA3G3IzsXtqsfPbR5U%2FEObmSK9YtoRMqueQ0ywjyUXrkYBAAo32bZmukRp0LoFP8iwLAwupyYDsIXpd27he4cgacjngQGN8aMPvIwMIGOqUB6vnCBAyMcKrWFWGu7RYcQiVvKiimYe0wgzZ5dB5p4c%2BM4ztEeDBpy9QXAqxthDuFxazEPkfRCIeH6G%2F1CE2ppyP86kDj6j1CJkFu%2FXJpnYdhcAP3vVHqW2RCH85EhDCyB6ioYbqOtwrupC1PI195gzcyzAcX9p2jT2ce1HE1xQmZSeuNc1JWdTrGTXVZ8Pr%2F69NQ%2BxCznQXbEUIfd4UKBzjRd45y&X-Amz-Signature=18cf71cd0c7124a1a5ddefda714e4d10df4ff27435e5a350f3f0c5a3c1e5e9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
