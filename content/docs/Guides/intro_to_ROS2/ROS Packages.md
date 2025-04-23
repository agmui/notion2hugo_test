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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422W7TL6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPoQoEUzGir7a6RGlJTbtefRy4ziTM82PHTknDxzSGUwIgBk8NhDa%2BOa5fU6ckLynpgJ%2BGEga7AI3%2B0W%2Bdv8XhYvYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKnxaDWwLSp%2Fo%2FsISrcA7LpDjxx5Mi6C7EO7ie9nihmvja8I9wi0dkfNxDr8R7%2B4ZbTyxaSHsB3MDJ5kYG5lH47kQuqr62HayI3klNygX2yqKGT%2BcKO313VeBrv%2BLG9k6T9ZXwOT2bWDf41lwhXOPBkobXH%2FVhdSNIKYqjHap1RFVxniwQL1PW%2BLS%2BhZoIGpH8MpY2i%2FFyHNtyP7OxswbiX8RXrkUdBPraDYehVfKpjT9P9Eb087l6sODlHZHEz0VqbU%2BsFgIdBPW0%2FOc9Od0%2FVv%2Fx26rGynQmQerEnBGRrjI98vc2rrygmcYUew559y93e6YggnBNSxY0TMPkEIS7QEpHIGmk2xehdRQLDvv8XvOs7Y%2BEiUc3E3sVpOy64FXDSZSYtrOendY49wMDiR107%2Bnp7Pa7JO%2Faqr4roEP7qBJci%2FxJ3x5ZnaKxHvhpteZi7cEhedXGs9N4X%2BlqunxaNGbl7sIDh5IMdiB98PnulP4f9x9r7Of3wRcfxA4ETWTBGuVodkXD3CXHPUfQPOxrfTrKiAV8NkCWVcTnX0%2F5MNRqzddqPgMzbISddyCz2XJ5dcbG0A8y7Lu8VNrKz1Qm6sb0OjveVvy6SMZ6NFXO2onFYpDM8knRabqNu9MCrrAvp0%2BpFXy3o2NJtMJ3XpMAGOqUBsg4ty2BmsIYO%2F5hGIx9oPqYr7JBypbL35XUDrBkf0Oj7gqSCedwyd1vEtLtNnfgtweH4RIyaLwml8eFrOebACNqLskCXoTE%2BOfJUqB%2FUTkUs44ylfCw%2BovSL%2BM9VZlCA9v50dzDwOOLFPR7wU%2FMVauhaB2W0a9VUyb8j%2FA%2Fx%2FGy7DCfZywOlJqL9fgFz2z6VG34ZvTUceO9RVYprtzDneD4dI9e1&X-Amz-Signature=0cf2156c63927e323eb36ede4ca7893b32338a771420145f8c2e8d31a948ad82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422W7TL6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPoQoEUzGir7a6RGlJTbtefRy4ziTM82PHTknDxzSGUwIgBk8NhDa%2BOa5fU6ckLynpgJ%2BGEga7AI3%2B0W%2Bdv8XhYvYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKnxaDWwLSp%2Fo%2FsISrcA7LpDjxx5Mi6C7EO7ie9nihmvja8I9wi0dkfNxDr8R7%2B4ZbTyxaSHsB3MDJ5kYG5lH47kQuqr62HayI3klNygX2yqKGT%2BcKO313VeBrv%2BLG9k6T9ZXwOT2bWDf41lwhXOPBkobXH%2FVhdSNIKYqjHap1RFVxniwQL1PW%2BLS%2BhZoIGpH8MpY2i%2FFyHNtyP7OxswbiX8RXrkUdBPraDYehVfKpjT9P9Eb087l6sODlHZHEz0VqbU%2BsFgIdBPW0%2FOc9Od0%2FVv%2Fx26rGynQmQerEnBGRrjI98vc2rrygmcYUew559y93e6YggnBNSxY0TMPkEIS7QEpHIGmk2xehdRQLDvv8XvOs7Y%2BEiUc3E3sVpOy64FXDSZSYtrOendY49wMDiR107%2Bnp7Pa7JO%2Faqr4roEP7qBJci%2FxJ3x5ZnaKxHvhpteZi7cEhedXGs9N4X%2BlqunxaNGbl7sIDh5IMdiB98PnulP4f9x9r7Of3wRcfxA4ETWTBGuVodkXD3CXHPUfQPOxrfTrKiAV8NkCWVcTnX0%2F5MNRqzddqPgMzbISddyCz2XJ5dcbG0A8y7Lu8VNrKz1Qm6sb0OjveVvy6SMZ6NFXO2onFYpDM8knRabqNu9MCrrAvp0%2BpFXy3o2NJtMJ3XpMAGOqUBsg4ty2BmsIYO%2F5hGIx9oPqYr7JBypbL35XUDrBkf0Oj7gqSCedwyd1vEtLtNnfgtweH4RIyaLwml8eFrOebACNqLskCXoTE%2BOfJUqB%2FUTkUs44ylfCw%2BovSL%2BM9VZlCA9v50dzDwOOLFPR7wU%2FMVauhaB2W0a9VUyb8j%2FA%2Fx%2FGy7DCfZywOlJqL9fgFz2z6VG34ZvTUceO9RVYprtzDneD4dI9e1&X-Amz-Signature=a2e34ddc8136425e328a23bc4de19d9d57c92b92224bdb60eecb24f3686d4099&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422W7TL6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPoQoEUzGir7a6RGlJTbtefRy4ziTM82PHTknDxzSGUwIgBk8NhDa%2BOa5fU6ckLynpgJ%2BGEga7AI3%2B0W%2Bdv8XhYvYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKnxaDWwLSp%2Fo%2FsISrcA7LpDjxx5Mi6C7EO7ie9nihmvja8I9wi0dkfNxDr8R7%2B4ZbTyxaSHsB3MDJ5kYG5lH47kQuqr62HayI3klNygX2yqKGT%2BcKO313VeBrv%2BLG9k6T9ZXwOT2bWDf41lwhXOPBkobXH%2FVhdSNIKYqjHap1RFVxniwQL1PW%2BLS%2BhZoIGpH8MpY2i%2FFyHNtyP7OxswbiX8RXrkUdBPraDYehVfKpjT9P9Eb087l6sODlHZHEz0VqbU%2BsFgIdBPW0%2FOc9Od0%2FVv%2Fx26rGynQmQerEnBGRrjI98vc2rrygmcYUew559y93e6YggnBNSxY0TMPkEIS7QEpHIGmk2xehdRQLDvv8XvOs7Y%2BEiUc3E3sVpOy64FXDSZSYtrOendY49wMDiR107%2Bnp7Pa7JO%2Faqr4roEP7qBJci%2FxJ3x5ZnaKxHvhpteZi7cEhedXGs9N4X%2BlqunxaNGbl7sIDh5IMdiB98PnulP4f9x9r7Of3wRcfxA4ETWTBGuVodkXD3CXHPUfQPOxrfTrKiAV8NkCWVcTnX0%2F5MNRqzddqPgMzbISddyCz2XJ5dcbG0A8y7Lu8VNrKz1Qm6sb0OjveVvy6SMZ6NFXO2onFYpDM8knRabqNu9MCrrAvp0%2BpFXy3o2NJtMJ3XpMAGOqUBsg4ty2BmsIYO%2F5hGIx9oPqYr7JBypbL35XUDrBkf0Oj7gqSCedwyd1vEtLtNnfgtweH4RIyaLwml8eFrOebACNqLskCXoTE%2BOfJUqB%2FUTkUs44ylfCw%2BovSL%2BM9VZlCA9v50dzDwOOLFPR7wU%2FMVauhaB2W0a9VUyb8j%2FA%2Fx%2FGy7DCfZywOlJqL9fgFz2z6VG34ZvTUceO9RVYprtzDneD4dI9e1&X-Amz-Signature=e8adf6d3adf3efda01cf7c7cc4dacfc9d101eeedb27d22aea9ec78898219a106&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422W7TL6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPoQoEUzGir7a6RGlJTbtefRy4ziTM82PHTknDxzSGUwIgBk8NhDa%2BOa5fU6ckLynpgJ%2BGEga7AI3%2B0W%2Bdv8XhYvYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKnxaDWwLSp%2Fo%2FsISrcA7LpDjxx5Mi6C7EO7ie9nihmvja8I9wi0dkfNxDr8R7%2B4ZbTyxaSHsB3MDJ5kYG5lH47kQuqr62HayI3klNygX2yqKGT%2BcKO313VeBrv%2BLG9k6T9ZXwOT2bWDf41lwhXOPBkobXH%2FVhdSNIKYqjHap1RFVxniwQL1PW%2BLS%2BhZoIGpH8MpY2i%2FFyHNtyP7OxswbiX8RXrkUdBPraDYehVfKpjT9P9Eb087l6sODlHZHEz0VqbU%2BsFgIdBPW0%2FOc9Od0%2FVv%2Fx26rGynQmQerEnBGRrjI98vc2rrygmcYUew559y93e6YggnBNSxY0TMPkEIS7QEpHIGmk2xehdRQLDvv8XvOs7Y%2BEiUc3E3sVpOy64FXDSZSYtrOendY49wMDiR107%2Bnp7Pa7JO%2Faqr4roEP7qBJci%2FxJ3x5ZnaKxHvhpteZi7cEhedXGs9N4X%2BlqunxaNGbl7sIDh5IMdiB98PnulP4f9x9r7Of3wRcfxA4ETWTBGuVodkXD3CXHPUfQPOxrfTrKiAV8NkCWVcTnX0%2F5MNRqzddqPgMzbISddyCz2XJ5dcbG0A8y7Lu8VNrKz1Qm6sb0OjveVvy6SMZ6NFXO2onFYpDM8knRabqNu9MCrrAvp0%2BpFXy3o2NJtMJ3XpMAGOqUBsg4ty2BmsIYO%2F5hGIx9oPqYr7JBypbL35XUDrBkf0Oj7gqSCedwyd1vEtLtNnfgtweH4RIyaLwml8eFrOebACNqLskCXoTE%2BOfJUqB%2FUTkUs44ylfCw%2BovSL%2BM9VZlCA9v50dzDwOOLFPR7wU%2FMVauhaB2W0a9VUyb8j%2FA%2Fx%2FGy7DCfZywOlJqL9fgFz2z6VG34ZvTUceO9RVYprtzDneD4dI9e1&X-Amz-Signature=6e6f891868fafd5c403346584817b3ea04327b68a4ed9a4ccf5cb55403dde795&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422W7TL6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPoQoEUzGir7a6RGlJTbtefRy4ziTM82PHTknDxzSGUwIgBk8NhDa%2BOa5fU6ckLynpgJ%2BGEga7AI3%2B0W%2Bdv8XhYvYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKnxaDWwLSp%2Fo%2FsISrcA7LpDjxx5Mi6C7EO7ie9nihmvja8I9wi0dkfNxDr8R7%2B4ZbTyxaSHsB3MDJ5kYG5lH47kQuqr62HayI3klNygX2yqKGT%2BcKO313VeBrv%2BLG9k6T9ZXwOT2bWDf41lwhXOPBkobXH%2FVhdSNIKYqjHap1RFVxniwQL1PW%2BLS%2BhZoIGpH8MpY2i%2FFyHNtyP7OxswbiX8RXrkUdBPraDYehVfKpjT9P9Eb087l6sODlHZHEz0VqbU%2BsFgIdBPW0%2FOc9Od0%2FVv%2Fx26rGynQmQerEnBGRrjI98vc2rrygmcYUew559y93e6YggnBNSxY0TMPkEIS7QEpHIGmk2xehdRQLDvv8XvOs7Y%2BEiUc3E3sVpOy64FXDSZSYtrOendY49wMDiR107%2Bnp7Pa7JO%2Faqr4roEP7qBJci%2FxJ3x5ZnaKxHvhpteZi7cEhedXGs9N4X%2BlqunxaNGbl7sIDh5IMdiB98PnulP4f9x9r7Of3wRcfxA4ETWTBGuVodkXD3CXHPUfQPOxrfTrKiAV8NkCWVcTnX0%2F5MNRqzddqPgMzbISddyCz2XJ5dcbG0A8y7Lu8VNrKz1Qm6sb0OjveVvy6SMZ6NFXO2onFYpDM8knRabqNu9MCrrAvp0%2BpFXy3o2NJtMJ3XpMAGOqUBsg4ty2BmsIYO%2F5hGIx9oPqYr7JBypbL35XUDrBkf0Oj7gqSCedwyd1vEtLtNnfgtweH4RIyaLwml8eFrOebACNqLskCXoTE%2BOfJUqB%2FUTkUs44ylfCw%2BovSL%2BM9VZlCA9v50dzDwOOLFPR7wU%2FMVauhaB2W0a9VUyb8j%2FA%2Fx%2FGy7DCfZywOlJqL9fgFz2z6VG34ZvTUceO9RVYprtzDneD4dI9e1&X-Amz-Signature=f29b1a7b9e77e38f3d54676b64268b22e86804b8a9a62ebfcdb9ad3ba7cfff6c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422W7TL6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPoQoEUzGir7a6RGlJTbtefRy4ziTM82PHTknDxzSGUwIgBk8NhDa%2BOa5fU6ckLynpgJ%2BGEga7AI3%2B0W%2Bdv8XhYvYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKnxaDWwLSp%2Fo%2FsISrcA7LpDjxx5Mi6C7EO7ie9nihmvja8I9wi0dkfNxDr8R7%2B4ZbTyxaSHsB3MDJ5kYG5lH47kQuqr62HayI3klNygX2yqKGT%2BcKO313VeBrv%2BLG9k6T9ZXwOT2bWDf41lwhXOPBkobXH%2FVhdSNIKYqjHap1RFVxniwQL1PW%2BLS%2BhZoIGpH8MpY2i%2FFyHNtyP7OxswbiX8RXrkUdBPraDYehVfKpjT9P9Eb087l6sODlHZHEz0VqbU%2BsFgIdBPW0%2FOc9Od0%2FVv%2Fx26rGynQmQerEnBGRrjI98vc2rrygmcYUew559y93e6YggnBNSxY0TMPkEIS7QEpHIGmk2xehdRQLDvv8XvOs7Y%2BEiUc3E3sVpOy64FXDSZSYtrOendY49wMDiR107%2Bnp7Pa7JO%2Faqr4roEP7qBJci%2FxJ3x5ZnaKxHvhpteZi7cEhedXGs9N4X%2BlqunxaNGbl7sIDh5IMdiB98PnulP4f9x9r7Of3wRcfxA4ETWTBGuVodkXD3CXHPUfQPOxrfTrKiAV8NkCWVcTnX0%2F5MNRqzddqPgMzbISddyCz2XJ5dcbG0A8y7Lu8VNrKz1Qm6sb0OjveVvy6SMZ6NFXO2onFYpDM8knRabqNu9MCrrAvp0%2BpFXy3o2NJtMJ3XpMAGOqUBsg4ty2BmsIYO%2F5hGIx9oPqYr7JBypbL35XUDrBkf0Oj7gqSCedwyd1vEtLtNnfgtweH4RIyaLwml8eFrOebACNqLskCXoTE%2BOfJUqB%2FUTkUs44ylfCw%2BovSL%2BM9VZlCA9v50dzDwOOLFPR7wU%2FMVauhaB2W0a9VUyb8j%2FA%2Fx%2FGy7DCfZywOlJqL9fgFz2z6VG34ZvTUceO9RVYprtzDneD4dI9e1&X-Amz-Signature=5a703381fd8763b1aadb369efdcec9e477d9712a4fe8c72770c2d0a1b8697e59&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422W7TL6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDPoQoEUzGir7a6RGlJTbtefRy4ziTM82PHTknDxzSGUwIgBk8NhDa%2BOa5fU6ckLynpgJ%2BGEga7AI3%2B0W%2Bdv8XhYvYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKnxaDWwLSp%2Fo%2FsISrcA7LpDjxx5Mi6C7EO7ie9nihmvja8I9wi0dkfNxDr8R7%2B4ZbTyxaSHsB3MDJ5kYG5lH47kQuqr62HayI3klNygX2yqKGT%2BcKO313VeBrv%2BLG9k6T9ZXwOT2bWDf41lwhXOPBkobXH%2FVhdSNIKYqjHap1RFVxniwQL1PW%2BLS%2BhZoIGpH8MpY2i%2FFyHNtyP7OxswbiX8RXrkUdBPraDYehVfKpjT9P9Eb087l6sODlHZHEz0VqbU%2BsFgIdBPW0%2FOc9Od0%2FVv%2Fx26rGynQmQerEnBGRrjI98vc2rrygmcYUew559y93e6YggnBNSxY0TMPkEIS7QEpHIGmk2xehdRQLDvv8XvOs7Y%2BEiUc3E3sVpOy64FXDSZSYtrOendY49wMDiR107%2Bnp7Pa7JO%2Faqr4roEP7qBJci%2FxJ3x5ZnaKxHvhpteZi7cEhedXGs9N4X%2BlqunxaNGbl7sIDh5IMdiB98PnulP4f9x9r7Of3wRcfxA4ETWTBGuVodkXD3CXHPUfQPOxrfTrKiAV8NkCWVcTnX0%2F5MNRqzddqPgMzbISddyCz2XJ5dcbG0A8y7Lu8VNrKz1Qm6sb0OjveVvy6SMZ6NFXO2onFYpDM8knRabqNu9MCrrAvp0%2BpFXy3o2NJtMJ3XpMAGOqUBsg4ty2BmsIYO%2F5hGIx9oPqYr7JBypbL35XUDrBkf0Oj7gqSCedwyd1vEtLtNnfgtweH4RIyaLwml8eFrOebACNqLskCXoTE%2BOfJUqB%2FUTkUs44ylfCw%2BovSL%2BM9VZlCA9v50dzDwOOLFPR7wU%2FMVauhaB2W0a9VUyb8j%2FA%2Fx%2FGy7DCfZywOlJqL9fgFz2z6VG34ZvTUceO9RVYprtzDneD4dI9e1&X-Amz-Signature=bcf32deff1cd50b33b0dfd1c44bde81b60d0f18d607861acb969130817e07d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
