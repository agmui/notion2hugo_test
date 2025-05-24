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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSQV3JT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCdxSKoK%2F6V%2Bkzc6M3fi0n4CPC95UzUma0gDVRSpvSnbQIgF31fZwfXoxuGlGCwn0oAjElJ1UG8UMpz8HPQVX379nIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMuvLWCbtPtlcIhsKSrcA3m9tw4cSH58i7R91GStyLYpFDCSADZ6Svk00nlYuY8owG8LoF7kS%2Byg405qK7wN%2BpS%2BoKb2H9ici8HJ0M6aSG4Ztm07LLyGypAVCY%2F0WzKrKYDUpjMXfyRvwrWFq5sXv67KvgNrysvV79PFVVR%2FEYT891K7u5W26CATdmo6mCD6a7WG7%2FW4hoevnzfdZTLLieHpuzlDh3ccgcCM59%2F%2F1WPPVqIwDyMy6vJqKIU9duqeCFPO8w1TU9JMm9wxrs3brRcjqA2%2BY6SeFn3IYwBnLUF9wRRk1aHwDcHbfyxzXoJ61JUVJOmC6HYSrwTT8b%2Fvd7pHmwqrT%2F%2BaOWDaVFr7Uz5K8IJe7pkbHnNq28q%2Fa88xJTn3UFP2qGloriPmhA7m9AIQYDNmrMwO6k254GMz%2FIvifVb0%2BCZ95x83ERyKZDavUWTyJ%2FkRM3BHSOhO%2BMi2VtcF13r3TYwIz4T0c9FOOWpFebvB9kkoRF7YsLr2CE40hFE%2FhAMF%2Fe0gNUu2IXhD%2BqSn3IG0SV3Nz4slO484izYFj1slTan3dBfsRFpWUyhlOIf%2F7SL1a%2F78IRvuhf1Rf8IXrjJE5CcZvWT%2Bw6oOG%2BCHlLI7VCfMXldJVrT6NEY7l5ZV%2Fnb2K8s%2BfzMIML7gxcEGOqUBrs14cABQJpC%2BB%2F9Ri%2BLRp5K2%2BNtlCt9ume0MloSA3JQf65A0MHYJ3tAr57A7J0WJlraKdQ4b%2FOQTbSFmrYTDJhfBNs%2FdrnaaXIn97tSxP22Xup00gjhsJdSFdg%2FIHrJOMMM555k1DWq6B0l8ChCM1FoQTln1ofNBmPS26SBfl0bGSZ2H2wp8w7XdEYro0NXjcBn2X73a%2BJ8%2FV1f8rnmCoxyqeIHA&X-Amz-Signature=2e1dada60e2aac3b248eb393e81e3a7f4497108918e4ab200cefec3d40a428de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSQV3JT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCdxSKoK%2F6V%2Bkzc6M3fi0n4CPC95UzUma0gDVRSpvSnbQIgF31fZwfXoxuGlGCwn0oAjElJ1UG8UMpz8HPQVX379nIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMuvLWCbtPtlcIhsKSrcA3m9tw4cSH58i7R91GStyLYpFDCSADZ6Svk00nlYuY8owG8LoF7kS%2Byg405qK7wN%2BpS%2BoKb2H9ici8HJ0M6aSG4Ztm07LLyGypAVCY%2F0WzKrKYDUpjMXfyRvwrWFq5sXv67KvgNrysvV79PFVVR%2FEYT891K7u5W26CATdmo6mCD6a7WG7%2FW4hoevnzfdZTLLieHpuzlDh3ccgcCM59%2F%2F1WPPVqIwDyMy6vJqKIU9duqeCFPO8w1TU9JMm9wxrs3brRcjqA2%2BY6SeFn3IYwBnLUF9wRRk1aHwDcHbfyxzXoJ61JUVJOmC6HYSrwTT8b%2Fvd7pHmwqrT%2F%2BaOWDaVFr7Uz5K8IJe7pkbHnNq28q%2Fa88xJTn3UFP2qGloriPmhA7m9AIQYDNmrMwO6k254GMz%2FIvifVb0%2BCZ95x83ERyKZDavUWTyJ%2FkRM3BHSOhO%2BMi2VtcF13r3TYwIz4T0c9FOOWpFebvB9kkoRF7YsLr2CE40hFE%2FhAMF%2Fe0gNUu2IXhD%2BqSn3IG0SV3Nz4slO484izYFj1slTan3dBfsRFpWUyhlOIf%2F7SL1a%2F78IRvuhf1Rf8IXrjJE5CcZvWT%2Bw6oOG%2BCHlLI7VCfMXldJVrT6NEY7l5ZV%2Fnb2K8s%2BfzMIML7gxcEGOqUBrs14cABQJpC%2BB%2F9Ri%2BLRp5K2%2BNtlCt9ume0MloSA3JQf65A0MHYJ3tAr57A7J0WJlraKdQ4b%2FOQTbSFmrYTDJhfBNs%2FdrnaaXIn97tSxP22Xup00gjhsJdSFdg%2FIHrJOMMM555k1DWq6B0l8ChCM1FoQTln1ofNBmPS26SBfl0bGSZ2H2wp8w7XdEYro0NXjcBn2X73a%2BJ8%2FV1f8rnmCoxyqeIHA&X-Amz-Signature=2916cabeed9d8b7972bd0c0c0456f8b9b69aefaa0bb6f19b5f8162095963de32&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSQV3JT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCdxSKoK%2F6V%2Bkzc6M3fi0n4CPC95UzUma0gDVRSpvSnbQIgF31fZwfXoxuGlGCwn0oAjElJ1UG8UMpz8HPQVX379nIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMuvLWCbtPtlcIhsKSrcA3m9tw4cSH58i7R91GStyLYpFDCSADZ6Svk00nlYuY8owG8LoF7kS%2Byg405qK7wN%2BpS%2BoKb2H9ici8HJ0M6aSG4Ztm07LLyGypAVCY%2F0WzKrKYDUpjMXfyRvwrWFq5sXv67KvgNrysvV79PFVVR%2FEYT891K7u5W26CATdmo6mCD6a7WG7%2FW4hoevnzfdZTLLieHpuzlDh3ccgcCM59%2F%2F1WPPVqIwDyMy6vJqKIU9duqeCFPO8w1TU9JMm9wxrs3brRcjqA2%2BY6SeFn3IYwBnLUF9wRRk1aHwDcHbfyxzXoJ61JUVJOmC6HYSrwTT8b%2Fvd7pHmwqrT%2F%2BaOWDaVFr7Uz5K8IJe7pkbHnNq28q%2Fa88xJTn3UFP2qGloriPmhA7m9AIQYDNmrMwO6k254GMz%2FIvifVb0%2BCZ95x83ERyKZDavUWTyJ%2FkRM3BHSOhO%2BMi2VtcF13r3TYwIz4T0c9FOOWpFebvB9kkoRF7YsLr2CE40hFE%2FhAMF%2Fe0gNUu2IXhD%2BqSn3IG0SV3Nz4slO484izYFj1slTan3dBfsRFpWUyhlOIf%2F7SL1a%2F78IRvuhf1Rf8IXrjJE5CcZvWT%2Bw6oOG%2BCHlLI7VCfMXldJVrT6NEY7l5ZV%2Fnb2K8s%2BfzMIML7gxcEGOqUBrs14cABQJpC%2BB%2F9Ri%2BLRp5K2%2BNtlCt9ume0MloSA3JQf65A0MHYJ3tAr57A7J0WJlraKdQ4b%2FOQTbSFmrYTDJhfBNs%2FdrnaaXIn97tSxP22Xup00gjhsJdSFdg%2FIHrJOMMM555k1DWq6B0l8ChCM1FoQTln1ofNBmPS26SBfl0bGSZ2H2wp8w7XdEYro0NXjcBn2X73a%2BJ8%2FV1f8rnmCoxyqeIHA&X-Amz-Signature=d30db5fe2bd0a4dfccd329323ba4ea07ea0bf1813ad906e87d9ef51cc936da01&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSQV3JT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCdxSKoK%2F6V%2Bkzc6M3fi0n4CPC95UzUma0gDVRSpvSnbQIgF31fZwfXoxuGlGCwn0oAjElJ1UG8UMpz8HPQVX379nIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMuvLWCbtPtlcIhsKSrcA3m9tw4cSH58i7R91GStyLYpFDCSADZ6Svk00nlYuY8owG8LoF7kS%2Byg405qK7wN%2BpS%2BoKb2H9ici8HJ0M6aSG4Ztm07LLyGypAVCY%2F0WzKrKYDUpjMXfyRvwrWFq5sXv67KvgNrysvV79PFVVR%2FEYT891K7u5W26CATdmo6mCD6a7WG7%2FW4hoevnzfdZTLLieHpuzlDh3ccgcCM59%2F%2F1WPPVqIwDyMy6vJqKIU9duqeCFPO8w1TU9JMm9wxrs3brRcjqA2%2BY6SeFn3IYwBnLUF9wRRk1aHwDcHbfyxzXoJ61JUVJOmC6HYSrwTT8b%2Fvd7pHmwqrT%2F%2BaOWDaVFr7Uz5K8IJe7pkbHnNq28q%2Fa88xJTn3UFP2qGloriPmhA7m9AIQYDNmrMwO6k254GMz%2FIvifVb0%2BCZ95x83ERyKZDavUWTyJ%2FkRM3BHSOhO%2BMi2VtcF13r3TYwIz4T0c9FOOWpFebvB9kkoRF7YsLr2CE40hFE%2FhAMF%2Fe0gNUu2IXhD%2BqSn3IG0SV3Nz4slO484izYFj1slTan3dBfsRFpWUyhlOIf%2F7SL1a%2F78IRvuhf1Rf8IXrjJE5CcZvWT%2Bw6oOG%2BCHlLI7VCfMXldJVrT6NEY7l5ZV%2Fnb2K8s%2BfzMIML7gxcEGOqUBrs14cABQJpC%2BB%2F9Ri%2BLRp5K2%2BNtlCt9ume0MloSA3JQf65A0MHYJ3tAr57A7J0WJlraKdQ4b%2FOQTbSFmrYTDJhfBNs%2FdrnaaXIn97tSxP22Xup00gjhsJdSFdg%2FIHrJOMMM555k1DWq6B0l8ChCM1FoQTln1ofNBmPS26SBfl0bGSZ2H2wp8w7XdEYro0NXjcBn2X73a%2BJ8%2FV1f8rnmCoxyqeIHA&X-Amz-Signature=8ad66b6c01542193b3e4953f6c3141eb90666703aec36f63aaae250969ab6b91&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSQV3JT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCdxSKoK%2F6V%2Bkzc6M3fi0n4CPC95UzUma0gDVRSpvSnbQIgF31fZwfXoxuGlGCwn0oAjElJ1UG8UMpz8HPQVX379nIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMuvLWCbtPtlcIhsKSrcA3m9tw4cSH58i7R91GStyLYpFDCSADZ6Svk00nlYuY8owG8LoF7kS%2Byg405qK7wN%2BpS%2BoKb2H9ici8HJ0M6aSG4Ztm07LLyGypAVCY%2F0WzKrKYDUpjMXfyRvwrWFq5sXv67KvgNrysvV79PFVVR%2FEYT891K7u5W26CATdmo6mCD6a7WG7%2FW4hoevnzfdZTLLieHpuzlDh3ccgcCM59%2F%2F1WPPVqIwDyMy6vJqKIU9duqeCFPO8w1TU9JMm9wxrs3brRcjqA2%2BY6SeFn3IYwBnLUF9wRRk1aHwDcHbfyxzXoJ61JUVJOmC6HYSrwTT8b%2Fvd7pHmwqrT%2F%2BaOWDaVFr7Uz5K8IJe7pkbHnNq28q%2Fa88xJTn3UFP2qGloriPmhA7m9AIQYDNmrMwO6k254GMz%2FIvifVb0%2BCZ95x83ERyKZDavUWTyJ%2FkRM3BHSOhO%2BMi2VtcF13r3TYwIz4T0c9FOOWpFebvB9kkoRF7YsLr2CE40hFE%2FhAMF%2Fe0gNUu2IXhD%2BqSn3IG0SV3Nz4slO484izYFj1slTan3dBfsRFpWUyhlOIf%2F7SL1a%2F78IRvuhf1Rf8IXrjJE5CcZvWT%2Bw6oOG%2BCHlLI7VCfMXldJVrT6NEY7l5ZV%2Fnb2K8s%2BfzMIML7gxcEGOqUBrs14cABQJpC%2BB%2F9Ri%2BLRp5K2%2BNtlCt9ume0MloSA3JQf65A0MHYJ3tAr57A7J0WJlraKdQ4b%2FOQTbSFmrYTDJhfBNs%2FdrnaaXIn97tSxP22Xup00gjhsJdSFdg%2FIHrJOMMM555k1DWq6B0l8ChCM1FoQTln1ofNBmPS26SBfl0bGSZ2H2wp8w7XdEYro0NXjcBn2X73a%2BJ8%2FV1f8rnmCoxyqeIHA&X-Amz-Signature=edb404614c1bed08b355cfc38a3edb0d9aedccad58b0a6abf98117d80d6dbc9f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSQV3JT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCdxSKoK%2F6V%2Bkzc6M3fi0n4CPC95UzUma0gDVRSpvSnbQIgF31fZwfXoxuGlGCwn0oAjElJ1UG8UMpz8HPQVX379nIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMuvLWCbtPtlcIhsKSrcA3m9tw4cSH58i7R91GStyLYpFDCSADZ6Svk00nlYuY8owG8LoF7kS%2Byg405qK7wN%2BpS%2BoKb2H9ici8HJ0M6aSG4Ztm07LLyGypAVCY%2F0WzKrKYDUpjMXfyRvwrWFq5sXv67KvgNrysvV79PFVVR%2FEYT891K7u5W26CATdmo6mCD6a7WG7%2FW4hoevnzfdZTLLieHpuzlDh3ccgcCM59%2F%2F1WPPVqIwDyMy6vJqKIU9duqeCFPO8w1TU9JMm9wxrs3brRcjqA2%2BY6SeFn3IYwBnLUF9wRRk1aHwDcHbfyxzXoJ61JUVJOmC6HYSrwTT8b%2Fvd7pHmwqrT%2F%2BaOWDaVFr7Uz5K8IJe7pkbHnNq28q%2Fa88xJTn3UFP2qGloriPmhA7m9AIQYDNmrMwO6k254GMz%2FIvifVb0%2BCZ95x83ERyKZDavUWTyJ%2FkRM3BHSOhO%2BMi2VtcF13r3TYwIz4T0c9FOOWpFebvB9kkoRF7YsLr2CE40hFE%2FhAMF%2Fe0gNUu2IXhD%2BqSn3IG0SV3Nz4slO484izYFj1slTan3dBfsRFpWUyhlOIf%2F7SL1a%2F78IRvuhf1Rf8IXrjJE5CcZvWT%2Bw6oOG%2BCHlLI7VCfMXldJVrT6NEY7l5ZV%2Fnb2K8s%2BfzMIML7gxcEGOqUBrs14cABQJpC%2BB%2F9Ri%2BLRp5K2%2BNtlCt9ume0MloSA3JQf65A0MHYJ3tAr57A7J0WJlraKdQ4b%2FOQTbSFmrYTDJhfBNs%2FdrnaaXIn97tSxP22Xup00gjhsJdSFdg%2FIHrJOMMM555k1DWq6B0l8ChCM1FoQTln1ofNBmPS26SBfl0bGSZ2H2wp8w7XdEYro0NXjcBn2X73a%2BJ8%2FV1f8rnmCoxyqeIHA&X-Amz-Signature=22b3e06f83f4ccac030681c5625d731eb7056e26b522336356304f84c207806a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSQV3JT%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCdxSKoK%2F6V%2Bkzc6M3fi0n4CPC95UzUma0gDVRSpvSnbQIgF31fZwfXoxuGlGCwn0oAjElJ1UG8UMpz8HPQVX379nIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMuvLWCbtPtlcIhsKSrcA3m9tw4cSH58i7R91GStyLYpFDCSADZ6Svk00nlYuY8owG8LoF7kS%2Byg405qK7wN%2BpS%2BoKb2H9ici8HJ0M6aSG4Ztm07LLyGypAVCY%2F0WzKrKYDUpjMXfyRvwrWFq5sXv67KvgNrysvV79PFVVR%2FEYT891K7u5W26CATdmo6mCD6a7WG7%2FW4hoevnzfdZTLLieHpuzlDh3ccgcCM59%2F%2F1WPPVqIwDyMy6vJqKIU9duqeCFPO8w1TU9JMm9wxrs3brRcjqA2%2BY6SeFn3IYwBnLUF9wRRk1aHwDcHbfyxzXoJ61JUVJOmC6HYSrwTT8b%2Fvd7pHmwqrT%2F%2BaOWDaVFr7Uz5K8IJe7pkbHnNq28q%2Fa88xJTn3UFP2qGloriPmhA7m9AIQYDNmrMwO6k254GMz%2FIvifVb0%2BCZ95x83ERyKZDavUWTyJ%2FkRM3BHSOhO%2BMi2VtcF13r3TYwIz4T0c9FOOWpFebvB9kkoRF7YsLr2CE40hFE%2FhAMF%2Fe0gNUu2IXhD%2BqSn3IG0SV3Nz4slO484izYFj1slTan3dBfsRFpWUyhlOIf%2F7SL1a%2F78IRvuhf1Rf8IXrjJE5CcZvWT%2Bw6oOG%2BCHlLI7VCfMXldJVrT6NEY7l5ZV%2Fnb2K8s%2BfzMIML7gxcEGOqUBrs14cABQJpC%2BB%2F9Ri%2BLRp5K2%2BNtlCt9ume0MloSA3JQf65A0MHYJ3tAr57A7J0WJlraKdQ4b%2FOQTbSFmrYTDJhfBNs%2FdrnaaXIn97tSxP22Xup00gjhsJdSFdg%2FIHrJOMMM555k1DWq6B0l8ChCM1FoQTln1ofNBmPS26SBfl0bGSZ2H2wp8w7XdEYro0NXjcBn2X73a%2BJ8%2FV1f8rnmCoxyqeIHA&X-Amz-Signature=e0bdcbe3741f4b83940c796b088d600752284703756b12dbd1df181446a219e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
