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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICLVK4I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT0GGq8N9HUnkFrTO169obyiOZW6jKBIdnHBxmQwTsEAiEA%2BO6exuhdMwr52xd1fhXgMWTsJAEm8h2A6Wq2HgPOmG0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9mA8C4UdXOYSUU0yrcA3p4hkUHzjemoE56zUReN2nlyQpGgY5n5TEavcbTjdpfsHI6b0e8cDlphezx1eK89TauY97EJi2Xc%2FnC37y2YzyqXD8peM0C1LW0sI%2BXXzeXT0phLjaFl2p7QfZ%2FKi4mUTIf3p6Z7vOCY4ky78GrXaUYIaM3OdDg1iWxjwOk38lz0iID6%2FLeFEuyjrkr1AqJF4DP6eINFPMYfg6UYV9WhOoCyX6ORFvt%2FrF92BsMQKSW%2BABSt5wRhdnf82523aBlywrK6drBQ8%2Fi92Sk0NBW1dWG1wVWnlXMnSYk6QOh1VtUfCTBPFm%2BBgfvODk7tdxGXRDWrX2bzjUDyghOjNoThSYwWIyLZwi3X9FeE4fYZwkAYVZ5eSkLUMsXHQKhoYyw15ciRCxdkwpsH%2FdqZIeKCtYlsUaOtskki9zjO1GioTH4VRVt2EYqDhL%2BC7M5r17fhsfVST38Wa3qkAJ%2Ba2Ff0auRH0kLI5d8h%2BQa5hZGSsdJDcDOjKd%2BRJ%2Fvt96tg8O5rxlO768qTz6Orc7LlpvYCB0%2Bm9PXPX30CUDAbPUCa4yARKoAqAs39UmfbFPjdH8b3ZUzIbRdZok%2BMvQXBRzWA0njX9520SGUvJdooczzXX216qv8xxrlGv519pLCMO6AzMIGOqUBKDX6u82AMS2Rt4iaUSHRUp2rrQv8jIoIHD8CPoWGJ4Zoioe77IOQTMljQX5KMPXtIkspxVVQBozZ1lQjwyoULq6pjEaGq7Bc1na4bUuZaJJlHlfjFiOoU1htksQoZKzzWOIJ7cwga2pj8VGNi3W8tIOaelb6tSrIUzlhkB%2BRmDkeM7nrvET1Ax31%2B5gGxHoUty3UiwsjaOQvHMHOCMtLegek7Caf&X-Amz-Signature=7a44db85070da53bae27fd7ca679cc5f6e64529fd46a4045c706ed7523866e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
