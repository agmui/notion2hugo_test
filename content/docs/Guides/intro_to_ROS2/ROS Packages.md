---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWERSPFN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUWK5YW9bmLTUBziw6ezWDEOpSI1WZWRAHOhJ8%2FBJ0GAiBzlsQv8R7eZ1ilqo4ah3pAQjmy8jJaFhZfcsA5Z5qtGyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FcXux39tgvl4%2FmBKtwDaXws3WT6A5FjqdIWQhgyXFO4hLyaS8qWKICDC%2BjqE4c7aRHu2AXchIcgrLGr0LGMg1RWdEmTY9p1nZbsWPFc9uCumTFH%2Bw4nr3BGVQqvzC8gM7xQ0m23JI3D95%2FsA7mQVtPxe0io24yVB5X186bH42wIn9k5oqLDmKE1VDuONwDpgq%2F%2FRQ1yewoPg%2FpL0mK50vdY8wJEWcYI0LtQpwK062DwAKYzLtyD9ovORtW8ss65XZOFPvNcteJXf9SKE8oDY7DFCbQpEmTMDsA0p6k391iTdeUkQ2h9fMdr3WHD1GbdMR3EqgINoEDtq7cpfWXNybvunqdVPjehG5IzH4XARPWHC39S8%2BWUAprpht0v1iui6lmuMPPtN9j27WjlVx%2Bbqlh7QeiZM%2BqVqZTbw8Wzr5VBlZm3toVFAyg14WN5Pc8fND%2BDe0fkbi30Y8dNVjgkrj1TXl2OrWUCdKuNLTSmo1zR48nK8KGcLWI85cz0%2B9YF1lUKik2gsMMrUgQf%2B2lDYYaju4SjctUJuuTAr8xtYisazHJw7f451IW%2FnbKQT%2BIxBuUAhPkKQJ0HAnVqE9gFnLDNpc%2B7cKHn9GU03y0ORCBVRi%2FNMbgExIEcmqrIzpzHulmbVGouwgAizp4wvLPGxwY6pgEa3tHZrtjN%2BUGWItmLHkplYnj1c2r7dRvys5lZizpsoPU%2Bgtgfor9WMIs1eqn72KDegsIXrWDefJrAD6ccnMhT0mm90EssyjKvewtEJgmAbDSGx0EAiVzsZroSihqyuEgiyslcxOhXfuPuasJx5xCCpKlXIw4NQFDEhnO%2FzhN%2BMk9DQCTwACR3l8GN7dKRHq1PRhvIgMSFyNINpGMG6eaWd1W9ZggN&X-Amz-Signature=cf23f34344d640462c4d319e570de35f123717aff337cdeced5cc8518d2befe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWERSPFN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUWK5YW9bmLTUBziw6ezWDEOpSI1WZWRAHOhJ8%2FBJ0GAiBzlsQv8R7eZ1ilqo4ah3pAQjmy8jJaFhZfcsA5Z5qtGyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FcXux39tgvl4%2FmBKtwDaXws3WT6A5FjqdIWQhgyXFO4hLyaS8qWKICDC%2BjqE4c7aRHu2AXchIcgrLGr0LGMg1RWdEmTY9p1nZbsWPFc9uCumTFH%2Bw4nr3BGVQqvzC8gM7xQ0m23JI3D95%2FsA7mQVtPxe0io24yVB5X186bH42wIn9k5oqLDmKE1VDuONwDpgq%2F%2FRQ1yewoPg%2FpL0mK50vdY8wJEWcYI0LtQpwK062DwAKYzLtyD9ovORtW8ss65XZOFPvNcteJXf9SKE8oDY7DFCbQpEmTMDsA0p6k391iTdeUkQ2h9fMdr3WHD1GbdMR3EqgINoEDtq7cpfWXNybvunqdVPjehG5IzH4XARPWHC39S8%2BWUAprpht0v1iui6lmuMPPtN9j27WjlVx%2Bbqlh7QeiZM%2BqVqZTbw8Wzr5VBlZm3toVFAyg14WN5Pc8fND%2BDe0fkbi30Y8dNVjgkrj1TXl2OrWUCdKuNLTSmo1zR48nK8KGcLWI85cz0%2B9YF1lUKik2gsMMrUgQf%2B2lDYYaju4SjctUJuuTAr8xtYisazHJw7f451IW%2FnbKQT%2BIxBuUAhPkKQJ0HAnVqE9gFnLDNpc%2B7cKHn9GU03y0ORCBVRi%2FNMbgExIEcmqrIzpzHulmbVGouwgAizp4wvLPGxwY6pgEa3tHZrtjN%2BUGWItmLHkplYnj1c2r7dRvys5lZizpsoPU%2Bgtgfor9WMIs1eqn72KDegsIXrWDefJrAD6ccnMhT0mm90EssyjKvewtEJgmAbDSGx0EAiVzsZroSihqyuEgiyslcxOhXfuPuasJx5xCCpKlXIw4NQFDEhnO%2FzhN%2BMk9DQCTwACR3l8GN7dKRHq1PRhvIgMSFyNINpGMG6eaWd1W9ZggN&X-Amz-Signature=99bd15066076b9cc638e1d607ba1eca0cac3f2a1b7a8b89b2d3fc9fe295a44be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWERSPFN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUWK5YW9bmLTUBziw6ezWDEOpSI1WZWRAHOhJ8%2FBJ0GAiBzlsQv8R7eZ1ilqo4ah3pAQjmy8jJaFhZfcsA5Z5qtGyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FcXux39tgvl4%2FmBKtwDaXws3WT6A5FjqdIWQhgyXFO4hLyaS8qWKICDC%2BjqE4c7aRHu2AXchIcgrLGr0LGMg1RWdEmTY9p1nZbsWPFc9uCumTFH%2Bw4nr3BGVQqvzC8gM7xQ0m23JI3D95%2FsA7mQVtPxe0io24yVB5X186bH42wIn9k5oqLDmKE1VDuONwDpgq%2F%2FRQ1yewoPg%2FpL0mK50vdY8wJEWcYI0LtQpwK062DwAKYzLtyD9ovORtW8ss65XZOFPvNcteJXf9SKE8oDY7DFCbQpEmTMDsA0p6k391iTdeUkQ2h9fMdr3WHD1GbdMR3EqgINoEDtq7cpfWXNybvunqdVPjehG5IzH4XARPWHC39S8%2BWUAprpht0v1iui6lmuMPPtN9j27WjlVx%2Bbqlh7QeiZM%2BqVqZTbw8Wzr5VBlZm3toVFAyg14WN5Pc8fND%2BDe0fkbi30Y8dNVjgkrj1TXl2OrWUCdKuNLTSmo1zR48nK8KGcLWI85cz0%2B9YF1lUKik2gsMMrUgQf%2B2lDYYaju4SjctUJuuTAr8xtYisazHJw7f451IW%2FnbKQT%2BIxBuUAhPkKQJ0HAnVqE9gFnLDNpc%2B7cKHn9GU03y0ORCBVRi%2FNMbgExIEcmqrIzpzHulmbVGouwgAizp4wvLPGxwY6pgEa3tHZrtjN%2BUGWItmLHkplYnj1c2r7dRvys5lZizpsoPU%2Bgtgfor9WMIs1eqn72KDegsIXrWDefJrAD6ccnMhT0mm90EssyjKvewtEJgmAbDSGx0EAiVzsZroSihqyuEgiyslcxOhXfuPuasJx5xCCpKlXIw4NQFDEhnO%2FzhN%2BMk9DQCTwACR3l8GN7dKRHq1PRhvIgMSFyNINpGMG6eaWd1W9ZggN&X-Amz-Signature=b6a71a842d83eac8754e916c9d036eabde48d831c4aaf3b2845d104abe469704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWERSPFN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUWK5YW9bmLTUBziw6ezWDEOpSI1WZWRAHOhJ8%2FBJ0GAiBzlsQv8R7eZ1ilqo4ah3pAQjmy8jJaFhZfcsA5Z5qtGyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FcXux39tgvl4%2FmBKtwDaXws3WT6A5FjqdIWQhgyXFO4hLyaS8qWKICDC%2BjqE4c7aRHu2AXchIcgrLGr0LGMg1RWdEmTY9p1nZbsWPFc9uCumTFH%2Bw4nr3BGVQqvzC8gM7xQ0m23JI3D95%2FsA7mQVtPxe0io24yVB5X186bH42wIn9k5oqLDmKE1VDuONwDpgq%2F%2FRQ1yewoPg%2FpL0mK50vdY8wJEWcYI0LtQpwK062DwAKYzLtyD9ovORtW8ss65XZOFPvNcteJXf9SKE8oDY7DFCbQpEmTMDsA0p6k391iTdeUkQ2h9fMdr3WHD1GbdMR3EqgINoEDtq7cpfWXNybvunqdVPjehG5IzH4XARPWHC39S8%2BWUAprpht0v1iui6lmuMPPtN9j27WjlVx%2Bbqlh7QeiZM%2BqVqZTbw8Wzr5VBlZm3toVFAyg14WN5Pc8fND%2BDe0fkbi30Y8dNVjgkrj1TXl2OrWUCdKuNLTSmo1zR48nK8KGcLWI85cz0%2B9YF1lUKik2gsMMrUgQf%2B2lDYYaju4SjctUJuuTAr8xtYisazHJw7f451IW%2FnbKQT%2BIxBuUAhPkKQJ0HAnVqE9gFnLDNpc%2B7cKHn9GU03y0ORCBVRi%2FNMbgExIEcmqrIzpzHulmbVGouwgAizp4wvLPGxwY6pgEa3tHZrtjN%2BUGWItmLHkplYnj1c2r7dRvys5lZizpsoPU%2Bgtgfor9WMIs1eqn72KDegsIXrWDefJrAD6ccnMhT0mm90EssyjKvewtEJgmAbDSGx0EAiVzsZroSihqyuEgiyslcxOhXfuPuasJx5xCCpKlXIw4NQFDEhnO%2FzhN%2BMk9DQCTwACR3l8GN7dKRHq1PRhvIgMSFyNINpGMG6eaWd1W9ZggN&X-Amz-Signature=d6a51a8670831e84341f2dd9426537d743aecb4375b7ffc35f85d68c7522b2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWERSPFN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUWK5YW9bmLTUBziw6ezWDEOpSI1WZWRAHOhJ8%2FBJ0GAiBzlsQv8R7eZ1ilqo4ah3pAQjmy8jJaFhZfcsA5Z5qtGyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FcXux39tgvl4%2FmBKtwDaXws3WT6A5FjqdIWQhgyXFO4hLyaS8qWKICDC%2BjqE4c7aRHu2AXchIcgrLGr0LGMg1RWdEmTY9p1nZbsWPFc9uCumTFH%2Bw4nr3BGVQqvzC8gM7xQ0m23JI3D95%2FsA7mQVtPxe0io24yVB5X186bH42wIn9k5oqLDmKE1VDuONwDpgq%2F%2FRQ1yewoPg%2FpL0mK50vdY8wJEWcYI0LtQpwK062DwAKYzLtyD9ovORtW8ss65XZOFPvNcteJXf9SKE8oDY7DFCbQpEmTMDsA0p6k391iTdeUkQ2h9fMdr3WHD1GbdMR3EqgINoEDtq7cpfWXNybvunqdVPjehG5IzH4XARPWHC39S8%2BWUAprpht0v1iui6lmuMPPtN9j27WjlVx%2Bbqlh7QeiZM%2BqVqZTbw8Wzr5VBlZm3toVFAyg14WN5Pc8fND%2BDe0fkbi30Y8dNVjgkrj1TXl2OrWUCdKuNLTSmo1zR48nK8KGcLWI85cz0%2B9YF1lUKik2gsMMrUgQf%2B2lDYYaju4SjctUJuuTAr8xtYisazHJw7f451IW%2FnbKQT%2BIxBuUAhPkKQJ0HAnVqE9gFnLDNpc%2B7cKHn9GU03y0ORCBVRi%2FNMbgExIEcmqrIzpzHulmbVGouwgAizp4wvLPGxwY6pgEa3tHZrtjN%2BUGWItmLHkplYnj1c2r7dRvys5lZizpsoPU%2Bgtgfor9WMIs1eqn72KDegsIXrWDefJrAD6ccnMhT0mm90EssyjKvewtEJgmAbDSGx0EAiVzsZroSihqyuEgiyslcxOhXfuPuasJx5xCCpKlXIw4NQFDEhnO%2FzhN%2BMk9DQCTwACR3l8GN7dKRHq1PRhvIgMSFyNINpGMG6eaWd1W9ZggN&X-Amz-Signature=e51883ec967b1e095dcd00c710a2fa53810e0f1f7173e8e7d6cee3ac0acc9b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWERSPFN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUWK5YW9bmLTUBziw6ezWDEOpSI1WZWRAHOhJ8%2FBJ0GAiBzlsQv8R7eZ1ilqo4ah3pAQjmy8jJaFhZfcsA5Z5qtGyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FcXux39tgvl4%2FmBKtwDaXws3WT6A5FjqdIWQhgyXFO4hLyaS8qWKICDC%2BjqE4c7aRHu2AXchIcgrLGr0LGMg1RWdEmTY9p1nZbsWPFc9uCumTFH%2Bw4nr3BGVQqvzC8gM7xQ0m23JI3D95%2FsA7mQVtPxe0io24yVB5X186bH42wIn9k5oqLDmKE1VDuONwDpgq%2F%2FRQ1yewoPg%2FpL0mK50vdY8wJEWcYI0LtQpwK062DwAKYzLtyD9ovORtW8ss65XZOFPvNcteJXf9SKE8oDY7DFCbQpEmTMDsA0p6k391iTdeUkQ2h9fMdr3WHD1GbdMR3EqgINoEDtq7cpfWXNybvunqdVPjehG5IzH4XARPWHC39S8%2BWUAprpht0v1iui6lmuMPPtN9j27WjlVx%2Bbqlh7QeiZM%2BqVqZTbw8Wzr5VBlZm3toVFAyg14WN5Pc8fND%2BDe0fkbi30Y8dNVjgkrj1TXl2OrWUCdKuNLTSmo1zR48nK8KGcLWI85cz0%2B9YF1lUKik2gsMMrUgQf%2B2lDYYaju4SjctUJuuTAr8xtYisazHJw7f451IW%2FnbKQT%2BIxBuUAhPkKQJ0HAnVqE9gFnLDNpc%2B7cKHn9GU03y0ORCBVRi%2FNMbgExIEcmqrIzpzHulmbVGouwgAizp4wvLPGxwY6pgEa3tHZrtjN%2BUGWItmLHkplYnj1c2r7dRvys5lZizpsoPU%2Bgtgfor9WMIs1eqn72KDegsIXrWDefJrAD6ccnMhT0mm90EssyjKvewtEJgmAbDSGx0EAiVzsZroSihqyuEgiyslcxOhXfuPuasJx5xCCpKlXIw4NQFDEhnO%2FzhN%2BMk9DQCTwACR3l8GN7dKRHq1PRhvIgMSFyNINpGMG6eaWd1W9ZggN&X-Amz-Signature=045a442d0d5cd7df6ff7c6c06ef15090cb2b609f11dcad0a2d762a3266a09ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWERSPFN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUWK5YW9bmLTUBziw6ezWDEOpSI1WZWRAHOhJ8%2FBJ0GAiBzlsQv8R7eZ1ilqo4ah3pAQjmy8jJaFhZfcsA5Z5qtGyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB%2FcXux39tgvl4%2FmBKtwDaXws3WT6A5FjqdIWQhgyXFO4hLyaS8qWKICDC%2BjqE4c7aRHu2AXchIcgrLGr0LGMg1RWdEmTY9p1nZbsWPFc9uCumTFH%2Bw4nr3BGVQqvzC8gM7xQ0m23JI3D95%2FsA7mQVtPxe0io24yVB5X186bH42wIn9k5oqLDmKE1VDuONwDpgq%2F%2FRQ1yewoPg%2FpL0mK50vdY8wJEWcYI0LtQpwK062DwAKYzLtyD9ovORtW8ss65XZOFPvNcteJXf9SKE8oDY7DFCbQpEmTMDsA0p6k391iTdeUkQ2h9fMdr3WHD1GbdMR3EqgINoEDtq7cpfWXNybvunqdVPjehG5IzH4XARPWHC39S8%2BWUAprpht0v1iui6lmuMPPtN9j27WjlVx%2Bbqlh7QeiZM%2BqVqZTbw8Wzr5VBlZm3toVFAyg14WN5Pc8fND%2BDe0fkbi30Y8dNVjgkrj1TXl2OrWUCdKuNLTSmo1zR48nK8KGcLWI85cz0%2B9YF1lUKik2gsMMrUgQf%2B2lDYYaju4SjctUJuuTAr8xtYisazHJw7f451IW%2FnbKQT%2BIxBuUAhPkKQJ0HAnVqE9gFnLDNpc%2B7cKHn9GU03y0ORCBVRi%2FNMbgExIEcmqrIzpzHulmbVGouwgAizp4wvLPGxwY6pgEa3tHZrtjN%2BUGWItmLHkplYnj1c2r7dRvys5lZizpsoPU%2Bgtgfor9WMIs1eqn72KDegsIXrWDefJrAD6ccnMhT0mm90EssyjKvewtEJgmAbDSGx0EAiVzsZroSihqyuEgiyslcxOhXfuPuasJx5xCCpKlXIw4NQFDEhnO%2FzhN%2BMk9DQCTwACR3l8GN7dKRHq1PRhvIgMSFyNINpGMG6eaWd1W9ZggN&X-Amz-Signature=c292a6d2844be821e71726ec749efe200af7da3c67f42aa84735764d1310ecde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
