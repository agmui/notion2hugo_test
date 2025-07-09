---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIWLS5S%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0DN1EDxhmsVzqRV%2BcHYnSOEcZvZHMEnhikx9LH4E1qAiEA%2FQ6JU7IwVDsWBKkcBL%2Bg1lU4CR8cU65xg%2BitPcMhseMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhfONnrLp0Kb7XqACrcA610uQoOzTrN1sdYO71iezpnBUuyY3WsOlQdD8TOlOzEzdIIRICFnDwWakZPlbIJjyfnwL%2B6EqKaNOx3heyKGzrpmqDmJ5aszFXbXMPkW8xywP91M4it7PpangmofWLt1V6lr7nnNu6JFq5RheTB%2BBQI0Y8lWRy3sxDATyq4zxlGcR8RK9STw0FNHfsfzzm4oxZXTtAXwnawL34I%2F33f0NgDHiGOIGYgCzYHTTi0Gu5HslmOQleTKRLKFZ%2FGmYn2SkZ62X%2BnJQDa5K%2B0adCX97Xg0dkym0HvYWxk%2FpM1y%2B2f%2B0%2F%2FMFd2jUajiVugx7WlH9H6Q%2BsolHNm%2BuJu6Gjo5uxAH7YdDK47lLomsmX6llstkBF5srR1fcUR0gf9RoIw3mOF6K3J3DHD7q2XjcKX9vsOXXgcwoffWMcyRx0UQ4OhjUSFSfUwWZDn074M%2F2zXLm%2FJRyY0965jkilJ0BuXky1TeSjH6h6sEdIQ7WfwdyCegS5GfzBFHrULBmyytsOUy25Vch50yZE9vzWJxlRVW6MBWclmf7RY%2B5wyrheor5FMjGFlzHJ7Oe25WgLo4NpQQFG%2FVSHIN8LX17qWsy2n3Y%2FArplDU5hqttekUGcne%2Fis00%2Buw3E0tzB55EkwMLy9ucMGOqUBsOZigAEcg6vzLwOD5NkGg2goCDlRR54HfCZ3OugHYC4Mg3mmIaLA%2BjyI6PF%2BGiwXQdFnsnpzJF%2BrmRnsbdUYspfTd576UC2ODxs0%2FaJEAyV1%2B0lXddicwrE4woU6z%2Fg2plUs2lSaekDFX%2BleoUS1AxNvvtIeX9w7e0NF%2FxtYOabAyj8YjQQeSI1G2Av1O%2BLIKJIYvecB7R%2FAhe12ZBhtb1bJX67i&X-Amz-Signature=5ceef5e101ac54133a673e9fd1c49a66799e27629b224307eaca89f62444b041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
