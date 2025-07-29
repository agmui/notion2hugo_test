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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNMB4S7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFySRMHlsPFIgob4ORWYFHdXClKZ9AnGn0L5EbUAULcIAiB1QOFRUEsx8Cqydyv9jmdPlntcAwUTsnRdcmd%2Blo7ZYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF59irzeUw3kp4rXKtwDiGNcWXGghMvG5cvWKtkc8syqCmVHvMdQbyt7qS6wqDS4j4wjc6EqEPIlJ%2BOCjVl5KHeZUDlurV7R7SvVDVndeLfdFbNW9Kssne0ygYnB8KXMlUisE5mNW1eY%2B492EHFsW93ZKfwR%2BnOEjouyvLY%2B0JNEboYqNxjQK%2BKlQ3bhgDDGQMZibUQk1ysp1lnAjwNiqG%2FH4P0NzqjFk0Rtekeu9ZqigOKL8O4uyCFH1w7dnCpwGQoQVdNTpH%2BhSCEZWoCWq79IQU0Ub0Dr6HkDA2UqMerxEAqnwBaeWzs2yRlOJNTyCs5c30APGAThb2wejL%2F6tvX4xw3aSdMn7JIIfgDLOuUXSumFhQSgLF3iEYTpZF528lzJuk%2FHA330cvkqQiOP8ppwbqJWH%2F6CoTPMeNPzuhfLPAvJ6%2BmiiKPAXErl%2BjyeDJAk5kqRFbI2v6jrSoQpQ55vRg5axU9IYz2x5e2lm7o311VfMHISu9SwncPElamyx8XvJWLv76JsZDlHU%2FEB3pEge3pvNVtyBq3nnI2p5SN6bahPHZ657IZmJLKFiMrNs3N0mEDXawAweYHQqA7XtklCQ0%2F9NCvPBKPWOHz5emS6JGYhaWNtIe6oIZBRzlnBYqT4%2BlvasNRRpdEw%2BcygxAY6pgEYnKKSlWF5U4Mw3yTb0GNTwEJLeYdWb0UrDu6flKHSGvBQXJU%2BOigV97DR3y%2BVqGW1DkqiolBRNz1Lqsh52micT3jOQd7fg0kiLSBRcspC1acaUqnZilw19t7WaWxhYKVV1Pqsq2%2BJS1%2BEoW8RDxl0m%2B5g9kN98W4%2BwkF4NQw200GDq1W6553owFP2hZN6Z6CzGW22d3C8bf7kt6f%2BwMD20RdaiebV&X-Amz-Signature=96182088c68ccec7b9d157368b268abd1cef06d07a78a20765379eebd2d70b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNMB4S7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFySRMHlsPFIgob4ORWYFHdXClKZ9AnGn0L5EbUAULcIAiB1QOFRUEsx8Cqydyv9jmdPlntcAwUTsnRdcmd%2Blo7ZYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF59irzeUw3kp4rXKtwDiGNcWXGghMvG5cvWKtkc8syqCmVHvMdQbyt7qS6wqDS4j4wjc6EqEPIlJ%2BOCjVl5KHeZUDlurV7R7SvVDVndeLfdFbNW9Kssne0ygYnB8KXMlUisE5mNW1eY%2B492EHFsW93ZKfwR%2BnOEjouyvLY%2B0JNEboYqNxjQK%2BKlQ3bhgDDGQMZibUQk1ysp1lnAjwNiqG%2FH4P0NzqjFk0Rtekeu9ZqigOKL8O4uyCFH1w7dnCpwGQoQVdNTpH%2BhSCEZWoCWq79IQU0Ub0Dr6HkDA2UqMerxEAqnwBaeWzs2yRlOJNTyCs5c30APGAThb2wejL%2F6tvX4xw3aSdMn7JIIfgDLOuUXSumFhQSgLF3iEYTpZF528lzJuk%2FHA330cvkqQiOP8ppwbqJWH%2F6CoTPMeNPzuhfLPAvJ6%2BmiiKPAXErl%2BjyeDJAk5kqRFbI2v6jrSoQpQ55vRg5axU9IYz2x5e2lm7o311VfMHISu9SwncPElamyx8XvJWLv76JsZDlHU%2FEB3pEge3pvNVtyBq3nnI2p5SN6bahPHZ657IZmJLKFiMrNs3N0mEDXawAweYHQqA7XtklCQ0%2F9NCvPBKPWOHz5emS6JGYhaWNtIe6oIZBRzlnBYqT4%2BlvasNRRpdEw%2BcygxAY6pgEYnKKSlWF5U4Mw3yTb0GNTwEJLeYdWb0UrDu6flKHSGvBQXJU%2BOigV97DR3y%2BVqGW1DkqiolBRNz1Lqsh52micT3jOQd7fg0kiLSBRcspC1acaUqnZilw19t7WaWxhYKVV1Pqsq2%2BJS1%2BEoW8RDxl0m%2B5g9kN98W4%2BwkF4NQw200GDq1W6553owFP2hZN6Z6CzGW22d3C8bf7kt6f%2BwMD20RdaiebV&X-Amz-Signature=185e24480c566f00b377850ac63d910f0271a13a1b988b36094be66fa4beac8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNMB4S7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFySRMHlsPFIgob4ORWYFHdXClKZ9AnGn0L5EbUAULcIAiB1QOFRUEsx8Cqydyv9jmdPlntcAwUTsnRdcmd%2Blo7ZYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF59irzeUw3kp4rXKtwDiGNcWXGghMvG5cvWKtkc8syqCmVHvMdQbyt7qS6wqDS4j4wjc6EqEPIlJ%2BOCjVl5KHeZUDlurV7R7SvVDVndeLfdFbNW9Kssne0ygYnB8KXMlUisE5mNW1eY%2B492EHFsW93ZKfwR%2BnOEjouyvLY%2B0JNEboYqNxjQK%2BKlQ3bhgDDGQMZibUQk1ysp1lnAjwNiqG%2FH4P0NzqjFk0Rtekeu9ZqigOKL8O4uyCFH1w7dnCpwGQoQVdNTpH%2BhSCEZWoCWq79IQU0Ub0Dr6HkDA2UqMerxEAqnwBaeWzs2yRlOJNTyCs5c30APGAThb2wejL%2F6tvX4xw3aSdMn7JIIfgDLOuUXSumFhQSgLF3iEYTpZF528lzJuk%2FHA330cvkqQiOP8ppwbqJWH%2F6CoTPMeNPzuhfLPAvJ6%2BmiiKPAXErl%2BjyeDJAk5kqRFbI2v6jrSoQpQ55vRg5axU9IYz2x5e2lm7o311VfMHISu9SwncPElamyx8XvJWLv76JsZDlHU%2FEB3pEge3pvNVtyBq3nnI2p5SN6bahPHZ657IZmJLKFiMrNs3N0mEDXawAweYHQqA7XtklCQ0%2F9NCvPBKPWOHz5emS6JGYhaWNtIe6oIZBRzlnBYqT4%2BlvasNRRpdEw%2BcygxAY6pgEYnKKSlWF5U4Mw3yTb0GNTwEJLeYdWb0UrDu6flKHSGvBQXJU%2BOigV97DR3y%2BVqGW1DkqiolBRNz1Lqsh52micT3jOQd7fg0kiLSBRcspC1acaUqnZilw19t7WaWxhYKVV1Pqsq2%2BJS1%2BEoW8RDxl0m%2B5g9kN98W4%2BwkF4NQw200GDq1W6553owFP2hZN6Z6CzGW22d3C8bf7kt6f%2BwMD20RdaiebV&X-Amz-Signature=911db7beadd413d40038481afe7e6ca9b33486b6fffe7634ad619dbde05a1028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNMB4S7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFySRMHlsPFIgob4ORWYFHdXClKZ9AnGn0L5EbUAULcIAiB1QOFRUEsx8Cqydyv9jmdPlntcAwUTsnRdcmd%2Blo7ZYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF59irzeUw3kp4rXKtwDiGNcWXGghMvG5cvWKtkc8syqCmVHvMdQbyt7qS6wqDS4j4wjc6EqEPIlJ%2BOCjVl5KHeZUDlurV7R7SvVDVndeLfdFbNW9Kssne0ygYnB8KXMlUisE5mNW1eY%2B492EHFsW93ZKfwR%2BnOEjouyvLY%2B0JNEboYqNxjQK%2BKlQ3bhgDDGQMZibUQk1ysp1lnAjwNiqG%2FH4P0NzqjFk0Rtekeu9ZqigOKL8O4uyCFH1w7dnCpwGQoQVdNTpH%2BhSCEZWoCWq79IQU0Ub0Dr6HkDA2UqMerxEAqnwBaeWzs2yRlOJNTyCs5c30APGAThb2wejL%2F6tvX4xw3aSdMn7JIIfgDLOuUXSumFhQSgLF3iEYTpZF528lzJuk%2FHA330cvkqQiOP8ppwbqJWH%2F6CoTPMeNPzuhfLPAvJ6%2BmiiKPAXErl%2BjyeDJAk5kqRFbI2v6jrSoQpQ55vRg5axU9IYz2x5e2lm7o311VfMHISu9SwncPElamyx8XvJWLv76JsZDlHU%2FEB3pEge3pvNVtyBq3nnI2p5SN6bahPHZ657IZmJLKFiMrNs3N0mEDXawAweYHQqA7XtklCQ0%2F9NCvPBKPWOHz5emS6JGYhaWNtIe6oIZBRzlnBYqT4%2BlvasNRRpdEw%2BcygxAY6pgEYnKKSlWF5U4Mw3yTb0GNTwEJLeYdWb0UrDu6flKHSGvBQXJU%2BOigV97DR3y%2BVqGW1DkqiolBRNz1Lqsh52micT3jOQd7fg0kiLSBRcspC1acaUqnZilw19t7WaWxhYKVV1Pqsq2%2BJS1%2BEoW8RDxl0m%2B5g9kN98W4%2BwkF4NQw200GDq1W6553owFP2hZN6Z6CzGW22d3C8bf7kt6f%2BwMD20RdaiebV&X-Amz-Signature=a2cae7281afefd48fe7ff6625cee3279502270ac810f8efc9c9650f278811caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNMB4S7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFySRMHlsPFIgob4ORWYFHdXClKZ9AnGn0L5EbUAULcIAiB1QOFRUEsx8Cqydyv9jmdPlntcAwUTsnRdcmd%2Blo7ZYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF59irzeUw3kp4rXKtwDiGNcWXGghMvG5cvWKtkc8syqCmVHvMdQbyt7qS6wqDS4j4wjc6EqEPIlJ%2BOCjVl5KHeZUDlurV7R7SvVDVndeLfdFbNW9Kssne0ygYnB8KXMlUisE5mNW1eY%2B492EHFsW93ZKfwR%2BnOEjouyvLY%2B0JNEboYqNxjQK%2BKlQ3bhgDDGQMZibUQk1ysp1lnAjwNiqG%2FH4P0NzqjFk0Rtekeu9ZqigOKL8O4uyCFH1w7dnCpwGQoQVdNTpH%2BhSCEZWoCWq79IQU0Ub0Dr6HkDA2UqMerxEAqnwBaeWzs2yRlOJNTyCs5c30APGAThb2wejL%2F6tvX4xw3aSdMn7JIIfgDLOuUXSumFhQSgLF3iEYTpZF528lzJuk%2FHA330cvkqQiOP8ppwbqJWH%2F6CoTPMeNPzuhfLPAvJ6%2BmiiKPAXErl%2BjyeDJAk5kqRFbI2v6jrSoQpQ55vRg5axU9IYz2x5e2lm7o311VfMHISu9SwncPElamyx8XvJWLv76JsZDlHU%2FEB3pEge3pvNVtyBq3nnI2p5SN6bahPHZ657IZmJLKFiMrNs3N0mEDXawAweYHQqA7XtklCQ0%2F9NCvPBKPWOHz5emS6JGYhaWNtIe6oIZBRzlnBYqT4%2BlvasNRRpdEw%2BcygxAY6pgEYnKKSlWF5U4Mw3yTb0GNTwEJLeYdWb0UrDu6flKHSGvBQXJU%2BOigV97DR3y%2BVqGW1DkqiolBRNz1Lqsh52micT3jOQd7fg0kiLSBRcspC1acaUqnZilw19t7WaWxhYKVV1Pqsq2%2BJS1%2BEoW8RDxl0m%2B5g9kN98W4%2BwkF4NQw200GDq1W6553owFP2hZN6Z6CzGW22d3C8bf7kt6f%2BwMD20RdaiebV&X-Amz-Signature=4a165e67cdec505c9ace680528fd1f05703e129a53e615fdd0bc41486c7a7e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNMB4S7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFySRMHlsPFIgob4ORWYFHdXClKZ9AnGn0L5EbUAULcIAiB1QOFRUEsx8Cqydyv9jmdPlntcAwUTsnRdcmd%2Blo7ZYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF59irzeUw3kp4rXKtwDiGNcWXGghMvG5cvWKtkc8syqCmVHvMdQbyt7qS6wqDS4j4wjc6EqEPIlJ%2BOCjVl5KHeZUDlurV7R7SvVDVndeLfdFbNW9Kssne0ygYnB8KXMlUisE5mNW1eY%2B492EHFsW93ZKfwR%2BnOEjouyvLY%2B0JNEboYqNxjQK%2BKlQ3bhgDDGQMZibUQk1ysp1lnAjwNiqG%2FH4P0NzqjFk0Rtekeu9ZqigOKL8O4uyCFH1w7dnCpwGQoQVdNTpH%2BhSCEZWoCWq79IQU0Ub0Dr6HkDA2UqMerxEAqnwBaeWzs2yRlOJNTyCs5c30APGAThb2wejL%2F6tvX4xw3aSdMn7JIIfgDLOuUXSumFhQSgLF3iEYTpZF528lzJuk%2FHA330cvkqQiOP8ppwbqJWH%2F6CoTPMeNPzuhfLPAvJ6%2BmiiKPAXErl%2BjyeDJAk5kqRFbI2v6jrSoQpQ55vRg5axU9IYz2x5e2lm7o311VfMHISu9SwncPElamyx8XvJWLv76JsZDlHU%2FEB3pEge3pvNVtyBq3nnI2p5SN6bahPHZ657IZmJLKFiMrNs3N0mEDXawAweYHQqA7XtklCQ0%2F9NCvPBKPWOHz5emS6JGYhaWNtIe6oIZBRzlnBYqT4%2BlvasNRRpdEw%2BcygxAY6pgEYnKKSlWF5U4Mw3yTb0GNTwEJLeYdWb0UrDu6flKHSGvBQXJU%2BOigV97DR3y%2BVqGW1DkqiolBRNz1Lqsh52micT3jOQd7fg0kiLSBRcspC1acaUqnZilw19t7WaWxhYKVV1Pqsq2%2BJS1%2BEoW8RDxl0m%2B5g9kN98W4%2BwkF4NQw200GDq1W6553owFP2hZN6Z6CzGW22d3C8bf7kt6f%2BwMD20RdaiebV&X-Amz-Signature=03c3d656cbdb4ed8eaf76afce69faf1ecdf3026fe184bf2a81934c50c71578d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNMB4S7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFySRMHlsPFIgob4ORWYFHdXClKZ9AnGn0L5EbUAULcIAiB1QOFRUEsx8Cqydyv9jmdPlntcAwUTsnRdcmd%2Blo7ZYSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF59irzeUw3kp4rXKtwDiGNcWXGghMvG5cvWKtkc8syqCmVHvMdQbyt7qS6wqDS4j4wjc6EqEPIlJ%2BOCjVl5KHeZUDlurV7R7SvVDVndeLfdFbNW9Kssne0ygYnB8KXMlUisE5mNW1eY%2B492EHFsW93ZKfwR%2BnOEjouyvLY%2B0JNEboYqNxjQK%2BKlQ3bhgDDGQMZibUQk1ysp1lnAjwNiqG%2FH4P0NzqjFk0Rtekeu9ZqigOKL8O4uyCFH1w7dnCpwGQoQVdNTpH%2BhSCEZWoCWq79IQU0Ub0Dr6HkDA2UqMerxEAqnwBaeWzs2yRlOJNTyCs5c30APGAThb2wejL%2F6tvX4xw3aSdMn7JIIfgDLOuUXSumFhQSgLF3iEYTpZF528lzJuk%2FHA330cvkqQiOP8ppwbqJWH%2F6CoTPMeNPzuhfLPAvJ6%2BmiiKPAXErl%2BjyeDJAk5kqRFbI2v6jrSoQpQ55vRg5axU9IYz2x5e2lm7o311VfMHISu9SwncPElamyx8XvJWLv76JsZDlHU%2FEB3pEge3pvNVtyBq3nnI2p5SN6bahPHZ657IZmJLKFiMrNs3N0mEDXawAweYHQqA7XtklCQ0%2F9NCvPBKPWOHz5emS6JGYhaWNtIe6oIZBRzlnBYqT4%2BlvasNRRpdEw%2BcygxAY6pgEYnKKSlWF5U4Mw3yTb0GNTwEJLeYdWb0UrDu6flKHSGvBQXJU%2BOigV97DR3y%2BVqGW1DkqiolBRNz1Lqsh52micT3jOQd7fg0kiLSBRcspC1acaUqnZilw19t7WaWxhYKVV1Pqsq2%2BJS1%2BEoW8RDxl0m%2B5g9kN98W4%2BwkF4NQw200GDq1W6553owFP2hZN6Z6CzGW22d3C8bf7kt6f%2BwMD20RdaiebV&X-Amz-Signature=77a0adf749236c3cd51c12d7db61854c55e51d0cb88829a14c1a5a1fd1502624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
