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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB4IL6E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICp1jn1%2FvCWLvCtCfTSStBjHlrO%2BKgyehYi2e42lU2AqAiB908RydMuW6mMdEYqZW9RXGDzKEEbZ9yKHupfgBlQbVSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEaBgCWRp7rk9siJKtwD4G%2BOTDxWfZGtoEzFblj8pFZzs4GYwc%2BTUWrwilK8rnLM6ec27ZFbEybUlxiT8A%2B4ChcPGOFgBuqKs7RGI8EOoNXWBfmEIpg%2Fy3S7GShzrtpqdQwf5cpZXixoExUZPDdz1qk%2BNvqQS3K%2FlAcJfrj08yS%2BFIfrBtF1ExM7ZL7timurVOfvzD1EPf%2FYrXUnyV6twg6rIhSI%2BOcqtiVEoRKazLfnuWYt2rCHMpzS6bMN3iOYnRL5bU5TB9pcPcc24i1ipx5z37Gzz40hvRprpOTXkasAUKKVxvBNAXFcabq33c%2F5re87V0GR%2BcqTRtp%2FTqpK%2F5yKps6HGYujYae65AtRf%2FIlq9SmOV6q%2Fqx%2Bo7UU0dUdfW%2ByCNgPsHoanef4eC43kYjt3UJahlxtxZhFNXkDMCTxWyDWRJkR1z2gWKAeJt9aqR8zfCDMQtwX9bqJDTAYzhMh%2FSHoGX03S0BH9fMVjccCe74LlfrhlpJ8dIk8eGEcehTvIWpPrxa6wRj2mZqB%2BUPck65xPc8h7SA1hlU2uyr16X%2FGaooRYWPEqapiZCxq7qhfRQII6CZG3z0V7NElm%2B70yXoHScq1UlQeFQRSDIEB2Gi6BZH1T0eFS2emPFwtXGFhBRZYpzsbt%2B4w8OjuvgY6pgF62AqOLfgeuO23dc8fTz9iHdkL5qYH6bTJhQc2eee52%2BJ2%2FRZAgBF4QGtL3mHibLFiud61Ov5V%2Bhu8fa%2BilG4dTxhbwuOC%2BETUjQYlYWen7lZ8QKe7rsHpsThlrkwpyOekF7mnsIFJJ7PBRkg2bN5zmLNqmiLlyHo%2BIyTCm7eOc%2BnBEbGbMx%2F%2F%2B7z6pltd8fHruWT3l7XMNGbl1KZGFY3nVB3ZmDG4&X-Amz-Signature=9e2d52e9226c6395d8c5af7638df46af36344e097489653a2a182bef8e9ca1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB4IL6E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICp1jn1%2FvCWLvCtCfTSStBjHlrO%2BKgyehYi2e42lU2AqAiB908RydMuW6mMdEYqZW9RXGDzKEEbZ9yKHupfgBlQbVSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEaBgCWRp7rk9siJKtwD4G%2BOTDxWfZGtoEzFblj8pFZzs4GYwc%2BTUWrwilK8rnLM6ec27ZFbEybUlxiT8A%2B4ChcPGOFgBuqKs7RGI8EOoNXWBfmEIpg%2Fy3S7GShzrtpqdQwf5cpZXixoExUZPDdz1qk%2BNvqQS3K%2FlAcJfrj08yS%2BFIfrBtF1ExM7ZL7timurVOfvzD1EPf%2FYrXUnyV6twg6rIhSI%2BOcqtiVEoRKazLfnuWYt2rCHMpzS6bMN3iOYnRL5bU5TB9pcPcc24i1ipx5z37Gzz40hvRprpOTXkasAUKKVxvBNAXFcabq33c%2F5re87V0GR%2BcqTRtp%2FTqpK%2F5yKps6HGYujYae65AtRf%2FIlq9SmOV6q%2Fqx%2Bo7UU0dUdfW%2ByCNgPsHoanef4eC43kYjt3UJahlxtxZhFNXkDMCTxWyDWRJkR1z2gWKAeJt9aqR8zfCDMQtwX9bqJDTAYzhMh%2FSHoGX03S0BH9fMVjccCe74LlfrhlpJ8dIk8eGEcehTvIWpPrxa6wRj2mZqB%2BUPck65xPc8h7SA1hlU2uyr16X%2FGaooRYWPEqapiZCxq7qhfRQII6CZG3z0V7NElm%2B70yXoHScq1UlQeFQRSDIEB2Gi6BZH1T0eFS2emPFwtXGFhBRZYpzsbt%2B4w8OjuvgY6pgF62AqOLfgeuO23dc8fTz9iHdkL5qYH6bTJhQc2eee52%2BJ2%2FRZAgBF4QGtL3mHibLFiud61Ov5V%2Bhu8fa%2BilG4dTxhbwuOC%2BETUjQYlYWen7lZ8QKe7rsHpsThlrkwpyOekF7mnsIFJJ7PBRkg2bN5zmLNqmiLlyHo%2BIyTCm7eOc%2BnBEbGbMx%2F%2F%2B7z6pltd8fHruWT3l7XMNGbl1KZGFY3nVB3ZmDG4&X-Amz-Signature=6af3c9c0d9fe60d026cab1d498f66414301041cfada4c498351904c7458ef1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB4IL6E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICp1jn1%2FvCWLvCtCfTSStBjHlrO%2BKgyehYi2e42lU2AqAiB908RydMuW6mMdEYqZW9RXGDzKEEbZ9yKHupfgBlQbVSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEaBgCWRp7rk9siJKtwD4G%2BOTDxWfZGtoEzFblj8pFZzs4GYwc%2BTUWrwilK8rnLM6ec27ZFbEybUlxiT8A%2B4ChcPGOFgBuqKs7RGI8EOoNXWBfmEIpg%2Fy3S7GShzrtpqdQwf5cpZXixoExUZPDdz1qk%2BNvqQS3K%2FlAcJfrj08yS%2BFIfrBtF1ExM7ZL7timurVOfvzD1EPf%2FYrXUnyV6twg6rIhSI%2BOcqtiVEoRKazLfnuWYt2rCHMpzS6bMN3iOYnRL5bU5TB9pcPcc24i1ipx5z37Gzz40hvRprpOTXkasAUKKVxvBNAXFcabq33c%2F5re87V0GR%2BcqTRtp%2FTqpK%2F5yKps6HGYujYae65AtRf%2FIlq9SmOV6q%2Fqx%2Bo7UU0dUdfW%2ByCNgPsHoanef4eC43kYjt3UJahlxtxZhFNXkDMCTxWyDWRJkR1z2gWKAeJt9aqR8zfCDMQtwX9bqJDTAYzhMh%2FSHoGX03S0BH9fMVjccCe74LlfrhlpJ8dIk8eGEcehTvIWpPrxa6wRj2mZqB%2BUPck65xPc8h7SA1hlU2uyr16X%2FGaooRYWPEqapiZCxq7qhfRQII6CZG3z0V7NElm%2B70yXoHScq1UlQeFQRSDIEB2Gi6BZH1T0eFS2emPFwtXGFhBRZYpzsbt%2B4w8OjuvgY6pgF62AqOLfgeuO23dc8fTz9iHdkL5qYH6bTJhQc2eee52%2BJ2%2FRZAgBF4QGtL3mHibLFiud61Ov5V%2Bhu8fa%2BilG4dTxhbwuOC%2BETUjQYlYWen7lZ8QKe7rsHpsThlrkwpyOekF7mnsIFJJ7PBRkg2bN5zmLNqmiLlyHo%2BIyTCm7eOc%2BnBEbGbMx%2F%2F%2B7z6pltd8fHruWT3l7XMNGbl1KZGFY3nVB3ZmDG4&X-Amz-Signature=0fa441329e1c17895c649fc379b910ef68233512e3af939e9d2c115c7ae47306&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB4IL6E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICp1jn1%2FvCWLvCtCfTSStBjHlrO%2BKgyehYi2e42lU2AqAiB908RydMuW6mMdEYqZW9RXGDzKEEbZ9yKHupfgBlQbVSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEaBgCWRp7rk9siJKtwD4G%2BOTDxWfZGtoEzFblj8pFZzs4GYwc%2BTUWrwilK8rnLM6ec27ZFbEybUlxiT8A%2B4ChcPGOFgBuqKs7RGI8EOoNXWBfmEIpg%2Fy3S7GShzrtpqdQwf5cpZXixoExUZPDdz1qk%2BNvqQS3K%2FlAcJfrj08yS%2BFIfrBtF1ExM7ZL7timurVOfvzD1EPf%2FYrXUnyV6twg6rIhSI%2BOcqtiVEoRKazLfnuWYt2rCHMpzS6bMN3iOYnRL5bU5TB9pcPcc24i1ipx5z37Gzz40hvRprpOTXkasAUKKVxvBNAXFcabq33c%2F5re87V0GR%2BcqTRtp%2FTqpK%2F5yKps6HGYujYae65AtRf%2FIlq9SmOV6q%2Fqx%2Bo7UU0dUdfW%2ByCNgPsHoanef4eC43kYjt3UJahlxtxZhFNXkDMCTxWyDWRJkR1z2gWKAeJt9aqR8zfCDMQtwX9bqJDTAYzhMh%2FSHoGX03S0BH9fMVjccCe74LlfrhlpJ8dIk8eGEcehTvIWpPrxa6wRj2mZqB%2BUPck65xPc8h7SA1hlU2uyr16X%2FGaooRYWPEqapiZCxq7qhfRQII6CZG3z0V7NElm%2B70yXoHScq1UlQeFQRSDIEB2Gi6BZH1T0eFS2emPFwtXGFhBRZYpzsbt%2B4w8OjuvgY6pgF62AqOLfgeuO23dc8fTz9iHdkL5qYH6bTJhQc2eee52%2BJ2%2FRZAgBF4QGtL3mHibLFiud61Ov5V%2Bhu8fa%2BilG4dTxhbwuOC%2BETUjQYlYWen7lZ8QKe7rsHpsThlrkwpyOekF7mnsIFJJ7PBRkg2bN5zmLNqmiLlyHo%2BIyTCm7eOc%2BnBEbGbMx%2F%2F%2B7z6pltd8fHruWT3l7XMNGbl1KZGFY3nVB3ZmDG4&X-Amz-Signature=112119c1fb4fe3a3084d2c86ed21de56e901fd7c7ca5d79bde14b29f2d11a4db&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB4IL6E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICp1jn1%2FvCWLvCtCfTSStBjHlrO%2BKgyehYi2e42lU2AqAiB908RydMuW6mMdEYqZW9RXGDzKEEbZ9yKHupfgBlQbVSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEaBgCWRp7rk9siJKtwD4G%2BOTDxWfZGtoEzFblj8pFZzs4GYwc%2BTUWrwilK8rnLM6ec27ZFbEybUlxiT8A%2B4ChcPGOFgBuqKs7RGI8EOoNXWBfmEIpg%2Fy3S7GShzrtpqdQwf5cpZXixoExUZPDdz1qk%2BNvqQS3K%2FlAcJfrj08yS%2BFIfrBtF1ExM7ZL7timurVOfvzD1EPf%2FYrXUnyV6twg6rIhSI%2BOcqtiVEoRKazLfnuWYt2rCHMpzS6bMN3iOYnRL5bU5TB9pcPcc24i1ipx5z37Gzz40hvRprpOTXkasAUKKVxvBNAXFcabq33c%2F5re87V0GR%2BcqTRtp%2FTqpK%2F5yKps6HGYujYae65AtRf%2FIlq9SmOV6q%2Fqx%2Bo7UU0dUdfW%2ByCNgPsHoanef4eC43kYjt3UJahlxtxZhFNXkDMCTxWyDWRJkR1z2gWKAeJt9aqR8zfCDMQtwX9bqJDTAYzhMh%2FSHoGX03S0BH9fMVjccCe74LlfrhlpJ8dIk8eGEcehTvIWpPrxa6wRj2mZqB%2BUPck65xPc8h7SA1hlU2uyr16X%2FGaooRYWPEqapiZCxq7qhfRQII6CZG3z0V7NElm%2B70yXoHScq1UlQeFQRSDIEB2Gi6BZH1T0eFS2emPFwtXGFhBRZYpzsbt%2B4w8OjuvgY6pgF62AqOLfgeuO23dc8fTz9iHdkL5qYH6bTJhQc2eee52%2BJ2%2FRZAgBF4QGtL3mHibLFiud61Ov5V%2Bhu8fa%2BilG4dTxhbwuOC%2BETUjQYlYWen7lZ8QKe7rsHpsThlrkwpyOekF7mnsIFJJ7PBRkg2bN5zmLNqmiLlyHo%2BIyTCm7eOc%2BnBEbGbMx%2F%2F%2B7z6pltd8fHruWT3l7XMNGbl1KZGFY3nVB3ZmDG4&X-Amz-Signature=e598aef5d68d75991dd3f1d8ce2d30bbd5e7520f81f80e8b2b4f1f561386308d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB4IL6E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICp1jn1%2FvCWLvCtCfTSStBjHlrO%2BKgyehYi2e42lU2AqAiB908RydMuW6mMdEYqZW9RXGDzKEEbZ9yKHupfgBlQbVSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEaBgCWRp7rk9siJKtwD4G%2BOTDxWfZGtoEzFblj8pFZzs4GYwc%2BTUWrwilK8rnLM6ec27ZFbEybUlxiT8A%2B4ChcPGOFgBuqKs7RGI8EOoNXWBfmEIpg%2Fy3S7GShzrtpqdQwf5cpZXixoExUZPDdz1qk%2BNvqQS3K%2FlAcJfrj08yS%2BFIfrBtF1ExM7ZL7timurVOfvzD1EPf%2FYrXUnyV6twg6rIhSI%2BOcqtiVEoRKazLfnuWYt2rCHMpzS6bMN3iOYnRL5bU5TB9pcPcc24i1ipx5z37Gzz40hvRprpOTXkasAUKKVxvBNAXFcabq33c%2F5re87V0GR%2BcqTRtp%2FTqpK%2F5yKps6HGYujYae65AtRf%2FIlq9SmOV6q%2Fqx%2Bo7UU0dUdfW%2ByCNgPsHoanef4eC43kYjt3UJahlxtxZhFNXkDMCTxWyDWRJkR1z2gWKAeJt9aqR8zfCDMQtwX9bqJDTAYzhMh%2FSHoGX03S0BH9fMVjccCe74LlfrhlpJ8dIk8eGEcehTvIWpPrxa6wRj2mZqB%2BUPck65xPc8h7SA1hlU2uyr16X%2FGaooRYWPEqapiZCxq7qhfRQII6CZG3z0V7NElm%2B70yXoHScq1UlQeFQRSDIEB2Gi6BZH1T0eFS2emPFwtXGFhBRZYpzsbt%2B4w8OjuvgY6pgF62AqOLfgeuO23dc8fTz9iHdkL5qYH6bTJhQc2eee52%2BJ2%2FRZAgBF4QGtL3mHibLFiud61Ov5V%2Bhu8fa%2BilG4dTxhbwuOC%2BETUjQYlYWen7lZ8QKe7rsHpsThlrkwpyOekF7mnsIFJJ7PBRkg2bN5zmLNqmiLlyHo%2BIyTCm7eOc%2BnBEbGbMx%2F%2F%2B7z6pltd8fHruWT3l7XMNGbl1KZGFY3nVB3ZmDG4&X-Amz-Signature=cba488776a250eea2f25cb97e76268be343fcb1169712d2c3baa43b77b15947b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQB4IL6E%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCICp1jn1%2FvCWLvCtCfTSStBjHlrO%2BKgyehYi2e42lU2AqAiB908RydMuW6mMdEYqZW9RXGDzKEEbZ9yKHupfgBlQbVSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEaBgCWRp7rk9siJKtwD4G%2BOTDxWfZGtoEzFblj8pFZzs4GYwc%2BTUWrwilK8rnLM6ec27ZFbEybUlxiT8A%2B4ChcPGOFgBuqKs7RGI8EOoNXWBfmEIpg%2Fy3S7GShzrtpqdQwf5cpZXixoExUZPDdz1qk%2BNvqQS3K%2FlAcJfrj08yS%2BFIfrBtF1ExM7ZL7timurVOfvzD1EPf%2FYrXUnyV6twg6rIhSI%2BOcqtiVEoRKazLfnuWYt2rCHMpzS6bMN3iOYnRL5bU5TB9pcPcc24i1ipx5z37Gzz40hvRprpOTXkasAUKKVxvBNAXFcabq33c%2F5re87V0GR%2BcqTRtp%2FTqpK%2F5yKps6HGYujYae65AtRf%2FIlq9SmOV6q%2Fqx%2Bo7UU0dUdfW%2ByCNgPsHoanef4eC43kYjt3UJahlxtxZhFNXkDMCTxWyDWRJkR1z2gWKAeJt9aqR8zfCDMQtwX9bqJDTAYzhMh%2FSHoGX03S0BH9fMVjccCe74LlfrhlpJ8dIk8eGEcehTvIWpPrxa6wRj2mZqB%2BUPck65xPc8h7SA1hlU2uyr16X%2FGaooRYWPEqapiZCxq7qhfRQII6CZG3z0V7NElm%2B70yXoHScq1UlQeFQRSDIEB2Gi6BZH1T0eFS2emPFwtXGFhBRZYpzsbt%2B4w8OjuvgY6pgF62AqOLfgeuO23dc8fTz9iHdkL5qYH6bTJhQc2eee52%2BJ2%2FRZAgBF4QGtL3mHibLFiud61Ov5V%2Bhu8fa%2BilG4dTxhbwuOC%2BETUjQYlYWen7lZ8QKe7rsHpsThlrkwpyOekF7mnsIFJJ7PBRkg2bN5zmLNqmiLlyHo%2BIyTCm7eOc%2BnBEbGbMx%2F%2F%2B7z6pltd8fHruWT3l7XMNGbl1KZGFY3nVB3ZmDG4&X-Amz-Signature=9f04a87874a8aece36790b4cd205470f903b4b0ba577bc5f9dfffd982b30c291&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
