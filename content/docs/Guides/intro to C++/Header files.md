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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5F5HTJJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCp4WEcfyAeFk%2F0kCsfovCTiOJHNxFY%2FtTsdfgbsg7alAIhAK80JHYK8qoCjX%2BZvuHIq3SFSrrQSUAxFtQNC%2BMARrOaKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvHTzHVn%2FvKPmV%2F4Iq3AMKtevodo4kaA21FZ853xdUbDKw%2B%2BXl7aXQZTocD%2BtFy%2F%2B5kduFuRx8TJM%2F0j5nwsvepqtigNLa53xN45PtBOqux6P5JOTftCdlEp5VEVlMocjPb0N%2FIgKBvgRcjTX16oyTBaoAxYF0iQ84f84JrWbpSrfcc7SxPZY8B%2FZxi%2BUEFtzp%2FjAfw2Cili61wprfoL%2F7c6hHR2%2BKrGZwv3NFEANoVFFaQ69MkHpx35HYNWkBZX9XmlRJldrKsTHBbH%2FHCl4kP7SkfsaFW5OqRVCVghXyS8aDnzO9oEh6Y8xQIIYszWQ53xSmydhRIoZ77wtTFqg%2F1TfyxuZu%2FyWrd1Sp4DZjd0g7ZCmxKLzRygJ7u7m84el8lW4FNs7MDpQOcL%2FPyz%2FIkWpe5txH3iViNVKtPaI9CO11m7RGF8YNxK%2FSvQJ%2FRcFXNzGyFz9wKOk8awo7nJDdb8x1w3KkZIoZ75v6xgL3olrpDdWabW1H5TGx4Mx24z%2FZeHfOKqEtP5X8mjP8IpTZiQaK53Ea8rPr9T2x9B%2FYswxeVGS%2Butq7mAvWyaMDlqkvYmzEUYNmTZAii03GjVmNV64YkidI1TS8Dv3uSUvycvn70dX94SCmOt2q0U7fXQvcsNEj5XFCyaMUoTDrq9PABjqkAe1LWg3W7TW1PYGfsILevOaxbxe776hjgds6rFGX%2FyJLOSJJsdz53KeFcIjn4X2wP2puXAhdR%2FPImgkY2MULgq%2BuDTUG4UO%2BJil2b7Kp%2Fys6q5AhtFNo4GhsvtQf6ko8uWIpIsemQmQmQ3gZrIrOxXm0sgWkCmgL4YOvbVCLa%2B2ZUXuc7J3IhruDOt0BRs13FWuTrzO4zgErhXP4YlMUs6e9JcXV&X-Amz-Signature=7616b01c12ea63db6d383bff78c0a383871bdf6e18041c836ffbd820e3003be7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
