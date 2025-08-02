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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=081b083b387517d6d2517c758cf18b0fa13aaac6b7be11f09ef49294bcf2e48d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=f7197dc5db2f056ceb44d2fe50acd52e3a196cc24e4da1785d19f7f51b498557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=30e96c7e367fed43acc8f7b0675bb7cb2016fca3f1330e486d7d7f06032420e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=040630a2ffb5b99b9e5694bdc07c07e8cecac46a33bdff25e58a964e5357efbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=b539cc1134a4b0b5c6803eba36cd78a65424e55d5260f1da9e99d9c1ca6acdf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=33ba6f90f47fe458454c4e3c04babbce4e96013250f953e594001732c2982590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH3PWO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwx9sxydGUfsPwUd9L2u27qC8bOigFktr2kWV2Vyj0hAiEAvEpoNTWt4hmDKqfIZRqESDSDr3OLBFYbcdcg%2FX4gJ1QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMY%2FuQYlI16XFs9CYircA46qD3zOFgQ5mr8JzYJ73x6e7KQR029Ps8wzene8xByaEBrguB0KgBWv1e3nvvI6MwBHG6AG8m8TpguLMfJZIPlYJXKFzjYWhY1bPX6mdRh%2BxC0eiDEQaetbr46baOXApBTsJPNiL9bAhI13mspKrKmOMrHhyFy7Q5L3uuXbiFV1NdhN9xxJp0gggqXGdrwyE2D63tyz%2Fzj11p0a1oBYKdjSY3%2BmopwYgReD9kLhJxcxfVZUGAsdksUa0S%2FcrXtg9vk20ueRk%2BeLO7H%2FoF3%2BzSOVV0f5BcZycKwM%2FhFXqfbHgPiBlpxWKU06XfDeWzHbFRCysirHLRQml5PF3DJBjtmFE3RaaBP%2BunZGvHentiMco3TKo5vnrPqzAOgomA73%2FEpt%2BASEbC17Ao6pMMCI42xQtezuLsvXTnt%2Bw5SHbHygzRbmLFQ8BhE9GnjD%2FfoPY%2BYwkC9FgzrnCcXtUvOUI3LlCyWGkjuHM%2FhGzaE6jY%2FfrWA1ZaTfRkOTRvVNt1vaJWeZ%2FlsxDO49y8i9KiNE%2FnFTNxVF4dSFreIgUdeFjj1uzeyYn15DWMvZe46%2B4NAcD%2FExlc80jjoy%2FEC4q0pZK21zspie9Eu9Ifr2dAvo%2BGb9FkXkK1QIoU%2FRRSuRMM%2BctsQGOqUBxYv9oTdYVG8%2FEcktVIoiorJkKmYW0h73vN3yT%2FYX5kgJU2WijKtzc1zxklP8B2DODELXo%2BVXtQiBUrDcf8eYrE3FO%2Buk8xTAY%2BtUvxFwxubwVy4OEea77NfHXxY4J7bVf3%2B15SEseJ%2B3JHHKvIDMKv07FZBCwKqa1pqYKFS5CTBrWMWLWPLeTFYNKAYLgaWG%2BNgMk4JP8glzamUTBIXf%2FtP4NpQi&X-Amz-Signature=08aff4b3ba259a765cf77f4325401144d0510069dec8f4c2d6e02077fbb12837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
