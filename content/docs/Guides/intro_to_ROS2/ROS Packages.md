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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVXZU6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDydfxPrBiPjCYkycINoX1Ag%2BsftDR3ba7XXrRlyZDJkAiEAstuAgIN6qdkORuz79EFI%2FcTbMwGsbI7hgD%2FPNLL30lcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFCfEORllwQ7iEKTKyrcA02n0IPomNAmFGyBjROcyaM5Kb5hevHv1uPOjQKa03XPz2vkKlQ4Za2Z5WFzANJK8kIB1pP6KMIomgBSxObMLH5aVaXqyEmeUMySUNbRpDr5vmlxh0eegPPtxCeic4B07VekxzIlYEjgVUcticyPs8ZXlYsW7RpjnnLU1kOG3BaBmtzb5aR41bFKdshmj9kJMee38qIYoX%2B2KoA1yTPEpzQkkzN5yfMkP8l1PJJ897qBa2cSfXaRJRe6QGWQsnjpYuNQotUlRC%2BGvlocIBYdT5E0EUXDaIqsgi0dq2zwFNnkYnuyShtQHKjn%2Bkig6eZSxksFnjjeXkyXXXAGJCAkJKvW%2Fop%2Fdt9hHtFMN0%2FDiT0%2BZLpwW7GWg6hsKMimlICOXl2%2FI2Pt8DDsFhitEbJsAebL4Gj9WUqJ%2BM2b%2BtnZ7JgA4tn0qFo%2FuDOAIfzsIgbgrhtNY4ueQXpC4qWcjOO%2BtkEhiTDJlRlPp9%2F9MBPI4xz%2B6pCVfusVRonvMsZ%2Ff%2Fmr8XXUCoubrfaHhzAcXzIMs%2BZks8fC7WeDriTgZLH%2BEPqzFRIuyOzQhmxPVYVxJgIQ1IZJxqwKpTUBFE1VqHIjnuHwBBkj5ItfjRaLoWqFGw7IEV%2BmQd8T3cKR1rmtMOjhmcMGOqUBDPuE94eh7rD3am340tEzC4Yi52289H0VQphQoHfdXAxJCzAUh0kjEntvVsllbpEuOL%2Fe%2FLak125CutGebHNpVzmPQwLKEVTncsL4doqZTOgyAIf3ev14dPdvnXK1CiBhV24FB0xuTXGM%2BBtq0db7RbHmBD2pfP%2B5qFBuUsxiafaCsuJQx4uejJZXR9PNlRa7CO8qy6ypGCIUvWJP54KlhOiikvxE&X-Amz-Signature=183f1052bd1abe9d3fec10e7b04ec2b6be9c3a56877d56a33e4c152647b812f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVXZU6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDydfxPrBiPjCYkycINoX1Ag%2BsftDR3ba7XXrRlyZDJkAiEAstuAgIN6qdkORuz79EFI%2FcTbMwGsbI7hgD%2FPNLL30lcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFCfEORllwQ7iEKTKyrcA02n0IPomNAmFGyBjROcyaM5Kb5hevHv1uPOjQKa03XPz2vkKlQ4Za2Z5WFzANJK8kIB1pP6KMIomgBSxObMLH5aVaXqyEmeUMySUNbRpDr5vmlxh0eegPPtxCeic4B07VekxzIlYEjgVUcticyPs8ZXlYsW7RpjnnLU1kOG3BaBmtzb5aR41bFKdshmj9kJMee38qIYoX%2B2KoA1yTPEpzQkkzN5yfMkP8l1PJJ897qBa2cSfXaRJRe6QGWQsnjpYuNQotUlRC%2BGvlocIBYdT5E0EUXDaIqsgi0dq2zwFNnkYnuyShtQHKjn%2Bkig6eZSxksFnjjeXkyXXXAGJCAkJKvW%2Fop%2Fdt9hHtFMN0%2FDiT0%2BZLpwW7GWg6hsKMimlICOXl2%2FI2Pt8DDsFhitEbJsAebL4Gj9WUqJ%2BM2b%2BtnZ7JgA4tn0qFo%2FuDOAIfzsIgbgrhtNY4ueQXpC4qWcjOO%2BtkEhiTDJlRlPp9%2F9MBPI4xz%2B6pCVfusVRonvMsZ%2Ff%2Fmr8XXUCoubrfaHhzAcXzIMs%2BZks8fC7WeDriTgZLH%2BEPqzFRIuyOzQhmxPVYVxJgIQ1IZJxqwKpTUBFE1VqHIjnuHwBBkj5ItfjRaLoWqFGw7IEV%2BmQd8T3cKR1rmtMOjhmcMGOqUBDPuE94eh7rD3am340tEzC4Yi52289H0VQphQoHfdXAxJCzAUh0kjEntvVsllbpEuOL%2Fe%2FLak125CutGebHNpVzmPQwLKEVTncsL4doqZTOgyAIf3ev14dPdvnXK1CiBhV24FB0xuTXGM%2BBtq0db7RbHmBD2pfP%2B5qFBuUsxiafaCsuJQx4uejJZXR9PNlRa7CO8qy6ypGCIUvWJP54KlhOiikvxE&X-Amz-Signature=a1b72cff6df0645c867aa5a938ea5f442a617a66307450a59355ad72a58fc5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVXZU6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDydfxPrBiPjCYkycINoX1Ag%2BsftDR3ba7XXrRlyZDJkAiEAstuAgIN6qdkORuz79EFI%2FcTbMwGsbI7hgD%2FPNLL30lcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFCfEORllwQ7iEKTKyrcA02n0IPomNAmFGyBjROcyaM5Kb5hevHv1uPOjQKa03XPz2vkKlQ4Za2Z5WFzANJK8kIB1pP6KMIomgBSxObMLH5aVaXqyEmeUMySUNbRpDr5vmlxh0eegPPtxCeic4B07VekxzIlYEjgVUcticyPs8ZXlYsW7RpjnnLU1kOG3BaBmtzb5aR41bFKdshmj9kJMee38qIYoX%2B2KoA1yTPEpzQkkzN5yfMkP8l1PJJ897qBa2cSfXaRJRe6QGWQsnjpYuNQotUlRC%2BGvlocIBYdT5E0EUXDaIqsgi0dq2zwFNnkYnuyShtQHKjn%2Bkig6eZSxksFnjjeXkyXXXAGJCAkJKvW%2Fop%2Fdt9hHtFMN0%2FDiT0%2BZLpwW7GWg6hsKMimlICOXl2%2FI2Pt8DDsFhitEbJsAebL4Gj9WUqJ%2BM2b%2BtnZ7JgA4tn0qFo%2FuDOAIfzsIgbgrhtNY4ueQXpC4qWcjOO%2BtkEhiTDJlRlPp9%2F9MBPI4xz%2B6pCVfusVRonvMsZ%2Ff%2Fmr8XXUCoubrfaHhzAcXzIMs%2BZks8fC7WeDriTgZLH%2BEPqzFRIuyOzQhmxPVYVxJgIQ1IZJxqwKpTUBFE1VqHIjnuHwBBkj5ItfjRaLoWqFGw7IEV%2BmQd8T3cKR1rmtMOjhmcMGOqUBDPuE94eh7rD3am340tEzC4Yi52289H0VQphQoHfdXAxJCzAUh0kjEntvVsllbpEuOL%2Fe%2FLak125CutGebHNpVzmPQwLKEVTncsL4doqZTOgyAIf3ev14dPdvnXK1CiBhV24FB0xuTXGM%2BBtq0db7RbHmBD2pfP%2B5qFBuUsxiafaCsuJQx4uejJZXR9PNlRa7CO8qy6ypGCIUvWJP54KlhOiikvxE&X-Amz-Signature=8c41f7ef82afd8fa1f9feef872b5286f29a175328414bb50a66b2cc4f6e47dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVXZU6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDydfxPrBiPjCYkycINoX1Ag%2BsftDR3ba7XXrRlyZDJkAiEAstuAgIN6qdkORuz79EFI%2FcTbMwGsbI7hgD%2FPNLL30lcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFCfEORllwQ7iEKTKyrcA02n0IPomNAmFGyBjROcyaM5Kb5hevHv1uPOjQKa03XPz2vkKlQ4Za2Z5WFzANJK8kIB1pP6KMIomgBSxObMLH5aVaXqyEmeUMySUNbRpDr5vmlxh0eegPPtxCeic4B07VekxzIlYEjgVUcticyPs8ZXlYsW7RpjnnLU1kOG3BaBmtzb5aR41bFKdshmj9kJMee38qIYoX%2B2KoA1yTPEpzQkkzN5yfMkP8l1PJJ897qBa2cSfXaRJRe6QGWQsnjpYuNQotUlRC%2BGvlocIBYdT5E0EUXDaIqsgi0dq2zwFNnkYnuyShtQHKjn%2Bkig6eZSxksFnjjeXkyXXXAGJCAkJKvW%2Fop%2Fdt9hHtFMN0%2FDiT0%2BZLpwW7GWg6hsKMimlICOXl2%2FI2Pt8DDsFhitEbJsAebL4Gj9WUqJ%2BM2b%2BtnZ7JgA4tn0qFo%2FuDOAIfzsIgbgrhtNY4ueQXpC4qWcjOO%2BtkEhiTDJlRlPp9%2F9MBPI4xz%2B6pCVfusVRonvMsZ%2Ff%2Fmr8XXUCoubrfaHhzAcXzIMs%2BZks8fC7WeDriTgZLH%2BEPqzFRIuyOzQhmxPVYVxJgIQ1IZJxqwKpTUBFE1VqHIjnuHwBBkj5ItfjRaLoWqFGw7IEV%2BmQd8T3cKR1rmtMOjhmcMGOqUBDPuE94eh7rD3am340tEzC4Yi52289H0VQphQoHfdXAxJCzAUh0kjEntvVsllbpEuOL%2Fe%2FLak125CutGebHNpVzmPQwLKEVTncsL4doqZTOgyAIf3ev14dPdvnXK1CiBhV24FB0xuTXGM%2BBtq0db7RbHmBD2pfP%2B5qFBuUsxiafaCsuJQx4uejJZXR9PNlRa7CO8qy6ypGCIUvWJP54KlhOiikvxE&X-Amz-Signature=20479b5d97a9c381f82562b2ae3ceb9c3fdf7165f44ea9c223f8fd2e1dede8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVXZU6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDydfxPrBiPjCYkycINoX1Ag%2BsftDR3ba7XXrRlyZDJkAiEAstuAgIN6qdkORuz79EFI%2FcTbMwGsbI7hgD%2FPNLL30lcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFCfEORllwQ7iEKTKyrcA02n0IPomNAmFGyBjROcyaM5Kb5hevHv1uPOjQKa03XPz2vkKlQ4Za2Z5WFzANJK8kIB1pP6KMIomgBSxObMLH5aVaXqyEmeUMySUNbRpDr5vmlxh0eegPPtxCeic4B07VekxzIlYEjgVUcticyPs8ZXlYsW7RpjnnLU1kOG3BaBmtzb5aR41bFKdshmj9kJMee38qIYoX%2B2KoA1yTPEpzQkkzN5yfMkP8l1PJJ897qBa2cSfXaRJRe6QGWQsnjpYuNQotUlRC%2BGvlocIBYdT5E0EUXDaIqsgi0dq2zwFNnkYnuyShtQHKjn%2Bkig6eZSxksFnjjeXkyXXXAGJCAkJKvW%2Fop%2Fdt9hHtFMN0%2FDiT0%2BZLpwW7GWg6hsKMimlICOXl2%2FI2Pt8DDsFhitEbJsAebL4Gj9WUqJ%2BM2b%2BtnZ7JgA4tn0qFo%2FuDOAIfzsIgbgrhtNY4ueQXpC4qWcjOO%2BtkEhiTDJlRlPp9%2F9MBPI4xz%2B6pCVfusVRonvMsZ%2Ff%2Fmr8XXUCoubrfaHhzAcXzIMs%2BZks8fC7WeDriTgZLH%2BEPqzFRIuyOzQhmxPVYVxJgIQ1IZJxqwKpTUBFE1VqHIjnuHwBBkj5ItfjRaLoWqFGw7IEV%2BmQd8T3cKR1rmtMOjhmcMGOqUBDPuE94eh7rD3am340tEzC4Yi52289H0VQphQoHfdXAxJCzAUh0kjEntvVsllbpEuOL%2Fe%2FLak125CutGebHNpVzmPQwLKEVTncsL4doqZTOgyAIf3ev14dPdvnXK1CiBhV24FB0xuTXGM%2BBtq0db7RbHmBD2pfP%2B5qFBuUsxiafaCsuJQx4uejJZXR9PNlRa7CO8qy6ypGCIUvWJP54KlhOiikvxE&X-Amz-Signature=0d6697db36e648edf0a09b8cb2c264bf55bee8a31706deef92d53549b19f94ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVXZU6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDydfxPrBiPjCYkycINoX1Ag%2BsftDR3ba7XXrRlyZDJkAiEAstuAgIN6qdkORuz79EFI%2FcTbMwGsbI7hgD%2FPNLL30lcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFCfEORllwQ7iEKTKyrcA02n0IPomNAmFGyBjROcyaM5Kb5hevHv1uPOjQKa03XPz2vkKlQ4Za2Z5WFzANJK8kIB1pP6KMIomgBSxObMLH5aVaXqyEmeUMySUNbRpDr5vmlxh0eegPPtxCeic4B07VekxzIlYEjgVUcticyPs8ZXlYsW7RpjnnLU1kOG3BaBmtzb5aR41bFKdshmj9kJMee38qIYoX%2B2KoA1yTPEpzQkkzN5yfMkP8l1PJJ897qBa2cSfXaRJRe6QGWQsnjpYuNQotUlRC%2BGvlocIBYdT5E0EUXDaIqsgi0dq2zwFNnkYnuyShtQHKjn%2Bkig6eZSxksFnjjeXkyXXXAGJCAkJKvW%2Fop%2Fdt9hHtFMN0%2FDiT0%2BZLpwW7GWg6hsKMimlICOXl2%2FI2Pt8DDsFhitEbJsAebL4Gj9WUqJ%2BM2b%2BtnZ7JgA4tn0qFo%2FuDOAIfzsIgbgrhtNY4ueQXpC4qWcjOO%2BtkEhiTDJlRlPp9%2F9MBPI4xz%2B6pCVfusVRonvMsZ%2Ff%2Fmr8XXUCoubrfaHhzAcXzIMs%2BZks8fC7WeDriTgZLH%2BEPqzFRIuyOzQhmxPVYVxJgIQ1IZJxqwKpTUBFE1VqHIjnuHwBBkj5ItfjRaLoWqFGw7IEV%2BmQd8T3cKR1rmtMOjhmcMGOqUBDPuE94eh7rD3am340tEzC4Yi52289H0VQphQoHfdXAxJCzAUh0kjEntvVsllbpEuOL%2Fe%2FLak125CutGebHNpVzmPQwLKEVTncsL4doqZTOgyAIf3ev14dPdvnXK1CiBhV24FB0xuTXGM%2BBtq0db7RbHmBD2pfP%2B5qFBuUsxiafaCsuJQx4uejJZXR9PNlRa7CO8qy6ypGCIUvWJP54KlhOiikvxE&X-Amz-Signature=c7063da2b61c20bd7485de1d0f5338d20f1bb44c3698a505dcbba81449cbd664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGVXZU6T%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDydfxPrBiPjCYkycINoX1Ag%2BsftDR3ba7XXrRlyZDJkAiEAstuAgIN6qdkORuz79EFI%2FcTbMwGsbI7hgD%2FPNLL30lcq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDFCfEORllwQ7iEKTKyrcA02n0IPomNAmFGyBjROcyaM5Kb5hevHv1uPOjQKa03XPz2vkKlQ4Za2Z5WFzANJK8kIB1pP6KMIomgBSxObMLH5aVaXqyEmeUMySUNbRpDr5vmlxh0eegPPtxCeic4B07VekxzIlYEjgVUcticyPs8ZXlYsW7RpjnnLU1kOG3BaBmtzb5aR41bFKdshmj9kJMee38qIYoX%2B2KoA1yTPEpzQkkzN5yfMkP8l1PJJ897qBa2cSfXaRJRe6QGWQsnjpYuNQotUlRC%2BGvlocIBYdT5E0EUXDaIqsgi0dq2zwFNnkYnuyShtQHKjn%2Bkig6eZSxksFnjjeXkyXXXAGJCAkJKvW%2Fop%2Fdt9hHtFMN0%2FDiT0%2BZLpwW7GWg6hsKMimlICOXl2%2FI2Pt8DDsFhitEbJsAebL4Gj9WUqJ%2BM2b%2BtnZ7JgA4tn0qFo%2FuDOAIfzsIgbgrhtNY4ueQXpC4qWcjOO%2BtkEhiTDJlRlPp9%2F9MBPI4xz%2B6pCVfusVRonvMsZ%2Ff%2Fmr8XXUCoubrfaHhzAcXzIMs%2BZks8fC7WeDriTgZLH%2BEPqzFRIuyOzQhmxPVYVxJgIQ1IZJxqwKpTUBFE1VqHIjnuHwBBkj5ItfjRaLoWqFGw7IEV%2BmQd8T3cKR1rmtMOjhmcMGOqUBDPuE94eh7rD3am340tEzC4Yi52289H0VQphQoHfdXAxJCzAUh0kjEntvVsllbpEuOL%2Fe%2FLak125CutGebHNpVzmPQwLKEVTncsL4doqZTOgyAIf3ev14dPdvnXK1CiBhV24FB0xuTXGM%2BBtq0db7RbHmBD2pfP%2B5qFBuUsxiafaCsuJQx4uejJZXR9PNlRa7CO8qy6ypGCIUvWJP54KlhOiikvxE&X-Amz-Signature=bedf44d01eec375c654eed8bb4c33682c3b74868611309b76f76098f1ea975a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
