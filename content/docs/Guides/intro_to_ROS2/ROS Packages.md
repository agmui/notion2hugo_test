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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKXZXKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGUuP8GC3OMl11PoV5nOfmM%2FXzcZoZBXaw1GBa9cDuHAiAs8sWawRmUqpArODCmjlzA7mMDc%2FuqjCH2CteVAtvV%2Byr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMfZeG%2BC1%2BVOry37ZJKtwDXd8RDvVoVdFC5cLUlF3HDKqtBZpxqlEazCDDRqcCZ%2F8GI7N7lCkf%2FCHM6OzvGw%2F0HTyvlpjNAonKgfdhAeZi%2BcivVUU1mqQi1a5dvR1V6AYVIVUenf79ocww0ypwsS3A%2BMIzsCOMphGduBTiar%2BUW%2FmSqfQhNgNk5GP46ddfN6Vv7iS6pAhEhORb3%2FSoZN3E2FuwJmWxMTcAeiNYPYZoOT4LUIbnXQZIC8aVWKM47hWujhlQUfsVbcg4MgeTdkkXsBNOYz3ss2dB%2BBHyVMdh2WhdTrQSBdCnbVijbZUhVmTV6CLeS9W7C%2Bq1Zd6RFqj%2FfEgP7Z9%2F7uWbZ10h1rwi%2BZn47k7nAOepp%2FBQdFOCpnbTSYAw1%2B3tqxbJP0FX2O4f5B5Ro8CwfBgj2RPbAZ0Y7CP3uT06it%2BK4nfi%2B3c5Bpx0GpIQWZsl70uZ0PYum36m3FwZMPVr7kdr3he8hqMzqPLDGsBkOAeoha8LlGB0mQhMcoSm8S4Agkp4EuNcQx8xlf8o9rDfuHa3NgKnb9RaB2PopJHLEByb12gMtrmL%2F%2ByVrEWESI50JPwsBnMnb8ZKjPNkjdLqdovdxQ%2F29v2kLAnVMciFPDtLNZB1WTkuCfz3ct7xzF4Bf4RGv4Iw5ePDvwY6pgG%2FFGXAuLhS75hh5joqFJLqC0p9WV65rC3UPFpnhATnYScTqmnZWCbvHr2bW6jYwNAE0QsOLrYKTUtIB88kxczTZQhRgDgiEqH2x60T62H1ibr2DU6Q2tacvGN%2BbbkLvo90EhxtmbcTETn9qgtbKCTuWst3FCcxGO5ouD49R1g2Cep12eEqINYzWdNrz%2BkY3BgRGdetCYF51upsfyVCmJSRP%2FTLSfH0&X-Amz-Signature=43b28bd0c685cb34aadc86fdb5e458854a9b01ef13c9b8a5ad65f7b52d56cf18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKXZXKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGUuP8GC3OMl11PoV5nOfmM%2FXzcZoZBXaw1GBa9cDuHAiAs8sWawRmUqpArODCmjlzA7mMDc%2FuqjCH2CteVAtvV%2Byr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMfZeG%2BC1%2BVOry37ZJKtwDXd8RDvVoVdFC5cLUlF3HDKqtBZpxqlEazCDDRqcCZ%2F8GI7N7lCkf%2FCHM6OzvGw%2F0HTyvlpjNAonKgfdhAeZi%2BcivVUU1mqQi1a5dvR1V6AYVIVUenf79ocww0ypwsS3A%2BMIzsCOMphGduBTiar%2BUW%2FmSqfQhNgNk5GP46ddfN6Vv7iS6pAhEhORb3%2FSoZN3E2FuwJmWxMTcAeiNYPYZoOT4LUIbnXQZIC8aVWKM47hWujhlQUfsVbcg4MgeTdkkXsBNOYz3ss2dB%2BBHyVMdh2WhdTrQSBdCnbVijbZUhVmTV6CLeS9W7C%2Bq1Zd6RFqj%2FfEgP7Z9%2F7uWbZ10h1rwi%2BZn47k7nAOepp%2FBQdFOCpnbTSYAw1%2B3tqxbJP0FX2O4f5B5Ro8CwfBgj2RPbAZ0Y7CP3uT06it%2BK4nfi%2B3c5Bpx0GpIQWZsl70uZ0PYum36m3FwZMPVr7kdr3he8hqMzqPLDGsBkOAeoha8LlGB0mQhMcoSm8S4Agkp4EuNcQx8xlf8o9rDfuHa3NgKnb9RaB2PopJHLEByb12gMtrmL%2F%2ByVrEWESI50JPwsBnMnb8ZKjPNkjdLqdovdxQ%2F29v2kLAnVMciFPDtLNZB1WTkuCfz3ct7xzF4Bf4RGv4Iw5ePDvwY6pgG%2FFGXAuLhS75hh5joqFJLqC0p9WV65rC3UPFpnhATnYScTqmnZWCbvHr2bW6jYwNAE0QsOLrYKTUtIB88kxczTZQhRgDgiEqH2x60T62H1ibr2DU6Q2tacvGN%2BbbkLvo90EhxtmbcTETn9qgtbKCTuWst3FCcxGO5ouD49R1g2Cep12eEqINYzWdNrz%2BkY3BgRGdetCYF51upsfyVCmJSRP%2FTLSfH0&X-Amz-Signature=fbd2833d12ee68ab66e50d49646df1816791c8668a753353039c2e3e00d66f20&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKXZXKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGUuP8GC3OMl11PoV5nOfmM%2FXzcZoZBXaw1GBa9cDuHAiAs8sWawRmUqpArODCmjlzA7mMDc%2FuqjCH2CteVAtvV%2Byr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMfZeG%2BC1%2BVOry37ZJKtwDXd8RDvVoVdFC5cLUlF3HDKqtBZpxqlEazCDDRqcCZ%2F8GI7N7lCkf%2FCHM6OzvGw%2F0HTyvlpjNAonKgfdhAeZi%2BcivVUU1mqQi1a5dvR1V6AYVIVUenf79ocww0ypwsS3A%2BMIzsCOMphGduBTiar%2BUW%2FmSqfQhNgNk5GP46ddfN6Vv7iS6pAhEhORb3%2FSoZN3E2FuwJmWxMTcAeiNYPYZoOT4LUIbnXQZIC8aVWKM47hWujhlQUfsVbcg4MgeTdkkXsBNOYz3ss2dB%2BBHyVMdh2WhdTrQSBdCnbVijbZUhVmTV6CLeS9W7C%2Bq1Zd6RFqj%2FfEgP7Z9%2F7uWbZ10h1rwi%2BZn47k7nAOepp%2FBQdFOCpnbTSYAw1%2B3tqxbJP0FX2O4f5B5Ro8CwfBgj2RPbAZ0Y7CP3uT06it%2BK4nfi%2B3c5Bpx0GpIQWZsl70uZ0PYum36m3FwZMPVr7kdr3he8hqMzqPLDGsBkOAeoha8LlGB0mQhMcoSm8S4Agkp4EuNcQx8xlf8o9rDfuHa3NgKnb9RaB2PopJHLEByb12gMtrmL%2F%2ByVrEWESI50JPwsBnMnb8ZKjPNkjdLqdovdxQ%2F29v2kLAnVMciFPDtLNZB1WTkuCfz3ct7xzF4Bf4RGv4Iw5ePDvwY6pgG%2FFGXAuLhS75hh5joqFJLqC0p9WV65rC3UPFpnhATnYScTqmnZWCbvHr2bW6jYwNAE0QsOLrYKTUtIB88kxczTZQhRgDgiEqH2x60T62H1ibr2DU6Q2tacvGN%2BbbkLvo90EhxtmbcTETn9qgtbKCTuWst3FCcxGO5ouD49R1g2Cep12eEqINYzWdNrz%2BkY3BgRGdetCYF51upsfyVCmJSRP%2FTLSfH0&X-Amz-Signature=0bca67a3658c807dc330f8e72977f6b44ca2261ae876197bc5c082a26b5f32cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKXZXKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGUuP8GC3OMl11PoV5nOfmM%2FXzcZoZBXaw1GBa9cDuHAiAs8sWawRmUqpArODCmjlzA7mMDc%2FuqjCH2CteVAtvV%2Byr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMfZeG%2BC1%2BVOry37ZJKtwDXd8RDvVoVdFC5cLUlF3HDKqtBZpxqlEazCDDRqcCZ%2F8GI7N7lCkf%2FCHM6OzvGw%2F0HTyvlpjNAonKgfdhAeZi%2BcivVUU1mqQi1a5dvR1V6AYVIVUenf79ocww0ypwsS3A%2BMIzsCOMphGduBTiar%2BUW%2FmSqfQhNgNk5GP46ddfN6Vv7iS6pAhEhORb3%2FSoZN3E2FuwJmWxMTcAeiNYPYZoOT4LUIbnXQZIC8aVWKM47hWujhlQUfsVbcg4MgeTdkkXsBNOYz3ss2dB%2BBHyVMdh2WhdTrQSBdCnbVijbZUhVmTV6CLeS9W7C%2Bq1Zd6RFqj%2FfEgP7Z9%2F7uWbZ10h1rwi%2BZn47k7nAOepp%2FBQdFOCpnbTSYAw1%2B3tqxbJP0FX2O4f5B5Ro8CwfBgj2RPbAZ0Y7CP3uT06it%2BK4nfi%2B3c5Bpx0GpIQWZsl70uZ0PYum36m3FwZMPVr7kdr3he8hqMzqPLDGsBkOAeoha8LlGB0mQhMcoSm8S4Agkp4EuNcQx8xlf8o9rDfuHa3NgKnb9RaB2PopJHLEByb12gMtrmL%2F%2ByVrEWESI50JPwsBnMnb8ZKjPNkjdLqdovdxQ%2F29v2kLAnVMciFPDtLNZB1WTkuCfz3ct7xzF4Bf4RGv4Iw5ePDvwY6pgG%2FFGXAuLhS75hh5joqFJLqC0p9WV65rC3UPFpnhATnYScTqmnZWCbvHr2bW6jYwNAE0QsOLrYKTUtIB88kxczTZQhRgDgiEqH2x60T62H1ibr2DU6Q2tacvGN%2BbbkLvo90EhxtmbcTETn9qgtbKCTuWst3FCcxGO5ouD49R1g2Cep12eEqINYzWdNrz%2BkY3BgRGdetCYF51upsfyVCmJSRP%2FTLSfH0&X-Amz-Signature=ac66890c1b2cc0f3ea254de0c5c6d26ef4f594c374c19fdfe7b058a9f91fc1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKXZXKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGUuP8GC3OMl11PoV5nOfmM%2FXzcZoZBXaw1GBa9cDuHAiAs8sWawRmUqpArODCmjlzA7mMDc%2FuqjCH2CteVAtvV%2Byr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMfZeG%2BC1%2BVOry37ZJKtwDXd8RDvVoVdFC5cLUlF3HDKqtBZpxqlEazCDDRqcCZ%2F8GI7N7lCkf%2FCHM6OzvGw%2F0HTyvlpjNAonKgfdhAeZi%2BcivVUU1mqQi1a5dvR1V6AYVIVUenf79ocww0ypwsS3A%2BMIzsCOMphGduBTiar%2BUW%2FmSqfQhNgNk5GP46ddfN6Vv7iS6pAhEhORb3%2FSoZN3E2FuwJmWxMTcAeiNYPYZoOT4LUIbnXQZIC8aVWKM47hWujhlQUfsVbcg4MgeTdkkXsBNOYz3ss2dB%2BBHyVMdh2WhdTrQSBdCnbVijbZUhVmTV6CLeS9W7C%2Bq1Zd6RFqj%2FfEgP7Z9%2F7uWbZ10h1rwi%2BZn47k7nAOepp%2FBQdFOCpnbTSYAw1%2B3tqxbJP0FX2O4f5B5Ro8CwfBgj2RPbAZ0Y7CP3uT06it%2BK4nfi%2B3c5Bpx0GpIQWZsl70uZ0PYum36m3FwZMPVr7kdr3he8hqMzqPLDGsBkOAeoha8LlGB0mQhMcoSm8S4Agkp4EuNcQx8xlf8o9rDfuHa3NgKnb9RaB2PopJHLEByb12gMtrmL%2F%2ByVrEWESI50JPwsBnMnb8ZKjPNkjdLqdovdxQ%2F29v2kLAnVMciFPDtLNZB1WTkuCfz3ct7xzF4Bf4RGv4Iw5ePDvwY6pgG%2FFGXAuLhS75hh5joqFJLqC0p9WV65rC3UPFpnhATnYScTqmnZWCbvHr2bW6jYwNAE0QsOLrYKTUtIB88kxczTZQhRgDgiEqH2x60T62H1ibr2DU6Q2tacvGN%2BbbkLvo90EhxtmbcTETn9qgtbKCTuWst3FCcxGO5ouD49R1g2Cep12eEqINYzWdNrz%2BkY3BgRGdetCYF51upsfyVCmJSRP%2FTLSfH0&X-Amz-Signature=0033f5ee97c3f89e5031e888a2a4ffe1ff538c693744cd24ab9aabba9fec5974&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKXZXKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGUuP8GC3OMl11PoV5nOfmM%2FXzcZoZBXaw1GBa9cDuHAiAs8sWawRmUqpArODCmjlzA7mMDc%2FuqjCH2CteVAtvV%2Byr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMfZeG%2BC1%2BVOry37ZJKtwDXd8RDvVoVdFC5cLUlF3HDKqtBZpxqlEazCDDRqcCZ%2F8GI7N7lCkf%2FCHM6OzvGw%2F0HTyvlpjNAonKgfdhAeZi%2BcivVUU1mqQi1a5dvR1V6AYVIVUenf79ocww0ypwsS3A%2BMIzsCOMphGduBTiar%2BUW%2FmSqfQhNgNk5GP46ddfN6Vv7iS6pAhEhORb3%2FSoZN3E2FuwJmWxMTcAeiNYPYZoOT4LUIbnXQZIC8aVWKM47hWujhlQUfsVbcg4MgeTdkkXsBNOYz3ss2dB%2BBHyVMdh2WhdTrQSBdCnbVijbZUhVmTV6CLeS9W7C%2Bq1Zd6RFqj%2FfEgP7Z9%2F7uWbZ10h1rwi%2BZn47k7nAOepp%2FBQdFOCpnbTSYAw1%2B3tqxbJP0FX2O4f5B5Ro8CwfBgj2RPbAZ0Y7CP3uT06it%2BK4nfi%2B3c5Bpx0GpIQWZsl70uZ0PYum36m3FwZMPVr7kdr3he8hqMzqPLDGsBkOAeoha8LlGB0mQhMcoSm8S4Agkp4EuNcQx8xlf8o9rDfuHa3NgKnb9RaB2PopJHLEByb12gMtrmL%2F%2ByVrEWESI50JPwsBnMnb8ZKjPNkjdLqdovdxQ%2F29v2kLAnVMciFPDtLNZB1WTkuCfz3ct7xzF4Bf4RGv4Iw5ePDvwY6pgG%2FFGXAuLhS75hh5joqFJLqC0p9WV65rC3UPFpnhATnYScTqmnZWCbvHr2bW6jYwNAE0QsOLrYKTUtIB88kxczTZQhRgDgiEqH2x60T62H1ibr2DU6Q2tacvGN%2BbbkLvo90EhxtmbcTETn9qgtbKCTuWst3FCcxGO5ouD49R1g2Cep12eEqINYzWdNrz%2BkY3BgRGdetCYF51upsfyVCmJSRP%2FTLSfH0&X-Amz-Signature=262a3168b9155339fe26242107c8117882067a313f81452850e47fdd9d396780&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DKXZXKQ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGUuP8GC3OMl11PoV5nOfmM%2FXzcZoZBXaw1GBa9cDuHAiAs8sWawRmUqpArODCmjlzA7mMDc%2FuqjCH2CteVAtvV%2Byr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMfZeG%2BC1%2BVOry37ZJKtwDXd8RDvVoVdFC5cLUlF3HDKqtBZpxqlEazCDDRqcCZ%2F8GI7N7lCkf%2FCHM6OzvGw%2F0HTyvlpjNAonKgfdhAeZi%2BcivVUU1mqQi1a5dvR1V6AYVIVUenf79ocww0ypwsS3A%2BMIzsCOMphGduBTiar%2BUW%2FmSqfQhNgNk5GP46ddfN6Vv7iS6pAhEhORb3%2FSoZN3E2FuwJmWxMTcAeiNYPYZoOT4LUIbnXQZIC8aVWKM47hWujhlQUfsVbcg4MgeTdkkXsBNOYz3ss2dB%2BBHyVMdh2WhdTrQSBdCnbVijbZUhVmTV6CLeS9W7C%2Bq1Zd6RFqj%2FfEgP7Z9%2F7uWbZ10h1rwi%2BZn47k7nAOepp%2FBQdFOCpnbTSYAw1%2B3tqxbJP0FX2O4f5B5Ro8CwfBgj2RPbAZ0Y7CP3uT06it%2BK4nfi%2B3c5Bpx0GpIQWZsl70uZ0PYum36m3FwZMPVr7kdr3he8hqMzqPLDGsBkOAeoha8LlGB0mQhMcoSm8S4Agkp4EuNcQx8xlf8o9rDfuHa3NgKnb9RaB2PopJHLEByb12gMtrmL%2F%2ByVrEWESI50JPwsBnMnb8ZKjPNkjdLqdovdxQ%2F29v2kLAnVMciFPDtLNZB1WTkuCfz3ct7xzF4Bf4RGv4Iw5ePDvwY6pgG%2FFGXAuLhS75hh5joqFJLqC0p9WV65rC3UPFpnhATnYScTqmnZWCbvHr2bW6jYwNAE0QsOLrYKTUtIB88kxczTZQhRgDgiEqH2x60T62H1ibr2DU6Q2tacvGN%2BbbkLvo90EhxtmbcTETn9qgtbKCTuWst3FCcxGO5ouD49R1g2Cep12eEqINYzWdNrz%2BkY3BgRGdetCYF51upsfyVCmJSRP%2FTLSfH0&X-Amz-Signature=5f99b8a25595f17364f0f2475ae4932ab973dd2d8bdf03c5d187b4a38e6dc4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
