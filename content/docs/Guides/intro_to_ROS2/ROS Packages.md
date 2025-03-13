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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZMDHYE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3wgG0pX4ivPzucW8Yb%2Fy8f534XmQWcmv7JY4WC53nQIgTBY06cQZuww9zMqe8cwWPx%2F0F01s6D0pIZXmYUebRBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ivID0ZADCqlrQICrcA%2FDkyFwVd3vpGgbojNC5fVdokSpwArOco9mzHOJQXV9IRAaj2DDjPR3NLuSTxuCb7cBrm%2BxhLl2%2B8%2BPgm4N1gc4kMLg0fEyP7YbEA0lBX1ucELgqZi%2FoIph5yrn%2BJu7J5v0Dkh5RdVJai%2FpK6WvKh3LKCL50qnU%2Bs8NQq3uUFqVK8jo2wwHycol%2FP8lm6Mb4kpuUtL9M9RbJfjFs7X7X5WT%2F335P3dj7Y7t%2BkG36sigzuF9wJ2Ck%2BKDD%2BmmzKtIcqOMs1KL5yvvNcTNVcQubBFe2fac0wTPB9iVM%2FGcrnMn8Wml4%2BJrfBPScpyEotXWtpn%2FmUjurTNonqIs%2B%2F58z6qEwGV3V71Egk8kHatqrLEXtL5ikVlBTbtdYWWA3WJrxFByVN%2FeYoBgzUrIQEyOusQT5aJmCxBnKwH2NzUspSjtf9rG7UQ%2F%2BlZNSQvFwMK6yc8XyK993KOlBx0VufIUa3dNH0p4rBO0v99wZKePsOAMuVpGrMn7qv5ZTnvgOTVk4w1QMpkk%2BPR8AgeT4iQoUpKuf%2BPXsCD9fpa7THZFSh2rh8YUHk3FXHYqCIPvJBVS8DmrH53LM8w0EdHb%2FNn%2BJxrT%2BKB8%2BeD0ubT%2BSDZ2y4ZZRGL7MfHO6dM3XUah8MKfZy74GOqUBWF0uWTpRXHkjfZAUuH9%2B2SfksYt5eOkQhdq2mN%2BzM%2ByhI6so1Pf1zHeBMzg0sbZ6CsO1cnxNmGL2B2LbSvOyhsAjNlX66ryzWMeyZrDBPHpmLChU6K6yuMX6JvOL4%2Bf03NWFwPIWPy4vvFM6N2pofBT6qEzUYgOfhcBC4lDgZSR%2Bo2VqxocJJ%2BC0BW%2FjjAFAIUkkMQChrJL9HUF7Ylw6FX6Nny5X&X-Amz-Signature=8988d08c6599d6b5b06a25e997b7b97434d7be75d45d8d636371765c9dcd01be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZMDHYE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3wgG0pX4ivPzucW8Yb%2Fy8f534XmQWcmv7JY4WC53nQIgTBY06cQZuww9zMqe8cwWPx%2F0F01s6D0pIZXmYUebRBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ivID0ZADCqlrQICrcA%2FDkyFwVd3vpGgbojNC5fVdokSpwArOco9mzHOJQXV9IRAaj2DDjPR3NLuSTxuCb7cBrm%2BxhLl2%2B8%2BPgm4N1gc4kMLg0fEyP7YbEA0lBX1ucELgqZi%2FoIph5yrn%2BJu7J5v0Dkh5RdVJai%2FpK6WvKh3LKCL50qnU%2Bs8NQq3uUFqVK8jo2wwHycol%2FP8lm6Mb4kpuUtL9M9RbJfjFs7X7X5WT%2F335P3dj7Y7t%2BkG36sigzuF9wJ2Ck%2BKDD%2BmmzKtIcqOMs1KL5yvvNcTNVcQubBFe2fac0wTPB9iVM%2FGcrnMn8Wml4%2BJrfBPScpyEotXWtpn%2FmUjurTNonqIs%2B%2F58z6qEwGV3V71Egk8kHatqrLEXtL5ikVlBTbtdYWWA3WJrxFByVN%2FeYoBgzUrIQEyOusQT5aJmCxBnKwH2NzUspSjtf9rG7UQ%2F%2BlZNSQvFwMK6yc8XyK993KOlBx0VufIUa3dNH0p4rBO0v99wZKePsOAMuVpGrMn7qv5ZTnvgOTVk4w1QMpkk%2BPR8AgeT4iQoUpKuf%2BPXsCD9fpa7THZFSh2rh8YUHk3FXHYqCIPvJBVS8DmrH53LM8w0EdHb%2FNn%2BJxrT%2BKB8%2BeD0ubT%2BSDZ2y4ZZRGL7MfHO6dM3XUah8MKfZy74GOqUBWF0uWTpRXHkjfZAUuH9%2B2SfksYt5eOkQhdq2mN%2BzM%2ByhI6so1Pf1zHeBMzg0sbZ6CsO1cnxNmGL2B2LbSvOyhsAjNlX66ryzWMeyZrDBPHpmLChU6K6yuMX6JvOL4%2Bf03NWFwPIWPy4vvFM6N2pofBT6qEzUYgOfhcBC4lDgZSR%2Bo2VqxocJJ%2BC0BW%2FjjAFAIUkkMQChrJL9HUF7Ylw6FX6Nny5X&X-Amz-Signature=09088418b264227f9c05b8df22ebdc898bf65eab234c3091a3b5125abc3977cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZMDHYE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3wgG0pX4ivPzucW8Yb%2Fy8f534XmQWcmv7JY4WC53nQIgTBY06cQZuww9zMqe8cwWPx%2F0F01s6D0pIZXmYUebRBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ivID0ZADCqlrQICrcA%2FDkyFwVd3vpGgbojNC5fVdokSpwArOco9mzHOJQXV9IRAaj2DDjPR3NLuSTxuCb7cBrm%2BxhLl2%2B8%2BPgm4N1gc4kMLg0fEyP7YbEA0lBX1ucELgqZi%2FoIph5yrn%2BJu7J5v0Dkh5RdVJai%2FpK6WvKh3LKCL50qnU%2Bs8NQq3uUFqVK8jo2wwHycol%2FP8lm6Mb4kpuUtL9M9RbJfjFs7X7X5WT%2F335P3dj7Y7t%2BkG36sigzuF9wJ2Ck%2BKDD%2BmmzKtIcqOMs1KL5yvvNcTNVcQubBFe2fac0wTPB9iVM%2FGcrnMn8Wml4%2BJrfBPScpyEotXWtpn%2FmUjurTNonqIs%2B%2F58z6qEwGV3V71Egk8kHatqrLEXtL5ikVlBTbtdYWWA3WJrxFByVN%2FeYoBgzUrIQEyOusQT5aJmCxBnKwH2NzUspSjtf9rG7UQ%2F%2BlZNSQvFwMK6yc8XyK993KOlBx0VufIUa3dNH0p4rBO0v99wZKePsOAMuVpGrMn7qv5ZTnvgOTVk4w1QMpkk%2BPR8AgeT4iQoUpKuf%2BPXsCD9fpa7THZFSh2rh8YUHk3FXHYqCIPvJBVS8DmrH53LM8w0EdHb%2FNn%2BJxrT%2BKB8%2BeD0ubT%2BSDZ2y4ZZRGL7MfHO6dM3XUah8MKfZy74GOqUBWF0uWTpRXHkjfZAUuH9%2B2SfksYt5eOkQhdq2mN%2BzM%2ByhI6so1Pf1zHeBMzg0sbZ6CsO1cnxNmGL2B2LbSvOyhsAjNlX66ryzWMeyZrDBPHpmLChU6K6yuMX6JvOL4%2Bf03NWFwPIWPy4vvFM6N2pofBT6qEzUYgOfhcBC4lDgZSR%2Bo2VqxocJJ%2BC0BW%2FjjAFAIUkkMQChrJL9HUF7Ylw6FX6Nny5X&X-Amz-Signature=0f09f2c28cb672f596b4d4b6d5d4c09fb06e4a1e833e789104c034a315507b74&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZMDHYE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3wgG0pX4ivPzucW8Yb%2Fy8f534XmQWcmv7JY4WC53nQIgTBY06cQZuww9zMqe8cwWPx%2F0F01s6D0pIZXmYUebRBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ivID0ZADCqlrQICrcA%2FDkyFwVd3vpGgbojNC5fVdokSpwArOco9mzHOJQXV9IRAaj2DDjPR3NLuSTxuCb7cBrm%2BxhLl2%2B8%2BPgm4N1gc4kMLg0fEyP7YbEA0lBX1ucELgqZi%2FoIph5yrn%2BJu7J5v0Dkh5RdVJai%2FpK6WvKh3LKCL50qnU%2Bs8NQq3uUFqVK8jo2wwHycol%2FP8lm6Mb4kpuUtL9M9RbJfjFs7X7X5WT%2F335P3dj7Y7t%2BkG36sigzuF9wJ2Ck%2BKDD%2BmmzKtIcqOMs1KL5yvvNcTNVcQubBFe2fac0wTPB9iVM%2FGcrnMn8Wml4%2BJrfBPScpyEotXWtpn%2FmUjurTNonqIs%2B%2F58z6qEwGV3V71Egk8kHatqrLEXtL5ikVlBTbtdYWWA3WJrxFByVN%2FeYoBgzUrIQEyOusQT5aJmCxBnKwH2NzUspSjtf9rG7UQ%2F%2BlZNSQvFwMK6yc8XyK993KOlBx0VufIUa3dNH0p4rBO0v99wZKePsOAMuVpGrMn7qv5ZTnvgOTVk4w1QMpkk%2BPR8AgeT4iQoUpKuf%2BPXsCD9fpa7THZFSh2rh8YUHk3FXHYqCIPvJBVS8DmrH53LM8w0EdHb%2FNn%2BJxrT%2BKB8%2BeD0ubT%2BSDZ2y4ZZRGL7MfHO6dM3XUah8MKfZy74GOqUBWF0uWTpRXHkjfZAUuH9%2B2SfksYt5eOkQhdq2mN%2BzM%2ByhI6so1Pf1zHeBMzg0sbZ6CsO1cnxNmGL2B2LbSvOyhsAjNlX66ryzWMeyZrDBPHpmLChU6K6yuMX6JvOL4%2Bf03NWFwPIWPy4vvFM6N2pofBT6qEzUYgOfhcBC4lDgZSR%2Bo2VqxocJJ%2BC0BW%2FjjAFAIUkkMQChrJL9HUF7Ylw6FX6Nny5X&X-Amz-Signature=5aaa4dbc1b557d678704c2f578af3c75c0932a1cbbc94a65a4b1f5bea3a92094&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZMDHYE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3wgG0pX4ivPzucW8Yb%2Fy8f534XmQWcmv7JY4WC53nQIgTBY06cQZuww9zMqe8cwWPx%2F0F01s6D0pIZXmYUebRBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ivID0ZADCqlrQICrcA%2FDkyFwVd3vpGgbojNC5fVdokSpwArOco9mzHOJQXV9IRAaj2DDjPR3NLuSTxuCb7cBrm%2BxhLl2%2B8%2BPgm4N1gc4kMLg0fEyP7YbEA0lBX1ucELgqZi%2FoIph5yrn%2BJu7J5v0Dkh5RdVJai%2FpK6WvKh3LKCL50qnU%2Bs8NQq3uUFqVK8jo2wwHycol%2FP8lm6Mb4kpuUtL9M9RbJfjFs7X7X5WT%2F335P3dj7Y7t%2BkG36sigzuF9wJ2Ck%2BKDD%2BmmzKtIcqOMs1KL5yvvNcTNVcQubBFe2fac0wTPB9iVM%2FGcrnMn8Wml4%2BJrfBPScpyEotXWtpn%2FmUjurTNonqIs%2B%2F58z6qEwGV3V71Egk8kHatqrLEXtL5ikVlBTbtdYWWA3WJrxFByVN%2FeYoBgzUrIQEyOusQT5aJmCxBnKwH2NzUspSjtf9rG7UQ%2F%2BlZNSQvFwMK6yc8XyK993KOlBx0VufIUa3dNH0p4rBO0v99wZKePsOAMuVpGrMn7qv5ZTnvgOTVk4w1QMpkk%2BPR8AgeT4iQoUpKuf%2BPXsCD9fpa7THZFSh2rh8YUHk3FXHYqCIPvJBVS8DmrH53LM8w0EdHb%2FNn%2BJxrT%2BKB8%2BeD0ubT%2BSDZ2y4ZZRGL7MfHO6dM3XUah8MKfZy74GOqUBWF0uWTpRXHkjfZAUuH9%2B2SfksYt5eOkQhdq2mN%2BzM%2ByhI6so1Pf1zHeBMzg0sbZ6CsO1cnxNmGL2B2LbSvOyhsAjNlX66ryzWMeyZrDBPHpmLChU6K6yuMX6JvOL4%2Bf03NWFwPIWPy4vvFM6N2pofBT6qEzUYgOfhcBC4lDgZSR%2Bo2VqxocJJ%2BC0BW%2FjjAFAIUkkMQChrJL9HUF7Ylw6FX6Nny5X&X-Amz-Signature=4107a9aa7c44c7b965232bbe9feb04b0369274d34db71e33061c5f509fc8f78f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZMDHYE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3wgG0pX4ivPzucW8Yb%2Fy8f534XmQWcmv7JY4WC53nQIgTBY06cQZuww9zMqe8cwWPx%2F0F01s6D0pIZXmYUebRBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ivID0ZADCqlrQICrcA%2FDkyFwVd3vpGgbojNC5fVdokSpwArOco9mzHOJQXV9IRAaj2DDjPR3NLuSTxuCb7cBrm%2BxhLl2%2B8%2BPgm4N1gc4kMLg0fEyP7YbEA0lBX1ucELgqZi%2FoIph5yrn%2BJu7J5v0Dkh5RdVJai%2FpK6WvKh3LKCL50qnU%2Bs8NQq3uUFqVK8jo2wwHycol%2FP8lm6Mb4kpuUtL9M9RbJfjFs7X7X5WT%2F335P3dj7Y7t%2BkG36sigzuF9wJ2Ck%2BKDD%2BmmzKtIcqOMs1KL5yvvNcTNVcQubBFe2fac0wTPB9iVM%2FGcrnMn8Wml4%2BJrfBPScpyEotXWtpn%2FmUjurTNonqIs%2B%2F58z6qEwGV3V71Egk8kHatqrLEXtL5ikVlBTbtdYWWA3WJrxFByVN%2FeYoBgzUrIQEyOusQT5aJmCxBnKwH2NzUspSjtf9rG7UQ%2F%2BlZNSQvFwMK6yc8XyK993KOlBx0VufIUa3dNH0p4rBO0v99wZKePsOAMuVpGrMn7qv5ZTnvgOTVk4w1QMpkk%2BPR8AgeT4iQoUpKuf%2BPXsCD9fpa7THZFSh2rh8YUHk3FXHYqCIPvJBVS8DmrH53LM8w0EdHb%2FNn%2BJxrT%2BKB8%2BeD0ubT%2BSDZ2y4ZZRGL7MfHO6dM3XUah8MKfZy74GOqUBWF0uWTpRXHkjfZAUuH9%2B2SfksYt5eOkQhdq2mN%2BzM%2ByhI6so1Pf1zHeBMzg0sbZ6CsO1cnxNmGL2B2LbSvOyhsAjNlX66ryzWMeyZrDBPHpmLChU6K6yuMX6JvOL4%2Bf03NWFwPIWPy4vvFM6N2pofBT6qEzUYgOfhcBC4lDgZSR%2Bo2VqxocJJ%2BC0BW%2FjjAFAIUkkMQChrJL9HUF7Ylw6FX6Nny5X&X-Amz-Signature=877f4565df9689ecffcd06af4967bed6a7ee1ea2c3230147039dc71ea4831d52&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZMDHYE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh3wgG0pX4ivPzucW8Yb%2Fy8f534XmQWcmv7JY4WC53nQIgTBY06cQZuww9zMqe8cwWPx%2F0F01s6D0pIZXmYUebRBAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3ivID0ZADCqlrQICrcA%2FDkyFwVd3vpGgbojNC5fVdokSpwArOco9mzHOJQXV9IRAaj2DDjPR3NLuSTxuCb7cBrm%2BxhLl2%2B8%2BPgm4N1gc4kMLg0fEyP7YbEA0lBX1ucELgqZi%2FoIph5yrn%2BJu7J5v0Dkh5RdVJai%2FpK6WvKh3LKCL50qnU%2Bs8NQq3uUFqVK8jo2wwHycol%2FP8lm6Mb4kpuUtL9M9RbJfjFs7X7X5WT%2F335P3dj7Y7t%2BkG36sigzuF9wJ2Ck%2BKDD%2BmmzKtIcqOMs1KL5yvvNcTNVcQubBFe2fac0wTPB9iVM%2FGcrnMn8Wml4%2BJrfBPScpyEotXWtpn%2FmUjurTNonqIs%2B%2F58z6qEwGV3V71Egk8kHatqrLEXtL5ikVlBTbtdYWWA3WJrxFByVN%2FeYoBgzUrIQEyOusQT5aJmCxBnKwH2NzUspSjtf9rG7UQ%2F%2BlZNSQvFwMK6yc8XyK993KOlBx0VufIUa3dNH0p4rBO0v99wZKePsOAMuVpGrMn7qv5ZTnvgOTVk4w1QMpkk%2BPR8AgeT4iQoUpKuf%2BPXsCD9fpa7THZFSh2rh8YUHk3FXHYqCIPvJBVS8DmrH53LM8w0EdHb%2FNn%2BJxrT%2BKB8%2BeD0ubT%2BSDZ2y4ZZRGL7MfHO6dM3XUah8MKfZy74GOqUBWF0uWTpRXHkjfZAUuH9%2B2SfksYt5eOkQhdq2mN%2BzM%2ByhI6so1Pf1zHeBMzg0sbZ6CsO1cnxNmGL2B2LbSvOyhsAjNlX66ryzWMeyZrDBPHpmLChU6K6yuMX6JvOL4%2Bf03NWFwPIWPy4vvFM6N2pofBT6qEzUYgOfhcBC4lDgZSR%2Bo2VqxocJJ%2BC0BW%2FjjAFAIUkkMQChrJL9HUF7Ylw6FX6Nny5X&X-Amz-Signature=8de437a25a852261090c0734d7734cd6ce65bf8c57b6854fd721494575446e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
