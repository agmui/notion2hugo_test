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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MTBP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFhWP9P%2Fard3xasm5lwUPmBYyz0TOXlgBZzkKYQZsnc1AiEAliz9PemN%2B3s5Q9g5WCRGGEDlgMwh5SHYm%2FVefGTLZHsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABO4ipmUAsLcG4ZWSrcA%2FeDfm8z9LZ5Xwl%2ByVUN1nfiCxB3oMnf0MWKkLOBz8XCNgy1d8hIFp03RdkEHLTtgwMoPvTT52NHARngrLdLkzTj6zGnM%2B44C%2F4G%2Bpux6dt0FMp3ScTEJ1psP2ARmRMGgzfHRhvnP6LhFlgcj7FWfGp9i4kqfpSNfMZahL2DIObOewTaacSatNs%2BeXqV%2FpvaqfgJp50D5d%2BkaRFcpOsSyzhHE3cXdTMCR4LNpB5xluIcbG9ym4MgXh2DBZ1l9XRhp6DYbtz5cvXLS%2FS9UiFkCKaJ06eU8s1bsVHLUJlg9Zy69%2BGmeCCAn%2FBm3vbroI1Agcg3aLgSVLa3QSCtmISgHjbUV51SMF6EspJGpHaUqQ6TwVS2z6FLG4UfHGgJfZRwphb2ylH57XqBHopJ9T%2Fkw3kOxn26AZeS1IYNtxiAKRNCgjkMdLOOPYKS%2FmSbzIg4I988SuXvkD8DoY6Q4CEwqbEWb%2BSrjkQmnPnp0WbcP5fva8vaBiGv3jRWsGFPwAmzogPFbNGhrA%2B5s24AC87jr0kJGjgyNOzV1B%2B8QQE5MSju0vu1XU2i8C%2BMOEzUapjPicbPL4HXyz8pWL%2Bmz3Qf7Qkv5sPpE2mAvDm%2B9E3r7rQJjL7j11689O4RTVgHMLO%2Fxr4GOqUB2do1XYf4XwAlOblzoi3fBidT%2BNMqCEq6t9KG9JboiY2Gt6KVorwfelR2s%2FhO9tyenKanCTGuVvvwgRFGEGxZyhhwGzPdEv244ix7nU5C9WraljMdsL8x1eZD1zwXCbjH5E1FNIitY5VlBC2tn1yATpE2zwa%2FFdpPbPXG1P8wxV9LHIRvO3IcK7Pi3jPoxx0nd0tKCLWrJk%2FBmC5UaRfC%2FzoY%2F7SK&X-Amz-Signature=cf6e88d077122de7568e15c8fa9c6bb382dfaccd791e71764a3c5eb07643aeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MTBP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFhWP9P%2Fard3xasm5lwUPmBYyz0TOXlgBZzkKYQZsnc1AiEAliz9PemN%2B3s5Q9g5WCRGGEDlgMwh5SHYm%2FVefGTLZHsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABO4ipmUAsLcG4ZWSrcA%2FeDfm8z9LZ5Xwl%2ByVUN1nfiCxB3oMnf0MWKkLOBz8XCNgy1d8hIFp03RdkEHLTtgwMoPvTT52NHARngrLdLkzTj6zGnM%2B44C%2F4G%2Bpux6dt0FMp3ScTEJ1psP2ARmRMGgzfHRhvnP6LhFlgcj7FWfGp9i4kqfpSNfMZahL2DIObOewTaacSatNs%2BeXqV%2FpvaqfgJp50D5d%2BkaRFcpOsSyzhHE3cXdTMCR4LNpB5xluIcbG9ym4MgXh2DBZ1l9XRhp6DYbtz5cvXLS%2FS9UiFkCKaJ06eU8s1bsVHLUJlg9Zy69%2BGmeCCAn%2FBm3vbroI1Agcg3aLgSVLa3QSCtmISgHjbUV51SMF6EspJGpHaUqQ6TwVS2z6FLG4UfHGgJfZRwphb2ylH57XqBHopJ9T%2Fkw3kOxn26AZeS1IYNtxiAKRNCgjkMdLOOPYKS%2FmSbzIg4I988SuXvkD8DoY6Q4CEwqbEWb%2BSrjkQmnPnp0WbcP5fva8vaBiGv3jRWsGFPwAmzogPFbNGhrA%2B5s24AC87jr0kJGjgyNOzV1B%2B8QQE5MSju0vu1XU2i8C%2BMOEzUapjPicbPL4HXyz8pWL%2Bmz3Qf7Qkv5sPpE2mAvDm%2B9E3r7rQJjL7j11689O4RTVgHMLO%2Fxr4GOqUB2do1XYf4XwAlOblzoi3fBidT%2BNMqCEq6t9KG9JboiY2Gt6KVorwfelR2s%2FhO9tyenKanCTGuVvvwgRFGEGxZyhhwGzPdEv244ix7nU5C9WraljMdsL8x1eZD1zwXCbjH5E1FNIitY5VlBC2tn1yATpE2zwa%2FFdpPbPXG1P8wxV9LHIRvO3IcK7Pi3jPoxx0nd0tKCLWrJk%2FBmC5UaRfC%2FzoY%2F7SK&X-Amz-Signature=2eabdeef0b4110b0765dc035575a184267ca77b3aa608f29aac7da71d458a4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MTBP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFhWP9P%2Fard3xasm5lwUPmBYyz0TOXlgBZzkKYQZsnc1AiEAliz9PemN%2B3s5Q9g5WCRGGEDlgMwh5SHYm%2FVefGTLZHsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABO4ipmUAsLcG4ZWSrcA%2FeDfm8z9LZ5Xwl%2ByVUN1nfiCxB3oMnf0MWKkLOBz8XCNgy1d8hIFp03RdkEHLTtgwMoPvTT52NHARngrLdLkzTj6zGnM%2B44C%2F4G%2Bpux6dt0FMp3ScTEJ1psP2ARmRMGgzfHRhvnP6LhFlgcj7FWfGp9i4kqfpSNfMZahL2DIObOewTaacSatNs%2BeXqV%2FpvaqfgJp50D5d%2BkaRFcpOsSyzhHE3cXdTMCR4LNpB5xluIcbG9ym4MgXh2DBZ1l9XRhp6DYbtz5cvXLS%2FS9UiFkCKaJ06eU8s1bsVHLUJlg9Zy69%2BGmeCCAn%2FBm3vbroI1Agcg3aLgSVLa3QSCtmISgHjbUV51SMF6EspJGpHaUqQ6TwVS2z6FLG4UfHGgJfZRwphb2ylH57XqBHopJ9T%2Fkw3kOxn26AZeS1IYNtxiAKRNCgjkMdLOOPYKS%2FmSbzIg4I988SuXvkD8DoY6Q4CEwqbEWb%2BSrjkQmnPnp0WbcP5fva8vaBiGv3jRWsGFPwAmzogPFbNGhrA%2B5s24AC87jr0kJGjgyNOzV1B%2B8QQE5MSju0vu1XU2i8C%2BMOEzUapjPicbPL4HXyz8pWL%2Bmz3Qf7Qkv5sPpE2mAvDm%2B9E3r7rQJjL7j11689O4RTVgHMLO%2Fxr4GOqUB2do1XYf4XwAlOblzoi3fBidT%2BNMqCEq6t9KG9JboiY2Gt6KVorwfelR2s%2FhO9tyenKanCTGuVvvwgRFGEGxZyhhwGzPdEv244ix7nU5C9WraljMdsL8x1eZD1zwXCbjH5E1FNIitY5VlBC2tn1yATpE2zwa%2FFdpPbPXG1P8wxV9LHIRvO3IcK7Pi3jPoxx0nd0tKCLWrJk%2FBmC5UaRfC%2FzoY%2F7SK&X-Amz-Signature=de659ff2027133498817a42c0508d0636a8b06af6ee7d1f689f15ab09fd05b64&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MTBP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFhWP9P%2Fard3xasm5lwUPmBYyz0TOXlgBZzkKYQZsnc1AiEAliz9PemN%2B3s5Q9g5WCRGGEDlgMwh5SHYm%2FVefGTLZHsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABO4ipmUAsLcG4ZWSrcA%2FeDfm8z9LZ5Xwl%2ByVUN1nfiCxB3oMnf0MWKkLOBz8XCNgy1d8hIFp03RdkEHLTtgwMoPvTT52NHARngrLdLkzTj6zGnM%2B44C%2F4G%2Bpux6dt0FMp3ScTEJ1psP2ARmRMGgzfHRhvnP6LhFlgcj7FWfGp9i4kqfpSNfMZahL2DIObOewTaacSatNs%2BeXqV%2FpvaqfgJp50D5d%2BkaRFcpOsSyzhHE3cXdTMCR4LNpB5xluIcbG9ym4MgXh2DBZ1l9XRhp6DYbtz5cvXLS%2FS9UiFkCKaJ06eU8s1bsVHLUJlg9Zy69%2BGmeCCAn%2FBm3vbroI1Agcg3aLgSVLa3QSCtmISgHjbUV51SMF6EspJGpHaUqQ6TwVS2z6FLG4UfHGgJfZRwphb2ylH57XqBHopJ9T%2Fkw3kOxn26AZeS1IYNtxiAKRNCgjkMdLOOPYKS%2FmSbzIg4I988SuXvkD8DoY6Q4CEwqbEWb%2BSrjkQmnPnp0WbcP5fva8vaBiGv3jRWsGFPwAmzogPFbNGhrA%2B5s24AC87jr0kJGjgyNOzV1B%2B8QQE5MSju0vu1XU2i8C%2BMOEzUapjPicbPL4HXyz8pWL%2Bmz3Qf7Qkv5sPpE2mAvDm%2B9E3r7rQJjL7j11689O4RTVgHMLO%2Fxr4GOqUB2do1XYf4XwAlOblzoi3fBidT%2BNMqCEq6t9KG9JboiY2Gt6KVorwfelR2s%2FhO9tyenKanCTGuVvvwgRFGEGxZyhhwGzPdEv244ix7nU5C9WraljMdsL8x1eZD1zwXCbjH5E1FNIitY5VlBC2tn1yATpE2zwa%2FFdpPbPXG1P8wxV9LHIRvO3IcK7Pi3jPoxx0nd0tKCLWrJk%2FBmC5UaRfC%2FzoY%2F7SK&X-Amz-Signature=9671146efe705c301c315334008fe0c066be97e68372db1ec3567d3ac3f2222f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MTBP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFhWP9P%2Fard3xasm5lwUPmBYyz0TOXlgBZzkKYQZsnc1AiEAliz9PemN%2B3s5Q9g5WCRGGEDlgMwh5SHYm%2FVefGTLZHsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABO4ipmUAsLcG4ZWSrcA%2FeDfm8z9LZ5Xwl%2ByVUN1nfiCxB3oMnf0MWKkLOBz8XCNgy1d8hIFp03RdkEHLTtgwMoPvTT52NHARngrLdLkzTj6zGnM%2B44C%2F4G%2Bpux6dt0FMp3ScTEJ1psP2ARmRMGgzfHRhvnP6LhFlgcj7FWfGp9i4kqfpSNfMZahL2DIObOewTaacSatNs%2BeXqV%2FpvaqfgJp50D5d%2BkaRFcpOsSyzhHE3cXdTMCR4LNpB5xluIcbG9ym4MgXh2DBZ1l9XRhp6DYbtz5cvXLS%2FS9UiFkCKaJ06eU8s1bsVHLUJlg9Zy69%2BGmeCCAn%2FBm3vbroI1Agcg3aLgSVLa3QSCtmISgHjbUV51SMF6EspJGpHaUqQ6TwVS2z6FLG4UfHGgJfZRwphb2ylH57XqBHopJ9T%2Fkw3kOxn26AZeS1IYNtxiAKRNCgjkMdLOOPYKS%2FmSbzIg4I988SuXvkD8DoY6Q4CEwqbEWb%2BSrjkQmnPnp0WbcP5fva8vaBiGv3jRWsGFPwAmzogPFbNGhrA%2B5s24AC87jr0kJGjgyNOzV1B%2B8QQE5MSju0vu1XU2i8C%2BMOEzUapjPicbPL4HXyz8pWL%2Bmz3Qf7Qkv5sPpE2mAvDm%2B9E3r7rQJjL7j11689O4RTVgHMLO%2Fxr4GOqUB2do1XYf4XwAlOblzoi3fBidT%2BNMqCEq6t9KG9JboiY2Gt6KVorwfelR2s%2FhO9tyenKanCTGuVvvwgRFGEGxZyhhwGzPdEv244ix7nU5C9WraljMdsL8x1eZD1zwXCbjH5E1FNIitY5VlBC2tn1yATpE2zwa%2FFdpPbPXG1P8wxV9LHIRvO3IcK7Pi3jPoxx0nd0tKCLWrJk%2FBmC5UaRfC%2FzoY%2F7SK&X-Amz-Signature=2bbea61e46ad48334503576367a75e6f7e227dcbd24e1e91ef2ec5b27d78b58a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MTBP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFhWP9P%2Fard3xasm5lwUPmBYyz0TOXlgBZzkKYQZsnc1AiEAliz9PemN%2B3s5Q9g5WCRGGEDlgMwh5SHYm%2FVefGTLZHsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABO4ipmUAsLcG4ZWSrcA%2FeDfm8z9LZ5Xwl%2ByVUN1nfiCxB3oMnf0MWKkLOBz8XCNgy1d8hIFp03RdkEHLTtgwMoPvTT52NHARngrLdLkzTj6zGnM%2B44C%2F4G%2Bpux6dt0FMp3ScTEJ1psP2ARmRMGgzfHRhvnP6LhFlgcj7FWfGp9i4kqfpSNfMZahL2DIObOewTaacSatNs%2BeXqV%2FpvaqfgJp50D5d%2BkaRFcpOsSyzhHE3cXdTMCR4LNpB5xluIcbG9ym4MgXh2DBZ1l9XRhp6DYbtz5cvXLS%2FS9UiFkCKaJ06eU8s1bsVHLUJlg9Zy69%2BGmeCCAn%2FBm3vbroI1Agcg3aLgSVLa3QSCtmISgHjbUV51SMF6EspJGpHaUqQ6TwVS2z6FLG4UfHGgJfZRwphb2ylH57XqBHopJ9T%2Fkw3kOxn26AZeS1IYNtxiAKRNCgjkMdLOOPYKS%2FmSbzIg4I988SuXvkD8DoY6Q4CEwqbEWb%2BSrjkQmnPnp0WbcP5fva8vaBiGv3jRWsGFPwAmzogPFbNGhrA%2B5s24AC87jr0kJGjgyNOzV1B%2B8QQE5MSju0vu1XU2i8C%2BMOEzUapjPicbPL4HXyz8pWL%2Bmz3Qf7Qkv5sPpE2mAvDm%2B9E3r7rQJjL7j11689O4RTVgHMLO%2Fxr4GOqUB2do1XYf4XwAlOblzoi3fBidT%2BNMqCEq6t9KG9JboiY2Gt6KVorwfelR2s%2FhO9tyenKanCTGuVvvwgRFGEGxZyhhwGzPdEv244ix7nU5C9WraljMdsL8x1eZD1zwXCbjH5E1FNIitY5VlBC2tn1yATpE2zwa%2FFdpPbPXG1P8wxV9LHIRvO3IcK7Pi3jPoxx0nd0tKCLWrJk%2FBmC5UaRfC%2FzoY%2F7SK&X-Amz-Signature=9104b89989c6444ee8df4ce0c02b40e02ffebdeecc1e124b7479b646f15db68e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MTBP7K%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFhWP9P%2Fard3xasm5lwUPmBYyz0TOXlgBZzkKYQZsnc1AiEAliz9PemN%2B3s5Q9g5WCRGGEDlgMwh5SHYm%2FVefGTLZHsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABO4ipmUAsLcG4ZWSrcA%2FeDfm8z9LZ5Xwl%2ByVUN1nfiCxB3oMnf0MWKkLOBz8XCNgy1d8hIFp03RdkEHLTtgwMoPvTT52NHARngrLdLkzTj6zGnM%2B44C%2F4G%2Bpux6dt0FMp3ScTEJ1psP2ARmRMGgzfHRhvnP6LhFlgcj7FWfGp9i4kqfpSNfMZahL2DIObOewTaacSatNs%2BeXqV%2FpvaqfgJp50D5d%2BkaRFcpOsSyzhHE3cXdTMCR4LNpB5xluIcbG9ym4MgXh2DBZ1l9XRhp6DYbtz5cvXLS%2FS9UiFkCKaJ06eU8s1bsVHLUJlg9Zy69%2BGmeCCAn%2FBm3vbroI1Agcg3aLgSVLa3QSCtmISgHjbUV51SMF6EspJGpHaUqQ6TwVS2z6FLG4UfHGgJfZRwphb2ylH57XqBHopJ9T%2Fkw3kOxn26AZeS1IYNtxiAKRNCgjkMdLOOPYKS%2FmSbzIg4I988SuXvkD8DoY6Q4CEwqbEWb%2BSrjkQmnPnp0WbcP5fva8vaBiGv3jRWsGFPwAmzogPFbNGhrA%2B5s24AC87jr0kJGjgyNOzV1B%2B8QQE5MSju0vu1XU2i8C%2BMOEzUapjPicbPL4HXyz8pWL%2Bmz3Qf7Qkv5sPpE2mAvDm%2B9E3r7rQJjL7j11689O4RTVgHMLO%2Fxr4GOqUB2do1XYf4XwAlOblzoi3fBidT%2BNMqCEq6t9KG9JboiY2Gt6KVorwfelR2s%2FhO9tyenKanCTGuVvvwgRFGEGxZyhhwGzPdEv244ix7nU5C9WraljMdsL8x1eZD1zwXCbjH5E1FNIitY5VlBC2tn1yATpE2zwa%2FFdpPbPXG1P8wxV9LHIRvO3IcK7Pi3jPoxx0nd0tKCLWrJk%2FBmC5UaRfC%2FzoY%2F7SK&X-Amz-Signature=d800281e41c32675982acd5cf04d135a3063da18648fab96abefa677116683b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
