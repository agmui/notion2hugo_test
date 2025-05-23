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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OBRWOX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHrs994vSvsLP5qTqdetI%2FODs4CAelBLLDGHALQ530DwAiBBXv%2ByqrMW19MWL%2BWHLu%2FbrgiftrtZzeY%2B95u5Te38ICqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJmvRiqPJN8CPESvKtwD8qU%2BdeMaF%2BpPJeBQwyz9%2FFTqfNu9C7cYzqr%2BAhYtndeEQMYvmYIPoO6ZuivzW02%2FkFJWh88cgxg5BQoW0djvurH72vwp14nzwOSqCPUePqpbXZYJbCaKAi%2FzGZzRq1m1Klx6Fg4PE6pa9aiFgvCAWVl8PKHUve2B%2Fr0u7aYCF5BXpZOFQzN%2BgAAtEFaHu2yBDuSTM4bGFUI8Rnn8lMDKpyI0XGZ924PCxN7z%2FVnW9hvmv1rd7yhrGjdYiXevntCPEObb2wc0F%2B3O9AwnPTFL4TCxLE4rpE26SYN22SzA5MKq3BmpaXYBiFNfpdL06FiKupF9KFw215kAiEqRewPlWISKtYkKOkukHqqClJQOkqvTGLlH9M%2FtjV0tFEznh8fIscYLDX0fMjOdKAHRISN2VZ%2FP7MJBM0kDgVYvNMwqCgZTZdVCYrGtm7iuID1Q0K6RyCoYiy6VYMagUn%2F8Fpmn9ITeviOQaT5mjCBbEuCcrb7%2B%2BF%2BZuo9xuUU0ic86B51I3oiSX3BjYZOZgANkOQmAWgL1Y4l4a9KfxtMyfMC9z57lEK8ga%2F7Yp0Zzz4wm14x8A%2BJShC2jHHNTTtRODZ4UtOPKkLavXmhhfvYZ3Zwt4YdHln8s5M9PNvmerucwo%2FW%2FwQY6pgGfHZ5A09Hc6JIpCAZcN%2F2xG93e9Jir01oRFHvB6ZLiHcJ3vx2EO2w4XjMH2uzTdfTS%2FR4NY7TymleypAvnpQnj9TtPldSesv93wII1RLO5pjZ8xiGBrUcs%2BMAXvTON72YObxYeB3JllK1vEooH7OF4NgKLjpyUa04Y%2FWGeSTlUAXz1re8u2YKP5XEhJDAi9Hf%2BLIxzy9zkXoeHRR1oSGv4YWl6nfLK&X-Amz-Signature=ffd1cb54a146b1a660cdcaa4294422b5e29697b099fce770cbce328d9361ee14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OBRWOX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHrs994vSvsLP5qTqdetI%2FODs4CAelBLLDGHALQ530DwAiBBXv%2ByqrMW19MWL%2BWHLu%2FbrgiftrtZzeY%2B95u5Te38ICqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJmvRiqPJN8CPESvKtwD8qU%2BdeMaF%2BpPJeBQwyz9%2FFTqfNu9C7cYzqr%2BAhYtndeEQMYvmYIPoO6ZuivzW02%2FkFJWh88cgxg5BQoW0djvurH72vwp14nzwOSqCPUePqpbXZYJbCaKAi%2FzGZzRq1m1Klx6Fg4PE6pa9aiFgvCAWVl8PKHUve2B%2Fr0u7aYCF5BXpZOFQzN%2BgAAtEFaHu2yBDuSTM4bGFUI8Rnn8lMDKpyI0XGZ924PCxN7z%2FVnW9hvmv1rd7yhrGjdYiXevntCPEObb2wc0F%2B3O9AwnPTFL4TCxLE4rpE26SYN22SzA5MKq3BmpaXYBiFNfpdL06FiKupF9KFw215kAiEqRewPlWISKtYkKOkukHqqClJQOkqvTGLlH9M%2FtjV0tFEznh8fIscYLDX0fMjOdKAHRISN2VZ%2FP7MJBM0kDgVYvNMwqCgZTZdVCYrGtm7iuID1Q0K6RyCoYiy6VYMagUn%2F8Fpmn9ITeviOQaT5mjCBbEuCcrb7%2B%2BF%2BZuo9xuUU0ic86B51I3oiSX3BjYZOZgANkOQmAWgL1Y4l4a9KfxtMyfMC9z57lEK8ga%2F7Yp0Zzz4wm14x8A%2BJShC2jHHNTTtRODZ4UtOPKkLavXmhhfvYZ3Zwt4YdHln8s5M9PNvmerucwo%2FW%2FwQY6pgGfHZ5A09Hc6JIpCAZcN%2F2xG93e9Jir01oRFHvB6ZLiHcJ3vx2EO2w4XjMH2uzTdfTS%2FR4NY7TymleypAvnpQnj9TtPldSesv93wII1RLO5pjZ8xiGBrUcs%2BMAXvTON72YObxYeB3JllK1vEooH7OF4NgKLjpyUa04Y%2FWGeSTlUAXz1re8u2YKP5XEhJDAi9Hf%2BLIxzy9zkXoeHRR1oSGv4YWl6nfLK&X-Amz-Signature=22e48f624ce6677793dd18f29b0450fa2f5d6b21b082c1d83f300d5dc86e859e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OBRWOX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHrs994vSvsLP5qTqdetI%2FODs4CAelBLLDGHALQ530DwAiBBXv%2ByqrMW19MWL%2BWHLu%2FbrgiftrtZzeY%2B95u5Te38ICqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJmvRiqPJN8CPESvKtwD8qU%2BdeMaF%2BpPJeBQwyz9%2FFTqfNu9C7cYzqr%2BAhYtndeEQMYvmYIPoO6ZuivzW02%2FkFJWh88cgxg5BQoW0djvurH72vwp14nzwOSqCPUePqpbXZYJbCaKAi%2FzGZzRq1m1Klx6Fg4PE6pa9aiFgvCAWVl8PKHUve2B%2Fr0u7aYCF5BXpZOFQzN%2BgAAtEFaHu2yBDuSTM4bGFUI8Rnn8lMDKpyI0XGZ924PCxN7z%2FVnW9hvmv1rd7yhrGjdYiXevntCPEObb2wc0F%2B3O9AwnPTFL4TCxLE4rpE26SYN22SzA5MKq3BmpaXYBiFNfpdL06FiKupF9KFw215kAiEqRewPlWISKtYkKOkukHqqClJQOkqvTGLlH9M%2FtjV0tFEznh8fIscYLDX0fMjOdKAHRISN2VZ%2FP7MJBM0kDgVYvNMwqCgZTZdVCYrGtm7iuID1Q0K6RyCoYiy6VYMagUn%2F8Fpmn9ITeviOQaT5mjCBbEuCcrb7%2B%2BF%2BZuo9xuUU0ic86B51I3oiSX3BjYZOZgANkOQmAWgL1Y4l4a9KfxtMyfMC9z57lEK8ga%2F7Yp0Zzz4wm14x8A%2BJShC2jHHNTTtRODZ4UtOPKkLavXmhhfvYZ3Zwt4YdHln8s5M9PNvmerucwo%2FW%2FwQY6pgGfHZ5A09Hc6JIpCAZcN%2F2xG93e9Jir01oRFHvB6ZLiHcJ3vx2EO2w4XjMH2uzTdfTS%2FR4NY7TymleypAvnpQnj9TtPldSesv93wII1RLO5pjZ8xiGBrUcs%2BMAXvTON72YObxYeB3JllK1vEooH7OF4NgKLjpyUa04Y%2FWGeSTlUAXz1re8u2YKP5XEhJDAi9Hf%2BLIxzy9zkXoeHRR1oSGv4YWl6nfLK&X-Amz-Signature=8d58a4ef4fb15d1462c130d45f720269b92fc60fc076d82db5c2d7a47be9551a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OBRWOX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHrs994vSvsLP5qTqdetI%2FODs4CAelBLLDGHALQ530DwAiBBXv%2ByqrMW19MWL%2BWHLu%2FbrgiftrtZzeY%2B95u5Te38ICqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJmvRiqPJN8CPESvKtwD8qU%2BdeMaF%2BpPJeBQwyz9%2FFTqfNu9C7cYzqr%2BAhYtndeEQMYvmYIPoO6ZuivzW02%2FkFJWh88cgxg5BQoW0djvurH72vwp14nzwOSqCPUePqpbXZYJbCaKAi%2FzGZzRq1m1Klx6Fg4PE6pa9aiFgvCAWVl8PKHUve2B%2Fr0u7aYCF5BXpZOFQzN%2BgAAtEFaHu2yBDuSTM4bGFUI8Rnn8lMDKpyI0XGZ924PCxN7z%2FVnW9hvmv1rd7yhrGjdYiXevntCPEObb2wc0F%2B3O9AwnPTFL4TCxLE4rpE26SYN22SzA5MKq3BmpaXYBiFNfpdL06FiKupF9KFw215kAiEqRewPlWISKtYkKOkukHqqClJQOkqvTGLlH9M%2FtjV0tFEznh8fIscYLDX0fMjOdKAHRISN2VZ%2FP7MJBM0kDgVYvNMwqCgZTZdVCYrGtm7iuID1Q0K6RyCoYiy6VYMagUn%2F8Fpmn9ITeviOQaT5mjCBbEuCcrb7%2B%2BF%2BZuo9xuUU0ic86B51I3oiSX3BjYZOZgANkOQmAWgL1Y4l4a9KfxtMyfMC9z57lEK8ga%2F7Yp0Zzz4wm14x8A%2BJShC2jHHNTTtRODZ4UtOPKkLavXmhhfvYZ3Zwt4YdHln8s5M9PNvmerucwo%2FW%2FwQY6pgGfHZ5A09Hc6JIpCAZcN%2F2xG93e9Jir01oRFHvB6ZLiHcJ3vx2EO2w4XjMH2uzTdfTS%2FR4NY7TymleypAvnpQnj9TtPldSesv93wII1RLO5pjZ8xiGBrUcs%2BMAXvTON72YObxYeB3JllK1vEooH7OF4NgKLjpyUa04Y%2FWGeSTlUAXz1re8u2YKP5XEhJDAi9Hf%2BLIxzy9zkXoeHRR1oSGv4YWl6nfLK&X-Amz-Signature=cb4e9f5aab27c51cda867f03ddff25141d08d941813a858eeb388d75de96fdfc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OBRWOX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHrs994vSvsLP5qTqdetI%2FODs4CAelBLLDGHALQ530DwAiBBXv%2ByqrMW19MWL%2BWHLu%2FbrgiftrtZzeY%2B95u5Te38ICqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJmvRiqPJN8CPESvKtwD8qU%2BdeMaF%2BpPJeBQwyz9%2FFTqfNu9C7cYzqr%2BAhYtndeEQMYvmYIPoO6ZuivzW02%2FkFJWh88cgxg5BQoW0djvurH72vwp14nzwOSqCPUePqpbXZYJbCaKAi%2FzGZzRq1m1Klx6Fg4PE6pa9aiFgvCAWVl8PKHUve2B%2Fr0u7aYCF5BXpZOFQzN%2BgAAtEFaHu2yBDuSTM4bGFUI8Rnn8lMDKpyI0XGZ924PCxN7z%2FVnW9hvmv1rd7yhrGjdYiXevntCPEObb2wc0F%2B3O9AwnPTFL4TCxLE4rpE26SYN22SzA5MKq3BmpaXYBiFNfpdL06FiKupF9KFw215kAiEqRewPlWISKtYkKOkukHqqClJQOkqvTGLlH9M%2FtjV0tFEznh8fIscYLDX0fMjOdKAHRISN2VZ%2FP7MJBM0kDgVYvNMwqCgZTZdVCYrGtm7iuID1Q0K6RyCoYiy6VYMagUn%2F8Fpmn9ITeviOQaT5mjCBbEuCcrb7%2B%2BF%2BZuo9xuUU0ic86B51I3oiSX3BjYZOZgANkOQmAWgL1Y4l4a9KfxtMyfMC9z57lEK8ga%2F7Yp0Zzz4wm14x8A%2BJShC2jHHNTTtRODZ4UtOPKkLavXmhhfvYZ3Zwt4YdHln8s5M9PNvmerucwo%2FW%2FwQY6pgGfHZ5A09Hc6JIpCAZcN%2F2xG93e9Jir01oRFHvB6ZLiHcJ3vx2EO2w4XjMH2uzTdfTS%2FR4NY7TymleypAvnpQnj9TtPldSesv93wII1RLO5pjZ8xiGBrUcs%2BMAXvTON72YObxYeB3JllK1vEooH7OF4NgKLjpyUa04Y%2FWGeSTlUAXz1re8u2YKP5XEhJDAi9Hf%2BLIxzy9zkXoeHRR1oSGv4YWl6nfLK&X-Amz-Signature=05eadbca7f363969c8ae5835607bd5d7d6fc500799a39090ee23cec66a103d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OBRWOX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHrs994vSvsLP5qTqdetI%2FODs4CAelBLLDGHALQ530DwAiBBXv%2ByqrMW19MWL%2BWHLu%2FbrgiftrtZzeY%2B95u5Te38ICqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJmvRiqPJN8CPESvKtwD8qU%2BdeMaF%2BpPJeBQwyz9%2FFTqfNu9C7cYzqr%2BAhYtndeEQMYvmYIPoO6ZuivzW02%2FkFJWh88cgxg5BQoW0djvurH72vwp14nzwOSqCPUePqpbXZYJbCaKAi%2FzGZzRq1m1Klx6Fg4PE6pa9aiFgvCAWVl8PKHUve2B%2Fr0u7aYCF5BXpZOFQzN%2BgAAtEFaHu2yBDuSTM4bGFUI8Rnn8lMDKpyI0XGZ924PCxN7z%2FVnW9hvmv1rd7yhrGjdYiXevntCPEObb2wc0F%2B3O9AwnPTFL4TCxLE4rpE26SYN22SzA5MKq3BmpaXYBiFNfpdL06FiKupF9KFw215kAiEqRewPlWISKtYkKOkukHqqClJQOkqvTGLlH9M%2FtjV0tFEznh8fIscYLDX0fMjOdKAHRISN2VZ%2FP7MJBM0kDgVYvNMwqCgZTZdVCYrGtm7iuID1Q0K6RyCoYiy6VYMagUn%2F8Fpmn9ITeviOQaT5mjCBbEuCcrb7%2B%2BF%2BZuo9xuUU0ic86B51I3oiSX3BjYZOZgANkOQmAWgL1Y4l4a9KfxtMyfMC9z57lEK8ga%2F7Yp0Zzz4wm14x8A%2BJShC2jHHNTTtRODZ4UtOPKkLavXmhhfvYZ3Zwt4YdHln8s5M9PNvmerucwo%2FW%2FwQY6pgGfHZ5A09Hc6JIpCAZcN%2F2xG93e9Jir01oRFHvB6ZLiHcJ3vx2EO2w4XjMH2uzTdfTS%2FR4NY7TymleypAvnpQnj9TtPldSesv93wII1RLO5pjZ8xiGBrUcs%2BMAXvTON72YObxYeB3JllK1vEooH7OF4NgKLjpyUa04Y%2FWGeSTlUAXz1re8u2YKP5XEhJDAi9Hf%2BLIxzy9zkXoeHRR1oSGv4YWl6nfLK&X-Amz-Signature=255d71220a84b587f72b7a06715e7afc6825ee2da9b39dc8a8efe1c6d1d67605&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OBRWOX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHrs994vSvsLP5qTqdetI%2FODs4CAelBLLDGHALQ530DwAiBBXv%2ByqrMW19MWL%2BWHLu%2FbrgiftrtZzeY%2B95u5Te38ICqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsJmvRiqPJN8CPESvKtwD8qU%2BdeMaF%2BpPJeBQwyz9%2FFTqfNu9C7cYzqr%2BAhYtndeEQMYvmYIPoO6ZuivzW02%2FkFJWh88cgxg5BQoW0djvurH72vwp14nzwOSqCPUePqpbXZYJbCaKAi%2FzGZzRq1m1Klx6Fg4PE6pa9aiFgvCAWVl8PKHUve2B%2Fr0u7aYCF5BXpZOFQzN%2BgAAtEFaHu2yBDuSTM4bGFUI8Rnn8lMDKpyI0XGZ924PCxN7z%2FVnW9hvmv1rd7yhrGjdYiXevntCPEObb2wc0F%2B3O9AwnPTFL4TCxLE4rpE26SYN22SzA5MKq3BmpaXYBiFNfpdL06FiKupF9KFw215kAiEqRewPlWISKtYkKOkukHqqClJQOkqvTGLlH9M%2FtjV0tFEznh8fIscYLDX0fMjOdKAHRISN2VZ%2FP7MJBM0kDgVYvNMwqCgZTZdVCYrGtm7iuID1Q0K6RyCoYiy6VYMagUn%2F8Fpmn9ITeviOQaT5mjCBbEuCcrb7%2B%2BF%2BZuo9xuUU0ic86B51I3oiSX3BjYZOZgANkOQmAWgL1Y4l4a9KfxtMyfMC9z57lEK8ga%2F7Yp0Zzz4wm14x8A%2BJShC2jHHNTTtRODZ4UtOPKkLavXmhhfvYZ3Zwt4YdHln8s5M9PNvmerucwo%2FW%2FwQY6pgGfHZ5A09Hc6JIpCAZcN%2F2xG93e9Jir01oRFHvB6ZLiHcJ3vx2EO2w4XjMH2uzTdfTS%2FR4NY7TymleypAvnpQnj9TtPldSesv93wII1RLO5pjZ8xiGBrUcs%2BMAXvTON72YObxYeB3JllK1vEooH7OF4NgKLjpyUa04Y%2FWGeSTlUAXz1re8u2YKP5XEhJDAi9Hf%2BLIxzy9zkXoeHRR1oSGv4YWl6nfLK&X-Amz-Signature=c89a62c7e66539ca8a119929e3c2e55d456f55aa32d6847cf3a92321ad8ab569&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
