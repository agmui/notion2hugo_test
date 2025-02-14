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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q4IIGWI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0e01heaaaBW%2FqSFRFuC%2FwAwUBVYAZ2b3%2F2v2McDDetAiEAw7pE1EMnpg%2FG4gdlRLmVTT%2BF38gJp1TDMk22jgYgSpAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDQrE%2FFiNIS%2BzuRERyrcA%2BdPuoAy4KdQZJ88YhwMy73HWwzHEthS1c5WS5lQ%2Bw9y%2BcYLlxkRYeHzYeufNE4crDTX2OiScXSbtRRAk%2ByVtLrVFwKvXKEu3hanbJlkIJAeDsc9OExeAGqcMWSUqPNLqcdIWS94rGiYyusscaU9HwSv5E6jc55EFiryOJ1iTaQoJZ%2FcMqWx2NKBtMCZ7FHRx%2F2qMedMAEbxvgUqAJ%2BSx37G6HKOubLUsOpaBUBlOSHEzeD7PHeHHIB8QyFsAshENOr8XSU1CzTPTrgz32WXimJDXEZNa%2FY9EypMYmvglKYpRGjQvSA4Ib8nw7pXb%2FPrg7xw8t8eXrdGeDfyewLLoWKwJgh8AJk7dRnnDuNO0orDxCDYRGo%2B3pIknfQxiYz5q8%2BHgNvK11NgEQXGklq1tS0eNsUv05Agqo3HKxEcgJ%2BmasKUOz1txlbvXCYq%2FfhQyyinUqPUto81qQ%2FzYv3y1hqcaHeMcFUZD8mn%2BZ4qh3lNer73crQedLCWxlFC8NkRUBmc5IFZJVWjloGZp2KWSwUv%2Fa5dEYk3GJnpzWaCl6UbQHC2oYx1LmFxLXN5F8muXV4VItxmjbFRka2D4am%2FVepe7XvWhzxJjcvt1Ko9W8OYO7fyphgsTUQQee5pMLOru70GOqUBklpKZxbezL9XLkSRNiLzf4g%2FuFJ4yOmoRngdmFbx5AMyOc0I25PTCcT%2FZMduX15ucUugU%2BKWH4BuT3ru0vE9am8jCw6dv%2BpwmMrJRc4njw0KksxuTM8q8IK4%2FpbhWCNgor3SjcDHJAys1JrOshlHk5yAhq47LYiu28v3Z8BXnWKcBz7hNGifN1X37BVDoIv63swJx%2FN79mG3ClNBOKNG%2BwH5Twl6&X-Amz-Signature=79e50e078dcd6953a516d5611c59d8b83fe10606cf25be09dc34d929dce30bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
