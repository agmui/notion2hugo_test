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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JB3IIVP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICDRosEdfG9GmyH4dDETDdrTjtXDGZ%2FDjc%2F5VD9nSvqtAiEA30o5vfafdHVxKZbILlxNTp21e%2BdQhRIvRs%2F5E%2FIXU50q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOATNhYufXs4LOUZ9SrcA%2BD4M%2FiCfgEGSAQYwQENhBtCdNM%2BXBZ1fpI8UaKGR3deAC%2FvMmQc2K8Gux6NBEiVh5ezX7XLuJy44uiFHnaqQvMJxqFtCyh%2BP9%2FKdQx77G31%2FCp2Qaftnmzsciq%2FXsimDIAS3lfwEhJofUZ0R0oFYgisqVV2qBVVYWECcVYgq3SE4XvVVMHbduRSQE4T9r1wKzsh5AoqJ8chLslEsD5asK0PgUQkUnZ7WK9MicMlXo8DHV0pfy6NZYDGpYFXBibNkfARouR98BcD7RXYcWp1Hp6MKPQtjb%2FUQMXjqiv1iiy49Wi7SF0ItG6fnPCbBbT9xrSfRGz%2B%2FaKW7Sk9mXeUuidDm7rgxi7EB1rYukaCUbrCJETVVeq%2FCd6IkIcPV6ss3EazBqSiBdmQsw4GfUcM%2BO9ZY96YeAXOvuVktaPpQJTd%2B4tAysLzunhocNT7LxeeOcoscLF9wNqE7FMAt5jf4AX2LKIiodIbBhA8Lr9CJpyM%2Fc5JPMc%2BcC2H99una%2B8G42mBoMPbNIytKYe4S%2FquUuQ6FLtl11nRSVkwts73u3Vtw%2BWNwejTjjwmbygP6%2FBfe8DmYx%2F0bBGTEKVVaFNObRE%2Fip3GwYgOmOsULOCADD9aAOXovXKw7cnryq13MLfJmcEGOqUBTJhvLtlqPn7d7aQCKW6yByf3ra9hIowuVkuNbQ2P0lkFp26bxF%2Ft93kY83m9t7Ga9SKbuB0pVFxi%2FDLhRzIH9FC0zqgPNFHv3qZOmSLUN54ytRakj8K3ZTC1wLgE9RlYe8it9cTX9%2B3B9FqG5TnVuEvb3I4Ja6PEKKaWBJYRPT5mf01%2Bfc%2Bz8fed6jvYXgzKkEt%2BfdmocGEBMTV1ufPUOHX3LB4%2F&X-Amz-Signature=f56f8a7330ed0966e3b932a69e18152da740e12327387a53d17aaa38beed7a25&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
