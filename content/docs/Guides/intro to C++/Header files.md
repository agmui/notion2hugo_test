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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMFLWJ6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDwFWxbYnzIGTHjytQL3DAM09drIROP3fjrK2DRPMP9nAiEAmzzCNQt%2BL5%2FFFeP%2B3zGxxBOOywxNZ4s%2BRpKQwYAmbngq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHF3TEKZoKJllMoM6yrcA8dvNln3QFYhOLhHVA7q5UB25Q%2FwP2yISvmomQ7%2Bt6U7OZbUM8dvUyIEKpp00IQ%2BMRaem5LeQiyo%2BJ6IXKs7RcdvtsCy6CzLk6RNSuNl%2B%2BwjLiO56ZdicqlT1IA3LWgxGo%2BXt0dkJZyGTB59DpoOIA6DpYLiOUO7s5kpv6LRux1KYgVBXkgGf8pCNkWL45rsKcrBMNQo0LWOJBBBGbXsvAMBMMe5hO7wQHKTk9wB7W%2FbCMuVTlqhIaf9D84hfIEZ2NwSf1lJDxNgo6GVb%2FRpESXPPpX9xBLknbOMOdMx45h3YEcOeJOQ467cTT9r6RWzaYuSzFTe4UlDozmd6qOukeL85Bwe5e8UEm%2B6%2FXEscgdmfyI2YYYujmpuUZb49NOUxAST9e8%2FjpI6OOEyxoYV0B%2BvVK%2B1QqV8NvG0zJgZJsf1a%2BwjEiLc42VEuYj9f11MgL%2FiG1p1oiv%2BVkgRWQhYgeag2%2FHAf3VW9Bu9JkpGe7A58UK8IV5ZlKpIIq8VXzaKiDE7GVdIKV5RlBlAioSBvONfuGVeOhzyn58%2Br0m59KrA7HxDwZ3O%2ByV%2B%2FVPFd0RpLCXh%2FGyW4aXsLJ2%2BAq5uiBabCgrTXviozVDrWB0AagOqq5GOzMzZwguGCP9rMKazgr4GOqUBwznOkFx1MQo6ZjPzdcwHQZLwwL8KC%2FHMfDo%2BSmpb2rgbojE5G7u%2FqDhrMTudJOLe2MCz%2F58BONOVNqlzd8i8XNg7znaY%2Fp1Y34KqXTqCMc9s9wiCqFsu9RdRag0FdpVfnf6jjA40OENzrxtdSIISOA9GYuLy7O293hwqLSoLk6N1SVa7OaaptNbxUwH47AfSZytxPSXUiMLoTuRGzhr7Bg6whsr8&X-Amz-Signature=e61066430b67569d8edd33ecec164cda24319768586985da88468a7359aa0d37&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
