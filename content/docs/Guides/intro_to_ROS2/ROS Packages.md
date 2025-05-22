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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV4K3RD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDUtvyzdKiHDMEeEbL50KMHhigGw5hlWcT8HY80ML4j2wIgExc7y%2FWiLMiNeG4EjCnsjeyqAAs4GS9IsPQS%2BFPTDmIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH78O4zx8msI4kC2yrcA%2BZ5A5rk%2F%2B3I9WQ06DOr%2F0q%2BPf2E60PBv0tEXrzqmXk21Nb86Aj9yEs90GcFkAPazQfzroWWBXW96XCKAa7ftIOxhxyQMQMPfQ6WvvuPJDlm5kJJI1unpR%2Fv6HHmZUTs%2FO%2BXthVqUI%2F%2BPS%2BR0NNh2PFdhQsNItKE2BBbWuRT8McMr2lcU7XjpwgtUjryUmb9ZJE%2B0RO0r1iB9pShNTIMEvkTe%2B9izi31lw1eVHuh87FTmykLrbTjQkhn6d9UPubwA7%2FAIhtxwRs6eC%2F9pOCTd4%2Fi1GJudpvUDjENwyHE37Els1KRkr9xB5A7fqyU4vXpnrznmQ7LSnP1Rtoosr2zkWf2iBowoXN1sUBEFc5PtAaNfJNV9I7JN%2FCqrw6mM7KHHT6vnf3ceXeCt6bFG1k3ZQsCgM0YZNG%2BVxpIj%2BIUmtHYX8rMOpVu8bfrnm%2BnC6x8%2BIZI2OvfXZfWmfPUZP1gz8HD4efm%2FOCpfz8oonXTYbXlykvrcJ36FLSvKezWGoHpMkdC9tkvhjGTD8FYCE8HKi%2Bx9Ro0TxClyvhL7PSY%2BE7SVSxsMf%2FMUqM0PxUXjKuc6Bo%2B%2FuduekpIdumGgHJ7wDplVZmbdGo6TONv3%2Fr4n08EjDJ1RN8vdYxp7SVqMKuUusEGOqUB782Erlwt50aJEnrD5GK%2FckZ2xVxjU0SJ2393Jk3q52czjYSiTJ%2BhwKUbY9jycq9T96563CJRnFnCTPga3RJrCZSpSTg2RUUQUWW26XcohmuV0JMQAbZITTCezCefGsIozScf8U8K5zWBuwYTYISirfmtFRm%2F7lqslpaD09cyc6lAjdMYkFCmbmYAR8SjjMK5R7ATqirlTFjTmRM9%2Byw7Tl8hqF4v&X-Amz-Signature=4f287c194fc15e64ea647ca56fdd8c2339267b1b888607435248256bc8936990&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV4K3RD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDUtvyzdKiHDMEeEbL50KMHhigGw5hlWcT8HY80ML4j2wIgExc7y%2FWiLMiNeG4EjCnsjeyqAAs4GS9IsPQS%2BFPTDmIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH78O4zx8msI4kC2yrcA%2BZ5A5rk%2F%2B3I9WQ06DOr%2F0q%2BPf2E60PBv0tEXrzqmXk21Nb86Aj9yEs90GcFkAPazQfzroWWBXW96XCKAa7ftIOxhxyQMQMPfQ6WvvuPJDlm5kJJI1unpR%2Fv6HHmZUTs%2FO%2BXthVqUI%2F%2BPS%2BR0NNh2PFdhQsNItKE2BBbWuRT8McMr2lcU7XjpwgtUjryUmb9ZJE%2B0RO0r1iB9pShNTIMEvkTe%2B9izi31lw1eVHuh87FTmykLrbTjQkhn6d9UPubwA7%2FAIhtxwRs6eC%2F9pOCTd4%2Fi1GJudpvUDjENwyHE37Els1KRkr9xB5A7fqyU4vXpnrznmQ7LSnP1Rtoosr2zkWf2iBowoXN1sUBEFc5PtAaNfJNV9I7JN%2FCqrw6mM7KHHT6vnf3ceXeCt6bFG1k3ZQsCgM0YZNG%2BVxpIj%2BIUmtHYX8rMOpVu8bfrnm%2BnC6x8%2BIZI2OvfXZfWmfPUZP1gz8HD4efm%2FOCpfz8oonXTYbXlykvrcJ36FLSvKezWGoHpMkdC9tkvhjGTD8FYCE8HKi%2Bx9Ro0TxClyvhL7PSY%2BE7SVSxsMf%2FMUqM0PxUXjKuc6Bo%2B%2FuduekpIdumGgHJ7wDplVZmbdGo6TONv3%2Fr4n08EjDJ1RN8vdYxp7SVqMKuUusEGOqUB782Erlwt50aJEnrD5GK%2FckZ2xVxjU0SJ2393Jk3q52czjYSiTJ%2BhwKUbY9jycq9T96563CJRnFnCTPga3RJrCZSpSTg2RUUQUWW26XcohmuV0JMQAbZITTCezCefGsIozScf8U8K5zWBuwYTYISirfmtFRm%2F7lqslpaD09cyc6lAjdMYkFCmbmYAR8SjjMK5R7ATqirlTFjTmRM9%2Byw7Tl8hqF4v&X-Amz-Signature=53c9da1095ebf9089eb90fd6cbfaf144e7243c201e5b37762051e87629149d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV4K3RD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDUtvyzdKiHDMEeEbL50KMHhigGw5hlWcT8HY80ML4j2wIgExc7y%2FWiLMiNeG4EjCnsjeyqAAs4GS9IsPQS%2BFPTDmIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH78O4zx8msI4kC2yrcA%2BZ5A5rk%2F%2B3I9WQ06DOr%2F0q%2BPf2E60PBv0tEXrzqmXk21Nb86Aj9yEs90GcFkAPazQfzroWWBXW96XCKAa7ftIOxhxyQMQMPfQ6WvvuPJDlm5kJJI1unpR%2Fv6HHmZUTs%2FO%2BXthVqUI%2F%2BPS%2BR0NNh2PFdhQsNItKE2BBbWuRT8McMr2lcU7XjpwgtUjryUmb9ZJE%2B0RO0r1iB9pShNTIMEvkTe%2B9izi31lw1eVHuh87FTmykLrbTjQkhn6d9UPubwA7%2FAIhtxwRs6eC%2F9pOCTd4%2Fi1GJudpvUDjENwyHE37Els1KRkr9xB5A7fqyU4vXpnrznmQ7LSnP1Rtoosr2zkWf2iBowoXN1sUBEFc5PtAaNfJNV9I7JN%2FCqrw6mM7KHHT6vnf3ceXeCt6bFG1k3ZQsCgM0YZNG%2BVxpIj%2BIUmtHYX8rMOpVu8bfrnm%2BnC6x8%2BIZI2OvfXZfWmfPUZP1gz8HD4efm%2FOCpfz8oonXTYbXlykvrcJ36FLSvKezWGoHpMkdC9tkvhjGTD8FYCE8HKi%2Bx9Ro0TxClyvhL7PSY%2BE7SVSxsMf%2FMUqM0PxUXjKuc6Bo%2B%2FuduekpIdumGgHJ7wDplVZmbdGo6TONv3%2Fr4n08EjDJ1RN8vdYxp7SVqMKuUusEGOqUB782Erlwt50aJEnrD5GK%2FckZ2xVxjU0SJ2393Jk3q52czjYSiTJ%2BhwKUbY9jycq9T96563CJRnFnCTPga3RJrCZSpSTg2RUUQUWW26XcohmuV0JMQAbZITTCezCefGsIozScf8U8K5zWBuwYTYISirfmtFRm%2F7lqslpaD09cyc6lAjdMYkFCmbmYAR8SjjMK5R7ATqirlTFjTmRM9%2Byw7Tl8hqF4v&X-Amz-Signature=dda25fa11b43df8f48b530397b809ca2ce33aa72e9e27f8e520d9fda7bed049b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV4K3RD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDUtvyzdKiHDMEeEbL50KMHhigGw5hlWcT8HY80ML4j2wIgExc7y%2FWiLMiNeG4EjCnsjeyqAAs4GS9IsPQS%2BFPTDmIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH78O4zx8msI4kC2yrcA%2BZ5A5rk%2F%2B3I9WQ06DOr%2F0q%2BPf2E60PBv0tEXrzqmXk21Nb86Aj9yEs90GcFkAPazQfzroWWBXW96XCKAa7ftIOxhxyQMQMPfQ6WvvuPJDlm5kJJI1unpR%2Fv6HHmZUTs%2FO%2BXthVqUI%2F%2BPS%2BR0NNh2PFdhQsNItKE2BBbWuRT8McMr2lcU7XjpwgtUjryUmb9ZJE%2B0RO0r1iB9pShNTIMEvkTe%2B9izi31lw1eVHuh87FTmykLrbTjQkhn6d9UPubwA7%2FAIhtxwRs6eC%2F9pOCTd4%2Fi1GJudpvUDjENwyHE37Els1KRkr9xB5A7fqyU4vXpnrznmQ7LSnP1Rtoosr2zkWf2iBowoXN1sUBEFc5PtAaNfJNV9I7JN%2FCqrw6mM7KHHT6vnf3ceXeCt6bFG1k3ZQsCgM0YZNG%2BVxpIj%2BIUmtHYX8rMOpVu8bfrnm%2BnC6x8%2BIZI2OvfXZfWmfPUZP1gz8HD4efm%2FOCpfz8oonXTYbXlykvrcJ36FLSvKezWGoHpMkdC9tkvhjGTD8FYCE8HKi%2Bx9Ro0TxClyvhL7PSY%2BE7SVSxsMf%2FMUqM0PxUXjKuc6Bo%2B%2FuduekpIdumGgHJ7wDplVZmbdGo6TONv3%2Fr4n08EjDJ1RN8vdYxp7SVqMKuUusEGOqUB782Erlwt50aJEnrD5GK%2FckZ2xVxjU0SJ2393Jk3q52czjYSiTJ%2BhwKUbY9jycq9T96563CJRnFnCTPga3RJrCZSpSTg2RUUQUWW26XcohmuV0JMQAbZITTCezCefGsIozScf8U8K5zWBuwYTYISirfmtFRm%2F7lqslpaD09cyc6lAjdMYkFCmbmYAR8SjjMK5R7ATqirlTFjTmRM9%2Byw7Tl8hqF4v&X-Amz-Signature=3edf433d7b5d554a6f56b2b80bbaf4369694bcfa911b6b4e5a4ec2f1d90954ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV4K3RD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDUtvyzdKiHDMEeEbL50KMHhigGw5hlWcT8HY80ML4j2wIgExc7y%2FWiLMiNeG4EjCnsjeyqAAs4GS9IsPQS%2BFPTDmIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH78O4zx8msI4kC2yrcA%2BZ5A5rk%2F%2B3I9WQ06DOr%2F0q%2BPf2E60PBv0tEXrzqmXk21Nb86Aj9yEs90GcFkAPazQfzroWWBXW96XCKAa7ftIOxhxyQMQMPfQ6WvvuPJDlm5kJJI1unpR%2Fv6HHmZUTs%2FO%2BXthVqUI%2F%2BPS%2BR0NNh2PFdhQsNItKE2BBbWuRT8McMr2lcU7XjpwgtUjryUmb9ZJE%2B0RO0r1iB9pShNTIMEvkTe%2B9izi31lw1eVHuh87FTmykLrbTjQkhn6d9UPubwA7%2FAIhtxwRs6eC%2F9pOCTd4%2Fi1GJudpvUDjENwyHE37Els1KRkr9xB5A7fqyU4vXpnrznmQ7LSnP1Rtoosr2zkWf2iBowoXN1sUBEFc5PtAaNfJNV9I7JN%2FCqrw6mM7KHHT6vnf3ceXeCt6bFG1k3ZQsCgM0YZNG%2BVxpIj%2BIUmtHYX8rMOpVu8bfrnm%2BnC6x8%2BIZI2OvfXZfWmfPUZP1gz8HD4efm%2FOCpfz8oonXTYbXlykvrcJ36FLSvKezWGoHpMkdC9tkvhjGTD8FYCE8HKi%2Bx9Ro0TxClyvhL7PSY%2BE7SVSxsMf%2FMUqM0PxUXjKuc6Bo%2B%2FuduekpIdumGgHJ7wDplVZmbdGo6TONv3%2Fr4n08EjDJ1RN8vdYxp7SVqMKuUusEGOqUB782Erlwt50aJEnrD5GK%2FckZ2xVxjU0SJ2393Jk3q52czjYSiTJ%2BhwKUbY9jycq9T96563CJRnFnCTPga3RJrCZSpSTg2RUUQUWW26XcohmuV0JMQAbZITTCezCefGsIozScf8U8K5zWBuwYTYISirfmtFRm%2F7lqslpaD09cyc6lAjdMYkFCmbmYAR8SjjMK5R7ATqirlTFjTmRM9%2Byw7Tl8hqF4v&X-Amz-Signature=c920257160f997c94ac94a944870cc5437c4ed703990c7c3ea8b0769039881d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV4K3RD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDUtvyzdKiHDMEeEbL50KMHhigGw5hlWcT8HY80ML4j2wIgExc7y%2FWiLMiNeG4EjCnsjeyqAAs4GS9IsPQS%2BFPTDmIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH78O4zx8msI4kC2yrcA%2BZ5A5rk%2F%2B3I9WQ06DOr%2F0q%2BPf2E60PBv0tEXrzqmXk21Nb86Aj9yEs90GcFkAPazQfzroWWBXW96XCKAa7ftIOxhxyQMQMPfQ6WvvuPJDlm5kJJI1unpR%2Fv6HHmZUTs%2FO%2BXthVqUI%2F%2BPS%2BR0NNh2PFdhQsNItKE2BBbWuRT8McMr2lcU7XjpwgtUjryUmb9ZJE%2B0RO0r1iB9pShNTIMEvkTe%2B9izi31lw1eVHuh87FTmykLrbTjQkhn6d9UPubwA7%2FAIhtxwRs6eC%2F9pOCTd4%2Fi1GJudpvUDjENwyHE37Els1KRkr9xB5A7fqyU4vXpnrznmQ7LSnP1Rtoosr2zkWf2iBowoXN1sUBEFc5PtAaNfJNV9I7JN%2FCqrw6mM7KHHT6vnf3ceXeCt6bFG1k3ZQsCgM0YZNG%2BVxpIj%2BIUmtHYX8rMOpVu8bfrnm%2BnC6x8%2BIZI2OvfXZfWmfPUZP1gz8HD4efm%2FOCpfz8oonXTYbXlykvrcJ36FLSvKezWGoHpMkdC9tkvhjGTD8FYCE8HKi%2Bx9Ro0TxClyvhL7PSY%2BE7SVSxsMf%2FMUqM0PxUXjKuc6Bo%2B%2FuduekpIdumGgHJ7wDplVZmbdGo6TONv3%2Fr4n08EjDJ1RN8vdYxp7SVqMKuUusEGOqUB782Erlwt50aJEnrD5GK%2FckZ2xVxjU0SJ2393Jk3q52czjYSiTJ%2BhwKUbY9jycq9T96563CJRnFnCTPga3RJrCZSpSTg2RUUQUWW26XcohmuV0JMQAbZITTCezCefGsIozScf8U8K5zWBuwYTYISirfmtFRm%2F7lqslpaD09cyc6lAjdMYkFCmbmYAR8SjjMK5R7ATqirlTFjTmRM9%2Byw7Tl8hqF4v&X-Amz-Signature=cb48f4ee4897933cfbf6c3dfac46f2a74ac9be3a64e64806d2da471600223d49&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSV4K3RD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDUtvyzdKiHDMEeEbL50KMHhigGw5hlWcT8HY80ML4j2wIgExc7y%2FWiLMiNeG4EjCnsjeyqAAs4GS9IsPQS%2BFPTDmIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH78O4zx8msI4kC2yrcA%2BZ5A5rk%2F%2B3I9WQ06DOr%2F0q%2BPf2E60PBv0tEXrzqmXk21Nb86Aj9yEs90GcFkAPazQfzroWWBXW96XCKAa7ftIOxhxyQMQMPfQ6WvvuPJDlm5kJJI1unpR%2Fv6HHmZUTs%2FO%2BXthVqUI%2F%2BPS%2BR0NNh2PFdhQsNItKE2BBbWuRT8McMr2lcU7XjpwgtUjryUmb9ZJE%2B0RO0r1iB9pShNTIMEvkTe%2B9izi31lw1eVHuh87FTmykLrbTjQkhn6d9UPubwA7%2FAIhtxwRs6eC%2F9pOCTd4%2Fi1GJudpvUDjENwyHE37Els1KRkr9xB5A7fqyU4vXpnrznmQ7LSnP1Rtoosr2zkWf2iBowoXN1sUBEFc5PtAaNfJNV9I7JN%2FCqrw6mM7KHHT6vnf3ceXeCt6bFG1k3ZQsCgM0YZNG%2BVxpIj%2BIUmtHYX8rMOpVu8bfrnm%2BnC6x8%2BIZI2OvfXZfWmfPUZP1gz8HD4efm%2FOCpfz8oonXTYbXlykvrcJ36FLSvKezWGoHpMkdC9tkvhjGTD8FYCE8HKi%2Bx9Ro0TxClyvhL7PSY%2BE7SVSxsMf%2FMUqM0PxUXjKuc6Bo%2B%2FuduekpIdumGgHJ7wDplVZmbdGo6TONv3%2Fr4n08EjDJ1RN8vdYxp7SVqMKuUusEGOqUB782Erlwt50aJEnrD5GK%2FckZ2xVxjU0SJ2393Jk3q52czjYSiTJ%2BhwKUbY9jycq9T96563CJRnFnCTPga3RJrCZSpSTg2RUUQUWW26XcohmuV0JMQAbZITTCezCefGsIozScf8U8K5zWBuwYTYISirfmtFRm%2F7lqslpaD09cyc6lAjdMYkFCmbmYAR8SjjMK5R7ATqirlTFjTmRM9%2Byw7Tl8hqF4v&X-Amz-Signature=a46972b5ae49521c3439d159acfd7fdc5ebf8888d582b1099a7c079751be15dc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
