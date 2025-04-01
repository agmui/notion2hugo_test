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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAIAUAX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDmaYgdF9So%2FFNavxyRoCSkFxJ88TZtSqSgnClWX7IYBQIhAIO12MBWbf1xm4Czd32lGoA1NM51UnaW1kScLsk%2FbTKiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQuuWqttmGRR%2BzSsq3AMGYnB8Ac9GEguiqDvJtPJXR3%2Fzql5g%2BZ5JqgVRBmSsGVloP2kuyTdtBvgcdMdpWN%2FkJoEFuql8iP1Tik3OQ%2FX5CCvOqDRXS3n8eqqK0sqi2KmVJidn8d42lPYp3%2Fg%2BkNeaZqrBh5Eob5hn9EWlezE%2F3iiChT3Pn1lyBeY1om2eV77kRUq4H%2Bh9lj5exl3ZQwx8BhNURgp6zfK9YcWCsNAuRpO2afZoMqnGteIewd2vlRHLz6o2apfDWuZINo0FEzqgTGBXxqvNXe%2FpZwV4apTicNym%2BmdqshLDo0iRB4jCR06AaHojAWwOQSczWFMngdPxedo7QRuOA7G1p9aiMeS%2BXcRAEGRbQ%2FpJDlN0fb5z0wyqDYEXEbGDGm575x5Y0cwDmEV7D5TSiJUr9VB8dlT%2FIm63RYRjkxVli7wqmx3oyoCiZQOIxhAiSvDtLpPQb9Fcau%2BNdiYWG2qVg%2BGS1aj5ilfVNIt6wzJeUSca4OCSqB94kw683wNziUGwmkOwSM507mP0cQxIhDR1LZlZraUpEZrOs3fsWnKMNzl9g1AXYW93FrK9y7vjN%2FnN3UjjKRbPJZQqKui%2B8%2FOQNde9AvdNdufC7sU1SvMhH9H4ZBAvUG%2B9hT5RWTGfe%2FNZrTDCpK2%2FBjqkAQ0JpHNdaC4vDycx14HVABQlt%2BqxI0vH6S0eH%2Boef43tnJ7NaZ7Qrze3%2BfltDbtq5LZfyS1b5AO1sjYPnfFtrybYD0bnjTLMzdj6bUGo4I%2FteIalsHfP%2FFCK3uw1EdIX9AEUL0q3%2B%2F%2B0Kv9cynuJRRF3lM9GU%2Fhcb475oGDf6cXzNPgUtcFz75LdEsXdfqpnJQ0tY5DcR8vR4YW1UdyHRoOKYplf&X-Amz-Signature=06f5b112ea19b0aa7061ea9866e8e4ed607acdb0ebf1276597f561a851ba258d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAIAUAX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDmaYgdF9So%2FFNavxyRoCSkFxJ88TZtSqSgnClWX7IYBQIhAIO12MBWbf1xm4Czd32lGoA1NM51UnaW1kScLsk%2FbTKiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQuuWqttmGRR%2BzSsq3AMGYnB8Ac9GEguiqDvJtPJXR3%2Fzql5g%2BZ5JqgVRBmSsGVloP2kuyTdtBvgcdMdpWN%2FkJoEFuql8iP1Tik3OQ%2FX5CCvOqDRXS3n8eqqK0sqi2KmVJidn8d42lPYp3%2Fg%2BkNeaZqrBh5Eob5hn9EWlezE%2F3iiChT3Pn1lyBeY1om2eV77kRUq4H%2Bh9lj5exl3ZQwx8BhNURgp6zfK9YcWCsNAuRpO2afZoMqnGteIewd2vlRHLz6o2apfDWuZINo0FEzqgTGBXxqvNXe%2FpZwV4apTicNym%2BmdqshLDo0iRB4jCR06AaHojAWwOQSczWFMngdPxedo7QRuOA7G1p9aiMeS%2BXcRAEGRbQ%2FpJDlN0fb5z0wyqDYEXEbGDGm575x5Y0cwDmEV7D5TSiJUr9VB8dlT%2FIm63RYRjkxVli7wqmx3oyoCiZQOIxhAiSvDtLpPQb9Fcau%2BNdiYWG2qVg%2BGS1aj5ilfVNIt6wzJeUSca4OCSqB94kw683wNziUGwmkOwSM507mP0cQxIhDR1LZlZraUpEZrOs3fsWnKMNzl9g1AXYW93FrK9y7vjN%2FnN3UjjKRbPJZQqKui%2B8%2FOQNde9AvdNdufC7sU1SvMhH9H4ZBAvUG%2B9hT5RWTGfe%2FNZrTDCpK2%2FBjqkAQ0JpHNdaC4vDycx14HVABQlt%2BqxI0vH6S0eH%2Boef43tnJ7NaZ7Qrze3%2BfltDbtq5LZfyS1b5AO1sjYPnfFtrybYD0bnjTLMzdj6bUGo4I%2FteIalsHfP%2FFCK3uw1EdIX9AEUL0q3%2B%2F%2B0Kv9cynuJRRF3lM9GU%2Fhcb475oGDf6cXzNPgUtcFz75LdEsXdfqpnJQ0tY5DcR8vR4YW1UdyHRoOKYplf&X-Amz-Signature=9756bbe25648caf391ede94b6a1c63c899a34405331b8d1169e1c3b91936d393&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAIAUAX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDmaYgdF9So%2FFNavxyRoCSkFxJ88TZtSqSgnClWX7IYBQIhAIO12MBWbf1xm4Czd32lGoA1NM51UnaW1kScLsk%2FbTKiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQuuWqttmGRR%2BzSsq3AMGYnB8Ac9GEguiqDvJtPJXR3%2Fzql5g%2BZ5JqgVRBmSsGVloP2kuyTdtBvgcdMdpWN%2FkJoEFuql8iP1Tik3OQ%2FX5CCvOqDRXS3n8eqqK0sqi2KmVJidn8d42lPYp3%2Fg%2BkNeaZqrBh5Eob5hn9EWlezE%2F3iiChT3Pn1lyBeY1om2eV77kRUq4H%2Bh9lj5exl3ZQwx8BhNURgp6zfK9YcWCsNAuRpO2afZoMqnGteIewd2vlRHLz6o2apfDWuZINo0FEzqgTGBXxqvNXe%2FpZwV4apTicNym%2BmdqshLDo0iRB4jCR06AaHojAWwOQSczWFMngdPxedo7QRuOA7G1p9aiMeS%2BXcRAEGRbQ%2FpJDlN0fb5z0wyqDYEXEbGDGm575x5Y0cwDmEV7D5TSiJUr9VB8dlT%2FIm63RYRjkxVli7wqmx3oyoCiZQOIxhAiSvDtLpPQb9Fcau%2BNdiYWG2qVg%2BGS1aj5ilfVNIt6wzJeUSca4OCSqB94kw683wNziUGwmkOwSM507mP0cQxIhDR1LZlZraUpEZrOs3fsWnKMNzl9g1AXYW93FrK9y7vjN%2FnN3UjjKRbPJZQqKui%2B8%2FOQNde9AvdNdufC7sU1SvMhH9H4ZBAvUG%2B9hT5RWTGfe%2FNZrTDCpK2%2FBjqkAQ0JpHNdaC4vDycx14HVABQlt%2BqxI0vH6S0eH%2Boef43tnJ7NaZ7Qrze3%2BfltDbtq5LZfyS1b5AO1sjYPnfFtrybYD0bnjTLMzdj6bUGo4I%2FteIalsHfP%2FFCK3uw1EdIX9AEUL0q3%2B%2F%2B0Kv9cynuJRRF3lM9GU%2Fhcb475oGDf6cXzNPgUtcFz75LdEsXdfqpnJQ0tY5DcR8vR4YW1UdyHRoOKYplf&X-Amz-Signature=7e4ae5c141c5ba0d59cd0bacabc1b70cd8e5a9b1f1b91accaae5690f551933c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAIAUAX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDmaYgdF9So%2FFNavxyRoCSkFxJ88TZtSqSgnClWX7IYBQIhAIO12MBWbf1xm4Czd32lGoA1NM51UnaW1kScLsk%2FbTKiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQuuWqttmGRR%2BzSsq3AMGYnB8Ac9GEguiqDvJtPJXR3%2Fzql5g%2BZ5JqgVRBmSsGVloP2kuyTdtBvgcdMdpWN%2FkJoEFuql8iP1Tik3OQ%2FX5CCvOqDRXS3n8eqqK0sqi2KmVJidn8d42lPYp3%2Fg%2BkNeaZqrBh5Eob5hn9EWlezE%2F3iiChT3Pn1lyBeY1om2eV77kRUq4H%2Bh9lj5exl3ZQwx8BhNURgp6zfK9YcWCsNAuRpO2afZoMqnGteIewd2vlRHLz6o2apfDWuZINo0FEzqgTGBXxqvNXe%2FpZwV4apTicNym%2BmdqshLDo0iRB4jCR06AaHojAWwOQSczWFMngdPxedo7QRuOA7G1p9aiMeS%2BXcRAEGRbQ%2FpJDlN0fb5z0wyqDYEXEbGDGm575x5Y0cwDmEV7D5TSiJUr9VB8dlT%2FIm63RYRjkxVli7wqmx3oyoCiZQOIxhAiSvDtLpPQb9Fcau%2BNdiYWG2qVg%2BGS1aj5ilfVNIt6wzJeUSca4OCSqB94kw683wNziUGwmkOwSM507mP0cQxIhDR1LZlZraUpEZrOs3fsWnKMNzl9g1AXYW93FrK9y7vjN%2FnN3UjjKRbPJZQqKui%2B8%2FOQNde9AvdNdufC7sU1SvMhH9H4ZBAvUG%2B9hT5RWTGfe%2FNZrTDCpK2%2FBjqkAQ0JpHNdaC4vDycx14HVABQlt%2BqxI0vH6S0eH%2Boef43tnJ7NaZ7Qrze3%2BfltDbtq5LZfyS1b5AO1sjYPnfFtrybYD0bnjTLMzdj6bUGo4I%2FteIalsHfP%2FFCK3uw1EdIX9AEUL0q3%2B%2F%2B0Kv9cynuJRRF3lM9GU%2Fhcb475oGDf6cXzNPgUtcFz75LdEsXdfqpnJQ0tY5DcR8vR4YW1UdyHRoOKYplf&X-Amz-Signature=cdf555d21a90d4320226d2bbfdfa92561e52d67ee214768e9e38a5eaa8dfe1db&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAIAUAX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDmaYgdF9So%2FFNavxyRoCSkFxJ88TZtSqSgnClWX7IYBQIhAIO12MBWbf1xm4Czd32lGoA1NM51UnaW1kScLsk%2FbTKiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQuuWqttmGRR%2BzSsq3AMGYnB8Ac9GEguiqDvJtPJXR3%2Fzql5g%2BZ5JqgVRBmSsGVloP2kuyTdtBvgcdMdpWN%2FkJoEFuql8iP1Tik3OQ%2FX5CCvOqDRXS3n8eqqK0sqi2KmVJidn8d42lPYp3%2Fg%2BkNeaZqrBh5Eob5hn9EWlezE%2F3iiChT3Pn1lyBeY1om2eV77kRUq4H%2Bh9lj5exl3ZQwx8BhNURgp6zfK9YcWCsNAuRpO2afZoMqnGteIewd2vlRHLz6o2apfDWuZINo0FEzqgTGBXxqvNXe%2FpZwV4apTicNym%2BmdqshLDo0iRB4jCR06AaHojAWwOQSczWFMngdPxedo7QRuOA7G1p9aiMeS%2BXcRAEGRbQ%2FpJDlN0fb5z0wyqDYEXEbGDGm575x5Y0cwDmEV7D5TSiJUr9VB8dlT%2FIm63RYRjkxVli7wqmx3oyoCiZQOIxhAiSvDtLpPQb9Fcau%2BNdiYWG2qVg%2BGS1aj5ilfVNIt6wzJeUSca4OCSqB94kw683wNziUGwmkOwSM507mP0cQxIhDR1LZlZraUpEZrOs3fsWnKMNzl9g1AXYW93FrK9y7vjN%2FnN3UjjKRbPJZQqKui%2B8%2FOQNde9AvdNdufC7sU1SvMhH9H4ZBAvUG%2B9hT5RWTGfe%2FNZrTDCpK2%2FBjqkAQ0JpHNdaC4vDycx14HVABQlt%2BqxI0vH6S0eH%2Boef43tnJ7NaZ7Qrze3%2BfltDbtq5LZfyS1b5AO1sjYPnfFtrybYD0bnjTLMzdj6bUGo4I%2FteIalsHfP%2FFCK3uw1EdIX9AEUL0q3%2B%2F%2B0Kv9cynuJRRF3lM9GU%2Fhcb475oGDf6cXzNPgUtcFz75LdEsXdfqpnJQ0tY5DcR8vR4YW1UdyHRoOKYplf&X-Amz-Signature=fd2c3421030b1eead1ef76edf29681a53a034a1f2fa688308a93801672270dec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAIAUAX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDmaYgdF9So%2FFNavxyRoCSkFxJ88TZtSqSgnClWX7IYBQIhAIO12MBWbf1xm4Czd32lGoA1NM51UnaW1kScLsk%2FbTKiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQuuWqttmGRR%2BzSsq3AMGYnB8Ac9GEguiqDvJtPJXR3%2Fzql5g%2BZ5JqgVRBmSsGVloP2kuyTdtBvgcdMdpWN%2FkJoEFuql8iP1Tik3OQ%2FX5CCvOqDRXS3n8eqqK0sqi2KmVJidn8d42lPYp3%2Fg%2BkNeaZqrBh5Eob5hn9EWlezE%2F3iiChT3Pn1lyBeY1om2eV77kRUq4H%2Bh9lj5exl3ZQwx8BhNURgp6zfK9YcWCsNAuRpO2afZoMqnGteIewd2vlRHLz6o2apfDWuZINo0FEzqgTGBXxqvNXe%2FpZwV4apTicNym%2BmdqshLDo0iRB4jCR06AaHojAWwOQSczWFMngdPxedo7QRuOA7G1p9aiMeS%2BXcRAEGRbQ%2FpJDlN0fb5z0wyqDYEXEbGDGm575x5Y0cwDmEV7D5TSiJUr9VB8dlT%2FIm63RYRjkxVli7wqmx3oyoCiZQOIxhAiSvDtLpPQb9Fcau%2BNdiYWG2qVg%2BGS1aj5ilfVNIt6wzJeUSca4OCSqB94kw683wNziUGwmkOwSM507mP0cQxIhDR1LZlZraUpEZrOs3fsWnKMNzl9g1AXYW93FrK9y7vjN%2FnN3UjjKRbPJZQqKui%2B8%2FOQNde9AvdNdufC7sU1SvMhH9H4ZBAvUG%2B9hT5RWTGfe%2FNZrTDCpK2%2FBjqkAQ0JpHNdaC4vDycx14HVABQlt%2BqxI0vH6S0eH%2Boef43tnJ7NaZ7Qrze3%2BfltDbtq5LZfyS1b5AO1sjYPnfFtrybYD0bnjTLMzdj6bUGo4I%2FteIalsHfP%2FFCK3uw1EdIX9AEUL0q3%2B%2F%2B0Kv9cynuJRRF3lM9GU%2Fhcb475oGDf6cXzNPgUtcFz75LdEsXdfqpnJQ0tY5DcR8vR4YW1UdyHRoOKYplf&X-Amz-Signature=bb89a144b4efd4930ce5c31ded733e9dcc1e3eeac7e9c8fb78f719d19afb4bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPAIAUAX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDmaYgdF9So%2FFNavxyRoCSkFxJ88TZtSqSgnClWX7IYBQIhAIO12MBWbf1xm4Czd32lGoA1NM51UnaW1kScLsk%2FbTKiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoQuuWqttmGRR%2BzSsq3AMGYnB8Ac9GEguiqDvJtPJXR3%2Fzql5g%2BZ5JqgVRBmSsGVloP2kuyTdtBvgcdMdpWN%2FkJoEFuql8iP1Tik3OQ%2FX5CCvOqDRXS3n8eqqK0sqi2KmVJidn8d42lPYp3%2Fg%2BkNeaZqrBh5Eob5hn9EWlezE%2F3iiChT3Pn1lyBeY1om2eV77kRUq4H%2Bh9lj5exl3ZQwx8BhNURgp6zfK9YcWCsNAuRpO2afZoMqnGteIewd2vlRHLz6o2apfDWuZINo0FEzqgTGBXxqvNXe%2FpZwV4apTicNym%2BmdqshLDo0iRB4jCR06AaHojAWwOQSczWFMngdPxedo7QRuOA7G1p9aiMeS%2BXcRAEGRbQ%2FpJDlN0fb5z0wyqDYEXEbGDGm575x5Y0cwDmEV7D5TSiJUr9VB8dlT%2FIm63RYRjkxVli7wqmx3oyoCiZQOIxhAiSvDtLpPQb9Fcau%2BNdiYWG2qVg%2BGS1aj5ilfVNIt6wzJeUSca4OCSqB94kw683wNziUGwmkOwSM507mP0cQxIhDR1LZlZraUpEZrOs3fsWnKMNzl9g1AXYW93FrK9y7vjN%2FnN3UjjKRbPJZQqKui%2B8%2FOQNde9AvdNdufC7sU1SvMhH9H4ZBAvUG%2B9hT5RWTGfe%2FNZrTDCpK2%2FBjqkAQ0JpHNdaC4vDycx14HVABQlt%2BqxI0vH6S0eH%2Boef43tnJ7NaZ7Qrze3%2BfltDbtq5LZfyS1b5AO1sjYPnfFtrybYD0bnjTLMzdj6bUGo4I%2FteIalsHfP%2FFCK3uw1EdIX9AEUL0q3%2B%2F%2B0Kv9cynuJRRF3lM9GU%2Fhcb475oGDf6cXzNPgUtcFz75LdEsXdfqpnJQ0tY5DcR8vR4YW1UdyHRoOKYplf&X-Amz-Signature=8f087120c5c0bca163ffd3317a825913c1995f970d63750962a82c64b8095d41&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
