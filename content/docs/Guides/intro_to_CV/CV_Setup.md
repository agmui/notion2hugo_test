---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEX7EZN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIC%2B%2FrvALNRIYqpG5xZ5ndtIiwfcJPoJw9U1dCxmH%2B8DZAiEAzGSUoKXrHhdSqBefwG069v86%2F5GZfF4r9FVk9iF75jIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBfdxY3pOksbTq0XNyrcA4By3QZ%2Bylq3ZUG%2FBhEpPqV473pki2HkT4tZZObz1ArAyJnh3LFwAFIpsqLZA7jYKNAzwtwjeDCOfGjalzrjxbRnzx%2Fq%2BK3M6FzJuvGiu1t7ARrB2OqfFSevYw6ySt47mfL4ZQUt0%2BnDL3uUIxOy%2FYft9BOV8irgsvWhhUB3ejdpQhEA8yvUY9GLcrG8bye3JLcbVt9HNxbWkcXyqNhwgfxZOFqsooVXisZoBM%2FlYSOch%2BaICih6bdNv6niBfDB9e%2F8Rl2YRDFqIjH9EYQLoeqioNleFNXt04wtTvuyflS6dcorKiXltRatUl5zP0rgls%2Bq%2BrsrKhzj7AxGgKHtC8MCbOcl04batexusjWiz3ESPb%2BbglZ2goWa%2Fb3zmoTvqmGLXll%2FOOOrp9qhIfMk5jTrBIcwmdj%2B4xDkxp58onkPySbFNiZKoIx3HoGaiHK8NTkA5NNWlqTDTkgdQdrQ3OI08iHpmznlF%2BtUmz85tUf%2F9yJBzH38WYzmEy5l3jwO8FkZYS6NYw7BgMorqfK6ebJRRJdPm36Y%2BJfE5l34%2FI8MmhXMv7XkOec8QaEI8%2FsJtVb6xrqTgW2rHGU1ix%2BJ%2Bz%2BJvZBmfHeg%2BWHiBcvT7lNMHuPq5BmMlA5KOTCVKMOKtgsIGOqUBjK9EV4JUcwH%2BwGIK94r7BNUOCcgqmPoGNNjuiGXS4vUvqrqrK7OCqiuFVlbZ7Ltd8MFgLp67qtHx5h0gUpvsE3get0XAlGwUPl9kPtinhbN9KAJgNHKzeqzb5A93jzMq5g0hvbjAIdTd2JyV5vc1JKpMfDYSHcLCaZNG5emzrgGjaDxarK0DJUQB5DyjRGFLJUYBx3mhZB6MgLu8G3OmszXdMT%2FW&X-Amz-Signature=27d36d53c693fe0e7ce04389bc3923161ea5072099f334149eb7244d089b765f&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQUPCSIV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD4i30SGira1rCdInrbuPQl3uu1CbZWJ1GM2dawoFPF0gIhAIXlbb6%2FauVuslsagWJG%2B0L%2FAbnYeJhSZ4%2FSgp2vNHnqKv8DCDQQABoMNjM3NDIzMTgzODA1IgyWEF0suIB1JGE9cnUq3AOUuHpZaQmhDdrP%2F5aDOKre23JfMBAkfYMYJRlGajmFJ%2BPjBN107HHbum9Lq73hOaiG%2FHLlDP63nR96mgPUR0nJeI99TpFYenYDw68wZ%2Byo7UIng3OTX3jH6nbNSy22%2BGlE8oBIKDray3uVDSBBVP67qcZKBq2oQtNQbkkxKPNE6IxUYarxe60CbSxBVDwit%2FgIA3o7sZkOo9pKNTrnQp6BMU3dmvPxT4yWPgETRB21Xzif%2BbHwIxhOtao9hxqhSjeZ6IDMX8rFkzxRReQExEB3aWP6s5MY9Z2qWBpQdQwMIz%2BTvp2OQW%2FfejIMFrOF%2FzgfbRjLSNkjtsH2vcA64SykXltfbRq8pbv13VURK1PaYNloFzsLHFASlkJim%2BaULCib1LfQnQH%2FEFPg5zwslVmcdkJTbvD1Bf8T9B6zs5TP6Ttr3qD2RjEIj%2FMfC6wZ3MU13vzxVGyR2ar8hPJfYkCww14u6%2FIkJqP3LysxEYGugzSlucgXr0RIVM3dGKtkngfzsv6xvX%2FSHU6Avtufmrglz2Bz7%2BBbAhUj4u23204FIpA3zZEOy%2FdcNVjlPioRIExSgPf%2Bgj%2F3arhxoFd%2BPnHmE%2F68J6rsiboCngw1RlBPxIzHva6fusK6363VyDCBroLCBjqkARfza0wvQB4EEPKrqqhd8Jo4QeYRIcECWMTUJ%2FvIBYN6fnySHxIc17OgkV1rIUxh%2FeRM5R9nlOf3ktyqzAhmepR5fZVVv01zURmhyyEetuCINED4T%2FK4dWY81fv8bV%2Bl9%2FunQTXLy519E%2B1A79w4sL3PnkSwBdilKu5S697Fka646nVMHNGmynpHyF54eh3v4x%2Ffpzhd%2BtoAFI8Wd2qUWUvXyhQu&X-Amz-Signature=facae18e63a1794a1ecde5fad68bae56364d29dac6af6947831e6ff2195af23d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
