---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PJI56W%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDkRX94FtrpML2HROaN8DPSphsl25hEGbwv%2FS6XG8pZuAIhANi3WhPpPAA4xBkJ2megQ8wvh85KpOPdvbQZjgItNX9KKv8DCF0QABoMNjM3NDIzMTgzODA1Igwm0A%2FH3hNCQvhh740q3APaBaFINoNtrtL1rvm34pY5dEW7KhUUCBmY9scjcOCsUQoA5WHvI1qrJ4iz6HJBtquPZ4HQ55WiiAvryCihZ3N7DQ5GLBd4HHcFW5nsX4OC%2BpkpZv8%2BpBE1NbbRi1JdkIWcsrjNQ7wyi20kKitRJrIASEKTyuuIjj%2BbMvU0AgTJvDqhgG5kKnMluiQwCmXFPBlwx4oPobvLXqBVda%2FwYvcbg60ucGyBLymzGEUM8BQgwMuTSBdVfa9DemjevG2IVuiFPKB7619OzagVZ1FtFIkvOUdX9DhBwwvjBZS5jZeiCO5vGo2Ny0ezETQ%2FZ96hi7rPB%2F%2Fn0OXvvLNEtva%2FsHq32uGj6cCt7bXBLCryGgnVVQJ5ECfaucnkv4wzU3H2sDdnhH3%2BJeCvwTJIjOFsBGkrjgnRhFhqkBs6Blq411Qu55uAIqzh9m5VqTmlgs2xXbToCpwPt%2B2BI7sAPOmvFv9T5oF8ciDYXQir7ik6Y4lLDwlwzZdUyWQIbiGRPtWYChBck5nkZ3ZYP2GUdaAsO%2BqTIBh%2BpDPVmCZqfiXsQkSYrQSxiW1pGjwHH2IgAENeAVFSKEb1JHzHbqLim3kLKAfNJIvYArLRopIejn7Cw63Rhg8yiBCUUOluUU1ZLzCIt%2FzEBjqkASEz7r8lzyv4QScwcwmmYrCItbH2M8j8ryVj1scjQW%2BycbhY0PkrJtjwYYP85YCQDxkonT0qTb3TQ%2FvNzaffEsqgMuGJqDRaYybega1K3s53GiRTCZO4oFu2gI7r4BCPlNCXkWKDIvXIP47knQI9n1bhSkhA4rS%2FdU6RhBnn%2BmS8guF1hZBj2Ntp6ddgkRScmnZic8zbiG0bcEKQO%2B%2Bg9YB242Nx&X-Amz-Signature=b9afcf2868de71cbc49e51327a9593793af20db6e43f82e4336f24b50e52369e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NU7JPUB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDq%2FmKBuDpgUtrPZcZ1fCj8kd80vHygApJzVMBUMpbcdAiEAp5VGrfyhT7A6SuOZcqEUuAyyWESD3ccuBtI%2FgPW4ajkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGmL6nNM%2BpUAJrlJiCrcA%2FJIJDDQ2NJFUwuPLJ%2Bgx2amIhD6aTqilH%2F%2BZ65yybDXs6t0EOq0h0NvE8JLNbim84yGew%2B0x2OGIDrQ2iZICKiwyKt8lLuMkvJsblMWAu2%2BfrpH%2B%2B1mXoKDp6Gn0z04NzzB%2BnWxUTPzuRW0FctpqZF5KkK%2BKJQ6GtqcNzFKwUjncYZ2syPmq1qF0AfeErICyu5Ekcn4HunaccV%2F3404bPprPLvO%2B%2BEp7vaz5wZT0vgzXJBt5RUWUi8sd6Hh%2BmXamxgHDYw%2B%2B9VGNaS7QHrn1D0HDOYV6Xj6Fw%2B40QyojENgsyA7pbgPczueNK08YLKxsLju8ZNVq%2FTiy9PaC41ds13clnKuyKL6AsQH3zi9rS5A9CHsWjetj9DPjX%2FnZfE1v0uxfDFbXRf%2BmJl%2FSVW8A%2BacQHLzW19yOAzEwWgs4saCoofGXU2XEPmfxPWQ%2FHnr9gJ%2Fhnxe%2FuD8FPkzvvbxHjeNuegtOxncgbiwEEoNDgPRmd77%2BSUBofbFVG8fCJYbcaCrhmDUMHNrYtIrt7KQ5nHSHNim4tkagNALBiiF%2Be7B0Elbq7aWpjYpJVMHRhzCnaV2tLLDM02b%2B6WRM8S7Vhi%2FWKGS%2FHnBachgQPd6wdMgXMrKznpkbMJghLJ5MOy2%2FMQGOqUBhKwdwpGG76K3Fw1o%2F%2BmlUGez4Htp36kQQ8EtqHtQsxreW356HfFo6fP3sYp9ZdUTSo6OnjJD1NwLceDW8CSUAN16vadHxeJoO9Vdn%2Fp2qaIAGQ1fiuMI%2BWvfWYnqDBEy3d1%2FPhrSF%2FUn5sDYmvF93%2FkGtxB0%2FKLe7TRgNwM1%2BqFAk4t%2BiH%2BbLg7U%2Ff4brD2nf7FnSo%2FSYy%2FS34KcZko1ngB8aqAJ&X-Amz-Signature=be17cb67d338f1c3db6aefbc018c6ec8ccd36fd6052f3a115296be1b4093129a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
