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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BRADWL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZC8zCoZ1Jocou5f5EnSErY8rYikVzBm3IE8LbME1rAIhAK%2BZGnSDd69z9W3EkpzSwrFialqAXao0eQ70DM%2FoU1vuKv8DCFMQABoMNjM3NDIzMTgzODA1IgwKSsnJoEFqEIMmJuEq3ANWZ0cQOpL0ur6QeEliH2Y6V5oXACuYP6pS0P4kqeVCpm1xr6xX7UHlC7gqALozJZGi80TTo%2BjC9OqvZPr%2FvYtjIk3rv1OhYjWAKcvFmqbL%2FKch9aVSl4bA6uqixIFt7zVll9kg4bFzSEPE%2Fq5okRiaFiFlT5r2cIk%2FZ2NiUGxhYEpN%2FciUp2KGFkfFEvM36AKKjib2CZwyjkNd56DHNyELt4VV3DM1iN0K1C5eODdTPpvc10%2Boxt2Fbd4kOCEI4sRzsF1pzxd9XRZjoA94OVAfbnaMLMz8WDNPxOHTrFZ3%2Bmlkfweg1N%2BEKQ%2BXDeODXMQV%2FFuPEPhTydRTQLglkbr2A9CxR8aFpd1YgNau5YIhGw%2FDXZbBGW%2BVbwWXifVFlj1ONq4iZuGQvYEMtPRiJywCgOAqhLto6uf9yYkCvsfRhjNZ2egSF6uslrHdRkeNEmV%2ByO0S95xRLJQdJukVgjlRjWMcIVrqA%2BnZn1de%2F87coxOvq2KD%2B8vPau4%2F6cEppF%2ByUIqqOayPix8DeHydAizct2qfQCKAMO7PYYqqX1NFP51WotqrqkTFRFIpxl5kNCCiHi6kWU%2Bh39ecDMH%2BO0W1l1pDnGu2v03e0%2BAN4Sfe60UYXGAVsnJFuGir%2FzDB9pe%2FBjqkAemYE755%2FH%2Bo7a43hf6nKlUi9zYnXEPzjQKjY2OWOXbkHUvMFZ7QDtqUiCsFsp98qzEhUSs6eMjFc%2FBhB9h3%2FUdlEHv9koITMVXq%2BpdVrAXNLY9h2eUm6V6%2F%2BtblY19ots1Q7C%2B2gvDOiWopYjD%2F7b6psEe3PLiF1L5O1KNO2aM8uYr50J2ckhY5FPNylXb2aYHtPwK5m%2B06mM1ZeTUaHyoRnQDf&X-Amz-Signature=d0c4596cd19c3f2feefda6991abb72c0bd4a3db5ba6cda890e3b3e90264064d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BRADWL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZC8zCoZ1Jocou5f5EnSErY8rYikVzBm3IE8LbME1rAIhAK%2BZGnSDd69z9W3EkpzSwrFialqAXao0eQ70DM%2FoU1vuKv8DCFMQABoMNjM3NDIzMTgzODA1IgwKSsnJoEFqEIMmJuEq3ANWZ0cQOpL0ur6QeEliH2Y6V5oXACuYP6pS0P4kqeVCpm1xr6xX7UHlC7gqALozJZGi80TTo%2BjC9OqvZPr%2FvYtjIk3rv1OhYjWAKcvFmqbL%2FKch9aVSl4bA6uqixIFt7zVll9kg4bFzSEPE%2Fq5okRiaFiFlT5r2cIk%2FZ2NiUGxhYEpN%2FciUp2KGFkfFEvM36AKKjib2CZwyjkNd56DHNyELt4VV3DM1iN0K1C5eODdTPpvc10%2Boxt2Fbd4kOCEI4sRzsF1pzxd9XRZjoA94OVAfbnaMLMz8WDNPxOHTrFZ3%2Bmlkfweg1N%2BEKQ%2BXDeODXMQV%2FFuPEPhTydRTQLglkbr2A9CxR8aFpd1YgNau5YIhGw%2FDXZbBGW%2BVbwWXifVFlj1ONq4iZuGQvYEMtPRiJywCgOAqhLto6uf9yYkCvsfRhjNZ2egSF6uslrHdRkeNEmV%2ByO0S95xRLJQdJukVgjlRjWMcIVrqA%2BnZn1de%2F87coxOvq2KD%2B8vPau4%2F6cEppF%2ByUIqqOayPix8DeHydAizct2qfQCKAMO7PYYqqX1NFP51WotqrqkTFRFIpxl5kNCCiHi6kWU%2Bh39ecDMH%2BO0W1l1pDnGu2v03e0%2BAN4Sfe60UYXGAVsnJFuGir%2FzDB9pe%2FBjqkAemYE755%2FH%2Bo7a43hf6nKlUi9zYnXEPzjQKjY2OWOXbkHUvMFZ7QDtqUiCsFsp98qzEhUSs6eMjFc%2FBhB9h3%2FUdlEHv9koITMVXq%2BpdVrAXNLY9h2eUm6V6%2F%2BtblY19ots1Q7C%2B2gvDOiWopYjD%2F7b6psEe3PLiF1L5O1KNO2aM8uYr50J2ckhY5FPNylXb2aYHtPwK5m%2B06mM1ZeTUaHyoRnQDf&X-Amz-Signature=789e75a59101bba7002b2b970f2518ae3e0c1bc647902c034e149dbf87c053aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BRADWL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZC8zCoZ1Jocou5f5EnSErY8rYikVzBm3IE8LbME1rAIhAK%2BZGnSDd69z9W3EkpzSwrFialqAXao0eQ70DM%2FoU1vuKv8DCFMQABoMNjM3NDIzMTgzODA1IgwKSsnJoEFqEIMmJuEq3ANWZ0cQOpL0ur6QeEliH2Y6V5oXACuYP6pS0P4kqeVCpm1xr6xX7UHlC7gqALozJZGi80TTo%2BjC9OqvZPr%2FvYtjIk3rv1OhYjWAKcvFmqbL%2FKch9aVSl4bA6uqixIFt7zVll9kg4bFzSEPE%2Fq5okRiaFiFlT5r2cIk%2FZ2NiUGxhYEpN%2FciUp2KGFkfFEvM36AKKjib2CZwyjkNd56DHNyELt4VV3DM1iN0K1C5eODdTPpvc10%2Boxt2Fbd4kOCEI4sRzsF1pzxd9XRZjoA94OVAfbnaMLMz8WDNPxOHTrFZ3%2Bmlkfweg1N%2BEKQ%2BXDeODXMQV%2FFuPEPhTydRTQLglkbr2A9CxR8aFpd1YgNau5YIhGw%2FDXZbBGW%2BVbwWXifVFlj1ONq4iZuGQvYEMtPRiJywCgOAqhLto6uf9yYkCvsfRhjNZ2egSF6uslrHdRkeNEmV%2ByO0S95xRLJQdJukVgjlRjWMcIVrqA%2BnZn1de%2F87coxOvq2KD%2B8vPau4%2F6cEppF%2ByUIqqOayPix8DeHydAizct2qfQCKAMO7PYYqqX1NFP51WotqrqkTFRFIpxl5kNCCiHi6kWU%2Bh39ecDMH%2BO0W1l1pDnGu2v03e0%2BAN4Sfe60UYXGAVsnJFuGir%2FzDB9pe%2FBjqkAemYE755%2FH%2Bo7a43hf6nKlUi9zYnXEPzjQKjY2OWOXbkHUvMFZ7QDtqUiCsFsp98qzEhUSs6eMjFc%2FBhB9h3%2FUdlEHv9koITMVXq%2BpdVrAXNLY9h2eUm6V6%2F%2BtblY19ots1Q7C%2B2gvDOiWopYjD%2F7b6psEe3PLiF1L5O1KNO2aM8uYr50J2ckhY5FPNylXb2aYHtPwK5m%2B06mM1ZeTUaHyoRnQDf&X-Amz-Signature=7deea0f96e22d04926300d5b56818988da571c00ee6eaeb58f816249a0205586&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BRADWL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZC8zCoZ1Jocou5f5EnSErY8rYikVzBm3IE8LbME1rAIhAK%2BZGnSDd69z9W3EkpzSwrFialqAXao0eQ70DM%2FoU1vuKv8DCFMQABoMNjM3NDIzMTgzODA1IgwKSsnJoEFqEIMmJuEq3ANWZ0cQOpL0ur6QeEliH2Y6V5oXACuYP6pS0P4kqeVCpm1xr6xX7UHlC7gqALozJZGi80TTo%2BjC9OqvZPr%2FvYtjIk3rv1OhYjWAKcvFmqbL%2FKch9aVSl4bA6uqixIFt7zVll9kg4bFzSEPE%2Fq5okRiaFiFlT5r2cIk%2FZ2NiUGxhYEpN%2FciUp2KGFkfFEvM36AKKjib2CZwyjkNd56DHNyELt4VV3DM1iN0K1C5eODdTPpvc10%2Boxt2Fbd4kOCEI4sRzsF1pzxd9XRZjoA94OVAfbnaMLMz8WDNPxOHTrFZ3%2Bmlkfweg1N%2BEKQ%2BXDeODXMQV%2FFuPEPhTydRTQLglkbr2A9CxR8aFpd1YgNau5YIhGw%2FDXZbBGW%2BVbwWXifVFlj1ONq4iZuGQvYEMtPRiJywCgOAqhLto6uf9yYkCvsfRhjNZ2egSF6uslrHdRkeNEmV%2ByO0S95xRLJQdJukVgjlRjWMcIVrqA%2BnZn1de%2F87coxOvq2KD%2B8vPau4%2F6cEppF%2ByUIqqOayPix8DeHydAizct2qfQCKAMO7PYYqqX1NFP51WotqrqkTFRFIpxl5kNCCiHi6kWU%2Bh39ecDMH%2BO0W1l1pDnGu2v03e0%2BAN4Sfe60UYXGAVsnJFuGir%2FzDB9pe%2FBjqkAemYE755%2FH%2Bo7a43hf6nKlUi9zYnXEPzjQKjY2OWOXbkHUvMFZ7QDtqUiCsFsp98qzEhUSs6eMjFc%2FBhB9h3%2FUdlEHv9koITMVXq%2BpdVrAXNLY9h2eUm6V6%2F%2BtblY19ots1Q7C%2B2gvDOiWopYjD%2F7b6psEe3PLiF1L5O1KNO2aM8uYr50J2ckhY5FPNylXb2aYHtPwK5m%2B06mM1ZeTUaHyoRnQDf&X-Amz-Signature=7e063638e0efdc575cc3dc40bc1f1e0adde5fd181bc24cfbd397e7e5d4c45f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BRADWL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZC8zCoZ1Jocou5f5EnSErY8rYikVzBm3IE8LbME1rAIhAK%2BZGnSDd69z9W3EkpzSwrFialqAXao0eQ70DM%2FoU1vuKv8DCFMQABoMNjM3NDIzMTgzODA1IgwKSsnJoEFqEIMmJuEq3ANWZ0cQOpL0ur6QeEliH2Y6V5oXACuYP6pS0P4kqeVCpm1xr6xX7UHlC7gqALozJZGi80TTo%2BjC9OqvZPr%2FvYtjIk3rv1OhYjWAKcvFmqbL%2FKch9aVSl4bA6uqixIFt7zVll9kg4bFzSEPE%2Fq5okRiaFiFlT5r2cIk%2FZ2NiUGxhYEpN%2FciUp2KGFkfFEvM36AKKjib2CZwyjkNd56DHNyELt4VV3DM1iN0K1C5eODdTPpvc10%2Boxt2Fbd4kOCEI4sRzsF1pzxd9XRZjoA94OVAfbnaMLMz8WDNPxOHTrFZ3%2Bmlkfweg1N%2BEKQ%2BXDeODXMQV%2FFuPEPhTydRTQLglkbr2A9CxR8aFpd1YgNau5YIhGw%2FDXZbBGW%2BVbwWXifVFlj1ONq4iZuGQvYEMtPRiJywCgOAqhLto6uf9yYkCvsfRhjNZ2egSF6uslrHdRkeNEmV%2ByO0S95xRLJQdJukVgjlRjWMcIVrqA%2BnZn1de%2F87coxOvq2KD%2B8vPau4%2F6cEppF%2ByUIqqOayPix8DeHydAizct2qfQCKAMO7PYYqqX1NFP51WotqrqkTFRFIpxl5kNCCiHi6kWU%2Bh39ecDMH%2BO0W1l1pDnGu2v03e0%2BAN4Sfe60UYXGAVsnJFuGir%2FzDB9pe%2FBjqkAemYE755%2FH%2Bo7a43hf6nKlUi9zYnXEPzjQKjY2OWOXbkHUvMFZ7QDtqUiCsFsp98qzEhUSs6eMjFc%2FBhB9h3%2FUdlEHv9koITMVXq%2BpdVrAXNLY9h2eUm6V6%2F%2BtblY19ots1Q7C%2B2gvDOiWopYjD%2F7b6psEe3PLiF1L5O1KNO2aM8uYr50J2ckhY5FPNylXb2aYHtPwK5m%2B06mM1ZeTUaHyoRnQDf&X-Amz-Signature=76c58dd50f2fb926fa997f90c51f34204b1166f2d5e0767ef7a77b27a4a89ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BRADWL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZC8zCoZ1Jocou5f5EnSErY8rYikVzBm3IE8LbME1rAIhAK%2BZGnSDd69z9W3EkpzSwrFialqAXao0eQ70DM%2FoU1vuKv8DCFMQABoMNjM3NDIzMTgzODA1IgwKSsnJoEFqEIMmJuEq3ANWZ0cQOpL0ur6QeEliH2Y6V5oXACuYP6pS0P4kqeVCpm1xr6xX7UHlC7gqALozJZGi80TTo%2BjC9OqvZPr%2FvYtjIk3rv1OhYjWAKcvFmqbL%2FKch9aVSl4bA6uqixIFt7zVll9kg4bFzSEPE%2Fq5okRiaFiFlT5r2cIk%2FZ2NiUGxhYEpN%2FciUp2KGFkfFEvM36AKKjib2CZwyjkNd56DHNyELt4VV3DM1iN0K1C5eODdTPpvc10%2Boxt2Fbd4kOCEI4sRzsF1pzxd9XRZjoA94OVAfbnaMLMz8WDNPxOHTrFZ3%2Bmlkfweg1N%2BEKQ%2BXDeODXMQV%2FFuPEPhTydRTQLglkbr2A9CxR8aFpd1YgNau5YIhGw%2FDXZbBGW%2BVbwWXifVFlj1ONq4iZuGQvYEMtPRiJywCgOAqhLto6uf9yYkCvsfRhjNZ2egSF6uslrHdRkeNEmV%2ByO0S95xRLJQdJukVgjlRjWMcIVrqA%2BnZn1de%2F87coxOvq2KD%2B8vPau4%2F6cEppF%2ByUIqqOayPix8DeHydAizct2qfQCKAMO7PYYqqX1NFP51WotqrqkTFRFIpxl5kNCCiHi6kWU%2Bh39ecDMH%2BO0W1l1pDnGu2v03e0%2BAN4Sfe60UYXGAVsnJFuGir%2FzDB9pe%2FBjqkAemYE755%2FH%2Bo7a43hf6nKlUi9zYnXEPzjQKjY2OWOXbkHUvMFZ7QDtqUiCsFsp98qzEhUSs6eMjFc%2FBhB9h3%2FUdlEHv9koITMVXq%2BpdVrAXNLY9h2eUm6V6%2F%2BtblY19ots1Q7C%2B2gvDOiWopYjD%2F7b6psEe3PLiF1L5O1KNO2aM8uYr50J2ckhY5FPNylXb2aYHtPwK5m%2B06mM1ZeTUaHyoRnQDf&X-Amz-Signature=8842a8afc1bbd3e1d7562309825c1ac3bc7b74bc87e2a3643b6f339d23ba8d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BRADWL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdZC8zCoZ1Jocou5f5EnSErY8rYikVzBm3IE8LbME1rAIhAK%2BZGnSDd69z9W3EkpzSwrFialqAXao0eQ70DM%2FoU1vuKv8DCFMQABoMNjM3NDIzMTgzODA1IgwKSsnJoEFqEIMmJuEq3ANWZ0cQOpL0ur6QeEliH2Y6V5oXACuYP6pS0P4kqeVCpm1xr6xX7UHlC7gqALozJZGi80TTo%2BjC9OqvZPr%2FvYtjIk3rv1OhYjWAKcvFmqbL%2FKch9aVSl4bA6uqixIFt7zVll9kg4bFzSEPE%2Fq5okRiaFiFlT5r2cIk%2FZ2NiUGxhYEpN%2FciUp2KGFkfFEvM36AKKjib2CZwyjkNd56DHNyELt4VV3DM1iN0K1C5eODdTPpvc10%2Boxt2Fbd4kOCEI4sRzsF1pzxd9XRZjoA94OVAfbnaMLMz8WDNPxOHTrFZ3%2Bmlkfweg1N%2BEKQ%2BXDeODXMQV%2FFuPEPhTydRTQLglkbr2A9CxR8aFpd1YgNau5YIhGw%2FDXZbBGW%2BVbwWXifVFlj1ONq4iZuGQvYEMtPRiJywCgOAqhLto6uf9yYkCvsfRhjNZ2egSF6uslrHdRkeNEmV%2ByO0S95xRLJQdJukVgjlRjWMcIVrqA%2BnZn1de%2F87coxOvq2KD%2B8vPau4%2F6cEppF%2ByUIqqOayPix8DeHydAizct2qfQCKAMO7PYYqqX1NFP51WotqrqkTFRFIpxl5kNCCiHi6kWU%2Bh39ecDMH%2BO0W1l1pDnGu2v03e0%2BAN4Sfe60UYXGAVsnJFuGir%2FzDB9pe%2FBjqkAemYE755%2FH%2Bo7a43hf6nKlUi9zYnXEPzjQKjY2OWOXbkHUvMFZ7QDtqUiCsFsp98qzEhUSs6eMjFc%2FBhB9h3%2FUdlEHv9koITMVXq%2BpdVrAXNLY9h2eUm6V6%2F%2BtblY19ots1Q7C%2B2gvDOiWopYjD%2F7b6psEe3PLiF1L5O1KNO2aM8uYr50J2ckhY5FPNylXb2aYHtPwK5m%2B06mM1ZeTUaHyoRnQDf&X-Amz-Signature=02b603f30b53e567564e172b2b234b852b971124e4ee091f1a397db4577c5842&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
