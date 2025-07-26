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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56QEBPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF0LV%2B%2BRbYlXPI1fo%2B8IsoV2y9zRQFdG34JvGCdSTNuNAiEAioRp05%2BQDxzUG9BnOHmD819kPL9osWfLXanZvFlBj%2F8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEc3nalRiR2M%2BBR8ECrcA8bIOlyjISZSGABzNOwM%2BdF7H3FN4lADLvwT2JxX9rJTM9oC0cRRyTOJef4mggdg5lbCe544wX5qu39v1p9uSCwEKuJ6qI6vxShJacNscrsi%2FPgTQKJznr4odV8DNDFo4HqPBjjMtDEg1aBIO%2B%2Fp3muSm7sqW1ulbL4clh7SRxpzGiiU0Fy7V%2BugahrSvNuHy1uiyQZ9fsZCJ%2BTnytCf7UcRhojsCg6lU88lKud71pcwM9f7bSYCgXxjAk%2BUC36TOl6sHHYQ60eONsFRVYnihY9KHXvEDn1Ou3cY%2BTsBnUC7J3BYkxS3vBf0l7DBUamHdpihWdc6bvcB6nwkrsvaNmI%2Fm5YWc%2FfCbfKIBRkoGOuaimGKUccoAClWIE6RDzd3W2bagRMM4ph%2BOlI6HVLaGKOnolYRKHI6RRSNv1BtcX9xj2k2gPnWR4npyBIIiccjSMAQy0N6rUTC9BMlxMQAm80R15Wvv7zUuzDBSO7wH1CJvPlMXcVi73dJdknk7csPH8iL3%2FEbnbEIsIX%2BpS1r%2BewhgwhO662bCixNp58W9o1rKts5p3bJIZ3HEeh%2BDnhnP0hHer7IhbPP7qOgUxO5%2Bi7i8LE%2BB%2FqKR6D%2BVvvbMnpjre3IPkhLNrojJ1MKMNLikcQGOqUBDwRNvPD0L064igmX6Vr3P3zAQdSc57W3JMBPF%2BLLhX4QWsKYBWwi4FYWcULj2Vyu2%2Bc9f6sNF6yOeayRQny%2FgypqkareAyTXRLhNo03j5hBy3quZb2kNep76ENWSyIPAHBQrAYsEwqK5WkkEvXmkDmOOGtKD2CSaTgSJ5X1BDDPZqMEt2qd9Oc%2BDnd5X6Vyvc8H2wWgC%2B4l3NfzrNb%2BEi7Ay9%2FN2&X-Amz-Signature=ecc982ca94e6d54747e07af68b5ad4744d134aa7199fee408c9f8f4a46a1a489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56QEBPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF0LV%2B%2BRbYlXPI1fo%2B8IsoV2y9zRQFdG34JvGCdSTNuNAiEAioRp05%2BQDxzUG9BnOHmD819kPL9osWfLXanZvFlBj%2F8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEc3nalRiR2M%2BBR8ECrcA8bIOlyjISZSGABzNOwM%2BdF7H3FN4lADLvwT2JxX9rJTM9oC0cRRyTOJef4mggdg5lbCe544wX5qu39v1p9uSCwEKuJ6qI6vxShJacNscrsi%2FPgTQKJznr4odV8DNDFo4HqPBjjMtDEg1aBIO%2B%2Fp3muSm7sqW1ulbL4clh7SRxpzGiiU0Fy7V%2BugahrSvNuHy1uiyQZ9fsZCJ%2BTnytCf7UcRhojsCg6lU88lKud71pcwM9f7bSYCgXxjAk%2BUC36TOl6sHHYQ60eONsFRVYnihY9KHXvEDn1Ou3cY%2BTsBnUC7J3BYkxS3vBf0l7DBUamHdpihWdc6bvcB6nwkrsvaNmI%2Fm5YWc%2FfCbfKIBRkoGOuaimGKUccoAClWIE6RDzd3W2bagRMM4ph%2BOlI6HVLaGKOnolYRKHI6RRSNv1BtcX9xj2k2gPnWR4npyBIIiccjSMAQy0N6rUTC9BMlxMQAm80R15Wvv7zUuzDBSO7wH1CJvPlMXcVi73dJdknk7csPH8iL3%2FEbnbEIsIX%2BpS1r%2BewhgwhO662bCixNp58W9o1rKts5p3bJIZ3HEeh%2BDnhnP0hHer7IhbPP7qOgUxO5%2Bi7i8LE%2BB%2FqKR6D%2BVvvbMnpjre3IPkhLNrojJ1MKMNLikcQGOqUBDwRNvPD0L064igmX6Vr3P3zAQdSc57W3JMBPF%2BLLhX4QWsKYBWwi4FYWcULj2Vyu2%2Bc9f6sNF6yOeayRQny%2FgypqkareAyTXRLhNo03j5hBy3quZb2kNep76ENWSyIPAHBQrAYsEwqK5WkkEvXmkDmOOGtKD2CSaTgSJ5X1BDDPZqMEt2qd9Oc%2BDnd5X6Vyvc8H2wWgC%2B4l3NfzrNb%2BEi7Ay9%2FN2&X-Amz-Signature=d63d65839934182682a1325905ff21f8224287d50ee19d0b0d37266dfd6ccce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56QEBPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF0LV%2B%2BRbYlXPI1fo%2B8IsoV2y9zRQFdG34JvGCdSTNuNAiEAioRp05%2BQDxzUG9BnOHmD819kPL9osWfLXanZvFlBj%2F8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEc3nalRiR2M%2BBR8ECrcA8bIOlyjISZSGABzNOwM%2BdF7H3FN4lADLvwT2JxX9rJTM9oC0cRRyTOJef4mggdg5lbCe544wX5qu39v1p9uSCwEKuJ6qI6vxShJacNscrsi%2FPgTQKJznr4odV8DNDFo4HqPBjjMtDEg1aBIO%2B%2Fp3muSm7sqW1ulbL4clh7SRxpzGiiU0Fy7V%2BugahrSvNuHy1uiyQZ9fsZCJ%2BTnytCf7UcRhojsCg6lU88lKud71pcwM9f7bSYCgXxjAk%2BUC36TOl6sHHYQ60eONsFRVYnihY9KHXvEDn1Ou3cY%2BTsBnUC7J3BYkxS3vBf0l7DBUamHdpihWdc6bvcB6nwkrsvaNmI%2Fm5YWc%2FfCbfKIBRkoGOuaimGKUccoAClWIE6RDzd3W2bagRMM4ph%2BOlI6HVLaGKOnolYRKHI6RRSNv1BtcX9xj2k2gPnWR4npyBIIiccjSMAQy0N6rUTC9BMlxMQAm80R15Wvv7zUuzDBSO7wH1CJvPlMXcVi73dJdknk7csPH8iL3%2FEbnbEIsIX%2BpS1r%2BewhgwhO662bCixNp58W9o1rKts5p3bJIZ3HEeh%2BDnhnP0hHer7IhbPP7qOgUxO5%2Bi7i8LE%2BB%2FqKR6D%2BVvvbMnpjre3IPkhLNrojJ1MKMNLikcQGOqUBDwRNvPD0L064igmX6Vr3P3zAQdSc57W3JMBPF%2BLLhX4QWsKYBWwi4FYWcULj2Vyu2%2Bc9f6sNF6yOeayRQny%2FgypqkareAyTXRLhNo03j5hBy3quZb2kNep76ENWSyIPAHBQrAYsEwqK5WkkEvXmkDmOOGtKD2CSaTgSJ5X1BDDPZqMEt2qd9Oc%2BDnd5X6Vyvc8H2wWgC%2B4l3NfzrNb%2BEi7Ay9%2FN2&X-Amz-Signature=55ec4c94c6fa1671850ebbbfc408872bb8f5ad021e1c9b3fa090dab3290d6794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56QEBPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF0LV%2B%2BRbYlXPI1fo%2B8IsoV2y9zRQFdG34JvGCdSTNuNAiEAioRp05%2BQDxzUG9BnOHmD819kPL9osWfLXanZvFlBj%2F8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEc3nalRiR2M%2BBR8ECrcA8bIOlyjISZSGABzNOwM%2BdF7H3FN4lADLvwT2JxX9rJTM9oC0cRRyTOJef4mggdg5lbCe544wX5qu39v1p9uSCwEKuJ6qI6vxShJacNscrsi%2FPgTQKJznr4odV8DNDFo4HqPBjjMtDEg1aBIO%2B%2Fp3muSm7sqW1ulbL4clh7SRxpzGiiU0Fy7V%2BugahrSvNuHy1uiyQZ9fsZCJ%2BTnytCf7UcRhojsCg6lU88lKud71pcwM9f7bSYCgXxjAk%2BUC36TOl6sHHYQ60eONsFRVYnihY9KHXvEDn1Ou3cY%2BTsBnUC7J3BYkxS3vBf0l7DBUamHdpihWdc6bvcB6nwkrsvaNmI%2Fm5YWc%2FfCbfKIBRkoGOuaimGKUccoAClWIE6RDzd3W2bagRMM4ph%2BOlI6HVLaGKOnolYRKHI6RRSNv1BtcX9xj2k2gPnWR4npyBIIiccjSMAQy0N6rUTC9BMlxMQAm80R15Wvv7zUuzDBSO7wH1CJvPlMXcVi73dJdknk7csPH8iL3%2FEbnbEIsIX%2BpS1r%2BewhgwhO662bCixNp58W9o1rKts5p3bJIZ3HEeh%2BDnhnP0hHer7IhbPP7qOgUxO5%2Bi7i8LE%2BB%2FqKR6D%2BVvvbMnpjre3IPkhLNrojJ1MKMNLikcQGOqUBDwRNvPD0L064igmX6Vr3P3zAQdSc57W3JMBPF%2BLLhX4QWsKYBWwi4FYWcULj2Vyu2%2Bc9f6sNF6yOeayRQny%2FgypqkareAyTXRLhNo03j5hBy3quZb2kNep76ENWSyIPAHBQrAYsEwqK5WkkEvXmkDmOOGtKD2CSaTgSJ5X1BDDPZqMEt2qd9Oc%2BDnd5X6Vyvc8H2wWgC%2B4l3NfzrNb%2BEi7Ay9%2FN2&X-Amz-Signature=9dc01e3a0a91e20852c9b3fd384eb36c1ac030f76da70e08d41658d489ef17e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56QEBPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF0LV%2B%2BRbYlXPI1fo%2B8IsoV2y9zRQFdG34JvGCdSTNuNAiEAioRp05%2BQDxzUG9BnOHmD819kPL9osWfLXanZvFlBj%2F8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEc3nalRiR2M%2BBR8ECrcA8bIOlyjISZSGABzNOwM%2BdF7H3FN4lADLvwT2JxX9rJTM9oC0cRRyTOJef4mggdg5lbCe544wX5qu39v1p9uSCwEKuJ6qI6vxShJacNscrsi%2FPgTQKJznr4odV8DNDFo4HqPBjjMtDEg1aBIO%2B%2Fp3muSm7sqW1ulbL4clh7SRxpzGiiU0Fy7V%2BugahrSvNuHy1uiyQZ9fsZCJ%2BTnytCf7UcRhojsCg6lU88lKud71pcwM9f7bSYCgXxjAk%2BUC36TOl6sHHYQ60eONsFRVYnihY9KHXvEDn1Ou3cY%2BTsBnUC7J3BYkxS3vBf0l7DBUamHdpihWdc6bvcB6nwkrsvaNmI%2Fm5YWc%2FfCbfKIBRkoGOuaimGKUccoAClWIE6RDzd3W2bagRMM4ph%2BOlI6HVLaGKOnolYRKHI6RRSNv1BtcX9xj2k2gPnWR4npyBIIiccjSMAQy0N6rUTC9BMlxMQAm80R15Wvv7zUuzDBSO7wH1CJvPlMXcVi73dJdknk7csPH8iL3%2FEbnbEIsIX%2BpS1r%2BewhgwhO662bCixNp58W9o1rKts5p3bJIZ3HEeh%2BDnhnP0hHer7IhbPP7qOgUxO5%2Bi7i8LE%2BB%2FqKR6D%2BVvvbMnpjre3IPkhLNrojJ1MKMNLikcQGOqUBDwRNvPD0L064igmX6Vr3P3zAQdSc57W3JMBPF%2BLLhX4QWsKYBWwi4FYWcULj2Vyu2%2Bc9f6sNF6yOeayRQny%2FgypqkareAyTXRLhNo03j5hBy3quZb2kNep76ENWSyIPAHBQrAYsEwqK5WkkEvXmkDmOOGtKD2CSaTgSJ5X1BDDPZqMEt2qd9Oc%2BDnd5X6Vyvc8H2wWgC%2B4l3NfzrNb%2BEi7Ay9%2FN2&X-Amz-Signature=0befe0fb5cd1ec98dc8c5c8ee33dd7f3589b15a81bd102434fb46c547317ccc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56QEBPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF0LV%2B%2BRbYlXPI1fo%2B8IsoV2y9zRQFdG34JvGCdSTNuNAiEAioRp05%2BQDxzUG9BnOHmD819kPL9osWfLXanZvFlBj%2F8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEc3nalRiR2M%2BBR8ECrcA8bIOlyjISZSGABzNOwM%2BdF7H3FN4lADLvwT2JxX9rJTM9oC0cRRyTOJef4mggdg5lbCe544wX5qu39v1p9uSCwEKuJ6qI6vxShJacNscrsi%2FPgTQKJznr4odV8DNDFo4HqPBjjMtDEg1aBIO%2B%2Fp3muSm7sqW1ulbL4clh7SRxpzGiiU0Fy7V%2BugahrSvNuHy1uiyQZ9fsZCJ%2BTnytCf7UcRhojsCg6lU88lKud71pcwM9f7bSYCgXxjAk%2BUC36TOl6sHHYQ60eONsFRVYnihY9KHXvEDn1Ou3cY%2BTsBnUC7J3BYkxS3vBf0l7DBUamHdpihWdc6bvcB6nwkrsvaNmI%2Fm5YWc%2FfCbfKIBRkoGOuaimGKUccoAClWIE6RDzd3W2bagRMM4ph%2BOlI6HVLaGKOnolYRKHI6RRSNv1BtcX9xj2k2gPnWR4npyBIIiccjSMAQy0N6rUTC9BMlxMQAm80R15Wvv7zUuzDBSO7wH1CJvPlMXcVi73dJdknk7csPH8iL3%2FEbnbEIsIX%2BpS1r%2BewhgwhO662bCixNp58W9o1rKts5p3bJIZ3HEeh%2BDnhnP0hHer7IhbPP7qOgUxO5%2Bi7i8LE%2BB%2FqKR6D%2BVvvbMnpjre3IPkhLNrojJ1MKMNLikcQGOqUBDwRNvPD0L064igmX6Vr3P3zAQdSc57W3JMBPF%2BLLhX4QWsKYBWwi4FYWcULj2Vyu2%2Bc9f6sNF6yOeayRQny%2FgypqkareAyTXRLhNo03j5hBy3quZb2kNep76ENWSyIPAHBQrAYsEwqK5WkkEvXmkDmOOGtKD2CSaTgSJ5X1BDDPZqMEt2qd9Oc%2BDnd5X6Vyvc8H2wWgC%2B4l3NfzrNb%2BEi7Ay9%2FN2&X-Amz-Signature=d8bfdb9bb93a0cce1c5f5ef1f49972147f56b8c0306235841d6426d239d4bd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56QEBPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIF0LV%2B%2BRbYlXPI1fo%2B8IsoV2y9zRQFdG34JvGCdSTNuNAiEAioRp05%2BQDxzUG9BnOHmD819kPL9osWfLXanZvFlBj%2F8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEc3nalRiR2M%2BBR8ECrcA8bIOlyjISZSGABzNOwM%2BdF7H3FN4lADLvwT2JxX9rJTM9oC0cRRyTOJef4mggdg5lbCe544wX5qu39v1p9uSCwEKuJ6qI6vxShJacNscrsi%2FPgTQKJznr4odV8DNDFo4HqPBjjMtDEg1aBIO%2B%2Fp3muSm7sqW1ulbL4clh7SRxpzGiiU0Fy7V%2BugahrSvNuHy1uiyQZ9fsZCJ%2BTnytCf7UcRhojsCg6lU88lKud71pcwM9f7bSYCgXxjAk%2BUC36TOl6sHHYQ60eONsFRVYnihY9KHXvEDn1Ou3cY%2BTsBnUC7J3BYkxS3vBf0l7DBUamHdpihWdc6bvcB6nwkrsvaNmI%2Fm5YWc%2FfCbfKIBRkoGOuaimGKUccoAClWIE6RDzd3W2bagRMM4ph%2BOlI6HVLaGKOnolYRKHI6RRSNv1BtcX9xj2k2gPnWR4npyBIIiccjSMAQy0N6rUTC9BMlxMQAm80R15Wvv7zUuzDBSO7wH1CJvPlMXcVi73dJdknk7csPH8iL3%2FEbnbEIsIX%2BpS1r%2BewhgwhO662bCixNp58W9o1rKts5p3bJIZ3HEeh%2BDnhnP0hHer7IhbPP7qOgUxO5%2Bi7i8LE%2BB%2FqKR6D%2BVvvbMnpjre3IPkhLNrojJ1MKMNLikcQGOqUBDwRNvPD0L064igmX6Vr3P3zAQdSc57W3JMBPF%2BLLhX4QWsKYBWwi4FYWcULj2Vyu2%2Bc9f6sNF6yOeayRQny%2FgypqkareAyTXRLhNo03j5hBy3quZb2kNep76ENWSyIPAHBQrAYsEwqK5WkkEvXmkDmOOGtKD2CSaTgSJ5X1BDDPZqMEt2qd9Oc%2BDnd5X6Vyvc8H2wWgC%2B4l3NfzrNb%2BEi7Ay9%2FN2&X-Amz-Signature=92cf7c9d5f4a50c19e67fae248f85efc217df8b4b87d8bb4fa4579ca61756360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
